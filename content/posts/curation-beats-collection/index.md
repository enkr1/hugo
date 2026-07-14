---
title: "Curation Beats Collection: What 230 Free AI Agents Added to My Setup"
slug: "curation-beats-collection"
date: 2026-07-14T15:09:12+08:00
subtitle: "A research note on why a curated toolkit rejects new tools, and how selection pressure, not quality, decides what earns a slot"
description: "A research note on curation versus collection: why a mature, well-tended toolkit rejects free additions, how selection pressure (not quality) sets the bar, and a worked case cloning a 230-agent library that added almost nothing."
tags:
  - curation
  - yagni
  - decision-making
  - tooling
  - claude-code
  - research
categories:
  - ["Software Engineering", "Notes"]
keywords:
  - curation over collection
  - yagni
  - tool selection
  - marginal utility of tools
  - claude code agents
  - selection pressure
  - build versus buy
image: ""
comments: true
draft: false
---

> a friend pointed me at a repo of 230-plus ready-made AI coding agents, all free, MIT licensed, one script to install the lot. my instinct was the collector's instinct: surely i am missing something in there. so i cloned it and audited every likely-useful file against the small set of agents and skills i already run. the answer was almost nothing stuck. this note is me working out *why* nothing stuck, because the why turned out to be more useful than any of the agents. i had my AI help me clone, diff, and pressure-test the reasoning. the personal note at the bottom is mine to write after.

## the setup

there is a certain kind of free thing that feels irresponsible to walk past. a library of 230 specialist AI agents, each a tidy markdown file with a personality and a checklist, packaged to drop straight into the tools i already use. the pitch is breadth: a whole virtual agency, on tap, at no cost.

against that i had maybe six agents and a couple of dozen skills, each one added the slow way, when a real task hurt enough to justify it. the honest question was not "is the library good?" it mostly is. the question was "does any of it beat what i already trust?" i expected to find a handful of upgrades. i found close to zero. that gap, between what i expected and what i got, is the whole note.

## quality is not the bar. beating the incumbent is

here is the thing the collector's instinct gets wrong. it scores a new tool on an absolute scale: is this good, yes or no. but a tool never enters an empty slot. it enters a slot that already holds something, even if that something is "i do this by hand". so the real test is not absolute, it is *relative*: does the newcomer beat the incumbent by enough to pay for the switch?

and the switch is never free. a new agent is more surface area to remember, one more name in the picker, one more thing whose defaults might quietly contradict a rule i rely on. call that the **switching cost**. a tool earns its slot only when

$$ \text{value}(\text{new}) - \text{value}(\text{incumbent}) > \text{switching cost} $$

for a fresh setup the incumbent is nothing and the bar is on the floor, so everything clears it. that is exactly why, when you start out, every tool feels like a win and you hoard them all. i did. but each thing you keep raises the bar for the next thing, because now the newcomer has to beat a *real* incumbent, not empty space. a mature setup is just a setup where that bar has climbed high enough that most new things, however good in the abstract, no longer clear it.

## the mature setup rejects things, and that is the feature

so when i diffed the 230-agent library against my six, the result was not "the library is bad". it was "my incumbents already win these matchups, because they were selected". their code reviewer is perfectly decent; mine has survived dozens of my own PRs and knows my house rules. their reality-checker demands evidence before calling something done; i already have a skill that does exactly that, wired into how i actually work. matchup after matchup, the incumbent took it, not on quality in the abstract but on fit i had already paid for.

this is **selection pressure**, and it compounds. every tool that survives real use makes the set harder to improve on, the same way a well-adapted population is hard for a random mutant to invade. the rejection is not stubbornness. it is the system reporting that its slots are already filled by things that earned them. a setup that accepts every free addition is not open-minded, it is just young, or untended.

the collector reads rejection as "i might be missing out". the curator reads the same rejection as "my selection is holding". same signal, opposite conclusion. the tell of a mature toolkit is not how much it contains, it is how much bounces off.

## the one thing it is good for

none of this makes the library worthless. it makes it the wrong *shape* to consume whole. its value is not as a dependency, it is as a **reference shelf**. the day a genuinely new need shows up, some domain i have never touched, i can walk the shelf, read the one file that frames the problem well, steal the two sentences worth stealing, and leave the other 229 on the rack. that is exactly how this audit ended: total yield was a couple of lines about minimal-diff discipline, worth grafting into a skill i already have. reference, not install.

which is the same move as [build versus buy]({{< ref "build-vs-buy" >}}), one level up. i evaluated buying an entire agency off the shelf, and the honest crossover said buy almost none of it, because the running cost of carrying 230 agents i will never call is a real tax on the setup, paid in attention every time i open the picker. and it rhymes with [marginal cost]({{< ref "marginal-cost-and-sunk-cost" >}}): the 40th agent, like the 40th anything, is worth far less than the first, because the first few already cover the cases that actually recur.

## why this is not about agents

the shape shows up anywhere free things pile up faster than you can vet them. bookmarks and read-it-later queues. the plugins and extensions that accrete until the editor boots slow. the newsletter subscriptions, the saved recipes, the courses bought in a bundle and never opened. in every case the collector optimises for *coverage*, the comfort of having it, and the curator optimises for *what survives contact with real use*.

the discipline is small and unglamorous: when something free and good crosses your path, do not ask "is this good enough to keep?" almost everything is. ask "does this beat the thing it would replace, by enough to pay for the switch?" most of the time the honest answer is no, and the right move is to take the one idea worth taking and walk on. subtract before you add. the setup that serves you is not the one with the most in it. it is the one where everything still in it earned its place, and you can still remember why.

## a personal note

wip ...

## sources and further reading

- the repo that started it: [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents), a genuinely useful MIT-licensed reference shelf, just not one to install whole.
- my [build versus buy note]({{< ref "build-vs-buy" >}}): the crossover that says carrying tools you will not use is a running cost, not a free win.
- my [marginal cost and sunk cost note]({{< ref "marginal-cost-and-sunk-cost" >}}): why the 40th tool is worth so much less than the first.
- the principle behind all of it is YAGNI (you aren't gonna need it), from extreme programming: do not build, or keep, for a need you do not yet have.
