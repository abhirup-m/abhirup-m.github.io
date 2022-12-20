---
layout: splash
hidden: true
permalink: /
author_profile: false
title: "Hello there!"
excerpt: "I am Abhirup Mukherjee, a graduate student at IISER Kolkata (India). I work in theoretical condensed matter physics."
header:
  overlay_image: /assets/images/home/layered-waves-haikei.svg
  actions:
      - label: "More about me"
        url: /about/
      - label: "Recent Posts"
        url: /posts/
---

My name is Abhirup Mukherjee.
I am a research scholar at the Indian Institute of Science Education and Research ([IISER](https://www.iiserkol.ac.in/)) Kolkata , living in Kalyani, West Bengal, India.
I work in theoretical condensed matter physics, and am a part of the Emergent Phenomena and Quantum Matter ([EPQM](https://www.iiserkol.ac.in/~slal/index.html)) group.
I study various topics in the field of strongly correlated materials. 

Learn more about me [here](/about/).

## Updates

{% assign counter = 0 %}
{% for post in site.posts %}
{% if post.categories contains "update" %}
- [**{{ post.title }}**]({{ post.url }})
<br>
{{ post.date | date: "%-d %B, %Y"}}
{% assign counter = counter | plus: 1 %}
{% if counter == 3 %}
{% break %}
{% endif %}
{% endif %}
{% endfor %}

[See all](/posts/)

---

![](/assets/images/home/phd.svg){: class="img__post"}
