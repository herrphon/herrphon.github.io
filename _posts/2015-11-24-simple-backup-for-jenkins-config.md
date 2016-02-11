---
layout: post
title: "Simple Backup for Jenkins Config"
description: ""
category: 
tags: [jenkins]
---




Content of cronjob script:

<pre><code>#!/bin/bash

git config user.name || git config --global user.name "jenkins"
git config user.email || git config --global user.email "jenkins@host.tld"


cd ${JENKINS_HOME}
git add .
git add -u .
git status
git commit -m "auto-backup configuration changes"
git push origin master
</code></pre>


Content of .gitignore file:

<pre><code># Ignoring everything
*

# Except xml files in users and jobs
!/users/
!/users/*/
!/jobs/
!/jobs/*/
!/secrets/
!/secrets/*
!/secrets/*/
!/secrets/*/*

!/config-history
!/config-history/*
!/config-history/**/
!/config-history/**/*

!/plugins
!/plugins/*
!/plugins/**/
!/plugins/**/*



!/secret*
!/identity.key.enc

!*.xml
!.gitignore
!README.md
!cron.sh

!change-email.sh
</code></pre>
