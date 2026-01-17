#!/bin/bash

# Migration Script: Hexo → Hugo
# Migrates journal posts from Hexo to Hugo page bundles

set -e

HEXO_POSTS="../hexo/source/_posts"
HUGO_JOURNALS="content/journals"
HUGO_POSTS="content/posts"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "╔═══════════════════════════════════════╗"
echo "║  Hexo → Hugo Migration Script         ║"
echo "╚═══════════════════════════════════════╝"
echo ""

# Function to convert Hexo asset_img to Markdown
convert_asset_img() {
    local content="$1"
    # Pattern: {% asset_img "size" filename.ext "caption" %}
    # Or: {% asset_img "" filename.ext "caption" %}
    # Convert to: ![caption](filename.ext)
    echo "$content" | sed -E 's/\{% asset_img "[^"]*" ([^ ]+) "([^"]*)" %\}/![\2](\1)/g' | \
                      sed -E 's/\{% asset_img ([^ ]+) "([^"]*)" %\}/![\2](\1)/g' | \
                      sed -E 's/\{% asset_img ([^ ]+) %\}/![](\1)/g'
}

# Function to migrate a journal post
migrate_journal() {
    local md_file="$1"
    local basename=$(basename "$md_file" .md)
    local target_dir="$HUGO_JOURNALS/$basename"

    echo -e "${GREEN}→${NC} Migrating journal: $basename"

    # Create page bundle directory
    mkdir -p "$target_dir"

    # Read and convert content
    local content=$(cat "$md_file")

    # Convert asset_img syntax to markdown
    content=$(convert_asset_img "$content")

    # Convert categories from Hexo format to Hugo format
    # Hexo: categories: - ["About Me", "Journals"]
    # Hugo: categories: - About Me \n - Journals
    content=$(echo "$content" | sed 's/- \["About Me", "Journals"\]/- "About Me"\n  - "Journals"/g')

    # Write converted content
    echo "$content" > "$target_dir/index.md"

    # Copy images from asset folder if exists
    local asset_folder="$HEXO_POSTS/$basename"
    if [ -d "$asset_folder" ]; then
        local img_count=$(ls -1 "$asset_folder" 2>/dev/null | wc -l | tr -d ' ')
        if [ "$img_count" -gt 0 ]; then
            echo "   Copying $img_count images..."
            cp "$asset_folder"/* "$target_dir/" 2>/dev/null || true
        fi
    fi
}

# Function to migrate a regular post
migrate_post() {
    local md_file="$1"
    local basename=$(basename "$md_file" .md)
    local target_dir="$HUGO_POSTS/$basename"

    echo -e "${GREEN}→${NC} Migrating post: $basename"

    # Create page bundle directory
    mkdir -p "$target_dir"

    # Read and convert content
    local content=$(cat "$md_file")

    # Convert asset_img syntax to markdown
    content=$(convert_asset_img "$content")

    # Write converted content
    echo "$content" > "$target_dir/index.md"

    # Copy images from asset folder if exists
    local asset_folder="$HEXO_POSTS/$basename"
    if [ -d "$asset_folder" ]; then
        local img_count=$(ls -1 "$asset_folder" 2>/dev/null | wc -l | tr -d ' ')
        if [ "$img_count" -gt 0 ]; then
            echo "   Copying $img_count images..."
            cp "$asset_folder"/* "$target_dir/" 2>/dev/null || true
        fi
    fi
}

# Create target directories
mkdir -p "$HUGO_JOURNALS"
mkdir -p "$HUGO_POSTS"

# Count posts
JOURNAL_COUNT=0
POST_COUNT=0

# Migrate journals (files starting with "journal-")
echo ""
echo -e "${YELLOW}Migrating Journals...${NC}"
echo "─────────────────────"
for file in "$HEXO_POSTS"/journal-*.md; do
    if [ -f "$file" ]; then
        migrate_journal "$file"
        ((JOURNAL_COUNT++))
    fi
done

# Migrate other posts
echo ""
echo -e "${YELLOW}Migrating Posts...${NC}"
echo "─────────────────────"
for file in "$HEXO_POSTS"/*.md; do
    if [ -f "$file" ]; then
        basename=$(basename "$file" .md)
        # Skip journals (already migrated)
        if [[ ! "$basename" =~ ^journal- ]]; then
            migrate_post "$file"
            ((POST_COUNT++))
        fi
    fi
done

echo ""
echo "╔═══════════════════════════════════════╗"
echo "║  Migration Complete!                  ║"
echo "╠═══════════════════════════════════════╣"
echo "║  Journals: $JOURNAL_COUNT"
echo "║  Posts:    $POST_COUNT"
echo "╚═══════════════════════════════════════╝"
echo ""
echo "Next steps:"
echo "1. Run 'hugo server' to preview"
echo "2. Check for any conversion issues"
echo "3. Run 'hugo --minify' to build"
