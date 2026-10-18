// Source-linked compiler lessons; readiness records completed or explicitly skipped sources.
export const lessons=[
  {
    "id": 0,
    "lecture": 0,
    "title": "How a compiler translates a program · Understand the concept",
    "concept": "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced.",
    "teachingSteps": [
      "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced.",
      "The characters total = count + 2; become tokens, then an assignment tree, then lower-level operations. A valid token sequence alone does not guarantee a valid assignment.",
      "Assembly and linking are distinct jobs; a conceptual phase need not be a separate executable pass."
    ],
    "foundation": {
      "title": "How a compiler translates a program",
      "idea": "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced.",
      "example": "The characters total = count + 2; become tokens, then an assignment tree, then lower-level operations. A valid token sequence alone does not guarantee a valid assignment.",
      "terms": [
        "Source: the program representation being translated.",
        "Intermediate representation: a structured form used between source analysis and target generation.",
        "Observable behavior: outputs and other effects the language requires the translation to preserve."
      ]
    },
    "compilerSpec": {
      "kind": "phases",
      "title": "How a compiler translates a program"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains how a compiler translates a program?",
        "options": [
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced.",
          "A smaller representation is automatically equivalent, regardless of side effects."
        ],
        "answer": 2,
        "explanation": "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced. Assembly and linking are distinct jobs; a conceptual phase need not be a separate executable pass.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which phase groups the characters total = 12; into token occurrences?",
        "options": [
          "Linking.",
          "Register allocation.",
          "Lexical analysis."
        ],
        "answer": 2,
        "explanation": "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced. The characters total = count + 2; become tokens, then an assignment tree, then lower-level operations. A valid token sequence alone does not guarantee a valid assignment.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which phase makes the grouping of 2 + 3 * 4 explicit?",
        "options": [
          "Syntax analysis.",
          "Object-file linking.",
          "Loading into memory."
        ],
        "answer": 0,
        "explanation": "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced. The characters total = count + 2; become tokens, then an assignment tree, then lower-level operations. A valid token sequence alone does not guarantee a valid assignment.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which phase normally rejects adding a number to an incompatible declared object type?",
        "options": [
          "Whitespace removal.",
          "Assembly address relocation.",
          "Semantic analysis."
        ],
        "answer": 2,
        "explanation": "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced. The characters total = count + 2; become tokens, then an assignment tree, then lower-level operations. A valid token sequence alone does not guarantee a valid assignment.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 3.79,
        "text": "Hi everyone, welcome to compiler design lectures. In this lecture series, we will be studying compilers, okay? Before I go further, let me introduce you to the book that I will be referring. So I will be referring to this compilers book that is written by Aho Ulman Sethi. So Aho Ulman Sethi are three different authors and there is a fourth author, which is M"
      },
      {
        "time": 33.32,
        "text": "so if you google it out or just dragon book then you will be able to find it okay maybe maybe there is a dragon at the front page of this book that's why it is called dragon book and the book name is compilers principle techniques and tools i will be referring this book and this is very popular book and also called as a dragon book so let's start with the qu"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 0,
        "file": "000. Lecture 1a. Introduction to Compiler Design.mp4",
        "completedAt": "{\"file\":\"000. Lecture 1a. Introduction to Compiler Design.mp4\",\"language\":\"en\",\"probability\":0.95068359375,\"processing_seconds\":26.712306022644043,\"device\":\"cuda\"}"
      }
    ],
    "start": 3.79,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "phases",
      "objective": "Explain the rule: A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced.",
      "why": "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced.",
      "watchFor": "Assembly and linking are distinct jobs; a conceptual phase need not be a separate executable pass.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 1,
    "lecture": 0,
    "title": "How a compiler translates a program · Trace and experiment",
    "concept": "The characters total = count + 2; become tokens, then an assignment tree, then lower-level operations. A valid token sequence alone does not guarantee a valid assignment.",
    "teachingSteps": [
      "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced.",
      "The characters total = count + 2; become tokens, then an assignment tree, then lower-level operations. A valid token sequence alone does not guarantee a valid assignment.",
      "Assembly and linking are distinct jobs; a conceptual phase need not be a separate executable pass."
    ],
    "foundation": {
      "title": "How a compiler translates a program",
      "idea": "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced.",
      "example": "The characters total = count + 2; become tokens, then an assignment tree, then lower-level operations. A valid token sequence alone does not guarantee a valid assignment.",
      "terms": [
        "Source: the program representation being translated.",
        "Intermediate representation: a structured form used between source analysis and target generation.",
        "Observable behavior: outputs and other effects the language requires the translation to preserve."
      ]
    },
    "compilerSpec": {
      "kind": "phases",
      "title": "How a compiler translates a program"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: The characters total = count + 2; become tokens, then an assignment tree, then lower-level operations. A valid token sequence alone does not guarantee a valid assignment.",
        "options": [
          "One successful example proves every rewrite safe for every language and input.",
          "The characters total = count + 2; become tokens, then an assignment tree, then lower-level operations. A valid token sequence alone does not guarantee a valid assignment.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter."
        ],
        "answer": 1,
        "explanation": "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced. Assembly and linking are distinct jobs; a conceptual phase need not be a separate executable pass.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "What representation can the front end give an optimizer?",
        "options": [
          "Only screen pixels.",
          "Only unparsed source bytes.",
          "Intermediate representation."
        ],
        "answer": 2,
        "explanation": "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced. The characters total = count + 2; become tokens, then an assignment tree, then lower-level operations. A valid token sequence alone does not guarantee a valid assignment.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which phase selects target machine instructions?",
        "options": [
          "Lexeme recognition.",
          "FIRST-set computation.",
          "Code generation."
        ],
        "answer": 2,
        "explanation": "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced. The characters total = count + 2; become tokens, then an assignment tree, then lower-level operations. A valid token sequence alone does not guarantee a valid assignment.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which property should a valid optimization preserve?",
        "options": [
          "The original count of temporary names.",
          "The required observable behavior.",
          "The exact source formatting."
        ],
        "answer": 1,
        "explanation": "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced. The characters total = count + 2; become tokens, then an assignment tree, then lower-level operations. A valid token sequence alone does not guarantee a valid assignment.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 3.79,
        "text": "Hi everyone, welcome to compiler design lectures. In this lecture series, we will be studying compilers, okay? Before I go further, let me introduce you to the book that I will be referring. So I will be referring to this compilers book that is written by Aho Ulman Sethi. So Aho Ulman Sethi are three different authors and there is a fourth author, which is M"
      },
      {
        "time": 33.32,
        "text": "so if you google it out or just dragon book then you will be able to find it okay maybe maybe there is a dragon at the front page of this book that's why it is called dragon book and the book name is compilers principle techniques and tools i will be referring this book and this is very popular book and also called as a dragon book so let's start with the qu"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 0,
        "file": "000. Lecture 1a. Introduction to Compiler Design.mp4",
        "completedAt": "{\"file\":\"000. Lecture 1a. Introduction to Compiler Design.mp4\",\"language\":\"en\",\"probability\":0.95068359375,\"processing_seconds\":26.712306022644043,\"device\":\"cuda\"}"
      }
    ],
    "start": 3.79,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "phases",
      "objective": "Trace this example: The characters total = count + 2; become tokens, then an assignment tree, then lower-level operations. A valid token sequence alone does not guarantee a valid assignment.",
      "why": "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced.",
      "watchFor": "Assembly and linking are distinct jobs; a conceptual phase need not be a separate executable pass.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 2,
    "lecture": 0,
    "title": "How a compiler translates a program · Apply and challenge",
    "concept": "Assembly and linking are distinct jobs; a conceptual phase need not be a separate executable pass.",
    "teachingSteps": [
      "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced.",
      "The characters total = count + 2; become tokens, then an assignment tree, then lower-level operations. A valid token sequence alone does not guarantee a valid assignment.",
      "Assembly and linking are distinct jobs; a conceptual phase need not be a separate executable pass."
    ],
    "foundation": {
      "title": "How a compiler translates a program",
      "idea": "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced.",
      "example": "The characters total = count + 2; become tokens, then an assignment tree, then lower-level operations. A valid token sequence alone does not guarantee a valid assignment.",
      "terms": [
        "Source: the program representation being translated.",
        "Intermediate representation: a structured form used between source analysis and target generation.",
        "Observable behavior: outputs and other effects the language requires the translation to preserve."
      ]
    },
    "compilerSpec": {
      "kind": "phases",
      "title": "How a compiler translates a program"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying how a compiler translates a program, which warning prevents a wrong conclusion?",
        "options": [
          "One successful example proves every rewrite safe for every language and input.",
          "Assembly and linking are distinct jobs; a conceptual phase need not be a separate executable pass.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter."
        ],
        "answer": 1,
        "explanation": "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced. Assembly and linking are distinct jobs; a conceptual phase need not be a separate executable pass.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Is x + * 3 valid merely because a lexer recognizes every token?",
        "options": [
          "Yes; all operators can be adjacent.",
          "No; syntax must still be checked.",
          "Yes; lexing proves every later property."
        ],
        "answer": 1,
        "explanation": "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced. The characters total = count + 2; become tokens, then an assignment tree, then lower-level operations. A valid token sequence alone does not guarantee a valid assignment.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Can a compiler combine several conceptual phases in one implementation pass?",
        "options": [
          "Only if it skips syntax checks.",
          "Yes.",
          "No; each must be a separate executable."
        ],
        "answer": 1,
        "explanation": "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced. The characters total = count + 2; become tokens, then an assignment tree, then lower-level operations. A valid token sequence alone does not guarantee a valid assignment.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "What distinguishes compilation from merely changing whitespace?",
        "options": [
          "Compilation always executes the program to completion.",
          "Compilation translates a program representation according to language semantics.",
          "Compilation only changes indentation."
        ],
        "answer": 1,
        "explanation": "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced. The characters total = count + 2; become tokens, then an assignment tree, then lower-level operations. A valid token sequence alone does not guarantee a valid assignment.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 3.79,
        "text": "Hi everyone, welcome to compiler design lectures. In this lecture series, we will be studying compilers, okay? Before I go further, let me introduce you to the book that I will be referring. So I will be referring to this compilers book that is written by Aho Ulman Sethi. So Aho Ulman Sethi are three different authors and there is a fourth author, which is M"
      },
      {
        "time": 33.32,
        "text": "so if you google it out or just dragon book then you will be able to find it okay maybe maybe there is a dragon at the front page of this book that's why it is called dragon book and the book name is compilers principle techniques and tools i will be referring this book and this is very popular book and also called as a dragon book so let's start with the qu"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 0,
        "file": "000. Lecture 1a. Introduction to Compiler Design.mp4",
        "completedAt": "{\"file\":\"000. Lecture 1a. Introduction to Compiler Design.mp4\",\"language\":\"en\",\"probability\":0.95068359375,\"processing_seconds\":26.712306022644043,\"device\":\"cuda\"}"
      }
    ],
    "start": 3.79,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "phases",
      "objective": "Check this boundary: Assembly and linking are distinct jobs; a conceptual phase need not be a separate executable pass.",
      "why": "A compiler translates a source program into another representation while preserving the behavior required by the source language. Lexing finds tokens, parsing finds structure, and semantic analysis checks meaning before target code is produced.",
      "watchFor": "Assembly and linking are distinct jobs; a conceptual phase need not be a separate executable pass.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 3,
    "lecture": 1,
    "title": "Lexemes, token kinds and attributes · Understand the concept",
    "concept": "A lexeme is the exact source substring. Its token kind names a category such as identifier or integer. An attribute can point to a symbol-table entry or hold the interpreted numeric value.",
    "teachingSteps": [
      "A lexeme is the exact source substring. Its token kind names a category such as identifier or integer. An attribute can point to a symbol-table entry or hold the interpreted numeric value.",
      "In sum = sum + 12;, the two occurrences of sum share an identifier spelling, while 12 is an integer lexeme whose value is twelve.",
      "Counting distinct names is different from counting token occurrences. Whitespace usually separates tokens without becoming a token."
    ],
    "foundation": {
      "title": "Lexemes, token kinds and attributes",
      "idea": "A lexeme is the exact source substring. Its token kind names a category such as identifier or integer. An attribute can point to a symbol-table entry or hold the interpreted numeric value.",
      "example": "In sum = sum + 12;, the two occurrences of sum share an identifier spelling, while 12 is an integer lexeme whose value is twelve.",
      "terms": [
        "Lexeme: the exact source substring recognized as one token.",
        "Token kind: a category such as identifier, integer or operator.",
        "Span: source positions from the first character up to, but excluding, the end position."
      ]
    },
    "compilerSpec": {
      "kind": "lexer",
      "input": "sum = sum + 12;",
      "title": "Lexemes, token kinds and attributes"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains lexemes, token kinds and attributes?",
        "options": [
          "Recognizing individual tokens also proves that the full program is syntactically and semantically valid.",
          "Maximal munch chooses the shortest valid token at the current character.",
          "Repeated occurrences of one identifier count as just one token occurrence.",
          "A lexeme is the exact source substring. Its token kind names a category such as identifier or integer. An attribute can point to a symbol-table entry or hold the interpreted numeric value."
        ],
        "answer": 3,
        "explanation": "A lexeme is the exact source substring. Its token kind names a category such as identifier or integer. An attribute can point to a symbol-table entry or hold the interpreted numeric value. Counting distinct names is different from counting token occurrences. Whitespace usually separates tokens without becoming a token.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Scan item9 = other38 + 12; with the toy maximal-munch rules. How many token occurrences are emitted?",
        "answer": 6,
        "tolerance": 0,
        "explanation": "Count each identifier, operator, integer and delimiter occurrence; spaces emit no tokens.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In source item10 = other39 >= 13;, what is the zero-based start offset of lexeme >=?",
        "answer": 17,
        "tolerance": 0,
        "explanation": "Its span is [17, 19); offsets count source characters, including spaces.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In source item11 = other40 + 14;, which token kind is assigned to lexeme 14?",
        "options": [
          "operator",
          "delimiter",
          "integer",
          "identifier"
        ],
        "answer": 2,
        "explanation": "Token kind classifies this occurrence; the exact substring is its lexeme.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 2.42,
        "text": "What is lexical analysis and what is the goal of this? So basically as we know little bit like now you got the idea that lexical analysis convert the high-level program into output should be extreme of tokens extreme of tokens So if I ask you that what is the extreme of tokens here then then without like I'd go into detail without Without I I specify the det"
      },
      {
        "time": 31.17,
        "text": "why because it seems a it seems one logical unit to you right so while is one token this is another token this is another token this is another token this is another token this is another token now tell me logically are they two two plus plus or there is just there is just one operator which is plus plus this is just one operator right so this is this is thi"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 1,
        "file": "001. Lecture 1b. Token Name, Token Attribute, and Lexeme.mp4",
        "completedAt": "{\"file\":\"001. Lecture 1b. Token Name, Token Attribute, and Lexeme.mp4\",\"language\":\"en\",\"probability\":0.9541015625,\"processing_seconds\":44.741142988204956,\"device\":\"cuda\"}"
      }
    ],
    "start": 2.42,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lexer",
      "objective": "Explain the rule: A lexeme is the exact source substring. Its token kind names a category such as identifier or integer. An attribute can point to a symbol-table entry or hold the interpreted numeric value.",
      "why": "A lexeme is the exact source substring. Its token kind names a category such as identifier or integer. An attribute can point to a symbol-table entry or hold the interpreted numeric value.",
      "watchFor": "Counting distinct names is different from counting token occurrences. Whitespace usually separates tokens without becoming a token.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 4,
    "lecture": 1,
    "title": "Lexemes, token kinds and attributes · Trace and experiment",
    "concept": "In sum = sum + 12;, the two occurrences of sum share an identifier spelling, while 12 is an integer lexeme whose value is twelve.",
    "teachingSteps": [
      "A lexeme is the exact source substring. Its token kind names a category such as identifier or integer. An attribute can point to a symbol-table entry or hold the interpreted numeric value.",
      "In sum = sum + 12;, the two occurrences of sum share an identifier spelling, while 12 is an integer lexeme whose value is twelve.",
      "Counting distinct names is different from counting token occurrences. Whitespace usually separates tokens without becoming a token."
    ],
    "foundation": {
      "title": "Lexemes, token kinds and attributes",
      "idea": "A lexeme is the exact source substring. Its token kind names a category such as identifier or integer. An attribute can point to a symbol-table entry or hold the interpreted numeric value.",
      "example": "In sum = sum + 12;, the two occurrences of sum share an identifier spelling, while 12 is an integer lexeme whose value is twelve.",
      "terms": [
        "Lexeme: the exact source substring recognized as one token.",
        "Token kind: a category such as identifier, integer or operator.",
        "Span: source positions from the first character up to, but excluding, the end position."
      ]
    },
    "compilerSpec": {
      "kind": "lexer",
      "input": "sum = sum + 12;",
      "title": "Lexemes, token kinds and attributes"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: In sum = sum + 12;, the two occurrences of sum share an identifier spelling, while 12 is an integer lexeme whose value is twelve.",
        "options": [
          "Recognizing individual tokens also proves that the full program is syntactically and semantically valid.",
          "Maximal munch chooses the shortest valid token at the current character.",
          "Repeated occurrences of one identifier count as just one token occurrence.",
          "In sum = sum + 12;, the two occurrences of sum share an identifier spelling, while 12 is an integer lexeme whose value is twelve."
        ],
        "answer": 3,
        "explanation": "A lexeme is the exact source substring. Its token kind names a category such as identifier or integer. An attribute can point to a symbol-table entry or hold the interpreted numeric value. Counting distinct names is different from counting token occurrences. Whitespace usually separates tokens without becoming a token.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Scan item20 = other49 >= 23; with the toy maximal-munch rules. How many token occurrences are emitted?",
        "answer": 6,
        "tolerance": 0,
        "explanation": "Count each identifier, operator, integer and delimiter occurrence; spaces emit no tokens.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In source item21 = other50 + 24;, what is the zero-based start offset of lexeme other50?",
        "answer": 9,
        "tolerance": 0,
        "explanation": "Its span is [9, 16); offsets count source characters, including spaces.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In source item22 = other51 >= 25;, which token kind is assigned to lexeme >=?",
        "options": [
          "integer",
          "delimiter",
          "operator",
          "identifier"
        ],
        "answer": 2,
        "explanation": "Token kind classifies this occurrence; the exact substring is its lexeme.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 2.42,
        "text": "What is lexical analysis and what is the goal of this? So basically as we know little bit like now you got the idea that lexical analysis convert the high-level program into output should be extreme of tokens extreme of tokens So if I ask you that what is the extreme of tokens here then then without like I'd go into detail without Without I I specify the det"
      },
      {
        "time": 31.17,
        "text": "why because it seems a it seems one logical unit to you right so while is one token this is another token this is another token this is another token this is another token this is another token now tell me logically are they two two plus plus or there is just there is just one operator which is plus plus this is just one operator right so this is this is thi"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 1,
        "file": "001. Lecture 1b. Token Name, Token Attribute, and Lexeme.mp4",
        "completedAt": "{\"file\":\"001. Lecture 1b. Token Name, Token Attribute, and Lexeme.mp4\",\"language\":\"en\",\"probability\":0.9541015625,\"processing_seconds\":44.741142988204956,\"device\":\"cuda\"}"
      }
    ],
    "start": 2.42,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lexer",
      "objective": "Trace this example: In sum = sum + 12;, the two occurrences of sum share an identifier spelling, while 12 is an integer lexeme whose value is twelve.",
      "why": "A lexeme is the exact source substring. Its token kind names a category such as identifier or integer. An attribute can point to a symbol-table entry or hold the interpreted numeric value.",
      "watchFor": "Counting distinct names is different from counting token occurrences. Whitespace usually separates tokens without becoming a token.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 5,
    "lecture": 1,
    "title": "Lexemes, token kinds and attributes · Apply and challenge",
    "concept": "Counting distinct names is different from counting token occurrences. Whitespace usually separates tokens without becoming a token.",
    "teachingSteps": [
      "A lexeme is the exact source substring. Its token kind names a category such as identifier or integer. An attribute can point to a symbol-table entry or hold the interpreted numeric value.",
      "In sum = sum + 12;, the two occurrences of sum share an identifier spelling, while 12 is an integer lexeme whose value is twelve.",
      "Counting distinct names is different from counting token occurrences. Whitespace usually separates tokens without becoming a token."
    ],
    "foundation": {
      "title": "Lexemes, token kinds and attributes",
      "idea": "A lexeme is the exact source substring. Its token kind names a category such as identifier or integer. An attribute can point to a symbol-table entry or hold the interpreted numeric value.",
      "example": "In sum = sum + 12;, the two occurrences of sum share an identifier spelling, while 12 is an integer lexeme whose value is twelve.",
      "terms": [
        "Lexeme: the exact source substring recognized as one token.",
        "Token kind: a category such as identifier, integer or operator.",
        "Span: source positions from the first character up to, but excluding, the end position."
      ]
    },
    "compilerSpec": {
      "kind": "lexer",
      "input": "sum = sum + 12;",
      "title": "Lexemes, token kinds and attributes"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying lexemes, token kinds and attributes, which warning prevents a wrong conclusion?",
        "options": [
          "Counting distinct names is different from counting token occurrences. Whitespace usually separates tokens without becoming a token.",
          "Recognizing individual tokens also proves that the full program is syntactically and semantically valid.",
          "Maximal munch chooses the shortest valid token at the current character.",
          "Repeated occurrences of one identifier count as just one token occurrence."
        ],
        "answer": 0,
        "explanation": "A lexeme is the exact source substring. Its token kind names a category such as identifier or integer. An attribute can point to a symbol-table entry or hold the interpreted numeric value. Counting distinct names is different from counting token occurrences. Whitespace usually separates tokens without becoming a token.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Scan item31 = other60 + 34; with the toy maximal-munch rules. How many token occurrences are emitted?",
        "answer": 6,
        "tolerance": 0,
        "explanation": "Count each identifier, operator, integer and delimiter occurrence; spaces emit no tokens.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In source item32 = other61 >= 35;, what is the zero-based start offset of lexeme =?",
        "answer": 7,
        "tolerance": 0,
        "explanation": "Its span is [7, 8); offsets count source characters, including spaces.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In source item2 = other62 + 5;, which token kind is assigned to lexeme other62?",
        "options": [
          "integer",
          "operator",
          "delimiter",
          "identifier"
        ],
        "answer": 3,
        "explanation": "Token kind classifies this occurrence; the exact substring is its lexeme.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 2.42,
        "text": "What is lexical analysis and what is the goal of this? So basically as we know little bit like now you got the idea that lexical analysis convert the high-level program into output should be extreme of tokens extreme of tokens So if I ask you that what is the extreme of tokens here then then without like I'd go into detail without Without I I specify the det"
      },
      {
        "time": 31.17,
        "text": "why because it seems a it seems one logical unit to you right so while is one token this is another token this is another token this is another token this is another token this is another token now tell me logically are they two two plus plus or there is just there is just one operator which is plus plus this is just one operator right so this is this is thi"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 1,
        "file": "001. Lecture 1b. Token Name, Token Attribute, and Lexeme.mp4",
        "completedAt": "{\"file\":\"001. Lecture 1b. Token Name, Token Attribute, and Lexeme.mp4\",\"language\":\"en\",\"probability\":0.9541015625,\"processing_seconds\":44.741142988204956,\"device\":\"cuda\"}"
      }
    ],
    "start": 2.42,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lexer",
      "objective": "Check this boundary: Counting distinct names is different from counting token occurrences. Whitespace usually separates tokens without becoming a token.",
      "why": "A lexeme is the exact source substring. Its token kind names a category such as identifier or integer. An attribute can point to a symbol-table entry or hold the interpreted numeric value.",
      "watchFor": "Counting distinct names is different from counting token occurrences. Whitespace usually separates tokens without becoming a token.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 6,
    "lecture": 2,
    "title": "Recognize tokens with maximal munch · Understand the concept",
    "concept": "At the current character position, choose the longest prefix that is a valid token. If equally long token rules match, use the language-defined rule priority. Then restart at the first unread character.",
    "teachingSteps": [
      "At the current character position, choose the longest prefix that is a valid token. If equally long token rules match, use the language-defined rule priority. Then restart at the first unread character.",
      "In count >= 10, >= is one supported operator rather than > followed by =. An identifier such as total2 stays together.",
      "Longest match does not search past invalid characters or decide whether an expression is grammatically valid."
    ],
    "foundation": {
      "title": "Recognize tokens with maximal munch",
      "idea": "At the current character position, choose the longest prefix that is a valid token. If equally long token rules match, use the language-defined rule priority. Then restart at the first unread character.",
      "example": "In count >= 10, >= is one supported operator rather than > followed by =. An identifier such as total2 stays together.",
      "terms": [
        "Lexeme: the exact source substring recognized as one token.",
        "Token kind: a category such as identifier, integer or operator.",
        "Span: source positions from the first character up to, but excluding, the end position."
      ]
    },
    "compilerSpec": {
      "kind": "lexer",
      "input": "total2 >= 10;",
      "title": "Recognize tokens with maximal munch"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains recognize tokens with maximal munch?",
        "options": [
          "Maximal munch chooses the shortest valid token at the current character.",
          "Repeated occurrences of one identifier count as just one token occurrence.",
          "At the current character position, choose the longest prefix that is a valid token. If equally long token rules match, use the language-defined rule priority. Then restart at the first unread character.",
          "Recognizing individual tokens also proves that the full program is syntactically and semantically valid."
        ],
        "answer": 2,
        "explanation": "At the current character position, choose the longest prefix that is a valid token. If equally long token rules match, use the language-defined rule priority. Then restart at the first unread character. Longest match does not search past invalid characters or decide whether an expression is grammatically valid.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Scan item15 = other75 >= 18; with the toy maximal-munch rules. How many token occurrences are emitted?",
        "answer": 6,
        "tolerance": 0,
        "explanation": "Count each identifier, operator, integer and delimiter occurrence; spaces emit no tokens.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In source item16 = other76 + 19;, what is the zero-based start offset of lexeme 19?",
        "answer": 19,
        "tolerance": 0,
        "explanation": "Its span is [19, 21); offsets count source characters, including spaces.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In source item17 = other77 >= 20;, which token kind is assigned to lexeme ;?",
        "options": [
          "operator",
          "delimiter",
          "identifier",
          "integer"
        ],
        "answer": 1,
        "explanation": "Token kind classifies this occurrence; the exact substring is its lexeme.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0.37,
        "text": "Now, let's answer a question that how to recognize the tokens, how to recognize the token. Recognization of tokens. This is important question, right? This is important question. Till now, I was just, I was just assuming that as a human, you can recognize the logical entities. As a human, you can recognize the logical entities. But now let's just answer that"
      },
      {
        "time": 239.92,
        "text": "Now, I hope you got the idea that how to how to recognize the token so there will be a rules Okay, but here is a small problem. The problem is that Suppose suppose something of this sort comes which is let's suppose f or t Okay, now there are a couple of options to you First option is that you will say that okay this f or f or corresponds corresponds to one "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 2,
        "file": "002. Lecture 1c. Recognition of Tokens and Maximal Munch.mp4",
        "completedAt": "{\"file\":\"002. Lecture 1c. Recognition of Tokens and Maximal Munch.mp4\",\"language\":\"en\",\"probability\":0.95166015625,\"processing_seconds\":47.48038673400879,\"device\":\"cuda\"}"
      }
    ],
    "start": 0.37,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lexer",
      "objective": "Explain the rule: At the current character position, choose the longest prefix that is a valid token. If equally long token rules match, use the language-defined rule priority. Then restart at the first unread character.",
      "why": "At the current character position, choose the longest prefix that is a valid token. If equally long token rules match, use the language-defined rule priority. Then restart at the first unread character.",
      "watchFor": "Longest match does not search past invalid characters or decide whether an expression is grammatically valid.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 7,
    "lecture": 2,
    "title": "Recognize tokens with maximal munch · Trace and experiment",
    "concept": "In count >= 10, >= is one supported operator rather than > followed by =. An identifier such as total2 stays together.",
    "teachingSteps": [
      "At the current character position, choose the longest prefix that is a valid token. If equally long token rules match, use the language-defined rule priority. Then restart at the first unread character.",
      "In count >= 10, >= is one supported operator rather than > followed by =. An identifier such as total2 stays together.",
      "Longest match does not search past invalid characters or decide whether an expression is grammatically valid."
    ],
    "foundation": {
      "title": "Recognize tokens with maximal munch",
      "idea": "At the current character position, choose the longest prefix that is a valid token. If equally long token rules match, use the language-defined rule priority. Then restart at the first unread character.",
      "example": "In count >= 10, >= is one supported operator rather than > followed by =. An identifier such as total2 stays together.",
      "terms": [
        "Lexeme: the exact source substring recognized as one token.",
        "Token kind: a category such as identifier, integer or operator.",
        "Span: source positions from the first character up to, but excluding, the end position."
      ]
    },
    "compilerSpec": {
      "kind": "lexer",
      "input": "total2 >= 10;",
      "title": "Recognize tokens with maximal munch"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: In count >= 10, >= is one supported operator rather than > followed by =. An identifier such as total2 stays together.",
        "options": [
          "Maximal munch chooses the shortest valid token at the current character.",
          "Repeated occurrences of one identifier count as just one token occurrence.",
          "In count >= 10, >= is one supported operator rather than > followed by =. An identifier such as total2 stays together.",
          "Recognizing individual tokens also proves that the full program is syntactically and semantically valid."
        ],
        "answer": 2,
        "explanation": "At the current character position, choose the longest prefix that is a valid token. If equally long token rules match, use the language-defined rule priority. Then restart at the first unread character. Longest match does not search past invalid characters or decide whether an expression is grammatically valid.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Scan item26 = other86 + 29; with the toy maximal-munch rules. How many token occurrences are emitted?",
        "answer": 6,
        "tolerance": 0,
        "explanation": "Count each identifier, operator, integer and delimiter occurrence; spaces emit no tokens.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In source item27 = other87 >= 30;, what is the zero-based start offset of lexeme >=?",
        "answer": 17,
        "tolerance": 0,
        "explanation": "Its span is [17, 19); offsets count source characters, including spaces.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In source item28 = other88 + 31;, which token kind is assigned to lexeme 31?",
        "options": [
          "operator",
          "delimiter",
          "integer",
          "identifier"
        ],
        "answer": 2,
        "explanation": "Token kind classifies this occurrence; the exact substring is its lexeme.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0.37,
        "text": "Now, let's answer a question that how to recognize the tokens, how to recognize the token. Recognization of tokens. This is important question, right? This is important question. Till now, I was just, I was just assuming that as a human, you can recognize the logical entities. As a human, you can recognize the logical entities. But now let's just answer that"
      },
      {
        "time": 239.92,
        "text": "Now, I hope you got the idea that how to how to recognize the token so there will be a rules Okay, but here is a small problem. The problem is that Suppose suppose something of this sort comes which is let's suppose f or t Okay, now there are a couple of options to you First option is that you will say that okay this f or f or corresponds corresponds to one "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 2,
        "file": "002. Lecture 1c. Recognition of Tokens and Maximal Munch.mp4",
        "completedAt": "{\"file\":\"002. Lecture 1c. Recognition of Tokens and Maximal Munch.mp4\",\"language\":\"en\",\"probability\":0.95166015625,\"processing_seconds\":47.48038673400879,\"device\":\"cuda\"}"
      }
    ],
    "start": 0.37,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lexer",
      "objective": "Trace this example: In count >= 10, >= is one supported operator rather than > followed by =. An identifier such as total2 stays together.",
      "why": "At the current character position, choose the longest prefix that is a valid token. If equally long token rules match, use the language-defined rule priority. Then restart at the first unread character.",
      "watchFor": "Longest match does not search past invalid characters or decide whether an expression is grammatically valid.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 8,
    "lecture": 2,
    "title": "Recognize tokens with maximal munch · Apply and challenge",
    "concept": "Longest match does not search past invalid characters or decide whether an expression is grammatically valid.",
    "teachingSteps": [
      "At the current character position, choose the longest prefix that is a valid token. If equally long token rules match, use the language-defined rule priority. Then restart at the first unread character.",
      "In count >= 10, >= is one supported operator rather than > followed by =. An identifier such as total2 stays together.",
      "Longest match does not search past invalid characters or decide whether an expression is grammatically valid."
    ],
    "foundation": {
      "title": "Recognize tokens with maximal munch",
      "idea": "At the current character position, choose the longest prefix that is a valid token. If equally long token rules match, use the language-defined rule priority. Then restart at the first unread character.",
      "example": "In count >= 10, >= is one supported operator rather than > followed by =. An identifier such as total2 stays together.",
      "terms": [
        "Lexeme: the exact source substring recognized as one token.",
        "Token kind: a category such as identifier, integer or operator.",
        "Span: source positions from the first character up to, but excluding, the end position."
      ]
    },
    "compilerSpec": {
      "kind": "lexer",
      "input": "total2 >= 10;",
      "title": "Recognize tokens with maximal munch"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying recognize tokens with maximal munch, which warning prevents a wrong conclusion?",
        "options": [
          "Repeated occurrences of one identifier count as just one token occurrence.",
          "Longest match does not search past invalid characters or decide whether an expression is grammatically valid.",
          "Recognizing individual tokens also proves that the full program is syntactically and semantically valid.",
          "Maximal munch chooses the shortest valid token at the current character."
        ],
        "answer": 1,
        "explanation": "At the current character position, choose the longest prefix that is a valid token. If equally long token rules match, use the language-defined rule priority. Then restart at the first unread character. Longest match does not search past invalid characters or decide whether an expression is grammatically valid.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Scan item6 = other97 >= 9; with the toy maximal-munch rules. How many token occurrences are emitted?",
        "answer": 6,
        "tolerance": 0,
        "explanation": "Count each identifier, operator, integer and delimiter occurrence; spaces emit no tokens.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In source item7 = other98 + 10;, what is the zero-based start offset of lexeme other98?",
        "answer": 8,
        "tolerance": 0,
        "explanation": "Its span is [8, 15); offsets count source characters, including spaces.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In source item8 = other99 >= 11;, which token kind is assigned to lexeme >=?",
        "options": [
          "delimiter",
          "operator",
          "identifier",
          "integer"
        ],
        "answer": 1,
        "explanation": "Token kind classifies this occurrence; the exact substring is its lexeme.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0.37,
        "text": "Now, let's answer a question that how to recognize the tokens, how to recognize the token. Recognization of tokens. This is important question, right? This is important question. Till now, I was just, I was just assuming that as a human, you can recognize the logical entities. As a human, you can recognize the logical entities. But now let's just answer that"
      },
      {
        "time": 239.92,
        "text": "Now, I hope you got the idea that how to how to recognize the token so there will be a rules Okay, but here is a small problem. The problem is that Suppose suppose something of this sort comes which is let's suppose f or t Okay, now there are a couple of options to you First option is that you will say that okay this f or f or corresponds corresponds to one "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 2,
        "file": "002. Lecture 1c. Recognition of Tokens and Maximal Munch.mp4",
        "completedAt": "{\"file\":\"002. Lecture 1c. Recognition of Tokens and Maximal Munch.mp4\",\"language\":\"en\",\"probability\":0.95166015625,\"processing_seconds\":47.48038673400879,\"device\":\"cuda\"}"
      }
    ],
    "start": 0.37,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lexer",
      "objective": "Check this boundary: Longest match does not search past invalid characters or decide whether an expression is grammatically valid.",
      "why": "At the current character position, choose the longest prefix that is a valid token. If equally long token rules match, use the language-defined rule priority. Then restart at the first unread character.",
      "watchFor": "Longest match does not search past invalid characters or decide whether an expression is grammatically valid.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 9,
    "lecture": 3,
    "title": "Trace a token stream precisely · Understand the concept",
    "concept": "Move through source text one lexeme at a time and record each occurrence, kind and character span. Treat an identifier containing digits as one identifier when its first character is a letter or underscore.",
    "teachingSteps": [
      "Move through source text one lexeme at a time and record each occurrence, kind and character span. Treat an identifier containing digits as one identifier when its first character is a letter or underscore.",
      "In item12 = item12 + 5;, item12 occupies one token each time, not an identifier followed by a number.",
      "The toy scanner has a stated token vocabulary. It is not a substitute for all lexical rules of C."
    ],
    "foundation": {
      "title": "Trace a token stream precisely",
      "idea": "Move through source text one lexeme at a time and record each occurrence, kind and character span. Treat an identifier containing digits as one identifier when its first character is a letter or underscore.",
      "example": "In item12 = item12 + 5;, item12 occupies one token each time, not an identifier followed by a number.",
      "terms": [
        "Lexeme: the exact source substring recognized as one token.",
        "Token kind: a category such as identifier, integer or operator.",
        "Span: source positions from the first character up to, but excluding, the end position."
      ]
    },
    "compilerSpec": {
      "kind": "lexer",
      "input": "item12 = item12 + 5;",
      "title": "Trace a token stream precisely"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains trace a token stream precisely?",
        "options": [
          "Repeated occurrences of one identifier count as just one token occurrence.",
          "Move through source text one lexeme at a time and record each occurrence, kind and character span. Treat an identifier containing digits as one identifier when its first character is a letter or underscore.",
          "Recognizing individual tokens also proves that the full program is syntactically and semantically valid.",
          "Maximal munch chooses the shortest valid token at the current character."
        ],
        "answer": 1,
        "explanation": "Move through source text one lexeme at a time and record each occurrence, kind and character span. Treat an identifier containing digits as one identifier when its first character is a letter or underscore. The toy scanner has a stated token vocabulary. It is not a substitute for all lexical rules of C.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Scan item21 = other112 + 24; with the toy maximal-munch rules. How many token occurrences are emitted?",
        "answer": 6,
        "tolerance": 0,
        "explanation": "Count each identifier, operator, integer and delimiter occurrence; spaces emit no tokens.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In source item22 = other113 >= 25;, what is the zero-based start offset of lexeme ;?",
        "answer": 23,
        "tolerance": 0,
        "explanation": "Its span is [23, 24); offsets count source characters, including spaces.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In source item23 = other114 + 26;, which token kind is assigned to lexeme item23?",
        "options": [
          "delimiter",
          "identifier",
          "integer",
          "operator"
        ],
        "answer": 1,
        "explanation": "Token kind classifies this occurrence; the exact substring is its lexeme.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 657.25,
        "text": "if you give a then what will happen there will be the error right there will be error why because this a is not a valid token okay this a is not a valid token so here here it will be saying that okay till 2 it will saying that things are fine but the moment you see a it will say that okay just because of a i cannot match with anyone right this ac is actually"
      },
      {
        "time": 861.44,
        "text": "Okay, because it is not not able to classify this this a to any of the token. So it will say there is an error. Understood. So this particular string will be generating error. This particular string will be generating error. Okay. Now the third string is CBABC. So let's just see this third string. So what do you think the output will be for this third string"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 3,
        "file": "003. Practice Questions on Lexical Analysis.mp4",
        "completedAt": "{\"file\":\"003. Practice Questions on Lexical Analysis.mp4\",\"language\":\"en\",\"probability\":0.841796875,\"processing_seconds\":129.20473074913025,\"device\":\"cuda\"}"
      }
    ],
    "start": 657.25,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lexer",
      "objective": "Explain the rule: Move through source text one lexeme at a time and record each occurrence, kind and character span. Treat an identifier containing digits as one identifier when its first character is a letter or underscore.",
      "why": "Move through source text one lexeme at a time and record each occurrence, kind and character span. Treat an identifier containing digits as one identifier when its first character is a letter or underscore.",
      "watchFor": "The toy scanner has a stated token vocabulary. It is not a substitute for all lexical rules of C.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 10,
    "lecture": 3,
    "title": "Trace a token stream precisely · Trace and experiment",
    "concept": "In item12 = item12 + 5;, item12 occupies one token each time, not an identifier followed by a number.",
    "teachingSteps": [
      "Move through source text one lexeme at a time and record each occurrence, kind and character span. Treat an identifier containing digits as one identifier when its first character is a letter or underscore.",
      "In item12 = item12 + 5;, item12 occupies one token each time, not an identifier followed by a number.",
      "The toy scanner has a stated token vocabulary. It is not a substitute for all lexical rules of C."
    ],
    "foundation": {
      "title": "Trace a token stream precisely",
      "idea": "Move through source text one lexeme at a time and record each occurrence, kind and character span. Treat an identifier containing digits as one identifier when its first character is a letter or underscore.",
      "example": "In item12 = item12 + 5;, item12 occupies one token each time, not an identifier followed by a number.",
      "terms": [
        "Lexeme: the exact source substring recognized as one token.",
        "Token kind: a category such as identifier, integer or operator.",
        "Span: source positions from the first character up to, but excluding, the end position."
      ]
    },
    "compilerSpec": {
      "kind": "lexer",
      "input": "item12 = item12 + 5;",
      "title": "Trace a token stream precisely"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: In item12 = item12 + 5;, item12 occupies one token each time, not an identifier followed by a number.",
        "options": [
          "In item12 = item12 + 5;, item12 occupies one token each time, not an identifier followed by a number.",
          "Recognizing individual tokens also proves that the full program is syntactically and semantically valid.",
          "Maximal munch chooses the shortest valid token at the current character.",
          "Repeated occurrences of one identifier count as just one token occurrence."
        ],
        "answer": 0,
        "explanation": "Move through source text one lexeme at a time and record each occurrence, kind and character span. Treat an identifier containing digits as one identifier when its first character is a letter or underscore. The toy scanner has a stated token vocabulary. It is not a substitute for all lexical rules of C.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Scan item32 = other123 >= 35; with the toy maximal-munch rules. How many token occurrences are emitted?",
        "answer": 6,
        "tolerance": 0,
        "explanation": "Count each identifier, operator, integer and delimiter occurrence; spaces emit no tokens.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In source item2 = other124 + 5;, what is the zero-based start offset of lexeme 5?",
        "answer": 19,
        "tolerance": 0,
        "explanation": "Its span is [19, 20); offsets count source characters, including spaces.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In source item3 = other125 >= 6;, which token kind is assigned to lexeme ;?",
        "options": [
          "delimiter",
          "identifier",
          "integer",
          "operator"
        ],
        "answer": 0,
        "explanation": "Token kind classifies this occurrence; the exact substring is its lexeme.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 657.25,
        "text": "if you give a then what will happen there will be the error right there will be error why because this a is not a valid token okay this a is not a valid token so here here it will be saying that okay till 2 it will saying that things are fine but the moment you see a it will say that okay just because of a i cannot match with anyone right this ac is actually"
      },
      {
        "time": 861.44,
        "text": "Okay, because it is not not able to classify this this a to any of the token. So it will say there is an error. Understood. So this particular string will be generating error. This particular string will be generating error. Okay. Now the third string is CBABC. So let's just see this third string. So what do you think the output will be for this third string"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 3,
        "file": "003. Practice Questions on Lexical Analysis.mp4",
        "completedAt": "{\"file\":\"003. Practice Questions on Lexical Analysis.mp4\",\"language\":\"en\",\"probability\":0.841796875,\"processing_seconds\":129.20473074913025,\"device\":\"cuda\"}"
      }
    ],
    "start": 657.25,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lexer",
      "objective": "Trace this example: In item12 = item12 + 5;, item12 occupies one token each time, not an identifier followed by a number.",
      "why": "Move through source text one lexeme at a time and record each occurrence, kind and character span. Treat an identifier containing digits as one identifier when its first character is a letter or underscore.",
      "watchFor": "The toy scanner has a stated token vocabulary. It is not a substitute for all lexical rules of C.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 11,
    "lecture": 3,
    "title": "Trace a token stream precisely · Apply and challenge",
    "concept": "The toy scanner has a stated token vocabulary. It is not a substitute for all lexical rules of C.",
    "teachingSteps": [
      "Move through source text one lexeme at a time and record each occurrence, kind and character span. Treat an identifier containing digits as one identifier when its first character is a letter or underscore.",
      "In item12 = item12 + 5;, item12 occupies one token each time, not an identifier followed by a number.",
      "The toy scanner has a stated token vocabulary. It is not a substitute for all lexical rules of C."
    ],
    "foundation": {
      "title": "Trace a token stream precisely",
      "idea": "Move through source text one lexeme at a time and record each occurrence, kind and character span. Treat an identifier containing digits as one identifier when its first character is a letter or underscore.",
      "example": "In item12 = item12 + 5;, item12 occupies one token each time, not an identifier followed by a number.",
      "terms": [
        "Lexeme: the exact source substring recognized as one token.",
        "Token kind: a category such as identifier, integer or operator.",
        "Span: source positions from the first character up to, but excluding, the end position."
      ]
    },
    "compilerSpec": {
      "kind": "lexer",
      "input": "item12 = item12 + 5;",
      "title": "Trace a token stream precisely"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying trace a token stream precisely, which warning prevents a wrong conclusion?",
        "options": [
          "Maximal munch chooses the shortest valid token at the current character.",
          "Repeated occurrences of one identifier count as just one token occurrence.",
          "The toy scanner has a stated token vocabulary. It is not a substitute for all lexical rules of C.",
          "Recognizing individual tokens also proves that the full program is syntactically and semantically valid."
        ],
        "answer": 2,
        "explanation": "Move through source text one lexeme at a time and record each occurrence, kind and character span. Treat an identifier containing digits as one identifier when its first character is a letter or underscore. The toy scanner has a stated token vocabulary. It is not a substitute for all lexical rules of C.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Scan item12 = other134 + 15; with the toy maximal-munch rules. How many token occurrences are emitted?",
        "answer": 6,
        "tolerance": 0,
        "explanation": "Count each identifier, operator, integer and delimiter occurrence; spaces emit no tokens.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In source item13 = other135 >= 16;, what is the zero-based start offset of lexeme >=?",
        "answer": 18,
        "tolerance": 0,
        "explanation": "Its span is [18, 20); offsets count source characters, including spaces.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In source item14 = other136 + 17;, which token kind is assigned to lexeme 17?",
        "options": [
          "identifier",
          "operator",
          "delimiter",
          "integer"
        ],
        "answer": 3,
        "explanation": "Token kind classifies this occurrence; the exact substring is its lexeme.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 657.25,
        "text": "if you give a then what will happen there will be the error right there will be error why because this a is not a valid token okay this a is not a valid token so here here it will be saying that okay till 2 it will saying that things are fine but the moment you see a it will say that okay just because of a i cannot match with anyone right this ac is actually"
      },
      {
        "time": 861.44,
        "text": "Okay, because it is not not able to classify this this a to any of the token. So it will say there is an error. Understood. So this particular string will be generating error. This particular string will be generating error. Okay. Now the third string is CBABC. So let's just see this third string. So what do you think the output will be for this third string"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 3,
        "file": "003. Practice Questions on Lexical Analysis.mp4",
        "completedAt": "{\"file\":\"003. Practice Questions on Lexical Analysis.mp4\",\"language\":\"en\",\"probability\":0.841796875,\"processing_seconds\":129.20473074913025,\"device\":\"cuda\"}"
      }
    ],
    "start": 657.25,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lexer",
      "objective": "Check this boundary: The toy scanner has a stated token vocabulary. It is not a substitute for all lexical rules of C.",
      "why": "Move through source text one lexeme at a time and record each occurrence, kind and character span. Treat an identifier containing digits as one identifier when its first character is a letter or underscore.",
      "watchFor": "The toy scanner has a stated token vocabulary. It is not a substitute for all lexical rules of C.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 12,
    "lecture": 4,
    "title": "Locate the boundary of lexical analysis · Understand the concept",
    "concept": "Lexical analysis recognizes tokens; parsing decides whether their arrangement follows a grammar. Semantic checks then ask whether names and operations make sense in context.",
    "teachingSteps": [
      "Lexical analysis recognizes tokens; parsing decides whether their arrangement follows a grammar. Semantic checks then ask whether names and operations make sense in context.",
      "x + * 3 contains individually recognizable tokens, but the expression grammar rejects the adjacent + and * in this position.",
      "A successful scanner does not prove syntax, declaration or type correctness."
    ],
    "foundation": {
      "title": "Locate the boundary of lexical analysis",
      "idea": "Lexical analysis recognizes tokens; parsing decides whether their arrangement follows a grammar. Semantic checks then ask whether names and operations make sense in context.",
      "example": "x + * 3 contains individually recognizable tokens, but the expression grammar rejects the adjacent + and * in this position.",
      "terms": [
        "Lexeme: the exact source substring recognized as one token.",
        "Token kind: a category such as identifier, integer or operator.",
        "Span: source positions from the first character up to, but excluding, the end position."
      ]
    },
    "compilerSpec": {
      "kind": "lexer",
      "input": "x + * 3;",
      "title": "Locate the boundary of lexical analysis"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains locate the boundary of lexical analysis?",
        "options": [
          "Maximal munch chooses the shortest valid token at the current character.",
          "Repeated occurrences of one identifier count as just one token occurrence.",
          "Lexical analysis recognizes tokens; parsing decides whether their arrangement follows a grammar. Semantic checks then ask whether names and operations make sense in context.",
          "Recognizing individual tokens also proves that the full program is syntactically and semantically valid."
        ],
        "answer": 2,
        "explanation": "Lexical analysis recognizes tokens; parsing decides whether their arrangement follows a grammar. Semantic checks then ask whether names and operations make sense in context. A successful scanner does not prove syntax, declaration or type correctness.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Scan item27 = other149 >= 30; with the toy maximal-munch rules. How many token occurrences are emitted?",
        "answer": 6,
        "tolerance": 0,
        "explanation": "Count each identifier, operator, integer and delimiter occurrence; spaces emit no tokens.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In source item28 = other150 + 31;, what is the zero-based start offset of lexeme item28?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Its span is [0, 6); offsets count source characters, including spaces.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In source item29 = other151 >= 32;, which token kind is assigned to lexeme =?",
        "options": [
          "integer",
          "delimiter",
          "operator",
          "identifier"
        ],
        "answer": 2,
        "explanation": "Token kind classifies this occurrence; the exact substring is its lexeme.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0.05,
        "text": "Let's just answer this question. Which of the following option is your own false? So this could be MSQ. Let's just see which of the following is your own false. They are asking about the false. If a lexical analysis finds a token invalid, it generates an error. Do you think it's false or true? If token is invalid. Okay, let's talk about that when can lexical"
      },
      {
        "time": 195.65,
        "text": "And here you can have some set of characters that are allowed. Maybe underscore or whatever. Some set of characters that are allowed. So all the characters A, B, all the characters that are allowed after these things. So anyway, you cannot start with a number. So there is no DFA that can parse this. That can reach to the final state using this input. That is"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 4,
        "file": "004. True False Question on Lexical Analysis.mp4",
        "completedAt": "{\"file\":\"004. True False Question on Lexical Analysis.mp4\",\"language\":\"en\",\"probability\":0.90234375,\"processing_seconds\":19.822943449020386,\"device\":\"cuda\"}"
      }
    ],
    "start": 0.05,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lexer",
      "objective": "Explain the rule: Lexical analysis recognizes tokens; parsing decides whether their arrangement follows a grammar. Semantic checks then ask whether names and operations make sense in context.",
      "why": "Lexical analysis recognizes tokens; parsing decides whether their arrangement follows a grammar. Semantic checks then ask whether names and operations make sense in context.",
      "watchFor": "A successful scanner does not prove syntax, declaration or type correctness.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 13,
    "lecture": 4,
    "title": "Locate the boundary of lexical analysis · Trace and experiment",
    "concept": "x + * 3 contains individually recognizable tokens, but the expression grammar rejects the adjacent + and * in this position.",
    "teachingSteps": [
      "Lexical analysis recognizes tokens; parsing decides whether their arrangement follows a grammar. Semantic checks then ask whether names and operations make sense in context.",
      "x + * 3 contains individually recognizable tokens, but the expression grammar rejects the adjacent + and * in this position.",
      "A successful scanner does not prove syntax, declaration or type correctness."
    ],
    "foundation": {
      "title": "Locate the boundary of lexical analysis",
      "idea": "Lexical analysis recognizes tokens; parsing decides whether their arrangement follows a grammar. Semantic checks then ask whether names and operations make sense in context.",
      "example": "x + * 3 contains individually recognizable tokens, but the expression grammar rejects the adjacent + and * in this position.",
      "terms": [
        "Lexeme: the exact source substring recognized as one token.",
        "Token kind: a category such as identifier, integer or operator.",
        "Span: source positions from the first character up to, but excluding, the end position."
      ]
    },
    "compilerSpec": {
      "kind": "lexer",
      "input": "x + * 3;",
      "title": "Locate the boundary of lexical analysis"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: x + * 3 contains individually recognizable tokens, but the expression grammar rejects the adjacent + and * in this position.",
        "options": [
          "Recognizing individual tokens also proves that the full program is syntactically and semantically valid.",
          "Maximal munch chooses the shortest valid token at the current character.",
          "Repeated occurrences of one identifier count as just one token occurrence.",
          "x + * 3 contains individually recognizable tokens, but the expression grammar rejects the adjacent + and * in this position."
        ],
        "answer": 3,
        "explanation": "Lexical analysis recognizes tokens; parsing decides whether their arrangement follows a grammar. Semantic checks then ask whether names and operations make sense in context. A successful scanner does not prove syntax, declaration or type correctness.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Scan item7 = other160 + 10; with the toy maximal-munch rules. How many token occurrences are emitted?",
        "answer": 6,
        "tolerance": 0,
        "explanation": "Count each identifier, operator, integer and delimiter occurrence; spaces emit no tokens.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In source item8 = other161 >= 11;, what is the zero-based start offset of lexeme ;?",
        "answer": 22,
        "tolerance": 0,
        "explanation": "Its span is [22, 23); offsets count source characters, including spaces.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In source item9 = other162 + 12;, which token kind is assigned to lexeme item9?",
        "options": [
          "delimiter",
          "identifier",
          "integer",
          "operator"
        ],
        "answer": 1,
        "explanation": "Token kind classifies this occurrence; the exact substring is its lexeme.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0.05,
        "text": "Let's just answer this question. Which of the following option is your own false? So this could be MSQ. Let's just see which of the following is your own false. They are asking about the false. If a lexical analysis finds a token invalid, it generates an error. Do you think it's false or true? If token is invalid. Okay, let's talk about that when can lexical"
      },
      {
        "time": 195.65,
        "text": "And here you can have some set of characters that are allowed. Maybe underscore or whatever. Some set of characters that are allowed. So all the characters A, B, all the characters that are allowed after these things. So anyway, you cannot start with a number. So there is no DFA that can parse this. That can reach to the final state using this input. That is"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 4,
        "file": "004. True False Question on Lexical Analysis.mp4",
        "completedAt": "{\"file\":\"004. True False Question on Lexical Analysis.mp4\",\"language\":\"en\",\"probability\":0.90234375,\"processing_seconds\":19.822943449020386,\"device\":\"cuda\"}"
      }
    ],
    "start": 0.05,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lexer",
      "objective": "Trace this example: x + * 3 contains individually recognizable tokens, but the expression grammar rejects the adjacent + and * in this position.",
      "why": "Lexical analysis recognizes tokens; parsing decides whether their arrangement follows a grammar. Semantic checks then ask whether names and operations make sense in context.",
      "watchFor": "A successful scanner does not prove syntax, declaration or type correctness.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 14,
    "lecture": 4,
    "title": "Locate the boundary of lexical analysis · Apply and challenge",
    "concept": "A successful scanner does not prove syntax, declaration or type correctness.",
    "teachingSteps": [
      "Lexical analysis recognizes tokens; parsing decides whether their arrangement follows a grammar. Semantic checks then ask whether names and operations make sense in context.",
      "x + * 3 contains individually recognizable tokens, but the expression grammar rejects the adjacent + and * in this position.",
      "A successful scanner does not prove syntax, declaration or type correctness."
    ],
    "foundation": {
      "title": "Locate the boundary of lexical analysis",
      "idea": "Lexical analysis recognizes tokens; parsing decides whether their arrangement follows a grammar. Semantic checks then ask whether names and operations make sense in context.",
      "example": "x + * 3 contains individually recognizable tokens, but the expression grammar rejects the adjacent + and * in this position.",
      "terms": [
        "Lexeme: the exact source substring recognized as one token.",
        "Token kind: a category such as identifier, integer or operator.",
        "Span: source positions from the first character up to, but excluding, the end position."
      ]
    },
    "compilerSpec": {
      "kind": "lexer",
      "input": "x + * 3;",
      "title": "Locate the boundary of lexical analysis"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying locate the boundary of lexical analysis, which warning prevents a wrong conclusion?",
        "options": [
          "Repeated occurrences of one identifier count as just one token occurrence.",
          "A successful scanner does not prove syntax, declaration or type correctness.",
          "Recognizing individual tokens also proves that the full program is syntactically and semantically valid.",
          "Maximal munch chooses the shortest valid token at the current character."
        ],
        "answer": 1,
        "explanation": "Lexical analysis recognizes tokens; parsing decides whether their arrangement follows a grammar. Semantic checks then ask whether names and operations make sense in context. A successful scanner does not prove syntax, declaration or type correctness.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Scan item18 = other171 >= 21; with the toy maximal-munch rules. How many token occurrences are emitted?",
        "answer": 6,
        "tolerance": 0,
        "explanation": "Count each identifier, operator, integer and delimiter occurrence; spaces emit no tokens.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In source item19 = other172 + 22;, what is the zero-based start offset of lexeme 22?",
        "answer": 20,
        "tolerance": 0,
        "explanation": "Its span is [20, 22); offsets count source characters, including spaces.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In source item20 = other173 >= 23;, which token kind is assigned to lexeme ;?",
        "options": [
          "operator",
          "delimiter",
          "identifier",
          "integer"
        ],
        "answer": 1,
        "explanation": "Token kind classifies this occurrence; the exact substring is its lexeme.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0.05,
        "text": "Let's just answer this question. Which of the following option is your own false? So this could be MSQ. Let's just see which of the following is your own false. They are asking about the false. If a lexical analysis finds a token invalid, it generates an error. Do you think it's false or true? If token is invalid. Okay, let's talk about that when can lexical"
      },
      {
        "time": 195.65,
        "text": "And here you can have some set of characters that are allowed. Maybe underscore or whatever. Some set of characters that are allowed. So all the characters A, B, all the characters that are allowed after these things. So anyway, you cannot start with a number. So there is no DFA that can parse this. That can reach to the final state using this input. That is"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 4,
        "file": "004. True False Question on Lexical Analysis.mp4",
        "completedAt": "{\"file\":\"004. True False Question on Lexical Analysis.mp4\",\"language\":\"en\",\"probability\":0.90234375,\"processing_seconds\":19.822943449020386,\"device\":\"cuda\"}"
      }
    ],
    "start": 0.05,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lexer",
      "objective": "Check this boundary: A successful scanner does not prove syntax, declaration or type correctness.",
      "why": "Lexical analysis recognizes tokens; parsing decides whether their arrangement follows a grammar. Semantic checks then ask whether names and operations make sense in context.",
      "watchFor": "A successful scanner does not prove syntax, declaration or type correctness.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 15,
    "lecture": 5,
    "title": "Prove ambiguity with two trees · Understand the concept",
    "concept": "A grammar is ambiguous when at least one complete token sequence has two different parse trees. A single witness is sufficient; merely having several alternatives is not.",
    "teachingSteps": [
      "A grammar is ambiguous when at least one complete token sequence has two different parse trees. A single witness is sufficient; merely having several alternatives is not.",
      "For E → E - E | num, 8 - 3 - 2 can mean (8 - 3) - 2 or 8 - (3 - 2), giving different values.",
      "Trying a finite sample cannot prove an arbitrary grammar unambiguous; deciding arbitrary CFG ambiguity is undecidable."
    ],
    "foundation": {
      "title": "Prove ambiguity with two trees",
      "idea": "A grammar is ambiguous when at least one complete token sequence has two different parse trees. A single witness is sufficient; merely having several alternatives is not.",
      "example": "For E → E - E | num, 8 - 3 - 2 can mean (8 - 3) - 2 or 8 - (3 - 2), giving different values.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "ambiguity",
      "input": "8 - 3 - 2",
      "title": "Prove ambiguity with two trees"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains prove ambiguity with two trees?",
        "options": [
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "A grammar is ambiguous when at least one complete token sequence has two different parse trees. A single witness is sufficient; merely having several alternatives is not.",
          "A smaller representation is automatically equivalent, regardless of side effects."
        ],
        "answer": 2,
        "explanation": "A grammar is ambiguous when at least one complete token sequence has two different parse trees. A single witness is sufficient; merely having several alternatives is not. Trying a finite sample cannot prove an arbitrary grammar unambiguous; deciding arbitrary CFG ambiguity is undecidable.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "With * above + and left-associative subtraction, what value does 11 - 2 - 2 synthesize?",
        "answer": 7,
        "tolerance": 0,
        "explanation": "Evaluate each child before its parent. Multiplication binds tighter; parentheses override precedence.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "The ambiguous grammar E → E - E | num also permits right grouping of 12 - 3 - 3. What value does that right-grouped tree produce?",
        "answer": 12,
        "tolerance": 0,
        "explanation": "Evaluate the parenthesized right subtree before the subtraction at the root.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "A basic TAC emitter gives every binary operation in 13 - 4 - 4 one temporary and performs no optimization. How many temporary definitions are emitted?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count operator nodes, not operand occurrences or source characters.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 434.54,
        "text": "that how to how to generate LMD using the parse tree how to generate RMD using the parse tree so number of parse trees number of parse trees are equal to number of LMDs equal to number of RMDs right okay now before I go to the syntax analysis phase I want to introduce you few concepts one one is CFG that you already know another one is a problem in the CFG t"
      },
      {
        "time": 472.17,
        "text": "Which is ambiguous grammar you know about it, but we will we will see in little detail about the ambiguous grammars Okay, specifically how to resolve the ambiguity we will we will go to this detail in these lectures in compiler design from TOC You know what is ambiguous grammar, but in compiler design we will we will see that if we can remove the ambiguity, "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 5,
        "file": "005_Lecture_2a_Introduction_to_Syntax_Analysis_and_Ambig.mp4",
        "completedAt": "{\"file\":\"005_Lecture_2a_Introduction_to_Syntax_Analysis_and_Ambig.mp4\",\"language\":\"en\",\"probability\":0.998046875,\"processing_seconds\":27.530792713165283,\"device\":\"cuda\"}"
      }
    ],
    "start": 434.54,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ambiguity",
      "objective": "Explain the rule: A grammar is ambiguous when at least one complete token sequence has two different parse trees. A single witness is sufficient; merely having several alternatives is not.",
      "why": "A grammar is ambiguous when at least one complete token sequence has two different parse trees. A single witness is sufficient; merely having several alternatives is not.",
      "watchFor": "Trying a finite sample cannot prove an arbitrary grammar unambiguous; deciding arbitrary CFG ambiguity is undecidable.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 16,
    "lecture": 5,
    "title": "Prove ambiguity with two trees · Trace and experiment",
    "concept": "For E → E - E | num, 8 - 3 - 2 can mean (8 - 3) - 2 or 8 - (3 - 2), giving different values.",
    "teachingSteps": [
      "A grammar is ambiguous when at least one complete token sequence has two different parse trees. A single witness is sufficient; merely having several alternatives is not.",
      "For E → E - E | num, 8 - 3 - 2 can mean (8 - 3) - 2 or 8 - (3 - 2), giving different values.",
      "Trying a finite sample cannot prove an arbitrary grammar unambiguous; deciding arbitrary CFG ambiguity is undecidable."
    ],
    "foundation": {
      "title": "Prove ambiguity with two trees",
      "idea": "A grammar is ambiguous when at least one complete token sequence has two different parse trees. A single witness is sufficient; merely having several alternatives is not.",
      "example": "For E → E - E | num, 8 - 3 - 2 can mean (8 - 3) - 2 or 8 - (3 - 2), giving different values.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "ambiguity",
      "input": "8 - 3 - 2",
      "title": "Prove ambiguity with two trees"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For E → E - E | num, 8 - 3 - 2 can mean (8 - 3) - 2 or 8 - (3 - 2), giving different values.",
        "options": [
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "For E → E - E | num, 8 - 3 - 2 can mean (8 - 3) - 2 or 8 - (3 - 2), giving different values.",
          "A smaller representation is automatically equivalent, regardless of side effects."
        ],
        "answer": 2,
        "explanation": "A grammar is ambiguous when at least one complete token sequence has two different parse trees. A single witness is sufficient; merely having several alternatives is not. Trying a finite sample cannot prove an arbitrary grammar unambiguous; deciding arbitrary CFG ambiguity is undecidable.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "The ambiguous grammar E → E - E | num also permits right grouping of 22 - 13 - 3. What value does that right-grouped tree produce?",
        "answer": 12,
        "tolerance": 0,
        "explanation": "Evaluate the parenthesized right subtree before the subtraction at the root.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which postfix sequence represents 23 - 14 - 4?",
        "options": [
          "14 15 + 16 +",
          "23 14 - 4 -",
          "14 15 16 * +"
        ],
        "answer": 1,
        "explanation": "Postorder emits each operand subtree before its operator.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "The ambiguous grammar E → E - E | num also permits right grouping of 24 - 15 - 5. What value does that right-grouped tree produce?",
        "answer": 14,
        "tolerance": 0,
        "explanation": "Evaluate the parenthesized right subtree before the subtraction at the root.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 434.54,
        "text": "that how to how to generate LMD using the parse tree how to generate RMD using the parse tree so number of parse trees number of parse trees are equal to number of LMDs equal to number of RMDs right okay now before I go to the syntax analysis phase I want to introduce you few concepts one one is CFG that you already know another one is a problem in the CFG t"
      },
      {
        "time": 472.17,
        "text": "Which is ambiguous grammar you know about it, but we will we will see in little detail about the ambiguous grammars Okay, specifically how to resolve the ambiguity we will we will go to this detail in these lectures in compiler design from TOC You know what is ambiguous grammar, but in compiler design we will we will see that if we can remove the ambiguity, "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 5,
        "file": "005_Lecture_2a_Introduction_to_Syntax_Analysis_and_Ambig.mp4",
        "completedAt": "{\"file\":\"005_Lecture_2a_Introduction_to_Syntax_Analysis_and_Ambig.mp4\",\"language\":\"en\",\"probability\":0.998046875,\"processing_seconds\":27.530792713165283,\"device\":\"cuda\"}"
      }
    ],
    "start": 434.54,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ambiguity",
      "objective": "Trace this example: For E → E - E | num, 8 - 3 - 2 can mean (8 - 3) - 2 or 8 - (3 - 2), giving different values.",
      "why": "A grammar is ambiguous when at least one complete token sequence has two different parse trees. A single witness is sufficient; merely having several alternatives is not.",
      "watchFor": "Trying a finite sample cannot prove an arbitrary grammar unambiguous; deciding arbitrary CFG ambiguity is undecidable.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 17,
    "lecture": 5,
    "title": "Prove ambiguity with two trees · Apply and challenge",
    "concept": "Trying a finite sample cannot prove an arbitrary grammar unambiguous; deciding arbitrary CFG ambiguity is undecidable.",
    "teachingSteps": [
      "A grammar is ambiguous when at least one complete token sequence has two different parse trees. A single witness is sufficient; merely having several alternatives is not.",
      "For E → E - E | num, 8 - 3 - 2 can mean (8 - 3) - 2 or 8 - (3 - 2), giving different values.",
      "Trying a finite sample cannot prove an arbitrary grammar unambiguous; deciding arbitrary CFG ambiguity is undecidable."
    ],
    "foundation": {
      "title": "Prove ambiguity with two trees",
      "idea": "A grammar is ambiguous when at least one complete token sequence has two different parse trees. A single witness is sufficient; merely having several alternatives is not.",
      "example": "For E → E - E | num, 8 - 3 - 2 can mean (8 - 3) - 2 or 8 - (3 - 2), giving different values.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "ambiguity",
      "input": "8 - 3 - 2",
      "title": "Prove ambiguity with two trees"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying prove ambiguity with two trees, which warning prevents a wrong conclusion?",
        "options": [
          "One successful example proves every rewrite safe for every language and input.",
          "Trying a finite sample cannot prove an arbitrary grammar unambiguous; deciding arbitrary CFG ambiguity is undecidable.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter."
        ],
        "answer": 1,
        "explanation": "A grammar is ambiguous when at least one complete token sequence has two different parse trees. A single witness is sufficient; merely having several alternatives is not. Trying a finite sample cannot prove an arbitrary grammar unambiguous; deciding arbitrary CFG ambiguity is undecidable.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "With * above + and left-associative subtraction, what value does 33 - 24 - 4 synthesize?",
        "answer": 5,
        "tolerance": 0,
        "explanation": "Evaluate each child before its parent. Multiplication binds tighter; parentheses override precedence.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "The ambiguous grammar E → E - E | num also permits right grouping of 34 - 25 - 5. What value does that right-grouped tree produce?",
        "answer": 14,
        "tolerance": 0,
        "explanation": "Evaluate the parenthesized right subtree before the subtraction at the root.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "A basic TAC emitter gives every binary operation in 35 - 26 - 1 one temporary and performs no optimization. How many temporary definitions are emitted?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count operator nodes, not operand occurrences or source characters.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 434.54,
        "text": "that how to how to generate LMD using the parse tree how to generate RMD using the parse tree so number of parse trees number of parse trees are equal to number of LMDs equal to number of RMDs right okay now before I go to the syntax analysis phase I want to introduce you few concepts one one is CFG that you already know another one is a problem in the CFG t"
      },
      {
        "time": 472.17,
        "text": "Which is ambiguous grammar you know about it, but we will we will see in little detail about the ambiguous grammars Okay, specifically how to resolve the ambiguity we will we will go to this detail in these lectures in compiler design from TOC You know what is ambiguous grammar, but in compiler design we will we will see that if we can remove the ambiguity, "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 5,
        "file": "005_Lecture_2a_Introduction_to_Syntax_Analysis_and_Ambig.mp4",
        "completedAt": "{\"file\":\"005_Lecture_2a_Introduction_to_Syntax_Analysis_and_Ambig.mp4\",\"language\":\"en\",\"probability\":0.998046875,\"processing_seconds\":27.530792713165283,\"device\":\"cuda\"}"
      }
    ],
    "start": 434.54,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ambiguity",
      "objective": "Check this boundary: Trying a finite sample cannot prove an arbitrary grammar unambiguous; deciding arbitrary CFG ambiguity is undecidable.",
      "why": "A grammar is ambiguous when at least one complete token sequence has two different parse trees. A single witness is sufficient; merely having several alternatives is not.",
      "watchFor": "Trying a finite sample cannot prove an arbitrary grammar unambiguous; deciding arbitrary CFG ambiguity is undecidable.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 18,
    "lecture": 6,
    "title": "Encode precedence and associativity · Understand the concept",
    "concept": "A grammar can separate expression levels so multiplication groups before addition, and can make repeated operators group left or right according to the language. This is a language-specific design choice.",
    "teachingSteps": [
      "A grammar can separate expression levels so multiplication groups before addition, and can make repeated operators group left or right according to the language. This is a language-specific design choice.",
      "For 2 + 3 * 4, multiplication produces 12 before addition produces 14. For 9 - 4 - 1, left association gives 4.",
      "Removing ambiguity is not an automatic general-purpose transformation; the replacement must generate the intended language and structure."
    ],
    "foundation": {
      "title": "Encode precedence and associativity",
      "idea": "A grammar can separate expression levels so multiplication groups before addition, and can make repeated operators group left or right according to the language. This is a language-specific design choice.",
      "example": "For 2 + 3 * 4, multiplication produces 12 before addition produces 14. For 9 - 4 - 1, left association gives 4.",
      "terms": [
        "Operator: a symbol such as + that combines operand values.",
        "Precedence: the rule that determines which operator groups more tightly.",
        "Associativity: the grouping convention for operators of equal precedence."
      ]
    },
    "compilerSpec": {
      "kind": "expression",
      "input": "2 + 3 * 4",
      "title": "Encode precedence and associativity"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains encode precedence and associativity?",
        "options": [
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "A grammar can separate expression levels so multiplication groups before addition, and can make repeated operators group left or right according to the language. This is a language-specific design choice."
        ],
        "answer": 3,
        "explanation": "A grammar can separate expression levels so multiplication groups before addition, and can make repeated operators group left or right according to the language. This is a language-specific design choice. Removing ambiguity is not an automatic general-purpose transformation; the replacement must generate the intended language and structure.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "With * above + and left-associative subtraction, what value does 8 + 9 * 10 synthesize?",
        "answer": 98,
        "tolerance": 0,
        "explanation": "Evaluate each child before its parent. Multiplication binds tighter; parentheses override precedence.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which postfix sequence represents (9 + 10) * 11?",
        "options": [
          "9 10 + 11 *",
          "9 10 11 * +",
          "9 10 + 11 +"
        ],
        "answer": 0,
        "explanation": "Postorder emits each operand subtree before its operator.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "A basic TAC emitter gives every binary operation in 19 - 10 - 1 one temporary and performs no optimization. How many temporary definitions are emitted?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count operator nodes, not operand occurrences or source characters.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 145.85,
        "text": "like if 5 plus 2 into 3 is given to you, then what you will prefer? Obviously, obviously, you will prefer 2 into 3. Let's suppose this is what you want. I mean, you, like, if you, you may define the precedence as, as plus as higher, higher precedence, then you can just say that you want this, then you can just throw out, throw out the A maybe. But, but in ge"
      },
      {
        "time": 173.91,
        "text": "So this is basically B option. I want to throw out this B option. How I can throw out? Idea is that I will give higher preference to star. I will give higher preference to star. If somehow in the rules, in the rules, so this is the rule that I have, if somehow in the rule, I can impose this precedence that star is having higher precedence, then I may be able"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 6,
        "file": "006_Lecture_2b_Elimination_of_Ambiguity_Manually_Example.mp4",
        "completedAt": "{\"file\":\"006_Lecture_2b_Elimination_of_Ambiguity_Manually_Example.mp4\",\"language\":\"en\",\"probability\":0.99169921875,\"processing_seconds\":28.52484154701233,\"device\":\"cuda\"}"
      }
    ],
    "start": 145.85,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "expression",
      "objective": "Explain the rule: A grammar can separate expression levels so multiplication groups before addition, and can make repeated operators group left or right according to the language. This is a language-specific design choice.",
      "why": "A grammar can separate expression levels so multiplication groups before addition, and can make repeated operators group left or right according to the language. This is a language-specific design choice.",
      "watchFor": "Removing ambiguity is not an automatic general-purpose transformation; the replacement must generate the intended language and structure.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 19,
    "lecture": 6,
    "title": "Encode precedence and associativity · Trace and experiment",
    "concept": "For 2 + 3 * 4, multiplication produces 12 before addition produces 14. For 9 - 4 - 1, left association gives 4.",
    "teachingSteps": [
      "A grammar can separate expression levels so multiplication groups before addition, and can make repeated operators group left or right according to the language. This is a language-specific design choice.",
      "For 2 + 3 * 4, multiplication produces 12 before addition produces 14. For 9 - 4 - 1, left association gives 4.",
      "Removing ambiguity is not an automatic general-purpose transformation; the replacement must generate the intended language and structure."
    ],
    "foundation": {
      "title": "Encode precedence and associativity",
      "idea": "A grammar can separate expression levels so multiplication groups before addition, and can make repeated operators group left or right according to the language. This is a language-specific design choice.",
      "example": "For 2 + 3 * 4, multiplication produces 12 before addition produces 14. For 9 - 4 - 1, left association gives 4.",
      "terms": [
        "Operator: a symbol such as + that combines operand values.",
        "Precedence: the rule that determines which operator groups more tightly.",
        "Associativity: the grouping convention for operators of equal precedence."
      ]
    },
    "compilerSpec": {
      "kind": "expression",
      "input": "2 + 3 * 4",
      "title": "Encode precedence and associativity"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For 2 + 3 * 4, multiplication produces 12 before addition produces 14. For 9 - 4 - 1, left association gives 4.",
        "options": [
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "For 2 + 3 * 4, multiplication produces 12 before addition produces 14. For 9 - 4 - 1, left association gives 4.",
          "A smaller representation is automatically equivalent, regardless of side effects."
        ],
        "answer": 2,
        "explanation": "A grammar can separate expression levels so multiplication groups before addition, and can make repeated operators group left or right according to the language. This is a language-specific design choice. Removing ambiguity is not an automatic general-purpose transformation; the replacement must generate the intended language and structure.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "With * above + and left-associative subtraction, what value does 19 + 20 * 21 synthesize?",
        "answer": 439,
        "tolerance": 0,
        "explanation": "Evaluate each child before its parent. Multiplication binds tighter; parentheses override precedence.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which postfix sequence represents (20 + 21) * 22?",
        "options": [
          "20 21 + 22 *",
          "20 21 22 * +",
          "20 21 + 22 +"
        ],
        "answer": 0,
        "explanation": "Postorder emits each operand subtree before its operator.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "A basic TAC emitter gives every binary operation in 30 - 21 - 2 one temporary and performs no optimization. How many temporary definitions are emitted?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count operator nodes, not operand occurrences or source characters.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 145.85,
        "text": "like if 5 plus 2 into 3 is given to you, then what you will prefer? Obviously, obviously, you will prefer 2 into 3. Let's suppose this is what you want. I mean, you, like, if you, you may define the precedence as, as plus as higher, higher precedence, then you can just say that you want this, then you can just throw out, throw out the A maybe. But, but in ge"
      },
      {
        "time": 173.91,
        "text": "So this is basically B option. I want to throw out this B option. How I can throw out? Idea is that I will give higher preference to star. I will give higher preference to star. If somehow in the rules, in the rules, so this is the rule that I have, if somehow in the rule, I can impose this precedence that star is having higher precedence, then I may be able"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 6,
        "file": "006_Lecture_2b_Elimination_of_Ambiguity_Manually_Example.mp4",
        "completedAt": "{\"file\":\"006_Lecture_2b_Elimination_of_Ambiguity_Manually_Example.mp4\",\"language\":\"en\",\"probability\":0.99169921875,\"processing_seconds\":28.52484154701233,\"device\":\"cuda\"}"
      }
    ],
    "start": 145.85,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "expression",
      "objective": "Trace this example: For 2 + 3 * 4, multiplication produces 12 before addition produces 14. For 9 - 4 - 1, left association gives 4.",
      "why": "A grammar can separate expression levels so multiplication groups before addition, and can make repeated operators group left or right according to the language. This is a language-specific design choice.",
      "watchFor": "Removing ambiguity is not an automatic general-purpose transformation; the replacement must generate the intended language and structure.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 20,
    "lecture": 6,
    "title": "Encode precedence and associativity · Apply and challenge",
    "concept": "Removing ambiguity is not an automatic general-purpose transformation; the replacement must generate the intended language and structure.",
    "teachingSteps": [
      "A grammar can separate expression levels so multiplication groups before addition, and can make repeated operators group left or right according to the language. This is a language-specific design choice.",
      "For 2 + 3 * 4, multiplication produces 12 before addition produces 14. For 9 - 4 - 1, left association gives 4.",
      "Removing ambiguity is not an automatic general-purpose transformation; the replacement must generate the intended language and structure."
    ],
    "foundation": {
      "title": "Encode precedence and associativity",
      "idea": "A grammar can separate expression levels so multiplication groups before addition, and can make repeated operators group left or right according to the language. This is a language-specific design choice.",
      "example": "For 2 + 3 * 4, multiplication produces 12 before addition produces 14. For 9 - 4 - 1, left association gives 4.",
      "terms": [
        "Operator: a symbol such as + that combines operand values.",
        "Precedence: the rule that determines which operator groups more tightly.",
        "Associativity: the grouping convention for operators of equal precedence."
      ]
    },
    "compilerSpec": {
      "kind": "expression",
      "input": "2 + 3 * 4",
      "title": "Encode precedence and associativity"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying encode precedence and associativity, which warning prevents a wrong conclusion?",
        "options": [
          "Removing ambiguity is not an automatic general-purpose transformation; the replacement must generate the intended language and structure.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input."
        ],
        "answer": 0,
        "explanation": "A grammar can separate expression levels so multiplication groups before addition, and can make repeated operators group left or right according to the language. This is a language-specific design choice. Removing ambiguity is not an automatic general-purpose transformation; the replacement must generate the intended language and structure.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "With * above + and left-associative subtraction, what value does 30 + 31 * 32 synthesize?",
        "answer": 1022,
        "tolerance": 0,
        "explanation": "Evaluate each child before its parent. Multiplication binds tighter; parentheses override precedence.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which postfix sequence represents (31 + 32) * 33?",
        "options": [
          "31 32 + 33 *",
          "31 32 33 * +",
          "31 32 + 33 +"
        ],
        "answer": 0,
        "explanation": "Postorder emits each operand subtree before its operator.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "A basic TAC emitter gives every binary operation in 41 - 32 - 3 one temporary and performs no optimization. How many temporary definitions are emitted?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count operator nodes, not operand occurrences or source characters.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 145.85,
        "text": "like if 5 plus 2 into 3 is given to you, then what you will prefer? Obviously, obviously, you will prefer 2 into 3. Let's suppose this is what you want. I mean, you, like, if you, you may define the precedence as, as plus as higher, higher precedence, then you can just say that you want this, then you can just throw out, throw out the A maybe. But, but in ge"
      },
      {
        "time": 173.91,
        "text": "So this is basically B option. I want to throw out this B option. How I can throw out? Idea is that I will give higher preference to star. I will give higher preference to star. If somehow in the rules, in the rules, so this is the rule that I have, if somehow in the rule, I can impose this precedence that star is having higher precedence, then I may be able"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 6,
        "file": "006_Lecture_2b_Elimination_of_Ambiguity_Manually_Example.mp4",
        "completedAt": "{\"file\":\"006_Lecture_2b_Elimination_of_Ambiguity_Manually_Example.mp4\",\"language\":\"en\",\"probability\":0.99169921875,\"processing_seconds\":28.52484154701233,\"device\":\"cuda\"}"
      }
    ],
    "start": 145.85,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "expression",
      "objective": "Check this boundary: Removing ambiguity is not an automatic general-purpose transformation; the replacement must generate the intended language and structure.",
      "why": "A grammar can separate expression levels so multiplication groups before addition, and can make repeated operators group left or right according to the language. This is a language-specific design choice.",
      "watchFor": "Removing ambiguity is not an automatic general-purpose transformation; the replacement must generate the intended language and structure.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 21,
    "lecture": 7,
    "title": "Resolve the dangling else · Understand the concept",
    "concept": "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention.",
    "teachingSteps": [
      "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention.",
      "In if c1 then if c2 then action1 else action2, choosing the inner or outer owner changes when action2 runs.",
      "Left factoring the shared if-prefix delays a decision; it does not by itself settle which if owns the else."
    ],
    "foundation": {
      "title": "Resolve the dangling else",
      "idea": "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention.",
      "example": "In if c1 then if c2 then action1 else action2, choosing the inner or outer owner changes when action2 runs.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "dangling",
      "title": "Resolve the dangling else"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains resolve the dangling else?",
        "options": [
          "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention.",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context."
        ],
        "answer": 0,
        "explanation": "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention. Left factoring the shared if-prefix delays a decision; it does not by itself settle which if owns the else.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "What causes dangling-else ambiguity?",
        "options": [
          "Two tokens have the same character span.",
          "One else can attach to two enclosing unmatched if statements.",
          "A keyword contains too many letters."
        ],
        "answer": 1,
        "explanation": "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention. In if c1 then if c2 then action1 else action2, choosing the inner or outer owner changes when action2 runs.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "With nearest-unmatched-if binding, who owns else in if p then if q then A else B?",
        "options": [
          "The inner if q.",
          "The outer if p.",
          "Both conditions jointly."
        ],
        "answer": 0,
        "explanation": "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention. In if c1 then if c2 then action1 else action2, choosing the inner or outer owner changes when action2 runs.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "If p is false, what happens under the inner-else interpretation of if p then if q then A else B?",
        "options": [
          "B runs.",
          "A runs.",
          "Neither A nor B runs."
        ],
        "answer": 2,
        "explanation": "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention. In if c1 then if c2 then action1 else action2, choosing the inner or outer owner changes when action2 runs.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 510.8,
        "text": "then I am saying then s1, s1 and then I am saying else, else, s2. This is what I am saying. Now here, here, here what is happening? I am saying that if condition then s1, if condition then s1. So, this whole thing I am saying as an atomic, basically this is an if condition and this else is associated with this if. This else here is associated with this if. S"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 7,
        "file": "007_Lecture_2c_Elimination_of_Ambiguity_Manually_Example.mp4",
        "completedAt": "{\"file\":\"007_Lecture_2c_Elimination_of_Ambiguity_Manually_Example.mp4\",\"language\":\"en\",\"probability\":0.9912109375,\"processing_seconds\":37.802961111068726,\"device\":\"cuda\"}"
      }
    ],
    "start": 510.8,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "dangling",
      "objective": "Explain the rule: An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention.",
      "why": "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention.",
      "watchFor": "Left factoring the shared if-prefix delays a decision; it does not by itself settle which if owns the else.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 22,
    "lecture": 7,
    "title": "Resolve the dangling else · Trace and experiment",
    "concept": "In if c1 then if c2 then action1 else action2, choosing the inner or outer owner changes when action2 runs.",
    "teachingSteps": [
      "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention.",
      "In if c1 then if c2 then action1 else action2, choosing the inner or outer owner changes when action2 runs.",
      "Left factoring the shared if-prefix delays a decision; it does not by itself settle which if owns the else."
    ],
    "foundation": {
      "title": "Resolve the dangling else",
      "idea": "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention.",
      "example": "In if c1 then if c2 then action1 else action2, choosing the inner or outer owner changes when action2 runs.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "dangling",
      "title": "Resolve the dangling else"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: In if c1 then if c2 then action1 else action2, choosing the inner or outer owner changes when action2 runs.",
        "options": [
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context.",
          "In if c1 then if c2 then action1 else action2, choosing the inner or outer owner changes when action2 runs.",
          "Every factored grammar must be LL(1), even if its table has conflicts."
        ],
        "answer": 2,
        "explanation": "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention. Left factoring the shared if-prefix delays a decision; it does not by itself settle which if owns the else.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "If p is false, what happens when that same else instead belongs to the outer if?",
        "options": [
          "A runs.",
          "B runs.",
          "Neither action runs."
        ],
        "answer": 1,
        "explanation": "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention. In if c1 then if c2 then action1 else action2, choosing the inner or outer owner changes when action2 runs.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "If p is true and q is false, what does nearest-if binding execute?",
        "options": [
          "A.",
          "Neither action.",
          "B."
        ],
        "answer": 2,
        "explanation": "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention. In if c1 then if c2 then action1 else action2, choosing the inner or outer owner changes when action2 runs.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Does factoring the common if-prefix alone settle which if owns the else?",
        "options": [
          "No; the attachment ambiguity still needs a convention or suitable grammar.",
          "Yes; any factored grammar is unambiguous.",
          "Yes; tokens choose their own owner."
        ],
        "answer": 0,
        "explanation": "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention. In if c1 then if c2 then action1 else action2, choosing the inner or outer owner changes when action2 runs.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 510.8,
        "text": "then I am saying then s1, s1 and then I am saying else, else, s2. This is what I am saying. Now here, here, here what is happening? I am saying that if condition then s1, if condition then s1. So, this whole thing I am saying as an atomic, basically this is an if condition and this else is associated with this if. This else here is associated with this if. S"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 7,
        "file": "007_Lecture_2c_Elimination_of_Ambiguity_Manually_Example.mp4",
        "completedAt": "{\"file\":\"007_Lecture_2c_Elimination_of_Ambiguity_Manually_Example.mp4\",\"language\":\"en\",\"probability\":0.9912109375,\"processing_seconds\":37.802961111068726,\"device\":\"cuda\"}"
      }
    ],
    "start": 510.8,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "dangling",
      "objective": "Trace this example: In if c1 then if c2 then action1 else action2, choosing the inner or outer owner changes when action2 runs.",
      "why": "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention.",
      "watchFor": "Left factoring the shared if-prefix delays a decision; it does not by itself settle which if owns the else.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 23,
    "lecture": 7,
    "title": "Resolve the dangling else · Apply and challenge",
    "concept": "Left factoring the shared if-prefix delays a decision; it does not by itself settle which if owns the else.",
    "teachingSteps": [
      "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention.",
      "In if c1 then if c2 then action1 else action2, choosing the inner or outer owner changes when action2 runs.",
      "Left factoring the shared if-prefix delays a decision; it does not by itself settle which if owns the else."
    ],
    "foundation": {
      "title": "Resolve the dangling else",
      "idea": "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention.",
      "example": "In if c1 then if c2 then action1 else action2, choosing the inner or outer owner changes when action2 runs.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "dangling",
      "title": "Resolve the dangling else"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying resolve the dangling else, which warning prevents a wrong conclusion?",
        "options": [
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context.",
          "Left factoring the shared if-prefix delays a decision; it does not by itself settle which if owns the else."
        ],
        "answer": 3,
        "explanation": "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention. Left factoring the shared if-prefix delays a decision; it does not by itself settle which if owns the else.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Why distinguish matched and unmatched statements in an if grammar?",
        "options": [
          "To encode which statements still have an if available for an else.",
          "To decide whether an identifier is declared.",
          "To make all conditions true."
        ],
        "answer": 0,
        "explanation": "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention. In if c1 then if c2 then action1 else action2, choosing the inner or outer owner changes when action2 runs.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Is the ambiguous token sequence also necessarily lexically invalid?",
        "options": [
          "No; valid tokens can still have two syntax trees.",
          "Yes; ambiguity always means an unknown character.",
          "Yes; else can never be a token."
        ],
        "answer": 0,
        "explanation": "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention. In if c1 then if c2 then action1 else action2, choosing the inner or outer owner changes when action2 runs.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "What evidence proves this nested-if grammar ambiguous?",
        "options": [
          "Two distinct trees for the same full token sequence.",
          "Two different valid input programs.",
          "Two different token categories."
        ],
        "answer": 0,
        "explanation": "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention. In if c1 then if c2 then action1 else action2, choosing the inner or outer owner changes when action2 runs.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 510.8,
        "text": "then I am saying then s1, s1 and then I am saying else, else, s2. This is what I am saying. Now here, here, here what is happening? I am saying that if condition then s1, if condition then s1. So, this whole thing I am saying as an atomic, basically this is an if condition and this else is associated with this if. This else here is associated with this if. S"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 7,
        "file": "007_Lecture_2c_Elimination_of_Ambiguity_Manually_Example.mp4",
        "completedAt": "{\"file\":\"007_Lecture_2c_Elimination_of_Ambiguity_Manually_Example.mp4\",\"language\":\"en\",\"probability\":0.9912109375,\"processing_seconds\":37.802961111068726,\"device\":\"cuda\"}"
      }
    ],
    "start": 510.8,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "dangling",
      "objective": "Check this boundary: Left factoring the shared if-prefix delays a decision; it does not by itself settle which if owns the else.",
      "why": "An else can match two different if statements in an ambiguous nested-if grammar. A common language convention attaches it to the nearest unmatched if. A matched/unmatched grammar can express that convention.",
      "watchFor": "Left factoring the shared if-prefix delays a decision; it does not by itself settle which if owns the else.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 24,
    "lecture": 8,
    "title": "Practice choosing a unique expression tree · Understand the concept",
    "concept": "Use the stated precedence and associativity rules to construct one expression tree, then evaluate children before their parent. In this independent practice, check the grouping before performing the arithmetic.",
    "teachingSteps": [
      "Use the stated precedence and associativity rules to construct one expression tree, then evaluate children before their parent. In this independent practice, check the grouping before performing the arithmetic.",
      "For 12 - 5 - 2, the usual left-associative rule selects (12 - 5) - 2 = 5; the other grouping gives 9.",
      "Subtraction is not associative: changing the grouping can change the result. Parentheses override the default grouping; they do not change the meaning of an individual subtraction."
    ],
    "foundation": {
      "title": "Practice choosing a unique expression tree",
      "idea": "Use the stated precedence and associativity rules to construct one expression tree, then evaluate children before their parent. In this independent practice, check the grouping before performing the arithmetic.",
      "example": "For 12 - 5 - 2, the usual left-associative rule selects (12 - 5) - 2 = 5; the other grouping gives 9.",
      "terms": [
        "Operator: a symbol such as + that combines operand values.",
        "Precedence: the rule that determines which operator groups more tightly.",
        "Associativity: the grouping convention for operators of equal precedence."
      ]
    },
    "compilerSpec": {
      "kind": "expression",
      "input": "12 - 5 - 2",
      "title": "Practice choosing a unique expression tree"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains practice choosing a unique expression tree?",
        "options": [
          "One successful example proves every rewrite safe for every language and input.",
          "Use the stated precedence and associativity rules to construct one expression tree, then evaluate children before their parent. In this independent practice, check the grouping before performing the arithmetic.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter."
        ],
        "answer": 1,
        "explanation": "Use the stated precedence and associativity rules to construct one expression tree, then evaluate children before their parent. In this independent practice, check the grouping before performing the arithmetic. Subtraction is not associative: changing the grouping can change the result. Parentheses override the default grouping; they do not change the meaning of an individual subtraction.",
        "revision": 2
      },
      {
        "type": "number",
        "prompt": "With * above + and left-associative subtraction, what value does 20 + 21 * 22 synthesize?",
        "answer": 482,
        "tolerance": 0,
        "explanation": "Evaluate each child before its parent. Multiplication binds tighter; parentheses override precedence.",
        "revision": 2
      },
      {
        "type": "choice",
        "prompt": "Which postfix sequence represents (21 + 22) * 23?",
        "options": [
          "21 22 23 * +",
          "21 22 + 23 +",
          "21 22 + 23 *"
        ],
        "answer": 2,
        "explanation": "Postorder emits each operand subtree before its operator.",
        "revision": 2
      },
      {
        "type": "number",
        "prompt": "A basic TAC emitter gives every binary operation in 31 - 22 - 5 one temporary and performs no optimization. How many temporary definitions are emitted?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count operator nodes, not operand occurrences or source characters.",
        "revision": 2
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 2,
    "contentStatus": "inferred-title-only",
    "sourceEvidence": [],
    "sourceReferences": [
      {
        "lecture": 8,
        "file": "008. GATE 1996 Question Homework.mp4",
        "skipped": true,
        "reason": "RuntimeError: No speech segments produced: 008. GATE 1996 Question Homework.mp4"
      }
    ],
    "start": 0,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "expression",
      "objective": "Explain the rule: Use the stated precedence and associativity rules to construct one expression tree, then evaluate children before their parent. In this independent practice, check the grouping before performing the arithmetic.",
      "why": "Use the stated precedence and associativity rules to construct one expression tree, then evaluate children before their parent. In this independent practice, check the grouping before performing the arithmetic.",
      "watchFor": "Subtraction is not associative: changing the grouping can change the result. Parentheses override the default grouping; they do not change the meaning of an individual subtraction.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 25,
    "lecture": 8,
    "title": "Practice choosing a unique expression tree · Trace and experiment",
    "concept": "For 12 - 5 - 2, the usual left-associative rule selects (12 - 5) - 2 = 5; the other grouping gives 9.",
    "teachingSteps": [
      "Use the stated precedence and associativity rules to construct one expression tree, then evaluate children before their parent. In this independent practice, check the grouping before performing the arithmetic.",
      "For 12 - 5 - 2, the usual left-associative rule selects (12 - 5) - 2 = 5; the other grouping gives 9.",
      "Subtraction is not associative: changing the grouping can change the result. Parentheses override the default grouping; they do not change the meaning of an individual subtraction."
    ],
    "foundation": {
      "title": "Practice choosing a unique expression tree",
      "idea": "Use the stated precedence and associativity rules to construct one expression tree, then evaluate children before their parent. In this independent practice, check the grouping before performing the arithmetic.",
      "example": "For 12 - 5 - 2, the usual left-associative rule selects (12 - 5) - 2 = 5; the other grouping gives 9.",
      "terms": [
        "Operator: a symbol such as + that combines operand values.",
        "Precedence: the rule that determines which operator groups more tightly.",
        "Associativity: the grouping convention for operators of equal precedence."
      ]
    },
    "compilerSpec": {
      "kind": "expression",
      "input": "12 - 5 - 2",
      "title": "Practice choosing a unique expression tree"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For 12 - 5 - 2, the usual left-associative rule selects (12 - 5) - 2 = 5; the other grouping gives 9.",
        "options": [
          "For 12 - 5 - 2, the usual left-associative rule selects (12 - 5) - 2 = 5; the other grouping gives 9.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input."
        ],
        "answer": 0,
        "explanation": "Use the stated precedence and associativity rules to construct one expression tree, then evaluate children before their parent. In this independent practice, check the grouping before performing the arithmetic. Subtraction is not associative: changing the grouping can change the result. Parentheses override the default grouping; they do not change the meaning of an individual subtraction.",
        "revision": 2
      },
      {
        "type": "number",
        "prompt": "With * above + and left-associative subtraction, what value does 31 + 32 * 33 synthesize?",
        "answer": 1087,
        "tolerance": 0,
        "explanation": "Evaluate each child before its parent. Multiplication binds tighter; parentheses override precedence.",
        "revision": 2
      },
      {
        "type": "choice",
        "prompt": "Which postfix sequence represents (32 + 33) * 34?",
        "options": [
          "32 33 34 * +",
          "32 33 + 34 +",
          "32 33 + 34 *"
        ],
        "answer": 2,
        "explanation": "Postorder emits each operand subtree before its operator.",
        "revision": 2
      },
      {
        "type": "number",
        "prompt": "A basic TAC emitter gives every binary operation in 11 - 2 - 1 one temporary and performs no optimization. How many temporary definitions are emitted?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count operator nodes, not operand occurrences or source characters.",
        "revision": 2
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 2,
    "contentStatus": "inferred-title-only",
    "sourceEvidence": [],
    "sourceReferences": [
      {
        "lecture": 8,
        "file": "008. GATE 1996 Question Homework.mp4",
        "skipped": true,
        "reason": "RuntimeError: No speech segments produced: 008. GATE 1996 Question Homework.mp4"
      }
    ],
    "start": 0,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "expression",
      "objective": "Trace this example: For 12 - 5 - 2, the usual left-associative rule selects (12 - 5) - 2 = 5; the other grouping gives 9.",
      "why": "Use the stated precedence and associativity rules to construct one expression tree, then evaluate children before their parent. In this independent practice, check the grouping before performing the arithmetic.",
      "watchFor": "Subtraction is not associative: changing the grouping can change the result. Parentheses override the default grouping; they do not change the meaning of an individual subtraction.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 26,
    "lecture": 8,
    "title": "Practice choosing a unique expression tree · Apply and challenge",
    "concept": "Subtraction is not associative: changing the grouping can change the result. Parentheses override the default grouping; they do not change the meaning of an individual subtraction.",
    "teachingSteps": [
      "Use the stated precedence and associativity rules to construct one expression tree, then evaluate children before their parent. In this independent practice, check the grouping before performing the arithmetic.",
      "For 12 - 5 - 2, the usual left-associative rule selects (12 - 5) - 2 = 5; the other grouping gives 9.",
      "Subtraction is not associative: changing the grouping can change the result. Parentheses override the default grouping; they do not change the meaning of an individual subtraction."
    ],
    "foundation": {
      "title": "Practice choosing a unique expression tree",
      "idea": "Use the stated precedence and associativity rules to construct one expression tree, then evaluate children before their parent. In this independent practice, check the grouping before performing the arithmetic.",
      "example": "For 12 - 5 - 2, the usual left-associative rule selects (12 - 5) - 2 = 5; the other grouping gives 9.",
      "terms": [
        "Operator: a symbol such as + that combines operand values.",
        "Precedence: the rule that determines which operator groups more tightly.",
        "Associativity: the grouping convention for operators of equal precedence."
      ]
    },
    "compilerSpec": {
      "kind": "expression",
      "input": "12 - 5 - 2",
      "title": "Practice choosing a unique expression tree"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying practice choosing a unique expression tree, which warning prevents a wrong conclusion?",
        "options": [
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "Subtraction is not associative: changing the grouping can change the result. Parentheses override the default grouping; they do not change the meaning of an individual subtraction.",
          "A smaller representation is automatically equivalent, regardless of side effects."
        ],
        "answer": 2,
        "explanation": "Use the stated precedence and associativity rules to construct one expression tree, then evaluate children before their parent. In this independent practice, check the grouping before performing the arithmetic. Subtraction is not associative: changing the grouping can change the result. Parentheses override the default grouping; they do not change the meaning of an individual subtraction.",
        "revision": 2
      },
      {
        "type": "number",
        "prompt": "With * above + and left-associative subtraction, what value does 11 + 12 * 13 synthesize?",
        "answer": 167,
        "tolerance": 0,
        "explanation": "Evaluate each child before its parent. Multiplication binds tighter; parentheses override precedence.",
        "revision": 2
      },
      {
        "type": "choice",
        "prompt": "Which postfix sequence represents (12 + 13) * 14?",
        "options": [
          "12 13 + 14 +",
          "12 13 + 14 *",
          "12 13 14 * +"
        ],
        "answer": 1,
        "explanation": "Postorder emits each operand subtree before its operator.",
        "revision": 2
      },
      {
        "type": "number",
        "prompt": "A basic TAC emitter gives every binary operation in 22 - 13 - 2 one temporary and performs no optimization. How many temporary definitions are emitted?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count operator nodes, not operand occurrences or source characters.",
        "revision": 2
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 2,
    "contentStatus": "inferred-title-only",
    "sourceEvidence": [],
    "sourceReferences": [
      {
        "lecture": 8,
        "file": "008. GATE 1996 Question Homework.mp4",
        "skipped": true,
        "reason": "RuntimeError: No speech segments produced: 008. GATE 1996 Question Homework.mp4"
      }
    ],
    "start": 0,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "expression",
      "objective": "Check this boundary: Subtraction is not associative: changing the grouping can change the result. Parentheses override the default grouping; they do not change the meaning of an individual subtraction.",
      "why": "Use the stated precedence and associativity rules to construct one expression tree, then evaluate children before their parent. In this independent practice, check the grouping before performing the arithmetic.",
      "watchFor": "Subtraction is not associative: changing the grouping can change the result. Parentheses override the default grouping; they do not change the meaning of an individual subtraction.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 27,
    "lecture": 9,
    "title": "Give balanced parentheses a unique decomposition · Understand the concept",
    "concept": "The grammar S → S S | ( S ) | ε allows different concatenation groupings of one balanced word. The replacement S → ( S ) S | ε uses the first matching close to select one interior and one remaining suffix.",
    "teachingSteps": [
      "The grammar S → S S | ( S ) | ε allows different concatenation groupings of one balanced word. The replacement S → ( S ) S | ε uses the first matching close to select one interior and one remaining suffix.",
      "For ()()(), the ambiguous grammar can group the first two pairs together or the last two pairs together. The replacement always selects the first complete pair before recursing on the suffix.",
      "Preserving the set of words does not automatically preserve attached semantic actions; this is a specific construction, not general ambiguity elimination."
    ],
    "foundation": {
      "title": "Give balanced parentheses a unique decomposition",
      "idea": "The grammar S → S S | ( S ) | ε allows different concatenation groupings of one balanced word. The replacement S → ( S ) S | ε uses the first matching close to select one interior and one remaining suffix.",
      "example": "For ()()(), the ambiguous grammar can group the first two pairs together or the last two pairs together. The replacement always selects the first complete pair before recursing on the suffix.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "balanced",
      "input": "()()()",
      "title": "Give balanced parentheses a unique decomposition"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains give balanced parentheses a unique decomposition?",
        "options": [
          "The grammar S → S S | ( S ) | ε allows different concatenation groupings of one balanced word. The replacement S → ( S ) S | ε uses the first matching close to select one interior and one remaining suffix.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input."
        ],
        "answer": 0,
        "explanation": "The grammar S → S S | ( S ) | ε allows different concatenation groupings of one balanced word. The replacement S → ( S ) S | ε uses the first matching close to select one interior and one remaining suffix. Preserving the set of words does not automatically preserve attached semantic actions; this is a specific construction, not general ambiguity elimination.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For the balanced word ((((())))), how many pairs lie inside the outermost pair?",
        "answer": 4,
        "tolerance": 0,
        "explanation": "Remove the first opening parenthesis and its matching final close; the remaining nested word has one fewer pair.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Using S → ( S ) S | ε to decompose ()()()()()(), how many complete pairs remain in the suffix after the first matched pair?",
        "answer": 5,
        "tolerance": 0,
        "explanation": "The first pair is (), so every later pair belongs to the suffix S.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Does the complete word ((((((()))))) belong to the balanced-parenthesis language S → ( S ) S | ε?",
        "options": [
          "Yes",
          "No"
        ],
        "answer": 1,
        "explanation": "Reject: expected ), found $.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 158.7,
        "text": "So, the idea is that any balanced parenthesis that you have, any balanced parenthesis is combination of balanced parenthesis, right? Combination, combination of balanced parenthesis, which means that if you have any balanced parenthesis, which means maybe this, this is a combination of three balanced parenthesis."
      },
      {
        "time": 194.08,
        "text": "or maybe you can have some nested also, which means like something like this. This is also a combination of balanced parenthesis. This is one balanced parenthesis. I mean, okay, this is basically the way I am treating the combination. This is just one combination of balanced parenthesis, which means this is only one outer parenthesis. In between, you have th"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 9,
        "file": "009_Lecture_2d_Elimination_of_Ambiguity_Manually_Example.mp4",
        "completedAt": "{\"file\":\"009_Lecture_2d_Elimination_of_Ambiguity_Manually_Example.mp4\",\"language\":\"en\",\"probability\":0.9951171875,\"processing_seconds\":19.965201377868652,\"device\":\"cuda\"}"
      }
    ],
    "start": 158.7,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "balanced",
      "objective": "Explain the rule: The grammar S → S S | ( S ) | ε allows different concatenation groupings of one balanced word. The replacement S → ( S ) S | ε uses the first matching close to select one interior and one remaining suffix.",
      "why": "The grammar S → S S | ( S ) | ε allows different concatenation groupings of one balanced word. The replacement S → ( S ) S | ε uses the first matching close to select one interior and one remaining suffix.",
      "watchFor": "Preserving the set of words does not automatically preserve attached semantic actions; this is a specific construction, not general ambiguity elimination.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 28,
    "lecture": 9,
    "title": "Give balanced parentheses a unique decomposition · Trace and experiment",
    "concept": "For ()()(), the ambiguous grammar can group the first two pairs together or the last two pairs together. The replacement always selects the first complete pair before recursing on the suffix.",
    "teachingSteps": [
      "The grammar S → S S | ( S ) | ε allows different concatenation groupings of one balanced word. The replacement S → ( S ) S | ε uses the first matching close to select one interior and one remaining suffix.",
      "For ()()(), the ambiguous grammar can group the first two pairs together or the last two pairs together. The replacement always selects the first complete pair before recursing on the suffix.",
      "Preserving the set of words does not automatically preserve attached semantic actions; this is a specific construction, not general ambiguity elimination."
    ],
    "foundation": {
      "title": "Give balanced parentheses a unique decomposition",
      "idea": "The grammar S → S S | ( S ) | ε allows different concatenation groupings of one balanced word. The replacement S → ( S ) S | ε uses the first matching close to select one interior and one remaining suffix.",
      "example": "For ()()(), the ambiguous grammar can group the first two pairs together or the last two pairs together. The replacement always selects the first complete pair before recursing on the suffix.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "balanced",
      "input": "()()()",
      "title": "Give balanced parentheses a unique decomposition"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For ()()(), the ambiguous grammar can group the first two pairs together or the last two pairs together. The replacement always selects the first complete pair before recursing on the suffix.",
        "options": [
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "For ()()(), the ambiguous grammar can group the first two pairs together or the last two pairs together. The replacement always selects the first complete pair before recursing on the suffix.",
          "A smaller representation is automatically equivalent, regardless of side effects."
        ],
        "answer": 2,
        "explanation": "The grammar S → S S | ( S ) | ε allows different concatenation groupings of one balanced word. The replacement S → ( S ) S | ε uses the first matching close to select one interior and one remaining suffix. Preserving the set of words does not automatically preserve attached semantic actions; this is a specific construction, not general ambiguity elimination.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For the balanced word ((((((())))))), how many pairs lie inside the outermost pair?",
        "answer": 6,
        "tolerance": 0,
        "explanation": "Remove the first opening parenthesis and its matching final close; the remaining nested word has one fewer pair.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Using S → ( S ) S | ε to decompose ()()()()()()()(), how many complete pairs remain in the suffix after the first matched pair?",
        "answer": 7,
        "tolerance": 0,
        "explanation": "The first pair is (), so every later pair belongs to the suffix S.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Does the complete word ((((((((()))))))) belong to the balanced-parenthesis language S → ( S ) S | ε?",
        "options": [
          "Yes",
          "No"
        ],
        "answer": 1,
        "explanation": "Reject: expected ), found $.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 158.7,
        "text": "So, the idea is that any balanced parenthesis that you have, any balanced parenthesis is combination of balanced parenthesis, right? Combination, combination of balanced parenthesis, which means that if you have any balanced parenthesis, which means maybe this, this is a combination of three balanced parenthesis."
      },
      {
        "time": 194.08,
        "text": "or maybe you can have some nested also, which means like something like this. This is also a combination of balanced parenthesis. This is one balanced parenthesis. I mean, okay, this is basically the way I am treating the combination. This is just one combination of balanced parenthesis, which means this is only one outer parenthesis. In between, you have th"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 9,
        "file": "009_Lecture_2d_Elimination_of_Ambiguity_Manually_Example.mp4",
        "completedAt": "{\"file\":\"009_Lecture_2d_Elimination_of_Ambiguity_Manually_Example.mp4\",\"language\":\"en\",\"probability\":0.9951171875,\"processing_seconds\":19.965201377868652,\"device\":\"cuda\"}"
      }
    ],
    "start": 158.7,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "balanced",
      "objective": "Trace this example: For ()()(), the ambiguous grammar can group the first two pairs together or the last two pairs together. The replacement always selects the first complete pair before recursing on the suffix.",
      "why": "The grammar S → S S | ( S ) | ε allows different concatenation groupings of one balanced word. The replacement S → ( S ) S | ε uses the first matching close to select one interior and one remaining suffix.",
      "watchFor": "Preserving the set of words does not automatically preserve attached semantic actions; this is a specific construction, not general ambiguity elimination.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 29,
    "lecture": 9,
    "title": "Give balanced parentheses a unique decomposition · Apply and challenge",
    "concept": "Preserving the set of words does not automatically preserve attached semantic actions; this is a specific construction, not general ambiguity elimination.",
    "teachingSteps": [
      "The grammar S → S S | ( S ) | ε allows different concatenation groupings of one balanced word. The replacement S → ( S ) S | ε uses the first matching close to select one interior and one remaining suffix.",
      "For ()()(), the ambiguous grammar can group the first two pairs together or the last two pairs together. The replacement always selects the first complete pair before recursing on the suffix.",
      "Preserving the set of words does not automatically preserve attached semantic actions; this is a specific construction, not general ambiguity elimination."
    ],
    "foundation": {
      "title": "Give balanced parentheses a unique decomposition",
      "idea": "The grammar S → S S | ( S ) | ε allows different concatenation groupings of one balanced word. The replacement S → ( S ) S | ε uses the first matching close to select one interior and one remaining suffix.",
      "example": "For ()()(), the ambiguous grammar can group the first two pairs together or the last two pairs together. The replacement always selects the first complete pair before recursing on the suffix.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "balanced",
      "input": "()()()",
      "title": "Give balanced parentheses a unique decomposition"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying give balanced parentheses a unique decomposition, which warning prevents a wrong conclusion?",
        "options": [
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "Preserving the set of words does not automatically preserve attached semantic actions; this is a specific construction, not general ambiguity elimination."
        ],
        "answer": 3,
        "explanation": "The grammar S → S S | ( S ) | ε allows different concatenation groupings of one balanced word. The replacement S → ( S ) S | ε uses the first matching close to select one interior and one remaining suffix. Preserving the set of words does not automatically preserve attached semantic actions; this is a specific construction, not general ambiguity elimination.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For the balanced word ((((((((())))))))), how many pairs lie inside the outermost pair?",
        "answer": 8,
        "tolerance": 0,
        "explanation": "Remove the first opening parenthesis and its matching final close; the remaining nested word has one fewer pair.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Using S → ( S ) S | ε to decompose ()()()()()()()()()(), how many complete pairs remain in the suffix after the first matched pair?",
        "answer": 9,
        "tolerance": 0,
        "explanation": "The first pair is (), so every later pair belongs to the suffix S.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Does the complete word ((((((((((()))))))))) belong to the balanced-parenthesis language S → ( S ) S | ε?",
        "options": [
          "Yes",
          "No"
        ],
        "answer": 1,
        "explanation": "Reject: expected ), found $.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 158.7,
        "text": "So, the idea is that any balanced parenthesis that you have, any balanced parenthesis is combination of balanced parenthesis, right? Combination, combination of balanced parenthesis, which means that if you have any balanced parenthesis, which means maybe this, this is a combination of three balanced parenthesis."
      },
      {
        "time": 194.08,
        "text": "or maybe you can have some nested also, which means like something like this. This is also a combination of balanced parenthesis. This is one balanced parenthesis. I mean, okay, this is basically the way I am treating the combination. This is just one combination of balanced parenthesis, which means this is only one outer parenthesis. In between, you have th"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 9,
        "file": "009_Lecture_2d_Elimination_of_Ambiguity_Manually_Example.mp4",
        "completedAt": "{\"file\":\"009_Lecture_2d_Elimination_of_Ambiguity_Manually_Example.mp4\",\"language\":\"en\",\"probability\":0.9951171875,\"processing_seconds\":19.965201377868652,\"device\":\"cuda\"}"
      }
    ],
    "start": 158.7,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "balanced",
      "objective": "Check this boundary: Preserving the set of words does not automatically preserve attached semantic actions; this is a specific construction, not general ambiguity elimination.",
      "why": "The grammar S → S S | ( S ) | ε allows different concatenation groupings of one balanced word. The replacement S → ( S ) S | ε uses the first matching close to select one interior and one remaining suffix.",
      "watchFor": "Preserving the set of words does not automatically preserve attached semantic actions; this is a specific construction, not general ambiguity elimination.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 30,
    "lecture": 10,
    "title": "Eliminate direct left recursion · Understand the concept",
    "concept": "If A → A α | β and β does not start with A, replace it with A → β R and R → α R | ε. The new tail repeats α without immediately calling A again.",
    "teachingSteps": [
      "If A → A α | β and β does not start with A, replace it with A → β R and R → α R | ε. The new tail repeats α without immediately calling A again.",
      "E → E + T | T becomes E → T R and R → + T R | ε. A recursive-descent function can now consume a T before following the tail.",
      "Direct-recursion elimination does not automatically remove indirect recursion, ambiguity, or every LL(1) conflict."
    ],
    "foundation": {
      "title": "Eliminate direct left recursion",
      "idea": "If A → A α | β and β does not start with A, replace it with A → β R and R → α R | ε. The new tail repeats α without immediately calling A again.",
      "example": "E → E + T | T becomes E → T R and R → + T R | ε. A recursive-descent function can now consume a T before following the tail.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "rewrite",
      "variant": "recursion",
      "grammar": "E -> E + T | T; T -> id",
      "title": "Eliminate direct left recursion"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains eliminate direct left recursion?",
        "options": [
          "If A → A α | β and β does not start with A, replace it with A → β R and R → α R | ε. The new tail repeats α without immediately calling A again.",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context."
        ],
        "answer": 0,
        "explanation": "If A → A α | β and β does not start with A, replace it with A → β R and R → α R | ε. The new tail repeats α without immediately calling A again. Direct-recursion elimination does not automatically remove indirect recursion, ambiguity, or every LL(1) conflict.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Transform S -> S a32 | b371 by eliminating direct left recursion. Which production belongs in the result?",
        "options": [
          "S' -> S a32",
          "S -> ε",
          "S -> b371 S'",
          "S -> S b371"
        ],
        "answer": 2,
        "explanation": "The transformed productions are S -> b371 S'; S' -> a32 S'; S' -> ε.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Transform S -> S a2 | b372 by eliminating direct left recursion. Which production belongs in the result?",
        "options": [
          "S' -> a2 S'",
          "S -> S b372",
          "S' -> S a2",
          "S -> ε"
        ],
        "answer": 0,
        "explanation": "The transformed productions are S -> b372 S'; S' -> a2 S'; S' -> ε.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Transform S -> S a3 | b373 by eliminating direct left recursion. Which production belongs in the result?",
        "options": [
          "S' -> ε",
          "S -> S b373",
          "S' -> S a3",
          "S -> ε"
        ],
        "answer": 0,
        "explanation": "The transformed productions are S -> b373 S'; S' -> a3 S'; S' -> ε.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 33.18,
        "text": "and there are few more problems to the parsers so before I start parsing let me just tell you two more problems that parsers face and then we will later connect the dots like why these are problems so one problem is ambiguous grammar another problem is something called as left recursion left recursion another problem is something called as not left factored "
      },
      {
        "time": 89.17,
        "text": "but I am following the flow that Dragon book is following. So, in the Dragon book also they have listed down the problems first and then they later went on telling about the parsers. So, I am following the same flow. So, let me first talk about the left recursion and not left factor grammar and then I will talk about like why these are problems and what is p"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 10,
        "file": "010. Lecture 3a. Left Recursion and Left Factoring.mp4",
        "completedAt": "{\"file\":\"010. Lecture 3a. Left Recursion and Left Factoring.mp4\",\"language\":\"en\",\"probability\":0.990234375,\"processing_seconds\":78.03120970726013,\"device\":\"cuda\"}"
      }
    ],
    "start": 33.18,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "rewrite",
      "objective": "Explain the rule: If A → A α | β and β does not start with A, replace it with A → β R and R → α R | ε. The new tail repeats α without immediately calling A again.",
      "why": "If A → A α | β and β does not start with A, replace it with A → β R and R → α R | ε. The new tail repeats α without immediately calling A again.",
      "watchFor": "Direct-recursion elimination does not automatically remove indirect recursion, ambiguity, or every LL(1) conflict.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 31,
    "lecture": 10,
    "title": "Eliminate direct left recursion · Trace and experiment",
    "concept": "E → E + T | T becomes E → T R and R → + T R | ε. A recursive-descent function can now consume a T before following the tail.",
    "teachingSteps": [
      "If A → A α | β and β does not start with A, replace it with A → β R and R → α R | ε. The new tail repeats α without immediately calling A again.",
      "E → E + T | T becomes E → T R and R → + T R | ε. A recursive-descent function can now consume a T before following the tail.",
      "Direct-recursion elimination does not automatically remove indirect recursion, ambiguity, or every LL(1) conflict."
    ],
    "foundation": {
      "title": "Eliminate direct left recursion",
      "idea": "If A → A α | β and β does not start with A, replace it with A → β R and R → α R | ε. The new tail repeats α without immediately calling A again.",
      "example": "E → E + T | T becomes E → T R and R → + T R | ε. A recursive-descent function can now consume a T before following the tail.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "rewrite",
      "variant": "recursion",
      "grammar": "E -> E + T | T; T -> id",
      "title": "Eliminate direct left recursion"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: E → E + T | T becomes E → T R and R → + T R | ε. A recursive-descent function can now consume a T before following the tail.",
        "options": [
          "E → E + T | T becomes E → T R and R → + T R | ε. A recursive-descent function can now consume a T before following the tail.",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context."
        ],
        "answer": 0,
        "explanation": "If A → A α | β and β does not start with A, replace it with A → β R and R → α R | ε. The new tail repeats α without immediately calling A again. Direct-recursion elimination does not automatically remove indirect recursion, ambiguity, or every LL(1) conflict.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Transform S -> S a12 | b382 by eliminating direct left recursion. Which production belongs in the result?",
        "options": [
          "S -> b382 S'",
          "S -> S b382",
          "S' -> S a12",
          "S -> ε"
        ],
        "answer": 0,
        "explanation": "The transformed productions are S -> b382 S'; S' -> a12 S'; S' -> ε.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Transform S -> S a13 | b383 by eliminating direct left recursion. Which production belongs in the result?",
        "options": [
          "S' -> a13 S'",
          "S -> S b383",
          "S' -> S a13",
          "S -> ε"
        ],
        "answer": 0,
        "explanation": "The transformed productions are S -> b383 S'; S' -> a13 S'; S' -> ε.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Transform S -> S a14 | b384 by eliminating direct left recursion. Which production belongs in the result?",
        "options": [
          "S' -> ε",
          "S -> S b384",
          "S' -> S a14",
          "S -> ε"
        ],
        "answer": 0,
        "explanation": "The transformed productions are S -> b384 S'; S' -> a14 S'; S' -> ε.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 33.18,
        "text": "and there are few more problems to the parsers so before I start parsing let me just tell you two more problems that parsers face and then we will later connect the dots like why these are problems so one problem is ambiguous grammar another problem is something called as left recursion left recursion another problem is something called as not left factored "
      },
      {
        "time": 89.17,
        "text": "but I am following the flow that Dragon book is following. So, in the Dragon book also they have listed down the problems first and then they later went on telling about the parsers. So, I am following the same flow. So, let me first talk about the left recursion and not left factor grammar and then I will talk about like why these are problems and what is p"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 10,
        "file": "010. Lecture 3a. Left Recursion and Left Factoring.mp4",
        "completedAt": "{\"file\":\"010. Lecture 3a. Left Recursion and Left Factoring.mp4\",\"language\":\"en\",\"probability\":0.990234375,\"processing_seconds\":78.03120970726013,\"device\":\"cuda\"}"
      }
    ],
    "start": 33.18,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "rewrite",
      "objective": "Trace this example: E → E + T | T becomes E → T R and R → + T R | ε. A recursive-descent function can now consume a T before following the tail.",
      "why": "If A → A α | β and β does not start with A, replace it with A → β R and R → α R | ε. The new tail repeats α without immediately calling A again.",
      "watchFor": "Direct-recursion elimination does not automatically remove indirect recursion, ambiguity, or every LL(1) conflict.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 32,
    "lecture": 10,
    "title": "Eliminate direct left recursion · Apply and challenge",
    "concept": "Direct-recursion elimination does not automatically remove indirect recursion, ambiguity, or every LL(1) conflict.",
    "teachingSteps": [
      "If A → A α | β and β does not start with A, replace it with A → β R and R → α R | ε. The new tail repeats α without immediately calling A again.",
      "E → E + T | T becomes E → T R and R → + T R | ε. A recursive-descent function can now consume a T before following the tail.",
      "Direct-recursion elimination does not automatically remove indirect recursion, ambiguity, or every LL(1) conflict."
    ],
    "foundation": {
      "title": "Eliminate direct left recursion",
      "idea": "If A → A α | β and β does not start with A, replace it with A → β R and R → α R | ε. The new tail repeats α without immediately calling A again.",
      "example": "E → E + T | T becomes E → T R and R → + T R | ε. A recursive-descent function can now consume a T before following the tail.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "rewrite",
      "variant": "recursion",
      "grammar": "E -> E + T | T; T -> id",
      "title": "Eliminate direct left recursion"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying eliminate direct left recursion, which warning prevents a wrong conclusion?",
        "options": [
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context.",
          "Direct-recursion elimination does not automatically remove indirect recursion, ambiguity, or every LL(1) conflict."
        ],
        "answer": 3,
        "explanation": "If A → A α | β and β does not start with A, replace it with A → β R and R → α R | ε. The new tail repeats α without immediately calling A again. Direct-recursion elimination does not automatically remove indirect recursion, ambiguity, or every LL(1) conflict.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Transform S -> S a23 | b393 by eliminating direct left recursion. Which production belongs in the result?",
        "options": [
          "S -> b393 S'",
          "S -> S b393",
          "S' -> S a23",
          "S -> ε"
        ],
        "answer": 0,
        "explanation": "The transformed productions are S -> b393 S'; S' -> a23 S'; S' -> ε.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Transform S -> S a24 | b394 by eliminating direct left recursion. Which production belongs in the result?",
        "options": [
          "S' -> a24 S'",
          "S -> S b394",
          "S' -> S a24",
          "S -> ε"
        ],
        "answer": 0,
        "explanation": "The transformed productions are S -> b394 S'; S' -> a24 S'; S' -> ε.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Transform S -> S a25 | b395 by eliminating direct left recursion. Which production belongs in the result?",
        "options": [
          "S' -> ε",
          "S -> S b395",
          "S' -> S a25",
          "S -> ε"
        ],
        "answer": 0,
        "explanation": "The transformed productions are S -> b395 S'; S' -> a25 S'; S' -> ε.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 33.18,
        "text": "and there are few more problems to the parsers so before I start parsing let me just tell you two more problems that parsers face and then we will later connect the dots like why these are problems so one problem is ambiguous grammar another problem is something called as left recursion left recursion another problem is something called as not left factored "
      },
      {
        "time": 89.17,
        "text": "but I am following the flow that Dragon book is following. So, in the Dragon book also they have listed down the problems first and then they later went on telling about the parsers. So, I am following the same flow. So, let me first talk about the left recursion and not left factor grammar and then I will talk about like why these are problems and what is p"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 10,
        "file": "010. Lecture 3a. Left Recursion and Left Factoring.mp4",
        "completedAt": "{\"file\":\"010. Lecture 3a. Left Recursion and Left Factoring.mp4\",\"language\":\"en\",\"probability\":0.990234375,\"processing_seconds\":78.03120970726013,\"device\":\"cuda\"}"
      }
    ],
    "start": 33.18,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "rewrite",
      "objective": "Check this boundary: Direct-recursion elimination does not automatically remove indirect recursion, ambiguity, or every LL(1) conflict.",
      "why": "If A → A α | β and β does not start with A, replace it with A → β R and R → α R | ε. The new tail repeats α without immediately calling A again.",
      "watchFor": "Direct-recursion elimination does not automatically remove indirect recursion, ambiguity, or every LL(1) conflict.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 33,
    "lecture": 11,
    "title": "Factor a common production prefix · Understand the concept",
    "concept": "When alternatives share a prefix, consume that prefix once and move the remaining alternatives into a new nonterminal. This postpones the choice until more input is available.",
    "teachingSteps": [
      "When alternatives share a prefix, consume that prefix once and move the remaining alternatives into a new nonterminal. This postpones the choice until more input is available.",
      "S → a b c | a b d becomes S → a b R and R → c | d. The parser can decide at c versus d.",
      "A factored grammar can still contain a conflict. Prove predictive suitability using FIRST, FOLLOW and table cells."
    ],
    "foundation": {
      "title": "Factor a common production prefix",
      "idea": "When alternatives share a prefix, consume that prefix once and move the remaining alternatives into a new nonterminal. This postpones the choice until more input is available.",
      "example": "S → a b c | a b d becomes S → a b R and R → c | d. The parser can decide at c versus d.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "rewrite",
      "variant": "factor",
      "grammar": "S -> a b c | a b d",
      "title": "Factor a common production prefix"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains factor a common production prefix?",
        "options": [
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context.",
          "When alternatives share a prefix, consume that prefix once and move the remaining alternatives into a new nonterminal. This postpones the choice until more input is available.",
          "Every factored grammar must be LL(1), even if its table has conflicts."
        ],
        "answer": 2,
        "explanation": "When alternatives share a prefix, consume that prefix once and move the remaining alternatives into a new nonterminal. This postpones the choice until more input is available. A factored grammar can still contain a conflict. Prove predictive suitability using FIRST, FOLLOW and table cells.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Transform S -> a7 b408 c | a7 b408 d by factoring its common prefix. Which production belongs in the result?",
        "options": [
          "S' -> S a7",
          "S -> ε",
          "S -> a7 b408 S'",
          "S -> S b408"
        ],
        "answer": 2,
        "explanation": "The transformed productions are S -> a7 b408 S'; S' -> c; S' -> d.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Transform S -> a8 b409 c | a8 b409 d by factoring its common prefix. Which production belongs in the result?",
        "options": [
          "S' -> S a8",
          "S -> ε",
          "S' -> c",
          "S -> S b409"
        ],
        "answer": 2,
        "explanation": "The transformed productions are S -> a8 b409 S'; S' -> c; S' -> d.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Transform S -> a9 b410 c | a9 b410 d by factoring its common prefix. Which production belongs in the result?",
        "options": [
          "S' -> d",
          "S -> S b410",
          "S' -> S a9",
          "S -> ε"
        ],
        "answer": 0,
        "explanation": "The transformed productions are S -> a9 b410 S'; S' -> c; S' -> d.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0.43,
        "text": "Hi everyone, so let's see one last example of left left factor in grammar So how to left factor this grammar as you need to notice that given in this grammar This grammar is not left factor because this is some symbol and this is the another symbol which is which is coming as a common prefix, right? So T is common to both of the productions So these are the "
      },
      {
        "time": 29.76,
        "text": "So, T and F are common in these two productions. So, I want to convert this production into left factored grammar. So, let's just do it. How to do it? E Gibbs, I will just say that T is common. So, T E prime maybe and then I will say E prime Gibbs whatever is remaining. So, what is remaining? From the first production you can say ORE or E is remaining or E i"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 11,
        "file": "011. Lecture 3b. One more example on Left Factoring.mp4",
        "completedAt": "{\"file\":\"011. Lecture 3b. One more example on Left Factoring.mp4\",\"language\":\"en\",\"probability\":0.9765625,\"processing_seconds\":3.7586371898651123,\"device\":\"cuda\"}"
      }
    ],
    "start": 0.43,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "rewrite",
      "objective": "Explain the rule: When alternatives share a prefix, consume that prefix once and move the remaining alternatives into a new nonterminal. This postpones the choice until more input is available.",
      "why": "When alternatives share a prefix, consume that prefix once and move the remaining alternatives into a new nonterminal. This postpones the choice until more input is available.",
      "watchFor": "A factored grammar can still contain a conflict. Prove predictive suitability using FIRST, FOLLOW and table cells.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 34,
    "lecture": 11,
    "title": "Factor a common production prefix · Trace and experiment",
    "concept": "S → a b c | a b d becomes S → a b R and R → c | d. The parser can decide at c versus d.",
    "teachingSteps": [
      "When alternatives share a prefix, consume that prefix once and move the remaining alternatives into a new nonterminal. This postpones the choice until more input is available.",
      "S → a b c | a b d becomes S → a b R and R → c | d. The parser can decide at c versus d.",
      "A factored grammar can still contain a conflict. Prove predictive suitability using FIRST, FOLLOW and table cells."
    ],
    "foundation": {
      "title": "Factor a common production prefix",
      "idea": "When alternatives share a prefix, consume that prefix once and move the remaining alternatives into a new nonterminal. This postpones the choice until more input is available.",
      "example": "S → a b c | a b d becomes S → a b R and R → c | d. The parser can decide at c versus d.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "rewrite",
      "variant": "factor",
      "grammar": "S -> a b c | a b d",
      "title": "Factor a common production prefix"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: S → a b c | a b d becomes S → a b R and R → c | d. The parser can decide at c versus d.",
        "options": [
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context.",
          "S → a b c | a b d becomes S → a b R and R → c | d. The parser can decide at c versus d."
        ],
        "answer": 3,
        "explanation": "When alternatives share a prefix, consume that prefix once and move the remaining alternatives into a new nonterminal. This postpones the choice until more input is available. A factored grammar can still contain a conflict. Prove predictive suitability using FIRST, FOLLOW and table cells.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Transform S -> a18 b419 c | a18 b419 d by factoring its common prefix. Which production belongs in the result?",
        "options": [
          "S -> a18 b419 S'",
          "S -> S b419",
          "S' -> S a18",
          "S -> ε"
        ],
        "answer": 0,
        "explanation": "The transformed productions are S -> a18 b419 S'; S' -> c; S' -> d.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Transform S -> a19 b420 c | a19 b420 d by factoring its common prefix. Which production belongs in the result?",
        "options": [
          "S' -> c",
          "S -> S b420",
          "S' -> S a19",
          "S -> ε"
        ],
        "answer": 0,
        "explanation": "The transformed productions are S -> a19 b420 S'; S' -> c; S' -> d.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Transform S -> a20 b421 c | a20 b421 d by factoring its common prefix. Which production belongs in the result?",
        "options": [
          "S' -> d",
          "S -> S b421",
          "S' -> S a20",
          "S -> ε"
        ],
        "answer": 0,
        "explanation": "The transformed productions are S -> a20 b421 S'; S' -> c; S' -> d.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0.43,
        "text": "Hi everyone, so let's see one last example of left left factor in grammar So how to left factor this grammar as you need to notice that given in this grammar This grammar is not left factor because this is some symbol and this is the another symbol which is which is coming as a common prefix, right? So T is common to both of the productions So these are the "
      },
      {
        "time": 29.76,
        "text": "So, T and F are common in these two productions. So, I want to convert this production into left factored grammar. So, let's just do it. How to do it? E Gibbs, I will just say that T is common. So, T E prime maybe and then I will say E prime Gibbs whatever is remaining. So, what is remaining? From the first production you can say ORE or E is remaining or E i"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 11,
        "file": "011. Lecture 3b. One more example on Left Factoring.mp4",
        "completedAt": "{\"file\":\"011. Lecture 3b. One more example on Left Factoring.mp4\",\"language\":\"en\",\"probability\":0.9765625,\"processing_seconds\":3.7586371898651123,\"device\":\"cuda\"}"
      }
    ],
    "start": 0.43,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "rewrite",
      "objective": "Trace this example: S → a b c | a b d becomes S → a b R and R → c | d. The parser can decide at c versus d.",
      "why": "When alternatives share a prefix, consume that prefix once and move the remaining alternatives into a new nonterminal. This postpones the choice until more input is available.",
      "watchFor": "A factored grammar can still contain a conflict. Prove predictive suitability using FIRST, FOLLOW and table cells.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 35,
    "lecture": 11,
    "title": "Factor a common production prefix · Apply and challenge",
    "concept": "A factored grammar can still contain a conflict. Prove predictive suitability using FIRST, FOLLOW and table cells.",
    "teachingSteps": [
      "When alternatives share a prefix, consume that prefix once and move the remaining alternatives into a new nonterminal. This postpones the choice until more input is available.",
      "S → a b c | a b d becomes S → a b R and R → c | d. The parser can decide at c versus d.",
      "A factored grammar can still contain a conflict. Prove predictive suitability using FIRST, FOLLOW and table cells."
    ],
    "foundation": {
      "title": "Factor a common production prefix",
      "idea": "When alternatives share a prefix, consume that prefix once and move the remaining alternatives into a new nonterminal. This postpones the choice until more input is available.",
      "example": "S → a b c | a b d becomes S → a b R and R → c | d. The parser can decide at c versus d.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "rewrite",
      "variant": "factor",
      "grammar": "S -> a b c | a b d",
      "title": "Factor a common production prefix"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying factor a common production prefix, which warning prevents a wrong conclusion?",
        "options": [
          "An empty production can be selected regardless of lookahead and context.",
          "A factored grammar can still contain a conflict. Prove predictive suitability using FIRST, FOLLOW and table cells.",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous."
        ],
        "answer": 1,
        "explanation": "When alternatives share a prefix, consume that prefix once and move the remaining alternatives into a new nonterminal. This postpones the choice until more input is available. A factored grammar can still contain a conflict. Prove predictive suitability using FIRST, FOLLOW and table cells.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Transform S -> a29 b430 c | a29 b430 d by factoring its common prefix. Which production belongs in the result?",
        "options": [
          "S -> a29 b430 S'",
          "S -> S b430",
          "S' -> S a29",
          "S -> ε"
        ],
        "answer": 0,
        "explanation": "The transformed productions are S -> a29 b430 S'; S' -> c; S' -> d.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Transform S -> a30 b431 c | a30 b431 d by factoring its common prefix. Which production belongs in the result?",
        "options": [
          "S' -> c",
          "S -> S b431",
          "S' -> S a30",
          "S -> ε"
        ],
        "answer": 0,
        "explanation": "The transformed productions are S -> a30 b431 S'; S' -> c; S' -> d.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Transform S -> a31 b432 c | a31 b432 d by factoring its common prefix. Which production belongs in the result?",
        "options": [
          "S' -> d",
          "S -> S b432",
          "S' -> S a31",
          "S -> ε"
        ],
        "answer": 0,
        "explanation": "The transformed productions are S -> a31 b432 S'; S' -> c; S' -> d.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0.43,
        "text": "Hi everyone, so let's see one last example of left left factor in grammar So how to left factor this grammar as you need to notice that given in this grammar This grammar is not left factor because this is some symbol and this is the another symbol which is which is coming as a common prefix, right? So T is common to both of the productions So these are the "
      },
      {
        "time": 29.76,
        "text": "So, T and F are common in these two productions. So, I want to convert this production into left factored grammar. So, let's just do it. How to do it? E Gibbs, I will just say that T is common. So, T E prime maybe and then I will say E prime Gibbs whatever is remaining. So, what is remaining? From the first production you can say ORE or E is remaining or E i"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 11,
        "file": "011. Lecture 3b. One more example on Left Factoring.mp4",
        "completedAt": "{\"file\":\"011. Lecture 3b. One more example on Left Factoring.mp4\",\"language\":\"en\",\"probability\":0.9765625,\"processing_seconds\":3.7586371898651123,\"device\":\"cuda\"}"
      }
    ],
    "start": 0.43,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "rewrite",
      "objective": "Check this boundary: A factored grammar can still contain a conflict. Prove predictive suitability using FIRST, FOLLOW and table cells.",
      "why": "When alternatives share a prefix, consume that prefix once and move the remaining alternatives into a new nonterminal. This postpones the choice until more input is available.",
      "watchFor": "A factored grammar can still contain a conflict. Prove predictive suitability using FIRST, FOLLOW and table cells.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 36,
    "lecture": 12,
    "title": "Top-down and bottom-up parsing · Understand the concept",
    "concept": "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation.",
    "teachingSteps": [
      "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation.",
      "For S → a B and B → b, top-down gives S ⇒ a B ⇒ a b; bottom-up gives a b ⇒ a B ⇒ S.",
      "A handle is not any substring matching a right-hand side. The parser context must justify reversing that derivation step."
    ],
    "foundation": {
      "title": "Top-down and bottom-up parsing",
      "idea": "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation.",
      "example": "For S → a B and B → b, top-down gives S ⇒ a B ⇒ a b; bottom-up gives a b ⇒ a B ⇒ S.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "direction",
      "title": "Top-down and bottom-up parsing"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains top-down and bottom-up parsing?",
        "options": [
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context.",
          "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation.",
          "Every factored grammar must be LL(1), even if its table has conflicts."
        ],
        "answer": 2,
        "explanation": "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation. A handle is not any substring matching a right-hand side. The parser context must justify reversing that derivation step.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "With S → a B and B → b, what is the first top-down sentential form?",
        "options": [
          "B b",
          "S",
          "a b"
        ],
        "answer": 1,
        "explanation": "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation. For S → a B and B → b, top-down gives S ⇒ a B ⇒ a b; bottom-up gives a b ⇒ a B ⇒ S.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "What follows S in the derivation S ⇒ a B ⇒ a b?",
        "options": [
          "a a",
          "a B",
          "B a"
        ],
        "answer": 1,
        "explanation": "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation. For S → a B and B → b, top-down gives S ⇒ a B ⇒ a b; bottom-up gives a b ⇒ a B ⇒ S.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which is a terminal in S → a B; B → b?",
        "options": [
          "a",
          "S",
          "B"
        ],
        "answer": 0,
        "explanation": "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation. For S → a B and B → b, top-down gives S ⇒ a B ⇒ a b; bottom-up gives a b ⇒ a B ⇒ S.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 1.2,
        "text": "So now let's move to parsing and let me tell you that what does it mean to say that what? It is parsing and what does the parser do? Okay, so there are two types of parsing one is top down and another one is bottom up top down says that we will start from the start symbol begin with the start symbol and then we will try guessing the productions right so Supp"
      },
      {
        "time": 28.6,
        "text": "and there is some graven so what you will do you will be starting from start symbol and then you will be reaching to this string this is called top down bottom up says that you will start from the string which is let's suppose a b a and then you will you will go to start symbol right so there are two approaches I mean you have two things in your hand right w"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 12,
        "file": "012. Lecture 4a. Introduction to Parsing _ Type of Parse.mp4",
        "completedAt": "{\"file\":\"012. Lecture 4a. Introduction to Parsing _ Type of Parse.mp4\",\"language\":\"en\",\"probability\":0.99267578125,\"processing_seconds\":18.109936714172363,\"device\":\"cuda\"}"
      }
    ],
    "start": 1.2,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "direction",
      "objective": "Explain the rule: Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation.",
      "why": "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation.",
      "watchFor": "A handle is not any substring matching a right-hand side. The parser context must justify reversing that derivation step.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 37,
    "lecture": 12,
    "title": "Top-down and bottom-up parsing · Trace and experiment",
    "concept": "For S → a B and B → b, top-down gives S ⇒ a B ⇒ a b; bottom-up gives a b ⇒ a B ⇒ S.",
    "teachingSteps": [
      "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation.",
      "For S → a B and B → b, top-down gives S ⇒ a B ⇒ a b; bottom-up gives a b ⇒ a B ⇒ S.",
      "A handle is not any substring matching a right-hand side. The parser context must justify reversing that derivation step."
    ],
    "foundation": {
      "title": "Top-down and bottom-up parsing",
      "idea": "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation.",
      "example": "For S → a B and B → b, top-down gives S ⇒ a B ⇒ a b; bottom-up gives a b ⇒ a B ⇒ S.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "direction",
      "title": "Top-down and bottom-up parsing"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For S → a B and B → b, top-down gives S ⇒ a B ⇒ a b; bottom-up gives a b ⇒ a B ⇒ S.",
        "options": [
          "An empty production can be selected regardless of lookahead and context.",
          "For S → a B and B → b, top-down gives S ⇒ a B ⇒ a b; bottom-up gives a b ⇒ a B ⇒ S.",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous."
        ],
        "answer": 1,
        "explanation": "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation. A handle is not any substring matching a right-hand side. The parser context must justify reversing that derivation step.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which is the first reduction when reversing S ⇒ a B ⇒ a b?",
        "options": [
          "Replace a b with a.",
          "Replace b with B.",
          "Replace a with B."
        ],
        "answer": 1,
        "explanation": "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation. For S → a B and B → b, top-down gives S ⇒ a B ⇒ a b; bottom-up gives a b ⇒ a B ⇒ S.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "What does a B reduce to under S → a B?",
        "options": [
          "B",
          "S",
          "a"
        ],
        "answer": 1,
        "explanation": "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation. For S → a B and B → b, top-down gives S ⇒ a B ⇒ a b; bottom-up gives a b ⇒ a B ⇒ S.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which derivation direction is reversed by conventional bottom-up LR parsing?",
        "options": [
          "An arbitrary tree walk.",
          "Lexicographically sorted.",
          "Rightmost."
        ],
        "answer": 2,
        "explanation": "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation. For S → a B and B → b, top-down gives S ⇒ a B ⇒ a b; bottom-up gives a b ⇒ a B ⇒ S.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 1.2,
        "text": "So now let's move to parsing and let me tell you that what does it mean to say that what? It is parsing and what does the parser do? Okay, so there are two types of parsing one is top down and another one is bottom up top down says that we will start from the start symbol begin with the start symbol and then we will try guessing the productions right so Supp"
      },
      {
        "time": 28.6,
        "text": "and there is some graven so what you will do you will be starting from start symbol and then you will be reaching to this string this is called top down bottom up says that you will start from the string which is let's suppose a b a and then you will you will go to start symbol right so there are two approaches I mean you have two things in your hand right w"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 12,
        "file": "012. Lecture 4a. Introduction to Parsing _ Type of Parse.mp4",
        "completedAt": "{\"file\":\"012. Lecture 4a. Introduction to Parsing _ Type of Parse.mp4\",\"language\":\"en\",\"probability\":0.99267578125,\"processing_seconds\":18.109936714172363,\"device\":\"cuda\"}"
      }
    ],
    "start": 1.2,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "direction",
      "objective": "Trace this example: For S → a B and B → b, top-down gives S ⇒ a B ⇒ a b; bottom-up gives a b ⇒ a B ⇒ S.",
      "why": "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation.",
      "watchFor": "A handle is not any substring matching a right-hand side. The parser context must justify reversing that derivation step.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 38,
    "lecture": 12,
    "title": "Top-down and bottom-up parsing · Apply and challenge",
    "concept": "A handle is not any substring matching a right-hand side. The parser context must justify reversing that derivation step.",
    "teachingSteps": [
      "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation.",
      "For S → a B and B → b, top-down gives S ⇒ a B ⇒ a b; bottom-up gives a b ⇒ a B ⇒ S.",
      "A handle is not any substring matching a right-hand side. The parser context must justify reversing that derivation step."
    ],
    "foundation": {
      "title": "Top-down and bottom-up parsing",
      "idea": "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation.",
      "example": "For S → a B and B → b, top-down gives S ⇒ a B ⇒ a b; bottom-up gives a b ⇒ a B ⇒ S.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "direction",
      "title": "Top-down and bottom-up parsing"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying top-down and bottom-up parsing, which warning prevents a wrong conclusion?",
        "options": [
          "An empty production can be selected regardless of lookahead and context.",
          "A handle is not any substring matching a right-hand side. The parser context must justify reversing that derivation step.",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous."
        ],
        "answer": 1,
        "explanation": "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation. A handle is not any substring matching a right-hand side. The parser context must justify reversing that derivation step.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Is every substring matching a production right side necessarily a handle?",
        "options": [
          "Only if its characters are uppercase.",
          "No; the right-sentential-form context also matters.",
          "Yes, regardless of stack or input."
        ],
        "answer": 1,
        "explanation": "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation. For S → a B and B → b, top-down gives S ⇒ a B ⇒ a b; bottom-up gives a b ⇒ a B ⇒ S.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which parser family typically implements recursive descent?",
        "options": [
          "A linker.",
          "Bottom-up code generation.",
          "Top-down."
        ],
        "answer": 2,
        "explanation": "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation. For S → a B and B → b, top-down gives S ⇒ a B ⇒ a b; bottom-up gives a b ⇒ a B ⇒ S.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "What does shifting do in a bottom-up parser?",
        "options": [
          "Moves the next input terminal onto the stack.",
          "Rewrites all nonterminals at once.",
          "Accepts the entire input immediately."
        ],
        "answer": 0,
        "explanation": "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation. For S → a B and B → b, top-down gives S ⇒ a B ⇒ a b; bottom-up gives a b ⇒ a B ⇒ S.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 1.2,
        "text": "So now let's move to parsing and let me tell you that what does it mean to say that what? It is parsing and what does the parser do? Okay, so there are two types of parsing one is top down and another one is bottom up top down says that we will start from the start symbol begin with the start symbol and then we will try guessing the productions right so Supp"
      },
      {
        "time": 28.6,
        "text": "and there is some graven so what you will do you will be starting from start symbol and then you will be reaching to this string this is called top down bottom up says that you will start from the string which is let's suppose a b a and then you will you will go to start symbol right so there are two approaches I mean you have two things in your hand right w"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 12,
        "file": "012. Lecture 4a. Introduction to Parsing _ Type of Parse.mp4",
        "completedAt": "{\"file\":\"012. Lecture 4a. Introduction to Parsing _ Type of Parse.mp4\",\"language\":\"en\",\"probability\":0.99267578125,\"processing_seconds\":18.109936714172363,\"device\":\"cuda\"}"
      }
    ],
    "start": 1.2,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "direction",
      "objective": "Check this boundary: A handle is not any substring matching a right-hand side. The parser context must justify reversing that derivation step.",
      "why": "Top-down parsing starts with the start symbol and expands toward the input. Bottom-up parsing starts with the input and reduces handles toward the start symbol, reversing a rightmost derivation.",
      "watchFor": "A handle is not any substring matching a right-hand side. The parser context must justify reversing that derivation step.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 39,
    "lecture": 13,
    "title": "Backtracking versus predictive choices · Understand the concept",
    "concept": "A backtracking top-down parser may try one production and restore its input position when that attempt fails. A predictive parser uses lookahead and a conflict-free table to select a production without retrying.",
    "teachingSteps": [
      "A backtracking top-down parser may try one production and restore its input position when that attempt fails. A predictive parser uses lookahead and a conflict-free table to select a production without retrying.",
      "If both S → a A and S → a B begin with a, one lookahead cannot select between them in the unfactored grammar.",
      "Greedily choosing the first listed alternative is not a proof that the grammar is LL(1)."
    ],
    "foundation": {
      "title": "Backtracking versus predictive choices",
      "idea": "A backtracking top-down parser may try one production and restore its input position when that attempt fails. A predictive parser uses lookahead and a conflict-free table to select a production without retrying.",
      "example": "If both S → a A and S → a B begin with a, one lookahead cannot select between them in the unfactored grammar.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lltable",
      "grammar": "S -> a A | a B; A -> b; B -> c",
      "title": "Backtracking versus predictive choices"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains backtracking versus predictive choices?",
        "options": [
          "An empty production can be selected regardless of lookahead and context.",
          "A backtracking top-down parser may try one production and restore its input position when that attempt fails. A predictive parser uses lookahead and a conflict-free table to select a production without retrying.",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous."
        ],
        "answer": 1,
        "explanation": "A backtracking top-down parser may try one production and restore its input position when that attempt fails. A predictive parser uses lookahead and a conflict-free table to select a production without retrying. Greedily choosing the first listed alternative is not a proof that the grammar is LL(1).",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Build the LL(1) table for S -> A B; A -> a19 | ε; B -> b482 | ε. How many cells contain more than one production?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, rather than the total number of alternatives in those cells.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> a20 A | a20 B; A -> b483; B -> c21, how many productions occupy predictive cell (S, a20)?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Populate from FIRST(rhs), and include FOLLOW(lhs) when rhs is nullable.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Build the LL(1) table for S -> A B; A -> a21 | ε; B -> b484 | ε. How many cells contain more than one production?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, rather than the total number of alternatives in those cells.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0,
        "text": "Okay, so top-down parsers are basically two types one that uses backtracking another that doesn't uses backtracking Which means that if you are starting from the start symbol One is the top-down parser where where if you fail let's suppose let's suppose This is this is e plus t is your production if you fail using this production then you will say that okay "
      },
      {
        "time": 29.72,
        "text": "and if it fails then you will try this production which means you are backtracking you will backtrack and you will be here so this is this is one kind of parser which uses backtracking another kind of parser which doesn't uses backtracking what does this mean this only means that if you somehow say that you are going to you are going to use this e plus t and"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 13,
        "file": "013. Lecture 4b. Types of Top Down Parsers.mp4",
        "completedAt": "{\"file\":\"013. Lecture 4b. Types of Top Down Parsers.mp4\",\"language\":\"en\",\"probability\":0.99169921875,\"processing_seconds\":24.65834665298462,\"device\":\"cuda\"}"
      }
    ],
    "start": 0,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lltable",
      "objective": "Explain the rule: A backtracking top-down parser may try one production and restore its input position when that attempt fails. A predictive parser uses lookahead and a conflict-free table to select a production without retrying.",
      "why": "A backtracking top-down parser may try one production and restore its input position when that attempt fails. A predictive parser uses lookahead and a conflict-free table to select a production without retrying.",
      "watchFor": "Greedily choosing the first listed alternative is not a proof that the grammar is LL(1).",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 40,
    "lecture": 13,
    "title": "Backtracking versus predictive choices · Trace and experiment",
    "concept": "If both S → a A and S → a B begin with a, one lookahead cannot select between them in the unfactored grammar.",
    "teachingSteps": [
      "A backtracking top-down parser may try one production and restore its input position when that attempt fails. A predictive parser uses lookahead and a conflict-free table to select a production without retrying.",
      "If both S → a A and S → a B begin with a, one lookahead cannot select between them in the unfactored grammar.",
      "Greedily choosing the first listed alternative is not a proof that the grammar is LL(1)."
    ],
    "foundation": {
      "title": "Backtracking versus predictive choices",
      "idea": "A backtracking top-down parser may try one production and restore its input position when that attempt fails. A predictive parser uses lookahead and a conflict-free table to select a production without retrying.",
      "example": "If both S → a A and S → a B begin with a, one lookahead cannot select between them in the unfactored grammar.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lltable",
      "grammar": "S -> a A | a B; A -> b; B -> c",
      "title": "Backtracking versus predictive choices"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: If both S → a A and S → a B begin with a, one lookahead cannot select between them in the unfactored grammar.",
        "options": [
          "If both S → a A and S → a B begin with a, one lookahead cannot select between them in the unfactored grammar.",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context."
        ],
        "answer": 0,
        "explanation": "A backtracking top-down parser may try one production and restore its input position when that attempt fails. A predictive parser uses lookahead and a conflict-free table to select a production without retrying. Greedily choosing the first listed alternative is not a proof that the grammar is LL(1).",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> a30 A | a30 B; A -> b493; B -> c31, how many productions occupy predictive cell (A, b493)?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Populate from FIRST(rhs), and include FOLLOW(lhs) when rhs is nullable.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Build the LL(1) table for S -> A B; A -> a31 | ε; B -> b494 | ε. How many cells contain more than one production?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, rather than the total number of alternatives in those cells.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> a32 A | a32 B; A -> b495; B -> c33, how many productions occupy predictive cell (S, a32)?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Populate from FIRST(rhs), and include FOLLOW(lhs) when rhs is nullable.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0,
        "text": "Okay, so top-down parsers are basically two types one that uses backtracking another that doesn't uses backtracking Which means that if you are starting from the start symbol One is the top-down parser where where if you fail let's suppose let's suppose This is this is e plus t is your production if you fail using this production then you will say that okay "
      },
      {
        "time": 29.72,
        "text": "and if it fails then you will try this production which means you are backtracking you will backtrack and you will be here so this is this is one kind of parser which uses backtracking another kind of parser which doesn't uses backtracking what does this mean this only means that if you somehow say that you are going to you are going to use this e plus t and"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 13,
        "file": "013. Lecture 4b. Types of Top Down Parsers.mp4",
        "completedAt": "{\"file\":\"013. Lecture 4b. Types of Top Down Parsers.mp4\",\"language\":\"en\",\"probability\":0.99169921875,\"processing_seconds\":24.65834665298462,\"device\":\"cuda\"}"
      }
    ],
    "start": 0,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lltable",
      "objective": "Trace this example: If both S → a A and S → a B begin with a, one lookahead cannot select between them in the unfactored grammar.",
      "why": "A backtracking top-down parser may try one production and restore its input position when that attempt fails. A predictive parser uses lookahead and a conflict-free table to select a production without retrying.",
      "watchFor": "Greedily choosing the first listed alternative is not a proof that the grammar is LL(1).",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 41,
    "lecture": 13,
    "title": "Backtracking versus predictive choices · Apply and challenge",
    "concept": "Greedily choosing the first listed alternative is not a proof that the grammar is LL(1).",
    "teachingSteps": [
      "A backtracking top-down parser may try one production and restore its input position when that attempt fails. A predictive parser uses lookahead and a conflict-free table to select a production without retrying.",
      "If both S → a A and S → a B begin with a, one lookahead cannot select between them in the unfactored grammar.",
      "Greedily choosing the first listed alternative is not a proof that the grammar is LL(1)."
    ],
    "foundation": {
      "title": "Backtracking versus predictive choices",
      "idea": "A backtracking top-down parser may try one production and restore its input position when that attempt fails. A predictive parser uses lookahead and a conflict-free table to select a production without retrying.",
      "example": "If both S → a A and S → a B begin with a, one lookahead cannot select between them in the unfactored grammar.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lltable",
      "grammar": "S -> a A | a B; A -> b; B -> c",
      "title": "Backtracking versus predictive choices"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying backtracking versus predictive choices, which warning prevents a wrong conclusion?",
        "options": [
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context.",
          "Greedily choosing the first listed alternative is not a proof that the grammar is LL(1).",
          "Every factored grammar must be LL(1), even if its table has conflicts."
        ],
        "answer": 2,
        "explanation": "A backtracking top-down parser may try one production and restore its input position when that attempt fails. A predictive parser uses lookahead and a conflict-free table to select a production without retrying. Greedily choosing the first listed alternative is not a proof that the grammar is LL(1).",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Build the LL(1) table for S -> A B; A -> a10 | ε; B -> b504 | ε. How many cells contain more than one production?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, rather than the total number of alternatives in those cells.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> a11 A | a11 B; A -> b505; B -> c12, how many productions occupy predictive cell (A, b505)?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Populate from FIRST(rhs), and include FOLLOW(lhs) when rhs is nullable.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Build the LL(1) table for S -> A B; A -> a12 | ε; B -> b506 | ε. How many cells contain more than one production?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, rather than the total number of alternatives in those cells.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0,
        "text": "Okay, so top-down parsers are basically two types one that uses backtracking another that doesn't uses backtracking Which means that if you are starting from the start symbol One is the top-down parser where where if you fail let's suppose let's suppose This is this is e plus t is your production if you fail using this production then you will say that okay "
      },
      {
        "time": 29.72,
        "text": "and if it fails then you will try this production which means you are backtracking you will backtrack and you will be here so this is this is one kind of parser which uses backtracking another kind of parser which doesn't uses backtracking what does this mean this only means that if you somehow say that you are going to you are going to use this e plus t and"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 13,
        "file": "013. Lecture 4b. Types of Top Down Parsers.mp4",
        "completedAt": "{\"file\":\"013. Lecture 4b. Types of Top Down Parsers.mp4\",\"language\":\"en\",\"probability\":0.99169921875,\"processing_seconds\":24.65834665298462,\"device\":\"cuda\"}"
      }
    ],
    "start": 0,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lltable",
      "objective": "Check this boundary: Greedily choosing the first listed alternative is not a proof that the grammar is LL(1).",
      "why": "A backtracking top-down parser may try one production and restore its input position when that attempt fails. A predictive parser uses lookahead and a conflict-free table to select a production without retrying.",
      "watchFor": "Greedily choosing the first listed alternative is not a proof that the grammar is LL(1).",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 42,
    "lecture": 14,
    "title": "Read a recursive-descent parser as a stack · Understand the concept",
    "concept": "Each nonterminal can be a parsing function. Choosing a production creates calls or terminal matches, and an ε production returns without consuming input. A predictive stack makes these obligations visible.",
    "teachingSteps": [
      "Each nonterminal can be a parsing function. Choosing a production creates calls or terminal matches, and an ε production returns without consuming input. A predictive stack makes these obligations visible.",
      "With E → T R, T → id and R → + T R | ε, id + id expands E, matches an id, then processes the tail.",
      "An ε production is permitted only for the appropriate lookahead; it is not an unconditional escape from errors."
    ],
    "foundation": {
      "title": "Read a recursive-descent parser as a stack",
      "idea": "Each nonterminal can be a parsing function. Choosing a production creates calls or terminal matches, and an ε production returns without consuming input. A predictive stack makes these obligations visible.",
      "example": "With E → T R, T → id and R → + T R | ε, id + id expands E, matches an id, then processes the tail.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "ll",
      "grammar": "E -> T R; R -> + T R | ε; T -> id",
      "input": "id + id",
      "title": "Read a recursive-descent parser as a stack"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains read a recursive-descent parser as a stack?",
        "options": [
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context.",
          "Each nonterminal can be a parsing function. Choosing a production creates calls or terminal matches, and an ε production returns without consuming input. A predictive stack makes these obligations visible.",
          "Every factored grammar must be LL(1), even if its table has conflicts."
        ],
        "answer": 2,
        "explanation": "Each nonterminal can be a parsing function. Choosing a production creates calls or terminal matches, and an ε production returns without consuming input. A predictive stack makes these obligations visible. An ε production is permitted only for the appropriate lookahead; it is not an unconditional escape from errors.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar E -> T R; T -> id25; R -> plus519 T R | ε, does the predictive parser accept the complete input id25 plus519 plus519 id25?",
        "options": [
          "Accept",
          "Reject"
        ],
        "answer": 1,
        "explanation": "Reject: no production for T with lookahead plus519.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar E -> T R; T -> id26; R -> plus520 T R | ε, trace complete input id26. How many input tokens are consumed by terminal matches before the parser stops?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Accept: both stack and input reached the end marker. Expansion steps do not consume input.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar E -> T R; T -> id27; R -> plus521 T R | ε, does the predictive parser accept the complete input id27 plus521 id27?",
        "options": [
          "Accept",
          "Reject"
        ],
        "answer": 0,
        "explanation": "Accept: both stack and input reached the end marker.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0.53,
        "text": "Okay, so now let's see the implementation of it. Like how to implement it using the recursion. So what I'm going to tell you now, top-down parser with backtracking and the implementation details. Till now we have just seen the theory, how to do it. Now I will show you how to implement it. Specifically, I will tell you how to implement it using recursion. So "
      },
      {
        "time": 30.91,
        "text": "Suppose if I am not using recursion, then it will call, sorry, if I am not using backtracking, then it will call recursive descent parser without backtracking. Or you can also say recursive descent parser for predictive parsing, something like that, or predictive recursive decision parser, whatever you like to say, right? I hope terminology is as clear. When"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 14,
        "file": "014. Lecture 4c. Recursive Descent Parser.mp4",
        "completedAt": "{\"file\":\"014. Lecture 4c. Recursive Descent Parser.mp4\",\"language\":\"en\",\"probability\":0.99609375,\"processing_seconds\":48.34412908554077,\"device\":\"cuda\"}"
      }
    ],
    "start": 0.53,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ll",
      "objective": "Explain the rule: Each nonterminal can be a parsing function. Choosing a production creates calls or terminal matches, and an ε production returns without consuming input. A predictive stack makes these obligations visible.",
      "why": "Each nonterminal can be a parsing function. Choosing a production creates calls or terminal matches, and an ε production returns without consuming input. A predictive stack makes these obligations visible.",
      "watchFor": "An ε production is permitted only for the appropriate lookahead; it is not an unconditional escape from errors.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 43,
    "lecture": 14,
    "title": "Read a recursive-descent parser as a stack · Trace and experiment",
    "concept": "With E → T R, T → id and R → + T R | ε, id + id expands E, matches an id, then processes the tail.",
    "teachingSteps": [
      "Each nonterminal can be a parsing function. Choosing a production creates calls or terminal matches, and an ε production returns without consuming input. A predictive stack makes these obligations visible.",
      "With E → T R, T → id and R → + T R | ε, id + id expands E, matches an id, then processes the tail.",
      "An ε production is permitted only for the appropriate lookahead; it is not an unconditional escape from errors."
    ],
    "foundation": {
      "title": "Read a recursive-descent parser as a stack",
      "idea": "Each nonterminal can be a parsing function. Choosing a production creates calls or terminal matches, and an ε production returns without consuming input. A predictive stack makes these obligations visible.",
      "example": "With E → T R, T → id and R → + T R | ε, id + id expands E, matches an id, then processes the tail.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "ll",
      "grammar": "E -> T R; R -> + T R | ε; T -> id",
      "input": "id + id",
      "title": "Read a recursive-descent parser as a stack"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: With E → T R, T → id and R → + T R | ε, id + id expands E, matches an id, then processes the tail.",
        "options": [
          "An empty production can be selected regardless of lookahead and context.",
          "With E → T R, T → id and R → + T R | ε, id + id expands E, matches an id, then processes the tail.",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous."
        ],
        "answer": 1,
        "explanation": "Each nonterminal can be a parsing function. Choosing a production creates calls or terminal matches, and an ε production returns without consuming input. A predictive stack makes these obligations visible. An ε production is permitted only for the appropriate lookahead; it is not an unconditional escape from errors.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar E -> T R; T -> id5; R -> plus530 T R | ε, trace complete input id5 plus530 id5 plus530 id5. How many input tokens are consumed by terminal matches before the parser stops?",
        "answer": 5,
        "tolerance": 0,
        "explanation": "Accept: both stack and input reached the end marker. Expansion steps do not consume input.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar E -> T R; T -> id6; R -> plus531 T R | ε, does the predictive parser accept the complete input id6 plus531 plus531 id6?",
        "options": [
          "Reject",
          "Accept"
        ],
        "answer": 0,
        "explanation": "Reject: no production for T with lookahead plus531.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar E -> T R; T -> id7; R -> plus532 T R | ε, trace complete input id7. How many input tokens are consumed by terminal matches before the parser stops?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Accept: both stack and input reached the end marker. Expansion steps do not consume input.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0.53,
        "text": "Okay, so now let's see the implementation of it. Like how to implement it using the recursion. So what I'm going to tell you now, top-down parser with backtracking and the implementation details. Till now we have just seen the theory, how to do it. Now I will show you how to implement it. Specifically, I will tell you how to implement it using recursion. So "
      },
      {
        "time": 30.91,
        "text": "Suppose if I am not using recursion, then it will call, sorry, if I am not using backtracking, then it will call recursive descent parser without backtracking. Or you can also say recursive descent parser for predictive parsing, something like that, or predictive recursive decision parser, whatever you like to say, right? I hope terminology is as clear. When"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 14,
        "file": "014. Lecture 4c. Recursive Descent Parser.mp4",
        "completedAt": "{\"file\":\"014. Lecture 4c. Recursive Descent Parser.mp4\",\"language\":\"en\",\"probability\":0.99609375,\"processing_seconds\":48.34412908554077,\"device\":\"cuda\"}"
      }
    ],
    "start": 0.53,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ll",
      "objective": "Trace this example: With E → T R, T → id and R → + T R | ε, id + id expands E, matches an id, then processes the tail.",
      "why": "Each nonterminal can be a parsing function. Choosing a production creates calls or terminal matches, and an ε production returns without consuming input. A predictive stack makes these obligations visible.",
      "watchFor": "An ε production is permitted only for the appropriate lookahead; it is not an unconditional escape from errors.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 44,
    "lecture": 14,
    "title": "Read a recursive-descent parser as a stack · Apply and challenge",
    "concept": "An ε production is permitted only for the appropriate lookahead; it is not an unconditional escape from errors.",
    "teachingSteps": [
      "Each nonterminal can be a parsing function. Choosing a production creates calls or terminal matches, and an ε production returns without consuming input. A predictive stack makes these obligations visible.",
      "With E → T R, T → id and R → + T R | ε, id + id expands E, matches an id, then processes the tail.",
      "An ε production is permitted only for the appropriate lookahead; it is not an unconditional escape from errors."
    ],
    "foundation": {
      "title": "Read a recursive-descent parser as a stack",
      "idea": "Each nonterminal can be a parsing function. Choosing a production creates calls or terminal matches, and an ε production returns without consuming input. A predictive stack makes these obligations visible.",
      "example": "With E → T R, T → id and R → + T R | ε, id + id expands E, matches an id, then processes the tail.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "ll",
      "grammar": "E -> T R; R -> + T R | ε; T -> id",
      "input": "id + id",
      "title": "Read a recursive-descent parser as a stack"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying read a recursive-descent parser as a stack, which warning prevents a wrong conclusion?",
        "options": [
          "An empty production can be selected regardless of lookahead and context.",
          "An ε production is permitted only for the appropriate lookahead; it is not an unconditional escape from errors.",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous."
        ],
        "answer": 1,
        "explanation": "Each nonterminal can be a parsing function. Choosing a production creates calls or terminal matches, and an ε production returns without consuming input. A predictive stack makes these obligations visible. An ε production is permitted only for the appropriate lookahead; it is not an unconditional escape from errors.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar E -> T R; T -> id16; R -> plus541 T R | ε, does the predictive parser accept the complete input id16 plus541 id16?",
        "options": [
          "Accept",
          "Reject"
        ],
        "answer": 0,
        "explanation": "Accept: both stack and input reached the end marker.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar E -> T R; T -> id17; R -> plus542 T R | ε, trace complete input id17 plus542 id17 plus542 id17. How many input tokens are consumed by terminal matches before the parser stops?",
        "answer": 5,
        "tolerance": 0,
        "explanation": "Accept: both stack and input reached the end marker. Expansion steps do not consume input.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar E -> T R; T -> id18; R -> plus543 T R | ε, does the predictive parser accept the complete input id18 plus543 plus543 id18?",
        "options": [
          "Reject",
          "Accept"
        ],
        "answer": 0,
        "explanation": "Reject: no production for T with lookahead plus543.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0.53,
        "text": "Okay, so now let's see the implementation of it. Like how to implement it using the recursion. So what I'm going to tell you now, top-down parser with backtracking and the implementation details. Till now we have just seen the theory, how to do it. Now I will show you how to implement it. Specifically, I will tell you how to implement it using recursion. So "
      },
      {
        "time": 30.91,
        "text": "Suppose if I am not using recursion, then it will call, sorry, if I am not using backtracking, then it will call recursive descent parser without backtracking. Or you can also say recursive descent parser for predictive parsing, something like that, or predictive recursive decision parser, whatever you like to say, right? I hope terminology is as clear. When"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 14,
        "file": "014. Lecture 4c. Recursive Descent Parser.mp4",
        "completedAt": "{\"file\":\"014. Lecture 4c. Recursive Descent Parser.mp4\",\"language\":\"en\",\"probability\":0.99609375,\"processing_seconds\":48.34412908554077,\"device\":\"cuda\"}"
      }
    ],
    "start": 0.53,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ll",
      "objective": "Check this boundary: An ε production is permitted only for the appropriate lookahead; it is not an unconditional escape from errors.",
      "why": "Each nonterminal can be a parsing function. Choosing a production creates calls or terminal matches, and an ε production returns without consuming input. A predictive stack makes these obligations visible.",
      "watchFor": "An ε production is permitted only for the appropriate lookahead; it is not an unconditional escape from errors.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 45,
    "lecture": 15,
    "title": "Trace acceptance and syntax errors · Understand the concept",
    "concept": "A parser accepts only when the whole input has been matched and its pending obligations are exhausted. A mismatch or an empty table cell identifies the first point the current parse cannot continue.",
    "teachingSteps": [
      "A parser accepts only when the whole input has been matched and its pending obligations are exhausted. A mismatch or an empty table cell identifies the first point the current parse cannot continue.",
      "The expression grammar rejects id + + id because the second + arrives where a T beginning with id is required.",
      "Matching a valid prefix does not permit ignoring trailing tokens. A step limit is also not a grammatical rejection proof."
    ],
    "foundation": {
      "title": "Trace acceptance and syntax errors",
      "idea": "A parser accepts only when the whole input has been matched and its pending obligations are exhausted. A mismatch or an empty table cell identifies the first point the current parse cannot continue.",
      "example": "The expression grammar rejects id + + id because the second + arrives where a T beginning with id is required.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "ll",
      "grammar": "E -> T R; R -> + T R | ε; T -> id",
      "input": "id + + id",
      "title": "Trace acceptance and syntax errors"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains trace acceptance and syntax errors?",
        "options": [
          "An empty production can be selected regardless of lookahead and context.",
          "A parser accepts only when the whole input has been matched and its pending obligations are exhausted. A mismatch or an empty table cell identifies the first point the current parse cannot continue.",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous."
        ],
        "answer": 1,
        "explanation": "A parser accepts only when the whole input has been matched and its pending obligations are exhausted. A mismatch or an empty table cell identifies the first point the current parse cannot continue. Matching a valid prefix does not permit ignoring trailing tokens. A step limit is also not a grammatical rejection proof.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar E -> T R; T -> id31; R -> plus556 T R | ε, does the predictive parser accept the complete input id31?",
        "options": [
          "Accept",
          "Reject"
        ],
        "answer": 0,
        "explanation": "Accept: both stack and input reached the end marker.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar E -> T R; T -> id32; R -> plus557 T R | ε, trace complete input id32 plus557 id32. How many input tokens are consumed by terminal matches before the parser stops?",
        "answer": 3,
        "tolerance": 0,
        "explanation": "Accept: both stack and input reached the end marker. Expansion steps do not consume input.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar E -> T R; T -> id2; R -> plus558 T R | ε, does the predictive parser accept the complete input id2 plus558 plus558 id2?",
        "options": [
          "Accept",
          "Reject"
        ],
        "answer": 1,
        "explanation": "Reject: no production for T with lookahead plus558.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 1482.04,
        "text": "Maybe I can just make a copy of this so that I can show you what is happening on the runtime. Right. So this is matching. Now you're looking for it. So this evil again, again, go to T this T will again go to int. Great. This int and this is also matching. Now you're looking for plus. Okay. Now just see here, this will return success. That is why this is a su"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 15,
        "file": "015. Lecture 5. Questions on Recursive Descent Parsers.mp4",
        "completedAt": "{\"file\":\"015. Lecture 5. Questions on Recursive Descent Parsers.mp4\",\"language\":\"en\",\"probability\":0.97119140625,\"processing_seconds\":151.20628190040588,\"device\":\"cuda\"}"
      }
    ],
    "start": 1482.04,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ll",
      "objective": "Explain the rule: A parser accepts only when the whole input has been matched and its pending obligations are exhausted. A mismatch or an empty table cell identifies the first point the current parse cannot continue.",
      "why": "A parser accepts only when the whole input has been matched and its pending obligations are exhausted. A mismatch or an empty table cell identifies the first point the current parse cannot continue.",
      "watchFor": "Matching a valid prefix does not permit ignoring trailing tokens. A step limit is also not a grammatical rejection proof.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 46,
    "lecture": 15,
    "title": "Trace acceptance and syntax errors · Trace and experiment",
    "concept": "The expression grammar rejects id + + id because the second + arrives where a T beginning with id is required.",
    "teachingSteps": [
      "A parser accepts only when the whole input has been matched and its pending obligations are exhausted. A mismatch or an empty table cell identifies the first point the current parse cannot continue.",
      "The expression grammar rejects id + + id because the second + arrives where a T beginning with id is required.",
      "Matching a valid prefix does not permit ignoring trailing tokens. A step limit is also not a grammatical rejection proof."
    ],
    "foundation": {
      "title": "Trace acceptance and syntax errors",
      "idea": "A parser accepts only when the whole input has been matched and its pending obligations are exhausted. A mismatch or an empty table cell identifies the first point the current parse cannot continue.",
      "example": "The expression grammar rejects id + + id because the second + arrives where a T beginning with id is required.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "ll",
      "grammar": "E -> T R; R -> + T R | ε; T -> id",
      "input": "id + + id",
      "title": "Trace acceptance and syntax errors"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: The expression grammar rejects id + + id because the second + arrives where a T beginning with id is required.",
        "options": [
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context.",
          "The expression grammar rejects id + + id because the second + arrives where a T beginning with id is required.",
          "Every factored grammar must be LL(1), even if its table has conflicts."
        ],
        "answer": 2,
        "explanation": "A parser accepts only when the whole input has been matched and its pending obligations are exhausted. A mismatch or an empty table cell identifies the first point the current parse cannot continue. Matching a valid prefix does not permit ignoring trailing tokens. A step limit is also not a grammatical rejection proof.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar E -> T R; T -> id11; R -> plus567 T R | ε, trace complete input id11 plus567 plus567 id11. How many input tokens are consumed by terminal matches before the parser stops?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Reject: no production for T with lookahead plus567. Expansion steps do not consume input.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar E -> T R; T -> id12; R -> plus568 T R | ε, does the predictive parser accept the complete input id12?",
        "options": [
          "Reject",
          "Accept"
        ],
        "answer": 1,
        "explanation": "Accept: both stack and input reached the end marker.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar E -> T R; T -> id13; R -> plus569 T R | ε, trace complete input id13 plus569 id13. How many input tokens are consumed by terminal matches before the parser stops?",
        "answer": 3,
        "tolerance": 0,
        "explanation": "Accept: both stack and input reached the end marker. Expansion steps do not consume input.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 1482.04,
        "text": "Maybe I can just make a copy of this so that I can show you what is happening on the runtime. Right. So this is matching. Now you're looking for it. So this evil again, again, go to T this T will again go to int. Great. This int and this is also matching. Now you're looking for plus. Okay. Now just see here, this will return success. That is why this is a su"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 15,
        "file": "015. Lecture 5. Questions on Recursive Descent Parsers.mp4",
        "completedAt": "{\"file\":\"015. Lecture 5. Questions on Recursive Descent Parsers.mp4\",\"language\":\"en\",\"probability\":0.97119140625,\"processing_seconds\":151.20628190040588,\"device\":\"cuda\"}"
      }
    ],
    "start": 1482.04,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ll",
      "objective": "Trace this example: The expression grammar rejects id + + id because the second + arrives where a T beginning with id is required.",
      "why": "A parser accepts only when the whole input has been matched and its pending obligations are exhausted. A mismatch or an empty table cell identifies the first point the current parse cannot continue.",
      "watchFor": "Matching a valid prefix does not permit ignoring trailing tokens. A step limit is also not a grammatical rejection proof.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 47,
    "lecture": 15,
    "title": "Trace acceptance and syntax errors · Apply and challenge",
    "concept": "Matching a valid prefix does not permit ignoring trailing tokens. A step limit is also not a grammatical rejection proof.",
    "teachingSteps": [
      "A parser accepts only when the whole input has been matched and its pending obligations are exhausted. A mismatch or an empty table cell identifies the first point the current parse cannot continue.",
      "The expression grammar rejects id + + id because the second + arrives where a T beginning with id is required.",
      "Matching a valid prefix does not permit ignoring trailing tokens. A step limit is also not a grammatical rejection proof."
    ],
    "foundation": {
      "title": "Trace acceptance and syntax errors",
      "idea": "A parser accepts only when the whole input has been matched and its pending obligations are exhausted. A mismatch or an empty table cell identifies the first point the current parse cannot continue.",
      "example": "The expression grammar rejects id + + id because the second + arrives where a T beginning with id is required.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "ll",
      "grammar": "E -> T R; R -> + T R | ε; T -> id",
      "input": "id + + id",
      "title": "Trace acceptance and syntax errors"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying trace acceptance and syntax errors, which warning prevents a wrong conclusion?",
        "options": [
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context.",
          "Matching a valid prefix does not permit ignoring trailing tokens. A step limit is also not a grammatical rejection proof.",
          "Every factored grammar must be LL(1), even if its table has conflicts."
        ],
        "answer": 2,
        "explanation": "A parser accepts only when the whole input has been matched and its pending obligations are exhausted. A mismatch or an empty table cell identifies the first point the current parse cannot continue. Matching a valid prefix does not permit ignoring trailing tokens. A step limit is also not a grammatical rejection proof.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar E -> T R; T -> id22; R -> plus578 T R | ε, does the predictive parser accept the complete input id22 plus578 id22 plus578 id22?",
        "options": [
          "Accept",
          "Reject"
        ],
        "answer": 0,
        "explanation": "Accept: both stack and input reached the end marker.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar E -> T R; T -> id23; R -> plus579 T R | ε, trace complete input id23 plus579 plus579 id23. How many input tokens are consumed by terminal matches before the parser stops?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Reject: no production for T with lookahead plus579. Expansion steps do not consume input.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar E -> T R; T -> id24; R -> plus580 T R | ε, does the predictive parser accept the complete input id24?",
        "options": [
          "Reject",
          "Accept"
        ],
        "answer": 1,
        "explanation": "Accept: both stack and input reached the end marker.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 1482.04,
        "text": "Maybe I can just make a copy of this so that I can show you what is happening on the runtime. Right. So this is matching. Now you're looking for it. So this evil again, again, go to T this T will again go to int. Great. This int and this is also matching. Now you're looking for plus. Okay. Now just see here, this will return success. That is why this is a su"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 15,
        "file": "015. Lecture 5. Questions on Recursive Descent Parsers.mp4",
        "completedAt": "{\"file\":\"015. Lecture 5. Questions on Recursive Descent Parsers.mp4\",\"language\":\"en\",\"probability\":0.97119140625,\"processing_seconds\":151.20628190040588,\"device\":\"cuda\"}"
      }
    ],
    "start": 1482.04,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ll",
      "objective": "Check this boundary: Matching a valid prefix does not permit ignoring trailing tokens. A step limit is also not a grammatical rejection proof.",
      "why": "A parser accepts only when the whole input has been matched and its pending obligations are exhausted. A mismatch or an empty table cell identifies the first point the current parse cannot continue.",
      "watchFor": "Matching a valid prefix does not permit ignoring trailing tokens. A step limit is also not a grammatical rejection proof.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 48,
    "lecture": 16,
    "title": "Compute FIRST to a fixed point · Understand the concept",
    "concept": "FIRST(X) contains terminals that can begin a word derived from X, and ε if X can derive the empty word. For a sequence, continue past a symbol only when that symbol is nullable.",
    "teachingSteps": [
      "FIRST(X) contains terminals that can begin a word derived from X, and ε if X can derive the empty word. For a sequence, continue past a symbol only when that symbol is nullable.",
      "For S → A B, A → a A | ε and B → b B | ε, FIRST(S) contains a, b and ε.",
      "Do not stop at a nullable first nonterminal or copy ε into the result before every symbol in the sequence is nullable."
    ],
    "foundation": {
      "title": "Compute FIRST to a fixed point",
      "idea": "FIRST(X) contains terminals that can begin a word derived from X, and ε if X can derive the empty word. For a sequence, continue past a symbol only when that symbol is nullable.",
      "example": "For S → A B, A → a A | ε and B → b B | ε, FIRST(S) contains a, b and ε.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "first",
      "grammar": "S -> A B; A -> a A | ε; B -> b B | ε",
      "title": "Compute FIRST to a fixed point"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains compute first to a fixed point?",
        "options": [
          "An empty production can be selected regardless of lookahead and context.",
          "FIRST(X) contains terminals that can begin a word derived from X, and ε if X can derive the empty word. For a sequence, continue past a symbol only when that symbol is nullable.",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous."
        ],
        "answer": 1,
        "explanation": "FIRST(X) contains terminals that can begin a word derived from X, and ε if X can derive the empty word. For a sequence, continue past a symbol only when that symbol is nullable. Do not stop at a nullable first nonterminal or copy ε into the result before every symbol in the sequence is nullable.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> A B; A -> a6 A | ε; B -> b593 B | c7, what is FIRST(S)?",
        "options": [
          "{$, a6, b593, c7, ε}",
          "{$}",
          "{}",
          "{a6, b593, c7}"
        ],
        "answer": 3,
        "explanation": "FIRST(S) = {a6, b593, c7}. Continue past each nullable prefix symbol.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> A B; A -> a7 | ε; B -> b594 | ε, what is FIRST(A)?",
        "options": [
          "{}",
          "{a7, ε}",
          "{$, a7, b594, c8, ε}",
          "{$}"
        ],
        "answer": 1,
        "explanation": "FIRST(A) = {a7, ε}. Continue past each nullable prefix symbol.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> A B; A -> a8 A | ε; B -> b595 B | c9, what is FIRST(B)?",
        "options": [
          "{$}",
          "{}",
          "{b595, c9}",
          "{$, a8, b595, c9, ε}"
        ],
        "answer": 2,
        "explanation": "FIRST(B) = {b595, c9}. Continue past each nullable prefix symbol.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 118.8,
        "text": "In the in the parser with the backtracking what we do for e we will be having one function Okay, suppose I'm writing in the recursive way so a for e I will be having some function and Then for each production I will be calling so suppose I try for the first production and I say if even even means first production right so if even Is true then I will return t"
      },
      {
        "time": 147.93,
        "text": "then I will try e2 right if if e2 fails then I will say that okay both has failed then I will return false but the point here is that I will try e2 if even fails now look at here look at here what is happening I will I will just decide I will just decide which production to choose so switch case means like it will it will only like once it matches this plus "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 16,
        "file": "016. Lecture 6a. Computing First.mp4",
        "completedAt": "{\"file\":\"016. Lecture 6a. Computing First.mp4\",\"language\":\"en\",\"probability\":0.98828125,\"processing_seconds\":82.57895398139954,\"device\":\"cuda\"}"
      }
    ],
    "start": 118.8,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "first",
      "objective": "Explain the rule: FIRST(X) contains terminals that can begin a word derived from X, and ε if X can derive the empty word. For a sequence, continue past a symbol only when that symbol is nullable.",
      "why": "FIRST(X) contains terminals that can begin a word derived from X, and ε if X can derive the empty word. For a sequence, continue past a symbol only when that symbol is nullable.",
      "watchFor": "Do not stop at a nullable first nonterminal or copy ε into the result before every symbol in the sequence is nullable.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 49,
    "lecture": 16,
    "title": "Compute FIRST to a fixed point · Trace and experiment",
    "concept": "For S → A B, A → a A | ε and B → b B | ε, FIRST(S) contains a, b and ε.",
    "teachingSteps": [
      "FIRST(X) contains terminals that can begin a word derived from X, and ε if X can derive the empty word. For a sequence, continue past a symbol only when that symbol is nullable.",
      "For S → A B, A → a A | ε and B → b B | ε, FIRST(S) contains a, b and ε.",
      "Do not stop at a nullable first nonterminal or copy ε into the result before every symbol in the sequence is nullable."
    ],
    "foundation": {
      "title": "Compute FIRST to a fixed point",
      "idea": "FIRST(X) contains terminals that can begin a word derived from X, and ε if X can derive the empty word. For a sequence, continue past a symbol only when that symbol is nullable.",
      "example": "For S → A B, A → a A | ε and B → b B | ε, FIRST(S) contains a, b and ε.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "first",
      "grammar": "S -> A B; A -> a A | ε; B -> b B | ε",
      "title": "Compute FIRST to a fixed point"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For S → A B, A → a A | ε and B → b B | ε, FIRST(S) contains a, b and ε.",
        "options": [
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context.",
          "For S → A B, A → a A | ε and B → b B | ε, FIRST(S) contains a, b and ε.",
          "Every factored grammar must be LL(1), even if its table has conflicts."
        ],
        "answer": 2,
        "explanation": "FIRST(X) contains terminals that can begin a word derived from X, and ε if X can derive the empty word. For a sequence, continue past a symbol only when that symbol is nullable. Do not stop at a nullable first nonterminal or copy ε into the result before every symbol in the sequence is nullable.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> A B; A -> a17 | ε; B -> b604 | ε, what is FIRST(S)?",
        "options": [
          "{a17, b604, ε}",
          "{$, a17, b604, c18, ε}",
          "{$}",
          "{}"
        ],
        "answer": 0,
        "explanation": "FIRST(S) = {a17, b604, ε}. Continue past each nullable prefix symbol.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> A B; A -> a18 A | ε; B -> b605 B | c19, what is FIRST(A)?",
        "options": [
          "{}",
          "{a18, ε}",
          "{$, a18, b605, c19, ε}",
          "{$}"
        ],
        "answer": 1,
        "explanation": "FIRST(A) = {a18, ε}. Continue past each nullable prefix symbol.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> A B; A -> a19 | ε; B -> b606 | ε, what is FIRST(B)?",
        "options": [
          "{}",
          "{b606, ε}",
          "{$, a19, b606, c20, ε}",
          "{$}"
        ],
        "answer": 1,
        "explanation": "FIRST(B) = {b606, ε}. Continue past each nullable prefix symbol.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 118.8,
        "text": "In the in the parser with the backtracking what we do for e we will be having one function Okay, suppose I'm writing in the recursive way so a for e I will be having some function and Then for each production I will be calling so suppose I try for the first production and I say if even even means first production right so if even Is true then I will return t"
      },
      {
        "time": 147.93,
        "text": "then I will try e2 right if if e2 fails then I will say that okay both has failed then I will return false but the point here is that I will try e2 if even fails now look at here look at here what is happening I will I will just decide I will just decide which production to choose so switch case means like it will it will only like once it matches this plus "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 16,
        "file": "016. Lecture 6a. Computing First.mp4",
        "completedAt": "{\"file\":\"016. Lecture 6a. Computing First.mp4\",\"language\":\"en\",\"probability\":0.98828125,\"processing_seconds\":82.57895398139954,\"device\":\"cuda\"}"
      }
    ],
    "start": 118.8,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "first",
      "objective": "Trace this example: For S → A B, A → a A | ε and B → b B | ε, FIRST(S) contains a, b and ε.",
      "why": "FIRST(X) contains terminals that can begin a word derived from X, and ε if X can derive the empty word. For a sequence, continue past a symbol only when that symbol is nullable.",
      "watchFor": "Do not stop at a nullable first nonterminal or copy ε into the result before every symbol in the sequence is nullable.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 50,
    "lecture": 16,
    "title": "Compute FIRST to a fixed point · Apply and challenge",
    "concept": "Do not stop at a nullable first nonterminal or copy ε into the result before every symbol in the sequence is nullable.",
    "teachingSteps": [
      "FIRST(X) contains terminals that can begin a word derived from X, and ε if X can derive the empty word. For a sequence, continue past a symbol only when that symbol is nullable.",
      "For S → A B, A → a A | ε and B → b B | ε, FIRST(S) contains a, b and ε.",
      "Do not stop at a nullable first nonterminal or copy ε into the result before every symbol in the sequence is nullable."
    ],
    "foundation": {
      "title": "Compute FIRST to a fixed point",
      "idea": "FIRST(X) contains terminals that can begin a word derived from X, and ε if X can derive the empty word. For a sequence, continue past a symbol only when that symbol is nullable.",
      "example": "For S → A B, A → a A | ε and B → b B | ε, FIRST(S) contains a, b and ε.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "first",
      "grammar": "S -> A B; A -> a A | ε; B -> b B | ε",
      "title": "Compute FIRST to a fixed point"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying compute first to a fixed point, which warning prevents a wrong conclusion?",
        "options": [
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context.",
          "Do not stop at a nullable first nonterminal or copy ε into the result before every symbol in the sequence is nullable.",
          "Every factored grammar must be LL(1), even if its table has conflicts."
        ],
        "answer": 2,
        "explanation": "FIRST(X) contains terminals that can begin a word derived from X, and ε if X can derive the empty word. For a sequence, continue past a symbol only when that symbol is nullable. Do not stop at a nullable first nonterminal or copy ε into the result before every symbol in the sequence is nullable.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> A B; A -> a28 A | ε; B -> b615 B | c29, what is FIRST(S)?",
        "options": [
          "{$}",
          "{}",
          "{a28, b615, c29}",
          "{$, a28, b615, c29, ε}"
        ],
        "answer": 2,
        "explanation": "FIRST(S) = {a28, b615, c29}. Continue past each nullable prefix symbol.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> A B; A -> a29 | ε; B -> b616 | ε, what is FIRST(A)?",
        "options": [
          "{$}",
          "{}",
          "{a29, ε}",
          "{$, a29, b616, c30, ε}"
        ],
        "answer": 2,
        "explanation": "FIRST(A) = {a29, ε}. Continue past each nullable prefix symbol.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> A B; A -> a30 A | ε; B -> b617 B | c31, what is FIRST(B)?",
        "options": [
          "{}",
          "{b617, c31}",
          "{$, a30, b617, c31, ε}",
          "{$}"
        ],
        "answer": 1,
        "explanation": "FIRST(B) = {b617, c31}. Continue past each nullable prefix symbol.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 118.8,
        "text": "In the in the parser with the backtracking what we do for e we will be having one function Okay, suppose I'm writing in the recursive way so a for e I will be having some function and Then for each production I will be calling so suppose I try for the first production and I say if even even means first production right so if even Is true then I will return t"
      },
      {
        "time": 147.93,
        "text": "then I will try e2 right if if e2 fails then I will say that okay both has failed then I will return false but the point here is that I will try e2 if even fails now look at here look at here what is happening I will I will just decide I will just decide which production to choose so switch case means like it will it will only like once it matches this plus "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 16,
        "file": "016. Lecture 6a. Computing First.mp4",
        "completedAt": "{\"file\":\"016. Lecture 6a. Computing First.mp4\",\"language\":\"en\",\"probability\":0.98828125,\"processing_seconds\":82.57895398139954,\"device\":\"cuda\"}"
      }
    ],
    "start": 118.8,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "first",
      "objective": "Check this boundary: Do not stop at a nullable first nonterminal or copy ε into the result before every symbol in the sequence is nullable.",
      "why": "FIRST(X) contains terminals that can begin a word derived from X, and ε if X can derive the empty word. For a sequence, continue past a symbol only when that symbol is nullable.",
      "watchFor": "Do not stop at a nullable first nonterminal or copy ε into the result before every symbol in the sequence is nullable.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 51,
    "lecture": 17,
    "title": "Compute FOLLOW using suffixes · Understand the concept",
    "concept": "FOLLOW(A) contains terminals that can immediately follow A in a sentential form; $ marks the end after the start symbol. Copy FIRST of the suffix without ε, and copy FOLLOW of the left side if that suffix is nullable.",
    "teachingSteps": [
      "FOLLOW(A) contains terminals that can immediately follow A in a sentential form; $ marks the end after the start symbol. Copy FIRST of the suffix without ε, and copy FOLLOW of the left side if that suffix is nullable.",
      "For S → A B with nullable B, b can follow A and so can $. FOLLOW never contains ε.",
      "FOLLOW describes context after a nonterminal, not characters inside its name or the start of its own expansion."
    ],
    "foundation": {
      "title": "Compute FOLLOW using suffixes",
      "idea": "FOLLOW(A) contains terminals that can immediately follow A in a sentential form; $ marks the end after the start symbol. Copy FIRST of the suffix without ε, and copy FOLLOW of the left side if that suffix is nullable.",
      "example": "For S → A B with nullable B, b can follow A and so can $. FOLLOW never contains ε.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "follow",
      "grammar": "S -> A B; A -> a A | ε; B -> b B | ε",
      "title": "Compute FOLLOW using suffixes"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains compute follow using suffixes?",
        "options": [
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context.",
          "FOLLOW(A) contains terminals that can immediately follow A in a sentential form; $ marks the end after the start symbol. Copy FIRST of the suffix without ε, and copy FOLLOW of the left side if that suffix is nullable."
        ],
        "answer": 3,
        "explanation": "FOLLOW(A) contains terminals that can immediately follow A in a sentential form; $ marks the end after the start symbol. Copy FIRST of the suffix without ε, and copy FOLLOW of the left side if that suffix is nullable. FOLLOW describes context after a nonterminal, not characters inside its name or the start of its own expansion.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> A B; A -> a12 | ε; B -> b630 | ε, what is FOLLOW(S)?",
        "options": [
          "{$, a12, b630, c13, ε}",
          "{ε}",
          "{}",
          "{$}"
        ],
        "answer": 3,
        "explanation": "FOLLOW(S) = {$}. Exclude ε; propagate context through nullable suffixes.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> A B; A -> a13 A | ε; B -> b631 B | c14, what is FOLLOW(A)?",
        "options": [
          "{$, a13, b631, c14, ε}",
          "{ε}",
          "{}",
          "{b631, c14}"
        ],
        "answer": 3,
        "explanation": "FOLLOW(A) = {b631, c14}. Exclude ε; propagate context through nullable suffixes.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> A B; A -> a14 | ε; B -> b632 | ε, what is FOLLOW(B)?",
        "options": [
          "{$}",
          "{$, a14, b632, c15, ε}",
          "{ε}",
          "{}"
        ],
        "answer": 0,
        "explanation": "FOLLOW(B) = {$}. Exclude ε; propagate context through nullable suffixes.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 1.17,
        "text": "Now, let us see what is follow, ok. Follow of any non-terminal, let us say A. So, what does this mean and like how to calculate the follow. So, till now we have seen what is first and intuitively a first of any non-terminal A is the set of all terminals, set of all terminals, set of all terminals, terminals such that such that any string that A is producing."
      },
      {
        "time": 98.05,
        "text": "Before I go to follow let me just quickly remind you that what was the idea in first so first is the set of all terminals that can be at the start of a string produces way A right and what was the idea that if there is any production then how to calculate the first so idea was that like the first step first step and that's what we will do in the follow also "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 17,
        "file": "017. Lecture 6b. Computing Follow.mp4",
        "completedAt": "{\"file\":\"017. Lecture 6b. Computing Follow.mp4\",\"language\":\"en\",\"probability\":0.9912109375,\"processing_seconds\":97.38714289665222,\"device\":\"cuda\"}"
      }
    ],
    "start": 1.17,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "follow",
      "objective": "Explain the rule: FOLLOW(A) contains terminals that can immediately follow A in a sentential form; $ marks the end after the start symbol. Copy FIRST of the suffix without ε, and copy FOLLOW of the left side if that suffix is nullable.",
      "why": "FOLLOW(A) contains terminals that can immediately follow A in a sentential form; $ marks the end after the start symbol. Copy FIRST of the suffix without ε, and copy FOLLOW of the left side if that suffix is nullable.",
      "watchFor": "FOLLOW describes context after a nonterminal, not characters inside its name or the start of its own expansion.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 52,
    "lecture": 17,
    "title": "Compute FOLLOW using suffixes · Trace and experiment",
    "concept": "For S → A B with nullable B, b can follow A and so can $. FOLLOW never contains ε.",
    "teachingSteps": [
      "FOLLOW(A) contains terminals that can immediately follow A in a sentential form; $ marks the end after the start symbol. Copy FIRST of the suffix without ε, and copy FOLLOW of the left side if that suffix is nullable.",
      "For S → A B with nullable B, b can follow A and so can $. FOLLOW never contains ε.",
      "FOLLOW describes context after a nonterminal, not characters inside its name or the start of its own expansion."
    ],
    "foundation": {
      "title": "Compute FOLLOW using suffixes",
      "idea": "FOLLOW(A) contains terminals that can immediately follow A in a sentential form; $ marks the end after the start symbol. Copy FIRST of the suffix without ε, and copy FOLLOW of the left side if that suffix is nullable.",
      "example": "For S → A B with nullable B, b can follow A and so can $. FOLLOW never contains ε.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "follow",
      "grammar": "S -> A B; A -> a A | ε; B -> b B | ε",
      "title": "Compute FOLLOW using suffixes"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For S → A B with nullable B, b can follow A and so can $. FOLLOW never contains ε.",
        "options": [
          "An empty production can be selected regardless of lookahead and context.",
          "For S → A B with nullable B, b can follow A and so can $. FOLLOW never contains ε.",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous."
        ],
        "answer": 1,
        "explanation": "FOLLOW(A) contains terminals that can immediately follow A in a sentential form; $ marks the end after the start symbol. Copy FIRST of the suffix without ε, and copy FOLLOW of the left side if that suffix is nullable. FOLLOW describes context after a nonterminal, not characters inside its name or the start of its own expansion.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> A B; A -> a23 A | ε; B -> b641 B | c24, what is FOLLOW(S)?",
        "options": [
          "{ε}",
          "{}",
          "{$}",
          "{$, a23, b641, c24, ε}"
        ],
        "answer": 2,
        "explanation": "FOLLOW(S) = {$}. Exclude ε; propagate context through nullable suffixes.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> A B; A -> a24 | ε; B -> b642 | ε, what is FOLLOW(A)?",
        "options": [
          "{}",
          "{$, b642}",
          "{$, a24, b642, c25, ε}",
          "{ε}"
        ],
        "answer": 1,
        "explanation": "FOLLOW(A) = {$, b642}. Exclude ε; propagate context through nullable suffixes.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> A B; A -> a25 A | ε; B -> b643 B | c26, what is FOLLOW(B)?",
        "options": [
          "{}",
          "{$}",
          "{$, a25, b643, c26, ε}",
          "{ε}"
        ],
        "answer": 1,
        "explanation": "FOLLOW(B) = {$}. Exclude ε; propagate context through nullable suffixes.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 1.17,
        "text": "Now, let us see what is follow, ok. Follow of any non-terminal, let us say A. So, what does this mean and like how to calculate the follow. So, till now we have seen what is first and intuitively a first of any non-terminal A is the set of all terminals, set of all terminals, set of all terminals, terminals such that such that any string that A is producing."
      },
      {
        "time": 98.05,
        "text": "Before I go to follow let me just quickly remind you that what was the idea in first so first is the set of all terminals that can be at the start of a string produces way A right and what was the idea that if there is any production then how to calculate the first so idea was that like the first step first step and that's what we will do in the follow also "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 17,
        "file": "017. Lecture 6b. Computing Follow.mp4",
        "completedAt": "{\"file\":\"017. Lecture 6b. Computing Follow.mp4\",\"language\":\"en\",\"probability\":0.9912109375,\"processing_seconds\":97.38714289665222,\"device\":\"cuda\"}"
      }
    ],
    "start": 1.17,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "follow",
      "objective": "Trace this example: For S → A B with nullable B, b can follow A and so can $. FOLLOW never contains ε.",
      "why": "FOLLOW(A) contains terminals that can immediately follow A in a sentential form; $ marks the end after the start symbol. Copy FIRST of the suffix without ε, and copy FOLLOW of the left side if that suffix is nullable.",
      "watchFor": "FOLLOW describes context after a nonterminal, not characters inside its name or the start of its own expansion.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 53,
    "lecture": 17,
    "title": "Compute FOLLOW using suffixes · Apply and challenge",
    "concept": "FOLLOW describes context after a nonterminal, not characters inside its name or the start of its own expansion.",
    "teachingSteps": [
      "FOLLOW(A) contains terminals that can immediately follow A in a sentential form; $ marks the end after the start symbol. Copy FIRST of the suffix without ε, and copy FOLLOW of the left side if that suffix is nullable.",
      "For S → A B with nullable B, b can follow A and so can $. FOLLOW never contains ε.",
      "FOLLOW describes context after a nonterminal, not characters inside its name or the start of its own expansion."
    ],
    "foundation": {
      "title": "Compute FOLLOW using suffixes",
      "idea": "FOLLOW(A) contains terminals that can immediately follow A in a sentential form; $ marks the end after the start symbol. Copy FIRST of the suffix without ε, and copy FOLLOW of the left side if that suffix is nullable.",
      "example": "For S → A B with nullable B, b can follow A and so can $. FOLLOW never contains ε.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "follow",
      "grammar": "S -> A B; A -> a A | ε; B -> b B | ε",
      "title": "Compute FOLLOW using suffixes"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying compute follow using suffixes, which warning prevents a wrong conclusion?",
        "options": [
          "FOLLOW describes context after a nonterminal, not characters inside its name or the start of its own expansion.",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context."
        ],
        "answer": 0,
        "explanation": "FOLLOW(A) contains terminals that can immediately follow A in a sentential form; $ marks the end after the start symbol. Copy FIRST of the suffix without ε, and copy FOLLOW of the left side if that suffix is nullable. FOLLOW describes context after a nonterminal, not characters inside its name or the start of its own expansion.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> A B; A -> a3 | ε; B -> b652 | ε, what is FOLLOW(S)?",
        "options": [
          "{$, a3, b652, c4, ε}",
          "{ε}",
          "{}",
          "{$}"
        ],
        "answer": 3,
        "explanation": "FOLLOW(S) = {$}. Exclude ε; propagate context through nullable suffixes.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> A B; A -> a4 A | ε; B -> b653 B | c5, what is FOLLOW(A)?",
        "options": [
          "{}",
          "{b653, c5}",
          "{$, a4, b653, c5, ε}",
          "{ε}"
        ],
        "answer": 1,
        "explanation": "FOLLOW(A) = {b653, c5}. Exclude ε; propagate context through nullable suffixes.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> A B; A -> a5 | ε; B -> b654 | ε, what is FOLLOW(B)?",
        "options": [
          "{$}",
          "{$, a5, b654, c6, ε}",
          "{ε}",
          "{}"
        ],
        "answer": 0,
        "explanation": "FOLLOW(B) = {$}. Exclude ε; propagate context through nullable suffixes.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 1.17,
        "text": "Now, let us see what is follow, ok. Follow of any non-terminal, let us say A. So, what does this mean and like how to calculate the follow. So, till now we have seen what is first and intuitively a first of any non-terminal A is the set of all terminals, set of all terminals, set of all terminals, terminals such that such that any string that A is producing."
      },
      {
        "time": 98.05,
        "text": "Before I go to follow let me just quickly remind you that what was the idea in first so first is the set of all terminals that can be at the start of a string produces way A right and what was the idea that if there is any production then how to calculate the first so idea was that like the first step first step and that's what we will do in the follow also "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 17,
        "file": "017. Lecture 6b. Computing Follow.mp4",
        "completedAt": "{\"file\":\"017. Lecture 6b. Computing Follow.mp4\",\"language\":\"en\",\"probability\":0.9912109375,\"processing_seconds\":97.38714289665222,\"device\":\"cuda\"}"
      }
    ],
    "start": 1.17,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "follow",
      "objective": "Check this boundary: FOLLOW describes context after a nonterminal, not characters inside its name or the start of its own expansion.",
      "why": "FOLLOW(A) contains terminals that can immediately follow A in a sentential form; $ marks the end after the start symbol. Copy FIRST of the suffix without ε, and copy FOLLOW of the left side if that suffix is nullable.",
      "watchFor": "FOLLOW describes context after a nonterminal, not characters inside its name or the start of its own expansion.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 54,
    "lecture": 18,
    "title": "Build a predictive parsing table · Understand the concept",
    "concept": "For A → α, enter the production under terminals in FIRST(α) except ε. If α is nullable, also enter it under FOLLOW(A). More than one production in a cell is an LL(1) conflict.",
    "teachingSteps": [
      "For A → α, enter the production under terminals in FIRST(α) except ε. If α is nullable, also enter it under FOLLOW(A). More than one production in a cell is an LL(1) conflict.",
      "The R → ε production in the expression grammar belongs in the R,$ cell; R → + T R belongs under +.",
      "A grammar being unambiguous is necessary but not sufficient for its particular production form to be LL(1)."
    ],
    "foundation": {
      "title": "Build a predictive parsing table",
      "idea": "For A → α, enter the production under terminals in FIRST(α) except ε. If α is nullable, also enter it under FOLLOW(A). More than one production in a cell is an LL(1) conflict.",
      "example": "The R → ε production in the expression grammar belongs in the R,$ cell; R → + T R belongs under +.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lltable",
      "grammar": "E -> T R; R -> + T R | ε; T -> id",
      "title": "Build a predictive parsing table"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains build a predictive parsing table?",
        "options": [
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context.",
          "For A → α, enter the production under terminals in FIRST(α) except ε. If α is nullable, also enter it under FOLLOW(A). More than one production in a cell is an LL(1) conflict.",
          "Every factored grammar must be LL(1), even if its table has conflicts."
        ],
        "answer": 2,
        "explanation": "For A → α, enter the production under terminals in FIRST(α) except ε. If α is nullable, also enter it under FOLLOW(A). More than one production in a cell is an LL(1) conflict. A grammar being unambiguous is necessary but not sufficient for its particular production form to be LL(1).",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Build the LL(1) table for S -> a18 A | a18 B; A -> b667; B -> c19. How many cells contain more than one production?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Count conflicting cells, rather than the total number of alternatives in those cells.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> A B; A -> a19 | ε; B -> b668 | ε, how many productions occupy predictive cell (A, b668)?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Populate from FIRST(rhs), and include FOLLOW(lhs) when rhs is nullable.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Build the LL(1) table for S -> a20 A | a20 B; A -> b669; B -> c21. How many cells contain more than one production?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Count conflicting cells, rather than the total number of alternatives in those cells.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 2.58,
        "text": "Hi everyone. So now that we know about first and follow and we know about like what is context feed grammar and what is what is parser, what is recursive descent parser with backtracking, like we know these terms. So I think it's a good time to start predictive parsing. So as I already told you that like this slide I have already shown you that there are bac"
      },
      {
        "time": 31.59,
        "text": "and this is what already we have seen that in the backtracking algorithms you will be trying each productions but in the predictive algorithms you will be trying only one production if it fails, parser fails, if it is written true then parser turns true. So based on the current input symbol we will be trying only one production. So that's the major differenc"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 18,
        "file": "018. Lecture 7a. Predictive Parsers.mp4",
        "completedAt": "{\"file\":\"018. Lecture 7a. Predictive Parsers.mp4\",\"language\":\"en\",\"probability\":0.98046875,\"processing_seconds\":145.99522304534912,\"device\":\"cuda\"}"
      }
    ],
    "start": 2.58,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lltable",
      "objective": "Explain the rule: For A → α, enter the production under terminals in FIRST(α) except ε. If α is nullable, also enter it under FOLLOW(A). More than one production in a cell is an LL(1) conflict.",
      "why": "For A → α, enter the production under terminals in FIRST(α) except ε. If α is nullable, also enter it under FOLLOW(A). More than one production in a cell is an LL(1) conflict.",
      "watchFor": "A grammar being unambiguous is necessary but not sufficient for its particular production form to be LL(1).",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 55,
    "lecture": 18,
    "title": "Build a predictive parsing table · Trace and experiment",
    "concept": "The R → ε production in the expression grammar belongs in the R,$ cell; R → + T R belongs under +.",
    "teachingSteps": [
      "For A → α, enter the production under terminals in FIRST(α) except ε. If α is nullable, also enter it under FOLLOW(A). More than one production in a cell is an LL(1) conflict.",
      "The R → ε production in the expression grammar belongs in the R,$ cell; R → + T R belongs under +.",
      "A grammar being unambiguous is necessary but not sufficient for its particular production form to be LL(1)."
    ],
    "foundation": {
      "title": "Build a predictive parsing table",
      "idea": "For A → α, enter the production under terminals in FIRST(α) except ε. If α is nullable, also enter it under FOLLOW(A). More than one production in a cell is an LL(1) conflict.",
      "example": "The R → ε production in the expression grammar belongs in the R,$ cell; R → + T R belongs under +.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lltable",
      "grammar": "E -> T R; R -> + T R | ε; T -> id",
      "title": "Build a predictive parsing table"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: The R → ε production in the expression grammar belongs in the R,$ cell; R → + T R belongs under +.",
        "options": [
          "The R → ε production in the expression grammar belongs in the R,$ cell; R → + T R belongs under +.",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context."
        ],
        "answer": 0,
        "explanation": "For A → α, enter the production under terminals in FIRST(α) except ε. If α is nullable, also enter it under FOLLOW(A). More than one production in a cell is an LL(1) conflict. A grammar being unambiguous is necessary but not sufficient for its particular production form to be LL(1).",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> A B; A -> a29 | ε; B -> b678 | ε, how many productions occupy predictive cell (B, b678)?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Populate from FIRST(rhs), and include FOLLOW(lhs) when rhs is nullable.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Build the LL(1) table for S -> a30 A | a30 B; A -> b679; B -> c31. How many cells contain more than one production?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Count conflicting cells, rather than the total number of alternatives in those cells.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> A B; A -> a31 | ε; B -> b680 | ε, how many productions occupy predictive cell (S, a31)?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Populate from FIRST(rhs), and include FOLLOW(lhs) when rhs is nullable.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 2.58,
        "text": "Hi everyone. So now that we know about first and follow and we know about like what is context feed grammar and what is what is parser, what is recursive descent parser with backtracking, like we know these terms. So I think it's a good time to start predictive parsing. So as I already told you that like this slide I have already shown you that there are bac"
      },
      {
        "time": 31.59,
        "text": "and this is what already we have seen that in the backtracking algorithms you will be trying each productions but in the predictive algorithms you will be trying only one production if it fails, parser fails, if it is written true then parser turns true. So based on the current input symbol we will be trying only one production. So that's the major differenc"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 18,
        "file": "018. Lecture 7a. Predictive Parsers.mp4",
        "completedAt": "{\"file\":\"018. Lecture 7a. Predictive Parsers.mp4\",\"language\":\"en\",\"probability\":0.98046875,\"processing_seconds\":145.99522304534912,\"device\":\"cuda\"}"
      }
    ],
    "start": 2.58,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lltable",
      "objective": "Trace this example: The R → ε production in the expression grammar belongs in the R,$ cell; R → + T R belongs under +.",
      "why": "For A → α, enter the production under terminals in FIRST(α) except ε. If α is nullable, also enter it under FOLLOW(A). More than one production in a cell is an LL(1) conflict.",
      "watchFor": "A grammar being unambiguous is necessary but not sufficient for its particular production form to be LL(1).",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 56,
    "lecture": 18,
    "title": "Build a predictive parsing table · Apply and challenge",
    "concept": "A grammar being unambiguous is necessary but not sufficient for its particular production form to be LL(1).",
    "teachingSteps": [
      "For A → α, enter the production under terminals in FIRST(α) except ε. If α is nullable, also enter it under FOLLOW(A). More than one production in a cell is an LL(1) conflict.",
      "The R → ε production in the expression grammar belongs in the R,$ cell; R → + T R belongs under +.",
      "A grammar being unambiguous is necessary but not sufficient for its particular production form to be LL(1)."
    ],
    "foundation": {
      "title": "Build a predictive parsing table",
      "idea": "For A → α, enter the production under terminals in FIRST(α) except ε. If α is nullable, also enter it under FOLLOW(A). More than one production in a cell is an LL(1) conflict.",
      "example": "The R → ε production in the expression grammar belongs in the R,$ cell; R → + T R belongs under +.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lltable",
      "grammar": "E -> T R; R -> + T R | ε; T -> id",
      "title": "Build a predictive parsing table"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying build a predictive parsing table, which warning prevents a wrong conclusion?",
        "options": [
          "An empty production can be selected regardless of lookahead and context.",
          "A grammar being unambiguous is necessary but not sufficient for its particular production form to be LL(1).",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous."
        ],
        "answer": 1,
        "explanation": "For A → α, enter the production under terminals in FIRST(α) except ε. If α is nullable, also enter it under FOLLOW(A). More than one production in a cell is an LL(1) conflict. A grammar being unambiguous is necessary but not sufficient for its particular production form to be LL(1).",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Build the LL(1) table for S -> a9 A | a9 B; A -> b689; B -> c10. How many cells contain more than one production?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Count conflicting cells, rather than the total number of alternatives in those cells.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> A B; A -> a10 | ε; B -> b690 | ε, how many productions occupy predictive cell (S, $)?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Populate from FIRST(rhs), and include FOLLOW(lhs) when rhs is nullable.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Build the LL(1) table for S -> a11 A | a11 B; A -> b691; B -> c12. How many cells contain more than one production?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Count conflicting cells, rather than the total number of alternatives in those cells.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 2.58,
        "text": "Hi everyone. So now that we know about first and follow and we know about like what is context feed grammar and what is what is parser, what is recursive descent parser with backtracking, like we know these terms. So I think it's a good time to start predictive parsing. So as I already told you that like this slide I have already shown you that there are bac"
      },
      {
        "time": 31.59,
        "text": "and this is what already we have seen that in the backtracking algorithms you will be trying each productions but in the predictive algorithms you will be trying only one production if it fails, parser fails, if it is written true then parser turns true. So based on the current input symbol we will be trying only one production. So that's the major differenc"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 18,
        "file": "018. Lecture 7a. Predictive Parsers.mp4",
        "completedAt": "{\"file\":\"018. Lecture 7a. Predictive Parsers.mp4\",\"language\":\"en\",\"probability\":0.98046875,\"processing_seconds\":145.99522304534912,\"device\":\"cuda\"}"
      }
    ],
    "start": 2.58,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lltable",
      "objective": "Check this boundary: A grammar being unambiguous is necessary but not sufficient for its particular production form to be LL(1).",
      "why": "For A → α, enter the production under terminals in FIRST(α) except ε. If α is nullable, also enter it under FOLLOW(A). More than one production in a cell is an LL(1) conflict.",
      "watchFor": "A grammar being unambiguous is necessary but not sufficient for its particular production form to be LL(1).",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 57,
    "lecture": 19,
    "title": "Execute an LL(1) parser · Understand the concept",
    "concept": "Keep a stack with $ at the bottom and the start symbol on top. Match a terminal, or use the pair of top nonterminal and one lookahead token to choose a production. Push its right-hand side in reverse order.",
    "teachingSteps": [
      "Keep a stack with $ at the bottom and the start symbol on top. Match a terminal, or use the pair of top nonterminal and one lookahead token to choose a production. Push its right-hand side in reverse order.",
      "For id + id, the top-of-stack symbol must be processed before the symbols beneath it. Expanding ε pushes nothing.",
      "A conflict is a construction failure for that grammar and table; silently picking an entry changes the algorithm."
    ],
    "foundation": {
      "title": "Execute an LL(1) parser",
      "idea": "Keep a stack with $ at the bottom and the start symbol on top. Match a terminal, or use the pair of top nonterminal and one lookahead token to choose a production. Push its right-hand side in reverse order.",
      "example": "For id + id, the top-of-stack symbol must be processed before the symbols beneath it. Expanding ε pushes nothing.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "ll",
      "grammar": "E -> T R; R -> + T R | ε; T -> id",
      "input": "id + id",
      "title": "Execute an LL(1) parser"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains execute an ll(1) parser?",
        "options": [
          "An empty production can be selected regardless of lookahead and context.",
          "Keep a stack with $ at the bottom and the start symbol on top. Match a terminal, or use the pair of top nonterminal and one lookahead token to choose a production. Push its right-hand side in reverse order.",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous."
        ],
        "answer": 1,
        "explanation": "Keep a stack with $ at the bottom and the start symbol on top. Match a terminal, or use the pair of top nonterminal and one lookahead token to choose a production. Push its right-hand side in reverse order. A conflict is a construction failure for that grammar and table; silently picking an entry changes the algorithm.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar E -> T R; T -> id24; R -> plus704 T R | ε, does the predictive parser accept the complete input id24?",
        "options": [
          "Reject",
          "Accept"
        ],
        "answer": 1,
        "explanation": "Accept: both stack and input reached the end marker.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar E -> T R; T -> id25; R -> plus705 T R | ε, trace complete input id25 plus705 plus705 id25. How many input tokens are consumed by terminal matches before the parser stops?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Reject: no production for T with lookahead plus705. Expansion steps do not consume input.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar E -> T R; T -> id26; R -> plus706 T R | ε, does the predictive parser accept the complete input id26 plus706 id26 plus706 id26?",
        "options": [
          "Reject",
          "Accept"
        ],
        "answer": 1,
        "explanation": "Accept: both stack and input reached the end marker.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 1.81,
        "text": "Hi everyone So till now we have seen that what is an LL1 grammar and how to write a parser for that which means how to make a parsing table Okay, so just to make you quick revise. Let me let me try to Let me try to make a parsing table for this or let me first tell you that how does LL1 works So this L means like we will go from left to right and then we wil"
      },
      {
        "time": 368.17,
        "text": "Right now now let's let's do Let's do the implementation part, which means like this was the theory part like how to build the passing table and all so let me just tell you that how to write a code Okay, so this is your passing table now I want to tell you that how to write a code so for implementation as I earlier told you that there are two ways one is rec"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 19,
        "file": "019. Lecture 7b. Implementing LL(1).mp4",
        "completedAt": "{\"file\":\"019. Lecture 7b. Implementing LL(1).mp4\",\"language\":\"en\",\"probability\":0.984375,\"processing_seconds\":58.34077000617981,\"device\":\"cuda\"}"
      }
    ],
    "start": 1.81,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ll",
      "objective": "Explain the rule: Keep a stack with $ at the bottom and the start symbol on top. Match a terminal, or use the pair of top nonterminal and one lookahead token to choose a production. Push its right-hand side in reverse order.",
      "why": "Keep a stack with $ at the bottom and the start symbol on top. Match a terminal, or use the pair of top nonterminal and one lookahead token to choose a production. Push its right-hand side in reverse order.",
      "watchFor": "A conflict is a construction failure for that grammar and table; silently picking an entry changes the algorithm.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 58,
    "lecture": 19,
    "title": "Execute an LL(1) parser · Trace and experiment",
    "concept": "For id + id, the top-of-stack symbol must be processed before the symbols beneath it. Expanding ε pushes nothing.",
    "teachingSteps": [
      "Keep a stack with $ at the bottom and the start symbol on top. Match a terminal, or use the pair of top nonterminal and one lookahead token to choose a production. Push its right-hand side in reverse order.",
      "For id + id, the top-of-stack symbol must be processed before the symbols beneath it. Expanding ε pushes nothing.",
      "A conflict is a construction failure for that grammar and table; silently picking an entry changes the algorithm."
    ],
    "foundation": {
      "title": "Execute an LL(1) parser",
      "idea": "Keep a stack with $ at the bottom and the start symbol on top. Match a terminal, or use the pair of top nonterminal and one lookahead token to choose a production. Push its right-hand side in reverse order.",
      "example": "For id + id, the top-of-stack symbol must be processed before the symbols beneath it. Expanding ε pushes nothing.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "ll",
      "grammar": "E -> T R; R -> + T R | ε; T -> id",
      "input": "id + id",
      "title": "Execute an LL(1) parser"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For id + id, the top-of-stack symbol must be processed before the symbols beneath it. Expanding ε pushes nothing.",
        "options": [
          "An empty production can be selected regardless of lookahead and context.",
          "For id + id, the top-of-stack symbol must be processed before the symbols beneath it. Expanding ε pushes nothing.",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous."
        ],
        "answer": 1,
        "explanation": "Keep a stack with $ at the bottom and the start symbol on top. Match a terminal, or use the pair of top nonterminal and one lookahead token to choose a production. Push its right-hand side in reverse order. A conflict is a construction failure for that grammar and table; silently picking an entry changes the algorithm.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar E -> T R; T -> id4; R -> plus715 T R | ε, trace complete input id4 plus715 id4 plus715 id4 plus715 id4. How many input tokens are consumed by terminal matches before the parser stops?",
        "answer": 7,
        "tolerance": 0,
        "explanation": "Accept: both stack and input reached the end marker. Expansion steps do not consume input.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar E -> T R; T -> id5; R -> plus716 T R | ε, does the predictive parser accept the complete input id5?",
        "options": [
          "Accept",
          "Reject"
        ],
        "answer": 0,
        "explanation": "Accept: both stack and input reached the end marker.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar E -> T R; T -> id6; R -> plus717 T R | ε, trace complete input id6 plus717 plus717 id6. How many input tokens are consumed by terminal matches before the parser stops?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Reject: no production for T with lookahead plus717. Expansion steps do not consume input.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 1.81,
        "text": "Hi everyone So till now we have seen that what is an LL1 grammar and how to write a parser for that which means how to make a parsing table Okay, so just to make you quick revise. Let me let me try to Let me try to make a parsing table for this or let me first tell you that how does LL1 works So this L means like we will go from left to right and then we wil"
      },
      {
        "time": 368.17,
        "text": "Right now now let's let's do Let's do the implementation part, which means like this was the theory part like how to build the passing table and all so let me just tell you that how to write a code Okay, so this is your passing table now I want to tell you that how to write a code so for implementation as I earlier told you that there are two ways one is rec"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 19,
        "file": "019. Lecture 7b. Implementing LL(1).mp4",
        "completedAt": "{\"file\":\"019. Lecture 7b. Implementing LL(1).mp4\",\"language\":\"en\",\"probability\":0.984375,\"processing_seconds\":58.34077000617981,\"device\":\"cuda\"}"
      }
    ],
    "start": 1.81,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ll",
      "objective": "Trace this example: For id + id, the top-of-stack symbol must be processed before the symbols beneath it. Expanding ε pushes nothing.",
      "why": "Keep a stack with $ at the bottom and the start symbol on top. Match a terminal, or use the pair of top nonterminal and one lookahead token to choose a production. Push its right-hand side in reverse order.",
      "watchFor": "A conflict is a construction failure for that grammar and table; silently picking an entry changes the algorithm.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 59,
    "lecture": 19,
    "title": "Execute an LL(1) parser · Apply and challenge",
    "concept": "A conflict is a construction failure for that grammar and table; silently picking an entry changes the algorithm.",
    "teachingSteps": [
      "Keep a stack with $ at the bottom and the start symbol on top. Match a terminal, or use the pair of top nonterminal and one lookahead token to choose a production. Push its right-hand side in reverse order.",
      "For id + id, the top-of-stack symbol must be processed before the symbols beneath it. Expanding ε pushes nothing.",
      "A conflict is a construction failure for that grammar and table; silently picking an entry changes the algorithm."
    ],
    "foundation": {
      "title": "Execute an LL(1) parser",
      "idea": "Keep a stack with $ at the bottom and the start symbol on top. Match a terminal, or use the pair of top nonterminal and one lookahead token to choose a production. Push its right-hand side in reverse order.",
      "example": "For id + id, the top-of-stack symbol must be processed before the symbols beneath it. Expanding ε pushes nothing.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "ll",
      "grammar": "E -> T R; R -> + T R | ε; T -> id",
      "input": "id + id",
      "title": "Execute an LL(1) parser"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying execute an ll(1) parser, which warning prevents a wrong conclusion?",
        "options": [
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context.",
          "A conflict is a construction failure for that grammar and table; silently picking an entry changes the algorithm.",
          "Every factored grammar must be LL(1), even if its table has conflicts."
        ],
        "answer": 2,
        "explanation": "Keep a stack with $ at the bottom and the start symbol on top. Match a terminal, or use the pair of top nonterminal and one lookahead token to choose a production. Push its right-hand side in reverse order. A conflict is a construction failure for that grammar and table; silently picking an entry changes the algorithm.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar E -> T R; T -> id15; R -> plus726 T R | ε, does the predictive parser accept the complete input id15 plus726 plus726 id15?",
        "options": [
          "Reject",
          "Accept"
        ],
        "answer": 0,
        "explanation": "Reject: no production for T with lookahead plus726.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar E -> T R; T -> id16; R -> plus727 T R | ε, trace complete input id16 plus727 id16 plus727 id16 plus727 id16. How many input tokens are consumed by terminal matches before the parser stops?",
        "answer": 7,
        "tolerance": 0,
        "explanation": "Accept: both stack and input reached the end marker. Expansion steps do not consume input.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar E -> T R; T -> id17; R -> plus728 T R | ε, does the predictive parser accept the complete input id17?",
        "options": [
          "Reject",
          "Accept"
        ],
        "answer": 1,
        "explanation": "Accept: both stack and input reached the end marker.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 1.81,
        "text": "Hi everyone So till now we have seen that what is an LL1 grammar and how to write a parser for that which means how to make a parsing table Okay, so just to make you quick revise. Let me let me try to Let me try to make a parsing table for this or let me first tell you that how does LL1 works So this L means like we will go from left to right and then we wil"
      },
      {
        "time": 368.17,
        "text": "Right now now let's let's do Let's do the implementation part, which means like this was the theory part like how to build the passing table and all so let me just tell you that how to write a code Okay, so this is your passing table now I want to tell you that how to write a code so for implementation as I earlier told you that there are two ways one is rec"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 19,
        "file": "019. Lecture 7b. Implementing LL(1).mp4",
        "completedAt": "{\"file\":\"019. Lecture 7b. Implementing LL(1).mp4\",\"language\":\"en\",\"probability\":0.984375,\"processing_seconds\":58.34077000617981,\"device\":\"cuda\"}"
      }
    ],
    "start": 1.81,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ll",
      "objective": "Check this boundary: A conflict is a construction failure for that grammar and table; silently picking an entry changes the algorithm.",
      "why": "Keep a stack with $ at the bottom and the start symbol on top. Match a terminal, or use the pair of top nonterminal and one lookahead token to choose a production. Push its right-hand side in reverse order.",
      "watchFor": "A conflict is a construction failure for that grammar and table; silently picking an entry changes the algorithm.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 60,
    "lecture": 20,
    "title": "Test grammar claims with table evidence · Understand the concept",
    "concept": "Use fixed-point sets and concrete conflicting table cells to check claims about FIRST, FOLLOW and LL(1). Removing common prefixes and direct recursion is useful preparation, but it is not a guarantee.",
    "teachingSteps": [
      "Use fixed-point sets and concrete conflicting table cells to check claims about FIRST, FOLLOW and LL(1). Removing common prefixes and direct recursion is useful preparation, but it is not a guarantee.",
      "For S → a A | a B, A → b and B → c, the S,a cell contains two alternatives even though the two complete words differ.",
      "A language may have another predictive grammar even when this particular grammar is not LL(1)."
    ],
    "foundation": {
      "title": "Test grammar claims with table evidence",
      "idea": "Use fixed-point sets and concrete conflicting table cells to check claims about FIRST, FOLLOW and LL(1). Removing common prefixes and direct recursion is useful preparation, but it is not a guarantee.",
      "example": "For S → a A | a B, A → b and B → c, the S,a cell contains two alternatives even though the two complete words differ.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lltable",
      "grammar": "S -> a A | a B; A -> b; B -> c",
      "title": "Test grammar claims with table evidence"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains test grammar claims with table evidence?",
        "options": [
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context.",
          "Use fixed-point sets and concrete conflicting table cells to check claims about FIRST, FOLLOW and LL(1). Removing common prefixes and direct recursion is useful preparation, but it is not a guarantee."
        ],
        "answer": 3,
        "explanation": "Use fixed-point sets and concrete conflicting table cells to check claims about FIRST, FOLLOW and LL(1). Removing common prefixes and direct recursion is useful preparation, but it is not a guarantee. A language may have another predictive grammar even when this particular grammar is not LL(1).",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Build the LL(1) table for S -> a30 A | a30 B; A -> b741; B -> c31. How many cells contain more than one production?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Count conflicting cells, rather than the total number of alternatives in those cells.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> A B; A -> a31 | ε; B -> b742 | ε, how many productions occupy predictive cell (B, b742)?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Populate from FIRST(rhs), and include FOLLOW(lhs) when rhs is nullable.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Build the LL(1) table for S -> a32 A | a32 B; A -> b743; B -> c33. How many cells contain more than one production?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Count conflicting cells, rather than the total number of alternatives in those cells.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0.18,
        "text": "Hi, everyone. So in this lecture, we are going to solve few questions, namely 45 questions on topics like first follow LL1 ambiguity and these things, right? Although this ambiguity is part of TOC, so we will not go much deeper into the ambiguity, but still we will solve few questions here also, right? Okay. So let's just start with the question number one. "
      },
      {
        "time": 30.21,
        "text": "So this is the grammar that is given to you, right? Now they are saying that find out the first and follow Now in this grammar in this grammar, which is given to you Do you remember how to find out first and follow? So what is the first thing that you need to do? You need to check what are the symbols which are nullable, right? Do you remember the nullable? "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 20,
        "file": "020_Forty_Five_Questions_on_First,_Follow,_LL1,_Ambiguit.mp4",
        "completedAt": "{\"file\":\"020_Forty_Five_Questions_on_First,_Follow,_LL1,_Ambiguit.mp4\",\"language\":\"en\",\"probability\":0.85693359375,\"processing_seconds\":214.52973985671997,\"device\":\"cuda\"}"
      }
    ],
    "start": 0.18,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lltable",
      "objective": "Explain the rule: Use fixed-point sets and concrete conflicting table cells to check claims about FIRST, FOLLOW and LL(1). Removing common prefixes and direct recursion is useful preparation, but it is not a guarantee.",
      "why": "Use fixed-point sets and concrete conflicting table cells to check claims about FIRST, FOLLOW and LL(1). Removing common prefixes and direct recursion is useful preparation, but it is not a guarantee.",
      "watchFor": "A language may have another predictive grammar even when this particular grammar is not LL(1).",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 61,
    "lecture": 20,
    "title": "Test grammar claims with table evidence · Trace and experiment",
    "concept": "For S → a A | a B, A → b and B → c, the S,a cell contains two alternatives even though the two complete words differ.",
    "teachingSteps": [
      "Use fixed-point sets and concrete conflicting table cells to check claims about FIRST, FOLLOW and LL(1). Removing common prefixes and direct recursion is useful preparation, but it is not a guarantee.",
      "For S → a A | a B, A → b and B → c, the S,a cell contains two alternatives even though the two complete words differ.",
      "A language may have another predictive grammar even when this particular grammar is not LL(1)."
    ],
    "foundation": {
      "title": "Test grammar claims with table evidence",
      "idea": "Use fixed-point sets and concrete conflicting table cells to check claims about FIRST, FOLLOW and LL(1). Removing common prefixes and direct recursion is useful preparation, but it is not a guarantee.",
      "example": "For S → a A | a B, A → b and B → c, the S,a cell contains two alternatives even though the two complete words differ.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lltable",
      "grammar": "S -> a A | a B; A -> b; B -> c",
      "title": "Test grammar claims with table evidence"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For S → a A | a B, A → b and B → c, the S,a cell contains two alternatives even though the two complete words differ.",
        "options": [
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context.",
          "For S → a A | a B, A → b and B → c, the S,a cell contains two alternatives even though the two complete words differ."
        ],
        "answer": 3,
        "explanation": "Use fixed-point sets and concrete conflicting table cells to check claims about FIRST, FOLLOW and LL(1). Removing common prefixes and direct recursion is useful preparation, but it is not a guarantee. A language may have another predictive grammar even when this particular grammar is not LL(1).",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> A B; A -> a10 | ε; B -> b752 | ε, how many productions occupy predictive cell (S, a10)?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Populate from FIRST(rhs), and include FOLLOW(lhs) when rhs is nullable.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Build the LL(1) table for S -> a11 A | a11 B; A -> b753; B -> c12. How many cells contain more than one production?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Count conflicting cells, rather than the total number of alternatives in those cells.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> A B; A -> a12 | ε; B -> b754 | ε, how many productions occupy predictive cell (S, $)?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Populate from FIRST(rhs), and include FOLLOW(lhs) when rhs is nullable.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0.18,
        "text": "Hi, everyone. So in this lecture, we are going to solve few questions, namely 45 questions on topics like first follow LL1 ambiguity and these things, right? Although this ambiguity is part of TOC, so we will not go much deeper into the ambiguity, but still we will solve few questions here also, right? Okay. So let's just start with the question number one. "
      },
      {
        "time": 30.21,
        "text": "So this is the grammar that is given to you, right? Now they are saying that find out the first and follow Now in this grammar in this grammar, which is given to you Do you remember how to find out first and follow? So what is the first thing that you need to do? You need to check what are the symbols which are nullable, right? Do you remember the nullable? "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 20,
        "file": "020_Forty_Five_Questions_on_First,_Follow,_LL1,_Ambiguit.mp4",
        "completedAt": "{\"file\":\"020_Forty_Five_Questions_on_First,_Follow,_LL1,_Ambiguit.mp4\",\"language\":\"en\",\"probability\":0.85693359375,\"processing_seconds\":214.52973985671997,\"device\":\"cuda\"}"
      }
    ],
    "start": 0.18,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lltable",
      "objective": "Trace this example: For S → a A | a B, A → b and B → c, the S,a cell contains two alternatives even though the two complete words differ.",
      "why": "Use fixed-point sets and concrete conflicting table cells to check claims about FIRST, FOLLOW and LL(1). Removing common prefixes and direct recursion is useful preparation, but it is not a guarantee.",
      "watchFor": "A language may have another predictive grammar even when this particular grammar is not LL(1).",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 62,
    "lecture": 20,
    "title": "Test grammar claims with table evidence · Apply and challenge",
    "concept": "A language may have another predictive grammar even when this particular grammar is not LL(1).",
    "teachingSteps": [
      "Use fixed-point sets and concrete conflicting table cells to check claims about FIRST, FOLLOW and LL(1). Removing common prefixes and direct recursion is useful preparation, but it is not a guarantee.",
      "For S → a A | a B, A → b and B → c, the S,a cell contains two alternatives even though the two complete words differ.",
      "A language may have another predictive grammar even when this particular grammar is not LL(1)."
    ],
    "foundation": {
      "title": "Test grammar claims with table evidence",
      "idea": "Use fixed-point sets and concrete conflicting table cells to check claims about FIRST, FOLLOW and LL(1). Removing common prefixes and direct recursion is useful preparation, but it is not a guarantee.",
      "example": "For S → a A | a B, A → b and B → c, the S,a cell contains two alternatives even though the two complete words differ.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lltable",
      "grammar": "S -> a A | a B; A -> b; B -> c",
      "title": "Test grammar claims with table evidence"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying test grammar claims with table evidence, which warning prevents a wrong conclusion?",
        "options": [
          "A language may have another predictive grammar even when this particular grammar is not LL(1).",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context."
        ],
        "answer": 0,
        "explanation": "Use fixed-point sets and concrete conflicting table cells to check claims about FIRST, FOLLOW and LL(1). Removing common prefixes and direct recursion is useful preparation, but it is not a guarantee. A language may have another predictive grammar even when this particular grammar is not LL(1).",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Build the LL(1) table for S -> a21 A | a21 B; A -> b763; B -> c22. How many cells contain more than one production?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Count conflicting cells, rather than the total number of alternatives in those cells.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> A B; A -> a22 | ε; B -> b764 | ε, how many productions occupy predictive cell (A, b764)?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Populate from FIRST(rhs), and include FOLLOW(lhs) when rhs is nullable.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Build the LL(1) table for S -> a23 A | a23 B; A -> b765; B -> c24. How many cells contain more than one production?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Count conflicting cells, rather than the total number of alternatives in those cells.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0.18,
        "text": "Hi, everyone. So in this lecture, we are going to solve few questions, namely 45 questions on topics like first follow LL1 ambiguity and these things, right? Although this ambiguity is part of TOC, so we will not go much deeper into the ambiguity, but still we will solve few questions here also, right? Okay. So let's just start with the question number one. "
      },
      {
        "time": 30.21,
        "text": "So this is the grammar that is given to you, right? Now they are saying that find out the first and follow Now in this grammar in this grammar, which is given to you Do you remember how to find out first and follow? So what is the first thing that you need to do? You need to check what are the symbols which are nullable, right? Do you remember the nullable? "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 20,
        "file": "020_Forty_Five_Questions_on_First,_Follow,_LL1,_Ambiguit.mp4",
        "completedAt": "{\"file\":\"020_Forty_Five_Questions_on_First,_Follow,_LL1,_Ambiguit.mp4\",\"language\":\"en\",\"probability\":0.85693359375,\"processing_seconds\":214.52973985671997,\"device\":\"cuda\"}"
      }
    ],
    "start": 0.18,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lltable",
      "objective": "Check this boundary: A language may have another predictive grammar even when this particular grammar is not LL(1).",
      "why": "Use fixed-point sets and concrete conflicting table cells to check claims about FIRST, FOLLOW and LL(1). Removing common prefixes and direct recursion is useful preparation, but it is not a guarantee.",
      "watchFor": "A language may have another predictive grammar even when this particular grammar is not LL(1).",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 63,
    "lecture": 21,
    "title": "Shift, reduce and recognize handles · Understand the concept",
    "concept": "A shift moves the next terminal onto the parser stack. A reduction replaces a handle by its left-hand-side nonterminal, using the current state and lookahead to justify the choice.",
    "teachingSteps": [
      "A shift moves the next terminal onto the parser stack. A reduction replaces a handle by its left-hand-side nonterminal, using the current state and lookahead to justify the choice.",
      "For S → C C and C → c C | d, c d d reduces the inner d to C, then c C to C, then the final d to C and C C to S.",
      "Reducing the longest visible substring or the first matching rule is not the LR decision procedure."
    ],
    "foundation": {
      "title": "Shift, reduce and recognize handles",
      "idea": "A shift moves the next terminal onto the parser stack. A reduction replaces a handle by its left-hand-side nonterminal, using the current state and lookahead to justify the choice.",
      "example": "For S → C C and C → c C | d, c d d reduces the inner d to C, then c C to C, then the final d to C and C C to S.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> C C; C -> c C | d",
      "mode": "slr",
      "view": "parse",
      "input": "c d d",
      "title": "Shift, reduce and recognize handles"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains shift, reduce and recognize handles?",
        "options": [
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "A shift moves the next terminal onto the parser stack. A reduction replaces a handle by its left-hand-side nonterminal, using the current state and lookahead to justify the choice.",
          "A parser conflict can safely be resolved by always taking the first listed action."
        ],
        "answer": 2,
        "explanation": "A shift moves the next terminal onto the parser stack. A reduction replaces a handle by its left-hand-side nonterminal, using the current state and lookahead to justify the choice. Reducing the longest visible substring or the first matching rule is not the LR decision procedure.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C C; C -> c c c c C | d d d; construction SLR. Trace complete input d d d d d d d d d d d d d d d. How many terminal shifts occur before the parser stops?",
        "answer": 15,
        "tolerance": 0,
        "explanation": "Only shifts consume input; reductions change the stack without consuming the next terminal. Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C C C; C -> c c c c C | d d d; construction SLR. When reducing C → d d d, how many symbol/state pairs are removed before following GOTO?",
        "answer": 3,
        "tolerance": 0,
        "explanation": "Pop one pair per right-hand-side symbol. An ε reduction removes zero pairs, then still follows GOTO for the left side.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C; C -> c C | d; construction SLR. What happens on the entire input d?",
        "options": [
          "Accept",
          "Stop on conflict",
          "Reject"
        ],
        "answer": 2,
        "explanation": "Reject: no ACTION entry.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 28.78,
        "text": "and given the grammar G indicate the handle for each of the right right central form for the grammar this right so can you tell me the handle here in this right central form can you tell me the handle so just let me know the handle in this form in option a let me know the handle in in B let me know the handle in C D and E so what are the handles right that's"
      },
      {
        "time": 63.08,
        "text": "Now, what is the handle in this option A? What do you think could be the handle? This is E plus E into E, right? So what do we need to do first? We need to generate the red sentential form for now, like that's the procedure that we know that if you want to generate this E plus E into E, then how you can generate? I think you can go like this, right? Maybe, m"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 21,
        "file": "021_Lecture_8b_Questions_on_Handle_and_Working_of_Bottom.mp4",
        "completedAt": "{\"file\":\"021_Lecture_8b_Questions_on_Handle_and_Working_of_Bottom.mp4\",\"language\":\"en\",\"probability\":0.90869140625,\"processing_seconds\":241.84960556030273,\"device\":\"cuda\"}"
      }
    ],
    "start": 28.78,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Explain the rule: A shift moves the next terminal onto the parser stack. A reduction replaces a handle by its left-hand-side nonterminal, using the current state and lookahead to justify the choice.",
      "why": "A shift moves the next terminal onto the parser stack. A reduction replaces a handle by its left-hand-side nonterminal, using the current state and lookahead to justify the choice.",
      "watchFor": "Reducing the longest visible substring or the first matching rule is not the LR decision procedure.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 64,
    "lecture": 21,
    "title": "Shift, reduce and recognize handles · Trace and experiment",
    "concept": "For S → C C and C → c C | d, c d d reduces the inner d to C, then c C to C, then the final d to C and C C to S.",
    "teachingSteps": [
      "A shift moves the next terminal onto the parser stack. A reduction replaces a handle by its left-hand-side nonterminal, using the current state and lookahead to justify the choice.",
      "For S → C C and C → c C | d, c d d reduces the inner d to C, then c C to C, then the final d to C and C C to S.",
      "Reducing the longest visible substring or the first matching rule is not the LR decision procedure."
    ],
    "foundation": {
      "title": "Shift, reduce and recognize handles",
      "idea": "A shift moves the next terminal onto the parser stack. A reduction replaces a handle by its left-hand-side nonterminal, using the current state and lookahead to justify the choice.",
      "example": "For S → C C and C → c C | d, c d d reduces the inner d to C, then c C to C, then the final d to C and C C to S.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> C C; C -> c C | d",
      "mode": "slr",
      "view": "parse",
      "input": "c d d",
      "title": "Shift, reduce and recognize handles"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For S → C C and C → c C | d, c d d reduces the inner d to C, then c C to C, then the final d to C and C C to S.",
        "options": [
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "For S → C C and C → c C | d, c d d reduces the inner d to C, then c C to C, then the final d to C and C C to S.",
          "A parser conflict can safely be resolved by always taking the first listed action."
        ],
        "answer": 2,
        "explanation": "A shift moves the next terminal onto the parser stack. A reduction replaces a handle by its left-hand-side nonterminal, using the current state and lookahead to justify the choice. Reducing the longest visible substring or the first matching rule is not the LR decision procedure.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C C C; C -> c c C | d; construction SLR. When reducing S → C C C C C C, how many symbol/state pairs are removed before following GOTO?",
        "answer": 6,
        "tolerance": 0,
        "explanation": "Pop one pair per right-hand-side symbol. An ε reduction removes zero pairs, then still follows GOTO for the left side.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C; C -> c c c C | d; construction SLR. What happens on the entire input d?",
        "options": [
          "Accept",
          "Stop on conflict",
          "Reject"
        ],
        "answer": 2,
        "explanation": "Reject: no ACTION entry.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C; C -> c c c C | d; construction SLR. Trace complete input c c c d d d. How many terminal shifts occur before the parser stops?",
        "answer": 6,
        "tolerance": 0,
        "explanation": "Only shifts consume input; reductions change the stack without consuming the next terminal. Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 28.78,
        "text": "and given the grammar G indicate the handle for each of the right right central form for the grammar this right so can you tell me the handle here in this right central form can you tell me the handle so just let me know the handle in this form in option a let me know the handle in in B let me know the handle in C D and E so what are the handles right that's"
      },
      {
        "time": 63.08,
        "text": "Now, what is the handle in this option A? What do you think could be the handle? This is E plus E into E, right? So what do we need to do first? We need to generate the red sentential form for now, like that's the procedure that we know that if you want to generate this E plus E into E, then how you can generate? I think you can go like this, right? Maybe, m"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 21,
        "file": "021_Lecture_8b_Questions_on_Handle_and_Working_of_Bottom.mp4",
        "completedAt": "{\"file\":\"021_Lecture_8b_Questions_on_Handle_and_Working_of_Bottom.mp4\",\"language\":\"en\",\"probability\":0.90869140625,\"processing_seconds\":241.84960556030273,\"device\":\"cuda\"}"
      }
    ],
    "start": 28.78,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Trace this example: For S → C C and C → c C | d, c d d reduces the inner d to C, then c C to C, then the final d to C and C C to S.",
      "why": "A shift moves the next terminal onto the parser stack. A reduction replaces a handle by its left-hand-side nonterminal, using the current state and lookahead to justify the choice.",
      "watchFor": "Reducing the longest visible substring or the first matching rule is not the LR decision procedure.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 65,
    "lecture": 21,
    "title": "Shift, reduce and recognize handles · Apply and challenge",
    "concept": "Reducing the longest visible substring or the first matching rule is not the LR decision procedure.",
    "teachingSteps": [
      "A shift moves the next terminal onto the parser stack. A reduction replaces a handle by its left-hand-side nonterminal, using the current state and lookahead to justify the choice.",
      "For S → C C and C → c C | d, c d d reduces the inner d to C, then c C to C, then the final d to C and C C to S.",
      "Reducing the longest visible substring or the first matching rule is not the LR decision procedure."
    ],
    "foundation": {
      "title": "Shift, reduce and recognize handles",
      "idea": "A shift moves the next terminal onto the parser stack. A reduction replaces a handle by its left-hand-side nonterminal, using the current state and lookahead to justify the choice.",
      "example": "For S → C C and C → c C | d, c d d reduces the inner d to C, then c C to C, then the final d to C and C C to S.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> C C; C -> c C | d",
      "mode": "slr",
      "view": "parse",
      "input": "c d d",
      "title": "Shift, reduce and recognize handles"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying shift, reduce and recognize handles, which warning prevents a wrong conclusion?",
        "options": [
          "An LR reduction consumes the next input token just like a shift.",
          "Reducing the longest visible substring or the first matching rule is not the LR decision procedure.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous."
        ],
        "answer": 1,
        "explanation": "A shift moves the next terminal onto the parser stack. A reduction replaces a handle by its left-hand-side nonterminal, using the current state and lookahead to justify the choice. Reducing the longest visible substring or the first matching rule is not the LR decision procedure.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C; C -> c C | d d; construction SLR. What happens on the entire input d d?",
        "options": [
          "Accept",
          "Stop on conflict",
          "Reject"
        ],
        "answer": 2,
        "explanation": "Reject: no ACTION entry.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C; C -> c C | d d; construction SLR. Trace complete input c d d d d d d. How many terminal shifts occur before the parser stops?",
        "answer": 7,
        "tolerance": 0,
        "explanation": "Only shifts consume input; reductions change the stack without consuming the next terminal. Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C; C -> c C | d d; construction SLR. When reducing C → c C, how many symbol/state pairs are removed before following GOTO?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Pop one pair per right-hand-side symbol. An ε reduction removes zero pairs, then still follows GOTO for the left side.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 28.78,
        "text": "and given the grammar G indicate the handle for each of the right right central form for the grammar this right so can you tell me the handle here in this right central form can you tell me the handle so just let me know the handle in this form in option a let me know the handle in in B let me know the handle in C D and E so what are the handles right that's"
      },
      {
        "time": 63.08,
        "text": "Now, what is the handle in this option A? What do you think could be the handle? This is E plus E into E, right? So what do we need to do first? We need to generate the red sentential form for now, like that's the procedure that we know that if you want to generate this E plus E into E, then how you can generate? I think you can go like this, right? Maybe, m"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 21,
        "file": "021_Lecture_8b_Questions_on_Handle_and_Working_of_Bottom.mp4",
        "completedAt": "{\"file\":\"021_Lecture_8b_Questions_on_Handle_and_Working_of_Bottom.mp4\",\"language\":\"en\",\"probability\":0.90869140625,\"processing_seconds\":241.84960556030273,\"device\":\"cuda\"}"
      }
    ],
    "start": 28.78,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Check this boundary: Reducing the longest visible substring or the first matching rule is not the LR decision procedure.",
      "why": "A shift moves the next terminal onto the parser stack. A reduction replaces a handle by its left-hand-side nonterminal, using the current state and lookahead to justify the choice.",
      "watchFor": "Reducing the longest visible substring or the first matching rule is not the LR decision procedure.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 66,
    "lecture": 22,
    "title": "Construct LR(0) item states · Understand the concept",
    "concept": "An LR item places a dot in a production to mark recognized versus expected symbols. Closure adds productions for a nonterminal after the dot; GOTO advances over one symbol then closes the destination.",
    "teachingSteps": [
      "An LR item places a dot in a production to mark recognized versus expected symbols. Closure adds productions for a nonterminal after the dot; GOTO advances over one symbol then closes the destination.",
      "From C → c • C, closure adds C → • c C and C → • d. These are alternatives within one state, not consumed input.",
      "Moving the dot is not itself a grammar derivation step; the dot describes parser progress."
    ],
    "foundation": {
      "title": "Construct LR(0) item states",
      "idea": "An LR item places a dot in a production to mark recognized versus expected symbols. Closure adds productions for a nonterminal after the dot; GOTO advances over one symbol then closes the destination.",
      "example": "From C → c • C, closure adds C → • c C and C → • d. These are alternatives within one state, not consumed input.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> C C; C -> c C | d",
      "mode": "lr0",
      "view": "items",
      "input": "c d d",
      "title": "Construct LR(0) item states"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains construct lr(0) item states?",
        "options": [
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "An LR item places a dot in a production to mark recognized versus expected symbols. Closure adds productions for a nonterminal after the dot; GOTO advances over one symbol then closes the destination."
        ],
        "answer": 3,
        "explanation": "An LR item places a dot in a production to mark recognized versus expected symbols. Closure adds productions for a nonterminal after the dot; GOTO advances over one symbol then closes the destination. Moving the dot is not itself a grammar derivation step; the dot describes parser progress.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C; C -> c c c c C | d d; construction LR0. How many distinct items are in the initial closure of the augmented start item?",
        "answer": 4,
        "tolerance": 0,
        "explanation": "Repeatedly add productions for a nonterminal after the dot, carrying contextual lookahead in LR(1). The dot does not consume input during closure.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C; C -> c c c c C | d d; construction LR0. In item [S' → • S], how many grammar symbols still lie to the right of the dot?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Count unrecognized right-hand-side symbols; lookahead after the comma is context rather than another right-hand-side symbol.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C C C; C -> c c c c C | d d; construction LR0. The current state contains exactly [C → • c c c c C; C → c c c c • C; C → • d d]. With next token d, which ACTION category applies?",
        "options": [
          "Shift",
          "Reduce",
          "Accept",
          "Error",
          "Conflict"
        ],
        "answer": 0,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 857.18,
        "text": "and then this is the production and then you will say that okay because of this dot you will again write it so exactly same exactly same state so this is the LR0 automaton that we have okay so very easily I hope you can construct the LR0 automaton now using this LR0 automaton we can construct LR0 parsing table and SLR1 parsing table let's just see both of th"
      },
      {
        "time": 915.87,
        "text": "How to how to build the parsing table? So to build the parsing table, what you need to do? You need to first number these states. Let me number this. Let's suppose this is i0, item 0 or the state 0. This is let's suppose i1, this is let's suppose i2, this is let's suppose maybe i3, this is suppose i4, this is suppose i5, this is suppose i6. You can just numb"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 22,
        "file": "022. Lecture 9a. LR(0) and SLR(1) Parsing Table Examples.mp4",
        "completedAt": "{\"file\":\"022. Lecture 9a. LR(0) and SLR(1) Parsing Table Examples.mp4\",\"language\":\"en\",\"probability\":0.90380859375,\"processing_seconds\":89.2299530506134,\"device\":\"cuda\"}"
      }
    ],
    "start": 857.18,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Explain the rule: An LR item places a dot in a production to mark recognized versus expected symbols. Closure adds productions for a nonterminal after the dot; GOTO advances over one symbol then closes the destination.",
      "why": "An LR item places a dot in a production to mark recognized versus expected symbols. Closure adds productions for a nonterminal after the dot; GOTO advances over one symbol then closes the destination.",
      "watchFor": "Moving the dot is not itself a grammar derivation step; the dot describes parser progress.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 67,
    "lecture": 22,
    "title": "Construct LR(0) item states · Trace and experiment",
    "concept": "From C → c • C, closure adds C → • c C and C → • d. These are alternatives within one state, not consumed input.",
    "teachingSteps": [
      "An LR item places a dot in a production to mark recognized versus expected symbols. Closure adds productions for a nonterminal after the dot; GOTO advances over one symbol then closes the destination.",
      "From C → c • C, closure adds C → • c C and C → • d. These are alternatives within one state, not consumed input.",
      "Moving the dot is not itself a grammar derivation step; the dot describes parser progress."
    ],
    "foundation": {
      "title": "Construct LR(0) item states",
      "idea": "An LR item places a dot in a production to mark recognized versus expected symbols. Closure adds productions for a nonterminal after the dot; GOTO advances over one symbol then closes the destination.",
      "example": "From C → c • C, closure adds C → • c C and C → • d. These are alternatives within one state, not consumed input.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> C C; C -> c C | d",
      "mode": "lr0",
      "view": "items",
      "input": "c d d",
      "title": "Construct LR(0) item states"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: From C → c • C, closure adds C → • c C and C → • d. These are alternatives within one state, not consumed input.",
        "options": [
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "From C → c • C, closure adds C → • c C and C → • d. These are alternatives within one state, not consumed input.",
          "A parser conflict can safely be resolved by always taking the first listed action."
        ],
        "answer": 2,
        "explanation": "An LR item places a dot in a production to mark recognized versus expected symbols. Closure adds productions for a nonterminal after the dot; GOTO advances over one symbol then closes the destination. Moving the dot is not itself a grammar derivation step; the dot describes parser progress.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C; C -> c c C | d d d; construction LR0. In item [C → • c c C], how many grammar symbols still lie to the right of the dot?",
        "answer": 3,
        "tolerance": 0,
        "explanation": "Count unrecognized right-hand-side symbols; lookahead after the comma is context rather than another right-hand-side symbol.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C C C; C -> c c C | d d d; construction LR0. The current state contains exactly [S' → • S; S → • C C C C; C → • c c C; C → • d d d]. With next token $, which ACTION category applies?",
        "options": [
          "Accept",
          "Conflict",
          "Error",
          "Shift",
          "Reduce"
        ],
        "answer": 2,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C C; C -> c c C | d d d; construction LR0. How many distinct items are in the initial closure of the augmented start item?",
        "answer": 4,
        "tolerance": 0,
        "explanation": "Repeatedly add productions for a nonterminal after the dot, carrying contextual lookahead in LR(1). The dot does not consume input during closure.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 857.18,
        "text": "and then this is the production and then you will say that okay because of this dot you will again write it so exactly same exactly same state so this is the LR0 automaton that we have okay so very easily I hope you can construct the LR0 automaton now using this LR0 automaton we can construct LR0 parsing table and SLR1 parsing table let's just see both of th"
      },
      {
        "time": 915.87,
        "text": "How to how to build the parsing table? So to build the parsing table, what you need to do? You need to first number these states. Let me number this. Let's suppose this is i0, item 0 or the state 0. This is let's suppose i1, this is let's suppose i2, this is let's suppose maybe i3, this is suppose i4, this is suppose i5, this is suppose i6. You can just numb"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 22,
        "file": "022. Lecture 9a. LR(0) and SLR(1) Parsing Table Examples.mp4",
        "completedAt": "{\"file\":\"022. Lecture 9a. LR(0) and SLR(1) Parsing Table Examples.mp4\",\"language\":\"en\",\"probability\":0.90380859375,\"processing_seconds\":89.2299530506134,\"device\":\"cuda\"}"
      }
    ],
    "start": 857.18,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Trace this example: From C → c • C, closure adds C → • c C and C → • d. These are alternatives within one state, not consumed input.",
      "why": "An LR item places a dot in a production to mark recognized versus expected symbols. Closure adds productions for a nonterminal after the dot; GOTO advances over one symbol then closes the destination.",
      "watchFor": "Moving the dot is not itself a grammar derivation step; the dot describes parser progress.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 68,
    "lecture": 22,
    "title": "Construct LR(0) item states · Apply and challenge",
    "concept": "Moving the dot is not itself a grammar derivation step; the dot describes parser progress.",
    "teachingSteps": [
      "An LR item places a dot in a production to mark recognized versus expected symbols. Closure adds productions for a nonterminal after the dot; GOTO advances over one symbol then closes the destination.",
      "From C → c • C, closure adds C → • c C and C → • d. These are alternatives within one state, not consumed input.",
      "Moving the dot is not itself a grammar derivation step; the dot describes parser progress."
    ],
    "foundation": {
      "title": "Construct LR(0) item states",
      "idea": "An LR item places a dot in a production to mark recognized versus expected symbols. Closure adds productions for a nonterminal after the dot; GOTO advances over one symbol then closes the destination.",
      "example": "From C → c • C, closure adds C → • c C and C → • d. These are alternatives within one state, not consumed input.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> C C; C -> c C | d",
      "mode": "lr0",
      "view": "items",
      "input": "c d d",
      "title": "Construct LR(0) item states"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying construct lr(0) item states, which warning prevents a wrong conclusion?",
        "options": [
          "Moving the dot is not itself a grammar derivation step; the dot describes parser progress.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift."
        ],
        "answer": 0,
        "explanation": "An LR item places a dot in a production to mark recognized versus expected symbols. Closure adds productions for a nonterminal after the dot; GOTO advances over one symbol then closes the destination. Moving the dot is not itself a grammar derivation step; the dot describes parser progress.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C C C; C -> c c c c C | d d d; construction LR0. The current state contains exactly [C → c c c c C •]. With next token c, which ACTION category applies?",
        "options": [
          "Error",
          "Conflict",
          "Reduce",
          "Shift",
          "Accept"
        ],
        "answer": 2,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C C; C -> c c c c C | d d d; construction LR0. How many distinct items are in the initial closure of the augmented start item?",
        "answer": 4,
        "tolerance": 0,
        "explanation": "Repeatedly add productions for a nonterminal after the dot, carrying contextual lookahead in LR(1). The dot does not consume input during closure.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C C C; C -> c c c c C | d d d; construction LR0. In item [C → c c c • c C], how many grammar symbols still lie to the right of the dot?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count unrecognized right-hand-side symbols; lookahead after the comma is context rather than another right-hand-side symbol.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 857.18,
        "text": "and then this is the production and then you will say that okay because of this dot you will again write it so exactly same exactly same state so this is the LR0 automaton that we have okay so very easily I hope you can construct the LR0 automaton now using this LR0 automaton we can construct LR0 parsing table and SLR1 parsing table let's just see both of th"
      },
      {
        "time": 915.87,
        "text": "How to how to build the parsing table? So to build the parsing table, what you need to do? You need to first number these states. Let me number this. Let's suppose this is i0, item 0 or the state 0. This is let's suppose i1, this is let's suppose i2, this is let's suppose maybe i3, this is suppose i4, this is suppose i5, this is suppose i6. You can just numb"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 22,
        "file": "022. Lecture 9a. LR(0) and SLR(1) Parsing Table Examples.mp4",
        "completedAt": "{\"file\":\"022. Lecture 9a. LR(0) and SLR(1) Parsing Table Examples.mp4\",\"language\":\"en\",\"probability\":0.90380859375,\"processing_seconds\":89.2299530506134,\"device\":\"cuda\"}"
      }
    ],
    "start": 857.18,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Check this boundary: Moving the dot is not itself a grammar derivation step; the dot describes parser progress.",
      "why": "An LR item places a dot in a production to mark recognized versus expected symbols. Closure adds productions for a nonterminal after the dot; GOTO advances over one symbol then closes the destination.",
      "watchFor": "Moving the dot is not itself a grammar derivation step; the dot describes parser progress.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 69,
    "lecture": 23,
    "title": "Use FOLLOW to obtain SLR reductions · Understand the concept",
    "concept": "SLR uses LR(0) item states but adds a reduction A → α only under FOLLOW(A). This removes some overly broad LR(0) reductions without changing the item automaton.",
    "teachingSteps": [
      "SLR uses LR(0) item states but adds a reduction A → α only under FOLLOW(A). This removes some overly broad LR(0) reductions without changing the item automaton.",
      "An LR(0) shift/reduce conflict can disappear under SLR when the shift token is absent from the completed production left side FOLLOW set.",
      "SLR still uses a global FOLLOW set and can introduce a reduction in an inappropriate local context."
    ],
    "foundation": {
      "title": "Use FOLLOW to obtain SLR reductions",
      "idea": "SLR uses LR(0) item states but adds a reduction A → α only under FOLLOW(A). This removes some overly broad LR(0) reductions without changing the item automaton.",
      "example": "An LR(0) shift/reduce conflict can disappear under SLR when the shift token is absent from the completed production left side FOLLOW set.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> A a | b; A -> b",
      "mode": "slr",
      "view": "items",
      "input": "b a",
      "title": "Use FOLLOW to obtain SLR reductions"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains use follow to obtain slr reductions?",
        "options": [
          "An LR reduction consumes the next input token just like a shift.",
          "SLR uses LR(0) item states but adds a reduction A → α only under FOLLOW(A). This removes some overly broad LR(0) reductions without changing the item automaton.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous."
        ],
        "answer": 1,
        "explanation": "SLR uses LR(0) item states but adds a reduction A → α only under FOLLOW(A). This removes some overly broad LR(0) reductions without changing the item automaton. SLR still uses a global FOLLOW set and can introduce a reduction in an inappropriate local context.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C C C; C -> c c c C | d; construction SLR. Which global FOLLOW(S) set would SLR use for a completed S item?",
        "options": [
          "{ε}",
          "{c, d}",
          "{}",
          "{$}"
        ],
        "answer": 3,
        "explanation": "SLR consults the global FOLLOW set. Canonical LR(1) can retain a smaller context-specific item lookahead.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C C; C -> c c c C | d; construction SLR. How many ACTION cells contain incompatible actions?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C C C C C; C -> c c c C | d; construction SLR. The current state contains exactly [S → C C C C • C C; C → • c c c C; C → • d]. With next token $, which ACTION category applies?",
        "options": [
          "Reduce",
          "Accept",
          "Conflict",
          "Error",
          "Shift"
        ],
        "answer": 3,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 632.22,
        "text": "So, if this is like that then LR0 never possible, but maybe it is maybe it is S11. How we need to check? Tell me the follow of E. What is the follow of E? Definitely dollar. And what else? What is in the follow of E? Then you will say that plus is a follow of E, dollar and plus, dollar and plus only. So, now see here this reduced move in I7 or in I2."
      }
    ],
    "sourceReferences": [
      {
        "lecture": 23,
        "file": "023. Lecture 9b. More examples on LR(0) and SLR(1) Gramm.mp4",
        "completedAt": "{\"file\":\"023. Lecture 9b. More examples on LR(0) and SLR(1) Gramm.mp4\",\"language\":\"en\",\"probability\":0.95556640625,\"processing_seconds\":35.938589572906494,\"device\":\"cuda\"}"
      }
    ],
    "start": 632.22,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Explain the rule: SLR uses LR(0) item states but adds a reduction A → α only under FOLLOW(A). This removes some overly broad LR(0) reductions without changing the item automaton.",
      "why": "SLR uses LR(0) item states but adds a reduction A → α only under FOLLOW(A). This removes some overly broad LR(0) reductions without changing the item automaton.",
      "watchFor": "SLR still uses a global FOLLOW set and can introduce a reduction in an inappropriate local context.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 70,
    "lecture": 23,
    "title": "Use FOLLOW to obtain SLR reductions · Trace and experiment",
    "concept": "An LR(0) shift/reduce conflict can disappear under SLR when the shift token is absent from the completed production left side FOLLOW set.",
    "teachingSteps": [
      "SLR uses LR(0) item states but adds a reduction A → α only under FOLLOW(A). This removes some overly broad LR(0) reductions without changing the item automaton.",
      "An LR(0) shift/reduce conflict can disappear under SLR when the shift token is absent from the completed production left side FOLLOW set.",
      "SLR still uses a global FOLLOW set and can introduce a reduction in an inappropriate local context."
    ],
    "foundation": {
      "title": "Use FOLLOW to obtain SLR reductions",
      "idea": "SLR uses LR(0) item states but adds a reduction A → α only under FOLLOW(A). This removes some overly broad LR(0) reductions without changing the item automaton.",
      "example": "An LR(0) shift/reduce conflict can disappear under SLR when the shift token is absent from the completed production left side FOLLOW set.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> A a | b; A -> b",
      "mode": "slr",
      "view": "items",
      "input": "b a",
      "title": "Use FOLLOW to obtain SLR reductions"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: An LR(0) shift/reduce conflict can disappear under SLR when the shift token is absent from the completed production left side FOLLOW set.",
        "options": [
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "An LR(0) shift/reduce conflict can disappear under SLR when the shift token is absent from the completed production left side FOLLOW set."
        ],
        "answer": 3,
        "explanation": "SLR uses LR(0) item states but adds a reduction A → α only under FOLLOW(A). This removes some overly broad LR(0) reductions without changing the item automaton. SLR still uses a global FOLLOW set and can introduce a reduction in an inappropriate local context.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C C; C -> c C | d d; construction SLR. How many ACTION cells contain incompatible actions?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C C C C C; C -> c C | d d; construction SLR. The current state contains exactly [S' → S •]. With next token c, which ACTION category applies?",
        "options": [
          "Shift",
          "Reduce",
          "Accept",
          "Conflict",
          "Error"
        ],
        "answer": 4,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C; C -> c c C | d d; construction SLR. Which global FOLLOW(C) set would SLR use for a completed C item?",
        "options": [
          "{$, c, d}",
          "{ε}",
          "{c, d}",
          "{}"
        ],
        "answer": 0,
        "explanation": "SLR consults the global FOLLOW set. Canonical LR(1) can retain a smaller context-specific item lookahead.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 632.22,
        "text": "So, if this is like that then LR0 never possible, but maybe it is maybe it is S11. How we need to check? Tell me the follow of E. What is the follow of E? Definitely dollar. And what else? What is in the follow of E? Then you will say that plus is a follow of E, dollar and plus, dollar and plus only. So, now see here this reduced move in I7 or in I2."
      }
    ],
    "sourceReferences": [
      {
        "lecture": 23,
        "file": "023. Lecture 9b. More examples on LR(0) and SLR(1) Gramm.mp4",
        "completedAt": "{\"file\":\"023. Lecture 9b. More examples on LR(0) and SLR(1) Gramm.mp4\",\"language\":\"en\",\"probability\":0.95556640625,\"processing_seconds\":35.938589572906494,\"device\":\"cuda\"}"
      }
    ],
    "start": 632.22,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Trace this example: An LR(0) shift/reduce conflict can disappear under SLR when the shift token is absent from the completed production left side FOLLOW set.",
      "why": "SLR uses LR(0) item states but adds a reduction A → α only under FOLLOW(A). This removes some overly broad LR(0) reductions without changing the item automaton.",
      "watchFor": "SLR still uses a global FOLLOW set and can introduce a reduction in an inappropriate local context.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 71,
    "lecture": 23,
    "title": "Use FOLLOW to obtain SLR reductions · Apply and challenge",
    "concept": "SLR still uses a global FOLLOW set and can introduce a reduction in an inappropriate local context.",
    "teachingSteps": [
      "SLR uses LR(0) item states but adds a reduction A → α only under FOLLOW(A). This removes some overly broad LR(0) reductions without changing the item automaton.",
      "An LR(0) shift/reduce conflict can disappear under SLR when the shift token is absent from the completed production left side FOLLOW set.",
      "SLR still uses a global FOLLOW set and can introduce a reduction in an inappropriate local context."
    ],
    "foundation": {
      "title": "Use FOLLOW to obtain SLR reductions",
      "idea": "SLR uses LR(0) item states but adds a reduction A → α only under FOLLOW(A). This removes some overly broad LR(0) reductions without changing the item automaton.",
      "example": "An LR(0) shift/reduce conflict can disappear under SLR when the shift token is absent from the completed production left side FOLLOW set.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> A a | b; A -> b",
      "mode": "slr",
      "view": "items",
      "input": "b a",
      "title": "Use FOLLOW to obtain SLR reductions"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying use follow to obtain slr reductions, which warning prevents a wrong conclusion?",
        "options": [
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "SLR still uses a global FOLLOW set and can introduce a reduction in an inappropriate local context.",
          "A parser conflict can safely be resolved by always taking the first listed action."
        ],
        "answer": 2,
        "explanation": "SLR uses LR(0) item states but adds a reduction A → α only under FOLLOW(A). This removes some overly broad LR(0) reductions without changing the item automaton. SLR still uses a global FOLLOW set and can introduce a reduction in an inappropriate local context.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C C C C C; C -> c c c C | d d; construction SLR. The current state contains exactly [S → C C C • C C C; C → • c c c C; C → • d d]. With next token d, which ACTION category applies?",
        "options": [
          "Reduce",
          "Accept",
          "Error",
          "Conflict",
          "Shift"
        ],
        "answer": 4,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C; C -> c c c c C | d d; construction SLR. Which global FOLLOW(C) set would SLR use for a completed C item?",
        "options": [
          "{c, d}",
          "{}",
          "{$, c, d}",
          "{ε}"
        ],
        "answer": 2,
        "explanation": "SLR consults the global FOLLOW set. Canonical LR(1) can retain a smaller context-specific item lookahead.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C; C -> c c c c C | d d; construction SLR. How many ACTION cells contain incompatible actions?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 632.22,
        "text": "So, if this is like that then LR0 never possible, but maybe it is maybe it is S11. How we need to check? Tell me the follow of E. What is the follow of E? Definitely dollar. And what else? What is in the follow of E? Then you will say that plus is a follow of E, dollar and plus, dollar and plus only. So, now see here this reduced move in I7 or in I2."
      }
    ],
    "sourceReferences": [
      {
        "lecture": 23,
        "file": "023. Lecture 9b. More examples on LR(0) and SLR(1) Gramm.mp4",
        "completedAt": "{\"file\":\"023. Lecture 9b. More examples on LR(0) and SLR(1) Gramm.mp4\",\"language\":\"en\",\"probability\":0.95556640625,\"processing_seconds\":35.938589572906494,\"device\":\"cuda\"}"
      }
    ],
    "start": 632.22,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Check this boundary: SLR still uses a global FOLLOW set and can introduce a reduction in an inappropriate local context.",
      "why": "SLR uses LR(0) item states but adds a reduction A → α only under FOLLOW(A). This removes some overly broad LR(0) reductions without changing the item automaton.",
      "watchFor": "SLR still uses a global FOLLOW set and can introduce a reduction in an inappropriate local context.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 72,
    "lecture": 24,
    "title": "Understand closure without consuming input · Understand the concept",
    "concept": "Closure predicts productions that could be needed next. It expands the set of possible items until no new item is added, while GOTO represents a transition on an actual grammar symbol.",
    "teachingSteps": [
      "Closure predicts productions that could be needed next. It expands the set of possible items until no new item is added, while GOTO represents a transition on an actual grammar symbol.",
      "The initial item S′ → • S brings in S productions and then any nonterminal productions needed at their first position.",
      "Closure does not advance the input pointer or move the dot in existing items."
    ],
    "foundation": {
      "title": "Understand closure without consuming input",
      "idea": "Closure predicts productions that could be needed next. It expands the set of possible items until no new item is added, while GOTO represents a transition on an actual grammar symbol.",
      "example": "The initial item S′ → • S brings in S productions and then any nonterminal productions needed at their first position.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> C C; C -> c C | d",
      "mode": "lr0",
      "view": "items",
      "input": "c d d",
      "title": "Understand closure without consuming input"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains understand closure without consuming input?",
        "options": [
          "Closure predicts productions that could be needed next. It expands the set of possible items until no new item is added, while GOTO represents a transition on an actual grammar symbol.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift."
        ],
        "answer": 0,
        "explanation": "Closure predicts productions that could be needed next. It expands the set of possible items until no new item is added, while GOTO represents a transition on an actual grammar symbol. Closure does not advance the input pointer or move the dot in existing items.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C C C; C -> c c C | d d d; construction LR0. How many distinct items are in the initial closure of the augmented start item?",
        "answer": 4,
        "tolerance": 0,
        "explanation": "Repeatedly add productions for a nonterminal after the dot, carrying contextual lookahead in LR(1). The dot does not consume input during closure.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C; C -> c c c C | d d d; construction LR0. In item [C → c c c C •], how many grammar symbols still lie to the right of the dot?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count unrecognized right-hand-side symbols; lookahead after the comma is context rather than another right-hand-side symbol.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In canonical LR(1) closure for grammar S -> A t25 B; A -> a; B -> b | ε, start with [S → • A t25 B, $]. What lookahead set is attached to the newly introduced A → • a item(s)?",
        "options": [
          "{$, a}",
          "{b, t25, ε}",
          "{t25}",
          "{ε}"
        ],
        "answer": 2,
        "explanation": "Use FIRST of the suffix followed by the parent lookahead. Do not copy all of FOLLOW(A) or put ε into an LR lookahead.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 31.2,
        "text": "and most needed also and most needed. So, if you if you understand that then your bottom of parsing will be crystal clear. What is this rerun of DFA? If you understand that then your bottom of parsing will be crystal clear once you understand this completely. Bottom of parsing will get crystal clear. So, let us just start. So, what do I mean by rerun of DFA?"
      },
      {
        "time": 68.39,
        "text": "few questions right we have solved few questions regarding the regarding the allergy or automaton so I have taken those screenshots only so for example we have we have already drawn the allergy or automaton for this particular grammar right do you remember okay now now what we want to do today we want to understand this this DFA have you understood this DFA "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 24,
        "file": "024_Lecture_10_Really_Understanding_LR0_Automata_Re_Run_.mp4",
        "completedAt": "{\"file\":\"024_Lecture_10_Really_Understanding_LR0_Automata_Re_Run_.mp4\",\"language\":\"en\",\"probability\":0.845703125,\"processing_seconds\":194.20678782463074,\"device\":\"cuda\"}"
      }
    ],
    "start": 31.2,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Explain the rule: Closure predicts productions that could be needed next. It expands the set of possible items until no new item is added, while GOTO represents a transition on an actual grammar symbol.",
      "why": "Closure predicts productions that could be needed next. It expands the set of possible items until no new item is added, while GOTO represents a transition on an actual grammar symbol.",
      "watchFor": "Closure does not advance the input pointer or move the dot in existing items.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 73,
    "lecture": 24,
    "title": "Understand closure without consuming input · Trace and experiment",
    "concept": "The initial item S′ → • S brings in S productions and then any nonterminal productions needed at their first position.",
    "teachingSteps": [
      "Closure predicts productions that could be needed next. It expands the set of possible items until no new item is added, while GOTO represents a transition on an actual grammar symbol.",
      "The initial item S′ → • S brings in S productions and then any nonterminal productions needed at their first position.",
      "Closure does not advance the input pointer or move the dot in existing items."
    ],
    "foundation": {
      "title": "Understand closure without consuming input",
      "idea": "Closure predicts productions that could be needed next. It expands the set of possible items until no new item is added, while GOTO represents a transition on an actual grammar symbol.",
      "example": "The initial item S′ → • S brings in S productions and then any nonterminal productions needed at their first position.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> C C; C -> c C | d",
      "mode": "lr0",
      "view": "items",
      "input": "c d d",
      "title": "Understand closure without consuming input"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: The initial item S′ → • S brings in S productions and then any nonterminal productions needed at their first position.",
        "options": [
          "The initial item S′ → • S brings in S productions and then any nonterminal productions needed at their first position.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift."
        ],
        "answer": 0,
        "explanation": "Closure predicts productions that could be needed next. It expands the set of possible items until no new item is added, while GOTO represents a transition on an actual grammar symbol. Closure does not advance the input pointer or move the dot in existing items.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C; C -> c C | d; construction LR0. In item [S → C C •], how many grammar symbols still lie to the right of the dot?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count unrecognized right-hand-side symbols; lookahead after the comma is context rather than another right-hand-side symbol.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In canonical LR(1) closure for grammar S -> A t4 B; A -> a; B -> b | ε, start with [S → • A t4 B, $]. What lookahead set is attached to the newly introduced A → • a item(s)?",
        "options": [
          "{$, a}",
          "{b, t4, ε}",
          "{t4}",
          "{ε}"
        ],
        "answer": 2,
        "explanation": "Use FIRST of the suffix followed by the parent lookahead. Do not copy all of FOLLOW(A) or put ε into an LR lookahead.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C; C -> c C | d; construction LR0. How many distinct items are in the initial closure of the augmented start item?",
        "answer": 4,
        "tolerance": 0,
        "explanation": "Repeatedly add productions for a nonterminal after the dot, carrying contextual lookahead in LR(1). The dot does not consume input during closure.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 31.2,
        "text": "and most needed also and most needed. So, if you if you understand that then your bottom of parsing will be crystal clear. What is this rerun of DFA? If you understand that then your bottom of parsing will be crystal clear once you understand this completely. Bottom of parsing will get crystal clear. So, let us just start. So, what do I mean by rerun of DFA?"
      },
      {
        "time": 68.39,
        "text": "few questions right we have solved few questions regarding the regarding the allergy or automaton so I have taken those screenshots only so for example we have we have already drawn the allergy or automaton for this particular grammar right do you remember okay now now what we want to do today we want to understand this this DFA have you understood this DFA "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 24,
        "file": "024_Lecture_10_Really_Understanding_LR0_Automata_Re_Run_.mp4",
        "completedAt": "{\"file\":\"024_Lecture_10_Really_Understanding_LR0_Automata_Re_Run_.mp4\",\"language\":\"en\",\"probability\":0.845703125,\"processing_seconds\":194.20678782463074,\"device\":\"cuda\"}"
      }
    ],
    "start": 31.2,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Trace this example: The initial item S′ → • S brings in S productions and then any nonterminal productions needed at their first position.",
      "why": "Closure predicts productions that could be needed next. It expands the set of possible items until no new item is added, while GOTO represents a transition on an actual grammar symbol.",
      "watchFor": "Closure does not advance the input pointer or move the dot in existing items.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 74,
    "lecture": 24,
    "title": "Understand closure without consuming input · Apply and challenge",
    "concept": "Closure does not advance the input pointer or move the dot in existing items.",
    "teachingSteps": [
      "Closure predicts productions that could be needed next. It expands the set of possible items until no new item is added, while GOTO represents a transition on an actual grammar symbol.",
      "The initial item S′ → • S brings in S productions and then any nonterminal productions needed at their first position.",
      "Closure does not advance the input pointer or move the dot in existing items."
    ],
    "foundation": {
      "title": "Understand closure without consuming input",
      "idea": "Closure predicts productions that could be needed next. It expands the set of possible items until no new item is added, while GOTO represents a transition on an actual grammar symbol.",
      "example": "The initial item S′ → • S brings in S productions and then any nonterminal productions needed at their first position.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> C C; C -> c C | d",
      "mode": "lr0",
      "view": "items",
      "input": "c d d",
      "title": "Understand closure without consuming input"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying understand closure without consuming input, which warning prevents a wrong conclusion?",
        "options": [
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "Closure does not advance the input pointer or move the dot in existing items."
        ],
        "answer": 3,
        "explanation": "Closure predicts productions that could be needed next. It expands the set of possible items until no new item is added, while GOTO represents a transition on an actual grammar symbol. Closure does not advance the input pointer or move the dot in existing items.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In canonical LR(1) closure for grammar S -> A t14 B; A -> a; B -> b | ε, start with [S → • A t14 B, $]. What lookahead set is attached to the newly introduced A → • a item(s)?",
        "options": [
          "{$, a}",
          "{b, t14, ε}",
          "{t14}",
          "{ε}"
        ],
        "answer": 2,
        "explanation": "Use FIRST of the suffix followed by the parent lookahead. Do not copy all of FOLLOW(A) or put ε into an LR lookahead.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C; C -> c c c C | d; construction LR0. How many distinct items are in the initial closure of the augmented start item?",
        "answer": 4,
        "tolerance": 0,
        "explanation": "Repeatedly add productions for a nonterminal after the dot, carrying contextual lookahead in LR(1). The dot does not consume input during closure.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C C; C -> c c c C | d; construction LR0. In item [C → c • c c C], how many grammar symbols still lie to the right of the dot?",
        "answer": 3,
        "tolerance": 0,
        "explanation": "Count unrecognized right-hand-side symbols; lookahead after the comma is context rather than another right-hand-side symbol.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 31.2,
        "text": "and most needed also and most needed. So, if you if you understand that then your bottom of parsing will be crystal clear. What is this rerun of DFA? If you understand that then your bottom of parsing will be crystal clear once you understand this completely. Bottom of parsing will get crystal clear. So, let us just start. So, what do I mean by rerun of DFA?"
      },
      {
        "time": 68.39,
        "text": "few questions right we have solved few questions regarding the regarding the allergy or automaton so I have taken those screenshots only so for example we have we have already drawn the allergy or automaton for this particular grammar right do you remember okay now now what we want to do today we want to understand this this DFA have you understood this DFA "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 24,
        "file": "024_Lecture_10_Really_Understanding_LR0_Automata_Re_Run_.mp4",
        "completedAt": "{\"file\":\"024_Lecture_10_Really_Understanding_LR0_Automata_Re_Run_.mp4\",\"language\":\"en\",\"probability\":0.845703125,\"processing_seconds\":194.20678782463074,\"device\":\"cuda\"}"
      }
    ],
    "start": 31.2,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Check this boundary: Closure does not advance the input pointer or move the dot in existing items.",
      "why": "Closure predicts productions that could be needed next. It expands the set of possible items until no new item is added, while GOTO represents a transition on an actual grammar symbol.",
      "watchFor": "Closure does not advance the input pointer or move the dot in existing items.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 75,
    "lecture": 25,
    "title": "Read an LR ACTION cell · Understand the concept",
    "concept": "A table cell can shift to a state, reduce by a production, accept, or be empty for error. A conflicting cell contains incompatible actions for the same state and lookahead.",
    "teachingSteps": [
      "A table cell can shift to a state, reduce by a production, accept, or be empty for error. A conflicting cell contains incompatible actions for the same state and lookahead.",
      "A reduction pops one symbol/state pair per right-hand-side symbol, then consults GOTO for the left-hand-side nonterminal.",
      "An ε reduction pops zero pairs. It still pushes the reduced nonterminal and a GOTO state."
    ],
    "foundation": {
      "title": "Read an LR ACTION cell",
      "idea": "A table cell can shift to a state, reduce by a production, accept, or be empty for error. A conflicting cell contains incompatible actions for the same state and lookahead.",
      "example": "A reduction pops one symbol/state pair per right-hand-side symbol, then consults GOTO for the left-hand-side nonterminal.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> A b; A -> a A | ε",
      "mode": "slr",
      "view": "parse",
      "input": "a a b",
      "title": "Read an LR ACTION cell"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains read an lr action cell?",
        "options": [
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "A table cell can shift to a state, reduce by a production, accept, or be empty for error. A conflicting cell contains incompatible actions for the same state and lookahead."
        ],
        "answer": 3,
        "explanation": "A table cell can shift to a state, reduce by a production, accept, or be empty for error. A conflicting cell contains incompatible actions for the same state and lookahead. An ε reduction pops zero pairs. It still pushes the reduced nonterminal and a GOTO state.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> A b b b; A -> a a A | ε; construction SLR. When reducing A → ε, how many symbol/state pairs are removed before following GOTO?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Pop one pair per right-hand-side symbol. An ε reduction removes zero pairs, then still follows GOTO for the left side.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> A b b b b; A -> a a A | ε; construction SLR. Trace complete input b b b b. How many terminal shifts occur before the parser stops?",
        "answer": 4,
        "tolerance": 0,
        "explanation": "Only shifts consume input; reductions change the stack without consuming the next terminal. Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> A b b b b b; A -> a a A | ε; construction SLR. The current state contains exactly [S → A b • b b b b]. With next token a, which ACTION category applies?",
        "options": [
          "Conflict",
          "Error",
          "Shift",
          "Reduce",
          "Accept"
        ],
        "answer": 1,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 482.36,
        "text": "This part is called xn part action means there will be two types of actions if you remember one action is shift another option action is Reduce This part is just go to part which means I'm not going to take any action here. I'm just going to change my state Okay on this part on seeing the capital symbols I'm only only going to take the actions on seeing the "
      },
      {
        "time": 543.56,
        "text": "because these are the like these are the sift actions which means on zero you are going to sift it and you are going to go at the straight four that is why I'm calling it sift four s four okay now on the zero you have one so that is why you are going to write s five on the one you are going to write s five s five on e you are going to go one right on e on if"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 25,
        "file": "025. Lecture 11a. More Questions on LR(0) and SLR(1).mp4",
        "completedAt": "{\"file\":\"025. Lecture 11a. More Questions on LR(0) and SLR(1).mp4\",\"language\":\"en\",\"probability\":0.90478515625,\"processing_seconds\":55.011518239974976,\"device\":\"cuda\"}"
      }
    ],
    "start": 482.36,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Explain the rule: A table cell can shift to a state, reduce by a production, accept, or be empty for error. A conflicting cell contains incompatible actions for the same state and lookahead.",
      "why": "A table cell can shift to a state, reduce by a production, accept, or be empty for error. A conflicting cell contains incompatible actions for the same state and lookahead.",
      "watchFor": "An ε reduction pops zero pairs. It still pushes the reduced nonterminal and a GOTO state.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 76,
    "lecture": 25,
    "title": "Read an LR ACTION cell · Trace and experiment",
    "concept": "A reduction pops one symbol/state pair per right-hand-side symbol, then consults GOTO for the left-hand-side nonterminal.",
    "teachingSteps": [
      "A table cell can shift to a state, reduce by a production, accept, or be empty for error. A conflicting cell contains incompatible actions for the same state and lookahead.",
      "A reduction pops one symbol/state pair per right-hand-side symbol, then consults GOTO for the left-hand-side nonterminal.",
      "An ε reduction pops zero pairs. It still pushes the reduced nonterminal and a GOTO state."
    ],
    "foundation": {
      "title": "Read an LR ACTION cell",
      "idea": "A table cell can shift to a state, reduce by a production, accept, or be empty for error. A conflicting cell contains incompatible actions for the same state and lookahead.",
      "example": "A reduction pops one symbol/state pair per right-hand-side symbol, then consults GOTO for the left-hand-side nonterminal.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> A b; A -> a A | ε",
      "mode": "slr",
      "view": "parse",
      "input": "a a b",
      "title": "Read an LR ACTION cell"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: A reduction pops one symbol/state pair per right-hand-side symbol, then consults GOTO for the left-hand-side nonterminal.",
        "options": [
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "A reduction pops one symbol/state pair per right-hand-side symbol, then consults GOTO for the left-hand-side nonterminal."
        ],
        "answer": 3,
        "explanation": "A table cell can shift to a state, reduce by a production, accept, or be empty for error. A conflicting cell contains incompatible actions for the same state and lookahead. An ε reduction pops zero pairs. It still pushes the reduced nonterminal and a GOTO state.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> A b b b b; A -> a a a a A | ε; construction SLR. Trace complete input a a a a b b b b. How many terminal shifts occur before the parser stops?",
        "answer": 8,
        "tolerance": 0,
        "explanation": "Only shifts consume input; reductions change the stack without consuming the next terminal. Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> A b b b b b; A -> a a a a A | ε; construction SLR. The current state contains exactly [A → a • a a a A]. With next token $, which ACTION category applies?",
        "options": [
          "Shift",
          "Reduce",
          "Accept",
          "Conflict",
          "Error"
        ],
        "answer": 4,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> A b b b b b b; A -> a a a a A | ε; construction SLR. When reducing S → A b b b b b b, how many symbol/state pairs are removed before following GOTO?",
        "answer": 7,
        "tolerance": 0,
        "explanation": "Pop one pair per right-hand-side symbol. An ε reduction removes zero pairs, then still follows GOTO for the left side.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 482.36,
        "text": "This part is called xn part action means there will be two types of actions if you remember one action is shift another option action is Reduce This part is just go to part which means I'm not going to take any action here. I'm just going to change my state Okay on this part on seeing the capital symbols I'm only only going to take the actions on seeing the "
      },
      {
        "time": 543.56,
        "text": "because these are the like these are the sift actions which means on zero you are going to sift it and you are going to go at the straight four that is why I'm calling it sift four s four okay now on the zero you have one so that is why you are going to write s five on the one you are going to write s five s five on e you are going to go one right on e on if"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 25,
        "file": "025. Lecture 11a. More Questions on LR(0) and SLR(1).mp4",
        "completedAt": "{\"file\":\"025. Lecture 11a. More Questions on LR(0) and SLR(1).mp4\",\"language\":\"en\",\"probability\":0.90478515625,\"processing_seconds\":55.011518239974976,\"device\":\"cuda\"}"
      }
    ],
    "start": 482.36,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Trace this example: A reduction pops one symbol/state pair per right-hand-side symbol, then consults GOTO for the left-hand-side nonterminal.",
      "why": "A table cell can shift to a state, reduce by a production, accept, or be empty for error. A conflicting cell contains incompatible actions for the same state and lookahead.",
      "watchFor": "An ε reduction pops zero pairs. It still pushes the reduced nonterminal and a GOTO state.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 77,
    "lecture": 25,
    "title": "Read an LR ACTION cell · Apply and challenge",
    "concept": "An ε reduction pops zero pairs. It still pushes the reduced nonterminal and a GOTO state.",
    "teachingSteps": [
      "A table cell can shift to a state, reduce by a production, accept, or be empty for error. A conflicting cell contains incompatible actions for the same state and lookahead.",
      "A reduction pops one symbol/state pair per right-hand-side symbol, then consults GOTO for the left-hand-side nonterminal.",
      "An ε reduction pops zero pairs. It still pushes the reduced nonterminal and a GOTO state."
    ],
    "foundation": {
      "title": "Read an LR ACTION cell",
      "idea": "A table cell can shift to a state, reduce by a production, accept, or be empty for error. A conflicting cell contains incompatible actions for the same state and lookahead.",
      "example": "A reduction pops one symbol/state pair per right-hand-side symbol, then consults GOTO for the left-hand-side nonterminal.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> A b; A -> a A | ε",
      "mode": "slr",
      "view": "parse",
      "input": "a a b",
      "title": "Read an LR ACTION cell"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying read an lr action cell, which warning prevents a wrong conclusion?",
        "options": [
          "An ε reduction pops zero pairs. It still pushes the reduced nonterminal and a GOTO state.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift."
        ],
        "answer": 0,
        "explanation": "A table cell can shift to a state, reduce by a production, accept, or be empty for error. A conflicting cell contains incompatible actions for the same state and lookahead. An ε reduction pops zero pairs. It still pushes the reduced nonterminal and a GOTO state.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> A b b b b b; A -> a a A | ε; construction SLR. The current state contains exactly [S → A b • b b b b]. With next token b, which ACTION category applies?",
        "options": [
          "Accept",
          "Error",
          "Conflict",
          "Shift",
          "Reduce"
        ],
        "answer": 3,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> A b b b b b b; A -> a a A | ε; construction SLR. When reducing A → a a A, how many symbol/state pairs are removed before following GOTO?",
        "answer": 3,
        "tolerance": 0,
        "explanation": "Pop one pair per right-hand-side symbol. An ε reduction removes zero pairs, then still follows GOTO for the left side.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> A b b; A -> a a a A | ε; construction SLR. Trace complete input a a a a a a b. How many terminal shifts occur before the parser stops?",
        "answer": 7,
        "tolerance": 0,
        "explanation": "Only shifts consume input; reductions change the stack without consuming the next terminal. Reject: no ACTION entry.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 482.36,
        "text": "This part is called xn part action means there will be two types of actions if you remember one action is shift another option action is Reduce This part is just go to part which means I'm not going to take any action here. I'm just going to change my state Okay on this part on seeing the capital symbols I'm only only going to take the actions on seeing the "
      },
      {
        "time": 543.56,
        "text": "because these are the like these are the sift actions which means on zero you are going to sift it and you are going to go at the straight four that is why I'm calling it sift four s four okay now on the zero you have one so that is why you are going to write s five on the one you are going to write s five s five on e you are going to go one right on e on if"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 25,
        "file": "025. Lecture 11a. More Questions on LR(0) and SLR(1).mp4",
        "completedAt": "{\"file\":\"025. Lecture 11a. More Questions on LR(0) and SLR(1).mp4\",\"language\":\"en\",\"probability\":0.90478515625,\"processing_seconds\":55.011518239974976,\"device\":\"cuda\"}"
      }
    ],
    "start": 482.36,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Check this boundary: An ε reduction pops zero pairs. It still pushes the reduced nonterminal and a GOTO state.",
      "why": "A table cell can shift to a state, reduce by a production, accept, or be empty for error. A conflicting cell contains incompatible actions for the same state and lookahead.",
      "watchFor": "An ε reduction pops zero pairs. It still pushes the reduced nonterminal and a GOTO state.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 78,
    "lecture": 26,
    "title": "Check whether a grammar is SLR(1) · Understand the concept",
    "concept": "Construct the LR(0) states and restrict completed-item reductions to FOLLOW. The grammar is SLR(1) exactly when the resulting ACTION cells have no conflicts.",
    "teachingSteps": [
      "Construct the LR(0) states and restrict completed-item reductions to FOLLOW. The grammar is SLR(1) exactly when the resulting ACTION cells have no conflicts.",
      "For S → C C and C → c C | d, inspect every ACTION cell rather than inferring the result from the number of states.",
      "A few successful parses cannot prove a conflict-free construction for all inputs."
    ],
    "foundation": {
      "title": "Check whether a grammar is SLR(1)",
      "idea": "Construct the LR(0) states and restrict completed-item reductions to FOLLOW. The grammar is SLR(1) exactly when the resulting ACTION cells have no conflicts.",
      "example": "For S → C C and C → c C | d, inspect every ACTION cell rather than inferring the result from the number of states.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> C C; C -> c C | d",
      "mode": "slr",
      "view": "items",
      "input": "c d d",
      "title": "Check whether a grammar is SLR(1)"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains check whether a grammar is slr(1)?",
        "options": [
          "Construct the LR(0) states and restrict completed-item reductions to FOLLOW. The grammar is SLR(1) exactly when the resulting ACTION cells have no conflicts.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift."
        ],
        "answer": 0,
        "explanation": "Construct the LR(0) states and restrict completed-item reductions to FOLLOW. The grammar is SLR(1) exactly when the resulting ACTION cells have no conflicts. A few successful parses cannot prove a conflict-free construction for all inputs.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C C; C -> c C | d; construction SLR. How many ACTION cells contain incompatible actions?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C C C C C; C -> c C | d; construction SLR. The current state contains exactly [S → C C C • C C C; C → • c C; C → • d]. With next token d, which ACTION category applies?",
        "options": [
          "Accept",
          "Error",
          "Conflict",
          "Shift",
          "Reduce"
        ],
        "answer": 3,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C; C -> c c C | d; construction SLR. Which global FOLLOW(C) set would SLR use for a completed C item?",
        "options": [
          "{$, c, d}",
          "{ε}",
          "{c, d}",
          "{}"
        ],
        "answer": 0,
        "explanation": "SLR consults the global FOLLOW set. Canonical LR(1) can retain a smaller context-specific item lookahead.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 117.27,
        "text": "and one entry which is something like this, which will eventually be the shift entry. So, this is not LR0, clearly this is not LR0. Is this SLR? It depends whether this B, if B is in what follow of A, then then not SLR, otherwise SLR right, which means if B is, if B is not in follow of A, follow of A, then it is SLR. Why?"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 26,
        "file": "026. Lecture 11b. Condition of Grammar being SLR(1).mp4",
        "completedAt": "{\"file\":\"026. Lecture 11b. Condition of Grammar being SLR(1).mp4\",\"language\":\"en\",\"probability\":0.91357421875,\"processing_seconds\":6.396587133407593,\"device\":\"cuda\"}"
      }
    ],
    "start": 117.27,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Explain the rule: Construct the LR(0) states and restrict completed-item reductions to FOLLOW. The grammar is SLR(1) exactly when the resulting ACTION cells have no conflicts.",
      "why": "Construct the LR(0) states and restrict completed-item reductions to FOLLOW. The grammar is SLR(1) exactly when the resulting ACTION cells have no conflicts.",
      "watchFor": "A few successful parses cannot prove a conflict-free construction for all inputs.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 79,
    "lecture": 26,
    "title": "Check whether a grammar is SLR(1) · Trace and experiment",
    "concept": "For S → C C and C → c C | d, inspect every ACTION cell rather than inferring the result from the number of states.",
    "teachingSteps": [
      "Construct the LR(0) states and restrict completed-item reductions to FOLLOW. The grammar is SLR(1) exactly when the resulting ACTION cells have no conflicts.",
      "For S → C C and C → c C | d, inspect every ACTION cell rather than inferring the result from the number of states.",
      "A few successful parses cannot prove a conflict-free construction for all inputs."
    ],
    "foundation": {
      "title": "Check whether a grammar is SLR(1)",
      "idea": "Construct the LR(0) states and restrict completed-item reductions to FOLLOW. The grammar is SLR(1) exactly when the resulting ACTION cells have no conflicts.",
      "example": "For S → C C and C → c C | d, inspect every ACTION cell rather than inferring the result from the number of states.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> C C; C -> c C | d",
      "mode": "slr",
      "view": "items",
      "input": "c d d",
      "title": "Check whether a grammar is SLR(1)"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For S → C C and C → c C | d, inspect every ACTION cell rather than inferring the result from the number of states.",
        "options": [
          "For S → C C and C → c C | d, inspect every ACTION cell rather than inferring the result from the number of states.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift."
        ],
        "answer": 0,
        "explanation": "Construct the LR(0) states and restrict completed-item reductions to FOLLOW. The grammar is SLR(1) exactly when the resulting ACTION cells have no conflicts. A few successful parses cannot prove a conflict-free construction for all inputs.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C C C C C; C -> c c c C | d; construction SLR. The current state contains exactly [S' → • S; S → • C C C C C C; C → • c c c C; C → • d]. With next token $, which ACTION category applies?",
        "options": [
          "Conflict",
          "Error",
          "Shift",
          "Reduce",
          "Accept"
        ],
        "answer": 1,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C; C -> c c c c C | d; construction SLR. Which global FOLLOW(C) set would SLR use for a completed C item?",
        "options": [
          "{c, d}",
          "{}",
          "{$, c, d}",
          "{ε}"
        ],
        "answer": 2,
        "explanation": "SLR consults the global FOLLOW set. Canonical LR(1) can retain a smaller context-specific item lookahead.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C; C -> c c c c C | d; construction SLR. How many ACTION cells contain incompatible actions?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 117.27,
        "text": "and one entry which is something like this, which will eventually be the shift entry. So, this is not LR0, clearly this is not LR0. Is this SLR? It depends whether this B, if B is in what follow of A, then then not SLR, otherwise SLR right, which means if B is, if B is not in follow of A, follow of A, then it is SLR. Why?"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 26,
        "file": "026. Lecture 11b. Condition of Grammar being SLR(1).mp4",
        "completedAt": "{\"file\":\"026. Lecture 11b. Condition of Grammar being SLR(1).mp4\",\"language\":\"en\",\"probability\":0.91357421875,\"processing_seconds\":6.396587133407593,\"device\":\"cuda\"}"
      }
    ],
    "start": 117.27,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Trace this example: For S → C C and C → c C | d, inspect every ACTION cell rather than inferring the result from the number of states.",
      "why": "Construct the LR(0) states and restrict completed-item reductions to FOLLOW. The grammar is SLR(1) exactly when the resulting ACTION cells have no conflicts.",
      "watchFor": "A few successful parses cannot prove a conflict-free construction for all inputs.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 80,
    "lecture": 26,
    "title": "Check whether a grammar is SLR(1) · Apply and challenge",
    "concept": "A few successful parses cannot prove a conflict-free construction for all inputs.",
    "teachingSteps": [
      "Construct the LR(0) states and restrict completed-item reductions to FOLLOW. The grammar is SLR(1) exactly when the resulting ACTION cells have no conflicts.",
      "For S → C C and C → c C | d, inspect every ACTION cell rather than inferring the result from the number of states.",
      "A few successful parses cannot prove a conflict-free construction for all inputs."
    ],
    "foundation": {
      "title": "Check whether a grammar is SLR(1)",
      "idea": "Construct the LR(0) states and restrict completed-item reductions to FOLLOW. The grammar is SLR(1) exactly when the resulting ACTION cells have no conflicts.",
      "example": "For S → C C and C → c C | d, inspect every ACTION cell rather than inferring the result from the number of states.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> C C; C -> c C | d",
      "mode": "slr",
      "view": "items",
      "input": "c d d",
      "title": "Check whether a grammar is SLR(1)"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying check whether a grammar is slr(1), which warning prevents a wrong conclusion?",
        "options": [
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "A few successful parses cannot prove a conflict-free construction for all inputs."
        ],
        "answer": 3,
        "explanation": "Construct the LR(0) states and restrict completed-item reductions to FOLLOW. The grammar is SLR(1) exactly when the resulting ACTION cells have no conflicts. A few successful parses cannot prove a conflict-free construction for all inputs.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C C; C -> c c C | d; construction SLR. Which global FOLLOW(S) set would SLR use for a completed S item?",
        "options": [
          "{}",
          "{$}",
          "{ε}",
          "{c, d}"
        ],
        "answer": 1,
        "explanation": "SLR consults the global FOLLOW set. Canonical LR(1) can retain a smaller context-specific item lookahead.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C; C -> c c C | d d; construction SLR. How many ACTION cells contain incompatible actions?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C C C; C -> c c C | d d; construction SLR. The current state contains exactly [S → C C C C •]. With next token c, which ACTION category applies?",
        "options": [
          "Error",
          "Shift",
          "Reduce",
          "Accept",
          "Conflict"
        ],
        "answer": 0,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 117.27,
        "text": "and one entry which is something like this, which will eventually be the shift entry. So, this is not LR0, clearly this is not LR0. Is this SLR? It depends whether this B, if B is in what follow of A, then then not SLR, otherwise SLR right, which means if B is, if B is not in follow of A, follow of A, then it is SLR. Why?"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 26,
        "file": "026. Lecture 11b. Condition of Grammar being SLR(1).mp4",
        "completedAt": "{\"file\":\"026. Lecture 11b. Condition of Grammar being SLR(1).mp4\",\"language\":\"en\",\"probability\":0.91357421875,\"processing_seconds\":6.396587133407593,\"device\":\"cuda\"}"
      }
    ],
    "start": 117.27,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Check this boundary: A few successful parses cannot prove a conflict-free construction for all inputs.",
      "why": "Construct the LR(0) states and restrict completed-item reductions to FOLLOW. The grammar is SLR(1) exactly when the resulting ACTION cells have no conflicts.",
      "watchFor": "A few successful parses cannot prove a conflict-free construction for all inputs.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 81,
    "lecture": 27,
    "title": "Compare LL, LR(0) and SLR requirements · Understand the concept",
    "concept": "LL predicts a production before its right side is consumed. LR recognizes a right side before reducing. SLR retains LR(0) states while consulting one lookahead through FOLLOW sets.",
    "teachingSteps": [
      "LL predicts a production before its right side is consumed. LR recognizes a right side before reducing. SLR retains LR(0) states while consulting one lookahead through FOLLOW sets.",
      "The left-recursive expression grammar E → E + T | T is unsuitable for direct predictive recursion, yet can be handled by a suitable bottom-up construction.",
      "Parser-family claims concern a grammar construction; a language can have multiple equivalent grammars with different properties."
    ],
    "foundation": {
      "title": "Compare LL, LR(0) and SLR requirements",
      "idea": "LL predicts a production before its right side is consumed. LR recognizes a right side before reducing. SLR retains LR(0) states while consulting one lookahead through FOLLOW sets.",
      "example": "The left-recursive expression grammar E → E + T | T is unsuitable for direct predictive recursion, yet can be handled by a suitable bottom-up construction.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "E -> E + T | T; T -> id",
      "mode": "slr",
      "view": "items",
      "input": "id + id",
      "title": "Compare LL, LR(0) and SLR requirements"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains compare ll, lr(0) and slr requirements?",
        "options": [
          "LL predicts a production before its right side is consumed. LR recognizes a right side before reducing. SLR retains LR(0) states while consulting one lookahead through FOLLOW sets.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift."
        ],
        "answer": 0,
        "explanation": "LL predicts a production before its right side is consumed. LR recognizes a right side before reducing. SLR retains LR(0) states while consulting one lookahead through FOLLOW sets. Parser-family claims concern a grammar construction; a language can have multiple equivalent grammars with different properties.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar E -> E + T | T; T -> id, compare the actual LL(1) and SLR(1) ACTION constructions. Which statement is true?",
        "options": [
          "Only LL(1) is conflict-free",
          "Both constructions have conflicts",
          "Only SLR(1) is conflict-free",
          "Both tables are conflict-free"
        ],
        "answer": 2,
        "explanation": "Compare the generated cells rather than inferring a language classification from one grammar feature.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar E -> E + T | T; T -> id; construction SLR. How many ACTION cells contain incompatible actions?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar E -> E + T | T; T -> id; construction SLR. What happens on the entire input id?",
        "options": [
          "Accept",
          "Reject",
          "Stop on conflict"
        ],
        "answer": 0,
        "explanation": "Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 517.15,
        "text": "and what about reduce entry? reduce entry will come in the follow of b only so what is follow of b follow of b is same as follow of c and follow of c is a b ab right so follow of c is ab follow of c is same as follow of b which is ab now now let's check let's check whether whether this reduce entry and and this different entry is conflicting which means this"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 27,
        "file": "027. Lecture 11c. Relation between LL(1) LR(0) and SLR(1.mp4",
        "completedAt": "{\"file\":\"027. Lecture 11c. Relation between LL(1) LR(0) and SLR(1.mp4\",\"language\":\"en\",\"probability\":0.95703125,\"processing_seconds\":43.839683055877686,\"device\":\"cuda\"}"
      }
    ],
    "start": 517.15,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Explain the rule: LL predicts a production before its right side is consumed. LR recognizes a right side before reducing. SLR retains LR(0) states while consulting one lookahead through FOLLOW sets.",
      "why": "LL predicts a production before its right side is consumed. LR recognizes a right side before reducing. SLR retains LR(0) states while consulting one lookahead through FOLLOW sets.",
      "watchFor": "Parser-family claims concern a grammar construction; a language can have multiple equivalent grammars with different properties.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 82,
    "lecture": 27,
    "title": "Compare LL, LR(0) and SLR requirements · Trace and experiment",
    "concept": "The left-recursive expression grammar E → E + T | T is unsuitable for direct predictive recursion, yet can be handled by a suitable bottom-up construction.",
    "teachingSteps": [
      "LL predicts a production before its right side is consumed. LR recognizes a right side before reducing. SLR retains LR(0) states while consulting one lookahead through FOLLOW sets.",
      "The left-recursive expression grammar E → E + T | T is unsuitable for direct predictive recursion, yet can be handled by a suitable bottom-up construction.",
      "Parser-family claims concern a grammar construction; a language can have multiple equivalent grammars with different properties."
    ],
    "foundation": {
      "title": "Compare LL, LR(0) and SLR requirements",
      "idea": "LL predicts a production before its right side is consumed. LR recognizes a right side before reducing. SLR retains LR(0) states while consulting one lookahead through FOLLOW sets.",
      "example": "The left-recursive expression grammar E → E + T | T is unsuitable for direct predictive recursion, yet can be handled by a suitable bottom-up construction.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "E -> E + T | T; T -> id",
      "mode": "slr",
      "view": "items",
      "input": "id + id",
      "title": "Compare LL, LR(0) and SLR requirements"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: The left-recursive expression grammar E → E + T | T is unsuitable for direct predictive recursion, yet can be handled by a suitable bottom-up construction.",
        "options": [
          "An LR reduction consumes the next input token just like a shift.",
          "The left-recursive expression grammar E → E + T | T is unsuitable for direct predictive recursion, yet can be handled by a suitable bottom-up construction.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous."
        ],
        "answer": 1,
        "explanation": "LL predicts a production before its right side is consumed. LR recognizes a right side before reducing. SLR retains LR(0) states while consulting one lookahead through FOLLOW sets. Parser-family claims concern a grammar construction; a language can have multiple equivalent grammars with different properties.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar E -> E + T | T; T -> id id id; construction SLR. How many ACTION cells contain incompatible actions?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar E -> E + T | T; T -> id id id; construction SLR. What happens on the entire input id id id + id id id?",
        "options": [
          "Accept",
          "Reject",
          "Stop on conflict"
        ],
        "answer": 0,
        "explanation": "Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar E -> E + T | T; T -> id id id, compare the actual LL(1) and SLR(1) ACTION constructions. Which statement is true?",
        "options": [
          "Only LL(1) is conflict-free",
          "Both constructions have conflicts",
          "Only SLR(1) is conflict-free",
          "Both tables are conflict-free"
        ],
        "answer": 2,
        "explanation": "Compare the generated cells rather than inferring a language classification from one grammar feature.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 517.15,
        "text": "and what about reduce entry? reduce entry will come in the follow of b only so what is follow of b follow of b is same as follow of c and follow of c is a b ab right so follow of c is ab follow of c is same as follow of b which is ab now now let's check let's check whether whether this reduce entry and and this different entry is conflicting which means this"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 27,
        "file": "027. Lecture 11c. Relation between LL(1) LR(0) and SLR(1.mp4",
        "completedAt": "{\"file\":\"027. Lecture 11c. Relation between LL(1) LR(0) and SLR(1.mp4\",\"language\":\"en\",\"probability\":0.95703125,\"processing_seconds\":43.839683055877686,\"device\":\"cuda\"}"
      }
    ],
    "start": 517.15,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Trace this example: The left-recursive expression grammar E → E + T | T is unsuitable for direct predictive recursion, yet can be handled by a suitable bottom-up construction.",
      "why": "LL predicts a production before its right side is consumed. LR recognizes a right side before reducing. SLR retains LR(0) states while consulting one lookahead through FOLLOW sets.",
      "watchFor": "Parser-family claims concern a grammar construction; a language can have multiple equivalent grammars with different properties.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 83,
    "lecture": 27,
    "title": "Compare LL, LR(0) and SLR requirements · Apply and challenge",
    "concept": "Parser-family claims concern a grammar construction; a language can have multiple equivalent grammars with different properties.",
    "teachingSteps": [
      "LL predicts a production before its right side is consumed. LR recognizes a right side before reducing. SLR retains LR(0) states while consulting one lookahead through FOLLOW sets.",
      "The left-recursive expression grammar E → E + T | T is unsuitable for direct predictive recursion, yet can be handled by a suitable bottom-up construction.",
      "Parser-family claims concern a grammar construction; a language can have multiple equivalent grammars with different properties."
    ],
    "foundation": {
      "title": "Compare LL, LR(0) and SLR requirements",
      "idea": "LL predicts a production before its right side is consumed. LR recognizes a right side before reducing. SLR retains LR(0) states while consulting one lookahead through FOLLOW sets.",
      "example": "The left-recursive expression grammar E → E + T | T is unsuitable for direct predictive recursion, yet can be handled by a suitable bottom-up construction.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "E -> E + T | T; T -> id",
      "mode": "slr",
      "view": "items",
      "input": "id + id",
      "title": "Compare LL, LR(0) and SLR requirements"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying compare ll, lr(0) and slr requirements, which warning prevents a wrong conclusion?",
        "options": [
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "Parser-family claims concern a grammar construction; a language can have multiple equivalent grammars with different properties."
        ],
        "answer": 3,
        "explanation": "LL predicts a production before its right side is consumed. LR recognizes a right side before reducing. SLR retains LR(0) states while consulting one lookahead through FOLLOW sets. Parser-family claims concern a grammar construction; a language can have multiple equivalent grammars with different properties.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar E -> E + T | T; T -> id; construction SLR. What happens on the entire input id + id + id?",
        "options": [
          "Stop on conflict",
          "Accept",
          "Reject"
        ],
        "answer": 1,
        "explanation": "Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar E -> E + T | T; T -> id id, compare the actual LL(1) and SLR(1) ACTION constructions. Which statement is true?",
        "options": [
          "Both constructions have conflicts",
          "Only SLR(1) is conflict-free",
          "Both tables are conflict-free",
          "Only LL(1) is conflict-free"
        ],
        "answer": 1,
        "explanation": "Compare the generated cells rather than inferring a language classification from one grammar feature.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar E -> E + T | T; T -> id id; construction SLR. How many ACTION cells contain incompatible actions?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 517.15,
        "text": "and what about reduce entry? reduce entry will come in the follow of b only so what is follow of b follow of b is same as follow of c and follow of c is a b ab right so follow of c is ab follow of c is same as follow of b which is ab now now let's check let's check whether whether this reduce entry and and this different entry is conflicting which means this"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 27,
        "file": "027. Lecture 11c. Relation between LL(1) LR(0) and SLR(1.mp4",
        "completedAt": "{\"file\":\"027. Lecture 11c. Relation between LL(1) LR(0) and SLR(1.mp4\",\"language\":\"en\",\"probability\":0.95703125,\"processing_seconds\":43.839683055877686,\"device\":\"cuda\"}"
      }
    ],
    "start": 517.15,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Check this boundary: Parser-family claims concern a grammar construction; a language can have multiple equivalent grammars with different properties.",
      "why": "LL predicts a production before its right side is consumed. LR recognizes a right side before reducing. SLR retains LR(0) states while consulting one lookahead through FOLLOW sets.",
      "watchFor": "Parser-family claims concern a grammar construction; a language can have multiple equivalent grammars with different properties.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 84,
    "lecture": 28,
    "title": "Check reductions with empty productions · Understand the concept",
    "concept": "An empty right-hand side completes without consuming a terminal. Its reduction depends on the current state and permitted lookahead, then follows GOTO just like a nonempty reduction.",
    "teachingSteps": [
      "An empty right-hand side completes without consuming a terminal. Its reduction depends on the current state and permitted lookahead, then follows GOTO just like a nonempty reduction.",
      "For S → A b and A → a A | ε, the parser for a b must reduce A → ε before reducing a A.",
      "Nullable does not mean skippable at every input position; an incorrect empty reduction can conceal a syntax error."
    ],
    "foundation": {
      "title": "Check reductions with empty productions",
      "idea": "An empty right-hand side completes without consuming a terminal. Its reduction depends on the current state and permitted lookahead, then follows GOTO just like a nonempty reduction.",
      "example": "For S → A b and A → a A | ε, the parser for a b must reduce A → ε before reducing a A.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> A b; A -> a A | ε",
      "mode": "slr",
      "view": "parse",
      "input": "a b",
      "title": "Check reductions with empty productions"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains check reductions with empty productions?",
        "options": [
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "An empty right-hand side completes without consuming a terminal. Its reduction depends on the current state and permitted lookahead, then follows GOTO just like a nonempty reduction."
        ],
        "answer": 3,
        "explanation": "An empty right-hand side completes without consuming a terminal. Its reduction depends on the current state and permitted lookahead, then follows GOTO just like a nonempty reduction. Nullable does not mean skippable at every input position; an incorrect empty reduction can conceal a syntax error.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> A b b b b; A -> a a a a A | ε; construction SLR. When reducing A → ε, how many symbol/state pairs are removed before following GOTO?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Pop one pair per right-hand-side symbol. An ε reduction removes zero pairs, then still follows GOTO for the left side.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> A b b b b b; A -> a a a a A | ε; construction SLR. Trace complete input b b b b b. How many terminal shifts occur before the parser stops?",
        "answer": 5,
        "tolerance": 0,
        "explanation": "Only shifts consume input; reductions change the stack without consuming the next terminal. Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> A b b b b b b; A -> a a a a A | ε; construction SLR. What happens on the entire input a a a a b b b b b b?",
        "options": [
          "Reject",
          "Stop on conflict",
          "Accept"
        ],
        "answer": 2,
        "explanation": "Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0,
        "text": "Now let's solve this question and let's ask the same question which means whether this grammar is LR0, SLR1 or LL1. Let me first check about LL1. We need to check whether the first of this and first of this are matching or not. So what will be the first of this? First of A is epsilon and first of B is also epsilon. So in that case what will be the first of t"
      },
      {
        "time": 55.85,
        "text": "So where will this go? This will go in the follow of A, this will go in the follow of D. But anyway, these two won't be conflicting with S or with each other. That is why this grammar is LL1. What about whether this grammar is LR0 or SLR1? Let me quickly check it using the LR0 automator. So let's add the augmented production, which is this. And now you have "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 28,
        "file": "028. Lecture 11d. One more Example of LR(0) SLR(1).mp4",
        "completedAt": "{\"file\":\"028. Lecture 11d. One more Example of LR(0) SLR(1).mp4\",\"language\":\"en\",\"probability\":0.982421875,\"processing_seconds\":10.9356369972229,\"device\":\"cuda\"}"
      }
    ],
    "start": 0,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Explain the rule: An empty right-hand side completes without consuming a terminal. Its reduction depends on the current state and permitted lookahead, then follows GOTO just like a nonempty reduction.",
      "why": "An empty right-hand side completes without consuming a terminal. Its reduction depends on the current state and permitted lookahead, then follows GOTO just like a nonempty reduction.",
      "watchFor": "Nullable does not mean skippable at every input position; an incorrect empty reduction can conceal a syntax error.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 85,
    "lecture": 28,
    "title": "Check reductions with empty productions · Trace and experiment",
    "concept": "For S → A b and A → a A | ε, the parser for a b must reduce A → ε before reducing a A.",
    "teachingSteps": [
      "An empty right-hand side completes without consuming a terminal. Its reduction depends on the current state and permitted lookahead, then follows GOTO just like a nonempty reduction.",
      "For S → A b and A → a A | ε, the parser for a b must reduce A → ε before reducing a A.",
      "Nullable does not mean skippable at every input position; an incorrect empty reduction can conceal a syntax error."
    ],
    "foundation": {
      "title": "Check reductions with empty productions",
      "idea": "An empty right-hand side completes without consuming a terminal. Its reduction depends on the current state and permitted lookahead, then follows GOTO just like a nonempty reduction.",
      "example": "For S → A b and A → a A | ε, the parser for a b must reduce A → ε before reducing a A.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> A b; A -> a A | ε",
      "mode": "slr",
      "view": "parse",
      "input": "a b",
      "title": "Check reductions with empty productions"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For S → A b and A → a A | ε, the parser for a b must reduce A → ε before reducing a A.",
        "options": [
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "For S → A b and A → a A | ε, the parser for a b must reduce A → ε before reducing a A.",
          "A parser conflict can safely be resolved by always taking the first listed action."
        ],
        "answer": 2,
        "explanation": "An empty right-hand side completes without consuming a terminal. Its reduction depends on the current state and permitted lookahead, then follows GOTO just like a nonempty reduction. Nullable does not mean skippable at every input position; an incorrect empty reduction can conceal a syntax error.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> A b b b b b; A -> a a A | ε; construction SLR. Trace complete input a a b b b b b. How many terminal shifts occur before the parser stops?",
        "answer": 7,
        "tolerance": 0,
        "explanation": "Only shifts consume input; reductions change the stack without consuming the next terminal. Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> A b b b b b b; A -> a a A | ε; construction SLR. What happens on the entire input a a a a b b b b b b?",
        "options": [
          "Stop on conflict",
          "Accept",
          "Reject"
        ],
        "answer": 1,
        "explanation": "Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> A b b; A -> a a a A | ε; construction SLR. When reducing S → A b b, how many symbol/state pairs are removed before following GOTO?",
        "answer": 3,
        "tolerance": 0,
        "explanation": "Pop one pair per right-hand-side symbol. An ε reduction removes zero pairs, then still follows GOTO for the left side.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0,
        "text": "Now let's solve this question and let's ask the same question which means whether this grammar is LR0, SLR1 or LL1. Let me first check about LL1. We need to check whether the first of this and first of this are matching or not. So what will be the first of this? First of A is epsilon and first of B is also epsilon. So in that case what will be the first of t"
      },
      {
        "time": 55.85,
        "text": "So where will this go? This will go in the follow of A, this will go in the follow of D. But anyway, these two won't be conflicting with S or with each other. That is why this grammar is LL1. What about whether this grammar is LR0 or SLR1? Let me quickly check it using the LR0 automator. So let's add the augmented production, which is this. And now you have "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 28,
        "file": "028. Lecture 11d. One more Example of LR(0) SLR(1).mp4",
        "completedAt": "{\"file\":\"028. Lecture 11d. One more Example of LR(0) SLR(1).mp4\",\"language\":\"en\",\"probability\":0.982421875,\"processing_seconds\":10.9356369972229,\"device\":\"cuda\"}"
      }
    ],
    "start": 0,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Trace this example: For S → A b and A → a A | ε, the parser for a b must reduce A → ε before reducing a A.",
      "why": "An empty right-hand side completes without consuming a terminal. Its reduction depends on the current state and permitted lookahead, then follows GOTO just like a nonempty reduction.",
      "watchFor": "Nullable does not mean skippable at every input position; an incorrect empty reduction can conceal a syntax error.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 86,
    "lecture": 28,
    "title": "Check reductions with empty productions · Apply and challenge",
    "concept": "Nullable does not mean skippable at every input position; an incorrect empty reduction can conceal a syntax error.",
    "teachingSteps": [
      "An empty right-hand side completes without consuming a terminal. Its reduction depends on the current state and permitted lookahead, then follows GOTO just like a nonempty reduction.",
      "For S → A b and A → a A | ε, the parser for a b must reduce A → ε before reducing a A.",
      "Nullable does not mean skippable at every input position; an incorrect empty reduction can conceal a syntax error."
    ],
    "foundation": {
      "title": "Check reductions with empty productions",
      "idea": "An empty right-hand side completes without consuming a terminal. Its reduction depends on the current state and permitted lookahead, then follows GOTO just like a nonempty reduction.",
      "example": "For S → A b and A → a A | ε, the parser for a b must reduce A → ε before reducing a A.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> A b; A -> a A | ε",
      "mode": "slr",
      "view": "parse",
      "input": "a b",
      "title": "Check reductions with empty productions"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying check reductions with empty productions, which warning prevents a wrong conclusion?",
        "options": [
          "Nullable does not mean skippable at every input position; an incorrect empty reduction can conceal a syntax error.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift."
        ],
        "answer": 0,
        "explanation": "An empty right-hand side completes without consuming a terminal. Its reduction depends on the current state and permitted lookahead, then follows GOTO just like a nonempty reduction. Nullable does not mean skippable at every input position; an incorrect empty reduction can conceal a syntax error.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> A b b b b b b; A -> a a a a A | ε; construction SLR. What happens on the entire input b b b b b b?",
        "options": [
          "Accept",
          "Reject",
          "Stop on conflict"
        ],
        "answer": 0,
        "explanation": "Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> A b b; A -> a A | ε; construction SLR. When reducing A → a A, how many symbol/state pairs are removed before following GOTO?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Pop one pair per right-hand-side symbol. An ε reduction removes zero pairs, then still follows GOTO for the left side.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> A b b b; A -> a A | ε; construction SLR. Trace complete input a a b b b. How many terminal shifts occur before the parser stops?",
        "answer": 5,
        "tolerance": 0,
        "explanation": "Only shifts consume input; reductions change the stack without consuming the next terminal. Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0,
        "text": "Now let's solve this question and let's ask the same question which means whether this grammar is LR0, SLR1 or LL1. Let me first check about LL1. We need to check whether the first of this and first of this are matching or not. So what will be the first of this? First of A is epsilon and first of B is also epsilon. So in that case what will be the first of t"
      },
      {
        "time": 55.85,
        "text": "So where will this go? This will go in the follow of A, this will go in the follow of D. But anyway, these two won't be conflicting with S or with each other. That is why this grammar is LL1. What about whether this grammar is LR0 or SLR1? Let me quickly check it using the LR0 automator. So let's add the augmented production, which is this. And now you have "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 28,
        "file": "028. Lecture 11d. One more Example of LR(0) SLR(1).mp4",
        "completedAt": "{\"file\":\"028. Lecture 11d. One more Example of LR(0) SLR(1).mp4\",\"language\":\"en\",\"probability\":0.982421875,\"processing_seconds\":10.9356369972229,\"device\":\"cuda\"}"
      }
    ],
    "start": 0,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Check this boundary: Nullable does not mean skippable at every input position; an incorrect empty reduction can conceal a syntax error.",
      "why": "An empty right-hand side completes without consuming a terminal. Its reduction depends on the current state and permitted lookahead, then follows GOTO just like a nonempty reduction.",
      "watchFor": "Nullable does not mean skippable at every input position; an incorrect empty reduction can conceal a syntax error.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 87,
    "lecture": 29,
    "title": "Find the limitation of global FOLLOW · Understand the concept",
    "concept": "SLR adds a completed A production under every token in FOLLOW(A), even when some of those tokens cannot follow this item in its actual context. This approximation can create a conflict.",
    "teachingSteps": [
      "SLR adds a completed A production under every token in FOLLOW(A), even when some of those tokens cannot follow this item in its actual context. This approximation can create a conflict.",
      "The assignment grammar S → L = R | R, L → * R | id, R → L has an SLR conflict involving =; canonical LR(1) distinguishes the contexts.",
      "An SLR conflict does not prove the grammar ambiguous. A more precise construction can succeed."
    ],
    "foundation": {
      "title": "Find the limitation of global FOLLOW",
      "idea": "SLR adds a completed A production under every token in FOLLOW(A), even when some of those tokens cannot follow this item in its actual context. This approximation can create a conflict.",
      "example": "The assignment grammar S → L = R | R, L → * R | id, R → L has an SLR conflict involving =; canonical LR(1) distinguishes the contexts.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> L = R | R; L -> * R | id; R -> L",
      "mode": "slr",
      "view": "items",
      "input": "id = id",
      "title": "Find the limitation of global FOLLOW"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains find the limitation of global follow?",
        "options": [
          "An LR reduction consumes the next input token just like a shift.",
          "SLR adds a completed A production under every token in FOLLOW(A), even when some of those tokens cannot follow this item in its actual context. This approximation can create a conflict.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous."
        ],
        "answer": 1,
        "explanation": "SLR adds a completed A production under every token in FOLLOW(A), even when some of those tokens cannot follow this item in its actual context. This approximation can create a conflict. An SLR conflict does not prove the grammar ambiguous. A more precise construction can succeed.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> L = R | R; L -> * * * R | id; R -> L; construction SLR. How many ACTION cells contain incompatible actions?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> L = R | R; L -> * * * * R | id | num; R -> L; construction SLR. Which global FOLLOW(L) set would SLR use for a completed L item?",
        "options": [
          "{$, =}",
          "{ε}",
          "{*, =, id, num}",
          "{}"
        ],
        "answer": 0,
        "explanation": "SLR consults the global FOLLOW set. Canonical LR(1) can retain a smaller context-specific item lookahead.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> L = R | R; L -> * * * * R | id; R -> L; construction SLR. The current state contains exactly [L → * * * • * R]. With next token =, which ACTION category applies?",
        "options": [
          "Reduce",
          "Accept",
          "Conflict",
          "Error",
          "Shift"
        ],
        "answer": 3,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0.27,
        "text": "Now let's talk about limitations of SLR1 which means why sometimes SLR does not work and what we can do to make use of our DFA and to parse some of the more grammars that SLR1 is not able to parse. So consider a scenario where in the stack you have something like alpha beta and on the input tape this is the remaining input that you have and on the input tape"
      },
      {
        "time": 92.79,
        "text": "Suppose if I reduce this beta to a then my stack will look like this alpha and capital A my stack will look like this and then in this case If I have a as an input then this a is maybe like this a may not be appearing just after alpha i Which means this a small a is in the follow of a but but if this a small a is not in if this a small a is not in follow of "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 29,
        "file": "029. 12a. Limitations of SLR(1) Parser.mp4",
        "completedAt": "{\"file\":\"029. 12a. Limitations of SLR(1) Parser.mp4\",\"language\":\"en\",\"probability\":0.9794921875,\"processing_seconds\":33.327463150024414,\"device\":\"cuda\"}"
      }
    ],
    "start": 0.27,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Explain the rule: SLR adds a completed A production under every token in FOLLOW(A), even when some of those tokens cannot follow this item in its actual context. This approximation can create a conflict.",
      "why": "SLR adds a completed A production under every token in FOLLOW(A), even when some of those tokens cannot follow this item in its actual context. This approximation can create a conflict.",
      "watchFor": "An SLR conflict does not prove the grammar ambiguous. A more precise construction can succeed.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 88,
    "lecture": 29,
    "title": "Find the limitation of global FOLLOW · Trace and experiment",
    "concept": "The assignment grammar S → L = R | R, L → * R | id, R → L has an SLR conflict involving =; canonical LR(1) distinguishes the contexts.",
    "teachingSteps": [
      "SLR adds a completed A production under every token in FOLLOW(A), even when some of those tokens cannot follow this item in its actual context. This approximation can create a conflict.",
      "The assignment grammar S → L = R | R, L → * R | id, R → L has an SLR conflict involving =; canonical LR(1) distinguishes the contexts.",
      "An SLR conflict does not prove the grammar ambiguous. A more precise construction can succeed."
    ],
    "foundation": {
      "title": "Find the limitation of global FOLLOW",
      "idea": "SLR adds a completed A production under every token in FOLLOW(A), even when some of those tokens cannot follow this item in its actual context. This approximation can create a conflict.",
      "example": "The assignment grammar S → L = R | R, L → * R | id, R → L has an SLR conflict involving =; canonical LR(1) distinguishes the contexts.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> L = R | R; L -> * R | id; R -> L",
      "mode": "slr",
      "view": "items",
      "input": "id = id",
      "title": "Find the limitation of global FOLLOW"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: The assignment grammar S → L = R | R, L → * R | id, R → L has an SLR conflict involving =; canonical LR(1) distinguishes the contexts.",
        "options": [
          "An LR reduction consumes the next input token just like a shift.",
          "The assignment grammar S → L = R | R, L → * R | id, R → L has an SLR conflict involving =; canonical LR(1) distinguishes the contexts.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous."
        ],
        "answer": 1,
        "explanation": "SLR adds a completed A production under every token in FOLLOW(A), even when some of those tokens cannot follow this item in its actual context. This approximation can create a conflict. An SLR conflict does not prove the grammar ambiguous. A more precise construction can succeed.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> L = R | R; L -> * * R | id | num; R -> L; construction SLR. Which global FOLLOW(R) set would SLR use for a completed R item?",
        "options": [
          "{$, =}",
          "{ε}",
          "{*, =, id, num}",
          "{}"
        ],
        "answer": 0,
        "explanation": "SLR consults the global FOLLOW set. Canonical LR(1) can retain a smaller context-specific item lookahead.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> L = R | R; L -> * * R | id; R -> L; construction SLR. The current state contains exactly [R → L •]. With next token id, which ACTION category applies?",
        "options": [
          "Accept",
          "Conflict",
          "Error",
          "Shift",
          "Reduce"
        ],
        "answer": 2,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> L = R | R; L -> * * R | id | num; R -> L; construction SLR. How many ACTION cells contain incompatible actions?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0.27,
        "text": "Now let's talk about limitations of SLR1 which means why sometimes SLR does not work and what we can do to make use of our DFA and to parse some of the more grammars that SLR1 is not able to parse. So consider a scenario where in the stack you have something like alpha beta and on the input tape this is the remaining input that you have and on the input tape"
      },
      {
        "time": 92.79,
        "text": "Suppose if I reduce this beta to a then my stack will look like this alpha and capital A my stack will look like this and then in this case If I have a as an input then this a is maybe like this a may not be appearing just after alpha i Which means this a small a is in the follow of a but but if this a small a is not in if this a small a is not in follow of "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 29,
        "file": "029. 12a. Limitations of SLR(1) Parser.mp4",
        "completedAt": "{\"file\":\"029. 12a. Limitations of SLR(1) Parser.mp4\",\"language\":\"en\",\"probability\":0.9794921875,\"processing_seconds\":33.327463150024414,\"device\":\"cuda\"}"
      }
    ],
    "start": 0.27,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Trace this example: The assignment grammar S → L = R | R, L → * R | id, R → L has an SLR conflict involving =; canonical LR(1) distinguishes the contexts.",
      "why": "SLR adds a completed A production under every token in FOLLOW(A), even when some of those tokens cannot follow this item in its actual context. This approximation can create a conflict.",
      "watchFor": "An SLR conflict does not prove the grammar ambiguous. A more precise construction can succeed.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 89,
    "lecture": 29,
    "title": "Find the limitation of global FOLLOW · Apply and challenge",
    "concept": "An SLR conflict does not prove the grammar ambiguous. A more precise construction can succeed.",
    "teachingSteps": [
      "SLR adds a completed A production under every token in FOLLOW(A), even when some of those tokens cannot follow this item in its actual context. This approximation can create a conflict.",
      "The assignment grammar S → L = R | R, L → * R | id, R → L has an SLR conflict involving =; canonical LR(1) distinguishes the contexts.",
      "An SLR conflict does not prove the grammar ambiguous. A more precise construction can succeed."
    ],
    "foundation": {
      "title": "Find the limitation of global FOLLOW",
      "idea": "SLR adds a completed A production under every token in FOLLOW(A), even when some of those tokens cannot follow this item in its actual context. This approximation can create a conflict.",
      "example": "The assignment grammar S → L = R | R, L → * R | id, R → L has an SLR conflict involving =; canonical LR(1) distinguishes the contexts.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> L = R | R; L -> * R | id; R -> L",
      "mode": "slr",
      "view": "items",
      "input": "id = id",
      "title": "Find the limitation of global FOLLOW"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying find the limitation of global follow, which warning prevents a wrong conclusion?",
        "options": [
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "An SLR conflict does not prove the grammar ambiguous. A more precise construction can succeed.",
          "A parser conflict can safely be resolved by always taking the first listed action."
        ],
        "answer": 2,
        "explanation": "SLR adds a completed A production under every token in FOLLOW(A), even when some of those tokens cannot follow this item in its actual context. This approximation can create a conflict. An SLR conflict does not prove the grammar ambiguous. A more precise construction can succeed.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> L = R | R; L -> * * * * R | id; R -> L; construction SLR. The current state contains exactly [S → L = • R; L → • * * * * R; L → • id; R → • L]. With next token =, which ACTION category applies?",
        "options": [
          "Error",
          "Shift",
          "Reduce",
          "Accept",
          "Conflict"
        ],
        "answer": 0,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> L = R | R; L -> * * * * R | id | num; R -> L; construction SLR. How many ACTION cells contain incompatible actions?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> L = R | R; L -> * * * * R | id; R -> L; construction SLR. Which global FOLLOW(S) set would SLR use for a completed S item?",
        "options": [
          "{*, =, id}",
          "{}",
          "{$}",
          "{ε}"
        ],
        "answer": 2,
        "explanation": "SLR consults the global FOLLOW set. Canonical LR(1) can retain a smaller context-specific item lookahead.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0.27,
        "text": "Now let's talk about limitations of SLR1 which means why sometimes SLR does not work and what we can do to make use of our DFA and to parse some of the more grammars that SLR1 is not able to parse. So consider a scenario where in the stack you have something like alpha beta and on the input tape this is the remaining input that you have and on the input tape"
      },
      {
        "time": 92.79,
        "text": "Suppose if I reduce this beta to a then my stack will look like this alpha and capital A my stack will look like this and then in this case If I have a as an input then this a is maybe like this a may not be appearing just after alpha i Which means this a small a is in the follow of a but but if this a small a is not in if this a small a is not in follow of "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 29,
        "file": "029. 12a. Limitations of SLR(1) Parser.mp4",
        "completedAt": "{\"file\":\"029. 12a. Limitations of SLR(1) Parser.mp4\",\"language\":\"en\",\"probability\":0.9794921875,\"processing_seconds\":33.327463150024414,\"device\":\"cuda\"}"
      }
    ],
    "start": 0.27,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Check this boundary: An SLR conflict does not prove the grammar ambiguous. A more precise construction can succeed.",
      "why": "SLR adds a completed A production under every token in FOLLOW(A), even when some of those tokens cannot follow this item in its actual context. This approximation can create a conflict.",
      "watchFor": "An SLR conflict does not prove the grammar ambiguous. A more precise construction can succeed.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 90,
    "lecture": 30,
    "title": "Attach lookahead to each LR(1) item · Understand the concept",
    "concept": "An LR(1) item [A → α • β, a] says that a may follow the completed A in that item context. Closure derives lookahead using FIRST(β a).",
    "teachingSteps": [
      "An LR(1) item [A → α • β, a] says that a may follow the completed A in that item context. Closure derives lookahead using FIRST(β a).",
      "For an item expecting B followed by a terminal, the B items receive that terminal as lookahead even if FOLLOW(B) is larger globally.",
      "The lookahead is after the completed production, not necessarily the next symbol after the dot."
    ],
    "foundation": {
      "title": "Attach lookahead to each LR(1) item",
      "idea": "An LR(1) item [A → α • β, a] says that a may follow the completed A in that item context. Closure derives lookahead using FIRST(β a).",
      "example": "For an item expecting B followed by a terminal, the B items receive that terminal as lookahead even if FOLLOW(B) is larger globally.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> L = R | R; L -> * R | id; R -> L",
      "mode": "lr1",
      "view": "items",
      "input": "id = id",
      "title": "Attach lookahead to each LR(1) item"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains attach lookahead to each lr(1) item?",
        "options": [
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "An LR(1) item [A → α • β, a] says that a may follow the completed A in that item context. Closure derives lookahead using FIRST(β a).",
          "A parser conflict can safely be resolved by always taking the first listed action."
        ],
        "answer": 2,
        "explanation": "An LR(1) item [A → α • β, a] says that a may follow the completed A in that item context. Closure derives lookahead using FIRST(β a). The lookahead is after the completed production, not necessarily the next symbol after the dot.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In canonical LR(1) closure for grammar S -> A t28 B; A -> a; B -> b | ε, start with [S → • A t28 B, $]. What lookahead set is attached to the newly introduced A → • a item(s)?",
        "options": [
          "{$, a}",
          "{b, t28, ε}",
          "{t28}",
          "{ε}"
        ],
        "answer": 2,
        "explanation": "Use FIRST of the suffix followed by the parent lookahead. Do not copy all of FOLLOW(A) or put ε into an LR lookahead.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> L = R | R; L -> * * * R | id; R -> L; construction LR1. How many distinct items are in the initial closure of the augmented start item?",
        "answer": 8,
        "tolerance": 0,
        "explanation": "Repeatedly add productions for a nonterminal after the dot, carrying contextual lookahead in LR(1). The dot does not consume input during closure.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> L = R | R; L -> * * * R | id | num; R -> L; construction LR1. In item [R → L •, $], how many grammar symbols still lie to the right of the dot?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count unrecognized right-hand-side symbols; lookahead after the comma is context rather than another right-hand-side symbol.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 154.27,
        "text": "So B is in follow of lesser than what you have in the hashtag. So B is in follow of just A not in the CA. That is where SLR is allowing but CLR is not allowing. So that is what precisely means. Here B is in follow of A but not something more than A which means CA. Now precisely means that it should exactly in the follow of CA. Now there could be some case wh"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 30,
        "file": "030. 12b. Idea behind LR(1) Parsers.mp4",
        "completedAt": "{\"file\":\"030. 12b. Idea behind LR(1) Parsers.mp4\",\"language\":\"en\",\"probability\":0.95556640625,\"processing_seconds\":12.619846105575562,\"device\":\"cuda\"}"
      }
    ],
    "start": 154.27,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Explain the rule: An LR(1) item [A → α • β, a] says that a may follow the completed A in that item context. Closure derives lookahead using FIRST(β a).",
      "why": "An LR(1) item [A → α • β, a] says that a may follow the completed A in that item context. Closure derives lookahead using FIRST(β a).",
      "watchFor": "The lookahead is after the completed production, not necessarily the next symbol after the dot.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 91,
    "lecture": 30,
    "title": "Attach lookahead to each LR(1) item · Trace and experiment",
    "concept": "For an item expecting B followed by a terminal, the B items receive that terminal as lookahead even if FOLLOW(B) is larger globally.",
    "teachingSteps": [
      "An LR(1) item [A → α • β, a] says that a may follow the completed A in that item context. Closure derives lookahead using FIRST(β a).",
      "For an item expecting B followed by a terminal, the B items receive that terminal as lookahead even if FOLLOW(B) is larger globally.",
      "The lookahead is after the completed production, not necessarily the next symbol after the dot."
    ],
    "foundation": {
      "title": "Attach lookahead to each LR(1) item",
      "idea": "An LR(1) item [A → α • β, a] says that a may follow the completed A in that item context. Closure derives lookahead using FIRST(β a).",
      "example": "For an item expecting B followed by a terminal, the B items receive that terminal as lookahead even if FOLLOW(B) is larger globally.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> L = R | R; L -> * R | id; R -> L",
      "mode": "lr1",
      "view": "items",
      "input": "id = id",
      "title": "Attach lookahead to each LR(1) item"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For an item expecting B followed by a terminal, the B items receive that terminal as lookahead even if FOLLOW(B) is larger globally.",
        "options": [
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "For an item expecting B followed by a terminal, the B items receive that terminal as lookahead even if FOLLOW(B) is larger globally.",
          "A parser conflict can safely be resolved by always taking the first listed action."
        ],
        "answer": 2,
        "explanation": "An LR(1) item [A → α • β, a] says that a may follow the completed A in that item context. Closure derives lookahead using FIRST(β a). The lookahead is after the completed production, not necessarily the next symbol after the dot.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> L = R | R; L -> * R | id; R -> L; construction LR1. How many distinct items are in the initial closure of the augmented start item?",
        "answer": 8,
        "tolerance": 0,
        "explanation": "Repeatedly add productions for a nonterminal after the dot, carrying contextual lookahead in LR(1). The dot does not consume input during closure.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> L = R | R; L -> * R | id | num; R -> L; construction LR1. In item [L → * • R, $], how many grammar symbols still lie to the right of the dot?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Count unrecognized right-hand-side symbols; lookahead after the comma is context rather than another right-hand-side symbol.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In canonical LR(1) closure for grammar S -> A B; A -> a; B -> b | ε, start with [S → • A B, $]. What lookahead set is attached to the newly introduced A → • a item(s)?",
        "options": [
          "{$, a}",
          "{b, t10, ε}",
          "{$, b}",
          "{ε}"
        ],
        "answer": 2,
        "explanation": "Use FIRST of the suffix followed by the parent lookahead. Do not copy all of FOLLOW(A) or put ε into an LR lookahead.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 154.27,
        "text": "So B is in follow of lesser than what you have in the hashtag. So B is in follow of just A not in the CA. That is where SLR is allowing but CLR is not allowing. So that is what precisely means. Here B is in follow of A but not something more than A which means CA. Now precisely means that it should exactly in the follow of CA. Now there could be some case wh"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 30,
        "file": "030. 12b. Idea behind LR(1) Parsers.mp4",
        "completedAt": "{\"file\":\"030. 12b. Idea behind LR(1) Parsers.mp4\",\"language\":\"en\",\"probability\":0.95556640625,\"processing_seconds\":12.619846105575562,\"device\":\"cuda\"}"
      }
    ],
    "start": 154.27,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Trace this example: For an item expecting B followed by a terminal, the B items receive that terminal as lookahead even if FOLLOW(B) is larger globally.",
      "why": "An LR(1) item [A → α • β, a] says that a may follow the completed A in that item context. Closure derives lookahead using FIRST(β a).",
      "watchFor": "The lookahead is after the completed production, not necessarily the next symbol after the dot.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 92,
    "lecture": 30,
    "title": "Attach lookahead to each LR(1) item · Apply and challenge",
    "concept": "The lookahead is after the completed production, not necessarily the next symbol after the dot.",
    "teachingSteps": [
      "An LR(1) item [A → α • β, a] says that a may follow the completed A in that item context. Closure derives lookahead using FIRST(β a).",
      "For an item expecting B followed by a terminal, the B items receive that terminal as lookahead even if FOLLOW(B) is larger globally.",
      "The lookahead is after the completed production, not necessarily the next symbol after the dot."
    ],
    "foundation": {
      "title": "Attach lookahead to each LR(1) item",
      "idea": "An LR(1) item [A → α • β, a] says that a may follow the completed A in that item context. Closure derives lookahead using FIRST(β a).",
      "example": "For an item expecting B followed by a terminal, the B items receive that terminal as lookahead even if FOLLOW(B) is larger globally.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> L = R | R; L -> * R | id; R -> L",
      "mode": "lr1",
      "view": "items",
      "input": "id = id",
      "title": "Attach lookahead to each LR(1) item"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying attach lookahead to each lr(1) item, which warning prevents a wrong conclusion?",
        "options": [
          "An LR reduction consumes the next input token just like a shift.",
          "The lookahead is after the completed production, not necessarily the next symbol after the dot.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous."
        ],
        "answer": 1,
        "explanation": "An LR(1) item [A → α • β, a] says that a may follow the completed A in that item context. Closure derives lookahead using FIRST(β a). The lookahead is after the completed production, not necessarily the next symbol after the dot.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> L = R | R; L -> * * * R | id | num; R -> L; construction LR1. In item [L → * * • * R, $], how many grammar symbols still lie to the right of the dot?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count unrecognized right-hand-side symbols; lookahead after the comma is context rather than another right-hand-side symbol.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In canonical LR(1) closure for grammar S -> A t13 B; A -> a; B -> b | ε, start with [S → • A t13 B, $]. What lookahead set is attached to the newly introduced A → • a item(s)?",
        "options": [
          "{$, a}",
          "{b, t13, ε}",
          "{t13}",
          "{ε}"
        ],
        "answer": 2,
        "explanation": "Use FIRST of the suffix followed by the parent lookahead. Do not copy all of FOLLOW(A) or put ε into an LR lookahead.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> L = R | R; L -> * * * * R | id | num; R -> L; construction LR1. How many distinct items are in the initial closure of the augmented start item?",
        "answer": 10,
        "tolerance": 0,
        "explanation": "Repeatedly add productions for a nonterminal after the dot, carrying contextual lookahead in LR(1). The dot does not consume input during closure.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 154.27,
        "text": "So B is in follow of lesser than what you have in the hashtag. So B is in follow of just A not in the CA. That is where SLR is allowing but CLR is not allowing. So that is what precisely means. Here B is in follow of A but not something more than A which means CA. Now precisely means that it should exactly in the follow of CA. Now there could be some case wh"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 30,
        "file": "030. 12b. Idea behind LR(1) Parsers.mp4",
        "completedAt": "{\"file\":\"030. 12b. Idea behind LR(1) Parsers.mp4\",\"language\":\"en\",\"probability\":0.95556640625,\"processing_seconds\":12.619846105575562,\"device\":\"cuda\"}"
      }
    ],
    "start": 154.27,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Check this boundary: The lookahead is after the completed production, not necessarily the next symbol after the dot.",
      "why": "An LR(1) item [A → α • β, a] says that a may follow the completed A in that item context. Closure derives lookahead using FIRST(β a).",
      "watchFor": "The lookahead is after the completed production, not necessarily the next symbol after the dot.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 93,
    "lecture": 31,
    "title": "Parse with canonical LR(1) context · Understand the concept",
    "concept": "Canonical LR(1) preserves item-specific lookahead through closure and transitions. A completed item reduces only under its attached lookahead, retaining distinctions that SLR loses.",
    "teachingSteps": [
      "Canonical LR(1) preserves item-specific lookahead through closure and transitions. A completed item reduces only under its attached lookahead, retaining distinctions that SLR loses.",
      "The assignment grammar can shift = after recognizing an L in one context and reduce R → L in another without the SLR conflict.",
      "More states are not automatically errors; they can encode genuinely different contexts."
    ],
    "foundation": {
      "title": "Parse with canonical LR(1) context",
      "idea": "Canonical LR(1) preserves item-specific lookahead through closure and transitions. A completed item reduces only under its attached lookahead, retaining distinctions that SLR loses.",
      "example": "The assignment grammar can shift = after recognizing an L in one context and reduce R → L in another without the SLR conflict.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> L = R | R; L -> * R | id; R -> L",
      "mode": "lr1",
      "view": "parse",
      "input": "id = id",
      "title": "Parse with canonical LR(1) context"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains parse with canonical lr(1) context?",
        "options": [
          "Canonical LR(1) preserves item-specific lookahead through closure and transitions. A completed item reduces only under its attached lookahead, retaining distinctions that SLR loses.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift."
        ],
        "answer": 0,
        "explanation": "Canonical LR(1) preserves item-specific lookahead through closure and transitions. A completed item reduces only under its attached lookahead, retaining distinctions that SLR loses. More states are not automatically errors; they can encode genuinely different contexts.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> L = R | R; L -> * * R | id; R -> L; construction LR1. Trace complete input * * id = id. How many terminal shifts occur before the parser stops?",
        "answer": 5,
        "tolerance": 0,
        "explanation": "Only shifts consume input; reductions change the stack without consuming the next terminal. Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> L = R | R; L -> * * R | id | num; R -> L; construction LR1. The current state contains exactly [R → L •, =; R → L •, $]. With next token $, which ACTION category applies?",
        "options": [
          "Reduce",
          "Shift",
          "Accept",
          "Error",
          "Conflict"
        ],
        "answer": 0,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> L = R | R; L -> * * * R | id; R -> L; construction LR1. What happens on the entire input * * * id = id?",
        "options": [
          "Reject",
          "Stop on conflict",
          "Accept"
        ],
        "answer": 2,
        "explanation": "Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 29.82,
        "text": "I will be reducing this alpha beta to x only when the next input symbol is a but yet I am not ready to reduce once I see beta and then I need to see a also if there is the next symbol is a then I will reduce this alpha beta to x that is what this this item means right before building the parsing table of lr1 parser we need to understand the closure of lr1 it"
      },
      {
        "time": 962.86,
        "text": "So these are the reduce entries that we have for this LR1 parsing. So this is our LR1 parser table, LR1 parsing table. Very easy. How to construct it? You just need to put the reduce entries in front of the look head. That is all. Earlier we were putting in front of the follow symbol. But now this follow symbol is basically like super set of the look head."
      }
    ],
    "sourceReferences": [
      {
        "lecture": 31,
        "file": "031. 12c. Example on LR(1) Parsing.mp4",
        "completedAt": "{\"file\":\"031. 12c. Example on LR(1) Parsing.mp4\",\"language\":\"en\",\"probability\":0.88818359375,\"processing_seconds\":38.94992542266846,\"device\":\"cuda\"}"
      }
    ],
    "start": 29.82,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Explain the rule: Canonical LR(1) preserves item-specific lookahead through closure and transitions. A completed item reduces only under its attached lookahead, retaining distinctions that SLR loses.",
      "why": "Canonical LR(1) preserves item-specific lookahead through closure and transitions. A completed item reduces only under its attached lookahead, retaining distinctions that SLR loses.",
      "watchFor": "More states are not automatically errors; they can encode genuinely different contexts.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 94,
    "lecture": 31,
    "title": "Parse with canonical LR(1) context · Trace and experiment",
    "concept": "The assignment grammar can shift = after recognizing an L in one context and reduce R → L in another without the SLR conflict.",
    "teachingSteps": [
      "Canonical LR(1) preserves item-specific lookahead through closure and transitions. A completed item reduces only under its attached lookahead, retaining distinctions that SLR loses.",
      "The assignment grammar can shift = after recognizing an L in one context and reduce R → L in another without the SLR conflict.",
      "More states are not automatically errors; they can encode genuinely different contexts."
    ],
    "foundation": {
      "title": "Parse with canonical LR(1) context",
      "idea": "Canonical LR(1) preserves item-specific lookahead through closure and transitions. A completed item reduces only under its attached lookahead, retaining distinctions that SLR loses.",
      "example": "The assignment grammar can shift = after recognizing an L in one context and reduce R → L in another without the SLR conflict.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> L = R | R; L -> * R | id; R -> L",
      "mode": "lr1",
      "view": "parse",
      "input": "id = id",
      "title": "Parse with canonical LR(1) context"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: The assignment grammar can shift = after recognizing an L in one context and reduce R → L in another without the SLR conflict.",
        "options": [
          "The assignment grammar can shift = after recognizing an L in one context and reduce R → L in another without the SLR conflict.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift."
        ],
        "answer": 0,
        "explanation": "Canonical LR(1) preserves item-specific lookahead through closure and transitions. A completed item reduces only under its attached lookahead, retaining distinctions that SLR loses. More states are not automatically errors; they can encode genuinely different contexts.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> L = R | R; L -> * * * * R | id | num; R -> L; construction LR1. The current state contains exactly [L → • * * * * R, =; L → • * * * * R, $; L → * * * * • R, =; L → * * * * • R, $; L → • id, =; L → • id, $; L → • num, =; L → • num, $; R → • L, =; R → • L, $]. With next token $, which ACTION category applies?",
        "options": [
          "Error",
          "Shift",
          "Reduce",
          "Accept",
          "Conflict"
        ],
        "answer": 0,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> L = R | R; L -> * R | id; R -> L; construction LR1. What happens on the entire input * id = id?",
        "options": [
          "Stop on conflict",
          "Accept",
          "Reject"
        ],
        "answer": 1,
        "explanation": "Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> L = R | R; L -> * R | id | num; R -> L; construction LR1. Trace complete input * id = id. How many terminal shifts occur before the parser stops?",
        "answer": 4,
        "tolerance": 0,
        "explanation": "Only shifts consume input; reductions change the stack without consuming the next terminal. Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 29.82,
        "text": "I will be reducing this alpha beta to x only when the next input symbol is a but yet I am not ready to reduce once I see beta and then I need to see a also if there is the next symbol is a then I will reduce this alpha beta to x that is what this this item means right before building the parsing table of lr1 parser we need to understand the closure of lr1 it"
      },
      {
        "time": 962.86,
        "text": "So these are the reduce entries that we have for this LR1 parsing. So this is our LR1 parser table, LR1 parsing table. Very easy. How to construct it? You just need to put the reduce entries in front of the look head. That is all. Earlier we were putting in front of the follow symbol. But now this follow symbol is basically like super set of the look head."
      }
    ],
    "sourceReferences": [
      {
        "lecture": 31,
        "file": "031. 12c. Example on LR(1) Parsing.mp4",
        "completedAt": "{\"file\":\"031. 12c. Example on LR(1) Parsing.mp4\",\"language\":\"en\",\"probability\":0.88818359375,\"processing_seconds\":38.94992542266846,\"device\":\"cuda\"}"
      }
    ],
    "start": 29.82,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Trace this example: The assignment grammar can shift = after recognizing an L in one context and reduce R → L in another without the SLR conflict.",
      "why": "Canonical LR(1) preserves item-specific lookahead through closure and transitions. A completed item reduces only under its attached lookahead, retaining distinctions that SLR loses.",
      "watchFor": "More states are not automatically errors; they can encode genuinely different contexts.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 95,
    "lecture": 31,
    "title": "Parse with canonical LR(1) context · Apply and challenge",
    "concept": "More states are not automatically errors; they can encode genuinely different contexts.",
    "teachingSteps": [
      "Canonical LR(1) preserves item-specific lookahead through closure and transitions. A completed item reduces only under its attached lookahead, retaining distinctions that SLR loses.",
      "The assignment grammar can shift = after recognizing an L in one context and reduce R → L in another without the SLR conflict.",
      "More states are not automatically errors; they can encode genuinely different contexts."
    ],
    "foundation": {
      "title": "Parse with canonical LR(1) context",
      "idea": "Canonical LR(1) preserves item-specific lookahead through closure and transitions. A completed item reduces only under its attached lookahead, retaining distinctions that SLR loses.",
      "example": "The assignment grammar can shift = after recognizing an L in one context and reduce R → L in another without the SLR conflict.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> L = R | R; L -> * R | id; R -> L",
      "mode": "lr1",
      "view": "parse",
      "input": "id = id",
      "title": "Parse with canonical LR(1) context"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying parse with canonical lr(1) context, which warning prevents a wrong conclusion?",
        "options": [
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "More states are not automatically errors; they can encode genuinely different contexts."
        ],
        "answer": 3,
        "explanation": "Canonical LR(1) preserves item-specific lookahead through closure and transitions. A completed item reduces only under its attached lookahead, retaining distinctions that SLR loses. More states are not automatically errors; they can encode genuinely different contexts.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> L = R | R; L -> * * * R | id | num; R -> L; construction LR1. What happens on the entire input * * * id = id?",
        "options": [
          "Accept",
          "Reject",
          "Stop on conflict"
        ],
        "answer": 0,
        "explanation": "Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> L = R | R; L -> * * * R | id | num; R -> L; construction LR1. Trace complete input * * * id = id. How many terminal shifts occur before the parser stops?",
        "answer": 6,
        "tolerance": 0,
        "explanation": "Only shifts consume input; reductions change the stack without consuming the next terminal. Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> L = R | R; L -> * * * R | id; R -> L; construction LR1. The current state contains exactly [L → * • * * R, =; L → * • * * R, $]. With next token =, which ACTION category applies?",
        "options": [
          "Accept",
          "Conflict",
          "Error",
          "Shift",
          "Reduce"
        ],
        "answer": 2,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 29.82,
        "text": "I will be reducing this alpha beta to x only when the next input symbol is a but yet I am not ready to reduce once I see beta and then I need to see a also if there is the next symbol is a then I will reduce this alpha beta to x that is what this this item means right before building the parsing table of lr1 parser we need to understand the closure of lr1 it"
      },
      {
        "time": 962.86,
        "text": "So these are the reduce entries that we have for this LR1 parsing. So this is our LR1 parser table, LR1 parsing table. Very easy. How to construct it? You just need to put the reduce entries in front of the look head. That is all. Earlier we were putting in front of the follow symbol. But now this follow symbol is basically like super set of the look head."
      }
    ],
    "sourceReferences": [
      {
        "lecture": 31,
        "file": "031. 12c. Example on LR(1) Parsing.mp4",
        "completedAt": "{\"file\":\"031. 12c. Example on LR(1) Parsing.mp4\",\"language\":\"en\",\"probability\":0.88818359375,\"processing_seconds\":38.94992542266846,\"device\":\"cuda\"}"
      }
    ],
    "start": 29.82,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Check this boundary: More states are not automatically errors; they can encode genuinely different contexts.",
      "why": "Canonical LR(1) preserves item-specific lookahead through closure and transitions. A completed item reduces only under its attached lookahead, retaining distinctions that SLR loses.",
      "watchFor": "More states are not automatically errors; they can encode genuinely different contexts.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 96,
    "lecture": 32,
    "title": "Merge LR(1) states into LALR cores · Understand the concept",
    "concept": "LALR merges canonical LR(1) states having the identical LR(0) item core, unioning the lookaheads for corresponding items. This saves states but may create new reduce/reduce conflicts.",
    "teachingSteps": [
      "LALR merges canonical LR(1) states having the identical LR(0) item core, unioning the lookaheads for corresponding items. This saves states but may create new reduce/reduce conflicts.",
      "A merge must match the full set of production-and-dot pairs, not just a shared completed production or a similar state name.",
      "Merging lookaheads preserves no blanket guarantee that every LR(1) grammar remains conflict-free."
    ],
    "foundation": {
      "title": "Merge LR(1) states into LALR cores",
      "idea": "LALR merges canonical LR(1) states having the identical LR(0) item core, unioning the lookaheads for corresponding items. This saves states but may create new reduce/reduce conflicts.",
      "example": "A merge must match the full set of production-and-dot pairs, not just a shared completed production or a similar state name.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> a A d | b A e | a B e | b B d; A -> c; B -> c",
      "mode": "lalr",
      "view": "items",
      "input": "a c d",
      "title": "Merge LR(1) states into LALR cores"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains merge lr(1) states into lalr cores?",
        "options": [
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "LALR merges canonical LR(1) states having the identical LR(0) item core, unioning the lookaheads for corresponding items. This saves states but may create new reduce/reduce conflicts."
        ],
        "answer": 3,
        "explanation": "LALR merges canonical LR(1) states having the identical LR(0) item core, unioning the lookaheads for corresponding items. This saves states but may create new reduce/reduce conflicts. Merging lookaheads preserves no blanket guarantee that every LR(1) grammar remains conflict-free.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> a A d d d | b A e e e e e | a B e e e e e | b B d d d; A -> c c; B -> c c, canonical LR(1) has 28 states. How many states does equal-core LALR merging save?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Group states by the entire production-and-dot core; combine corresponding lookaheads, then check conflicts separately.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> a A d d d d | b A e e e e e | a B e e e e e | b B d d d d; A -> c c; B -> c c; construction LALR. How many ACTION cells contain incompatible actions?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> a A d d d d d | b A e e e e e | a B e e e e e | b B d d d d d; A -> c c; B -> c c; construction LALR. The current state contains exactly [S → b B d d • d d d, $]. With next token $, which ACTION category applies?",
        "options": [
          "Accept",
          "Conflict",
          "Error",
          "Shift",
          "Reduce"
        ],
        "answer": 2,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 313.85,
        "text": "If small becomes, it will shift. That is why there is no conflict here. That is why this grammar is LR1 grammar. You can make the parsing table. Let me number these states. This is 0, this is 1, this is 2, this is 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. So, there will be 12 states. So, let me tell you that there will be 12 rows 1, 0, 1, 2, 0, 1, 2, 3."
      },
      {
        "time": 418.41,
        "text": "So I'm I'm going to see the dollar which means I'm going to accept the system now two on a small a going to seven two on a small a going to seven that is all and there will be reduced entry that I will write it later three on a small a going to five capital A going to six small a going to five capital A going to six so these are no shift entries right these "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 32,
        "file": "032. 12d. -Example on LR(1) and LALR(1).mp4",
        "completedAt": "{\"file\":\"032. 12d. -Example on LR(1) and LALR(1).mp4\",\"language\":\"en\",\"probability\":0.98095703125,\"processing_seconds\":26.267808198928833,\"device\":\"cuda\"}"
      }
    ],
    "start": 313.85,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Explain the rule: LALR merges canonical LR(1) states having the identical LR(0) item core, unioning the lookaheads for corresponding items. This saves states but may create new reduce/reduce conflicts.",
      "why": "LALR merges canonical LR(1) states having the identical LR(0) item core, unioning the lookaheads for corresponding items. This saves states but may create new reduce/reduce conflicts.",
      "watchFor": "Merging lookaheads preserves no blanket guarantee that every LR(1) grammar remains conflict-free.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 97,
    "lecture": 32,
    "title": "Merge LR(1) states into LALR cores · Trace and experiment",
    "concept": "A merge must match the full set of production-and-dot pairs, not just a shared completed production or a similar state name.",
    "teachingSteps": [
      "LALR merges canonical LR(1) states having the identical LR(0) item core, unioning the lookaheads for corresponding items. This saves states but may create new reduce/reduce conflicts.",
      "A merge must match the full set of production-and-dot pairs, not just a shared completed production or a similar state name.",
      "Merging lookaheads preserves no blanket guarantee that every LR(1) grammar remains conflict-free."
    ],
    "foundation": {
      "title": "Merge LR(1) states into LALR cores",
      "idea": "LALR merges canonical LR(1) states having the identical LR(0) item core, unioning the lookaheads for corresponding items. This saves states but may create new reduce/reduce conflicts.",
      "example": "A merge must match the full set of production-and-dot pairs, not just a shared completed production or a similar state name.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> a A d | b A e | a B e | b B d; A -> c; B -> c",
      "mode": "lalr",
      "view": "items",
      "input": "a c d",
      "title": "Merge LR(1) states into LALR cores"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: A merge must match the full set of production-and-dot pairs, not just a shared completed production or a similar state name.",
        "options": [
          "An LR reduction consumes the next input token just like a shift.",
          "A merge must match the full set of production-and-dot pairs, not just a shared completed production or a similar state name.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous."
        ],
        "answer": 1,
        "explanation": "LALR merges canonical LR(1) states having the identical LR(0) item core, unioning the lookaheads for corresponding items. This saves states but may create new reduce/reduce conflicts. Merging lookaheads preserves no blanket guarantee that every LR(1) grammar remains conflict-free.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> a A d d d d d d d | b A e | a B e | b B d d d d d d d; A -> c c c; B -> c c c; construction LALR. How many ACTION cells contain incompatible actions?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> a A d | b A e e | a B e e | b B d; A -> c c c; B -> c c c; construction LALR. The current state contains exactly [S → b B • d, $]. With next token e, which ACTION category applies?",
        "options": [
          "Conflict",
          "Error",
          "Shift",
          "Reduce",
          "Accept"
        ],
        "answer": 1,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> a A d d | b A e e | a B e e | b B d d; A -> c c c; B -> c c c, canonical LR(1) has 22 states. How many states does equal-core LALR merging save?",
        "answer": 3,
        "tolerance": 0,
        "explanation": "Group states by the entire production-and-dot core; combine corresponding lookaheads, then check conflicts separately.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 313.85,
        "text": "If small becomes, it will shift. That is why there is no conflict here. That is why this grammar is LR1 grammar. You can make the parsing table. Let me number these states. This is 0, this is 1, this is 2, this is 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. So, there will be 12 states. So, let me tell you that there will be 12 rows 1, 0, 1, 2, 0, 1, 2, 3."
      },
      {
        "time": 418.41,
        "text": "So I'm I'm going to see the dollar which means I'm going to accept the system now two on a small a going to seven two on a small a going to seven that is all and there will be reduced entry that I will write it later three on a small a going to five capital A going to six small a going to five capital A going to six so these are no shift entries right these "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 32,
        "file": "032. 12d. -Example on LR(1) and LALR(1).mp4",
        "completedAt": "{\"file\":\"032. 12d. -Example on LR(1) and LALR(1).mp4\",\"language\":\"en\",\"probability\":0.98095703125,\"processing_seconds\":26.267808198928833,\"device\":\"cuda\"}"
      }
    ],
    "start": 313.85,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Trace this example: A merge must match the full set of production-and-dot pairs, not just a shared completed production or a similar state name.",
      "why": "LALR merges canonical LR(1) states having the identical LR(0) item core, unioning the lookaheads for corresponding items. This saves states but may create new reduce/reduce conflicts.",
      "watchFor": "Merging lookaheads preserves no blanket guarantee that every LR(1) grammar remains conflict-free.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 98,
    "lecture": 32,
    "title": "Merge LR(1) states into LALR cores · Apply and challenge",
    "concept": "Merging lookaheads preserves no blanket guarantee that every LR(1) grammar remains conflict-free.",
    "teachingSteps": [
      "LALR merges canonical LR(1) states having the identical LR(0) item core, unioning the lookaheads for corresponding items. This saves states but may create new reduce/reduce conflicts.",
      "A merge must match the full set of production-and-dot pairs, not just a shared completed production or a similar state name.",
      "Merging lookaheads preserves no blanket guarantee that every LR(1) grammar remains conflict-free."
    ],
    "foundation": {
      "title": "Merge LR(1) states into LALR cores",
      "idea": "LALR merges canonical LR(1) states having the identical LR(0) item core, unioning the lookaheads for corresponding items. This saves states but may create new reduce/reduce conflicts.",
      "example": "A merge must match the full set of production-and-dot pairs, not just a shared completed production or a similar state name.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> a A d | b A e | a B e | b B d; A -> c; B -> c",
      "mode": "lalr",
      "view": "items",
      "input": "a c d",
      "title": "Merge LR(1) states into LALR cores"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying merge lr(1) states into lalr cores, which warning prevents a wrong conclusion?",
        "options": [
          "Merging lookaheads preserves no blanket guarantee that every LR(1) grammar remains conflict-free.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift."
        ],
        "answer": 0,
        "explanation": "LALR merges canonical LR(1) states having the identical LR(0) item core, unioning the lookaheads for corresponding items. This saves states but may create new reduce/reduce conflicts. Merging lookaheads preserves no blanket guarantee that every LR(1) grammar remains conflict-free.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> a A d d d d | b A e e e | a B e e e | b B d d d d; A -> c c c; B -> c c c; construction LALR. The current state contains exactly [S → a A d • d d d, $]. With next token d, which ACTION category applies?",
        "options": [
          "Reduce",
          "Accept",
          "Error",
          "Conflict",
          "Shift"
        ],
        "answer": 4,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> a A d d d d d | b A e e e | a B e e e | b B d d d d d; A -> c c c; B -> c c c, canonical LR(1) has 30 states. How many states does equal-core LALR merging save?",
        "answer": 3,
        "tolerance": 0,
        "explanation": "Group states by the entire production-and-dot core; combine corresponding lookaheads, then check conflicts separately.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> a A d d d d d d | b A e e e | a B e e e | b B d d d d d d; A -> c c c; B -> c c c; construction LALR. How many ACTION cells contain incompatible actions?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 313.85,
        "text": "If small becomes, it will shift. That is why there is no conflict here. That is why this grammar is LR1 grammar. You can make the parsing table. Let me number these states. This is 0, this is 1, this is 2, this is 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. So, there will be 12 states. So, let me tell you that there will be 12 rows 1, 0, 1, 2, 0, 1, 2, 3."
      },
      {
        "time": 418.41,
        "text": "So I'm I'm going to see the dollar which means I'm going to accept the system now two on a small a going to seven two on a small a going to seven that is all and there will be reduced entry that I will write it later three on a small a going to five capital A going to six small a going to five capital A going to six so these are no shift entries right these "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 32,
        "file": "032. 12d. -Example on LR(1) and LALR(1).mp4",
        "completedAt": "{\"file\":\"032. 12d. -Example on LR(1) and LALR(1).mp4\",\"language\":\"en\",\"probability\":0.98095703125,\"processing_seconds\":26.267808198928833,\"device\":\"cuda\"}"
      }
    ],
    "start": 313.85,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Check this boundary: Merging lookaheads preserves no blanket guarantee that every LR(1) grammar remains conflict-free.",
      "why": "LALR merges canonical LR(1) states having the identical LR(0) item core, unioning the lookaheads for corresponding items. This saves states but may create new reduce/reduce conflicts.",
      "watchFor": "Merging lookaheads preserves no blanket guarantee that every LR(1) grammar remains conflict-free.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 99,
    "lecture": 33,
    "title": "Trace a conflict-free LALR parse · Understand the concept",
    "concept": "When equal-core merging leaves every ACTION cell unambiguous, the resulting LALR parser can shift and reduce using its compact state table.",
    "teachingSteps": [
      "When equal-core merging leaves every ACTION cell unambiguous, the resulting LALR parser can shift and reduce using its compact state table.",
      "For S → C C and C → c C | d, compare canonical and merged state counts, then parse c d d using the merged table.",
      "Never hide a conflict by taking the first action; the parse must stop when a unique action is unavailable."
    ],
    "foundation": {
      "title": "Trace a conflict-free LALR parse",
      "idea": "When equal-core merging leaves every ACTION cell unambiguous, the resulting LALR parser can shift and reduce using its compact state table.",
      "example": "For S → C C and C → c C | d, compare canonical and merged state counts, then parse c d d using the merged table.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> C C; C -> c C | d",
      "mode": "lalr",
      "view": "parse",
      "input": "c d d",
      "title": "Trace a conflict-free LALR parse"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains trace a conflict-free lalr parse?",
        "options": [
          "An LR reduction consumes the next input token just like a shift.",
          "When equal-core merging leaves every ACTION cell unambiguous, the resulting LALR parser can shift and reduce using its compact state table.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous."
        ],
        "answer": 1,
        "explanation": "When equal-core merging leaves every ACTION cell unambiguous, the resulting LALR parser can shift and reduce using its compact state table. Never hide a conflict by taking the first action; the parse must stop when a unique action is unavailable.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C; C -> c C | d d; construction LALR. Trace complete input d d d d d d d d. How many terminal shifts occur before the parser stops?",
        "answer": 8,
        "tolerance": 0,
        "explanation": "Only shifts consume input; reductions change the stack without consuming the next terminal. Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C C; C -> c C | d d; construction LALR. When reducing C → d d, how many symbol/state pairs are removed before following GOTO?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Pop one pair per right-hand-side symbol. An ε reduction removes zero pairs, then still follows GOTO for the left side.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C C C C C; C -> c C | d d; construction LALR. What happens on the entire input d d d d d d d d d d d d?",
        "options": [
          "Reject",
          "Stop on conflict",
          "Accept"
        ],
        "answer": 2,
        "explanation": "Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 3.92,
        "text": "Let's try to design LR1 parser and LLR parser for this grammar LLR parser So let me add the augmented production which is this and then we need to write all protections of S because of this dot S Now we need to add the look head based on this S, right? dollar and dollar Since we need to write all protections of L because of this dot L. So let me add them and"
      },
      {
        "time": 488.97,
        "text": "Now tell me is this grammar LR1 or not first mark all the states which are having the reduced entries So this is having reduced entry. I'm not marking it like I can mark it but I'm not marking it because this is having just one reduced entry So there there is no possibility of conflict. So let me write all let me mark all the reduced entries which which may "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 33,
        "file": "033. Lecture 13 a-Example on LR(1) and LALR(1).mp4",
        "completedAt": "{\"file\":\"033. Lecture 13 a-Example on LR(1) and LALR(1).mp4\",\"language\":\"en\",\"probability\":0.9921875,\"processing_seconds\":34.5615131855011,\"device\":\"cuda\"}"
      }
    ],
    "start": 3.92,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Explain the rule: When equal-core merging leaves every ACTION cell unambiguous, the resulting LALR parser can shift and reduce using its compact state table.",
      "why": "When equal-core merging leaves every ACTION cell unambiguous, the resulting LALR parser can shift and reduce using its compact state table.",
      "watchFor": "Never hide a conflict by taking the first action; the parse must stop when a unique action is unavailable.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 100,
    "lecture": 33,
    "title": "Trace a conflict-free LALR parse · Trace and experiment",
    "concept": "For S → C C and C → c C | d, compare canonical and merged state counts, then parse c d d using the merged table.",
    "teachingSteps": [
      "When equal-core merging leaves every ACTION cell unambiguous, the resulting LALR parser can shift and reduce using its compact state table.",
      "For S → C C and C → c C | d, compare canonical and merged state counts, then parse c d d using the merged table.",
      "Never hide a conflict by taking the first action; the parse must stop when a unique action is unavailable."
    ],
    "foundation": {
      "title": "Trace a conflict-free LALR parse",
      "idea": "When equal-core merging leaves every ACTION cell unambiguous, the resulting LALR parser can shift and reduce using its compact state table.",
      "example": "For S → C C and C → c C | d, compare canonical and merged state counts, then parse c d d using the merged table.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> C C; C -> c C | d",
      "mode": "lalr",
      "view": "parse",
      "input": "c d d",
      "title": "Trace a conflict-free LALR parse"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For S → C C and C → c C | d, compare canonical and merged state counts, then parse c d d using the merged table.",
        "options": [
          "For S → C C and C → c C | d, compare canonical and merged state counts, then parse c d d using the merged table.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift."
        ],
        "answer": 0,
        "explanation": "When equal-core merging leaves every ACTION cell unambiguous, the resulting LALR parser can shift and reduce using its compact state table. Never hide a conflict by taking the first action; the parse must stop when a unique action is unavailable.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C C; C -> c c c C | d d; construction LALR. When reducing S → C C C C C, how many symbol/state pairs are removed before following GOTO?",
        "answer": 5,
        "tolerance": 0,
        "explanation": "Pop one pair per right-hand-side symbol. An ε reduction removes zero pairs, then still follows GOTO for the left side.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C C C C C; C -> c c c C | d d; construction LALR. What happens on the entire input d d d d d d d d d d d d?",
        "options": [
          "Reject",
          "Stop on conflict",
          "Accept"
        ],
        "answer": 2,
        "explanation": "Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C; C -> c c c c C | d d; construction LALR. Trace complete input c c c c d d. How many terminal shifts occur before the parser stops?",
        "answer": 6,
        "tolerance": 0,
        "explanation": "Only shifts consume input; reductions change the stack without consuming the next terminal. Reject: no ACTION entry.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 3.92,
        "text": "Let's try to design LR1 parser and LLR parser for this grammar LLR parser So let me add the augmented production which is this and then we need to write all protections of S because of this dot S Now we need to add the look head based on this S, right? dollar and dollar Since we need to write all protections of L because of this dot L. So let me add them and"
      },
      {
        "time": 488.97,
        "text": "Now tell me is this grammar LR1 or not first mark all the states which are having the reduced entries So this is having reduced entry. I'm not marking it like I can mark it but I'm not marking it because this is having just one reduced entry So there there is no possibility of conflict. So let me write all let me mark all the reduced entries which which may "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 33,
        "file": "033. Lecture 13 a-Example on LR(1) and LALR(1).mp4",
        "completedAt": "{\"file\":\"033. Lecture 13 a-Example on LR(1) and LALR(1).mp4\",\"language\":\"en\",\"probability\":0.9921875,\"processing_seconds\":34.5615131855011,\"device\":\"cuda\"}"
      }
    ],
    "start": 3.92,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Trace this example: For S → C C and C → c C | d, compare canonical and merged state counts, then parse c d d using the merged table.",
      "why": "When equal-core merging leaves every ACTION cell unambiguous, the resulting LALR parser can shift and reduce using its compact state table.",
      "watchFor": "Never hide a conflict by taking the first action; the parse must stop when a unique action is unavailable.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 101,
    "lecture": 33,
    "title": "Trace a conflict-free LALR parse · Apply and challenge",
    "concept": "Never hide a conflict by taking the first action; the parse must stop when a unique action is unavailable.",
    "teachingSteps": [
      "When equal-core merging leaves every ACTION cell unambiguous, the resulting LALR parser can shift and reduce using its compact state table.",
      "For S → C C and C → c C | d, compare canonical and merged state counts, then parse c d d using the merged table.",
      "Never hide a conflict by taking the first action; the parse must stop when a unique action is unavailable."
    ],
    "foundation": {
      "title": "Trace a conflict-free LALR parse",
      "idea": "When equal-core merging leaves every ACTION cell unambiguous, the resulting LALR parser can shift and reduce using its compact state table.",
      "example": "For S → C C and C → c C | d, compare canonical and merged state counts, then parse c d d using the merged table.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> C C; C -> c C | d",
      "mode": "lalr",
      "view": "parse",
      "input": "c d d",
      "title": "Trace a conflict-free LALR parse"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying trace a conflict-free lalr parse, which warning prevents a wrong conclusion?",
        "options": [
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "Never hide a conflict by taking the first action; the parse must stop when a unique action is unavailable.",
          "A parser conflict can safely be resolved by always taking the first listed action."
        ],
        "answer": 2,
        "explanation": "When equal-core merging leaves every ACTION cell unambiguous, the resulting LALR parser can shift and reduce using its compact state table. Never hide a conflict by taking the first action; the parse must stop when a unique action is unavailable.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> C C C C C C; C -> c C | d d d; construction LALR. What happens on the entire input d d d d d d d d d d d d d d d d d d?",
        "options": [
          "Reject",
          "Stop on conflict",
          "Accept"
        ],
        "answer": 2,
        "explanation": "Accept: the augmented start item is complete with $ lookahead.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C; C -> c c C | d d d; construction LALR. Trace complete input c c d d d. How many terminal shifts occur before the parser stops?",
        "answer": 5,
        "tolerance": 0,
        "explanation": "Only shifts consume input; reductions change the stack without consuming the next terminal. Reject: no ACTION entry.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C; C -> c c C | d d d; construction LALR. When reducing C → c c C, how many symbol/state pairs are removed before following GOTO?",
        "answer": 3,
        "tolerance": 0,
        "explanation": "Pop one pair per right-hand-side symbol. An ε reduction removes zero pairs, then still follows GOTO for the left side.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 3.92,
        "text": "Let's try to design LR1 parser and LLR parser for this grammar LLR parser So let me add the augmented production which is this and then we need to write all protections of S because of this dot S Now we need to add the look head based on this S, right? dollar and dollar Since we need to write all protections of L because of this dot L. So let me add them and"
      },
      {
        "time": 488.97,
        "text": "Now tell me is this grammar LR1 or not first mark all the states which are having the reduced entries So this is having reduced entry. I'm not marking it like I can mark it but I'm not marking it because this is having just one reduced entry So there there is no possibility of conflict. So let me write all let me mark all the reduced entries which which may "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 33,
        "file": "033. Lecture 13 a-Example on LR(1) and LALR(1).mp4",
        "completedAt": "{\"file\":\"033. Lecture 13 a-Example on LR(1) and LALR(1).mp4\",\"language\":\"en\",\"probability\":0.9921875,\"processing_seconds\":34.5615131855011,\"device\":\"cuda\"}"
      }
    ],
    "start": 3.92,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Check this boundary: Never hide a conflict by taking the first action; the parse must stop when a unique action is unavailable.",
      "why": "When equal-core merging leaves every ACTION cell unambiguous, the resulting LALR parser can shift and reduce using its compact state table.",
      "watchFor": "Never hide a conflict by taking the first action; the parse must stop when a unique action is unavailable.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 102,
    "lecture": 34,
    "title": "Expose conflicts introduced by merging · Understand the concept",
    "concept": "Two LR(1) states may separately distinguish when A or B can reduce. Merging their equal cores unions lookaheads, so formerly separated reductions may compete on the same token.",
    "teachingSteps": [
      "Two LR(1) states may separately distinguish when A or B can reduce. Merging their equal cores unions lookaheads, so formerly separated reductions may compete on the same token.",
      "For S → a A d | b A e | a B e | b B d, A → c and B → c, canonical LR(1) succeeds while equal-core LALR merging creates reduce/reduce cells.",
      "This phenomenon concerns the grammar. It does not prove that the generated language lacks a different LALR grammar."
    ],
    "foundation": {
      "title": "Expose conflicts introduced by merging",
      "idea": "Two LR(1) states may separately distinguish when A or B can reduce. Merging their equal cores unions lookaheads, so formerly separated reductions may compete on the same token.",
      "example": "For S → a A d | b A e | a B e | b B d, A → c and B → c, canonical LR(1) succeeds while equal-core LALR merging creates reduce/reduce cells.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> a A d | b A e | a B e | b B d; A -> c; B -> c",
      "mode": "lalr",
      "view": "items",
      "input": "b c e",
      "title": "Expose conflicts introduced by merging"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains expose conflicts introduced by merging?",
        "options": [
          "Two LR(1) states may separately distinguish when A or B can reduce. Merging their equal cores unions lookaheads, so formerly separated reductions may compete on the same token.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift."
        ],
        "answer": 0,
        "explanation": "Two LR(1) states may separately distinguish when A or B can reduce. Merging their equal cores unions lookaheads, so formerly separated reductions may compete on the same token. This phenomenon concerns the grammar. It does not prove that the generated language lacks a different LALR grammar.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> a A d d d d d d d | b A e e e e e | a B e e e e e | b B d d d d d d d; A -> c c c c; B -> c c c c; construction LALR. How many ACTION cells contain incompatible actions?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> a A d | b A e | a B e | b B d; A -> c; B -> c; construction LALR. The current state contains exactly [S → b B d •, $]. With next token a, which ACTION category applies?",
        "options": [
          "Reduce",
          "Accept",
          "Conflict",
          "Error",
          "Shift"
        ],
        "answer": 3,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> a A d d | b A e | a B e | b B d d; A -> c; B -> c, canonical LR(1) has 16 states. How many states does equal-core LALR merging save?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Group states by the entire production-and-dot core; combine corresponding lookaheads, then check conflicts separately.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0,
        "text": "suppose you do not have conflict in lr1 okay which means you have some state which is let's suppose something like this beta dot b let's suppose this is b and b produces beta dot small b and let's suppose this is one of the state i mean i'm not writing look at currently i will write it but let's suppose this is one of the state and you are merging this state"
      },
      {
        "time": 61.91,
        "text": "llr then what happens on merging right this is what i went to check so suppose there that there is no conflict which means like if this is a and this is b then there is no conflict you cannot have b here because i have assumed that there is no conflict in lr1 so if you have b then there will be a shift reduce conflict so maybe let's say this is c okay what a"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 34,
        "file": "034. Lecture 13 b-One More Example on LR(1) and LALR(1).mp4",
        "completedAt": "{\"file\":\"034. Lecture 13 b-One More Example on LR(1) and LALR(1).mp4\",\"language\":\"en\",\"probability\":0.96923828125,\"processing_seconds\":35.02941346168518,\"device\":\"cuda\"}"
      }
    ],
    "start": 0,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Explain the rule: Two LR(1) states may separately distinguish when A or B can reduce. Merging their equal cores unions lookaheads, so formerly separated reductions may compete on the same token.",
      "why": "Two LR(1) states may separately distinguish when A or B can reduce. Merging their equal cores unions lookaheads, so formerly separated reductions may compete on the same token.",
      "watchFor": "This phenomenon concerns the grammar. It does not prove that the generated language lacks a different LALR grammar.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 103,
    "lecture": 34,
    "title": "Expose conflicts introduced by merging · Trace and experiment",
    "concept": "For S → a A d | b A e | a B e | b B d, A → c and B → c, canonical LR(1) succeeds while equal-core LALR merging creates reduce/reduce cells.",
    "teachingSteps": [
      "Two LR(1) states may separately distinguish when A or B can reduce. Merging their equal cores unions lookaheads, so formerly separated reductions may compete on the same token.",
      "For S → a A d | b A e | a B e | b B d, A → c and B → c, canonical LR(1) succeeds while equal-core LALR merging creates reduce/reduce cells.",
      "This phenomenon concerns the grammar. It does not prove that the generated language lacks a different LALR grammar."
    ],
    "foundation": {
      "title": "Expose conflicts introduced by merging",
      "idea": "Two LR(1) states may separately distinguish when A or B can reduce. Merging their equal cores unions lookaheads, so formerly separated reductions may compete on the same token.",
      "example": "For S → a A d | b A e | a B e | b B d, A → c and B → c, canonical LR(1) succeeds while equal-core LALR merging creates reduce/reduce cells.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> a A d | b A e | a B e | b B d; A -> c; B -> c",
      "mode": "lalr",
      "view": "items",
      "input": "b c e",
      "title": "Expose conflicts introduced by merging"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For S → a A d | b A e | a B e | b B d, A → c and B → c, canonical LR(1) succeeds while equal-core LALR merging creates reduce/reduce cells.",
        "options": [
          "For S → a A d | b A e | a B e | b B d, A → c and B → c, canonical LR(1) succeeds while equal-core LALR merging creates reduce/reduce cells.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift."
        ],
        "answer": 0,
        "explanation": "Two LR(1) states may separately distinguish when A or B can reduce. Merging their equal cores unions lookaheads, so formerly separated reductions may compete on the same token. This phenomenon concerns the grammar. It does not prove that the generated language lacks a different LALR grammar.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> a A d d d d | b A e e | a B e e | b B d d d d; A -> c; B -> c; construction LALR. The current state contains exactly [S → b A e • e, $]. With next token c, which ACTION category applies?",
        "options": [
          "Reduce",
          "Accept",
          "Conflict",
          "Error",
          "Shift"
        ],
        "answer": 3,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> a A d d d d d | b A e e | a B e e | b B d d d d d; A -> c; B -> c, canonical LR(1) has 24 states. How many states does equal-core LALR merging save?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Group states by the entire production-and-dot core; combine corresponding lookaheads, then check conflicts separately.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> a A d d d d d d | b A e e | a B e e | b B d d d d d d; A -> c; B -> c; construction LALR. How many ACTION cells contain incompatible actions?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0,
        "text": "suppose you do not have conflict in lr1 okay which means you have some state which is let's suppose something like this beta dot b let's suppose this is b and b produces beta dot small b and let's suppose this is one of the state i mean i'm not writing look at currently i will write it but let's suppose this is one of the state and you are merging this state"
      },
      {
        "time": 61.91,
        "text": "llr then what happens on merging right this is what i went to check so suppose there that there is no conflict which means like if this is a and this is b then there is no conflict you cannot have b here because i have assumed that there is no conflict in lr1 so if you have b then there will be a shift reduce conflict so maybe let's say this is c okay what a"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 34,
        "file": "034. Lecture 13 b-One More Example on LR(1) and LALR(1).mp4",
        "completedAt": "{\"file\":\"034. Lecture 13 b-One More Example on LR(1) and LALR(1).mp4\",\"language\":\"en\",\"probability\":0.96923828125,\"processing_seconds\":35.02941346168518,\"device\":\"cuda\"}"
      }
    ],
    "start": 0,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Trace this example: For S → a A d | b A e | a B e | b B d, A → c and B → c, canonical LR(1) succeeds while equal-core LALR merging creates reduce/reduce cells.",
      "why": "Two LR(1) states may separately distinguish when A or B can reduce. Merging their equal cores unions lookaheads, so formerly separated reductions may compete on the same token.",
      "watchFor": "This phenomenon concerns the grammar. It does not prove that the generated language lacks a different LALR grammar.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 104,
    "lecture": 34,
    "title": "Expose conflicts introduced by merging · Apply and challenge",
    "concept": "This phenomenon concerns the grammar. It does not prove that the generated language lacks a different LALR grammar.",
    "teachingSteps": [
      "Two LR(1) states may separately distinguish when A or B can reduce. Merging their equal cores unions lookaheads, so formerly separated reductions may compete on the same token.",
      "For S → a A d | b A e | a B e | b B d, A → c and B → c, canonical LR(1) succeeds while equal-core LALR merging creates reduce/reduce cells.",
      "This phenomenon concerns the grammar. It does not prove that the generated language lacks a different LALR grammar."
    ],
    "foundation": {
      "title": "Expose conflicts introduced by merging",
      "idea": "Two LR(1) states may separately distinguish when A or B can reduce. Merging their equal cores unions lookaheads, so formerly separated reductions may compete on the same token.",
      "example": "For S → a A d | b A e | a B e | b B d, A → c and B → c, canonical LR(1) succeeds while equal-core LALR merging creates reduce/reduce cells.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> a A d | b A e | a B e | b B d; A -> c; B -> c",
      "mode": "lalr",
      "view": "items",
      "input": "b c e",
      "title": "Expose conflicts introduced by merging"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying expose conflicts introduced by merging, which warning prevents a wrong conclusion?",
        "options": [
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "This phenomenon concerns the grammar. It does not prove that the generated language lacks a different LALR grammar."
        ],
        "answer": 3,
        "explanation": "Two LR(1) states may separately distinguish when A or B can reduce. Merging their equal cores unions lookaheads, so formerly separated reductions may compete on the same token. This phenomenon concerns the grammar. It does not prove that the generated language lacks a different LALR grammar.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> a A d | b A e e e e | a B e e e e | b B d; A -> c; B -> c, canonical LR(1) has 20 states. How many states does equal-core LALR merging save?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Group states by the entire production-and-dot core; combine corresponding lookaheads, then check conflicts separately.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> a A d d | b A e e e e | a B e e e e | b B d d; A -> c; B -> c; construction LALR. How many ACTION cells contain incompatible actions?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> a A d d d | b A e e e e | a B e e e e | b B d d d; A -> c; B -> c; construction LALR. The current state contains exactly [S → b B d d d •, $]. With next token $, which ACTION category applies?",
        "options": [
          "Conflict",
          "Reduce",
          "Shift",
          "Accept",
          "Error"
        ],
        "answer": 1,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0,
        "text": "suppose you do not have conflict in lr1 okay which means you have some state which is let's suppose something like this beta dot b let's suppose this is b and b produces beta dot small b and let's suppose this is one of the state i mean i'm not writing look at currently i will write it but let's suppose this is one of the state and you are merging this state"
      },
      {
        "time": 61.91,
        "text": "llr then what happens on merging right this is what i went to check so suppose there that there is no conflict which means like if this is a and this is b then there is no conflict you cannot have b here because i have assumed that there is no conflict in lr1 so if you have b then there will be a shift reduce conflict so maybe let's say this is c okay what a"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 34,
        "file": "034. Lecture 13 b-One More Example on LR(1) and LALR(1).mp4",
        "completedAt": "{\"file\":\"034. Lecture 13 b-One More Example on LR(1) and LALR(1).mp4\",\"language\":\"en\",\"probability\":0.96923828125,\"processing_seconds\":35.02941346168518,\"device\":\"cuda\"}"
      }
    ],
    "start": 0,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Check this boundary: This phenomenon concerns the grammar. It does not prove that the generated language lacks a different LALR grammar.",
      "why": "Two LR(1) states may separately distinguish when A or B can reduce. Merging their equal cores unions lookaheads, so formerly separated reductions may compete on the same token.",
      "watchFor": "This phenomenon concerns the grammar. It does not prove that the generated language lacks a different LALR grammar.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 105,
    "lecture": 35,
    "title": "Why two-token lookahead can help · Understand the concept",
    "concept": "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims.",
    "teachingSteps": [
      "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims.",
      "For S → a A a b and A → a | ε, after the first a, lookahead a b selects the empty A, while a a selects A → a.",
      "This dedicated witness is not a general LR(2) table generator or a proof about every grammar."
    ],
    "foundation": {
      "title": "Why two-token lookahead can help",
      "idea": "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims.",
      "example": "For S → a A a b and A → a | ε, after the first a, lookahead a b selects the empty A, while a a selects A → a.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr2",
      "title": "Why two-token lookahead can help"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains why two-token lookahead can help?",
        "options": [
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context.",
          "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims."
        ],
        "answer": 3,
        "explanation": "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims. This dedicated witness is not a general LR(2) table generator or a proof about every grammar.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For S → a A a b; A → a | ε, after the initial a why is lookahead a insufficient?",
        "options": [
          "It can start A → a or follow A → ε.",
          "It is not a terminal.",
          "It always means accept."
        ],
        "answer": 0,
        "explanation": "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims. For S → a A a b and A → a | ε, after the first a, lookahead a b selects the empty A, while a a selects A → a.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For S → a A a b; A → a | ε, after the first a and lookahead a b, which A rule fits?",
        "options": [
          "Neither rule can fit.",
          "A → ε",
          "A → a"
        ],
        "answer": 1,
        "explanation": "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims. For S → a A a b and A → a | ε, after the first a, lookahead a b selects the empty A, while a a selects A → a.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For S → a A a b; A → a | ε, after the first a and lookahead a a, which A rule fits?",
        "options": [
          "A → ε",
          "A → b",
          "A → a"
        ],
        "answer": 2,
        "explanation": "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims. For S → a A a b and A → a | ε, after the first a, lookahead a b selects the empty A, while a a selects A → a.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 148.56,
        "text": "So that's why under A there will be a sift reduce conflict. So here in this state there is a sift reduce conflict because you will reduce on the next look at symbol if the next look at symbol is small a and you will also sift if the next look at symbol is small a. That is why in this state there is a sift reduce conflict. That is why this grammar is not lr1 "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 35,
        "file": "035. Lecture 13 c- Tiny LR(2) grammar.mp4",
        "completedAt": "{\"file\":\"035. Lecture 13 c- Tiny LR(2) grammar.mp4\",\"language\":\"en\",\"probability\":0.97314453125,\"processing_seconds\":14.406141519546509,\"device\":\"cuda\"}"
      }
    ],
    "start": 148.56,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr2",
      "objective": "Explain the rule: A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims.",
      "why": "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims.",
      "watchFor": "This dedicated witness is not a general LR(2) table generator or a proof about every grammar.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 106,
    "lecture": 35,
    "title": "Why two-token lookahead can help · Trace and experiment",
    "concept": "For S → a A a b and A → a | ε, after the first a, lookahead a b selects the empty A, while a a selects A → a.",
    "teachingSteps": [
      "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims.",
      "For S → a A a b and A → a | ε, after the first a, lookahead a b selects the empty A, while a a selects A → a.",
      "This dedicated witness is not a general LR(2) table generator or a proof about every grammar."
    ],
    "foundation": {
      "title": "Why two-token lookahead can help",
      "idea": "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims.",
      "example": "For S → a A a b and A → a | ε, after the first a, lookahead a b selects the empty A, while a a selects A → a.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr2",
      "title": "Why two-token lookahead can help"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For S → a A a b and A → a | ε, after the first a, lookahead a b selects the empty A, while a a selects A → a.",
        "options": [
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context.",
          "For S → a A a b and A → a | ε, after the first a, lookahead a b selects the empty A, while a a selects A → a."
        ],
        "answer": 3,
        "explanation": "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims. This dedicated witness is not a general LR(2) table generator or a proof about every grammar.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which full input uses the empty A in S → a A a b; A → a | ε?",
        "options": [
          "a a a b",
          "a b",
          "a a b"
        ],
        "answer": 2,
        "explanation": "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims. For S → a A a b and A → a | ε, after the first a, lookahead a b selects the empty A, while a a selects A → a.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which full input uses A → a in S → a A a b?",
        "options": [
          "a a a b",
          "a a b",
          "a b b"
        ],
        "answer": 0,
        "explanation": "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims. For S → a A a b and A → a | ε, after the first a, lookahead a b selects the empty A, while a a selects A → a.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "How many terminals does the word a a a b contain?",
        "options": [
          "2",
          "4",
          "3"
        ],
        "answer": 1,
        "explanation": "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims. For S → a A a b and A → a | ε, after the first a, lookahead a b selects the empty A, while a a selects A → a.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 148.56,
        "text": "So that's why under A there will be a sift reduce conflict. So here in this state there is a sift reduce conflict because you will reduce on the next look at symbol if the next look at symbol is small a and you will also sift if the next look at symbol is small a. That is why in this state there is a sift reduce conflict. That is why this grammar is not lr1 "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 35,
        "file": "035. Lecture 13 c- Tiny LR(2) grammar.mp4",
        "completedAt": "{\"file\":\"035. Lecture 13 c- Tiny LR(2) grammar.mp4\",\"language\":\"en\",\"probability\":0.97314453125,\"processing_seconds\":14.406141519546509,\"device\":\"cuda\"}"
      }
    ],
    "start": 148.56,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr2",
      "objective": "Trace this example: For S → a A a b and A → a | ε, after the first a, lookahead a b selects the empty A, while a a selects A → a.",
      "why": "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims.",
      "watchFor": "This dedicated witness is not a general LR(2) table generator or a proof about every grammar.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 107,
    "lecture": 35,
    "title": "Why two-token lookahead can help · Apply and challenge",
    "concept": "This dedicated witness is not a general LR(2) table generator or a proof about every grammar.",
    "teachingSteps": [
      "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims.",
      "For S → a A a b and A → a | ε, after the first a, lookahead a b selects the empty A, while a a selects A → a.",
      "This dedicated witness is not a general LR(2) table generator or a proof about every grammar."
    ],
    "foundation": {
      "title": "Why two-token lookahead can help",
      "idea": "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims.",
      "example": "For S → a A a b and A → a | ε, after the first a, lookahead a b selects the empty A, while a a selects A → a.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr2",
      "title": "Why two-token lookahead can help"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying why two-token lookahead can help, which warning prevents a wrong conclusion?",
        "options": [
          "This dedicated witness is not a general LR(2) table generator or a proof about every grammar.",
          "Every factored grammar must be LL(1), even if its table has conflicts.",
          "A finite sample of successful parses proves an arbitrary grammar unambiguous.",
          "An empty production can be selected regardless of lookahead and context."
        ],
        "answer": 0,
        "explanation": "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims. This dedicated witness is not a general LR(2) table generator or a proof about every grammar.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "What does the k in LR(k) measure?",
        "options": [
          "The length of each identifier.",
          "The permitted lookahead length in tokens.",
          "The number of productions."
        ],
        "answer": 1,
        "explanation": "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims. For S → a A a b and A → a | ε, after the first a, lookahead a b selects the empty A, while a a selects A → a.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Does the dedicated two-token witness implement arbitrary LR(2) construction?",
        "options": [
          "Yes; every grammar is covered.",
          "Yes; it decides arbitrary ambiguity.",
          "No; it demonstrates one specific decision."
        ],
        "answer": 2,
        "explanation": "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims. For S → a A a b and A → a | ε, after the first a, lookahead a b selects the empty A, while a a selects A → a.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Must a parser still check the suffix after a two-token decision?",
        "options": [
          "Yes; a justified local decision does not imply full-input acceptance.",
          "No; two tokens prove all suffixes valid.",
          "No; the rest of the input is discarded."
        ],
        "answer": 0,
        "explanation": "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims. For S → a A a b and A → a | ε, after the first a, lookahead a b selects the empty A, while a a selects A → a.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 148.56,
        "text": "So that's why under A there will be a sift reduce conflict. So here in this state there is a sift reduce conflict because you will reduce on the next look at symbol if the next look at symbol is small a and you will also sift if the next look at symbol is small a. That is why in this state there is a sift reduce conflict. That is why this grammar is not lr1 "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 35,
        "file": "035. Lecture 13 c- Tiny LR(2) grammar.mp4",
        "completedAt": "{\"file\":\"035. Lecture 13 c- Tiny LR(2) grammar.mp4\",\"language\":\"en\",\"probability\":0.97314453125,\"processing_seconds\":14.406141519546509,\"device\":\"cuda\"}"
      }
    ],
    "start": 148.56,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr2",
      "objective": "Check this boundary: This dedicated witness is not a general LR(2) table generator or a proof about every grammar.",
      "why": "A decision can require seeing a pair of future tokens when the first token alone is compatible with two actions. Demonstrate this with one explicit grammar before making broader LR(k) claims.",
      "watchFor": "This dedicated witness is not a general LR(2) table generator or a proof about every grammar.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 108,
    "lecture": 36,
    "title": "Compare canonical and merged state evidence · Understand the concept",
    "concept": "Count canonical states, group them by complete LR(0) core, and inspect the resulting lookahead unions. State numbering has no semantic meaning by itself.",
    "teachingSteps": [
      "Count canonical states, group them by complete LR(0) core, and inspect the resulting lookahead unions. State numbering has no semantic meaning by itself.",
      "The C C grammar has canonical states that can be merged without introducing conflicts; the crossed A/B grammar shows why checking the resulting cells matters.",
      "A smaller table is useful only if it preserves deterministic actions for the intended grammar."
    ],
    "foundation": {
      "title": "Compare canonical and merged state evidence",
      "idea": "Count canonical states, group them by complete LR(0) core, and inspect the resulting lookahead unions. State numbering has no semantic meaning by itself.",
      "example": "The C C grammar has canonical states that can be merged without introducing conflicts; the crossed A/B grammar shows why checking the resulting cells matters.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> C C; C -> c C | d",
      "mode": "lalr",
      "view": "items",
      "input": "c d d",
      "title": "Compare canonical and merged state evidence"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains compare canonical and merged state evidence?",
        "options": [
          "Count canonical states, group them by complete LR(0) core, and inspect the resulting lookahead unions. State numbering has no semantic meaning by itself.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift."
        ],
        "answer": 0,
        "explanation": "Count canonical states, group them by complete LR(0) core, and inspect the resulting lookahead unions. State numbering has no semantic meaning by itself. A smaller table is useful only if it preserves deterministic actions for the intended grammar.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> C C C C C; C -> c c c C | d, canonical LR(1) has 17 states. How many states does equal-core LALR merging save?",
        "answer": 5,
        "tolerance": 0,
        "explanation": "Group states by the entire production-and-dot core; combine corresponding lookaheads, then check conflicts separately.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C C C; C -> c c c C | d; construction LALR. How many item states remain after this construction?",
        "answer": 13,
        "tolerance": 0,
        "explanation": "Count distinct complete item sets; for LALR, merge only states with identical full LR(0) cores.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C; C -> c c c c C | d; construction LALR. How many ACTION cells contain incompatible actions?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 15.02,
        "text": "Hi everyone. So today we are going to see many questions on LR1 and LLR1 parser. By the way, this LR1 parser is also called as CLR1 parser, canonical LR1 parser. Okay, CLR1 parser. It is also called as CLR1 parser. Okay, so let's just get started. Let's see this question, which is question number one."
      },
      {
        "time": 38.7,
        "text": "so what they're saying if the parser is in the state containing the lr1 item this then what must be on the top of the stack so suppose that parser is in some state which is containing this as lr1 item then what you can say as a top of stack what must be on the top of stack can anyone tell me what is the answer here alpha yes alpha must be on the top of stack"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 36,
        "file": "036. Recording - Lecture 14 Questions on LALR(1) and CLR.mp4",
        "completedAt": "{\"file\":\"036. Recording - Lecture 14 Questions on LALR(1) and CLR.mp4\",\"language\":\"en\",\"probability\":0.84765625,\"processing_seconds\":148.19952917099,\"device\":\"cuda\"}"
      }
    ],
    "start": 15.02,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Explain the rule: Count canonical states, group them by complete LR(0) core, and inspect the resulting lookahead unions. State numbering has no semantic meaning by itself.",
      "why": "Count canonical states, group them by complete LR(0) core, and inspect the resulting lookahead unions. State numbering has no semantic meaning by itself.",
      "watchFor": "A smaller table is useful only if it preserves deterministic actions for the intended grammar.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 109,
    "lecture": 36,
    "title": "Compare canonical and merged state evidence · Trace and experiment",
    "concept": "The C C grammar has canonical states that can be merged without introducing conflicts; the crossed A/B grammar shows why checking the resulting cells matters.",
    "teachingSteps": [
      "Count canonical states, group them by complete LR(0) core, and inspect the resulting lookahead unions. State numbering has no semantic meaning by itself.",
      "The C C grammar has canonical states that can be merged without introducing conflicts; the crossed A/B grammar shows why checking the resulting cells matters.",
      "A smaller table is useful only if it preserves deterministic actions for the intended grammar."
    ],
    "foundation": {
      "title": "Compare canonical and merged state evidence",
      "idea": "Count canonical states, group them by complete LR(0) core, and inspect the resulting lookahead unions. State numbering has no semantic meaning by itself.",
      "example": "The C C grammar has canonical states that can be merged without introducing conflicts; the crossed A/B grammar shows why checking the resulting cells matters.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> C C; C -> c C | d",
      "mode": "lalr",
      "view": "items",
      "input": "c d d",
      "title": "Compare canonical and merged state evidence"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: The C C grammar has canonical states that can be merged without introducing conflicts; the crossed A/B grammar shows why checking the resulting cells matters.",
        "options": [
          "An LR reduction consumes the next input token just like a shift.",
          "The C C grammar has canonical states that can be merged without introducing conflicts; the crossed A/B grammar shows why checking the resulting cells matters.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous."
        ],
        "answer": 1,
        "explanation": "Count canonical states, group them by complete LR(0) core, and inspect the resulting lookahead unions. State numbering has no semantic meaning by itself. A smaller table is useful only if it preserves deterministic actions for the intended grammar.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C C C; C -> c C | d d; construction LALR. How many item states remain after this construction?",
        "answer": 12,
        "tolerance": 0,
        "explanation": "Count distinct complete item sets; for LALR, merge only states with identical full LR(0) cores.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C; C -> c c C | d d; construction LALR. How many ACTION cells contain incompatible actions?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> C C C; C -> c c C | d d, canonical LR(1) has 15 states. How many states does equal-core LALR merging save?",
        "answer": 5,
        "tolerance": 0,
        "explanation": "Group states by the entire production-and-dot core; combine corresponding lookaheads, then check conflicts separately.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 15.02,
        "text": "Hi everyone. So today we are going to see many questions on LR1 and LLR1 parser. By the way, this LR1 parser is also called as CLR1 parser, canonical LR1 parser. Okay, CLR1 parser. It is also called as CLR1 parser. Okay, so let's just get started. Let's see this question, which is question number one."
      },
      {
        "time": 38.7,
        "text": "so what they're saying if the parser is in the state containing the lr1 item this then what must be on the top of the stack so suppose that parser is in some state which is containing this as lr1 item then what you can say as a top of stack what must be on the top of stack can anyone tell me what is the answer here alpha yes alpha must be on the top of stack"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 36,
        "file": "036. Recording - Lecture 14 Questions on LALR(1) and CLR.mp4",
        "completedAt": "{\"file\":\"036. Recording - Lecture 14 Questions on LALR(1) and CLR.mp4\",\"language\":\"en\",\"probability\":0.84765625,\"processing_seconds\":148.19952917099,\"device\":\"cuda\"}"
      }
    ],
    "start": 15.02,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Trace this example: The C C grammar has canonical states that can be merged without introducing conflicts; the crossed A/B grammar shows why checking the resulting cells matters.",
      "why": "Count canonical states, group them by complete LR(0) core, and inspect the resulting lookahead unions. State numbering has no semantic meaning by itself.",
      "watchFor": "A smaller table is useful only if it preserves deterministic actions for the intended grammar.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 110,
    "lecture": 36,
    "title": "Compare canonical and merged state evidence · Apply and challenge",
    "concept": "A smaller table is useful only if it preserves deterministic actions for the intended grammar.",
    "teachingSteps": [
      "Count canonical states, group them by complete LR(0) core, and inspect the resulting lookahead unions. State numbering has no semantic meaning by itself.",
      "The C C grammar has canonical states that can be merged without introducing conflicts; the crossed A/B grammar shows why checking the resulting cells matters.",
      "A smaller table is useful only if it preserves deterministic actions for the intended grammar."
    ],
    "foundation": {
      "title": "Compare canonical and merged state evidence",
      "idea": "Count canonical states, group them by complete LR(0) core, and inspect the resulting lookahead unions. State numbering has no semantic meaning by itself.",
      "example": "The C C grammar has canonical states that can be merged without introducing conflicts; the crossed A/B grammar shows why checking the resulting cells matters.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> C C; C -> c C | d",
      "mode": "lalr",
      "view": "items",
      "input": "c d d",
      "title": "Compare canonical and merged state evidence"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying compare canonical and merged state evidence, which warning prevents a wrong conclusion?",
        "options": [
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "A smaller table is useful only if it preserves deterministic actions for the intended grammar."
        ],
        "answer": 3,
        "explanation": "Count canonical states, group them by complete LR(0) core, and inspect the resulting lookahead unions. State numbering has no semantic meaning by itself. A smaller table is useful only if it preserves deterministic actions for the intended grammar.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C; C -> c c c c C | d d; construction LALR. How many ACTION cells contain incompatible actions?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For grammar S -> C C C; C -> c c c c C | d d, canonical LR(1) has 19 states. How many states does equal-core LALR merging save?",
        "answer": 7,
        "tolerance": 0,
        "explanation": "Group states by the entire production-and-dot core; combine corresponding lookaheads, then check conflicts separately.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> C C C C; C -> c c c c C | d d; construction LALR. How many item states remain after this construction?",
        "answer": 13,
        "tolerance": 0,
        "explanation": "Count distinct complete item sets; for LALR, merge only states with identical full LR(0) cores.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 15.02,
        "text": "Hi everyone. So today we are going to see many questions on LR1 and LLR1 parser. By the way, this LR1 parser is also called as CLR1 parser, canonical LR1 parser. Okay, CLR1 parser. It is also called as CLR1 parser. Okay, so let's just get started. Let's see this question, which is question number one."
      },
      {
        "time": 38.7,
        "text": "so what they're saying if the parser is in the state containing the lr1 item this then what must be on the top of the stack so suppose that parser is in some state which is containing this as lr1 item then what you can say as a top of stack what must be on the top of stack can anyone tell me what is the answer here alpha yes alpha must be on the top of stack"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 36,
        "file": "036. Recording - Lecture 14 Questions on LALR(1) and CLR.mp4",
        "completedAt": "{\"file\":\"036. Recording - Lecture 14 Questions on LALR(1) and CLR.mp4\",\"language\":\"en\",\"probability\":0.84765625,\"processing_seconds\":148.19952917099,\"device\":\"cuda\"}"
      }
    ],
    "start": 15.02,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Check this boundary: A smaller table is useful only if it preserves deterministic actions for the intended grammar.",
      "why": "Count canonical states, group them by complete LR(0) core, and inspect the resulting lookahead unions. State numbering has no semantic meaning by itself.",
      "watchFor": "A smaller table is useful only if it preserves deterministic actions for the intended grammar.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 111,
    "lecture": 37,
    "title": "Separate parser conflicts from ambiguity · Understand the concept",
    "concept": "A shift/reduce or reduce/reduce conflict says that the chosen parser construction cannot decide an action in that cell. An ambiguity claim additionally needs two parse trees for one complete word.",
    "teachingSteps": [
      "A shift/reduce or reduce/reduce conflict says that the chosen parser construction cannot decide an action in that cell. An ambiguity claim additionally needs two parse trees for one complete word.",
      "The assignment grammar has an SLR conflict but a conflict-free canonical LR(1) construction, so the SLR conflict alone was insufficient evidence of ambiguity.",
      "Do not confuse one parser failure with a proof that no deterministic grammar for the language exists."
    ],
    "foundation": {
      "title": "Separate parser conflicts from ambiguity",
      "idea": "A shift/reduce or reduce/reduce conflict says that the chosen parser construction cannot decide an action in that cell. An ambiguity claim additionally needs two parse trees for one complete word.",
      "example": "The assignment grammar has an SLR conflict but a conflict-free canonical LR(1) construction, so the SLR conflict alone was insufficient evidence of ambiguity.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> L = R | R; L -> * R | id; R -> L",
      "mode": "lr1",
      "view": "items",
      "input": "c d d",
      "title": "Separate parser conflicts from ambiguity"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains separate parser conflicts from ambiguity?",
        "options": [
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift.",
          "A shift/reduce or reduce/reduce conflict says that the chosen parser construction cannot decide an action in that cell. An ambiguity claim additionally needs two parse trees for one complete word.",
          "A parser conflict can safely be resolved by always taking the first listed action."
        ],
        "answer": 2,
        "explanation": "A shift/reduce or reduce/reduce conflict says that the chosen parser construction cannot decide an action in that cell. An ambiguity claim additionally needs two parse trees for one complete word. Do not confuse one parser failure with a proof that no deterministic grammar for the language exists.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> L = R | R; L -> * * * R | id; R -> L, compare the actual LL(1) and SLR(1) ACTION constructions. Which statement is true?",
        "options": [
          "Only SLR(1) is conflict-free",
          "Both constructions have conflicts",
          "Both tables are conflict-free",
          "Only LL(1) is conflict-free"
        ],
        "answer": 1,
        "explanation": "Compare the generated cells rather than inferring a language classification from one grammar feature.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> L = R | R; L -> * * * R | id | num; R -> L; construction LR1. How many ACTION cells contain incompatible actions?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> L = R | R; L -> * * * R | id | num; R -> L; construction LR1. The current state contains exactly [R → L •, $]. With next token num, which ACTION category applies?",
        "options": [
          "Conflict",
          "Error",
          "Shift",
          "Reduce",
          "Accept"
        ],
        "answer": 1,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 417.16,
        "text": "Will you be, will the parser be getting any conflict? In case of parsing this only, tell me, will the parser be getting any conflict? See, if we are having small a, it will go here and then it will say, okay, on dollar, on dollar, if the next input symbol is dollar, then you can reduce that to capital S, right? Okay, will you be reducing the epsilon to S? No"
      },
      {
        "time": 1301.89,
        "text": "No, right? Okay. Tell me will SLR one parcel do it or not? SLR one parser will say that okay, this a is basically in fall of me and then I can convert or something like this, right? So maybe SLR one parser can do but ideally, ideally after reading this, then should you do you think that you should be converting this b? No, right? Okay, after reading these tw"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 37,
        "file": "037. Recording - Lecture 14b Questions on LALR(1) and CL.mp4",
        "completedAt": "{\"file\":\"037. Recording - Lecture 14b Questions on LALR(1) and CL.mp4\",\"language\":\"en\",\"probability\":0.96240234375,\"processing_seconds\":104.44789624214172,\"device\":\"cuda\"}"
      }
    ],
    "start": 417.16,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Explain the rule: A shift/reduce or reduce/reduce conflict says that the chosen parser construction cannot decide an action in that cell. An ambiguity claim additionally needs two parse trees for one complete word.",
      "why": "A shift/reduce or reduce/reduce conflict says that the chosen parser construction cannot decide an action in that cell. An ambiguity claim additionally needs two parse trees for one complete word.",
      "watchFor": "Do not confuse one parser failure with a proof that no deterministic grammar for the language exists.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 112,
    "lecture": 37,
    "title": "Separate parser conflicts from ambiguity · Trace and experiment",
    "concept": "The assignment grammar has an SLR conflict but a conflict-free canonical LR(1) construction, so the SLR conflict alone was insufficient evidence of ambiguity.",
    "teachingSteps": [
      "A shift/reduce or reduce/reduce conflict says that the chosen parser construction cannot decide an action in that cell. An ambiguity claim additionally needs two parse trees for one complete word.",
      "The assignment grammar has an SLR conflict but a conflict-free canonical LR(1) construction, so the SLR conflict alone was insufficient evidence of ambiguity.",
      "Do not confuse one parser failure with a proof that no deterministic grammar for the language exists."
    ],
    "foundation": {
      "title": "Separate parser conflicts from ambiguity",
      "idea": "A shift/reduce or reduce/reduce conflict says that the chosen parser construction cannot decide an action in that cell. An ambiguity claim additionally needs two parse trees for one complete word.",
      "example": "The assignment grammar has an SLR conflict but a conflict-free canonical LR(1) construction, so the SLR conflict alone was insufficient evidence of ambiguity.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> L = R | R; L -> * R | id; R -> L",
      "mode": "lr1",
      "view": "items",
      "input": "c d d",
      "title": "Separate parser conflicts from ambiguity"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: The assignment grammar has an SLR conflict but a conflict-free canonical LR(1) construction, so the SLR conflict alone was insufficient evidence of ambiguity.",
        "options": [
          "The assignment grammar has an SLR conflict but a conflict-free canonical LR(1) construction, so the SLR conflict alone was insufficient evidence of ambiguity.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous.",
          "An LR reduction consumes the next input token just like a shift."
        ],
        "answer": 0,
        "explanation": "A shift/reduce or reduce/reduce conflict says that the chosen parser construction cannot decide an action in that cell. An ambiguity claim additionally needs two parse trees for one complete word. Do not confuse one parser failure with a proof that no deterministic grammar for the language exists.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> L = R | R; L -> * R | id | num; R -> L; construction LR1. How many ACTION cells contain incompatible actions?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> L = R | R; L -> * R | id; R -> L; construction LR1. The current state contains exactly [L → id •, $]. With next token id, which ACTION category applies?",
        "options": [
          "Error",
          "Shift",
          "Reduce",
          "Accept",
          "Conflict"
        ],
        "answer": 0,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> L = R | R; L -> * R | id | num; R -> L, compare the actual LL(1) and SLR(1) ACTION constructions. Which statement is true?",
        "options": [
          "Both tables are conflict-free",
          "Only LL(1) is conflict-free",
          "Only SLR(1) is conflict-free",
          "Both constructions have conflicts"
        ],
        "answer": 3,
        "explanation": "Compare the generated cells rather than inferring a language classification from one grammar feature.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 417.16,
        "text": "Will you be, will the parser be getting any conflict? In case of parsing this only, tell me, will the parser be getting any conflict? See, if we are having small a, it will go here and then it will say, okay, on dollar, on dollar, if the next input symbol is dollar, then you can reduce that to capital S, right? Okay, will you be reducing the epsilon to S? No"
      },
      {
        "time": 1301.89,
        "text": "No, right? Okay. Tell me will SLR one parcel do it or not? SLR one parser will say that okay, this a is basically in fall of me and then I can convert or something like this, right? So maybe SLR one parser can do but ideally, ideally after reading this, then should you do you think that you should be converting this b? No, right? Okay, after reading these tw"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 37,
        "file": "037. Recording - Lecture 14b Questions on LALR(1) and CL.mp4",
        "completedAt": "{\"file\":\"037. Recording - Lecture 14b Questions on LALR(1) and CL.mp4\",\"language\":\"en\",\"probability\":0.96240234375,\"processing_seconds\":104.44789624214172,\"device\":\"cuda\"}"
      }
    ],
    "start": 417.16,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Trace this example: The assignment grammar has an SLR conflict but a conflict-free canonical LR(1) construction, so the SLR conflict alone was insufficient evidence of ambiguity.",
      "why": "A shift/reduce or reduce/reduce conflict says that the chosen parser construction cannot decide an action in that cell. An ambiguity claim additionally needs two parse trees for one complete word.",
      "watchFor": "Do not confuse one parser failure with a proof that no deterministic grammar for the language exists.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 113,
    "lecture": 37,
    "title": "Separate parser conflicts from ambiguity · Apply and challenge",
    "concept": "Do not confuse one parser failure with a proof that no deterministic grammar for the language exists.",
    "teachingSteps": [
      "A shift/reduce or reduce/reduce conflict says that the chosen parser construction cannot decide an action in that cell. An ambiguity claim additionally needs two parse trees for one complete word.",
      "The assignment grammar has an SLR conflict but a conflict-free canonical LR(1) construction, so the SLR conflict alone was insufficient evidence of ambiguity.",
      "Do not confuse one parser failure with a proof that no deterministic grammar for the language exists."
    ],
    "foundation": {
      "title": "Separate parser conflicts from ambiguity",
      "idea": "A shift/reduce or reduce/reduce conflict says that the chosen parser construction cannot decide an action in that cell. An ambiguity claim additionally needs two parse trees for one complete word.",
      "example": "The assignment grammar has an SLR conflict but a conflict-free canonical LR(1) construction, so the SLR conflict alone was insufficient evidence of ambiguity.",
      "terms": [
        "Grammar: a finite collection of production rules describing permitted token sequences.",
        "Terminal: an input token used literally by a production.",
        "Nonterminal: a grammar name expanded using production rules.",
        "Lookahead: upcoming input token information used to choose a parser action.",
        "Empty word (ε): a sequence containing zero tokens."
      ]
    },
    "compilerSpec": {
      "kind": "lr",
      "grammar": "S -> L = R | R; L -> * R | id; R -> L",
      "mode": "lr1",
      "view": "items",
      "input": "c d d",
      "title": "Separate parser conflicts from ambiguity"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying separate parser conflicts from ambiguity, which warning prevents a wrong conclusion?",
        "options": [
          "An LR reduction consumes the next input token just like a shift.",
          "Do not confuse one parser failure with a proof that no deterministic grammar for the language exists.",
          "A parser conflict can safely be resolved by always taking the first listed action.",
          "Every SLR conflict proves that the grammar is ambiguous."
        ],
        "answer": 1,
        "explanation": "A shift/reduce or reduce/reduce conflict says that the chosen parser construction cannot decide an action in that cell. An ambiguity claim additionally needs two parse trees for one complete word. Do not confuse one parser failure with a proof that no deterministic grammar for the language exists.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Grammar S -> L = R | R; L -> * * * R | id; R -> L; construction LR1. The current state contains exactly [S → L = R •, $]. With next token =, which ACTION category applies?",
        "options": [
          "Accept",
          "Conflict",
          "Error",
          "Shift",
          "Reduce"
        ],
        "answer": 2,
        "explanation": "A terminal after the dot can shift; completed productions reduce only on their permitted lookahead. Multiple actions must remain a conflict.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For grammar S -> L = R | R; L -> * * * R | id | num; R -> L, compare the actual LL(1) and SLR(1) ACTION constructions. Which statement is true?",
        "options": [
          "Both tables are conflict-free",
          "Only LL(1) is conflict-free",
          "Only SLR(1) is conflict-free",
          "Both constructions have conflicts"
        ],
        "answer": 3,
        "explanation": "Compare the generated cells rather than inferring a language classification from one grammar feature.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Grammar S -> L = R | R; L -> * * * R | id; R -> L; construction LR1. How many ACTION cells contain incompatible actions?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "Count conflicting cells, retaining every action. A conflict in this construction does not by itself prove ambiguity.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 417.16,
        "text": "Will you be, will the parser be getting any conflict? In case of parsing this only, tell me, will the parser be getting any conflict? See, if we are having small a, it will go here and then it will say, okay, on dollar, on dollar, if the next input symbol is dollar, then you can reduce that to capital S, right? Okay, will you be reducing the epsilon to S? No"
      },
      {
        "time": 1301.89,
        "text": "No, right? Okay. Tell me will SLR one parcel do it or not? SLR one parser will say that okay, this a is basically in fall of me and then I can convert or something like this, right? So maybe SLR one parser can do but ideally, ideally after reading this, then should you do you think that you should be converting this b? No, right? Okay, after reading these tw"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 37,
        "file": "037. Recording - Lecture 14b Questions on LALR(1) and CL.mp4",
        "completedAt": "{\"file\":\"037. Recording - Lecture 14b Questions on LALR(1) and CL.mp4\",\"language\":\"en\",\"probability\":0.96240234375,\"processing_seconds\":104.44789624214172,\"device\":\"cuda\"}"
      }
    ],
    "start": 417.16,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "lr",
      "objective": "Check this boundary: Do not confuse one parser failure with a proof that no deterministic grammar for the language exists.",
      "why": "A shift/reduce or reduce/reduce conflict says that the chosen parser construction cannot decide an action in that cell. An ambiguity claim additionally needs two parse trees for one complete word.",
      "watchFor": "Do not confuse one parser failure with a proof that no deterministic grammar for the language exists.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 114,
    "lecture": 38,
    "title": "Compute values with synthesized attributes · Understand the concept",
    "concept": "A syntax-directed definition attaches attributes and equations to grammar productions. A synthesized attribute flows from children to their parent, so child values must be available first.",
    "teachingSteps": [
      "A syntax-directed definition attaches attributes and equations to grammar productions. A synthesized attribute flows from children to their parent, so child values must be available first.",
      "For 2 + 3 * 4, the multiplication node synthesizes 12, then the addition node synthesizes 14. The tree determines the dependencies.",
      "The order of production listing does not define attribute evaluation. Respect the dependency edges."
    ],
    "foundation": {
      "title": "Compute values with synthesized attributes",
      "idea": "A syntax-directed definition attaches attributes and equations to grammar productions. A synthesized attribute flows from children to their parent, so child values must be available first.",
      "example": "For 2 + 3 * 4, the multiplication node synthesizes 12, then the addition node synthesizes 14. The tree determines the dependencies.",
      "terms": [
        "Attribute: information associated with a grammar-symbol occurrence.",
        "Synthesized: an attribute computed from children and passed toward the parent.",
        "Dependency: a prerequisite value that must be available before another is computed."
      ]
    },
    "compilerSpec": {
      "kind": "attributes",
      "input": "2 + 3 * 4",
      "title": "Compute values with synthesized attributes"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains compute values with synthesized attributes?",
        "options": [
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "A syntax-directed definition attaches attributes and equations to grammar productions. A synthesized attribute flows from children to their parent, so child values must be available first.",
          "A smaller representation is automatically equivalent, regardless of side effects."
        ],
        "answer": 2,
        "explanation": "A syntax-directed definition attaches attributes and equations to grammar productions. A synthesized attribute flows from children to their parent, so child values must be available first. The order of production listing does not define attribute evaluation. Respect the dependency edges.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "With * above + and left-associative subtraction, what value does 14 + 15 * 16 synthesize?",
        "answer": 254,
        "tolerance": 0,
        "explanation": "Evaluate each child before its parent. Multiplication binds tighter; parentheses override precedence.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which postfix sequence represents (15 + 16) * 17?",
        "options": [
          "15 16 17 * +",
          "15 16 + 17 +",
          "15 16 + 17 *"
        ],
        "answer": 2,
        "explanation": "Postorder emits each operand subtree before its operator.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "A basic TAC emitter gives every binary operation in 25 - 16 - 5 one temporary and performs no optimization. How many temporary definitions are emitted?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count operator nodes, not operand occurrences or source characters.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 143.5,
        "text": "so this code is an attribute and yeah here here we only have one attribute so here code is one attribute and there could be other attribute also so suppose i have some production a gives bc then i can say that there are multiple attributes of a maybe a small a is one attribute maybe a small x is one attribute so there could be multiple attributes of one non-"
      },
      {
        "time": 173.32,
        "text": "associated with one production there are some semantic rules so what are those semantic rules those are some computation over the attributes or those are some some print statement or something else so suppose that this is the production that you have then in that case i have let's suppose i have this is a semantic rule which means this is doing something so"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 38,
        "file": "038. Lecture 15_ Syntax Directed Definition and Translat.mp4",
        "completedAt": "{\"file\":\"038. Lecture 15_ Syntax Directed Definition and Translat.mp4\",\"language\":\"en\",\"probability\":0.94140625,\"processing_seconds\":82.35021662712097,\"device\":\"cuda\"}"
      }
    ],
    "start": 143.5,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "attributes",
      "objective": "Explain the rule: A syntax-directed definition attaches attributes and equations to grammar productions. A synthesized attribute flows from children to their parent, so child values must be available first.",
      "why": "A syntax-directed definition attaches attributes and equations to grammar productions. A synthesized attribute flows from children to their parent, so child values must be available first.",
      "watchFor": "The order of production listing does not define attribute evaluation. Respect the dependency edges.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 115,
    "lecture": 38,
    "title": "Compute values with synthesized attributes · Trace and experiment",
    "concept": "For 2 + 3 * 4, the multiplication node synthesizes 12, then the addition node synthesizes 14. The tree determines the dependencies.",
    "teachingSteps": [
      "A syntax-directed definition attaches attributes and equations to grammar productions. A synthesized attribute flows from children to their parent, so child values must be available first.",
      "For 2 + 3 * 4, the multiplication node synthesizes 12, then the addition node synthesizes 14. The tree determines the dependencies.",
      "The order of production listing does not define attribute evaluation. Respect the dependency edges."
    ],
    "foundation": {
      "title": "Compute values with synthesized attributes",
      "idea": "A syntax-directed definition attaches attributes and equations to grammar productions. A synthesized attribute flows from children to their parent, so child values must be available first.",
      "example": "For 2 + 3 * 4, the multiplication node synthesizes 12, then the addition node synthesizes 14. The tree determines the dependencies.",
      "terms": [
        "Attribute: information associated with a grammar-symbol occurrence.",
        "Synthesized: an attribute computed from children and passed toward the parent.",
        "Dependency: a prerequisite value that must be available before another is computed."
      ]
    },
    "compilerSpec": {
      "kind": "attributes",
      "input": "2 + 3 * 4",
      "title": "Compute values with synthesized attributes"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For 2 + 3 * 4, the multiplication node synthesizes 12, then the addition node synthesizes 14. The tree determines the dependencies.",
        "options": [
          "For 2 + 3 * 4, the multiplication node synthesizes 12, then the addition node synthesizes 14. The tree determines the dependencies.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input."
        ],
        "answer": 0,
        "explanation": "A syntax-directed definition attaches attributes and equations to grammar productions. A synthesized attribute flows from children to their parent, so child values must be available first. The order of production listing does not define attribute evaluation. Respect the dependency edges.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "With * above + and left-associative subtraction, what value does 25 + 26 * 27 synthesize?",
        "answer": 727,
        "tolerance": 0,
        "explanation": "Evaluate each child before its parent. Multiplication binds tighter; parentheses override precedence.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which postfix sequence represents (26 + 27) * 28?",
        "options": [
          "26 27 28 * +",
          "26 27 + 28 +",
          "26 27 + 28 *"
        ],
        "answer": 2,
        "explanation": "Postorder emits each operand subtree before its operator.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "A basic TAC emitter gives every binary operation in 36 - 27 - 1 one temporary and performs no optimization. How many temporary definitions are emitted?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count operator nodes, not operand occurrences or source characters.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 143.5,
        "text": "so this code is an attribute and yeah here here we only have one attribute so here code is one attribute and there could be other attribute also so suppose i have some production a gives bc then i can say that there are multiple attributes of a maybe a small a is one attribute maybe a small x is one attribute so there could be multiple attributes of one non-"
      },
      {
        "time": 173.32,
        "text": "associated with one production there are some semantic rules so what are those semantic rules those are some computation over the attributes or those are some some print statement or something else so suppose that this is the production that you have then in that case i have let's suppose i have this is a semantic rule which means this is doing something so"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 38,
        "file": "038. Lecture 15_ Syntax Directed Definition and Translat.mp4",
        "completedAt": "{\"file\":\"038. Lecture 15_ Syntax Directed Definition and Translat.mp4\",\"language\":\"en\",\"probability\":0.94140625,\"processing_seconds\":82.35021662712097,\"device\":\"cuda\"}"
      }
    ],
    "start": 143.5,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "attributes",
      "objective": "Trace this example: For 2 + 3 * 4, the multiplication node synthesizes 12, then the addition node synthesizes 14. The tree determines the dependencies.",
      "why": "A syntax-directed definition attaches attributes and equations to grammar productions. A synthesized attribute flows from children to their parent, so child values must be available first.",
      "watchFor": "The order of production listing does not define attribute evaluation. Respect the dependency edges.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 116,
    "lecture": 38,
    "title": "Compute values with synthesized attributes · Apply and challenge",
    "concept": "The order of production listing does not define attribute evaluation. Respect the dependency edges.",
    "teachingSteps": [
      "A syntax-directed definition attaches attributes and equations to grammar productions. A synthesized attribute flows from children to their parent, so child values must be available first.",
      "For 2 + 3 * 4, the multiplication node synthesizes 12, then the addition node synthesizes 14. The tree determines the dependencies.",
      "The order of production listing does not define attribute evaluation. Respect the dependency edges."
    ],
    "foundation": {
      "title": "Compute values with synthesized attributes",
      "idea": "A syntax-directed definition attaches attributes and equations to grammar productions. A synthesized attribute flows from children to their parent, so child values must be available first.",
      "example": "For 2 + 3 * 4, the multiplication node synthesizes 12, then the addition node synthesizes 14. The tree determines the dependencies.",
      "terms": [
        "Attribute: information associated with a grammar-symbol occurrence.",
        "Synthesized: an attribute computed from children and passed toward the parent.",
        "Dependency: a prerequisite value that must be available before another is computed."
      ]
    },
    "compilerSpec": {
      "kind": "attributes",
      "input": "2 + 3 * 4",
      "title": "Compute values with synthesized attributes"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying compute values with synthesized attributes, which warning prevents a wrong conclusion?",
        "options": [
          "One successful example proves every rewrite safe for every language and input.",
          "The order of production listing does not define attribute evaluation. Respect the dependency edges.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter."
        ],
        "answer": 1,
        "explanation": "A syntax-directed definition attaches attributes and equations to grammar productions. A synthesized attribute flows from children to their parent, so child values must be available first. The order of production listing does not define attribute evaluation. Respect the dependency edges.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "With * above + and left-associative subtraction, what value does 5 + 6 * 7 synthesize?",
        "answer": 47,
        "tolerance": 0,
        "explanation": "Evaluate each child before its parent. Multiplication binds tighter; parentheses override precedence.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which postfix sequence represents (6 + 7) * 8?",
        "options": [
          "6 7 + 8 *",
          "6 7 8 * +",
          "6 7 + 8 +"
        ],
        "answer": 0,
        "explanation": "Postorder emits each operand subtree before its operator.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "A basic TAC emitter gives every binary operation in 16 - 7 - 2 one temporary and performs no optimization. How many temporary definitions are emitted?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count operator nodes, not operand occurrences or source characters.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 143.5,
        "text": "so this code is an attribute and yeah here here we only have one attribute so here code is one attribute and there could be other attribute also so suppose i have some production a gives bc then i can say that there are multiple attributes of a maybe a small a is one attribute maybe a small x is one attribute so there could be multiple attributes of one non-"
      },
      {
        "time": 173.32,
        "text": "associated with one production there are some semantic rules so what are those semantic rules those are some computation over the attributes or those are some some print statement or something else so suppose that this is the production that you have then in that case i have let's suppose i have this is a semantic rule which means this is doing something so"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 38,
        "file": "038. Lecture 15_ Syntax Directed Definition and Translat.mp4",
        "completedAt": "{\"file\":\"038. Lecture 15_ Syntax Directed Definition and Translat.mp4\",\"language\":\"en\",\"probability\":0.94140625,\"processing_seconds\":82.35021662712097,\"device\":\"cuda\"}"
      }
    ],
    "start": 143.5,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "attributes",
      "objective": "Check this boundary: The order of production listing does not define attribute evaluation. Respect the dependency edges.",
      "why": "A syntax-directed definition attaches attributes and equations to grammar productions. A synthesized attribute flows from children to their parent, so child values must be available first.",
      "watchFor": "The order of production listing does not define attribute evaluation. Respect the dependency edges.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 117,
    "lecture": 39,
    "title": "Evaluate position and value attributes · Understand the concept",
    "concept": "Give each binary digit a position inherited from its context, then synthesize its contribution as bit × 2^position. Sum the child contributions and apply the sign at the root only after the magnitude is known.",
    "teachingSteps": [
      "Give each binary digit a position inherited from its context, then synthesize its contribution as bit × 2^position. Sum the child contributions and apply the sign at the root only after the magnitude is known.",
      "For -1011, the digit positions are 3, 2, 1 and 0; contributions are 8, 0, 2 and 1. Their magnitude is 11 and the signed value is -11.",
      "This notation uses a separate minus sign, not two’s complement. Dependencies determine the evaluation order; a single unrestricted top-down or bottom-up pass need not compute arbitrary attributes."
    ],
    "foundation": {
      "title": "Evaluate position and value attributes",
      "idea": "Give each binary digit a position inherited from its context, then synthesize its contribution as bit × 2^position. Sum the child contributions and apply the sign at the root only after the magnitude is known.",
      "example": "For -1011, the digit positions are 3, 2, 1 and 0; contributions are 8, 0, 2 and 1. Their magnitude is 11 and the signed value is -11.",
      "terms": [
        "Inherited position: a digit’s context giving its power of two.",
        "Synthesized value: a result computed from child contributions.",
        "Dependency: a prerequisite attribute that must be available before its user is evaluated."
      ]
    },
    "compilerSpec": {
      "kind": "positions",
      "input": "-1011",
      "title": "Evaluate position and value attributes"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains evaluate position and value attributes?",
        "options": [
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "Give each binary digit a position inherited from its context, then synthesize its contribution as bit × 2^position. Sum the child contributions and apply the sign at the root only after the magnitude is known."
        ],
        "answer": 3,
        "explanation": "Give each binary digit a position inherited from its context, then synthesize its contribution as bit × 2^position. Sum the child contributions and apply the sign at the root only after the magnitude is known. This notation uses a separate minus sign, not two’s complement. Dependencies determine the evaluation order; a single unrestricted top-down or bottom-up pass need not compute arbitrary attributes.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Interpret -10110100101 as signed binary notation with a separate minus sign. What mathematical integer does it denote?",
        "answer": -1445,
        "tolerance": 0,
        "explanation": "Sum bit × 2^position from the rightmost position zero; apply the separate sign once at the root.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For binary digit string 10110100110, what position attribute does its leftmost digit inherit when the rightmost position is zero?",
        "answer": 10,
        "tolerance": 0,
        "explanation": "There are 11 digits, so the leftmost exponent is 10.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In binary string 10110100111, what unsigned contribution comes from the digit at position 5, counted from zero on the right?",
        "answer": 32,
        "tolerance": 0,
        "explanation": "A leaf contributes its bit multiplied by the power of two selected by its inherited position.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 2.16,
        "text": "Hi everyone in the last video we were discussing about this example So then in this example some grammar is given to us and with their some rules are also given to us Now we want to evaluate some string which is minus one zero now in those cases like we do not need to worry about top down or bottom up Which means we will first build the parse tree. So let me"
      },
      {
        "time": 28.36,
        "text": "few attributes here so what we will be doing we will be first building the parse tree and once we build the parse tree then we will be just writing down all the attributes so which are the attributes for associated with each of the symbol so this position and well well these are the two attributes that are associated with these symbols position and well and "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 39,
        "file": "039_Lecture_16_PYQs_on_Syntax_Directed_Definition_and_Tr.mp4",
        "completedAt": "{\"file\":\"039_Lecture_16_PYQs_on_Syntax_Directed_Definition_and_Tr.mp4\",\"language\":\"en\",\"probability\":0.9384765625,\"processing_seconds\":102.53420805931091,\"device\":\"cuda\"}"
      }
    ],
    "start": 2.16,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "positions",
      "objective": "Explain the rule: Give each binary digit a position inherited from its context, then synthesize its contribution as bit × 2^position. Sum the child contributions and apply the sign at the root only after the magnitude is known.",
      "why": "Give each binary digit a position inherited from its context, then synthesize its contribution as bit × 2^position. Sum the child contributions and apply the sign at the root only after the magnitude is known.",
      "watchFor": "This notation uses a separate minus sign, not two’s complement. Dependencies determine the evaluation order; a single unrestricted top-down or bottom-up pass need not compute arbitrary attributes.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 118,
    "lecture": 39,
    "title": "Evaluate position and value attributes · Trace and experiment",
    "concept": "For -1011, the digit positions are 3, 2, 1 and 0; contributions are 8, 0, 2 and 1. Their magnitude is 11 and the signed value is -11.",
    "teachingSteps": [
      "Give each binary digit a position inherited from its context, then synthesize its contribution as bit × 2^position. Sum the child contributions and apply the sign at the root only after the magnitude is known.",
      "For -1011, the digit positions are 3, 2, 1 and 0; contributions are 8, 0, 2 and 1. Their magnitude is 11 and the signed value is -11.",
      "This notation uses a separate minus sign, not two’s complement. Dependencies determine the evaluation order; a single unrestricted top-down or bottom-up pass need not compute arbitrary attributes."
    ],
    "foundation": {
      "title": "Evaluate position and value attributes",
      "idea": "Give each binary digit a position inherited from its context, then synthesize its contribution as bit × 2^position. Sum the child contributions and apply the sign at the root only after the magnitude is known.",
      "example": "For -1011, the digit positions are 3, 2, 1 and 0; contributions are 8, 0, 2 and 1. Their magnitude is 11 and the signed value is -11.",
      "terms": [
        "Inherited position: a digit’s context giving its power of two.",
        "Synthesized value: a result computed from child contributions.",
        "Dependency: a prerequisite attribute that must be available before its user is evaluated."
      ]
    },
    "compilerSpec": {
      "kind": "positions",
      "input": "-1011",
      "title": "Evaluate position and value attributes"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For -1011, the digit positions are 3, 2, 1 and 0; contributions are 8, 0, 2 and 1. Their magnitude is 11 and the signed value is -11.",
        "options": [
          "One successful example proves every rewrite safe for every language and input.",
          "For -1011, the digit positions are 3, 2, 1 and 0; contributions are 8, 0, 2 and 1. Their magnitude is 11 and the signed value is -11.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter."
        ],
        "answer": 1,
        "explanation": "Give each binary digit a position inherited from its context, then synthesize its contribution as bit × 2^position. Sum the child contributions and apply the sign at the root only after the magnitude is known. This notation uses a separate minus sign, not two’s complement. Dependencies determine the evaluation order; a single unrestricted top-down or bottom-up pass need not compute arbitrary attributes.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Interpret 10110110000 as signed binary notation with a separate minus sign. What mathematical integer does it denote?",
        "answer": 1456,
        "tolerance": 0,
        "explanation": "Sum bit × 2^position from the rightmost position zero; apply the separate sign once at the root.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For binary digit string 10110110001, what position attribute does its leftmost digit inherit when the rightmost position is zero?",
        "answer": 10,
        "tolerance": 0,
        "explanation": "There are 11 digits, so the leftmost exponent is 10.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In binary string 10110110010, what unsigned contribution comes from the digit at position 5, counted from zero on the right?",
        "answer": 32,
        "tolerance": 0,
        "explanation": "A leaf contributes its bit multiplied by the power of two selected by its inherited position.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 2.16,
        "text": "Hi everyone in the last video we were discussing about this example So then in this example some grammar is given to us and with their some rules are also given to us Now we want to evaluate some string which is minus one zero now in those cases like we do not need to worry about top down or bottom up Which means we will first build the parse tree. So let me"
      },
      {
        "time": 28.36,
        "text": "few attributes here so what we will be doing we will be first building the parse tree and once we build the parse tree then we will be just writing down all the attributes so which are the attributes for associated with each of the symbol so this position and well well these are the two attributes that are associated with these symbols position and well and "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 39,
        "file": "039_Lecture_16_PYQs_on_Syntax_Directed_Definition_and_Tr.mp4",
        "completedAt": "{\"file\":\"039_Lecture_16_PYQs_on_Syntax_Directed_Definition_and_Tr.mp4\",\"language\":\"en\",\"probability\":0.9384765625,\"processing_seconds\":102.53420805931091,\"device\":\"cuda\"}"
      }
    ],
    "start": 2.16,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "positions",
      "objective": "Trace this example: For -1011, the digit positions are 3, 2, 1 and 0; contributions are 8, 0, 2 and 1. Their magnitude is 11 and the signed value is -11.",
      "why": "Give each binary digit a position inherited from its context, then synthesize its contribution as bit × 2^position. Sum the child contributions and apply the sign at the root only after the magnitude is known.",
      "watchFor": "This notation uses a separate minus sign, not two’s complement. Dependencies determine the evaluation order; a single unrestricted top-down or bottom-up pass need not compute arbitrary attributes.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 119,
    "lecture": 39,
    "title": "Evaluate position and value attributes · Apply and challenge",
    "concept": "This notation uses a separate minus sign, not two’s complement. Dependencies determine the evaluation order; a single unrestricted top-down or bottom-up pass need not compute arbitrary attributes.",
    "teachingSteps": [
      "Give each binary digit a position inherited from its context, then synthesize its contribution as bit × 2^position. Sum the child contributions and apply the sign at the root only after the magnitude is known.",
      "For -1011, the digit positions are 3, 2, 1 and 0; contributions are 8, 0, 2 and 1. Their magnitude is 11 and the signed value is -11.",
      "This notation uses a separate minus sign, not two’s complement. Dependencies determine the evaluation order; a single unrestricted top-down or bottom-up pass need not compute arbitrary attributes."
    ],
    "foundation": {
      "title": "Evaluate position and value attributes",
      "idea": "Give each binary digit a position inherited from its context, then synthesize its contribution as bit × 2^position. Sum the child contributions and apply the sign at the root only after the magnitude is known.",
      "example": "For -1011, the digit positions are 3, 2, 1 and 0; contributions are 8, 0, 2 and 1. Their magnitude is 11 and the signed value is -11.",
      "terms": [
        "Inherited position: a digit’s context giving its power of two.",
        "Synthesized value: a result computed from child contributions.",
        "Dependency: a prerequisite attribute that must be available before its user is evaluated."
      ]
    },
    "compilerSpec": {
      "kind": "positions",
      "input": "-1011",
      "title": "Evaluate position and value attributes"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying evaluate position and value attributes, which warning prevents a wrong conclusion?",
        "options": [
          "This notation uses a separate minus sign, not two’s complement. Dependencies determine the evaluation order; a single unrestricted top-down or bottom-up pass need not compute arbitrary attributes.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input."
        ],
        "answer": 0,
        "explanation": "Give each binary digit a position inherited from its context, then synthesize its contribution as bit × 2^position. Sum the child contributions and apply the sign at the root only after the magnitude is known. This notation uses a separate minus sign, not two’s complement. Dependencies determine the evaluation order; a single unrestricted top-down or bottom-up pass need not compute arbitrary attributes.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Interpret -10110111011 as signed binary notation with a separate minus sign. What mathematical integer does it denote?",
        "answer": -1467,
        "tolerance": 0,
        "explanation": "Sum bit × 2^position from the rightmost position zero; apply the separate sign once at the root.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For binary digit string 10110111100, what position attribute does its leftmost digit inherit when the rightmost position is zero?",
        "answer": 10,
        "tolerance": 0,
        "explanation": "There are 11 digits, so the leftmost exponent is 10.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In binary string 10110111101, what unsigned contribution comes from the digit at position 5, counted from zero on the right?",
        "answer": 32,
        "tolerance": 0,
        "explanation": "A leaf contributes its bit multiplied by the power of two selected by its inherited position.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 2.16,
        "text": "Hi everyone in the last video we were discussing about this example So then in this example some grammar is given to us and with their some rules are also given to us Now we want to evaluate some string which is minus one zero now in those cases like we do not need to worry about top down or bottom up Which means we will first build the parse tree. So let me"
      },
      {
        "time": 28.36,
        "text": "few attributes here so what we will be doing we will be first building the parse tree and once we build the parse tree then we will be just writing down all the attributes so which are the attributes for associated with each of the symbol so this position and well well these are the two attributes that are associated with these symbols position and well and "
      }
    ],
    "sourceReferences": [
      {
        "lecture": 39,
        "file": "039_Lecture_16_PYQs_on_Syntax_Directed_Definition_and_Tr.mp4",
        "completedAt": "{\"file\":\"039_Lecture_16_PYQs_on_Syntax_Directed_Definition_and_Tr.mp4\",\"language\":\"en\",\"probability\":0.9384765625,\"processing_seconds\":102.53420805931091,\"device\":\"cuda\"}"
      }
    ],
    "start": 2.16,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "positions",
      "objective": "Check this boundary: This notation uses a separate minus sign, not two’s complement. Dependencies determine the evaluation order; a single unrestricted top-down or bottom-up pass need not compute arbitrary attributes.",
      "why": "Give each binary digit a position inherited from its context, then synthesize its contribution as bit × 2^position. Sum the child contributions and apply the sign at the root only after the magnitude is known.",
      "watchFor": "This notation uses a separate minus sign, not two’s complement. Dependencies determine the evaluation order; a single unrestricted top-down or bottom-up pass need not compute arbitrary attributes.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 120,
    "lecture": 40,
    "title": "Pass inherited context through a declaration · Understand the concept",
    "concept": "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward.",
    "teachingSteps": [
      "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward.",
      "In float alpha, beta;, the declaration supplies float to both identifiers before their symbol entries are recorded.",
      "An arbitrary attribute dependency can be cyclic. S-attributed and L-attributed restrictions exist to make legal evaluation orders easier to obtain."
    ],
    "foundation": {
      "title": "Pass inherited context through a declaration",
      "idea": "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward.",
      "example": "In float alpha, beta;, the declaration supplies float to both identifiers before their symbol entries are recorded.",
      "terms": [
        "Inherited: information supplied from parent or permitted sibling context.",
        "Symbol table: recorded information about declared names.",
        "Dependency order: an evaluation sequence computing prerequisites before their users."
      ]
    },
    "compilerSpec": {
      "kind": "inherited",
      "type": "float",
      "title": "Pass inherited context through a declaration"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains pass inherited context through a declaration?",
        "options": [
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward.",
          "A smaller representation is automatically equivalent, regardless of side effects."
        ],
        "answer": 2,
        "explanation": "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward. An arbitrary attribute dependency can be cyclic. S-attributed and L-attributed restrictions exist to make legal evaluation orders easier to obtain.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In float alpha, beta;, what type context reaches alpha?",
        "options": [
          "The previous variable value.",
          "float",
          "The spelling alpha."
        ],
        "answer": 1,
        "explanation": "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward. In float alpha, beta;, the declaration supplies float to both identifiers before their symbol entries are recorded.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "In float alpha, beta;, what type context reaches beta?",
        "options": [
          "float",
          "int by default despite the declaration.",
          "The comma token."
        ],
        "answer": 0,
        "explanation": "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward. In float alpha, beta;, the declaration supplies float to both identifiers before their symbol entries are recorded.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Does a declaration type passed from parent to list child exemplify an inherited attribute?",
        "options": [
          "No; types are token positions.",
          "Yes.",
          "No; it must flow upward."
        ],
        "answer": 1,
        "explanation": "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward. In float alpha, beta;, the declaration supplies float to both identifiers before their symbol entries are recorded.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0,
        "text": "So in the last video, we were talking about these two parsers and these two type of attributes, right? So in this video, I will give you the examples that how to use bottom of parser in case of synthesized attribute and in case of inherited attribute. So what we will be doing in this video, we will take HDD and we will convert that HDD to HDD. So if it is sy"
      },
      {
        "time": 31.04,
        "text": "irrespective whether it is bottom of parser or top down parser, okay? Similarly, for inherited attributes also, we will be converting some HDD to HDD and there is a fixed bay and that is for inherited attribute. So it is also irrespective of top down and bottom of parsers. So in this video, we are going to see these two translation schemes, like how to trans"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 40,
        "file": "040_Lecture_17_Inherited_and_Synthesize_attributes_with_.mp4",
        "completedAt": "{\"file\":\"040_Lecture_17_Inherited_and_Synthesize_attributes_with_.mp4\",\"language\":\"en\",\"probability\":0.93017578125,\"processing_seconds\":52.291666746139526,\"device\":\"cuda\"}"
      }
    ],
    "start": 0,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "inherited",
      "objective": "Explain the rule: An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward.",
      "why": "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward.",
      "watchFor": "An arbitrary attribute dependency can be cyclic. S-attributed and L-attributed restrictions exist to make legal evaluation orders easier to obtain.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 121,
    "lecture": 40,
    "title": "Pass inherited context through a declaration · Trace and experiment",
    "concept": "In float alpha, beta;, the declaration supplies float to both identifiers before their symbol entries are recorded.",
    "teachingSteps": [
      "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward.",
      "In float alpha, beta;, the declaration supplies float to both identifiers before their symbol entries are recorded.",
      "An arbitrary attribute dependency can be cyclic. S-attributed and L-attributed restrictions exist to make legal evaluation orders easier to obtain."
    ],
    "foundation": {
      "title": "Pass inherited context through a declaration",
      "idea": "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward.",
      "example": "In float alpha, beta;, the declaration supplies float to both identifiers before their symbol entries are recorded.",
      "terms": [
        "Inherited: information supplied from parent or permitted sibling context.",
        "Symbol table: recorded information about declared names.",
        "Dependency order: an evaluation sequence computing prerequisites before their users."
      ]
    },
    "compilerSpec": {
      "kind": "inherited",
      "type": "float",
      "title": "Pass inherited context through a declaration"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: In float alpha, beta;, the declaration supplies float to both identifiers before their symbol entries are recorded.",
        "options": [
          "In float alpha, beta;, the declaration supplies float to both identifiers before their symbol entries are recorded.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input."
        ],
        "answer": 0,
        "explanation": "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward. An arbitrary attribute dependency can be cyclic. S-attributed and L-attributed restrictions exist to make legal evaluation orders easier to obtain.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "What must exist before an attribute equation reads its dependency?",
        "options": [
          "The generated machine code.",
          "A repeated evaluation with no ordering.",
          "The dependency value."
        ],
        "answer": 2,
        "explanation": "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward. In float alpha, beta;, the declaration supplies float to both identifiers before their symbol entries are recorded.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which direction describes a synthesized expression value?",
        "options": [
          "From children toward their parent.",
          "Only from a later sibling to an earlier sibling.",
          "From the linker to the lexer."
        ],
        "answer": 0,
        "explanation": "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward. In float alpha, beta;, the declaration supplies float to both identifiers before their symbol entries are recorded.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "What does a symbol-table entry for a declared identifier record here?",
        "options": [
          "The identifier name and its type.",
          "Only the source file length.",
          "Every possible runtime input."
        ],
        "answer": 0,
        "explanation": "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward. In float alpha, beta;, the declaration supplies float to both identifiers before their symbol entries are recorded.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0,
        "text": "So in the last video, we were talking about these two parsers and these two type of attributes, right? So in this video, I will give you the examples that how to use bottom of parser in case of synthesized attribute and in case of inherited attribute. So what we will be doing in this video, we will take HDD and we will convert that HDD to HDD. So if it is sy"
      },
      {
        "time": 31.04,
        "text": "irrespective whether it is bottom of parser or top down parser, okay? Similarly, for inherited attributes also, we will be converting some HDD to HDD and there is a fixed bay and that is for inherited attribute. So it is also irrespective of top down and bottom of parsers. So in this video, we are going to see these two translation schemes, like how to trans"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 40,
        "file": "040_Lecture_17_Inherited_and_Synthesize_attributes_with_.mp4",
        "completedAt": "{\"file\":\"040_Lecture_17_Inherited_and_Synthesize_attributes_with_.mp4\",\"language\":\"en\",\"probability\":0.93017578125,\"processing_seconds\":52.291666746139526,\"device\":\"cuda\"}"
      }
    ],
    "start": 0,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "inherited",
      "objective": "Trace this example: In float alpha, beta;, the declaration supplies float to both identifiers before their symbol entries are recorded.",
      "why": "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward.",
      "watchFor": "An arbitrary attribute dependency can be cyclic. S-attributed and L-attributed restrictions exist to make legal evaluation orders easier to obtain.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 122,
    "lecture": 40,
    "title": "Pass inherited context through a declaration · Apply and challenge",
    "concept": "An arbitrary attribute dependency can be cyclic. S-attributed and L-attributed restrictions exist to make legal evaluation orders easier to obtain.",
    "teachingSteps": [
      "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward.",
      "In float alpha, beta;, the declaration supplies float to both identifiers before their symbol entries are recorded.",
      "An arbitrary attribute dependency can be cyclic. S-attributed and L-attributed restrictions exist to make legal evaluation orders easier to obtain."
    ],
    "foundation": {
      "title": "Pass inherited context through a declaration",
      "idea": "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward.",
      "example": "In float alpha, beta;, the declaration supplies float to both identifiers before their symbol entries are recorded.",
      "terms": [
        "Inherited: information supplied from parent or permitted sibling context.",
        "Symbol table: recorded information about declared names.",
        "Dependency order: an evaluation sequence computing prerequisites before their users."
      ]
    },
    "compilerSpec": {
      "kind": "inherited",
      "type": "float",
      "title": "Pass inherited context through a declaration"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying pass inherited context through a declaration, which warning prevents a wrong conclusion?",
        "options": [
          "One successful example proves every rewrite safe for every language and input.",
          "An arbitrary attribute dependency can be cyclic. S-attributed and L-attributed restrictions exist to make legal evaluation orders easier to obtain.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter."
        ],
        "answer": 1,
        "explanation": "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward. An arbitrary attribute dependency can be cyclic. S-attributed and L-attributed restrictions exist to make legal evaluation orders easier to obtain.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Can an arbitrary attribute dependency graph contain a cycle?",
        "options": [
          "No; grammar trees forbid all attribute cycles.",
          "No; inherited means constant.",
          "Yes; a legal evaluation order then needs further analysis."
        ],
        "answer": 2,
        "explanation": "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward. In float alpha, beta;, the declaration supplies float to both identifiers before their symbol entries are recorded.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "What restriction characterizes S-attributed definitions?",
        "options": [
          "Every attribute depends on future siblings.",
          "They contain no semantic rules.",
          "Their attributes are synthesized."
        ],
        "answer": 2,
        "explanation": "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward. In float alpha, beta;, the declaration supplies float to both identifiers before their symbol entries are recorded.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "What is the purpose of L-attributed restrictions?",
        "options": [
          "To guarantee the grammar is LR(0).",
          "To make every type an integer.",
          "To permit an evaluation discipline using permitted parent and left-context dependencies."
        ],
        "answer": 2,
        "explanation": "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward. In float alpha, beta;, the declaration supplies float to both identifiers before their symbol entries are recorded.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 0,
        "text": "So in the last video, we were talking about these two parsers and these two type of attributes, right? So in this video, I will give you the examples that how to use bottom of parser in case of synthesized attribute and in case of inherited attribute. So what we will be doing in this video, we will take HDD and we will convert that HDD to HDD. So if it is sy"
      },
      {
        "time": 31.04,
        "text": "irrespective whether it is bottom of parser or top down parser, okay? Similarly, for inherited attributes also, we will be converting some HDD to HDD and there is a fixed bay and that is for inherited attribute. So it is also irrespective of top down and bottom of parsers. So in this video, we are going to see these two translation schemes, like how to trans"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 40,
        "file": "040_Lecture_17_Inherited_and_Synthesize_attributes_with_.mp4",
        "completedAt": "{\"file\":\"040_Lecture_17_Inherited_and_Synthesize_attributes_with_.mp4\",\"language\":\"en\",\"probability\":0.93017578125,\"processing_seconds\":52.291666746139526,\"device\":\"cuda\"}"
      }
    ],
    "start": 0,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "inherited",
      "objective": "Check this boundary: An arbitrary attribute dependency can be cyclic. S-attributed and L-attributed restrictions exist to make legal evaluation orders easier to obtain.",
      "why": "An inherited attribute supplies information from a parent or permitted sibling context. A declaration type can flow down to every identifier, while synthesized information flows back upward.",
      "watchFor": "An arbitrary attribute dependency can be cyclic. S-attributed and L-attributed restrictions exist to make legal evaluation orders easier to obtain.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 123,
    "lecture": 41,
    "title": "Source, assembly, object and machine code · Understand the concept",
    "concept": "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries.",
    "teachingSteps": [
      "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries.",
      "A compiler may emit assembly or object code. The object can still contain unresolved external references that linking must fix.",
      "An interpreter executes through its own implementation; compiling and interpreting can also be combined in one runtime."
    ],
    "foundation": {
      "title": "Source, assembly, object and machine code",
      "idea": "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries.",
      "example": "A compiler may emit assembly or object code. The object can still contain unresolved external references that linking must fix.",
      "terms": [
        "Source: the program representation being translated.",
        "Intermediate representation: a structured form used between source analysis and target generation.",
        "Observable behavior: outputs and other effects the language requires the translation to preserve."
      ]
    },
    "compilerSpec": {
      "kind": "phases",
      "title": "Source, assembly, object and machine code"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains source, assembly, object and machine code?",
        "options": [
          "One successful example proves every rewrite safe for every language and input.",
          "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter."
        ],
        "answer": 1,
        "explanation": "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries. An interpreter executes through its own implementation; compiling and interpreting can also be combined in one runtime.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which tool normally converts symbolic assembly into object code?",
        "options": [
          "A syntax-tree pretty printer.",
          "A source formatter.",
          "An assembler."
        ],
        "answer": 2,
        "explanation": "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries. A compiler may emit assembly or object code. The object can still contain unresolved external references that linking must fix.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which tool resolves external references across object files?",
        "options": [
          "A linker.",
          "A lexer.",
          "A FIRST-set solver."
        ],
        "answer": 0,
        "explanation": "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries. A compiler may emit assembly or object code. The object can still contain unresolved external references that linking must fix.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Must a compiler always emit human-readable assembly?",
        "options": [
          "Yes; assembly is the source language.",
          "No; it may emit object or another target form directly.",
          "Yes; otherwise it is an interpreter."
        ],
        "answer": 1,
        "explanation": "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries. A compiler may emit assembly or object code. The object can still contain unresolved external references that linking must fix.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 24.53,
        "text": "Hi everyone, welcome to Go classes. In this lecture we will study computer languages, machine language, assembly language, high level language, what is the difference between these languages. Actually in the compiler design you will use these words many times. Machine language, what is a machine language, what it actually means, how it looks, what is assembl"
      },
      {
        "time": 50.95,
        "text": "so you will use these words many times I will use these words many times in future lectures okay when we study code optimization intermediate code generation so when we study all these concepts I will keep using these words like machine code machine code means machine language I will use this word assembly code or I can say assembly language so you must be v"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 41,
        "file": "041_Recording_Lecture_1_Computer_Languages_Machine_Langu.mp4",
        "completedAt": "{\"file\":\"041_Recording_Lecture_1_Computer_Languages_Machine_Langu.mp4\",\"language\":\"en\",\"probability\":0.9453125,\"processing_seconds\":125.80426001548767,\"device\":\"cuda\"}"
      }
    ],
    "start": 24.53,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "phases",
      "objective": "Explain the rule: A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries.",
      "why": "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries.",
      "watchFor": "An interpreter executes through its own implementation; compiling and interpreting can also be combined in one runtime.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 124,
    "lecture": 41,
    "title": "Source, assembly, object and machine code · Trace and experiment",
    "concept": "A compiler may emit assembly or object code. The object can still contain unresolved external references that linking must fix.",
    "teachingSteps": [
      "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries.",
      "A compiler may emit assembly or object code. The object can still contain unresolved external references that linking must fix.",
      "An interpreter executes through its own implementation; compiling and interpreting can also be combined in one runtime."
    ],
    "foundation": {
      "title": "Source, assembly, object and machine code",
      "idea": "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries.",
      "example": "A compiler may emit assembly or object code. The object can still contain unresolved external references that linking must fix.",
      "terms": [
        "Source: the program representation being translated.",
        "Intermediate representation: a structured form used between source analysis and target generation.",
        "Observable behavior: outputs and other effects the language requires the translation to preserve."
      ]
    },
    "compilerSpec": {
      "kind": "phases",
      "title": "Source, assembly, object and machine code"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: A compiler may emit assembly or object code. The object can still contain unresolved external references that linking must fix.",
        "options": [
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "A compiler may emit assembly or object code. The object can still contain unresolved external references that linking must fix."
        ],
        "answer": 3,
        "explanation": "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries. An interpreter executes through its own implementation; compiling and interpreting can also be combined in one runtime.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Can an object file still contain unresolved external symbols?",
        "options": [
          "Yes; linking can resolve them later.",
          "No; every object file must run alone.",
          "Only if its token stream is invalid."
        ],
        "answer": 0,
        "explanation": "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries. A compiler may emit assembly or object code. The object can still contain unresolved external references that linking must fix.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "What does a loader primarily prepare?",
        "options": [
          "An identifier maximal-munch table.",
          "An executable image for execution in memory.",
          "A grammar ambiguity proof."
        ],
        "answer": 1,
        "explanation": "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries. A compiler may emit assembly or object code. The object can still contain unresolved external references that linking must fix.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "What does a runtime interpreter do?",
        "options": [
          "Executes a program through its own implementation.",
          "Only joins object-file sections.",
          "Only prints source line numbers."
        ],
        "answer": 0,
        "explanation": "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries. A compiler may emit assembly or object code. The object can still contain unresolved external references that linking must fix.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 24.53,
        "text": "Hi everyone, welcome to Go classes. In this lecture we will study computer languages, machine language, assembly language, high level language, what is the difference between these languages. Actually in the compiler design you will use these words many times. Machine language, what is a machine language, what it actually means, how it looks, what is assembl"
      },
      {
        "time": 50.95,
        "text": "so you will use these words many times I will use these words many times in future lectures okay when we study code optimization intermediate code generation so when we study all these concepts I will keep using these words like machine code machine code means machine language I will use this word assembly code or I can say assembly language so you must be v"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 41,
        "file": "041_Recording_Lecture_1_Computer_Languages_Machine_Langu.mp4",
        "completedAt": "{\"file\":\"041_Recording_Lecture_1_Computer_Languages_Machine_Langu.mp4\",\"language\":\"en\",\"probability\":0.9453125,\"processing_seconds\":125.80426001548767,\"device\":\"cuda\"}"
      }
    ],
    "start": 24.53,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "phases",
      "objective": "Trace this example: A compiler may emit assembly or object code. The object can still contain unresolved external references that linking must fix.",
      "why": "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries.",
      "watchFor": "An interpreter executes through its own implementation; compiling and interpreting can also be combined in one runtime.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 125,
    "lecture": 41,
    "title": "Source, assembly, object and machine code · Apply and challenge",
    "concept": "An interpreter executes through its own implementation; compiling and interpreting can also be combined in one runtime.",
    "teachingSteps": [
      "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries.",
      "A compiler may emit assembly or object code. The object can still contain unresolved external references that linking must fix.",
      "An interpreter executes through its own implementation; compiling and interpreting can also be combined in one runtime."
    ],
    "foundation": {
      "title": "Source, assembly, object and machine code",
      "idea": "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries.",
      "example": "A compiler may emit assembly or object code. The object can still contain unresolved external references that linking must fix.",
      "terms": [
        "Source: the program representation being translated.",
        "Intermediate representation: a structured form used between source analysis and target generation.",
        "Observable behavior: outputs and other effects the language requires the translation to preserve."
      ]
    },
    "compilerSpec": {
      "kind": "phases",
      "title": "Source, assembly, object and machine code"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying source, assembly, object and machine code, which warning prevents a wrong conclusion?",
        "options": [
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "An interpreter executes through its own implementation; compiling and interpreting can also be combined in one runtime.",
          "A smaller representation is automatically equivalent, regardless of side effects."
        ],
        "answer": 2,
        "explanation": "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries. An interpreter executes through its own implementation; compiling and interpreting can also be combined in one runtime.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Can one runtime combine interpretation and compilation?",
        "options": [
          "Only for lexically invalid programs.",
          "Yes, for example with later compilation of selected code.",
          "No; the techniques are mutually exclusive."
        ],
        "answer": 1,
        "explanation": "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries. A compiler may emit assembly or object code. The object can still contain unresolved external references that linking must fix.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which artifact is a target-specific symbolic instruction listing?",
        "options": [
          "An abstract syntax tree.",
          "A token-kind list.",
          "Assembly."
        ],
        "answer": 2,
        "explanation": "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries. A compiler may emit assembly or object code. The object can still contain unresolved external references that linking must fix.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "What can an unresolved function reference indicate after compilation?",
        "options": [
          "The source necessarily had a lexical error.",
          "FIRST contains ε incorrectly.",
          "A linking dependency still needs to be satisfied."
        ],
        "answer": 2,
        "explanation": "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries. A compiler may emit assembly or object code. The object can still contain unresolved external references that linking must fix.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 24.53,
        "text": "Hi everyone, welcome to Go classes. In this lecture we will study computer languages, machine language, assembly language, high level language, what is the difference between these languages. Actually in the compiler design you will use these words many times. Machine language, what is a machine language, what it actually means, how it looks, what is assembl"
      },
      {
        "time": 50.95,
        "text": "so you will use these words many times I will use these words many times in future lectures okay when we study code optimization intermediate code generation so when we study all these concepts I will keep using these words like machine code machine code means machine language I will use this word assembly code or I can say assembly language so you must be v"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 41,
        "file": "041_Recording_Lecture_1_Computer_Languages_Machine_Langu.mp4",
        "completedAt": "{\"file\":\"041_Recording_Lecture_1_Computer_Languages_Machine_Langu.mp4\",\"language\":\"en\",\"probability\":0.9453125,\"processing_seconds\":125.80426001548767,\"device\":\"cuda\"}"
      }
    ],
    "start": 24.53,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "phases",
      "objective": "Check this boundary: An interpreter executes through its own implementation; compiling and interpreting can also be combined in one runtime.",
      "why": "A source language describes the program for people and tools. Assembly names target operations symbolically; an assembler encodes them. A linker resolves references across object files and libraries.",
      "watchFor": "An interpreter executes through its own implementation; compiling and interpreting can also be combined in one runtime.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 126,
    "lecture": 42,
    "title": "Front end, intermediate form and back end · Understand the concept",
    "concept": "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels.",
    "teachingSteps": [
      "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels.",
      "A new source language can reuse a target back end if both agree on a suitable intermediate form and its semantics.",
      "Machine-independent does not mean semantics-free: types, side effects and evaluation rules still constrain transformations."
    ],
    "foundation": {
      "title": "Front end, intermediate form and back end",
      "idea": "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels.",
      "example": "A new source language can reuse a target back end if both agree on a suitable intermediate form and its semantics.",
      "terms": [
        "Source: the program representation being translated.",
        "Intermediate representation: a structured form used between source analysis and target generation.",
        "Observable behavior: outputs and other effects the language requires the translation to preserve."
      ]
    },
    "compilerSpec": {
      "kind": "phases",
      "title": "Front end, intermediate form and back end"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains front end, intermediate form and back end?",
        "options": [
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels.",
          "A smaller representation is automatically equivalent, regardless of side effects."
        ],
        "answer": 2,
        "explanation": "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels. Machine-independent does not mean semantics-free: types, side effects and evaluation rules still constrain transformations.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which side primarily checks source-language declarations and types?",
        "options": [
          "The front end.",
          "The file downloader.",
          "Only the target assembler."
        ],
        "answer": 0,
        "explanation": "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels. A new source language can reuse a target back end if both agree on a suitable intermediate form and its semantics.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which side primarily lowers operations for a chosen target architecture?",
        "options": [
          "The back end.",
          "The source tokenizer alone.",
          "The login server."
        ],
        "answer": 0,
        "explanation": "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels. A new source language can reuse a target back end if both agree on a suitable intermediate form and its semantics.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "What allows different source front ends to reuse a back end?",
        "options": [
          "Skipping semantic checks.",
          "An agreed intermediate representation with defined semantics.",
          "Identical source spelling."
        ],
        "answer": 1,
        "explanation": "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels. A new source language can reuse a target back end if both agree on a suitable intermediate form and its semantics.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 22.9,
        "text": "Hi, everyone. Welcome to go classes. Now we are in the final phases of the compiler. If you see the phases of the compiler, then we have already seen lexical analysis, syntax analysis and semantic analysis. Okay. So these are the final phases of the compiler that we need to study now. Okay. So you can see intermediate representation and code optimization. Th"
      },
      {
        "time": 52.89,
        "text": "Before we study all these phases. Okay. These different, different phases. Before we study, let me give you in this lecture, let me give you the overview of the compiler phases. Okay. Complete overview. Let me give you what, what is, what are the compiler phases, what they do with help of example. Okay. Also what is front end, what is backend, what is interm"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 42,
        "file": "042_Recording_Lecture_2_Broad_Overview_of_Phases_of_Comp.mp4",
        "completedAt": "{\"file\":\"042_Recording_Lecture_2_Broad_Overview_of_Phases_of_Comp.mp4\",\"language\":\"en\",\"probability\":0.96533203125,\"processing_seconds\":196.86255717277527,\"device\":\"cuda\"}"
      }
    ],
    "start": 22.9,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "phases",
      "objective": "Explain the rule: The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels.",
      "why": "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels.",
      "watchFor": "Machine-independent does not mean semantics-free: types, side effects and evaluation rules still constrain transformations.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 127,
    "lecture": 42,
    "title": "Front end, intermediate form and back end · Trace and experiment",
    "concept": "A new source language can reuse a target back end if both agree on a suitable intermediate form and its semantics.",
    "teachingSteps": [
      "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels.",
      "A new source language can reuse a target back end if both agree on a suitable intermediate form and its semantics.",
      "Machine-independent does not mean semantics-free: types, side effects and evaluation rules still constrain transformations."
    ],
    "foundation": {
      "title": "Front end, intermediate form and back end",
      "idea": "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels.",
      "example": "A new source language can reuse a target back end if both agree on a suitable intermediate form and its semantics.",
      "terms": [
        "Source: the program representation being translated.",
        "Intermediate representation: a structured form used between source analysis and target generation.",
        "Observable behavior: outputs and other effects the language requires the translation to preserve."
      ]
    },
    "compilerSpec": {
      "kind": "phases",
      "title": "Front end, intermediate form and back end"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: A new source language can reuse a target back end if both agree on a suitable intermediate form and its semantics.",
        "options": [
          "One successful example proves every rewrite safe for every language and input.",
          "A new source language can reuse a target back end if both agree on a suitable intermediate form and its semantics.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter."
        ],
        "answer": 1,
        "explanation": "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels. Machine-independent does not mean semantics-free: types, side effects and evaluation rules still constrain transformations.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Does machine-independent IR eliminate all semantic constraints?",
        "options": [
          "Yes; values become mere strings.",
          "No; behavior, types and effects still constrain transformations.",
          "Yes; every rewrite becomes safe."
        ],
        "answer": 1,
        "explanation": "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels. A new source language can reuse a target back end if both agree on a suitable intermediate form and its semantics.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Can optimization occur at more than one IR level?",
        "options": [
          "Only before any tokens exist.",
          "Yes.",
          "No; exactly one pass is mandatory."
        ],
        "answer": 1,
        "explanation": "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels. A new source language can reuse a target back end if both agree on a suitable intermediate form and its semantics.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "What should survive lowering from a checked tree into IR?",
        "options": [
          "The original font selection.",
          "The required meaning and effects of the operations.",
          "Every original comment position."
        ],
        "answer": 1,
        "explanation": "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels. A new source language can reuse a target back end if both agree on a suitable intermediate form and its semantics.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 22.9,
        "text": "Hi, everyone. Welcome to go classes. Now we are in the final phases of the compiler. If you see the phases of the compiler, then we have already seen lexical analysis, syntax analysis and semantic analysis. Okay. So these are the final phases of the compiler that we need to study now. Okay. So you can see intermediate representation and code optimization. Th"
      },
      {
        "time": 52.89,
        "text": "Before we study all these phases. Okay. These different, different phases. Before we study, let me give you in this lecture, let me give you the overview of the compiler phases. Okay. Complete overview. Let me give you what, what is, what are the compiler phases, what they do with help of example. Okay. Also what is front end, what is backend, what is interm"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 42,
        "file": "042_Recording_Lecture_2_Broad_Overview_of_Phases_of_Comp.mp4",
        "completedAt": "{\"file\":\"042_Recording_Lecture_2_Broad_Overview_of_Phases_of_Comp.mp4\",\"language\":\"en\",\"probability\":0.96533203125,\"processing_seconds\":196.86255717277527,\"device\":\"cuda\"}"
      }
    ],
    "start": 22.9,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "phases",
      "objective": "Trace this example: A new source language can reuse a target back end if both agree on a suitable intermediate form and its semantics.",
      "why": "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels.",
      "watchFor": "Machine-independent does not mean semantics-free: types, side effects and evaluation rules still constrain transformations.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 128,
    "lecture": 42,
    "title": "Front end, intermediate form and back end · Apply and challenge",
    "concept": "Machine-independent does not mean semantics-free: types, side effects and evaluation rules still constrain transformations.",
    "teachingSteps": [
      "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels.",
      "A new source language can reuse a target back end if both agree on a suitable intermediate form and its semantics.",
      "Machine-independent does not mean semantics-free: types, side effects and evaluation rules still constrain transformations."
    ],
    "foundation": {
      "title": "Front end, intermediate form and back end",
      "idea": "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels.",
      "example": "A new source language can reuse a target back end if both agree on a suitable intermediate form and its semantics.",
      "terms": [
        "Source: the program representation being translated.",
        "Intermediate representation: a structured form used between source analysis and target generation.",
        "Observable behavior: outputs and other effects the language requires the translation to preserve."
      ]
    },
    "compilerSpec": {
      "kind": "phases",
      "title": "Front end, intermediate form and back end"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying front end, intermediate form and back end, which warning prevents a wrong conclusion?",
        "options": [
          "One successful example proves every rewrite safe for every language and input.",
          "Machine-independent does not mean semantics-free: types, side effects and evaluation rules still constrain transformations.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter."
        ],
        "answer": 1,
        "explanation": "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels. Machine-independent does not mean semantics-free: types, side effects and evaluation rules still constrain transformations.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "What is a practical benefit of separating source analysis from target generation?",
        "options": [
          "All target instructions become identical.",
          "No tests are then required.",
          "Source and target support can be reused through a common IR."
        ],
        "answer": 2,
        "explanation": "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels. A new source language can reuse a target back end if both agree on a suitable intermediate form and its semantics.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Does a new CPU target necessarily require rewriting the source lexer?",
        "options": [
          "Yes; every target changes whitespace rules.",
          "No; the lexer describes source tokens rather than target instructions.",
          "Yes; target registers are source character categories."
        ],
        "answer": 1,
        "explanation": "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels. A new source language can reuse a target back end if both agree on a suitable intermediate form and its semantics.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Why can a back end not reorder arbitrary operations freely?",
        "options": [
          "Data dependencies and observable effects constrain execution order.",
          "Temporary names determine physical time.",
          "A shorter file is always equivalent."
        ],
        "answer": 0,
        "explanation": "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels. A new source language can reuse a target back end if both agree on a suitable intermediate form and its semantics.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 22.9,
        "text": "Hi, everyone. Welcome to go classes. Now we are in the final phases of the compiler. If you see the phases of the compiler, then we have already seen lexical analysis, syntax analysis and semantic analysis. Okay. So these are the final phases of the compiler that we need to study now. Okay. So you can see intermediate representation and code optimization. Th"
      },
      {
        "time": 52.89,
        "text": "Before we study all these phases. Okay. These different, different phases. Before we study, let me give you in this lecture, let me give you the overview of the compiler phases. Okay. Complete overview. Let me give you what, what is, what are the compiler phases, what they do with help of example. Okay. Also what is front end, what is backend, what is interm"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 42,
        "file": "042_Recording_Lecture_2_Broad_Overview_of_Phases_of_Comp.mp4",
        "completedAt": "{\"file\":\"042_Recording_Lecture_2_Broad_Overview_of_Phases_of_Comp.mp4\",\"language\":\"en\",\"probability\":0.96533203125,\"processing_seconds\":196.86255717277527,\"device\":\"cuda\"}"
      }
    ],
    "start": 22.9,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "phases",
      "objective": "Check this boundary: Machine-independent does not mean semantics-free: types, side effects and evaluation rules still constrain transformations.",
      "why": "The front end analyzes source rules and produces an intermediate representation. The back end lowers that representation for a target machine. Optimization can occur at several intermediate levels.",
      "watchFor": "Machine-independent does not mean semantics-free: types, side effects and evaluation rules still constrain transformations.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 129,
    "lecture": 43,
    "title": "Represent expressions as trees, DAGs and IR · Understand the concept",
    "concept": "An expression tree records operator nesting. A DAG can share equivalent pure subexpressions when operands are unchanged. Linear IR names intermediate results so later passes can analyze dependencies.",
    "teachingSteps": [
      "An expression tree records operator nesting. A DAG can share equivalent pure subexpressions when operands are unchanged. Linear IR names intermediate results so later passes can analyze dependencies.",
      "For (2 + 3) * (2 + 3), a tree has two addition nodes; a DAG may share that pure sum. The basic TAC emitter intentionally emits both before optimization.",
      "Sharing is unsafe when repeated operations have observable side effects or changed operands."
    ],
    "foundation": {
      "title": "Represent expressions as trees, DAGs and IR",
      "idea": "An expression tree records operator nesting. A DAG can share equivalent pure subexpressions when operands are unchanged. Linear IR names intermediate results so later passes can analyze dependencies.",
      "example": "For (2 + 3) * (2 + 3), a tree has two addition nodes; a DAG may share that pure sum. The basic TAC emitter intentionally emits both before optimization.",
      "terms": [
        "Temporary: an intermediate result name, independent of a physical register.",
        "Postfix: an operand-first representation with an operator after its arguments.",
        "Three-address code: linear instructions exposing simple operations and named intermediate results."
      ]
    },
    "compilerSpec": {
      "kind": "ir",
      "input": "(2 + 3) * (2 + 3)",
      "title": "Represent expressions as trees, DAGs and IR"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains represent expressions as trees, dags and ir?",
        "options": [
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "An expression tree records operator nesting. A DAG can share equivalent pure subexpressions when operands are unchanged. Linear IR names intermediate results so later passes can analyze dependencies."
        ],
        "answer": 3,
        "explanation": "An expression tree records operator nesting. A DAG can share equivalent pure subexpressions when operands are unchanged. Linear IR names intermediate results so later passes can analyze dependencies. Sharing is unsafe when repeated operations have observable side effects or changed operands.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "With * above + and left-associative subtraction, what value does 13 + 14 * 15 synthesize?",
        "answer": 223,
        "tolerance": 0,
        "explanation": "Evaluate each child before its parent. Multiplication binds tighter; parentheses override precedence.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which postfix sequence represents (14 + 15) * 16?",
        "options": [
          "14 15 + 16 *",
          "14 15 16 * +",
          "14 15 + 16 +"
        ],
        "answer": 0,
        "explanation": "Postorder emits each operand subtree before its operator.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "A basic TAC emitter gives every binary operation in 24 - 15 - 5 one temporary and performs no optimization. How many temporary definitions are emitted?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count operator nodes, not operand occurrences or source characters.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 11.7,
        "text": "Hi everyone. Welcome to Go classes. In this lecture, we will study intermediate representations. In the last lecture, we have already seen what are the stages of a compiler. We have already seen the lexical analyzer, syntax analyzer, semantic analyzer. So these three stages we have already seen. Now, in this lecture, basically, we will study what is intermed"
      },
      {
        "time": 97.37,
        "text": "that will be intermediate representation, right? Yes or no? So you can see the output of front end that is your intermediate code or you can say intermediate representation. Now this intermediate code, this is the input for the backend. This is the input for the backend. What is your backend? The backend is basically what are the tasks of the backend? The ba"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 43,
        "file": "043. Recording - Lecture 3A - Intermediate Representatio.mp4",
        "completedAt": "{\"file\":\"043. Recording - Lecture 3A - Intermediate Representatio.mp4\",\"language\":\"en\",\"probability\":0.9462890625,\"processing_seconds\":156.24723625183105,\"device\":\"cuda\"}"
      }
    ],
    "start": 11.7,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ir",
      "objective": "Explain the rule: An expression tree records operator nesting. A DAG can share equivalent pure subexpressions when operands are unchanged. Linear IR names intermediate results so later passes can analyze dependencies.",
      "why": "An expression tree records operator nesting. A DAG can share equivalent pure subexpressions when operands are unchanged. Linear IR names intermediate results so later passes can analyze dependencies.",
      "watchFor": "Sharing is unsafe when repeated operations have observable side effects or changed operands.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 130,
    "lecture": 43,
    "title": "Represent expressions as trees, DAGs and IR · Trace and experiment",
    "concept": "For (2 + 3) * (2 + 3), a tree has two addition nodes; a DAG may share that pure sum. The basic TAC emitter intentionally emits both before optimization.",
    "teachingSteps": [
      "An expression tree records operator nesting. A DAG can share equivalent pure subexpressions when operands are unchanged. Linear IR names intermediate results so later passes can analyze dependencies.",
      "For (2 + 3) * (2 + 3), a tree has two addition nodes; a DAG may share that pure sum. The basic TAC emitter intentionally emits both before optimization.",
      "Sharing is unsafe when repeated operations have observable side effects or changed operands."
    ],
    "foundation": {
      "title": "Represent expressions as trees, DAGs and IR",
      "idea": "An expression tree records operator nesting. A DAG can share equivalent pure subexpressions when operands are unchanged. Linear IR names intermediate results so later passes can analyze dependencies.",
      "example": "For (2 + 3) * (2 + 3), a tree has two addition nodes; a DAG may share that pure sum. The basic TAC emitter intentionally emits both before optimization.",
      "terms": [
        "Temporary: an intermediate result name, independent of a physical register.",
        "Postfix: an operand-first representation with an operator after its arguments.",
        "Three-address code: linear instructions exposing simple operations and named intermediate results."
      ]
    },
    "compilerSpec": {
      "kind": "ir",
      "input": "(2 + 3) * (2 + 3)",
      "title": "Represent expressions as trees, DAGs and IR"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For (2 + 3) * (2 + 3), a tree has two addition nodes; a DAG may share that pure sum. The basic TAC emitter intentionally emits both before optimization.",
        "options": [
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "For (2 + 3) * (2 + 3), a tree has two addition nodes; a DAG may share that pure sum. The basic TAC emitter intentionally emits both before optimization.",
          "A smaller representation is automatically equivalent, regardless of side effects."
        ],
        "answer": 2,
        "explanation": "An expression tree records operator nesting. A DAG can share equivalent pure subexpressions when operands are unchanged. Linear IR names intermediate results so later passes can analyze dependencies. Sharing is unsafe when repeated operations have observable side effects or changed operands.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "With * above + and left-associative subtraction, what value does 24 + 25 * 26 synthesize?",
        "answer": 674,
        "tolerance": 0,
        "explanation": "Evaluate each child before its parent. Multiplication binds tighter; parentheses override precedence.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which postfix sequence represents (25 + 26) * 27?",
        "options": [
          "25 26 27 * +",
          "25 26 + 27 +",
          "25 26 + 27 *"
        ],
        "answer": 2,
        "explanation": "Postorder emits each operand subtree before its operator.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "A basic TAC emitter gives every binary operation in 12 - 3 - 2 one temporary and performs no optimization. How many temporary definitions are emitted?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count operator nodes, not operand occurrences or source characters.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 11.7,
        "text": "Hi everyone. Welcome to Go classes. In this lecture, we will study intermediate representations. In the last lecture, we have already seen what are the stages of a compiler. We have already seen the lexical analyzer, syntax analyzer, semantic analyzer. So these three stages we have already seen. Now, in this lecture, basically, we will study what is intermed"
      },
      {
        "time": 97.37,
        "text": "that will be intermediate representation, right? Yes or no? So you can see the output of front end that is your intermediate code or you can say intermediate representation. Now this intermediate code, this is the input for the backend. This is the input for the backend. What is your backend? The backend is basically what are the tasks of the backend? The ba"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 43,
        "file": "043. Recording - Lecture 3A - Intermediate Representatio.mp4",
        "completedAt": "{\"file\":\"043. Recording - Lecture 3A - Intermediate Representatio.mp4\",\"language\":\"en\",\"probability\":0.9462890625,\"processing_seconds\":156.24723625183105,\"device\":\"cuda\"}"
      }
    ],
    "start": 11.7,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ir",
      "objective": "Trace this example: For (2 + 3) * (2 + 3), a tree has two addition nodes; a DAG may share that pure sum. The basic TAC emitter intentionally emits both before optimization.",
      "why": "An expression tree records operator nesting. A DAG can share equivalent pure subexpressions when operands are unchanged. Linear IR names intermediate results so later passes can analyze dependencies.",
      "watchFor": "Sharing is unsafe when repeated operations have observable side effects or changed operands.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 131,
    "lecture": 43,
    "title": "Represent expressions as trees, DAGs and IR · Apply and challenge",
    "concept": "Sharing is unsafe when repeated operations have observable side effects or changed operands.",
    "teachingSteps": [
      "An expression tree records operator nesting. A DAG can share equivalent pure subexpressions when operands are unchanged. Linear IR names intermediate results so later passes can analyze dependencies.",
      "For (2 + 3) * (2 + 3), a tree has two addition nodes; a DAG may share that pure sum. The basic TAC emitter intentionally emits both before optimization.",
      "Sharing is unsafe when repeated operations have observable side effects or changed operands."
    ],
    "foundation": {
      "title": "Represent expressions as trees, DAGs and IR",
      "idea": "An expression tree records operator nesting. A DAG can share equivalent pure subexpressions when operands are unchanged. Linear IR names intermediate results so later passes can analyze dependencies.",
      "example": "For (2 + 3) * (2 + 3), a tree has two addition nodes; a DAG may share that pure sum. The basic TAC emitter intentionally emits both before optimization.",
      "terms": [
        "Temporary: an intermediate result name, independent of a physical register.",
        "Postfix: an operand-first representation with an operator after its arguments.",
        "Three-address code: linear instructions exposing simple operations and named intermediate results."
      ]
    },
    "compilerSpec": {
      "kind": "ir",
      "input": "(2 + 3) * (2 + 3)",
      "title": "Represent expressions as trees, DAGs and IR"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying represent expressions as trees, dags and ir, which warning prevents a wrong conclusion?",
        "options": [
          "Sharing is unsafe when repeated operations have observable side effects or changed operands.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input."
        ],
        "answer": 0,
        "explanation": "An expression tree records operator nesting. A DAG can share equivalent pure subexpressions when operands are unchanged. Linear IR names intermediate results so later passes can analyze dependencies. Sharing is unsafe when repeated operations have observable side effects or changed operands.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "With * above + and left-associative subtraction, what value does 4 + 5 * 6 synthesize?",
        "answer": 34,
        "tolerance": 0,
        "explanation": "Evaluate each child before its parent. Multiplication binds tighter; parentheses override precedence.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which postfix sequence represents (5 + 6) * 7?",
        "options": [
          "5 6 + 7 +",
          "5 6 + 7 *",
          "5 6 7 * +"
        ],
        "answer": 1,
        "explanation": "Postorder emits each operand subtree before its operator.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "A basic TAC emitter gives every binary operation in 15 - 6 - 2 one temporary and performs no optimization. How many temporary definitions are emitted?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count operator nodes, not operand occurrences or source characters.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 11.7,
        "text": "Hi everyone. Welcome to Go classes. In this lecture, we will study intermediate representations. In the last lecture, we have already seen what are the stages of a compiler. We have already seen the lexical analyzer, syntax analyzer, semantic analyzer. So these three stages we have already seen. Now, in this lecture, basically, we will study what is intermed"
      },
      {
        "time": 97.37,
        "text": "that will be intermediate representation, right? Yes or no? So you can see the output of front end that is your intermediate code or you can say intermediate representation. Now this intermediate code, this is the input for the backend. This is the input for the backend. What is your backend? The backend is basically what are the tasks of the backend? The ba"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 43,
        "file": "043. Recording - Lecture 3A - Intermediate Representatio.mp4",
        "completedAt": "{\"file\":\"043. Recording - Lecture 3A - Intermediate Representatio.mp4\",\"language\":\"en\",\"probability\":0.9462890625,\"processing_seconds\":156.24723625183105,\"device\":\"cuda\"}"
      }
    ],
    "start": 11.7,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ir",
      "objective": "Check this boundary: Sharing is unsafe when repeated operations have observable side effects or changed operands.",
      "why": "An expression tree records operator nesting. A DAG can share equivalent pure subexpressions when operands are unchanged. Linear IR names intermediate results so later passes can analyze dependencies.",
      "watchFor": "Sharing is unsafe when repeated operations have observable side effects or changed operands.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 132,
    "lecture": 44,
    "title": "Build three-address instructions · Understand the concept",
    "concept": "A basic TAC operation assigns one operator result to a destination using at most two explicit operands. More complex expressions become a sequence whose temporary names expose dependencies.",
    "teachingSteps": [
      "A basic TAC operation assigns one operator result to a destination using at most two explicit operands. More complex expressions become a sequence whose temporary names expose dependencies.",
      "For 2 + 3 * 4, write t1 = 3 * 4 followed by t2 = 2 + t1. The temporary is an abstract name, not necessarily a physical register.",
      "Three-address code does not mean every instruction literally has three operands; copies, branches and unary operations have different shapes."
    ],
    "foundation": {
      "title": "Build three-address instructions",
      "idea": "A basic TAC operation assigns one operator result to a destination using at most two explicit operands. More complex expressions become a sequence whose temporary names expose dependencies.",
      "example": "For 2 + 3 * 4, write t1 = 3 * 4 followed by t2 = 2 + t1. The temporary is an abstract name, not necessarily a physical register.",
      "terms": [
        "Temporary: an intermediate result name, independent of a physical register.",
        "Postfix: an operand-first representation with an operator after its arguments.",
        "Three-address code: linear instructions exposing simple operations and named intermediate results."
      ]
    },
    "compilerSpec": {
      "kind": "ir",
      "input": "2 + 3 * 4",
      "title": "Build three-address instructions"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains build three-address instructions?",
        "options": [
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "A basic TAC operation assigns one operator result to a destination using at most two explicit operands. More complex expressions become a sequence whose temporary names expose dependencies.",
          "A smaller representation is automatically equivalent, regardless of side effects."
        ],
        "answer": 2,
        "explanation": "A basic TAC operation assigns one operator result to a destination using at most two explicit operands. More complex expressions become a sequence whose temporary names expose dependencies. Three-address code does not mean every instruction literally has three operands; copies, branches and unary operations have different shapes.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "With * above + and left-associative subtraction, what value does 27 + 28 * 29 synthesize?",
        "answer": 839,
        "tolerance": 0,
        "explanation": "Evaluate each child before its parent. Multiplication binds tighter; parentheses override precedence.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which postfix sequence represents (28 + 29) * 30?",
        "options": [
          "28 29 + 30 *",
          "28 29 30 * +",
          "28 29 + 30 +"
        ],
        "answer": 0,
        "explanation": "Postorder emits each operand subtree before its operator.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "A basic TAC emitter gives every binary operation in 38 - 29 - 3 one temporary and performs no optimization. How many temporary definitions are emitted?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count operator nodes, not operand occurrences or source characters.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 20.72,
        "text": "Hi, everyone. Welcome to go classes. In this lecture, we will study the very important intermediate representation that is three address code. We have already seen that the front end of the compiler that will create an intermediate representation. Now this intermediate representation, it has many types. I can say many different type of intermediate represent"
      },
      {
        "time": 49.52,
        "text": "static assignment so basically many different type of intermediate representations are possible and the very important intermediate representation that is a three address code so in this lecture we will study this three address code which is a intermediate representation okay so let's start in short this three address code we will call it TAC three address c"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 44,
        "file": "044. Recording - Lecture 3B - Three Address Code.mp4",
        "completedAt": "{\"file\":\"044. Recording - Lecture 3B - Three Address Code.mp4\",\"language\":\"en\",\"probability\":0.9150390625,\"processing_seconds\":143.86345219612122,\"device\":\"cuda\"}"
      }
    ],
    "start": 20.72,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ir",
      "objective": "Explain the rule: A basic TAC operation assigns one operator result to a destination using at most two explicit operands. More complex expressions become a sequence whose temporary names expose dependencies.",
      "why": "A basic TAC operation assigns one operator result to a destination using at most two explicit operands. More complex expressions become a sequence whose temporary names expose dependencies.",
      "watchFor": "Three-address code does not mean every instruction literally has three operands; copies, branches and unary operations have different shapes.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 133,
    "lecture": 44,
    "title": "Build three-address instructions · Trace and experiment",
    "concept": "For 2 + 3 * 4, write t1 = 3 * 4 followed by t2 = 2 + t1. The temporary is an abstract name, not necessarily a physical register.",
    "teachingSteps": [
      "A basic TAC operation assigns one operator result to a destination using at most two explicit operands. More complex expressions become a sequence whose temporary names expose dependencies.",
      "For 2 + 3 * 4, write t1 = 3 * 4 followed by t2 = 2 + t1. The temporary is an abstract name, not necessarily a physical register.",
      "Three-address code does not mean every instruction literally has three operands; copies, branches and unary operations have different shapes."
    ],
    "foundation": {
      "title": "Build three-address instructions",
      "idea": "A basic TAC operation assigns one operator result to a destination using at most two explicit operands. More complex expressions become a sequence whose temporary names expose dependencies.",
      "example": "For 2 + 3 * 4, write t1 = 3 * 4 followed by t2 = 2 + t1. The temporary is an abstract name, not necessarily a physical register.",
      "terms": [
        "Temporary: an intermediate result name, independent of a physical register.",
        "Postfix: an operand-first representation with an operator after its arguments.",
        "Three-address code: linear instructions exposing simple operations and named intermediate results."
      ]
    },
    "compilerSpec": {
      "kind": "ir",
      "input": "2 + 3 * 4",
      "title": "Build three-address instructions"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For 2 + 3 * 4, write t1 = 3 * 4 followed by t2 = 2 + t1. The temporary is an abstract name, not necessarily a physical register.",
        "options": [
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "For 2 + 3 * 4, write t1 = 3 * 4 followed by t2 = 2 + t1. The temporary is an abstract name, not necessarily a physical register.",
          "A smaller representation is automatically equivalent, regardless of side effects."
        ],
        "answer": 2,
        "explanation": "A basic TAC operation assigns one operator result to a destination using at most two explicit operands. More complex expressions become a sequence whose temporary names expose dependencies. Three-address code does not mean every instruction literally has three operands; copies, branches and unary operations have different shapes.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "With * above + and left-associative subtraction, what value does 7 + 8 * 9 synthesize?",
        "answer": 79,
        "tolerance": 0,
        "explanation": "Evaluate each child before its parent. Multiplication binds tighter; parentheses override precedence.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which postfix sequence represents (8 + 9) * 10?",
        "options": [
          "8 9 + 10 +",
          "8 9 + 10 *",
          "8 9 10 * +"
        ],
        "answer": 1,
        "explanation": "Postorder emits each operand subtree before its operator.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "A basic TAC emitter gives every binary operation in 18 - 9 - 4 one temporary and performs no optimization. How many temporary definitions are emitted?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count operator nodes, not operand occurrences or source characters.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 20.72,
        "text": "Hi, everyone. Welcome to go classes. In this lecture, we will study the very important intermediate representation that is three address code. We have already seen that the front end of the compiler that will create an intermediate representation. Now this intermediate representation, it has many types. I can say many different type of intermediate represent"
      },
      {
        "time": 49.52,
        "text": "static assignment so basically many different type of intermediate representations are possible and the very important intermediate representation that is a three address code so in this lecture we will study this three address code which is a intermediate representation okay so let's start in short this three address code we will call it TAC three address c"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 44,
        "file": "044. Recording - Lecture 3B - Three Address Code.mp4",
        "completedAt": "{\"file\":\"044. Recording - Lecture 3B - Three Address Code.mp4\",\"language\":\"en\",\"probability\":0.9150390625,\"processing_seconds\":143.86345219612122,\"device\":\"cuda\"}"
      }
    ],
    "start": 20.72,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ir",
      "objective": "Trace this example: For 2 + 3 * 4, write t1 = 3 * 4 followed by t2 = 2 + t1. The temporary is an abstract name, not necessarily a physical register.",
      "why": "A basic TAC operation assigns one operator result to a destination using at most two explicit operands. More complex expressions become a sequence whose temporary names expose dependencies.",
      "watchFor": "Three-address code does not mean every instruction literally has three operands; copies, branches and unary operations have different shapes.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 134,
    "lecture": 44,
    "title": "Build three-address instructions · Apply and challenge",
    "concept": "Three-address code does not mean every instruction literally has three operands; copies, branches and unary operations have different shapes.",
    "teachingSteps": [
      "A basic TAC operation assigns one operator result to a destination using at most two explicit operands. More complex expressions become a sequence whose temporary names expose dependencies.",
      "For 2 + 3 * 4, write t1 = 3 * 4 followed by t2 = 2 + t1. The temporary is an abstract name, not necessarily a physical register.",
      "Three-address code does not mean every instruction literally has three operands; copies, branches and unary operations have different shapes."
    ],
    "foundation": {
      "title": "Build three-address instructions",
      "idea": "A basic TAC operation assigns one operator result to a destination using at most two explicit operands. More complex expressions become a sequence whose temporary names expose dependencies.",
      "example": "For 2 + 3 * 4, write t1 = 3 * 4 followed by t2 = 2 + t1. The temporary is an abstract name, not necessarily a physical register.",
      "terms": [
        "Temporary: an intermediate result name, independent of a physical register.",
        "Postfix: an operand-first representation with an operator after its arguments.",
        "Three-address code: linear instructions exposing simple operations and named intermediate results."
      ]
    },
    "compilerSpec": {
      "kind": "ir",
      "input": "2 + 3 * 4",
      "title": "Build three-address instructions"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying build three-address instructions, which warning prevents a wrong conclusion?",
        "options": [
          "One successful example proves every rewrite safe for every language and input.",
          "Three-address code does not mean every instruction literally has three operands; copies, branches and unary operations have different shapes.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter."
        ],
        "answer": 1,
        "explanation": "A basic TAC operation assigns one operator result to a destination using at most two explicit operands. More complex expressions become a sequence whose temporary names expose dependencies. Three-address code does not mean every instruction literally has three operands; copies, branches and unary operations have different shapes.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "With * above + and left-associative subtraction, what value does 10 + 11 * 12 synthesize?",
        "answer": 142,
        "tolerance": 0,
        "explanation": "Evaluate each child before its parent. Multiplication binds tighter; parentheses override precedence.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Which postfix sequence represents (11 + 12) * 13?",
        "options": [
          "11 12 13 * +",
          "11 12 + 13 +",
          "11 12 + 13 *"
        ],
        "answer": 2,
        "explanation": "Postorder emits each operand subtree before its operator.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "A basic TAC emitter gives every binary operation in 21 - 12 - 4 one temporary and performs no optimization. How many temporary definitions are emitted?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "Count operator nodes, not operand occurrences or source characters.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 20.72,
        "text": "Hi, everyone. Welcome to go classes. In this lecture, we will study the very important intermediate representation that is three address code. We have already seen that the front end of the compiler that will create an intermediate representation. Now this intermediate representation, it has many types. I can say many different type of intermediate represent"
      },
      {
        "time": 49.52,
        "text": "static assignment so basically many different type of intermediate representations are possible and the very important intermediate representation that is a three address code so in this lecture we will study this three address code which is a intermediate representation okay so let's start in short this three address code we will call it TAC three address c"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 44,
        "file": "044. Recording - Lecture 3B - Three Address Code.mp4",
        "completedAt": "{\"file\":\"044. Recording - Lecture 3B - Three Address Code.mp4\",\"language\":\"en\",\"probability\":0.9150390625,\"processing_seconds\":143.86345219612122,\"device\":\"cuda\"}"
      }
    ],
    "start": 20.72,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ir",
      "objective": "Check this boundary: Three-address code does not mean every instruction literally has three operands; copies, branches and unary operations have different shapes.",
      "why": "A basic TAC operation assigns one operator result to a destination using at most two explicit operands. More complex expressions become a sequence whose temporary names expose dependencies.",
      "watchFor": "Three-address code does not mean every instruction literally has three operands; copies, branches and unary operations have different shapes.",
      "experiment": "Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress."
    }
  },
  {
    "id": 135,
    "lecture": 45,
    "title": "Rename definitions with SSA and φ · Understand the concept",
    "concept": "Static single assignment gives each named version exactly one static definition. At a control-flow join, a φ instruction chooses the version from the edge actually taken.",
    "teachingSteps": [
      "Static single assignment gives each named version exactly one static definition. At a control-flow join, a φ instruction chooses the version from the edge actually taken.",
      "If B1 defines x1 = 2 and B2 defines x2 = 5, B3 can use x3 = φ(B1:x1, B2:x2). It selects 2 or 5, never their sum.",
      "Static single definition does not mean the instruction executes only once; a loop instruction can execute repeatedly at runtime."
    ],
    "foundation": {
      "title": "Rename definitions with SSA and φ",
      "idea": "Static single assignment gives each named version exactly one static definition. At a control-flow join, a φ instruction chooses the version from the edge actually taken.",
      "example": "If B1 defines x1 = 2 and B2 defines x2 = 5, B3 can use x3 = φ(B1:x1, B2:x2). It selects 2 or 5, never their sum.",
      "terms": [
        "Definition: a point that assigns a value to a name.",
        "SSA version: a name having exactly one static definition.",
        "Phi (φ): a join operation selecting the value associated with the incoming control-flow edge."
      ]
    },
    "compilerSpec": {
      "kind": "ssa",
      "parameter": 2,
      "title": "Rename definitions with SSA and φ"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains rename definitions with ssa and φ?",
        "options": [
          "Static single assignment gives each named version exactly one static definition. At a control-flow join, a φ instruction chooses the version from the edge actually taken.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input."
        ],
        "answer": 0,
        "explanation": "Static single assignment gives each named version exactly one static definition. At a control-flow join, a φ instruction chooses the version from the edge actually taken. Static single definition does not mean the instruction executes only once; a loop instruction can execute repeatedly at runtime.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "The left edge defines x1=25; the right defines x2=28. At the join x3=φ(left:x1,right:x2). Arriving via right, what is x3?",
        "answer": 28,
        "tolerance": 0,
        "explanation": "φ selects the argument attached to the actual incoming edge.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For x3=φ(left:26,right:29) and y1=x3+27, what is y1 after taking the left edge?",
        "answer": 53,
        "tolerance": 0,
        "explanation": "Select the incoming value before computing the downstream use.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "An SSA source variable x is assigned at 27 distinct static definition sites. Before any φ definitions, how many unique x-version names are needed?",
        "answer": 27,
        "tolerance": 0,
        "explanation": "Each static assignment gets a distinct version, regardless of how many runtime iterations execute it.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 1038.9,
        "text": "Yes or no? Conversion to SSA is very easy. What do you need to do? Assign to a phrase variable every time. Okay, yes or no? Just use a new variable for every assignment. For every assignment, use a new variable. Okay, yes or no? Just rename the solution, the conversion. For conversion, all you have to do, just use renaming. Okay, you can use, you can do the "
      },
      {
        "time": 2993.93,
        "text": "this variable P1 you are assigning more than once so this is not even in SSA so this is wrong what about option B what is the problem with option B what is the problem with option B is there any problem with option B see option B is saying P3 no problem okay you can rename this P3 no problem I can call it P3 okay P3 is equal to A minus B no problem you can c"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 45,
        "file": "045_Recording_Lecture_3D_Static_Single_Assignment_Form_S.mp4",
        "completedAt": "{\"file\":\"045_Recording_Lecture_3D_Static_Single_Assignment_Form_S.mp4\",\"language\":\"en\",\"probability\":0.84326171875,\"processing_seconds\":238.88006138801575,\"device\":\"cuda\"}"
      }
    ],
    "start": 1038.9,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ssa",
      "objective": "Explain the rule: Static single assignment gives each named version exactly one static definition. At a control-flow join, a φ instruction chooses the version from the edge actually taken.",
      "why": "Static single assignment gives each named version exactly one static definition. At a control-flow join, a φ instruction chooses the version from the edge actually taken.",
      "watchFor": "Static single definition does not mean the instruction executes only once; a loop instruction can execute repeatedly at runtime.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 136,
    "lecture": 45,
    "title": "Rename definitions with SSA and φ · Trace and experiment",
    "concept": "If B1 defines x1 = 2 and B2 defines x2 = 5, B3 can use x3 = φ(B1:x1, B2:x2). It selects 2 or 5, never their sum.",
    "teachingSteps": [
      "Static single assignment gives each named version exactly one static definition. At a control-flow join, a φ instruction chooses the version from the edge actually taken.",
      "If B1 defines x1 = 2 and B2 defines x2 = 5, B3 can use x3 = φ(B1:x1, B2:x2). It selects 2 or 5, never their sum.",
      "Static single definition does not mean the instruction executes only once; a loop instruction can execute repeatedly at runtime."
    ],
    "foundation": {
      "title": "Rename definitions with SSA and φ",
      "idea": "Static single assignment gives each named version exactly one static definition. At a control-flow join, a φ instruction chooses the version from the edge actually taken.",
      "example": "If B1 defines x1 = 2 and B2 defines x2 = 5, B3 can use x3 = φ(B1:x1, B2:x2). It selects 2 or 5, never their sum.",
      "terms": [
        "Definition: a point that assigns a value to a name.",
        "SSA version: a name having exactly one static definition.",
        "Phi (φ): a join operation selecting the value associated with the incoming control-flow edge."
      ]
    },
    "compilerSpec": {
      "kind": "ssa",
      "parameter": 2,
      "title": "Rename definitions with SSA and φ"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: If B1 defines x1 = 2 and B2 defines x2 = 5, B3 can use x3 = φ(B1:x1, B2:x2). It selects 2 or 5, never their sum.",
        "options": [
          "If B1 defines x1 = 2 and B2 defines x2 = 5, B3 can use x3 = φ(B1:x1, B2:x2). It selects 2 or 5, never their sum.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input."
        ],
        "answer": 0,
        "explanation": "Static single assignment gives each named version exactly one static definition. At a control-flow join, a φ instruction chooses the version from the edge actually taken. Static single definition does not mean the instruction executes only once; a loop instruction can execute repeatedly at runtime.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "The left edge defines x1=5; the right defines x2=8. At the join x3=φ(left:x1,right:x2). Arriving via left, what is x3?",
        "answer": 5,
        "tolerance": 0,
        "explanation": "φ selects the argument attached to the actual incoming edge.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For x3=φ(left:6,right:9) and y1=x3+7, what is y1 after taking the right edge?",
        "answer": 16,
        "tolerance": 0,
        "explanation": "Select the incoming value before computing the downstream use.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "An SSA source variable x is assigned at 7 distinct static definition sites. Before any φ definitions, how many unique x-version names are needed?",
        "answer": 7,
        "tolerance": 0,
        "explanation": "Each static assignment gets a distinct version, regardless of how many runtime iterations execute it.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 1038.9,
        "text": "Yes or no? Conversion to SSA is very easy. What do you need to do? Assign to a phrase variable every time. Okay, yes or no? Just use a new variable for every assignment. For every assignment, use a new variable. Okay, yes or no? Just rename the solution, the conversion. For conversion, all you have to do, just use renaming. Okay, you can use, you can do the "
      },
      {
        "time": 2993.93,
        "text": "this variable P1 you are assigning more than once so this is not even in SSA so this is wrong what about option B what is the problem with option B what is the problem with option B is there any problem with option B see option B is saying P3 no problem okay you can rename this P3 no problem I can call it P3 okay P3 is equal to A minus B no problem you can c"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 45,
        "file": "045_Recording_Lecture_3D_Static_Single_Assignment_Form_S.mp4",
        "completedAt": "{\"file\":\"045_Recording_Lecture_3D_Static_Single_Assignment_Form_S.mp4\",\"language\":\"en\",\"probability\":0.84326171875,\"processing_seconds\":238.88006138801575,\"device\":\"cuda\"}"
      }
    ],
    "start": 1038.9,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ssa",
      "objective": "Trace this example: If B1 defines x1 = 2 and B2 defines x2 = 5, B3 can use x3 = φ(B1:x1, B2:x2). It selects 2 or 5, never their sum.",
      "why": "Static single assignment gives each named version exactly one static definition. At a control-flow join, a φ instruction chooses the version from the edge actually taken.",
      "watchFor": "Static single definition does not mean the instruction executes only once; a loop instruction can execute repeatedly at runtime.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 137,
    "lecture": 45,
    "title": "Rename definitions with SSA and φ · Apply and challenge",
    "concept": "Static single definition does not mean the instruction executes only once; a loop instruction can execute repeatedly at runtime.",
    "teachingSteps": [
      "Static single assignment gives each named version exactly one static definition. At a control-flow join, a φ instruction chooses the version from the edge actually taken.",
      "If B1 defines x1 = 2 and B2 defines x2 = 5, B3 can use x3 = φ(B1:x1, B2:x2). It selects 2 or 5, never their sum.",
      "Static single definition does not mean the instruction executes only once; a loop instruction can execute repeatedly at runtime."
    ],
    "foundation": {
      "title": "Rename definitions with SSA and φ",
      "idea": "Static single assignment gives each named version exactly one static definition. At a control-flow join, a φ instruction chooses the version from the edge actually taken.",
      "example": "If B1 defines x1 = 2 and B2 defines x2 = 5, B3 can use x3 = φ(B1:x1, B2:x2). It selects 2 or 5, never their sum.",
      "terms": [
        "Definition: a point that assigns a value to a name.",
        "SSA version: a name having exactly one static definition.",
        "Phi (φ): a join operation selecting the value associated with the incoming control-flow edge."
      ]
    },
    "compilerSpec": {
      "kind": "ssa",
      "parameter": 2,
      "title": "Rename definitions with SSA and φ"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying rename definitions with ssa and φ, which warning prevents a wrong conclusion?",
        "options": [
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "Static single definition does not mean the instruction executes only once; a loop instruction can execute repeatedly at runtime."
        ],
        "answer": 3,
        "explanation": "Static single assignment gives each named version exactly one static definition. At a control-flow join, a φ instruction chooses the version from the edge actually taken. Static single definition does not mean the instruction executes only once; a loop instruction can execute repeatedly at runtime.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "The left edge defines x1=16; the right defines x2=19. At the join x3=φ(left:x1,right:x2). Arriving via right, what is x3?",
        "answer": 19,
        "tolerance": 0,
        "explanation": "φ selects the argument attached to the actual incoming edge.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "For x3=φ(left:17,right:20) and y1=x3+18, what is y1 after taking the left edge?",
        "answer": 35,
        "tolerance": 0,
        "explanation": "Select the incoming value before computing the downstream use.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "An SSA source variable x is assigned at 18 distinct static definition sites. Before any φ definitions, how many unique x-version names are needed?",
        "answer": 18,
        "tolerance": 0,
        "explanation": "Each static assignment gets a distinct version, regardless of how many runtime iterations execute it.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 1038.9,
        "text": "Yes or no? Conversion to SSA is very easy. What do you need to do? Assign to a phrase variable every time. Okay, yes or no? Just use a new variable for every assignment. For every assignment, use a new variable. Okay, yes or no? Just rename the solution, the conversion. For conversion, all you have to do, just use renaming. Okay, you can use, you can do the "
      },
      {
        "time": 2993.93,
        "text": "this variable P1 you are assigning more than once so this is not even in SSA so this is wrong what about option B what is the problem with option B what is the problem with option B is there any problem with option B see option B is saying P3 no problem okay you can rename this P3 no problem I can call it P3 okay P3 is equal to A minus B no problem you can c"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 45,
        "file": "045_Recording_Lecture_3D_Static_Single_Assignment_Form_S.mp4",
        "completedAt": "{\"file\":\"045_Recording_Lecture_3D_Static_Single_Assignment_Form_S.mp4\",\"language\":\"en\",\"probability\":0.84326171875,\"processing_seconds\":238.88006138801575,\"device\":\"cuda\"}"
      }
    ],
    "start": 1038.9,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "ssa",
      "objective": "Check this boundary: Static single definition does not mean the instruction executes only once; a loop instruction can execute repeatedly at runtime.",
      "why": "Static single assignment gives each named version exactly one static definition. At a control-flow join, a φ instruction chooses the version from the edge actually taken.",
      "watchFor": "Static single definition does not mean the instruction executes only once; a loop instruction can execute repeatedly at runtime.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 138,
    "lecture": 46,
    "title": "Build basic blocks and a control-flow graph · Understand the concept",
    "concept": "Leaders are the first instruction, every jump target, and an instruction following a control transfer. Each maximal basic block has one entry and transfers outside only at its end. CFG edges record possible successors.",
    "teachingSteps": [
      "Leaders are the first instruction, every jump target, and an instruction following a control transfer. Each maximal basic block has one entry and transfers outside only at its end. CFG edges record possible successors.",
      "A conditional branch has a target edge and a fall-through edge. An unconditional goto has only its target; return exits.",
      "CFG here means control-flow graph, distinct from context-free grammar in parsing discussions."
    ],
    "foundation": {
      "title": "Build basic blocks and a control-flow graph",
      "idea": "Leaders are the first instruction, every jump target, and an instruction following a control transfer. Each maximal basic block has one entry and transfers outside only at its end. CFG edges record possible successors.",
      "example": "A conditional branch has a target edge and a fall-through edge. An unconditional goto has only its target; return exits.",
      "terms": [
        "Basic block: a maximal straight-line instruction sequence with one entry.",
        "Leader: an instruction that begins a basic block.",
        "Successor: a block execution may reach immediately after the current block."
      ]
    },
    "compilerSpec": {
      "kind": "cfg",
      "title": "Build basic blocks and a control-flow graph"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains build basic blocks and a control-flow graph?",
        "options": [
          "Leaders are the first instruction, every jump target, and an instruction following a control transfer. Each maximal basic block has one entry and transfers outside only at its end. CFG edges record possible successors.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input."
        ],
        "answer": 0,
        "explanation": "Leaders are the first instruction, every jump target, and an instruction following a control transfer. Each maximal basic block has one entry and transfers outside only at its end. CFG edges record possible successors. CFG here means control-flow graph, distinct from context-free grammar in parsing discussions.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Partition this TAC into maximal basic blocks: 1: x = 31; 2: if test1703 goto 5; 3: x = x + 1; 4: goto 6; 5: x = x + 2; 6: return x. How many blocks are there?",
        "answer": 4,
        "tolerance": 0,
        "explanation": "Leaders are the first instruction, branch targets, and instructions following transfers.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In TAC 1: x = 32; 2: if test1704 goto 5; 3: x = x + 1; 4: goto 6; 5: x = x + 2; 6: return x, how many successor blocks does the block ending at line 2 have?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "A conditional branch retains target and fall-through successors.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In TAC 1: x = 2; 2: if test1705 goto 5; 3: x = x + 1; 4: goto 6; 5: x = x + 2; 6: return x, how many total directed block-to-block edges are there?",
        "answer": 4,
        "tolerance": 0,
        "explanation": "Count each distinct possible successor edge; return exits the graph.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 9.55,
        "text": "Hi everyone. Welcome to Go classes. So in this lecture, we will study next intermediate representation, which is control flow graph. In short, we will call it CFG or you can call it flow graph. So either we can call it control flow graph or you can simply call it flow graph. Okay. In short, you can call it CFG. So, so far we have seen different, different in"
      },
      {
        "time": 44.33,
        "text": "we have seen some intermediate representations we have seen okay so intermediate representations so for example we have seen three address code we have seen TAC that means three address code another that we have seen that is static single assignment yes or no so these two we have already seen now today we will study another very important that is control flo"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 46,
        "file": "046. Recording - Lecture 3D - Control Flow Graph CFG.mp4",
        "completedAt": "{\"file\":\"046. Recording - Lecture 3D - Control Flow Graph CFG.mp4\",\"language\":\"en\",\"probability\":0.79638671875,\"processing_seconds\":226.99264812469482,\"device\":\"cuda\"}"
      }
    ],
    "start": 9.55,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "cfg",
      "objective": "Explain the rule: Leaders are the first instruction, every jump target, and an instruction following a control transfer. Each maximal basic block has one entry and transfers outside only at its end. CFG edges record possible successors.",
      "why": "Leaders are the first instruction, every jump target, and an instruction following a control transfer. Each maximal basic block has one entry and transfers outside only at its end. CFG edges record possible successors.",
      "watchFor": "CFG here means control-flow graph, distinct from context-free grammar in parsing discussions.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 139,
    "lecture": 46,
    "title": "Build basic blocks and a control-flow graph · Trace and experiment",
    "concept": "A conditional branch has a target edge and a fall-through edge. An unconditional goto has only its target; return exits.",
    "teachingSteps": [
      "Leaders are the first instruction, every jump target, and an instruction following a control transfer. Each maximal basic block has one entry and transfers outside only at its end. CFG edges record possible successors.",
      "A conditional branch has a target edge and a fall-through edge. An unconditional goto has only its target; return exits.",
      "CFG here means control-flow graph, distinct from context-free grammar in parsing discussions."
    ],
    "foundation": {
      "title": "Build basic blocks and a control-flow graph",
      "idea": "Leaders are the first instruction, every jump target, and an instruction following a control transfer. Each maximal basic block has one entry and transfers outside only at its end. CFG edges record possible successors.",
      "example": "A conditional branch has a target edge and a fall-through edge. An unconditional goto has only its target; return exits.",
      "terms": [
        "Basic block: a maximal straight-line instruction sequence with one entry.",
        "Leader: an instruction that begins a basic block.",
        "Successor: a block execution may reach immediately after the current block."
      ]
    },
    "compilerSpec": {
      "kind": "cfg",
      "title": "Build basic blocks and a control-flow graph"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: A conditional branch has a target edge and a fall-through edge. An unconditional goto has only its target; return exits.",
        "options": [
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "A conditional branch has a target edge and a fall-through edge. An unconditional goto has only its target; return exits."
        ],
        "answer": 3,
        "explanation": "Leaders are the first instruction, every jump target, and an instruction following a control transfer. Each maximal basic block has one entry and transfers outside only at its end. CFG edges record possible successors. CFG here means control-flow graph, distinct from context-free grammar in parsing discussions.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Partition this TAC into maximal basic blocks: 1: x = 11; 2: if test1714 goto 5; 3: x = x + 1; 4: goto 6; 5: x = x + 2; 6: return x. How many blocks are there?",
        "answer": 4,
        "tolerance": 0,
        "explanation": "Leaders are the first instruction, branch targets, and instructions following transfers.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In TAC 1: x = 12; 2: if test1715 goto 5; 3: x = x + 1; 4: goto 6; 5: x = x + 2; 6: return x, how many successor blocks does the block ending at line 2 have?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "A conditional branch retains target and fall-through successors.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In TAC 1: x = 13; 2: if test1716 goto 5; 3: x = x + 1; 4: goto 6; 5: x = x + 2; 6: return x, how many total directed block-to-block edges are there?",
        "answer": 4,
        "tolerance": 0,
        "explanation": "Count each distinct possible successor edge; return exits the graph.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 9.55,
        "text": "Hi everyone. Welcome to Go classes. So in this lecture, we will study next intermediate representation, which is control flow graph. In short, we will call it CFG or you can call it flow graph. So either we can call it control flow graph or you can simply call it flow graph. Okay. In short, you can call it CFG. So, so far we have seen different, different in"
      },
      {
        "time": 44.33,
        "text": "we have seen some intermediate representations we have seen okay so intermediate representations so for example we have seen three address code we have seen TAC that means three address code another that we have seen that is static single assignment yes or no so these two we have already seen now today we will study another very important that is control flo"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 46,
        "file": "046. Recording - Lecture 3D - Control Flow Graph CFG.mp4",
        "completedAt": "{\"file\":\"046. Recording - Lecture 3D - Control Flow Graph CFG.mp4\",\"language\":\"en\",\"probability\":0.79638671875,\"processing_seconds\":226.99264812469482,\"device\":\"cuda\"}"
      }
    ],
    "start": 9.55,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "cfg",
      "objective": "Trace this example: A conditional branch has a target edge and a fall-through edge. An unconditional goto has only its target; return exits.",
      "why": "Leaders are the first instruction, every jump target, and an instruction following a control transfer. Each maximal basic block has one entry and transfers outside only at its end. CFG edges record possible successors.",
      "watchFor": "CFG here means control-flow graph, distinct from context-free grammar in parsing discussions.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 140,
    "lecture": 46,
    "title": "Build basic blocks and a control-flow graph · Apply and challenge",
    "concept": "CFG here means control-flow graph, distinct from context-free grammar in parsing discussions.",
    "teachingSteps": [
      "Leaders are the first instruction, every jump target, and an instruction following a control transfer. Each maximal basic block has one entry and transfers outside only at its end. CFG edges record possible successors.",
      "A conditional branch has a target edge and a fall-through edge. An unconditional goto has only its target; return exits.",
      "CFG here means control-flow graph, distinct from context-free grammar in parsing discussions."
    ],
    "foundation": {
      "title": "Build basic blocks and a control-flow graph",
      "idea": "Leaders are the first instruction, every jump target, and an instruction following a control transfer. Each maximal basic block has one entry and transfers outside only at its end. CFG edges record possible successors.",
      "example": "A conditional branch has a target edge and a fall-through edge. An unconditional goto has only its target; return exits.",
      "terms": [
        "Basic block: a maximal straight-line instruction sequence with one entry.",
        "Leader: an instruction that begins a basic block.",
        "Successor: a block execution may reach immediately after the current block."
      ]
    },
    "compilerSpec": {
      "kind": "cfg",
      "title": "Build basic blocks and a control-flow graph"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying build basic blocks and a control-flow graph, which warning prevents a wrong conclusion?",
        "options": [
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "CFG here means control-flow graph, distinct from context-free grammar in parsing discussions."
        ],
        "answer": 3,
        "explanation": "Leaders are the first instruction, every jump target, and an instruction following a control transfer. Each maximal basic block has one entry and transfers outside only at its end. CFG edges record possible successors. CFG here means control-flow graph, distinct from context-free grammar in parsing discussions.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Partition this TAC into maximal basic blocks: 1: x = 22; 2: if test1725 goto 5; 3: x = x + 1; 4: goto 6; 5: x = x + 2; 6: return x. How many blocks are there?",
        "answer": 4,
        "tolerance": 0,
        "explanation": "Leaders are the first instruction, branch targets, and instructions following transfers.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In TAC 1: x = 23; 2: if test1726 goto 5; 3: x = x + 1; 4: goto 6; 5: x = x + 2; 6: return x, how many successor blocks does the block ending at line 2 have?",
        "answer": 2,
        "tolerance": 0,
        "explanation": "A conditional branch retains target and fall-through successors.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In TAC 1: x = 24; 2: if test1727 goto 5; 3: x = x + 1; 4: goto 6; 5: x = x + 2; 6: return x, how many total directed block-to-block edges are there?",
        "answer": 4,
        "tolerance": 0,
        "explanation": "Count each distinct possible successor edge; return exits the graph.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 9.55,
        "text": "Hi everyone. Welcome to Go classes. So in this lecture, we will study next intermediate representation, which is control flow graph. In short, we will call it CFG or you can call it flow graph. So either we can call it control flow graph or you can simply call it flow graph. Okay. In short, you can call it CFG. So, so far we have seen different, different in"
      },
      {
        "time": 44.33,
        "text": "we have seen some intermediate representations we have seen okay so intermediate representations so for example we have seen three address code we have seen TAC that means three address code another that we have seen that is static single assignment yes or no so these two we have already seen now today we will study another very important that is control flo"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 46,
        "file": "046. Recording - Lecture 3D - Control Flow Graph CFG.mp4",
        "completedAt": "{\"file\":\"046. Recording - Lecture 3D - Control Flow Graph CFG.mp4\",\"language\":\"en\",\"probability\":0.79638671875,\"processing_seconds\":226.99264812469482,\"device\":\"cuda\"}"
      }
    ],
    "start": 9.55,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "cfg",
      "objective": "Check this boundary: CFG here means control-flow graph, distinct from context-free grammar in parsing discussions.",
      "why": "Leaders are the first instruction, every jump target, and an instruction following a control transfer. Each maximal basic block has one entry and transfers outside only at its end. CFG edges record possible successors.",
      "watchFor": "CFG here means control-flow graph, distinct from context-free grammar in parsing discussions.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 141,
    "lecture": 47,
    "title": "Optimize only when behavior is preserved · Understand the concept",
    "concept": "An optimization needs a semantic justification: fold known pure constants, reuse a common expression only while its operands remain unchanged, or remove a write whose value is never observed.",
    "teachingSteps": [
      "An optimization needs a semantic justification: fold known pure constants, reuse a common expression only while its operands remain unchanged, or remove a write whose value is never observed.",
      "If t = a + b and u = a + b have no intervening operand changes or side effects, u can reuse t. An unused call cannot be removed merely because its return value is ignored.",
      "Side effects, aliasing, exceptions and floating-point behavior can invalidate arithmetic-looking rewrites."
    ],
    "foundation": {
      "title": "Optimize only when behavior is preserved",
      "idea": "An optimization needs a semantic justification: fold known pure constants, reuse a common expression only while its operands remain unchanged, or remove a write whose value is never observed.",
      "example": "If t = a + b and u = a + b have no intervening operand changes or side effects, u can reuse t. An unused call cannot be removed merely because its return value is ignored.",
      "terms": [
        "Pure operation: a computation with no observable side effect under the stated model.",
        "Dead write: an assignment whose stored value is never read.",
        "Common subexpression: a repeated expression with unchanged operand values."
      ]
    },
    "compilerSpec": {
      "kind": "optimize",
      "parameter": 3,
      "title": "Optimize only when behavior is preserved"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains optimize only when behavior is preserved?",
        "options": [
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "An optimization needs a semantic justification: fold known pure constants, reuse a common expression only while its operands remain unchanged, or remove a write whose value is never observed."
        ],
        "answer": 3,
        "explanation": "An optimization needs a semantic justification: fold known pure constants, reuse a common expression only while its operands remain unchanged, or remove a write whose value is never observed. Side effects, aliasing, exceptions and floating-point behavior can invalidate arithmetic-looking rewrites.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In a pure integer block, k=6*8. What constant can replace that multiplication?",
        "answer": 48,
        "tolerance": 0,
        "explanation": "Both operands are literal integers and the product stays within the stated exact domain.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Pure block: t=a+b; a=7; u=a+b. May u always reuse t?",
        "options": [
          "Yes; the spelling a+b is unchanged.",
          "Yes; addition results never depend on assignments.",
          "No; a changed before the second computation."
        ],
        "answer": 2,
        "explanation": "A common expression requires unchanged operand values, not just identical source spelling.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Pure scalar block: x=8; x=9; return x. How many assignments can be deleted because their written value is never read?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Only the first x assignment is overwritten without a read; the returned second value remains observable.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 63.1,
        "text": "This is wrong. This is correct. Optimization should not change. Optimization should not change the meaning, the behavior, the semantics. Optimization simply means improvement. So this you can replace with this. This is improvement. You don't have to add. Okay, this is improvement. There is no problem here. But here there is a problem. Similarly, my question "
      },
      {
        "time": 527.46,
        "text": "so that you don't have to call this function again and again okay you don't have to call this function again and again is this point clear to everyone tell me okay so this is the point this is the whole point so this is the code motion code motion means if some if something is not changing then you can take it out okay now is this optimization correct tell m"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 47,
        "file": "047. Lecture 4 - Code Optimization - Introduction.mp4",
        "completedAt": "{\"file\":\"047. Lecture 4 - Code Optimization - Introduction.mp4\",\"language\":\"en\",\"probability\":0.89111328125,\"processing_seconds\":42.03263187408447,\"device\":\"cuda\"}"
      }
    ],
    "start": 63.1,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "optimize",
      "objective": "Explain the rule: An optimization needs a semantic justification: fold known pure constants, reuse a common expression only while its operands remain unchanged, or remove a write whose value is never observed.",
      "why": "An optimization needs a semantic justification: fold known pure constants, reuse a common expression only while its operands remain unchanged, or remove a write whose value is never observed.",
      "watchFor": "Side effects, aliasing, exceptions and floating-point behavior can invalidate arithmetic-looking rewrites.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 142,
    "lecture": 47,
    "title": "Optimize only when behavior is preserved · Trace and experiment",
    "concept": "If t = a + b and u = a + b have no intervening operand changes or side effects, u can reuse t. An unused call cannot be removed merely because its return value is ignored.",
    "teachingSteps": [
      "An optimization needs a semantic justification: fold known pure constants, reuse a common expression only while its operands remain unchanged, or remove a write whose value is never observed.",
      "If t = a + b and u = a + b have no intervening operand changes or side effects, u can reuse t. An unused call cannot be removed merely because its return value is ignored.",
      "Side effects, aliasing, exceptions and floating-point behavior can invalidate arithmetic-looking rewrites."
    ],
    "foundation": {
      "title": "Optimize only when behavior is preserved",
      "idea": "An optimization needs a semantic justification: fold known pure constants, reuse a common expression only while its operands remain unchanged, or remove a write whose value is never observed.",
      "example": "If t = a + b and u = a + b have no intervening operand changes or side effects, u can reuse t. An unused call cannot be removed merely because its return value is ignored.",
      "terms": [
        "Pure operation: a computation with no observable side effect under the stated model.",
        "Dead write: an assignment whose stored value is never read.",
        "Common subexpression: a repeated expression with unchanged operand values."
      ]
    },
    "compilerSpec": {
      "kind": "optimize",
      "parameter": 3,
      "title": "Optimize only when behavior is preserved"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: If t = a + b and u = a + b have no intervening operand changes or side effects, u can reuse t. An unused call cannot be removed merely because its return value is ignored.",
        "options": [
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input.",
          "If t = a + b and u = a + b have no intervening operand changes or side effects, u can reuse t. An unused call cannot be removed merely because its return value is ignored."
        ],
        "answer": 3,
        "explanation": "An optimization needs a semantic justification: fold known pure constants, reuse a common expression only while its operands remain unchanged, or remove a write whose value is never observed. Side effects, aliasing, exceptions and floating-point behavior can invalidate arithmetic-looking rewrites.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In a pure integer block, k=17*19. What constant can replace that multiplication?",
        "answer": 323,
        "tolerance": 0,
        "explanation": "Both operands are literal integers and the product stays within the stated exact domain.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Pure block: t=a+b; a=18; u=a+b. May u always reuse t?",
        "options": [
          "Yes; addition results never depend on assignments.",
          "No; a changed before the second computation.",
          "Yes; the spelling a+b is unchanged."
        ],
        "answer": 1,
        "explanation": "A common expression requires unchanged operand values, not just identical source spelling.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Pure scalar block: x=19; x=20; return x. How many assignments can be deleted because their written value is never read?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Only the first x assignment is overwritten without a read; the returned second value remains observable.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 63.1,
        "text": "This is wrong. This is correct. Optimization should not change. Optimization should not change the meaning, the behavior, the semantics. Optimization simply means improvement. So this you can replace with this. This is improvement. You don't have to add. Okay, this is improvement. There is no problem here. But here there is a problem. Similarly, my question "
      },
      {
        "time": 527.46,
        "text": "so that you don't have to call this function again and again okay you don't have to call this function again and again is this point clear to everyone tell me okay so this is the point this is the whole point so this is the code motion code motion means if some if something is not changing then you can take it out okay now is this optimization correct tell m"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 47,
        "file": "047. Lecture 4 - Code Optimization - Introduction.mp4",
        "completedAt": "{\"file\":\"047. Lecture 4 - Code Optimization - Introduction.mp4\",\"language\":\"en\",\"probability\":0.89111328125,\"processing_seconds\":42.03263187408447,\"device\":\"cuda\"}"
      }
    ],
    "start": 63.1,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "optimize",
      "objective": "Trace this example: If t = a + b and u = a + b have no intervening operand changes or side effects, u can reuse t. An unused call cannot be removed merely because its return value is ignored.",
      "why": "An optimization needs a semantic justification: fold known pure constants, reuse a common expression only while its operands remain unchanged, or remove a write whose value is never observed.",
      "watchFor": "Side effects, aliasing, exceptions and floating-point behavior can invalidate arithmetic-looking rewrites.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 143,
    "lecture": 47,
    "title": "Optimize only when behavior is preserved · Apply and challenge",
    "concept": "Side effects, aliasing, exceptions and floating-point behavior can invalidate arithmetic-looking rewrites.",
    "teachingSteps": [
      "An optimization needs a semantic justification: fold known pure constants, reuse a common expression only while its operands remain unchanged, or remove a write whose value is never observed.",
      "If t = a + b and u = a + b have no intervening operand changes or side effects, u can reuse t. An unused call cannot be removed merely because its return value is ignored.",
      "Side effects, aliasing, exceptions and floating-point behavior can invalidate arithmetic-looking rewrites."
    ],
    "foundation": {
      "title": "Optimize only when behavior is preserved",
      "idea": "An optimization needs a semantic justification: fold known pure constants, reuse a common expression only while its operands remain unchanged, or remove a write whose value is never observed.",
      "example": "If t = a + b and u = a + b have no intervening operand changes or side effects, u can reuse t. An unused call cannot be removed merely because its return value is ignored.",
      "terms": [
        "Pure operation: a computation with no observable side effect under the stated model.",
        "Dead write: an assignment whose stored value is never read.",
        "Common subexpression: a repeated expression with unchanged operand values."
      ]
    },
    "compilerSpec": {
      "kind": "optimize",
      "parameter": 3,
      "title": "Optimize only when behavior is preserved"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying optimize only when behavior is preserved, which warning prevents a wrong conclusion?",
        "options": [
          "Side effects, aliasing, exceptions and floating-point behavior can invalidate arithmetic-looking rewrites.",
          "A smaller representation is automatically equivalent, regardless of side effects.",
          "The source spelling alone determines dependencies, so grouping and execution paths do not matter.",
          "One successful example proves every rewrite safe for every language and input."
        ],
        "answer": 0,
        "explanation": "An optimization needs a semantic justification: fold known pure constants, reuse a common expression only while its operands remain unchanged, or remove a write whose value is never observed. Side effects, aliasing, exceptions and floating-point behavior can invalidate arithmetic-looking rewrites.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "In a pure integer block, k=28*30. What constant can replace that multiplication?",
        "answer": 840,
        "tolerance": 0,
        "explanation": "Both operands are literal integers and the product stays within the stated exact domain.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Pure block: t=a+b; a=29; u=a+b. May u always reuse t?",
        "options": [
          "Yes; addition results never depend on assignments.",
          "No; a changed before the second computation.",
          "Yes; the spelling a+b is unchanged."
        ],
        "answer": 1,
        "explanation": "A common expression requires unchanged operand values, not just identical source spelling.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Pure scalar block: x=30; x=31; return x. How many assignments can be deleted because their written value is never read?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "Only the first x assignment is overwritten without a read; the returned second value remains observable.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 63.1,
        "text": "This is wrong. This is correct. Optimization should not change. Optimization should not change the meaning, the behavior, the semantics. Optimization simply means improvement. So this you can replace with this. This is improvement. You don't have to add. Okay, this is improvement. There is no problem here. But here there is a problem. Similarly, my question "
      },
      {
        "time": 527.46,
        "text": "so that you don't have to call this function again and again okay you don't have to call this function again and again is this point clear to everyone tell me okay so this is the point this is the whole point so this is the code motion code motion means if some if something is not changing then you can take it out okay now is this optimization correct tell m"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 47,
        "file": "047. Lecture 4 - Code Optimization - Introduction.mp4",
        "completedAt": "{\"file\":\"047. Lecture 4 - Code Optimization - Introduction.mp4\",\"language\":\"en\",\"probability\":0.89111328125,\"processing_seconds\":42.03263187408447,\"device\":\"cuda\"}"
      }
    ],
    "start": 63.1,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "optimize",
      "objective": "Check this boundary: Side effects, aliasing, exceptions and floating-point behavior can invalidate arithmetic-looking rewrites.",
      "why": "An optimization needs a semantic justification: fold known pure constants, reuse a common expression only while its operands remain unchanged, or remove a write whose value is never observed.",
      "watchFor": "Side effects, aliasing, exceptions and floating-point behavior can invalidate arithmetic-looking rewrites.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 144,
    "lecture": 48,
    "title": "Discover live variables before removing code · Understand the concept",
    "concept": "A value is live at a point when some continuation may use it before the next definition. Liveness is a backward may analysis: successor facts combine by union, then the current definition kills an older value.",
    "teachingSteps": [
      "A value is live at a point when some continuation may use it before the next definition. Liveness is a backward may analysis: successor facts combine by union, then the current definition kills an older value.",
      "For y = x + 1, x is used before the statement, and the old y is overwritten. Return y makes the new y live afterward.",
      "A dead destination is not sufficient to remove an instruction that has observable side effects or can trap."
    ],
    "foundation": {
      "title": "Discover live variables before removing code",
      "idea": "A value is live at a point when some continuation may use it before the next definition. Liveness is a backward may analysis: successor facts combine by union, then the current definition kills an older value.",
      "example": "For y = x + 1, x is used before the statement, and the old y is overwritten. Return y makes the new y live afterward.",
      "terms": [
        "USE: names whose current values are read by the instruction.",
        "DEF: names written by the instruction.",
        "Live value: a value some continuation may read before it is redefined."
      ]
    },
    "compilerSpec": {
      "kind": "liveness",
      "parameter": 1,
      "title": "Discover live variables before removing code"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains discover live variables before removing code?",
        "options": [
          "A loop back edge can never change the liveness fixed point.",
          "A value is live at a point when some continuation may use it before the next definition. Liveness is a backward may analysis: successor facts combine by union, then the current definition kills an older value.",
          "A value is live only if every possible future path reads it.",
          "An assignment never kills an older value of the destination."
        ],
        "answer": 1,
        "explanation": "A value is live at a point when some continuation may use it before the next definition. Liveness is a backward may analysis: successor facts combine by union, then the current definition kills an older value. A dead destination is not sufficient to remove an instruction that has observable side effects or can trap.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: y=1 [next: 2]; 2: z=y+1 [next: 3]; 3: branch x [next: 4]; 4: return y [next: exit], what is IN before node 1?",
        "options": [
          "{}",
          "{x, y, z}",
          "{z}",
          "{x}"
        ],
        "answer": 3,
        "explanation": "IN = USE ∪ (OUT − DEF). OUT takes the union over successor IN sets.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: z=1 [next: 2]; 2: x=x+1 [next: 3]; 3: branch y [next: 4]; 4: return x [next: exit], is z live immediately after node 2?",
        "options": [
          "No",
          "Yes"
        ],
        "answer": 0,
        "explanation": "Trace a possible future read before the next definition, including back edges. A textual occurrence after an overwrite does not read the old value.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: x=1 [next: 2]; 2: y=x+1 [next: 3]; 3: branch z [next: 2,4]; 4: return x [next: exit], what is IN before node 4?",
        "options": [
          "{x, y, z}",
          "{y}",
          "{x}",
          "{}"
        ],
        "answer": 2,
        "explanation": "IN = USE ∪ (OUT − DEF). OUT takes the union over successor IN sets.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 279.35,
        "text": "Can we eliminate this? Let's see whether this definition we are using somewhere or not. This definition just look at this x. This x are we using somewhere or not. No we are not using this x anywhere because you can see this is the definition and this definition is not used anywhere. Because here actually we are using but here we are using this definition. So"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 48,
        "file": "048_Lecture_5A_Dead_Code_Elimination_&_Liveness_Analysis.mp4",
        "completedAt": "{\"file\":\"048_Lecture_5A_Dead_Code_Elimination_&_Liveness_Analysis.mp4\",\"language\":\"en\",\"probability\":0.93603515625,\"processing_seconds\":37.11456346511841,\"device\":\"cuda\"}"
      }
    ],
    "start": 279.35,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "liveness",
      "objective": "Explain the rule: A value is live at a point when some continuation may use it before the next definition. Liveness is a backward may analysis: successor facts combine by union, then the current definition kills an older value.",
      "why": "A value is live at a point when some continuation may use it before the next definition. Liveness is a backward may analysis: successor facts combine by union, then the current definition kills an older value.",
      "watchFor": "A dead destination is not sufficient to remove an instruction that has observable side effects or can trap.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 145,
    "lecture": 48,
    "title": "Discover live variables before removing code · Trace and experiment",
    "concept": "For y = x + 1, x is used before the statement, and the old y is overwritten. Return y makes the new y live afterward.",
    "teachingSteps": [
      "A value is live at a point when some continuation may use it before the next definition. Liveness is a backward may analysis: successor facts combine by union, then the current definition kills an older value.",
      "For y = x + 1, x is used before the statement, and the old y is overwritten. Return y makes the new y live afterward.",
      "A dead destination is not sufficient to remove an instruction that has observable side effects or can trap."
    ],
    "foundation": {
      "title": "Discover live variables before removing code",
      "idea": "A value is live at a point when some continuation may use it before the next definition. Liveness is a backward may analysis: successor facts combine by union, then the current definition kills an older value.",
      "example": "For y = x + 1, x is used before the statement, and the old y is overwritten. Return y makes the new y live afterward.",
      "terms": [
        "USE: names whose current values are read by the instruction.",
        "DEF: names written by the instruction.",
        "Live value: a value some continuation may read before it is redefined."
      ]
    },
    "compilerSpec": {
      "kind": "liveness",
      "parameter": 1,
      "title": "Discover live variables before removing code"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For y = x + 1, x is used before the statement, and the old y is overwritten. Return y makes the new y live afterward.",
        "options": [
          "A value is live only if every possible future path reads it.",
          "An assignment never kills an older value of the destination.",
          "A loop back edge can never change the liveness fixed point.",
          "For y = x + 1, x is used before the statement, and the old y is overwritten. Return y makes the new y live afterward."
        ],
        "answer": 3,
        "explanation": "A value is live at a point when some continuation may use it before the next definition. Liveness is a backward may analysis: successor facts combine by union, then the current definition kills an older value. A dead destination is not sufficient to remove an instruction that has observable side effects or can trap.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: x=1 [next: 2]; 2: y=y+1 [next: 3]; 3: branch z [next: 2,4]; 4: return y [next: exit], is x live immediately after node 2?",
        "options": [
          "No",
          "Yes"
        ],
        "answer": 0,
        "explanation": "Trace a possible future read before the next definition, including back edges. A textual occurrence after an overwrite does not read the old value.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: y=1 [next: 2]; 2: z=y+1 [next: 3]; 3: branch x [next: 4]; 4: return y [next: exit], what is IN before node 3?",
        "options": [
          "{z}",
          "{x, y}",
          "{}",
          "{x, y, z}"
        ],
        "answer": 1,
        "explanation": "IN = USE ∪ (OUT − DEF). OUT takes the union over successor IN sets.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: z=1 [next: 2]; 2: x=x+1 [next: 3]; 3: branch y [next: 4]; 4: z=y [next: 5]; 5: return z [next: exit], is z live immediately after node 5?",
        "options": [
          "Yes",
          "No"
        ],
        "answer": 1,
        "explanation": "Trace a possible future read before the next definition, including back edges. A textual occurrence after an overwrite does not read the old value.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 279.35,
        "text": "Can we eliminate this? Let's see whether this definition we are using somewhere or not. This definition just look at this x. This x are we using somewhere or not. No we are not using this x anywhere because you can see this is the definition and this definition is not used anywhere. Because here actually we are using but here we are using this definition. So"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 48,
        "file": "048_Lecture_5A_Dead_Code_Elimination_&_Liveness_Analysis.mp4",
        "completedAt": "{\"file\":\"048_Lecture_5A_Dead_Code_Elimination_&_Liveness_Analysis.mp4\",\"language\":\"en\",\"probability\":0.93603515625,\"processing_seconds\":37.11456346511841,\"device\":\"cuda\"}"
      }
    ],
    "start": 279.35,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "liveness",
      "objective": "Trace this example: For y = x + 1, x is used before the statement, and the old y is overwritten. Return y makes the new y live afterward.",
      "why": "A value is live at a point when some continuation may use it before the next definition. Liveness is a backward may analysis: successor facts combine by union, then the current definition kills an older value.",
      "watchFor": "A dead destination is not sufficient to remove an instruction that has observable side effects or can trap.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 146,
    "lecture": 48,
    "title": "Discover live variables before removing code · Apply and challenge",
    "concept": "A dead destination is not sufficient to remove an instruction that has observable side effects or can trap.",
    "teachingSteps": [
      "A value is live at a point when some continuation may use it before the next definition. Liveness is a backward may analysis: successor facts combine by union, then the current definition kills an older value.",
      "For y = x + 1, x is used before the statement, and the old y is overwritten. Return y makes the new y live afterward.",
      "A dead destination is not sufficient to remove an instruction that has observable side effects or can trap."
    ],
    "foundation": {
      "title": "Discover live variables before removing code",
      "idea": "A value is live at a point when some continuation may use it before the next definition. Liveness is a backward may analysis: successor facts combine by union, then the current definition kills an older value.",
      "example": "For y = x + 1, x is used before the statement, and the old y is overwritten. Return y makes the new y live afterward.",
      "terms": [
        "USE: names whose current values are read by the instruction.",
        "DEF: names written by the instruction.",
        "Live value: a value some continuation may read before it is redefined."
      ]
    },
    "compilerSpec": {
      "kind": "liveness",
      "parameter": 1,
      "title": "Discover live variables before removing code"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying discover live variables before removing code, which warning prevents a wrong conclusion?",
        "options": [
          "An assignment never kills an older value of the destination.",
          "A loop back edge can never change the liveness fixed point.",
          "A dead destination is not sufficient to remove an instruction that has observable side effects or can trap.",
          "A value is live only if every possible future path reads it."
        ],
        "answer": 2,
        "explanation": "A value is live at a point when some continuation may use it before the next definition. Liveness is a backward may analysis: successor facts combine by union, then the current definition kills an older value. A dead destination is not sufficient to remove an instruction that has observable side effects or can trap.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: z=1 [next: 2]; 2: x=z+1 [next: 3]; 3: branch y [next: 4]; 4: return z [next: exit], what is IN before node 2?",
        "options": [
          "{y, z}",
          "{}",
          "{x, y, z}",
          "{x}"
        ],
        "answer": 0,
        "explanation": "IN = USE ∪ (OUT − DEF). OUT takes the union over successor IN sets.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: x=1 [next: 2]; 2: y=y+1 [next: 3]; 3: branch z [next: 2,4]; 4: x=z [next: 5]; 5: return x [next: exit], is x live immediately after node 4?",
        "options": [
          "Yes",
          "No"
        ],
        "answer": 0,
        "explanation": "Trace a possible future read before the next definition, including back edges. A textual occurrence after an overwrite does not read the old value.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: x=1 [next: 2]; 2: y=y+1 [next: 3]; 3: branch z [next: 2,4]; 4: return y [next: exit], what is IN before node 3?",
        "options": [
          "{}",
          "{x, y, z}",
          "{y}",
          "{y, z}"
        ],
        "answer": 3,
        "explanation": "IN = USE ∪ (OUT − DEF). OUT takes the union over successor IN sets.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 279.35,
        "text": "Can we eliminate this? Let's see whether this definition we are using somewhere or not. This definition just look at this x. This x are we using somewhere or not. No we are not using this x anywhere because you can see this is the definition and this definition is not used anywhere. Because here actually we are using but here we are using this definition. So"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 48,
        "file": "048_Lecture_5A_Dead_Code_Elimination_&_Liveness_Analysis.mp4",
        "completedAt": "{\"file\":\"048_Lecture_5A_Dead_Code_Elimination_&_Liveness_Analysis.mp4\",\"language\":\"en\",\"probability\":0.93603515625,\"processing_seconds\":37.11456346511841,\"device\":\"cuda\"}"
      }
    ],
    "start": 279.35,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "liveness",
      "objective": "Check this boundary: A dead destination is not sufficient to remove an instruction that has observable side effects or can trap.",
      "why": "A value is live at a point when some continuation may use it before the next definition. Liveness is a backward may analysis: successor facts combine by union, then the current definition kills an older value.",
      "watchFor": "A dead destination is not sufficient to remove an instruction that has observable side effects or can trap.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 147,
    "lecture": 49,
    "title": "Propagate liveness around loops · Understand the concept",
    "concept": "A loop back edge can send a future use back to an earlier point. Start with empty live sets and repeat backward transfer until no set changes, rather than assuming one pass suffices.",
    "teachingSteps": [
      "A loop back edge can send a future use back to an earlier point. Start with empty live sets and repeat backward transfer until no set changes, rather than assuming one pass suffices.",
      "A branch back to y = x + 1 can make x live around the loop even though the source text appears to have moved beyond its first use.",
      "Union is essential: a value needed on one possible path is live even if another path does not use it."
    ],
    "foundation": {
      "title": "Propagate liveness around loops",
      "idea": "A loop back edge can send a future use back to an earlier point. Start with empty live sets and repeat backward transfer until no set changes, rather than assuming one pass suffices.",
      "example": "A branch back to y = x + 1 can make x live around the loop even though the source text appears to have moved beyond its first use.",
      "terms": [
        "USE: names whose current values are read by the instruction.",
        "DEF: names written by the instruction.",
        "Live value: a value some continuation may read before it is redefined."
      ]
    },
    "compilerSpec": {
      "kind": "liveness",
      "parameter": 4,
      "title": "Propagate liveness around loops"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains propagate liveness around loops?",
        "options": [
          "A loop back edge can send a future use back to an earlier point. Start with empty live sets and repeat backward transfer until no set changes, rather than assuming one pass suffices.",
          "A value is live only if every possible future path reads it.",
          "An assignment never kills an older value of the destination.",
          "A loop back edge can never change the liveness fixed point."
        ],
        "answer": 0,
        "explanation": "A loop back edge can send a future use back to an earlier point. Start with empty live sets and repeat backward transfer until no set changes, rather than assuming one pass suffices. Union is essential: a value needed on one possible path is live even if another path does not use it.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: z=1 [next: 2]; 2: x=x+1 [next: 3]; 3: branch y [next: 4]; 4: return x [next: exit], what is IN before node 1?",
        "options": [
          "{}",
          "{x, y, z}",
          "{x}",
          "{x, y}"
        ],
        "answer": 3,
        "explanation": "IN = USE ∪ (OUT − DEF). OUT takes the union over successor IN sets.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: x=1 [next: 2]; 2: y=x+1 [next: 3]; 3: branch z [next: 2,4]; 4: x=z [next: 5]; 5: return x [next: exit], is x live immediately after node 2?",
        "options": [
          "No",
          "Yes"
        ],
        "answer": 1,
        "explanation": "Trace a possible future read before the next definition, including back edges. A textual occurrence after an overwrite does not read the old value.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: y=1 [next: 2]; 2: z=z+1 [next: 3]; 3: branch x [next: 4]; 4: return z [next: exit], what is IN before node 4?",
        "options": [
          "{z}",
          "{}",
          "{x, y, z}"
        ],
        "answer": 0,
        "explanation": "IN = USE ∪ (OUT − DEF). OUT takes the union over successor IN sets.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 179.89,
        "text": "hi everyone is the audio clear so now we will discuss live variable analysis but remember this live variable analysis or you can call it liveness analysis okay liveness analysis this we have already discussed in the last lecture okay so what we have already seen in the last lecture that I will not discuss I will quickly"
      },
      {
        "time": 220.5,
        "text": "give you overview of what we have seen in the last lecture. What is this liveness analysis? Okay. And this liveness analysis, basically this is what are the applications? Can anyone tell me what are the applications? What are the applications of this liveness analysis? One is dead code elimination. Okay. So one is dead code elimination. This is one applicati"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 49,
        "file": "049_Lecture_5B_Liveness_Analysis_&_Dead_Code_Elimination.mp4",
        "completedAt": "{\"file\":\"049_Lecture_5B_Liveness_Analysis_&_Dead_Code_Elimination.mp4\",\"language\":\"en\",\"probability\":0.958984375,\"processing_seconds\":421.1566915512085,\"device\":\"cuda\"}"
      }
    ],
    "start": 179.89,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "liveness",
      "objective": "Explain the rule: A loop back edge can send a future use back to an earlier point. Start with empty live sets and repeat backward transfer until no set changes, rather than assuming one pass suffices.",
      "why": "A loop back edge can send a future use back to an earlier point. Start with empty live sets and repeat backward transfer until no set changes, rather than assuming one pass suffices.",
      "watchFor": "Union is essential: a value needed on one possible path is live even if another path does not use it.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 148,
    "lecture": 49,
    "title": "Propagate liveness around loops · Trace and experiment",
    "concept": "A branch back to y = x + 1 can make x live around the loop even though the source text appears to have moved beyond its first use.",
    "teachingSteps": [
      "A loop back edge can send a future use back to an earlier point. Start with empty live sets and repeat backward transfer until no set changes, rather than assuming one pass suffices.",
      "A branch back to y = x + 1 can make x live around the loop even though the source text appears to have moved beyond its first use.",
      "Union is essential: a value needed on one possible path is live even if another path does not use it."
    ],
    "foundation": {
      "title": "Propagate liveness around loops",
      "idea": "A loop back edge can send a future use back to an earlier point. Start with empty live sets and repeat backward transfer until no set changes, rather than assuming one pass suffices.",
      "example": "A branch back to y = x + 1 can make x live around the loop even though the source text appears to have moved beyond its first use.",
      "terms": [
        "USE: names whose current values are read by the instruction.",
        "DEF: names written by the instruction.",
        "Live value: a value some continuation may read before it is redefined."
      ]
    },
    "compilerSpec": {
      "kind": "liveness",
      "parameter": 4,
      "title": "Propagate liveness around loops"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: A branch back to y = x + 1 can make x live around the loop even though the source text appears to have moved beyond its first use.",
        "options": [
          "A branch back to y = x + 1 can make x live around the loop even though the source text appears to have moved beyond its first use.",
          "A value is live only if every possible future path reads it.",
          "An assignment never kills an older value of the destination.",
          "A loop back edge can never change the liveness fixed point."
        ],
        "answer": 0,
        "explanation": "A loop back edge can send a future use back to an earlier point. Start with empty live sets and repeat backward transfer until no set changes, rather than assuming one pass suffices. Union is essential: a value needed on one possible path is live even if another path does not use it.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: y=1 [next: 2]; 2: z=y+1 [next: 3]; 3: branch x [next: 4]; 4: y=x [next: 5]; 5: return y [next: exit], is y live immediately after node 5?",
        "options": [
          "No",
          "Yes"
        ],
        "answer": 0,
        "explanation": "Trace a possible future read before the next definition, including back edges. A textual occurrence after an overwrite does not read the old value.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: z=1 [next: 2]; 2: x=x+1 [next: 3]; 3: branch y [next: 4]; 4: return x [next: exit], what is IN before node 3?",
        "options": [
          "{x}",
          "{x, y}",
          "{}",
          "{x, y, z}"
        ],
        "answer": 1,
        "explanation": "IN = USE ∪ (OUT − DEF). OUT takes the union over successor IN sets.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: x=1 [next: 2]; 2: y=x+1 [next: 3]; 3: branch z [next: 2,4]; 4: return x [next: exit], is x live immediately after node 1?",
        "options": [
          "No",
          "Yes"
        ],
        "answer": 1,
        "explanation": "Trace a possible future read before the next definition, including back edges. A textual occurrence after an overwrite does not read the old value.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 179.89,
        "text": "hi everyone is the audio clear so now we will discuss live variable analysis but remember this live variable analysis or you can call it liveness analysis okay liveness analysis this we have already discussed in the last lecture okay so what we have already seen in the last lecture that I will not discuss I will quickly"
      },
      {
        "time": 220.5,
        "text": "give you overview of what we have seen in the last lecture. What is this liveness analysis? Okay. And this liveness analysis, basically this is what are the applications? Can anyone tell me what are the applications? What are the applications of this liveness analysis? One is dead code elimination. Okay. So one is dead code elimination. This is one applicati"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 49,
        "file": "049_Lecture_5B_Liveness_Analysis_&_Dead_Code_Elimination.mp4",
        "completedAt": "{\"file\":\"049_Lecture_5B_Liveness_Analysis_&_Dead_Code_Elimination.mp4\",\"language\":\"en\",\"probability\":0.958984375,\"processing_seconds\":421.1566915512085,\"device\":\"cuda\"}"
      }
    ],
    "start": 179.89,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "liveness",
      "objective": "Trace this example: A branch back to y = x + 1 can make x live around the loop even though the source text appears to have moved beyond its first use.",
      "why": "A loop back edge can send a future use back to an earlier point. Start with empty live sets and repeat backward transfer until no set changes, rather than assuming one pass suffices.",
      "watchFor": "Union is essential: a value needed on one possible path is live even if another path does not use it.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 149,
    "lecture": 49,
    "title": "Propagate liveness around loops · Apply and challenge",
    "concept": "Union is essential: a value needed on one possible path is live even if another path does not use it.",
    "teachingSteps": [
      "A loop back edge can send a future use back to an earlier point. Start with empty live sets and repeat backward transfer until no set changes, rather than assuming one pass suffices.",
      "A branch back to y = x + 1 can make x live around the loop even though the source text appears to have moved beyond its first use.",
      "Union is essential: a value needed on one possible path is live even if another path does not use it."
    ],
    "foundation": {
      "title": "Propagate liveness around loops",
      "idea": "A loop back edge can send a future use back to an earlier point. Start with empty live sets and repeat backward transfer until no set changes, rather than assuming one pass suffices.",
      "example": "A branch back to y = x + 1 can make x live around the loop even though the source text appears to have moved beyond its first use.",
      "terms": [
        "USE: names whose current values are read by the instruction.",
        "DEF: names written by the instruction.",
        "Live value: a value some continuation may read before it is redefined."
      ]
    },
    "compilerSpec": {
      "kind": "liveness",
      "parameter": 4,
      "title": "Propagate liveness around loops"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying propagate liveness around loops, which warning prevents a wrong conclusion?",
        "options": [
          "A value is live only if every possible future path reads it.",
          "An assignment never kills an older value of the destination.",
          "A loop back edge can never change the liveness fixed point.",
          "Union is essential: a value needed on one possible path is live even if another path does not use it."
        ],
        "answer": 3,
        "explanation": "A loop back edge can send a future use back to an earlier point. Start with empty live sets and repeat backward transfer until no set changes, rather than assuming one pass suffices. Union is essential: a value needed on one possible path is live even if another path does not use it.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: z=1 [next: 2]; 2: x=z+1 [next: 3]; 3: branch y [next: 4]; 4: return z [next: exit], what is IN before node 4?",
        "options": [
          "{x, y, z}",
          "{x}",
          "{z}",
          "{}"
        ],
        "answer": 2,
        "explanation": "IN = USE ∪ (OUT − DEF). OUT takes the union over successor IN sets.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: y=1 [next: 2]; 2: z=y+1 [next: 3]; 3: branch x [next: 4]; 4: return y [next: exit], is y live immediately after node 4?",
        "options": [
          "Yes",
          "No"
        ],
        "answer": 1,
        "explanation": "Trace a possible future read before the next definition, including back edges. A textual occurrence after an overwrite does not read the old value.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: x=1 [next: 2]; 2: y=y+1 [next: 3]; 3: branch z [next: 2,4]; 4: x=z [next: 5]; 5: return x [next: exit], what is IN before node 5?",
        "options": [
          "{y}",
          "{x}",
          "{}",
          "{x, y, z}"
        ],
        "answer": 1,
        "explanation": "IN = USE ∪ (OUT − DEF). OUT takes the union over successor IN sets.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 179.89,
        "text": "hi everyone is the audio clear so now we will discuss live variable analysis but remember this live variable analysis or you can call it liveness analysis okay liveness analysis this we have already discussed in the last lecture okay so what we have already seen in the last lecture that I will not discuss I will quickly"
      },
      {
        "time": 220.5,
        "text": "give you overview of what we have seen in the last lecture. What is this liveness analysis? Okay. And this liveness analysis, basically this is what are the applications? Can anyone tell me what are the applications? What are the applications of this liveness analysis? One is dead code elimination. Okay. So one is dead code elimination. This is one applicati"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 49,
        "file": "049_Lecture_5B_Liveness_Analysis_&_Dead_Code_Elimination.mp4",
        "completedAt": "{\"file\":\"049_Lecture_5B_Liveness_Analysis_&_Dead_Code_Elimination.mp4\",\"language\":\"en\",\"probability\":0.958984375,\"processing_seconds\":421.1566915512085,\"device\":\"cuda\"}"
      }
    ],
    "start": 179.89,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "liveness",
      "objective": "Check this boundary: Union is essential: a value needed on one possible path is live even if another path does not use it.",
      "why": "A loop back edge can send a future use back to an earlier point. Start with empty live sets and repeat backward transfer until no set changes, rather than assuming one pass suffices.",
      "watchFor": "Union is essential: a value needed on one possible path is live even if another path does not use it.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 150,
    "lecture": 50,
    "title": "Check USE, DEF, IN and OUT separately · Understand the concept",
    "concept": "USE contains values read before a local definition; DEF contains names assigned. OUT joins successor IN sets, and IN adds USE while removing killed incoming values. Keep the four sets distinct.",
    "teachingSteps": [
      "USE contains values read before a local definition; DEF contains names assigned. OUT joins successor IN sets, and IN adds USE while removing killed incoming values. Keep the four sets distinct.",
      "For x = x + 1, x belongs to both USE and DEF: its old value is read and a new value is written.",
      "A variable can be both used and defined in one statement. Removing DEF before adding USE prevents losing that read."
    ],
    "foundation": {
      "title": "Check USE, DEF, IN and OUT separately",
      "idea": "USE contains values read before a local definition; DEF contains names assigned. OUT joins successor IN sets, and IN adds USE while removing killed incoming values. Keep the four sets distinct.",
      "example": "For x = x + 1, x belongs to both USE and DEF: its old value is read and a new value is written.",
      "terms": [
        "USE: names whose current values are read by the instruction.",
        "DEF: names written by the instruction.",
        "Live value: a value some continuation may read before it is redefined."
      ]
    },
    "compilerSpec": {
      "kind": "liveness",
      "parameter": 7,
      "title": "Check USE, DEF, IN and OUT separately"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains check use, def, in and out separately?",
        "options": [
          "An assignment never kills an older value of the destination.",
          "A loop back edge can never change the liveness fixed point.",
          "USE contains values read before a local definition; DEF contains names assigned. OUT joins successor IN sets, and IN adds USE while removing killed incoming values. Keep the four sets distinct.",
          "A value is live only if every possible future path reads it."
        ],
        "answer": 2,
        "explanation": "USE contains values read before a local definition; DEF contains names assigned. OUT joins successor IN sets, and IN adds USE while removing killed incoming values. Keep the four sets distinct. A variable can be both used and defined in one statement. Removing DEF before adding USE prevents losing that read.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: x=1 [next: 2]; 2: y=x+1 [next: 3]; 3: branch z [next: 2,4]; 4: return x [next: exit], what is IN before node 2?",
        "options": [
          "{x, z}",
          "{}",
          "{x, y, z}",
          "{y}"
        ],
        "answer": 0,
        "explanation": "IN = USE ∪ (OUT − DEF). OUT takes the union over successor IN sets.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: y=1 [next: 2]; 2: z=z+1 [next: 3]; 3: branch x [next: 4]; 4: return z [next: exit], is y live immediately after node 3?",
        "options": [
          "No",
          "Yes"
        ],
        "answer": 0,
        "explanation": "Trace a possible future read before the next definition, including back edges. A textual occurrence after an overwrite does not read the old value.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: y=1 [next: 2]; 2: z=z+1 [next: 3]; 3: branch x [next: 4]; 4: return z [next: exit], what is IN before node 2?",
        "options": [
          "{x, y, z}",
          "{z}",
          "{x, z}",
          "{}"
        ],
        "answer": 2,
        "explanation": "IN = USE ∪ (OUT − DEF). OUT takes the union over successor IN sets.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 2936.34,
        "text": "Then you need, how many iterations? 3 iterations you need. You can check it out. So if you go like this, then you will need this many. So if you do. So first we have done this. Now you are doing this. Now in the next iteration you are doing this. And in the next you are doing this. Now you can notice that again you go like this. Again you go like this. Thing"
      },
      {
        "time": 3476.36,
        "text": "So this is the final answer. Is this clear? Is it clear to everyone? Tell me. Anyone has any doubt in this? This type of questions in the gate exam they ask. Yes or no? Many times. This type of question they will ask. So they will give you this detail and they will ask you bit vector. So finally this bit vector you will get. So like this you can just check i"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 50,
        "file": "050. Lecture 5C - Practice Questions - Liveness Analysis.mp4",
        "completedAt": "{\"file\":\"050. Lecture 5C - Practice Questions - Liveness Analysis.mp4\",\"language\":\"en\",\"probability\":0.86328125,\"processing_seconds\":411.2484781742096,\"device\":\"cuda\"}"
      }
    ],
    "start": 2936.34,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "liveness",
      "objective": "Explain the rule: USE contains values read before a local definition; DEF contains names assigned. OUT joins successor IN sets, and IN adds USE while removing killed incoming values. Keep the four sets distinct.",
      "why": "USE contains values read before a local definition; DEF contains names assigned. OUT joins successor IN sets, and IN adds USE while removing killed incoming values. Keep the four sets distinct.",
      "watchFor": "A variable can be both used and defined in one statement. Removing DEF before adding USE prevents losing that read.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 151,
    "lecture": 50,
    "title": "Check USE, DEF, IN and OUT separately · Trace and experiment",
    "concept": "For x = x + 1, x belongs to both USE and DEF: its old value is read and a new value is written.",
    "teachingSteps": [
      "USE contains values read before a local definition; DEF contains names assigned. OUT joins successor IN sets, and IN adds USE while removing killed incoming values. Keep the four sets distinct.",
      "For x = x + 1, x belongs to both USE and DEF: its old value is read and a new value is written.",
      "A variable can be both used and defined in one statement. Removing DEF before adding USE prevents losing that read."
    ],
    "foundation": {
      "title": "Check USE, DEF, IN and OUT separately",
      "idea": "USE contains values read before a local definition; DEF contains names assigned. OUT joins successor IN sets, and IN adds USE while removing killed incoming values. Keep the four sets distinct.",
      "example": "For x = x + 1, x belongs to both USE and DEF: its old value is read and a new value is written.",
      "terms": [
        "USE: names whose current values are read by the instruction.",
        "DEF: names written by the instruction.",
        "Live value: a value some continuation may read before it is redefined."
      ]
    },
    "compilerSpec": {
      "kind": "liveness",
      "parameter": 7,
      "title": "Check USE, DEF, IN and OUT separately"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: For x = x + 1, x belongs to both USE and DEF: its old value is read and a new value is written.",
        "options": [
          "An assignment never kills an older value of the destination.",
          "A loop back edge can never change the liveness fixed point.",
          "For x = x + 1, x belongs to both USE and DEF: its old value is read and a new value is written.",
          "A value is live only if every possible future path reads it."
        ],
        "answer": 2,
        "explanation": "USE contains values read before a local definition; DEF contains names assigned. OUT joins successor IN sets, and IN adds USE while removing killed incoming values. Keep the four sets distinct. A variable can be both used and defined in one statement. Removing DEF before adding USE prevents losing that read.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: z=1 [next: 2]; 2: x=z+1 [next: 3]; 3: branch y [next: 4]; 4: z=y [next: 5]; 5: return z [next: exit], is z live immediately after node 3?",
        "options": [
          "Yes",
          "No"
        ],
        "answer": 1,
        "explanation": "Trace a possible future read before the next definition, including back edges. A textual occurrence after an overwrite does not read the old value.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: y=1 [next: 2]; 2: z=y+1 [next: 3]; 3: branch x [next: 4]; 4: y=x [next: 5]; 5: return y [next: exit], what is IN before node 1?",
        "options": [
          "{z}",
          "{x}",
          "{}",
          "{x, y, z}"
        ],
        "answer": 1,
        "explanation": "IN = USE ∪ (OUT − DEF). OUT takes the union over successor IN sets.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: y=1 [next: 2]; 2: z=z+1 [next: 3]; 3: branch x [next: 4]; 4: return z [next: exit], is y live immediately after node 1?",
        "options": [
          "No",
          "Yes"
        ],
        "answer": 0,
        "explanation": "Trace a possible future read before the next definition, including back edges. A textual occurrence after an overwrite does not read the old value.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 2936.34,
        "text": "Then you need, how many iterations? 3 iterations you need. You can check it out. So if you go like this, then you will need this many. So if you do. So first we have done this. Now you are doing this. Now in the next iteration you are doing this. And in the next you are doing this. Now you can notice that again you go like this. Again you go like this. Thing"
      },
      {
        "time": 3476.36,
        "text": "So this is the final answer. Is this clear? Is it clear to everyone? Tell me. Anyone has any doubt in this? This type of questions in the gate exam they ask. Yes or no? Many times. This type of question they will ask. So they will give you this detail and they will ask you bit vector. So finally this bit vector you will get. So like this you can just check i"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 50,
        "file": "050. Lecture 5C - Practice Questions - Liveness Analysis.mp4",
        "completedAt": "{\"file\":\"050. Lecture 5C - Practice Questions - Liveness Analysis.mp4\",\"language\":\"en\",\"probability\":0.86328125,\"processing_seconds\":411.2484781742096,\"device\":\"cuda\"}"
      }
    ],
    "start": 2936.34,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "liveness",
      "objective": "Trace this example: For x = x + 1, x belongs to both USE and DEF: its old value is read and a new value is written.",
      "why": "USE contains values read before a local definition; DEF contains names assigned. OUT joins successor IN sets, and IN adds USE while removing killed incoming values. Keep the four sets distinct.",
      "watchFor": "A variable can be both used and defined in one statement. Removing DEF before adding USE prevents losing that read.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 152,
    "lecture": 50,
    "title": "Check USE, DEF, IN and OUT separately · Apply and challenge",
    "concept": "A variable can be both used and defined in one statement. Removing DEF before adding USE prevents losing that read.",
    "teachingSteps": [
      "USE contains values read before a local definition; DEF contains names assigned. OUT joins successor IN sets, and IN adds USE while removing killed incoming values. Keep the four sets distinct.",
      "For x = x + 1, x belongs to both USE and DEF: its old value is read and a new value is written.",
      "A variable can be both used and defined in one statement. Removing DEF before adding USE prevents losing that read."
    ],
    "foundation": {
      "title": "Check USE, DEF, IN and OUT separately",
      "idea": "USE contains values read before a local definition; DEF contains names assigned. OUT joins successor IN sets, and IN adds USE while removing killed incoming values. Keep the four sets distinct.",
      "example": "For x = x + 1, x belongs to both USE and DEF: its old value is read and a new value is written.",
      "terms": [
        "USE: names whose current values are read by the instruction.",
        "DEF: names written by the instruction.",
        "Live value: a value some continuation may read before it is redefined."
      ]
    },
    "compilerSpec": {
      "kind": "liveness",
      "parameter": 7,
      "title": "Check USE, DEF, IN and OUT separately"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying check use, def, in and out separately, which warning prevents a wrong conclusion?",
        "options": [
          "A loop back edge can never change the liveness fixed point.",
          "A variable can be both used and defined in one statement. Removing DEF before adding USE prevents losing that read.",
          "A value is live only if every possible future path reads it.",
          "An assignment never kills an older value of the destination."
        ],
        "answer": 1,
        "explanation": "USE contains values read before a local definition; DEF contains names assigned. OUT joins successor IN sets, and IN adds USE while removing killed incoming values. Keep the four sets distinct. A variable can be both used and defined in one statement. Removing DEF before adding USE prevents losing that read.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: x=1 [next: 2]; 2: y=y+1 [next: 3]; 3: branch z [next: 2,4]; 4: return y [next: exit], what is IN before node 1?",
        "options": [
          "{y}",
          "{y, z}",
          "{}",
          "{x, y, z}"
        ],
        "answer": 1,
        "explanation": "IN = USE ∪ (OUT − DEF). OUT takes the union over successor IN sets.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: z=1 [next: 2]; 2: x=x+1 [next: 3]; 3: branch y [next: 4]; 4: return x [next: exit], is z live immediately after node 4?",
        "options": [
          "No",
          "Yes"
        ],
        "answer": 0,
        "explanation": "Trace a possible future read before the next definition, including back edges. A textual occurrence after an overwrite does not read the old value.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For scalar CFG 1: x=1 [next: 2]; 2: y=x+1 [next: 3]; 3: branch z [next: 2,4]; 4: x=z [next: 5]; 5: return x [next: exit], what is IN before node 5?",
        "options": [
          "{x, y, z}",
          "{y}",
          "{x}",
          "{}"
        ],
        "answer": 2,
        "explanation": "IN = USE ∪ (OUT − DEF). OUT takes the union over successor IN sets.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 2936.34,
        "text": "Then you need, how many iterations? 3 iterations you need. You can check it out. So if you go like this, then you will need this many. So if you do. So first we have done this. Now you are doing this. Now in the next iteration you are doing this. And in the next you are doing this. Now you can notice that again you go like this. Again you go like this. Thing"
      },
      {
        "time": 3476.36,
        "text": "So this is the final answer. Is this clear? Is it clear to everyone? Tell me. Anyone has any doubt in this? This type of questions in the gate exam they ask. Yes or no? Many times. This type of question they will ask. So they will give you this detail and they will ask you bit vector. So finally this bit vector you will get. So like this you can just check i"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 50,
        "file": "050. Lecture 5C - Practice Questions - Liveness Analysis.mp4",
        "completedAt": "{\"file\":\"050. Lecture 5C - Practice Questions - Liveness Analysis.mp4\",\"language\":\"en\",\"probability\":0.86328125,\"processing_seconds\":411.2484781742096,\"device\":\"cuda\"}"
      }
    ],
    "start": 2936.34,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "liveness",
      "objective": "Check this boundary: A variable can be both used and defined in one statement. Removing DEF before adding USE prevents losing that read.",
      "why": "USE contains values read before a local definition; DEF contains names assigned. OUT joins successor IN sets, and IN adds USE while removing killed incoming values. Keep the four sets distinct.",
      "watchFor": "A variable can be both used and defined in one statement. Removing DEF before adding USE prevents losing that read.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 153,
    "lecture": 51,
    "title": "Find expressions available on every path · Understand the concept",
    "concept": "An expression is available when it has already been computed on every path to the point and none of its operands has been redefined. Availability is forward and combines predecessors with intersection.",
    "teachingSteps": [
      "An expression is available when it has already been computed on every path to the point and none of its operands has been redefined. Availability is forward and combines predecessors with intersection.",
      "If one diamond branch rewrites a while the other preserves a + b, a + b is not available at the join; the two paths disagree.",
      "Availability is a must fact. Replacing intersection with the liveness union rule makes common-subexpression elimination unsafe."
    ],
    "foundation": {
      "title": "Find expressions available on every path",
      "idea": "An expression is available when it has already been computed on every path to the point and none of its operands has been redefined. Availability is forward and combines predecessors with intersection.",
      "example": "If one diamond branch rewrites a while the other preserves a + b, a + b is not available at the join; the two paths disagree.",
      "terms": [
        "GEN: expressions computed and still valid at the end of a block.",
        "KILL: expressions invalidated by changed operands.",
        "Intersection: facts common to every incoming path."
      ]
    },
    "compilerSpec": {
      "kind": "available",
      "title": "Find expressions available on every path"
    },
    "compilerStage": 0,
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule explains find expressions available on every path?",
        "options": [
          "An expression is available when it has already been computed on every path to the point and none of its operands has been redefined. Availability is forward and combines predecessors with intersection.",
          "Availability joins predecessor facts by union, because one computed path is sufficient.",
          "Reassigning an operand never invalidates the expression.",
          "Identical expression spelling proves that a previously computed value can always be reused."
        ],
        "answer": 0,
        "explanation": "An expression is available when it has already been computed on every path to the point and none of its operands has been redefined. Availability is forward and combines predecessors with intersection. Availability is a must fact. Replacing intersection with the liveness union rule makes common-subexpression elimination unsafe.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Both paths start after computing a30+b1888. The left path redefines its a operand; the right preserves both. Is the expression available on entry to the join?",
        "options": [
          "Yes",
          "No"
        ],
        "answer": 1,
        "explanation": "Intersect predecessor facts. A single killed path defeats availability.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Universe {a31+b1889}. Entry computes it, left preserves it, right preserves it. How many expressions are in IN[join]?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "The fact must hold on every incoming path.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For expression a32+b1890, which operation combines incoming availability sets at a reachable join?",
        "options": [
          "Symmetric difference.",
          "Intersection.",
          "Union."
        ],
        "answer": 1,
        "explanation": "Availability is a must fact, unlike may-liveness.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 7.7,
        "text": "Hi everyone is the audio video everything is clear let me know okay so let's start now in this lecture we will study three things we are going to study so we will study okay so these are the topics so we will study common sub expression analysis okay so okay I can say common sub expression elimination common sub expression elimination"
      },
      {
        "time": 61.9,
        "text": "So this in short, we will call it a CSE common sub expression analysis elimination Okay, so this is the short form next we will study what is copy propagation Okay, so what is this copy propagation in short we can call it CP copy propagation Okay, we will also study what is I can say available expression analysis. So this available expression analysis"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 51,
        "file": "051_Lecture_6_Available_Expression_Analysis,_Common_Sube.mp4",
        "completedAt": "{\"file\":\"051_Lecture_6_Available_Expression_Analysis,_Common_Sube.mp4\",\"language\":\"en\",\"probability\":0.9306640625,\"processing_seconds\":467.3398332595825,\"device\":\"cuda\"}"
      }
    ],
    "start": 7.7,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "available",
      "objective": "Explain the rule: An expression is available when it has already been computed on every path to the point and none of its operands has been redefined. Availability is forward and combines predecessors with intersection.",
      "why": "An expression is available when it has already been computed on every path to the point and none of its operands has been redefined. Availability is forward and combines predecessors with intersection.",
      "watchFor": "Availability is a must fact. Replacing intersection with the liveness union rule makes common-subexpression elimination unsafe.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 154,
    "lecture": 51,
    "title": "Find expressions available on every path · Trace and experiment",
    "concept": "If one diamond branch rewrites a while the other preserves a + b, a + b is not available at the join; the two paths disagree.",
    "teachingSteps": [
      "An expression is available when it has already been computed on every path to the point and none of its operands has been redefined. Availability is forward and combines predecessors with intersection.",
      "If one diamond branch rewrites a while the other preserves a + b, a + b is not available at the join; the two paths disagree.",
      "Availability is a must fact. Replacing intersection with the liveness union rule makes common-subexpression elimination unsafe."
    ],
    "foundation": {
      "title": "Find expressions available on every path",
      "idea": "An expression is available when it has already been computed on every path to the point and none of its operands has been redefined. Availability is forward and combines predecessors with intersection.",
      "example": "If one diamond branch rewrites a while the other preserves a + b, a + b is not available at the join; the two paths disagree.",
      "terms": [
        "GEN: expressions computed and still valid at the end of a block.",
        "KILL: expressions invalidated by changed operands.",
        "Intersection: facts common to every incoming path."
      ]
    },
    "compilerSpec": {
      "kind": "available",
      "title": "Find expressions available on every path"
    },
    "compilerStage": 1,
    "questions": [
      {
        "type": "choice",
        "prompt": "In this worked case, which interpretation is justified: If one diamond branch rewrites a while the other preserves a + b, a + b is not available at the join; the two paths disagree.",
        "options": [
          "Availability joins predecessor facts by union, because one computed path is sufficient.",
          "Reassigning an operand never invalidates the expression.",
          "Identical expression spelling proves that a previously computed value can always be reused.",
          "If one diamond branch rewrites a while the other preserves a + b, a + b is not available at the join; the two paths disagree."
        ],
        "answer": 3,
        "explanation": "An expression is available when it has already been computed on every path to the point and none of its operands has been redefined. Availability is forward and combines predecessors with intersection. Availability is a must fact. Replacing intersection with the liveness union rule makes common-subexpression elimination unsafe.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Both paths start after computing a10+b1899. The left path changes neither operand; the right preserves both. Is the expression available on entry to the join?",
        "options": [
          "No",
          "Yes"
        ],
        "answer": 1,
        "explanation": "Intersect predecessor facts. A single killed path defeats availability.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Universe {a11+b1900}. Entry computes it, left kills it, right preserves it. How many expressions are in IN[join]?",
        "answer": 0,
        "tolerance": 0,
        "explanation": "The fact must hold on every incoming path.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For expression a12+b1901, which operation combines incoming availability sets at a reachable join?",
        "options": [
          "Symmetric difference.",
          "Intersection.",
          "Union."
        ],
        "answer": 1,
        "explanation": "Availability is a must fact, unlike may-liveness.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 7.7,
        "text": "Hi everyone is the audio video everything is clear let me know okay so let's start now in this lecture we will study three things we are going to study so we will study okay so these are the topics so we will study common sub expression analysis okay so okay I can say common sub expression elimination common sub expression elimination"
      },
      {
        "time": 61.9,
        "text": "So this in short, we will call it a CSE common sub expression analysis elimination Okay, so this is the short form next we will study what is copy propagation Okay, so what is this copy propagation in short we can call it CP copy propagation Okay, we will also study what is I can say available expression analysis. So this available expression analysis"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 51,
        "file": "051_Lecture_6_Available_Expression_Analysis,_Common_Sube.mp4",
        "completedAt": "{\"file\":\"051_Lecture_6_Available_Expression_Analysis,_Common_Sube.mp4\",\"language\":\"en\",\"probability\":0.9306640625,\"processing_seconds\":467.3398332595825,\"device\":\"cuda\"}"
      }
    ],
    "start": 7.7,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "available",
      "objective": "Trace this example: If one diamond branch rewrites a while the other preserves a + b, a + b is not available at the join; the two paths disagree.",
      "why": "An expression is available when it has already been computed on every path to the point and none of its operands has been redefined. Availability is forward and combines predecessors with intersection.",
      "watchFor": "Availability is a must fact. Replacing intersection with the liveness union rule makes common-subexpression elimination unsafe.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  },
  {
    "id": 155,
    "lecture": 51,
    "title": "Find expressions available on every path · Apply and challenge",
    "concept": "Availability is a must fact. Replacing intersection with the liveness union rule makes common-subexpression elimination unsafe.",
    "teachingSteps": [
      "An expression is available when it has already been computed on every path to the point and none of its operands has been redefined. Availability is forward and combines predecessors with intersection.",
      "If one diamond branch rewrites a while the other preserves a + b, a + b is not available at the join; the two paths disagree.",
      "Availability is a must fact. Replacing intersection with the liveness union rule makes common-subexpression elimination unsafe."
    ],
    "foundation": {
      "title": "Find expressions available on every path",
      "idea": "An expression is available when it has already been computed on every path to the point and none of its operands has been redefined. Availability is forward and combines predecessors with intersection.",
      "example": "If one diamond branch rewrites a while the other preserves a + b, a + b is not available at the join; the two paths disagree.",
      "terms": [
        "GEN: expressions computed and still valid at the end of a block.",
        "KILL: expressions invalidated by changed operands.",
        "Intersection: facts common to every incoming path."
      ]
    },
    "compilerSpec": {
      "kind": "available",
      "title": "Find expressions available on every path"
    },
    "compilerStage": 2,
    "questions": [
      {
        "type": "choice",
        "prompt": "While applying find expressions available on every path, which warning prevents a wrong conclusion?",
        "options": [
          "Availability joins predecessor facts by union, because one computed path is sufficient.",
          "Reassigning an operand never invalidates the expression.",
          "Identical expression spelling proves that a previously computed value can always be reused.",
          "Availability is a must fact. Replacing intersection with the liveness union rule makes common-subexpression elimination unsafe."
        ],
        "answer": 3,
        "explanation": "An expression is available when it has already been computed on every path to the point and none of its operands has been redefined. Availability is forward and combines predecessors with intersection. Availability is a must fact. Replacing intersection with the liveness union rule makes common-subexpression elimination unsafe.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "Both paths start after computing a21+b1910. The left path redefines its a operand; the right preserves both. Is the expression available on entry to the join?",
        "options": [
          "Yes",
          "No"
        ],
        "answer": 1,
        "explanation": "Intersect predecessor facts. A single killed path defeats availability.",
        "revision": 1
      },
      {
        "type": "number",
        "prompt": "Universe {a22+b1911}. Entry computes it, left preserves it, right preserves it. How many expressions are in IN[join]?",
        "answer": 1,
        "tolerance": 0,
        "explanation": "The fact must hold on every incoming path.",
        "revision": 1
      },
      {
        "type": "choice",
        "prompt": "For expression a23+b1912, which operation combines incoming availability sets at a reachable join?",
        "options": [
          "Symmetric difference.",
          "Intersection.",
          "Union."
        ],
        "answer": 1,
        "explanation": "Availability is a must fact, unlike may-liveness.",
        "revision": 1
      }
    ],
    "ready": true,
    "minutes": 5,
    "contentVersion": 1,
    "contentStatus": "authored-source-linked",
    "sourceEvidence": [
      {
        "time": 7.7,
        "text": "Hi everyone is the audio video everything is clear let me know okay so let's start now in this lecture we will study three things we are going to study so we will study okay so these are the topics so we will study common sub expression analysis okay so okay I can say common sub expression elimination common sub expression elimination"
      },
      {
        "time": 61.9,
        "text": "So this in short, we will call it a CSE common sub expression analysis elimination Okay, so this is the short form next we will study what is copy propagation Okay, so what is this copy propagation in short we can call it CP copy propagation Okay, we will also study what is I can say available expression analysis. So this available expression analysis"
      }
    ],
    "sourceReferences": [
      {
        "lecture": 51,
        "file": "051_Lecture_6_Available_Expression_Analysis,_Common_Sube.mp4",
        "completedAt": "{\"file\":\"051_Lecture_6_Available_Expression_Analysis,_Common_Sube.mp4\",\"language\":\"en\",\"probability\":0.9306640625,\"processing_seconds\":467.3398332595825,\"device\":\"cuda\"}"
      }
    ],
    "start": 7.7,
    "learningNotes": {
      "version": 1,
      "subject": "cd",
      "profile": "available",
      "objective": "Check this boundary: Availability is a must fact. Replacing intersection with the liveness union rule makes common-subexpression elimination unsafe.",
      "why": "An expression is available when it has already been computed on every path to the point and none of its operands has been redefined. Availability is forward and combines predecessors with intersection.",
      "watchFor": "Availability is a must fact. Replacing intersection with the liveness union rule makes common-subexpression elimination unsafe.",
      "experiment": "Step through each state, compare its facts with the preceding state, and explain the boundary of this example."
    }
  }
];
