#!/usr/bin/env bash
set -euo pipefail

# Create a new journal entry for today
# Usage: ./create_journal.sh

# Get today's date in YYMMDD format
DATE=$(date +%y%m%d)
JOURNAL_PATH="content/journals/journal-${DATE}/index.md"

# Check if journal already exists
if [ -f "$JOURNAL_PATH" ]; then
    echo "Journal for today already exists: $JOURNAL_PATH"
    echo "Opening in default editor..."
    ${EDITOR:-vim} "$JOURNAL_PATH"
    exit 0
fi

# Create new journal
echo "Creating journal: $JOURNAL_PATH"
hugo new "$JOURNAL_PATH"

# Open in editor if EDITOR is set
if [ -n "${EDITOR:-}" ]; then
    echo "Opening in $EDITOR..."
    "$EDITOR" "$JOURNAL_PATH"
else
    echo "Journal created successfully!"
    echo "Edit with: \$EDITOR $JOURNAL_PATH"
fi
