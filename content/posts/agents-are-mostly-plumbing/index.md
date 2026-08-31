---
title: "Agents Are Mostly Plumbing: Reading DeepSeek's Open-Source Harness"
slug: "agents-are-mostly-plumbing"
date: 2026-08-18T12:43:08+08:00
subtitle: "A research note on what a lab actually ships when it open-sources an agent harness, and the four ways an engineer can use one"
description: "A research note on DeepSeek Harness: 272k lines of TypeScript in which the model adapter is 3 per cent of the code, what 'everything is a plugin' buys and costs, and four concrete ways a software engineer can use an open-source agent harness."
tags:
  - ai-agents
  - agent-harness
  - open-source
  - architecture
  - tooling
  - research
categories:
  - ["Software Engineering", "AI"]
keywords:
  - deepseek harness
  - agent harness architecture
  - agent framework
  - plugin architecture
  - cordis
  - agent sdk
  - open source ai agent
image: ""
comments: true
draft: false
---

> someone dropped the deepseek-harness link in front of me with the only question that matters about a new repo: does this help my work. i went in expecting another coding-agent clone, cloned it, counted it, and came out with a different question entirely, because the interesting part turned out not to be the agent. i had my AI do the cloning, the line counting and the pressure-testing of my reading. the personal note at the bottom is mine to write after.

## tl;dr

deepseek open-sourced its agent harness (`dsh`) on 13 august 2026. MIT, typescript, 226 packages, about 272,000 lines of product code once you drop the tests. the model-facing adapter layer is **3.3 per cent** of that. everything else is session logs, tool pipelines, sandboxing, approval policy, context compaction, an lsp client and a web ui. the useful moves for an engineer are to **read it** and possibly to **embed it**. the ones that look tempting and are not: switching your daily driver to preview software, or joining the plugin gold rush five days late.

## the question

the honest question about any new tool is never "is this good". almost everything is good. the question is whether it beats the thing it would replace by enough to pay for the switch, which is the whole argument in [curation beats collection]({{< ref "curation-beats-collection" >}}). i went in ready to run that test, decide no, and move on.

then i counted the lines, and the switching question stopped being the interesting one.

## most of an agent is not the agent

here is where 272,000 lines of an actual, shipped, frontier-lab agent harness go.

<figure style="margin:1.6rem 0">
<svg viewBox="0 0 620 300" role="img" aria-label="Where the lines of code go in an open-source agent harness" style="width:100%;max-width:620px;height:auto;font-family:inherit;display:block;margin:0 auto">
<text x="310" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">Where the code actually goes in an agent harness</text>
<text x="310" y="36" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.6">DeepSeek Harness, lines of TypeScript excluding tests</text>
<text x="222" y="60" text-anchor="end" font-size="11.5" fill="currentColor" fill-opacity="0.8">web UI (browser client)</text>
<rect x="232" y="44" width="274.0" height="24" fill="#3b82f6" fill-opacity="0.8" rx="2"/>
<text x="514.0" y="60" font-size="11.5" fill="currentColor" fill-opacity="0.85">113,470 (42%)</text>
<text x="222" y="98" text-anchor="end" font-size="11.5" fill="currentColor" fill-opacity="0.8">platform, host, type graph</text>
<rect x="232" y="82" width="125.1" height="24" fill="#3b82f6" fill-opacity="0.8" rx="2"/>
<text x="365.1" y="98" font-size="11.5" fill="currentColor" fill-opacity="0.85">51,796 (19%)</text>
<text x="222" y="136" text-anchor="end" font-size="11.5" fill="currentColor" fill-opacity="0.8">agent loop, subagents, skills, hooks</text>
<rect x="232" y="120" width="107.3" height="24" fill="#3b82f6" fill-opacity="0.8" rx="2"/>
<text x="347.3" y="136" font-size="11.5" fill="currentColor" fill-opacity="0.85">44,435 (16%)</text>
<text x="222" y="174" text-anchor="end" font-size="11.5" fill="currentColor" fill-opacity="0.8">tools: fs, shell, sandbox, lsp, mcp</text>
<rect x="232" y="158" width="69.4" height="24" fill="#3b82f6" fill-opacity="0.8" rx="2"/>
<text x="309.4" y="174" font-size="11.5" fill="currentColor" fill-opacity="0.85">28,724 (11%)</text>
<text x="222" y="212" text-anchor="end" font-size="11.5" fill="currentColor" fill-opacity="0.8">session log, history, compaction</text>
<rect x="232" y="196" width="58.2" height="24" fill="#3b82f6" fill-opacity="0.8" rx="2"/>
<text x="298.2" y="212" font-size="11.5" fill="currentColor" fill-opacity="0.85">24,119 (9%)</text>
<text x="222" y="250" text-anchor="end" font-size="11.5" fill="currentColor" fill-opacity="0.95">model adapters (the LLM bit)</text>
<rect x="232" y="234" width="21.8" height="24" fill="#f97316" fill-opacity="0.95" rx="2"/>
<text x="261.8" y="250" font-size="11.5" fill="currentColor" fill-opacity="0.85">9,017 (3%)</text>
<line x1="232" y1="38" x2="232" y2="264" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<text x="310" y="292" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.85">total: 271,561 lines across 226 packages</text>
</svg>
<figcaption style="text-align:center;font-size:0.85rem;opacity:0.7;margin-top:0.5rem">Lines of TypeScript by concern, tests excluded. The browser client dominates because a harness needs somewhere to be used from. The model adapter, the only part that is arguably about AI, is the smallest bar on the chart.</figcaption>
</figure>

