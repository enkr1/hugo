---
title: "Fluency Is Not Understanding: What the Illusion of Explanatory Depth Says About Learning With an LLM"
slug: "fluency-is-not-understanding"
date: 2026-10-30T02:21:19+08:00
subtitle: "A research note on Rozenblit and Keil's illusion of explanatory depth, why the feeling of understanding reads fluency rather than knowledge, and what search and LLMs do to it"
description: "A research note on the illusion of explanatory depth: why feeling that you understand is a poor instrument, and what AI does to it."
tags:
  - research
  - illusion-of-explanatory-depth
  - metacognition
  - learning
  - ironies-of-automation
  - ai
  - llm
  - programming
categories:
  - ["Education", "Psychology"]
  - ["Technology", "AI"]
keywords:
  - illusion of explanatory depth
  - rozenblit and keil
  - metacognition
  - feeling of understanding
  - processing fluency
  - illusions of competence
  - learning with ai
  - self-assessment
image: ""
comments: true
draft: false
---

> this is the first of the three follow-ups promised in [the hard parts get harder]({{< ref "posts/the-hard-parts-get-harder" >}}): the strand about why feeling that you understand is a poor instrument. two of my own weeks set it up. in [week 86]({{< ref "journals/journal-261012" >}}) a ten out of ten on a quiz turned out to be recognition rather than recall, and in [week 87]({{< ref "journals/journal-261026" >}}) i wrote that learning with an llm "feels like a completely diff way of learning". i asked my AI to dig into it: three research agents plus a report writer, then a pass that checked every number below against the primary papers rather than the summaries. a few figures sit in tables and pages it could not get past a bot wall to read, so they are left out on purpose. the personal note at the bottom is mine to write after.

## tl;dr

- rate how well you understand a zipper, write out how it works, rate again: the number falls. in rozenblit and keil's founding study it went from 3.89 to 2.49 on a 7-point scale, and outside raters scored the written explanations at about the lower number. it is large for how things work, small for facts, and absent for procedures and stories.
- the feeling of understanding is not a reading of what you can produce. it runs on cues that are there whether or not the knowledge is: visible parts, a familiar name, an answer in view, smooth prose. it reads fluency.
- search engines and LLMs supply those cues on tap, and there is decent evidence that they inflate felt knowledge and confidence. nobody has run the explain-then-re-rate test on something a person learnt from an LLM, so "AI gives you the illusion" is a strong prediction, not a result.
- the gauge that works is a commitment something other than you gets to grade: an explanation written before you look, a prediction the interpreter checks, a cold attempt with new numbers.

## the question

the hub ended on a warning it did not explain: self-assessment is not a way out. the turkish students in the unguarded chatbot arm did not notice they had learnt less, and METR's experienced developers believed AI had sped them up by about 20% while it slowed them down by 19%. two different feelings, one about learning and one about speed, failing in the same direction.

this note asks the narrow version of why. what is the feeling of understanding actually measuring, how far off is it, and what should i use instead?

it is not abstract for me. in week 87 i wrote that i let my llm help me understand the deeper concepts and "iterate until i know". "until i know" is a judgement made by the exact instrument this note is about. and week 86 had already shown me how far off it can be.

## what rozenblit and keil actually did

leonid rozenblit and frank keil (2002) ran twelve studies, mostly with yale students. the core procedure, on a 7-point scale for depth of understanding:

1. learn the scale from two worked examples: a crossbow, which most adults understand mechanically, and a GPS receiver, which most do not.
2. rate your understanding of 48 everyday devices: zippers, flush toilets, cylinder locks, speedometers, helicopters, quartz watches, sewing machines.
3. for four of them, write "a detailed, step-by-step causal explanation", then rate again.
4. answer a diagnostic question about each, such as how you would pick a cylinder lock, then rate again.
5. read an expert's explanation, then re-judge how much you had understood at the start.

