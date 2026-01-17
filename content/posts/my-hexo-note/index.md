---
title: "Hexo Notebook"
date: 2024-04-28 22:43:18
tags:
  - "hexo"
categories:
  - "Software Engineering"
  - "Frameworks"
  - "Hexo"
  - "Notebooks"
subtitle: "Navigating the World of Static Blogging with Hexo"
description: "Join me as I delve into the intricacies of using Hexo for blogging. This post covers everything from the initial setup to customizing themes and optimizing performance. Whether you're a blogger looking to switch to a static site generator or a developer interested in Hexo's capabilities, find detailed insights and practical tips that can help you build a faster, more secure website."
keywords:
  - "Hexo static site generator"
  - "Blogging with Hexo"
  - "Hexo themes customization"
  - "Static site SEO tips"
  - "Web development with Hexo"
---

## issue with categories/tags insensitive name change
- If you have your `tags/categories` name changed from "ABC" to "abc", it will not reflected immediately, the folder will stay the same name. The trick I found so far is to rename to something else first and change it back to the lowercase. E.g. ABC -> ABC123 -> abc

## how i added view count globe
- https://www.revolvermaps.com/?target=setup2d in `themes/next/layout/_partials/sidebar/site-overview.swig`
- idea from https://qiuyiwu.github.io/2019/01/26/Hexo-View/

## firebase
- firebase at themes/next/layout/_partials/head/head-unique.swig
  - todo: https://www.google.com/search?q=firebase+hexo+next+visitor+count&rlz=1C5CHFA_enSG961SG961&oq=firebase+hexo+next+visitor+count&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEINDkzOWowajSoAgCwAgE&sourceid=chrome&ie=UTF-8
    ```sh
    firebase init firestore # will give u the file to add - access by cmd + click
    # select N on:
    # ? File firestore.rules already exists. Do you want to overwrite it with the Firestore Rules
    # from the Firebase Console? (y/N)
    firebase deploy --only firestore
    ```

  - https://stackoverflow.com/questions/46590155/firestore-permission-denied-missing-or-insufficient-permissions
  - https://console.cloud.google.com/firestore/databases/-default-/data/panel/articles/My%20LeetCode%20Journey:%20From%20Novice%20to%20ByteDance%20Software%20Engineer?project=hexo-blog-9ccea
  - https://cloud.google.com/firestore/docs/security/get-started?_gl=1*1qcz2lv*_ga*MTMyODM5MzcwNC4xNzE0ODIzMDUz*_ga_WH2QY8WWF5*MTcxNTEwMTkxMy4yLjEuMTcxNTEwMzcxOS4wLjAuMA..&_ga=2.209118674.-1328393704.1714823053#use_the_cli

## math syntax
- https://theme-next.js.org/docs/third-party-services/math-equations#mjx-eqn%3Aeq4

## wip
