---
layout: post
title: "Gradle - A nice alternative to Maven"
description: "Sometimes Maven is just too ..."
category: java 
tags: [java, gradle]
---

<p> {{ page.tags | array_to_sentence_string }} </p>

<ul>
{% for tag in page.tags %}
    <li> {{tag}} </li>
{% endfor %}
</ul>


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
    compile 'org.slf4j:slf4j-api:1.7.7'
    // compile "joda-time:joda-time:2.2"
    // testCompile 'org.testng:testng:6.8.1' and add
    testCompile 'junit:junit:4.11'
    testCompile "org.mockito:mockito-core:1.+"
}


test {
    testLogging {
        exceptionFormat = 'full'
    }
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


## Starting from an already existing Maven project

<pre><code>$ mvn archetype:generate
[INFO] Scanning for projects...
Downloading: 
[...]
Confirm properties configuration:
groupId: tld.domain
artifactId: test
version: 1.0-SNAPSHOT
package: tld.domain
 Y: : 
[INFO] ----------------------------------------------------------------------------
[INFO] Using following parameters for creating project from Old (1.x) Archetype: maven-archetype-quickstart:1.1
[INFO] ----------------------------------------------------------------------------
[INFO] Parameter: basedir, Value: /tmp
[INFO] Parameter: package, Value: tld.domain
[INFO] Parameter: groupId, Value: tld.domain
[INFO] Parameter: artifactId, Value: test
[INFO] Parameter: packageName, Value: tld.domain
[INFO] Parameter: version, Value: 1.0-SNAPSHOT
[INFO] project created from Old (1.x) Archetype in dir: /tmp/test
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 02:02 min
[INFO] Finished at: 2015-09-07T07:25:53+02:00
[INFO] Final Memory: 13M/57M
[INFO] ------------------------------------------------------------------------
$ cd test
</code></pre>


<pre><code># INFO: it used to be gradle setupBuild, but now its:
$ gradle init --type pom
:wrapper
:init
Maven to Gradle conversion is an incubating feature.

BUILD SUCCESSFUL

Total time: 3.937 secs

This build could be faster, please consider using the Gradle Daemon: https://docs.gradle.org/2.6/userguide/gradle_daemon.html
</code></pre>


## Run Tests 

To have some more output, you can run the ``` test ``` task with the ``` -i ``` option:
<pre><code> gradle test -i </code></pre>


Or you can add the following to the build.gradle 
[1](http://mrhaki.blogspot.de/2014/10/gradle-goodness-show-standard-out-or.html) 
[2](http://stackoverflow.com/questions/3963708/gradle-how-to-display-test-results-in-the-console-in-real-time/4292739#4292739):

<pre><code>test {
    testLogging {
        exceptionFormat = 'full'
    }
}
</code></pre>


