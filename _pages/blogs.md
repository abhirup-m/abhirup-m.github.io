---
title: Blog-type Posts
permalink: /blogs/
---

{% for post in site.posts %}
{% if post.categories contains "blog" %}
- [**{{ post.title }}**]({{ post.permalink }})
{% endif %}
{% endfor %}
