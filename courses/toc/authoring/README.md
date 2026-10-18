# Theory of Computation authoring

Edit `topics.js` for topic-specific explanations, examples, misconceptions and
model settings. `build-reviewed.mjs` produces the curriculum, three stages per
topic and the coverage report from completed imported transcripts.

Run `node scripts/sync.mjs toc` from the repository root to import sources,
rebuild and update the configured local PostgreSQL content. Run
`node scripts/validate-courses.mjs`, `npm.cmd test` and
`node tests/toc-browser.cjs` before deployment.

The builder refuses incomplete source coverage. `--draft` can produce an
unpublished preview during authoring; do not deploy that partial output with
the full-course manifest. Do not substitute raw ASR formulas for the explicit
mathematical rules in the teaching models.

See `docs/TOC_TEACHING.md` for the teaching flow and simulator boundaries.
