# Data Structures authoring

The published course covers source IDs 0–72: linked lists, recursion, complexity, stacks, circular and linked queues, expression processing, binary trees, traversals, reconstruction, BSTs, AVL rotations and heaps. It contains 219 levels, 876 exercises and 60 visual lab models across 11 units. The original 120 levels retain their IDs and teaching data.

`topics.mjs` contains original teaching, complete problem statements and answer banks. `build.mjs` requires completed, imported transcripts, selects timestamped source evidence, generates the browser content and sets `publishedLectureCount`. The recording inventory remains 101; that total is not a claim that every topic is playable.

Run `node courses/ds/authoring/build.mjs`, `npm run validate`, `npm test`, `node --env-file=.env tests/ds-browser.cjs` and `node --env-file=.env tests/ds-advanced-browser.cjs` after editing content. Run `npm run db:import` to publish locally. The deployment pipeline imports the reviewed content into PostgreSQL without replacing learner accounts.

The transcription worker continues independently. New transcripts do not automatically become ready lessons: review their topics, add original teaching and exercises, extend the contiguous curriculum/unit ranges in the builder, then rebuild and validate. This preserves existing lesson IDs and avoids empty or unreviewed challenges.

`packages/learning/ds-models.js` and `ds-advanced.js` define deterministic walkthrough states. `ds-labs.js` renders them and provides touch/keyboard controls, replay and optional playback. Trees label depth; heaps label their zero-based array indices. Small trees fit phones and larger diagrams allow horizontal panning. Reduced-motion settings suppress animation. Graded exercises use choice, numeric, matching and ordering mechanisms; input diagrams show the starting state rather than the solution, and visual exploration does not change graded answers.

`topics-extra.mjs` contains the second batch's standalone teaching, explicit index/height conventions and exercise banks. `tests/ds-advanced.test.mjs` checks reconstruction, ancestral BST bounds, all four AVL cases, postfix operand direction and heap operations against independent expected results and randomized sort comparisons. Browser checks cover all lab kinds, unit boundaries, phone layouts, saved answers and course completion.
