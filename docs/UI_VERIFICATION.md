# Responsive UI verification (2026-10-16)

The monthly calendar reused the weekly habit widget's `.activity-day` class. Its flex layout, border and sizing rules changed every weekly card, placing day labels and icons on top of one another. Monthly cells now use a separate `.calendar-day` class, preserving the weekly widget's vertical day/icon/date layout on every page.

Testing with populated progress also exposed header overflow at 320px with large XP totals. Phones now show a locale-aware compact total while the header label and tooltip retain the full number. Desktop headers continue showing the full total.

The fixed lime `theme-color` was replaced with the header surface color: white in the light theme and `#182b26` in the dark theme. The early theme script restores the saved theme before styling, observes subsequent theme changes, and updates both browser theme metadata and native control color scheme. Browser/OS chrome remains platform-controlled; a real installed Android app's status bar cannot be visually verified by desktop Playwright.

Checks performed in isolated PostgreSQL-backed Edge sessions:

- Nine authenticated pages at 320x568, 360x780, 390x844, 768x1024, 1024x768 and 1440x900, in light and dark themes: 108 combinations. Seeded activity includes six study days, a gap, a current streak, completed lessons, a long display name and seven-digit XP.
- Explicit checks for overlapping day labels/icons, labels extending outside their cells, overlapping card headings, overlapping header stats, horizontal page overflow, page errors and failed HTTP responses. Browser theme metadata checked on every route and after toggling/reloading the guest theme.
- Existing product verification: login and nine pages at six sizes; saved rounds, practice, settings, focus and reduced motion.
- Existing frontend review: path mascot spacing, resizing, navigation and dark theme.
- Lesson tools: 1,461 diagrams and all 358 visual families at phone width, plus calculators, visual controls and phone/landscape/desktop lesson layouts.
- Monthly analytics: month navigation, full history, friend profiles, comparison, dark theme and friendship access checks.
- Automated suite: 132 tests, 130 passed locally and two optional compiler-dependent skips.

Run `node --env-file=.env tests/responsive-layout-browser.cjs` for the populated-layout regression. Screenshots and machine-readable results are written to ignored `qa-results/layout-audit/`.
