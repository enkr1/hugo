---
title: "Why the Average Is a Lie: Ergodicity and the Game That Bankrupts Everyone"
slug: "ergodicity"
date: 2026-06-29T11:39:55+08:00
subtitle: "A research note on time versus ensemble averages, the volatility drag, and why one life is not the same as a thousand"
description: "A research note on ergodicity: why a coin flip with a positive expected value still sends every individual player broke, the gap between the time average and the ensemble average, the volatility drag, and how this is the deeper why beneath the Kelly criterion."
tags:
  - ergodicity
  - probability
  - risk-management
  - expected-value
  - compounding
  - kelly-criterion
  - research
categories:
  - ["Education", "Mathematics"]
keywords:
  - ergodicity
  - time average
  - ensemble average
  - expected value
  - geometric mean
  - volatility drag
  - ole peters
  - kelly criterion
image: ""
comments: true
draft: false
---

> after the [kelly note]({{< ref "kelly-criterion" >}}), the question that would not leave me was *why* maximising log-wealth is the right thing to do at all. the answer has a name, ergodicity, and once you see it you cannot unsee it. the "expected value" that everyone reaches for is, for most of the games life actually plays, an average over lives you will never live. i had my AI teach me the proper version and draw the curves. this note is that proper version. the personal note at the bottom is mine to write after.

## the game that should be free money

here is a bet. you put your whole pot in. a fair coin is flipped.

- **heads**: your money grows by 50 percent.
- **tails**: your money shrinks by 40 percent.

start with 100 dollars. heads takes you to 150, tails takes you to 60. the coin is fair, so what is the expected value of one round?

$$ E[\text{multiplier}] = \tfrac{1}{2}(1.5) + \tfrac{1}{2}(0.6) = 1.05 $$

a 5 percent gain, on average, every single round. that is a phenomenal edge. the stock market does roughly 5 percent a *year*. this does it per flip. so you should play it as many times as you possibly can, and you should end up extraordinarily rich.

now actually play it. flip a hundred times and watch your own pot. it does not go up. it goes to almost nothing. not sometimes: essentially always. the bet with the wonderful positive expected value is, for you, a slow bankruptcy.

both of those statements are true at the same time, and the gap between them is the whole subject of this note.

## two averages, and they disagree

the trap is that "average" is two different things wearing the same word.

a quick key before the formulas:

| symbol | what it means |
|---|---|
| $W$ | your wealth, tracked as a multiple of where you started |
| $E[\cdot]$ | the **ensemble average**: average across many players at one moment in time |
| $g$ | the **time-average growth rate**: what one player earns per round over many rounds |
| arithmetic mean | add the outcomes and divide by how many (the everyday average) |
| geometric mean | multiply the outcomes and take the root (the right average for compounding) |

the 1.05 we computed is the **ensemble average**. imagine a stadium of a million people each playing one round. add up all their pots, divide by a million: that total grows 5 percent each round, because the lucky half drag it up faster than the unlucky half drag it down. if you are the *whole crowd*, you win.

but you are not the crowd. you are one person, playing round after round, and your rounds *multiply* together. after a heads and a tails, in either order, your 100 dollars is

$$ 100 \times 1.5 \times 0.6 = 90 $$

down to 90, not back to 100. the thing that governs your fate is not the arithmetic mean of the multipliers, it is their **geometric mean**:

$$ g = \sqrt{1.5 \times 0.6} = \sqrt{0.9} \approx 0.9487 $$

that is a loss of about 5.1 percent *per round*, compounding, forever. the same game is +5 percent for the crowd and minus 5 percent for the individual. here is the divergence drawn out:

