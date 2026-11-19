---
title: Research and Publications
permalink: /research/
---

## Broad Research Area
I work in theoretical quantum condensed matter physics, focusing on **strongly correlated fermionic systems**. These are systems in which large number of electrons behave in a cooperative manner; strong correlations among the electrons leads to the emergence of novel physics. Examples include insulators that arise out electronic repulsion (Mott insulators), exotic metallic phases that behave in inexplicable ways(strange metals), and phase transitions between such phases. I am a part of the ([computational quantum many-body theory](https://cqm.snu.ac.kr/home)) group. The group's work involves developing numerical methods for studying quantum many-body problems and applying them to investigate various systems, such as strongly correlated electrons, mesoscopic and nanoscale quantum devices, and ultracold atoms in optical lattices.

During my PhD, I was part of the [Emergent Phenomena in Quantum Matter (EPQM)](https://epqm.github.io/) group at IISER Kolkata, where I applied a mix of analytical and numerical methods to study quantum impurity models and lattice models that show interesting features such as phase transitions, quantum criticality and non-Fermi liquid phases. My PhD thesis can be found [here](/assets/documents/thesisAbhirupMukherjee.pdf).

Feel free to check out my [research statement](/res-state/) for more technical details.

## Publications and Preprints

[_Also available for download a [PDF](/assets/documents/publications_AbhirupMukherjee.pdf)!_]

{% for work in site.data.publications %}
- {% include publicationInfo.html showAuthor=true %}
{% endfor %}
