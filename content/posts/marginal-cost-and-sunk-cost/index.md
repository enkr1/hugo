---
title: "Why the Hundredth Cake Costs Less: Marginal Cost, Scale, and Sunk Cost"
slug: "marginal-cost-and-sunk-cost"
date: 2026-06-29T00:53:31+08:00
subtitle: "A research note on why cost per unit falls with scale, where the zero-marginal-cost economy comes from, and why a rational decision ignores sunk costs."
description: "A research note on marginal cost and economies of scale: why the hundredth unit costs less than the first, the difference between marginal and average cost, where the zero-marginal-cost economy comes from, the textbook U-shaped cost curve, and why rational decisions ignore sunk costs."
tags:
  - research
  - economics
  - marginal-cost
  - sunk-cost
  - economies-of-scale
  - human-capital
  - learning-curve
categories:
  - ["Education", "Economics"]
keywords:
  - marginal cost
  - average cost
  - economies of scale
  - sunk cost fallacy
  - zero marginal cost
  - learning curve
  - human capital
  - opportunity cost
image: ""
comments: true
draft: false
---

> i got this as a knowledge card on douyin/xiaohongshu, cannot recall which: marginal cost falls as you produce more, your personal assets keep accumulating, and sunk costs should stay out of big decisions. the intuition is lovely. some of the economics underneath it is slightly off, and one of the historical claims is just wrong. so i had my AI teach me the proper version and draw the curves. this note is that proper version. the personal reflection at the bottom is mine to write after.

## the puzzle

you open a bakery. the first cake is brutal. you buy an oven, a set of moulds, you burn three batches getting the recipe right. all in, that first cake might cost you 500 dollars.

by the hundredth cake, the oven is paid for and your hands know the motion. one more cake costs you some flour, a couple of eggs, and a little electricity. call it 10 dollars.

so why does the hundredth cake cost a fraction of the first, and what exactly is the thing that fell? the honest answer is more interesting than the knowledge card lets on, and it comes apart into two different costs that people constantly mix up.

## marginal cost is not quite what the card says

a quick key for the shorthand, so the formulas below read easily:

| symbol | what it means |
|---|---|
| $Q$ | quantity: how many units you make |
| $TC$ | total cost of producing all of them |
| $MC$ | marginal cost: the cost of one more unit |
| $ATC$ | average total cost: total cost divided by units |
| $\Delta$ | "change in" (so $\Delta Q$ is the change in quantity) |

**marginal cost** is the cost of making one more unit. formally it is the change in total cost divided by the change in quantity, the slope of the total cost curve:

$$ MC = \frac{\Delta TC}{\Delta Q} $$

**average total cost** is the total cost spread over every unit you made:

$$ ATC = \frac{TC}{Q} $$

these are not the same number, and the bakery is the cleanest way to feel the difference. split the cost in two:

- **fixed cost**, the oven and the moulds, say 500 dollars. you pay it once whether you bake one cake or a thousand.
- **variable cost**, the flour and eggs and electricity, about 10 dollars per cake. you pay it again for every cake.

now look carefully. the *marginal* cost of the hundredth cake is not falling much at all. it is roughly 10 dollars, the same flour and eggs as the second cake. what collapses is the *average* cost, because the one off 500 dollars gets shared across more and more cakes:

$$ ATC = \frac{500}{Q} + 10 $$

at one cake that is 510 dollars. at ten cakes it is 60. at a hundred cakes it is 15, sliding towards the 10 dollar floor. here is the whole story in one picture:

