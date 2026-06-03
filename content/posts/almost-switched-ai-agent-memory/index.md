---
title: "I Almost Switched My AI Agent's Memory"
slug: "almost-switched-ai-agent-memory"
date: 2026-06-03T23:41:30+08:00
subtitle: "Two tests for vetting any agent-memory tool, before it leaks your secrets"
description: "I nearly added a second memory tool to my AI coding agent, then ran two tests - where the AI compression runs, and whether the store is portable - and decided not to. A reusable checklist for vetting agent-memory tools."
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
  - AI privacy
  - vendor lock-in
  - token cost
image: ""
comments: true
draft: false
---

## TL;DR

I run Claude Code over a workspace full of things I would never paste into a chatbox. I'd been using one memory tool for months, got tempted by a flashier one, and almost installed both. Two questions stopped me. They work for any agent-memory tool, so I'm writing them down.

## The thought that should have warned me

To keep continuity between sessions, my AI agent has a memory layer. It had been running happily on one tool. Then a shinier option showed up, and I caught myself thinking the laziest thought in all of tooling:

> "If one memory tool helps, two will help twice as much."

That is almost never true. Two tools that solve the same problem are not double the benefit. They are one benefit at twice the cost. But the pull was real, so I did the homework instead of trusting the vibe.

## The temptation

The new tool's pitch is genuinely good. It captures everything the agent does during a session, compresses it with AI, and injects the relevant bits back into future sessions, automatically. No manual notes. Context just follows you around. (If that sounds like my [second brain]({{< ref "second-brain-claude-code" >}}) obsession, yes, exactly, that's why I bit.)

For a long-running project, that's lovely. So I nearly stacked it on top of what I already had. Then I asked two boring questions.

## Test 1: Where does the inference hop go?

The tool advertises a local database. Reassuring, until you read how it works.

Storage is local. But the compression step, the part that turns raw observations into tidy memories, calls a remote model. So every tool call my agent makes would ship its raw output somewhere else to be summarised.

> "Local database" tells you where the data sleeps, not where it travels.

For an ordinary codebase, fair trade. For a workspace holding credentials, contracts, and private drafts, that's a leak with extra steps. And the privacy control on offer was opt-out: wrap sensitive content in a tag and it gets skipped. Opt-out is a tripwire. Forget once and the secret is already gone. For sensitive data the only safe default is opt-in: nothing leaves unless I say so.

**First test, then:** does sensitive content leave the machine by default? If yes, the tool is disqualified for anything sensitive, no matter how nice the feature list.

## Test 2: Is the memory a derived index, or the only copy?

This one decides how trapped you get later.

My existing tool (episodic-memory) builds a searchable index over conversation transcripts that already sit on my disk. The transcripts are the source of truth. The index is derived. Delete the tool and the transcripts stay, the index can be rebuilt. It can even look backwards, because the history predates it.

The new tool (claude-mem) is the mirror image. It manufactures its own memory by capturing live into its own private store. That store is the only copy of those compressed memories, and nothing else can read it. Uninstall it and the data is orphaned or gone. Worse, it's blind to everything that happened before you installed it.

> An index over an independent source is portable. A private store you can only fill going forward is a cage you build for yourself.

**Second test:** if I delete this tomorrow, do I lose anything that exists nowhere else? If yes, that's lock-in, and lock-in needs a very good reason to justify it.

## The cost I almost forgot

There's a quieter tax, in two parts.

The **write path** runs that remote compression on your tool activity, constantly, in the background. You never see it in your conversation, which is exactly why it's easy to ignore. Invisible cost is unmanaged cost.

The **read path** injects remembered context into every new session. Anything in the context window is re-read on every turn, so a few thousand tokens of memory isn't paid once, it's paid per turn, times the length of your session.

Continuous cost, for a benefit (recall) that fires only now and then. That shape rarely nets positive unless you genuinely return to the same big project every single day.

## The call

I stayed put.

Not because claude-mem is bad. It's well made and moving fast. I stayed because it failed both tests for my context: sensitive content would leave by default, and its memory would be a private cage. The fact that it duplicated what episodic-memory already gave me sealed it.

If I had a long-lived project with no secrets, the verdict would flip, and I'd scope the tool to exactly that one repo. Context decides.

## The takeaway

Tools come and go. The questions outlast them. Before wiring any memory tool into an agent, run two tests:

1. **Where does the inference hop go?** If raw content leaves the machine by default, it's unsafe for anything sensitive. Demand opt-in, not opt-out.
2. **Derived index, or only copy?** An index over an independent source is portable and rebuildable. A private capture store is lock-in.

Most tooling decisions aren't really about the tool. They're about whether you can name what you're trading, before you click install.
