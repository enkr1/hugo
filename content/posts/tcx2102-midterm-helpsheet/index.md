---
title: "TCX2102 | Probability & Statistics Midterm Helpsheet"
slug: "nus-bit-tcx2102-midterm-helpsheet"
date: 2026-09-13T03:10:00+08:00
description: "One-A4 single-sided helpsheet for the TCX2102 midterm (Oct 5): counting, probability operators, discrete random variables, and the discrete distribution family map."
tags: ["nus", "probability", "statistics", "helpsheet", "tcx2102", "midterm"]
categories:
  - ["Education", "NUS BIT", "TCX2102"]
toc: true
math: false
draft: true
sheet: helpsheet
sheetCols: 2
---

<div class="print-hide">

**Mon 5 Oct 20:00-21:00 · MPSH1B · Closed book · paper & pen · ONE A4 SINGLE SIDE + calculator — this page IS the sheet**

> **v0 draft.** Written from domain knowledge, not yet reconciled to the decks. Two passes owed before this prints: a **notation pass** against L01-L03 renders (this prof's symbols win over mine), and a **scope pass** once the Canvas syllabus timetable says whether continuous RVs are in.
>
> Closed book inverts three of the open-book sheet rules: no keyword minimap (nothing to point at, memorise WHERE blocks sit instead), no discipline checklist (its premise was open-book), and confusable pairs carry the discriminating formula rather than a prose mnemonic.

</div>

## 1. The four flippables

Every one of these was a measured failure under retrieval, not recognition. Read the right column, infer the left.

| Pair | The discriminator |
|---|---|
| **Independent** vs **mutually exclusive** | Independent: `P(A∩B) = P(A)P(B)`. Mutually exclusive: `P(A∩B) = 0`. Two events with non-zero probability **cannot be both**: exclusivity forces `P(A|B)=0 ≠ P(A)`. |
| **Complement** over a support | `P(X ≥ 1) = 1 − P(X = 0)`. The complement runs over the RV's **whole support**, not over the events named in the question. List the support first, then subtract. |
| **Joint** vs **conditional** vs **marginal** | Joint `P(A∩B)` = both happen. Conditional `P(A|B) = P(A∩B)/P(B)` = the world has shrunk to B. Marginal `P(A)` = sum the joint over every value of the other variable. |
| **Order matters?** | `nPr = n!/(n−r)!` keeps order. `nCr = n!/(r!(n−r)!)` does not. `C(26,2)=325`: divide by `2!` because AB and BA are the same pair. |

## 2. Counting

- **Product rule:** independent stages multiply. `k` stages of `n_i` choices = `n_1 × … × n_k`.
- **Permutation** `nPr = n!/(n−r)!` — arrangements, order matters.
- **Combination** `nCr = n!/(r!(n−r)!)` — selections, order does not.
- **Lattice paths:** a path of `m` East and `n` North steps is a choice of **which of the `m+n` steps are North**: `C(m+n, n)`. Not the product rule.
- `0! = 1`. `nC0 = nCn = 1`. `nCr = nC(n−r)`.

## 3. Probability operators

- **Addition:** `P(A∪B) = P(A) + P(B) − P(A∩B)`. The subtraction vanishes only if mutually exclusive.
- **Conditional:** `P(A|B) = P(A∩B)/P(B)`, needs `P(B) > 0`.
- **Multiplication:** `P(A∩B) = P(A|B)P(B) = P(B|A)P(A)`.
- **Total probability:** for a partition `B_1…B_k`, `P(A) = Σ P(A|B_i)P(B_i)`.
- **Bayes:** `P(B_i|A) = P(A|B_i)P(B_i) / Σ_j P(A|B_j)P(B_j)`. The denominator is total probability; build the tree, then read it backwards.
- **Complement:** `P(A') = 1 − P(A)`.

## 4. Discrete random variables

- **PMF** `p(x) = P(X = x)`. Every `p(x) ≥ 0` and `Σ p(x) = 1`.
- **CDF** `F(x) = P(X ≤ x)`, a **step** function, right-continuous. `P(a < X ≤ b) = F(b) − F(a)`.
- Discrete traps: `P(X < x) = F(x) − p(x)`, and `P(X ≥ x) = 1 − F(x−1)`. The endpoint carries mass, so the inequality sign changes the answer.
- **Expectation** `E(X) = Σ x·p(x)`. **Of a function** `E(g(X)) = Σ g(x)·p(x)`, which is not `g(E(X))`.
- **Variance** `Var(X) = E(X²) − [E(X)]²`. `SD = √Var`.
- **Linearity:** `E(aX+b) = aE(X)+b`. `Var(aX+b) = a²Var(X)` — the shift `b` drops out, the scale is squared.
- Independent `X`, `Y`: `E(XY) = E(X)E(Y)` and `Var(X±Y) = Var(X)+Var(Y)` (both **plus**).

## 5. Discrete distribution family map

Two axes decide everything: **what is fixed vs what is counted**, and **with vs without replacement**.

| Distribution | Fixed | Counted | PMF | `E(X)` | `Var(X)` |
|---|---|---|---|---|---|
| **Bernoulli(p)** | one trial | success 0/1 | `p^x(1−p)^(1−x)` | `p` | `p(1−p)` |
| **Binomial(n,p)** | **`n` trials** | **successes** | `C(n,x)p^x(1−p)^(n−x)` | `np` | `np(1−p)` |
| **Geometric(p)** | **successes = 1** | **trials until it** | `(1−p)^(x−1)p` | `1/p` | `(1−p)/p²` |
| **Neg. Binomial(r,p)** | successes = `r` | trials until them | `C(x−1,r−1)p^r(1−p)^(x−r)` | `r/p` | `r(1−p)/p²` |
| **Hypergeometric(N,K,n)** | `n` draws, **no replacement** | successes | `C(K,x)C(N−K,n−x)/C(N,n)` | `n(K/N)` | `n(K/N)(1−K/N)((N−n)/(N−1))` |
| **Poisson(λ)** | interval | events in it | `e^(−λ)λ^x/x!` | `λ` | `λ` |

Who advances from whom:

- **Bernoulli → Binomial:** `n` independent Bernoulli(p) summed. Bernoulli is Binomial with `n=1`.
- **Geometric → Negative Binomial:** Geometric is NegBin with `r=1`. Both count **trials**, not successes, so `X` starts at `r`, not at 0.
- **Binomial → Hypergeometric:** same question, replacement removed. Draws stop being independent, hence the finite-population correction `(N−n)/(N−1)`.
- **Binomial → Poisson:** `n` large, `p` small, `λ = np`. **This paper accepts the approximation as the distribution** when no exact Binomial option is offered.
- **Binomial vs Geometric is the one that flips:** Binomial fixes trials and counts successes; Geometric fixes one success and counts trials. Ask which number the question already gave you.

## 6. Continuous random variables

**HELD pending scope.** Sized placeholder only: if L04 is examinable this block takes `f(x)`, `F(x)=∫f`, `P(a<X<b)=∫`, `E(X)=∫x f(x)dx`, the uniform and the normal with its `z = (x−μ)/σ` table lookup. If it is out of scope, this whole section is cut and §1-§5 breathe.
