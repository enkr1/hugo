#!/usr/bin/env bash
set -euo pipefail

# Create an ad-hoc journal entry for today
# Usage: ./create_journal_note.sh [optional title]
# Example: ./create_journal_note.sh "On Being Stuck"

DATE=$(date +%y%m%d)
JOURNAL_DIR="journal-${DATE}"
JOURNAL_PATH="content/journals/${JOURNAL_DIR}/index.md"

get_title() {
    if [ $# -gt 0 ]; then
        TITLE="$*"
    else
        printf "Journal title (e.g. \"On Being Stuck\"): "
        read -r TITLE
        if [ -z "$TITLE" ]; then
            echo "Error: title cannot be empty"
            exit 1
        fi
    fi
}

get_title "$@"

# Handle collision: if folder exists (weekly entry for today), append -2
if [ -d "content/journals/${JOURNAL_DIR}" ]; then
    JOURNAL_DIR="journal-${DATE}-2"
    JOURNAL_PATH="content/journals/${JOURNAL_DIR}/index.md"
    echo "Note: journal-${DATE}/ already exists, using ${JOURNAL_DIR}/"
fi

echo "Creating ad-hoc journal: $JOURNAL_PATH"
hugo new --kind journal-note "$JOURNAL_PATH"

# Inject title into frontmatter (perl \Q + $ENV — safe against all special chars)
in='title: "Journal: "' \
out="title: \"Journal: ${TITLE}\"" \
perl -pi -e 's/\Q$ENV{"in"}/$ENV{"out"}/' "$JOURNAL_PATH"

echo "Title set: \"Journal: ${TITLE}\""

if [ -n "${EDITOR:-}" ]; then
    echo "Opening in $EDITOR..."
    "$EDITOR" "$JOURNAL_PATH"
else
    echo "Done! Edit with: \$EDITOR $JOURNAL_PATH"
fi
