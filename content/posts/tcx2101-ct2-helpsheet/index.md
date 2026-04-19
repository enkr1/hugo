---
title: "TCX2101 | CT2 Helpsheet (A4 Double-Sided)"
slug: "nus-bit-tcx2101-ct2-helpsheet"
date: 2026-03-13
description: "A4 double-sided helpsheet for CT2 (16 Mar). Focus: Improper Integrals + Volume by Rotation."
tags: ["nus", "math", "calculus", "cheatsheet", "tcx2101", "ct2"]
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

> **Current focus:** [TCX2101 Finals Helpsheet (Apr 28 exam)]({{< ref "tcx2101-finals-helpsheet" >}}). This page kept for history and cross-reference.

## Improper Integrals (4.8)

| Type | Definition | Key Rule |
|------|-----------|----------|
| I (infinite limit) | $\int_a^\infty f\,dx = \lim_{b\to\infty}\int_a^b f\,dx$ | Replace $\infty$ with $b$, take limit |
| II (discontinuity) | $\int_a^b f\,dx = \lim_{c\to a^+}\int_c^b f\,dx$ | Replace bad bound with $c$, take limit |
| Interior at $d$ | MUST split → $\int_a^d + \int_d^b$ | One diverges → whole thing DIVERGES |

### $p$-Test & Convergence

| Function | At $\infty$ ($\int_1^\infty$) | At $0$ ($\int_0^1$) |
|----------|------|------|
| $1/x^2$ $(p{=}2)$ | Converges | Diverges |
| $1/x$ $(p{=}1)$ | Diverges | Diverges |
| $1/\sqrt{x}$ $(p{=}\frac{1}{2})$ | Diverges | Converges |
| $\ln(x)$ | — | Always converges |
| $\sin(x)/x$ | — | Always converges ($\to 1$) |

> Rule: At $\infty$: $p > 1$ converges. At $0$: $p < 1$ converges. Directions flip!

Traps:
- $\int_{-1}^1 \frac{1}{x^2}dx$ — interior blow-up at $0$ → divergent
- $\sin(x)/x \to 1$ → bounded → convergent (no computation needed)
- Write "DIVERGES" not "$= \infty$"
- Odd/Even: $f$ odd on $[-a,a]$: $\int = 0$ · $f$ even: $\int = 2\int_0^a$. Must verify both halves converge first.

---

## Volume (4.9–4.10)

| Method | Formula | When |
|--------|---------|------|
| Disk | $\pi\int_a^b [f(x)]^2\;dx$ | Solid, no hole, $\perp$ to axis |
| Washer | $\pi\int_a^b [R(x)^2 - r(x)^2]\;dx$ | Two curves, hole in middle |
| Shell | $2\pi\int_a^b (\text{radius})(\text{height})\;dx$ | Parallel to axis |
| Cross-section | $\int_a^b A(x)\;dx$ | Non-revolution |

| Cross-section ($s$ = side) | Area |
|---------------------------|------|
| Square | $s^2$ |
| Equil. triangle | $\frac{\sqrt{3}}{4}s^2$ |
| Isosc. right triangle (leg $s$) | $\frac{1}{2}s^2$ |
| Semicircle (dia $s$) | $\frac{\pi}{8}s^2$ |
| Circle (dia $s$) | $\frac{\pi}{4}s^2$ |

| Axis | Method | Shifted | Method | Shift radius |
|------|--------|---------|--------|-------------|
| $x$-axis | Disk/Washer | $y=k$ | Disk/Washer | $f(x)-k$ or $k-f(x)$ |
| $y$-axis | Shell | $x=k$ | Shell | $\lvert x-k\rvert$ |

---

## Standard Antiderivatives/Integral (+ C)

<div style="overflow-x:auto">
<table style="table-layout:fixed; width:100%">
<colgroup><col style="width:16.6%"><col style="width:16.6%"><col style="width:16.6%"><col style="width:16.6%"><col style="width:16.6%"><col style="width:16.6%"></colgroup>
<thead><tr><th>$f(x)$</th><th>$\int f\,dx$</th><th>$f(x)$</th><th>$\int f\,dx$</th><th>$f(x)$</th><th>$\int f\,dx$</th></tr></thead>
<tbody>
<tr><td>$x^n$</td><td>$\frac{x^{n+1}}{n+1}$</td><td>$\frac{1}{x}$</td><td>$\ln|x|$</td><td>$e^x$</td><td>$e^x$</td></tr>
<tr><td>$e^{-x}$</td><td>$-e^{-x}$</td><td>$\sin x$</td><td>$-\cos x$</td><td>$\cos x$</td><td>$+\sin x$</td></tr>
<tr><td>$\sec^2 x$</td><td>$\tan x$</td><td>$\csc^2 x$</td><td>$-\cot x$</td><td>$\sec x\tan x$</td><td>$\sec x$</td></tr>
<tr><td>$\csc x\cot x$</td><td>$-\csc x$</td><td>$\tan x$</td><td>$\ln|\sec x|$</td><td>$\cot x$</td><td>$\ln|\sin x|$</td></tr>
<tr><td>$\frac{1}{1+x^2}$</td><td>$\tan^{-1} x$</td><td>$\frac{1}{\sqrt{1-x^2}}$</td><td>$\sin^{-1} x$</td><td>$\ln(t)$</td><td>$t\ln t - t$</td></tr>
<tr><td>$\frac{1}{a^2+x^2}$</td><td>$\frac{1}{a}\tan^{-1}\frac{x}{a}$</td><td>$\frac{1}{\sqrt{a^2-x^2}}$</td><td>$\sin^{-1}\frac{x}{a}$</td><td colspan="2">Trap: $\div$ NEW exp $(n{+}1)$, not old!</td></tr>
</tbody>
</table>
</div>

