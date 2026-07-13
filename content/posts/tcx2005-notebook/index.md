---
title: "TCX2005 | Notebook"
slug: "nus-bit-tcx2005-notebook"
date: 2026-05-17T03:30:00+08:00
description: "Running notebook for NUS TCX2005 Information Systems, Management and Organisations. Foundations of IS, CPSD vs IPOF, three dimensions, complementary assets, and Prakash's adopter-centric trap. Doubles as exam-ready reference for the open-book Examplify final."
tags: ["nus", "information-systems", "notebook", "tcx2005", "management"]
categories:
  - ["Education", "NUS BIT", "TCX2005"]
toc: true
draft: false
---

Taking TCX2005 Information Systems, Management and Organisations with Prof Prakash this Special Term. Eight weekly lectures, six Canvas quizzes, a team project, and a 50% open-book Examplify final on 11 July. The final ships the lecture slides bundled inside Examplify, no internet, no Ctrl-F across personal notes. Translation: lookup speed beats memorisation, but only if I have a *real* notebook to look up from.

This page is that notebook. It grows lecture by lecture. Chapter 1 is filled. Chapters 2 to 10 land as each lecture happens.

For the database side of my Special Term, see [TCX2003 Notebook]({{< ref "tcx2003-notebook" >}}). For the method behind these notebooks, see [How To Take Smart Notes]({{< ref "book-how-to-take-smart-notes" >}}).

---

# Chapter 1: Foundations of Information Systems

> **Lecture:** Thu 14 May 2026, 18:30 to 20:30, LT15 F2F.
> **Textbook anchor:** Laudon and Laudon, MIS 17th ed., Chapter 1 and Chapter 2.
> **Quiz scope:** L1 and L2 share Quiz 1 (Wed 20 May 23:59, 1 point, two attempts).

## The mystery

A clothing chain called *TrendyThreads* had everything you would put on a slide deck. AI fitting room recommendations. Smart chatbots. A clean digital storefront and an attentive in-store experience. The technology worked. The vendor delivered. The sales stayed flat. Then they dropped.

Why?

Hold that question. Most of this chapter is the answer.

## What an information system actually is

Laudon (Chapter 1) defines it like this, and I had to read it three times before the words clicked:

> An information system can be defined technically as a **set of interrelated components** that **collect, process, store, and distribute** information to support decision making and control in an organisation.

Two pieces of vocabulary tripped me up: *interrelated components* and *the four verbs*.

**Interrelated components.** A camera is not an information system. A router is not an information system. A database is not an information system. Wire them together with rules, and the wired thing has behaviour the parts did not have. That emergent thing is the IS. The word "interrelated" carries that whole idea: not just a pile of devices, but devices and people connected in a way that produces information.

**The four verbs (CPSD).** Collect, Process, Store, Distribute. They tell you what an IS *does* with information. I learnt these faster by reverse-translating from a system I had already built. GrabFood orders go like this:

| # | CPSD verb | GrabFood mechanism |
|---|-----------|--------------------|
| 1 | Collect | Customer taps Place Order, backend ingests order data |
| 2 | Process | Decode menu items, calculate price, match driver |
| 3 | Store | Order persisted to database, awaiting driver pickup |
| 4 | Distribute | Push notification to restaurant and driver via FCM |

The trap (Quiz 1 loves this trap): if you write "FCM" or "WhatsApp" as the verb, you score zero. Those are *implementations*. **Distribute** is the function. FCM is one way to do it.

> **Static lens.** CPSD answers "what does an IS do?" It is the snapshot definition. It does not describe motion.

## How data actually moves: IPOF

Once you have the static definition, the next question is: how does data flow through the system? The answer is a different four-letter acronym, IPOF, and Prakash will put both in the same exam to see if you mix them up.

