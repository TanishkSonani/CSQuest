# Theory of Computation verification

The available course contains 438 designed lesson stages across 19 sections, with four graded questions per stage. The optional workshops remain separate from graded progress.

## Verification scope

- Stable topic and lesson identities, complete objectives, beginner explanations, exercise grading and bounded model contracts.
- Independent finite checks for automata, epsilon cycles, recursive grammars, tape operations and bounded nonhalting outcomes.
- Model construction and rendering, first/last states, real teaching journeys and advanced quiz widgets.
- Authenticated startup, subject isolation, delayed/stale responses, restart, saved progress and next-unit continuation.
- Optional workshops, playback lifecycle, invalid inputs, reduced motion, responsive layout and both themes.

```powershell
npm run validate
npm test
node tests/toc-browser.cjs
node tests/toc-regression.cjs
```

Browser checks use isolated records and write disposable results under `qa-results/`. Reports describe the specific run rather than guaranteeing all browsers or devices. Local subject-switch timing guards detect hung loads; they are not production network benchmarks.

The models retain the mathematical limits documented in [TOC teaching](TOC_TEACHING.md). Finite examples do not establish universal claims, and exhausted simulation bounds do not prove rejection or nonhalting.
