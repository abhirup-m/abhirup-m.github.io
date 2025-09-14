---
title: Research Statement
permalink: /res-state/
---

I am a quantum condensed matter theorist focusing primarily on characterising phases of strongly correlated *quantum matter* - novel states that appear at zero temperature and display emergent exotic properties, often driven by strong interactions between the constituent particles. Such phases are interesting because they cannot be organised according to the paradigm of spontaneous symmetry breaking and local order parameters. Instead, phase transitions involving such phases often involve changes in *topology*.

My work presently focuses on understanding various features of Mott metal-insulator transitions from the perspective of *Kondo breakdown*. Impurity models involving destruction of Kondo screening often display quantum criticality, non-Fermi liquid physics and pseudogapped phases. This has allowed us to propose simple impurity models that are able to capture and understand crucial features of Mott transitions.

## Kondo breakdown as route to understanding Mott transitions

### Mott transition on Bethe lattice: $$ d=\infty $$

The rich physics of metal–insulator transitions (MITs) in strongly correlated systems has been an active subject of study for quite some time. While DMFT obtains a self-consistent solution of the *Mott MIT* for the $$ 1/2- $$filled Hubbard model in infinite dimensions, important questions such as the precise nature of the impurity model and the nature of quantum critical metal at the transition remain controversial.

{% include figure.html image='Mottmetal.svg' caption="We define a lattice-embedded impurity model (guided by phenomenology) and obtain its low-energy phases (top row) using an impurity solver. Using manybody translation operators and Bloch's theorem, we map the phases of the impurity model to those of a lattice model (bottom row)." width="600" %}

In order to address this, we proposed[^1] an *extended Anderson impurity model* that captures the infinite dimensional Mott transition in remarkable detail, in the form of a *localisation-delocalisation transition* of the impurity electron. Using this model, we demonstrated the presence of *charge fluctuations* proximate to the impurity site in the conduction bath as the driver of the transition, and the emergence of quantum critical *non-Fermi liquid* excitations at the transition.

### Mott transition in 2D
We then applied our approach to the case of two dimensions, in order to address some of the open questions pertaining to the mysterious pseudogap and non-Fermi liquid phases that arise in the *copper-oxide and heavy-fermion materials*. We updated[^2] the extended Anderson impurity model by *embedding the impurity site* within a 2D square lattice and "periodised" our impurity model using manybody translation operators to make contact with an *extended Hubbard model* (see Fig. 1). We showed that the transition from a Fermi liquid to a symmetry-preserved Mott insulator goes through a quantum critical *Mott metal* characterised by non-Fermi liquid excitations with anomalous self-energy behaviour and long-range spin correlations and entanglement (see Fig. 1).

## Engineering non-Fermi liquids from critical impurity models
Another aspect of my work that is closely allied with the previous theme is the study of non-Fermi liquid phases emerging from quantum impurity models. This is relevant because non-Fermi liquids often arise in correlated materials, particularly in the proximity of quantum phase transitions. This makes characterisation of such non-Fermi liquids crucial.

### Emergence of non-Fermi liquids
We[^3] investigated the *single-channel Kondo model* and demonstrated the presence of *two-particle correlations* and entanglement within the Kondo cloud in the form of an effective Hamiltonian; we also calculated how they evolved during the high to low-temperature crossover. This work set the stage for exploring breakdown of such strong-coupling behaviour in other models.

We next[^4] turned our focus to the *multichannel Kondo problem* that displays breakdown of Kondo screening, and shed light on the role played by the *ground state degeneracy* in the non-Fermi liquid physics - how it leads to an orthogonality catastrophe in the low-energy excitations and how it modified the various correlations into anomalous forms. This work also emphasized the importance of using *simpler models* (the star graph in this case) to capture the essential physics.

### Quantum critical lattice models
We next wanted to use our approach to investigate the *exotic critical point* demonstrated in some recent works (Phys. Rev. B 93 155136 (2016), Phys. Rev. B 107 205104 (2023)) within a three-orbital lattice model. We have showed[^5] that a single $f-$impurity hybridising with two independent conduction baths leads (see Fig. 3) to similar quantum critical phases with non-Fermi liquid excitations and pseudogapped spectral functions. This is in contrast to the isolated critical points that appear in other impurity models and that require fine-tuning of parameters.

{% include figure.html image='threeOrbital.svg' caption="We have studied an impurity model analogue of a three-layer periodic Anderson model, where the impurity site represents the $f-$layer hybridising with the two conduction bath layers. We find signatures of a quantum critical phase displaying non-Fermi liquid excitations and long-range entanglement. This gives insight into the continuous transition obtained in the full three-layer model from DMFT calculations." width="600" %}

## Bulk-boundary correspondence and entanglement renormalisation
This work[^6] differs somewhat from the others in the sense that it involves non-interacting electrons, but it speaks to the broader theme of emergence and *topological transitions* in fermionic systems. Specifically, this work involves a demonstration of the holographic principle by constructing the emergent dimension from the quantum field theory, which is typically more difficult than the top-down approach of studying strongly-coupled quantum theories by mapping them to their semiclassical gravity duals. 

  In this work, we provide such a construction by showing how the *entanglement renormalisation* in a free fermion system (with and without a mass gap) leads to the emergence of a holographic dimension. Tuning the system from a gapless phase into a gap leads to a change in curvature of the emergent space; we argue that this topological transition (and the underlying critical Fermi surface at this transition) coincides with the formation of a *quantum wormhole geometry* that connects the UV and the IR of the emergent dimension (@Fig3).