<figure style="margin:1.6rem 0">
<svg viewBox="0 0 620 340" role="img" aria-label="Self-rated understanding of how a device works falls from 3.89 to 3.10 after explaining and 2.49 after a diagnostic question, into the 2.44 to 2.72 band that outside raters gave the same explanations" style="width:100%;max-width:620px;height:auto;font-family:inherit;display:block;margin:0 auto">
<text x="310" y="22" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">Self-rated understanding of how a device works, 1 to 7</text>
<line x1="80" y1="270.0" x2="580" y2="270.0" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<text x="72" y="274.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">1</text>
<line x1="80" y1="233.3" x2="580" y2="233.3" stroke="currentColor" stroke-opacity="0.10"/>
<text x="72" y="237.3" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">2</text>
<line x1="80" y1="196.7" x2="580" y2="196.7" stroke="currentColor" stroke-opacity="0.10"/>
<text x="72" y="200.7" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">3</text>
<line x1="80" y1="160.0" x2="580" y2="160.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="72" y="164.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">4</text>
<line x1="80" y1="123.3" x2="580" y2="123.3" stroke="currentColor" stroke-opacity="0.10"/>
<text x="72" y="127.3" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">5</text>
<line x1="80" y1="86.7" x2="580" y2="86.7" stroke="currentColor" stroke-opacity="0.10"/>
<text x="72" y="90.7" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">6</text>
<line x1="80" y1="50.0" x2="580" y2="50.0" stroke="currentColor" stroke-opacity="0.10"/>
<text x="72" y="54.0" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.7">7</text>
<line x1="80" y1="50" x2="80" y2="270" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2"/>
<rect x="80" y="206.9" width="500" height="10.3" fill="#f97316" fill-opacity="0.22"/>
<line x1="80" y1="206.9" x2="580" y2="206.9" stroke="#f97316" stroke-dasharray="4 3"/>
<line x1="80" y1="217.2" x2="580" y2="217.2" stroke="#f97316" stroke-dasharray="4 3"/>
<text x="330" y="252" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.8">outside raters scored the same written explanations 2.44 to 2.72</text>
<path d="M142.5,164.0 L267.5,193.0 L392.5,215.4 L517.5,210.6" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
<circle cx="142.5" cy="164.0" r="5" fill="#3b82f6"/>
<text x="142.5" y="153.0" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">3.89</text>
<circle cx="267.5" cy="193.0" r="5" fill="#3b82f6"/>
<text x="267.5" y="182.0" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">3.10</text>
<circle cx="392.5" cy="215.4" r="5" fill="#3b82f6"/>
<text x="392.5" y="204.4" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">2.49</text>
<circle cx="517.5" cy="210.6" r="5" fill="#3b82f6"/>
<text x="517.5" y="199.6" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">2.62</text>
<text x="142.5" y="290" text-anchor="middle" font-size="11" fill="currentColor">first rating</text>
<text x="267.5" y="290" text-anchor="middle" font-size="11" fill="currentColor">after writing</text>
<text x="267.5" y="304" text-anchor="middle" font-size="11" fill="currentColor">the explanation</text>
<text x="392.5" y="290" text-anchor="middle" font-size="11" fill="currentColor">after a</text>
<text x="392.5" y="304" text-anchor="middle" font-size="11" fill="currentColor">diagnostic question</text>
<text x="517.5" y="290" text-anchor="middle" font-size="11" fill="currentColor">first rating, re-judged</text>
<text x="517.5" y="304" text-anchor="middle" font-size="11" fill="currentColor">with the expert's version</text>
</svg>
<figcaption>Mean self-ratings of the 33 Study 2 undergraduates whose explanations were then scored, from Table 1 of Rozenblit and Keil (2002). The shaded band is what 12 independent raters gave the same written explanations in Study 5 (2.72, then 2.44 after they had read the expert versions too). The last point re-judges the first rating; a separate rating of current understanding, taken after the expert's version, went up.</figcaption>
</figure>

the ratings fell at every step until the expert's version arrived, and they fell towards an outside view. in study 5, twelve fresh raters scored the written explanations, and their scores sat with the participants' later self-ratings, not with the first one. so the drop is not people turning modest on request. it is the first rating meeting a second opinion.

two details make it hard to wave away. students at a non-selective state university showed the illusion at least as strongly as yale students, which rules out elite overconfidence. and warning people at the start that they would have to explain and answer questions took the edge off the first drop, but their ratings still ended lower than they began.