<figure style="margin:1.6rem 0">
<svg viewBox="0 0 620 360" role="img" aria-label="The bakery: average cost falls towards marginal cost" style="width:100%;max-width:620px;height:auto;font-family:inherit;display:block;margin:0 auto">
<text x="310" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">The bakery: average cost falls towards marginal cost</text>
<line x1="58" y1="312.0" x2="596" y2="312.0" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="316.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="58" y1="242.5" x2="596" y2="242.5" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="246.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">30</text>
<line x1="58" y1="173.0" x2="596" y2="173.0" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="177.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">60</text>
<line x1="58" y1="103.5" x2="596" y2="103.5" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="107.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">90</text>
<line x1="58" y1="34.0" x2="596" y2="34.0" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="38.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">120</text>
<line x1="58.0" y1="312" x2="58.0" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="58.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="165.6" y1="312" x2="165.6" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="165.6" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">20</text>
<line x1="273.2" y1="312" x2="273.2" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="273.2" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">40</text>
<line x1="380.8" y1="312" x2="380.8" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="380.8" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">60</text>
<line x1="488.4" y1="312" x2="488.4" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="488.4" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">80</text>
<line x1="596.0" y1="312" x2="596.0" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="596.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">100</text>
<line x1="58" y1="34" x2="58" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="58" y1="312" x2="596" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<text x="327" y="354" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85">cakes baked (Q)</text>
<text x="14" y="173" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85" transform="rotate(-90 14 173)">cost per cake ($)</text>
<path d="M 84.9 57.2 L 87.0 74.2 L 89.2 88.8 L 91.3 101.6 L 93.4 112.9 L 95.5 122.9 L 97.7 131.8 L 99.8 139.8 L 101.9 147.0 L 104.1 153.6 L 106.2 159.5 L 108.3 165.0 L 110.5 170.0 L 112.6 174.7 L 114.7 179.0 L 116.8 182.9 L 119.0 186.6 L 121.1 190.1 L 123.2 193.3 L 125.4 196.3 L 127.5 199.2 L 129.6 201.8 L 131.8 204.3 L 133.9 206.7 L 136.0 208.9 L 138.1 211.1 L 140.3 213.1 L 142.4 215.0 L 144.5 216.8 L 146.7 218.5 L 148.8 220.2 L 150.9 221.8 L 153.0 223.3 L 155.2 224.7 L 157.3 226.1 L 159.4 227.4 L 161.6 228.7 L 163.7 229.9 L 165.8 231.0 L 168.0 232.2 L 170.1 233.2 L 172.2 234.3 L 174.3 235.3 L 176.5 236.2 L 178.6 237.2 L 180.7 238.1 L 182.9 238.9 L 185.0 239.8 L 187.1 240.6 L 189.2 241.4 L 191.4 242.1 L 193.5 242.8 L 195.6 243.6 L 197.8 244.2 L 199.9 244.9 L 202.0 245.6 L 204.2 246.2 L 206.3 246.8 L 208.4 247.4 L 210.5 248.0 L 212.7 248.5 L 214.8 249.1 L 216.9 249.6 L 219.1 250.1 L 221.2 250.6 L 223.3 251.1 L 225.5 251.6 L 227.6 252.1 L 229.7 252.5 L 231.8 253.0 L 234.0 253.4 L 236.1 253.8 L 238.2 254.3 L 240.4 254.7 L 242.5 255.1 L 244.6 255.4 L 246.7 255.8 L 248.9 256.2 L 251.0 256.5 L 253.1 256.9 L 255.3 257.2 L 257.4 257.6 L 259.5 257.9 L 261.7 258.2 L 263.8 258.6 L 265.9 258.9 L 268.0 259.2 L 270.2 259.5 L 272.3 259.8 L 274.4 260.0 L 276.6 260.3 L 278.7 260.6 L 280.8 260.9 L 283.0 261.1 L 285.1 261.4 L 287.2 261.6 L 289.3 261.9 L 291.5 262.1 L 293.6 262.4 L 295.7 262.6 L 297.9 262.9 L 300.0 263.1 L 302.1 263.3 L 304.2 263.5 L 306.4 263.7 L 308.5 264.0 L 310.6 264.2 L 312.8 264.4 L 314.9 264.6 L 317.0 264.8 L 319.2 265.0 L 321.3 265.2 L 323.4 265.4 L 325.5 265.5 L 327.7 265.7 L 329.8 265.9 L 331.9 266.1 L 334.1 266.3 L 336.2 266.4 L 338.3 266.6 L 340.4 266.8 L 342.6 266.9 L 344.7 267.1 L 346.8 267.3 L 349.0 267.4 L 351.1 267.6 L 353.2 267.7 L 355.4 267.9 L 357.5 268.0 L 359.6 268.2 L 361.7 268.3 L 363.9 268.5 L 366.0 268.6 L 368.1 268.7 L 370.3 268.9 L 372.4 269.0 L 374.5 269.1 L 376.7 269.3 L 378.8 269.4 L 380.9 269.5 L 383.0 269.7 L 385.2 269.8 L 387.3 269.9 L 389.4 270.0 L 391.6 270.2 L 393.7 270.3 L 395.8 270.4 L 397.9 270.5 L 400.1 270.6 L 402.2 270.7 L 404.3 270.8 L 406.5 270.9 L 408.6 271.1 L 410.7 271.2 L 412.9 271.3 L 415.0 271.4 L 417.1 271.5 L 419.2 271.6 L 421.4 271.7 L 423.5 271.8 L 425.6 271.9 L 427.8 272.0 L 429.9 272.1 L 432.0 272.2 L 434.2 272.3 L 436.3 272.4 L 438.4 272.5 L 440.5 272.5 L 442.7 272.6 L 444.8 272.7 L 446.9 272.8 L 449.1 272.9 L 451.2 273.0 L 453.3 273.1 L 455.4 273.2 L 457.6 273.2 L 459.7 273.3 L 461.8 273.4 L 464.0 273.5 L 466.1 273.6 L 468.2 273.6 L 470.4 273.7 L 472.5 273.8 L 474.6 273.9 L 476.7 274.0 L 478.9 274.0 L 481.0 274.1 L 483.1 274.2 L 485.3 274.2 L 487.4 274.3 L 489.5 274.4 L 491.7 274.5 L 493.8 274.5 L 495.9 274.6 L 498.0 274.7 L 500.2 274.7 L 502.3 274.8 L 504.4 274.9 L 506.6 274.9 L 508.7 275.0 L 510.8 275.1 L 512.9 275.1 L 515.1 275.2 L 517.2 275.3 L 519.3 275.3 L 521.5 275.4 L 523.6 275.4 L 525.7 275.5 L 527.9 275.6 L 530.0 275.6 L 532.1 275.7 L 534.2 275.7 L 536.4 275.8 L 538.5 275.9 L 540.6 275.9 L 542.8 276.0 L 544.9 276.0 L 547.0 276.1 L 549.1 276.1 L 551.3 276.2 L 553.4 276.3 L 555.5 276.3 L 557.7 276.4 L 559.8 276.4 L 561.9 276.5 L 564.1 276.5 L 566.2 276.6 L 568.3 276.6 L 570.4 276.7 L 572.6 276.7 L 574.7 276.8 L 576.8 276.8 L 579.0 276.9 L 581.1 276.9 L 583.2 277.0 L 585.4 277.0 L 587.5 277.1 L 589.6 277.1 L 591.7 277.2 L 593.9 277.2 L 596.0 277.2" fill="none" stroke="#3b82f6" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>
<path d="M 58.0 288.8 L 60.2 288.8 L 62.5 288.8 L 64.7 288.8 L 67.0 288.8 L 69.2 288.8 L 71.5 288.8 L 73.7 288.8 L 75.9 288.8 L 78.2 288.8 L 80.4 288.8 L 82.7 288.8 L 84.9 288.8 L 87.1 288.8 L 89.4 288.8 L 91.6 288.8 L 93.9 288.8 L 96.1 288.8 L 98.3 288.8 L 100.6 288.8 L 102.8 288.8 L 105.1 288.8 L 107.3 288.8 L 109.6 288.8 L 111.8 288.8 L 114.0 288.8 L 116.3 288.8 L 118.5 288.8 L 120.8 288.8 L 123.0 288.8 L 125.2 288.8 L 127.5 288.8 L 129.7 288.8 L 132.0 288.8 L 134.2 288.8 L 136.5 288.8 L 138.7 288.8 L 140.9 288.8 L 143.2 288.8 L 145.4 288.8 L 147.7 288.8 L 149.9 288.8 L 152.1 288.8 L 154.4 288.8 L 156.6 288.8 L 158.9 288.8 L 161.1 288.8 L 163.4 288.8 L 165.6 288.8 L 167.8 288.8 L 170.1 288.8 L 172.3 288.8 L 174.6 288.8 L 176.8 288.8 L 179.1 288.8 L 181.3 288.8 L 183.5 288.8 L 185.8 288.8 L 188.0 288.8 L 190.3 288.8 L 192.5 288.8 L 194.7 288.8 L 197.0 288.8 L 199.2 288.8 L 201.5 288.8 L 203.7 288.8 L 206.0 288.8 L 208.2 288.8 L 210.4 288.8 L 212.7 288.8 L 214.9 288.8 L 217.2 288.8 L 219.4 288.8 L 221.6 288.8 L 223.9 288.8 L 226.1 288.8 L 228.4 288.8 L 230.6 288.8 L 232.8 288.8 L 235.1 288.8 L 237.3 288.8 L 239.6 288.8 L 241.8 288.8 L 244.1 288.8 L 246.3 288.8 L 248.5 288.8 L 250.8 288.8 L 253.0 288.8 L 255.3 288.8 L 257.5 288.8 L 259.8 288.8 L 262.0 288.8 L 264.2 288.8 L 266.5 288.8 L 268.7 288.8 L 271.0 288.8 L 273.2 288.8 L 275.4 288.8 L 277.7 288.8 L 279.9 288.8 L 282.2 288.8 L 284.4 288.8 L 286.6 288.8 L 288.9 288.8 L 291.1 288.8 L 293.4 288.8 L 295.6 288.8 L 297.9 288.8 L 300.1 288.8 L 302.3 288.8 L 304.6 288.8 L 306.8 288.8 L 309.1 288.8 L 311.3 288.8 L 313.5 288.8 L 315.8 288.8 L 318.0 288.8 L 320.3 288.8 L 322.5 288.8 L 324.8 288.8 L 327.0 288.8 L 329.2 288.8 L 331.5 288.8 L 333.7 288.8 L 336.0 288.8 L 338.2 288.8 L 340.4 288.8 L 342.7 288.8 L 344.9 288.8 L 347.2 288.8 L 349.4 288.8 L 351.7 288.8 L 353.9 288.8 L 356.1 288.8 L 358.4 288.8 L 360.6 288.8 L 362.9 288.8 L 365.1 288.8 L 367.3 288.8 L 369.6 288.8 L 371.8 288.8 L 374.1 288.8 L 376.3 288.8 L 378.6 288.8 L 380.8 288.8 L 383.0 288.8 L 385.3 288.8 L 387.5 288.8 L 389.8 288.8 L 392.0 288.8 L 394.2 288.8 L 396.5 288.8 L 398.7 288.8 L 401.0 288.8 L 403.2 288.8 L 405.5 288.8 L 407.7 288.8 L 409.9 288.8 L 412.2 288.8 L 414.4 288.8 L 416.7 288.8 L 418.9 288.8 L 421.2 288.8 L 423.4 288.8 L 425.6 288.8 L 427.9 288.8 L 430.1 288.8 L 432.4 288.8 L 434.6 288.8 L 436.8 288.8 L 439.1 288.8 L 441.3 288.8 L 443.6 288.8 L 445.8 288.8 L 448.1 288.8 L 450.3 288.8 L 452.5 288.8 L 454.8 288.8 L 457.0 288.8 L 459.3 288.8 L 461.5 288.8 L 463.7 288.8 L 466.0 288.8 L 468.2 288.8 L 470.5 288.8 L 472.7 288.8 L 474.9 288.8 L 477.2 288.8 L 479.4 288.8 L 481.7 288.8 L 483.9 288.8 L 486.2 288.8 L 488.4 288.8 L 490.6 288.8 L 492.9 288.8 L 495.1 288.8 L 497.4 288.8 L 499.6 288.8 L 501.8 288.8 L 504.1 288.8 L 506.3 288.8 L 508.6 288.8 L 510.8 288.8 L 513.1 288.8 L 515.3 288.8 L 517.5 288.8 L 519.8 288.8 L 522.0 288.8 L 524.3 288.8 L 526.5 288.8 L 528.8 288.8 L 531.0 288.8 L 533.2 288.8 L 535.5 288.8 L 537.7 288.8 L 540.0 288.8 L 542.2 288.8 L 544.4 288.8 L 546.7 288.8 L 548.9 288.8 L 551.2 288.8 L 553.4 288.8 L 555.7 288.8 L 557.9 288.8 L 560.1 288.8 L 562.4 288.8 L 564.6 288.8 L 566.9 288.8 L 569.1 288.8 L 571.3 288.8 L 573.6 288.8 L 575.8 288.8 L 578.1 288.8 L 580.3 288.8 L 582.5 288.8 L 584.8 288.8 L 587.0 288.8 L 589.3 288.8 L 591.5 288.8 L 593.8 288.8 L 596.0 288.8" fill="none" stroke="#f97316" stroke-width="2.6" stroke-dasharray="6 5" stroke-linejoin="round" stroke-linecap="round"/>
<line x1="195" y1="70" x2="217" y2="70" stroke="#3b82f6" stroke-width="2.6"/>
<text x="223" y="74" font-size="12" fill="currentColor" fill-opacity="0.9">average total cost = 500/Q + 10</text>
<line x1="195" y1="88" x2="217" y2="88" stroke="#f97316" stroke-width="2.6" stroke-dasharray="6 5"/>
<text x="223" y="92" font-size="12" fill="currentColor" fill-opacity="0.9">marginal cost = 10 (flat)</text>
</svg>
<figcaption style="text-align:center;font-size:0.85rem;opacity:0.7;margin-top:0.5rem">Fixed cost of 500 dollars spread over more cakes. The marginal cost never really moved; the average just stopped being dominated by the oven.</figcaption>
</figure>

