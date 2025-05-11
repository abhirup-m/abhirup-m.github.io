---
title: "Generalised Approach Towards Reduced Density Matrix Calculation"
permalink: /blogs/reduced-dm/
category: Computational Physics
excerpt: ""
toc: true
---

## What is a density matrix?

### Density matrix as a quantum probability distribution
Since this article is primarily for demonstrating the computation of reduced density matrices, I won't spend too much time on introducing them.

A density matrix plays the role of a probability density function (PDF) for a quantum system. A classical variable $$ X $$ that can take values $$ x \in [-X^*, X^*] $$ has a PDF $$ F(X=x) $$, which is used, for example, for calculating the average value (expectation value) of the variable:

$$ \begin{gather} \braket{X} = \int_{-X^*}^{X^*} xF(x)dx ~. \end{gather} $$

In quantum mechanics, the variables we are interested in are operators $$ \mathcal{O} $$, and a quantum PDF $$ \rho $$ will then give the expectation value of the operator, in a fashion similar to its classical counterpart:

$$ \braket{\mathcal{O}} = \sum_{\phi} \braket{\phi | \rho \mathcal{O} | \phi} ~;$$

here, the integral over the classical values $$ x $$ is replaced by a sum over the all possible quantum states $$ \ket{\phi} $$ (complete orthonormal basis) of the system. However, we already know that the expectation value of a quantum operator is given by

$$ \braket{\mathcal{O}} = \braket{\Psi | \mathcal{O} | \Psi} ~.$$

To bring this form closer to the one in terms of $$ \rho $$ (eq. 2), we insert an identity resolution: $$ 1 = \sum_\phi \ket{\phi}\bra{\phi} $$:

$$ \braket{\mathcal{O}} = \sum_{\phi} \braket{\Psi | \mathcal{O} | \phi}\braket{\phi| \Psi} = \sum_{\phi} \braket{\phi| \Psi}\braket{\Psi | \mathcal{O} | \phi} ~.$$

A comparison of this equation to eq. (2) gives

$$ \rho = \ket{\Psi}\bra{\Psi} ~;$$

a density matrix (also called density operator) is therefore formally defined as the outer product of the wavefunction with its conjugate. It encodes all information about the state; for example, the probability of measuring the system to be at a position $$ x $$ (hence in a state $$ \ket{x} $$) is given by $$ P(x) = \braket{x\vert \rho\vert x} $$. From its definition in eq. (5), the DM has the very important property that it has unity trace: 

$$ \text{Tr}[\rho] = 1 ~,$$

where $$ \text{Tr}[\cdot] $$ is the trace of an operator. This is seen very easily be taking the trace in an orthonormal basis in which the state $$ \ket{\Psi} $$ is one of the basis states. 

While the state $$ \ket{\Psi} $$ satisfies the Schrodinger equation $$ i\hbar \partial \Psi / \partial t = H\Psi $$ ($$ H $$ being the Hamiltonian of the system), the DM satisfies a Heisenberg-like time-evolution equation:

$$ \frac{d}{dt}\rho = i \left[H, \rho\right]~.$$

### Mixedness of a state

If a DM is constructed from a single state $$ \ket{\Psi} $$ (as defined in eq. 5), we have the property that $$ \text{Tr}[\rho^2] = 1$$, where $$ \text{Tr}[\cdot] $$ is the trace of an operator. This is because, we can write 

$$ \rho^2 = \ket{\Psi}\bra{\Psi}\cdot\ket{\Psi}\bra{\Psi} =  \ket{\Psi}\bra{\Psi} = \rho ~, $$

so that $$ \text{Tr}[\rho^2] = \text{Tr}[\rho] = 1 $$. In the above manipulation, we used the normalisation property of the state, $$ \braket{\Psi\vert\Psi} = 1 $$. This is however not a defining property of DMs. The only defining properties are eqs. (2), (6) and (7); these properties are however linear in $$ \rho $$, are therefore also satisfied by statistical superpositions of DMs. For example, consider the DM

$$ \rho = \frac{1}{\sqrt 2}\left[\ket{\Psi_1}\bra{\Psi_1} + \ket{\Psi_2}\bra{\Psi_2}\right] ,$$

where $$\ket{\Psi_{1,2}} $$ are orthogonal normalised states. The trace of $$ \rho^2 $$ for such a state is only $$ 1/2 $$; such states satifying $$ \text{Tr}[\rho^2] < 1 $$ are termed _mixed states_; the DM describing such states cannot be written in the form $$ \rho = \ket{\Psi}\bra{\Psi} $$ for any wavefunction $$ \ket{\Psi} $$. On the other hand, the DMs that _can_ be expressed like that are termed _pure states_, and have $$ \text{Tr}[\rho^2] = 1 $$.

