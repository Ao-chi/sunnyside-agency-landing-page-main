# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page

### Screenshot

![](./src/screenshots/desktop.png)
![](./src/screenshots/mobile.png)
![](./src/screenshots/mobile-menu.png)

### Links

-   Solution URL: [Add solution URL here](https://your-solution-url.com)
-   Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-   Semantic HTML5 markup
-   SCSS
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   [React](https://reactjs.org/) - JS library

### What I learned

I learned to use basic event handlers in react. I also learned to use hooks a little. I had a hard time making the images change from mobile to desktop versions so I just made a little hack where I put both images from desktop and mobile. I know it's not a best practice.

```js
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

     <button className="nav-toggle" onClick={toggle} type="button">
                    <img src={hamburger} alt="hamburger nav" />
                </button>
```

### Continued development

After learning about useState I would like to explore React more. Will still continue to learn this one since I know there's more to it.

### Useful resources

-   (https://reactjs.org/docs/hooks-custom.html) - Reference I used for hooks.
-   (https://youtu.be/TSnVdoqxf8g?list=PL6x5Q-Sj_BlZyZ_karcNAhstzf2FsMsDW) - Web Dev Junkie for doing event handlers in a react way.

## Author

-   Frontend Mentor - [@Ao-chi](https://www.frontendmentor.io/profile/Ao-chi)
