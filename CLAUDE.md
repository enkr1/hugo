# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal blog built with Hugo, hosted at `https://blog.enkr1.com/`. Features dual content types: regular blog posts and weekly journal entries. Recently migrated from Hexo. Uses a forked theme (hugo-theme-enkr) with extensive Ba Zi (八字) philosophical styling.

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
hugo new content/journals/journal-YYMMDD/index.md  # New journal entry
```

**Requirements:** Hugo extended v0.154.5+ (SCSS compilation requires extended build)

## Architecture

```
hugo/
├── content/
│   ├── posts/              # Blog posts (~100): algorithms, books, goals, career
│   ├── journals/           # Weekly journals (50+): journal-YYMMDD/ page bundles
│   └── page/               # Static pages: about, archives, search
├── layouts/
│   └── journals/           # Custom templates for journal section
│       ├── list.html       # Journal listing with pagination
│       └── single.html     # Individual journal view
├── assets/scss/
│   └── custom.scss         # Ba Zi theme overrides (700+ lines)
├── themes/stack/           # Forked theme (git submodule → enkr1/hugo-theme-enkr)
├── hugo.toml               # Main configuration
└── migrate.sh              # Hexo → Hugo migration script
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

The `assets/scss/custom.scss` implements a philosophical design system based on Chinese five-element theory:

- **Light mode:** "金明秋水" (Metal generates Water) - glacier silver/wisdom blue
- **Dark mode:** "星渊藏金" (Water nurtures Metal) - abyss black/molten gold
- **2026 Fire year:** Optional enhancement via `data-year-fire="true"` attribute

**Before changing colors**, read the philosophy comments in custom.scss to maintain thematic coherence.

## Theme Customization

The theme is a git submodule pointing to the fork. To customize:

1. **Styling:** Override in `assets/scss/custom.scss` (preferred)
2. **Templates:** Add to `layouts/` to override theme templates
3. **Theme changes:** Modify the submodule repo directly (rare)

## Deployment

Push to `main` → GitHub Actions builds with `hugo --gc --minify` → deploys to GitHub Pages.

Workflow: `.github/workflows/hugo.yml`

## Key Configuration (hugo.toml)

- Main sections: `['posts', 'journals']` (both on homepage)
- Unsafe HTML: Enabled for flexibility
- Build timeout: 300s (image-heavy pages)
- Related posts: Enabled, weighted by tags/categories (threshold: 60)
