# Product polish checklist

## Baseline and direction

- [x] Read architecture, rendering, navigation, account forms, learning path, practice, progress, social, preferences, motion and audio implementations.
- [x] Inspect existing Git changes; preserve transcript work.
- [x] Run real PostgreSQL-backed application in an isolated test schema; capture login and nine authenticated routes at all six required sizes.
- [x] Review baseline screenshots: repetitive surfaces, oversized introduction, long onboarding, floating navigation covering phone content, low-contrast login action, corrupted progress copy.

Keep the local Nunito font, circuit identity and Byte SVG. Use evergreen for actions, lime for character and rewards, warm paper surfaces, and clear bordered controls. Preserve API contracts, storage, account security and subject routing. No new dependencies or artwork.

## Implementation and correction loop

- [x] Refine shared tokens, navigation, controls and screen composition.
- [x] Make learning introduction and onboarding compact and purposeful.
- [x] Improve practice, subject catalog, progress and account surfaces.
- [x] Prevent floating path control from covering initial actions.
- [x] Preserve audio preference; prevent overlapping notes and stop audio when muted.
- [x] Verify six viewport sizes, dark theme, reduced motion, forms, navigation, saved rounds, practice rewards and mascot feedback.
- [x] Inspect final screenshots, correct defects and rerun checks.
- [x] Run existing automated tests and course validation; review final diff.

Screenshots and machine-readable browser results: `qa-results/product-before/` and `qa-results/product-after/` (ignored generated artifacts).

## Verified results

- `npm.cmd test`: 130 tests, 128 passed, 2 compiler-dependent skips, 0 failures.
- `npm.cmd run validate`: all 11 course manifests and 1,461 available levels validated.
- `node tests/product-polish-browser.cjs`: actual Edge + PostgreSQL server, isolated disposable schema; login and nine authenticated routes at 320x568, 390x844, 430x932, 768x1024, 1366x768 and 1440x900. No horizontal overflow, broken images, uncaught page errors or unexpected failed HTTP requests. Primary learning actions are visible and unobscured.
- Product interactions: rejected login, catalog search and empty result, availability filters, switching to Digital Logic, unit dialog and Escape, mobile More navigation, sound persistence and keyboard focus, saved-round reload/resume/discard, correct truth-table feedback, completed two-question practice with 40 XP, mascot cheer, real AudioContext activation and replacement, muted practice, animated mascot and OS reduced-motion override. Dark settings and current path screenshots at all six sizes.
- `node tests/frontend-review-browser.cjs`: nine routes at four widths, path mascot overlap and resize checks, mobile menus and dark theme passed.
- `node tests/login-wall-browser.cjs`: authentication protection, form state, password visibility, rejection/retry, recovery navigation, login/logout and revoked sessions passed.
- `node tests/social-browser.cjs`: two-user friendship, comparison, leagues, real lesson XP, team goals, activity, notifications and responsive themes passed.
- JavaScript syntax checks and `git diff --check` passed. The project serves native modules directly and has no frontend compilation/build command.

## Corrections made from browser evidence

1. Removed the floating path shortcut over the first learning action; show it after scrolling past the current node. First-time learners see the introduction; returning learners retain progression scrolling.
2. Corrected login action contrast, bright feedback text, reward labels, dark unit-banner contrast and corrupted progress copy/empty accuracy display.
3. Retained focus on settings controls after rendering, and stopped active oscillators when muting.
4. Captured lesson dialogs as viewport screenshots so background page height does not obscure the result.

## Practical limits

Browser verification uses the installed Windows Edge in headless mode. Audio nodes and mute behavior were exercised with the real Web Audio implementation; perceived sound quality was not assessed through speakers. Touch-sized layouts were checked, but physical mobile keyboards, mobile Safari and live production hosting were not tested. The existing suite skipped two optional GCC-based checks. No deployment was requested or performed. Original transcript changes remain untouched.

## Production release verification (2026-10-16)

The deployment review reran course validation, the 130-test suite (128 passed, two compiler-dependent skips), the six-viewport product browser checks, authentication checks and social checks. The release also adds an explicit CI syntax check for `experience-ui.js`.

Review found that progression scrolling depended on a completed node in the visible unit. At the beginning of a new unit there are no such nodes, so returning learners could remain at the introduction. Scrolling now recognizes a current lesson beyond lesson zero. An isolated PostgreSQL-backed browser regression verifies automatic positioning at the first lesson of Unit 2 and the scroll-back control after scrolling below it.

The subject-switch regression also caught a large-scroll edge case: an intersection observer can miss a node skipped entirely between frames. The return control now measures its position on scroll and resize, using one animation frame and abortable listeners cleaned up when the path unmounts. The browser test waits for scheduled positioning before testing a deliberate scroll to the bottom.

The production app, PostgreSQL, nginx HTTPS endpoint and mounted data volume were checked before release. Publication uses the existing GitHub Actions test and deploy workflow, which exports a database backup before migrating/importing content and switching the service to the new release. Raw transcription output and unrelated local completion-marker changes are excluded from this release.
