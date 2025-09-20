---
title: Things I’ve Built
permalink: /toys/
---

### Fermions.jl
[**Fermions.jl**](https://github.com/abhirup-m/Fermions.jl) is a toolkit for designing and analysing second-quantised many-particle Hamiltonians of electrons, potentially interacting with each other. The main point in designing this library is to abstract away the detailed task of writing matrices for many-body Hamiltonians and operators (for correlations functions) with large Hilbert spaces; all operators (including Hamiltonians) can be specified using predefined symbols, and the library then provides functions for diagonalising such Hamiltonians and computing observables within the states.

These are some of the useful features of this toolkit:
- High-level of freedom in constructing fermionic Hamiltonians. All Hamiltonians that can be represented as a tensor product of 2-dimensional fermionic Fock-space operators can be modelled using fermions.jl. This covers all purely-electronic Hamiltonians, for example.
- Uses optimised algorithms that make use of symmetries of the problem.
- Provides a wide range of inbuilt functions for calculating various interesting quantities. The ability to construct any general correlation function by using fermionic operators further extends the range of possibilities.
- Provides an iterative diagonalization function that is useful to working with systems of larger sizes.

### InScight-Magazine.github.io
[**InScight-Magazine.github.io**](https://github.com/InScight-Magazine/InScight-Magazine.github.io) is a static website that provides an online interface to _InScight_, the IISER Kolkata science magazine.

### InScight Magazine Print Templates
[**InScight Magazine Print Templates**](https://github.com/InScight-Magazine/Print-Templates.git) is a set of template files written in **Typst** for generating a consistent polished magazine. I use it for generating PDFs of the IISER Kolkata science magazine InScight.

### Crosswords.jl
[**Crosswords.jl**](https://github.com/abhirup-m/Crosswords.jl) is a crossword generator written in Julia. It accepts an input file which contains the list of words to be put on the crossword and some other requirements for the crossword (size etc), and tries to obtain a compatible arrangement of words on a grid that satisfies all requirements. If such an arrangement is found, it spits out an output file with sufficient details to reconstruct the grid using a suitable parser.

### Backup Manager
[**Backup Manager**](https://github.com/abhirup-m/Backup-Manager.git) is a very simple python script for backing up dotfiles and other configuration files. Specify full paths of files that you want backed up in sources.json, and run backupManager.py; it copies these folders into a backup folder created within the repository. Also works for system files (such as pacman.conf, doas.conf, etc), as long as you specify the paths properly. Additionally, creates list of gtk themes, icon themes and fonts stored in specified folders (~/.themes, ~/.icons etc). Backs up conda environment, if path to conda binary is provided.

### Research Profile Constructor
[**Research Profile Constructor**](https://github.com/abhirup-m/Research-Profile.git) is a set of **typst** source files and associated resources for generating various professional documents related to my research profile, including cover letters, CVs, research statements, and publication lists. The point of using typst and keeping everything together is to ensure all files have a uniform style and design. The documents linked at various places on this website ([research statement](/assets/documents/researchStatement_AbhirupMukherjee.pdf), [Cv](/assets/documents/CurrVitae_AbhirupMukherjee.pdf) and [publications list](/assets/documents/publications_AbhirupMukherjee.pdf)) have been generated using this template.
