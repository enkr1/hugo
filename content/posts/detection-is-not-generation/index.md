---
title: "Detection Is Not Generation: Why a Polling Loop Runs at the Speed of Its Most Expensive Call"
slug: "detection-is-not-generation"
date: 2026-09-22T12:47:29+08:00
subtitle: "A research note on typed-judgment models, and the cost of asking one call to both notice a thing and write about it"
description: "A research note on System One models such as TypeSafe's Jev: what a typed-judgment primitive returns, why fusing detection and generation into one LLM call forces the cheap job to inherit the expensive job's cadence, and the trigger rate at which splitting them stops paying."
tags:
  - research
  - llm
  - architecture
  - classifiers
  - latency
  - cost
  - typesafe
categories:
  - ["Technology", "AI"]
keywords:
  - system one model
  - typed judgment
  - llm classifier
  - polling loop latency
  - inference cost
  - detection versus generation
  - calibrated confidence
image: ""
comments: true
draft: false
---

> someone sent me an install command for a skill called typesafe and i assumed from the name it was a typescript linting thing. it is not. it is a model that only answers multiple choice. reading its docs sent me somewhere more interesting than the tool itself, which is the shape of the loop it wants to sit in, so i had my AI pull the specs and help me work the maths out. i have not run it, and the note says so where it matters. the personal note at the bottom is mine to write after.

## tl;dr

a "System One" model returns typed answers (one of these options, yes or no, a number on this scale) instead of prose, in about 100ms. the interesting part is not that it is cheap. it is that most real-time LLM loops fuse two jobs into one call: **noticing** something is there, and **writing** about it. the noticing is cheap and must run constantly; the writing is expensive and should run rarely. fuse them and the cheap job inherits the expensive job's cadence, which is why so many "real-time" features are secretly a thirty-second timer. split them and the saving is $1/(k+p)$, where $k$ is how cheap your detector is and $p$ is how often a tick actually has something worth saying. the punchline is that $p$ dominates: if your trigger rate is high, splitting buys you almost nothing.

## the question

i got handed a one-line install command for something called the "typesafe" skill. the name suggested static typing. what it actually installs is a wrapper around a hosted model called **Jev**, and Jev does not write.

that was the interesting bit. we have spent three years treating "call an LLM" as one primitive. here is a thing that deliberately gives up the generation half, keeps the understanding half, and gets two orders of magnitude cheaper and roughly an order of magnitude faster in exchange. so: what is that trade actually good for, and where does it fall over?

## what it returns, which is the whole design

TypeSafe calls this class of thing a **System One model**, after Kahneman's fast-and-intuitive System 1. you send it a `state` (a string, or structured JSON: a conversation, some records, a policy) and a map of questions. it answers every question against that state, in parallel, in one request.

there are exactly three question types, and that constraint is the product:

| type | returns | example |
|---|---|---|
| `noul` | probability the answer is yes | `0.95` |
| `choice` | one of your options, plus the full distribution over them | `"billing"` |
| `score` | a probability-weighted value across your levels | `1.4` |

no free text, no code, no explanation of its reasoning. you define the answer space; it points at a spot inside it.

two consequences fall straight out of that. first, **it cannot hallucinate an option you did not supply**, because the output is structurally constrained to your list. that is a stronger guarantee than prompting a general model to "only answer from these categories" and parsing what comes back. second, because it returns a distribution rather than a single token, you get **calibrated confidence** for free: a peaked distribution means it is sure, a flat one means it is not, and `choice` and `score` collapse that shape into a single `confidence` number between 0 and 1 so you can threshold on it without doing the maths yourself.

that second one matters more than it sounds. their docs put it well: a system that cannot express honest uncertainty cannot be trusted. the usual prompt-and-parse pattern gives you an answer with no honest way to ask how sure it was, so you end up either trusting everything or building a second LLM call to grade the first.

## the thing i actually learnt

here is where the tool stopped being the interesting part.

think about any feature that watches a stream and occasionally says something useful. a live transcript that surfaces a prompt. a log tail that raises an incident. an inbox that flags the one message that needs a human. they all have the same shape:

```
every Δ seconds:
    look at the recent window
    decide whether anything is worth acting on
    if so, produce the thing to show
```

the ordinary way to build that is one LLM call per tick, doing both steps at once. ask it "is there a gap here, and if so what should we say?" and parse the answer. it works, and it is one call, and it feels efficient.

it is not, and the reason is that those two steps have opposite requirements:

