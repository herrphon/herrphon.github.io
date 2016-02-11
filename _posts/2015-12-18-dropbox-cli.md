---
layout: post
title: "Dropbox CLI"
description: ""
category: 
tags: []
---
{% include JB/setup %}


Here is a small Dockerfile which runs a commandline online docker client:

<pre><code>FROM centos
RUN yum install -y wget
RUN wget -O dropbox.tar.gz "http://www.dropbox.com/download/?plat=lnx.x86_64"
RUN tar -xvzf dropbox.tar.gz
RUN export LANG=en_US.iso88591
RUN ~/.dropbox-dist/dropboxd
</code></pre>
