---
title: "Building a Second Brain with Claude Code"
date: 2026-01-22 16:00:00
tags:
  - productivity
  - claude-code
  - knowledge-management
  - automation
categories:
  - ["Software Engineering", "Productivity"]
subtitle: "Turn your coding sessions into a growing knowledge base"
description: "How I built a skill to automatically capture learnings from Claude Code sessions and turn them into blog posts - building a second brain one insight at a time."
comments: true
---

## The Problem

I've been using Claude Code since October last year, and my brain was like *wow* - I'm learning so much every day from different AIs.

I'm someone who's really curious about anything I find interesting. I go deep, search extensively, and end up knowing so many things from just one small task. Throughout my SWE life, I've always been like this - and that's how I learnt so much.

But my old workflow had a problem.

## The Old Way

I used to take notes in Notion, Apple Notes, or markdown files on GitHub. Then during the weekend, I'd sit down for a dedicated session to digest everything - converge the notes into blog posts for my second brain.

**The pros:** Actually sitting down to reflect helps me remember better. Some things even go into long-term memory.

**The cons:** Let's be real - you don't always get time to sit down every week. Especially when your notes pile up to 10, 20, 30...

That's when you hit the "fuck it, I'll do it next time" moment.

And next time never comes.

## The Solution

After seeing how much Claude Code can do in the terminal - linking up all my projects, automating workflows - I thought: why not automate this?

So I built a skill called `capture-knowledge` that:

1. **Extracts** the learning from the current conversation
2. **Structures** it into a blog post format
3. **Drafts** it in my writing style
4. **Publishes** it directly to my Hugo blog

Now when I discover something worth remembering, I just say "blog this" or run `/capture-knowledge`.

## How It Works

| Phase | What Happens |
|-------|--------------|
| Extract | AI analyses conversation, identifies the core insight |
| Structure | Generates title, tags, outline |
| Draft | Writes post matching my existing style |
| Publish | Creates Hugo page bundle at `content/posts/{slug}/` |

The skill reads my recent posts before drafting to match my voice - not generic AI tone.

## Why This Matters

```
Without system: Learn → Forget → Relearn → Forget
With system:    Learn → Capture → Reference → Build
```

No more weekend backlog. No more "next time". The capture happens in the moment, when the learning is fresh!

And the best part? I can visit my blog anytime, anywhere - everything's online and searchable. So convenient!

## TL;DR

Built a Claude Code skill to capture learnings as blog posts instantly. Say "blog this" → get a Hugo post.

This second brain isn't just for me - it's public for anyone (or any AI) that might find it useful. 🚀
