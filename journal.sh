#!/bin/bash

# Get the current date in the format yymmdd
DATE=$(date +%y%m%d)
JOURNAL_DIR="content/journals"
BUNDLE_DIR="$JOURNAL_DIR/journal-$DATE"
FILENAME="$BUNDLE_DIR/index.md"

# Function to print colored output
print_success() {
  echo -e "\033[32m$1\033[0m"
}

print_error() {
  echo -e "\033[31m$1\033[0m"
}

# Check if the bundle already exists
if [ -d "$BUNDLE_DIR" ]; then
  print_error "Journal $BUNDLE_DIR already exists."
  exit 1
fi

# Count existing journals to get week number
NUM_JOURNALS=$(ls -d "$JOURNAL_DIR"/journal-*/ 2>/dev/null | wc -l)
NEW_WEEK=$((NUM_JOURNALS + 1))

# Create the page bundle directory
mkdir -p "$BUNDLE_DIR"

# Create the journal markdown file
cat <<EOF >"$FILENAME"
---
title: "Journal: Week $NEW_WEEK"
date: $(date +"%Y-%m-%d %T")
tags:
  - "journal"
categories:
  - ["About Me", "Journals"]
comments: false
---



## ✨ Highlights of the Week

...



## 📝 Reading Insights

...



## 🥰 Memories |

...



EOF

print_success "► Week $NEW_WEEK journal created! → $FILENAME"
