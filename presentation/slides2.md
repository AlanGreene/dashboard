---
theme: default
title: "Tekton Dashboard — Contributor & maintainer onboarding"
titleTemplate: "%s"
highlighter: shiki
transition: slide-left
mdc: true
fonts:
  sans: "Inter"
  mono: "Fira Code"
layout: cover
background: '#0f172a'
---

<div class="flex flex-col items-center justify-center h-full gap-6 text-center">
  <img
    src="https://github.com/tektoncd/dashboard/raw/main/docs/tekton-dashboard-color.svg"
    alt="Tekton Dashboard logo"
    class="w-64 h-64"
  />
  <div>
    <!-- <h1 class="text-5xl font-bold text-white tracking-tight">Tekton Dashboard</h1> -->
    <p class="text-2xl text-blue-300- mt-2 font-light">Contributor &amp; maintainer onboarding</p>
  </div>
  <p class="text-slate-400 text-base mt-4">
    github.com/tektoncd/dashboard
  </p>
  <p class="text-slate-400 text-xs absolute bottom-0 right-8">
    April 2026
  </p>
</div>

<!--
Speaker notes:
- Set expectations: the slides provide a high-level orientation before the technical deep-dives.
-->

---
layout: image-right
image: https://github.com/tektoncd/dashboard/raw/main/docs/dashboard-ui.jpg
backgroundSize: '100% auto'
---

# What is Tekton Dashboard?

A general-purpose, **web-based UI** for Tekton Pipelines and Tekton Triggers resources.

It lets users manage and observe CI/CD workloads running on Kubernetes — without ever touching `kubectl`.

<br>

> Not a standalone product — it requires **Tekton Pipelines** (and optionally **Triggers**) to be installed in the cluster.

<br>

