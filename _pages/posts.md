---
title: Recent Posts
permalink: /posts/
author_profile: false

---

{% for post in site.posts %}
- [**{{ post.title }}**](post.url)
<br>
{{ post.date | date: "%-d %B, %Y"}}
{% endfor %}
