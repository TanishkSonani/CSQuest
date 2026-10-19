# Local Library validation

Sharing checks cover owner-only member/link management, Viewer/Editor privileges, one shared owner inventory, cross-instance access, revocation while a chunk is arriving, hashed public tokens, no-login file/range/HEAD access, link expiry/replacement/revocation, deletion cascades, and private-file isolation. Playwright verifies management on desktop/mobile, Viewer controls, Editor uploads, clearing a revoked member's file list, anonymous file downloads, escaped filenames, and reuse of the public audio/video players. Reports/screenshots are under `qa-results/library-sharing`. The queue test releases only one of four active transfers and confirms the next queued file starts while the other three remain active, then appends another selection and verifies all contents.

The local app runs at **http://localhost:4173/#library**. The earlier startup failure was reproduced in Playwright: an old Node process returned HTTP 404 for `/shared/compiler-models.js`. Restarting the verified CSQuest process fixed the failure without changing user data.

The automated suite now passes **206 tests**, with two existing GCC-dependent checks skipped, including the storage diagnostic test. Destructive and fault scenarios use isolated PostgreSQL schemas and temporary files; they do not modify the owner's Library or learning records.

The parallel-transfer update additionally passed a real **5,000,000,000-byte** and **4,000,000,000-byte** concurrent upload/download soak: both complete download SHA-256 hashes matched, resume offsets above 2 GB were preserved across server instances, and tail byte ranges beyond 4 GB were correct. Local uploads finished together in about 90 seconds and streaming download verification in about 48 seconds, with peak Node RSS of 298 MB. These are local integration measurements, not expected Internet speeds. The report is `qa-results/library-large-transfer/report.json`; all 9 GB of temporary data were removed after the check.

Validated backend scenarios:

- Fixed allocation limits; rejection of an entire oversized/duplicate batch before file content transfer; shared-disk reservation accounting; space loss after reservation and successful recovery.
- Concurrent upload reservations and duplicate chunk retries across app instances; a connection dropped midway through a chunk; lost committed responses; an actual worker process killed and restarted with exact downloaded bytes preserved.
- Truncated/missing files rejected without silently adding zero bytes; ready/incomplete file separation; expiration and cancellation cleanup; idempotent cancellation; empty files and inode exhaustion.
- Nested directories, subtree moves, concurrent moves without cycles, duplicate-name rollback, cross-drive move rejection, and nonempty folder protection.
- Authentication and owner access; same-origin mutations; unsafe names and uploaded HTML forced to download; Unicode filenames; hard-link protection; byte ranges, suffixes, invalid ranges, HEAD and downloads.
- File metadata, folder locations and child counts, exact byte sizes, dates, media MIME types, and no exposure of host directory paths. Account deletion with Library entries returns a clear conflict and retains data.
- The storage diagnostic reads actual filesystem statistics and changes no files or records. Production mode refuses to invent a block volume on an unverified filesystem.

Playwright covers desktop/tablet/mobile widths **1440, 1280, 1024, 768, 390, and 360 pixels**, in light and dark themes. Checks include desktop select/double-click, mobile single-tap, directory navigation, long names, dialogs, selected-file details, decimal KB/MB/GB units, and no horizontal overflow. It also checks preflight rejection without upload chunks, the shared podcast audio dock, unsupported-video fallback, recovery after lost browser transfer state, wrong resume-file rejection, and a folder deleted from another tab.

Native Edge recording supplies real H.264 MP4 test files in portrait and landscape aspect ratios. The player is checked for all twelve speeds from 0.25× to 3×, play/pause/stop, keyboard control, volume/mute, five mobile viewport sizes in both orientations, and fullscreen. Custom seek intervals of 3 and 600 seconds, invalid interval handling, start/end clamping, and saved settings are verified. Video dimensions are read before playback through the Details panel. Reports and screenshots are under `qa-results/library-video-mobile`.

Reproduce:

```text
npm.cmd test
node --test tests/library-storage.test.mjs
node tests/library-browser.cjs
node tests/library-real-life-browser.cjs
node tests/library-parallel-browser.cjs
node tests/library-video-mobile-browser.cjs
node tests/library-large-transfer.mjs
node tests/podcasts-browser.cjs
npm.cmd run library:storage
```

Screenshots and the structured report are under `qa-results/library-real-life`. They show isolated test data and deliberately small test allocations, not production capacity. `qa-results/library` contains the original Library and media screenshots.

Validation limits: the local Windows roots share one filesystem. Actual VM ext4 mounts, systemd write permissions, Nginx transfer settings, and uploaded MKV codec combinations require post-deployment verification. No transcoding is installed. Native MP4 playback and unsupported MKV handling are verified; arbitrary MKV playback is not guaranteed. Resume fingerprints sample the committed prefix and suffix, not the entire file. No finite test suite covers every possible hardware or network failure.

Post-deployment HTTPS checks passed on release `08101f0`: four parallel files on each real drive, 8 MiB chunks plus a final partial chunk, matching full downloads, byte ranges, metadata, owner authorization, and desktop/mobile navigation with no browser errors. Temporary verification files/folders and the verification session were removed. After testing BBR on the VM's kernel, the 9.4 MB full downloads completed in 13.149 seconds (Boot) and 6.78 seconds (Block); the preceding CUBIC attempt transferred about 0.73 MB before the 30-second client deadline. BBR is persisted separately from application deployments, with previous settings retained for rollback. These measurements describe one connection from the test location, not a guaranteed transfer rate. The live report is `qa-results/library-live/report.json`.
