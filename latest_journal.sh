#!/usr/bin/env bash
set -euo pipefail

# Print the latest weekly journal entry, located by its date-encoded folder
# name (journal-YYMMDD sorts chronologically — more reliable than mtime, which
# lies the moment you edit an older entry).
#
# Usage:
#   ./latest_journal.sh        # print week title + path
#   ./latest_journal.sh -o     # also open it in $EDITOR

cd "$(dirname "$0")"

latest=$(ls -d content/journals/journal-[0-9]* 2>/dev/null | sort | tail -1)

if [ -z "$latest" ]; then
  echo "No journal entries found in content/journals/" >&2
  exit 1
fi

grep -m1 '^title:' "$latest/index.md" | sed 's/^title: *//; s/"//g'
echo "$latest/index.md"

if [ "${1:-}" = "-o" ]; then
  "${EDITOR:-vim}" "$latest/index.md"
fi
