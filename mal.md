---
layout: article
title: Anime Ratings
permalink: /myanimelist/

---

<div style="float:left;width:420px;margin-bottom:4em;" markdown=1>
These are my personal ratings to the anime I have watched over the years. They are pulled from my [MAL profile](https://myanimelist.net/profile/SearyBlue). All ratings are out of 10.

{% assign meanings = "legendary, outstanding, wonderful, enjoyable, average, watchable, boring, repulsive, unwatchable, blasphemous" | split: ',' %}
<table style="float:left;width:350px;border:0.2em solid gray;margin-top:1em;">
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

<div style="float:left;margin-left:1em;">
<img src="/assets/images/love-chunibyo.png" width="700px" style="margin:1.5em;">
</div>

{% assign len = site.data.myanimelist.size %}
{% assign lim = 40 %}
{% assign num = len|divided_by:lim %}

{% assign image_paths = "" %}
{% for image in site.static_files %}
{% if image.path contains 'assets/images/anime_shots' %}
{% assign image_paths = image_paths | append: image.path | append: "," %}
{% endif %}
{% endfor %}
{% assign image_paths = image_paths | split:','  %}

{% for i in (0..num) %}
<table>
{% for row in site.data.myanimelist limit:1 %}
<thead>
<tr>
{% for pair in row limit:1 %}
<th>{{ pair[0] }}</th>
{% endfor %}
{% for pair in row offset:1 limit:1 %}
<th>{{ pair[0] }}</th>
{% endfor %}
{% for pair in row offset:2 limit:1 %}
<th>{{ pair[0] }}</th>
{% endfor %}
</tr>
{% endfor %}
</thead>
{% assign start = lim | times:i %}
{% assign array = site.data.myanimelist | sort_natural: "Anime Title" %}
{% for row in array offset:start limit:lim %}
<tr class="numbered">
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

<img src="{{ image_paths[i] }}" width="100%" style="margin-bottom:4em;margin-top:4em;">
{% endfor %}
