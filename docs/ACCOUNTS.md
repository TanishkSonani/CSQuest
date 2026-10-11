# Personal accounts and progress

Login is required before opening the platform. Course content, transcripts and course APIs require a valid server session. Logout and session expiry return to the login screen. Open **My profile** from the top bar or sidebar after logging in. Legacy guest progress remains in the original browser keys for migration only. Creating an account can copy this browser's guest progress, settings and paused rounds; the checkbox makes that transfer explicit. Logging into an existing account loads that account's data and never merges unrelated guest data.

## Included features

- Username and passphrase registration, login, remembered sessions and logout.
- Private profile with automatically saved display-name edits and a character selection dialog opened from the avatar pencil icon.
- Per-user, per-subject levels, XP, mastery, mistakes, scheduled review, milestones and paused rounds.
- Shared daily goals, weekly activity, total XP, study days, longest streak, completed rounds, first-answer accuracy, focused lesson time and recent learning history.
- Overall completion percentages on the learning path, subject catalog, progress page and profile. A completed unique level counts once; practice XP and transcript import percentages do not advance course completion.
- Recovery-code password reset, password changes, replacement recovery codes, logout of all sessions and account deletion.
- Full personal learning export and reviewed backup import, alongside existing per-subject exports. Password credentials and sessions are never part of user exports.

The **Social** area adds friendships, summary comparisons, weekly leaderboards and leagues, XP races, shared goals and a friends-only learning activity feed. Friend requests require acceptance before comparisons are allowed. Public rankings are optional and show names, avatars and weekly competition XP. Passwords, recovery hashes, private answers, drafts and raw learning data remain private. See [friends and competitions](SOCIAL.md). The local server remains bound to `127.0.0.1:4173`; account recovery uses codes rather than email.

## Storage and sync

PostgreSQL is the private database. Users, hashed credentials, hashed sessions and saved learning fields have separate tables. Transactions lock the relevant user so concurrent app instances cannot overwrite another learner or accept stale revisions. Authentication attempt limits are also stored in PostgreSQL. Legacy `data/accounts/accounts.json` is an import source only; keep it as a migration backup. Learner browser caches remain scoped as `csquest:user:<id>:<key>` for retries; guest keys remain intact. Themes, goals, subject selection and drafts are saved in the database alongside course progress. See [PostgreSQL setup](POSTGRESQL.md).

Learning progress caches changes immediately and debounces server saves. Profile display-name changes save as you type, and avatar changes save when selected. The profile and mobile status line distinguish pending, saved, offline, expired and conflicting states. Temporary failures retain a retryable local copy. Revisions reject stale writes from another tab or browser; loading the latest server data first downloads the current browser copy. Interrupted requests that already committed are recognized without falsely reporting a conflict. Browser-scoped account data becomes authoritative only after authenticating the matching account.

First-answer accuracy and focused lesson time begin with the tracking update; existing XP, completions and study-day records remain available. Time counts only while a visible lesson has focus, excluding pause dialogs and background tabs. The UI shows the latest 20 round records; exports retain up to 500 recent records and aggregate daily statistics.

## Authentication implementation

Passphrases contain 15–128 characters and are salted with random bytes before scrypt derivation (`N=131072`, `r=8`, `p=1`). Session secrets and recovery codes are generated randomly; only their hashes are stored. Login cookies use HttpOnly and SameSite=Strict. Mutation endpoints require a custom same-origin request header, reject cross-origin origins and enforce JSON and size limits. Authentication attempts are rate-limited. Password changes and recovery revoke other sessions; account deletion revokes all sessions and clears that account's browser cache.

Implementation references: [OWASP password storage](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html), [OWASP session management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html). The personal learning approach is informed by [Duolingo's account and learning overview](https://blog.duolingo.com/duolingo-101-how-to-learn-a-language-on-duolingo/).

## Keyboard controls

Use number keys 1–9 to select a multiple-choice answer. Enter checks the selected answer or a focused numeric/hex input and continues after feedback. Native Enter still activates puzzle controls, buttons and account forms. Ctrl+Enter checks from any puzzle control without changing its value. Escape opens the pause dialog. Shortcuts ignore repeated key events and text composition.

## Verification

`npm test` includes account isolation, restart persistence, password changes, recovery rotation, deletion, invalid requests and stale-write rejection. `node tests/accounts-browser.cjs` verifies guest migration, profile updates, private progress, full exports, recovery, server outages, conflicts and cross-browser login with isolated test accounts. `node tests/keyboard-browser.cjs` verifies real numeric, hex, matching, choice and bit-builder keyboard behavior. Existing content, theme, motion and course-switching checks remain available.

`node tests/login-wall-browser.cjs` checks mandatory login, protected lesson and transcript URLs, logout, revoked sessions, mobile layout and theme controls. Only the login shell, its visual assets and subject names are public; teaching content requires a valid session.
