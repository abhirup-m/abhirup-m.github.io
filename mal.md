---
layout: article
title: Anime Ratings
permalink: /myanimelist/

---

### Overview

<table class="sortable">
<tr><th>Anime Title</th><th>My Rating</th><th>MAL Rating</th></tr>
{% for row in site.data.myanimelist offset:1 %}
<tr>
{% for pair in row limit:3 %}
{% if forloop.first %}
<td><a href="{{ row["Link"] }}">{{ pair[1] }}</a></td>
{% else %}
<td align="center">{{ pair[1] }}</td>
{% endif %}
{% endfor %}
</tr>
{% endfor %}
</table>
