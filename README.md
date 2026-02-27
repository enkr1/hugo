# ENKR's Blog

Personal blog by **Jing Hui PANG** — journaling my journey in programming, beatboxing, and personal growth.

🔗 **[blog.enkr1.com](https://blog.enkr1.com/)**

Software engineer at ByteDance, based in Singapore. This blog is where I document my learning — algorithms, architecture decisions, book takeaways, and weekly journals tracking what I'm working on and thinking about.

## Content

- **Posts** — algorithms, book notes, career reflections, tech deep-dives
- **Journals** — weekly personal journals tracking goals and growth

## Built With

- [Hugo](https://gohugo.io/) (extended) with a [forked Stack theme](https://github.com/enkr1/hugo-theme-enkr)
- Deployed via GitHub Actions → GitHub Pages
- Custom Ba Zi (八字) five-element design system

<details>
<summary><strong>Development</strong></summary>

### Prerequisites

- Hugo extended v0.154.5+

### Local Development

```bash
hugo server -D    # Dev server with drafts at localhost:1313
```

### New Content

```bash
hugo new content/posts/my-post/index.md        # Blog post
hugo new content/journals/journal-YYMMDD/index.md  # Journal
./create_journal.sh                               # Quick journal for today
```

### Category Generation

Nested categories require manual page generation:

```bash
node themes/stack/scripts/generate-categories.js
```

Run this after changing categories in post frontmatter.

### Project Structure

```
content/
├── posts/       # Blog posts (page bundles)
├── journals/    # Weekly journals (page bundles)
└── page/        # Static pages (about, archives, search)
layouts/         # Template overrides
assets/scss/     # Custom styling (Ba Zi design tokens)
themes/stack/    # Forked theme (git submodule)
```

</details>
