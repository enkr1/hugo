---
title: "The Hard Parts Get Harder: Do Bainbridge's Ironies of Automation Apply When an LLM Does the Typing?"
slug: "the-hard-parts-get-harder"
date: 2026-10-26T15:18:42+08:00
subtitle: "A research note on Bainbridge's 1983 ironies of automation, what cockpits and coding trials say about skill fade, and why the honest answer is conditional"
description: "A research note on Bainbridge's 1983 ironies of automation and whether they apply to programmers who delegate execution to LLMs."
tags:
  - research
  - ironies-of-automation
  - bainbridge
  - ai
  - llm
  - skill-fade
  - debugging
  - learning
  - programming
categories:
  - ["Technology", "AI"]
keywords:
  - ironies of automation
  - lisanne bainbridge
  - skill fade
  - automation complacency
  - deskilling
  - ai-assisted programming
  - debugging skill
  - ai-native developer
  - out of the loop
image: ""
comments: true
draft: false
---

> this one came out of writing [this week's journal]({{< ref "journals/journal-261026" >}}), where i noticed that the more ai-native i get, the less sure i am that my experience is still growing. i asked my AI to dig into it: three research agents plus a report writer, with the sources checked against the primary papers rather than the summaries. several things i thought i knew turned out to be misattributed, which is why the "where people get this wrong" section is longer than i planned. the personal note at the bottom is mine to write after.

## tl;dr

- bainbridge's 1983 argument half-transfers to programmers who delegate execution to LLMs. the conditional version holds up. the strong version, "ai-native work freezes your growth", has no longitudinal evidence either way.
- what decays in the evidence is cognitive, not manual: tracking where you are, deciding what comes next, diagnosing output that is wrong. that is close to a definition of debugging.
- how you engage with the tool matters more than whether you use it. self-assessment is unreliable, so do not trust your own feeling that you are fine.
- aviation's fix, and bainbridge's own, was forced periodic practice of the degraded mode. nobody knows the right dose.

## the question

my journal said something i believe but cannot prove: once everyone is ai-native, everyone's experience level stagnates, because experience came from the struggle and the struggle is now delegated. i can still explain the websocket afternoon and the pdf-chunk night because i lived them. a model cannot hand me that.

so the question for this note is narrow. do bainbridge's ironies of automation apply to a programmer who now delegates execution to LLMs, and does becoming ai-native actually freeze the growth of experience? i went in expecting a clean yes. the evidence does not give one.

## what bainbridge actually wrote

lisanne bainbridge's "ironies of automation" (1983) is five pages. it is a synthesis of process-control and flight-deck studies, it contains no data of its own, and it says nothing about software or knowledge work. her own scope line: she is "particularly concerned with control in process industries, although examples will be drawn from flight-deck automation".

her argument, stripped down:

1. the designer who automates the operator away still leaves them the tasks the designer could not think how to automate.
2. skills decay without use. physical skills "deteriorate when they are not used, particularly the refinements of gain and timing", and cognitive knowledge "develops only through use and feedback".
3. an operator who takes over has not built the working picture of the process that a hands-on operator assembles continuously.
4. monitoring is a bad job for humans. the system was installed because it does the work better than the operator, "yet the operator is being asked to monitor that it is working effectively".

and the line the whole note is named after: "By taking away the easy parts of his task, automation can make the difficult parts of the human operator's task more difficult."

her remedies were modest and about practice: hands-on control for a short period in each shift, simulators, and automation that exposes its failures and decides "using methods and criteria, and at a rate, which the operator can follow". she was not optimistic that most fixes escape the problem.

## a real one: the cockpit, then the debugging gap

aviation is the worked example because it is the one place where somebody measured what fades.

**the cockpit.** casner and colleagues (2014) put 16 experienced 747-400 pilots in a simulator and took the automation away in stages. the hands held up. instrument scanning and manual control were "mostly intact, even when pilots reported that they were infrequently practiced", with some rustiness. the head did not. flying a conventional VOR arrival, approach and missed approach without the flight computer, only 1 of 16 pilots finished with no operationally significant error, and 7 of 16 got the missed approach point wrong. after an unreliable airspeed event, 94% approached a stall. the authors' diagnosis is the part that matters: the errors were not forgotten procedures but a failure "to periodically reference the charted procedure, assess where they were, and determine what needed to happen next".

then the twist. task-unrelated thought (mind wandering) was highest when the autoflight was doing everything: 20.0% of the time, against 6.9% when flying raw data. it correlated with navigation errors (r = .56) and with stick-shaker events (r = .76), and it did not correlate with hand-flying errors. "pilots who kept their minds on task more performed better." so the protective variable looks less like "how much automation" and more like "were you following along while it flew".

caveats: 16 pilots, cross-sectional, practice is self-reported, correlations are not causal. haslbeck and hoermann's 126-pilot study qualifies the hands result a little: recent practice predicted raw-data approach accuracy better than total experience. body skills fade slowly, not never.

**the coding trial.** shen and tamkin (2026, anthropic fellows) ran a preregistered trial with 52 mostly junior developers learning an unfamiliar python async library (trio). the AI group scored about 50% on a later quiz taken without AI, against about 67% for the people who coded by hand. no significant speed gain. and the gap was largest on debugging questions.

<figure style="margin:1.6rem 0">
<svg viewBox="0 0 620 320" role="img" aria-label="Unassisted quiz score after learning a new library, hand-coders about 67 percent, AI-assisted about 50 percent" style="width:100%;max-width:620px;height:auto;font-family:inherit;display:block;margin:0 auto">
<text x="310" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">Unassisted quiz score after learning a new library</text>
<line x1="70" y1="270" x2="580" y2="270" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="70" y1="212.5" x2="580" y2="212.5" stroke="currentColor" stroke-opacity="0.10"/>
<line x1="70" y1="155" x2="580" y2="155" stroke="currentColor" stroke-opacity="0.10"/>
<line x1="70" y1="97.5" x2="580" y2="97.5" stroke="currentColor" stroke-opacity="0.10"/>
<line x1="70" y1="40" x2="580" y2="40" stroke="currentColor" stroke-opacity="0.10"/>
<line x1="70" y1="40" x2="70" y2="270" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<text x="62" y="274" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">0%</text>
<text x="62" y="216.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">25%</text>
<text x="62" y="159" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">50%</text>
<text x="62" y="101.5" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">75%</text>
<text x="62" y="44" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">100%</text>
<rect x="170" y="115.9" width="120" height="154.1" fill="#3b82f6"/>
<rect x="360" y="155" width="120" height="115" fill="#f97316"/>
<text x="230" y="108" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">about 67%</text>
<text x="420" y="147" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">about 50%</text>
<text x="230" y="292" text-anchor="middle" font-size="12" fill="currentColor">coded by hand</text>
<text x="420" y="292" text-anchor="middle" font-size="12" fill="currentColor">coded with AI</text>
</svg>
<figcaption>Arm means as reported in Anthropic's write-up of Shen and Tamkin (52 developers, 26 per arm, Cohen's d = 0.738, p = 0.010). The exact means are only in the paper's figures, so read the bar heights as "about".</figcaption>
</figure>

