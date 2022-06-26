---
layout: article
title: Posts
permalink: /posts/

---

<ol>
{% for post in site.posts %}
<li>
    <ul class="right-col menu">
    <a href="{{ post.permalink }}" style="margin-right:2em;">{{ post.title }}</a>
    <li style="float:right;">
      {%- include snippets/get-locale-string.html key='ARTICLE_DATE_FORMAT' -%}
      <i class="far fa-calendar-alt"></i> <span>{{ post.date | date: __return }}</span>
    </li>
      {%- assign _tag_path = _paths_archive | append: '?tag=' -%}
      {%- include snippets/prepend-baseurl.html path=_tag_path -%}

      {%- if post.author != blank -%}

	  {% if post.author != "1" %}
	    <li style="float:right;"><i class="fas fa-user"></i> <span >{{ post.author.name }}</span></li>
	  {% else %}
	    <li style="float:right;"><i class="fas fa-user"></i> <span>{{ site.author.name }}</span></li>
	  {%- endif -%}
      {%- endif -%}

      {%- for _tag in post.tags -%}
        {%- assign _tag_path = __return -%}
        {%- assign _tag_encode = _tag | strip | url_encode -%}
        <li style="float:right;">
          <a class="button button--secondary button--pill button--sm"
            href="{{ _tag_path | append: _tag_encode | replace: '//', '/' }}">{{ _tag }}</a>
        </li>
      {%- endfor -%}
      </ul>
</li>
{% endfor %}
</ol>
