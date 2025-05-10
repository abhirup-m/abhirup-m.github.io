---
title: Publications and Preprints
permalink: /publications/
---

# {{ page.title }}
{% for item in site.data.publications %}
{{ item["title"] }}<span class="button">{{ item["journal_ref_short"] }}</span> 
<br>
<br>
{% endfor %}
