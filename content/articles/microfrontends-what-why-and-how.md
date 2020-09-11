---
title: "Micro-frontend: What, Why and How."
date: 2020-09-11T00:48:32+05:30
draft: true
emoji: ":call_me_hand:"
description: "Developing scalable application with cross-functional teams by extending the microservices idea for frontend development.  "
slug: "microfrontends-what-why-and-how"
url: "microfrontends-what-why-and-how"
tags: ["tag"]
syndicate: "false"
---

The frontend development has evolved in an exhilarating phase and with the continuous advancement of web frameworks, we've been able to develop web application which wasn't imaginable tens years ago. Since the first impression of your website experience mostly comes through the first five seconds, a high percentage of the user retention rate is directly associated with the frontend.

Its all handy and clean when building a frontend for a small and medium scale project, but if you are working with a large project that too with remote teams which want to improve its performance and need to add new features continually then a single team would be overwhelmed. 

This is where **Micro-frontend** comes to the rescue, which allows us to slice the application into pieces that multiple teams can work on independently.

```
Micro frontends are not a concrete technology. They’re an alternative organizational and architectural approach. That’s why we see a lot of different elements in this chart--like team structure, integration techniques, and other related topics.
```



They also wanted to architect the new system so that multiple teams could work on it independently without stepping on each other’s toes. This parallel feature development was crucial to their plan of digitally expanding their business. We opted for an architecture we called **verticalization**: the establishment of different cross-functional teams that build and evolve a specific area of the shop from database to user interface.

The individual team applications were able to work autonomously and only integrated in the frontend.


### Why

This changes when the project’s scope and the team size increases. Suddenly one developer can’t know every edge of the system anymore. Knowledge silos emerge inside your team. Complexity rises--making a change on one part of the system may have unexpected effects on other parts.
Discussions inside the team are more cumbersome. 

Frederick Brooks described this in the book _The Mythical Man-Month_ back in 1975. At some point, adding new developers to a team does not increase productivity.

Projects often are divided into multiple pieces to mitigate this effect. It became fashionable to divide the software, and thereby also the team structure, by technology. We introduced horizontal layers with a frontend team and one or more backend teams. Micro frontends describes an alternative approach. It divides the application into vertical slices. Each slice is built from the database to the user interface and run by a dedicated team.

 The different team frontends integrate in the customer’s browser to form the final page. This approach is related to the microservices architecture.But the main difference is that a service also includes its user interface. This expansion of the service removes the need for a central frontend team. 

 Here are the three main reasons why companies adopt a micro frontends architecture:

- Optimize for feature development --A team includes all skills needed to develop a feature. No coordination between separate frontend and backend teams is required.
- Make frontend upgrades easier --Each team owns its complete stack from frontend to database. Teams can decide to update or switch their frontend technology independently.
- Increase customer focus --Every team ships their features directly to the customer. No pure API teams or operation teams exist.

Each system is autonomous, which means it can function even when the neighboring systems are down. Every system has its own data store to achieve this. Additionally, it doesn’t rely on synchronous calls to other systems to answer a request.

The vertically arranged teams at the bottom are the core of this architecture. They each produce features in the form of pages or fragments. You can use techniques like SSI or Web Components to integrate them into an assembled page that reaches the customer.
Each team has its area of expertise in which it provides value for the customer.

An e-commerce example with three teams. Each team works on a different part of the e-commerce shop and has its mission statement that clarifies their responsibility.

we align the teams along the customer journey--the stages a customer goes through when buying something.

Team Inspire’s mission, as the name implies, is to inspire the browsing customer and to present products that might be of interest.

Team Decide helps in making an informed buying decision by providing excellent product images, a list of relevant specs, comparison tools, and customer reviews.

Team Checkout takes over when the customer has decided on an item and guides them through the checkout process.

A clear mission is vital for the team. It provides focus and is the basis for dividing the software system.


specialist teams - People are grouped by different skills or technologies. Frontend developers are working on the frontend; experts in handling payment work on a payment service.

A team generates the HTML, CSS, and JavaScript necessary for a given feature. To make life easier, they might use a JavaScript library or framework to do that. Teams don’t share library and framework code. Each team is free to choose the tool that fits best for their use case. Teams can upgrade their dependencies on their own. Team B uses Wonder.js v1.3, whereas Team C already switched to v 1.4.

How could you implement this? Each team could build their own pages, serve them from their application, and make them accessible through a public domain. You could connect these pages via links so that the end-user can navigate between them. Voilà--you are good to go, right? Basically, yes. In the real world, you have requirements that make it more complicated. 

Teams can work autonomously in their field of expertise.
Teams can choose the technology stack that fits best for the job at hand.
The applications are loosely coupled and only integrate in the frontend (e.g., via links).

Fragments

The concept of pages is not always sufficient. Typically you have elements that appear on multiple pages, like the header or footer. You do not want every team to re-implement them. This is where fragments come in.

A page often serves more than one purpose, and might show information or provide functionality that another team is responsible for. In figure 1.6, you see the product page of The Tractor Store. Team Decide owns this page. But not all of the functionality and content can be provided by them.

The Recommendations block on the right is an inspirational element. Team Inspire knows how to produce those. The Mini Basket at the bottom shows all selected items. Team Checkout implements the basket and knows its current state. The customer can add a new tractor to the basket by clicking the Buy button. Since this action modifies the basket, Team Checkout also provides this button as a fragment.


Some fragments might need context information, like a product reference for the Related Products block. Other fragments like the Mini Basket bring their own internal state. But the team that is including the fragment in their code does not have to know about state and implementation details of the fragment.

The term frontend integration describes a set of techniques you use to assemble the user interfaces (pages and fragments) of the teams into an integrated application. You can group these techniques into three categories: routing, composition, and communication. Depending on your architectural choices, you have different options to solve these categories.

Routing and page transitions

Here we are talking about integration on page level. We need a system to get from a page owned by Team A to a page owned by Team B. The solutions can be straightforward. You can achieve this by merely using an HTML link. If you want to enable client-side navigation, which renders the next page without having to do a reload, it gets more sophisticated. You can implement this by having a shared application shell or using a meta-framework like single-spa. We will look into both options in this book.

Composition

The process of getting the fragments and putting them in the right slots is performed here. The team that ships the page typically does not fetch the content of the fragment directly. It inserts a marker or placeholder at the spot in the markup where the fragment should go.

A separate composition service or technique does the final assembly. There are different ways of achieving this. You can group the solutions into two categories:

Server-side composition, for example with SSI, ESI, Tailor or Podium
Client-side composition, for example with iframes, Ajax, or Web Components
Depending on your requirements, you might pick one or a combination of both.

Communication

For interactive applications, you also need a model for communication. In our example, the Mini Basket should update after clicking the Buy button. The Recommendation Strip should update its product when the customer changes the color on the detail page. How does a page trigger the update of an included fragment? This question is also part of frontend integration.

Shared topics

Though the teams are autonomous and have everything they need, there are some shared topics are essential to address early on in a micro-frontend architecture to ensure a good end result and avoid redundant work. 

Web performance

Because we assemble a page from fragments made by multiple teams, we often end up with more code that our user must download. It’s crucial to have an eye on the performance of the page from the beginning. 

Design systems

To ensure a consistent look and feel for the customer, it is wise to establish a common design system. 

haring knowledge

Autonomy is essential, but you don’t want information silos. It’s not productive when every team builds an error-logging infrastructure on their own. 


References
https://the-tractor.store/
https://github.com/naltatis/micro-frontends-in-action-code
