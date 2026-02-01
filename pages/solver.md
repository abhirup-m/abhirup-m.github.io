---
title: Seeing the Schrödinger Equation	
permalink: /solver/
---

<div class="potential-box"><label>Potential V(x): </label><input
  type="text"
  id="potential"
  placeholder="Functional form of the potential. Eg., x**2, sin(x), abs(x), etc"
/>
</div>
<div class="potential-box"><span><label>Left edge: </label><input
  type="number"
  value="-10"
  id="xlimMin"
  placeholder="Position of left boundary of the system."
/></span>
<span><label>Right edge: </label><input
  type="number"
  value="10"
  id="xlimMax"
  placeholder="Position of right boundary of the system."
/></span>
</div>

<button type="button" id="run" class="apply-potential">SOLVE FOR GROUND STATE</button>

<div id="plot"></div>

<script type="module">
import { runSolver } from "/assets/solver/solver.js";

document.getElementById("run").onclick = async () => {
  const potential = document.getElementById("potential").value;
  const xmin = document.getElementById("xlimMin").value;
  const xmax = document.getElementById("xlimMax").value;
  runSolver(potential, xmin, xmax, (xmax - xmin)/1000);
};
</script>