## Route to mixedness: Reduced density matrices

### Reduced density matrix as a post-measurement state

One way in which a pure state can be realistically converted into a mixed state is through a measurement process. Consider the zero total spin state formed by two spins:

$$ \ket{\Psi} = \frac{1}{2}\left[\ket{\uparrow,\downarrow} + \ket{\downarrow,\uparrow} \right]~, \rho = \ket{\Psi}\bra{\Psi} ~.$$

The state $$ \ket{\uparrow,\downarrow} $$ has the first spin pointing up and the second one down, and this is in a superposition with the its flipped counterpart $$ \ket{\downarrow,\uparrow} $$. This is clearly a pure state.

If we now measure the state of the second spin, it will collapse into one of it's two states; the other spin will collapse into the opposite state (given the antiparallel configurations of the spins). What this means is that until one checks what the result of the measurement is, the first spin remains in a statistical superposition of both outcomes (up and down). This is formally expressed through a partial trace operation: the state of the first spin after a measurement of the second spin is obtained by taking the full density matrix $$ \rho $$ and computing its trace over the states $$ \ket{\sigma_B}$$ of the second spin, leaving out the states of the first spin from the trace:

$$ \rho_1 = \text{Tr}_2 [\rho ] = \sum_{\sigma_2} \braket{\sigma_2 \vert \rho \vert \sigma_2} ~;$$

where $$ \ket{\sigma_2}$$ sums over the states $$\ket{\uparrow}$$ and $$\ket{downarrow}$$ of the second spin. this partial tracing operation $$ \text{Tr}_2 $$ codifies the measurement process, and the partially traced density matrix $$ \rho_1 $$ is termed a reduced density matrix (RDM) of the first spin, because it only captures information about the first spin (the second spin has been traced out).

To see the connection with mixedness, let us compute the RDM for the first spin explicitly:

$$ \rho_1 = \braket{\uparrow_2 \vert \rho \vert \uparrow_2} + \braket{\downarrow_2 \vert \rho \vert \downarrow_2} = \frac{1}{2}\left[\ket{\uparrow_1}\bra{\uparrow_1} + \ket{\downarrow_1}\bra{\downarrow_1}\right] ~,$$

where the numbered subscripts on the kets and bras indicate that they only act on the respective Hilbert spaces. To see that $$ \rho_1 $$ describes a mixed state, we adopt a specific representation:

$$ \ket{\uparrow_1} = \left(1 \atop{0} \right)~, \ket{\downarrow_1} = \left(0 \atop{1} \right)~,\\[5pt]
\implies \rho_1 = \frac{1}{2}\left({1 \quad 0}\atop{0 \quad 1}\right),~ \rho_1^2 = \frac{1}{4}\left({1 \quad 0}\atop{0 \quad 1}\right) ~.$$

The trace of $$ \rho_1^2 $$ is half, hence it is a mixed state.

### Physical implications of mixedness: Connection to entanglement

The deviation of trace of $$\rho^2$$ from its maximum value of unity can be thought of as a measure of the lost information. In the example above, when we traced out the states of the second spin, we lost some information about the state of the first spin as well. This is because the two spins were _entangled_; they had quantum correlations between them. The entanglement arises from the fact that the states of the two spins are anti-correlated.

If instead we had chosen a non-entangled parent state to start from, the reduced density matrix would not have been mixed. For example, consider the state

$$ \ket{\Psi} = \frac{1}{2}\left(\ket{\uparrow_1} + \ket{\downarrow_1}\right)\otimes\left(\ket{\uparrow_2} + \ket{\downarrow_2}\right) ~.$$

It is easy to see that this state does not contain any correlations between the two spins - no matter the configuration of the second spin, the first spin is always in the state $$ \ket{\uparrow_1} + \ket{\downarrow_1} $$. The RDM for the first spin comes out to be

$$ \rho_1 = \frac{1}{2}\left({1 \quad 1}\atop{1 \quad 1}\right),~ \rho_1^2 = \frac{1}{4}\left({1 \quad 1}\atop{1 \quad 1}\right) ~,$$

revealing that $$ \rho_1 $$ is not mixed.

## What's the point of this article?

