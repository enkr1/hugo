# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal blog built with Hugo, hosted at `https://blog.enkr1.com/`. Features dual content types: regular blog posts and weekly journal entries. Migrated from Hexo. Uses a forked theme (hugo-theme-enkr) with extensive Ba Zi (八字) philosophical styling.

## Commands

```bash
# Development
hugo server                    # Local dev server with live reload
hugo server -D                 # Include draft content

# Build
hugo                           # Build site to public/
hugo --gc --minify             # Production build (matches CI)

# Content creation
hugo new content/posts/my-post/index.md     # New blog post (page bundle)
hugo new content/journals/journal-YYMMDD/index.md  # New weekly journal entry
./create_journal.sh                         # Quick weekly journal creation for today
./create_journal_note.sh                    # Ad-hoc journal with title prompt
./create_journal_note.sh "My Title"         # Ad-hoc journal with inline title
./journal.sh                                # Alias for weekly journal creation
./latest_journal.sh                         # Show the latest weekly journal (week + path)
./latest_journal.sh -o                      #   ...and open the latest in $EDITOR
```

**Requirements:** Hugo extended v0.154.5+ (SCSS compilation requires extended build)

## Build-Time Scripts

CI runs two Node scripts before `hugo` — run them locally if you want parity:

```bash
# Nested category landing pages — REQUIRED after category changes
node themes/stack/scripts/generate-categories.js
node themes/stack/scripts/generate-categories.js --clean   # nuke before regenerate

# Recent-changes metadata — populates data/changes.json for "recently updated" UI
node themes/stack/scripts/generate-changes.js              # last 30 days by default
node themes/stack/scripts/generate-changes.js --days=90
```

**generate-categories.js:**
- Scans posts for nested array categories like `["A", "B", "C"]`
- Generates `_index.md` files at `content/categories/a/b/c/` (marked `_generated: true`)
- Run manually whenever categories change. CI runs it on every deploy, but local builds will be stale.

**generate-changes.js:**
- Walks git history of `content/*.md` over the last N days
- Writes `data/changes.json` (added/removed lines, sections touched per file)
- Consumed by `layouts/partials/recent-updates-popup.html`
- Output is gitignored; CI regenerates it on every build (failure non-fatal: `|| true`)

## Architecture

```
hugo/
├── archetypes/             # Frontmatter templates (default, journals, journal-note)
├── content/
│   ├── posts/              # Blog posts (110): algorithms, books, goals, career, NUS
│   ├── journals/           # Weekly + ad-hoc journals (69): journal-YYMMDD/ page bundles
│   ├── categories/         # Generated nested category landing pages (do not hand-edit)
│   └── page/               # Static pages: about, archives, search, visitors
├── layouts/                # Project-level template overrides (win over theme)
│   ├── _default/           # baseof, list, single, archives, updated
│   ├── journals/           # Custom journal list + single
│   ├── nested-category/    # Nested category list layout
│   ├── page/visitors.html  # Visitor geography page
│   ├── partials/           # See partial map below
│   └── shortcodes/         # youtube, vimeo, raw
├── assets/
│   ├── scss/custom.scss    # Design tokens + Ba Zi seasonal styles (everything else lives in theme)
│   └── ts/                 # Custom TS: code-copy line-strip, infiniteScroll (loaded by theme)
├── static/js/heatmap.js    # Archive activity heatmap (vanilla JS, no build step)
├── data/changes.json       # Build-time generated diff metadata (gitignored)
├── docs/                   # Design docs, specs, plans, Apps Script source — NOT shipped
├── scripts/fix-categories.py  # Ad-hoc Python utilities
├── themes/stack/           # Forked theme (git submodule → enkr1/hugo-theme-enkr) — we own it
├── firebase.json + firestore.rules + firestore.indexes.json  # Firestore config
└── hugo.toml               # Main configuration
```

