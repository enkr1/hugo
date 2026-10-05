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

## Don't mix these up

| Pair | The discriminator |
|---|---|
| **Discrete** vs **continuous** | Discrete: you **count** it (number of students), and it can't be cut into parts, so there's no 2.5 students: use $\sum$. Continuous: you **measure** it (time, height, weight), and it can be cut as fine as you like: use $\int$, and $P(X = a) = 0$. |
| **Poisson** vs **exponential** | Same shop, two questions. Number of customers in 10 minutes: you **count** it, so Poisson. Time until the next customer: you **measure** it, so exponential. Name X first. |
| **Independent** vs **mutually exclusive** | Independent: $P(A \cap B) = P(A)P(B)$. Mutually exclusive: $P(A \cap B) = 0$. Two events with non-zero probability **cannot be both**: exclusivity forces $P(A \mid B) = 0 \ne P(A)$. |
| **Complement** over a support | $P(X \ge 1) = 1 - P(X = 0)$. The complement runs over the RV's **whole support**, not over the events named in the question. List the support first, then subtract. |
| **Joint** vs **conditional** vs **marginal** | Joint $P(A \cap B)$ = both happen. Conditional $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$ = the world has shrunk to B. Marginal $P(A)$ = sum the joint over every value of the other variable. |
| **Order matters?** | ${}^{n}P_{r} = \frac{n!}{(n-r)!}$ keeps order. $\binom{n}{r} = \frac{n!}{r!(n-r)!}$ does not. $\binom{26}{2} = 325$: divide by $2!$ because AB and BA are the same pair. |

</div>

## 1. Symbols

| Symbol | Say | Means |
|---|---|---|
| $X \sim \text{Binomial}(n, p)$ | X follows binomial | X's distribution; its parameters sit in the brackets |
| $X$ vs $x$ | big X, small x | $X$ is the random quantity, $x$ one value it can land on: $P(X = 3)$ |
| $f(x)$ | f of x | Discrete: pmf, $P(X = x)$. Continuous: pdf, a height, and only area is probability |
| $F(x)$ | big F of x | CDF, $P(X \le x)$: everything left of $x$ |
| $E(X)$ | E of X | expected value, the long-run mean, $= \mu$ |
| $V(X)$ | V of X | variance, $= \sigma^2$ |
| $\mu$ | mew | the mean |
| $\sigma$ | sigma | standard deviation: one step, always $> 0$. $\sigma = 6$, never $\pm 6$ |
| $\sigma^2$ | sigma squared | variance. $N(50, 16)$ means $\sigma^2 = 16$, so $\sigma = 4$ |
| $\Sigma$ | sum (capital sigma) | add over every value: $\sum x f(x)$. Not the same symbol as $\sigma$ |
| $\int \ldots dx$ | integral … d x | the continuous $\Sigma$: area under $f(x)$ between the limits |
| $z$, $Z$ | zed | $z = \frac{x - \mu}{\sigma}$, steps from the mean. Sign = side: − below, + above. $Z \sim N(0, 1)$ |
| $\Phi(z)$ | fie of z | $P(Z \le z)$, the area left of $z$. $\Phi(-z) = 1 - \Phi(z)$ |
| $\lambda$ | lambda | a rate. Poisson: $E(X) = \lambda$. In $\text{Exponential}\left(\frac{1}{\mu}\right)$: $\lambda = \frac{1}{\mu}$, so the mean is $\mu = \frac{1}{\lambda}$ |
| $e$, $\exp(t)$ | e | 2.71828…, and $\exp(t)$ is $e^t$ |
| $p$, $q$ | p, q | $p$ = P(success) on one trial, $q = 1 - p$ |
| $k$ | k | Discrete Uniform$(k)$: how many values. Neg. Binomial$(k, p)$: successes waited for |
| $n!$ | n factorial | $n \times (n-1) \times \cdots \times 1$, and $0! = 1$ |
| $\binom{n}{x}$ | n choose x | ways to pick $x$ of $n$, order ignored: $\frac{n!}{x!(n-x)!}$ |
| $P(A \mid B)$ | P of A given B | chance of A once B is known to have happened |
| $A \cap B$ | A and B | both happen |
| $A \cup B$ | A or B | at least one happens |
| $A'$ | A prime, not A | A does not happen: $P(A') = 1 - P(A)$ |

## 2. Counting

