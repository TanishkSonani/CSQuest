export const units=[
  {
    "id": 0,
    "title": "Algorithmic thinking",
    "subtitle": "Why algorithms matter to Ranking and choosing the next smallest",
    "range": [
      0,
      1
    ],
    "color": "green",
    "icon": "rocket",
    "goal": "Explain the rule, trace a small input, then justify the result. An algorithm is a finite, precise procedure. State the input, required output and allowed operations before comparing solutions."
  },
  {
    "id": 1,
    "title": "Growth and bounds",
    "subtitle": "Growth beyond small inputs to Choose the strongest justified bound",
    "range": [
      2,
      9
    ],
    "color": "orange",
    "icon": "rocket",
    "goal": "Explain the rule, trace a small input, then justify the result. Count a basic operation as a function of input size. Constants affect actual speed, while eventual growth describes scalability."
  },
  {
    "id": 2,
    "title": "Counting work and input cases",
    "subtitle": "Count single and nested loops to Compare without confusing constants",
    "range": [
      10,
      16
    ],
    "color": "green",
    "icon": "rocket",
    "goal": "Explain the rule, trace a small input, then justify the result. Count inner-body visits, including how the inner limit depends on the outer index. Two loops in sequence add work; fully nested independent loops multiply it."
  },
  {
    "id": 3,
    "title": "Recurrence trees",
    "subtitle": "Write a recurrence from calls to Compare root, level and leaf work",
    "range": [
      17,
      23
    ],
    "color": "orange",
    "icon": "rocket",
    "goal": "Explain the rule, trace a small input, then justify the result. A recurrence separates recursive subproblem costs from local work. Specify a base case so repeated expansion terminates."
  },
  {
    "id": 4,
    "title": "Master theorem and its limits",
    "subtitle": "The three Master theorem cases to Know when the Master theorem does not fit",
    "range": [
      24,
      30
    ],
    "color": "green",
    "icon": "rocket",
    "goal": "Explain the rule, trace a small input, then justify the result. For T(n)=aT(n/b)+f(n), compare f(n) with n^(log_b a). The standard theorem requires fixed a>=1 and b>1 and applicable gap conditions."
  },
  {
    "id": 5,
    "title": "Transforming recurrences",
    "subtitle": "Transform square-root subproblems to Solve in the transformed size",
    "range": [
      31,
      34
    ],
    "color": "orange",
    "icon": "rocket",
    "goal": "Explain the rule, trace a small input, then justify the result. For T(n)=T(sqrt(n))+1 on n>=2, let m=log2(n). Then S(m)=S(m/2)+1, so the original growth is Theta(log log n)."
  },
  {
    "id": 6,
    "title": "Divide and combine",
    "subtitle": "Divide, solve, combine to Sort a suffix and insert its first key",
    "range": [
      35,
      39
    ],
    "color": "green",
    "icon": "rocket",
    "goal": "Explain the rule, trace a small input, then justify the result. Divide and conquer creates smaller instances, solves them, and combines their answers. A singleton base case prevents endless splitting."
  },
  {
    "id": 7,
    "title": "Stable merging",
    "subtitle": "Merge sort from sorted halves to Bounds for a complete merge sort",
    "range": [
      40,
      47
    ],
    "color": "orange",
    "icon": "rocket",
    "goal": "Explain the rule, trace a small input, then justify the result. Merge sort recursively sorts both halves, then merges the sorted results. Linear combine work across logarithmically many levels gives Theta(n log n)."
  },
  {
    "id": 8,
    "title": "Bottom-up merging",
    "subtitle": "Merge short runs into longer runs to Implement run-width doubling",
    "range": [
      48,
      51
    ],
    "color": "green",
    "icon": "rocket",
    "goal": "Explain the rule, trace a small input, then justify the result. Bottom-up merge sort begins with sorted runs of length one and doubles the run width after each pass. No recursive call stack is needed."
  },
  {
    "id": 9,
    "title": "Many streams and storage",
    "subtitle": "Merge many streams with a heap to Count peak live memory",
    "range": [
      52,
      55
    ],
    "color": "orange",
    "icon": "rocket",
    "goal": "Explain the rule, trace a small input, then justify the result. For k sorted streams containing N keys in total, keep one current head per nonempty stream in a min-heap. Each output updates one head, giving O(N log k) time."
  },
  {
    "id": 10,
    "title": "Extrema and comparison budgets",
    "subtitle": "Maximum and runner-up to Quantify tightness and cases",
    "range": [
      56,
      64
    ],
    "color": "green",
    "icon": "rocket",
    "goal": "Explain the rule, trace a small input, then justify the result. The second largest distinct item must be among those that lost directly to the maximum in a comparison tournament, assuming all keys are distinct."
  },
  {
    "id": 11,
    "title": "Inversions and ranking disagreement",
    "subtitle": "Inversions measure disagreement to Strict inequality matters",
    "range": [
      65,
      70
    ],
    "color": "orange",
    "icon": "rocket",
    "goal": "Explain the rule, trace a small input, then justify the result. An inversion is a pair of indices i<j with A[i]>A[j]. Equal values are not inversions. Reversing a sorted list of distinct keys maximizes the count."
  },
  {
    "id": 12,
    "title": "Geometry, powers and matrices",
    "subtitle": "Closest points across a split to Block matrix multiplication",
    "range": [
      71,
      74
    ],
    "color": "green",
    "icon": "rocket",
    "goal": "Explain the rule, trace a small input, then justify the result. The closest pair may lie within either half or across the split. With delta from the half-solutions, inspect points in a width-2delta strip around the dividing line."
  },
  {
    "id": 13,
    "title": "Pivots, selection and search",
    "subtitle": "Partition before quicksort recursion to Search a sorted range by halves",
    "range": [
      75,
      82
    ],
    "color": "orange",
    "icon": "rocket",
    "goal": "Explain the rule, trace a small input, then justify the result. Partition separates keys around a pivot, then recurse on the remaining regions. Unlike merge sort, quicksort does its linear organizing work before recursive sorting."
  },
  {
    "id": 14,
    "title": "Sorting choices and lower bounds",
    "subtitle": "Adjacent comparisons in bubble sort to Counting and radix sorting",
    "range": [
      83,
      88
    ],
    "color": "green",
    "icon": "rocket",
    "goal": "Explain the rule, trace a small input, then justify the result. Bubble sort compares adjacent keys and swaps inverted neighbors. A full left-to-right pass moves the largest remaining key to the right boundary."
  },
  {
    "id": 15,
    "title": "Graph exploration",
    "subtitle": "Graph storage changes traversal cost to Recursive frames versus an explicit stack",
    "range": [
      89,
      92
    ],
    "color": "orange",
    "icon": "map",
    "goal": "Explain the rule, trace a small input, then justify the result. An adjacency list uses O(V+E) storage. A V-by-V adjacency matrix uses Theta(V squared) storage and offers constant-time edge lookup."
  },
  {
    "id": 16,
    "title": "DFS structure and dependencies",
    "subtitle": "Discovery and finish intervals to Articulation points and low links",
    "range": [
      93,
      100
    ],
    "color": "green",
    "icon": "map",
    "goal": "Explain the rule, trace a small input, then justify the result. DFS timestamps increase on discovery and finish. Two vertex intervals are either nested, showing ancestry, or disjoint; they never partially overlap."
  },
  {
    "id": 17,
    "title": "Breadth-first paths and coloring",
    "subtitle": "Explore in breadth-first layers to BFS paths and bipartite coloring",
    "range": [
      101,
      103
    ],
    "color": "orange",
    "icon": "map",
    "goal": "Explain the rule, trace a small input, then justify the result. BFS marks vertices when enqueuing and processes a FIFO queue. In an unweighted graph, a vertex’s layer number is its shortest-path distance in edges from the source."
  },
  {
    "id": 18,
    "title": "Greedy shortest paths and queues",
    "subtitle": "When a greedy choice is safe to Storage choices change shortest-path cost",
    "range": [
      104,
      111
    ],
    "color": "green",
    "icon": "map",
    "goal": "Explain the rule, trace a small input, then justify the result. A greedy method makes a locally preferred choice and commits to it. Correctness needs a task-specific argument; choosing the best-looking local option is not automatically globally optimal."
  },
  {
    "id": 19,
    "title": "Shortest paths with signed costs",
    "subtitle": "Shortest paths in topological order to Early stopping and edge-order effects",
    "range": [
      112,
      115
    ],
    "color": "orange",
    "icon": "map",
    "goal": "Explain the rule, trace a small input, then justify the result. A DAG can have negative edge weights without a cycle. Process vertices in topological order and relax each outgoing edge once to obtain single-source shortest paths in O(V+E) time."
  },
  {
    "id": 20,
    "title": "Minimum-cost spanning networks",
    "subtitle": "Connect every site at minimum total cost to Kruskal joins different components",
    "range": [
      116,
      118
    ],
    "color": "green",
    "icon": "map",
    "goal": "Explain the rule, trace a small input, then justify the result. A minimum spanning tree connects all vertices of a connected undirected weighted graph with no cycle and minimum total edge weight. It has V-1 edges and is a different objective from shortest source-to-vertex paths."
  },
  {
    "id": 21,
    "title": "Prim and tree exchanges",
    "subtitle": "Reason about alternative spanning trees to Update an MST after one weight change",
    "range": [
      119,
      125
    ],
    "color": "orange",
    "icon": "map",
    "goal": "Explain the rule, trace a small input, then justify the result. Distinct edge weights imply a unique MST, but tied weights do not automatically imply multiple MSTs. Exchange an edge along its fundamental cycle to test whether an equally cheap alternative exists."
  },
  {
    "id": 22,
    "title": "Prefix codes and merge costs",
    "subtitle": "Huffman codes and prefix-free leaves to Merge the smallest files first",
    "range": [
      126,
      132
    ],
    "color": "green",
    "icon": "map",
    "goal": "Explain the rule, trace a small input, then justify the result. A binary prefix code assigns symbols to tree leaves. No symbol’s code is a prefix of another, so a bit stream can be decoded by walking from the root to a leaf and restarting."
  },
  {
    "id": 23,
    "title": "Scheduling and divisible items",
    "subtitle": "Choose the most compatible activities to Select a density threshold without full sorting",
    "range": [
      133,
      139
    ],
    "color": "orange",
    "icon": "map",
    "goal": "Explain the rule, trace a small input, then justify the result. Unweighted interval scheduling maximizes the number of nonoverlapping activities on one resource. With half-open intervals, an activity beginning exactly when another ends is compatible."
  },
  {
    "id": 24,
    "title": "Reusable states and stair problems",
    "subtitle": "Store and reuse subproblem answers to Overlap distinguishes reusable subproblems",
    "range": [
      140,
      146
    ],
    "color": "green",
    "icon": "map",
    "goal": "Explain the rule, trace a small input, then justify the result. Dynamic programming defines states and transitions, then saves overlapping subproblem results. Memoization computes states on demand; tabulation processes them in a dependency-respecting order."
  },
  {
    "id": 25,
    "title": "Longest common subsequences",
    "subtitle": "Subsequences can skip positions to Prefix and suffix formulations",
    "range": [
      147,
      154
    ],
    "color": "orange",
    "icon": "map",
    "goal": "Explain the rule, trace a small input, then justify the result. A subsequence retains order but may skip characters. An LCS is a longest sequence shared by two strings; it is not required to be a contiguous substring."
  },
  {
    "id": 26,
    "title": "Matrix-chain optimization",
    "subtitle": "Parenthesize compatible matrix products to Intervals give quadratic chain states",
    "range": [
      155,
      159
    ],
    "color": "green",
    "icon": "map",
    "goal": "Explain the rule, trace a small input, then justify the result. Matrix-chain optimization changes parentheses, not matrix order. Multiplying a p-by-q matrix by a q-by-r matrix costs pqr scalar multiplications and yields a p-by-r result."
  },
  {
    "id": 27,
    "title": "Whole-item knapsack",
    "subtitle": "Whole items break density greedy to Descending capacities prevent reuse",
    "range": [
      160,
      164
    ],
    "color": "orange",
    "icon": "map",
    "goal": "Explain the rule, trace a small input, then justify the result. In 0-1 knapsack, each item is either taken whole or skipped. The highest value density need not lead to the best whole-item combination; the fractional greedy guarantee does not transfer."
  },
  {
    "id": 28,
    "title": "Reachability, change and route DP",
    "subtitle": "Which subset sums are reachable to Visit every city and return",
    "range": [
      165,
      169
    ],
    "color": "green",
    "icon": "map",
    "goal": "Explain the rule, trace a small input, then justify the result. For nonnegative integer values, subset-sum DP records whether each target is reachable by a subset of processed items. The empty subset reaches zero; a descending one-row update prevents item reuse."
  }
];
export const lecturePlans=[
  [
    "Why algorithms matter",
    "An algorithm is a finite, precise procedure. State the input, required output and allowed operations before comparing solutions."
  ],
  [
    "Ranking and choosing the next smallest",
    "Ranking arranges items by a rule. Selection sort repeatedly chooses the smallest remaining key and places it next in the output order."
  ],
  [
    "Growth beyond small inputs",
    "Count a basic operation as a function of input size. Constants affect actual speed, while eventual growth describes scalability."
  ],
  [
    "Upper and lower growth bounds",
    "Big O supplies an eventual upper bound; big Omega supplies an eventual lower bound. Neither symbol names a best or worst input."
  ],
  [
    "A tight asymptotic sandwich",
    "Theta requires both an eventual upper bound and an eventual positive lower bound of the same growth class."
  ],
  [
    "Logarithms count reductions",
    "For n=2^k, k=log2(n). Halving a positive problem size until it becomes one takes k reductions."
  ],
  [
    "Compare growth using ratios",
    "Compare f(n)/g(n), rather than a single small example. Powers eventually dominate logarithms, and fixed-base exponentials dominate powers."
  ],
  [
    "Strict growth and composition",
    "Little o means f(n)/g(n) tends to zero for eventually positive g. Little omega means the ratio tends to infinity; constant multiples do not qualify."
  ],
  [
    "Asymptotic symbols as sets",
    "O(g) is a set of functions. Writing f in O(g) means suitable positive constants bound f above eventually; many loose bounds can be true."
  ],
  [
    "Choose the strongest justified bound",
    "A tight bound describes both sides. If f is Theta(n), O(n squared) is still true, but less informative than O(n)."
  ],
  [
    "Count single and nested loops",
    "Count inner-body visits, including how the inner limit depends on the outer index. Two loops in sequence add work; fully nested independent loops multiply it."
  ],
  [
    "Doubling and dependent loop limits",
    "Multiplicative updates produce logarithmically many iterations. For j=1 through i, summing the inner counts gives n(n+1)/2, not n."
  ],
  [
    "Best and worst input arrangements",
    "Best and worst cases compare inputs of the same size. A left-to-right search may stop on its first comparison or inspect every item."
  ],
  [
    "Worst case is not always quadratic",
    "An input case and a growth bound are separate choices. An absent key forces n comparisons in an unsorted linear search, a tight linear worst case."
  ],
  [
    "Separate a case from a bound",
    "An upper bound may describe best, average or worst time. Label the case explicitly instead of treating big O as a synonym for worst case."
  ],
  [
    "Bound arithmetic practice",
    "Adding nonnegative functions keeps the dominating growth term. Multiplying their values combines growth; n times log2(n) is not just n."
  ],
  [
    "Compare without confusing constants",
    "Equal-order functions may have different constant factors. If f/g approaches a positive finite constant, they have the same asymptotic order, not a strict little-o relation."
  ],
  [
    "Write a recurrence from calls",
    "A recurrence separates recursive subproblem costs from local work. Specify a base case so repeated expansion terminates."
  ],
  [
    "Expand a shrinking recurrence",
    "For T(n)=T(n-1)+1 and T(1)=1, expansion adds one for each reduction and gives T(n)=n."
  ],
  [
    "Sum a geometric expansion",
    "For T(n)=T(n/2)+n and T(1)=1 on power-of-two n, expansion sums n+n/2+...+1, giving 2n-1."
  ],
  [
    "Read a recursion tree level",
    "In T(n)=2T(n/2)+n, each level has twice as many problems of half the size. The total non-leaf work per level remains n."
  ],
  [
    "Unequal split trees",
    "For T(n)=T(n/3)+T(2n/3)+n, the branches stop at different depths. Linear work at each fully populated level and logarithmic depth bounds give Theta(n log n)."
  ],
  [
    "Branching by small decrements",
    "For T(n)=T(n-1)+T(n-2)+1, with T(0)=T(1)=1, the two almost-full-size child calls create exponentially growing work. The equal-fraction Master theorem does not fit."
  ],
  [
    "Compare root, level and leaf work",
    "For T(n)=aT(n/b)+n^p with constant a>=1 and b>1, non-leaf level work changes by a/b^p each depth. Compare this ratio with one before summing."
  ],
  [
    "The three Master theorem cases",
    "For T(n)=aT(n/b)+f(n), compare f(n) with n^(log_b a). The standard theorem requires fixed a>=1 and b>1 and applicable gap conditions."
  ],
  [
    "Balanced work adds a logarithm",
    "When f(n)=Theta(n^(log_b a)), each scale contributes comparable total work, producing an additional log n factor."
  ],
  [
    "Why the critical exponent appears",
    "At depth log_b(n), the tree has a^(log_b n)=n^(log_b a) leaves. This counts leaf work when each leaf has constant cost."
  ],
  [
    "Polynomial times logarithmic work",
    "For T(n)=2T(n/2)+n log2(n), adding level costs gives Theta(n log2(n) squared). A basic three-case shortcut needs care here."
  ],
  [
    "The log-log boundary case",
    "For T(n)=2T(n/2)+n/log2(n), stop the formula before size one and use a constant base cost. The level sum is harmonic, giving Theta(n log log n)."
  ],
  [
    "Check a recurrence before using a theorem",
    "For T(n)=2T(n/2)+n squared, the regularity condition holds since two copies of (n/2) squared equal n squared/2."
  ],
  [
    "Know when the Master theorem does not fit",
    "T(n)=T(n/3)+T(2n/3)+n has unequal subproblem fractions. The standard equal-size Master theorem cannot be applied directly."
  ],
  [
    "Transform square-root subproblems",
    "For T(n)=T(sqrt(n))+1 on n>=2, let m=log2(n). Then S(m)=S(m/2)+1, so the original growth is Theta(log log n)."
  ],
  [
    "Recover the original variable",
    "For T(n)=2T(sqrt(n))+log2(n), m=log2(n) gives S(m)=2S(m/2)+m. Substitute back to get Theta(log n log log n)."
  ],
  [
    "Changing variables with log work",
    "For T(n)=T(sqrt(n))+log2(n), m=log2(n) gives S(m)=S(m/2)+m. A geometric sum yields Theta(log n)."
  ],
  [
    "Solve in the transformed size",
    "For T(n)=T(n^(1/3))+(log2(n)) squared, m=log2(n) gives S(m)=S(m/3)+m squared, hence Theta((log n) squared)."
  ],
  [
    "Divide, solve, combine",
    "Divide and conquer creates smaller instances, solves them, and combines their answers. A singleton base case prevents endless splitting."
  ],
  [
    "Find a maximum by combining halves",
    "A maximum of two nonempty halves needs one final comparison of the two half-maxima. Finding the maximum of n items requires n-1 comparisons."
  ],
  [
    "Sum an array recursively",
    "The sum of a nonempty array is the sum of its two half-sums. Each value is used once, and n-1 additions combine n leaves."
  ],
  [
    "Searching both halves of an unsorted array",
    "Splitting an unsorted array does not tell which half contains a key. In the worst case both halves must be searched, so the work stays linear."
  ],
  [
    "Sort a suffix and insert its first key",
    "Sort the suffix of n-1 keys, then move the first key into its correct position. Linear insertion work gives T(n)=T(n-1)+Theta(n) and a quadratic worst case."
  ],
  [
    "Merge sort from sorted halves",
    "Merge sort recursively sorts both halves, then merges the sorted results. Linear combine work across logarithmically many levels gives Theta(n log n)."
  ],
  [
    "The two-frontier merge rule",
    "When both inputs are sorted, compare their current heads and emit the smaller one. Only the chosen input advances."
  ],
  [
    "Finish a merge safely",
    "When either sorted input is exhausted, copy the remaining suffix of the other input. The suffix is already sorted and needs no more key comparisons."
  ],
  [
    "Trace split and combine levels",
    "Merge sort splits down to singletons and combines upward. For n power-of-two keys, it has log2(n) merge rounds."
  ],
  [
    "Count merge-sort work",
    "A merge of two nonempty sorted lists totaling m keys needs at most m-1 key comparisons. Standard array merge sort also uses a linear auxiliary buffer."
  ],
  [
    "Merge comparison extremes",
    "Merging equal-sized lists can exhaust one list early or interleave keys until the end. Count head-to-head key comparisons separately from copying."
  ],
  [
    "Ties and stable merges",
    "A stable merge chooses the left item when equal keys meet. This preserves the original order of equal-key items across the split."
  ],
  [
    "Bounds for a complete merge sort",
    "For power-of-two n, the worst-case merge-sort comparison count is n log2(n)-n+1. This counts comparisons, not every assignment."
  ],
  [
    "Merge short runs into longer runs",
    "Bottom-up merge sort begins with sorted runs of length one and doubles the run width after each pass. No recursive call stack is needed."
  ],
  [
    "Handle the last incomplete run",
    "For width w, merge adjacent runs of up to w keys and clamp their end indices at n. A lone trailing run remains sorted without a merge partner."
  ],
  [
    "Work across bottom-up passes",
    "Each bottom-up pass processes O(n) values. Doubling the run width until it reaches n yields O(log n) passes and Theta(n log n) total time."
  ],
  [
    "Implement run-width doubling",
    "A safe bottom-up merge uses boundaries left, min(left+w,n), and min(left+2w,n). Advance left by 2w and double w after the pass."
  ],
  [
    "Merge many streams with a heap",
    "For k sorted streams containing N keys in total, keep one current head per nonempty stream in a min-heap. Each output updates one head, giving O(N log k) time."
  ],
  [
    "Balanced pairwise merging",
    "Repeatedly merging balanced pairs of k streams takes O(log k) rounds and O(N) total processing per round, giving O(N log k) time."
  ],
  [
    "Stability and auxiliary storage",
    "Stable sorting preserves the original order of equal keys. In-place normally means O(1) extra array storage; a recursive stack should be reported separately."
  ],
  [
    "Count peak live memory",
    "Peak auxiliary space counts memory simultaneously alive, not every allocation made over the entire run. Sequential reuse of a buffer does not add all buffer sizes."
  ],
  [
    "Maximum and runner-up",
    "The second largest distinct item must be among those that lost directly to the maximum in a comparison tournament, assuming all keys are distinct."
  ],
  [
    "A tournament saves comparisons",
    "For distinct keys and power-of-two n, a balanced tournament finds the maximum in n-1 comparisons. Its winner has log2(n) direct losers, requiring log2(n)-1 more comparisons."
  ],
  [
    "Keep the champion’s direct losers",
    "Store the opponents defeated directly by each advancing winner. After the champion is known, inspect only that champion’s direct-loser list for the runner-up."
  ],
  [
    "Pair comparisons for min and max",
    "Compare each pair first, then test its smaller key against the minimum and its larger key against the maximum. For even n this uses 3n/2-2 comparisons."
  ],
  [
    "Recursive min-max combination",
    "A subproblem returns both a minimum and a maximum. Combining two results needs two comparisons, one for each extremum."
  ],
  [
    "Find an item that is not an extremum",
    "For n>2 distinct keys, the middle of any three chosen keys is neither the overall minimum nor the overall maximum. Three comparisons suffice in the worst case."
  ],
  [
    "Separate extrema tasks",
    "A maximum, a second largest key, and a minimum-plus-maximum are different outputs with different comparison budgets. State the required result first."
  ],
  [
    "Describe a cost model explicitly",
    "The same algorithm has different counts for comparisons, moves and memory. Compare like operations under the same input assumptions."
  ],
  [
    "Quantify tightness and cases",
    "Theta(n squared) is a tight growth statement, while O(n cubed) may be a valid loose upper bound. Neither statement alone supplies an exact operation count."
  ],
  [
    "Inversions measure disagreement",
    "An inversion is a pair of indices i<j with A[i]>A[j]. Equal values are not inversions. Reversing a sorted list of distinct keys maximizes the count."
  ],
  [
    "Count inverted pairs by index",
    "Check index order and value order separately. A pair contributes exactly once when the earlier index has the larger value."
  ],
  [
    "Brute-force inversion counting",
    "Testing every unordered index pair checks n(n-1)/2 pairs. Counting only the pairs whose values decrease gives the inversion total."
  ],
  [
    "Count cross inversions while merging",
    "If a right head is smaller than a left head, it is smaller than every remaining key in that sorted left run. Add the remaining left-run length at once."
  ],
  [
    "Combine inversion counts",
    "Total inversions equal left-half inversions plus right-half inversions plus cross inversions. A merge counts cross inversions in linear time."
  ],
  [
    "Strict inequality matters",
    "Choose the left key on equality while counting inversions. Equal keys do not satisfy the strict larger-than definition."
  ],
  [
    "Closest points across a split",
    "The closest pair may lie within either half or across the split. With delta from the half-solutions, inspect points in a width-2delta strip around the dividing line."
  ],
  [
    "Preserve the y-sorted strip",
    "The closest-pair strip is scanned in y order. A packing bound limits candidate successors; preserving y order avoids sorting the strip again at every level."
  ],
  [
    "Exponentiation by squaring",
    "Compute x^e by reusing the half-exponent result. For even e, square x^(e/2); for odd e, multiply that square once more by x."
  ],
  [
    "Block matrix multiplication",
    "Ordinary block multiplication makes eight half-size products, giving Theta(n cubed) time. Strassen rearranges block expressions to use seven products plus quadratic combine work, giving Theta(n^(log2(7))) time."
  ],
  [
    "Partition before quicksort recursion",
    "Partition separates keys around a pivot, then recurse on the remaining regions. Unlike merge sort, quicksort does its linear organizing work before recursive sorting."
  ],
  [
    "Trace a pivot partition",
    "With distinct keys and a last-item pivot, Lomuto partition moves smaller keys to a growing left region, then swaps the pivot into its final position."
  ],
  [
    "Balanced, skewed and random pivots",
    "A randomized pivot gives expected Theta(n log n) time for distinct keys under the usual comparison model. A realized run can still take Theta(n squared)."
  ],
  [
    "When a pivot fixes its rank",
    "After a valid partition on distinct keys, the pivot has its final sorted rank. The two sides need not be internally sorted yet."
  ],
  [
    "Do not promise a balanced split",
    "Choosing an extreme pivot repeatedly leaves a subproblem of size n-1. Summing the partition costs gives a quadratic worst case."
  ],
  [
    "Expected comparisons in randomized quicksort",
    "For n distinct keys, randomized quicksort uses expected 2(n+1)H_n-4n comparisons, where H_n=sum(1/i). Expectation is over random choices."
  ],
  [
    "Select one rank instead of sorting all",
    "Quickselect follows only the partition side containing the desired rank. Randomized quickselect is expected linear, but has a quadratic worst case."
  ],
  [
    "Search a sorted range by halves",
    "Binary search requires sorted input. Comparing with the midpoint discards a half that cannot contain the target; bounds must shrink on every unsuccessful step."
  ],
  [
    "Adjacent comparisons in bubble sort",
    "Bubble sort compares adjacent keys and swaps inverted neighbors. A full left-to-right pass moves the largest remaining key to the right boundary."
  ],
  [
    "Insert into a sorted prefix",
    "Insertion sort shifts larger prefix keys right before placing the next key. Its moves relate to inversions; an already sorted input requires no shifts."
  ],
  [
    "Adapt sorting to nearly ordered input",
    "Insertion sort and bubble sort with an early-exit flag can run in linear time on already sorted input. Standard fixed-pass bubble sort remains quadratic."
  ],
  [
    "Selection sort versus heap sort",
    "Selection sort repeatedly scans the unsorted suffix for its minimum. Heap sort repeatedly removes the maximum from a max-heap; neither standard form is stable."
  ],
  [
    "Sorting as a comparison decision tree",
    "For distinct keys, comparison sorting must distinguish n! possible orders. A binary decision tree therefore needs worst-case height at least ceil(log2(n!))."
  ],
  [
    "Counting and radix sorting",
    "Counting sort uses a bounded integer-key range; radix sort applies a stable digit sort repeatedly. They bypass the comparison-only lower bound using key structure."
  ],
  [
    "Graph storage changes traversal cost",
    "An adjacency list uses O(V+E) storage. A V-by-V adjacency matrix uses Theta(V squared) storage and offers constant-time edge lookup."
  ],
  [
    "A frontier controls graph exploration",
    "Mark discovered vertices to avoid revisiting cycles. A queue explores in breadth-first layers; a stack or recursive call explores deeply first."
  ],
  [
    "Depth-first exploration and return",
    "DFS marks a vertex on discovery, explores each unvisited neighbor recursively, and returns when no unexplored neighbor remains. Neighbor order determines the exact trace."
  ],
  [
    "Recursive frames versus an explicit stack",
    "An explicit DFS frame can store a vertex and its next-neighbor index, matching recursive discovery and finish order. A simple vertex-only stack may produce a different valid DFS order."
  ],
  [
    "Discovery and finish intervals",
    "DFS timestamps increase on discovery and finish. Two vertex intervals are either nested, showing ancestry, or disjoint; they never partially overlap."
  ],
  [
    "Directed DFS edge roles",
    "A tree edge discovers a new vertex. A back edge reaches an active ancestor; a forward edge reaches a non-child descendant, and a cross edge connects unrelated finished branches."
  ],
  [
    "Why undirected DFS has fewer edge types",
    "In a simple undirected graph, DFS classifies each physical edge as tree or back. The reverse traversal of the parent tree edge is not evidence of a cycle."
  ],
  [
    "Back edges certify directed cycles",
    "In a directed graph, an edge to a gray active ancestor closes a cycle along the current DFS path. A full DFS forest has a back edge exactly when a directed cycle exists."
  ],
  [
    "Cycle detection with discovery state",
    "For directed cycle detection, distinguish unvisited, active and finished vertices. A visited neighbor alone is not sufficient: an edge to a finished vertex can be harmless."
  ],
  [
    "Finish times in a DAG",
    "In a directed acyclic graph, every edge u→v satisfies finish(u)>finish(v) after a complete DFS. Decreasing finish time therefore respects each prerequisite edge."
  ],
  [
    "Topological ordering of prerequisites",
    "A topological order puts every directed edge source before its destination. A finite directed graph has such an order exactly when it has no directed cycle; several valid orders may exist."
  ],
  [
    "Articulation points and low links",
    "In an undirected graph, removing an articulation vertex increases the number of connected components. A DFS root is a cut vertex only with at least two DFS children; a non-root u is one if some child v has low(v)>=discovery(u)."
  ],
  [
    "Explore in breadth-first layers",
    "BFS marks vertices when enqueuing and processes a FIFO queue. In an unweighted graph, a vertex’s layer number is its shortest-path distance in edges from the source."
  ],
  [
    "Queue layers and edge constraints",
    "A standard BFS queue contains at most two consecutive distance layers, with the smaller layer first. In an undirected graph, adjacent vertices have source distances differing by at most one."
  ],
  [
    "BFS paths and bipartite coloring",
    "A graph is bipartite exactly when it has no odd cycle. BFS can alternate two colors by layer, but every component must be checked and every edge must join opposite colors."
  ],
  [
    "When a greedy choice is safe",
    "A greedy method makes a locally preferred choice and commits to it. Correctness needs a task-specific argument; choosing the best-looking local option is not automatically globally optimal."
  ],
  [
    "Dijkstra’s settle-and-relax rule",
    "With nonnegative edge weights, Dijkstra repeatedly settles the smallest tentative distance and relaxes its outgoing edges. Settled distances are final under this weight assumption."
  ],
  [
    "Tentative distances can improve",
    "Relax u→v by comparing distance(v) with distance(u)+weight(u,v). Update the distance and predecessor only when the candidate is smaller."
  ],
  [
    "Zero-weight edges and equal candidates",
    "Dijkstra allows zero-weight edges. An equal-cost candidate need not change the distance; multiple equally short paths can exist without changing the shortest distance."
  ],
  [
    "Why negative edges break settling",
    "A negative edge can improve a vertex after it has been settled. The standard settle-once Dijkstra guarantee requires nonnegative weights, even when the graph has no cycle."
  ],
  [
    "Priority queues and decrease-key",
    "A min-priority queue extracts the smallest tentative distance. After a relaxation, decrease-key repairs the queue; a lazy duplicate-entry implementation must skip obsolete entries."
  ],
  [
    "Dijkstra operation budgets",
    "With adjacency lists and a binary heap supporting decrease-key, Dijkstra takes O((V+E) log V) time. Count up to V extractions and E edge relaxations separately."
  ],
  [
    "Storage choices change shortest-path cost",
    "An unsorted distance array gives O(V squared+E) time with adjacency lists. A binary heap gives O((V+E) log V); an adjacency matrix itself requires scanning V cells per processed vertex."
  ],
  [
    "Shortest paths in topological order",
    "A DAG can have negative edge weights without a cycle. Process vertices in topological order and relax each outgoing edge once to obtain single-source shortest paths in O(V+E) time."
  ],
  [
    "Repeated relaxation with Bellman-Ford",
    "Bellman-Ford repeatedly relaxes every directed edge. After k full passes, distances are correct for shortest paths using at most k edges, and an in-place pass may propagate even farther."
  ],
  [
    "Negative edges and reachable negative cycles",
    "Bellman-Ford handles negative edges. After V-1 full passes, another improving relaxation from a reachable vertex proves a reachable negative cycle; an unreachable negative cycle does not affect the chosen source."
  ],
  [
    "Early stopping and edge-order effects",
    "A full Bellman-Ford pass with no distance changes is a safe stopping condition. Stopping after one unchanged edge is unsafe; edge order changes propagation speed within an in-place pass."
  ],
  [
    "Connect every site at minimum total cost",
    "A minimum spanning tree connects all vertices of a connected undirected weighted graph with no cycle and minimum total edge weight. It has V-1 edges and is a different objective from shortest source-to-vertex paths."
  ],
  [
    "Safe cuts, heavy cycles and tied weights",
    "A lightest edge crossing a cut belongs to some MST, but ties do not force it into every MST. A uniquely lightest cut edge is mandatory; a uniquely heaviest cycle edge belongs to no MST."
  ],
  [
    "Kruskal joins different components",
    "Kruskal processes undirected edges in nondecreasing weight order and accepts an edge only when its endpoints are in different components. A disjoint-set structure tracks these components and prevents cycles."
  ],
  [
    "Reason about alternative spanning trees",
    "Distinct edge weights imply a unique MST, but tied weights do not automatically imply multiple MSTs. Exchange an edge along its fundamental cycle to test whether an equally cheap alternative exists."
  ],
  [
    "Grow one tree with Prim",
    "Prim grows a connected tree by selecting a lightest edge crossing from its current vertices to an outside vertex. The priority of an outside vertex is its cheapest connecting edge, not its total route distance."
  ],
  [
    "Two similar queues, different priorities",
    "Prim compares edge weight w(u,v) with the best connection key of v. Dijkstra compares distance(u)+w(u,v) with distance(v); their similar control flow optimizes different objectives."
  ],
  [
    "A spanning tree is not a shortest-path tree",
    "An MST minimizes the total chosen edge weight. A shortest-path tree minimizes each source-to-vertex distance; the two trees can differ on the same positive-weight graph."
  ],
  [
    "Prove uniqueness with cycle exchanges",
    "For a given spanning tree, inspect each non-tree edge against the heaviest edge on the tree path between its endpoints. A strictly cheaper replacement disproves optimality; an equal replacement proves a tied alternative."
  ],
  [
    "Bound a changing tree-edge weight",
    "Removing a tree edge splits the tree into two components. The edge remains safe if its new weight is no larger than the cheapest alternative edge crossing that cut; equality can create multiple MSTs."
  ],
  [
    "Update an MST after one weight change",
    "Decreasing a selected tree-edge weight or increasing an unselected edge weight preserves the current MST. The opposite changes can require a cut or cycle exchange."
  ],
  [
    "Huffman codes and prefix-free leaves",
    "A binary prefix code assigns symbols to tree leaves. No symbol’s code is a prefix of another, so a bit stream can be decoded by walking from the root to a leaf and restarting."
  ],
  [
    "Compute encoded length from frequencies",
    "The total encoded length is the sum of frequency times code length over all symbols. Huffman repeatedly combines the two smallest weights to minimize this weighted length among binary prefix codes."
  ],
  [
    "Heap operations in Huffman construction",
    "With a min-heap, each Huffman merge removes two smallest weights and inserts their sum. There are n-1 merges for n symbols, giving O(n log n) construction time."
  ],
  [
    "Decode from the root after every symbol",
    "Follow a zero or one branch for each bit, emit a symbol only at a leaf, and then restart at the root. Equal frequencies can produce different equally optimal codes."
  ],
  [
    "Ties and equally optimal codes",
    "Huffman trees and bit labels need not be unique. Swapping left and right children changes codewords while preserving every depth and the total encoded length."
  ],
  [
    "Full binary coding-tree counts",
    "A full binary tree has either zero or two children at each node. With n symbol leaves it has n-1 internal nodes and 2n-1 nodes in total."
  ],
  [
    "Merge the smallest files first",
    "When merging files costs the sum of their sizes, repeatedly merge the two smallest current files. Each original file contributes its size once for every merge above its leaf in the merge tree."
  ],
  [
    "Choose the most compatible activities",
    "Unweighted interval scheduling maximizes the number of nonoverlapping activities on one resource. With half-open intervals, an activity beginning exactly when another ends is compatible."
  ],
  [
    "Earliest finish leaves room for more",
    "Choose the compatible activity with earliest finishing time, then discard conflicting starts and repeat. Earliest start or shortest duration alone can give fewer activities."
  ],
  [
    "Exchange the first activity safely",
    "Replace the first activity of an optimal unweighted schedule by an earliest-finishing activity. Its finish is no later, so every later activity remains feasible; repeat on the remaining suffix."
  ],
  [
    "Match a scheduling rule to its objective",
    "Maximum-weight scheduling is different from maximum-count scheduling and may need dynamic programming. Minimizing rooms instead asks for the maximum number of simultaneously active intervals."
  ],
  [
    "Unit jobs with deadlines and profits",
    "For unit-duration jobs with integer deadlines and nonnegative profits, process larger profits first and place each accepted job in the latest free slot no later than its deadline."
  ],
  [
    "Fractional items and value density",
    "When items are divisible, take value per unit weight in descending order. A partially taken item contributes the same fraction of its total weight and total value."
  ],
  [
    "Select a density threshold without full sorting",
    "A linear-time fractional-knapsack method partitions items around a selected value-density threshold and recurses only on the side containing the capacity boundary. It requires linear-time selection rather than a complete sort."
  ],
  [
    "Store and reuse subproblem answers",
    "Dynamic programming defines states and transitions, then saves overlapping subproblem results. Memoization computes states on demand; tabulation processes them in a dependency-respecting order."
  ],
  [
    "Count one-step and two-step climbs",
    "Let ways(n) count ordered climbs totaling n with steps of size one or two. Then ways(0)=1, ways(1)=1 and ways(n)=ways(n-1)+ways(n-2)."
  ],
  [
    "Choose nonadjacent coin values",
    "To maximize the sum of nonadjacent nonnegative values, either skip the last value or take it with the best prefix ending two positions earlier. Store best(i)=max(best(i-1),value(i)+best(i-2)), with an empty-prefix answer of zero."
  ],
  [
    "Minimize paid stair cost",
    "At each indexed stair, pay its cost then move one or two steps. Starting at stair zero or one is allowed; reaching the top beyond the last stair costs nothing. Store the cheapest paid path to each stair."
  ],
  [
    "Race-to-wins probability states",
    "If team A wins each independent game with probability p, define P(i,j) as A’s chance to win a series when A needs i more wins and B needs j. Then P(i,j)=pP(i-1,j)+(1-p)P(i,j-1), with P(0,j)=1 and P(i,0)=0 for positive other indices."
  ],
  [
    "Fill tables after their dependencies",
    "A valid table-filling order follows the state dependency graph. Row-major order is safe only when it actually places all required predecessor cells earlier."
  ],
  [
    "Overlap distinguishes reusable subproblems",
    "Divide and conquer often solves independent smaller instances. Dynamic programming saves repeated states in an overlapping dependency graph; optimal substructure justifies how child answers combine."
  ],
  [
    "Subsequences can skip positions",
    "A subsequence retains order but may skip characters. An LCS is a longest sequence shared by two strings; it is not required to be a contiguous substring."
  ],
  [
    "LCS prefix states and recurrence",
    "For prefix lengths i,j, matching last characters give 1+L(i-1,j-1). Otherwise use max(L(i-1,j),L(i,j-1)); an empty prefix has LCS length zero."
  ],
  [
    "Repeated calls versus unique LCS states",
    "An uncached LCS recursion can revisit the same prefix pair many times. A table has (m+1)(n+1) prefix states including boundaries, so memoized or tabulated LCS needs O(mn) time."
  ],
  [
    "Choose the correct match and mismatch rule",
    "The LCS match branch advances both prefix boundaries and adds one. The mismatch branch drops one boundary at a time and takes a maximum, rather than adding both alternatives."
  ],
  [
    "Trace a filled LCS table",
    "Fill zero-valued empty-prefix boundaries, then use diagonal, upper and left predecessor cells. Reconstruct one LCS by following decisions backward from the final cell."
  ],
  [
    "Several longest answers can share a length",
    "Different longest common subsequences can have the same length. Counting distinct resulting strings is different from counting traceback paths, which may produce duplicates."
  ],
  [
    "LCS for comparison and edits",
    "LCS measures retained ordered content. With insertions and deletions only, the minimum edit count between lengths m and n is m+n-2L, where L is their LCS length."
  ],
  [
    "Prefix and suffix formulations",
    "LCS may be defined on prefixes or on suffixes. Keep indices and base cases consistent; a suffix recurrence advances indices, while a prefix recurrence decreases prefix lengths."
  ],
  [
    "Parenthesize compatible matrix products",
    "Matrix-chain optimization changes parentheses, not matrix order. Multiplying a p-by-q matrix by a q-by-r matrix costs pqr scalar multiplications and yields a p-by-r result."
  ],
  [
    "Count full parenthesizations",
    "For n matrices in fixed order, full binary parenthesizations number Catalan(n-1). The recurrence chooses a split and multiplies the left and right parenthesization counts."
  ],
  [
    "Try every final matrix-chain split",
    "For matrices i through j, choose the final split k. Add the two optimal subchain costs and the final multiplication cost p[i-1]p[k]p[j], then minimize over i<=k<j."
  ],
  [
    "Compare two matrix-chain orders",
    "For dimensions 10×30, 30×5 and 5×60, (AB)C costs 4500 multiplications, while A(BC) costs 27000. Both compute the same 10×60 result."
  ],
  [
    "Intervals give quadratic chain states",
    "Matrix-chain DP has O(n squared) interval states, and each interval tries O(n) split points. Increasing interval length respects dependencies and gives O(n cubed) time and O(n squared) space."
  ],
  [
    "Whole items break density greedy",
    "In 0-1 knapsack, each item is either taken whole or skipped. The highest value density need not lead to the best whole-item combination; the fractional greedy guarantee does not transfer."
  ],
  [
    "Knapsack item-and-capacity states",
    "For the first i items and integer capacity c, compare skipping item i with taking it once if its weight fits. The take branch uses the previous item row at capacity c-weight(i)."
  ],
  [
    "Follow competing knapsack choices",
    "Each 0-1 knapsack cell is the best value among feasible whole-item subsets of a prefix. Compare skip and take values explicitly instead of using density to force a choice."
  ],
  [
    "Unique capacity states and input size",
    "A 0-1 knapsack table has (n+1)(W+1) item-capacity states. O(nW) is pseudo-polynomial: it depends on numeric capacity W, which may be large relative to its bit length."
  ],
  [
    "Descending capacities prevent reuse",
    "For a one-row 0-1 knapsack update, process capacities downward so the take branch reads the previous item stage. Ascending updates can reuse the same item and solve an unbounded variant instead."
  ],
  [
    "Which subset sums are reachable",
    "For nonnegative integer values, subset-sum DP records whether each target is reachable by a subset of processed items. The empty subset reaches zero; a descending one-row update prevents item reuse."
  ],
  [
    "Coin change states and impossible totals",
    "With unlimited positive integer coin values, minimum-coin DP compares one coin plus the best answer for the remaining amount. Amount zero needs zero coins; unreachable totals must remain marked impossible."
  ],
  [
    "Choose DP, greedy or divide and conquer",
    "Choose a method from the structure of the task: prove a safe greedy choice, split independent smaller instances, or cache repeated states with a valid transition. A task name alone does not prove which method is correct."
  ],
  [
    "Allow intermediate vertices with Floyd-Warshall",
    "Floyd-Warshall updates d[i,j] using min(d[i,j],d[i,k]+d[k,j]) for one newly allowed intermediate vertex k at a time. The intermediate-vertex loop is outermost; a negative final diagonal indicates a negative cycle."
  ],
  [
    "Visit every city and return",
    "A travelling-salesperson tour visits each city once and returns to its starting city. Held-Karp DP records the visited subset and final city; its exact time is O(n squared times 2^n), not polynomial."
  ]
];
