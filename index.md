---
layout: default
permalink: /
---

# Hey There!
Welcome to my website. I am **Abhirup**, a postdoctoral research in the [_computational quantum many-body theory_ group](https://cqm.snu.ac.kr/home) at Seoul National University, South Korea. I work in **theoretical condensed matter physics**, focusing on **strongly correlated materials**. I obtained my PhD in the same field from the Indian Institute of Science Education and Research (IISER) Kolkata, India. I happen to be the co-founder of IISER Kolkata's student-run science magazine [_InScight_](https://scicomm.iiserkol.ac.in/), and currently lead the graphic design and web-development unit.

## Recent Publications and Preprints
Check out [my CV](/assets/documents/CurrVitae_AbhirupMukherjee.pdf) if you are interested.

{% for work in site.data.publications limit:2 %}
- {% include publicationInfo.html %}
{% endfor %}

## Blogs
{% for post in site.posts limit:2 %}
{% include blogInfo.html %}
{% endfor %}
