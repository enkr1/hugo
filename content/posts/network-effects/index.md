---
title: "Network Effects: Why the Biggest Network Beats the Best Product"
slug: "network-effects"
date: 2026-06-30T13:09:30+08:00
subtitle: "A research note on Metcalfe's law, the n log n correction, critical mass, and why a crowd hardens into a moat"
description: "A research note on network effects: why a network's value grows roughly with the square of its users, why n log n is closer to the truth than n squared, the tipping point of critical mass, the adoption S-curve, and why all of it becomes a barrier to entry."
tags:
  - network-effects
  - economics
  - strategy
  - metcalfe-law
  - platforms
  - TCX2005
  - NUS
  - research
categories:
  - ["Education", "Economics"]
keywords:
  - network effects
  - metcalfe's law
  - critical mass
  - two-sided market
  - network externalities
  - reed's law
  - tipping point
  - barrier to entry
image: ""
comments: true
draft: false
---

> i learnt network effects in my NUS information systems module ([TCX2005, on the progress page]({{< ref "nus-progress" >}})), where it lives inside porter's five forces as a *barrier to entry*: the reason a newcomer with a better app still loses. that always felt like the punchline with the joke cut out, so i had my AI teach me the maths underneath it and draw the curves. this note is that maths. the personal note at the bottom is mine to write after.

## one telephone is a paperweight

start with the cleanest example there is. the first telephone ever made was worth nothing, because there was no one to call. the second made the first useful. the millionth made every other phone on the network more valuable than it was the day before. nothing about the handset changed; what changed was how many other people you could reach with it.

that is a **network effect**: each new user makes the thing more valuable to the users already there. the value does not live in the device, it lives in the connections between the people holding the devices. and connections, it turns out, do not grow in a straight line.

## two flavours: direct and two-sided

there are two ways this happens, and it is worth keeping them apart.

**direct** (same-side): more users exactly like you make it better for you. the telephone, whatsapp, a spoken language. the enterprise version is the one i studied: when sharp rolled out yammer as an internal social network, the value to any one employee was every *other* employee who had joined, so the first thousand were a hard sell and the ten-thousandth sold itself. each colleague on the network made the network worth more to all the others.

**two-sided** (cross-side): two different groups that each need the other, with a platform sitting in the middle. grab is the textbook case: more riders make the platform more attractive to drivers, and more drivers, through shorter waits and lower prices, make it more attractive to riders. neither side is buying the app for its features. each side is buying the *other side's* presence, and the platform's only job is to be the place where they find each other.

the maths below is written for the direct case, but the shape is the same for both: value that grows faster than the crowd.

## counting the connections

here is where the square comes from, and it is just counting. in a network of $n$ people, the number of possible two-person connections is

$$ \frac{n(n-1)}{2} $$

two people make one link. five make ten. twelve make sixty-six.

<figure style="margin:1.6rem 0">
<svg viewBox="0 0 620 360" role="img" aria-label="Every pair is a possible connection" style="width:100%;max-width:620px;height:auto;font-family:inherit;display:block;margin:0 auto">
<text x="310" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">Every pair is a possible connection</text>
<line x1="130.0" y1="122.0" x2="130.0" y2="218.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<circle cx="130.0" cy="122.0" r="4.5" fill="#3b82f6"/>
<circle cx="130.0" cy="218.0" r="4.5" fill="#3b82f6"/>
<text x="130" y="288" text-anchor="middle" font-size="12.5" fill="currentColor" font-weight="600">2 users, 1 link</text>
<line x1="310.0" y1="118.0" x2="359.5" y2="153.9" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="310.0" y1="118.0" x2="340.6" y2="212.1" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="310.0" y1="118.0" x2="279.4" y2="212.1" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="310.0" y1="118.0" x2="260.5" y2="153.9" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="359.5" y1="153.9" x2="340.6" y2="212.1" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="359.5" y1="153.9" x2="279.4" y2="212.1" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="359.5" y1="153.9" x2="260.5" y2="153.9" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="340.6" y1="212.1" x2="279.4" y2="212.1" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="340.6" y1="212.1" x2="260.5" y2="153.9" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="279.4" y1="212.1" x2="260.5" y2="153.9" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<circle cx="310.0" cy="118.0" r="4.5" fill="#3b82f6"/>
<circle cx="359.5" cy="153.9" r="4.5" fill="#3b82f6"/>
<circle cx="340.6" cy="212.1" r="4.5" fill="#3b82f6"/>
<circle cx="279.4" cy="212.1" r="4.5" fill="#3b82f6"/>
<circle cx="260.5" cy="153.9" r="4.5" fill="#3b82f6"/>
<text x="310" y="288" text-anchor="middle" font-size="12.5" fill="currentColor" font-weight="600">5 users, 10 links</text>
<line x1="490.0" y1="116.0" x2="517.0" y2="123.2" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="490.0" y1="116.0" x2="536.8" y2="143.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="490.0" y1="116.0" x2="544.0" y2="170.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="490.0" y1="116.0" x2="536.8" y2="197.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="490.0" y1="116.0" x2="517.0" y2="216.8" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="490.0" y1="116.0" x2="490.0" y2="224.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="490.0" y1="116.0" x2="463.0" y2="216.8" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="490.0" y1="116.0" x2="443.2" y2="197.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="490.0" y1="116.0" x2="436.0" y2="170.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="490.0" y1="116.0" x2="443.2" y2="143.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="490.0" y1="116.0" x2="463.0" y2="123.2" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="517.0" y1="123.2" x2="536.8" y2="143.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="517.0" y1="123.2" x2="544.0" y2="170.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="517.0" y1="123.2" x2="536.8" y2="197.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="517.0" y1="123.2" x2="517.0" y2="216.8" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="517.0" y1="123.2" x2="490.0" y2="224.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="517.0" y1="123.2" x2="463.0" y2="216.8" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="517.0" y1="123.2" x2="443.2" y2="197.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="517.0" y1="123.2" x2="436.0" y2="170.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="517.0" y1="123.2" x2="443.2" y2="143.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="517.0" y1="123.2" x2="463.0" y2="123.2" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="536.8" y1="143.0" x2="544.0" y2="170.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="536.8" y1="143.0" x2="536.8" y2="197.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="536.8" y1="143.0" x2="517.0" y2="216.8" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="536.8" y1="143.0" x2="490.0" y2="224.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="536.8" y1="143.0" x2="463.0" y2="216.8" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="536.8" y1="143.0" x2="443.2" y2="197.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="536.8" y1="143.0" x2="436.0" y2="170.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="536.8" y1="143.0" x2="443.2" y2="143.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="536.8" y1="143.0" x2="463.0" y2="123.2" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="544.0" y1="170.0" x2="536.8" y2="197.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="544.0" y1="170.0" x2="517.0" y2="216.8" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="544.0" y1="170.0" x2="490.0" y2="224.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="544.0" y1="170.0" x2="463.0" y2="216.8" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="544.0" y1="170.0" x2="443.2" y2="197.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="544.0" y1="170.0" x2="436.0" y2="170.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="544.0" y1="170.0" x2="443.2" y2="143.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="544.0" y1="170.0" x2="463.0" y2="123.2" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="536.8" y1="197.0" x2="517.0" y2="216.8" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="536.8" y1="197.0" x2="490.0" y2="224.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="536.8" y1="197.0" x2="463.0" y2="216.8" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="536.8" y1="197.0" x2="443.2" y2="197.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="536.8" y1="197.0" x2="436.0" y2="170.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="536.8" y1="197.0" x2="443.2" y2="143.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="536.8" y1="197.0" x2="463.0" y2="123.2" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="517.0" y1="216.8" x2="490.0" y2="224.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="517.0" y1="216.8" x2="463.0" y2="216.8" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="517.0" y1="216.8" x2="443.2" y2="197.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="517.0" y1="216.8" x2="436.0" y2="170.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="517.0" y1="216.8" x2="443.2" y2="143.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="517.0" y1="216.8" x2="463.0" y2="123.2" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="490.0" y1="224.0" x2="463.0" y2="216.8" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="490.0" y1="224.0" x2="443.2" y2="197.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="490.0" y1="224.0" x2="436.0" y2="170.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="490.0" y1="224.0" x2="443.2" y2="143.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="490.0" y1="224.0" x2="463.0" y2="123.2" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="463.0" y1="216.8" x2="443.2" y2="197.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="463.0" y1="216.8" x2="436.0" y2="170.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="463.0" y1="216.8" x2="443.2" y2="143.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="463.0" y1="216.8" x2="463.0" y2="123.2" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="443.2" y1="197.0" x2="436.0" y2="170.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="443.2" y1="197.0" x2="443.2" y2="143.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="443.2" y1="197.0" x2="463.0" y2="123.2" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="436.0" y1="170.0" x2="443.2" y2="143.0" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="436.0" y1="170.0" x2="463.0" y2="123.2" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<line x1="443.2" y1="143.0" x2="463.0" y2="123.2" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<circle cx="490.0" cy="116.0" r="4.5" fill="#3b82f6"/>
<circle cx="517.0" cy="123.2" r="4.5" fill="#3b82f6"/>
<circle cx="536.8" cy="143.0" r="4.5" fill="#3b82f6"/>
<circle cx="544.0" cy="170.0" r="4.5" fill="#3b82f6"/>
<circle cx="536.8" cy="197.0" r="4.5" fill="#3b82f6"/>
<circle cx="517.0" cy="216.8" r="4.5" fill="#3b82f6"/>
<circle cx="490.0" cy="224.0" r="4.5" fill="#3b82f6"/>
<circle cx="463.0" cy="216.8" r="4.5" fill="#3b82f6"/>
<circle cx="443.2" cy="197.0" r="4.5" fill="#3b82f6"/>
<circle cx="436.0" cy="170.0" r="4.5" fill="#3b82f6"/>
<circle cx="443.2" cy="143.0" r="4.5" fill="#3b82f6"/>
<circle cx="463.0" cy="123.2" r="4.5" fill="#3b82f6"/>
<text x="490" y="288" text-anchor="middle" font-size="12.5" fill="currentColor" font-weight="600">12 users, 66 links</text>
</svg>
<figcaption style="text-align:center;font-size:0.85rem;opacity:0.7;margin-top:0.5rem">Two users make one link, five make ten, twelve make sixty-six. Add one person to a network of n and you add n new links, not one, so the count of connections climbs with the square of the crowd. That is where Metcalfe's n-squared comes from.</figcaption>
</figure>

