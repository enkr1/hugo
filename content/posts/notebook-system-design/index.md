---
title: "System Design Notebook"
sticky: 999
date: 2025-05-03 19:53:44
subtitle: "System Design Notebook"
description: "A notebook for system design"
keywords:
tags:
  - "system-design"
categories:
  - "Software Engineering"
  - "System Design"
  - "Notebooks"
---

## System Design Framework
REF: https://youtu.be/i7twT3x5yv8?si=i-_8lAJDNhOzgWNL

### Understand the problem and establish design scope (5m)
- Define the problem, rephrase it
- Discuss on the direction of the problem
- Clarify constraints
- Rough numbers & SLOs

### Propose high-level design and get buy-in (20m)
- Flow:
  - User -> API -> Service -> MQ/Stream -> DB -> Cache -> observability (logs, metrics, tracing) ...
- Data models (core)
- API design (core)
- Components & services
- Storage
- Security? audit logs?

### Design deep dive (15m)
- Options for the tools mentioned above, deep dive into each one
- Discuss on the trade-offs, risk, and constraints
- SQL vs NoSQL
  - horizontal vs vertical scaling
- Caching? invalidation triggers, TTL/jitter, single-flight
- GEO?
- secruity, auth -> audit logs
- testing, rollout, rollback, etc

### Wrap up (5m)
- recap the design
- rediscuss on the trade-offs, risk, and constraints
  - shard keys?
  - cache TTL?
  - monitor metrics, logs, tracing
- next steps? (bonus) - talk about what was not asked to design but open up the discussion to show understanding and seniority
- closing


---

.
.
.

## System-Design One-Pager (print this)

**Trigger mantra:** **SPEC → NUMBERS → FLOW → FAILURE → TRADE-OFFS → ROADMAP.**

**90-second opening script (memorise):**

1. “Goal: *X delivers Y to Z users.* Non-goals: A/B. Success = p95 latency ≤ L, freshness ≤ F, cost ≤ C.”
2. “Scale assumptions: QPS, payload size S, daily writes/reads, growth G.”
3. “Critical path: request → validate → write/read → persist → respond (happy path first).”
4. “State model + data model at a glance (entities, keys, hot partitions).”
5. “We’ll design for 1 failure now (idempotency + retries), and evolve here (roadmap).”

**Back-of-envelope (fill in fast):**

* **Throughput:** `req/s × payload` → network/CPU budget.
* **Storage:** `daily writes × avg size × retention` (+ replication factor).
* **Latency budget:** front-end `≤50ms`, edge `≤20ms`, core read/write `≤120ms`, queue/async `≤1–5s` (MVP).
* **Costs:** biggest 2 line items (storage + egress/compute); name them.

**Data model checklist:**

* Entities & keys (avoid hot keys; include secondary indexes).
* Partitioning/sharding rule (what’s the shard key and why).
* **State machine** for long-running work (e.g., `PENDING → RUNNING → RETRYING → SUCCEEDED|FAILED(DLQ)`).

**Data-flow narrative (say out loud, in order):**

* Ingress format & size → validation → write path → derived data (indexes/vectors) → read path & ranking.
* Idempotency key + retry policy on every write/async step.
* Exactly which store each read hits (and why).

**Failure inventory (pick 2 now, note the rest):**

* Duplicate requests; partial writes; queue poison message; downstream timeout; hot partition.
* Controls: idempotency keys, exponential backoff, DLQ with alert, circuit breaker, TTLs, SLO + error budget.

**Trade-off playbook (2 pros/2 cons, commit):**

* SQL vs NoSQL; stream vs batch; cache vs no cache; single region vs multi.
* Name what you *give up* and how you’d reverse the decision later.

**Roadmap ladder (close strong):**

* **MVP (90 days):** 1 region, 1 DB, 1 queue, observability baseline.
* **Next 10×:** read replicas/ANN index, cache for N hot queries, backfill job, multi-AZ/region, privacy/PII pipeline.

**Security & compliance in one breath:**
AuthN (JWT) → AuthZ (tenant/resource checks) → data segregation → PII handling (hash/tokenise, deletion path) → audit logs.

---

## Why this beats your Synthesis attempt

* You *start* with the **critical path** and **state machine**, not gateways/caches/ES.
* You limit primitives (one DB + one queue) until reads prove otherwise.
* Every box exposes **input, output, SLO, and failure behaviour**—no black boxes.
* You anchor with **numbers** so choices feel intentional, not ornamental.

---

## Deep keys (mental models you can reuse)

