# 🤝 Contributing to the One Ten Protocol

Thank you for engaging with a protocol that turns metadata into meaning. Contributions should honor both **computational rigor** and **narrative integrity**.

## 🧭 Contribution Types

We welcome:

| Type | Description | Example |
|------|-------------|--------|
| **New Dimensions** | Extend the 12-dimensional lens system into new domains | `Economic`, `Ecological`, `Quantum` |
| **Workflow Enhancements** | Improve steps 1–5 (e.g., faster convergence detection) | Optimized truth-node scoring |
| **Chronicle Templates** | Poetic structures for step 5 output | Haiku, epistolary, mythic |
| **Audio Narratives** | Multilingual or thematic podcast episodes | Urdu/English bilingual run |
| **Validation Tools** | CLI/UI to verify Chronicle fidelity | Truth-node visualizer |

> ⚠️ **Do not** submit changes that break determinism. The same input **must** yield the same Chronicle.

---

## 🛠️ Development Workflow

1. **Fork** the repo  
2. Create a branch: `feat/new-dimension-ecological` or `fix/truth-node-scoring`
3. Implement within the 5-step structure:
   - New dimensions → `workflow/step3_run_12_dimensions/humanities_arts/ecological.py`
   - Chronicle templates → `templates/chronicle_mythic.md`
4. Add a **reproducible example** in `/examples/your_name/`
5. Ensure all outputs include a **SHA-3 checksum** for verification
6. Submit a PR with:
   - Clear mapping to one or more Source Keys
   - Explanation of how it affects Truth Node convergence
   - Audio or text sample of resulting Chronicle

---

## 📜 Code & Style Guidelines

- **Python**: Use type hints, no external deps unless essential
- **Narratives**: Must be generative—not static copy
- **Truth Nodes**: Hard convergence = numeric identity; Soft = documented symbolic link
- **Testing**: Every new dimension must include a test vector (input → expected output)

Example test vector:
```json
{
  "input": { "n": 247, "power": 63 },
  "dimension": "chromatic",
  "expected_output": { "hue_degrees": 227, "name": "Indigo Whisper" }
}
```

---

## 🌐 Philosophy Reminder

> “A contribution isn’t valid because it works—it’s valid because it *converges*.”

Ask:  
- Does this deepen dimensional resonance?  
- Does it make truth nodes *more discoverable*?  
- Does the resulting Chronicle feel *inevitable*, not random?

If yes—you’re aligned.

— The Convergence Collective
