# Section podcasts

Each published course unit has one English conversation between Maya and Leo. The scripts introduce the section, cover every published topic in order, and end with a recap. The current inventory is 90 episodes across nine courses and 666 topics. TOC and Compiler Design remain unpublished and are excluded.

Episodes adapt the existing beginner explanations, glossary definitions, examples and worked question explanations. They supplement the interactive lessons. They are not independently edited recordings of a human instructor. Some worked examples also appear in course exercises. Listening never awards XP, submits answers or completes lessons.

The conversation builder avoids asking the same definition/example/mistake questions before every topic. Both hosts explain the actual material and share worked cases. It removes generated classroom prompts and app instructions from the spoken text, uses fresh sentences from shared foundations before repeating them, and rejects duplicate worked-question explanations within a section. Focused C and DBMS topic notes supply distinctions where the original family notes were too broad. Recaps deliberately revisit the section's first and last ideas. These changes improve the script; the voices remain synthetic, and sampled listening is still necessary to assess delivery.

## Player

- Start from the section audio card, the desktop section tools, or the Podcasts navigation page. The unit banner keeps its single guide button.
- Filter by course or search section/topic names. The selected list becomes the sequential queue.
- Play/pause, previous/next episode, skip 15 seconds, seek, and choose 0.75–2× speed.
- Select a topic chapter or transcript line to seek. The active speaker turn follows the audio; the Follow Audio checkbox can turn scrolling off.
- Topic chapters expand on demand. The entire episode detail card is one bounded scroll area, fitted between the app header and player; its title, chapters and transcript share that area without nested scroll traps. It supports touch, mouse wheel, scrollbar dragging, and keyboard Home/End, Page Up/Down and arrows. The player has a transcript shortcut at every screen size. Follow Audio automatically scrolls to the spoken dialogue during playback, after seeking, and when returning to the Podcasts page. Manual scrolling pauses following; selecting a chapter or timed line resumes following, and checking Follow Audio immediately returns to the current caption.
- Audio persists across app routes. Device media controls are supported where the browser provides Media Session.
- Playback position is stored locally under the signed-in account's ID; it is separate from learning progress.
- Missing audio is labeled as being prepared. The full conversation remains readable. Automatic playback stops at an unavailable section rather than silently skipping its topics.

## Authoring and rendering

```powershell
node scripts/build-podcasts.mjs
tooling/podcast/.venv/Scripts/python.exe scripts/render-podcasts.py --device cuda --precision fp32
```

The builder writes `courses/<subject>/data/podcasts.json`. These source scripts are versioned and imported into PostgreSQL by the regular course importer. Both array-based and object-based topic plans are supported.

The renderer writes MP3s and exact speaker/chapter timelines to `data/podcasts/<subject>/unit-<unit>-<hash>.mp3` and the corresponding JSON manifest. It uses two local Kokoro voices (`af_heart`, `am_michael`), mono 24 kHz audio and 64 kbps MP3. A complete MP3 is published atomically before its timeline manifest. Model files, cached speech fragments and generated media are ignored by Git. Changed scripts receive a different content hash; old audio is not accidentally matched to a new transcript.

Resuming the command reuses complete matching episodes and cached speech turns. `--subject coa --unit 0` renders one section. `--device cpu` selects the quantized CPU model, which is slower on the current PC. `--precision fp16` selects a smaller half-precision GPU export; full precision was faster on the current RTX 2050. The active render status is `runtime/podcast-render.json`; runtime logs are not course publication data.

Each render invocation snapshots the scripts at startup. Restart the renderer after rebuilding scripts. When changing pronunciation rules, bump `speechVersion` in the builder before rebuilding; this changes immutable media URLs. The server rejects stale version URLs and respects If-Range, preventing a seek from mixing old and updated audio bytes.

The initial Windows setup used a separate Python environment under `tooling/podcast/.venv`, with `kokoro-onnx==0.4.7`, `av==19.0.1`, `onnxruntime-gpu==1.26.0`, CUDA 12 runtime, cuFFT and cuRAND packages. The DLL loader also recognizes the existing transcription environment's CUDA 12/cuDNN 9 libraries. Do not install these packages into the running transcription environment. Newer ONNX Runtime GPU packages default to CUDA 13 and do not match this machine's existing CUDA 12 libraries.

