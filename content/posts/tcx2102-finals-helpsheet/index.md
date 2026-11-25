---
title: "TCX2102 | Probability & Statistics Finals Helpsheet"
slug: "nus-bit-tcx2102-finals-helpsheet"
date: 2026-11-25T16:56:28+08:00
description: "One A4, both sides, for a probability and statistics final: name the distribution, approximations, the sample mean, confidence intervals, z and t tests, errors and power."
tags: ["nus", "probability", "statistics", "helpsheet", "tcx2102", "finals"]
categories:
  - ["Education", "NUS BIT", "TCX2102"]
toc: true
math: true
draft: false
sheet: helpsheet
sheetCols: 2
sheetFont: "9.2pt"
sheetMath: "1.1em"
---

<style>@page { size: A4; margin: 5mm; } @media print { .main-article td:first-child, .main-article th:first-child { white-space: normal !important; width: auto !important; } .main-article .table-wrapper, .main-article table { break-inside: auto !important; } .main-article ul { padding-left: 11px !important; } .main-article li::marker { font-size: 8pt !important; } .article-content h2 { font-size: 10pt !important; } }</style>

## 1.1 Events

- **One go** = one card, one roll: the same moment, no next roll. Deck = 52 cards, 4 suits × 13, one card has one suit

- **Mutually exclusive (ME)**: can A and B both be yes at the same moment?
  - **Yes**: not ME, $P(A \cap B) \ne 0$. Then $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
  - **No**: ME, $P(A \cap B) = 0$. Then $P(A \cup B) = P(A) + P(B)$
- **Independent**: told A is yes, does B's chance change?
  - **Yes**: dependent, $P(A)P(B) \ne P(A \cap B)$
  - **No**: independent, $P(A)P(B) = P(A \cap B)$
- **ME means dependent** (unless $P(A)$ or $P(B) = 0$). **True**: "If A and B are ME, they are dependent". **False**: "… ME, they are independent", "… independent, they are ME". 1 roll, 3 & 4: ME, dependent. 2 dice, 6 & 6: independent
- **Trees**: × along a path, + across paths. Each point's branches add to 1

## 1.2 Counting

- **n** = how many to choose from (digits 0 to 9: $n = 10$). **r** = how many picked (gold, silver, bronze: $r = 3$)
- **Order matters?** Swap two picked: a different result?
  - **Yes**: ${}^nP_r$ (rank, arrange, 1st/2nd/3rd)
  - **No**: $\binom{n}{r}$ (team, committee, hand)

| Keywords | Do |
|---|---|
| how many ways | a count: a whole number, never ÷ |
| probability, P(...) | ways it happens ÷ all ways |
| and (2 men and 3 women) | multiply: $\binom{5}{2}\binom{6}{3}$. Example ♥7 ♥2 ♥K: suit (4) × which 3 of it $\binom{13}{3}$ |
| or (all red or all blue) | add if they can't both happen. Else heart or king: 13 + 4 − 1 |
| exactly 2 red, a prize = exactly 1 | 2 of the red × the rest from the others |
| at least one | 1 − none (die 3 times: ${1 - (5/6)^3}$) |
| all different | 3 dice: 6 × 5 × 4, not 1 − all same |
| at most 2 | add 0, 1 and 2 |
| at once, without replacement | no repeats: $\binom{n}{r}$ |
| put back, with replacement, PIN | repeats: $n^r$, $n$ = results each (4 coins $2^4$, 3 dice $6^3$). How many: Binomial, not C |
| only right (East) or up (North) on a grid | $a$ rights and $b$ ups in any order: $\binom{a+b}{a}$. Avoid point W: total − (start to W) × (W to end) |

## 2.1 f, F, E, V, SD, joint pmf

