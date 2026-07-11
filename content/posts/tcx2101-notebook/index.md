---
title: "TCX2101 | Notebook"
slug: "nus-bit-tcx2101-notebook"
date: 2026-02-10
description: "Comprehensive section-by-section notes for NUS TCX2101: Calculus and Linear Algebra"
tags: ["nus", "math", "calculus", "notes", "tcx2101"]
categories:
  - ["Education", "NUS BIT", "TCX2101"]
toc: true
math: true
draft: false
---

> **TCX2101 (NUS Math) series:** **Notebook (current)** · [Calculus (1.1-3.4)]({{< ref "tcx2101-calculus-cheatsheet" >}}) · [Calculus (3.5-4.11)]({{< ref "tcx2101-calculus-cheatsheet-ct2" >}}) · [CT2 helpsheet]({{< ref "tcx2101-ct2-helpsheet" >}}) · [CT3 helpsheet]({{< ref "tcx2101-ct3-helpsheet" >}}) · [Finals helpsheet]({{< ref "tcx2101-finals-helpsheet" >}})

> **Current focus:** [TCX2101 Finals Helpsheet (Apr 28 exam)]({{< ref "tcx2101-finals-helpsheet" >}}). This page kept for full section-by-section reference.

i also wrote some exam-ready cheatsheets that i found easy to absorb.
1. [cheatsheet for class test 1 (1.1 ~ 3.4)]({{< ref "tcx2101-calculus-cheatsheet" >}})

## Chapter 1: Functions

### 1.1 Single Variable Function and its Graph

#### Definition

A **function** $f$ from a **set** $D$ to a **set** $Y$

$$f : D \to Y$$

is a rule that assigns a **unique** value $f(x)$ in $Y$ to each $x \in D$.

- $D$ is called the **domain**.
- $Y$ is called the **codomain** of the function.
- For every $a \in D$, there is a unique $y \in Y$ such that $f(a) = y$. $f(a) = y$ is called the **image of $a$**.
- The **range** $R = \{f(x) \mid x \in D\}$ of $f$ is a subset of the codomain $R \subseteq Y$ that contains all the images of $f$.

#### Graph of a Function

Let $f$ be a function with domain $D$. The **graph** of $f$ consists of the points in the **Cartesian plane** ($xy$-plane, denoted as $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$),

$$\{(x, f(x)) \mid x \in D\}.$$

#### Vertical Line Test for a Function

- For a function $f$ with domain $D$, and any $x \in D$, there **must be a unique** $y$ such that $f(x) = y$.
- For a curve to be the **graph of a function**, the vertical line $x = a$ must intersect the curve **at most once**.

---

### 1.2 Operations on Functions

#### Algebraic Operations

Let $f$ be a function with domain $D_f$, and $g$ a function with domain $D_g$. Define new functions as follows:

| # | Operation | Definition | Domain |
|---|-----------|------------|--------|
| 1 | **Addition** | $(f + g)(x) = f(x) + g(x)$ | $D_f \cap D_g$ |
| 2 | **Subtraction** | $(f - g)(x) = f(x) - g(x)$ | $D_f \cap D_g$ |
| 3 | **Scalar multiplication** | $(cf)(x) = cf(x)$, for any constant $c \in \mathbb{R}$ | $D_f$ |
| 4 | **Multiplication** | $(fg)(x) = f(x)g(x)$ | $D_f \cap D_g$ |
| 5 | **Powers** | $(f^k)(x) = f(x)^k$, for positive integer $k \in \mathbb{Z}^+$ | $D_f$ |
| 6 | **Division** | $\displaystyle\left(\frac{f}{g}\right)(x) = \frac{f(x)}{g(x)}$ | $D_f \cap \{x \in D_g \mid g(x) \neq 0\}$ |

#### Composition

Suppose $f$ and $g$ are functions with domains $D_f$ and $D_g$, respectively. The **composite function** $f \circ g$ ("$f$ composed with $g$") is defined by

$$(f \circ g)(x) = f(g(x)).$$

The **domain** of $f \circ g$ is the set of $x$ in $D_g$ for which $g(x)$ lies in $D_f$,

$$D_{f \circ g} = \{x \in D_g \mid g(x) \in D_f\}.$$

> Note that in general, $g \circ f \neq f \circ g$.

#### Graph Transformations

**Vertical Shifting:**
Let $g(x) = x + k$. Then $(g \circ f)(x) = f(x) + k$ shifts the graph **up** ($k > 0$) or **down** ($k < 0$).

**Horizontal Shifting:**
Let $g(x) = x + k$. Then $(f \circ g)(x) = f(x + k)$ shifts the graph **left** ($k > 0$) or **right** ($k < 0$).

**Vertical Scaling:**
Let $g(x) = cx$ ($c > 0$). Then $(g \circ f)(x) = cf(x)$ **stretches** ($c > 1$) or **compresses** ($0 < c < 1$) vertically.

**Horizontal Scaling:**
Let $g(x) = cx$ ($c > 0$). Then $(f \circ g)(x) = f(cx)$ **compresses** ($c > 1$) or **stretches** ($0 < c < 1$) horizontally.

**Reflection:**
Let $g(x) = -x$. Then:
- $(g \circ f)(x) = -f(x)$ reflects along the **$x$-axis**.
- $(f \circ g)(x) = f(-x)$ reflects along the **$y$-axis**.

**Modulus:**
Let $g(x) = |x|$. Then:
- $(g \circ f)(x) = |f(x)|$ reflects the negative $y$ in the graph of $f$.
- $(f \circ g)(x) = f(|x|)$ is symmetric along the $y$-axis.

#### Practice Question

Let $f(x) = x + 1$ and $g(x) = x^2$. Then $(f \circ g)(x)$ is

- A. $(x + 1)^2$
- B. $x^2 + 1$

<details>
<summary>Answer</summary>

**B.** $x^2 + 1$

$(f \circ g)(x) = f(g(x)) = f(x^2) = x^2 + 1$

</details>

---

### 1.3 Algebraic Functions and Transcendental Functions

#### Algebraic Functions

An **algebraic function** is any function constructed from $f(x) = x$ using a finite number of algebraic operations: addition, subtraction, multiplication, division, taking powers, and taking roots.

**Linear Function:** $f(x) = mx + c$ where $m$ = gradient, $c$ = $y$-intercept.
- $m = 0$: constant function $f(x) = c$
- $m = 1, c = 0$: identity function $f(x) = x$

**Polynomials:** $p(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0$
- Domain: $\mathbb{R} = (-\infty, \infty)$
- $n$ = degree, $a_n, \ldots, a_0$ = coefficients

**Rational Function:** $f(x) = \frac{p(x)}{q(x)}$ where $p, q$ are polynomials, $q(x) \neq 0$.
- Domain: $\{x \mid q(x) \neq 0\}$

#### Transcendental Functions

**Transcendental functions** are functions that are **not** algebraic.

**Trigonometric Functions:**

For any angle $\theta$, the point on the unit circle has coordinates $(\cos\theta, \sin\theta)$.

$$\tan(\theta) = \frac{\sin(\theta)}{\cos(\theta)}$$

| Function | Definition | Undefined at |
|----------|------------|--------------|
| Secant | $\sec(\theta) = \dfrac{1}{\cos(\theta)}$ | $\theta \neq \dfrac{(2k+1)\pi}{2}$, $k \in \mathbb{Z}$ |
| Cosecant | $\csc(\theta) = \dfrac{1}{\sin(\theta)}$ | $\theta \neq k\pi$, $k \in \mathbb{Z}$ |
| Cotangent | $\cot(\theta) = \dfrac{\cos(\theta)}{\sin(\theta)}$ | $\theta \neq k\pi$, $k \in \mathbb{Z}$ |

**Inverse Trigonometric Functions:** $\cos^{-1}$, $\sin^{-1}$, $\tan^{-1}$

#### Trigonometric Identities

**Pythagorean Identities:**

$$\cos^2(\theta) + \sin^2(\theta) = 1$$

$$1 + \tan^2(\theta) = \sec^2(\theta)$$

$$\cot^2(\theta) + 1 = \csc^2(\theta)$$

**Addition Formula:**

$$\cos(A + B) = \cos(A)\cos(B) - \sin(A)\sin(B)$$

$$\sin(A + B) = \sin(A)\cos(B) + \cos(A)\sin(B)$$

**Double Angle Formula:**

$$\sin(2\theta) = 2\sin(\theta)\cos(\theta)$$

$$\cos(2\theta) = \cos^2(\theta) - \sin^2(\theta) = 2\cos^2(\theta) - 1 = 1 - 2\sin^2(\theta)$$

**Product-Sum Identities:**

$$\sin(A) + \sin(B) = 2\sin\left(\frac{A+B}{2}\right)\cos\left(\frac{A-B}{2}\right)$$

$$\cos(A) + \cos(B) = 2\cos\left(\frac{A+B}{2}\right)\cos\left(\frac{A-B}{2}\right)$$

$$\sin(A) - \sin(B) = 2\cos\left(\frac{A+B}{2}\right)\sin\left(\frac{A-B}{2}\right)$$

$$\cos(A) - \cos(B) = -2\sin\left(\frac{A+B}{2}\right)\sin\left(\frac{A-B}{2}\right)$$

**Product Identities:**

$$\sin(A)\cos(B) = \frac{\sin(A+B) + \sin(A-B)}{2}$$

$$\cos(A)\cos(B) = \frac{\cos(A+B) + \cos(A-B)}{2}$$

$$\sin(A)\sin(B) = \frac{\cos(A-B) - \cos(A+B)}{2}$$

#### Exponential Functions

$$f(x) = a^x, \quad a > 0, a \neq 1$$

| Rule | Formula |
|------|---------|
| Product | $a^x \cdot a^y = a^{x+y}$ |
| Quotient | $\dfrac{a^x}{a^y} = a^{x-y}$ |
| Power of power | $(a^x)^y = a^{xy}$ |
| Product to power | $a^x \cdot b^x = (ab)^x$ |
| Quotient to power | $\dfrac{a^x}{b^x} = \left(\dfrac{a}{b}\right)^x$ |

#### Logarithmic Functions

$$f(x) = \log_a(x), \quad a > 0, a \neq 1$$

$\log_a(x) = y \Leftrightarrow a^y = x$. Domain: $(0, \infty)$.

**Algebraic properties:**

| Rule | Formula |
|------|---------|
| Product rule | $\log_a(x_1 x_2) = \log_a(x_1) + \log_a(x_2)$ |
| Quotient rule | $\log_a\left(\dfrac{x_1}{x_2}\right) = \log_a(x_1) - \log_a(x_2)$ |
| Power rule | $\log_a(x^c) = c\log_a(x)$ |

**Inverse properties:** $\log_a(a) = 1$, $a^{\log_a(x)} = x$, $\log_a(a^x) = x$

**Change of base:** $\log_a(x) = \frac{\log_b(x)}{\log_b(a)}$

#### Practice Question

**Simplify:** $\ln(2e^{3\ln(x)})$

<details>
<summary>Answer</summary>

$$\ln(2e^{3\ln(x)}) = \ln(2) + \ln(e^{3\ln(x)}) = \ln(2) + 3\ln(x) = \ln(2) + \ln(x^3) = \ln(2x^3)$$

</details>

---

## Chapter 2: Limits and Continuity

### 2.1 Introduction to Limits

#### Definition (Two-Sided Limit)

We say that the **limit** of $f(x)$ as $x$ approaches $c$ is $L$, denoted by

$$\lim_{x \to c} f(x) = L,$$

if the values of $f(x)$ can be made **arbitrarily close** to $L$ by taking $x$ **sufficiently close** to $c$, **but not equal to** $c$.

#### Left-Hand Limit

$$\lim_{x \to c^-} f(x) = L$$

$f(x)$ approaches $L$ as $x$ approaches $c$ **from the left** ($x < c$).

#### Right-Hand Limit

$$\lim_{x \to c^+} f(x) = L$$

$f(x)$ approaches $L$ as $x$ approaches $c$ **from the right** ($x > c$).

#### Key Relationship

$$\lim_{x \to c} f(x) = L \iff \lim_{x \to c^-} f(x) = L \text{ AND } \lim_{x \to c^+} f(x) = L$$

The two-sided limit exists **if and only if** both one-sided limits exist and are equal.

| Notation | Direction | Condition |
|----------|-----------|-----------|
| $\lim_{x \to c} f(x)$ | Both sides | $0 < \|x - c\|$ small |
| $\lim_{x \to c^-} f(x)$ | From left | $x < c$ (approaching $\to$) |
| $\lim_{x \to c^+} f(x)$ | From right | $x > c$ (approaching $\leftarrow$) |

---

### 2.2 Properties of Limits

#### Limit Laws

Suppose $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} g(x) = M$. Then:

| Rule | Formula |
|------|---------|
| **Sum/Difference** | $\displaystyle\lim_{x \to c}(f(x) \pm g(x)) = L \pm M$ |
| **Scalar multiple** | $\displaystyle\lim_{x \to c}(k \cdot f(x)) = k \cdot L$ |
| **Product** | $\displaystyle\lim_{x \to c}(f(x) \cdot g(x)) = L \cdot M$ |
| **Quotient** | $\displaystyle\lim_{x \to c}\frac{f(x)}{g(x)} = \frac{L}{M}, \quad M \neq 0$ |
| **Power** | $\displaystyle\lim_{x \to c}[f(x)]^n = L^n, \quad n \in \mathbb{Z}^+$ |
| **Root** | $\displaystyle\lim_{x \to c}\sqrt[n]{f(x)} = \sqrt[n]{L}, \quad n \in \mathbb{Z}^+$ |

> For the **root rule**: if $n$ is even, we assume $L \geq 0$.

#### Corollary: Direct Substitution

For any **algebraic function** $f(x)$ and any $c \in D_f$,

$$\lim_{x \to c} f(x) = f(c).$$

> For polynomials and rational functions (where defined), just **plug in** $c$ to find the limit!

#### The Sandwich Theorem (Squeeze Theorem)

Suppose $g(x) \leq f(x) \leq h(x)$ for all $x$ near $c$ (except possibly at $c$ itself), and

$$\lim_{x \to c} g(x) = \lim_{x \to c} h(x) = L.$$

Then $\lim_{x \to c} f(x) = L$.

#### Important Corollaries

$$\lim_{x \to 0} \frac{\sin(x)}{x} = 1$$

$$\lim_{x \to 0} \frac{\cos(x) - 1}{x} = 0$$

#### Challenge: Sandwich Theorem in Action

**Prove:** $\lim_{x \to 0} x \sin\left(\frac{1}{x}\right) = 0$

$\sin\left(\frac{1}{x}\right)$ oscillates wildly between $-1$ and $+1$ as $x \to 0$, but it's multiplied by $x$ which shrinks toward 0. The oscillations get squeezed into a tighter band.

**The bounds:** Since $-1 \leq \sin\left(\frac{1}{x}\right) \leq 1$ for all $x \neq 0$:

$$-|x| \leq x\sin\left(\frac{1}{x}\right) \leq |x|$$

Both $-|x| \to 0$ and $|x| \to 0$ as $x \to 0$.

**By Sandwich Theorem:**

$$\lim_{x \to 0}(-|x|) = 0 \quad \text{and} \quad \lim_{x \to 0}|x| = 0$$

$$\therefore \lim_{x \to 0} x\sin\left(\frac{1}{x}\right) = 0$$

#### When to Use Sandwich Theorem

| Situation | Example |
|-----------|---------|
| Bounded function $\times$ vanishing function | $x \sin\left(\frac{1}{x}\right)$, $x^2 \cos(x)$ |
| Can't evaluate directly | $\frac{\sin x}{x}$ at $x = 0$ |
| Oscillating but bounded | Any $(\text{small}) \times (\text{bounded oscillation})$ |

---

### 2.3 Limits Involving Infinity

