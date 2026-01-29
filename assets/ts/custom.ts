/**
 * Custom TypeScript for Hugo Blog
 * Auto-loaded by theme's footer script
 */

import InfiniteScroll from './infiniteScroll';

window.addEventListener('load', () => {
    // Only initialize on pages with pagination
    const pagination = document.querySelector('.pagination');
    if (!pagination) return;

    // Initialize infinite scroll on main article list (not sticky)
    InfiniteScroll.create('.article-list:not(.article-list--sticky)');
});