so the knowledge card's "marginal cost falls as you scale" is really, for the most part, *average* cost falling as a fixed investment gets amortised over more output. the marginal cost was low the whole time. that distinction is the entire game, and it is exactly the part the card skips.

## why cost per unit falls: economies of scale

amortising a fixed cost is the simplest reason cost per unit drops, but it is not the only one. when bigger genuinely makes each unit cheaper to produce, economists call it **economies of scale**, and it comes from a few real places:

- **spreading indivisible costs.** the oven, the brand, the one good recipe, the R&D. you buy them once and reuse them forever.
- **specialisation.** at one cake a day you do everything. at a thousand, one person pipes, one person bakes, each gets fast at their slice. this is Adam Smith's pin factory from 1776, still the cleanest example we have.
- **bulk and learning.** flour gets cheaper by the tonne, and you get quicker every time you repeat the motion. more on that learning effect at the end, because it is the bridge to the personal version.

economies of scale are why a single chip fab or a single search engine can serve the planet. but the card quietly implies cost per unit falls *forever*. the textbook is more careful, and more honest.

## the honest picture: marginal cost is U-shaped

in the standard short-run model, marginal cost does not fall forever. it falls, bottoms out, then rises. the reason is **diminishing returns**: with the kitchen size fixed, the fifth baker is crammed against the same two ovens as the first four, and each extra baker adds less than the one before. past some point, one more cake costs *more* than the last, not less.

so the real marginal cost curve is U-shaped, and it cuts the average total cost curve at exactly the lowest point of average cost. that crossing is not a coincidence: while making one more unit is cheaper than your running average, it drags the average down; once it costs more than the average, it pulls the average back up. they can only meet at the bottom.

