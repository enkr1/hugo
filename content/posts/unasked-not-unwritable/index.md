---
title: "Unasked, Not Unwritable: What Polanyi's Tacit Knowledge Says About Debugging With an LLM"
slug: "unasked-not-unwritable"
date: 2026-10-30T03:10:01+08:00
subtitle: "A research note on Polanyi's tacit knowledge, what Collins's lasers and Naur's compilers say about how know-how moves between people, and which part of a night of debugging an LLM can help pass on"
description: "A research note on tacit knowledge: what in a night of debugging cannot be written down, and whether an LLM can pass any of it on."
tags:
  - research
  - tacit-knowledge
  - polanyi
  - ironies-of-automation
  - debugging
  - learning
  - ai
  - llm
  - programming
categories:
  - ["Technology", "AI"]
  - ["Education", "Psychology"]
keywords:
  - tacit knowledge
  - michael polanyi
  - we can know more than we can tell
  - harry collins
  - programming as theory building
  - peter naur
  - cognitive task analysis
  - learning with ai
image: ""
comments: true
draft: false
---

> this is the second of the three follow-ups promised in [the hard parts get harder]({{< ref "posts/the-hard-parts-get-harder" >}}): the strand about what you know that you cannot write down. it starts from a line in [week 87]({{< ref "journals/journal-261026" >}}) about the 4am pdf-chunk night and the websocket afternoon: "these experiences aint something an llm can provide". [the first follow-up]({{< ref "posts/fluency-is-not-understanding" >}}) ended on a test for that week's other claim, that i can still explain them: write one out step by step and see where it stops. this note is about what is left at the point where it stops, and whether an llm can pass any of it on. i asked my AI to dig into it: four research agents plus a report writer, then a pass that checked the numbers and quotes below against the primary sources. polanyi's two books sit behind lending walls, so his quotes come from a 1966 paper where he restates the argument. the personal note at the bottom is mine to write after.

## tl;dr

- polanyi's line is "we can know more than we can tell". in a night of debugging, the tellable part is the code, the logs and the fix. the rest sits underneath: which clue mattered, why the system is shaped the way it is, and which hypothesis to try next.
- less of it is unwritable than it feels. in collins's study of a sapphire measurement that western labs took twenty years to copy, most of what had to move was unsaid or unnoticed rather than unsayable, though some of it could only be shown. in a surgical study, three experts recalled 44% of a procedure's steps freely in a task-analysis interview and 66% once the interviewer prompted them.
- what resists is naur's "theory" of a program, and the only route anyone has shown for it is doing the work beside someone who holds it. nobody in collins's laser study built one from the papers alone.
- an llm can do some of the asking and widen the search. it cannot hold your system's theory for you, its account of how it reached a hunch is not a trace of how it got there, and in the retention studies people kept what they did themselves, not what the tool did for them.

## the question

the hub asked whether delegating execution to an LLM erodes skill. this note asks the narrower thing under my week 87 line: what exactly did the 4am nights build that cannot be written down, and can an llm pass any of it on, or only the parts that were writable all along?

it matters because of how i work now. if the valuable part of those nights is unwritable, a model trained on what people wrote cannot hand it to me, and every night i delegate is one i do not get back. if most of it is writable and simply never got written, the picture changes: the model might be the thing that finally gets it out of my head.

## what polanyi actually said

michael polanyi was a physical chemist who turned to philosophy. the tacit dimension (1966) opens: "I shall reconsider human knowledge by starting from the fact that we can know more than we can tell." note the "can". it says such cases exist, not that all knowing outruns speech.

his standard example is a face: "We know a person's face and can recognise him among a thousand, indeed among a million. Yet we usually cannot tell how we recognise a face we know." the structure behind it is the part that matters for debugging. you attend from a set of clues to a whole. the clues are known subsidiarily and the face focally, and "our subsidiary awareness of a thing may not suffice to make it identifiable". you can name the person. you cannot list what you used.

