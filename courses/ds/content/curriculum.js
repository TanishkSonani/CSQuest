export const units=[
  {
    "id": 0,
    "title": "List foundations",
    "subtitle": "Nodes, access and safe updates",
    "range": [
      0,
      6
    ],
    "color": "teal",
    "icon": "chip",
    "goal": "Nodes, access and safe updates. Use a diagram and a small example to justify each answer.",
    "codingLab": {
      "id": "ds-unit-0",
      "unitId": 0,
      "version": 1,
      "optional": true,
      "language": "C11",
      "minutes": 10,
      "title": "Build and walk a linked list",
      "prompt": "Complete prepend and length. Nodes are already allocated by the starter. Make the new node the head and follow next links until NULL.",
      "template": "#include <stdio.h>\n#include <assert.h>\n#include <stdlib.h>\n\ntypedef struct Node { int value; struct Node *next; } Node;\nNode *prepend(Node *head, Node *fresh) {\n    fresh->next = {{0}};\n    return {{1}};\n}\nint length(Node *head) {\n    int count = 0;\n    for (Node *p = head; p != NULL; {{2}}) count++;\n    return count;\n}\nint main(void) {\n    Node a = {1, NULL}, b = {2, &a}, fresh = {9, NULL};\n    printf(\"%d\\n\", length(NULL));\n    Node *head = prepend(&b, &fresh);\n    assert(head == &fresh && fresh.next == &b);\n    printf(\"%d\\n\", length(head));\n    printf(\"%d\\n\", head->value);\n    return 0;\n}",
      "editorTemplate": "typedef struct Node { int value; struct Node *next; } Node;\nNode *prepend(Node *head, Node *fresh) {\n    fresh->next = {{0}};\n    return {{1}};\n}\nint length(Node *head) {\n    int count = 0;\n    for (Node *p = head; p != NULL; {{2}}) count++;\n    return count;\n}",
      "answer": [
        "head",
        "fresh",
        "p = p->next"
      ],
      "tokens": [
        "head",
        "fresh",
        "p = p->next",
        "NULL",
        "p = head",
        "head->next"
      ],
      "hints": [
        "The new link must retain the entire old list.",
        "Return the newly allocated node as the head.",
        "Advance along next instead of returning to the original head."
      ],
      "examples": [
        {
          "label": "Empty length",
          "output": "0"
        },
        {
          "label": "Length after prepend",
          "output": "3"
        },
        {
          "label": "New head payload",
          "output": "9"
        }
      ],
      "expectedOutput": "0\n3\n9\n"
    }
  },
  {
    "id": 1,
    "title": "Recursive lists",
    "subtitle": "Calls, returned heads and structural updates",
    "range": [
      7,
      15
    ],
    "color": "teal",
    "icon": "chip",
    "goal": "Calls, returned heads and structural updates. Use a diagram and a small example to justify each answer.",
    "codingLab": {
      "id": "ds-unit-1",
      "unitId": 1,
      "version": 1,
      "optional": true,
      "language": "C11",
      "minutes": 10,
      "title": "Reverse a list recursively",
      "prompt": "Finish the recursive reversal. Reverse the suffix first, reconnect the original next node to head, and remove head’s old forward link.",
      "template": "#include <stdio.h>\n#include <assert.h>\n#include <stdlib.h>\n\ntypedef struct Node { int value; struct Node *next; } Node;\nNode *reverse(Node *head) {\n    if (head == NULL || head->next == NULL) return head;\n    Node *rest = reverse({{0}});\n    head->next->next = {{1}};\n    head->next = {{2}};\n    return {{3}};\n}\nint main(void) {\n    printf(\"%d\\n\", reverse(NULL) == NULL);\n    Node c = {3, NULL}, b = {2, &c}, a = {1, &b};\n    Node *head = reverse(&a);\n    assert(head == &c && a.next == NULL);\n    for (Node *p = head; p; p = p->next) printf(\"%d%s\", p->value, p->next ? \" \" : \"\\n\");\n    Node single = {9, NULL};\n    assert(reverse(&single) == &single);\n    printf(\"%d\\n\", single.value);\n    return 0;\n}",
      "editorTemplate": "typedef struct Node { int value; struct Node *next; } Node;\nNode *reverse(Node *head) {\n    if (head == NULL || head->next == NULL) return head;\n    Node *rest = reverse({{0}});\n    head->next->next = {{1}};\n    head->next = {{2}};\n    return {{3}};\n}",
      "answer": [
        "head->next",
        "head",
        "NULL",
        "rest"
      ],
      "tokens": [
        "head->next",
        "head",
        "NULL",
        "rest",
        "head->next->next",
        "0"
      ],
      "hints": [
        "Recurse on the smaller suffix, not the unchanged list.",
        "The former second node must link back to head.",
        "The old head becomes a tail with no next link.",
        "Keep the new head returned by the suffix call."
      ],
      "examples": [
        {
          "label": "Empty input remains empty",
          "output": "1"
        },
        {
          "label": "Reversed three-node list",
          "output": "3 2 1"
        },
        {
          "label": "Singleton payload",
          "output": "9"
        }
      ],
      "expectedOutput": "1\n3 2 1\n9\n"
    }
  },
  {
    "id": 2,
    "title": "List variations",
    "subtitle": "Cycles, two-way links and pointer tracing",
    "range": [
      16,
      18
    ],
    "color": "teal",
    "icon": "chip",
    "goal": "Cycles, two-way links and pointer tracing. Use a diagram and a small example to justify each answer.",
    "codingLab": {
      "id": "ds-unit-2",
      "unitId": 2,
      "version": 1,
      "optional": true,
      "language": "C11",
      "minutes": 10,
      "title": "Insert into a circular doubly linked ring",
      "prompt": "Add a fresh node before the head. The starter handles an empty ring. For a nonempty ring, head->prev is its tail; repair both directions before returning the new head.",
      "template": "#include <stdio.h>\n#include <assert.h>\n#include <stdlib.h>\n\ntypedef struct Node { int value; struct Node *next, *prev; } Node;\nNode *insertFront(Node *head, Node *fresh) {\n    if (head == NULL) { fresh->next = fresh; fresh->prev = fresh; return fresh; }\n    Node *tail = head->prev;\n    fresh->next = {{0}};\n    fresh->prev = {{1}};\n    tail->next = {{2}};\n    head->prev = fresh;\n    return {{3}};\n}\nint main(void) {\n    Node a = {1, NULL, NULL}, b = {2, NULL, NULL}, c = {3, NULL, NULL};\n    Node *head = insertFront(NULL, &a);\n    assert(a.next == &a && a.prev == &a);\n    printf(\"%d\\n\", head->value);\n    head = insertFront(head, &b);\n    printf(\"%d %d\\n\", head->value, head->prev->value);\n    head = insertFront(head, &c);\n    Node *p = head;\n    for (int i = 0; i < 3; i++) { assert(p->next->prev == p && p->prev->next == p); printf(\"%d%s\", p->value, i == 2 ? \"\\n\" : \" \"); p = p->next; }\n    assert(p == head);\n    return 0;\n}",
      "editorTemplate": "typedef struct Node { int value; struct Node *next, *prev; } Node;\nNode *insertFront(Node *head, Node *fresh) {\n    if (head == NULL) { fresh->next = fresh; fresh->prev = fresh; return fresh; }\n    Node *tail = head->prev;\n    fresh->next = {{0}};\n    fresh->prev = {{1}};\n    tail->next = {{2}};\n    head->prev = fresh;\n    return {{3}};\n}",
      "answer": [
        "head",
        "tail",
        "fresh",
        "fresh"
      ],
      "tokens": [
        "head",
        "tail",
        "fresh",
        "NULL",
        "tail->next",
        "head->next"
      ],
      "hints": [
        "The new next link points to the original head.",
        "The new previous link points to the retained old tail.",
        "The tail must enter the new node, not skip it.",
        "Return the fresh node after both neighbors are connected."
      ],
      "examples": [
        {
          "label": "First node",
          "output": "1"
        },
        {
          "label": "Two-node head and tail",
          "output": "2 1"
        },
        {
          "label": "Three-node forward lap",
          "output": "3 2 1"
        }
      ],
      "expectedOutput": "1\n2 1\n3 2 1\n"
    }
  },
  {
    "id": 3,
    "title": "Logs and growth",
    "subtitle": "Inverse powers and asymptotic comparisons",
    "range": [
      19,
      29
    ],
    "color": "teal",
    "icon": "binary",
    "goal": "Inverse powers and asymptotic comparisons. Use a diagram and a small example to justify each answer.",
    "codingLab": {
      "id": "ds-unit-3",
      "unitId": 3,
      "version": 1,
      "optional": true,
      "language": "C11",
      "minutes": 10,
      "title": "Count repeated halvings",
      "prompt": "Complete a loop that halves a positive integer until it is at most one. Count each division once. This shows logarithmic work without requiring floating-point logarithms.",
      "template": "#include <stdio.h>\n#include <assert.h>\n#include <stdlib.h>\n\nint halvings(int n) {\n    int steps = 0;\n    while ({{0}}) {\n        n = {{1}};\n        steps++;\n    }\n    return steps;\n}\nint main(void) {\n    printf(\"%d\\n\", halvings(1));\n    printf(\"%d\\n\", halvings(8));\n    printf(\"%d\\n\", halvings(16));\n    return 0;\n}",
      "editorTemplate": "int halvings(int n) {\n    int steps = 0;\n    while ({{0}}) {\n        n = {{1}};\n        steps++;\n    }\n    return steps;\n}",
      "answer": [
        "n > 1",
        "n / 2"
      ],
      "tokens": [
        "n > 1",
        "n / 2",
        "n >= 1",
        "n * 2",
        "n - 1"
      ],
      "hints": [
        "Stop at one; dividing one repeatedly would reach zero unnecessarily.",
        "Halve the input so each step reduces the remaining scale."
      ],
      "examples": [
        {
          "label": "Input one",
          "output": "0"
        },
        {
          "label": "Input eight",
          "output": "3"
        },
        {
          "label": "Input sixteen",
          "output": "4"
        }
      ],
      "expectedOutput": "0\n3\n4\n"
    }
  },
  {
    "id": 4,
    "title": "Counting algorithms",
    "subtitle": "Loop work and input-case reasoning",
    "range": [
      30,
      36
    ],
    "color": "teal",
    "icon": "chip",
    "goal": "Loop work and input-case reasoning. Use a diagram and a small example to justify each answer.",
    "codingLab": {
      "id": "ds-unit-4",
      "unitId": 4,
      "version": 1,
      "optional": true,
      "language": "C11",
      "minutes": 10,
      "title": "Count a triangular loop",
      "prompt": "Fill the inclusive loop bounds and increments. The inner loop visits j=1 through i for each i=1 through n; n=0 should visit nothing.",
      "template": "#include <stdio.h>\n#include <assert.h>\n#include <stdlib.h>\n\nint visits(int n) {\n    int count = 0;\n    for (int i = 1; i {{0}} n; {{1}}) {\n        for (int j = 1; j {{2}} i; {{3}}) count++;\n    }\n    return count;\n}\nint main(void) {\n    printf(\"%d\\n\", visits(0));\n    printf(\"%d\\n\", visits(3));\n    printf(\"%d\\n\", visits(5));\n    return 0;\n}",
      "editorTemplate": "int visits(int n) {\n    int count = 0;\n    for (int i = 1; i {{0}} n; {{1}}) {\n        for (int j = 1; j {{2}} i; {{3}}) count++;\n    }\n    return count;\n}",
      "answer": [
        "<=",
        "i++",
        "<=",
        "j++"
      ],
      "tokens": [
        "<=",
        "i++",
        "j++",
        "<",
        "i--",
        "j--"
      ],
      "hints": [
        "Include outer index n.",
        "Advance the outer index toward its limit.",
        "Include the diagonal j=i.",
        "Advance the inner index, not the outer one."
      ],
      "examples": [
        {
          "label": "No iterations",
          "output": "0"
        },
        {
          "label": "Three rows",
          "output": "6"
        },
        {
          "label": "Five rows",
          "output": "15"
        }
      ],
      "expectedOutput": "0\n6\n15\n"
    }
  },
  {
    "id": 5,
    "title": "Stacks and queues",
    "subtitle": "Endpoint contracts and operation traces",
    "range": [
      37,
      39
    ],
    "color": "teal",
    "icon": "memory",
    "goal": "Endpoint contracts and operation traces. Use a diagram and a small example to justify each answer.",
    "codingLab": {
      "id": "ds-unit-5",
      "unitId": 5,
      "version": 1,
      "optional": true,
      "language": "C11",
      "minutes": 10,
      "title": "Implement a bounded stack",
      "prompt": "Here top is the number of live entries, initially zero. Check capacity before push, use the next free slot, and decrement top before reading a popped entry.",
      "template": "#include <stdio.h>\n#include <assert.h>\n#include <stdlib.h>\n\nenum { CAPACITY = 4 };\ntypedef struct { int data[CAPACITY]; int top; } Stack;\nint push(Stack *s, int value) {\n    if (s->top == {{0}}) return 0;\n    s->data[s->top{{1}}] = value;\n    return 1;\n}\nint pop(Stack *s, int *out) {\n    if (s->top == 0) return 0;\n    *out = s->data[{{2}}s->top];\n    return 1;\n}\nint main(void) {\n    Stack s = {0}; int out;\n    printf(\"%d\\n\", pop(&s, &out));\n    assert(push(&s, 7) && push(&s, 9));\n    assert(pop(&s, &out)); printf(\"%d \", out);\n    assert(pop(&s, &out)); printf(\"%d\\n\", out);\n    for (int i = 1; i <= CAPACITY; i++) assert(push(&s, i));\n    printf(\"%d\\n\", push(&s, 99));\n    return 0;\n}",
      "editorTemplate": "enum { CAPACITY = 4 };\ntypedef struct { int data[CAPACITY]; int top; } Stack;\nint push(Stack *s, int value) {\n    if (s->top == {{0}}) return 0;\n    s->data[s->top{{1}}] = value;\n    return 1;\n}\nint pop(Stack *s, int *out) {\n    if (s->top == 0) return 0;\n    *out = s->data[{{2}}s->top];\n    return 1;\n}",
      "answer": [
        "CAPACITY",
        "++",
        "--"
      ],
      "tokens": [
        "CAPACITY",
        "++",
        "--",
        "0",
        "CAPACITY - 1",
        "+"
      ],
      "hints": [
        "A count equal to allocated capacity means no free slot remains.",
        "Postincrement uses the old next-free index, then increases the count.",
        "Predecrement reaches the previous final live index before reading it."
      ],
      "examples": [
        {
          "label": "Empty pop succeeds?",
          "output": "0"
        },
        {
          "label": "LIFO removals",
          "output": "9 7"
        },
        {
          "label": "Push into a full stack succeeds?",
          "output": "0"
        }
      ],
      "expectedOutput": "0\n9 7\n0\n"
    }
  },
  {
    "id": 6,
    "title": "Queue and expression mechanics",
    "subtitle": "Buffers, transfers and operator stacks",
    "range": [
      40,
      49
    ],
    "color": "teal",
    "icon": "chip",
    "goal": "Buffers, transfers and operator stacks. Use a diagram and a small example to justify each answer.",
    "codingLab": {
      "id": "ds-unit-6",
      "unitId": 6,
      "version": 1,
      "optional": true,
      "language": "C11",
      "minutes": 10,
      "title": "Build a wraparound queue",
      "prompt": "Use a five-slot circular array with one reserved slot. Front names the next removal and rear the next insertion. Protect live items from overwrite and advance each endpoint modulo CAP.",
      "template": "#include <stdio.h>\n#include <assert.h>\n#include <stdlib.h>\n\nenum { CAP = 5 };\ntypedef struct { int data[CAP]; int front, rear; } Queue;\nint enqueue(Queue *q, int value) {\n    if ({{0}}) return 0;\n    q->data[q->rear] = value;\n    q->rear = {{1}};\n    return 1;\n}\nint dequeue(Queue *q, int *out) {\n    if (q->front == q->rear) return 0;\n    *out = q->data[q->front];\n    q->front = {{2}};\n    return 1;\n}\nint main(void) {\n    Queue q = {0}; int out;\n    for (int i = 1; i <= 4; i++) assert(enqueue(&q, i));\n    printf(\"%d\\n\", enqueue(&q, 99));\n    assert(dequeue(&q, &out) && out == 1);\n    assert(dequeue(&q, &out) && out == 2);\n    assert(enqueue(&q, 5) && enqueue(&q, 6));\n    for (int i = 0; i < 4; i++) { assert(dequeue(&q, &out)); printf(\"%d%s\", out, i == 3 ? \"\\n\" : \" \"); }\n    printf(\"%d\\n\", dequeue(&q, &out));\n    return 0;\n}",
      "editorTemplate": "enum { CAP = 5 };\ntypedef struct { int data[CAP]; int front, rear; } Queue;\nint enqueue(Queue *q, int value) {\n    if ({{0}}) return 0;\n    q->data[q->rear] = value;\n    q->rear = {{1}};\n    return 1;\n}\nint dequeue(Queue *q, int *out) {\n    if (q->front == q->rear) return 0;\n    *out = q->data[q->front];\n    q->front = {{2}};\n    return 1;\n}",
      "answer": [
        "(q->rear + 1) % CAP == q->front",
        "(q->rear + 1) % CAP",
        "(q->front + 1) % CAP"
      ],
      "tokens": [
        "(q->rear + 1) % CAP == q->front",
        "(q->rear + 1) % CAP",
        "(q->front + 1) % CAP",
        "q->rear == q->front",
        "q->rear + 1",
        "q->front + 1"
      ],
      "hints": [
        "Full means the next rear would meet front in the reserved-slot convention.",
        "Wrap the insertion index, including when it reaches CAP.",
        "Wrap the removal index independently of rear."
      ],
      "examples": [
        {
          "label": "Full enqueue succeeds?",
          "output": "0"
        },
        {
          "label": "Order after wrapping",
          "output": "3 4 5 6"
        },
        {
          "label": "Empty dequeue succeeds?",
          "output": "0"
        }
      ],
      "expectedOutput": "0\n3 4 5 6\n0\n"
    }
  },
  {
    "id": 7,
    "title": "Binary trees",
    "subtitle": "Shapes, recurrences and traversal reconstruction",
    "range": [
      50,
      56
    ],
    "color": "teal",
    "icon": "chip",
    "goal": "Shapes, recurrences and traversal reconstruction. Use a diagram and a small example to justify each answer.",
    "codingLab": {
      "id": "ds-unit-7",
      "unitId": 7,
      "version": 1,
      "optional": true,
      "language": "C11",
      "minutes": 10,
      "title": "Compute tree size and edge-height",
      "prompt": "Implement the recursive base cases and combination rules. An empty subtree has size zero and height minus one; a live node adds one, and height uses the larger child height.",
      "template": "#include <stdio.h>\n#include <assert.h>\n#include <stdlib.h>\n\ntypedef struct Node { int key; struct Node *left, *right; } Node;\nint size(Node *t) {\n    if (t == NULL) return {{0}};\n    return {{1}} + size(t->left) + size(t->right);\n}\nint height(Node *t) {\n    if (t == NULL) return {{2}};\n    int left = height(t->left), right = height(t->right);\n    return 1 + {{3}};\n}\nint main(void) {\n    printf(\"%d %d\\n\", size(NULL), height(NULL));\n    Node a = {2, NULL, NULL}, b = {6, NULL, NULL}, root = {4, &a, &b};\n    printf(\"%d %d\\n\", size(&root), height(&root));\n    root.right = NULL; a.left = &b;\n    printf(\"%d %d\\n\", size(&root), height(&root));\n    return 0;\n}",
      "editorTemplate": "typedef struct Node { int key; struct Node *left, *right; } Node;\nint size(Node *t) {\n    if (t == NULL) return {{0}};\n    return {{1}} + size(t->left) + size(t->right);\n}\nint height(Node *t) {\n    if (t == NULL) return {{2}};\n    int left = height(t->left), right = height(t->right);\n    return 1 + {{3}};\n}",
      "answer": [
        "0",
        "1",
        "-1",
        "(left > right ? left : right)"
      ],
      "tokens": [
        "0",
        "1",
        "-1",
        "(left > right ? left : right)",
        "left + right",
        "left"
      ],
      "hints": [
        "An absent child contributes no real node.",
        "Count the current live node once.",
        "Use empty height minus one so a leaf has height zero.",
        "Choose the longest downward child path rather than adding heights."
      ],
      "examples": [
        {
          "label": "Empty tree size and height",
          "output": "0 -1"
        },
        {
          "label": "Balanced three-node tree",
          "output": "3 1"
        },
        {
          "label": "Three-node chain",
          "output": "3 2"
        }
      ],
      "expectedOutput": "0 -1\n3 1\n3 2\n"
    }
  },
  {
    "id": 8,
    "title": "Binary search trees",
    "subtitle": "Ordering, search, ranges and deletion",
    "range": [
      57,
      64
    ],
    "color": "teal",
    "icon": "chip",
    "goal": "Ordering, search, ranges and deletion. Use a diagram and a small example to justify each answer.",
    "codingLab": {
      "id": "ds-unit-8",
      "unitId": 8,
      "version": 1,
      "optional": true,
      "language": "C11",
      "minutes": 10,
      "title": "Search and prune a BST range",
      "prompt": "Complete distinct-key BST search and inclusive range sum. Below the lower bound, skip the entire left subtree; above the upper bound, skip the entire right subtree.",
      "template": "#include <stdio.h>\n#include <assert.h>\n#include <stdlib.h>\n\ntypedef struct Node { int key; struct Node *left, *right; } Node;\nint contains(Node *t, int key) {\n    while (t) {\n        if (key == t->key) return 1;\n        t = key < t->key ? {{0}} : {{1}};\n    }\n    return 0;\n}\nint rangeSum(Node *t, int low, int high) {\n    if (!t) return 0;\n    if (t->key < low) return rangeSum({{2}}, low, high);\n    if (t->key > high) return rangeSum({{3}}, low, high);\n    return t->key + rangeSum(t->left, low, high) + rangeSum(t->right, low, high);\n}\nint main(void) {\n    Node a = {2, NULL, NULL}, b = {6, NULL, NULL}, c = {10, NULL, NULL}, d = {14, NULL, NULL};\n    Node left = {4, &a, &b}, right = {12, &c, &d}, root = {8, &left, &right};\n    printf(\"%d %d\\n\", contains(&root, 6), contains(&root, 5));\n    printf(\"%d\\n\", rangeSum(&root, 6, 10));\n    printf(\"%d\\n\", rangeSum(&root, 20, 30));\n    return 0;\n}",
      "editorTemplate": "typedef struct Node { int key; struct Node *left, *right; } Node;\nint contains(Node *t, int key) {\n    while (t) {\n        if (key == t->key) return 1;\n        t = key < t->key ? {{0}} : {{1}};\n    }\n    return 0;\n}\nint rangeSum(Node *t, int low, int high) {\n    if (!t) return 0;\n    if (t->key < low) return rangeSum({{2}}, low, high);\n    if (t->key > high) return rangeSum({{3}}, low, high);\n    return t->key + rangeSum(t->left, low, high) + rangeSum(t->right, low, high);\n}",
      "answer": [
        "t->left",
        "t->right",
        "t->right",
        "t->left"
      ],
      "tokens": [
        "t->left",
        "t->right",
        "NULL",
        "t",
        "t->key"
      ],
      "hints": [
        "Smaller targets can only lie in the left subtree.",
        "Larger targets can only lie in the right subtree.",
        "When this key is too small, only the right side can still match.",
        "When this key is too large, only the left side can still match."
      ],
      "examples": [
        {
          "label": "Present six and absent five",
          "output": "1 0"
        },
        {
          "label": "Inclusive range sum 6..10",
          "output": "24"
        },
        {
          "label": "Disjoint range sum",
          "output": "0"
        }
      ],
      "expectedOutput": "1 0\n24\n0\n"
    }
  },
  {
    "id": 9,
    "title": "AVL balance",
    "subtitle": "Height constraints and preserving rotations",
    "range": [
      65,
      65
    ],
    "color": "teal",
    "icon": "chip",
    "goal": "Height constraints and preserving rotations. Use a diagram and a small example to justify each answer.",
    "codingLab": {
      "id": "ds-unit-9",
      "unitId": 9,
      "version": 1,
      "optional": true,
      "language": "C11",
      "minutes": 10,
      "title": "Perform an AVL right rotation",
      "prompt": "The supplied node y has a nonempty left child. Preserve the child’s middle subtree while rotating, then recompute the old root height before the new root height.",
      "template": "#include <stdio.h>\n#include <assert.h>\n#include <stdlib.h>\n\ntypedef struct Node { int key, height; struct Node *left, *right; } Node;\nint h(Node *t) { return t ? t->height : -1; }\nvoid update(Node *t) { int a = h(t->left), b = h(t->right); t->height = 1 + (a > b ? a : b); }\nNode *rotateRight(Node *y) {\n    Node *x = {{0}};\n    Node *middle = {{1}};\n    x->right = {{2}};\n    y->left = {{3}};\n    update(y); update(x);\n    return x;\n}\nint main(void) {\n    Node ten = {10, 0, NULL, NULL}, twenty = {20, 1, &ten, NULL}, thirty = {30, 2, &twenty, NULL};\n    Node *root = rotateRight(&thirty);\n    assert(root->height == 1);\n    printf(\"%d %d %d\\n\", root->key, root->left->key, root->right->key);\n    Node a = {10, 0, NULL, NULL}, middle = {25, 0, NULL, NULL}, x = {20, 1, &a, &middle}, y = {30, 2, &x, NULL};\n    root = rotateRight(&y);\n    assert(y.left == &middle && root == &x);\n    printf(\"%d\\n\", root->right->left->key);\n    printf(\"%d\\n\", root->height);\n    return 0;\n}",
      "editorTemplate": "typedef struct Node { int key, height; struct Node *left, *right; } Node;\nint h(Node *t) { return t ? t->height : -1; }\nvoid update(Node *t) { int a = h(t->left), b = h(t->right); t->height = 1 + (a > b ? a : b); }\nNode *rotateRight(Node *y) {\n    Node *x = {{0}};\n    Node *middle = {{1}};\n    x->right = {{2}};\n    y->left = {{3}};\n    update(y); update(x);\n    return x;\n}",
      "answer": [
        "y->left",
        "x->right",
        "y",
        "middle"
      ],
      "tokens": [
        "y->left",
        "x->right",
        "y",
        "middle",
        "y->right",
        "NULL",
        "x->left",
        "x"
      ],
      "hints": [
        "The left child becomes the new root.",
        "Retain the child’s right subtree before changing links.",
        "The old root becomes the new root’s right child.",
        "The retained middle subtree becomes the old root’s left child."
      ],
      "examples": [
        {
          "label": "LL repair root and children",
          "output": "20 10 30"
        },
        {
          "label": "Preserved middle subtree key",
          "output": "25"
        },
        {
          "label": "Height with a middle subtree",
          "output": "2"
        }
      ],
      "expectedOutput": "20 10 30\n25\n2\n"
    }
  },
  {
    "id": 10,
    "title": "Heaps",
    "subtitle": "Complete shapes, priority operations and linear building",
    "range": [
      66,
      72
    ],
    "color": "teal",
    "icon": "chip",
    "goal": "Complete shapes, priority operations and linear building. Use a diagram and a small example to justify each answer.",
    "codingLab": {
      "id": "ds-unit-10",
      "unitId": 10,
      "version": 1,
      "optional": true,
      "language": "C11",
      "minutes": 10,
      "title": "Repair and build a min-heap",
      "prompt": "Finish smaller-child sift-down. Both child subtrees must already be heaps. The provided bottom-up loop satisfies that precondition by processing children before parents.",
      "template": "#include <stdio.h>\n#include <assert.h>\n#include <stdlib.h>\n\nvoid sift(int *a, int n, int i) {\n    while (2 * i + 1 < n) {\n        int child = 2 * i + 1;\n        if (child + 1 < n && {{0}}) child++;\n        if ({{1}}) break;\n        int temp = a[i]; a[i] = a[child]; a[child] = temp;\n        i = {{2}};\n    }\n}\nvoid build(int *a, int n) { for (int i = n / 2 - 1; i >= 0; i--) sift(a, n, i); }\nint main(void) {\n    int a[] = {20,4,2,9,6,3,8}; sift(a, 7, 0);\n    for (int i = 0; i < 7; i++) printf(\"%d%s\", a[i], i == 6 ? \"\\n\" : \" \");\n    int single[] = {4}; sift(single, 1, 0); printf(\"%d\\n\", single[0]);\n    int b[] = {7,6,5,4,3,2,1}; build(b, 7);\n    for (int i = 1; i < 7; i++) assert(b[(i-1)/2] <= b[i]);\n    printf(\"%d\\n\", b[0]);\n    return 0;\n}",
      "editorTemplate": "void sift(int *a, int n, int i) {\n    while (2 * i + 1 < n) {\n        int child = 2 * i + 1;\n        if (child + 1 < n && {{0}}) child++;\n        if ({{1}}) break;\n        int temp = a[i]; a[i] = a[child]; a[child] = temp;\n        i = {{2}};\n    }\n}\nvoid build(int *a, int n) { for (int i = n / 2 - 1; i >= 0; i--) sift(a, n, i); }",
      "answer": [
        "a[child + 1] < a[child]",
        "a[i] <= a[child]",
        "child"
      ],
      "tokens": [
        "a[child + 1] < a[child]",
        "a[i] <= a[child]",
        "child",
        "a[child + 1] > a[child]",
        "a[i] >= a[child]",
        "i + 1"
      ],
      "hints": [
        "Choose the smaller existing child for a min-heap.",
        "Stop when the current key is already no larger than that child.",
        "Continue where the displaced key moved, not at the next array index."
      ],
      "examples": [
        {
          "label": "Misplaced root repair",
          "output": "2 4 3 9 6 20 8"
        },
        {
          "label": "Singleton stays unchanged",
          "output": "4"
        },
        {
          "label": "Built heap minimum",
          "output": "1"
        }
      ],
      "expectedOutput": "2 4 3 9 6 20 8\n4\n1\n"
    }
  },
  {
    "id": 11,
    "title": "Heaps in practice",
    "subtitle": "Counting, sorting, merging and priority scheduling",
    "range": [
      73,
      82
    ],
    "color": "teal",
    "icon": "chip",
    "goal": "Counting, sorting, merging and priority scheduling. Use a diagram and a small example to justify each answer.",
    "codingLab": {
      "id": "ds-unit-11",
      "unitId": 11,
      "version": 1,
      "optional": true,
      "language": "C11",
      "minutes": 10,
      "title": "Implement ascending heapsort",
      "prompt": "Use a max-heap to put successive maxima into the right-hand suffix. Fill the larger-child comparisons, first internal build index, and active repair size.",
      "template": "#include <stdio.h>\n#include <assert.h>\n#include <stdlib.h>\n\nvoid siftMax(int *a, int n, int i) {\n    while (2*i+1 < n) {\n        int child = 2*i+1;\n        if (child+1 < n && {{0}}) child++;\n        if ({{1}}) break;\n        int temp=a[i]; a[i]=a[child]; a[child]=temp; i=child;\n    }\n}\nvoid sort(int *a, int n) {\n    for (int i={{2}}; i>=0; i--) siftMax(a,n,i);\n    for (int end=n-1; end>0; end--) {\n        int temp=a[0]; a[0]=a[end]; a[end]=temp;\n        siftMax(a,{{3}},0);\n    }\n}\nvoid show(int *a, int n) { sort(a,n); for (int i=0;i<n;i++) printf(\"%d%s\",a[i],i==n-1?\"\\n\":\" \"); }\nint main(void) {\n    int a[]={7,2,6,1,5,3}, b[]={3,2,1}, c[]={2,1,2};\n    show(a,6); show(b,3); show(c,3);\n    return 0;\n}",
      "editorTemplate": "void siftMax(int *a, int n, int i) {\n    while (2*i+1 < n) {\n        int child = 2*i+1;\n        if (child+1 < n && {{0}}) child++;\n        if ({{1}}) break;\n        int temp=a[i]; a[i]=a[child]; a[child]=temp; i=child;\n    }\n}\nvoid sort(int *a, int n) {\n    for (int i={{2}}; i>=0; i--) siftMax(a,n,i);\n    for (int end=n-1; end>0; end--) {\n        int temp=a[0]; a[0]=a[end]; a[end]=temp;\n        siftMax(a,{{3}},0);\n    }\n}\nvoid show(int *a, int n) { sort(a,n); for (int i=0;i<n;i++) printf(\"%d%s\",a[i],i==n-1?\"\\n\":\" \"); }",
      "answer": [
        "a[child + 1] > a[child]",
        "a[i] >= a[child]",
        "n / 2 - 1",
        "end"
      ],
      "tokens": [
        "a[child + 1] > a[child]",
        "a[i] >= a[child]",
        "n / 2 - 1",
        "end",
        "a[child + 1] < a[child]",
        "a[i] <= a[child]",
        "n - 1",
        "n"
      ],
      "hints": [
        "Max-heap repair promotes the larger child.",
        "Stop when the max-heap relation already holds.",
        "Leaves need no build repair; start at the last internal index.",
        "Exclude the just-finalized suffix entry from sift-down."
      ],
      "examples": [
        {
          "label": "Mixed values",
          "output": "1 2 3 5 6 7"
        },
        {
          "label": "Reverse order",
          "output": "1 2 3"
        },
        {
          "label": "Duplicate keys",
          "output": "1 2 2"
        }
      ],
      "expectedOutput": "1 2 3 5 6 7\n1 2 3\n1 2 2\n"
    }
  },
  {
    "id": 12,
    "title": "Hash tables",
    "subtitle": "Key mapping, collisions, probing and safe deletion",
    "range": [
      83,
      89
    ],
    "color": "teal",
    "icon": "chip",
    "goal": "Key mapping, collisions, probing and safe deletion. Use a diagram and a small example to justify each answer.",
    "codingLab": {
      "id": "ds-unit-12",
      "unitId": 12,
      "version": 1,
      "optional": true,
      "language": "C11",
      "minutes": 10,
      "title": "Find keys across deletion tombstones",
      "prompt": "Complete bounded linear-probing lookup. Keys are nonnegative, EMPTY means never used, and DELETED is a tombstone. Continue past tombstones, but terminate on a never-used slot.",
      "template": "#include <stdio.h>\n#include <assert.h>\n#include <stdlib.h>\n\nenum { CAP=7, EMPTY=-1, DELETED=-2 };\nint find(const int *table, int key) {\n    int home=key%CAP;\n    for (int i=0;i<CAP;i++) {\n        int index=(home+i)%CAP;\n        if (table[index]=={{0}}) return -1;\n        if (table[index]=={{1}}) continue;\n        if (table[index]==key) return {{2}};\n    }\n    return -1;\n}\nint main(void) {\n    int table[]={EMPTY,EMPTY,EMPTY,DELETED,17,24,EMPTY};\n    printf(\"%d %d %d\\n\",find(table,24),find(table,10),find(table,17));\n    int full[]={1,2,3,4,5,6,7};\n    printf(\"%d\\n\",find(full,14));\n    printf(\"%d\\n\",find(full,7));\n    return 0;\n}",
      "editorTemplate": "enum { CAP=7, EMPTY=-1, DELETED=-2 };\nint find(const int *table, int key) {\n    int home=key%CAP;\n    for (int i=0;i<CAP;i++) {\n        int index=(home+i)%CAP;\n        if (table[index]=={{0}}) return -1;\n        if (table[index]=={{1}}) continue;\n        if (table[index]==key) return {{2}};\n    }\n    return -1;\n}",
      "answer": [
        "EMPTY",
        "DELETED",
        "index"
      ],
      "tokens": [
        "EMPTY",
        "DELETED",
        "index",
        "home",
        "key"
      ],
      "hints": [
        "Only never-used empty safely ends an absent-key search.",
        "A tombstone preserves the path to later displaced keys.",
        "Return the actual matching slot rather than the home or payload."
      ],
      "examples": [
        {
          "label": "Search beyond a tombstone",
          "output": "5 -1 4"
        },
        {
          "label": "Full-table absent key",
          "output": "-1"
        },
        {
          "label": "Full-table present key",
          "output": "6"
        }
      ],
      "expectedOutput": "5 -1 4\n-1\n6\n"
    }
  },
  {
    "id": 13,
    "title": "Hashing and probability",
    "subtitle": "Indicators, expectations and honest cost models",
    "range": [
      90,
      93
    ],
    "color": "teal",
    "icon": "chip",
    "goal": "Indicators, expectations and honest cost models. Use a diagram and a small example to justify each answer.",
    "codingLab": {
      "id": "ds-unit-13",
      "unitId": 13,
      "version": 1,
      "optional": true,
      "language": "C11",
      "minutes": 10,
      "title": "Calculate hash occupancy expectations",
      "prompt": "For n independent uniformly hashed keys and m positive buckets, compute expected empty buckets and unordered colliding pairs. Convert n to double before multiplying, and use floating-point division rather than integer truncation.",
      "template": "#include <stdio.h>\n#include <assert.h>\n#include <stdlib.h>\n\ndouble emptyBuckets(int n, int m) {\n    double probability=1.0;\n    for (int i=0;i<n;i++) probability *= {{0}};\n    return {{1}};\n}\ndouble collidingPairs(int n, int m) {\n    if (n < 2) return 0.0;\n    return {{2}};\n}\nint main(void) {\n    printf(\"%.4f %.4f\\n\",emptyBuckets(3,4),collidingPairs(3,4));\n    printf(\"%.4f %.4f\\n\",emptyBuckets(0,4),collidingPairs(0,4));\n    printf(\"%.4f %.4f\\n\",emptyBuckets(4,1),collidingPairs(4,1));\n    return 0;\n}",
      "editorTemplate": "double emptyBuckets(int n, int m) {\n    double probability=1.0;\n    for (int i=0;i<n;i++) probability *= {{0}};\n    return {{1}};\n}\ndouble collidingPairs(int n, int m) {\n    if (n < 2) return 0.0;\n    return {{2}};\n}",
      "answer": [
        "(1.0 - 1.0 / m)",
        "m * probability",
        "(double)n * (n - 1) / (2.0 * m)"
      ],
      "tokens": [
        "(1.0 - 1.0 / m)",
        "m * probability",
        "(double)n * (n - 1) / (2.0 * m)",
        "(1 - 1 / m)",
        "n * probability",
        "n * (n - 1) / (2 * m)"
      ],
      "hints": [
        "Each key avoids one bucket with probability 1-1/m; floating-point constants preserve the fraction.",
        "Sum the m empty-bucket indicator expectations.",
        "Convert n to double before multiplication, then count unordered pairs and divide by the bucket count without truncation."
      ],
      "examples": [
        {
          "label": "Three keys, four buckets",
          "output": "1.6875 0.7500"
        },
        {
          "label": "No keys",
          "output": "4.0000 0.0000"
        },
        {
          "label": "All keys choose the sole bucket",
          "output": "0.0000 6.0000"
        }
      ],
      "expectedOutput": "1.6875 0.7500\n4.0000 0.0000\n0.0000 6.0000\n"
    }
  },
  {
    "id": 14,
    "title": "Array memory layouts",
    "subtitle": "Storage order, dimension strides and byte addresses",
    "range": [
      94,
      96
    ],
    "color": "teal",
    "icon": "chip",
    "goal": "Storage order, dimension strides and byte addresses. Use a diagram and a small example to justify each answer.",
    "codingLab": {
      "id": "ds-unit-14",
      "unitId": 14,
      "version": 1,
      "optional": true,
      "language": "C11",
      "minutes": 10,
      "title": "Calculate multidimensional array offsets",
      "prompt": "Finish one stride-based function for row-major and column-major offsets. Subtract lower bounds for every axis. Dimensions are positive and the supplied small indices are in range.",
      "template": "#include <stdio.h>\n#include <assert.h>\n#include <stdlib.h>\n\nint offset(const int *dims, const int *index, const int *lower, int axes, int columnMajor) {\n    int result=0, stride=1;\n    for (int k=0;k<axes;k++) {\n        int axis=columnMajor ? {{0}} : {{1}};\n        result += (index[axis]-{{2}})*stride;\n        stride *= {{3}};\n    }\n    return result;\n}\nint main(void) {\n    int dims[]={2,3,4}, index[]={1,1,2}, zero[]={0,0,0};\n    printf(\"%d %d\\n\",offset(dims,index,zero,3,0),offset(dims,index,zero,3,1));\n    int d[]={3,4}, at[]={0,3}, low[]={-1,1};\n    int row=offset(d,at,low,2,0);\n    printf(\"%d %d\\n\",row,offset(d,at,low,2,1));\n    printf(\"%d\\n\",1000+4*row);\n    return 0;\n}",
      "editorTemplate": "int offset(const int *dims, const int *index, const int *lower, int axes, int columnMajor) {\n    int result=0, stride=1;\n    for (int k=0;k<axes;k++) {\n        int axis=columnMajor ? {{0}} : {{1}};\n        result += (index[axis]-{{2}})*stride;\n        stride *= {{3}};\n    }\n    return result;\n}",
      "answer": [
        "k",
        "axes - 1 - k",
        "lower[axis]",
        "dims[axis]"
      ],
      "tokens": [
        "k",
        "axes - 1 - k",
        "lower[axis]",
        "dims[axis]",
        "axes - k",
        "0",
        "index[axis]",
        "dims[k]"
      ],
      "hints": [
        "Column-major starts with the first axis as fastest varying.",
        "Row-major starts with the final axis and moves left.",
        "Normalize against the matching lower bound.",
        "Multiply the stride by the size of the axis just processed."
      ],
      "examples": [
        {
          "label": "Three-dimensional row and column offsets",
          "output": "18 15"
        },
        {
          "label": "Nonzero lower bounds",
          "output": "6 7"
        },
        {
          "label": "Row-major byte address",
          "output": "1024"
        }
      ],
      "expectedOutput": "18 15\n6 7\n1024\n"
    }
  },
  {
    "id": 15,
    "title": "DS challenge workshop",
    "subtitle": "Operation accounting, insertion orders and safe list updates",
    "range": [
      97,
      100
    ],
    "color": "teal",
    "icon": "chip",
    "goal": "Operation accounting, insertion orders and safe list updates. Use a diagram and a small example to justify each answer.",
    "codingLab": {
      "id": "ds-unit-15",
      "unitId": 15,
      "version": 1,
      "optional": true,
      "language": "C11",
      "minutes": 10,
      "title": "Implement a queue with two stacks",
      "prompt": "Complete lazy transfer and dequeue. Move IN only when OUT is empty, preserving older OUT entries ahead of later arrivals. Counts name the next free stack slots.",
      "template": "#include <stdio.h>\n#include <assert.h>\n#include <stdlib.h>\n\nenum { CAP=8 };\ntypedef struct { int in[CAP], out[CAP], inCount, outCount; } Queue;\nint enqueue(Queue *q,int key) {\n    if (q->inCount+q->outCount==CAP) return 0;\n    q->in[q->inCount++]=key; return 1;\n}\nvoid transfer(Queue *q) {\n    while(q->inCount>0) q->out[q->outCount++]=q->in[{{0}}];\n}\nint dequeue(Queue *q,int *result) {\n    if(q->outCount=={{1}}) transfer(q);\n    if(q->outCount==0) return 0;\n    *result=q->out[{{2}}]; return 1;\n}\nint main(void) {\n    Queue q={0}; int value;\n    assert(enqueue(&q,1)&&enqueue(&q,2)&&enqueue(&q,3));\n    assert(dequeue(&q,&value)); printf(\"%d \",value);\n    assert(enqueue(&q,4));\n    for(int i=0;i<3;i++) { assert(dequeue(&q,&value)); printf(\"%d%s\",value,i==2?\"\\n\":\" \"); }\n    printf(\"%d\\n\",dequeue(&q,&value));\n    for(int i=0;i<CAP;i++) assert(enqueue(&q,i));\n    printf(\"%d\\n\",enqueue(&q,99));\n    return 0;\n}",
      "editorTemplate": "enum { CAP=8 };\ntypedef struct { int in[CAP], out[CAP], inCount, outCount; } Queue;\nint enqueue(Queue *q,int key) {\n    if (q->inCount+q->outCount==CAP) return 0;\n    q->in[q->inCount++]=key; return 1;\n}\nvoid transfer(Queue *q) {\n    while(q->inCount>0) q->out[q->outCount++]=q->in[{{0}}];\n}\nint dequeue(Queue *q,int *result) {\n    if(q->outCount=={{1}}) transfer(q);\n    if(q->outCount==0) return 0;\n    *result=q->out[{{2}}]; return 1;\n}",
      "answer": [
        "--q->inCount",
        "0",
        "--q->outCount"
      ],
      "tokens": [
        "--q->inCount",
        "0",
        "--q->outCount",
        "q->inCount++",
        "1",
        "q->outCount++"
      ],
      "hints": [
        "Pop the final live IN slot before pushing it onto OUT.",
        "Transfer only when OUT has no older survivors.",
        "Pop the final live OUT slot by decreasing its count first."
      ],
      "examples": [
        {
          "label": "Older items before a later arrival",
          "output": "1 2 3 4"
        },
        {
          "label": "Empty service succeeds?",
          "output": "0"
        },
        {
          "label": "Full queue accepts another key?",
          "output": "0"
        }
      ],
      "expectedOutput": "1 2 3 4\n0\n0\n"
    }
  }
];
export const lecturePlans=[
  [
    "Choosing a data structure",
    "Choose a container",
    "Match operations to needs",
    "Solve a storage scenario"
  ],
  [
    "Nodes and links",
    "Read a node",
    "Follow next links",
    "Find a list boundary"
  ],
  [
    "Arrays versus linked lists",
    "Compare storage layouts",
    "Count access work",
    "Choose for a workload"
  ],
  [
    "Traversing a singly linked list",
    "Move a cursor safely",
    "Count and print nodes",
    "Trace a complete traversal"
  ],
  [
    "Inserting list nodes",
    "Insert at the front",
    "Insert after a known node",
    "Preserve a suffix"
  ],
  [
    "Deleting list nodes",
    "Detach before releasing",
    "Repair the head or predecessor",
    "Handle empty and single-node lists"
  ],
  [
    "Building a list safely in C",
    "Initialize node fields",
    "Keep allocation and links distinct",
    "Release detached storage safely"
  ],
  [
    "Recursive list printing",
    "Follow recursive calls",
    "Print before or after descent",
    "Trace unwinding output"
  ],
  [
    "Recursive length and sum",
    "Define an empty base case",
    "Combine one node with a suffix",
    "Compute returned values"
  ],
  [
    "Recursive append and returned heads",
    "Return the new suffix",
    "Reconnect on the way back",
    "Append without losing the head"
  ],
  [
    "How a wrong return loses a list",
    "Distinguish p from p->next",
    "Trace a faulty returned pointer",
    "Identify unreachable original nodes"
  ],
  [
    "Removing the first matching node",
    "Stop at the first match",
    "Reconnect the untouched suffix",
    "Keep later duplicates"
  ],
  [
    "Removing every matching node",
    "Continue after a match",
    "Keep only surviving nodes",
    "Release removed nodes explicitly"
  ],
  [
    "Swapping adjacent payloads",
    "Form disjoint pairs",
    "Swap values inside each pair",
    "Preserve an odd trailing node"
  ],
  [
    "Iterative list reversal",
    "Save the forward link",
    "Build a reversed prefix",
    "Return the new head"
  ],
  [
    "Recursive list reversal",
    "Reverse the suffix first",
    "Reconnect the old first edge",
    "Terminate the new tail"
  ],
  [
    "Circular linked lists",
    "Recognize the cycle",
    "Stop when the head returns",
    "Handle an empty circle"
  ],
  [
    "Doubly linked lists",
    "Follow next and prev",
    "Repair both directions",
    "Check neighbor consistency"
  ],
  [
    "Linked-list trace challenges",
    "Separate pointers and payloads",
    "Trace a small splice",
    "Check reachability after updates"
  ],
  [
    "Logarithms as inverse powers",
    "Translate between powers and logs",
    "Apply product and power rules",
    "Check the logarithm domain"
  ],
  [
    "Simplifying logarithmic expressions",
    "Split a product or quotient",
    "Change the base correctly",
    "Evaluate a stated base"
  ],
  [
    "Logarithm graphs and inverses",
    "Read the domain and intercept",
    "Compare bases above and below one",
    "Trace an inverse calculation"
  ],
  [
    "Counting work before comparing speed",
    "Define input size",
    "Count primitive operations",
    "Separate growth from hardware speed"
  ],
  [
    "Big O and big Omega bounds",
    "Read an eventual upper bound",
    "Read an eventual lower bound",
    "Choose constants and a threshold"
  ],
  [
    "Tight Theta bounds",
    "Bound from both sides",
    "Identify the dominant term",
    "Verify a pair of witnesses"
  ],
  [
    "Growth and the power of doubling",
    "Distinguish values from growth",
    "Compare linear and logarithmic work",
    "See exponential doubling"
  ],
  [
    "Comparing different functions",
    "Rank common growth families",
    "Use ratios and positive logarithms",
    "Check an eventual comparison"
  ],
  [
    "Strict little-o and little-omega",
    "Distinguish strict from tight growth",
    "Inspect a limiting ratio",
    "Check valid notation properties"
  ],
  [
    "Asymptotic notation describes sets",
    "Read membership in a bound class",
    "Intersect upper and lower classes",
    "Avoid treating Big O as a number"
  ],
  [
    "Growth comparison puzzles",
    "Simplify exponent-log pairs",
    "Compare transformed functions",
    "Reject a misleading finite example"
  ],
  [
    "Counting loop iterations",
    "Trace additive increments",
    "Trace repeated doubling",
    "Check initialization and termination"
  ],
  [
    "Dependent and nested loops",
    "Multiply independent ranges",
    "Sum dependent inner lengths",
    "Count work with a shared cursor"
  ],
  [
    "Best, worst and average search",
    "Choose an input family",
    "Count successful and failed searches",
    "State a probability model"
  ],
  [
    "Cases and bounds answer different questions",
    "Separate input choice from inequality",
    "Bound a chosen case function",
    "Reason about every input"
  ],
  [
    "Reasoning from best and worst bounds",
    "Apply a worst-case ceiling",
    "Apply a best-case floor",
    "Identify what is still unknown"
  ],
  [
    "Dominant terms and transitive bounds",
    "Keep the fastest-growing term",
    "Chain compatible comparisons",
    "Test witness constants"
  ],
  [
    "Transforming growth expressions",
    "Cancel inverse powers and logs",
    "Compare polynomial and exponential work",
    "Keep domain assumptions explicit"
  ],
  [
    "Stacks and possible pop sequences",
    "Use last-in first-out",
    "Simulate a proposed output sequence",
    "Recognize a blocked top item"
  ],
  [
    "Implementing a stack",
    "Track an array top index",
    "Check capacity before pushing",
    "Use a linked head as the top"
  ],
  [
    "Queues and first-in first-out",
    "Separate front and rear roles",
    "Trace enqueue and dequeue",
    "Reverse a queue through a stack"
  ],
  [
    "Circular array queues",
    "State the index convention",
    "Advance with wraparound",
    "Check empty and full states"
  ],
  [
    "Queue index conventions",
    "Compare front and rear meanings",
    "Trace a zero-initialized queue",
    "Count occupied slots safely"
  ],
  [
    "Linked queues with two endpoints",
    "Enqueue through rear",
    "Dequeue through front",
    "Repair the final-item boundary"
  ],
  [
    "A queue made from two stacks",
    "Reverse arrivals during transfer",
    "Transfer only when needed",
    "Separate worst and amortized work"
  ],
  [
    "A stack made from two queues",
    "Keep one active queue",
    "Transfer older items before pop",
    "Swap queue roles"
  ],
  [
    "Bracket matching and shared stack storage",
    "Match the top opener",
    "Reject mismatched nesting",
    "Grow two stacks toward a free gap"
  ],
  [
    "Infix, prefix and postfix expressions",
    "Read operator placement",
    "Preserve operand order",
    "Convert a grouped expression"
  ],
  [
    "Expression processing with a stack",
    "Respect precedence during conversion",
    "Evaluate postfix tokens",
    "Pop right operand before left"
  ],
  [
    "Stack and queue operation challenges",
    "Track endpoints in mixed operations",
    "Check capacity and underflow",
    "Account for transfer work"
  ],
  [
    "Reasoning about buffered operations",
    "Keep arrival and service order distinct",
    "Trace a lazy-transfer burst",
    "Separate work already done from new work"
  ],
  [
    "Binary-tree structure and height",
    "Distinguish full, complete and perfect",
    "Measure height in edges",
    "Count nodes and child slots"
  ],
  [
    "Binary-tree representation and bounds",
    "Read child references",
    "Count nodes at a level",
    "Bound a tree height"
  ],
  [
    "Recursive tree size and leaves",
    "Define the empty subtree",
    "Combine left and right results",
    "Count missing child links"
  ],
  [
    "Tree shape versus tree identity",
    "Compare matching empty positions",
    "Separate labels from structure",
    "Stop on the first mismatch"
  ],
  [
    "Preorder, inorder and postorder",
    "Choose when to visit the root",
    "Trace a traversal recursively",
    "Match output to an order"
  ],
  [
    "Reconstructing a tree from traversals",
    "Find the root in a sequence",
    "Split the inorder segment",
    "Verify both given traversals"
  ],
  [
    "When traversals leave ambiguity",
    "Recognize a single-child choice",
    "Count possible chain orientations",
    "State assumptions for uniqueness"
  ],
  [
    "Binary search trees",
    "Apply ordering to whole subtrees",
    "Search along one path",
    "Read the sorted inorder result"
  ],
  [
    "Reporting a BST key range",
    "Apply inclusive endpoints",
    "Prune impossible subtrees",
    "Collect results in sorted order"
  ],
  [
    "Deleting from a BST",
    "Handle zero or one child",
    "Choose a two-child replacement",
    "Remove the donor node once"
  ],
  [
    "Valid BST search sequences",
    "Track an inherited interval",
    "Reject a probe outside the interval",
    "Stop at a matching target"
  ],
  [
    "BST preorder and insertion-order puzzles",
    "Track subtree boundaries",
    "Recognize a chain-producing order",
    "Distinguish traversal from insertion order"
  ],
  [
    "BST cost follows tree height",
    "Compare a balanced tree and a chain",
    "Count successful search comparisons",
    "State an average-case model"
  ],
  [
    "Recursive tree and BST challenges",
    "Combine subproblem sizes",
    "Count child slots and tree edges",
    "Verify a structural invariant"
  ],
  [
    "Global BST checks and tree diameter",
    "Pass ancestral bounds",
    "Find a longest path in edges",
    "Reject a misleading local check"
  ],
  [
    "AVL balance and rotations",
    "Compute an edge-based balance factor",
    "Identify the rotation case",
    "Preserve BST order while rebalancing"
  ],
  [
    "Min-heaps and their array shape",
    "Separate completeness from ordering",
    "Read parent and child indices",
    "Locate guaranteed extrema"
  ],
  [
    "Ranks inside a min-heap",
    "Use smaller ancestors as a bound",
    "Distinguish rank from array position",
    "Extract minima to determine a rank"
  ],
  [
    "Heap insertion by bubbling upward",
    "Append at the next open position",
    "Swap with a larger parent",
    "Count work along one path"
  ],
  [
    "Heapify with valid child subheaps",
    "Choose the smaller existing child",
    "Sift the misplaced root downward",
    "State the local precondition"
  ],
  [
    "Building a heap from the bottom",
    "Find the final internal node",
    "Repair subheaps before parents",
    "Verify the resulting key multiset"
  ],
  [
    "Why bottom-up heap building is linear",
    "Group nodes by height",
    "Weight cost by available downward levels",
    "Compare with repeated insertion"
  ],
  [
    "Deleting the minimum from a heap",
    "Save the root value",
    "Preserve completeness with the last key",
    "Restore order with sift-down"
  ],
  [
    "Counting distinct min-heaps",
    "Fix the complete tree shape",
    "Choose subtree key sets",
    "Multiply recursive arrangement counts"
  ],
  [
    "Counting ordered binary trees",
    "Split nodes around a root",
    "Sum the Catalan recurrence",
    "Separate shapes from labels"
  ],
  [
    "Random-node height and insertion averages",
    "Define a random experiment",
    "Weight heights by probability",
    "Check what an average really proves"
  ],
  [
    "Heap operation costs",
    "Match operations to touched paths",
    "Separate search from priority access",
    "Compare logarithmic and linear work"
  ],
  [
    "In-place heapsort",
    "Build an explicit max-heap",
    "Grow a final sorted suffix",
    "Repair only the active prefix"
  ],
  [
    "Merging heaps and choosing structures",
    "Distinguish heaps from BSTs",
    "Concatenate without assuming order",
    "Rebuild the combined heap"
  ],
  [
    "Priority queues for a job scheduler",
    "State the urgency convention",
    "Serve the highest-priority job",
    "Handle ties and an empty queue"
  ],
  [
    "Heap rank and search challenges",
    "Read rank independently of position",
    "Trace successive minima",
    "Separate guaranteed and possible locations"
  ],
  [
    "Heap repair challenges",
    "Verify the child-subheap precondition",
    "Follow a smaller-child path",
    "Count actual swaps in the given state"
  ],
  [
    "Maximum deletion and boundary cases",
    "Name min-heap or max-heap explicitly",
    "Shrink before downward repair",
    "Handle the final live key"
  ],
  [
    "Direct addressing and its space tradeoff",
    "Allocate for the key universe",
    "Map each key to its own slot",
    "Compare live records with reserved space"
  ],
  [
    "Hash functions and collisions",
    "Map a full key to a bucket",
    "Retain colliding records",
    "Look up using full-key equality"
  ],
  [
    "Collision resolution choices",
    "Separate buckets from table slots",
    "Compare chaining and probing",
    "Define exactly what a collision count means"
  ],
  [
    "Chaining performance",
    "Measure load as keys per bucket",
    "Trace comparisons within a chain",
    "Distinguish expected from worst-case work"
  ],
  [
    "Linear probing and safe deletion",
    "Probe consecutive slots with wraparound",
    "Stop at a never-used empty slot",
    "Continue past a deletion tombstone"
  ],
  [
    "Quadratic probing and double hashing",
    "Generate a quadratic probe sequence",
    "Choose a coprime double-hash step",
    "Check coverage instead of assuming it"
  ],
  [
    "Counting possible probe orders",
    "Treat probes as slot permutations",
    "Count starts and step choices",
    "Recognize repeated-slot cycles"
  ],
  [
    "Unsuccessful open-address searches",
    "State the uniform-hashing model",
    "Compute the occupancy-sensitive bound",
    "Interpret high-load probe growth"
  ],
  [
    "Successful open-address searches",
    "Average insertion histories",
    "Evaluate the logarithmic bound",
    "Keep implementation and ideal model distinct"
  ],
  [
    "Bernoulli indicators and binomial counts",
    "Represent a yes or no event",
    "Sum independent indicators",
    "Read a probability distribution"
  ],
  [
    "Expected bucket occupancy and collisions",
    "Count empty-bucket indicators",
    "Convert empty counts to occupied counts",
    "Distinguish extra items from colliding pairs"
  ],
  [
    "Row-major and column-major arrays",
    "Flatten a two-dimensional grid",
    "Identify the fastest varying index",
    "Convert element offsets to byte addresses"
  ],
  [
    "Multidimensional array strides",
    "Multiply dimensions into strides",
    "Compute an offset in either order",
    "Apply element width once"
  ],
  [
    "Array bounds and address puzzles",
    "Normalize every lower bound",
    "Choose the declared storage order",
    "Check units and the final address"
  ],
  [
    "Queue implementation cost puzzles",
    "Count a burst of enqueues",
    "Charge each transfer once",
    "Explain amortized versus individual work"
  ],
  [
    "Stack residence-time puzzles",
    "Define entry and exit timestamps",
    "Trace last-in first-out departures",
    "Average with a stated target distribution"
  ],
  [
    "BST insertion-order challenges",
    "Keep the root first",
    "Interleave independent subtree orders",
    "Count permutations for one fixed tree"
  ],
  [
    "Circular doubly linked list review",
    "Retain head and tail identities",
    "Initialize and connect a new node",
    "Publish the updated head safely"
  ]
];
