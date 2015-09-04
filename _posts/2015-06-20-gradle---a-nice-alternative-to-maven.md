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
-->




[Gradle](https://gradle.org/) is a build automation tool similar to Maven or Ant. Instead of a huge XML config gradle has a nice DSL based on groovy.

If you haven't already, download and install it. E.g. on Mac, use:

<pre>
$ brew install gradle
</pre>


Gradle uses a config file called *build.gradle*. A good starting point for such a file is the following:



<pre><code>
apply plugin: 'java'
apply plugin: 'eclipse'
apply plugin: 'application'

apply plugin: 'findbugs'
apply plugin: 'checkstyle'

mainClassName = 'MyApp'

// tag::repositories[]
repositories {
    mavenCentral()
    jcenter()
}
// end::repositories[]


// tag::jar[]
jar {
    baseName = 'my_application'
    version =  '0.1.0'
}
// end::jar[]

// tag::dependencies[]
dependencies {
    compile "joda-time:joda-time:2.2"
    testCompile group: 'junit', name: 'junit', version: '4.11'
    testCompile "org.mockito:mockito-core:1.+"
}
// end::dependencies[]

// tag::wrapper[]
task wrapper(type: Wrapper) {
    gradleVersion = '2.3'
}
// end::wrapper[]


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




