---
title: "Build or Buy: the Crossover Hiding Under a Business-School Checklist"
slug: "build-vs-buy"
date: 2026-06-29T12:59:49+08:00
subtitle: "A research note on the break-even maths behind make-versus-buy, and when a checklist is really just a line crossing another line"
description: "A research note on the build-versus-buy decision: the fixed-versus-recurring cost crossover that sets the break-even horizon, why cost alone never decides it, and the NUS LMS story as a worked case."
tags:
  - build-vs-buy
  - economics
  - decision-making
  - break-even
  - TCX2005
  - NUS
  - research
categories:
  - ["Education", "Economics"]
keywords:
  - build versus buy
  - make or buy
  - break-even analysis
  - total cost of ownership
  - saas versus in-house
  - fixed and recurring cost
image: ""
comments: true
draft: false
---

> i learnt the build-versus-buy framework in my NUS information systems module ([TCX2005, on the progress page]({{< ref "nus-progress" >}})). the business-school version is a checklist of considerations, which is useful but feels like a lot of words. underneath it is a much smaller idea: one cost line crossing another. i had my AI help me turn the checklist back into that picture and draw the crossover. the personal note at the bottom is mine to write after.

## the question

you need a piece of software (or a kitchen, or a skill, or a website). do you **build** it yourself, or **buy** something that already exists?

the textbook answer is a checklist: strategic value, resources, market solutions, risk, compliance, time. all real. but a checklist hides the one number that actually moves first, so let us find that number, then put the checklist back on top.

## it is two cost shapes, and they cross

the two options have different cost *shapes*, not just different totals.

a quick key:

| symbol | what it means |
|---|---|
| $F$ | the fixed cost of building: the big one-off to develop it yourself |
| $m$ | build's running cost per period (maintenance, hosting, the one engineer who knows how it works) |
| $s$ | buy's running cost per period (the subscription, the per-seat licence) |
| $t$ | time, in periods you keep using the thing |

**build** is a large lump now, then a small trickle: $F + m\,t$. **buy** is nothing now, then a steady meter running: $s\,t$. one starts high and barely rises; the other starts at zero and climbs forever. so they cross. set them equal and solve for the moment they do:

$$ F + m\,t = s\,t \quad\Rightarrow\quad t^{\ast} = \frac{F}{s - m} $$

that $t^{\ast}$ is the whole decision in one symbol: the **break-even horizon**. plan to use the thing for less time than that and buying is cheaper; plan to keep it longer and building wins. with a 100k build, 10k a year to keep it alive, and a 35k a year subscription, the lines cross at four years:

<figure style="margin:1.6rem 0">
<svg viewBox="0 0 620 360" role="img" aria-label="Build versus buy: where the two cost lines cross" style="width:100%;max-width:620px;height:auto;font-family:inherit;display:block;margin:0 auto">
<text x="310" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">Build versus buy: where the two cost lines cross</text>
<line x1="60" y1="312.0" x2="596" y2="312.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="52" y="316.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="60" y1="242.5" x2="596" y2="242.5" stroke="currentColor" stroke-opacity="0.10"/>
<text x="52" y="246.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">70</text>
<line x1="60" y1="173.0" x2="596" y2="173.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="52" y="177.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">140</text>
<line x1="60" y1="103.5" x2="596" y2="103.5" stroke="currentColor" stroke-opacity="0.10"/>
<text x="52" y="107.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">210</text>
<line x1="60" y1="34.0" x2="596" y2="34.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="52" y="38.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">280</text>
<line x1="60.0" y1="312" x2="60.0" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="60.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="194.0" y1="312" x2="194.0" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="194.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">2</text>
<line x1="328.0" y1="312" x2="328.0" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="328.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">4</text>
<line x1="462.0" y1="312" x2="462.0" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="462.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">6</text>
<line x1="596.0" y1="312" x2="596.0" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="596.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">8</text>
<line x1="60" y1="34" x2="60" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="60" y1="312" x2="596" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<text x="328" y="354" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85">years you keep using it</text>
<text x="14" y="173" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85" transform="rotate(-90 14 173)">cumulative cost (thousands)</text>
<line x1="328.0" y1="40" x2="328.0" y2="312" stroke="currentColor" stroke-width="1.4" stroke-opacity="0.5" stroke-dasharray="5 4"/>
<path d="M 60.0 212.7 L 596.0 133.3" fill="none" stroke="#3b82f6" stroke-width="2.8" stroke-linecap="round"/>
<path d="M 60.0 312.0 L 596.0 34.0" fill="none" stroke="#f97316" stroke-width="2.8" stroke-linecap="round"/>
<circle cx="328.0" cy="173.0" r="4" fill="currentColor"/>
<text x="320.0" y="163.0" text-anchor="end" font-size="11.5" fill="currentColor" fill-opacity="0.85">break-even: 4 years</text>
<text x="147.1" y="108.5" text-anchor="start" font-size="11.5" fill="#f97316">buy is cheaper</text>
<text x="488.8" y="192.9" text-anchor="start" font-size="11.5" fill="#3b82f6">build is cheaper</text>
<line x1="95" y1="250" x2="117" y2="250" stroke="#3b82f6" stroke-width="2.8"/>
<text x="123" y="254" font-size="12" fill="currentColor" fill-opacity="0.9">build: 100 upfront + 10/yr</text>
<line x1="95" y1="268" x2="117" y2="268" stroke="#f97316" stroke-width="2.8"/>
<text x="123" y="272" font-size="12" fill="currentColor" fill-opacity="0.9">buy: 35/yr subscription</text>
</svg>
<figcaption style="text-align:center;font-size:0.85rem;opacity:0.7;margin-top:0.5rem">Build is a lump now and a trickle after; buy is a meter that never stops. Before the break-even horizon, the meter is cheaper. After it, the lump was. The only inputs are how big the lump is and how fast the meter runs.</figcaption>
</figure>

