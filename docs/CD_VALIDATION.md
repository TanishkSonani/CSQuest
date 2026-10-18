# Compiler Design validation and podcast preparation

The local draft covers 52 topic identities in ten sections: 156 lesson stages,
624 exercises and ten optional workshops. All 51 completed source transcripts
are imported. Source 008 is explicitly skipped for no detected speech and has
three independent practice stages with no fabricated transcript evidence.
The course remains planned; this audit does not deploy or publish it.

## Validation gates

| Gate | Result and scope |
| --- | --- |
| Source readiness and stable identities | All 156 stages ready; 153 source-backed stages and three disclosed independent practice stages; no source pending |
| Source evidence | Timestamped excerpts checked against imported segments; this is not a line-by-line human audit of all ASR |
| Foundations and assessments | Beginner terminology, explicit examples, objectives, model boundaries, four gradable items per stage; zero duplicate exact exercise identities |
| Independent model checks | Exhaustive small-input parser checks, known SLR/LR(1)/LALR conflict cases, arithmetic dependencies, CFG successors, independent reach-use-before-definition liveness checks and availability boundary checks |
| Full Node suite | 188 tests: 186 passed, two optional compiler-dependent checks skipped, zero failures |
| Python speech checks | 14 passed, including all CD speech plans, reported notation cases and stale/tampered-plan rejection |
| Course validator | All eleven manifests and content modules passed, including the unpublished CD draft |
| Deterministic rebuild | Curriculum, lessons, podcast scripts and speech plans retain their byte hashes after rebuilding |
| Every-lesson browser rendering | All 156 ready stages at 320, 390, 430, 768, 1366 and 1440px, light and dark; all 1,029 model states per theme at 320px and endpoints at the other sizes; note diagrams included |
| Actual learning flow | 23 teaching journeys through predictions, experiments and explanations into the quiz, one per model family |
| Optional workshops | All ten at 320, 390 and 430px (30 checks), including stepping, restart, invalid input feedback or grammar rejection; no completion prerequisite |
| Complete quiz widgets | All four widgets in ten advanced stages, six sizes and both themes: 40 widgets and 480 layout checks |
| Startup and login | Shared compiler dependency loads before login; private APIs require authentication; login uses the actual form |
| Subject switching | CD → COA → CD → C → CD preserves subject content with a local 15-second hung-load guard, not a production performance benchmark |
| Delayed and stale status | Held first response preserves a deliberately selected unit; injected older content cannot downgrade the audit bundle |
| Exit and restart | An unfinished lesson restarts at prediction and question one; completed XP and lessons remain saved |
| Unit continuation | Real completion of the first section’s final stage offers its optional workshop and opens the next section without requiring the workshop |
| Playback lifecycle | Play, pause, speed, restart, reduced-motion stepping and detached-player timer cleanup passed |
| Mobile and desktop shell | Calculator fits the viewport; study rhythm does not overlap; current-lesson controls return correctly after unit changes or scrolling; no unit-banner podcast overlap |
| Browser diagnostics | No browser exceptions, failed page requests or outer overflow observed in these passes |

CD remains unpublished during these checks. Browser fixtures enable its draft
only in disposable test schemas and accounts. The stale-response test injects
a higher bundle version in that fixture; actual lesson versions are unchanged
apart from the independently authored source-008 explanation revision.

## Corrections made during this pass

- Source-008 teaching now explains grouping directly. Recording/transcription
  provenance stays in source metadata and documentation rather than interrupting
  the learner’s conceptual explanation. Its affected stages/questions use revision
  two; IDs and progress rules stay stable.
- CD conversations include each topic’s worked example. The generator no longer
  substitutes a self-check for every other CD example. Existing subject scripts
  retain their previous content and version.
