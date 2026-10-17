// Authored teaching guidance aligned with this course syllabus.
export const teachingNotes=[
  {
    "id": "sorting",
    "match": "sort|merge|pivot|partition|inversion",
    "why": "Sorting and partitioning organize data so later operations need less work.",
    "watchFor": "A partition only places elements relative to a pivot; it need not sort either side. Stability concerns equal-key order.",
    "experiment": "Predict the next comparison or move, then inspect the intermediate array."
  },
  {
    "id": "graph",
    "match": "dfs|bfs|graph|travers|topolog|cycle",
    "why": "Exploration records which vertices and edges have already been handled.",
    "watchFor": "A DFS tree differs from shortest-path distances. BFS gives shortest hop counts only for equal edge costs.",
    "experiment": "Follow the frontier and predict which vertex is visited next."
  },
  {
    "id": "shortest",
    "match": "shortest|dijkstra|bellman|floyd|negative",
    "why": "Relaxation improves a known route by testing an alternative path.",
    "watchFor": "Dijkstra needs nonnegative edge weights. A negative cycle can make finite shortest-path values undefined.",
    "experiment": "Compare the current distance with the candidate path before relaxing an edge."
  },
  {
    "id": "mst",
    "match": "spanning|kruskal|prim|mst",
    "why": "A minimum spanning tree connects a network with minimum total selected edge cost.",
    "watchFor": "An MST is not a shortest-path tree. Tied weights can yield different equally optimal trees.",
    "experiment": "Predict an eligible edge and check connectivity and cycle constraints."
  },
  {
    "id": "dynamic",
    "match": "dynamic|lcs|knapsack|coin|subset|matrix.chain|stair|tsp|probability",
    "why": "Reusing a state avoids solving the same subproblem repeatedly.",
    "watchFor": "A recurrence needs a precise state and base cases. A locally best choice does not automatically solve a DP problem.",
    "experiment": "Identify the smaller states needed before filling the highlighted cell."
  },
  {
    "id": "greedy",
    "match": "greedy|schedul|huffman|prefix|fraction",
    "why": "A safe local choice can simplify an optimization problem.",
    "watchFor": "A plausible greedy rule needs an exchange or other correctness argument; an example alone is not a proof.",
    "experiment": "Compare the available choices and explain why the selected one is safe."
  },
  {
    "id": "bounds",
    "match": "growth|bound|theta|asympt|recurr|master|log|complex",
    "why": "Growth rates describe how resource costs scale with input size.",
    "watchFor": "Asymptotic growth is not measured wall-clock time. State theorem conditions before applying a shortcut.",
    "experiment": "Change the input size and compare work across levels or growth functions."
  },
  {
    "id": "algorithm",
    "match": ".*",
    "why": "A trace makes the input, maintained invariant and output visible.",
    "watchFor": "A few successful examples do not prove correctness for every valid input.",
    "experiment": "Predict the next state and explain which invariant justifies it."
  }
];
