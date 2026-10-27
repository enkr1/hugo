---
title: "Microtasks Jump the Queue: Reading Promise, await and setTimeout Order"
slug: "microtasks-jump-the-queue"
date: 2026-10-11T18:25:20+08:00
subtitle: "A research note on the JavaScript event loop: why a promise callback beats setTimeout(0), what await really schedules, and the async traps that bite in real code."
description: "A research note on JavaScript output-ordering puzzles: tasks versus microtasks, why Promise.then runs before setTimeout(0), what await schedules, the extra ticks from returning a promise, Node's nextTick and setImmediate, and the async/await traps that serialise or swallow work."
tags:
  - research
  - javascript
  - event-loop
  - promises
  - async-await
  - microtasks
  - nodejs
  - nus
  - tcx2004
categories:
  - ["Software Engineering", "Programming Languages", "JavaScript"]
  - ["Education", "NUS BIT", "TCX2004"]
keywords:
  - javascript event loop
  - microtask vs macrotask
  - promise then vs settimeout order
  - await execution order
  - process.nextTick vs queueMicrotask
  - setImmediate vs setTimeout
  - Promise.all vs allSettled
  - async await pitfalls
image: ""
comments: true
draft: false
---

> a while back i spent an evening grinding through promise-ordering puzzles with chatgpt: `setTimeout` against `Promise.resolve` against `await`, which line prints first. i never wrote any of it down, so when i went looking for it later there was nothing to find. this note is the version i should have written then. my AI helped me rebuild the puzzles, and i ran every single one in node (v22) so the printed order below is what actually came out, not what either of us expected. the personal note at the bottom is mine to write after.

## tl;dr

- the whole game is two queues. run one **task** to the end, then drain **every** microtask, then take the next task. promise callbacks and the code after an `await` are microtasks. `setTimeout`, `setInterval`, I/O and UI events are tasks.
- so `Promise.resolve().then(...)` beats `setTimeout(..., 0)` every time, and everything before the first `await` in an async function runs synchronously.
- answers online disagree because the rules moved: since V8 7.2 (late 2018) an `await` on a native promise costs one microtask tick instead of three. returning a promise from a `.then` or an async function still costs two extra ticks.
- the traps that hurt in real code are not the puzzles, they are `await` inside a loop, async callbacks in `forEach`/`map`, and a `try` that never awaits.

## the question

these puzzles look like trivia: eight `console.log` lines and a "what prints?". but every one of them is really asking the same thing, which is whether you know what the runtime does *between* your lines of code. get the model right and every puzzle is mechanical. get it wrong and you will also ship the real bugs: a loop that is five times slower than it needs to be, or an error that sails straight past your `catch`.

so this is the model, then the puzzles in rising difficulty, then the traps.

## the model: one task, then all the microtasks

javascript runs on one thread. the host (a browser or node) keeps queues of work waiting for that thread, and the event loop pulls from them in a fixed rhythm:

1. take **one task** from the task queue and run it to completion. the main script itself is the first task.
2. when the call stack is empty, run **every microtask** in the microtask queue. if a microtask queues another microtask, that one runs in this same drain too.
3. (browser only) maybe render a frame.
4. go back to 1.

what lands where:

| queue | what puts work there |
|---|---|
| task (also called macrotask) | `setTimeout`, `setInterval`, I/O callbacks, UI events, `setImmediate` in node, `MessageChannel` |
| microtask | `.then` / `.catch` / `.finally` callbacks, the rest of an async function after `await`, `queueMicrotask`, `MutationObserver` |

two details that the puzzles lean on:

- the function you pass to `new Promise(fn)` runs **synchronously**, right now. only the `.then` callbacks are deferred.
- a `.then` callback is queued only once its promise *settles*. on an already-resolved promise that is immediately; on a pending one it is whenever it resolves.

that is genuinely all of it. the rest is tracing.

## the puzzles

try each one before reading the answer.

### 1. the warm-up

```js
console.log('a')
setTimeout(() => console.log('b'), 0)
Promise.resolve().then(() => console.log('c'))
console.log('d')
```

**prints `a d c b`.** `a` and `d` are part of the current task. `c` is a microtask, so it runs as soon as the script finishes. `b` is a new task, so it waits for the microtask drain. a delay of `0` does not mean "now", it means "in a later task".

### 2. the first await

```js
async function f() {
  console.log(1)
  await null
  console.log(2)
}
f()
console.log(3)
```

**prints `1 3 2`.** calling an async function runs its body synchronously up to the first `await`. the `await` hands control back to the caller and queues the rest of the body as a microtask. awaiting a non-promise like `null` still yields: `await` always waits at least one tick.

### 3. the classic

this is the one that shows up everywhere, and it has every moving part in it:

```js
async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}

console.log('script start')
setTimeout(() => console.log('setTimeout'), 0)
async1()
new Promise(resolve => {
  console.log('promise1')
  resolve()
}).then(() => console.log('promise2'))
console.log('script end')
```

