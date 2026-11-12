/**
 * All personal details live in this file.
 * Leave a string empty when a link or image is not ready yet.
 * The site renders an explicit placeholder instead of a broken link.
 *
 * Keep `seo.title` and `seo.description` aligned with the tags in index.html.
 */

export const site = {
  name: "Maduka Jayasinghe",
  givenName: "Maduka",
  familyName: "Jayasinghe",
  title: "Senior Systems Software Engineer",
  location: "Sri Lanka",
  availability: "Open to remote work and relocation",
  email: "jayasinghenimsara@gmail.com",
  phone: "+94 71 346 6099",
  phoneHref: "tel:+94713466099",
  linkedinUrl: "https://www.linkedin.com/in/maduka-jay",
  githubUrl: "",
  githubUsername: "",
  resumeUrl: `${import.meta.env.BASE_URL}Maduka-Jayasinghe-Resume.pdf`,
  /** Public path of a portrait, for example `${import.meta.env.BASE_URL}portrait.jpg`. Leave empty for the placeholder. */
  portrait: "",
  introduction:
    "I build software for network visibility and control, from C++ systems on Linux to the services and interfaces around them.",
  seo: {
    title: "Maduka Jayasinghe | Senior Systems Software Engineer",
    description:
      "Maduka Jayasinghe is a senior systems software engineer in Sri Lanka. He builds network monitoring, analytics, and management systems with C++, Linux, SNMP, Node.js, and React.",
  },
  footerBio:
    "Maduka Jayasinghe is a senior systems software engineer based in Sri Lanka. His work covers network monitoring, analytics, and management systems, following a degree in electronic and telecommunication engineering from the University of Moratuwa.",
} as const

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "technologies", label: "Technologies" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
] as const

export const about = {
  eyebrow: "About me",
  title: "Engineering for networks you can see and control",
  paragraphs: [
    "I am a senior systems software engineer with an honours degree in electronic and telecommunication engineering from the University of Moratuwa. For more than five years I have worked at Paraqum Technologies on software for network visibility, control, and management.",
    "The work sits close to the system: C and C++ on Linux, SNMP and multi-protocol discovery, and high-throughput packet processing. I also build the Node.js services and React interfaces in front of those systems, and I take on independent software when a business problem needs a direct technical solution.",
  ],
  traits: [
    {
      title: "Network visibility",
      text: "Monitoring, discovery, and telemetry across multi-vendor networks.",
    },
    {
      title: "Systems performance",
      text: "C and C++ on Linux, built for throughput and careful use of the machine.",
    },
    {
      title: "End-to-end delivery",
      text: "From protocol handling to APIs and the interfaces operators use.",
    },
  ],
} as const

