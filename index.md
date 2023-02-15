---
layout: splash
permalink: /
title: "Hello there!![](/assets/images/abhirup.png){:.align-right .home__header__image}"
excerpt: "I am Abhirup Mukherjee, a graduate student at IISER Kolkata (India). I work in theoretical condensed matter physics."
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
![](/assets/images/abhirup.png){:.align-right .home__body__image}

<div class="home__column" markdown=1>
## Welcome!

My name is Abhirup Mukherjee.
I am a research scholar at the Indian Institute of Science Education and Research Kolkata [(IISER Kolkata)](https://www.iiserkol.ac.in/), living in Kalyani, West Bengal, India.

I work in theoretical condensed matter physics, and am a part of the Emergent Phenomena and Quantum Matter ([EPQM](https://www.iiserkol.ac.in/~slal/index.html)) group.
I study various topics in the field of strongly correlated materials. Feel free to check out my [research interests](/work/) and my [research work](/research/).

More information about me, and my contact details are available [here](/about/).
</div>
<div class="home__column" markdown=1>
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
