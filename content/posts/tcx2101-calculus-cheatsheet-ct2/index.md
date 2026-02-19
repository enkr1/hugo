---
title: "TCX2101 | Calculus Cheatsheet CT2 (Chapter 3.5 – 4.11)"
slug: "nus-bit-tcx2101-cheatsheet-3.5-4.11"
date: 2026-02-16
description: "Formula reference for NUS TCX2101 CT2: MVT, Derivative Tests, L'Hôpital, Optimization, Integration, FTC, Area, Substitution"
tags: ["nus", "math", "calculus", "cheatsheet", "tcx2101"]
categories: ["Education", "Mathematics"]
toc: true
math: true
draft: false
---

for the full chapter-by-chapter notes, see my [TCX2101 notebook]({{< ref "tcx2101-notebook" >}}). for CT1 formulas (Chapters 1.1–3.4), see the [CT1 cheatsheet]({{< ref "tcx2101-calculus-cheatsheet" >}}).

---

## 3: Applications of Derivatives

### 3.5 Mean Value Theorem

#### Rolle's Theorem

If $f$ is **continuous** on $[a,b]$, **differentiable** on $(a,b)$, and $f(a) = f(b)$:

$$\exists\, c \in (a,b) \text{ such that } f'(c) = 0$$

> Intuition: curve starts and ends at same height → must have a flat spot somewhere.

#### Mean Value Theorem (MVT) ⭐️

If $f$ is **continuous** on $[a,b]$ and **differentiable** on $(a,b)$:

$$\exists\, c \in (a,b) \text{ such that } f'(c) = \frac{f(b) - f(a)}{b - a}$$

> Intuition: instantaneous speed must equal average speed at some point.

#### MVT Corollary

$$f'(x) = g'(x) \;\forall\, x \in (a,b) \implies f(x) = g(x) + C$$

Same derivative = same function (up to a constant).

> ⚠️ **Conditions are the trap.** Must verify: (1) continuous on **closed** $[a,b]$, (2) differentiable on **open** $(a,b)$. Miss either → theorem doesn't apply.

---

### 3.6 Derivative Tests

#### Monotonicity (First Derivative)

| $f'(x)$ on $(a,b)$ | $f$ on $[a,b]$ |
|---------------------|-----------------|
| $f'(x) > 0$ | Increasing |
| $f'(x) < 0$ | Decreasing |

#### First Derivative Test for Local Extrema

