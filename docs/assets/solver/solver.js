import { loadPyodide } from "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.mjs";

const pyodide = await loadPyodide();

await pyodide.loadPackage(["numpy", "matplotlib"]);

async function runSolver(potential, xmin, xmax, deltax) {
  // Fetch Python file
  const response = await fetch("/assets/solver/solver.py");
  const code = await response.text();

  // Write into Pyodide FS
  pyodide.FS.writeFile("solver.py", code);

  // Run it (defines functions)
  pyodide.runPython("import solver");

  // Call function
  const plot = pyodide.runPython(`
	  solver.stateVisualiser("${potential}", xlims=(${xmin}, ${xmax}), deltax=${deltax})
	  `)
  document.getElementById("plot").innerHTML = plot
}

export { runSolver };
