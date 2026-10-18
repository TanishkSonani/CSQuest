# Compiler Design teaching draft

The final-source validation, regression gates, and version-three mathematical
speech preparation are recorded in [CD validation](CD_VALIDATION.md). TOC audio
has finished; CD audio generation has started from its ten validated scripts.

Local authoring now defines 52 topic identities in ten concept-named sections,
156 three-stage lessons and 624 assessment items. It follows the existing flow:
optional written notes, an ungraded prediction, an interactive model, guided
explanation, then four graded questions. Ten optional section workshops write no
XP or completion state and do not block access to another section.

The manifest remains **planned**. Draft modules are not exposed by the course
API. Browser validation uses a disposable account and schema, with draft
availability overridden only inside that audit server. This work has not been
committed, pushed or deployed.

## Source readiness

Final transcription import: **51 recordings completed, one explicitly skipped,
zero remaining**. All 52 topic identities now have generated draft lessons:
153 transcript-backed stages and three independent source-gap practice stages
(156 total). The earlier browser snapshot counts below are historical and have
not been relabeled as a full post-import browser run. The course stays planned.

`courses/cd/data/teaching-coverage.json` records the imported source count,
pending identities, source evidence and explicit skips. Rebuild with
`node scripts/sync.mjs cd` after more transcripts finish. Each imported source
contributes timestamped original ASR excerpts; these are evidence links, not a
claim that every spoken sentence or original exam question has been reproduced.
The mathematical rules and example grammars are authored explicitly rather than
copied blindly from ASR formulas.

Source 008, `GATE 1996 Question Homework.mp4`, produced no speech segments and
has a skip marker. Its independently authored expression-tree practice is
labeled `inferred-title-only`, with no fabricated transcript evidence. Sources
still awaiting import are `draft-awaiting-source` and `ready:false`.

## Sections and executable models

| Section | Teaching and interaction |
| --- | --- |
| Characters into tokens | Character spans, repeated token occurrences, maximal munch, lexical versus later errors |
| Grammar structure and ambiguity | Two subtraction trees, precedence, dangling else, balanced-parenthesis decomposition |
| Prepare and trace top-down parsers | Direct-recursion elimination, shared-prefix factoring, derivation direction, syntax errors |
| FIRST, FOLLOW and predictive tables | Fixed-point sets, nullable suffixes, LL(1) conflicts, full-input parsing |
| Bottom-up parsing and SLR | LR(0) closure/GOTO, ACTION and GOTO, handles, ε reductions and FOLLOW-based conflicts |
| Canonical LR, LALR and lookahead | LR(1) lookahead closure, actual equal-core merging, conflict-preserving parsing, dedicated LR(2) witness |
| Attributes and translation | Synthesized expression values, inherited digit positions, signed binary values, declaration context |
| Pipeline and intermediate forms | Source/target stages, postfix and TAC dependencies, separate front/back-end roles |
| SSA and control flow | Edge-dependent φ values, leader detection, actual basic-block successor graph |
| Optimization and data flow | Pure local transformations, backward may-liveness, forward must-availability |

Models reuse existing playback, caption, seek, speed, pause, restart, stepping,
and reduced-motion behavior. New graphics use the current surface, border and
accent variables in both themes. Tables scroll within their containers on
phones. Editable examples report invalid formats without changing lesson
progress; grammatically rejected token streams are shown as model outcomes.

LR exercises vary actual production structure and tasks: closure facts,
remaining dot symbols, FIRST-of-suffix lookahead, global FOLLOW, ACTION
categories, reduction pops, shifts, grammar-family comparisons and core merging.
Liveness scenarios vary reads, overwrites, exits and back edges. Exact prompt
and exercise identities are checked across the entire draft. Reused engine
families are deliberate; these are not 156 independently implemented compilers.

## Explicit boundaries

- The toy lexer handles identifiers, whole numbers, supported operators and
  delimiters. It does not implement comments, string literals or all C rules.
- The expression parser handles whole numbers, parentheses and binary `+ - *`.
  It never executes arbitrary source code or uses `eval`. Mathematical integer
  examples do not imply C overflow or floating-point transformation rules.
