---
title: "TCX2101 | Calculus Cheatsheet (Ch 1.1 - 3.4) - WIP"
slug: "nus-bit-tcx2101-cheatsheet-1.1-3.4"
date: 2026-02-05
description: "Complete formula reference for NUS TCX2101 Calculus & Linear Algebra: Functions, Limits, Continuity, Differentiation, and Extreme Values"
tags: ["nus", "math", "calculus", "cheatsheet", "tcx2101"]
categories: ["Education", "Mathematics"]
toc: true
math: true
draft: false
---

> 📚 Complete reference for Class Test 1 and beyond
>
> **Test Scope:** Ch 1.1 → 3.4 (Functions, Limits, Continuity, Differentiation, Extreme Values)
>
> **Format:** Closed book — memorize this, don't bring it!

---

## Chapter 1: Functions

### 1.1 Domain & Range

#### Domain Rules

| Function Type | Domain Restriction | Example |
|---------------|-------------------|---------|
| **Polynomial** | All real numbers | $f(x) = x^3 - 2x + 1$ → $\mathbb{R}$ |
| **Rational** | Denominator ≠ 0 | $f(x) = \frac{1}{x-2}$ → $x \neq 2$ |
| **Square root** | Inside ≥ 0 | $f(x) = \sqrt{x-3}$ → $x \geq 3$ |
| **√ in denominator** | Inside > 0 (strict!) | $f(x) = \frac{1}{\sqrt{x-3}}$ → $x > 3$ |
| **Logarithm** | Inside > 0 | $f(x) = \ln(x-1)$ → $x > 1$ |

#### Multiple Restrictions

**Example:** $f(x) = \frac{\sqrt{x-3}}{x^2-4}$

1. Square root: $x - 3 \geq 0$ → $x \geq 3$
2. Denominator: $x^2 - 4 \neq 0$ → $x \neq \pm 2$
3. Combine: $x \geq 3$ (already excludes ±2)

**Domain:** $[3, \infty)$

#### Tricky Case: Multiple Regions

**Example:** $f(x) = \sqrt{x^2 - 9}$

Need: $x^2 - 9 \geq 0$ → $x^2 \geq 9$ → $|x| \geq 3$

**Domain:** $(-\infty, -3] \cup [3, \infty)$ — TWO regions!

---

### 1.2 Transformations

#### The Golden Rule

$$\text{Inside } f() = \text{Horizontal (opposite)} \quad | \quad \text{Outside } f() = \text{Vertical (same)}$$

#### Transformation Table

| Transformation | Formula | Effect |
|----------------|---------|--------|
| **Vertical shift up** | $f(x) + k$ | Move up by $k$ |
| **Vertical shift down** | $f(x) - k$ | Move down by $k$ |
| **Horizontal shift right** | $f(x - h)$ | Move right by $h$ (opposite!) |
| **Horizontal shift left** | $f(x + h)$ | Move left by $h$ (opposite!) |
| **Vertical stretch** | $a \cdot f(x)$, $a > 1$ | Stretch vertically |
| **Vertical compress** | $a \cdot f(x)$, $0 < a < 1$ | Compress vertically |
| **Horizontal compress** | $f(bx)$, $b > 1$ | Compress horizontally (opposite!) |
| **Horizontal stretch** | $f(bx)$, $0 < b < 1$ | Stretch horizontally (opposite!) |
| **Reflect over x-axis** | $-f(x)$ | Flip vertically |
| **Reflect over y-axis** | $f(-x)$ | Flip horizontally |

#### Example

$g(x) = 2f(x-3) + 1$

Reading order (inside out):
1. $x - 3$: shift RIGHT 3 (horizontal, opposite)
2. $2f(...)$: stretch vertically by 2
3. $... + 1$: shift UP 1

---

### 1.3 Function Types

#### Classification