```
   Environment / raw data
            │
            ▼
      ┌─────────┐
      │  INPUT  │   captures raw data
      └────┬────┘
           │
           ▼
   ┌──────────────┐
   │  PROCESSING  │   converts to meaningful form
   └──────┬───────┘
          │
          ▼
      ┌──────────┐
      │  OUTPUT  │   transfers to users
      └────┬─────┘
           │
           ▼
   Customers, suppliers, decisions
           │
           └ – – – – – – ▶ (FEEDBACK loop back to INPUT)
```

Word-for-word definitions (memorise these, the grader is strict):

| Stage | What it does |
|-------|--------------|
| Input | Captures raw data from the organisation or external environment |
| Processing | Converts raw data into meaningful form |
| Output | Transfers processed information to people or activities that use it |
| Feedback | Output returned to appropriate members to evaluate or correct the input stage |

The piece that surprised me is the **feedback loop**. Without feedback, the system is open-loop. It produces outputs but cannot learn whether the inputs were any good. Closed-loop systems self-correct. Open-loop systems silently drift. The Feedback stage is the entire reason the system can improve itself.

> **Dynamic lens.** IPOF answers "how does data become information?" It describes motion. Feedback is the part that distinguishes it from a one-way pipe.

## CPSD or IPOF? The Quiz 1 trap

I almost got this wrong on a retrieval test two days after the lecture. I thought IPOF "was better" because it had a feedback loop. That was the wrong frame. They are not better and worse. They are different lenses, and the question keyword tells you which one to pick.

| CPSD (functions, static) | IPOF (stages, dynamic) |
|--------------------------|------------------------|
| Collect (data in) | Input |
| Process (transform) | Processing |
| Store (persist) | (no direct equivalent; implicit between Processing and Output) |
| Distribute (data out) | Output |
| (no direct equivalent) | Feedback |

Decision rule, taped to my mental wall:

- The word **Store** in the question? CPSD.
- The word **Feedback** in the question? IPOF.
- "Define an IS"? CPSD.
- "Data flow stages" or "produce information"? IPOF.

The reason **Feedback** is unique to IPOF: CPSD treats the IS as a functional definition (a black box of capabilities), so there is nothing to loop back into. IPOF treats the IS as a running process, and any running process needs a way to evaluate its own outputs and correct course. Feedback is the loop that makes that possible.

## The three dimensions of IS

An information system is not just technology. Prakash spent a slide-and-a-half on this, because it is the lens for the entire module.

| Dimension | Components | Example |
|-----------|------------|---------|
| Technology | Hardware, software, networks, databases | iPhone + AWS + 5G + PostgreSQL |
| Organisation | Structure, processes, culture, people | Company hierarchy, workflows, culture |
| Management | Decisions, strategy, leadership | CEO decides to launch a new product line |

> "Each dimension is equally critical." Direct quote from the lecturer. It is also a Quiz trap. If a question tries to pick a *single* most important dimension, the right answer is either "all three equally critical" or "the sociotechnical view".

An entity can also span dimensions, which I did not expect. An ESL (electronic shelf label) is *hardware* (Technology) when you list devices, *network* (Technology) when you discuss connectivity, and a *workflow change* (Organisation) when you discuss how staff update prices. The same object lives in multiple categories depending on which aspect you list it under.

## Why TrendyThreads failed: complementary assets

Back to the mystery. TrendyThreads had the AI. They did not have the *complementary assets*. Complementary assets are the organisational supports that make the technology actually pay off.

The three things TrendyThreads were missing, in their own slide:

- **Staff friction.** Employees ignored AI recommendations and trusted their intuition.
- **Data disconnect.** The AI recommended items that were physically out of stock.
- **Static flow.** The customer journey was unchanged after install. The AI sat on top of the same shopping experience as before.

Compare with CSSD at the hospital, where RFID was deployed for sterilisation tracking and *succeeded*. The technology was simpler than TrendyThreads', but the team rebuilt the process around the new data, trained staff carefully, and made accountability metrics visible. The bridge held.

Four supports for the bridge:

