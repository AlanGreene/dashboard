You are continuing a cleanup where a feature flag (`enableTabLayout`) controlling the PipelineRun / TaskRun tab layout has effectively become permanent because it is now always enabled. Your job is to complete or replicate the cleanup so the codebase reflects a single always-on tab-layout implementation.

Requirements:
- Remove dead code created by the old optional-layout logic.
- Eliminate obsolete feature-flag plumbing and any helper logic that only existed to toggle the tab layout.
- Keep only the tab-layout implementation path for PipelineRun / TaskRun behavior.
- Update tests so the new simplified behavior remains sufficiently covered.
- Preserve existing test intent, order, and inputs as much as possible. Only change test inputs when necessary to support the surviving tab-layout behavior.
- Remove unrelated accidental edits if you find any.

Important scope decision already made:
- This cleanup must include both app-level containers and shared package components.
- Newly orphaned internal components that only existed for the removed layout may also be removed if they are not part of the public package API.

Additional confirmed decision:
- Two internal components formerly used by the removed layout are not public API and should be deleted if still present.
- When removing those components, also remove any remaining references outside JS/JSX source, including stylesheets and exports.

Story / documentation requirements:
- If removed components had isolated stories, replace those examples on surviving components so consumers still have equivalent examples in isolation.
- Do not keep stories on a component surface that cannot render meaningfully by itself.
- A previous attempt to put isolated examples on the tab-panels component was invalid because that surface is too low-level / context-dependent and resulted in blank stories.
- The accepted approach is to move those isolated examples onto a working visible details component instead.

Behavior expectations:
- The final implementation should have exactly one code path for PipelineRun / TaskRun display: the tab-layout path.
- There should be no remaining user-facing way to disable that layout.
- Any log auto-scroll or related behavior should reflect the surviving tab-layout expectations rather than the removed legacy path.

Validation expectations:
- Ensure there are no remaining references to the removed legacy-layout components or feature-flag logic anywhere in real source code, including stylesheet imports and barrel exports.
- Ensure replacement stories are non-blank and actually render useful isolated examples.
- Ensure targeted tests relevant to PipelineRun / shared component behavior still pass.
- Ensure Storybook can start successfully after the cleanup.

Success criteria:
- Only the always-on tab layout remains.
- Dead branches, obsolete helpers, and legacy-layout-only components are removed.
- No lingering source or stylesheet references remain to removed components.
- Replacement isolated stories exist on supported surviving components and render correctly.
- Relevant tests pass and Storybook startup is no longer broken by this cleanup.
