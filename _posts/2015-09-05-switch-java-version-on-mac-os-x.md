---
layout: post
title: "Switch Java version on Mac OS X"
description: ""
category: java 
tags: [java]
---
{% include JB/setup %}


<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.7/styles/androidstudio.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.7/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>


Today, I wanted to switch Java versions on my mac. I had everything from Java 6 to 8 installed. I knew that I had switched the versions before but forgot how to do it. Of cause, the first thing I did was googleing for it. I found several solutions and in the end I found out that I had already placed a setter script in my *.profile* file. 

Here is all info that is needed condensed:


<pre><code class="bash"># find out which Java versions are installed:
$ /usr/libexec/java_home -V
Matching Java Virtual Machines (4):
    1.8.0_05, x86_64:	"Java SE 8"	/Library/Java/JavaVirtualMachines/jdk1.8.0_05.jdk/Contents/Home
    1.7.0_60, x86_64:	"Java SE 7"	/Library/Java/JavaVirtualMachines/jdk1.7.0_60.jdk/Contents/Home
    1.6.0_65-b14-466.1, x86_64:	"Java SE 6"	/System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
    1.6.0_65-b14-466.1, i386:	"Java SE 6"	/System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
</code></pre>

<pre><code class="bash"># find out the path to a specific java version e.g. 1.8:
$ /usr/libexec/java_home -v 1.8
/Library/Java/JavaVirtualMachines/jdk1.8.0_05.jdk/Contents/Home
</code></pre>

It's sufficient to set the JAVA_HOME environment variable but setting the PATH variable to the Java version is better :-)

Here is a small snippet for your *.bashrc* or *.bash_profile*:

<pre><code class="bash">function setjdk() {  
  if [ $# -ne 0 ]; then  
   removeFromPath '/System/Library/Frameworks/JavaVM.framework/Home/bin'  
   if [ -n "${JAVA_HOME+x}" ]; then  
    removeFromPath $JAVA_HOME/bin  
   fi  
   export JAVA_HOME=`/usr/libexec/java_home -v $@`  
   export PATH=$JAVA_HOME/bin:$PATH  
  fi  
 }  
 function removeFromPath() {  
  export PATH=$(echo $PATH | sed -E -e "s;:$1;;" -e "s;$1:?;;")  
 }

setjdk 1.8
</code></pre>



By the way, my favorite solution is from <http://www.jayway.com/2014/01/15/how-to-switch-jdk-version-on-mac-os-x-maverick/>






