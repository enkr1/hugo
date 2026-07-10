---
title: "I Almost Switched My AI Agent's Memory"
slug: "almost-switched-ai-agent-memory"
date: 2026-06-03T23:41:30+08:00
subtitle: "Turns out I'd already solved it: plain markdown, and this blog"
description: "I almost switched my AI agent to a fancy memory tool, then realised I'd already designed the right answer years ago - plain local markdown, plus this blog. Why writing is the memory."
tags:
  - claude-code
  - ai-agents
  - memory
  - privacy
  - tooling
categories:
  - ["Software Engineering", "AI"]
keywords:
  - agent memory
  - claude-mem
  - episodic memory
  - plain text
  - second brain
  - writing as memory
image: ""
comments: true
draft: false
---

> i almost switched my claude code memory to a shinier tool. then it hit me: i'd already solved this years ago, and the proof is literally the post youre reading right now.

## how my memory actually works

my agent's long-term memory is boring on purpose: plain markdown files on my disk, plus this blog. i set it up this way ages ago, before claude code shipped any of its built-in memory features.

then claude-mem showed up. it captures everything the agent does, compresses it with AI, and auto-injects it into the next session. felt like an upgrade, so i almost ran it on top.

## the 2 questions that stopped me

**q1: where does the "compression" run?** it says "local database", but the step that turns raw stuff into memories calls a remote model. so every tool call ships my file contents out to be summarised. normal repo, fine. my /Personal folder (credentials, contracts, drafts), not fine. and its opt-out, which is a tripwire.

**q2: rebuildable index, or the only copy?** episodic-memory (what i use) just indexes logs already on my disk, delete it and nothing's lost. claude-mem captures into its own private db, delete it and its gone.

> the thing i noticed: both answers are stuff plain markdown already nails. its local, its mine, i can read it with my own eyes, and nothing leaves unless i choose to write it down.

## so what did i do

stayed put. plain markdown + episodic-memory. claude-mem isnt bad, it just failed both questions for my setup and duplicates what i already have.

but the real takeaway is bigger than the tool.

## writing is the memory

<!-- TODO(human): the real 收获, in your own words. this is the heart of the post - the part i kept missing. rename the heading if you want. -->
