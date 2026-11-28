# Compiler Design

The available course contains 52 topics in ten sections, 156 designed lessons and 624 assessment items. Each lesson provides optional notes, a prediction, an interactive model, explanation and four graded questions. Ten optional workshops do not award XP, change completion state or block another section.

## Sections and executable models


| Section | Teaching and interaction |
| --- | --- |
| Characters into tokens | Character spans, repeated token occurrences, maximal munch, lexical versus later errors |
| Grammar structure and ambiguity | Two subtraction trees, precedence, dangling else, balanced-parenthesis decomposition |
| Prepare and trace top-down parsers | Direct-recursion elimination, shared-prefix factoring, derivation direction, syntax errors |
| FIRST, FOLLOW and predictive tables | Fixed-point sets, nullable suffixes, LL(1) conflicts, full-input parsing |
| Bottom-up parsing and SLR | LR(0) closure/GOTO, ACTION and GOTO, handles, ε reductions and FOLLOW-based conflicts |
| Canonical LR, LALR and lookahead | LR(1) lookahead closure, actual equal-core merging, conflict-preserving parsing, dedicated LR(2) witness |
| Attributes and translation | Synthesized expression values, inherited digit positions, signed binary values, declaration context |
| Pipeline and intermediate forms | Source/target stages, postfix and TAC dependencies, separate front/back-end roles |
| SSA and control flow | Edge-dependent φ values, leader detection, actual basic-block successor graph |
| Optimization and data flow | Pure local transformations, backward may-liveness, forward must-availability |

Models reuse existing playback, caption, seek, speed, pause, restart, stepping,
and reduced-motion behavior. New graphics use the current surface, border and
accent variables in both themes. Tables scroll within their containers on
phones. Editable examples report invalid formats without changing lesson
progress; grammatically rejected token streams are shown as model outcomes.

LR exercises vary actual production structure and tasks: closure facts,
remaining dot symbols, FIRST-of-suffix lookahead, global FOLLOW, ACTION
categories, reduction pops, shifts, grammar-family comparisons and core merging.
Liveness scenarios vary reads, overwrites, exits and back edges. Exact prompt
and exercise identities are checked across the entire course. Reused engine
families are deliberate; these are not 156 independently implemented compilers.

## Explicit boundaries

- The toy lexer handles identifiers, whole numbers, supported operators and
  delimiters. It does not implement comments, string literals or all C rules.
- The expression parser handles whole numbers, parentheses and binary `+ - *`.
  It never executes arbitrary source code or uses `eval`. Mathematical integer
  examples do not imply C overflow or floating-point transformation rules.
- Grammar symbols are space-separated; `ε` is an empty right side and `$` is a
  reserved end marker. FIRST/FOLLOW and predictive tables are fixed-point
  computations. LR(0), SLR(1), canonical LR(1) and LALR(1) are actual table
  constructions. The LR(2) view is one specific two-token witness.
- The grammar limit is 40 productions, LR limit 120 states, input limit 35
  tokens and parse trace limits 160/180 steps. Exhausting a bound does not prove
  nonmembership; conflicts do not silently select a convenient action.
- Direct-recursion elimination and all-alternative prefix factoring act on the
  first nonterminal. They do not solve arbitrary ambiguity or indirect recursion.
- SSA and inherited declaration context use fixed illustrative structures.
  They do not implement dominance-frontier SSA construction or a general type
  checker. Signed binary attributes use a separate minus sign, not two’s complement.
- Liveness and availability engines accept explicit scalar CFG facts. Workshops
  use labeled examples with no pointer aliasing, exceptions or hidden side effects.
  Availability uses intersection; liveness uses union. Finite examples do not
  prove arbitrary transformations safe.

The lookahead and data-flow contracts follow the distinction described in
[Cornell’s LR notes](https://www.cs.cornell.edu/courses/cs4120/2026sp/notes/lr/)
and [Cornell’s liveness notes](https://courses.cs.cornell.edu/courses/cs4120/2026sp/notes.html?id=livevar).
Executable checks independently enumerate small parser languages and search
for future reads before definitions to test liveness.


## Verification

Model checks live in `tests/compiler-models.test.mjs`; content contracts in `tests/compiler-content.test.mjs`; responsive learning journeys and workshops in `tests/compiler-browser.cjs`. Run `npm run validate` and `npm test` before publishing course updates.

See [Compiler Design verification](CD_VALIDATION.md) for scope. Browser reports are regenerated under ignored `qa-results/`; previous screenshots are not required to run the course.
