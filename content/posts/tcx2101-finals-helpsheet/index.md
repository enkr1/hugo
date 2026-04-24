---
title: "TCX2101 | Finals Helpsheet (A4 Double-Sided)"
slug: "tcx2101-finals-helpsheet"
date: 2026-04-19
description: "A4 double-sided helpsheet for TCX2101 Final Exam (Apr 28). 63 numbered sections. Sections 54-61 = orthogonality (highest exam emphasis)."
tags: ["nus", "math", "calculus", "linear-algebra", "cheatsheet", "tcx2101", "finals"]
categories: ["Education", "Mathematics"]
math: true
draft: false
---

<style>
@page { margin: 5mm; }
@media print {
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
  body, .main-article {
    font-size: 6.3pt !important;
    line-height: 1.0 !important;
    letter-spacing: -0.15px !important;
  }
  .main-article {
    column-count: 3 !important;
    column-gap: 4mm !important;
    column-fill: balance !important;
    column-rule: 0.3px solid #e5e5e5 !important;
  }
  h3 { font-size: 7.3pt !important; margin: 0 !important; border-top: 0.3px solid #ccc; padding-top: 0 !important; }
  h4 { font-size: 7.1pt !important; margin: 0 !important; }
  table {
    font-size: 6.3pt !important;
    margin: 0 !important;
    border-collapse: collapse !important;
    border-spacing: 0 !important;
    width: 100% !important;
  }
  td, th {
    padding: 0.5px 2px !important;
    line-height: 1.0 !important;
    border: 0.3px solid #ccc !important;
    vertical-align: top !important;
  }
  th { background: #f4f4f4 !important; }
  p, blockquote {
    font-size: 6.3pt !important;
    line-height: 1.0 !important;
    margin: 0 0 1px 0 !important;
  }
  p .katex, li .katex, blockquote .katex {
    font-size: 0.95em !important;
    line-height: 1.0 !important;
    vertical-align: baseline !important;
  }
  blockquote {
    padding: 0 5px !important;
    border-left: 2px solid #bbb !important;
  }
  ul, ol { margin: 0 !important; padding-left: 11px !important; }
  li { margin: 0 !important; line-height: 1.05 !important; }
  hr { margin: 1px 0 !important; border: none; border-top: 0.4px solid #999; }
  .katex-display { margin: 0 !important; font-size: 0.9em !important; }
  .katex { font-size: 0.95em !important; }
  h3, h4 {
    page-break-after: avoid !important;
    break-after: avoid !important;
    break-before: avoid-column !important;
  }
  tr, blockquote, .katex-display {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }
  /* Eliminate empty paragraph space */
  p:empty { display: none !important; }
}
</style>

### 1. One-Sided Limits

| Notation | Meaning |
|---|---|
| $\lim_{x \to a^-} f$ | Approaches from left |
| $\lim_{x \to a^+} f$ | Approaches from right |
| $\lim_{x \to a} f = L$ | $\iff$ both one-sided $= L$ |
| Left $\neq$ Right | Jump discontinuity |
| $L = R \neq f(a)$ | Removable (hole) |

### 2. Limit Laws (if $\lim f = L$, $\lim g = M$)

| Law | Formula | Condition |
|---|---|---|
| Sum / Diff | $L \pm M$ | — |
| Product | $LM$ | Both finite |
| Quotient | $\frac{L}{M}$ | $M \neq 0$ |
| Power | $L^n$ | — |
| Root | $\sqrt[n]{L}$ | $L \geq 0$ if $n$ even |
| Scalar | $kL$ | — |

### 3. Division Forms (Traps)

| Form | Result |
|---|---|
| $\frac{5}{0}$ | $\pm\infty$ (blows up) |
| $\frac{0}{5}$ | $0$ (fine) |
| $\frac{0}{0}$ | **Indeterminate** |
| $\frac{\infty}{\infty}$ | **Indeterminate** |
| $0 \cdot \infty$ | **Indeterminate** |
| $\infty - \infty$ | **Indeterminate** |
| $0^0$ / $1^\infty$ / $\infty^0$ | **Indeterminate** |

### 4. Key Limits

| | | | | |
|---|---|---|---|---|
| $\tan^{-1}(\infty) = \frac{\pi}{2}$ | $\tan^{-1}(0) = 0$ | $\tan^{-1}(-\infty) = -\frac{\pi}{2}$ | $e^{-\infty} = 0$ | $e^\infty = \infty$ |
| $\ln(0^+) = -\infty$ | $\frac{1}{\infty} = 0$ | $\frac{1}{0^+} = \infty$ | $\frac{1}{0^-} = -\infty$ | $e^0 = 1$ |
| $\ln(1) = 0$ | $\ln(\infty) = \infty$ | $\lim_{x \to 0^+} x \ln x = 0$ | $\lim_{x \to \infty} \frac{\ln x}{x} = 0$ | $\lim_{x \to 0} \frac{\sin x}{x} = 1$ |
| $\lim_{x \to 0} \frac{1 - \cos x}{x} = 0$ | $\lim_{x \to \infty} x e^{-x} = 0$ | $\lim_{x \to 0} \frac{\tan x}{x} = 1$ | $\lim_{x \to 0} \frac{e^x - 1}{x} = 1$ | $\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e$ |

### 5. Limits at Infinity — Rational $\frac{a_n x^n + \dots}{b_m x^m + \dots}$

| Degrees | Limit |
|---|---|
| $n < m$ (top smaller) | $0$ |
| $n = m$ (same) | $\frac{a_n}{b_m}$ (leading coef ratio) |
| $n > m$ (top bigger) | $\pm\infty$ |

### 6. Squeeze Theorem

$g \leq f \leq h$ near $c$, $\lim g = \lim h = L \Rightarrow \lim f = L$.
Classic: $\left|h \sin\frac{1}{h}\right| \leq |h| \to 0 \Rightarrow h \sin\frac{1}{h} \to 0$.

### 7. Asymptotes

| Type | Condition | How to find |
|---|---|---|
| Horizontal $y = b$ | $\lim_{x \to \pm\infty} f = b$ | Degree comparison |
| Vertical $x = a$ | Denom $= 0$, num $\neq 0$ | Factor denom |
| Oblique $y = mx + c$ | $\deg(\text{top}) = \deg(\text{bot}) + 1$ | Long division, drop remainder |

### 8. Continuity 3-step (at $x = a$)

| Check | Must hold |
|---|---|
| 1 | $f(a)$ defined |
| 2 | $\lim_{x \to a} f(x)$ exists |
| 3 | $\lim = f(a)$ |

*Piecewise: left $=$ right $= f(a)$.*

### 9. 4 Discontinuity Types

| Type | Condition | Fixable? |
|---|---|---|
| Removable (hole) | $L = R \neq f(a)$ | Yes — redefine $f(a)$ |
| Jump | $L \neq R$ | No |
| Infinite | $\lim = \pm\infty$ | No |
| Oscillatory | lim DNE (e.g. $\sin\frac{1}{x}$ at 0) | No |

### 10. IVT (Intermediate Value)

$f$ continuous on $[a,b]$, $N$ between $f(a)$, $f(b) \Rightarrow \exists c \in (a,b)$ with $f(c) = N$.

**Intersection proof (CT1 trap):** Show $f, h$ intersect $\Rightarrow$ define $g = f - h$. Show $g(a), g(b)$ opposite signs, apply IVT $\Rightarrow \exists c$ with $g(c) = 0 \Rightarrow f(c) = h(c)$.

### 11. Derivative Definition (both forms)

$$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h} = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}$$

| Interpretation | Meaning |
|---|---|
| Geometric | Tangent slope |
| Physical | Instantaneous rate of change |
| Tangent line at $P(a, f(a))$ | $y = f(a) + f'(a)(x - a)$ |

### 12. Differentiability (CT1 trap — lost 4 marks)

| Step | Check |
|---|---|
| 1 | Continuous at $a$? (values match) |
| 2 | Slopes match? Compute left & right limits of $\frac{f(a+h) - f(a)}{h}$; equal $\Rightarrow$ differentiable |
| Implication | Differentiable $\Rightarrow$ continuous. Continuous $\not\Rightarrow$ differentiable (e.g. $|x|$ at 0) |

*Piecewise / $|x|$ at non-smooth point: standard rules FAIL, must use LIMIT DEFINITION.*

### 13. Core Rules

| Rule | Formula |
|---|---|
| Power | $(x^n)' = n x^{n-1}$ (all real $n$) |
| Constant | $c' = 0$, $(cf)' = cf'$ |
| Sum/Diff | $(u \pm v)' = u' \pm v'$ |
| Product | $(uv)' = u'v + uv'$ |
| Quotient | $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$ |
| Chain | $[f(g(x))]' = f'(g(x)) \cdot g'(x)$ |
| Triple product | $(uvw)' = u'vw + uv'w + uvw'$ |
| Reciprocal | $\left(\frac{1}{f}\right)' = -\frac{f'}{f^2}$ |

