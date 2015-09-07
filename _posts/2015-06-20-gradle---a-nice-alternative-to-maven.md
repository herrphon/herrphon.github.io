---
layout: post
title: "Gradle - A nice Alternative to Maven"
description: "Sometimes Maven is just too ..."
category: java 
tags: [java, gradle]
---
{% include JB/setup %}



<!-- 
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.7/styles/default.min.css"> 
-->
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.7/styles/androidstudio.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.7/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>





[Gradle](https://gradle.org/) is a build automation tool similar to Maven or Ant. Instead of a huge XML config gradle has a nice DSL based on groovy.

If you haven't already, download and install it. E.g. on Mac, use:

<pre>
$ brew install gradle
</pre>



* <http://www.jayway.com/2013/05/12/getting-started-with-gradle/>

* <https://docs.gradle.org/current/userguide/userguide_single.html#tutorial_java_projects>



Gradle uses a config file called *build.gradle*. To have a good starting point, you can use the following command [1](http://stackoverflow.com/questions/11524790/gradle-counterpart-to-maven-archetype/19001470#19001470):

<pre><code># for more info you can read the help:
$ gradle help --task init


$ gradle init --type java-library
:wrapper
:init

BUILD SUCCESSFUL

Total time: 2.659 secs

$ tree
.
├── build.gradle
├── gradle
│   └── wrapper
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradlew
├── gradlew.bat
├── settings.gradle
└── src
    ├── main
    │   └── java
    │       └── Library.java
    └── test
        └── java
            └── LibraryTest.java

7 directories, 8 files
</code></pre>




Now you can do some more adoption of the build.gradle:


<pre>build.gradle<code>apply plugin: 'java'
apply plugin: 'eclipse'
apply plugin: 'application'

apply plugin: 'findbugs'
apply plugin: 'checkstyle'

mainClassName = 'MyApp'

repositories {
    jcenter()
}

jar {
    baseName = 'my_application'
    version =  '0.1.0'
}

dependencies {
    compile "joda-time:joda-time:2.2"
    testCompile group: 'junit', name: 'junit', version: '4.11'
    testCompile "org.mockito:mockito-core:1.+"
}

// the wrapper is already installed but just in case:
task wrapper(type: Wrapper) {
    gradleVersion = '2.3'
}

tasks.withType(FindBugs) {
    reports {
        xml.enabled = false
        html.enabled = true
    }
 }

task checkstyleHtml << {
    ant.xslt(in: checkstyleMain.reports.xml.destination,
             style: file('config/checkstyle/checkstyle-noframes-sorted.xsl'),
             out: new File(checkstyleMain.reports.xml.destination.parent, 'main.html'))
}

checkstyleMain.finalizedBy checkstyleHtml
</code></pre>






## Getting Dependencies - JCenter Vs MavenCentral

JCenter seems to be a superset of MavenCentral. Among others, Android switched from MavenCentral to JCenter. Details [here](http://blog.bintray.com/2015/02/09/android-studio-migration-from-maven-central-to-jcenter/) and [here](http://stackoverflow.com/questions/24852219/android-buildscript-repositories-jcenter-vs-mavencentral)

