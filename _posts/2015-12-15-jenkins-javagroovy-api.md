---
layout: post
title: "Jenkins Java/Groovy API"
description: ""
category: 
tags: [jenkins, groovy, java]
---



A good starting point for Jenkins Java Api is the 
[Jenkins class in jenkins.model](http://javadoc.jenkins-ci.org/jenkins/model/Jenkins.html)
The accessor to get the jenkins singleton can be found there.

<pre><code>import jenkins.model.*

Jenkins.getInstance()
</code></pre>


Some examples can also be found here: 

* <https://wiki.jenkins-ci.org/display/JENKINS/Jenkins+Script+Console>
* <http://pghalliday.com/jenkins/groovy/sonar/chef/configuration/management/2014/09/21/some-useful-jenkins-groovy-scripts.html>