look at the bottom bar. the part that talks to a language model, the adapters, the streaming vocabulary, the retry logic, all of it, is 9,017 lines. three per cent.

and notice what has no bar at all: there is no prompt-engineering bucket, because there is barely any prompt engineering. the system prompt gets one package that assembles sections and tool schemas. that is it. the thing people imagine an AI product *is*, the clever prompt, does not show up as a rounding error.

what does show up is the stuff nobody demos. an append-only session event log so a conversation survives a reload. a query layer over that log, with a sqlite backend. compaction, for when the history outgrows the window, including a model-free pruner that throws away stale tool results without paying for a summarisation call. a scoped tool registry with a guarded execution pipeline. a sandbox with landlock on linux. an approval policy with permission presets. filesystem, shell, subprocess, terminal, lsp and mcp adapters. a job scheduler. attachment storage. credential storage that is write-only from the ui.

that list is the actual product. the model is a dependency it calls.

this is the reframe i did not expect: **building something agentic is mostly a systems-engineering job, not an AI job.** if you have been putting off agent work because you do not have ML background, the line count says the ML background was never the blocker. the blocker is that you have to build a durable event log, a permissions model and a sandbox, and those are boring, and boring is expensive.

## no privileged core, and what that buys

the architectural bet has a slogan, "everything is a plugin", and one line in the architecture doc that actually explains it:

> There is no privileged core to patch.

