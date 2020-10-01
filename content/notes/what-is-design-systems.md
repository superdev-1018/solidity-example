---
title: "What is design systems"
date: 2020-09-22T00:22:21+05:30
draft: true
emoji: ":call_me_hand:"
description: "Subheading or a short description."
slug: "what-is-design-systems"
url: "what-is-design-systems"
tags: ["tag"]
syndicate: "false"
---

### Why a design system?
Creating an overarching design that different teams can use is far from specific to
micro frontend. The term design system has become popular in software development
in recent years. It provides a way to systematically tackle design in an era of growing
web applications that must work on a multitude of devices.
 A design system contains design tokens (fonts, colors, icons …), reusable interface components (buttons, form elements …), more advanced patterns (tooltips, layers …), and
most importantly a well-explained set of rules on how to use these individual pieces
together. Figure 12.1 shows some design system examples.

Two other terms often also come up in this context: pattern library and (living) style
guide. They mean the same thing: a way to modularize the complexity of the web with
a component-based system. However, they have a slightly different focus.
 The term pattern library describes a set of concrete building blocks developers can
use. It is a library that contains tangible components like buttons and form inputs. It
focuses more on the components than on the documentation aspect. You can say that
a pattern library is a subset of a design system.
Style guide is a traditional term from the design world. Before the internet, a style
guide in the form of a well-crafted stack of paper describing all design rules for a company’s corporate identity. The “living” prefix transferred this concept to the digital
age, where the illustrated components use the real code. In this chapter, we’ll use the
term design system when we talk about the broader concept and use pattern library when
it comes to the technical integration with the team’s applications.
 In this book, we won’t discuss how to build a design system. You can find a lot of
excellent blog posts,2
 books,3
 and even hands-on checklists4
 to get deeper into this
topic. Instead, we’ll focus on the design system aspects that are crucial to get right for
running a successful micro frontends architecture.
12.1.1 Purpose and role
In a micro frontends project, all features the product teams create are directly targeted
to the end user. These features make the user’s life more enjoyable and thus create
value for the company. A centralized design system does not fit into this model.
 No user signs up for Microsoft Office 365 because they think that Microsoft’s Fluent UI Design System is the best. But there’s no question that the existence of the
design system makes Office a more usable product. People who are familiar with using
Word have an easier time understanding PowerPoint or Excel because all teams use
the same UI paradigms and components.
 A design system has an indirect effect that manifests itself through the product
teams. The goal of a design system team should never be to create the most beautiful,
best documented, or most versatile design system on the market. The objective of a
design system team should be supporting the product teams as best as possible. A
design system is a product that serves other products.
12.1.2 Benefits
A sound design system can help product development by providing these benefits:
 Consistency—Making user interfaces from different teams “feel familiar” to the
user.

Shared language—A design system forces you to create a shared vocabulary that
all involved parties understand. Proper naming is never easy, but having consistent names for your components and patterns improves communication across
teams and avoids misunderstandings.
 Development speed—Having clear guidance and the necessary UI components to
build a new feature makes the developer’s life easier.
 Scaling—The value of a design system increases by the number of teams using it.
New teams have a solid foundation they can build upon. No redundant discussions on “if we should use a custom select box or not.” Hopefully, the authors of
the design system have documented this decision before.
The benefits of a design system are mid- and long-term. Creating a robust system will
take a considerable amount of time. However, if your project is of a particular size,
these efforts will pay off quickly. It will also save you a lot of unsatisfactory design consolidations and eliminate chaotic redesign projects.

Process, not project
Having your own design system has some real benefits. We, as developers, like to focus
on its technical aspects. Creating a set of usable components for all teams sounds like
a worthwhile project. But in an otherwise distributed organizational structure, a
design system also introduces an important social aspect. A former co-worker of mine
likes to describe the design system as…
... the campfire around which people from different teams and with different professions
gather regularly.
Dennis Reimann
This quote highlights the fact that a design system is never a finished product. It’s better to think of it as a process. A design system should be a living and evolving piece of
infrastructure. The usable components and formalized design rules are the result of
discussions between user experience (UX) and design experts as well as developers
and product owners from the teams. It should be the single source of truth when it
comes to design questions.

We’ll go through the diagram line by line.
PURE CSS
The pattern library provides its component styling via CSS classes. Twitter Bootstrap is
the role model in this category. Teams need to craft the components markup according to the pattern library’s documentation:

 Benefits
– Easy to implement.
– Works server- and client-side.
– Compatible with all tech stacks that can generate HTML.
 Drawbacks
– Styling only.
– Teams need to know the internal markup.
– Changing the component markup is hard.
FRAMEWORK-SPECIFIC COMPONENTS
The pattern library uses the component format of one specific framework. An opensource example is Vuetify,12 a component library designed for Vue.js. This model
requires all teams to use the chosen JavaScript framework. The component formats of
the popular frameworks have been pretty stable—even across major versions. This format stability means that teams have to use the same framework but aren’t required to
run the same version:
 Benefits
– Easy to implement.
– Works server- and client-side.
– Components integrate seamlessly with the team’s code.
– Components can use the full feature-set of the framework.
 Drawbacks
