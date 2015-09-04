---
layout: post
title: "Gradle - A nice Alternative to Maven"
description: "Sometimes Maven is just too ..."
category: java 
tags: [java, gradle]
---
{% include JB/setup %}



<!-- <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.7/styles/default.min.css"> 
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.7/styles/androidstudio.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.7/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
-->




[Gradle](https://gradle.org/) is a build automation tool similar to Maven or Ant. Instead of a huge XML config gradle has a nice DSL based on groovy.

If you haven't already, download and install it. E.g. on Mac, use:

    brew install gradle



Gradle uses a config file called *build.gradle*. A good starting point for such a file is the following:

{% highlight groovy %}
apply plugin: 'java'

{% endhighlight %}