his other example is the cyclist: "I may not have the slightest idea of how I do this, or even an entirely wrong or grossly imperfect idea of it, and yet go on cycling or swimming merrily." keep the middle clause in mind. an entirely wrong idea of how you do something does not stop you doing it. it comes back when we get to what LLMs say about themselves.

and he was specific about how this kind of knowledge moves: by example, with the learner doing the integrating. "A novice, trying to understand the skill of a master, will seek mentally to combine his movements to the pattern to which the master combines them practically. By such exploratory indwelling the novice gets the feel of the master's skill. Chess players enter into a master's thought by repeating the games he played." the nearest thing on that list to an LLM session is replaying a master's games, and notice who does the work: the player, move by move.

mapped onto a night of debugging, the focal part is what goes in the commit message: the chunk boundary was off, the socket closed before the flush. the subsidiary part is everything you attended from to get there: the timing that looked wrong, the log line whose shape was off, the request that only failed the second time. you can tell the conclusion. the integration that produced it is what polanyi says you cannot tell.

a sourcing note: the face, cyclist and chess passages are quoted from polanyi's 1966 paper "the logic of tacit inference", which restates the book's argument and which i could read in full. the opening line comes from the book through secondary sources.

## three kinds, and which could be written

harry collins, a sociologist of science who has spent decades among gravitational-wave physicists, splits tacit knowledge three ways in tacit and explicit knowledge (2010):

- **relational**: things that could be told but are not, because nobody thought to, the other person did not know to ask, or someone kept them back. he holds that this kind can in principle be made explicit.
- **somatic**: what a body can do that its owner cannot describe, like balancing on a bike. he treats this as explicable in principle too.
- **collective**: what lives in a group's ways of doing things, like the rules of a language. his bicycle splits here: balancing is somatic, but riding in traffic, which runs on local conventions, is collective. he holds that this kind can never be made wholly explicit.

for a programmer the somatic kind barely matters. the interesting line runs between relational, which is a problem of getting things said, and collective, which lives in a team and its system. my guess is that most of a 4am night is the first kind dressed up as the second.

## a real one: twenty years of sapphire

collins's cleanest evidence is about lasers and sapphire, not code, and that is why it is useful: physicists write things down for a living, and it still did not move on paper.

**the laser.** in 1971 and 1972 collins followed how british and north american labs learnt to build a TEA laser. his study covered twelve labs, eleven of which he visited. his findings: "no scientist succeeded in building a laser by using only information found in published or other written sources." none succeeded when the informant was a "middle man" who had not built one himself. and even with a willing builder, the learner "would be unlikely to succeed without some extended period of contact with the informant and, in some cases, would not succeed at all". the usual pattern was a visit, an attempt that failed, another visit, then phone calls. one caveat: he found the labs by asking builders for other builders, so a lab that tried from the papers alone and quietly gave up might never appear. it is a strong regularity, not a controlled comparison.

**the sapphire.** for about twenty years, a moscow group reported that sapphire crystals could ring with a quality factor that western labs could not reproduce, a number that matters for gravitational-wave detectors. in 1998 the glasgow team spent a week in moscow, and soon after the russian experimenter spent a week in glasgow. no result, though the glasgow side came away believing the claim. the first western measurement came in mid-june 1999, after a second visit: "we spent 90 hours in the lab from starting on a Sunday and finishing on the following Sunday."

what the visit carried was a list nobody had written down. the crystal hung from very fine chinese silk thread rather than the steel piano wire glasgow had used, and other silks gave worse results. the thread was greased, sometimes by drawing it across the bridge of the nose or behind the ear, and "only some people had the right kind of skin". one notebook entry reads "Suspension 3: Fred-greased Russian thread". a tungsten wire alternative had to be polished "to just the right (indescribable) degree".

then the part that cuts against the romance. collins sorted what moved into five kinds:

1. **concealed**: tricks of the trade nobody tells, or that no journal has room for.
2. **mismatched salience**: one side does not realise the other needs telling, and the other does not know what to ask. fixed by watching each other work.
3. **ostensive**: what words, diagrams and photographs cannot carry, only pointing and demonstrating.
4. **unrecognised**: things done without realising they matter, picked up on a visit without either side noticing.
5. **uncognised**: the deep kind, like the fluency of speaking your native language.

