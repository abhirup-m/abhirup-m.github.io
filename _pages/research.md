---
classes: wide
title: Research Work
permalink: /research/

---

This is a list of my publications (and preprints) and the projects that I am currently involved in. A more detailed version of my research interests can be found [here](/work/).

## Ongoing Projects

- A new auxiliary model approach to studying metal-insulator transitions in bulk lattice models; connecting the infinite dimensional auxiliary model to a finite dimensional system without resorting to self-consistency
- Kondo model in magnetic field: breakdown of Kondo effect and its consequences for symmetry breaking, entanglement loss and the measurement problem

## Publications and Preprints

{% for work in site.data.publications %}
- {% include publication_info.html %}
{% endfor %}
