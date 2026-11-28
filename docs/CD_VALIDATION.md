# Compiler Design verification

Compiler Design is available with 156 designed stages, 624 exercises and ten optional workshops. Stable identifiers preserve learning progress. The course includes topic explanations, predictions, interactive models and four graded items per stage.

## Verification scope

- Structural validation checks manifests, objectives, exercise identities, grading and publication.
- Independent model checks cover small parser languages, SLR/LR/LALR conflict cases, arithmetic dependencies, control-flow successors, liveness and availability boundaries.
- Browser checks cover authenticated entry, subject switching, section selection, delayed/stale responses, lesson restart, saved progress, optional workshops and unit continuation.
- Responsive checks cover phone, tablet and desktop widths in both themes, including quiz widgets, tables, calculators and playback controls.
- Podcast checks cover authenticated access, readiness, timing metadata and playback separately from graded lesson completion.

Relevant checks include `tests/compiler-models.test.mjs`, `tests/compiler-content.test.mjs`, `tests/compiler-browser.cjs` and `tests/deployment-compiler.cjs`. Run the full suite and course validator before publication. Browser output is temporary and regenerated under `qa-results/`.

Finite model checks and browser journeys are bounded verification, not a proof of every possible grammar or compiler transformation. See [Compiler Design teaching](COMPILER_TEACHING.md) for precise model limits.
