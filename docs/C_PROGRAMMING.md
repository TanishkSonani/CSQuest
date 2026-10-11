# C Programming

The course has 68 topics, 204 lessons, 816 exercises and seven units. All 68 source transcripts are complete. Timestamped excerpts in `courses/c/data/lesson-review.json` establish topic coverage; they are not treated as the authority for numeric answers or language rules.

Each topic has three stages: explore, trace and apply. Teaching uses original explanations, glossary entries, complete examples, code snippets and everyday scenarios involving inventories, sensors, buffers and helpers. Related practice topics revisit the same principles with different concrete values. Every topic ends with a complete program builder.

## Visual labs

Sixteen labs illustrate variables, bit patterns, branches, loops, calls, build stages, static state, recursive frames, pointer aliases, array bounds, strings, row arrays, double pointers, allocation lifetime, byte order and structure members. Controls support keyboard input; playback can be paused, stepped backward or replayed. Dark/light themes and reduced-motion preferences are respected. The diagrams are conceptual: pointer arrows and frame boxes do not imply a universal ABI or physical stack layout.

## Program builders

Learners tap a blank then a token, or drag a token onto a blank. Tokens can be reused; a selected blank can be cleared. Touch targets are at least 44px high. No mobile keyboard is required. Builders include full `main` programs with includes and any helpers. They state the intended operation and declarations, and grade the requested construction. They are guided exercises, not unrestricted code editors.

All 68 builders support mistake explanations, retries, XP, practice and resumable account drafts. Incomplete arrays and unknown tokens are rejected. Token and code text is escaped before rendering. The browser never executes learner C or evaluates learner input as JavaScript. Visual labs use separate predefined examples and do not modify puzzle answers.

## Language assumptions

Language checks use the [WG14 C11 committee draft N1570](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf), including integer conversions (6.3), expressions/sequencing (6.5), pointer arithmetic (6.5.6), `sizeof` (6.5.3.4), storage duration (6.2.4) and allocated storage (7.22.3).

Representation questions explicitly specify eight-bit bytes, widths, two's complement or byte order where needed. `sizeof(int)` and pointer widths are never assumed universal. Signed overflow, unsequenced conflicting accesses, invalid dereferences and use-after-free are taught as invalid operations rather than output-prediction puzzles. Standard library declarations are available in numeric snippets; allocation questions explicitly follow the success path. The program allocation exercise checks failure before use.

## Verification and deployment

Run `npm run validate`, `npm test`, and `node tests/c-browser.cjs`. The browser test uses a disposable database schema and account. It verifies all labs, token tapping and dragging, clearing, reload recovery, grading retries, XP, all six unit transitions and mobile/theme layouts.

`tests/c-native.test.mjs` compiles every numeric code snippet and completed program builder with GCC in C11 mode at `-O0` and `-O2`, then compares output with authored expected answers. The compiler check runs in Linux CI and is skipped on Windows. This verifies the defined examples on the CI implementation; it does not prove portability by itself. Implementation-specific questions are separate explicit-assumption exercises.

Recreate the coverage report with `node scripts/review-c-content.mjs`. Import locally using `npm run db:import`. The existing deployment pipeline validates the content, runs compiler checks and imports course manifests, modules and transcripts into PostgreSQL. User progress and accounts remain intact.
