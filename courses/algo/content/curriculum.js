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
  ]
];