**prints:**

```text
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
```

the trace, step by step:

| step | runs | task queue after | microtask queue after |
|---|---|---|---|
| 1 | `script start` | | |
| 2 | `setTimeout` is scheduled | timer | |
| 3 | `async1()` logs `async1 start`, calls `async2()` which logs `async2` and returns a resolved promise | timer | |
| 4 | `await` parks `async1` | timer | rest of async1 |
| 5 | the promise executor logs `promise1` and resolves | timer | rest of async1 |
| 6 | `.then` queues on the resolved promise | timer | rest of async1, promise2 |
| 7 | `script end`, the script task is done | timer | rest of async1, promise2 |
| 8 | drain microtasks: `async1 end`, then `promise2` | timer | |
| 9 | next task: `setTimeout` | | |

the bits people miss: `async2` prints during the synchronous phase (it is just a function call), `promise1` prints synchronously (executors are not deferred), and `async1 end` beats `promise2` because it was queued first.

### 4. two chains interleave

```js
Promise.resolve().then(() => console.log(1)).then(() => console.log(2))
Promise.resolve().then(() => console.log(3)).then(() => console.log(4))
```

**prints `1 3 2 4`**, not `1 2 3 4`. the second `.then` in each chain is not queued until the first one has run and resolved its promise. so the first drain sees only `1` and `3`; running them queues `2` and `4` behind them. chains advance one link per tick, side by side.

### 5. the expensive return

this is the hard one, and it is the one that tests whether you are counting ticks or guessing:

```js
Promise.resolve()
  .then(() => { console.log(0); return Promise.resolve(4) })
  .then(x => console.log(x))

Promise.resolve()
  .then(() => console.log(1))
  .then(() => console.log(2))
  .then(() => console.log(3))
  .then(() => console.log(5))
  .then(() => console.log(6))
```

**prints `0 1 2 3 4 5 6`.** if returning a value cost one tick like every other link, `4` would print right after `1`. it lands after `3` instead, because returning a *promise* (any thenable) from a `.then` callback costs **two extra ticks**: the spec first queues a job that calls `.then` on your returned promise, and only when *that* reaction fires does the outer promise resolve and queue the next link.

the same thing happens when an async function returns a promise:

```js
async function a() { console.log('a1'); await b(); console.log('a2') }
async function b() { console.log('b1'); return Promise.resolve() }
a()
Promise.resolve().then(() => console.log('t1')).then(() => console.log('t2'))
  .then(() => console.log('t3')).then(() => console.log('t4'))
```

**prints `a1 b1 t1 t2 a2 t3 t4`.** two extra ticks for `b`'s returned promise, then one for the `await`. you will almost never care about this in real code, but it is why "just count the thens" fails on the harder puzzles.

### 6. node adds two more queues

```js
setTimeout(() => console.log('timeout'), 0)
setImmediate(() => console.log('immediate'))
Promise.resolve().then(() => console.log('promise'))
process.nextTick(() => console.log('nextTick'))
console.log('sync')
```

this one has a genuinely surprising answer, because **it depends on the file type**:

- as CommonJS (`.cjs`, or `.js` without `"type": "module"`): `sync nextTick promise immediate timeout`
- as an ES module (`.mjs`): `sync promise nextTick immediate timeout`

node's `process.nextTick` queue normally drains *before* the promise microtask queue. but an ES module's top-level code is itself evaluated as part of the microtask queue, so node is already mid-drain when your promise callback joins, and it runs first. the node docs spell this out in the section on `queueMicrotask()` versus `process.nextTick()`. that is one more reason they recommend `queueMicrotask` over `nextTick` for ordinary deferral.

and the last two are not even stable. i ran that file twenty times from the main module: `immediate` came before `timeout` nineteen times, and the other way round once. the node docs call this order non-deterministic, because it depends on whether the 1ms timer has expired by the time the loop first checks. inside an I/O callback (say, in a `fs.readFile` callback) `setImmediate` always wins, because the check phase comes straight after the poll phase.

## why the answers online disagree

if you search puzzle 3 you will find older posts that print `promise2` *before* `async1 end`. they were not wrong for their time.

