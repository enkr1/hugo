---
title: "Failure is the Learning Mechanism: A Lunch with Prof Jiang"
slug: "prof-jiang-growth-mindset"
date: 2026-04-19
description: "A short reflection on what Prof Jiang Kan said during lunch after the TCX1002 tutorial about programming, failure, and growth."
tags: ["nus", "tcx1002", "reflection", "mindset", "learning"]
categories: ["Reflections"]
toc: false
math: false
draft: false
---

Lunch conversation after the tutorial yesterday, nothing formal. Prof Jiang Kan said something that landed harder than the tutorial content itself.

> Programming is like life. You learn from the failures you face in tutorials, tests, and exams. The key is to hit failure, to make mistakes; we have to be open-minded to learn from mistakes and grow from that.

Paraphrased but close to his words.

## Why it landed

The Practical Exam a few days earlier came back 20/20. But the 20/20 did not come from getting the answers right the first time. It came from Mock Tests 1 through 9, where every wrong submission taught a specific thing. Off-by-one errors in slicing. Forgetting that `.append()` mutates in place. Mixing up `return` and `print`. The final score was downstream of a lot of local failures I stopped hiding from.

Prof pointed this out on a specific piece of code. In PE Q4 I used a stack-based iterative solution. He said it should have been recursive: decompose into subproblems, reach for recursion, stop leaning on manual state.

The 20 marks still came through because the stack worked. But the observation was sharp. My reflex was "iterate and track state manually." The better reflex is "describe the smaller problem and trust the call."

## What this changes for finals

Final exam is May 4. Same module. This time on Examplify, not Coursemology. Fill in the blanks of provided code. No compiler.

Two things to carry in:

1. Recursive thinking as the default mental move when a problem has "do X, then do it again on a smaller piece" structure. Stop reaching for the stack reflex.
2. Mistakes during prep are not "fallen behind." They are the medium. The drills are not supposed to be clean. If every mock test goes perfectly, something is wrong with the difficulty.

## To be continued

A growth-mindset line in a lunch talk can fade into a feel-good quote if I don't tie it to something concrete. For now I'm tying it to two things:

- Re-drilling PE Q4 recursively before the final, as a way of taking the note seriously.
- Keeping the first attempt on any fill-blank practice rough on purpose, and reading the mistakes as data, not judgment.

I will come back to this post after the final, and after any failures that show up between now and then.