notice this is the same machinery as the [marginal-cost note]({{< ref "marginal-cost-and-sunk-cost" >}}): a fixed cost is only ever expensive *per unit of use* when you do not use it much. stretch $F$ over a long enough horizon and it stops mattering, which is exactly why long-lived, heavily-used systems drift towards build, and short-lived or lightly-used ones stay bought.

## cost is the first word, not the last

the crossover tells you *when* the money flips. it does not tell you whether money should decide. three things can override it:

- **strategic value.** if the thing is your actual edge, the part competitors cannot copy, you build it even when buying is cheaper, because the point was never to save money. if it is plumbing everyone has (email, payroll, an office suite), you buy it even when building looks close, because owning plumbing wins you nothing.
- **risk and compliance.** a mature vendor has already paid for the reliability, the security, and the regulatory box-ticking (PDPA, GDPR, and friends). building means buying all of that yourself, in time and in liability.
- **time.** the crossover assumes you *can* build. if the market window closes before your version ships, the cheaper line on the chart is irrelevant.

a clean way to hold all of this at once is to sort the task: is it **strategic** (your edge, lean build), **critical** (must not fail, but standard, lean buy the proven thing), or **routine** (commodity, buy the cheapest that works)? the cost crossover then decides the close calls *within* a bucket, not across them.

## a real one: how NUS stopped building its own

the cleanest case is one i am literally sitting inside. NUS ran its own learning platform for two decades: IVLE from 1999, then a second in-house build, LumiNUS. both were built. in 2022 it gave up and moved everyone to Canvas, a SaaS product the rest of the world already uses.

nothing about the maths changed; what changed was the *answer to the checklist*. a learning-management system stopped being a place NUS could out-compete anyone, so its strategic value fell to zero. once it was plumbing, the only question left was the crossover, and an off-the-shelf subscription beat paying engineers to maintain a bespoke platform forever. build to buy, exactly when the thing stopped being your edge.

## why this is not really about software

the shape is everywhere you spend. cooking versus eating out: the kitchen is $F$, each restaurant meal is $s$. learning a skill versus hiring it out. owning a car versus grabbing one. self-hosting versus paying for the service. the question is always the same two-parter: **how long will i lean on this, and is doing it myself actually my edge?** if the honest answers are "not long" and "no", buy it and feel nothing. if they are "for years" and "yes", that is the rare case worth building, and the upfront cost was never the real number.

there is one exception that swallows the whole chart: if the thing you would be building is a network, the cost lines stop mattering. [an existing network's head start is its own kind of moat]({{< ref "network-effects" >}}), and rebuilding it from zero means dragging a cold network all the way to critical mass while the incumbent sits comfortably past it. that is the most expensive build there is, which is why you almost always buy into the network rather than recreate it.

## a personal note

wip ...

## sources and further reading

- raymond mcleod & george schell, *management information systems*, and laudon & laudon, *managing the digital firm*: the textbook framing of make-versus-buy and the acquisition process (RFP and all).
- my [marginal cost and sunk cost note]({{< ref "marginal-cost-and-sunk-cost" >}}): where the fixed-versus-variable cost machinery under this crossover comes from.
- my [network effects note]({{< ref "network-effects" >}}): the one case where the crossover stops mattering, because an existing network is the most expensive thing to rebuild.
- [my NUS progress page]({{< ref "nus-progress" >}}): the module (TCX2005) this came out of.
