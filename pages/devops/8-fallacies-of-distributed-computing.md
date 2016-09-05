---
layout: page
title: "8 Fallacies of Distributed Computing"
description: "..."
---


## Big Trouble & Painful Learning

Essentially everone, when they first build a distributed application, makes the following eight assumptions. All proven to be false in the long run and all causing big trouble and painful learning experiences.

Peter Deutsch

[original article (link is dead)](https://blogs.oracle.com/jag/resource/Fallacies.html)
[wiki article](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing)




# The Eight Fallacies of Distributed Computing

1.   The network is reliable
2.   Latency is zero
3.   Bandwidth is infinite
4.   The network is secure
5.   Topology doesn't change
6.   There is one administrator
7.   Transport cost is zero
8.   The network is homogeneous






## The 9th Fallacy of Distributed Computing

While working recently with colleagues and customers to define and architect public and private "cloud computing" systems and to explore the technical challenges of implementing such systems, I was reminded of Peter Deutsch's observation in 1994 of the Seven Fallacies of Distributed Computing along with the Eight Fallacy added in 1996 by James Gosling: 

1. The network is reliable.
2. Latency is zero.
3. Bandwidth is infinite.
4. The network is secure.
5. Topology doesn't change.
6. There is one administrator.
7. Transport cost is zero.
8. The network is homogeneous.

Although others have suggested additional fallacies, I think a critical cloud computing issue clearly suggests what the ninth one should be: 

9. Location is irrelevant.

By suggesting this fallacy I mean the assumption that where computing happens and data resides is not an issue in today's massively connected global Internet. With sufficient connectivity and bandwidth, you might assume that outsourcing your computing services, possibly even outside your home country, is simply a matter of economics. This is clearly false. While end users of public cloud based applications may not be aware that or even care that their computation is occurring on some randomly and dynamically assigned set of virtualized servers which may change even as they use them, nor be concerned about precisely what storage devices are dynamically assigned to host their data, nevertheless these resources do indeed have physical presences which tie them to specific locations that have geographic and jurisdictional characteristics.

The overall stability and reliability of a cloud provider data center depends in part on its geographic location - its proximity to sufficient power and cooling resources, and its safety from natural and man-made disasters. That's why Google has built data centers close to power generating facilities and why Switch Communications built its huge SuperNAP center in geologically stable and meteorologically quiet Las Vegas.

But even more critical than physical location is the legal jurisdiction in which your computation occurs and where your data resides. Laws governing privacy, data ownership, intellectual property, monitoring, and auditing vary from state to state in the US and globally from one country to another. And pinning down the exact location of a global distributed IT service is difficult. In the event of legal disputes over liability or disclosure issues, where will cases be tried? Many such jurisdictional questions remain unanswered, and some countries are reacting with understandable caution about sharing global computing resources. Canada, for example, has prohibited the use of US data centers for certain government projects due to concerns about the provisions of the US Patriot Act, and India is considering legislation requiring IT business services to originate within the country.

So, if you haven't already frightened yourself examining the myriad cloud security issues, google for "cloud computing" with "jurisdiction" for some additional reading material. You'll find that, as with real estate, location is anything but irrelevant.
