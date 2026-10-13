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
    "goal": "Nodes, access and safe updates. Use a diagram and a small example to justify each answer."
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
    "goal": "Calls, returned heads and structural updates. Use a diagram and a small example to justify each answer."
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
    "goal": "Cycles, two-way links and pointer tracing. Use a diagram and a small example to justify each answer."
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
    "goal": "Inverse powers and asymptotic comparisons. Use a diagram and a small example to justify each answer."
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
    "goal": "Loop work and input-case reasoning. Use a diagram and a small example to justify each answer."
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
    "goal": "Endpoint contracts and operation traces. Use a diagram and a small example to justify each answer."
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
    "goal": "Buffers, transfers and operator stacks. Use a diagram and a small example to justify each answer."
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
    "goal": "Shapes, recurrences and traversal reconstruction. Use a diagram and a small example to justify each answer."
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
    "goal": "Ordering, search, ranges and deletion. Use a diagram and a small example to justify each answer."
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
    "goal": "Height constraints and preserving rotations. Use a diagram and a small example to justify each answer."
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
    "goal": "Complete shapes, priority operations and linear building. Use a diagram and a small example to justify each answer."
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
  ]
];