export const skillGroups = [
  {
    title: "Programming",
    items: ["C", "C++", "JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    title: "Frontend",
    items: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Systems",
    items: ["Linux", "Networking", "SNMP", "DPDK", "Multi-threading"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "Jenkins"],
  },
] as const

export type ExperienceRole = {
  period: string
  title: string
  company: string
  location: string
  current: boolean
  summary: string
  points: string[]
  technologies: string[]
}

export const experience: ExperienceRole[] = [
  {
    period: "Apr. 2026 – Present",
    title: "Senior Systems Software Engineer II",
    company: "Paraqum Technologies",
    location: "Sri Lanka",
    current: true,
    summary: "Network monitoring, packet processing, and configuration management.",
    points: [
      "Direct product strategy and backend development for an enterprise network monitoring system in C++ and Node.js, integrating SNMP, WMI, SSH, and Telnet for real-time telemetry and device monitoring.",
      "Develop core C and C++ modules with DPDK for a deep packet inspection engine used by network analyzer and traffic shaper platforms.",
      "Design a network configuration management platform for provisioning and state management across multi-vendor networks.",
    ],
    technologies: ["C", "C++", "Node.js", "SNMP", "DPDK", "WMI", "SSH", "Telnet"],
  },
  {
    period: "May 2024 – Apr. 2026",
    title: "Senior Systems Software Engineer I",
    company: "Paraqum Technologies",
    location: "Sri Lanka",
    current: false,
    summary: "Device monitoring, discovery, and the Network Analyzer API.",
    points: [
      "Adapted an SNMP mapping module into a standalone device monitoring platform for real-time health and resource tracking.",
      "Implemented an automated device discovery engine in C++ supporting LLDP, CDP, and vendor-specific protocols.",
      "Directed the design and implementation of the Node.js API management system for the Paraqum Network Analyzer.",
    ],
    technologies: ["C++", "Node.js", "SNMP", "LLDP", "CDP"],
  },
  {
    period: "Jun. 2021 – May 2024",
    title: "Electronics Engineer / Associate Electronics Engineer",
    company: "Paraqum Technologies",
    location: "Sri Lanka",
    current: false,
    summary: "Bandwidth telemetry, packet processing, and reachability monitoring.",
    points: [
      "Developed an SNMP mapping module for the Paraqum WIDI platform, providing real-time bandwidth management and resource monitoring for wireless ISP customers.",
      "Developed C and C++ components for the deep packet inspection engine to support high-speed packet processing.",
      "Implemented device discovery and reachability monitoring with ICMP polling.",
    ],
    technologies: ["C", "C++", "SNMP", "ICMP"],
  },
  {
    period: "Jun. 2019 – Dec. 2019",
    title: "Trainee Electronics Engineer",
    company: "Paraqum Technologies",
    location: "Sri Lanka",
    current: false,
    summary: "Packet processing, video decoding, and hardware interfacing.",
    points: [
      "Engineered a multi-interface packet deduplicator in C++ that reached 8.6 Gbps for real-time session identification.",
      "Implemented weighted prediction in a C++ HEVC decoder.",
      "Designed a Verilog RTL wrapper for I2C communication with a clock multiplier module.",
    ],
    technologies: ["C++", "Verilog"],
  },
]

export const experienceIntro =
  "My career so far has been at Paraqum Technologies, from trainee work to senior systems engineering. I have also delivered technical training and deployment workshops for the product suite in Sri Lanka and Bangladesh."

export type Project = {
  title: string
  context: string
  summary: string
  points: string[]
  technologies: string[]
  githubUrl: string
  demoUrl: string
}

export const projects: Project[] = [
  {
    title: "SNMP-based Network Monitoring System",
    context: "Professional work · Paraqum Technologies",
    summary:
      "An enterprise network monitoring system for ISP and enterprise clients, built for real-time visibility of devices and traffic.",
    points: [
      "Architecture and backend development in C++ and Node.js.",
      "Telemetry and device monitoring over SNMP, WMI, SSH, and Telnet.",
    ],
    technologies: ["C++", "Node.js", "SNMP", "WMI", "SSH", "Telnet"],
    githubUrl: "",
    demoUrl: "",
  },
  {
    title: "Network Analytics and Virtual Network Analyzer",
    context: "Professional work · Paraqum Technologies",
    summary:
      "Analytics and packet-level visibility around the Paraqum Network Analyzer and related traffic platforms.",
    points: [
      "Node.js API management for the Paraqum Network Analyzer.",
      "C and C++ deep packet inspection modules using DPDK for network analyzer and traffic shaper platforms.",
    ],
    technologies: ["C", "C++", "DPDK", "Node.js"],
    githubUrl: "",
    demoUrl: "",
  },
  {
    title: "Network Management and Monitoring Tools",
    context: "Professional work · Paraqum Technologies",
    summary:
      "Tools for discovery, configuration, reachability, and bandwidth telemetry across monitoring platforms.",
    points: [
      "Network configuration management for provisioning and state across multi-vendor networks.",
      "Automated device discovery in C++ using LLDP, CDP, and vendor-specific protocols.",
      "ICMP reachability monitoring, and SNMP bandwidth telemetry for the Paraqum WIDI platform.",
    ],
    technologies: ["C++", "SNMP", "LLDP", "CDP", "ICMP"],
    githubUrl: "",
    demoUrl: "",
  },
  {
    title: "DNM Auto and Vehicle Tax Calculator",
    context: "Independent project",
    summary:
      "A website for DNM Auto, together with a vehicle tax calculator. Repository, live demo, and technology details are not linked yet.",
    points: [],
    technologies: [],
    githubUrl: "",
    demoUrl: "",
  },
]

export const education = {
  school: "University of Moratuwa",
  location: "Sri Lanka",
  credential: "B.Sc. Engineering (Hons)",
  major: "Electronic and Telecommunication Engineering",
  period: "2016 – 2021",
  notes: ["Academic standing: First Class", "Overall GPA: 3.72 / 4.20"],
} as const

export type SelectedRepository = {
  name: string
  description: string
  url: string
  language: string
}

/** Hand-picked repositories. Leave empty until real repository URLs are available. */
export const selectedRepositories: SelectedRepository[] = []
