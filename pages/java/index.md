---
layout: page
title: "Java"
description: ""
---







DEBUG
<pre><code> -Xdebug -Xrunjdwp:transport=dt_socket,address=$DEBUG_PORT,server=y,suspend=n </code></pre>

JMX
<pre><code> -Dcom.sun.management.jmxremote.port=$JMX_PORT -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false </code></pre>





* [Remote JMX with Docker](https://ptmccarthy.github.io/2014/07/24/remote-jmx-with-docker/
)






## Maven

* [Release Plugin](https://maven.apache.org/maven-release/maven-release-plugin/)

{% highlight shell %}
$ mvn release:prepare
{% endhighlight %}

{% highlight shell %}
$ mvn release:perform
{% endhighlight %}



## JAVA SSL Problems with Wildcard Certificate

https://stackoverflow.com/questions/7615645/ssl-handshake-alert-unrecognized-name-error-since-upgrade-to-java-1-7-0


{% highlight shell %}
java -Djsse.enableSNIExtension=false yourClass
{% endhighlight %}


Windows Environment Variable:
{% highlight shell %}
JAVA_TOOL_OPTIONS = -Djsse.enableSNIExtension=false
{% endhighlight %}



## Unit Test

<http://www.mkyong.com/unittest/junit-4-vs-testng-comparison/>

<http://joel-costigliola.github.io/assertj/assertj-core-quick-start.html>




## Scripts

<https://github.com/herrphon/misc-scripts/tree/master/jira>



## Java Decompiler

http://jd.benow.ca/



## Test

* [Mutation Tests](http://pitest.org/)