1. **Intensive staff training.** People can refuse a system; you cannot ship past that.
2. **Clear, standardised workflows.** New tech without new process layers on top of old habits.
3. **New accountability metrics** tied to the new data. If no one is measured against the new system, the new system is decorative.
4. **Real-time data sync** so the AI sees reality. Stale data turns AI suggestions into noise.

Complementary assets are not "more technology". They are organisation and management changes. This is the most testable concept of the chapter.

## Business and IS, both ways

Two arrows, not one:

```
   Business strategy / needs   ◀──────▶   IT capabilities
       (drives, requires)              (enables, restricts)
```

Modern business pushes IS:

- Real-time decisions.
- Demand for digital transformation.
- Competitive pressure to innovate.
- System flexibility requirements.

IS in turn shapes business:

- Strategy depends on what IT can do.
- Business changes require IT changes.
- IT limitations restrict business options.
- IT innovations open new opportunities for every stakeholder.

If you remember nothing else here, remember this: the relationship is bidirectional. Business does not just buy what IT sells. IT does not just deliver what business orders. Each bounds the other.

## Who the system actually serves

Five key stakeholders, three categories:

| Category | Stakeholders | Role |
|----------|--------------|------|
| Business relationships | Customers, Suppliers | Day-to-day transactions |
| Governance and compliance | Stockholders, Regulatory agencies | Oversight, rules |
| Market dynamics | Competitors | Pressure to innovate |

The category I had not thought about until L1 is **Competitors as stakeholders**. They are not transacting with you, but their moves shape your IS roadmap. They are not on your side, yet they sit on the list of forces you have to plan around.

**Anchor case: Rednote (小红书).** January 2025, TikTok was banned in the US. A wave of "TikTok refugees" migrated to Rednote. Rednote's IS had no internationalisation infrastructure: the moderation, the recommendation system, the operational team were all built for Mandarin-first users in China. They could not retain the new wave. They are now reactively building a Singapore team to add i18n and international ops. A competitor's regulatory event created a demand spike, and the IS missed it.

The mechanism: competitor moves create unexpected demand that exposes IS gaps. Reactive upgrade lags proactive by 6 to 12 months. The user loss in between is permanent.

## How to study an IS

Three core approaches, two supporting fields:

| Approach | Disciplines | Purpose |
|----------|-------------|---------|
| Technical | Computer Science + Management Science | Hardware, software, networks, process optimisation |
| Behavioural | Sociology + Psychology + Economics + Political Science | User adoption, group dynamics, market, power relations |
| Sociotechnical (preferred) | Integration of social and technical | Joint optimisation, avoids pure-tech thinking |

Supporting fields: Operations Research (process optimisation, resource allocation) and Legal Studies (privacy, intellectual property, liability).

Prakash is openly biased toward the sociotechnical view. Pure-technical analysis misses the behavioural and organisational reasons that real systems fail. TrendyThreads is the case in point: a clean technical install that died because the behavioural and organisational pieces were never built.

## Reasons for IS-led organisational change

Prakash's three-by-three framework, exam-likely:

| Type | Reason | Mechanism |
|------|--------|-----------|
| Driver | Cost reduction | Tech automates, operational cost falls |
| Driver | Customer satisfaction | Tech enables experience and personalisation, retention rises |
| Driver | Competition | Competitor moves force IS upgrades just to stay alive |
| Constraint | Disruptions | New tech breaks existing processes, needs staff training |
| Constraint | IS limitations | System cannot execute the desired strategy, strategy is compromised |
| Constraint | External pressures | Suppliers, customers, regulators, competitors pressure IS choices |

Decision rule:

- "Why would the company adopt new IS?" Pick from the three Drivers.
- "Why is IS change hard?" Pick from the three Constraints.
- "A competitor moved first." Pick **Competition driver** (Rednote pattern).

## The adopter-centric trap

This is the one I almost walked into.