### 14. Trig Identities (simplify before §15 lookup / §16 technique)

| Family | Identity |
|---|---|
| Pythagorean | $\sin^2 + \cos^2 = 1$ |
| Pythagorean | $1 + \tan^2 = \sec^2$ |
| Pythagorean | $1 + \cot^2 = \csc^2$ |
| Addition ($\sin$) | $\sin(A \pm B) = \sin A \cos B \pm \cos A \sin B$ |
| Addition ($\cos$) | $\cos(A \pm B) = \cos A \cos B \mp \sin A \sin B$ (flip!) |
| Double ($\sin$) | $\sin 2x = 2 \sin x \cos x$ |
| Double ($\cos$) | $\cos 2x = \cos^2 x - \sin^2 x = 2\cos^2 x - 1 = 1 - 2\sin^2 x$ |
| Power-reduce ($\sin^2$) | $\sin^2 u = \frac{1 - \cos 2u}{2}$ |
| Power-reduce ($\cos^2$) | $\cos^2 u = \frac{1 + \cos 2u}{2}$ |
| Reciprocal | $\sec = \frac{1}{\cos}$, $\csc = \frac{1}{\sin}$, $\cot = \frac{\cos}{\sin}$ |

### 15. Derivatives & Antiderivatives Master Table ⭐

