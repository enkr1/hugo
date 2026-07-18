---
title: "How to Take Smart Notes by Sönke Ahrens"
slug: "book-how-to-take-smart-notes"
date: 2026-01-30 03:28:29
tags:
  - "ebook"
  - "knowledge-management"
  - "zettelkasten"
  - "productivity"
categories:
  - ["Reading"]
  - ["Notebooks"]
subtitle: "The Zettelkasten method that changed how I learn"
description: "How I stopped forgetting everything I learnt. A practical guide to the Zettelkasten method - the slip-box system that turns scattered notes into a networked second brain. Includes my daily workflow, setup, and real examples from my NUS BIT studies."
keywords:
  - "How to Take Smart Notes"
  - "Zettelkasten method"
  - "Sönke Ahrens"
  - "smart notes"
  - "note-taking system"
  - "knowledge management"
---



## The Gift That Changed How I Think

thanks to Lionel for sharing this ebook with me. if you've read [my bash notebook]({{< ref "pl-bash" >}}) or my [Google SRE interview story]({{< ref "interview-google-sre-poland" >}}), you'd know Lionel was one of my mentors at Pixium Digital, where i started my career as an intern. he's been gifting me books since day one - always pushing me to learn, grow, and think differently.

<!-- more -->

last year, Sept 18, we had a solid catchup. talked about work, school, life - the usual. i shared how i do my "project management" (aka organised chaos in Notion), and he introduced me to this methodology + his Bear → Notion workflow. then he sent me this ebook: *How to Take Smart Notes* by Sönke Ahrens.

i'm someone who **loves** learning. i go deep on anything that sparks my curiosity. but here's the problem: i was learning a ton... and forgetting most of it. highlighting, scribbling notes, telling myself "i'll organise this later" - classic trap.

this book changed that. completely.



---



## TL;DR

**Core concept:** Writing IS thinking, not the outcome of thinking.

**The method:** Zettelkasten (slip-box system) developed by German sociologist Niklas Luhmann.

**The workflow:** 3 note types → 6-step process → networked knowledge base.

**The result:** Notes that compound. Ideas that connect. Writing that flows naturally.



---



## The Problem: Why Traditional Note-Taking Fails

let's be honest. most of us take notes like this:

1. **Highlight everything** (because it all seems important in the moment)
2. **Never revisit** (out of sight, out of mind)
3. **No connections** (each note lives in isolation)
4. **"I'll organise later"** (narrator: they never organised it)

i've been there. thousands of highlights across Notion, Apple Notes, markdown files on GitHub. some of it brilliant. most of it forgotten.

the traditional approach treats notes as **storage** - a place to dump information and hope you remember where you put it.

the Zettelkasten method treats notes as **thinking** - a place to develop ideas and let them grow.



---



## The Zettelkasten Method

### What Is It?

Zettelkasten = German for "slip-box"

developed by Niklas Luhmann (1927-1998), a German sociologist who published **58 books** and **hundreds of articles** using this system. his secret? a physical box of index cards, each containing one idea, all linked together like a web.

Sönke Ahrens systematised Luhmann's method in 2017, making it practical for modern knowledge workers.

**The key insight:** a note is only as valuable as its **context** - its network of associations, relationships, and connections to other information.



### The 3 Note Types

| Type | Lifespan | Purpose | Example |
|------|----------|---------|---------|
| **Fleeting Notes** | 1-2 days | Quick capture during reading/thinking | "Check out Zettelkasten method", "Why does for...else confuse me?" |
| **Literature Notes** | Permanent | Concise source summary in own words | Session notes from TCX1002 Tutorial 3 with context |
| **Permanent Notes** | Forever | Atomic insights - one clear idea per note | `for-else-pattern.md`, `k-length-optimization.md` |

**Critical rule:** fleeting notes MUST be processed within 1-2 days. after that, you lose the context and they become useless.



---



## The 6-Step Workflow

here's how it works in practice:

### 1. Read / Observe
During class, work, conversations, books - consume information actively, not passively.

**My example:** TCX1002 Tutorial 3 - working through Python pattern matching problems.

### 2. Create Fleeting Notes
Quick dump of thoughts as they happen. raw, unpolished, just capture.

**My example:** `_fleeting/2026-01-29.md` - "for...else keeps tripping me up", "dict overwrites duplicate keys - gotcha!"

### 3. Create Literature Notes
Within 1-2 days, review fleeting notes and sources. write extremely concise summaries **in your own words**.

**My example:** Session notes in `000_mods/sessions/2026-01-29/session-notes.md` - full context of the tutorial session.