– All teams must use the same framework.
FRAMEWORK-AGNOSTIC COMPONENTS
Web Components integrate well with all modern frameworks.13 You can also use them
on plain old HTML pages. Have a look at the Duet Design System 14 as a useful reference. The developers built it using Stencil.15 In contrast to the “pure CSS” approach,
Web Components also encapsulate templating and behavior:
 Benefits
– Supported by all browsers
– Future-proof (web standard)
– Compatible with plain HTML and frameworks
 Drawbacks
– Only works client-side16
– JavaScript required (makes progressive enhancement hard)
MULTIPLE FRAMEWORK COMPONENTS
The model is related to framework-specific components. But instead of supporting
one framework, the pattern library exports its components in different formats. Providing more than one format requires extra work because you will need to implement
the framework-specific parts multiple times. However, the concepts, component list,
and the CSS styling stay the same.
 Google’s Material Design is a large-scale example of this. The design system itself
defines styling, markup documentation, and scripts. Projects like Material UI (React)
or Angular Material take the “generic” design system and transform it into a framework-specific format:
 Benefits
– Works server- and client-side.
– Components integrate seamlessly with the team’s code.
– Components can use the full feature set of the framework.
 Drawbacks
– More work required.
COMMON TEMPLATING LANGUAGE (E.G. JSX)
It doesn’t have to be a specific component format. You can also ship HTML templates
and styling (for example, via CSS Modules). Many JavaScript libraries and frameworks
support the JSX templating format. This way, it’s possible to write the HTML template
once and use it in a Hyperapp, Inferno, Preact, or React application.
 The lifecycle methods and event handling in these frameworks are not the same.
This difference means that you can’t include behavior. Components have to be stateless. But if your design system mainly includes essential UI components, this is not an
issue.
 Have a look at X-DASH17 from The Financial Times to see a real world example of
this method. We are using the JSX approach in newer projects and are happy with its
trade-offs:
 Benefits
– Works server- and client-side.
– Supports all frameworks compatible with the templating language
 Drawbacks
– You can’t include behavior.
– Implementations might vary and speak different “dialects.”
NOTE You can use this model with any templating language. But be aware
that implementations aren’t always 100% compatible with each other. For
example, we had significant issues with using handlebar templates across languages like Scala, Python, and JavaScript. Be confident that your model works
and its limitations are well understood. Create technical spikes to verify it
before you roll it out company-wide. 

### What goes into the central pattern library?
Having all user interface elements visible and documented in the central pattern
library is valuable. The central documentation makes it easy to get an overview. But
sharing a component comes with costs.
12.5.1 The costs of sharing components
Changing a component in a team’s application code is much easier than changing a
component in the central pattern library because central components
 Live in another project. You have to publish a new version to see the change in the
team’s code.
 Might be used by other teams. You need to think about the possible consequences
of these teams.
 Must conform to higher quality standards. You want to ensure that even people
from outside your team understand a component’s capability and the reasoning
behind it.
 Might require code review. Depending on your design system development process,
you might instantiate a dual control principle to guarantee a high standard.
These aspects make changing a component in the central pattern library much harder
than directly changing it in your own code. Putting all components into the pattern
library would slow down the development. That’s why you need to consciously decide
what goes into the central pattern library and what should better be local to a team.
12.5.2 Central or local?
In a lot of cases, the decision whether a component should be central for all or local for
one team is easy to make:
 The definition of the sale color should, of course, be global. The same goes for
an icon set or the styling of an input field.
 Advanced patterns like a payment options box or the concrete layout of the
product page should be controlled by the respective teams.
But there’s a middle-ground where these decisions are not that clear. Is the filter navigation or a product tile a central component? Let’s look at some vectors that help you
make your decisions.

COMPONENT COMPLEXITY
The atomic design methodology19 is quite popular. It uses the chemistry metaphor of
atoms, molecules, and organisms to sort components by their complexity. This metaphor also highlights the fact that larger components are a composition of smaller
ones. Figure 12.9 shows the atomic design categories from lowest complexity (design
tokens) to highest complexity (features and pages).
Figure 12.9 The atomic design methodology organizes the design system by complexity. The
central pattern library should include the basic building blocks (tokens, atoms, molecules).
More sophisticated components (organisms, features, entire pages) should be under a team’s
control. The middle ground around molecules and organisms is fuzzy

The central and local pattern libraries could also use the same tool to develop and
generate the design system documentation site. Popular tools for this are Storybook,21
Pattern Lab,22 and UIengine.Using the same tool has the advantage that moving a
component from the central to the local pattern library (or the other way around) is
as easy as moving a component folder.

### References

https://designsystemsrepo.com/design-systems/
See Vitaly Friedman, “Taking The Pattern Library To The Next Level,” Smashing Magazine, http://mng.bz/
wB7W. 3 See Design Systems, by Alla Kholmatova, http://mng.bz/qM7E. 4 See https://designsystemchecklist.com.
Tweet by @jina: “zombie style guides — style guides that aren’t maintained and part of your process. they die
and rot. they eat your brains,” https://twitter.com/jina/status/638850299172667392.

A series of blog posts on design systems. It’s a goldmine. You should read them all. :) https://medium.com/
@nathanacurtis.
https://www.duetds.com/

https://medium.com/eightshapes-llc/design-system-tiers-2c827b67eae1
