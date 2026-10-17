// Authored teaching guidance aligned with this course syllabus.
export const teachingNotes=[
  {
    "id": "addressing",
    "match": "subnet|cidr|ipv4|address|mask",
    "why": "Prefixes let routers group destinations without storing a separate route for every host.",
    "watchFor": "A prefix length counts network bits; it is not a host count. Ordinary host-count formulas have exceptions such as /31 and /32.",
    "experiment": "Change the prefix and compare the resulting network, broadcast and host range."
  },
  {
    "id": "reliability",
    "match": "tcp|window|reliable|ack|stop|retrans|timer",
    "why": "Acknowledgments, windows and timers coordinate delivery over unreliable links.",
    "watchFor": "An ACK lost in transit does not imply the data was lost. Retransmitted bytes must not be delivered twice.",
    "experiment": "Advance a message or loss event and compare sender and receiver state."
  },
  {
    "id": "routing",
    "match": "rout|forward|ip fragment|ttl|nat",
    "why": "Each router chooses a next hop while respecting IP forwarding rules.",
    "watchFor": "The next-hop link address can change while the end-to-end destination IP stays the same, except at mechanisms such as NAT.",
    "experiment": "Change a path cost, TTL or MTU and follow the affected forwarding decision."
  },
  {
    "id": "error",
    "match": "crc|parity|hamming|checksum|error",
    "why": "Redundant check information helps detect or correct specified error patterns.",
    "watchFor": "Detection is not the same as correction. No finite checksum detects every possible corruption.",
    "experiment": "Introduce one controlled bit change and compare the receiver check."
  },
  {
    "id": "rates",
    "match": "delay|bandwidth|congest|aloha|csma|bucket|traffic|queue",
    "why": "Rates and delays describe distinct bottlenecks in a communication path.",
    "watchFor": "Bandwidth is a rate; propagation delay depends on distance and signal speed. Keep bits, bytes and time units consistent.",
    "experiment": "Change one parameter while holding the others fixed and compare the calculated outcome."
  },
  {
    "id": "network",
    "match": ".*",
    "why": "Layering separates application meaning from end-to-end transport and local-link delivery.",
    "watchFor": "A packet, frame and application message describe different protocol boundaries.",
    "experiment": "Advance one message and identify which layer adds, reads or removes each field."
  }
];
