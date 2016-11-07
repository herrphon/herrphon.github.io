---
layout: page
title: "Docker Swarm and Jenkins"
description: ""
---


Cool talk from Viktor Farcic ([@vfarcic](https://twitter.com/vfarcic)):

* [Continuous deployment with jenkins and docker swarm](http://vfarcic.github.io/jenkins-swarm/#/cover)
* [Presentation on youtube ](https://www.youtube.com/watch?v=fs1ED_y5mUc)



## Short Walk-Through

Install [Swarm Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Swarm+Plugin) on jenkins. 
This plugin allows clients to register with jenkins (so the other way around compared to normal node registration).

Deploy service globaly to run swarm agents using image [vfarcic/jenkins-swarm-agent](https://hub.docker.com/r/vfarcic/jenkins-swarm-agent/):

``` bash
export USER=admin && export PASSWORD=admin

docker service create --name jenkins-agent \
    -e COMMAND_OPTIONS="-master http://$(docker-machine ip swarm-1):8082/jenkins \
                        -username $USER \
                        -password $PASSWORD \
                        -labels 'docker' \
                        -executors 5" \
    --mount "type=bind,source=/var/run/docker.sock,target=/var/run/docker.sock" \
    --mount "type=bind,source=/workspace,target=/workspace" \
    --mount "type=bind,source=$HOME/.docker/machine/machines,target=/machines" \
    --mode global \
    vfarcic/jenkins-swarm-agent
```


Image source on [github](https://github.com/vfarcic/docker-jenkins-slave-dind):

``` Dockerfile
FROM docker:1.12.1

MAINTAINER Viktor Farcic <viktor@farcic.com>

ENV SWARM_CLIENT_VERSION 2.2
ENV DOCKER_COMPOSE_VERSION 1.8.0
ENV COMMAND_OPTIONS ""

RUN adduser -G root -D jenkins
RUN apk --update add openjdk8-jre python py-pip git

RUN wget -q https://repo.jenkins-ci.org/releases/org/jenkins-ci/plugins/swarm-client/${SWARM_CLIENT_VERSION}/swarm-client-${SWARM_CLIENT_VERSION}-jar-with-dependencies.jar -P /home/jenkins/
RUN pip install docker-compose

COPY run.sh /run.sh
RUN chmod +x /run.sh

CMD ["/run.sh"]
```

With _run.sh_:
``` bash
java -jar /home/jenkins/swarm-client-${SWARM_CLIENT_VERSION}-jar-with-dependencies.jar ${COMMAND_OPTIONS}
```
