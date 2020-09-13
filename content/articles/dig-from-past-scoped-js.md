---
title: "Dig"
date: 2020-09-13T17:08:43+05:30
draft: true
emoji: ":call_me_hand:"
description: "Subheading or a short description."
slug: "Dig"
url: "Dig"
tags: ["tag"]
syndicate: "false"
---

ISOLATING JAVASCRIPT
The fragment, in our example, does not come with any client-side JavaScript. But you
also need inter-team conventions to avoid collisions in the browser. Luckily JavaScript
makes it easy to write your code in a non-global way
 
 A popular way is to wrap your script in an IIFE (immediately invoked function expression).
4
 This way, the declared variables and functions of your application are not
added to the global window object. Instead, we limit the scope to the anonymous function. Most build tools already do this automatically. For the static/page.js of Team
Decide it would look like this

```
(function () {
const element = ...;
...
})();
```
But sometimes you need a global variable. A typical example is when you want to ship
structured data in the form of a JavaScript object alongside your server-generated
markup. This object must be accessible by the client-side JavaScript. A good alternative is to write your data to your markup in a declarative way.
 Instead of writing this

```

<script>
const MY_STATE = {name: "Porsche"};
</script>
```
you could express it declaratively and avoid creating a global variable:
```
<script data-inspire-state type="application/json">
{"name":"Porsche"}
</script>
```
Accessing the data can be done by looking up the script tag in your part of the DOM
tree and parsing it:

```
(function () {
const stateContainer = fragment.querySelector("[data-inspire-state]");
const MY_STATE = JSON.parse(stateContainer.innerHTML);
})();
```