| Type | Definition | Examples |
|------|------------|----------|
| **Polynomial** | $a_nx^n + a_{n-1}x^{n-1} + ... + a_0$ | $x^3 - 2x + 1$ |
| **Rational** | $\frac{P(x)}{Q(x)}$ where P, Q are polynomials | $\frac{x^2+1}{x-1}$ |
| **Algebraic** | Built from polynomials + roots | $\sqrt{x^2 + 1}$ |
| **Transcendental** | NOT algebraic (trig, exp, log) | $\sin x$, $e^x$, $\ln x$ |

**Rule:** Any transcendental part → whole function is transcendental

**Example:** $f(x) = x^2 + \sin x$ → Transcendental (has $\sin x$)

---

### 1.4 Special Functions

#### Inverse Functions

$$f^{-1}(f(x)) = x \quad \text{and} \quad f(f^{-1}(x)) = x$$

| Function | Inverse | Domain of Inverse |
|----------|---------|-------------------|
| $e^x$ | $\ln x$ | $x > 0$ |
| $\ln x$ | $e^x$ | $\mathbb{R}$ |
| $\sin x$ | $\arcsin x$ | $[-1, 1]$ |
| $\cos x$ | $\arccos x$ | $[-1, 1]$ |
| $\tan x$ | $\arctan x$ | $\mathbb{R}$ |

---

### ⚠️ Ch1 Common Mistakes

| Mistake | Wrong | Correct |
|---------|-------|---------|
| √ in denominator | $x \geq 3$ | $x > 3$ (strict inequality!) |
| Horizontal shift direction | $f(x-3)$ shifts left | $f(x-3)$ shifts RIGHT (opposite!) |
| $\sqrt{x^2-9}$ domain | $x \geq 3$ only | $x \leq -3$ OR $x \geq 3$ (two regions!) |
| Numerator = 0 | Not allowed | $\frac{0}{5} = 0$ is fine! |

---

## Chapter 2: Limits & Continuity

### 2.1 Limit Laws

#### Basic Laws

If $\lim_{x \to a} f(x) = L$ and $\lim_{x \to a} g(x) = M$, then:

| Law | Formula | Condition |
|-----|---------|-----------|
| **Sum** | $\lim[f + g] = L + M$ | — |
| **Difference** | $\lim[f - g] = L - M$ | — |
| **Product** | $\lim[f \cdot g] = L \cdot M$ | Both limits must be **finite** |
| **Quotient** | $\lim\frac{f}{g} = \frac{L}{M}$ | $M \neq 0$ |
| **Power** | $\lim[f^n] = L^n$ | — |
| **Constant** | $\lim[c \cdot f] = c \cdot L$ | — |

#### Division Patterns

| Form | Result | Intuition |
|------|--------|-----------|
| $\frac{5}{0}$ | $\pm\infty$ (blows up 🚀) | Dividing by tiny number → huge |
| $\frac{0}{5}$ | $0$ | Zero divided by anything = 0 |
| $\frac{0}{0}$ | **Indeterminate** (不定式 🤔) | Could be anything — must simplify! |
| $\frac{\infty}{\infty}$ | **Indeterminate** | Must simplify |
| $0 \cdot \infty$ | **Indeterminate** | Must rewrite |

---

### 2.2 Indeterminate Forms

#### The 7 Indeterminate Forms

$$\frac{0}{0}, \quad \frac{\infty}{\infty}, \quad 0 \cdot \infty, \quad \infty - \infty, \quad 0^0, \quad 1^\infty, \quad \infty^0$$

#### Solving $\frac{0}{0}$

**Method 1: Factor and Cancel**

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} \frac{(x-2)(x+2)}{x-2} = \lim_{x \to 2} (x+2) = 4$$

**Method 2: Conjugate (for radicals)**

$$\lim_{x \to 0} \frac{\sqrt{x+4} - 2}{x} = \lim_{x \to 0} \frac{(\sqrt{x+4} - 2)(\sqrt{x+4} + 2)}{x(\sqrt{x+4} + 2)} = \lim_{x \to 0} \frac{x+4-4}{x(\sqrt{x+4} + 2)} = \frac{1}{4}$$

---

### 2.3 Limits at Infinity

#### Degree Rules for Rational Functions

$$\lim_{x \to \infty} \frac{a_nx^n + ...}{b_mx^m + ...}$$