<figure style="margin:1.6rem 0">
<svg viewBox="0 0 620 360" role="img" aria-label="The same bet, two destinies" style="width:100%;max-width:620px;height:auto;font-family:inherit;display:block;margin:0 auto">
<text x="310" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">The same bet, two destinies</text>
<line x1="60" y1="312.0" x2="596" y2="312.0" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="52" y="316.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="60" y1="242.5" x2="596" y2="242.5" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="52" y="246.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">3</text>
<line x1="60" y1="173.0" x2="596" y2="173.0" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="52" y="177.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">6</text>
<line x1="60" y1="103.5" x2="596" y2="103.5" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="52" y="107.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">9</text>
<line x1="60" y1="34.0" x2="596" y2="34.0" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="52" y="38.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">12</text>
<line x1="60.0" y1="312" x2="60.0" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="60.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="167.2" y1="312" x2="167.2" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="167.2" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">10</text>
<line x1="274.4" y1="312" x2="274.4" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="274.4" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">20</text>
<line x1="381.6" y1="312" x2="381.6" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="381.6" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">30</text>
<line x1="488.8" y1="312" x2="488.8" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="488.8" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">40</text>
<line x1="596.0" y1="312" x2="596.0" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="596.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">50</text>
<line x1="60" y1="34" x2="60" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="60" y1="312" x2="596" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<text x="328" y="354" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85">rounds played</text>
<text x="14" y="173" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85" transform="rotate(-90 14 173)">wealth (multiple of start)</text>
<path d="M 60.0 288.8 L 62.1 288.6 L 64.1 288.4 L 66.2 288.2 L 68.2 287.9 L 70.3 287.7 L 72.4 287.5 L 74.4 287.3 L 76.5 287.0 L 78.6 286.8 L 80.6 286.6 L 82.7 286.3 L 84.7 286.1 L 86.8 285.8 L 88.9 285.6 L 90.9 285.3 L 93.0 285.1 L 95.0 284.8 L 97.1 284.6 L 99.2 284.3 L 101.2 284.1 L 103.3 283.8 L 105.4 283.5 L 107.4 283.3 L 109.5 283.0 L 111.5 282.7 L 113.6 282.4 L 115.7 282.2 L 117.7 281.9 L 119.8 281.6 L 121.8 281.3 L 123.9 281.0 L 126.0 280.7 L 128.0 280.4 L 130.1 280.1 L 132.2 279.8 L 134.2 279.5 L 136.3 279.2 L 138.3 278.9 L 140.4 278.6 L 142.5 278.3 L 144.5 278.0 L 146.6 277.6 L 148.6 277.3 L 150.7 277.0 L 152.8 276.7 L 154.8 276.3 L 156.9 276.0 L 159.0 275.7 L 161.0 275.3 L 163.1 275.0 L 165.1 274.6 L 167.2 274.3 L 169.3 273.9 L 171.3 273.5 L 173.4 273.2 L 175.4 272.8 L 177.5 272.5 L 179.6 272.1 L 181.6 271.7 L 183.7 271.3 L 185.8 270.9 L 187.8 270.6 L 189.9 270.2 L 191.9 269.8 L 194.0 269.4 L 196.1 269.0 L 198.1 268.6 L 200.2 268.2 L 202.2 267.7 L 204.3 267.3 L 206.4 266.9 L 208.4 266.5 L 210.5 266.0 L 212.6 265.6 L 214.6 265.2 L 216.7 264.7 L 218.7 264.3 L 220.8 263.8 L 222.9 263.4 L 224.9 262.9 L 227.0 262.5 L 229.0 262.0 L 231.1 261.5 L 233.2 261.0 L 235.2 260.6 L 237.3 260.1 L 239.4 259.6 L 241.4 259.1 L 243.5 258.6 L 245.5 258.1 L 247.6 257.6 L 249.7 257.1 L 251.7 256.6 L 253.8 256.0 L 255.8 255.5 L 257.9 255.0 L 260.0 254.4 L 262.0 253.9 L 264.1 253.3 L 266.2 252.8 L 268.2 252.2 L 270.3 251.7 L 272.3 251.1 L 274.4 250.5 L 276.5 250.0 L 278.5 249.4 L 280.6 248.8 L 282.6 248.2 L 284.7 247.6 L 286.8 247.0 L 288.8 246.4 L 290.9 245.7 L 293.0 245.1 L 295.0 244.5 L 297.1 243.8 L 299.1 243.2 L 301.2 242.6 L 303.3 241.9 L 305.3 241.2 L 307.4 240.6 L 309.4 239.9 L 311.5 239.2 L 313.6 238.5 L 315.6 237.8 L 317.7 237.1 L 319.8 236.4 L 321.8 235.7 L 323.9 235.0 L 325.9 234.3 L 328.0 233.5 L 330.1 232.8 L 332.1 232.1 L 334.2 231.3 L 336.2 230.5 L 338.3 229.8 L 340.4 229.0 L 342.4 228.2 L 344.5 227.4 L 346.6 226.6 L 348.6 225.8 L 350.7 225.0 L 352.7 224.2 L 354.8 223.4 L 356.9 222.5 L 358.9 221.7 L 361.0 220.8 L 363.0 220.0 L 365.1 219.1 L 367.2 218.2 L 369.2 217.4 L 371.3 216.5 L 373.4 215.6 L 375.4 214.7 L 377.5 213.7 L 379.5 212.8 L 381.6 211.9 L 383.7 210.9 L 385.7 210.0 L 387.8 209.0 L 389.8 208.0 L 391.9 207.1 L 394.0 206.1 L 396.0 205.1 L 398.1 204.1 L 400.2 203.1 L 402.2 202.0 L 404.3 201.0 L 406.3 199.9 L 408.4 198.9 L 410.5 197.8 L 412.5 196.7 L 414.6 195.7 L 416.6 194.6 L 418.7 193.5 L 420.8 192.3 L 422.8 191.2 L 424.9 190.1 L 427.0 188.9 L 429.0 187.8 L 431.1 186.6 L 433.1 185.4 L 435.2 184.2 L 437.3 183.0 L 439.3 181.8 L 441.4 180.6 L 443.4 179.3 L 445.5 178.1 L 447.6 176.8 L 449.6 175.5 L 451.7 174.3 L 453.8 173.0 L 455.8 171.6 L 457.9 170.3 L 459.9 169.0 L 462.0 167.6 L 464.1 166.3 L 466.1 164.9 L 468.2 163.5 L 470.2 162.1 L 472.3 160.7 L 474.4 159.3 L 476.4 157.8 L 478.5 156.4 L 480.6 154.9 L 482.6 153.4 L 484.7 151.9 L 486.7 150.4 L 488.8 148.9 L 490.9 147.4 L 492.9 145.8 L 495.0 144.3 L 497.0 142.7 L 499.1 141.1 L 501.2 139.5 L 503.2 137.8 L 505.3 136.2 L 507.4 134.5 L 509.4 132.9 L 511.5 131.2 L 513.5 129.5 L 515.6 127.7 L 517.7 126.0 L 519.7 124.3 L 521.8 122.5 L 523.8 120.7 L 525.9 118.9 L 528.0 117.1 L 530.0 115.2 L 532.1 113.4 L 534.2 111.5 L 536.2 109.6 L 538.3 107.7 L 540.3 105.8 L 542.4 103.8 L 544.5 101.9 L 546.5 99.9 L 548.6 97.9 L 550.6 95.9 L 552.7 93.8 L 554.8 91.8 L 556.8 89.7 L 558.9 87.6 L 561.0 85.5 L 563.0 83.4 L 565.1 81.2 L 567.1 79.0 L 569.2 76.8 L 571.3 74.6 L 573.3 72.4 L 575.4 70.1 L 577.4 67.9 L 579.5 65.5 L 581.6 63.2 L 583.6 60.9 L 585.7 58.5 L 587.8 56.1 L 589.8 53.7 L 591.9 51.3 L 593.9 48.8 L 596.0 46.3" fill="none" stroke="#f97316" stroke-width="2.6" stroke-dasharray="6 5" stroke-linejoin="round" stroke-linecap="round"/>
<path d="M 60.0 288.8 L 62.1 289.1 L 64.1 289.3 L 66.2 289.5 L 68.2 289.8 L 70.3 290.0 L 72.4 290.2 L 74.4 290.4 L 76.5 290.6 L 78.6 290.9 L 80.6 291.1 L 82.7 291.3 L 84.7 291.5 L 86.8 291.7 L 88.9 291.9 L 90.9 292.1 L 93.0 292.3 L 95.0 292.5 L 97.1 292.7 L 99.2 292.9 L 101.2 293.1 L 103.3 293.3 L 105.4 293.5 L 107.4 293.6 L 109.5 293.8 L 111.5 294.0 L 113.6 294.2 L 115.7 294.4 L 117.7 294.6 L 119.8 294.7 L 121.8 294.9 L 123.9 295.1 L 126.0 295.2 L 128.0 295.4 L 130.1 295.6 L 132.2 295.7 L 134.2 295.9 L 136.3 296.1 L 138.3 296.2 L 140.4 296.4 L 142.5 296.6 L 144.5 296.7 L 146.6 296.9 L 148.6 297.0 L 150.7 297.2 L 152.8 297.3 L 154.8 297.5 L 156.9 297.6 L 159.0 297.8 L 161.0 297.9 L 163.1 298.0 L 165.1 298.2 L 167.2 298.3 L 169.3 298.5 L 171.3 298.6 L 173.4 298.7 L 175.4 298.9 L 177.5 299.0 L 179.6 299.1 L 181.6 299.3 L 183.7 299.4 L 185.8 299.5 L 187.8 299.6 L 189.9 299.8 L 191.9 299.9 L 194.0 300.0 L 196.1 300.1 L 198.1 300.2 L 200.2 300.4 L 202.2 300.5 L 204.3 300.6 L 206.4 300.7 L 208.4 300.8 L 210.5 300.9 L 212.6 301.1 L 214.6 301.2 L 216.7 301.3 L 218.7 301.4 L 220.8 301.5 L 222.9 301.6 L 224.9 301.7 L 227.0 301.8 L 229.0 301.9 L 231.1 302.0 L 233.2 302.1 L 235.2 302.2 L 237.3 302.3 L 239.4 302.4 L 241.4 302.5 L 243.5 302.6 L 245.5 302.7 L 247.6 302.8 L 249.7 302.9 L 251.7 303.0 L 253.8 303.1 L 255.8 303.2 L 257.9 303.2 L 260.0 303.3 L 262.0 303.4 L 264.1 303.5 L 266.2 303.6 L 268.2 303.7 L 270.3 303.8 L 272.3 303.8 L 274.4 303.9 L 276.5 304.0 L 278.5 304.1 L 280.6 304.2 L 282.6 304.2 L 284.7 304.3 L 286.8 304.4 L 288.8 304.5 L 290.9 304.6 L 293.0 304.6 L 295.0 304.7 L 297.1 304.8 L 299.1 304.8 L 301.2 304.9 L 303.3 305.0 L 305.3 305.1 L 307.4 305.1 L 309.4 305.2 L 311.5 305.3 L 313.6 305.3 L 315.6 305.4 L 317.7 305.5 L 319.8 305.5 L 321.8 305.6 L 323.9 305.7 L 325.9 305.7 L 328.0 305.8 L 330.1 305.9 L 332.1 305.9 L 334.2 306.0 L 336.2 306.0 L 338.3 306.1 L 340.4 306.2 L 342.4 306.2 L 344.5 306.3 L 346.6 306.3 L 348.6 306.4 L 350.7 306.4 L 352.7 306.5 L 354.8 306.6 L 356.9 306.6 L 358.9 306.7 L 361.0 306.7 L 363.0 306.8 L 365.1 306.8 L 367.2 306.9 L 369.2 306.9 L 371.3 307.0 L 373.4 307.0 L 375.4 307.1 L 377.5 307.1 L 379.5 307.2 L 381.6 307.2 L 383.7 307.3 L 385.7 307.3 L 387.8 307.4 L 389.8 307.4 L 391.9 307.5 L 394.0 307.5 L 396.0 307.6 L 398.1 307.6 L 400.2 307.6 L 402.2 307.7 L 404.3 307.7 L 406.3 307.8 L 408.4 307.8 L 410.5 307.9 L 412.5 307.9 L 414.6 307.9 L 416.6 308.0 L 418.7 308.0 L 420.8 308.1 L 422.8 308.1 L 424.9 308.1 L 427.0 308.2 L 429.0 308.2 L 431.1 308.3 L 433.1 308.3 L 435.2 308.3 L 437.3 308.4 L 439.3 308.4 L 441.4 308.4 L 443.4 308.5 L 445.5 308.5 L 447.6 308.6 L 449.6 308.6 L 451.7 308.6 L 453.8 308.7 L 455.8 308.7 L 457.9 308.7 L 459.9 308.8 L 462.0 308.8 L 464.1 308.8 L 466.1 308.9 L 468.2 308.9 L 470.2 308.9 L 472.3 308.9 L 474.4 309.0 L 476.4 309.0 L 478.5 309.0 L 480.6 309.1 L 482.6 309.1 L 484.7 309.1 L 486.7 309.2 L 488.8 309.2 L 490.9 309.2 L 492.9 309.2 L 495.0 309.3 L 497.0 309.3 L 499.1 309.3 L 501.2 309.3 L 503.2 309.4 L 505.3 309.4 L 507.4 309.4 L 509.4 309.5 L 511.5 309.5 L 513.5 309.5 L 515.6 309.5 L 517.7 309.6 L 519.7 309.6 L 521.8 309.6 L 523.8 309.6 L 525.9 309.7 L 528.0 309.7 L 530.0 309.7 L 532.1 309.7 L 534.2 309.7 L 536.2 309.8 L 538.3 309.8 L 540.3 309.8 L 542.4 309.8 L 544.5 309.9 L 546.5 309.9 L 548.6 309.9 L 550.6 309.9 L 552.7 309.9 L 554.8 310.0 L 556.8 310.0 L 558.9 310.0 L 561.0 310.0 L 563.0 310.0 L 565.1 310.1 L 567.1 310.1 L 569.2 310.1 L 571.3 310.1 L 573.3 310.1 L 575.4 310.2 L 577.4 310.2 L 579.5 310.2 L 581.6 310.2 L 583.6 310.2 L 585.7 310.3 L 587.8 310.3 L 589.8 310.3 L 591.9 310.3 L 593.9 310.3 L 596.0 310.3" fill="none" stroke="#3b82f6" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>
<text x="525.7" y="103.8" text-anchor="end" font-size="11.5" fill="#f97316">the crowd's average</text>
<text x="385.6" y="301.4" text-anchor="start" font-size="11.5" fill="#3b82f6">what one player lives</text>
<line x1="120" y1="250" x2="142" y2="250" stroke="#f97316" stroke-width="2.6" stroke-dasharray="6 5"/>
<text x="148" y="254" font-size="12" fill="currentColor" fill-opacity="0.9">ensemble average (+5%/round)</text>
<line x1="120" y1="268" x2="142" y2="268" stroke="#3b82f6" stroke-width="2.6"/>
<text x="148" y="272" font-size="12" fill="currentColor" fill-opacity="0.9">median path (-5.1%/round)</text>
</svg>
<figcaption style="text-align:center;font-size:0.85rem;opacity:0.7;margin-top:0.5rem">Both lines describe the +50/-40 coin. The rising one averages over a crowd; the falling one is the single path you actually walk. The bet is good for the population and ruinous for the person.</figcaption>
</figure>