put the two together and the "hard parts get harder" claim has its best-supported transfer. casner's biggest failures were tracking and diagnosis, shen and tamkin's biggest gap was debugging. one detail worth keeping: the hand-coders hit more errors along the way (median 3 against 1 for the AI group). that makes "the struggle is what teaches" plausible, but the trial did not test it.

the same shape shows up outside programming. in a field trial of nearly 1,000 turkish high school students, unrestricted GPT-4 raised practice scores by 48% but lowered unassisted exam scores by 0.054 (about 17% of the control mean), while a tutor with guardrails raised practice scores by 127% and left exam scores unchanged (bastani et al., PNAS 2025). the students in the unguarded arm did not perceive that they had learned less. notice what the good tutor bought: no loss, not a gain.

## where people get this wrong

the research agents earned their keep here. several things i half-remembered, or would have written down confidently, are not what the sources say.

- **"out of the loop" is not bainbridge's phrase.** it does not appear in her paper. the term and its mechanism (a shift from active to passive processing lowering situation awareness) are endsley and kiris (1995). she says "on-line" control.
- **"operators need more training, not less" is a paraphrase.** her actual line is conditional: it is the most successful automated systems, "with rare need for manual intervention", which may need the greatest investment in operator training. keep the condition, because it matters in the next section.
- **air france 447 is not a clean skill-fade case.** the BEA report does not say automation eroded the pilots' skills; a full-text search of it found no such statement. it says the copilots had not trained at high altitude for the unreliable-airspeed procedure or for manual handling, and the stall warning sounded for 54 seconds without either pilot identifying a stall. that is a handover failure, surprise plus no practice at the degraded mode, not a measured decay curve.
- **asiana 214 is the cleaner statement.** the NTSB found a pilot with 9,684 hours who "lacked critical manual flying skills" and concluded that "without greater opportunity for pilots to manually fly the airplane, their airplane handling skills degrade". even that is the board's inference from one pilot, company policy and interviews, not a measurement. one transferable detail: an instructor said pilots avoided manual flying "because of concern that they would do something wrong". the unpractised avoid the task, which keeps them unpractised.
- **the "17" is percentage points.** in the coding trial it is the gap between two arm means (67 minus 50). it is not a 17% relative drop, and it is a different 17 from the turkish students' 17%, which is relative to the control mean. same digits, different units.
- **the delegation versus conceptual-inquiry split is post-hoc.** shen and tamkin sorted the AI group into usage patterns after seeing the data. "ai delegation", "progressive ai reliance" and "iterative ai debugging" scored under 40%, while "conceptual inquiry", "hybrid code-explanation" and "generation-then-comprehension" scored 65% or more. but those cells hold 2 to 7 people each, and people who already understood may simply choose to ask conceptual questions. it is a hypothesis, not a causal result.
- **the famous "brain" study is weaker than its coverage.** the MIT "your brain on chatgpt" paper has 54 participants (18 in the crossover session), is still a preprint, has been criticised on its statistics, and its lead author says it cannot show long-term effects.
- **the regulators acted on risk logic, not decay data.** an FAA working group found a manual handling error in over 60% of the accident reports it reviewed, but conceded that "few were able to provide direct evidence because specific data on manual handling skills usually are not collected". FAA guidance declines to set manual-flying quotas "unless based on scientific evidence". nobody knows the dose that keeps a skill alive.

