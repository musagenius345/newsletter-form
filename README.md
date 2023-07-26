# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page




### Links

- Solution URL: [Newsletter form using Popover API](https://github.com/musagenius345/newsletter-form.git)
- Live Site URL: [Newsletter form using Popover Api](https://relaxed-dodol-e397f0.netlify.app/)

### Built with

- Popover Api
- [Popover Api polyfill](https://github.com/oddbird/popover-polyfill)
- HTML Form Validation
- Responsive Design
- Fluid typography
- Responsive images with srcset
- Semantic HTML5 markup
- Vite
- Normalize CSS
- Netlify
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned
A few of what I think were my best code snippets

HTML
```html
<!--using srcset-->
<img
   class="...."
    srcset="img1.svg 375w,
            img2.svg 376w
    "
    sizes="100%"
    src="./assets/images/illustration-sign-up-mobile.svg"
    alt="sign up image"
          
        />
  <button
    popovertarget="success"
    popovertargetaction="show"
    class="full-width line-height btn popoverBtn"
    ><button>
  <dialog
        class="modal"
        id="success"
        popover="manual"
      ></dialog>
    
  <button
          class="...."
          popovertarget="success"
          popovertargetaction="hide"
        ></button>
```

CSS

```css
#email:invalid:is(:hover,:focus) {
  background-color: var(--tomato-light);
  color: var(--tomato-dark);
}
```
JS
```js
      dialog.showPopover(); 
```


### Continued development

I still have alot to learn about the popover API, dialog element and the popover polyfill does not work.

### Useful resources

- [Popover Api Introduction](https://developer.chrome.com/blog/introducing-popover-api/) - Great crash course
- [Using Popover API](https://developer.chrome.com/blog/introducing-popover-api/) - This article covers the Popover API in detail
- [Client-side Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - This almost covers all you need for Client-side Form Validation
- [Popover API polyfill](https://github.com/oddbird/popover-polyfill)
- [Popover API Explainer](https://open-ui.org/components/popover.research.explainer/#animation-of-popovers) - TBR
- [Semantic and popover attribute](https://hidde.blog/popover-semantics/) - TBR
- [Popover vs Dialog](https://hidde.blog/dialog-modal-popover-differences/) - TBR


## Author

- Website - [WIP](/)
- Frontend Mentor - [@musagenius345](https://www.frontendmentor.io/profile/musagenius345)
- Twitter - [@musabullahi](https://www.twitter.com/musabullahi)