| Condition | Result | Memory Trick |
|-----------|--------|--------------|
| $n < m$ (top smaller) | $0$ | Top "loses" |
| $n = m$ (same degree) | $\frac{a_n}{b_m}$ | Leading coefficients |
| $n > m$ (top bigger) | $\pm\infty$ | Top "wins" |

#### Example

$$\lim_{x \to \infty} \frac{3x^2 + 1}{x^2 - 5} = \frac{3}{1} = 3 \quad \text{(same degree)}$$

$$\lim_{x \to \infty} \frac{2x + 1}{x^3 - 1} = 0 \quad \text{(top smaller)}$$

#### Special Trig Limits

$$\lim_{x \to 0} \frac{\sin x}{x} = 1 \qquad \lim_{x \to 0} \frac{1 - \cos x}{x} = 0$$

---

### 2.4 Continuity

#### 3-Part Test for Continuity at $x = a$

A function is continuous at $x = a$ if:

1. $f(a)$ exists (defined at the point)
2. $\lim_{x \to a} f(x)$ exists (limit exists)
3. $\lim_{x \to a} f(x) = f(a)$ (they match)

#### 4 Types of Discontinuity

| Type | Condition | Visual |
|------|-----------|--------|
| **Removable (Hole)** | $\lim_{x \to a^-} f = \lim_{x \to a^+} f \neq f(a)$ | Single point missing |
| **Jump** | $\lim_{x \to a^-} f \neq \lim_{x \to a^+} f$ | Left ≠ Right |
| **Infinite** | $\lim_{x \to a} f = \pm\infty$ | Vertical asymptote |
| **Oscillatory** | Limit doesn't exist (oscillates) | e.g., $\sin(1/x)$ at 0 |

#### Hole Detection

1. **WHERE:** Check ORIGINAL function for where denominator = 0
2. **WHAT VALUE:** Simplify, then substitute to find the y-coordinate of hole

---

### 2.5 Intermediate Value Theorem (IVT)

#### Statement

If $f$ is **continuous** on $[a, b]$ and $N$ is between $f(a)$ and $f(b)$, then there exists $c \in (a, b)$ such that $f(c) = N$.

#### Root Finding Application

If $f$ is continuous on $[a, b]$ with $f(a) < 0$ and $f(b) > 0$ (or vice versa), then there exists a root in $(a, b)$.

**Intuition:** "Can't teleport through floors" — continuous function must cross zero.

#### Example

Show $f(x) = x^3 - x - 1$ has a root in $[1, 2]$.

- $f(1) = 1 - 1 - 1 = -1 < 0$
- $f(2) = 8 - 2 - 1 = 5 > 0$
- $f$ is polynomial (continuous everywhere)
- By IVT, there exists $c \in (1, 2)$ where $f(c) = 0$ ✓

---

### ⚠️ Ch2 Common Mistakes

| Mistake | Wrong | Correct |
|---------|-------|---------|
| $5/0$ | "undefined" or "0" | $\pm\infty$ (blows up!) |
| $0/0$ | "0" | **Indeterminate** — must simplify! |
| Product law with $\infty$ | $0 \cdot \infty = 0$ | **Indeterminate** — can't use product law! |
| Hole vs Jump | Both "don't match" | Hole: L=R≠f(a), Jump: L≠R |
| Divide by highest power | Always do it | Only for $x \to \infty$, not $x \to a$ |

---

## Chapter 3: Differentiation

### 3.1 Derivative Definition

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

#### Interpretation

- **Geometric:** Slope of tangent line at $(x, f(x))$
- **Physical:** Instantaneous rate of change

#### Tangent Line Equation

At point $(a, f(a))$:

$$y - f(a) = f'(a)(x - a)$$

---

### 3.2 Basic Differentiation Rules

#### Power Rule

$$\frac{d}{dx}[x^n] = nx^{n-1} \quad \text{for ALL } n \in \mathbb{R}$$

**Examples:**