the most informative part is where it did not happen. the drop was large for devices and for natural phenomena (tides, rainbows), small for facts such as capital cities, and absent for procedures (baking cookies, say) and for film plots. same task, same scale, same kind of student. whatever the feeling reads, it misreads it for knowledge of how something works.

the objective version is lawson's bicycle study (2006). asked about the basics of how a bicycle is built, people made frequent and serious mistakes, such as believing the chain goes around the front wheel as well as the back. bicycle experts made fewer mistakes, not none.

## why the feeling reads the wrong thing

rozenblit and keil proposed four causes:

- **the parts are in the world, not in your head.** a zipper is always there to look at, so the knowledge feels to hand. mistaking "environmental support for representation", they write, "may be the single most important factor".
- **levels get confused.** knowing what a thing does, or the name of its key part, passes for knowing how it works. they call one version "label-mechanism confusion".
- **an explanation has no obvious end.** a recipe ends in a cake you can check. a mechanism can always go one level deeper, so there is no natural point at which to test yourself.
- **we rarely explain.** in their words, "people rarely explain and thus do not get sufficient feedback".

only the first has direct support, and it is correlational: across 40 devices, the more of a device's working parts were visible rather than hidden, the more overconfident people were about it.

the learning research has a general name for the trap. koriat and bjork call it foresight bias: you judge whether you have learnt something while the answer is in front of you, and you are tested with it gone. they describe that mismatch as "inherent to education", since "the answer is present at study and absent at test". and the cue the feeling runs on is ease itself. in kornell and colleagues' experiments (2011), printing a word in larger type raised people's predictions of remembering it without changing what they remembered, while extra study opportunities changed what they remembered and barely moved the predictions.

roediger and karpicke (2006) is the demonstration i keep coming back to. students learnt a prose passage on one of three schedules, then predicted how well they would remember it in a week:

| schedule | predicted memory in a week (1 to 7) | recalled a week later |
|---|---|---|
| read it four times | 4.8 | 40% |
| read it three times, then one recall test | 4.2 | 56% |
| read it once, then three recall tests | 4.0 | 61% |

the rereaders got through the passage 14.2 times on average, the tested group 3.4 times, and five minutes after studying the order of recall was the other way round. so the feeling ranked the groups by how smooth the passage felt in the moment, and a week later reality ranked them in reverse. students choose by the feeling: of 177 college students surveyed, 84% listed rereading as a study strategy and 11% listed self-testing (karpicke, butler and roediger 2009).

knowing the field does not save you. fisher and keil (2016) had college graduates rate how well they could explain topics from their own major: 4.94 before trying, 3.39 after (d = 1.0, n = 71). education made people better calibrated about everyday topics, but inside their own speciality they showed the illusion as well, and the authors trace it to not noticing how much detail had been forgotten. that one is uncomfortable next to my own week 87, which says of the websocket afternoon and the pdf-chunk night: "even now, i can explain them". it is the same shape of confidence, about something learnt in depth a while ago. the cheap test is to write one of them out, step by step, and see where it stops.

## a real one: the ten out of ten

the best worked example i have is my own. in week 86 i took a quiz i had scored ten out of ten on, rewrote it as ten fresh-number variants written out in full, and sat them cold and timed. it showed that the ten out of ten had been recognition rather than recall.

mapped onto the research, each change took away one of the cues the feeling had been running on:

- **fresh numbers** removed the familiar surface. with the original numbers, an answer i had seen could pass for an answer i could produce, which is koriat and bjork's mismatch exactly: the answer present when i judged, absent when i was tested.
- **written out in full** is rozenblit and keil's step three. you cannot write down a step you do not have, so the gap shows up on the page instead of hiding behind "yeah, i know this one".
- **cold** added a delay. judgements of how well you have learnt something are much better at separating what you know from what you do not when they are made a while after studying rather than straight away: a meta-analysis of 112 effect sizes puts the gain in accuracy at g = 0.93 (rhodes and tauber 2011).
- **timed** made it exam-shaped. no lingering over a question until something looks familiar.

none of it needed a lab. it is the rozenblit and keil protocol pointed at a quiz, and it came out the way the protocol predicts.

