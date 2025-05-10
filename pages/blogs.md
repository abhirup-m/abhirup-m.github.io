---
title: Blog Posts On Whatever I Find Interesting
permalink: /blogs/
---

{% for post in site.posts %}
- **{{ post.title }}**
<br>
{{ post.date | date: "%-d %B, %Y"}}&nbsp;&nbsp;[Read More]({{ post.permalink }})
{% endfor %}
