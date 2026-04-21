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
```

**Requirements:** Hugo extended v0.154.5+ (SCSS compilation requires extended build)

## Category Generation

**CRITICAL:** Nested categories require manual generation of landing pages.

```bash
# Generate category pages after changing categories
node themes/stack/scripts/generate-categories.js

# Clean all generated category files first (optional)
node themes/stack/scripts/generate-categories.js --clean
```

**When to run:**
- After adding/changing categories in post frontmatter
- After deleting posts with unique category paths
- Before deploying (to ensure category pages are up-to-date)

**What it does:**
- Scans all posts for nested array categories like `["A", "B", "C"]`
- Generates `_index.md` files at `content/categories/a/b/c/`
- Creates browsable category tree at `https://blog.enkr1.com/categories/`

**Important:** This is NOT automated. You must run it manually whenever categories change. The generated files are marked with `_generated: true` in frontmatter.

## Architecture

```
hugo/
├── content/
│   ├── posts/              # Blog posts (~100): algorithms, books, goals, career
│   ├── journals/           # Weekly journals (50+): journal-YYMMDD/ page bundles
│   └── page/               # Static pages: about, archives, search
├── layouts/
│   ├── _default/           # Base template overrides
│   ├── journals/           # Custom journal section templates
│   │   ├── list.html       # Journal listing with pagination
│   │   └── single.html     # Individual journal view
│   ├── partials/           # Template component overrides
│   │   ├── article/        # Article rendering
│   │   ├── article-list/   # List item styling
│   │   ├── footer/         # Footer components
│   │   ├── head/           # Head meta/links
│   │   ├── sidebar/        # Sidebar components
│   │   └── widget/         # Widget overrides
│   └── index.html          # Homepage template
├── assets/scss/
│   └── custom.scss         # Ba Zi theme - design tokens + component overrides (gradual migration to theme)
├── themes/stack/           # Forked theme (git submodule → enkr1/hugo-theme-enkr)
└── hugo.toml               # Main configuration
```

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

The `assets/scss/custom.scss` implements a design system based on Chinese five-element theory (金-水-火).

### Design Tokens (SSOT)

All colors, typography, and spacing are defined as CSS custom properties:

```scss
// Primary palette - use these, don't hardcode hex values
--gold: #8B7355;      // 内蕴金 - Metal/Earth - hovers, selections, CTAs
--water: #1E4B8C;     // 智慧海 - Water - links, tags, code
--fire: #D97706;      // 流年曦 - Fire - click flash, accent

// Typography
--font-display: 'Cormorant Garamond'  // Headings
--font-body: 'Inter'                   // Body text
--font-mono: 'JetBrains Mono'         // Code

// Scale
--font-size-base: 1.6rem              // Base size (16px)
```

**Before changing colors**, read the philosophy comments in custom.scss to maintain thematic coherence.

## Theme Customization

The theme is a **forked repo** (`enkr1/hugo-theme-enkr`) — we own it. Modify the theme directly.

### Preferred approach (since we own the fork):
1. **Styling:** Edit `themes/stack/assets/scss/` directly — no `!important` overrides needed
2. **Templates:** Edit `themes/stack/layouts/` directly, or override in `layouts/` if testing

### MANDATORY: Migrate custom.scss as you go
When touching ANY component style in `custom.scss`, migrate it to the theme as part of that change. Do not add new styles to custom.scss — put them directly in the theme.

**custom.scss keeps ONLY:** `@import "fonts"`, `:root` design tokens, `html` global resets
**Everything else belongs in:** `themes/stack/assets/scss/` (component styles, responsive, widgets, etc.)

This is not a one-time refactor — shrink custom.scss incrementally with every PR that touches styling. Current: ~163 lines (migration largely complete). Target: ~100 lines.

**Template lookup order:** `layouts/` → `themes/stack/layouts/`

## Deployment

Push to `main` → GitHub Actions builds with `hugo --gc --minify` → deploys to GitHub Pages.

Workflow: `.github/workflows/hugo.yml`

## Gotchas

- **Future dates**: Hugo skips posts with `date` in the future. Always check `date` output before setting frontmatter date. Use a time earlier than current time, or run `hugo server --buildFuture`.
- **Date correctness**: Always verify the creation date is accurate before writing. Run `date '+%Y-%m-%dT%H:%M:%S%z'` to get the correct timestamp. Never guess the date/time.
- **ALWAYS scaffold with `hugo new`, never hand-write frontmatter.** The archetype's `{{ .Date }}` produces a full ISO datetime (`2026-04-21T03:15:00+08:00`) — hand-typed frontmatter drops to date-only (`2026-04-21`), breaking sort order and lastmod. Also pre-populates `tags: []` / `keywords: []` / `description: ""` with TODO markers. Check every new post has **datetime + non-empty tags covering the post's core theme words** (e.g. a post about failure MUST tag `failure`).
- **Pre-commit hook enforces the above on new files.** `.githooks/pre-commit` blocks commits that add any `content/*.md` with date-only or empty tags. Existing files are exempt (legacy date-only allowed). First-time setup per clone: `git config core.hooksPath .githooks`. Emergency bypass: `git commit --no-verify`.
- **enableGitInfo = true**: `.Lastmod` comes from git. New uncommitted files won't have a last-modified date.

## Key Configuration (hugo.toml)

- Main sections: `['posts', 'journals']` (both on homepage)
- Unsafe HTML: Enabled for flexibility
- Build timeout: 300s (image-heavy pages)
- Related posts: Enabled, weighted by tags/categories (threshold: 60)
- Syntax highlighting: Line numbers enabled, uses CSS classes (not inline styles)

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
- `youtube.html`, `vimeo.html` — override Hugo built-in embeds

Theme-provided (`themes/stack/layouts/shortcodes/`):
- `quote.html`, `video.html`, `bilibili.html`, `gitlab.html`, `tencent.html`

---

## Zettelkasten Linking

Link posts with `[text]({{< ref "slug" >}})`. Backlinks are automatic.
Link text must say **why to click**, not just "see also".
When writing/editing posts, suggest related posts worth linking.
Rule: link sentence = natural key takeaway or highlight that expresses what the reader gets.
