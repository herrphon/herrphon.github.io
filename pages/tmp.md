---
layout: page
title: "tmp"
description: ""
---
{% include JB/setup %}



http://thenewstack.io/make-a-restful-json-api-go/

http://devs.cloudimmunity.com/gotchas-and-common-mistakes-in-go-golang/

https://medium.com/@matryer/5-simple-tips-and-tricks-for-writing-unit-tests-in-golang-619653f90742#.31601hds1


Writing JSON REST APIs in Go https://www.youtube.com/watch?v=2rHgpx2gClk



JSON and Go https://blog.golang.org/json-and-go



Boston Golang - Testing - https://www.youtube.com/watch?v=v_wz6E3uFRg


GopherCon 2015 - Rebuilding Parse.com in Go https://www.youtube.com/watch?v=_f9LS-OWfeA 





Talks from Francesc Campoy:

Twelve Go Best Practices - August 2014 - https://www.youtube.com/watch?v=8D3Vmm1BGoY

http://talks.golang.org/2013/bestpractices.slide#2



Golang UK Conference 2015 - Program Analysis https://www.youtube.com/watch?v=oorX84tBMqo





haskell

-> pattern matching




git 

 git merge-base
 git submodule
 git subtree
 
 



 
 http://operational.io/openssl-commonly-used-commands/
 
 
 openssl x509 -in name.pem -noout -text
 
 
 
 http://serverfault.com/questions/62026/how-to-know-from-which-yum-repository-a-package-has-been-installed
 repoquery -i cherokee
 
 
 
 
 
docker
 
https://github.com/docker/docker/issues/19616

http://stackoverflow.com/questions/34950465/logging-from-multiprocess-docker-containers

--> ? https://hub.docker.com/r/pataquets/ubuntu/~/dockerfile/






github pages hugo automatic deployment with wercker: https://gohugo.io/tutorials/automated-deployments/
 
 
 
 
 
 https://www.cloudflare.com
 
 https://www.digitalocean.com
 
 
 



<pre><code>
#!/bin/bash

## create a 4GB swap
dd if=/dev/zero of=/swapfile bs=1024 count=4096k
mkswap /swapfile
swapon /swapfile
echo "/swapfile          swap            swap    defaults        0 0" >> /etc/fstab
chown root:root /swapfile 
chmod 0600 /swapfile

## install docker, vim and emacs
apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
echo "deb https://apt.dockerproject.org/repo ubuntu-wily main" > /etc/apt/sources.list.d/docker.list

apt-get update && apt-get -y upgrade
apt-get install -y linux-image-extra-$(uname -r)
apt-get install -y vim emacs24 make
apt-get install -y docker-engine

docker pull ubuntu

## setup git, clone the some stuff and start a build
git config --global user.name "Alex"
git config --global user.email "alex@aeffle.de"
git config --global push.default simple

git clone https://github.com/scortum/mail.git && cd ~/mail && ./build.sh
git clone https://github.com/scortum/sshd.git && cd ~/sshd && ./build.sh
</code></pre>


https://www.digitalocean.com/community/tutorials/how-to-enable-user-and-group-quotas
https://wiki.ubuntuusers.de/Quota/




DEBUG
-Xdebug -Xrunjdwp:transport=dt_socket,address=$DEBUG_PORT,server=y,suspend=n

JMX
-Dcom.sun.management.jmxremote.port=$JMX_PORT -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false


https://ptmccarthy.github.io/2014/07/24/remote-jmx-with-docker/






grep -rl "foo" pages | xargs sed -i '' 's/foo/bar/g'


