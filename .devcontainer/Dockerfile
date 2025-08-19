FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Install basics
RUN apt-get update && apt-get install -y curl git build-essential python3 python3-pip

# Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Docker inside container (optional, for nested builds)
RUN apt-get install -y docker.io docker-compose

WORKDIR /workspace