### 4. Transform into Permanent Notes
The magic step. review your fleeting and literature notes. ask: **"What's worth keeping forever?"**

extract atomic insights:
- **One concept per note**
- **Full sentences** (write for others, not just yourself)
- **Self-contained** (should make sense without original source)
- **Link to related notes** during creation (not after!)

**My example:** Created 3 permanent notes:
- `for-else-pattern.md` - How Python's for...else works
- `k-length-optimization.md` - Pattern matching optimization technique
- `dict-overwrites-duplicate-keys.md` - Python dict overwrite behavior

### 5. Store in Zettelkasten (Networked System)
File the permanent note in your system. link it to related notes. let it connect naturally.

**My setup:**
- `000_mods/notes/` - all permanent notes
- Cross-linked with `[[note-name]]` syntax
- Organised by context, not topic

### 6. Use for Writing / Output
When you need to write something (blog post, essay, report), you **don't start from scratch**. you already have notes!

**My workflow:** When 3+ permanent notes cluster around a theme → blog post emerges naturally.

**This blog post?** Direct result of the Smart Notes system i built using this method.

so guess what, i'm not gonna wait — here's my action in writing up my [NUS notebook series]({{< ref "notebook-nusbit" >}})! school stuff in action.



---



## The 10 Principles (Deep Dive)

