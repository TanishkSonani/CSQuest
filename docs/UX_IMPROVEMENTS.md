# Learning experience

CSQuest adapts two useful Duolingo patterns: a clear next step on the [guided learning path](https://blog.duolingo.com/new-duolingo-home-screen-design/) and purposeful workouts from the [Practice tab](https://blog.duolingo.com/guide-to-duolingo-practice-hub/). Features support self-paced computer science learning with existing lecture material.

## What changed

- Continue selects an unlocked level and opens the corresponding unit. A paused round takes priority, preserving answers, feedback, puzzle state and retries after reload.
- Practice offers a two-question warm-up, saved mistakes, scheduled recall and weaker completed topics. Recommended practice prioritizes due mistakes and older questions without repeating a question within its initial selection.
- Clean first answers schedule recall after 1, 3, 7, 14 and 30 days; an incorrect first answer resets the interval to one day. Scheduling starts when a round finishes. This is a simple recall heuristic, not a calibrated memory model.
- Learners choose 10, 20, 40 or 60 daily XP. Every available subject contributes to the shared daily goal and seven-day activity display. XP and topic mastery remain separate per subject.
- Daily quests reflect completed rounds, questions and XP. Milestones celebrate first steps, continued study and recoveries from mistakes; completion offers the next level directly.
- Incorrect answers show the correct result with the existing explanation. Optional concept refreshers reuse the current question's lesson material. Help never deducts XP.
- Subject search and availability filters support the growing catalog, including an explicit empty result state.
- Keyboard answer selection, focus restoration, a skip link, progress announcements, reduced motion and mobile layouts make the same learning flow easier to use across input methods.

## Local storage and recovery

Original `coa-quest-v1` and `dl-quest-v1` keys remain intact. Additional activity, review schedules and milestones live inside these progress records. `csquest-preferences` stores global goals and motion preferences. `csquest-drafts-<subject>` stores paused rounds per subject; learners can clear a paused round without deleting completed progress. Drafts are checked against canonical questions and ignored if source-backed question content has changed or stored data is invalid.

Login is required to access the learning platform. Legacy guest progress remains available for explicit migration during signup. Existing per-subject exports include the new progress fields; paused rounds and global preferences are not part of those exports. [Personal accounts](ACCOUNTS.md) provide server saves and full learning exports, including drafts and preferences. No social comparison or notification permissions are needed. The server remains restricted to localhost.

## Verification

`npm test` covers migration, recall scheduling, practice selection, cross-subject activity, unit selection and draft validation alongside the existing grading and content checks. `node tests/experience-browser.cjs` checks pause/reload recovery, partial puzzle state, keyboard feedback, practice completion, shared goals, milestones, catalog filtering and light/dark layouts at desktop and mobile widths. `node tests/browser.cjs` retains the established lesson, grading and dark-theme regression checks.

## Motion design

`apps/web/public/motion.js` handles short page entrances, question changes, puzzle selection, progress fills, explanation reveals and completion rewards. It tracks each round's previous visual state so selecting an answer does not restart the question entrance. Animations never delay grading, save operations or navigation. Transform and opacity effects use a consistent easing curve, with 140–260 ms interaction feedback and slightly longer entrances and celebrations.

`motion.css` adds button press responses, pointer-only card lifts, navigation and theme-icon transitions, and dialog entrances. Decorative floating stops after three cycles. The in-app reduced-motion setting and OS preference disable CSS and scripted motion, including dialog backdrops; switching either preference also finishes existing animations. `node tests/motion-browser.cjs` verifies these behaviors through real lesson interactions.


## Login, profile and progress polish

The login page pairs Byte with a responsive welcome area and a compact account form. Signup keeps the avatar gallery optional, and account recovery is available beside sign-in. Password visibility, Caps Lock feedback, in-memory form restoration on theme changes, accessible request errors and loading states support keyboard and mobile use. Passphrases and recovery codes are never added to persistent storage by these form drafts.

The profile includes an avatar hero, a direct edit shortcut, clearly labeled personal statistics, course-specific continue buttons, and recent history filtered by lesson or practice. An empty history offers a first learning step. Security and backup controls remain grouped separately.

My Progress starts with an actionable next step, then subject completion and subject statistics. A seven-day XP chart, daily goal and study rhythm explicitly combine all subjects. Milestones remain personal. Unknown accuracy displays an em dash, and historical activity is not invented when older progress lacks tracked rounds or focused time.

`tests/login-wall-browser.cjs` and `tests/accounts-browser.cjs` verify these flows, history filters, account isolation and both themes at 1440, 390 and 320 pixels. Reduced-motion preferences disable the new entrance and loading animations.