<figure style="margin:1.6rem 0">
<svg viewBox="0 0 620 360" role="img" aria-label="The honest curve: marginal cost is U-shaped" style="width:100%;max-width:620px;height:auto;font-family:inherit;display:block;margin:0 auto">
<text x="310" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">The honest curve: marginal cost is U-shaped</text>
<line x1="58" y1="312.0" x2="596" y2="312.0" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="316.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="58" y1="242.5" x2="596" y2="242.5" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="246.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">40</text>
<line x1="58" y1="173.0" x2="596" y2="173.0" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="177.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">80</text>
<line x1="58" y1="103.5" x2="596" y2="103.5" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="107.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">120</text>
<line x1="58" y1="34.0" x2="596" y2="34.0" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="38.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">160</text>
<line x1="58.0" y1="312" x2="58.0" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="58.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="165.6" y1="312" x2="165.6" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="165.6" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">2</text>
<line x1="273.2" y1="312" x2="273.2" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="273.2" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">4</text>
<line x1="380.8" y1="312" x2="380.8" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="380.8" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">6</text>
<line x1="488.4" y1="312" x2="488.4" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="488.4" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">8</text>
<line x1="596.0" y1="312" x2="596.0" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="596.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">10</text>
<line x1="58" y1="34" x2="58" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="58" y1="312" x2="596" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<text x="327" y="354" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85">quantity (Q)</text>
<text x="14" y="173" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85" transform="rotate(-90 14 173)">cost per unit ($)</text>
<path d="M 111.8 53.1 L 113.8 60.0 L 115.8 66.5 L 117.9 72.6 L 119.9 78.3 L 121.9 83.7 L 123.9 88.8 L 125.9 93.7 L 127.9 98.3 L 130.0 102.6 L 132.0 106.8 L 134.0 110.7 L 136.0 114.5 L 138.0 118.1 L 140.0 121.6 L 142.1 124.9 L 144.1 128.1 L 146.1 131.1 L 148.1 134.1 L 150.1 136.9 L 152.1 139.6 L 154.2 142.3 L 156.2 144.8 L 158.2 147.3 L 160.2 149.6 L 162.2 151.9 L 164.3 154.2 L 166.3 156.3 L 168.3 158.4 L 170.3 160.5 L 172.3 162.4 L 174.3 164.4 L 176.4 166.2 L 178.4 168.0 L 180.4 169.8 L 182.4 171.5 L 184.4 173.2 L 186.4 174.9 L 188.5 176.4 L 190.5 178.0 L 192.5 179.5 L 194.5 181.0 L 196.5 182.4 L 198.6 183.9 L 200.6 185.2 L 202.6 186.6 L 204.6 187.9 L 206.6 189.2 L 208.6 190.5 L 210.7 191.7 L 212.7 192.9 L 214.7 194.1 L 216.7 195.2 L 218.7 196.4 L 220.7 197.5 L 222.8 198.6 L 224.8 199.6 L 226.8 200.7 L 228.8 201.7 L 230.8 202.7 L 232.8 203.7 L 234.9 204.7 L 236.9 205.6 L 238.9 206.5 L 240.9 207.5 L 242.9 208.3 L 245.0 209.2 L 247.0 210.1 L 249.0 210.9 L 251.0 211.8 L 253.0 212.6 L 255.0 213.4 L 257.1 214.1 L 259.1 214.9 L 261.1 215.7 L 263.1 216.4 L 265.1 217.1 L 267.1 217.9 L 269.2 218.6 L 271.2 219.2 L 273.2 219.9 L 275.2 220.6 L 277.2 221.2 L 279.3 221.9 L 281.3 222.5 L 283.3 223.1 L 285.3 223.7 L 287.3 224.3 L 289.3 224.9 L 291.4 225.4 L 293.4 226.0 L 295.4 226.5 L 297.4 227.1 L 299.4 227.6 L 301.4 228.1 L 303.5 228.6 L 305.5 229.1 L 307.5 229.6 L 309.5 230.1 L 311.5 230.5 L 313.5 231.0 L 315.6 231.5 L 317.6 231.9 L 319.6 232.3 L 321.6 232.7 L 323.6 233.1 L 325.7 233.5 L 327.7 233.9 L 329.7 234.3 L 331.7 234.7 L 333.7 235.1 L 335.7 235.4 L 337.8 235.8 L 339.8 236.1 L 341.8 236.4 L 343.8 236.8 L 345.8 237.1 L 347.8 237.4 L 349.9 237.7 L 351.9 238.0 L 353.9 238.3 L 355.9 238.6 L 357.9 238.8 L 360.0 239.1 L 362.0 239.3 L 364.0 239.6 L 366.0 239.8 L 368.0 240.1 L 370.0 240.3 L 372.1 240.5 L 374.1 240.7 L 376.1 240.9 L 378.1 241.1 L 380.1 241.3 L 382.1 241.5 L 384.2 241.6 L 386.2 241.8 L 388.2 242.0 L 390.2 242.1 L 392.2 242.3 L 394.2 242.4 L 396.3 242.5 L 398.3 242.6 L 400.3 242.8 L 402.3 242.9 L 404.3 243.0 L 406.4 243.1 L 408.4 243.2 L 410.4 243.2 L 412.4 243.3 L 414.4 243.4 L 416.4 243.5 L 418.5 243.5 L 420.5 243.6 L 422.5 243.6 L 424.5 243.6 L 426.5 243.7 L 428.5 243.7 L 430.6 243.7 L 432.6 243.7 L 434.6 243.7 L 436.6 243.7 L 438.6 243.7 L 440.7 243.7 L 442.7 243.7 L 444.7 243.7 L 446.7 243.6 L 448.7 243.6 L 450.7 243.6 L 452.8 243.5 L 454.8 243.5 L 456.8 243.4 L 458.8 243.3 L 460.8 243.3 L 462.8 243.2 L 464.9 243.1 L 466.9 243.0 L 468.9 242.9 L 470.9 242.8 L 472.9 242.7 L 474.9 242.6 L 477.0 242.4 L 479.0 242.3 L 481.0 242.2 L 483.0 242.0 L 485.0 241.9 L 487.1 241.7 L 489.1 241.6 L 491.1 241.4 L 493.1 241.2 L 495.1 241.1 L 497.1 240.9 L 499.2 240.7 L 501.2 240.5 L 503.2 240.3 L 505.2 240.1 L 507.2 239.9 L 509.2 239.7 L 511.3 239.5 L 513.3 239.2 L 515.3 239.0 L 517.3 238.8 L 519.3 238.5 L 521.4 238.3 L 523.4 238.0 L 525.4 237.8 L 527.4 237.5 L 529.4 237.2 L 531.4 236.9 L 533.5 236.7 L 535.5 236.4 L 537.5 236.1 L 539.5 235.8 L 541.5 235.5 L 543.5 235.1 L 545.6 234.8 L 547.6 234.5 L 549.6 234.2 L 551.6 233.8 L 553.6 233.5 L 555.7 233.2 L 557.7 232.8 L 559.7 232.5 L 561.7 232.1 L 563.7 231.7 L 565.7 231.4 L 567.8 231.0 L 569.8 230.6 L 571.8 230.2 L 573.8 229.8 L 575.8 229.4 L 577.8 229.0 L 579.9 228.6 L 581.9 228.2 L 583.9 227.8 L 585.9 227.3 L 587.9 226.9 L 589.9 226.5 L 592.0 226.0 L 594.0 225.6 L 596.0 225.1" fill="none" stroke="#3b82f6" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>
<path d="M 84.9 227.3 L 87.0 228.7 L 89.2 230.2 L 91.3 231.6 L 93.4 232.9 L 95.5 234.3 L 97.7 235.7 L 99.8 237.0 L 101.9 238.3 L 104.1 239.6 L 106.2 240.9 L 108.3 242.2 L 110.5 243.5 L 112.6 244.7 L 114.7 245.9 L 116.8 247.1 L 119.0 248.3 L 121.1 249.5 L 123.2 250.6 L 125.4 251.8 L 127.5 252.9 L 129.6 254.0 L 131.8 255.1 L 133.9 256.2 L 136.0 257.3 L 138.1 258.3 L 140.3 259.3 L 142.4 260.3 L 144.5 261.3 L 146.7 262.3 L 148.8 263.3 L 150.9 264.2 L 153.0 265.2 L 155.2 266.1 L 157.3 267.0 L 159.4 267.8 L 161.6 268.7 L 163.7 269.6 L 165.8 270.4 L 168.0 271.2 L 170.1 272.0 L 172.2 272.8 L 174.3 273.6 L 176.5 274.3 L 178.6 275.0 L 180.7 275.8 L 182.9 276.5 L 185.0 277.1 L 187.1 277.8 L 189.2 278.5 L 191.4 279.1 L 193.5 279.7 L 195.6 280.3 L 197.8 280.9 L 199.9 281.5 L 202.0 282.0 L 204.2 282.6 L 206.3 283.1 L 208.4 283.6 L 210.5 284.1 L 212.7 284.6 L 214.8 285.0 L 216.9 285.4 L 219.1 285.9 L 221.2 286.3 L 223.3 286.7 L 225.5 287.0 L 227.6 287.4 L 229.7 287.7 L 231.8 288.1 L 234.0 288.4 L 236.1 288.7 L 238.2 288.9 L 240.4 289.2 L 242.5 289.5 L 244.6 289.7 L 246.7 289.9 L 248.9 290.1 L 251.0 290.3 L 253.1 290.4 L 255.3 290.6 L 257.4 290.7 L 259.5 290.8 L 261.7 290.9 L 263.8 291.0 L 265.9 291.1 L 268.0 291.1 L 270.2 291.1 L 272.3 291.1 L 274.4 291.1 L 276.6 291.1 L 278.7 291.1 L 280.8 291.0 L 283.0 291.0 L 285.1 290.9 L 287.2 290.8 L 289.3 290.7 L 291.5 290.5 L 293.6 290.4 L 295.7 290.2 L 297.9 290.1 L 300.0 289.9 L 302.1 289.6 L 304.2 289.4 L 306.4 289.2 L 308.5 288.9 L 310.6 288.6 L 312.8 288.3 L 314.9 288.0 L 317.0 287.7 L 319.2 287.3 L 321.3 287.0 L 323.4 286.6 L 325.5 286.2 L 327.7 285.8 L 329.8 285.4 L 331.9 284.9 L 334.1 284.5 L 336.2 284.0 L 338.3 283.5 L 340.4 283.0 L 342.6 282.5 L 344.7 281.9 L 346.8 281.4 L 349.0 280.8 L 351.1 280.2 L 353.2 279.6 L 355.4 279.0 L 357.5 278.4 L 359.6 277.7 L 361.7 277.0 L 363.9 276.3 L 366.0 275.6 L 368.1 274.9 L 370.3 274.2 L 372.4 273.4 L 374.5 272.7 L 376.7 271.9 L 378.8 271.1 L 380.9 270.3 L 383.0 269.4 L 385.2 268.6 L 387.3 267.7 L 389.4 266.8 L 391.6 265.9 L 393.7 265.0 L 395.8 264.1 L 397.9 263.1 L 400.1 262.2 L 402.2 261.2 L 404.3 260.2 L 406.5 259.2 L 408.6 258.1 L 410.7 257.1 L 412.9 256.0 L 415.0 254.9 L 417.1 253.9 L 419.2 252.7 L 421.4 251.6 L 423.5 250.5 L 425.6 249.3 L 427.8 248.1 L 429.9 246.9 L 432.0 245.7 L 434.2 244.5 L 436.3 243.3 L 438.4 242.0 L 440.5 240.7 L 442.7 239.4 L 444.8 238.1 L 446.9 236.8 L 449.1 235.5 L 451.2 234.1 L 453.3 232.7 L 455.4 231.3 L 457.6 229.9 L 459.7 228.5 L 461.8 227.1 L 464.0 225.6 L 466.1 224.1 L 468.2 222.7 L 470.4 221.2 L 472.5 219.6 L 474.6 218.1 L 476.7 216.5 L 478.9 215.0 L 481.0 213.4 L 483.1 211.8 L 485.3 210.2 L 487.4 208.5 L 489.5 206.9 L 491.7 205.2 L 493.8 203.5 L 495.9 201.8 L 498.0 200.1 L 500.2 198.4 L 502.3 196.6 L 504.4 194.9 L 506.6 193.1 L 508.7 191.3 L 510.8 189.5 L 512.9 187.6 L 515.1 185.8 L 517.2 183.9 L 519.3 182.0 L 521.5 180.2 L 523.6 178.2 L 525.7 176.3 L 527.9 174.4 L 530.0 172.4 L 532.1 170.4 L 534.2 168.4 L 536.4 166.4 L 538.5 164.4 L 540.6 162.4 L 542.8 160.3 L 544.9 158.2 L 547.0 156.1 L 549.1 154.0 L 551.3 151.9 L 553.4 149.8 L 555.5 147.6 L 557.7 145.4 L 559.8 143.2 L 561.9 141.0 L 564.1 138.8 L 566.2 136.6 L 568.3 134.3 L 570.4 132.0 L 572.6 129.7 L 574.7 127.4 L 576.8 125.1 L 579.0 122.8 L 581.1 120.4 L 583.2 118.1 L 585.4 115.7 L 587.5 113.3 L 589.6 110.9 L 591.7 108.4 L 593.9 106.0 L 596.0 103.5" fill="none" stroke="#f97316" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>
<circle cx="434.6" cy="244.2" r="3.5" fill="currentColor"/>
<text x="426.6" y="234.2" text-anchor="end" font-size="11.5" fill="currentColor" fill-opacity="0.85">MC meets ATC at min ATC</text>
<line x1="360" y1="60" x2="382" y2="60" stroke="#3b82f6" stroke-width="2.6"/>
<text x="388" y="64" font-size="12" fill="currentColor" fill-opacity="0.9">average total cost</text>
<line x1="360" y1="78" x2="382" y2="78" stroke="#f97316" stroke-width="2.6"/>
<text x="388" y="82" font-size="12" fill="currentColor" fill-opacity="0.9">marginal cost</text>
</svg>
<figcaption style="text-align:center;font-size:0.85rem;opacity:0.7;margin-top:0.5rem">Diminishing returns make each extra unit eventually cost more, not less. Marginal cost cuts average cost at exactly the bottom of the average cost curve.</figcaption>
</figure>

