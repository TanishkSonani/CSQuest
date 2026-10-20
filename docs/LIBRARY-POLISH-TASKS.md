# Library and platform polish

## Completed foundation

- [x] Boot/Block allocations, actual VM measurements and upload preflight.
- [x] Four concurrent uploads, queue, resume/retries and global activity tray.
- [x] Admin/Learner roles, learner-only signup, user list and Library visibility grants.
- [x] Public file/directory links, bounded public scope and revocation.
- [x] Folder upload, duplicate policies, bulk operations, ZIP, search, favorites and previews.
- [x] Notes, lesson resources, synced playback bookmarks, reports and Admin replies.
- [x] Video auto-hide, configurable skips, speed slider, fullscreen/PiP icons.
- [x] Desktop/mobile Playwright checks, actual 5 GB + 4 GB transfer verification and deployment.

## Current requested work

- [x] Verify `tanishk` is a persisted Admin without changing learning records (production role checked; before/after learning-record fingerprints matched).
- [x] Allow Admins to create Admin accounts through an authenticated management screen; public signup always creates Learners.
- [x] Prevent deletion/demotion of the last Admin, including concurrent requests.
- [x] Keep the learning experience common to Admins and Learners; add Admin sidebar tools.
- [x] Add expanded/compact sidebar controls and persist the preference.
- [x] Keep every learning subject/content available to new Learners; hide Library until granted.
- [x] Add limited/full Library access with explicit server enforcement and matching UI.
- [x] Share full drives as well as files/directories publicly.
- [x] Add optional passwords, unlock flow, expiration and revocation for public pages.
- [x] Allow public uploads when enabled by an Admin; enforce the shared scope and original storage preflight.
- [x] Add public drive/directory caps in decimal GB + MB, count existing files and reserved uploads, display remaining capacity and reject oversized selections before transfer.
- [x] Give public pages the same Explorer presentation, within their shared scope.
- [x] Replace per-file action buttons with a contextual selection toolbar.
- [x] Add an interactive address bar, breadcrumbs and a real hierarchical folder tree.
- [x] Add a right-hand details pane so selection metadata stays beside the file list.
- [x] Polish list/grid views, selection, keyboard/touch interaction and current theme consistency.
- [x] Use a compact Google Drive-style upload panel instead of full-page transfer rows.
- [x] Add an Explorer right-click/keyboard context menu with selection actions and New → Directory / Text document.
- [x] Add a simple Notepad with plain-text editing, Save / Save as, unsaved-change protection and save-to-current-directory preflight; respect learner/public permissions and upload caps.
- [x] Improve audio and video layout, controls, accessibility and mobile behavior together.
- [x] Validate permissions, last-Admin races, password/scope protection, upload recovery and desktop/mobile layouts.
- [x] Commit, deploy, verify production and remove temporary QA records/files.

Production release: `fbc08c7d6af7ee60a316030c06eb14152840141d`. CI and deployment passed. Live Playwright checks covered password/cap settings, actual public chunk uploads and SHA-256 downloads, rejection before transfer, public/private Notepad, compact sidebar, limited read-only access, desktop/mobile layouts and link revocation. Temporary QA files, account and verification session were removed.

No Recycle Bin. Metadata/notes retain Undo; permanently deleted file bytes do not.

Original requirement (superseded by the later location read/write request): Limited and Full learner access were both read only; Limited covers Admin-selected locations, Full covers the whole Library. Public visitors may upload when the share permits it.

## Full-screen Explorer follow-up

- [x] Use the whole application viewport for Library, hiding learning statistics, sidebar and mobile learning navigation.
- [x] Add one top-left Back control returning to the previous platform page, retaining that destination after reload.
- [x] Give Users & access a people icon, distinct from the Settings gear.
- [x] Render folder icon tiles without boxes and remove file-type labels/columns from listings; keep type in Details.
- [x] Contain long filenames with list ellipsis and two-line grid names, preserving full names in tooltips and Details.
- [x] Validate list/grid layouts at six desktop/mobile sizes, public views, return navigation and existing Library operations with Playwright.
- [x] Deploy and verify live desktop/mobile layouts, long names and return navigation; remove temporary QA files and session. Release `4531998`; CI passed all 218 tests.

## Dolphin / 4Pane presentation and directory-share correction

- [x] Keep Details closed until explicitly opened, including after selection and refresh.
- [x] Bound private/public Explorer panes to the viewport; scroll contents, tree and Details independently while retaining the toolbar and status bar.
- [x] Add aligned disclosure controls, indented connector lines and text-only current-folder emphasis; reserve sidebar background highlighting for the active drive.
- [x] Retain the existing light/dark theme and file operations; validate large directories, long names and desktop/mobile/landscape with Playwright.
- [x] Make the header share the current directory when inside one, rather than silently targeting the drive. Show explicit scope and require acknowledgement for whole-drive links.
- [x] Regress password-protected Block directory sharing against sibling COA listing, file, archive, URL and upload escapes.
- [x] Deploy release `92a3d71` (219 CI tests passed) and verify live private/public pane scrolling and closed Details in both themes on desktop/mobile/landscape. Verify GUI-created password-protected directory links reject the real sibling COA directory's listing, archive and upload requests. Remove temporary QA directory/link and verification session.

## Library controls formatting

- [x] Normalize text inputs, dropdowns, checkbox sizing, focus states and responsive sharing-form alignment without changing operations.
- [x] Label and align the global search filters; match expandable Search and Storage details headers and format the storage table.
- [x] Align Back with the Library page title on desktop and mobile.
- [x] Validate locally with Playwright at five sizes in both themes, including search submission and sharing forms; retain the bounded-pane regression checks.

User requested commit and push only for this follow-up; deployment verification was intentionally not performed.


## Object drive, viewers and location permissions

- [x] Discover and configure existing private Stuff bucket; VM instance-principal IAM, local CLI config, credentials excluded from Git.
- [x] Object drive with default 20 decimal GB and persisted Admin GUI capacity.
- [x] Index existing bucket content in place, native multipart, bounded staging, streaming/ranges and quota preflight.
- [x] Improve image/PDF viewers and hide video title with controls.
- [x] Admin-created Library-only accounts, direct Library login and backend learning isolation.
- [x] Per-user drive/directory read-only or read/write permissions with inherited scope and revocation enforcement.
- [x] Local API and desktop/mobile Playwright validation; no deployment verification requested.


## VM applications

- [x] Native ARM64 Firefox on Boot and real VM Bash terminal with admin-only Boot launch icons.
- [x] Independent new tabs; password confirmation; launch only the chosen application.
- [x] Authenticated HTTP/WebSocket integration, session ownership and role rechecks.
- [x] Stop complete process groups on tab close, plus lease expiry for crashes/network loss.
- [x] Separate unprivileged identities, bounded homes, CPU/RAM limits and metadata/private-service restrictions.
- [x] Nginx WebSocket setup and idle-time Firefox security updates.
- [x] Local desktop/mobile Playwright and actual VM preview GUI/terminal/cleanup checks.
