---
layout: page
title: "Index of all pages"
description: ""
---

<ul>
{% for page in site.pages %}
    <li>
        <a href="{{ page.url }}">
            {{ page.title }}
        </a>
        {{ page.description }}
    </li>


  {% if page.categories contains 'fruit' %}
  {% endif %}
{% endfor %}
</ul>

