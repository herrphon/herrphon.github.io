---
layout: page
title: "Docker"
description: ""
---





* [Heroku Blog - Docker Support](http://blog.heroku.com/archives/2015/8/18/docker_updates_local_data_stores_and_more_languages)


* [Why Docker is Not Yet Succeeding Widely in Production](http://sirupsen.com/production-docker/)

* [... 2](https://dzone.com/articles/why-docker-is-not-yet-widely-successful-in-product)


* [docker in the real world at yelp](http://engineeringblog.yelp.com/2015/08/docker-in-the-real-world-at-yelp.html)




CoreOS:

* [Flannel](https://coreos.com/blog/introducing-rudder/) - An Overlay Network 

* <https://www.youtube.com/embed/uC8Y_TGtwPo>


Project Atomic - RHEL Atomic Host:


* [Project Atomic](http://www.projectatomic.io/docs/gettingstarted/)

* [RHEL Atomic Host](https://access.redhat.com/articles/rhel-atomic-getting-started)





docker
 
https://github.com/docker/docker/issues/19616

http://stackoverflow.com/questions/34950465/logging-from-multiprocess-docker-containers

--> ? https://hub.docker.com/r/pataquets/ubuntu/~/dockerfile/





Running multiple processes in one container:

* [forego](https://github.com/ddollar/forego) - foreman written in go



docker in production:


https://github.com/docker/docker-bench-security


cloning a running server with docker: 
  * https://www.youtube.com/watch?v=1lCiWaLHwxo
  * https://circleci.com/blog/checkpoint-and-restore-docker-container-with-criu/
  * https://criu.org/Docker


## Docker Swarm
### Commands 'docker service', 'docker node', ...


``` bash 
docker node ls
docker node update --availability drain 1a
docker node inspect --pretty 1a
docker node inspect --pretty cq
docker node update --availability active 1a


docker service ls

docker service create --name vote -p 8080:80 instavote/vote
docker service create --name croc-hunter -p 80:80 lachlanevenson/croc-hunter:v1

docker service tasks vote
docker service scale vote=2
docker service scale  croc-hunter=2

docker service update --image instavote/vote:movies vote
docker service update --update-parallelism 1 --update-delay 10s --image instavote/vote:indent vote
docker service update --image lachlanevenson/croc-hunter:v2 croc-hunter

docker service rm croc-hunter


docker service create --name ubuntu --mode global --mount type=bind,source=/data,target=/data  ubuntu  sleep 10000

 
 
docker service create --name postgres -p 5432:5432/tcp -m type=bind,source=/mnt/nfs/postgres,target=/var/lib/postgresql/data,writable=true postgres:9.5


docker service create --network logging --name cadvisor -p 8080:8080 --mount type=bind,source=/var/run/docker.sock,target=/var/run/docker.sock  --restart-delay 300s   google/cadvisor:latest


docker run -v /var/run/docker.sock:/var/run/docker.sock -v /etc:/etc spotify/docker-gc

```

