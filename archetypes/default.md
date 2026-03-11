---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
slug: "{{ .File.ContentBaseName }}"
date: {{ .Date }}
description: "" # TODO(opus): generate 1-2 sentence SEO description from content
tags: []
categories: []
keywords: [] # TODO(opus): generate 5-7 search keywords from content
image: "" # TODO: add cover image for social sharing (place in this page bundle)
draft: true
---