## when it applies (and when it doesn't)

what survives the scrutiny is a conditional claim. the risk is concentrated where delegation replaces understanding rather than typing.

**where it applies.** novices learning something new while delegating (two randomised trials point the same way, plus a meta-analysis of 23 programming studies where the productivity effect was significant, g = 0.33, but the learning effect was indistinguishable from zero, g = 0.14 with a wide interval). and anyone who lets passive supervision replace active following-along, which is casner's mind-wandering pilots.

**where it is weaker, and this part is my inference, not a finding.** bainbridge's sharpest claims are about rare failures. her own training irony is conditional on "rare need for manual intervention", and she notes that where alarms are frequent the operator "will have a large amount of experience of controlling and thinking about the process as part of his normal work". LLM output is wrong often, which keeps a supervisor in constant contact with errors. and code is checkable: you can run it, so the "impossible task" of verifying a faster, better decision-maker is partly replaced by testable output. neither point has been tested in programmers.

**what nobody knows.**

- whether expert skill erodes over months or years of LLM delegation. no study tracks it. the one longitudinal source i found is a six-month, 95-person questionnaire study, and it measures perception, not skill.
- the dose. general skill-decay meta-analyses put the half-loss of acquired accuracy at about 6.5 months of non-use (tatel and ackerman 2025), but those are mostly lab and military tasks, not programming, and they measure non-use rather than automation.
- whether someone who already holds the mental models loses them at the same rate as a novice who never built them. the survey evidence from lee et al. (CHI 2025) points the other way for confident people, but only correlationally.
- self-assessment is not a way out. the turkish students did not notice their loss, and in METR's 2025 trial experienced maintainers were 19% slower with AI on their own repositories while believing they were about 20% faster.

two notes of mine sit on the delegation side of this, so they are worth a look rather than a conclusion. [if you can't write it clearly you don't understand it]({{< ref "posts/book-how-to-take-smart-notes" >}}) is ahrens's argument for why writing your own notes is the learning, and [the capture-knowledge skill]({{< ref "posts/second-brain-claude-code" >}}) is a setup that drafts notes for me. they are two ends of the same dial.

three follow-up notes are coming, each taking one strand of this further: desirable difficulties (why the struggle might be doing the teaching), tacit knowledge (what you know that you cannot write down), and the illusion of explanatory depth (why feeling that you understand is a poor instrument).