When applying the Three Dimensions or Complementary Assets analysis, the **subject of the analysis must be the adopter (the customer, the user), not the vendor (the seller of the tech).**

| Wrong (vendor-centric) | Right (adopter-centric) |
|------------------------|-------------------------|
| Does Ketchup have a champion to teach clients? | Does the client have a champion to drive Ketchup adoption? |
| Does our management support the engineering team? | Does the client's management sponsor this purchase? |
| Do we have enough resources to maintain quality? | Will the client change SOPs and KPIs to fit Ketchup? |

The same product sold to two clients can hit 95% retention with one and 20% with the other. The difference is not the product. It is the client's organisation, management, and complementary assets. Customer Success teams operationalise this every day: day-1 onboarding is, in effect, an audit of the customer's Org, Management, and Complementary Assets before the product ships further.

The Prakash expected pattern: a case provides a vendor-centric analysis as a distractor option. The question asks "which analysis is incorrect?" The correct answer is the vendor-centric one.

## Worked example: FairPrice Smart Store

The L1 activity. My submission, reviewed and refined.

### A. Core IT components needed

| Category | Items | Purpose |
|----------|-------|---------|
| Hardware | Self-checkout kiosks, barcode generator and scanner, backend server for payment and data | Customer-facing transaction and back-of-house persistence |
| Software | Checkout / payment interface, customer mobile app, inventory management system | Compile the cart, sync reward points, automate stock updates |
| Network | Routers / Wi-Fi / IoT links, ESL connectivity, cloud gateway for IoT | Move data between devices, push real-time price updates to ESLs over sub-GHz RF, secure device-to-cloud links |

### B. Operational targets

| Area | Target | Reason |
|------|--------|--------|
| System uptime | 99.977% (4379 of 4380 hours per year, one hour of downtime) | Smart store cannot accept the queue blow-back of unscheduled downtime |
| Checkout time | best ~2 min, median ~5 min, worst ~10 min | Smooth case versus first-timers and elderly customers who need assistance |
| Stock accuracy | > 95% | Real-time sync target; some loss from hardware and edge cases is unavoidable |

### C. Short answer

**Most critical IT component:** the self-checkout backend system together with the payment service.

The reasoning is the cascade. If self-checkout kiosks fail, customers fall back to manual counters and queues build. If the backend or payment service is down, even manual counters cannot record purchases or process online payments. The single failure cascades to all four key requirements: self-checkout fails, ESL price updates cannot be confirmed at manual checkout, the mobile app shows wrong stock, smart inventory loses real-time updates.

**Main implementation challenge:** fundamentally a **complementary assets** problem.

A solid technical solution alone is not enough. Success requires staff training, process redesign, and customer change management. Many customers are not used to self-checkout. A small team of staff trained to assist will smooth the transition. Training is also the asset that makes the staff trust the technology, which makes them confident to help customers, which is what closes the loop on adoption. Without that asset, even the cleanest technical install will look like TrendyThreads in 18 months.

## Retail IS case studies

### IoT in retail

Pandemic-era survival capability is the headline finding. Retailers who already had IoT could pivot to contactless and digital flows. Retailers without IoT struggled or closed. In peacetime, IoT supports precise customer targeting, easier product information access (smart shelves, ESLs), and seamless personalised shopping.

Quiz angle: "why did the pandemic accelerate IoT adoption in retail?" The answer combines **Competition driver** and **Customer satisfaction driver**. The pandemic compressed the timeline. Retailers without IoT had no contactless path; competitors with IoT pulled customers away; the survival pressure forced adoption.

### In-store versus online retail IS flows

Same IPOF stages, different mechanisms.

| Stage | In-store | Online |
|-------|----------|--------|
| Input | POS transaction data | Customer action (click, add to cart) |
| Processing | Pattern detection, sales analytics | Payment verification, inventory check |
| Output | Reports and alerts to management | Order confirmation, shipping update |
| Feedback | Sales strategy adjustment | Issue resolution loop |

