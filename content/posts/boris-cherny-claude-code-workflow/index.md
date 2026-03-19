---
title: "How the Creator of Claude Code Actually Uses It — Boris Cherny's 53 Tips"
date: 2026-03-19T15:00:00+08:00
tags:
  - "AI"
  - "developer-tools"
  - "workflow"
  - "claude-code"
categories:
  - "Engineering"
subtitle: "The creator's own playbook for parallel sessions, plan-first development, and verification loops"
description: "A comprehensive summary of Boris Cherny's Claude Code workflow tips — from running 5+ parallel sessions to PostToolUse hooks, covering all 53 tips the Claude Code creator shared publicly."
keywords:
  - "Boris Cherny"
  - "Claude Code"
  - "AI coding workflow"
  - "developer productivity"
  - "Claude Code tips"
  - "parallel development"
  - "CLAUDE.md"
slug: "boris-cherny-claude-code-workflow"
image: ""
draft: false
---

> i have seen this thread ongoing few months back but didnt have the time to sit down and go thru them, and happened to see one recommendation on my youtube landing page and just happened to be quite curious to know, to improve on my current workflow!

---

## The Three Core Principles

boris's entire philosophy boils down to three things:

1. **parallelism** — turn serial work into parallel work with worktrees + multiple sessions
2. **plan first** — spend energy on the plan so execution is one-shot
3. **verification loops** — let Claude verify its own work; quality 2-3x improvement

everything below is a variation on these three ideas.

---

## 1. Parallel Execution

the single biggest productivity unlock, according to the entire Claude Code team.

- **5 terminal tabs**, each a separate git checkout, numbered 1-5. iTerm2 notifications alert when Claude needs input
> personally, i didnt go to that extreme, i had it around 3 tabs: (1) Second brain, (2) Work Assistance, (3) Work Features

- **5-10 more sessions on claude.ai** in the browser. use `--teleport` to hand off between local and web. you can even kick off sessions from your phone.
> this is something i'll be trying too, but for now, no.

- **git worktrees over checkouts** — the team prefers worktrees. shell aliases (`za`, `zb`, `zc`) for one-keystroke switching.
- **subagents also support worktrees** — for large migrations, each agent gets its own worktree, runs tests, and creates a PR independently.
> this is one of the best things i got from this thread.

## 2. Plan Mode

start every complex task in Plan Mode (`shift+tab` twice).

- iterate on the plan with Claude until you're satisfied
- switch to auto-accept edits mode → Claude typically **one-shots the implementation**
- one team member has a second Claude review the plan as a "Staff Engineer" before execution
- if things go sideways mid-implementation: **re-plan from scratch**, don't patch

## 3. Model Choice

boris exclusively uses **Opus 4.5 with thinking enabled**. (currently 4.6 as im writing this blog)

{{< quote author="Boris Cherny" >}}
It's the best coding model I've ever used. Even though it's bigger and slower than Sonnet, since you have to steer it less and it's better at tool use, it is almost always faster than using a smaller model in the end.
{{< /quote >}}

> honestly, this is just something i have been doing from the start of my coding career as i truly trust that planning process is the key. even tho it costs the most time during my junior year, but see what we got here? what i spent on clarifying requirements and adjusting scopes built me to have a clear mind to think about how to develop a big task.


## 4. CLAUDE.md — Compounding Engineering

the team maintains a single `CLAUDE.md` file checked into git.

- every time Claude makes a mistake → add it to CLAUDE.md so it won't repeat
- tag `@.claude` in PR reviews → GitHub Action automatically updates CLAUDE.md
- **ruthlessly edit** over time to keep it concise
- maintain a notes directory for each task/project, pointed to by CLAUDE.md

## 5. Slash Commands & Skills

store frequently-used workflows in `.claude/commands/`, checked into git.

- boris uses `/commit-push-pr` dozens of times daily
- rule: if you do something more than once per day → **make it a command or skill**
- examples: `/techdebt`, Slack/GDrive sync, analytics-engineer agents
- commands support inline Bash for pre-computing context

> wow, i just found so much similarities in this. thats sth i have been doing too!

## 6. Subagents

