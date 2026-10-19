# CSQuest Library implementation plan

Status: implemented in the working tree; see [Library usage and deployment](LIBRARY.md). The accepted allocations are **35 GiB Boot** and **125 GiB Block**. These caps apply in addition to live free-space checks and protected platform buffers. Audio reuses the podcast player; video uses browser playback with VLC-inspired controls and no server transcoding. The design notes below record the original plan; the implementation guide describes delivered behavior.

## Experience

Add **Library** to desktop and mobile navigation, using the existing CSQuest theme and account session. Its landing page resembles Windows File Explorer's **This PC** view, with two independent drive cards:

- **Boot storage**: filesystem total, platform/system/other usage, library usage, protected free-space buffer, and available space for new files.
- **Block storage**: the same breakdown, measured independently.

Each card shows a capacity bar and a prominent **Available for files** number. Opening a card shows only that drive's library folders. Include breadcrumbs, back navigation, list/grid views, name/type/size/date columns, sorting, search within the library, new folder, upload, download, rename, and delete with confirmation. File selection must work with keyboard and touch. Desktop may use double-click; mobile uses a visible Open action.

A top-level **Refresh storage** button fetches new server measurements for both volumes and shows **Last checked**. Refresh retains the current folder, selection, and playback. A failed request retains the previous measurement with a stale indicator. A missing drive displays **Unavailable**, never zero capacity or a fabricated estimate. Refresh directory contents separately when needed.

## Existing deployment and scope

Repository deployment documentation describes a 50 GB boot volume and a separate 150 GB block volume mounted at `/srv/csquest-data`. These are documented provisioning sizes, not verified current free capacity. Measure the production VM before implementation rollout.

The block volume already contains PostgreSQL, deployment releases, and database backups. Boot storage contains the OS, repository, installed software, and other host data. Exclude all existing non-library consumption on both volumes, rather than subtracting only the CSQuest repository.

Proposed persistent roots:

| Drive | Library root |
| --- | --- |
| Boot | `/var/lib/csquest-library` |
| Block | `/srv/csquest-data/library` |

Create these directories explicitly and give the service user access only as needed. Never put uploads inside a release directory, public web assets, course folders, or database directories. Deployment and rollback must preserve library content.

Initial access assumption: this is the platform owner's private library. Authorize a configured immutable account ID; do not grant access to every registered learner. If learner libraries are added later, introduce private namespaces and per-account quotas before enabling them. Host capacity details remain owner-only.

## Capacity accounting

Read live filesystem statistics under the actual `csquest` service identity using Node's `fs.statfs`. Measure each configured root's underlying filesystem and verify mount identity. If the block mount disappears, disable its operations instead of writing into the boot filesystem at the same path. If both roots resolve to one filesystem during local development, identify that shared capacity and never present it as two independent disks.

For each drive:

```text
T = filesystem capacity in bytes
A = filesystem bytes available to the service user
L = allocated bytes belonging to this drive's library
R = configured protected free-space buffer
P = outstanding upload commitments not already reflected in filesystem usage

System/other/unavailable = max(0, T - A - L)
Available for new files = max(0, A - R - P)
Current usable library budget = L + available for new files
```

Use filesystem allocation for capacity breakdowns, including partial uploads and metadata overhead; show logical file sizes in the file list. Filesystem-reserved blocks and unrelated host files belong in the excluded amount. Existing platform usage is already excluded by `A`; do not subtract it again. Show reserved headroom and upload commitments capped by available space when drawing bars so categories never exceed total capacity.

Proposed starting buffers: boot `max(5 GiB, 10% of filesystem capacity)`; block `max(15 GiB, 10%)`. Confirm these against measured database growth, deployment backup size, and release preparation requirements. They are configurable starting values, not guaranteed sufficient capacity. The usable library budget can shrink as platform resources grow.

Store exact byte counts and format consistent GiB/TiB labels. Refresh rereads filesystem availability and reconciles library allocation. Keep inventory accounting efficient; avoid a recursive whole-server scan. Report the timestamp of any cached allocation subtotal while reconciliation runs.

Shared filesystems can change outside the application, so application reservations cannot guarantee exclusive space. Recheck capacity during transfers, stop accepting data before the protected threshold, handle disk-full errors, and retain operational headroom.

## Upload, download, and playback

