// Three source-linked, guided learning stages with an interactive network lab for every topic.
export const lessons=[
  {
    "id": 0,
    "lecture": 0,
    "title": "How the Internet moves data · Discover",
    "concept": "A network moves data through cooperating layers and links. Applications name the service they need, transport protocols connect processes, IP forwards packets between networks, and link protocols deliver each hop. A network is a chain of independently managed links and routers. Each hop forwards a frame locally while the IP packet keeps its end-to-end destination.",
    "teachingSteps": [
      "Discover: Identify the data unit and layer that currently handles it.",
      "A network is a chain of independently managed links and routers. Each hop forwards a frame locally while the IP packet keeps its end-to-end destination.",
      "Add or remove that layer’s header at the host or forwarding device."
    ],
    "foundation": {
      "title": "How the Internet moves data",
      "idea": "A network moves data through cooperating layers and links. Applications name the service they need, transport protocols connect processes, IP forwards packets between networks, and link protocols deliver each hop. A network is a chain of independently managed links and routers. Each hop forwards a frame locally while the IP packet keeps its end-to-end destination.",
      "terms": [
        "Packet: A unit of network-layer data carrying source and destination IP addresses.",
        "Frame: A link-layer unit delivered across one local network hop.",
        "Encapsulation: Wrapping data with the headers a lower layer needs to deliver it."
      ],
      "example": "A phone request crosses Wi-Fi, an ISP router and a server network; each link changes its local frame while the destination IP remains the target."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "How the Internet moves data · Discover: A router receives an Ethernet frame addressed to its interface. Which item does it inspect to choose the next network? Which networking rule determines the result?",
        "options": [
          "The destination IP address",
          "The source application port alone",
          "The Ethernet preamble"
        ],
        "answer": 0,
        "explanation": "The destination IP address. Identify the data unit and layer that currently handles it."
      },
      {
        "type": "match",
        "prompt": "How the Internet moves data · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Packet",
            "A unit of network-layer data carrying source and destination IP addresses."
          ],
          [
            "Frame",
            "A link-layer unit delivered across one local network hop."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "How the Internet moves data · Discover: put the actions in a valid working sequence.",
        "items": [
          "Name the sender’s application data",
          "Add transport and IP information",
          "Wrap the packet in a local-link frame"
        ],
        "explanation": "Identify the data unit and layer that currently handles it. Add or remove that layer’s header at the host or forwarding device. Follow the local hop and preserve end-to-end fields that still apply."
      },
      {
        "type": "choice",
        "prompt": "How the Internet moves data · Discover: which statement is accurate for how the internet moves data?",
        "options": [
          "The destination IP address",
          "The source application port alone",
          "The Ethernet preamble"
        ],
        "answer": 0,
        "explanation": "The destination IP address. A network is a chain of independently managed links and routers. Each hop forwards a frame locally while the IP packet keeps its end-to-end destination."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "layers",
      "mode": "layers",
      "lecture": 0
    },
    "cnScene": [
      "Identify the data unit and layer that currently handles it.",
      "A network is a chain of independently managed links and routers. Each hop forwards a frame locally while the IP packet keeps its end-to-end destination.",
      "Follow the local hop and preserve end-to-end fields that still apply."
    ],
    "sourceReferences": [
      {
        "start": 630.62,
        "end": 656.1,
        "text": " which means you still don't know that how these two apps are communicating you don't know that okay if you're sending some packet to a computer network which might be having more than one host obviously right so there might be more than one computer so how to uniquely identify one computer from other computer so there are many many questions which are still answered but for now we will say that okay our collection of computers which we are somehow communicating each other"
      },
      {
        "start": 6556.22,
        "end": 6589.66,
        "text": " And there is some other device here. Whatever this is. Now here, billions of devices are already here. If you are sending some packet, it should safely reach to you, isn't it? So now, now in order to safely reach to you, you must be, you must be, I mean, every, every, there are routers here. Every router will be saying that, okay, it should go here, it should go here or wherever. So every router will be navigating it somewhere."
      }
    ],
    "start": 0
  },
  {
    "id": 1,
    "lecture": 0,
    "title": "How the Internet moves data · Explore",
    "concept": "A network moves data through cooperating layers and links. Applications name the service they need, transport protocols connect processes, IP forwards packets between networks, and link protocols deliver each hop. A network is a chain of independently managed links and routers. Each hop forwards a frame locally while the IP packet keeps its end-to-end destination.",
    "teachingSteps": [
      "Explore: Add or remove that layer’s header at the host or forwarding device.",
      "A network is a chain of independently managed links and routers. Each hop forwards a frame locally while the IP packet keeps its end-to-end destination.",
      "Follow the local hop and preserve end-to-end fields that still apply."
    ],
    "foundation": {
      "title": "How the Internet moves data",
      "idea": "A network moves data through cooperating layers and links. Applications name the service they need, transport protocols connect processes, IP forwards packets between networks, and link protocols deliver each hop. A network is a chain of independently managed links and routers. Each hop forwards a frame locally while the IP packet keeps its end-to-end destination.",
      "terms": [
        "Packet: A unit of network-layer data carrying source and destination IP addresses.",
        "Frame: A link-layer unit delivered across one local network hop.",
        "Encapsulation: Wrapping data with the headers a lower layer needs to deliver it."
      ],
      "example": "A phone request crosses Wi-Fi, an ISP router and a server network; each link changes its local frame while the destination IP remains the target."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "How the Internet moves data · Explore: A router receives an Ethernet frame addressed to its interface. Which item does it inspect to choose the next network? Which step should the host or router take next?",
        "options": [
          "Name the sender’s application data",
          "Add transport and IP information",
          "Wrap the packet in a local-link frame"
        ],
        "answer": 1,
        "explanation": "Add transport and IP information. Add or remove that layer’s header at the host or forwarding device."
      },
      {
        "type": "match",
        "prompt": "How the Internet moves data · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Frame",
            "A link-layer unit delivered across one local network hop."
          ],
          [
            "Encapsulation",
            "Wrapping data with the headers a lower layer needs to deliver it."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "How the Internet moves data · Explore: put the actions in a valid working sequence.",
        "items": [
          "Name the sender’s application data",
          "Add transport and IP information",
          "Wrap the packet in a local-link frame"
        ],
        "explanation": "Identify the data unit and layer that currently handles it. Add or remove that layer’s header at the host or forwarding device. Follow the local hop and preserve end-to-end fields that still apply."
      },
      {
        "type": "choice",
        "prompt": "How the Internet moves data · Explore: which statement is accurate for how the internet moves data?",
        "options": [
          "The destination IP address",
          "The source application port alone",
          "The Ethernet preamble"
        ],
        "answer": 0,
        "explanation": "The destination IP address. A network is a chain of independently managed links and routers. Each hop forwards a frame locally while the IP packet keeps its end-to-end destination."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "layers",
      "mode": "layers",
      "lecture": 0
    },
    "cnScene": [
      "Identify the data unit and layer that currently handles it.",
      "A network is a chain of independently managed links and routers. Each hop forwards a frame locally while the IP packet keeps its end-to-end destination.",
      "Follow the local hop and preserve end-to-end fields that still apply."
    ],
    "sourceReferences": [
      {
        "start": 630.62,
        "end": 656.1,
        "text": " which means you still don't know that how these two apps are communicating you don't know that okay if you're sending some packet to a computer network which might be having more than one host obviously right so there might be more than one computer so how to uniquely identify one computer from other computer so there are many many questions which are still answered but for now we will say that okay our collection of computers which we are somehow communicating each other"
      },
      {
        "start": 6556.22,
        "end": 6589.66,
        "text": " And there is some other device here. Whatever this is. Now here, billions of devices are already here. If you are sending some packet, it should safely reach to you, isn't it? So now, now in order to safely reach to you, you must be, you must be, I mean, every, every, there are routers here. Every router will be saying that, okay, it should go here, it should go here or wherever. So every router will be navigating it somewhere."
      }
    ],
    "start": 1
  },
  {
    "id": 2,
    "lecture": 0,
    "title": "How the Internet moves data · Apply",
    "concept": "A network moves data through cooperating layers and links. Applications name the service they need, transport protocols connect processes, IP forwards packets between networks, and link protocols deliver each hop. A network is a chain of independently managed links and routers. Each hop forwards a frame locally while the IP packet keeps its end-to-end destination.",
    "teachingSteps": [
      "Apply: Follow the local hop and preserve end-to-end fields that still apply.",
      "A network is a chain of independently managed links and routers. Each hop forwards a frame locally while the IP packet keeps its end-to-end destination.",
      "Identify the data unit and layer that currently handles it."
    ],
    "foundation": {
      "title": "How the Internet moves data",
      "idea": "A network moves data through cooperating layers and links. Applications name the service they need, transport protocols connect processes, IP forwards packets between networks, and link protocols deliver each hop. A network is a chain of independently managed links and routers. Each hop forwards a frame locally while the IP packet keeps its end-to-end destination.",
      "terms": [
        "Packet: A unit of network-layer data carrying source and destination IP addresses.",
        "Frame: A link-layer unit delivered across one local network hop.",
        "Encapsulation: Wrapping data with the headers a lower layer needs to deliver it."
      ],
      "example": "A phone request crosses Wi-Fi, an ISP router and a server network; each link changes its local frame while the destination IP remains the target."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "How the Internet moves data · Apply: A new case changes one condition: A router receives an Ethernet frame addressed to its interface. Which item does it inspect to choose the next network? Which conclusion still follows?",
        "options": [
          "The source application port alone",
          "The Ethernet preamble",
          "The destination IP address"
        ],
        "answer": 2,
        "explanation": "The destination IP address. Follow the local hop and preserve end-to-end fields that still apply."
      },
      {
        "type": "match",
        "prompt": "How the Internet moves data · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Encapsulation",
            "Wrapping data with the headers a lower layer needs to deliver it."
          ],
          [
            "Packet",
            "A unit of network-layer data carrying source and destination IP addresses."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "How the Internet moves data · Apply: put the actions in a valid working sequence.",
        "items": [
          "Name the sender’s application data",
          "Add transport and IP information",
          "Wrap the packet in a local-link frame"
        ],
        "explanation": "Identify the data unit and layer that currently handles it. Add or remove that layer’s header at the host or forwarding device. Follow the local hop and preserve end-to-end fields that still apply."
      },
      {
        "type": "choice",
        "prompt": "How the Internet moves data · Apply: which statement is accurate for how the internet moves data?",
        "options": [
          "The destination IP address",
          "The source application port alone",
          "The Ethernet preamble"
        ],
        "answer": 0,
        "explanation": "The destination IP address. A network is a chain of independently managed links and routers. Each hop forwards a frame locally while the IP packet keeps its end-to-end destination."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "layers",
      "mode": "layers",
      "lecture": 0
    },
    "cnScene": [
      "Identify the data unit and layer that currently handles it.",
      "A network is a chain of independently managed links and routers. Each hop forwards a frame locally while the IP packet keeps its end-to-end destination.",
      "Follow the local hop and preserve end-to-end fields that still apply."
    ],
    "sourceReferences": [
      {
        "start": 630.62,
        "end": 656.1,
        "text": " which means you still don't know that how these two apps are communicating you don't know that okay if you're sending some packet to a computer network which might be having more than one host obviously right so there might be more than one computer so how to uniquely identify one computer from other computer so there are many many questions which are still answered but for now we will say that okay our collection of computers which we are somehow communicating each other"
      },
      {
        "start": 6556.22,
        "end": 6589.66,
        "text": " And there is some other device here. Whatever this is. Now here, billions of devices are already here. If you are sending some packet, it should safely reach to you, isn't it? So now, now in order to safely reach to you, you must be, you must be, I mean, every, every, there are routers here. Every router will be saying that, okay, it should go here, it should go here or wherever. So every router will be navigating it somewhere."
      }
    ],
    "start": 2
  },
  {
    "id": 3,
    "lecture": 1,
    "title": "Classless addressing and CIDR · Discover",
    "concept": "An IPv4 address has 32 bits. A CIDR prefix marks how many leading bits identify a network; the remaining bits form the host portion and determine the size and alignment of the address block. CIDR writes an IPv4 network as address/prefix. The prefix bits identify the network; the remaining bits identify addresses within that block.",
    "teachingSteps": [
      "Discover: Read the address and prefix to identify network and host bits.",
      "CIDR writes an IPv4 network as address/prefix. The prefix bits identify the network; the remaining bits identify addresses within that block.",
      "Compute the block size from the number of host bits."
    ],
    "foundation": {
      "title": "Classless addressing and CIDR",
      "idea": "An IPv4 address has 32 bits. A CIDR prefix marks how many leading bits identify a network; the remaining bits form the host portion and determine the size and alignment of the address block. CIDR writes an IPv4 network as address/prefix. The prefix bits identify the network; the remaining bits identify addresses within that block.",
      "terms": [
        "IPv4 address: A 32-bit address written as four decimal octets.",
        "Prefix length: The number of leading address bits used to identify the network.",
        "Subnet mask: A 32-bit mask with prefix ones followed by host zeros."
      ],
      "example": "A /26 leaves 6 host bits, giving 64 addresses in the block; conventional subnetting reserves the network and broadcast addresses, leaving 62 usable host addresses."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Classless addressing and CIDR · Discover: A /26 IPv4 subnet has six host bits. How many ordinary host addresses are usable? Which networking rule determines the result?",
        "options": [
          "64",
          "62",
          "126"
        ],
        "answer": 1,
        "explanation": "62. Read the address and prefix to identify network and host bits."
      },
      {
        "type": "match",
        "prompt": "Classless addressing and CIDR · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "IPv4 address",
            "A 32-bit address written as four decimal octets."
          ],
          [
            "Prefix length",
            "The number of leading address bits used to identify the network."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Classless addressing and CIDR · Discover: put the actions in a valid working sequence.",
        "items": [
          "Count the prefix and remaining host bits",
          "Find the block size and network boundary",
          "Check host capacity and aligned address range"
        ],
        "explanation": "Read the address and prefix to identify network and host bits. Compute the block size from the number of host bits. Check network alignment, usable hosts and any subnet-summary constraints."
      },
      {
        "type": "choice",
        "prompt": "Classless addressing and CIDR · Discover: which statement is accurate for classless addressing and cidr?",
        "options": [
          "62",
          "64",
          "126"
        ],
        "answer": 0,
        "explanation": "62. CIDR writes an IPv4 network as address/prefix. The prefix bits identify the network; the remaining bits identify addresses within that block."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "subnet",
      "mode": "subnet",
      "lecture": 1
    },
    "cnScene": [
      "Read the address and prefix to identify network and host bits.",
      "CIDR writes an IPv4 network as address/prefix. The prefix bits identify the network; the remaining bits identify addresses within that block.",
      "Check network alignment, usable hosts and any subnet-summary constraints."
    ],
    "sourceReferences": [
      {
        "start": 302.71,
        "end": 327.61,
        "text": " So it is basically a concept which allows us to take any size of block of our choice. So this is, this seems to be very good concept. And this is actually in the practical, in the practice also. Okay. So let's just see that what it says. It is called classless addressing. So there is no class hence network ID and prefixes not implicit. So earlier, do you remember if I just tell you class A, I mean, if I tell you the address, if I just tell you the IP address."
      },
      {
        "start": 355.69,
        "end": 399.46,
        "text": " I can say this is a motivation for class less addressing. Okay. This is a motivation for class less addressing. So we need to explicitly specify the prefix, which means earlier it was, if it is class A, if it is class A earlier. Okay. Is the pen thickness too much? If it is class A, then, uh, then earlier I think it was, uh, eight bits of network ID, right? Eight bits."
      }
    ],
    "start": 3
  },
  {
    "id": 4,
    "lecture": 1,
    "title": "Classless addressing and CIDR · Explore",
    "concept": "An IPv4 address has 32 bits. A CIDR prefix marks how many leading bits identify a network; the remaining bits form the host portion and determine the size and alignment of the address block. CIDR writes an IPv4 network as address/prefix. The prefix bits identify the network; the remaining bits identify addresses within that block.",
    "teachingSteps": [
      "Explore: Compute the block size from the number of host bits.",
      "CIDR writes an IPv4 network as address/prefix. The prefix bits identify the network; the remaining bits identify addresses within that block.",
      "Check network alignment, usable hosts and any subnet-summary constraints."
    ],
    "foundation": {
      "title": "Classless addressing and CIDR",
      "idea": "An IPv4 address has 32 bits. A CIDR prefix marks how many leading bits identify a network; the remaining bits form the host portion and determine the size and alignment of the address block. CIDR writes an IPv4 network as address/prefix. The prefix bits identify the network; the remaining bits identify addresses within that block.",
      "terms": [
        "IPv4 address: A 32-bit address written as four decimal octets.",
        "Prefix length: The number of leading address bits used to identify the network.",
        "Subnet mask: A 32-bit mask with prefix ones followed by host zeros."
      ],
      "example": "A /26 leaves 6 host bits, giving 64 addresses in the block; conventional subnetting reserves the network and broadcast addresses, leaving 62 usable host addresses."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Classless addressing and CIDR · Explore: A /26 IPv4 subnet has six host bits. How many ordinary host addresses are usable? Which step should the host or router take next?",
        "options": [
          "Count the prefix and remaining host bits",
          "Check host capacity and aligned address range",
          "Find the block size and network boundary"
        ],
        "answer": 2,
        "explanation": "Find the block size and network boundary. Compute the block size from the number of host bits."
      },
      {
        "type": "match",
        "prompt": "Classless addressing and CIDR · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Prefix length",
            "The number of leading address bits used to identify the network."
          ],
          [
            "Subnet mask",
            "A 32-bit mask with prefix ones followed by host zeros."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Classless addressing and CIDR · Explore: put the actions in a valid working sequence.",
        "items": [
          "Count the prefix and remaining host bits",
          "Find the block size and network boundary",
          "Check host capacity and aligned address range"
        ],
        "explanation": "Read the address and prefix to identify network and host bits. Compute the block size from the number of host bits. Check network alignment, usable hosts and any subnet-summary constraints."
      },
      {
        "type": "choice",
        "prompt": "Classless addressing and CIDR · Explore: which statement is accurate for classless addressing and cidr?",
        "options": [
          "62",
          "64",
          "126"
        ],
        "answer": 0,
        "explanation": "62. CIDR writes an IPv4 network as address/prefix. The prefix bits identify the network; the remaining bits identify addresses within that block."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "subnet",
      "mode": "subnet",
      "lecture": 1
    },
    "cnScene": [
      "Read the address and prefix to identify network and host bits.",
      "CIDR writes an IPv4 network as address/prefix. The prefix bits identify the network; the remaining bits identify addresses within that block.",
      "Check network alignment, usable hosts and any subnet-summary constraints."
    ],
    "sourceReferences": [
      {
        "start": 302.71,
        "end": 327.61,
        "text": " So it is basically a concept which allows us to take any size of block of our choice. So this is, this seems to be very good concept. And this is actually in the practical, in the practice also. Okay. So let's just see that what it says. It is called classless addressing. So there is no class hence network ID and prefixes not implicit. So earlier, do you remember if I just tell you class A, I mean, if I tell you the address, if I just tell you the IP address."
      },
      {
        "start": 355.69,
        "end": 399.46,
        "text": " I can say this is a motivation for class less addressing. Okay. This is a motivation for class less addressing. So we need to explicitly specify the prefix, which means earlier it was, if it is class A, if it is class A earlier. Okay. Is the pen thickness too much? If it is class A, then, uh, then earlier I think it was, uh, eight bits of network ID, right? Eight bits."
      }
    ],
    "start": 4
  },
  {
    "id": 5,
    "lecture": 1,
    "title": "Classless addressing and CIDR · Apply",
    "concept": "An IPv4 address has 32 bits. A CIDR prefix marks how many leading bits identify a network; the remaining bits form the host portion and determine the size and alignment of the address block. CIDR writes an IPv4 network as address/prefix. The prefix bits identify the network; the remaining bits identify addresses within that block.",
    "teachingSteps": [
      "Apply: Check network alignment, usable hosts and any subnet-summary constraints.",
      "CIDR writes an IPv4 network as address/prefix. The prefix bits identify the network; the remaining bits identify addresses within that block.",
      "Read the address and prefix to identify network and host bits."
    ],
    "foundation": {
      "title": "Classless addressing and CIDR",
      "idea": "An IPv4 address has 32 bits. A CIDR prefix marks how many leading bits identify a network; the remaining bits form the host portion and determine the size and alignment of the address block. CIDR writes an IPv4 network as address/prefix. The prefix bits identify the network; the remaining bits identify addresses within that block.",
      "terms": [
        "IPv4 address: A 32-bit address written as four decimal octets.",
        "Prefix length: The number of leading address bits used to identify the network.",
        "Subnet mask: A 32-bit mask with prefix ones followed by host zeros."
      ],
      "example": "A /26 leaves 6 host bits, giving 64 addresses in the block; conventional subnetting reserves the network and broadcast addresses, leaving 62 usable host addresses."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Classless addressing and CIDR · Apply: A new case changes one condition: A /26 IPv4 subnet has six host bits. How many ordinary host addresses are usable? Which conclusion still follows?",
        "options": [
          "62",
          "64",
          "126"
        ],
        "answer": 0,
        "explanation": "62. Check network alignment, usable hosts and any subnet-summary constraints."
      },
      {
        "type": "match",
        "prompt": "Classless addressing and CIDR · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Subnet mask",
            "A 32-bit mask with prefix ones followed by host zeros."
          ],
          [
            "IPv4 address",
            "A 32-bit address written as four decimal octets."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Classless addressing and CIDR · Apply: put the actions in a valid working sequence.",
        "items": [
          "Count the prefix and remaining host bits",
          "Find the block size and network boundary",
          "Check host capacity and aligned address range"
        ],
        "explanation": "Read the address and prefix to identify network and host bits. Compute the block size from the number of host bits. Check network alignment, usable hosts and any subnet-summary constraints."
      },
      {
        "type": "choice",
        "prompt": "Classless addressing and CIDR · Apply: which statement is accurate for classless addressing and cidr?",
        "options": [
          "62",
          "64",
          "126"
        ],
        "answer": 0,
        "explanation": "62. CIDR writes an IPv4 network as address/prefix. The prefix bits identify the network; the remaining bits identify addresses within that block."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "subnet",
      "mode": "subnet",
      "lecture": 1
    },
    "cnScene": [
      "Read the address and prefix to identify network and host bits.",
      "CIDR writes an IPv4 network as address/prefix. The prefix bits identify the network; the remaining bits identify addresses within that block.",
      "Check network alignment, usable hosts and any subnet-summary constraints."
    ],
    "sourceReferences": [
      {
        "start": 302.71,
        "end": 327.61,
        "text": " So it is basically a concept which allows us to take any size of block of our choice. So this is, this seems to be very good concept. And this is actually in the practical, in the practice also. Okay. So let's just see that what it says. It is called classless addressing. So there is no class hence network ID and prefixes not implicit. So earlier, do you remember if I just tell you class A, I mean, if I tell you the address, if I just tell you the IP address."
      },
      {
        "start": 355.69,
        "end": 399.46,
        "text": " I can say this is a motivation for class less addressing. Okay. This is a motivation for class less addressing. So we need to explicitly specify the prefix, which means earlier it was, if it is class A, if it is class A earlier. Okay. Is the pen thickness too much? If it is class A, then, uh, then earlier I think it was, uh, eight bits of network ID, right? Eight bits."
      }
    ],
    "start": 5
  },
  {
    "id": 6,
    "lecture": 2,
    "title": "Plan subnets with VLSM · Discover",
    "concept": "An IPv4 address has 32 bits. A CIDR prefix marks how many leading bits identify a network; the remaining bits form the host portion and determine the size and alignment of the address block. Variable Length Subnet Masking assigns different prefix lengths to requirements. Allocate the largest block first, round each requirement up to a power-of-two block, then align the next network boundary.",
    "teachingSteps": [
      "Discover: Read the address and prefix to identify network and host bits.",
      "Variable Length Subnet Masking assigns different prefix lengths to requirements. Allocate the largest block first, round each requirement up to a power-of-two block, then align the next network boundary.",
      "Compute the block size from the number of host bits."
    ],
    "foundation": {
      "title": "Plan subnets with VLSM",
      "idea": "An IPv4 address has 32 bits. A CIDR prefix marks how many leading bits identify a network; the remaining bits form the host portion and determine the size and alignment of the address block. Variable Length Subnet Masking assigns different prefix lengths to requirements. Allocate the largest block first, round each requirement up to a power-of-two block, then align the next network boundary.",
      "terms": [
        "IPv4 address: A 32-bit address written as four decimal octets.",
        "Prefix length: The number of leading address bits used to identify the network.",
        "Subnet mask: A 32-bit mask with prefix ones followed by host zeros."
      ],
      "example": "A requirement for 50 hosts needs 6 host bits because 2^6 - 2 = 62; its subnet uses /26."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Plan subnets with VLSM · Discover: A subnet must support 50 hosts. What is the smallest conventional IPv4 prefix that fits? Which networking rule determines the result?",
        "options": [
          "/27",
          "/25",
          "/26"
        ],
        "answer": 2,
        "explanation": "/26. Read the address and prefix to identify network and host bits."
      },
      {
        "type": "match",
        "prompt": "Plan subnets with VLSM · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "IPv4 address",
            "A 32-bit address written as four decimal octets."
          ],
          [
            "Prefix length",
            "The number of leading address bits used to identify the network."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Plan subnets with VLSM · Discover: put the actions in a valid working sequence.",
        "items": [
          "Count the prefix and remaining host bits",
          "Find the block size and network boundary",
          "Check host capacity and aligned address range"
        ],
        "explanation": "Read the address and prefix to identify network and host bits. Compute the block size from the number of host bits. Check network alignment, usable hosts and any subnet-summary constraints."
      },
      {
        "type": "choice",
        "prompt": "Plan subnets with VLSM · Discover: which statement is accurate for plan subnets with vlsm?",
        "options": [
          "/26",
          "/27",
          "/25"
        ],
        "answer": 0,
        "explanation": "/26. Variable Length Subnet Masking assigns different prefix lengths to requirements. Allocate the largest block first, round each requirement up to a power-of-two block, then align the next network boundary."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "subnet",
      "mode": "subnet",
      "lecture": 2
    },
    "cnScene": [
      "Read the address and prefix to identify network and host bits.",
      "Variable Length Subnet Masking assigns different prefix lengths to requirements. Allocate the largest block first, round each requirement up to a power-of-two block, then align the next network boundary.",
      "Check network alignment, usable hosts and any subnet-summary constraints."
    ],
    "sourceReferences": [
      {
        "start": 840.55,
        "end": 871.81,
        "text": " previous classes. So let me quickly do it in just one minute. This is the network you have. Now you want to have, you want to divide it in such a way that you want to have 120. Sorry, you want to have 10, 60 and 120. Tell me to which block you will be giving first. Let's suppose it is ABC, which block you will be giving first? C, right? Because this is the largest one. Now, how many it wants? It wants, I think 2 power 6, 2 power 7. I mean, let me write in 2 power basically."
      },
      {
        "start": 1448.33,
        "end": 1478.26,
        "text": " 7 right so it means that how many subnets you have here i mean in how many subnets you want to divide basically 2 power 16 you have so you want how many groups basically it is it is just like that in one group you want 2 power 9 so how many groups you want 2 power 7 groups not not 7 you you have 2 power 7 groups right okay each subnet is just a group so you just divide this into 2 power 7 different different groups"
      }
    ],
    "start": 6
  },
  {
    "id": 7,
    "lecture": 2,
    "title": "Plan subnets with VLSM · Explore",
    "concept": "An IPv4 address has 32 bits. A CIDR prefix marks how many leading bits identify a network; the remaining bits form the host portion and determine the size and alignment of the address block. Variable Length Subnet Masking assigns different prefix lengths to requirements. Allocate the largest block first, round each requirement up to a power-of-two block, then align the next network boundary.",
    "teachingSteps": [
      "Explore: Compute the block size from the number of host bits.",
      "Variable Length Subnet Masking assigns different prefix lengths to requirements. Allocate the largest block first, round each requirement up to a power-of-two block, then align the next network boundary.",
      "Check network alignment, usable hosts and any subnet-summary constraints."
    ],
    "foundation": {
      "title": "Plan subnets with VLSM",
      "idea": "An IPv4 address has 32 bits. A CIDR prefix marks how many leading bits identify a network; the remaining bits form the host portion and determine the size and alignment of the address block. Variable Length Subnet Masking assigns different prefix lengths to requirements. Allocate the largest block first, round each requirement up to a power-of-two block, then align the next network boundary.",
      "terms": [
        "IPv4 address: A 32-bit address written as four decimal octets.",
        "Prefix length: The number of leading address bits used to identify the network.",
        "Subnet mask: A 32-bit mask with prefix ones followed by host zeros."
      ],
      "example": "A requirement for 50 hosts needs 6 host bits because 2^6 - 2 = 62; its subnet uses /26."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Plan subnets with VLSM · Explore: A subnet must support 50 hosts. What is the smallest conventional IPv4 prefix that fits? Which step should the host or router take next?",
        "options": [
          "Find the block size and network boundary",
          "Count the prefix and remaining host bits",
          "Check host capacity and aligned address range"
        ],
        "answer": 0,
        "explanation": "Find the block size and network boundary. Compute the block size from the number of host bits."
      },
      {
        "type": "match",
        "prompt": "Plan subnets with VLSM · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Prefix length",
            "The number of leading address bits used to identify the network."
          ],
          [
            "Subnet mask",
            "A 32-bit mask with prefix ones followed by host zeros."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Plan subnets with VLSM · Explore: put the actions in a valid working sequence.",
        "items": [
          "Count the prefix and remaining host bits",
          "Find the block size and network boundary",
          "Check host capacity and aligned address range"
        ],
        "explanation": "Read the address and prefix to identify network and host bits. Compute the block size from the number of host bits. Check network alignment, usable hosts and any subnet-summary constraints."
      },
      {
        "type": "choice",
        "prompt": "Plan subnets with VLSM · Explore: which statement is accurate for plan subnets with vlsm?",
        "options": [
          "/26",
          "/27",
          "/25"
        ],
        "answer": 0,
        "explanation": "/26. Variable Length Subnet Masking assigns different prefix lengths to requirements. Allocate the largest block first, round each requirement up to a power-of-two block, then align the next network boundary."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "subnet",
      "mode": "subnet",
      "lecture": 2
    },
    "cnScene": [
      "Read the address and prefix to identify network and host bits.",
      "Variable Length Subnet Masking assigns different prefix lengths to requirements. Allocate the largest block first, round each requirement up to a power-of-two block, then align the next network boundary.",
      "Check network alignment, usable hosts and any subnet-summary constraints."
    ],
    "sourceReferences": [
      {
        "start": 840.55,
        "end": 871.81,
        "text": " previous classes. So let me quickly do it in just one minute. This is the network you have. Now you want to have, you want to divide it in such a way that you want to have 120. Sorry, you want to have 10, 60 and 120. Tell me to which block you will be giving first. Let's suppose it is ABC, which block you will be giving first? C, right? Because this is the largest one. Now, how many it wants? It wants, I think 2 power 6, 2 power 7. I mean, let me write in 2 power basically."
      },
      {
        "start": 1448.33,
        "end": 1478.26,
        "text": " 7 right so it means that how many subnets you have here i mean in how many subnets you want to divide basically 2 power 16 you have so you want how many groups basically it is it is just like that in one group you want 2 power 9 so how many groups you want 2 power 7 groups not not 7 you you have 2 power 7 groups right okay each subnet is just a group so you just divide this into 2 power 7 different different groups"
      }
    ],
    "start": 7
  },
  {
    "id": 8,
    "lecture": 2,
    "title": "Plan subnets with VLSM · Apply",
    "concept": "An IPv4 address has 32 bits. A CIDR prefix marks how many leading bits identify a network; the remaining bits form the host portion and determine the size and alignment of the address block. Variable Length Subnet Masking assigns different prefix lengths to requirements. Allocate the largest block first, round each requirement up to a power-of-two block, then align the next network boundary.",
    "teachingSteps": [
      "Apply: Check network alignment, usable hosts and any subnet-summary constraints.",
      "Variable Length Subnet Masking assigns different prefix lengths to requirements. Allocate the largest block first, round each requirement up to a power-of-two block, then align the next network boundary.",
      "Read the address and prefix to identify network and host bits."
    ],
    "foundation": {
      "title": "Plan subnets with VLSM",
      "idea": "An IPv4 address has 32 bits. A CIDR prefix marks how many leading bits identify a network; the remaining bits form the host portion and determine the size and alignment of the address block. Variable Length Subnet Masking assigns different prefix lengths to requirements. Allocate the largest block first, round each requirement up to a power-of-two block, then align the next network boundary.",
      "terms": [
        "IPv4 address: A 32-bit address written as four decimal octets.",
        "Prefix length: The number of leading address bits used to identify the network.",
        "Subnet mask: A 32-bit mask with prefix ones followed by host zeros."
      ],
      "example": "A requirement for 50 hosts needs 6 host bits because 2^6 - 2 = 62; its subnet uses /26."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Plan subnets with VLSM · Apply: A new case changes one condition: A subnet must support 50 hosts. What is the smallest conventional IPv4 prefix that fits? Which conclusion still follows?",
        "options": [
          "/27",
          "/26",
          "/25"
        ],
        "answer": 1,
        "explanation": "/26. Check network alignment, usable hosts and any subnet-summary constraints."
      },
      {
        "type": "match",
        "prompt": "Plan subnets with VLSM · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Subnet mask",
            "A 32-bit mask with prefix ones followed by host zeros."
          ],
          [
            "IPv4 address",
            "A 32-bit address written as four decimal octets."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Plan subnets with VLSM · Apply: put the actions in a valid working sequence.",
        "items": [
          "Count the prefix and remaining host bits",
          "Find the block size and network boundary",
          "Check host capacity and aligned address range"
        ],
        "explanation": "Read the address and prefix to identify network and host bits. Compute the block size from the number of host bits. Check network alignment, usable hosts and any subnet-summary constraints."
      },
      {
        "type": "choice",
        "prompt": "Plan subnets with VLSM · Apply: which statement is accurate for plan subnets with vlsm?",
        "options": [
          "/26",
          "/27",
          "/25"
        ],
        "answer": 0,
        "explanation": "/26. Variable Length Subnet Masking assigns different prefix lengths to requirements. Allocate the largest block first, round each requirement up to a power-of-two block, then align the next network boundary."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "subnet",
      "mode": "subnet",
      "lecture": 2
    },
    "cnScene": [
      "Read the address and prefix to identify network and host bits.",
      "Variable Length Subnet Masking assigns different prefix lengths to requirements. Allocate the largest block first, round each requirement up to a power-of-two block, then align the next network boundary.",
      "Check network alignment, usable hosts and any subnet-summary constraints."
    ],
    "sourceReferences": [
      {
        "start": 840.55,
        "end": 871.81,
        "text": " previous classes. So let me quickly do it in just one minute. This is the network you have. Now you want to have, you want to divide it in such a way that you want to have 120. Sorry, you want to have 10, 60 and 120. Tell me to which block you will be giving first. Let's suppose it is ABC, which block you will be giving first? C, right? Because this is the largest one. Now, how many it wants? It wants, I think 2 power 6, 2 power 7. I mean, let me write in 2 power basically."
      },
      {
        "start": 1448.33,
        "end": 1478.26,
        "text": " 7 right so it means that how many subnets you have here i mean in how many subnets you want to divide basically 2 power 16 you have so you want how many groups basically it is it is just like that in one group you want 2 power 9 so how many groups you want 2 power 7 groups not not 7 you you have 2 power 7 groups right okay each subnet is just a group so you just divide this into 2 power 7 different different groups"
      }
    ],
    "start": 8
  },
  {
    "id": 9,
    "lecture": 3,
    "title": "Combine routes with supernetting · Discover",
    "concept": "An IPv4 address has 32 bits. A CIDR prefix marks how many leading bits identify a network; the remaining bits form the host portion and determine the size and alignment of the address block. A supernet summarizes adjacent, aligned networks by keeping their shared leading prefix. The component networks must be contiguous and aligned to the summary block size.",
    "teachingSteps": [
      "Discover: Read the address and prefix to identify network and host bits.",
      "A supernet summarizes adjacent, aligned networks by keeping their shared leading prefix. The component networks must be contiguous and aligned to the summary block size.",
      "Compute the block size from the number of host bits."
    ],
    "foundation": {
      "title": "Combine routes with supernetting",
      "idea": "An IPv4 address has 32 bits. A CIDR prefix marks how many leading bits identify a network; the remaining bits form the host portion and determine the size and alignment of the address block. A supernet summarizes adjacent, aligned networks by keeping their shared leading prefix. The component networks must be contiguous and aligned to the summary block size.",
      "terms": [
        "IPv4 address: A 32-bit address written as four decimal octets.",
        "Prefix length: The number of leading address bits used to identify the network.",
        "Subnet mask: A 32-bit mask with prefix ones followed by host zeros."
      ],
      "example": "Four aligned /24 networks can be summarized as one /22 because they share 22 leading network bits."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Combine routes with supernetting · Discover: Four contiguous, correctly aligned /24 networks are summarized. What prefix length describes the combined block? Which networking rule determines the result?",
        "options": [
          "/22",
          "/24",
          "/26"
        ],
        "answer": 0,
        "explanation": "/22. Read the address and prefix to identify network and host bits."
      },
      {
        "type": "match",
        "prompt": "Combine routes with supernetting · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "IPv4 address",
            "A 32-bit address written as four decimal octets."
          ],
          [
            "Prefix length",
            "The number of leading address bits used to identify the network."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Combine routes with supernetting · Discover: put the actions in a valid working sequence.",
        "items": [
          "Count the prefix and remaining host bits",
          "Find the block size and network boundary",
          "Check host capacity and aligned address range"
        ],
        "explanation": "Read the address and prefix to identify network and host bits. Compute the block size from the number of host bits. Check network alignment, usable hosts and any subnet-summary constraints."
      },
      {
        "type": "choice",
        "prompt": "Combine routes with supernetting · Discover: which statement is accurate for combine routes with supernetting?",
        "options": [
          "/22",
          "/24",
          "/26"
        ],
        "answer": 0,
        "explanation": "/22. A supernet summarizes adjacent, aligned networks by keeping their shared leading prefix. The component networks must be contiguous and aligned to the summary block size."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "subnet",
      "mode": "subnet",
      "lecture": 3
    },
    "cnScene": [
      "Read the address and prefix to identify network and host bits.",
      "A supernet summarizes adjacent, aligned networks by keeping their shared leading prefix. The component networks must be contiguous and aligned to the summary block size.",
      "Check network alignment, usable hosts and any subnet-summary constraints."
    ],
    "sourceReferences": [
      {
        "start": 10.03,
        "end": 41.52,
        "text": " Hi everyone. So today we are going to discuss queues and this queues is basically of subnetting and supernetting. Okay. Let's discuss each question. This is the question number one. So this question is saying consider the IP address. Suppose that we are still using class based addressing. So this is belonging to which class if you're using the class based addressing 132 means this is class and even be right. This is class B. Okay. So they're saying"
      },
      {
        "start": 634.19,
        "end": 666.5,
        "text": " and then it will be select six it will be select seven it will be select eight okay after subnetting which of the following is true there is only one unused block left of size 2 power 3 no I think 2 power 4 size is left right so there's only one unused block left of size 2 power 3 no not only one right if they say that there is there are two unused block of size 2 power 3 then it is true right then that this is true only one 2 power 4 is true"
      }
    ],
    "start": 9
  },
  {
    "id": 10,
    "lecture": 3,
    "title": "Combine routes with supernetting · Explore",
    "concept": "An IPv4 address has 32 bits. A CIDR prefix marks how many leading bits identify a network; the remaining bits form the host portion and determine the size and alignment of the address block. A supernet summarizes adjacent, aligned networks by keeping their shared leading prefix. The component networks must be contiguous and aligned to the summary block size.",
    "teachingSteps": [
      "Explore: Compute the block size from the number of host bits.",
      "A supernet summarizes adjacent, aligned networks by keeping their shared leading prefix. The component networks must be contiguous and aligned to the summary block size.",
      "Check network alignment, usable hosts and any subnet-summary constraints."
    ],
    "foundation": {
      "title": "Combine routes with supernetting",
      "idea": "An IPv4 address has 32 bits. A CIDR prefix marks how many leading bits identify a network; the remaining bits form the host portion and determine the size and alignment of the address block. A supernet summarizes adjacent, aligned networks by keeping their shared leading prefix. The component networks must be contiguous and aligned to the summary block size.",
      "terms": [
        "IPv4 address: A 32-bit address written as four decimal octets.",
        "Prefix length: The number of leading address bits used to identify the network.",
        "Subnet mask: A 32-bit mask with prefix ones followed by host zeros."
      ],
      "example": "Four aligned /24 networks can be summarized as one /22 because they share 22 leading network bits."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Combine routes with supernetting · Explore: Four contiguous, correctly aligned /24 networks are summarized. What prefix length describes the combined block? Which step should the host or router take next?",
        "options": [
          "Count the prefix and remaining host bits",
          "Find the block size and network boundary",
          "Check host capacity and aligned address range"
        ],
        "answer": 1,
        "explanation": "Find the block size and network boundary. Compute the block size from the number of host bits."
      },
      {
        "type": "match",
        "prompt": "Combine routes with supernetting · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Prefix length",
            "The number of leading address bits used to identify the network."
          ],
          [
            "Subnet mask",
            "A 32-bit mask with prefix ones followed by host zeros."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Combine routes with supernetting · Explore: put the actions in a valid working sequence.",
        "items": [
          "Count the prefix and remaining host bits",
          "Find the block size and network boundary",
          "Check host capacity and aligned address range"
        ],
        "explanation": "Read the address and prefix to identify network and host bits. Compute the block size from the number of host bits. Check network alignment, usable hosts and any subnet-summary constraints."
      },
      {
        "type": "choice",
        "prompt": "Combine routes with supernetting · Explore: which statement is accurate for combine routes with supernetting?",
        "options": [
          "/22",
          "/24",
          "/26"
        ],
        "answer": 0,
        "explanation": "/22. A supernet summarizes adjacent, aligned networks by keeping their shared leading prefix. The component networks must be contiguous and aligned to the summary block size."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "subnet",
      "mode": "subnet",
      "lecture": 3
    },
    "cnScene": [
      "Read the address and prefix to identify network and host bits.",
      "A supernet summarizes adjacent, aligned networks by keeping their shared leading prefix. The component networks must be contiguous and aligned to the summary block size.",
      "Check network alignment, usable hosts and any subnet-summary constraints."
    ],
    "sourceReferences": [
      {
        "start": 10.03,
        "end": 41.52,
        "text": " Hi everyone. So today we are going to discuss queues and this queues is basically of subnetting and supernetting. Okay. Let's discuss each question. This is the question number one. So this question is saying consider the IP address. Suppose that we are still using class based addressing. So this is belonging to which class if you're using the class based addressing 132 means this is class and even be right. This is class B. Okay. So they're saying"
      },
      {
        "start": 634.19,
        "end": 666.5,
        "text": " and then it will be select six it will be select seven it will be select eight okay after subnetting which of the following is true there is only one unused block left of size 2 power 3 no I think 2 power 4 size is left right so there's only one unused block left of size 2 power 3 no not only one right if they say that there is there are two unused block of size 2 power 3 then it is true right then that this is true only one 2 power 4 is true"
      }
    ],
    "start": 10
  },
  {
    "id": 11,
    "lecture": 3,
    "title": "Combine routes with supernetting · Apply",
    "concept": "An IPv4 address has 32 bits. A CIDR prefix marks how many leading bits identify a network; the remaining bits form the host portion and determine the size and alignment of the address block. A supernet summarizes adjacent, aligned networks by keeping their shared leading prefix. The component networks must be contiguous and aligned to the summary block size.",
    "teachingSteps": [
      "Apply: Check network alignment, usable hosts and any subnet-summary constraints.",
      "A supernet summarizes adjacent, aligned networks by keeping their shared leading prefix. The component networks must be contiguous and aligned to the summary block size.",
      "Read the address and prefix to identify network and host bits."
    ],
    "foundation": {
      "title": "Combine routes with supernetting",
      "idea": "An IPv4 address has 32 bits. A CIDR prefix marks how many leading bits identify a network; the remaining bits form the host portion and determine the size and alignment of the address block. A supernet summarizes adjacent, aligned networks by keeping their shared leading prefix. The component networks must be contiguous and aligned to the summary block size.",
      "terms": [
        "IPv4 address: A 32-bit address written as four decimal octets.",
        "Prefix length: The number of leading address bits used to identify the network.",
        "Subnet mask: A 32-bit mask with prefix ones followed by host zeros."
      ],
      "example": "Four aligned /24 networks can be summarized as one /22 because they share 22 leading network bits."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Combine routes with supernetting · Apply: A new case changes one condition: Four contiguous, correctly aligned /24 networks are summarized. What prefix length describes the combined block? Which conclusion still follows?",
        "options": [
          "/24",
          "/26",
          "/22"
        ],
        "answer": 2,
        "explanation": "/22. Check network alignment, usable hosts and any subnet-summary constraints."
      },
      {
        "type": "match",
        "prompt": "Combine routes with supernetting · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Subnet mask",
            "A 32-bit mask with prefix ones followed by host zeros."
          ],
          [
            "IPv4 address",
            "A 32-bit address written as four decimal octets."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Combine routes with supernetting · Apply: put the actions in a valid working sequence.",
        "items": [
          "Count the prefix and remaining host bits",
          "Find the block size and network boundary",
          "Check host capacity and aligned address range"
        ],
        "explanation": "Read the address and prefix to identify network and host bits. Compute the block size from the number of host bits. Check network alignment, usable hosts and any subnet-summary constraints."
      },
      {
        "type": "choice",
        "prompt": "Combine routes with supernetting · Apply: which statement is accurate for combine routes with supernetting?",
        "options": [
          "/22",
          "/24",
          "/26"
        ],
        "answer": 0,
        "explanation": "/22. A supernet summarizes adjacent, aligned networks by keeping their shared leading prefix. The component networks must be contiguous and aligned to the summary block size."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "subnet",
      "mode": "subnet",
      "lecture": 3
    },
    "cnScene": [
      "Read the address and prefix to identify network and host bits.",
      "A supernet summarizes adjacent, aligned networks by keeping their shared leading prefix. The component networks must be contiguous and aligned to the summary block size.",
      "Check network alignment, usable hosts and any subnet-summary constraints."
    ],
    "sourceReferences": [
      {
        "start": 10.03,
        "end": 41.52,
        "text": " Hi everyone. So today we are going to discuss queues and this queues is basically of subnetting and supernetting. Okay. Let's discuss each question. This is the question number one. So this question is saying consider the IP address. Suppose that we are still using class based addressing. So this is belonging to which class if you're using the class based addressing 132 means this is class and even be right. This is class B. Okay. So they're saying"
      },
      {
        "start": 634.19,
        "end": 666.5,
        "text": " and then it will be select six it will be select seven it will be select eight okay after subnetting which of the following is true there is only one unused block left of size 2 power 3 no I think 2 power 4 size is left right so there's only one unused block left of size 2 power 3 no not only one right if they say that there is there are two unused block of size 2 power 3 then it is true right then that this is true only one 2 power 4 is true"
      }
    ],
    "start": 11
  },
  {
    "id": 12,
    "lecture": 4,
    "title": "Layering and encapsulation · Discover",
    "concept": "A network moves data through cooperating layers and links. Applications name the service they need, transport protocols connect processes, IP forwards packets between networks, and link protocols deliver each hop. Each layer provides a service to the layer above and uses the layer below. A sender wraps data with transport, network and link headers; the receiver removes those headers in reverse order.",
    "teachingSteps": [
      "Discover: Identify the data unit and layer that currently handles it.",
      "Each layer provides a service to the layer above and uses the layer below. A sender wraps data with transport, network and link headers; the receiver removes those headers in reverse order.",
      "Add or remove that layer’s header at the host or forwarding device."
    ],
    "foundation": {
      "title": "Layering and encapsulation",
      "idea": "A network moves data through cooperating layers and links. Applications name the service they need, transport protocols connect processes, IP forwards packets between networks, and link protocols deliver each hop. Each layer provides a service to the layer above and uses the layer below. A sender wraps data with transport, network and link headers; the receiver removes those headers in reverse order.",
      "terms": [
        "Packet: A unit of network-layer data carrying source and destination IP addresses.",
        "Frame: A link-layer unit delivered across one local network hop.",
        "Encapsulation: Wrapping data with the headers a lower layer needs to deliver it."
      ],
      "example": "HTTP bytes become a TCP segment, then an IP packet, then a link-layer frame before crossing an Ethernet link."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Layering and encapsulation · Discover: At a receiver, after the link layer removes its frame header, which layer normally examines the IP header? Which networking rule determines the result?",
        "options": [
          "The application layer first",
          "The network layer",
          "The physical layer"
        ],
        "answer": 1,
        "explanation": "The network layer. Identify the data unit and layer that currently handles it."
      },
      {
        "type": "match",
        "prompt": "Layering and encapsulation · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Packet",
            "A unit of network-layer data carrying source and destination IP addresses."
          ],
          [
            "Frame",
            "A link-layer unit delivered across one local network hop."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Layering and encapsulation · Discover: put the actions in a valid working sequence.",
        "items": [
          "Name the sender’s application data",
          "Add transport and IP information",
          "Wrap the packet in a local-link frame"
        ],
        "explanation": "Identify the data unit and layer that currently handles it. Add or remove that layer’s header at the host or forwarding device. Follow the local hop and preserve end-to-end fields that still apply."
      },
      {
        "type": "choice",
        "prompt": "Layering and encapsulation · Discover: which statement is accurate for layering and encapsulation?",
        "options": [
          "The network layer",
          "The application layer first",
          "The physical layer"
        ],
        "answer": 0,
        "explanation": "The network layer. Each layer provides a service to the layer above and uses the layer below. A sender wraps data with transport, network and link headers; the receiver removes those headers in reverse order."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "layers",
      "mode": "layers",
      "lecture": 4
    },
    "cnScene": [
      "Identify the data unit and layer that currently handles it.",
      "Each layer provides a service to the layer above and uses the layer below. A sender wraps data with transport, network and link headers; the receiver removes those headers in reverse order.",
      "Follow the local hop and preserve end-to-end fields that still apply."
    ],
    "sourceReferences": [
      {
        "start": 3408.91,
        "end": 3440.48,
        "text": " in this hyper protocol it will write something this center will write something here who will read this who will read this let's suppose this is the application layer this is transport layer this is data sorry this is network layer and this is data link layer who will read whatever network layer is writing at the center side network layer at the receiver side will read this okay so network layer at the receiver side will read this"
      },
      {
        "start": 3650.7,
        "end": 3677.63,
        "text": " and control information the peer layer okay peer means that corresponding layer this is these are the peers then this is I mean these are the peers basically I hope you understand what does peer mean peer layer uses this control information okay this is what layers and headers are okay let's just quickly see that how each of this layer is providing which kind of functions basically okay then I mean"
      }
    ],
    "start": 12
  },
  {
    "id": 13,
    "lecture": 4,
    "title": "Layering and encapsulation · Explore",
    "concept": "A network moves data through cooperating layers and links. Applications name the service they need, transport protocols connect processes, IP forwards packets between networks, and link protocols deliver each hop. Each layer provides a service to the layer above and uses the layer below. A sender wraps data with transport, network and link headers; the receiver removes those headers in reverse order.",
    "teachingSteps": [
      "Explore: Add or remove that layer’s header at the host or forwarding device.",
      "Each layer provides a service to the layer above and uses the layer below. A sender wraps data with transport, network and link headers; the receiver removes those headers in reverse order.",
      "Follow the local hop and preserve end-to-end fields that still apply."
    ],
    "foundation": {
      "title": "Layering and encapsulation",
      "idea": "A network moves data through cooperating layers and links. Applications name the service they need, transport protocols connect processes, IP forwards packets between networks, and link protocols deliver each hop. Each layer provides a service to the layer above and uses the layer below. A sender wraps data with transport, network and link headers; the receiver removes those headers in reverse order.",
      "terms": [
        "Packet: A unit of network-layer data carrying source and destination IP addresses.",
        "Frame: A link-layer unit delivered across one local network hop.",
        "Encapsulation: Wrapping data with the headers a lower layer needs to deliver it."
      ],
      "example": "HTTP bytes become a TCP segment, then an IP packet, then a link-layer frame before crossing an Ethernet link."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Layering and encapsulation · Explore: At a receiver, after the link layer removes its frame header, which layer normally examines the IP header? Which step should the host or router take next?",
        "options": [
          "Name the sender’s application data",
          "Wrap the packet in a local-link frame",
          "Add transport and IP information"
        ],
        "answer": 2,
        "explanation": "Add transport and IP information. Add or remove that layer’s header at the host or forwarding device."
      },
      {
        "type": "match",
        "prompt": "Layering and encapsulation · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Frame",
            "A link-layer unit delivered across one local network hop."
          ],
          [
            "Encapsulation",
            "Wrapping data with the headers a lower layer needs to deliver it."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Layering and encapsulation · Explore: put the actions in a valid working sequence.",
        "items": [
          "Name the sender’s application data",
          "Add transport and IP information",
          "Wrap the packet in a local-link frame"
        ],
        "explanation": "Identify the data unit and layer that currently handles it. Add or remove that layer’s header at the host or forwarding device. Follow the local hop and preserve end-to-end fields that still apply."
      },
      {
        "type": "choice",
        "prompt": "Layering and encapsulation · Explore: which statement is accurate for layering and encapsulation?",
        "options": [
          "The network layer",
          "The application layer first",
          "The physical layer"
        ],
        "answer": 0,
        "explanation": "The network layer. Each layer provides a service to the layer above and uses the layer below. A sender wraps data with transport, network and link headers; the receiver removes those headers in reverse order."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "layers",
      "mode": "layers",
      "lecture": 4
    },
    "cnScene": [
      "Identify the data unit and layer that currently handles it.",
      "Each layer provides a service to the layer above and uses the layer below. A sender wraps data with transport, network and link headers; the receiver removes those headers in reverse order.",
      "Follow the local hop and preserve end-to-end fields that still apply."
    ],
    "sourceReferences": [
      {
        "start": 3408.91,
        "end": 3440.48,
        "text": " in this hyper protocol it will write something this center will write something here who will read this who will read this let's suppose this is the application layer this is transport layer this is data sorry this is network layer and this is data link layer who will read whatever network layer is writing at the center side network layer at the receiver side will read this okay so network layer at the receiver side will read this"
      },
      {
        "start": 3650.7,
        "end": 3677.63,
        "text": " and control information the peer layer okay peer means that corresponding layer this is these are the peers then this is I mean these are the peers basically I hope you understand what does peer mean peer layer uses this control information okay this is what layers and headers are okay let's just quickly see that how each of this layer is providing which kind of functions basically okay then I mean"
      }
    ],
    "start": 13
  },
  {
    "id": 14,
    "lecture": 4,
    "title": "Layering and encapsulation · Apply",
    "concept": "A network moves data through cooperating layers and links. Applications name the service they need, transport protocols connect processes, IP forwards packets between networks, and link protocols deliver each hop. Each layer provides a service to the layer above and uses the layer below. A sender wraps data with transport, network and link headers; the receiver removes those headers in reverse order.",
    "teachingSteps": [
      "Apply: Follow the local hop and preserve end-to-end fields that still apply.",
      "Each layer provides a service to the layer above and uses the layer below. A sender wraps data with transport, network and link headers; the receiver removes those headers in reverse order.",
      "Identify the data unit and layer that currently handles it."
    ],
    "foundation": {
      "title": "Layering and encapsulation",
      "idea": "A network moves data through cooperating layers and links. Applications name the service they need, transport protocols connect processes, IP forwards packets between networks, and link protocols deliver each hop. Each layer provides a service to the layer above and uses the layer below. A sender wraps data with transport, network and link headers; the receiver removes those headers in reverse order.",
      "terms": [
        "Packet: A unit of network-layer data carrying source and destination IP addresses.",
        "Frame: A link-layer unit delivered across one local network hop.",
        "Encapsulation: Wrapping data with the headers a lower layer needs to deliver it."
      ],
      "example": "HTTP bytes become a TCP segment, then an IP packet, then a link-layer frame before crossing an Ethernet link."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Layering and encapsulation · Apply: A new case changes one condition: At a receiver, after the link layer removes its frame header, which layer normally examines the IP header? Which conclusion still follows?",
        "options": [
          "The network layer",
          "The application layer first",
          "The physical layer"
        ],
        "answer": 0,
        "explanation": "The network layer. Follow the local hop and preserve end-to-end fields that still apply."
      },
      {
        "type": "match",
        "prompt": "Layering and encapsulation · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Encapsulation",
            "Wrapping data with the headers a lower layer needs to deliver it."
          ],
          [
            "Packet",
            "A unit of network-layer data carrying source and destination IP addresses."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Layering and encapsulation · Apply: put the actions in a valid working sequence.",
        "items": [
          "Name the sender’s application data",
          "Add transport and IP information",
          "Wrap the packet in a local-link frame"
        ],
        "explanation": "Identify the data unit and layer that currently handles it. Add or remove that layer’s header at the host or forwarding device. Follow the local hop and preserve end-to-end fields that still apply."
      },
      {
        "type": "choice",
        "prompt": "Layering and encapsulation · Apply: which statement is accurate for layering and encapsulation?",
        "options": [
          "The network layer",
          "The application layer first",
          "The physical layer"
        ],
        "answer": 0,
        "explanation": "The network layer. Each layer provides a service to the layer above and uses the layer below. A sender wraps data with transport, network and link headers; the receiver removes those headers in reverse order."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "layers",
      "mode": "layers",
      "lecture": 4
    },
    "cnScene": [
      "Identify the data unit and layer that currently handles it.",
      "Each layer provides a service to the layer above and uses the layer below. A sender wraps data with transport, network and link headers; the receiver removes those headers in reverse order.",
      "Follow the local hop and preserve end-to-end fields that still apply."
    ],
    "sourceReferences": [
      {
        "start": 3408.91,
        "end": 3440.48,
        "text": " in this hyper protocol it will write something this center will write something here who will read this who will read this let's suppose this is the application layer this is transport layer this is data sorry this is network layer and this is data link layer who will read whatever network layer is writing at the center side network layer at the receiver side will read this okay so network layer at the receiver side will read this"
      },
      {
        "start": 3650.7,
        "end": 3677.63,
        "text": " and control information the peer layer okay peer means that corresponding layer this is these are the peers then this is I mean these are the peers basically I hope you understand what does peer mean peer layer uses this control information okay this is what layers and headers are okay let's just quickly see that how each of this layer is providing which kind of functions basically okay then I mean"
      }
    ],
    "start": 14
  },
  {
    "id": 15,
    "lecture": 5,
    "title": "Circuit switching and packet switching · Discover",
    "concept": "A link moves frames between directly connected devices. Switches and shared media determine how local traffic uses a link; packet switching shares capacity while circuit switching reserves it. Circuit switching reserves a path’s capacity for a session. Packet switching shares links among traffic flows and forwards packets independently, so it uses capacity efficiently but can queue.",
    "teachingSteps": [
      "Discover: Identify the link and the unit that travels across it.",
      "Circuit switching reserves a path’s capacity for a session. Packet switching shares links among traffic flows and forwards packets independently, so it uses capacity efficiently but can queue.",
      "Determine whether capacity is reserved or shared and whether frames queue."
    ],
    "foundation": {
      "title": "Circuit switching and packet switching",
      "idea": "A link moves frames between directly connected devices. Switches and shared media determine how local traffic uses a link; packet switching shares capacity while circuit switching reserves it. Circuit switching reserves a path’s capacity for a session. Packet switching shares links among traffic flows and forwards packets independently, so it uses capacity efficiently but can queue.",
      "terms": [
        "Link: A communication path between neighboring network interfaces.",
        "Switch: A device that forwards frames between LAN ports using link-layer addresses.",
        "Queue: A waiting area for packets when arrivals temporarily exceed link service."
      ],
      "example": "A dedicated voice circuit keeps its reserved rate during silence; a packet network can use those idle moments for other traffic."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Circuit switching and packet switching · Discover: Two users share a packet link. One is silent for a while. What can the network do with the unused link capacity? Which networking rule determines the result?",
        "options": [
          "Keep it reserved exclusively for the silent user",
          "Convert it into a new IP address",
          "Carry packets from other flows"
        ],
        "answer": 2,
        "explanation": "Carry packets from other flows. Identify the link and the unit that travels across it."
      },
      {
        "type": "match",
        "prompt": "Circuit switching and packet switching · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Link",
            "A communication path between neighboring network interfaces."
          ],
          [
            "Switch",
            "A device that forwards frames between LAN ports using link-layer addresses."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Circuit switching and packet switching · Discover: put the actions in a valid working sequence.",
        "items": [
          "Identify the path and its available capacity",
          "Determine how multiple senders share it",
          "Predict the queue or forwarding outcome"
        ],
        "explanation": "Identify the link and the unit that travels across it. Determine whether capacity is reserved or shared and whether frames queue. Predict forwarding, delay or loss from the link’s current load."
      },
      {
        "type": "choice",
        "prompt": "Circuit switching and packet switching · Discover: which statement is accurate for circuit switching and packet switching?",
        "options": [
          "Carry packets from other flows",
          "Keep it reserved exclusively for the silent user",
          "Convert it into a new IP address"
        ],
        "answer": 0,
        "explanation": "Carry packets from other flows. Circuit switching reserves a path’s capacity for a session. Packet switching shares links among traffic flows and forwards packets independently, so it uses capacity efficiently but can queue."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "switching",
      "mode": "switching",
      "lecture": 5
    },
    "cnScene": [
      "Identify the link and the unit that travels across it.",
      "Circuit switching reserves a path’s capacity for a session. Packet switching shares links among traffic flows and forwards packets independently, so it uses capacity efficiently but can queue.",
      "Predict forwarding, delay or loss from the link’s current load."
    ],
    "sourceReferences": [
      {
        "start": 1756.93,
        "end": 1786.7,
        "text": " Clear request packet is used to top, I mean, which is like, just like a circuit switching. Okay. Not a dedicated path. Just like circuit. This is like a tear down, tear down or setup. Okay. Tear down means you're disconnecting. You're saying that, okay, I'm done with that. Not a dedicated part. Unlike circuit switching links in the path may be shared between different virtual circuits. Let's just see that. What does this mean? Okay. So as you can see from this diagram."
      },
      {
        "start": 3014.08,
        "end": 3044.7,
        "text": " But the route may not be dedicated solely for the buses only. Maybe like I mean they are saying that okay, maybe the auto might also go or some other things might also go. The buses can well be stuck in the traffic during the rush hours and therefore reassembles mode. I mean this is reassembles means this is more of similar like the packet switching network with the virtual circuit, which means they are saying the path is fixed. Okay. They are saying for bus. They are saying path is fixed."
      }
    ],
    "start": 15
  },
  {
    "id": 16,
    "lecture": 5,
    "title": "Circuit switching and packet switching · Explore",
    "concept": "A link moves frames between directly connected devices. Switches and shared media determine how local traffic uses a link; packet switching shares capacity while circuit switching reserves it. Circuit switching reserves a path’s capacity for a session. Packet switching shares links among traffic flows and forwards packets independently, so it uses capacity efficiently but can queue.",
    "teachingSteps": [
      "Explore: Determine whether capacity is reserved or shared and whether frames queue.",
      "Circuit switching reserves a path’s capacity for a session. Packet switching shares links among traffic flows and forwards packets independently, so it uses capacity efficiently but can queue.",
      "Predict forwarding, delay or loss from the link’s current load."
    ],
    "foundation": {
      "title": "Circuit switching and packet switching",
      "idea": "A link moves frames between directly connected devices. Switches and shared media determine how local traffic uses a link; packet switching shares capacity while circuit switching reserves it. Circuit switching reserves a path’s capacity for a session. Packet switching shares links among traffic flows and forwards packets independently, so it uses capacity efficiently but can queue.",
      "terms": [
        "Link: A communication path between neighboring network interfaces.",
        "Switch: A device that forwards frames between LAN ports using link-layer addresses.",
        "Queue: A waiting area for packets when arrivals temporarily exceed link service."
      ],
      "example": "A dedicated voice circuit keeps its reserved rate during silence; a packet network can use those idle moments for other traffic."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Circuit switching and packet switching · Explore: Two users share a packet link. One is silent for a while. What can the network do with the unused link capacity? Which step should the host or router take next?",
        "options": [
          "Determine how multiple senders share it",
          "Identify the path and its available capacity",
          "Predict the queue or forwarding outcome"
        ],
        "answer": 0,
        "explanation": "Determine how multiple senders share it. Determine whether capacity is reserved or shared and whether frames queue."
      },
      {
        "type": "match",
        "prompt": "Circuit switching and packet switching · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Switch",
            "A device that forwards frames between LAN ports using link-layer addresses."
          ],
          [
            "Queue",
            "A waiting area for packets when arrivals temporarily exceed link service."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Circuit switching and packet switching · Explore: put the actions in a valid working sequence.",
        "items": [
          "Identify the path and its available capacity",
          "Determine how multiple senders share it",
          "Predict the queue or forwarding outcome"
        ],
        "explanation": "Identify the link and the unit that travels across it. Determine whether capacity is reserved or shared and whether frames queue. Predict forwarding, delay or loss from the link’s current load."
      },
      {
        "type": "choice",
        "prompt": "Circuit switching and packet switching · Explore: which statement is accurate for circuit switching and packet switching?",
        "options": [
          "Carry packets from other flows",
          "Keep it reserved exclusively for the silent user",
          "Convert it into a new IP address"
        ],
        "answer": 0,
        "explanation": "Carry packets from other flows. Circuit switching reserves a path’s capacity for a session. Packet switching shares links among traffic flows and forwards packets independently, so it uses capacity efficiently but can queue."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "switching",
      "mode": "switching",
      "lecture": 5
    },
    "cnScene": [
      "Identify the link and the unit that travels across it.",
      "Circuit switching reserves a path’s capacity for a session. Packet switching shares links among traffic flows and forwards packets independently, so it uses capacity efficiently but can queue.",
      "Predict forwarding, delay or loss from the link’s current load."
    ],
    "sourceReferences": [
      {
        "start": 1756.93,
        "end": 1786.7,
        "text": " Clear request packet is used to top, I mean, which is like, just like a circuit switching. Okay. Not a dedicated path. Just like circuit. This is like a tear down, tear down or setup. Okay. Tear down means you're disconnecting. You're saying that, okay, I'm done with that. Not a dedicated part. Unlike circuit switching links in the path may be shared between different virtual circuits. Let's just see that. What does this mean? Okay. So as you can see from this diagram."
      },
      {
        "start": 3014.08,
        "end": 3044.7,
        "text": " But the route may not be dedicated solely for the buses only. Maybe like I mean they are saying that okay, maybe the auto might also go or some other things might also go. The buses can well be stuck in the traffic during the rush hours and therefore reassembles mode. I mean this is reassembles means this is more of similar like the packet switching network with the virtual circuit, which means they are saying the path is fixed. Okay. They are saying for bus. They are saying path is fixed."
      }
    ],
    "start": 16
  },
  {
    "id": 17,
    "lecture": 5,
    "title": "Circuit switching and packet switching · Apply",
    "concept": "A link moves frames between directly connected devices. Switches and shared media determine how local traffic uses a link; packet switching shares capacity while circuit switching reserves it. Circuit switching reserves a path’s capacity for a session. Packet switching shares links among traffic flows and forwards packets independently, so it uses capacity efficiently but can queue.",
    "teachingSteps": [
      "Apply: Predict forwarding, delay or loss from the link’s current load.",
      "Circuit switching reserves a path’s capacity for a session. Packet switching shares links among traffic flows and forwards packets independently, so it uses capacity efficiently but can queue.",
      "Identify the link and the unit that travels across it."
    ],
    "foundation": {
      "title": "Circuit switching and packet switching",
      "idea": "A link moves frames between directly connected devices. Switches and shared media determine how local traffic uses a link; packet switching shares capacity while circuit switching reserves it. Circuit switching reserves a path’s capacity for a session. Packet switching shares links among traffic flows and forwards packets independently, so it uses capacity efficiently but can queue.",
      "terms": [
        "Link: A communication path between neighboring network interfaces.",
        "Switch: A device that forwards frames between LAN ports using link-layer addresses.",
        "Queue: A waiting area for packets when arrivals temporarily exceed link service."
      ],
      "example": "A dedicated voice circuit keeps its reserved rate during silence; a packet network can use those idle moments for other traffic."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Circuit switching and packet switching · Apply: A new case changes one condition: Two users share a packet link. One is silent for a while. What can the network do with the unused link capacity? Which conclusion still follows?",
        "options": [
          "Keep it reserved exclusively for the silent user",
          "Carry packets from other flows",
          "Convert it into a new IP address"
        ],
        "answer": 1,
        "explanation": "Carry packets from other flows. Predict forwarding, delay or loss from the link’s current load."
      },
      {
        "type": "match",
        "prompt": "Circuit switching and packet switching · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Queue",
            "A waiting area for packets when arrivals temporarily exceed link service."
          ],
          [
            "Link",
            "A communication path between neighboring network interfaces."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Circuit switching and packet switching · Apply: put the actions in a valid working sequence.",
        "items": [
          "Identify the path and its available capacity",
          "Determine how multiple senders share it",
          "Predict the queue or forwarding outcome"
        ],
        "explanation": "Identify the link and the unit that travels across it. Determine whether capacity is reserved or shared and whether frames queue. Predict forwarding, delay or loss from the link’s current load."
      },
      {
        "type": "choice",
        "prompt": "Circuit switching and packet switching · Apply: which statement is accurate for circuit switching and packet switching?",
        "options": [
          "Carry packets from other flows",
          "Keep it reserved exclusively for the silent user",
          "Convert it into a new IP address"
        ],
        "answer": 0,
        "explanation": "Carry packets from other flows. Circuit switching reserves a path’s capacity for a session. Packet switching shares links among traffic flows and forwards packets independently, so it uses capacity efficiently but can queue."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "switching",
      "mode": "switching",
      "lecture": 5
    },
    "cnScene": [
      "Identify the link and the unit that travels across it.",
      "Circuit switching reserves a path’s capacity for a session. Packet switching shares links among traffic flows and forwards packets independently, so it uses capacity efficiently but can queue.",
      "Predict forwarding, delay or loss from the link’s current load."
    ],
    "sourceReferences": [
      {
        "start": 1756.93,
        "end": 1786.7,
        "text": " Clear request packet is used to top, I mean, which is like, just like a circuit switching. Okay. Not a dedicated path. Just like circuit. This is like a tear down, tear down or setup. Okay. Tear down means you're disconnecting. You're saying that, okay, I'm done with that. Not a dedicated part. Unlike circuit switching links in the path may be shared between different virtual circuits. Let's just see that. What does this mean? Okay. So as you can see from this diagram."
      },
      {
        "start": 3014.08,
        "end": 3044.7,
        "text": " But the route may not be dedicated solely for the buses only. Maybe like I mean they are saying that okay, maybe the auto might also go or some other things might also go. The buses can well be stuck in the traffic during the rush hours and therefore reassembles mode. I mean this is reassembles means this is more of similar like the packet switching network with the virtual circuit, which means they are saying the path is fixed. Okay. They are saying for bus. They are saying path is fixed."
      }
    ],
    "start": 17
  },
  {
    "id": 18,
    "lecture": 6,
    "title": "Detect single-bit errors · Discover",
    "concept": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. A parity bit is chosen so the total number of 1 bits is even or odd. It detects any odd number of flipped bits, but it cannot identify which bit changed and misses an even number of flips.",
    "teachingSteps": [
      "Discover: Choose the check rule or code used by the sender.",
      "A parity bit is chosen so the total number of 1 bits is even or odd. It detects any odd number of flipped bits, but it cannot identify which bit changed and misses an even number of flips.",
      "Recompute its check values from the received bits."
    ],
    "foundation": {
      "title": "Detect single-bit errors",
      "idea": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. A parity bit is chosen so the total number of 1 bits is even or odd. It detects any odd number of flipped bits, but it cannot identify which bit changed and misses an even number of flips.",
      "terms": [
        "Redundancy: Extra check bits added to data so a receiver can test it.",
        "Parity: A one-bit check that constrains the even or odd count of ones.",
        "Syndrome: The pattern of failed Hamming checks used to identify an error position."
      ],
      "example": "With even parity, data 1011 contains three 1s, so the parity bit is 1 and the transmitted word 10111 has four 1s."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Detect single-bit errors · Discover: A frame uses one parity bit and two bits flip in transit. What can the receiver conclude from parity alone? Which networking rule determines the result?",
        "options": [
          "The two-bit error may go undetected",
          "It can always locate both bad bits",
          "Parity corrects both flipped bits"
        ],
        "answer": 0,
        "explanation": "The two-bit error may go undetected. Choose the check rule or code used by the sender."
      },
      {
        "type": "match",
        "prompt": "Detect single-bit errors · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Redundancy",
            "Extra check bits added to data so a receiver can test it."
          ],
          [
            "Parity",
            "A one-bit check that constrains the even or odd count of ones."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Detect single-bit errors · Discover: put the actions in a valid working sequence.",
        "items": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "explanation": "Choose the check rule or code used by the sender. Recompute its check values from the received bits. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "choice",
        "prompt": "Detect single-bit errors · Discover: which statement is accurate for detect single-bit errors?",
        "options": [
          "The two-bit error may go undetected",
          "It can always locate both bad bits",
          "Parity corrects both flipped bits"
        ],
        "answer": 0,
        "explanation": "The two-bit error may go undetected. A parity bit is chosen so the total number of 1 bits is even or odd. It detects any odd number of flipped bits, but it cannot identify which bit changed and misses an even number of flips."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "error",
      "mode": "parity",
      "lecture": 6
    },
    "cnScene": [
      "Choose the check rule or code used by the sender.",
      "A parity bit is chosen so the total number of 1 bits is even or odd. It detects any odd number of flipped bits, but it cannot identify which bit changed and misses an even number of flips.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "sourceReferences": [
      {
        "start": 2591.98,
        "end": 2668.38,
        "text": " if number of bits are odd what should I write in the English language if number of bits are odd get corrupted then Jor will change and then receiver will be able to detect okay otherwise I mean I'm talking about always even parity otherwise receiver will not be able to detect so receiver can detect so for even parity again receiver can detect corrupted bits"
      },
      {
        "start": 2671.25,
        "end": 2708.93,
        "text": " If number of corrupted bits, this hash means number, okay, corrupted bits, order even. This is true or false, tell me. What do you think? This is true, right? I mean, because JOR will change, in case of even parity, if you are having, basically, if you are either one bit change, three bit change, five bit change, then receiver can detect it, otherwise the receiver won't be able to detect it. So this is true. Okay. Let's do this question. So,"
      }
    ],
    "start": 18
  },
  {
    "id": 19,
    "lecture": 6,
    "title": "Detect single-bit errors · Explore",
    "concept": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. A parity bit is chosen so the total number of 1 bits is even or odd. It detects any odd number of flipped bits, but it cannot identify which bit changed and misses an even number of flips.",
    "teachingSteps": [
      "Explore: Recompute its check values from the received bits.",
      "A parity bit is chosen so the total number of 1 bits is even or odd. It detects any odd number of flipped bits, but it cannot identify which bit changed and misses an even number of flips.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "foundation": {
      "title": "Detect single-bit errors",
      "idea": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. A parity bit is chosen so the total number of 1 bits is even or odd. It detects any odd number of flipped bits, but it cannot identify which bit changed and misses an even number of flips.",
      "terms": [
        "Redundancy: Extra check bits added to data so a receiver can test it.",
        "Parity: A one-bit check that constrains the even or odd count of ones.",
        "Syndrome: The pattern of failed Hamming checks used to identify an error position."
      ],
      "example": "With even parity, data 1011 contains three 1s, so the parity bit is 1 and the transmitted word 10111 has four 1s."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Detect single-bit errors · Explore: A frame uses one parity bit and two bits flip in transit. What can the receiver conclude from parity alone? Which step should the host or router take next?",
        "options": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "answer": 1,
        "explanation": "Recompute the parity or polynomial checks. Recompute its check values from the received bits."
      },
      {
        "type": "match",
        "prompt": "Detect single-bit errors · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Parity",
            "A one-bit check that constrains the even or odd count of ones."
          ],
          [
            "Syndrome",
            "The pattern of failed Hamming checks used to identify an error position."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Detect single-bit errors · Explore: put the actions in a valid working sequence.",
        "items": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "explanation": "Choose the check rule or code used by the sender. Recompute its check values from the received bits. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "choice",
        "prompt": "Detect single-bit errors · Explore: which statement is accurate for detect single-bit errors?",
        "options": [
          "The two-bit error may go undetected",
          "It can always locate both bad bits",
          "Parity corrects both flipped bits"
        ],
        "answer": 0,
        "explanation": "The two-bit error may go undetected. A parity bit is chosen so the total number of 1 bits is even or odd. It detects any odd number of flipped bits, but it cannot identify which bit changed and misses an even number of flips."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "error",
      "mode": "parity",
      "lecture": 6
    },
    "cnScene": [
      "Choose the check rule or code used by the sender.",
      "A parity bit is chosen so the total number of 1 bits is even or odd. It detects any odd number of flipped bits, but it cannot identify which bit changed and misses an even number of flips.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "sourceReferences": [
      {
        "start": 2591.98,
        "end": 2668.38,
        "text": " if number of bits are odd what should I write in the English language if number of bits are odd get corrupted then Jor will change and then receiver will be able to detect okay otherwise I mean I'm talking about always even parity otherwise receiver will not be able to detect so receiver can detect so for even parity again receiver can detect corrupted bits"
      },
      {
        "start": 2671.25,
        "end": 2708.93,
        "text": " If number of corrupted bits, this hash means number, okay, corrupted bits, order even. This is true or false, tell me. What do you think? This is true, right? I mean, because JOR will change, in case of even parity, if you are having, basically, if you are either one bit change, three bit change, five bit change, then receiver can detect it, otherwise the receiver won't be able to detect it. So this is true. Okay. Let's do this question. So,"
      }
    ],
    "start": 19
  },
  {
    "id": 20,
    "lecture": 6,
    "title": "Detect single-bit errors · Apply",
    "concept": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. A parity bit is chosen so the total number of 1 bits is even or odd. It detects any odd number of flipped bits, but it cannot identify which bit changed and misses an even number of flips.",
    "teachingSteps": [
      "Apply: Interpret the result as clean, detected corruption or a correctable position.",
      "A parity bit is chosen so the total number of 1 bits is even or odd. It detects any odd number of flipped bits, but it cannot identify which bit changed and misses an even number of flips.",
      "Choose the check rule or code used by the sender."
    ],
    "foundation": {
      "title": "Detect single-bit errors",
      "idea": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. A parity bit is chosen so the total number of 1 bits is even or odd. It detects any odd number of flipped bits, but it cannot identify which bit changed and misses an even number of flips.",
      "terms": [
        "Redundancy: Extra check bits added to data so a receiver can test it.",
        "Parity: A one-bit check that constrains the even or odd count of ones.",
        "Syndrome: The pattern of failed Hamming checks used to identify an error position."
      ],
      "example": "With even parity, data 1011 contains three 1s, so the parity bit is 1 and the transmitted word 10111 has four 1s."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Detect single-bit errors · Apply: A new case changes one condition: A frame uses one parity bit and two bits flip in transit. What can the receiver conclude from parity alone? Which conclusion still follows?",
        "options": [
          "It can always locate both bad bits",
          "Parity corrects both flipped bits",
          "The two-bit error may go undetected"
        ],
        "answer": 2,
        "explanation": "The two-bit error may go undetected. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "match",
        "prompt": "Detect single-bit errors · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Syndrome",
            "The pattern of failed Hamming checks used to identify an error position."
          ],
          [
            "Redundancy",
            "Extra check bits added to data so a receiver can test it."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Detect single-bit errors · Apply: put the actions in a valid working sequence.",
        "items": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "explanation": "Choose the check rule or code used by the sender. Recompute its check values from the received bits. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "choice",
        "prompt": "Detect single-bit errors · Apply: which statement is accurate for detect single-bit errors?",
        "options": [
          "The two-bit error may go undetected",
          "It can always locate both bad bits",
          "Parity corrects both flipped bits"
        ],
        "answer": 0,
        "explanation": "The two-bit error may go undetected. A parity bit is chosen so the total number of 1 bits is even or odd. It detects any odd number of flipped bits, but it cannot identify which bit changed and misses an even number of flips."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "error",
      "mode": "parity",
      "lecture": 6
    },
    "cnScene": [
      "Choose the check rule or code used by the sender.",
      "A parity bit is chosen so the total number of 1 bits is even or odd. It detects any odd number of flipped bits, but it cannot identify which bit changed and misses an even number of flips.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "sourceReferences": [
      {
        "start": 2591.98,
        "end": 2668.38,
        "text": " if number of bits are odd what should I write in the English language if number of bits are odd get corrupted then Jor will change and then receiver will be able to detect okay otherwise I mean I'm talking about always even parity otherwise receiver will not be able to detect so receiver can detect so for even parity again receiver can detect corrupted bits"
      },
      {
        "start": 2671.25,
        "end": 2708.93,
        "text": " If number of corrupted bits, this hash means number, okay, corrupted bits, order even. This is true or false, tell me. What do you think? This is true, right? I mean, because JOR will change, in case of even parity, if you are having, basically, if you are either one bit change, three bit change, five bit change, then receiver can detect it, otherwise the receiver won't be able to detect it. So this is true. Okay. Let's do this question. So,"
      }
    ],
    "start": 20
  },
  {
    "id": 21,
    "lecture": 7,
    "title": "Understand single-error correction · Discover",
    "concept": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. Hamming codes place parity bits at power-of-two positions. The receiver recomputes parity checks; their pattern forms a syndrome that points to a single erroneous bit.",
    "teachingSteps": [
      "Discover: Choose the check rule or code used by the sender.",
      "Hamming codes place parity bits at power-of-two positions. The receiver recomputes parity checks; their pattern forms a syndrome that points to a single erroneous bit.",
      "Recompute its check values from the received bits."
    ],
    "foundation": {
      "title": "Understand single-error correction",
      "idea": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. Hamming codes place parity bits at power-of-two positions. The receiver recomputes parity checks; their pattern forms a syndrome that points to a single erroneous bit.",
      "terms": [
        "Redundancy: Extra check bits added to data so a receiver can test it.",
        "Parity: A one-bit check that constrains the even or odd count of ones.",
        "Syndrome: The pattern of failed Hamming checks used to identify an error position."
      ],
      "example": "In a Hamming code, failed checks at parity positions 1 and 4 combine to syndrome 5, identifying bit position 5 for a single-bit error."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Understand single-error correction · Discover: A Hamming receiver gets a nonzero syndrome equal to 6. Under the single-bit-error assumption, which bit should it flip? Which networking rule determines the result?",
        "options": [
          "Parity bit position 1 only",
          "Bit position 6",
          "Every bit whose index is even"
        ],
        "answer": 1,
        "explanation": "Bit position 6. Choose the check rule or code used by the sender."
      },
      {
        "type": "match",
        "prompt": "Understand single-error correction · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Redundancy",
            "Extra check bits added to data so a receiver can test it."
          ],
          [
            "Parity",
            "A one-bit check that constrains the even or odd count of ones."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Understand single-error correction · Discover: put the actions in a valid working sequence.",
        "items": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "explanation": "Choose the check rule or code used by the sender. Recompute its check values from the received bits. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "choice",
        "prompt": "Understand single-error correction · Discover: which statement is accurate for understand single-error correction?",
        "options": [
          "Bit position 6",
          "Parity bit position 1 only",
          "Every bit whose index is even"
        ],
        "answer": 0,
        "explanation": "Bit position 6. Hamming codes place parity bits at power-of-two positions. The receiver recomputes parity checks; their pattern forms a syndrome that points to a single erroneous bit."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "error",
      "mode": "hamming",
      "lecture": 7
    },
    "cnScene": [
      "Choose the check rule or code used by the sender.",
      "Hamming codes place parity bits at power-of-two positions. The receiver recomputes parity checks; their pattern forms a syndrome that points to a single erroneous bit.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "sourceReferences": [
      {
        "start": 293.5,
        "end": 322.16,
        "text": " This is one of the code which is coming under the hamming code or or maybe you can say the hamming code comes under this which means we want to study hamming codes only but This hamming code seems to be the kind of single error correcting code. Do you remember this parity check? This parity check was single error detecting code, right? Now I want to correct single error. This parity was single error detecting code. Now we want to correct single errors. Okay, if you want to correct single errors"
      },
      {
        "start": 498.47,
        "end": 537.02,
        "text": " but my idea is that can we also design the code such that we can correct the errors so the answer of this question is that yes but we need to use multiple parities tell me in single bit parity how many in single bit parity codes how many parity bits we were using? codes we were using bund with parity now I want to basically correct the code also okay"
      }
    ],
    "start": 21
  },
  {
    "id": 22,
    "lecture": 7,
    "title": "Understand single-error correction · Explore",
    "concept": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. Hamming codes place parity bits at power-of-two positions. The receiver recomputes parity checks; their pattern forms a syndrome that points to a single erroneous bit.",
    "teachingSteps": [
      "Explore: Recompute its check values from the received bits.",
      "Hamming codes place parity bits at power-of-two positions. The receiver recomputes parity checks; their pattern forms a syndrome that points to a single erroneous bit.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "foundation": {
      "title": "Understand single-error correction",
      "idea": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. Hamming codes place parity bits at power-of-two positions. The receiver recomputes parity checks; their pattern forms a syndrome that points to a single erroneous bit.",
      "terms": [
        "Redundancy: Extra check bits added to data so a receiver can test it.",
        "Parity: A one-bit check that constrains the even or odd count of ones.",
        "Syndrome: The pattern of failed Hamming checks used to identify an error position."
      ],
      "example": "In a Hamming code, failed checks at parity positions 1 and 4 combine to syndrome 5, identifying bit position 5 for a single-bit error."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Understand single-error correction · Explore: A Hamming receiver gets a nonzero syndrome equal to 6. Under the single-bit-error assumption, which bit should it flip? Which step should the host or router take next?",
        "options": [
          "Arrange the data and check bits",
          "Detect the error or locate a correctable bit",
          "Recompute the parity or polynomial checks"
        ],
        "answer": 2,
        "explanation": "Recompute the parity or polynomial checks. Recompute its check values from the received bits."
      },
      {
        "type": "match",
        "prompt": "Understand single-error correction · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Parity",
            "A one-bit check that constrains the even or odd count of ones."
          ],
          [
            "Syndrome",
            "The pattern of failed Hamming checks used to identify an error position."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Understand single-error correction · Explore: put the actions in a valid working sequence.",
        "items": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "explanation": "Choose the check rule or code used by the sender. Recompute its check values from the received bits. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "choice",
        "prompt": "Understand single-error correction · Explore: which statement is accurate for understand single-error correction?",
        "options": [
          "Bit position 6",
          "Parity bit position 1 only",
          "Every bit whose index is even"
        ],
        "answer": 0,
        "explanation": "Bit position 6. Hamming codes place parity bits at power-of-two positions. The receiver recomputes parity checks; their pattern forms a syndrome that points to a single erroneous bit."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "error",
      "mode": "hamming",
      "lecture": 7
    },
    "cnScene": [
      "Choose the check rule or code used by the sender.",
      "Hamming codes place parity bits at power-of-two positions. The receiver recomputes parity checks; their pattern forms a syndrome that points to a single erroneous bit.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "sourceReferences": [
      {
        "start": 293.5,
        "end": 322.16,
        "text": " This is one of the code which is coming under the hamming code or or maybe you can say the hamming code comes under this which means we want to study hamming codes only but This hamming code seems to be the kind of single error correcting code. Do you remember this parity check? This parity check was single error detecting code, right? Now I want to correct single error. This parity was single error detecting code. Now we want to correct single errors. Okay, if you want to correct single errors"
      },
      {
        "start": 498.47,
        "end": 537.02,
        "text": " but my idea is that can we also design the code such that we can correct the errors so the answer of this question is that yes but we need to use multiple parities tell me in single bit parity how many in single bit parity codes how many parity bits we were using? codes we were using bund with parity now I want to basically correct the code also okay"
      }
    ],
    "start": 22
  },
  {
    "id": 23,
    "lecture": 7,
    "title": "Understand single-error correction · Apply",
    "concept": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. Hamming codes place parity bits at power-of-two positions. The receiver recomputes parity checks; their pattern forms a syndrome that points to a single erroneous bit.",
    "teachingSteps": [
      "Apply: Interpret the result as clean, detected corruption or a correctable position.",
      "Hamming codes place parity bits at power-of-two positions. The receiver recomputes parity checks; their pattern forms a syndrome that points to a single erroneous bit.",
      "Choose the check rule or code used by the sender."
    ],
    "foundation": {
      "title": "Understand single-error correction",
      "idea": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. Hamming codes place parity bits at power-of-two positions. The receiver recomputes parity checks; their pattern forms a syndrome that points to a single erroneous bit.",
      "terms": [
        "Redundancy: Extra check bits added to data so a receiver can test it.",
        "Parity: A one-bit check that constrains the even or odd count of ones.",
        "Syndrome: The pattern of failed Hamming checks used to identify an error position."
      ],
      "example": "In a Hamming code, failed checks at parity positions 1 and 4 combine to syndrome 5, identifying bit position 5 for a single-bit error."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Understand single-error correction · Apply: A new case changes one condition: A Hamming receiver gets a nonzero syndrome equal to 6. Under the single-bit-error assumption, which bit should it flip? Which conclusion still follows?",
        "options": [
          "Bit position 6",
          "Parity bit position 1 only",
          "Every bit whose index is even"
        ],
        "answer": 0,
        "explanation": "Bit position 6. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "match",
        "prompt": "Understand single-error correction · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Syndrome",
            "The pattern of failed Hamming checks used to identify an error position."
          ],
          [
            "Redundancy",
            "Extra check bits added to data so a receiver can test it."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Understand single-error correction · Apply: put the actions in a valid working sequence.",
        "items": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "explanation": "Choose the check rule or code used by the sender. Recompute its check values from the received bits. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "choice",
        "prompt": "Understand single-error correction · Apply: which statement is accurate for understand single-error correction?",
        "options": [
          "Bit position 6",
          "Parity bit position 1 only",
          "Every bit whose index is even"
        ],
        "answer": 0,
        "explanation": "Bit position 6. Hamming codes place parity bits at power-of-two positions. The receiver recomputes parity checks; their pattern forms a syndrome that points to a single erroneous bit."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "error",
      "mode": "hamming",
      "lecture": 7
    },
    "cnScene": [
      "Choose the check rule or code used by the sender.",
      "Hamming codes place parity bits at power-of-two positions. The receiver recomputes parity checks; their pattern forms a syndrome that points to a single erroneous bit.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "sourceReferences": [
      {
        "start": 293.5,
        "end": 322.16,
        "text": " This is one of the code which is coming under the hamming code or or maybe you can say the hamming code comes under this which means we want to study hamming codes only but This hamming code seems to be the kind of single error correcting code. Do you remember this parity check? This parity check was single error detecting code, right? Now I want to correct single error. This parity was single error detecting code. Now we want to correct single errors. Okay, if you want to correct single errors"
      },
      {
        "start": 498.47,
        "end": 537.02,
        "text": " but my idea is that can we also design the code such that we can correct the errors so the answer of this question is that yes but we need to use multiple parities tell me in single bit parity how many in single bit parity codes how many parity bits we were using? codes we were using bund with parity now I want to basically correct the code also okay"
      }
    ],
    "start": 23
  },
  {
    "id": 24,
    "lecture": 8,
    "title": "Choose the number of Hamming parity bits · Discover",
    "concept": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. For m data bits and r Hamming parity bits, choose the smallest r satisfying 2^r >= m + r + 1. The checks must represent every bit position plus the no-error state.",
    "teachingSteps": [
      "Discover: Choose the check rule or code used by the sender.",
      "For m data bits and r Hamming parity bits, choose the smallest r satisfying 2^r >= m + r + 1. The checks must represent every bit position plus the no-error state.",
      "Recompute its check values from the received bits."
    ],
    "foundation": {
      "title": "Choose the number of Hamming parity bits",
      "idea": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. For m data bits and r Hamming parity bits, choose the smallest r satisfying 2^r >= m + r + 1. The checks must represent every bit position plus the no-error state.",
      "terms": [
        "Redundancy: Extra check bits added to data so a receiver can test it.",
        "Parity: A one-bit check that constrains the even or odd count of ones.",
        "Syndrome: The pattern of failed Hamming checks used to identify an error position."
      ],
      "example": "For 8 data bits, r = 4 works because 16 >= 8 + 4 + 1; r = 3 fails because 8 < 12."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Choose the number of Hamming parity bits · Discover: For 8 data bits, what is the minimum number of Hamming parity bits? Which networking rule determines the result?",
        "options": [
          "3",
          "5",
          "4"
        ],
        "answer": 2,
        "explanation": "4. Choose the check rule or code used by the sender."
      },
      {
        "type": "match",
        "prompt": "Choose the number of Hamming parity bits · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Redundancy",
            "Extra check bits added to data so a receiver can test it."
          ],
          [
            "Parity",
            "A one-bit check that constrains the even or odd count of ones."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Choose the number of Hamming parity bits · Discover: put the actions in a valid working sequence.",
        "items": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "explanation": "Choose the check rule or code used by the sender. Recompute its check values from the received bits. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "choice",
        "prompt": "Choose the number of Hamming parity bits · Discover: which statement is accurate for choose the number of hamming parity bits?",
        "options": [
          "4",
          "3",
          "5"
        ],
        "answer": 0,
        "explanation": "4. For m data bits and r Hamming parity bits, choose the smallest r satisfying 2^r >= m + r + 1. The checks must represent every bit position plus the no-error state."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "error",
      "mode": "hamming-count",
      "lecture": 8
    },
    "cnScene": [
      "Choose the check rule or code used by the sender.",
      "For m data bits and r Hamming parity bits, choose the smallest r satisfying 2^r >= m + r + 1. The checks must represent every bit position plus the no-error state.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "sourceReferences": [
      {
        "start": 1337.72,
        "end": 1367.81,
        "text": " Here M plus R indicates the location of this in the position, additional state indicate no error, plus 1 means no error. Since R bits can indicate 2 power R states, 2 power R must be greater than equal to M plus R plus 1. Actually, this is the formula that every of the teachers just tell you directly, no one is going to prove you. Have you seen this before also, if you have done your preparation from somewhere else? You might have seen this formula. So have you seen proof of this formula?"
      },
      {
        "start": 1441.17,
        "end": 1471.47,
        "text": " then 2 power r must be greater than equal to m plus r plus 1 then 2 power r must be greater than equal to m plus r plus sorry 8 plus 1 which is 9 I think 3 3 won't work 4 4 can work like so I think 4 this is fine to everyone okay great now let's just do this question minimum number of bits required are needed for the hamming code if"
      }
    ],
    "start": 24
  },
  {
    "id": 25,
    "lecture": 8,
    "title": "Choose the number of Hamming parity bits · Explore",
    "concept": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. For m data bits and r Hamming parity bits, choose the smallest r satisfying 2^r >= m + r + 1. The checks must represent every bit position plus the no-error state.",
    "teachingSteps": [
      "Explore: Recompute its check values from the received bits.",
      "For m data bits and r Hamming parity bits, choose the smallest r satisfying 2^r >= m + r + 1. The checks must represent every bit position plus the no-error state.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "foundation": {
      "title": "Choose the number of Hamming parity bits",
      "idea": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. For m data bits and r Hamming parity bits, choose the smallest r satisfying 2^r >= m + r + 1. The checks must represent every bit position plus the no-error state.",
      "terms": [
        "Redundancy: Extra check bits added to data so a receiver can test it.",
        "Parity: A one-bit check that constrains the even or odd count of ones.",
        "Syndrome: The pattern of failed Hamming checks used to identify an error position."
      ],
      "example": "For 8 data bits, r = 4 works because 16 >= 8 + 4 + 1; r = 3 fails because 8 < 12."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Choose the number of Hamming parity bits · Explore: For 8 data bits, what is the minimum number of Hamming parity bits? Which step should the host or router take next?",
        "options": [
          "Recompute the parity or polynomial checks",
          "Arrange the data and check bits",
          "Detect the error or locate a correctable bit"
        ],
        "answer": 0,
        "explanation": "Recompute the parity or polynomial checks. Recompute its check values from the received bits."
      },
      {
        "type": "match",
        "prompt": "Choose the number of Hamming parity bits · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Parity",
            "A one-bit check that constrains the even or odd count of ones."
          ],
          [
            "Syndrome",
            "The pattern of failed Hamming checks used to identify an error position."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Choose the number of Hamming parity bits · Explore: put the actions in a valid working sequence.",
        "items": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "explanation": "Choose the check rule or code used by the sender. Recompute its check values from the received bits. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "choice",
        "prompt": "Choose the number of Hamming parity bits · Explore: which statement is accurate for choose the number of hamming parity bits?",
        "options": [
          "4",
          "3",
          "5"
        ],
        "answer": 0,
        "explanation": "4. For m data bits and r Hamming parity bits, choose the smallest r satisfying 2^r >= m + r + 1. The checks must represent every bit position plus the no-error state."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "error",
      "mode": "hamming-count",
      "lecture": 8
    },
    "cnScene": [
      "Choose the check rule or code used by the sender.",
      "For m data bits and r Hamming parity bits, choose the smallest r satisfying 2^r >= m + r + 1. The checks must represent every bit position plus the no-error state.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "sourceReferences": [
      {
        "start": 1337.72,
        "end": 1367.81,
        "text": " Here M plus R indicates the location of this in the position, additional state indicate no error, plus 1 means no error. Since R bits can indicate 2 power R states, 2 power R must be greater than equal to M plus R plus 1. Actually, this is the formula that every of the teachers just tell you directly, no one is going to prove you. Have you seen this before also, if you have done your preparation from somewhere else? You might have seen this formula. So have you seen proof of this formula?"
      },
      {
        "start": 1441.17,
        "end": 1471.47,
        "text": " then 2 power r must be greater than equal to m plus r plus 1 then 2 power r must be greater than equal to m plus r plus sorry 8 plus 1 which is 9 I think 3 3 won't work 4 4 can work like so I think 4 this is fine to everyone okay great now let's just do this question minimum number of bits required are needed for the hamming code if"
      }
    ],
    "start": 25
  },
  {
    "id": 26,
    "lecture": 8,
    "title": "Choose the number of Hamming parity bits · Apply",
    "concept": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. For m data bits and r Hamming parity bits, choose the smallest r satisfying 2^r >= m + r + 1. The checks must represent every bit position plus the no-error state.",
    "teachingSteps": [
      "Apply: Interpret the result as clean, detected corruption or a correctable position.",
      "For m data bits and r Hamming parity bits, choose the smallest r satisfying 2^r >= m + r + 1. The checks must represent every bit position plus the no-error state.",
      "Choose the check rule or code used by the sender."
    ],
    "foundation": {
      "title": "Choose the number of Hamming parity bits",
      "idea": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. For m data bits and r Hamming parity bits, choose the smallest r satisfying 2^r >= m + r + 1. The checks must represent every bit position plus the no-error state.",
      "terms": [
        "Redundancy: Extra check bits added to data so a receiver can test it.",
        "Parity: A one-bit check that constrains the even or odd count of ones.",
        "Syndrome: The pattern of failed Hamming checks used to identify an error position."
      ],
      "example": "For 8 data bits, r = 4 works because 16 >= 8 + 4 + 1; r = 3 fails because 8 < 12."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Choose the number of Hamming parity bits · Apply: A new case changes one condition: For 8 data bits, what is the minimum number of Hamming parity bits? Which conclusion still follows?",
        "options": [
          "3",
          "4",
          "5"
        ],
        "answer": 1,
        "explanation": "4. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "match",
        "prompt": "Choose the number of Hamming parity bits · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Syndrome",
            "The pattern of failed Hamming checks used to identify an error position."
          ],
          [
            "Redundancy",
            "Extra check bits added to data so a receiver can test it."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Choose the number of Hamming parity bits · Apply: put the actions in a valid working sequence.",
        "items": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "explanation": "Choose the check rule or code used by the sender. Recompute its check values from the received bits. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "choice",
        "prompt": "Choose the number of Hamming parity bits · Apply: which statement is accurate for choose the number of hamming parity bits?",
        "options": [
          "4",
          "3",
          "5"
        ],
        "answer": 0,
        "explanation": "4. For m data bits and r Hamming parity bits, choose the smallest r satisfying 2^r >= m + r + 1. The checks must represent every bit position plus the no-error state."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "error",
      "mode": "hamming-count",
      "lecture": 8
    },
    "cnScene": [
      "Choose the check rule or code used by the sender.",
      "For m data bits and r Hamming parity bits, choose the smallest r satisfying 2^r >= m + r + 1. The checks must represent every bit position plus the no-error state.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "sourceReferences": [
      {
        "start": 1337.72,
        "end": 1367.81,
        "text": " Here M plus R indicates the location of this in the position, additional state indicate no error, plus 1 means no error. Since R bits can indicate 2 power R states, 2 power R must be greater than equal to M plus R plus 1. Actually, this is the formula that every of the teachers just tell you directly, no one is going to prove you. Have you seen this before also, if you have done your preparation from somewhere else? You might have seen this formula. So have you seen proof of this formula?"
      },
      {
        "start": 1441.17,
        "end": 1471.47,
        "text": " then 2 power r must be greater than equal to m plus r plus 1 then 2 power r must be greater than equal to m plus r plus sorry 8 plus 1 which is 9 I think 3 3 won't work 4 4 can work like so I think 4 this is fine to everyone okay great now let's just do this question minimum number of bits required are needed for the hamming code if"
      }
    ],
    "start": 26
  },
  {
    "id": 27,
    "lecture": 9,
    "title": "Place bits and build a Hamming code · Discover",
    "concept": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. Number code positions from 1. Put parity bits at positions 1, 2, 4, 8, and so on; place data bits in the remaining positions and compute each parity group.",
    "teachingSteps": [
      "Discover: Choose the check rule or code used by the sender.",
      "Number code positions from 1. Put parity bits at positions 1, 2, 4, 8, and so on; place data bits in the remaining positions and compute each parity group.",
      "Recompute its check values from the received bits."
    ],
    "foundation": {
      "title": "Place bits and build a Hamming code",
      "idea": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. Number code positions from 1. Put parity bits at positions 1, 2, 4, 8, and so on; place data bits in the remaining positions and compute each parity group.",
      "terms": [
        "Redundancy: Extra check bits added to data so a receiver can test it.",
        "Parity: A one-bit check that constrains the even or odd count of ones.",
        "Syndrome: The pattern of failed Hamming checks used to identify an error position."
      ],
      "example": "With four parity bits, positions 1, 2, 4 and 8 are checks; data begins in positions 3, 5, 6 and 7."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Place bits and build a Hamming code · Discover: In a Hamming code numbered from position 1, which position is reserved for a parity bit? Which networking rule determines the result?",
        "options": [
          "Position 8",
          "Position 6",
          "Position 9"
        ],
        "answer": 0,
        "explanation": "Position 8. Choose the check rule or code used by the sender."
      },
      {
        "type": "match",
        "prompt": "Place bits and build a Hamming code · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Redundancy",
            "Extra check bits added to data so a receiver can test it."
          ],
          [
            "Parity",
            "A one-bit check that constrains the even or odd count of ones."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Place bits and build a Hamming code · Discover: put the actions in a valid working sequence.",
        "items": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "explanation": "Choose the check rule or code used by the sender. Recompute its check values from the received bits. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "choice",
        "prompt": "Place bits and build a Hamming code · Discover: which statement is accurate for place bits and build a hamming code?",
        "options": [
          "Position 8",
          "Position 6",
          "Position 9"
        ],
        "answer": 0,
        "explanation": "Position 8. Number code positions from 1. Put parity bits at positions 1, 2, 4, 8, and so on; place data bits in the remaining positions and compute each parity group."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "error",
      "mode": "hamming",
      "lecture": 9
    },
    "cnScene": [
      "Choose the check rule or code used by the sender.",
      "Number code positions from 1. Put parity bits at positions 1, 2, 4, 8, and so on; place data bits in the remaining positions and compute each parity group.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "sourceReferences": [
      {
        "start": 1008.2,
        "end": 1038.6,
        "text": " Okay, so this is the step one where you are marking the parity, that where will be the parity will be coming. Can you can you write the data here in the remaining positions? Okay, this is one, then three zeroes, then one zero one one, one zero one one, zero zero one, zero zero one. Okay, you don't need after p60, that is fine. Right, so this is your, I mean, this is your code word, that is how you will be sending the code word. Now the only job is to left to calculate this p1."
      },
      {
        "start": 2852.49,
        "end": 2881.46,
        "text": " which is 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 just need to number the bits and just need to write wherever the parity is going to come at 8th position I mean just check what is in 2 power and then you just need to calculate the parity bits that's all that's how you can calculate the hamming code and you now know that how to check which is failing or not that also you know now the hamming course"
      }
    ],
    "start": 27
  },
  {
    "id": 28,
    "lecture": 9,
    "title": "Place bits and build a Hamming code · Explore",
    "concept": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. Number code positions from 1. Put parity bits at positions 1, 2, 4, 8, and so on; place data bits in the remaining positions and compute each parity group.",
    "teachingSteps": [
      "Explore: Recompute its check values from the received bits.",
      "Number code positions from 1. Put parity bits at positions 1, 2, 4, 8, and so on; place data bits in the remaining positions and compute each parity group.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "foundation": {
      "title": "Place bits and build a Hamming code",
      "idea": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. Number code positions from 1. Put parity bits at positions 1, 2, 4, 8, and so on; place data bits in the remaining positions and compute each parity group.",
      "terms": [
        "Redundancy: Extra check bits added to data so a receiver can test it.",
        "Parity: A one-bit check that constrains the even or odd count of ones.",
        "Syndrome: The pattern of failed Hamming checks used to identify an error position."
      ],
      "example": "With four parity bits, positions 1, 2, 4 and 8 are checks; data begins in positions 3, 5, 6 and 7."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Place bits and build a Hamming code · Explore: In a Hamming code numbered from position 1, which position is reserved for a parity bit? Which step should the host or router take next?",
        "options": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "answer": 1,
        "explanation": "Recompute the parity or polynomial checks. Recompute its check values from the received bits."
      },
      {
        "type": "match",
        "prompt": "Place bits and build a Hamming code · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Parity",
            "A one-bit check that constrains the even or odd count of ones."
          ],
          [
            "Syndrome",
            "The pattern of failed Hamming checks used to identify an error position."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Place bits and build a Hamming code · Explore: put the actions in a valid working sequence.",
        "items": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "explanation": "Choose the check rule or code used by the sender. Recompute its check values from the received bits. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "choice",
        "prompt": "Place bits and build a Hamming code · Explore: which statement is accurate for place bits and build a hamming code?",
        "options": [
          "Position 8",
          "Position 6",
          "Position 9"
        ],
        "answer": 0,
        "explanation": "Position 8. Number code positions from 1. Put parity bits at positions 1, 2, 4, 8, and so on; place data bits in the remaining positions and compute each parity group."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "error",
      "mode": "hamming",
      "lecture": 9
    },
    "cnScene": [
      "Choose the check rule or code used by the sender.",
      "Number code positions from 1. Put parity bits at positions 1, 2, 4, 8, and so on; place data bits in the remaining positions and compute each parity group.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "sourceReferences": [
      {
        "start": 1008.2,
        "end": 1038.6,
        "text": " Okay, so this is the step one where you are marking the parity, that where will be the parity will be coming. Can you can you write the data here in the remaining positions? Okay, this is one, then three zeroes, then one zero one one, one zero one one, zero zero one, zero zero one. Okay, you don't need after p60, that is fine. Right, so this is your, I mean, this is your code word, that is how you will be sending the code word. Now the only job is to left to calculate this p1."
      },
      {
        "start": 2852.49,
        "end": 2881.46,
        "text": " which is 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 just need to number the bits and just need to write wherever the parity is going to come at 8th position I mean just check what is in 2 power and then you just need to calculate the parity bits that's all that's how you can calculate the hamming code and you now know that how to check which is failing or not that also you know now the hamming course"
      }
    ],
    "start": 28
  },
  {
    "id": 29,
    "lecture": 9,
    "title": "Place bits and build a Hamming code · Apply",
    "concept": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. Number code positions from 1. Put parity bits at positions 1, 2, 4, 8, and so on; place data bits in the remaining positions and compute each parity group.",
    "teachingSteps": [
      "Apply: Interpret the result as clean, detected corruption or a correctable position.",
      "Number code positions from 1. Put parity bits at positions 1, 2, 4, 8, and so on; place data bits in the remaining positions and compute each parity group.",
      "Choose the check rule or code used by the sender."
    ],
    "foundation": {
      "title": "Place bits and build a Hamming code",
      "idea": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. Number code positions from 1. Put parity bits at positions 1, 2, 4, 8, and so on; place data bits in the remaining positions and compute each parity group.",
      "terms": [
        "Redundancy: Extra check bits added to data so a receiver can test it.",
        "Parity: A one-bit check that constrains the even or odd count of ones.",
        "Syndrome: The pattern of failed Hamming checks used to identify an error position."
      ],
      "example": "With four parity bits, positions 1, 2, 4 and 8 are checks; data begins in positions 3, 5, 6 and 7."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Place bits and build a Hamming code · Apply: A new case changes one condition: In a Hamming code numbered from position 1, which position is reserved for a parity bit? Which conclusion still follows?",
        "options": [
          "Position 6",
          "Position 9",
          "Position 8"
        ],
        "answer": 2,
        "explanation": "Position 8. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "match",
        "prompt": "Place bits and build a Hamming code · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Syndrome",
            "The pattern of failed Hamming checks used to identify an error position."
          ],
          [
            "Redundancy",
            "Extra check bits added to data so a receiver can test it."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Place bits and build a Hamming code · Apply: put the actions in a valid working sequence.",
        "items": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "explanation": "Choose the check rule or code used by the sender. Recompute its check values from the received bits. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "choice",
        "prompt": "Place bits and build a Hamming code · Apply: which statement is accurate for place bits and build a hamming code?",
        "options": [
          "Position 8",
          "Position 6",
          "Position 9"
        ],
        "answer": 0,
        "explanation": "Position 8. Number code positions from 1. Put parity bits at positions 1, 2, 4, 8, and so on; place data bits in the remaining positions and compute each parity group."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "error",
      "mode": "hamming",
      "lecture": 9
    },
    "cnScene": [
      "Choose the check rule or code used by the sender.",
      "Number code positions from 1. Put parity bits at positions 1, 2, 4, 8, and so on; place data bits in the remaining positions and compute each parity group.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "sourceReferences": [
      {
        "start": 1008.2,
        "end": 1038.6,
        "text": " Okay, so this is the step one where you are marking the parity, that where will be the parity will be coming. Can you can you write the data here in the remaining positions? Okay, this is one, then three zeroes, then one zero one one, one zero one one, zero zero one, zero zero one. Okay, you don't need after p60, that is fine. Right, so this is your, I mean, this is your code word, that is how you will be sending the code word. Now the only job is to left to calculate this p1."
      },
      {
        "start": 2852.49,
        "end": 2881.46,
        "text": " which is 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 just need to number the bits and just need to write wherever the parity is going to come at 8th position I mean just check what is in 2 power and then you just need to calculate the parity bits that's all that's how you can calculate the hamming code and you now know that how to check which is failing or not that also you know now the hamming course"
      }
    ],
    "start": 29
  },
  {
    "id": 30,
    "lecture": 10,
    "title": "Compute a CRC remainder · Discover",
    "concept": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. A cyclic redundancy check treats bit strings as polynomials over GF(2). Append generator-degree zeros, divide with XOR (no carries or borrows), and append the remainder to the data.",
    "teachingSteps": [
      "Discover: Choose the check rule or code used by the sender.",
      "A cyclic redundancy check treats bit strings as polynomials over GF(2). Append generator-degree zeros, divide with XOR (no carries or borrows), and append the remainder to the data.",
      "Recompute its check values from the received bits."
    ],
    "foundation": {
      "title": "Compute a CRC remainder",
      "idea": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. A cyclic redundancy check treats bit strings as polynomials over GF(2). Append generator-degree zeros, divide with XOR (no carries or borrows), and append the remainder to the data.",
      "terms": [
        "Redundancy: Extra check bits added to data so a receiver can test it.",
        "Parity: A one-bit check that constrains the even or odd count of ones.",
        "Syndrome: The pattern of failed Hamming checks used to identify an error position."
      ],
      "example": "For data 1101 and generator 1011 (degree 3), append 000, perform modulo-2 division, and send data followed by the 3-bit remainder."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Compute a CRC remainder · Discover: A CRC generator has degree 4. How many zero bits are appended before the modulo-2 division? Which networking rule determines the result?",
        "options": [
          "3",
          "4",
          "The number of 1 bits in the generator"
        ],
        "answer": 1,
        "explanation": "4. Choose the check rule or code used by the sender."
      },
      {
        "type": "match",
        "prompt": "Compute a CRC remainder · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Redundancy",
            "Extra check bits added to data so a receiver can test it."
          ],
          [
            "Parity",
            "A one-bit check that constrains the even or odd count of ones."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Compute a CRC remainder · Discover: put the actions in a valid working sequence.",
        "items": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "explanation": "Choose the check rule or code used by the sender. Recompute its check values from the received bits. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "choice",
        "prompt": "Compute a CRC remainder · Discover: which statement is accurate for compute a crc remainder?",
        "options": [
          "4",
          "3",
          "The number of 1 bits in the generator"
        ],
        "answer": 0,
        "explanation": "4. A cyclic redundancy check treats bit strings as polynomials over GF(2). Append generator-degree zeros, divide with XOR (no carries or borrows), and append the remainder to the data."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "error",
      "mode": "crc",
      "lecture": 10
    },
    "cnScene": [
      "Choose the check rule or code used by the sender.",
      "A cyclic redundancy check treats bit strings as polynomials over GF(2). Append generator-degree zeros, divide with XOR (no carries or borrows), and append the remainder to the data.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "sourceReferences": [
      {
        "start": 1049.11,
        "end": 1084.76,
        "text": " What is the size of the reminder? So reminder will also be three bits, right? Reminder also what is the size of division which means generator generator will be four bits, right? Okay, okay, so generator size of the division is four bits size of the remainder is three bits and Yeah, these are the two things. I think they've asked right number of zeros that you append is also three Okay number of zeros. I hope you understood"
      },
      {
        "start": 2761.82,
        "end": 2800.29,
        "text": " let's just solve this with binary then the next question with polynomial then next question with binary then next question with polynomial okay so we will do that first tell me how many zeros we need to open quickly tell me so this is one zero zero one we will append three zeros right and i should be dividing with one zero one one one zero one one yeah so they are asking for cyclic redundancy check actually the demander is also called cyclic redundancy check okay i mean the check bits so let's "
      }
    ],
    "start": 30
  },
  {
    "id": 31,
    "lecture": 10,
    "title": "Compute a CRC remainder · Explore",
    "concept": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. A cyclic redundancy check treats bit strings as polynomials over GF(2). Append generator-degree zeros, divide with XOR (no carries or borrows), and append the remainder to the data.",
    "teachingSteps": [
      "Explore: Recompute its check values from the received bits.",
      "A cyclic redundancy check treats bit strings as polynomials over GF(2). Append generator-degree zeros, divide with XOR (no carries or borrows), and append the remainder to the data.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "foundation": {
      "title": "Compute a CRC remainder",
      "idea": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. A cyclic redundancy check treats bit strings as polynomials over GF(2). Append generator-degree zeros, divide with XOR (no carries or borrows), and append the remainder to the data.",
      "terms": [
        "Redundancy: Extra check bits added to data so a receiver can test it.",
        "Parity: A one-bit check that constrains the even or odd count of ones.",
        "Syndrome: The pattern of failed Hamming checks used to identify an error position."
      ],
      "example": "For data 1101 and generator 1011 (degree 3), append 000, perform modulo-2 division, and send data followed by the 3-bit remainder."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Compute a CRC remainder · Explore: A CRC generator has degree 4. How many zero bits are appended before the modulo-2 division? Which step should the host or router take next?",
        "options": [
          "Arrange the data and check bits",
          "Detect the error or locate a correctable bit",
          "Recompute the parity or polynomial checks"
        ],
        "answer": 2,
        "explanation": "Recompute the parity or polynomial checks. Recompute its check values from the received bits."
      },
      {
        "type": "match",
        "prompt": "Compute a CRC remainder · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Parity",
            "A one-bit check that constrains the even or odd count of ones."
          ],
          [
            "Syndrome",
            "The pattern of failed Hamming checks used to identify an error position."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Compute a CRC remainder · Explore: put the actions in a valid working sequence.",
        "items": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "explanation": "Choose the check rule or code used by the sender. Recompute its check values from the received bits. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "choice",
        "prompt": "Compute a CRC remainder · Explore: which statement is accurate for compute a crc remainder?",
        "options": [
          "4",
          "3",
          "The number of 1 bits in the generator"
        ],
        "answer": 0,
        "explanation": "4. A cyclic redundancy check treats bit strings as polynomials over GF(2). Append generator-degree zeros, divide with XOR (no carries or borrows), and append the remainder to the data."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "error",
      "mode": "crc",
      "lecture": 10
    },
    "cnScene": [
      "Choose the check rule or code used by the sender.",
      "A cyclic redundancy check treats bit strings as polynomials over GF(2). Append generator-degree zeros, divide with XOR (no carries or borrows), and append the remainder to the data.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "sourceReferences": [
      {
        "start": 1049.11,
        "end": 1084.76,
        "text": " What is the size of the reminder? So reminder will also be three bits, right? Reminder also what is the size of division which means generator generator will be four bits, right? Okay, okay, so generator size of the division is four bits size of the remainder is three bits and Yeah, these are the two things. I think they've asked right number of zeros that you append is also three Okay number of zeros. I hope you understood"
      },
      {
        "start": 2761.82,
        "end": 2800.29,
        "text": " let's just solve this with binary then the next question with polynomial then next question with binary then next question with polynomial okay so we will do that first tell me how many zeros we need to open quickly tell me so this is one zero zero one we will append three zeros right and i should be dividing with one zero one one one zero one one yeah so they are asking for cyclic redundancy check actually the demander is also called cyclic redundancy check okay i mean the check bits so let's "
      }
    ],
    "start": 31
  },
  {
    "id": 32,
    "lecture": 10,
    "title": "Compute a CRC remainder · Apply",
    "concept": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. A cyclic redundancy check treats bit strings as polynomials over GF(2). Append generator-degree zeros, divide with XOR (no carries or borrows), and append the remainder to the data.",
    "teachingSteps": [
      "Apply: Interpret the result as clean, detected corruption or a correctable position.",
      "A cyclic redundancy check treats bit strings as polynomials over GF(2). Append generator-degree zeros, divide with XOR (no carries or borrows), and append the remainder to the data.",
      "Choose the check rule or code used by the sender."
    ],
    "foundation": {
      "title": "Compute a CRC remainder",
      "idea": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. A cyclic redundancy check treats bit strings as polynomials over GF(2). Append generator-degree zeros, divide with XOR (no carries or borrows), and append the remainder to the data.",
      "terms": [
        "Redundancy: Extra check bits added to data so a receiver can test it.",
        "Parity: A one-bit check that constrains the even or odd count of ones.",
        "Syndrome: The pattern of failed Hamming checks used to identify an error position."
      ],
      "example": "For data 1101 and generator 1011 (degree 3), append 000, perform modulo-2 division, and send data followed by the 3-bit remainder."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Compute a CRC remainder · Apply: A new case changes one condition: A CRC generator has degree 4. How many zero bits are appended before the modulo-2 division? Which conclusion still follows?",
        "options": [
          "4",
          "3",
          "The number of 1 bits in the generator"
        ],
        "answer": 0,
        "explanation": "4. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "match",
        "prompt": "Compute a CRC remainder · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Syndrome",
            "The pattern of failed Hamming checks used to identify an error position."
          ],
          [
            "Redundancy",
            "Extra check bits added to data so a receiver can test it."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Compute a CRC remainder · Apply: put the actions in a valid working sequence.",
        "items": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "explanation": "Choose the check rule or code used by the sender. Recompute its check values from the received bits. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "choice",
        "prompt": "Compute a CRC remainder · Apply: which statement is accurate for compute a crc remainder?",
        "options": [
          "4",
          "3",
          "The number of 1 bits in the generator"
        ],
        "answer": 0,
        "explanation": "4. A cyclic redundancy check treats bit strings as polynomials over GF(2). Append generator-degree zeros, divide with XOR (no carries or borrows), and append the remainder to the data."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "error",
      "mode": "crc",
      "lecture": 10
    },
    "cnScene": [
      "Choose the check rule or code used by the sender.",
      "A cyclic redundancy check treats bit strings as polynomials over GF(2). Append generator-degree zeros, divide with XOR (no carries or borrows), and append the remainder to the data.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "sourceReferences": [
      {
        "start": 1049.11,
        "end": 1084.76,
        "text": " What is the size of the reminder? So reminder will also be three bits, right? Reminder also what is the size of division which means generator generator will be four bits, right? Okay, okay, so generator size of the division is four bits size of the remainder is three bits and Yeah, these are the two things. I think they've asked right number of zeros that you append is also three Okay number of zeros. I hope you understood"
      },
      {
        "start": 2761.82,
        "end": 2800.29,
        "text": " let's just solve this with binary then the next question with polynomial then next question with binary then next question with polynomial okay so we will do that first tell me how many zeros we need to open quickly tell me so this is one zero zero one we will append three zeros right and i should be dividing with one zero one one one zero one one yeah so they are asking for cyclic redundancy check actually the demander is also called cyclic redundancy check okay i mean the check bits so let's "
      }
    ],
    "start": 32
  },
  {
    "id": 33,
    "lecture": 11,
    "title": "Reason about CRC detection · Discover",
    "concept": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. A receiver divides the complete received codeword by the agreed generator. A zero remainder means the frame passes this check; some error patterns divisible by the generator can still escape detection.",
    "teachingSteps": [
      "Discover: Choose the check rule or code used by the sender.",
      "A receiver divides the complete received codeword by the agreed generator. A zero remainder means the frame passes this check; some error patterns divisible by the generator can still escape detection.",
      "Recompute its check values from the received bits."
    ],
    "foundation": {
      "title": "Reason about CRC detection",
      "idea": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. A receiver divides the complete received codeword by the agreed generator. A zero remainder means the frame passes this check; some error patterns divisible by the generator can still escape detection.",
      "terms": [
        "Redundancy: Extra check bits added to data so a receiver can test it.",
        "Parity: A one-bit check that constrains the even or odd count of ones.",
        "Syndrome: The pattern of failed Hamming checks used to identify an error position."
      ],
      "example": "If the generator polynomial is x^3 + x + 1, a burst error shorter than its degree is guaranteed detectable; longer patterns have detection guarantees that depend on the generator."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Reason about CRC detection · Discover: A received codeword produces a nonzero CRC remainder. What should the receiver do? Which networking rule determines the result?",
        "options": [
          "Assume the payload is correct",
          "Use the remainder as the destination port",
          "Treat the frame as corrupted and reject or request retransmission"
        ],
        "answer": 2,
        "explanation": "Treat the frame as corrupted and reject or request retransmission. Choose the check rule or code used by the sender."
      },
      {
        "type": "match",
        "prompt": "Reason about CRC detection · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Redundancy",
            "Extra check bits added to data so a receiver can test it."
          ],
          [
            "Parity",
            "A one-bit check that constrains the even or odd count of ones."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Reason about CRC detection · Discover: put the actions in a valid working sequence.",
        "items": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "explanation": "Choose the check rule or code used by the sender. Recompute its check values from the received bits. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "choice",
        "prompt": "Reason about CRC detection · Discover: which statement is accurate for reason about crc detection?",
        "options": [
          "Treat the frame as corrupted and reject or request retransmission",
          "Assume the payload is correct",
          "Use the remainder as the destination port"
        ],
        "answer": 0,
        "explanation": "Treat the frame as corrupted and reject or request retransmission. A receiver divides the complete received codeword by the agreed generator. A zero remainder means the frame passes this check; some error patterns divisible by the generator can still escape detection."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "error",
      "mode": "crc-detect",
      "lecture": 11
    },
    "cnScene": [
      "Choose the check rule or code used by the sender.",
      "A receiver divides the complete received codeword by the agreed generator. A zero remainder means the frame passes this check; some error patterns divisible by the generator can still escape detection.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "sourceReferences": [
      {
        "start": 912.97,
        "end": 954.45,
        "text": " which is same as EX divided by GX because this is particularly this remainder is 0 which is same as this now here if this is interesting now if GX divides EX then receiver will say there is no error it is all about what kind of error you are getting and what kind of generator you are choosing it is the competition between who is to"
      },
      {
        "start": 2074.64,
        "end": 2110.98,
        "text": " Yes. So that's why ACDR the correct answers here. Okay. I hope you understood this question. Cool. Let's just solve this question. Consider the error function, which is this, then which of the following generator will be able to catch this error? If I use this generator, can it catch this error? I think yes, right? What about this? X power 11, can this catch this error? Catch this error means a remainder should be non zero. I think yes. It won't be able to divide."
      }
    ],
    "start": 33
  },
  {
    "id": 34,
    "lecture": 11,
    "title": "Reason about CRC detection · Explore",
    "concept": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. A receiver divides the complete received codeword by the agreed generator. A zero remainder means the frame passes this check; some error patterns divisible by the generator can still escape detection.",
    "teachingSteps": [
      "Explore: Recompute its check values from the received bits.",
      "A receiver divides the complete received codeword by the agreed generator. A zero remainder means the frame passes this check; some error patterns divisible by the generator can still escape detection.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "foundation": {
      "title": "Reason about CRC detection",
      "idea": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. A receiver divides the complete received codeword by the agreed generator. A zero remainder means the frame passes this check; some error patterns divisible by the generator can still escape detection.",
      "terms": [
        "Redundancy: Extra check bits added to data so a receiver can test it.",
        "Parity: A one-bit check that constrains the even or odd count of ones.",
        "Syndrome: The pattern of failed Hamming checks used to identify an error position."
      ],
      "example": "If the generator polynomial is x^3 + x + 1, a burst error shorter than its degree is guaranteed detectable; longer patterns have detection guarantees that depend on the generator."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Reason about CRC detection · Explore: A received codeword produces a nonzero CRC remainder. What should the receiver do? Which step should the host or router take next?",
        "options": [
          "Recompute the parity or polynomial checks",
          "Arrange the data and check bits",
          "Detect the error or locate a correctable bit"
        ],
        "answer": 0,
        "explanation": "Recompute the parity or polynomial checks. Recompute its check values from the received bits."
      },
      {
        "type": "match",
        "prompt": "Reason about CRC detection · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Parity",
            "A one-bit check that constrains the even or odd count of ones."
          ],
          [
            "Syndrome",
            "The pattern of failed Hamming checks used to identify an error position."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Reason about CRC detection · Explore: put the actions in a valid working sequence.",
        "items": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "explanation": "Choose the check rule or code used by the sender. Recompute its check values from the received bits. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "choice",
        "prompt": "Reason about CRC detection · Explore: which statement is accurate for reason about crc detection?",
        "options": [
          "Treat the frame as corrupted and reject or request retransmission",
          "Assume the payload is correct",
          "Use the remainder as the destination port"
        ],
        "answer": 0,
        "explanation": "Treat the frame as corrupted and reject or request retransmission. A receiver divides the complete received codeword by the agreed generator. A zero remainder means the frame passes this check; some error patterns divisible by the generator can still escape detection."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "error",
      "mode": "crc-detect",
      "lecture": 11
    },
    "cnScene": [
      "Choose the check rule or code used by the sender.",
      "A receiver divides the complete received codeword by the agreed generator. A zero remainder means the frame passes this check; some error patterns divisible by the generator can still escape detection.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "sourceReferences": [
      {
        "start": 912.97,
        "end": 954.45,
        "text": " which is same as EX divided by GX because this is particularly this remainder is 0 which is same as this now here if this is interesting now if GX divides EX then receiver will say there is no error it is all about what kind of error you are getting and what kind of generator you are choosing it is the competition between who is to"
      },
      {
        "start": 2074.64,
        "end": 2110.98,
        "text": " Yes. So that's why ACDR the correct answers here. Okay. I hope you understood this question. Cool. Let's just solve this question. Consider the error function, which is this, then which of the following generator will be able to catch this error? If I use this generator, can it catch this error? I think yes, right? What about this? X power 11, can this catch this error? Catch this error means a remainder should be non zero. I think yes. It won't be able to divide."
      }
    ],
    "start": 34
  },
  {
    "id": 35,
    "lecture": 11,
    "title": "Reason about CRC detection · Apply",
    "concept": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. A receiver divides the complete received codeword by the agreed generator. A zero remainder means the frame passes this check; some error patterns divisible by the generator can still escape detection.",
    "teachingSteps": [
      "Apply: Interpret the result as clean, detected corruption or a correctable position.",
      "A receiver divides the complete received codeword by the agreed generator. A zero remainder means the frame passes this check; some error patterns divisible by the generator can still escape detection.",
      "Choose the check rule or code used by the sender."
    ],
    "foundation": {
      "title": "Reason about CRC detection",
      "idea": "Noise can change transmitted bits. Error-control codes add redundant bits so a receiver can detect some corruptions, locate a correctable error, or request a retransmission. A receiver divides the complete received codeword by the agreed generator. A zero remainder means the frame passes this check; some error patterns divisible by the generator can still escape detection.",
      "terms": [
        "Redundancy: Extra check bits added to data so a receiver can test it.",
        "Parity: A one-bit check that constrains the even or odd count of ones.",
        "Syndrome: The pattern of failed Hamming checks used to identify an error position."
      ],
      "example": "If the generator polynomial is x^3 + x + 1, a burst error shorter than its degree is guaranteed detectable; longer patterns have detection guarantees that depend on the generator."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Reason about CRC detection · Apply: A new case changes one condition: A received codeword produces a nonzero CRC remainder. What should the receiver do? Which conclusion still follows?",
        "options": [
          "Assume the payload is correct",
          "Treat the frame as corrupted and reject or request retransmission",
          "Use the remainder as the destination port"
        ],
        "answer": 1,
        "explanation": "Treat the frame as corrupted and reject or request retransmission. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "match",
        "prompt": "Reason about CRC detection · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Syndrome",
            "The pattern of failed Hamming checks used to identify an error position."
          ],
          [
            "Redundancy",
            "Extra check bits added to data so a receiver can test it."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Reason about CRC detection · Apply: put the actions in a valid working sequence.",
        "items": [
          "Arrange the data and check bits",
          "Recompute the parity or polynomial checks",
          "Detect the error or locate a correctable bit"
        ],
        "explanation": "Choose the check rule or code used by the sender. Recompute its check values from the received bits. Interpret the result as clean, detected corruption or a correctable position."
      },
      {
        "type": "choice",
        "prompt": "Reason about CRC detection · Apply: which statement is accurate for reason about crc detection?",
        "options": [
          "Treat the frame as corrupted and reject or request retransmission",
          "Assume the payload is correct",
          "Use the remainder as the destination port"
        ],
        "answer": 0,
        "explanation": "Treat the frame as corrupted and reject or request retransmission. A receiver divides the complete received codeword by the agreed generator. A zero remainder means the frame passes this check; some error patterns divisible by the generator can still escape detection."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "error",
      "mode": "crc-detect",
      "lecture": 11
    },
    "cnScene": [
      "Choose the check rule or code used by the sender.",
      "A receiver divides the complete received codeword by the agreed generator. A zero remainder means the frame passes this check; some error patterns divisible by the generator can still escape detection.",
      "Interpret the result as clean, detected corruption or a correctable position."
    ],
    "sourceReferences": [
      {
        "start": 912.97,
        "end": 954.45,
        "text": " which is same as EX divided by GX because this is particularly this remainder is 0 which is same as this now here if this is interesting now if GX divides EX then receiver will say there is no error it is all about what kind of error you are getting and what kind of generator you are choosing it is the competition between who is to"
      },
      {
        "start": 2074.64,
        "end": 2110.98,
        "text": " Yes. So that's why ACDR the correct answers here. Okay. I hope you understood this question. Cool. Let's just solve this question. Consider the error function, which is this, then which of the following generator will be able to catch this error? If I use this generator, can it catch this error? I think yes, right? What about this? X power 11, can this catch this error? Catch this error means a remainder should be non zero. I think yes. It won't be able to divide."
      }
    ],
    "start": 35
  },
  {
    "id": 36,
    "lecture": 12,
    "title": "Use checksums and compare delay · Discover",
    "concept": "A packet’s time through a network combines work at each hop. Transmission time depends on packet size and bandwidth; propagation depends on physical distance and signal speed; queues add variable waiting time. A checksum adds fixed-size words using one’s-complement arithmetic and complements the sum. The receiver includes the checksum in the same calculation to test for corruption.",
    "teachingSteps": [
      "Discover: Separate transmission, propagation, processing and queueing components.",
      "A checksum adds fixed-size words using one’s-complement arithmetic and complements the sum. The receiver includes the checksum in the same calculation to test for corruption.",
      "Calculate each component with consistent units."
    ],
    "foundation": {
      "title": "Use checksums and compare delay",
      "idea": "A packet’s time through a network combines work at each hop. Transmission time depends on packet size and bandwidth; propagation depends on physical distance and signal speed; queues add variable waiting time. A checksum adds fixed-size words using one’s-complement arithmetic and complements the sum. The receiver includes the checksum in the same calculation to test for corruption.",
      "terms": [
        "Transmission delay: Time to place all packet bits onto a link: packet bits divided by link rate.",
        "Propagation delay: Time for a signal to travel across a link: distance divided by propagation speed.",
        "Queueing delay: Time a packet waits behind earlier traffic before transmission."
      ],
      "example": "For 8-bit words, add the words with end-around carry, complement all bits, and transmit that value as the checksum."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Use checksums and compare delay · Discover: In one’s-complement checksum addition, what happens to a carry beyond the word width? Which networking rule determines the result?",
        "options": [
          "It wraps around and is added to the low-order bit",
          "It is discarded without a check",
          "It becomes a new packet header"
        ],
        "answer": 0,
        "explanation": "It wraps around and is added to the low-order bit. Separate transmission, propagation, processing and queueing components."
      },
      {
        "type": "match",
        "prompt": "Use checksums and compare delay · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Transmission delay",
            "Time to place all packet bits onto a link: packet bits divided by link rate."
          ],
          [
            "Propagation delay",
            "Time for a signal to travel across a link: distance divided by propagation speed."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Use checksums and compare delay · Discover: put the actions in a valid working sequence.",
        "items": [
          "Read packet size, link rate and path distance",
          "Calculate transmission and propagation time",
          "Add the per-hop delays and queueing assumptions"
        ],
        "explanation": "Separate transmission, propagation, processing and queueing components. Calculate each component with consistent units. Add the components across the hops described by the problem."
      },
      {
        "type": "choice",
        "prompt": "Use checksums and compare delay · Discover: which statement is accurate for use checksums and compare delay?",
        "options": [
          "It wraps around and is added to the low-order bit",
          "It is discarded without a check",
          "It becomes a new packet header"
        ],
        "answer": 0,
        "explanation": "It wraps around and is added to the low-order bit. A checksum adds fixed-size words using one’s-complement arithmetic and complements the sum. The receiver includes the checksum in the same calculation to test for corruption."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "delay",
      "mode": "checksum",
      "lecture": 12
    },
    "cnScene": [
      "Separate transmission, propagation, processing and queueing components.",
      "A checksum adds fixed-size words using one’s-complement arithmetic and complements the sum. The receiver includes the checksum in the same calculation to test for corruption.",
      "Add the components across the hops described by the problem."
    ],
    "sourceReferences": [
      {
        "start": 503.39,
        "end": 529.36,
        "text": " uh debuxer has taken the example of plus five and plus four i think right so let me just take the same example and then if you add that then you will be getting plus nine right now what we can do we can do this arithmetic in the ones complement uh ones complement representation basically this plus five will be 101 let's suppose i'm using five bits then it will be something like this plus four will be 00110"
      },
      {
        "start": 655.19,
        "end": 684.99,
        "text": " okay anyway like if you know it is beneficial for checksum because checksum computation is done in once complement do you remember the CRC mathematics it is done in it is it is done in modulo to arithmetic right modulo to arithmetic do you remember that okay now this is how once complement is working if you if you have plus five plus four then then that's how we do now suppose let me quickly take the example where it is let's suppose minus four"
      }
    ],
    "start": 36
  },
  {
    "id": 37,
    "lecture": 12,
    "title": "Use checksums and compare delay · Explore",
    "concept": "A packet’s time through a network combines work at each hop. Transmission time depends on packet size and bandwidth; propagation depends on physical distance and signal speed; queues add variable waiting time. A checksum adds fixed-size words using one’s-complement arithmetic and complements the sum. The receiver includes the checksum in the same calculation to test for corruption.",
    "teachingSteps": [
      "Explore: Calculate each component with consistent units.",
      "A checksum adds fixed-size words using one’s-complement arithmetic and complements the sum. The receiver includes the checksum in the same calculation to test for corruption.",
      "Add the components across the hops described by the problem."
    ],
    "foundation": {
      "title": "Use checksums and compare delay",
      "idea": "A packet’s time through a network combines work at each hop. Transmission time depends on packet size and bandwidth; propagation depends on physical distance and signal speed; queues add variable waiting time. A checksum adds fixed-size words using one’s-complement arithmetic and complements the sum. The receiver includes the checksum in the same calculation to test for corruption.",
      "terms": [
        "Transmission delay: Time to place all packet bits onto a link: packet bits divided by link rate.",
        "Propagation delay: Time for a signal to travel across a link: distance divided by propagation speed.",
        "Queueing delay: Time a packet waits behind earlier traffic before transmission."
      ],
      "example": "For 8-bit words, add the words with end-around carry, complement all bits, and transmit that value as the checksum."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Use checksums and compare delay · Explore: In one’s-complement checksum addition, what happens to a carry beyond the word width? Which step should the host or router take next?",
        "options": [
          "Read packet size, link rate and path distance",
          "Calculate transmission and propagation time",
          "Add the per-hop delays and queueing assumptions"
        ],
        "answer": 1,
        "explanation": "Calculate transmission and propagation time. Calculate each component with consistent units."
      },
      {
        "type": "match",
        "prompt": "Use checksums and compare delay · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Propagation delay",
            "Time for a signal to travel across a link: distance divided by propagation speed."
          ],
          [
            "Queueing delay",
            "Time a packet waits behind earlier traffic before transmission."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Use checksums and compare delay · Explore: put the actions in a valid working sequence.",
        "items": [
          "Read packet size, link rate and path distance",
          "Calculate transmission and propagation time",
          "Add the per-hop delays and queueing assumptions"
        ],
        "explanation": "Separate transmission, propagation, processing and queueing components. Calculate each component with consistent units. Add the components across the hops described by the problem."
      },
      {
        "type": "choice",
        "prompt": "Use checksums and compare delay · Explore: which statement is accurate for use checksums and compare delay?",
        "options": [
          "It wraps around and is added to the low-order bit",
          "It is discarded without a check",
          "It becomes a new packet header"
        ],
        "answer": 0,
        "explanation": "It wraps around and is added to the low-order bit. A checksum adds fixed-size words using one’s-complement arithmetic and complements the sum. The receiver includes the checksum in the same calculation to test for corruption."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "delay",
      "mode": "checksum",
      "lecture": 12
    },
    "cnScene": [
      "Separate transmission, propagation, processing and queueing components.",
      "A checksum adds fixed-size words using one’s-complement arithmetic and complements the sum. The receiver includes the checksum in the same calculation to test for corruption.",
      "Add the components across the hops described by the problem."
    ],
    "sourceReferences": [
      {
        "start": 503.39,
        "end": 529.36,
        "text": " uh debuxer has taken the example of plus five and plus four i think right so let me just take the same example and then if you add that then you will be getting plus nine right now what we can do we can do this arithmetic in the ones complement uh ones complement representation basically this plus five will be 101 let's suppose i'm using five bits then it will be something like this plus four will be 00110"
      },
      {
        "start": 655.19,
        "end": 684.99,
        "text": " okay anyway like if you know it is beneficial for checksum because checksum computation is done in once complement do you remember the CRC mathematics it is done in it is it is done in modulo to arithmetic right modulo to arithmetic do you remember that okay now this is how once complement is working if you if you have plus five plus four then then that's how we do now suppose let me quickly take the example where it is let's suppose minus four"
      }
    ],
    "start": 37
  },
  {
    "id": 38,
    "lecture": 12,
    "title": "Use checksums and compare delay · Apply",
    "concept": "A packet’s time through a network combines work at each hop. Transmission time depends on packet size and bandwidth; propagation depends on physical distance and signal speed; queues add variable waiting time. A checksum adds fixed-size words using one’s-complement arithmetic and complements the sum. The receiver includes the checksum in the same calculation to test for corruption.",
    "teachingSteps": [
      "Apply: Add the components across the hops described by the problem.",
      "A checksum adds fixed-size words using one’s-complement arithmetic and complements the sum. The receiver includes the checksum in the same calculation to test for corruption.",
      "Separate transmission, propagation, processing and queueing components."
    ],
    "foundation": {
      "title": "Use checksums and compare delay",
      "idea": "A packet’s time through a network combines work at each hop. Transmission time depends on packet size and bandwidth; propagation depends on physical distance and signal speed; queues add variable waiting time. A checksum adds fixed-size words using one’s-complement arithmetic and complements the sum. The receiver includes the checksum in the same calculation to test for corruption.",
      "terms": [
        "Transmission delay: Time to place all packet bits onto a link: packet bits divided by link rate.",
        "Propagation delay: Time for a signal to travel across a link: distance divided by propagation speed.",
        "Queueing delay: Time a packet waits behind earlier traffic before transmission."
      ],
      "example": "For 8-bit words, add the words with end-around carry, complement all bits, and transmit that value as the checksum."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Use checksums and compare delay · Apply: A new case changes one condition: In one’s-complement checksum addition, what happens to a carry beyond the word width? Which conclusion still follows?",
        "options": [
          "It is discarded without a check",
          "It becomes a new packet header",
          "It wraps around and is added to the low-order bit"
        ],
        "answer": 2,
        "explanation": "It wraps around and is added to the low-order bit. Add the components across the hops described by the problem."
      },
      {
        "type": "match",
        "prompt": "Use checksums and compare delay · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Queueing delay",
            "Time a packet waits behind earlier traffic before transmission."
          ],
          [
            "Transmission delay",
            "Time to place all packet bits onto a link: packet bits divided by link rate."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Use checksums and compare delay · Apply: put the actions in a valid working sequence.",
        "items": [
          "Read packet size, link rate and path distance",
          "Calculate transmission and propagation time",
          "Add the per-hop delays and queueing assumptions"
        ],
        "explanation": "Separate transmission, propagation, processing and queueing components. Calculate each component with consistent units. Add the components across the hops described by the problem."
      },
      {
        "type": "choice",
        "prompt": "Use checksums and compare delay · Apply: which statement is accurate for use checksums and compare delay?",
        "options": [
          "It wraps around and is added to the low-order bit",
          "It is discarded without a check",
          "It becomes a new packet header"
        ],
        "answer": 0,
        "explanation": "It wraps around and is added to the low-order bit. A checksum adds fixed-size words using one’s-complement arithmetic and complements the sum. The receiver includes the checksum in the same calculation to test for corruption."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "delay",
      "mode": "checksum",
      "lecture": 12
    },
    "cnScene": [
      "Separate transmission, propagation, processing and queueing components.",
      "A checksum adds fixed-size words using one’s-complement arithmetic and complements the sum. The receiver includes the checksum in the same calculation to test for corruption.",
      "Add the components across the hops described by the problem."
    ],
    "sourceReferences": [
      {
        "start": 503.39,
        "end": 529.36,
        "text": " uh debuxer has taken the example of plus five and plus four i think right so let me just take the same example and then if you add that then you will be getting plus nine right now what we can do we can do this arithmetic in the ones complement uh ones complement representation basically this plus five will be 101 let's suppose i'm using five bits then it will be something like this plus four will be 00110"
      },
      {
        "start": 655.19,
        "end": 684.99,
        "text": " okay anyway like if you know it is beneficial for checksum because checksum computation is done in once complement do you remember the CRC mathematics it is done in it is it is done in modulo to arithmetic right modulo to arithmetic do you remember that okay now this is how once complement is working if you if you have plus five plus four then then that's how we do now suppose let me quickly take the example where it is let's suppose minus four"
      }
    ],
    "start": 38
  },
  {
    "id": 39,
    "lecture": 13,
    "title": "Break network delay into parts · Discover",
    "concept": "A packet’s time through a network combines work at each hop. Transmission time depends on packet size and bandwidth; propagation depends on physical distance and signal speed; queues add variable waiting time. End-to-end packet delay can include processing, queueing, transmission and propagation. Transmission depends on packet bits divided by link rate; propagation depends on distance divided by signal speed.",
    "teachingSteps": [
      "Discover: Separate transmission, propagation, processing and queueing components.",
      "End-to-end packet delay can include processing, queueing, transmission and propagation. Transmission depends on packet bits divided by link rate; propagation depends on distance divided by signal speed.",
      "Calculate each component with consistent units."
    ],
    "foundation": {
      "title": "Break network delay into parts",
      "idea": "A packet’s time through a network combines work at each hop. Transmission time depends on packet size and bandwidth; propagation depends on physical distance and signal speed; queues add variable waiting time. End-to-end packet delay can include processing, queueing, transmission and propagation. Transmission depends on packet bits divided by link rate; propagation depends on distance divided by signal speed.",
      "terms": [
        "Transmission delay: Time to place all packet bits onto a link: packet bits divided by link rate.",
        "Propagation delay: Time for a signal to travel across a link: distance divided by propagation speed.",
        "Queueing delay: Time a packet waits behind earlier traffic before transmission."
      ],
      "example": "A 12,000-bit packet on a 6-Mbit/s link takes 2 ms to transmit, before propagation, queueing or processing are added."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Break network delay into parts · Discover: Which delay is packet length in bits divided by link bandwidth in bits per second? Which networking rule determines the result?",
        "options": [
          "Propagation delay",
          "Transmission delay",
          "Queueing delay"
        ],
        "answer": 1,
        "explanation": "Transmission delay. Separate transmission, propagation, processing and queueing components."
      },
      {
        "type": "match",
        "prompt": "Break network delay into parts · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Transmission delay",
            "Time to place all packet bits onto a link: packet bits divided by link rate."
          ],
          [
            "Propagation delay",
            "Time for a signal to travel across a link: distance divided by propagation speed."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Break network delay into parts · Discover: put the actions in a valid working sequence.",
        "items": [
          "Read packet size, link rate and path distance",
          "Calculate transmission and propagation time",
          "Add the per-hop delays and queueing assumptions"
        ],
        "explanation": "Separate transmission, propagation, processing and queueing components. Calculate each component with consistent units. Add the components across the hops described by the problem."
      },
      {
        "type": "choice",
        "prompt": "Break network delay into parts · Discover: which statement is accurate for break network delay into parts?",
        "options": [
          "Transmission delay",
          "Propagation delay",
          "Queueing delay"
        ],
        "answer": 0,
        "explanation": "Transmission delay. End-to-end packet delay can include processing, queueing, transmission and propagation. Transmission depends on packet bits divided by link rate; propagation depends on distance divided by signal speed."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "delay",
      "mode": "delay",
      "lecture": 13
    },
    "cnScene": [
      "Separate transmission, propagation, processing and queueing components.",
      "End-to-end packet delay can include processing, queueing, transmission and propagation. Transmission depends on packet bits divided by link rate; propagation depends on distance divided by signal speed.",
      "Add the components across the hops described by the problem."
    ],
    "sourceReferences": [
      {
        "start": 2485.3,
        "end": 2514.41,
        "text": " 1 millisecond right in terms of millisecond this is again 1 millisecond so both are coming out to be 11 milliseconds so let's now just solve this question how many packets you want to transmit how many in how many parts you are breaking your file into the thousand parts I mean as per the question right so the question is saying you're breaking the thousand parts and now we know that propagation delay is 1 millisecond transmission delay is also 1 millisecond"
      },
      {
        "start": 4440.4,
        "end": 4481.36,
        "text": " of each link latency of one-way latency means that the propagation time, propagation time of each link is given to be 22 milliseconds. No, I'm not assuming the processing delays here. Okay. So I'm not taking care of the processing delays. Let's just read out this question. Okay. A zoom host a sense 30 KV file to be, assume the file is divided into two packets P1 and P2 where the P1 has the length of 10 KV, which means there are two packets and the two packets are also"
      }
    ],
    "start": 39
  },
  {
    "id": 40,
    "lecture": 13,
    "title": "Break network delay into parts · Explore",
    "concept": "A packet’s time through a network combines work at each hop. Transmission time depends on packet size and bandwidth; propagation depends on physical distance and signal speed; queues add variable waiting time. End-to-end packet delay can include processing, queueing, transmission and propagation. Transmission depends on packet bits divided by link rate; propagation depends on distance divided by signal speed.",
    "teachingSteps": [
      "Explore: Calculate each component with consistent units.",
      "End-to-end packet delay can include processing, queueing, transmission and propagation. Transmission depends on packet bits divided by link rate; propagation depends on distance divided by signal speed.",
      "Add the components across the hops described by the problem."
    ],
    "foundation": {
      "title": "Break network delay into parts",
      "idea": "A packet’s time through a network combines work at each hop. Transmission time depends on packet size and bandwidth; propagation depends on physical distance and signal speed; queues add variable waiting time. End-to-end packet delay can include processing, queueing, transmission and propagation. Transmission depends on packet bits divided by link rate; propagation depends on distance divided by signal speed.",
      "terms": [
        "Transmission delay: Time to place all packet bits onto a link: packet bits divided by link rate.",
        "Propagation delay: Time for a signal to travel across a link: distance divided by propagation speed.",
        "Queueing delay: Time a packet waits behind earlier traffic before transmission."
      ],
      "example": "A 12,000-bit packet on a 6-Mbit/s link takes 2 ms to transmit, before propagation, queueing or processing are added."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Break network delay into parts · Explore: Which delay is packet length in bits divided by link bandwidth in bits per second? Which step should the host or router take next?",
        "options": [
          "Read packet size, link rate and path distance",
          "Add the per-hop delays and queueing assumptions",
          "Calculate transmission and propagation time"
        ],
        "answer": 2,
        "explanation": "Calculate transmission and propagation time. Calculate each component with consistent units."
      },
      {
        "type": "match",
        "prompt": "Break network delay into parts · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Propagation delay",
            "Time for a signal to travel across a link: distance divided by propagation speed."
          ],
          [
            "Queueing delay",
            "Time a packet waits behind earlier traffic before transmission."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Break network delay into parts · Explore: put the actions in a valid working sequence.",
        "items": [
          "Read packet size, link rate and path distance",
          "Calculate transmission and propagation time",
          "Add the per-hop delays and queueing assumptions"
        ],
        "explanation": "Separate transmission, propagation, processing and queueing components. Calculate each component with consistent units. Add the components across the hops described by the problem."
      },
      {
        "type": "choice",
        "prompt": "Break network delay into parts · Explore: which statement is accurate for break network delay into parts?",
        "options": [
          "Transmission delay",
          "Propagation delay",
          "Queueing delay"
        ],
        "answer": 0,
        "explanation": "Transmission delay. End-to-end packet delay can include processing, queueing, transmission and propagation. Transmission depends on packet bits divided by link rate; propagation depends on distance divided by signal speed."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "delay",
      "mode": "delay",
      "lecture": 13
    },
    "cnScene": [
      "Separate transmission, propagation, processing and queueing components.",
      "End-to-end packet delay can include processing, queueing, transmission and propagation. Transmission depends on packet bits divided by link rate; propagation depends on distance divided by signal speed.",
      "Add the components across the hops described by the problem."
    ],
    "sourceReferences": [
      {
        "start": 2485.3,
        "end": 2514.41,
        "text": " 1 millisecond right in terms of millisecond this is again 1 millisecond so both are coming out to be 11 milliseconds so let's now just solve this question how many packets you want to transmit how many in how many parts you are breaking your file into the thousand parts I mean as per the question right so the question is saying you're breaking the thousand parts and now we know that propagation delay is 1 millisecond transmission delay is also 1 millisecond"
      },
      {
        "start": 4440.4,
        "end": 4481.36,
        "text": " of each link latency of one-way latency means that the propagation time, propagation time of each link is given to be 22 milliseconds. No, I'm not assuming the processing delays here. Okay. So I'm not taking care of the processing delays. Let's just read out this question. Okay. A zoom host a sense 30 KV file to be, assume the file is divided into two packets P1 and P2 where the P1 has the length of 10 KV, which means there are two packets and the two packets are also"
      }
    ],
    "start": 40
  },
  {
    "id": 41,
    "lecture": 13,
    "title": "Break network delay into parts · Apply",
    "concept": "A packet’s time through a network combines work at each hop. Transmission time depends on packet size and bandwidth; propagation depends on physical distance and signal speed; queues add variable waiting time. End-to-end packet delay can include processing, queueing, transmission and propagation. Transmission depends on packet bits divided by link rate; propagation depends on distance divided by signal speed.",
    "teachingSteps": [
      "Apply: Add the components across the hops described by the problem.",
      "End-to-end packet delay can include processing, queueing, transmission and propagation. Transmission depends on packet bits divided by link rate; propagation depends on distance divided by signal speed.",
      "Separate transmission, propagation, processing and queueing components."
    ],
    "foundation": {
      "title": "Break network delay into parts",
      "idea": "A packet’s time through a network combines work at each hop. Transmission time depends on packet size and bandwidth; propagation depends on physical distance and signal speed; queues add variable waiting time. End-to-end packet delay can include processing, queueing, transmission and propagation. Transmission depends on packet bits divided by link rate; propagation depends on distance divided by signal speed.",
      "terms": [
        "Transmission delay: Time to place all packet bits onto a link: packet bits divided by link rate.",
        "Propagation delay: Time for a signal to travel across a link: distance divided by propagation speed.",
        "Queueing delay: Time a packet waits behind earlier traffic before transmission."
      ],
      "example": "A 12,000-bit packet on a 6-Mbit/s link takes 2 ms to transmit, before propagation, queueing or processing are added."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Break network delay into parts · Apply: A new case changes one condition: Which delay is packet length in bits divided by link bandwidth in bits per second? Which conclusion still follows?",
        "options": [
          "Transmission delay",
          "Propagation delay",
          "Queueing delay"
        ],
        "answer": 0,
        "explanation": "Transmission delay. Add the components across the hops described by the problem."
      },
      {
        "type": "match",
        "prompt": "Break network delay into parts · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Queueing delay",
            "Time a packet waits behind earlier traffic before transmission."
          ],
          [
            "Transmission delay",
            "Time to place all packet bits onto a link: packet bits divided by link rate."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Break network delay into parts · Apply: put the actions in a valid working sequence.",
        "items": [
          "Read packet size, link rate and path distance",
          "Calculate transmission and propagation time",
          "Add the per-hop delays and queueing assumptions"
        ],
        "explanation": "Separate transmission, propagation, processing and queueing components. Calculate each component with consistent units. Add the components across the hops described by the problem."
      },
      {
        "type": "choice",
        "prompt": "Break network delay into parts · Apply: which statement is accurate for break network delay into parts?",
        "options": [
          "Transmission delay",
          "Propagation delay",
          "Queueing delay"
        ],
        "answer": 0,
        "explanation": "Transmission delay. End-to-end packet delay can include processing, queueing, transmission and propagation. Transmission depends on packet bits divided by link rate; propagation depends on distance divided by signal speed."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "delay",
      "mode": "delay",
      "lecture": 13
    },
    "cnScene": [
      "Separate transmission, propagation, processing and queueing components.",
      "End-to-end packet delay can include processing, queueing, transmission and propagation. Transmission depends on packet bits divided by link rate; propagation depends on distance divided by signal speed.",
      "Add the components across the hops described by the problem."
    ],
    "sourceReferences": [
      {
        "start": 2485.3,
        "end": 2514.41,
        "text": " 1 millisecond right in terms of millisecond this is again 1 millisecond so both are coming out to be 11 milliseconds so let's now just solve this question how many packets you want to transmit how many in how many parts you are breaking your file into the thousand parts I mean as per the question right so the question is saying you're breaking the thousand parts and now we know that propagation delay is 1 millisecond transmission delay is also 1 millisecond"
      },
      {
        "start": 4440.4,
        "end": 4481.36,
        "text": " of each link latency of one-way latency means that the propagation time, propagation time of each link is given to be 22 milliseconds. No, I'm not assuming the processing delays here. Okay. So I'm not taking care of the processing delays. Let's just read out this question. Okay. A zoom host a sense 30 KV file to be, assume the file is divided into two packets P1 and P2 where the P1 has the length of 10 KV, which means there are two packets and the two packets are also"
      }
    ],
    "start": 41
  },
  {
    "id": 42,
    "lecture": 14,
    "title": "Analyze packet-switching and queue delays · Discover",
    "concept": "A link moves frames between directly connected devices. Switches and shared media determine how local traffic uses a link; packet switching shares capacity while circuit switching reserves it. Statistical multiplexing lets bursty flows share a link. When combined arrivals briefly exceed link capacity, packets queue; persistent overload fills the buffer and causes loss.",
    "teachingSteps": [
      "Discover: Identify the link and the unit that travels across it.",
      "Statistical multiplexing lets bursty flows share a link. When combined arrivals briefly exceed link capacity, packets queue; persistent overload fills the buffer and causes loss.",
      "Determine whether capacity is reserved or shared and whether frames queue."
    ],
    "foundation": {
      "title": "Analyze packet-switching and queue delays",
      "idea": "A link moves frames between directly connected devices. Switches and shared media determine how local traffic uses a link; packet switching shares capacity while circuit switching reserves it. Statistical multiplexing lets bursty flows share a link. When combined arrivals briefly exceed link capacity, packets queue; persistent overload fills the buffer and causes loss.",
      "terms": [
        "Link: A communication path between neighboring network interfaces.",
        "Switch: A device that forwards frames between LAN ports using link-layer addresses.",
        "Queue: A waiting area for packets when arrivals temporarily exceed link service."
      ],
      "example": "A 10-Mbit/s output can absorb short bursts above 10 Mbit/s while its queue has room, but it cannot sustainably deliver 12 Mbit/s."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Analyze packet-switching and queue delays · Discover: A router receives packets faster than its output link can transmit them for a long time. What eventually happens? Which networking rule determines the result?",
        "options": [
          "The physical bandwidth rises automatically",
          "Every packet bypasses the queue",
          "The queue fills and packets are dropped"
        ],
        "answer": 2,
        "explanation": "The queue fills and packets are dropped. Identify the link and the unit that travels across it."
      },
      {
        "type": "match",
        "prompt": "Analyze packet-switching and queue delays · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Link",
            "A communication path between neighboring network interfaces."
          ],
          [
            "Switch",
            "A device that forwards frames between LAN ports using link-layer addresses."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Analyze packet-switching and queue delays · Discover: put the actions in a valid working sequence.",
        "items": [
          "Identify the path and its available capacity",
          "Determine how multiple senders share it",
          "Predict the queue or forwarding outcome"
        ],
        "explanation": "Identify the link and the unit that travels across it. Determine whether capacity is reserved or shared and whether frames queue. Predict forwarding, delay or loss from the link’s current load."
      },
      {
        "type": "choice",
        "prompt": "Analyze packet-switching and queue delays · Discover: which statement is accurate for analyze packet-switching and queue delays?",
        "options": [
          "The queue fills and packets are dropped",
          "The physical bandwidth rises automatically",
          "Every packet bypasses the queue"
        ],
        "answer": 0,
        "explanation": "The queue fills and packets are dropped. Statistical multiplexing lets bursty flows share a link. When combined arrivals briefly exceed link capacity, packets queue; persistent overload fills the buffer and causes loss."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "switching",
      "mode": "queue",
      "lecture": 14
    },
    "cnScene": [
      "Identify the link and the unit that travels across it.",
      "Statistical multiplexing lets bursty flows share a link. When combined arrivals briefly exceed link capacity, packets queue; persistent overload fills the buffer and causes loss.",
      "Predict forwarding, delay or loss from the link’s current load."
    ],
    "sourceReferences": [
      {
        "start": 528.64,
        "end": 560.85,
        "text": " So let me know if this particular equation is okay to everyone or not. This is x plus 3 divided by 1. Is this particular equation okay to everyone? If you want to just count the total time taken by all the packets here, right? This is, this is easy one, right? No, they have not given the queuing delay. So by default, the queuing delay processing delay, every other delay, we will be taking zero. Okay. Suppose the links are identical. If links are identical, there is no possibility you can have t"
      },
      {
        "start": 561.1,
        "end": 586.42,
        "text": " if all the links are identical if all the packets are also identical okay I mean obviously it should not be the case that okay one packet is large or small I'm assuming that okay all the links are identical here if all the links are identical all the packets are identical then there is no possibility you can ever have the queuing delay okay anyway so if they have not given let's not worry about it so this is the total time now what they're saying"
      }
    ],
    "start": 42
  },
  {
    "id": 43,
    "lecture": 14,
    "title": "Analyze packet-switching and queue delays · Explore",
    "concept": "A link moves frames between directly connected devices. Switches and shared media determine how local traffic uses a link; packet switching shares capacity while circuit switching reserves it. Statistical multiplexing lets bursty flows share a link. When combined arrivals briefly exceed link capacity, packets queue; persistent overload fills the buffer and causes loss.",
    "teachingSteps": [
      "Explore: Determine whether capacity is reserved or shared and whether frames queue.",
      "Statistical multiplexing lets bursty flows share a link. When combined arrivals briefly exceed link capacity, packets queue; persistent overload fills the buffer and causes loss.",
      "Predict forwarding, delay or loss from the link’s current load."
    ],
    "foundation": {
      "title": "Analyze packet-switching and queue delays",
      "idea": "A link moves frames between directly connected devices. Switches and shared media determine how local traffic uses a link; packet switching shares capacity while circuit switching reserves it. Statistical multiplexing lets bursty flows share a link. When combined arrivals briefly exceed link capacity, packets queue; persistent overload fills the buffer and causes loss.",
      "terms": [
        "Link: A communication path between neighboring network interfaces.",
        "Switch: A device that forwards frames between LAN ports using link-layer addresses.",
        "Queue: A waiting area for packets when arrivals temporarily exceed link service."
      ],
      "example": "A 10-Mbit/s output can absorb short bursts above 10 Mbit/s while its queue has room, but it cannot sustainably deliver 12 Mbit/s."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Analyze packet-switching and queue delays · Explore: A router receives packets faster than its output link can transmit them for a long time. What eventually happens? Which step should the host or router take next?",
        "options": [
          "Determine how multiple senders share it",
          "Identify the path and its available capacity",
          "Predict the queue or forwarding outcome"
        ],
        "answer": 0,
        "explanation": "Determine how multiple senders share it. Determine whether capacity is reserved or shared and whether frames queue."
      },
      {
        "type": "match",
        "prompt": "Analyze packet-switching and queue delays · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Switch",
            "A device that forwards frames between LAN ports using link-layer addresses."
          ],
          [
            "Queue",
            "A waiting area for packets when arrivals temporarily exceed link service."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Analyze packet-switching and queue delays · Explore: put the actions in a valid working sequence.",
        "items": [
          "Identify the path and its available capacity",
          "Determine how multiple senders share it",
          "Predict the queue or forwarding outcome"
        ],
        "explanation": "Identify the link and the unit that travels across it. Determine whether capacity is reserved or shared and whether frames queue. Predict forwarding, delay or loss from the link’s current load."
      },
      {
        "type": "choice",
        "prompt": "Analyze packet-switching and queue delays · Explore: which statement is accurate for analyze packet-switching and queue delays?",
        "options": [
          "The queue fills and packets are dropped",
          "The physical bandwidth rises automatically",
          "Every packet bypasses the queue"
        ],
        "answer": 0,
        "explanation": "The queue fills and packets are dropped. Statistical multiplexing lets bursty flows share a link. When combined arrivals briefly exceed link capacity, packets queue; persistent overload fills the buffer and causes loss."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "switching",
      "mode": "queue",
      "lecture": 14
    },
    "cnScene": [
      "Identify the link and the unit that travels across it.",
      "Statistical multiplexing lets bursty flows share a link. When combined arrivals briefly exceed link capacity, packets queue; persistent overload fills the buffer and causes loss.",
      "Predict forwarding, delay or loss from the link’s current load."
    ],
    "sourceReferences": [
      {
        "start": 528.64,
        "end": 560.85,
        "text": " So let me know if this particular equation is okay to everyone or not. This is x plus 3 divided by 1. Is this particular equation okay to everyone? If you want to just count the total time taken by all the packets here, right? This is, this is easy one, right? No, they have not given the queuing delay. So by default, the queuing delay processing delay, every other delay, we will be taking zero. Okay. Suppose the links are identical. If links are identical, there is no possibility you can have t"
      },
      {
        "start": 561.1,
        "end": 586.42,
        "text": " if all the links are identical if all the packets are also identical okay I mean obviously it should not be the case that okay one packet is large or small I'm assuming that okay all the links are identical here if all the links are identical all the packets are identical then there is no possibility you can ever have the queuing delay okay anyway so if they have not given let's not worry about it so this is the total time now what they're saying"
      }
    ],
    "start": 43
  },
  {
    "id": 44,
    "lecture": 14,
    "title": "Analyze packet-switching and queue delays · Apply",
    "concept": "A link moves frames between directly connected devices. Switches and shared media determine how local traffic uses a link; packet switching shares capacity while circuit switching reserves it. Statistical multiplexing lets bursty flows share a link. When combined arrivals briefly exceed link capacity, packets queue; persistent overload fills the buffer and causes loss.",
    "teachingSteps": [
      "Apply: Predict forwarding, delay or loss from the link’s current load.",
      "Statistical multiplexing lets bursty flows share a link. When combined arrivals briefly exceed link capacity, packets queue; persistent overload fills the buffer and causes loss.",
      "Identify the link and the unit that travels across it."
    ],
    "foundation": {
      "title": "Analyze packet-switching and queue delays",
      "idea": "A link moves frames between directly connected devices. Switches and shared media determine how local traffic uses a link; packet switching shares capacity while circuit switching reserves it. Statistical multiplexing lets bursty flows share a link. When combined arrivals briefly exceed link capacity, packets queue; persistent overload fills the buffer and causes loss.",
      "terms": [
        "Link: A communication path between neighboring network interfaces.",
        "Switch: A device that forwards frames between LAN ports using link-layer addresses.",
        "Queue: A waiting area for packets when arrivals temporarily exceed link service."
      ],
      "example": "A 10-Mbit/s output can absorb short bursts above 10 Mbit/s while its queue has room, but it cannot sustainably deliver 12 Mbit/s."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Analyze packet-switching and queue delays · Apply: A new case changes one condition: A router receives packets faster than its output link can transmit them for a long time. What eventually happens? Which conclusion still follows?",
        "options": [
          "The physical bandwidth rises automatically",
          "The queue fills and packets are dropped",
          "Every packet bypasses the queue"
        ],
        "answer": 1,
        "explanation": "The queue fills and packets are dropped. Predict forwarding, delay or loss from the link’s current load."
      },
      {
        "type": "match",
        "prompt": "Analyze packet-switching and queue delays · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Queue",
            "A waiting area for packets when arrivals temporarily exceed link service."
          ],
          [
            "Link",
            "A communication path between neighboring network interfaces."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Analyze packet-switching and queue delays · Apply: put the actions in a valid working sequence.",
        "items": [
          "Identify the path and its available capacity",
          "Determine how multiple senders share it",
          "Predict the queue or forwarding outcome"
        ],
        "explanation": "Identify the link and the unit that travels across it. Determine whether capacity is reserved or shared and whether frames queue. Predict forwarding, delay or loss from the link’s current load."
      },
      {
        "type": "choice",
        "prompt": "Analyze packet-switching and queue delays · Apply: which statement is accurate for analyze packet-switching and queue delays?",
        "options": [
          "The queue fills and packets are dropped",
          "The physical bandwidth rises automatically",
          "Every packet bypasses the queue"
        ],
        "answer": 0,
        "explanation": "The queue fills and packets are dropped. Statistical multiplexing lets bursty flows share a link. When combined arrivals briefly exceed link capacity, packets queue; persistent overload fills the buffer and causes loss."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "switching",
      "mode": "queue",
      "lecture": 14
    },
    "cnScene": [
      "Identify the link and the unit that travels across it.",
      "Statistical multiplexing lets bursty flows share a link. When combined arrivals briefly exceed link capacity, packets queue; persistent overload fills the buffer and causes loss.",
      "Predict forwarding, delay or loss from the link’s current load."
    ],
    "sourceReferences": [
      {
        "start": 528.64,
        "end": 560.85,
        "text": " So let me know if this particular equation is okay to everyone or not. This is x plus 3 divided by 1. Is this particular equation okay to everyone? If you want to just count the total time taken by all the packets here, right? This is, this is easy one, right? No, they have not given the queuing delay. So by default, the queuing delay processing delay, every other delay, we will be taking zero. Okay. Suppose the links are identical. If links are identical, there is no possibility you can have t"
      },
      {
        "start": 561.1,
        "end": 586.42,
        "text": " if all the links are identical if all the packets are also identical okay I mean obviously it should not be the case that okay one packet is large or small I'm assuming that okay all the links are identical here if all the links are identical all the packets are identical then there is no possibility you can ever have the queuing delay okay anyway so if they have not given let's not worry about it so this is the total time now what they're saying"
      }
    ],
    "start": 44
  },
  {
    "id": 45,
    "lecture": 15,
    "title": "Trace Stop-and-Wait ARQ · Discover",
    "concept": "A reliable link protocol uses acknowledgments, timers and sequence information to recover when data or its acknowledgment is lost. The protocol must also avoid delivering a retransmitted frame twice. Stop-and-Wait allows one unacknowledged frame at a time. The sender starts a timer, retransmits after timeout, and uses sequence numbers so duplicate arrivals can be recognized.",
    "teachingSteps": [
      "Discover: Send a frame and start or update the sender’s timer.",
      "Stop-and-Wait allows one unacknowledged frame at a time. The sender starts a timer, retransmits after timeout, and uses sequence numbers so duplicate arrivals can be recognized.",
      "Process the acknowledgment, loss or timeout event."
    ],
    "foundation": {
      "title": "Trace Stop-and-Wait ARQ",
      "idea": "A reliable link protocol uses acknowledgments, timers and sequence information to recover when data or its acknowledgment is lost. The protocol must also avoid delivering a retransmitted frame twice. Stop-and-Wait allows one unacknowledged frame at a time. The sender starts a timer, retransmits after timeout, and uses sequence numbers so duplicate arrivals can be recognized.",
      "terms": [
        "Acknowledgment: A control message that confirms receipt of data.",
        "Timeout: A timer limit after which an unacknowledged frame may be retransmitted.",
        "Sequence number: A small identifier used to distinguish new data from a duplicate."
      ],
      "example": "If frame 0 is received but its ACK is lost, the sender retransmits frame 0; the receiver sees the sequence number and avoids delivering the data twice."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Trace Stop-and-Wait ARQ · Discover: The receiver got a frame, but its ACK was lost. What does the sender do when its timer expires? Which networking rule determines the result?",
        "options": [
          "Retransmit the outstanding frame",
          "Send all remaining frames without waiting",
          "Change the destination IP address"
        ],
        "answer": 0,
        "explanation": "Retransmit the outstanding frame. Send a frame and start or update the sender’s timer."
      },
      {
        "type": "match",
        "prompt": "Trace Stop-and-Wait ARQ · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Acknowledgment",
            "A control message that confirms receipt of data."
          ],
          [
            "Timeout",
            "A timer limit after which an unacknowledged frame may be retransmitted."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Trace Stop-and-Wait ARQ · Discover: put the actions in a valid working sequence.",
        "items": [
          "Send one numbered frame",
          "Wait for its acknowledgment or timeout",
          "Retransmit if needed and recognize duplicate arrivals"
        ],
        "explanation": "Send a frame and start or update the sender’s timer. Process the acknowledgment, loss or timeout event. Advance the sequence state or retransmit without duplicating delivery."
      },
      {
        "type": "choice",
        "prompt": "Trace Stop-and-Wait ARQ · Discover: which statement is accurate for trace stop-and-wait arq?",
        "options": [
          "Retransmit the outstanding frame",
          "Send all remaining frames without waiting",
          "Change the destination IP address"
        ],
        "answer": 0,
        "explanation": "Retransmit the outstanding frame. Stop-and-Wait allows one unacknowledged frame at a time. The sender starts a timer, retransmits after timeout, and uses sequence numbers so duplicate arrivals can be recognized."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "stopwait",
      "mode": "stopwait",
      "lecture": 15
    },
    "cnScene": [
      "Send a frame and start or update the sender’s timer.",
      "Stop-and-Wait allows one unacknowledged frame at a time. The sender starts a timer, retransmits after timeout, and uses sequence numbers so duplicate arrivals can be recognized.",
      "Advance the sequence state or retransmit without duplicating delivery."
    ],
    "sourceReferences": [
      {
        "start": 4.43,
        "end": 33.33,
        "text": " Hi everyone. So let's get started with today's lecture. Okay. So today we are going to see a stop and wait protocol. Good. So what we were saying in flow control is like this. So we were starting with the flow control method. So we were saying that the very simple idea and the flow control could be that we will be having the timeout and also we will be having something called as acknowledgement. Right. So timeout and acknowledgement are the backbone of this flow control. I mean, this is the ver"
      },
      {
        "start": 414.02,
        "end": 447.73,
        "text": " so we have said that stop and wait is following one thing which is it is saying that so we have started with the stop and wait and we said that it is basically saying we will be sending one frame at a time right which means that we will be okay this is the transmission time and then after that i'm just writing one line okay which means it's a propagation so here the i'm assuming that there is i mean negligible transmission here so i'm directly propagating so this is data"
      }
    ],
    "start": 45
  },
  {
    "id": 46,
    "lecture": 15,
    "title": "Trace Stop-and-Wait ARQ · Explore",
    "concept": "A reliable link protocol uses acknowledgments, timers and sequence information to recover when data or its acknowledgment is lost. The protocol must also avoid delivering a retransmitted frame twice. Stop-and-Wait allows one unacknowledged frame at a time. The sender starts a timer, retransmits after timeout, and uses sequence numbers so duplicate arrivals can be recognized.",
    "teachingSteps": [
      "Explore: Process the acknowledgment, loss or timeout event.",
      "Stop-and-Wait allows one unacknowledged frame at a time. The sender starts a timer, retransmits after timeout, and uses sequence numbers so duplicate arrivals can be recognized.",
      "Advance the sequence state or retransmit without duplicating delivery."
    ],
    "foundation": {
      "title": "Trace Stop-and-Wait ARQ",
      "idea": "A reliable link protocol uses acknowledgments, timers and sequence information to recover when data or its acknowledgment is lost. The protocol must also avoid delivering a retransmitted frame twice. Stop-and-Wait allows one unacknowledged frame at a time. The sender starts a timer, retransmits after timeout, and uses sequence numbers so duplicate arrivals can be recognized.",
      "terms": [
        "Acknowledgment: A control message that confirms receipt of data.",
        "Timeout: A timer limit after which an unacknowledged frame may be retransmitted.",
        "Sequence number: A small identifier used to distinguish new data from a duplicate."
      ],
      "example": "If frame 0 is received but its ACK is lost, the sender retransmits frame 0; the receiver sees the sequence number and avoids delivering the data twice."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Trace Stop-and-Wait ARQ · Explore: The receiver got a frame, but its ACK was lost. What does the sender do when its timer expires? Which step should the host or router take next?",
        "options": [
          "Send one numbered frame",
          "Wait for its acknowledgment or timeout",
          "Retransmit if needed and recognize duplicate arrivals"
        ],
        "answer": 1,
        "explanation": "Wait for its acknowledgment or timeout. Process the acknowledgment, loss or timeout event."
      },
      {
        "type": "match",
        "prompt": "Trace Stop-and-Wait ARQ · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Timeout",
            "A timer limit after which an unacknowledged frame may be retransmitted."
          ],
          [
            "Sequence number",
            "A small identifier used to distinguish new data from a duplicate."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Trace Stop-and-Wait ARQ · Explore: put the actions in a valid working sequence.",
        "items": [
          "Send one numbered frame",
          "Wait for its acknowledgment or timeout",
          "Retransmit if needed and recognize duplicate arrivals"
        ],
        "explanation": "Send a frame and start or update the sender’s timer. Process the acknowledgment, loss or timeout event. Advance the sequence state or retransmit without duplicating delivery."
      },
      {
        "type": "choice",
        "prompt": "Trace Stop-and-Wait ARQ · Explore: which statement is accurate for trace stop-and-wait arq?",
        "options": [
          "Retransmit the outstanding frame",
          "Send all remaining frames without waiting",
          "Change the destination IP address"
        ],
        "answer": 0,
        "explanation": "Retransmit the outstanding frame. Stop-and-Wait allows one unacknowledged frame at a time. The sender starts a timer, retransmits after timeout, and uses sequence numbers so duplicate arrivals can be recognized."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "stopwait",
      "mode": "stopwait",
      "lecture": 15
    },
    "cnScene": [
      "Send a frame and start or update the sender’s timer.",
      "Stop-and-Wait allows one unacknowledged frame at a time. The sender starts a timer, retransmits after timeout, and uses sequence numbers so duplicate arrivals can be recognized.",
      "Advance the sequence state or retransmit without duplicating delivery."
    ],
    "sourceReferences": [
      {
        "start": 4.43,
        "end": 33.33,
        "text": " Hi everyone. So let's get started with today's lecture. Okay. So today we are going to see a stop and wait protocol. Good. So what we were saying in flow control is like this. So we were starting with the flow control method. So we were saying that the very simple idea and the flow control could be that we will be having the timeout and also we will be having something called as acknowledgement. Right. So timeout and acknowledgement are the backbone of this flow control. I mean, this is the ver"
      },
      {
        "start": 414.02,
        "end": 447.73,
        "text": " so we have said that stop and wait is following one thing which is it is saying that so we have started with the stop and wait and we said that it is basically saying we will be sending one frame at a time right which means that we will be okay this is the transmission time and then after that i'm just writing one line okay which means it's a propagation so here the i'm assuming that there is i mean negligible transmission here so i'm directly propagating so this is data"
      }
    ],
    "start": 46
  },
  {
    "id": 47,
    "lecture": 15,
    "title": "Trace Stop-and-Wait ARQ · Apply",
    "concept": "A reliable link protocol uses acknowledgments, timers and sequence information to recover when data or its acknowledgment is lost. The protocol must also avoid delivering a retransmitted frame twice. Stop-and-Wait allows one unacknowledged frame at a time. The sender starts a timer, retransmits after timeout, and uses sequence numbers so duplicate arrivals can be recognized.",
    "teachingSteps": [
      "Apply: Advance the sequence state or retransmit without duplicating delivery.",
      "Stop-and-Wait allows one unacknowledged frame at a time. The sender starts a timer, retransmits after timeout, and uses sequence numbers so duplicate arrivals can be recognized.",
      "Send a frame and start or update the sender’s timer."
    ],
    "foundation": {
      "title": "Trace Stop-and-Wait ARQ",
      "idea": "A reliable link protocol uses acknowledgments, timers and sequence information to recover when data or its acknowledgment is lost. The protocol must also avoid delivering a retransmitted frame twice. Stop-and-Wait allows one unacknowledged frame at a time. The sender starts a timer, retransmits after timeout, and uses sequence numbers so duplicate arrivals can be recognized.",
      "terms": [
        "Acknowledgment: A control message that confirms receipt of data.",
        "Timeout: A timer limit after which an unacknowledged frame may be retransmitted.",
        "Sequence number: A small identifier used to distinguish new data from a duplicate."
      ],
      "example": "If frame 0 is received but its ACK is lost, the sender retransmits frame 0; the receiver sees the sequence number and avoids delivering the data twice."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Trace Stop-and-Wait ARQ · Apply: A new case changes one condition: The receiver got a frame, but its ACK was lost. What does the sender do when its timer expires? Which conclusion still follows?",
        "options": [
          "Send all remaining frames without waiting",
          "Change the destination IP address",
          "Retransmit the outstanding frame"
        ],
        "answer": 2,
        "explanation": "Retransmit the outstanding frame. Advance the sequence state or retransmit without duplicating delivery."
      },
      {
        "type": "match",
        "prompt": "Trace Stop-and-Wait ARQ · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Sequence number",
            "A small identifier used to distinguish new data from a duplicate."
          ],
          [
            "Acknowledgment",
            "A control message that confirms receipt of data."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Trace Stop-and-Wait ARQ · Apply: put the actions in a valid working sequence.",
        "items": [
          "Send one numbered frame",
          "Wait for its acknowledgment or timeout",
          "Retransmit if needed and recognize duplicate arrivals"
        ],
        "explanation": "Send a frame and start or update the sender’s timer. Process the acknowledgment, loss or timeout event. Advance the sequence state or retransmit without duplicating delivery."
      },
      {
        "type": "choice",
        "prompt": "Trace Stop-and-Wait ARQ · Apply: which statement is accurate for trace stop-and-wait arq?",
        "options": [
          "Retransmit the outstanding frame",
          "Send all remaining frames without waiting",
          "Change the destination IP address"
        ],
        "answer": 0,
        "explanation": "Retransmit the outstanding frame. Stop-and-Wait allows one unacknowledged frame at a time. The sender starts a timer, retransmits after timeout, and uses sequence numbers so duplicate arrivals can be recognized."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "stopwait",
      "mode": "stopwait",
      "lecture": 15
    },
    "cnScene": [
      "Send a frame and start or update the sender’s timer.",
      "Stop-and-Wait allows one unacknowledged frame at a time. The sender starts a timer, retransmits after timeout, and uses sequence numbers so duplicate arrivals can be recognized.",
      "Advance the sequence state or retransmit without duplicating delivery."
    ],
    "sourceReferences": [
      {
        "start": 4.43,
        "end": 33.33,
        "text": " Hi everyone. So let's get started with today's lecture. Okay. So today we are going to see a stop and wait protocol. Good. So what we were saying in flow control is like this. So we were starting with the flow control method. So we were saying that the very simple idea and the flow control could be that we will be having the timeout and also we will be having something called as acknowledgement. Right. So timeout and acknowledgement are the backbone of this flow control. I mean, this is the ver"
      },
      {
        "start": 414.02,
        "end": 447.73,
        "text": " so we have said that stop and wait is following one thing which is it is saying that so we have started with the stop and wait and we said that it is basically saying we will be sending one frame at a time right which means that we will be okay this is the transmission time and then after that i'm just writing one line okay which means it's a propagation so here the i'm assuming that there is i mean negligible transmission here so i'm directly propagating so this is data"
      }
    ],
    "start": 47
  },
  {
    "id": 48,
    "lecture": 16,
    "title": "Share a channel with ALOHA · Discover",
    "concept": "Random-access protocols let multiple stations contend for a shared channel. Carrier sensing, time slots and randomized backoff reduce repeated collisions, while throughput depends on how many stations attempt to send. In pure ALOHA a station sends whenever it has a frame; overlapping transmissions collide. Slotted ALOHA restricts starts to slot boundaries, reducing vulnerable time but requiring synchronization.",
    "teachingSteps": [
      "Discover: Determine when a station is allowed to start transmitting.",
      "In pure ALOHA a station sends whenever it has a frame; overlapping transmissions collide. Slotted ALOHA restricts starts to slot boundaries, reducing vulnerable time but requiring synchronization.",
      "Check whether another transmission overlaps or the channel is busy."
    ],
    "foundation": {
      "title": "Share a channel with ALOHA",
      "idea": "Random-access protocols let multiple stations contend for a shared channel. Carrier sensing, time slots and randomized backoff reduce repeated collisions, while throughput depends on how many stations attempt to send. In pure ALOHA a station sends whenever it has a frame; overlapping transmissions collide. Slotted ALOHA restricts starts to slot boundaries, reducing vulnerable time but requiring synchronization.",
      "terms": [
        "Collision: Two transmissions overlap so the receiver cannot decode them correctly.",
        "Carrier sensing: Listening to a channel before deciding whether to transmit.",
        "Backoff: A randomized wait used to spread retransmission attempts over time."
      ],
      "example": "Pure ALOHA has a vulnerable period of two frame times; ideal slotted ALOHA has one frame time and a maximum throughput of about 1/e."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Share a channel with ALOHA · Discover: What change distinguishes slotted ALOHA from pure ALOHA? Which networking rule determines the result?",
        "options": [
          "Every station receives a dedicated wire",
          "Frames may begin only at synchronized slot boundaries",
          "The receiver sends no acknowledgments"
        ],
        "answer": 1,
        "explanation": "Frames may begin only at synchronized slot boundaries. Determine when a station is allowed to start transmitting."
      },
      {
        "type": "match",
        "prompt": "Share a channel with ALOHA · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Collision",
            "Two transmissions overlap so the receiver cannot decode them correctly."
          ],
          [
            "Carrier sensing",
            "Listening to a channel before deciding whether to transmit."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Share a channel with ALOHA · Discover: put the actions in a valid working sequence.",
        "items": [
          "Check the medium or slot before sending",
          "Detect whether transmissions overlap",
          "Wait a randomized backoff before retrying"
        ],
        "explanation": "Determine when a station is allowed to start transmitting. Check whether another transmission overlaps or the channel is busy. Apply collision handling and choose when a retry may occur."
      },
      {
        "type": "choice",
        "prompt": "Share a channel with ALOHA · Discover: which statement is accurate for share a channel with aloha?",
        "options": [
          "Frames may begin only at synchronized slot boundaries",
          "Every station receives a dedicated wire",
          "The receiver sends no acknowledgments"
        ],
        "answer": 0,
        "explanation": "Frames may begin only at synchronized slot boundaries. In pure ALOHA a station sends whenever it has a frame; overlapping transmissions collide. Slotted ALOHA restricts starts to slot boundaries, reducing vulnerable time but requiring synchronization."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "medium",
      "mode": "aloha",
      "lecture": 16
    },
    "cnScene": [
      "Determine when a station is allowed to start transmitting.",
      "In pure ALOHA a station sends whenever it has a frame; overlapping transmissions collide. Slotted ALOHA restricts starts to slot boundaries, reducing vulnerable time but requiring synchronization.",
      "Apply collision handling and choose when a retry may occur."
    ],
    "sourceReferences": [
      {
        "start": 2686.72,
        "end": 2712.42,
        "text": " I mean, this was very first protocol and that's how it has been developed in very early 90s, 1970. Okay, rebroadcast here means sending again. That's all. Okay, so now let's just start with pure Aloha. I mean, that was just introduction, but we will just analyze it with more carefully. Okay, so station sends a frame whenever it wants to send. That's I mean, very plain, plain."
      },
      {
        "start": 4380.64,
        "end": 4415.75,
        "text": " the time where the chance of collision is there right so what is the vulnerable time for pure aloha in 2TT time there is a chance of collision if this 2TT time has been passed away i mean before and after including both then there is no chance of collision okay so what is the vulnerable time is 2TT in the pure aloha okay so let's just see this question what they are trying to say a pure aloha network transmit 200 bits frame on a shared channel"
      }
    ],
    "start": 48
  },
  {
    "id": 49,
    "lecture": 16,
    "title": "Share a channel with ALOHA · Explore",
    "concept": "Random-access protocols let multiple stations contend for a shared channel. Carrier sensing, time slots and randomized backoff reduce repeated collisions, while throughput depends on how many stations attempt to send. In pure ALOHA a station sends whenever it has a frame; overlapping transmissions collide. Slotted ALOHA restricts starts to slot boundaries, reducing vulnerable time but requiring synchronization.",
    "teachingSteps": [
      "Explore: Check whether another transmission overlaps or the channel is busy.",
      "In pure ALOHA a station sends whenever it has a frame; overlapping transmissions collide. Slotted ALOHA restricts starts to slot boundaries, reducing vulnerable time but requiring synchronization.",
      "Apply collision handling and choose when a retry may occur."
    ],
    "foundation": {
      "title": "Share a channel with ALOHA",
      "idea": "Random-access protocols let multiple stations contend for a shared channel. Carrier sensing, time slots and randomized backoff reduce repeated collisions, while throughput depends on how many stations attempt to send. In pure ALOHA a station sends whenever it has a frame; overlapping transmissions collide. Slotted ALOHA restricts starts to slot boundaries, reducing vulnerable time but requiring synchronization.",
      "terms": [
        "Collision: Two transmissions overlap so the receiver cannot decode them correctly.",
        "Carrier sensing: Listening to a channel before deciding whether to transmit.",
        "Backoff: A randomized wait used to spread retransmission attempts over time."
      ],
      "example": "Pure ALOHA has a vulnerable period of two frame times; ideal slotted ALOHA has one frame time and a maximum throughput of about 1/e."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Share a channel with ALOHA · Explore: What change distinguishes slotted ALOHA from pure ALOHA? Which step should the host or router take next?",
        "options": [
          "Check the medium or slot before sending",
          "Wait a randomized backoff before retrying",
          "Detect whether transmissions overlap"
        ],
        "answer": 2,
        "explanation": "Detect whether transmissions overlap. Check whether another transmission overlaps or the channel is busy."
      },
      {
        "type": "match",
        "prompt": "Share a channel with ALOHA · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Carrier sensing",
            "Listening to a channel before deciding whether to transmit."
          ],
          [
            "Backoff",
            "A randomized wait used to spread retransmission attempts over time."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Share a channel with ALOHA · Explore: put the actions in a valid working sequence.",
        "items": [
          "Check the medium or slot before sending",
          "Detect whether transmissions overlap",
          "Wait a randomized backoff before retrying"
        ],
        "explanation": "Determine when a station is allowed to start transmitting. Check whether another transmission overlaps or the channel is busy. Apply collision handling and choose when a retry may occur."
      },
      {
        "type": "choice",
        "prompt": "Share a channel with ALOHA · Explore: which statement is accurate for share a channel with aloha?",
        "options": [
          "Frames may begin only at synchronized slot boundaries",
          "Every station receives a dedicated wire",
          "The receiver sends no acknowledgments"
        ],
        "answer": 0,
        "explanation": "Frames may begin only at synchronized slot boundaries. In pure ALOHA a station sends whenever it has a frame; overlapping transmissions collide. Slotted ALOHA restricts starts to slot boundaries, reducing vulnerable time but requiring synchronization."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "medium",
      "mode": "aloha",
      "lecture": 16
    },
    "cnScene": [
      "Determine when a station is allowed to start transmitting.",
      "In pure ALOHA a station sends whenever it has a frame; overlapping transmissions collide. Slotted ALOHA restricts starts to slot boundaries, reducing vulnerable time but requiring synchronization.",
      "Apply collision handling and choose when a retry may occur."
    ],
    "sourceReferences": [
      {
        "start": 2686.72,
        "end": 2712.42,
        "text": " I mean, this was very first protocol and that's how it has been developed in very early 90s, 1970. Okay, rebroadcast here means sending again. That's all. Okay, so now let's just start with pure Aloha. I mean, that was just introduction, but we will just analyze it with more carefully. Okay, so station sends a frame whenever it wants to send. That's I mean, very plain, plain."
      },
      {
        "start": 4380.64,
        "end": 4415.75,
        "text": " the time where the chance of collision is there right so what is the vulnerable time for pure aloha in 2TT time there is a chance of collision if this 2TT time has been passed away i mean before and after including both then there is no chance of collision okay so what is the vulnerable time is 2TT in the pure aloha okay so let's just see this question what they are trying to say a pure aloha network transmit 200 bits frame on a shared channel"
      }
    ],
    "start": 49
  },
  {
    "id": 50,
    "lecture": 16,
    "title": "Share a channel with ALOHA · Apply",
    "concept": "Random-access protocols let multiple stations contend for a shared channel. Carrier sensing, time slots and randomized backoff reduce repeated collisions, while throughput depends on how many stations attempt to send. In pure ALOHA a station sends whenever it has a frame; overlapping transmissions collide. Slotted ALOHA restricts starts to slot boundaries, reducing vulnerable time but requiring synchronization.",
    "teachingSteps": [
      "Apply: Apply collision handling and choose when a retry may occur.",
      "In pure ALOHA a station sends whenever it has a frame; overlapping transmissions collide. Slotted ALOHA restricts starts to slot boundaries, reducing vulnerable time but requiring synchronization.",
      "Determine when a station is allowed to start transmitting."
    ],
    "foundation": {
      "title": "Share a channel with ALOHA",
      "idea": "Random-access protocols let multiple stations contend for a shared channel. Carrier sensing, time slots and randomized backoff reduce repeated collisions, while throughput depends on how many stations attempt to send. In pure ALOHA a station sends whenever it has a frame; overlapping transmissions collide. Slotted ALOHA restricts starts to slot boundaries, reducing vulnerable time but requiring synchronization.",
      "terms": [
        "Collision: Two transmissions overlap so the receiver cannot decode them correctly.",
        "Carrier sensing: Listening to a channel before deciding whether to transmit.",
        "Backoff: A randomized wait used to spread retransmission attempts over time."
      ],
      "example": "Pure ALOHA has a vulnerable period of two frame times; ideal slotted ALOHA has one frame time and a maximum throughput of about 1/e."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Share a channel with ALOHA · Apply: A new case changes one condition: What change distinguishes slotted ALOHA from pure ALOHA? Which conclusion still follows?",
        "options": [
          "Frames may begin only at synchronized slot boundaries",
          "Every station receives a dedicated wire",
          "The receiver sends no acknowledgments"
        ],
        "answer": 0,
        "explanation": "Frames may begin only at synchronized slot boundaries. Apply collision handling and choose when a retry may occur."
      },
      {
        "type": "match",
        "prompt": "Share a channel with ALOHA · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Backoff",
            "A randomized wait used to spread retransmission attempts over time."
          ],
          [
            "Collision",
            "Two transmissions overlap so the receiver cannot decode them correctly."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Share a channel with ALOHA · Apply: put the actions in a valid working sequence.",
        "items": [
          "Check the medium or slot before sending",
          "Detect whether transmissions overlap",
          "Wait a randomized backoff before retrying"
        ],
        "explanation": "Determine when a station is allowed to start transmitting. Check whether another transmission overlaps or the channel is busy. Apply collision handling and choose when a retry may occur."
      },
      {
        "type": "choice",
        "prompt": "Share a channel with ALOHA · Apply: which statement is accurate for share a channel with aloha?",
        "options": [
          "Frames may begin only at synchronized slot boundaries",
          "Every station receives a dedicated wire",
          "The receiver sends no acknowledgments"
        ],
        "answer": 0,
        "explanation": "Frames may begin only at synchronized slot boundaries. In pure ALOHA a station sends whenever it has a frame; overlapping transmissions collide. Slotted ALOHA restricts starts to slot boundaries, reducing vulnerable time but requiring synchronization."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "medium",
      "mode": "aloha",
      "lecture": 16
    },
    "cnScene": [
      "Determine when a station is allowed to start transmitting.",
      "In pure ALOHA a station sends whenever it has a frame; overlapping transmissions collide. Slotted ALOHA restricts starts to slot boundaries, reducing vulnerable time but requiring synchronization.",
      "Apply collision handling and choose when a retry may occur."
    ],
    "sourceReferences": [
      {
        "start": 2686.72,
        "end": 2712.42,
        "text": " I mean, this was very first protocol and that's how it has been developed in very early 90s, 1970. Okay, rebroadcast here means sending again. That's all. Okay, so now let's just start with pure Aloha. I mean, that was just introduction, but we will just analyze it with more carefully. Okay, so station sends a frame whenever it wants to send. That's I mean, very plain, plain."
      },
      {
        "start": 4380.64,
        "end": 4415.75,
        "text": " the time where the chance of collision is there right so what is the vulnerable time for pure aloha in 2TT time there is a chance of collision if this 2TT time has been passed away i mean before and after including both then there is no chance of collision okay so what is the vulnerable time is 2TT in the pure aloha okay so let's just see this question what they are trying to say a pure aloha network transmit 200 bits frame on a shared channel"
      }
    ],
    "start": 50
  },
  {
    "id": 51,
    "lecture": 17,
    "title": "Use CSMA/CD and binary exponential backoff · Discover",
    "concept": "Random-access protocols let multiple stations contend for a shared channel. Carrier sensing, time slots and randomized backoff reduce repeated collisions, while throughput depends on how many stations attempt to send. Ethernet CSMA/CD stations listen before sending, detect collisions while transmitting, send a jam signal, then wait a randomized binary-exponential backoff before retrying.",
    "teachingSteps": [
      "Discover: Determine when a station is allowed to start transmitting.",
      "Ethernet CSMA/CD stations listen before sending, detect collisions while transmitting, send a jam signal, then wait a randomized binary-exponential backoff before retrying.",
      "Check whether another transmission overlaps or the channel is busy."
    ],
    "foundation": {
      "title": "Use CSMA/CD and binary exponential backoff",
      "idea": "Random-access protocols let multiple stations contend for a shared channel. Carrier sensing, time slots and randomized backoff reduce repeated collisions, while throughput depends on how many stations attempt to send. Ethernet CSMA/CD stations listen before sending, detect collisions while transmitting, send a jam signal, then wait a randomized binary-exponential backoff before retrying.",
      "terms": [
        "Collision: Two transmissions overlap so the receiver cannot decode them correctly.",
        "Carrier sensing: Listening to a channel before deciding whether to transmit.",
        "Backoff: A randomized wait used to spread retransmission attempts over time."
      ],
      "example": "After collision number k, the station chooses a slot count from a growing range, capped by the protocol; a later collision therefore increases the possible wait."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Use CSMA/CD and binary exponential backoff · Discover: After a collision on shared Ethernet, why does a station use randomized backoff? Which networking rule determines the result?",
        "options": [
          "To reserve the full channel permanently",
          "To calculate a subnet prefix",
          "To reduce the chance that contenders collide again together"
        ],
        "answer": 2,
        "explanation": "To reduce the chance that contenders collide again together. Determine when a station is allowed to start transmitting."
      },
      {
        "type": "match",
        "prompt": "Use CSMA/CD and binary exponential backoff · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Collision",
            "Two transmissions overlap so the receiver cannot decode them correctly."
          ],
          [
            "Carrier sensing",
            "Listening to a channel before deciding whether to transmit."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Use CSMA/CD and binary exponential backoff · Discover: put the actions in a valid working sequence.",
        "items": [
          "Check the medium or slot before sending",
          "Detect whether transmissions overlap",
          "Wait a randomized backoff before retrying"
        ],
        "explanation": "Determine when a station is allowed to start transmitting. Check whether another transmission overlaps or the channel is busy. Apply collision handling and choose when a retry may occur."
      },
      {
        "type": "choice",
        "prompt": "Use CSMA/CD and binary exponential backoff · Discover: which statement is accurate for use csma/cd and binary exponential backoff?",
        "options": [
          "To reduce the chance that contenders collide again together",
          "To reserve the full channel permanently",
          "To calculate a subnet prefix"
        ],
        "answer": 0,
        "explanation": "To reduce the chance that contenders collide again together. Ethernet CSMA/CD stations listen before sending, detect collisions while transmitting, send a jam signal, then wait a randomized binary-exponential backoff before retrying."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "medium",
      "mode": "csma",
      "lecture": 17
    },
    "cnScene": [
      "Determine when a station is allowed to start transmitting.",
      "Ethernet CSMA/CD stations listen before sending, detect collisions while transmitting, send a jam signal, then wait a randomized binary-exponential backoff before retrying.",
      "Apply collision handling and choose when a retry may occur."
    ],
    "sourceReferences": [
      {
        "start": 984.61,
        "end": 1015.42,
        "text": " carrier sense multiple access. This is CSMA means carrier sense multiple access with collision detection. Okay. This is the full form of CSMA CD. It says the station monitors the medium after it sends the frame to see if the transmission was successful. So this line is very, very important. It says that station monitors the medium after it sends the frame also. Okay. So which means, which means let's suppose that there are two stations. Okay. Let's suppose there are two stations, which ones to "
      },
      {
        "start": 5524.8,
        "end": 5554.28,
        "text": " to make sure it is quite right it sends the channel during the transmission it also listen to the listen and check for the collision of transmission right during the transmission also and before transmission rate sends the channel that's all hint be clear precise general because a bad example a user page attention to the channel when sending the data points are lost I mean this is their marketing scheme anyway so they are just uh saying that okay you send the channel before transmission while t"
      }
    ],
    "start": 51
  },
  {
    "id": 52,
    "lecture": 17,
    "title": "Use CSMA/CD and binary exponential backoff · Explore",
    "concept": "Random-access protocols let multiple stations contend for a shared channel. Carrier sensing, time slots and randomized backoff reduce repeated collisions, while throughput depends on how many stations attempt to send. Ethernet CSMA/CD stations listen before sending, detect collisions while transmitting, send a jam signal, then wait a randomized binary-exponential backoff before retrying.",
    "teachingSteps": [
      "Explore: Check whether another transmission overlaps or the channel is busy.",
      "Ethernet CSMA/CD stations listen before sending, detect collisions while transmitting, send a jam signal, then wait a randomized binary-exponential backoff before retrying.",
      "Apply collision handling and choose when a retry may occur."
    ],
    "foundation": {
      "title": "Use CSMA/CD and binary exponential backoff",
      "idea": "Random-access protocols let multiple stations contend for a shared channel. Carrier sensing, time slots and randomized backoff reduce repeated collisions, while throughput depends on how many stations attempt to send. Ethernet CSMA/CD stations listen before sending, detect collisions while transmitting, send a jam signal, then wait a randomized binary-exponential backoff before retrying.",
      "terms": [
        "Collision: Two transmissions overlap so the receiver cannot decode them correctly.",
        "Carrier sensing: Listening to a channel before deciding whether to transmit.",
        "Backoff: A randomized wait used to spread retransmission attempts over time."
      ],
      "example": "After collision number k, the station chooses a slot count from a growing range, capped by the protocol; a later collision therefore increases the possible wait."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Use CSMA/CD and binary exponential backoff · Explore: After a collision on shared Ethernet, why does a station use randomized backoff? Which step should the host or router take next?",
        "options": [
          "Detect whether transmissions overlap",
          "Check the medium or slot before sending",
          "Wait a randomized backoff before retrying"
        ],
        "answer": 0,
        "explanation": "Detect whether transmissions overlap. Check whether another transmission overlaps or the channel is busy."
      },
      {
        "type": "match",
        "prompt": "Use CSMA/CD and binary exponential backoff · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Carrier sensing",
            "Listening to a channel before deciding whether to transmit."
          ],
          [
            "Backoff",
            "A randomized wait used to spread retransmission attempts over time."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Use CSMA/CD and binary exponential backoff · Explore: put the actions in a valid working sequence.",
        "items": [
          "Check the medium or slot before sending",
          "Detect whether transmissions overlap",
          "Wait a randomized backoff before retrying"
        ],
        "explanation": "Determine when a station is allowed to start transmitting. Check whether another transmission overlaps or the channel is busy. Apply collision handling and choose when a retry may occur."
      },
      {
        "type": "choice",
        "prompt": "Use CSMA/CD and binary exponential backoff · Explore: which statement is accurate for use csma/cd and binary exponential backoff?",
        "options": [
          "To reduce the chance that contenders collide again together",
          "To reserve the full channel permanently",
          "To calculate a subnet prefix"
        ],
        "answer": 0,
        "explanation": "To reduce the chance that contenders collide again together. Ethernet CSMA/CD stations listen before sending, detect collisions while transmitting, send a jam signal, then wait a randomized binary-exponential backoff before retrying."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "medium",
      "mode": "csma",
      "lecture": 17
    },
    "cnScene": [
      "Determine when a station is allowed to start transmitting.",
      "Ethernet CSMA/CD stations listen before sending, detect collisions while transmitting, send a jam signal, then wait a randomized binary-exponential backoff before retrying.",
      "Apply collision handling and choose when a retry may occur."
    ],
    "sourceReferences": [
      {
        "start": 984.61,
        "end": 1015.42,
        "text": " carrier sense multiple access. This is CSMA means carrier sense multiple access with collision detection. Okay. This is the full form of CSMA CD. It says the station monitors the medium after it sends the frame to see if the transmission was successful. So this line is very, very important. It says that station monitors the medium after it sends the frame also. Okay. So which means, which means let's suppose that there are two stations. Okay. Let's suppose there are two stations, which ones to "
      },
      {
        "start": 5524.8,
        "end": 5554.28,
        "text": " to make sure it is quite right it sends the channel during the transmission it also listen to the listen and check for the collision of transmission right during the transmission also and before transmission rate sends the channel that's all hint be clear precise general because a bad example a user page attention to the channel when sending the data points are lost I mean this is their marketing scheme anyway so they are just uh saying that okay you send the channel before transmission while t"
      }
    ],
    "start": 52
  },
  {
    "id": 53,
    "lecture": 17,
    "title": "Use CSMA/CD and binary exponential backoff · Apply",
    "concept": "Random-access protocols let multiple stations contend for a shared channel. Carrier sensing, time slots and randomized backoff reduce repeated collisions, while throughput depends on how many stations attempt to send. Ethernet CSMA/CD stations listen before sending, detect collisions while transmitting, send a jam signal, then wait a randomized binary-exponential backoff before retrying.",
    "teachingSteps": [
      "Apply: Apply collision handling and choose when a retry may occur.",
      "Ethernet CSMA/CD stations listen before sending, detect collisions while transmitting, send a jam signal, then wait a randomized binary-exponential backoff before retrying.",
      "Determine when a station is allowed to start transmitting."
    ],
    "foundation": {
      "title": "Use CSMA/CD and binary exponential backoff",
      "idea": "Random-access protocols let multiple stations contend for a shared channel. Carrier sensing, time slots and randomized backoff reduce repeated collisions, while throughput depends on how many stations attempt to send. Ethernet CSMA/CD stations listen before sending, detect collisions while transmitting, send a jam signal, then wait a randomized binary-exponential backoff before retrying.",
      "terms": [
        "Collision: Two transmissions overlap so the receiver cannot decode them correctly.",
        "Carrier sensing: Listening to a channel before deciding whether to transmit.",
        "Backoff: A randomized wait used to spread retransmission attempts over time."
      ],
      "example": "After collision number k, the station chooses a slot count from a growing range, capped by the protocol; a later collision therefore increases the possible wait."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Use CSMA/CD and binary exponential backoff · Apply: A new case changes one condition: After a collision on shared Ethernet, why does a station use randomized backoff? Which conclusion still follows?",
        "options": [
          "To reserve the full channel permanently",
          "To reduce the chance that contenders collide again together",
          "To calculate a subnet prefix"
        ],
        "answer": 1,
        "explanation": "To reduce the chance that contenders collide again together. Apply collision handling and choose when a retry may occur."
      },
      {
        "type": "match",
        "prompt": "Use CSMA/CD and binary exponential backoff · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Backoff",
            "A randomized wait used to spread retransmission attempts over time."
          ],
          [
            "Collision",
            "Two transmissions overlap so the receiver cannot decode them correctly."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Use CSMA/CD and binary exponential backoff · Apply: put the actions in a valid working sequence.",
        "items": [
          "Check the medium or slot before sending",
          "Detect whether transmissions overlap",
          "Wait a randomized backoff before retrying"
        ],
        "explanation": "Determine when a station is allowed to start transmitting. Check whether another transmission overlaps or the channel is busy. Apply collision handling and choose when a retry may occur."
      },
      {
        "type": "choice",
        "prompt": "Use CSMA/CD and binary exponential backoff · Apply: which statement is accurate for use csma/cd and binary exponential backoff?",
        "options": [
          "To reduce the chance that contenders collide again together",
          "To reserve the full channel permanently",
          "To calculate a subnet prefix"
        ],
        "answer": 0,
        "explanation": "To reduce the chance that contenders collide again together. Ethernet CSMA/CD stations listen before sending, detect collisions while transmitting, send a jam signal, then wait a randomized binary-exponential backoff before retrying."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "medium",
      "mode": "csma",
      "lecture": 17
    },
    "cnScene": [
      "Determine when a station is allowed to start transmitting.",
      "Ethernet CSMA/CD stations listen before sending, detect collisions while transmitting, send a jam signal, then wait a randomized binary-exponential backoff before retrying.",
      "Apply collision handling and choose when a retry may occur."
    ],
    "sourceReferences": [
      {
        "start": 984.61,
        "end": 1015.42,
        "text": " carrier sense multiple access. This is CSMA means carrier sense multiple access with collision detection. Okay. This is the full form of CSMA CD. It says the station monitors the medium after it sends the frame to see if the transmission was successful. So this line is very, very important. It says that station monitors the medium after it sends the frame also. Okay. So which means, which means let's suppose that there are two stations. Okay. Let's suppose there are two stations, which ones to "
      },
      {
        "start": 5524.8,
        "end": 5554.28,
        "text": " to make sure it is quite right it sends the channel during the transmission it also listen to the listen and check for the collision of transmission right during the transmission also and before transmission rate sends the channel that's all hint be clear precise general because a bad example a user page attention to the channel when sending the data points are lost I mean this is their marketing scheme anyway so they are just uh saying that okay you send the channel before transmission while t"
      }
    ],
    "start": 53
  },
  {
    "id": 54,
    "lecture": 18,
    "title": "Select a random-access backoff · Discover",
    "concept": "Random-access protocols let multiple stations contend for a shared channel. Carrier sensing, time slots and randomized backoff reduce repeated collisions, while throughput depends on how many stations attempt to send. Randomized backoff spreads retries across time. Binary exponential backoff widens the choice range after repeated collisions, then caps it to avoid unbounded delay.",
    "teachingSteps": [
      "Discover: Determine when a station is allowed to start transmitting.",
      "Randomized backoff spreads retries across time. Binary exponential backoff widens the choice range after repeated collisions, then caps it to avoid unbounded delay.",
      "Check whether another transmission overlaps or the channel is busy."
    ],
    "foundation": {
      "title": "Select a random-access backoff",
      "idea": "Random-access protocols let multiple stations contend for a shared channel. Carrier sensing, time slots and randomized backoff reduce repeated collisions, while throughput depends on how many stations attempt to send. Randomized backoff spreads retries across time. Binary exponential backoff widens the choice range after repeated collisions, then caps it to avoid unbounded delay.",
      "terms": [
        "Collision: Two transmissions overlap so the receiver cannot decode them correctly.",
        "Carrier sensing: Listening to a channel before deciding whether to transmit.",
        "Backoff: A randomized wait used to spread retransmission attempts over time."
      ],
      "example": "If a protocol allows 0 through 7 slots after a collision, a randomly selected 3 means waiting three slot times before trying again."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Select a random-access backoff · Discover: Two stations collide and both retry immediately at the same instant. What risk does random backoff reduce? Which networking rule determines the result?",
        "options": [
          "A repeated collision at the same time",
          "An IP address conflict",
          "A TCP checksum mismatch"
        ],
        "answer": 0,
        "explanation": "A repeated collision at the same time. Determine when a station is allowed to start transmitting."
      },
      {
        "type": "match",
        "prompt": "Select a random-access backoff · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Collision",
            "Two transmissions overlap so the receiver cannot decode them correctly."
          ],
          [
            "Carrier sensing",
            "Listening to a channel before deciding whether to transmit."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Select a random-access backoff · Discover: put the actions in a valid working sequence.",
        "items": [
          "Check the medium or slot before sending",
          "Detect whether transmissions overlap",
          "Wait a randomized backoff before retrying"
        ],
        "explanation": "Determine when a station is allowed to start transmitting. Check whether another transmission overlaps or the channel is busy. Apply collision handling and choose when a retry may occur."
      },
      {
        "type": "choice",
        "prompt": "Select a random-access backoff · Discover: which statement is accurate for select a random-access backoff?",
        "options": [
          "A repeated collision at the same time",
          "An IP address conflict",
          "A TCP checksum mismatch"
        ],
        "answer": 0,
        "explanation": "A repeated collision at the same time. Randomized backoff spreads retries across time. Binary exponential backoff widens the choice range after repeated collisions, then caps it to avoid unbounded delay."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "medium",
      "mode": "backoff",
      "lecture": 18
    },
    "cnScene": [
      "Determine when a station is allowed to start transmitting.",
      "Randomized backoff spreads retries across time. Binary exponential backoff widens the choice range after repeated collisions, then caps it to avoid unbounded delay.",
      "Apply collision handling and choose when a retry may occur."
    ],
    "sourceReferences": [
      {
        "start": 3123.78,
        "end": 3150.72,
        "text": " So let's see what they are saying. A and B are two stations that are trying to transmit on a local area network using CSMA CD with exponential backoff. Okay, this is also called as exponential backoff algorithm or some people call it binary exponential backoff algorithm. Okay. Now each has a steady queue of frames ready to send. Given that each transmitting a frame at the end of this transmission, A will attempt to transmit its next frame while B will"
      },
      {
        "start": 3855.99,
        "end": 3889.45,
        "text": " they are saying that which of the following is true about the randomized back of algorithm or the binary back of algorithm or exponential back of algorithm or something like that right is a mechanism used to stabilize the contention mac protocols which means contention mac protocol means random access protocol basically contention based right which of the following is true it ensures that two nodes the two nodes that experience a collision in time slot will never collide"
      }
    ],
    "start": 54
  },
  {
    "id": 55,
    "lecture": 18,
    "title": "Select a random-access backoff · Explore",
    "concept": "Random-access protocols let multiple stations contend for a shared channel. Carrier sensing, time slots and randomized backoff reduce repeated collisions, while throughput depends on how many stations attempt to send. Randomized backoff spreads retries across time. Binary exponential backoff widens the choice range after repeated collisions, then caps it to avoid unbounded delay.",
    "teachingSteps": [
      "Explore: Check whether another transmission overlaps or the channel is busy.",
      "Randomized backoff spreads retries across time. Binary exponential backoff widens the choice range after repeated collisions, then caps it to avoid unbounded delay.",
      "Apply collision handling and choose when a retry may occur."
    ],
    "foundation": {
      "title": "Select a random-access backoff",
      "idea": "Random-access protocols let multiple stations contend for a shared channel. Carrier sensing, time slots and randomized backoff reduce repeated collisions, while throughput depends on how many stations attempt to send. Randomized backoff spreads retries across time. Binary exponential backoff widens the choice range after repeated collisions, then caps it to avoid unbounded delay.",
      "terms": [
        "Collision: Two transmissions overlap so the receiver cannot decode them correctly.",
        "Carrier sensing: Listening to a channel before deciding whether to transmit.",
        "Backoff: A randomized wait used to spread retransmission attempts over time."
      ],
      "example": "If a protocol allows 0 through 7 slots after a collision, a randomly selected 3 means waiting three slot times before trying again."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Select a random-access backoff · Explore: Two stations collide and both retry immediately at the same instant. What risk does random backoff reduce? Which step should the host or router take next?",
        "options": [
          "Check the medium or slot before sending",
          "Detect whether transmissions overlap",
          "Wait a randomized backoff before retrying"
        ],
        "answer": 1,
        "explanation": "Detect whether transmissions overlap. Check whether another transmission overlaps or the channel is busy."
      },
      {
        "type": "match",
        "prompt": "Select a random-access backoff · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Carrier sensing",
            "Listening to a channel before deciding whether to transmit."
          ],
          [
            "Backoff",
            "A randomized wait used to spread retransmission attempts over time."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Select a random-access backoff · Explore: put the actions in a valid working sequence.",
        "items": [
          "Check the medium or slot before sending",
          "Detect whether transmissions overlap",
          "Wait a randomized backoff before retrying"
        ],
        "explanation": "Determine when a station is allowed to start transmitting. Check whether another transmission overlaps or the channel is busy. Apply collision handling and choose when a retry may occur."
      },
      {
        "type": "choice",
        "prompt": "Select a random-access backoff · Explore: which statement is accurate for select a random-access backoff?",
        "options": [
          "A repeated collision at the same time",
          "An IP address conflict",
          "A TCP checksum mismatch"
        ],
        "answer": 0,
        "explanation": "A repeated collision at the same time. Randomized backoff spreads retries across time. Binary exponential backoff widens the choice range after repeated collisions, then caps it to avoid unbounded delay."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "medium",
      "mode": "backoff",
      "lecture": 18
    },
    "cnScene": [
      "Determine when a station is allowed to start transmitting.",
      "Randomized backoff spreads retries across time. Binary exponential backoff widens the choice range after repeated collisions, then caps it to avoid unbounded delay.",
      "Apply collision handling and choose when a retry may occur."
    ],
    "sourceReferences": [
      {
        "start": 3123.78,
        "end": 3150.72,
        "text": " So let's see what they are saying. A and B are two stations that are trying to transmit on a local area network using CSMA CD with exponential backoff. Okay, this is also called as exponential backoff algorithm or some people call it binary exponential backoff algorithm. Okay. Now each has a steady queue of frames ready to send. Given that each transmitting a frame at the end of this transmission, A will attempt to transmit its next frame while B will"
      },
      {
        "start": 3855.99,
        "end": 3889.45,
        "text": " they are saying that which of the following is true about the randomized back of algorithm or the binary back of algorithm or exponential back of algorithm or something like that right is a mechanism used to stabilize the contention mac protocols which means contention mac protocol means random access protocol basically contention based right which of the following is true it ensures that two nodes the two nodes that experience a collision in time slot will never collide"
      }
    ],
    "start": 55
  },
  {
    "id": 56,
    "lecture": 18,
    "title": "Select a random-access backoff · Apply",
    "concept": "Random-access protocols let multiple stations contend for a shared channel. Carrier sensing, time slots and randomized backoff reduce repeated collisions, while throughput depends on how many stations attempt to send. Randomized backoff spreads retries across time. Binary exponential backoff widens the choice range after repeated collisions, then caps it to avoid unbounded delay.",
    "teachingSteps": [
      "Apply: Apply collision handling and choose when a retry may occur.",
      "Randomized backoff spreads retries across time. Binary exponential backoff widens the choice range after repeated collisions, then caps it to avoid unbounded delay.",
      "Determine when a station is allowed to start transmitting."
    ],
    "foundation": {
      "title": "Select a random-access backoff",
      "idea": "Random-access protocols let multiple stations contend for a shared channel. Carrier sensing, time slots and randomized backoff reduce repeated collisions, while throughput depends on how many stations attempt to send. Randomized backoff spreads retries across time. Binary exponential backoff widens the choice range after repeated collisions, then caps it to avoid unbounded delay.",
      "terms": [
        "Collision: Two transmissions overlap so the receiver cannot decode them correctly.",
        "Carrier sensing: Listening to a channel before deciding whether to transmit.",
        "Backoff: A randomized wait used to spread retransmission attempts over time."
      ],
      "example": "If a protocol allows 0 through 7 slots after a collision, a randomly selected 3 means waiting three slot times before trying again."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Select a random-access backoff · Apply: A new case changes one condition: Two stations collide and both retry immediately at the same instant. What risk does random backoff reduce? Which conclusion still follows?",
        "options": [
          "An IP address conflict",
          "A TCP checksum mismatch",
          "A repeated collision at the same time"
        ],
        "answer": 2,
        "explanation": "A repeated collision at the same time. Apply collision handling and choose when a retry may occur."
      },
      {
        "type": "match",
        "prompt": "Select a random-access backoff · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Backoff",
            "A randomized wait used to spread retransmission attempts over time."
          ],
          [
            "Collision",
            "Two transmissions overlap so the receiver cannot decode them correctly."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Select a random-access backoff · Apply: put the actions in a valid working sequence.",
        "items": [
          "Check the medium or slot before sending",
          "Detect whether transmissions overlap",
          "Wait a randomized backoff before retrying"
        ],
        "explanation": "Determine when a station is allowed to start transmitting. Check whether another transmission overlaps or the channel is busy. Apply collision handling and choose when a retry may occur."
      },
      {
        "type": "choice",
        "prompt": "Select a random-access backoff · Apply: which statement is accurate for select a random-access backoff?",
        "options": [
          "A repeated collision at the same time",
          "An IP address conflict",
          "A TCP checksum mismatch"
        ],
        "answer": 0,
        "explanation": "A repeated collision at the same time. Randomized backoff spreads retries across time. Binary exponential backoff widens the choice range after repeated collisions, then caps it to avoid unbounded delay."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "medium",
      "mode": "backoff",
      "lecture": 18
    },
    "cnScene": [
      "Determine when a station is allowed to start transmitting.",
      "Randomized backoff spreads retries across time. Binary exponential backoff widens the choice range after repeated collisions, then caps it to avoid unbounded delay.",
      "Apply collision handling and choose when a retry may occur."
    ],
    "sourceReferences": [
      {
        "start": 3123.78,
        "end": 3150.72,
        "text": " So let's see what they are saying. A and B are two stations that are trying to transmit on a local area network using CSMA CD with exponential backoff. Okay, this is also called as exponential backoff algorithm or some people call it binary exponential backoff algorithm. Okay. Now each has a steady queue of frames ready to send. Given that each transmitting a frame at the end of this transmission, A will attempt to transmit its next frame while B will"
      },
      {
        "start": 3855.99,
        "end": 3889.45,
        "text": " they are saying that which of the following is true about the randomized back of algorithm or the binary back of algorithm or exponential back of algorithm or something like that right is a mechanism used to stabilize the contention mac protocols which means contention mac protocol means random access protocol basically contention based right which of the following is true it ensures that two nodes the two nodes that experience a collision in time slot will never collide"
      }
    ],
    "start": 56
  },
  {
    "id": 57,
    "lecture": 19,
    "title": "Resolve local addresses with ARP · Discover",
    "concept": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. On an IPv4 LAN, ARP maps a next-hop IPv4 address to a local link-layer address. A host broadcasts a request on the local segment; the matching host replies, and the result can be cached.",
    "teachingSteps": [
      "Discover: Identify whether the question concerns local or routed delivery.",
      "On an IPv4 LAN, ARP maps a next-hop IPv4 address to a local link-layer address. A host broadcasts a request on the local segment; the matching host replies, and the result can be cached.",
      "Follow the address, configuration or topology-control exchange."
    ],
    "foundation": {
      "title": "Resolve local addresses with ARP",
      "idea": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. On an IPv4 LAN, ARP maps a next-hop IPv4 address to a local link-layer address. A host broadcasts a request on the local segment; the matching host replies, and the result can be cached.",
      "terms": [
        "MAC address: A link-layer identifier used to deliver frames on a local network.",
        "ARP: The IPv4 LAN protocol that discovers a local next-hop MAC address.",
        "Broadcast domain: The portion of a LAN over which a link-layer broadcast is forwarded."
      ],
      "example": "To send to an off-subnet server, a host ARPs for its default gateway’s MAC address, not the remote server’s MAC."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Resolve local addresses with ARP · Discover: A host sends to an IP address outside its subnet. Which MAC address does it need on the local Ethernet frame? Which networking rule determines the result?",
        "options": [
          "The remote server’s MAC address across the Internet",
          "The default gateway’s MAC address",
          "The DNS server’s hostname"
        ],
        "answer": 1,
        "explanation": "The default gateway’s MAC address. Identify whether the question concerns local or routed delivery."
      },
      {
        "type": "match",
        "prompt": "Resolve local addresses with ARP · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "MAC address",
            "A link-layer identifier used to deliver frames on a local network."
          ],
          [
            "ARP",
            "The IPv4 LAN protocol that discovers a local next-hop MAC address."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Resolve local addresses with ARP · Discover: put the actions in a valid working sequence.",
        "items": [
          "Identify the local sender and destination",
          "Exchange or learn the needed LAN information",
          "Forward the frame without creating a loop"
        ],
        "explanation": "Identify whether the question concerns local or routed delivery. Follow the address, configuration or topology-control exchange. Apply the switch or host rule to determine the next local action."
      },
      {
        "type": "choice",
        "prompt": "Resolve local addresses with ARP · Discover: which statement is accurate for resolve local addresses with arp?",
        "options": [
          "The default gateway’s MAC address",
          "The remote server’s MAC address across the Internet",
          "The DNS server’s hostname"
        ],
        "answer": 0,
        "explanation": "The default gateway’s MAC address. On an IPv4 LAN, ARP maps a next-hop IPv4 address to a local link-layer address. A host broadcasts a request on the local segment; the matching host replies, and the result can be cached."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "lan",
      "mode": "arp",
      "lecture": 19
    },
    "cnScene": [
      "Identify whether the question concerns local or routed delivery.",
      "On an IPv4 LAN, ARP maps a next-hop IPv4 address to a local link-layer address. A host broadcasts a request on the local segment; the matching host replies, and the result can be cached.",
      "Apply the switch or host rule to determine the next local action."
    ],
    "sourceReferences": [
      {
        "start": 1387.1,
        "end": 1420.22,
        "text": " Then do do H1 really need IP address of R1? The answer is no. Okay. The answer is big no. So answer is no. Basically, basically, even before, even before the IP addresses, the communication between the same network used to happen, right? That is called LAN. LAN means local area network. I mean, if we have"
      },
      {
        "start": 3353.53,
        "end": 3383.31,
        "text": " Now let's just move to the next slide. So let's just see what it is written here. Now we are saying that ARP is each host and router needs a link layer address MAC address to identify itself in the local area network or the subnet, right? I mean, we interchangeably might use this LAN local area network or subnet. Okay. And also a network layer address IP address to identify its position in the internet. Okay. So we need a MAC address to communicate within the subnet or within the local area net"
      }
    ],
    "start": 57
  },
  {
    "id": 58,
    "lecture": 19,
    "title": "Resolve local addresses with ARP · Explore",
    "concept": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. On an IPv4 LAN, ARP maps a next-hop IPv4 address to a local link-layer address. A host broadcasts a request on the local segment; the matching host replies, and the result can be cached.",
    "teachingSteps": [
      "Explore: Follow the address, configuration or topology-control exchange.",
      "On an IPv4 LAN, ARP maps a next-hop IPv4 address to a local link-layer address. A host broadcasts a request on the local segment; the matching host replies, and the result can be cached.",
      "Apply the switch or host rule to determine the next local action."
    ],
    "foundation": {
      "title": "Resolve local addresses with ARP",
      "idea": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. On an IPv4 LAN, ARP maps a next-hop IPv4 address to a local link-layer address. A host broadcasts a request on the local segment; the matching host replies, and the result can be cached.",
      "terms": [
        "MAC address: A link-layer identifier used to deliver frames on a local network.",
        "ARP: The IPv4 LAN protocol that discovers a local next-hop MAC address.",
        "Broadcast domain: The portion of a LAN over which a link-layer broadcast is forwarded."
      ],
      "example": "To send to an off-subnet server, a host ARPs for its default gateway’s MAC address, not the remote server’s MAC."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Resolve local addresses with ARP · Explore: A host sends to an IP address outside its subnet. Which MAC address does it need on the local Ethernet frame? Which step should the host or router take next?",
        "options": [
          "Identify the local sender and destination",
          "Forward the frame without creating a loop",
          "Exchange or learn the needed LAN information"
        ],
        "answer": 2,
        "explanation": "Exchange or learn the needed LAN information. Follow the address, configuration or topology-control exchange."
      },
      {
        "type": "match",
        "prompt": "Resolve local addresses with ARP · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "ARP",
            "The IPv4 LAN protocol that discovers a local next-hop MAC address."
          ],
          [
            "Broadcast domain",
            "The portion of a LAN over which a link-layer broadcast is forwarded."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Resolve local addresses with ARP · Explore: put the actions in a valid working sequence.",
        "items": [
          "Identify the local sender and destination",
          "Exchange or learn the needed LAN information",
          "Forward the frame without creating a loop"
        ],
        "explanation": "Identify whether the question concerns local or routed delivery. Follow the address, configuration or topology-control exchange. Apply the switch or host rule to determine the next local action."
      },
      {
        "type": "choice",
        "prompt": "Resolve local addresses with ARP · Explore: which statement is accurate for resolve local addresses with arp?",
        "options": [
          "The default gateway’s MAC address",
          "The remote server’s MAC address across the Internet",
          "The DNS server’s hostname"
        ],
        "answer": 0,
        "explanation": "The default gateway’s MAC address. On an IPv4 LAN, ARP maps a next-hop IPv4 address to a local link-layer address. A host broadcasts a request on the local segment; the matching host replies, and the result can be cached."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "lan",
      "mode": "arp",
      "lecture": 19
    },
    "cnScene": [
      "Identify whether the question concerns local or routed delivery.",
      "On an IPv4 LAN, ARP maps a next-hop IPv4 address to a local link-layer address. A host broadcasts a request on the local segment; the matching host replies, and the result can be cached.",
      "Apply the switch or host rule to determine the next local action."
    ],
    "sourceReferences": [
      {
        "start": 1387.1,
        "end": 1420.22,
        "text": " Then do do H1 really need IP address of R1? The answer is no. Okay. The answer is big no. So answer is no. Basically, basically, even before, even before the IP addresses, the communication between the same network used to happen, right? That is called LAN. LAN means local area network. I mean, if we have"
      },
      {
        "start": 3353.53,
        "end": 3383.31,
        "text": " Now let's just move to the next slide. So let's just see what it is written here. Now we are saying that ARP is each host and router needs a link layer address MAC address to identify itself in the local area network or the subnet, right? I mean, we interchangeably might use this LAN local area network or subnet. Okay. And also a network layer address IP address to identify its position in the internet. Okay. So we need a MAC address to communicate within the subnet or within the local area net"
      }
    ],
    "start": 58
  },
  {
    "id": 59,
    "lecture": 19,
    "title": "Resolve local addresses with ARP · Apply",
    "concept": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. On an IPv4 LAN, ARP maps a next-hop IPv4 address to a local link-layer address. A host broadcasts a request on the local segment; the matching host replies, and the result can be cached.",
    "teachingSteps": [
      "Apply: Apply the switch or host rule to determine the next local action.",
      "On an IPv4 LAN, ARP maps a next-hop IPv4 address to a local link-layer address. A host broadcasts a request on the local segment; the matching host replies, and the result can be cached.",
      "Identify whether the question concerns local or routed delivery."
    ],
    "foundation": {
      "title": "Resolve local addresses with ARP",
      "idea": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. On an IPv4 LAN, ARP maps a next-hop IPv4 address to a local link-layer address. A host broadcasts a request on the local segment; the matching host replies, and the result can be cached.",
      "terms": [
        "MAC address: A link-layer identifier used to deliver frames on a local network.",
        "ARP: The IPv4 LAN protocol that discovers a local next-hop MAC address.",
        "Broadcast domain: The portion of a LAN over which a link-layer broadcast is forwarded."
      ],
      "example": "To send to an off-subnet server, a host ARPs for its default gateway’s MAC address, not the remote server’s MAC."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Resolve local addresses with ARP · Apply: A new case changes one condition: A host sends to an IP address outside its subnet. Which MAC address does it need on the local Ethernet frame? Which conclusion still follows?",
        "options": [
          "The default gateway’s MAC address",
          "The remote server’s MAC address across the Internet",
          "The DNS server’s hostname"
        ],
        "answer": 0,
        "explanation": "The default gateway’s MAC address. Apply the switch or host rule to determine the next local action."
      },
      {
        "type": "match",
        "prompt": "Resolve local addresses with ARP · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Broadcast domain",
            "The portion of a LAN over which a link-layer broadcast is forwarded."
          ],
          [
            "MAC address",
            "A link-layer identifier used to deliver frames on a local network."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Resolve local addresses with ARP · Apply: put the actions in a valid working sequence.",
        "items": [
          "Identify the local sender and destination",
          "Exchange or learn the needed LAN information",
          "Forward the frame without creating a loop"
        ],
        "explanation": "Identify whether the question concerns local or routed delivery. Follow the address, configuration or topology-control exchange. Apply the switch or host rule to determine the next local action."
      },
      {
        "type": "choice",
        "prompt": "Resolve local addresses with ARP · Apply: which statement is accurate for resolve local addresses with arp?",
        "options": [
          "The default gateway’s MAC address",
          "The remote server’s MAC address across the Internet",
          "The DNS server’s hostname"
        ],
        "answer": 0,
        "explanation": "The default gateway’s MAC address. On an IPv4 LAN, ARP maps a next-hop IPv4 address to a local link-layer address. A host broadcasts a request on the local segment; the matching host replies, and the result can be cached."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "lan",
      "mode": "arp",
      "lecture": 19
    },
    "cnScene": [
      "Identify whether the question concerns local or routed delivery.",
      "On an IPv4 LAN, ARP maps a next-hop IPv4 address to a local link-layer address. A host broadcasts a request on the local segment; the matching host replies, and the result can be cached.",
      "Apply the switch or host rule to determine the next local action."
    ],
    "sourceReferences": [
      {
        "start": 1387.1,
        "end": 1420.22,
        "text": " Then do do H1 really need IP address of R1? The answer is no. Okay. The answer is big no. So answer is no. Basically, basically, even before, even before the IP addresses, the communication between the same network used to happen, right? That is called LAN. LAN means local area network. I mean, if we have"
      },
      {
        "start": 3353.53,
        "end": 3383.31,
        "text": " Now let's just move to the next slide. So let's just see what it is written here. Now we are saying that ARP is each host and router needs a link layer address MAC address to identify itself in the local area network or the subnet, right? I mean, we interchangeably might use this LAN local area network or subnet. Okay. And also a network layer address IP address to identify its position in the internet. Okay. So we need a MAC address to communicate within the subnet or within the local area net"
      }
    ],
    "start": 59
  },
  {
    "id": 60,
    "lecture": 20,
    "title": "Receive network settings with DHCP · Discover",
    "concept": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. DHCP commonly uses Discover, Offer, Request and Acknowledge (DORA) to lease configuration such as an IP address, subnet mask, gateway and DNS server.",
    "teachingSteps": [
      "Discover: Identify whether the question concerns local or routed delivery.",
      "DHCP commonly uses Discover, Offer, Request and Acknowledge (DORA) to lease configuration such as an IP address, subnet mask, gateway and DNS server.",
      "Follow the address, configuration or topology-control exchange."
    ],
    "foundation": {
      "title": "Receive network settings with DHCP",
      "idea": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. DHCP commonly uses Discover, Offer, Request and Acknowledge (DORA) to lease configuration such as an IP address, subnet mask, gateway and DNS server.",
      "terms": [
        "MAC address: A link-layer identifier used to deliver frames on a local network.",
        "ARP: The IPv4 LAN protocol that discovers a local next-hop MAC address.",
        "Broadcast domain: The portion of a LAN over which a link-layer broadcast is forwarded."
      ],
      "example": "A new client broadcasts DHCP Discover because it does not yet know its address; a server offers a lease, the client requests it, and the server acknowledges."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Receive network settings with DHCP · Discover: In the common DORA sequence, what does the client send after receiving an Offer? Which networking rule determines the result?",
        "options": [
          "Acknowledge",
          "Discover again as the next normal step",
          "Request"
        ],
        "answer": 2,
        "explanation": "Request. Identify whether the question concerns local or routed delivery."
      },
      {
        "type": "match",
        "prompt": "Receive network settings with DHCP · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "MAC address",
            "A link-layer identifier used to deliver frames on a local network."
          ],
          [
            "ARP",
            "The IPv4 LAN protocol that discovers a local next-hop MAC address."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Receive network settings with DHCP · Discover: put the actions in a valid working sequence.",
        "items": [
          "Identify the local sender and destination",
          "Exchange or learn the needed LAN information",
          "Forward the frame without creating a loop"
        ],
        "explanation": "Identify whether the question concerns local or routed delivery. Follow the address, configuration or topology-control exchange. Apply the switch or host rule to determine the next local action."
      },
      {
        "type": "choice",
        "prompt": "Receive network settings with DHCP · Discover: which statement is accurate for receive network settings with dhcp?",
        "options": [
          "Request",
          "Acknowledge",
          "Discover again as the next normal step"
        ],
        "answer": 0,
        "explanation": "Request. DHCP commonly uses Discover, Offer, Request and Acknowledge (DORA) to lease configuration such as an IP address, subnet mask, gateway and DNS server."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "lan",
      "mode": "dhcp",
      "lecture": 20
    },
    "cnScene": [
      "Identify whether the question concerns local or routed delivery.",
      "DHCP commonly uses Discover, Offer, Request and Acknowledge (DORA) to lease configuration such as an IP address, subnet mask, gateway and DNS server.",
      "Apply the switch or host rule to determine the next local action."
    ],
    "sourceReferences": [
      {
        "start": 1824.7,
        "end": 1853.39,
        "text": " But again, where it will get the subnet mask? How it will get the subnet mask? So that is done using the protocol something like bootp So bootp does not only return the IP address It also tells the subnet mask Also tells the IP address It also tells the default gateway address And it also tells the IP address of the DNS server And anyway, if you do not understand the DNS, you can skip it But yeah, this bootp does not only return the IP address It also returns what is the subnet mask?"
      },
      {
        "start": 3586.15,
        "end": 3615.54,
        "text": " Okay, so within the same network, there could be multiple DHCP servers also. So that is why that is why let's just see what is happening here. This is a client. If it is going to send the send the broadcast message for the request, which is called DHCP discover also. Okay, so if it is going to send the broadcast message, the first message is broadcast message, then if there are multiple servers, then it will be delivered to multiple servers. Right now any of the server, see earlier the mapping "
      }
    ],
    "start": 60
  },
  {
    "id": 61,
    "lecture": 20,
    "title": "Receive network settings with DHCP · Explore",
    "concept": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. DHCP commonly uses Discover, Offer, Request and Acknowledge (DORA) to lease configuration such as an IP address, subnet mask, gateway and DNS server.",
    "teachingSteps": [
      "Explore: Follow the address, configuration or topology-control exchange.",
      "DHCP commonly uses Discover, Offer, Request and Acknowledge (DORA) to lease configuration such as an IP address, subnet mask, gateway and DNS server.",
      "Apply the switch or host rule to determine the next local action."
    ],
    "foundation": {
      "title": "Receive network settings with DHCP",
      "idea": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. DHCP commonly uses Discover, Offer, Request and Acknowledge (DORA) to lease configuration such as an IP address, subnet mask, gateway and DNS server.",
      "terms": [
        "MAC address: A link-layer identifier used to deliver frames on a local network.",
        "ARP: The IPv4 LAN protocol that discovers a local next-hop MAC address.",
        "Broadcast domain: The portion of a LAN over which a link-layer broadcast is forwarded."
      ],
      "example": "A new client broadcasts DHCP Discover because it does not yet know its address; a server offers a lease, the client requests it, and the server acknowledges."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Receive network settings with DHCP · Explore: In the common DORA sequence, what does the client send after receiving an Offer? Which step should the host or router take next?",
        "options": [
          "Exchange or learn the needed LAN information",
          "Identify the local sender and destination",
          "Forward the frame without creating a loop"
        ],
        "answer": 0,
        "explanation": "Exchange or learn the needed LAN information. Follow the address, configuration or topology-control exchange."
      },
      {
        "type": "match",
        "prompt": "Receive network settings with DHCP · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "ARP",
            "The IPv4 LAN protocol that discovers a local next-hop MAC address."
          ],
          [
            "Broadcast domain",
            "The portion of a LAN over which a link-layer broadcast is forwarded."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Receive network settings with DHCP · Explore: put the actions in a valid working sequence.",
        "items": [
          "Identify the local sender and destination",
          "Exchange or learn the needed LAN information",
          "Forward the frame without creating a loop"
        ],
        "explanation": "Identify whether the question concerns local or routed delivery. Follow the address, configuration or topology-control exchange. Apply the switch or host rule to determine the next local action."
      },
      {
        "type": "choice",
        "prompt": "Receive network settings with DHCP · Explore: which statement is accurate for receive network settings with dhcp?",
        "options": [
          "Request",
          "Acknowledge",
          "Discover again as the next normal step"
        ],
        "answer": 0,
        "explanation": "Request. DHCP commonly uses Discover, Offer, Request and Acknowledge (DORA) to lease configuration such as an IP address, subnet mask, gateway and DNS server."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "lan",
      "mode": "dhcp",
      "lecture": 20
    },
    "cnScene": [
      "Identify whether the question concerns local or routed delivery.",
      "DHCP commonly uses Discover, Offer, Request and Acknowledge (DORA) to lease configuration such as an IP address, subnet mask, gateway and DNS server.",
      "Apply the switch or host rule to determine the next local action."
    ],
    "sourceReferences": [
      {
        "start": 1824.7,
        "end": 1853.39,
        "text": " But again, where it will get the subnet mask? How it will get the subnet mask? So that is done using the protocol something like bootp So bootp does not only return the IP address It also tells the subnet mask Also tells the IP address It also tells the default gateway address And it also tells the IP address of the DNS server And anyway, if you do not understand the DNS, you can skip it But yeah, this bootp does not only return the IP address It also returns what is the subnet mask?"
      },
      {
        "start": 3586.15,
        "end": 3615.54,
        "text": " Okay, so within the same network, there could be multiple DHCP servers also. So that is why that is why let's just see what is happening here. This is a client. If it is going to send the send the broadcast message for the request, which is called DHCP discover also. Okay, so if it is going to send the broadcast message, the first message is broadcast message, then if there are multiple servers, then it will be delivered to multiple servers. Right now any of the server, see earlier the mapping "
      }
    ],
    "start": 61
  },
  {
    "id": 62,
    "lecture": 20,
    "title": "Receive network settings with DHCP · Apply",
    "concept": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. DHCP commonly uses Discover, Offer, Request and Acknowledge (DORA) to lease configuration such as an IP address, subnet mask, gateway and DNS server.",
    "teachingSteps": [
      "Apply: Apply the switch or host rule to determine the next local action.",
      "DHCP commonly uses Discover, Offer, Request and Acknowledge (DORA) to lease configuration such as an IP address, subnet mask, gateway and DNS server.",
      "Identify whether the question concerns local or routed delivery."
    ],
    "foundation": {
      "title": "Receive network settings with DHCP",
      "idea": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. DHCP commonly uses Discover, Offer, Request and Acknowledge (DORA) to lease configuration such as an IP address, subnet mask, gateway and DNS server.",
      "terms": [
        "MAC address: A link-layer identifier used to deliver frames on a local network.",
        "ARP: The IPv4 LAN protocol that discovers a local next-hop MAC address.",
        "Broadcast domain: The portion of a LAN over which a link-layer broadcast is forwarded."
      ],
      "example": "A new client broadcasts DHCP Discover because it does not yet know its address; a server offers a lease, the client requests it, and the server acknowledges."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Receive network settings with DHCP · Apply: A new case changes one condition: In the common DORA sequence, what does the client send after receiving an Offer? Which conclusion still follows?",
        "options": [
          "Acknowledge",
          "Request",
          "Discover again as the next normal step"
        ],
        "answer": 1,
        "explanation": "Request. Apply the switch or host rule to determine the next local action."
      },
      {
        "type": "match",
        "prompt": "Receive network settings with DHCP · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Broadcast domain",
            "The portion of a LAN over which a link-layer broadcast is forwarded."
          ],
          [
            "MAC address",
            "A link-layer identifier used to deliver frames on a local network."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Receive network settings with DHCP · Apply: put the actions in a valid working sequence.",
        "items": [
          "Identify the local sender and destination",
          "Exchange or learn the needed LAN information",
          "Forward the frame without creating a loop"
        ],
        "explanation": "Identify whether the question concerns local or routed delivery. Follow the address, configuration or topology-control exchange. Apply the switch or host rule to determine the next local action."
      },
      {
        "type": "choice",
        "prompt": "Receive network settings with DHCP · Apply: which statement is accurate for receive network settings with dhcp?",
        "options": [
          "Request",
          "Acknowledge",
          "Discover again as the next normal step"
        ],
        "answer": 0,
        "explanation": "Request. DHCP commonly uses Discover, Offer, Request and Acknowledge (DORA) to lease configuration such as an IP address, subnet mask, gateway and DNS server."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "lan",
      "mode": "dhcp",
      "lecture": 20
    },
    "cnScene": [
      "Identify whether the question concerns local or routed delivery.",
      "DHCP commonly uses Discover, Offer, Request and Acknowledge (DORA) to lease configuration such as an IP address, subnet mask, gateway and DNS server.",
      "Apply the switch or host rule to determine the next local action."
    ],
    "sourceReferences": [
      {
        "start": 1824.7,
        "end": 1853.39,
        "text": " But again, where it will get the subnet mask? How it will get the subnet mask? So that is done using the protocol something like bootp So bootp does not only return the IP address It also tells the subnet mask Also tells the IP address It also tells the default gateway address And it also tells the IP address of the DNS server And anyway, if you do not understand the DNS, you can skip it But yeah, this bootp does not only return the IP address It also returns what is the subnet mask?"
      },
      {
        "start": 3586.15,
        "end": 3615.54,
        "text": " Okay, so within the same network, there could be multiple DHCP servers also. So that is why that is why let's just see what is happening here. This is a client. If it is going to send the send the broadcast message for the request, which is called DHCP discover also. Okay, so if it is going to send the broadcast message, the first message is broadcast message, then if there are multiple servers, then it will be delivered to multiple servers. Right now any of the server, see earlier the mapping "
      }
    ],
    "start": 62
  },
  {
    "id": 63,
    "lecture": 21,
    "title": "Prevent switching loops with spanning tree · Discover",
    "concept": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. Spanning Tree Protocol selects a root bridge and blocks redundant Layer-2 paths so the active topology is loop-free. A blocked redundant link can become active after a failure.",
    "teachingSteps": [
      "Discover: Identify whether the question concerns local or routed delivery.",
      "Spanning Tree Protocol selects a root bridge and blocks redundant Layer-2 paths so the active topology is loop-free. A blocked redundant link can become active after a failure.",
      "Follow the address, configuration or topology-control exchange."
    ],
    "foundation": {
      "title": "Prevent switching loops with spanning tree",
      "idea": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. Spanning Tree Protocol selects a root bridge and blocks redundant Layer-2 paths so the active topology is loop-free. A blocked redundant link can become active after a failure.",
      "terms": [
        "MAC address: A link-layer identifier used to deliver frames on a local network.",
        "ARP: The IPv4 LAN protocol that discovers a local next-hop MAC address.",
        "Broadcast domain: The portion of a LAN over which a link-layer broadcast is forwarded."
      ],
      "example": "Two switches connected by two cables can form a broadcast loop; STP leaves one path forwarding and blocks the other until topology changes."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Prevent switching loops with spanning tree · Discover: Why does STP block one of two redundant Layer-2 links? Which networking rule determines the result?",
        "options": [
          "To prevent a forwarding loop while keeping a backup path",
          "To make the switches use IP instead of MAC addresses",
          "To encrypt broadcast frames"
        ],
        "answer": 0,
        "explanation": "To prevent a forwarding loop while keeping a backup path. Identify whether the question concerns local or routed delivery."
      },
      {
        "type": "match",
        "prompt": "Prevent switching loops with spanning tree · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "MAC address",
            "A link-layer identifier used to deliver frames on a local network."
          ],
          [
            "ARP",
            "The IPv4 LAN protocol that discovers a local next-hop MAC address."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Prevent switching loops with spanning tree · Discover: put the actions in a valid working sequence.",
        "items": [
          "Identify the local sender and destination",
          "Exchange or learn the needed LAN information",
          "Forward the frame without creating a loop"
        ],
        "explanation": "Identify whether the question concerns local or routed delivery. Follow the address, configuration or topology-control exchange. Apply the switch or host rule to determine the next local action."
      },
      {
        "type": "choice",
        "prompt": "Prevent switching loops with spanning tree · Discover: which statement is accurate for prevent switching loops with spanning tree?",
        "options": [
          "To prevent a forwarding loop while keeping a backup path",
          "To make the switches use IP instead of MAC addresses",
          "To encrypt broadcast frames"
        ],
        "answer": 0,
        "explanation": "To prevent a forwarding loop while keeping a backup path. Spanning Tree Protocol selects a root bridge and blocks redundant Layer-2 paths so the active topology is loop-free. A blocked redundant link can become active after a failure."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "lan",
      "mode": "stp",
      "lecture": 21
    },
    "cnScene": [
      "Identify whether the question concerns local or routed delivery.",
      "Spanning Tree Protocol selects a root bridge and blocks redundant Layer-2 paths so the active topology is loop-free. A blocked redundant link can become active after a failure.",
      "Apply the switch or host rule to determine the next local action."
    ],
    "sourceReferences": [
      {
        "start": 664.99,
        "end": 692.91,
        "text": " So what like this is the topology this is the actual or maybe using the graph I can represent what my goal is that my goal is to convert this graph or maybe this topology to a spanning tree basically what I want I want to say that okay instead of a loop which was a loop here I want to say that if I want to forward some packet then I will never forward I will just block some of the ports I will say I will never forward using this link okay if I break this link let's suppose somehow"
      },
      {
        "start": 1903.52,
        "end": 1937.44,
        "text": " this I mean apart from all that regenerating root if you remove these two then you are going to get this one. That is very easy algorithm. Let us just run it on one more example. Let us suppose that they have given this topology and then what they are asking indicate the port or the edges that are not selected by spanning tree protocol. So, basically they want to run a spanning tree algorithm on this particular example. Let us just quickly do it. So, what is a root bridge?"
      }
    ],
    "start": 63
  },
  {
    "id": 64,
    "lecture": 21,
    "title": "Prevent switching loops with spanning tree · Explore",
    "concept": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. Spanning Tree Protocol selects a root bridge and blocks redundant Layer-2 paths so the active topology is loop-free. A blocked redundant link can become active after a failure.",
    "teachingSteps": [
      "Explore: Follow the address, configuration or topology-control exchange.",
      "Spanning Tree Protocol selects a root bridge and blocks redundant Layer-2 paths so the active topology is loop-free. A blocked redundant link can become active after a failure.",
      "Apply the switch or host rule to determine the next local action."
    ],
    "foundation": {
      "title": "Prevent switching loops with spanning tree",
      "idea": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. Spanning Tree Protocol selects a root bridge and blocks redundant Layer-2 paths so the active topology is loop-free. A blocked redundant link can become active after a failure.",
      "terms": [
        "MAC address: A link-layer identifier used to deliver frames on a local network.",
        "ARP: The IPv4 LAN protocol that discovers a local next-hop MAC address.",
        "Broadcast domain: The portion of a LAN over which a link-layer broadcast is forwarded."
      ],
      "example": "Two switches connected by two cables can form a broadcast loop; STP leaves one path forwarding and blocks the other until topology changes."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Prevent switching loops with spanning tree · Explore: Why does STP block one of two redundant Layer-2 links? Which step should the host or router take next?",
        "options": [
          "Identify the local sender and destination",
          "Exchange or learn the needed LAN information",
          "Forward the frame without creating a loop"
        ],
        "answer": 1,
        "explanation": "Exchange or learn the needed LAN information. Follow the address, configuration or topology-control exchange."
      },
      {
        "type": "match",
        "prompt": "Prevent switching loops with spanning tree · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "ARP",
            "The IPv4 LAN protocol that discovers a local next-hop MAC address."
          ],
          [
            "Broadcast domain",
            "The portion of a LAN over which a link-layer broadcast is forwarded."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Prevent switching loops with spanning tree · Explore: put the actions in a valid working sequence.",
        "items": [
          "Identify the local sender and destination",
          "Exchange or learn the needed LAN information",
          "Forward the frame without creating a loop"
        ],
        "explanation": "Identify whether the question concerns local or routed delivery. Follow the address, configuration or topology-control exchange. Apply the switch or host rule to determine the next local action."
      },
      {
        "type": "choice",
        "prompt": "Prevent switching loops with spanning tree · Explore: which statement is accurate for prevent switching loops with spanning tree?",
        "options": [
          "To prevent a forwarding loop while keeping a backup path",
          "To make the switches use IP instead of MAC addresses",
          "To encrypt broadcast frames"
        ],
        "answer": 0,
        "explanation": "To prevent a forwarding loop while keeping a backup path. Spanning Tree Protocol selects a root bridge and blocks redundant Layer-2 paths so the active topology is loop-free. A blocked redundant link can become active after a failure."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "lan",
      "mode": "stp",
      "lecture": 21
    },
    "cnScene": [
      "Identify whether the question concerns local or routed delivery.",
      "Spanning Tree Protocol selects a root bridge and blocks redundant Layer-2 paths so the active topology is loop-free. A blocked redundant link can become active after a failure.",
      "Apply the switch or host rule to determine the next local action."
    ],
    "sourceReferences": [
      {
        "start": 664.99,
        "end": 692.91,
        "text": " So what like this is the topology this is the actual or maybe using the graph I can represent what my goal is that my goal is to convert this graph or maybe this topology to a spanning tree basically what I want I want to say that okay instead of a loop which was a loop here I want to say that if I want to forward some packet then I will never forward I will just block some of the ports I will say I will never forward using this link okay if I break this link let's suppose somehow"
      },
      {
        "start": 1903.52,
        "end": 1937.44,
        "text": " this I mean apart from all that regenerating root if you remove these two then you are going to get this one. That is very easy algorithm. Let us just run it on one more example. Let us suppose that they have given this topology and then what they are asking indicate the port or the edges that are not selected by spanning tree protocol. So, basically they want to run a spanning tree algorithm on this particular example. Let us just quickly do it. So, what is a root bridge?"
      }
    ],
    "start": 64
  },
  {
    "id": 65,
    "lecture": 21,
    "title": "Prevent switching loops with spanning tree · Apply",
    "concept": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. Spanning Tree Protocol selects a root bridge and blocks redundant Layer-2 paths so the active topology is loop-free. A blocked redundant link can become active after a failure.",
    "teachingSteps": [
      "Apply: Apply the switch or host rule to determine the next local action.",
      "Spanning Tree Protocol selects a root bridge and blocks redundant Layer-2 paths so the active topology is loop-free. A blocked redundant link can become active after a failure.",
      "Identify whether the question concerns local or routed delivery."
    ],
    "foundation": {
      "title": "Prevent switching loops with spanning tree",
      "idea": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. Spanning Tree Protocol selects a root bridge and blocks redundant Layer-2 paths so the active topology is loop-free. A blocked redundant link can become active after a failure.",
      "terms": [
        "MAC address: A link-layer identifier used to deliver frames on a local network.",
        "ARP: The IPv4 LAN protocol that discovers a local next-hop MAC address.",
        "Broadcast domain: The portion of a LAN over which a link-layer broadcast is forwarded."
      ],
      "example": "Two switches connected by two cables can form a broadcast loop; STP leaves one path forwarding and blocks the other until topology changes."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Prevent switching loops with spanning tree · Apply: A new case changes one condition: Why does STP block one of two redundant Layer-2 links? Which conclusion still follows?",
        "options": [
          "To make the switches use IP instead of MAC addresses",
          "To encrypt broadcast frames",
          "To prevent a forwarding loop while keeping a backup path"
        ],
        "answer": 2,
        "explanation": "To prevent a forwarding loop while keeping a backup path. Apply the switch or host rule to determine the next local action."
      },
      {
        "type": "match",
        "prompt": "Prevent switching loops with spanning tree · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Broadcast domain",
            "The portion of a LAN over which a link-layer broadcast is forwarded."
          ],
          [
            "MAC address",
            "A link-layer identifier used to deliver frames on a local network."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Prevent switching loops with spanning tree · Apply: put the actions in a valid working sequence.",
        "items": [
          "Identify the local sender and destination",
          "Exchange or learn the needed LAN information",
          "Forward the frame without creating a loop"
        ],
        "explanation": "Identify whether the question concerns local or routed delivery. Follow the address, configuration or topology-control exchange. Apply the switch or host rule to determine the next local action."
      },
      {
        "type": "choice",
        "prompt": "Prevent switching loops with spanning tree · Apply: which statement is accurate for prevent switching loops with spanning tree?",
        "options": [
          "To prevent a forwarding loop while keeping a backup path",
          "To make the switches use IP instead of MAC addresses",
          "To encrypt broadcast frames"
        ],
        "answer": 0,
        "explanation": "To prevent a forwarding loop while keeping a backup path. Spanning Tree Protocol selects a root bridge and blocks redundant Layer-2 paths so the active topology is loop-free. A blocked redundant link can become active after a failure."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "lan",
      "mode": "stp",
      "lecture": 21
    },
    "cnScene": [
      "Identify whether the question concerns local or routed delivery.",
      "Spanning Tree Protocol selects a root bridge and blocks redundant Layer-2 paths so the active topology is loop-free. A blocked redundant link can become active after a failure.",
      "Apply the switch or host rule to determine the next local action."
    ],
    "sourceReferences": [
      {
        "start": 664.99,
        "end": 692.91,
        "text": " So what like this is the topology this is the actual or maybe using the graph I can represent what my goal is that my goal is to convert this graph or maybe this topology to a spanning tree basically what I want I want to say that okay instead of a loop which was a loop here I want to say that if I want to forward some packet then I will never forward I will just block some of the ports I will say I will never forward using this link okay if I break this link let's suppose somehow"
      },
      {
        "start": 1903.52,
        "end": 1937.44,
        "text": " this I mean apart from all that regenerating root if you remove these two then you are going to get this one. That is very easy algorithm. Let us just run it on one more example. Let us suppose that they have given this topology and then what they are asking indicate the port or the edges that are not selected by spanning tree protocol. So, basically they want to run a spanning tree algorithm on this particular example. Let us just quickly do it. So, what is a root bridge?"
      }
    ],
    "start": 65
  },
  {
    "id": 66,
    "lecture": 22,
    "title": "Choose the right networking device · Discover",
    "concept": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. A repeater or hub extends a physical signal, a switch forwards frames within a LAN using MAC learning, and a router forwards packets between IP networks.",
    "teachingSteps": [
      "Discover: Identify whether the question concerns local or routed delivery.",
      "A repeater or hub extends a physical signal, a switch forwards frames within a LAN using MAC learning, and a router forwards packets between IP networks.",
      "Follow the address, configuration or topology-control exchange."
    ],
    "foundation": {
      "title": "Choose the right networking device",
      "idea": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. A repeater or hub extends a physical signal, a switch forwards frames within a LAN using MAC learning, and a router forwards packets between IP networks.",
      "terms": [
        "MAC address: A link-layer identifier used to deliver frames on a local network.",
        "ARP: The IPv4 LAN protocol that discovers a local next-hop MAC address.",
        "Broadcast domain: The portion of a LAN over which a link-layer broadcast is forwarded."
      ],
      "example": "A switch learns source MAC addresses on ports; when it knows the destination port it forwards there, while a router chooses a next hop from its IP routing table."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Choose the right networking device · Discover: Which device forwards an IP packet between different networks? Which networking rule determines the result?",
        "options": [
          "Repeater",
          "Router",
          "Layer-2 hub"
        ],
        "answer": 1,
        "explanation": "Router. Identify whether the question concerns local or routed delivery."
      },
      {
        "type": "match",
        "prompt": "Choose the right networking device · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "MAC address",
            "A link-layer identifier used to deliver frames on a local network."
          ],
          [
            "ARP",
            "The IPv4 LAN protocol that discovers a local next-hop MAC address."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Choose the right networking device · Discover: put the actions in a valid working sequence.",
        "items": [
          "Identify the local sender and destination",
          "Exchange or learn the needed LAN information",
          "Forward the frame without creating a loop"
        ],
        "explanation": "Identify whether the question concerns local or routed delivery. Follow the address, configuration or topology-control exchange. Apply the switch or host rule to determine the next local action."
      },
      {
        "type": "choice",
        "prompt": "Choose the right networking device · Discover: which statement is accurate for choose the right networking device?",
        "options": [
          "Router",
          "Repeater",
          "Layer-2 hub"
        ],
        "answer": 0,
        "explanation": "Router. A repeater or hub extends a physical signal, a switch forwards frames within a LAN using MAC learning, and a router forwards packets between IP networks."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "lan",
      "mode": "devices",
      "lecture": 22
    },
    "cnScene": [
      "Identify whether the question concerns local or routed delivery.",
      "A repeater or hub extends a physical signal, a switch forwards frames within a LAN using MAC learning, and a router forwards packets between IP networks.",
      "Apply the switch or host rule to determine the next local action."
    ],
    "sourceReferences": [
      {
        "start": 575.56,
        "end": 605.93,
        "text": " So this hubs and repeaters are just like very, very dumb devices that just connect a multiple host. Now, there is one device that is called switch. So let's just see the switch hubs are simply multiple devices, facilitating the scaling communication between additional host just like just like a repeater, which, which, which connects to or more host probably, but hubs just connect more host than the repeater. Everyone receives everyone else data. This is very important, right? Everyone receives "
      },
      {
        "start": 2466.21,
        "end": 2499.33,
        "text": " To connect two switches right facilitate the communication between the networks, right? So basically whenever putting the router You will say this is one network or one subnet Okay, this is another subnet or another network. There is no difference between some network or network So this is another subnet. So basically the switches used to communicate within within a network, right? This within term is important here. The switches. There is this entire thing is just one network Just one network "
      }
    ],
    "start": 66
  },
  {
    "id": 67,
    "lecture": 22,
    "title": "Choose the right networking device · Explore",
    "concept": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. A repeater or hub extends a physical signal, a switch forwards frames within a LAN using MAC learning, and a router forwards packets between IP networks.",
    "teachingSteps": [
      "Explore: Follow the address, configuration or topology-control exchange.",
      "A repeater or hub extends a physical signal, a switch forwards frames within a LAN using MAC learning, and a router forwards packets between IP networks.",
      "Apply the switch or host rule to determine the next local action."
    ],
    "foundation": {
      "title": "Choose the right networking device",
      "idea": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. A repeater or hub extends a physical signal, a switch forwards frames within a LAN using MAC learning, and a router forwards packets between IP networks.",
      "terms": [
        "MAC address: A link-layer identifier used to deliver frames on a local network.",
        "ARP: The IPv4 LAN protocol that discovers a local next-hop MAC address.",
        "Broadcast domain: The portion of a LAN over which a link-layer broadcast is forwarded."
      ],
      "example": "A switch learns source MAC addresses on ports; when it knows the destination port it forwards there, while a router chooses a next hop from its IP routing table."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Choose the right networking device · Explore: Which device forwards an IP packet between different networks? Which step should the host or router take next?",
        "options": [
          "Identify the local sender and destination",
          "Forward the frame without creating a loop",
          "Exchange or learn the needed LAN information"
        ],
        "answer": 2,
        "explanation": "Exchange or learn the needed LAN information. Follow the address, configuration or topology-control exchange."
      },
      {
        "type": "match",
        "prompt": "Choose the right networking device · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "ARP",
            "The IPv4 LAN protocol that discovers a local next-hop MAC address."
          ],
          [
            "Broadcast domain",
            "The portion of a LAN over which a link-layer broadcast is forwarded."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Choose the right networking device · Explore: put the actions in a valid working sequence.",
        "items": [
          "Identify the local sender and destination",
          "Exchange or learn the needed LAN information",
          "Forward the frame without creating a loop"
        ],
        "explanation": "Identify whether the question concerns local or routed delivery. Follow the address, configuration or topology-control exchange. Apply the switch or host rule to determine the next local action."
      },
      {
        "type": "choice",
        "prompt": "Choose the right networking device · Explore: which statement is accurate for choose the right networking device?",
        "options": [
          "Router",
          "Repeater",
          "Layer-2 hub"
        ],
        "answer": 0,
        "explanation": "Router. A repeater or hub extends a physical signal, a switch forwards frames within a LAN using MAC learning, and a router forwards packets between IP networks."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "lan",
      "mode": "devices",
      "lecture": 22
    },
    "cnScene": [
      "Identify whether the question concerns local or routed delivery.",
      "A repeater or hub extends a physical signal, a switch forwards frames within a LAN using MAC learning, and a router forwards packets between IP networks.",
      "Apply the switch or host rule to determine the next local action."
    ],
    "sourceReferences": [
      {
        "start": 575.56,
        "end": 605.93,
        "text": " So this hubs and repeaters are just like very, very dumb devices that just connect a multiple host. Now, there is one device that is called switch. So let's just see the switch hubs are simply multiple devices, facilitating the scaling communication between additional host just like just like a repeater, which, which, which connects to or more host probably, but hubs just connect more host than the repeater. Everyone receives everyone else data. This is very important, right? Everyone receives "
      },
      {
        "start": 2466.21,
        "end": 2499.33,
        "text": " To connect two switches right facilitate the communication between the networks, right? So basically whenever putting the router You will say this is one network or one subnet Okay, this is another subnet or another network. There is no difference between some network or network So this is another subnet. So basically the switches used to communicate within within a network, right? This within term is important here. The switches. There is this entire thing is just one network Just one network "
      }
    ],
    "start": 67
  },
  {
    "id": 68,
    "lecture": 22,
    "title": "Choose the right networking device · Apply",
    "concept": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. A repeater or hub extends a physical signal, a switch forwards frames within a LAN using MAC learning, and a router forwards packets between IP networks.",
    "teachingSteps": [
      "Apply: Apply the switch or host rule to determine the next local action.",
      "A repeater or hub extends a physical signal, a switch forwards frames within a LAN using MAC learning, and a router forwards packets between IP networks.",
      "Identify whether the question concerns local or routed delivery."
    ],
    "foundation": {
      "title": "Choose the right networking device",
      "idea": "A local network uses link-layer addressing and switching to deliver frames on one segment. Address resolution, configuration protocols and loop prevention help hosts and switches operate together. A repeater or hub extends a physical signal, a switch forwards frames within a LAN using MAC learning, and a router forwards packets between IP networks.",
      "terms": [
        "MAC address: A link-layer identifier used to deliver frames on a local network.",
        "ARP: The IPv4 LAN protocol that discovers a local next-hop MAC address.",
        "Broadcast domain: The portion of a LAN over which a link-layer broadcast is forwarded."
      ],
      "example": "A switch learns source MAC addresses on ports; when it knows the destination port it forwards there, while a router chooses a next hop from its IP routing table."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Choose the right networking device · Apply: A new case changes one condition: Which device forwards an IP packet between different networks? Which conclusion still follows?",
        "options": [
          "Router",
          "Repeater",
          "Layer-2 hub"
        ],
        "answer": 0,
        "explanation": "Router. Apply the switch or host rule to determine the next local action."
      },
      {
        "type": "match",
        "prompt": "Choose the right networking device · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Broadcast domain",
            "The portion of a LAN over which a link-layer broadcast is forwarded."
          ],
          [
            "MAC address",
            "A link-layer identifier used to deliver frames on a local network."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Choose the right networking device · Apply: put the actions in a valid working sequence.",
        "items": [
          "Identify the local sender and destination",
          "Exchange or learn the needed LAN information",
          "Forward the frame without creating a loop"
        ],
        "explanation": "Identify whether the question concerns local or routed delivery. Follow the address, configuration or topology-control exchange. Apply the switch or host rule to determine the next local action."
      },
      {
        "type": "choice",
        "prompt": "Choose the right networking device · Apply: which statement is accurate for choose the right networking device?",
        "options": [
          "Router",
          "Repeater",
          "Layer-2 hub"
        ],
        "answer": 0,
        "explanation": "Router. A repeater or hub extends a physical signal, a switch forwards frames within a LAN using MAC learning, and a router forwards packets between IP networks."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "lan",
      "mode": "devices",
      "lecture": 22
    },
    "cnScene": [
      "Identify whether the question concerns local or routed delivery.",
      "A repeater or hub extends a physical signal, a switch forwards frames within a LAN using MAC learning, and a router forwards packets between IP networks.",
      "Apply the switch or host rule to determine the next local action."
    ],
    "sourceReferences": [
      {
        "start": 575.56,
        "end": 605.93,
        "text": " So this hubs and repeaters are just like very, very dumb devices that just connect a multiple host. Now, there is one device that is called switch. So let's just see the switch hubs are simply multiple devices, facilitating the scaling communication between additional host just like just like a repeater, which, which, which connects to or more host probably, but hubs just connect more host than the repeater. Everyone receives everyone else data. This is very important, right? Everyone receives "
      },
      {
        "start": 2466.21,
        "end": 2499.33,
        "text": " To connect two switches right facilitate the communication between the networks, right? So basically whenever putting the router You will say this is one network or one subnet Okay, this is another subnet or another network. There is no difference between some network or network So this is another subnet. So basically the switches used to communicate within within a network, right? This within term is important here. The switches. There is this entire thing is just one network Just one network "
      }
    ],
    "start": 68
  },
  {
    "id": 69,
    "lecture": 23,
    "title": "Read the IPv4 header and fragment a datagram · Discover",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. IPv4 carries fields such as source, destination, TTL, protocol, total length and fragmentation metadata. If a packet exceeds a link MTU, fragmentation divides its payload and records offsets in 8-byte units.",
    "teachingSteps": [
      "Discover: Identify the application task and client/server roles.",
      "IPv4 carries fields such as source, destination, TTL, protocol, total length and fragmentation metadata. If a packet exceeds a link MTU, fragmentation divides its payload and records offsets in 8-byte units.",
      "Follow the request, lookup, transfer or response sequence."
    ],
    "foundation": {
      "title": "Read the IPv4 header and fragment a datagram",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. IPv4 carries fields such as source, destination, TTL, protocol, total length and fragmentation metadata. If a packet exceeds a link MTU, fragmentation divides its payload and records offsets in 8-byte units.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "With a 20-byte IPv4 header and a 1,500-byte MTU, a full-sized fragment can carry at most 1,480 payload bytes, which is divisible by 8."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Read the IPv4 header and fragment a datagram · Discover: IPv4 fragment offsets are measured in units of how many payload bytes? Which networking rule determines the result?",
        "options": [
          "1 byte",
          "20 bytes",
          "8 bytes"
        ],
        "answer": 2,
        "explanation": "8 bytes. Identify the application task and client/server roles."
      },
      {
        "type": "match",
        "prompt": "Read the IPv4 header and fragment a datagram · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Application protocol",
            "A rule for messages exchanged by networked programs."
          ],
          [
            "Client",
            "The program that initiates a request for a service."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Read the IPv4 header and fragment a datagram · Discover: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Read the IPv4 header and fragment a datagram · Discover: which statement is accurate for read the ipv4 header and fragment a datagram?",
        "options": [
          "8 bytes",
          "1 byte",
          "20 bytes"
        ],
        "answer": 0,
        "explanation": "8 bytes. IPv4 carries fields such as source, destination, TTL, protocol, total length and fragmentation metadata. If a packet exceeds a link MTU, fragmentation divides its payload and records offsets in 8-byte units."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "fragment",
      "mode": "fragment",
      "lecture": 23
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "IPv4 carries fields such as source, destination, TTL, protocol, total length and fragmentation metadata. If a packet exceeds a link MTU, fragmentation divides its payload and records offsets in 8-byte units.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 4543.93,
        "end": 4573.22,
        "text": " all the fields i hope you understood very well right all of this let me know if there is any doubt in any of this field okay don't worry about this type of service and options uh that's not being used okay other than that version is fine header length ip header length whatever you want to say h le and h l okay ihl whatever you want to say but yeah that is okay this total length i hope fine these things we are going to see next okay just next this is the fragmentation related"
      },
      {
        "start": 9582.89,
        "end": 9616.41,
        "text": " So these are the values of fragment offsets, right? Basically, for every datagram, I exactly know that how many bytes it is following, right? I mean, before that, how many bytes it is there? So what is this 185 into 2? Anyway, we can do this. This is 370, right? Okay, understood. How to calculate the fragment offsets? Now, the other fields are extremely easy. Whatever they're asking, let's suppose the other fields they're asking is total length and more fragment."
      }
    ],
    "start": 69
  },
  {
    "id": 70,
    "lecture": 23,
    "title": "Read the IPv4 header and fragment a datagram · Explore",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. IPv4 carries fields such as source, destination, TTL, protocol, total length and fragmentation metadata. If a packet exceeds a link MTU, fragmentation divides its payload and records offsets in 8-byte units.",
    "teachingSteps": [
      "Explore: Follow the request, lookup, transfer or response sequence.",
      "IPv4 carries fields such as source, destination, TTL, protocol, total length and fragmentation metadata. If a packet exceeds a link MTU, fragmentation divides its payload and records offsets in 8-byte units.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "foundation": {
      "title": "Read the IPv4 header and fragment a datagram",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. IPv4 carries fields such as source, destination, TTL, protocol, total length and fragmentation metadata. If a packet exceeds a link MTU, fragmentation divides its payload and records offsets in 8-byte units.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "With a 20-byte IPv4 header and a 1,500-byte MTU, a full-sized fragment can carry at most 1,480 payload bytes, which is divisible by 8."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Read the IPv4 header and fragment a datagram · Explore: IPv4 fragment offsets are measured in units of how many payload bytes? Which step should the host or router take next?",
        "options": [
          "Send the protocol request or command",
          "Choose the application service and its endpoint",
          "Read the response and follow-up action"
        ],
        "answer": 0,
        "explanation": "Send the protocol request or command. Follow the request, lookup, transfer or response sequence."
      },
      {
        "type": "match",
        "prompt": "Read the IPv4 header and fragment a datagram · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Client",
            "The program that initiates a request for a service."
          ],
          [
            "Server",
            "The program that listens for requests and returns a response."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Read the IPv4 header and fragment a datagram · Explore: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Read the IPv4 header and fragment a datagram · Explore: which statement is accurate for read the ipv4 header and fragment a datagram?",
        "options": [
          "8 bytes",
          "1 byte",
          "20 bytes"
        ],
        "answer": 0,
        "explanation": "8 bytes. IPv4 carries fields such as source, destination, TTL, protocol, total length and fragmentation metadata. If a packet exceeds a link MTU, fragmentation divides its payload and records offsets in 8-byte units."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "fragment",
      "mode": "fragment",
      "lecture": 23
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "IPv4 carries fields such as source, destination, TTL, protocol, total length and fragmentation metadata. If a packet exceeds a link MTU, fragmentation divides its payload and records offsets in 8-byte units.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 4543.93,
        "end": 4573.22,
        "text": " all the fields i hope you understood very well right all of this let me know if there is any doubt in any of this field okay don't worry about this type of service and options uh that's not being used okay other than that version is fine header length ip header length whatever you want to say h le and h l okay ihl whatever you want to say but yeah that is okay this total length i hope fine these things we are going to see next okay just next this is the fragmentation related"
      },
      {
        "start": 9582.89,
        "end": 9616.41,
        "text": " So these are the values of fragment offsets, right? Basically, for every datagram, I exactly know that how many bytes it is following, right? I mean, before that, how many bytes it is there? So what is this 185 into 2? Anyway, we can do this. This is 370, right? Okay, understood. How to calculate the fragment offsets? Now, the other fields are extremely easy. Whatever they're asking, let's suppose the other fields they're asking is total length and more fragment."
      }
    ],
    "start": 70
  },
  {
    "id": 71,
    "lecture": 23,
    "title": "Read the IPv4 header and fragment a datagram · Apply",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. IPv4 carries fields such as source, destination, TTL, protocol, total length and fragmentation metadata. If a packet exceeds a link MTU, fragmentation divides its payload and records offsets in 8-byte units.",
    "teachingSteps": [
      "Apply: Distinguish the application protocol from the transport and network beneath it.",
      "IPv4 carries fields such as source, destination, TTL, protocol, total length and fragmentation metadata. If a packet exceeds a link MTU, fragmentation divides its payload and records offsets in 8-byte units.",
      "Identify the application task and client/server roles."
    ],
    "foundation": {
      "title": "Read the IPv4 header and fragment a datagram",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. IPv4 carries fields such as source, destination, TTL, protocol, total length and fragmentation metadata. If a packet exceeds a link MTU, fragmentation divides its payload and records offsets in 8-byte units.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "With a 20-byte IPv4 header and a 1,500-byte MTU, a full-sized fragment can carry at most 1,480 payload bytes, which is divisible by 8."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Read the IPv4 header and fragment a datagram · Apply: A new case changes one condition: IPv4 fragment offsets are measured in units of how many payload bytes? Which conclusion still follows?",
        "options": [
          "1 byte",
          "8 bytes",
          "20 bytes"
        ],
        "answer": 1,
        "explanation": "8 bytes. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "match",
        "prompt": "Read the IPv4 header and fragment a datagram · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Server",
            "The program that listens for requests and returns a response."
          ],
          [
            "Application protocol",
            "A rule for messages exchanged by networked programs."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Read the IPv4 header and fragment a datagram · Apply: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Read the IPv4 header and fragment a datagram · Apply: which statement is accurate for read the ipv4 header and fragment a datagram?",
        "options": [
          "8 bytes",
          "1 byte",
          "20 bytes"
        ],
        "answer": 0,
        "explanation": "8 bytes. IPv4 carries fields such as source, destination, TTL, protocol, total length and fragmentation metadata. If a packet exceeds a link MTU, fragmentation divides its payload and records offsets in 8-byte units."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "fragment",
      "mode": "fragment",
      "lecture": 23
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "IPv4 carries fields such as source, destination, TTL, protocol, total length and fragmentation metadata. If a packet exceeds a link MTU, fragmentation divides its payload and records offsets in 8-byte units.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 4543.93,
        "end": 4573.22,
        "text": " all the fields i hope you understood very well right all of this let me know if there is any doubt in any of this field okay don't worry about this type of service and options uh that's not being used okay other than that version is fine header length ip header length whatever you want to say h le and h l okay ihl whatever you want to say but yeah that is okay this total length i hope fine these things we are going to see next okay just next this is the fragmentation related"
      },
      {
        "start": 9582.89,
        "end": 9616.41,
        "text": " So these are the values of fragment offsets, right? Basically, for every datagram, I exactly know that how many bytes it is following, right? I mean, before that, how many bytes it is there? So what is this 185 into 2? Anyway, we can do this. This is 370, right? Okay, understood. How to calculate the fragment offsets? Now, the other fields are extremely easy. Whatever they're asking, let's suppose the other fields they're asking is total length and more fragment."
      }
    ],
    "start": 71
  },
  {
    "id": 72,
    "lecture": 24,
    "title": "Calculate fragment offsets and flags · Discover",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. Each fragment has its own IP header. The offset locates its payload within the original datagram in 8-byte units, and MF is set on every fragment except the last.",
    "teachingSteps": [
      "Discover: Identify the application task and client/server roles.",
      "Each fragment has its own IP header. The offset locates its payload within the original datagram in 8-byte units, and MF is set on every fragment except the last.",
      "Follow the request, lookup, transfer or response sequence."
    ],
    "foundation": {
      "title": "Calculate fragment offsets and flags",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. Each fragment has its own IP header. The offset locates its payload within the original datagram in 8-byte units, and MF is set on every fragment except the last.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "If the first fragment carries 1,480 payload bytes, the next fragment’s offset is 1,480 / 8 = 185."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Calculate fragment offsets and flags · Discover: A fragment begins 1,480 payload bytes into the original datagram. What offset value is stored? Which networking rule determines the result?",
        "options": [
          "185",
          "1,480",
          "148"
        ],
        "answer": 0,
        "explanation": "185. Identify the application task and client/server roles."
      },
      {
        "type": "match",
        "prompt": "Calculate fragment offsets and flags · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Application protocol",
            "A rule for messages exchanged by networked programs."
          ],
          [
            "Client",
            "The program that initiates a request for a service."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Calculate fragment offsets and flags · Discover: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Calculate fragment offsets and flags · Discover: which statement is accurate for calculate fragment offsets and flags?",
        "options": [
          "185",
          "1,480",
          "148"
        ],
        "answer": 0,
        "explanation": "185. Each fragment has its own IP header. The offset locates its payload within the original datagram in 8-byte units, and MF is set on every fragment except the last."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "fragment",
      "mode": "fragment",
      "lecture": 24
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "Each fragment has its own IP header. The offset locates its payload within the original datagram in 8-byte units, and MF is set on every fragment except the last.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 701.03,
        "end": 729.45,
        "text": " because since no one is setting its fragment offset based on him that is why the last fragment could be anything okay so this is the current structure don't worry we will be having more questions and I will be writing everything in the annotator notes so for now let's just see what is the fragment offset we are getting 24,000 I hope that is fine okay so anyway like fragment offset you can definitely calculate it is just a divided by 8 right it is just divided by 8 okay now let's just do one thi"
      },
      {
        "start": 877.58,
        "end": 914.3,
        "text": " fragment offsets of this particular division okay for every packet so finally the fragments finally how many packets you are getting so finally as you can see this is 1 2 3 4 5 packets you are getting so what are the fragment offsets let's just see what is the fragment offset here it will be 0 what is the fragment offset here it will be 56 right i mean after it there are 56 bytes so you just need to divide by 8 so it will be 7 right what is the fragment offset here 7 plus 5 right 12"
      }
    ],
    "start": 72
  },
  {
    "id": 73,
    "lecture": 24,
    "title": "Calculate fragment offsets and flags · Explore",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. Each fragment has its own IP header. The offset locates its payload within the original datagram in 8-byte units, and MF is set on every fragment except the last.",
    "teachingSteps": [
      "Explore: Follow the request, lookup, transfer or response sequence.",
      "Each fragment has its own IP header. The offset locates its payload within the original datagram in 8-byte units, and MF is set on every fragment except the last.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "foundation": {
      "title": "Calculate fragment offsets and flags",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. Each fragment has its own IP header. The offset locates its payload within the original datagram in 8-byte units, and MF is set on every fragment except the last.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "If the first fragment carries 1,480 payload bytes, the next fragment’s offset is 1,480 / 8 = 185."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Calculate fragment offsets and flags · Explore: A fragment begins 1,480 payload bytes into the original datagram. What offset value is stored? Which step should the host or router take next?",
        "options": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "answer": 1,
        "explanation": "Send the protocol request or command. Follow the request, lookup, transfer or response sequence."
      },
      {
        "type": "match",
        "prompt": "Calculate fragment offsets and flags · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Client",
            "The program that initiates a request for a service."
          ],
          [
            "Server",
            "The program that listens for requests and returns a response."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Calculate fragment offsets and flags · Explore: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Calculate fragment offsets and flags · Explore: which statement is accurate for calculate fragment offsets and flags?",
        "options": [
          "185",
          "1,480",
          "148"
        ],
        "answer": 0,
        "explanation": "185. Each fragment has its own IP header. The offset locates its payload within the original datagram in 8-byte units, and MF is set on every fragment except the last."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "fragment",
      "mode": "fragment",
      "lecture": 24
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "Each fragment has its own IP header. The offset locates its payload within the original datagram in 8-byte units, and MF is set on every fragment except the last.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 701.03,
        "end": 729.45,
        "text": " because since no one is setting its fragment offset based on him that is why the last fragment could be anything okay so this is the current structure don't worry we will be having more questions and I will be writing everything in the annotator notes so for now let's just see what is the fragment offset we are getting 24,000 I hope that is fine okay so anyway like fragment offset you can definitely calculate it is just a divided by 8 right it is just divided by 8 okay now let's just do one thi"
      },
      {
        "start": 877.58,
        "end": 914.3,
        "text": " fragment offsets of this particular division okay for every packet so finally the fragments finally how many packets you are getting so finally as you can see this is 1 2 3 4 5 packets you are getting so what are the fragment offsets let's just see what is the fragment offset here it will be 0 what is the fragment offset here it will be 56 right i mean after it there are 56 bytes so you just need to divide by 8 so it will be 7 right what is the fragment offset here 7 plus 5 right 12"
      }
    ],
    "start": 73
  },
  {
    "id": 74,
    "lecture": 24,
    "title": "Calculate fragment offsets and flags · Apply",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. Each fragment has its own IP header. The offset locates its payload within the original datagram in 8-byte units, and MF is set on every fragment except the last.",
    "teachingSteps": [
      "Apply: Distinguish the application protocol from the transport and network beneath it.",
      "Each fragment has its own IP header. The offset locates its payload within the original datagram in 8-byte units, and MF is set on every fragment except the last.",
      "Identify the application task and client/server roles."
    ],
    "foundation": {
      "title": "Calculate fragment offsets and flags",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. Each fragment has its own IP header. The offset locates its payload within the original datagram in 8-byte units, and MF is set on every fragment except the last.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "If the first fragment carries 1,480 payload bytes, the next fragment’s offset is 1,480 / 8 = 185."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Calculate fragment offsets and flags · Apply: A new case changes one condition: A fragment begins 1,480 payload bytes into the original datagram. What offset value is stored? Which conclusion still follows?",
        "options": [
          "1,480",
          "148",
          "185"
        ],
        "answer": 2,
        "explanation": "185. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "match",
        "prompt": "Calculate fragment offsets and flags · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Server",
            "The program that listens for requests and returns a response."
          ],
          [
            "Application protocol",
            "A rule for messages exchanged by networked programs."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Calculate fragment offsets and flags · Apply: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Calculate fragment offsets and flags · Apply: which statement is accurate for calculate fragment offsets and flags?",
        "options": [
          "185",
          "1,480",
          "148"
        ],
        "answer": 0,
        "explanation": "185. Each fragment has its own IP header. The offset locates its payload within the original datagram in 8-byte units, and MF is set on every fragment except the last."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "fragment",
      "mode": "fragment",
      "lecture": 24
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "Each fragment has its own IP header. The offset locates its payload within the original datagram in 8-byte units, and MF is set on every fragment except the last.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 701.03,
        "end": 729.45,
        "text": " because since no one is setting its fragment offset based on him that is why the last fragment could be anything okay so this is the current structure don't worry we will be having more questions and I will be writing everything in the annotator notes so for now let's just see what is the fragment offset we are getting 24,000 I hope that is fine okay so anyway like fragment offset you can definitely calculate it is just a divided by 8 right it is just divided by 8 okay now let's just do one thi"
      },
      {
        "start": 877.58,
        "end": 914.3,
        "text": " fragment offsets of this particular division okay for every packet so finally the fragments finally how many packets you are getting so finally as you can see this is 1 2 3 4 5 packets you are getting so what are the fragment offsets let's just see what is the fragment offset here it will be 0 what is the fragment offset here it will be 56 right i mean after it there are 56 bytes so you just need to divide by 8 so it will be 7 right what is the fragment offset here 7 plus 5 right 12"
      }
    ],
    "start": 74
  },
  {
    "id": 75,
    "lecture": 25,
    "title": "Check MTU limits across a path · Discover",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. A path MTU is constrained by the smallest MTU along the route. With IPv4 fragmentation, fragments may be created at a router unless DF is set; the receiver reassembles the datagram.",
    "teachingSteps": [
      "Discover: Identify the application task and client/server roles.",
      "A path MTU is constrained by the smallest MTU along the route. With IPv4 fragmentation, fragments may be created at a router unless DF is set; the receiver reassembles the datagram.",
      "Follow the request, lookup, transfer or response sequence."
    ],
    "foundation": {
      "title": "Check MTU limits across a path",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. A path MTU is constrained by the smallest MTU along the route. With IPv4 fragmentation, fragments may be created at a router unless DF is set; the receiver reassembles the datagram.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "A 4,000-byte IP datagram crossing a 1,500-byte MTU link must be fragmented when IPv4 forwarding permits it."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Check MTU limits across a path · Discover: A datagram has DF set and is larger than the next link MTU. What should an IPv4 router do? Which networking rule determines the result?",
        "options": [
          "Fragment it anyway while keeping DF set",
          "Drop it and return an ICMP “fragmentation needed” message",
          "Silently change the destination address"
        ],
        "answer": 1,
        "explanation": "Drop it and return an ICMP “fragmentation needed” message. Identify the application task and client/server roles."
      },
      {
        "type": "match",
        "prompt": "Check MTU limits across a path · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Application protocol",
            "A rule for messages exchanged by networked programs."
          ],
          [
            "Client",
            "The program that initiates a request for a service."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Check MTU limits across a path · Discover: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Check MTU limits across a path · Discover: which statement is accurate for check mtu limits across a path?",
        "options": [
          "Drop it and return an ICMP “fragmentation needed” message",
          "Fragment it anyway while keeping DF set",
          "Silently change the destination address"
        ],
        "answer": 0,
        "explanation": "Drop it and return an ICMP “fragmentation needed” message. A path MTU is constrained by the smallest MTU along the route. With IPv4 fragmentation, fragments may be created at a router unless DF is set; the receiver reassembles the datagram."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "fragment",
      "mode": "fragment",
      "lecture": 25
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "A path MTU is constrained by the smallest MTU along the route. With IPv4 fragmentation, fragments may be created at a router unless DF is set; the receiver reassembles the datagram.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 1723.52,
        "end": 1758.21,
        "text": " 1000 bytes arrive at a router the router has to forward this packet on a link it's empty huge 100 bytes okay so this datagram size is given so which means that what is the ip data is 980 now this 980 should be divided into 80 right into 80 okay so the number of fragments that ip datagram will be divided into the transmission is"
      },
      {
        "start": 3980.42,
        "end": 4014.81,
        "text": " IP header is not a part, fragment offset is a part, source IP is a part, destination IP is a part, D is the answer, right? Okay, that was just an easy question. So let's now solve this question. What they're saying, this question is taken from Mistenford. So what they're saying is that, suppose node A sends a 1280 byte IP before datagram to E. Okay, so A is sending, A is sending to E. And this packet needs to travel a path having three routers and four links. So basically A is sending."
      }
    ],
    "start": 75
  },
  {
    "id": 76,
    "lecture": 25,
    "title": "Check MTU limits across a path · Explore",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. A path MTU is constrained by the smallest MTU along the route. With IPv4 fragmentation, fragments may be created at a router unless DF is set; the receiver reassembles the datagram.",
    "teachingSteps": [
      "Explore: Follow the request, lookup, transfer or response sequence.",
      "A path MTU is constrained by the smallest MTU along the route. With IPv4 fragmentation, fragments may be created at a router unless DF is set; the receiver reassembles the datagram.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "foundation": {
      "title": "Check MTU limits across a path",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. A path MTU is constrained by the smallest MTU along the route. With IPv4 fragmentation, fragments may be created at a router unless DF is set; the receiver reassembles the datagram.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "A 4,000-byte IP datagram crossing a 1,500-byte MTU link must be fragmented when IPv4 forwarding permits it."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Check MTU limits across a path · Explore: A datagram has DF set and is larger than the next link MTU. What should an IPv4 router do? Which step should the host or router take next?",
        "options": [
          "Choose the application service and its endpoint",
          "Read the response and follow-up action",
          "Send the protocol request or command"
        ],
        "answer": 2,
        "explanation": "Send the protocol request or command. Follow the request, lookup, transfer or response sequence."
      },
      {
        "type": "match",
        "prompt": "Check MTU limits across a path · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Client",
            "The program that initiates a request for a service."
          ],
          [
            "Server",
            "The program that listens for requests and returns a response."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Check MTU limits across a path · Explore: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Check MTU limits across a path · Explore: which statement is accurate for check mtu limits across a path?",
        "options": [
          "Drop it and return an ICMP “fragmentation needed” message",
          "Fragment it anyway while keeping DF set",
          "Silently change the destination address"
        ],
        "answer": 0,
        "explanation": "Drop it and return an ICMP “fragmentation needed” message. A path MTU is constrained by the smallest MTU along the route. With IPv4 fragmentation, fragments may be created at a router unless DF is set; the receiver reassembles the datagram."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "fragment",
      "mode": "fragment",
      "lecture": 25
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "A path MTU is constrained by the smallest MTU along the route. With IPv4 fragmentation, fragments may be created at a router unless DF is set; the receiver reassembles the datagram.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 1723.52,
        "end": 1758.21,
        "text": " 1000 bytes arrive at a router the router has to forward this packet on a link it's empty huge 100 bytes okay so this datagram size is given so which means that what is the ip data is 980 now this 980 should be divided into 80 right into 80 okay so the number of fragments that ip datagram will be divided into the transmission is"
      },
      {
        "start": 3980.42,
        "end": 4014.81,
        "text": " IP header is not a part, fragment offset is a part, source IP is a part, destination IP is a part, D is the answer, right? Okay, that was just an easy question. So let's now solve this question. What they're saying, this question is taken from Mistenford. So what they're saying is that, suppose node A sends a 1280 byte IP before datagram to E. Okay, so A is sending, A is sending to E. And this packet needs to travel a path having three routers and four links. So basically A is sending."
      }
    ],
    "start": 76
  },
  {
    "id": 77,
    "lecture": 25,
    "title": "Check MTU limits across a path · Apply",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. A path MTU is constrained by the smallest MTU along the route. With IPv4 fragmentation, fragments may be created at a router unless DF is set; the receiver reassembles the datagram.",
    "teachingSteps": [
      "Apply: Distinguish the application protocol from the transport and network beneath it.",
      "A path MTU is constrained by the smallest MTU along the route. With IPv4 fragmentation, fragments may be created at a router unless DF is set; the receiver reassembles the datagram.",
      "Identify the application task and client/server roles."
    ],
    "foundation": {
      "title": "Check MTU limits across a path",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. A path MTU is constrained by the smallest MTU along the route. With IPv4 fragmentation, fragments may be created at a router unless DF is set; the receiver reassembles the datagram.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "A 4,000-byte IP datagram crossing a 1,500-byte MTU link must be fragmented when IPv4 forwarding permits it."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Check MTU limits across a path · Apply: A new case changes one condition: A datagram has DF set and is larger than the next link MTU. What should an IPv4 router do? Which conclusion still follows?",
        "options": [
          "Drop it and return an ICMP “fragmentation needed” message",
          "Fragment it anyway while keeping DF set",
          "Silently change the destination address"
        ],
        "answer": 0,
        "explanation": "Drop it and return an ICMP “fragmentation needed” message. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "match",
        "prompt": "Check MTU limits across a path · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Server",
            "The program that listens for requests and returns a response."
          ],
          [
            "Application protocol",
            "A rule for messages exchanged by networked programs."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Check MTU limits across a path · Apply: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Check MTU limits across a path · Apply: which statement is accurate for check mtu limits across a path?",
        "options": [
          "Drop it and return an ICMP “fragmentation needed” message",
          "Fragment it anyway while keeping DF set",
          "Silently change the destination address"
        ],
        "answer": 0,
        "explanation": "Drop it and return an ICMP “fragmentation needed” message. A path MTU is constrained by the smallest MTU along the route. With IPv4 fragmentation, fragments may be created at a router unless DF is set; the receiver reassembles the datagram."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "fragment",
      "mode": "fragment",
      "lecture": 25
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "A path MTU is constrained by the smallest MTU along the route. With IPv4 fragmentation, fragments may be created at a router unless DF is set; the receiver reassembles the datagram.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 1723.52,
        "end": 1758.21,
        "text": " 1000 bytes arrive at a router the router has to forward this packet on a link it's empty huge 100 bytes okay so this datagram size is given so which means that what is the ip data is 980 now this 980 should be divided into 80 right into 80 okay so the number of fragments that ip datagram will be divided into the transmission is"
      },
      {
        "start": 3980.42,
        "end": 4014.81,
        "text": " IP header is not a part, fragment offset is a part, source IP is a part, destination IP is a part, D is the answer, right? Okay, that was just an easy question. So let's now solve this question. What they're saying, this question is taken from Mistenford. So what they're saying is that, suppose node A sends a 1280 byte IP before datagram to E. Okay, so A is sending, A is sending to E. And this packet needs to travel a path having three routers and four links. So basically A is sending."
      }
    ],
    "start": 77
  },
  {
    "id": 78,
    "lecture": 26,
    "title": "Diagnose paths with ICMP · Discover",
    "concept": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. ICMP carries network-layer control and error messages, not application payload delivery. Ping commonly uses Echo Request/Reply; traceroute infers hops from TTL expiry and ICMP Time Exceeded responses.",
    "teachingSteps": [
      "Discover: Read the packet’s destination and the relevant network constraints.",
      "ICMP carries network-layer control and error messages, not application payload delivery. Ping commonly uses Echo Request/Reply; traceroute infers hops from TTL expiry and ICMP Time Exceeded responses.",
      "Use the route, control message or fragment metadata to interpret the path."
    ],
    "foundation": {
      "title": "Diagnose paths with ICMP",
      "idea": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. ICMP carries network-layer control and error messages, not application payload delivery. Ping commonly uses Echo Request/Reply; traceroute infers hops from TTL expiry and ICMP Time Exceeded responses.",
      "terms": [
        "Router: A device that forwards IP packets between networks.",
        "Next hop: The neighboring router or interface chosen for forwarding a packet.",
        "MTU: The largest link-layer payload a link can carry in one frame."
      ],
      "example": "Traceroute sends probes with increasing TTL values; each router that reduces TTL to zero can return Time Exceeded, revealing one hop."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Diagnose paths with ICMP · Discover: A traceroute probe’s TTL reaches zero at a router. Which ICMP response commonly reveals that hop? Which networking rule determines the result?",
        "options": [
          "Echo Reply only",
          "Destination MAC Reply",
          "Time Exceeded"
        ],
        "answer": 2,
        "explanation": "Time Exceeded. Read the packet’s destination and the relevant network constraints."
      },
      {
        "type": "match",
        "prompt": "Diagnose paths with ICMP · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Router",
            "A device that forwards IP packets between networks."
          ],
          [
            "Next hop",
            "The neighboring router or interface chosen for forwarding a packet."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Diagnose paths with ICMP · Discover: put the actions in a valid working sequence.",
        "items": [
          "Inspect destination, route and link limits",
          "Apply the forwarding or control-plane rule",
          "Select the next hop or packet-handling action"
        ],
        "explanation": "Read the packet’s destination and the relevant network constraints. Use the route, control message or fragment metadata to interpret the path. Choose the next hop or the required delivery response."
      },
      {
        "type": "choice",
        "prompt": "Diagnose paths with ICMP · Discover: which statement is accurate for diagnose paths with icmp?",
        "options": [
          "Time Exceeded",
          "Echo Reply only",
          "Destination MAC Reply"
        ],
        "answer": 0,
        "explanation": "Time Exceeded. ICMP carries network-layer control and error messages, not application payload delivery. Ping commonly uses Echo Request/Reply; traceroute infers hops from TTL expiry and ICMP Time Exceeded responses."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "routing",
      "mode": "icmp",
      "lecture": 26
    },
    "cnScene": [
      "Read the packet’s destination and the relevant network constraints.",
      "ICMP carries network-layer control and error messages, not application payload delivery. Ping commonly uses Echo Request/Reply; traceroute infers hops from TTL expiry and ICMP Time Exceeded responses.",
      "Choose the next hop or the required delivery response."
    ],
    "sourceReferences": [
      {
        "start": 4574.95,
        "end": 4619.26,
        "text": " Now briefly describe two cases when ICMP time exceeded I mean it is just a theoretical question just I took it from some university So when time exceeded happens whenever Whenever you have TTL0 Whenever you have reassembly time expired, right? Now let's just see query messages also So just to summarize what are these error messages? ICMP error message summary Just the one line summary only You don't need to remember all of this It is just for your sake of understanding"
      },
      {
        "start": 6869.23,
        "end": 6903.87,
        "text": " If you are carrying ICMP error message, then you can't regenerate the ICMP error message. But if you're dropping the ICMP query message here, you're dropping the ICMP error message. Are you not sending ICMP error message? Tell me. Yes, right? See here. This is eco-request. There is no eco-reply. I mean, no one is going to reply because that packet has to be anywhere discarded, right? So this is eco-request. This particular color is telling you eco-request. This color is telling you what? Time e"
      }
    ],
    "start": 78
  },
  {
    "id": 79,
    "lecture": 26,
    "title": "Diagnose paths with ICMP · Explore",
    "concept": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. ICMP carries network-layer control and error messages, not application payload delivery. Ping commonly uses Echo Request/Reply; traceroute infers hops from TTL expiry and ICMP Time Exceeded responses.",
    "teachingSteps": [
      "Explore: Use the route, control message or fragment metadata to interpret the path.",
      "ICMP carries network-layer control and error messages, not application payload delivery. Ping commonly uses Echo Request/Reply; traceroute infers hops from TTL expiry and ICMP Time Exceeded responses.",
      "Choose the next hop or the required delivery response."
    ],
    "foundation": {
      "title": "Diagnose paths with ICMP",
      "idea": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. ICMP carries network-layer control and error messages, not application payload delivery. Ping commonly uses Echo Request/Reply; traceroute infers hops from TTL expiry and ICMP Time Exceeded responses.",
      "terms": [
        "Router: A device that forwards IP packets between networks.",
        "Next hop: The neighboring router or interface chosen for forwarding a packet.",
        "MTU: The largest link-layer payload a link can carry in one frame."
      ],
      "example": "Traceroute sends probes with increasing TTL values; each router that reduces TTL to zero can return Time Exceeded, revealing one hop."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Diagnose paths with ICMP · Explore: A traceroute probe’s TTL reaches zero at a router. Which ICMP response commonly reveals that hop? Which step should the host or router take next?",
        "options": [
          "Apply the forwarding or control-plane rule",
          "Inspect destination, route and link limits",
          "Select the next hop or packet-handling action"
        ],
        "answer": 0,
        "explanation": "Apply the forwarding or control-plane rule. Use the route, control message or fragment metadata to interpret the path."
      },
      {
        "type": "match",
        "prompt": "Diagnose paths with ICMP · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Next hop",
            "The neighboring router or interface chosen for forwarding a packet."
          ],
          [
            "MTU",
            "The largest link-layer payload a link can carry in one frame."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Diagnose paths with ICMP · Explore: put the actions in a valid working sequence.",
        "items": [
          "Inspect destination, route and link limits",
          "Apply the forwarding or control-plane rule",
          "Select the next hop or packet-handling action"
        ],
        "explanation": "Read the packet’s destination and the relevant network constraints. Use the route, control message or fragment metadata to interpret the path. Choose the next hop or the required delivery response."
      },
      {
        "type": "choice",
        "prompt": "Diagnose paths with ICMP · Explore: which statement is accurate for diagnose paths with icmp?",
        "options": [
          "Time Exceeded",
          "Echo Reply only",
          "Destination MAC Reply"
        ],
        "answer": 0,
        "explanation": "Time Exceeded. ICMP carries network-layer control and error messages, not application payload delivery. Ping commonly uses Echo Request/Reply; traceroute infers hops from TTL expiry and ICMP Time Exceeded responses."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "routing",
      "mode": "icmp",
      "lecture": 26
    },
    "cnScene": [
      "Read the packet’s destination and the relevant network constraints.",
      "ICMP carries network-layer control and error messages, not application payload delivery. Ping commonly uses Echo Request/Reply; traceroute infers hops from TTL expiry and ICMP Time Exceeded responses.",
      "Choose the next hop or the required delivery response."
    ],
    "sourceReferences": [
      {
        "start": 4574.95,
        "end": 4619.26,
        "text": " Now briefly describe two cases when ICMP time exceeded I mean it is just a theoretical question just I took it from some university So when time exceeded happens whenever Whenever you have TTL0 Whenever you have reassembly time expired, right? Now let's just see query messages also So just to summarize what are these error messages? ICMP error message summary Just the one line summary only You don't need to remember all of this It is just for your sake of understanding"
      },
      {
        "start": 6869.23,
        "end": 6903.87,
        "text": " If you are carrying ICMP error message, then you can't regenerate the ICMP error message. But if you're dropping the ICMP query message here, you're dropping the ICMP error message. Are you not sending ICMP error message? Tell me. Yes, right? See here. This is eco-request. There is no eco-reply. I mean, no one is going to reply because that packet has to be anywhere discarded, right? So this is eco-request. This particular color is telling you eco-request. This color is telling you what? Time e"
      }
    ],
    "start": 79
  },
  {
    "id": 80,
    "lecture": 26,
    "title": "Diagnose paths with ICMP · Apply",
    "concept": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. ICMP carries network-layer control and error messages, not application payload delivery. Ping commonly uses Echo Request/Reply; traceroute infers hops from TTL expiry and ICMP Time Exceeded responses.",
    "teachingSteps": [
      "Apply: Choose the next hop or the required delivery response.",
      "ICMP carries network-layer control and error messages, not application payload delivery. Ping commonly uses Echo Request/Reply; traceroute infers hops from TTL expiry and ICMP Time Exceeded responses.",
      "Read the packet’s destination and the relevant network constraints."
    ],
    "foundation": {
      "title": "Diagnose paths with ICMP",
      "idea": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. ICMP carries network-layer control and error messages, not application payload delivery. Ping commonly uses Echo Request/Reply; traceroute infers hops from TTL expiry and ICMP Time Exceeded responses.",
      "terms": [
        "Router: A device that forwards IP packets between networks.",
        "Next hop: The neighboring router or interface chosen for forwarding a packet.",
        "MTU: The largest link-layer payload a link can carry in one frame."
      ],
      "example": "Traceroute sends probes with increasing TTL values; each router that reduces TTL to zero can return Time Exceeded, revealing one hop."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Diagnose paths with ICMP · Apply: A new case changes one condition: A traceroute probe’s TTL reaches zero at a router. Which ICMP response commonly reveals that hop? Which conclusion still follows?",
        "options": [
          "Echo Reply only",
          "Time Exceeded",
          "Destination MAC Reply"
        ],
        "answer": 1,
        "explanation": "Time Exceeded. Choose the next hop or the required delivery response."
      },
      {
        "type": "match",
        "prompt": "Diagnose paths with ICMP · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "MTU",
            "The largest link-layer payload a link can carry in one frame."
          ],
          [
            "Router",
            "A device that forwards IP packets between networks."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Diagnose paths with ICMP · Apply: put the actions in a valid working sequence.",
        "items": [
          "Inspect destination, route and link limits",
          "Apply the forwarding or control-plane rule",
          "Select the next hop or packet-handling action"
        ],
        "explanation": "Read the packet’s destination and the relevant network constraints. Use the route, control message or fragment metadata to interpret the path. Choose the next hop or the required delivery response."
      },
      {
        "type": "choice",
        "prompt": "Diagnose paths with ICMP · Apply: which statement is accurate for diagnose paths with icmp?",
        "options": [
          "Time Exceeded",
          "Echo Reply only",
          "Destination MAC Reply"
        ],
        "answer": 0,
        "explanation": "Time Exceeded. ICMP carries network-layer control and error messages, not application payload delivery. Ping commonly uses Echo Request/Reply; traceroute infers hops from TTL expiry and ICMP Time Exceeded responses."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "routing",
      "mode": "icmp",
      "lecture": 26
    },
    "cnScene": [
      "Read the packet’s destination and the relevant network constraints.",
      "ICMP carries network-layer control and error messages, not application payload delivery. Ping commonly uses Echo Request/Reply; traceroute infers hops from TTL expiry and ICMP Time Exceeded responses.",
      "Choose the next hop or the required delivery response."
    ],
    "sourceReferences": [
      {
        "start": 4574.95,
        "end": 4619.26,
        "text": " Now briefly describe two cases when ICMP time exceeded I mean it is just a theoretical question just I took it from some university So when time exceeded happens whenever Whenever you have TTL0 Whenever you have reassembly time expired, right? Now let's just see query messages also So just to summarize what are these error messages? ICMP error message summary Just the one line summary only You don't need to remember all of this It is just for your sake of understanding"
      },
      {
        "start": 6869.23,
        "end": 6903.87,
        "text": " If you are carrying ICMP error message, then you can't regenerate the ICMP error message. But if you're dropping the ICMP query message here, you're dropping the ICMP error message. Are you not sending ICMP error message? Tell me. Yes, right? See here. This is eco-request. There is no eco-reply. I mean, no one is going to reply because that packet has to be anywhere discarded, right? So this is eco-request. This particular color is telling you eco-request. This color is telling you what? Time e"
      }
    ],
    "start": 80
  },
  {
    "id": 81,
    "lecture": 27,
    "title": "Translate addresses with NAT · Discover",
    "concept": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. Network Address Translation rewrites address and often port fields at a boundary. Port address translation lets many private hosts share one public IPv4 address by maintaining distinct mappings.",
    "teachingSteps": [
      "Discover: Read the packet’s destination and the relevant network constraints.",
      "Network Address Translation rewrites address and often port fields at a boundary. Port address translation lets many private hosts share one public IPv4 address by maintaining distinct mappings.",
      "Use the route, control message or fragment metadata to interpret the path."
    ],
    "foundation": {
      "title": "Translate addresses with NAT",
      "idea": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. Network Address Translation rewrites address and often port fields at a boundary. Port address translation lets many private hosts share one public IPv4 address by maintaining distinct mappings.",
      "terms": [
        "Router: A device that forwards IP packets between networks.",
        "Next hop: The neighboring router or interface chosen for forwarding a packet.",
        "MTU: The largest link-layer payload a link can carry in one frame."
      ],
      "example": "A gateway can map (private 10.0.0.5, source port 51000) to (public address, port 40001) and use that table to deliver the reply."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Translate addresses with NAT · Discover: Two private devices share one public IPv4 address for outbound TCP connections. What lets the gateway distinguish their return traffic? Which networking rule determines the result?",
        "options": [
          "Different translated transport-layer port mappings",
          "Different destination MAC addresses across the Internet",
          "The IPv4 TTL alone"
        ],
        "answer": 0,
        "explanation": "Different translated transport-layer port mappings. Read the packet’s destination and the relevant network constraints."
      },
      {
        "type": "match",
        "prompt": "Translate addresses with NAT · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Router",
            "A device that forwards IP packets between networks."
          ],
          [
            "Next hop",
            "The neighboring router or interface chosen for forwarding a packet."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Translate addresses with NAT · Discover: put the actions in a valid working sequence.",
        "items": [
          "Inspect destination, route and link limits",
          "Apply the forwarding or control-plane rule",
          "Select the next hop or packet-handling action"
        ],
        "explanation": "Read the packet’s destination and the relevant network constraints. Use the route, control message or fragment metadata to interpret the path. Choose the next hop or the required delivery response."
      },
      {
        "type": "choice",
        "prompt": "Translate addresses with NAT · Discover: which statement is accurate for translate addresses with nat?",
        "options": [
          "Different translated transport-layer port mappings",
          "Different destination MAC addresses across the Internet",
          "The IPv4 TTL alone"
        ],
        "answer": 0,
        "explanation": "Different translated transport-layer port mappings. Network Address Translation rewrites address and often port fields at a boundary. Port address translation lets many private hosts share one public IPv4 address by maintaining distinct mappings."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "routing",
      "mode": "nat",
      "lecture": 27
    },
    "cnScene": [
      "Read the packet’s destination and the relevant network constraints.",
      "Network Address Translation rewrites address and often port fields at a boundary. Port address translation lets many private hosts share one public IPv4 address by maintaining distinct mappings.",
      "Choose the next hop or the required delivery response."
    ],
    "sourceReferences": [
      {
        "start": 1178.46,
        "end": 1207.55,
        "text": " I don't think it is a good idea, right? Okay, so what we can do here as Akash is also suggesting that we can take help of the port number. Let's just see that how it is working. So interestingly, interestingly, this is your network address, translation box or router, okay, which implement the NET functionality. So what it will say that it will not map only to the local IPs to one private IP, it will also map to the port. So there is every"
      },
      {
        "start": 1234.67,
        "end": 1264.44,
        "text": " there's a source port what is the destination IP what is the destination port so these are these are the two pairs that that we use for in the network address translation box also so what do we say that let's suppose there is a local IP okay or the private IP which is 192.168 let's suppose this is 192.168.132.10 this is your private IP okay now whenever you are sending right whenever you're sending you will be sending using some source port so I have given this IP to you and then there will be "
      }
    ],
    "start": 81
  },
  {
    "id": 82,
    "lecture": 27,
    "title": "Translate addresses with NAT · Explore",
    "concept": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. Network Address Translation rewrites address and often port fields at a boundary. Port address translation lets many private hosts share one public IPv4 address by maintaining distinct mappings.",
    "teachingSteps": [
      "Explore: Use the route, control message or fragment metadata to interpret the path.",
      "Network Address Translation rewrites address and often port fields at a boundary. Port address translation lets many private hosts share one public IPv4 address by maintaining distinct mappings.",
      "Choose the next hop or the required delivery response."
    ],
    "foundation": {
      "title": "Translate addresses with NAT",
      "idea": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. Network Address Translation rewrites address and often port fields at a boundary. Port address translation lets many private hosts share one public IPv4 address by maintaining distinct mappings.",
      "terms": [
        "Router: A device that forwards IP packets between networks.",
        "Next hop: The neighboring router or interface chosen for forwarding a packet.",
        "MTU: The largest link-layer payload a link can carry in one frame."
      ],
      "example": "A gateway can map (private 10.0.0.5, source port 51000) to (public address, port 40001) and use that table to deliver the reply."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Translate addresses with NAT · Explore: Two private devices share one public IPv4 address for outbound TCP connections. What lets the gateway distinguish their return traffic? Which step should the host or router take next?",
        "options": [
          "Inspect destination, route and link limits",
          "Apply the forwarding or control-plane rule",
          "Select the next hop or packet-handling action"
        ],
        "answer": 1,
        "explanation": "Apply the forwarding or control-plane rule. Use the route, control message or fragment metadata to interpret the path."
      },
      {
        "type": "match",
        "prompt": "Translate addresses with NAT · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Next hop",
            "The neighboring router or interface chosen for forwarding a packet."
          ],
          [
            "MTU",
            "The largest link-layer payload a link can carry in one frame."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Translate addresses with NAT · Explore: put the actions in a valid working sequence.",
        "items": [
          "Inspect destination, route and link limits",
          "Apply the forwarding or control-plane rule",
          "Select the next hop or packet-handling action"
        ],
        "explanation": "Read the packet’s destination and the relevant network constraints. Use the route, control message or fragment metadata to interpret the path. Choose the next hop or the required delivery response."
      },
      {
        "type": "choice",
        "prompt": "Translate addresses with NAT · Explore: which statement is accurate for translate addresses with nat?",
        "options": [
          "Different translated transport-layer port mappings",
          "Different destination MAC addresses across the Internet",
          "The IPv4 TTL alone"
        ],
        "answer": 0,
        "explanation": "Different translated transport-layer port mappings. Network Address Translation rewrites address and often port fields at a boundary. Port address translation lets many private hosts share one public IPv4 address by maintaining distinct mappings."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "routing",
      "mode": "nat",
      "lecture": 27
    },
    "cnScene": [
      "Read the packet’s destination and the relevant network constraints.",
      "Network Address Translation rewrites address and often port fields at a boundary. Port address translation lets many private hosts share one public IPv4 address by maintaining distinct mappings.",
      "Choose the next hop or the required delivery response."
    ],
    "sourceReferences": [
      {
        "start": 1178.46,
        "end": 1207.55,
        "text": " I don't think it is a good idea, right? Okay, so what we can do here as Akash is also suggesting that we can take help of the port number. Let's just see that how it is working. So interestingly, interestingly, this is your network address, translation box or router, okay, which implement the NET functionality. So what it will say that it will not map only to the local IPs to one private IP, it will also map to the port. So there is every"
      },
      {
        "start": 1234.67,
        "end": 1264.44,
        "text": " there's a source port what is the destination IP what is the destination port so these are these are the two pairs that that we use for in the network address translation box also so what do we say that let's suppose there is a local IP okay or the private IP which is 192.168 let's suppose this is 192.168.132.10 this is your private IP okay now whenever you are sending right whenever you're sending you will be sending using some source port so I have given this IP to you and then there will be "
      }
    ],
    "start": 82
  },
  {
    "id": 83,
    "lecture": 27,
    "title": "Translate addresses with NAT · Apply",
    "concept": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. Network Address Translation rewrites address and often port fields at a boundary. Port address translation lets many private hosts share one public IPv4 address by maintaining distinct mappings.",
    "teachingSteps": [
      "Apply: Choose the next hop or the required delivery response.",
      "Network Address Translation rewrites address and often port fields at a boundary. Port address translation lets many private hosts share one public IPv4 address by maintaining distinct mappings.",
      "Read the packet’s destination and the relevant network constraints."
    ],
    "foundation": {
      "title": "Translate addresses with NAT",
      "idea": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. Network Address Translation rewrites address and often port fields at a boundary. Port address translation lets many private hosts share one public IPv4 address by maintaining distinct mappings.",
      "terms": [
        "Router: A device that forwards IP packets between networks.",
        "Next hop: The neighboring router or interface chosen for forwarding a packet.",
        "MTU: The largest link-layer payload a link can carry in one frame."
      ],
      "example": "A gateway can map (private 10.0.0.5, source port 51000) to (public address, port 40001) and use that table to deliver the reply."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Translate addresses with NAT · Apply: A new case changes one condition: Two private devices share one public IPv4 address for outbound TCP connections. What lets the gateway distinguish their return traffic? Which conclusion still follows?",
        "options": [
          "Different destination MAC addresses across the Internet",
          "The IPv4 TTL alone",
          "Different translated transport-layer port mappings"
        ],
        "answer": 2,
        "explanation": "Different translated transport-layer port mappings. Choose the next hop or the required delivery response."
      },
      {
        "type": "match",
        "prompt": "Translate addresses with NAT · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "MTU",
            "The largest link-layer payload a link can carry in one frame."
          ],
          [
            "Router",
            "A device that forwards IP packets between networks."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Translate addresses with NAT · Apply: put the actions in a valid working sequence.",
        "items": [
          "Inspect destination, route and link limits",
          "Apply the forwarding or control-plane rule",
          "Select the next hop or packet-handling action"
        ],
        "explanation": "Read the packet’s destination and the relevant network constraints. Use the route, control message or fragment metadata to interpret the path. Choose the next hop or the required delivery response."
      },
      {
        "type": "choice",
        "prompt": "Translate addresses with NAT · Apply: which statement is accurate for translate addresses with nat?",
        "options": [
          "Different translated transport-layer port mappings",
          "Different destination MAC addresses across the Internet",
          "The IPv4 TTL alone"
        ],
        "answer": 0,
        "explanation": "Different translated transport-layer port mappings. Network Address Translation rewrites address and often port fields at a boundary. Port address translation lets many private hosts share one public IPv4 address by maintaining distinct mappings."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "routing",
      "mode": "nat",
      "lecture": 27
    },
    "cnScene": [
      "Read the packet’s destination and the relevant network constraints.",
      "Network Address Translation rewrites address and often port fields at a boundary. Port address translation lets many private hosts share one public IPv4 address by maintaining distinct mappings.",
      "Choose the next hop or the required delivery response."
    ],
    "sourceReferences": [
      {
        "start": 1178.46,
        "end": 1207.55,
        "text": " I don't think it is a good idea, right? Okay, so what we can do here as Akash is also suggesting that we can take help of the port number. Let's just see that how it is working. So interestingly, interestingly, this is your network address, translation box or router, okay, which implement the NET functionality. So what it will say that it will not map only to the local IPs to one private IP, it will also map to the port. So there is every"
      },
      {
        "start": 1234.67,
        "end": 1264.44,
        "text": " there's a source port what is the destination IP what is the destination port so these are these are the two pairs that that we use for in the network address translation box also so what do we say that let's suppose there is a local IP okay or the private IP which is 192.168 let's suppose this is 192.168.132.10 this is your private IP okay now whenever you are sending right whenever you're sending you will be sending using some source port so I have given this IP to you and then there will be "
      }
    ],
    "start": 83
  },
  {
    "id": 84,
    "lecture": 28,
    "title": "Build routes with distance-vector routing · Discover",
    "concept": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. Distance-vector routers exchange destination costs with neighbors and apply the Bellman-Ford update: cost via neighbor = link cost + neighbor’s advertised distance.",
    "teachingSteps": [
      "Discover: Read the packet’s destination and the relevant network constraints.",
      "Distance-vector routers exchange destination costs with neighbors and apply the Bellman-Ford update: cost via neighbor = link cost + neighbor’s advertised distance.",
      "Use the route, control message or fragment metadata to interpret the path."
    ],
    "foundation": {
      "title": "Build routes with distance-vector routing",
      "idea": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. Distance-vector routers exchange destination costs with neighbors and apply the Bellman-Ford update: cost via neighbor = link cost + neighbor’s advertised distance.",
      "terms": [
        "Router: A device that forwards IP packets between networks.",
        "Next hop: The neighboring router or interface chosen for forwarding a packet.",
        "MTU: The largest link-layer payload a link can carry in one frame."
      ],
      "example": "If router A reaches B for cost 2 and B advertises a route to X costing 5, A can advertise a route to X costing 7 via B."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Build routes with distance-vector routing · Discover: A router’s link to a neighbor costs 2, and that neighbor advertises destination cost 5. What route cost can the router compute through it? Which networking rule determines the result?",
        "options": [
          "3",
          "7",
          "10"
        ],
        "answer": 1,
        "explanation": "7. Read the packet’s destination and the relevant network constraints."
      },
      {
        "type": "match",
        "prompt": "Build routes with distance-vector routing · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Router",
            "A device that forwards IP packets between networks."
          ],
          [
            "Next hop",
            "The neighboring router or interface chosen for forwarding a packet."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Build routes with distance-vector routing · Discover: put the actions in a valid working sequence.",
        "items": [
          "Inspect destination, route and link limits",
          "Apply the forwarding or control-plane rule",
          "Select the next hop or packet-handling action"
        ],
        "explanation": "Read the packet’s destination and the relevant network constraints. Use the route, control message or fragment metadata to interpret the path. Choose the next hop or the required delivery response."
      },
      {
        "type": "choice",
        "prompt": "Build routes with distance-vector routing · Discover: which statement is accurate for build routes with distance-vector routing?",
        "options": [
          "7",
          "3",
          "10"
        ],
        "answer": 0,
        "explanation": "7. Distance-vector routers exchange destination costs with neighbors and apply the Bellman-Ford update: cost via neighbor = link cost + neighbor’s advertised distance."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "routing",
      "mode": "dv",
      "lecture": 28
    },
    "cnScene": [
      "Read the packet’s destination and the relevant network constraints.",
      "Distance-vector routers exchange destination costs with neighbors and apply the Bellman-Ford update: cost via neighbor = link cost + neighbor’s advertised distance.",
      "Choose the next hop or the required delivery response."
    ],
    "sourceReferences": [
      {
        "start": 4520.11,
        "end": 4545.09,
        "text": " so they have spent one iteration to learn the cost to neighbors is this okay everyone they have spent one iteration to two cost to its neighbors okay so they are saying assume that after one iteration after iteration one a node has learned the cost to its neighbors okay after two iterations the cost to its neighbors neighbors and so on how many iteration does the distance vector algorithm take to convert this topology"
      },
      {
        "start": 6090.9,
        "end": 6119.97,
        "text": " All the routers use a distance vector based routing algorithm to update their routing tables. Each router start with its routing table initialize to contain an entry for each neighbor with the weight of the respective connecting in. So they're saying that they start with the routing initialize to contain an entry to each neighbor. Okay. So they've initialized with the entry to each neighbor. Right. This is the initialization they're talking about. Is this question fine to everyone that what is "
      }
    ],
    "start": 84
  },
  {
    "id": 85,
    "lecture": 28,
    "title": "Build routes with distance-vector routing · Explore",
    "concept": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. Distance-vector routers exchange destination costs with neighbors and apply the Bellman-Ford update: cost via neighbor = link cost + neighbor’s advertised distance.",
    "teachingSteps": [
      "Explore: Use the route, control message or fragment metadata to interpret the path.",
      "Distance-vector routers exchange destination costs with neighbors and apply the Bellman-Ford update: cost via neighbor = link cost + neighbor’s advertised distance.",
      "Choose the next hop or the required delivery response."
    ],
    "foundation": {
      "title": "Build routes with distance-vector routing",
      "idea": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. Distance-vector routers exchange destination costs with neighbors and apply the Bellman-Ford update: cost via neighbor = link cost + neighbor’s advertised distance.",
      "terms": [
        "Router: A device that forwards IP packets between networks.",
        "Next hop: The neighboring router or interface chosen for forwarding a packet.",
        "MTU: The largest link-layer payload a link can carry in one frame."
      ],
      "example": "If router A reaches B for cost 2 and B advertises a route to X costing 5, A can advertise a route to X costing 7 via B."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Build routes with distance-vector routing · Explore: A router’s link to a neighbor costs 2, and that neighbor advertises destination cost 5. What route cost can the router compute through it? Which step should the host or router take next?",
        "options": [
          "Inspect destination, route and link limits",
          "Select the next hop or packet-handling action",
          "Apply the forwarding or control-plane rule"
        ],
        "answer": 2,
        "explanation": "Apply the forwarding or control-plane rule. Use the route, control message or fragment metadata to interpret the path."
      },
      {
        "type": "match",
        "prompt": "Build routes with distance-vector routing · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Next hop",
            "The neighboring router or interface chosen for forwarding a packet."
          ],
          [
            "MTU",
            "The largest link-layer payload a link can carry in one frame."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Build routes with distance-vector routing · Explore: put the actions in a valid working sequence.",
        "items": [
          "Inspect destination, route and link limits",
          "Apply the forwarding or control-plane rule",
          "Select the next hop or packet-handling action"
        ],
        "explanation": "Read the packet’s destination and the relevant network constraints. Use the route, control message or fragment metadata to interpret the path. Choose the next hop or the required delivery response."
      },
      {
        "type": "choice",
        "prompt": "Build routes with distance-vector routing · Explore: which statement is accurate for build routes with distance-vector routing?",
        "options": [
          "7",
          "3",
          "10"
        ],
        "answer": 0,
        "explanation": "7. Distance-vector routers exchange destination costs with neighbors and apply the Bellman-Ford update: cost via neighbor = link cost + neighbor’s advertised distance."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "routing",
      "mode": "dv",
      "lecture": 28
    },
    "cnScene": [
      "Read the packet’s destination and the relevant network constraints.",
      "Distance-vector routers exchange destination costs with neighbors and apply the Bellman-Ford update: cost via neighbor = link cost + neighbor’s advertised distance.",
      "Choose the next hop or the required delivery response."
    ],
    "sourceReferences": [
      {
        "start": 4520.11,
        "end": 4545.09,
        "text": " so they have spent one iteration to learn the cost to neighbors is this okay everyone they have spent one iteration to two cost to its neighbors okay so they are saying assume that after one iteration after iteration one a node has learned the cost to its neighbors okay after two iterations the cost to its neighbors neighbors and so on how many iteration does the distance vector algorithm take to convert this topology"
      },
      {
        "start": 6090.9,
        "end": 6119.97,
        "text": " All the routers use a distance vector based routing algorithm to update their routing tables. Each router start with its routing table initialize to contain an entry for each neighbor with the weight of the respective connecting in. So they're saying that they start with the routing initialize to contain an entry to each neighbor. Okay. So they've initialized with the entry to each neighbor. Right. This is the initialization they're talking about. Is this question fine to everyone that what is "
      }
    ],
    "start": 85
  },
  {
    "id": 86,
    "lecture": 28,
    "title": "Build routes with distance-vector routing · Apply",
    "concept": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. Distance-vector routers exchange destination costs with neighbors and apply the Bellman-Ford update: cost via neighbor = link cost + neighbor’s advertised distance.",
    "teachingSteps": [
      "Apply: Choose the next hop or the required delivery response.",
      "Distance-vector routers exchange destination costs with neighbors and apply the Bellman-Ford update: cost via neighbor = link cost + neighbor’s advertised distance.",
      "Read the packet’s destination and the relevant network constraints."
    ],
    "foundation": {
      "title": "Build routes with distance-vector routing",
      "idea": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. Distance-vector routers exchange destination costs with neighbors and apply the Bellman-Ford update: cost via neighbor = link cost + neighbor’s advertised distance.",
      "terms": [
        "Router: A device that forwards IP packets between networks.",
        "Next hop: The neighboring router or interface chosen for forwarding a packet.",
        "MTU: The largest link-layer payload a link can carry in one frame."
      ],
      "example": "If router A reaches B for cost 2 and B advertises a route to X costing 5, A can advertise a route to X costing 7 via B."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Build routes with distance-vector routing · Apply: A new case changes one condition: A router’s link to a neighbor costs 2, and that neighbor advertises destination cost 5. What route cost can the router compute through it? Which conclusion still follows?",
        "options": [
          "7",
          "3",
          "10"
        ],
        "answer": 0,
        "explanation": "7. Choose the next hop or the required delivery response."
      },
      {
        "type": "match",
        "prompt": "Build routes with distance-vector routing · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "MTU",
            "The largest link-layer payload a link can carry in one frame."
          ],
          [
            "Router",
            "A device that forwards IP packets between networks."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Build routes with distance-vector routing · Apply: put the actions in a valid working sequence.",
        "items": [
          "Inspect destination, route and link limits",
          "Apply the forwarding or control-plane rule",
          "Select the next hop or packet-handling action"
        ],
        "explanation": "Read the packet’s destination and the relevant network constraints. Use the route, control message or fragment metadata to interpret the path. Choose the next hop or the required delivery response."
      },
      {
        "type": "choice",
        "prompt": "Build routes with distance-vector routing · Apply: which statement is accurate for build routes with distance-vector routing?",
        "options": [
          "7",
          "3",
          "10"
        ],
        "answer": 0,
        "explanation": "7. Distance-vector routers exchange destination costs with neighbors and apply the Bellman-Ford update: cost via neighbor = link cost + neighbor’s advertised distance."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "routing",
      "mode": "dv",
      "lecture": 28
    },
    "cnScene": [
      "Read the packet’s destination and the relevant network constraints.",
      "Distance-vector routers exchange destination costs with neighbors and apply the Bellman-Ford update: cost via neighbor = link cost + neighbor’s advertised distance.",
      "Choose the next hop or the required delivery response."
    ],
    "sourceReferences": [
      {
        "start": 4520.11,
        "end": 4545.09,
        "text": " so they have spent one iteration to learn the cost to neighbors is this okay everyone they have spent one iteration to two cost to its neighbors okay so they are saying assume that after one iteration after iteration one a node has learned the cost to its neighbors okay after two iterations the cost to its neighbors neighbors and so on how many iteration does the distance vector algorithm take to convert this topology"
      },
      {
        "start": 6090.9,
        "end": 6119.97,
        "text": " All the routers use a distance vector based routing algorithm to update their routing tables. Each router start with its routing table initialize to contain an entry for each neighbor with the weight of the respective connecting in. So they're saying that they start with the routing initialize to contain an entry to each neighbor. Okay. So they've initialized with the entry to each neighbor. Right. This is the initialization they're talking about. Is this question fine to everyone that what is "
      }
    ],
    "start": 86
  },
  {
    "id": 87,
    "lecture": 29,
    "title": "Trace distance-vector updates · Discover",
    "concept": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. A distance-vector update is local: a router compares its current route with each neighbor’s advertised distance plus link cost, then selects the cheapest valid next hop.",
    "teachingSteps": [
      "Discover: Read the packet’s destination and the relevant network constraints.",
      "A distance-vector update is local: a router compares its current route with each neighbor’s advertised distance plus link cost, then selects the cheapest valid next hop.",
      "Use the route, control message or fragment metadata to interpret the path."
    ],
    "foundation": {
      "title": "Trace distance-vector updates",
      "idea": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. A distance-vector update is local: a router compares its current route with each neighbor’s advertised distance plus link cost, then selects the cheapest valid next hop.",
      "terms": [
        "Router: A device that forwards IP packets between networks.",
        "Next hop: The neighboring router or interface chosen for forwarding a packet.",
        "MTU: The largest link-layer payload a link can carry in one frame."
      ],
      "example": "After a link failure, routers may learn about it gradually; count-to-infinity behavior is one reason distance-vector protocols use mechanisms such as split horizon or poisoned reverse."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Trace distance-vector updates · Discover: A neighbor advertises a destination cost of 6 and the local link cost is 3. What candidate cost is compared? Which networking rule determines the result?",
        "options": [
          "6",
          "18",
          "9"
        ],
        "answer": 2,
        "explanation": "9. Read the packet’s destination and the relevant network constraints."
      },
      {
        "type": "match",
        "prompt": "Trace distance-vector updates · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Router",
            "A device that forwards IP packets between networks."
          ],
          [
            "Next hop",
            "The neighboring router or interface chosen for forwarding a packet."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Trace distance-vector updates · Discover: put the actions in a valid working sequence.",
        "items": [
          "Inspect destination, route and link limits",
          "Apply the forwarding or control-plane rule",
          "Select the next hop or packet-handling action"
        ],
        "explanation": "Read the packet’s destination and the relevant network constraints. Use the route, control message or fragment metadata to interpret the path. Choose the next hop or the required delivery response."
      },
      {
        "type": "choice",
        "prompt": "Trace distance-vector updates · Discover: which statement is accurate for trace distance-vector updates?",
        "options": [
          "9",
          "6",
          "18"
        ],
        "answer": 0,
        "explanation": "9. A distance-vector update is local: a router compares its current route with each neighbor’s advertised distance plus link cost, then selects the cheapest valid next hop."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "routing",
      "mode": "dv",
      "lecture": 29
    },
    "cnScene": [
      "Read the packet’s destination and the relevant network constraints.",
      "A distance-vector update is local: a router compares its current route with each neighbor’s advertised distance plus link cost, then selects the cheapest valid next hop.",
      "Choose the next hop or the required delivery response."
    ],
    "sourceReferences": [
      {
        "start": 1497.66,
        "end": 1521.17,
        "text": " the instance of nodes n1 to n5 where the distance to itself is 0 also all links are symmetric and cost is identical in both directions in each round now they have defined something called as round so now what they are saying in each round all nodes exchange their distance vector with their respective neighbors then all nodes update their distance vectors so this is what a round"
      },
      {
        "start": 1521.39,
        "end": 1548.68,
        "text": " I mean this is I mean this is a usual thing but still they have given it right in each round what happened that all node actions their distance vector to each other and they update the distance vector side they are calling it as a round now they are saying in between two rounds in between two rounds this is not a round basically they are saying in between two rounds any change in the cost of link will cause the two incident nodes to change only that entry in the distance vectors so for example "
      }
    ],
    "start": 87
  },
  {
    "id": 88,
    "lecture": 29,
    "title": "Trace distance-vector updates · Explore",
    "concept": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. A distance-vector update is local: a router compares its current route with each neighbor’s advertised distance plus link cost, then selects the cheapest valid next hop.",
    "teachingSteps": [
      "Explore: Use the route, control message or fragment metadata to interpret the path.",
      "A distance-vector update is local: a router compares its current route with each neighbor’s advertised distance plus link cost, then selects the cheapest valid next hop.",
      "Choose the next hop or the required delivery response."
    ],
    "foundation": {
      "title": "Trace distance-vector updates",
      "idea": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. A distance-vector update is local: a router compares its current route with each neighbor’s advertised distance plus link cost, then selects the cheapest valid next hop.",
      "terms": [
        "Router: A device that forwards IP packets between networks.",
        "Next hop: The neighboring router or interface chosen for forwarding a packet.",
        "MTU: The largest link-layer payload a link can carry in one frame."
      ],
      "example": "After a link failure, routers may learn about it gradually; count-to-infinity behavior is one reason distance-vector protocols use mechanisms such as split horizon or poisoned reverse."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Trace distance-vector updates · Explore: A neighbor advertises a destination cost of 6 and the local link cost is 3. What candidate cost is compared? Which step should the host or router take next?",
        "options": [
          "Apply the forwarding or control-plane rule",
          "Inspect destination, route and link limits",
          "Select the next hop or packet-handling action"
        ],
        "answer": 0,
        "explanation": "Apply the forwarding or control-plane rule. Use the route, control message or fragment metadata to interpret the path."
      },
      {
        "type": "match",
        "prompt": "Trace distance-vector updates · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Next hop",
            "The neighboring router or interface chosen for forwarding a packet."
          ],
          [
            "MTU",
            "The largest link-layer payload a link can carry in one frame."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Trace distance-vector updates · Explore: put the actions in a valid working sequence.",
        "items": [
          "Inspect destination, route and link limits",
          "Apply the forwarding or control-plane rule",
          "Select the next hop or packet-handling action"
        ],
        "explanation": "Read the packet’s destination and the relevant network constraints. Use the route, control message or fragment metadata to interpret the path. Choose the next hop or the required delivery response."
      },
      {
        "type": "choice",
        "prompt": "Trace distance-vector updates · Explore: which statement is accurate for trace distance-vector updates?",
        "options": [
          "9",
          "6",
          "18"
        ],
        "answer": 0,
        "explanation": "9. A distance-vector update is local: a router compares its current route with each neighbor’s advertised distance plus link cost, then selects the cheapest valid next hop."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "routing",
      "mode": "dv",
      "lecture": 29
    },
    "cnScene": [
      "Read the packet’s destination and the relevant network constraints.",
      "A distance-vector update is local: a router compares its current route with each neighbor’s advertised distance plus link cost, then selects the cheapest valid next hop.",
      "Choose the next hop or the required delivery response."
    ],
    "sourceReferences": [
      {
        "start": 1497.66,
        "end": 1521.17,
        "text": " the instance of nodes n1 to n5 where the distance to itself is 0 also all links are symmetric and cost is identical in both directions in each round now they have defined something called as round so now what they are saying in each round all nodes exchange their distance vector with their respective neighbors then all nodes update their distance vectors so this is what a round"
      },
      {
        "start": 1521.39,
        "end": 1548.68,
        "text": " I mean this is I mean this is a usual thing but still they have given it right in each round what happened that all node actions their distance vector to each other and they update the distance vector side they are calling it as a round now they are saying in between two rounds in between two rounds this is not a round basically they are saying in between two rounds any change in the cost of link will cause the two incident nodes to change only that entry in the distance vectors so for example "
      }
    ],
    "start": 88
  },
  {
    "id": 89,
    "lecture": 29,
    "title": "Trace distance-vector updates · Apply",
    "concept": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. A distance-vector update is local: a router compares its current route with each neighbor’s advertised distance plus link cost, then selects the cheapest valid next hop.",
    "teachingSteps": [
      "Apply: Choose the next hop or the required delivery response.",
      "A distance-vector update is local: a router compares its current route with each neighbor’s advertised distance plus link cost, then selects the cheapest valid next hop.",
      "Read the packet’s destination and the relevant network constraints."
    ],
    "foundation": {
      "title": "Trace distance-vector updates",
      "idea": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. A distance-vector update is local: a router compares its current route with each neighbor’s advertised distance plus link cost, then selects the cheapest valid next hop.",
      "terms": [
        "Router: A device that forwards IP packets between networks.",
        "Next hop: The neighboring router or interface chosen for forwarding a packet.",
        "MTU: The largest link-layer payload a link can carry in one frame."
      ],
      "example": "After a link failure, routers may learn about it gradually; count-to-infinity behavior is one reason distance-vector protocols use mechanisms such as split horizon or poisoned reverse."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Trace distance-vector updates · Apply: A new case changes one condition: A neighbor advertises a destination cost of 6 and the local link cost is 3. What candidate cost is compared? Which conclusion still follows?",
        "options": [
          "6",
          "9",
          "18"
        ],
        "answer": 1,
        "explanation": "9. Choose the next hop or the required delivery response."
      },
      {
        "type": "match",
        "prompt": "Trace distance-vector updates · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "MTU",
            "The largest link-layer payload a link can carry in one frame."
          ],
          [
            "Router",
            "A device that forwards IP packets between networks."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Trace distance-vector updates · Apply: put the actions in a valid working sequence.",
        "items": [
          "Inspect destination, route and link limits",
          "Apply the forwarding or control-plane rule",
          "Select the next hop or packet-handling action"
        ],
        "explanation": "Read the packet’s destination and the relevant network constraints. Use the route, control message or fragment metadata to interpret the path. Choose the next hop or the required delivery response."
      },
      {
        "type": "choice",
        "prompt": "Trace distance-vector updates · Apply: which statement is accurate for trace distance-vector updates?",
        "options": [
          "9",
          "6",
          "18"
        ],
        "answer": 0,
        "explanation": "9. A distance-vector update is local: a router compares its current route with each neighbor’s advertised distance plus link cost, then selects the cheapest valid next hop."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "routing",
      "mode": "dv",
      "lecture": 29
    },
    "cnScene": [
      "Read the packet’s destination and the relevant network constraints.",
      "A distance-vector update is local: a router compares its current route with each neighbor’s advertised distance plus link cost, then selects the cheapest valid next hop.",
      "Choose the next hop or the required delivery response."
    ],
    "sourceReferences": [
      {
        "start": 1497.66,
        "end": 1521.17,
        "text": " the instance of nodes n1 to n5 where the distance to itself is 0 also all links are symmetric and cost is identical in both directions in each round now they have defined something called as round so now what they are saying in each round all nodes exchange their distance vector with their respective neighbors then all nodes update their distance vectors so this is what a round"
      },
      {
        "start": 1521.39,
        "end": 1548.68,
        "text": " I mean this is I mean this is a usual thing but still they have given it right in each round what happened that all node actions their distance vector to each other and they update the distance vector side they are calling it as a round now they are saying in between two rounds in between two rounds this is not a round basically they are saying in between two rounds any change in the cost of link will cause the two incident nodes to change only that entry in the distance vectors so for example "
      }
    ],
    "start": 89
  },
  {
    "id": 90,
    "lecture": 30,
    "title": "Find paths with link-state routing · Discover",
    "concept": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. Link-state routers flood link information so each router can build a topology map, then run Dijkstra’s shortest-path algorithm from itself to choose next hops.",
    "teachingSteps": [
      "Discover: Read the packet’s destination and the relevant network constraints.",
      "Link-state routers flood link information so each router can build a topology map, then run Dijkstra’s shortest-path algorithm from itself to choose next hops.",
      "Use the route, control message or fragment metadata to interpret the path."
    ],
    "foundation": {
      "title": "Find paths with link-state routing",
      "idea": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. Link-state routers flood link information so each router can build a topology map, then run Dijkstra’s shortest-path algorithm from itself to choose next hops.",
      "terms": [
        "Router: A device that forwards IP packets between networks.",
        "Next hop: The neighboring router or interface chosen for forwarding a packet.",
        "MTU: The largest link-layer payload a link can carry in one frame."
      ],
      "example": "With link costs A-B=2, B-C=3 and A-C=8, Dijkstra selects A-B-C at cost 5 rather than direct A-C at cost 8."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Find paths with link-state routing · Discover: Link-state routing computes shortest paths from a complete topology map. Which algorithm is commonly used? Which networking rule determines the result?",
        "options": [
          "Dijkstra’s algorithm",
          "Binary search",
          "CRC division"
        ],
        "answer": 0,
        "explanation": "Dijkstra’s algorithm. Read the packet’s destination and the relevant network constraints."
      },
      {
        "type": "match",
        "prompt": "Find paths with link-state routing · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Router",
            "A device that forwards IP packets between networks."
          ],
          [
            "Next hop",
            "The neighboring router or interface chosen for forwarding a packet."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Find paths with link-state routing · Discover: put the actions in a valid working sequence.",
        "items": [
          "Inspect destination, route and link limits",
          "Apply the forwarding or control-plane rule",
          "Select the next hop or packet-handling action"
        ],
        "explanation": "Read the packet’s destination and the relevant network constraints. Use the route, control message or fragment metadata to interpret the path. Choose the next hop or the required delivery response."
      },
      {
        "type": "choice",
        "prompt": "Find paths with link-state routing · Discover: which statement is accurate for find paths with link-state routing?",
        "options": [
          "Dijkstra’s algorithm",
          "Binary search",
          "CRC division"
        ],
        "answer": 0,
        "explanation": "Dijkstra’s algorithm. Link-state routers flood link information so each router can build a topology map, then run Dijkstra’s shortest-path algorithm from itself to choose next hops."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "routing",
      "mode": "ls",
      "lecture": 30
    },
    "cnScene": [
      "Read the packet’s destination and the relevant network constraints.",
      "Link-state routers flood link information so each router can build a topology map, then run Dijkstra’s shortest-path algorithm from itself to choose next hops.",
      "Choose the next hop or the required delivery response."
    ],
    "sourceReferences": [
      {
        "start": 56.18,
        "end": 81.1,
        "text": " Yeah, so now let's just see link state routing, which is currently the more useful algorithm. But it is very, very easy algorithm. So suppose this is the topology that you have. A is connected to B, A is connected to E with these cores. Okay, these are the cores that we have. These are the cores. And now, in this algorithm, what every router will do? Every router will flood the information, not to just neighbors."
      },
      {
        "start": 233.75,
        "end": 260.95,
        "text": " at every router you have this representation which means you have the complete the graph representation so these are called link state packets so if you have all this information then at every node you know what is what is going on like i mean you have the at a you have the whole graph at b also you have the whole graph at e also you have the whole graph so what is the benefit of this now you will say that okay if you have the whole graphs then what you can do you can just apply the shortest pa"
      }
    ],
    "start": 90
  },
  {
    "id": 91,
    "lecture": 30,
    "title": "Find paths with link-state routing · Explore",
    "concept": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. Link-state routers flood link information so each router can build a topology map, then run Dijkstra’s shortest-path algorithm from itself to choose next hops.",
    "teachingSteps": [
      "Explore: Use the route, control message or fragment metadata to interpret the path.",
      "Link-state routers flood link information so each router can build a topology map, then run Dijkstra’s shortest-path algorithm from itself to choose next hops.",
      "Choose the next hop or the required delivery response."
    ],
    "foundation": {
      "title": "Find paths with link-state routing",
      "idea": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. Link-state routers flood link information so each router can build a topology map, then run Dijkstra’s shortest-path algorithm from itself to choose next hops.",
      "terms": [
        "Router: A device that forwards IP packets between networks.",
        "Next hop: The neighboring router or interface chosen for forwarding a packet.",
        "MTU: The largest link-layer payload a link can carry in one frame."
      ],
      "example": "With link costs A-B=2, B-C=3 and A-C=8, Dijkstra selects A-B-C at cost 5 rather than direct A-C at cost 8."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Find paths with link-state routing · Explore: Link-state routing computes shortest paths from a complete topology map. Which algorithm is commonly used? Which step should the host or router take next?",
        "options": [
          "Inspect destination, route and link limits",
          "Apply the forwarding or control-plane rule",
          "Select the next hop or packet-handling action"
        ],
        "answer": 1,
        "explanation": "Apply the forwarding or control-plane rule. Use the route, control message or fragment metadata to interpret the path."
      },
      {
        "type": "match",
        "prompt": "Find paths with link-state routing · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Next hop",
            "The neighboring router or interface chosen for forwarding a packet."
          ],
          [
            "MTU",
            "The largest link-layer payload a link can carry in one frame."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Find paths with link-state routing · Explore: put the actions in a valid working sequence.",
        "items": [
          "Inspect destination, route and link limits",
          "Apply the forwarding or control-plane rule",
          "Select the next hop or packet-handling action"
        ],
        "explanation": "Read the packet’s destination and the relevant network constraints. Use the route, control message or fragment metadata to interpret the path. Choose the next hop or the required delivery response."
      },
      {
        "type": "choice",
        "prompt": "Find paths with link-state routing · Explore: which statement is accurate for find paths with link-state routing?",
        "options": [
          "Dijkstra’s algorithm",
          "Binary search",
          "CRC division"
        ],
        "answer": 0,
        "explanation": "Dijkstra’s algorithm. Link-state routers flood link information so each router can build a topology map, then run Dijkstra’s shortest-path algorithm from itself to choose next hops."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "routing",
      "mode": "ls",
      "lecture": 30
    },
    "cnScene": [
      "Read the packet’s destination and the relevant network constraints.",
      "Link-state routers flood link information so each router can build a topology map, then run Dijkstra’s shortest-path algorithm from itself to choose next hops.",
      "Choose the next hop or the required delivery response."
    ],
    "sourceReferences": [
      {
        "start": 56.18,
        "end": 81.1,
        "text": " Yeah, so now let's just see link state routing, which is currently the more useful algorithm. But it is very, very easy algorithm. So suppose this is the topology that you have. A is connected to B, A is connected to E with these cores. Okay, these are the cores that we have. These are the cores. And now, in this algorithm, what every router will do? Every router will flood the information, not to just neighbors."
      },
      {
        "start": 233.75,
        "end": 260.95,
        "text": " at every router you have this representation which means you have the complete the graph representation so these are called link state packets so if you have all this information then at every node you know what is what is going on like i mean you have the at a you have the whole graph at b also you have the whole graph at e also you have the whole graph so what is the benefit of this now you will say that okay if you have the whole graphs then what you can do you can just apply the shortest pa"
      }
    ],
    "start": 91
  },
  {
    "id": 92,
    "lecture": 30,
    "title": "Find paths with link-state routing · Apply",
    "concept": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. Link-state routers flood link information so each router can build a topology map, then run Dijkstra’s shortest-path algorithm from itself to choose next hops.",
    "teachingSteps": [
      "Apply: Choose the next hop or the required delivery response.",
      "Link-state routers flood link information so each router can build a topology map, then run Dijkstra’s shortest-path algorithm from itself to choose next hops.",
      "Read the packet’s destination and the relevant network constraints."
    ],
    "foundation": {
      "title": "Find paths with link-state routing",
      "idea": "IP forwarding sends packets toward a destination across multiple networks. Routers choose a next hop from routing information; control messages, address translation and fragmentation support delivery when paths or link limits require them. Link-state routers flood link information so each router can build a topology map, then run Dijkstra’s shortest-path algorithm from itself to choose next hops.",
      "terms": [
        "Router: A device that forwards IP packets between networks.",
        "Next hop: The neighboring router or interface chosen for forwarding a packet.",
        "MTU: The largest link-layer payload a link can carry in one frame."
      ],
      "example": "With link costs A-B=2, B-C=3 and A-C=8, Dijkstra selects A-B-C at cost 5 rather than direct A-C at cost 8."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Find paths with link-state routing · Apply: A new case changes one condition: Link-state routing computes shortest paths from a complete topology map. Which algorithm is commonly used? Which conclusion still follows?",
        "options": [
          "Binary search",
          "CRC division",
          "Dijkstra’s algorithm"
        ],
        "answer": 2,
        "explanation": "Dijkstra’s algorithm. Choose the next hop or the required delivery response."
      },
      {
        "type": "match",
        "prompt": "Find paths with link-state routing · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "MTU",
            "The largest link-layer payload a link can carry in one frame."
          ],
          [
            "Router",
            "A device that forwards IP packets between networks."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Find paths with link-state routing · Apply: put the actions in a valid working sequence.",
        "items": [
          "Inspect destination, route and link limits",
          "Apply the forwarding or control-plane rule",
          "Select the next hop or packet-handling action"
        ],
        "explanation": "Read the packet’s destination and the relevant network constraints. Use the route, control message or fragment metadata to interpret the path. Choose the next hop or the required delivery response."
      },
      {
        "type": "choice",
        "prompt": "Find paths with link-state routing · Apply: which statement is accurate for find paths with link-state routing?",
        "options": [
          "Dijkstra’s algorithm",
          "Binary search",
          "CRC division"
        ],
        "answer": 0,
        "explanation": "Dijkstra’s algorithm. Link-state routers flood link information so each router can build a topology map, then run Dijkstra’s shortest-path algorithm from itself to choose next hops."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "routing",
      "mode": "ls",
      "lecture": 30
    },
    "cnScene": [
      "Read the packet’s destination and the relevant network constraints.",
      "Link-state routers flood link information so each router can build a topology map, then run Dijkstra’s shortest-path algorithm from itself to choose next hops.",
      "Choose the next hop or the required delivery response."
    ],
    "sourceReferences": [
      {
        "start": 56.18,
        "end": 81.1,
        "text": " Yeah, so now let's just see link state routing, which is currently the more useful algorithm. But it is very, very easy algorithm. So suppose this is the topology that you have. A is connected to B, A is connected to E with these cores. Okay, these are the cores that we have. These are the cores. And now, in this algorithm, what every router will do? Every router will flood the information, not to just neighbors."
      },
      {
        "start": 233.75,
        "end": 260.95,
        "text": " at every router you have this representation which means you have the complete the graph representation so these are called link state packets so if you have all this information then at every node you know what is what is going on like i mean you have the at a you have the whole graph at b also you have the whole graph at e also you have the whole graph so what is the benefit of this now you will say that okay if you have the whole graphs then what you can do you can just apply the shortest pa"
      }
    ],
    "start": 92
  },
  {
    "id": 93,
    "lecture": 31,
    "title": "Meet the transport layer and UDP · Discover",
    "concept": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. The transport layer delivers data between application processes using port numbers. UDP provides message boundaries and a checksum but does not establish a connection, retransmit lost data or guarantee order.",
    "teachingSteps": [
      "Discover: Identify the application endpoints and transport protocol.",
      "The transport layer delivers data between application processes using port numbers. UDP provides message boundaries and a checksum but does not establish a connection, retransmit lost data or guarantee order.",
      "Read the relevant header field or connection event."
    ],
    "foundation": {
      "title": "Meet the transport layer and UDP",
      "idea": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. The transport layer delivers data between application processes using port numbers. UDP provides message boundaries and a checksum but does not establish a connection, retransmit lost data or guarantee order.",
      "terms": [
        "Port: A transport-layer number that identifies an application endpoint on a host.",
        "UDP datagram: A message-oriented transport unit with no built-in delivery or ordering guarantee.",
        "TCP segment: A transport unit carrying sequence, acknowledgment, flags and window information."
      ],
      "example": "A DNS query can use UDP: the datagram identifies source and destination ports, while the application handles any retry policy it needs."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Meet the transport layer and UDP · Discover: Which statement describes UDP? Which networking rule determines the result?",
        "options": [
          "It performs a three-way connection handshake",
          "It preserves datagram boundaries but does not guarantee delivery or order",
          "It retransmits every lost segment automatically"
        ],
        "answer": 1,
        "explanation": "It preserves datagram boundaries but does not guarantee delivery or order. Identify the application endpoints and transport protocol."
      },
      {
        "type": "match",
        "prompt": "Meet the transport layer and UDP · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Port",
            "A transport-layer number that identifies an application endpoint on a host."
          ],
          [
            "UDP datagram",
            "A message-oriented transport unit with no built-in delivery or ordering guarantee."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Meet the transport layer and UDP · Discover: put the actions in a valid working sequence.",
        "items": [
          "Choose the transport service and process ports",
          "Read the segment or datagram fields",
          "Apply the connection and delivery behavior"
        ],
        "explanation": "Identify the application endpoints and transport protocol. Read the relevant header field or connection event. Apply the protocol’s delivery, reliability or control rule."
      },
      {
        "type": "choice",
        "prompt": "Meet the transport layer and UDP · Discover: which statement is accurate for meet the transport layer and udp?",
        "options": [
          "It preserves datagram boundaries but does not guarantee delivery or order",
          "It performs a three-way connection handshake",
          "It retransmits every lost segment automatically"
        ],
        "answer": 0,
        "explanation": "It preserves datagram boundaries but does not guarantee delivery or order. The transport layer delivers data between application processes using port numbers. UDP provides message boundaries and a checksum but does not establish a connection, retransmit lost data or guarantee order."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "transport",
      "mode": "udp",
      "lecture": 31
    },
    "cnScene": [
      "Identify the application endpoints and transport protocol.",
      "The transport layer delivers data between application processes using port numbers. UDP provides message boundaries and a checksum but does not establish a connection, retransmit lost data or guarantee order.",
      "Apply the protocol’s delivery, reliability or control rule."
    ],
    "sourceReferences": [
      {
        "start": 1098.89,
        "end": 1128.22,
        "text": " the application program it is just like that see the reverse way of this if if someone is requesting then it will first go to the network layer and then transport layer which are in the in the operating system itself right and then this operating system will be delivering that to the application program so the transport layer is basically is basically responsible responsible for communication between the processes which means if there is one process here there is another process here how these "
      },
      {
        "start": 2834.07,
        "end": 2864.51,
        "text": " and in the application layer we use these many protocols and the Ethernet also in the data link layer we might be using this but most of the time the popular protocol is Ethernet here the popular protocol is IP but here at the transport layer the protocol that we might be using is TCP and UDP and both are equally popular okay we will see them so just to recall you that what the what does the transport layer does it provides the communication between process to process right"
      }
    ],
    "start": 93
  },
  {
    "id": 94,
    "lecture": 31,
    "title": "Meet the transport layer and UDP · Explore",
    "concept": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. The transport layer delivers data between application processes using port numbers. UDP provides message boundaries and a checksum but does not establish a connection, retransmit lost data or guarantee order.",
    "teachingSteps": [
      "Explore: Read the relevant header field or connection event.",
      "The transport layer delivers data between application processes using port numbers. UDP provides message boundaries and a checksum but does not establish a connection, retransmit lost data or guarantee order.",
      "Apply the protocol’s delivery, reliability or control rule."
    ],
    "foundation": {
      "title": "Meet the transport layer and UDP",
      "idea": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. The transport layer delivers data between application processes using port numbers. UDP provides message boundaries and a checksum but does not establish a connection, retransmit lost data or guarantee order.",
      "terms": [
        "Port: A transport-layer number that identifies an application endpoint on a host.",
        "UDP datagram: A message-oriented transport unit with no built-in delivery or ordering guarantee.",
        "TCP segment: A transport unit carrying sequence, acknowledgment, flags and window information."
      ],
      "example": "A DNS query can use UDP: the datagram identifies source and destination ports, while the application handles any retry policy it needs."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Meet the transport layer and UDP · Explore: Which statement describes UDP? Which step should the host or router take next?",
        "options": [
          "Choose the transport service and process ports",
          "Apply the connection and delivery behavior",
          "Read the segment or datagram fields"
        ],
        "answer": 2,
        "explanation": "Read the segment or datagram fields. Read the relevant header field or connection event."
      },
      {
        "type": "match",
        "prompt": "Meet the transport layer and UDP · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "UDP datagram",
            "A message-oriented transport unit with no built-in delivery or ordering guarantee."
          ],
          [
            "TCP segment",
            "A transport unit carrying sequence, acknowledgment, flags and window information."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Meet the transport layer and UDP · Explore: put the actions in a valid working sequence.",
        "items": [
          "Choose the transport service and process ports",
          "Read the segment or datagram fields",
          "Apply the connection and delivery behavior"
        ],
        "explanation": "Identify the application endpoints and transport protocol. Read the relevant header field or connection event. Apply the protocol’s delivery, reliability or control rule."
      },
      {
        "type": "choice",
        "prompt": "Meet the transport layer and UDP · Explore: which statement is accurate for meet the transport layer and udp?",
        "options": [
          "It preserves datagram boundaries but does not guarantee delivery or order",
          "It performs a three-way connection handshake",
          "It retransmits every lost segment automatically"
        ],
        "answer": 0,
        "explanation": "It preserves datagram boundaries but does not guarantee delivery or order. The transport layer delivers data between application processes using port numbers. UDP provides message boundaries and a checksum but does not establish a connection, retransmit lost data or guarantee order."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "transport",
      "mode": "udp",
      "lecture": 31
    },
    "cnScene": [
      "Identify the application endpoints and transport protocol.",
      "The transport layer delivers data between application processes using port numbers. UDP provides message boundaries and a checksum but does not establish a connection, retransmit lost data or guarantee order.",
      "Apply the protocol’s delivery, reliability or control rule."
    ],
    "sourceReferences": [
      {
        "start": 1098.89,
        "end": 1128.22,
        "text": " the application program it is just like that see the reverse way of this if if someone is requesting then it will first go to the network layer and then transport layer which are in the in the operating system itself right and then this operating system will be delivering that to the application program so the transport layer is basically is basically responsible responsible for communication between the processes which means if there is one process here there is another process here how these "
      },
      {
        "start": 2834.07,
        "end": 2864.51,
        "text": " and in the application layer we use these many protocols and the Ethernet also in the data link layer we might be using this but most of the time the popular protocol is Ethernet here the popular protocol is IP but here at the transport layer the protocol that we might be using is TCP and UDP and both are equally popular okay we will see them so just to recall you that what the what does the transport layer does it provides the communication between process to process right"
      }
    ],
    "start": 94
  },
  {
    "id": 95,
    "lecture": 31,
    "title": "Meet the transport layer and UDP · Apply",
    "concept": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. The transport layer delivers data between application processes using port numbers. UDP provides message boundaries and a checksum but does not establish a connection, retransmit lost data or guarantee order.",
    "teachingSteps": [
      "Apply: Apply the protocol’s delivery, reliability or control rule.",
      "The transport layer delivers data between application processes using port numbers. UDP provides message boundaries and a checksum but does not establish a connection, retransmit lost data or guarantee order.",
      "Identify the application endpoints and transport protocol."
    ],
    "foundation": {
      "title": "Meet the transport layer and UDP",
      "idea": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. The transport layer delivers data between application processes using port numbers. UDP provides message boundaries and a checksum but does not establish a connection, retransmit lost data or guarantee order.",
      "terms": [
        "Port: A transport-layer number that identifies an application endpoint on a host.",
        "UDP datagram: A message-oriented transport unit with no built-in delivery or ordering guarantee.",
        "TCP segment: A transport unit carrying sequence, acknowledgment, flags and window information."
      ],
      "example": "A DNS query can use UDP: the datagram identifies source and destination ports, while the application handles any retry policy it needs."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Meet the transport layer and UDP · Apply: A new case changes one condition: Which statement describes UDP? Which conclusion still follows?",
        "options": [
          "It preserves datagram boundaries but does not guarantee delivery or order",
          "It performs a three-way connection handshake",
          "It retransmits every lost segment automatically"
        ],
        "answer": 0,
        "explanation": "It preserves datagram boundaries but does not guarantee delivery or order. Apply the protocol’s delivery, reliability or control rule."
      },
      {
        "type": "match",
        "prompt": "Meet the transport layer and UDP · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "TCP segment",
            "A transport unit carrying sequence, acknowledgment, flags and window information."
          ],
          [
            "Port",
            "A transport-layer number that identifies an application endpoint on a host."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Meet the transport layer and UDP · Apply: put the actions in a valid working sequence.",
        "items": [
          "Choose the transport service and process ports",
          "Read the segment or datagram fields",
          "Apply the connection and delivery behavior"
        ],
        "explanation": "Identify the application endpoints and transport protocol. Read the relevant header field or connection event. Apply the protocol’s delivery, reliability or control rule."
      },
      {
        "type": "choice",
        "prompt": "Meet the transport layer and UDP · Apply: which statement is accurate for meet the transport layer and udp?",
        "options": [
          "It preserves datagram boundaries but does not guarantee delivery or order",
          "It performs a three-way connection handshake",
          "It retransmits every lost segment automatically"
        ],
        "answer": 0,
        "explanation": "It preserves datagram boundaries but does not guarantee delivery or order. The transport layer delivers data between application processes using port numbers. UDP provides message boundaries and a checksum but does not establish a connection, retransmit lost data or guarantee order."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "transport",
      "mode": "udp",
      "lecture": 31
    },
    "cnScene": [
      "Identify the application endpoints and transport protocol.",
      "The transport layer delivers data between application processes using port numbers. UDP provides message boundaries and a checksum but does not establish a connection, retransmit lost data or guarantee order.",
      "Apply the protocol’s delivery, reliability or control rule."
    ],
    "sourceReferences": [
      {
        "start": 1098.89,
        "end": 1128.22,
        "text": " the application program it is just like that see the reverse way of this if if someone is requesting then it will first go to the network layer and then transport layer which are in the in the operating system itself right and then this operating system will be delivering that to the application program so the transport layer is basically is basically responsible responsible for communication between the processes which means if there is one process here there is another process here how these "
      },
      {
        "start": 2834.07,
        "end": 2864.51,
        "text": " and in the application layer we use these many protocols and the Ethernet also in the data link layer we might be using this but most of the time the popular protocol is Ethernet here the popular protocol is IP but here at the transport layer the protocol that we might be using is TCP and UDP and both are equally popular okay we will see them so just to recall you that what the what does the transport layer does it provides the communication between process to process right"
      }
    ],
    "start": 95
  },
  {
    "id": 96,
    "lecture": 32,
    "title": "Read TCP headers and establish a connection · Discover",
    "concept": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. TCP provides a reliable byte stream using sequence and acknowledgment numbers, flags, ports and window information. A typical connection starts with SYN, SYN-ACK, ACK.",
    "teachingSteps": [
      "Discover: Identify the application endpoints and transport protocol.",
      "TCP provides a reliable byte stream using sequence and acknowledgment numbers, flags, ports and window information. A typical connection starts with SYN, SYN-ACK, ACK.",
      "Read the relevant header field or connection event."
    ],
    "foundation": {
      "title": "Read TCP headers and establish a connection",
      "idea": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. TCP provides a reliable byte stream using sequence and acknowledgment numbers, flags, ports and window information. A typical connection starts with SYN, SYN-ACK, ACK.",
      "terms": [
        "Port: A transport-layer number that identifies an application endpoint on a host.",
        "UDP datagram: A message-oriented transport unit with no built-in delivery or ordering guarantee.",
        "TCP segment: A transport unit carrying sequence, acknowledgment, flags and window information."
      ],
      "example": "A client sends SYN with an initial sequence number; the server acknowledges it with SYN-ACK and its own initial sequence number; the client finishes with ACK."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Read TCP headers and establish a connection · Discover: What is the usual order of the TCP three-way handshake? Which networking rule determines the result?",
        "options": [
          "ACK, FIN, SYN",
          "SYN, ACK, RST",
          "SYN, SYN-ACK, ACK"
        ],
        "answer": 2,
        "explanation": "SYN, SYN-ACK, ACK. Identify the application endpoints and transport protocol."
      },
      {
        "type": "match",
        "prompt": "Read TCP headers and establish a connection · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Port",
            "A transport-layer number that identifies an application endpoint on a host."
          ],
          [
            "UDP datagram",
            "A message-oriented transport unit with no built-in delivery or ordering guarantee."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Read TCP headers and establish a connection · Discover: put the actions in a valid working sequence.",
        "items": [
          "Choose the transport service and process ports",
          "Read the segment or datagram fields",
          "Apply the connection and delivery behavior"
        ],
        "explanation": "Identify the application endpoints and transport protocol. Read the relevant header field or connection event. Apply the protocol’s delivery, reliability or control rule."
      },
      {
        "type": "choice",
        "prompt": "Read TCP headers and establish a connection · Discover: which statement is accurate for read tcp headers and establish a connection?",
        "options": [
          "SYN, SYN-ACK, ACK",
          "ACK, FIN, SYN",
          "SYN, ACK, RST"
        ],
        "answer": 0,
        "explanation": "SYN, SYN-ACK, ACK. TCP provides a reliable byte stream using sequence and acknowledgment numbers, flags, ports and window information. A typical connection starts with SYN, SYN-ACK, ACK."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "transport",
      "mode": "handshake",
      "lecture": 32
    },
    "cnScene": [
      "Identify the application endpoints and transport protocol.",
      "TCP provides a reliable byte stream using sequence and acknowledgment numbers, flags, ports and window information. A typical connection starts with SYN, SYN-ACK, ACK.",
      "Apply the protocol’s delivery, reliability or control rule."
    ],
    "sourceReferences": [
      {
        "start": 1173.22,
        "end": 1214.23,
        "text": " Okay, that's why we are calling it full-to-plex. So let me just write it in one connection itself. You can send and receive the data. What is connection oriented before sending the data? We establish a connection. What is a reliable protocol? It means that we make sure at the TCP, TCP will make sure that the data is in order and not corrupted, right? Okay. So you can see here that this is application process. Application process will be writing some bytes and TCP will be sending that."
      },
      {
        "start": 3354.65,
        "end": 3387.07,
        "text": " Little bit about the sequence number enclosement number we have already seen. We will see this in more detail, okay, in the connection establishment phase. Now, have you understood little bit what is the sequence number? I mean, let's suppose if I ask you, if I ask you that, that the data we are sending, the initial byte number is let's suppose 7000 and then this byte number is let's suppose 7353. Then what is the sequence number here? In the sequence number field what you will write? You will "
      }
    ],
    "start": 96
  },
  {
    "id": 97,
    "lecture": 32,
    "title": "Read TCP headers and establish a connection · Explore",
    "concept": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. TCP provides a reliable byte stream using sequence and acknowledgment numbers, flags, ports and window information. A typical connection starts with SYN, SYN-ACK, ACK.",
    "teachingSteps": [
      "Explore: Read the relevant header field or connection event.",
      "TCP provides a reliable byte stream using sequence and acknowledgment numbers, flags, ports and window information. A typical connection starts with SYN, SYN-ACK, ACK.",
      "Apply the protocol’s delivery, reliability or control rule."
    ],
    "foundation": {
      "title": "Read TCP headers and establish a connection",
      "idea": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. TCP provides a reliable byte stream using sequence and acknowledgment numbers, flags, ports and window information. A typical connection starts with SYN, SYN-ACK, ACK.",
      "terms": [
        "Port: A transport-layer number that identifies an application endpoint on a host.",
        "UDP datagram: A message-oriented transport unit with no built-in delivery or ordering guarantee.",
        "TCP segment: A transport unit carrying sequence, acknowledgment, flags and window information."
      ],
      "example": "A client sends SYN with an initial sequence number; the server acknowledges it with SYN-ACK and its own initial sequence number; the client finishes with ACK."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Read TCP headers and establish a connection · Explore: What is the usual order of the TCP three-way handshake? Which step should the host or router take next?",
        "options": [
          "Read the segment or datagram fields",
          "Choose the transport service and process ports",
          "Apply the connection and delivery behavior"
        ],
        "answer": 0,
        "explanation": "Read the segment or datagram fields. Read the relevant header field or connection event."
      },
      {
        "type": "match",
        "prompt": "Read TCP headers and establish a connection · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "UDP datagram",
            "A message-oriented transport unit with no built-in delivery or ordering guarantee."
          ],
          [
            "TCP segment",
            "A transport unit carrying sequence, acknowledgment, flags and window information."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Read TCP headers and establish a connection · Explore: put the actions in a valid working sequence.",
        "items": [
          "Choose the transport service and process ports",
          "Read the segment or datagram fields",
          "Apply the connection and delivery behavior"
        ],
        "explanation": "Identify the application endpoints and transport protocol. Read the relevant header field or connection event. Apply the protocol’s delivery, reliability or control rule."
      },
      {
        "type": "choice",
        "prompt": "Read TCP headers and establish a connection · Explore: which statement is accurate for read tcp headers and establish a connection?",
        "options": [
          "SYN, SYN-ACK, ACK",
          "ACK, FIN, SYN",
          "SYN, ACK, RST"
        ],
        "answer": 0,
        "explanation": "SYN, SYN-ACK, ACK. TCP provides a reliable byte stream using sequence and acknowledgment numbers, flags, ports and window information. A typical connection starts with SYN, SYN-ACK, ACK."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "transport",
      "mode": "handshake",
      "lecture": 32
    },
    "cnScene": [
      "Identify the application endpoints and transport protocol.",
      "TCP provides a reliable byte stream using sequence and acknowledgment numbers, flags, ports and window information. A typical connection starts with SYN, SYN-ACK, ACK.",
      "Apply the protocol’s delivery, reliability or control rule."
    ],
    "sourceReferences": [
      {
        "start": 1173.22,
        "end": 1214.23,
        "text": " Okay, that's why we are calling it full-to-plex. So let me just write it in one connection itself. You can send and receive the data. What is connection oriented before sending the data? We establish a connection. What is a reliable protocol? It means that we make sure at the TCP, TCP will make sure that the data is in order and not corrupted, right? Okay. So you can see here that this is application process. Application process will be writing some bytes and TCP will be sending that."
      },
      {
        "start": 3354.65,
        "end": 3387.07,
        "text": " Little bit about the sequence number enclosement number we have already seen. We will see this in more detail, okay, in the connection establishment phase. Now, have you understood little bit what is the sequence number? I mean, let's suppose if I ask you, if I ask you that, that the data we are sending, the initial byte number is let's suppose 7000 and then this byte number is let's suppose 7353. Then what is the sequence number here? In the sequence number field what you will write? You will "
      }
    ],
    "start": 97
  },
  {
    "id": 98,
    "lecture": 32,
    "title": "Read TCP headers and establish a connection · Apply",
    "concept": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. TCP provides a reliable byte stream using sequence and acknowledgment numbers, flags, ports and window information. A typical connection starts with SYN, SYN-ACK, ACK.",
    "teachingSteps": [
      "Apply: Apply the protocol’s delivery, reliability or control rule.",
      "TCP provides a reliable byte stream using sequence and acknowledgment numbers, flags, ports and window information. A typical connection starts with SYN, SYN-ACK, ACK.",
      "Identify the application endpoints and transport protocol."
    ],
    "foundation": {
      "title": "Read TCP headers and establish a connection",
      "idea": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. TCP provides a reliable byte stream using sequence and acknowledgment numbers, flags, ports and window information. A typical connection starts with SYN, SYN-ACK, ACK.",
      "terms": [
        "Port: A transport-layer number that identifies an application endpoint on a host.",
        "UDP datagram: A message-oriented transport unit with no built-in delivery or ordering guarantee.",
        "TCP segment: A transport unit carrying sequence, acknowledgment, flags and window information."
      ],
      "example": "A client sends SYN with an initial sequence number; the server acknowledges it with SYN-ACK and its own initial sequence number; the client finishes with ACK."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Read TCP headers and establish a connection · Apply: A new case changes one condition: What is the usual order of the TCP three-way handshake? Which conclusion still follows?",
        "options": [
          "ACK, FIN, SYN",
          "SYN, SYN-ACK, ACK",
          "SYN, ACK, RST"
        ],
        "answer": 1,
        "explanation": "SYN, SYN-ACK, ACK. Apply the protocol’s delivery, reliability or control rule."
      },
      {
        "type": "match",
        "prompt": "Read TCP headers and establish a connection · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "TCP segment",
            "A transport unit carrying sequence, acknowledgment, flags and window information."
          ],
          [
            "Port",
            "A transport-layer number that identifies an application endpoint on a host."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Read TCP headers and establish a connection · Apply: put the actions in a valid working sequence.",
        "items": [
          "Choose the transport service and process ports",
          "Read the segment or datagram fields",
          "Apply the connection and delivery behavior"
        ],
        "explanation": "Identify the application endpoints and transport protocol. Read the relevant header field or connection event. Apply the protocol’s delivery, reliability or control rule."
      },
      {
        "type": "choice",
        "prompt": "Read TCP headers and establish a connection · Apply: which statement is accurate for read tcp headers and establish a connection?",
        "options": [
          "SYN, SYN-ACK, ACK",
          "ACK, FIN, SYN",
          "SYN, ACK, RST"
        ],
        "answer": 0,
        "explanation": "SYN, SYN-ACK, ACK. TCP provides a reliable byte stream using sequence and acknowledgment numbers, flags, ports and window information. A typical connection starts with SYN, SYN-ACK, ACK."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "transport",
      "mode": "handshake",
      "lecture": 32
    },
    "cnScene": [
      "Identify the application endpoints and transport protocol.",
      "TCP provides a reliable byte stream using sequence and acknowledgment numbers, flags, ports and window information. A typical connection starts with SYN, SYN-ACK, ACK.",
      "Apply the protocol’s delivery, reliability or control rule."
    ],
    "sourceReferences": [
      {
        "start": 1173.22,
        "end": 1214.23,
        "text": " Okay, that's why we are calling it full-to-plex. So let me just write it in one connection itself. You can send and receive the data. What is connection oriented before sending the data? We establish a connection. What is a reliable protocol? It means that we make sure at the TCP, TCP will make sure that the data is in order and not corrupted, right? Okay. So you can see here that this is application process. Application process will be writing some bytes and TCP will be sending that."
      },
      {
        "start": 3354.65,
        "end": 3387.07,
        "text": " Little bit about the sequence number enclosement number we have already seen. We will see this in more detail, okay, in the connection establishment phase. Now, have you understood little bit what is the sequence number? I mean, let's suppose if I ask you, if I ask you that, that the data we are sending, the initial byte number is let's suppose 7000 and then this byte number is let's suppose 7353. Then what is the sequence number here? In the sequence number field what you will write? You will "
      }
    ],
    "start": 98
  },
  {
    "id": 99,
    "lecture": 33,
    "title": "Control TCP flow with the receive window · Discover",
    "concept": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. TCP flow control prevents a sender from overrunning the receiver. The receiver advertises available buffer space as a receive window; the sender limits unacknowledged data accordingly.",
    "teachingSteps": [
      "Discover: Read cwnd, the advertised receive window and the current TCP phase.",
      "TCP flow control prevents a sender from overrunning the receiver. The receiver advertises available buffer space as a receive window; the sender limits unacknowledged data accordingly.",
      "Apply the ACK, timeout or duplicate-ACK event."
    ],
    "foundation": {
      "title": "Control TCP flow with the receive window",
      "idea": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. TCP flow control prevents a sender from overrunning the receiver. The receiver advertises available buffer space as a receive window; the sender limits unacknowledged data accordingly.",
      "terms": [
        "Receive window (rwnd): The receiver’s advertised limit based on available buffer space.",
        "Congestion window (cwnd): The sender’s estimate of how much data the network can safely carry.",
        "MSS: The maximum TCP payload size used as a unit in many window calculations."
      ],
      "example": "If the receiver advertises a 4,000-byte window and the congestion window is 6,000 bytes, the sender may have at most 4,000 bytes outstanding under the simplified window model."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Control TCP flow with the receive window · Discover: The advertised receive window is 4,000 bytes and cwnd is 6,000 bytes. What is the simplified send limit? Which networking rule determines the result?",
        "options": [
          "4,000 bytes",
          "6,000 bytes",
          "10,000 bytes"
        ],
        "answer": 0,
        "explanation": "4,000 bytes. Read cwnd, the advertised receive window and the current TCP phase."
      },
      {
        "type": "match",
        "prompt": "Control TCP flow with the receive window · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Receive window (rwnd)",
            "The receiver’s advertised limit based on available buffer space."
          ],
          [
            "Congestion window (cwnd)",
            "The sender’s estimate of how much data the network can safely carry."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Control TCP flow with the receive window · Discover: put the actions in a valid working sequence.",
        "items": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "explanation": "Read cwnd, the advertised receive window and the current TCP phase. Apply the ACK, timeout or duplicate-ACK event. Update the send limit and the next congestion-control state."
      },
      {
        "type": "choice",
        "prompt": "Control TCP flow with the receive window · Discover: which statement is accurate for control tcp flow with the receive window?",
        "options": [
          "4,000 bytes",
          "6,000 bytes",
          "10,000 bytes"
        ],
        "answer": 0,
        "explanation": "4,000 bytes. TCP flow control prevents a sender from overrunning the receiver. The receiver advertises available buffer space as a receive window; the sender limits unacknowledged data accordingly."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "tcp",
      "mode": "flow",
      "lecture": 33
    },
    "cnScene": [
      "Read cwnd, the advertised receive window and the current TCP phase.",
      "TCP flow control prevents a sender from overrunning the receiver. The receiver advertises available buffer space as a receive window; the sender limits unacknowledged data accordingly.",
      "Update the send limit and the next congestion-control state."
    ],
    "sourceReferences": [
      {
        "start": 4114.55,
        "end": 4152.79,
        "text": " Okay. This particular diagram is the same one. I've also pasted in the slides. Is this understood? So basically this is the crux that receiver window size and TCP keep on changing based on how much is available, right? Based on how much is available. Based on how much buffer is available. So TCP inbuilt, okay. Inbuilt it provides a flow control. Why I'm saying inbuilt because because in the TCP header, there is very, very important field which basically provide the flow control and what is that"
      },
      {
        "start": 4153.52,
        "end": 4187.75,
        "text": " This is the flow control in TCP header itself. Very nice field. It is basically whenever you are communicating, at that time you are telling other parties that you can send this much only. I can hold this much only. That's all. Now, you can see here the difference here is the size of the sliding window at the TCP, at the receiver is not fixed. It keeps on changing. The receiver advertises the adjustable window size. Field in the TCP header, sender is limited to having no more than advertising w"
      }
    ],
    "start": 99
  },
  {
    "id": 100,
    "lecture": 33,
    "title": "Control TCP flow with the receive window · Explore",
    "concept": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. TCP flow control prevents a sender from overrunning the receiver. The receiver advertises available buffer space as a receive window; the sender limits unacknowledged data accordingly.",
    "teachingSteps": [
      "Explore: Apply the ACK, timeout or duplicate-ACK event.",
      "TCP flow control prevents a sender from overrunning the receiver. The receiver advertises available buffer space as a receive window; the sender limits unacknowledged data accordingly.",
      "Update the send limit and the next congestion-control state."
    ],
    "foundation": {
      "title": "Control TCP flow with the receive window",
      "idea": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. TCP flow control prevents a sender from overrunning the receiver. The receiver advertises available buffer space as a receive window; the sender limits unacknowledged data accordingly.",
      "terms": [
        "Receive window (rwnd): The receiver’s advertised limit based on available buffer space.",
        "Congestion window (cwnd): The sender’s estimate of how much data the network can safely carry.",
        "MSS: The maximum TCP payload size used as a unit in many window calculations."
      ],
      "example": "If the receiver advertises a 4,000-byte window and the congestion window is 6,000 bytes, the sender may have at most 4,000 bytes outstanding under the simplified window model."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Control TCP flow with the receive window · Explore: The advertised receive window is 4,000 bytes and cwnd is 6,000 bytes. What is the simplified send limit? Which step should the host or router take next?",
        "options": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "answer": 1,
        "explanation": "Apply the ACK or loss response. Apply the ACK, timeout or duplicate-ACK event."
      },
      {
        "type": "match",
        "prompt": "Control TCP flow with the receive window · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Congestion window (cwnd)",
            "The sender’s estimate of how much data the network can safely carry."
          ],
          [
            "MSS",
            "The maximum TCP payload size used as a unit in many window calculations."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Control TCP flow with the receive window · Explore: put the actions in a valid working sequence.",
        "items": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "explanation": "Read cwnd, the advertised receive window and the current TCP phase. Apply the ACK, timeout or duplicate-ACK event. Update the send limit and the next congestion-control state."
      },
      {
        "type": "choice",
        "prompt": "Control TCP flow with the receive window · Explore: which statement is accurate for control tcp flow with the receive window?",
        "options": [
          "4,000 bytes",
          "6,000 bytes",
          "10,000 bytes"
        ],
        "answer": 0,
        "explanation": "4,000 bytes. TCP flow control prevents a sender from overrunning the receiver. The receiver advertises available buffer space as a receive window; the sender limits unacknowledged data accordingly."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "tcp",
      "mode": "flow",
      "lecture": 33
    },
    "cnScene": [
      "Read cwnd, the advertised receive window and the current TCP phase.",
      "TCP flow control prevents a sender from overrunning the receiver. The receiver advertises available buffer space as a receive window; the sender limits unacknowledged data accordingly.",
      "Update the send limit and the next congestion-control state."
    ],
    "sourceReferences": [
      {
        "start": 4114.55,
        "end": 4152.79,
        "text": " Okay. This particular diagram is the same one. I've also pasted in the slides. Is this understood? So basically this is the crux that receiver window size and TCP keep on changing based on how much is available, right? Based on how much is available. Based on how much buffer is available. So TCP inbuilt, okay. Inbuilt it provides a flow control. Why I'm saying inbuilt because because in the TCP header, there is very, very important field which basically provide the flow control and what is that"
      },
      {
        "start": 4153.52,
        "end": 4187.75,
        "text": " This is the flow control in TCP header itself. Very nice field. It is basically whenever you are communicating, at that time you are telling other parties that you can send this much only. I can hold this much only. That's all. Now, you can see here the difference here is the size of the sliding window at the TCP, at the receiver is not fixed. It keeps on changing. The receiver advertises the adjustable window size. Field in the TCP header, sender is limited to having no more than advertising w"
      }
    ],
    "start": 100
  },
  {
    "id": 101,
    "lecture": 33,
    "title": "Control TCP flow with the receive window · Apply",
    "concept": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. TCP flow control prevents a sender from overrunning the receiver. The receiver advertises available buffer space as a receive window; the sender limits unacknowledged data accordingly.",
    "teachingSteps": [
      "Apply: Update the send limit and the next congestion-control state.",
      "TCP flow control prevents a sender from overrunning the receiver. The receiver advertises available buffer space as a receive window; the sender limits unacknowledged data accordingly.",
      "Read cwnd, the advertised receive window and the current TCP phase."
    ],
    "foundation": {
      "title": "Control TCP flow with the receive window",
      "idea": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. TCP flow control prevents a sender from overrunning the receiver. The receiver advertises available buffer space as a receive window; the sender limits unacknowledged data accordingly.",
      "terms": [
        "Receive window (rwnd): The receiver’s advertised limit based on available buffer space.",
        "Congestion window (cwnd): The sender’s estimate of how much data the network can safely carry.",
        "MSS: The maximum TCP payload size used as a unit in many window calculations."
      ],
      "example": "If the receiver advertises a 4,000-byte window and the congestion window is 6,000 bytes, the sender may have at most 4,000 bytes outstanding under the simplified window model."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Control TCP flow with the receive window · Apply: A new case changes one condition: The advertised receive window is 4,000 bytes and cwnd is 6,000 bytes. What is the simplified send limit? Which conclusion still follows?",
        "options": [
          "6,000 bytes",
          "10,000 bytes",
          "4,000 bytes"
        ],
        "answer": 2,
        "explanation": "4,000 bytes. Update the send limit and the next congestion-control state."
      },
      {
        "type": "match",
        "prompt": "Control TCP flow with the receive window · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "MSS",
            "The maximum TCP payload size used as a unit in many window calculations."
          ],
          [
            "Receive window (rwnd)",
            "The receiver’s advertised limit based on available buffer space."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Control TCP flow with the receive window · Apply: put the actions in a valid working sequence.",
        "items": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "explanation": "Read cwnd, the advertised receive window and the current TCP phase. Apply the ACK, timeout or duplicate-ACK event. Update the send limit and the next congestion-control state."
      },
      {
        "type": "choice",
        "prompt": "Control TCP flow with the receive window · Apply: which statement is accurate for control tcp flow with the receive window?",
        "options": [
          "4,000 bytes",
          "6,000 bytes",
          "10,000 bytes"
        ],
        "answer": 0,
        "explanation": "4,000 bytes. TCP flow control prevents a sender from overrunning the receiver. The receiver advertises available buffer space as a receive window; the sender limits unacknowledged data accordingly."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "tcp",
      "mode": "flow",
      "lecture": 33
    },
    "cnScene": [
      "Read cwnd, the advertised receive window and the current TCP phase.",
      "TCP flow control prevents a sender from overrunning the receiver. The receiver advertises available buffer space as a receive window; the sender limits unacknowledged data accordingly.",
      "Update the send limit and the next congestion-control state."
    ],
    "sourceReferences": [
      {
        "start": 4114.55,
        "end": 4152.79,
        "text": " Okay. This particular diagram is the same one. I've also pasted in the slides. Is this understood? So basically this is the crux that receiver window size and TCP keep on changing based on how much is available, right? Based on how much is available. Based on how much buffer is available. So TCP inbuilt, okay. Inbuilt it provides a flow control. Why I'm saying inbuilt because because in the TCP header, there is very, very important field which basically provide the flow control and what is that"
      },
      {
        "start": 4153.52,
        "end": 4187.75,
        "text": " This is the flow control in TCP header itself. Very nice field. It is basically whenever you are communicating, at that time you are telling other parties that you can send this much only. I can hold this much only. That's all. Now, you can see here the difference here is the size of the sliding window at the TCP, at the receiver is not fixed. It keeps on changing. The receiver advertises the adjustable window size. Field in the TCP header, sender is limited to having no more than advertising w"
      }
    ],
    "start": 101
  },
  {
    "id": 102,
    "lecture": 34,
    "title": "Control TCP congestion · Discover",
    "concept": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. TCP congestion control adjusts the sender’s congestion window (cwnd) based on network feedback. Slow start grows quickly, congestion avoidance grows roughly linearly, and loss signals trigger reduction.",
    "teachingSteps": [
      "Discover: Read cwnd, the advertised receive window and the current TCP phase.",
      "TCP congestion control adjusts the sender’s congestion window (cwnd) based on network feedback. Slow start grows quickly, congestion avoidance grows roughly linearly, and loss signals trigger reduction.",
      "Apply the ACK, timeout or duplicate-ACK event."
    ],
    "foundation": {
      "title": "Control TCP congestion",
      "idea": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. TCP congestion control adjusts the sender’s congestion window (cwnd) based on network feedback. Slow start grows quickly, congestion avoidance grows roughly linearly, and loss signals trigger reduction.",
      "terms": [
        "Receive window (rwnd): The receiver’s advertised limit based on available buffer space.",
        "Congestion window (cwnd): The sender’s estimate of how much data the network can safely carry.",
        "MSS: The maximum TCP payload size used as a unit in many window calculations."
      ],
      "example": "In congestion avoidance, cwnd commonly grows by about one MSS per RTT; a timeout usually causes a stronger reduction than a duplicate-ACK loss signal."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Control TCP congestion · Discover: During congestion avoidance, by about how much does cwnd grow per RTT? Which networking rule determines the result?",
        "options": [
          "One full current cwnd",
          "One MSS",
          "One byte regardless of MSS"
        ],
        "answer": 1,
        "explanation": "One MSS. Read cwnd, the advertised receive window and the current TCP phase."
      },
      {
        "type": "match",
        "prompt": "Control TCP congestion · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Receive window (rwnd)",
            "The receiver’s advertised limit based on available buffer space."
          ],
          [
            "Congestion window (cwnd)",
            "The sender’s estimate of how much data the network can safely carry."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Control TCP congestion · Discover: put the actions in a valid working sequence.",
        "items": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "explanation": "Read cwnd, the advertised receive window and the current TCP phase. Apply the ACK, timeout or duplicate-ACK event. Update the send limit and the next congestion-control state."
      },
      {
        "type": "choice",
        "prompt": "Control TCP congestion · Discover: which statement is accurate for control tcp congestion?",
        "options": [
          "One MSS",
          "One full current cwnd",
          "One byte regardless of MSS"
        ],
        "answer": 0,
        "explanation": "One MSS. TCP congestion control adjusts the sender’s congestion window (cwnd) based on network feedback. Slow start grows quickly, congestion avoidance grows roughly linearly, and loss signals trigger reduction."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "tcp",
      "mode": "congestion",
      "lecture": 34
    },
    "cnScene": [
      "Read cwnd, the advertised receive window and the current TCP phase.",
      "TCP congestion control adjusts the sender’s congestion window (cwnd) based on network feedback. Slow start grows quickly, congestion avoidance grows roughly linearly, and loss signals trigger reduction.",
      "Update the send limit and the next congestion-control state."
    ],
    "sourceReferences": [
      {
        "start": 1518.78,
        "end": 1549.13,
        "text": " So basically you will keep on keep on doubling probably right I mean this is one strategy that you can keep on doubling and then if there is a there's a loss of the packet then you will just slow down okay so network can definitely tell so that's what the number that we are like that we want to guess and that is what that is what congestion control is okay that how to guess this number and once we guess this number then we will take minimum of fourth of them that will be the center window size"
      },
      {
        "start": 3379.42,
        "end": 3417.4,
        "text": " So let's just summarize everything with the slides. Let's just see that what we have studied so far. So we will be saying that we will be starting slowly, sender start slowly, start with a small congestion window, maybe, maybe with one, right? Initially, let's suppose connection window size is one and double congestion window for each RTT with no loss. If there is no loss, then we will keep on doubling, right? Till, till threshold. Is this okay to everyone? So the Beyonce is asking, in case of "
      }
    ],
    "start": 102
  },
  {
    "id": 103,
    "lecture": 34,
    "title": "Control TCP congestion · Explore",
    "concept": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. TCP congestion control adjusts the sender’s congestion window (cwnd) based on network feedback. Slow start grows quickly, congestion avoidance grows roughly linearly, and loss signals trigger reduction.",
    "teachingSteps": [
      "Explore: Apply the ACK, timeout or duplicate-ACK event.",
      "TCP congestion control adjusts the sender’s congestion window (cwnd) based on network feedback. Slow start grows quickly, congestion avoidance grows roughly linearly, and loss signals trigger reduction.",
      "Update the send limit and the next congestion-control state."
    ],
    "foundation": {
      "title": "Control TCP congestion",
      "idea": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. TCP congestion control adjusts the sender’s congestion window (cwnd) based on network feedback. Slow start grows quickly, congestion avoidance grows roughly linearly, and loss signals trigger reduction.",
      "terms": [
        "Receive window (rwnd): The receiver’s advertised limit based on available buffer space.",
        "Congestion window (cwnd): The sender’s estimate of how much data the network can safely carry.",
        "MSS: The maximum TCP payload size used as a unit in many window calculations."
      ],
      "example": "In congestion avoidance, cwnd commonly grows by about one MSS per RTT; a timeout usually causes a stronger reduction than a duplicate-ACK loss signal."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Control TCP congestion · Explore: During congestion avoidance, by about how much does cwnd grow per RTT? Which step should the host or router take next?",
        "options": [
          "Compare the receiver and network limits",
          "Update cwnd, threshold and outstanding data",
          "Apply the ACK or loss response"
        ],
        "answer": 2,
        "explanation": "Apply the ACK or loss response. Apply the ACK, timeout or duplicate-ACK event."
      },
      {
        "type": "match",
        "prompt": "Control TCP congestion · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Congestion window (cwnd)",
            "The sender’s estimate of how much data the network can safely carry."
          ],
          [
            "MSS",
            "The maximum TCP payload size used as a unit in many window calculations."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Control TCP congestion · Explore: put the actions in a valid working sequence.",
        "items": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "explanation": "Read cwnd, the advertised receive window and the current TCP phase. Apply the ACK, timeout or duplicate-ACK event. Update the send limit and the next congestion-control state."
      },
      {
        "type": "choice",
        "prompt": "Control TCP congestion · Explore: which statement is accurate for control tcp congestion?",
        "options": [
          "One MSS",
          "One full current cwnd",
          "One byte regardless of MSS"
        ],
        "answer": 0,
        "explanation": "One MSS. TCP congestion control adjusts the sender’s congestion window (cwnd) based on network feedback. Slow start grows quickly, congestion avoidance grows roughly linearly, and loss signals trigger reduction."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "tcp",
      "mode": "congestion",
      "lecture": 34
    },
    "cnScene": [
      "Read cwnd, the advertised receive window and the current TCP phase.",
      "TCP congestion control adjusts the sender’s congestion window (cwnd) based on network feedback. Slow start grows quickly, congestion avoidance grows roughly linearly, and loss signals trigger reduction.",
      "Update the send limit and the next congestion-control state."
    ],
    "sourceReferences": [
      {
        "start": 1518.78,
        "end": 1549.13,
        "text": " So basically you will keep on keep on doubling probably right I mean this is one strategy that you can keep on doubling and then if there is a there's a loss of the packet then you will just slow down okay so network can definitely tell so that's what the number that we are like that we want to guess and that is what that is what congestion control is okay that how to guess this number and once we guess this number then we will take minimum of fourth of them that will be the center window size"
      },
      {
        "start": 3379.42,
        "end": 3417.4,
        "text": " So let's just summarize everything with the slides. Let's just see that what we have studied so far. So we will be saying that we will be starting slowly, sender start slowly, start with a small congestion window, maybe, maybe with one, right? Initially, let's suppose connection window size is one and double congestion window for each RTT with no loss. If there is no loss, then we will keep on doubling, right? Till, till threshold. Is this okay to everyone? So the Beyonce is asking, in case of "
      }
    ],
    "start": 103
  },
  {
    "id": 104,
    "lecture": 34,
    "title": "Control TCP congestion · Apply",
    "concept": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. TCP congestion control adjusts the sender’s congestion window (cwnd) based on network feedback. Slow start grows quickly, congestion avoidance grows roughly linearly, and loss signals trigger reduction.",
    "teachingSteps": [
      "Apply: Update the send limit and the next congestion-control state.",
      "TCP congestion control adjusts the sender’s congestion window (cwnd) based on network feedback. Slow start grows quickly, congestion avoidance grows roughly linearly, and loss signals trigger reduction.",
      "Read cwnd, the advertised receive window and the current TCP phase."
    ],
    "foundation": {
      "title": "Control TCP congestion",
      "idea": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. TCP congestion control adjusts the sender’s congestion window (cwnd) based on network feedback. Slow start grows quickly, congestion avoidance grows roughly linearly, and loss signals trigger reduction.",
      "terms": [
        "Receive window (rwnd): The receiver’s advertised limit based on available buffer space.",
        "Congestion window (cwnd): The sender’s estimate of how much data the network can safely carry.",
        "MSS: The maximum TCP payload size used as a unit in many window calculations."
      ],
      "example": "In congestion avoidance, cwnd commonly grows by about one MSS per RTT; a timeout usually causes a stronger reduction than a duplicate-ACK loss signal."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Control TCP congestion · Apply: A new case changes one condition: During congestion avoidance, by about how much does cwnd grow per RTT? Which conclusion still follows?",
        "options": [
          "One MSS",
          "One full current cwnd",
          "One byte regardless of MSS"
        ],
        "answer": 0,
        "explanation": "One MSS. Update the send limit and the next congestion-control state."
      },
      {
        "type": "match",
        "prompt": "Control TCP congestion · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "MSS",
            "The maximum TCP payload size used as a unit in many window calculations."
          ],
          [
            "Receive window (rwnd)",
            "The receiver’s advertised limit based on available buffer space."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Control TCP congestion · Apply: put the actions in a valid working sequence.",
        "items": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "explanation": "Read cwnd, the advertised receive window and the current TCP phase. Apply the ACK, timeout or duplicate-ACK event. Update the send limit and the next congestion-control state."
      },
      {
        "type": "choice",
        "prompt": "Control TCP congestion · Apply: which statement is accurate for control tcp congestion?",
        "options": [
          "One MSS",
          "One full current cwnd",
          "One byte regardless of MSS"
        ],
        "answer": 0,
        "explanation": "One MSS. TCP congestion control adjusts the sender’s congestion window (cwnd) based on network feedback. Slow start grows quickly, congestion avoidance grows roughly linearly, and loss signals trigger reduction."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "tcp",
      "mode": "congestion",
      "lecture": 34
    },
    "cnScene": [
      "Read cwnd, the advertised receive window and the current TCP phase.",
      "TCP congestion control adjusts the sender’s congestion window (cwnd) based on network feedback. Slow start grows quickly, congestion avoidance grows roughly linearly, and loss signals trigger reduction.",
      "Update the send limit and the next congestion-control state."
    ],
    "sourceReferences": [
      {
        "start": 1518.78,
        "end": 1549.13,
        "text": " So basically you will keep on keep on doubling probably right I mean this is one strategy that you can keep on doubling and then if there is a there's a loss of the packet then you will just slow down okay so network can definitely tell so that's what the number that we are like that we want to guess and that is what that is what congestion control is okay that how to guess this number and once we guess this number then we will take minimum of fourth of them that will be the center window size"
      },
      {
        "start": 3379.42,
        "end": 3417.4,
        "text": " So let's just summarize everything with the slides. Let's just see that what we have studied so far. So we will be saying that we will be starting slowly, sender start slowly, start with a small congestion window, maybe, maybe with one, right? Initially, let's suppose connection window size is one and double congestion window for each RTT with no loss. If there is no loss, then we will keep on doubling, right? Till, till threshold. Is this okay to everyone? So the Beyonce is asking, in case of "
      }
    ],
    "start": 104
  },
  {
    "id": 105,
    "lecture": 35,
    "title": "Solve TCP congestion scenarios · Discover",
    "concept": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. Read the loss signal and the current threshold before changing cwnd. Fast retransmit/recovery and timeout recovery use different responses in classic TCP Reno.",
    "teachingSteps": [
      "Discover: Read cwnd, the advertised receive window and the current TCP phase.",
      "Read the loss signal and the current threshold before changing cwnd. Fast retransmit/recovery and timeout recovery use different responses in classic TCP Reno.",
      "Apply the ACK, timeout or duplicate-ACK event."
    ],
    "foundation": {
      "title": "Solve TCP congestion scenarios",
      "idea": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. Read the loss signal and the current threshold before changing cwnd. Fast retransmit/recovery and timeout recovery use different responses in classic TCP Reno.",
      "terms": [
        "Receive window (rwnd): The receiver’s advertised limit based on available buffer space.",
        "Congestion window (cwnd): The sender’s estimate of how much data the network can safely carry.",
        "MSS: The maximum TCP payload size used as a unit in many window calculations."
      ],
      "example": "With duplicate ACKs, classic Reno fast retransmits and reduces the threshold; a timeout falls back to a smaller congestion window and restarts slow start."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Solve TCP congestion scenarios · Discover: In classic TCP Reno, what commonly triggers fast retransmit before the retransmission timer expires? Which networking rule determines the result?",
        "options": [
          "A DNS response",
          "One successful ACK",
          "Three duplicate ACKs"
        ],
        "answer": 2,
        "explanation": "Three duplicate ACKs. Read cwnd, the advertised receive window and the current TCP phase."
      },
      {
        "type": "match",
        "prompt": "Solve TCP congestion scenarios · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Receive window (rwnd)",
            "The receiver’s advertised limit based on available buffer space."
          ],
          [
            "Congestion window (cwnd)",
            "The sender’s estimate of how much data the network can safely carry."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Solve TCP congestion scenarios · Discover: put the actions in a valid working sequence.",
        "items": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "explanation": "Read cwnd, the advertised receive window and the current TCP phase. Apply the ACK, timeout or duplicate-ACK event. Update the send limit and the next congestion-control state."
      },
      {
        "type": "choice",
        "prompt": "Solve TCP congestion scenarios · Discover: which statement is accurate for solve tcp congestion scenarios?",
        "options": [
          "Three duplicate ACKs",
          "A DNS response",
          "One successful ACK"
        ],
        "answer": 0,
        "explanation": "Three duplicate ACKs. Read the loss signal and the current threshold before changing cwnd. Fast retransmit/recovery and timeout recovery use different responses in classic TCP Reno."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "tcp",
      "mode": "congestion",
      "lecture": 35
    },
    "cnScene": [
      "Read cwnd, the advertised receive window and the current TCP phase.",
      "Read the loss signal and the current threshold before changing cwnd. Fast retransmit/recovery and timeout recovery use different responses in classic TCP Reno.",
      "Update the send limit and the next congestion-control state."
    ],
    "sourceReferences": [
      {
        "start": 426.37,
        "end": 456.26,
        "text": " This should be 21. Because you divide by 2. Now this is 21. This is a congestion window. But can you tell me the slow start threshold? Slow start threshold. Whenever there is a packet loss, then at that time, if this is because of, if this is because of the 3-duplicate AC case, you will keep the congestion window to be half and the slow start threshold to be current congestion window divided by 2. So current congestion window is 42 divided by 2, which is 21, right? So here,"
      },
      {
        "start": 457.51,
        "end": 488.21,
        "text": " The threshold is set to half and the value of the congestion window when the packet loss is detected When the loss is detected during transmission round 16 the congestion window size is 42 Okay Yeah, so at this time at this time at this 16 the congestion window size is 42 at 16 when the loss was detected Right when the loss was detected the congestion window size is 42 Whenever there's a packet loss the threshold is basically current congestion window divided by 2 Okay"
      }
    ],
    "start": 105
  },
  {
    "id": 106,
    "lecture": 35,
    "title": "Solve TCP congestion scenarios · Explore",
    "concept": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. Read the loss signal and the current threshold before changing cwnd. Fast retransmit/recovery and timeout recovery use different responses in classic TCP Reno.",
    "teachingSteps": [
      "Explore: Apply the ACK, timeout or duplicate-ACK event.",
      "Read the loss signal and the current threshold before changing cwnd. Fast retransmit/recovery and timeout recovery use different responses in classic TCP Reno.",
      "Update the send limit and the next congestion-control state."
    ],
    "foundation": {
      "title": "Solve TCP congestion scenarios",
      "idea": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. Read the loss signal and the current threshold before changing cwnd. Fast retransmit/recovery and timeout recovery use different responses in classic TCP Reno.",
      "terms": [
        "Receive window (rwnd): The receiver’s advertised limit based on available buffer space.",
        "Congestion window (cwnd): The sender’s estimate of how much data the network can safely carry.",
        "MSS: The maximum TCP payload size used as a unit in many window calculations."
      ],
      "example": "With duplicate ACKs, classic Reno fast retransmits and reduces the threshold; a timeout falls back to a smaller congestion window and restarts slow start."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Solve TCP congestion scenarios · Explore: In classic TCP Reno, what commonly triggers fast retransmit before the retransmission timer expires? Which step should the host or router take next?",
        "options": [
          "Apply the ACK or loss response",
          "Compare the receiver and network limits",
          "Update cwnd, threshold and outstanding data"
        ],
        "answer": 0,
        "explanation": "Apply the ACK or loss response. Apply the ACK, timeout or duplicate-ACK event."
      },
      {
        "type": "match",
        "prompt": "Solve TCP congestion scenarios · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Congestion window (cwnd)",
            "The sender’s estimate of how much data the network can safely carry."
          ],
          [
            "MSS",
            "The maximum TCP payload size used as a unit in many window calculations."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Solve TCP congestion scenarios · Explore: put the actions in a valid working sequence.",
        "items": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "explanation": "Read cwnd, the advertised receive window and the current TCP phase. Apply the ACK, timeout or duplicate-ACK event. Update the send limit and the next congestion-control state."
      },
      {
        "type": "choice",
        "prompt": "Solve TCP congestion scenarios · Explore: which statement is accurate for solve tcp congestion scenarios?",
        "options": [
          "Three duplicate ACKs",
          "A DNS response",
          "One successful ACK"
        ],
        "answer": 0,
        "explanation": "Three duplicate ACKs. Read the loss signal and the current threshold before changing cwnd. Fast retransmit/recovery and timeout recovery use different responses in classic TCP Reno."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "tcp",
      "mode": "congestion",
      "lecture": 35
    },
    "cnScene": [
      "Read cwnd, the advertised receive window and the current TCP phase.",
      "Read the loss signal and the current threshold before changing cwnd. Fast retransmit/recovery and timeout recovery use different responses in classic TCP Reno.",
      "Update the send limit and the next congestion-control state."
    ],
    "sourceReferences": [
      {
        "start": 426.37,
        "end": 456.26,
        "text": " This should be 21. Because you divide by 2. Now this is 21. This is a congestion window. But can you tell me the slow start threshold? Slow start threshold. Whenever there is a packet loss, then at that time, if this is because of, if this is because of the 3-duplicate AC case, you will keep the congestion window to be half and the slow start threshold to be current congestion window divided by 2. So current congestion window is 42 divided by 2, which is 21, right? So here,"
      },
      {
        "start": 457.51,
        "end": 488.21,
        "text": " The threshold is set to half and the value of the congestion window when the packet loss is detected When the loss is detected during transmission round 16 the congestion window size is 42 Okay Yeah, so at this time at this time at this 16 the congestion window size is 42 at 16 when the loss was detected Right when the loss was detected the congestion window size is 42 Whenever there's a packet loss the threshold is basically current congestion window divided by 2 Okay"
      }
    ],
    "start": 106
  },
  {
    "id": 107,
    "lecture": 35,
    "title": "Solve TCP congestion scenarios · Apply",
    "concept": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. Read the loss signal and the current threshold before changing cwnd. Fast retransmit/recovery and timeout recovery use different responses in classic TCP Reno.",
    "teachingSteps": [
      "Apply: Update the send limit and the next congestion-control state.",
      "Read the loss signal and the current threshold before changing cwnd. Fast retransmit/recovery and timeout recovery use different responses in classic TCP Reno.",
      "Read cwnd, the advertised receive window and the current TCP phase."
    ],
    "foundation": {
      "title": "Solve TCP congestion scenarios",
      "idea": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. Read the loss signal and the current threshold before changing cwnd. Fast retransmit/recovery and timeout recovery use different responses in classic TCP Reno.",
      "terms": [
        "Receive window (rwnd): The receiver’s advertised limit based on available buffer space.",
        "Congestion window (cwnd): The sender’s estimate of how much data the network can safely carry.",
        "MSS: The maximum TCP payload size used as a unit in many window calculations."
      ],
      "example": "With duplicate ACKs, classic Reno fast retransmits and reduces the threshold; a timeout falls back to a smaller congestion window and restarts slow start."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Solve TCP congestion scenarios · Apply: A new case changes one condition: In classic TCP Reno, what commonly triggers fast retransmit before the retransmission timer expires? Which conclusion still follows?",
        "options": [
          "A DNS response",
          "Three duplicate ACKs",
          "One successful ACK"
        ],
        "answer": 1,
        "explanation": "Three duplicate ACKs. Update the send limit and the next congestion-control state."
      },
      {
        "type": "match",
        "prompt": "Solve TCP congestion scenarios · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "MSS",
            "The maximum TCP payload size used as a unit in many window calculations."
          ],
          [
            "Receive window (rwnd)",
            "The receiver’s advertised limit based on available buffer space."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Solve TCP congestion scenarios · Apply: put the actions in a valid working sequence.",
        "items": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "explanation": "Read cwnd, the advertised receive window and the current TCP phase. Apply the ACK, timeout or duplicate-ACK event. Update the send limit and the next congestion-control state."
      },
      {
        "type": "choice",
        "prompt": "Solve TCP congestion scenarios · Apply: which statement is accurate for solve tcp congestion scenarios?",
        "options": [
          "Three duplicate ACKs",
          "A DNS response",
          "One successful ACK"
        ],
        "answer": 0,
        "explanation": "Three duplicate ACKs. Read the loss signal and the current threshold before changing cwnd. Fast retransmit/recovery and timeout recovery use different responses in classic TCP Reno."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "tcp",
      "mode": "congestion",
      "lecture": 35
    },
    "cnScene": [
      "Read cwnd, the advertised receive window and the current TCP phase.",
      "Read the loss signal and the current threshold before changing cwnd. Fast retransmit/recovery and timeout recovery use different responses in classic TCP Reno.",
      "Update the send limit and the next congestion-control state."
    ],
    "sourceReferences": [
      {
        "start": 426.37,
        "end": 456.26,
        "text": " This should be 21. Because you divide by 2. Now this is 21. This is a congestion window. But can you tell me the slow start threshold? Slow start threshold. Whenever there is a packet loss, then at that time, if this is because of, if this is because of the 3-duplicate AC case, you will keep the congestion window to be half and the slow start threshold to be current congestion window divided by 2. So current congestion window is 42 divided by 2, which is 21, right? So here,"
      },
      {
        "start": 457.51,
        "end": 488.21,
        "text": " The threshold is set to half and the value of the congestion window when the packet loss is detected When the loss is detected during transmission round 16 the congestion window size is 42 Okay Yeah, so at this time at this time at this 16 the congestion window size is 42 at 16 when the loss was detected Right when the loss was detected the congestion window size is 42 Whenever there's a packet loss the threshold is basically current congestion window divided by 2 Okay"
      }
    ],
    "start": 107
  },
  {
    "id": 108,
    "lecture": 36,
    "title": "Trace congestion-window growth · Discover",
    "concept": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. During slow start, cwnd grows approximately exponentially by ACKs (roughly doubling per RTT); after the slow-start threshold, congestion avoidance grows approximately linearly.",
    "teachingSteps": [
      "Discover: Read cwnd, the advertised receive window and the current TCP phase.",
      "During slow start, cwnd grows approximately exponentially by ACKs (roughly doubling per RTT); after the slow-start threshold, congestion avoidance grows approximately linearly.",
      "Apply the ACK, timeout or duplicate-ACK event."
    ],
    "foundation": {
      "title": "Trace congestion-window growth",
      "idea": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. During slow start, cwnd grows approximately exponentially by ACKs (roughly doubling per RTT); after the slow-start threshold, congestion avoidance grows approximately linearly.",
      "terms": [
        "Receive window (rwnd): The receiver’s advertised limit based on available buffer space.",
        "Congestion window (cwnd): The sender’s estimate of how much data the network can safely carry.",
        "MSS: The maximum TCP payload size used as a unit in many window calculations."
      ],
      "example": "Starting at 1 MSS, the idealized slow-start sequence is 1, 2, 4, 8 MSS per RTT until the threshold or a loss event changes the phase."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Trace congestion-window growth · Discover: In idealized slow start, cwnd starts at 2 MSS. About how large is it after two RTTs? Which networking rule determines the result?",
        "options": [
          "8 MSS",
          "4 MSS",
          "6 MSS"
        ],
        "answer": 0,
        "explanation": "8 MSS. Read cwnd, the advertised receive window and the current TCP phase."
      },
      {
        "type": "match",
        "prompt": "Trace congestion-window growth · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Receive window (rwnd)",
            "The receiver’s advertised limit based on available buffer space."
          ],
          [
            "Congestion window (cwnd)",
            "The sender’s estimate of how much data the network can safely carry."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Trace congestion-window growth · Discover: put the actions in a valid working sequence.",
        "items": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "explanation": "Read cwnd, the advertised receive window and the current TCP phase. Apply the ACK, timeout or duplicate-ACK event. Update the send limit and the next congestion-control state."
      },
      {
        "type": "choice",
        "prompt": "Trace congestion-window growth · Discover: which statement is accurate for trace congestion-window growth?",
        "options": [
          "8 MSS",
          "4 MSS",
          "6 MSS"
        ],
        "answer": 0,
        "explanation": "8 MSS. During slow start, cwnd grows approximately exponentially by ACKs (roughly doubling per RTT); after the slow-start threshold, congestion avoidance grows approximately linearly."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "tcp",
      "mode": "congestion",
      "lecture": 36
    },
    "cnScene": [
      "Read cwnd, the advertised receive window and the current TCP phase.",
      "During slow start, cwnd grows approximately exponentially by ACKs (roughly doubling per RTT); after the slow-start threshold, congestion avoidance grows approximately linearly.",
      "Update the send limit and the next congestion-control state."
    ],
    "sourceReferences": [
      {
        "start": 6.77,
        "end": 33.7,
        "text": " So, let's just see this question. They are saying, HUNS is sending a data to the Duke of Vasilton because the HUNS has been sending data for sometime already. He is currently in the additive increase and multiple decrease phase, which is congestion avoidance phase of TCP congestion control. Again, MSS is 100 bytes for all the parts. So, fill the congestion window and the slow start threshold. This is congestion window and slow start threshold."
      },
      {
        "start": 407.02,
        "end": 437.06,
        "text": " whenever there is a new ACK then only be incremented if there are there are three duplicate ACKs okay so in that case you will be basically setting the congestion okay so the congestion window size here at the last it will be different okay so here at the last it will be the current congestion window divided by 2 so it will it will be 515 bytes okay if there are third duplicate ACK at the third duplicate ACK usually you will change it to 515 bytes and what will be the slow start threshold"
      }
    ],
    "start": 108
  },
  {
    "id": 109,
    "lecture": 36,
    "title": "Trace congestion-window growth · Explore",
    "concept": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. During slow start, cwnd grows approximately exponentially by ACKs (roughly doubling per RTT); after the slow-start threshold, congestion avoidance grows approximately linearly.",
    "teachingSteps": [
      "Explore: Apply the ACK, timeout or duplicate-ACK event.",
      "During slow start, cwnd grows approximately exponentially by ACKs (roughly doubling per RTT); after the slow-start threshold, congestion avoidance grows approximately linearly.",
      "Update the send limit and the next congestion-control state."
    ],
    "foundation": {
      "title": "Trace congestion-window growth",
      "idea": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. During slow start, cwnd grows approximately exponentially by ACKs (roughly doubling per RTT); after the slow-start threshold, congestion avoidance grows approximately linearly.",
      "terms": [
        "Receive window (rwnd): The receiver’s advertised limit based on available buffer space.",
        "Congestion window (cwnd): The sender’s estimate of how much data the network can safely carry.",
        "MSS: The maximum TCP payload size used as a unit in many window calculations."
      ],
      "example": "Starting at 1 MSS, the idealized slow-start sequence is 1, 2, 4, 8 MSS per RTT until the threshold or a loss event changes the phase."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Trace congestion-window growth · Explore: In idealized slow start, cwnd starts at 2 MSS. About how large is it after two RTTs? Which step should the host or router take next?",
        "options": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "answer": 1,
        "explanation": "Apply the ACK or loss response. Apply the ACK, timeout or duplicate-ACK event."
      },
      {
        "type": "match",
        "prompt": "Trace congestion-window growth · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Congestion window (cwnd)",
            "The sender’s estimate of how much data the network can safely carry."
          ],
          [
            "MSS",
            "The maximum TCP payload size used as a unit in many window calculations."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Trace congestion-window growth · Explore: put the actions in a valid working sequence.",
        "items": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "explanation": "Read cwnd, the advertised receive window and the current TCP phase. Apply the ACK, timeout or duplicate-ACK event. Update the send limit and the next congestion-control state."
      },
      {
        "type": "choice",
        "prompt": "Trace congestion-window growth · Explore: which statement is accurate for trace congestion-window growth?",
        "options": [
          "8 MSS",
          "4 MSS",
          "6 MSS"
        ],
        "answer": 0,
        "explanation": "8 MSS. During slow start, cwnd grows approximately exponentially by ACKs (roughly doubling per RTT); after the slow-start threshold, congestion avoidance grows approximately linearly."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "tcp",
      "mode": "congestion",
      "lecture": 36
    },
    "cnScene": [
      "Read cwnd, the advertised receive window and the current TCP phase.",
      "During slow start, cwnd grows approximately exponentially by ACKs (roughly doubling per RTT); after the slow-start threshold, congestion avoidance grows approximately linearly.",
      "Update the send limit and the next congestion-control state."
    ],
    "sourceReferences": [
      {
        "start": 6.77,
        "end": 33.7,
        "text": " So, let's just see this question. They are saying, HUNS is sending a data to the Duke of Vasilton because the HUNS has been sending data for sometime already. He is currently in the additive increase and multiple decrease phase, which is congestion avoidance phase of TCP congestion control. Again, MSS is 100 bytes for all the parts. So, fill the congestion window and the slow start threshold. This is congestion window and slow start threshold."
      },
      {
        "start": 407.02,
        "end": 437.06,
        "text": " whenever there is a new ACK then only be incremented if there are there are three duplicate ACKs okay so in that case you will be basically setting the congestion okay so the congestion window size here at the last it will be different okay so here at the last it will be the current congestion window divided by 2 so it will it will be 515 bytes okay if there are third duplicate ACK at the third duplicate ACK usually you will change it to 515 bytes and what will be the slow start threshold"
      }
    ],
    "start": 109
  },
  {
    "id": 110,
    "lecture": 36,
    "title": "Trace congestion-window growth · Apply",
    "concept": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. During slow start, cwnd grows approximately exponentially by ACKs (roughly doubling per RTT); after the slow-start threshold, congestion avoidance grows approximately linearly.",
    "teachingSteps": [
      "Apply: Update the send limit and the next congestion-control state.",
      "During slow start, cwnd grows approximately exponentially by ACKs (roughly doubling per RTT); after the slow-start threshold, congestion avoidance grows approximately linearly.",
      "Read cwnd, the advertised receive window and the current TCP phase."
    ],
    "foundation": {
      "title": "Trace congestion-window growth",
      "idea": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. During slow start, cwnd grows approximately exponentially by ACKs (roughly doubling per RTT); after the slow-start threshold, congestion avoidance grows approximately linearly.",
      "terms": [
        "Receive window (rwnd): The receiver’s advertised limit based on available buffer space.",
        "Congestion window (cwnd): The sender’s estimate of how much data the network can safely carry.",
        "MSS: The maximum TCP payload size used as a unit in many window calculations."
      ],
      "example": "Starting at 1 MSS, the idealized slow-start sequence is 1, 2, 4, 8 MSS per RTT until the threshold or a loss event changes the phase."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Trace congestion-window growth · Apply: A new case changes one condition: In idealized slow start, cwnd starts at 2 MSS. About how large is it after two RTTs? Which conclusion still follows?",
        "options": [
          "4 MSS",
          "6 MSS",
          "8 MSS"
        ],
        "answer": 2,
        "explanation": "8 MSS. Update the send limit and the next congestion-control state."
      },
      {
        "type": "match",
        "prompt": "Trace congestion-window growth · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "MSS",
            "The maximum TCP payload size used as a unit in many window calculations."
          ],
          [
            "Receive window (rwnd)",
            "The receiver’s advertised limit based on available buffer space."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Trace congestion-window growth · Apply: put the actions in a valid working sequence.",
        "items": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "explanation": "Read cwnd, the advertised receive window and the current TCP phase. Apply the ACK, timeout or duplicate-ACK event. Update the send limit and the next congestion-control state."
      },
      {
        "type": "choice",
        "prompt": "Trace congestion-window growth · Apply: which statement is accurate for trace congestion-window growth?",
        "options": [
          "8 MSS",
          "4 MSS",
          "6 MSS"
        ],
        "answer": 0,
        "explanation": "8 MSS. During slow start, cwnd grows approximately exponentially by ACKs (roughly doubling per RTT); after the slow-start threshold, congestion avoidance grows approximately linearly."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "tcp",
      "mode": "congestion",
      "lecture": 36
    },
    "cnScene": [
      "Read cwnd, the advertised receive window and the current TCP phase.",
      "During slow start, cwnd grows approximately exponentially by ACKs (roughly doubling per RTT); after the slow-start threshold, congestion avoidance grows approximately linearly.",
      "Update the send limit and the next congestion-control state."
    ],
    "sourceReferences": [
      {
        "start": 6.77,
        "end": 33.7,
        "text": " So, let's just see this question. They are saying, HUNS is sending a data to the Duke of Vasilton because the HUNS has been sending data for sometime already. He is currently in the additive increase and multiple decrease phase, which is congestion avoidance phase of TCP congestion control. Again, MSS is 100 bytes for all the parts. So, fill the congestion window and the slow start threshold. This is congestion window and slow start threshold."
      },
      {
        "start": 407.02,
        "end": 437.06,
        "text": " whenever there is a new ACK then only be incremented if there are there are three duplicate ACKs okay so in that case you will be basically setting the congestion okay so the congestion window size here at the last it will be different okay so here at the last it will be the current congestion window divided by 2 so it will it will be 515 bytes okay if there are third duplicate ACK at the third duplicate ACK usually you will change it to 515 bytes and what will be the slow start threshold"
      }
    ],
    "start": 110
  },
  {
    "id": 111,
    "lecture": 37,
    "title": "Apply TCP congestion rules to a new case · Discover",
    "concept": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. A congestion-window question must state the variant and loss event. Track cwnd, ssthresh and the phase after each ACK or loss rather than applying one growth rule to every round.",
    "teachingSteps": [
      "Discover: Read cwnd, the advertised receive window and the current TCP phase.",
      "A congestion-window question must state the variant and loss event. Track cwnd, ssthresh and the phase after each ACK or loss rather than applying one growth rule to every round.",
      "Apply the ACK, timeout or duplicate-ACK event."
    ],
    "foundation": {
      "title": "Apply TCP congestion rules to a new case",
      "idea": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. A congestion-window question must state the variant and loss event. Track cwnd, ssthresh and the phase after each ACK or loss rather than applying one growth rule to every round.",
      "terms": [
        "Receive window (rwnd): The receiver’s advertised limit based on available buffer space.",
        "Congestion window (cwnd): The sender’s estimate of how much data the network can safely carry.",
        "MSS: The maximum TCP payload size used as a unit in many window calculations."
      ],
      "example": "With ssthresh=8 MSS and cwnd=4 MSS, slow start continues until the threshold; above it, additive growth applies unless loss is detected."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Apply TCP congestion rules to a new case · Discover: cwnd is 4 MSS and ssthresh is 8 MSS with no loss. Which phase normally applies next? Which networking rule determines the result?",
        "options": [
          "Congestion avoidance already",
          "Slow start",
          "Connection teardown"
        ],
        "answer": 1,
        "explanation": "Slow start. Read cwnd, the advertised receive window and the current TCP phase."
      },
      {
        "type": "match",
        "prompt": "Apply TCP congestion rules to a new case · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Receive window (rwnd)",
            "The receiver’s advertised limit based on available buffer space."
          ],
          [
            "Congestion window (cwnd)",
            "The sender’s estimate of how much data the network can safely carry."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Apply TCP congestion rules to a new case · Discover: put the actions in a valid working sequence.",
        "items": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "explanation": "Read cwnd, the advertised receive window and the current TCP phase. Apply the ACK, timeout or duplicate-ACK event. Update the send limit and the next congestion-control state."
      },
      {
        "type": "choice",
        "prompt": "Apply TCP congestion rules to a new case · Discover: which statement is accurate for apply tcp congestion rules to a new case?",
        "options": [
          "Slow start",
          "Congestion avoidance already",
          "Connection teardown"
        ],
        "answer": 0,
        "explanation": "Slow start. A congestion-window question must state the variant and loss event. Track cwnd, ssthresh and the phase after each ACK or loss rather than applying one growth rule to every round."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "tcp",
      "mode": "congestion",
      "lecture": 37
    },
    "cnScene": [
      "Read cwnd, the advertised receive window and the current TCP phase.",
      "A congestion-window question must state the variant and loss event. Track cwnd, ssthresh and the phase after each ACK or loss rather than applying one growth rule to every round.",
      "Update the send limit and the next congestion-control state."
    ],
    "sourceReferences": [
      {
        "start": 355.53,
        "end": 387.18,
        "text": " So have you understood this question is very easy. Okay, there is nothing in this question They are just asking at each ACK what is happening at each ACK in the slow start is extremely easy plus one plus one MSS, right? 2 ACK plus 2 MSS, that's all easy and good question, right? There has been one more question that they have asked and get something like this We have solved in the last class. Do you remember that question? So we have already solved one question in the last class which was relat"
      },
      {
        "start": 387.97,
        "end": 414.08,
        "text": " in the slowest start they are asking right in the slowest start phase they are asking about that at each equilibrium what is happening at each RTT what is happening now I think by this point in time it should be very very clear that at each RTT what is happening and each equilibrium what is happening right so yeah so that's all for today we will continue tomorrow right thank you everyone take care bye bye"
      }
    ],
    "start": 111
  },
  {
    "id": 112,
    "lecture": 37,
    "title": "Apply TCP congestion rules to a new case · Explore",
    "concept": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. A congestion-window question must state the variant and loss event. Track cwnd, ssthresh and the phase after each ACK or loss rather than applying one growth rule to every round.",
    "teachingSteps": [
      "Explore: Apply the ACK, timeout or duplicate-ACK event.",
      "A congestion-window question must state the variant and loss event. Track cwnd, ssthresh and the phase after each ACK or loss rather than applying one growth rule to every round.",
      "Update the send limit and the next congestion-control state."
    ],
    "foundation": {
      "title": "Apply TCP congestion rules to a new case",
      "idea": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. A congestion-window question must state the variant and loss event. Track cwnd, ssthresh and the phase after each ACK or loss rather than applying one growth rule to every round.",
      "terms": [
        "Receive window (rwnd): The receiver’s advertised limit based on available buffer space.",
        "Congestion window (cwnd): The sender’s estimate of how much data the network can safely carry.",
        "MSS: The maximum TCP payload size used as a unit in many window calculations."
      ],
      "example": "With ssthresh=8 MSS and cwnd=4 MSS, slow start continues until the threshold; above it, additive growth applies unless loss is detected."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Apply TCP congestion rules to a new case · Explore: cwnd is 4 MSS and ssthresh is 8 MSS with no loss. Which phase normally applies next? Which step should the host or router take next?",
        "options": [
          "Compare the receiver and network limits",
          "Update cwnd, threshold and outstanding data",
          "Apply the ACK or loss response"
        ],
        "answer": 2,
        "explanation": "Apply the ACK or loss response. Apply the ACK, timeout or duplicate-ACK event."
      },
      {
        "type": "match",
        "prompt": "Apply TCP congestion rules to a new case · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Congestion window (cwnd)",
            "The sender’s estimate of how much data the network can safely carry."
          ],
          [
            "MSS",
            "The maximum TCP payload size used as a unit in many window calculations."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Apply TCP congestion rules to a new case · Explore: put the actions in a valid working sequence.",
        "items": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "explanation": "Read cwnd, the advertised receive window and the current TCP phase. Apply the ACK, timeout or duplicate-ACK event. Update the send limit and the next congestion-control state."
      },
      {
        "type": "choice",
        "prompt": "Apply TCP congestion rules to a new case · Explore: which statement is accurate for apply tcp congestion rules to a new case?",
        "options": [
          "Slow start",
          "Congestion avoidance already",
          "Connection teardown"
        ],
        "answer": 0,
        "explanation": "Slow start. A congestion-window question must state the variant and loss event. Track cwnd, ssthresh and the phase after each ACK or loss rather than applying one growth rule to every round."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "tcp",
      "mode": "congestion",
      "lecture": 37
    },
    "cnScene": [
      "Read cwnd, the advertised receive window and the current TCP phase.",
      "A congestion-window question must state the variant and loss event. Track cwnd, ssthresh and the phase after each ACK or loss rather than applying one growth rule to every round.",
      "Update the send limit and the next congestion-control state."
    ],
    "sourceReferences": [
      {
        "start": 355.53,
        "end": 387.18,
        "text": " So have you understood this question is very easy. Okay, there is nothing in this question They are just asking at each ACK what is happening at each ACK in the slow start is extremely easy plus one plus one MSS, right? 2 ACK plus 2 MSS, that's all easy and good question, right? There has been one more question that they have asked and get something like this We have solved in the last class. Do you remember that question? So we have already solved one question in the last class which was relat"
      },
      {
        "start": 387.97,
        "end": 414.08,
        "text": " in the slowest start they are asking right in the slowest start phase they are asking about that at each equilibrium what is happening at each RTT what is happening now I think by this point in time it should be very very clear that at each RTT what is happening and each equilibrium what is happening right so yeah so that's all for today we will continue tomorrow right thank you everyone take care bye bye"
      }
    ],
    "start": 112
  },
  {
    "id": 113,
    "lecture": 37,
    "title": "Apply TCP congestion rules to a new case · Apply",
    "concept": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. A congestion-window question must state the variant and loss event. Track cwnd, ssthresh and the phase after each ACK or loss rather than applying one growth rule to every round.",
    "teachingSteps": [
      "Apply: Update the send limit and the next congestion-control state.",
      "A congestion-window question must state the variant and loss event. Track cwnd, ssthresh and the phase after each ACK or loss rather than applying one growth rule to every round.",
      "Read cwnd, the advertised receive window and the current TCP phase."
    ],
    "foundation": {
      "title": "Apply TCP congestion rules to a new case",
      "idea": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. A congestion-window question must state the variant and loss event. Track cwnd, ssthresh and the phase after each ACK or loss rather than applying one growth rule to every round.",
      "terms": [
        "Receive window (rwnd): The receiver’s advertised limit based on available buffer space.",
        "Congestion window (cwnd): The sender’s estimate of how much data the network can safely carry.",
        "MSS: The maximum TCP payload size used as a unit in many window calculations."
      ],
      "example": "With ssthresh=8 MSS and cwnd=4 MSS, slow start continues until the threshold; above it, additive growth applies unless loss is detected."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Apply TCP congestion rules to a new case · Apply: A new case changes one condition: cwnd is 4 MSS and ssthresh is 8 MSS with no loss. Which phase normally applies next? Which conclusion still follows?",
        "options": [
          "Slow start",
          "Congestion avoidance already",
          "Connection teardown"
        ],
        "answer": 0,
        "explanation": "Slow start. Update the send limit and the next congestion-control state."
      },
      {
        "type": "match",
        "prompt": "Apply TCP congestion rules to a new case · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "MSS",
            "The maximum TCP payload size used as a unit in many window calculations."
          ],
          [
            "Receive window (rwnd)",
            "The receiver’s advertised limit based on available buffer space."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Apply TCP congestion rules to a new case · Apply: put the actions in a valid working sequence.",
        "items": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "explanation": "Read cwnd, the advertised receive window and the current TCP phase. Apply the ACK, timeout or duplicate-ACK event. Update the send limit and the next congestion-control state."
      },
      {
        "type": "choice",
        "prompt": "Apply TCP congestion rules to a new case · Apply: which statement is accurate for apply tcp congestion rules to a new case?",
        "options": [
          "Slow start",
          "Congestion avoidance already",
          "Connection teardown"
        ],
        "answer": 0,
        "explanation": "Slow start. A congestion-window question must state the variant and loss event. Track cwnd, ssthresh and the phase after each ACK or loss rather than applying one growth rule to every round."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "tcp",
      "mode": "congestion",
      "lecture": 37
    },
    "cnScene": [
      "Read cwnd, the advertised receive window and the current TCP phase.",
      "A congestion-window question must state the variant and loss event. Track cwnd, ssthresh and the phase after each ACK or loss rather than applying one growth rule to every round.",
      "Update the send limit and the next congestion-control state."
    ],
    "sourceReferences": [
      {
        "start": 355.53,
        "end": 387.18,
        "text": " So have you understood this question is very easy. Okay, there is nothing in this question They are just asking at each ACK what is happening at each ACK in the slow start is extremely easy plus one plus one MSS, right? 2 ACK plus 2 MSS, that's all easy and good question, right? There has been one more question that they have asked and get something like this We have solved in the last class. Do you remember that question? So we have already solved one question in the last class which was relat"
      },
      {
        "start": 387.97,
        "end": 414.08,
        "text": " in the slowest start they are asking right in the slowest start phase they are asking about that at each equilibrium what is happening at each RTT what is happening now I think by this point in time it should be very very clear that at each RTT what is happening and each equilibrium what is happening right so yeah so that's all for today we will continue tomorrow right thank you everyone take care bye bye"
      }
    ],
    "start": 113
  },
  {
    "id": 114,
    "lecture": 38,
    "title": "Analyze TCP congestion and flow together · Discover",
    "concept": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. The sender is constrained by both the receiver’s buffer and the network estimate. A small rwnd can limit sending even when cwnd grows; a network loss can reduce cwnd even when the receiver has space.",
    "teachingSteps": [
      "Discover: Read cwnd, the advertised receive window and the current TCP phase.",
      "The sender is constrained by both the receiver’s buffer and the network estimate. A small rwnd can limit sending even when cwnd grows; a network loss can reduce cwnd even when the receiver has space.",
      "Apply the ACK, timeout or duplicate-ACK event."
    ],
    "foundation": {
      "title": "Analyze TCP congestion and flow together",
      "idea": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. The sender is constrained by both the receiver’s buffer and the network estimate. A small rwnd can limit sending even when cwnd grows; a network loss can reduce cwnd even when the receiver has space.",
      "terms": [
        "Receive window (rwnd): The receiver’s advertised limit based on available buffer space.",
        "Congestion window (cwnd): The sender’s estimate of how much data the network can safely carry.",
        "MSS: The maximum TCP payload size used as a unit in many window calculations."
      ],
      "example": "With rwnd=3 MSS and cwnd=10 MSS, only 3 MSS may be outstanding in the simplified model; receiver flow control remains active during congestion avoidance."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Analyze TCP congestion and flow together · Discover: cwnd is 10 MSS but rwnd is 3 MSS. How much data may be outstanding in the simplified model? Which networking rule determines the result?",
        "options": [
          "10 MSS",
          "13 MSS",
          "3 MSS"
        ],
        "answer": 2,
        "explanation": "3 MSS. Read cwnd, the advertised receive window and the current TCP phase."
      },
      {
        "type": "match",
        "prompt": "Analyze TCP congestion and flow together · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Receive window (rwnd)",
            "The receiver’s advertised limit based on available buffer space."
          ],
          [
            "Congestion window (cwnd)",
            "The sender’s estimate of how much data the network can safely carry."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Analyze TCP congestion and flow together · Discover: put the actions in a valid working sequence.",
        "items": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "explanation": "Read cwnd, the advertised receive window and the current TCP phase. Apply the ACK, timeout or duplicate-ACK event. Update the send limit and the next congestion-control state."
      },
      {
        "type": "choice",
        "prompt": "Analyze TCP congestion and flow together · Discover: which statement is accurate for analyze tcp congestion and flow together?",
        "options": [
          "3 MSS",
          "10 MSS",
          "13 MSS"
        ],
        "answer": 0,
        "explanation": "3 MSS. The sender is constrained by both the receiver’s buffer and the network estimate. A small rwnd can limit sending even when cwnd grows; a network loss can reduce cwnd even when the receiver has space."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "tcp",
      "mode": "congestion",
      "lecture": 38
    },
    "cnScene": [
      "Read cwnd, the advertised receive window and the current TCP phase.",
      "The sender is constrained by both the receiver’s buffer and the network estimate. A small rwnd can limit sending even when cwnd grows; a network loss can reduce cwnd even when the receiver has space.",
      "Update the send limit and the next congestion-control state."
    ],
    "sourceReferences": [
      {
        "start": 536.55,
        "end": 566.95,
        "text": " But at this point in time, can you tell me what is the congestion window size or the sender window size? Because the receiver, let's suppose the receiver is not a limit. So congestion window size and sender window size is same. Can you tell me what it will be? The moment you get the ACQ for 18, the moment you get ACQ for 18, since you're still in the slow start phase, you will make it to 4 MSS, right? 4000. So it is 4 MSS. Okay. Now, which means you will be sending"
      },
      {
        "start": 1912.4,
        "end": 1941.98,
        "text": " So the congestion window obviously has to be this much large. So yeah, that is true. The congestion window size of the receiver. Okay. At the receiver end, the congestion window size, I don't think we can even guess it, right? Using this information. Let's just see the option C. The sender is expecting echolumniate packet from the receiver. Obviously the sender should be expecting echolumniate from the receiver, right? So it is true or false."
      }
    ],
    "start": 114
  },
  {
    "id": 115,
    "lecture": 38,
    "title": "Analyze TCP congestion and flow together · Explore",
    "concept": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. The sender is constrained by both the receiver’s buffer and the network estimate. A small rwnd can limit sending even when cwnd grows; a network loss can reduce cwnd even when the receiver has space.",
    "teachingSteps": [
      "Explore: Apply the ACK, timeout or duplicate-ACK event.",
      "The sender is constrained by both the receiver’s buffer and the network estimate. A small rwnd can limit sending even when cwnd grows; a network loss can reduce cwnd even when the receiver has space.",
      "Update the send limit and the next congestion-control state."
    ],
    "foundation": {
      "title": "Analyze TCP congestion and flow together",
      "idea": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. The sender is constrained by both the receiver’s buffer and the network estimate. A small rwnd can limit sending even when cwnd grows; a network loss can reduce cwnd even when the receiver has space.",
      "terms": [
        "Receive window (rwnd): The receiver’s advertised limit based on available buffer space.",
        "Congestion window (cwnd): The sender’s estimate of how much data the network can safely carry.",
        "MSS: The maximum TCP payload size used as a unit in many window calculations."
      ],
      "example": "With rwnd=3 MSS and cwnd=10 MSS, only 3 MSS may be outstanding in the simplified model; receiver flow control remains active during congestion avoidance."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Analyze TCP congestion and flow together · Explore: cwnd is 10 MSS but rwnd is 3 MSS. How much data may be outstanding in the simplified model? Which step should the host or router take next?",
        "options": [
          "Apply the ACK or loss response",
          "Compare the receiver and network limits",
          "Update cwnd, threshold and outstanding data"
        ],
        "answer": 0,
        "explanation": "Apply the ACK or loss response. Apply the ACK, timeout or duplicate-ACK event."
      },
      {
        "type": "match",
        "prompt": "Analyze TCP congestion and flow together · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Congestion window (cwnd)",
            "The sender’s estimate of how much data the network can safely carry."
          ],
          [
            "MSS",
            "The maximum TCP payload size used as a unit in many window calculations."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Analyze TCP congestion and flow together · Explore: put the actions in a valid working sequence.",
        "items": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "explanation": "Read cwnd, the advertised receive window and the current TCP phase. Apply the ACK, timeout or duplicate-ACK event. Update the send limit and the next congestion-control state."
      },
      {
        "type": "choice",
        "prompt": "Analyze TCP congestion and flow together · Explore: which statement is accurate for analyze tcp congestion and flow together?",
        "options": [
          "3 MSS",
          "10 MSS",
          "13 MSS"
        ],
        "answer": 0,
        "explanation": "3 MSS. The sender is constrained by both the receiver’s buffer and the network estimate. A small rwnd can limit sending even when cwnd grows; a network loss can reduce cwnd even when the receiver has space."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "tcp",
      "mode": "congestion",
      "lecture": 38
    },
    "cnScene": [
      "Read cwnd, the advertised receive window and the current TCP phase.",
      "The sender is constrained by both the receiver’s buffer and the network estimate. A small rwnd can limit sending even when cwnd grows; a network loss can reduce cwnd even when the receiver has space.",
      "Update the send limit and the next congestion-control state."
    ],
    "sourceReferences": [
      {
        "start": 536.55,
        "end": 566.95,
        "text": " But at this point in time, can you tell me what is the congestion window size or the sender window size? Because the receiver, let's suppose the receiver is not a limit. So congestion window size and sender window size is same. Can you tell me what it will be? The moment you get the ACQ for 18, the moment you get ACQ for 18, since you're still in the slow start phase, you will make it to 4 MSS, right? 4000. So it is 4 MSS. Okay. Now, which means you will be sending"
      },
      {
        "start": 1912.4,
        "end": 1941.98,
        "text": " So the congestion window obviously has to be this much large. So yeah, that is true. The congestion window size of the receiver. Okay. At the receiver end, the congestion window size, I don't think we can even guess it, right? Using this information. Let's just see the option C. The sender is expecting echolumniate packet from the receiver. Obviously the sender should be expecting echolumniate from the receiver, right? So it is true or false."
      }
    ],
    "start": 115
  },
  {
    "id": 116,
    "lecture": 38,
    "title": "Analyze TCP congestion and flow together · Apply",
    "concept": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. The sender is constrained by both the receiver’s buffer and the network estimate. A small rwnd can limit sending even when cwnd grows; a network loss can reduce cwnd even when the receiver has space.",
    "teachingSteps": [
      "Apply: Update the send limit and the next congestion-control state.",
      "The sender is constrained by both the receiver’s buffer and the network estimate. A small rwnd can limit sending even when cwnd grows; a network loss can reduce cwnd even when the receiver has space.",
      "Read cwnd, the advertised receive window and the current TCP phase."
    ],
    "foundation": {
      "title": "Analyze TCP congestion and flow together",
      "idea": "TCP controls how much data a sender keeps outstanding. The receive window protects the receiver’s buffer, while the congestion window responds to network capacity and loss; the usable sending window is limited by both. The sender is constrained by both the receiver’s buffer and the network estimate. A small rwnd can limit sending even when cwnd grows; a network loss can reduce cwnd even when the receiver has space.",
      "terms": [
        "Receive window (rwnd): The receiver’s advertised limit based on available buffer space.",
        "Congestion window (cwnd): The sender’s estimate of how much data the network can safely carry.",
        "MSS: The maximum TCP payload size used as a unit in many window calculations."
      ],
      "example": "With rwnd=3 MSS and cwnd=10 MSS, only 3 MSS may be outstanding in the simplified model; receiver flow control remains active during congestion avoidance."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Analyze TCP congestion and flow together · Apply: A new case changes one condition: cwnd is 10 MSS but rwnd is 3 MSS. How much data may be outstanding in the simplified model? Which conclusion still follows?",
        "options": [
          "10 MSS",
          "3 MSS",
          "13 MSS"
        ],
        "answer": 1,
        "explanation": "3 MSS. Update the send limit and the next congestion-control state."
      },
      {
        "type": "match",
        "prompt": "Analyze TCP congestion and flow together · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "MSS",
            "The maximum TCP payload size used as a unit in many window calculations."
          ],
          [
            "Receive window (rwnd)",
            "The receiver’s advertised limit based on available buffer space."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Analyze TCP congestion and flow together · Apply: put the actions in a valid working sequence.",
        "items": [
          "Compare the receiver and network limits",
          "Apply the ACK or loss response",
          "Update cwnd, threshold and outstanding data"
        ],
        "explanation": "Read cwnd, the advertised receive window and the current TCP phase. Apply the ACK, timeout or duplicate-ACK event. Update the send limit and the next congestion-control state."
      },
      {
        "type": "choice",
        "prompt": "Analyze TCP congestion and flow together · Apply: which statement is accurate for analyze tcp congestion and flow together?",
        "options": [
          "3 MSS",
          "10 MSS",
          "13 MSS"
        ],
        "answer": 0,
        "explanation": "3 MSS. The sender is constrained by both the receiver’s buffer and the network estimate. A small rwnd can limit sending even when cwnd grows; a network loss can reduce cwnd even when the receiver has space."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "tcp",
      "mode": "congestion",
      "lecture": 38
    },
    "cnScene": [
      "Read cwnd, the advertised receive window and the current TCP phase.",
      "The sender is constrained by both the receiver’s buffer and the network estimate. A small rwnd can limit sending even when cwnd grows; a network loss can reduce cwnd even when the receiver has space.",
      "Update the send limit and the next congestion-control state."
    ],
    "sourceReferences": [
      {
        "start": 536.55,
        "end": 566.95,
        "text": " But at this point in time, can you tell me what is the congestion window size or the sender window size? Because the receiver, let's suppose the receiver is not a limit. So congestion window size and sender window size is same. Can you tell me what it will be? The moment you get the ACQ for 18, the moment you get ACQ for 18, since you're still in the slow start phase, you will make it to 4 MSS, right? 4000. So it is 4 MSS. Okay. Now, which means you will be sending"
      },
      {
        "start": 1912.4,
        "end": 1941.98,
        "text": " So the congestion window obviously has to be this much large. So yeah, that is true. The congestion window size of the receiver. Okay. At the receiver end, the congestion window size, I don't think we can even guess it, right? Using this information. Let's just see the option C. The sender is expecting echolumniate packet from the receiver. Obviously the sender should be expecting echolumniate from the receiver, right? So it is true or false."
      }
    ],
    "start": 116
  },
  {
    "id": 117,
    "lecture": 39,
    "title": "Understand TCP options · Discover",
    "concept": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. TCP options extend the base header. Common examples include MSS, window scale, SACK permitted/blocks and timestamps; options are negotiated or carried in particular segments.",
    "teachingSteps": [
      "Discover: Identify the application endpoints and transport protocol.",
      "TCP options extend the base header. Common examples include MSS, window scale, SACK permitted/blocks and timestamps; options are negotiated or carried in particular segments.",
      "Read the relevant header field or connection event."
    ],
    "foundation": {
      "title": "Understand TCP options",
      "idea": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. TCP options extend the base header. Common examples include MSS, window scale, SACK permitted/blocks and timestamps; options are negotiated or carried in particular segments.",
      "terms": [
        "Port: A transport-layer number that identifies an application endpoint on a host.",
        "UDP datagram: A message-oriented transport unit with no built-in delivery or ordering guarantee.",
        "TCP segment: A transport unit carrying sequence, acknowledgment, flags and window information."
      ],
      "example": "Window scaling allows a larger advertised receive window than the unscaled 16-bit field, which matters on high-bandwidth, high-delay paths."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Understand TCP options · Discover: Which TCP option lets endpoints advertise receive windows larger than 65,535 bytes? Which networking rule determines the result?",
        "options": [
          "Window scale",
          "MSS",
          "FIN"
        ],
        "answer": 0,
        "explanation": "Window scale. Identify the application endpoints and transport protocol."
      },
      {
        "type": "match",
        "prompt": "Understand TCP options · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Port",
            "A transport-layer number that identifies an application endpoint on a host."
          ],
          [
            "UDP datagram",
            "A message-oriented transport unit with no built-in delivery or ordering guarantee."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Understand TCP options · Discover: put the actions in a valid working sequence.",
        "items": [
          "Choose the transport service and process ports",
          "Read the segment or datagram fields",
          "Apply the connection and delivery behavior"
        ],
        "explanation": "Identify the application endpoints and transport protocol. Read the relevant header field or connection event. Apply the protocol’s delivery, reliability or control rule."
      },
      {
        "type": "choice",
        "prompt": "Understand TCP options · Discover: which statement is accurate for understand tcp options?",
        "options": [
          "Window scale",
          "MSS",
          "FIN"
        ],
        "answer": 0,
        "explanation": "Window scale. TCP options extend the base header. Common examples include MSS, window scale, SACK permitted/blocks and timestamps; options are negotiated or carried in particular segments."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "transport",
      "mode": "options",
      "lecture": 39
    },
    "cnScene": [
      "Identify the application endpoints and transport protocol.",
      "TCP options extend the base header. Common examples include MSS, window scale, SACK permitted/blocks and timestamps; options are negotiated or carried in particular segments.",
      "Apply the protocol’s delivery, reliability or control rule."
    ],
    "sourceReferences": [
      {
        "start": 775.93,
        "end": 802.07,
        "text": " is the answer here any size application layer can provide to the transport layer and then transport it's a transport layer responsibility to divide into it into the segments right okay so if you notice then we were having multiple options one of the option is or this mss size that we can never negotiate another option is called large window option okay which means which means if you recall the tcp header this was a tcp header right"
      },
      {
        "start": 1577.81,
        "end": 1630.88,
        "text": " Okay, so which means that if we use options then TCP window size will be 2 power 16 plus 14 which is 2 power 30. This is from original header and this is from options. Is this okay to everyone? So you can scale up the TCP window to 2 power 30."
      }
    ],
    "start": 117
  },
  {
    "id": 118,
    "lecture": 39,
    "title": "Understand TCP options · Explore",
    "concept": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. TCP options extend the base header. Common examples include MSS, window scale, SACK permitted/blocks and timestamps; options are negotiated or carried in particular segments.",
    "teachingSteps": [
      "Explore: Read the relevant header field or connection event.",
      "TCP options extend the base header. Common examples include MSS, window scale, SACK permitted/blocks and timestamps; options are negotiated or carried in particular segments.",
      "Apply the protocol’s delivery, reliability or control rule."
    ],
    "foundation": {
      "title": "Understand TCP options",
      "idea": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. TCP options extend the base header. Common examples include MSS, window scale, SACK permitted/blocks and timestamps; options are negotiated or carried in particular segments.",
      "terms": [
        "Port: A transport-layer number that identifies an application endpoint on a host.",
        "UDP datagram: A message-oriented transport unit with no built-in delivery or ordering guarantee.",
        "TCP segment: A transport unit carrying sequence, acknowledgment, flags and window information."
      ],
      "example": "Window scaling allows a larger advertised receive window than the unscaled 16-bit field, which matters on high-bandwidth, high-delay paths."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Understand TCP options · Explore: Which TCP option lets endpoints advertise receive windows larger than 65,535 bytes? Which step should the host or router take next?",
        "options": [
          "Choose the transport service and process ports",
          "Read the segment or datagram fields",
          "Apply the connection and delivery behavior"
        ],
        "answer": 1,
        "explanation": "Read the segment or datagram fields. Read the relevant header field or connection event."
      },
      {
        "type": "match",
        "prompt": "Understand TCP options · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "UDP datagram",
            "A message-oriented transport unit with no built-in delivery or ordering guarantee."
          ],
          [
            "TCP segment",
            "A transport unit carrying sequence, acknowledgment, flags and window information."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Understand TCP options · Explore: put the actions in a valid working sequence.",
        "items": [
          "Choose the transport service and process ports",
          "Read the segment or datagram fields",
          "Apply the connection and delivery behavior"
        ],
        "explanation": "Identify the application endpoints and transport protocol. Read the relevant header field or connection event. Apply the protocol’s delivery, reliability or control rule."
      },
      {
        "type": "choice",
        "prompt": "Understand TCP options · Explore: which statement is accurate for understand tcp options?",
        "options": [
          "Window scale",
          "MSS",
          "FIN"
        ],
        "answer": 0,
        "explanation": "Window scale. TCP options extend the base header. Common examples include MSS, window scale, SACK permitted/blocks and timestamps; options are negotiated or carried in particular segments."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "transport",
      "mode": "options",
      "lecture": 39
    },
    "cnScene": [
      "Identify the application endpoints and transport protocol.",
      "TCP options extend the base header. Common examples include MSS, window scale, SACK permitted/blocks and timestamps; options are negotiated or carried in particular segments.",
      "Apply the protocol’s delivery, reliability or control rule."
    ],
    "sourceReferences": [
      {
        "start": 775.93,
        "end": 802.07,
        "text": " is the answer here any size application layer can provide to the transport layer and then transport it's a transport layer responsibility to divide into it into the segments right okay so if you notice then we were having multiple options one of the option is or this mss size that we can never negotiate another option is called large window option okay which means which means if you recall the tcp header this was a tcp header right"
      },
      {
        "start": 1577.81,
        "end": 1630.88,
        "text": " Okay, so which means that if we use options then TCP window size will be 2 power 16 plus 14 which is 2 power 30. This is from original header and this is from options. Is this okay to everyone? So you can scale up the TCP window to 2 power 30."
      }
    ],
    "start": 118
  },
  {
    "id": 119,
    "lecture": 39,
    "title": "Understand TCP options · Apply",
    "concept": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. TCP options extend the base header. Common examples include MSS, window scale, SACK permitted/blocks and timestamps; options are negotiated or carried in particular segments.",
    "teachingSteps": [
      "Apply: Apply the protocol’s delivery, reliability or control rule.",
      "TCP options extend the base header. Common examples include MSS, window scale, SACK permitted/blocks and timestamps; options are negotiated or carried in particular segments.",
      "Identify the application endpoints and transport protocol."
    ],
    "foundation": {
      "title": "Understand TCP options",
      "idea": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. TCP options extend the base header. Common examples include MSS, window scale, SACK permitted/blocks and timestamps; options are negotiated or carried in particular segments.",
      "terms": [
        "Port: A transport-layer number that identifies an application endpoint on a host.",
        "UDP datagram: A message-oriented transport unit with no built-in delivery or ordering guarantee.",
        "TCP segment: A transport unit carrying sequence, acknowledgment, flags and window information."
      ],
      "example": "Window scaling allows a larger advertised receive window than the unscaled 16-bit field, which matters on high-bandwidth, high-delay paths."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Understand TCP options · Apply: A new case changes one condition: Which TCP option lets endpoints advertise receive windows larger than 65,535 bytes? Which conclusion still follows?",
        "options": [
          "MSS",
          "FIN",
          "Window scale"
        ],
        "answer": 2,
        "explanation": "Window scale. Apply the protocol’s delivery, reliability or control rule."
      },
      {
        "type": "match",
        "prompt": "Understand TCP options · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "TCP segment",
            "A transport unit carrying sequence, acknowledgment, flags and window information."
          ],
          [
            "Port",
            "A transport-layer number that identifies an application endpoint on a host."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Understand TCP options · Apply: put the actions in a valid working sequence.",
        "items": [
          "Choose the transport service and process ports",
          "Read the segment or datagram fields",
          "Apply the connection and delivery behavior"
        ],
        "explanation": "Identify the application endpoints and transport protocol. Read the relevant header field or connection event. Apply the protocol’s delivery, reliability or control rule."
      },
      {
        "type": "choice",
        "prompt": "Understand TCP options · Apply: which statement is accurate for understand tcp options?",
        "options": [
          "Window scale",
          "MSS",
          "FIN"
        ],
        "answer": 0,
        "explanation": "Window scale. TCP options extend the base header. Common examples include MSS, window scale, SACK permitted/blocks and timestamps; options are negotiated or carried in particular segments."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "transport",
      "mode": "options",
      "lecture": 39
    },
    "cnScene": [
      "Identify the application endpoints and transport protocol.",
      "TCP options extend the base header. Common examples include MSS, window scale, SACK permitted/blocks and timestamps; options are negotiated or carried in particular segments.",
      "Apply the protocol’s delivery, reliability or control rule."
    ],
    "sourceReferences": [
      {
        "start": 775.93,
        "end": 802.07,
        "text": " is the answer here any size application layer can provide to the transport layer and then transport it's a transport layer responsibility to divide into it into the segments right okay so if you notice then we were having multiple options one of the option is or this mss size that we can never negotiate another option is called large window option okay which means which means if you recall the tcp header this was a tcp header right"
      },
      {
        "start": 1577.81,
        "end": 1630.88,
        "text": " Okay, so which means that if we use options then TCP window size will be 2 power 16 plus 14 which is 2 power 30. This is from original header and this is from options. Is this okay to everyone? So you can scale up the TCP window to 2 power 30."
      }
    ],
    "start": 119
  },
  {
    "id": 120,
    "lecture": 40,
    "title": "Manage TCP timers across layers · Discover",
    "concept": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. TCP retransmission timeout estimates depend on measured round-trip time and variation. The link, network and transport layers each have their own responsibilities; a TCP ACK is not an Ethernet ACK.",
    "teachingSteps": [
      "Discover: Identify the application endpoints and transport protocol.",
      "TCP retransmission timeout estimates depend on measured round-trip time and variation. The link, network and transport layers each have their own responsibilities; a TCP ACK is not an Ethernet ACK.",
      "Read the relevant header field or connection event."
    ],
    "foundation": {
      "title": "Manage TCP timers across layers",
      "idea": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. TCP retransmission timeout estimates depend on measured round-trip time and variation. The link, network and transport layers each have their own responsibilities; a TCP ACK is not an Ethernet ACK.",
      "terms": [
        "Port: A transport-layer number that identifies an application endpoint on a host.",
        "UDP datagram: A message-oriented transport unit with no built-in delivery or ordering guarantee.",
        "TCP segment: A transport unit carrying sequence, acknowledgment, flags and window information."
      ],
      "example": "If a segment is not acknowledged before its retransmission timeout, TCP retransmits it and backs off the timeout according to its algorithm."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Manage TCP timers across layers · Discover: Which timer causes TCP to retransmit when a sent segment remains unacknowledged? Which networking rule determines the result?",
        "options": [
          "DNS cache TTL",
          "Retransmission timeout (RTO)",
          "Ethernet inter-frame gap"
        ],
        "answer": 1,
        "explanation": "Retransmission timeout (RTO). Identify the application endpoints and transport protocol."
      },
      {
        "type": "match",
        "prompt": "Manage TCP timers across layers · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Port",
            "A transport-layer number that identifies an application endpoint on a host."
          ],
          [
            "UDP datagram",
            "A message-oriented transport unit with no built-in delivery or ordering guarantee."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Manage TCP timers across layers · Discover: put the actions in a valid working sequence.",
        "items": [
          "Choose the transport service and process ports",
          "Read the segment or datagram fields",
          "Apply the connection and delivery behavior"
        ],
        "explanation": "Identify the application endpoints and transport protocol. Read the relevant header field or connection event. Apply the protocol’s delivery, reliability or control rule."
      },
      {
        "type": "choice",
        "prompt": "Manage TCP timers across layers · Discover: which statement is accurate for manage tcp timers across layers?",
        "options": [
          "Retransmission timeout (RTO)",
          "DNS cache TTL",
          "Ethernet inter-frame gap"
        ],
        "answer": 0,
        "explanation": "Retransmission timeout (RTO). TCP retransmission timeout estimates depend on measured round-trip time and variation. The link, network and transport layers each have their own responsibilities; a TCP ACK is not an Ethernet ACK."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "transport",
      "mode": "timers",
      "lecture": 40
    },
    "cnScene": [
      "Identify the application endpoints and transport protocol.",
      "TCP retransmission timeout estimates depend on measured round-trip time and variation. The link, network and transport layers each have their own responsibilities; a TCP ACK is not an Ethernet ACK.",
      "Apply the protocol’s delivery, reliability or control rule."
    ],
    "sourceReferences": [
      {
        "start": 13.52,
        "end": 44.8,
        "text": " Hi everyone. So let us now start today. We are going to see one very small topic, which is TCP timers. And then there is one more topic that that's what we are going to see today. Okay, let's see. So let's get started. Now, if you remember, we have already seen a few of the timers in this list. Like if you remember, particularly, we have seen time bit timer, we have seen keep alive timer. Now there are two more timers that TCP maintain, which are persistent timer and the retransmission timeout "
      },
      {
        "start": 4379.33,
        "end": 4408.83,
        "text": " you are having all the layers right let's suppose application layer transport layer data link layer sorry network layer network layer data link layer physical layer something like that right so let's suppose this is some message that you have and then this is some message then transport layer will be adding its its header right and every layer will be keep on adding this header now finally the packet that is coming out to be is basically let's suppose it is having a physical a physical layer do"
      }
    ],
    "start": 120
  },
  {
    "id": 121,
    "lecture": 40,
    "title": "Manage TCP timers across layers · Explore",
    "concept": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. TCP retransmission timeout estimates depend on measured round-trip time and variation. The link, network and transport layers each have their own responsibilities; a TCP ACK is not an Ethernet ACK.",
    "teachingSteps": [
      "Explore: Read the relevant header field or connection event.",
      "TCP retransmission timeout estimates depend on measured round-trip time and variation. The link, network and transport layers each have their own responsibilities; a TCP ACK is not an Ethernet ACK.",
      "Apply the protocol’s delivery, reliability or control rule."
    ],
    "foundation": {
      "title": "Manage TCP timers across layers",
      "idea": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. TCP retransmission timeout estimates depend on measured round-trip time and variation. The link, network and transport layers each have their own responsibilities; a TCP ACK is not an Ethernet ACK.",
      "terms": [
        "Port: A transport-layer number that identifies an application endpoint on a host.",
        "UDP datagram: A message-oriented transport unit with no built-in delivery or ordering guarantee.",
        "TCP segment: A transport unit carrying sequence, acknowledgment, flags and window information."
      ],
      "example": "If a segment is not acknowledged before its retransmission timeout, TCP retransmits it and backs off the timeout according to its algorithm."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Manage TCP timers across layers · Explore: Which timer causes TCP to retransmit when a sent segment remains unacknowledged? Which step should the host or router take next?",
        "options": [
          "Choose the transport service and process ports",
          "Apply the connection and delivery behavior",
          "Read the segment or datagram fields"
        ],
        "answer": 2,
        "explanation": "Read the segment or datagram fields. Read the relevant header field or connection event."
      },
      {
        "type": "match",
        "prompt": "Manage TCP timers across layers · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "UDP datagram",
            "A message-oriented transport unit with no built-in delivery or ordering guarantee."
          ],
          [
            "TCP segment",
            "A transport unit carrying sequence, acknowledgment, flags and window information."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Manage TCP timers across layers · Explore: put the actions in a valid working sequence.",
        "items": [
          "Choose the transport service and process ports",
          "Read the segment or datagram fields",
          "Apply the connection and delivery behavior"
        ],
        "explanation": "Identify the application endpoints and transport protocol. Read the relevant header field or connection event. Apply the protocol’s delivery, reliability or control rule."
      },
      {
        "type": "choice",
        "prompt": "Manage TCP timers across layers · Explore: which statement is accurate for manage tcp timers across layers?",
        "options": [
          "Retransmission timeout (RTO)",
          "DNS cache TTL",
          "Ethernet inter-frame gap"
        ],
        "answer": 0,
        "explanation": "Retransmission timeout (RTO). TCP retransmission timeout estimates depend on measured round-trip time and variation. The link, network and transport layers each have their own responsibilities; a TCP ACK is not an Ethernet ACK."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "transport",
      "mode": "timers",
      "lecture": 40
    },
    "cnScene": [
      "Identify the application endpoints and transport protocol.",
      "TCP retransmission timeout estimates depend on measured round-trip time and variation. The link, network and transport layers each have their own responsibilities; a TCP ACK is not an Ethernet ACK.",
      "Apply the protocol’s delivery, reliability or control rule."
    ],
    "sourceReferences": [
      {
        "start": 13.52,
        "end": 44.8,
        "text": " Hi everyone. So let us now start today. We are going to see one very small topic, which is TCP timers. And then there is one more topic that that's what we are going to see today. Okay, let's see. So let's get started. Now, if you remember, we have already seen a few of the timers in this list. Like if you remember, particularly, we have seen time bit timer, we have seen keep alive timer. Now there are two more timers that TCP maintain, which are persistent timer and the retransmission timeout "
      },
      {
        "start": 4379.33,
        "end": 4408.83,
        "text": " you are having all the layers right let's suppose application layer transport layer data link layer sorry network layer network layer data link layer physical layer something like that right so let's suppose this is some message that you have and then this is some message then transport layer will be adding its its header right and every layer will be keep on adding this header now finally the packet that is coming out to be is basically let's suppose it is having a physical a physical layer do"
      }
    ],
    "start": 121
  },
  {
    "id": 122,
    "lecture": 40,
    "title": "Manage TCP timers across layers · Apply",
    "concept": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. TCP retransmission timeout estimates depend on measured round-trip time and variation. The link, network and transport layers each have their own responsibilities; a TCP ACK is not an Ethernet ACK.",
    "teachingSteps": [
      "Apply: Apply the protocol’s delivery, reliability or control rule.",
      "TCP retransmission timeout estimates depend on measured round-trip time and variation. The link, network and transport layers each have their own responsibilities; a TCP ACK is not an Ethernet ACK.",
      "Identify the application endpoints and transport protocol."
    ],
    "foundation": {
      "title": "Manage TCP timers across layers",
      "idea": "The transport layer delivers data between processes identified by port numbers. UDP sends datagrams with minimal coordination; TCP establishes a connection and tracks reliable ordered bytes with acknowledgments and control fields. TCP retransmission timeout estimates depend on measured round-trip time and variation. The link, network and transport layers each have their own responsibilities; a TCP ACK is not an Ethernet ACK.",
      "terms": [
        "Port: A transport-layer number that identifies an application endpoint on a host.",
        "UDP datagram: A message-oriented transport unit with no built-in delivery or ordering guarantee.",
        "TCP segment: A transport unit carrying sequence, acknowledgment, flags and window information."
      ],
      "example": "If a segment is not acknowledged before its retransmission timeout, TCP retransmits it and backs off the timeout according to its algorithm."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Manage TCP timers across layers · Apply: A new case changes one condition: Which timer causes TCP to retransmit when a sent segment remains unacknowledged? Which conclusion still follows?",
        "options": [
          "Retransmission timeout (RTO)",
          "DNS cache TTL",
          "Ethernet inter-frame gap"
        ],
        "answer": 0,
        "explanation": "Retransmission timeout (RTO). Apply the protocol’s delivery, reliability or control rule."
      },
      {
        "type": "match",
        "prompt": "Manage TCP timers across layers · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "TCP segment",
            "A transport unit carrying sequence, acknowledgment, flags and window information."
          ],
          [
            "Port",
            "A transport-layer number that identifies an application endpoint on a host."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Manage TCP timers across layers · Apply: put the actions in a valid working sequence.",
        "items": [
          "Choose the transport service and process ports",
          "Read the segment or datagram fields",
          "Apply the connection and delivery behavior"
        ],
        "explanation": "Identify the application endpoints and transport protocol. Read the relevant header field or connection event. Apply the protocol’s delivery, reliability or control rule."
      },
      {
        "type": "choice",
        "prompt": "Manage TCP timers across layers · Apply: which statement is accurate for manage tcp timers across layers?",
        "options": [
          "Retransmission timeout (RTO)",
          "DNS cache TTL",
          "Ethernet inter-frame gap"
        ],
        "answer": 0,
        "explanation": "Retransmission timeout (RTO). TCP retransmission timeout estimates depend on measured round-trip time and variation. The link, network and transport layers each have their own responsibilities; a TCP ACK is not an Ethernet ACK."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "transport",
      "mode": "timers",
      "lecture": 40
    },
    "cnScene": [
      "Identify the application endpoints and transport protocol.",
      "TCP retransmission timeout estimates depend on measured round-trip time and variation. The link, network and transport layers each have their own responsibilities; a TCP ACK is not an Ethernet ACK.",
      "Apply the protocol’s delivery, reliability or control rule."
    ],
    "sourceReferences": [
      {
        "start": 13.52,
        "end": 44.8,
        "text": " Hi everyone. So let us now start today. We are going to see one very small topic, which is TCP timers. And then there is one more topic that that's what we are going to see today. Okay, let's see. So let's get started. Now, if you remember, we have already seen a few of the timers in this list. Like if you remember, particularly, we have seen time bit timer, we have seen keep alive timer. Now there are two more timers that TCP maintain, which are persistent timer and the retransmission timeout "
      },
      {
        "start": 4379.33,
        "end": 4408.83,
        "text": " you are having all the layers right let's suppose application layer transport layer data link layer sorry network layer network layer data link layer physical layer something like that right so let's suppose this is some message that you have and then this is some message then transport layer will be adding its its header right and every layer will be keep on adding this header now finally the packet that is coming out to be is basically let's suppose it is having a physical a physical layer do"
      }
    ],
    "start": 122
  },
  {
    "id": 123,
    "lecture": 41,
    "title": "Shape traffic with leaky and token buckets · Discover",
    "concept": "Traffic shaping controls when packets leave a sender. A leaky bucket smooths output toward a fixed rate; a token bucket limits long-term rate while allowing bursts supported by stored tokens. A leaky bucket emits at a controlled rate and smooths bursts; excess arrivals may queue or be discarded. A token bucket accumulates tokens up to a cap and allows bursts when tokens are available.",
    "teachingSteps": [
      "Discover: Read the arrival rate, service or refill rate and bucket capacity.",
      "A leaky bucket emits at a controlled rate and smooths bursts; excess arrivals may queue or be discarded. A token bucket accumulates tokens up to a cap and allows bursts when tokens are available.",
      "Check whether tokens or queue space are available for the burst."
    ],
    "foundation": {
      "title": "Shape traffic with leaky and token buckets",
      "idea": "Traffic shaping controls when packets leave a sender. A leaky bucket smooths output toward a fixed rate; a token bucket limits long-term rate while allowing bursts supported by stored tokens. A leaky bucket emits at a controlled rate and smooths bursts; excess arrivals may queue or be discarded. A token bucket accumulates tokens up to a cap and allows bursts when tokens are available.",
      "terms": [
        "Token: A permission for a unit of traffic, replenished at a configured rate.",
        "Burst capacity: The largest short burst a bucket can permit.",
        "Leaky bucket: A shaper that drains queued traffic at a controlled, steady rate."
      ],
      "example": "A token bucket with capacity 8 and refill rate 2 tokens/s can allow an 8-packet burst after enough idle time, then sustains about 2 packets/s."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Shape traffic with leaky and token buckets · Discover: Which traffic shaper can permit a short burst after tokens have accumulated? Which networking rule determines the result?",
        "options": [
          "Leaky bucket with fixed-rate output only",
          "CRC remainder",
          "Token bucket"
        ],
        "answer": 2,
        "explanation": "Token bucket. Read the arrival rate, service or refill rate and bucket capacity."
      },
      {
        "type": "match",
        "prompt": "Shape traffic with leaky and token buckets · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Token",
            "A permission for a unit of traffic, replenished at a configured rate."
          ],
          [
            "Burst capacity",
            "The largest short burst a bucket can permit."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Shape traffic with leaky and token buckets · Discover: put the actions in a valid working sequence.",
        "items": [
          "Set the arrival and shaping rates",
          "Check available tokens or queue space",
          "Pass, delay or discard excess packets"
        ],
        "explanation": "Read the arrival rate, service or refill rate and bucket capacity. Check whether tokens or queue space are available for the burst. Determine which packets pass now, wait or are dropped."
      },
      {
        "type": "choice",
        "prompt": "Shape traffic with leaky and token buckets · Discover: which statement is accurate for shape traffic with leaky and token buckets?",
        "options": [
          "Token bucket",
          "Leaky bucket with fixed-rate output only",
          "CRC remainder"
        ],
        "answer": 0,
        "explanation": "Token bucket. A leaky bucket emits at a controlled rate and smooths bursts; excess arrivals may queue or be discarded. A token bucket accumulates tokens up to a cap and allows bursts when tokens are available."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "bucket",
      "mode": "bucket",
      "lecture": 41
    },
    "cnScene": [
      "Read the arrival rate, service or refill rate and bucket capacity.",
      "A leaky bucket emits at a controlled rate and smooths bursts; excess arrivals may queue or be discarded. A token bucket accumulates tokens up to a cap and allows bursts when tokens are available.",
      "Determine which packets pass now, wait or are dropped."
    ],
    "sourceReferences": [
      {
        "start": 53.53,
        "end": 82.81,
        "text": " in some fixed rate need not to be fixed for all the time which means like for some time it is let's suppose 5 Mbps and let's suppose for other time it may be 10 Mbps but it is not it is not very so that is called traffic shipping okay now at the host side only at your side only you will be implementing some techniques so one of the technique is called leaky bucket and another technique is called token bucket so what are those techniques"
      },
      {
        "start": 729.86,
        "end": 759.59,
        "text": " and i'm increasing the token so there is let's suppose there is no uh no shortage of the data this host is sending my sufficient data okay so this is not the bottleneck okay this is not the bottleneck i'm imagining the host is sending the sufficient data to the leaky bucket which it can supply so this is not the bottleneck so let's not worry about it so this r let's suppose it is two tokens per second or two packets per second so after one second how much data i can send"
      }
    ],
    "start": 123
  },
  {
    "id": 124,
    "lecture": 41,
    "title": "Shape traffic with leaky and token buckets · Explore",
    "concept": "Traffic shaping controls when packets leave a sender. A leaky bucket smooths output toward a fixed rate; a token bucket limits long-term rate while allowing bursts supported by stored tokens. A leaky bucket emits at a controlled rate and smooths bursts; excess arrivals may queue or be discarded. A token bucket accumulates tokens up to a cap and allows bursts when tokens are available.",
    "teachingSteps": [
      "Explore: Check whether tokens or queue space are available for the burst.",
      "A leaky bucket emits at a controlled rate and smooths bursts; excess arrivals may queue or be discarded. A token bucket accumulates tokens up to a cap and allows bursts when tokens are available.",
      "Determine which packets pass now, wait or are dropped."
    ],
    "foundation": {
      "title": "Shape traffic with leaky and token buckets",
      "idea": "Traffic shaping controls when packets leave a sender. A leaky bucket smooths output toward a fixed rate; a token bucket limits long-term rate while allowing bursts supported by stored tokens. A leaky bucket emits at a controlled rate and smooths bursts; excess arrivals may queue or be discarded. A token bucket accumulates tokens up to a cap and allows bursts when tokens are available.",
      "terms": [
        "Token: A permission for a unit of traffic, replenished at a configured rate.",
        "Burst capacity: The largest short burst a bucket can permit.",
        "Leaky bucket: A shaper that drains queued traffic at a controlled, steady rate."
      ],
      "example": "A token bucket with capacity 8 and refill rate 2 tokens/s can allow an 8-packet burst after enough idle time, then sustains about 2 packets/s."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Shape traffic with leaky and token buckets · Explore: Which traffic shaper can permit a short burst after tokens have accumulated? Which step should the host or router take next?",
        "options": [
          "Check available tokens or queue space",
          "Set the arrival and shaping rates",
          "Pass, delay or discard excess packets"
        ],
        "answer": 0,
        "explanation": "Check available tokens or queue space. Check whether tokens or queue space are available for the burst."
      },
      {
        "type": "match",
        "prompt": "Shape traffic with leaky and token buckets · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Burst capacity",
            "The largest short burst a bucket can permit."
          ],
          [
            "Leaky bucket",
            "A shaper that drains queued traffic at a controlled, steady rate."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Shape traffic with leaky and token buckets · Explore: put the actions in a valid working sequence.",
        "items": [
          "Set the arrival and shaping rates",
          "Check available tokens or queue space",
          "Pass, delay or discard excess packets"
        ],
        "explanation": "Read the arrival rate, service or refill rate and bucket capacity. Check whether tokens or queue space are available for the burst. Determine which packets pass now, wait or are dropped."
      },
      {
        "type": "choice",
        "prompt": "Shape traffic with leaky and token buckets · Explore: which statement is accurate for shape traffic with leaky and token buckets?",
        "options": [
          "Token bucket",
          "Leaky bucket with fixed-rate output only",
          "CRC remainder"
        ],
        "answer": 0,
        "explanation": "Token bucket. A leaky bucket emits at a controlled rate and smooths bursts; excess arrivals may queue or be discarded. A token bucket accumulates tokens up to a cap and allows bursts when tokens are available."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "bucket",
      "mode": "bucket",
      "lecture": 41
    },
    "cnScene": [
      "Read the arrival rate, service or refill rate and bucket capacity.",
      "A leaky bucket emits at a controlled rate and smooths bursts; excess arrivals may queue or be discarded. A token bucket accumulates tokens up to a cap and allows bursts when tokens are available.",
      "Determine which packets pass now, wait or are dropped."
    ],
    "sourceReferences": [
      {
        "start": 53.53,
        "end": 82.81,
        "text": " in some fixed rate need not to be fixed for all the time which means like for some time it is let's suppose 5 Mbps and let's suppose for other time it may be 10 Mbps but it is not it is not very so that is called traffic shipping okay now at the host side only at your side only you will be implementing some techniques so one of the technique is called leaky bucket and another technique is called token bucket so what are those techniques"
      },
      {
        "start": 729.86,
        "end": 759.59,
        "text": " and i'm increasing the token so there is let's suppose there is no uh no shortage of the data this host is sending my sufficient data okay so this is not the bottleneck okay this is not the bottleneck i'm imagining the host is sending the sufficient data to the leaky bucket which it can supply so this is not the bottleneck so let's not worry about it so this r let's suppose it is two tokens per second or two packets per second so after one second how much data i can send"
      }
    ],
    "start": 124
  },
  {
    "id": 125,
    "lecture": 41,
    "title": "Shape traffic with leaky and token buckets · Apply",
    "concept": "Traffic shaping controls when packets leave a sender. A leaky bucket smooths output toward a fixed rate; a token bucket limits long-term rate while allowing bursts supported by stored tokens. A leaky bucket emits at a controlled rate and smooths bursts; excess arrivals may queue or be discarded. A token bucket accumulates tokens up to a cap and allows bursts when tokens are available.",
    "teachingSteps": [
      "Apply: Determine which packets pass now, wait or are dropped.",
      "A leaky bucket emits at a controlled rate and smooths bursts; excess arrivals may queue or be discarded. A token bucket accumulates tokens up to a cap and allows bursts when tokens are available.",
      "Read the arrival rate, service or refill rate and bucket capacity."
    ],
    "foundation": {
      "title": "Shape traffic with leaky and token buckets",
      "idea": "Traffic shaping controls when packets leave a sender. A leaky bucket smooths output toward a fixed rate; a token bucket limits long-term rate while allowing bursts supported by stored tokens. A leaky bucket emits at a controlled rate and smooths bursts; excess arrivals may queue or be discarded. A token bucket accumulates tokens up to a cap and allows bursts when tokens are available.",
      "terms": [
        "Token: A permission for a unit of traffic, replenished at a configured rate.",
        "Burst capacity: The largest short burst a bucket can permit.",
        "Leaky bucket: A shaper that drains queued traffic at a controlled, steady rate."
      ],
      "example": "A token bucket with capacity 8 and refill rate 2 tokens/s can allow an 8-packet burst after enough idle time, then sustains about 2 packets/s."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Shape traffic with leaky and token buckets · Apply: A new case changes one condition: Which traffic shaper can permit a short burst after tokens have accumulated? Which conclusion still follows?",
        "options": [
          "Leaky bucket with fixed-rate output only",
          "Token bucket",
          "CRC remainder"
        ],
        "answer": 1,
        "explanation": "Token bucket. Determine which packets pass now, wait or are dropped."
      },
      {
        "type": "match",
        "prompt": "Shape traffic with leaky and token buckets · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Leaky bucket",
            "A shaper that drains queued traffic at a controlled, steady rate."
          ],
          [
            "Token",
            "A permission for a unit of traffic, replenished at a configured rate."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Shape traffic with leaky and token buckets · Apply: put the actions in a valid working sequence.",
        "items": [
          "Set the arrival and shaping rates",
          "Check available tokens or queue space",
          "Pass, delay or discard excess packets"
        ],
        "explanation": "Read the arrival rate, service or refill rate and bucket capacity. Check whether tokens or queue space are available for the burst. Determine which packets pass now, wait or are dropped."
      },
      {
        "type": "choice",
        "prompt": "Shape traffic with leaky and token buckets · Apply: which statement is accurate for shape traffic with leaky and token buckets?",
        "options": [
          "Token bucket",
          "Leaky bucket with fixed-rate output only",
          "CRC remainder"
        ],
        "answer": 0,
        "explanation": "Token bucket. A leaky bucket emits at a controlled rate and smooths bursts; excess arrivals may queue or be discarded. A token bucket accumulates tokens up to a cap and allows bursts when tokens are available."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "bucket",
      "mode": "bucket",
      "lecture": 41
    },
    "cnScene": [
      "Read the arrival rate, service or refill rate and bucket capacity.",
      "A leaky bucket emits at a controlled rate and smooths bursts; excess arrivals may queue or be discarded. A token bucket accumulates tokens up to a cap and allows bursts when tokens are available.",
      "Determine which packets pass now, wait or are dropped."
    ],
    "sourceReferences": [
      {
        "start": 53.53,
        "end": 82.81,
        "text": " in some fixed rate need not to be fixed for all the time which means like for some time it is let's suppose 5 Mbps and let's suppose for other time it may be 10 Mbps but it is not it is not very so that is called traffic shipping okay now at the host side only at your side only you will be implementing some techniques so one of the technique is called leaky bucket and another technique is called token bucket so what are those techniques"
      },
      {
        "start": 729.86,
        "end": 759.59,
        "text": " and i'm increasing the token so there is let's suppose there is no uh no shortage of the data this host is sending my sufficient data okay so this is not the bottleneck okay this is not the bottleneck i'm imagining the host is sending the sufficient data to the leaky bucket which it can supply so this is not the bottleneck so let's not worry about it so this r let's suppose it is two tokens per second or two packets per second so after one second how much data i can send"
      }
    ],
    "start": 125
  },
  {
    "id": 126,
    "lecture": 42,
    "title": "Exchange requests with HTTP · Discover",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. HTTP is an application-layer request/response protocol. A request has a method, target and headers; a response has a status code, headers and optional body. HTTPS protects HTTP with TLS.",
    "teachingSteps": [
      "Discover: Identify the application task and client/server roles.",
      "HTTP is an application-layer request/response protocol. A request has a method, target and headers; a response has a status code, headers and optional body. HTTPS protects HTTP with TLS.",
      "Follow the request, lookup, transfer or response sequence."
    ],
    "foundation": {
      "title": "Exchange requests with HTTP",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. HTTP is an application-layer request/response protocol. A request has a method, target and headers; a response has a status code, headers and optional body. HTTPS protects HTTP with TLS.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "A browser can send GET /index.html with a Host header and receive a 200 response with the page body."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Exchange requests with HTTP · Discover: Which HTTP method is conventionally used to retrieve a representation without asking the server to change it? Which networking rule determines the result?",
        "options": [
          "GET",
          "POST",
          "CONNECT for every page request"
        ],
        "answer": 0,
        "explanation": "GET. Identify the application task and client/server roles."
      },
      {
        "type": "match",
        "prompt": "Exchange requests with HTTP · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Application protocol",
            "A rule for messages exchanged by networked programs."
          ],
          [
            "Client",
            "The program that initiates a request for a service."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Exchange requests with HTTP · Discover: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Exchange requests with HTTP · Discover: which statement is accurate for exchange requests with http?",
        "options": [
          "GET",
          "POST",
          "CONNECT for every page request"
        ],
        "answer": 0,
        "explanation": "GET. HTTP is an application-layer request/response protocol. A request has a method, target and headers; a response has a status code, headers and optional body. HTTPS protects HTTP with TLS."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "apps",
      "mode": "http",
      "lecture": 42
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "HTTP is an application-layer request/response protocol. A request has a method, target and headers; a response has a status code, headers and optional body. HTTPS protects HTTP with TLS.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 0,
        "end": 27.03,
        "text": " One most important protocol that we use at application layer is HTTP Why I am saying this is most important because this protocol we use to get web pages to fetch web pages Server of this protocol listen at the port number 80 and this protocol uses the services of TCP Now there are two versions of this protocol one is HTTP 1.0 which uses the non-persistence connection So I will tell you in the detail what is non-persistence connection"
      },
      {
        "start": 47.6,
        "end": 76.9,
        "text": " like for every web page or for every object, you will be establishing a TCP connection separately. So as it is written here, in a non persistence connection at one TCP connection, one TCP connection is made for each request and response. The following list is in the steps is getting applied in this strategy. So first step is that the client opens a TCP connection. Second step is that the server sends the response and closes the connection. So this is important. Like after one request is served,"
      }
    ],
    "start": 126
  },
  {
    "id": 127,
    "lecture": 42,
    "title": "Exchange requests with HTTP · Explore",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. HTTP is an application-layer request/response protocol. A request has a method, target and headers; a response has a status code, headers and optional body. HTTPS protects HTTP with TLS.",
    "teachingSteps": [
      "Explore: Follow the request, lookup, transfer or response sequence.",
      "HTTP is an application-layer request/response protocol. A request has a method, target and headers; a response has a status code, headers and optional body. HTTPS protects HTTP with TLS.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "foundation": {
      "title": "Exchange requests with HTTP",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. HTTP is an application-layer request/response protocol. A request has a method, target and headers; a response has a status code, headers and optional body. HTTPS protects HTTP with TLS.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "A browser can send GET /index.html with a Host header and receive a 200 response with the page body."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Exchange requests with HTTP · Explore: Which HTTP method is conventionally used to retrieve a representation without asking the server to change it? Which step should the host or router take next?",
        "options": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "answer": 1,
        "explanation": "Send the protocol request or command. Follow the request, lookup, transfer or response sequence."
      },
      {
        "type": "match",
        "prompt": "Exchange requests with HTTP · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Client",
            "The program that initiates a request for a service."
          ],
          [
            "Server",
            "The program that listens for requests and returns a response."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Exchange requests with HTTP · Explore: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Exchange requests with HTTP · Explore: which statement is accurate for exchange requests with http?",
        "options": [
          "GET",
          "POST",
          "CONNECT for every page request"
        ],
        "answer": 0,
        "explanation": "GET. HTTP is an application-layer request/response protocol. A request has a method, target and headers; a response has a status code, headers and optional body. HTTPS protects HTTP with TLS."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "apps",
      "mode": "http",
      "lecture": 42
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "HTTP is an application-layer request/response protocol. A request has a method, target and headers; a response has a status code, headers and optional body. HTTPS protects HTTP with TLS.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 0,
        "end": 27.03,
        "text": " One most important protocol that we use at application layer is HTTP Why I am saying this is most important because this protocol we use to get web pages to fetch web pages Server of this protocol listen at the port number 80 and this protocol uses the services of TCP Now there are two versions of this protocol one is HTTP 1.0 which uses the non-persistence connection So I will tell you in the detail what is non-persistence connection"
      },
      {
        "start": 47.6,
        "end": 76.9,
        "text": " like for every web page or for every object, you will be establishing a TCP connection separately. So as it is written here, in a non persistence connection at one TCP connection, one TCP connection is made for each request and response. The following list is in the steps is getting applied in this strategy. So first step is that the client opens a TCP connection. Second step is that the server sends the response and closes the connection. So this is important. Like after one request is served,"
      }
    ],
    "start": 127
  },
  {
    "id": 128,
    "lecture": 42,
    "title": "Exchange requests with HTTP · Apply",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. HTTP is an application-layer request/response protocol. A request has a method, target and headers; a response has a status code, headers and optional body. HTTPS protects HTTP with TLS.",
    "teachingSteps": [
      "Apply: Distinguish the application protocol from the transport and network beneath it.",
      "HTTP is an application-layer request/response protocol. A request has a method, target and headers; a response has a status code, headers and optional body. HTTPS protects HTTP with TLS.",
      "Identify the application task and client/server roles."
    ],
    "foundation": {
      "title": "Exchange requests with HTTP",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. HTTP is an application-layer request/response protocol. A request has a method, target and headers; a response has a status code, headers and optional body. HTTPS protects HTTP with TLS.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "A browser can send GET /index.html with a Host header and receive a 200 response with the page body."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Exchange requests with HTTP · Apply: A new case changes one condition: Which HTTP method is conventionally used to retrieve a representation without asking the server to change it? Which conclusion still follows?",
        "options": [
          "POST",
          "CONNECT for every page request",
          "GET"
        ],
        "answer": 2,
        "explanation": "GET. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "match",
        "prompt": "Exchange requests with HTTP · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Server",
            "The program that listens for requests and returns a response."
          ],
          [
            "Application protocol",
            "A rule for messages exchanged by networked programs."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Exchange requests with HTTP · Apply: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Exchange requests with HTTP · Apply: which statement is accurate for exchange requests with http?",
        "options": [
          "GET",
          "POST",
          "CONNECT for every page request"
        ],
        "answer": 0,
        "explanation": "GET. HTTP is an application-layer request/response protocol. A request has a method, target and headers; a response has a status code, headers and optional body. HTTPS protects HTTP with TLS."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "apps",
      "mode": "http",
      "lecture": 42
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "HTTP is an application-layer request/response protocol. A request has a method, target and headers; a response has a status code, headers and optional body. HTTPS protects HTTP with TLS.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 0,
        "end": 27.03,
        "text": " One most important protocol that we use at application layer is HTTP Why I am saying this is most important because this protocol we use to get web pages to fetch web pages Server of this protocol listen at the port number 80 and this protocol uses the services of TCP Now there are two versions of this protocol one is HTTP 1.0 which uses the non-persistence connection So I will tell you in the detail what is non-persistence connection"
      },
      {
        "start": 47.6,
        "end": 76.9,
        "text": " like for every web page or for every object, you will be establishing a TCP connection separately. So as it is written here, in a non persistence connection at one TCP connection, one TCP connection is made for each request and response. The following list is in the steps is getting applied in this strategy. So first step is that the client opens a TCP connection. Second step is that the server sends the response and closes the connection. So this is important. Like after one request is served,"
      }
    ],
    "start": 128
  },
  {
    "id": 129,
    "lecture": 43,
    "title": "Resolve names with DNS · Discover",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. DNS maps names to records through a hierarchy of resolvers and authoritative servers. A recursive resolver can cache answers for their TTL; DNS names and IP addresses serve different roles.",
    "teachingSteps": [
      "Discover: Identify the application task and client/server roles.",
      "DNS maps names to records through a hierarchy of resolvers and authoritative servers. A recursive resolver can cache answers for their TTL; DNS names and IP addresses serve different roles.",
      "Follow the request, lookup, transfer or response sequence."
    ],
    "foundation": {
      "title": "Resolve names with DNS",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. DNS maps names to records through a hierarchy of resolvers and authoritative servers. A recursive resolver can cache answers for their TTL; DNS names and IP addresses serve different roles.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "A resolver may query root, a top-level-domain server, then the domain’s authoritative server to obtain an A or AAAA record."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Resolve names with DNS · Discover: What does a DNS TTL primarily tell a cache? Which networking rule determines the result?",
        "options": [
          "The network-layer packet size",
          "How long the record may be cached before it should be refreshed",
          "How many TCP retransmissions are allowed"
        ],
        "answer": 1,
        "explanation": "How long the record may be cached before it should be refreshed. Identify the application task and client/server roles."
      },
      {
        "type": "match",
        "prompt": "Resolve names with DNS · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Application protocol",
            "A rule for messages exchanged by networked programs."
          ],
          [
            "Client",
            "The program that initiates a request for a service."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Resolve names with DNS · Discover: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Resolve names with DNS · Discover: which statement is accurate for resolve names with dns?",
        "options": [
          "How long the record may be cached before it should be refreshed",
          "The network-layer packet size",
          "How many TCP retransmissions are allowed"
        ],
        "answer": 0,
        "explanation": "How long the record may be cached before it should be refreshed. DNS maps names to records through a hierarchy of resolvers and authoritative servers. A recursive resolver can cache answers for their TTL; DNS names and IP addresses serve different roles."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "apps",
      "mode": "dns",
      "lecture": 43
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "DNS maps names to records through a hierarchy of resolvers and authoritative servers. A recursive resolver can cache answers for their TTL; DNS names and IP addresses serve different roles.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 371.69,
        "end": 392.46,
        "text": " and I have listed most of the services that DNS provides. Now let's look at a working example and how the hierarchy of these servers are structured in the Internet. So if you see this diagram, then you will notice that there are different servers, Aero, Com, EDU, Com,"
      },
      {
        "start": 555.48,
        "end": 589.18,
        "text": " which means let's suppose it is having AeroCom these names are there with these are associated with every DNS server but for this root DNS server there is no name so this is just null string or empty string you can say so root DNS server is the one who is sitting on the top and there are total 30 root DNS servers and top-level domain servers are just below the root DNS server"
      }
    ],
    "start": 129
  },
  {
    "id": 130,
    "lecture": 43,
    "title": "Resolve names with DNS · Explore",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. DNS maps names to records through a hierarchy of resolvers and authoritative servers. A recursive resolver can cache answers for their TTL; DNS names and IP addresses serve different roles.",
    "teachingSteps": [
      "Explore: Follow the request, lookup, transfer or response sequence.",
      "DNS maps names to records through a hierarchy of resolvers and authoritative servers. A recursive resolver can cache answers for their TTL; DNS names and IP addresses serve different roles.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "foundation": {
      "title": "Resolve names with DNS",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. DNS maps names to records through a hierarchy of resolvers and authoritative servers. A recursive resolver can cache answers for their TTL; DNS names and IP addresses serve different roles.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "A resolver may query root, a top-level-domain server, then the domain’s authoritative server to obtain an A or AAAA record."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Resolve names with DNS · Explore: What does a DNS TTL primarily tell a cache? Which step should the host or router take next?",
        "options": [
          "Choose the application service and its endpoint",
          "Read the response and follow-up action",
          "Send the protocol request or command"
        ],
        "answer": 2,
        "explanation": "Send the protocol request or command. Follow the request, lookup, transfer or response sequence."
      },
      {
        "type": "match",
        "prompt": "Resolve names with DNS · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Client",
            "The program that initiates a request for a service."
          ],
          [
            "Server",
            "The program that listens for requests and returns a response."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Resolve names with DNS · Explore: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Resolve names with DNS · Explore: which statement is accurate for resolve names with dns?",
        "options": [
          "How long the record may be cached before it should be refreshed",
          "The network-layer packet size",
          "How many TCP retransmissions are allowed"
        ],
        "answer": 0,
        "explanation": "How long the record may be cached before it should be refreshed. DNS maps names to records through a hierarchy of resolvers and authoritative servers. A recursive resolver can cache answers for their TTL; DNS names and IP addresses serve different roles."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "apps",
      "mode": "dns",
      "lecture": 43
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "DNS maps names to records through a hierarchy of resolvers and authoritative servers. A recursive resolver can cache answers for their TTL; DNS names and IP addresses serve different roles.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 371.69,
        "end": 392.46,
        "text": " and I have listed most of the services that DNS provides. Now let's look at a working example and how the hierarchy of these servers are structured in the Internet. So if you see this diagram, then you will notice that there are different servers, Aero, Com, EDU, Com,"
      },
      {
        "start": 555.48,
        "end": 589.18,
        "text": " which means let's suppose it is having AeroCom these names are there with these are associated with every DNS server but for this root DNS server there is no name so this is just null string or empty string you can say so root DNS server is the one who is sitting on the top and there are total 30 root DNS servers and top-level domain servers are just below the root DNS server"
      }
    ],
    "start": 130
  },
  {
    "id": 131,
    "lecture": 43,
    "title": "Resolve names with DNS · Apply",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. DNS maps names to records through a hierarchy of resolvers and authoritative servers. A recursive resolver can cache answers for their TTL; DNS names and IP addresses serve different roles.",
    "teachingSteps": [
      "Apply: Distinguish the application protocol from the transport and network beneath it.",
      "DNS maps names to records through a hierarchy of resolvers and authoritative servers. A recursive resolver can cache answers for their TTL; DNS names and IP addresses serve different roles.",
      "Identify the application task and client/server roles."
    ],
    "foundation": {
      "title": "Resolve names with DNS",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. DNS maps names to records through a hierarchy of resolvers and authoritative servers. A recursive resolver can cache answers for their TTL; DNS names and IP addresses serve different roles.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "A resolver may query root, a top-level-domain server, then the domain’s authoritative server to obtain an A or AAAA record."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Resolve names with DNS · Apply: A new case changes one condition: What does a DNS TTL primarily tell a cache? Which conclusion still follows?",
        "options": [
          "How long the record may be cached before it should be refreshed",
          "The network-layer packet size",
          "How many TCP retransmissions are allowed"
        ],
        "answer": 0,
        "explanation": "How long the record may be cached before it should be refreshed. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "match",
        "prompt": "Resolve names with DNS · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Server",
            "The program that listens for requests and returns a response."
          ],
          [
            "Application protocol",
            "A rule for messages exchanged by networked programs."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Resolve names with DNS · Apply: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Resolve names with DNS · Apply: which statement is accurate for resolve names with dns?",
        "options": [
          "How long the record may be cached before it should be refreshed",
          "The network-layer packet size",
          "How many TCP retransmissions are allowed"
        ],
        "answer": 0,
        "explanation": "How long the record may be cached before it should be refreshed. DNS maps names to records through a hierarchy of resolvers and authoritative servers. A recursive resolver can cache answers for their TTL; DNS names and IP addresses serve different roles."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "apps",
      "mode": "dns",
      "lecture": 43
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "DNS maps names to records through a hierarchy of resolvers and authoritative servers. A recursive resolver can cache answers for their TTL; DNS names and IP addresses serve different roles.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 371.69,
        "end": 392.46,
        "text": " and I have listed most of the services that DNS provides. Now let's look at a working example and how the hierarchy of these servers are structured in the Internet. So if you see this diagram, then you will notice that there are different servers, Aero, Com, EDU, Com,"
      },
      {
        "start": 555.48,
        "end": 589.18,
        "text": " which means let's suppose it is having AeroCom these names are there with these are associated with every DNS server but for this root DNS server there is no name so this is just null string or empty string you can say so root DNS server is the one who is sitting on the top and there are total 30 root DNS servers and top-level domain servers are just below the root DNS server"
      }
    ],
    "start": 131
  },
  {
    "id": 132,
    "lecture": 44,
    "title": "Send and retrieve email with SMTP and POP3 · Discover",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. SMTP transfers outgoing mail between clients and mail servers and between servers. POP3 lets a client retrieve messages from a mailbox; IMAP is another retrieval protocol that keeps server-side folders synchronized.",
    "teachingSteps": [
      "Discover: Identify the application task and client/server roles.",
      "SMTP transfers outgoing mail between clients and mail servers and between servers. POP3 lets a client retrieve messages from a mailbox; IMAP is another retrieval protocol that keeps server-side folders synchronized.",
      "Follow the request, lookup, transfer or response sequence."
    ],
    "foundation": {
      "title": "Send and retrieve email with SMTP and POP3",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. SMTP transfers outgoing mail between clients and mail servers and between servers. POP3 lets a client retrieve messages from a mailbox; IMAP is another retrieval protocol that keeps server-side folders synchronized.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "A mail client submits outgoing mail with SMTP, while a recipient may download messages using POP3."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Send and retrieve email with SMTP and POP3 · Discover: Which protocol is primarily used to submit or relay outgoing email? Which networking rule determines the result?",
        "options": [
          "POP3",
          "ARP",
          "SMTP"
        ],
        "answer": 2,
        "explanation": "SMTP. Identify the application task and client/server roles."
      },
      {
        "type": "match",
        "prompt": "Send and retrieve email with SMTP and POP3 · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Application protocol",
            "A rule for messages exchanged by networked programs."
          ],
          [
            "Client",
            "The program that initiates a request for a service."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Send and retrieve email with SMTP and POP3 · Discover: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Send and retrieve email with SMTP and POP3 · Discover: which statement is accurate for send and retrieve email with smtp and pop3?",
        "options": [
          "SMTP",
          "POP3",
          "ARP"
        ],
        "answer": 0,
        "explanation": "SMTP. SMTP transfers outgoing mail between clients and mail servers and between servers. POP3 lets a client retrieve messages from a mailbox; IMAP is another retrieval protocol that keeps server-side folders synchronized."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "apps",
      "mode": "apps",
      "lecture": 44
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "SMTP transfers outgoing mail between clients and mail servers and between servers. POP3 lets a client retrieve messages from a mailbox; IMAP is another retrieval protocol that keeps server-side folders synchronized.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 634.68,
        "end": 663.63,
        "text": " Ally's mail server will send a DNS request to have an IP address of Bob's mail server and then once it gets the IP address of Bob's mail server using the DNS then in the fourth step it will send the mail to Bob's mail server then this mail will get will get retrieved from the Bob's one of the machine in the step 5 so this is how it is happening now if I go into little more detail then there are some protocols one is SMTP and one is POP3"
      },
      {
        "start": 782.78,
        "end": 812.86,
        "text": " and at the third place we use either pop3 or imap so generally we use imap smtp stands for simple mail transfer protocol and it uses the TCP for the reliable transfer email connections which means if you want to send this mail using the smtp to this mail server then first you need to establish the TCP connection between these two so first TCP connection will get established and then it sends the message which means the data transfer happens after the TCP connection"
      }
    ],
    "start": 132
  },
  {
    "id": 133,
    "lecture": 44,
    "title": "Send and retrieve email with SMTP and POP3 · Explore",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. SMTP transfers outgoing mail between clients and mail servers and between servers. POP3 lets a client retrieve messages from a mailbox; IMAP is another retrieval protocol that keeps server-side folders synchronized.",
    "teachingSteps": [
      "Explore: Follow the request, lookup, transfer or response sequence.",
      "SMTP transfers outgoing mail between clients and mail servers and between servers. POP3 lets a client retrieve messages from a mailbox; IMAP is another retrieval protocol that keeps server-side folders synchronized.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "foundation": {
      "title": "Send and retrieve email with SMTP and POP3",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. SMTP transfers outgoing mail between clients and mail servers and between servers. POP3 lets a client retrieve messages from a mailbox; IMAP is another retrieval protocol that keeps server-side folders synchronized.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "A mail client submits outgoing mail with SMTP, while a recipient may download messages using POP3."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Send and retrieve email with SMTP and POP3 · Explore: Which protocol is primarily used to submit or relay outgoing email? Which step should the host or router take next?",
        "options": [
          "Send the protocol request or command",
          "Choose the application service and its endpoint",
          "Read the response and follow-up action"
        ],
        "answer": 0,
        "explanation": "Send the protocol request or command. Follow the request, lookup, transfer or response sequence."
      },
      {
        "type": "match",
        "prompt": "Send and retrieve email with SMTP and POP3 · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Client",
            "The program that initiates a request for a service."
          ],
          [
            "Server",
            "The program that listens for requests and returns a response."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Send and retrieve email with SMTP and POP3 · Explore: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Send and retrieve email with SMTP and POP3 · Explore: which statement is accurate for send and retrieve email with smtp and pop3?",
        "options": [
          "SMTP",
          "POP3",
          "ARP"
        ],
        "answer": 0,
        "explanation": "SMTP. SMTP transfers outgoing mail between clients and mail servers and between servers. POP3 lets a client retrieve messages from a mailbox; IMAP is another retrieval protocol that keeps server-side folders synchronized."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "apps",
      "mode": "apps",
      "lecture": 44
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "SMTP transfers outgoing mail between clients and mail servers and between servers. POP3 lets a client retrieve messages from a mailbox; IMAP is another retrieval protocol that keeps server-side folders synchronized.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 634.68,
        "end": 663.63,
        "text": " Ally's mail server will send a DNS request to have an IP address of Bob's mail server and then once it gets the IP address of Bob's mail server using the DNS then in the fourth step it will send the mail to Bob's mail server then this mail will get will get retrieved from the Bob's one of the machine in the step 5 so this is how it is happening now if I go into little more detail then there are some protocols one is SMTP and one is POP3"
      },
      {
        "start": 782.78,
        "end": 812.86,
        "text": " and at the third place we use either pop3 or imap so generally we use imap smtp stands for simple mail transfer protocol and it uses the TCP for the reliable transfer email connections which means if you want to send this mail using the smtp to this mail server then first you need to establish the TCP connection between these two so first TCP connection will get established and then it sends the message which means the data transfer happens after the TCP connection"
      }
    ],
    "start": 133
  },
  {
    "id": 134,
    "lecture": 44,
    "title": "Send and retrieve email with SMTP and POP3 · Apply",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. SMTP transfers outgoing mail between clients and mail servers and between servers. POP3 lets a client retrieve messages from a mailbox; IMAP is another retrieval protocol that keeps server-side folders synchronized.",
    "teachingSteps": [
      "Apply: Distinguish the application protocol from the transport and network beneath it.",
      "SMTP transfers outgoing mail between clients and mail servers and between servers. POP3 lets a client retrieve messages from a mailbox; IMAP is another retrieval protocol that keeps server-side folders synchronized.",
      "Identify the application task and client/server roles."
    ],
    "foundation": {
      "title": "Send and retrieve email with SMTP and POP3",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. SMTP transfers outgoing mail between clients and mail servers and between servers. POP3 lets a client retrieve messages from a mailbox; IMAP is another retrieval protocol that keeps server-side folders synchronized.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "A mail client submits outgoing mail with SMTP, while a recipient may download messages using POP3."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Send and retrieve email with SMTP and POP3 · Apply: A new case changes one condition: Which protocol is primarily used to submit or relay outgoing email? Which conclusion still follows?",
        "options": [
          "POP3",
          "SMTP",
          "ARP"
        ],
        "answer": 1,
        "explanation": "SMTP. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "match",
        "prompt": "Send and retrieve email with SMTP and POP3 · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Server",
            "The program that listens for requests and returns a response."
          ],
          [
            "Application protocol",
            "A rule for messages exchanged by networked programs."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Send and retrieve email with SMTP and POP3 · Apply: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Send and retrieve email with SMTP and POP3 · Apply: which statement is accurate for send and retrieve email with smtp and pop3?",
        "options": [
          "SMTP",
          "POP3",
          "ARP"
        ],
        "answer": 0,
        "explanation": "SMTP. SMTP transfers outgoing mail between clients and mail servers and between servers. POP3 lets a client retrieve messages from a mailbox; IMAP is another retrieval protocol that keeps server-side folders synchronized."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "apps",
      "mode": "apps",
      "lecture": 44
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "SMTP transfers outgoing mail between clients and mail servers and between servers. POP3 lets a client retrieve messages from a mailbox; IMAP is another retrieval protocol that keeps server-side folders synchronized.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 634.68,
        "end": 663.63,
        "text": " Ally's mail server will send a DNS request to have an IP address of Bob's mail server and then once it gets the IP address of Bob's mail server using the DNS then in the fourth step it will send the mail to Bob's mail server then this mail will get will get retrieved from the Bob's one of the machine in the step 5 so this is how it is happening now if I go into little more detail then there are some protocols one is SMTP and one is POP3"
      },
      {
        "start": 782.78,
        "end": 812.86,
        "text": " and at the third place we use either pop3 or imap so generally we use imap smtp stands for simple mail transfer protocol and it uses the TCP for the reliable transfer email connections which means if you want to send this mail using the smtp to this mail server then first you need to establish the TCP connection between these two so first TCP connection will get established and then it sends the message which means the data transfer happens after the TCP connection"
      }
    ],
    "start": 134
  },
  {
    "id": 135,
    "lecture": 45,
    "title": "Transfer files with FTP · Discover",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. Traditional FTP uses a control connection for commands and a separate data connection for file listings and file contents. Active and passive modes differ in which side initiates the data connection.",
    "teachingSteps": [
      "Discover: Identify the application task and client/server roles.",
      "Traditional FTP uses a control connection for commands and a separate data connection for file listings and file contents. Active and passive modes differ in which side initiates the data connection.",
      "Follow the request, lookup, transfer or response sequence."
    ],
    "foundation": {
      "title": "Transfer files with FTP",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. Traditional FTP uses a control connection for commands and a separate data connection for file listings and file contents. Active and passive modes differ in which side initiates the data connection.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "A client can keep the FTP control session open while opening a data connection to retrieve a file; plain FTP does not encrypt credentials."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Transfer files with FTP · Discover: In traditional FTP, what is the role of the control connection? Which networking rule determines the result?",
        "options": [
          "Carry commands and replies separately from file data",
          "Carry only DNS lookups",
          "Encrypt all traffic automatically"
        ],
        "answer": 0,
        "explanation": "Carry commands and replies separately from file data. Identify the application task and client/server roles."
      },
      {
        "type": "match",
        "prompt": "Transfer files with FTP · Discover: match the network terms to their roles.",
        "pairs": [
          [
            "Application protocol",
            "A rule for messages exchanged by networked programs."
          ],
          [
            "Client",
            "The program that initiates a request for a service."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Transfer files with FTP · Discover: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Transfer files with FTP · Discover: which statement is accurate for transfer files with ftp?",
        "options": [
          "Carry commands and replies separately from file data",
          "Carry only DNS lookups",
          "Encrypt all traffic automatically"
        ],
        "answer": 0,
        "explanation": "Carry commands and replies separately from file data. Traditional FTP uses a control connection for commands and a separate data connection for file listings and file contents. Active and passive modes differ in which side initiates the data connection."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "apps",
      "mode": "ftp",
      "lecture": 45
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "Traditional FTP uses a control connection for commands and a separate data connection for file listings and file contents. Active and passive modes differ in which side initiates the data connection.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 184.39,
        "end": 205.71,
        "text": " control connection or control channel and this is the data connection or data channel. So the difference between active mode and passive mode is that in active mode server will initiate the data connection anyway the client has to initiate the control connection in both of the modes but in active mode server will initiate the data connection and then the file transfer will happen. Then this will be the file transfer. Once one file got transferred the connection will be closed."
      },
      {
        "start": 320.43,
        "end": 348.27,
        "text": " I will be initiating the data connection. And then once the server tells the port number, the client will initiate the data connection. Earlier what was happening, server was initiating the data connection. That is the only difference. So there are two modes in which we can transfer the file in the FTP. This is very simple protocol. If you want, you can read this paragraph. I think this paragraph is regarding active connection, active mode. You can just verify whether it is active mode or passi"
      }
    ],
    "start": 135
  },
  {
    "id": 136,
    "lecture": 45,
    "title": "Transfer files with FTP · Explore",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. Traditional FTP uses a control connection for commands and a separate data connection for file listings and file contents. Active and passive modes differ in which side initiates the data connection.",
    "teachingSteps": [
      "Explore: Follow the request, lookup, transfer or response sequence.",
      "Traditional FTP uses a control connection for commands and a separate data connection for file listings and file contents. Active and passive modes differ in which side initiates the data connection.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "foundation": {
      "title": "Transfer files with FTP",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. Traditional FTP uses a control connection for commands and a separate data connection for file listings and file contents. Active and passive modes differ in which side initiates the data connection.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "A client can keep the FTP control session open while opening a data connection to retrieve a file; plain FTP does not encrypt credentials."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Transfer files with FTP · Explore: In traditional FTP, what is the role of the control connection? Which step should the host or router take next?",
        "options": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "answer": 1,
        "explanation": "Send the protocol request or command. Follow the request, lookup, transfer or response sequence."
      },
      {
        "type": "match",
        "prompt": "Transfer files with FTP · Explore: match the network terms to their roles.",
        "pairs": [
          [
            "Client",
            "The program that initiates a request for a service."
          ],
          [
            "Server",
            "The program that listens for requests and returns a response."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Transfer files with FTP · Explore: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Transfer files with FTP · Explore: which statement is accurate for transfer files with ftp?",
        "options": [
          "Carry commands and replies separately from file data",
          "Carry only DNS lookups",
          "Encrypt all traffic automatically"
        ],
        "answer": 0,
        "explanation": "Carry commands and replies separately from file data. Traditional FTP uses a control connection for commands and a separate data connection for file listings and file contents. Active and passive modes differ in which side initiates the data connection."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "apps",
      "mode": "ftp",
      "lecture": 45
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "Traditional FTP uses a control connection for commands and a separate data connection for file listings and file contents. Active and passive modes differ in which side initiates the data connection.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 184.39,
        "end": 205.71,
        "text": " control connection or control channel and this is the data connection or data channel. So the difference between active mode and passive mode is that in active mode server will initiate the data connection anyway the client has to initiate the control connection in both of the modes but in active mode server will initiate the data connection and then the file transfer will happen. Then this will be the file transfer. Once one file got transferred the connection will be closed."
      },
      {
        "start": 320.43,
        "end": 348.27,
        "text": " I will be initiating the data connection. And then once the server tells the port number, the client will initiate the data connection. Earlier what was happening, server was initiating the data connection. That is the only difference. So there are two modes in which we can transfer the file in the FTP. This is very simple protocol. If you want, you can read this paragraph. I think this paragraph is regarding active connection, active mode. You can just verify whether it is active mode or passi"
      }
    ],
    "start": 136
  },
  {
    "id": 137,
    "lecture": 45,
    "title": "Transfer files with FTP · Apply",
    "concept": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. Traditional FTP uses a control connection for commands and a separate data connection for file listings and file contents. Active and passive modes differ in which side initiates the data connection.",
    "teachingSteps": [
      "Apply: Distinguish the application protocol from the transport and network beneath it.",
      "Traditional FTP uses a control connection for commands and a separate data connection for file listings and file contents. Active and passive modes differ in which side initiates the data connection.",
      "Identify the application task and client/server roles."
    ],
    "foundation": {
      "title": "Transfer files with FTP",
      "idea": "Application protocols define messages and exchanges that software uses over a network. HTTP retrieves resources, DNS resolves names, mail protocols transfer messages, and FTP organizes file transfers. Traditional FTP uses a control connection for commands and a separate data connection for file listings and file contents. Active and passive modes differ in which side initiates the data connection.",
      "terms": [
        "Application protocol: A rule for messages exchanged by networked programs.",
        "Client: The program that initiates a request for a service.",
        "Server: The program that listens for requests and returns a response."
      ],
      "example": "A client can keep the FTP control session open while opening a data connection to retrieve a file; plain FTP does not encrypt credentials."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Transfer files with FTP · Apply: A new case changes one condition: In traditional FTP, what is the role of the control connection? Which conclusion still follows?",
        "options": [
          "Carry only DNS lookups",
          "Encrypt all traffic automatically",
          "Carry commands and replies separately from file data"
        ],
        "answer": 2,
        "explanation": "Carry commands and replies separately from file data. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "match",
        "prompt": "Transfer files with FTP · Apply: match the network terms to their roles.",
        "pairs": [
          [
            "Server",
            "The program that listens for requests and returns a response."
          ],
          [
            "Application protocol",
            "A rule for messages exchanged by networked programs."
          ]
        ],
        "explanation": "Each term names a different role in the networking example."
      },
      {
        "type": "order",
        "prompt": "Transfer files with FTP · Apply: put the actions in a valid working sequence.",
        "items": [
          "Choose the application service and its endpoint",
          "Send the protocol request or command",
          "Read the response and follow-up action"
        ],
        "explanation": "Identify the application task and client/server roles. Follow the request, lookup, transfer or response sequence. Distinguish the application protocol from the transport and network beneath it."
      },
      {
        "type": "choice",
        "prompt": "Transfer files with FTP · Apply: which statement is accurate for transfer files with ftp?",
        "options": [
          "Carry commands and replies separately from file data",
          "Carry only DNS lookups",
          "Encrypt all traffic automatically"
        ],
        "answer": 0,
        "explanation": "Carry commands and replies separately from file data. Traditional FTP uses a control connection for commands and a separate data connection for file listings and file contents. Active and passive modes differ in which side initiates the data connection."
      }
    ],
    "minutes": 6,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "cnLab": {
      "kind": "apps",
      "mode": "ftp",
      "lecture": 45
    },
    "cnScene": [
      "Identify the application task and client/server roles.",
      "Traditional FTP uses a control connection for commands and a separate data connection for file listings and file contents. Active and passive modes differ in which side initiates the data connection.",
      "Distinguish the application protocol from the transport and network beneath it."
    ],
    "sourceReferences": [
      {
        "start": 184.39,
        "end": 205.71,
        "text": " control connection or control channel and this is the data connection or data channel. So the difference between active mode and passive mode is that in active mode server will initiate the data connection anyway the client has to initiate the control connection in both of the modes but in active mode server will initiate the data connection and then the file transfer will happen. Then this will be the file transfer. Once one file got transferred the connection will be closed."
      },
      {
        "start": 320.43,
        "end": 348.27,
        "text": " I will be initiating the data connection. And then once the server tells the port number, the client will initiate the data connection. Earlier what was happening, server was initiating the data connection. That is the only difference. So there are two modes in which we can transfer the file in the FTP. This is very simple protocol. If you want, you can read this paragraph. I think this paragraph is regarding active connection, active mode. You can just verify whether it is active mode or passi"
      }
    ],
    "start": 137
  }
];

import {attachTeachingNotes} from '../../../packages/learning/instructional-notes.js';
import {teachingNotes} from './teaching-notes.js';
attachTeachingNotes(lessons,teachingNotes,'cn');