$$\frac{d}{dx}[x^5] = 5x^4 \qquad \frac{d}{dx}[x^{-2}] = -2x^{-3} \qquad \frac{d}{dx}[\sqrt{x}] = \frac{d}{dx}[x^{1/2}] = \frac{1}{2}x^{-1/2}$$

#### Constant Rule

$$\frac{d}{dx}[c] = 0 \qquad \frac{d}{dx}[cf(x)] = c \cdot f'(x)$$

#### Sum/Difference Rule

$$\frac{d}{dx}[f \pm g] = f' \pm g'$$

#### Product Rule

$$\frac{d}{dx}[f \cdot g] = f'g + fg'$$

**Example:**

$$\frac{d}{dx}[x^2 \sin x] = 2x \cdot \sin x + x^2 \cdot \cos x$$

#### Quotient Rule

$$\frac{d}{dx}\left[\frac{f}{g}\right] = \frac{f'g - fg'}{g^2}$$

**Memory:** "Lo d-Hi **MINUS** Hi d-Lo, over Lo-Lo" (low × d(high) − high × d(low))

**Example:**

$$\frac{d}{dx}\left[\frac{x^2}{x+1}\right] = \frac{2x(x+1) - x^2(1)}{(x+1)^2} = \frac{2x^2 + 2x - x^2}{(x+1)^2} = \frac{x^2 + 2x}{(x+1)^2}$$

#### Chain Rule

$$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$

**Memory:** "Derivative of outside (keep inside) × Derivative of inside"

**Example:**

$$\frac{d}{dx}[\sin(x^2)] = \cos(x^2) \cdot 2x = 2x\cos(x^2)$$

#### Triple Product Rule

$$\frac{d}{dx}[fgh] = f'gh + fg'h + fgh'$$

**Example:**

$$\frac{d}{dx}[x^2 \cos x \cdot e^x] = 2x \cos x \cdot e^x + x^2(-\sin x) e^x + x^2 \cos x \cdot e^x$$

---

#### Trig Derivatives

##### The 6 Trig Derivatives

| Function | Derivative | Memory |
|----------|------------|--------|
| $\sin x$ | $\cos x$ | Sin → Cos (positive) |
| $\cos x$ | $-\sin x$ | Cos → negative Sin |
| $\tan x$ | $\sec^2 x$ | **Squared family** |
| $\cot x$ | $-\csc^2 x$ | **Squared family** (CO = negative) |
| $\sec x$ | $\sec x \tan x$ | **Multiply family** |
| $\csc x$ | $-\csc x \cot x$ | **Multiply family** (CO = negative) |

##### Pattern Families

**Squared Family:** tan and cot give squared derivatives
$$\frac{d}{dx}[\tan x] = \sec^2 x \qquad \frac{d}{dx}[\cot x] = -\csc^2 x$$

**Multiply Family:** sec and csc multiply with their buddy
$$\frac{d}{dx}[\sec x] = \sec x \tan x \qquad \frac{d}{dx}[\csc x] = -\csc x \cot x$$

**CO = NEGATIVE:** cot and csc always have negative signs!

##### With Chain Rule

$$\frac{d}{dx}[\sin(u)] = \cos(u) \cdot u' \qquad \frac{d}{dx}[\tan(u)] = \sec^2(u) \cdot u'$$

**Example:**

$$\frac{d}{dx}[\sin(3x)] = \cos(3x) \cdot 3 = 3\cos(3x)$$

$$\frac{d}{dx}[\cos^2(x)] = 2\cos(x) \cdot (-\sin x) = -2\cos(x)\sin(x)$$

---

### 3.3 Inverse Functions & Special Derivatives

#### Exponential

$$\frac{d}{dx}[e^x] = e^x \qquad \frac{d}{dx}[e^u] = e^u \cdot u'$$

**Memory:** $e^x$ is "immortal" — derivative can't kill it!

**Examples:**

$$\frac{d}{dx}[e^{3x}] = e^{3x} \cdot 3 = 3e^{3x}$$

$$\frac{d}{dx}[e^{x^2}] = e^{x^2} \cdot 2x = 2xe^{x^2}$$

#### Logarithm

