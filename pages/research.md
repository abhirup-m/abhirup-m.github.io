---
title: Research and Publications
permalink: /research/
---

## Broad Research Area
I work in theoretical quantum condensed matter physics, focusing on **strongly correlated fermionic systems**. These are systems in which large number of electrons behave in a cooperative manner; strong correlations among the electrons leads to the emergence of novel physics. Examples include insulators that arise out electronic repulsion (Mott insulators), exotic metallic phases that behave in inexplicable ways(strange metals), and phase transitions between such phases. I am a part of the Emergent Phenomena and Quantum Matter ([EPQM](https://www.iiserkol.ac.in/~slal/index.html)) group. The group's work involves studying correlated fermionic and spin models and obtaining novel emergent states of matter such as superconductivity, non-Fermi liquids, etc. 

Feel free to check out my [research statement](/res-state/) for more technical details.

## Publications and Preprints

[_Also available for download a [PDF](/assets/documents/publications_AbhirupMukherjee.pdf)!_]

{% for work in site.data.publications %}
- {% include publicationInfo.html showAuthor=true %}
{% endfor %}
