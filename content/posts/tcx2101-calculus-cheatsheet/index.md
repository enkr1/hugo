---
title: "TCX2101 | Calculus Cheatsheet (Chapter 1.1 – 3.4)"
slug: "nus-bit-tcx2101-cheatsheet-1.1-3.4"
date: 2026-02-05
description: "Clean formula reference for NUS TCX2101: Functions, Limits, Continuity, Differentiation, Extreme Values"
tags: ["nus", "math", "calculus", "cheatsheet", "tcx2101"]
categories: ["Education", "Mathematics"]
toc: true
math: true
draft: false
---

> **TCX2101 (NUS Math) series:** [Notebook]({{< ref "tcx2101-notebook" >}}) · **Calculus (1.1-3.4) (current)** · [Calculus (3.5-4.11)]({{< ref "tcx2101-calculus-cheatsheet-ct2" >}}) · [CT2 helpsheet]({{< ref "tcx2101-ct2-helpsheet" >}}) · [CT3 helpsheet]({{< ref "tcx2101-ct3-helpsheet" >}}) · [Finals helpsheet]({{< ref "tcx2101-finals-helpsheet" >}})

> **Current focus:** [TCX2101 Finals Helpsheet (Apr 28 exam)]({{< ref "tcx2101-finals-helpsheet" >}}). This page kept for history and cross-reference.

for the full chapter-by-chapter notes, see my [TCX2101 notebook]({{< ref "tcx2101-notebook" >}}). for CT2 formulas (Chapters 3.5–4.11), see the [CT2 cheatsheet]({{< ref "tcx2101-calculus-cheatsheet-ct2" >}}).

---

## 1: Functions

### 1.1 Domain & Range

| Type | Restriction | Example |
|------|-------------|---------|
| **Polynomial** | $\mathbb{R}$ | $x^3 - 2x + 1$ |
| **Rational** | Denom $\neq 0$ | $\frac{1}{x-2}$ → $x \neq 2$ |
| **Square root** | Inside $\geq 0$ | $\sqrt{x-3}$ → $x \geq 3$ |
| **√ in denom** | Inside $> 0$ (strict!) | $\frac{1}{\sqrt{x-3}}$ → $x > 3$ |
| **Logarithm** | Inside $> 0$ | $\ln(x-1)$ → $x > 1$ |

> 💡 Multiple restrictions? Find each, then intersect.

**Example:** $f(x) = \sqrt{x^2 - 9}$ → need $x^2 \geq 9$ → $|x| \geq 3$ → Domain: $(-\infty, -3] \cup [3, \infty)$ — 2 regions!

---

### 1.2 Transformations

$$\text{Inside } f() = \text{Horizontal (opposite)} \quad | \quad \text{Outside } f() = \text{Vertical (same)}$$

| Transformation | Formula | Effect |
|----------------|---------|--------|
| Shift up/down | $f(x) \pm k$ | Vertical (same direction) |
| Shift left/right | $f(x \mp h)$ | Horizontal (opposite!) |
| Vertical stretch/compress | $a \cdot f(x)$ | $a>1$ stretch, $0<a<1$ compress |
| Horizontal stretch/compress | $f(bx)$ | $b>1$ compress, $0<b<1$ stretch (opposite!) |
| Reflect x-axis / y-axis | $-f(x)$ / $f(-x)$ | Flip vertical / horizontal |

> 💡 Read inside-out: $2f(x-3)+1$ → right 3, stretch ×2, up 1

#### Composition

$$(f \circ g)(x) = f(g(x)) \qquad D_{f \circ g} = \{x \in D_g \mid g(x) \in D_f\}$$

> ⚠️ $f \circ g \neq g \circ f$ — order matters!

#### Modulus Transformations

| Transform | Effect |
|-----------|--------|
| $\lvert f(x) \rvert$ | Negative $y$ flipped up (reflect below x-axis) |
| $f(\lvert x \rvert)$ | Symmetric about y-axis (mirror left = right) |