and he found the fifth "plays no major part in this case study". most of what had to cross was, in his words, knowledge "that no one knew they could or should express", turning into something "that could be articulated as the importance of previously unnoticed parts of the procedure became revealed". unsaid or unnoticed, then, far more than unsayable, with a residue that could only be shown.

the grease is the best detail in the paper. the russian group's own book had already said in print that a fatty film where the thread meets the crystal is important, with pork fat as the example. it was written down, and it still did not cross until glasgow watched it done, because nobody reading the book knew how much it mattered. and the part that could not be written was the amount: "there is no vocabulary to describe exact amounts of pork fat".

the same kinds fit a night of debugging uncomfortably well. say the bug is a stream that stalls:

- **concealed**: the trick a teammate uses and never mentions.
- **mismatched salience**: that the proxy buffers before the server does, which i never say because to me it is obvious, and which a newcomer would never think to ask.
- **ostensive**: what a healthy stream looks like scrolling past in the network panel. easier to point at than to describe.
- **unrecognised**: a habit i do not know i have, like reloading with the cache off before believing anything.

three of the four are unasked, not unwritable, and the ostensive one needs showing rather than telling. the pork fat adds one more: some of it is already written down, in a README or an old commit message, and still does not cross until someone shows you that it matters.

## what experts leave out, and what asking gets back

the field that measures this is cognitive task analysis: structured interviews that pull out the decisions experts make without noticing. its headline is that experts omit about 70% of what they do when they describe a task. that number is shakier than it looks (more below), but the measured ones are not small. in one group's surgical studies, six experts per procedure left out 34% of the decisions when describing central line placement and 77% for an emergency airway procedure (yates, sullivan and clark 2012). in another, three surgeons recalled 44% of the steps of an emergency airway procedure freely during a task-analysis interview, and 66% after the interviewer's structured prompts (sullivan and colleagues 2014).

two things follow. a large share of what experts leave out comes back when somebody asks the right questions, which makes it an interviewing problem. and what is still missing after prompting has not been shown to be unwritable, only unasked so far. it pays off, too: in a randomised trial with 26 new surgical interns, the 12 taught central line placement on task-analysis principles needed 3.3 attempts to find the vein against 6.4 for the 14 taught the traditional way, a marginal difference (p = 0.046), and scored 12.6 against 7.5 on a checklist (velmahos and colleagues 2004).

experts are also poor judges of what others are missing. in nathan, koedinger and alibali's study (2001), the high school maths teachers (39 of the 105 teachers surveyed) rated algebra story problems the hardest for students, harder than the matching equations. the student data the paper cites goes the other way: ninth-graders solved under 30% of the equations and over 50% of the verbal problems. the middle school teachers got it right. the person with more of the knowledge was the worse judge of which parts need saying, which is collins's mismatched salience, measured.

and a warning about asking people why. nisbett and wilson (1977), posing as a consumer survey, laid out four identical pairs of nylon stockings and asked 52 people which was best. the right-most pair was "preferred over the left-most by a factor of almost four to one". no one mentioned position unprompted, and when asked directly, virtually all denied it had any effect. the title says it: "telling more than we can know". asked for reasons, people give a plausible theory of what should have caused their choice rather than a reading of what did. the authors offer a mundane cause themselves, shoppers holding off on the first pairs they see, and they never claimed people are always wrong about themselves. the caution i take from it still stands: an expert's account of why is a theory, and should be tested like one.

so polanyi says we can know more than we can tell, and nisbett and wilson say we can also tell more than we know. both come back with LLMs.

## the part that does not write down: the theory of the program

peter naur's "programming as theory building" (1985) is the essay that applies all this to code. it argues that "the proper, primary aim of programming is, not to produce programs, but to have the programmers build theories of the manner in which the problems at hand are solved by program execution." he takes "theory" from gilbert ryle: someone who has one "knows how to do certain things and in addition can support the actual doing with explanations, justifications, and answers to queries".