#### Limits as $x \to \pm\infty$

$$\lim_{x \to \infty} f(x) = L \quad \text{means } f(x) \to L \text{ as } x \text{ grows positively large}$$

$$\lim_{x \to -\infty} f(x) = L \quad \text{means } f(x) \to L \text{ as } x \text{ grows negatively large}$$

All the same limit laws apply for $x \to \pm\infty$.

#### Limits at Infinity of Rational Functions

**Strategy:** Divide everything by the **highest power of $x$ in the denominator** ($x^m$).

| Degree Comparison | Result | Memory Trick |
|-------------------|--------|--------------|
| $n = m$ (tie) | $\frac{a_n}{b_m}$ | "Tie $\to$ ratio of leaders" |
| $n > m$ (top wins) | $\pm\infty$ | "Top heavy $\to$ blows up" |
| $n < m$ (bottom wins) | $0$ | "Bottom heavy $\to$ squashed to 0" |

**Why each case works** (after dividing by $x^m$):

- **$n = m$:** Numerator $\to a_n$, Denominator $\to b_m$ (all lower terms vanish). Result: $\frac{a_n}{b_m}$.
- **$n > m$:** Numerator still has $x^{n-m} \to \infty$, Denominator $\to b_m$ (finite). Result: $\pm\infty$.
- **$n < m$:** Numerator $\to 0$ (all terms have $x$ in denominator), Denominator $\to b_m$ (finite). Result: $0$.

**Examples:**

$$\lim_{x \to \infty} \frac{3x^2 + 5x}{2x^2 - 1} = \frac{3}{2} \quad (n = m)$$

$$\lim_{x \to \infty} \frac{x^3 + 1}{x^2 + 1} = +\infty \quad (n > m)$$

$$\lim_{x \to \infty} \frac{x + 1}{x^2 + 1} = 0 \quad (n < m)$$

#### $f(x) \to \pm\infty$ as $x \to c$

$$\lim_{x \to c} f(x) = \infty \quad \text{means } f(x) \text{ grows without bound as } x \to c$$

$$\lim_{x \to c} f(x) = -\infty \quad \text{means } f(x) \text{ decreases without bound as } x \to c$$

#### Asymptotes

| Asymptote Type | Condition | How to Find |
|----------------|-----------|-------------|
| **Horizontal** | $\lim_{x \to \pm\infty} f(x) = b$ | Use rational function degree rules |
| **Vertical** | $\lim_{x \to a} f(x) = \pm\infty$ | Find where denominator = 0 (but not numerator) |
| **Oblique** | $\deg(\text{num}) = \deg(\text{denom}) + 1$ | Polynomial long division |

> A function can have **0, 1, or 2** horizontal asymptotes. Oblique asymptote = quotient from long division (ignore remainder).

---

### 2.4 Continuous Functions

#### Definition

The function $f$ is **continuous at $c$** if

$$\lim_{x \to c} f(x) = f(c).$$

#### Continuity Test

$f(x)$ is continuous at $x = c$ if and only if:
1. $\lim_{x \to c} f(x)$ exists
2. $\lim_{x \to c} f(x) = f(c)$

#### Continuity on Interval/Domain

- **Continuous on interval $I$**: continuous at every $x \in I$
- **Continuous function**: continuous at every $x \in D$ (its domain)

#### Algebraic Operations Preserve Continuity

If $f$ and $g$ are continuous at $x = c$, then so are: $f \pm g$, $kf$, $fg$, $f/g$ (if $g(c) \neq 0$), $f^n$, $\sqrt[n]{f}$.

**Corollary:** All algebraic functions are continuous. All trigonometric functions are continuous wherever defined.

#### Composition Theorems

- If $\lim_{x \to a} f(x) = a$ and $g$ is continuous at $a$, then $\lim_{x \to a} g \circ f(x) = g(a)$.
- If $f$ is continuous at $c$ and $g$ is continuous at $f(c)$, then $g \circ f$ is continuous at $c$.
- If $f$ and $g$ are continuous on their domains, then $f \circ g$ is continuous on its natural domain.

#### Intermediate Value Theorem

Suppose $f$ is a continuous function on a closed interval $[a, b]$. Then for any $y_0$ between $f(a)$ and $f(b)$, there exists $c \in (a, b)$ such that $f(c) = y_0$.

> If a continuous function crosses from one value to another, it must pass through every value in between.

---

## Chapter 3: Differentiation and Applications

### 3.1 Tangent Lines and Derivative

#### Definition (Derivative at a Point)

$$f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h} = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}$$

provided the limit exists. If $f'(a)$ exists, $f$ is **differentiable at $a$**.

#### Tangent Line

$$y = f(a) + f'(a)(x - a)$$

#### Differentiable on Intervals

- **Open interval $(a, b)$**: differentiable at every $x \in (a, b)$
- **Closed interval $[a, b]$**: differentiable on $(a, b)$, plus right-hand derivative at $a$ and left-hand derivative at $b$ exist

$$\text{Right-hand: } \lim_{h \to 0^+} \frac{f(a + h) - f(a)}{h}, \quad \text{Left-hand: } \lim_{h \to 0^-} \frac{f(b + h) - f(b)}{h}$$

#### Differentiable Function

$$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$$

$\frac{d}{dx}$ is the **differentiation operator**. Differentiability depends on both the formula and the domain.

#### Theorem: Differentiable $\implies$ Continuous

If $f$ is differentiable at $x = c$, then $f$ is continuous at $x = c$.

---

### 3.2 Basic Differentiation Rules

| Rule | Formula |
|------|---------|
| **Constant** | $\frac{d}{dx}(c) = 0$ |
| **Power** | $\frac{d}{dx} x^\alpha = \alpha x^{\alpha - 1}$, for $\alpha \neq 0$ |
| **Scalar Multiple** | $\frac{d}{dx}(cf) = c \cdot f'$ |
| **Sum/Difference** | $\frac{d}{dx}(f \pm g) = f' \pm g'$ |
| **Product** | $\frac{d}{dx}(fg) = f'g + fg'$ |
| **Quotient** | $\frac{d}{dx}\left(\frac{f}{g}\right) = \frac{f'g - fg'}{g^2}$ |
| **Reciprocal** | $\frac{d}{dx}\frac{1}{f} = -\frac{f'}{f^2}$ |
| **Chain** | $\frac{d}{dx}(f \circ g) = f'(g(x)) \cdot g'(x)$ |

**General Product Rule:**

$$\frac{d}{dx}(f_1 \cdots f_n) = \sum_{i=1}^{n} (f_1 \cdots f_{i-1} \cdot f_{i+1} \cdots f_n) \cdot f_i'$$

#### Higher Order Derivatives

$$f^{(k)}(x) = \frac{d}{dx}\left(f^{(k-1)}(x)\right)$$

---

### 3.3 Derivative of Inverse Functions

#### Theorem (Derivative Rule for Inverse)

If $f'$ is nonzero on an interval containing $f^{-1}(b)$, then

$$(f^{-1})'(b) = \frac{1}{f'(f^{-1}(b))}$$

#### Derivative of $\ln(f(x))$

