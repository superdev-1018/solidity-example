Solomon Hykes, the author of Docker, gives his take:

If you want to manage machines, you should use Vagrant… If you want to build and run application environments, you should use Docker.

In other words, Vagrant manages virtual machines and Docker packages apps into containers. But even with his explanation, it can be quite difficult to wrap our heads around what it all means. So I’ll try my best to explain with an analogy.

Imagine you have two pieces of real estate. The first is called Vagrantland and the second is called Dockertown. They’re both the same size and have the same underlying infrastructure (e.g., water systems, electrical grids, pipes and cables).

Your job as a developer is to add stores, restaurants, and other businesses to it because right now, it’s just an area of land with nothing on it.

In Vagrantland, every time a business is added, a new building must be constructed.

For example, to add a coffee shop (let’s call it “Think Java”), you need to construct the physical shop and set up the building infrastructure (e.g., electricity, lighting, water). Once the building is erected, you add the necessary ingredients to make the place look and feel like an actual coffee shop.

Afterwards, you decide to add a furniture store called “Couch De Bee.” Like “Think Java,” you need to build a physical store with the same infrastructure. Then, the interior design and products will be added to make the store look like it’s selling furniture.

So you could probably tell that adding a business can be quite cumbersome and hard to scale in Vagrantland.

Let’s switch to Dockertown. First, a single building is constructed with all the infrastructure set up, just like a building in Vagrantland. The difference, however, is that the building in Dockertown acts like a mall. So whenever a new business is added, it simply takes up space inside the building.

For instance, when a jewelry shop called “Ruby and Reals” is added, it simply finds a place in the mall and sets up the shop with the materials it needs to sell gems. And when a fruit stand called “Mongo” is added, it takes up a small space in the mall and starts doing business right away.

What’s efficient here is that both businesses share the same building infrastructure such as the lighting system and the bathroom facilities. In this scenario, adding, removing, and changing businesses is fast, easy, and scalable.

So let’s bring everything together. What’s similar between Vagrant’s virtual machines and Docker’s containers is that they both sit on top a host operating system. The difference, on the other hand, is how the application is run. For Vagrant, each virtual machine includes a guest operating system with the application and its libraries and binaries. For Docker, the containers don’t need a guest OS for each application since they all share the same kernel.

```
https://github.com/Charnnarong/oauthsandbox
```


To up the virtual machine
```
vagrant up
```

To check the status
```
vagrant status
```

```
vagrant ssh
```

To save the VM status for later use
```
vagrant suspend
```

To get more command
```
vagrant --help
```

To resume from the suspended state
```
vagrant resume
```

Install Key cloak