| | deciding whether | producing what |
|---|---|---|
| how often it must run | every tick, continuously | rarely, only when there is something |
| latency budget | must be sub-second or the tick rate collapses | seconds are fine |
| output | a boolean, or a number | prose |
| cost per call | wants to be near zero | is allowed to be expensive |

when one call does both, **the tick interval is set by the expensive half**. you cannot poll every three seconds if each poll costs a full generation, so you poll every thirty, and the feature that was supposed to be real-time quietly becomes a timer. and you are paying the generation price on every tick, including the overwhelming majority of ticks where the honest answer was "nothing here".

split them and the detector sets the cadence instead. at roughly 100ms per detection you can look every few seconds; the generator only wakes when the detector says something is actually there.

## the maths, and the caveat hiding in it

worth doing properly, because it tells you when *not* to bother.

| symbol | what it means |
|---|---|
| $c_d$ | cost of one detection call |
| $c_g$ | cost of one generation call |
| $p$ | trigger rate: the fraction of ticks that genuinely have something worth generating |
| $k$ | $c_d/c_g$, the detector's cost relative to the generator |

**fused**: every tick pays for a generation, so cost per tick is $c_g$.

**split**: every tick pays for a detection, and a $p$ fraction of ticks additionally pay for a generation, so cost per tick is $c_d + p\,c_g$.

the ratio between them is the saving:

$$ R = \frac{c_g}{c_d + p\,c_g} = \frac{1}{k + p} $$

that little formula is the whole decision. two things read straight off it.

first, **your saving is capped at $1/p$ no matter how cheap the detector gets.** driving $k$ to zero leaves you with $1/p$. if a quarter of your ticks have something worth saying, a free detector still only saves you 4x.

second, **$p$ dominates $k$ almost immediately.** Jev is priced at 4.2 cents per million input tokens, against roughly a dollar for the cheapest sensible general model and five dollars for a frontier one, so $k$ lands somewhere between 0.042 and 0.008. both are small enough that once $p$ climbs past about 0.1, which detector you chose barely moves the answer:

