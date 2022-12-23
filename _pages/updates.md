---
title: Updates
permalink: /updates/

---

{% for post in site.posts %}
{% if post.categories contains "Updates" %}
- [**{{ post.title }}**]({{ post.url }})
<br>
{{ post.date | date: "%-d %B, %Y"}}
{% assign counter = counter | plus: 1 %}
{% endif %}
{% endfor %}
