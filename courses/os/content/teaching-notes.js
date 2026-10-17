// Authored teaching guidance aligned with this course syllabus.
export const teachingNotes=[
  {
    "id": "scheduling",
    "match": "schedul|cpu|burst|round.robin|priority|aging|process state",
    "why": "Scheduling shares a CPU among ready work while making waiting time visible.",
    "watchFor": "Blocked is not ready. A timeline must respect arrivals, remaining burst time and the scheduling rule.",
    "experiment": "Compare FCFS and round-robin on the same jobs; change the quantum and inspect completion times."
  },
  {
    "id": "memory",
    "match": "memory|pag|segment|tlb|address|replacement",
    "why": "Virtual memory separates a program's addresses from physical placement.",
    "watchFor": "A TLB miss is not necessarily a page fault. Page offsets are preserved during translation.",
    "experiment": "Change a virtual address or replacement policy and follow the resulting mapping or fault."
  },
  {
    "id": "concurrency",
    "match": "race|thread|critical|peterson|atomic|semaphore|producer|consumer|synchron|ipc",
    "why": "Synchronization controls which shared-state interleavings are allowed.",
    "watchFor": "A read-modify-write sequence is not automatically atomic. Mutual exclusion alone does not guarantee fairness.",
    "experiment": "Compare an unsafe interleaving with a protected increment and count the final updates."
  },
  {
    "id": "deadlock",
    "match": "deadlock|banker|resource",
    "why": "Resource reasoning helps distinguish temporary waiting from a system that cannot proceed.",
    "watchFor": "A cycle implies deadlock in a single-instance resource graph, but not generally with multiple instances. Unsafe is not identical to already deadlocked.",
    "experiment": "Trace ownership and waiting edges before deciding whether a process can finish."
  },
  {
    "id": "files",
    "match": "file|disk|directory|allocation",
    "why": "File systems map names and logical file positions to storage blocks.",
    "watchFor": "Logical adjacency does not guarantee physical adjacency; metadata reads also contribute to cost.",
    "experiment": "Follow a lookup and compare data blocks with the metadata used to reach them."
  },
  {
    "id": "process",
    "match": ".*",
    "why": "The OS mediates protected access to processors, memory and devices.",
    "watchFor": "A process is not a program file. Fork creates a process; exec replaces the running program image.",
    "experiment": "Follow an event and distinguish application state from kernel-managed state."
  }
];