he says this theory goes beyond any documentation in three ways. the programmer can say which part of the world each part of the program handles, why each part is the way it is, and how to meet a new demand in keeping with the rest. the last depends on seeing that a new demand resembles something the program already does, and those similarities, he writes, "are not, and cannot be, expressed in terms of criteria, no more than the similarities of many other kinds of objects, such as human faces, tunes, or tastes of wine, can be thus expressed." polanyi's face, again.

his two cases are the closest thing to evidence:

- **the compiler.** group A built a compiler. group B extended it to a larger language on another machine, with "full documentation, including annotated program texts and much additional written design discussion, and also personal advice". group B's designs kept making "no use of the facilities that were not only inherent in the structure of the existing compiler but were discussed at length in its documentation", relying instead on "patches that effectively destroyed its power and simplicity". group A "were able to spot these cases instantly". about ten years and another handover later, by a member of group A's account, "the original powerful structure was still visible, but made entirely ineffective by amorphous additions of many different kinds."
- **the monitoring system.** a real-time system of about 200,000 lines for monitoring industrial production, installed and debugged by people who had worked on it full time since it was being designed. "when diagnosing a fault these programmers rely almost exclusively on their ready knowledge of the system and the annotated program text, and are unable to conceive of any kind of additional documentation that would be useful to them".

the second is a debugging case, and it says the people who debug best have no use for more docs, because what they use is not the kind of thing docs hold. naur's prescription for passing it on matches polanyi's and collins's: "What is required is that the new programmer has the opportunity to work in close contact with the programmers who already possess the theory". a program dies, he says, "when the programmer team possessing its theory is dissolved", and the death "becomes visible when demands for modifications of the program cannot be intelligently answered". he does not hedge on recovery: re-establishing the theory "merely from the documentation, is strictly impossible."

the caveat: both cases are anecdotes ("the experience is my own or has been communicated to me by persons having first hand contact"), with no sample. the measured evidence is indirect. in a microsoft research report on how its developers work, 66% of those in an initial survey agreed that understanding the rationale behind a piece of code was a serious problem, and one interviewee summed it up: "lots of design information is kept in peoples' heads" (venolia, deline and latoza 2005). in vessey's think-aloud study of 16 COBOL programmers (1985), experts and novices spent about the same time on each episode of investigation, but novices needed more phases and more episodes to find the bug. she puts the difference down to strategy: experts worked breadth-first from a view of the whole system, while the novices' search included depth-first and erratic stretches. that is the third layer, the order of search, in the only numbers i found, with a caveat: her expert label came partly from how well people chunked the program, and programmers who made errors were classed as novices, so part of the gap is built in.

practitioners have started applying naur to coding agents. storey (2026) writes about the missing human understanding as "cognitive debt": "even if AI agents produce code that could be easy to understand, the humans involved may have simply lost the plot". that is an essay, not a study.

the gap is worth saying plainly. no study i found tests debugging-specific tacit knowledge directly. nobody has given the builders and the inheritors of a system the same seeded fault, timed their first correct hypothesis, and checked whether the builders' written reasons let a third group do as well. naur's compiler story is the nearest thing to that protocol, and nobody has rerun it.

## what an LLM can and cannot pass on

**the case for.** david autor coined "polanyi's paradox" in 2014 for computers, not people: we cannot program a task we cannot explain. he named two ways round it. environmental control "bows to" the paradox by simplifying the world, and machine learning "attempts to make an end-run around it" by learning from examples. by 2024 he was writing that AI is "remarkably effective at acquiring tacit knowledge".

the best field evidence is brynjolfsson, li and raymond's study of a customer-support firm, where a model trained on a large set of labelled support chats, with top performers contributing many of the examples, was rolled out to 5,179 agents. issues resolved per hour rose 14%, and 34% for novices and the least skilled, with minimal impact on the most experienced and skilled (the published 2025 version: 15% overall, about 30% for the less skilled, and small gains in speed with small declines in quality at the top). agents with two months of tenure and the tool performed as well as or better than agents with over six months and no tool. the 2023 working paper offered "suggestive evidence that the AI model disseminates the best practices of more able workers"; the published version is more careful, saying such tools "may function by exposing lower-skill workers to the best practices of higher-skill workers".

