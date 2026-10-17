// Authored teaching guidance aligned with this course syllabus.
export const teachingNotes=[
  {
    "id": "sequential",
    "match": "latch|flip.flop|clock|counter|state|ring|johnson",
    "why": "State lets a circuit remember information across input changes.",
    "watchFor": "A latch is level-sensitive; an edge-triggered flip-flop samples on its specified clock edge. Asynchronous inputs can override clocked behavior.",
    "experiment": "Change an input, advance the stated event, and compare current Q with next Q."
  },
  {
    "id": "routing",
    "match": "mux|multiplex|demux|decoder|encoder|priority",
    "why": "Selection circuits route or encode information using control inputs.",
    "watchFor": "A selector chooses a route; it is not the data being routed. Priority encoders require a rule for multiple asserted inputs.",
    "experiment": "Change a selector or request and follow the selected data path."
  },
  {
    "id": "arithmetic",
    "match": "adder|carry|ripple|arithmetic|subtract",
    "why": "Bit-level rules build wider calculations and expose propagation delay.",
    "watchFor": "Carry and signed overflow answer different questions. A settled output and an intermediate ripple state are different.",
    "experiment": "Change input bits and compare the sum, carry and stated timing model."
  },
  {
    "id": "boolean",
    "match": "boolean|gate|truth|k.map|minterm|maxterm|sop|pos|cofactor",
    "why": "Boolean rules let us predict a circuit output and simplify a function.",
    "watchFor": "OR is Boolean disjunction, not ordinary integer addition. K-map neighbors differ in one variable.",
    "experiment": "Toggle one input and check the circuit output against its truth-table row."
  },
  {
    "id": "codes",
    "match": "binary|base|radix|number|gray|complement|parity|hamming",
    "why": "Codes assign meanings to bit patterns so values can be stored or checked.",
    "watchFor": "The same bits can represent different values under different signed or coding conventions.",
    "experiment": "Change the value and compare the encoded pattern using the stated width."
  },
  {
    "id": "logic",
    "match": ".*",
    "why": "A small complete input case makes an abstract logic rule testable.",
    "watchFor": "Use the stated polarity and initial state; a diagram alone does not define them.",
    "experiment": "Predict an output or next state and compare it with the model."
  }
];
