---
layout: article
title: Research
permalink: /research/

---


## Ongoing Projects

- **Holographic entanglement in free fermionic quantum matter: hierarchy & topology**

<details>
<summary> <i>Expand</i> </summary>

<i>To be added</i>
</details>

- **A new auxiliary model approach to studying fermionic systems of strong correlation**

<details>
<summary> <i>Expand</i> </summary>
<i>To be added</i>
</details>

- **Local metal-insulator transition in a generalised Anderson impurity model**

<details>
<i>To be added</i>
<!-- <summary> <i>Expand</i> </summary> -->
<!-- <div markdown="1"> -->
<!-- <img src="/assets/images/dmft.svg" style="display: inline; float: right; margin-left: 2em; margin-right: 2em;" width="500"/> -->
<!-- Impurity models like the [Anderson](https://en.wikipedia.org/wiki/Anderson_impurity_model) and [Kondo](https://en.wikipedia.org/wiki/Kondo_model) models are used as auxiliary models to study [metal-insulator transitions](https://en.wikipedia.org/wiki/Metal%E2%80%93insulator_transition) in bulk models like the [Hubbard](https://en.wikipedia.org/wiki/Hubbard_model) using [dynamical mean-field theory](https://en.wikipedia.org/wiki/Dynamical_mean-field_theory). The precise method of finding the appropriate parameters of the impurity model involves solving self-consistent equations. During this process, the impurity model keeps evolving until translation symmetry is achieved in the impurity+bath system. While this does show a transition at a critical value of the onsite Hubbard $U$, there is at present **no way** of connecting the thermodynamics of the bulk to that of the impurity. This is partly due to the **opacity** involved in the self-consistency loop in the DMFT-based methods. The other roadblock is the fact that since  the impurity model keeps updating itself in the process, it is not clear which single impurity model can be mapped to the bulk model, such that the former can be used to study the later. -->
<!-- {: style="text-align: justify"} -->

<!-- <img src="/assets/images/Add.svg" style="display: inline; float: left; margin-left: 2em; margin-right: 2em;" width="500"/> -->
<!-- We propose here a **minimal** impurity model as the auxiliary model that can be used to study metal-insulator transitions in bulk models like the Hubbard. The minimal model is obtained by adding **spin-exchange physics and local bath correlation** into the single impurity Anderson model. We prove this by demonstrating the presence of both metallic (screened) as well as insulating (unscreened) phases through a renormalisation group treatment of such a model. We show that this **impurity phase transition** is brought about by **increased charge isospin fluctuations** in the bath; indeed, it is these fluctuations that destabilise the Kondo cloud and lead to a breakdown of screening. --> 
<!-- {: style="text-align: justify"} -->

<!-- This transition is characterised by a measure of [many-particle entanglement](https://en.wikipedia.org/wiki/Quantum_entanglement) $\left(\chi\right)$ which acts as an [order parameter](https://www.oxfordreference.com/view/10.1093/oi/authority.20110803100253339) - it is non-zero in the screened phase and reduces to zero in the unscreened phase. This is made possible by relating the impurity Greens function to $\chi$, and it turns out that such relations exist for any 1-particle or 2-particle impurity-bath correlation. -->
<!-- Such an auxiliary model approach to studying bulk systems of strong correlation is qualitatively different from a more conventional approach like dynamical mean-field theory or its cluster variants. There is no need to obtain the impurity model self-consistently, and this makes it possible to directly relate the thermodynamics of the bulk model to that of the impurity. -->
<!-- {: style="text-align: justify"} -->
<!-- </div> -->
</details>


## Completed Projects

{% for work in site.data.publications %}
{% include publication_info.html %}
<br>
{% endfor %}
