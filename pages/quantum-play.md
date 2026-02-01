---
title: Seeing the Schrödinger Equation	
permalink: /quantum-play/
---

<div><input id="potential" value="x**2"><button id="run">Go!</button></div>

<div><svg id="plot" width="800" height="800"></svg></div>

<script type="module">
import { runSolver } from "/assets/main.js";

document.getElementById("run").onclick = async () => {
  const potential = document.getElementById("potential").value;
  runSolver(potential);
};
</script>
