# Friends and competitions

Open **Social** in the sidebar or mobile navigation after logging in. The feature uses PostgreSQL and works across independent learner accounts and browser sessions. No sample friends or invented rankings are added to your database.

## Friends and comparisons

Search for a learner by username (at least three characters) and send a friend request. Incoming requests can be accepted or declined; outgoing requests can be cancelled. Accepted friends can be removed. Both learners see the friendship after acceptance.

Accepted friends can compare lifetime XP, weekly competition XP, completed levels, course completion, current streak, study days, completed rounds, first-answer accuracy and focused study time. The comparison also shows each course separately. Only summary metrics are returned; account credentials, saved answers, drafts and raw progress records are excluded. Comparisons stop being available when the friendship is removed.

Social remembers each learner's browser time zone so their summary streak uses their own local study dates. Weekly competition boundaries remain UTC.

Discovery is enabled initially so other logged-in learners can find a username. Turn it off under **Friends → Your social preferences** to stop appearing in search and receiving new requests. Existing accepted friendships remain intact.

## Weekly rankings and leagues

The Friends board contains you and your accepted friends. The Community board contains only learners who have opted into leagues/community ranking. Rankings show the top 100 entries plus your own position if lower. Equal XP shares a rank.

Public participation is disabled initially. Enable it in Social preferences or choose **Join the leagues**. Public boards show display names, usernames, avatars and weekly competition XP.

Weeks begin Monday at 00:00 UTC. Leagues have five tiers: Bronze, Silver, Gold, Sapphire and Diamond. Each weekly group contains up to 30 learners. A group needs at least five learners for promotion and demotion: the top 20% of ranks with positive XP move up one tier and the bottom 20% move down one tier. Equal XP shares a rank; all-zero groups do not promote anyone. Tiers stop at Bronze/Diamond. The previous week's result is applied once when a learner opens the next week's league. Without five participants, learners retain their tier.

## Challenges and shared goals

Invite 1–10 accepted friends to a named challenge lasting 1, 3 or 7 days:

- **XP race:** highest scored XP when time expires wins; tied leaders share the result.
- **Shared goal:** combine participants' scored XP toward a goal of 100–10,000 XP.

The creator joins immediately. Invited friends choose to join or decline. They can view an invitation's standings before deciding. Only XP saved after a participant joins and before the end time counts. Leaving freezes that learner's contribution; the creator can cancel an active challenge. Completed and cancelled challenges remain visible as recent results.

Challenge details require membership, including an invitation. Uninvited users cannot read or join a challenge, invite arbitrary users, change its settings, or cancel someone else's challenge.

## Scoring and activity

Personal lifetime progress is preserved independently of competition scores. The competition ledger starts when a new round is successfully saved to the server. Registration imports, account backup restores and subject backup restores never create competition XP.

The server validates new round reports against XP increases and the existing round formula (20 completion XP, 10 per first-correct answer, 5 per corrected answer). It checks event fields and recent timestamps, deduplicates round identities, and writes scores in the same transaction as progress. Duplicate retries and rejected stale revisions cannot score twice. Offline rounds older than 24 hours still save personal progress but do not create competition events. Weekly and challenge timing uses the server's save time.

These educational standings use saved browser round reports; exercises are still graded in the browser. They are not a server-authoritative competitive exam system.

The Activity tab shows friend request/acceptance and challenge invitation notifications. Marking updates read affects only your own account. The friends feed contains aggregated daily XP from newly saved rounds over the last seven days, without answers or private round details.

## Storage and checks

Migration `002-social.sql` adds social profiles, friendships, activity events, weekly league entries, challenges, challenge memberships and notifications. User deletion cascades to their social records. Run `npm run db:migrate` when updating an existing database.

`npm test` covers friend consent, privacy, social request validation, score deduplication, backup exclusions, challenge timing/results, league settlement and 30-person cohort allocation. `node tests/social-browser.cjs` uses two isolated accounts to test real lesson completion, requests, comparisons, opt-in rankings, shared goals, notifications, mobile layout and themes. Browser artifacts go to ignored `qa-results`.
