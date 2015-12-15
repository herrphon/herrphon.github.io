---
layout: post
title: "Jenkins Java/Groovy API"
description: ""
category: 
tags: [jenkins, groovy, java]
---
{% include JB/setup %}


Note to self:

A good starting point for Jenkins Java Api is the 
[Jenkins class in jenkins.model](http://javadoc.jenkins-ci.org/jenkins/model/Jenkins.html)
The accessor to get the jenkins singleton can be found there.

<pre><code>
import jenkins.model.*

Jenkins.getInstance()
</code></pre>