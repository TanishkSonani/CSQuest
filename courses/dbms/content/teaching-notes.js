// Authored teaching guidance aligned with this course syllabus.
export const teachingNotes=[
  {
    "id": "normalization",
    "match": "normal|dependenc|closure|key",
    "why": "Dependencies identify which facts belong together and which updates can become inconsistent.",
    "watchFor": "A dependency is a rule for every valid relation instance, not a coincidence in a few sample rows.",
    "experiment": "Compare rows that agree on a determinant; try a conflicting value and test the dependency."
  },
  {
    "id": "query",
    "match": "sql|join|algebra|calculus|select|project|aggregate|group|having|nested|correlat",
    "why": "Queries describe which facts should be returned from stored relations.",
    "watchFor": "SQL tables may contain duplicates and NULL. Relational set semantics and SQL bag semantics need different assumptions.",
    "experiment": "Change a filter or join and inspect the resulting rows, not just the query text."
  },
  {
    "id": "transaction",
    "match": "transaction|serializ|concurr|lock|timestamp|recover",
    "why": "Transactions coordinate multi-step work so concurrent updates obey stated guarantees.",
    "watchFor": "An interleaved schedule is not automatically incorrect; conflicting operation order determines conflict serializability.",
    "experiment": "Step through two transactions and track the shared value and operation order."
  },
  {
    "id": "index",
    "match": "index|b.tree|b\\+|isam|file|disk|block|storage",
    "why": "Files and indexes trade storage and update work for fewer page reads.",
    "watchFor": "An index does not guarantee one read or sorted query output. Clustering and selectivity affect the cost.",
    "experiment": "Follow the page choices and compare a sequential scan with a key-directed lookup."
  },
  {
    "id": "entity",
    "match": "entity|er model|relationship",
    "why": "A data model captures which real-world facts and relationships must remain valid.",
    "watchFor": "A relationship cardinality is a rule of the modeled domain, not the number of rows currently in a sample.",
    "experiment": "Change a record and check its key and relationship constraints."
  },
  {
    "id": "relation",
    "match": ".*",
    "why": "Relations make facts explicit so applications can query and validate them.",
    "watchFor": "A schema describes attributes and rules; one tuple is a record conforming to that schema.",
    "experiment": "Change a small table and test which rows satisfy the chosen rule."
  }
];
