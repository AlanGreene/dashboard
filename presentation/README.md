# Tekton Dashboard Maintainer Onboarding Presentation

This directory contains a Slidev presentation for onboarding new maintainers to the Tekton Dashboard project.

## Running the Presentation

### Prerequisites

Install Slidev globally or use npx:

```bash
npm install -g @slidev/cli
```

### Start the Presentation

From the `presentation` directory:

```bash
cd presentation
npx @slidev/cli slides.md
```

Or from the project root:

```bash
npx @slidev/cli presentation/slides.md
```

The presentation will open in your browser at `http://localhost:3030/`

### Navigation

- Use arrow keys or click to navigate between slides
- Press `f` for fullscreen
- Press `o` for overview mode
- Press `d` for dark mode toggle

### Export to PDF

```bash
cd presentation
npx @slidev/cli export slides.md --format pdf
```

## Content Overview

The presentation covers:

1. **Welcome** - Introduction to the project
2. **Project Overview** - Architecture, tech stack, and structure
3. **Governance & Process** - Team structure, PR workflow, and standards
4. **Getting Started** - Development setup and maintainer responsibilities
