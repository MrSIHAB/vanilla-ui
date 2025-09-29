<div align="center">

<span style="font-size:50px; font-weight:bold;">
    Vanilla UI
</span>
<br />
<span  style="font-size:28px; font-weight:500;">By MrSIHAB</span>

<!-- * Badges -->
</div>

## Introduction

Vanilla UI is build for reducing the complexity of many javascript framework for
simpler projects. This framework has a back story. You can know it
[here](#back-story).\
This framework is highly inspired by Flutter framework. It doesn't use JSX or
TSX. Instead it is vanilla. Pure vanilla.

The basic theory is that, **_"This framework gives you some functions to create HTML tags or elements."_** _And you can provide additional information while creating the element. such as attributes, class, id, styles, child, parent, eventListener etc._

> It doesn't compile or bundle or creates bridge between two languages, it's the core javascript with typescript's type safety.

## Back Story

I were making a extension for browsers. A homepage or New Tab. If you don't know, the
new tab is just a single page website. The extension is live with the name of [Material-Homepage](https://github.com/mrsihab/material-homepage). Initially I don't had any planing to make the extension with any frameworks like React, Angular, Veu etc. Because it would be more effortful and heavy. Instead I wanted to stay with core. I wanted performance.  
And so, I built it with core HTML, CSS, JavaScript. I successfully completed the initial version of Material-Homepage. Then I published some more versions with improvements and features. Then I realized that slowly slowly things are getting messy, non manageable. The relation of HTML and JavaScript isn't that productive.

Then I thought what if I can use some logics in HTML? Then I thought that If I can do anything with javascript, why not do everything with javascript? But, I realized that how effort will it take to make a simple element with some attributes or properties. Then I thought what if I make a function for creating tags and take some
properties and return the tag or element. And then I realized that flutter did something similar. They doesn't require any JSX, HTML, or XML for UI building. The Widget classes are similar like JSX elements. So, I can do something like that in web with core javascript and that may reduce some level of complexity for simpler projects.
And so I made this. It's not anything rocket science. It's very basic. You import a and call a function from vanilla-ui. You pass some options similar to setting up attributes in HTML tags. And it returns a HTML element with all the properties set.  
If you pass any child element, it runs the append child on it.
That's it.

<br />
<br />

Ok, if you have any confusion, let's see some examples and comparison:

## Examples:

### Basic Hello world!

What you write in **Vanilla-UI :**

```js
// Vanilla-UI

h1({
  children: text("Hello world!"),
});
```

**Behind The scene**, this what is happening :

```javascript
// JavaScript

var h1 = document.createElement("h1");
var text = document.createElement("span");
text.textContent = "Hello World!";
h1.appendChild(text);
```

Same thing in HTML :

```html
<!-- HTML -->
<h1>
  <span>Hello World!</span>
</h1>
```

### A complex example:

A button with some styles and click event listener:

```html
<!-- HTML, CSS and JavaScript -->
<style>
  .btn {
    color: white;
    background: #0077ff;
    padding: 10px 15px;
    font-weight: bold;
    font-size: 22px;
    border-radius: 7px; /* Semi Rounded */
  }
</style>

<button class="btn">Follow</button>

<script>
  document.querySelector(".btn").addEventListener("click", async (e) => {
    // Follow logic ....

    this.textContent = "Following";
    alert("Thanks for following");
  });
</script>
```

```js
// Only using JavaScript

const button = document.createElement("button");

button.textContent = "Follow";
button.style.color = "white";
button.style.background = "#0077ff";
button.style.padding = "10px 15px";
button.style.fontWeight = "bold";
button.style.fontSize = "22px";
button.style.borderRadius = "7px";

button.onClick((e) => {
  // Follow logic ....

  button.textContent = "Following";
  alert("Thanks for following");
});
```

```js
// With the help of vanilla-UI

button({
  style: {
    color: "white",
    background: "#0077ff",
    padding: "10px 15px",
    fontWeight: "bold",
    fontSize: "22px",
    borderRadius: "7px",
  },
  onClick: (e) => {
    // follow logic ...

    e.textContent = "following";
    alert("Thanks for following");
  },
  children: Text("Follow"),
});
```