- 📖 &nbsp;[github.com/tektoncd/dashboard](https://github.com/tektoncd/dashboard)
- 📖 &nbsp;[tekton.dev/docs](https://tekton.dev/docs)

<!--
Speaker notes:
- The Dashboard is the UI layer on top of Tekton. It has no CI/CD logic of its own.
- The screenshot on the right is from the project's own README — it shows the PipelineRun details page with TaskRun statuses.
-->

---

# What does it do? 🔍

<div class="grid grid-cols-2 gap-5 mt-4 text-slate-800">

<div class="rounded-xl p-5 border-2 border-slate-700 bg-white">

### 📊 &nbsp;Observability

- Real-time status & log streaming for `PipelineRun` and `TaskRun`
- Filter resources by label
- View resource details and raw YAML

</div>

<div class="rounded-xl p-5 border-2 border-slate-700 bg-white">

### 🔭 &nbsp;Scoping

- Cluster-wide view **or** scope to a specific list of namespaces
- Supports multi-tenant workflows

</div>

<div class="rounded-xl p-5 border-2 border-slate-700 bg-white">

### 📥 &nbsp;Git Import

- Import Tekton resources directly from a Git repository

</div>

<div class="rounded-xl p-5 border-2 border-slate-700 bg-white">

### 🧩 &nbsp;Extensions

- Add custom resource types without forking the project

</div>

</div>

<style>
.slidev-layout code {
  background-color: #e2e8f0;
  color: #1e293b;
  padding: 0.1em 0.35em;
  border-radius: 0.25em;
}
</style>

<!--
Speaker notes:
- The "real-time logs" feature uses the Kubernetes log streaming API — worth mentioning since it affects the backend architecture.
- The extensions system is a key differentiator: operators can surface custom CRDs in the same UI without forking the dashboard. Show an example later.
- Label filtering is surprisingly powerful for large clusters with many concurrent runs.
-->

---
layout: two-cols
---

# Architecture & tech stack 🏗️

<div class="flex flex-col gap-3 mt-4 pr-6">

<div class="rounded-xl border-2 border-slate-700 bg-sky-100 p-4">
  <div class="font-bold text-sky-900 text-base mb-1">🌐 Browser — React SPA</div>
  <div class="text-sm text-slate-700">React · Carbon Design System · Storybook · Vite · SCSS</div>
</div>

<div class="flex justify-center text-slate-500 text-xl font-bold">↕ REST / WebSocket</div>

<div class="rounded-xl border-2 border-slate-700 bg-emerald-100 p-4">
  <div class="font-bold text-emerald-900 text-base mb-1">⚙️ Go backend — HTTP server</div>
  <div class="text-sm text-slate-700">Thin proxy · Auth handling · External logs</div>
</div>

<div class="flex justify-center text-slate-500 text-xl font-bold">↕ Kubernetes API</div>

<div class="rounded-xl border-2 border-slate-700 bg-violet-100 p-4">
  <div class="font-bold text-violet-900 text-base mb-1">☸️ Kubernetes cluster</div>
  <div class="text-sm text-slate-700">Tekton Pipelines CRDs · Tekton Triggers CRDs · Config</div>
</div>

</div>

::right::

<br><br>

### Frontend
JavaScript · SCSS, built with **Vite**

### Backend
**Go** — thin proxy, built with `ko`

### Tooling
- ESLint · Prettier
- golangci-lint
- `.nvmrc` for Node version pinning

<br>

> The backend is intentionally thin — the frontend is the heart of the codebase.

<style>
.slidev-layout code {
  background-color: #e2e8f0;
  color: #1e293b;
  padding: 0.1em 0.35em;
  border-radius: 0.25em;
}
</style>

<!--
Speaker notes:
- The backend mostly proxies requests to the Kubernetes API and handles auth concerns (e.g. read-only mode, auth headers).
- Carbon Design System provides accessible, consistent components out of the box.
- Storybook is used for component development and visual testing — useful to know when adding new UI components.
- Vite replaced an older webpack-based setup; be aware of this if reading older issues or PRs.
  - Vitest replaced Jest + enzyme for unit tests.
- Cypress E2E tests replace earlier Postman API tests.
- ko compiles the Go backend and pushes a container image without a traditional Dockerfile. It reads .ko.yaml for config.
  - this will be changing in the near future when we replace the current backend
-->

---

# Repository layout 📁

<br>

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

```
tektoncd/dashboard/
├── src/           # React frontend (components,
│                  # containers, utils, API calls)
├── packages/      # Shared frontend packages
├── cmd/dashboard/ # Go entrypoint
├── pkg/           # Go backend packages
└── config/        # Kubernetes manifests
                   # (RBAC, Deployments…)
```

</div>

<div>

```
├── docs/
│   └── dev/       # Dev setup, API reference,
│                  # installer docs
├── test/          # Integration & E2E tests
├── tekton/        # 🐱 Project's own CI pipelines
│                  # (dogfooding!)
└── .github/       # CI workflows and other repo config
```

</div>

</div>

<div class="mt-4 rounded-xl border-2 border-slate-700 bg-white p-4 text-sm text-slate-800">

<span class="text-xl">💡</span>&nbsp;<strong>Start here:</strong> <code>docs/dev/</code> has everything you need to get a local environment running. Make sure to review the pre-requisites.

</div>

<style>
.slidev-layout p code {
  background-color: #e2e8f0;
  color: #1e293b;
  padding: 0.1em 0.35em;
  border-radius: 0.25em;
}

:root {
  --slidev-code-background: var(--shiki-bg);
}
</style>

<!--
Speaker notes:
- The `tekton/` directory is a great example of dogfooding: the dashboard project uses Tekton to build and release itself. GitHub Actions is also used for nightly builds.
- `config/` contains all the Kubernetes manifests needed for installation — useful for understanding the RBAC model before making backend changes.
- The `packages/` directory holds reusable frontend modules; be careful about cross-package dependencies.
-->

---
layout: two-cols
---

# Roles & the contributor ladder 🪜

<div class="flex flex-col gap-2 mt-1 pr-6">

<div class="rounded-xl border-2 border-slate-300 bg-white p-3 text-slate-800">
  <span class="font-semibold">Contributor</span>
  <span class="text-slate-500 text-sm ml-2">— opens issues &amp; PRs</span>
</div>

<div class="flex justify-center text-slate-400 text-lg">↓</div>

<div class="rounded-xl border-2 border-blue-400 bg-blue-50 p-3 text-slate-800">
  <span class="font-semibold text-blue-900">Reviewer</span>
  <span class="text-slate-600 text-sm ml-2">— can <code>/lgtm</code> PRs</span>
</div>

<div class="flex justify-center text-slate-400 text-lg">↓</div>

<div class="rounded-xl border-2 border-emerald-500 bg-emerald-50 p-3 text-slate-800">
  <span class="font-semibold text-emerald-900">Maintainer</span>
  <span class="text-slate-600 text-sm ml-2">— can <code>/approve</code> to merge</span>
</div>

<div class="flex justify-center text-slate-400 text-lg">↓</div>

<div class="rounded-xl border-2 border-violet-400 bg-violet-50 p-3 text-slate-800">
  <span class="font-semibold text-violet-900">Governance Committee</span>
</div>

</div>

**Advancement** is merit and trust based — no fixed timeline.

::right::

<br><br>


### Reviewer
Listed in `OWNERS` — can `/lgtm` pull requests; expected to help with triage and review

### Maintainer
Listed in `OWNERS` — can `/approve` to merge; responsible for releases, strategy, and mentoring

<br>

> Becoming a reviewer or maintainer requires a track record of quality contributions and endorsement by existing maintainers.

<br>

📖 &nbsp;[Contributor ladder](https://github.com/tektoncd/community/blob/main/process/contributor-ladder.md)

<style>
.slidev-layout code {
  background-color: #e2e8f0;
  color: #1e293b;
  padding: 0.1em 0.35em;
  border-radius: 0.25em;
}
</style>

<!--
Speaker notes:
- Contributing to the project requires going through an approval process. Details on this will be provided separately — there are currently open questions following the project's recent migration from the CDF to the CNCF.
- The OWNERS file in this repo controls who can approve changes. Maintainers should be aware of it for triage purposes.
-->

---

# Contribution workflow 🔄

<br>
<div class="grid grid-cols-2 gap-6 mt-4">

<div>

## 🐛 &nbsp;Bug fixes & small changes

1. Browse [open issues](https://github.com/tektoncd/dashboard/issues) — look for `good first issue` or `help wanted`
2. Fork → branch → commit

   📖 &nbsp;[commit message standards](https://github.com/tektoncd/community/blob/main/standards.md#commit-messages)
3. Open a PR; CI must pass
4. Address review feedback, squash commits
5. Needs `/lgtm` + `/approve` to merge

</div>

<div>

## ✨ &nbsp;Features & API/UI changes

1. **Discuss first** — open an issue or post in `#dashboard` on Slack
2. Provide a proposal: use cases, requirements, and alternatives
3. Once aligned, implement and PR as above

<br>

<div class="rounded-lg border-2 border-amber-400 bg-amber-50 p-3 text-sm text-slate-800">

<span class="text-xl">⚠️</span>&nbsp;<em>"Yes is forever"</em> — propose before you build.

</div>

</div>

</div>

<style>
.slidev-layout code {
  background-color: #e2e8f0;
  color: #1e293b;
  padding: 0.1em 0.35em;
  border-radius: 0.25em;
}
</style>

<!--
Speaker notes:
- The "discuss first" norm is enforced gently but consistently. PRs that introduce significant changes without prior discussion are often asked to slow down.
- For larger architectural changes, a TEP (Tekton Enhancement Proposal) may be required — these live in tektoncd/community/teps/.
- CI includes linting (ESLint, golangci-lint, Prettier), unit tests, and E2E tests against a real cluster (multiple k8s versions + install modes). Failing CI blocks merge.
- Note: CI may not trigger automatically for contributors who are not GitHub org members. A maintainer may need to approve the run via an `/ok-to-test` comment or similar before checks will execute.
- Other common slash commands: `/hold [cancel]`, `/kind <kind>` (which you'll see in the PR template), `/retest`, etc.
-->

---
layout: two-cols
---

# Getting started locally 💻

**Prerequisites**

- Node (see `.nvmrc`)
- Go, `kubectl`, `ko`
- a Kubernetes cluster — `kind` works great
- see docs for more

<br>

```bash
# 1. Clone and install frontend deps
git clone https://github.com/tektoncd/dashboard
npm install

# 2. Set up a local cluster with Tekton
#    and the Dashboard already installed
./scripts/prepare-kind-cluster create

# 3. Start the frontend dev server
#    (hot-reloads; proxies to local cluster)
npm start
```

::right::

<br><br>

### Key docs

| | |
|---|---|
| 📖 Full dev setup | `docs/dev/` |
| 🔌 API reference | `docs/dev/api.md` |
| 🛠 Installer details | `docs/dev/installer.md` |

<br>

### Just working on the UI?

```bash
# Run Storybook independently —
# no cluster needed
npm run storybook
```

<style>
.slidev-layout li code, .slidev-layout td code {
  background-color: #e2e8f0;
  color: #1e293b;
  padding: 0.1em 0.35em;
  border-radius: 0.25em;
}
</style>

<!--
Speaker notes:
- `scripts/prepare-kind-cluster` handles cluster creation, Tekton installation, and Dashboard deployment. It internally calls `scripts/installer` which wraps the ko build steps and additional configuration — do not call `ko apply` directly.
- The ko tool compiles the Go backend and pushes a container image without needing a Dockerfile. It reads .ko.yaml for configuration.
- Point contributors to .nvmrc to ensure they're on the right Node version — mismatches cause subtle build failures.
- The API reference at `docs/dev/api.md` covers the Dashboard's own backend API. Note that the Dashboard backend also proxies the Kubernetes API. Both of these are implementation details not intended for external consumption. The Kubernetes API itself is documented in the official Kubernetes docs at https://kubernetes.io/docs/reference/.
-->

---
layout: cover
background: '#0f172a'
---

# Demo & code tour 🗺️

Let's see the Dashboard in action and walk through the codebase

<img
  src="https://github.com/tektoncd/dashboard/raw/main/docs/tekton-dashboard-color.svg"
  alt="Tekton Dashboard logo"
  class="w-48 h-48 mt-16 mb-32 m-auto"
/>

<div class="text-blue-300 text-lg absolute bottom-4">

**Up next in this series →** Codebase deep dive: frontend patterns, backend API & Kubernetes integration, CI/release process

</div>

<!--
## Demo outline

### 1. Installation & access
- Show the Dashboard running in a cluster (no special setup visible — just open the URL)
- Briefly note it's deployed as a standard Kubernetes workload, accessible via a service or ingress

### 2. Namespace scoping
- Start with cluster-wide view — show resources across all namespaces (local environment)
- Switch to a scoped view limited to one or two namespaces, illustrating the multi-tenant use case (dogfooding cluster)
- Note this is configured at install time via the installer, not a runtime toggle

### 3. Workload visibility
- Navigate to PipelineRuns — show a list with mixed statuses (running, succeeded, failed)
- Open a running PipelineRun: show the task graph, step-level status, and live log streaming
- Open a failed run to show how errors surface — logs, exit codes, failed steps

### 4. Resource browsing
- Navigate to a TaskRun or Pipeline definition directly
- Show the raw YAML view
- Demonstrate label filtering to narrow a busy list down to a specific workload or team

### 5. Triggering a run (if time allows, local environment)
- Use the Git import flow to pull in a Tekton resource from a repository
- Or, if a Trigger is configured, show an incoming EventListener creating a PipelineRun automatically
- Show the Create form / YAML editor, and rerun functionality

### 6. Extensions (if time allows)
- Show a custom resource type surfaced via an extension
- Briefly explain that extensions allow operators to integrate additional CRDs without forking the project

**Suggested Tone:** Keep it task-oriented rather than feature-by-feature. Frame each section around what a user or operator would actually be doing — "I want to see why this run failed", "I want to scope this to my team's namespace" — connect the UI to real workflows before the code tour shows them how it's all built.

## Code tour outline

### 1. Entry points & bootstrapping
- Start in `cmd/dashboard/` — the Go entrypoint, what gets built and deployed
- Walk `pkg/` briefly — how the backend is structured, what each package is responsible for
- Show `index.jsx` at the repo root — the React app entry point; note the `QueryClientProvider` wrapping the tree and how the `QueryClient` is configured (`staleTime: Infinity`, custom `defaultQueryFn`, no polling)
- Show how the frontend dev server (`npm start`) connects to the backend and how the proxy is configured

### 2. Backend — the Go proxy
- Show how incoming requests are routed and forwarded to the Kubernetes API
- Auth handling — read-only mode, header passthrough
- Point out the RBAC manifests in `config/` that govern what the backend is permitted to do in the cluster

### 3. Frontend — structure & patterns
- Walk `src/` top-level: containers vs. components, how they relate
- Show `packages/` — what lives there and why it's separated (`utils`, `components`, `graph`)
- Pick one concrete example (e.g. PipelineRuns list) and trace it end-to-end:
  - Container: data fetching via TanStack Query hooks, connecting to the API layer
  - Component: rendering, props, Carbon Design System usage

### 4. API & data fetching layer
- Show `src/api/utils` — the `defaultQueryFn` wired into the `QueryClient` in `index.jsx`; this is the central point through which all data fetching flows
- Show how individual query hooks are defined and consumed in containers
- Point to `docs/dev/api.md` for the Dashboard API reference
- Note that the Kubernetes API is also proxied — refer to upstream Kubernetes docs rather than expecting anything documented here
- Both sets of API are an internal implementation detail

### 5. Testing
- Unit tests — where they live relative to the code they cover, how to run them (`npm test` via Vitest)
- E2E tests in `packages/e2e/` — what they cover, what infrastructure they need (a real cluster); note the separate `npm ci` step required before running (`npm run e2e:install` handles this)
- Linting and formatting: editor config, ESLint, Prettier, golangci-lint — show the config files and how they're enforced

### 6. Extensions (if time allows)
- Show how the extension mechanism is implemented — how the backend surfaces custom resource types and how the frontend picks them up and renders them

### 7. CI & release process (if time allows)

- **Dogfooding:** walk the `tekton/` directory — the pipelines used to build and release the Dashboard itself
- **GitHub Actions:** show the nightly build workflow in `.github/` — where it lives, what it does
- **The installer:** walk `scripts/installer` and `scripts/prepare-kind-cluster` — the same scripts contributors use locally, also used in CI
- **Release flow:** how a release is cut — tagging, image build via `ko`, manifest generation, GitHub release artefacts
- **Image publishing:** where the built images land (migrated to `ghcr.io/tektoncd`) and how the installer references them

**Suggested approach:** Anchor each section to something they already saw in the demo — "this is the code behind the log streaming you just saw", "this is the query that drives the PipelineRuns list". Keep the TanStack Query patterns central to the frontend walkthrough since they touch almost every container in the app.
-->
---

# Community & communication 💬

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="flex flex-col gap-3">

<div class="rounded-xl border-2 border-slate-700 bg-white p-4 text-slate-800">
  <strong>💬 Tekton Slack — <code>#dashboard</code></strong><br>
  <span class="text-sm text-slate-600">Day-to-day questions, proposals, announcements</span>
</div>

<div class="rounded-xl border-2 border-slate-700 bg-white p-4 text-slate-800">
  <strong>🐛 GitHub issues</strong><br>
  <span class="text-sm text-slate-600">Bug reports and feature requests</span>
</div>

<div class="rounded-xl border-2 border-slate-700 bg-white p-4 text-slate-800">
  <strong>📧 Mailing lists</strong><br>
  <ul>
    <li><code>tekton-dev@</code>&nbsp;<span class="text-sm text-slate-600">developers working on Tekton. Docs and meeting recordings are shared with this group</span></li>
    <li><code>tekton-users@</code>&nbsp;<span class="text-sm text-slate-600">end user community and adoption discussions</span></li>
  </ul>
</div>

</div>

<div class="flex flex-col gap-3">

<div class="rounded-xl border-2 border-slate-700 bg-white p-4 text-slate-800">
  <strong>📅 Community meetings</strong><br>
  <span class="text-sm text-slate-600">No Dashboard-specific working group — see the community calendar for broader community meetings</span>
</div>

<div class="rounded-xl border-2 border-red-400 bg-red-50 p-4 text-slate-800">
  <strong>⚖️ Code of Conduct</strong><br>
  <span class="text-sm text-slate-700">All contributors must follow the <a href="https://github.com/tektoncd/dashboard/blob/main/code-of-conduct.md">Tekton CoC</a></span>
</div>

<div class="rounded-xl border-2 border-blue-400 bg-blue-50 p-4 text-slate-800">
  <strong>🏠 Community hub</strong><br>
  <a href="https://github.com/tektoncd/community" class="text-sm text-blue-700">github.com/tektoncd/community</a>
  <br>
  <a href="https://github.com/tektoncd/community/blob/main/contact.md" class="text-sm text-blue-700">Contact: Slack, mailing lists, calendar, shared drive</a>
  
</div>

</div>

</div>

<style>
.slidev-layout code {
  background-color: #e2e8f0;
  color: #1e293b;
  padding: 0.1em 0.35em;
  border-radius: 0.25em;
}
</style>

<!--
Speaker notes:
- Slack is the most active real-time channel — encourage new contributors to introduce themselves in #general and #dashboard.
- The mailing lists are lower traffic but important for staying informed about governance and project-wide changes.
- There is no Dashboard-specific working group at this time, but the broader Tekton community meetings are worth being aware of. Meeting links and times are in the community calendar linked from tektoncd/community.
- The CoC is based on the CNCF CoC — broadly: be excellent to each other.
- Other maintainers to reach out to for support with infra or related issues, #plumbing
-->

---
layout: cover
background: '#0f172a'
---

<div class="text-center">

# What's next? 🚀

<div class="grid grid-cols-2 gap-4 mt-8 text-left max-w-3xl mx-auto">

<div class="bg-white/10 rounded-xl p-5 text-white">

**Getting set up**

- [ ] Complete the contributor approval process *(details to follow)*
- [ ] Join Tekton Slack → `#dashboard`
- [ ] Get a local environment running
- [ ] Explore the codebase

</div>

<div class="bg-white/10 rounded-xl p-5 text-white">

**Making your first contribution**

- [ ] Review `CONTRIBUTING.md` in `tektoncd/dashboard` and in `tektoncd/community`
- [ ] Pick a `good first issue`
- [ ] Comment on the issue before starting work

</div>

</div>

</div>

<!--
Speaker notes:
- Remind people the bar for a first contribution is low — documentation fixes, test improvements, and small bug fixes are all very welcome.
- Commenting on an issue before starting work avoids duplicated effort and surfaces early feedback on approach.
- Further details on the contributor approval process will be shared once any process changes following the project's recent migration from the CDF to the CNCF have been confirmed.
- Subsequent sessions will cover any topics we didn't get to or complete in this session. Requests are welcome. Suggestions: the Kubernetes API integration, the release process, and how to write/run E2E tests.
-->