$$\frac{d}{dx} \ln(f(x)) = \frac{f'(x)}{f(x)}$$

#### Derivative of $a^{f(x)}$

$$\frac{d}{dx} a^{f(x)} = a^{f(x)} \ln(a) \cdot f'(x)$$

#### Derivative of $\log_a(f(x))$

$$\frac{d}{dx} \log_a(f(x)) = \frac{f'(x)}{f(x) \ln(a)}$$

#### Derivative of Inverse Trigonometric Functions

| Function | Derivative |
|----------|-----------|
| $\sin^{-1}(f)$ | $\frac{f'}{\sqrt{1 - f^2}}$, $\|f\| < 1$ |
| $\cos^{-1}(f)$ | $-\frac{f'}{\sqrt{1 - f^2}}$, $\|f\| < 1$ |
| $\tan^{-1}(f)$ | $\frac{f'}{1 + f^2}$ |
| $\cot^{-1}(f)$ | $-\frac{f'}{1 + f^2}$ |
| $\sec^{-1}(f)$ | $\frac{f'}{\|f\| \sqrt{f^2 - 1}}$, $\|f\| > 1$ |
| $\csc^{-1}(f)$ | $-\frac{f'}{\|f\| \sqrt{f^2 - 1}}$, $\|f\| > 1$ |

---

### 3.4 Extreme Values of Functions

#### Absolute Maximum and Minimum

- **Absolute max** at $c$: $f(c) \geq f(x)$ for all $x \in D$
- **Absolute min** at $c$: $f(c) \leq f(x)$ for all $x \in D$

**Remarks:** Extreme values might not exist, and might not be unique.

#### Local Maximum and Minimum

- **Local max** at $c$: $f(c) \geq f(x)$ for all $x$ in some open interval $I$ around $c$
- **Local min** at $c$: $f(c) \leq f(x)$ for all $x$ in some open interval $I$ around $c$

**Remarks:** Absolute extrema are local extrema, but functions can have local but not absolute extrema. Local extrema might not exist and might not be unique.

#### Local Extrema at Endpoints

Suppose the domain of $f$ is $[a, b]$.

- $f$ has a **local max at endpoint $a$** if $f(a) \geq f(x)$ for all $x \in [a, a + \delta)$ for some $\delta > 0$.
- $f$ has a **local max at endpoint $b$** if $f(b) \geq f(x)$ for all $x \in (b - \delta, b]$ for some $\delta > 0$.

The inequality is reversed for local minimum values.

#### Extreme Value Theorem

If $f$ is **continuous** on a **closed bounded interval** $[a, b]$, then $f$ attains both an absolute maximum and minimum on $[a, b]$.

#### First Derivative Theorem for Local Extrema

If $f$ has a local extreme value at an interior point $c$, and $f$ is differentiable at $c$, then $f'(c) = 0$.

#### Critical Point

An interior point of the domain where $f' = 0$ or $f'$ is undefined.

**Remarks:**
1. By the First Derivative Theorem, every local extremum at an interior point is a critical point.
2. The converse is **false**: not every critical point is a local extremum (e.g., $f(x) = x^3$ at $x = 0$).

> Every local extremum is a critical point, but NOT every critical point is a local extremum.

#### Conceptual Question

Will the Extreme Value Theorem hold if we replace "continuous" with "increasing or decreasing"? That is, must an increasing/decreasing function on $[a, b]$ attain an absolute max and min?

#### Finding Absolute Extrema (Closed Interval Method)

1. Find all critical points of $f$ on the interval
2. Evaluate $f$ at all critical points and endpoints
3. Take the largest and smallest values

---

## Section 3.5: Mean Value Theorem

### Rolle's Theorem

Try drawing a smooth curve starting from point a to point b, without lifting the pen. There must if the curve is a straight line, then the derivative every where is 0. Otherwise, there must be a maximum or a minimum point, and thus a point where the derivative is 0. This is the intuition behind Rolle's theorem.

**Theorem:** Suppose $y = f(x)$ is **continuous** over the closed interval $[a, b]$ and **differentiable** at every point of its interior $(a, b)$. If $f(a) = f(b)$, then there is at least one number $c$ in $(a, b)$ at which $f'(c) = 0$.

### Mean Value Theorem (MVT)

Imagine travelling along a straight line for a certain distance. It is intuitively clear that there must be a point during the travel where the instantaneous speed is equal to the average speed. This is the result of the mean value theorem.

**Theorem:** Suppose $f$ is a **continuous** function defined on a closed and bounded interval $[a, b]$ and **differentiable** in the interior $(a, b)$. Then there exists a point $c \in (a, b)$ such that:

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

### Corollary

If $f'(x) = g'(x)$ for all $x \in (a, b)$, then there exists a constant $C \in \mathbb{R}$ such that:

$$f(x) = g(x) + C \quad \forall x \in (a, b)$$

---

## Section 3.6: Derivative Test for Local Extrema

### Monotone Functions

**Theorem:** Suppose $f$ is **continuous** on $[a, b]$ and **differentiable** on $(a, b)$.

- If $f'(x) > 0$ for all $x \in (a, b)$, then $f$ is **increasing** on $[a, b]$.
- If $f'(x) < 0$ for all $x \in (a, b)$, then $f$ is **decreasing** on $[a, b]$.

### First Derivative Test for Local Extrema

**Theorem [First Derivative Test for Local Extrema]**

Suppose

- $c$ is a **critical point** of a **continuous** function $f$,
- there is an open interval $I$ containing $c$ such that $f$ is **differentiable** on the punctured interval $I \setminus \{c\}$.

Moving across $c$ from left to right,

- if $f'$ changes from **negative to positive** at $c$, then $f$ has a **local minimum** at $c$;
- if $f'$ changes from **positive to negative** at $c$, then $f$ has a **local maximum** at $c$;
- if $f'$ **does not change sign** at $c$, then $c$ is **not a local extremum** of $f$.

### Concavity

**Definition:** The graph of a differentiable function $y = f(x)$ is

- **concave up** on an open interval $I$ if $f'$ is **increasing** on $I$;
- **concave down** on an open interval $I$ if $f'$ is **decreasing** on $I$.

**Theorem [Second Derivative Test for Concavity]**

Let $f(x)$ be a twice-differentiable function defined on an interval $I$.

- If $f'' > 0$ on $I$, the graph of $f$ is **concave up** on $I$.
- If $f'' < 0$ on $I$, the graph of $f$ is **concave down** on $I$.

### Point of Inflection

**Definition:** A point $(a, f(a))$ where the concavity of the graph of $f$ changes is a **point of inflection**.

- A point of inflection is also called an **inflection point**.
- The graph crosses its tangent line at the point of inflection.
- At a point of inflection $(a, f(a))$, either $f''(a) = 0$ or $f''$ does not exist.

### Second Derivative Test for Local Extrema

**Theorem [Second Derivative Test for Local Extrema]**

Suppose $f''$ is continuous on an open interval containing $c$.

- $f'(c) = 0$ & $f''(c) < 0$ $\Rightarrow$ $f$ has a **local maximum** at $x = c$.
- $f'(c) = 0$ & $f''(c) > 0$ $\Rightarrow$ $f$ has a **local minimum** at $x = c$.

If $f'(c) = 0$ and $f''(c) = 0$, then the test fails. $c$ could be a local maximum value, a local minimum value, or neither.

---

## Section 3.7: L'Hôpital's Rule

**Theorem [L'Hôpital's Rule]**

Suppose that $f$ and $g$ are **differentiable** on an open interval $I$ containing a point $a$, $f(a) = g(a) = 0$, and $g'(x) \neq 0$ for all $x \in I \setminus \{a\}$. Then

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)},$$

assuming that the limit on the right side of the equation exists.

The result holds in the case where $\lim_{x \to a} f(x) = \lim_{x \to a} g(x) = \pm\infty$.

### Question

Find

$$\lim_{x \to 0} \frac{1 - \cos^2(x)}{x + x^2}.$$

Applying L'Hôpital's Rule rule twice,

$$\lim_{x \to 0} \frac{1 - \cos^2(x)}{x + x^2} = \lim_{x \to 0} \frac{2\sin(x)\cos(x)}{1 + 2x} = \lim_{x \to 0} \frac{\sin(2x)}{1 + 2x} = \lim_{x \to 0} \frac{2\cos(2x)}{2} = 1.$$

Is this correct?

### Summary

- Use L'Hôpital's rule (repeatedly) whenever finding $\lim_{x \to a} \frac{f(x)}{g(x)}$, where $a$ is either a finite number or $\pm\infty$, and as $x \to a$,

$$\frac{f(x)}{g(x)} \to \frac{0}{0}, \quad \frac{\pm\infty}{\pm\infty}.$$

  These expressions are known as indeterminate forms.

- You may convert the expression of a function $F(x)$ to a form $F(x) = \frac{f(x)}{g(x)}$ such that the above conditions hold for us to use L'Hôpital's rule.
- Stop using L'Hôpital's Rule and evaluate the limit directly if it is no longer of an indeterminate form.

---

## Section 3.8: Optimization

**Optimization** is where all the ideas we have developed so far come together.

Using derivatives, we can locate stationary points, determine where a function increases or decreases, and identify local and global maxima and minima.

In this section, these tools are applied to practical problems, real situations are translated into mathematical functions, and calculus is used to determine the best possible outcome — whether that means maximizing or minimizing a given quantity — under the given constraints.

### Algorithm

- Read the problem. Understand the goal of the problem, and identify the hypothesis or assumptions given.
- Draw a picture if necessary. Label the parts that are important to the problem, and include all the assumptions and hypotheses.
- Introduce a variable for the quantity to be maximized or minimized. Write other unknown quantities in terms of this variable.
- Write equations for the unknown variables. Translate the relationship between the given assumptions and the variables into mathematical equations, and make the unknown variables the subject of the formula.
- Substitute to get one equation in one variable.
- Test the critical points and endpoints in the domain of the unknown variable. Use all the tests introduced above to identify and classify the critical points. If the domain is closed and bounded (i.e. $[a, b]$), remember to check the endpoints.

### Example 1

A farmer has 2400 meters of fencing and wants to fence off a rectangular field that borders a straight river. Suppose he needs no fence along the river. What are the dimensions of the field that has the largest area?

Let $x$ be the length of each side perpendicular to the river and $y$ the length of the side parallel to the river.

Since no fence is needed along the river, the fencing constraint is

$$2x + y = 2400, \quad x \geq 0, \quad y \geq 0.$$

The area of the field is

$$A = xy.$$

and our aim is to maximise $A$.

From the constraint,

$$y = 2400 - 2x$$

Substituting into the area formula,

$$A(x) = x(2400 - 2x) = 2400x - 2x^2, \quad 0 \leq x \leq 1200.$$

Differentiate,

$$A'(x) = 2400 - 4x$$

Setting $A'(x) = 0$,

$$2400 - 4x = 0 \quad \Rightarrow \quad x = 600$$

Evaluate $A$ at the critical point and endpoints:

$$A(0) = 0, \quad A(1200) = 0, \quad A(600) = 720000.$$

Hence the maximum area occurs when $x = 600$. Then

$$y = 2400 - 2(600) = 1200.$$

The field has maximum area $720000 \text{ m}^2$ when its dimensions are $600 \text{ m} \times 1200 \text{ m}$.

### Example 2

A cylindrical can is to be made to hold $1 \text{ m}^3$ of oil. Find the dimensions of the can that will minimize the cost of the metal to manufacture the can.

Let $r$ be the radius and $h$ the height of the cylindrical can.

The volume is fixed at

$$V = \pi r^2 h = 1,$$

and the surface area (cost of metal) is

$$A = 2\pi r^2 + 2\pi r h.$$

Our aim is to minimise $A$.

From the volume constraint,

$$h = \frac{1}{\pi r^2}, \quad r > 0$$

Substitute into the surface area,

$$A(r) = 2\pi r^2 + \frac{2}{r}, \quad r > 0.$$

Differentiate,

$$A'(r) = 4\pi r - \frac{2}{r^2}$$

Setting $A'(r) = 0$,

$$4\pi r^3 = 2 \quad \Rightarrow \quad r = \left(\frac{1}{2\pi}\right)^{1/3}$$

The second derivative is,

$$A''(r) = 4\pi + \frac{4}{r^3}$$

$A''(r) > 0$ for all $r > 0$, so this critical point gives a minimum.

Substituting back,

$$h = \frac{1}{\pi r^2}$$

The surface area is minimised when

$$r = \left(\frac{1}{2\pi}\right)^{1/3}, \quad h = \left(\frac{4}{\pi}\right)^{1/3}$$

### Example 3

Find the point on $y^2 = 2x$ that is closest to the point $(1, 4)$.

We want the point $(x, y)$ on the curve $y^2 = 2x$ that is closest to $(1, 4)$.

The distance is

$$D^2 = (x - 1)^2 + (y - 4)^2$$

so it is equivalent to minimise

$$D^2 = \left(\frac{y^2}{2} - 1\right)^2 + (y - 4)^2$$

Using the constraint $y^2 = 2x$ we write $x = \frac{y^2}{2}$. Hence

$$D^2 = \frac{y^4}{4} - y^2 + 1 + y^2 - 8y + 16 = \frac{y^4}{4} - 8y + 17$$

Differentiate,

$$\frac{d}{dy}(D^2(y)) = y^3 - 8$$

Setting this equal to zero,

$$y^3 - 8 = 0 \quad \Rightarrow \quad y = 2$$

The second derivative is

$$\frac{d^2}{dy^2}(D^2) = 3y^2$$

so $\frac{d^2}{dy^2}(D^2)(2) = 12 > 0$, and $y = 2$ gives a minimum.

Finally,

The closest point on $y^2 = 2x$ is $(2, 2)$, since $x = \frac{4}{2} = 2$.

### Example 4

A man launches his boat from point A on a bank of a straight river, 3 km wide, and wants to reach point B, 8 km downstream on the opposite bank, as quick as possible. If he can row 6 km/h and run 8 km/h, where should he land?

Let $C$ be the point on the opposite bank directly opposite $A$, and let $D$ be the point where the man lands.

Let

$$x = CD \text{ (km)},$$

so that $DB = 8 - x$ with $0 \leq x \leq 8$.

The man rows from $A$ to $D$. Since the river is 3 km wide,

$$AD = \sqrt{9 + x^2}$$

Rowing at 6 km/h, the rowing time is:

$$\frac{\sqrt{9 + x^2}}{6}$$

He then runs from $D$ to $B$, a distance $8 - x$ km, at 8 km/h, so the running time is:

$$\frac{8 - x}{8}$$

Hence the total time taken is

$$T(x) = \frac{\sqrt{9 + x^2}}{6} + \frac{8 - x}{8}, \quad 0 \leq x \leq 8$$

Our aim is to minimise $T$.

Differentiate,

$$T'(x) = \frac{x}{6\sqrt{9 + x^2}} - \frac{1}{8}$$

Setting $T'(x) = 0$,

$$\frac{x}{6\sqrt{9 + x^2}} = \frac{1}{8}$$

Squaring,

$$16x^2 = 9(9 + x^2) = 81 + 9x^2$$

$$7x^2 = 81 \quad \Rightarrow \quad x = \frac{9}{\sqrt{7}}$$

Evaluate $T$ at the critical point and endpoints:

$$T(0) = \frac{3}{6} + \frac{8}{8} = \frac{3}{2}$$

$$T(8) = \frac{\sqrt{73}}{6}$$

$$T\left(\frac{9}{\sqrt{7}}\right) = 1 + \frac{\sqrt{7}}{8}$$

and since $8 > \frac{9}{\sqrt{7}}$, the critical point is in the domain.

Thus the minimum time occurs when $x = \frac{9}{\sqrt{7}}$.

The man should land at a point $D$ such that

$$CD = \frac{9}{\sqrt{7}} \text{ km},$$

that is, $DB = 8 - \frac{9}{\sqrt{7}}$ km along the opposite bank.

---

## Section 4.1: Definite Integral

### Definition

Let $f(x)$ be a function defined on the interval $[a, b]$. Subdivide the interval into $n$ equal subintervals, each of width

$$\Delta x = \frac{b - a}{n}, \qquad x_k = a + k\Delta x, \quad k = 0, \ldots, n.$$

- The **lower sum** $L_n$ is formed by taking, in each subinterval, the **minimum value** of $f(x)$:

$$L_n = \sum_{k=1}^{n} \left( \min_{x \in [x_{k-1}, x_k]} f(x) \right) \Delta x,$$

- The **upper sum** $U_n$ is formed by taking, in each subinterval, the **maximum value** of $f(x)$:

$$U_n = \sum_{k=1}^{n} \left( \max_{x \in [x_{k-1}, x_k]} f(x) \right) \Delta x.$$

Since every minimum is at most every maximum,

$$L_n \leq U_n \quad \text{for all n.}$$

If, as $n \to \infty$, the lower and upper sums converge to the same limit,

$$\lim_{n \to \infty} L_n = \lim_{n \to \infty} U_n = A, \quad \text{or} \quad \lim_{n \to \infty} (U_n - L_n) = 0$$

then we say $f$ is **integrable** on $[a, b]$, and define the **definite integral** of $f$ to be

$$\int_a^b f(x)\, dx = \lim_{n \to \infty} L_n = \lim_{n \to \infty} U_n.$$

### Explaining the Notation

$$\int_a^b f(x)\, dx$$

- $\int$ is the integral sign.
- $a$ is the **lower limit** of the integral.
- $b$ is the **upper limit** of the integral.
- The function $f(x)$ is called the **integrand**.
- $x$ is a **dummy variable**, it is the variable of the integration. That is, the following definite integrals are equal,

$$\int_a^b f(x)\, dx = \int_a^b f(t)\, dt = \int_a^b f(s)\, ds.$$

- $dx$ is commonly known as the **infinitesimal subinterval width**.

### Theorem

If a function $f$ is **continuous** over the interval $[a, b]$, or if $f$ has **at most finitely many jump or removable discontinuity** there, then $f$ is integrable there and the definite integral

$$\int_a^b f(x)\, dx$$

exists.

### Properties of Definite Integral

- Let $f(x)$ be a function integrable over $[a, b]$.

$$\text{Order of integration}: \quad \int_a^b f(x)\, dx = -\int_b^a f(x)\, dx.$$

- Let $f(x)$ be a function integrable over $[a, b]$.

$$\text{Zero width interval}: \quad \int_a^a f(x)\, dx = 0.$$

- Let $f(x)$ be a function integrable over $[a, b]$.

$$\text{Scalar multiple}: \quad \int_a^b kf(x)\, dx = k\int_a^b f(x)\, dx$$

- Let $f(x)$ and $g(x)$ be a function integrable over $[a, b]$.

$$\text{Sum and difference}: \quad \int_a^b (f(x) \pm g(x))\, dx = \int_a^b f(x)\, dx \pm \int_a^b g(x)\, dx$$

- Let $f(x)$ be a function integrable over $[a, b]$.

$$\text{Max-min inequality}: \quad \min_{x \in [a,b]} f(x)(b - a) \leq \int_a^b f(x)\, dx \leq \max_{x \in [a,b]} f(x)(b - a)$$

- Let $f(x)$ and $g(x)$ be a function integrable over $[a, b]$ such that $f(x) \leq g(x)$ on $[a, b]$.

$$\text{Domination}: \quad \int_a^b f(x)\, dx \leq \int_a^b g(x)\, dx$$

  In particular, if $f(x) \geq 0$ on $[a, b]$, then $\int_a^b f(x)\, dx \geq 0$.

- Let $f(x)$ be a function integrable over the relevant intervals.

$$\text{Subinterval}: \quad \int_a^b f(x)\, dx = \int_a^c f(x)\, dx + \int_c^b f(x)\, dx.$$

### Question

In the subinterval property, do we need $c \in [a, b]$? Will the property still hold if, for example, $a < b < c$, or when $c < a < b$?

---

## Section 4.2: Fundamental Theorem of Calculus and Indefinite Integral

### Theorem [Fundamental Theorem of Calculus I]

If $f$ is **continuous** on $[a, b]$, then

$$F(x) = \int_a^x f(t)\, dt$$

is **continuous** on $[a, b]$ and **differentiable** on $(a, b)$ with derivative $f(x)$,

$$F'(x) = \frac{d}{dx} \int_a^x f(t)\, dt = f(x).$$

### Definition (Antiderivative)

A function $F$ is an **antiderivative** of $f$ on an interval $I$ if

$$F'(x) = f(x)$$

for all $x \in I$.

- Antiderivatives are not unique. For example,

$$\frac{d}{dx} x^2 = \frac{d}{dx} (x^2 + 3) = 2x.$$

  That is, both $x^2 + 3$ and $x^2$ are antiderivatives of $2x$.

- Any two antiderivatives differ by a constant. That is, if $F$ and $G$ are antiderivatives of $f$ on $I$, then

$$G(x) = F(x) + C.$$

- By the Fundamental Theorem of Calculus I,

$$F(x) = \int_a^x f(t)\, dt$$

  is an antiderivative of $f(x)$.

### Theorem [Fundamental Theorem of Calculus II]

If $f$ is **continuous** over $[a, b]$ and $F$ is **any antiderivative** of $f$ on $[a, b]$, then

$$\int_a^b f(x)\, dx = F(b) - F(a).$$

We will use the notation

$$[F(x)]_a^b := F(b) - F(a).$$

### Definition (Indefinite Integral)

The collection of all antiderivatives of $f$ is called the **indefinite integral** of $f$, and is denoted by

$$\int f(x)\, dx.$$

For any antiderivative $F$ of $f$, let

$$F(x) + C$$

denote the set of all antiderivatives of $f$.

Thus we may denote the set of all antiderivatives of $f$ by

$$\int f(x)\, dx = F(x) + C$$

for some antiderivative $F$ of $f$.

- The expression $F(x) + C$ is a symbol representing the entire family of antiderivatives of $f$; here $C$ is not a particular number, but a placeholder indicating that any constant may be chosen. One may think of $C$ as a variable that can take any real value. Each choice of $C \in \mathbb{R}$ gives a different member of the antiderivative family.

- The differential operator $\frac{d}{dx}$ takes a function and returns a single function.

- The indefinite integral operator $\int dx$ takes a function and returns a set of functions (the set of all antiderivatives on an interval).

- The definite integral $\int_a^b dx$ takes a function and returns a real number.

$$f(x) \xrightarrow{\frac{d}{dx}} f'(x)$$

$$\{F(x) + C \mid C \in \mathbb{R}\} \xleftarrow{\int dx} f(x)$$

$$\int_a^b f(x)\, dx = F(b) - F(a) \xleftarrow{\int_a^b dx} f(x)$$

- If an initial condition is given, then we solve for the constant $C$.

---

## Section 4.3: Area Under and Between Graphs

### Area Under Graph: Algorithm

Suppose $f$ is **continuous** on $[a, b]$.

1. Find the **zeros** of $f$:

$$\{x_1, x_2, \ldots, x_n\}, \quad f(x_i) = 0 \quad \forall i = 1, \ldots, n.$$

2. Determine the **sign** of $f$ on each interval:

$$f(x) \geq 0 \quad \text{or} \quad f(x) \leq 0 \quad \text{on } [x_i, x_{i+1}].$$

3. On the interval $[x_i, x_{i+1}]$, for $i = 1, \ldots, n-1$, define

$$f_i(x) = \begin{cases} f(x), & \text{if } f(x) \geq 0, \\ -f(x), & \text{if } f(x) \leq 0. \end{cases}$$

4. The **area** is the sum

$$\text{Area} = \int_a^b |f(x)|\, dx = \sum_{i=1}^{n-1} \int_{x_i}^{x_{i+1}} f_i(x)\, dx.$$

> 📝 Note: It is important that $f(x)$ is continuous on $[a, b]$.

---

### Area Between Graphs: Algorithm

Suppose $f$ and $g$ are **continuous** on $[a, b]$.

1. Find the **points of intersection** between $f(x)$ and $g(x)$ in $[a, b]$:

$$\{x_0 = a, x_1, \ldots, x_n = b\}, \quad f(x_i) = g(x_i), \quad \forall i = 0, \ldots, n.$$

2. Determine the sign of $f(x) - g(x)$ on each interval $[x_{i-1}, x_i]$.

3. For $i = 1, \ldots, n$, let

$$A_i = \begin{cases} \displaystyle\int_{x_{i-1}}^{x_i} (f(x) - g(x))\, dx, & \text{if } f(x) \geq g(x), \\[10pt] \displaystyle\int_{x_{i-1}}^{x_i} (g(x) - f(x))\, dx, & \text{if } g(x) \geq f(x). \end{cases}$$

4. The area between the graphs of $f(x)$ and $g(x)$ is

$$A = \int_a^b |f(x) - g(x)|\, dx = \sum_{i=1}^{n} A_i.$$

> 📝 Note: The continuity of $f$ and $g$ is necessary for the algorithm.

---

## Section 4.4: Integration by Substitution

### Integration by Substitution: Indefinite Integral

#### Theorem

If the integral is of the form

$$\int f(u(x))\, u'(x)\, dx$$

for some $u(x)$, then for **any** antiderivative $F$ of $f$,

$$\int f(u(x))\, u'(x)\, dx = F(u(x)) + C.$$

#### The $u$-substitution Technique

Write $u'(x) = \frac{du}{dx}$; treat it as a fraction so $\frac{du}{dx}\, dx = du$. Then:

$$\int f(u(x))\, \frac{du}{dx}\, dx = \int f(u)\, du = F(u) + C.$$

#### Conditions

- $u$ must be **differentiable** (on some interval).
- $f$ must have an easily identified **antiderivative** and be **continuous** on the range of $u$.

#### How to Apply

1. **Identify** $u(x)$ by checking that the integrand contains the term $u'(x)$.
2. **Identify** $f$ such that the integrand is $f(u(x))\, u'(x)$.
3. **Find** an antiderivative $F$ of $f$.

> 💡 **Memory trick:** Look for a function and its derivative sitting together in the integrand. The "inside" function is $u$, its derivative is the leftover factor.

---

### Integration by Substitution: Definite Integral

#### Theorem

If $u'$ is continuous on $[a, b]$ and $f$ is continuous on the range of $u$, then

$$\int_a^b f(u(x))\, u'(x)\, dx = \int_{u(a)}^{u(b)} f(u)\, du.$$

> ⚠️ **Warning:** When switching to $du$, the **limits change** from $x$-values to $u$-values! Evaluate $u(a)$ and $u(b)$ to get the new limits.

---

### Second Substitution

Let $x = x(t)$ be a differentiable function of $t$. Then:

$$\int f(x)\, dx = \int f(x(t)) \cdot \frac{dx}{dt}\, dt.$$

> 📝 Note: This is the "reverse" direction — substituting $x$ in terms of a new variable $t$. Useful when the integrand has a form that simplifies under a specific substitution.

---

### Trigonometric Substitution

For integrands involving square roots of quadratic expressions, use these substitutions:

| Expression | Substitution | Identity Used | Simplification |
|-----------|-------------|---------------|----------------|
| $\sqrt{a^2 + x^2}$ | $x = a\tan\theta$ | $1 + \tan^2\theta = \sec^2\theta$ | $= a\sec\theta$ |
| $\sqrt{a^2 - x^2}$ | $x = a\sin\theta$ | $1 - \sin^2\theta = \cos^2\theta$ | $= a\cos\theta$ |
| $\sqrt{x^2 - a^2}$ | $x = a\sec\theta$ | $\sec^2\theta - 1 = \tan^2\theta$ | $= a\tan\theta$ |

#### Right Triangle Diagrams

**Case 1:** $\sqrt{a^2 + x^2}$ with $x = a\tan\theta$

```
        /|
       / |
  √(a²+x²) /  | x
     /   |
    /θ   |
   /_____|
      a
```

**Case 2:** $\sqrt{a^2 - x^2}$ with $x = a\sin\theta$

```
        /|
       / |
    a /  | x
     /   |
    /θ   |
   /_____|
    √(a²-x²)
```

**Case 3:** $\sqrt{x^2 - a^2}$ with $x = a\sec\theta$

```
        /|
       / |
    x /  | √(x²-a²)
     /   |
    /θ   |
   /_____|
      a
```

> 💡 **Memory trick:** Match the square root pattern to the triangle:
> - $a^2 + x^2$: $a$ and $x$ are legs → hypotenuse = $\sqrt{a^2+x^2}$ → $x = a\tan\theta$
> - $a^2 - x^2$: $a$ is hypotenuse, $x$ is leg → other leg = $\sqrt{a^2-x^2}$ → $x = a\sin\theta$
> - $x^2 - a^2$: $x$ is hypotenuse, $a$ is leg → other leg = $\sqrt{x^2-a^2}$ → $x = a\sec\theta$

---

### Quick Reference

| Technique | When to Use | Key Step |
|-----------|-------------|----------|
| $u$-sub (basic) | See $f(u(x)) \cdot u'(x)$ in integrand | Let $u = $ inside function, $du = u'(x)\,dx$ |
| $u$-sub (definite) | Same, but with limits | Change limits: $a \to u(a)$, $b \to u(b)$ |
| Second substitution | Need to introduce new variable | $x = x(t)$, $dx = \frac{dx}{dt}\,dt$ |
| Trig sub: $\sqrt{a^2+x^2}$ | Sum under root | $x = a\tan\theta$ |
| Trig sub: $\sqrt{a^2-x^2}$ | Difference (a first) under root | $x = a\sin\theta$ |
| Trig sub: $\sqrt{x^2-a^2}$ | Difference (x first) under root | $x = a\sec\theta$ |

---

## Section 4.5: The Natural Logarithm and Exponential Function

> This section constructs $\ln x$ and $e^x$ rigorously from integration, avoiding circular definitions.

### Motivation

The natural logarithm $\ln x$ and the exponential function $e^x$ are usually introduced as inverse functions. With the **Fundamental Theorem of Calculus** and **Integration by Substitution**, we can now construct these functions from first principles using a definite integral.

This approach:
- Defines $\ln x$ as a definite integral (no circular reasoning)
- Derives the constant $e$ intrinsically
- Rigorously establishes that $e^x$ is the inverse of $\ln x$

---

### Definition of the Natural Logarithm

#### Definition

For $x > 0$, the **natural logarithm** is defined by:

$$\ln(x) = \int_1^x \frac{1}{t} \, dt$$

Since $\frac{1}{t}$ is continuous on $(0, \infty)$, the integral exists for all $x > 0$, so $\ln x$ is well-defined.

#### Geometric Interpretation

$\ln(x)$ represents the **signed area** under the curve $y = \frac{1}{t}$ from $t = 1$ to $t = x$:

```
    y
    │
  1 ┤─╲
    │   ╲       y = 1/t
    │    ╲╲
    │     ╲╲╲╲╲╲╲╲
  0 ┤──────┼────────── t
    0      1    x
           ├────┤
           ln(x) = shaded area
```

- If $x > 1$: area is **positive** (integrating rightward from 1)
- If $0 < x < 1$: area is **negative** (integrating leftward from 1)

#### Special Value

By the zero-width interval property:

$$\ln(1) = \int_1^1 \frac{1}{t} \, dt = 0$$

---

### Derivative of the Natural Logarithm

By the **Fundamental Theorem of Calculus** (FTC I):

$$\frac{d}{dx} \ln(x) = \frac{d}{dx} \int_1^x \frac{1}{t} \, dt = \frac{1}{x}, \quad x > 0$$

#### Extension to $|x|$

Consider $u(x) = |x|$. For all $x \neq 0$, $u(x)$ is differentiable and:

$$\frac{d}{dx} |x| = \frac{x}{|x|}$$

Applying the chain rule:

$$\frac{d}{dx} \ln|x| = \frac{d}{du} \ln(u) \cdot \frac{du}{dx} = \frac{1}{u} \cdot \frac{x}{|x|} = \frac{1}{|x|} \cdot \frac{x}{|x|} = \frac{1}{x}$$

Hence:

$$\boxed{\int \frac{1}{x} \, dx = \ln|x| + C}$$

> 📝 **Note:** This is why $\int \frac{1}{x}\,dx$ uses $\ln|x|$ (with absolute value), not just $\ln x$ — it extends the antiderivative to $x < 0$.

---

### The Logarithmic Power Rule

#### Theorem (Power Rule for the Natural Logarithm)

For any real number $k$ and $x > 0$:

$$\ln(x^k) = k \ln(x)$$

#### Proof

Starting from the definition:

$$\ln(x^k) = \int_1^{x^k} \frac{1}{t} \, dt$$

Let $t = u^k$. Then $dt = ku^{k-1} \, du$.

When $t = 1$: $u = 1$. When $t = x^k$: $u = x$. Thus:

$$\ln(x^k) = \int_1^x \frac{1}{u^k} \cdot ku^{k-1} \, du = k \int_1^x \frac{1}{u} \, du = k \ln(x)$$

> ⚠️ **Warning:** This definition-based proof does **not** immediately imply the usual logarithmic laws (product rule, quotient rule). Those require separate derivation.

---

### Definition of the Number $e$

#### Definition

The **natural number** $e$ is defined to be the unique number satisfying:

$$\ln(e) = \int_1^e \frac{1}{t} \, dt = 1$$

Thus, $e$ is the number for which the area under $y = \frac{1}{t}$ from $t = 1$ to $t = e$ is **exactly one square unit**.

```
    y
    │
  1 ┤─╲
    │  ╲╲╲  area = 1
    │   ╲╲╲╲╲
  0 ┤────┼──┼──── t
    0    1  e≈2.718
```

---

### The Exponential Function as the Inverse of $\ln(x)$

Since $\frac{1}{t}$ is positive and continuous on $(0, \infty)$, the function:

$$\ln(x) = \int_1^x \frac{1}{t} \, dt$$

is **continuous and strictly increasing** on $(0, \infty)$. Its range is $(-\infty, \infty)$, so it is **injective** and possesses an inverse function, denoted $\ln^{-1}(x)$.

#### Establishing $e^x = \ln^{-1}(x)$

Using the power rule for the natural logarithm, for any real $x$:

$$\ln(e^x) = x \ln(e) = x$$

since $\ln(e) = 1$ by definition. Applying the inverse of $\ln$ to both sides gives:

$$e^x = \ln^{-1}(x)$$

Therefore, the exponential function $e^x$ is the **inverse** of the natural logarithm $\ln x$. By **uniqueness of inverse functions**, this also shows:

$$\ln x = \log_e x$$

---

### Quick Reference

| Result | Formula | Source |
|--------|---------|--------|
| Definition of $\ln x$ | $\ln(x) = \int_1^x \frac{1}{t}\,dt$ | Definite integral construction |
| Derivative of $\ln x$ | $\frac{d}{dx}\ln(x) = \frac{1}{x}$ | FTC I applied to definition |
| Derivative of $\ln\|x\|$ | $\frac{d}{dx}\ln\|x\| = \frac{1}{x}$ | Chain rule extension |
| Antiderivative of $\frac{1}{x}$ | $\int \frac{1}{x}\,dx = \ln\|x\| + C$ | From derivative of $\ln\|x\|$ |
| Logarithmic power rule | $\ln(x^k) = k\ln(x)$ | $u$-substitution proof |
| Definition of $e$ | $\ln(e) = 1$ | Area under $1/t$ from 1 to $e$ |
| Inverse relationship | $e^x = \ln^{-1}(x)$ | $\ln(e^x) = x$ |

> 💡 **Memory trick:** "$e$ is the number whose $\ln$ is 1" — it's defined by the integral, not the other way around. This avoids circular reasoning.

---

## Section 4.6: Integration by Parts

### Motivation: Reversing the Product Rule

Recall the **product rule** for differentiation:

$$\frac{d}{dx}\big[u(x)\,v(x)\big] = u'(x)\,v(x) + u(x)\,v'(x)$$

Integrate both sides with respect to $x$:

$$u(x)\,v(x) = \int u'(x)\,v(x)\,dx + \int u(x)\,v'(x)\,dx$$

Rearranging to isolate the second integral:

$$\int u(x)\,v'(x)\,dx = u(x)\,v(x) - \int v(x)\,u'(x)\,dx$$

This is **Integration by Parts (IBP)** — it trades one integral for another (hopefully simpler) one.

### Integration by Parts: Indefinite Integral

Let $u = u(x)$ and $v = v(x)$ be functions that are differentiable on an interval $I$, and suppose that their derivatives are continuous on $I$. Then, for all $x \in I$,

$$\int u(x)\,v'(x)\,dx = u(x)\,v(x) - \int v(x)\,u'(x)\,dx + C$$

where $C$ is a constant of integration.

### Integration by Parts: Definite Integral

Let $u = u(x)$ and $v = v(x)$ be functions that are differentiable on an interval containing $[a, b]$, and suppose that their derivatives are continuous on $[a, b]$. Then

$$\int_a^b u(x)\,v'(x)\,dx = \Big[u(x)\,v(x)\Big]_a^b - \int_a^b v(x)\,u'(x)\,dx$$

### Choosing $u$ and $v'$: The LIATE Rule

The key decision in IBP is **which factor to differentiate ($u$) and which to integrate ($v'$)**. The **LIATE** mnemonic gives the priority order — choose $u$ from the highest-priority type:

| Priority | Type | Examples | Why it should be $u$ |
|----------|------|---------|---------------------|
| 1 | **L**ogarithmic | $\ln(x)$, $\log(x)$ | Differentiates to algebraic ($1/x$); hard to integrate |
| 2 | **I**nverse trigonometric | $\arctan(x)$, $\arcsin(x)$ | Differentiates to algebraic; hard to integrate |
| 3 | **A**lgebraic | $x$, $x^2$, $x^n$ | Differentiating reduces degree |
| 4 | **T**rigonometric | $\sin(x)$, $\cos(x)$ | Differentiation doesn't simplify |
| 5 | **E**xponential | $e^x$, $2^x$ | Differentiation doesn't change it |

> 💡 **Memory trick:** **L**ate **I**n **A**fternoon, **T**ea and **E**ggs — or just remember: **Log and Inverse trig always go first as $u$** because they simplify when differentiated but are painful to integrate.

### Quick Reference

| Formula | Version |
|---------|---------|
| Indefinite | $\int u\,v'\,dx = u\,v - \int v\,u'\,dx + C$ |
| Definite | $\int_a^b u\,v'\,dx = [u\,v]_a^b - \int_a^b v\,u'\,dx$ |
| Shorthand | $\int u\,dv = u\,v - \int v\,du$ |

> ⚠️ **Watch out:** IBP sign errors are the #1 mistake. When $v$ carries a negative sign (e.g., $v' = \sin x \Rightarrow v = -\cos x$), the formula's subtraction creates a double negative. Write every step explicitly — don't combine signs in your head.

---

## Section 4.7: Integration of Rational Functions by Partial Fractions

### What is a Rational Function?

A **rational function** is a ratio of two polynomials:

$$f(x) = \frac{p(x)}{q(x)}$$

where $p(x)$ and $q(x)$ are polynomials.

> ⚠️ **PF applicability:** Partial fractions **only** work on rational functions — both numerator and denominator must be polynomials. If you see $\sqrt{\phantom{x}}$, $\sin$, $e^x$ in the denominator, it is **not** a rational function and PF cannot be used.

### Step 1: Proper or Improper?

Before decomposing, check the degrees:

| Condition | Type | Action |
|-----------|------|--------|
| $\deg(p) < \deg(q)$ | **Proper** | Proceed to partial fractions |
| $\deg(p) \geq \deg(q)$ | **Improper** | Perform polynomial long division first |

If improper, write as:

$$f(x) = \frac{p_1(x)}{q_1(x)} + r(x)$$

where $\deg(p_1) < \deg(q_1)$, then decompose the proper fraction $p_1/q_1$.

### Step 2: Factor the Denominator

Factor $q(x)$ completely into **linear** and **irreducible quadratic** factors:

$$q(x) = (x - d_1)^{r_1} \cdots (x - d_k)^{r_k} (a_1 x^2 + b_1 x + c_1)^{s_1} \cdots (a_l x^2 + b_l x + c_l)^{s_l}$$

### Step 3: Set Up the Decomposition

#### Case 1: Distinct Linear Factors

$$\frac{1}{(x - a)(x - b)} = \frac{A}{x - a} + \frac{B}{x - b}$$

Each linear factor gets a **constant** numerator.

#### Case 2: Repeated Linear Factors

$$\frac{1}{(x - d)^r} = \frac{A_1}{(x - d)} + \frac{A_2}{(x - d)^2} + \cdots + \frac{A_r}{(x - d)^r}$$

Power $r$ → $r$ terms, ascending from power 1 to $r$.

> 💡 **Memory trick:** Think of it as floors in a building — $(x-1)^3$ is a 3-story building, each floor gets one term with its own constant.

**Why all powers are needed:** With only $A/(x-d)$, the numerator after cross-multiplication is forced to be $A(x-d)^{r-1}$, which cannot represent an arbitrary polynomial of degree $< r$. Each additional power provides an independent degree of freedom.

#### Case 3: Irreducible Quadratic Factors

$$\frac{1}{(a_j x^2 + b_j x + c_j)^{s_j}} = \frac{B_1 x + C_1}{a_j x^2 + b_j x + c_j} + \frac{B_2 x + C_2}{(a_j x^2 + b_j x + c_j)^2} + \cdots + \frac{B_{s_j} x + C_{s_j}}{(a_j x^2 + b_j x + c_j)^{s_j}}$$

Each quadratic factor gets a **linear** numerator ($Bx + C$), because dividing by a degree-2 polynomial leaves a remainder of degree $\leq 1$.

### Step 4: Solve for the Constants

Set up the equation by cross-multiplying, then use:

- **Strategic substitution:** Plug in roots of denominator factors to eliminate terms
- **Coefficient comparison:** Expand and match coefficients of like powers of $x$

**Example:**

$$\frac{5}{(x-1)(x+2)} = \frac{A}{x-1} + \frac{B}{x+2}$$

Cross-multiply: $5 = A(x+2) + B(x-1)$

- Set $x = 1$: $5 = 3A \Rightarrow A = \frac{5}{3}$
- Set $x = -2$: $5 = -3B \Rightarrow B = -\frac{5}{3}$

### Connection: IBP → Partial Fractions

When applying integration by parts to integrals involving **inverse trigonometric functions**, the derivative produces a rational function:

$$\frac{d}{dx}\tan^{-1}(x) = \frac{1}{1 + x^2}$$

For example, after IBP on $\int x \tan^{-1}(x)\,dx$:

$$= \frac{x^2}{2}\tan^{-1}(x) - \int \frac{x^2}{2(1+x^2)}\,dx$$

The remaining integral is a **rational function** requiring algebraic simplification or partial fraction decomposition.

### Quick Reference

| Denominator Factor | Numerator Form | # Terms |
|-------------------|----------------|---------|
| $(x - d)$ | $A$ | 1 |
| $(x - d)^r$ | $A_1, A_2, \ldots, A_r$ | $r$ |
| $(ax^2 + bx + c)$ | $Bx + C$ | 1 |
| $(ax^2 + bx + c)^s$ | $B_1x + C_1, \ldots, B_s x + C_s$ | $s$ |

> 📝 **Note:** Always check: (1) Is it a rational function? (2) Is it proper? (3) Factor denominator. (4) Set up form. (5) Solve constants.

---

## Section 4.8: Improper Integrals

### What Makes an Integral "Improper"?

A definite integral $\int_a^b f(x)\,dx$ is **improper** if:

1. **Infinite limit:** $a = -\infty$ or $b = \infty$ (or both)
2. **Discontinuity:** $f(x)$ "blows up" (denominator = 0) at some point in $[a, b]$

> 📝 **Key distinction:** A function approaching 0 does NOT mean its area is finite. $f(x) = 1/x \to 0$ as $x \to \infty$, but $\int_1^\infty \frac{1}{x}\,dx = \infty$ (divergent).

### Convergent vs Divergent

| Term | Meaning | Example |
|------|---------|---------|
| **Convergent** | Integral equals a **finite number** | $\int_1^\infty \frac{1}{x^2}\,dx = 1$ |
| **Divergent** | Integral is $\infty$, $-\infty$, or DNE | $\int_1^\infty \frac{1}{x}\,dx = \infty$ |

> 💡 **Money analogy:** Imagine receiving $\frac{1}{n}$ dollars on day $n$ — total grows forever (divergent, harmonic series). But receiving $\frac{1}{n^2}$ dollars — total converges to $\frac{\pi^2}{6}$ because payments shrink fast enough.

### The p-Test

For $\int_1^\infty \frac{1}{x^p}\,dx$:

| Condition | Result | Why |
|-----------|--------|-----|
| $p > 1$ | **Convergent** | Function decreases fast enough |
| $p \leq 1$ | **Divergent** | Function decreases too slowly |

$$\int_1^\infty \frac{1}{x^p}\,dx = \begin{cases} \frac{1}{p-1} & \text{if } p > 1 \\\\ \infty & \text{if } p \leq 1 \end{cases}$$

> ⚠️ **Warning:** Convergence is determined by **computation** (limits), not by "feeling" or intuition. The p-test is a **summary** of computed results.

### Procedure: Evaluating Improper Integrals

**Step 0 — Count the "problems":**

| # Problems | Situation | Action |
|-----------|-----------|--------|
| 0 | No $\infty$ and no blowup in $[a,b]$ | Normal integral (not improper) |
| 1 | One $\infty$ OR one blowup at endpoint | Direct: replace with variable, take limit |
| 2 | Two $\infty$'s OR blowup inside interval | **Split** into two integrals at the problem point |

**How to detect "problems":**
- $\pm\infty$ in the limits → that's a problem
- Check denominator: if $\text{denom} = 0$ for any $x \in [a, b]$ → that's a blowup (discontinuity)

**Step 1 — Replace the "bad point" with a variable:**

For $\int_1^\infty f(x)\,dx$: replace $\infty$ with $b$, compute $\int_1^b f(x)\,dx$, then take $\lim_{b \to \infty}$

For $\int_0^1 \frac{1}{\sqrt{x}}\,dx$ (blowup at $x=0$): replace $0$ with $a$, compute $\int_a^1 \frac{1}{\sqrt{x}}\,dx$, then take $\lim_{a \to 0^+}$

**Step 2 — Find antiderivative**

**Step 3 — Evaluate the limit**

If the limit is a finite number → **convergent**. Otherwise → **divergent**.

### When to Split (2 Problems)

If there is a discontinuity **inside** $[a, b]$ (not just at an endpoint), you **must split** the integral at that point.

**Example:** $\int_0^2 \frac{1}{x-1}\,dx$

The function blows up at $x = 1$, which is inside $[0, 2]$.

```
        y
        │          ╱
        │         ╱
        │        ╱
────────┼───┼────────── x
        0   1    2
        │ ╱
        │╱        ← blows up at x = 1
```

**Split:** $\int_0^2 \frac{1}{x-1}\,dx = \int_0^1 \frac{1}{x-1}\,dx + \int_1^2 \frac{1}{x-1}\,dx$

> ⚠️ **Both halves must converge** for the whole integral to converge. If either half diverges, the entire integral is **divergent**.

> 📝 **Why split at discontinuity?** You can't integrate "through" a point where the function doesn't exist. The area calculation breaks at the blowup — you must handle each side separately with its own limit.

### Key Antiderivatives for Improper Integrals

| Integrand | Antiderivative | Notes |
|-----------|---------------|-------|
| $x^n$ ($n \neq -1$) | $\frac{x^{n+1}}{n+1}$ | Power rule — watch coefficient! |
| $\frac{1}{x}$ | $\ln|x|$ | Special case of power rule |
| $\frac{1}{1+x^2}$ | $\arctan(x)$ | Memorize: reverse of $\frac{d}{dx}\arctan(x) = \frac{1}{1+x^2}$ |
| $\frac{1}{\sqrt{x}} = x^{-1/2}$ | $2\sqrt{x} = 2x^{1/2}$ | Divide by $\frac{1}{2}$ = multiply by 2! |

> ⚠️ **Common coefficient error:** $\int x^{-1/2}\,dx = \frac{x^{1/2}}{1/2} = 2x^{1/2}$, **NOT** $\frac{1}{2}x^{1/2}$. Remember: dividing by a fraction means multiplying by its reciprocal.

### Worked Example

**Evaluate** $\int_1^\infty \frac{1}{x^2}\,dx$

**Step 0:** One problem ($\infty$ in upper limit) → direct limit

**Step 1:** Replace $\infty$ with $b$:

$$\lim_{b \to \infty} \int_1^b \frac{1}{x^2}\,dx$$

**Step 2:** Antiderivative of $x^{-2}$:

$$\frac{x^{-1}}{-1} = -\frac{1}{x}$$

**Step 3:** Evaluate:

$$\lim_{b \to \infty} \left[-\frac{1}{x}\right]_1^b = \lim_{b \to \infty} \left(-\frac{1}{b} + \frac{1}{1}\right) = 0 + 1 = 1$$

**Result:** Convergent, equals **1**.

### Quick Reference

| Scenario | # Problems | Action |
|----------|-----------|--------|
| No $\infty$, no blowup | 0 | Normal integral |
| $\infty$ at one end | 1 | Replace with $b$, take limit |
| Blowup at endpoint | 1 | Replace with $a$ or $b$, take limit |
| $-\infty$ to $\infty$ | 2 | Split at any point (e.g., 0), two limits |
| Blowup inside $[a,b]$ | 2 | Split at blowup point, two limits |

> 📝 **Checklist:** (1) Count problems (0, 1, or 2). (2) If 2, split. (3) Replace bad point with variable. (4) Antiderivative. (5) Limit. (6) Both halves must converge.

---

## Section 4.9: Volume using Cross-Sections

### Method of Slicing

The **volume of a solid** of integrable cross-sectional area $A(x)$ from $x = a$ to $x = b$ is the integral of $A$ from $a$ to $b$:

$$V = \int_a^b A(x)\,dx$$

#### Algorithm

1. Sketch the solid and a typical cross-section.
2. Find a formula for $A(x)$, the area of a typical cross-section.
3. Find the limits of integration.
4. Integrate $A(x)$ to find the volume.

### Solid of Revolution: The Disk Method

When a region is rotated about an axis, the cross-section perpendicular to that axis is a **circle** (disk). The area of a circle with radius $r$ is $\pi r^2$.

```
        y
        │    f(x)
        │   ╱────╲
        │  ╱      ╲         Rotate about x-axis
        │ ╱        ╲        → each slice is a disk
────────┼╱──────────╲───── x
        a            b

  Cross-section at x:
     ┌─────────┐
     │  ○ r=f(x)│    Area = π[f(x)]²
     └─────────┘
```

#### Case 1: Rotate about the $x$-axis

$$V = \pi \int_a^b [f(x)]^2\,dx$$

> 📝 **Note:** The radius of each disk is $f(x)$ — the distance from the curve to the axis of rotation.

#### Case 2: Rotate about the line $y = c$

$$V = \pi \int_a^b (f(x) - c)^2\,dx$$

> 📝 **Note:** The radius becomes the distance from $f(x)$ to the line $y = c$, which is $|f(x) - c|$.

#### Case 3: Rotate about a vertical line $x = c$

When rotating about a vertical line, we integrate with respect to $y$.

Assume $f$ is one-to-one on $[a, b]$, so the inverse function $x = f^{-1}(y)$ exists on the interval $y \in [\min\{f(a), f(b)\}, \max\{f(a), f(b)\}]$.

$$V = \pi \int_{\min\{f(a),f(b)\}}^{\max\{f(a),f(b)\}} \left(f^{-1}(y) - c\right)^2\,dy$$

> ⚠️ **Warning:** When rotating about a vertical line, you must express $x$ as a function of $y$ (use the inverse function). The limits of integration change to $y$-values.

### Solids of Revolution: The Washer Method

When the region between **two curves** is rotated, the cross-section is a **washer** (annulus) — a disk with a hole.

```
  Cross-section (washer):
     ┌───────────┐
     │  ○ R(x)   │    Outer radius = R(x)
     │    ○ r(x) │    Inner radius = r(x)
     └───────────┘
     Area = π[R(x)² - r(x)²]
```

#### About the $x$-axis

Suppose $R(x)$ and $r(x)$ are continuous on $[a, b]$ with $R(x) \geq r(x) \geq 0$.

$$V = \pi \int_a^b \left(R(x)^2 - r(x)^2\right)\,dx$$

#### About a vertical line $x = c$

Suppose $R(y)$ and $r(y)$ denote the outer and inner distances from the line $x = c$.

$$V = \pi \int_{y_1}^{y_2} \left(R(y)^2 - r(y)^2\right)\,dy$$

### Quick Reference

| Method | Formula | When to Use |
|--------|---------|-------------|
| **Slicing** | $V = \int_a^b A(x)\,dx$ | General: known cross-sectional area |
| **Disk** (about $x$-axis) | $V = \pi \int_a^b [f(x)]^2\,dx$ | One curve, rotate about $x$-axis |
| **Disk** (about $y = c$) | $V = \pi \int_a^b [f(x) - c]^2\,dx$ | One curve, rotate about horizontal line |
| **Disk** (about $x = c$) | $V = \pi \int [f^{-1}(y) - c]^2\,dy$ | One curve, rotate about vertical line |
| **Washer** (about $x$-axis) | $V = \pi \int_a^b [R^2 - r^2]\,dx$ | Two curves, rotate about $x$-axis |
| **Washer** (about $x = c$) | $V = \pi \int_{y_1}^{y_2} [R^2 - r^2]\,dy$ | Two curves, rotate about vertical line |

> 💡 **Memory trick — Disk vs Washer:**
>
> | Method | 想象 | 判断 |
> |--------|------|------|
> | **Disk** | 飞盘 (frisbee) — 实心圆 | Region **贴着** rotation axis → 没洞 |
> | **Washer** | 垫圈 — 中间有洞 | Region **不贴** rotation axis → 有洞 |
>
> **口诀：** "贴 axis = disk, 不贴 = washer"
>
> ⚠️ **别用 CD disc 记！** CD 有洞，但 disk method = 没洞。看 region 碰不碰 axis，不要看 curve 的形状。

> 📝 **Key decision:** Which variable to integrate? If the axis of rotation is **horizontal** → integrate $dx$. If **vertical** → integrate $dy$ (or use shell method from 4.10).

---

## Section 4.10: Volumes using Cylindrical Shells

### Shell Formula for Revolution about a Vertical Line

The volume of the solid generated by revolving the region between the $x$-axis and the graph of a continuous function $f(x) \geq 0$, for $a \leq x \leq b$, about the vertical line $x = L$ is:

$$V = \int_a^b 2\pi r(x) f(x)\,dx$$

where $r(x) = x - L$ is the **radius** of a typical cylindrical shell.

```
  Cylindrical shell (unrolled):
  ┌──────────────────────────┐
  │                          │ height = f(x)
  │                          │
  └──────────────────────────┘
  ← circumference = 2πr(x) →

  Volume of thin shell = circumference × height × thickness
                       = 2πr(x) · f(x) · dx
```

> 📝 **Note:** Each thin vertical strip at position $x$ sweeps out a cylindrical shell when rotated. The shell has:
> - **Radius:** $r(x) = |x - L|$ (distance from strip to axis of rotation)
> - **Height:** $f(x)$ (the function value)
> - **Thickness:** $dx$

### When to Use Shells vs Disks/Washers

| Axis of Rotation | Disk/Washer integrates | Shell integrates |
|-----------------|----------------------|-----------------|
| Horizontal ($y = c$) | $dx$ (perpendicular) | $dy$ (parallel) |
| Vertical ($x = L$) | $dy$ (perpendicular) | $dx$ (parallel) |

> 💡 **Memory trick:** Disk/Washer slices are **perpendicular** to the axis of rotation. Shells are **parallel** to the axis of rotation.

> 📝 **When shells are easier:** When the function is hard to invert (e.g., $y = x - x^3$), shells let you integrate with respect to $x$ even when rotating about a vertical line — no need to solve for $x = f^{-1}(y)$.

### Quick Reference

| Method | Formula | Key Variables |
|--------|---------|--------------|
| **Shell** (about $x = L$) | $V = \int_a^b 2\pi(x - L)f(x)\,dx$ | $r(x) = x - L$, height $= f(x)$ |
| **Shell** (about $y$-axis, $L=0$) | $V = \int_a^b 2\pi x f(x)\,dx$ | Special case: $r(x) = x$ |

> ⚠️ **Warning:** The shell method formula assumes $f(x) \geq 0$. If the region is between two curves, the height becomes $f(x) - g(x)$.

---

## Chapter 6: Matrix Algebra

### 6.1 Introduction to Matrices

#### Definition

A (real-valued) **matrix** is a rectangular array of (real) numbers

$$\mathbf{A} = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix} = (a_{ij})_{m \times n}$$

where $a_{ij} \in \mathbb{R}$ are real numbers. The **size** of the matrix is said to be $m \times n$ (read as $m$ by $n$), where $m$ is the number of rows and $n$ is the number of columns. The numbers in the array are called **entries**. The $(i,j)$-entry, $a_{ij}$, $i = 1, \ldots, m$, $j = 1, \ldots, n$, is the number in the $i$-th row $j$-th column.

#### Special Types of Matrices

**Vectors**

An $n \times 1$ matrix is called a **(column) vector**, and a $1 \times n$ matrix is called a **(row) vector**.

$$\begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix} \text{ column vector} \qquad \begin{pmatrix} v_1 & v_2 & \cdots & v_n \end{pmatrix} \text{ row vector}$$

If it is not specified whether the vector is a column or a row vector, by default we will assume it is a **column vector**.

**Zero Matrices**

All entries equal $0$, denoted as $\mathbf{0}_{m \times n}$. Not necessarily a square matrix.

$$\mathbf{0}_{2\times 3} = \begin{pmatrix} 0&0&0 \\ 0&0&0 \end{pmatrix}, \quad \mathbf{0}_{3\times 3} = \begin{pmatrix} 0&0&0 \\ 0&0&0 \\ 0&0&0 \end{pmatrix}, \quad \mathbf{0}_{4\times 1} = \begin{pmatrix} 0 \\ 0 \\ 0 \\ 0 \end{pmatrix}, \quad \mathbf{0}_{1\times 1} = \begin{pmatrix} 0 \end{pmatrix}$$

**Square Matrices**

Number of rows = number of columns:

$$\mathbf{A} = (a_{ij})_n = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn} \end{pmatrix}$$

A size $n \times n$ matrix is a square matrix of **order** $n$. The entries $a_{ii}$, $i = 1, 2, \ldots, n$, (explicitly, $a_{11}, a_{22}, \ldots, a_{nn}$) are called the **diagonal entries** of the (square) matrix.

**Diagonal Matrix**

$\mathbf{D} = (a_{ij})_n$, $a_{ij} = 0$ for $i \neq j$.

$$\mathbf{D} = \text{diag}(d_1, d_2, \ldots, d_n) = \begin{pmatrix} d_1 & 0 & \cdots & 0 \\ 0 & d_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & d_n \end{pmatrix}$$

**Scalar Matrix**

$\mathbf{C} = (a_{ij})_n$, $a_{ij} = \begin{cases} c & \text{if } i = j \\ 0 & \text{if } i \neq j \end{cases}$

$$\mathbf{C} = \text{diag}(c, c, \ldots, c) = \begin{pmatrix} c & 0 & \cdots & 0 \\ 0 & c & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & c \end{pmatrix}$$

**Identity Matrix**

$\mathbf{I} = (a_{ij})_n$, $a_{ij} = \begin{cases} 1 & \text{if } i = j \\ 0 & \text{if } i \neq j \end{cases}$

$$\mathbf{I}_n = \text{diag}(1, 1, \ldots, 1) = \begin{pmatrix} 1 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 1 \end{pmatrix}$$

A scalar matrix can also be denoted as $\mathbf{C} = c\mathbf{I}$, where $\mathbf{I}$ is the identity matrix.

#### Triangular Matrices

**Upper triangular:** $\mathbf{A} = (a_{ij})$, $a_{ij} = 0$ for all $i > j$.

**Strictly upper triangular:** $\mathbf{A} = (a_{ij})$, $a_{ij} = 0$ for all $i \geq j$.

**Lower triangular:** $\mathbf{A} = (a_{ij})$, $a_{ij} = 0$ for all $i < j$.

**Strictly lower triangular:** $\mathbf{A} = (a_{ij})$, $a_{ij} = 0$ for all $i \leq j$.

#### Symmetric Matrices

$\mathbf{A} = (a_{ij})_n$, $a_{ij} = a_{ji}$.

$$\begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn} \end{pmatrix} = \begin{pmatrix} a_{11} & a_{21} & \cdots & a_{n1} \\ a_{12} & a_{22} & \cdots & a_{n2} \\ \vdots & \vdots & \ddots & \vdots \\ a_{1n} & a_{2n} & \cdots & a_{nn} \end{pmatrix}$$

---

### 6.2 Matrix Algebra

#### Matrix Addition and Scalar Multiplication

**Scalar multiplication:**

$$c\begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix} = \begin{pmatrix} ca_{11} & ca_{12} & \cdots & ca_{1n} \\ ca_{21} & ca_{22} & \cdots & ca_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ ca_{m1} & ca_{m2} & \cdots & ca_{mn} \end{pmatrix}$$

**Matrix addition:**

$$\begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & \ddots & \vdots \\ a_{m1} & \cdots & a_{mn} \end{pmatrix} + \begin{pmatrix} b_{11} & \cdots & b_{1n} \\ \vdots & \ddots & \vdots \\ b_{m1} & \cdots & b_{mn} \end{pmatrix} = \begin{pmatrix} a_{11}+b_{11} & \cdots & a_{1n}+b_{1n} \\ \vdots & \ddots & \vdots \\ a_{m1}+b_{m1} & \cdots & a_{mn}+b_{mn} \end{pmatrix}$$

**Theorem (Properties of Matrix Addition and Scalar Multiplication):** For matrices $\mathbf{A} = (a_{ij})_{m \times n}$, $\mathbf{B} = (b_{ij})_{m \times n}$, $\mathbf{C} = (c_{ij})_{m \times n}$, and real numbers $a, b \in \mathbb{R}$:

| Property | Rule |
|----------|------|
| (i) Commutative | $\mathbf{A} + \mathbf{B} = \mathbf{B} + \mathbf{A}$ |
| (ii) Associative | $\mathbf{A} + (\mathbf{B} + \mathbf{C}) = (\mathbf{A} + \mathbf{B}) + \mathbf{C}$ |
| (iii) Additive identity | $\mathbf{0}_{m \times n} + \mathbf{A} = \mathbf{A}$ |
| (iv) Additive inverse | $\mathbf{A} + (-\mathbf{A}) = \mathbf{0}_{m \times n}$ |
| (v) Distributive law | $a(\mathbf{A} + \mathbf{B}) = a\mathbf{A} + a\mathbf{B}$ |
| (vi) Scalar addition | $(a + b)\mathbf{A} = a\mathbf{A} + b\mathbf{A}$ |
| (vii) Associative | $(ab)\mathbf{A} = a(b\mathbf{A})$ |
| (viii) | If $a\mathbf{A} = \mathbf{0}_{m \times n}$, then either $a = 0$ or $\mathbf{A} = \mathbf{0}$ |

#### Matrix Multiplication

**Definition:** Matrix multiplication:

$$\mathbf{AB} = (a_{ij})_{m \times p}(b_{ij})_{p \times n} = \left(\sum_{k=1}^p a_{ik}b_{kj}\right)_{m \times n}$$

> ⚠️ **Caution:** Matrix multiplication is **not commutative** — $\mathbf{AB} \neq \mathbf{BA}$ in general.

**Definition:** If we multiply $\mathbf{A}$ to the left of $\mathbf{B}$, we are **pre-multiplying** $\mathbf{A}$ to $\mathbf{B}$. If we multiply $\mathbf{A}$ to the right of $\mathbf{B}$, we are **post-multiplying** $\mathbf{A}$ to $\mathbf{B}$.

**Theorem (Properties of Matrix Multiplication):**

| Property | Rule |
|----------|------|
| (i) Associative | $(\mathbf{AB})\mathbf{C} = \mathbf{A}(\mathbf{BC})$ |
| (ii) Left distributive | $\mathbf{A}(\mathbf{B} + \mathbf{C}) = \mathbf{AB} + \mathbf{AC}$ |
| (iii) Right distributive | $(\mathbf{A} + \mathbf{B})\mathbf{C} = \mathbf{AC} + \mathbf{BC}$ |
| (iv) Scalar | $c(\mathbf{AB}) = (c\mathbf{A})\mathbf{B} = \mathbf{A}(c\mathbf{B})$ |
| (v) Multiplicative identity | $\mathbf{I}_m \mathbf{A} = \mathbf{A} = \mathbf{A}\mathbf{I}_n$ |
| (vi) Nonzero zero divisor | There exist $\mathbf{A} \neq \mathbf{0}$ and $\mathbf{B} \neq \mathbf{0}$ such that $\mathbf{AB} = \mathbf{0}$ |
| (vii) Zero matrix | $\mathbf{A}\mathbf{0}_{n \times p} = \mathbf{0}_{m \times p}$ and $\mathbf{0}_{p \times m}\mathbf{A} = \mathbf{0}_{p \times n}$ |

**Definition:** Define the power of square matrices inductively:

- (i) $\mathbf{A}^0 = \mathbf{I}$
- (ii) $\mathbf{A}^n = \mathbf{A}\mathbf{A}^{n-1}$, for $n \geq 1$

#### Transpose

**Definition:** Let $\mathbf{A} = (a_{ij})$ be a $m \times n$ matrix. The **transpose** of $\mathbf{A}$, denoted as $\mathbf{A}^T$, is the $n \times m$ matrix whose $(i,j)$-entry is the $(j,i)$-entry of $\mathbf{A}$:

$$\mathbf{A} = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix}_{m \times n} \quad \mathbf{A}^T = \begin{pmatrix} a_{11} & a_{21} & \cdots & a_{m1} \\ a_{12} & a_{22} & \cdots & a_{m2} \\ \vdots & \vdots & \ddots & \vdots \\ a_{1n} & a_{2n} & \cdots & a_{mn} \end{pmatrix}_{n \times m}$$

**Theorem (Properties of Transpose):**

| Property | Rule |
|----------|------|
| (i) | $(\mathbf{A}^T)^T = \mathbf{A}$ |
| (ii) | $(c\mathbf{A})^T = c\mathbf{A}^T$ |
| (iii) | $(\mathbf{A} + \mathbf{B})^T = \mathbf{A}^T + \mathbf{B}^T$ |
| (iv) | $(\mathbf{AB})^T = \mathbf{B}^T \mathbf{A}^T$ |

By property (iv): $(\mathbf{A}_1 \mathbf{A}_2 \cdots \mathbf{A}_k)^T = \mathbf{A}_k^T \cdots \mathbf{A}_2^T \mathbf{A}_1^T$.

**Definition:** A square matrix $\mathbf{A}$ is **symmetric** if and only if $\mathbf{A}^T = \mathbf{A}$.

---

### 6.3 Linear System and Matrix Equation

#### Matrix and Vector Equation

A linear system in standard form

$$\begin{cases} a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\\\ a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2 \\\\ \qquad\qquad\qquad\vdots \\\\ a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m \end{cases}$$

can be expressed as a **matrix equation**:

$$\mathbf{A}\mathbf{x} = \mathbf{b}$$

where $\mathbf{A} = (a_{ij})_{m \times n}$ is the **coefficient matrix**, $\mathbf{x} = (x_i)_{n \times 1}$ the **variable vector**, and $\mathbf{b} = (b_i)_{m \times 1}$ the **constant vector**.

It can also be expressed as a **vector equation**:

$$x_1\mathbf{a}_1 + x_2\mathbf{a}_2 + \cdots + x_n\mathbf{a}_n = \mathbf{b}$$

where $\mathbf{a}_i$ is the **coefficient vector** for variable $x_i$, for $i = 1, \ldots, n$.

#### Properties of Homogeneous Linear Systems

A **homogeneous** linear system $\mathbf{Ax} = \mathbf{0}$ is always consistent, since the zero vector is a solution: $\mathbf{A0} = \mathbf{0}$.

**Definition:** The zero vector is called the **trivial solution**. A nonzero solution to a homogeneous system is called a **nontrivial solution**.

**Theorem:** A homogeneous linear system $\mathbf{Ax} = \mathbf{0}$ has infinitely many solutions if and only if it has a nontrivial solution.

**Lemma:**

(i) Let $\mathbf{v}$ be a particular solution to $\mathbf{Ax} = \mathbf{b}$, and $\mathbf{u}$ be a particular solution to the homogeneous system $\mathbf{Ax} = \mathbf{0}$ with the same coefficient matrix $\mathbf{A}$. Then $\mathbf{v} + \mathbf{u}$ is also a solution to $\mathbf{Ax} = \mathbf{b}$.

(ii) Suppose $\mathbf{v}_1$ and $\mathbf{v}_2$ are solutions to the linear system $\mathbf{Ax} = \mathbf{b}$. Then $\mathbf{v}_1 - \mathbf{v}_2$ is a solution to the homogeneous linear system $\mathbf{Ax} = \mathbf{0}$ with the same coefficient matrix.

#### Block Multiplication

Let $\mathbf{b}_j$ be the $j$-th column of $\mathbf{B}$. Then

$$\mathbf{AB} = \mathbf{A}\begin{pmatrix} | & | & & | \\ \mathbf{b}_1 & \mathbf{b}_2 & \cdots & \mathbf{b}_n \\ | & | & & | \end{pmatrix} = \begin{pmatrix} | & | & & | \\ \mathbf{Ab}_1 & \mathbf{Ab}_2 & \cdots & \mathbf{Ab}_n \\ | & | & & | \end{pmatrix}$$

Also, if $\mathbf{a}_i$ is the $i$-th row of $\mathbf{A}$, then

$$\mathbf{AB} = \begin{pmatrix} - & \mathbf{a}_1 & - \\ - & \mathbf{a}_2 & - \\ & \vdots & \\ - & \mathbf{a}_m & - \end{pmatrix}\mathbf{B} = \begin{pmatrix} - & \mathbf{a}_1\mathbf{B} & - \\ - & \mathbf{a}_2\mathbf{B} & - \\ & \vdots & \\ - & \mathbf{a}_m\mathbf{B} & - \end{pmatrix}$$

---

### 6.4 Inverse of Matrices

#### Definition

A $n \times n$ square matrix $\mathbf{A}$ is **invertible** if there exists a square matrix $\mathbf{B}$ of the same size such that $\mathbf{AB} = \mathbf{I}_n = \mathbf{BA}$.

A matrix is said to be **non-invertible** (or **singular**) otherwise.

**Theorem (Uniqueness of inverse):** If $\mathbf{B}$ and $\mathbf{C}$ are both inverses of a square matrix $\mathbf{A}$, then $\mathbf{B} = \mathbf{C}$.

Since the inverse is unique, we denote the inverse of an invertible matrix $\mathbf{A}$ by $\mathbf{A}^{-1}$:

$$\mathbf{A}\mathbf{A}^{-1} = \mathbf{I}_n = \mathbf{A}^{-1}\mathbf{A}$$

#### Inverse of 2 by 2 Square Matrices

**Theorem:** A $2 \times 2$ square matrix $\mathbf{A} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ is invertible if and only if $ad - bc \neq 0$. In this case, the inverse is given by

$$\mathbf{A}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

#### Invertibility and Linear System

**Theorem (Cancellation Law for Matrices):** Let $\mathbf{A}$ be an invertible matrix of order $n$.

(i) **(Left cancellation)** If $\mathbf{B}$ and $\mathbf{C}$ are $n \times m$ matrices with $\mathbf{AB} = \mathbf{AC}$, then $\mathbf{B} = \mathbf{C}$.

(ii) **(Right cancellation)** If $\mathbf{B}$ and $\mathbf{C}$ are $m \times n$ matrices with $\mathbf{BA} = \mathbf{CA}$, then $\mathbf{B} = \mathbf{C}$.

**Theorem (Invertibility and linear system):** Suppose $\mathbf{A}$ is an $n \times n$ invertible square matrix. Then for any $n \times 1$ vector $\mathbf{b}$, $\mathbf{Ax} = \mathbf{b}$ has a unique solution.

**Corollary:** Suppose $\mathbf{A}$ is invertible. Then the trivial solution is the only solution to the homogeneous system $\mathbf{Ax} = \mathbf{0}$.

#### Algorithm to Compute Inverse

Suppose $\mathbf{A}$ is an invertible $n \times n$ matrix. By uniqueness of the inverse, there must be a unique solution to $\mathbf{AX} = \mathbf{I}$.

By block multiplication, we are solving the augmented matrix

$$\begin{pmatrix} \mathbf{A} \mid \mathbf{I} \end{pmatrix} \xrightarrow{\text{RREF}} \begin{pmatrix} \mathbf{I} \mid \mathbf{A}^{-1} \end{pmatrix}$$

#### Properties of Inverse

**Theorem (Properties of inverses):** Let $\mathbf{A}$ be an invertible matrix of order $n$.

| Property | Rule |
|----------|------|
| (i) | $(\mathbf{A}^{-1})^{-1} = \mathbf{A}$ |
| (ii) | For any nonzero real number $a$, $(a\mathbf{A})^{-1} = \frac{1}{a}\mathbf{A}^{-1}$ |
| (iii) | $(\mathbf{A}^T)^{-1} = (\mathbf{A}^{-1})^T$ |
| (iv) | If $\mathbf{B}$ is invertible of the same size, $(\mathbf{AB})^{-1} = \mathbf{B}^{-1}\mathbf{A}^{-1}$ |

By (iv): if $\mathbf{A}_1, \mathbf{A}_2, \ldots, \mathbf{A}_k$ are invertible matrices of the same size, then

$$(\mathbf{A}_1 \mathbf{A}_2 \cdots \mathbf{A}_k)^{-1} = \mathbf{A}_k^{-1} \cdots \mathbf{A}_2^{-1} \mathbf{A}_1^{-1}$$

**Definition:** The negative power of an invertible matrix is defined to be $\mathbf{A}^{-n} = (\mathbf{A}^{-1})^n$ for any $n > 0$.

---

### 6.5 Elementary Matrices

#### Definition

A square matrix of order $n$, $\mathbf{E}$, is called an **elementary matrix** if it can be obtained from the identity matrix $\mathbf{I}_n$ by performing a single elementary row operation:

$$\mathbf{I}_n \xrightarrow{r} \mathbf{E}$$

where $r$ is an elementary row operation. The elementary row operation performed to obtain $\mathbf{E}$ is said to be the row operation **corresponding** to the elementary matrix.

#### Elementary Matrix and Elementary Row Operation

**Theorem:** Let $\mathbf{A}$ be an $n \times m$ matrix and $\mathbf{E}$ be the elementary matrix corresponding to the elementary row operation $r$. Then the product $\mathbf{EA}$ is the resultant of performing the row operation $r$ on $\mathbf{A}$:

$$\mathbf{A} \xrightarrow{r} \mathbf{EA}$$

Suppose $\mathbf{B}$ is row equivalent to $\mathbf{A}$:

$$\mathbf{A} \xrightarrow{r_1} \xrightarrow{r_2} \cdots \xrightarrow{r_k} \mathbf{B}$$

Let $\mathbf{E}_i$ be the elementary matrix corresponding to $r_i$, for $i = 1, 2, \ldots, k$. Then

$$\mathbf{B} = \mathbf{E}_k \cdots \mathbf{E}_2 \mathbf{E}_1 \mathbf{A}$$

**Theorem:** Two $n \times m$ matrices $\mathbf{A}$ and $\mathbf{B}$ are row equivalent if and only if there exist elementary matrices $\mathbf{E}_1, \mathbf{E}_2, \ldots, \mathbf{E}_k$ such that $\mathbf{B} = \mathbf{E}_k \cdots \mathbf{E}_2 \mathbf{E}_1 \mathbf{A}$.

#### Inverse of Elementary Matrices

**Theorem (Inverse of elementary matrices):** Every elementary matrix $\mathbf{E}$ is invertible. The inverse $\mathbf{E}^{-1}$ is the elementary row operation corresponding to the **reverse** of the original corresponding row operation:

| Row operation for $\mathbf{E}$ | Row operation for $\mathbf{E}^{-1}$ |
|-------------------------------|--------------------------------------|
| $R_i + cR_j$ | $R_i - cR_j$ |
| $R_i \leftrightarrow R_j$ | $R_i \leftrightarrow R_j$ |
| $cR_i$ | $\frac{1}{c}R_i$ |

---

### 6.6 Equivalent Statements for Invertibility

#### Worked Example: Invertibility via Row Reduction and Elementary Matrices

Consider the matrix $\mathbf{A} = \begin{pmatrix} 1 & -1 & 1 \\ -1 & 1 & 1 \\ 0 & -1 & 1 \end{pmatrix}$. We illustrate two important equivalent statements:

- $\mathbf{A}$ is invertible $\iff$ the reduced row-echelon form of $\mathbf{A}$ is the identity matrix.
- $\mathbf{A}$ is invertible $\iff$ $\mathbf{A}$ can be written as a product of elementary matrices.

**Step 1. Row reduction.** We reduce $\mathbf{A}$ to the identity matrix:

$$\begin{pmatrix} 1&-1&1 \\ -1&1&1 \\ 0&-1&1 \end{pmatrix} \xrightarrow{R_1 - R_3} \xrightarrow{R_2 + R_1} \xrightarrow{R_3 + R_2} \xrightarrow{\frac{1}{2}R_3} \xrightarrow{R_2 - R_3} \begin{pmatrix} 1&0&0 \\ 0&1&0 \\ 0&0&1 \end{pmatrix}$$

The RREF of $\mathbf{A}$ is $\mathbf{I}_3$. Therefore, $\mathbf{A}$ is invertible.

**Step 2. Translate row operations into elementary matrices.** Each row operation corresponds to premultiplication by an elementary matrix:

$$\begin{pmatrix}1&0&0\\0&1&-1\\0&0&1\end{pmatrix} \begin{pmatrix}1&0&0\\0&1&0\\0&0&1/2\end{pmatrix} \begin{pmatrix}1&0&0\\0&1&0\\0&1&1\end{pmatrix} \begin{pmatrix}1&0&0\\1&1&0\\0&0&1\end{pmatrix} \begin{pmatrix}1&0&-1\\0&1&0\\0&0&1\end{pmatrix} \mathbf{A} = \mathbf{I}_3$$

That is, $(\mathbf{E}_k \cdots \mathbf{E}_2 \mathbf{E}_1)\mathbf{A} = \mathbf{I}_3$.

**Step 3. Reverse the process.** From the equation above:

$$\mathbf{A} = (\mathbf{E}_k \cdots \mathbf{E}_2 \mathbf{E}_1)^{-1} = \mathbf{E}_1^{-1}\mathbf{E}_2^{-1} \cdots \mathbf{E}_k^{-1}$$

> ⚠️ **Caution:** The order reverses when taking inverses: $(\mathbf{E}_k \cdots \mathbf{E}_1)^{-1} = \mathbf{E}_1^{-1} \cdots \mathbf{E}_k^{-1}$.

#### Computing $\mathbf{A}^{-1}$ from the Product of Elementary Matrices

If we define $\mathbf{M} := \mathbf{E}_k \cdots \mathbf{E}_2 \mathbf{E}_1$, then $\mathbf{MA} = \mathbf{I}_3$. Evaluating the product:

$$\mathbf{M} = \begin{pmatrix} 1 & 0 & -1 \\ 1/2 & 1/2 & -1 \\ 1/2 & 1/2 & 0 \end{pmatrix}$$

We verify both $\mathbf{MA} = \mathbf{I}_3$ and $\mathbf{AM} = \mathbf{I}_3$, confirming:

$$\mathbf{A}^{-1} = \begin{pmatrix} 1 & 0 & -1 \\ 1/2 & 1/2 & -1 \\ 1/2 & 1/2 & 0 \end{pmatrix}$$

> 💡 This computation matches exactly the method of forming $(\mathbf{A} \mid \mathbf{I})$ and row reducing to $(\mathbf{I} \mid \mathbf{A}^{-1})$.

#### Equivalent Statement: Unique Solution of $\mathbf{Ax} = \mathbf{b}$ for Every $\mathbf{b}$

**Key statement:** A square matrix $\mathbf{A}$ is invertible if and only if, for **every** vector $\mathbf{b}$, the linear system $\mathbf{Ax} = \mathbf{b}$ has a **unique** solution.

#### Proofs: Elementary Matrices and Invertibility

**Theorem:** If $\mathbf{A} = \mathbf{E}_k \cdots \mathbf{E}_2 \mathbf{E}_1$ is a product of elementary matrices, then $\mathbf{A}$ is invertible.

**Corollary:** If the reduced row-echelon form of $\mathbf{A}$ is $\mathbf{I}$, then $\mathbf{A}$ is invertible.

*Proof.* If $\text{rref}(\mathbf{A}) = \mathbf{I}$, then there exist elementary matrices $\mathbf{E}_1, \ldots, \mathbf{E}_k$ such that $\mathbf{E}_k \cdots \mathbf{E}_1 \mathbf{A} = \mathbf{I}$. Then $\mathbf{A} = \mathbf{E}_1^{-1} \mathbf{E}_2^{-1} \cdots \mathbf{E}_k^{-1}$, which is a product of elementary matrices (since the inverse of an elementary matrix is again elementary). By the theorem, $\mathbf{A}$ is invertible.

#### Invertibility and Homogeneous System

**Theorem:** A square matrix $\mathbf{A}$ is invertible if and only if the homogeneous system $\mathbf{Ax} = \mathbf{0}$ has only the trivial solution.

*Proof.*

($\Rightarrow$) If $\mathbf{A}$ is invertible, then $\mathbf{x} = \mathbf{A}^{-1}\mathbf{0} = \mathbf{0}$. So the homogeneous system has only the trivial solution.

($\Leftarrow$) If $\mathbf{Ax} = \mathbf{0}$ has only the trivial solution, then the RREF of $\mathbf{A}$ must have a pivot in every column (otherwise there would be free variables and infinitely many solutions). Therefore $\text{rref}(\mathbf{A}) = \mathbf{I}$, and by the corollary above, $\mathbf{A}$ is invertible.

#### Left and Right Inverses

**Definition:** Let $\mathbf{A}$ be an $n \times m$ matrix.

- A $m \times n$ matrix $\mathbf{B}$ is called a **left inverse** of $\mathbf{A}$ if $\mathbf{BA} = \mathbf{I}_m$.
- A $m \times n$ matrix $\mathbf{B}$ is called a **right inverse** of $\mathbf{A}$ if $\mathbf{AB} = \mathbf{I}_n$.

$\mathbf{B}$ is a left inverse of $\mathbf{A}$ if and only if $\mathbf{A}$ is a right inverse of $\mathbf{B}$.

**Theorem:** A square matrix $\mathbf{A}$ is invertible if and only if it has a left inverse.

**Theorem:** A square matrix $\mathbf{A}$ is invertible if and only if it has a right inverse.

> 💡 In the square case, having only a left inverse or only a right inverse is already enough to guarantee a true inverse.

#### Algorithm for Finding the Inverse of a Matrix

Let $\mathbf{A}$ be an $n \times n$ matrix.

**Step 1.** Form the augmented matrix $(\mathbf{A} \mid \mathbf{I}_n)$.

**Step 2.** Row reduce: $(\mathbf{A} \mid \mathbf{I}_n) \longrightarrow (\mathbf{R} \mid \mathbf{B})$, where $\mathbf{R}$ is the REF or RREF of $\mathbf{A}$.

**Step 3.**
- If $\mathbf{R} \neq \mathbf{I}_n$ (or if the REF contains a zero row), then $\mathbf{A}$ is **not invertible**.
- If $\mathbf{R} = \mathbf{I}_n$, then $\mathbf{A}$ is invertible, and $\mathbf{A}^{-1} = \mathbf{B}$.

#### Summary: Equivalent Statements of Invertibility

**Theorem (Equivalent Statements of Invertibility):** Let $\mathbf{A}$ be a **square** matrix of order $n$. The following statements are equivalent:

1. $\mathbf{A}$ is invertible.
2. $\mathbf{A}^T$ is invertible.
3. (left inverse) There exists a matrix $\mathbf{B}$ such that $\mathbf{BA} = \mathbf{I}$.
4. (right inverse) There exists a matrix $\mathbf{B}$ such that $\mathbf{AB} = \mathbf{I}$.
5. The reduced row-echelon form of $\mathbf{A}$ is the identity matrix $\mathbf{I}$.
6. $\mathbf{A}$ can be expressed as a product of elementary matrices.
7. The homogeneous system $\mathbf{Ax} = \mathbf{0}$ has only the trivial solution.
8. For **every** vector $\mathbf{b}$, the system $\mathbf{Ax} = \mathbf{b}$ has a **unique** solution.

> 💡 Any one of these conditions can be used as a definition or test for invertibility. Once you know one statement is true, all the others follow automatically.

---

### 6.7 Determinant by Cofactor Expansion

#### Definition

We define the **determinant** of $\mathbf{A}$ of order $n$, denoted as $\det(\mathbf{A})$ or $|\mathbf{A}|$, by induction.

**Order 1:** For $n = 1$, $\mathbf{A} = (a)$, $\det(\mathbf{A}) = a$.

**Order 2:** For $n = 2$, $\mathbf{A} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, $\det(\mathbf{A}) = ad - bc$.

**Order $n \geq 2$:** Define $\mathbf{M}_{ij}$, called the $(i,j)$ **matrix minor** of $\mathbf{A}$, to be the matrix obtained from $\mathbf{A}$ by deleting the $i$-th row and $j$-th column.

The $(i,j)$-**cofactor** of $\mathbf{A}$, denoted as $A_{ij}$, is the (real) number given by

$$A_{ij} = (-1)^{i+j} \det(\mathbf{M}_{ij})$$

The determinant of $\mathbf{A}$ is defined to be

$$\det(\mathbf{A}) = a_{i1}A_{i1} + a_{i2}A_{i2} + \cdots + a_{in}A_{in} = \sum_{k=1}^n a_{ik}A_{ik} \quad \text{(row expansion)}$$

$$\det(\mathbf{A}) = a_{1j}A_{1j} + a_{2j}A_{2j} + \cdots + a_{nj}A_{nj} = \sum_{k=1}^n a_{kj}A_{kj} \quad \text{(column expansion)}$$

This is called the **cofactor expansion** along row $i$ or column $j$.

#### Theorem (Determinant is Invariant under Transpose)

The determinant of a square matrix $\mathbf{A}$ is equal to the determinant of its transpose:

$$\det(\mathbf{A}) = \det(\mathbf{A}^T)$$

#### Corollary

The determinant of a **triangular matrix** is the product of the diagonal entries. If $\mathbf{A} = (a_{ij})_n$ is a triangular matrix, then

$$\det(\mathbf{A}) = a_{11} a_{22} \cdots a_{nn} = \prod_{k=1}^n a_{kk}$$

> 💡 If a square matrix $\mathbf{A}$ has a zero row or column, then $\det(\mathbf{A}) = 0$.

---

### 6.8 Determinant by Reduction

#### Effect of Elementary Row Operations on Determinant

**Theorem:** Suppose $\mathbf{B}$ is obtained from $\mathbf{A}$ by a single elementary row operation, $\mathbf{A} \xrightarrow{r} \mathbf{B}$. Then:

| Row operation $r$ | Effect on determinant |
|-------------------|----------------------|
| $R_i + aR_j$ (row addition) | $\det(\mathbf{B}) = \det(\mathbf{A})$ |
| $cR_i$ (row scaling) | $\det(\mathbf{B}) = c \det(\mathbf{A})$ |
| $R_i \leftrightarrow R_j$ (row swap) | $\det(\mathbf{B}) = -\det(\mathbf{A})$ |

#### Determinant of Elementary Matrices

**Corollary:** The determinant of an elementary matrix $\mathbf{E}$ is:

| Elementary matrix corresponding to | $\det(\mathbf{E})$ |
|-------------------------------------|---------------------|
| $R_i + aR_j$ | $1$ |
| $cR_i$ | $c$ |
| $R_i \leftrightarrow R_j$ | $-1$ |

#### Determinant via Row Reduction

**Theorem:** Let $\mathbf{A}$ and $\mathbf{R}$ be square matrices such that $\mathbf{R} = \mathbf{E}_k \cdots \mathbf{E}_2 \mathbf{E}_1 \mathbf{A}$ for some elementary matrices $\mathbf{E}_1, \ldots, \mathbf{E}_k$. Then

$$\det(\mathbf{R}) = \det(\mathbf{E}_k) \cdots \det(\mathbf{E}_2) \det(\mathbf{E}_1) \det(\mathbf{A})$$

**Corollary:** Let $\mathbf{A}$ be a $n \times n$ square matrix. Suppose

$$\mathbf{A} \xrightarrow{r_1} \xrightarrow{r_2} \cdots \xrightarrow{r_k} \mathbf{R} = \begin{pmatrix} d_1 & * & \cdots & * \\ 0 & d_2 & \cdots & * \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & d_n \end{pmatrix}$$

where $\mathbf{R}$ is in row-echelon form. Let $\mathbf{E}_i$ be the elementary matrix corresponding to $r_i$. Then

$$\det(\mathbf{A}) = \frac{d_1 d_2 \cdots d_n}{\det(\mathbf{E}_k) \cdots \det(\mathbf{E}_2) \det(\mathbf{E}_1)}$$

> 💡 If a square matrix $\mathbf{A}$ has 2 equal rows, then $\det(\mathbf{A}) = 0$. Similarly, if $\mathbf{A}$ has 2 equal columns, then $\det(\mathbf{A}) = 0$.

---

### 6.9 Properties of Determinant

#### Equivalent Statements of Invertibility (Extended)

**Theorem:** Let $\mathbf{A}$ be a square matrix of order $n$. The following statements are equivalent:

1. $\mathbf{A}$ is invertible.
2. $\mathbf{A}^T$ is invertible.
3. $\mathbf{A}$ has a left-inverse, i.e., there is a matrix $\mathbf{B}$ such that $\mathbf{BA} = \mathbf{I}$.
4. $\mathbf{A}$ has a right-inverse, i.e., there is a matrix $\mathbf{B}$ such that $\mathbf{AB} = \mathbf{I}$.
5. The reduced row-echelon form of $\mathbf{A}$ is the identity matrix.
6. $\mathbf{A}$ can be expressed as a product of elementary matrices.
7. The homogeneous system $\mathbf{Ax} = \mathbf{0}$ has only the trivial solution.
8. For any $\mathbf{b}$, the system $\mathbf{Ax} = \mathbf{b}$ is consistent.
9. The determinant of $\mathbf{A}$ is nonzero: $\det(\mathbf{A}) \neq 0$.

#### Theorem (Determinant of Product)

Let $\mathbf{A}$ and $\mathbf{B}$ be square matrices of the same size. Then

$$\det(\mathbf{AB}) = \det(\mathbf{A})\det(\mathbf{B})$$

By induction, for square matrices $\mathbf{A}_1, \mathbf{A}_2, \ldots, \mathbf{A}_k$ of the same size:

$$\det(\mathbf{A}_1 \mathbf{A}_2 \cdots \mathbf{A}_k) = \det(\mathbf{A}_1) \det(\mathbf{A}_2) \cdots \det(\mathbf{A}_k)$$

#### Theorem (Determinant of Inverse)

If $\mathbf{A}$ is invertible, then

$$\det(\mathbf{A}^{-1}) = \det(\mathbf{A})^{-1}$$

#### Theorem (Determinant of Scalar Multiplication)

For any square matrix $\mathbf{A}$ of order $n$ and scalar $c$:

$$\det(c\mathbf{A}) = c^n \det(\mathbf{A})$$

---

## Chapter 7: Euclidean Vector Spaces

### 7.1 Vectors and Vector Algebra

#### Vectors

A (real) $n$-vector (or vector) is a collection of $n$ ordered real numbers,

$$\mathbf{v} = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix}, \quad \text{where } v_i \in \mathbb{R} \text{ for } i = 1, \ldots, n.$$

