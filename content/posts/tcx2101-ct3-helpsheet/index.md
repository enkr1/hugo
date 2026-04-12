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

<style>
@page { margin: 10mm; }
@media print {
  /* Hide ALL theme chrome */
  .backlinks-section, .backlinks-list, .article-header, .article-footer,
  [class*="backlink"], [class*="mention"],
  .widget--newsletter, .newsletter, [class*="subscribe"], [class*="stay-in-loop"],
  footer, aside, .site-footer, .post-footer,
  [class*="related"], [class*="comment"], [class*="share"], [class*="social"],
  [class*="copyright"], [class*="license"], [class*="prev-next"],
  .article-page .main-article > :last-child ~ * { display: none !important; }
  /* Kill min-height + flexbox stretch that forces blank pages */
  html, body, main, article, div, section {
    min-height: 0 !important; height: auto !important;
  }
  main, [class*="main"], [class*="content"], body {
    flex: initial !important; flex-grow: 0 !important;
    display: block !important;
  }
  body, .main-article { font-size: 8pt !important; line-height: 1.15 !important; }
  body { margin: 0 !important; padding: 0 !important; }
  h2 { font-size: 10pt !important; margin: 3px 0 1px !important; }
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
  .main-article { max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
}
</style>

## 1. RREF & Linear Systems (Q1)

| Concept | Details |
|---|---|
| **RREF** | Leading 1s, only nonzero in column (above+below), step right down |
| **Pivot** | Column has leading 1 (forced) |
| **Free** | Column has no leading 1 (you choose = s, t, …). #free = #vars − #pivots |
| ⚠️ | RREF ≠ identity when free vars exist — leading 1s don't need diagonal |
| **1. xₚ** | Set free vars = 0, read RHS at pivot rows (0 at free positions) |
| **2. Dir. vectors** | Per free var: pivot-row entries, flip sign → pivot slots. That free = 1, others = 0 |
| **3. Combine** | x = xₚ + sv₁ + tv₂ + … |
| **Result** | 0 free = Unique · 1 free = Line · 2 free = Plane |
| ⚠️ | Inconsistent: row [0 … 0 | b≠0] → no solution |

---

## 2. Determinants & Invertibility (Q2)

### Method Choice by Size

- **2×2:** $\det = ad - bc$ (**minus**, not plus!)
- **3×3:** cofactor expansion — pick row/col with **most zeros**
- **4×4:** **row reduce to triangular** (track sign flips from swaps, scalar pulls from scaling). Cofactor on 4×4 = slow + error-prone.

**Cofactor sign:** $C_{ij} = (-1)^{i+j} M_{ij}$ (checkerboard)

### Determinant Properties

| Formula | Result |
|---------|--------|
| $\det(kA)$ | $k^n \det(A)$ — $n$ = matrix size |
| $\det(AB)$ | $\det(A)\det(B)$ |
| $\det(A^{-1})$ | $1/\det(A)$ |
| $\det(A^n)$ | $\det(A)^n$ |
| $\det(A^T)$ | $\det(A)$ |
| $\det(I)$ | $1$ |

> ⚠️ **Diagonal product ≠ det** unless **triangular**. Counter-example: the row-swap matrix $[[0,1],[1,0]]$ has diagonal product $= 0$ but $\det = -1$.
> ⚠️ $\det(kA) = k^n\det(A)$, **NOT** $k\det(A)$. Each of $n$ rows gets multiplied by $k$.

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
- Set contains $\mathbf{0}$ → **always dependent**

> ⚠️ **Pairwise non-scalar ≠ independent.** 3 vectors can be dependent even when no two are scalar multiples. **Always use pivot-count**, never the pairwise check. *(Apr 6 class flag.)*
> **Independent ⇔ Invertible** only when **square** ($n$ vectors in $\mathbb{R}^n$). Fewer vectors → independence still testable, invertibility N/A.

---

## 3. Definitions (Plain English)

- **Subspace** $V \subseteq \mathbb{R}^n$: "flat thing through the origin" (line/plane/…), closed under $+$ and scalar $\times$
- **Span**$\{v_1, \ldots, v_k\}$: all combinations $c_1 v_1 + \cdots + c_k v_k$
- **Basis** of $V$: minimal independent set that spans $V$ (every $v \in V$ is a **unique** combo)
- **Dimension**: number of vectors in a basis

> Vectors **in** $V$ are $(x_1, \ldots, x_n)$ that **satisfy the equation**. NOT the coefficients of the equation.

---

## 4. Subspace Proof Template

Given $V = \{\mathbf{x} \in \mathbb{R}^n : [\text{equation} = 0]\}$, show **3 conditions**:

1. **Zero vector** $\mathbf{0} \in V$ (plug in, check)
2. **Closed under $+$:** let $\mathbf{u}, \mathbf{v} \in V$, show $\mathbf{u}+\mathbf{v} \in V$
3. **Closed under scalar $\times$:** let $\mathbf{u} \in V$, $c \in \mathbb{R}$, show $c\mathbf{u} \in V$

> Homogeneous $(= 0)$: always works. **Non-homogeneous** $(\neq 0)$: **never** a subspace ($\mathbf{0}$ fails).

### Worked Example — $V = \{(x,y,z) : 2x - y + z = 0\}$

**(i)** $2(0) - 0 + 0 = 0\ \checkmark$. So $\mathbf{0} \in V$.

**(ii) Closed under $+$:** Let $\mathbf{u}, \mathbf{v} \in V$. Then
$$2u_1 - u_2 + u_3 = 0\ \ldots(1), \qquad 2v_1 - v_2 + v_3 = 0\ \ldots(2)$$
Consider $\mathbf{u}+\mathbf{v}$. Plug into the equation:
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

---

## 5. Basis from Equation

**Recipe:** (1) solve each equation for one variable, (2) write the general vector with **all** substitutions, (3) split into parameter parts → factor → coefficient vectors = basis.

> 🎯 **Free variable rule (CRITICAL):** variables that **don't appear** in any equation are automatically **FREE**. dim(V) = n − (#independent equations).

**Example** ($\mathbb{R}^4$, 1 equation — note $w$ is free since it's not in the equation):

$V = \{(x,y,z,w) \in \mathbb{R}^4 : x - 2y + z = 0\}$

Solve for $x$: $x = 2y - z$. Let $y = s,\ z = t,\ w = r$ (3 free vars → $\dim = 3$).

$$(x,y,z,w) = (2s - t,\ s,\ t,\ r) = s(2,1,0,0) + t(-1,0,1,0) + r(0,0,0,1)$$

**Basis** $= \{(2,1,0,0),\ (-1,0,1,0),\ (0,0,0,1)\},\ \dim(V) = 3$

---

## 6. Span Test

Is $\mathbf{w} \in \text{span}\{\mathbf{v}_1, \mathbf{v}_2, \ldots\}$?

Set up augmented $[\mathbf{v}_1 \mid \mathbf{v}_2 \mid \cdots \mid \mathbf{w}]$ and row reduce.

- **Consistent** → **yes** (coefficients from RHS column = the combo)
- **Contradiction row** $[0\ \cdots\ 0\ |\ b \neq 0]$ → **no**

> ⚠️ **Independence ≠ Span.** Different question, different test.
> Independence: $[\mathbf{v}_1 \mid \cdots \mid \mathbf{v}_k]$ (no augmentation), count pivots.
> Span: $[\mathbf{v}_1 \mid \cdots \mid \mathbf{v}_k \mid \mathbf{w}]$, check consistency.

---

## 7. Rank-Nullity & Null Space Basis

$\text{rank}(A) + \text{nullity}(A) = n$ where $n$ = number of columns of $A$

- $\text{rank}(A)$ = number of **pivot** columns in RREF
- $\text{nullity}(A) = \dim(\text{Nul}(A))$ = number of **free** columns
- $\text{Nul}(A) = \{\mathbf{x} : A\mathbf{x} = \mathbf{0}\}$ (always a subspace)

### Null Space Basis Recipe

1. Row reduce $A$ to RREF
2. Identify pivot cols vs free cols
3. Express pivot vars in terms of free vars (from each nonzero RREF row)
4. For each free var: set it $= 1$, other free vars $= 0$, fill pivot slots from the expression. Free-var positions form an **identity pattern** → independence guaranteed.

> ⚠️ **Sign-error verification (critical):** plug each basis vector back into $A\mathbf{x} = \mathbf{0}$. **Every equation MUST equal 0.** If not, you flipped a sign wrong when rearranging. *(This caught yesterday's $v_2$ bug — 30 seconds to verify, saves the mark.)*
