# Interactive lessons

Every currently available lesson in COA, Digital Logic, C, Data Structures,
Algorithms and Aptitude now has a guided learning sequence before its quiz.
The 1,461 lessons provide 4,383 teaching stages:

1. **Meet the idea:** a short introduction, a visual and tappable definitions.
2. **Explore it:** change an input, step through a model or focus parts of a
   diagram. The existing subject simulators provide the interactive examples.
3. **Connect the steps:** reveal the explanation in steps, with a visual and a
   concrete example, then start the quiz.

Written notes are optional and collapsed on entry. Definitions appear before
the original notation in expanded notes. Written explanations also remain
available during guided learning. Definitions are selected by subject and
lesson content; shared terminology has plain-language explanations.

## Behavior and accessibility

- Teaching stages do not award XP, spend hearts or mark a lesson complete.
- Pausing saves the teaching stage and interaction gate. Quiz progress retains
  the existing grading, retries and completion behavior.
- New stages reset the dialog scroll and focus their heading. Controls support
  keyboards and narrow phone layouts.
- Motion uses the current theme and respects reduced-motion preferences.
- Practice rounds retain their direct quiz flow and optional refresher.
- Existing completed lessons, progress keys and user accounts are preserved.
  An old paused quiz restarts when its question signature has changed, using
  the existing draft validation. Old mistake answers are labeled when their
  question revision no longer matches.

## Content and duplicate audit

Run `node scripts/audit-learning.mjs` to regenerate
`docs/reports/learning-audit.json`. The audit checks all available lessons for
foundations, beginner definitions, teaching stages, visual models, references
that require a lecture, and repeated question identities. Question identity
ignores answer-option rotation and cosmetic scenario introductions.

The review revised **890 Algorithms questions and one COA question**. There
are no repeated questions within a lesson, within its topic, or in the two
preceding lessons. Some questions recur farther apart in other course units;
the report lists these separately. This is not a claim that every exercise
across an entire course is globally unique.

The terminology bridge improves the rendered notes across all six courses.
The audit found no flagged lecture-dependent wording in the current notes;
these automated checks and representative browser reviews do not replace a
line-by-line editorial review of every explanation.

Algorithms variants contain explicit problem inputs and answers. Independent
tests check selected answers using brute-force solutions. The Algorithms
content build applies the same deterministic duplicate review, so rebuilding
does not restore the adjacent duplicates. `node scripts/revise-algo-quizzes.mjs`
rebuilds just this review and its change report.

## Verification

- `npm test` and `npm run validate`
- `node --env-file=.env tests/journey-browser.cjs`
- `node --env-file=.env tests/c-browser.cjs`
- `node --env-file=.env tests/algo-browser.cjs`
- `node --env-file=.env tests/lesson-tools-browser.cjs`
- Subject-switch, social, product-polish and unit-continuation browser checks.

The guided browser check exercises early, middle and final lessons in all six
courses at 320px, 390px and desktop widths, interaction gates, reduced motion,
pause/resume and absence of unearned rewards. The shared-module startup test
also checks that the new dependency is accessible before authentication.

No database schema change is required. Import the revised course content with
`npm run db:import` after loading the database environment, and restart the Node
server to pick up the shared-module allowlist change. The production pipeline
performs a database backup, imports course content, restarts the service and
checks HTTPS after each tested commit on main.
