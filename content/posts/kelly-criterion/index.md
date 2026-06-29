---
title: "Kelly Criterion: How Much to Bet When You Think You Have an Edge"
slug: "kelly-criterion"
date: 2026-06-12T22:00:08+08:00
subtitle: "A research note on position sizing, the 2x Kelly cliff, and why everyone bets half"
description: "A research note on the Kelly criterion: where the formula comes from, why betting twice Kelly earns you nothing, the drawdown maths of fractional Kelly, and why full Kelly is unusable in real markets."
tags:
  - kelly-criterion
  - probability
  - risk-management
  - position-sizing
  - investing
  - research
categories:
  - ["Education", "Mathematics"]
keywords:
  - kelly criterion
  - kelly formula
  - fractional kelly
  - position sizing
  - bankroll management
  - ed thorp
  - drawdown probability
image: ""
comments: true
draft: false
---

> i ran into the kelly formula on social media, asked my AI to teach me, then had it dispatch a fleet of fact-checking agents to verify every number below against thorp's papers and the original 1956 paper. one thing it taught me in chat turned out to be subtly wrong, which is exactly why this note exists.

> 🚧 **reading status: not done.** i've been taught this once and skimmed it once. future me: come back, work through the maths by hand, and tick the checklist at the bottom. until then, treat my own understanding here as unverified, even though the facts themselves are checked.

## the question kelly actually answers

you have a bet with an edge. you get to repeat it many times, profits roll back into the bankroll. how much do you put in each time?

the naive answer is "maximise expected wealth", and it is a trap. expected value is linear, so maximising $E[W]$ tells you to bet everything every round. do that repeatedly and you go broke with probability one (kelly says exactly this on p. 918 of the original paper). the expectation is propped up by an astronomically lucky path you will never live.

kelly's move (bell labs, 1956) was to maximise $E[\log W]$ instead, which is the same as maximising the long-run compound growth rate. (*why* the log specifically, and not the raw average, is the honest thing to maximise is its own note: [the expected value is a path almost nobody actually lives]({{< ref "ergodicity" >}}).) for a bet where you win $b$ per $1 staked with probability $p$ (lose the stake with probability $q = 1-p$), each round grows your log-wealth by

$$ g(f) = p\ln(1+bf) + q\ln(1-f) $$

take the derivative, set it to zero:

$$ f^{\ast} = \frac{bp-q}{b} = p - \frac{q}{b} $$

the second form is the one to remember: **win rate, minus loss rate divided by the odds.**

## full kelly is more aggressive than you think

plug in numbers that sound conservative: 70% win rate, 1.5:1 payoff.

$$ f^{\ast} = 0.7 - \frac{0.3}{1.5} = 0.5 $$

half your bankroll. on one trade. the formula is not shy, and that is the first hint that nobody should run it raw.

## the 2x kelly cliff

here is the property that makes kelly worth learning even if you never bet. the growth curve $g(f)$ is a hill with its peak at $f^{\ast}$, and in the continuous approximation (and with no risk-free rate) it is exactly parabolic. betting a fraction $c$ of full kelly gets you

$$ \text{growth share} = 2c - c^{2} $$

| fraction of kelly | share of max growth |
|---|---|
| 0.25x | 44% |
| 0.5x | **75%** |
| 1x | 100% |
| 1.5x | 75% |
| **2x** | **0%** |
| >2x | negative |

at exactly twice kelly your excess growth rate is zero. you took on all that risk to compound at the risk-free rate. beyond 2x, the growth rate goes negative and your wealth shrinks towards zero almost surely, **even though the strategy has a genuine edge** and even though $E[W]$ is still going up. the average is rising while almost every actual path dies. concrete discrete example: a 60% coin at even odds has $f^{\ast} = 0.2$ and grows about 2.0% per round; bet 0.4 instead and you grind down at about minus 0.2% per round.

## drawdowns: the part that converts people to half kelly

thorp's survey has a remarkably clean set of results for full kelly (continuous approximation, no risk-free rate):

- the probability your bankroll **ever** falls to a fraction $x$ of where it is now is just $x$. a 50% chance of halving at some point. a 10% chance of being down 90% at some point.
- the probability you halve before you double is **1/3**.

at a fraction $c$ of kelly, the ever-drop-to-$x$ probability becomes $x^{2/c - 1}$. at half kelly that is $x^{3}$: the chance of ever halving drops from 50% to **12.5%**, and halve-before-double drops from 1/3 to 1/9.

so half kelly trades 25% of the growth for roughly a 4x improvement in the disaster odds. that trade is so lopsided that "half kelly" is basically the practitioner default.

## where my AI taught me wrong (and the fact-check caught it)

in chat i was told the classic line: "the penalty for over-betting is steeper than for under-betting, that is why you go fractional." the agents checked it against thorp and it is **false in the continuous model**: the growth parabola is symmetric, so 0.5x and 1.5x kelly both earn exactly 75% of max growth.

the asymmetry is real but it lives in the consequences, not the slope:

1. only the over side has a cliff. every $f$ below $f^{\ast}$ still grows; past $2f^{\ast}$ you are in almost-sure-ruin territory. if you over-estimate your edge, only one direction can kill you.
2. variance rises monotonically with $f$. betting 1.5x kelly gives the same growth as 0.5x but strictly more pain, so over-betting is dominated. there is never a reason to be on the right side of the peak.
3. in the discrete setting (real bets, not the smooth approximation) the curve genuinely is steeper above $f^{\ast}$, because $\ln(1-f)$ blows up as you approach betting everything. thorp himself writes that over-betting is "much more severely penalized" in his sports betting section.

so the folk wisdom lands in the right place with the wrong proof. good reminder that plausible-sounding maths from an AI (or a screenshot) deserves a fact-check pass.

## why you cannot run this in markets

for continuous returns (a stock, roughly geometric brownian motion) the kelly fraction becomes

$$ f^{\ast} = \frac{\mu - r}{\sigma^{2}} $$

excess return over variance, the same form as merton's portfolio share under log utility. plug in long-run us equity numbers, about 5% excess return and 16% volatility: $0.05 / 0.0256 \approx 2$. raw kelly tells you to run **2x levered long equities**. the formula is screaming its own weakness: $f^{\ast}$ is hypersensitive to $\mu$, and $\mu$ is the thing nobody can estimate.

in blackjack, $p$ and $b$ are counted from the deck. in markets:

- there is no fixed $p$ and $b$. you estimate them from history, and the process is non-stationary.
- backtested win rates are systematically inflated by overfitting and selection bias (see bailey and lópez de prado on the deflated sharpe ratio), so your estimated $p$ is biased exactly in the direction that pushes you over the cliff.
- kelly assumes you know the distribution. fat tails plus leverage means one event you did not model can end you regardless of what the formula said.

the cautionary tale everyone reaches for is LTCM (1998). thorp's framing, from his lectures: their approach was the "anti-kelly", massive leverage to "pick up nickels in front of a bulldozer", with little true edge underneath, which makes any sizeable position over-kelly by definition. honest caveat from the fact-check: thorp said this in talks, not in his written papers, and the mainstream post-mortems blame model risk and liquidity spirals rather than kelly arithmetic. "they died of over-betting" is the kelly community's lens, not the consensus explanation. both can be true.

## history, one paragraph

john l. kelly jr. published "a new interpretation of information rate" at bell labs in 1956. the original framing is a gambler with a private wire: under fair odds, the maximum growth rate of his bankroll equals the information rate of the channel, a direct bridge between shannon's information theory and money (in general the channel's information rate is the *increase* in growth it buys you). ed thorp took it to blackjack in *beat the dealer*, then to markets at princeton newport partners, and wrote the canonical practitioner treatment. poundstone's *fortune's formula* is the popular history of the whole cast.

## what i actually take from this

1. **no edge, no bet.** if $f^{\ast} \le 0$, the formula says the correct position is zero. an unverified edge is not an edge, so for me, right now, kelly's prescription for trading is exactly 0.
2. **if i ever do have a verified edge, bet a quarter to a half of kelly.** the 75%-growth-for-4x-safety trade is the whole lesson.
3. **the deepest transferable idea**: over-committing past your true edge does not just cost you, it can flip a winning game into a losing one. under-committing only costs you some upside. when the inputs are estimates, that one-sided cliff is the argument for leaving margin.
4. the framework still prices my non-market bets. the highest $p$, highest $b$ wager available to me is career capital, and it has no ruin branch. that is the one to size up.

## references (all live-verified)

- kelly (1956), [a new interpretation of information rate](https://www.princeton.edu/~wbialek/rome/refs/kelly_56.pdf): the original paper, 10 pages, surprisingly readable.
- thorp (2006), [the kelly criterion in blackjack, sports betting, and the stock market](https://gwern.net/doc/statistics/decision/2006-thorp.pdf): the practitioner bible; section 7 has every drawdown formula quoted above.
- maclean, thorp & ziemba (2010), [good and bad properties of the kelly criterion](https://www.stat.berkeley.edu/~aldous/157/Papers/Good_Bad_Kelly.pdf): short and canonical on full vs fractional.
- poundstone (2005), [fortune's formula](https://archive.org/details/fortunesformulau00poun): the popular history (shannon, kelly, thorp, and the mob).

## reading checklist (for future me)

- [ ] re-derive $f^{\ast} = p - q/b$ by hand from $g(f)$
- [ ] verify the $2c - c^{2}$ growth-share claim by differentiating the continuous growth rate
- [ ] read thorp (2006) section 7 properly, especially eq. 7.10 to 7.13 (the drawdown formulas)
- [ ] read kelly (1956) end to end
- [ ] read the good/bad properties paper
- [ ] decide: do i ever want to measure a real edge (paper-trade journal), or is conclusion #1 final

<!-- TODO(human): after actually working through the maths, write your own one-paragraph takeaway here. the post above is the taught version; this slot is for the understood version. -->
