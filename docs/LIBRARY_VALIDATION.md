# Local Library validation

The local app runs at **http://localhost:4173/#library**. The earlier startup failure was reproduced in Playwright: an old Node process returned HTTP 404 for `/shared/compiler-models.js`. Restarting the verified CSQuest process fixed the failure without changing user data.

The automated suite passed **201 tests**, with two existing GCC-dependent checks skipped, including the storage diagnostic test. Destructive and fault scenarios use isolated PostgreSQL schemas and temporary files; they do not modify the owner's Library or learning records.

Validated backend scenarios:

- Fixed allocation limits; rejection of an entire oversized/duplicate batch before file content transfer; shared-disk reservation accounting; space loss after reservation and successful recovery.
- Concurrent upload reservations and duplicate chunk retries across app instances; a connection dropped midway through a chunk; lost committed responses; an actual worker process killed and restarted with exact downloaded bytes preserved.
- Truncated/missing files rejected without silently adding zero bytes; ready/incomplete file separation; expiration and cancellation cleanup; idempotent cancellation; empty files and inode exhaustion.
- Nested directories, subtree moves, concurrent moves without cycles, duplicate-name rollback, cross-drive move rejection, and nonempty folder protection.
- Authentication and owner access; same-origin mutations; unsafe names and uploaded HTML forced to download; Unicode filenames; hard-link protection; byte ranges, suffixes, invalid ranges, HEAD and downloads.
- File metadata, folder locations and child counts, exact byte sizes, dates, media MIME types, and no exposure of host directory paths. Account deletion with Library entries returns a clear conflict and retains data.
- The storage diagnostic reads actual filesystem statistics and changes no files or records. Production mode refuses to invent a block volume on an unverified filesystem.

Playwright covers desktop/tablet/mobile widths **1440, 1280, 1024, 768, 390, and 360 pixels**, in light and dark themes. Checks include desktop select/double-click, mobile single-tap, directory navigation, long names, dialogs, selected-file details, decimal KB/MB/GB units, and no horizontal overflow. It also checks preflight rejection without upload chunks, the shared podcast audio dock, unsupported-video fallback, recovery after lost browser transfer state, wrong resume-file rejection, and a folder deleted from another tab.

Native Edge recording supplies a real H.264 MP4 test file. The player is checked for all six requested speeds, play/pause/stop, keyboard control, volume/mute, and mobile dialog bounds. Video dimensions are read before playback through the Details panel.

Reproduce:

```text
npm.cmd test
node --test tests/library-storage.test.mjs
node tests/library-browser.cjs
node tests/library-real-life-browser.cjs
node tests/podcasts-browser.cjs
npm.cmd run library:storage
```

Screenshots and the structured report are under `qa-results/library-real-life`. They show isolated test data and deliberately small test allocations, not production capacity. `qa-results/library` contains the original Library and media screenshots.

Validation limits: the local Windows roots share one filesystem. Actual VM ext4 mounts, systemd write permissions, Nginx transfer settings, and uploaded MKV codec combinations require post-deployment verification. No transcoding is installed. Native MP4 playback and unsupported MKV handling are verified; arbitrary MKV playback is not guaranteed. Resume fingerprints sample the committed prefix and suffix, not the entire file. No finite test suite covers every possible hardware or network failure.
