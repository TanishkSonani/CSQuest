# COA Quest course plan

35 source lectures, 58.02 hours, six units, **105 authored microlevels and 420 challenges**. Three microlevels per lecture: learn the concept, manipulate or trace it, then complete an application checkpoint. Each microlevel contains a concept card, a flippable worked example, and four interactive challenges.

| Unit | Lectures | Levels | Practice format |
|---|---|---:|---|
| Computer foundations | 000–004 | 15 | Component matching, code ordering, instruction bit fields, repeated-addition simulator, I/O direction, memory and boot puzzles |
| Memory and system bus | 005–010 | 18 | Addressability calculations, byte placement, memory-chip layouts, bus routing, bank-access timelines |
| Machine language | 011–019 | 27 | Register/flag tracing, opcode trees, instruction formats, ALU simulation, branch stepping, GATE-style checks |
| Inside the CPU | 020–023 | 12 | Execution-step ordering, register-transfer traces, effective-address calculations, memory-reference counting |
| Cache adventure | 024–031 | 24 | Tag/index/offset builders, cache grids, loop traces, replacement policies, dirty-bit games, access-time calculations |
| Numbers in binary | 032–034 | 9 | Binary-point movement, sign/exponent/fraction tiles, normalization, range/precision calculations |

`courses/coa/content/curriculum.js` contains the 35-lecture progression. `courses/coa/content/lessons.js` and `courses/coa/content/advanced-lessons.js` contain the complete lesson catalog. The importer links authored content to timestamped transcript excerpts. These are original, formula-checked practice problems; source matching is not a claim of verbatim ASR accuracy or complete recovery of unspoken diagrams. Pipelining and interrupt/DMA topics mentioned in the introductory syllabus are not assumed to be covered by these supplied files.

## Learning loop

Start with one concept and a source timestamp. Mix recall, classification, manipulation, and application rather than four equivalent multiple-choice questions. Give immediate explanations. Requeue wrong answers until the learner answers every challenge correctly. Record first-attempt accuracy independently of completion. Award XP for learning and practice; maintain a daily goal and local-calendar streak. Unlock the next authored level after completion. Keep completed levels replayable. Add mistakes to a practice queue, and schedule correctly recalled items for another review the following day.

## Periodic transcription checks

A standalone local Node watcher checks the worker, `.done` markers, and source status every 60 seconds. It imports only completed transcripts into `courses/coa/data/transcripts`, writes an atomic progress snapshot, and logs state changes. The UI refreshes the snapshot every minute. The watcher continues while the browser is closed, as long as its process is running in the current Windows session. `Start CSQuest.cmd` restarts the shared services after a reboot. If the source drive disappears, already imported lessons remain available.

On completion the watcher writes `courses/coa/data/TRANSCRIPTION_COMPLETE.md`. It imports source text and links the already authored levels to excerpts; it does not run an AI agent. Sequential progression requires completing the preceding level. The complete catalog has been authored ahead of import.

## Content workflow once a transcript completes

Imported JSON retains the full timestamped text. Lessons state numerical assumptions explicitly. Every puzzle has an explanation; wrong answers are requeued until corrected. Practice Errors preserves answers and tracks two clean recalls before mastery. New mistakes reopen mastered items. Supporting source excerpts are available in lessons without video playback or a notebook page. See `docs/CONTENT_SOURCES.md` at the repository root for source policy and transcription limitations.

## Design and implementation

Use Duolingo-inspired principles with the CSQuest brand and Byte circuit mascot: rounded typography, chunky buttons, bright green actions, a winding learning path, short tasks, friendly feedback, and celebrations. Support mobile widths, keyboard operation, reduced motion, and local progress export/import. No copied Duolingo artwork.

Dependency-free browser JavaScript/CSS with a shared Node.js loopback server. Full transcripts stay local in the subject data folder. No video player or streaming endpoint is present. Light/dark mode has a persistent top-bar toggle and themed teaching cards, exercises, feedback, dialogs, and mobile navigation. Automated tests cover grading, unlocking, progress/streak logic, cache replacement, mistakes, and transcript imports. Microsoft Edge checks cover learning flows, mobile layout, and the shared puzzle types in both themes.
