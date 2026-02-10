# Dockerfile
FROM python:3.11-slim

LABEL org.opencontainers.image.title="One Ten Protocol"
LABEL org.opencontainers.image.description="Deterministic narrative synthesis from metadata"
LABEL maintainer="chronicle@trizist.ai"

WORKDIR /app

# Install minimal deps
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy source
COPY . .

# Install Python requirements (if any)
RUN pip install --no-cache-dir pyyaml jsonschema

# Expose volume for examples/output
VOLUME ["/app/examples", "/app/output"]

# Default command: run RUN 247 example
CMD ["python", "workflow/step1_identify_keys.py", \
     "--temporal", "362", \
     "--power", "63", \
     "--capacity", "128", \
     "--weight", "2.4", \
     "--output", "/app/output/keys.json"] && \
    python workflow/step2_select_n.py --seed 247 --output /app/output/n.json && \
    python workflow/step3_run_12_dimensions/run_all.py --n 247 --output /app/output/dimensions.json && \
    python workflow/step4_locate_truth_nodes.py --input /app/output/dimensions.json --output /app/output/nodes.json && \
    python workflow/step5_compose_chronicle.py --nodes /app/output/nodes.json --output /app/output/chronicle.md && \
    echo "✅ Chronicle generated at /app/output/chronicle.md"
