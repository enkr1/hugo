---
title: "Journal: Week 55"
date: 2026-02-25T12:00:00+08:00
tags:
  - journal
  - engineering
categories:
  - "About Me"
  - "Journals"
comments: false
---

## ✨ Highlights of the Week

### building a solution looking for a problem

spent the past few weeks going hard on an app for working out form checking and technique analysis app. mobile app in React Native, API on Cloudflare Workers, even built an admin dashboard in Next.js. auth, database, video upload, the whole stack.

and then i sat down and asked myself: **do i actually need this? do people actually NEED this??**

the honest answer? not really. i record my form with the iphone camera or instagram reels. it works fine. i don't feel any pain. the only thing i kinda want is stats tracking -- but there are apps already do very well on this area.

and when i think about other people? most gym-goers don't even record their workouts. so the market is... basically me and maybe 2 or 3 other people LOL



### the sunk cost trap

这种感觉很奇怪..

你花了几个月的时间 build 了一个东西，功能都做好了，技术也到位了，但突然意识到...

没有人需要它。

这其实就是我上周 [midterm reflection]({{< ref "tcx1002-midterm-reflection" >}}) 里提到的 sunk cost -- 只不过这次不是考试，是一整个 side project。

第一反应是不想承认的。"再加一个 feature 就好了"、"等 ship 了就会有人用"。但其实心里清楚，如果我现在不舍去，我会亏损更多。继续投入时间在没有人需要的东西上，才是真正的浪费。

i paused the project. not killed -- paused. because the code is solid, the architecture is clean, and it's genuinely good portfolio work. but continuing to build features nobody asked for is just... procrastination disguised as productivity.



### what i actually learned

honestly though, no regrets. in terms of skill, this project levelled me up:

- built a full monorepo: expo + cloudflare workers + next.js
- local-first architecture with SQLite + cloud sync
- real auth flow (google/apple sign-in, JWT, token refresh, admin allowlists)
- cloudflare ecosysorgtem: workers, D1, R2
- debugging production issues (shoutout to hono/jwt silently breaking because `verify()` stopped defaulting to HS256 lol)

this is the kind of stuff you can't learn from tutorials. you learn it by shipping.



### next step: observe, don't build

我现在的问题不是能力 -- 是方向。

i can build fast, but building the wrong thing fast is still a waste.

so this week i'm doing one thing: **recording every moment something annoys me**. every "为什么这么麻烦", every "this should be easier", every "怎么没有人做这个". just observing. no coding.

because the best products don't come from brainstorming sessions. they come from noticing what sucks.

we'll see what comes out of it.
