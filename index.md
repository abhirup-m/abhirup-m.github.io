---
layout: default
permalink: /
---

# Hey There!
Welcome to my website. I am **Abhirup**, a research scholar at the Indian Institute of Science Education and Research Kolkata [(IISER Kolkata)](https://www.iiserkol.ac.in/), living in Kalyani, West Bengal, India.
I work in **theoretical condensed matter physics**, and am a part of the Emergent Phenomena and Quantum Matter ([EPQM](https://www.iiserkol.ac.in/~slal/index.html)) group.
I study various topics in the field of **strongly correlated materials**. 

## Recent Publications and Preprints
{% for work in site.data.publications limit:2 %}
- {% include publicationInfo.html %}
{% endfor %}

## Blogs
{% for post in site.categories["blog"] limit:2 %}
- {{ post.title }} 
{% endfor %}