the framework underneath is [cordis](https://github.com/cordiverse/cordis), where plugins contribute services, typed events and reversible effects to a shared context. so the model adapter is a plugin. the tool registry is a plugin. the session log is a plugin. the agent loop itself is a plugin. a running instance is a plugin tree composed at boot from ordered layers: bundles stack in order, then a profile patch, then a home-level patch, then a command-line overlay. any row the tree prints can be replaced by a patch of your own.

what that buys is real. you want a different persistence backend, you swap the row. you want your own model adapter for a company gateway, there is a documented seam and a guide for writing one. you want to intercept every tool call, that is an extension point rather than a fork. the reversibility matters too: registrations unwind when their plugin unloads, so hot-swapping is a design property rather than a hack.

what it costs is also real, and the repo does not hide it. everything being a seam means nothing is a shortcut. there are 226 packages, and to change behaviour you first have to find which of the 226 owns the thing you want, then learn cordis, then learn the patch layering. the docs are excellent and there are a lot of them, which is itself the tell: this is a framework with a learning curve, not a library you drop in.

the [build versus buy]({{< ref "build-vs-buy" >}}) crossover applies exactly. the fixed cost here is learning the composition model. it pays back only if you are going to keep composing.

## four ways an engineer can actually use it

ranked by how certain the payoff is, which is not the order people reach for them.

**1. read it as a reference architecture.** highest certainty, lowest cost, and almost nobody does it. if you are building anything agentic, someone has now published a working answer to every question you are about to hit, under a licence that lets you copy the shape. how do you replay a session deterministically for tests (`llm-replay`). how do you prune context without a summarisation call (the tool-result pruner). how do you scope a tool registry so a subagent cannot see the parent's tools. how do you gate an action behind human approval without the loop knowing about approval. the `docs/subsystems/` folder is one file per problem.

**2. embed it as a runtime.** the part most people miss, because the repo is presented as a coding agent. there is a `headless` profile that mounts no server and no ui at all: one task in, one answer out, exit code for whether it finished. there is a typescript sdk and a python sdk that drive a harness runtime from another process. there is an [agent client protocol](https://agentclientprotocol.com/) server for talking to it programmatically. so if you are building a product that needs an agent inside it, the choice is not "write my own loop" versus "call the api in a while loop". you can take the whole harness, session log and tool pipeline and sandbox and approval gate included, and drive it from your own service. that is a year of plumbing you do not write.

**3. extend it instead of forking it.** if it does 90 per cent of what you need, the seam model means the last 10 per cent is a plugin, and your plugin survives upstream changes in a way a fork does not.

**4. run it as your coding agent.** the least interesting use, and the one every take is about. worth knowing: it is genuinely model-agnostic in practice, not just in architecture. deepseek gets a first-class card in settings, but there is a catalog provider path for anthropic, openai, bedrock, vertex, azure, and a custom-provider form for a company gateway or a self-hosted endpoint. and there are compatibility bridges that read your existing claude code hooks and codex hooks, though the readme is refreshingly blunt that the bridge is a migration path and a native plugin would be strictly better.

## they shipped the decision record too

the thing i did not expect to find, and the thing i would point a junior engineer at first.

`.agents/notes/` contains 693 design notes, sorted by lifecycle: 515 implemented, 142 archived, 25 proposed, and **11 rejected**. they published the proposals they turned down, and the stated rule for keeping a rejected one is that it should stay only while its rationale still prevents a tempting mistake. there are five numbered postmortems in `docs/`. there is a set of their own internal agent skills, including one called `dsh-trim-cot-leakage`, which is a skill for stripping chain-of-thought leakage out of the codebase, which tells you exactly how this thing was built and what it took to clean up after.

most open-source repos give you the code and lose the argument. this one shipped the argument. for anyone learning how large systems actually get decided, that folder is worth more than the 272,000 lines it explains, and it rhymes with the reason i keep writing these notes at all: the reasoning is the durable part, the artefact is downstream of it.

## where people get this wrong

**"get in early on the plugin ecosystem."** it is not early. five days after launch there were 6,862 repos carrying the `dsh-plugin` topic. more to the point, the obvious categories are already saturated and already worthless: i counted at least nine separate plugins whose pitch is "bring your claude code config into dsh", and they were sitting at eight stars, six, five, two, one, one. everybody had the same idea in the same week and the market paid none of them. if you are going to build something here, the crowded shelf is the one you can see from the readme.

**"contribute to it."** you cannot, at least not upstream. the contributing guide says plainly that they cannot accept external pull requests at the moment. twenty-four contributors, three pull requests, all internal. the sanctioned path is building in the ecosystem, which is the crowded shelf above.

**"153,000 stars means it is good."** star velocity measures attention, and a big well-documented repo appearing suddenly from a well-known lab generates a lot of it. nobody has run this in production yet. the repo is five days old on the day i am writing this and it has 226 packages, which means it was developed privately for a long time and dropped, so the code is mature and the *operational* evidence is zero. those are different things.

**"i should switch to it."** the repo tells you not to, if you read it. it calls itself a developer preview and warns of compatibility-breaking changes. the session format version is pinned at 0 with no compatibility promise. the agents file has a section, marked for deletion at the first tagged release, instructing contributors to prefer the correct foundation over compatibility shims because there are no external consumers yet. that is an honest statement that your data is not safe here. i had the same instinct once before and talked myself out of it for a similar reason, in [the note about almost switching my agent's memory]({{< ref "almost-switched-ai-agent-memory" >}}).

## the verdict

read it, maybe embed it, do not marry it.

as a daily driver it fails the switch test, and it says so itself. as a plugin business it is a crowded shelf you would be arriving at late. as a reference architecture it is the most complete public answer to "what is actually in an agent harness" that i know of, and it costs an afternoon. as an embeddable runtime it is a genuine option worth a spike if you are building a product with an agent inside it, on the understanding that you are pinning a version and expecting to eat migrations.

and the finding underneath all of it, the one that survives even if this particular repo is abandoned in six months: the model is three per cent. if you are an engineer looking at agent work and assuming the hard part is the AI, the code says the hard part is the systems engineering you already know how to do.

## a personal note

wip ...

## sources and further reading

- the repo: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness), MIT licensed. start at `docs/architecture.md`, then `docs/subsystems/`.
- [cordis](https://github.com/cordiverse/cordis), the plugin framework underneath, and the [paper](https://github.com/cordiverse/paper) describing its composability model.
- all counts in this note were taken from a shallow clone on 18 august 2026, excluding `*.spec.ts` and `*.test.ts`. star and topic counts came from the github api the same day.
- my [curation beats collection note]({{< ref "curation-beats-collection" >}}): why a new tool has to beat the incumbent, not just be good.
- my [build versus buy note]({{< ref "build-vs-buy" >}}): the crossover that decides whether learning a framework pays back.
- my [summary of boris cherny's claude code tips]({{< ref "boris-cherny-claude-code-workflow" >}}): the other side of this, how to use a harness rather than how one is built.