At critical point $c$ (where $f'(c) = 0$ or DNE), check sign change of $f'$:

| $f'$ changes | Result at $c$ |
|--------------|---------------|
| $- \to +$ | Local **minimum** |
| $+ \to -$ | Local **maximum** |
| No sign change | **Not** an extremum |

#### Concavity (Second Derivative)

| $f''$ on $I$ | Graph shape | $f'$ is... |
|--------------|-------------|------------|
| $f'' > 0$ | Concave **up** (cup) | Increasing |
| $f'' < 0$ | Concave **down** (cap) | Decreasing |

**Inflection point:** where concavity changes. At $(a, f(a))$: either $f''(a) = 0$ or $f''$ DNE.

#### Second Derivative Test for Local Extrema ⭐️

At critical point $c$ where $f'(c) = 0$:

| $f''(c)$ | Result |
|----------|--------|
| $f''(c) < 0$ | Local **maximum** (concave down = peak) |
| $f''(c) > 0$ | Local **minimum** (concave up = valley) |
| $f''(c) = 0$ | **Test fails** — use first derivative test |

> ⚠️ **$f''(c) = 0$ does NOT mean inflection.** It means the test is inconclusive. Fall back to first derivative test.

---

### 3.7 L'Hôpital's Rule

#### The Rule

If $\frac{f(x)}{g(x)} \to \frac{0}{0}$ or $\frac{\pm\infty}{\pm\infty}$ as $x \to a$:

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$

(assuming the right-hand limit exists). Works for $a = \pm\infty$ too.

#### When to Use

| Form | Indeterminate? | Use L'Hôpital? |
|------|---------------|----------------|
| $\frac{0}{0}$ | Yes | Yes |
| $\frac{\pm\infty}{\pm\infty}$ | Yes | Yes |
| $\frac{0}{\infty}$, $\frac{\infty}{0}$, $\frac{5}{0}$ | No | **No** — evaluate directly |

> ⚠️ **Three traps:**
> 1. **Must be indeterminate** — check BEFORE differentiating
> 2. **Stop** when the form is no longer indeterminate — don't keep differentiating
> 3. **Differentiate top and bottom separately** — this is NOT the quotient rule

---

### 3.8 Optimization

#### Algorithm

1. **Read** — identify what to maximize/minimize
2. **Draw** — label variables, note constraints
3. **Write** — express objective as function of one variable (use constraint to eliminate)
4. **Differentiate** — find critical points ($f'(x) = 0$)
5. **Test** — check critical points AND endpoints (if closed interval)
6. **Answer** — substitute back to get all requested values

#### Endpoint Check

| Domain | What to check |
|--------|---------------|
| Closed $[a,b]$ | Critical points **and** $f(a)$, $f(b)$ |
| Open $(0, \infty)$ | Critical points + behavior as $x \to 0^+$, $x \to \infty$ |
| All $\mathbb{R}$ | Critical points + behavior as $x \to \pm\infty$ |

> ⚠️ **Don't forget endpoints.** A critical point can be a local extremum but NOT the global one if an endpoint beats it.

> ⚠️ **"Minimize cost" → objective is cost, constraint is volume (or similar).** Read carefully which is which.

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

### 4.3 Area Under and Between Graphs

#### Area Under a Curve

$$\text{Area} = \int_a^b |f(x)|\,dx$$

**Algorithm:**

1. Find **zeros** of $f$ in $[a,b]$
2. Determine **sign** of $f$ on each sub-interval
3. Where $f < 0$, negate: $\int(-f)\,dx$
4. Sum all pieces

> ⚠️ **$\int_a^b f(x)\,dx$ is NOT always area.** If $f < 0$ on part of $[a,b]$, the integral gives *signed* area (negative parts cancel). Use $|f(x)|$ for actual area.

#### Area Between Two Curves

$$\text{Area} = \int_a^b |f(x) - g(x)|\,dx$$

**Algorithm:**

1. Find **intersections**: solve $f(x) = g(x)$ in $[a,b]$
2. On each sub-interval, determine which function is **on top**
3. Integrate (top $-$ bottom) on each piece
4. Sum all pieces

> ⚠️ **Always subtract in the right order.** If you get a negative area for a piece, you subtracted the wrong way — flip it.

---

### 4.4 Integration by Substitution

#### $u$-Substitution (Indefinite)

If you spot $f(u(x)) \cdot u'(x)$ in the integrand:

$$\int f(u(x)) \cdot u'(x)\,dx = F(u(x)) + C$$

**Steps:** Let $u = $ (inside function), $du = u'(x)\,dx$, rewrite, integrate, substitute back.

#### $u$-Substitution (Definite) ⭐️

$$\int_a^b f(u(x)) \cdot u'(x)\,dx = \int_{u(a)}^{u(b)} f(u)\,du$$

> ⚠️ **Change the limits!** $x = a \to u = u(a)$, $x = b \to u = u(b)$. If you forget, you'll integrate with wrong bounds.

#### Trigonometric Substitution

| Expression | Substitution | Identity | Simplifies to |
|-----------|-------------|----------|---------------|
| $\sqrt{a^2 + x^2}$ | $x = a\tan\theta$ | $1 + \tan^2 = \sec^2$ | $a\sec\theta$ |
| $\sqrt{a^2 - x^2}$ | $x = a\sin\theta$ | $1 - \sin^2 = \cos^2$ | $a\cos\theta$ |
| $\sqrt{x^2 - a^2}$ | $x = a\sec\theta$ | $\sec^2 - 1 = \tan^2$ | $a\tan\theta$ |

**Memory trick — right triangle:**
- $a^2 + x^2$: $a$, $x$ are legs → hypotenuse = $\sqrt{a^2+x^2}$ → $\tan\theta$
- $a^2 - x^2$: $a$ is hypotenuse → $\sin\theta$
- $x^2 - a^2$: $x$ is hypotenuse → $\sec\theta$

> ⚠️ **After trig sub, convert back.** Draw the right triangle to express $\theta$ in terms of $x$.

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

### Derivative Test Decision Tree

```text
Found critical point c (f'(c) = 0)?
         │
    Can you compute f''(c)?
    ┌────┴────┐
   Yes       No → use First Derivative Test
    │
  f''(c) = ?
    ┌───┼───┐
   <0   =0  >0
    │   │    │
  MAX  FAIL  MIN
        │
  Fall back to
  First Deriv Test
```

### Trig Sub Cheat

```text
See √(___) ?
         │
    ┌────┴────┬──────────┐
    │         │          │
  a² + x²  a² - x²   x² - a²
    │         │          │
  x=a·tanθ x=a·sinθ  x=a·secθ
    │         │          │
  a·secθ   a·cosθ    a·tanθ
```

---

- *Coverage: TCX2101 Chapters 3.5–4.11 (CT2 scope)*
- *Purpose: Class Test 2 reference (16 Mar)*
- *Format:* Closed book — memorise this!

---

- **Source:** NUS TCX2101 Calculus and Linear Algebra, CT2 prep
- **GitHub:** [Repository](https://github.com/enkr1/nus_bit_priv)