## what search and LLMs do to the gauge

if the feeling runs on fluency and availability, tools that supply both on tap should push it up. the evidence mostly says they do, with one important gap.

**search came first.** across nine experiments, fisher, goddu and keil (2015) found that searching the internet for explanations made people "mistake access to information for their own personal understanding of the information": they rated their own knowledge higher afterwards, including on topics they had not searched, and picked brain scans showing more activity as pictures of their own brains. ward (2021, eight experiments, n = 1,917) found the same with google: users grew more confident in their own ability to think and remember, and predicted they would know more later without the internet. his explanation fits an LLM even better than a search box: search is often faster than memory and "delivers information seamlessly", with few cues that the knowledge came from outside. one caution: these studies mostly measure confidence and predictions, not later performance.

**then LLMs.** the closest the founding paper comes to an LLM session is its last step: after reading an expert's explanation, participants said their understanding had risen dramatically. nobody checked whether it had. that is the shape of a good chat answer, and it is my inference, not a finding, that it carries the same risk. what has been measured:

- fernandes and colleagues (2026) had people solve 20 LSAT logic problems with chatgpt. they scored about three points better than a norm group and overestimated their own score by about four. the usual dunning-kruger pattern disappeared with AI, and people with more AI literacy were less accurate about themselves, not more. read the paper's own numbers before the headline, though: in its second study the group without AI overestimated by about as much (3.9 points against 3.8). so AI did not add a new bias. it lifted scores and confidence together, and the extra competence bought no extra self-knowledge.
- steyvers and colleagues (2025) found that longer LLM explanations made people more confident in the answers even when the extra length did nothing for the answers' accuracy, and that people were worse than the models' own confidence at telling right answers from wrong ones.
- in code, the sharpest recent number is a preprint. kaufman and colleagues (2026) had 86 python programmers judge assertions an LLM had written. they judged the correct ones correctly 74% of the time and the incorrect ones 49%, a coin flip, with similar confidence in both, and a low-quality explanation alongside made them less accurate and more confident.

the one study that ran the explain-and-re-rate protocol on an AI interface is chromik and colleagues (2021): people explored a model's explanations of loan default risk, then explained the model in their own words, predicted its outputs, and saw their predictions scored. by the end, 63% of a supervised group (n = 40) and 72% of crowd workers (n = 107) rated their understanding lower than they had after exploring. where it dropped is the interesting part. in the supervised group, 48% dropped after explaining. among the crowd workers only 25% did, not a significant drop; their ratings mostly held until they saw their scored predictions, and then 67% dropped.

and the gap: nobody has run explain-then-re-rate on knowledge people learnt through an LLM. "i learnt it from the model and only think i understand it" is the obvious prediction from everything above, and it is still a prediction.

this is where it meets the hub. bainbridge's monitoring irony was an operator asked to watch a system that does the job better than they do, with nothing independent to check it against. when i learn with an LLM, my feeling of understanding is the monitor, and these results say it carries little signal about the thing it is meant to watch.

## where people get this wrong

- **it is not the dunning-kruger effect.** dunning-kruger is a between-person pattern, the least skilled overestimating most, and gignac and zajenkowski (2020) argue it is mostly a statistical artefact, a claim that is itself contested. the illusion of explanatory depth is a within-person change, checked against control domains and outside raters, and it does not need low-skill people to show up. the critiques of one do not carry over to the other.
- **part of the drop is just being asked twice.** meyers and colleagues (2023, three preregistered experiments) found that people who only copied out a paragraph also rated their understanding lower the second time, by about half as much as people who explained. explaining something unrelated lowered it too: trying to explain how a zipper works made people report knowing less about how snow forms. so the defensible claim is that explaining lowers the rating more than re-rating does, not that every point of the fall is exposed illusion.
- **the famous downstream result did not replicate.** fernbach and colleagues (2013) reported that explaining how a policy works made people's political positions less extreme. three preregistered replications (crawford and ruscio 2021, n = 306, 405 and 343) found that people did report understanding the policies less after explaining, but their positions were no less extreme. the authors' summary works for the whole field: explaining "increases people's recognition of their ignorance but is unlikely to increase their political moderation".
- **an AI's explanation is not your understanding.** in bansal and colleagues (2021), explanations "increased the chance that humans will accept the AI's recommendation, regardless of its correctness", and did not improve how the human and AI performed together. an explanation is a fluency cue like any other.
- **the einstein quote and the feynman technique are folklore.** "if you can't explain it simply, you don't understand it well enough" is usually pinned on einstein. quote investigator, tracing the older barmaid version of the idea, found it credited to rutherford in 1955 (after his death) and to einstein only from 1979, and calls the einstein link spurious. the research found nothing showing feynman named or described the four-step "feynman technique" either; the nearest real story is david goodstein recalling feynman failing to turn a topic into a freshman lecture and concluding that it was not really understood. the principle is fine. what the slogan leaves out is the hard part: somebody or something other than the explainer has to do the grading.