The real number $v_i$ is called the $i$-th **coordinate** of the vector $\mathbf{v}$.

The **Euclidean $n$-space**, denoted as $\mathbb{R}^n$, is the collection of all $n$-vectors:

$$\mathbb{R}^n = \left\{ \mathbf{v} = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix} \;\middle|\; v_i \in \mathbb{R} \text{ for } i = 1, \ldots, n \right\}$$

#### Vector Addition and Scalar Multiplication

Since vectors are matrices (column vectors are $n \times 1$ matrices), the properties of matrix addition and scalar multiplication hold for vectors.

For any vectors $\mathbf{u, v, w}$ and scalars $a, b \in \mathbb{R}$:

| Property | Rule |
|----------|------|
| (i) Closure | $\mathbf{u} + \mathbf{v}$ is a vector in $\mathbb{R}^n$ |
| (ii) Commutative | $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$ |
| (iii) Associative | $\mathbf{u} + (\mathbf{v} + \mathbf{w}) = (\mathbf{u} + \mathbf{v}) + \mathbf{w}$ |
| (iv) Zero vector | $\mathbf{0} + \mathbf{v} = \mathbf{v}$ |
| (v) Negative | $-\mathbf{v}$ is a vector in $\mathbb{R}^n$ such that $\mathbf{v} - \mathbf{v} = \mathbf{0}$ |
| (vi) Scalar multiple | $a\mathbf{v}$ is a vector in $\mathbb{R}^n$ |
| (vii) Distribution | $a(\mathbf{u} + \mathbf{v}) = a\mathbf{u} + a\mathbf{v}$ |
| (viii) Distribution | $(a + b)\mathbf{u} = a\mathbf{u} + b\mathbf{u}$ |
| (ix) Associativity | $(ab)\mathbf{u} = a(b\mathbf{u})$ |
| (x) Zero product | If $a\mathbf{u} = \mathbf{0}$, then either $a = 0$ or $\mathbf{u} = \mathbf{0}$ |