then read their footnote: "We avoid the term 'learning curve' because we cannot distinguish if workers are learning or merely following recommendations." the one test of what stayed was outages. an outage a month after adoption left workers not much faster than their own baseline. after three months of the tool, they handled chats faster even without it, and the workers who had followed the suggestions least showed no improvement even after many months. so some of it stayed, after months of active use, in a job made of repeating problems.

**the machine knows more than it can tell, too.** autor's 2014 paper has a footnote: "A lovely irony of machine learning algorithms is that they also cannot 'tell' programmers why they do what they do." LLMs can talk, which makes this worse rather than better, because they will tell you something. anthropic's interpretability team asked claude 3.5 haiku how it added 36 and 59, and it said: "I added the ones (6+9=15), carried the 1, then added the tens (3+5+1=9), resulting in 95." the circuits showed something else: one pathway estimating the rough size of the sum, another computing the last digit exactly, combined at the end. the authors call it "a simple instance of the model having a capability which it does not have 'metacognitive' insight into". it explains its arithmetic the way people write about arithmetic, not the way it does it: polanyi's cyclist, with an entirely wrong idea of how it keeps its balance, cycling merrily on.

the broader numbers point the same way. when reasoning models were slipped a hint and used it, their chain of thought mostly did not say so: the reveal rate was "often below 20%", and overall faithfulness scores came out at 25% for claude 3.7 sonnet and 39% for deepseek R1 (chen and colleagues 2025). earlier, turpin and colleagues (2023) showed chain-of-thought explanations that "can systematically misrepresent the true reason for a model's prediction": nudges such as reordering a prompt's worked examples so their right answer was always "(A)", or having the user suggest an answer, cut accuracy by as much as 36%, and the explanations did not mention them. all of this is on planted hints and multiple-choice questions, not open-ended debugging. but the inference is hard to avoid. when a model says "i suspect a race condition because the failure is intermittent", that is a fluent story of the kind people write about such hunches, not necessarily what produced the guess. as a hypothesis to test it is useful. as a lesson to absorb, it can teach the folk theory instead of the working one, which is nisbett and wilson's finding about people, at scale.

**where its knowledge comes from.** collins has written about LLMs directly, and his objection is not the missing body. it is the missing socialisation. "Learning from the internet is not the same as socialisation," he wrote in 2024, while leaving room for models that one day understand speech and recognise objects well enough to "acquire the equivalent of primary socialisation". with thorne (2026) he looked at how gravitational-wave physicists decide to ignore a fringe paper, and argued that those judgements rest on tacit knowledge "built up in social discourse, mostly spoken discourse, within closed groups of experts", which LLMs "cannot or do not currently access". a bug in your own system at 4am, with no forum answer anywhere, is that kind of early-stage problem. the model brings a huge store of generic bug patterns. the theory of your system lives in your team's heads, your commit history and a production environment the model has never seen from the inside.

**does any of it stay.** this is the question that matters to me, and the answer is the hub's again: what stays is what you did. in a randomised trial with BCG consultants given chatgpt for data-science tasks outside their skills, the preprint has the treated group 49, 20 and 17 percentage points better on coding, statistics and prediction, and yet the authors "find no evidence that treated workers are better at answering technical questions without ChatGPT post-experiment" (wiles and colleagues, published in Nature Human Behaviour on 26 october 2026). in a preprint with 211 undergraduates, AI access raised test scores and a smaller gain was still there a week later, but it held for students who used AI to learn and faded for the few who had it do the writing, a split by how they chose to use it rather than by random assignment (contractor and reyes 2026). and the hub's coding trial found its biggest gap on debugging questions. where a study split its users by how they used the tool, as this one and the hub's coding trial did, the line falls in the same place: the tool helps learning when the person does the thinking, and hurts it when the tool does. the customer-support result fits, on my reading: the agents who kept something were the ones who used the suggested replies chat after chat, which is polanyi's chess player replaying a master's games.

