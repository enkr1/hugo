# Architecture and partial map

Moved verbatim from `CLAUDE.md`. Read when you need to locate a directory, layout override or key partial.

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
