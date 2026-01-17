---
title: "Vim Notebook"
date: 2024-05-19 04:09:35
comments: false
tags:
  - "programming"
  - "vim"
  - "text-editor"
  - "development-tools"
  - "coding-productivity"
categories:
  - "Software Engineering"
  - "Development Tools"
  - "Editors"
  - "Notebooks"
subtitle: "Personal Tips to Boost Your Efficiency with Vim"
description: "Explore a personal collection of Vim commands and tricks that I've found useful in enhancing my text editing efficiency. Whether you're a DevOps engineer, a frontend developer, or a backend coder, these notes will guide you through mastering Vim."
keywords:
  - "Vim commands"
  - "Vim tips"
  - "Vim tricks"
  - "Text editing"
  - "Development tools"
  - "Coding productivity"
---

## What is Vim?
Vim (Vi IMproved) is a highly configurable text editor built to make creating and changing any kind of text very efficient. It is an improved version of the vi editor distributed with most UNIX systems.

> I am using Vim for monitoring log files, modifying scripts and environment files for DevOps tasks. Occasionally, I switch to frontend and backend development, where I might forget some commands. Here are some notes for myself, and hopefully, they help others too!

## Basic Movements
| Command | Description                                                                                           |
| ------- | ----------------------------------------------------------------------------------------------------- |
| `h`     | Move cursor left                                                                                      |
| `j`     | Move cursor down                                                                                      |
| `k`     | Move cursor up                                                                                        |
| `l`     | Move cursor right                                                                                     |
| `gg`    | Go to the first line of the file                                                                      |
| `G`     | Go to the last line of the file                                                                       |
| `w`     | Move to the beginning of the next word                                                                |
| `e`     | Move to the end of the current word                                                                   |
| `b`     | Move to the beginning of the previous word                                                            |
| `0`     | Move the cursor to the beginning of the current line                                                  |
| `$`     | Move the cursor to the end of the current line                                                        |
| `W`     | Move the cursor to the beginning of the next WORD (a WORD is a sequence of non-whitespace characters) |
| `}`     | Move the cursor to the beginning of the next paragraph                                                |
| `{`     | Move the cursor to the beginning of the previous paragraph                                            |
| `%`     | Move the cursor to the matching bracket or parenthesis                                                |


## Editing Commands
| Command    | Description                                                          |
| ---------- | -------------------------------------------------------------------- |
| `i`        | Enter insert mode before the cursor                                  |
| `o`        | Insert a new line below the current line and enter insert mode       |
| `O`        | Insert a new line above the current line and enter insert mode       |
| `dd`       | Delete the current line                                              |
| `yy`       | Yank (copy) the current line                                         |
| `p`        | Paste the yanked or deleted text after the cursor                    |
| `J`        | join the current line with the next line                             |
| `u`        | Undo the last change                                                 |
| `r`        | Replace the character under the cursor with the next character typed |
| `s`        | Delete the character under the cursor and enter insert mode          |
| `x`        | Delete the character under the cursor                                |
| `Ctrl + r` | Redo the undone change                                               |
| `:w`       | Save the file                                                        |
| `:q`       | Quit Vim                                                             |
| `:wq`      | Save and quit                                                        |
| `:q!`      | Quit without saving                                                  |


## Searching and Replacing
| Command         | Description                               |
| --------------- | ----------------------------------------- |
| `/pattern`      | Search for `pattern`                      |
| `n`             | Repeat search in the same direction       |
| `N`             | Repeat search in the opposite direction   |
| `:s/foo/bar/g`  | Replace `foo` with `bar` in the file      |
| `:%s/old/new/g` | Replace all instances of `old` with `new` |


## Control
| Command    | Description                                                              |
| ---------- | ------------------------------------------------------------------------ |
| `Ctrl + o` | Jump back to the previous position                                       |
| `Ctrl + i` | Jump forward to the next position                                        |
| `Ctrl + f` | Move the cursor forward one screen                                       |
| `Ctrl + b` | Move the cursor backward one screen                                      |
| `Ctrl + d` | Move the cursor down half a screen                                       |
| `Ctrl + u` | Move the cursor up half a screen                                         |
| `Ctrl + g` | Show the current cursor position in the document                         |
| `Ctrl + w` | Delete the word before the cursor                                        |
| `Ctrl + y` | Copy the character above the cursor and insert it at the cursor position |
| `Ctrl + e` | Copy the character below the cursor and insert it at the cursor position |
| `Ctrl + r` | Enter register mode (used for copying and pasting text)                  |


## Customisation
| Command           | Description                   |
| ----------------- | ----------------------------- |
| `:set number`     | Show line numbers             |
| `:set hlsearch`   | Highlight all search matches  |
| `:set ignorecase` | Ignore case when searching    |
| `:set tabstop=4`  | Set the tab width to 4 spaces |
| `:set expandtab`  | Convert tabs to spaces        |
| `:set mouse=a`    | Enable mouse support in Vim   |
