export const units=[
  {
    "id": 0,
    "title": "Boolean algebra & K-maps",
    "color": "green",
    "icon": "binary",
    "range": [
      0,
      21
    ],
    "subtitle": "Learn the rule. Build the circuit. Make it stick.",
    "goal": "Describe logic gates, simplify Boolean expressions and group truth-table rows using Karnaugh maps."
  },
  {
    "id": 1,
    "title": "Number systems & codes",
    "color": "blue",
    "icon": "code",
    "range": [
      22,
      38
    ],
    "subtitle": "Learn the rule. Build the circuit. Make it stick.",
    "goal": "Convert number bases, encode signed values and distinguish binary, BCD and Gray codes."
  },
  {
    "id": 2,
    "title": "Combinational building blocks",
    "color": "purple",
    "icon": "chip",
    "range": [
      39,
      51
    ],
    "subtitle": "Learn the rule. Build the circuit. Make it stick.",
    "goal": "Build selection and routing functions with multiplexers, decoders and encoders."
  },
  {
    "id": 3,
    "title": "Timing & arithmetic circuits",
    "color": "orange",
    "icon": "bolt",
    "range": [
      52,
      62
    ],
    "subtitle": "Learn the rule. Build the circuit. Make it stick.",
    "goal": "Add binary values, follow carries and calculate delay through arithmetic circuits."
  },
  {
    "id": 4,
    "title": "Latches & flip-flops",
    "color": "teal",
    "icon": "memory",
    "range": [
      63,
      80
    ],
    "subtitle": "Learn the rule. Build the circuit. Make it stick.",
    "goal": "Predict stored bits using latches, flip-flops and their clock or direct-control inputs."
  },
  {
    "id": 5,
    "title": "Counters & state sequences",
    "color": "pink",
    "icon": "rocket",
    "range": [
      81,
      97
    ],
    "subtitle": "Learn the rule. Build the circuit. Make it stick.",
    "goal": "Trace counter states, calculate division ratios and compare ripple and synchronous designs."
  }
];
export const lecturePlans=[
  [
    "Why digital logic uses two states",
    "Signals become bits",
    "From a circuit to a rule",
    "Read the abstraction correctly"
  ],
  [
    "Boolean operations and circuits",
    "Meet NOT, AND, OR",
    "Switches tell a story",
    "Compose an expression"
  ],
  [
    "Binary place values and conversion",
    "Read powers of two",
    "Divide and collect remainders",
    "Use nearby powers"
  ],
  [
    "Fast decimal/binary practice",
    "Break down 600",
    "Keep every position",
    "Recognize useful patterns"
  ],
  [
    "NAND, NOR, XOR, XNOR and literals",
    "Invert gate outputs",
    "Different or equal?",
    "Count rows and literals"
  ],
  [
    "Boolean functions and laws",
    "A function is a mapping",
    "Prove by cases",
    "Apply De Morgan"
  ],
  [
    "Complement versus dual",
    "Find the complement",
    "Find the dual",
    "Check the difference"
  ],
  [
    "Simplify and justify",
    "Absorb redundant terms",
    "Prove an identity",
    "Shrink the implementation"
  ],
  [
    "SOP and POS standard forms",
    "Recognize terms",
    "Recognize whole forms",
    "Count functions"
  ],
  [
    "Minterm and maxterm row selectors",
    "Construct a minterm",
    "Construct a maxterm",
    "Respect index order"
  ],
  [
    "Properties of canonical terms",
    "One selected row",
    "Complement a term",
    "Read a row set"
  ],
  [
    "Express any function canonically",
    "Build canonical SOP",
    "Build canonical POS",
    "Equivalent, not dual"
  ],
  [
    "Canonical revision and set operations",
    "Translate names",
    "Combine one-row sets",
    "Expand missing variables"
  ],
  [
    "Convert POS and complement safely",
    "Find zeros from POS",
    "Complement into SOP",
    "Check both routes"
  ],
  [
    "K-map adjacency and cubes",
    "Explore a Gray-ordered map",
    "Combine one changing literal",
    "Make legal cubes"
  ],
  [
    "Choose large groups and permit overlap",
    "Use the largest useful group",
    "Overlap is useful",
    "Wrap around the map"
  ],
  [
    "Four-variable maps and POS minimization",
    "Place indices correctly",
    "Read fixed literals for SOP",
    "Group zeros for POS"
  ],
  [
    "Dont-cares and prime implicants",
    "Choose dont-cares deliberately",
    "Enlarge a useful cube",
    "Recognize a prime implicant"
  ],
  [
    "Essential prime implicants and minimum covers",
    "Prime versus essential",
    "Choose a complete cover",
    "Interpret implication"
  ],
  [
    "Dual functions and self-duality",
    "Compute the dual output column",
    "Test self-duality",
    "Count by complementary pairs"
  ],
  [
    "XOR algebra and parity",
    "XOR cancels pairs",
    "Read parity",
    "Track XNOR chains"
  ],
  [
    "Positive and negative logic conventions",
    "Assign levels to values",
    "Reinterpret a physical gate",
    "Connect conventions to duality"
  ],
  [
    "Radix, octal, hex and fractions",
    "Understand radix weights",
    "Convert integer parts",
    "Convert fractional parts"
  ],
  [
    "Group bits into octal and hex",
    "Three-bit octal groups",
    "Four-bit hexadecimal groups",
    "Handle the radix point"
  ],
  [
    "Binary addition and carry",
    "Two-bit arithmetic",
    "Include incoming carry",
    "Propagate across columns"
  ],
  [
    "Radix complements and subtraction",
    "Define both complements",
    "Complement bits efficiently",
    "Subtract using addition"
  ],
  [
    "Practice radix-complement subtraction",
    "Align operand widths",
    "Handle a final carry",
    "Read negative results"
  ],
  [
    "Diminished-complement subtraction",
    "Use the diminished complement",
    "Apply end-around carry",
    "No carry and negative zero"
  ],
  [
    "Interpret signed bit patterns",
    "Sign and magnitude",
    "Decode complement forms",
    "Ask for the representation"
  ],
  [
    "Ranges and zero representations",
    "Symmetric signed ranges",
    "Twos-complement asymmetry",
    "Patterns versus numbers"
  ],
  [
    "Add signed values in different systems",
    "Handle sign-magnitude cases",
    "Add twos-complement patterns",
    "Keep range in view"
  ],
  [
    "Addition, subtraction and end-around carry",
    "Ones-complement addition",
    "Twos-complement subtraction",
    "Compare carry rules"
  ],
  [
    "Define overflow using the representation",
    "Compare with the allowed range",
    "Unsigned carry versus signed sign",
    "Use operand signs"
  ],
  [
    "Detect signed overflow correctly",
    "Inspect the three signs",
    "Compare sign-bit carries",
    "Keep encodings separate"
  ],
  [
    "Extend signed values without changing them",
    "Unsigned zero extension",
    "Complement-form sign extension",
    "Sign-magnitude is different"
  ],
  [
    "Binary codes and minimum width",
    "Assign distinguishable words",
    "Count available patterns",
    "Spend redundancy to detect errors"
  ],
  [
    "BCD, weighted codes and self-complementarity",
    "Encode each decimal digit",
    "Weighted codes and character codes",
    "Excess-three and self-complementary codes"
  ],
  [
    "Reflected Gray codes",
    "One-bit transitions",
    "Reflect the shorter sequence",
    "Convert binary to Gray"
  ],
  [
    "Compute Gray using a shift and XOR",
    "Shift one place",
    "Apply the XOR shortcut",
    "Measure bit differences"
  ],
  [
    "Compact truth tables and cofactors",
    "Read a compact row",
    "Reconstruct the expression",
    "Expand and verify"
  ],
  [
    "Multiplexers select one data input",
    "Choose the data route",
    "Write a 2-to-1 rule",
    "Build the four branches"
  ],
  [
    "Realize Boolean functions with a mux",
    "Tie data pins to constants",
    "Use the selector cofactors",
    "Check a nontrivial gate"
  ],
  [
    "Mux practice: choose the right cofactors",
    "Route and read an input",
    "Solve a Boolean function",
    "Derive branches from minterms"
  ],
  [
    "How small a mux can realize a function?",
    "Use the complete output column",
    "Leave one variable on data pins",
    "Recognize the hardware constraint"
  ],
  [
    "Build large muxes from smaller muxes",
    "Combine two levels",
    "Count components and depth",
    "Assign selector groups"
  ],
  [
    "Enable inputs and active levels",
    "Enable versus select",
    "Active-high enable",
    "Active-low enable"
  ],
  [
    "Demultiplexers distribute one input",
    "One in, many out",
    "Write each output rule",
    "Follow the data value"
  ],
  [
    "Binary encoders and one-hot assumptions",
    "Encode an active input index",
    "Derive output bits",
    "Respect the valid domain"
  ],
  [
    "Priority encoders",
    "Choose the winning request",
    "Separate validity from the code",
    "Build priority-aware equations"
  ],
  [
    "Binary decoders",
    "Decode an address",
    "Wire the minterms",
    "Control decoding with enable"
  ],
  [
    "Active-low decoders",
    "Read one-low output vectors",
    "Use NAND minterms",
    "Keep enable polarity independent"
  ],
  [
    "Realize Boolean functions with decoders",
    "Select the true minterms",
    "Match the combining gate to polarity",
    "Plan the implementation"
  ],
  [
    "Propagation delay and timing",
    "Shift a transition in time",
    "Accumulate serial delays",
    "Find the critical path"
  ],
  [
    "Half adders",
    "Split the result into sum and carry",
    "Recognize the missing input",
    "Time the implementation"
  ],
  [
    "Full adders",
    "Add three bits",
    "Combine two half adders",
    "Distinguish parity and majority"
  ],
  [
    "Ripple carry adders",
    "Connect the columns",
    "Trace an addition",
    "Follow the carry delay"
  ],
  [
    "Generate, propagate, and kill",
    "Classify each operand pair",
    "Compute local G and P",
    "Time the local logic"
  ],
  [
    "Carry look-ahead equations",
    "Use the carry recurrence",
    "Expand away the ripple dependency",
    "Count the two-level network"
  ],
  [
    "Look-ahead timing and fan-in",
    "Keep the initial carry explicit",
    "Add all timing stages",
    "Respect the fan-in limit"
  ],
  [
    "Count a look-ahead carry generator",
    "Define the counting boundary",
    "Count AND products per carry",
    "Generalize the count carefully"
  ],
  [
    "Bounded-fan-in look-ahead scaling",
    "Separate the stages",
    "Reduce terms through binary trees",
    "Compare growth rates"
  ],
  [
    "Timing a two-half-adder ripple chain",
    "Time one full adder",
    "Advance through the carry chain",
    "Find the requested sum time"
  ],
  [
    "Signed addition and carry handling",
    "Encode before adding",
    "Apply the end-around carry",
    "Retain the twos-complement sum"
  ],
  [
    "Combinational versus sequential circuits",
    "Classify by dependence",
    "Trace state updates",
    "Read time-indexed notation"
  ],
  [
    "One-bit storage with feedback",
    "Identify stable feedback states",
    "Count independent stored information",
    "Distinguish retention from control"
  ],
  [
    "Active-high NOR SR latches",
    "Set, reset, and hold",
    "Trace controlled storage",
    "Avoid simultaneous controls"
  ],
  [
    "Active-low NAND SR latches",
    "Interpret active-low controls",
    "Compare NOR and NAND conventions",
    "Identify the forbidden condition"
  ],
  [
    "Latch timing and clock signals",
    "Trace set, hold, and reset",
    "Read the clock waveform",
    "Convert period and frequency"
  ],
  [
    "SR storage and excitation",
    "Compute the SR next state",
    "Respect the clock control",
    "Choose controls for a desired transition"
  ],
  [
    "D storage elements",
    "Copy the data at an update",
    "Derive D from SR controls",
    "Find excitation and capture sequences"
  ],
  [
    "Clock levels and active edges",
    "Classify four clock responses",
    "Sample at the right edge",
    "Distinguish transparency from sampling"
  ],
  [
    "JK flip-flops",
    "Use all four JK operations",
    "Evaluate the JK state equation",
    "Find JK excitation controls"
  ],
  [
    "T flip-flops",
    "Hold or toggle a stored bit",
    "Choose T and implement it with JK",
    "Trace toggles and unknown controls"
  ],
  [
    "Storage terminology and clock response",
    "Read the actual circuit behavior",
    "Share one clock across different elements",
    "Use precise timing descriptions"
  ],
  [
    "Convert flip-flop behavior",
    "Follow the conversion method",
    "Convert between D and T",
    "Implement JK with available D storage"
  ],
  [
    "PN storage behavior and conversion",
    "Decode the four PN operations",
    "Derive the PN state equation",
    "Find PN excitation and D conversion"
  ],
  [
    "Convert between SR and T behavior",
    "Make SR storage toggle",
    "Make T storage act like SR",
    "Implement the state-dependent choice"
  ],
  [
    "Asynchronous preset and clear",
    "Decode active-low direct controls",
    "Apply direct-input priority",
    "Initialize and then resume normal operation"
  ],
  [
    "Practice clocked and asynchronous updates",
    "Trace JK with direct overrides",
    "Allow setup time before capture",
    "Identify operations from controls"
  ],
  [
    "Master–slave storage",
    "Separate the two phases",
    "Find the effective capture edge",
    "Reverse the phase order"
  ],
  [
    "Race-around in level-sensitive toggle storage",
    "Recognize repeated toggling",
    "Trace a delayed toggle loop",
    "Control the update opportunity"
  ],
  [
    "Counters and their state sequences",
    "Follow a predetermined sequence",
    "Count states and stored bits",
    "Distinguish common and ripple clocks"
  ],
  [
    "Divide a clock frequency by two",
    "Configure one toggling bit",
    "Use equivalent D and JK dividers",
    "Convert divider frequencies"
  ],
  [
    "Two-stage ripple division and counting",
    "Cascade the frequency division",
    "Trace rising-edge Q-linked down counting",
    "Include the ripple transit state"
  ],
  [
    "Binary down ripple counters",
    "Choose clocks for down counting",
    "Trace borrow propagation",
    "Compute capacity, frequency, and delay"
  ],
  [
    "Binary up and truncated ripple counters",
    "Choose clocks for up counting",
    "Trace carry and settling",
    "Truncate the stable cycle"
  ],
  [
    "Cascade counters and division ratios",
    "Multiply the moduli",
    "Compute output frequencies",
    "Build a slow timebase"
  ],
  [
    "Count through a selected range",
    "Define the stable range",
    "Reload the starting bit pattern",
    "Decode and initialize deliberately"
  ],
  [
    "Realize a modulo-six ripple counter",
    "Configure D toggle stages",
    "Exclude the reset-triggering pattern",
    "Choose clear polarity correctly"
  ],
  [
    "Ripple-counter maximum clock rate",
    "Accumulate the stage delays",
    "Convert delay to maximum frequency",
    "Compare a clock against the bound"
  ],
  [
    "Budget propagation delay per ripple stage",
    "Find the number of stages",
    "Rearrange the timing inequality",
    "Check the units and the total budget"
  ],
  [
    "Reload a selected down-count range",
    "Find the last stable and first unwanted values",
    "Detect and preset the upper endpoint",
    "Verify count direction and wrap"
  ],
  [
    "Analyze synchronous next-state equations",
    "Use the old state for every stage",
    "Find the reachable cycle",
    "Analyze another initial state"
  ],
  [
    "Analyze a synchronous JK counter",
    "Extract the JK input functions",
    "Trace the reachable five-state cycle",
    "Check transitions outside the cycle"
  ],
  [
    "Trace a custom synchronous T counter",
    "Apply the T inputs simultaneously",
    "Use the reachable period",
    "Distinguish transients and fixed points"
  ],
  [
    "Design synchronous binary counters",
    "Derive toggle enables",
    "Choose T or D storage equations",
    "Budget the synchronous critical path"
  ],
  [
    "Ring counters and one-hot timing",
    "Rotate the one-hot pattern",
    "Initialize and preserve one-hot state",
    "Compare two timing-signal implementations"
  ],
  [
    "Twisted-ring and Johnson timing counters",
    "Trace complemented feedback",
    "Decode one timing signal per state",
    "Compare ring and twisted-ring capacity"
  ]
];
export const unitForLecture=index=>units.find(u=>index>=u.range[0]&&index<=u.range[1]);
