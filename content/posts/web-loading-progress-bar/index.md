---
title: "Building a Dynamic and Smooth Progress Bar for Web Loading"
sticky: 0
date: 2024-10-27 03:42:23
tags:
  - javascript
  - css
  - html5
categories:
  - "Software Engineering"
  - "Web Development"
  - "Front-end"
  - "UI/UX"
subtitle: "Learn to develop a seamless progress bar that accurately tracks every resource on your website."
description: "Learn how to build a robust and interactive loading progress bar that tracks images, API calls, and other assets to deliver a seamless user experience."
---



While developing the my [platforms (my version of linktree)](https://enkr1.github.io/platforms/), I realised my initial loading mechanism, which relied on my customised `docReady`, was not cutting it. It missed out on crucial elements like external images and API calls, leading to an inconsistent loading experience. I knew I needed a more comprehensive solution—one that would track every resource seamlessly, ensuring users experience a smooth, uninterrupted progress bar.



---



## Step-by-Step Breakdown of the Solution

### 1. Dynamically Track All Resources: Images and APIs
The first thing I addressed was dynamically collecting all resources that needed to load—images, API calls, and any external assets.

**Code Snippet:**
```javascript
const getAllImages = () => {
  return [...document.querySelectorAll('img')].map(img => img.src);
};
```
This snippet collects all the images on the page dynamically and ensures that every image is tracked for loading.

### 2. Incremental Progress Calculation
To ensure smooth progress tracking, I calculated the progress percentage based on the total number of resources (images + API calls). For every loaded resource, the progress is updated.

**Key Concept:**

- **Total Resources:** Total number of images + API calls.
- **Loaded Items:** Track loaded resources and update the percentage accordingly.

**Code Snippet:**
```js
const updateLoadingProgress = () => {
  const percent = (loadedItems / totalItems) * 100;
  updateLoadingProgressSmoothly(percent);
};
```
This ensures that every time a resource is loaded, the percentage updates progressively.

### 3. Smooth Progress with Delays
For a polished user experience, I added delays and smaller steps to the progress increments. This ensures that even with a fast network, the bar doesn't jump directly to 100%.

**Key Concept:**
Adjust the delay based on progress—slower increments at the start, faster towards the end, but always smooth.

**Code Snippet:**
```js
const updateLoadingProgressSmoothly = (targetPercent, delay = 50) => {
  const step = (targetPercent - currentPercent) / 100;
  const interval = setInterval(() => {
    if (currentPercent < targetPercent) {
      currentPercent += step;
      document.getElementById('loading-bar').style.width = `${currentPercent}%`;
    } else {
      clearInterval(interval);
    }
  }, delay);
};
```
This snippet ensures that the progress bar moves smoothly, even for faster connections.

### 4. Tracking API Calls
In addition to images, I also needed to track API calls. I implemented a simple wrapper around `fetch()` to ensure each call was accounted for in the progress.

**Code Snippet:**
```js
const trackedFetch = async (url) => {
  const apiPromise = fetch(url);
  await apiPromise;
  loadedItems++;
  updateLoadingProgress();
  return apiPromise;
};
```
This function tracks each API call and updates the progress bar as soon as the response is received.

### 5. Debugging for Accurate Progress Tracking
Throughout the implementation, I used logging to debug issues like overshooting the progress (going beyond 100%) or not reaching 100%. Debugging helped fine-tune the logic for a more reliable progress bar.

**Code Snippet:**
```js
log(`${loadedItems}/${totalItems} - Loading progress: ${percent}%`);
```
Logging every resource loaded gave me insight into the progress flow and helped eliminate inaccuracies.

### 6. Hiding the Loading Screen
Once all resources are loaded and the progress bar reaches 100%, I smoothly hide the loading screen to reveal the page.

**Code Snippet:**
```javascript
if (currentPercent >= 100) {
  setTimeout(() => {
    document.getElementById('loading-screen').style.opacity = "0";
    document.getElementById('loading-screen').style.zIndex = "-999";
  }, 300);
}
```
This adds a slight delay before removing the loading screen, giving users a final touch of polish.



---



## My Code
```js
let loadedItems = 0;
let totalItems = 0;
let currentPercent = 0;

const apiFetches = [
    `${ENDPOINT_DATA}/platform_obj.json`,
    `${ENDPOINT_DATA}/profile.json`,
    // Add more API URLs here
];

// Smooth progress update with easing towards the end
const updateLoadingProgressSmoothly = (targetPercent, delay = 50) => {
    targetPercent = Math.min(targetPercent, 100); // Cap at 100%
    const step = (targetPercent - currentPercent) / 100; // Smaller step for smoother progress
    log(`Updating loading progress to ${targetPercent}%, step: ${step}`);

    const interval = setInterval(() => {
        if (currentPercent < targetPercent) {
            currentPercent += step;
            currentPercent = Math.min(currentPercent, targetPercent); // Ensure it doesn't overshoot
            document.getElementById('loading-bar').style.width = `${currentPercent}%`;
            document.getElementById('loading-text').innerText = `${Math.floor(currentPercent)}%`;
        } else {
            clearInterval(interval);

            // Only hide the loading screen when 100% is reached
            if (currentPercent >= 100) {
                setTimeout(() => {
                    document.getElementById('loading-screen').style.opacity = "0";
                    document.getElementById('loading-screen').style.zIndex = "-999";
                }, 300);
            }
        }
    }, delay);
};

// Function to update loading progress
const updateLoadingProgress = () => {
    const percent = (loadedItems / totalItems) * 100;

    // Slow down the earlier progress increments
    const delay = percent < 50 ? 1000 : percent < 90 ? 500 : 300; // Adjust delay based on current progress

    log(`${loadedItems}/${totalItems} - Loading progress: ${percent}%, delay: ${delay}ms`);

    updateLoadingProgressSmoothly(percent, delay);
};

// Dynamically fetch all images from the DOM
const getAllImages = () => {
    const images = [...document.querySelectorAll('img')].map(img => img.src);
    totalItems += images.length; // Increment totalItems dynamically
    return images;
};

// Track image loading with promises
const trackImageLoading = (src) => {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = img.onerror = () => {
            loadedItems++;
            log(`${loadedItems}/${totalItems} - Image loaded: ${src}`);

            updateLoadingProgress();
            resolve();
        };
    });
};

// Track API loading and fetch
const trackedFetch = async (url) => {
    totalItems++; // Increment totalItems dynamically
    const apiPromise = fetch(url);
    await apiPromise;
    loadedItems++;
    log(`[DEBUG] ${loadedItems}/${totalItems} - API loaded: ${url}`);
    updateLoadingProgress();
    return apiPromise;
};

// Start tracking resources (images and API calls)
const startTrackingResources = async () => {
    const images = getAllImages(); // Automatically fetch all images from the DOM

    log(`[DEBUG] Total initial resources to load: ${totalItems} (Images: ${images.length}, APIs: ${apiFetches.length})`);

    const imagePromises = images.map(trackImageLoading);
    const fetchPromises = apiFetches.map(trackedFetch);

    await Promise.all([...imagePromises, ...fetchPromises]);
    updateLoadingProgress(); // Final call to ensure progress reaches 100%
};

// Start tracking resources when DOM is ready
document.addEventListener('DOMContentLoaded', startTrackingResources);
```



---



## Preview
![](20241027-041546.gif)



---


## Final Thoughts

Creating a dynamic loading bar might seem like a small detail, but I've found that it makes a **huge difference** in how smooth and polished the overall experience feels for users. Whether it's tracking images, API calls, or other external assets, having everything run seamlessly creates that subtle, yet important, sense of reliability and care.

Of course, this is just one approach, and I know it's definitely **NOT** the best or only way to do it. I'm always learning, and I'm open to feedback from anyone who's more experienced! 🙌

I'm sure there are tons of ways to make this even better, and I'd love to hear how the pros out there tackle similar challenges.

If you've done something similar or have tips to share, feel free to drop a comment below. Let's learn from each other and keep improving our craft! 🤩



---

## References
- https://gsap.com/community/forums/topic/12201-draw-svg-plugin-to-animate-a-dashed-line/
- https://codepen.io/MAW/pen/zGXvWW
