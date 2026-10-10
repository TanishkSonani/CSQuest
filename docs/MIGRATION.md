# Tooling migration history

The COA tools were moved from Windows Temp into CSQuest. File counts and byte totals were checked before and after the move; `courses/coa/data/migration-manifest.json` preserves the original migration record.

The repository root is now the canonical platform. The old staging copy, earlier UI editing helper, one-time migration/content scripts, and standalone Digital Logic UI are retained locally in ignored `tooling/archive`. They are historical artifacts and are not used to start or update the platform.

Browser-check dependencies live in `tooling/browser-qa`; its package manifest and lockfile are versioned, while installed dependencies are ignored. Downloaded transcription packages, model weights, and earlier analysis artifacts remain in ignored `tooling/transcription`. Completed imported transcripts and Digital Logic source transcripts are retained as course data.

Use `Start CSQuest.cmd` to start the shared platform, `npm test` for automated checks, and `node tests/browser.cjs` for browser checks. No course tools depend on Windows Temp. The app remains restricted to localhost.
