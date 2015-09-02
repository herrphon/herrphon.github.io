---
layout: page
title: Hello World Blog!
tagline: nothing yet
---
{% include JB/setup %}

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>




Read [Jekyll Quick Start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)
