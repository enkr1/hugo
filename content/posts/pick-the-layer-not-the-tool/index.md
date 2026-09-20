---
title: "Pick the Layer, Not the Tool: the Git TUI Comparison Everyone Runs Is One Level Too High"
slug: "pick-the-layer-not-the-tool"
date: 2026-09-05T13:48:20+08:00
subtitle: "A research note on why lazygit versus gitui versus tig is the wrong comparison, and what changes when you compare layers instead of apps"
description: "A research note on choosing a terminal git client: why the speed benchmark everyone quotes is worth 0.18 seconds at real repo sizes, why lazygit and tig are a mutator and a reader rather than rivals, and why the biggest win turned out to be a pager one layer down."
tags:
  - tooling
  - git
  - developer-experience
  - decision-making
  - terminal
  - research
categories:
  - ["Software Engineering", "Notes"]
keywords:
  - lazygit vs gitui vs tig
  - terminal git client
  - git delta pager
  - lazygit diffRenderers
  - choosing developer tools
  - magit jujutsu
  - developer tooling decisions
image: ""
comments: true
draft: false
---

> i asked my AI which terminal git client to download, got told lazygit, installed it, and then asked the question i should have asked first: what is the *best*, actually. answering that one properly meant checking claims instead of repeating them, and two of the things i had just been told turned out to be wrong. i had it dig through the upstream docs, the published benchmarks and my own installed binary rather than trusting the summary. the personal note at the bottom is mine to write after.

## tl;dr

- lazygit is still the right download. that part survived contact with the evidence.
- the speed benchmark everyone quotes is real, and irrelevant at my scale: it is worth about **0.18 seconds** on my largest repo.
- lazygit and tig are not rivals. lazygit has no blame at all, and its own wiki tells you to call tig for it.
- the biggest single improvement was not a client. it was `delta`, one layer down, in git config.
- and the delta-plus-lazygit config you will find online is **stale**: the key was renamed. most posts still teach the dead one.

## the question

"which terminal git client should i download" is a shopping question, and shopping questions get you the popular answer. the popular answer here is lazygit, and it is not wrong. but "what is the best, actually" is a different question, and it is only answerable if you first say **best at what**. that turned out to be the whole note.

three tools get compared endlessly, so start there and attach real numbers to them, because the arguing is usually done without any.

## the field, with the numbers attached

star counts pulled from the github api on 5 september 2026, so they are a snapshot, not a law.

| tool | stars | written in | what it actually is |
|---|---|---|---|
| **lazygit** | 81,999 | Go | full workflow manager: stage by hunk or line, interactive rebase, worktrees, custom commands |
| **delta** | 32,083 | Rust | not a client at all. a diff renderer that sits under git |
| **jj** (jujutsu) | 31,403 | Rust | not a client either. a different version-control model, git-compatible underneath |
| **gitui** | 22,464 | Rust | fast, low-memory TUI. still pre-1.0, interactive rebase is an open roadmap item |
| **tig** | 13,321 | C | a reader: log, diff, blame. barely a writer |
| **magit** | 7,217 | Emacs Lisp | the most complete git interface anyone has built. costs Emacs |
| **neogit** | 5,609 | Lua | magit's ideas, ported to Neovim |
| **gitu** | 2,906 | Rust | magit's ideas, standalone, young |

the first thing worth noticing is that the second most-starred thing on that list is not a client. hold that.

## the axis everyone argues about is speed

the benchmark that gets quoted in every comparison comes from gitui's own README, off a RustBerlin talk, parsing the entire Linux kernel repository at over 900,000 commits:

| | time | memory | binary | freezes |
|---|---|---|---|---|
| `gitui` | **24 s** | **0.17 GB** | 10 MB | no |
| `lazygit` | 57 s | 2.6 GB | 25 MB | yes |
| `tig` | 4 m 20 s | 1.3 GB | **0.6 MB** | sometimes |

two honest caveats before anyone leans on that table. it is published by the tool that wins it, and it is a single scale point. it is still useful, because the architecture underneath it is real and explains the shape: **lazygit shells out to the `git` binary for every operation, gitui talks to the repository through libgit2 bindings.** forking a process per operation is genuinely more expensive, and that cost scales with how many commits have to be parsed.

so scale it. if the cost is roughly linear in commits parsed, which for a full log walk it should be, you can ask where that 33-second gap actually lands for a normal person. my own repositories are 882 commits (my coursework repo) and 5,028 for the busiest project i own.

