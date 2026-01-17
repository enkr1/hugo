#!/usr/bin/env python3
"""Convert Hexo nested array categories to Hugo flat categories."""

import re
import sys
from pathlib import Path


def convert_nested_categories(content: str) -> str:
    """Convert - ["A", "B"] to - "A"\n  - "B" format."""

    # Pattern matches: - ["item1", "item2", ...] with optional quotes
    # Captures the array content
    pattern = r'^(\s*)-\s*\[(.*?)\]\s*$'

    lines = content.split('\n')
    result = []
    in_categories = False

    for line in lines:
        # Track if we're in categories section
        if re.match(r'^categories:\s*$', line):
            in_categories = True
            result.append(line)
            continue

        # Exit categories section on new key (not a list item)
        if in_categories and line and not line.startswith(' ') and not line.startswith('\t') and not line.startswith('-'):
            in_categories = False

        if in_categories:
            match = re.match(pattern, line)
            if match:
                indent = match.group(1)
                array_content = match.group(2)

                # Parse the array items (handle "item" and 'item')
                items = re.findall(r'["\']([^"\']+)["\']', array_content)

                # Convert to flat format
                for item in items:
                    result.append(f'{indent}- "{item}"')
            else:
                result.append(line)
        else:
            result.append(line)

    return '\n'.join(result)


def deduplicate_categories(content: str) -> str:
    """Remove duplicate categories from frontmatter."""

    # Split into frontmatter and body
    parts = content.split('---', 2)
    if len(parts) < 3:
        return content

    frontmatter = parts[1]
    body = parts[2]

    # Find and deduplicate categories
    lines = frontmatter.split('\n')
    result = []
    in_categories = False
    seen_categories = set()

    for line in lines:
        if re.match(r'^categories:\s*$', line):
            in_categories = True
            result.append(line)
            continue

        if in_categories:
            if line and not line.startswith(' ') and not line.startswith('\t'):
                in_categories = False
                result.append(line)
            else:
                # Check if this is a category line
                cat_match = re.match(r'^(\s*-\s*)["\']?([^"\']+)["\']?\s*$', line)
                if cat_match:
                    cat_value = cat_match.group(2).strip()
                    if cat_value not in seen_categories:
                        seen_categories.add(cat_value)
                        result.append(line)
                else:
                    result.append(line)
        else:
            result.append(line)

    return '---' + '\n'.join(result) + '---' + body


def process_file(filepath: Path) -> bool:
    """Process a single file. Returns True if modified."""

    content = filepath.read_text(encoding='utf-8')
    original = content

    # Convert nested arrays to flat
    content = convert_nested_categories(content)

    # Deduplicate
    content = deduplicate_categories(content)

    if content != original:
        filepath.write_text(content, encoding='utf-8')
        return True
    return False


def main():
    hugo_root = Path(__file__).parent.parent
    posts_dir = hugo_root / 'content' / 'posts'

    if not posts_dir.exists():
        print(f"Posts directory not found: {posts_dir}")
        sys.exit(1)

    modified = 0
    total = 0

    for index_file in posts_dir.glob('*/index.md'):
        total += 1
        if process_file(index_file):
            modified += 1
            print(f"Modified: {index_file.parent.name}")

    print(f"\nProcessed {total} files, modified {modified}")


if __name__ == '__main__':
    main()
