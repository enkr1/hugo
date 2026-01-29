/**
 * Custom TypeScript for Hugo Blog
 * Auto-loaded by theme's footer script
 */

import InfiniteScroll from './infiniteScroll';

/**
 * Strip line numbers from code blocks when copying
 * Works with Hugo's inline line numbers (lineNumbersInTable = false)
 */
function handleCodeCopy(event: ClipboardEvent) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    // Check if selection is within a code block with line numbers
    const range = selection.getRangeAt(0);
    const container = range.commonAncestorContainer;
    const codeBlock = container.nodeType === Node.ELEMENT_NODE
        ? (container as Element).closest('.chroma')
        : (container.parentElement?.closest('.chroma'));

    if (!codeBlock) return;

    // Check if this code block has inline line numbers
    const hasLineNumbers = codeBlock.querySelector('.ln');
    if (!hasLineNumbers) return;

    // Get the selected text and remove line numbers
    const selectedText = selection.toString();

    // Create a temporary container to parse the selection
    const temp = document.createElement('div');
    const fragment = range.cloneContents();
    temp.appendChild(fragment);

    // Remove all .ln spans (line numbers)
    temp.querySelectorAll('.ln').forEach(ln => ln.remove());

    // Get clean text without line numbers
    const cleanText = temp.textContent || '';

    // Override clipboard with clean text
    event.preventDefault();
    event.clipboardData?.setData('text/plain', cleanText);
}

window.addEventListener('load', () => {
    // Only initialize on pages with pagination
    const pagination = document.querySelector('.pagination');
    if (!pagination) return;

    // Initialize infinite scroll on main article list (not sticky)
    InfiniteScroll.create('.article-list:not(.article-list--sticky)');
});

// Add copy handler for code blocks
document.addEventListener('copy', handleCodeCopy);
