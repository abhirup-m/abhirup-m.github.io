import numpy as np
from math import *
from matplotlib import pyplot as plt
from cycler import cycler
import matplotlib as mpl

mpl.rcParams.update({
    # --- Figure ---
    "figure.facecolor": "#1d232b",   # bar-color
    "figure.edgecolor": "#1d232b",

    # --- Axes ---
    "axes.facecolor": "#1d232b",
    "axes.edgecolor": "#3b3b3b",
    "axes.labelcolor": "#d9e1e9",
    "axes.linewidth": 0.8,

    # --- Ticks ---
    "xtick.color": "#9aa4ad",
    "ytick.color": "#9aa4ad",
    "xtick.major.size": 4,
    "ytick.major.size": 4,
    "xtick.minor.size": 0,
    "ytick.minor.size": 0,

    # --- Text ---
    "text.color": "#d9e1e9",
    "axes.titlecolor": "#f5cb5c",   # h1 accent
    "font.size": 12,
    "axes.labelsize": 14,

    # --- Lines ---
    "lines.linewidth": 2.0,
    "lines.solid_capstyle": "round",

    # --- Legend ---
    "legend.frameon": False,
    "legend.fontsize": 9,

    # --- Saving / SVG ---
    "savefig.facecolor": "#2d333b",
    "savefig.edgecolor": "#2d333b",
    "svg.fonttype": "none",  # keep text selectable
})

mpl.rcParams["axes.prop_cycle"] = cycler(color=[
    "#E5AA70",  # warm amber (link color)
    "#5fa8d3",  # muted blue
    "#f28482",  # soft red / coral
    "#9ef01a",  # code green
    "#f5cb5c",  # gold
    "#adb5bd",  # neutral gray
])
import io
import base64

def hamiltonian(
        V,
        xlims,
        deltax,
        periodic=False
        ):
    Vx = np.array([V(x) for x in np.arange(min(xlims), max(xlims), deltax)])
    hamiltonian = np.zeros((len(Vx), len(Vx)))
    np.fill_diagonal(hamiltonian, Vx + 1/deltax**2)
    for i in range(len(Vx)-1):
        hamiltonian[i, i+1] = -0.5/deltax**2
        hamiltonian[i+1, i] = -0.5/deltax**2
    E, X = np.linalg.eigh(hamiltonian)
    return E, X, Vx


def stateVisualiser(
        potential="x**2",
        xlims=(-10, 10),
        deltax = 0.1
        ):
    V = lambda x: eval(str(potential))
    E, X, Vx = hamiltonian(V, xlims, deltax)
    gstate = X[:, 0]
    gstatePrime = (gstate[1:] - gstate[:-1])/deltax
    plt.plot(np.arange(min(xlims), max(xlims), deltax), np.abs(gstate**2), label="$\Psi(x)$")
    plt.plot(np.arange(min(xlims), max(xlims), deltax)[:-1], np.abs(gstatePrime) * max(np.abs(gstate**2)) / max(gstatePrime), ls=":", lw=2, label="$|d\Psi/dx|$")
    plt.plot(np.arange(min(xlims), max(xlims), deltax), Vx * max(np.abs(gstate**2)) / max(Vx), ls="--", lw=2, label="$V(x)$")
    plt.legend()
    plt.xlabel("x")
    plt.ylabel("$\Psi(x)$")
    buf = io.StringIO()
    plt.savefig(buf, format='svg', bbox_inches='tight')
    plt.close()
    return buf.getvalue()
