---
layout: page
title: "Docker Host VM Configuration"
description: ""
---






<pre><code>
#!/bin/bash

## create a 4GB swap
dd if=/dev/zero of=/swapfile bs=1024 count=4096k
mkswap /swapfile
swapon /swapfile
echo "/swapfile          swap            swap    defaults        0 0" >> /etc/fstab
chown root:root /swapfile 
chmod 0600 /swapfile

## Details here: https://wiki.archlinux.org/index.php/swap#Performance_Tuning
sysctl vm.swappiness=10
echo "vm.swappiness=10" >> /etc/sysctl.d/99-sysctl.conf

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

cd ~ && git clone https://github.com/scortum/mail.git && cd ~/mail && ./build.sh
cd ~ && git clone https://github.com/scortum/sshd.git && cd ~/sshd && ./build.sh




</code></pre>


