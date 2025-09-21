---
title: Things I’ve Built
permalink: /toys/
---

{% for item in site.data.toys %}
<h3>{{ item[0] }} &nbsp; <a href="{{ item[1]['url'] }}" class="nf {{ site.data.nf-class['clip'] }}"></a></h3>
{{ item[1]['desc'] }}
{% endfor %}