{% include figure.html image='wormhole.svg' caption="In [^6], we show that entanglement renormalisation in a 2D system of free electrons leads to the emergence of a holographic dimension. While the gapless RG flow involves a growth in the entanglement between the UV and IR spaces, the latter leads to the vanishing of UV-IR entanglement. This results in the emergence of connected (left) and disconnected (right) geometries, respectively." width="600" %}

## Magnetic dimensional crossover in CrSiTe$$_3$$
A recurring theme in my work has been to use simple theoretical models to interpret emergent experimental signatures of correlated matter. In this spirit, I recently collaborated [@Anjan2025] with Prof. N Kamaraju's experimental group  on a project investigating the two-step *magnetic dimensional crossover* (paramagnet -> long-range fluctuations -> 3D ferromagnet) in the van der Waals ferromagnet CrSiTe$#sub[3]$. The experimental involves mapping out the two-stpe crossover by studying a bulk sample of CrSiTe$#sub[3]$ with ultra-fast pulses using *pump-probe spectroscopy* and tracking the acoustic strain pulse generated during relaxation of the carriers.

The shape of the acoustic pulses tracks the various steps of the magnetic crossover through several signatures, such as a phase reversal of the strain pulse in the ferromagnetic phase, a red-shift (softening) of the high-frequency phonons and a gapping out of the low-frequency phonon modes within the strain pulse. In order to explain these signatures, I (along with Prof. S Lal) came up with a simple model of *phonons interacting with the lattice spin fluctuations*. By treating the spin interactions using mean-field theory, we showed that the interacting model can be understood as a theory of new phonon fields with a modified dispersion. More specifically, we showed that the renormalisation of the phonon characteristics due to its interaction with the spin-fluctuations explains the various features mentioned above.

## Short-term future directions

- Our work on the Mott transition has some obvious possible extensions. These include studying the effect of doping the impurity site, as well as appying our approach to the heavy-fermion materials.

- In terms of investigating non-Fermi liquid physics arising from Kondo breakdown, we are presently investigating a variety of impurity models to construct a *overarching theory for partially-screened models* and the associated low-energy signatures, using several diagnostics.

- With regards to the entanglement renormalisation aspect, it should be interesting to check how the entanglement scaling plays out for Lifshitz fermions $$ E(k) \propto k^1 k^\alpha, \alpha > 1 $$. Once can also try to model the effects of electronic correlation perturbatively or by using an exactly solvable model such as the Hatsugai-Kohmoto model and studying how it affects properties of the holographic dimension.

## Long-term research goals

- *Developing a unifying framework for fermionic criticality*. Developing an overaching theory of interacting electrons in that explains the mechanism of phase transitions in many of these systems (such as cuprates, heavy fermion materials, iron-based superconductors, etc), and also accounting for the exotic parent phases which turn critical during such transitions. Our work on the Mott metal is a step in this direction.

- *Topology and entanglement as probes for transitions in strongly correlated electrons*, instead of local order parameters. It would be interesting to make these ideas more precise and identify concrete topological order parameters for the phase transitions and characterise phases of quantum matter using patterns of entanglement. There are already hints of this in the literature ([New J. Phys. 22 063011 (2020)](https://iopscience.iop.org/article/10.1088/1367-2630/ab890e), [arXiv:2506.04342 (2025)](https://arxiv.org/abs/2506.04342), as well  as our Mott metal work).

## References
[^1]: Abhirup Mukherjee, N S Vidhyadhiraja, A Taraphder, S Lal. Kondo frustration via charge fluctuations: a route to Mott localisation. New J. Phys. 25 113011 (2023)
[^2]: Abhirup Mukherjee, S R. Hassan, A Mukherjee, N S. Vidhyadhiraja, A Taraphder, S Lal. Mott Criticality as the Confinement Transition of a Pseudogap-Mott Metal. arXiv:2507.17201 (2025)
[^3]: A Mukherjee, Abhirup Mukherjee, N S. Vidhyadhiraja, A Taraphder, S Lal. Unveiling the Kondo cloud: Unitary renormalization-group study of the Kondo model. Phys. Rev. B 105, 085119 (2022)
[^4]: S Patra, Abhirup Mukherjee, A Mukherjee, N S Vidhyadhiraja, A Taraphder, S Lal. Frustration shapes multi-channel Kondo physics: a star graph perspective. J. Phys.: Condens. Matter 35 315601 (2023)
[^5]: D Debata*, A Kumar*, Abhirup Mukherjee, N S Vidhyadhiraja, S Lal. Quantum Critical Mott Transitions in a Three-Orbital Model System. In preparation (2025)
[^6]: Abhirup Mukherjee, S Patra, S Lal. Holographic entanglement renormalisation for fermionic quantum matter. J. Phys. A: Math. Theor. 57 275401 (2024)
[^7]: A Kumar N M, S Mukherjee, Abhirup Mukherjee, A Punjal, S Purwar, T Setti, S Prabhu S., S Lal, N Kamaraju. Revealing the magnetic dimensional crossover in the Heisenberg ferromagnet CrSiTe3 through picosecond strain pulses. Phys. Rev. B 111, L140414 (2025)
