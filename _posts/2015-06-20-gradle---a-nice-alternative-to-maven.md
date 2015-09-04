---
layout: post
title: "Gradle - A nice alternative to Maven"
description: "Sometimes Maven is just too ..."
category: java 
tags: [java, gradle]
---
{% include JB/setup %}


[Gradle](https://gradle.org/) is a build automation tool similar to Maven or Ant. Instead of a huge XML config gradle has a nice DSL based on groovy.

If you haven't already, download and install it. E.g. on Mac, use:

    brew install gradle



Gradle uses a config file called *build.gradle*. A good starting point for such a file is the following:



{% highlight ruby %}
def foo
  puts 'foo'
end
{% endhighlight %}


<http://jekyllrb.com/docs/templates/>



```
apply plugin: 'java'

rake test
```


