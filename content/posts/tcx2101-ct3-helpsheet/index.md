---
title: "TCX2101 | CT3 Helpsheet (A4 Double-Sided)"
slug: "nus-bit-tcx2101-ct3-helpsheet"
date: 2026-04-05
description: "A4 double-sided helpsheet for CT3 (13 Apr). Scope: 5.1–7.6 (Linear Algebra)."
tags: ["nus", "math", "linear-algebra", "cheatsheet", "tcx2101", "ct3"]
categories: ["Education", "Mathematics"]
toc: false
math: true
draft: false
---

<style>
@media print {
  .backlinks-section, .backlinks-list, .article-header, .article-footer,
  [class*="backlink"], [class*="mention"],
  .widget--newsletter, .newsletter, [class*="subscribe"], [class*="stay-in-loop"],
  .article-page .main-article > :last-child ~ * { display: none !important; }
  body, .main-article { font-size: 9pt !important; line-height: 1.3 !important; }
  h2 { font-size: 12pt !important; margin: 6px 0 3px !important; }
  h3 { font-size: 10pt !important; margin: 4px 0 2px !important; }
  table { font-size: 8.5pt !important; margin: 2px 0 !important; }
  td, th { padding: 1px 4px !important; }
  p, blockquote { margin: 2px 0 !important; }
  hr { margin: 4px 0 !important; }
  .main-article { max-width: 100% !important; padding: 0 !important; }
}
</style>

## RREF & Linear Systems (Q1)

### RREF Rules (3 conditions)

1. Each leading entry is **1**
2. Each leading 1 is the **only nonzero in its column** (zeros above AND below)
3. Leading 1s move right as you go down

> REF = zeros below only. R**R**EF = zeros above AND below.

### Pivot vs Free Variables

Scan each **column** of RREF:
- Has leading 1 → **pivot variable** (equation decides)
- No leading 1 → **free variable** (you choose = $s, t, \ldots$)

$\text{#free vars} = \text{#variables} - \text{#pivots}$

### Vector Form from RREF

**$\mathbf{x}_p$:** Set all free vars = 0, read the RHS column (insert 0 at free var positions).

**Direction vectors:** For each free variable column:
1. Read the column entries at each pivot row
2. Move to other side of $=$ (flip sign) → fills pivot var slots
3. Free var itself → 1
4. Other free vars → 0

$$\mathbf{x} = \mathbf{x}_p + s\mathbf{v}_1 + t\mathbf{v}_2$$

| Free vars | Solution type |
|-----------|--------------|
| 0 | Unique ($\mathbf{x}_p$ only, RREF left = $I$) |
| 1 | Line ($\mathbf{x}_p + s\mathbf{v}$) |
| 2 | Plane ($\mathbf{x}_p + s\mathbf{v}_1 + t\mathbf{v}_2$) |

> **Inconsistent:** Row $[0\ 0\ \cdots\ 0\ |\ b]$ with $b \neq 0$ → no solution.

---

## Determinants & Properties (Q2)

### Cofactor Expansion

Pick the row/column with **most zeros**. Sign pattern (checkerboard):

$$C_{ij} = (-1)^{i+j} M_{ij}$$

2×2: $\det = ad - bc$ (**minus**, not plus!)

4×4 → 3×3 → 2×2 (same method, just nesting)

### Determinant Properties

| Formula | Result |
|---------|--------|
| $\det(kA)$ | $= k^n \cdot \det(A)$ where $n$ = matrix size |
| $\det(AB)$ | $= \det(A) \cdot \det(B)$ |
| $\det(A^{-1})$ | $= 1/\det(A)$ |
| $\det(A^n)$ | $= \det(A)^n$ |
| $\det(A^T)$ | $= \det(A)$ |
| $\det(I)$ | $= 1$ |

> $\det(kA) = k^n \det(A)$, **NOT** $k \cdot \det(A)$. Each of $n$ rows gets multiplied by $k$.

### Invertibility

$A$ is invertible $\iff \det(A) \neq 0$

All equivalent:
- $\det(A) \neq 0$
- RREF of $A = I_n$
- $A$ has $n$ pivots
- $A\mathbf{x} = \mathbf{b}$ has unique solution for all $\mathbf{b}$
- $A\mathbf{x} = \mathbf{0}$ has only $\mathbf{x} = \mathbf{0}$
- Columns of $A$ are linearly independent
- Columns of $A$ span $\mathbb{R}^n$

> Zero entries in the matrix does NOT mean not invertible. Only $\det = 0$ matters.

---

## Span, Subspace, Basis (Q3)

### Subspace Proof Template (3 conditions)

Given $V = \{\ \mathbf{x} \in \mathbb{R}^n : [\text{equation} = 0]\ \}$

1. **Zero vector:** Plug in $\mathbf{0}$ → does equation hold?
2. **Closed under $+$:** Let $\mathbf{u}, \mathbf{v} \in V$. Show $\mathbf{u}+\mathbf{v}$ satisfies equation.
3. **Closed under scalar $\times$:** Let $\mathbf{u} \in V$, $c \in \mathbb{R}$. Show $c\mathbf{u}$ satisfies equation.

> Homogeneous $(= 0)$: always works (sum of zeros = zero, scalar $\times$ zero = zero).
> Non-homogeneous $(= 5, 1, \ldots)$: NEVER a subspace ($\mathbf{0}$ fails).

### Span Test

Is $\mathbf{w}$ in $\text{span}\{\mathbf{v}_1, \mathbf{v}_2, \ldots\}$?

Set up $[\mathbf{v}_1\ |\ \mathbf{v}_2\ |\ \cdots\ |\ \mathbf{w}]$ and row reduce.

- Consistent → **yes** (read coefficients)
- Contradiction row → **no**

### Basis from Equation

1. Solve equation for one variable
2. Remaining variables = free parameters ($s, t, \ldots$)
3. Write as linear combination → coefficient vectors = basis

### Dimension

$\dim(V) = $ number of vectors in any basis

- $\dim(\mathbb{R}^n) = n$
- $\dim(\{\mathbf{0}\}) = 0$ (basis = empty set $\emptyset$)
- $\dim(\text{Nul}(A)) = $ #free vars (Rank-Nullity)
- More vectors than $\dim$ → **dependent**
- Equal count + independent → **basis**
- Fewer + independent → can extend to basis

### Linear Independence Check

Put vectors as **columns**, row reduce, count pivots.
- All columns have pivots → **independent**
- A column without pivot → **dependent**

---

_Building as I prep — last updated: 2026-04-05_