---

### 1.3–1.4 Types & Inverses

| Type | Definition | Example |
|------|-----------|---------|
| **Polynomial** | $a_nx^n + ... + a_0$ | $x^3 - 2x + 1$ |
| **Rational** | $P(x)/Q(x)$ | $(x^2+1)/(x-1)$ |
| **Transcendental** | Has trig/exp/log | $x^2 + \sin x$ |

> 💡 Any transcendental part → whole function is transcendental

#### Inverse Functions

$$f^{-1}(f(x)) = x \quad \text{and} \quad f(f^{-1}(x)) = x$$

| Function | Inverse | Domain of Inverse |
|----------|---------|-------------------|
| $e^x$ | $\ln x$ | $x > 0$ |
| $\ln x$ | $e^x$ | $\mathbb{R}$ |
| $\sin x$ | $\arcsin x$ | $[-1, 1]$ |
| $\cos x$ | $\arccos x$ | $[-1, 1]$ |
| $\tan x$ | $\arctan x$ | $\mathbb{R}$ |

#### Exponent Rules

| Rule | Formula |
|------|---------|
| Product | $a^x \cdot a^y = a^{x+y}$ |
| Quotient | $\frac{a^x}{a^y} = a^{x-y}$ |
| Power of power | $(a^x)^y = a^{xy}$ |
| Product to power | $a^x \cdot b^x = (ab)^x$ |
| Quotient to power | $\frac{a^x}{b^x} = \left(\frac{a}{b}\right)^x$ |

> 💡 All exponent rules follow from $a^x = e^{x \ln a}$

#### Log Rules

| Rule | Formula |
|------|---------|
| Product | $\log_a(xy) = \log_a x + \log_a y$ |
| Quotient | $\log_a\left(\frac{x}{y}\right) = \log_a x - \log_a y$ |
| Power | $\log_a(x^c) = c \log_a x$ |
| Change of base | $\log_a x = \frac{\log_b x}{\log_b a} = \frac{\ln x}{\ln a}$ |

> 💡 Log is inverse of exp: $\log_a x = y \Leftrightarrow a^y = x$. Special: $\log_a a = 1$, $\log_a 1 = 0$

---

### Ch1 Mistakes ⚠️

| Mistake | Wrong | Correct |
|---------|-------|---------|
| √ in **denominator** | $x \geq 3$ | $x > 3$ (strict!) |
| Horizontal shift | $f(x-3)$ shifts left | $f(x-3)$ shifts RIGHT (opposite!) |
| $\sqrt{x^2-9}$ domain | $x \geq 3$ only | $x \leq -3$ OR $x \geq 3$ (two regions!) |
| Numerator = 0 | Not allowed | $\frac{0}{5} = 0$ is FINE |

---

## 2: Limits & Continuity

### 2.1–2.2 Limits & Indeterminate Forms

#### One-Sided Limits

$$\lim_{x \to a^-} f(x) = L \text{ (from left)} \qquad \lim_{x \to a^+} f(x) = L \text{ (from right)}$$

$$\lim_{x \to a} f(x) = L \iff \lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L$$

> 💡 Two-sided exists **only if** both one-sided exist **and are equal**.
>
> Left ≠ Right → Jump!
>
> Left = Right ≠ f(a) → Hole!

#### Limit Laws

If $\lim_{x \to a} f(x) = L$ and $\lim_{x \to a} g(x) = M$:

| Law | Formula | Condition |
|-----|---------|-----------|
| Sum/Diff | $\lim[f \pm g] = L \pm M$ | — |
| Product | $\lim[f \cdot g] = L \cdot M$ | Both finite |
| Quotient | $\lim\frac{f}{g} = \frac{L}{M}$ | $M \neq 0$ |
| Power | $\lim[f^n] = L^n$ | — |
| Root | $\lim\sqrt[n]{f} = \sqrt[n]{L}$ | $L \geq 0$ if $n$ even |
| Scalar | $\lim[k \cdot f] = kL$ | — |

