---
title: "Should I Use ultrastorage? the Answer Was in My Repo, Not Its README"
slug: "should-i-use-ultrastorage"
date: 2026-09-11T12:40:12+08:00
subtitle: "A research note on whether to adopt a well-built localStorage library, decided by six greps against my own codebase rather than by its feature list"
description: "A research note on deciding whether to adopt a library: six advertised features turned into six greps against my own codebase, why the biggest storage surface was out of the library's reach by type signature rather than by quality, and when to take a wrapper's dependency instead of the wrapper."
tags:
  - dependencies
  - decision-making
  - javascript
  - web
  - tooling
  - research
categories:
  - ["Software Engineering", "Notes"]
keywords:
  - should i use ultrastorage
  - ultrastorage yangshun review
  - should i add this dependency
  - localstorage wrapper library
  - ultrastorage review
  - devalue serialization
  - zustand persist indexeddb
  - evaluating npm packages
  - dependency audit
image: ""
comments: true
draft: false
---

> someone sent me a link to a new localStorage library and asked, reasonably, "does this help?". i had no problem in mind when i opened it, which is exactly the condition under which every feature on a README looks like it helps. so instead of reading the feature list twice i turned each feature into a grep against my own codebase and counted the hits. the answer was no, and the interesting part was the shape of the no. i had my AI clone the repo, read the source rather than the docs, and measure the bundle and the storage overhead itself. two things i had confidently said in chat turned out to be wrong once the source was open, and both are in here. the personal note at the bottom is mine to write after.

## tl;dr

- the library is good. that is not the question, and treating it as the question is the mistake.
- six advertised features, six greps against my repo. one found any demand at all, at **2 call sites out of 75**.
- the largest persistence surface in my app was **out of reach by type signature**, not by quality: the library takes a synchronous `Storage`, my stores sit on IndexedDB behind an async interface.
- reading the source killed two of my own confident claims. worth more than the verdict.
- when the wrapper's value is real, check whether you actually want **its dependency** instead. here that is `devalue`, and it is most of the bundle.

## the question

