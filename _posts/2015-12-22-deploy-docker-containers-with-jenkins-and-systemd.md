---
layout: post
title: "Deploy docker containers with Jenkins and Systemd"
description: ""
category: 
tags: [docker, systemd, jenkins]
---
{% include JB/setup %}

# Build a Simple Image and Push it to the Registry:




<pre><code>#!/bin/bash -e
# Environment parameters which could be injected by Jenkins:
VERSION=1.2.3
FORCE=false              # as provided by the jenkins build parameter type boolean
DOCKERFILE_DIR=docker    # location where the dockerfile is located in the repository
DOCKER_REGISTRY=https://registry.tld:5000
IMAGE_NAME=john.doe/myapp


if [ "$FORCE" != "true" ]; then
  TAG_COUNT=$(curl -s --insecure -X GET ${DOCKER_REGISTRY}/v2/${IMAGE_NAME}/tags/list | grep \"${VERSION}\" | wc -l)

  if  [ "$TAG_COUNT" -ne "0" ]; then
    echo "Tag is already on the registry!"
    exit -1
  fi
fi

cd $DOCKERFILE_DIR
echo Building ${IMAGE_NAME}:${VERSION}...
sed "s/##VERSION##/${VERSION}/" Dockerfile.in > Dockerfile; 
docker build -t=${IMAGE_NAME} .

docker tag -f ${IMAGE_NAME} ${IMAGE_NAME}:${VERSION}
docker tag -f ${IMAGE_NAME} ${DOCKER_REGISTRY}/${IMAGE_NAME}:${VERSION}

docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:${VERSION}
</code></pre>


# Installation of the application with systemd and docker

<pre><code>#!/bin/bash -e
# Environment parameters which could be injected by Jenkins:
DOCKER_REGISTRY=https://registry.tld:5000
IMAGE_NAME=john.doe/myapp
VERSION=1.2.3
DOCKER_CONTAINER_NAME=myapp


cat > /etc/sysconfig/${DOCKER_CONTAINER_NAME} << EOF
DOCKER_IMAGE=${IMAGE_NAME}:${VERSION}
DOCKER_CONTAINER_NAME=${DOCKER_CONTAINER_NAME}
LOCAL_DIR=/data/${DOCKER_CONTAINER_NAME}
OTHER_OPTIONS=something
EOF


cat > /usr/lib/systemd/system/${DOCKER_CONTAINER_NAME}.service << EOF
[Unit]
Description=Some description here...
Requires=docker.service
After=docker.service

[Service]
Restart=on-failure
RestartSec=10
TimeoutStartSec=0
EnvironmentFile=-/etc/sysconfig/${DOCKER_CONTAINER_NAME}
ExecStartPre=-/usr/bin/docker kill \${DOCKER_CONTAINER_NAME}
ExecStartPre=-/usr/bin/docker rm \${DOCKER_CONTAINER_NAME}
ExecStartPre=/usr/bin/docker pull \${DOCKER_IMAGE}
ExecStart=/usr/bin/docker run --name \${DOCKER_CONTAINER_NAME}      \
                              -p 8080:8080                          \
                              -e "OTHER_OPTIONS=\${OTHER_OPTIONS}"  \
                              -v \${LOCAL_DIR}:/data                \
                              -v /etc/localtime:/etc/localtime:ro   \
                              \${DOCKER_IMAGE}
ExecStop=/usr/bin/docker stop --time=10 \${DOCKER_CONTAINER_NAME} 

[Install]
WantedBy=multi-user.target
EOF
</code></pre>




# Starting the application with the new version on a host:


<pre><code>#!/bin/bash -e
# Environment parameters which could be injected by Jenkins:
VERSION=1.2.3
DOCKER_REGISTRY=https://registry.tld:5000
IMAGE_NAME=john.doe/myapp
DOCKER_CONTAINER_NAME=myapp   # is equal to service name


cat > /etc/sysconfig/${DOCKER_CONTAINER_NAME} << EOF
DOCKER_IMAGE=${IMAGE_NAME}:$VERSION
LOCAL_DIR=/data/${DOCKER_CONTAINER_NAME}
OTHER_OPTIONS=something
EOF


echo "#######################################################"
echo "# Starting with the following config options:         #"
echo "#######################################################"

cat /etc/sysconfig/${DOCKER_CONTAINER_NAME}
echo 

systemctl restart ${DOCKER_CONTAINER_NAME}

echo "#######################################################"
echo "# Status                                              #"
echo "#######################################################"

systemctl status ${DOCKER_CONTAINER_NAME}
</code></pre>



# Docker tail until server is up

<pre><code>#!/bin/bash -e
# Environment parameters which could be injected by Jenkins:
DOCKER_CONTAINER_NAME=myapp

echo "\nLogs from docker container ${DOCKER_CONTAINER_NAME}:"
timeout 120 sh -c 'docker logs -f ${DOCKER_CONTAINER_NAME} 2>&1 | { sed "/Server startup in/ q" && kill $$ ;}' || true
</code></pre>
