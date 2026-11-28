# Adding and publishing subjects

Each subject has a permanent ID, a `course.json` manifest, a curriculum and designed lessons. Use the existing manifest schema in `config/course.schema.json`. Keep subject IDs, lesson IDs and `storageKey` values stable to preserve learner progress.

A new subject begins with `status: "planned"`. Set it to `available` only when its curriculum, teaching, exercises and required content are ready. Existing subjects provide examples of the supported module structure and shared puzzle types.

Publication checks should cover lesson navigation, grading, saved progress, keyboard interaction, mobile layouts and both themes. Follow the [lesson design standards](CONTENT_AUTHORING.md).

```powershell
npm run validate
npm test
npm run db:import
```

The import command publishes course content into the configured database while preserving existing users. Use the relevant subject browser checks under `tests/` for interactive verification. Normal production publication follows the [deployment pipeline](PIPELINE.md).
