---
title: "Microservices with Nodejs"
date: 2020-09-23T07:48:24+05:30
draft: true
emoji: ":call_me_hand:"
description: "Subheading or a short description."
slug: "microservices-with-nodejs"
url: "microservices-with-nodejs"
tags: ["tag"]
syndicate: "false"
---

## What is a microservice?

> A monolithic contains all the routing, middleware, business logic and database access to implement all features of our application.

To answer this question we need to analyse how we are currently building our applications. Most probably we might probably be using a `Monoithic` architecture.
This is how we might be currently builiding our servers. In a monolithic server, all our code that is needed for the implementation would be in a single code base and we deploy that code base as one discrete unit so we might imagine that with a monolithic server we have some requests.

If we distill the meaning of a monolithic to a single feature then we have a `microservice`.

> A single microservice contains all the routing, middleware, business logic and database access to implement `one` features of our application.

Each features are services which are self-contained.

## Data management between services

This is one of the major problem that can arise when trying to change our current monolithic architecture to microservice. Data management means how we save one data within a service and how we communicate that data between services.

With microservices, the way we store and access data is little bit different than what we ought to do in a monolicthic architecture.

### How we store data

> For each service, we would need a separate database(if the service needs a database).

### How we access it

> To access data, services will `never`, ever reach into another service database.

### Why

The idea of giving every services with a database, is a pattern and its called `Database-Per-Service`. There are couple of reasons,
1. We want each service to run independently of other services -> i.e. if we have only one database if anyhting happens to the central database then all our services would crash. The other problem is scalling this database would be challenging, if we need some services to scale then we would be scalling the whole database istead it would be more easy just to scale the database which needs scalling based on services. if Service A reaches for the database of Service B, if the DB2 crashes then both Service A & B would be down. Because there is a dependency between service `A` and `B`.
2. Database schema/structure might change unexpectedly -> i.e. if the team incharge of Service B changes the schema of the Db like `{ name: 'x' }` to `{firstName: 'x' }` but the Service B forgot to inform Service A about this change then the next time when `Service A` queries for the request then this service might crash.
3. Some services might function more efficiently with different types of DB's (SQL vs. NoSQL)

### Big problem with Data

The crux of the issue is how do we implement a fourth service which need to access and query information from the pervious three services. i.e. if you have Users, Products and Orders collection and now you need to find all the product ordered by a particular user how tould you do that ?

Next, will look two methodologies to implement `Service D`;

### Sync Communication Between Services

There are two communication strategies between services,
1. Sync
2. Async

> These words don't mean what they mean in the Javascript world.

### Synchronous

> One service communicate with each other services using direct request.

There are some upsides and downsides to this,

#### Pros

1. Conceptually easy to understand
2. Service D wont need a database


#### Cons

1. Introduces a dependency between services
2. If any inter-service request fails, the overall request fails
3. The entire request is only as fast as the slowest request
4. Can easily introduce webs of requests.

### Asynchronous

> Services communicate with each other using events

### Two ways of using Async Communication

### Event-Based Communication

Event bus handles the notification of each services which are like nodes. Each service can either emit events or receive events from the event bus. But we only get a single point of failure which is the` Event Bus`. i.e. A service would emit an event, with the service type and data, then the other service would emit an event back like `UserQueryResult` and then sent the data back to Service D.

There is a very good reason why this model isn't used in the projects, because it has all the downsides of a synchronous communication and additional downsides.

### The second way (Recommended)

This would be similar to database-per-service pattern, async communication is going to seem bizarre and inefficient.

1. Lets refine the exact goal of Service D. i.e. `code to show products ordered by a particular user` -> `Given the ID of a user, show the tile and image for every product they have ever ordered`
2. We can solve this by introducing a database (can be SQL or NoSQL) with two tables, `Products` and `Users`, with only the fields they need, `Products` -> `id, title, image` and `Users` -> `id, product ids`
3. Now, the challenge is how do we generate this database and sticks these information. 
4. Every time, a request comes to any of the A, B, C services we would emit a event to the service bus, if anybody care this the product that I created. Then any service which has subscribed to this event would get the information and then updates the Service D database.

### Pros

1. Service D has zero dependencies on other services.
2. Service D will be extremely fast


### Cons

1. Data duplication, Paying for extra storage + extra DB
2. Harder to understand