While the above examples were for a system of two spins, in general our system will consist of a large number of qubits (which may be spins or electrons). The RDM can then describe any subset—e.g., all spins on even lattice sites—while the rest are traced out.

In physical problems, the main challenge is usually finding the eigenstates of the Hamiltonian, since its size grows exponentially with the number of particles. In this article, we focus on the more modest task of numerically computing reduced density matrices once the eigenstates are given.

Though simple in principle, complications arise in two cases:
- if we have fermion signs, or
- the full basis cannot be expressed as a direct product of local basis sets.

The former arises if we are dealing with fermions, and the latter arises if we are working in a rotated basis. We will tackle these scenarios one by one. I will first show an approach that takes care of the fermion signs, but still assumes of a product basis. With that out of the way, I will show a basis-independent way of calculating RDMs that solves both of the above issues.

## Taking care of fermions signs: The quantum state as a tensor

In order to explain this approach, I will first write down a general expression for various matrix elements of the RDM $$ \rho_1 $$. Let the states (not) being traced over be spanned by the basis ($$ \left\{\ket{i_1}\right\} $$) $$ \left\{\ket{i_2}\right\} $$. The matrix elements of $$ \rho_1 $$ are obviously indexed by the labels $$ \{ i_1 \} $$. Each such matrix element can be expressed as

$$ \rho_1[i_1, j_1] = \braket{i_1 \vert \rho_1 \vert j_1} = \sum_{k_2} \left(\bra{i_1}\bra{k_2}\right)\ket{\Psi}\bra{\Psi} \left(\ket{k_2}\ket{j_1}\right)~. $$

We define a rank 2 tensor $$ \mathcal{C} $$ whose elements are defined as $$ \mathcal{C}_{i_1,k_2} = \left(\bra{i_1}\bra{k_2}\right)\ket{\Psi} $$. The matrix element $$ \rho_1[i_1, j_i] $$ can then be expressed as

$$ \rho_1[i_1, j_i] = \sum_{k_2} \mathcal{C}_{i_1,k_2} \mathcal{C}^*_{j_1,k_2} = \left[\mathcal{C}\mathcal{C}^\dagger\right]_{i_1, j_1} ~.$$

This tells us that $$ \rho_1 = \mathcal{C}\mathcal{C}^\dagger $$, where $$ \mathcal{C} $$ was defined above, and is simply a matrix whose rows are indexed by the states being traced over, and its columns by the states not being traced over. It is essentially a matrix representation of the state $$ \ket{\Psi} $$.

It turns out that this greatly simplifies the calculation of reduced density matrices for the case in which our subsystems are continguous - that is, if the indices of the qubits that are being traced over appear one after another. Denoting the size of the Hilbert spaces of the traced subsystem to be $$ 2^{N_2} $$ and that of the untraced subsystem to be $$ 2^{N_1} $$, the state $$ \ket{\Psi} $$ is a column vector of size $$ 2^{N_1 + N_2} $$, while the $$ \mathcal{C} $$ matrix has $$ 2^{N_2} $$ rows and $$ 2^{N_1} $$ columns. The total number of qubits is then of course $$ N_1 + N_2 $$. Since we have assumed that the subsystem indices are all contiguous, the untraced system must consist of the indices $$ 1, 2, \ldots N_1 $$, while the traced subsystem has the indices $$ N_1 + 1,\ldots N_1 + N_2 $$. 

Computing the matrix $$ \mathcal{C} $$ is then as simple as reshaping the state vector $$ \ket{\Psi} $$ into a matrix of the appropriate size. This works out because the indices are all continuously distributed, with no gaps. Such a reshape operation is often either present in the standard library of high-level languages or available in popular packages. For example, the _Numpy_ library of Python provides a `numpy.reshape` function that does this exact operation.

We now write down the algorithm for this simplified scenario in more detail:
```
import numpy as np

### total number of qubits in the problem is N ###
### subsystem being traced over has m qubits ###
### these are assumed to be defined ###

# get spectrum
eigvals, eigvecs = eigen(hamiltonian)

# get groundstate
gstate = eigvecs[:, 0]

# define the subsystem being traced over
tracedIndices = range(m)

# the untraced system is the obviously the remaining indices
nonTracedIndices = range(m, N)

# reshape the gstate into the C-tensor of size (2^m, 2^(N-m))
C_matrix = np.reshape(gstate, (2**m, 2**(N-m))) 

# finally obtain the RDM using the expression mentioned above
rho_subsystem = C_matrix * C_matrix.H
```

This is enough to obtain the RDM for the simplified case of continuous subsystems.
