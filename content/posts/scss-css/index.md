---
title: "SCSS/CSS Notebook"
date: 2024-04-19 01:51:40
tags:
  - "designing"
  - "frontend"
  - "ui-ux-design"
categories:
  - "Software Engineering"
  - "Web Development"
  - "Front-end"
  - "Notebooks"
subtitle: "Enhancing Web Aesthetics and Efficiency with SCSS/CSS"
description: "Unlock the potential of SCSS and CSS with this essential guide filled with tips and tricks to streamline your web design process. Learn how to harness the power of these styling languages to create responsive, visually appealing, and efficient websites. Whether you're a beginner or a seasoned front-end developer, discover innovative techniques and best practices that can elevate your web development skills."
keywords:
  - "SCSS tips"
  - "CSS tricks"
  - "Web design best practices"
  - "Front-end development"
  - "Responsive web design techniques"
---


As a software engineer, mastering SCSS and CSS has been a game changer in my web development career. These technologies not only facilitate intricate designs but also optimise functionality and responsiveness. This blog post explores some of the powerful SCSS/CSS features that have revolutionised how I approach web design.

<!-- more -->

## Dynamic Visual Effects with Mix Blend Modes

The `mix-blend-mode` property is a CSS gem for creating stunning visual effects by blending elements' colors with their background in various ways:

```scss
.blend {
  mix-blend-mode: exclusion;
}
```

Utilising this property can add an artistic flair to images and text, giving your website a unique aesthetic that stands out.

ref: https://css-tricks.com/almanac/properties/m/mix-blend-mode/

## Ensuring Text Clarity and Layout Control

Preventing Text Wrapping with White Space Control:

To keep text in a single, unbroken line, especially useful in navigations and button texts:

```scss
white-space: nowrap;
```
ref: https://stackoverflow.com/questions/17704539/css-getting-text-in-one-line-rather-than-two

Managing Overflowing Text:

For text that might extend beyond the bounds of its container, ensuring it wraps effectively without disrupting the layout:

```scss
overflow-wrap: break-word;
```

This property is crucial for maintaining a polished look, particularly on smaller screens.

## Responsive Design with Media Queries in SCSS

Adjusting layouts responsively based on device screen sizes is seamless with SCSS media queries:

```scss
.xx-container {
  width: 50vw;

  @media screen and (max-width: $screen_sm) {
    width: 80%;
  }
}
```

These snippets facilitate dynamic styling that adapts fluidly across different devices, enhancing user experience.

## Fine-Tuning User Interfaces

Resizable Text Areas:

Allowing users to resize text areas vertically enhances usability, particularly in forms and comment boxes:

```scss
resize: vertical;
```

Text Justification for Improved Readability:

Achieving a clean and aligned text display can be done with:

```scss
text-align: justify;
text-justify: inter-word;
```

## Optimising Element Sizing and Positioning

Adjusting Heights for Cross-Browser Compatibility:

Some properties behave differently across browsers, such as `fit-content`. For better compatibility, especially with Firefox:

```scss
height: -moz-max-content;
height: fit-content !important;
```

Managing Scroll Positions with Scroll Margin:

Setting a custom scroll position for anchored IDs enhances navigational precision:

```scss
scroll-margin-top: 100px;
```

## Mastering Flexbox and Grid for Perfect Layouts

Flexbox for Centering:

```scss
display: flex;
align-items: center;
justify-content: center;
```

Grid for Complex Layouts:

Creating responsive, grid-based designs is simplified using CSS Grid:

```scss
.parent .child {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 3rem;
  text-align: center;
}
```

## Choosing Between PX and REM for Responsive Design

Another common question you will be asked or you have been looking for the answer. Understanding the difference between `px` and `rem` can significantly affect the scalability and accessibility of your website:

```css
html {
  font-size: 16px;
}

h1 {
  font-size: 2rem; /* 32px */
}

p {
  font-size: 1rem; /* 16px */
}
```

`rem` units adapt based on the root element's font size, making them ideal for responsive designs that need to accommodate various device settings.

To use `rem` in your project, just replace your `px` values with `rem` values, bearing in mind the root font-size. You might need to make adjustments based on the visual design and proportions. For example, if you want a font size of 18px, and your root font-size is 16px, the REM value would be **`18/16 = 1.125rem`**.



## Conclusion

Leveraging the advanced features of SCSS and CSS not only streamlines the styling process but also ensures that web applications are accessible, aesthetically pleasing, and responsive. The journey through CSS and SCSS is ongoing, and each project brings new insights and opportunities for creative solutions.

---

Embrace these techniques and integrate them into your web development practices to craft more engaging, efficient, and user-friendly web applications.
