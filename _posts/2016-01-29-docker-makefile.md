---
layout: post
title: "Docker Makefile"
description: ""
category: 
tags: [docker]
---




TODO: Description goes here...


Makefile

{% highlight makefile %}
IMAGE_NAME=blubb/container-name
VERSION=$(shell date +"%Y%m%d.%H%M")
GIT_HASH=$(shell git describe --dirty --always --match do-not-match)


build:
        echo Building ${IMAGE_NAME}:${VERSION}.${GIT_HASH}...
        docker build --build-arg GIT_HASH=${GIT_HASH} -t=${IMAGE_NAME} .
        docker tag -f ${IMAGE_NAME} ${IMAGE_NAME}:${VERSION}.${GIT_HASH}


rebuild:
        echo Building _WITHOUT_CACHE_  ${IMAGE_NAME}:${VERSION}.${GIT_HASH}...
        docker build --no-cache --build-arg GIT_HASH=${GIT_HASH} -t=${IMAGE_NAME} .
        docker tag -f ${IMAGE_NAME} ${IMAGE_NAME}:${VERSION}.${GIT_HASH}



release: build
        docker tag -f ${IMAGE_NAME} ${IMAGE_NAME}:${VERSION}.${GIT_HASH}
        docker tag -f ${IMAGE_NAME} registry.tld:5000/${IMAGE_NAME}:${VERSION}.${GIT_HASH}
        docker push registry.tld:5000/${IMAGE_NAME}:${VERSION}.${GIT_HASH}
{% endhighlight %}

