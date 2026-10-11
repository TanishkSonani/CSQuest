# Frontend review — 11 October 2026

Reviewed Learn, Subjects, Practice, Practice errors, Course map, Progress, Social, Profile, Settings and the login screen. Kept the original mascot and learning interactions while making the interface easier to scan.

| Finding | Local improvement |
| --- | --- |
| Seven unlabeled mobile icons were hard to distinguish. | Four labeled primary destinations plus a keyboard-accessible More dialog containing every page. Current pages are announced to assistive technology. |
| Repeated profile, course, goal and mascot cards competed with page content. | Contextual sidebar with goals and study rhythm; quests on Learn. Subjects, Profile and Settings use the full content width. |
| White surfaces, heavy outlines and tiny pale text flattened the hierarchy. | Soft canvas, lighter card borders, forest-green actions, clearer headings and larger supporting text. Shared light/dark design tokens. |
| Phone controls and form text were cramped. | Larger fields and touch targets, labeled bottom navigation, safe-area spacing and responsive card layouts. |
| Learning path extended outside a 320px viewport. | Reduced the outer path offsets on narrow phones. |
| Lesson duration showed an unexpanded template expression. | Render the actual duration. |
| A challenge submission failure discarded the user's work. | Preserve the draft and selected invitees across redraws and retries; clear after success. Restore focus when possible. |
| Broken apostrophes appeared in account and progress copy. | Corrected affected headings and buttons. |
| Settings described account storage as belonging to one PC. | Explain account sync across devices. |
| Social statistics and navigation lacked hierarchy. | Distinct intro panel, readable stat cards, grouped section controls and clearer empty states. |

## Verification

- `node tests/frontend-review-browser.cjs`: nine authenticated routes at 1440, 900, 390 and 320px; no page overflow or JavaScript errors. Captures login, route and dark-theme screenshots in ignored `qa-results/`. Exercises mobile navigation and Escape dismissal.
- `node tests/social-browser.cjs`: two-user friend requests, comparison, leagues, challenge failure/retry without data loss, real lessons, shared goals, standings and notifications.
- `node tests/login-wall-browser.cjs`: authentication, account creation, logout/revocation, mobile layouts and theme controls.

Browser tests use temporary PostgreSQL schemas, leaving existing learner data untouched. This is a visual and functional review, not a complete assistive-technology accessibility certification. Additional research with real learners would help assess lesson-path length, terminology and onboarding choices.