<figure style="margin:1.6rem 0">
<svg viewBox="0 0 620 360" role="img" aria-label="Savings from splitting detection and generation, against trigger rate" style="width:100%;max-width:620px;height:auto;font-family:inherit;display:block;margin:0 auto">
<text x="310" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">How much splitting detection from generation actually saves</text>
<line x1="60.0" y1="312.0" x2="596.0" y2="312.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="52" y="316.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">0x</text>
<line x1="60.0" y1="242.5" x2="596.0" y2="242.5" stroke="currentColor" stroke-opacity="0.10"/>
<text x="52" y="246.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">5x</text>
<line x1="60.0" y1="173.0" x2="596.0" y2="173.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="52" y="177.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">10x</text>
<line x1="60.0" y1="103.5" x2="596.0" y2="103.5" stroke="currentColor" stroke-opacity="0.10"/>
<text x="52" y="107.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">15x</text>
<line x1="60.0" y1="34.0" x2="596.0" y2="34.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="52" y="38.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">20x</text>
<line x1="144.6" y1="312" x2="144.6" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="144.6" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">20%</text>
<line x1="257.5" y1="312" x2="257.5" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="257.5" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">40%</text>
<line x1="370.3" y1="312" x2="370.3" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="370.3" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">60%</text>
<line x1="483.2" y1="312" x2="483.2" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="483.2" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">80%</text>
<line x1="596.0" y1="312" x2="596.0" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="596.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">100%</text>
<line x1="60.0" y1="34" x2="60.0" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="60.0" y1="312" x2="596.0" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<text x="328" y="354" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85">trigger rate: how often a tick actually has something worth generating</text>
<text x="14" y="173" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85" transform="rotate(-90 14 173)">cost saved (multiple)</text>
<line x1="60.0" y1="298.1" x2="596.0" y2="298.1" stroke="currentColor" stroke-width="1.4" stroke-opacity="0.5" stroke-dasharray="5 4"/>
<text x="590.0" y="290.1" text-anchor="end" font-size="11.5" fill="currentColor" fill-opacity="0.85">1x: splitting has stopped paying for itself</text>
<path d="M 60.0 74.0 L 62.2 89.1 L 64.5 102.4 L 66.7 114.2 L 68.9 124.8 L 71.2 134.2 L 73.4 142.8 L 75.6 150.6 L 77.9 157.7 L 80.1 164.2 L 82.3 170.1 L 84.6 175.6 L 86.8 180.7 L 89.0 185.5 L 91.3 189.9 L 93.5 194.0 L 95.7 197.8 L 98.0 201.4 L 100.2 204.8 L 102.4 208.0 L 104.7 211.0 L 106.9 213.8 L 109.1 216.5 L 111.4 219.0 L 113.6 221.4 L 115.8 223.7 L 118.1 225.8 L 120.3 227.9 L 122.5 229.9 L 124.8 231.7 L 127.0 233.5 L 129.2 235.3 L 131.5 236.9 L 133.7 238.5 L 135.9 240.0 L 138.2 241.4 L 140.4 242.8 L 142.6 244.1 L 144.9 245.4 L 147.1 246.7 L 149.3 247.9 L 151.6 249.0 L 153.8 250.1 L 156.0 251.2 L 158.3 252.2 L 160.5 253.2 L 162.7 254.2 L 165.0 255.1 L 167.2 256.0 L 169.4 256.9 L 171.7 257.8 L 173.9 258.6 L 176.1 259.4 L 178.4 260.2 L 180.6 260.9 L 182.8 261.7 L 185.1 262.4 L 187.3 263.1 L 189.5 263.7 L 191.8 264.4 L 194.0 265.0 L 196.2 265.6 L 198.5 266.2 L 200.7 266.8 L 202.9 267.4 L 205.2 268.0 L 207.4 268.5 L 209.6 269.0 L 211.9 269.6 L 214.1 270.1 L 216.3 270.6 L 218.6 271.1 L 220.8 271.5 L 223.0 272.0 L 225.3 272.4 L 227.5 272.9 L 229.7 273.3 L 232.0 273.7 L 234.2 274.1 L 236.4 274.5 L 238.7 274.9 L 240.9 275.3 L 243.1 275.7 L 245.4 276.1 L 247.6 276.4 L 249.8 276.8 L 252.1 277.1 L 254.3 277.5 L 256.5 277.8 L 258.8 278.2 L 261.0 278.5 L 263.2 278.8 L 265.5 279.1 L 267.7 279.4 L 269.9 279.7 L 272.2 280.0 L 274.4 280.3 L 276.6 280.6 L 278.9 280.9 L 281.1 281.1 L 283.3 281.4 L 285.6 281.7 L 287.8 281.9 L 290.0 282.2 L 292.3 282.4 L 294.5 282.7 L 296.7 282.9 L 299.0 283.2 L 301.2 283.4 L 303.4 283.6 L 305.7 283.9 L 307.9 284.1 L 310.1 284.3 L 312.4 284.5 L 314.6 284.7 L 316.8 284.9 L 319.1 285.1 L 321.3 285.3 L 323.5 285.5 L 325.8 285.7 L 328.0 285.9 L 330.2 286.1 L 332.5 286.3 L 334.7 286.5 L 336.9 286.7 L 339.2 286.9 L 341.4 287.1 L 343.6 287.2 L 345.9 287.4 L 348.1 287.6 L 350.3 287.7 L 352.6 287.9 L 354.8 288.1 L 357.0 288.2 L 359.3 288.4 L 361.5 288.6 L 363.7 288.7 L 366.0 288.9 L 368.2 289.0 L 370.4 289.2 L 372.7 289.3 L 374.9 289.5 L 377.1 289.6 L 379.4 289.7 L 381.6 289.9 L 383.8 290.0 L 386.1 290.2 L 388.3 290.3 L 390.5 290.4 L 392.8 290.6 L 395.0 290.7 L 397.2 290.8 L 399.5 290.9 L 401.7 291.1 L 403.9 291.2 L 406.2 291.3 L 408.4 291.4 L 410.6 291.6 L 412.9 291.7 L 415.1 291.8 L 417.3 291.9 L 419.6 292.0 L 421.8 292.1 L 424.0 292.2 L 426.3 292.4 L 428.5 292.5 L 430.7 292.6 L 433.0 292.7 L 435.2 292.8 L 437.4 292.9 L 439.7 293.0 L 441.9 293.1 L 444.1 293.2 L 446.4 293.3 L 448.6 293.4 L 450.8 293.5 L 453.1 293.6 L 455.3 293.7 L 457.5 293.8 L 459.8 293.9 L 462.0 294.0 L 464.2 294.1 L 466.5 294.2 L 468.7 294.2 L 470.9 294.3 L 473.2 294.4 L 475.4 294.5 L 477.6 294.6 L 479.9 294.7 L 482.1 294.8 L 484.3 294.8 L 486.6 294.9 L 488.8 295.0 L 491.0 295.1 L 493.3 295.2 L 495.5 295.3 L 497.7 295.3 L 500.0 295.4 L 502.2 295.5 L 504.4 295.6 L 506.7 295.6 L 508.9 295.7 L 511.1 295.8 L 513.4 295.9 L 515.6 295.9 L 517.8 296.0 L 520.1 296.1 L 522.3 296.2 L 524.5 296.2 L 526.8 296.3 L 529.0 296.4 L 531.2 296.4 L 533.5 296.5 L 535.7 296.6 L 537.9 296.6 L 540.2 296.7 L 542.4 296.8 L 544.6 296.8 L 546.9 296.9 L 549.1 297.0 L 551.3 297.0 L 553.6 297.1 L 555.8 297.2 L 558.0 297.2 L 560.3 297.3 L 562.5 297.4 L 564.7 297.4 L 567.0 297.5 L 569.2 297.5 L 571.4 297.6 L 573.7 297.7 L 575.9 297.7 L 578.1 297.8 L 580.4 297.8 L 582.6 297.9 L 584.8 297.9 L 587.1 298.0 L 589.3 298.1 L 591.5 298.1 L 593.8 298.2 L 596.0 298.2" fill="none" stroke="#f97316" stroke-width="2.8" stroke-linecap="round"/>
<path d="M 60.0 160.9 L 62.2 167.1 L 64.5 172.9 L 66.7 178.2 L 68.9 183.1 L 71.2 187.7 L 73.4 191.9 L 75.6 195.9 L 77.9 199.6 L 80.1 203.1 L 82.3 206.4 L 84.6 209.4 L 86.8 212.4 L 89.0 215.1 L 91.3 217.7 L 93.5 220.2 L 95.7 222.5 L 98.0 224.7 L 100.2 226.9 L 102.4 228.9 L 104.7 230.8 L 106.9 232.6 L 109.1 234.4 L 111.4 236.1 L 113.6 237.7 L 115.8 239.2 L 118.1 240.7 L 120.3 242.1 L 122.5 243.5 L 124.8 244.8 L 127.0 246.0 L 129.2 247.3 L 131.5 248.4 L 133.7 249.6 L 135.9 250.7 L 138.2 251.7 L 140.4 252.7 L 142.6 253.7 L 144.9 254.7 L 147.1 255.6 L 149.3 256.5 L 151.6 257.3 L 153.8 258.2 L 156.0 259.0 L 158.3 259.8 L 160.5 260.5 L 162.7 261.3 L 165.0 262.0 L 167.2 262.7 L 169.4 263.4 L 171.7 264.1 L 173.9 264.7 L 176.1 265.3 L 178.4 265.9 L 180.6 266.5 L 182.8 267.1 L 185.1 267.7 L 187.3 268.2 L 189.5 268.8 L 191.8 269.3 L 194.0 269.8 L 196.2 270.3 L 198.5 270.8 L 200.7 271.3 L 202.9 271.7 L 205.2 272.2 L 207.4 272.7 L 209.6 273.1 L 211.9 273.5 L 214.1 273.9 L 216.3 274.3 L 218.6 274.7 L 220.8 275.1 L 223.0 275.5 L 225.3 275.9 L 227.5 276.3 L 229.7 276.6 L 232.0 277.0 L 234.2 277.3 L 236.4 277.7 L 238.7 278.0 L 240.9 278.3 L 243.1 278.6 L 245.4 278.9 L 247.6 279.3 L 249.8 279.6 L 252.1 279.9 L 254.3 280.1 L 256.5 280.4 L 258.8 280.7 L 261.0 281.0 L 263.2 281.3 L 265.5 281.5 L 267.7 281.8 L 269.9 282.0 L 272.2 282.3 L 274.4 282.6 L 276.6 282.8 L 278.9 283.0 L 281.1 283.3 L 283.3 283.5 L 285.6 283.7 L 287.8 284.0 L 290.0 284.2 L 292.3 284.4 L 294.5 284.6 L 296.7 284.8 L 299.0 285.0 L 301.2 285.2 L 303.4 285.4 L 305.7 285.6 L 307.9 285.8 L 310.1 286.0 L 312.4 286.2 L 314.6 286.4 L 316.8 286.6 L 319.1 286.8 L 321.3 287.0 L 323.5 287.1 L 325.8 287.3 L 328.0 287.5 L 330.2 287.7 L 332.5 287.8 L 334.7 288.0 L 336.9 288.2 L 339.2 288.3 L 341.4 288.5 L 343.6 288.6 L 345.9 288.8 L 348.1 288.9 L 350.3 289.1 L 352.6 289.2 L 354.8 289.4 L 357.0 289.5 L 359.3 289.7 L 361.5 289.8 L 363.7 289.9 L 366.0 290.1 L 368.2 290.2 L 370.4 290.4 L 372.7 290.5 L 374.9 290.6 L 377.1 290.7 L 379.4 290.9 L 381.6 291.0 L 383.8 291.1 L 386.1 291.3 L 388.3 291.4 L 390.5 291.5 L 392.8 291.6 L 395.0 291.7 L 397.2 291.8 L 399.5 292.0 L 401.7 292.1 L 403.9 292.2 L 406.2 292.3 L 408.4 292.4 L 410.6 292.5 L 412.9 292.6 L 415.1 292.7 L 417.3 292.8 L 419.6 292.9 L 421.8 293.0 L 424.0 293.1 L 426.3 293.2 L 428.5 293.3 L 430.7 293.4 L 433.0 293.5 L 435.2 293.6 L 437.4 293.7 L 439.7 293.8 L 441.9 293.9 L 444.1 294.0 L 446.4 294.1 L 448.6 294.2 L 450.8 294.3 L 453.1 294.4 L 455.3 294.5 L 457.5 294.6 L 459.8 294.6 L 462.0 294.7 L 464.2 294.8 L 466.5 294.9 L 468.7 295.0 L 470.9 295.1 L 473.2 295.1 L 475.4 295.2 L 477.6 295.3 L 479.9 295.4 L 482.1 295.5 L 484.3 295.5 L 486.6 295.6 L 488.8 295.7 L 491.0 295.8 L 493.3 295.8 L 495.5 295.9 L 497.7 296.0 L 500.0 296.1 L 502.2 296.1 L 504.4 296.2 L 506.7 296.3 L 508.9 296.3 L 511.1 296.4 L 513.4 296.5 L 515.6 296.5 L 517.8 296.6 L 520.1 296.7 L 522.3 296.7 L 524.5 296.8 L 526.8 296.9 L 529.0 296.9 L 531.2 297.0 L 533.5 297.1 L 535.7 297.1 L 537.9 297.2 L 540.2 297.3 L 542.4 297.3 L 544.6 297.4 L 546.9 297.4 L 549.1 297.5 L 551.3 297.6 L 553.6 297.6 L 555.8 297.7 L 558.0 297.7 L 560.3 297.8 L 562.5 297.9 L 564.7 297.9 L 567.0 298.0 L 569.2 298.0 L 571.4 298.1 L 573.7 298.1 L 575.9 298.2 L 578.1 298.2 L 580.4 298.3 L 582.6 298.3 L 584.8 298.4 L 587.1 298.5 L 589.3 298.5 L 591.5 298.6 L 593.8 298.6 L 596.0 298.7" fill="none" stroke="#3b82f6" stroke-width="2.8" stroke-linecap="round"/>
<line x1="95" y1="250" x2="117" y2="250" stroke="#f97316" stroke-width="2.8"/>
<text x="123" y="254" font-size="12" fill="currentColor" fill-opacity="0.9">detector is 119x cheaper than the generator</text>
<line x1="95" y1="268" x2="117" y2="268" stroke="#3b82f6" stroke-width="2.8"/>
<text x="123" y="272" font-size="12" fill="currentColor" fill-opacity="0.9">detector is 24x cheaper than the generator</text>
<circle cx="229.3" cy="276.5" r="4" fill="currentColor"/>
<text x="238.3" y="268.5" text-anchor="start" font-size="11.5" fill="currentColor" fill-opacity="0.85">past here the two curves are the same line</text>