- Grammar symbols are space-separated; `ε` is an empty right side and `$` is a
  reserved end marker. FIRST/FOLLOW and predictive tables are fixed-point
  computations. LR(0), SLR(1), canonical LR(1) and LALR(1) are actual table
  constructions. The LR(2) view is one specific two-token witness.
- The grammar limit is 40 productions, LR limit 120 states, input limit 35
  tokens and parse trace limits 160/180 steps. Exhausting a bound does not prove
  nonmembership; conflicts do not silently select a convenient action.
- Direct-recursion elimination and all-alternative prefix factoring act on the
  first nonterminal. They do not solve arbitrary ambiguity or indirect recursion.
- SSA and inherited declaration context use fixed illustrative structures.
  They do not implement dominance-frontier SSA construction or a general type
  checker. Signed binary attributes use a separate minus sign, not two’s complement.
- Liveness and availability engines accept explicit scalar CFG facts. Workshops
  use labeled examples with no pointer aliasing, exceptions or hidden side effects.
  Availability uses intersection; liveness uses union. Finite examples do not
  prove arbitrary transformations safe.

The lookahead and data-flow contracts follow the distinction described in
[Cornell’s LR notes](https://www.cs.cornell.edu/courses/cs4120/2026sp/notes/lr/)
and [Cornell’s liveness notes](https://courses.cs.cornell.edu/courses/cs4120/2026sp/notes.html?id=livevar).
Executable checks independently enumerate small parser languages and search
for future reads before definitions to test liveness.

## Validation artifacts

- `tests/compiler-models.test.mjs`: grammar, parsing, translation, graph and
  data-flow correctness, with independent finite oracles and error cases.
- `tests/compiler-content.test.mjs`: all identities, source links, workshop
  contracts, question uniqueness, grading and access ahead of progress.
- `tests/compiler-browser.cjs`: every draft lesson in six viewport sizes and
  both themes; all states at 320px, endpoints at other sizes; real journeys,
  optional workshops, restart and playback behavior. The JSON report records
  exactly which ready content was tested at the time of the run.
- `qa-results/compiler/results.json`: latest browser result, generated locally.
- `runtime/compiler-tests.log`: complete Node-suite output from the latest run.

## Latest completed checks

- Node suite: **187 tests; 185 passed, two optional compiler-dependent skips,
  zero failures** (`runtime/compiler-tests.log`).
- Course validator: all eleven course manifests passed, including the planned
  CD draft's stable 52 identities, 156 stages and four exercises per stage.
- Main Playwright pass: all 156 draft lessons, 1,029 states at 320px per theme,
  first/last states at 390, 430, 768, 1366 and 1440px; 22 real teaching journeys;
  all ten workshops at each of three phone sizes (30 workshop checks); restart,
  pause, speed and reduced-motion stepping passed. No observed browser
  exceptions, failed page requests or outer overflow.
- That browser snapshot contained 150 ready stages: 147 transcript-backed
  stages plus three independent source-gap practice stages. A subsequent import
  raised readiness to 153; the last source remains unready. Reports preserve
  their actual snapshot counts rather than relabeling old checks as new runs.
- Follow-up Playwright quiz audit: all four widgets in ten representative
  advanced lessons (40 widgets) passed six-size checks in both themes (480
  checks). Correct answers advanced through the real UI; final questions were
  left unsubmitted to avoid awarding completion. This used the updated parsing
  tasks and 153-ready-stage source snapshot. Zero browser errors or failed page
  requests were observed (`qa-results/compiler/quiz-results.json`).
- Completed TOC MP3/metadata pairs were checked for matching script hashes,
  complete dialogue timelines, monotonic timestamps and valid chapter bounds.
  At the ten-episode checkpoint this covered 49.3 minutes of generated audio.

## TOC podcast rendering

The existing local Kokoro renderer was started for `--subject toc` on CUDA in
FP32. It produces two-host English MP3s and timed turn/chapter metadata under
`data/podcasts/toc`. This is generation, not deployment. Progress is recorded by
the renderer itself in `runtime/podcast-render.json`; stdout/stderr are in
`runtime/podcast-toc-render*.log`. There is no added watcher script. Completed
episode pairs are resumable and matched to the existing 19 script hashes.
