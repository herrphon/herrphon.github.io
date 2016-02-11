---
layout: post
title: "Docker Debugging with sysdig"
description: ""
category: docker
tags: [docker]
---
{% include JB/setup %}



[sysdig](http://www.sysdig.org/)


[csysdig video](https://www.youtube.com/watch?v=UJ4wVrbP-Q8)



    # CPU usage across containers
    sudo sysdig -c topcontainers_cpu

    # CPU usage in a single container
    sudo sysdig -pc -c topprocs_cpu container.name=client

    # Network bandwidth
    sudo sysdig -pc -c topprocs_net



[Packet Hexdump Decoder](http://sadjad.me/phd/)


[Youtube - The Dark Art of Container Monitoring](https://www.youtube.com/watch?v=S-4wxLgpZdE)


<iframe width='600' height='400' src='//www.youtube.com/embed/S-4wxLgpZdE' frameborder='0' allowfullscreen></iframe>



[buildroot](http://buildroot.uclibc.org/)


[Best Practices For Containerized Environments: A Joint Sysdig and CoreOS Meetup](https://www.youtube.com/watch?v=gMpldbcMHuI)

[gist brian red beard](https://gist.github.com/brianredbeard)


[Containers and Microservices make performance worse by Gareth Rushgrove](https://speakerdeck.com/garethr/containers-and-microservices-make-performance-worse)



[weave](http://weave.works/)

[weaveblog](http://blog.weave.works/)