</svg>
<figcaption style="text-align:center;font-size:0.85rem;opacity:0.7;margin-top:0.5rem">The two curves are a 24x cheaper detector and a 119x cheaper detector. They separate only at the far left, where triggers are rare. Everywhere else the trigger rate sets the answer and the detector's price is noise.</figcaption>
</figure>

and there is a break-even, in the same way the [build-versus-buy crossover]({{< ref "build-vs-buy" >}}) has one. $R$ falls through 1 at $p = 1 - k$, around 96%. past that you are paying for a detector to tell you something you were going to do anyway, and the split is a net loss. that is the honest boundary: **this pattern is for needles in haystacks. if your stream is mostly needles, keep the one call.**

## where people get this wrong

**thinking it replaces the LLM.** it does not, and the pitch is not "swap your model for a cheaper one". Jev cannot write your output. it re-scopes the generator to fire rarely instead of constantly. anyone who hears "cheaper model" has heard the wrong thing.

**reaching for it to extract values.** there is no open-ended extraction. you cannot ask it to pull a figure out of a paragraph. what you can do is have ordinary code find the candidate spans, then have the model pick which one you meant. select, never generate. that inversion is most of the cookbook, and it is also why the output cannot be invented.

**leading with the cost saving.** it is real and it is usually irrelevant. at these prices a personal-scale workload costs cents a month, so "it is cheaper" invites the obvious reply that the current bill is already small. the argument that survives is the cadence one: you could not afford to look every three seconds before, and now you can.

