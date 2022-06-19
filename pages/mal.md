---
layout: article
title: Anime Ratings
permalink: /myanimelist/

---

Anime refers to a specific form of media - hand-drawn or computer-generated animated shows that originate from Japan. Anime differ from western animation productions in various aspects - art style, themes, target audience, etc. Anime have a distinct 2D style that has a particular appeal and that sets it apart from computer generated animation. The themes explored in anime are often very serious, ranging from shows like [Neon Genesis Evangelion](https://myanimelist.net/anime/30/Neon_Genesis_Evangelion) and [Serial Experiments Lain](https://myanimelist.net/anime/339/Serial_Experiments_Lain) that focus on the human psyche and depression, to more modern shows like [Death Note](https://myanimelist.net/anime/1535/Death_Note), [Code Geass](https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch) and [Attack on Titan](https://myanimelist.net/anime/16498/Shingeki_no_Kyojin) that deal with topics like racism, genocide and the subjective nature of morality. Some very popular and mainstream anime include Dragon Ball, Pokémon and Naruto. These are my personal ratings of the anime that I have watched over the years. They are pulled from my [MAL profile](https://myanimelist.net/profile/SearyBlue). All ratings are out of 10.
{: style="text-align: justify"}

<a href="https://myanimelist.net/anime/14741/Chuunibyou_demo_Koi_ga_Shitai"><img title="Love, Chunibyo & Other Delusions!" src="/assets/images/love-chunibyo.png" style="margin-bottom:3em;"></a>

{% assign meanings = "legendary, outstanding, wonderful, enjoyable, average, watchable, boring, repulsive, unwatchable, blasphemous" | split: ',' %}
<table style="border:0.2em solid white;width:25em;">
{% for i in (0..4) %}
{% assign n1 = i | times:2 %}
{% assign n2 = n1 | plus:1 %}
<tr >
<td style="padding-right: 1em;padding-left: 1em;"><b>{{ 10 | minus:n1 }}</b>: <i>{{ meanings[n1] }}</i></td>
<td style="padding-right: 1em;padding-left: 1em;"><b>{{ 10 | minus:n2 }}</b>: <i>{{ meanings[n2] }}</i></td>
</tr>
{% endfor %}
</table>

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