Read LEFT→RIGHT for derivatives, right column for antiderivatives ($+C$ implicit). CO $=$ negative. For composed $f(u(x))$: multiply derivative by $u'$ (chain rule §13).

| $f$ | $f \to f'$ | $f \to \int f \, dx$ |
|---|---|---|
| $x^n$ ($n \neq -1$) | $n x^{n-1}$ | $\frac{x^{n+1}}{n+1}$ |
| $\frac{1}{x}$ | $-\frac{1}{x^2}$ | $\ln\|x\|$ |
| $e^x$ | $e^x$ | $e^x$ |
| $e^{-x}$ | $-e^{-x}$ | $-e^{-x}$ |
| $a^x$ | $a^x \ln a$ | $\frac{a^x}{\ln a}$ |
| $\ln x$ | $\frac{1}{x}$ | $x \ln x - x$ |
| $\log_a x$ | $\frac{1}{x \ln a}$ | — |
| $\sin x$ | $\cos x$ | $-\cos x$ |
| $\cos x$ | $-\sin x$ | $\sin x$ |
| $\tan x$ | $\sec^2 x$ | $\ln\|\sec x\|$ |
| $\cot x$ | $-\csc^2 x$ | $\ln\|\sin x\|$ |
| $\sec x$ | $\sec x \tan x$ | $\ln\|\sec x + \tan x\|$ |
| $\csc x$ | $-\csc x \cot x$ | $\ln\|\csc x - \cot x\|$ |
| $\sec^2 x$ | — | $\tan x$ |
| $\csc^2 x$ | — | $-\cot x$ |
| $\sec x \tan x$ | — | $\sec x$ |
| $\csc x \cot x$ | — | $-\csc x$ |
| $\sin^{-1} x$ | $\frac{1}{\sqrt{1-x^2}}$ | — |
| $\cos^{-1} x$ | $-\frac{1}{\sqrt{1-x^2}}$ | — |
| $\tan^{-1} x$ | $\frac{1}{1+x^2}$ | — |
| $\cot^{-1} x$ | $-\frac{1}{1+x^2}$ | — |
| $\sec^{-1} x$ | $\frac{1}{|x|\sqrt{x^2-1}}$ | — |
| $\csc^{-1} x$ | $-\frac{1}{|x|\sqrt{x^2-1}}$ | — |
| $\frac{1}{1+x^2}$ | — | $\tan^{-1} x$ |
| $\frac{1}{\sqrt{1-x^2}}$ | — | $\sin^{-1} x$ |
| $\frac{1}{a^2+x^2}$ | — | $\frac{1}{a}\tan^{-1}\frac{x}{a}$ |
| $\frac{1}{\sqrt{a^2-x^2}}$ | — | $\sin^{-1}\frac{x}{a}$ |

⚠ $\int \cos x = +\sin x$ ($-\sin$ is derivative). $x^n$: divide by NEW exponent $(n+1)$.

### 16. Integration Techniques