## what actually tests it

every study that moved the feeling towards the truth had the same two parts: you commit to an answer before you see one, and something other than you scores it.

1. **write the explanation before you look anything up.** step by step and causal, every "and then it just works" turned into a step. that is rozenblit and keil's probe, and the point of [the smart notes post]({{< ref "posts/book-how-to-take-smart-notes" >}}): the act of writing reveals the gaps. then check it against something outside your head, the docs or an expert's version, the way their participants re-judged against the expert's text.
2. **answer a diagnostic question.** in the founding study it took the rating down again, from 3.10 to 2.49, after the explanation had already done its work. for code: what happens if this promise rejects, what does this print on an empty list, what breaks first under load.
3. **predict, then run.** a programmer's cheapest grader is the interpreter. chromik's crowd workers lost the illusion when their predictions were scored, not when they explained. in a small, non-randomised study of two sections of an intro programming course, students who had to work out the expected output of a test case before writing any code finished the task 76% of the time, against 53% for the section that did not (prather and colleagues 2019). it is what the [microtasks note]({{< ref "posts/microtasks-jump-the-queue" >}}) did: every printed order run in node instead of recalled.
4. **change the numbers, and wait.** fresh variants sat cold are the week 86 move. new numbers take away the answer you recognise, and a delay is what makes a self-judgement informative.
5. **think before the AI answers.** buçinca, malaya and gajos (2021) tested cognitive forcing designs, such as deciding before the AI's suggestion appears, and found they cut reliance on wrong suggestions. participants liked those designs least, and they helped people high in need for cognition more than others. that is the honest price: the version that works is the one that feels worse.

this lands where the hub did. its one remedy with a track record was forced, periodic practice of the degraded mode. that practice turns out to be the gauge as well as the exercise: a cold, unassisted attempt is the one reading of what i know that the feeling cannot fake.

what nobody knows yet:

- whether the correction lasts. the research found no study that re-tested people days or weeks after their rating fell.
- whether a lower rating means better learning. it is a corrected feeling, not a measured gain.
- whether knowledge learnt through an LLM carries a bigger illusion than knowledge from a book or a lecture. the obvious experiment (learn with an LLM, explain, re-rate, get scored) has not been run.

## key takeaways

- **the feeling of understanding reads fluency, not knowledge.** visible parts, a familiar name, an answer in view and smooth prose all raise it without adding anything you could produce alone.
- **the illusion is about how things work.** large for devices and natural phenomena, small for facts, absent for procedures and stories.
- **trying exposes it, grading corrects it.** the rating falls when you explain, falls again on a diagnostic question, and for unsupervised people mostly when their predictions are scored.
- **expertise is not immunity**, least of all for things you once knew in detail.
- **search and LLMs supply the cues on tap.** felt knowledge and confidence rise with them; whether understanding learnt from an LLM carries a bigger illusion is untested.
- **the only gauge that works is a commitment something else grades**: written before you look, predicted before you run, attempted cold with new numbers.

## a personal note

wip ...

## sources and further reading

