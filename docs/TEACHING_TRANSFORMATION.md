# Teaching transformation: implementation and verification

The existing theme, tokens, Nunito font, navigation, authentication, quiz answers, XP rules and subject publication states are preserved. New educational components use existing surfaces, colors, buttons and motion preferences. No dependency was added.

## Plan and checklist

- [x] Inspect all 11 manifests, published hierarchies, source inventories, rendering, labs, stored rounds, publishing and tests.
- [x] Establish a real-browser baseline at phone and desktop widths for all nine published courses.
- [x] Add authored guidance to actual course modules; retain it when OS/DBMS/CN builders regenerate lessons.
- [x] Replace definition-click gating with model-backed prediction and explanatory feedback.
- [x] Add state walkthroughs with manual steps, seeking, restart, controlled playback, speed and synchronized captions.
- [x] Keep live hardware inputs and existing C, DS, Algorithms, Networks and Aptitude labs.
- [x] Remove static visual replays; replace them with input/experiment resets. Hide playback for one-state DS/Algorithm examples.
- [x] Fix the cross-subject DBMS mount, glossary accordion, end-step interaction capture, CRC receiver calculation and Hamming zero-error display.
- [x] Supply working, explicitly limited previews for the two unpublished courses.
- [x] Construct every published lesson's scene in the browser and render its first and last state at a narrow width.
- [x] Finish final screenshot correction pass and regression runs.
- [x] Publish the prepared content to the local database and check the normal startup workflow.

## Course coverage

| Course | Published lessons receiving guidance and predictions | Educational treatment |
|---|---:|---|
| C Language | 204 | Execution-state predictions, code/variable/pointer/call-frame walkthroughs; existing editable C labs retained. Explicit size, lifetime and bounds caveats. |
| Data Structures | 303 | Actual DS operation frames, invariant guidance and misconceptions; existing graph/growth/structure inputs retained. |
| Algorithms | 510 | Existing algorithm state traces in seekable walkthroughs, concrete predictions, proof/complexity caveats; input variants retained. |
| Digital Logic | 294 | Live Boolean inputs, labeled signal paths, truth-table/routing/state examples and settled-output assumptions. |
| COA | 105 | Transfer sequences, address/cache fields, representations and numerical inputs; distinguish architectural examples from physical timing. |
| Operating Systems | 117 | Deterministic round-robin schedules, lost-update interleavings, paging/segment translation, TLB costs, FIFO replacement and resource examples replace decorative state changes. |
| DBMS | 282 | Actual relation rows, predicates, projections, joins, grouped aggregates, FD counterexamples, index paths and transaction interleavings replace prose-only storyboards. |
| Computer Networks | 138 | Topic-family protocol traces alongside all existing topic labs; correct codeword-based CRC generation/checking and single-bit error experiments. |
| General Aptitude | 45 | Linked concrete input cases, predictions, rates/bases/evidence guidance and working reset-to-default controls; existing manipulable visual labs retained. |
| Theory of Computation | 0 | Editable binary-string DFA preview: states, input position, transitions and final acceptance/rejection. Full course remains unpublished. |
| Compiler Design | 0 | Editable source-to-token preview: maximal-munch operators, lexemes, token kinds, character spans and lexical errors. Full course remains unpublished. |

The [machine-readable lesson checklist](TEACHING_COVERAGE.json) includes every published lesson and all recording topics, including the 146 TOC and 52 Compiler Design recordings with no published lessons. Run `node scripts/audit-teaching.mjs` after the browser suite to refresh it.

## What is course-wide and what is specific

Every published lesson has a model-backed prediction, a subject-authored guidance profile and an explanatory walkthrough. Guidance is authored by concept family and attached to individual lesson objectives. Repetitive generated filler was removed from foundational copy where present. The original detailed explanations, examples, source references and graded questions remain available.

The new models are focused teaching examples. They are not a full operating system, SQL engine, network stack, C interpreter or compiler. Each states its assumptions; examples are separate from graded quiz inputs. Some advanced topics deliberately reuse a prerequisite family example alongside their existing topic-specific notes/labs. These do not constitute bespoke simulations of every advanced syllabus item.

TOC and Compiler Design previews are aligned to recorded syllabus topics, but are not substitutes for authoring the full courses. Planned lesson endpoints remain unavailable. Only the authenticated `concept-preview.js` module is exposed for a planned course. The shared annotation helper has a narrow browser import alias so raw published modules and database bundles both continue to load.

