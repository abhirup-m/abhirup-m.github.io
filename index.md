---
layout: splash
permalink: /
title: "Welcome to my website!"
excerpt: "I am currently [pursuing](/research/) a  PhD in theoretical condensed matter physics. I spend the rest of my time watching anime, dabbling in website design and writing python and bash scripts."
header:
  overlay_image: /assets/images/home/layered-waves-haikei.svg
  actions:
      - label: "More about me"
        url: /about/
      - label: "Contact info"
        url: /about/#contact-information
      - label: "Updates"
        url: /updates/
---

## Recent Updates [(see all)](/updates/){:.btn}

{% for post in site.categories["manuscript"] limit:2 %}
{% include feature_row_posts.html type="left" %}
{% endfor %}

## Miscellaneous News [(see all)](/updates/){:.btn}

{% for post in site.categories["update"] limit:2 %}
- **{{ post.title }}**&nbsp;&nbsp;<br>{{ post.date | date: "%b %d, %Y" | upcase }}.&nbsp;&nbsp;[Learn More]({{ post.url | relative_url }}){: .btn .btn--danger }
{% endfor %}