the thing to feel is what happens when one person joins. add the $(n{+}1)$-th user to a network of $n$, and you do not add one connection, you add $n$ of them, one to everybody already there. so the count of links climbs with the *square* of the crowd, not in proportion to it. that is **metcalfe's law**: the value of a network grows like $n^2$. (robert metcalfe drew it for ethernet and fax machines around 1980; george gilder attached his name to it in 1993.)

double the users and you roughly quadruple the value. that single fact is the engine under everything that follows.

## how fast, really? the law wars

$n^2$ is the famous answer, but it is not the only one, and it is probably not the right one.

line up the family. each law is really a different claim about *what counts as value* on a network:

| law | value grows like | what it counts |
|---|---|---|
| sarnoff | $n$ | a broadcast: one source, $n$ passive viewers (old tv) |
| metcalfe | $n^2$ | every pair who could connect |
| reed | $2^n$ | every *group* that could form |

<figure style="margin:1.6rem 0">
<svg viewBox="0 0 620 360" role="img" aria-label="How fast does value grow? Four answers" style="width:100%;max-width:620px;height:auto;font-family:inherit;display:block;margin:0 auto">
<text x="310" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">How fast does value grow? Four answers</text>
<line x1="58" y1="312.0" x2="596" y2="312.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="50" y="316.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="58" y1="242.5" x2="596" y2="242.5" stroke="currentColor" stroke-opacity="0.10"/>
<text x="50" y="246.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">25</text>
<line x1="58" y1="173.0" x2="596" y2="173.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="50" y="177.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">50</text>
<line x1="58" y1="103.5" x2="596" y2="103.5" stroke="currentColor" stroke-opacity="0.10"/>
<text x="50" y="107.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">75</text>
<line x1="58" y1="34.0" x2="596" y2="34.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="50" y="38.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">100</text>
<line x1="58.0" y1="312" x2="58.0" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="58.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="134.9" y1="312" x2="134.9" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="134.9" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">2</text>
<line x1="211.7" y1="312" x2="211.7" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="211.7" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">4</text>
<line x1="288.6" y1="312" x2="288.6" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="288.6" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">6</text>
<line x1="365.4" y1="312" x2="365.4" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="365.4" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">8</text>
<line x1="442.3" y1="312" x2="442.3" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="442.3" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">10</text>
<line x1="519.1" y1="312" x2="519.1" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="519.1" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">12</text>
<line x1="596.0" y1="312" x2="596.0" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="596.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">14</text>
<line x1="58" y1="34" x2="58" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="58" y1="312" x2="596" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<text x="327" y="354" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85">users on the network (n)</text>
<text x="14" y="173" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85" transform="rotate(-90 14 173)">value of the network</text>
<path d="M 58.0 312.0 L 60.7 311.8 L 63.4 311.6 L 66.1 311.4 L 68.8 311.2 L 71.5 311.0 L 74.1 310.8 L 76.8 310.6 L 79.5 310.4 L 82.2 310.2 L 84.9 310.1 L 87.6 309.9 L 90.3 309.7 L 93.0 309.5 L 95.7 309.3 L 98.3 309.1 L 101.0 308.9 L 103.7 308.7 L 106.4 308.5 L 109.1 308.3 L 111.8 308.1 L 114.5 307.9 L 117.2 307.7 L 119.9 307.5 L 122.6 307.3 L 125.2 307.1 L 127.9 306.9 L 130.6 306.7 L 133.3 306.6 L 136.0 306.4 L 138.7 306.2 L 141.4 306.0 L 144.1 305.8 L 146.8 305.6 L 149.5 305.4 L 152.2 305.2 L 154.8 305.0 L 157.5 304.8 L 160.2 304.6 L 162.9 304.4 L 165.6 304.2 L 168.3 304.0 L 171.0 303.8 L 173.7 303.6 L 176.4 303.4 L 179.1 303.2 L 181.7 303.0 L 184.4 302.9 L 187.1 302.7 L 189.8 302.5 L 192.5 302.3 L 195.2 302.1 L 197.9 301.9 L 200.6 301.7 L 203.3 301.5 L 206.0 301.3 L 208.6 301.1 L 211.3 300.9 L 214.0 300.7 L 216.7 300.5 L 219.4 300.3 L 222.1 300.1 L 224.8 299.9 L 227.5 299.7 L 230.2 299.5 L 232.8 299.4 L 235.5 299.2 L 238.2 299.0 L 240.9 298.8 L 243.6 298.6 L 246.3 298.4 L 249.0 298.2 L 251.7 298.0 L 254.4 297.8 L 257.1 297.6 L 259.8 297.4 L 262.4 297.2 L 265.1 297.0 L 267.8 296.8 L 270.5 296.6 L 273.2 296.4 L 275.9 296.2 L 278.6 296.0 L 281.3 295.8 L 284.0 295.7 L 286.6 295.5 L 289.3 295.3 L 292.0 295.1 L 294.7 294.9 L 297.4 294.7 L 300.1 294.5 L 302.8 294.3 L 305.5 294.1 L 308.2 293.9 L 310.9 293.7 L 313.6 293.5 L 316.2 293.3 L 318.9 293.1 L 321.6 292.9 L 324.3 292.7 L 327.0 292.5 L 329.7 292.3 L 332.4 292.2 L 335.1 292.0 L 337.8 291.8 L 340.4 291.6 L 343.1 291.4 L 345.8 291.2 L 348.5 291.0 L 351.2 290.8 L 353.9 290.6 L 356.6 290.4 L 359.3 290.2 L 362.0 290.0 L 364.7 289.8 L 367.4 289.6 L 370.0 289.4 L 372.7 289.2 L 375.4 289.0 L 378.1 288.8 L 380.8 288.6 L 383.5 288.5 L 386.2 288.3 L 388.9 288.1 L 391.6 287.9 L 394.2 287.7 L 396.9 287.5 L 399.6 287.3 L 402.3 287.1 L 405.0 286.9 L 407.7 286.7 L 410.4 286.5 L 413.1 286.3 L 415.8 286.1 L 418.5 285.9 L 421.1 285.7 L 423.8 285.5 L 426.5 285.3 L 429.2 285.1 L 431.9 285.0 L 434.6 284.8 L 437.3 284.6 L 440.0 284.4 L 442.7 284.2 L 445.4 284.0 L 448.1 283.8 L 450.7 283.6 L 453.4 283.4 L 456.1 283.2 L 458.8 283.0 L 461.5 282.8 L 464.2 282.6 L 466.9 282.4 L 469.6 282.2 L 472.3 282.0 L 474.9 281.8 L 477.6 281.6 L 480.3 281.4 L 483.0 281.3 L 485.7 281.1 L 488.4 280.9 L 491.1 280.7 L 493.8 280.5 L 496.5 280.3 L 499.2 280.1 L 501.9 279.9 L 504.5 279.7 L 507.2 279.5 L 509.9 279.3 L 512.6 279.1 L 515.3 278.9 L 518.0 278.7 L 520.7 278.5 L 523.4 278.3 L 526.1 278.1 L 528.8 277.9 L 531.4 277.8 L 534.1 277.6 L 536.8 277.4 L 539.5 277.2 L 542.2 277.0 L 544.9 276.8 L 547.6 276.6 L 550.3 276.4 L 553.0 276.2 L 555.6 276.0 L 558.3 275.8 L 561.0 275.6 L 563.7 275.4 L 566.4 275.2 L 569.1 275.0 L 571.8 274.8 L 574.5 274.6 L 577.2 274.4 L 579.9 274.2 L 582.5 274.1 L 585.2 273.9 L 587.9 273.7 L 590.6 273.5 L 593.3 273.3 L 596.0 273.1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-opacity="0.55" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M 58.0 312.0 L 60.7 312.0 L 63.4 312.0 L 66.1 312.0 L 68.8 312.0 L 71.5 312.0 L 74.1 312.0 L 76.8 312.0 L 79.5 312.0 L 82.2 312.0 L 84.9 312.0 L 87.6 312.0 L 90.3 312.0 L 93.0 312.0 L 95.7 312.0 L 98.3 311.8 L 101.0 311.5 L 103.7 311.2 L 106.4 310.8 L 109.1 310.5 L 111.8 310.1 L 114.5 309.7 L 117.2 309.3 L 119.9 308.9 L 122.6 308.5 L 125.2 308.1 L 127.9 307.6 L 130.6 307.2 L 133.3 306.7 L 136.0 306.2 L 138.7 305.8 L 141.4 305.3 L 144.1 304.8 L 146.8 304.2 L 149.5 303.7 L 152.2 303.2 L 154.8 302.7 L 157.5 302.1 L 160.2 301.6 L 162.9 301.0 L 165.6 300.4 L 168.3 299.9 L 171.0 299.3 L 173.7 298.7 L 176.4 298.1 L 179.1 297.5 L 181.7 296.9 L 184.4 296.3 L 187.1 295.7 L 189.8 295.0 L 192.5 294.4 L 195.2 293.8 L 197.9 293.1 L 200.6 292.5 L 203.3 291.8 L 206.0 291.2 L 208.6 290.5 L 211.3 289.9 L 214.0 289.2 L 216.7 288.5 L 219.4 287.8 L 222.1 287.1 L 224.8 286.4 L 227.5 285.8 L 230.2 285.1 L 232.8 284.4 L 235.5 283.6 L 238.2 282.9 L 240.9 282.2 L 243.6 281.5 L 246.3 280.8 L 249.0 280.0 L 251.7 279.3 L 254.4 278.6 L 257.1 277.8 L 259.8 277.1 L 262.4 276.3 L 265.1 275.6 L 267.8 274.8 L 270.5 274.1 L 273.2 273.3 L 275.9 272.5 L 278.6 271.8 L 281.3 271.0 L 284.0 270.2 L 286.6 269.4 L 289.3 268.7 L 292.0 267.9 L 294.7 267.1 L 297.4 266.3 L 300.1 265.5 L 302.8 264.7 L 305.5 263.9 L 308.2 263.1 L 310.9 262.3 L 313.6 261.5 L 316.2 260.7 L 318.9 259.8 L 321.6 259.0 L 324.3 258.2 L 327.0 257.4 L 329.7 256.5 L 332.4 255.7 L 335.1 254.9 L 337.8 254.0 L 340.4 253.2 L 343.1 252.4 L 345.8 251.5 L 348.5 250.7 L 351.2 249.8 L 353.9 249.0 L 356.6 248.1 L 359.3 247.2 L 362.0 246.4 L 364.7 245.5 L 367.4 244.7 L 370.0 243.8 L 372.7 242.9 L 375.4 242.1 L 378.1 241.2 L 380.8 240.3 L 383.5 239.4 L 386.2 238.5 L 388.9 237.7 L 391.6 236.8 L 394.2 235.9 L 396.9 235.0 L 399.6 234.1 L 402.3 233.2 L 405.0 232.3 L 407.7 231.4 L 410.4 230.5 L 413.1 229.6 L 415.8 228.7 L 418.5 227.8 L 421.1 226.9 L 423.8 226.0 L 426.5 225.0 L 429.2 224.1 L 431.9 223.2 L 434.6 222.3 L 437.3 221.4 L 440.0 220.4 L 442.7 219.5 L 445.4 218.6 L 448.1 217.7 L 450.7 216.7 L 453.4 215.8 L 456.1 214.9 L 458.8 213.9 L 461.5 213.0 L 464.2 212.0 L 466.9 211.1 L 469.6 210.1 L 472.3 209.2 L 474.9 208.3 L 477.6 207.3 L 480.3 206.3 L 483.0 205.4 L 485.7 204.4 L 488.4 203.5 L 491.1 202.5 L 493.8 201.6 L 496.5 200.6 L 499.2 199.6 L 501.9 198.7 L 504.5 197.7 L 507.2 196.7 L 509.9 195.8 L 512.6 194.8 L 515.3 193.8 L 518.0 192.8 L 520.7 191.8 L 523.4 190.9 L 526.1 189.9 L 528.8 188.9 L 531.4 187.9 L 534.1 186.9 L 536.8 185.9 L 539.5 185.0 L 542.2 184.0 L 544.9 183.0 L 547.6 182.0 L 550.3 181.0 L 553.0 180.0 L 555.6 179.0 L 558.3 178.0 L 561.0 177.0 L 563.7 176.0 L 566.4 175.0 L 569.1 174.0 L 571.8 173.0 L 574.5 171.9 L 577.2 170.9 L 579.9 169.9 L 582.5 168.9 L 585.2 167.9 L 587.9 166.9 L 590.6 165.9 L 593.3 164.8 L 596.0 163.8" fill="none" stroke="#3b82f6" stroke-width="2.8" stroke-opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M 58.0 312.0 L 98.3 311.9 L 101.0 311.8 L 103.7 311.7 L 106.4 311.5 L 109.1 311.4 L 111.8 311.2 L 114.5 311.0 L 117.2 310.8 L 119.9 310.6 L 122.6 310.4 L 125.2 310.2 L 127.9 309.9 L 130.6 309.7 L 133.3 309.4 L 136.0 309.1 L 138.7 308.8 L 141.4 308.5 L 144.1 308.1 L 146.8 307.8 L 149.5 307.4 L 152.2 307.1 L 154.8 306.7 L 157.5 306.3 L 160.2 305.9 L 162.9 305.4 L 165.6 305.0 L 168.3 304.5 L 171.0 304.1 L 173.7 303.6 L 176.4 303.1 L 179.1 302.6 L 181.7 302.1 L 184.4 301.5 L 187.1 301.0 L 189.8 300.4 L 192.5 299.8 L 195.2 299.2 L 197.9 298.6 L 200.6 298.0 L 203.3 297.4 L 206.0 296.7 L 208.6 296.1 L 211.3 295.4 L 214.0 294.7 L 216.7 294.0 L 219.4 293.3 L 222.1 292.6 L 224.8 291.9 L 227.5 291.1 L 230.2 290.3 L 232.8 289.5 L 235.5 288.8 L 238.2 287.9 L 240.9 287.1 L 243.6 286.3 L 246.3 285.4 L 249.0 284.6 L 251.7 283.7 L 254.4 282.8 L 257.1 281.9 L 259.8 281.0 L 262.4 280.1 L 265.1 279.1 L 267.8 278.2 L 270.5 277.2 L 273.2 276.2 L 275.9 275.2 L 278.6 274.2 L 281.3 273.2 L 284.0 272.1 L 286.6 271.1 L 289.3 270.0 L 292.0 268.9 L 294.7 267.8 L 297.4 266.7 L 300.1 265.6 L 302.8 264.5 L 305.5 263.3 L 308.2 262.1 L 310.9 261.0 L 313.6 259.8 L 316.2 258.6 L 318.9 257.4 L 321.6 256.1 L 324.3 254.9 L 327.0 253.6 L 329.7 252.3 L 332.4 251.1 L 335.1 249.8 L 337.8 248.5 L 340.4 247.1 L 343.1 245.8 L 345.8 244.4 L 348.5 243.1 L 351.2 241.7 L 353.9 240.3 L 356.6 238.9 L 359.3 237.5 L 362.0 236.0 L 364.7 234.6 L 367.4 233.1 L 370.0 231.6 L 372.7 230.1 L 375.4 228.6 L 378.1 227.1 L 380.8 225.6 L 383.5 224.1 L 386.2 222.5 L 388.9 220.9 L 391.6 219.3 L 394.2 217.7 L 396.9 216.1 L 399.6 214.5 L 402.3 212.9 L 405.0 211.2 L 407.7 209.5 L 410.4 207.9 L 413.1 206.2 L 415.8 204.5 L 418.5 202.7 L 421.1 201.0 L 423.8 199.3 L 426.5 197.5 L 429.2 195.7 L 431.9 193.9 L 434.6 192.1 L 437.3 190.3 L 440.0 188.5 L 442.7 186.6 L 445.4 184.8 L 448.1 182.9 L 450.7 181.0 L 453.4 179.1 L 456.1 177.2 L 458.8 175.3 L 461.5 173.3 L 464.2 171.4 L 466.9 169.4 L 469.6 167.4 L 472.3 165.5 L 474.9 163.4 L 477.6 161.4 L 480.3 159.4 L 483.0 157.3 L 485.7 155.3 L 488.4 153.2 L 491.1 151.1 L 493.8 149.0 L 496.5 146.9 L 499.2 144.8 L 501.9 142.6 L 504.5 140.5 L 507.2 138.3 L 509.9 136.1 L 512.6 133.9 L 515.3 131.7 L 518.0 129.5 L 520.7 127.2 L 523.4 125.0 L 526.1 122.7 L 528.8 120.4 L 531.4 118.1 L 534.1 115.8 L 536.8 113.5 L 539.5 111.2 L 542.2 108.8 L 544.9 106.5 L 547.6 104.1 L 550.3 101.7 L 553.0 99.3 L 555.6 96.9 L 558.3 94.5 L 561.0 92.0 L 563.7 89.6 L 566.4 87.1 L 569.1 84.6 L 571.8 82.1 L 574.5 79.6 L 577.2 77.1 L 579.9 74.5 L 582.5 72.0 L 585.2 69.4 L 587.9 66.8 L 590.6 64.2 L 593.3 61.6 L 596.0 59.0" fill="none" stroke="#f97316" stroke-width="2.8" stroke-opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M 58.0 309.2 L 60.7 309.1 L 63.4 308.9 L 66.1 308.8 L 68.8 308.6 L 71.5 308.5 L 74.1 308.3 L 76.8 308.1 L 79.5 307.9 L 82.2 307.7 L 84.9 307.5 L 87.6 307.3 L 90.3 307.0 L 93.0 306.8 L 95.7 306.5 L 98.3 306.2 L 101.0 306.0 L 103.7 305.7 L 106.4 305.3 L 109.1 305.0 L 111.8 304.7 L 114.5 304.3 L 117.2 303.9 L 119.9 303.5 L 122.6 303.1 L 125.2 302.6 L 127.9 302.2 L 130.6 301.7 L 133.3 301.2 L 136.0 300.6 L 138.7 300.1 L 141.4 299.5 L 144.1 298.9 L 146.8 298.2 L 149.5 297.5 L 152.2 296.8 L 154.8 296.1 L 157.5 295.3 L 160.2 294.4 L 162.9 293.6 L 165.6 292.6 L 168.3 291.7 L 171.0 290.7 L 173.7 289.6 L 176.4 288.5 L 179.1 287.3 L 181.7 286.1 L 184.4 284.8 L 187.1 283.5 L 189.8 282.0 L 192.5 280.5 L 195.2 279.0 L 197.9 277.3 L 200.6 275.6 L 203.3 273.8 L 206.0 271.9 L 208.6 269.9 L 211.3 267.8 L 214.0 265.6 L 216.7 263.3 L 219.4 260.9 L 222.1 258.4 L 224.8 255.7 L 227.5 252.9 L 230.2 250.0 L 232.8 246.9 L 235.5 243.6 L 238.2 240.2 L 240.9 236.7 L 243.6 232.9 L 246.3 229.0 L 249.0 224.9 L 251.7 220.5 L 254.4 216.0 L 257.1 211.2 L 259.8 206.2 L 262.4 200.9 L 265.1 195.4 L 267.8 189.6 L 270.5 183.5 L 273.2 177.2 L 275.9 170.5 L 278.6 163.4 L 281.3 156.0 L 284.0 148.3 L 286.6 140.1 L 289.3 131.6 L 292.0 122.6 L 294.7 113.2 L 297.4 103.3 L 300.1 93.0 L 302.8 82.1 L 305.5 70.6 L 308.2 58.6 L 310.9 46.0 L 313.6 34.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-opacity="0.55" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 4"/>
<line x1="78" y1="60" x2="100" y2="60" stroke="currentColor" stroke-width="1.6" stroke-opacity="0.55"/>
<text x="106" y="64" font-size="12" fill="currentColor" fill-opacity="0.9">Sarnoff: n  (an audience)</text>
<line x1="78" y1="78" x2="100" y2="78" stroke="#3b82f6" stroke-width="2.8" stroke-opacity="1"/>
<text x="106" y="82" font-size="12" fill="currentColor" fill-opacity="0.9">reality: n log n</text>
<line x1="78" y1="96" x2="100" y2="96" stroke="#f97316" stroke-width="2.8" stroke-opacity="1"/>
<text x="106" y="100" font-size="12" fill="currentColor" fill-opacity="0.9">Metcalfe: n²  (every pair)</text>
<line x1="78" y1="114" x2="100" y2="114" stroke="currentColor" stroke-width="1.6" stroke-opacity="0.55" stroke-dasharray="5 4"/>
<text x="106" y="118" font-size="12" fill="currentColor" fill-opacity="0.9">Reed: 2ⁿ  (every group)</text>
</svg>
<figcaption style="text-align:center;font-size:0.85rem;opacity:0.7;margin-top:0.5rem">The same network, valued four ways. Sarnoff treats users as a passive audience, so value is linear. Metcalfe counts every pair, so it squares. Reed counts every possible group and rockets off the top almost at once. The honest curve, n log n, sits between linear and square: faster than the crowd, but not the runaway the square promises.</figcaption>
</figure>