- Speech is compiled separately from readable transcript notation. Division,
  decimals, grouped powers, signed numbers, binary strings, grammar arrows,
  epsilon, phi, the `$` input-end marker, primed nonterminals and parser-family names have explicit spoken
  forms. Prose such as “matched/unmatched” and “machine-independent” retains its
  intended meaning instead of being interpreted as arithmetic.

## Podcast readiness and notation gate

TOC generation completed all **19 section episodes** before CD generation began.
CD has **ten two-host English conversations covering all 52 topic identities**,
with 300 dialogue turns and about 38 estimated minutes. This estimate is based on
text length, not a promise of the final audio duration.

`courses/cd/data/podcasts.json` holds readable conversations and chapters.
`courses/cd/data/podcast-speech.json` holds speech-version-three plans tied to
each script hash, speaker, source turn and speech digest. Every prepared turn is
re-normalized and validated before synthesis. A changed speech plan invalidates
the existing episode’s media digest; version-three voice caches do not reuse
legacy voice chunks. Existing version-two subjects retain their original
conversion and audio until their later correction pass.

When changing the spoken-notation contract after publication, increment the
speech version and rebuild script hashes as well as plans, so clients receive a
new audio URL. Unsupported versions fail validation rather than falling back to
legacy pronunciation.

| Written notation | Spoken form |
| --- | --- |
| `a/b` | a divided by b |
| `2.3` | two point three |
| `2^(n-1)` | two to the power of the quantity n minus one |
| `binary 1100` | binary one one zero zero |
| `1000 bytes` | one thousand bytes |
| `$` in a CD parsing example | the end marker |
| `-1011` in the binary-attribute example | minus one zero one one; the separately computed magnitude 11 remains eleven |

Compound arithmetic grouping is read with explicit parentheses when needed to
avoid swallowing the boundary. The converter supports a bounded notation set;
unknown Greek/mathematical marks or unexpanded numbers fail preflight rather
than silently losing their meaning. Binary literals need a local binary label
or explicit chapter hints; a decimal count is not guessed to be a bit pattern.

A two-voice diagnostic MP3 was rendered, decoded and checked for finite samples,
nonempty speech and exact agreement with its 60.884-second timeline. A separate
speech-recognition pass recovered the fraction, decimal point, grouped exponent,
binary example and grammar terminology. Speech recognition is a diagnostic,
not a claim of a human listening audit of every episode.

The generated section-three audio was also checked separately: its current
media digest matched the prepared plan and speech recognition recovered “the
end marker” in the FOLLOW explanation (`runtime/cd-end-marker-audit.json`).

The background renderer was then started for CD alone, using CUDA/FP32 and the
validated plans. It is resumable. No passive watcher or automatic regeneration
of the other subjects was added.

At the seven-episode checkpoint, all seven completed CD MP3/metadata pairs
matched the current speech plans, speaker order, turn counts and monotonic
chapter/turn bounds (30.4 minutes of audio). The remaining episodes continued
rendering; inspect the live status file for the current count.

## Reproduce and inspect

```powershell
node scripts/validate-courses.mjs
npm.cmd test
python tests/podcast_speech_test.py
node tests/compiler-browser.cjs
node tests/compiler-browser.cjs --quizzes-only
node tests/compiler-regression.cjs
node scripts/build-podcasts.mjs --subject cd --draft
python scripts/prepare-podcast-speech.py --subject cd
```

Browser results: `qa-results/compiler/results.json`,
`qa-results/compiler/quiz-results.json`, `qa-results/cd/regression-results.json`.
Tests: `runtime/compiler-final-tests.log`. Audio diagnostic:
`runtime/cd-notation-audit.json`. Current rendering status:
`runtime/podcast-render.json`; output/error logs:
`runtime/podcast-cd-render*.log`. Completed media is under `data/podcasts/cd`.

Model limitations remain documented in [Compiler teaching](COMPILER_TEACHING.md).
These checks do not claim an exhaustive mapping against every past exam question
or an independently implemented compiler for each of the 156 stages.
