---
title: "My Interview Experience: Site Reliability Engineer at TikTok Applied Machine Learning"
date: 2024-06-01 03:23:45
tags:
  - "tiktok"
  - "site-reliability-engineer"
  - "sre"
  - "leetcode"
  - "interview-experience"
  - "coding-interview"
  - "job-interview"
categories:
  - "Career Development"
  - "Interviews"
  - "Technical Coding Interviews"
subtitle: "A Candid Account of My Interview Process for a Site Reliability Engineer Position at TikTok in 2023"
description: "Read about my experience interviewing for a Site Reliability Engineer role at TikTok. Learn from my mistakes, discover key insights, and get valuable tips for your own job search."
keywords:
  - "TikTok interview"
  - "SRE interview"
  - "Site Reliability Engineer"
  - "job interview experience"
  - "software engineering"
  - "career tips"
# sticky: 1
---

> **Role**: Site Reliability Engineer, TikTok Applied Machine Learning

## **TL;DR**
I only passed the first technical round and **failed at the second round of the technical interview**. However, I just wanna share this experience and the mistakes I made, hoping it helps you guys in any interview process.

Quick introduction for those who don't know me: I am currently a software engineer at ByteDance. I have interviewed with several big tech companies, and while I haven't aced them all, I want to share my learning points, including dos and don'ts, in the hope that it helps others.



## Stage 1: HR Call
People always mention that the HR call is important, and they're right. It's not just a casual chat to confirm the next step; they can ask critical questions based on your resume. If you can't answer them, you might be at risk. So, take every process seriously, right until you walk out of the interview or end the call.

### Notes from My HR Call:
- **Live Coding / Screen Sharing**: Be prepared to showcase your coding skills live.
- **Thought Process**: Explain your thought process clearly.
- **Collaboration Work**: Highlight any team projects or collaborative work.
- **Interview Structure**: 3 technical rounds and 1 HR round.
- **Work Hours**: Be ready to discuss flexible hours (e.g., 10 to 7 or 9 to 6).



## Stage 2: Technical Interview - Round 1
My remark for this interview was: the best interviewer ever, but I did not get his name. He was one of the best interviewers I had ever met in my job search journey.

He didn't ask for an introduction and instead sent me straight to a live coding platform, HackerRank. He asked 4 technical questions:

1. **SRE Basics**: Linux-related questions. For someone with 3 years of full-stack experience in a startup, I found them relatively easy. I could do them with my eyes closed, as long as you can navigate around using bash and do simple actions like vim logs, grep, and select certain parts of the files, you are ready for this part.
2. **LeetCode Easy Question**: A **LeetCode Easy Dynamic Programming** question. I proposed a really straightforward solution and got the optimised solution all by myself as I went along. It was unplanned; I actually just thought out loud and got the solution myself while talking to the interviewer.
3. **Hash Table Implementation**: This was a challenging one. I was asked to implement a Hash Table supporting Add, Get, and Update, and measure the performance of the Hash Table. I knew we needed a hash value and to store it, but when I got asked this question, I was quite stunned. I asked for a moment to think. However, the interviewer was more interested in assisting me rather than challenging me; he gave me a lot of hints and led me in the right direction. For this question, I was not that confident, but I really felt like I vibed with the interviewer.
4. **System Design**: As we ran out of time by about an hour, usually interviews would just rush us off, but he did not throughout the call, and we only realised the time at the last question. He just told me to give him a rough answer to prove it. He showed me an application architecture and asked a few common questions like how to ensure backend reliability, how to build a CI/CD pipeline for the backend, reliability for a MySQL database, and how to handle static resources efficiently. I gave him a rough list of solutions for each as well as drawbacks and some personal thoughts on each aspect. I felt relatively confident in this area, and that was all about it.

We used almost 2 hours for the interview, and I can still remember it deeply. I passed this round, and I was really fortunate to have such a supportive interviewer who helped me rather than pushing me to the edge.



## Stage 3: Technical Interview - Round 2
It started with the interviewer explaining the company, team, and their team missions in Chinese, my first interviews in Chinese. I was not ready for that. We vibed at the start, felt like a chit-chatting session, and after that, he asked me to fill in a list of scores for specific areas like Bash, Networking, etc., rating my knowledge from 0 to 10. After filling that up for like 10 minutes, he threw a few Linux questions at me. They felt like **medium-hard** questions that you can only solve if you have learnt them before or have actually solved them in real life. They were not easy, mostly focused on troubleshooting specific aspects like log files, server configurations, and memory checks.

The moment I knew I was in trouble was when he rushed me to solve a LeetCode easy question. "Hey, can you just solve it in Python? We don't have much time, just solve it", he said. I was out of practice with Python, being more comfortable in Java, Elixir, and JavaScript. So, I asked, "Can I code it in Java instead?" "No, just do it in Python, we don't have much time," he replied in a flat tone.

I felt like I hadn't done well in the previous assessments. I got flustered, I froze, and I couldn't solve the LeetCode easy question. I couldn't even explain my thought process. My mind went completely blank, and it was dead silent for what felt like an eternity. Although I tried to write some pseudocode to help me visualise the problem, I couldn't come up with any solution. He rushed me and then abruptly stopped the test. "I have another call in a bit, so let's just end here. Do you have any more questions?"

I did ask a few questions that I had written down before the interview, but I was not in the mood at all. After the call, I took a break, went out for a walk, came back, opened LeetCode, and found that question. I solved it in 5 minutes. It was frustrating, but a valuable learning experience.



## Conclusion
My experience interviewing at TikTok was a learning journey filled with both successes and setbacks. Here are my key takeaways:

1. **Preparation**: Be prepared for all aspects of the interview, including unexpected languages or formats.
2. **Flexibility**: Be flexible with programming languages and ready to adapt.
3. **Calm Under Pressure**: Practice staying calm under pressure to avoid freezing up.
4. **Continuous Learning**: Use each interview experience as a learning opportunity to improve for the next one.

I hope my story helps others in their job search journey. Remember, every setback is a setup for a comeback. Keep learning and improving!
