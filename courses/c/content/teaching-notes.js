// Authored teaching guidance aligned with this course syllabus.
export const teachingNotes=[
  {
    "id": "pointer",
    "match": "pointer|address|alias|derefer",
    "why": "Pointers let functions work with existing objects without copying them.",
    "watchFor": "An address is not the stored value. A pointer must refer to a live compatible object before dereferencing.",
    "experiment": "Step through the assignment and compare the pointer value with the object it names."
  },
  {
    "id": "recursion",
    "match": "recurs|stack frame",
    "why": "Separate call frames let the same function solve smaller instances.",
    "watchFor": "A return resumes its caller; it does not restart the whole program. Each call has its own automatic locals.",
    "experiment": "Advance one call and one return. Track which frame owns each variable."
  },
  {
    "id": "array",
    "match": "array|row|matrix|subscript",
    "why": "Indexed storage lets a program process a sequence or rectangular data.",
    "watchFor": "C does not check array bounds. One-past pointers may be formed, but not dereferenced.",
    "experiment": "Change an index and compare the selected cell with its conceptual displacement."
  },
  {
    "id": "string",
    "match": "string|character|terminator",
    "why": "C strings encode text as characters ending in a zero byte.",
    "watchFor": "The terminator takes storage and is not part of the visible text. A character array need not contain a valid string.",
    "experiment": "Change the word and locate the zero byte after the last character."
  },
  {
    "id": "allocation",
    "match": "alloc|free|ownership|lifetime|storage",
    "why": "Explicit storage management lets data outlive a function call when needed.",
    "watchFor": "Freeing storage does not automatically clear every alias. A dangling pointer cannot be safely dereferenced.",
    "experiment": "Follow allocation, use and release, and identify the last valid access."
  },
  {
    "id": "control",
    "match": "loop|while|for |switch|condition|branch",
    "why": "Branches and loops choose which statements execute and how often.",
    "watchFor": "A loop condition is tested at a particular point. A skipped body does not perform its update.",
    "experiment": "Predict the next executed statement before advancing the trace."
  },
  {
    "id": "expression",
    "match": "expression|operator|increment|conversion|promotion",
    "why": "Expression rules determine the type and value of each calculation.",
    "watchFor": "Precedence groups an expression; it does not generally specify the order in which operands are evaluated.",
    "experiment": "Compare the value before and after the shown statement under its stated types."
  },
  {
    "id": "function",
    "match": "function|parameter|argument|return",
    "why": "Functions give a calculation a clear input and output contract.",
    "watchFor": "C passes argument values. Passing a pointer copies the pointer value, while allowing access to the pointed-to object.",
    "experiment": "Compare a local parameter update with an update through a valid pointer."
  },
  {
    "id": "representation",
    "match": "bit|binary|integer|unsigned|signed|size",
    "why": "A representation connects stored bits to a value and a type.",
    "watchFor": "Object sizes and signedness assumptions must be stated; a conceptual memory diagram is not an ABI guarantee.",
    "experiment": "Change the input and read the stated representation assumptions before predicting its value."
  },
  {
    "id": "c-program",
    "match": ".*",
    "why": "Small execution traces make a program easier to reason about before running it.",
    "watchFor": "The picture illustrates the stated example. It does not make undefined C behavior valid.",
    "experiment": "Identify the current statement, predict its effect, then compare the next state."
  }
];