---

## Differentiation ↔ Integration

| Rule | Differentiation | Reverse (Integration) |
|------|----------------|----------------------|
| Product ↔ IBP | $(uv)' = u'v + uv'$ | $\int u\,dv = uv - \int v\,du$ |
| Chain ↔ u-sub | $[f(g(x))]' = f'(g(x)) \cdot g'(x)$ | $\int f(g(x)) \cdot g'(x)\,dx = \int f(u)\,du$ |
| Quotient | $(\frac{u}{v})' = \frac{u'v - uv'}{v^2}$ | rewrite as product: $u \cdot v^{-1}$ |

IBP: Choose u (LIATE) → find du, v → apply $uv - \int v\,du$

U-sub: Spot inner $u=g(x)$ → compute $du=g'(x)\,dx$ → replace all $x$ → integrate → sub back

> u-sub bounds: set $u=g(x)$, then $x=a \to u=g(a)$, $x=b \to u=g(b)$. Convert IMMEDIATELY.

## Trig Identities

<div style="overflow-x:auto">
<table style="table-layout:fixed; width:100%">
<colgroup><col style="width:33%"><col style="width:33%"><col style="width:34%"></colgroup>
<tbody>
<tr><td>$\sin^2 x + \cos^2 x = 1$</td><td>$1 + \tan^2 x = \sec^2 x$</td><td>$1 + \cot^2 x = \csc^2 x$</td></tr>
<tr><td>$\sin^2 u = \frac{1-\cos 2u}{2}$</td><td>$\cos^2 u = \frac{1+\cos 2u}{2}$</td><td>$\sin 2u = 2\sin u\cos u$</td></tr>
</tbody>
</table>
</div>

## Limits

<div style="overflow-x:auto">
<table style="table-layout:fixed; width:100%">
<colgroup><col style="width:20%"><col style="width:20%"><col style="width:20%"><col style="width:20%"><col style="width:20%"></colgroup>
<tbody>
<tr><td>$\tan^{-1}(\infty) = \frac{\pi}{2}$</td><td>$\tan^{-1}(0) = 0$</td><td>$\tan^{-1}(-\infty) = -\frac{\pi}{2}$</td><td>$e^{-\infty} = 0$</td><td>$e^{\infty} = \infty$</td></tr>
<tr><td>$\ln(0^+) = -\infty$</td><td>$\frac{1}{\infty} = 0$</td><td>$\frac{1}{0^+} = \infty$</td><td>$\frac{1}{0^-} = -\infty$</td><td>$e^0 = 1$</td></tr>
<tr><td>$\ln(1) = 0$</td><td>$\lim_{x\to 0^+} x\ln x = 0$</td><td>$\lim_{x\to\infty} \frac{\ln x}{x} = 0$</td><td>$\frac{\sin x}{x} \to 1\ (x{\to}0)$</td><td>$\lim_{x\to\infty} x e^{-x} = 0$</td></tr>
</tbody>
</table>
</div>

---

## Integration Techniques

| Technique | Formula | Notes |
|-----------|---------|-------|
| IBP | $\int u\,dv = uv - \int v\,du$ | LIATE: Log > InvTrig > Algebra > Trig > Exp |
| PF: $(x-a)$ | $\frac{A}{x-a} \to A\ln\lvert x-a\rvert$ | Single linear factor |
| PF: $(x-a)^n$ | $\frac{A_1}{x-a} + \frac{A_2}{(x-a)^2} + \cdots + \frac{A_n}{(x-a)^n}$ | Each power gets its own term |
| PF: $(x^2+bx+c)$ | $\frac{Ax+B}{x^2+bx+c}$ | Irreducible quadratic → numerator is linear |
| Trig sub ($a^2+x^2$) | $x=a\tan\theta$ | $\sqrt{a^2-x^2} \to x=a\sin\theta$ · $\sqrt{x^2-a^2} \to x=a\sec\theta$ |
| L'Hôpital | $\frac{0}{0}$ or $\frac{\infty}{\infty}$ → $\lim \frac{f'}{g'}$ | Diff top & bottom separately (NOT quotient rule) |
| FTC | $\frac{d}{dx}\int_a^{g(x)} f(t)\,dt = f(g(x)) \cdot g'(x)$ | Chain rule on upper bound |
| Differentiability | $f'(a) = \lim_{h\to 0} \frac{f(a+h) - f(a)}{h}$ | Piecewise: left & right limits must match |
| Area | $\int_a^b [\text{top} - \text{bottom}]\,dx$ | Sketch first to identify which is top |

FDT: $f'$ changes $+\to-$ → local max · $-\to+$ → local min · same sign → no extremum. SDT inconclusive ($f''=0$) → fall back to FDT.

---

## Common Errors

| Error | Fix |
|-------|-----|
| Evaluate across interior discontinuity | Scan denominator for zeros → split |
| $\sqrt{\text{negative}}$ = NOT REAL | $\lvert x-a\rvert$ left of $a$ → use $(a-x)$, chain rule $(-1)$ |
| Optimization: max or min? | $f'' < 0$ → max (concave down) · $f'' > 0$ → min (concave up) |
| Forgot shifted axis radius | Radius $= f(x) - k$, not $f(x)$ |

---

## Related

- [Cheatsheet 1.1–3.4 (CT1)]({{< ref "tcx2101-calculus-cheatsheet" >}})
- [Cheatsheet 3.5–4.11 (CT2)]({{< ref "tcx2101-calculus-cheatsheet-ct2" >}})