The mental model: IPOF is the *structure*. The same structure runs in both contexts, with different concrete data at each stage. If a future quiz asks you to fit a retail scenario into IPOF, do not invent new stages. Fit the mechanism into the four standard stages.

### Rednote, mapped across L1 frameworks

A single case that exercises almost every L1 concept.

| Framework | Application |
|-----------|-------------|
| Key Stakeholder | Competitor (TikTok regulatory event = unexpected competitor exit, demand spike) |
| Reason for Change | Competition driver |
| Three Dimensions | All three failed: Technology (no i18n) + Organisation (no international team) + Management (did not anticipate) |
| Complementary Assets | Missing: cross-cultural moderation, localised ops, international hires, trust signals (not just i18n code) |
| Business-IT interdependence | Business opportunity present (海外用户涌入); IT limitation (no i18n) blocked capture |

Counterfactual: if Rednote had pre-invested in i18n and an international team, the TikTok ban would have been the moment they became the next Instagram. They missed the wave. The lesson is that proactive IS investment hedges against rare-but-large competitor events, even when the events themselves are unpredictable.

---

# Quick reference (exam ready)

## Concept map

```
                      Information System (IS)
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
   What it does         How data moves        Who it serves
   (CPSD, static)       (IPOF, dynamic)       (5 stakeholders,
        │                     │                3 categories)
   Collect               Input                Customers, Suppliers
   Process               Processing           Stockholders, Regulators
   Store                 Output               Competitors
   Distribute            Feedback ★
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
   3 Dimensions         Complementary         Adopter-centric
   (Tech, Org, Mgmt,    Assets                lens
    equally critical)   (training,            (subject = client,
                         processes,            not vendor)
                         metrics, sync)
                              │
        ┌─────────────────────┴─────────────────────┐
        │                                           │
   3 Drivers                                  3 Constraints
   (Cost, CSAT, Competition)                  (Disruption, IS limits,
                                               External pressure)
```

★ Feedback exists only in IPOF, not in CPSD. This single fact is the most reliable Quiz 1 distinguisher.

## Slide page index

Fill in after Monday 18 May, when the L1 slides ship bundled inside Examplify and the page numbers are stable. The point of this index is exam-time lookup speed: glance at the term, jump to the slide page, scan, answer.

| Concept | Slide page |
|---------|------------|
| CPSD definition | TBD |
| IPOF flow diagram | TBD |
| Three Dimensions table | TBD |
| Complementary Assets list | TBD |
| Five stakeholders table | TBD |
| Three study approaches | TBD |
| Three Drivers and Three Constraints | TBD |
| Adopter-centric example | TBD |
| TrendyThreads case slide | TBD |
| Rednote case slide | TBD |

## Drill question bank

Answers are visible. The point is to ride the MRT, cover with a thumb, recite, uncover, score yourself. Aim for 8 out of 10 on the second pass.

**1. Define an information system using the static lens.**

A set of *interrelated components* that *collect, process, store, and distribute* information to support decision making and control in an organisation.

**2. List the four stages of IPOF with one-line definitions.**

Input captures raw data. Processing converts it into meaningful form. Output transfers it to users. Feedback returns output to evaluate or correct the input stage.

**3. A question says "produce information". CPSD or IPOF?**

IPOF. The verb "produce" implies motion, which is the dynamic lens.

**4. A question says "store data for later retrieval". CPSD or IPOF?**

CPSD. Store is unique to CPSD; IPOF has no Store stage.

**5. Name the three Dimensions of IS, with one component each.**

Technology (hardware, software, networks, databases). Organisation (structure, processes, culture, people). Management (decisions, strategy, leadership).

**6. Why are complementary assets not just "more technology"?**

They are organisational and managerial changes: staff training, standardised workflows, accountability metrics, real-time data sync. Technology alone does not produce value without these supports.

**7. List the five key stakeholders and group them into three categories.**