sarnoff is the floor: a tv network is worth its audience, each viewer adding the same flat amount, so value is just linear in $n$. metcalfe counts pairs, so it squares. reed counts every possible subgroup or community that could form (every club, group chat, subreddit), and the number of subsets of a crowd is $2^n$, which is so explosive it leaves the chart almost immediately and is best read as a romantic ceiling rather than a real number.

so which is true? the honest answer arrived in 2006, when briscoe, odlyzko and tilly published a paper bluntly titled *metcalfe's law is wrong*. their objection: $n^2$ assumes every connection is worth the same, and it is not. you do not value a stranger three timezones away as much as you value your sibling. if you rank your connections by how much you actually use them, their worth falls off in the classic **zipf's law** pattern (the $k$-th most valuable is worth about $1/k$), and adding that up gives a network value closer to

$$ n \log n $$

faster than linear, slower than the square. less seductive than metcalfe, but it does not balloon into nonsense the way $n^2$ does for a planet of billions of users.

the exact exponent is not the lesson. the lesson is that value is **super-linear**: somewhere between $n$ and $n^2$, it grows faster than the crowd that produces it. that is the whole property, and it has a sharp double edge.

## the tipping point

here is the edge. value grows super-linearly, but *cost* does not. running the network (servers, support, paying out the supply side) grows roughly in proportion to how many users you carry: cost is about $c\,n$, an ordinary straight line. so plot the two against each other:

<figure style="margin:1.6rem 0">
<svg viewBox="0 0 620 360" role="img" aria-label="The tipping point: value (n²) versus cost (n)" style="width:100%;max-width:620px;height:auto;font-family:inherit;display:block;margin:0 auto">
<rect x="58.0" y="34" width="269.0" height="278.0" fill="currentColor" fill-opacity="0.06"/>
<rect x="327.0" y="34" width="269.0" height="278.0" fill="#3b82f6" fill-opacity="0.06"/>
<text x="310" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">The tipping point: value (n²) versus cost (n)</text>
<line x1="58" y1="312.0" x2="596" y2="312.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="50" y="316.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="58" y1="242.5" x2="596" y2="242.5" stroke="currentColor" stroke-opacity="0.10"/>
<text x="50" y="246.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">55</text>
<line x1="58" y1="173.0" x2="596" y2="173.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="50" y="177.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">110</text>
<line x1="58" y1="103.5" x2="596" y2="103.5" stroke="currentColor" stroke-opacity="0.10"/>
<text x="50" y="107.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">165</text>
<line x1="58" y1="34.0" x2="596" y2="34.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="50" y="38.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">220</text>
<line x1="58.0" y1="312" x2="58.0" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="58.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="192.5" y1="312" x2="192.5" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="192.5" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">5</text>
<line x1="327.0" y1="312" x2="327.0" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="327.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">10</text>
<line x1="461.5" y1="312" x2="461.5" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="461.5" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">15</text>
<line x1="596.0" y1="312" x2="596.0" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="596.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">20</text>
<line x1="58" y1="34" x2="58" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="58" y1="312" x2="596" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<text x="327" y="354" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85">users on the network (n)</text>
<text x="14" y="173" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85" transform="rotate(-90 14 173)">value or cost</text>
<line x1="327.0" y1="40" x2="327.0" y2="312" stroke="currentColor" stroke-width="1.4" stroke-opacity="0.5" stroke-dasharray="5 4"/>
<path d="M 58.0 312.0 L 60.7 312.0 L 63.4 312.0 L 66.1 311.9 L 68.8 311.9 L 71.5 311.8 L 74.1 311.8 L 76.8 311.7 L 79.5 311.6 L 82.2 311.5 L 84.9 311.4 L 87.6 311.2 L 90.3 311.1 L 93.0 310.9 L 95.7 310.8 L 98.3 310.6 L 101.0 310.4 L 103.7 310.2 L 106.4 310.0 L 109.1 309.7 L 111.8 309.5 L 114.5 309.2 L 117.2 308.9 L 119.9 308.7 L 122.6 308.4 L 125.2 308.1 L 127.9 307.7 L 130.6 307.4 L 133.3 307.0 L 136.0 306.7 L 138.7 306.3 L 141.4 305.9 L 144.1 305.5 L 146.8 305.1 L 149.5 304.7 L 152.1 304.3 L 154.8 303.8 L 157.5 303.4 L 160.2 302.9 L 162.9 302.4 L 165.6 301.9 L 168.3 301.4 L 171.0 300.9 L 173.7 300.3 L 176.4 299.8 L 179.1 299.2 L 181.7 298.6 L 184.4 298.0 L 187.1 297.4 L 189.8 296.8 L 192.5 296.2 L 195.2 295.6 L 197.9 294.9 L 200.6 294.3 L 203.3 293.6 L 206.0 292.9 L 208.6 292.2 L 211.3 291.5 L 214.0 290.7 L 216.7 290.0 L 219.4 289.3 L 222.1 288.5 L 224.8 287.7 L 227.5 286.9 L 230.2 286.1 L 232.8 285.3 L 235.5 284.5 L 238.2 283.6 L 240.9 282.8 L 243.6 281.9 L 246.3 281.0 L 249.0 280.2 L 251.7 279.2 L 254.4 278.3 L 257.1 277.4 L 259.8 276.5 L 262.4 275.5 L 265.1 274.5 L 267.8 273.6 L 270.5 272.6 L 273.2 271.6 L 275.9 270.5 L 278.6 269.5 L 281.3 268.5 L 284.0 267.4 L 286.6 266.4 L 289.3 265.3 L 292.0 264.2 L 294.7 263.1 L 297.4 262.0 L 300.1 260.8 L 302.8 259.7 L 305.5 258.5 L 308.2 257.4 L 310.9 256.2 L 313.5 255.0 L 316.2 253.8 L 318.9 252.6 L 321.6 251.3 L 324.3 250.1 L 327.0 248.8 L 329.7 247.5 L 332.4 246.3 L 335.1 245.0 L 337.8 243.7 L 340.4 242.3 L 343.1 241.0 L 345.8 239.7 L 348.5 238.3 L 351.2 236.9 L 353.9 235.6 L 356.6 234.2 L 359.3 232.7 L 362.0 231.3 L 364.7 229.9 L 367.3 228.4 L 370.0 227.0 L 372.7 225.5 L 375.4 224.0 L 378.1 222.5 L 380.8 221.0 L 383.5 219.5 L 386.2 218.0 L 388.9 216.4 L 391.6 214.9 L 394.2 213.3 L 396.9 211.7 L 399.6 210.1 L 402.3 208.5 L 405.0 206.9 L 407.7 205.2 L 410.4 203.6 L 413.1 201.9 L 415.8 200.2 L 418.5 198.6 L 421.2 196.9 L 423.8 195.1 L 426.5 193.4 L 429.2 191.7 L 431.9 189.9 L 434.6 188.2 L 437.3 186.4 L 440.0 184.6 L 442.7 182.8 L 445.4 181.0 L 448.1 179.2 L 450.7 177.3 L 453.4 175.5 L 456.1 173.6 L 458.8 171.7 L 461.5 169.8 L 464.2 167.9 L 466.9 166.0 L 469.6 164.1 L 472.3 162.2 L 474.9 160.2 L 477.6 158.2 L 480.3 156.3 L 483.0 154.3 L 485.7 152.3 L 488.4 150.3 L 491.1 148.2 L 493.8 146.2 L 496.5 144.1 L 499.2 142.1 L 501.8 140.0 L 504.5 137.9 L 507.2 135.8 L 509.9 133.7 L 512.6 131.5 L 515.3 129.4 L 518.0 127.3 L 520.7 125.1 L 523.4 122.9 L 526.1 120.7 L 528.8 118.5 L 531.4 116.3 L 534.1 114.1 L 536.8 111.8 L 539.5 109.6 L 542.2 107.3 L 544.9 105.0 L 547.6 102.7 L 550.3 100.4 L 553.0 98.1 L 555.7 95.8 L 558.3 93.4 L 561.0 91.1 L 563.7 88.7 L 566.4 86.3 L 569.1 83.9 L 571.8 81.5 L 574.5 79.1 L 577.2 76.7 L 579.9 74.2 L 582.5 71.8 L 585.2 69.3 L 587.9 66.8 L 590.6 64.3 L 593.3 61.8 L 596.0 59.3" fill="none" stroke="#3b82f6" stroke-width="2.8" stroke-opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M 58.0 312.0 L 60.7 311.4 L 63.4 310.7 L 66.1 310.1 L 68.8 309.5 L 71.5 308.8 L 74.1 308.2 L 76.8 307.6 L 79.5 306.9 L 82.2 306.3 L 84.9 305.7 L 87.6 305.1 L 90.3 304.4 L 93.0 303.8 L 95.7 303.2 L 98.3 302.5 L 101.0 301.9 L 103.7 301.3 L 106.4 300.6 L 109.1 300.0 L 111.8 299.4 L 114.5 298.7 L 117.2 298.1 L 119.9 297.5 L 122.6 296.8 L 125.2 296.2 L 127.9 295.6 L 130.6 294.9 L 133.3 294.3 L 136.0 293.7 L 138.7 293.0 L 141.4 292.4 L 144.1 291.8 L 146.8 291.1 L 149.5 290.5 L 152.1 289.9 L 154.8 289.3 L 157.5 288.6 L 160.2 288.0 L 162.9 287.4 L 165.6 286.7 L 168.3 286.1 L 171.0 285.5 L 173.7 284.8 L 176.4 284.2 L 179.1 283.6 L 181.7 282.9 L 184.4 282.3 L 187.1 281.7 L 189.8 281.0 L 192.5 280.4 L 195.2 279.8 L 197.9 279.1 L 200.6 278.5 L 203.3 277.9 L 206.0 277.2 L 208.6 276.6 L 211.3 276.0 L 214.0 275.4 L 216.7 274.7 L 219.4 274.1 L 222.1 273.5 L 224.8 272.8 L 227.5 272.2 L 230.2 271.6 L 232.8 270.9 L 235.5 270.3 L 238.2 269.7 L 240.9 269.0 L 243.6 268.4 L 246.3 267.8 L 249.0 267.1 L 251.7 266.5 L 254.4 265.9 L 257.1 265.2 L 259.8 264.6 L 262.4 264.0 L 265.1 263.4 L 267.8 262.7 L 270.5 262.1 L 273.2 261.5 L 275.9 260.8 L 278.6 260.2 L 281.3 259.6 L 284.0 258.9 L 286.6 258.3 L 289.3 257.7 L 292.0 257.0 L 294.7 256.4 L 297.4 255.8 L 300.1 255.1 L 302.8 254.5 L 305.5 253.9 L 308.2 253.2 L 310.9 252.6 L 313.5 252.0 L 316.2 251.3 L 318.9 250.7 L 321.6 250.1 L 324.3 249.4 L 327.0 248.8 L 329.7 248.2 L 332.4 247.6 L 335.1 246.9 L 337.8 246.3 L 340.4 245.7 L 343.1 245.0 L 345.8 244.4 L 348.5 243.8 L 351.2 243.1 L 353.9 242.5 L 356.6 241.9 L 359.3 241.2 L 362.0 240.6 L 364.7 240.0 L 367.3 239.3 L 370.0 238.7 L 372.7 238.1 L 375.4 237.4 L 378.1 236.8 L 380.8 236.2 L 383.5 235.6 L 386.2 234.9 L 388.9 234.3 L 391.6 233.7 L 394.2 233.0 L 396.9 232.4 L 399.6 231.8 L 402.3 231.1 L 405.0 230.5 L 407.7 229.9 L 410.4 229.2 L 413.1 228.6 L 415.8 228.0 L 418.5 227.3 L 421.2 226.7 L 423.8 226.1 L 426.5 225.4 L 429.2 224.8 L 431.9 224.2 L 434.6 223.5 L 437.3 222.9 L 440.0 222.3 L 442.7 221.6 L 445.4 221.0 L 448.1 220.4 L 450.7 219.8 L 453.4 219.1 L 456.1 218.5 L 458.8 217.9 L 461.5 217.2 L 464.2 216.6 L 466.9 216.0 L 469.6 215.3 L 472.3 214.7 L 474.9 214.1 L 477.6 213.4 L 480.3 212.8 L 483.0 212.2 L 485.7 211.5 L 488.4 210.9 L 491.1 210.3 L 493.8 209.6 L 496.5 209.0 L 499.2 208.4 L 501.8 207.8 L 504.5 207.1 L 507.2 206.5 L 509.9 205.9 L 512.6 205.2 L 515.3 204.6 L 518.0 204.0 L 520.7 203.3 L 523.4 202.7 L 526.1 202.1 L 528.8 201.4 L 531.4 200.8 L 534.1 200.2 L 536.8 199.5 L 539.5 198.9 L 542.2 198.3 L 544.9 197.6 L 547.6 197.0 L 550.3 196.4 L 553.0 195.7 L 555.7 195.1 L 558.3 194.5 L 561.0 193.9 L 563.7 193.2 L 566.4 192.6 L 569.1 192.0 L 571.8 191.3 L 574.5 190.7 L 577.2 190.1 L 579.9 189.4 L 582.5 188.8 L 585.2 188.2 L 587.9 187.5 L 590.6 186.9 L 593.3 186.3 L 596.0 185.6" fill="none" stroke="#f97316" stroke-width="2.8" stroke-opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="327.0" cy="248.8" r="4" fill="currentColor"/>
<text x="319.0" y="236.8" text-anchor="end" font-size="11.5" fill="currentColor" fill-opacity="0.85" font-weight="600">critical mass</text>
<text x="90.9" y="45.0" text-anchor="start" font-size="11.5" fill="currentColor" fill-opacity="0.85">below: cost > value, users leave</text>
<text x="343.8" y="53.8" text-anchor="start" font-size="11.5" fill="#3b82f6">above: value runs away</text>
<line x1="430" y1="250" x2="452" y2="250" stroke="#3b82f6" stroke-width="2.8" stroke-opacity="1"/>
<text x="458" y="254" font-size="12" fill="currentColor" fill-opacity="0.9">value ~ n²</text>
<line x1="430" y1="268" x2="452" y2="268" stroke="#f97316" stroke-width="2.8" stroke-opacity="1"/>
<text x="458" y="272" font-size="12" fill="currentColor" fill-opacity="0.9">cost ~ n</text>
</svg>
<figcaption style="text-align:center;font-size:0.85rem;opacity:0.7;margin-top:0.5rem">Value grows like the square; the cost of running the network grows like a straight line. Below the crossing the network costs more than it is worth, an empty restaurant nobody wants to be first into. Above it, every joiner makes joining more attractive to the next, the loop runs away, and the market tips to one winner. The crossing is critical mass.</figcaption>
</figure>