this is the picture the card never shows you, and it matters: "scale always wins" is false in the short run. real firms have an efficient size, and pushing past it makes the next unit more expensive, not less.

## the limit case: zero marginal cost

now the one place the card is most right. for some goods the marginal cost is not just low, it is almost nothing.

think about software, a song, a pdf, this blog post. the *first* copy is enormously expensive: years of work, the whole idea, the late nights. this is the **first-copy cost**. every copy after that costs essentially zero. there is no flour, no eggs, no oven time. just a near free bit of bandwidth.

economists Carl Shapiro and Hal Varian called this the defining feature of information goods in *Information Rules* (1998): "information is costly to produce but cheap to reproduce." when marginal cost sits at roughly zero, average cost is just the first-copy cost divided by however many copies you ship, and it falls towards zero without limit:

<figure style="margin:1.6rem 0">
<svg viewBox="0 0 620 360" role="img" aria-label="Information goods: marginal cost near zero" style="width:100%;max-width:620px;height:auto;font-family:inherit;display:block;margin:0 auto">
<text x="310" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">Information goods: marginal cost near zero</text>
<line x1="58" y1="312.0" x2="596" y2="312.0" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="316.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="58" y1="242.5" x2="596" y2="242.5" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="246.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">300</text>
<line x1="58" y1="173.0" x2="596" y2="173.0" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="177.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">600</text>
<line x1="58" y1="103.5" x2="596" y2="103.5" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="107.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">900</text>
<line x1="58" y1="34.0" x2="596" y2="34.0" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="38.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">1200</text>
<line x1="58.0" y1="312" x2="58.0" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="58.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="192.5" y1="312" x2="192.5" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="192.5" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">500</text>
<line x1="327.0" y1="312" x2="327.0" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="327.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">1000</text>
<line x1="461.5" y1="312" x2="461.5" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="461.5" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">1500</text>
<line x1="596.0" y1="312" x2="596.0" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="596.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">2000</text>
<line x1="58" y1="34" x2="58" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="58" y1="312" x2="596" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<text x="327" y="354" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85">copies shipped (Q)</text>
<text x="14" y="173" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85" transform="rotate(-90 14 173)">cost per copy ($)</text>
<path d="M 84.9 80.3 L 87.0 97.3 L 89.2 112.0 L 91.3 124.8 L 93.4 136.1 L 95.5 146.0 L 97.7 154.9 L 99.8 162.9 L 101.9 170.2 L 104.1 176.7 L 106.2 182.7 L 108.3 188.2 L 110.5 193.2 L 112.6 197.8 L 114.7 202.1 L 116.8 206.1 L 119.0 209.8 L 121.1 213.2 L 123.2 216.5 L 125.4 219.5 L 127.5 222.3 L 129.6 225.0 L 131.8 227.5 L 133.9 229.9 L 136.0 232.1 L 138.1 234.2 L 140.3 236.3 L 142.4 238.2 L 144.5 240.0 L 146.7 241.7 L 148.8 243.4 L 150.9 244.9 L 153.0 246.4 L 155.2 247.9 L 157.3 249.2 L 159.4 250.6 L 161.6 251.8 L 163.7 253.0 L 165.8 254.2 L 168.0 255.3 L 170.1 256.4 L 172.2 257.4 L 174.3 258.4 L 176.5 259.4 L 178.6 260.3 L 180.7 261.2 L 182.9 262.1 L 185.0 262.9 L 187.1 263.7 L 189.2 264.5 L 191.4 265.3 L 193.5 266.0 L 195.6 266.7 L 197.8 267.4 L 199.9 268.1 L 202.0 268.7 L 204.2 269.4 L 206.3 270.0 L 208.4 270.6 L 210.5 271.1 L 212.7 271.7 L 214.8 272.3 L 216.9 272.8 L 219.1 273.3 L 221.2 273.8 L 223.3 274.3 L 225.5 274.8 L 227.6 275.3 L 229.7 275.7 L 231.8 276.2 L 234.0 276.6 L 236.1 277.0 L 238.2 277.4 L 240.4 277.8 L 242.5 278.2 L 244.6 278.6 L 246.7 279.0 L 248.9 279.4 L 251.0 279.7 L 253.1 280.1 L 255.3 280.4 L 257.4 280.7 L 259.5 281.1 L 261.7 281.4 L 263.8 281.7 L 265.9 282.0 L 268.0 282.3 L 270.2 282.6 L 272.3 282.9 L 274.4 283.2 L 276.6 283.5 L 278.7 283.8 L 280.8 284.0 L 283.0 284.3 L 285.1 284.6 L 287.2 284.8 L 289.3 285.1 L 291.5 285.3 L 293.6 285.5 L 295.7 285.8 L 297.9 286.0 L 300.0 286.2 L 302.1 286.5 L 304.2 286.7 L 306.4 286.9 L 308.5 287.1 L 310.6 287.3 L 312.8 287.5 L 314.9 287.7 L 317.0 287.9 L 319.2 288.1 L 321.3 288.3 L 323.4 288.5 L 325.5 288.7 L 327.7 288.9 L 329.8 289.1 L 331.9 289.3 L 334.1 289.4 L 336.2 289.6 L 338.3 289.8 L 340.4 289.9 L 342.6 290.1 L 344.7 290.3 L 346.8 290.4 L 349.0 290.6 L 351.1 290.7 L 353.2 290.9 L 355.4 291.0 L 357.5 291.2 L 359.6 291.3 L 361.7 291.5 L 363.9 291.6 L 366.0 291.8 L 368.1 291.9 L 370.3 292.0 L 372.4 292.2 L 374.5 292.3 L 376.7 292.4 L 378.8 292.6 L 380.9 292.7 L 383.0 292.8 L 385.2 293.0 L 387.3 293.1 L 389.4 293.2 L 391.6 293.3 L 393.7 293.4 L 395.8 293.6 L 397.9 293.7 L 400.1 293.8 L 402.2 293.9 L 404.3 294.0 L 406.5 294.1 L 408.6 294.2 L 410.7 294.3 L 412.9 294.4 L 415.0 294.5 L 417.1 294.6 L 419.2 294.7 L 421.4 294.9 L 423.5 295.0 L 425.6 295.0 L 427.8 295.1 L 429.9 295.2 L 432.0 295.3 L 434.2 295.4 L 436.3 295.5 L 438.4 295.6 L 440.5 295.7 L 442.7 295.8 L 444.8 295.9 L 446.9 296.0 L 449.1 296.1 L 451.2 296.2 L 453.3 296.2 L 455.4 296.3 L 457.6 296.4 L 459.7 296.5 L 461.8 296.6 L 464.0 296.6 L 466.1 296.7 L 468.2 296.8 L 470.4 296.9 L 472.5 297.0 L 474.6 297.0 L 476.7 297.1 L 478.9 297.2 L 481.0 297.3 L 483.1 297.3 L 485.3 297.4 L 487.4 297.5 L 489.5 297.6 L 491.7 297.6 L 493.8 297.7 L 495.9 297.8 L 498.0 297.8 L 500.2 297.9 L 502.3 298.0 L 504.4 298.0 L 506.6 298.1 L 508.7 298.2 L 510.8 298.2 L 512.9 298.3 L 515.1 298.4 L 517.2 298.4 L 519.3 298.5 L 521.5 298.6 L 523.6 298.6 L 525.7 298.7 L 527.9 298.7 L 530.0 298.8 L 532.1 298.9 L 534.2 298.9 L 536.4 299.0 L 538.5 299.0 L 540.6 299.1 L 542.8 299.1 L 544.9 299.2 L 547.0 299.3 L 549.1 299.3 L 551.3 299.4 L 553.4 299.4 L 555.5 299.5 L 557.7 299.5 L 559.8 299.6 L 561.9 299.6 L 564.1 299.7 L 566.2 299.7 L 568.3 299.8 L 570.4 299.8 L 572.6 299.9 L 574.7 299.9 L 576.8 300.0 L 579.0 300.0 L 581.1 300.1 L 583.2 300.1 L 585.4 300.2 L 587.5 300.2 L 589.6 300.3 L 591.7 300.3 L 593.9 300.4 L 596.0 300.4" fill="none" stroke="#3b82f6" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>
<path d="M 58.0 310.6 L 60.2 310.6 L 62.5 310.6 L 64.7 310.6 L 67.0 310.6 L 69.2 310.6 L 71.5 310.6 L 73.7 310.6 L 75.9 310.6 L 78.2 310.6 L 80.4 310.6 L 82.7 310.6 L 84.9 310.6 L 87.1 310.6 L 89.4 310.6 L 91.6 310.6 L 93.9 310.6 L 96.1 310.6 L 98.3 310.6 L 100.6 310.6 L 102.8 310.6 L 105.1 310.6 L 107.3 310.6 L 109.6 310.6 L 111.8 310.6 L 114.0 310.6 L 116.3 310.6 L 118.5 310.6 L 120.8 310.6 L 123.0 310.6 L 125.2 310.6 L 127.5 310.6 L 129.7 310.6 L 132.0 310.6 L 134.2 310.6 L 136.5 310.6 L 138.7 310.6 L 140.9 310.6 L 143.2 310.6 L 145.4 310.6 L 147.7 310.6 L 149.9 310.6 L 152.1 310.6 L 154.4 310.6 L 156.6 310.6 L 158.9 310.6 L 161.1 310.6 L 163.4 310.6 L 165.6 310.6 L 167.8 310.6 L 170.1 310.6 L 172.3 310.6 L 174.6 310.6 L 176.8 310.6 L 179.1 310.6 L 181.3 310.6 L 183.5 310.6 L 185.8 310.6 L 188.0 310.6 L 190.3 310.6 L 192.5 310.6 L 194.7 310.6 L 197.0 310.6 L 199.2 310.6 L 201.5 310.6 L 203.7 310.6 L 206.0 310.6 L 208.2 310.6 L 210.4 310.6 L 212.7 310.6 L 214.9 310.6 L 217.2 310.6 L 219.4 310.6 L 221.6 310.6 L 223.9 310.6 L 226.1 310.6 L 228.4 310.6 L 230.6 310.6 L 232.8 310.6 L 235.1 310.6 L 237.3 310.6 L 239.6 310.6 L 241.8 310.6 L 244.1 310.6 L 246.3 310.6 L 248.5 310.6 L 250.8 310.6 L 253.0 310.6 L 255.3 310.6 L 257.5 310.6 L 259.8 310.6 L 262.0 310.6 L 264.2 310.6 L 266.5 310.6 L 268.7 310.6 L 271.0 310.6 L 273.2 310.6 L 275.4 310.6 L 277.7 310.6 L 279.9 310.6 L 282.2 310.6 L 284.4 310.6 L 286.6 310.6 L 288.9 310.6 L 291.1 310.6 L 293.4 310.6 L 295.6 310.6 L 297.9 310.6 L 300.1 310.6 L 302.3 310.6 L 304.6 310.6 L 306.8 310.6 L 309.1 310.6 L 311.3 310.6 L 313.5 310.6 L 315.8 310.6 L 318.0 310.6 L 320.3 310.6 L 322.5 310.6 L 324.8 310.6 L 327.0 310.6 L 329.2 310.6 L 331.5 310.6 L 333.7 310.6 L 336.0 310.6 L 338.2 310.6 L 340.4 310.6 L 342.7 310.6 L 344.9 310.6 L 347.2 310.6 L 349.4 310.6 L 351.7 310.6 L 353.9 310.6 L 356.1 310.6 L 358.4 310.6 L 360.6 310.6 L 362.9 310.6 L 365.1 310.6 L 367.3 310.6 L 369.6 310.6 L 371.8 310.6 L 374.1 310.6 L 376.3 310.6 L 378.6 310.6 L 380.8 310.6 L 383.0 310.6 L 385.3 310.6 L 387.5 310.6 L 389.8 310.6 L 392.0 310.6 L 394.2 310.6 L 396.5 310.6 L 398.7 310.6 L 401.0 310.6 L 403.2 310.6 L 405.5 310.6 L 407.7 310.6 L 409.9 310.6 L 412.2 310.6 L 414.4 310.6 L 416.7 310.6 L 418.9 310.6 L 421.2 310.6 L 423.4 310.6 L 425.6 310.6 L 427.9 310.6 L 430.1 310.6 L 432.4 310.6 L 434.6 310.6 L 436.8 310.6 L 439.1 310.6 L 441.3 310.6 L 443.6 310.6 L 445.8 310.6 L 448.1 310.6 L 450.3 310.6 L 452.5 310.6 L 454.8 310.6 L 457.0 310.6 L 459.3 310.6 L 461.5 310.6 L 463.7 310.6 L 466.0 310.6 L 468.2 310.6 L 470.5 310.6 L 472.7 310.6 L 474.9 310.6 L 477.2 310.6 L 479.4 310.6 L 481.7 310.6 L 483.9 310.6 L 486.2 310.6 L 488.4 310.6 L 490.6 310.6 L 492.9 310.6 L 495.1 310.6 L 497.4 310.6 L 499.6 310.6 L 501.8 310.6 L 504.1 310.6 L 506.3 310.6 L 508.6 310.6 L 510.8 310.6 L 513.1 310.6 L 515.3 310.6 L 517.5 310.6 L 519.8 310.6 L 522.0 310.6 L 524.3 310.6 L 526.5 310.6 L 528.8 310.6 L 531.0 310.6 L 533.2 310.6 L 535.5 310.6 L 537.7 310.6 L 540.0 310.6 L 542.2 310.6 L 544.4 310.6 L 546.7 310.6 L 548.9 310.6 L 551.2 310.6 L 553.4 310.6 L 555.7 310.6 L 557.9 310.6 L 560.1 310.6 L 562.4 310.6 L 564.6 310.6 L 566.9 310.6 L 569.1 310.6 L 571.3 310.6 L 573.6 310.6 L 575.8 310.6 L 578.1 310.6 L 580.3 310.6 L 582.5 310.6 L 584.8 310.6 L 587.0 310.6 L 589.3 310.6 L 591.5 310.6 L 593.8 310.6 L 596.0 310.6" fill="none" stroke="#f97316" stroke-width="2.6" stroke-dasharray="6 5" stroke-linejoin="round" stroke-linecap="round"/>
<text x="461.5" y="328.6" text-anchor="middle" font-size="11.5" fill="#f97316">marginal cost ≈ 0</text>
<line x1="250" y1="80" x2="272" y2="80" stroke="#3b82f6" stroke-width="2.6"/>
<text x="278" y="84" font-size="12" fill="currentColor" fill-opacity="0.9">average cost = first-copy cost / copies</text>
<line x1="250" y1="98" x2="272" y2="98" stroke="#f97316" stroke-width="2.6" stroke-dasharray="6 5"/>
<text x="278" y="102" font-size="12" fill="currentColor" fill-opacity="0.9">marginal cost ≈ 0</text>
</svg>
<figcaption style="text-align:center;font-size:0.85rem;opacity:0.7;margin-top:0.5rem">The first copy costs a fortune; every copy after is almost free, so average cost falls towards zero without limit. This is the cost shape of software, music, and writing.</figcaption>
</figure>

