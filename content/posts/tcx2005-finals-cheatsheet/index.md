---
title: "TCX2005 | Information Systems Finals Cheatsheet (L1-L9)"
slug: "nus-bit-tcx2005-finals-cheatsheet"
date: 2026-07-10T18:17:00+08:00
description: "Open-book print cheatsheet for TCX2005 Final Exam (Jul 11): trap triggers, frameworks, risk strategies, L1-L9 full coverage."
tags: ["nus", "information-systems", "cheatsheet", "tcx2005", "finals"]
categories: ["Education"]
toc: true
math: false
draft: false
sheet: openbook
---

<div class="print-hide">

> **TCX2005 (NUS Information Systems) series:** [Notebook]({{< ref "tcx2005-notebook" >}}) · **Finals cheatsheet (current)**

**Sat 11 Jul 09:00-11:00 · LT27 seat 61 · Examplify, open book (printed only) · 40 questions (multiple choice + short answer, mini-cases) · Scope L1-L9**

</div>

## 0. Mock recap

> **Flip the sheet before committing — check every non-obvious answer against it.**

- **"NOT / EXCEPT / LEAST / rather than"**: underline the direction word, pick, then re-read it against your choice. *(Q11, Q16)*
- **Risk strategy (insurance, vendor, contract, SLA, firewall, shut down)**: ask "who bears the risk after this action?" someone else = **transference**; reduce impact with own plans = **mitigation**; own technical controls = **defense**; drop the asset = **termination**. *(Q3, Q22, 5 marks)*
- **Rivals/buyers/suppliers vs inbound logistics/operations/service**: outsiders = **Five Forces**; our own internal stages = **Value Chain**. *(Q18)*
- **Table with "overall / across / total"**: sum the numerators and denominators over the rows first, then divide; any option equal to a single visible cell is the planted trap. *(Q15)*
- **Fill-in-the-blank chain (options are full term sequences)**: verify **every** blank; one definitionally-wrong term kills the whole option (e.g. "cloud... closer to source" is really edge). *(Q7)*
- **"Critical vs Strategic" task**: strategic = competitive advantage → **build** (trading algorithm); critical = essential + high reliability → **buy** (payroll, EHR). *(Q16)*
- **"Two-way relationship between organisation and IS"**: the **D1/D2 horizontal pair**: D1 org→IS choice, D2 IS→org structural change. NOT vertical management feedback, NOT build-vs-buy (both are past misreads). *(repeat miss ×2)*

---

## 1. Term Dictionary

