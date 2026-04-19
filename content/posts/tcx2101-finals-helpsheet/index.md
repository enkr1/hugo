---
title: "TCX2101 | Finals Helpsheet (A4 Double-Sided)"
slug: "tcx2101-finals-helpsheet"
date: 2026-04-19
description: "A4 double-sided helpsheet for TCX2101 Final Exam (Apr 28). Scope: Ch 1 to 8 full syllabus. Ch 8 (orthogonality) weighted heaviest per Apr 17 post-CT3 recording."
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
    font-size: 6.5pt !important;
    line-height: 1.05 !important;
    letter-spacing: -0.15px !important;
  }
  h2 {
    font-size: 8pt !important;
    margin: 2px 0 0 !important;
    border-top: 0.4px solid #888;
    padding-top: 1px !important;
  }
  h3 { font-size: 7.3pt !important; margin: 1px 0 0 !important; }
  h4 { font-size: 7pt !important; margin: 0 !important; }
  table {
    font-size: 6pt !important;
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
  p, blockquote { margin: 0 0 1px 0 !important; }
  blockquote {
    padding: 0 5px !important;
    border-left: 2px solid #bbb !important;
  }
  ul, ol { margin: 0 !important; padding-left: 11px !important; }
  li { margin: 0 !important; line-height: 1.05 !important; }
  hr { margin: 1px 0 !important; border: none; border-top: 0.4px solid #999; }
  .katex-display { margin: 0 !important; font-size: 0.9em !important; }
  .katex { font-size: 0.95em !important; }
  h2, h3, h4 { page-break-after: avoid !important; }
  table, tbody, thead, tr { page-break-inside: avoid !important; }
  /* Eliminate empty paragraph space */
  p:empty { display: none !important; }
}
</style>

## Ch 1: Functions

### Domain Rules

| Type | Restriction |
|---|---|
| Polynomial | ℝ (all real) |
| Rational | Denom ≠ 0 |
| √ (numerator) | Inside ≥ 0 |
| √ (denominator) | Inside > 0 (strict!) |
| Logarithm | Inside > 0 |

> Multi-restriction: find each, intersect. Ex: √(x²−9) ⟹ \|x\| ≥ 3 ⟹ (−∞,−3] ∪ [3,∞) (two regions).

### Transformations (inside = horizontal OPPOSITE, outside = vertical SAME)

| Transform | Formula | Effect |
|---|---|---|
| Shift vertical | f(x) ± k | Same direction as sign |
| Shift horizontal | f(x ∓ h) | **Opposite** of sign: f(x−3) shifts RIGHT |
| Vert stretch / compress | a·f(x) | a>1 stretch · 0<a<1 compress |
| Horiz stretch / compress | f(bx) | b>1 **COMPRESS** · 0<b<1 stretch (opposite!) |
| Reflect x-axis | −f(x) | Flip vertical |
| Reflect y-axis | f(−x) | Flip horizontal |
| \|f(x)\| | — | Flip negatives up (reflect below x-axis) |
| f(\|x\|) | — | Mirror y-axis (copy right → left) |

### Composition & Inverse

| Concept | Formula |
|---|---|
| Composition | (f∘g)(x) = f(g(x)) |
| Domain of f∘g | {x ∈ D_g : g(x) ∈ D_f} |
| Order matters | f∘g ≠ g∘f |
| Inverse property | f⁻¹(f(x)) = x, f(f⁻¹(x)) = x |

### Exponent Rules

| Rule | Formula |
|---|---|
| Product | aˣ · aʸ = aˣ⁺ʸ |
| Quotient | aˣ / aʸ = aˣ⁻ʸ |
| Power of power | (aˣ)ʸ = aˣʸ |
| Product to power | aˣ · bˣ = (ab)ˣ |
| Quotient to power | aˣ / bˣ = (a/b)ˣ |
| Master | aˣ = e^(x ln a) |

### Log Rules

| Rule | Formula |
|---|---|
| Product | log_a(xy) = log_a x + log_a y |
| Quotient | log_a(x/y) = log_a x − log_a y |
| Power | log_a(xᶜ) = c log_a x |
| Change of base | log_a x = ln x / ln a |
| Special | log_a a = 1 · log_a 1 = 0 |

---

## Ch 2: Limits & Continuity

### One-Sided Limits

| Notation | Meaning |
|---|---|
| lim_{x→a⁻} f | Approaches from left |
| lim_{x→a⁺} f | Approaches from right |
| lim_{x→a} f = L | ⟺ both one-sided = L |
| Left ≠ Right | Jump discontinuity |
| L = R ≠ f(a) | Removable (hole) |

### Limit Laws (if lim f = L, lim g = M)

| Law | Formula | Condition |
|---|---|---|
| Sum / Diff | L ± M | — |
| Product | LM | Both finite |
| Quotient | L/M | M ≠ 0 |
| Power | Lⁿ | — |
| Root | ⁿ√L | L ≥ 0 if n even |
| Scalar | kL | — |

### Division Forms (Traps)

| Form | Result |
|---|---|
| 5/0 | ±∞ (blows up) |
| 0/5 | 0 (fine) |
| 0/0 | **Indeterminate** |
| ∞/∞ | **Indeterminate** |
| 0 · ∞ | **Indeterminate** |
| ∞ − ∞ | **Indeterminate** |
| 0⁰ / 1^∞ / ∞⁰ | **Indeterminate** |

### Solving 0/0

| Method | Trigger |
|---|---|
| Factor + cancel | Polynomial over polynomial |
| Conjugate | Radicals (√) in num or denom |
| L'Hôpital | See Ch 3 (fast fallback) |

### Key Limits

| | | | | |
|---|---|---|---|---|
| tan⁻¹(∞)=π/2 | tan⁻¹(0)=0 | tan⁻¹(−∞)=−π/2 | e⁻∞=0 | e∞=∞ |
| ln(0⁺)=−∞ | 1/∞=0 | 1/0⁺=∞ | 1/0⁻=−∞ | e⁰=1 |
| ln(1)=0 | ln(∞)=∞ | x→0⁺: x ln x→0 | x→∞: ln x/x→0 | x→0: sin x/x→1 |
| x→0: (1−cos x)/x→0 | x→∞: xe⁻ˣ→0 | arctan(∞)=π/2 | arctan(−∞)=−π/2 | arctan(0)=0 |

### Limits at Infinity — Rational (aₙxⁿ+…) / (bₘxᵐ+…)

| Degrees | Limit |
|---|---|
| n < m (top smaller) | 0 |
| n = m (same) | aₙ / bₘ (leading coef ratio) |
| n > m (top bigger) | ±∞ |

### Squeeze Theorem

g ≤ f ≤ h near c, lim g = lim h = L ⟹ lim f = L.
Classic: \|h sin(1/h)\| ≤ \|h\| → 0 ⟹ h sin(1/h) → 0.

### Asymptotes

| Type | Condition | How to find |
|---|---|---|
| Horizontal y = b | lim_{x→±∞} f = b | Degree comparison |
| Vertical x = a | Denom = 0, num ≠ 0 | Factor denom |
| Oblique y = mx+c | deg(top) = deg(bot) + 1 | Long division, drop remainder |

### Continuity 3-step (at x = a)

| Check | Must hold |
|---|---|
| 1 | f(a) defined |
| 2 | lim_{x→a} f(x) exists |
| 3 | lim = f(a) |

> Piecewise: left = right = f(a).

### 4 Discontinuity Types

| Type | Condition | Fixable? |
|---|---|---|
| Removable (hole) | L = R ≠ f(a) | Yes — redefine f(a) |
| Jump | L ≠ R | No |
| Infinite | lim = ±∞ | No |
| Oscillatory | lim DNE (e.g. sin(1/x) at 0) | No |

### IVT (Intermediate Value)

f continuous on [a,b], N between f(a), f(b) ⟹ ∃c ∈ (a,b) with f(c) = N.

> **Intersection proof (CT1 trap):** Show f, h intersect ⟹ define g = f − h. Show g(a), g(b) opposite signs, apply IVT ⟹ ∃c with g(c) = 0 ⟹ f(c) = h(c).

---

## Ch 3: Differentiation

### Derivative Definition (both forms)

$$f'(a) = \lim_{h\to 0}\frac{f(a+h)-f(a)}{h} = \lim_{x\to a}\frac{f(x)-f(a)}{x-a}$$

| Interpretation | Meaning |
|---|---|
| Geometric | Tangent slope |
| Physical | Instantaneous rate of change |
| Tangent line at P(a, f(a)) | y = f(a) + f'(a)(x − a) |

### Differentiability (CT1 trap — lost 4 marks)

| Step | Check |
|---|---|
| 1 | Continuous at a? (values match) |
| 2 | Slopes match? Compute left & right limits of [f(a+h)−f(a)]/h; equal ⟹ differentiable |
| Implication | Differentiable ⟹ continuous. Continuous ⇏ differentiable (e.g. \|x\| at 0) |

> Piecewise / \|x\| at non-smooth point: standard rules FAIL, must use LIMIT DEFINITION.

### Core Rules

| Rule | Formula |
|---|---|
| Power | (xⁿ)' = n x^(n−1) (all real n) |
| Constant | c' = 0, (cf)' = cf' |
| Sum/Diff | (u ± v)' = u' ± v' |
| Product | (uv)' = u'v + uv' |
| Quotient | (u/v)' = (u'v − uv') / v² |
| Chain | [f(g(x))]' = f'(g(x)) · g'(x) |
| Triple product | (uvw)' = u'vw + uv'w + uvw' |
| Reciprocal | (1/f)' = −f'/f² |

### Trig Derivatives (CO = negative)

| f | f' | f | f' |
|---|---|---|---|
| sin x | cos x | csc x | −csc x cot x |
| cos x | −sin x | sec x | sec x tan x |
| tan x | sec²x | cot x | −csc²x |

### Exp / Log / Inverse Trig

| f | f' |
|---|---|
| eᵘ | eᵘ · u' |
| ln u | u' / u |
| aᵘ | aᵘ ln(a) · u' |
| log_a u | u' / (u ln a) |
| sin⁻¹ u | u' / √(1 − u²) |
| cos⁻¹ u | −u' / √(1 − u²) |
| tan⁻¹ u | u' / (1 + u²) |
| cot⁻¹ u | −u' / (1 + u²) |
| sec⁻¹ u | u' / (\|u\| √(u² − 1)) |
| csc⁻¹ u | −u' / (\|u\| √(u² − 1)) |

### Implicit Differentiation

| Step | Action |
|---|---|
| 1 | Differentiate both sides w.r.t. x |
| 2 | On y-terms: chain rule, (f(y))' = f'(y) · dy/dx |
| 3 | Collect dy/dx terms, solve |

Ex: x² + y² = 25 ⟹ 2x + 2y·y' = 0 ⟹ y' = −x/y.

### Higher-Order

| Notation | Meaning |
|---|---|
| f''(x) | d²f/dx² |
| f'''(x) | d³f/dx³ |
| f^(k)(x) | d^k f/dx^k |

### FDT / SDT / Concavity / Extrema

| Test | Condition | Result |
|---|---|---|
| FDT | f' changes + → − at c | Local max |
| FDT | f' changes − → + at c | Local min |
| FDT | Same sign | No extremum |
| SDT | f'(c) = 0 and f''(c) > 0 | Local min (∪ cup) |
| SDT | f'(c) = 0 and f''(c) < 0 | Local max (∩ cap) |
| SDT | f''(c) = 0 | Inconclusive, fall back to FDT |
| Concavity | f'' > 0 | Concave up ∪ |
| Concavity | f'' < 0 | Concave down ∩ |
| Inflection | f'' CHANGES sign | Verified inflection point |
| Critical | f' = 0 OR f' undefined | Candidate for extrema |
| Absolute on [a,b] | Compare f at crit pts AND endpoints | — |

### MVT / Rolle's / L'Hôpital / "∃c" Detector

| Theorem | Hypotheses | Conclusion |
|---|---|---|
| Rolle's | f cts [a,b], diff (a,b), f(a)=f(b) | ∃c with f'(c) = 0 |
| MVT | f cts [a,b], diff (a,b) | ∃c with f'(c) = (f(b)−f(a))/(b−a) |
| IVT | f cts [a,b], N between f(a), f(b) | ∃c with f(c) = N |
| L'Hôpital | lim f/g = 0/0 or ∞/∞ | lim f/g = lim f'/g' |

| "∃c such that..." | Use |
|---|---|
| f(c) = k | IVT (no derivative) |
| f'(c) = 0 | Rolle's |
| f'(c) = ratio | MVT |

⚠ L'Hôpital: check indeterminate form FIRST. Stop when no longer indet. Diff top & bottom SEPARATELY (not quotient rule).

### FTC I (Leibniz — 4 Cases)

| Limits | d/dx ∫ f(t) dt = |
|---|---|
| [a, x] | f(x) |
| [a, g(x)] | f(g(x)) · g'(x) (CHAIN!) |
| [x, b] | −f(x) |
| [a(x), b(x)] | f(b(x))·b'(x) − f(a(x))·a'(x) |

### Linear Approximation
L(x) = f(a) + f'(a)(x − a) near x = a.

---

## Ch 4: Integration

### Definite Integral Properties

| Property | Formula |
|---|---|
| Zero width | ∫_a^a f = 0 |
| Reverse | ∫_a^b = −∫_b^a |
| Additivity | ∫_a^c = ∫_a^b + ∫_b^c |
| Comparison | f ≤ g ⟹ ∫f ≤ ∫g |
| Non-negative | f ≥ 0 ⟹ ∫f ≥ 0 |
| Max-min | m(b−a) ≤ ∫_a^b f ≤ M(b−a) |

### FTC II (Evaluation)

| Formula | Note |
|---|---|
| ∫_a^b f(x) dx = F(b) − F(a) | F any antiderivative. **Don't forget F(a)!** |

### Antiderivatives (+C)

| f | ∫f | f | ∫f | f | ∫f |
|---|---|---|---|---|---|
| xⁿ (n ≠ −1) | x^(n+1)/(n+1) | 1/x | ln\|x\| | eˣ | eˣ |
| e⁻ˣ | −e⁻ˣ | sin x | −cos x | cos x | sin x |
| sec²x | tan x | csc²x | −cot x | sec x tan x | sec x |
| csc x cot x | −csc x | tan x | ln\|sec x\| | cot x | ln\|sin x\| |
| 1/(1+x²) | tan⁻¹x | 1/√(1−x²) | sin⁻¹x | ln t | t ln t − t |
| 1/(a²+x²) | (1/a)tan⁻¹(x/a) | 1/√(a²−x²) | sin⁻¹(x/a) | | |

⚠ ∫cos x = **+sin x** (−sin is derivative). xⁿ: divide by NEW exponent (n+1).

### Power-Reduction

| Identity |
|---|
| sin²u = (1 − cos 2u) / 2 |
| cos²u = (1 + cos 2u) / 2 |

### Integration Techniques

| Tech | Formula / Trigger | Note |
|---|---|---|
| IBP | ∫u dv = uv − ∫v du | LIATE: Log > InvTrig > Alg > Trig > Exp |
| IBP cycling | I = stuff − I ⟹ 2I = stuff | Solve algebraically |
| u-sub | u = g(x), du = g'(x) dx | Inner-deriv pattern. Convert bounds IMMEDIATELY |
| PF linear | A/(x−a) → A ln\|x−a\| | Single linear |
| PF repeated | A₁/(x−a) + A₂/(x−a)² + … | Each power gets a term |
| PF irred. quad | (Ax+B)/(x²+bx+c) | Split into ln + arctan parts |
| Trig sub √(a²−x²) | x = a sinθ | → a cosθ |
| Trig sub √(a²+x²) | x = a tanθ | → a secθ |
| Trig sub √(x²−a²) | x = a secθ | → a tanθ |
| Abs-value | Split at zero of inside, ADD pieces | Sign analysis first |
| Long division | deg(P) ≥ deg(Q) | Do long div first, then PF |

### Trig Identities

| Family | Identity |
|---|---|
| Pythagorean | sin² + cos² = 1 |
| Pythagorean | 1 + tan² = sec² |
| Pythagorean | 1 + cot² = csc² |
| Addition (sin) | sin(A ± B) = sin A cos B ± cos A sin B |
| Addition (cos) | cos(A ± B) = cos A cos B ∓ sin A sin B (flip!) |
| Double (sin) | sin 2x = 2 sin x cos x |
| Double (cos) | cos 2x = cos²x − sin²x = 2cos²x − 1 = 1 − 2sin²x |
| Reciprocal | sec = 1/cos · csc = 1/sin · cot = cos/sin |

### Improper Integrals (4.8)

| Type | Form | Rule |
|---|---|---|
| I (infinite) | ∫_a^∞ | = lim_{b→∞} ∫_a^b |
| II (disc bound) | ∫_a^b with bad a | = lim_{c→a⁺} ∫_c^b |
| Interior disc at d | Must split | ∫_a^d + ∫_d^b. One diverges ⟹ WHOLE diverges |
| ∫_{−∞}^∞ | Split at any c | Both halves must converge |

### p-Test

| Integral | Converges |
|---|---|
| ∫₁^∞ 1/xᵖ | p > 1 |
| ∫₀^1 1/xᵖ | p < 1 |

> Direction flips: ∞ needs fast decay (p>1), 0 needs mild blow-up (p<1).

### Odd / Even on [−a, a]

| Symmetry | Integral |
|---|---|
| Odd f (f(−x) = −f(x)) | 0 |
| Even f (f(−x) = f(x)) | 2 ∫₀ᵃ f |

⚠ Improper: verify BOTH halves converge before using symmetry.
⚠ ∫₋₁^1 1/x² diverges (interior blow-up). Write "DIVERGES" not "= ∞".

### Area

| Target | Formula |
|---|---|
| Under curve | ∫_a^b \|f(x)\| dx (find zeros, split, negate where f < 0) |
| Between curves | ∫_a^b (top − bottom) dx (sketch, find intersections) |

⚠ ∫_a^b f is SIGNED area (negatives cancel). Use \|f\| for actual area.

### Volume (4.9-4.10)

| Method | Formula | When |
|---|---|---|
| Disk | π ∫_a^b [f(x)]² dx | Solid, ⊥ axis, no hole |
| Washer | π ∫_a^b [R² − r²] dx | Two curves, hole in middle |
| Shell | 2π ∫_a^b (radius)(height) dx | Parallel to axis |
| Cross-section | ∫_a^b A(x) dx | Non-revolution |

### Cross-Section Areas (s = side / diameter)

| Shape | Area |
|---|---|
| Square | s² |
| Equilateral △ | (√3/4) s² |
| Isosc. right △ (leg s) | s²/2 |
| Semicircle (dia s) | π s²/8 |
| Circle (dia s) | π s²/4 |

### Shifted Axis

| Axis | Method | Shift to | Radius |
|---|---|---|---|
| x-axis | Disk/Washer | y = k | f(x) − k (or k − f(x) if axis above curve) |
| y-axis | Shell | x = k | \|x − k\| |

### Disk vs Shell Decision

| Slicing direction | Method |
|---|---|
| ⊥ to axis of revolution | Disk / Washer |
| ∥ to axis of revolution | Shell |
| y = f(x) revolved around y-axis | Shell (easier, no x = g(y)) |

---

## Ch 5: Linear Systems (RREF)

### Terminology

| Concept | Details |
|---|---|
| REF | Zeros BELOW pivots (forward elimination) |
| RREF | Zeros ABOVE + below pivots (+leading 1s) |
| Pivot col | Has leading 1 (forced) |
| Free col | No leading 1 (parameter: s, t, …) |
| Count | #free = n − #pivots |

⚠ RREF ≠ identity when free vars exist. Solve for PIVOT vars, not free.

### Vector Form Solution

| Step | Action |
|---|---|
| 1. xₚ (particular) | Set free vars = 0, read RHS at pivot rows (0 at free positions) |
| 2. Direction vectors | Per free var: pivot-row entries flipped sign → pivot slots; that free = 1, others = 0 |
| 3. Combine | x = xₚ + s v₁ + t v₂ + … |

### Solution Shapes

| #free vars / pattern | Shape |
|---|---|
| 0 free | Unique |
| 1 free | Line |
| 2 free | Plane |
| Row [0 … 0 \| nonzero] | No solution (contradiction) |

### Elementary Row Ops

| Op | Effect on det |
|---|---|
| Swap 2 rows | Flip sign |
| Scale row by k ≠ 0 | Multiply det by k |
| Add multiple of one row to another | Unchanged |

### Homogeneous vs Non-homogeneous

| System | Property |
|---|---|
| Ax = 0 (homogeneous) | Always has x = 0. Non-trivial iff free vars exist |
| Ax = b (non-hom) | 0, 1, or ∞ solutions |

---

## Ch 6: Matrix Algebra

### Operations

| Op | Formula / Note |
|---|---|
| Sum | (A+B)ᵢⱼ = Aᵢⱼ + Bᵢⱼ (same dim) |
| Scalar | (kA)ᵢⱼ = k · Aᵢⱼ |
| Product | (AB)ᵢⱼ = Σₖ Aᵢₖ Bₖⱼ. A is m×n, B is n×p ⟹ AB is m×p |
| Associative | (AB)C = A(BC) |
| Distributive | A(B + C) = AB + AC |
| ⚠ NOT commutative | AB ≠ BA in general |
| Transpose of product | (AB)ᵀ = Bᵀ Aᵀ |
| Inverse of product | (AB)⁻¹ = B⁻¹ A⁻¹ (REVERSE order) |
| Double transpose | (Aᵀ)ᵀ = A |
| Double inverse | (A⁻¹)⁻¹ = A |
| Transpose / inverse mix | (A⁻¹)ᵀ = (Aᵀ)⁻¹ |

### Determinant Compute

| Size | Method |
|---|---|
| 2×2 | det = ad − bc |
| 3×3 | Cofactor expansion, row/col with MOST zeros. Sign: +−+− |
| 4×4 | Row reduce to triangular; track sign flips & scalar pulls |
| Triangular | det = ∏ diagonal |

### Determinant Properties

| Formula | Result |
|---|---|
| det(kA) | kⁿ det(A) — NOT k det(A); each of n rows scaled |
| det(AB) | det(A) det(B) |
| det(A⁻¹) | 1 / det(A) |
| det(Aⁿ) | det(A)ⁿ |
| det(Aᵀ) | det(A) |
| det(−M) | (−1)ⁿ det(M). 4×4: sign STAYS |
| det(Aᵀ A⁻¹) | 1 (invertible A) |

### Determinant Traps

| Trap | Detail |
|---|---|
| NOT linear | det(A+B) ≠ det(A) + det(B). Try A=B=I: det(2I)=4 ≠ 2 |
| Zero + Zero | det(A)=0, det(B)=0 ⇏ det(A+B)=0. Try A=[[1,0],[0,0]], B=[[0,0],[0,1]] ⟹ A+B=I |
| Simplify first | M²M⁻¹ = M ⟹ det = det(M) |

### 2×2 Inverse

$A = \begin{bmatrix}a & b \\ c & d\end{bmatrix} \Rightarrow A^{-1} = \frac{1}{ad - bc}\begin{bmatrix}d & -b \\ -c & a\end{bmatrix}$ (swap diag, negate off-diag)

### Inverse via Row Reduction (any size)

| Step | Action |
|---|---|
| 1 | Form augmented [A \| I] |
| 2 | Row reduce until left side = I |
| 3 | Right side is A⁻¹ |
| Fail | Left can't reach I (zero row) ⟹ A not invertible |

### Package Deal (Invertibility)

| ✓ Invertible | ✗ Not invertible |
|---|---|
| det(A) ≠ 0 | det(A) = 0 |
| RREF = Iₙ | RREF has zero row |
| All n cols pivot | Col without pivot |
| No free vars | Free vars exist |
| Ax = 0 only x = 0 | Ax = 0 has other solutions |
| Cols lin indep | Cols dependent |
| Cols span ℝⁿ / Ax = b solvable ∀b | Don't span |

### Linear Independence

| Test | Detail |
|---|---|
| Setup | Put vectors as COLUMNS, row reduce, count pivots |
| Indep | Every col has pivot |
| Dep | Any col without pivot (= combo of pivot cols) |
| Always dep | Contains 0 vector |
| ⚠ | Pairwise non-scalar ≠ indep. Always use pivot-count |

---

## Ch 7: Euclidean Vector Spaces

### Definitions

| Term | Meaning |
|---|---|
| Subspace | Non-empty subset closed under + and scalar × (auto contains 0) |
| Span | All combos c₁v₁ + … + c_kv_k |
| Basis | Independent set that spans V (no redundancy) |
| Dimension | # vectors in any basis (invariant) |

### Subspace Proof Rhythm (V = {x : equation(s)})

| Step | Action |
|---|---|
| (i) Zero | Show **0** ∈ V (plug in, gives 0 = 0 ✓) |
| (ii) Closed under + | Let u, v ∈ V. Then [eq for u]…(1), [eq for v]…(2). Consider u+v: [expand] = [regroup by (1),(2)] = 0. ∴ u+v ∈ V |
| (iii) Closed under × | Let u ∈ V, c ∈ ℝ. Then [eq]…(3). Consider cu: [factor c] = c·0 = 0. ∴ cu ∈ V |

> Homogeneous (= 0): always subspace. Non-homogeneous (≠ 0): NEVER (0 fails). Multi-eqs: check ALL in each step.

### Basis from Equation

| Step | Action |
|---|---|
| 1 | Variables NOT in equation = automatically FREE |
| 2 | dim(V) = n − #indep equations |
| 3 | Solve for pivot var, parameterise frees, collect direction vectors |

Ex: V = {(x,y,z,w) ∈ ℝ⁴ : x − 2y + z = 0}. Solve x = 2y − z. y = s, z = t, w = r (3 free ⟹ dim = 3).
(x,y,z,w) = s(2,1,0,0) + t(−1,0,1,0) + r(0,0,0,1). Basis = those three vectors.

### Span Test (is w ∈ span{v₁, v₂}?)

| Step | Action |
|---|---|
| Setup | Augment [v₁ \| v₂ \| w], row reduce |
| Result | Row [0 … 0 \| nonzero] ⟹ w ∉ span |
| Result | No contradiction ⟹ w ∈ span |
| vs Independence | [v₁ \| v₂] alone (no augment), count pivots |

### Rank-Nullity

| Formula | Meaning |
|---|---|
| rank(A) + nullity(A) = n | n = # cols of A |
| rank | # pivot cols |
| nullity | # free cols |
| Null basis | Same as Ch 5 vector form with RHS = 0 |

⚠ Verify: plug each null basis vector into Ax = 0. Every row must = 0.

### Dimension Constraints

| Fact |
|---|
| dim(V) = k ⟹ cannot have k+1 independent vectors in V |
| 2 vectors in ℝ³ ≠ basis (dim ℝ³ = 3) |
| If # vectors = dim(V), then indep ⟺ spans V |

### Column Space / Null Space

| Space | Definition | Basis |
|---|---|---|
| Col(A) | Span of columns (image of x ↦ Ax) | PIVOT columns of A (from ORIGINAL, not RREF) |
| Null(A) | {x : Ax = 0} | Vector form with RHS = 0 |

---

## Ch 8: Orthogonality, Projection, Least Squares ⭐ HIGHEST EMPHASIS

### Foundation

| Formula | Note |
|---|---|
| u · u = ‖u‖² | **Always SQUARE**. ‖u‖ = 3 ⟹ u · u = 9 |
| ‖u + v‖² | = ‖u‖² + 2(u · v) + ‖v‖² |
| If u ⊥ v | ‖u + v‖² = ‖u‖² + ‖v‖² |

### Orthogonal vs Orthonormal

| Set type | Condition |
|---|---|
| Orthogonal | Every pair u · v = 0. Lengths free. |
| Orthonormal | Orthogonal AND every ‖u‖ = 1 |
| 0 vector | Orthogonal to everything (ok in orthogonal set). NOT orthonormal (length 0) |

### §8.2 Orthogonal Complement W⊥

| Rule | Statement |
|---|---|
| Efficiency | v ⊥ W ⟺ v ⊥ every basis vector of W |
| Core theorem | Non-zero orthogonal set ⟹ linearly independent (proof: pairwise dot products = 0) |

**Find basis of W⊥:**

| Step | Action |
|---|---|
| 1 | Let v = (x₁, …, xₙ) be unknown in W⊥ |
| 2 | Set v · bᵢ = 0 for each basis vector bᵢ of W |
| 3 | Get homogeneous linear system |
| 4 | Solve (Ch 5 vector form) ⟹ basis of W⊥ |

### §8.3 Coefficients in Basis Expansion

For v = c₁u₁ + … + cₙuₙ with {uᵢ} orthogonal basis of V:

| Basis type | Coefficient |
|---|---|
| Orthogonal | **cᵢ = (v · uᵢ) / (uᵢ · uᵢ)** |
| Orthonormal | **cᵢ = v · uᵢ** (denom = 1) |
| Observation | v · u_k = 0 ⟹ c_k = 0 |

### §8.3 Projection & Decomposition

| Concept | Formula |
|---|---|
| proj_W(v) | Σ (v · uᵢ) / (uᵢ · uᵢ) · uᵢ over orthogonal basis of W |
| Decomposition | v = proj_W(v) + v_perp |
| v_perp | v − proj_W(v), lives in W⊥ |

### §8.4 Gram-Schmidt (concept only, procedure NOT tested)

| Step | Formula |
|---|---|
| v₁ | = a₁ |
| v₂ | = a₂ − proj_{v₁}(a₂) |
| General | vᵢ subtracts projection onto previous v's |
| Normalise (if orthonormal wanted) | Divide each vᵢ by ‖vᵢ‖ |

### §8.5 Least Squares ⭐

| Item | Formula / Note |
|---|---|
| Setup | Ax = b inconsistent (no exact solution) |
| Goal | Find u minimising ‖Ax − b‖ |
| Normal equation | **AᵀA u = Aᵀ b** |
| Method | Form augmented [AᵀA \| Aᵀb], row reduce, solve |
| Size check | A is m × n ⟹ AᵀA is n × n |

### §8.5 Best Fit Line

| Item | Formula |
|---|---|
| Data | (x₁, y₁), …, (x_k, y_k) |
| Model | y = mx + c |
| A matrix | Col 1 = 1s, Col 2 = x values |
| b vector | y values |
| Solve | AᵀA [c; m]ᵀ = Aᵀ b ⟹ intercept c, slope m |
| ⚠ Qualitative fit judgment | NOT tested, only calculation |

---

## Errors to Avoid (CT1, CT2, CT3, Mocks, HW)

| Error | Fix |
|---|---|
| Used standard rule at non-smooth point | Use LIMIT DEFINITION; check left & right |
| Evaluated across interior discontinuity | Scan denom for zeros, split integral |
| √(negative) / wrong sign across \|x − a\| | Left of a: use (a − x), chain rule (−1) |
| ∫cos x = −sin x | No, +sin x (−sin is derivative) |
| u-sub forgot to convert bounds | x = a → u = g(a); convert IMMEDIATELY |
| Forgot shifted-axis radius | Radius = f(x) − k, not f(x) |
| 5/0 thought "undefined" | ±∞ (blows up) |
| 0/0 thought = 0 | Indeterminate — simplify! |
| 0 · ∞ thought = 0 | Indeterminate! |
| L'Hôpital without checking indet form | Check FIRST, else wrong |
| FTC I Case 2 chain rule forgotten | ∫_a^{g(x)} needs f(g(x)) · g'(x) |
| Quotient rule with + not − | Lo·d-Hi **MINUS** Hi·d-Lo |
| det(kA) = k det(A) | Wrong: kⁿ det(A) |
| Solved for free vars instead of pivot | Free = parameter; solve PIVOT vars |
| Pairwise non-scalar = "independent" | Use pivot-count |
| Used ‖u‖ for u · u | u · u = ‖u‖² (square it) |
| Forgot denom in cᵢ formula | Orthogonal: / uᵢ · uᵢ. Drop only if orthonormal |
| 2 vectors in ℝ³ = "basis" | dim(ℝ³) = 3; need 3 |
| Projection vs decomposition confused | Projection = one vector. Decomposition = proj + perp |
| Horizontal shift wrong direction | f(x − 3) shifts RIGHT (opposite of sign) |
| Inflection from f'' = 0 alone | Must verify sign CHANGE |
| Read tan(x³) as tan³(x) | Read notation twice |
| u-sub: du doesn't match | Wrong u, try another |
| Forgot F(a) in FTC II | Answer = F(b) − F(a), not F(b) |

---

## Reasoning Templates (HW2 anchor: Prof "weak explanation = #1 mark killer")

| Topic | Template |
|---|---|
| Subspace | "Since u, v ∈ V: [eq(1)], [eq(2)]. Consider u+v: [expand] = [regroup] = [by (1),(2)] 0. ∴ u+v ∈ V." |
| IVT | "f is continuous on [a,b] and f(a)·f(b) < 0, so by IVT, ∃c ∈ (a,b) with f(c) = 0." |
| MVT | "f continuous on [a,b], differentiable on (a,b), so by MVT, ∃c with f'(c) = (f(b)−f(a))/(b−a)." |
| Differentiability | "f'(a) = lim_{h→0} (f(a+h)−f(a))/h. Left: L⁻. Right: L⁺. Since L⁻ = L⁺ = L, f is differentiable with f'(a) = L." |
| L'Hôpital | "lim f/g gives 0/0 (indeterminate). By L'Hôpital, lim f/g = lim f'/g' = …" |
| FTC I Case 2 | "By FTC I with chain rule, d/dx ∫_a^{g(x)} f(t) dt = f(g(x)) · g'(x)." |
| u-sub (definite) | "Let u = g(x), du = g'(x) dx. x = a ⟹ u = g(a); x = b ⟹ u = g(b). Then ∫_a^b … = ∫_{g(a)}^{g(b)} f(u) du = …" |
| Least Squares | "Ax = b is inconsistent. Least-squares solution u satisfies AᵀAu = Aᵀb. Forming [AᵀA \| Aᵀb], row reduce: u = …" |
| Orthogonal complement | "v ∈ W⊥ ⟺ v · bᵢ = 0 for each basis vector bᵢ of W. This gives the homogeneous system [system], whose solution set is W⊥." |
| Rank-Nullity | "A has rank r (# pivot cols), so nullity = n − r. Null space has dim n − r, basis {v₁, …, v_{n−r}} from free-var parameterisation." |
