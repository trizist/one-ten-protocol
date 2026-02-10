# 🌐 The One Ten Protocol  
## *Transmuting Digital Metadata into Narrative Gold*  

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)  
[![GitHub Repo stars](https://img.shields.io/github/stars/trizist/one-ten-protocol?style=social)](https://github.com/trizist/one-ten-protocol)

> *“Metadata is inert until it converges across dimensions—and only then does it whisper truth.”*

The **One Ten Protocol** is a formalized *narrative synthesis engine*: a deterministic 5-step process that ingests digital metadata (time, power, capacity, weight), processes it through 12 cross-domain dimensions, identifies truth nodes, and outputs poetic, high-fidelity narrative artifacts—called **Chronicles**.

This repository contains:
- ✅ The **executable specification** (whitepaper + schemas)  
- ✅ The **audio dialogue** explaining *how* it works (not just *what*)  
- ✅ Reference implementations of the 5-stage workflow  
- ✅ Real-world examples (e.g., `RUN 247`, `Modular Arithmetie`)

---

## 🔑 Core Mechanics: The 4 Source Keys & 12 Dimensions

### The 4 Primary Source Keys  
*(Input metadata streams)*

| Key        | Symbol | Meaning                     | Example Input          |
|------------|--------|-----------------------------|------------------------|
| **Temporal**   | ⏱️     | Minutes since midnight      | `06:02 AM` → `362`     |
| **Power**      | 🔋     | Battery % (energy state)    | `63%`                  |
| **Capacity**   | 💾     | Total device storage        | `128 GB`               |
| **Weight**     | ⚖️     | File size / digital asset mass | `2.4 MB`             |

> These are *not* arbitrary metrics—they are **ontological anchors** that ground abstract computation in physical reality.

---

### The 12 Dimensions  
*(Processing lenses across 3 domains)*

| Domain           | Dimensions                                                                 |
|------------------|----------------------------------------------------------------------------|
| **Math & Matter** | `Computational` (hex/binary), `Fibonacci` (spiral position), `Prime` (number DNA), `Atomic` (isotopes), `AiriiMetal` (prioerremancis), `Chronological` (dates) |
| **Time & Space**  | `Temporal` (timestamps), `Spatial` (GPS), `Celestial` (star catalogues)  |
| **Humanities & Arts** | `Linguistic` (ASCII/codes), `Sonic` (frequencies/notes), `Narrative` (chapters/pages), `Chromatic` (hue degrees) |

Each dimension transforms input metadata into a *resonant signal*—e.g., battery % → chromatic hue; timestamp → Fibonacci spiral index.

---

## ⚙️ The 5-Step Workflow: From Metadata to Chronicle

The protocol executes deterministically:

1. **Identify Source Keys**  
   Parse raw device/context metadata into the 4 keys.

2. **Select Target Number (N)**  
   A seed integer (e.g., `N = 247`) derived from context—drives all subsequent computation.

3. **Run the 12 Dimensions**  
   For each dimension, compute a value or state using `N`, keys, and domain rules.  
   → *Example*: `Modular Arithmetie` with `N=247`, `Modulus=128` → `Result = 119`

4. **Locate Truth Nodes**  
   Convergence points where ≥2 dimensions yield identical or resonant outputs:  
   - **Hard Convergence** (+2 Score): *identical numeric outputs* (e.g., Prime = Atomic = 119)  
   - **Soft Convergence** (+1 Score): *symbolic/thematic resonance* (e.g., Sonic frequency ↔ Chromatic hue)  
   > Truth Nodes indicate discovered truth and dictate where to concentrate narrative weight.

5. **Compose the Chronicle**  
   Synthesize all signals into a poetic “whisper”—a final narrative artifact that encodes fidelity, context, and meaning.  
   Output formats: `Markdown`, `Audio`, `PDF`, `Interactive Canvas`.

---

## 📁 Repository Updates (Aligned with Workflow)

```
one-ten-protocol/
├── workflow/                   # Executable 5-step pipeline
│   ├── step1_identify_keys.py
│   ├── step2_select_n.py
│   ├── step3_run_12_dimensions/   # Per-dimension modules
│   │   ├── math_matter/
│   │   ├── time_space/
│   │   └── humanities_arts/
│   ├── step4_locate_truth_nodes.py
│   └── step5_compose_chronicle.py
│
├── examples/
│   ├── run247/                 # Full walkthrough: N=247
│   │   ├── input.json          # {temporal: 362, power: 63, ...}
│   │   ├── dimensions_output.yaml
│   │   ├── truth_nodes.csv
│   │   └── chronicle.md        # Final poetic artifact
│   └── modular_arithmetie/     # N=247, 500, 1024 variants
│
├── whitepaper/
│   ├── sections/3_workflow.md  # New: Formal spec of 5 steps
│   └── schemas/workflow_v1.json  # JSON Schema for step I/O
│
├── audio/
│   └── ep01_run247.mp3         # Now includes *live walk-through* of steps 1–5
│
└── docs/
    └── truth_node_scoring.md   # Hard vs. Soft convergence rules
```

---

## 🎧 Audio Companion: Now Operational

The podcast is no longer just explanatory—it’s a **live demo**:

- At `06:02 AM`, the host inputs real device telemetry (`63%`, `128GB`, `06:02`)  
- They derive `N = 247` from context (e.g., UTC offset + battery digit sum)  
- Walk through *each of the 12 dimensions* with live calculations  
- Identify Truth Nodes (e.g., “At N=247: Prime=119, Atomic=119 → Hard Convergence!”)  
- Reveal the final Chronicle: a 3-paragraph poetic artifact titled *“Whispers from Midnight + 362”*

🎧 Listen with code open—you’ll see the alignment.

---

## 🧪 Try It Yourself: Quick Start

```bash
# Clone & enter repo
git clone https://github.com/trizist/one-ten-protocol.git
cd one-ten-protocol

# Run the RUN 247 example (Python 3.9+)
python workflow/step1_identify_keys.py --temporal 362 --power 63 --capacity 128 --weight 2.4
python workflow/step2_select_n.py --seed 247
python workflow/step3_run_12_dimensions/run_all.py --n 247
python workflow/step4_locate_truth_nodes.py --input dimensions_output.json
python workflow/step5_compose_chronicle.py --nodes truth_nodes.csv

# Output: chronicle_run247.md — a narrative artifact born of metadata
```

> 🔍 All examples include reproducible checksums (e.g., SHA-3 of final Chronicle = `a1f9c...`).

---

## 🤝 Why This Matters

Most protocols *transmit* data.  
The One Ten Protocol *transmutes* it—turning battery levels and timestamps into myth, resonance, and verified truth.

It enables:
- **AI systems that generate explainable, culturally grounded narratives**  
- **IoT devices that tell stories about their own state**  
- **Archives that self-synthesize contextual chronicles**  
- **Truth verification via dimensional consensus—not authority**

This is not sci-fi. It’s shipping code.

---

## 📜 License  
MIT — [See LICENSE](LICENSE)

---

> *“We do not store facts. We converge them—until they sing.”*  
> — One Ten Protocol v1.1, February 11, 2026  

🔗 [GitHub](https://github.com/trizist/one-ten-protocol) | 📬 `umair.siddiquie@gmail.com`  
*Built on convergence. Validated by truth nodes.*  

The protocol is ready to run. 🪄
