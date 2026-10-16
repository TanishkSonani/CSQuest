# Operating Systems authoring

`topics.js` contains the reviewed, beginner-first teaching outline for each completed OS transcript. `build-reviewed.mjs` generates three stages and four distinct exercises per recording, with timestamped evidence from the transcript. The generated course includes 39 recordings, 117 lessons and 468 questions.

The OS explorers in `apps/web/public/os-labs.js` cover processes, fork/exec,
threading, scheduling, IPC, synchronization, address translation, replacement,
TLBs, Banker’s algorithm and file systems. Their animations follow the app theme
and honor reduced-motion settings.

Rebuild and publish locally with `node --env-file=.env scripts/build-lessons.mjs os`.
Check the lessons with `npm run validate`, `node --test tests/os-lessons.test.mjs`
and `node --env-file=.env tests/os-browser.cjs`.
