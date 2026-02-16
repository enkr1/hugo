---
title: "TCX2101 | Notebook"
slug: "nus-bit-tcx2101-notebook"
date: 2026-02-10
description: "Comprehensive section-by-section notes for NUS TCX2101: Calculus and Linear Algebra"
tags: ["nus", "math", "calculus", "notes", "tcx2101"]
categories: ["Education", "Mathematics"]
toc: true
math: true
draft: false
sticky: 2101
---


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
