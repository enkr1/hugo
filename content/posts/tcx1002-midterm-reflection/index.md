---
title: "TCX1002 | Midterm Reflection"
slug: "nus-bit-tcx1002-midterm-reflection"
date: 2026-02-14
description: "Sunk cost, panic spirals, and the difference between ability and discipline"
tags: ["nus", "python", "tcx1002", "midterm", "reflection"]
categories: ["Education", "Reflection"]
toc: false
math: false
draft: false
---

[Code on GitHub](https://github.com/enkr1/nus_bit_priv/tree/main/000_mods/TCX1002/midterm) | [Midterm Cheatsheet]({{< ref "tcx1002-midterm-cheatsheet" >}})

---

## What actually went wrong

**Q3:** didn't finish reading the spec and constraint before coding. Missed a constraint that was written right there. not a knowledge gap, a discipline gap... even tho i knew that passing all public != full mark. fml. (i only recalled after)

**Q4:** attempted after Q1, realised it wasn't simple, pivoted to Q2 -> Q3 -> back to Q4 with ~20 minutes left. didn't get to solve it...

initially, i saw "points" and jumped into DFS. when it didn't work, i kept patching, more directions, angle calculations, Pythagorean decomposition. each layer made it worse. the correct approach was geometry (90° rotation: `(-dy, dx)` and `(dy, -dx)`), not graph search. Simpler than everything i tried...

> 自信 -> 卡住 -> 慌 -> 越想越复杂 -> 更慌 -> 更加卡住 LOLL

这真的... 让我重新理解了 这句话：**“越投入越不舍得放弃，越不放弃越陷越深。”**

---

i spent days building a [cheatsheet]({{< ref "tcx1002-midterm-cheatsheet" >}}) -- but apart from regex, it was almost 0 help. the exam didn't test what i memorised. it tested how i think under pressure. and in fact, most of the errors weren't things i didn't know -- it was just me stressing myself out for no reason.

---

## The real gap
to me, the gap isn't technical — it's discipline under pressure:

i should have:
- **READ** every constraint before writing a single line.
- **CLASSIFY** the problem type — "is this math or search?" — before coding.
- **STOP** after 10 minutes of no progress and re-read the problem, not the code.
- **SIMPLIFY** when it's getting harder — complexity means wrong track.
- **LET GO** of sunk cost — only the remaining time matters.