* **Two-Store Rule (MVP):** one blob store + one OLTP/OLAP (or OLTP+pgvector). Add ES/Redis only when a *measured* query needs it.
* **One-Queue Rule:** one durable queue for long tasks; state machine per job; retries + DLQ from day 1.
* **Happy-Path First:** prove *upload → process → search* (or analogous) end-to-end before any embellishment.
* **Talk in Deltas:** each evolution step should change exactly one constraint (throughput, latency, durability, cost).
* **Hot-spot Radar:** say where hot keys and fan-outs will occur and how you’ll detect them (metrics & sample alerts).
* **Observability trinity:** logs with correlation IDs, RED/USE metrics, 1–2 SLOs with error budgets.

---

## Reflection prompts (turn this sting into skill)

Answer these in writing—short bullets:

1. **Priority drift:** When under pressure, what made me reach for “shiny” components before the core flow? How will I catch that impulse (e.g., *say the 90-sec script before touching the marker*)?
2. **Narrative gap:** Could I explain the entire data path in **60 seconds without diagrams**? If not, tighten it.
3. **State clarity:** Where did I fail to name states and transitions? Rewrite them as a table.
4. **Numbers poverty:** Which number did I avoid stating (traffic, size, cost)? Why? Add a default baseline toolkit (below).
5. **Failure courage:** Which failure mode do I habitually ignore? Design one control and one alert for it.
6. **Life parallel:** In your HRBP project, scope crept and you optimised mid-UAT. What’s the SD analogue? → *Lock MVP spine; create a “parking lot” for nice-to-haves; only pull from it after the spine stands.*

---

## Baseline numbers toolkit (memorise reasonable defaults)

* Payloads: JSON request 1–5 KB; doc text page 2–4 KB; image 200–500 KB.
* Throughput tiers: prototype 10 rps; MVP 100 rps; scale target 1k rps.
* Storage: plain text \~1 byte/char; embed vector 768 floats ≈ 3 KB.
* Queue: Pub/Sub/Kafka consumer stable at O(100–1k msg/s) per worker with I/O-bound tasks.
* Latency: network hop 5–20 ms in-region; disk read 1–10 ms SSD; ANN/vector search 10–80 ms per 10k vectors (ballpark).
* Cost: egress is often the silent killer; cache prevents egress, not just latency.

---

## Red-team yourself (10 interrupts an interviewer might use)

1. “Walk the happy path, no optimisations.”
2. “Point to each arrow and tell me payload & size.”
3. “What’s the shard key? Why won’t it hot-spot?”
4. “If this downstream is down for 10 minutes?”
5. “How do I retry safely without dup effects?”
6. “Which read hits which index?”
7. “Show me the job state machine.”
8. “Where do you log correlation IDs?”
9. “What’s your single biggest cost line?”
10. “How do you roll back a bad deploy?”

---

## Practice protocol (repeat weekly)

* **5-min warm-up:** recite the 90-sec opening, draw the state machine.
* **15-min drill:** pick any common SD prompt (feed, rate limiter, search, chat). Do: numbers → flow → failures.
* **10-min red-team:** have a friend interrupt with the 10 questions above.
* **Post-mortem note (3 bullets):** what I skipped, what I over-engineered, one number I’ll bring next time.

---

## Your cheat sheet, tuned (copy/paste)

**System-Design Mistakes — Pocket Checklist**

1. **Vague spec →** Write **goal, non-goals, SLOs**.
2. **No numbers →** Quick calc: **QPS, size, storage, latency, cost**.
3. **Messy diagram →** Boxes, **numbered arrows**, legend; pass-1 < 2 min.
4. **Silent schema →** Entities, keys, **indexes**, hot-key risk.
5. **No state machine →** Jobs: **PENDING→RUNNING→RETRYING→SUCCEEDED|FAILED(DLQ)**.
6. **No data-flow story →** Trace **one request** with format/size/retry/idempotency.
7. **Ignoring failures →** Choose 2, add **backoff, DLQ, circuit breaker**, runbook trigger.
8. **Zero trade-offs →** For each big choice, **2 pros/2 cons + reversal path**.
9. **No roadmap →** **MVP spine** now; next 10× bottlenecks later.
10. **Security & cost blindspot →** AuthN/Z, PII path, **top 2 cost drivers**.

**Mantra:** **SPEC → NUMBERS → FLOW → FAILURE → TRADE-OFFS → ROADMAP.**

---



I have built a repo as a preparation hub:
- [Interview Preparation Materials](https://github.com/enkr1/interview_preparation_materials)
- [ByteByteGo - System Design Interview](https://bytebytego.com/courses/system-design-interview/scale-from-zero-to-millions-of-users)

## References

- [System Design - The Big Archive 2023 Edition - ByteByteGo.com](https://assets.bytebytego.com/ByteByteGo-Big-Archive-System-Design-2023.pdf)
- [Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems](https://z-library.sk/book/2880632/d655c8/designing-dataintensive-applications-the-big-ideas-behind-reliable-scalable-and-maintainable-sys.html)