Models and voice embeddings come from the [Kokoro ONNX model release](https://github.com/thewh1teagle/kokoro-onnx/releases/tag/model-files-v1.0): `kokoro-v1.0.fp16-gpu.onnx`, `kokoro-v1.0.onnx`, and `voices-v1.0.bin`. The CPU quantized model is also available from the [v1.1 exports](https://github.com/thewh1teagle/kokoro-onnx/releases/tag/model-files-v1.1). The [runtime](https://github.com/thewh1teagle/kokoro-onnx) is MIT licensed and the [Kokoro model](https://huggingface.co/hexgrad/Kokoro-82M) is Apache 2.0 licensed. Follow the [ONNX Runtime CUDA requirements](https://onnxruntime.ai/docs/execution-providers/CUDA-ExecutionProvider.html) when installing on another machine. No paid speech API or voice impersonation is involved.

## Production storage

The Oracle VM only serves generated audio; it does not need speech models, CUDA, Python speech packages or a GPU. Metadata and transcripts use PostgreSQL. MP3s and alignment manifests need durable media storage separately from Git releases:

1. Copy the generated `data/podcasts/` tree to `/srv/csquest-data/podcasts/` on the VM, preserving course subdirectories and both file types. Upload complete manifests after their matching MP3 files.
2. Make the directory readable by `csquest` and set `PODCAST_ROOT=/srv/csquest-data/podcasts` in the VM's private application environment.
3. Deploy the code and run the normal course import so the database has matching podcast scripts. Restart CSQuest after changing its environment.
4. Verify authenticated catalog and playback endpoints and seek through a real episode. Keep this media directory in the backup plan.

Until the generated media is copied, a code-only deployment intentionally reports audio as being prepared. The player does not fetch models or generate speech on visitor requests. Authenticated audio responses support single byte ranges and HEAD without loading an entire MP3 into the application's asset cache.

## Verification

`tests/podcasts.test.mjs` independently checks all section/topic coverage, chapter boundaries, authentication, missing-audio readiness and HTTP byte ranges. `tests/podcasts-browser.cjs` uses a small, quiet, original synthetic test tone to exercise real browser media decoding, transport controls, chapters, live transcript, sequential progression, route persistence, unchanged XP and responsive layouts. The test tone is not a podcast and is never offered in the real library.

Conversation checks also compare the generated manifests against the builder, reject the former recurring interview phrases and source placeholder sentences, and catch repeatedly read long passages within a section. They verify content structure and repetition, rather than claiming that conversational quality can be proven by a test.

Generated speech must additionally be checked for decoding, duration and voice clarity. Synthetic pronunciation of code, acronyms and formula notation can need editorial corrections in `speakable()` or the authored script; the on-screen transcript preserves the original notation.

The conversation revision passed five focused podcast tests and the responsive browser suite, including native touch scrolling. Its first replacement COA episode is 3:17: the complete MP3 decoded, every speaker/chapter boundary matched the transcript, and Edge played and sought the real audio without browser errors. The remaining replacements are rendered by the same resumable worker; an earlier completed recording does not count as ready when its script hash changes.

All 90 revised episodes finished rendering locally on 2026-10-18, totaling approximately 7 hours 23 minutes. Every current MP3 was fully decoded and checked for finite, non-silent audio, matching duration, speaker alignment, and chapter boundaries: 90 passed, none pending or failed. This is automated media validation, not a human listening review of every minute. Production media is stored outside Git and configured through PODCAST_ROOT, as described above.

During generation, a Windows sharing lock on the progress-file rename stopped the worker. JSON publication now retries transient permission failures; if only the advisory progress display remains locked, rendering continues. Failures to publish an authoritative episode timeline still raise an error. Six Python tests cover speech notation and these recovery behaviors. The worker resumed from cached speech without a separate watcher script.

The implementation pass ran 156 passing Node tests with two optional compiler-dependent skips, four focused podcast server/content tests, and three Python speech-notation checks. Edge checks cover 320×568, 390×844, 430×932, 768×1024, 1366×768 and 1440×900, in both themes. They include downloads, playback from the section audio card, readiness refresh without autoplay, and stopping at an unavailable next section. A real 4:55 COA neural-voice MP3 also played in Edge with chapter/transcript synchronization; the first full episode decoded successfully and a sampled recognition pass recovered its two-host opening. These sampled audio checks do not mean every minute of every generated episode has received human listening review.