| Tech | Formula / Trigger | Note |
|---|---|---|
| IBP | $\int u \, dv = uv - \int v \, du$ | Pick $u$ = top of LIATE (see below); $dv$ = remainder |
| IBP cycling | $I = \text{stuff} - I \Rightarrow 2I = \text{stuff}$ | Solve algebraically |
| u-sub | $\int f(g(x)) g'(x) \, dx = \int f(u) \, du$ | Let $u = g(x)$, $du = g'(x) dx$. Definite: convert bounds $x = a \to u = g(a)$ IMMEDIATELY |
| PF linear | $\frac{A}{x-a} \to A \ln\|x-a\|$ | Single linear |
| PF repeated | $\frac{A_1}{x-a} + \frac{A_2}{(x-a)^2} + \dots$ | Each power gets a term |
| PF irred. quad | $\frac{Ax+B}{x^2+bx+c}$ | Split into $\ln$ + $\arctan$ parts |
| PF mixed | $\frac{4(x+1)}{x^2(x^2+4)} \to \frac{A}{x} + \frac{B}{x^2} + \frac{Cx+D}{x^2+4}$ | One bracket per factor; $x^n$ = repeated linear at $a=0$ |
| Trig sub $\sqrt{a^2-x^2}$ | $x = a \sin\theta$ | $\to a \cos\theta$ |
| Trig sub $\sqrt{a^2+x^2}$ | $x = a \tan\theta$ | $\to a \sec\theta$ |
| Trig sub $\sqrt{x^2-a^2}$ | $x = a \sec\theta$ | $\to a \tan\theta$ |
| Abs-value | Split at zero of inside, ADD pieces | Sign analysis first |
| Long division | $\deg(P) \geq \deg(Q)$ | Do long div first, then PF |

**IBP $u$-pick via LIATE** (pick $u$ from TOP matching, $dv$ = rest):

