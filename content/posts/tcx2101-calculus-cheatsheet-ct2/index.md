---
title: "TCX2101 | Calculus Cheatsheet CT2 (Chapter 3.5 – 4.11)"
slug: "nus-bit-tcx2101-cheatsheet-3.5-4.11"
date: 2026-02-16
description: "Formula reference for NUS TCX2101 CT2: Integration, Riemann Sums, FTC, Substitution, Area"
tags: ["nus", "math", "calculus", "cheatsheet", "tcx2101"]
categories: ["Education", "Mathematics"]
toc: true
math: true
draft: false
---

for the full chapter-by-chapter notes, see my [TCX2101 notebook]({{< ref "tcx2101-notebook" >}}). for CT1 formulas (Chapters 1.1–3.4), see the [CT1 cheatsheet]({{< ref "tcx2101-calculus-cheatsheet" >}}).

---

## 4: Integration

### 4.1 Definite Integrals & Riemann Sums

#### Integrability

$$\text{f integrable on } [a,b] \iff \lim_{n \to \infty} L_n = \lim_{n \to \infty} U_n$$

Upper and lower Riemann sums squeeze to the same value.

#### Upper & Lower Sums

| $f$ on $[a,b]$ | Upper sum $U_n$ | Lower sum $L_n$ |
|-----------------|-----------------|-----------------|
| $f$ increasing | Right endpoints | Left endpoints |
| $f$ decreasing | Left endpoints | Right endpoints |

$$\Delta x = \frac{b-a}{n}$$

#### Properties of Definite Integrals

| Rule | Formula | Intuition |
|------|---------|-----------|
| Max-min inequality | $m(b-a) \leq \int_a^b f \leq M(b-a)$ | Rectangle bounds $\times$ interval width |
| Additive | $\int_a^c = \int_a^b + \int_b^c$ | Split interval = split integral |
| Reverse limits | $\int_a^b = -\int_b^a$ | Backwards = negate ($\Delta x$ flips) |
| Zero-width | $\int_a^a = 0$ | No width = no area |
| Comparison | $f \leq g \Rightarrow \int f \leq \int g$ | Smaller function = smaller area |
| Non-negative | $f \geq 0 \Rightarrow \int f \geq 0$ | Positive function = positive area |

> ⚠️ **Max-min inequality:** Don't forget to multiply by $(b-a)$! Bounds alone are not enough.

#### Integrability & Discontinuities

| Situation | Integrable? |
|-----------|-------------|
| Continuous on $[a,b]$ | Yes |
| Finitely many discontinuities | Yes |
| Dirichlet function (everywhere discontinuous) | No ($L_n = 0$, $U_n = 1$, never equal) |

> ⚠️ Finite bad points = still integrable. Only "everywhere discontinuous" breaks it.

#### Reversed Limits + Inequality (Double Trap)

$$f(x) < 0 \text{ on } [b,a] \text{ with } a > b$$

- Normal direction: $\int_b^a f < 0$ (negative function → negative integral)
- Reversed: $\int_a^b f = -\int_b^a f > 0$ (negate → positive!)

> ⚠️ Two negatives: $f < 0$ gives $\int_b^a < 0$, reversed $\int_a^b = -(\text{negative}) > 0$

---

### 4.2 Fundamental Theorem of Calculus

#### FTC I — The 4 Cases ⭐️

**Step 1: Look at the limits**

| | Lower | Upper | Case |
|---|-------|-------|------|
| Case 1 | constant | $x$ | Basic |
| Case 2 | constant | $g(x)$ | Chain rule |
| Case 3 | $x$ | constant | Minus sign |
| Case 4 | $a(x)$ | $b(x)$ | Both move |

**Step 2: Apply formula**

| Case | Formula | Mnemonic |
|------|---------|----------|
| 1 | $f(x)$ | Just substitute $t \to x$ |
| 2 | $f(g(x)) \cdot g'(x)$ | Substitute, **multiply by derivative** |
| 3 | $-f(x)$ | Add **minus sign** |
| 4 | $f(b(x)) \cdot b'(x) - f(a(x)) \cdot a'(x)$ | Upper minus lower, each $\times$ derivative |

