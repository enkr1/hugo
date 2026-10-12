---
title: "Journal: Week 86"
date: 2026-10-12T00:32:19+08:00
description: "three weeks in one: a lunch with lio that made me ask whether my optimising was worth doing at all, a stats midterm, and gym buddy shipping through it all"
tags:
  - journal
  - reflection
  - llm-workflow
  - NUS
  - gym-buddy
categories:
  - "About Me"
  - "Journals"
keywords: ["weekly journal", "less is more", "optimisation", "subtraction", "mentorship", "long context", "livewired", "stats midterm", "gym buddy", "solo developer"]
comments: false
---

## ✨ Highlights of the Week

three weeks in one entry this time. i've been way too busy to write at all.

lunch with lio on 30 sep at paris baguette. i've called him liogend for years, and this lunch reminded me why. sharp and full of energy as always, and so generous with everything he knows about ai.

i was telling him how i've been using my enqueue / dequeue skills to save tokens. then he asked:

{{< quote author="Lio" >}}
are you optimising just for the sake of optimisation, or are you optimising something that truly needs it?
{{< /quote >}}

that question woke me up. some of the "optimisations" i've been chasing might not be worth the effort at all. before optimising anything, ask whether the work is worth doing at all. the highest-leverage optimisation is often removing work, not speeding it up.

> less is more. the best optimisation is subtraction.

he also talked about long-context models like deepseek. if you can just put everything in context, token tricks like mine might matter less than i think. worth testing.

and he recommended livewired by david eagleman: the brain is livewired, not hardwired. same goes for how i build and learn. keep the system plastic, keep rewiring it.

one of those conversations you don't forget.

## 📋 Recap

### 📚 NUS

- Settled the stats midterm's scope off a sample paper rather than the course page, after one question worth twelve of its sixty marks sat in the chapter the page's wording would have cut
- Audited the one-A4 helpsheet against the five tested lectures, then printed it and sat the midterm
- Turned the quiz I submitted late into ten fresh-number variants written out in full, then sat them cold and timed, which showed the ten out of ten had been recognition rather than recall
- Submitted levels 6 to 8 of the individual project, a database, user accounts and per-user routes, and pushed the week 8 report

### ✍️ Blog

- Published [why a loop that both notices and writes runs at the pace of its expensive call]({{< ref "posts/detection-is-not-generation" >}}), then widened it to Jev's open-weights rival Laya

### 🔧 Projects

#### 🏋️ Gym Buddy

- Made the calorie target move with every weigh-in, read off what you ate against what the scale did, after a fixed formula had quietly run my nine-week bulk as a mild deficit
- Added a rank settle screen at the end of a session, and a hold bonus for repeat lifts that held at the same gym
- Let a workout start, log and finish with no network, replaying in order once you are back online
- Let you crop a take like a video editor, and moved filming to the phone's own camera app
- Showed what Gym Buddy read from a meal and let you fix it line by line, with unread days underlined and a month sheet
- Rebuilt the weigh-in sheet around a sideways tape to two decimals, with a trend graph and a range filter
- Built a light theme, not open to everyone yet
- Counted twenty minutes of cardio toward the streak, and showed a cardio effort by what it came to instead of as sets

#### 🛠️ Tooling and site

- Made dequeue claim the handoff it picks and release it on exit, after two sessions took the same one

### 💪 Fitness

- Learned to compare what I actually trained rather than one plan against another, after reading the new block as cutting three muscle groups when only one had really dropped
- Put a source behind every number steering my own training, after noticing I hold student material to that rule and my own sheet to none
- Reversed my own block's arms-maintain bias on a student's plan once their goal was bigger arms
- Learned a student's second class should teach new movements rather than repeat the first day's six
