---
title: "The Second Codebase Got Cheap: Picking a Mobile Stack When Feel Comes First"
slug: "the-second-codebase-got-cheap"
date: 2026-11-26T14:02:11+08:00
subtitle: "A research note on why one question about a mobile stack got three different answers in one conversation, and what changed when writing the UI twice stopped being the expensive part"
description: "A research note on choosing a mobile stack for a workout app: why wrapper, cross-platform and native each won in turn without a single technical fact changing, what the fitness category and the 2026 Shopify and Coinbase reversals actually show, and why counting the copies one person must keep in step beats comparing frameworks."
tags:
  - mobile
  - swift
  - react-native
  - decision-making
  - ai-agents
  - build-vs-buy
  - research
categories:
  - ["Software Engineering", "Notes"]
keywords:
  - react native vs swift
  - native vs cross-platform 2026
  - apple watch app stack
  - live activities widgets swiftui
  - shopify native migration
  - choosing a mobile stack
  - coding agents and duplicate codebases
  - workout app architecture
image: ""
comments: true
draft: false
---

> i asked my AI a simple question about my workout app, "if this became a mobile app, what stack?", and got three different answers inside one conversation. the odd part was that nothing technical had changed between them. i had it help me work out why, then go and read what the established fitness apps are built with, what shopify and coinbase said in 2026, and what react native can and cannot do about feel. the personal note at the bottom is mine to write after.

## tl;dr

- three answers (wrap the web app, cross-platform phone app, swift for the apple side) came from one set of facts. what moved was my **priority**: cheapest first, then reach, then feel.
- the surfaces i actually want (widgets, the workout on the lock screen, an apple watch app, a wear os app) are native code in every option. react native or flutter only decides the phone app's main screens.
- the thing cross-platform frameworks save, writing the UI twice, is the cost that coding agents collapsed in 2026. shopify and coinbase both said so in public.
- agents did not collapse the second cost: for one person, every extra UI is another screen to check by hand and every extra copy of a rule is another place for two copies to disagree.
- my call: swift for the apple side, the in-gym loop first, web for everything else. the second cost gets paid with machine-checked test vectors, and the first step is a one-screen swiftui prototype on my own phone. that is a plan, not something i have done.

## the question

my workout app is a web app, installable as a PWA, TypeScript front and back, and most of its users are on iPhones. "if this became a mobile app, what stack?" sounds like one question. it got three answers:

1. **cheapest thing that works:** wrap the existing web app in a native shell.
2. then i said what i actually want: home screen widgets, the workout live on the lock screen like apple fitness, an apple watch app, android watches too. the answer became a cross-platform phone app with native pieces around it.
3. then i asked "isn't native more long-term?" and "what if feel matters most?", and went to look at what the established apps do. the answer became swift for the apple side.

the interesting thing is what did not happen. no framework shipped a feature between answer one and answer three. the facts stayed put and the **criterion** moved: cost, then reach, then feel. a stack recommendation is a function of the priority you hand in, and i had been handing in a different one each time.

this is the same move as [pick the layer, not the tool]({{< ref "pick-the-layer-not-the-tool" >}}): the comparison everyone runs (react native versus flutter versus swift) sits one level too high. the useful comparison is lower down, and it has two parts. what is each surface built in, and how many copies of the code does one person have to keep alive.

## the surfaces i wanted are native in every option

widgets and Live Activities are drawn in SwiftUI (WidgetKit and ActivityKit). a watchOS app is Swift. a Wear OS app is Kotlin, in Compose for Wear OS. android home screen widgets are Kotlin too (Glance). none of that depends on whether the phone app's main screens are react native, flutter or swift.