**stuffing the corpus into the state.** the context is 64k per request and 32k for the state plus the longest single question. a document library does not fit. shortlist in code, judge the shortlist.

**assuming calibration means correctness.** their docs are explicit that calibration is measured across groups of predictions, not guaranteed per answer. so thresholds have to be fitted against your own labelled data, and building that labelled set is the actual project. the integration is the part that merely looks like the work.

## when it applies, and when it does not

it applies when the judgment is **closed** (you can enumerate the answers), **frequent** (you want it running constantly), and **mostly negative** (the honest answer is usually "nothing here"). routing, triage, screening, reranking a shortlist, verifying a claim against its evidence, deciding whether to wake something expensive.

it does not apply when you need words out, when the input is an image or audio (text only, today), when the answer space is genuinely open, or when nearly every tick is a hit.

two constraints worth knowing before anyone builds on it: the published rate limit is 1,200 requests per minute, which is twenty a second and a real ceiling for anything multi-tenant, and the docs carry an explicit warning that limits may change without notice while they scale. zero data retention is an enterprise-plan feature. english is the primary training language and their own docs say other scripts, CJK included, are currently less accurate. i have not benchmarked any of this; it is what the documentation states, and it is the sort of thing that looks fine in a demo and matters in production.

## key takeaways

- a System One model answers multiple choice, not essays: `noul`, `choice`, `score`, in about 100ms, with calibrated confidence attached.
- the output cannot be an option you did not supply, which is a structural guarantee rather than a prompting convention.
- most real-time LLM features fuse detection and generation, and then the cheap job inherits the expensive job's cadence. that is why so many of them are secretly a timer.
- splitting saves $1/(k+p)$. the trigger rate $p$ dominates; the detector's price is almost noise.
- there is a break-even near a 96% trigger rate. needles in haystacks, not haystacks of needles.
- lead with cadence, not cost. cost is the weaker half of a true argument.
- the labelled set you need to fit the thresholds is the real project cost.

