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
- [ ] Commit, deploy, verify production and remove temporary QA records/files.

No Recycle Bin. Metadata/notes retain Undo; permanently deleted file bytes do not.

Confirmed: Limited and Full learner access are both read only; Limited covers Admin-selected locations, Full covers the whole Library. Public visitors may upload when the share permits it.