**Examples:**

| Integral | Case | $F'(x)$ |
|----------|------|---------|
| $\int_0^x e^t\,dt$ | 1 | $e^x$ |
| $\int_0^{x^2} e^t\,dt$ | 2 | $e^{x^2} \cdot 2x$ |
| $\int_x^5 e^t\,dt$ | 3 | $-e^x$ |
| $\int_x^{3x} \ln t\,dt$ | 4 | $\ln(3x) \cdot 3 - \ln(x) \cdot 1$ |

> ⚠️ **Chain rule is the #1 mistake.** See $x^2$, $\sqrt{x}$, $x^3$ as upper limit? MUST multiply by its derivative.

#### FTC I — Fine Print

| Point | Detail |
|-------|--------|
| Domain | $F'(x) = f(x)$ on **open** $(a,b)$, NOT closed $[a,b]$ |
| Continuity | $F'(c) = f(c)$ requires $f$ **continuous at $c$** |
| Discontinuity | If $f$ has removable discontinuity at $c$: $F'(c)$ may exist but $\neq f(c)$ |
| Not integrable | Dirichlet $\to$ $F(x)$ undefined $\to$ can't discuss $F'(x)$ |

> ⚠️ See $[a,b]$ square brackets in "FTC I gives $F'(x) = f(x)$ for $x \in [a,b]$"? That's WRONG. Must be $(a,b)$ round brackets.

#### FTC II (Evaluation Theorem)

$$\int_a^b f(x)\,dx = F(b) - F(a)$$

where $F$ is any antiderivative of $f$.

> ⚠️ Don't forget $F(a)$! Result is $F(b) - F(a)$, not just $F(b)$.

#### Antiderivatives

Two antiderivatives of the same function differ by a constant:

$$F'(x) = G'(x) = f(x) \implies F(x) - G(x) = C$$

Therefore: $F(b) - F(a) = G(b) - G(a)$ (constant cancels).

#### Indefinite Integral

$$\int f(x)\,dx = F(x) + C \qquad \text{where } F'(x) = f(x)$$

---

### Ch4 Mistakes ⚠️

| Mistake | Times | Fix |
|---------|-------|-----|
| Chain rule — forgot $g'(x)$ | 3$\times$ | Upper limit $\neq x$? MUST multiply by derivative |
| Open interval $()$ vs closed $[]$ | 4$\times$ | FTC I output = **(a,b)** always. See $[$ → wrong |
| Continuity required for $F'(c) = f(c)$ | 2$\times$ | "Bounded" or "integrable" not enough |
| Forgot minus sign (lower limit) | 2$\times$ | $x$ in lower = flip = negative |
| Basic FTC I overcomplicated | 1$\times$ | Upper limit = $x$? Just substitute. Done. |
| Variable inside integral | 2$\times$ | $1/h$ is variable, can't move into $\int$ |

---

## Quick Reference

### FTC I Decision Tree

```text
Given: d/dx ∫_?^? f(t) dt

Step 1: What are the limits?
         │
    ┌────┴────┬──────────┬──────────┐
    │         │          │          │
  ∫_a^x    ∫_a^g(x)   ∫_x^b    ∫_a(x)^b(x)
    │         │          │          │
  f(x)    f(g(x))·g'   -f(x)    f(b)·b' - f(a)·a'
           ↑                      ↑
      DON'T FORGET          UPPER MINUS LOWER
```

---

- *Coverage: TCX2101 Chapters 3.5–4.11 (CT2 scope)*
- *Purpose: Class Test 2 reference (16 Mar)*
- *Format:* Closed book — memorise this!

---

- **Source:** NUS TCX2101 Calculus and Linear Algebra, CT2 prep
- **GitHub:** [Repository](https://github.com/enkr1/nus_bit_priv)
