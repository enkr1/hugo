---
title: "TCX2102 | Probability & Statistics Midterm Helpsheet"
slug: "nus-bit-tcx2102-midterm-helpsheet"
date: 2026-09-13T03:10:00+08:00
description: "One-A4 single-sided helpsheet for the TCX2102 midterm (Oct 5): counting, probability operators, discrete and continuous random variables, and the distribution family map."
tags: ["nus", "probability", "statistics", "helpsheet", "tcx2102", "midterm"]
categories:
  - ["Education", "NUS BIT", "TCX2102"]
toc: true
math: true
draft: true
sheet: helpsheet
sheetCols: 2
---

<div class="print-hide">

**Mon 5 Oct 20:00-21:00 · MPSH1B · closed book · paper and pen · one A4 side + calculator**

</div>

## 0. Symbols

| Symbol | Say | Means |
|---|---|---|
| $X \sim \text{Binomial}(n, p)$ | "X follows binomial n, p" | X's distribution; its parameters sit in the brackets |
| $X$ vs $x$ | "big X", "small x" | $X$ is the random quantity, $x$ one value it can land on: $P(X = 3)$ |
| $f(x)$ | "f of x" | Discrete: pmf, $P(X = x)$. Continuous: pdf, a height, and only area is probability |
| $F(x)$ | "big F of x" | CDF, $P(X \le x)$: everything left of $x$ |
| $E(X)$ | "E of X" | expected value, the long-run mean, $= \mu$ |
| $V(X)$ | "V of X" | variance, $= \sigma^2$ |
| $\mu$ | "mew" | the mean |
| $\sigma$ | "sigma" | standard deviation: one step, always $> 0$. $\sigma = 6$, never $\pm 6$ |
| $\sigma^2$ | "sigma squared" | variance. $N(50, 16)$ means $\sigma^2 = 16$, so $\sigma = 4$ |
| $\Sigma$ | "sum" (capital sigma) | add over every value: $\sum x f(x)$. Not the same symbol as $\sigma$ |
| $\int \ldots dx$ | "integral … d x" | the continuous $\Sigma$: area under $f(x)$ between the limits |
| $z$, $Z$ | "zed" | $z = \frac{x - \mu}{\sigma}$, steps from the mean. Sign = side: − below, + above. $Z \sim N(0, 1)$ |
| $\Phi(z)$ | "fie of z" | $P(Z \le z)$, the area left of $z$. $\Phi(-z) = 1 - \Phi(z)$ |
| $\lambda$ | "lambda" | a rate. Poisson: $E(X) = \lambda$. In $\text{Exponential}\left(\frac{1}{\mu}\right)$: $\lambda = \frac{1}{\mu}$, so the mean is $\mu = \frac{1}{\lambda}$ |
| $e$, $\exp(t)$ | "e" | 2.71828…, and $\exp(t)$ is $e^t$ |
| $p$, $q$ | "p", "q" | $p$ = P(success) on one trial, $q = 1 - p$ |
| $k$ | "k" | Discrete Uniform$(k)$: how many values. Neg. Binomial$(k, p)$: successes waited for |
| $n!$ | "n factorial" | $n \times (n-1) \times \cdots \times 1$, and $0! = 1$ |
| $\binom{n}{x}$ | "n choose x" | ways to pick $x$ of $n$, order ignored: $\frac{n!}{x!(n-x)!}$ |
| $P(A \mid B)$ | "P of A given B" | chance of A once B is known to have happened |
| $A \cap B$ | "A and B" | both happen |
| $A \cup B$ | "A or B" | at least one happens |
| $A'$ | "A prime", "not A" | A does not happen: $P(A') = 1 - P(A)$ |

## 1. Don't mix these up

| Pair | The discriminator |
|---|---|
| **Discrete** vs **continuous** | Discrete: you **count** it (number of students), and it can't be cut into parts, so there's no 2.5 students: use $\sum$. Continuous: you **measure** it (time, height, weight), and it can be cut as fine as you like: use $\int$, and $P(X = a) = 0$. |
| **Poisson** vs **exponential** | Same shop, two questions. Number of customers in 10 minutes: you **count** it, so Poisson. Time until the next customer: you **measure** it, so exponential. Name X first. |
| **Independent** vs **mutually exclusive** | Independent: $P(A \cap B) = P(A)P(B)$. Mutually exclusive: $P(A \cap B) = 0$. Two events with non-zero probability **cannot be both**: exclusivity forces $P(A \mid B) = 0 \ne P(A)$. |
| **Complement** over a support | $P(X \ge 1) = 1 - P(X = 0)$. The complement runs over the RV's **whole support**, not over the events named in the question. List the support first, then subtract. |
| **Joint** vs **conditional** vs **marginal** | Joint $P(A \cap B)$ = both happen. Conditional $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$ = the world has shrunk to B. Marginal $P(A)$ = sum the joint over every value of the other variable. |
| **Order matters?** | ${}^{n}P_{r} = \frac{n!}{(n-r)!}$ keeps order. $\binom{n}{r} = \frac{n!}{r!(n-r)!}$ does not. $\binom{26}{2} = 325$: divide by $2!$ because AB and BA are the same pair. |