the rising line is real and the falling line is real. they describe the same bet. the rising one is just answering a question about a population, and you are not a population.

## the average is hijacked by people who do not exist

why does the ensemble average rise when almost everyone falls? because it is propped up by a vanishingly thin sliver of absurd winners.

after $n$ rounds, your pot is decided entirely by how many heads you got. get them all and you are a multimillionaire; that path has probability $1/2^{n}$, which after fifty rounds is about one in a thousand trillion. nobody you will ever meet is on it. but the payoff on that path is so enormous that, multiplied by its microscopic probability, it single-handedly holds the average up.

so the distribution of outcomes is wildly lopsided. the *typical* player, the one in the middle, is far below the *mean* player, and the mean player is a statistical fiction living out in the right tail:

<figure style="margin:1.6rem 0">
<svg viewBox="0 0 620 360" role="img" aria-label="After 50 rounds: where players actually land" style="width:100%;max-width:620px;height:auto;font-family:inherit;display:block;margin:0 auto">
<text x="310" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">After 50 rounds: where players actually land</text>
<line x1="60" y1="312.0" x2="596" y2="312.0" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="52" y="316.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="60" y1="226.5" x2="596" y2="226.5" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="52" y="230.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="60" y1="140.9" x2="596" y2="140.9" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="52" y="144.9" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">0.1</text>
<line x1="60" y1="55.4" x2="596" y2="55.4" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="52" y="59.4" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">0.1</text>
<line x1="76.8" y1="312" x2="76.8" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="76.8" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0.001x</text>
<line x1="160.5" y1="312" x2="160.5" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="160.5" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0.01x</text>
<line x1="244.2" y1="312" x2="244.2" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="244.2" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0.1x</text>
<line x1="328.0" y1="312" x2="328.0" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="328.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">1x</text>
<line x1="411.8" y1="312" x2="411.8" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="411.8" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">10x</text>
<line x1="495.5" y1="312" x2="495.5" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="495.5" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">100x</text>
<line x1="579.2" y1="312" x2="579.2" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="579.2" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">1000x</text>
<line x1="60" y1="34" x2="60" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="60" y1="312" x2="596" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<text x="328" y="354" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85">final wealth (multiple of start, log scale)</text>
<text x="14" y="173" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85" transform="rotate(-90 14 173)">probability</text>
<line x1="232.2" y1="40" x2="232.2" y2="312" stroke="#3b82f6" stroke-width="1.6" stroke-opacity="0.9"/>
<text x="227.2" y="58.0" text-anchor="end" font-size="11.5" fill="#3b82f6">median: 0.07x</text>
<line x1="416.7" y1="40" x2="416.7" y2="312" stroke="#f97316" stroke-width="1.6" stroke-opacity="0.9" stroke-dasharray="5 4"/>
<text x="421.7" y="46.0" text-anchor="start" font-size="11.5" fill="#f97316">mean: 11.5x</text>
<path d="M 60.0 227.8 L 62.1 225.8 L 64.1 223.9 L 66.2 221.8 L 68.2 219.4 L 70.3 217.0 L 72.4 214.6 L 74.4 212.3 L 76.5 209.9 L 78.6 207.5 L 80.6 205.2 L 82.7 202.8 L 84.7 200.4 L 86.8 198.0 L 88.9 195.7 L 90.9 193.3 L 93.0 190.9 L 95.0 188.5 L 97.1 186.2 L 99.2 183.8 L 101.2 181.3 L 103.3 178.7 L 105.4 176.2 L 107.4 173.7 L 109.5 171.2 L 111.5 168.7 L 113.6 166.2 L 115.7 163.6 L 117.7 161.1 L 119.8 158.6 L 121.8 156.1 L 123.9 153.6 L 126.0 151.1 L 128.0 148.5 L 130.1 146.0 L 132.2 143.5 L 134.2 141.2 L 136.3 139.0 L 138.3 136.7 L 140.4 134.4 L 142.5 132.2 L 144.5 129.9 L 146.6 127.6 L 148.6 125.4 L 150.7 123.1 L 152.8 120.8 L 154.8 118.6 L 156.9 116.3 L 159.0 114.0 L 161.0 111.8 L 163.1 109.5 L 165.1 107.2 L 167.2 105.5 L 169.3 103.9 L 171.3 102.3 L 173.4 100.8 L 175.4 99.2 L 177.5 97.6 L 179.6 96.0 L 181.6 94.4 L 183.7 92.8 L 185.8 91.2 L 187.8 89.6 L 189.9 88.1 L 191.9 86.5 L 194.0 84.9 L 196.1 83.3 L 198.1 81.7 L 200.2 80.8 L 202.2 80.2 L 204.3 79.6 L 206.4 79.1 L 208.4 78.5 L 210.5 77.9 L 212.6 77.3 L 214.6 76.8 L 216.7 76.2 L 218.7 75.6 L 220.8 75.1 L 222.9 74.5 L 224.9 73.9 L 227.0 73.3 L 229.0 72.8 L 231.1 72.2 L 233.2 72.2 L 235.2 72.7 L 237.3 73.3 L 239.4 73.9 L 241.4 74.5 L 243.5 75.0 L 245.5 75.6 L 247.6 76.2 L 249.7 76.7 L 251.7 77.3 L 253.8 77.9 L 255.8 78.5 L 257.9 79.0 L 260.0 79.6 L 262.0 80.2 L 264.1 80.7 L 266.2 81.6 L 268.2 83.2 L 270.3 84.8 L 272.3 86.4 L 274.4 88.0 L 276.5 89.6 L 278.5 91.1 L 280.6 92.7 L 282.6 94.3 L 284.7 95.9 L 286.8 97.5 L 288.8 99.1 L 290.9 100.7 L 293.0 102.3 L 295.0 103.8 L 297.1 105.4 L 299.1 107.1 L 301.2 109.4 L 303.3 111.6 L 305.3 113.9 L 307.4 116.2 L 309.4 118.4 L 311.5 120.7 L 313.6 123.0 L 315.6 125.2 L 317.7 127.5 L 319.8 129.8 L 321.8 132.0 L 323.9 134.3 L 325.9 136.6 L 328.0 138.8 L 330.1 141.1 L 332.1 143.4 L 334.2 145.9 L 336.2 148.4 L 338.3 150.9 L 340.4 153.4 L 342.4 156.0 L 344.5 158.5 L 346.6 161.0 L 348.6 163.5 L 350.7 166.0 L 352.7 168.5 L 354.8 171.1 L 356.9 173.6 L 358.9 176.1 L 361.0 178.6 L 363.0 181.1 L 365.1 183.6 L 367.2 186.0 L 369.2 188.4 L 371.3 190.8 L 373.4 193.2 L 375.4 195.5 L 377.5 197.9 L 379.5 200.3 L 381.6 202.6 L 383.7 205.0 L 385.7 207.4 L 387.8 209.8 L 389.8 212.1 L 391.9 214.5 L 394.0 216.9 L 396.0 219.3 L 398.1 221.6 L 400.2 223.7 L 402.2 225.7 L 404.3 227.7 L 406.3 229.6 L 408.4 231.6 L 410.5 233.6 L 412.5 235.5 L 414.6 237.5 L 416.6 239.5 L 418.7 241.4 L 420.8 243.4 L 422.8 245.4 L 424.9 247.3 L 427.0 249.3 L 429.0 251.3 L 431.1 253.2 L 433.1 254.9 L 435.2 256.4 L 437.3 257.8 L 439.3 259.3 L 441.4 260.7 L 443.4 262.2 L 445.5 263.6 L 447.6 265.1 L 449.6 266.5 L 451.7 268.0 L 453.8 269.5 L 455.8 270.9 L 457.9 272.4 L 459.9 273.8 L 462.0 275.3 L 464.1 276.7 L 466.1 278.0 L 468.2 279.0 L 470.2 279.9 L 472.3 280.9 L 474.4 281.9 L 476.4 282.8 L 478.5 283.8 L 480.6 284.8 L 482.6 285.7 L 484.7 286.7 L 486.7 287.6 L 488.8 288.6 L 490.9 289.6 L 492.9 290.5 L 495.0 291.5 L 497.0 292.5 L 499.1 293.4 L 501.2 294.0 L 503.2 294.5 L 505.3 295.1 L 507.4 295.7 L 509.4 296.3 L 511.5 296.8 L 513.5 297.4 L 515.6 298.0 L 517.7 298.6 L 519.7 299.2 L 521.8 299.7 L 523.8 300.3 L 525.9 300.9 L 528.0 301.5 L 530.0 302.1 L 532.1 302.6 L 534.2 303.0 L 536.2 303.3 L 538.3 303.6 L 540.3 303.9 L 542.4 304.2 L 544.5 304.5 L 546.5 304.8 L 548.6 305.2 L 550.6 305.5 L 552.7 305.8 L 554.8 306.1 L 556.8 306.4 L 558.9 306.7 L 561.0 307.0 L 563.0 307.4 L 565.1 307.7 L 567.1 307.8 L 569.2 308.0 L 571.3 308.2 L 573.3 308.3 L 575.4 308.5 L 577.4 308.6 L 579.5 308.8 L 581.6 308.9 L 583.6 309.1 L 585.7 309.2 L 587.8 309.4 L 589.8 309.5 L 591.9 309.7 L 593.9 309.9 L 596.0 310.0 L 596.0 312.0 L 60.0 312.0 Z" fill="#3b82f6" fill-opacity="0.12" stroke="none"/>
<path d="M 60.0 227.8 L 62.1 225.8 L 64.1 223.9 L 66.2 221.8 L 68.2 219.4 L 70.3 217.0 L 72.4 214.6 L 74.4 212.3 L 76.5 209.9 L 78.6 207.5 L 80.6 205.2 L 82.7 202.8 L 84.7 200.4 L 86.8 198.0 L 88.9 195.7 L 90.9 193.3 L 93.0 190.9 L 95.0 188.5 L 97.1 186.2 L 99.2 183.8 L 101.2 181.3 L 103.3 178.7 L 105.4 176.2 L 107.4 173.7 L 109.5 171.2 L 111.5 168.7 L 113.6 166.2 L 115.7 163.6 L 117.7 161.1 L 119.8 158.6 L 121.8 156.1 L 123.9 153.6 L 126.0 151.1 L 128.0 148.5 L 130.1 146.0 L 132.2 143.5 L 134.2 141.2 L 136.3 139.0 L 138.3 136.7 L 140.4 134.4 L 142.5 132.2 L 144.5 129.9 L 146.6 127.6 L 148.6 125.4 L 150.7 123.1 L 152.8 120.8 L 154.8 118.6 L 156.9 116.3 L 159.0 114.0 L 161.0 111.8 L 163.1 109.5 L 165.1 107.2 L 167.2 105.5 L 169.3 103.9 L 171.3 102.3 L 173.4 100.8 L 175.4 99.2 L 177.5 97.6 L 179.6 96.0 L 181.6 94.4 L 183.7 92.8 L 185.8 91.2 L 187.8 89.6 L 189.9 88.1 L 191.9 86.5 L 194.0 84.9 L 196.1 83.3 L 198.1 81.7 L 200.2 80.8 L 202.2 80.2 L 204.3 79.6 L 206.4 79.1 L 208.4 78.5 L 210.5 77.9 L 212.6 77.3 L 214.6 76.8 L 216.7 76.2 L 218.7 75.6 L 220.8 75.1 L 222.9 74.5 L 224.9 73.9 L 227.0 73.3 L 229.0 72.8 L 231.1 72.2 L 233.2 72.2 L 235.2 72.7 L 237.3 73.3 L 239.4 73.9 L 241.4 74.5 L 243.5 75.0 L 245.5 75.6 L 247.6 76.2 L 249.7 76.7 L 251.7 77.3 L 253.8 77.9 L 255.8 78.5 L 257.9 79.0 L 260.0 79.6 L 262.0 80.2 L 264.1 80.7 L 266.2 81.6 L 268.2 83.2 L 270.3 84.8 L 272.3 86.4 L 274.4 88.0 L 276.5 89.6 L 278.5 91.1 L 280.6 92.7 L 282.6 94.3 L 284.7 95.9 L 286.8 97.5 L 288.8 99.1 L 290.9 100.7 L 293.0 102.3 L 295.0 103.8 L 297.1 105.4 L 299.1 107.1 L 301.2 109.4 L 303.3 111.6 L 305.3 113.9 L 307.4 116.2 L 309.4 118.4 L 311.5 120.7 L 313.6 123.0 L 315.6 125.2 L 317.7 127.5 L 319.8 129.8 L 321.8 132.0 L 323.9 134.3 L 325.9 136.6 L 328.0 138.8 L 330.1 141.1 L 332.1 143.4 L 334.2 145.9 L 336.2 148.4 L 338.3 150.9 L 340.4 153.4 L 342.4 156.0 L 344.5 158.5 L 346.6 161.0 L 348.6 163.5 L 350.7 166.0 L 352.7 168.5 L 354.8 171.1 L 356.9 173.6 L 358.9 176.1 L 361.0 178.6 L 363.0 181.1 L 365.1 183.6 L 367.2 186.0 L 369.2 188.4 L 371.3 190.8 L 373.4 193.2 L 375.4 195.5 L 377.5 197.9 L 379.5 200.3 L 381.6 202.6 L 383.7 205.0 L 385.7 207.4 L 387.8 209.8 L 389.8 212.1 L 391.9 214.5 L 394.0 216.9 L 396.0 219.3 L 398.1 221.6 L 400.2 223.7 L 402.2 225.7 L 404.3 227.7 L 406.3 229.6 L 408.4 231.6 L 410.5 233.6 L 412.5 235.5 L 414.6 237.5 L 416.6 239.5 L 418.7 241.4 L 420.8 243.4 L 422.8 245.4 L 424.9 247.3 L 427.0 249.3 L 429.0 251.3 L 431.1 253.2 L 433.1 254.9 L 435.2 256.4 L 437.3 257.8 L 439.3 259.3 L 441.4 260.7 L 443.4 262.2 L 445.5 263.6 L 447.6 265.1 L 449.6 266.5 L 451.7 268.0 L 453.8 269.5 L 455.8 270.9 L 457.9 272.4 L 459.9 273.8 L 462.0 275.3 L 464.1 276.7 L 466.1 278.0 L 468.2 279.0 L 470.2 279.9 L 472.3 280.9 L 474.4 281.9 L 476.4 282.8 L 478.5 283.8 L 480.6 284.8 L 482.6 285.7 L 484.7 286.7 L 486.7 287.6 L 488.8 288.6 L 490.9 289.6 L 492.9 290.5 L 495.0 291.5 L 497.0 292.5 L 499.1 293.4 L 501.2 294.0 L 503.2 294.5 L 505.3 295.1 L 507.4 295.7 L 509.4 296.3 L 511.5 296.8 L 513.5 297.4 L 515.6 298.0 L 517.7 298.6 L 519.7 299.2 L 521.8 299.7 L 523.8 300.3 L 525.9 300.9 L 528.0 301.5 L 530.0 302.1 L 532.1 302.6 L 534.2 303.0 L 536.2 303.3 L 538.3 303.6 L 540.3 303.9 L 542.4 304.2 L 544.5 304.5 L 546.5 304.8 L 548.6 305.2 L 550.6 305.5 L 552.7 305.8 L 554.8 306.1 L 556.8 306.4 L 558.9 306.7 L 561.0 307.0 L 563.0 307.4 L 565.1 307.7 L 567.1 307.8 L 569.2 308.0 L 571.3 308.2 L 573.3 308.3 L 575.4 308.5 L 577.4 308.6 L 579.5 308.8 L 581.6 308.9 L 583.6 309.1 L 585.7 309.2 L 587.8 309.4 L 589.8 309.5 L 591.9 309.7 L 593.9 309.9 L 596.0 310.0" fill="none" stroke="#3b82f6" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>
</svg>
<figcaption style="text-align:center;font-size:0.85rem;opacity:0.7;margin-top:0.5rem">The hump is where players are; the orange line is the mean. It sits far out in the thin right tail, held aloft by a handful of all-heads fortunes nobody lives. That gap between the hump and the mean is the lie.</figcaption>
</figure>