<figure style="margin:1.6rem 0">
<svg viewBox="0 0 620 372" role="img" aria-label="Where the lazygit versus gitui speed gap actually appears, against repo size" style="width:100%;max-width:620px;height:auto;font-family:inherit;display:block;margin:0 auto">
<text x="310" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">Where the speed gap actually appears</text>
<rect x="148.3" y="40" width="152.9" height="260" fill="currentColor" fill-opacity="0.05"/>
<text x="224.7" y="34" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.6">my repos</text>
<line x1="70" y1="300.0" x2="590" y2="300.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="62" y="304.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">.001s</text>
<line x1="70" y1="248.0" x2="590" y2="248.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="62" y="252.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">.01s</text>
<line x1="70" y1="196.0" x2="590" y2="196.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="62" y="200.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">.1s</text>
<line x1="70" y1="144.0" x2="590" y2="144.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="62" y="148.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">1s</text>
<line x1="70" y1="92.0" x2="590" y2="92.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="62" y="96.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">10s</text>
<line x1="70" y1="40.0" x2="590" y2="40.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="62" y="44.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">100s</text>
<line x1="70.0" y1="300" x2="70.0" y2="304" stroke="currentColor" stroke-opacity="0.45"/>
<text x="70.0" y="318" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">100</text>
<line x1="200.0" y1="300" x2="200.0" y2="304" stroke="currentColor" stroke-opacity="0.45"/>
<text x="200.0" y="318" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">1k</text>
<line x1="330.0" y1="300" x2="330.0" y2="304" stroke="currentColor" stroke-opacity="0.45"/>
<text x="330.0" y="318" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">10k</text>
<line x1="460.0" y1="300" x2="460.0" y2="304" stroke="currentColor" stroke-opacity="0.45"/>
<text x="460.0" y="318" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">100k</text>
<line x1="590.0" y1="300" x2="590.0" y2="304" stroke="currentColor" stroke-opacity="0.45"/>
<text x="590.0" y="318" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">1M</text>
<text x="330.0" y="336" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7">commits in the repo (log scale)</text>
<line x1="70" y1="300" x2="590" y2="300" stroke="currentColor" stroke-opacity="0.45"/>
<path d="M 70.0 258.3 L 590.0 50.3" fill="none" stroke="#f97316" stroke-width="2.5"/>
<path d="M 70.0 277.8 L 590.0 69.8" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
<circle cx="584.1" cy="52.7" r="4" fill="#f97316" stroke="#f97316" stroke-width="2"/>
<circle cx="584.1" cy="72.2" r="4" fill="#3b82f6" stroke="#3b82f6" stroke-width="2"/>
<circle cx="291.2" cy="169.8" r="4" fill="var(--card-background, #fff)" stroke="#f97316" stroke-width="2"/>
<circle cx="291.2" cy="189.4" r="4" fill="var(--card-background, #fff)" stroke="#3b82f6" stroke-width="2"/>
<line x1="584.1" y1="52.7" x2="584.1" y2="72.2" stroke="currentColor" stroke-opacity="0.35" stroke-dasharray="3 3"/>
<text x="576.1" y="66.5" text-anchor="end" font-size="10" fill="currentColor" fill-opacity="0.75">33s apart (measured)</text>
<line x1="291.2" y1="169.8" x2="291.2" y2="189.4" stroke="currentColor" stroke-opacity="0.35" stroke-dasharray="3 3"/>
<text x="301.2" y="183.6" font-size="10" fill="currentColor" fill-opacity="0.75">0.18s apart</text>
<line x1="84" y1="46" x2="106" y2="46" stroke="#f97316" stroke-width="2.5"/>
<text x="113" y="50" font-size="11" fill="currentColor" fill-opacity="0.85">lazygit (shells out to git)</text>
<line x1="84" y1="63" x2="106" y2="63" stroke="#3b82f6" stroke-width="2.5"/>
<text x="113" y="67" font-size="11" fill="currentColor" fill-opacity="0.85">gitui (libgit2 bindings)</text>
</svg>
<figcaption style="font-size:0.85rem;opacity:0.75;text-align:center;margin-top:0.5rem">Both lines are anchored on the single published measurement at 900k commits (gitui's own README) and scaled linearly in commit count, so treat everything left of that point as an extrapolation, not a measurement. The shaded band is where my own repositories actually sit.</figcaption>
</figure>

on my largest repository, the entire performance argument between the fastest client and the most popular one is worth **0.18 seconds**. on my coursework repo it is 0.03 seconds. you would need something like 180 times my biggest repo before the difference cleared one second.

this is the [build versus buy crossover]({{< ref "build-vs-buy" >}}) in a different costume: there is a real line where gitui wins, it is just nowhere near where i live. and it rhymes with the rule from my [curation note]({{< ref "curation-beats-collection" >}}): the question is never "is this better", it is "does it beat the thing it would replace, by enough to pay for the switch". a fifth of a second, against losing interactive rebase, is not close.

## the axis that actually separates them

drop speed and the tools separate cleanly along a different line: **do you mutate the repository, or do you read it.**

- **lazygit cannot do blame.** i grepped its entire 343-line default config on the version i installed (0.64.1): zero occurrences of the word. this is not an oversight, it is a scope decision, and the project's own wiki resolves it by suggesting you bind a custom command that launches **tig**.
- **gitui cannot do interactive rebase.** that is not a jab from a competitor, it sits in gitui's own README as an open pre-1.0 roadmap item.

so the tool that mutates best cannot read, the tool that reads best barely writes, and the fast one cannot do the single most valuable mutation. "lazygit vs tig" was never a versus. upstream is telling you to install both, and both together are under 20 MB.

## the layer nobody compares

here is the part that actually changed my setup, and it is not a client.

before any of this i had no `core.pager` set and no diff renderer installed. every diff i read, in the terminal or inside any tool, was raw git green-and-red. swapping TUI changes one program. changing the renderer under git changes `git diff`, `git show`, `git log -p`, `git add -p`, and every tool downstream that pipes through git. that is why delta has more stars than every client in this note except lazygit itself: it is one level down, so it multiplies.

```bash
brew install git-delta tig
git config --global core.pager delta
git config --global interactive.diffFilter 'delta --color-only'
git config --global delta.navigate true
```

the shape of the mistake i made first time round is worth naming: i went shopping at the application layer for a problem that lived at the configuration layer. **the tool comparison you are running may just be one level too high.**

## a real one: the config that works today, not in 2023

this is the bit that justified doing the reading, and it is a live trap.

almost every guide online tells you to wire delta into lazygit like this:

```yaml
git:
  paging:
    pager: delta --dark --paging=never
```

**that key no longer exists.** lazygit renamed the whole feature: `docs/Custom_Pagers.md` is gone from the repository and `docs/Custom_DiffRenderers.md` replaced it, with upstream noting plainly that these "used to be called custom pagers in earlier lazygit versions". i confirmed the current shape against my installed binary, whose default is an empty `git.diffRenderers: []`. the config that works today:

```yaml
git:
  diffRenderers:
    - command: delta --dark --paging=never
```

two things fall out of that which the stale guides cannot tell you. it is an **array**, so you can list several renderers and cycle them in-app with `|`, which is genuinely nice for switching to `--color-words` on a prose diff. and `delta --navigate` does **not** work inside lazygit, by upstream's own note, so that `delta.navigate true` above earns its keep on the command line only.

also worth correcting, because i said the opposite an hour earlier: lazygit does **not** inherit your `core.pager` by default. the default is empty, and you either write the renderer explicitly or opt in. setting `core.pager` alone does nothing for it.

## where people get this wrong

- **quoting a vendor benchmark without scaling it to yourself.** the 900k-commit number is true and almost never relevant. run `git rev-list --count HEAD` on your own repository before you let it decide anything.
- **treating a reader and a writer as competitors** because both are TUIs and both are about git.
- **reading tool docs through a search summary.** the renamed config key is exactly the failure mode: the summary confidently returned the old key, because the old key is what the internet is full of.
- **stopping at the application layer.** the pager, the diff renderer, the git config: all of it applies to every tool at once and none of it shows up in a "best git client" listicle.

## when it applies, and when it doesn't

- **magit is genuinely the best git interface that exists.** everyone who has used it says so. it costs adopting Emacs, and i use VS Code. that price is real and i am not paying it, but "lazygit is best" is a claim about what is *adoptable*, not what is *best*, and it is worth being honest about the difference.
- **gitui wins if you actually have the monorepo.** if `git rev-list --count HEAD` comes back six figures, re-read that benchmark table, it is now about you.
- **jj is the interesting one.** it is not a nicer front end for git, it is a different model (no staging area, everything is a commit, undo anything) that happens to be git-compatible on disk. it is the only thing here that would change how i think rather than how i click. it is also the only one that would fight my setup, since most of my commits are made by agents driving the `git` CLI directly. parked, not dismissed.

## key takeaways

- ask "best at what" before "which one". a shopping question returns the popular answer.
- scale every benchmark to your own numbers before letting it decide anything.
- tools that look like competitors are often a reader and a writer. check whether upstream tells you to install both.
- when comparing applications, check whether the problem lives a layer below them. config-layer changes multiply across every tool you own.
- verify tool config against the installed binary, not against a search result. renamed keys are invisible to consensus.
- the same move turned up a week later in a completely different corner of the stack, deciding a javascript dependency: {{< ref "should-i-use-ultrastorage" >}}, where the useful thing again sat one layer below the thing being evaluated.

## a personal note

wip ...

## sources and further reading

- [lazygit](https://github.com/jesseduffield/lazygit) and its [Custom Diff Renderers doc](https://github.com/jesseduffield/lazygit/blob/master/docs/Custom_DiffRenderers.md), which is the current, correct home of the delta config and explicitly records the rename away from "custom pagers".
- [gitui](https://github.com/gitui-org/gitui): the benchmark table and the pre-1.0 roadmap both live in its README, which is the primary source for the 900k-commit numbers quoted above.
- [the "i cannot find git blame" discussion on lazygit](https://github.com/jesseduffield/lazygit/discussions/1690), where the answer is to shell out to tig.
- [delta](https://github.com/dandavison/delta): the three-line global config in its README is the whole setup.
- [tig](https://github.com/jonas/tig), [magit](https://github.com/magit/magit), [jujutsu](https://github.com/martinvonz/jj), [gitu](https://github.com/altsem/gitu) and [neogit](https://github.com/NeogitOrg/neogit) for the rest of the field.
- my [build versus buy note]({{< ref "build-vs-buy" >}}): the crossover maths behind "there is a scale where the other tool wins, and it is not mine".
- my [curation note]({{< ref "curation-beats-collection" >}}): why "better" is not the bar, and "better by enough to pay for the switch" is.