Customers and Suppliers (Business relationships). Stockholders and Regulatory agencies (Governance and compliance). Competitors (Market dynamics).

**8. Sociotechnical view: explain in one sentence why it beats pure-technical analysis.**

It jointly optimises technical and social factors, which catches the organisational and behavioural reasons that pure-tech analysis misses (TrendyThreads is the case).

**9. Adopter-centric trap. Rewrite "Does Ketchup have a champion to teach clients?" so it passes Prakash's lens.**

"Does the client have a champion to drive Ketchup adoption?" The subject moves from vendor (Ketchup) to adopter (client).

**10. Rednote lost the TikTok-refugee window. Which Reasons-for-Change category explains the demand spike, and which Three-Dimension failures explain the loss?**

Demand spike: Competition driver (a competitor's regulatory event opened a demand pool). Failures: all three dimensions failed (Technology: no i18n; Organisation: no international team; Management: did not anticipate the spike).

## Glossary

| Term | Definition |
|------|------------|
| Information system (IS) | Set of interrelated components that collect, process, store, and distribute information |
| CPSD | Collect, Process, Store, Distribute. Static "what is" lens |
| IPOF | Input, Processing, Output, Feedback. Dynamic "how it runs" lens |
| Three Dimensions | Technology, Organisation, Management. All three equally critical |
| Complementary assets | Organisational supports needed for technology to deliver value: training, processes, metrics, data sync |
| Sociotechnical view | Joint optimisation of social and technical factors |
| Adopter-centric analysis | Analysis whose subject is the customer or user, not the vendor |
| ESL | Electronic shelf label. Sub-GHz proprietary RF, 5 to 7 year battery, used for dynamic pricing |
| POS | Point of sale (cash register, scanner, payment terminal) |
| Feedback loop | Output returned to evaluate or correct the input stage |
| TrendyThreads | Negative case: AI installed without complementary assets, sales did not move |
| CSSD RFID | Positive case: hospital sterilisation department, RFID succeeded because process and training were rebuilt around it |
| Rednote (小红书) | Competitor-driven IS change case: TikTok ban created demand spike, missing i18n blocked capture |

## Reflection

I came in thinking an information system was mostly about technology. I came out understanding it is the bridge between technology, organisation, and management. When the bridge collapses, the technology gets blamed, but the people are usually where the failure started.

That single shift in perspective is the entire point of L1. The rest of the module is variations on the theme.

---

# Coming chapters

The notebook grows lecture by lecture. Placeholders below are filled in after each lecture lands.

- **L2 (Mon 18 May, pre-recorded).** Management hierarchy: TPS, MIS, DSS, ESS. Enterprise applications: ERP, SCM, CRM, KMS. *Quiz 1 scope includes this lecture, due Wed 20 May 23:59.*
- **L3 (Thu 21 May, F2F LT15).** Strategy I. *I am missing this in person for the Phuket trip; catching up via Canvas recording the Saturday after.*
- **L4 (Thu 28 May, pre-recorded).** Strategy II.
- **L5 to L10.** To be written as each lecture lands.

---

# Cross-references

- [TCX2003 Notebook]({{< ref "tcx2003-notebook" >}}): database systems, the technology dimension of an IS rendered concrete in SQL.
- [How To Take Smart Notes]({{< ref "book-how-to-take-smart-notes" >}}): the method behind these notebooks.
- [NUS BIT Progress]({{< ref "nus-progress" >}}): module-level mastery dashboard.

---

# Sources

- Course intro slides: `lectures/L1_Introduction_v4-2026.pdf`
- Main L1 slides: `lectures/L1_Information Systems in Global Business Today.pdf`
- Case study slides: `lectures/Classroom-example-AI-in-Retail.pdf`
- Activity sheet: `lectures/L1_Activity.pdf`
- Textbook: Laudon and Laudon, *Management Information Systems: Managing the Digital Firm*, 17th ed., Chapter 1 and Chapter 2
