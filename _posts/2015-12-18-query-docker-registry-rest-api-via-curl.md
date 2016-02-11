---
layout: post
title: "Query Docker Registry REST API via curl"
description: ""
category: 
tags: []
---




<pre><code>curl -s --insecure -X GET https://registry.url:5000/v2/_catalog | python -m json.tool
{
    "repositories": [
        "herrphon/one",
        "herrphon/two",
        "herrphon/three"
    ]
}
</code></pre>





<pre><code>curl -s --insecure https://registry.url:5000/v2/herrphon/one/tags/list | python -m json.tool
{
    "name": "herrphon/one",
    "tags": [
        "1",
        "latest",
        "2",
        "3"
    ]
}
</code></pre>
