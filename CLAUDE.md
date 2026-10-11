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

CI runs two Node scripts before `hugo`; run them locally if you want parity:

```bash
# Nested category landing pages (REQUIRED after category changes)
node themes/stack/scripts/generate-categories.js
node themes/stack/scripts/generate-categories.js --clean   # nuke before regenerate

# Recent-changes metadata: populates data/changes.json for "recently updated" UI
node themes/stack/scripts/generate-changes.js              # last 30 days by default
node themes/stack/scripts/generate-changes.js --days=90
```

→ `docs/build-and-theme.md`: what `generate-categories.js` and `generate-changes.js` do and what they write.

## Architecture

```
hugo/
├── archetypes/             # Frontmatter templates (default, journals, journal-note)
├── content/
│   ├── posts/              # Blog posts: algorithms, books, goals, career, NUS
│   ├── journals/           # Weekly + ad-hoc journals: journal-YYMMDD/ page bundles
│   ├── categories/         # Generated nested category landing pages (do not hand-edit)
│   └── page/               # Static pages: archives, profile, search, updated, visitors
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
├── docs/                   # Design docs, specs, plans, Apps Script source; NOT shipped
├── scripts/fix-categories.py  # Ad-hoc Python utilities
├── themes/stack/           # Forked theme (git submodule → enkr1/hugo-theme-enkr), we own it
├── firebase.json + firestore.rules + firestore.indexes.json  # Firestore config
└── hugo.toml               # Main configuration
```

**Key partials (project-level overrides at `layouts/partials/`):**
- `article/components/`: header, footer, breadcrumb, details, subscribe
- `auth/init.html`: bootstraps Google One Tap via `themes/stack/assets/ts/auth-entry.ts`
- `head/custom.html`: fonts, GA4, **Firebase app init (SSOT for `window.firebaseApp` + `window.firestoreDb`)**, Google client ID
- `head/schema.html`: JSON-LD structured data
- `search-modal.html`: cmd+K search modal
- `sidebar/`: left/right sidebars (floating + static variants)
- `recent-updates-popup.html`: reads `data/changes.json` for "recently updated" UI

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
// Primary palette: use these, don't hardcode hex values
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

The theme is a **forked repo** (`enkr1/hugo-theme-enkr`), we own it. Modify the theme directly.

### Preferred approach (since we own the fork):
1. **Styling:** Edit `themes/stack/assets/scss/` directly; no `!important` overrides needed
2. **Templates:** Edit `themes/stack/layouts/` directly, or override in `layouts/` if testing
3. **TypeScript:** Edit `themes/stack/assets/ts/` directly; Hugo Pipes `js.Build` handles bundling (no webpack/vite)

### MANDATORY: Migrate custom.scss as you go
When touching ANY component style in `custom.scss`, migrate it to the theme as part of that change. Do not add new styles to custom.scss, put them directly in the theme.

**custom.scss keeps ONLY:** `@import "fonts"`, `:root` design tokens, `html` global resets.
**Everything else belongs in:** `themes/stack/assets/scss/` (component styles, responsive, widgets, etc.)

Currently 87 lines. If you find yourself adding more than tokens here, you're in the wrong file.

**Template lookup order:** `layouts/` → `themes/stack/layouts/`

### TypeScript Pipeline

Hugo builds TS via `js.Build` (esbuild). → `docs/build-and-theme.md`: entry-point table (custom.ts, main.ts, auth-entry.ts, search.tsx) and notable theme TS modules; read before adding or moving a TS entry.

## Firebase, Auth, Inline Comments

→ `docs/runtime-subsystems.md`: read before touching Firestore rules, One Tap auth, inline comments or `firebase deploy`. Firebase is initialised once in `head/custom.html`; never re-initialise.

---

## Deployment

Push to `main` → GitHub Actions builds with `hugo --gc --minify` → deploys to GitHub Pages. Push deploys in 4-20 min (one run took 19m); poll the live URL, then `gh run list` if it looks stuck.

Workflow: `.github/workflows/hugo.yml`. Pipeline: install Hugo extended → checkout submodules (theme) → `npm ci` in `themes/stack/scripts` → `generate-categories.js` → `generate-changes.js` (non-fatal) → `hugo --gc --minify` → upload to Pages.

Firestore rules/indexes deploy separately via `firebase deploy`; they are NOT part of the GitHub Actions workflow.