so when someone says a react native app "has" a live activity, what is true is that swift code sits beside it. partiful is the clean example, a react native and expo app whose case study says its Live Activities feature "requires iOS native code in Swift and SwiftUI", so they integrated it by writing custom native modules ([SWM case study](https://swmansion.com/case-studies/partiful)). the same app's expo case study has an engineer saying "we have not had to open Xcode one time since we started building" ([expo](https://expo.dev/customers/partiful)). both are true, and that case study does not mention Live Activities.

the same shape shows up on the wrist. runna's job posts describe a react native app for iOS and android plus a SwiftUI apple watch app. hevy's lists "React Native app, iOS wearable, and WearOS wearable" as three separate things to build UI for. peloton's wear os app is, in google's own words, "using Compose for Wear OS" ([android developers blog, june 2023](https://android-developers.googleblog.com/2023/06/peloton-increased-its-multi-device-support-and-saw-an-uptick-in-user-engagement.html)).

so the real question is not "react native or swift". it is "which of my surfaces is the phone app's main screens, and is that the surface where feel matters".

## what the category is built with

i went through fitness and training apps and looked for what each is built in and, where anyone said, why. the evidence column matters, because a job post is a weaker source than a company's own words, and some of these i could only read as search summaries.

| app | stack | evidence |
|---|---|---|
| Hevy | React Native, both phones | founder blog, undated (image paths suggest 2020): "The chosen platform would be React Native." Team of two at the time. [post](https://www.hevyapp.com/how-we-built-hevy/) |
| MacroFactor | Flutter, both phones | Google Cloud case study (read via a mirror, the original would not load): "a lean two-person engineering team". [mirror](https://www.casestudies.com/company/apigee/case-study/macrofactor-scales-to-400k-users-with-apigee) |
| Runna | React Native phones, SwiftUI Apple Watch | two job posts. [one](https://jobs.jamjarinvestments.com/companies/runna-2-2d8c4c51-d906-42ba-801e-a8d958b2b29c/jobs/74918130-staff-full-stack-engineer), [two](https://builtin.com/job/senior-software-engineer-i/9146578) |
| Strava | SwiftUI and UIKit with some Objective-C on iOS, Kotlin on Android | two job posts, both now removed. [iOS](https://builtin.com/job/senior-ios-engineer-i/7995011), [Android](https://builtin.com/job/senior-android-engineer-achieve/6438945) |
| Whoop | Swift on iOS, Kotlin and Jetpack Compose on Android | two job posts, both now removed. [iOS](https://builtin.com/job/ios-engineer-ii-growth-healthcare/7343264), [Android](https://builtin.com/job/senior-android-engineer-ai-experiences/7454049) |
| Ladder | Swift (SwiftUI and UIKit), iOS only | job post calls it "our top-ranked iOS app", no mention of Android. [post](https://jobs.generalcatalyst.com/companies/ladder-2-2317e384-678c-4b5e-84d9-cff9fd873143/jobs/54671272-senior-ios-engineer-ladder) |
| SmartGym | Apple only, watch app in SwiftUI | the developer, 2024-01-13: "Praticamente todo o app do Apple Watch hoje é em SwiftUI", and he does not see an Android watch with the quality of the Apple Watch. [interview](https://macmagazine.com.br/post/2024/01/13/criador-do-smartgym-matt-abras-fala-sobre-ia-vision-pro-e-mais-em-entrevista-ao-mm/) |
| Bevel | Swift and SwiftUI | job post asks for "HealthKit, WatchKit, and SwiftUI"; i did not look for an Android app beyond that. [post](https://wellfound.com/jobs/4290179-ios-engineer) |
| Strong | native Swift, iOS role includes the Apple Watch app | **search summary only**, the page itself would not load for me |
| Fitbod | Swift (SwiftUI or UIKit) on iOS | **search summary only**, the posting i found is closed and says nothing about a watch app or Android |

and the awards, because "feel" is the thing apple's own judges look at: SmartGym was Apple Watch App of the Year in 2023 ([apple](https://www.apple.com/newsroom/2023/11/apple-unveils-app-store-award-winners-the-best-apps-and-games-of-2023)) and an Apple Design Award finalist in the Innovation category in 2024 ([apple](https://www.apple.com/newsroom/2024/06/apple-announces-winners-of-the-2024-apple-design-awards)). strava was Apple Watch App of the Year in 2025 ([apple](https://www.apple.com/newsroom/2025/12/apple-unveils-the-winners-of-the-2025-app-store-awards/)). bevel is a 2026 Apple Watch App of the Year finalist ([apple](https://apple.com/newsroom/2026/11/meet-the-2026-app-store-award-finalists)).

what i can say carefully:

- the two teams that explained a cross-platform choice, hevy and macrofactor, gave **reach with a two-person team** as the reason (hevy's founder ties social reach to "building for iOS & Android"; macrofactor wanted to "deploy a feature-rich app simultaneously on Android and iOS"). neither gave feel.
- every apple-awarded fitness app i found whose stack is public (smartgym, strava, bevel as a finalist) is native swift on the apple side. gentler streak is another recognised one, and its stack is not public, so it is not in the count.
- none of the watch apps whose stack i could find is built in anything but native.

what i did **not** find: no public rewrite story from any of these fitness apps, in either direction. and six apps i did not research at all: alpha progression, boostcamp, trainerize, everfit, truecoach and caliber. so this is a pattern in a sample, not a law.

## the 2026 reversal

this is the heart of the note, because it is the part that explains why my third answer was different from the second.

**shopify.** on 2026-09-10 shopify engineering published "Native is now the future of mobile at Shopify" ([post](https://shopify.engineering/back-to-native)). the line that matters: "LLMs changed one of the core assumptions behind our 2020 decision." they are fair to react native: "React Native apps can be fast. Ours are." the costs of keeping it, framework updates and external dependencies, "were acceptable tradeoffs". and the bar for the rebuild is "Every rebuild must meet or exceed the performance, stability, accessibility, and product quality people expect today." the shop app went from proof of concept to a published native app in 12 weeks, with AI assistance. they are also winding down their own react native libraries: FlashList is "in discussions with several companies about taking on long-term stewardship", Skia is sponsored "through the end of 2026", and Restyle is being archived.

the numbers, from the shop app migration post the same day ([post](https://shopify.engineering/shop-app-migration)):

| | native | react native |
|---|---|---|
| iOS cold start | 2466 ms | 3200 ms |
| Android cold start | 2233 ms | 4433 ms |
| iOS app size | 68 MB | 67 MB |
| Android app size | 184 MB | 293 MB |
| session stability | 99.95%+ | 99.5%+ |

for contrast, shopify's own retrospective from 2025-01-13 said "RN apps are fast", then "We've achieved sub-500ms (P75) screen loads in the Shopify app" ([post](https://shopify.engineering/five-years-of-react-native-at-shopify)). the same company, eight months apart, and the thing that moved was not the framework.

**coinbase.** a linkedin post about its consumer trading app, reported on 2026-10-14 ([quoted here](https://ivanthinking.net/2026/10/14/coinbase-is-going-mobile-native-too/), original [here](https://www.linkedin.com/posts/adamawolf_were-taking-coinbases-consumer-trading-app-share-7511201801472327680-DVYk/)): "fully native, migrating off React Native and rebuilding in Swift and Kotlin". the reasons: "AI coding agents have collapsed the cost of building a feature twice", and "the end product is simply better when nothing sits between your code and the platform." the page did not state the poster's role, so i am reading it as a statement from someone on the team, not a press release.

**discord.** heise reported on 2026-11-06 that on mobile, "Android and iOS will use native interfaces that draw on shared application logic written in Rust, replacing React Native" ([heise](https://www.heise.de/en/news/Discord-is-rebuilding-in-Rust-leaving-React-and-Electron-behind-11516113.html)). that sentence is heise's reporting; the cto's own posts on X i only saw as snippets.

**smaller ones.** notion moved to SwiftUI and says "The app now launches at least twice as fast" ([apple, 2026-10-28](https://developer.apple.com/news/?id=tejokjnx)). resortpass is rebuilding its iOS app in swift after years on flutter, saying flutter "is fast, and for most of what our app does, it's fast enough", and choosing native for direct control over interactions and sooner access to new platform capabilities ([resortpass, 2026-10-09](https://www.resortpass.com/engineering/articles/why-resortpass-chose-a-native-ios-app)). habitkit's author, moving from flutter to swiftui: "the animations still jank on certain devices when a bottom modal sheet in HabitKit gets opened" ([substack, 2025-12-14](https://sebastianroehl.substack.com/p/from-flutter-to-swiftui-a-case-study)); his sentence goes on to add a second trigger, a huge number of habits.

**the other direction, for balance.** zenjob went from separate swift and kotlin apps to react native with expo, because "maintaining separate native codebases, that were seven and eight years old respectively, was holding us back" ([expo, 2025-09-30](https://expo.dev/blog/swift-to-react-native)). that is the old argument, and it was true then. partiful stays on react native and expo and is happy.

**the limit of all this.** nobody here published an iOS feel comparison: no animation, gesture or touch-latency numbers. shopify's migration post gives none for iOS rendering. the hard numbers are cold start, app size and stability, and they come from a shopping app, not a workout logger. the "feel" claims are claims.

## how close cross-platform gets on feel, late 2026

not as far away as the headlines suggest, and i do not want the note to read as if react native were still the 2019 version.

- react native 0.82 (2025-10-08) is the first release that runs entirely on the New Architecture, and it ignores attempts to turn the legacy one back on ([release post](https://reactnative.dev/blog/2025/10/08/react-native-0.82)).
- animation code in reanimated runs on the UI thread, a design its team introduced in version 2, and reanimated 4 adds a declarative, CSS-compatible API on top ([swm blog, 2025-07-23](https://swmansion.com/blog/reanimated-4-stable-release-the-future-of-react-native-animations-ba68210c3713)). i could not confirm from that post where the new CSS animations execute.
- the native stack navigator uses `UINavigationController` on iOS, and supports sheets that rest at set heights ([docs](https://reactnavigation.org/docs/native-stack-navigator/)).
- Expo UI has been stable since SDK 56 (2026-05-26) and renders real SwiftUI components inside a react native app ([expo](https://expo.dev/blog/expo-ui-stable-sdk-56)), including a wheel picker ([docs](https://docs.expo.dev/versions/latest/sdk/ui/swift-ui/picker/)). for a weight and rep wheel, that matters.

and the seams practitioners themselves name:

- controlled text input: "each update round-trips through the JavaScript thread", so a field can briefly show text your state does not hold yet ([expo docs](https://docs.expo.dev/guides/controlled-components/)).
- list blanking: FlashList v2 reports "up to 50% reduced blank area" against v1, which also tells you there was a lot of blank area ([shopify, 2025-07-31](https://shopify.engineering/flashlist-v2)).
- startup, in shopify's table above.
- flutter draws its own UI, and its Cupertino library does not yet have iOS 26's Liquid Glass. the [tracking issue](https://github.com/flutter/flutter/issues/170310) is still open, with early work only now appearing as pull requests in a separate package.

my framing: the biggest single step in feel is leaving the browser at all. haptics, native scroll and transitions, coming back to the foreground without a reload. react native and swift both give you that. the last stretch, react native to swift, is where "can be made right with effort" meets "right by default". whether that last stretch is worth a second UI depends on whether feel is the product, and for a workout logger used mid-set with sweaty thumbs, i think it is.

## the cost model: count the copies

for someone who already has a TypeScript web app that is not going away (android users, desktop, shareable links), with the domain rules in one shared TypeScript package used by client and server, the real comparison is how many copies of what.

| plan | UI written | logic written | what else |
|---|---|---|---|
| react native phone app plus native satellites | 2 times (web, RN) | 1 time | android phone app nearly free; javascript can ship over the air |
| swift for everything apple, web elsewhere | 2 times (web, swiftui) | 2 times (typescript, swift) | android stays a PWA; releases go through TestFlight and review |
| fully native on both platforms | 3 times | 3 times | three things to keep in step |

this is [build or buy]({{< ref "build-vs-buy" >}}) again, in a different costume. a cost line that used to be steep (the second UI) has dropped, and the crossover moved. and it is the [marginal-cost note]({{< ref "marginal-cost-and-sunk-cost" >}}) in practice: once the first copy exists, the question is the cost of the next one, not the sunk cost of the first.

one old technique deserves a mention. you can run the TypeScript rules inside a swift app through JavaScriptCore. it is real: square did it for payment display text in 2016 ([square](https://developer.squareup.com/blog/shared-app-functionality-via-javascript/)), and lucid wrote it up in 2018, noting that "JavaScriptCore is a barebones engine" with no timers or `fetch`, so you supply your own ([lucid](https://lucid.co/techblog/2018/02/14/javascriptcore-the-holy-grail-of-cross-platform)). it is also dated, and apple's own availability list for `JSContext` covers iOS, iPadOS, Mac Catalyst, macOS, tvOS and visionOS but not watchOS ([apple](https://developer.apple.com/documentation/javascriptcore/jscontext)), so a watch app cannot use it. that rules it out for the surface i care most about.

## "just let the agent keep the copies in sync"

the obvious argument for my plan, and it is mine, is this. models keep getting stronger. so is having more code, and letting the agent keep the copies in step, now cheap?

yes for the writing. that is exactly what shopify and coinbase said in 2026: building a feature twice stopped being the expensive part. but only on one condition: **the sync has to be checked by a machine, not trusted.**

the mechanism i have in mind:

- the TypeScript rules package stays the single owner of every rule (how a set is scored, what counts as a personal best, how a rest timer rounds).
- it exports **test vectors**: inputs and the expected outputs.
- the swift copy has to pass the same vectors. a rule that drifts in one place turns red instead of shipping.

that is why vectors, not JavaScriptCore: nothing shared at runtime, so the watch app is not blocked, but the two copies are held to one definition. it is also the same trick as checking any generated code: do not ask whether the agent was careful, ask whether the vectors pass.

what stronger models do not yet remove:

- **my own eye on every UI.** an agent writes a screen in minutes. i still have to look at it, on a phone, at each state. two UIs means two things to look at, forever.
- **release mechanics.** native code has no over-the-air path. it goes through TestFlight and app review, so a fix is a release, not a deploy.

so shopify and coinbase are right that the second codebase got cheap to **write**. for one person the scarce thing was never typing, it is looking, and agents shrink the first cost far more than the second.

## where people get this wrong

- **"react native can do widgets."** it hosts them; swift draws them. the question is how much of the app lives on those surfaces.
- **"native is forever."** UIKit gave way to SwiftUI, and android views to Compose. native code gets rewritten too, and notion's multi-year move to SwiftUI is the same story.
- **reading a leader's stack without its reason.** hevy and macrofactor chose cross-platform for reach with two people, in years when writing twice was expensive. the stack is evidence about their priority, not about yours.
- **comparing frameworks on benchmarks instead of copies.** a cold-start number is real and it is not the decision. the decision is how many copies one person must keep in step.

## when it applies, and when it does not

it applies to apps whose value lives on the lock screen, the wrist and the home screen: fitness, timers, navigation. it is much weaker for content or form apps, where the phone app is the product and the web does most of the job. and it flips if there is no existing TypeScript logic to share (then flutter or kotlin multiplatform compete on equal terms) or if android is the larger audience.

## my call and the next step

**reach first, tiny team:** a cross-platform phone app with native pieces around it. **feel first, users mostly on iPhone:** swift for the apple side. my priority is the second one, and my read is that native will turn out better and more practical than react native, and bring more benefit. that is a bet from foresight, not a measurement, which is why the first step is cheap.

the plan:

- swift for the apple side, starting with only the in-gym loop: start a session, log a set, rest, finish.
- everything else stays on the web. the android phone stays the PWA, and a standalone wear os app comes later if at all.
- the rules package exports test vectors, and the swift copy has to pass them.
- never three full UIs, alone.
- the next step is a single-screen SwiftUI prototype on my own phone: the weight and rep wheel, logging a set, the rest countdown and haptics. i hold it in my hand before committing to anything bigger. that has **not** been built yet.

## key takeaways

- one set of facts gave three stacks because the priority changed: cost, then reach, then feel. say the priority before asking for the stack.
- the surfaces you want (widgets, lock screen, watch) are native in every option, so the framework only decides the phone app's main screens.
- the cross-platform saving, writing the UI twice, is what agents cut in 2026. the cost left is checking, not typing.
- count the copies one person must keep in step, not the benchmark.
- keep copies honest with machine-checked test vectors, not with trust.
- the evidence for "native feels better" is thin: cold start and stability are measured, animation and touch latency are not.

## a personal note

wip ...

## sources and further reading

- shopify engineering: [Native is now the future of mobile at Shopify](https://shopify.engineering/back-to-native), the [Shop app migration numbers](https://shopify.engineering/shop-app-migration) and the 2025 [five years of React Native](https://shopify.engineering/five-years-of-react-native-at-shopify).
- coinbase via [ivanthinking](https://ivanthinking.net/2026/10/14/coinbase-is-going-mobile-native-too/) and [discord via heise](https://www.heise.de/en/news/Discord-is-rebuilding-in-Rust-leaving-React-and-Electron-behind-11516113.html).
- [notion on apple developer](https://developer.apple.com/news/?id=tejokjnx), [resortpass](https://www.resortpass.com/engineering/articles/why-resortpass-chose-a-native-ios-app), [habitkit](https://sebastianroehl.substack.com/p/from-flutter-to-swiftui-a-case-study) and, the other way, [zenjob](https://expo.dev/blog/swift-to-react-native).
- [hevy](https://www.hevyapp.com/how-we-built-hevy/), [macrofactor](https://www.casestudies.com/company/apigee/case-study/macrofactor-scales-to-400k-users-with-apigee) and the [smartgym interview](https://macmagazine.com.br/post/2024/01/13/criador-do-smartgym-matt-abras-fala-sobre-ia-vision-pro-e-mais-em-entrevista-ao-mm/).
- [partiful, swm case study](https://swmansion.com/case-studies/partiful) and [partiful, expo](https://expo.dev/customers/partiful).
- [react native 0.82](https://reactnative.dev/blog/2025/10/08/react-native-0.82), [reanimated 4](https://swmansion.com/blog/reanimated-4-stable-release-the-future-of-react-native-animations-ba68210c3713), [native stack](https://reactnavigation.org/docs/native-stack-navigator/), [expo ui stable](https://expo.dev/blog/expo-ui-stable-sdk-56), [controlled components](https://docs.expo.dev/guides/controlled-components/) and [flashlist v2](https://shopify.engineering/flashlist-v2).
- my [pick the layer, not the tool note]({{< ref "pick-the-layer-not-the-tool" >}}): the same move, one level too high.
- my [build or buy note]({{< ref "build-vs-buy" >}}) and [marginal cost and sunk cost note]({{< ref "marginal-cost-and-sunk-cost" >}}): the crossover maths under the copy count.
