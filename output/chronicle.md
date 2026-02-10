docker build -t one-ten .
docker run --rm -v $(pwd)/output:/app/output one-ten
