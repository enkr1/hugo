/**
 * Infinite Scroll for Hugo Blog
 * Automatically loads next page of posts when scrolling near bottom
 */

const NEXT_PAGE_SELECTOR = '.pagination a[aria-label="Next page"]:not(.disabled)';
const ARTICLE_SELECTOR = '.article-list:not(.article-list--sticky) > article';

class InfiniteScroll {
    private container: HTMLElement;
    private pagination: HTMLElement | null;
    private nextUrl: string | null = null;
    private loading: boolean = false;
    private observer: IntersectionObserver;
    private sentinel: HTMLElement;
    private loader: HTMLElement;
    private errorCount: number = 0;
    private maxRetries: number = 3;

    private constructor(
        container: HTMLElement,
        pagination: HTMLElement | null,
        nextUrl: string
    ) {
        this.container = container;
        this.pagination = pagination;
        this.nextUrl = nextUrl;

        // Create loader element with accessibility
        this.loader = document.createElement('div');
        this.loader.className = 'infinite-scroll-loader';
        this.loader.setAttribute('role', 'status');
        this.loader.setAttribute('aria-live', 'polite');
        this.loader.setAttribute('aria-label', 'Loading more posts');
        this.loader.style.display = 'none';
        this.container.after(this.loader);

        // Create sentinel element for IntersectionObserver
        this.sentinel = document.createElement('div');
        this.sentinel.className = 'infinite-scroll-sentinel';
        this.loader.after(this.sentinel);

        // Set up IntersectionObserver
        this.observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry?.isIntersecting && !this.loading && this.nextUrl) {
                    void this.loadNextPage();
                }
            },
            { rootMargin: '200px' }
        );
        this.observer.observe(this.sentinel);

        // Hide pagination UI
        if (this.pagination) {
            this.pagination.style.display = 'none';
        }
        document.body.classList.add('infinite-scroll-active');
    }

    /**
     * Factory method to create InfiniteScroll instance
     * Returns null if prerequisites aren't met
     */
    static create(containerSelector: string): InfiniteScroll | null {
        const container = document.querySelector(containerSelector);
        if (!(container instanceof HTMLElement)) {
            return null;
        }

        const pagination = document.querySelector('.pagination') as HTMLElement | null;
        const nextLink = document.querySelector(NEXT_PAGE_SELECTOR);

        if (!(nextLink instanceof HTMLAnchorElement)) {
            return null; // No next page, don't initialize
        }

        return new InfiniteScroll(container, pagination, nextLink.href);
    }

    private async loadNextPage(): Promise<void> {
        if (!this.nextUrl || this.loading) return;

        this.loading = true;
        this.showLoader();

        try {
            const response = await fetch(this.nextUrl);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // Extract and append articles
            const newArticles = doc.querySelectorAll(ARTICLE_SELECTOR);
            if (newArticles.length === 0) {
                this.handleEnd();
                return;
            }

            newArticles.forEach(article => {
                this.container.appendChild(article.cloneNode(true));
            });

            // Reset error count on success
            this.errorCount = 0;

            // Update next URL from the fetched page's pagination
            const nextLink = doc.querySelector(NEXT_PAGE_SELECTOR);
            if (nextLink instanceof HTMLAnchorElement) {
                this.nextUrl = nextLink.href;
            } else {
                this.handleEnd();
            }
        } catch (error) {
            this.handleError(error);
        } finally {
            this.loading = false;
            this.hideLoader();
        }
    }

    private showLoader(): void {
        this.loader.textContent = '';
        this.loader.className = 'infinite-scroll-loader';
        this.loader.style.display = 'flex';
    }

    private hideLoader(): void {
        // Don't hide if we've reached the end (end message is showing)
        if (this.nextUrl !== null) {
            this.loader.style.display = 'none';
        }
    }

    private handleEnd(): void {
        this.observer.disconnect();
        this.sentinel.remove();

        // Show zen end message
        this.loader.className = 'infinite-scroll-end';
        this.loader.innerHTML = '<span>完</span>';
        this.loader.style.display = 'flex';

        // Set nextUrl to null AFTER showing message (signals to skip hideLoader)
        this.nextUrl = null;
    }

    private handleError(error: unknown): void {
        this.errorCount++;

        if (this.errorCount >= this.maxRetries) {
            // Show permanent error after max retries
            this.loader.className = 'infinite-scroll-error';
            this.loader.innerHTML = `
                <span>Failed to load more posts</span>
                <button class="infinite-scroll-retry" aria-label="Retry loading">Retry</button>
            `;
            this.loader.style.display = 'flex';

            const retryBtn = this.loader.querySelector('.infinite-scroll-retry');
            retryBtn?.addEventListener('click', () => {
                this.errorCount = 0;
                void this.loadNextPage();
            });

            // Stop observing - user must click retry
            this.observer.disconnect();
        }
        // If under max retries, will retry on next scroll
    }

    /**
     * Cleanup method to destroy the infinite scroll
     */
    destroy(): void {
        this.observer.disconnect();
        this.sentinel.remove();
        this.loader.remove();
        document.body.classList.remove('infinite-scroll-active');
        if (this.pagination) {
            this.pagination.style.display = '';
        }
    }
}

export default InfiniteScroll;
