---
title: "How to select the right type of database for your next project"
date: 2020-11-24T01:27:39+05:30
draft: false
emoji: ":call_me_hand:"
description: "Choosing the right database for your application can be overwhelming. This article will guide you on what types of databases are prevalent today and which of them are a right choice for your project"
slug: "how-to-select-the-right-type-of-database-for-your-project"
url: "how-to-select-the-right-type-of-database-for-your-project"
tags: ["database", "sql", "nosql"]
syndicate: "false"
---
 
Up until recently whenever I thought about a project it was either "SQL vs NoSQL", util recently that I come to terms that they are much deeper than that, given the rapid improvement in the industry of NoSQL databases.
 
This article would exlore on most common database types and their relative merits and if you need to know more about them read on.
 
## Relational database / RDMS
 
> Examples: `Oracle`, `MySQL`, `MSServer`, `PostgreSQL`
 
Relational databases were developed in the 1920 to handle the vast data being produced. They have a solid foundational theory and have influenced nearly every database system in use today.
 
Relational database store datasets as `relations` - tables with rows and columns where all information is stored as a value of a specific cell. Data in an RDBMS is managed using SQL. Though there are different implementations, SQL is standardized and provides a level of predictability and utility.
 
After an early flood of vendors tried to take advantage of the system’s popularity with not-quite-relational products, creator `E.F. Codd` outlined a set of rules that must be followed by all relational database management systems. Codd’s 12 rules revolve around imposing strict internal structure protocols, making sure that searches reliably return requested data, and preventing structural alterations (at least by users). The framework ensured that relational databases are consistent and reliable to this day.
 
### Strengths
 
- Relational databases excel at handling highly structured data and provide support for ACID (Atomicity, Consistency, Isolation, and Durability) transactions. Data is easily stored and retrieved using SQL queries. The structure can be scaled up quickly because adding data without modifying existing data is simple.
 
- Creating limits on what certain user types can access or modify is built into the structure of an RDBMS. Because of this, relational databases are well-suited to applications that require tiered access. For example, customers could view their accounts while agents could both view and make necessary changes.
 
### Weaknesses
 
The biggest weakness of relational databases is the mirror of their biggest strength. As good as they are at handling structured data, they have a hard time with unstructured data. Representing real world entities in context is difficult in the bounds of an RDBMS. “Sliced” data has to be reassembled from tables into something more readable, and speed can be negatively impacted. The fixed schema doesn’t react well to change, either.
 
Cost is a consideration with relational databases. They tend to be more expensive to set up and grow. Horizontal scaling, or scaling by adding more servers, is usually both faster and more economical than vertical scaling, which involves adding more resources to a server. However, the structure of relational databases complicates the process. Sharding (where data is horizontally partitioned and distributed across a collection of machines) is necessary to scale out a relational database. Sharding relational databases while maintaining ACID compliance can be a challenge.
 
### Use a relational database for:
 
Situations where data integrity is absolutely paramount (i.e., for financial applications, defense and security, and private health information)
Highly structured data
Automation of internal processes
 
## CAP Theorem
 
> CAP theorem, which was first designed by Eric Brewer, is one way of discerning the design of a distributed system: but it’s not the only way. There’s always a tradeoff between consistency, availability and partition tolerance.
 
### Understanding the Tradeoff
 
The reason that we have many database options available today is due to the CAP Theorem. CAP stands for `consistency`, `availability` and `partition tolerance`.
 
- Consistency means that any read request will return the most recent write.Every node returns the most recent state, or doesnt provide a state at all.
 
- Availability means that the non-responding node must respond in a reasonable amount of time. Every node in the network has a constant read and write access. This state liveness, what must happen.
- Partition Tolerance means that the system will continue to operate despite network or node failures. If a node crashes/ communiation fails, service still perfoms as expected.
 
- CA - Single sitr cluster, therefore all nodes are always in contact. When a particion occurs, the system blocks. When you shard/partition the database, we need to write a layer on top to manage service the request of the customer.
- CP - Some data may not be accessible, but the rest is still consistent/accurate. We will use the master/slave architecture but when the master fails the system breaks. To negate this we can have multiple masters, but still it doesnt solve the problem. Slave are useless without the master.
- AP - System is still available under partitioning but some of the data returned may be inaccurate. Lets say one node relays the update to all other nodes. These are `eventual consistency` model, if we have three different users accessng the same index, they might see different states of the data. But cassandra and voldermort provides something called Immediate consistency: is having the identical data on all replica nodes at any given point in time. This is with the cost of performance, if we opt for a strong consistency then the performance of it would be worse than a RDMS database.
 
Immediate consistency: is having the identical data on all replica nodes at any given point in time.
Eventual consistency: by controlling our read and write consistencies, we can allow our data to be different on our replica nodes, but our queries will still return the most correct version of the partition data.
What this means is that because we can choose between immediate and eventual consistency, we end up with a system that has tunable consistency
 
Tunable Consistency means that you can set the CL for each read and write request. So, Cassandra gives you a lot of control over how consistent your data is. You can allow some queries to be immediately consistent and other queries to be eventually consistent. That means, in your application, the data that requires immediate consistency, you can create your queries accordingly and the data for which immediate consistency is not required, you can optimize for performance and choose eventual consistency. It is an inevitability that the network sometimes fails due to complexities both physical and logical. We are used to failing networks due to physical issues such as poor wiring, but there are other logical issues such as garbage collection, which can cause problems for networks. Quite inevitably, networks, therefore, are partitioned into multiple groups due to network failures. In the CAP theorem, partition tolerance is defined as the capability to account for any loss of a message between partitions. In other words, if there are two clusters G1 and G2 (partitions), we can assume, in the worst case, that the communication link between G1 and G2 has failed. The system should be able to account for it.
 
> At any given time, only two of these 3 requirements can be satisfied at once. Ex: In order to get both `availability` and `partition tolerance`, you have to give up consistency.Partition is when node A caannot receive messages from node B then they have a partition between them. That means we have an unbounded network latency, meaning the message wont get back to the user. Partition tolerance means the ability to function inspite the partition within the network..
 
Every reasonable system thinks the choice of P is one of the given and might occur (though we might have unbreakable partition in your system but network latency might cause discrepencies) anad we need to think it might appear so we only have two choices so it often ends in a dilemma between consistency and availability.The choirce is to whether to return a simple and outdated value or to not return a value at all.
 
 
### References
 
- [How to choose the right type of database for your enterprise](https://www.infoworld.com/article/3268871/how-to-choose-the-right-type-of-database-for-your-enterprise.html)
- [Choosing The Right Database](https://towardsdatascience.com/choosing-the-right-database-c45cd3a28f77)
- [Data Consistency in Apache Cassandra — Part 1](https://medium.com/dugglabs/data-consistency-in-apache-cassandra-part-1-7aee6b472fb4#:~:text=Eventual%20Consistency,any%20given%20point%20in%20time.)
- [CAP Theorem Berkley](https://www.youtube.com/watch?v=K12oQCzjPxE)
