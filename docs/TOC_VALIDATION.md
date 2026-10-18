# TOC regression audit

Scope: the 438 published TOC lessons, their 1,752 exercises, 19 optional
workshops, and the previously reported learning-flow and startup problems.
Changes are loaded into local PostgreSQL. Production has not been deployed.

## Findings and fixes

| Finding | Correction | Evidence |
| --- | --- | --- |
| The first delayed status response could reset a deliberately selected unit. | Unit selection is initialized when loading a subject; background polling no longer changes it. | A held status response reproduced a jump from the NFA section to Words and languages before the fix. The same browser test now passes. |
| An older source-status snapshot could overwrite newer questions and titles. | A status update cannot downgrade the lesson's content version. Readiness can still advance. | Browser test injects a version-one snapshot against the version-two course and checks the title and actual exercises. |
| Advanced decision topics fell back to unrelated DFA arithmetic. | TM and CFG questions now test their actual decision problems, finite bounds, recognition, encoding and quantifiers. | Assessment-domain checks and independent bounded/unbounded classifications. |
| Normal-form assessment mainly checked grammar cleanup. | CNF/GNF exercises now inspect actual production shapes, including the start-only epsilon exception. | Independent rule-shape calculations verify all nine generated exercises. |
| Hierarchy exercises used generic length-residue questions. | Classification, closure and hierarchy each have their own question set. The CFL/DCFL explorer now shows closure facts and the triple-equality intersection counterexample. | Topic-specific assessment checks and browser rendering. |
| Machine-encoding and DFA-equivalence assessments needed closer alignment. | Added binary-field decoding and actual comparisons of two complete DFAs, including shortest distinguishing lengths and symmetric difference. | Independent field parsing and reachable-pair calculations. |
| Enumeration questions mostly repeated the same explanatory caption. | Replaced them with entry, index and fair-enumeration calculations. | Content identity checks and model tests. |
| Introductory distractors repeated unrelated generic assertions. | Distractors now express errors specific to each model: early acceptance, epsilon consumption, stack order, quantifier reversal and others. | Authored misconception banks and grading checks. |
| Examples did not always state their acceptance contract prominently. | Model captions identify the alphabet, accepted property, whole-input rule and applicable bounds. | Every authored default scene is exercised by content tests. |
| The completion screen did not offer TOC's optional workshop. | A final-unit lesson offers the workshop alongside Next Lesson. Skipping the workshop still advances directly. | Real browser completion of the first unit's final lesson into the next unit. |
| Spoken scripts could select a question whose rules existed only in a visual table. | Questions with TOC mathematical givens are excluded from spoken quiz examples. | Podcast regression test. Existing nine-course podcast manifests remain unchanged. |

Lesson and question identities remain stable. Changed TOC content and questions
use version two so outdated practice entries can be identified. Learner XP,
completed lessons, authentication and scoring rules were preserved.

## Validation gates

| Gate | Result |
| --- | --- |
| All 146 source topics, completed transcripts and stable lesson IDs | Passed |
| Four gradable exercises per lesson; no repeated exact mathematical scenarios | Passed |
| Introductory terminology, self-contained examples and model-specific guidance | Passed automated content checks and targeted editorial review |
| Independent DFA, NFA, grammar, stack, tape and proof-model checks | Passed |
| Full Node suite | 175 tests: 173 passed, two optional compiler checks skipped, zero failures |
| Speech-generation regression suite | Six tests passed |
| Responsive model rendering | Every lesson at 320, 390, 430, 768, 1366 and 1440 pixels, in light and dark themes |
| Intermediate states | All 3,149 authored default frames rendered at 320 pixels in both themes; first and last states additionally rendered at the other five sizes |
| Guided learning | Twelve full ungraded journeys passed |
| Optional workshops | All 19 opened at 320, 390 and 430 pixels; transition construction, active-state puzzles, grammar rewrites, resets, error feedback and bypass navigation passed |
| Real startup and login | Public shared modules load before authentication; course APIs remain protected; login succeeds through the actual form |
| Subject isolation | TOC → COA → TOC → C → TOC displays the correct material without a hung load |
| Slow/stale responses | Manual unit choice and newer teaching survive the injected delayed status response |
| Exit and restart | An unfinished lesson restarts with a fresh prediction and quiz; completed progress and earned XP remain saved |
| Next-unit continuation | Completing the boundary lesson opens the next unit's first lesson without completing the optional lab |
| Playback lifecycle | Play, pause, speed selection, restart, reduced-motion advancement and timer cleanup on exit passed |
| Advanced quiz widgets | All four widgets for ten advanced lessons were exercised across all six sizes, including rules tables and numeric answers |
| Mobile calculator and study rhythm | Calculator fits the phone viewport; day markers and their contents do not overlap |
| Return to current lesson | Desktop control returns from another section; the mobile floating button returns after scrolling away; the unit banner has no overlapping podcast button |
| Browser errors and failed page requests | None observed in these checks |
| Build/deployment preparation | Course validation, browser/server syntax, existing CI test requirements and whitespace checks passed; CI now explicitly checks the new TOC modules |

The subject-switch timing check is a local hung-load guard, not a production
network benchmark. These gates do not claim an exhaustive mapping against every
past GATE paper or a line-by-line human review of every ASR segment. Reusable
models still have the limits documented in [TOC teaching](TOC_TEACHING.md),
including the structural normal-form checker and the absence of a general
state-elimination editor.

## Reproduce

```powershell
node scripts/validate-courses.mjs
npm.cmd test
python tests/podcast_speech_test.py
node tests/toc-browser.cjs
node tests/toc-regression.cjs
```

Detailed browser results are in `qa-results/toc/results.json` and
`qa-results/toc/regression-results.json`. The generated curriculum coverage is
`courses/toc/data/teaching-coverage.json`. Duplicate detection includes actual
mathematical givens: the same question stem with different grammars or DFAs is
not treated as the same scenario merely because its wording is identical.

## Compiler Design transcription

The existing resumable worker was started against `K:\Gate\GO CSE\CD` with GPU,
batching and skip-on-error enabled. The inventory contains 52 recordings.
Completed transcripts are imported without publishing an unfinished CD course.
CD remains planned, with its existing lexer preview.

Known skipped source during this audit:

- `008. GATE 1996 Question Homework.mp4`: no speech segments produced.

The worker continues in the background. Its current state and completion markers
are under `courses/cd/data/source-analysis`; any further skipped sources get
their own reason-bearing `.skip` files.
