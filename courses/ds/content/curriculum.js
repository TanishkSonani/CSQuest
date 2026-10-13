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
  ]
];