$$\frac{d}{dx}[\ln x] = \frac{1}{x} \qquad \frac{d}{dx}[\ln u] = \frac{u'}{u}$$

**Memory:** ln "flips" — becomes 1/x

**Examples:**

$$\frac{d}{dx}[\ln(x^2)] = \frac{2x}{x^2} = \frac{2}{x}$$

**Shortcut:** $\ln(x^2) = 2\ln(x)$ → $\frac{d}{dx} = 2 \cdot \frac{1}{x} = \frac{2}{x}$

$$\frac{d}{dx}[\ln(\sin x)] = \frac{\cos x}{\sin x} = \cot x$$

---

#### Implicit Differentiation

##### When to Use

When you can't (or don't want to) solve for $y$ explicitly.

##### Method

1. Differentiate both sides with respect to $x$
2. For any $y$ term, use chain rule: $\frac{d}{dx}[f(y)] = f'(y) \cdot \frac{dy}{dx}$
3. Collect all $\frac{dy}{dx}$ terms on one side
4. Solve for $\frac{dy}{dx}$

#### Example 1: Circle

$$x^2 + y^2 = 25$$

Differentiate:
$$2x + 2y\frac{dy}{dx} = 0$$

Solve:
$$\frac{dy}{dx} = -\frac{x}{y}$$

#### Example 2: Product with y

$$x^2 + xy + y^2 = 7$$

Differentiate:
$$2x + \left(1 \cdot y + x \cdot \frac{dy}{dx}\right) + 2y\frac{dy}{dx} = 0$$

Note: For $xy$, use product rule! $\frac{d}{dx}[xy] = 1 \cdot y + x \cdot \frac{dy}{dx}$

Solve:
$$2x + y + x\frac{dy}{dx} + 2y\frac{dy}{dx} = 0$$
$$\frac{dy}{dx}(x + 2y) = -2x - y$$
$$\frac{dy}{dx} = \frac{-2x - y}{x + 2y}$$

#### Example 3: Trig

$$\sin(x) + \cos(y) = 1$$

Differentiate:
$$\cos(x) + (-\sin(y)) \cdot \frac{dy}{dx} = 0$$

Solve:
$$\frac{dy}{dx} = \frac{\cos(x)}{\sin(y)}$$

---

### 3.4 Extreme Values

#### Intuition: The Hiking Analogy

Imagine hiking from A to B — where are the highest/lowest points?

```
         peak 2
          /\
  peak 1 /  \      /
    /\  /    \    /
   /  \/      \  /
  /   valley   \/
 A              valley 2   B
```

