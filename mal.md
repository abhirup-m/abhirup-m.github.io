---
layout: article
title: Anime Ratings
permalink: /myanimelist/

---

These are my personal ratings to the anime I have watched over the years. They are pulled from my [MAL profile](https://myanimelist.net/profile/SearyBlue). All ratings are out of 10.

{% assign meanings = "legendary, outstanding, wonderful, enjoyable, average, watchable, boring, repulsive, unwatchable, blasphemous" | split: ',' %}

<div style="float:left">
<img src="/assets/images/love-chunibyo.png" width="800px" style="margin-right:2em;margin-bottom:4em;">
</div>
<div style="float:left">
<table style="margin-top:6em;">
{% for i in (0..4) %}
{% assign n1 = i | times:2 %}
{% assign n2 = n1 | plus:1 %}
<tr >
<td style="padding-right: 1em;padding-left: 1em;"><b>{{ 10 | minus:n1 }}</b>: <i>{{ meanings[n1] }}</i></td>
<td style="padding-right: 1em;padding-left: 1em;"><b>{{ 10 | minus:n2 }}</b>: <i>{{ meanings[n2] }}</i></td>
</tr>
{% endfor %}
</table>
</div>


{% assign len = site.data.myanimelist.size %}
{% assign lim = len|divided_by:3 %}
{% assign image_paths = "/assets/images/zeke.png,/assets/images/ushio.png,/assets/images/oreki.png" | split:','  %}

{% for i in (0..2) %}
{% assign start = lim | times:i %}
<table class="sortable">
{% for row in site.data.myanimelist limit:1 %}
<tr>
{% for pair in row limit:1 %}
<th style="width:75%;">{{ pair[0] }}</th>
{% endfor %}
{% for pair in row offset:1 limit:1 %}
<th style="padding-right:20px;padding-left:20px;">{{ pair[0] }}</th>
{% endfor %}
{% for pair in row offset:2 limit:1 %}
<th>{{ pair[0] }}</th>
{% endfor %}
</tr>
{% endfor %}
{% for row in site.data.myanimelist offset:start limit:lim %}
<tr>
{% for pair in row limit:3 %}
{% if forloop.first %}
<td style="padding-left:20px;"><a href="{{ row["Link"] }}">{{ pair[1] }}</a></td>
{% else %}
<td align="center">{{ pair[1] }}</td>
{% endif %}
{% endfor %}
</tr>
{% endfor %}
</table>
<div>
<img src="{{ image_paths[i] }}" width="800px" style="margin-bottom:4em;margin-top:4em;">
</div>
{% endfor %}
