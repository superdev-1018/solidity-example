---
title: "Dig from Past: Scoped CSS"
date: 2020-09-13T16:36:44+05:30
draft: true
emoji: ":call_me_hand:"
description: "Subheading or a short description."
slug: "Failed-to-execute-process--/usr/local/bin/brew-.-Reason:
exec:-Exec-format-error"
url: "Failed-to-execute-process--/usr/local/bin/brew-.-Reason:
exec:-Exec-format-error"
tags: ["tag"]
syndicate: "false"
---

# Isolating Styles

Let’s look at CSS first. Sadly, browsers don’t offer much help here. The deprecated
Scoped CSS specification would have been an excellent fit for our use case. It allowed
you to mark a style or link tag with the attribute scoped. The effect was that these
styles would only be active in the DOM subtree they’re defined in. Styles from higher
up in the tree would still propagate down, but styles from within a scoped block would
never leak out. This specification did not last long, and browsers which already supported it pulled their implementation.

Some frameworks like Vue.js still use the scoped syntax to achieve this isolation. But they use automatic selector prefixing under the hood to make this work in the browser.

## NOTE In modern browsers2
it’s possible to get strong style scoping today via JavaScript and the ShadowDOM API, which is part of the Web Components specification. We’ll talk about this in chapter 5.

Since CSS rules are global by nature, the most practical solution is to namespace all
CSS selectors. Many CSS methodologies like BEM3 use strict naming rules to avoid
unwanted style leaking between components. But two different teams might come up
with the same component name independently, like the headline component in our
example. That’s why it’s a good idea to introduce an extra team-level prefix. Table 3.1
shows what this namespacing might look like


Table 3.1 Namespacing all CSS selectors with a team prefix
Team name Team prefix Example selectors
Decide decide .decide_headline .decide_recos
Inspire inspire .inspire_headline .inspire_recommendation__item
Checkout checkout .checkout_minicart .checkout_minicart—empty

NOTE To keep the CSS and HTML size small, we like to use two-letter prefixes like de, in, and ch. But for easier understanding, I opted for using longer and more descriptive prefixes in this book.

When every team follows these naming conventions and only uses class-name-based
selectors, the issue of overwriting styles should be solved. Prefixing does not have to be done manually. Some tools can help here. CSS Modules, PostCSS, or SASS are a good
start. You can configure most CSS-in-JS solutions to add a prefix to each class name. It
does not matter which tool a team chooses, as long as all selectors are prefixed. 


### References

[https://css-tricks.com/saving-the-day-with-scoped-css/](https://css-tricks.com/saving-the-day-with-scoped-css/)
[https://caniuse.com/shadowdomv1](https://caniuse.com/shadowdomv1)
[http://getbem.com/naming/](http://getbem.com/naming/)
