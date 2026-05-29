---
title: "TCX2101 | CT3 Helpsheet (A4 Double-Sided)"
slug: "nus-bit-tcx2101-ct3-helpsheet"
date: 2026-04-05
description: "A4 double-sided helpsheet for CT3 (13 Apr). Scope: 5.1–7.6 (Linear Algebra)."
tags: ["nus", "math", "linear-algebra", "cheatsheet", "tcx2101", "ct3"]
categories: ["Education", "Mathematics"]
math: true
draft: false
---

> **TCX2101 (NUS Math) series:** [Notebook]({{< ref "tcx2101-notebook" >}}) · [Calculus (1.1-3.4)]({{< ref "tcx2101-calculus-cheatsheet" >}}) · [Calculus (3.5-4.11)]({{< ref "tcx2101-calculus-cheatsheet-ct2" >}}) · [CT2 helpsheet]({{< ref "tcx2101-ct2-helpsheet" >}}) · **CT3 helpsheet (current)** · [Finals helpsheet]({{< ref "tcx2101-finals-helpsheet" >}})

<style>
@page { margin: 10mm; }
@media print {
  /* Hide ALL theme chrome — sidebars, toolbar, footer, related, comments */
  .left-sidebar, .right-sidebar, .sidebar,
  .toc-left-sidebar,
  #TableOfContents, .widget--toc,
  .floating-toolbar, .scroll-to-top, .search-modal,
  .backlinks-section, .backlinks-list, .article-header, .article-footer,
  [class*="backlink"], [class*="mention"],
  .widget--newsletter, .newsletter, [class*="subscribe"], [class*="stay-in-loop"],
  footer, aside, .site-footer, .post-footer,
  .related-content--wrapper, .subscribe-form,
  [class*="share"], [class*="social"],
  [class*="copyright"], [class*="license"], [class*="prev-next"],
  .inline-comment-popup, .ic-floating-pill,
  .article-page .main-article > :last-child ~ * { display: none !important; }
  /* Kill flexbox 3-column layout — force single column full-width */
  html, body, main, article, div, section {
    min-height: 0 !important; height: auto !important;
  }
  main, .main-article, .article-content, .main-container, .container, body {
    flex: initial !important; flex-grow: 0 !important;
    display: block !important;
    max-width: 100% !important; width: 100% !important;
    padding: 0 !important; margin: 0 !important;
    gap: 0 !important;
  }
  body, .main-article { font-size: 8pt !important; line-height: 1.15 !important; }
  h2 { font-size: 10pt !important; margin: 2rem 0 1px !important; }
  h3 { font-size: 9pt !important; margin: 2px 0 1px !important; }
  h4 { font-size: 8.5pt !important; margin: 2px 0 0 !important; }
  table { font-size: 7.5pt !important; margin: 1px 0 !important; }
  td, th { padding: 1px 3px !important; }
  p, blockquote { margin: 1px 0 !important; }
  blockquote { padding: 1px 6px !important; }
  ul, ol { margin: 1px 0 !important; padding-left: 14px !important; }
  li { margin: 0 !important; }
  hr { margin: 2px 0 !important; border: none; border-top: 0.5px solid #999; }
  .katex-display { margin: 1px 0 !important; }
  h2, h3, h4 { page-break-after: avoid !important; }
}
</style>

> **Current focus:** [TCX2101 Finals Helpsheet (Apr 28 exam)]({{< ref "tcx2101-finals-helpsheet" >}}). This page kept for history and cross-reference.

## 1. RREF & Linear Systems (Q1)

| Concept | Details |
|---|---|
| **RREF** | REF + leading 1s + zeros above pivots too |
| **Pivot / Free** | Pivot col = leading 1 (forced). Free col = no leading 1 (choose s,t,…). #free = #vars − #pivots |
| ⚠️ | RREF ≠ identity when free vars exist — leading 1s don't need diagonal |
| ⚠️ | Solve for **PIVOT** vars, not free vars |
| **1. xₚ** | Set free vars = 0, read RHS at pivot rows (0 at free positions) |
| **2. Dir. vectors** | Per free var: pivot-row entries, flip sign → pivot slots. That free = 1, others = 0 |
| **3. Combine** | x = xₚ + sv₁ + tv₂ + … |
| **Result** | 0 free = Unique · 1 free = Line · 2 free = Plane · Zero row but RHS ≠ 0 → no solution |


## 2. Determinants & Invertibility (Q2)

### Method Choice by Size

- **2×2:** $\det = ad - bc$ (**minus**, not plus!)
- **3×3:** cofactor expansion — pick row/col with **most zeros** (sign: checkerboard +-+-)
- **4×4:** **row reduce to triangular** (track sign flips from swaps, scalar pulls from scaling)

### Determinant Properties

| Formula | Result |
|---------|--------|
| $\det(kA)$ | $k^n \det(A)$ — NOT $k\det(A)$! Each of $n$ rows gets $\times k$ |
| $\det(AB)$ | $\det(A)\det(B)$ |
| $\det(A^{-1})$ | $1/\det(A)$ |
| $\det(A^n)$ | $\det(A)^n$ |
| $\det(A^T)$ | $\det(A)$ |
| $\det(-M)$ | $(-1)^n\det(M)$ — even $n$ (4×4): sign **stays**! |
| $\det(A^T A^{-1})$ | $= 1$ always (for invertible $A$) |
| ⚠️ Triangular | det = diagonal product. **Only** triangular! |

- Simplify first: $M^2 M^{-1} = M$, then $\det = \det(M)$
- ⚠️ det is **NOT** linear: $\det(A+B) \neq \det(A) + \det(B)$. Try $A=B=I$: $\det(2I)=4 \neq 2$
- ⚠️ $\det(A)=0,\ \det(B)=0 \not\Rightarrow \det(A+B)=0$. Try $A=[[1,0],[0,0]],\ B=[[0,0],[0,1]] \Rightarrow A+B=I$

### 2×2 Inverse

$A = [[a,b],[c,d]] \Rightarrow A^{-1} = \frac{1}{ad-bc} \cdot [[d,-b],[-c,a]]$ — swap diagonal, negate off-diagonal

### Invertibility — Package Deal (flip one, all flip)

| ✅ Invertible | ❌ Not invertible |
|---|---|
| $\det(A) \neq 0$ | $\det(A) = 0$ (regardless of zero entries) |
| RREF $= I_n$ | RREF has zero row |
| All $n$ columns have pivots | A column has no pivot |
| No free variables | Free variables exist |
| $A\mathbf{x}=\mathbf{0}$ only $\mathbf{x}=\mathbf{0}$ | $A\mathbf{x}=\mathbf{0}$ has other/inf many solutions |
| Columns linearly independent | Columns dependent |

### Linear Independence Test

Put vectors as **columns**, row reduce, count pivots.
- Every column has pivot → **independent**
- Any column without pivot → **dependent** (that vector = combo of pivot columns)
- Contains **0** = (0,…,0) → **always dependent**
- ⚠️ Pairwise non-scalar ≠ independent. **Always use pivot-count**, never pairwise check.


## 3. Definitions (Vector Spaces)

| Term | Meaning |
|---|---|
| **Subspace** | Flat through origin, closed under + and scalar × |
| **Span** | All combinations $c_1 v_1 + \cdots + c_k v_k$ |
| **Basis** | Independent set that spans $V$ (no redundant vectors) |
| **Dimension** | Number of vectors in a basis |


## 4. Subspace Proof — Worked Example: $V = \{(x,y,z) : 2x - y + z = 0\}$

> Homogeneous $(= 0)$: always a subspace. **Non-homogeneous** $(\neq 0)$: **never** ($\mathbf{0}$ fails).
> For 2+ defining equations: check **ALL** equations in each closure step.

**(i) Zero vector:** $2(0) - 0 + 0 = 0\ \checkmark$. So $\mathbf{0} \in V$.

**(ii) Closed under $+$:** Let $\mathbf{u}, \mathbf{v} \in V$. Then $2u_1 - u_2 + u_3 = 0\ \ldots(1), \quad 2v_1 - v_2 + v_3 = 0\ \ldots(2)$. Consider $\mathbf{u}+\mathbf{v}$:
$$2(u_1+v_1) - (u_2+v_2) + (u_3+v_3)$$
$$= (2u_1 - u_2 + u_3) + (2v_1 - v_2 + v_3) \quad [\text{regroup}]$$
$$= 0 + 0 \quad [\text{by }(1),(2)]$$
$$= 0\ \checkmark \quad \therefore\ \mathbf{u}+\mathbf{v} \in V.$$

**(iii) Closed under scalar $\times$:** Let $\mathbf{u} \in V$, $c \in \mathbb{R}$. Then $2u_1 - u_2 + u_3 = 0\ \ldots(3)$. Consider $c\mathbf{u}$:
$$2(cu_1) - (cu_2) + (cu_3)$$
$$= c(2u_1 - u_2 + u_3) \quad [\text{factor } c]$$
$$= c \cdot 0 \quad [\text{by }(3)]$$
$$= 0\ \checkmark \quad \therefore\ c\mathbf{u} \in V.$$

$\therefore V$ is a subspace of $\mathbb{R}^3$.


## 5. Basis from Equation

> 🎯 Variables **not in** the equation are automatically **FREE**. dim(V) = n − (#independent equations).
> From RREF → pivot/free already decided. From raw equation → isolate any variable with nonzero coefficient.

**Example** ($\mathbb{R}^4$, 1 eq — $w$ is free since not in equation):
$V = \{(x,y,z,w) \in \mathbb{R}^4 : x - 2y + z = 0\}$. Solve for $x$: $x = 2y - z$. Let $y = s,\ z = t,\ w = r$ (3 free → $\dim = 3$).

$$(x,y,z,w) = (2s - t,\ s,\ t,\ r) = s(2,1,0,0) + t(-1,0,1,0) + r(0,0,0,1)$$

**Basis** $= \{(2,1,0,0),\ (-1,0,1,0),\ (0,0,0,1)\},\ \dim(V) = 3$


## 6. Span Test — Is $\mathbf{w} \in \text{span}\{\mathbf{v}_1, \mathbf{v}_2\}$?

Stack as augmented $[\mathbf{v}_1 \mid \mathbf{v}_2 \mid \mathbf{w}]$, row reduce. **Ex:** $\mathbf{v}_1=(1,3,2),\ \mathbf{v}_2=(2,-1,4),\ \mathbf{w}=(2,1,5)$:

| | $\mathbf{v}_1$ | $\mathbf{v}_2$ | $\mathbf{w}$ | After row reduce | $\mathbf{v}_1$ | $\mathbf{v}_2$ | $\mathbf{w}$ |
|---|---|---|---|---|---|---|---|
| | 1 | 2 | 2 | → | 1 | 2 | 2 |
| | 3 | -1 | 1 | | 0 | -7 | -5 |
| | 2 | 4 | 5 | | 0 | 0 | **1** |

Row $[0\ 0\ |\ 1]$ = contradiction → $\mathbf{w} \notin \text{span}$. No contradiction → $\mathbf{w} \in \text{span}$.


## 7. Rank-Nullity

$\text{rank}(A) + \text{nullity}(A) = n$ where $n$ = number of columns of $A$. Rank = #pivot cols, nullity = #free cols.

Null space basis: same as §1 vector form but RHS = 0. Coefficient matrix from equations: each equation = 1 row, each variable = 1 column.

> ⚠️ **Verify:** plug each basis vector back into $A\mathbf{x} = \mathbf{0}$. Every row must $= 0$. If not, you flipped a sign.

