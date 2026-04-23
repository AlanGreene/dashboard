---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Tekton Dashboard Maintainer Onboarding
  Welcome to the Tekton Dashboard project!
drawings:
  persist: false
transition: slide-left
title: Tekton Dashboard Maintainer Onboarding
mdc: true
---

# Welcome to Tekton Dashboard! 🎉

### Maintainer Onboarding Guide

<div class="absolute top-10 right-10 w-48">
  <img src="https://tekton.dev/images/tekton-horizontal-color.png" alt="Tekton Logo" class="w-full" />
</div>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Let's get started <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: two-cols
---

# 🏗️ Project Overview

<div class="text-sm">

**What is it?**
- Web-based UI for Tekton Pipelines & Triggers
- Real-time monitoring of PipelineRuns & TaskRuns
- Resource management across namespaces

**Tech Stack**
- **Frontend**: React + Vite + Carbon Design
- **Backend**: Go + Kubernetes API
- **Testing**: Vitest, Cypress, Go tests

**Key Features**
- 📊 Real-time logs & status
- 🏷️ Label-based filtering
- 📦 Git resource imports
- 🔌 Extension system

</div>

::right::

<div class="pl-8 text-sm">

**Project Structure**
```
dashboard/
├── src/              # React frontend
├── cmd/              # Go backend
├── packages/         # Shared components
├── config/           # K8s manifests
├── docs/             # Documentation
└── tekton/           # CI/CD pipelines
```

**Quick Links**
- 📖 [Dev Guide](./DEVELOPMENT.md)
- 🗺️ [Roadmap](./roadmap.md)
- 🤝 [Contributing](./CONTRIBUTING.md)
- 💬 Slack: `#dashboard`

</div>

---
layout: two-cols
---

# 👥 Governance & Process

<div class="text-sm">

**Current Approvers**
- alangreene
- briangleeson  
- LyndseyBu

**Decision Making**
- Proposals via GitHub issues
- Discussion in #dashboard Slack
- Consensus-based approval
- OWNERS file controls PR merges

**PR Workflow**
1. Fork & create feature branch
2. Make changes + tests
3. Submit PR with clear description
4. Address review feedback
5. Auto-merge on approval (via Prow)

</div>

::right::

<div class="pl-8 text-sm">

**Code Standards**
- ✅ 90% test coverage required
- 🎨 ESLint + Prettier for JS
- 🔍 golangci-lint for Go
- 📝 Conventional commit messages

**Release Process**
- Regular releases tracked in `releases.md`
- Semantic versioning
- Automated via Tekton pipelines
- Coordinated with Pipelines/Triggers releases

**Community**
- 📧 tekton-dev@googlegroups.com
- 💬 Slack: tektoncd.slack.com
- 🤝 Code of Conduct enforced

</div>

---
layout: two-cols
---

# 🚀 Getting Started

<div class="text-sm">

**Development Setup**
```bash
# Prerequisites
- Go (see go.mod)
- Node.js (see .nvmrc)
- kubectl + kind
- ko v0.15.x

# Quick start
npm ci
npm start  # Frontend dev server
kubectl port-forward svc/tekton-dashboard 9097:9097
```

**Testing**
```bash
# Frontend
npm test              # Unit tests
npm run e2e           # E2E tests
npm run lint          # Linting

# Backend  
go test -v ./...      # Unit tests
```

</div>

::right::

<div class="pl-8 text-sm">

**Key Responsibilities**
- 🔍 **Code Review**: PRs, design proposals
- 🐛 **Issue Triage**: Label, prioritize, guide
- 📦 **Releases**: Coordinate & validate
- 📚 **Documentation**: Keep up-to-date
- 🌍 **Community**: Support users, mentoring

**Useful Commands**
```bash
# Local cluster
./scripts/prepare-kind-cluster create

# Build & deploy
npm run build
ko apply -f config/

# Storybook
npm run storybook
```

</div>

---
layout: center
class: text-center
---

# 🎯 Next Steps

<div class="text-left inline-block">

1. **Review open issues & PRs**
   Get familiar with current work and discussions

2. **Join #dashboard on Slack**
   Connect with the team and community

3. **Attend community meetings**
   Participate in planning and decision-making

4. **Pick a "good first issue" to review**
   Start contributing to code reviews

</div>

<div class="pt-8 text-sm opacity-70">
Questions? Reach out on Slack or tekton-dev@googlegroups.com
</div>
