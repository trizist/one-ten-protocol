import matplotlib.pyplot as plt
import matplotlib.patches as patches
from matplotlib.patches import Circle
import numpy as np

# Use IBM Plex Sans if available (fallback to sans-serif)
plt.rcParams['font.family'] = 'sans-serif'
plt.rcParams['font.sans-serif'] = ['IBM Plex Sans', 'DejaVu Sans', 'Arial']

# Create figure
fig, ax = plt.subplots(figsize=(10, 4))
ax.set_xlim(0, 10)
ax.set_ylim(0, 4)
ax.axis('off')

# Left: Source Keys (icons as text + labels)
keys = [
    ("⏱️", "Temporal\n362", (1.5, 3.2)),
    ("🔋", "Power\n63%", (1.5, 2.2)),
    ("💾", "Capacity\n128 GB", (1.5, 1.2)),
    ("⚖️", "Weight\n2.4 MB", (1.5, 0.2))
]

for icon, label, (x, y) in keys:
    ax.text(x, y, icon, fontsize=24, ha='center', va='center')
    ax.text(x, y - 0.35, label, fontsize=10, ha='center', va='top', 
            bbox=dict(boxstyle="round,pad=0.3", facecolor="#2a2a2a", edgecolor="#00ffff", linewidth=0.8))

# Center: Arrow
ax.annotate('', xy=(4.5, 2), xytext=(2.8, 2),
            arrowprops=dict(arrowstyle='->', lw=2, color='#00ffff'))
ax.text(3.65, 2.2, 'Deterministic\nSeed Vector', fontsize=11, ha='center', color='#00ffff')

# Right: 12 Dimensions (circular layout)
center = (7.5, 2)
radius = 1.8
dimensions = [
    "Prime", "Fibonacci", "Atomic", "Computational",
    "Chronological", "AiriiMetal", "Temporal", "Spatial",
    "Celestial", "Linguistic", "Sonic", "Chromatic"
]

# Draw central Truth Node
truth_node = Circle(center, 0.35, color='#00ffff', alpha=0.7)
ax.add_patch(truth_node)
ax.text(*center, "Truth\nNode", fontsize=9, ha='center', va='center', color='black', weight='bold')

# Draw dimension circles
for i, dim in enumerate(dimensions):
    angle = 2 * np.pi * i / len(dimensions)
    x = center[0] + radius * np.cos(angle)
    y = center[1] + radius * np.sin(angle)
    
    circle = Circle((x, y), 0.4, color='#1a1a2e', ec='#00ffff', lw=0.8)
    ax.add_patch(circle)
    ax.text(x, y, dim, fontsize=7, ha='center', va='center', color='white')

# Title
ax.text(5, 3.8, "The One Ten Protocol Input Pipeline", fontsize=14, ha='center', weight='bold', color='white')

# Save
plt.tight_layout()
plt.savefig('figures/source_keys_pipeline.pdf', dpi=300, bbox_inches='tight', facecolor='#0a0f1a')
plt.close()