the spec used to wrap every awaited value in a fresh promise and resolve it through the thenable path, which cost **three** microtask ticks per `await` even when the value was already a native promise. in 2018 the V8 team proposed a spec change (ecma262 PR #1250) that awaits a native promise directly, in **one** tick. it shipped on by default in V8 7.2 / Chrome 72, and the V8 blog post "Faster async functions and promises" walks through it. node picked it up from node 12.

so for any puzzle involving `await`, the answer is "modern engines print X". an older runtime, or an older blog post, may print Y. the two-tick cost of returning a promise (puzzle 5) is still there, because that part of the spec did not change.

## where people get this wrong

the puzzles are a party trick. these are the ones that ship bugs.

**`await` in a `for` loop serialises the work.** three independent 20ms calls:

```js
for (const id of ids) await fetchOne(id)         // ~63ms, one after another
await Promise.all(ids.map(id => fetchOne(id)))   // ~20ms, all at once
```

that is from an actual run. if the calls do not depend on each other, start them all and await the batch. if there are hundreds, cap the concurrency with a small pool so you do not open five hundred sockets at once.

**`forEach` does not wait for async callbacks.** `ids.forEach(async id => await save(id))` returns immediately (0ms in my run), and anything after it runs before a single save has finished. `forEach` throws the returned promises away. use `for...of` with `await` for sequential work, or `Promise.all` with `map` for parallel.

**an async `map` gives you promises, not values.**

```js
const ids = users.map(async u => await fetchId(u))
ids[0] // a Promise, not an id
```

fix: `const ids = await Promise.all(users.map(u => fetchId(u)))`.

**a `try` that does not await catches nothing.**

```js
try {
  doThing().then(r => save(r))
} catch (e) {
  log(e)   // never runs for an async failure
}
```

the rejection happens in a later microtask, long after the `try` block has exited. either `await` inside the `try`, or put `.catch(log)` on the chain.

**`Promise.all` fails fast, but does not cancel.** reject one input and `Promise.all` rejects immediately (0ms in my run), but the other promises keep running to completion in the background; my 30ms timer still fired after the catch. there is no cancellation unless you wire one in, usually with an `AbortController`. pick the combinator that matches what you need:

| combinator | settles when | you get |
|---|---|---|
| `Promise.all` | all fulfil, or the first rejects | array of values, or the first error |
| `Promise.allSettled` | all settle, never rejects | `{ status, value \| reason }` per input |
| `Promise.race` | the first settles, either way | that value or that error |
| `Promise.any` | the first fulfils | that value, or an `AggregateError` if all reject |

**microtasks can starve the loop.** because a drain runs until the microtask queue is empty, a microtask that keeps queueing microtasks blocks timers, I/O and rendering. on my laptop, a `setTimeout(..., 0)` waited 163ms behind two million self-queueing microtasks. if you need to yield to the rest of the world, schedule a *task* (`setTimeout`, `MessageChannel`), not a microtask.

**`setTimeout(fn, 0)` is not zero.** node turns any delay below 1 into 1ms, and browsers clamp deeply nested zero-delay timers up to about 4ms. it means "after the current task and its microtasks", never "now".

## key takeaways

- one task, then drain every microtask, then the next task. that sentence answers most puzzles.
- promise callbacks and post-`await` code are microtasks. timers and I/O are tasks.
- an async function is synchronous up to its first `await`; a promise executor is synchronous, full stop.
- chains advance one link per tick, so parallel chains interleave.
- returning a promise from `.then` or an async function costs two extra ticks.
- in node, `nextTick` beats promises in CommonJS but not in ES modules, and `setImmediate` versus `setTimeout(0)` is a coin toss from the main module.
- in real code: do not `await` in a loop over independent work, do not hand async callbacks to `forEach`, and do not expect a `try` to catch what it did not `await`.

i used `Promise.all` to wait on every image and API call before finishing the bar in [building a loading progress bar that tracks every resource]({{< ref "web-loading-progress-bar" >}}), which is a concrete case of "start everything, await the batch". the rest of my javascript scraps live in the [javascript notebook]({{< ref "pl-javascript" >}}). for NUS, this is the async part of L09 (frontend JavaScript) in TCX2004, the software engineering module.

## a personal note

wip

## sources and further reading

- Jake Archibald, ["Tasks, microtasks, queues and schedules"](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) (2015). the post that made this model famous, with animated step-throughs.
- Maya Armyanova and Benedikt Meurer, ["Faster async functions and promises"](https://v8.dev/blog/fast-async), V8 blog (12 November 2018). the three-ticks-to-one `await` change, ecma262 PR #1250, V8 7.2.
- WHATWG, [HTML Living Standard: event loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) and [timers](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers). the browser task and microtask processing model, and the nested-timer clamp.
- Ecma International, [ECMAScript language specification: promise jobs](https://tc39.es/ecma262/#sec-promise-jobs). `NewPromiseReactionJob` and `NewPromiseResolveThenableJob`, the source of puzzle 5's extra ticks.
- Node.js docs, [`process.nextTick()` and "When to use queueMicrotask() vs. process.nextTick()"](https://nodejs.org/api/process.html#when-to-use-queuemicrotask-vs-processnexttick). the CommonJS versus ES module ordering.
- Node.js docs, ["The Node.js Event Loop"](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick). phases, and why `setImmediate` versus `setTimeout(0)` is non-deterministic outside an I/O callback.
- MDN, [Using microtasks in JavaScript with queueMicrotask()](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide) and [Promise concurrency](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency).