this is the kernel of truth the card is reaching for when it says knowledge and software can be copied at almost no cost. Jeremy Rifkin built a whole popular book on it, *The Zero Marginal Cost Society* (2014), arguing this drives the price of information goods towards free. treat that grand conclusion with some caution, the economics profession does, but the underlying mechanic is real and it is the dominant cost structure of the digital economy.

## who actually discovered this, because the card gets it wrong

the card credits "Chandler and Stone, first proposed in the 1940s." that is not where any of this comes from.

- the idea of thinking *at the margin*, one more unit at a time, is the **Marginal Revolution** of the 1870s: William Stanley Jevons, Carl Menger, and Léon Walras, independently, around 1871 to 1874. **Alfred Marshall** then drew the supply and demand scissors and the cost curves you saw above in his *Principles of Economics* (1890). that is the real lineage, and it is roughly fifty years before the date on the card.
- **Richard Stone** was a real and important economist, a Nobel laureate in 1984, but for building the system of **national income accounting**, GDP and the national accounts, in the 1940s. nothing to do with originating marginal cost.
- **Alfred Chandler** was a great business *historian*. his *Scale and Scope* (1990) is genuinely about economies of scale and scope, so the card is not pulling his name from nowhere, but he was documenting how big firms grew in the late nineteenth and twentieth centuries, not proposing marginal cost in the 1940s.