#### Division Patterns

| Form | Result |
|------|--------|
| $\frac{5}{0}$ | $\pm\infty$ (blows up 🚀) |
| $\frac{0}{5}$ | $0$ |
| $\frac{0}{0}$ | **Indeterminate** 🤔 — must simplify! |

#### The 7 Indeterminate (不定式) Forms

$$\frac{0}{0}, \quad \frac{\infty}{\infty}, \quad 0 \cdot \infty, \quad \infty - \infty, \quad 0^0, \quad 1^\infty, \quad \infty^0$$

#### Solving $\frac{0}{0}$

**Factor and Cancel:**
$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} \frac{(x-2)(x+2)}{x-2} = 4$$

**Conjugate (radicals):**
$$\lim_{x \to 0} \frac{\sqrt{x+4} - 2}{x} = \lim_{x \to 0} \frac{x}{x(\sqrt{x+4} + 2)} = \frac{1}{4}$$

---

### 2.3 Limits at Infinity

$$\lim_{x \to \infty} \frac{a_nx^n + ...}{b_mx^m + ...}$$

| Condition | Result | Trick |
|-----------|--------|-------|
| $n < m$ (top smaller) | $0$ | Top "loses" |
| $n = m$ (same degree) | $\frac{a_n}{b_m}$ | Leading coefficients |
| $n > m$ (top bigger) | $\pm\infty$ | Top "wins" |

**Example:** $\lim_{x \to \infty} \frac{3x^2 + 1}{x^2 - 5} = \frac{3}{1} = 3$

#### Direct Substitution

For any polynomial or rational function (where defined): $\lim_{x \to a} f(x) = f(a)$ — just plug in!

> 💡 Only use when there's NO $\frac{0}{0}$. If $\frac{0}{0}$ → simplify first (factor/conjugate).

#### Squeeze (Sandwich) Theorem

If $g(x) \leq f(x) \leq h(x)$ near $c$, and $\lim_{x \to c} g(x) = \lim_{x \to c} h(x) = L$, then $\lim_{x \to c} f(x) = L$.

> 💡 sin and cos both bounded in $[-1,1]$. Classic: $\lim_{x \to 0} x^2\sin(1/x) = 0$, $\lim_{x \to 0} x\cos(1/x) = 0$ — bounded × vanishing → squeezed to 0 🥪
>
> ⚠️ $\sin x \approx x$ only when $x \to 0$! Here $1/x \to \infty$, so can't use approximation.

#### Special Trig Limits

$$\lim_{x \to 0} \frac{\sin x}{x} = 1 \qquad \lim_{x \to 0} \frac{1 - \cos x}{x} = 0$$

#### Asymptotes

| Type | Condition | How to Find |
|------|-----------|-------------|
| **Horizontal** $y = b$ | $\lim_{x \to \pm\infty} f(x) = b$ | Use degree comparison (0, 1, or 2 HAs) |
| **Vertical** $x = a$ | $\lim_{x \to a} f(x) = \pm\infty$ | Denom $= 0$ but numer $\neq 0$ |
| **Oblique** $y = mx + c$ | $\deg(\text{top}) = \deg(\text{bot}) + 1$ | Polynomial long division → quotient |

> 💡 Oblique only exists when top is EXACTLY one degree higher. Do long division, ignore remainder.

**Example:** $f(x) = \frac{x^2 + 1}{x - 1}$: deg 2 vs deg 1 → oblique. Long division: $x^2 + 1 = (x+1)(x-1) + 2$ → asymptote $y = x + 1$

---

### 2.4 Continuity & Immediate Value Theorem (IVT)

#### 3-Part Test at $x = a$

1. $f(a)$ exists
2. $\lim_{x \to a} f(x)$ exists
3. $\lim_{x \to a} f(x) = f(a)$

