# Theory of Computation

The available course has 438 designed lessons across 19 sections. Each lesson combines beginner definitions, a prediction, an interactive model, explanation and four graded questions. Optional workshops support further exploration without awarding XP or blocking lesson progression.

## Models and interaction

Lessons explore finite automata, nondeterministic active sets, epsilon transitions, regular expressions, grammars, derivations, stack languages, tape machines, closure arguments and decidability. Editable examples show the current state and explain acceptance, rejection or a bounded outcome.

Multi-step models offer stepping, seek, pause, restart and speed controls. Reduced motion uses manual advancement. Tape views follow a nine-cell window around the head while retaining full model state. Tables and diagrams scroll within their containers on small screens.

## Mathematical boundaries

Finite tests do not prove closure, equivalence, nonregularity or nonhalting. A simulation budget reports an unknown halting outcome rather than rejection.

The normal-form workshop checks production shapes and grammar fixed points rather than implementing a complete CNF/GNF conversion. State-elimination examples explain the path-language recurrence without a general graph-elimination editor. Grammar membership uses an Earley chart. Stack examples implement their stated block languages rather than an arbitrary PDA interpreter.

## Verification

Use `npm run validate`, `npm test`, `node tests/toc-browser.cjs` and `node tests/toc-regression.cjs`. Checks cover model outcomes, empty inputs, epsilon cycles, recursive grammars, malformed blocks, carry propagation, bounded simulations, real learning journeys and responsive workshop controls.

See [TOC verification](TOC_VALIDATION.md) for scope and [lesson design](CONTENT_AUTHORING.md) for shared standards. Course updates are published through the normal database import and deployment workflow.