custom agents live in `.claude/agents/` as `.md` files.

- `code-simplifier`: reviews code for reuse and quality after Claude finishes
- `verify-app`: end-to-end testing instructions
- add "use subagents" to any prompt → Claude distributes work automatically
- permission requests can be routed to Opus via hooks for auto-approval

> as well as subagents!

## 7. Hooks

deterministic lifecycle hooks — the infrastructure layer.

| Hook | Use Case |
|------|----------|
| **PostToolUse** | auto-format after Write/Edit (`bun run format \|\| true`) |
| **Stop** | run checks before Claude stops |
| **PostCompact** | re-inject critical instructions after context compression |
| **Permission routing** | send approval requests to Slack or Opus |

> this is new to me tho

## 8. Verification — The Most Important Tip

{{< quote author="Boris Cherny" >}}
Give Claude a way to verify its work... 2-3x the quality of the final result.
{{< /quote >}}

- **UI testing**: Claude Chrome extension
- **backend**: run tests, bash validation
- **distributed systems**: point Claude at docker logs
- build domain-specific feedback loops for your codebase

## 9. Permissions & Safety

- use `/permissions` to pre-authorize safe commands — **never** use `--dangerously-skip-permissions`
- wildcard syntax: `"Bash(bun run *)"`, `"Edit(/docs/**)"`
- `/sandbox` for file + network isolation
- check `settings.json` into git so the whole team benefits

## 10. Tool Integrations

configure in `.mcp.json` for autonomous access:

- **Slack MCP**: paste a bug thread → say "fix"
- **BigQuery**: `bq` CLI for on-the-fly metrics

{{< quote author="Boris Cherny" >}}
I haven't written SQL in 6+ months.
{{< /quote >}}

- **Sentry**: log access for debugging

## 11. Prompting Techniques

- **challenge Claude**: "Grill me, don't PR until I pass your test"
- **demand proof**: "Prove this works, diff main vs feature"
- write detailed specs
- never accept the first solution

## 12. Terminal & UX

- **Ghostty** terminal — the team's favorite (synchronized rendering, 24-bit color, proper unicode)
- `/statusline` — show model, cost, context remaining
- `/color` — different color per session for visual separation
- **voice dictation**: macOS `fn×2`, reportedly 3x faster than typing
- `/vim` for vim mode
- custom spinner verbs (someone did Star Trek themed 😂)

> and because of this, i switched to [Ghostty](https://ghostty.org/), wow... i think i will stick with ghostty from now on. GPU, faster, multiple sections in a tab, just wow.

## 13. Power Features

| Command | What It Does |
|---------|-------------|
| `/loop` | recurring tasks up to 3 days — babysit PRs, monitor deploys |
| `/batch` | plan migrations interactively → parallel agents execute, each with own worktree + PR |
| `/simplify` | parallel agents review changed code for reuse, quality, efficiency |
| `/btw` | side-chain question mid-task without interrupting Claude's work |
| `/effort max` | maximum reasoning depth |
| `claude --name` | name your session for identification |

---

## What I'd Actually Adopt

**already doing:**
- plan mode before execution — been my approach since junior dev days
- slash commands & skills — same instinct, automate the inner loop
- subagents for distributed work
- opus as primary model
- ghostty as terminal

**will try:**
- git worktrees for parallel isolation — the biggest takeaway from this thread
- `--teleport` for web ↔ local handoff
- PostToolUse hooks for auto-formatting
- PostCompact hooks to re-inject context after compression

**skipping (for now):**
- 5+ parallel sessions — overkill for my current projects, 3 tabs is enough
- BigQuery/Slack MCP — not relevant to my stack
- custom spinner verbs — fun but not productive

---

## Sources

- [How Boris Uses Claude Code (dedicated site)](https://howborisusesclaudecode.com)
- [Boris's original X thread](https://x.com/bcherny/status/2007179832300581177)
- [Boris's team tips X thread](https://x.com/bcherny/status/2017742741636321619)
- [VentureBeat coverage](https://venturebeat.com/technology/the-creator-of-claude-code-just-revealed-his-workflow-and-developers-are)
- [Pragmatic Engineer interview](https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny)