| Priority | Type | Example | Why |
|---|---|---|---|
| 1 | **L**og | $\ln x$, $\log_a x$ | Differentiating simplifies |
| 2 | **I**nverse trig | $\arctan x$, $\arcsin x$ | Simpler after $\frac{d}{dx}$ |
| 3 | **A**lgebra | $x^n$, $\sqrt{x}$ | Powers reduce |
| 4 | **T**rig | $\sin x$, $\cos x$ | Cycles under $\frac{d}{dx}$ |
| 5 | **E**xp | $e^x$, $a^x$ | Best as $dv$ (doesn't decay) |

Ex: $\int x e^x \, dx$: $x$ is Algebra (priority 3), $e^x$ is Exp (priority 5) $\Rightarrow u = x$, $dv = e^x \, dx$.

### 17. Implicit Differentiation

| Step | Action |
|---|---|
| 1 | Differentiate both sides w.r.t. $x$ |
| 2 | On $y$-terms: chain rule, $(f(y))' = f'(y) \cdot \frac{dy}{dx}$ |
| 3 | Collect $\frac{dy}{dx}$ terms, solve |

Ex: $x^2 + y^2 = 25 \Rightarrow 2x + 2y \cdot y' = 0 \Rightarrow y' = -\frac{x}{y}$.

### 18. Higher-Order Derivatives

| Notation | Meaning |
|---|---|
| $f''(x)$ | $\frac{d^2f}{dx^2}$ |
| $f'''(x)$ | $\frac{d^3f}{dx^3}$ |
| $f^{(k)}(x)$ | $\frac{d^k f}{dx^k}$ |

### 19. FDT / SDT / Concavity / Extrema

| Test | Condition | Result |
|---|---|---|
| FDT | $f'$ changes $+ \to -$ at $c$ | Local max |
| FDT | $f'$ changes $- \to +$ at $c$ | Local min |
| FDT | Same sign | No extremum |
| SDT | $f'(c) = 0$ and $f''(c) > 0$ | Local min ($\cup$ cup) |
| SDT | $f'(c) = 0$ and $f''(c) < 0$ | Local max ($\cap$ cap) |
| SDT | $f''(c) = 0$ | Inconclusive, fall back to FDT |
| Concavity | $f'' > 0$ | Concave up $\cup$ |
| Concavity | $f'' < 0$ | Concave down $\cap$ |
| Inflection | $f''$ CHANGES sign | Verified inflection point |
| Critical | $f' = 0$ OR $f'$ undefined | Candidate for extrema |
| Absolute on $[a,b]$ | Compare $f$ at crit pts AND endpoints | — |

### 20. MVT / Rolle's / L'Hôpital / "$\exists c$" Detector

| Theorem | Hypotheses | Conclusion |
|---|---|---|
| Rolle's | $f$ cts $[a,b]$, diff $(a,b)$, $f(a)=f(b)$ | $\exists c$ with $f'(c) = 0$ |
| MVT | $f$ cts $[a,b]$, diff $(a,b)$ | $\exists c$ with $f'(c) = \frac{f(b)-f(a)}{b-a}$ |
| IVT | $f$ cts $[a,b]$, $N$ between $f(a), f(b)$ | $\exists c$ with $f(c) = N$ |
| L'Hôpital | $\lim \frac{f}{g} = \frac{0}{0}$ or $\frac{\infty}{\infty}$ | $\lim \frac{f}{g} = \lim \frac{f'}{g'}$ |

| "$\exists c$ such that..." | Use |
|---|---|
| $f(c) = k$ | IVT (no derivative) |
| $f'(c) = 0$ | Rolle's |
| $f'(c) = $ ratio | MVT |

⚠ L'Hôpital: check indeterminate form FIRST. Stop when no longer indet. Diff top & bottom SEPARATELY (not quotient rule).

### 21. Linear Approximation

$L(x) = f(a) + f'(a)(x - a)$ near $x = a$.

### 22. FTC I (Leibniz — 4 Cases)

| Limits | $\frac{d}{dx} \int f(t) \, dt =$ |
|---|---|
| $[a, x]$ | $f(x)$ |
| $[a, g(x)]$ | $f(g(x)) \cdot g'(x)$ (CHAIN!) |
| $[x, b]$ | $-f(x)$ |
| $[a(x), b(x)]$ | $f(b(x)) \cdot b'(x) - f(a(x)) \cdot a'(x)$ |

### 23. Definite Integral Properties

| Property | Formula |
|---|---|
| Zero width | $\int_a^a f = 0$ |
| Reverse | $\int_a^b = -\int_b^a$ |
| Additivity | $\int_a^c = \int_a^b + \int_b^c$ |
| Comparison | $f \leq g \Rightarrow \int f \leq \int g$ |
| Non-negative | $f \geq 0 \Rightarrow \int f \geq 0$ |
| Max-min | $m(b-a) \leq \int_a^b f \leq M(b-a)$ |

### 24. FTC II (Evaluation)

$\int_a^b f(x) \, dx = F(b) - F(a)$, where $F$ any antiderivative. **Don't forget $F(a)$!**

### 25. Improper Integrals

| Type | Form | Rule |
|---|---|---|
| I (infinite) | $\int_a^\infty$ | $= \lim_{b \to \infty} \int_a^b$ |
| II (disc bound) | $\int_a^b$ with bad $a$ | $= \lim_{c \to a^+} \int_c^b$ |
| Interior disc at $d$ | Must split | $\int_a^d + \int_d^b$. One diverges $\Rightarrow$ WHOLE diverges |
| $\int_{-\infty}^\infty$ | Split at any $c$ | Both halves must converge |

### 26. $p$-Test

| Integral | Converges |
|---|---|
| $\int_1^\infty \frac{1}{x^p} \, dx$ | $p > 1$ |
| $\int_0^1 \frac{1}{x^p} \, dx$ | $p < 1$ |

*Direction flips: $\infty$ needs fast decay ($p>1$), $0$ needs mild blow-up ($p<1$).*

### 27. Odd / Even on $[-a, a]$

| Symmetry | Integral |
|---|---|
| Odd $f$ ($f(-x) = -f(x)$) | $0$ |
| Even $f$ ($f(-x) = f(x)$) | $2 \int_0^a f$ |

⚠ Improper: verify BOTH halves converge before using symmetry.
⚠ $\int_{-1}^1 \frac{1}{x^2} \, dx$ diverges (interior blow-up). Write "DIVERGES" not "$= \infty$".

### 28. Area

| Target | Formula |
|---|---|
| Under curve | $\int_a^b \|f(x)\| \, dx$ (find zeros, split, negate where $f < 0$) |
| Between curves | $\int_a^b (\text{top} - \text{bottom}) \, dx$ (sketch, find intersections) |

⚠ $\int_a^b f$ is SIGNED area (negatives cancel). Use $|f|$ for actual area.

### 29. Volume

| Method | Formula | When |
|---|---|---|
| Disk | $\pi \int_a^b [f(x)]^2 \, dx$ | Solid, $\perp$ axis, no hole |
| Washer | $\pi \int_a^b [R^2 - r^2] \, dx$ | Two curves, hole in middle |
| Shell | $2\pi \int_a^b (\text{radius})(\text{height}) \, dx$ | Parallel to axis |
| Cross-section | $\int_a^b A(x) \, dx$ | Non-revolution |

### 30. Cross-Section Areas ($s$ = side / diameter)

| Shape | Area |
|---|---|
| Square | $s^2$ |
| Equilateral $\triangle$ | $\frac{\sqrt{3}}{4} s^2$ |
| Isosc. right $\triangle$ (leg $s$) | $\frac{s^2}{2}$ |
| Semicircle (dia $s$) | $\frac{\pi s^2}{8}$ |
| Circle (dia $s$) | $\frac{\pi s^2}{4}$ |

### 31. Shifted Axis

| Axis | Method | Shift to | Radius |
|---|---|---|---|
| $x$-axis | Disk/Washer | $y = k$ | $f(x) - k$ (or $k - f(x)$ if axis above curve) |
| $y$-axis | Shell | $x = k$ | $\|x - k\|$ |

### 32. Disk vs Shell Decision

| Slicing direction | Method |
|---|---|
| $\perp$ to axis of revolution | Disk / Washer |
| $\parallel$ to axis of revolution | Shell |
| $y = f(x)$ revolved around $y$-axis | Shell (easier, no $x = g(y)$) |

### 33. RREF Terminology

| Concept | Details |
|---|---|
| REF | Zeros BELOW pivots (forward elimination) |
| RREF | Zeros ABOVE + below pivots (+leading 1s) |
| Pivot col | Has leading 1 (forced) |
| Free col | No leading 1 (parameter: $s, t, \dots$) |
| Count | \#free $= n - $ \#pivots |

⚠ RREF $\neq$ identity when free vars exist. Solve for PIVOT vars, not free.

### 34. Vector Form Solution

| Step | Action |
|---|---|
| 1. $x_p$ (particular) | Set free vars $= 0$, read RHS at pivot rows (0 at free positions) |
| 2. Direction vectors | Per free var: pivot-row entries flipped sign $\to$ pivot slots; that free $= 1$, others $= 0$ |
| 3. Combine | $x = x_p + s v_1 + t v_2 + \dots$ |

### 35. Solution Shapes

| \#free vars / pattern | Shape |
|---|---|
| 0 free | Unique |
| 1 free | Line |
| 2 free | Plane |
| Row $[0 \dots 0 \mid \text{nonzero}]$ | No solution (contradiction) |

### 36. Homogeneous vs Non-homogeneous

| System | Property |
|---|---|
| $Ax = 0$ (homogeneous) | Always has $x = 0$. Non-trivial iff free vars exist |
| $Ax = b$ (non-hom) | 0, 1, or $\infty$ solutions |

### 37. Matrix Operations

| Op | Formula / Note |
|---|---|
| Sum | $(A+B)_{ij} = A_{ij} + B_{ij}$ (same dim) |
| Scalar | $(kA)_{ij} = k \cdot A_{ij}$ |
| Product | $(AB)_{ij} = \sum_k A_{ik} B_{kj}$. $A$ is $m \times n$, $B$ is $n \times p \Rightarrow AB$ is $m \times p$ |
| Associative | $(AB)C = A(BC)$ |
| Distributive | $A(B + C) = AB + AC$ |
| ⚠ NOT commutative | $AB \neq BA$ in general |
| Transpose of product | $(AB)^T = B^T A^T$ |
| Inverse of product | $(AB)^{-1} = B^{-1} A^{-1}$ (REVERSE order) |
| Double transpose | $(A^T)^T = A$ |
| Double inverse | $(A^{-1})^{-1} = A$ |
| Transpose / inverse mix | $(A^{-1})^T = (A^T)^{-1}$ |

### 38. Elementary Row Ops

| Op | Effect on det |
|---|---|
| Swap 2 rows | Flip sign |
| Scale row by $k \neq 0$ | Multiply det by $k$ |
| Add multiple of one row to another | Unchanged |

### 39. Determinant Compute

| Size | Method |
|---|---|
| $2 \times 2$ | $\det = ad - bc$ |
| $3 \times 3$ | Cofactor expansion, row/col with MOST zeros. Sign: $+-+-$ |
| $4 \times 4$ | Row reduce to triangular; track sign flips & scalar pulls |
| Triangular | $\det = \prod \text{diagonal}$ |

### 40. Determinant Properties

| Formula | Result |
|---|---|
| $\det(kA)$ | $k^n \det(A)$ — NOT $k \det(A)$; each of $n$ rows scaled |
| $\det(AB)$ | $\det(A) \det(B)$ |
| $\det(A^{-1})$ | $\frac{1}{\det(A)}$ |
| $\det(A^n)$ | $\det(A)^n$ |
| $\det(A^T)$ | $\det(A)$ |
| $\det(-M)$ | $(-1)^n \det(M)$. $4 \times 4$: sign STAYS |
| $\det(A^T A^{-1})$ | $1$ (invertible $A$) |

### 41. Determinant Traps

| Trap | Detail |
|---|---|
| NOT linear | $\det(A+B) \neq \det(A) + \det(B)$. Try $A=B=I$: $\det(2I) = 4 \neq 2$ |
| Zero + Zero | $\det(A) = 0, \det(B) = 0 \not\Rightarrow \det(A+B) = 0$. Try $A = \begin{bmatrix}1&0\\0&0\end{bmatrix}, B = \begin{bmatrix}0&0\\0&1\end{bmatrix} \Rightarrow A+B = I$ |
| Simplify first | $M^2 M^{-1} = M \Rightarrow \det = \det(M)$ |

### 42. $2 \times 2$ Inverse

$A = \begin{bmatrix}a & b \\ c & d\end{bmatrix} \Rightarrow A^{-1} = \frac{1}{ad - bc}\begin{bmatrix}d & -b \\ -c & a\end{bmatrix}$ (swap diag, negate off-diag)

### 43. Inverse via Row Reduction (any size)

| Step | Action |
|---|---|
| 1 | Form augmented $[A \mid I]$ |
| 2 | Row reduce until left side $= I$ |
| 3 | Right side is $A^{-1}$ |
| Fail | Left can't reach $I$ (zero row) $\Rightarrow A$ not invertible |

### 44. Package Deal (Invertibility)

| ✓ Invertible | ✗ Not invertible |
|---|---|
| $\det(A) \neq 0$ | $\det(A) = 0$ |
| RREF $= I_n$ | RREF has zero row |
| All $n$ cols pivot | Col without pivot |
| No free vars | Free vars exist |
| $Ax = 0$ only $x = 0$ | $Ax = 0$ has other solutions |
| Cols lin indep | Cols dependent |
| Cols span $\mathbb{R}^n$ / $Ax = b$ solvable $\forall b$ | Don't span |

### 45. Linear Independence

| Test | Detail |
|---|---|
| Setup | Put vectors as COLUMNS, row reduce, count pivots |
| Indep | Every col has pivot |
| Dep | Any col without pivot ($=$ combo of pivot cols) |
| Always dep | Contains $0$ vector |
| ⚠ | Pairwise non-scalar $\neq$ indep. Always use pivot-count |

### 46. Vector Space Definitions

| Term | Meaning |
|---|---|
| Subspace | Non-empty subset closed under $+$ and scalar $\times$ (auto contains $0$) |
| Span | All combos $c_1 v_1 + \dots + c_k v_k$ |
| Basis | Independent set that spans $V$ (no redundancy) |
| Dimension | \# vectors in any basis (invariant) |

### 47. Subspace Proof Rhythm ($V = \{x : \text{equation(s)}\}$)

| Step | Action |
|---|---|
| (i) Zero | Show $\mathbf{0} \in V$ (plug in, gives $0 = 0$ ✓) |
| (ii) Closed under $+$ | Let $u, v \in V$. Then [eq for $u$]…(1), [eq for $v$]…(2). Consider $u+v$: [expand] $=$ [regroup by (1),(2)] $= 0$. $\therefore u+v \in V$ |
| (iii) Closed under $\times$ | Let $u \in V$, $c \in \mathbb{R}$. Then [eq]…(3). Consider $cu$: [factor $c$] $= c \cdot 0 = 0$. $\therefore cu \in V$ |

*Homogeneous ($= 0$): always subspace. Non-homogeneous ($\neq 0$): NEVER ($0$ fails). Multi-eqs: check ALL in each step.*

### 48. Basis from Equation

| Step | Action |
|---|---|
| 1 | Variables NOT in equation $=$ automatically FREE |
| 2 | $\dim(V) = n - $ \#indep equations |
| 3 | Solve for pivot var, parameterise frees, collect direction vectors |

Ex: $V = \{(x,y,z,w) \in \mathbb{R}^4 : x - 2y + z = 0\}$. Solve $x = 2y - z$. $y = s, z = t, w = r$ (3 free $\Rightarrow \dim = 3$).
$(x,y,z,w) = s(2,1,0,0) + t(-1,0,1,0) + r(0,0,0,1)$. Basis $=$ those three vectors.

### 49. Span Test (is $w \in \text{span}\{v_1, v_2\}$?)

| Step | Action |
|---|---|
| Setup | Augment $[v_1 \mid v_2 \mid w]$, row reduce |
| Result | Row $[0 \dots 0 \mid \text{nonzero}] \Rightarrow w \notin \text{span}$ |
| Result | No contradiction $\Rightarrow w \in \text{span}$ |
| vs Independence | $[v_1 \mid v_2]$ alone (no augment), count pivots |

### 50. Rank-Nullity

| Formula | Meaning |
|---|---|
| $\text{rank}(A) + \text{nullity}(A) = n$ | $n = $ \# cols of $A$ |
| rank | \# pivot cols |
| nullity | \# free cols |
| Null basis | Same as §34 vector form with RHS $= 0$ |

⚠ Verify: plug each null basis vector into $Ax = 0$. Every row must $= 0$.

### 51. Dimension Constraints

| Fact |
|---|
| $\dim(V) = k \Rightarrow$ cannot have $k+1$ independent vectors in $V$ |
| 2 vectors in $\mathbb{R}^3 \neq$ basis ($\dim \mathbb{R}^3 = 3$) |
| If \# vectors $= \dim(V)$, then indep $\iff$ spans $V$ |

### 52. Column Space / Null Space

| Space | Definition | Basis |
|---|---|---|
| $\text{Col}(A)$ | Span of columns (image of $x \mapsto Ax$) | PIVOT columns of $A$ (from ORIGINAL, not RREF) |
| $\text{Null}(A)$ | $\{x : Ax = 0\}$ | Vector form with RHS $= 0$ |

### 53. Orthogonality Foundation ⭐

| Formula | Note |
|---|---|
| $u \cdot u = \|u\|^2$ | **Always SQUARE**. $\|u\| = 3 \Rightarrow u \cdot u = 9$ |
| $\|u + v\|^2$ | $= \|u\|^2 + 2(u \cdot v) + \|v\|^2$ |
| If $u \perp v$ | $\|u + v\|^2 = \|u\|^2 + \|v\|^2$ |

*§53-60 = orthogonality cluster (highest exam emphasis per Apr 17 recording).*

### 54. Orthogonal vs Orthonormal ⭐

| Set type | Condition |
|---|---|
| Orthogonal | Every pair $u \cdot v = 0$. Lengths free. |
| Orthonormal | Orthogonal AND every $\|u\| = 1$ |
| $\mathbf{0}$ vector | Orthogonal to everything (ok in orthogonal set). NOT orthonormal (length 0) |

### 55. Orthogonal Complement $W^\perp$ ⭐

| Rule | Statement |
|---|---|
| Efficiency | $v \perp W \iff v \perp$ every basis vector of $W$ |
| Core theorem | Non-zero orthogonal set $\Rightarrow$ linearly independent (proof: pairwise dot products $= 0$) |

**Find basis of $W^\perp$:**

| Step | Action |
|---|---|
| 1 | Let $v = (x_1, \dots, x_n)$ be unknown in $W^\perp$ |
| 2 | Set $v \cdot b_i = 0$ for each basis vector $b_i$ of $W$ |
| 3 | Get homogeneous linear system |
| 4 | Solve (§34 vector form) $\Rightarrow$ basis of $W^\perp$ |

### 56. Coefficients in Basis Expansion ⭐

For $v = c_1 u_1 + \dots + c_n u_n$ with $\{u_i\}$ orthogonal basis of $V$:

| Basis type | Coefficient |
|---|---|
| Orthogonal | $c_i = \frac{v \cdot u_i}{u_i \cdot u_i}$ |
| Orthonormal | $c_i = v \cdot u_i$ (denom $= 1$) |
| Observation | $v \cdot u_k = 0 \Rightarrow c_k = 0$ |

### 57. Projection & Decomposition ⭐

| Concept | Formula |
|---|---|
| $\text{proj}_W(v)$ | $\sum_i \frac{v \cdot u_i}{u_i \cdot u_i} u_i$ over orthogonal basis of $W$ |
| Decomposition | $v = \text{proj}_W(v) + v_\perp$ |
| $v_\perp$ | $v - \text{proj}_W(v)$, lives in $W^\perp$ |

### 58. Gram-Schmidt (concept only, procedure NOT tested)

| Step | Formula |
|---|---|
| $v_1$ | $= a_1$ |
| $v_2$ | $= a_2 - \text{proj}_{v_1}(a_2)$ |
| General | $v_i$ subtracts projection onto previous $v$'s |
| Normalise (if orthonormal wanted) | Divide each $v_i$ by $\|v_i\|$ |

### 59. Least Squares ⭐⭐ (HIGHEST emphasis)

| Item | Formula / Note |
|---|---|
| Setup | $Ax = b$ inconsistent (no exact solution) |
| Goal | Find $u$ minimising $\|Ax - b\|$ |
| Normal equation | $A^T A u = A^T b$ |
| Method | Form augmented $[A^T A \mid A^T b]$, row reduce, solve |
| Size check | $A$ is $m \times n \Rightarrow A^T A$ is $n \times n$ |

### 60. Best Fit Line ⭐

| Item | Formula |
|---|---|
| Data | $(x_1, y_1), \dots, (x_k, y_k)$ |
| Model | $y = mx + c$ |
| $A$ matrix | Col 1 $=$ 1s, Col 2 $= x$ values |
| $b$ vector | $y$ values |
| Solve | $A^T A \begin{bmatrix}c \\ m\end{bmatrix} = A^T b \Rightarrow$ intercept $c$, slope $m$ |
| ⚠ Qualitative fit judgment | NOT tested, only calculation |