this is the precise sense in which the average is a lie. it is not wrong arithmetic. it is a correct number describing a place on the map where almost no one lands.

## the volatility drag

you can hold the edge fixed and watch volatility alone do the damage. keep the arithmetic mean pinned at +5 percent, but change how wide the swing is: heads gives $1.05 + s$, tails gives $1.05 - s$. the ensemble average is still exactly 1.05 for any $s$. the growth you actually live is

$$ g = \sqrt{(1.05+s)(1.05-s)} = \sqrt{1.1025 - s^{2}} $$

which sinks as the swing $s$ widens, and crosses from gain into loss once the swing is big enough, even though the "expected return" never moved:

<figure style="margin:1.6rem 0">
<svg viewBox="0 0 620 360" role="img" aria-label="Volatility is a tax the average hides" style="width:100%;max-width:620px;height:auto;font-family:inherit;display:block;margin:0 auto">
<text x="310" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">Volatility is a tax the average hides</text>
<line x1="60" y1="293.5" x2="596" y2="293.5" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="52" y="297.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">-8</text>
<line x1="60" y1="219.3" x2="596" y2="219.3" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="52" y="223.3" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">-4</text>
<line x1="60" y1="145.2" x2="596" y2="145.2" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="52" y="149.2" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="60" y1="71.1" x2="596" y2="71.1" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="52" y="75.1" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">4</text>
<line x1="60.0" y1="312" x2="60.0" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="60.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="167.2" y1="312" x2="167.2" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="167.2" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0.1</text>
<line x1="274.4" y1="312" x2="274.4" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="274.4" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0.2</text>
<line x1="381.6" y1="312" x2="381.6" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="381.6" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0.3</text>
<line x1="488.8" y1="312" x2="488.8" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="488.8" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0.4</text>
<line x1="596.0" y1="312" x2="596.0" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="596.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0.5</text>
<line x1="60" y1="145.2" x2="596" y2="145.2" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/>
<line x1="60" y1="34" x2="60" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="60" y1="312" x2="596" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<text x="328" y="354" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85">size of the swing (s)</text>
<text x="14" y="173" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85" transform="rotate(-90 14 173)">growth rate (% per round)</text>
<path d="M 60.0 52.5 L 62.1 52.5 L 64.1 52.5 L 66.2 52.5 L 68.2 52.5 L 70.3 52.5 L 72.4 52.5 L 74.4 52.5 L 76.5 52.5 L 78.6 52.5 L 80.6 52.5 L 82.7 52.5 L 84.7 52.5 L 86.8 52.5 L 88.9 52.5 L 90.9 52.5 L 93.0 52.5 L 95.0 52.5 L 97.1 52.5 L 99.2 52.5 L 101.2 52.5 L 103.3 52.5 L 105.4 52.5 L 107.4 52.5 L 109.5 52.5 L 111.5 52.5 L 113.6 52.5 L 115.7 52.5 L 117.7 52.5 L 119.8 52.5 L 121.8 52.5 L 123.9 52.5 L 126.0 52.5 L 128.0 52.5 L 130.1 52.5 L 132.2 52.5 L 134.2 52.5 L 136.3 52.5 L 138.3 52.5 L 140.4 52.5 L 142.5 52.5 L 144.5 52.5 L 146.6 52.5 L 148.6 52.5 L 150.7 52.5 L 152.8 52.5 L 154.8 52.5 L 156.9 52.5 L 159.0 52.5 L 161.0 52.5 L 163.1 52.5 L 165.1 52.5 L 167.2 52.5 L 169.3 52.5 L 171.3 52.5 L 173.4 52.5 L 175.4 52.5 L 177.5 52.5 L 179.6 52.5 L 181.6 52.5 L 183.7 52.5 L 185.8 52.5 L 187.8 52.5 L 189.9 52.5 L 191.9 52.5 L 194.0 52.5 L 196.1 52.5 L 198.1 52.5 L 200.2 52.5 L 202.2 52.5 L 204.3 52.5 L 206.4 52.5 L 208.4 52.5 L 210.5 52.5 L 212.6 52.5 L 214.6 52.5 L 216.7 52.5 L 218.7 52.5 L 220.8 52.5 L 222.9 52.5 L 224.9 52.5 L 227.0 52.5 L 229.0 52.5 L 231.1 52.5 L 233.2 52.5 L 235.2 52.5 L 237.3 52.5 L 239.4 52.5 L 241.4 52.5 L 243.5 52.5 L 245.5 52.5 L 247.6 52.5 L 249.7 52.5 L 251.7 52.5 L 253.8 52.5 L 255.8 52.5 L 257.9 52.5 L 260.0 52.5 L 262.0 52.5 L 264.1 52.5 L 266.2 52.5 L 268.2 52.5 L 270.3 52.5 L 272.3 52.5 L 274.4 52.5 L 276.5 52.5 L 278.5 52.5 L 280.6 52.5 L 282.6 52.5 L 284.7 52.5 L 286.8 52.5 L 288.8 52.5 L 290.9 52.5 L 293.0 52.5 L 295.0 52.5 L 297.1 52.5 L 299.1 52.5 L 301.2 52.5 L 303.3 52.5 L 305.3 52.5 L 307.4 52.5 L 309.4 52.5 L 311.5 52.5 L 313.6 52.5 L 315.6 52.5 L 317.7 52.5 L 319.8 52.5 L 321.8 52.5 L 323.9 52.5 L 325.9 52.5 L 328.0 52.5 L 330.1 52.5 L 332.1 52.5 L 334.2 52.5 L 336.2 52.5 L 338.3 52.5 L 340.4 52.5 L 342.4 52.5 L 344.5 52.5 L 346.6 52.5 L 348.6 52.5 L 350.7 52.5 L 352.7 52.5 L 354.8 52.5 L 356.9 52.5 L 358.9 52.5 L 361.0 52.5 L 363.0 52.5 L 365.1 52.5 L 367.2 52.5 L 369.2 52.5 L 371.3 52.5 L 373.4 52.5 L 375.4 52.5 L 377.5 52.5 L 379.5 52.5 L 381.6 52.5 L 383.7 52.5 L 385.7 52.5 L 387.8 52.5 L 389.8 52.5 L 391.9 52.5 L 394.0 52.5 L 396.0 52.5 L 398.1 52.5 L 400.2 52.5 L 402.2 52.5 L 404.3 52.5 L 406.3 52.5 L 408.4 52.5 L 410.5 52.5 L 412.5 52.5 L 414.6 52.5 L 416.6 52.5 L 418.7 52.5 L 420.8 52.5 L 422.8 52.5 L 424.9 52.5 L 427.0 52.5 L 429.0 52.5 L 431.1 52.5 L 433.1 52.5 L 435.2 52.5 L 437.3 52.5 L 439.3 52.5 L 441.4 52.5 L 443.4 52.5 L 445.5 52.5 L 447.6 52.5 L 449.6 52.5 L 451.7 52.5 L 453.8 52.5 L 455.8 52.5 L 457.9 52.5 L 459.9 52.5 L 462.0 52.5 L 464.1 52.5 L 466.1 52.5 L 468.2 52.5 L 470.2 52.5 L 472.3 52.5 L 474.4 52.5 L 476.4 52.5 L 478.5 52.5 L 480.6 52.5 L 482.6 52.5 L 484.7 52.5 L 486.7 52.5 L 488.8 52.5 L 490.9 52.5 L 492.9 52.5 L 495.0 52.5 L 497.0 52.5 L 499.1 52.5 L 501.2 52.5 L 503.2 52.5 L 505.3 52.5 L 507.4 52.5 L 509.4 52.5 L 511.5 52.5 L 513.5 52.5 L 515.6 52.5 L 517.7 52.5 L 519.7 52.5 L 521.8 52.5 L 523.8 52.5 L 525.9 52.5 L 528.0 52.5 L 530.0 52.5 L 532.1 52.5 L 534.2 52.5 L 536.2 52.5 L 538.3 52.5 L 540.3 52.5 L 542.4 52.5 L 544.5 52.5 L 546.5 52.5 L 548.6 52.5 L 550.6 52.5 L 552.7 52.5 L 554.8 52.5 L 556.8 52.5 L 558.9 52.5 L 561.0 52.5 L 563.0 52.5 L 565.1 52.5 L 567.1 52.5 L 569.2 52.5 L 571.3 52.5 L 573.3 52.5 L 575.4 52.5 L 577.4 52.5 L 579.5 52.5 L 581.6 52.5 L 583.6 52.5 L 585.7 52.5 L 587.8 52.5 L 589.8 52.5 L 591.9 52.5 L 593.9 52.5 L 596.0 52.5" fill="none" stroke="#f97316" stroke-width="2.6" stroke-dasharray="6 5" stroke-linejoin="round" stroke-linecap="round"/>
<path d="M 60.0 52.5 L 62.1 52.5 L 64.1 52.5 L 66.2 52.6 L 68.2 52.6 L 70.3 52.6 L 72.4 52.7 L 74.4 52.7 L 76.5 52.7 L 78.6 52.8 L 80.6 52.9 L 82.7 52.9 L 84.7 53.0 L 86.8 53.1 L 88.9 53.2 L 90.9 53.3 L 93.0 53.4 L 95.0 53.5 L 97.1 53.6 L 99.2 53.7 L 101.2 53.8 L 103.3 54.0 L 105.4 54.1 L 107.4 54.3 L 109.5 54.4 L 111.5 54.6 L 113.6 54.7 L 115.7 54.9 L 117.7 55.1 L 119.8 55.3 L 121.8 55.5 L 123.9 55.7 L 126.0 55.9 L 128.0 56.1 L 130.1 56.3 L 132.2 56.5 L 134.2 56.8 L 136.3 57.0 L 138.3 57.3 L 140.4 57.5 L 142.5 57.8 L 144.5 58.0 L 146.6 58.3 L 148.6 58.6 L 150.7 58.9 L 152.8 59.2 L 154.8 59.5 L 156.9 59.8 L 159.0 60.1 L 161.0 60.4 L 163.1 60.7 L 165.1 61.0 L 167.2 61.4 L 169.3 61.7 L 171.3 62.1 L 173.4 62.4 L 175.4 62.8 L 177.5 63.2 L 179.6 63.5 L 181.6 63.9 L 183.7 64.3 L 185.8 64.7 L 187.8 65.1 L 189.9 65.5 L 191.9 65.9 L 194.0 66.4 L 196.1 66.8 L 198.1 67.2 L 200.2 67.7 L 202.2 68.1 L 204.3 68.6 L 206.4 69.1 L 208.4 69.5 L 210.5 70.0 L 212.6 70.5 L 214.6 71.0 L 216.7 71.5 L 218.7 72.0 L 220.8 72.5 L 222.9 73.0 L 224.9 73.5 L 227.0 74.1 L 229.0 74.6 L 231.1 75.1 L 233.2 75.7 L 235.2 76.3 L 237.3 76.8 L 239.4 77.4 L 241.4 78.0 L 243.5 78.6 L 245.5 79.2 L 247.6 79.8 L 249.7 80.4 L 251.7 81.0 L 253.8 81.6 L 255.8 82.2 L 257.9 82.8 L 260.0 83.5 L 262.0 84.1 L 264.1 84.8 L 266.2 85.5 L 268.2 86.1 L 270.3 86.8 L 272.3 87.5 L 274.4 88.2 L 276.5 88.9 L 278.5 89.6 L 280.6 90.3 L 282.6 91.0 L 284.7 91.7 L 286.8 92.4 L 288.8 93.2 L 290.9 93.9 L 293.0 94.7 L 295.0 95.4 L 297.1 96.2 L 299.1 97.0 L 301.2 97.7 L 303.3 98.5 L 305.3 99.3 L 307.4 100.1 L 309.4 100.9 L 311.5 101.7 L 313.6 102.6 L 315.6 103.4 L 317.7 104.2 L 319.8 105.1 L 321.8 105.9 L 323.9 106.8 L 325.9 107.6 L 328.0 108.5 L 330.1 109.4 L 332.1 110.3 L 334.2 111.2 L 336.2 112.0 L 338.3 113.0 L 340.4 113.9 L 342.4 114.8 L 344.5 115.7 L 346.6 116.7 L 348.6 117.6 L 350.7 118.5 L 352.7 119.5 L 354.8 120.5 L 356.9 121.4 L 358.9 122.4 L 361.0 123.4 L 363.0 124.4 L 365.1 125.4 L 367.2 126.4 L 369.2 127.4 L 371.3 128.4 L 373.4 129.5 L 375.4 130.5 L 377.5 131.5 L 379.5 132.6 L 381.6 133.7 L 383.7 134.7 L 385.7 135.8 L 387.8 136.9 L 389.8 138.0 L 391.9 139.1 L 394.0 140.2 L 396.0 141.3 L 398.1 142.4 L 400.2 143.5 L 402.2 144.7 L 404.3 145.8 L 406.3 146.9 L 408.4 148.1 L 410.5 149.3 L 412.5 150.4 L 414.6 151.6 L 416.6 152.8 L 418.7 154.0 L 420.8 155.2 L 422.8 156.4 L 424.9 157.6 L 427.0 158.8 L 429.0 160.1 L 431.1 161.3 L 433.1 162.6 L 435.2 163.8 L 437.3 165.1 L 439.3 166.4 L 441.4 167.6 L 443.4 168.9 L 445.5 170.2 L 447.6 171.5 L 449.6 172.8 L 451.7 174.2 L 453.8 175.5 L 455.8 176.8 L 457.9 178.2 L 459.9 179.5 L 462.0 180.9 L 464.1 182.2 L 466.1 183.6 L 468.2 185.0 L 470.2 186.4 L 472.3 187.8 L 474.4 189.2 L 476.4 190.6 L 478.5 192.0 L 480.6 193.5 L 482.6 194.9 L 484.7 196.4 L 486.7 197.8 L 488.8 199.3 L 490.9 200.7 L 492.9 202.2 L 495.0 203.7 L 497.0 205.2 L 499.1 206.7 L 501.2 208.2 L 503.2 209.8 L 505.3 211.3 L 507.4 212.8 L 509.4 214.4 L 511.5 215.9 L 513.5 217.5 L 515.6 219.1 L 517.7 220.6 L 519.7 222.2 L 521.8 223.8 L 523.8 225.4 L 525.9 227.1 L 528.0 228.7 L 530.0 230.3 L 532.1 232.0 L 534.2 233.6 L 536.2 235.3 L 538.3 236.9 L 540.3 238.6 L 542.4 240.3 L 544.5 242.0 L 546.5 243.7 L 548.6 245.4 L 550.6 247.1 L 552.7 248.9 L 554.8 250.6 L 556.8 252.4 L 558.9 254.1 L 561.0 255.9 L 563.0 257.7 L 565.1 259.4 L 567.1 261.2 L 569.2 263.0 L 571.3 264.9 L 573.3 266.7 L 575.4 268.5 L 577.4 270.3 L 579.5 272.2 L 581.6 274.1 L 583.6 275.9 L 585.7 277.8 L 587.8 279.7 L 589.8 281.6 L 591.9 283.5 L 593.9 285.4 L 596.0 287.3" fill="none" stroke="#3b82f6" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>
<text x="115.6" y="43.1" text-anchor="start" font-size="11.5" fill="#f97316">expected value: always +5%</text>
<circle cx="403.2" cy="145.2" r="3.5" fill="currentColor"/>
<text x="403.2" y="135.2" text-anchor="middle" font-size="11.5" fill="currentColor" fill-opacity="0.85">growth turns negative</text>
<circle cx="542.4" cy="239.7" r="3.5" fill="currentColor"/>
<text x="536.4" y="243.7" text-anchor="end" font-size="11.5" fill="currentColor" fill-opacity="0.85">our +50/-40 game</text>
<line x1="110" y1="250" x2="132" y2="250" stroke="#f97316" stroke-width="2.6" stroke-dasharray="6 5"/>
<text x="138" y="254" font-size="12" fill="currentColor" fill-opacity="0.9">arithmetic mean (the crowd)</text>
<line x1="110" y1="268" x2="132" y2="268" stroke="#3b82f6" stroke-width="2.6"/>
<text x="138" y="272" font-size="12" fill="currentColor" fill-opacity="0.9">geometric mean (lived growth)</text>
</svg>
<figcaption style="text-align:center;font-size:0.85rem;opacity:0.7;margin-top:0.5rem">Hold the expected return pinned at +5% and just widen the swing. The growth you actually compound sinks, crosses zero, and goes negative. Half the variance is subtracted from your real return, silently.</figcaption>
</figure>

