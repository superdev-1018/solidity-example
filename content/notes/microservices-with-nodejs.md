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

### Event-Based Communication

### A crazy way of storing data

### Pros and Cons of Async Communication
