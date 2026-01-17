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
│   └── custom.scss         # Ba Zi theme (~1000 lines) - design tokens + overrides
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

The theme is a git submodule pointing to the fork. To customize:

1. **Styling:** Override in `assets/scss/custom.scss` (preferred)
2. **Templates:** Add to `layouts/` to override theme templates (Hugo looks here first)
3. **Theme changes:** Modify the submodule repo directly (rare)

**Template lookup order:** `layouts/` → `themes/stack/layouts/`

## Deployment

Push to `main` → GitHub Actions builds with `hugo --gc --minify` → deploys to GitHub Pages.

Workflow: `.github/workflows/hugo.yml`

## Key Configuration (hugo.toml)

- Main sections: `['posts', 'journals']` (both on homepage)
- Unsafe HTML: Enabled for flexibility
- Build timeout: 300s (image-heavy pages)
- Related posts: Enabled, weighted by tags/categories (threshold: 60)
- Syntax highlighting: Line numbers enabled, uses CSS classes (not inline styles)
