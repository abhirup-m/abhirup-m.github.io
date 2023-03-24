---
layout: splash
title: Blog-style posts on python & bash scripting, website-building, anime and other stuff
classes: wide
author_profile: false
permalink: /blogs/
header:
  overlay_image: /assets/images/home/layered-waves-haikei.svg

---

{% for post in site.posts %}
{% if post.categories contains "blog" %}
- **{{ post.title }}**
<br>
{{ post.date | date: "%-d %B, %Y"}}&nbsp;&nbsp;[Read More]({{ post.permalink }})
{% endif %}
{% endfor %}