so: nice instinct, wrong plaque. the concept is Victorian, not wartime. worth fixing, because a research note that repeats a confident wrong citation is worse than one that says nothing.

## sunk cost: the other half of the same idea

the card pairs all this with a second rule: keep sunk costs out of big decisions. this is not a separate topic. it is the exact same marginal thinking, pointed forwards.

a **sunk cost** is money, time, or effort you have already spent and cannot get back no matter what you choose next. the 80 dollar ticket to a film that turns out to be terrible. the two years already poured into a project that is clearly going nowhere. the half of a book you have read and are not enjoying.

the rational rule is almost insultingly simple: **compare the marginal benefit of continuing against the marginal cost of continuing, looking only forwards.** the 80 dollars is gone in both worlds, stay or leave, so it should carry exactly zero weight. the only live question is whether the *next* two hours are better spent enduring a bad film or doing literally anything else.

we are famously bad at this. Hal Arkes and Catherine Blumer demonstrated it cleanly in 1985 ("The Psychology of Sunk Cost"): people who had paid for a ski trip were more willing to go on it in bad conditions than people who got the same trip free, even though the money was already spent either way. the spending changed nothing about the future and everything about the choice. that is the **sunk cost fallacy**, also called escalation of commitment, and naming it is half the cure.

notice why it sits next to marginal cost so naturally. both say the same thing: **decide at the margin, and look forward.** what you already sank is a fixed cost of the past. it belongs in the history books, not the decision.

## a person is a firm with fixed costs

here is where the card makes its leap, from a cost curve to a way of seeing your own life, and this part is better grounded than it first looks.

learning a skill has the bakery's exact shape. the first unit is brutal: the first month of a language, the first real program, every step uphill. that is your fixed cost, your oven. but what you build does not get consumed when you use it. knowledge is **non-rival**: teaching it, or using it, does not use it up, and unlike the oven it barely depreciates. so every skill you acquire is a fixed asset that keeps paying out, and the marginal cost of your *next* unit of competence keeps dropping.

this is not just a metaphor, it is two real pieces of economics:

- **human capital.** Gary Becker (Nobel, 1992) made the case in *Human Capital* (1964) that skills and knowledge are a form of capital you invest in, with real returns, exactly like a machine.
- **the learning curve.** Theodore Wright measured in 1936 that each time cumulative aircraft production doubled, the labour cost per plane fell by a roughly constant percentage. the Boston Consulting Group generalised it into the experience curve. unit cost is a power law in cumulative experience, which looks like this:

<figure style="margin:1.6rem 0">
<svg viewBox="0 0 620 360" role="img" aria-label="The learning curve: experience makes the next unit cheaper" style="width:100%;max-width:620px;height:auto;font-family:inherit;display:block;margin:0 auto">
<text x="310" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">The learning curve: experience makes the next unit cheaper</text>
<line x1="58" y1="312.0" x2="596" y2="312.0" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="316.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="58" y1="248.8" x2="596" y2="248.8" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="252.8" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">25</text>
<line x1="58" y1="185.6" x2="596" y2="185.6" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="189.6" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">50</text>
<line x1="58" y1="122.5" x2="596" y2="122.5" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="126.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">75</text>
<line x1="58" y1="59.3" x2="596" y2="59.3" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="50" y="63.3" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">100</text>
<line x1="58.0" y1="312" x2="58.0" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="58.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="192.5" y1="312" x2="192.5" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="192.5" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">64</text>
<line x1="327.0" y1="312" x2="327.0" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="327.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">128</text>
<line x1="461.5" y1="312" x2="461.5" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="461.5" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">192</text>
<line x1="596.0" y1="312" x2="596.0" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="596.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">256</text>
<line x1="58" y1="34" x2="58" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="58" y1="312" x2="596" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<text x="327" y="354" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85">cumulative units made (experience)</text>
<text x="14" y="173" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85" transform="rotate(-90 14 173)">cost of the next unit</text>
<path d="M 60.1 59.3 L 62.3 98.7 L 64.6 118.5 L 66.8 131.4 L 69.0 140.7 L 71.3 147.9 L 73.5 153.8 L 75.7 158.7 L 78.0 162.9 L 80.2 166.6 L 82.4 169.8 L 84.7 172.7 L 86.9 175.3 L 89.1 177.7 L 91.4 179.8 L 93.6 181.8 L 95.8 183.7 L 98.1 185.4 L 100.3 187.0 L 102.5 188.5 L 104.8 189.9 L 107.0 191.2 L 109.2 192.5 L 111.5 193.7 L 113.7 194.8 L 115.9 195.9 L 118.2 196.9 L 120.4 197.9 L 122.6 198.8 L 124.9 199.7 L 127.1 200.6 L 129.3 201.4 L 131.6 202.2 L 133.8 203.0 L 136.0 203.7 L 138.3 204.4 L 140.5 205.1 L 142.7 205.8 L 145.0 206.4 L 147.2 207.0 L 149.4 207.7 L 151.7 208.2 L 153.9 208.8 L 156.1 209.4 L 158.3 209.9 L 160.6 210.4 L 162.8 210.9 L 165.0 211.4 L 167.3 211.9 L 169.5 212.4 L 171.7 212.9 L 174.0 213.3 L 176.2 213.8 L 178.4 214.2 L 180.7 214.6 L 182.9 215.0 L 185.1 215.4 L 187.4 215.8 L 189.6 216.2 L 191.8 216.6 L 194.1 216.9 L 196.3 217.3 L 198.5 217.7 L 200.8 218.0 L 203.0 218.4 L 205.2 218.7 L 207.5 219.0 L 209.7 219.3 L 211.9 219.7 L 214.2 220.0 L 216.4 220.3 L 218.6 220.6 L 220.9 220.9 L 223.1 221.2 L 225.3 221.4 L 227.6 221.7 L 229.8 222.0 L 232.0 222.3 L 234.3 222.5 L 236.5 222.8 L 238.7 223.1 L 241.0 223.3 L 243.2 223.6 L 245.4 223.8 L 247.7 224.1 L 249.9 224.3 L 252.1 224.5 L 254.4 224.8 L 256.6 225.0 L 258.8 225.2 L 261.1 225.5 L 263.3 225.7 L 265.5 225.9 L 267.8 226.1 L 270.0 226.3 L 272.2 226.5 L 274.5 226.7 L 276.7 227.0 L 278.9 227.2 L 281.2 227.4 L 283.4 227.6 L 285.6 227.7 L 287.9 227.9 L 290.1 228.1 L 292.3 228.3 L 294.6 228.5 L 296.8 228.7 L 299.0 228.9 L 301.3 229.0 L 303.5 229.2 L 305.7 229.4 L 308.0 229.6 L 310.2 229.7 L 312.4 229.9 L 314.7 230.1 L 316.9 230.3 L 319.1 230.4 L 321.4 230.6 L 323.6 230.7 L 325.8 230.9 L 328.1 231.1 L 330.3 231.2 L 332.5 231.4 L 334.7 231.5 L 337.0 231.7 L 339.2 231.8 L 341.4 232.0 L 343.7 232.1 L 345.9 232.3 L 348.1 232.4 L 350.4 232.5 L 352.6 232.7 L 354.8 232.8 L 357.1 233.0 L 359.3 233.1 L 361.5 233.2 L 363.8 233.4 L 366.0 233.5 L 368.2 233.6 L 370.5 233.8 L 372.7 233.9 L 374.9 234.0 L 377.2 234.2 L 379.4 234.3 L 381.6 234.4 L 383.9 234.5 L 386.1 234.7 L 388.3 234.8 L 390.6 234.9 L 392.8 235.0 L 395.0 235.2 L 397.3 235.3 L 399.5 235.4 L 401.7 235.5 L 404.0 235.6 L 406.2 235.7 L 408.4 235.9 L 410.7 236.0 L 412.9 236.1 L 415.1 236.2 L 417.4 236.3 L 419.6 236.4 L 421.8 236.5 L 424.1 236.6 L 426.3 236.7 L 428.5 236.8 L 430.8 236.9 L 433.0 237.1 L 435.2 237.2 L 437.5 237.3 L 439.7 237.4 L 441.9 237.5 L 444.2 237.6 L 446.4 237.7 L 448.6 237.8 L 450.9 237.9 L 453.1 238.0 L 455.3 238.1 L 457.6 238.2 L 459.8 238.3 L 462.0 238.4 L 464.3 238.4 L 466.5 238.5 L 468.7 238.6 L 471.0 238.7 L 473.2 238.8 L 475.4 238.9 L 477.7 239.0 L 479.9 239.1 L 482.1 239.2 L 484.4 239.3 L 486.6 239.4 L 488.8 239.5 L 491.1 239.5 L 493.3 239.6 L 495.5 239.7 L 497.8 239.8 L 500.0 239.9 L 502.2 240.0 L 504.5 240.1 L 506.7 240.1 L 508.9 240.2 L 511.1 240.3 L 513.4 240.4 L 515.6 240.5 L 517.8 240.6 L 520.1 240.6 L 522.3 240.7 L 524.5 240.8 L 526.8 240.9 L 529.0 241.0 L 531.2 241.0 L 533.5 241.1 L 535.7 241.2 L 537.9 241.3 L 540.2 241.3 L 542.4 241.4 L 544.6 241.5 L 546.9 241.6 L 549.1 241.6 L 551.3 241.7 L 553.6 241.8 L 555.8 241.9 L 558.0 241.9 L 560.3 242.0 L 562.5 242.1 L 564.7 242.2 L 567.0 242.2 L 569.2 242.3 L 571.4 242.4 L 573.7 242.4 L 575.9 242.5 L 578.1 242.6 L 580.4 242.7 L 582.6 242.7 L 584.8 242.8 L 587.1 242.9 L 589.3 242.9 L 591.5 243.0 L 593.8 243.1 L 596.0 243.1" fill="none" stroke="#3b82f6" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>
<circle cx="62.2" cy="97.2" r="3.5" fill="currentColor"/>
<text x="70.2" y="95.2" text-anchor="start" font-size="11.5" fill="currentColor" fill-opacity="0.85">x2 experience</text>
<circle cx="596.0" cy="243.0" r="3.5" fill="currentColor"/>
<text x="588.0" y="233.0" text-anchor="end" font-size="11.5" fill="currentColor" fill-opacity="0.85">cost keeps falling</text>
<line x1="150" y1="58" x2="172" y2="58" stroke="#3b82f6" stroke-width="2.6"/>
<text x="178" y="62" font-size="12" fill="currentColor" fill-opacity="0.9">85% learning curve: each doubling cuts unit cost to 85%</text>
</svg>
<figcaption style="text-align:center;font-size:0.85rem;opacity:0.7;margin-top:0.5rem">Wright's law, 1936. Every time your cumulative experience doubles, the cost of producing one more unit falls by a roughly constant percentage. Skill compounds.</figcaption>
</figure>

so the card's line, "your assets keep accumulating," is just human capital compounding. you do not see today's two hours of study as a cost that vanishes. you see it as one more unit produced, which lowers the cost of every future unit and adds to a stock that does not wear out. the flywheel the card is pointing at is real: keep producing, watch your marginal cost fall and your accumulated asset rise, and refuse to let what you already sank decide what you do next.

that is the economics. the personal version is below, and that part is mine.

## a personal note

wip ...

## sources and further reading

- Alfred Marshall, *Principles of Economics* (1890), for the cost curves and marginal analysis.
- Carl Shapiro and Hal R. Varian, *Information Rules* (1998), for first-copy cost and information goods.
- Jeremy Rifkin, *The Zero Marginal Cost Society* (2014), for the popular extrapolation, read critically.
- Gary S. Becker, *Human Capital* (1964), for skills as investable capital.
- T. P. Wright, "Factors Affecting the Cost of Airplanes" (1936), for the original learning curve.
- Hal R. Arkes and Catherine Blumer, "The Psychology of Sunk Cost," *Organizational Behavior and Human Decision Processes* (1985), for the sunk cost fallacy.