**it can do the asking.** the most hopeful result is also the narrowest. cho and colleagues (2026, a preprint) had an LLM read expert maths tutors' responses to student mistakes and write the pattern down as a framework. the version that read real tutoring conversations did best: novice tutors given its framework scored closer to the experts than novices given a framework written from expert interviews, with an expert-novice gap of -0.088 against 0.429, a difference of 0.517 points. the paper's title, "large language models can explain experts better than experts themselves", is bolder than that. the limits are real: one short session, a structured task, a human baseline of just three steps, and neither gap on its own was distinguishable from zero. the model's edge came from reading many recorded expert decisions, which a single night of debugging does not produce. no study i found has an LLM interview a real expert and then test whether what it pulled out works for someone else. the fit with collins's categories is good in theory, though: a questioner that asks "why did you look at that before the stack trace?" is doing what the sapphire visitors did by being in the room.

## where people get this wrong

- **"we know more than we can tell" drops a word.** polanyi wrote "we can know more than we can tell". the "can" makes it a claim that some knowing outruns speech, not that all of it does. autor's paper quotes it correctly in its abstract and drops the "can" in the body, and plenty of blogs do the same.
- **"polanyi's paradox" is not polanyi's.** autor named it in 2014, and it is about machines: tasks we cannot explain are hard to program. machine learning got round it by learning from examples, which is why it now runs the other way for people. the model does what it cannot tell, so it cannot tell you.
- **tacit knowledge does not "convert" into documents.** nonaka (1991) and nonaka and takeuchi (1995) made converting tacit into explicit knowledge a management staple, with matsushita's bread maker as the famous case: a software developer, ikuko tanaka, trained under the head baker of the osaka international hotel to learn his distinctive way of stretching the dough, and the team built a machine that reproduced it. gourlay and nurse (2005) argue the story shows someone learning a skill by doing it under an expert, and find no clear evidence for the tacit-to-tacit step nonaka calls socialisation. tsoukas (2003) makes the general case that tacit knowledge is never converted, only shown in what people do. what moved, moved the way polanyi said it would: tanaka learnt it by doing it beside the baker. what got written was the machine's spec.
- **"experts omit 70% of what they know" has no study i could trace as its source.** it traces to an eight-page 2006 chapter by feldon and clark that i could not get hold of, and the wording drifts as it is re-cited: "omit about 70% of the important decisions they make when describing a complex task", then "not fully aware of about 70% of their own decisions", then "up to 70%" on the web. the measured numbers run from 34% to 77% depending on the procedure and on what counts as a decision, in samples of three to six experts from one research group, and prompting recovers a good part of it.
- **collins did not show that tacit knowledge cannot be written down.** his laser study shows written sources were not enough in practice. his own sapphire taxonomy puts most of what moved down to knowledge "that no one knew they could or should express", with some that could only be shown, and says the deep kind played no major part.
- **an LLM's explanation is not its reasoning.** see the arithmetic. it is a fluent account of how such things are usually done.
- **"AI transfers tacit knowledge" overreads the customer-support study.** its 2023 working paper called the evidence that the model spreads best practices "suggestive", the published version softened that to "may function by", the authors cannot separate learning from following, and what lasted showed up only after months of close use, in highly repetitive work.

## what this suggests

this part is my inference, not a finding.

1. **keep the diagnosis.** use the model to propose hypotheses and to widen the search, and do the narrowing myself. the retention studies split the tutor from the writer on exactly this line.
2. **use it as the interviewer, straight after a hard night.** have it ask what i looked at first and why, what i ruled out, what surprised me, and write the answers down while they are fresh. prompting took surgeons' descriptions from 44% to 66% of the steps, and the sapphire visitors surfaced what nobody had written by watching. the answers are the relational layer, the part that was only ever unasked, and writing them is what [the smart notes post]({{< ref "posts/book-how-to-take-smart-notes" >}}) means by writing as thinking. they also mean the next session's agent does not start cold.
3. **treat the model's account of its own hunch as a claim to test, never as a lesson.** it is the folk theory, fluently told.
4. **for code the model wrote, build the theory on purpose.** naur's group B had the docs and still broke the structure. if nobody holds the theory of LLM-written code, the program is born the way naur's programs die. the cheapest check i know is to be able to answer group A's question about every change: why this, here, and not a patch?

