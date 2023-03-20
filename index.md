---
layout: home
permalink: /
title: "Hello there!"
excerpt: "I am Abhirup Mukherjee, a graduate student at IISER Kolkata (India). I work in theoretical condensed matter physics. When I am not working, I watch the seasonal anime, work on websites and write python and bash scripts."
background: /assets/images/home/layered-waves-haikei.svg
header:
  overlay_image: /assets/images/home/layered-waves-haikei.svg
  actions:
      - label: "More on me"
        url: /about/
      - label: "Contact info"
        url: /about/#contact-information
      - label: "Updates"
        url: /updates/
---

<div style="display: none;">
## Recent Updates [(see all)](/updates/){:.btn}

{% assign counter = 0 %}
{% for post in site.posts %}
{% if post.categories contains "Updates" %}
- **{{ post.title }}**
<br>
{{ post.date | date: "%-d %B, %Y"}}
[Learn More]({{ post.url }}){: .btn .btn--danger .tag__highlight }

{% assign counter = counter | plus: 1 %}
{% if counter == 3 %}
{% break %}
{% endif %}
{% endif %}
{% endfor %}
</div>