#### Linear Combination

A **linear combination** of $\mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_k \in \mathbb{R}^n$ is

$$c_1\mathbf{u}_1 + c_2\mathbf{u}_2 + \cdots + c_k\mathbf{u}_k, \quad \text{for some } c_1, c_2, \ldots, c_k \in \mathbb{R}.$$

The scalars $c_1, c_2, \ldots, c_k$ are called **coefficients**.

#### Span (Linear Span)

Let $\mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_k$ be vectors in $\mathbb{R}^n$. The **span** (or linear span) of $\mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_k$ is the subset of $\mathbb{R}^n$ containing all the linear combinations:

$$\text{span}\{\mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_k\} = \left\{ c_1\mathbf{u}_1 + c_2\mathbf{u}_2 + \cdots + c_k\mathbf{u}_k \;\middle|\; c_1, c_2, \ldots, c_k \in \mathbb{R} \right\}$$

#### Algorithm to Check for Linear Combination

Let $S = \{\mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_k\}$ be a set of vectors in $\mathbb{R}^n$. Form the $n \times k$ matrix $\mathbf{A} = \begin{pmatrix}\mathbf{u}_1 & \mathbf{u}_2 & \cdots & \mathbf{u}_k\end{pmatrix}$ whose columns are the vectors in $S$.