this lands next to the hub's one remedy with a track record, forced periodic practice of the degraded mode. naur, polanyi and collins would add where to practise it: beside someone who already holds the theory, because that is the only route any of them could point to.

what nobody knows yet:

- whether builders beat inheritors on a seeded fault, and whether LLM-assisted modifiers land with the builders or with group B. the experiment is easy to describe and has not been run.
- whether an LLM interviewer can pull out an expert's tacit knowledge well enough that someone else does better with it. one tutoring preprint comes close; nothing on debugging.
- whether experienced programmers who delegate lose the theory of their own systems over months. no longitudinal study exists, which was the hub's gap too.
- whether the struggle itself builds the theory, or just the hours spent near the problem. that is the third follow-up, on desirable difficulties.

## key takeaways

- **polanyi's claim has a "can" in it**: there are things we know and cannot tell. in debugging they sit under the code: which clue mattered, why the system is the shape it is, what to try next.
- **most of what experts leave out is unasked, not unwritable.** most of what crossed in collins's sapphire case was unsaid or unnoticed rather than unsayable, and prompting took surgeons' descriptions from 44% to 66% of the steps.
- **the theory of a program has one demonstrated route between people**: doing the work beside someone who holds it. documentation did not save naur's group B, and nobody built collins's laser from the papers.
- **an LLM knows more than it can tell, and tells more than it knows.** its account of its own reasoning is a fluent folk theory, so treat it as a hypothesis, not a trace.
- **know-how stays when the person does the work.** in the retention studies, using AI as a tutor kept something and using it as a writer did not.
- **use the model to ask and to widen the search, and keep the diagnosis and the theory for yourself.**

## a personal note

wip ...

## sources and further reading

