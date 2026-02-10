---
title: "TCX2101 | Section Notes (Chapter 1.1 – 3.4)"
slug: "nus-bit-tcx2101-section-notes-1.1-3.4"
date: 2026-02-10
description: "Comprehensive section-by-section notes for NUS TCX2101: Functions, Limits, Continuity, Differentiation, Extreme Values"
tags: ["nus", "math", "calculus", "notes", "tcx2101"]
categories: ["Education", "Mathematics"]
toc: true
math: true
draft: false
sticky: 2101
---

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