Only 3 possible locations:
1. **Endpoints** (A and B) — the edges of the trail
2. **Peaks/valleys** — where slope is flat ($f'=0$)
3. **Sharp corners** — where slope is undefined

Between turning points, function is always rising or always falling — so max/min can **only** occur at these candidates!

#### $f(x)$ vs $f'(x)$ — Don't Mix Up!

| | $f(x)$ | $f'(x)$ |
|---|--------|---------|
| **Meaning** | Height of the mountain | Slope/steepness |
| **Peaks/valleys** | Appear here | Equal zero here |
| **Role** | The VALUES you compare | The TOOL to find candidates |

$f'(x) = 0$ tells you "slope is flat here" — then check $f(x)$ for the actual height

#### Solve vs Evaluate — Key Distinction!

| Operation | What you do | Purpose |
|-----------|-------------|---------|
| **Solve** $f'(x) = 0$ | Find which $x$ makes $f'$ zero | Find CPs |
| **Evaluate** $f(\text{candidate})$ | Plug candidate into **original** $f(x)$ | Get heights to compare |

Only evaluate is needed is in Step 2, and it uses **$f(x)$** (not $f'$!)

#### Critical Points

An **interior point** $c$ where:
- $f'(c) = 0$ (flat slope — potential peak/valley), OR
- $f'(c)$ does not exist (sharp corner — but $f(c)$ must exist)

Can have **0, 1, 2, 3+** CPs — depends on how many solutions $f'(x) = 0$ has

#### Extreme Value Theorem (EVT)

If $f$ is **continuous** on **closed bounded** interval $[a, b]$, then $f$ has both an absolute maximum and minimum on $[a, b]$.

**Why closed + bounded?** Open/unbounded intervals let values approach extremes without reaching them

#### Closed Interval Method

To find absolute max/min of $f$ on $[a, b]$:

1. **Solve** $f'(x) = 0$ → find all critical points in $(a, b)$
2. **Evaluate** $f$ at ALL candidates = critical points + endpoints $[a, b]$
3. `max(values)` = absolute max, `min(values)` = absolute min

**Total candidates** = (number of CPs) + 2 endpoints — usually 3-5 values to compare

#### Example

Find absolute max/min of $f(x) = x^3 - 6x^2 + 9x + 2$ on $[-1, 4]$.

**Step 1:** Find critical points
$$f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3)$$
$$f'(x) = 0 \Rightarrow x = 1, 3$$

**Step 2:** Evaluate at critical points and endpoints

| $x$ | $f(x)$ |
|-----|--------|
| $-1$ | $(-1)^3 - 6(-1)^2 + 9(-1) + 2 = -1 - 6 - 9 + 2 = -14$ |
| $1$ | $1 - 6 + 9 + 2 = 6$ |
| $3$ | $27 - 54 + 27 + 2 = 2$ |
| $4$ | $64 - 96 + 36 + 2 = 6$ |

**Step 3:** Compare
- Absolute max: $6$ at $x = 1$ and $x = 4$
- Absolute min: $-14$ at $x = -1$

---

#### Local vs Absolute — Different Questions, Different Tools!

```
找到 CP (solve f'=0)
        │
   ┌────┴────┐
   ▼         ▼
 Local       Absolute
 max/min?    max/min?
   │         │
   ▼         ▼
 Derivative  Closed Interval
 Test        Method
 (f' 变号    (CP + endpoints
  or f'')     比 f(x) 值)
   │         │
   ▼         ▼
 NO          YES
 endpoints!  endpoints!
```

#### Increasing/Decreasing Intervals

| $f'(x)$ | $f(x)$ is... |
|---------|--------------|
| $f'(x) > 0$ | Increasing ↗ |
| $f'(x) < 0$ | Decreasing ↘ |
| $f'(x) = 0$ | Potential local max/min |

#### First Derivative Test

At critical point $c$:
- $f'$ changes from + to − → Local **maximum**
- $f'$ changes from − to + → Local **minimum**
- $f'$ doesn't change sign → Neither (inflection point)

#### Second Derivative Test (at CP where $f'(c) = 0$)

| $f''(c)$ | Shape | Conclusion | Memory |
|----------|-------|------------|--------|
| $f''(c) > 0$ | ∪ 笑脸 (bowl) | Local **min** | 碗底 = lowest point |
| $f''(c) < 0$ | ∩ 哭脸 (arch) | Local **max** | 拱顶 = highest point |
| $f''(c) = 0$ | ??? | **Inconclusive** — use First Derivative Test instead! | |

> ⚠️ **Counter-intuitive!** 笑脸 ∪ = min (not max!), 哭脸 ∩ = max (not min!).
> Think: bowl ∪ holds water at the **bottom** (min). Arch ∩ peaks at the **top** (max).

#### Concavity (Second Derivative)

| $f''(x)$ | $f(x)$ is... |
|----------|--------------|
| $f''(x) > 0$ | Concave up ∪ |
| $f''(x) < 0$ | Concave down ∩ |
| $f''(x) = 0$ | Potential inflection point |

#### Inflection Points

Where concavity changes (f'' changes sign).

#### CP ↔ Local Extrema: Direction Matters!

$$\text{Local max/min} \Rightarrow \text{Critical Point (TRUE)}$$
$$\text{Critical Point} \Rightarrow \text{Local max/min (FALSE!)}$$

Every peak/valley is a CP, but not every CP is a peak/valley (e.g. $f(x) = x^3$ at $x = 0$).

Think: "All dogs are animals" ≠ "All animals are dogs" (TCX1004 logic: $A \to B \neq B \to A$)

---

### ⚠️ Ch3 Common Mistakes

#### My 11 Errors from Mixed Derivatives Hell!

| # | Error | Fix |
|---|-------|-----|
| 3 | Read $\tan(x^3)$ as $\tan^3(x)$ | Read notation TWICE! $\tan(x^3) \neq [\tan(x)]^3$ |
| 9 | Wrote $-\csc(2x)$ instead of $-\csc^2(2x)$ | $\frac{d}{dx}[\cot u] = -\csc^2(u) \cdot u'$ — SQUARED! |
| 10 | $u = x^3 + x \to u' = 3x^2$ (forgot +1) | Differentiate EVERY term: $u' = 3x^2 + 1$ |
| 12 | Used $\tan(x)$ instead of $\sec^2(x)$ | Product rule: check you're using $v'$, not $v$ |
| 13 | Quotient rule with + instead of − | "Lo d-Hi **MINUS** Hi d-Lo" — always MINUS! |
| 14 | $\cos^3(2x)$: got $6\cos^2(2x)$ | Missing $-\sin(2x)$! Complete ALL chain layers |
| 17 | Triple product got messy | Simplify first: $\sin x \cos x \tan x = \sin^2 x$ |
| 20 | Got $(x - 2y)$ instead of $(x + 2y)$ | Collect terms carefully, check signs! |
| 24 | Inner deriv: $(3x^2 - x)$ not $(3x^2 - 2)$ | $\frac{d}{dx}[-2x] = -2$, not $-x$ |
| 26 | Read $\sin(x^2) \cdot \cos(x^2)$ as division | Read · vs / carefully! |
| 28 | $\sqrt{\sin x}$: wrote $\frac{1}{2}\sin(x)\cos(x)$ | Power drops: $[\sin x]^{1/2} \to \frac{1}{2}[\sin x]^{-1/2}$ |

#### General Error Prevention Protocol

**Before each problem (10 seconds):**
1. ✓ Read the problem **TWICE**
2. ✓ Identify which rules needed
3. ✓ Count chain rule layers

**After each problem (5 seconds):**
1. ✓ Did I complete ALL chain rule layers?
2. ✓ Did I use $v'$ not $v$?
3. ✓ Are my signs correct?

---

## Quick Reference Card

### All Derivatives in One Table

| Function | Derivative |
|----------|------------|
| $c$ (constant) | $0$ |
| $x^n$ | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $\frac{1}{x}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\cot x$ | $-\csc^2 x$ |
| $\sec x$ | $\sec x \tan x$ |
| $\csc x$ | $-\csc x \cot x$ |

### Rules

| Rule | Formula |
|------|---------|
| **Product** | $(fg)' = f'g + fg'$ |
| **Quotient** | $\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}$ |
| **Chain** | $[f(g(x))]' = f'(g(x)) \cdot g'(x)$ |
| **Triple** | $(fgh)' = f'gh + fg'h + fgh'$ |

### Trig Identities (Simplify First!)

| Expression | Simplifies To |
|------------|---------------|
| $\tan x$ | $\frac{\sin x}{\cos x}$ |
| $\cot x$ | $\frac{\cos x}{\sin x}$ |
| $\sec x$ | $\frac{1}{\cos x}$ |
| $\csc x$ | $\frac{1}{\sin x}$ |
| $\sin x \cos x$ | $\frac{1}{2}\sin(2x)$ |
| $\sin^2 x + \cos^2 x$ | $1$ |

### Limit Patterns

| Form | Result |
|------|--------|
| $\frac{n}{0}$ | $\pm\infty$ |
| $\frac{0}{n}$ | $0$ |
| $\frac{0}{0}$ | Indeterminate — simplify! |

---

- *Created: 2026-02-05*
- *Coverage: TCX2101 Ch 1.1 - 3.4*
- *Purpose: 宝典 for Class Test 1 and beyond*

---

> **Source:** NUS TCX2101 Calculus and Linear Algebra, prepared during CT1 prep week
>
> **GitHub:** [Session notes](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/sessions/2026-02-05/session-notes.md)