**Product rule** (stages multiply): $n_1 \times n_2 \times \cdots \times n_k$\
**Addition rule** (either-or): $n_1 + n_2 + \cdots + n_k$; $n$ choices, $r$ times, with replacement: $n^r$\
**Permutation** (order matters): ${}^{n}P_{r} = \dfrac{n!}{(n-r)!}$\
**Combination** (order doesn't): $\dbinom{n}{r} = \dfrac{n!}{r!(n-r)!}$\
**Lattice paths** ($m$ East, $n$ North): $\dbinom{m+n}{n}$, choose which steps go North\
**Facts:** $0! = 1$, $\binom{n}{0} = \binom{n}{n} = 1$, $\binom{n}{r} = \binom{n}{n-r}$

## 3. Probability operators

**Addition:** $P(A \cup B) = P(A) + P(B) - P(A \cap B)$\
**Conditional:** $P(A \mid B) = \dfrac{P(A \cap B)}{P(B)}$\
**Multiplication:** $P(A \cap B) = P(A)P(B \mid A) = P(B)P(A \mid B)$\
**Total probability:** $P(B) = P(A)P(B \mid A) + P(A')P(B \mid A')$\
**Bayes:** $P(A_i \mid B) = \dfrac{P(A_i)P(B \mid A_i)}{\sum_j P(A_j)P(B \mid A_j)}$, build the tree, read it backwards\
**Complement:** $P(A') = 1 - P(A)$\
**Independent:** $P(A \cap B) = P(A)P(B)$; **mutually exclusive:** $P(A \cap B) = 0$; non-zero events can't be both\
**Complement over the support:** $P(X \ge 1) = 1 - P(X = 0)$: list the support first\
**De Morgan:** $(A \cup B)' = A' \cap B'$, $(A \cap B)' = A' \cup B'$\
**Sets:** disjoint = mutually exclusive; $A \cap B \subset A \subset A \cup B$; $P(A \cap B') = P(A) - P(A \cap B)$\
**Careful:** $P(A \mid B) \ne P(B \mid A)$, but $P(A' \mid B) = 1 - P(A \mid B)$\
**Three events:** $P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(A \cap C) - P(B \cap C) + P(A \cap B \cap C)$

## 4. Discrete random variables

**PMF:** $f(x) = P(X = x)$, $f(x) \ge 0$, $\displaystyle\sum_x f(x) = 1$\
**CDF** (steps): $F(x) = P(X \le x)$, $P(a < X \le b) = F(b) - F(a)$\
**pmf from CDF:** $f(x) = F(x) - F(x^-)$, the jump at $x$\
**< vs ≤** (integer $X$): $P(X < x) = F(x - 1)$, $P(X \ge x) = 1 - F(x - 1)$, $P(a \le X \le b) = F(b) - F(a - 1)$, $P(a < X < b) = F(b - 1) - F(a)$\
**Expectation:** $E[g(X)] = \displaystyle\sum_x g(x)f(x)$, so $E(X) = \displaystyle\sum_x x f(x)$\
**Variance:** $V(X) = E[(X - \mu)^2] = E(X^2) - [E(X)]^2$, $\sigma = \sqrt{V(X)}$\
**Linearity:** $E(aX + b) = aE(X) + b$, $V(aX + b) = a^2 V(X)$ (any $X$, continuous too)\
**Independent $X, Y$:** $E(XY) = E(X)E(Y)$, $V(X \pm Y) = V(X) + V(Y)$ (both +)\
**Chebyshev** (any $X$, $k > 1$): $P(|X - \mu| < k\sigma) \ge 1 - \frac{1}{k^2}$, so $P(|X - \mu| \ge k\sigma) \le \frac{1}{k^2}$; $k$ SDs from the mean $= \mu \pm k\sigma$

## 5. Discrete distributions

Identify by **what is fixed vs what is counted**, and **with or without replacement**.

| Distribution | $f(x)$ | $E(X)$ | $V(X)$ |
|---|---|---|---|
| **Discrete Uniform$(k)$**<br>$k$ equally likely values | $f(x_i) = \frac{1}{k}$ | $\frac{1}{k}\sum_{i=1}^{k} x_i$ | $\frac{1}{k}\left(\sum_{i=1}^{k} x_i^2\right) - \mu^2$ |
| **Bernoulli$(p)$**<br>one trial, success 0/1 | $p^x q^{1-x}$ | $p$ | $pq$ |
| **Binomial$(n, p)$**<br>fix **$n$ trials**, count successes | $\binom{n}{x} p^x q^{n-x}$ | $np$ | $npq$ |
| **Geometric$(p)$**<br>fix **1 success**, count trials | $q^{x-1} p$ | $\frac{1}{p}$ | $\frac{q}{p^2}$ |
| **Neg. Binomial$(k, p)$**<br>fix $k$ successes, count trials | $\binom{x-1}{k-1} p^k q^{x-k}$ | $k\left(\frac{1}{p}\right)$ | $k\left(\frac{q}{p^2}\right)$ |
| **Hypergeometric$(N, K, n)$**, deck $(S, F, n)$<br>$n$ draws, **no replacement** | $\dfrac{\binom{K}{x}\binom{N-K}{n-x}}{\binom{N}{n}}$ | $n\frac{K}{N}$ | $n\frac{K}{N}\left(1 - \frac{K}{N}\right)\frac{N-n}{N-1}$ |
| **Poisson$(\lambda)$**<br>fix an interval, count events | $\frac{e^{-\lambda}\lambda^x}{x!}$ | $\lambda$ | $\lambda$ |

**How they connect:**\
**Bernoulli → Binomial:** $n$ Bernoulli$(p)$ summed; Bernoulli is Binomial with $n = 1$\
**Geometric → Neg. Binomial:** Geometric is NegBin with $k = 1$; both count **trials**, so $X$ starts at $k$\
**Binomial → Hypergeometric:** no replacement, so draws depend on each other: factor $\dfrac{N-n}{N-1}$\
**Binomial → Poisson:** $n \ge 20$, $p \le 0.05$: $\lambda = np$\
**Poisson rate scales:** an interval $t$ times longer has $\lambda \to t\lambda$\
**Geometric tail:** $P(X > x) = q^x$, $F(x) = 1 - q^x$\
**Binomial vs Geometric:** Binomial fixes trials, counts successes; Geometric fixes 1 success, counts trials

## 6. Continuous random variables

| | **Any continuous** $X$ |
|---|---|
| Area | $P(a < X < b) = \int_a^b f(x)\\,dx$; total area $= 1$; $P(X = a) = 0$, so $<$ and $\le$ agree |
| CDF | $F(x) = \int_{-\infty}^{x} f(t)\\,dt$; $f(x) = F'(x)$ |
| E, V | $E[g(X)] = \int g(x)f(x)\\,dx$; $V(X) = E(X^2) - [E(X)]^2$ |
| Integrals | $\int k\\,dx = kx$, $\int x^n\\,dx = \frac{x^{n+1}}{n+1}$ ($n \ne -1$), $\int e^{-\lambda x}dx = -\frac{1}{\lambda}e^{-\lambda x}$; top minus bottom; $e^{-\infty} = 0$ |

| | **Uniform** $U(a, b)$ |
|---|---|
| $f(x)$ | $\begin{cases} \frac{1}{b-a}, & a \le x \le b \\\\ 0, & \text{otherwise} \end{cases}$ |
| CDF, tail | $F(x) = \frac{x-a}{b-a}$, $P(X > x) = \frac{b-x}{b-a}$ |
| Range | $P(c < X < d) = \frac{d-c}{b-a}$: width wanted ÷ total width |
| E, V | $\frac{a+b}{2}$, $\frac{(b-a)^2}{12}$ |

| | **Exponential** $\text{Exp}(\lambda) = \text{Exponential}\left(\frac{1}{\mu}\right)$ |
|---|---|
| Rate | $\lambda = \frac{1}{\mu}$: the bracket holds the rate; the mean is $\mu = \frac{1}{\lambda}$ |
| $f(x)$ | $\begin{cases} \lambda e^{-\lambda x} = \frac{1}{\mu}e^{-\frac{x}{\mu}}, & x > 0 \\\\ 0, & \text{otherwise} \end{cases}$ |
| CDF, tail | $F(x) = 1 - e^{-\lambda x}$, $P(X > x) = e^{-\lambda x}$ |
| Range | $P(a < X < b) = e^{-\lambda a} - e^{-\lambda b}$ (the 1s cancel) |
| E, V | $\frac{1}{\lambda} = \mu$, $\frac{1}{\lambda^2} = \mu^2$ |
| Memoryless | $P(X > s + t \mid X > s) = P(X > t)$ |
| Units | $x$ in the rate's unit first (15 min $= \frac{1}{4}$ h if the rate is per hour) |

| | **Normal** $N(\mu, \sigma^2)$ |
|---|---|
| $f(x)$ | $\frac{1}{\sqrt{2\pi}\sigma}\exp\left(-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2\right)$ |
| CDF, tail | $F(x) = \Phi\left(\frac{x-\mu}{\sigma}\right)$, $P(X > x) = 1 - \Phi\left(\frac{x-\mu}{\sigma}\right)$ |
| Range | $P(a < X < b) = \Phi\left(\frac{b-\mu}{\sigma}\right) - \Phi\left(\frac{a-\mu}{\sigma}\right)$ |
| E, V | $\mu$, $\sigma^2$ |
| Step 1, SD | $\sigma = \sqrt{\text{var}}$: $N(30, 16)$ gives $\sigma = 4$ (*standard deviation 4* is already $\sigma$) |
| Step 2, z | $z = \dfrac{x - \mu}{\sigma}$, your number first: $\frac{26 - 30}{4} = -1$, below the mean is negative |
| Step 3, $\Phi$ | $\Phi(z) = P(Z \le z)$, the area LEFT of $z$; $\Phi(0) = 0.5$; $\Phi(-z) = 1 - \Phi(z)$ |
| Check | the lower $x$ gives the lower $z$; left number bigger means a sign is flipped |
| Empirical | $P(-1 < Z < 1) = 0.6827$, $P(-2 < Z < 2) = 0.9545$, $P(-3 < Z < 3) = 0.9973$ |
| Inverse | $x = \mu + z\sigma$; $P(Z > z_{\alpha}) = \alpha$, so the top-$\alpha$ cut-off is $\mu + z_{\alpha}\sigma$; $P(-a < Z < a) = 2\Phi(a) - 1$ |
| Approx. Binomial | $npq \ge 5$: $X \approx N(np, npq)$; $P(X = k) \approx P(k - \frac12 < Y < k + \frac12)$, $P(X \le c) \approx P(Y < c + \frac12)$, $P(X \ge c) \approx P(Y > c - \frac12)$ |