| Term | Definition |
|------|------------|
| **AAA** | Authentication, Authorization, Accounting (common distractor for CIA) |
| **Accept (risk)** | live with a minor risk |
| **Adhocracy** | fluid specialist teams, low formalisation, novel problems (consulting, research & development) |
| **Agency cost** | cost of monitoring **employees** (falls → flatter hierarchy, wider span of control) |
| **Behavioral view of an organization** | rights, obligations, values, norms, working relationships. New systems need **both** views balanced |
| **Build** | for a unique process that is a source of competitive advantage |
| **Business analytics (BA)** | the **tools** + techniques (online analytical processing (OLAP), statistics, models, data mining) |
| **Business firm** | a **collection of business processes** (chain: routine → process → firm, small → big) |
| **Business intelligence (BI)** | the **infrastructure** for collecting/storing/analyzing data (databases, warehouses, marts) |
| **Business model** | how revenue/value is made ("subscription streaming") |
| **Business myopia** | did not **see** the new tech's potential (Kodak invented the digital camera in 1975, shelved it) |
| **Business process** | step-by-step operational sequence ("manage billing") |
| **Buy** | when a standardized solution is acceptable |
| **CIA triad** | Confidentiality, Integrity, Availability, the security triad |
| **Cloud computing** | centralized on-demand services in a distant data centre |
| **Commercial off-the-shelf (COTS)** | packaged software installed per computer; prof classifies **Microsoft Office 365 as COTS** |
| **Controls** | methods ensuring asset safety, record accuracy, adherence to management standards |
| **CPSD** | the information-system definition, static functions: Collect, Process, Store, Distribute (keyword **Store**) |
| **Critical task** | essential, needs high reliability → **buy** software as a service (payroll, electronic health records) |
| **Customer relationship management (CRM)** | customer side |
| **D1 (org → IS)** | organisational features drive the <mark>**choice** of information system (before adoption)</mark> |
| **D2 (IS → org)** | the information system <mark>forces structural change (after adoption)</mark>: new roles, processes, power/access. "User adoption / learning curve" = distractor, not D2 |
| **Dashboard** | real-time, live screen, always-on |
| **Data administration** | establishes policies and procedures |
| **Data governance** | manages data **availability, integrity, security** |
| **Data lake** | raw multi-format store (Astro case) |
| **Data mart** | subject-specific **subset** of a warehouse |
| **Data redundancy** | same data stored in many places, values disagree |
| **Data warehouse** | central store of current + historical data for analysis; data cannot be altered |
| **Database management system (DBMS)** | software layer between applications and data files; centralizes data, controls redundancy |
| **Defense (risk)** | own technical safeguards (firewalls, intrusion detection) that lower likelihood |
| **Defense in depth** | layered technical tools (firewall + intrusion detection + encryption + ...) |
| **Double down** | deepen the existing strength, ignore the new game (Rolex mechanical watches) |
| **Economic (PESTLE)** | money / return on investment |
| **Edge computing** | process <mark>closer to the data source</mark>, lower latency, less network traffic |
| **Enterprise resource planning (ERP)** | integrate **all** internal processes into one system |
| **Environmental (PESTLE)** | green / sustainability (the second E, don't drop it) |
| **Evil twin** | fake Wi-Fi access point |
| **Failed to adapt** | clung to old revenue (Kodak film) |
| **Fast follower** | has the size + resources to capitalize on it |
| **First mover** | inventor of the disruptive technology |
| **Golden Rule** | do unto others as you would have done to you |
| **Hybrid (build/buy)** | buy the core + build custom modules |
| **IaaS / PaaS / SaaS** | cloud service models: **I**nfrastructure / **P**latform / **S**oftware, on-demand over the network |
| **Information policy** | rules for data **sharing** |
| **Information system** | the technology stack ("centralized database") |
| **IPOF** | the data-flow stages: Input, Processing, Output, Feedback (keyword **Feedback**, unique to IPOF) |
| **Knowledge management system (KMS)** | capture + share organisational knowledge |
| **Least privilege** | minimum *permissions* to do the task; stricter, implies need-to-know |
| **Legal (PESTLE)** | Ministry of Health guideline / industry regulation / written law. Personal Data Protection Act (PDPA) can be either P or L, check the framing |
| **Mitigate (risk)** | reduce the impact if it happens, own incident-response plans, backups |
| **Need-to-know** | access only the *information* a role requires |
| **Nonobvious relationship awareness (NORA)** | find **hidden** connections across separate data sources (security benefit + privacy risk) |
| **NoSQL** | distributed database, flexible model; handles structured + unstructured, scales easily |
| **Opt-in vs opt-out** | opt-in = data used **only if you say yes** (EU, stricter); opt-out = data **used unless you say no** (US default). Hook: opt-**out** = fight your way **out** |
| **Organizational culture** | shared assumptions about **what** to produce, **how**, **where**, **for whom** |
| **Organizational politics** | divergent viewpoints → struggle, competition, conflict (resistance hampers change) |
| **Pharming** | redirects to a bogus site even when the correct web address is typed |
| **Phishing** | fake email/website asks for your data |
| **Political (PESTLE)** | government policy / IT mandate / data localization |
| **Professional bureaucracy** | experts applying **standardized** skills (hospital, university) |
| **Profiling** | combine multi-source data into dossiers on individuals |
| **Program-data dependence** | programs coupled to file formats (widen a field → must edit every program) |
| **Quality assurance (data)** | data quality **audits + data cleansing** + monitoring |
| **Ransomware** | encrypts data, demands payment |
| **Report** | periodic, static, pushed on a schedule |
| **Retrench** | "can't beat you, will survive": defensive mergers and acquisitions, lobby regulators (taxis vs Grab) |
| **Return on investment (ROI)** | the return gained on an investment (a benefit measure, not a cost measure) |
| **Routine** | precise rule/procedure/practice for an expected situation |
| **Routine task** | standard, low impact → **buy** commercial off-the-shelf (email) |
| **Security** | policies, procedures and technical measures preventing unauthorized access, alteration, theft, damage |
| **Semi-structured decision** | machine proposes, human disposes (middle management) |
| **Slippery Slope** | if an action cannot be taken repeatedly, do not take it at all |
| **Software as a service (SaaS)** | cloud subscription (Salesforce) |
| **Spyware** | key loggers, browser redirects, monitoring |
| **Strategic task** | core competitive advantage → **build** (trading algorithm) |
| **Structured decision** | a rule produces the answer, repetitive (operational) |
| **Supply chain management (SCM)** | supplier side |
| **Technical view of an organization** | a process transforming inputs (capital, labor) → production → outputs, efficiency-driven |
| **Terminate (risk)** | remove the vulnerable asset entirely |
| **Total cost of ownership (TCO)** | direct + indirect cost of owning technology; hardware + software are only ~20% of it |
| **Transaction cost** | cost of dealing with **external** parties (falls → outsourcing becomes viable) |
| **Transfer / transference (risk)** | shift the risk elsewhere, cyber insurance, vendor contract, renegotiated service-level agreement. Test: <mark>"who bears the risk after? someone else = transference, NOT mitigation"</mark> |
| **Trojan horse** | disguised as legitimate software |
| **Unstructured decision** | no procedure, intuition and judgement (senior management) |
| **Virus** | attaches to a host file, needs human action to spread |
| **Worm** | **self-spreads** over the network (no human action) |
| **Zero trust** | "never trust, always verify", continuous verification, micro-segmentation |

---

## 1b. Building a system (SDLC · testing · conversion)

**Three frameworks, don't mix:** **BPM** = 5-step **loop** (Identify → Analyze → Design → Implement → Continuous measurement) · **BPR** = radical one-shot process redesign (§5) · **SDLC** = 6-step **linear** (Analysis → Design → Programming → Testing → Conversion → Production & Maintenance). (In L9, BPM = business **performance** management - different thing, see §6.)

**BPM vs BPR vs SDLC decision rule:** first ask *what is being changed?* A business **process/workflow** → BPM or BPR (never SDLC, even if a new system is mentioned - that's a distractor). The **software itself** being built/tested/converted → SDLC. Then for process questions ask two tests: (1) **how much survives?** tweak, old process kept = BPM · scrapped, from scratch = BPR; (2) **cadence?** repeating cycle = BPM · one-time transformation = BPR. Signal words: "tweak / continuously improve / measure & repeat" = **BPM** · "scrap / radical / from scratch / fundamental rethink" = **BPR** · "programming / testing / conversion / go-live" = **SDLC**. WARNING both BPM and BPR contain analyze-design-implement steps - never classify by activity words, only by magnitude + cadence.

| SDLC stage | What happens | Buy-path twist (ERP/COTS) |
|---|---|---|
| 1. Analysis | study current processes + pain points → define requirements; includes feasibility | pick the package with closest fit |
| 2. Design | specify how the system meets requirements | = **configure** the package (modules, roles/permissions, business rules) |
| 3. Programming | translate specs into code | replaced by vendor package + **data migration** (old DBs → one shared DB, cleaned first) |
| 4. Testing | **unit** (each module in isolation) → **system** (integrated whole) → **acceptance** (final user sign-off, production-ready) | same order, non-negotiable |
| 5. Conversion | pick a strategy ↓ | ERP → **phased or parallel** (minimise disruption + staff resistance) |
| 6. Production & maintenance | live operation: **train users**, then review, fix, upgrade | same |

| Conversion strategy | How | Trade-off |
|---|---|---|
| **Parallel** | run old + new together till confident | safest, costly |
| **Direct cutover** | switch old → new overnight | cheap, risky |
| **Pilot** | one site/dept first, then spread | contained |
| **Phased** | roll out module-by-module | gradual, low disruption |

**Buy-path customisation trap:** prefer **vanilla** - on the buy path, processes bend to fit the software (not vice-versa); customise ONLY for genuine competitive advantage. Over-customising → vendor upgrades break your custom code → you lose the very reasons you bought instead of built.

---

## 2. Security (L8)

**Business value of security and control:** failed systems = loss of business function; firms hold confidential personal/financial data + trade secrets (Sony Pictures hack 2014); a breach cuts market value almost immediately (Equifax 2017); inadequate security also creates **legal liability**.

**CIA Triad:** Confidentiality = limit access to authorized users (encryption, data classification, education) · Integrity = whole, complete, uncorrupted (hashing) · Availability = accessible without obstruction. Data theft = only Confidentiality compromised; unaltered records = Integrity intact; no downtime = Availability intact (SingHealth pattern).

**5 risk control strategies:**

- Defense (firewalls, anti-malware)
- Transference (cyber insurance, vendor contract)
- Mitigation (incident-response plans)
- Acceptance (minor risks where the control costs more than the loss)
- Termination (shut down the vulnerable legacy system)

**Access control:** need-to-know · least privilege · zero trust ("never trust, always verify"; Microsoft version: verify explicitly, least-privilege just-in-time / just-enough-access, assume breach = limit blast radius, segment the network, encrypt end-to-end) · **role-based access control (RBAC)** = permissions granted by job role · **audit logging** = record who accessed what and when (detective control, enables accountability).

**People, process, technology:** all three required, none sufficient alone. Weakest link = **people** (social engineering, convenience bypass, low awareness, insiders responsible for ~56% of data leaks in Asia).

**Balance:** perfect security is impossible; security = a **process**, not a goal; trade-offs: controls vs convenience, cost vs asset value, risk vs operations.

**Supplier/vendor risk (5 steps):** Planning → Due-diligence selection → Contracting (service-level agreements define responsibilities) → Monitor & assess → Termination (secure data deletion, revoke access). Cloud: responsibilities must be **clearly defined** (shared-responsibility model, Amazon Web Services service-level agreement).

**Why systems are vulnerable:** network accessibility · hardware/software faults · disasters and human error · devices outside the firm's control · portable device loss. Internet-specific: fixed IP addresses = fixed targets, open to anyone. Wireless-specific: network names (SSIDs) broadcast openly, packet sniffers, war driving, rogue access points.

**Malware:** virus, worm, Trojan horse, SQL injection, ransomware, spyware / key loggers (+ mobile and social-network variants). **Computer crimes:** system intrusion/damage, cybervandalism, denial of service (DoS) and distributed denial of service (DDoS) via botnets, spam, identity theft (phishing, evil twins, pharming), click fraud, cyberterrorism / cyberwarfare. **Hacker** = gains unauthorised access; **cracker** = hacker with criminal/malicious intent (the exam pair). **Zero-day vulnerability** = flaw with no patch released yet; fix = patch management.

**Tools (defense-in-depth layers):** firewall · intrusion detection system (IDS) · encryption (at rest + in transit) · identity and access management (IAM) · multi-factor authentication (MFA) · security information and event management (SIEM) · endpoint protection · email security gateways · data loss prevention (DLP).

**Technical safeguard → what it stops:** encryption → stolen data unreadable · multi-factor authentication → stolen password alone insufficient · intrusion detection / SIEM → detects abnormal activity early · patch management → closes known entry points.

---

## 3. Infrastructure, Data, Networks (L6+L7)

**Total cost of ownership (TCO):** direct + indirect costs; **hardware + software = only ~20%**. Direct: hardware acquisition, software licenses, installation, **training** (trap: training is a direct cost). Indirect: support/maintenance, infrastructure management, **downtime**, space and energy. Reduce TCO: cloud, centralisation + standardisation.

**Evolution (5 stages, order + dates):** Mainframe 1959 → Personal Computer 1981 → Client/Server 1980s → Enterprise Computing 1990s → Cloud & Mobile mid-2000s. ("My PC Eventually Clouds")

**7 infrastructure components** (binning: software that works → #5; raw machines → #3; humans → #7):

1. data management & storage (Amazon S3, Redshift)
2. internet platforms (web servers, AWS Lambda)
3. computer hardware (EC2, servers = the metal)
4. operating systems (Linux, iOS)
5. enterprise software applications (SAP, SageMaker, EMR = software that does work)
6. networking/telecommunications (content delivery networks, Cisco, internet service providers)
7. consulting & system integration (Accenture = people you hire)

**Hardware trends:** cloud computing (infrastructure / platform / software as a service) · edge computing (closer to the source, lower latency) · green computing · mobile platform · consumerization of IT / bring your own device (BYOD) · quantum computing. **Software trends:** open-source software / Linux · web services (XML, service-oriented architecture) · outsourcing + cloud services · software for the web (browsers, Java, HTML/HTML5).

**System integration services (type → key challenge):** point-to-point → legacy system integration · hub-and-spoke → cross-platform compatibility · **(enterprise) service bus** → data migration · API-based → security compliance. **Federated system** = independent systems keep autonomy but share data so they act as one (vs full consolidation into a single system).

**3 infrastructure challenges:** scalability (expand to serve more users) · governance (centralised IT department vs business-unit decentralisation; who pays) · investment (rent vs buy; under-investment and over-investment both hurt).

**Data hierarchy:** bit → byte → field → record → file → database. Entity = the thing you store data about; attribute = a characteristic of it.

**Traditional file environment problems:** data redundancy & inconsistency · program-data dependence · lack of flexibility · poor security · limited sharing. **Database management system (DBMS) fixes:** single consistent view, controls redundancy, separates programs from data (physical data independence: change the definition once, applications unaffected). Capabilities: data definition, data dictionary, data manipulation language (SQL).

**Big data / business-intelligence infrastructure:** big data = massive unstructured + semi-structured data (web, social media, sensors, Internet of Things), too big for a typical DBMS. Data warehouse (central, current + historical, immutable) · data mart (subject subset) · Hadoop (distributed processing across cheap machines, Hadoop Distributed File System) · in-memory computing (RAM speed).

**Data quality & governance:** >25% of critical data in Fortune 1000 databases is inaccurate or incomplete; before a new database, identify and correct faulty data + establish better editing routines. Term split (data administration / information policy / data governance / quality assurance): see term dictionary.

**Networks:** an internet service provider (ISP) provides access, each device gets an IP address; the backbone is owned by network service providers. Governance bodies: Internet Architecture Board (IAB), ICANN (domain names), World Wide Web Consortium (W3C, web standards). Cellular 5G (1-10 Gbps) · Wi-Fi 802.11 (local area network) · Bluetooth 802.15 (personal area network, device-to-device) · Internet of Things sensors feed big data.

---

## 4. Strategy (L3+L4)

**Porter's Five Forces** (+ the information-system lever for each) — <mark>names outsiders: rivals, entrants, substitutes, suppliers, buyers</mark>:

- rivalry among competitors (differentiate or cut cost via IS)
- threat of new entrants (IS as entry barrier: network effects, switching costs)
- threat of substitutes (deepen dependence: integrations, data lock-in)
- supplier bargaining power (supply chain management, multi-sourcing)
- buyer bargaining power (raise switching cost: loyalty programmes, ecosystem)

**Generic strategies:** cost leadership · differentiation · focus/niche. An app with exclusive fares + personalization = differentiation (possibly + low-cost hybrid).

**Distractor eliminators:** Balanced Scorecard = performance **measurement** (4 perspectives, §6) - NOT for analysing industry structure or value-chain stages · network economics/effects = value rises as more users join (WhatsApp, marketplaces) - a moat/advantage concept, NOT an analysis framework.

**Value chain → system decisions (4 steps):** analyse value-chain stages → identify where IS can improve (operational efficiency / customer intimacy / supplier relationships) → generate candidate applications → prioritise which to develop first.

**Value chain** — <mark>names our own internal stages</mark> (at each stage ask "can an information system make it faster/cheaper/better?" via 3 axes: operational efficiency, customer intimacy, supplier intimacy):

- **Primary activities (5)** (arrow = the IS tool it maps to):
  - inbound logistics (→ supply chain management)
  - operations (→ enterprise resource planning)
  - outbound logistics (→ supply chain management)
  - marketing & sales (→ customer relationship management)
  - service
- **Support activities (4):**
  - firm infrastructure
  - human resources (→ human resource information system)
  - technology development
  - procurement (→ e-procurement)

**Build vs Buy, 4 considerations:**

- strategic value (uniqueness)
- resource availability (expertise, budget, time)
- market solutions (existing fit, customization)
- risk (development risk, vendor lock-in, integration, security)
**Task classification:** strategic → build · critical → buy software as a service · routine → buy commercial off-the-shelf. Size is **not** the build trigger; uniqueness of advantage is.
**6 decision factors:** strategic importance · cost (initial + ongoing + hidden) · quality (reliability, scalability, security) · regulatory compliance (Personal Data Protection Act, HIPAA, Sarbanes-Oxley, General Data Protection Regulation) · time · risk.
**3 acquisition strategies:** internal = in-house development · external-prepackaged = commercial off-the-shelf (COTS) / cloud SaaS · external-outsourcing = hire a development firm.

**6-step external acquisition process:** Planning → Feasibility (5 dimensions: organizational, political, technical, economic, operational) → Analysis → **Request for Proposal (RFP, step 4)** → Proposal evaluation → Vendor selection.
**NUS learning-management-system case:** IVLE (build, 1999-2018) → LumiNUS (build) → Canvas (software-as-a-service buy) = the classic build→buy migration once the system stopped being a differentiator.

**PESTLE (external factors for IS acquisition):**

- Political (government IT policy, data localization)
- Economic (budget, return on investment, cost reduction)
- Social (digital literacy, training, adoption, resistance)
- Technological (compatibility, cybersecurity, integration)
- Legal (Personal Data Protection Act, Ministry of Health rules, industry regulation)
- Environmental (green computing, paper reduction)

Match the **question's outcome** to the letter, not the means: "automation reduces cost" = Economic; "integrates with systems" = Technological; "staff resist" = Social; "violates law" = Legal.

**Disruptive technologies:** substitutes that perform as well or better; sweep industries. 9 examples include the internet, digital photography, smartphone, Internet of Things, mobile payments, 3D printing, artificial intelligence / machine learning, blockchain, generative AI.
**4 adaptation strategies** (no strategy = death: Kodak, Blockbuster, Nokia):

- Fight back (meet it head-on: carmakers building electric vehicles)
- Double down (deepen the existing strength: Rolex)
- Retrench (defensive survival: taxi industry lobbying against Grab)
- Move away (pivot: IBM sold its PC business, moved to cloud/AI)

**Two-way organisation and IS relationship:** <mark>D1 = organisational features drive the choice of information system</mark> (Bytedance → Workday; a bakery → Xero). <mark>D2 = the information system forces structural change</mark>, 3 axes: new **roles**, new **processes**, new **power**/access. Economic impacts: transaction costs fall (external dealings cheaper, outsourcing viable) · agency costs fall (monitoring cheaper → flatter hierarchy, wider span of control). Behavioural impacts: organisational flattening · postindustrial shift (authority from expertise, not position) · **resistance to change** = the biggest reason information-system projects fail.

**Mintzberg's 5 organisational structures:**

- simple structure (startup)
- machine bureaucracy (factory, standardized + centralized)
- divisionalized bureaucracy (GE, Samsung)
- professional bureaucracy (hospital, standardized expert skills)
- adhocracy (consulting firm, fluid teams, rapid innovation)

**Features of organizations:** all are bureaucracies with clear division of labor, impartial decision making, efficiency principle · routines and business processes (routine → process → firm chain, see term dictionary) · organizational politics · organizational culture · structure (Mintzberg) · environments. **Environments:** reciprocal relationship, environments change **faster** than organizations; information systems act as an environmental-scanning **lens** (track competitors, customer sentiment).

**Resistance to change, 4 factors it centers on:** nature of the innovation · structure of the organization · culture of the organization · tasks impacted. **Implications for IS design, factors to evaluate before building:** environment · organizational structure (hierarchy, specialization, routines) · culture and politics · type of organization and leadership style · groups affected · nature of the tasks the system will assist.

**Strategic IS characteristics (Quiz 3 Q1, past miss):** create deep organisational changes · often affect ALL business processes · may require cross-department coordination · do NOT mainly automate routine tasks (that's TPS) · <mark>advantages are NOT long-term/sustainable (increasingly temporary - this is the trap statement)</mark>.

**Strategic IS challenges:** socio-technical change (technology + culture together, Sharp's Yammer case) · competitive advantage paradox (advantages get copied fast, so they are temporary) · business-IT alignment (only ~25% of firms achieve it, yet up to 50% of profits linked to alignment - Luftman; ComfortDelGro lagging Grab) · managing strategic transitions (transform while still running). Solutions: active management participation · measure IT impact ("you can't manage what you can't measure").

---

## 5. IS Types and Enterprise Applications (L2)

**Business model / business process / information system rule:** "subscription service, revenue strategy" → business model · "step-by-step, manage billing" → business process · "database, technology" → information system. **Slide 12-13 verbatim (prof recycles):** "Netflix subscription streaming" = business model · "Netflix manages content acquisition or subscriber billing" = business process (no keyword present - classify by function: it is running an operation) · "ABC Bank centralised database" = information system.

**IS as enabler:** automating (faster) · learning (better) · strategising (smarter).

**Business process reengineering (BPR):** analysis + radical redesign of workflows (not just automating the old ones). Canonical example: credit-card approval 3 weeks → 4 days → immediate (digital card). vs BPM: BPR = rip up and restart, one-shot · BPM = maintain and improve, loop (full decision rule → **§1b**).

**6 strategic business objectives of IS:**

- operational excellence (Walmart Retail Link)
- new products, services, business models (Apple iTunes)
- customer & supplier intimacy (Mandarin Oriental)
- improved decision making
- competitive advantage
- survival (Barclays ATM, must-adopt-or-die)

**The 4 IS types (Slide 42, scenario classification):**

| System | Users | Nature | Example |
|---|---|---|---|
| **Transaction processing (TPS)** | operational staff | **routine, structured, predefined**; records daily transactions | order entry, payroll, shipping |
| **Management information (MIS)** | middle mgmt | **routine predefined reports** built from TPS data | weekly sales by region |
| **Decision support (DSS)** | middle mgmt | **non-routine what-if** modelling (**sensitivity analysis**: change one input, watch the output) | simulate supplier-switch cost |
| **Executive support (ESS)** | senior mgmt | strategic dashboards, internal + **external** data, drill-down | 5-year market trends |

Slide-42 trap: "what-if analysis on production capacity" = decision support system (non-routine + middle management + modelling), **not** management information system.

**Enterprise applications (span functions, all levels):**

- enterprise resource planning (ERP): integrates manufacturing + finance + sales + human resources into **one** system (fragmented → unified, single data repository)
- supply chain management (SCM): supplier coordination, lower operations cost
- customer relationship management (CRM): retention, personalization, sales pipeline
- knowledge management system (KMS): capture and share knowledge, onboarding, innovation
**ERP case skeleton (BrightTech-style):** departments run separate systems → data re-entry, inconsistency, slow reporting → enterprise resource planning = single integrated platform + one database → real-time cross-department visibility, eliminated redundancy; risks = cost, disruption, change management, training.

**ERP implementation order (9 steps):** analyse processes & requirements → build-vs-buy + vendor selection → business process redesign → configure (modules · roles · rules) → data migration & integration → testing (end-to-end) → training & change management → conversion/cutover (parallel · phased · pilot · direct, table §1b) → maintain & evaluate. Hook: **A**nalyse **B**uy **R**edesign **C**onfigure **M**igrate **T**est **T**rain **C**utover **M**aintain.

---

## 6. Decision Making and Business Intelligence (L9)

**Decision types × organisational level:** see term dictionary. Airline anchors: expand routes = senior/unstructured · daily crew assignment = operational/structured · aircraft type for a route = middle/semi-structured · ticket pricing strategy = senior/**semi**-structured (trap: senior level but semi) · emergency weather diversion = operational/**semi**-structured · merge with competitor = senior/unstructured · routine maintenance = operational/structured · overtime approval = middle/**structured**.

**Simon's 4 stages of decision making:** Intelligence → Design → Choice → Implementation (monitoring lives **inside** implementation, it is not a 5th stage).

**3 reasons IT/IS investments fail to improve decisions:** information quality · management filters (selective attention, bias) · organizational inertia & politics.

**High-velocity automated decisions:** an algorithm fully defines a highly structured decision, humans removed from the loop (DBS Quick Finance, Lazada/Shopee dynamic pricing).

**Business intelligence environment, 6 elements in order:**

1. data from the business environment
2. business intelligence infrastructure
3. business analytics toolset
4. managerial users & methods
5. **delivery platform (management information / decision support / executive support systems)**
6. user interface

**6 business-intelligence analytic functions:** production reports · parameterized reports · dashboards/scorecards · ad hoc query/search · drill-down · forecasts/scenarios/models. **Predictive analytics:** statistical analysis + data mining + historical data + assumptions (credit scoring, marketing-campaign response, fraud detection). **Text mining** = extract patterns/sentiment from unstructured text (emails, reviews, call transcripts) · **web mining** = mine web content, structure (links), and usage (clickstream).

**Executive support system extras:** balanced scorecard, 4 dimensions: financial · business process · customer · learning & growth (key performance indicators measure each). Business **performance** management (this L9 BPM is not business **process** management) translates strategy → operational targets → key performance indicators. Executive-support-system data = internal + **external** + drill-down. **Group decision-support system (GDSS)** = unstructured decisions made by a **group** (collaboration rooms, anonymity, idea ranking).

**Operational intelligence:** business activity monitoring, real-time analytics on operations, sensor / Internet-of-Things data streams (PSA Singapore smart port: real-time container tracking). **Location analytics / geographic information systems (GIS):** business insight from the location component of data (phones, sensors, map data); GIS ties data to maps (Singapore Land Authority OneMap).

**Emerging trends in business intelligence:** artificial intelligence / machine learning (automated insights, natural-language queries) · augmented analytics (AI-assisted data preparation, automated pattern detection). **Challenges implementing BI:** data quality and integration · analytics skills gap · balancing automated vs human decisions · ethics of data use (GDPR, PDPA).

---

## 7. Ethics and Legal (L5)

**Five moral dimensions of the information age:**

- information rights (privacy, Personal Data Protection Act / General Data Protection Regulation)
- property rights (intellectual property: copyright, patent, trademark, trade secret, Digital Millennium Copyright Act)
- system quality (software bugs, hardware failure, poor input data)
- quality of life (digital divide, work-life erosion, repetitive strain injury, computer vision syndrome, technostress)
- accountability & control (who is liable when software fails)

**Five-step ethical analysis:** 1 identify the facts → 2 define the dilemma + higher-order values → 3 identify stakeholders → 4 identify options → 5 identify consequences.

**Ethical rules (prof taught first 2; rest = textbook six):** Golden Rule ("do unto others…") · Slippery Slope (if not repeatable, not right at all) · Kant's categorical imperative (if not right for everyone, not right for anyone) · utilitarian principle (highest / greatest value action) · risk aversion principle (least harm / lowest cost) · no free lunch (assume all created things are owned; value has a price). **Technology trends raising ethical issues:** computing power doubling every ~18 months · cheap storage enabling profiling · nonobvious relationship awareness (NORA) · mobile tracking without consent. Classic dilemma: convenience vs autonomy (employee monitoring).

**Singapore laws:** Personal Data Protection Act (PDPA: personal data collection, use, disclosure) · Computer Misuse Act 1993 (unauthorized access or modification, hacking) · Cybersecurity Act 2018 (protects critical information infrastructure; Cybersecurity Code of Practice 2022). **Critical information infrastructure = 11 sectors:** energy, water, banking & finance, healthcare, land transport, aviation, maritime, info-communications, media, security & emergency services, government.

**Application shortcuts (T4 lesson):** customer-data misuse → property rights + information rights · employee surveillance → quality of life · algorithmic harms → accountability & control.

**Match-it pairs (prof's own L5 quiz, high recycle odds):** competitive advantage paradox = <mark>strategic IS advantages become temporary once copied</mark> · business-IT alignment = tech investment supports business objectives (only ~25% achieve) · nonobvious relationship awareness (NORA) = combines multi-source data to find hidden connections · Personal Data Protection Act = Singapore personal-data law · critical information infrastructure = systems essential for national services (Cybersecurity Act) · socio-technical change = integrating tech change with organizational culture/behaviour (Sharp Yammer) · Golden Rule = "do unto others as you would have them do unto you".

**AI ethics vocabulary (T4 Amazon case, exam-trend topic):** black-box decision-making (opaque model, outcome can't be explained) · algorithmic transparency (duty to make it explainable) · human-in-the-loop (human keeps the final decision) · accountability = who answers when the algorithm harms.

---

## 8. Foundations (L1)

**Information system definition (CPSD):** interrelated components that Collect, Process, Store, Distribute information to support decision making and control. **Data flow (IPOF):** Input → Processing → Output → Feedback.

**3 dimensions of information systems:** technology · organization · management, **all equally critical** (trap: "which is most important" → none, this is the sociotechnical view).

**Business-IS interdependence:** growing two-way dependence between the ability to use IT and the ability to implement corporate strategy; IT limitations restrict business options, IT innovations enable new business models.

**Reading an MIS report (arithmetic question routine):** 1 read the column headers first · 2 check the asked scope: "overall / across / total" = **sum numerators and denominators over the rows first**, then divide; never lift a single row's ratio · 3 distrust any answer choice that equals one visible cell (planted distractor) · 4 check units and per-cent vs absolute before answering.

**Complementary assets:** technology alone is insufficient; you need supportive culture + training + process redesign (TrendyThreads failed: staff ignored the AI tool, stock not synced, customer journey unchanged).

**3 drivers of IS change:** cost reduction · customer satisfaction · competition. **3 constraints:** disruptions · IS limitations · external pressures. Competitor-caused change → competition driver (Rednote/TikTok). Quiz trap: the pandemic IoT-retail answer combined TWO drivers at once (competition + customer satisfaction) - drivers can co-occur, don't force a single one.

**Adopter-centric rule:** analyse the <mark>**adopter's** organisation, management and assets, not the vendor's</mark>. Vendor-centric analysis = the planted wrong option.

**Stakeholders (5 groups):** customers, suppliers (transactions) · stockholders, regulators (governance) · competitors (market pressure). **Approaches to studying IS:** technical · behavioural · sociotechnical (preferred). Supporting fields: operations research (process optimisation, resource allocation) · legal studies (privacy, IP, liability).

---

## 9. Six-Mark Essay Skeletons

**A. "Was this breach a failure of people, process, technology?" (L8):**
- People: name the human failure from the case (fell for phishing, ignored alerts, weak awareness) → weakest link
- Process: name the missing procedure (no incident-response escalation, no patch cycle, no vendor service-level-agreement clarity)
- Technology: name the missing tool (no multi-factor authentication, no intrusion detection / security monitoring, unpatched flaw, no encryption)
- Close: all three must work together; none sufficient alone; propose one fix per layer.

**B. "Which CIA dimension was compromised?" (L8):**
- Name the dimension with case evidence (records exfiltrated = confidentiality)
- State which dimensions were **not** hit (data unaltered = integrity intact; systems kept running = availability intact)
- Conclusion: a data-theft attack, not destructive; controls to restore (encryption, access control).

**C. "Recommend build vs buy for this organisation" (L4):**
- Classify the task (strategic / critical / routine) → default answer
- Walk the 4 considerations with case facts (uniqueness, resources, market solutions, risk)
- State the acquisition mode (in-house build / commercial off-the-shelf / software as a service / outsource) + one risk of your choice + its mitigation.

**D. "Apply PESTLE to this acquisition" (L4):** one line per letter (Political, Economic, Social, Technological, Legal, Environmental) with a case-specific fact; remember both E's; anchor Political vs Legal by policy-vs-written-law framing.

**E. "Which system for this manager?" (L2/L9):** identify the decision type (structured / semi-structured / unstructured) → who decides → map to transaction processing / management information / decision support / executive support system → justify with the scenario's keywords ("what-if" = decision support; routine report = management information; external data + strategic = executive support).