#### 4 Types of Discontinuity

| Type | Condition |
|------|-----------|
| **Removable (Hole)** | $\lim_{x \to a^-} f = \lim_{x \to a^+} f \neq f(a)$ |
| **Jump** | $\lim_{x \to a^-} f \neq \lim_{x \to a^+} f$ |
| **Infinite** | $\lim_{x \to a} f = \pm\infty$ |
| **Oscillatory** | Limit DNE (e.g., $\sin(1/x)$ at 0) |

> 💡 **Hole detection:** WHERE = denom = 0 in original. VALUE = simplify then substitute.

#### Intermediate Value Theorem

If $f$ continuous on $[a, b]$ and $N$ between $f(a)$ and $f(b)$, then $\exists\, c \in (a, b)$ with $f(c) = N$.

> 💡 "Can't teleport through floors" — continuous function must cross zero.

**Example:**
$f(x) = x^3 - x - 1$ on $[1, 2]$:
$f(1) = -1 < 0$,
$f(2) = 5 > 0$
= root exists in $(1, 2)$ ✓

---

### Ch2 Mistakes ⚠️

| Mistake | Wrong | Correct |
|---------|-------|---------|
| $5/0$ | "undefined" or "0" | $\pm\infty$ (blows up!) |
| $0/0$ | "0" | Indeterminate — simplify! |
| $0 \cdot \infty$ | $= 0$ | Indeterminate! |
| Hole vs Jump | Both "don't match" | Hole: L=R≠f(a), Jump: L≠R |
| Divide by highest power | Always do it | Only for $x \to \infty$, not $x \to a$ |

---

## 3: Differentiation

### 3.1 Definition & Tangent Line

#### Derivative (two equivalent forms)

$$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h} = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}$$

> 💡 Second form useful for exam: given a limit, match pattern to identify f(x) and a

- **Geometric:** Slope of tangent line
- **Physical:** Instantaneous rate of change

**Tangent line** at $P(a, f(a))$: $\quad y = f(a) + f'(a)(x - a)$

#### Differentiability

**On closed $[a,b]$:** differentiable on interior $(a,b)$ + right-hand derivative at $a$ + left-hand derivative at $b$ exist:

$$\text{Right: } \lim_{h \to 0^+} \frac{f(a+h) - f(a)}{h} \qquad \text{Left: } \lim_{h \to 0^-} \frac{f(b+h) - f(b)}{h}$$

> 💡 Piecewise check: Step 1 — values match (continuous)? Step 2 — slopes match (differentiable)?

#### Differentiable → Continuous (one-way!)

$$\text{Differentiable at } c \Rightarrow \text{Continuous at } c \quad \checkmark$$
$$\text{Continuous at } c \Rightarrow \text{Differentiable at } c \quad \text{FALSE! (e.g. } \lvert x \rvert \text{ at } 0\text{)}$$

---

### 3.2 Rules (Power, Product, Quotient, Chain, Trig)

#### Core Rules

| Rule | Formula | Notes |
|------|---------|-------|
| Power | $\frac{d}{dx}[x^n] = nx^{n-1}$ | works for ALL real $n$ |
| Constant | $\frac{d}{dx}[c] = 0$, $\frac{d}{dx}[cf] = cf'$ | |
| Sum/Diff | $(u \pm v)' = u' \pm v'$ | Let $f,g = u,v$ |
| Product | $(uv)' = u'v + uv'$ | |
| Quotient | $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$ | $u$ = nom, $v$ = denom. "u'v **MINUS** uv', over v²" |
| Chain | $[f(g(x))]' = f'(g(x)) \cdot g'(x)$ | outside'(keep inside) × inside' |
| Triple Product | $(uvw)' = u'vw + uv'w + uvw'$ | 每次只导一个 |
| Reciprocal | $\left(\frac{1}{f}\right)' = \frac{-f'}{f^2}$ | = power+chain on $f^{-1}$ ⚠️ 别忘了 $f'$！ |