**Key partials (project-level overrides at `layouts/partials/`):**
- `article/components/` — header, footer, breadcrumb, details, subscribe
- `auth/init.html` — bootstraps Google One Tap via `themes/stack/assets/ts/auth-entry.ts`
- `head/custom.html` — fonts, GA4, **Firebase app init (SSOT for `window.firebaseApp` + `window.firestoreDb`)**, Google client ID
- `head/schema.html` — JSON-LD structured data
- `search-modal.html` — cmd+K search modal
- `sidebar/` — left/right sidebars (floating + static variants)
- `recent-updates-popup.html` — reads `data/changes.json` for "recently updated" UI

## Content Model

**Page Bundles:** Both posts and journals use Hugo page bundles (folder with `index.md` + images).

**Journals Frontmatter:**
```yaml
---
title: "Journal: Week X"
date: 2026-01-11 12:42:15
tags: ["journal"]
categories: ["About Me", "Journals"]
comments: false
---
```

**Permalinks:** Posts at `/:slug/`, journals at `/journals/:slug/`

## Custom Styling: Ba Zi Theme

Design system based on Chinese five-element theory (金-水-火). Tokens live in `assets/scss/custom.scss`; the actual element/colour primitives (`--gold`, `--water`, `--fire`, glass effects, shadows) are defined in the theme at `themes/stack/assets/scss/bazi/scss/_bazi-core.scss` and friends.

### Design Tokens (SSOT)

```scss
// Primary palette — use these, don't hardcode hex values
--gold:  #8B7355;     // 内蕴金 - Metal/Earth - hovers, selections, CTAs
--water: #1E4B8C;     // 智慧海 - Water - links, tags, code
--fire:  #D97706;     // 流年曦 - Fire - click flash, accent

// Typography
--font-display: 'Cormorant Garamond'  // Headings
--font-body:    'Inter'                // Body text
--font-mono:    'JetBrains Mono'       // Code

// Scale
--font-size-base: 1.6rem               // Base size (16px equivalent)
```

**Before changing colours**, read the philosophy comments in custom.scss + `themes/stack/assets/scss/bazi/README.md` to maintain thematic coherence.

## Theme Customization

The theme is a **forked repo** (`enkr1/hugo-theme-enkr`) — we own it. Modify the theme directly.

### Preferred approach (since we own the fork):
1. **Styling:** Edit `themes/stack/assets/scss/` directly — no `!important` overrides needed
2. **Templates:** Edit `themes/stack/layouts/` directly, or override in `layouts/` if testing
3. **TypeScript:** Edit `themes/stack/assets/ts/` directly — Hugo Pipes `js.Build` handles bundling (no webpack/vite)

### MANDATORY: Migrate custom.scss as you go
When touching ANY component style in `custom.scss`, migrate it to the theme as part of that change. Do not add new styles to custom.scss — put them directly in the theme.

**custom.scss keeps ONLY:** `@import "fonts"`, `:root` design tokens, `html` global resets.
**Everything else belongs in:** `themes/stack/assets/scss/` (component styles, responsive, widgets, etc.)

Current: 87 lines (post-trim, see `d362624`). The earlier migration log + 丙午 seasonal block were both removed once migration was complete. If you find yourself adding more than tokens here, you're in the wrong file.

**Template lookup order:** `layouts/` → `themes/stack/layouts/`

### TypeScript Pipeline

Hugo builds TS via `js.Build` (esbuild internally — fast, no external bundler config):

| Entry | Loaded by | Purpose |
|-------|-----------|---------|
| `assets/ts/custom.ts` | theme footer (auto) | code-copy line-number stripping + infinite-scroll bootstrap |
| `themes/stack/assets/ts/main.ts` | theme footer | core theme behaviour (color scheme, smooth anchors, scrollspy, gallery, menu) |
| `themes/stack/assets/ts/auth-entry.ts` | `layouts/partials/auth/init.html` | One Tap + auth UI (fingerprinted, ES2020) |
| `themes/stack/assets/ts/search.tsx` | search page | /search/ page implementation (also used by cmd+K modal) |

Notable theme TS modules: `auth/`, `inline-comments/`, `visitor-count`, `visitor-map`, `waveform`. Edit in place — minification on prod build only (`hugo.IsProduction`).