- rozenblit and keil (2002), [the misunderstood limits of folk science: an illusion of explanatory depth](https://pmc.ncbi.nlm.nih.gov/articles/PMC3062901/), Cognitive Science 26(5). study 5's table holds the means in the chart.
- lawson (2006), [the science of cycology: failures to understand how everyday objects work](https://doi.org/10.3758/bf03195929), Memory & Cognition 34(8).
- fisher and keil (2016), [the curse of expertise: when more knowledge leads to miscalibrated explanatory insight](https://doi.org/10.1111/cogs.12280), Cognitive Science 40(5).
- crawford and ruscio (2021), [asking people to explain complex policies does not increase political moderation](https://doi.org/10.1177/0956797620972367), Psychological Science: three preregistered replications of fernbach et al. (2013).
- meyers, gretton, budge, fugelsang and koehler (2023), [broad effects of shallow understanding: explaining an unrelated phenomenon exposes the illusion of explanatory depth](https://www.cambridge.org/core/product/identifier/S1930297523000244/type/journal_article), Judgment and Decision Making.
- koriat and bjork (2006), [illusions of competence during study can be remedied by manipulations that enhance learners' sensitivity to retrieval conditions at test](https://pubmed.ncbi.nlm.nih.gov/17128596/).
- kornell, rhodes, castel and tauber (2011), [the ease-of-processing heuristic and the stability bias](https://doi.org/10.1177/0956797611407929), Psychological Science 22(6).
- roediger and karpicke (2006), [test-enhanced learning: taking memory tests improves long-term retention](https://doi.org/10.1111/j.1467-9280.2006.01693.x), Psychological Science 17(3). [pdf copy](https://psychology.ecu.edu/wp-content/pv-uploads/sites/216/2019/03/Roediger-Karpicke-2006.pdf).
- karpicke, butler and roediger (2009), [metacognitive strategies in student learning: do students practise retrieval when they study on their own?](https://doi.org/10.1080/09658210802647009), Memory 17(4).
- rhodes and tauber (2011), [the influence of delaying judgments of learning on metacognitive accuracy: a meta-analytic review](https://pubmed.ncbi.nlm.nih.gov/21219059/).
- fisher, goddu and keil (2015), [searching for explanations: how the internet inflates estimates of internal knowledge](https://doi.org/10.1037/xge0000070), Journal of Experimental Psychology: General 144(3).
- ward (2021), [people mistake the internet's knowledge for their own](https://doi.org/10.1073/pnas.2105061118), PNAS 118(43).
- fernandes et al. (2026), [performance and metacognition disconnect when reasoning in human-AI interaction](https://arxiv.org/abs/2409.16708), Computers in Human Behavior 175, where it runs under a different title.
- steyvers et al. (2025), [what large language models know and what people think they know](https://arxiv.org/abs/2401.13835), Nature Machine Intelligence.
- kaufman, brun, murali and endres (2026), [programmers are poor and overconfident judges of LLM-generated assertions](https://arxiv.org/abs/2607.08885), arXiv preprint.
- chromik, eiband, buchner, krüger and butz (2021), [i think i get your point, AI! the illusion of explanatory depth in explainable AI](https://www.medien.ifi.lmu.de/pubdb/publications/pub/chromik2021iui/chromik2021iui.pdf), IUI 2021.
- bansal et al. (2021), [does the whole exceed its parts? the effect of AI explanations on complementary team performance](https://arxiv.org/abs/2006.14779), CHI 2021.
- buçinca, malaya and gajos (2021), [to trust or to think: cognitive forcing functions can reduce overreliance on AI in AI-assisted decision-making](https://arxiv.org/abs/2102.09692), CSCW 2021.
- prather et al. (2019), [first things first: providing metacognitive scaffolding for interpreting problem prompts](https://researchrepository.ucd.ie/rest/bitstreams/41008/retrieve), SIGCSE 2019.
- gignac and zajenkowski (2020), [the dunning-kruger effect is (mostly) a statistical artefact](https://doi.org/10.1016/j.intell.2020.101449), Intelligence 80.
- quote investigator, [an alleged scientific discovery has no merit unless it can be explained to a barmaid](https://quoteinvestigator.com/2019/10/19/barmaid/).
- carried over from the hub: bastani et al. (2025), [generative AI without guardrails can harm learning](https://pmc.ncbi.nlm.nih.gov/articles/PMC12232635/), PNAS, and METR, [early-2025 AI and experienced open-source developers](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/).
