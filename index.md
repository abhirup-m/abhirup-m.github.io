---
layout: splash
permalink: /
title: "Hello there!"
excerpt: "Welcome to my website. You might be interested in the [research](/research/) I am carrying out in theoretical condensed matter physics, as a PhD candidate at IISER Kolkata in India. You might also be interested in my [write-ups](/blogs/) on other topics I am interested in, such as scripting, website designing and anime."
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

## Recent Updates [(see all)](/updates/){:.btn}

{% for post in site.categories["manuscript"] limit:2 %}
{% include feature_row_posts.html type="left" %}
{% endfor %}
{% for post in site.categories["update"] limit:2 %}
- **{{ post.title }}**&nbsp;&nbsp;<a href="{{ post.url | relative_url }}" class="btn btn--danger">{{ post.btn_label | default: site.data.ui-text[site.locale].more_label | default: "Learn More" }}</a><br>{{ post.date | date: "%b %d, %Y" | upcase }}
{% endfor %}
