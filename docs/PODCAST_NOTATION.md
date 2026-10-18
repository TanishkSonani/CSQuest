# Podcast pronunciation and player verification

Display text and synthesis text are separate. The live transcript retains
formulas, operators, decimal points and binary strings. The speech plans in
`courses/<subject>/data/podcast-speech.json` expand those constructs into words
for the voices; those expansions are not substituted into the transcript.

## Correction scope

The ten published subjects have 109 episodes and 4,444 dialogue turns. Their
replacement scripts use speech version four. Compiler Design retains its ten
verified version-three episodes and frozen pronunciation implementation. CD
remains planned; storing its media does not publish the course.

Version four handles fractions, grouped powers, decimal fractions, hexadecimal
digits, IP addresses/prefixes, recurrences, Boolean operators, C pointers and
arrays, database operators, and TOC language operations. Ambiguous binary patterns
have reviewed occurrence annotations in `config/podcast-pronunciation.json`,
anchored to exact source dialogue. Decimal quantities and memory addresses are
not globally interpreted as bits. Two ambiguous Digital Logic worked examples
also have clearer readable wording.

Speech plans are checked against script hashes, exact source turns, speakers,
normalization results and SHA-256 digests before synthesis. Completed recordings
are reused only when their speech digests match. Exact speech/voice cache matches
can be reused across compatible synthesis versions. Future pronunciation contract
changes must update the speech version and rebuild scripts and plans, giving
replacement recordings a new identity.

## Rebuilding and releasing

1. Run `node scripts/build-podcasts.mjs` for published subjects.
2. Run `python scripts/prepare-podcast-speech.py --subject <id>` for each subject.
   Draft CD scripts are generated separately with `--subject cd --draft`.
3. Run `python tests/podcast_speech_test.py` before synthesis.
4. Render with the existing local environment:
   `tooling/podcast/.venv/Scripts/python.exe scripts/render-podcasts.py --exclude-subject cd --device cuda --precision fp32`.
   Progress is recorded by the renderer itself, without a watcher.
5. Audit and package current media:
   `tooling/podcast/.venv/Scripts/python.exe scripts/audit-podcast-media.py --decode --archive runtime/podcast-release.tar`.
   Partial sets cannot be packaged. Use `--allow-pending` without an archive for
   a one-time progress check. `--subject <id>` can package a complete subject.
6. Upload the archive and `deploy/install-podcast-media.py` to the VM transfer
   directory using the existing administrator key and pinned SSH host identity.
   Run `sudo python3 install-podcast-media.py /path/to/podcast-release.tar` there.
   The installer verifies all checksums before installing MP3s, followed by their
   readiness metadata. Existing release media remains available.
7. Commit and push the tested code, scripts and plans. The GitHub workflow backs
   up production, imports matching content and switches releases. Do not restore
   the local account database over production learner records.
8. Run `node tests/deployment-podcasts.cjs https://130.162.38.87` after deployment.

The strict audit checks speech identities, every speaker/chapter boundary,
non-overlapping timings, finite decoded samples, nonzero energy and decoded
duration. Recognition spot checks supplement these gates; they do not mean every
minute has received human listening review.

## Player changes and checks

The player retains the theme, palette and typeface. It has consistent vector
controls, larger touch targets, immediate press feedback, a native seek control
with visible progress, current-topic context, and a sticky transcript toolbar
with a return-to-audio control. Manual reading pauses following; following returns
to the current spoken dialogue. Reduced motion, reduced transparency and higher
contrast preferences have explicit styles.

`tests/podcasts-browser.cjs` checks real browser media decoding, transport/speed,
chapters, sequential playback, route persistence, downloads, readiness refresh,
unchanged lesson progress, formula display, keyboard and native touch scrolling.
It covers 320, 390, 430, 768, 1366 and 1440 pixel widths in both themes.
`tests/podcast_speech_test.py` validates all replacement plans and independently
checks subject-specific notation regressions.

## Final local release gates — 2026-10-18

All 119 current recordings passed full decoding, speech-digest, speaker/chapter
timing and checksum checks: 109 corrected published episodes plus ten unchanged
CD recordings, with none pending. Combined duration is approximately 599 minutes.
The release manifest covers all 238 media/timeline files. This is automated
verification with recognition spot checks, not a human listening audit of every
minute. The source transcript keeps readable mathematical notation.

The application suite passed 186 tests with two optional compiler checks skipped;
all courses validated. All 17 Python speech/recovery tests passed. Playwright
passed six viewport sizes in both themes, native touch scrolling, keyboard
reading, formula display, playback controls, higher contrast, immediate press
feedback and reduced-motion behavior.
