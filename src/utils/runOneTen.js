// src/utils/runOneTen.js
let pyodideReadyPromise;

export async function initializePyodide() {
  if (!pyodideReadyPromise) {
    pyodideReadyPromise = (async () => {
      const pyodide = await loadPyodide();
      // Mount the workflow directory into Pyodide's virtual FS
      pyodide.FS.mkdir('/workflow');
      pyodide.FS.mkdir('/examples');

      // Load core Python files as strings (via import.meta.glob or bundler)
      const modules = import.meta.glob('../../workflow/**/*.py', { eager: true, as: 'raw' });
      for (const [path, code] of Object.entries(modules)) {
        const filename = path.split('/').pop();
        const dir = path.includes('step3') ? '/workflow/step3_run_12_dimensions/' : '/workflow/';
        pyodide.FS.writeFile(dir + filename, code);
      }

      // Install minimal deps
      await pyodide.loadPackage(['yaml']);
      return pyodide;
    })();
  }
  return pyodideReadyPromise;
}

export async function generateChronicle(inputs) {
  const pyodide = await initializePyodide();

  // Inject input as JSON
  pyodide.globals.set('INPUT_JSON', JSON.stringify(inputs));

  // Execute full pipeline in-browser
  const result = pyodide.runPython(`
from js import INPUT_JSON
import json, sys
sys.path.append('/workflow')

# Simulate step-by-step execution
input_data = json.loads(INPUT_JSON)

# Step 1–2: derive N and keys
temporal = input_data['temporal']
power = input_data['power']
capacity = input_data['capacity']
weight = input_data['weight']
N = input_data.get('n', (temporal + power) % 1000 or 247)

# Mock simplified version of steps 3–5 for demo
dimensions = {
    'chromatic': {'hue': (power * 3.6) % 360},
    'prime': {'value': N if all(N % i for i in range(2, int(N**0.5)+1)) else None},
    'sonic': {'freq_hz': 220 + (N % 100)}
}

# Dummy truth node: if chromatic hue ≈ sonic freq mod 360
truth_nodes = []
fidelity = 1
if abs(dimensions['chromatic']['hue'] - (dimensions['sonic']['freq_hz'] % 360)) < 5:
    truth_nodes.append("Chromatic-Sonic Resonance")
    fidelity = 7

narrative = f"At {temporal} minutes past midnight, under a {power}% moon,\\nthe system whispered: '{N} is the key that unlocks silence.'"

{
    "title": f"Whisper from Convergence {N}",
    "subtitle": f"Born at {temporal}:00, weighing {weight} MB",
    "narrative": narrative,
    "fidelity_score": fidelity,
    "convergence_points": truth_nodes,
    "checksum": hex(hash(narrative))[-8:]
}
  `);

  return result.toJs();
}