Then a vector $\mathbf{v}$ in $\mathbb{R}^n$ is in $\text{span}\{\mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_k\}$ **if and only if** the system $\mathbf{Ax = v}$ is **consistent**.

If the system is consistent, then the solutions to the system are the possible coefficients of the linear combination.

#### Properties of Linear Spans

**Theorem (Properties of linear span):** Let $S = \{\mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_k\}$ be a finite set of vectors. The span of $S$ has the following properties:

1. The span of $S$ contains the origin: $\mathbf{0} \in \text{span}(S)$.
2. The span of $S$ is **closed under vector addition**: for any $\mathbf{u}, \mathbf{v} \in \text{span}(S)$, $\mathbf{u} + \mathbf{v} \in \text{span}(S)$.
3. The span of $S$ is **closed under scalar multiplication**: for any $\mathbf{u} \in \text{span}(S)$ and $\alpha \in \mathbb{R}$, $\alpha\mathbf{u} \in \text{span}(S)$.

> 💡 Properties (ii) and (iii) can be combined: the span is **closed under linear combinations** — if $\mathbf{u}, \mathbf{v} \in \text{span}(S)$ and $\alpha, \beta$ are any scalars, then $\alpha\mathbf{u} + \beta\mathbf{v} \in \text{span}(S)$.

