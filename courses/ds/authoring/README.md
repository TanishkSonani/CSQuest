# Data Structures authoring

The first published batch covers source IDs 0–39: linked lists, recursion, logarithms, asymptotic analysis, loop counting, search cases, stacks and queue basics. It contains 120 levels, 480 exercises and 29 visual lab models.

`topics.mjs` contains original teaching, complete problem statements and answer banks. `build.mjs` requires completed, imported transcripts, selects timestamped source evidence, generates the browser content and sets `publishedLectureCount`. The recording inventory remains 101; that total is not a claim that every topic is playable.

Run `node courses/ds/authoring/build.mjs`, `npm run validate`, `npm test` and `node --env-file=.env tests/ds-browser.cjs` after editing content. Run `npm run db:import` to publish locally. The deployment pipeline imports the reviewed content into PostgreSQL without replacing learner accounts.

The transcription worker continues independently. New transcripts do not automatically become ready lessons: review their topics, add original teaching and exercises, extend the contiguous curriculum/unit ranges in the builder, then rebuild and validate. This preserves existing lesson IDs and avoids empty or unreviewed challenges.

`packages/learning/ds-models.js` defines deterministic walkthrough states. `ds-labs.js` renders them and provides touch/keyboard controls, replay and optional playback. Graded exercises use the existing choice, numeric, matching and ordering mechanisms; visual exploration does not change graded answers.
