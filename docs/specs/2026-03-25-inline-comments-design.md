# Inline Comments System — Lark Docs Style

**Date:** 2026-03-25
**Status:** Design approved, ready for implementation
**Mockups:** `docs/mockups/inline-comments-live.html` (interactive), `docs/mockups/inline-comments-layout.html` (static)

---

## 1. Problem

Blog readers have no way to leave contextual feedback on specific text. Disqus provides page-level comments at the bottom, but can't reference specific paragraphs, sentences, or phrases. This limits the quality of discussion.

## 2. Solution

A Lark Docs-style inline annotation system. Readers select text, leave a comment, and it appears as a floating card on the right side — visually anchored to the highlighted text. Other readers can reply in flat threads and @mention participants.

## 3. Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| UX model | Lark Docs-style | Select text → popup → floating cards on right |
| Layout | TOC left, article center, comments right | Right side is free space — no sidebar conflict |
| Auth | Google OAuth | Broad audience reach, spam prevention |
| Storage | Firestore real-time (`onSnapshot`) | Already in stack, real-time is near-zero extra cost |
| Framework | Vanilla TypeScript | 0KB framework overhead, best performance |
| Text anchoring | Fuzzy match: `quotedText` + `prefix` + `suffix` | Survives blog edits better than CSS selectors |
| Threading | Flat (master + replies) | Matches Lark, stays readable in narrow panel |
| Highlight color | Single `--gold` (#8B7355) | Consistent with Ba Zi theme |
| Scroll sync | Absolute positioning | Cards float at same Y-offset as their highlight |
| Card actions | 👍 like + 💬 reply on hover | No resolve (admin-only later), no ⋯ more menu |
| Card focus | 4px gold top border (`#f7c948`) | Matches Lark's active card indicator |
| @mentions | Green pill (#34c182 bg, white text, border-radius: 100px) | Matches Lark's mention chip style |
| Avatars | 36px with gradient backgrounds | Lark-style gradient circles |
| Quoted text | opacity: 0.7, gold left bar | Subtle, lets comment text stand out |
| Scope | Reuse `comments` frontmatter flag | No new config surface |
| Commentable | Text selections + click images | Text comments only (no image attachments v1) |
| Moderation | None | Firebase console as admin escape hatch |
| Disqus | Coexist | Don't replace — build new system first |
| Platform | Desktop-only v1 | Mobile needs different UX (bottom sheet), defer |

## 4. Firestore Data Model

### Comments Collection

```
comments/{autoId}
  articleSlug: string               // URL slug, e.g. "understanding-ba-zi"
  quotedText: string                // the selected text
  text: string                      // the commenter's actual comment
  anchor: {
    prefix: string                  // ~30 chars before selection
    suffix: string                  // ~30 chars after selection
  }
  anchorStatus: 'active' | 'orphaned'
  author: {
    uid: string
    displayName: string
    photoURL: string
  }
  createdAt: Timestamp
  updatedAt: Timestamp
  likes: number                     // thumbs-up count
  likedBy: string[]                 // UIDs who liked (won't scale past ~10K, fine for personal blog)
  replyCount: number                // denormalized reply count (cheap now, painful to backfill)
```

**`articleSlug` at runtime:** derived from `window.location.pathname` (e.g. `/elixir-notebook/` → `elixir-notebook`).

### Replies Subcollection

```
comments/{autoId}/replies/{autoId}
  author: {
    uid: string
    displayName: string
    photoURL: string
  }
  text: string
  mentions: Array<{ uid: string, displayName: string }>
  createdAt: Timestamp
  updatedAt: Timestamp
```

### Index

`articleSlug` ASC + `createdAt` ASC on `comments` collection.

## 5. Firestore Security Rules

```javascript
match /comments/{commentId} {
  allow read: if true;

  allow create: if request.auth != null
    && request.resource.data.author.uid == request.auth.uid
    && request.resource.data.author.displayName is string
    && request.resource.data.author.photoURL is string
    && request.resource.data.author.photoURL.matches('^https://.*')
    && request.resource.data.articleSlug is string
    && request.resource.data.quotedText is string
    && request.resource.data.quotedText.size() < 1000
    && request.resource.data.text is string
    && request.resource.data.text.size() > 0
    && request.resource.data.text.size() < 5000
    && request.resource.data.anchorStatus in ['active', 'orphaned']
    && request.resource.data.createdAt == request.time;

  // Split update: author edits text OR any user likes/unlikes
  allow update: if request.auth != null
    && (
      // Author can edit their own comment text
      (request.auth.uid == resource.data.author.uid
        && request.resource.data.diff(resource.data).affectedKeys()
            .hasOnly(['text', 'updatedAt']))
      ||
      // Any authenticated user can like/unlike (atomic ops)
      (request.resource.data.diff(resource.data).affectedKeys()
          .hasOnly(['likes', 'likedBy']))
    );

  allow delete: if false;

  match /replies/{replyId} {
    allow read: if true;

    allow create: if request.auth != null
      && request.resource.data.author.uid == request.auth.uid
      && request.resource.data.author.displayName is string
      && request.resource.data.author.photoURL is string
      && request.resource.data.text is string
      && request.resource.data.text.size() > 0
      && request.resource.data.text.size() < 5000
      && request.resource.data.createdAt == request.time;

    allow update: if request.auth.uid == resource.data.author.uid
      && request.resource.data.diff(resource.data).affectedKeys()
          .hasOnly(['text', 'updatedAt']);

    allow delete: if false;
  }
}
```

**Likes use atomic operations** — client calls `FieldValue.increment(1)` + `FieldValue.arrayUnion(uid)` to avoid race conditions.

## 6. Architecture

### New Files

```
themes/stack/assets/ts/inline-comments/
├── index.ts              # Entry: init, lazy-load, mount
├── auth.ts               # Google OAuth sign-in/sign-out
├── store.ts              # Firestore reads/writes, onSnapshot listeners
├── anchoring.ts          # Text fuzzy matching (find quoted text in DOM)
├── positioning.ts        # Scroll-synced absolute positioning of cards
├── selection.ts          # Text selection detection + popup positioning
├── ui.ts                 # DOM rendering: comment cards, reply boxes, highlights
├── types.ts              # TypeScript interfaces
└── utils.ts              # Shared helpers (timestamps, sanitization, etc.)
```

### Modified Files

| File | Change |
|------|--------|
| `layouts/partials/head/custom.html` | Consolidate Firebase config (single source of truth), fix authDomain mismatch |
| `layouts/partials/article/article.html` | Add `<div id="inline-comments-root">` container |
| `themes/stack/assets/ts/main.ts` | Lazy-load inline-comments module on article pages |
| `themes/stack/assets/scss/` | Comment highlight + panel styles (not in custom.scss) |

### Existing Code to Reuse

- Firebase init singleton: `layouts/partials/head/custom.html:21-38`
- `window.firestoreDb` global
- Color scheme listener: `window.addEventListener('onColorSchemeChange')`
- Design tokens: `--gold`, `--card-background`, `--card-border-radius`, `--shadow-l1`

## 7. Key UX Behaviors

### Text Selection → Comment

1. User selects text in `.article-content`
2. Validate selection: non-empty, not inside `pre`/`code`/`.highlight` (code blocks excluded)
3. "Add comment" popup appears above selection
4. If not signed in, triggers Google OAuth
5. Composer card appears in right panel, positioned at selection's Y-offset
6. User types comment, clicks "Comment"
7. Selected text gets `<mark>` highlight, card animates into position

**Cross-element selection handling:** `Range.surroundContents()` throws when selection spans multiple DOM elements (e.g. across `<strong>`, `<em>`, or `<p>` boundaries). Instead, walk the Range's text nodes with a TreeWalker and wrap each text node individually in its own `<mark>` element sharing the same `data-comment-id`. This is the standard approach used by Hypothesis and other annotation tools.

### Scroll-Synced Positioning

- Comment cards are absolutely positioned in the right panel
- Each card's `top` matches the Y-offset of its corresponding `<mark>` highlight
- Collision resolution: when cards overlap, push down with minimum 8-10px gap
- Article scroll → `requestAnimationFrame` → recalculate card positions
- Panel scroll lerps (linear interpolation at ~12%/frame) for buttery smooth feel
- Card movement: `cubic-bezier(0.25, 0.1, 0.25, 1)` over 400ms for natural deceleration
- Resize: debounced recalculation
- **Performance**: Cache highlight positions in a `Map<commentId, cachedTop>`. Invalidate on resize and content changes. Avoids `getBoundingClientRect()` on every scroll frame with many comments.
- **Dynamic card height**: Use `ResizeObserver` on each card to recalculate positions when card height changes (e.g. reply expansion, new real-time reply)
- **Panel scroll strategy**: Scroll panel to keep the focused/nearest card visible, not proportional ratio sync (avoids wasted space when comments cluster)

### Text Anchoring (Fuzzy Match)

- Store: `quotedText` + 30-char `prefix` + 30-char `suffix`
- On page load: exact substring search in `.article-content`
- Fallback: use prefix/suffix context to narrow search
- Last resort: mark as `anchorStatus: 'orphaned'` — visible in panel, no highlight
- For images: store `img[src]` or `img[alt]` as anchor

### @Mentions

- Type `@` in reply box → dropdown shows thread participants (excluding self)
- Arrow keys to navigate, Enter to select, Esc to dismiss
- Inserted as `@DisplayName` in text
- Rendered as green pill chip (`#34c182` bg, white text, full-round corners)

### Likes

- 👍 button on hover for any comment entry
- Uses atomic Firestore operations: `FieldValue.increment(1)` + `FieldValue.arrayUnion(uid)` for like, `increment(-1)` + `arrayRemove(uid)` for unlike
- One like per user (toggle) — check `likedBy.includes(uid)` client-side before toggling

## 8. Lazy Loading Strategy

1. **Page load**: Zero comment JS. Article renders normally.
2. **`#inline-comments-root` detected**: Dynamic import `inline-comments/index.ts`
3. **Module init**: Firestore listener, fetch comments, render highlights + panel
4. **User clicks "Sign in"**: Dynamic import Firebase Auth SDK
5. **User selects text**: Activate selection popup

Zero weight on pages without `comments: true` in frontmatter.

## 9. Security

- All user text rendered via `document.createElement` + `textContent` (never `innerHTML`) — XSS prevention
- `quotedText` is user-controlled (devtools can modify) — sanitize on render, max 1000 chars
- `author.photoURL` validated as HTTPS-only in Firestore rules
- `author.displayName` validated as string in Firestore rules
- `anchorStatus` validated as enum `['active', 'orphaned']`
- Firestore rules enforce `author.uid == request.auth.uid` on create
- Split update rules: author edits text, any user can like/unlike
- `createdAt == request.time` prevents backdating
- Google OAuth gates all writes — no anonymous spam
- Client-side rate limit: max 1 comment per 10 seconds
- Code blocks (`pre`, `code`, `.highlight`) excluded from commentable regions

## 9b. Error Handling

| Scenario | Behavior |
|----------|----------|
| Firestore unreachable | Show cached comments if available, "offline" badge on panel |
| Comment create fails | Remove optimistic update, show toast error, re-enable submit |
| `onSnapshot` disconnects | Auto-reconnects (Firestore SDK handles this), no UI change |
| Google sign-in popup blocked | Fallback to `signInWithRedirect`, show toast explaining |
| Highlight flash on load | Fade-in highlights with CSS transition after anchoring completes |

## 9c. Dark Mode

Comment UI uses existing theme tokens where possible. New tokens for comment-specific colors:

| Element | Light | Dark | Token |
|---------|-------|------|-------|
| Card background | `#fff` | `var(--card-background)` | reuse existing |
| Card border | `#e0e0e0` | `var(--card-separator-color)` | reuse existing |
| Card text | `#1f1f1f` | `var(--card-text-color-main)` | reuse existing |
| Muted text | `#8f959e` | `var(--card-text-color-secondary)` | reuse existing |
| Active border | `#f7c948` | `#f7c948` | `--comment-active-border` (same both modes) |
| Mention pill bg | `#34c182` | `#2ea872` | `--comment-mention-bg` |
| Mention pill text | `#fff` | `#fff` | same both modes |
| Highlight bg | `rgba(139,115,85,0.12)` | `rgba(139,115,85,0.2)` | `--comment-highlight-bg` |
| Panel background | `#fff` | `var(--body-background)` | reuse existing |

## 9d. Prerequisites (before implementation)

- Enable Google Sign-In in Firebase Console → Authentication → Sign-in method
- Add `blog.enkr1.com` and `localhost` to Firebase Authorized domains
- Resolve `authDomain` mismatch between `head/custom.html` and `visitor-count.ts` (Step 1)

## 10. Implementation Steps (reordered for dependencies)

| Step | Description | Files | Depends on |
|------|-------------|-------|------------|
| 1 | Firebase config consolidation + prerequisites | `head/custom.html`, `visitor-count.ts` | — |
| 2 | Types + Firestore store layer | `types.ts`, `store.ts` | Step 1 |
| 3 | Google OAuth | `auth.ts` | Step 1 |
| 4 | Hugo template integration (container div + lazy-load) | `article.html`, `main.ts` | Step 1 |
| 5 | Text anchoring (fuzzy match + cross-element wrapping) | `anchoring.ts` | Step 4 |
| 6 | Selection detection + popup (excl. code blocks) | `selection.ts` | Step 4 |
| 7 | UI rendering (Lark-style cards, `createElement` only) | `ui.ts` | Steps 2-6 |
| 8 | Scroll-synced positioning | `positioning.ts` | Steps 4, 7 (needs real DOM) |
| 9 | Styling (theme SCSS, dark mode tokens) | theme SCSS | Step 7 |
| 10 | Firestore rules deployment | `firestore.rules` | Step 2 |

## 11. Verification Checklist

- [ ] `hugo server` — comment panel div renders on article pages with `comments: true`
- [ ] Firestore rules pass Firebase console Rules Playground
- [ ] Google sign-in popup works (+ redirect fallback on Safari)
- [ ] Create comment → Firestore doc appears → real-time update on second tab
- [ ] Edit blog post slightly → comment still anchors correctly (fuzzy match)
- [ ] Select text spanning `<strong>`/`<em>` boundary → highlight wraps correctly (no DOMException)
- [ ] Select text inside code block → popup does NOT appear
- [ ] XSS: `<script>alert(1)</script>` in comment → renders as plain text
- [ ] Dark mode toggle → comment panel + highlights respect color scheme
- [ ] Incognito → comments visible read-only, sign-in prompt shown
- [ ] Like a comment as non-author → Firestore accepts the write
- [ ] Disqus still loads below article, no conflicts
- [ ] Scroll article → comment cards track highlight Y-positions smoothly
- [ ] Two comments on adjacent lines → cards push down, no overlap
- [ ] Expand reply → cards below shift down (ResizeObserver)
- [ ] Page load with existing comments → highlights fade in (no flash)

## 12. Future (Not v1)

- Mobile UX: bottom sheet / modal triggered by tapping highlighted text
- Image attachments in comments (requires Firebase Storage)
- Resolve/hide comments via admin management system
- Email notifications for @mentions
- Comment count indicator in article list/cards
- Deep-link to specific comment thread via URL hash
- Author display name sync on auth state change (handles renamed Google accounts)
- Migrate `likedBy[]` to subcollection if any comment exceeds ~10K likes