<table>
<colgroup><col style="width:17%"><col style="width:38%"><col style="width:45%"></colgroup>
<tr><td><b>F</b></td><td>cumulative distribution function</td><td>$P(X \le x)$, a staircase</td></tr>
<tr><td><b>f</b></td><td>probability distribution</td><td>steps: $x$ where it steps up, $f(x)$ = height</td></tr>
<tr><td><b>E(X), $\mu$</b></td><td>expected value / number of …, mean, 1st moment</td><td>$\sum x\, f(x)$. Named $X$: 2.2</td></tr>
<tr><td><b>E(X²)</b></td><td>2nd moment</td><td>$\sum x^2 f(x)$</td></tr>
<tr><td><b>V(X), $\sigma^2$</b></td><td>variance</td><td>$E(X^2) - [E(X)]^2$, after both above</td></tr>
<tr><td><b>SD, $\sigma$</b></td><td>standard deviation</td><td>$\sqrt{V(X)}$, never $\sqrt{E(X)}$, and ≤ (max − min)/2</td></tr>
<tr><td><b>E[g(X)]</b></td><td>g = inside E[ ]: $x$, $x^2$, $xy$</td><td>$\sum g(x) f(x)$, no ÷</td></tr>
</table>

<table>
<thead><tr><th>$x$ (also $g$ for $E(X)$): the values</th><th>0</th><th>1</th><th>2</th></tr></thead>
<tr><td>$f(x)$: chance 0 to 1, adds to 1</td><td>0.1</td><td>0.6</td><td>0.3</td></tr>
<tr><td>$F(x)$: running total</td><td>0.1</td><td>0.7</td><td>1</td></tr>
<tr><td>$g = x^2$, for $E(X^2)$</td><td>0</td><td>1</td><td>4</td></tr>
<tr><td colspan="4"><b>Worked</b>: $E(X)$ = 0(0.1) + 1(0.6) + 2(0.3) = 1.2<br>$E(X^2)$ = 0(0.1) + 1(0.6) + 4(0.3) = 1.8<br>$V$ = 1.8 − 1.44 = 0.36, SD = 0.6<br>$F(x)$ = 0 ($x \lt 0$), 0.1 ($0 \le x \lt 1$), 0.7 ($1 \le x \lt 2$), 1 ($x \ge 2$)</td></tr>
</table>

<table>
<colgroup><col style="width:28%"><col style="width:72%"></colgroup>
<thead><tr><th colspan="2">Joint table given ($X$ across, $Y$ down)</th></tr></thead>
<tr><td>$f(x, y)$</td><td>one cell</td></tr>
<tr><td>$f_X$, $f_Y$</td><td>column sums, row sums</td></tr>
<tr><td>$P(X = Y)$</td><td>add the cells where $x = y$</td></tr>
<tr><td>$E(XY)$</td><td>$xy$ × every cell, then add</td></tr>
<tr><td>Independent?</td><td>EVERY cell = its column sum × its row sum. One cell off → dependent. Cov 0 proves nothing</td></tr>
</table>

## 2.2 Name it, mean, variance, chance