the rule of thumb behind the curve is worth memorising:

$$ \text{geometric} \approx \text{arithmetic} - \tfrac{1}{2}\,\text{variance} $$

volatility is a tax, and it is a tax the arithmetic average refuses to show you. half of the variance is quietly subtracted from your compound growth every period. our original game (a swing of 0.45) is just one point on that sinking curve, far below the waterline.

## the word for all of this is ergodic

a process is **ergodic** when its time average equals its ensemble average: when one path watched for a long time tells you the same thing as many paths watched for a moment. coin-flip *winnings that you add up* are ergodic. coin-flip *wealth that you multiply* is not, and that single difference is the entire story.

> additive games are ergodic; multiplicative games are not. wealth is multiplicative.

this is also the answer to the question i started with. wealth is non-ergodic, but the *logarithm* of wealth is additive, and therefore ergodic, which is exactly why the log is the honest thing to average. maximising $E[\log W]$ is not a psychological assumption about how much you dislike risk. it is just choosing the one transform under which the crowd's average and your own lived experience finally agree. that is the deeper reason the [kelly criterion]({{< ref "kelly-criterion" >}}) maximises log-wealth: it is optimising the growth rate a single path actually gets, not the growth rate of an imaginary stadium.

drawn as a function of how much you bet, that lived growth rate is a hill, and overbetting walks you off the far side of it into negative territory, exactly mirroring the volatility drag above:

<figure style="margin:1.6rem 0">
<svg viewBox="0 0 620 360" role="img" aria-label="Maximise what you live, not what the crowd averages" style="width:100%;max-width:620px;height:auto;font-family:inherit;display:block;margin:0 auto">
<text x="310" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">Maximise what you live, not what the crowd averages</text>
<line x1="60" y1="312.0" x2="596" y2="312.0" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="52" y="316.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">-6</text>
<line x1="60" y1="250.2" x2="596" y2="250.2" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="52" y="254.2" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">-4</text>
<line x1="60" y1="188.4" x2="596" y2="188.4" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="52" y="192.4" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">-2</text>
<line x1="60" y1="126.7" x2="596" y2="126.7" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="52" y="130.7" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="60" y1="64.9" x2="596" y2="64.9" stroke="currentColor" stroke-opacity="0.10" stroke-width="1"/>
<text x="52" y="68.9" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">2</text>
<line x1="60.0" y1="312" x2="60.0" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="60.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="157.5" y1="312" x2="157.5" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="157.5" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0.1</text>
<line x1="254.9" y1="312" x2="254.9" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="254.9" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0.2</text>
<line x1="352.4" y1="312" x2="352.4" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="352.4" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0.3</text>
<line x1="449.8" y1="312" x2="449.8" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="449.8" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0.4</text>
<line x1="547.3" y1="312" x2="547.3" y2="316" stroke="currentColor" stroke-opacity="0.45" stroke-width="1"/>
<text x="547.3" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0.5</text>
<line x1="60" y1="126.7" x2="596" y2="126.7" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/>
<line x1="60" y1="34" x2="60" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="60" y1="312" x2="596" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<text x="328" y="354" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85">fraction of bankroll bet (f)</text>
<text x="14" y="173" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85" transform="rotate(-90 14 173)">long-run growth rate (% per round)</text>
<path d="M 60.0 126.7 L 62.1 125.4 L 64.1 124.1 L 66.2 122.8 L 68.2 121.5 L 70.3 120.3 L 72.4 119.1 L 74.4 117.9 L 76.5 116.7 L 78.6 115.5 L 80.6 114.3 L 82.7 113.1 L 84.7 112.0 L 86.8 110.8 L 88.9 109.7 L 90.9 108.6 L 93.0 107.5 L 95.0 106.4 L 97.1 105.4 L 99.2 104.3 L 101.2 103.3 L 103.3 102.3 L 105.4 101.2 L 107.4 100.2 L 109.5 99.3 L 111.5 98.3 L 113.6 97.3 L 115.7 96.4 L 117.7 95.5 L 119.8 94.5 L 121.8 93.6 L 123.9 92.8 L 126.0 91.9 L 128.0 91.0 L 130.1 90.2 L 132.2 89.3 L 134.2 88.5 L 136.3 87.7 L 138.3 86.9 L 140.4 86.1 L 142.5 85.4 L 144.5 84.6 L 146.6 83.9 L 148.6 83.1 L 150.7 82.4 L 152.8 81.7 L 154.8 81.1 L 156.9 80.4 L 159.0 79.7 L 161.0 79.1 L 163.1 78.5 L 165.1 77.8 L 167.2 77.2 L 169.3 76.6 L 171.3 76.1 L 173.4 75.5 L 175.4 75.0 L 177.5 74.4 L 179.6 73.9 L 181.6 73.4 L 183.7 72.9 L 185.8 72.4 L 187.8 72.0 L 189.9 71.5 L 191.9 71.1 L 194.0 70.7 L 196.1 70.3 L 198.1 69.9 L 200.2 69.5 L 202.2 69.1 L 204.3 68.8 L 206.4 68.4 L 208.4 68.1 L 210.5 67.8 L 212.6 67.5 L 214.6 67.2 L 216.7 66.9 L 218.7 66.7 L 220.8 66.4 L 222.9 66.2 L 224.9 66.0 L 227.0 65.8 L 229.0 65.6 L 231.1 65.4 L 233.2 65.3 L 235.2 65.1 L 237.3 65.0 L 239.4 64.9 L 241.4 64.8 L 243.5 64.7 L 245.5 64.6 L 247.6 64.6 L 249.7 64.5 L 251.7 64.5 L 253.8 64.5 L 255.8 64.5 L 257.9 64.5 L 260.0 64.5 L 262.0 64.6 L 264.1 64.6 L 266.2 64.7 L 268.2 64.8 L 270.3 64.9 L 272.3 65.0 L 274.4 65.1 L 276.5 65.3 L 278.5 65.4 L 280.6 65.6 L 282.6 65.8 L 284.7 66.0 L 286.8 66.2 L 288.8 66.4 L 290.9 66.7 L 293.0 67.0 L 295.0 67.2 L 297.1 67.5 L 299.1 67.8 L 301.2 68.2 L 303.3 68.5 L 305.3 68.8 L 307.4 69.2 L 309.4 69.6 L 311.5 70.0 L 313.6 70.4 L 315.6 70.8 L 317.7 71.3 L 319.8 71.7 L 321.8 72.2 L 323.9 72.7 L 325.9 73.2 L 328.0 73.7 L 330.1 74.3 L 332.1 74.8 L 334.2 75.4 L 336.2 76.0 L 338.3 76.6 L 340.4 77.2 L 342.4 77.8 L 344.5 78.5 L 346.6 79.2 L 348.6 79.8 L 350.7 80.5 L 352.7 81.2 L 354.8 82.0 L 356.9 82.7 L 358.9 83.5 L 361.0 84.3 L 363.0 85.0 L 365.1 85.9 L 367.2 86.7 L 369.2 87.5 L 371.3 88.4 L 373.4 89.3 L 375.4 90.2 L 377.5 91.1 L 379.5 92.0 L 381.6 92.9 L 383.7 93.9 L 385.7 94.9 L 387.8 95.9 L 389.8 96.9 L 391.9 97.9 L 394.0 99.0 L 396.0 100.0 L 398.1 101.1 L 400.2 102.2 L 402.2 103.3 L 404.3 104.5 L 406.3 105.6 L 408.4 106.8 L 410.5 108.0 L 412.5 109.2 L 414.6 110.4 L 416.6 111.7 L 418.7 112.9 L 420.8 114.2 L 422.8 115.5 L 424.9 116.8 L 427.0 118.2 L 429.0 119.5 L 431.1 120.9 L 433.1 122.3 L 435.2 123.7 L 437.3 125.1 L 439.3 126.6 L 441.4 128.0 L 443.4 129.5 L 445.5 131.0 L 447.6 132.5 L 449.6 134.1 L 451.7 135.6 L 453.8 137.2 L 455.8 138.8 L 457.9 140.5 L 459.9 142.1 L 462.0 143.8 L 464.1 145.4 L 466.1 147.2 L 468.2 148.9 L 470.2 150.6 L 472.3 152.4 L 474.4 154.2 L 476.4 156.0 L 478.5 157.8 L 480.6 159.7 L 482.6 161.5 L 484.7 163.4 L 486.7 165.3 L 488.8 167.3 L 490.9 169.2 L 492.9 171.2 L 495.0 173.2 L 497.0 175.2 L 499.1 177.3 L 501.2 179.3 L 503.2 181.4 L 505.3 183.5 L 507.4 185.7 L 509.4 187.8 L 511.5 190.0 L 513.5 192.2 L 515.6 194.4 L 517.7 196.7 L 519.7 198.9 L 521.8 201.2 L 523.8 203.5 L 525.9 205.9 L 528.0 208.3 L 530.0 210.7 L 532.1 213.1 L 534.2 215.5 L 536.2 218.0 L 538.3 220.5 L 540.3 223.0 L 542.4 225.5 L 544.5 228.1 L 546.5 230.7 L 548.6 233.3 L 550.6 235.9 L 552.7 238.6 L 554.8 241.3 L 556.8 244.0 L 558.9 246.8 L 561.0 249.5 L 563.0 252.4 L 565.1 255.2 L 567.1 258.0 L 569.2 260.9 L 571.3 263.8 L 573.3 266.8 L 575.4 269.7 L 577.4 272.7 L 579.5 275.8 L 581.6 278.8 L 583.6 281.9 L 585.7 285.0 L 587.8 288.2 L 589.8 291.3 L 591.9 294.5 L 593.9 297.8 L 596.0 301.0 L 596.0 126.7 L 60.0 126.7 Z" fill="#3b82f6" fill-opacity="0.12" stroke="none"/>
<path d="M 60.0 126.7 L 62.1 125.4 L 64.1 124.1 L 66.2 122.8 L 68.2 121.5 L 70.3 120.3 L 72.4 119.1 L 74.4 117.9 L 76.5 116.7 L 78.6 115.5 L 80.6 114.3 L 82.7 113.1 L 84.7 112.0 L 86.8 110.8 L 88.9 109.7 L 90.9 108.6 L 93.0 107.5 L 95.0 106.4 L 97.1 105.4 L 99.2 104.3 L 101.2 103.3 L 103.3 102.3 L 105.4 101.2 L 107.4 100.2 L 109.5 99.3 L 111.5 98.3 L 113.6 97.3 L 115.7 96.4 L 117.7 95.5 L 119.8 94.5 L 121.8 93.6 L 123.9 92.8 L 126.0 91.9 L 128.0 91.0 L 130.1 90.2 L 132.2 89.3 L 134.2 88.5 L 136.3 87.7 L 138.3 86.9 L 140.4 86.1 L 142.5 85.4 L 144.5 84.6 L 146.6 83.9 L 148.6 83.1 L 150.7 82.4 L 152.8 81.7 L 154.8 81.1 L 156.9 80.4 L 159.0 79.7 L 161.0 79.1 L 163.1 78.5 L 165.1 77.8 L 167.2 77.2 L 169.3 76.6 L 171.3 76.1 L 173.4 75.5 L 175.4 75.0 L 177.5 74.4 L 179.6 73.9 L 181.6 73.4 L 183.7 72.9 L 185.8 72.4 L 187.8 72.0 L 189.9 71.5 L 191.9 71.1 L 194.0 70.7 L 196.1 70.3 L 198.1 69.9 L 200.2 69.5 L 202.2 69.1 L 204.3 68.8 L 206.4 68.4 L 208.4 68.1 L 210.5 67.8 L 212.6 67.5 L 214.6 67.2 L 216.7 66.9 L 218.7 66.7 L 220.8 66.4 L 222.9 66.2 L 224.9 66.0 L 227.0 65.8 L 229.0 65.6 L 231.1 65.4 L 233.2 65.3 L 235.2 65.1 L 237.3 65.0 L 239.4 64.9 L 241.4 64.8 L 243.5 64.7 L 245.5 64.6 L 247.6 64.6 L 249.7 64.5 L 251.7 64.5 L 253.8 64.5 L 255.8 64.5 L 257.9 64.5 L 260.0 64.5 L 262.0 64.6 L 264.1 64.6 L 266.2 64.7 L 268.2 64.8 L 270.3 64.9 L 272.3 65.0 L 274.4 65.1 L 276.5 65.3 L 278.5 65.4 L 280.6 65.6 L 282.6 65.8 L 284.7 66.0 L 286.8 66.2 L 288.8 66.4 L 290.9 66.7 L 293.0 67.0 L 295.0 67.2 L 297.1 67.5 L 299.1 67.8 L 301.2 68.2 L 303.3 68.5 L 305.3 68.8 L 307.4 69.2 L 309.4 69.6 L 311.5 70.0 L 313.6 70.4 L 315.6 70.8 L 317.7 71.3 L 319.8 71.7 L 321.8 72.2 L 323.9 72.7 L 325.9 73.2 L 328.0 73.7 L 330.1 74.3 L 332.1 74.8 L 334.2 75.4 L 336.2 76.0 L 338.3 76.6 L 340.4 77.2 L 342.4 77.8 L 344.5 78.5 L 346.6 79.2 L 348.6 79.8 L 350.7 80.5 L 352.7 81.2 L 354.8 82.0 L 356.9 82.7 L 358.9 83.5 L 361.0 84.3 L 363.0 85.0 L 365.1 85.9 L 367.2 86.7 L 369.2 87.5 L 371.3 88.4 L 373.4 89.3 L 375.4 90.2 L 377.5 91.1 L 379.5 92.0 L 381.6 92.9 L 383.7 93.9 L 385.7 94.9 L 387.8 95.9 L 389.8 96.9 L 391.9 97.9 L 394.0 99.0 L 396.0 100.0 L 398.1 101.1 L 400.2 102.2 L 402.2 103.3 L 404.3 104.5 L 406.3 105.6 L 408.4 106.8 L 410.5 108.0 L 412.5 109.2 L 414.6 110.4 L 416.6 111.7 L 418.7 112.9 L 420.8 114.2 L 422.8 115.5 L 424.9 116.8 L 427.0 118.2 L 429.0 119.5 L 431.1 120.9 L 433.1 122.3 L 435.2 123.7 L 437.3 125.1 L 439.3 126.6 L 441.4 128.0 L 443.4 129.5 L 445.5 131.0 L 447.6 132.5 L 449.6 134.1 L 451.7 135.6 L 453.8 137.2 L 455.8 138.8 L 457.9 140.5 L 459.9 142.1 L 462.0 143.8 L 464.1 145.4 L 466.1 147.2 L 468.2 148.9 L 470.2 150.6 L 472.3 152.4 L 474.4 154.2 L 476.4 156.0 L 478.5 157.8 L 480.6 159.7 L 482.6 161.5 L 484.7 163.4 L 486.7 165.3 L 488.8 167.3 L 490.9 169.2 L 492.9 171.2 L 495.0 173.2 L 497.0 175.2 L 499.1 177.3 L 501.2 179.3 L 503.2 181.4 L 505.3 183.5 L 507.4 185.7 L 509.4 187.8 L 511.5 190.0 L 513.5 192.2 L 515.6 194.4 L 517.7 196.7 L 519.7 198.9 L 521.8 201.2 L 523.8 203.5 L 525.9 205.9 L 528.0 208.3 L 530.0 210.7 L 532.1 213.1 L 534.2 215.5 L 536.2 218.0 L 538.3 220.5 L 540.3 223.0 L 542.4 225.5 L 544.5 228.1 L 546.5 230.7 L 548.6 233.3 L 550.6 235.9 L 552.7 238.6 L 554.8 241.3 L 556.8 244.0 L 558.9 246.8 L 561.0 249.5 L 563.0 252.4 L 565.1 255.2 L 567.1 258.0 L 569.2 260.9 L 571.3 263.8 L 573.3 266.8 L 575.4 269.7 L 577.4 272.7 L 579.5 275.8 L 581.6 278.8 L 583.6 281.9 L 585.7 285.0 L 587.8 288.2 L 589.8 291.3 L 591.9 294.5 L 593.9 297.8 L 596.0 301.0" fill="none" stroke="#3b82f6" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>
<circle cx="254.9" cy="64.6" r="3.5" fill="currentColor"/>
<text x="260.9" y="62.6" text-anchor="start" font-size="11.5" fill="currentColor" fill-opacity="0.85">Kelly bet: fastest growth</text>
<circle cx="449.8" cy="126.7" r="3.5" fill="currentColor"/>
<text x="455.8" y="120.7" text-anchor="start" font-size="11.5" fill="currentColor" fill-opacity="0.85">twice Kelly: growth gone</text>
<line x1="150" y1="250" x2="172" y2="250" stroke="#3b82f6" stroke-width="2.6"/>
<text x="178" y="254" font-size="12" fill="currentColor" fill-opacity="0.9">growth rate of a 60% even-odds bet</text>
</svg>
<figcaption style="text-align:center;font-size:0.85rem;opacity:0.7;margin-top:0.5rem">The 60% even-odds coin from the Kelly note. The time-average growth rate is a hill that peaks at the Kelly fraction; overbet and you walk off the far side into loss, the same drag as the chart above. EV maximisation never sees this hill.</figcaption>
</figure>