#### Higher-Order Derivatives

$$f''(x) = \frac{d^2f}{dx^2}, \quad f'''(x) = \frac{d^3f}{dx^3}, \quad f^{(k)}(x) = \frac{d^k f}{dx^k}$$

**Examples:**

$$\frac{d}{dx}[x^2 \sin x] = 2x\sin x + x^2\cos x \quad \text{← Product: } u'v + uv'$$

$$\frac{d}{dx}\left[\frac{x^2}{x+1}\right] = \frac{2x(x+1) - x^2}{(x+1)^2} = \frac{x^2 + 2x}{(x+1)^2} \quad \text{← Quotient: } \frac{u'v - uv'}{v^2}$$

$$\frac{d}{dx}[\sin(x^2)] = \cos(x^2) \cdot 2x \quad \text{← Chain: outside' × inside'}$$

$$\frac{d}{dx}\left[\frac{e^{x^2}}{\cos x}\right] = \frac{2x \cdot e^{x^2} \cdot \cos x + e^{x^2} \cdot \sin x}{\cos^2 x} \quad \text{← Quotient + Chain + Trig}$$

#### Trig Reciprocals

| Expression | Simplifies To |
|------------|---------------|
| $\tan x$ | $\frac{\sin x}{\cos x}$ |
| $\cot x$ | $\frac{\cos x}{\sin x}$ |
| $\sec x$ | $1 / \cos x$ |
| $\csc x$ | $1 / \sin x$ |

#### Trig Derivatives

| Function | Derivative | Pattern |
|----------|------------|---------|
| $\sin x$ | $\cos x$ | — |
| $\cos x$ | $-\sin x$ | — |
| $\tan x$ | $\sec^2 x$ | **Squared family** |
| $\sec x$ | $\sec x \tan x$ | **Multiply family** |
| $\cot x$ | $-\csc^2 x$ | **Squared** (CO = negative) |
| $\csc x$ | $-\csc x \cot x$ | **Multiply** (CO = negative) |

> 💡 CO = NEGATIVE: cot and csc always have negative signs!

**With Chain Rule:** $\frac{d}{dx}[\sin(3x)] = 3\cos(3x)$, $\quad\frac{d}{dx}[\cos^2(x)] = -2\cos(x)\sin(x)$

---

### 3.3 Exponential, Log & Implicit Diff

#### Exponential & Logarithm

$$\frac{d}{dx}[e^x] = e^x \qquad \frac{d}{dx}[e^u] = e^u \cdot u'$$

> 💡 $e^x$ is "immortal" — derivative can't kill it!

$$\frac{d}{dx}[\ln x] = \frac{1}{x} \qquad \frac{d}{dx}[\ln u] = \frac{u'}{u}$$

**Examples:** $\frac{d}{dx}[e^{3x}] = 3e^{3x}$, $\quad\frac{d}{dx}[\ln(\sin x)] = \frac{\cos x}{\sin x} = \cot x$

#### General Exponential & Log

$$\frac{d}{dx}[a^u] = a^u \ln(a) \cdot u' \qquad \frac{d}{dx}[\log_a u] = \frac{u'}{u \ln(a)}$$

> 💡 When $a = e$: $\ln(e) = 1$, so formulas simplify to $e^u \cdot u'$ and $u'/u$

#### Inverse Trig Derivatives

| Function | Derivative | Condition |
|----------|------------|-----------|
| $\sin^{-1}(u)$ | $\frac{u'}{\sqrt{1 - u^2}}$ | $\lvert u \rvert < 1$ |
| $\cos^{-1}(u)$ | $\frac{-u'}{\sqrt{1 - u^2}}$ | $\lvert u \rvert < 1$ |
| $\tan^{-1}(u)$ | $\frac{u'}{1 + u^2}$ | — |
| $\cot^{-1}(u)$ | $\frac{-u'}{1 + u^2}$ | — |
| $\sec^{-1}(u)$ | $\frac{u'}{\lvert u \rvert\sqrt{u^2 - 1}}$ | $\lvert u \rvert > 1$ |
| $\csc^{-1}(u)$ | $\frac{-u'}{\lvert u \rvert\sqrt{u^2 - 1}}$ | $\lvert u \rvert > 1$ |

> 💡 Same CO = NEGATIVE pattern! cos⁻¹, cot⁻¹, csc⁻¹ all have negative signs

#### Implicit Differentiation

**When:** Can't solve for $y$ explicitly. **Method:**
1. Differentiate both sides w.r.t. $x$ (chain rule on $y$: $\frac{d}{dx}[f(y)] = f'(y)\frac{dy}{dx}$)
2. Collect $\frac{dy}{dx}$ terms → solve

**Example:** $x^2 + y^2 = 25$ → $2x + 2y\frac{dy}{dx} = 0$ → $\frac{dy}{dx} = -\frac{x}{y}$

**Example (product rule on $xy$):** $x^2 + xy + y^2 = 7$
$$2x + y + x\frac{dy}{dx} + 2y\frac{dy}{dx} = 0 \quad\Rightarrow\quad \frac{dy}{dx} = \frac{-2x - y}{x + 2y}$$

---

### 3.4 Extreme Values

#### Critical Points

Interior point $c$ where $f'(c) = 0$ OR $f'(c)$ DNE (but $f(c)$ must exist).

> 💡 CP $\not\Rightarrow$ local extremum! (e.g. $x^3$ at $x=0$). But local extremum $\Rightarrow$ CP.

#### Closed Interval Method (absolute max/min on $[a,b]$)

EVT guarantees: continuous on closed $[a,b]$ → absolute max and min exist.

1. **Solve** $f'(x) = 0$ → CPs in $(a,b)$
2. **Evaluate** $f$ at CPs + endpoints (use $f(x)$, not $f'$!)
3. `max(values)` = abs max, `min(values)` = abs min

**Example:** $f(x) = x^3 - 6x^2 + 9x + 2$ on $[-1, 4]$

$f'(x) = 3(x-1)(x-3) = 0$ → CPs: $x = 1, 3$

| $x$ | $-1$ | $1$ | $3$ | $4$ |
|-----|------|-----|-----|-----|
| $f(x)$ | $-14$ | $6$ | $2$ | $6$ |

**Abs max:** $6$ at $x = 1, 4$ | **Abs min:** $-14$ at $x = -1$

#### First Derivative Test (local classify — sign change)

| Left | Right | Shape | Result |
|------|-------|:-----:|--------|
| $f' > 0$ | $f' < 0$ | /\ | Local **max** |
| $f' < 0$ | $f' > 0$ | \\/ | Local **min** |
| Same sign | Same sign | — | Neither |

> 💡 变号 = sign change. Pick test points each side of CP, check sign of $f'$.

#### Second Derivative Test (local classify — concavity)

| $f''(c)$ | Shape | Result |
|----------|-------|--------|
| $> 0$ | ∪ 笑脸 (bowl) | Local **min** — 碗底 |
| $< 0$ | ∩ 哭脸 (arch) | Local **max** — 拱顶 |
| $= 0$ | ??? | **Inconclusive** → use FDT! |

> ⚠️ Counter-intuitive! 笑脸 ∪ = min, 哭脸 ∩ = max. Bowl holds water at **bottom**.

#### $f$ / $f'$ / $f''$ Hierarchy ⭐️

| | $f(x)$ | $f'(x)$ | $f''(x)$ |
|---|--------|---------|----------|
| **Meaning** | Height 高度 | Slope 斜率 | Slope's change rate |
| **At peaks/valleys** | Has the value | $= 0$ | Tells which (max/min) |
| **Role** | VALUES to compare | TOOL to find CPs | TOOL to classify (SDT) |

#### Three Methods Comparison (三种方法对比)

| 方法 | 找什么 | 怎么判 |
|------|--------|--------|
| **CIM** | Absolute max/min | 比 $f(x)$ 值大小（大=max，小=min） |
| **FDT** | Local max/min | 看 $f'$ 变号：$+→-$ max，$-→+$ min |
| **SDT** | Local max/min | $f''(c)>0$ min，$f''(c)<0$ max |

> ⚠️ **不要混！** SDT "大于=min" 是弯曲方向。CIM 比大小就是小学数学：最大=max，最小=min。

#### Which Tool When?

```
"Classify this CP"
       │
       ▼
 Try SDT first (快!)
 Compute f''(c)
       │
  ┌────┼────┐
  ▼    ▼    ▼
 >0   <0   =0
 min  max  Inconclusive
            │
            ▼
       FDT backup (慢但稳)
       f' sign change
```

#### Concavity (凹凸 / Second Derivative)

| $f''(x)$ | $f(x)$ is... | 记法 |
|----------|--------------|------|
| $f''(x) > 0$ | Concave up ∪ (凹上) | 能装水的杯子 cup |
| $f''(x) < 0$ | Concave down ∩ (凹下) | 水会流走的帽子 cap |
| $f''(x) = 0$ | Potential inflection point (拐点候选) | 必须验证变号！ |

#### Inflection Points (拐点)

The point where concavity **flips** (凹凸翻转: ∪ → ∩ or ∩ → ∪).

**3-step process:**
1. $f''(x) = 0$ → candidate points
2. Sign chart: check $f''$ changes sign across candidate
3. Sign change → IP ✓, no sign change → NOT IP ✗

Get y-coordinate: sub $x$ back into $f(x)$ (not $f'$ or $f''$!)

> ⚠️ $f''(x) = 0$ alone is NOT enough — must verify sign change!

---

### ⚠️ Ch3 Mistakes (11 errors + prevention)

| # | Error | Fix |
|---|-------|-----|
| 3 | Read $\tan(x^3)$ as $\tan^3(x)$ | Read notation TWICE! |
| 9 | $-\csc(2x)$ not $-\csc^2(2x)$ | $\frac{d}{dx}[\cot u] = -\csc^2(u) \cdot u'$ — SQUARED! |
| 10 | $u = x^3 + x \to u' = 3x^2$ (forgot +1) | Differentiate EVERY term |
| 12 | Used $\tan(x)$ not $\sec^2(x)$ | Product rule: use $v'$, not $v$ |
| 13 | Quotient rule with + not − | "Lo d-Hi **MINUS** Hi d-Lo" — MINUS! |
| 14 | $\cos^3(2x)$: got $6\cos^2(2x)$ | Missing $-\sin(2x)$! ALL chain layers |
| 17 | Triple product messy | Simplify first: $\sin x \cos x \tan x = \sin^2 x$ |
| 20 | Got $(x - 2y)$ not $(x + 2y)$ | Collect terms, check signs! |
| 24 | Inner deriv: $(3x^2 - x)$ not $(3x^2 - 2)$ | $\frac{d}{dx}[-2x] = -2$, not $-x$ |
| 26 | Read $\sin(x^2) \cdot \cos(x^2)$ as division | Read · vs / carefully! |
| 28 | $\sqrt{\sin x}$: wrote $\frac{1}{2}\sin(x)\cos(x)$ | $[\sin x]^{1/2} \to \frac{1}{2}[\sin x]^{-1/2}$ |

**Before each problem:** ✓ Read TWICE → ✓ ID rules → ✓ Count chain layers

**After each problem:** ✓ All chain layers done? → ✓ Used $v'$ not $v$? → ✓ Signs correct?

---

## 速查卡 Quick Reference

### All Derivatives

| Function | Derivative |
|----------|------------|
| $c$ | $0$ |
| $x^n$ | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $1/x$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\cot x$ | $-\csc^2 x$ |
| $\sec x$ | $\sec x \tan x$ |
| $\csc x$ | $-\csc x \cot x$ |
| $a^x$ | $a^x \ln a$ |
| $\log_a x$ | $\frac{1}{x \ln a}$ |
| $\sin^{-1} x$ | $\frac{1}{\sqrt{1-x^2}}$ |
| $\cos^{-1} x$ | $\frac{-1}{\sqrt{1-x^2}}$ |
| $\tan^{-1} x$ | $\frac{1}{1+x^2}$ |
| $\sec^{-1} x$ | $\frac{1}{\lvert x \rvert\sqrt{x^2-1}}$ |

### All Rules

| Rule | Formula |
|------|---------|
| Product | $(fg)' = f'g + fg'$ |
| Quotient | $(f/g)' = (f'g - fg') / g^2$ |
| Chain | $[f(g)]' = f'(g) \cdot g'$ |
| Triple | $(fgh)' = f'gh + fg'h + fgh'$ |

### Trig Identities

#### Pythagorean (3 forms)

| Identity | Rearrangement |
|----------|---------------|
| $\sin^2 x + \cos^2 x = 1$ | $\sin^2 x = 1 - \cos^2 x$ |
| $1 + \tan^2 x = \sec^2 x$ | $\tan^2 x = \sec^2 x - 1$ |
| $\cot^2 x + 1 = \csc^2 x$ | $\cot^2 x = \csc^2 x - 1$ |

> 💡 Divide sin²+cos²=1 by cos² → get tan²+1=sec². Divide by sin² → get cot²+1=csc².

#### Addition Formulas

$$\sin(A \pm B) = \sin A \cos B \pm \cos A \sin B$$
$$\cos(A \pm B) = \cos A \cos B \mp \sin A \sin B$$

> 💡 sin keeps ±, cos FLIPS to ∓

#### Double Angle

$$\sin(2x) = 2\sin x \cos x$$
$$\cos(2x) = \cos^2 x - \sin^2 x = 2\cos^2 x - 1 = 1 - 2\sin^2 x$$

> 💡 cos(2x) has 3 forms! Pick whichever simplifies your problem.

### Limit Patterns

| Form | Result |
|------|--------|
| $n/0$ | $\pm\infty$ |
| $0/n$ | $0$ |
| $0/0$ | Indeterminate — simplify! |

---

### "There Exists $c$" — Which Theorem?

```text
"there exists c such that ___"
               │
        What fills the blank?
               │
    ┌──────────┼──────────┐
    │          │          │
 f(c) = k   f'(c) = 0   f'(c) = ratio
    │          │          │
   IVT      Rolle's      MVT
```

| You see... | Theorem | What it says |
|-----------|---------|-------------|
| $f(c) = k$ (function value) | **IVT** | No derivative involved. Continuous $f$ crosses any value between $f(a)$ and $f(b)$ |
| $f'(c) = 0$ | **Rolle's** | $f(a) = f(b)$ + continuous + differentiable → flat point exists |
| $f'(c) = \frac{f(b)-f(a)}{b-a}$ | **MVT** | Derivative = average rate of change somewhere in $(a,b)$ |

> 💡 **Rule of thumb:** See "there exists $c$" + a derivative? → MVT. No derivative? → IVT.
>
> **Pattern recognition:** Look at the equation you need to prove. Match the **shape** to the theorem's conclusion. Work backwards from target → choose $f(x)$ and $[a,b]$.

---

- *Coverage: TCX2101 Chapters 1.1–3.4 + pattern cards*
- *Purpose: Class Test reference*
- *Format:* Closed book — memorise this!

---

- **Source:** NUS TCX2101 Calculus and Linear Algebra, CT1 prep
- **GitHub:** [Session notes](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/sessions/2026-02-05/session-notes.md)
