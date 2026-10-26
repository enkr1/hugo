---
title: "Journal: Week 87"
date: 2026-10-26T14:40:02+08:00
description: "two weeks in one: the 4am nights an llm can't give me, a 1983 paper on why the hard parts get harder, and a new home for gym buddy"
tags:
  - journal
  - reflection
  - llm-workflow
  - ironies-of-automation
  - NUS
  - gym-buddy
categories:
  - "About Me"
  - "Journals"
keywords: ["weekly journal", "ironies of automation", "ai-native", "skill fade", "debugging", "learning with llms", "lisanne bainbridge", "docker deploy", "gym buddy", "home dashboard"]
comments: false
---

## ✨ Highlights of the Week

i used to debug the whole night till 4am to figure out how to send pdf chunks at pixium digital. i spent a whole afternoon on live websockets and missed my lunch. even now, i can explain them. i know the actual concepts.

these experiences aint something an llm can provide.

lately it's different. the more ai-native i become, the more empty i feel...

i always knew that eventually i'd be the one who adjusts the sail, and now it's more and more obvious. it makes me think every day: when AI has already replaced the executor, what is our value? the only things we can still control are the direction and the execution methods, and all of these are built on our experience.

and here's the scary part: everyone's experience level will just stagnate the moment they become ai-native. i know it so deeply.

it's hard to explain, it got me curious about this topic, so i dug in ...

turns out there's a name for it: the [ironies of automation]({{< ref "posts/the-hard-parts-get-harder" >}}). lisanne bainbridge [wrote it in 1983](https://doi.org/10.1016/0005-1098%2883%2990046-8) about control rooms and cockpits: take away the easy parts of the job, and the hard parts get harder.

the part that got me: in a [cockpit study](https://journals.sagepub.com/doi/10.1177/0018720814535628), the pilots' hands held up fine. what faded was navigating without the computer and noticing that something was wrong. and in [anthropic's coding experiment](https://www.anthropic.com/research/AI-assistance-coding-skills), the biggest gap between the people using ai and the people coding by hand was debugging. the exact thing my 4am nights built.

but the same experiment had a catch: the people who asked the ai to explain things, instead of handing it the work, scored about as well as the people coding by hand. tiny groups, sorted after the fact, so it proves nothing yet.

and that's how i learn now. i let my llm help me understand the deeper concepts and iterate until i know. it feels like a completely diff way of learning.

## 📋 Recap

### 📚 NUS

- Containerised the individual project and deployed it on Postgres over HTTPS, then wired login, sign-up and the expense list to the API and finished on full client-side rendering with no page reloads
- Built a tutorial app up through hashed passwords, JWT login, a Postgres container and a self-signed HTTPS certificate, with a pre-deadline review catching a question folder a move had deleted
- Lost most of a practical's lab marks to one import that only my own environment could satisfy, so every practical now opens in a clean environment built from its requirements file
- Got the stats midterm and a practical back and filed a per-question review of each, which showed the lost marks were knowledge gaps rather than the careless slips my notes had assumed, and left the answer key out so the redo comes cold first

### ✍️ Blog

- Published [why a promise callback always beats setTimeout(0), and what await really schedules]({{< ref "posts/microtasks-jump-the-queue" >}}), with every printed order run on Node rather than recalled
- Published [why handing the easy parts to AI makes the hard parts harder, and which skills fade first]({{< ref "posts/the-hard-parts-get-harder" >}}), researched off this week's Highlights

### 🔧 Projects

#### 🏋️ Gym Buddy

- Made a new home dashboard the place the app opens, with today's door, the week, the season, weight and your latest records, and let members drag and hide its blocks
- Let Lobby posts carry photos, drawn as a mosaic on the card and picked from a full-page composer
- Asked why on the first open after a gap, saving the answer as a note over the missed days
- Showed when today's workout should finish, under the Today title and in a friend's live peek
- Offered lifts from your own history on a plan day with nothing in it, before you press Go
- Added a same-as-last-time chip that copies your last meal of that type, then asks what was different
- Gave a rank promotion its own beat on the settle screen, holding the final frame for a screenshot

#### 🛠️ Tooling and site

- Added a council skill that runs Karpathy's llm-council on Claude subagents, giving each seat its own stance and never letting a seat rank its own answer
- Made dequeue pop a handoff the moment it is picked, replacing the claim and release from last entry, after sessions kept asking me to check shipped work before letting it go

### 💪 Fitness

- Kept friend days in my own block as long as they never take a scored slot, since a session I want to go to is worth more across the runway than one perfect day
- Parked whether I need two leg days until my attendance is read, since legs are already the slot I skip, and my legs are not big yet
- Moved a student to one leg day a week plus a touch-up day for lower back, core, arms and delts, matching the leg day they actually train
- Scoped the two-sets rule for beginners to lesson days, since it exists to leave class time for checking and teaching, so solo homework days run three sets, isolations light
- Made every student note carry only my own cues, after an image my drafting assistant invented and an option it guessed both reached a student's app