**Theorem (Linear span is closed under linear combinations):** For any vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_m$ in $\text{span}(S)$:

$$\text{span}\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_m\} \subseteq \text{span}(S)$$

#### Algorithm to Check for Set Relations between Spans

Given two sets $T = \{\mathbf{v}_1, \ldots, \mathbf{v}_m\}$ and $S = \{\mathbf{u}_1, \ldots, \mathbf{u}_k\}$:

**Theorem:** $\text{span}(T) \subseteq \text{span}(S)$ if and only if the augmented system

$$\left(\begin{array}{cccc|c|c|c} \mathbf{u}_1 & \mathbf{u}_2 & \cdots & \mathbf{u}_k & \mathbf{v}_1 & \cdots & \mathbf{v}_m \end{array}\right)$$

is consistent (for all $\mathbf{v}_i$ simultaneously).

### 7.2 Subspaces

#### Solution Sets to a Linear System and Subspace

The set of solutions to a linear system $\mathbf{Ax = b}$ can be expressed:

**Implicitly:** $V = \left\{ \mathbf{u} \in \mathbb{R}^n \;\middle|\; \mathbf{Au = b} \right\}$

**Explicitly:** $V = \left\{ \mathbf{u} + s_1\mathbf{v}_1 + s_2\mathbf{v}_2 + \cdots + s_k\mathbf{v}_k \;\middle|\; s_1, s_2, \ldots, s_k \in \mathbb{R} \right\}$