<table style="table-layout:fixed;width:100%">
<colgroup><col style="width:18%"><col style="width:57%"><col style="width:10%"><col style="width:15%"></colgroup>
<thead><tr><th>Keywords</th><th>Name, what $X$ is</th><th>E(X)</th><th>V(X)</th></tr></thead>
<tr><td colspan="4"><b>Discrete</b>, $X$ = a count. $P(X = 3)$: put 3 for every $x$ below, never the box size</td></tr>
<tr><td>$n$ tries, put back, with replacement</td><td>Binomial$(n, p)$: $X$ = successes<br>$n$ = draws, not the box</td><td>$np$</td><td>$npq$</td></tr>
<tr><td>at once, not put back, without replacement</td><td>Hypergeo$(S, F, n)$: $X$ = count in hand<br>$P(X = x) = \binom{S}{x}\binom{F}{n-x}/\binom{N}{n}$<br>$N = S + F$ (THIS box), $n$ = hand. Tops add to $N$, bottoms to $n$</td><td>$nS/N$</td><td><span style="display:block;padding:3px 0 9px">$n \dfrac{S}{N} \dfrac{F}{N}$</span>$\times \dfrac{N-n}{N-1}$</td></tr>
<tr><td>until the 1st</td><td>Geometric$(p)$: $X$ = draw of the 1st success<br>$P(X = x) = q^{x-1}p$, <span style="white-space:nowrap">$P(X > x) = q^x$</span></td><td>$1/p$</td><td>$q/p^2$, $q = 1 - p$</td></tr>
<tr><td>until the 3rd</td><td>NegBin$(k, p)$: $k$ = successes waited for, $X$ = draw of the <span style="white-space:nowrap">$k$th</span><br>$P(X = x) = \binom{x-1}{k-1}p^k q^{x-k}$</td><td>$k/p$</td><td>$kq/p^2$</td></tr>
<tr><td>per hour, next 5 min</td><td>Poisson$(\lambda)$: $X$ = count in a window<br>$\lambda$ = rate × window (2 per 10 min → 12 per hour)</td><td>$\lambda$</td><td>$\lambda$</td></tr>
<tr><td colspan="4"><b>Continuous</b>, $X$ = a time or a measurement. A chance is an area under the curve: get it from the formulas below, never by putting a number into the pdf $f(x)$ (only the curve's height). Point = 0, so $\lt$ same as $\le$</td></tr>
<tr><td rowspan="2">wait, lifetime</td><td>Exponential(rate): $X$ = a time<br>Bracket = rate = $1/\mu$, $\mu$ = minutes ÷ count<br>pdf $\frac{1}{\mu}e^{-x/\mu}$: read $\mu$ off it, nothing else</td><td>$\mu$</td><td>$\mu^2$</td></tr>
<tr><td colspan="3">More than or at least $x$: $P(X \gt x) = e^{-x/\mu}$<br>Within or at most $x$: <span style="white-space:nowrap">$F(x) = P(X \le x) = 1 - e^{-x/\mu}$</span><br>Between: $P(a \lt X \lt b) = e^{-a/\mu} - e^{-b/\mu}$<br>Given: $P(X \gt b \mid X \gt a) = e^{-(b-a)/\mu}$</td></tr>
<tr><td>equally likely</td><td>Uniform$(a, b)$: $X$ = a point<br>$P(X \gt c) = (b - c)/(b - a)$<br>$P(X \lt c) = (c - a)/(b - a)$<br>$P(c \lt X \lt d) = (d - c)/(b - a)$</td><td>$\dfrac{a+b}{2}$</td><td>$\dfrac{(b-a)^2}{12}$</td></tr>
<tr><td>mean and SD</td><td>Normal$(\mu, \sigma^2)$: $X$ = a measurement<br>Write $X \sim N(\mu, \sigma^2)$ first, $\sigma^2$ second, $\mu, \sigma$ from THIS question<br>Chance, one $X$: $z = (x - \mu)/\sigma$, then the z table (3.2)</td><td>$\mu$</td><td>$\sigma^2$</td></tr>
</table>

## 2.3 Approximations

<table>
<thead><tr><th>Only if approximate: Binomial to</th><th>Check</th><th>Then</th></tr></thead>
<tr><td>Poisson, discrete</td><td>$n \ge 20$, $p \le 0.05$ (or $n \ge 100$, $np \le 10$)</td><td>$\lambda = np$</td></tr>
<tr><td>Normal, continuous</td><td>$npq \ge 5$</td><td>$N(np, npq)$, then $z = \dfrac{\text{edge} - np}{\sqrt{npq}}$</td></tr>
<tr><td colspan="3">Normal only: edge = halfway between last wanted and first unwanted. At most 110: Y &lt; 110.5, at least 110: Y &gt; 109.5</td></tr>
</table>

<div style="break-before:page;column-span:all">

## 3.2 Tables

- **z table** (right tail): edges = $z$, inside = share ABOVE. Backward: share inside, $z$ off the edges
- **Shaded includes the mean?** yes: 1 − table. No: table. Negative $z$ mirrors
- **Between**: opposite sides: 1 − both tails. Same side: bigger − smaller. **Outside** a range: left tail + right tail
- **Value** = $\mu + z\sigma$. Bottom group (lightest, lowest): $z$ negative, so the answer is below $\mu$. Top group: above $\mu$
- **Common z** (else the closest cell, a tie takes the middle): top 10% 1.28, 5% 1.645, 2.5% 1.96 (row 1.9, column .06), <span style="white-space:nowrap">1% 2.326</span>
- **t table**: rows = df ($n - 1$), heads = share above, cells = $t$.

## 3.3 Mean of a sample

**X̄** (mean amount of a group of $n$): $E(\bar X) = \mu$, $V(\bar X) = \sigma^2/n$, SD = SE = $\sigma/\sqrt{n}$. **Total** = $n$ × average. **Two means**: variances add

<table>
<colgroup><col style="width:45%"><col style="width:55%"></colgroup>
<tr><th>If possible: $X$ is</th><th>Write</th></tr>
<tr><td>normal, any $n$ (even $n = 2$)</td><td>Possible: $X$ is normal, so $\bar X$ is normal</td></tr>
<tr><td>not normal (uniform, exponential, …) or not stated, $n \ge 30$</td><td>Possible: $n \ge 30$, so by the CLT $\bar X$ is approx. normal</td></tr>
<tr><td>not normal or not stated, $n \lt 30$</td><td>Not possible: $X$ is not normal (or unknown) and $n \lt 30$, so no CLT</td></tr>
<tr><td colspan="2"><b>Possible, then</b>: $\bar X \sim N(\mu, \sigma^2/n)$, so $z = (\bar x - \mu)/(\sigma/\sqrt{n})$, then the z table</td></tr>
</table>

## 3.4 Confidence intervals, SE = standard error

<table>
<colgroup><col style="width:17%"><col style="width:83%"></colgroup>
<tr><td><b>CI</b></td><td>estimate ± multiplier × SE (one mean: the CI row of 4.2). $\alpha = 1 -$ level, $\alpha/2$ in each tail</td></tr>
<tr><td><b>Level → z</b></td><td>90% 1.645, 95% 1.96, 96% 2.054, 98% 2.326, 99% 2.576. Else α/2 in the z table (97%: 0.015 → 2.17)</td></tr>
<tr><td><b>Certain?</b></td><td>No, 95% of such intervals capture $\mu$</td></tr>
<tr><td><b>Size</b> $n$, round UP</td><td>$E$ = margin of error = multiplier × SE. Mean $(z\sigma/E)^2$, proportion $\hat p(1-\hat p)(z/E)^2$. <b>Width</b> = $2E$</td></tr>
<tr><td><b>Proportion</b>, always z</td><td>proportion of …: $\hat p = x/n$. Check $n\hat p(1-\hat p) \ge 5$ (then Normal). CI $\hat p \pm z\sqrt{\hat p(1-\hat p)/n}$</td></tr>
<tr><td><b>Proportion test</b></td><td>$z = (\hat p - p_0)/\sqrt{p_0(1-p_0)/n}$, $p_0$ in the SE</td></tr>
</table>

## 4.1 z or t?

| $\sigma$ known: normal, or $n \ge 30$ | $\sigma$ unknown, normal, $n < 30$ | $\sigma$ unknown, $n \ge 30$ | not normal, $n < 30$ |
|---|---|---|---|
| z | t, df $n - 1$ | z with $s$ | neither, not possible (3.3) |


## 4.2 CI or test

<table>
<thead><tr><th>Step</th><th colspan="4">Write</th></tr></thead>
<tbody>
<tr><td><b>1. givens</b></td><td colspan="4">$\mu_0$, $\bar x$ (this sample's mean, never $\mu$), $n$, α ("at 5%" = 0.05). $\sigma$ = SD of ALL, or $s$ = SD of the sample</td></tr>
<tr><td></td><td><b>z</b>: $\sigma$ given (or $n \ge 30$)</td><td><b>t</b>: $\sigma$ not given, $n \lt 30$, normal<br><b>Extra</b>: $s$ in place of $\sigma$, df $n - 1$</td><td><b>paired</b>: same people twice<br><b>Extra</b>: $d$ = one minus the other, per pair. $\mu_0 = 0$, never given</td><td><b>two groups</b>: separate people<br><b>Extra</b>: Check same spread, then $S_p^2$. No $\mu_0$ (H0 is $\mu_1 = \mu_2$)<br>Check: write both, larger $s^2$ ÷ smaller $s^2$ and larger $s$ ÷ smaller $s$. Both ≤ 2: "Yes, both ratios are not more than 2", pool, $S_p^2$. Both over 2: No, "unknown, unequal", $n \ge 30$. Only $s^2$ over 2: follow the $s$ ratio. Told "equal variances": just pool</td></tr>
<tr><td><b>CI</b> (asked for an interval: stop here)</td><td>${\bar x \pm z_{\alpha/2}\dfrac{\sigma}{\sqrt{n}}}$<br>$z_{\alpha/2}$ (list in 3.4):<br>95% = 1.96</td><td>${\bar x \pm t\,\dfrac{s}{\sqrt{n}}}$<br>t: row $n - 1$, column α/2</td><td>${\bar d \pm t\,\dfrac{s_d}{\sqrt{n}}}$<br>t: row $n - 1$</td><td>${(\bar x_1 - \bar x_2) \pm t\sqrt{S_p^2\left(\tfrac{1}{n_1}+\tfrac{1}{n_2}\right)}}$<br>t: row $n_1 + n_2 - 2$, column α/2 (all t rows)<br>Both $n \ge 30$: z in place of t</td></tr>
<tr><td><b>2. H0, H1</b></td><td colspan="4">H0: $\mu = \mu_0$, always "=" (it gives $z$ its number). $\mu$ = mean of ALL, never $\bar x$<br>$\mu_0$: one mean = the claimed number. Paired = 0 (no change). Two groups: H0 is $\mu_1 = \mu_2$<br>H1 = the question translated: "differs" $\ne$, "less" $\lt$, "more" $\gt$ (paired: in $d$'s order, two groups: $\mu_1$ against $\mu_2$)<br>"Is there evidence?" is step 5, not $\ne$</td></tr>
<tr><td><b>3. statistic</b></td><td>${z = \dfrac{\bar x - \mu_0}{\sigma/\sqrt{n}}}$</td><td>${t = \dfrac{\bar x - \mu_0}{s/\sqrt{n}}}$<br>df $n - 1$</td><td>${t = \dfrac{\bar d - 0}{s_d/\sqrt{n}}}$<br>df $n - 1$, $n$ = pairs<br>e.g. ${\dfrac{-1.2 - 0}{1.5/\sqrt{10}}}$</td><td>df $n_1 + n_2 - 2$<br>${S_p^2 = \dfrac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}}$<br>${t = \dfrac{\bar x_1 - \bar x_2}{\sqrt{S_p^2\left(\frac{1}{n_1}+\frac{1}{n_2}\right)}}}$</td></tr>
<tr><td><b>4. p-value</b></td><td>z table, exact (never $z$ or ${P(Z = z)}$)<br>H1 $\lt$: ${P(Z \lt z)}$<br>H1 $\gt$: ${P(Z \gt z)}$<br>H1 $\ne$: 2 × tail</td><td colspan="3">t table, row = df: the two columns around $|t|$ (heads printed "α" = one tail, a and b)<br>H1 $\lt$, $\gt$: a &lt; p &lt; b, smaller first<br>H1 $\ne$: 2a &lt; p &lt; 2b (0.01 to 0.025 gives 0.02 &lt; p &lt; 0.05)</td></tr>
<tr><td></td><td colspan="4"><b>Double only when H1 is ≠</b> (z and t alike). H1 &gt; or &lt;: one tail, as read</td></tr>
<tr><td><b>5. decide</b></td><td colspan="4">p &lt; α: Reject H0. There is evidence that [H1 in words]. <b>CI vs test</b>: $\mu_0$ outside the CI = reject<br>p &gt; α: Do not reject H0. Not enough evidence that [H1 in words]. Never "accept"<br>t: the whole p range vs α. The ends are never included, so $|t|$ past the α column (H1 $\ne$: the α/2 column) means p &lt; α</td></tr>
</tbody>
</table>


## 4.4 Errors and power

| Verdict | H0 really true | H0 really false ($\alpha$ down → $\beta$ up) |
|---|---|---|
| **Reject H0** (only Type I) | **Type I** (chance α) | correct (power = $1 - \beta$) |
| **Do not reject** (only Type II) | correct | **Type II** (chance β) |


</div>
