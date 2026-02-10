#!/usr/bin/env python3
"""
One Ten Protocol CLI
Generates Chronicles + MP3 sonifications from metadata
"""

import os
import sys
import json
import hashlib
import argparse
from pathlib import Path

# Add workflow to path
sys.path.insert(0, str(Path(__file__).parent.parent / "workflow"))

from step1_identify_keys import identify_keys
from step2_select_n import select_n
from step3_run_12_dimensions.run_all import run_all_dimensions
from step4_locate_truth_nodes import locate_truth_nodes
from step5_compose_chronicle import compose_chronicle

# Optional: Only import audio if available
try:
    from pydub import AudioSegment
    from pydub.generators import Sine, WhiteNoise
    HAS_AUDIO = True
except ImportError:
    HAS_AUDIO = False
    print("Warning: pydub not installed. MP3 output disabled.", file=sys.stderr)

def sonify_to_mp3(chronicle_data, output_path):
    """Generate MP3 from Chronicle using pydub"""
    if not HAS_AUDIO:
        return
    
    base_freq = 220
    harmonics = [base_freq, base_freq*1.5, base_freq*2, base_freq*2.5]
    duration_ms = 4000
    
    # Build chord
    chord = AudioSegment.silent(duration=duration_ms)
    active_voices = max(1, min(4, int(chronicle_data['fidelity_score'] // 2.5)))
    
    for i in range(active_voices):
        tone = Sine(harmonics[i]).to_audio_segment(duration=duration_ms)
        tone = tone - 10  # Reduce volume
        chord = chord.overlay(tone, position=0)
    
    # Add whisper noise if narrative is long    if len(chronicle_data.get('narrative', '')) > 50:
        noise = WhiteNoise().to_audio_segment(duration=duration_ms)
        noise = noise - 30  # Very quiet
        chord = chord.overlay(noise, position=0)
    
    # Fade out
    chord = chord.fade_out(1000)
    
    # Export
    chord.export(output_path, format="mp3", bitrate="128k")
    print(f"🎧 Sonification saved: {output_path}")

def main():
    parser = argparse.ArgumentParser(description="Generate a One Ten Chronicle")
    parser.add_argument("--temporal", type=int, required=True, help="Minutes since midnight (e.g., 362 for 06:02)")
    parser.add_argument("--power", type=int, required=True, help="Battery % (0-100)")
    parser.add_argument("--capacity", type=int, required=True, help="Storage in GB")
    parser.add_argument("--weight", type=float, required=True, help="File size in MB")
    parser.add_argument("--n", type=int, help="Optional target number (default: derived)")
    parser.add_argument("--output-dir", default="output", help="Output directory")
    
    args = parser.parse_args()
    
    # Create output dir
    out_dir = Path(args.output_dir)
    out_dir.mkdir(exist_ok=True)
    
    # Step 1–2
    keys = identify_keys(args.temporal, args.power, args.capacity, args.weight)
    N = args.n or select_n(keys)
    
    # Step 3–5
    dims = run_all_dimensions(N, keys)
    nodes = locate_truth_nodes(dims)
    chronicle = compose_chronicle(N, keys, nodes, dims)
    
    # Save structured data
    json_path = out_dir / "chronicle.json"
    with open(json_path, 'w') as f:
        json.dump(chronicle, f, indent=2)
    
    # Save narrative
    md_path = out_dir / "chronicle.md"
    with open(md_path, 'w') as f:
        f.write(f"# {chronicle['title']}\n\n")
        f.write(f"> {chronicle['subtitle']}\n\n")
        f.write(f"{chronicle['narrative']}\n\n")
        f.write(f"**Fidelity**: {chronicle['fidelity_score']}/10\n")
        f.write(f"**Checksum**: `{chronicle['checksum']}`\n")
        # Sonify
    mp3_path = out_dir / "chronicle.mp3"
    sonify_to_mp3(chronicle, mp3_path)
    
    print(f"✅ Chronicle generated in {out_dir}")
    print(f"📄 Narrative: {md_path}")
    print(f"🔊 Audio: {mp3_path}")

if __name__ == "__main__":
    main()
