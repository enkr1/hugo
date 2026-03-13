---
title: "TCX2101 | CT2 Helpsheet (A4 One Side)"
slug: "nus-bit-tcx2101-ct2-helpsheet"
date: 2026-03-13
description: "A4 one-side helpsheet for CT2 (16 Mar). Focus: Improper Integrals + Volume by Rotation."
tags: ["nus", "math", "calculus", "cheatsheet", "tcx2101", "ct2"]
categories: ["Education", "Mathematics"]
toc: false
math: true
draft: false
sticky: 2101
---

**CT2 — 16 Mar 2026 | Scope: 3.5–4.10 | Focus: Improper Integrals + Volume**

---

## Standard Antiderivatives

<div style="overflow-x:auto">
<table style="table-layout:fixed; width:100%">
<colgroup><col style="width:25%"><col style="width:25%"><col style="width:25%"><col style="width:25%"></colgroup>
<thead><tr><th>$f(x)$</th><th>$\int f(x)\,dx$</th><th>$f(x)$</th><th>$\int f(x)\,dx$</th></tr></thead>
<tbody>
<tr><td>$x^n$ $(n\neq -1)$</td><td>$\frac{x^{n+1}}{n+1}$</td><td>$\frac{1}{x}$</td><td>$\ln|x|$</td></tr>
<tr><td>$e^x$</td><td>$e^x$</td><td>$e^{-x}$</td><td>$-e^{-x}$</td></tr>
<tr><td>$\sin x$</td><td>$-\cos x$</td><td>$\cos x$</td><td>$+\sin x$</td></tr>
<tr><td>$\sec^2 x$</td><td>$\tan x$</td><td>$\csc^2 x$</td><td>$-\cot x$</td></tr>
<tr><td>$\frac{1}{1+x^2}$</td><td>$\tan^{-1} x$</td><td>$\frac{1}{\sqrt{1-x^2}}$</td><td>$\sin^{-1} x$</td></tr>
</tbody>
</table>
</div>

> **Power rule trap:** divide by **NEW** exponent $(n+1)$, not old $(n)$!

---

## Must-Know Limits

<div style="overflow-x:auto">
<table style="table-layout:fixed; width:100%">
<colgroup><col style="width:33%"><col style="width:33%"><col style="width:34%"></colgroup>
<tbody>
<tr><td>$\tan^{-1}(\infty) = \frac{\pi}{2}$</td><td>$\tan^{-1}(0) = 0$</td><td>$\tan^{-1}(-\infty) = -\frac{\pi}{2}$</td></tr>
<tr><td>$e^{-\infty} = 0$</td><td>$e^0 = 1$</td><td>$\ln(0^+) = -\infty$</td></tr>
<tr><td>$\frac{1}{\infty} = 0$</td><td>$\frac{1}{0^+} = \infty$</td><td>$\lim_{x\to 0^+} x\ln x = 0$</td></tr>
</tbody>
</table>
</div>

---

## Improper Integrals (4.8)

**Type I** (infinite limits): $\int_a^\infty f\,dx = \lim_{b\to\infty}\int_a^b f\,dx$

**Type II** (discontinuity at endpoint $a$): $\int_a^b f\,dx = \lim_{c\to a^+}\int_c^b f\,dx$

**Interior discontinuity at $d$:** MUST split → $\int_a^d + \int_d^b$. Both must converge.

### $p$-Test

| | Converges | Diverges |
|--|-----------|----------|
| $\int_1^\infty \frac{1}{x^p}\,dx$ | $p > 1$ | $p \leq 1$ |
| $\int_0^1 \frac{1}{x^p}\,dx$ | $p < 1$ | $p \geq 1$ |

> At $\infty$: need fast decay ($p>1$). At $0$: need mild blow-up ($p<1$). **Directions flip!**

### Traps

- $\int_{-1}^1 \frac{1}{x^2}\,dx$ — looks finite but interior blow-up at $0$ → **divergent**
- Removable singularity ($\sin(x)/x \to 1$) → bounded → **convergent**
- $\ln$ singularity weaker than any $x^{-p}$ → typically **convergent**

---

## Volume (4.9–4.10)

### Formulas

| Method | Formula | When |
|--------|---------|------|
| **Disk** | $\pi\int_a^b [f(x)]^2\,dx$ | Solid, no hole, $\perp$ to axis |
| **Washer** | $\pi\int_a^b [R^2 - r^2]\,dx$ | Two curves, hole in middle |
| **Shell** | $2\pi\int_a^b (\text{radius})(\text{height})\,dx$ | Parallel to axis |
| **Cross-section** | $\int_a^b A(x)\,dx$ | Non-revolution |

### Cross-Section Areas

| Shape | $A$ (side $s$) |
|-------|----------------|
| Square | $s^2$ |
| Semicircle (diameter $s$) | $\frac{\pi}{8}s^2$ |
| Equil. triangle | $\frac{\sqrt{3}}{4}s^2$ |

### Shifted Axis

Axis at $y = k$: radius $= f(x) - k$ (if axis below) or $k - f(x)$ (if axis above)

Axis at $x = k$: shell radius $= |x - k|$

### Method Selection

| Axis | $y = f(x)$ given | Easier method |
|------|-------------------|---------------|
| $x$-axis | Slice $dx$ $\perp$ axis | **Disk/Washer** |
| $y$-axis | Slice $dx$ $\parallel$ axis | **Shell** (avoids solving for $x$) |
| $y = k$ | Same as $x$-axis but shifted | **Disk/Washer** + shift |
| $x = k$ | Same as $y$-axis but shifted | **Shell** + shift |

---

## Integration Techniques (Supporting)

**IBP:** $\int u\,dv = uv - \int v\,du$ — LIATE priority: Log > InvTrig > Algebra > Trig > Exp

**Partial Fractions:** $\frac{A}{x-a} \to A\ln|x-a|$ · $\frac{A}{(x-a)^n} \to \frac{A}{-(n-1)(x-a)^{n-1}}$

**Power reduction:** $\sin^2 u = \frac{1-\cos 2u}{2}$ · $\cos^2 u = \frac{1+\cos 2u}{2}$

**Trig sub:** $\sqrt{a^2+x^2} \to x=a\tan\theta$ · $\sqrt{a^2-x^2} \to x=a\sin\theta$ · $\sqrt{x^2-a^2} \to x=a\sec\theta$

---

## Common Errors

| Error | Fix |
|-------|-----|
| Evaluate across interior discontinuity | ALWAYS scan for zeros in denominator → split |
| $\div$ old exponent in power rule | $\div$ NEW exponent $(n+1)$ |
| Swap default to $R_1 \leftrightarrow R_2$ | Check ALL rows before choosing swap target |
| $\int\cos x = -\sin x$ | That's the derivative. $\int\cos x = +\sin x$ |
| Forgot shifted axis radius | Radius $= f(x) - k$, not $f(x)$ |

---

*Full cheatsheet: [CT2 Cheatsheet (3.5–4.10)]({{< ref "tcx2101-calculus-cheatsheet-ct2" >}}) · [CT1 Cheatsheet]({{< ref "tcx2101-calculus-cheatsheet" >}})*