## Playback and controls

Static figures no longer have replay controls. Native parameter diagrams reset their actual inputs; Aptitude resets values and recomputes the linked diagram and explanation. Real multi-step traces retain restart/replay. One-state traces expose relevant inputs without a pretend playback action. In reduced-motion mode, a playback action advances one manual step. Timers stop when their lesson detaches, the tab is hidden or reduced motion becomes active.

Predictions earn no XP, cost no hearts and do not expose the graded answer. Attempting a prediction unlocks exploration; wrong attempts receive a comparison hint and can be retried. Glossary terms are optional reference content rather than the required learning action. Saved rounds retain the prediction attempt and existing exploration state.

## Validation record

Browser artifacts are in ignored `qa-results/teaching-before/` and `qa-results/teaching-after/`. `model-coverage.json` records model and layout checks separately from full journeys. Tests launch installed Edge against a real local Node server and isolated disposable PostgreSQL schema; they do not replace backend requests with fake course data.

Executed after implementation and correction:

- `npm.cmd test`: **154 tests; 152 passed, 2 optional compiler-dependent skips, 0 failures**.
- `npm.cmd run validate`: all 11 manifests and all 1,998 published lessons validated. No frontend compilation step exists; this app serves native JavaScript modules.
- `node tests/teaching-browser.cjs`: all 1,998 model sequences constructed in Edge; first and last states actually inserted and measured at a narrow width; 27 complete early/middle/final journeys across all nine published courses, with no unearned XP/completion. Layouts checked at **320x568, 390x844, 430x932, 768x1024, 1366x768 and 1440x900**. Light and dark screenshots reviewed. No uncaught exceptions, unexpected HTTP errors or outer horizontal overflow.
- `node tests/teaching-browser.cjs --playback-only`: both planned-course previews, invalid/valid editable inputs, seek, restart, playback speed, real automatic playback, pause, reduced-motion manual stepping and timer cleanup after closing passed. Planned lesson modules remain unavailable.
- `node tests/journey-browser.cjs`: 21 existing guided journeys, glossary access, pause/reload, no unearned XP/completion and responsive layouts passed after updating the required prediction action.
- `node tests/aptitude-browser.cjs`: all 15 labs, keyboard controls, grading and retries, saved XP, resume and themes passed. Its simulated stale-catalog response now uses no-store so the altered test response cannot poison the next real catalog load.
- `node tests/os-browser.cjs`: 15 process/scheduling/synchronization/memory/storage lesson flows passed against the new state walkthrough.
- `node tests/cn-labs-browser.cjs`: all 46 topic labs / 35 protocol variants interacted with; no browser errors or overflow at 320/390/1440 widths.
- `node tests/lesson-tools-browser.cjs`: 1,599 raw-module diagrams / 372 visual families rendered at 320px, keyboard-adjustable inputs and calculator error/focus/answer-preservation checks passed. This also checks the browser annotation import alias.
- `node tests/dbms-sql-labs-browser.cjs`: optional SQL lab discovery, guided query checks, saved flow and next-unit navigation passed.
- Normal `npm.cmd start` server is running at `http://127.0.0.1:4173`; the updated course bundles were published to the existing local database at loopback port 55432. An Edge check rendered its real login screen without exceptions. QA learner accounts were created only in disposable test schemas, not in the user's normal database.

Initial regression failures were investigated and corrected before the passing reruns. In particular, advancing to a last frame could disable its button before the parent recorded the interaction; capturing the actual click before that change fixed the gate. The glossary now updates in place. The original five-subject expectation in the Aptitude test was replaced by an availability assertion that supports the current nine-subject catalog.

## Outstanding editorial and course authoring work

- All original paragraphs and 7,992 questions have not been individually rewritten and reviewed by a human educator. The checklist marks individual editorial review pending for every lesson, rather than equating shared/family guidance with a bespoke rewrite.
- TOC and Compiler Design still require their full lesson hierarchies, source-aligned explanations and graded exercises. Their previews cover DFA parity and lexical analysis only; PDA/Turing-machine/grammar and parsing/semantic/optimization/code-generation simulators are not implemented.
- The advanced subjects do not each have an independent, parameter-complete simulator for every syllabus technique. Their existing notes and exercises are preserved, with family-level guided models and misconceptions added.
- Browser checks cover Windows Edge, responsive viewport sizes and OS reduced-motion emulation. Physical mobile keyboards, Safari, screen-reader listening and production hosting need separate verification.