## 2. Counting

- **Product rule:** independent stages multiply: $n_1 \times n_2 \times \cdots \times n_k$.
- **Permutation** ${}^{n}P_{r} = \frac{n!}{(n-r)!}$: arrangements, order matters.
- **Combination** $\binom{n}{r} = \frac{n!}{r!(n-r)!}$: selections, order does not.
- **Lattice paths:** $m$ East and $n$ North steps is a choice of **which of the $m+n$ steps are North**: $\binom{m+n}{n}$. Not the product rule.
- $0! = 1$, $\binom{n}{0} = \binom{n}{n} = 1$, $\binom{n}{r} = \binom{n}{n-r}$.

## 3. Probability operators

- **Addition:** $P(A \cup B) = P(A) + P(B) - P(A \cap B)$. The subtraction vanishes only if mutually exclusive.
- **Conditional:** $P(A \mid B) = \dfrac{P(A \cap B)}{P(B)}$, needs $P(B) > 0$.
- **Multiplication:** $P(A \cap B) = P(A)P(B \mid A) = P(B)P(A \mid B)$.
- **Total probability:** $P(B) = P(A)P(B \mid A) + P(A')P(B \mid A')$. For a partition $A_1, \ldots, A_k$: $P(B) = \sum_i P(A_i)P(B \mid A_i)$.
- **Bayes:** $P(A_i \mid B) = \dfrac{P(A_i)P(B \mid A_i)}{\sum_j P(A_j)P(B \mid A_j)}$. The denominator is total probability; build the tree, then read it backwards.
- **Complement:** $P(A') = 1 - P(A)$.
- **De Morgan:** $(A \cup B)' = A' \cap B'$ and $(A \cap B)' = A' \cup B'$.

## 4. Discrete random variables

- **PMF** $f(x) = P(X = x)$. Every $f(x) \ge 0$ and $\sum_x f(x) = 1$.
- **CDF** $F(x) = P(X \le x)$, a **step** function. $P(a < X \le b) = F(b) - F(a)$.
- Discrete traps: $P(X < x) = F(x) - f(x)$, and $P(X \ge x) = 1 - F(x - 1)$. The endpoint carries mass, so the inequality sign changes the answer.
- **Expectation** $E[g(X)] = \sum_x g(x) f(x)$, so $E(X) = \sum_x x f(x)$. $E[g(X)]$ is not $g(E(X))$.
- **Variance** $V(X) = E\left[(X - E(X))^2\right] = E(X^2) - [E(X)]^2$, and $\sigma = \sqrt{V(X)}$.
- **Linearity:** $E(aX + b) = aE(X) + b$. $V(aX + b) = a^2 V(X)$: the shift $b$ drops out, the scale is squared.
- Independent $X$, $Y$: $E(XY) = E(X)E(Y)$ and $V(X \pm Y) = V(X) + V(Y)$ (both **plus**).

## 5. Discrete distributions

Identify by **what is fixed vs what is counted**, and **with or without replacement**.

| Distribution | $f(x)$ | $E(X)$ | $V(X)$ |
|---|---|---|---|
| **Discrete Uniform$(k)$**<br>$k$ equally likely values | $f(x_i) = \frac{1}{k}$ | $\frac{1}{k}\sum_{i=1}^{k} x_i$ | $\frac{1}{k}\left(\sum_{i=1}^{k} x_i^2\right) - \mu^2$ |
| **Bernoulli$(p)$**<br>one trial, success 0/1 | $p^x q^{1-x}$ | $p$ | $pq$ |
| **Binomial$(n, p)$**<br>fix **$n$ trials**, count successes | $\binom{n}{x} p^x q^{n-x}$ | $np$ | $npq$ |
| **Geometric$(p)$**<br>fix **1 success**, count trials | $q^{x-1} p$ | $\frac{1}{p}$ | $\frac{q}{p^2}$ |
| **Neg. Binomial$(k, p)$**<br>fix $k$ successes, count trials | $\binom{x-1}{k-1} p^k q^{x-k}$ | $k\left(\frac{1}{p}\right)$ | $k\left(\frac{q}{p^2}\right)$ |
| **Hypergeometric$(N, K, n)$**<br>$n$ draws, **no replacement** | $\dfrac{\binom{K}{x}\binom{N-K}{n-x}}{\binom{N}{n}}$ | $n\frac{K}{N}$ | $n\frac{K}{N}\left(1 - \frac{K}{N}\right)\frac{N-n}{N-1}$ |
| **Poisson$(\lambda)$**<br>fix an interval, count events | $\frac{e^{-\lambda}\lambda^x}{x!}$ | $\lambda$ | $\lambda$ |

How they connect:

- **Bernoulli → Binomial:** $n$ independent Bernoulli$(p)$ summed. Bernoulli is Binomial with $n = 1$.
- **Geometric → Negative Binomial:** Geometric is NegBin with $k = 1$. Both count **trials**, not successes, so $X$ starts at $k$, not at 0.
- **Binomial → Hypergeometric:** same question, replacement removed. Draws stop being independent, hence the factor $\frac{N-n}{N-1}$.
- **Binomial → Poisson:** $n$ large, $p$ small, $\lambda = np$.
- **Binomial vs Geometric:** Binomial fixes the trials and counts successes; Geometric fixes one success and counts the trials. Check which number the question gives you.

## 6. Continuous random variables

- **Probability = area:** $P(a < X < b) = \int_a^b f(x)\\,dx$, and the total area is 1. A single point has no area, so $<$ and $\le$ give the same answer.
- **CDF** $F(x) = P(X \le x) = \int_{-\infty}^{x} f(t)\\,dt$. Going back, $f(x) = F'(x)$.
- **E and V by integration:** $E[g(X)] = \int_{-\infty}^{\infty} g(x) f(x)\\,dx$, so $E(X) = \int x f(x)\\,dx$ and $E(X^2) = \int x^2 f(x)\\,dx$. Then $V(X) = E(X^2) - [E(X)]^2$.
- **Integrals you need:** $\int k\\,dx = kx$, $\int x\\,dx = \frac{x^2}{2}$, $\int x^2\\,dx = \frac{x^3}{3}$, $\int e^{-\lambda x}\\,dx = -\frac{1}{\lambda}e^{-\lambda x}$. Limits: top minus bottom. $e^{-\infty} = 0$.

| Distribution | $f(x)$ | Tail or CDF | $E(X)$ | $V(X)$ |
|---|---|---|---|---|
| **Continuous Uniform$(a, b)$** | $\begin{cases} \frac{1}{b-a}, & a \le x \le b \\\\ 0, & \text{otherwise} \end{cases}$ | $F(x) = \frac{x-a}{b-a}$ | $\frac{a+b}{2}$ | $\frac{1}{12}(b-a)^2$ |
| **Exponential$\left(\frac{1}{\mu}\right)$** | $\begin{cases} \frac{1}{\mu}e^{-\frac{x}{\mu}}, & x > 0 \\\\ 0, & \text{otherwise} \end{cases}$ | $P(X > x) = e^{-\frac{x}{\mu}}$ | $\mu$ | $\mu^2$ |
| **Normal$(\mu, \sigma^2)$** | $\frac{1}{\sqrt{2\pi}\sigma}\exp\left(-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2\right)$ | by $z$ and $\Phi$ | $\mu$ | $\sigma^2$ |

- **Exponential's rate:** $\lambda = \frac{1}{\mu}$, so $f(x) = \lambda e^{-\lambda x}$, mean $\frac{1}{\lambda}$, variance $\frac{1}{\lambda^2}$. Memoryless: $P(X > s + t \mid X > s) = P(X > t)$. **Units:** put x in the rate's unit first (15 min = $\frac{1}{4}$ h when the rate is per hour).

**Normal in three steps.** Where each number comes from: $X \sim N(\underbrace{30}\_{\mu},\ \underbrace{16}\_{\sigma^2})$, $P(X < \underbrace{26}\_{x})$.

- **Step 1, SD from variance:** $\sigma = \sqrt{\text{var}}$, so $\sigma = \sqrt{16} = 4$. In words, read which one you are given: "standard deviation 4" is already $\sigma$, "variance 16" needs the square root.
- **Step 2, z with your number first:** $z = \frac{x - \mu}{\sigma} = \frac{26 - 30}{4} = -1$. z says **which floor**, not how far: below the mean is the basement, so negative.
- **Step 3, $\Phi(z)$ = area LEFT of z** $= P(Z \le z)$. $P(a < Z < b) = \Phi(b) - \Phi(a)$, $\Phi(0) = 0.5$, $\Phi(-z) = 1 - \Phi(z)$.

**Check:** the lower x gives the lower z. If the left number comes out bigger, a sign is flipped.
