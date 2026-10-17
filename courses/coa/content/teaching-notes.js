// Authored teaching guidance aligned with this course syllabus.
export const teachingNotes=[
  {
    "id": "cache",
    "match": "cache|locality|replacement|amat",
    "why": "A cache reduces average access cost when nearby or recent data is reused.",
    "watchFor": "A line index alone does not prove a hit; the entry must be valid and its tag must match.",
    "experiment": "Change an address or miss rate and compare the selected fields or average cost."
  },
  {
    "id": "memory",
    "match": "memory|address|endian|bank|array|storage|bus",
    "why": "Storage organization determines how addresses select bytes or wider cells.",
    "watchFor": "An address is not its stored value. Byte order changes storage layout, not the numeric value.",
    "experiment": "Change the address and follow which cell, bank or field is selected."
  },
  {
    "id": "execute",
    "match": "cpu|fetch|instruction|operand|opcode|register|datapath|control|isa|branch",
    "why": "A processor turns an instruction into transfers and operations on stored state.",
    "watchFor": "Fetching an instruction is different from executing it. An effective address can differ from the operand value.",
    "experiment": "Advance one transfer and track the register or memory value that changes."
  },
  {
    "id": "representation",
    "match": "binary|float|fixed|signed|number|complement|flag",
    "why": "Bit formats give stored patterns a numeric interpretation.",
    "watchFor": "Unsigned carry and signed overflow differ. Floating-point rounding can lose information.",
    "experiment": "Change the value and interpret the fields under the stated format."
  },
  {
    "id": "architecture",
    "match": ".*",
    "why": "Separating storage, computation and input/output clarifies how a computer runs a program.",
    "watchFor": "This is a simplified architectural model, not a timing guarantee for every processor.",
    "experiment": "Follow one piece of data through the named components."
  }
];