## Gotchas

- **Future dates**: Hugo skips posts with `date` in the future, **including same-day future times**. This exact bug hid the parts-split retrospective on 2026-07-10 (post dated 21:30, pushed at 17:2x → deploy silently excluded it while everything else built fine; symptom: "post missing from live site, no errors anywhere"). Rule: frontmatter `date` must be ≤ `date '+%Y-%m-%dT%H:%M:%S%z'` **at commit time**, not just at drafting time. Never round up to a nice-looking time. The future-date backstop in `.githooks/pre-commit` is UNARMED (see the pre-commit bullet below), so check by hand.
- **ALWAYS scaffold with `hugo new`, never hand-write frontmatter.** The archetype's `{{ .Date }}` produces a full ISO datetime (`2026-04-21T03:15:00+08:00`); hand-typed frontmatter drops to date-only (`2026-04-21`), breaking sort order and lastmod. Also pre-populates `tags: []` / `keywords: []` / `description: ""` with TODO markers. Check every new post has **datetime + non-empty tags covering the post's core theme words** (e.g. a post about failure MUST tag `failure`).
- **The pre-commit backstop is UNARMED.** `.githooks/pre-commit` (stdlib Python, no PyYAML) blocks commits that ADD a `content/*.md` with date-only `date`, empty tags or a description outside 50-160 chars (existing files exempt), and any staged add or modify with a future `date`. But local `core.hooksPath` is unset and the global one (`~/.config/git/hooks`) only chains `.git/hooks/pre-commit` (samples only), so it never runs. Stage the post, then run `.githooks/pre-commit` by hand before committing a dated post. Arming it (`git config core.hooksPath .githooks`) would also skip the global commit-msg gate, so that is a separate owner decision. Emergency bypass: `git commit --no-verify`.
- **enableGitInfo = true**: `.Lastmod` comes from git. New uncommitted files won't have a last-modified date.
- **Theme submodule**: `themes/stack` is a git submodule pointing at `enkr1/hugo-theme-enkr`. After cloning, `git submodule update --init --recursive`. After editing theme files, commit/push from inside `themes/stack/` first, then bump the submodule ref in the main repo.

## Key Configuration (hugo.toml)

- Main sections: `['posts', 'journals']` (both on homepage)
- Unsafe HTML: Enabled for flexibility
- Build timeout: 300s (image-heavy pages)
- Related posts: Enabled, weighted by tags/categories (threshold: 60)
- Syntax highlighting: Line numbers enabled, uses CSS classes (not inline styles)
- **Dual menu system:** `[[menu.main]]` (desktop sidebar) and `[[menu.mobile]]` (bottom nav). They are SEPARATE arrays: adding/removing/renaming a menu item requires editing both. Comment in `hugo.toml` calls this out.
- **GA4** ID `G-4N4L18VB12` under `[services.googleAnalytics]`; custom events (`read_depth`, `reading_milestone`, `blog_search`) fire from `layouts/partials/analytics/custom-events.html`

---

## Email Subscription

→ `docs/runtime-subsystems.md`: read before touching the subscribe form or its Apps Script backend.

---

## NUS-Related Content

When creating posts about NUS BIT coursework:

- **Tags**: Module code (e.g. `TCX1002`, `TCX2101`), `NUS`, `NUS-BIT`
- **Categories**: `["Career Development", "Bachelor's Degree", "NUS | Bachelor of Information Technology"]`
- **Link to context**: When relevant, link to session notes:
  ```markdown
  **Context:** [Session notes (for myself)](https://github.com/enkr1/nus-bit-private/blob/main/000_mods/sessions/YYYY-MM-DD/session-notes.md)
  ```

**Workflow:** Session notes → Atomic notes → Blog post emerges when notes cluster.

---

## Shortcodes

Custom overrides in `layouts/shortcodes/`:
- `youtube.html`, `vimeo.html`: override Hugo built-in embeds (lazy-load + privacy-friendly)
- `raw.html`: escape hatch to inject literal HTML without Goldmark mangling

Theme-provided (`themes/stack/layouts/shortcodes/`):
- `quote.html`, `video.html`, `bilibili.html`, `gitlab.html`, `tencent.html`

---

## Zettelkasten Linking

Link posts with `[text]({{< ref "slug" >}})`.
