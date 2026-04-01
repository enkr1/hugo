---
title: "Bye Lark, Hello macshot"
date: 2026-03-31 15:00:00
tags:
  - macos
  - productivity
  - tools
  - open-source
categories:
  - ["Software Engineering", "Productivity"]
subtitle: "How an open-source screenshot tool finally let me ditch Lark"
description: "I kept Lark installed solely for its screenshot tool. macshot replaced it entirely - with better features, zero bloat, and 8MB of RAM."
comments: true
---

## TL;DR

I kept Lark alive on my Mac just for `Cmd+Shift+A` screenshots. [macshot](https://github.com/sw33tLie/macshot) does everything Lark's screenshot did - and more - at a fraction of the resource cost.

## The Problem

Let me be real - Lark is the best all-in-one workspace software I've ever used. After leaving ByteDance, nothing in the market has come close. Chat, docs, calendar, video calls, project management - everything just works together seamlessly. I haven't found anything that beats it, and maybe I just haven't looked hard enough, but that's how good it is.

So even after I stopped needing it for work, I kept it installed. The reason? **The screenshot tool.**

`Cmd+Shift+A` → select region → annotate with arrows, nice text, blur → copy. Clean UI, smooth flow. And OCR - select any text on screen, extract it instantly. That combo was so good it single-handedly justified keeping the entire app alive.

But here's the thing about all-in-one apps - they're all-in-one on your RAM too.

Lark was quietly eating hundreds of megabytes just sitting in the background. Multiple processes, always running, always consuming. For a screenshot tool I used maybe 10 times a day. That's an expensive screenshot button.

## The Discovery

[macshot](https://github.com/sw33tLie/macshot) - a free, open-source screenshot tool built with native Swift and AppKit. No Electron. No subscription. No bloat.

**~8 MB memory at idle.**

```bash
brew install sw33tlie/macshot/macshot
```

One command. Done.

## What Sold Me

After 3 days of using it:

- **The UI looks premium.** Honestly, better than Lark's. I didn't expect that from a free open-source tool.
- **It's quick.** Like, really quick. Lark had a noticeable delay every time I triggered a capture - macshot just snaps.
- **Native feel.** After you capture, a little preview pops up at the bottom right - just like macOS's built-in screenshot. Small thing, but it feels right. I also remapped the hotkey to `Cmd+Shift+A` so my muscle memory didn't have to change - almost all shortcuts are customisable.
- **OCR works.** That was the must-have feature for me, and it delivers. Plus there's a bunch of post-capture features I haven't even explored yet - scroll capture, screen recording, beautify, the list goes on.

It doesn't just match Lark's screenshot tool. It looks and feels more polished.

Glad I took the time to actually set it up and try it properly instead of just bookmarking it for "later".

## The Uninstall

So I finally did it - dragged Lark to the trash.

The moment I quit Lark and watched my memory usage drop was genuinely satisfying. All those background processes, gone. And I lost nothing I actually used.

If you're keeping an app alive for one feature - go find the replacement. It's probably out there, and it's probably lighter than you think.

---

**Install:** `brew install sw33tlie/macshot/macshot`
**Repo:** [github.com/sw33tLie/macshot](https://github.com/sw33tLie/macshot)