these principles (via [Forte Labs](https://fortelabs.com/blog/how-to-take-smart-notes/)) are the **why** behind the **how**:

### 1. Writing is not the outcome of thinking; it is the medium in which thinking takes place

you don't think first, then write. you **think by writing**. writing forces clarity. if you can't write it clearly, you don't understand it yet.

**how i apply it:** i process fleeting notes by writing them as permanent notes. the act of writing reveals gaps in my understanding.

### 2. Do your work as if writing is the only thing that matters

consume information with the goal of potential publication in mind. doesn't mean you'll publish everything - but the mindset changes how you engage.

**how i apply it:** when i read/learn something, i ask: "could i explain this to someone else?" if yes → permanent note.

### 3. Nobody ever starts from scratch

all creative work builds on existing knowledge. the myth of the "blank page" is just that - a myth.

**how i apply it:** my blog posts now emerge from note clusters. no more staring at empty documents.

### 4. Our tools and techniques are only as valuable as the workflow

fancy tools mean nothing without a system. obsidian, notion, roam - doesn't matter if you don't have a workflow.

**how i apply it:** i use simple markdown files + git. the workflow (3 note types → daily processing) matters more than the tool.

### 5. Standardization enables creativity

using a consistent format for notes **frees** your mind to think flexibly. you're not deciding "how should i format this?" - you're just writing.

**how i apply it:** all permanent notes follow the same structure: concept → explanation → example → related notes → source.

### 6. Our work only gets better when exposed to high-quality feedback

notes in isolation don't improve. sharing, discussing, testing ideas - that's where growth happens.

**how i apply it:** publishing blog posts from notes = public feedback. teaching others = ultimate test of understanding.

### 7. Work on multiple, simultaneous projects

having diverse interests increases the chances of unexpected insights. connections emerge between unrelated fields.

**how i apply it:** i'm juggling TCX1002 (programming), TCX2101 (calculus), TCX1004 (math logic). the cross-pollination is **wild**.

### 8. Organise your notes by context, not by topic

don't file notes by subject. file them by **where and how they might be useful in the future**.

**how i apply it:** instead of folders like "Python" or "Math", i link notes by **what they help me do**. `for-else-pattern.md` links to `break-vs-reset.md` because they're related traps in control flow.

### 9. Always follow the most interesting path

let curiosity guide you. rigid plans kill motivation. follow what excites you, and the work becomes effortless.

**how i apply it:** if a concept sparks curiosity during processing → i go deeper. that's how `k-length-optimization.md` was born - wasn't in the tutorial, but i optimized the solution anyway.

### 10. Save contradictory ideas

don't just collect information that confirms what you already believe. preserve conflicting perspectives.

**how i apply it:** when i find different approaches to the same problem, i save both. develops nuanced thinking.



---



## How I Implemented This

### Before vs After

| Before | After (Smart Notes) |
|--------|---------------------|
| Session notes → forgotten | Session notes → Atomic notes → Blog posts |
| Thousands of disorganised highlights | Networked thinking system |
| "I'll organise later" (never did) | 10-15 min daily processing ritual |
| Notes in silos | Notes that connect and compound |
| Writing from scratch | Writing from existing notes |

### My Current Setup

**The Four Layers:**

| Layer | What | Lifespan | Where |
|-------|------|----------|-------|
| **Fleeting** | Quick captures during work/class | 1-2 days (**delete** after processing) | `000_mods/_fleeting/YYYY-MM-DD.md` |
| **Literature** | Session logs with refs | Permanent | `000_mods/sessions/YYYY-MM-DD/` |
| **Permanent** | Atomic concept notes | Forever | `000_mods/notes/` |
| **Published** | Polished synthesis | Forever | Blog, docs |

**Daily Habit (10-15 min):**

every evening:
1. Open today's `_fleeting/` notes + recent session notes
2. Ask: **"What's worth keeping forever?"**
3. Create 1-3 permanent notes:
   - One concept per note
   - Full sentences (write for others)
   - Search existing notes → link related ones
   - Add source (module, date)
4. **Delete fleeting notes**

**Why delete fleeting notes?** forces you to process them. if you keep them "just in case", you'll never actually transform them into permanent notes.

### The Result

**Before this system:**
- learned a ton → remembered fragments
- ideas stayed isolated
- writing felt like pulling teeth

**After this system:**
- learned a ton → captured insights
- ideas connect naturally
- writing flows from existing notes

this blog post? **not written from scratch.** assembled from permanent notes + fleeting thoughts + the research i did earlier. that's the power of the system.



---



## Key Takeaways

**1. Writing forces clarity**
if you can't write it clearly, you don't understand it. writing IS thinking.

**2. Atomic notes > long documents**
one idea per note. easier to link, easier to reuse, easier to understand.

**3. Link during creation, not after**
when you create a permanent note, immediately link it to related notes. waiting = forgetting.

**4. Let blog posts emerge naturally**
when 3+ notes cluster around a theme, a blog post wants to be written. don't force it.

**5. Daily processing ritual prevents backlog**
10-15 min every evening. process fleeting notes before they lose context.

**6. Delete fleeting notes**
sounds scary. but it forces you to actually process them. if it's important, it becomes a permanent note.

**7. Organise by context, not topic**
ask: "when will i need this?" not "what category does this fit?"

**8. Start simple**
you don't need fancy tools. markdown files + links = enough.



---



## Common Pitfalls (and How to Avoid Them)

| Pitfall | Why It Happens | How to Avoid |
|---------|----------------|--------------|
| **Not processing fleeting notes within 1-2 days** | Busy schedule, "i'll do it later" | Set a daily 10-15 min ritual. non-negotiable. |
| **Copying verbatim instead of using own words** | Easier, faster | Force yourself to explain it. if you can't, you don't understand it. |
| **Failing to link notes** | Forget to do it during creation | Make linking part of the creation process. not optional. |
| **Mixing project drafts with permanent knowledge** | Convenience | Keep them separate. permanent notes = timeless. project notes = temporary. |
| **Collecting without processing** | Feels productive | Collection ≠ learning. processing = learning. |
| **Over-organising** | Perfectionism | Simple folders. let links do the organising. |



---



## Why This Matters

```
Without system: Learn → Forget → Relearn → Forget
With system:    Learn → Capture → Connect → Build
```

this isn't just about note-taking. it's about **thinking better**.

the Zettelkasten method:
- forces you to **understand** (writing in own words)
- helps you **connect** (linking related ideas)
- enables you to **create** (assembling existing notes)

your notes become a **second brain** - a networked thinking partner that grows smarter over time.

**and the best part?** it compounds. every note you add makes the system more valuable. the connections multiply. the insights emerge.



---



## Credits & Thanks

**Sönke Ahrens** - for systematising Niklas Luhmann's method and making it accessible. this book is a masterclass in knowledge work.

**Lionel** - for sharing this ebook with me, for believing in me since my intern days, and for always pushing me to learn and grow. thank you for sharing your Bear → Notion workflow during our Sept 18 catchup. this book changed how i think.

**Niklas Luhmann** - for developing the Zettelkasten method and proving it works (58 books!).

**You** - for reading this far. if you're a student, knowledge worker, or anyone who learns for a living, i highly recommend this book. it's not about taking more notes. it's about thinking better.



---



## WIP: Future Explorations

things i want to dive deeper into (future blog posts?):

- **Tools comparison:** Obsidian vs Roam vs Notion vs plain markdown
- **Advanced linking strategies:** how to create "hub notes" that connect themes
- **Research-heavy topics:** how to handle academic papers with this system
- **Visual thinking:** diagrams, mind maps, concept maps in Zettelkasten
- **Team knowledge bases:** can this work for teams, or is it inherently personal?

if any of these interest you, let me know! might write about them next.



---



> all concepts excerpted from *How to Take Smart Notes: One Simple Technique to Boost Writing, Learning and Thinking* by Sönke Ahrens (2017).
> this material may be protected by copyright.
