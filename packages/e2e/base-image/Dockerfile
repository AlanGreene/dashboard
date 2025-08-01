# Copyright 2024-2025 The Tekton Authors
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#     http://www.apache.org/licenses/LICENSE-2.0
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# The exact version must be used for these, no wildcards or shorthands are supported.
# https://www.ubuntuupdates.org/package/google_chrome/stable/main/base/google-chrome-stable
# https://nodejs.org/en/about/previous-releases

ARG CHROME_VERSION='138.0.7204.49-1'
ARG NODE_VERSION='20.19.3'

FROM cypress/factory@sha256:8f91000b67b4f0b1305124d37a5e3d6c91e42dca304a590e58a7d18d3181a005

LABEL maintainer "Tekton Authors <tekton-dev@googlegroups.com>"
LABEL org.opencontainers.image.source=https://github.com/tektoncd/dashboard
LABEL org.opencontainers.image.description="Base image for Tekton Dashboard E2E tests"
LABEL org.opencontainers.image.licenses=Apache-2.0

RUN apt-get update && apt-get install -y apt-transport-https ca-certificates curl gpg &&\
    mkdir -p /etc/apt/keyrings &&\
    curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.29/deb/Release.key | gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg &&\
    echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.29/deb/ /' | tee /etc/apt/sources.list.d/kubernetes.list &&\
    apt-get update && apt-get install -y kubectl &&\
    rm -rf /var/lib/apt/lists/*
USER node
WORKDIR /home/node
ENV CI=true
ENV NO_COLOR=true
