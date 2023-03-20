---
title: Updates
permalink: /updates/

---

{% for post in site.posts %}
{% if post.categories contains "update" or post.categories contains "manuscript" %}
- [**{{ post.title }}**]({{ post.url }})
<br>
{{ post.date | date: "%-d %B, %Y"}}
{% assign counter = counter | plus: 1 %}
{% endif %}
{% endfor %}
