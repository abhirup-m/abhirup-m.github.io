---
title: My Anime Ratings
permalink: /myanimelist/
tags:
  - anime
  - ratings
categories:
  - blog

---

[![Love, Chunibyo & Other Delusions!](/assets/images/anime-ratings/love-chunibyo.png){: class="img__post"}](https://myanimelist.net/anime/14741/Chuunibyou_demo_Koi_ga_Shitai)

Anime refers to a specific form of media - hand-drawn or computer-generated animated shows that originate from Japan. Anime differ from western animation productions in various aspects - art style, themes, target audience, etc. Anime have a distinct 2D style that has a particular appeal and that sets it apart from computer generated animation. The themes explored in anime are often very serious, ranging from shows like [Neon Genesis Evangelion](https://myanimelist.net/anime/30/Neon_Genesis_Evangelion) and [Serial Experiments Lain](https://myanimelist.net/anime/339/Serial_Experiments_Lain) that focus on the human psyche and depression, to more modern shows like [Death Note](https://myanimelist.net/anime/1535/Death_Note), [Code Geass](https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch) and [Attack on Titan](https://myanimelist.net/anime/16498/Shingeki_no_Kyojin) that deal with topics like racism, genocide and the subjective nature of morality. Some very popular and mainstream anime include Dragon Ball, Pokémon and Naruto. These are my personal ratings of the anime that I have watched over the years. They are pulled from my [MAL profile](https://myanimelist.net/profile/SearyBlue). All ratings are out of 10.

{% assign meanings = "legendary,outstanding,wonderful,enjoyable,average,watchable,boring,repulsive,unwatchable,blasphemous" | split: ',' %}
| **10**: {{ meanings[9] }} |  **9**: {{ meanings[8] }} |  **8**: {{ meanings[7] }} |  **7**: {{ meanings[6] }} |  **6**: {{ meanings[5] }} | 
| **5**: {{ meanings[4] }} | **4**: {{ meanings[3] }} |  **3**: {{ meanings[2] }} |  **2**: {{ meanings[1] }} |  **1**: {{ meanings[0] }} |

{% assign len = site.data.myanimelist.size %}
{% assign lim = 40 %}
{% assign num = len|divided_by:lim %}

{% assign image_paths = "" %}
{% for image in site.static_files %}
{% if image.path contains 'assets/images/anime-ratings/anime_shots' %}
{% assign image_paths = image_paths | append: image.path | append: "," %}
{% endif %}
{% endfor %}
{% assign image_paths = image_paths | split:','  %}

{% assign headers = "" %}
{% for item in site.data.myanimelist[0]  %}
{% assign headers = headers | append: item[0] | append: "," %}
{% endfor %}
{% assign headers = headers | split: "," %}

{% for i in (0..num) %}
{% assign start = lim | times:i %}
{% assign array = site.data.myanimelist | sort_natural: "My Rating" %}
| {{ headers[0] }} | {{ headers[1] }} | {{ headers[2] }} |
|:---|:---:|:---:|
{% for row in array offset:start limit:lim -%}
| [{{ row["Anime Title"] }}]({{ row["Link"] }}) | {{ row["My Rating"] }} | {{ row["MAL Rating"] }} |
{% endfor %}
![]({{ image_paths[i] }}){: class="img__post"}
{% endfor %}
