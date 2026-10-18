# Theory of Computation teaching build

TOC is available locally with 146 source topics, 19 named sections, 438 lessons
and 1,752 exercises. All 146 recordings finished transcription without skips.
Every lesson references an imported completed transcript and timestamped excerpts.

## Learning flow

Each topic has three stages: understand the rule, trace and experiment, then apply
and challenge it. Written notes are optional. Skipping them still leads through
an ungraded prediction, a working model and an explanation before the quiz.
Beginner definitions explain the model's symbols and memory before using notation.
Topic-specific examples and warnings replace references to an unseen presentation.

There are 22 reusable model families: words, finite languages, DFA runs, NFA and
epsilon closure, subset construction, minimization, regular expressions, grammar
membership and analysis, normal-form checks, stacks, palindromes, tape execution,
pumping and distinguishability arguments, closure, hierarchy, decision problems,
reductions, dovetailing, enumeration and diagonalization. Related topics share
these engines; this is not 438 independently programmed simulators.

The three stages vary their experiment inputs. Graded exercises use separate
inputs. Questions include rules or initial-state givens rather than displaying
their computed answers. Accepted grammar examples show actual leftmost rewrites
before introducing parsing internals. Exact chart parsing determines membership;
a bounded witness search supplies the short illustrated derivation, with the
chart as a fallback if that search does not find a short witness. Answer
positions vary deterministically. The builder and
content tests reject repeated scenarios; the existing quiz-identity checks also
cover TOC within each topic and its two neighboring lessons.

## Optional workshops

Every section ends with a workshop that can be bypassed. The next unit remains
accessible without completing it. Workshops award no XP or lesson completion.

- DFA workshops let learners fill transition rules using selects, test short
  words, and receive an actual counterexample when behavior differs.
- NFA/expression workshops include a selectable active-state-set puzzle.
- Grammar workshops let learners construct a leftmost derivation by tapping
  productions. Each tap performs the selected rewrite.
- Other workshops expose the relevant model, its inputs and stepping controls,
  with prediction and explanation prompts. Proof workshops do not claim to be
  automated theorem provers.

Playback supports stepping, seeking, pause, restart and speed. Reduced motion
uses manual advancement. Tape views follow a nine-cell window around the head;
cell indices identify the window and the full tape remains in the model.

## Boundaries that matter

Finite tests are not proofs of closure, nonregularity, equivalence or nonhalting.
The notes distinguish those experiments from quantified arguments. A simulation
limit reports an unknown halting outcome, never a rejection.

The normal-form workshop checks production shapes and grammar fixed points; it
does not implement full CNF/GNF conversion. State-elimination topics explain the
recurrence with path-language examples; there is no general graph-elimination
editor. Grammar membership uses an Earley chart rather than pretending that a
few derivation attempts decide nonmembership. The stack examples implement their
stated block languages, not an arbitrary PDA interpreter.

Source alignment uses topic mapping and transcript excerpts. This does not claim
a line-by-line human audit of every ASR segment. Formulas and acceptance rules
are explicitly authored and tested instead of trusting speech recognition for
mathematical notation.

Nineteen section podcast scripts are prepared. TOC audio has not been rendered.
The existing player reports those episodes as awaiting audio.

## Authoring and verification

```powershell
node scripts/sync.mjs toc
node courses/toc/authoring/build-reviewed.mjs
node scripts/build-podcasts.mjs
node scripts/validate-courses.mjs
npm.cmd test
node tests/toc-browser.cjs
```

`sync.mjs toc` imports completed source data, rebuilds TOC, and publishes course
content into the configured local PostgreSQL database. It does not deploy to OCI.
No new environment variables or dependencies are required.

Coverage: [generated report](../courses/toc/data/teaching-coverage.json).
Browser evidence is written to `qa-results/toc/results.json` with screenshots.
The browser audit renders the first and last model states of every lesson at
320, 390, 430, 768, 1366 and 1440 pixels in light and dark themes, exercises full
learning journeys, and checks optional workshop controls. Engine tests compare
small-input outcomes with independent definitions, including empty inputs,
epsilon cycles, recursive grammars, malformed blocks, carry propagation and
bounded nonhalting simulations.

This change is local and uncommitted. Production deployment is separate.

## Initial build verification

- Course validation passed for all 438 TOC lessons.
- Full automated suite: 169 tests, 167 passed, two optional compiler checks
  skipped, zero failures.
- Playwright rendered first and last states for every TOC lesson across all six
  viewport sizes in both themes. Twelve full learning journeys passed.
- After improving grammar illustrations, all 15 grammar lessons passed the same
  layout checks again, and five focused grammar journeys passed.
- All 19 optional workshops opened at 320, 390 and 430 pixels. Transition
  construction, counterexamples, active-set selection, derivation rewriting,
  resets, invalid-input feedback and next-unit navigation passed.
- No browser exceptions, failed asset requests or outer overflow were observed
  in those checks. TOC is imported into local PostgreSQL and the app is running
  at `http://127.0.0.1:4173`.

The later [TOC regression audit](TOC_VALIDATION.md) records the assessment
alignment fixes, delayed-status regression, stronger responsive checks and
updated test results. It supersedes the initial verification counts above.