- polanyi (1966), [the logic of tacit inference](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/067C495A943E876DEE838320A1B5D522/S0031819100066110a.pdf/the-logic-of-tacit-inference.pdf), Philosophy 41(155): the face, cyclist and chess passages are quoted from here. the book is the tacit dimension (1966); its opening line is quoted via secondary sources.
- collins (2010), tacit and explicit knowledge, University of Chicago Press, with [henry's review](https://www.polanyisociety.org/TAD%20WEB%20ARCHIVE/TAD38-1/TAD38-1-fnl-pg13-17-pdf.pdf) in Tradition and Discovery 38(1).
- collins (1985), changing order, chapter 3 on the TEA laser ([archived copy](https://web.archive.org/web/2022/https://physics.yale.edu/sites/default/files/files/3_1%20collins.pdf)), which builds on his 1974 paper "the TEA set: tacit knowledge and scientific networks" in Science Studies.
- collins (2001), [tacit knowledge, trust and the Q of sapphire](https://gwern.net/doc/philo/2001-collins.pdf), Social Studies of Science 31(1).
- naur (1985), [programming as theory building](https://ingenieria-de-software-i.github.io/assets/bibliografia/programming-as-theory-building.pdf), Microprocessing and Microprogramming 15(5).
- yates, sullivan and clark (2012), [integrated studies on the use of cognitive task analysis to capture surgical expertise for central venous catheter placement and open cricothyrotomy](https://pubmed.ncbi.nlm.nih.gov/22172485/), American Journal of Surgery 203(1).
- sullivan et al. (2014), [the use of cognitive task analysis to reveal the instructional limitations of experts in the teaching of procedural skills](https://pubmed.ncbi.nlm.nih.gov/24667500/), Academic Medicine 89(5).
- velmahos et al. (2004), [cognitive task analysis for teaching technical skills in an inanimate surgical skills laboratory](https://pubmed.ncbi.nlm.nih.gov/14706600/), American Journal of Surgery 187.
- clark, feldon, van merriënboer, yates and early (2008), cognitive task analysis, in the Handbook of Research on Educational Communications and Technology: one of the places the 70% figure appears.
- nathan, koedinger and alibali (2001), [expert blind spot: when content knowledge eclipses pedagogical content knowledge](https://website.education.wisc.edu/~mnathan/Publications_files/2001_NathanEtAl_ICCS_EBS.pdf), Proceedings of the Third International Conference on Cognitive Science, Beijing.
- nisbett and wilson (1977), [telling more than we can know: verbal reports on mental processes](https://web.math.princeton.edu/~sswang/literature_general_unsorted/Nisbett-Wilson-PsychologicalReview1977.pdf), Psychological Review 84(3).
- vessey (1985), [expertise in debugging computer programs: a process analysis](https://www.cs.kent.edu/~jmaletic/cs69995-PC/papers/vessey85.pdf), International Journal of Man-Machine Studies 23.
- venolia, deline and latoza (2005), [software development at microsoft observed](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/tr-2005-140.pdf), Microsoft Research technical report MSR-TR-2005-140; the same team's ICSE 2006 paper is "maintaining mental models: a study of developer work habits".
- storey (2026), [how generative and agentic AI shift concern from technical debt to cognitive debt](https://margaretstorey.com/blog/2026/02/09/cognitive-debt/), a blog post.
- autor (2014), [polanyi's paradox and the shape of employment growth](https://www.nber.org/system/files/working_papers/w20485/w20485.pdf), NBER w20485, and autor (2024), [applying AI to rebuild middle class jobs](https://www.nber.org/system/files/working_papers/w32140/w32140.pdf), NBER w32140.
- brynjolfsson, li and raymond, [generative AI at work](https://www.nber.org/system/files/working_papers/w31161/w31161.pdf), NBER w31161 (2023), published in the Quarterly Journal of Economics 140(2), 889-942, in 2025 with slightly different numbers and wording.
- anthropic (2025), [on the biology of a large language model](https://transformer-circuits.pub/2025/attribution-graphs/biology.html), and the plain-language [tracing the thoughts of a large language model](https://www.anthropic.com/research/tracing-thoughts-language-model).
- chen et al. (2025), [reasoning models don't always say what they think](https://arxiv.org/abs/2505.05410), arXiv preprint.
- turpin, michael, perez and bowman (2023), [language models don't always say what they think: unfaithful explanations in chain-of-thought prompting](https://arxiv.org/abs/2305.04388), NeurIPS 2023.
- collins (2024), [why artificial intelligence needs sociology of knowledge: parts I and II](https://doi.org/10.1007/s00146-024-01954-8), AI & Society 40, and collins and thorne (2026), [large language models and scientific discourse: where's the intelligence?](https://arxiv.org/abs/2603.23543), Synthese 207(4).
- wiles, krayer, abbadi, awasthi, kennedy, mishkin, sack and candelon (2026), [generative AI and the temporary upskilling of knowledge workers](https://doi.org/10.1038/s41562-026-02566-6), Nature Human Behaviour, with the [preprint](https://emmawiles.github.io/storage/reskill.pdf) the numbers here come from.
- contractor and reyes (2026), [experimental evidence on the learning impact of generative AI](https://arxiv.org/abs/2607.08849), arXiv preprint.
- cho, funk, gupta and yang (2026), [large language models can explain experts better than experts themselves](https://arxiv.org/abs/2608.07488), arXiv preprint.
- nonaka (1991), the knowledge-creating company, Harvard Business Review 69(6), and nonaka and takeuchi (1995), the knowledge-creating company, Oxford University Press: the bread maker.
- gourlay and nurse (2005), [flaws in the "engine" of knowledge creation](https://realkm.com/wp-content/uploads/2023/11/Flaws_in_the_engine_of_knowledge_creation.pdf), in Challenges and Issues in Knowledge Management, Information Age Publishing.
- tsoukas (2003), "do we really understand tacit knowledge?", in easterby-smith and lyles's Blackwell handbook on organisational learning and knowledge management.
- carried over from the hub: shen and tamkin (2026), [how AI impacts skill formation](https://arxiv.org/abs/2601.20245).
