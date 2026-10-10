# COA authoring

COA's existing authored content lives in `../content/lessons.js` and `../content/advanced-lessons.js`. The shared importer links that teaching to completed transcripts in `../data/transcripts`.

Add future authoring helpers or a generated-content builder here. A builder must export `buildReviewed(courseRoot)` and be registered as `builder` in `../course.json`. Shared UI and puzzle grading belong in `apps/web` and `packages/learning`.