where $\mathbf{u} + s_1\mathbf{v}_1 + \cdots + s_k\mathbf{v}_k$ is the general solution.

#### Definition (Subspace)

A subset $V$ of $\mathbb{R}^n$ is a **subspace** if it satisfies:

1. $V$ contains the zero vector: $\mathbf{0} \in V$
2. $V$ is **closed under scalar multiplication**: for any $\mathbf{v} \in V$ and scalar $\alpha$, the vector $\alpha\mathbf{v} \in V$
3. $V$ is **closed under addition**: for any $\mathbf{u}, \mathbf{v} \in V$, the sum $\mathbf{u} + \mathbf{v} \in V$

> 💡 Property (i) can be replaced with (i'): $V$ is **nonempty**.
> Properties (ii) and (iii) are equivalent to (ii'): $V$ is **closed under linear combination** — for any $\mathbf{u}, \mathbf{v} \in V$ and scalars $\alpha, \beta$, $\alpha\mathbf{u} + \beta\mathbf{v} \in V$.

#### Theorem (Solution Set of Homogeneous System)

The solution set $V = \{\mathbf{u} \mid \mathbf{Au = b}\}$ to a linear system $\mathbf{Ax = b}$ is a subspace **if and only if** $\mathbf{b = 0}$ (i.e., the system is **homogeneous**).

The solution set to a homogeneous system is called a **solution space**.

#### Theorem (Subspaces ≡ Linear Spans)

A subset $V \subseteq \mathbb{R}^n$ is a subspace **if and only if** it is a linear span: $V = \text{span}(S)$ for some finite set $S = \{\mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_k\}$.

#### How to Check if a Set is a Subspace

**To show $V$ IS a subspace:** Either find a spanning set $S$ such that $V = \text{span}(S)$, or show $V$ satisfies the 3 conditions.

**To show $V$ is NOT a subspace:** Either:
- Show it does not contain the zero vector: $\mathbf{0} \notin V$, or
- Find $\mathbf{v} \in V$ and scalar $\alpha$ such that $\alpha\mathbf{v} \notin V$, or
- Find $\mathbf{u}, \mathbf{v} \in V$ such that $\mathbf{u} + \mathbf{v} \notin V$

#### Subspaces of $\mathbb{R}^2$

| Dimension | Form | Geometry |
|-----------|------|----------|
| 0 | $\{\mathbf{0}\}$ | A point |
| 1 | $\text{span}\{(x_1, y_1)^T\}$ | Lines through origin (looks like $\mathbb{R}^1$) |
| 2 | $\mathbb{R}^2$ | Whole plane |

#### Subspaces of $\mathbb{R}^3$

| Dimension | Form | Geometry |
|-----------|------|----------|
| 0 | $\{\mathbf{0}\}$ | A point |
| 1 | $\text{span}\{(x_1, y_1, z_1)^T\}$ | Lines through origin (looks like $\mathbb{R}^1$) |
| 2 | $\text{span}\{(x_1, y_1, z_1)^T, (x_2, y_2, z_2)^T\}$ | Planes through origin (looks like $\mathbb{R}^2$) |
| 3 | $\mathbb{R}^3$ | Whole space |

> ⚠️ For planes: the two spanning vectors must **not** be scalar multiples of each other.

### 7.3 Linear Independence

#### Definition

A set $\{\mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_k\}$ is **linearly independent** if the only coefficients $c_1, c_2, \ldots, c_k$ satisfying the equation

$$c_1\mathbf{u}_1 + c_2\mathbf{u}_2 + \cdots + c_k\mathbf{u}_k = \mathbf{0}$$

are $c_1 = c_2 = \cdots = c_k = 0$.

Otherwise, we say that the set is **linearly dependent**.

#### Algorithm to Check for Linear Independence

Let $\{\mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_k\}$ be a set of vectors in $\mathbb{R}^n$.

1. $\{\mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_k\}$ is **linearly independent** if and only if the **homogeneous system** $\begin{pmatrix}\mathbf{u}_1 & \mathbf{u}_2 & \cdots & \mathbf{u}_k\end{pmatrix}\mathbf{x} = \mathbf{0}$ has **only the trivial solution**.

2. The homogeneous system has only the **trivial solution** if and only if the **reduced row-echelon form** of $\begin{pmatrix}\mathbf{u}_1 & \mathbf{u}_2 & \cdots & \mathbf{u}_k\end{pmatrix}$ has **no non-pivot column**.

#### Theorem

A subset $S = \{\mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_k\}$ of $\mathbb{R}^n$ is **linearly independent** if and only if the reduced row-echelon form of $\mathbf{A} = \begin{pmatrix}\mathbf{u}_1 & \mathbf{u}_2 & \cdots & \mathbf{u}_k\end{pmatrix}$ has **no non-pivot columns**.
