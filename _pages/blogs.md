---
title: Blog-type Posts
permalink: /blogs/
---

{% for post in site.posts %}
{%- if post.categories contains "blog" %}
- [**{{ post.title }}**]({{ post.permalink }})
<br>
{{ post.date | date: "%-d %B, %Y"}}
{%- for tag in post.tags -%}
<span class="btn btn--primary tag__highlight">{{ tag }}</span>
{%- endfor -%}
{%- endif -%}
{% endfor %}
