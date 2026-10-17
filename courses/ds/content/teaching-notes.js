// Authored teaching guidance aligned with this course syllabus.
export const teachingNotes=[
  {
    "id": "list",
    "match": "list|link|head|tail|node|circular|double",
    "why": "Links allow a structure to change without moving all stored values.",
    "watchFor": "Updating a local pointer does not necessarily update the caller's head. Save needed links before overwriting them.",
    "experiment": "Follow the affected links before and after one insertion or deletion."
  },
  {
    "id": "stack-queue",
    "match": "stack|queue|postfix|prefix|infix",
    "why": "Removal order supports undo, scheduling and expression evaluation.",
    "watchFor": "A stack removes the newest item; a queue removes the oldest waiting item. Neither contract requires one particular storage layout.",
    "experiment": "Predict which value leaves next, then advance the operation."
  },
  {
    "id": "tree",
    "match": "tree|bst|avl|rotat|travers",
    "why": "Trees organize relationships so a search can discard irrelevant branches.",
    "watchFor": "A BST condition applies to the whole subtree. A rotation changes links while preserving inorder order.",
    "experiment": "Follow the search or rotation and compare inorder values before and after."
  },
  {
    "id": "heap",
    "match": "heap|priority",
    "why": "A heap keeps the next priority item accessible without fully sorting every item.",
    "watchFor": "Heap order compares parents with children, not every pair of values. A heap is not a sorted array.",
    "experiment": "Predict which parent-child comparison or swap restores the invariant."
  },
  {
    "id": "hash",
    "match": "hash|probab|collision",
    "why": "Hashing maps a key to a small search region under stated load and distribution assumptions.",
    "watchFor": "Collisions are possible; an expected cost is not a worst-case guarantee.",
    "experiment": "Change the small input and compare collisions or probe positions."
  },
  {
    "id": "growth",
    "match": "log|growth|theta|bound|ratio|complex|loop",
    "why": "Cost models help choose structures as the input grows.",
    "watchFor": "A finite sample graph cannot prove an asymptotic bound. Count operations and state the input case.",
    "experiment": "Change input size and compare the formula, sample values and axes."
  },
  {
    "id": "array",
    "match": "array|layout|row|column",
    "why": "Array layout connects indices to predictable storage positions.",
    "watchFor": "A two-dimensional contiguous array is not the same layout as an array of row pointers.",
    "experiment": "Change a row or column and follow the address calculation."
  },
  {
    "id": "structure",
    "match": ".*",
    "why": "An operation contract helps choose a representation for the work a program needs.",
    "watchFor": "The drawing is one example; the invariant defines which operations are valid.",
    "experiment": "Advance one operation and identify the invariant that remains true."
  }
];
