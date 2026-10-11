# General Aptitude

45 standalone lessons cover the topics in all 15 completed source transcripts. Each topic has three stages with four original questions per stage: 180 challenges across five units. Source text and timestamps remain separate from learner-facing explanations in `courses/aptitude/data/transcripts` and `lesson-review.json`.

The units cover money/percentages/ratios, work/travel/numbers, spatial/analytical reasoning, absolute value/floor/ceiling, and grammar/vocabulary/reading. All scenarios supply their own quantities, assumptions and relevant passage. Arithmetic answers and logical conclusions were checked during authoring; automated tests independently check representative formulas and boundary cases. Machine transcript formulas are not treated as authoritative answers.

Interactive labs explain a separate example before each round. They cover simple versus compound growth, a hundred-square, ratio shares, cost versus selling price, joint work rates, a moving journey, divisors, rotation/reflection, overlapping sets, candidate arrangements, absolute distance, floor/ceiling, subject agreement, connectors and evidence classification. Sliders work with pointer and keyboard input; text summaries explain each change. Replay animation respects system and application reduced-motion preferences and sound settings.

Ten visual-number challenges add a percentage grid, quantity bar or number-line marker to the existing number input. The slider and input stay in sync. Incorrect attempts join the retry queue, and visual answers support drafts, reload, practice and account saves. These reuse normal XP and streak rules. Lab experiments earn no XP and do not change question answers.

Author teaching in `courses/aptitude/content/topics.js`; stable lesson IDs and stages are assembled in `lessons.js`. The runtime imports these modules and completed transcripts into PostgreSQL with `npm run db:import`. Normal deployment imports course updates while retaining user records. No schema change or package installation is required.

Validation:

```powershell
npm.cmd run validate
npm.cmd test
node tests/aptitude-browser.cjs
```

The browser check uses a disposable PostgreSQL schema. It exercises every lab, keyboard changes, visual grading/retries, saved progress, draft recovery, light/dark themes and 320/390/1440-pixel layouts. `tests/aptitude.test.mjs` checks 45 lessons/180 questions, complete worked examples, formula answers, blank/out-of-range answers, progression and draft validation.
