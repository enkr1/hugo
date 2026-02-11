---
title: "NUS-BIT Notebook"
sticky: 0
date: 2025-07-28 04:36:34
tags:
  - "NUS"
  - "NUS-BIT"
  - "notebook"
categories:
  - ["Notebooks"]
  - ["Career Development", "Bachelor's Degree", "NUS | Bachelor of Information Technology"]
subtitle: "My workflow, modules, study system, and lessons learnt"
description: "A living notebook documenting my journey through the NUS Bachelor of Information Technology programme. How I adapted the Zettelkasten method for coursework, validated spaced repetition with real data, and what I've learnt juggling programming, logic, and calculus. For current and future students."
keywords:
  - "NUS BIT"
  - "study workflow"
  - "zettelkasten"
  - "spaced repetition"
  - "progress tracking"
---


hi current or future NUS-BIT students,

this is my living notebook for the NUS Bachelor of Information Technology programme. i'm documenting my workflow, module insights, and study system as i progress through the degree. if you're considering NUS BIT or currently enrolled, hopefully this gives you a realistic picture of what the journey looks like.

<!-- more -->

---

## study approach

i use the [Zettelkasten method]({{< ref "book-how-to-take-smart-notes" >}}) - capture during lectures, process daily, drill at Day 2→5→9→16. validated with 15+ gaps resolved.

---

## modules i'm taking

currently juggling three modules (Semester 2, AY2025/26):

### TCX1002: introduction to programming

**language:** Python

**topics:** algorithms, data structures, NumPy, regex, OOP, complexity analysis

**my background:** with more than 4 years coding experience i found this module really fun to do, thought it would be like going back to kindergarten. in fact some questions are designed to be relatively challenging! still finding it exciting!

**reality check:** tutorials are **meaty**. T1-T3 had 8 questions each, took 2-4 hours per tutorial. topics like:
- Boyer-Moore string search (bad character heuristic)
- NumPy broadcasting for distance matrices
- Pattern replacement with K-length optimisation
- Sliding window for time series

**key assessments:**
- mid-term: 14 Feb (20%)
- practical exam: 16 Apr (20%)
- final: 4 May (40%)

**status:** confident. completed T1-T3, A1 done. permanent notes on regex patterns, dict behaviours, NumPy shapes.

anything i found worth dropping while relearning python: [TCX1002 Notebook]({{< ref "tcx1002-notebook" >}})

---

### TCX1004: mathematical techniques

**topics:** logic, proofs, set theory, relations, induction, graph theory, probability

**my background:** comfortable with logic from work (software engineering), but formal proofs were new

**reality check:** proof rules took time to internalise. breakthrough moment: chunking rules into 3 categories:
- 🔨 BREAK APART (specialisation: split conjunctions)
- 🔧 BUILD UP (conjunction: connect statements)
- ➡️ MOVE FORWARD (modus ponens, universal instantiation)

**status:** confident. tutorial 1 complete. mastered quantifiers (∀∃ ≠ ∃∀ was a huge "aha" moment).

as i first touched discrete math, here's a dump of how i think programmatically & logically through formal proofs: [TCX1004 Notebook]({{< ref "tcx1004-notebook" >}})

---

### TCX2101: calculus and linear algebra

**topics:** functions, limits, continuity, derivatives, integration, linear algebra

**my background:** rusty. last touched calculus in 2019.

**reality check:** this is the **hardest** of the three. fractional exponents (x^(-1/2)) tripped me up for 3 weeks before i finally drilled it to mastery.

**breakthrough moments:**
- **limits:** "anything/0 = blows up 🚀, 0/0 = confused 🤔" (memory aids work!)
- **continuity:** "can't teleport through floors" (IVT intuition)
- **implicit differentiation:** zoom test (vertical line test locally) clicked everything

**status:** confident. Ch1-Ch2 done, Ch3 implicit differentiation in progress.

basically converted every word from canvas to a comprehensive notebook for myself to read better: [TCX2101 Notebook]({{< ref "tcx2101-notebook" >}})

---

### previously completed

- **TCX1101:** foundational mathematics (vectors, calculus, complex numbers)
- **TCX2002:** business analytics (R programming, statistics)

---

## tools & tracking

markdown + git for all notes. progress tracker (440+ lines) logs every gap, drill result, and breakthrough. claude for tutoring/debugging. 9 permanent notes so far.

---

## lessons learnt (most valuable first)

1. **done > perfect.** trying to perfect one module while neglecting others doesn't work for part-time study. cycle through all three or burn out.
2. **honest tracking prevents ego-driven mistakes.** fractional exponents tripped me for 3 weeks because i thought "i know this". tracker doesn't lie.
3. **spaced repetition works.** day 5 drill caught me having "5/0 = ∞" completely backwards. would've bombed homework without it.
4. **writing forces understanding.** can't fake it when you have to explain in full sentences. collection ≠ learning.
5. **"vibe coder" was BS.** 4 years experience didn't stop me from "tweaking until green" or having "accidentally correct" logic. formal CS forces rigour.
6. **memory aids >>> rote memorisation.** "anything/0 = blows up 🚀, 0/0 = confused 🤔" drilled from 1/6 → 6/6. ASCII diagrams for unit circle clicked immediately.
7. **green tests ≠ correct logic.** review even when passing. think WHY it works, not just IF.
8. **specific > vague.** "∀∃ ≠ ∃∀ because order = sentence structure" helps. "quantifiers are hard" doesn't.
9. **struggle = learning.** hint-first debugging builds neural pathways. spoon-fed solutions don't.
10. **ask about exam format.** test case visibility, partial credit, ambiguity handling - understanding the game matters.

---

## resources

- [smart notes workflow]({{< ref "book-how-to-take-smart-notes" >}})
- study repo: private (tutorial solutions), but structure documented above
- progress tracker template: might share if there's interest

---

questions? drop a comment or reach out. happy to share what's working (and what isn't).