expected-value maximisation answers "what happens to the crowd." time-average maximisation answers "what happens to me." for anything you only get to live once, the second question is the only one that matters.

## where this shows up that is not a casino

the coin game is a toy, but non-ergodicity is everywhere money compounds and you only get one life:

- **insurance looks irrational and is not.** the premium has negative expected value by construction, or the insurer would not sell it. but a large enough loss is a multiplicative wipeout you never recover from, and paying a small certain cost to cap that downside *raises* your time-average growth even while it lowers your ensemble average. the ensemble does not need insurance; you do.
- **leverage kills good strategies.** a portfolio with a genuine edge, levered past a point, has rising expected value and falling lived growth at the same time. "the average fund did fine" can be true in the same year that the median investor in it was destroyed.
- **diversification is buying ergodicity.** spreading a bet across many uncorrelated positions pulls your single lived path closer to the ensemble average, which is the one thing that makes the comforting "expected return" actually apply to you.
- **one big concentrated bet** is sold on its expected value and paid for on its geometric mean. the brochure quotes the stadium; you settle the bill alone.

## history, one paragraph

the word *ergodic* comes from boltzmann's statistical mechanics in the 1870s, where it meant a system that, given time, visits every state, so watching it long enough is the same as photographing many copies at once. daniel bernoulli had already bumped into the underlying problem in 1738 with the st petersburg paradox and patched it by proposing log utility, a fix framed as a fact about human psychology. the modern, sharper telling is ole peters' "ergodicity economics": the log is not a statement about your feelings, it is the mathematically forced choice once you admit that you live one multiplicative path through time rather than averaging over a crowd. the +50/-40 coin in this note is peters' own example, and it is the cleanest demonstration i know that a positive expected value can be a guarantee of ruin.

## a personal note

wip ...

## sources and further reading

- ole peters, [ergodicity economics](https://ergodicityeconomics.com/): the lecture notes and blog that built the modern framing. the multiplicative coin example lives here.
- peters & gell-mann (2016), [evaluating gambles using dynamics](https://aip.scitation.org/doi/10.1063/1.4940236) (*chaos* 26, 023103): the careful paper behind the toy game.
- ole peters (2019), [the ergodicity problem in economics](https://www.nature.com/articles/s41567-019-0732-0) (*nature physics* 15, 1216): the short, readable manifesto.
- nassim taleb, *skin in the game* (2018): the "never cross a river that is on average four feet deep" version, for the non-mathematical reader.
- my own [kelly criterion note]({{< ref "kelly-criterion" >}}): position sizing, and what to do once you accept that the geometric mean is your real boss.