## a personal note

wip ...

## sources and further reading

- [TypeSafe documentation index](https://docs.typesafe.ai/llms.txt), and the pages under it for [System One](https://docs.typesafe.ai/concepts/system-one.md), [primitives](https://docs.typesafe.ai/primitives.md), [state](https://docs.typesafe.ai/concepts/state.md), [confidence](https://docs.typesafe.ai/confidence.md), [models and pricing](https://docs.typesafe.ai/models.md) and the [HTTP API](https://docs.typesafe.ai/api.md). all specification figures in this note (price, latency, context, rate limits, language support) are read off those pages on 22 September 2026, not measured by me.
- [speculative fan-out](https://docs.typesafe.ai/patterns/fan-out.md) and [composite scoring](https://docs.typesafe.ai/patterns/composite-scoring.md), the two patterns that make the one-request-many-questions shape worth building around.
- [Anthropic model pricing](https://docs.claude.com/en/docs/about-claude/pricing), for the generation-side anchor used in $k$.
- Daniel Kahneman, *Thinking, Fast and Slow* (2011), where the System 1 and System 2 framing comes from.
- my earlier note on [what is actually inside an agent harness]({{< ref "agents-are-mostly-plumbing" >}}), which is the same instinct applied one layer up: most of the magic turns out to be plumbing.
- the [marginal cost note]({{< ref "marginal-cost-and-sunk-cost" >}}) for why a per-tick cost only matters once you multiply it by how many ticks you actually run.