the package is [ultrastorage](https://github.com/yangshun/ultrastorage) by Yangshun Tay: "gives `localStorage` superpowers", with rich type serialisation, key expiration, namespacing, and schema validation. MIT, TypeScript, zero open issues, 80 stars at the time of writing.

"does this help?" is the wrong shape of question and it is the one everybody actually asks. it invites you to read a feature list and imagine the pain each feature would relieve. imagination is a terrible instrument here, because a README is a description of the problems its author had. those were real problems. they were just in a different codebase.

the right shape is: **how many places in my code hurt today, in the specific way this thing fixes?** that number is not a guess. it is a grep.

## six features, six greps

my case is a training PWA: Next.js, Zustand, deployed, real users. the storage surface is not toy sized. here is every advertised feature against what the grep actually returned.

| advertised | what my repo returned |
|---|---|
| rich types (`Set`, `Map`, `Date`, `BigInt`, circular refs) | **0.** none of the 34 non-test writes stores one. everything already flattens to a string or plain JSON. |
| TTL and expiry | **2.** a 60 second one and a 7 day one. that is the whole demand. |
| namespacing | **already solved.** `fc_` and `companion:` prefixes, plus a key-builder module that is the single source of truth. |
| schema validation | **0**, and it arrives with a second dependency: zod is installed in my API workspace, not the web one. |
| cross-tab subscription | **already owned, by something better.** see below. |
| pluggable storage backend | **the wall.** see below. |

75 non-test call sites touch `localStorage` or `sessionStorage`. two of them do the thing the library is best at. that is not a close decision that went the wrong way, it is off by more than an order of magnitude.

the namespacing row deserves a second look, because it is the one that looks like a clean win. my key builder does not just prefix. it scopes a key to whichever user is being acted for, and deliberately keeps the *unscoped* key for the common case so that nobody who already saved a preference loses it. that is a migration decision encoded in a key shape. a `prefix` option cannot express it, and swapping to one would silently reset every existing user's saved preference. features that look like a superset of what you have sometimes quietly drop the part that was load-bearing.

## the wall: synchronous by type

the feature list says the backend is pluggable, and it is. here is the type:

```ts
export interface CreateStorageOptions {
  prefix?: string;
  separator?: string;
  /** The underlying Storage backend. Defaults to `localStorage`. */
  storage?: Storage;
  serializer?: Serializer;
}
```

`Storage` is the web platform interface, and it is synchronous by definition: `getItem(key: string): string | null`. there is no `Promise` anywhere in the library's own source outside of one schema check.

meanwhile the persistence that actually matters in my app is five Zustand stores going through `persist`, and they do not sit on `localStorage` at all. they sit on IndexedDB, which is asynchronous, which works because Zustand's own interface allows it:

```ts
export interface PersistStorage<S, R = unknown> {
  getItem: (name: string) => StorageValue<S> | null | Promise<StorageValue<S> | null>;
  setItem: (name: string, value: StorageValue<S>) => R;
  removeItem: (name: string) => R;
}
```

that `| Promise<...>` is the whole difference. a library typed against `Storage` cannot reach a surface typed like that, and no amount of quality changes it. this is worth naming clearly because it is invisible from the README: **the library is not too weak for my main problem, it is in a different domain from it.** you find that in the type signature in about ninety seconds, and you never find it by reading the feature list.

the cross-tab row is the same story with a happier ending. my app does synchronise across tabs, heavily, in two modules sharing one `BroadcastChannel`. there are zero `storage` event listeners in the whole codebase. `BroadcastChannel` carries a structured payload and does not require a write to storage to fire, so it is the stronger mechanism for what i need. adopting the library's `subscribe` would not fill a gap, it would add a second, weaker path alongside the good one. two mechanisms doing one job is worse than either alone.

## two things i said that the source killed

i had already given a verdict in chat before cloning anything. reading the source overturned two of my reasons, and i would rather publish that than quietly keep a right answer that had wrong support.

**"a validating wrapper will throw, and my house rule is never throw."** false. `getItem` returns `null` when the key is missing, when the entry has expired, and when schema validation fails. the only throws are on programmer error: passing both `ttl` and `expiresAt`, a non-finite expiry, a non-string key segment. that is exactly the design i would have asked for, and my objection was invented.

**"the package is one day old."** unfair framing. the npm package was published on 9 September 2026, but the repository was created on 5 March 2026. six months of work, two days on the registry. the maturity caution survives (it is 0.6.0, and this is production) but "one day old" described the publish event, not the code, and i was using it as though it described the code.

what does survive is smaller and duller: expiry reads `Date.now()` directly inside the core, seven times. both of my TTL helpers take `now` as an injectable parameter, which is why their tests are pure functions with no timer mocking. adopting would trade that for fake timers. minor, real, and nothing like the objection i originally raised.

## the numbers it deserves credit for

measured, not quoted. bundled with esbuild, minified, gzip level 9:

| entry point | gzipped |
|---|---|
| `ultrastorage` (default, `devalue` bundled) | **5,349 B** |
| `ultrastorage/core` (bring your own serialiser, i passed `JSON`) | **1,751 B** |
| `devalue` `stringify` and `parse` alone, for comparison | 3,746 B |

so the library's own code is roughly 1.75 KB gzipped and the rest is its serialiser. shipping a `core` entry that lets you drop `devalue` entirely is a genuinely good decision that most packages do not bother making.

one cost that is easy to miss. every value is wrapped in an envelope carrying a marker, a format version, and an expiry slot. storing a single boolean flag:

```
"1"                                                          1 byte, native
[{"__us":1,"version":2,"value":1,"expiry":3},true,1,null]   57 bytes, wrapped
```

that is `devalue`'s flat array format, which is the correct representation when values can contain cycles. it is also 57x for a flag. irrelevant at ten keys. worth knowing before you namespace a thousand of them.

## when a wrapper does pay

the general rule falls out of the counting. a wrapper earns its slot when

$$ n_{\text{hurt}} \times s \;>\; C_{\text{migrate}} + C_{\text{carry}} $$

where $n_{\text{hurt}}$ is call sites that hurt *today* (not sites that exist, and not sites you can imagine), $s$ is lines saved per site, $C_{\text{migrate}}$ is every site and test you have to touch to get there, and $C_{\text{carry}}$ is the permanent cost of one more thing in the tree that can break, drift, or go unmaintained.

mine: two sites, about five lines each, so ten lines of benefit, against 75 call sites and roughly 40 test files that mock storage, plus the carry forever. not close.

this is the same crossover as the one in {{< ref "build-vs-buy" >}}, which is worth reading if you want the maths drawn properly, with one substitution: the x-axis there is **time**, and here it is **count**. build-versus-buy asks how long you will keep the thing. adopt-or-hand-roll asks how many places you will use it. everything else about the shape is identical.

concrete thresholds i would now use for this class of thing:

- **2 sites: hand-roll.** the duplication is not real duplication yet.
- **around 10 sites: a local helper.** thirty lines, no dependency, and it can keep your injectable clock and your never-throw contract, both of which a general library has to decide for you.
- **30 or more, heterogeneous, with real rich types or a genuine multi-app namespace collision: a library.** now you are writing the library anyway, badly, and you should stop.

and one that is not about count at all: **greenfield flips it.** on a new project the incumbent is nothing, the migration cost is zero, and the bar is on the floor. the same package that fails a mature repo is an easy yes on day one. this is the selection-pressure argument from {{< ref "curation-beats-collection" >}} showing up in a different costume: a mature codebase rejects good things, and that is the codebase working, not the thing being bad.

## take the dependency, not the wrapper

the last move is the one i keep relearning. suppose the rich-type feature *had* found demand. the honest next step is not "install the wrapper", it is "install the thing the wrapper installs".

`devalue` is what does that work. Zustand's `PersistStorage` already lets you own serialisation completely, and `createJSONStorage` even takes a `reviver` and `replacer`. so plugging `devalue` into the storage layer i already have is one small file, and it reaches the async IndexedDB stores that the wrapper structurally cannot.

i wrote a whole note six days ago about exactly this reflex, that the best answer to a tool comparison was often {{< ref "pick-the-layer-not-the-tool" >}} rather than any of the tools being compared. it turned up again within a week, in a completely different corner of the stack, which is a decent sign it is a real pattern and not a one-off.

## key takeaways

- a feature list is a description of the author's codebase. the only translation into yours is a grep, and it costs ten minutes.
- count call sites that hurt **today**. imagined future sites are how every unnecessary dependency gets justified.
- check the **type signature** of the extension point before anything else. "pluggable" plus a synchronous type equals unreachable for your async layer, and no amount of quality fixes that.
- a feature you already have solved a better way is a **negative**, not a neutral. adding a second mechanism for one job costs more than skipping it.
- if a wrapper's one useful feature comes from its dependency, evaluate the dependency directly. it is usually smaller and it usually reaches further.
- publish the reasons that turned out wrong. the verdict here survived, but two of the four reasons i gave for it did not, and only opening the source showed that.

## a personal note

wip ...

## sources and further reading

- [ultrastorage](https://github.com/yangshun/ultrastorage) by Yangshun Tay. repository created 5 March 2026, npm `0.6.0` published 9 September 2026, MIT. all source claims here are read off a shallow clone of `main` and the published tarball, on 11 September 2026, not off the README.
- [devalue](https://github.com/sveltejs/devalue), the serialiser underneath it, from the Svelte team.
- [Standard Schema](https://github.com/standard-schema/standard-schema), the shared validator interface it accepts, so zod, valibot and arktype all work.
- [Zustand `persist` middleware](https://zustand.docs.pmnd.rs/integrations/persisting-store-data), where `PersistStorage` and its async `getItem` are documented.
- bundle figures produced locally with esbuild, `--bundle --minify --format=esm`, then `gzip -9`. the envelope figure is a real write against an in-memory `Storage` shim, printed verbatim.
