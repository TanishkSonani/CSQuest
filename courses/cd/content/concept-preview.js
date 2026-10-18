// Aligned to inventory topics 000–004: lexical analysis and maximal munch.
export const preview={
 title:'Where do characters become tokens?',
 objective:'Recognize lexemes and token kinds in a small assignment expression, one token at a time.',
 why:'A lexer groups source characters before a parser checks their grammatical arrangement. Later stages attach meaning and produce lower-level representations.',
 watchFor:'Recognizing every token does not prove a program is syntactically or semantically valid. The toy lexer does not implement comments, strings or the complete C token set.',
 boundary:'Concept preview only. A larger source-linked course draft is being validated locally. This preview remains a toy lexer while the full course is unpublished.'
};
