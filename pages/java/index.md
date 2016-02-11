---
layout: page
title: "Java"
description: ""
---
{% include JB/setup %}






DEBUG
<pre><code> -Xdebug -Xrunjdwp:transport=dt_socket,address=$DEBUG_PORT,server=y,suspend=n </code></pre>

JMX
<pre><code> -Dcom.sun.management.jmxremote.port=$JMX_PORT -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false </code></pre>





* [Remote JMX with Docker](https://ptmccarthy.github.io/2014/07/24/remote-jmx-with-docker/
)



