<div align="center">

<span style="font-size:50px; font-weight:bold;">
    Vanilla UI
</span>
<br />
<span  style="font-size:28px; font-weight:500;">By MrSIHAB</span>

<!-- * Badges -->
</div>

# Introduction

Vanilla UI is build for reducing the complexity of many javascript framework for
simpler projects. This framework has a back story. You can know it
[here](#back-story).\
This framework is highly inspired by Flutter framework. It doesn't use JSX or
TSX. Instead it is vanilla. Pure vanilla.

The basic theory is that, **_"This framework gives you some functions to create HTML tags or elements."_** _And you can provide additional information while creating the element. such as attributes, class, id, styles, child, parent, eventListener etc._

> It doesn't compile or bundle or creates bridge between two languages, it's the core javascript with typescript's type safety.

# Import

I published the package in JSR. So, there are multiple options available for you. You can choose any of them.

- esm :

  ```js
  import { ... } from "https://esm.sh/jsr/@eigfa/vanilla-ui";
  ```

- Deno + jsr (recommended) :

  ```js
  import { ... } from "jsr:@eigfa/vanilla-ui"
  ```

  If you have experience of using Deno, You may like this. And you require a additional `bundle` steps in this case.  
  (`deno bundle <MAIN>.ts -o <OUTPUT>.js`)(`deno bundle --help` for more info)

  If you do not know about Deno, follow These steps :

  - Install Deno. It's a JavaScript and TypeScript Runtime. Alternative to Nodejs and Developed by Node.js Creator Ryan Dahl.
  - Install Deno vs-code extension.
  - In your project directory, run the command `deno init`.
  - Now run this command to install vanilla-ui to your project. (`deno install jsr:@eigfa/vanilla-ui`)
  - Now you can access the vanilla-ui package from any typescript and javascript file in the project directory. (`import { ... } from "eigfa/vanilla-ui"`)
  - After everything, you have to bundle the scripts to a specific file. (ex.
    `deno bundle main.ts -o output/script.js`).
  - Link the `output/script.js` file in the `index.html` file.

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

## Quick Overview:

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

## Description

Vanilla Ui provides you some `functions with the name of HTML elements`. Each time, you call a function, you can provide additional properties in a object and the function will return an `HTML Element`. That's it.  
In addition, you can make custom elements same as you do in Flutter and React. Plus, some of you can publish this to any package manager. Ex, NMP, JSR.  
You can make those functions yourself. I already told you that what it does in background at the top. But why would you do if the same thing is already available and being maintained. It's up to you. Because I mainly made it for myself. To prevent copy coding. _I believe this is more productive than coding in direct HTML (: Personal Opinion)_.

I have added some more options like `onClick`, `onChange`, `onLoad`, `onHover`, and `onBlur` event listener by default. So, you can directly set those properties while creating the Element.
Additionally, I have added another property `eventListener`. Here you can set all the eventListener as an objects.

There is a property `children`. Here you can provide a single Element or a list of Elements.
It does the `appendChild` operation in the background. This helps you to make Element tree and gives you more productive code. Similar to Flutter - React.

Now, you may need to do something with an specific Element without removing it from the Element tree. Since this framework is in raw level, you can do it multiple ways. You probably thinking about some methods already. Do whatever you feel good. But I will tell you that one method that I am providing you. You can find a property called `controller`. It expects a function. And in first `parameter`, you will get the `element`. You can do anything with the element as you do after creating or grabbing an HTML Elements. This option exist to give you complete freedom. Also, I can make some mistakes and miss something. So, that's another reason of it's existence.

#### Run Function.

There is a `Run(elementTree)` function from `Vanilla-UI`. It's not a HTML Element. The `Run` requires a element or the Element tree in parameter. And it
Appends the Element tree into Body Element.  
You can optionally pass the root element's `Id` in second parameter of `Run` function. In this case, it will append the tree into the Root Element. And won't do anything with body element.

<!-- # Some Examples -->
<!--
### Hello World!

```html
<!--  Basic HTML Setup -- >
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
  <script src="script.js" type="module"></script>
</html>
```

```js
import { Run, h1, text } from "https://esm.sh/jsr/@eigfa/vanilla-ui";

Run(
  h1({
    children: text("Hello World!"),
  })
);

// Let's break down everything.
// You setup the basic index.html file. And link the javascript file.
// You import Run, h1, and text from vanilla-ui package
//
// You called the Run function.
// Provide the h1 element in the Run function.
// Provide a text element with a string as child of h1 element
``` -->

# Contribution

Any contribution will be highly helpful for this package.
