# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](images/image-product-mobile.jpg)
![](images/image-product-desktop.jpg)

### Links

- Solution URL: [https://github.com/myrhisyoinked/frontend-playground/tree/main/Product%20preview%20card%20component](https://github.com/myrhisyoinked/frontend-playground/tree/main/Product%20preview%20card%20component)
- Live Site URL: [https://myrhisyoinked.github.io/frontend-playground/Product%20preview%20card%20component/](https://myrhisyoinked.github.io/frontend-playground/Product%20preview%20card%20component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Grid
- Mobile-first workflow

### What I learned

I just remember that srcset and sizes exists :skull:
```html
<img 
      srcset="images/image-product-mobile.jpg 375w, images/image-product-desktop.jpg 1440w" 
      sizes="(max-width: 779px) 375px,
                                1440px"
      src="images/image-product-mobile.jpg"
      alt="Perfume picture" 
      class="parfume-picture"
/>
```

## Author

- Website - [github.com/myrhisyoinked](https://github.com/myrhisyoinked)
- Frontend Mentor - [@myrhisyoinked](https://www.frontendmentor.io/profile/myrhisyoinked)