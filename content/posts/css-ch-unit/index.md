---
title: "The CSS ch Unit: Typography-Aware Widths"
date: 2026-01-21 15:30:00
tags:
  - "css"
  - "frontend"
  - "web-development"
  - "typography"
categories:
  - ["Software Engineering", "Frontend"]
subtitle: "Why 72ch beats 720px for readable content"
description: "Learn about the CSS ch unit - a character-based measurement that scales with font size, ensuring optimal reading width regardless of user preferences."
keywords:
  - "CSS ch unit"
  - "typography"
  - "optimal line length"
  - "responsive design"
  - "accessibility"
---

## What is `ch`?

`ch` is a CSS unit based on the **width of the "0" character** in the current font.

```css
1ch = width of "0" character
72ch ≈ 72 zeros wide ≈ ~70-75 characters of typical text
```

## Why Use `ch` Instead of `px`?

The key difference: **`ch` scales with font size, `px` doesn't.**

| Unit | Behavior |
|------|----------|
| `720px` | Fixed - always 720 pixels |
| `72ch` | Scales with font-size |

### The Problem with Fixed Pixels

```
User A (16px font): 720px → ~72 chars/line ✅
User B (20px font): 720px → ~58 chars/line ❌ cramped
User C (14px font): 720px → ~82 chars/line ❌ too wide
```

Users with accessibility settings or zoom get a degraded reading experience.

### The `ch` Solution

```
User A (16px font): 72ch ≈ 720px → ~72 chars/line ✅
User B (20px font): 72ch ≈ 900px → ~72 chars/line ✅
User C (14px font): 72ch ≈ 630px → ~72 chars/line ✅
```

**Characters per line stays constant** - which is what actually matters for readability.

## Optimal Reading Width

Research shows **50-75 characters per line** is optimal for comfortable reading:

- Too wide (>80 chars): Eyes lose track when jumping to the next line
- Too narrow (<45 chars): Constant line breaks disrupt flow
- Sweet spot (~65 chars): Comfortable scanning, good rhythm

## Practical Usage

```css
/* Article content - optimal reading width */
.article-content {
    max-width: 72ch;
}

/* Narrower for mobile */
@media (max-width: 768px) {
    .article-content {
        max-width: 100%; /* Full width, padding handles margins */
    }
}
```

## When to Use `ch`

| Use Case | Unit |
|----------|------|
| **Reading content** (articles, docs) | `ch` ✅ |
| **UI elements** (buttons, cards) | `px` or `rem` |
| **Layouts** (grids, containers) | `%`, `vw`, `fr` |

The `ch` unit shines specifically for **text content width** where character count matters.

## TL;DR

Use `max-width: 72ch` for article content. It respects user font preferences while maintaining optimal readability - the typography-aware way to set width.
