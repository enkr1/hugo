---
title: "Journal: Week 57"
date: 2026-03-11T15:00:00+08:00
tags:
  - journal
  - engineering
  - NUS
  - travel
categories:
  - "About Me"
  - "Journals"
comments: false
---

## 🔧 Blog Changelog

这两周在 blog 上折腾了不少东西：

- **Email subscription** — Google Sheets 后端 + anti-spam (time-based bot detection, rate limit, dedup)
- **GA4 custom events** — `read_depth` (scroll milestones), `reading_milestone` (active reading time), `blog_search` (search queries + result count)
- **Search UX overhaul** — 点击搜索结果后自动 scroll 到匹配文字 + highlight，修了一个 XSS 漏洞 (innerHTML injection)
- **Activity heatmap** — `/updated/` 页面加了 GitHub-style contribution heatmap，点击可以 filter
- **Recent updates popup** — 从 always-visible card 改成 bell icon，hover 展开，CSS-only staggered animation
- **Firebase cleanup** — 删掉了 Firebase Analytics SDK (GA4 已经覆盖)，移除了 write-only 的 `unique_visitors` collection

我真的很喜欢我现在的 blog，感觉就是为了自己而做的
目前也只有我在读
就是我的 online notebook 的感觉！很喜欢！

## 📚 NUS

CT2 is in 5 days. 这次考的是 3.6-4.11，感觉比 CT1 范围大不少。（可能从 3.5 开始，因为 CT1 只到 3.4）
目前还是很压力的，工作第一的情况下还要兼顾3个科目，这个学期真的挺爽的，很喜欢这种感觉！
有一种又回到字节的感觉了终于哈哈哈哈哈

## 🌴 Bali

上周去了 Bali (Mar 7~9)，三天两夜 quick trip。
细节就自己记载了私人笔记里了 😉

## 🎤 LCBB Wildcard

solo wildcard for Lion City Beatbox Battle 正式开始准备了。deadline Mar 31，target submit Mar 29。
currently still brainstorming some combos and prepping this beat as a battling style wildcard that can be used for battle too! 🔥

## 🧹 Life Admin

这周做了一波 digital cleanup：

- ebooks 文件夹全部 rename 成统一格式 (`Author - Title (Year).ext`)，24 本书
- [interview prep repo](https://github.com/enkr1/interview_preparation_materials) 也整理了 — 文件名标准化 + [GitHub Pages](https://enkr1.github.io/interview_preparation_materials/) 链接全部修好
- 约了牙医去做牙冠 真的破财啊
