# Runtime subsystems

Moved verbatim from `CLAUDE.md`. Read when touching Firebase/Firestore, Google One Tap auth, inline comments, or the email subscription form.

## Firebase & Firestore

The blog is statically hosted on GitHub Pages but uses Firestore directly from the browser for dynamic features. Firebase is initialised once in `layouts/partials/head/custom.html`, exposed as `window.firebaseApp` and `window.firestoreDb` for downstream TS modules to consume. Do NOT re-initialise.

**Project:** `hexo-blog-9ccea` (name predates the Hugo migration, so don't rename).

### Firestore collections (rules in `firestore.rules`)

| Collection | Purpose | Read | Write |
|-----------|---------|------|-------|
| `articles/{slug}` | Per-article view counts | public | public increment, no delete |
| `visitor_geo/{docId}` | Country-level visitor counts + coords (powers /visitors/ Cobe globe) | public | public, no delete |
| `comments/{id}` | Inline comments (Lark-style highlight-to-comment) | public | authed only, field-validated |
| `comments/{id}/replies/{id}` | Threaded replies | public | authed only |

### Deploying rules

```bash
firebase deploy --only firestore:rules
firebase deploy --only firestore:indexes
```

**Comment-rule invariants worth knowing before editing `firestore.rules`:**
- Author can edit only `text` + `updatedAt` on their own comment (UID match)
- Any authed user can flip `likes/likedBy/likedByNames` (atomic) or bump `replyCount`
- `affectedKeys().hasOnly([...])` enforces field-level isolation, so adding a new comment field means updating BOTH the validation rule AND any client write paths
- `photoURL` must start with `https://` (blocks data: URIs)

---

## Auth: Google One Tap

Site-wide One Tap login backed by Firebase Auth. Used to gate inline-comment creation.

- **Client ID** lives in `hugo.toml` as `params.googleClientId`, exposed as `window.googleClientId` in `layouts/partials/head/custom.html`
- **Bootstrap** via `layouts/partials/auth/init.html` → `themes/stack/assets/ts/auth-entry.ts`
- **Modules** under `themes/stack/assets/ts/auth/`: `firebase-auth.ts`, `one-tap.ts`, `types.ts`
- **UI** under `themes/stack/assets/ts/auth-ui/` (sidebar login chip + dropdown)
- Loaded on every page, deferred to idle to keep LCP clean (per recent SEO pass)

If One Tap fails to render (browser blocks third-party cookies, etc.), there is a fallback `renderButton` path, see `docs/specs/2026-04-03-auth-renderbutton-fallback-design.md`.

---

## Inline Comments (Lark-style)

Highlight text in an article → comment pops out in the margin. Fully shipped.

- **Spec:** `docs/specs/2026-03-25-inline-comments-design.md`
- **TS modules:** `themes/stack/assets/ts/inline-comments/` (anchoring, positioning, selection, store, ui, utils, types)
- **Styles:** `themes/stack/assets/scss/partials/_inline-comments.scss`
- **Storage:** `comments` collection + `replies` subcollection (see Firestore section above)
- **Auth required** for creating/replying/liking, handled via the One Tap flow above
- **Anchor strategy:** comments store `quotedText` + position; on render, anchoring TS tries to relocate the quote in the current DOM (`anchorStatus: 'active' | 'orphaned'`). Orphaned comments still render but visually detached.

Editing this system: changes to the data shape need matching updates in (a) `firestore.rules` field validators, (b) `inline-comments/store.ts` write paths, (c) `inline-comments/types.ts`.

---

## Email Subscription

Subscribers enter email on article pages → stored in Google Sheets via Apps Script.

- **Google Sheet**: https://docs.google.com/spreadsheets/d/1cwAGBYdaOfSHDkkBtr2PEZoP9GxIQVEB1aPNaT_73kg/edit
- **Apps Script project**: Hugo Blog v1 (attached to the Sheet via Extensions → Apps Script)
- **Form partial**: `layouts/partials/article/components/subscribe.html`
- **Placement**: between related-content and comments (posts + journals)
- **Anti-spam**: time-based bot detection (< 3s) + email validation + rate limit (60s) + dedup
- **Updating Apps Script**: Deploy → Manage deployments → pencil icon → Version: New version → Deploy (keeps same URL)
