---
layout: article
title: "New work: On the Multi-channel Kondo problem"
permalink: /mckondo/
tags:
  - work
  - arxiv-upload

---

{% for work in site.data.publications %}
{% if work["permalink"] == page.permalink %}
{% include publication_info.html %}
{% endif %}
{%endfor %}
<div style="height:2em;width:50%; border-bottom:0.2em solid gray;"></div>

The multichannel Kondo model consists of $K$ conduction channels $\vec S_i$ interacting with an impurity spin of strength $S_d$ (the Kondo model corresponds to $K=1,S_d=1/2$). It is well-known that the overscreened case $(K > 2S_d)$ corresponds to a **degenerate ground state, incomplete quenching of the local moment and non-Fermi liquid excitations** characterised by anomalous zero temperature divergences in thermodynamic quantities like the specific heat and susceptibility. Nevertheless, there was no _ab initio_ derivation of the non-Fermi liquid Hamiltonian that describes these excitations. Neither had the precise role of **quantum frustration** in this problem and the effect of degeneracy on the low-energy physics been made clear. The frustration arises in this problem because the impurity is **unable to form a singlet** with a single conduction channel.

![](/assets/images/MCkondo/mchannels.svg){: class="img__post"}

We study the overscreened multi-channel Kondo (MCK) model using the recently developed [unitary renormalization group](https://www.sciencedirect.com/science/article/pii/S055032132030256X) (URG) technique. Our results display the importance of ground state degeneracy in explaining various important properties like the **breakdown of screening** and the presence of local non-Fermi liquids. The impurity susceptibility of the intermediate coupling fixed point Hamiltonian in the zero-bandwidth (or star graph) limit shows a power-law divergence at low temperature, signaling its critical nature. Despite the absence of inter-channel coupling in the MCK fixed point Hamiltonian, the study of [mutual information](https://en.wikipedia.org/wiki/Mutual_information) between any two channels shows non-zero correlation between them. 

A **spectral flow** analysis of the star graph reveals that the degenerate ground state manifold possesses **topological quantum numbers**. Upon disentangling the impurity spin from its partners in the star graph, we find the presence of a **local Mott liquid** arising from inter-channel scattering processes.
The low energy effective Hamiltonian obtained upon adding a finite non-zero conduction bath dispersion to the star graph Hamiltonian for both the two and three-channel cases displays the presence of **local non-Fermi liquids** arising from inter-channel quantum fluctuations. Specifically, we confirm the presence of a **local marginal Fermi liquid** in the two channel case, whose properties show logarithmic scaling at low temperature as expected. Discontinuous behaviour is observed in several measures of ground state entanglement, signaling the underlying **orthogonality catastrophe** associated with the degenerate ground state manifold.

![](/assets/images/MCkondo/singlet.svg){: class="img__post"}

We extend our results to underscreened and perfectly screened MCK models through duality arguments. A study of channel anisotropy under renormalisation flow reveals a series of **quantum phase transitions** due to the change in ground state degeneracy. Our work thus presents a template for the study of how a degenerate ground state manifold arising from symmetry and duality properties in a multichannel quantum impurity model can lead to novel multicritical phases at intermediate coupling. 
Feel free to check out the [ar\\(\chi\\)iv preprint](https://arxiv.org/abs/2111.10580).
