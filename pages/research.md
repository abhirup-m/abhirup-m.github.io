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

- [Frustration shapes multi-channel Kondo physics: a star graph perspective](https://arxiv.org/abs/2205.00790)

<details>
<summary> <i>Expand</i> </summary>
<div markdown="1">
<img src="/assets/images/mck.svg" style="display: inline; float: right; margin: 2em;" width="400"/>
The multichannel Kondo model consists of $K$ conduction channels $\vec S_i$ interacting with an impurity spin of strength $S_d$ (the Kondo model corresponds to $K=1,S_d=1/2$). It is well-known that the overscreened case $(K > 2S_d)$ corresponds to a **degenerate ground state, incomplete quenching of the local moment and non-Fermi liquid excitations** characterised by anomalous zero temperature divergences in thermodynamic quantities like the specific heat and susceptibility. Nevertheless, there was no _ab initio_ derivation of the non-Fermi liquid Hamiltonian that describes these excitations. Neither had the precise role of **quantum frustration** in this problem and the effect of degeneracy on the low-energy physics been made clear. The frustration arises in this problem because the impurity is **unable to form a singlet** with a single conduction channel.
{: style="text-align: justify"}

<img src="/assets/images/stargraph.svg" style="display: inline; float: left; margin: 2em;" width="400"/>
We study the overscreened multi-channel Kondo (MCK) model using the recently developed [unitary renormalization group](https://www.sciencedirect.com/science/article/pii/S055032132030256X) (URG) technique. Our results display the importance of ground state degeneracy in explaining various important properties like the **breakdown of screening** and the presence of local non-Fermi liquids. The impurity susceptibility of the intermediate coupling fixed point Hamiltonian in the zero-bandwidth (or star graph) limit shows a power-law divergence at low temperature, signaling its critical nature. Despite the absence of inter-channel coupling in the MCK fixed point Hamiltonian, the study of [mutual information](https://en.wikipedia.org/wiki/Mutual_information) between any two channels shows non-zero correlation between them. 
{: style="text-align: justify"}

A **spectral flow** analysis of the star graph reveals that the degenerate ground state manifold possesses **topological quantum numbers**. Upon disentangling the impurity spin from its partners in the star graph, we find the presence of a **local Mott liquid** arising from inter-channel scattering processes.
The low energy effective Hamiltonian obtained upon adding a finite non-zero conduction bath dispersion to the star graph Hamiltonian for both the two and three-channel cases displays the presence of **local non-Fermi liquids** arising from inter-channel quantum fluctuations. Specifically, we confirm the presence of a **local marginal Fermi liquid** in the two channel case, whose properties show logarithmic scaling at low temperature as expected. Discontinuous behaviour is observed in several measures of ground state entanglement, signaling the underlying **orthogonality catastrophe** associated with the degenerate ground state manifold.
{: style="text-align: justify"}

<img src="/assets/images/iqpt.svg" style="display: inline; float: right; margin: 2em;" width="400"/>
We extend our results to underscreened and perfectly screened MCK models through duality arguments. A study of channel anisotropy under renormalisation flow reveals a series of **quantum phase transitions** due to the change in ground state degeneracy. Our work thus presents a template for the study of how a degenerate ground state manifold arising from symmetry and duality properties in a multichannel quantum impurity model can lead to novel multicritical phases at intermediate coupling. 
Feel free to check out the [ar\\(\chi\\)iv preprint](https://arxiv.org/abs/2111.10580).
{: style="text-align: justify"}
</div>
</details>

- [Unveiling the Kondo cloud: Unitary RG study of the Kondo model](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.105.085119)

<details>
<summary> <i>Expand</i> </summary>
<div markdown="1">
<img src="/assets/images/singlet.svg" style="display: inline; float: right; margin: 2em;" width="400"/>
The [Kondo model](https://en.wikipedia.org/wiki/Kondo_model) consists of an impurity spin \\(\vec S_d~\\) interacting with a local conduction bath spin \\(\vec S_0~\\) through a spin-exchange coupling \\(\vec S_d\cdot \vec S_0~\\). While it is clear that at high temperatures, the impurity spin remains decoupled from the bath because of thermal spin fluctuations, the behaviour at low temperatures is more non-trivial and required the development of a new framework before the problem was solved.
Indeed, it was only after the development and application of the [numerical renormalisation group method](https://en.wikipedia.org/wiki/Numerical_renormalization_group) when we realised that the ground state of this model was a macroscopic spin singlet state - an entangled state formed by the impurity spin and the local spin of the conduction bath that couples to the Kondo impurity.
{: style="text-align: justify"}

<img src="/assets/images/urg.svg" style="display: inline; float: left; margin: 2em;" width="400"/>
The locking of the impurity spin into a singlet through the quenching of its spin degrees of freedom at low temperatures is analogous to the phenomenon of [colour confinement](https://en.wikipedia.org/wiki/Color_confinement) that binds quarks to form hadrons at temperatures below the Hagedorn temperature.
While the ground state was known for quite some time, no simple description (effective Hamiltonian) for the [Kondo cloud](https://arxiv.org/abs/0911.2209) (the set of conduction electrons that form the singlet) was available.
Moreover, the variation of the [quantum entanglement](https://en.wikipedia.org/wiki/Quantum_entanglement) as the system approached the singlet state was unknown.
Our work sheds light on these topics.
We used the recently developed [unitary renormalisation group method](https://www.sciencedirect.com/science/article/pii/S055032132030256X) to obtain the effective Hamiltonian for the Kondo model at the RG fixed point, and then derived the effective Hamiltonian for the conduction electrons by integrating out the impurity.
{: style="text-align: justify"}

Interestingly, a lot of the physics like the ground state, the qualitative nature of screening, certain thermodynamic quantities and universal constants can be obtained from the zero bandwidth limit of the RG fixed point Hamiltonian, which turns out to be just a two-spin Heisenberg model. To obtain the effective Hamiltonian for the excitations, we added a tight-binding hopping into the zero bandwidth model and studied its effects using renormalised perturbation theory about the fixed point. The excitations of the conduction electrons are found to contain both [Fermi liquid](https://en.wikipedia.org/wiki/Fermi_liquid_theory) and [non-Fermi liquid](https://en.wikipedia.org/wiki/Fermi_liquid_theory#Non-Fermi_liquids) components, the latter arising from the spin-flip fluctuations. 
<img src="/assets/images/zeromode_eff.svg" style="display: inline; float: right; margin: 2em;" width="400"/>
These non-Fermi liquid components are therefore responsible for the quenching of the impurity.
This is further supported by the study of the entanglement and correlations within the Kondo cloud; we find that electrons within the Kondo cloud get entangled more strongly as the system approaches the fixed point, while the spin-spin correlations are also found to increase.
All these are direct signatures of the screening of the impurity.
Feel free to check out the [published version](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.105.085119) or the [ar\\(\chi\\)iv preprint](https://arxiv.org/abs/2111.10580).
{: style="text-align: justify"}
</div>
</details>