Upload to the chosen drive using a progress queue with cancel, retry, and resumable chunks for large files. Create temporary data on that same drive; stream chunks to disk without buffering entire files in RAM. Track upload ownership, expected length, committed space, offset, and expiry in PostgreSQL. Reserve space transactionally across simultaneous uploads; count only unconsumed commitments in `P`.

Validate each chunk and final byte count, then publish by atomic rename within the filesystem. Incomplete uploads do not appear as completed files. Expired and canceled transfers release reservations and remove their partial files. Reconcile interrupted operations after restart. Use generated storage IDs; preserve the user's filename as metadata and never silently overwrite duplicates.

Downloads stream the original bytes with an appropriate attachment filename. Audio and video open in an embedded player with play/pause, seek, volume, fullscreen for video, and these exact speed options:

**0.5× · 0.75× · 1× · 1.5× · 2× · 3×**

Remember the user's selected speed and playback position. Reuse and extend the existing podcast range-request handling to support authenticated `GET`/`HEAD`, `206` partial responses, and `416` invalid ranges. Test seeking near the end of large files. Browser-compatible formats play directly; unsupported codecs show a clear message and a download action. Automatic transcoding is outside the first release.

## Server, database, and deployment changes

- Add `src/platform/library.mjs` for authorized file operations and `src/platform/storage.mjs` for volume validation, measurements, and reservations.
- Add `apps/web/public/library.js` and `library.css`; integrate the route in `app.js` and assets in `index.html`.
- Add migration-backed folder, file, and upload-session records: owner, drive ID, parent, display name, opaque storage key, byte size, media type, status, and timestamps. Keep binary content on disk, not in PostgreSQL. Prevent deleting a nonempty folder in the first version.
- Provide `/api/library/storage`, folder listing and creation, upload session/chunk/finalize/cancel routes, and file stream/download/rename/delete routes. Storage refresh must bypass cached responses.
- Adjust `server.mjs`: its current method gate rejects non-GET library operations. Dispatch library requests only after authentication and enforce an explicit method allowlist plus the existing same-origin mutation protections.
- Configure roots, owner ID, per-drive buffers, chunk limits, maximum file size, and upload expiry through environment settings.
- Update systemd: `ProtectSystem=strict` requires explicit `ReadWritePaths` for the two library roots. Verify access under the actual service sandbox.
- Update the active Nginx configuration and deployment templates. The current template limits requests to 4 MB. Set library chunk limits and timeouts deliberately, and disable proxy request buffering on upload routes to prevent large temporary uploads consuming boot space.

Constrain every filesystem operation to the configured library roots, reject traversal and symlinks, and check authorization for streaming as well as metadata operations. Never render uploaded HTML/SVG as trusted same-origin content. File types without a supported safe preview download as attachments. Handle filesystem errors separately from database errors so the UI reports the actual problem.

Library files require their own backup and restore procedure: the existing database dump contains metadata only. Back up binaries and metadata consistently, document recovery, and keep important copies off the VM. Do not silently delete existing platform backups or releases to create upload space.

## Delivery sequence and acceptance

1. **Storage foundation:** read-only VM inventory, root/mount validation, owner authorization, live capacity endpoint, buffers, and two drive cards with refresh.
2. **File manager:** schema, folders, resumable uploads with reservations, downloads, rename/delete, and restart reconciliation.
3. **Media:** authenticated range streaming, audio/video player, all six speeds, resume position, and unsupported-format handling.
4. **Release:** service/proxy configuration, backup documentation, focused automated checks, desktop/mobile browser verification, then deployment through the existing pipeline when implementation and deployment are requested.

Acceptance checks must demonstrate independent real filesystem measurements; correct exclusion of platform usage without double subtraction; refreshed figures after file and external disk changes; concurrent-upload limits; cancellation/restart cleanup; correct unavailable behavior on a missing block mount; owner-only access and traversal rejection; byte-identical downloads; seeking and all six speeds; and persistence across application release changes.

## Technical references

- [Node filesystem statistics](https://nodejs.org/api/fs.html#fspromisesstatfspath-options)
- [HTTP range requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Range_requests)
- [Nginx proxy request buffering](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_request_buffering)
- Existing project context: `docs/ORACLE_CLOUD.md`, `docs/PIPELINE.md`, `deploy/csquest.service`, `deploy/nginx.conf`, `src/platform/server.mjs`, and `src/platform/podcasts.mjs`.