## key takeaways

- the ironies **half-transfer**. the mechanism (less practice leads to a worse takeover) is credible. the conditions that made it severe in cockpits (rare failures, uncheckable decisions) are weaker for LLM-written code.
- the skills at risk are **cognitive, not manual**: where am i, what comes next, why is this output wrong.
- **how you engage matters more than whether you use the tool.** asking for explanations, generating then comprehending, and guardrailed tutors preserved learning in the trials. pure delegation did not.
- **self-assessment is unreliable.** feeling fine is not evidence of being fine.
- **there is no longitudinal evidence.** "ai-native freezes your growth" is a hypothesis with direct support in aviation and in novice experiments, not a measured outcome for experienced programmers.
- the one remedy with a track record is **forced, periodic practice of the degraded mode**, which is both aviation's fix and bainbridge's own. the right dose is unknown.

## a personal note

wip ...

## sources and further reading

- bainbridge (1983), [ironies of automation](https://doi.org/10.1016/0005-1098%2883%2990046-8), Automatica 19(6). [free pdf copy](https://ckrybus.com/static/papers/Bainbridge_1983_Automatica.pdf).
- endsley and kiris (1995), [the out-of-the-loop performance problem and level of control in automation](https://api.crossref.org/works/10.1518/001872095779064555): where the phrase and the mechanism come from.
- casner, geven, recker and schooler (2014), [the retention of manual flying skills in the automated cockpit](https://gwern.net/doc/technology/2014-casner.pdf), Human Factors 56(8). [publisher page](https://journals.sagepub.com/doi/10.1177/0018720814535628).
- haslbeck and hoermann (2016), [flying the needles: flight deck automation erodes fine-motor flying skills among airline pilots](https://elib.dlr.de/104258/) (DLR record), Human Factors 58(4).
- BEA, [air france 447 final report](https://www.faa.gov/sites/faa.gov/files/f-cp090601.en_.pdf) (FAA-hosted copy).
- NTSB, [asiana 214 accident report, AAR-14/01](https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR1401.pdf).
- FAA, [PARC/CAST working group report, the source of the 60% figure](https://www.faa.gov/sites/faa.gov/files/aircraft/air_cert/design_approvals/human_factors/OUFPMS_Report.pdf) and [SAFO 17007](https://www.faa.gov/sites/faa.gov/files/2022-11/SAFO17007.pdf).
- shen and tamkin (2026), [how AI impacts skill formation](https://arxiv.org/abs/2601.20245), with anthropic's [plain-language write-up](https://www.anthropic.com/research/AI-assistance-coding-skills).
- bastani et al. (2025), [generative AI without guardrails can harm learning](https://pmc.ncbi.nlm.nih.gov/articles/PMC12232635/), PNAS.
- kestin et al. (2025), [the Harvard physics crossover trial](https://pmc.ncbi.nlm.nih.gov/articles/PMC12179260/), Scientific Reports: a scaffolded tutor beat active learning on an immediate post-test, with no retention test.
- lee et al. (2025), [the impact of generative AI on critical thinking: self-reported reductions in cognitive effort and confidence effects](https://advait.org/files/lee_2025_ai_critical_thinking_survey.pdf), CHI 2025.
- simkute et al., [ironies of generative AI: understanding and mitigating productivity loss](https://arxiv.org/abs/2402.11364): bainbridge applied to copilot-era programming. a synthesis, not a test.
- arthur et al. (1998), [skill decay meta-analysis](https://www.gwern.net/doc/psychology/spaced-repetition/1998-arthur.pdf), and tatel and ackerman (2025), [procedural skill retention and decay: a meta-analytic review](https://pubmed.ncbi.nlm.nih.gov/40455501/).
- METR, [early-2025 AI and experienced open-source developers](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) and its [2026 follow-up](https://metr.org/blog/2026-02-24-uplift-update/).
- the MIT "your brain on chatgpt" preprint, [arXiv:2506.08872](https://arxiv.org/abs/2506.08872), with a [methodological critique](https://arxiv.org/pdf/2601.00856).
- maier et al., [meta-analysis of 23 programming studies](https://arxiv.org/abs/2605.04779): productivity up, learning effect not distinguishable from zero.
