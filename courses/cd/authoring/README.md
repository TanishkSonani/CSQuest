# Compiler Design authoring

`topics.js` maps the 52 source identities to standalone concepts in ten sections.
`assessments.js` supplies worked decisions and executable-model puzzles. The
builder produces three stages per identity with stable IDs, four exercises,
beginner definitions, optional written notes and interactive walkthroughs.

Run `node scripts/sync.mjs cd` to import completed sources, rebuild and update
the configured local database. Sources not imported remain unready; explicitly
skipped sources are disclosed separately from transcript-backed lessons. Source
008 has independent expression-tree practice, not a reconstruction of the named
exam question. Do not claim that it has a transcript.

The completed course is marked `available`. Publication checks use that real
manifest rather than overriding its status in a test server. Future unfinished
courses should stay `planned` until their publication gates pass.

Before publication run `node scripts/validate-courses.mjs`, `npm.cmd test`, and
`node tests/compiler-browser.cjs`. Review `data/teaching-coverage.json` for source
gaps. See `docs/COMPILER_TEACHING.md` for coverage and model boundaries.