for small $n$, the straight cost line sits *above* the value curve. the network costs more than it is worth. it is an empty restaurant: no one wants to be the only diner, so no one comes, so there is no reason for anyone to come. (jeffrey rohlfs named this trap in 1974; richard schmalensee later called rohlfs' paper "the 1974 model of facebook.") this is the cold-start problem, the chicken with no egg.

the two lines cross at exactly one point. set the value $a\,n^2$ equal to the cost $c\,n$ and solve for the size where the network finally pays for itself:

$$ a\,n^2 = c\,n \quad\Rightarrow\quad n^{\ast} = \frac{c}{a} $$

that $n^\ast$ is **critical mass**. below it, the network bleeds and people leave faster than they arrive. above it, every new joiner makes joining more attractive to the next, which pulls them in, which makes it more attractive still: positive feedback, the curve runs away, and the market tips towards a single winner. winner-take-most is not a personality trait of tech founders, it is just what a feedback loop does once it crosses its own threshold.

this is why platforms set money on fire early. grab's driver subsidies, every "free for your first year", the restaurants a delivery app quietly seeds onto the map before launch: none of it makes sense as a normal business, and all of it makes sense as buying your way across $n^\ast$. below critical mass, almost nothing you do matters. above it, almost nothing your competitor does matters.

## it shows up as an s-curve

run that tipping point forward in time instead of across users, and you get the most recognisable curve in business:

<figure style="margin:1.6rem 0">
<svg viewBox="0 0 620 360" role="img" aria-label="Critical mass in time: the adoption S-curve" style="width:100%;max-width:620px;height:auto;font-family:inherit;display:block;margin:0 auto">
<rect x="58.0" y="34" width="134.5" height="278.0" fill="currentColor" fill-opacity="0.05"/>
<text x="310" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">Critical mass in time: the adoption S-curve</text>
<line x1="58" y1="312.0" x2="596" y2="312.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="50" y="316.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="58" y1="242.5" x2="596" y2="242.5" stroke="currentColor" stroke-opacity="0.10"/>
<text x="50" y="246.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">25</text>
<line x1="58" y1="173.0" x2="596" y2="173.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="50" y="177.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">50</text>
<line x1="58" y1="103.5" x2="596" y2="103.5" stroke="currentColor" stroke-opacity="0.10"/>
<text x="50" y="107.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">75</text>
<line x1="58" y1="34.0" x2="596" y2="34.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="50" y="38.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">100</text>
<line x1="58.0" y1="312" x2="58.0" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="58.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">0</text>
<line x1="147.7" y1="312" x2="147.7" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="147.7" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">4</text>
<line x1="237.3" y1="312" x2="237.3" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="237.3" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">8</text>
<line x1="327.0" y1="312" x2="327.0" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="327.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">12</text>
<line x1="416.7" y1="312" x2="416.7" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="416.7" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">16</text>
<line x1="506.3" y1="312" x2="506.3" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="506.3" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">20</text>
<line x1="596.0" y1="312" x2="596.0" y2="316" stroke="currentColor" stroke-opacity="0.45"/>
<text x="596.0" y="330.0" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">24</text>
<line x1="58" y1="34" x2="58" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="58" y1="312" x2="596" y2="312" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<text x="327" y="354" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85">time</text>
<text x="14" y="173" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85" transform="rotate(-90 14 173)">share of the market that has adopted (%)</text>
<line x1="259.8" y1="40" x2="259.8" y2="312" stroke="currentColor" stroke-width="1.4" stroke-opacity="0.5" stroke-dasharray="5 4"/>
<path d="M 58.0 311.6 L 60.7 311.6 L 63.4 311.6 L 66.1 311.5 L 68.8 311.5 L 71.5 311.5 L 74.1 311.4 L 76.8 311.4 L 79.5 311.4 L 82.2 311.3 L 84.9 311.3 L 87.6 311.2 L 90.3 311.2 L 93.0 311.1 L 95.7 311.1 L 98.3 311.0 L 101.0 310.9 L 103.7 310.8 L 106.4 310.8 L 109.1 310.7 L 111.8 310.6 L 114.5 310.5 L 117.2 310.4 L 119.9 310.3 L 122.6 310.2 L 125.2 310.0 L 127.9 309.9 L 130.6 309.8 L 133.3 309.6 L 136.0 309.5 L 138.7 309.3 L 141.4 309.1 L 144.1 308.9 L 146.8 308.7 L 149.5 308.5 L 152.2 308.2 L 154.8 308.0 L 157.5 307.7 L 160.2 307.4 L 162.9 307.1 L 165.6 306.8 L 168.3 306.5 L 171.0 306.1 L 173.7 305.7 L 176.4 305.3 L 179.1 304.8 L 181.7 304.3 L 184.4 303.8 L 187.1 303.3 L 189.8 302.7 L 192.5 302.1 L 195.2 301.5 L 197.9 300.8 L 200.6 300.0 L 203.3 299.3 L 205.9 298.4 L 208.6 297.6 L 211.3 296.6 L 214.0 295.6 L 216.7 294.6 L 219.4 293.5 L 222.1 292.3 L 224.8 291.1 L 227.5 289.8 L 230.2 288.4 L 232.8 286.9 L 235.5 285.3 L 238.2 283.7 L 240.9 282.0 L 243.6 280.2 L 246.3 278.3 L 249.0 276.3 L 251.7 274.2 L 254.4 272.0 L 257.1 269.6 L 259.8 267.2 L 262.4 264.7 L 265.1 262.0 L 267.8 259.3 L 270.5 256.4 L 273.2 253.4 L 275.9 250.3 L 278.6 247.1 L 281.3 243.7 L 284.0 240.3 L 286.6 236.7 L 289.3 233.0 L 292.0 229.2 L 294.7 225.3 L 297.4 221.4 L 300.1 217.3 L 302.8 213.1 L 305.5 208.9 L 308.2 204.5 L 310.9 200.2 L 313.6 195.7 L 316.2 191.2 L 318.9 186.7 L 321.6 182.2 L 324.3 177.6 L 327.0 173.0 L 329.7 168.4 L 332.4 163.8 L 335.1 159.3 L 337.8 154.8 L 340.4 150.3 L 343.1 145.8 L 345.8 141.5 L 348.5 137.1 L 351.2 132.9 L 353.9 128.7 L 356.6 124.6 L 359.3 120.7 L 362.0 116.8 L 364.7 113.0 L 367.4 109.3 L 370.0 105.7 L 372.7 102.3 L 375.4 98.9 L 378.1 95.7 L 380.8 92.6 L 383.5 89.6 L 386.2 86.7 L 388.9 84.0 L 391.6 81.3 L 394.2 78.8 L 396.9 76.4 L 399.6 74.0 L 402.3 71.8 L 405.0 69.7 L 407.7 67.7 L 410.4 65.8 L 413.1 64.0 L 415.8 62.3 L 418.5 60.7 L 421.1 59.1 L 423.8 57.6 L 426.5 56.2 L 429.2 54.9 L 431.9 53.7 L 434.6 52.5 L 437.3 51.4 L 440.0 50.4 L 442.7 49.4 L 445.4 48.4 L 448.1 47.6 L 450.7 46.7 L 453.4 46.0 L 456.1 45.2 L 458.8 44.5 L 461.5 43.9 L 464.2 43.3 L 466.9 42.7 L 469.6 42.2 L 472.3 41.7 L 474.9 41.2 L 477.6 40.7 L 480.3 40.3 L 483.0 39.9 L 485.7 39.5 L 488.4 39.2 L 491.1 38.9 L 493.8 38.6 L 496.5 38.3 L 499.2 38.0 L 501.9 37.8 L 504.5 37.5 L 507.2 37.3 L 509.9 37.1 L 512.6 36.9 L 515.3 36.7 L 518.0 36.5 L 520.7 36.4 L 523.4 36.2 L 526.1 36.1 L 528.8 36.0 L 531.4 35.8 L 534.1 35.7 L 536.8 35.6 L 539.5 35.5 L 542.2 35.4 L 544.9 35.3 L 547.6 35.2 L 550.3 35.2 L 553.0 35.1 L 555.6 35.0 L 558.3 34.9 L 561.0 34.9 L 563.7 34.8 L 566.4 34.8 L 569.1 34.7 L 571.8 34.7 L 574.5 34.6 L 577.2 34.6 L 579.9 34.6 L 582.5 34.5 L 585.2 34.5 L 587.9 34.5 L 590.6 34.4 L 593.3 34.4 L 596.0 34.4" fill="none" stroke="#3b82f6" stroke-width="2.8" stroke-opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<text x="122.3" y="126.1" text-anchor="start" font-size="11.5" fill="currentColor" fill-opacity="0.85">the chasm:</text>
<text x="122.3" y="153.9" text-anchor="start" font-size="11.5" fill="currentColor" fill-opacity="0.85">most networks die here</text>
<circle cx="259.8" cy="267.5" r="4" fill="currentColor"/>
<text x="251.8" y="255.5" text-anchor="end" font-size="11.5" fill="currentColor" fill-opacity="0.85" font-weight="600">critical mass</text>
<text x="504.3" y="142.8" text-anchor="end" font-size="11.5" fill="currentColor" fill-opacity="0.85">saturation</text>
</svg>
<figcaption style="text-align:center;font-size:0.85rem;opacity:0.7;margin-top:0.5rem">Run the same tipping point forward in time. Adoption is flat and fragile at the start (the chasm, where most networks die), near-vertical once it crosses critical mass, then flattens as it runs out of people left to add. Network effects are exactly what make the middle so steep: each adopter is a reason for the next to join.</figcaption>
</figure>

flat and fragile at the start (this is where almost every network dies, the gap geoffrey moore named "the chasm"), then near-vertical once it crosses critical mass, then flattening again as it runs out of people left to add. everett rogers' *diffusion of innovations*, the innovators-then-early-adopters-then-majority story, is the same S seen from the sociology side. network effects are precisely what make the middle so steep: each adopter is a reason for the next one to join, so adoption recruits adoption until saturation runs it out of fuel.

## the moat

now back to where i started, in the five forces. once a network is past critical mass, the network itself becomes the **barrier to entry**, and it is the meanest one in porter's whole framework. a rival can arrive with a genuinely better product and still lose, because the thing customers are buying is not the features, it is the other customers, and the other customers are already on your side. you can clone an interface in a weekend. you cannot clone an installed base.

but it is not a fortress, and two things crack it:

- **negative network effects.** past a point, more users can make a network *worse*: congestion, spam, noise, the way a community can simply get too big to be any good. value does not actually climb as $n^2$ forever, it bends, which is the deeper reason $n\log n$ beats $n^2$ as you scale.
- **multi-homing.** if switching is one tap and users can sit on both networks at once, the moat leaks. riders run grab and gojek side by side and take whichever is cheaper this minute, so neither platform's network fully locks the other out.

and incumbency is necessary, not sufficient. comfortdelgro had the drivers, the brand, and the head start, and grab still tipped the market out from under it, partly because the incumbent read a network war as a taxi-dispatch problem and answered it the better part of a decade late. a network moat protects you only for as long as you remember that the network, not the product, is the thing you are defending.

## why this is not just about apps

the shape turns up anywhere value lives in connections rather than in units.

english is the world's second language not because it is elegant but because everyone else already speaks it, which is a network effect wearing a grammar book. file formats and standards win the same way. cities do it too: people crowd into the expensive one because the *other people* are there, the jobs and the friends and the scenes, which is why a cheaper town cannot simply undercut it. and it runs your own career: the value of your professional network is not how many contacts you have, it is how densely those contacts connect to each other and to opportunity, which is reed's law quietly compounding on your behalf.

the practical reading is just the maths run backwards. being early in a network that later tips is about the closest thing to free money the arithmetic allows, because you bought in while value was still priced like $n$ and you hold it once it grows like $n^2$. and being early in one that never tips is a slow bleed for the same reason: below critical mass, the curve was never on your side. the hard part, which the maths pointedly refuses to make easy, is telling the two apart before the crossing rather than after.

(it is also why, when a network already exists, you should usually [buy into it rather than build your own]({{< ref "build-vs-buy" >}}): recreating a live network from zero is the most expensive build there is, because you are not paying for software, you are paying to drag a cold network all the way to $n^\ast$ against someone who is already past it.)

## a personal note

wip ...

## sources and further reading

- carl shapiro & hal varian, *information rules* (1998): still the best single book on network effects, lock-in, and standards wars, written before most of today's examples existed.
- michael katz & carl shapiro (1985), [network externalities, competition, and compatibility](https://ideas.repec.org/a/aea/aecrev/v75y1985i3p424-40.html) (*american economic review* 75(3)): the foundational economics paper, and the source of the direct-versus-indirect distinction.
- jeffrey rohlfs (1974), [a theory of interdependent demand for a communications service](https://doi.org/10.2307/3003090) (*bell journal of economics* 5(1)): where critical mass comes from, the "1974 model of facebook".
- bob briscoe, andrew odlyzko & benjamin tilly (2006), [metcalfe's law is wrong](https://spectrum.ieee.org/metcalfes-law-is-wrong) (*ieee spectrum*): the $n\log n$ correction and the zipf argument behind it.
- jean-charles rochet & jean tirole (2003), platform competition in two-sided markets (*journal of the european economic association* 1(4)): the rigorous version of the grab story; tirole took a nobel partly for this line of work.
- everett rogers, *diffusion of innovations* (1962), and geoffrey moore, *crossing the chasm* (1991): the adoption S-curve and the gap that kills young networks.
- my own [build-versus-buy note]({{< ref "build-vs-buy" >}}): why an existing network is usually a buy, not a build.