## Firebase & Firestore

The blog is statically hosted on GitHub Pages but uses Firestore directly from the browser for dynamic features. Firebase is initialised once in `layouts/partials/head/custom.html` — exposed as `window.firebaseApp` and `window.firestoreDb` for downstream TS modules to consume. Do NOT re-initialise.

**Project:** `hexo-blog-9ccea` (name predates the Hugo migration — don't rename).

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
- `affectedKeys().hasOnly([...])` enforces field-level isolation — adding a new comment field means updating BOTH the validation rule AND any client write paths
- `photoURL` must start with `https://` (blocks data: URIs)

---

## Auth — Google One Tap

Site-wide One Tap login backed by Firebase Auth. Used to gate inline-comment creation.

- **Client ID** lives in `hugo.toml` as `params.googleClientId`, exposed as `window.googleClientId` in `layouts/partials/head/custom.html`
- **Bootstrap** via `layouts/partials/auth/init.html` → `themes/stack/assets/ts/auth-entry.ts`
- **Modules** under `themes/stack/assets/ts/auth/`: `firebase-auth.ts`, `one-tap.ts`, `types.ts`
- **UI** under `themes/stack/assets/ts/auth-ui/` (sidebar login chip + dropdown)
- Loaded on every page — deferred to idle to keep LCP clean (per recent SEO pass)

If One Tap fails to render (browser blocks third-party cookies, etc.), there is a fallback `renderButton` path — see `docs/specs/2026-04-03-auth-renderbutton-fallback-design.md`.

---

## Inline Comments (Lark-style)

Highlight text in an article → comment pops out in the margin. Fully shipped.

- **Spec:** `docs/specs/2026-03-25-inline-comments-design.md`
- **TS modules:** `themes/stack/assets/ts/inline-comments/` (anchoring, positioning, selection, store, ui, utils, types)
- **Styles:** `themes/stack/assets/scss/partials/_inline-comments.scss`
- **Storage:** `comments` collection + `replies` subcollection (see Firestore section above)
- **Auth required** for creating/replying/liking — handled via the One Tap flow above
- **Anchor strategy:** comments store `quotedText` + position; on render, anchoring TS tries to relocate the quote in the current DOM (`anchorStatus: 'active' | 'orphaned'`). Orphaned comments still render but visually detached.

Editing this system: changes to the data shape need matching updates in (a) `firestore.rules` field validators, (b) `inline-comments/store.ts` write paths, (c) `inline-comments/types.ts`.

---

## Deployment

Push to `main` → GitHub Actions builds with `hugo --gc --minify` → deploys to GitHub Pages.

Workflow: `.github/workflows/hugo.yml`. Pipeline: install Hugo extended → checkout submodules (theme) → `npm ci` in `themes/stack/scripts` → `generate-categories.js` → `generate-changes.js` (non-fatal) → `hugo --gc --minify` → upload to Pages.

Firestore rules/indexes deploy separately via `firebase deploy` — they are NOT part of the GitHub Actions workflow.

## Gotchas

- **Future dates**: Hugo skips posts with `date` in the future. Always check `date` output before setting frontmatter date. Use a time earlier than current time, or run `hugo server --buildFuture`.
- **Date correctness**: Always verify the creation date is accurate before writing. Run `date '+%Y-%m-%dT%H:%M:%S%z'` to get the correct timestamp. Never guess the date/time.
- **ALWAYS scaffold with `hugo new`, never hand-write frontmatter.** The archetype's `{{ .Date }}` produces a full ISO datetime (`2026-04-21T03:15:00+08:00`) — hand-typed frontmatter drops to date-only (`2026-04-21`), breaking sort order and lastmod. Also pre-populates `tags: []` / `keywords: []` / `description: ""` with TODO markers. Check every new post has **datetime + non-empty tags covering the post's core theme words** (e.g. a post about failure MUST tag `failure`).
- **Archetype `TODO(opus)` markers are AI directives, not human ones.** In `archetypes/default.md` and `archetypes/journals.md`, lines like `description: "" # TODO(opus): generate from highlights + recap` signal that the assistant should fill them when finalising the post. Don't leave them in commits — they fail the spirit of the pre-commit hook even if the regex doesn't catch them.
- **Pre-commit hook enforces datetime + tags on new files.** `.githooks/pre-commit` is stdlib Python (no PyYAML) — blocks commits that ADD any `content/*.md` with date-only or empty tags. Existing files are exempt (legacy date-only allowed). First-time setup per clone: `git config core.hooksPath .githooks`. Emergency bypass: `git commit --no-verify`.
- **enableGitInfo = true**: `.Lastmod` comes from git. New uncommitted files won't have a last-modified date.
- **Theme submodule**: `themes/stack` is a git submodule pointing at `enkr1/hugo-theme-enkr`. After cloning, `git submodule update --init --recursive`. After editing theme files, commit/push from inside `themes/stack/` first, then bump the submodule ref in the main repo. See `docs/FIX_THEME_SUBMODULE.md` if the submodule pointer breaks.

## Key Configuration (hugo.toml)

- Main sections: `['posts', 'journals']` (both on homepage)
- Unsafe HTML: Enabled for flexibility
- Build timeout: 300s (image-heavy pages)
- Related posts: Enabled, weighted by tags/categories (threshold: 60)
- Syntax highlighting: Line numbers enabled, uses CSS classes (not inline styles)
- **Dual menu system:** `[[menu.main]]` (desktop sidebar) and `[[menu.mobile]]` (bottom nav). They are SEPARATE arrays — adding/removing/renaming a menu item requires editing both. Comment in `hugo.toml` calls this out.
- **GA4** ID `G-4N4L18VB12` under `[services.googleAnalytics]` — custom events (`read_depth`, `reading_milestone`, `blog_search`) fire from `layouts/partials/analytics/custom-events.html`

---

## Email Subscription

Subscribers enter email on article pages → stored in Google Sheets via Apps Script.

- **Google Sheet**: https://docs.google.com/spreadsheets/d/1cwAGBYdaOfSHDkkBtr2PEZoP9GxIQVEB1aPNaT_73kg/edit
- **Apps Script project**: Hugo Blog v1 (attached to the Sheet via Extensions → Apps Script)
- **Form partial**: `layouts/partials/article/components/subscribe.html`
- **Placement**: between related-content and comments (posts + journals)
- **Anti-spam**: time-based bot detection (< 3s) + email validation + rate limit (60s) + dedup
- **Updating Apps Script**: Deploy → Manage deployments → pencil icon → Version: New version → Deploy (keeps same URL)

---

## NUS-Related Content

When creating posts about NUS BIT coursework:

- **Tags**: Module code (e.g. `TCX1002`, `TCX2101`), `NUS`, `NUS-BIT`
- **Categories**: `["Career Development", "Bachelor's Degree", "NUS | Bachelor of Information Technology"]`
- **Smart Notes workflow**: Extract atomic notes from sessions first (see global CLAUDE.md at `~/.claude/CLAUDE.md`)
- **Link to context**: When relevant, link to session notes:
  ```markdown
  **Context:** [Session notes (for myself)](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/sessions/YYYY-MM-DD/session-notes.md)
  ```

**Workflow:** Session notes → Atomic notes → Blog post emerges when notes cluster.

---

## Shortcodes

Custom overrides in `layouts/shortcodes/`:
- `youtube.html`, `vimeo.html` — override Hugo built-in embeds (lazy-load + privacy-friendly)
- `raw.html` — escape hatch to inject literal HTML without Goldmark mangling

Theme-provided (`themes/stack/layouts/shortcodes/`):
- `quote.html`, `video.html`, `bilibili.html`, `gitlab.html`, `tencent.html`

---

## Zettelkasten Linking

Link posts with `[text]({{< ref "slug" >}})`. Backlinks are automatic.
Link text must say **why to click**, not just "see also".
When writing/editing posts, suggest related posts worth linking.
Rule: link sentence = natural key takeaway or highlight that expresses what the reader gets.
