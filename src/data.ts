// ────────────────────────────────────────────────────────────────
// data.ts
// Everything you'll want to edit lives here: identity, skills,
// projects, Cloud badges and contact links. Change the values below
// ────────────────────────────────────────────────────────────────

export const profile = {
  name: "Carlos",
  role: "Systems Engineering Student",
  university: "UDLAP",
  location: "", // Optional public location; intentionally unset
  status: "Available for projects", // shown in the status badge
  email: "crdeveloper@proton.me", // Explicitly authorized professional contact
  github: "", // Add only an explicitly authorized professional profile
};

// Public contact URLs only. Leave empty until the owner supplies them.
export const TELEGRAM_URL = "https://t.me/cr0dev";
export const LINKEDIN_URL = "";

export const aboutText = [
  "I'm a Computer Systems Engineering student at UDLAP, building practical experience in cybersecurity, cloud infrastructure, Linux, networking and software engineering.",
  "My security learning began in virtualized labs: building infrastructure, configuring network topology, connectivity and services, observing their behavior, running controlled attacks, and then rebuilding or securing the environment. This practice connects TCP/IP, ICMP, DNS, ARP and routing with network scanning, packet analysis, IDS, traffic inspection, attack surface analysis and MITM experiments in isolated, authorized environments.",
  "Through C coursework and experiments, I've explored memory management, pointers, data representation and low-level program behavior, including introductory reverse engineering and memory analysis concepts. I want to understand what happens beneath the tools and why they work.",
  "My traffic-analysis work uses Python, Scapy, packet feature extraction and explainable detection rules. Separately, I study machine learning and experiment with computer vision and image processing using SciPy and Pillow. I am exploring DevSecOps by connecting security considerations with infrastructure and delivery workflows.",
  "My academic foundation includes data structures, algorithms, complexity, optimization, algebra applied to computational problems and machine learning. I complement university study with Google Cloud labs and Hack The Box practice, using each exercise to connect theory with observable behavior.",
];

export type SkillCategory = {
  id: string;
  label: string;
  promptTag: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages", label: "Languages", promptTag: "lang",
    items: ["Python", "C", "Java", "TypeScript", "JavaScript", "Bash"],
  },
  {
    id: "security", label: "Cybersecurity Tools", promptTag: "sec",
    items: ["Nmap", "Snort", "Wireshark", "Scapy", "Ettercap", "tcpdump", "hping3", "Linux Hardening", "OSINT"],
  },
  {
    id: "networking", label: "Networking Foundations", promptTag: "net",
    items: ["TCP/IP", "ICMP", "DNS", "ARP", "Routing", "Packet Analysis"],
  },
  {
    id: "infrastructure", label: "Cloud & Infrastructure", promptTag: "cloud",
    items: ["Google Cloud", "Linux", "Kali Linux", "Ubuntu", "VirtualBox", "Cisco Packet Tracer"],
  },
  {
    id: "relational-data", label: "Relational Databases", promptTag: "sql",
    items: ["SQL", "SQLite", "PostgreSQL", "Google Cloud SQL", "Google Cloud Spanner"],
  },
  {
    id: "cloud-data", label: "Backend & Cloud Data Services", promptTag: "data",
    items: ["Supabase", "Firestore", "Google Cloud Bigtable"],
  },
  {
    id: "devops", label: "DevOps & Tools", promptTag: "ops",
    items: ["Docker", "Git", "GitHub", "CI/CD Foundations"],
  },
  {
    id: "web", label: "Web Frameworks & Libraries", promptTag: "web",
    items: ["React", "Vite", "Tailwind CSS", "HTML", "CSS", "Node.js"],
  },
  {
    id: "vision-ml", label: "Computer Vision & ML Foundations", promptTag: "cv/ml",
    items: ["NumPy", "pandas", "Matplotlib", "scikit-learn", "TensorFlow", "SciPy (scipy.ndimage)", "Pillow (PIL)", "Model Evaluation"],
  },
];

export type ProjectStatus = "Building" | "Stable" | "Learning project" | "Release candidate";

export type Project = {
  id: string;
  name: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  repoUrl?: string;
  demoUrl?: string;
  evidenceUrl?: string;
  details: string;
};

// Add repoUrl/demoUrl only once public; add evidenceUrl for the shared lab Drive.
export const projects: Project[] = [
  {
    id: "onca-alumnos",
    name: "ONCA",
    description:
      "Started from a real need at an MMA academy where I taught classes, then grew into a desktop application for students, payments, activities and certificate attachments.",
    stack: ["Python", "Tkinter / ttk", "SQLite"],
    status: "Release candidate",
    repoUrl: "https://github.com/flaco332/Onca",
    details: "A local desktop workflow with student records, payment tracking, activities and attendance, certificate attachments, and verified backups. It grew from a real academy context rather than an invented academic CRUD exercise. Small off-duty detail: I also practice Brazilian Jiu-Jitsu. The current candidate is under review, not a published production release.",
  },
  {
    id: "ai-packet-tracer",
    details: "Captures IPv4/ARP metadata with Scapy, extracts traffic features and evaluates SWI-Prolog rules for experimental scanning, flooding and periodic communication detection. Alerts include explanations and replayable evidence; CSV evaluation is a separate workflow. This is a defensive academic project, not a production IDS, and it does not train machine learning models.",
    name: "Packet Tracer Security",
    description:
      "Experimental defensive traffic analysis: packet metadata, feature extraction and explainable rule-based detection for controlled networking labs.",
    stack: ["Python", "Scapy", "SWI-Prolog", "Networking"],
    status: "Learning project",
    repoUrl: "https://github.com/flaco332/packet-tracer-security.git",
  },
  {
    id: "security-lab-evidence",
    details: "An evidence collection is being prepared to explain lab topology, attack scenarios, observed traffic, defensive changes and results. A shared Drive link will be added once the material is ready for public viewing.",
    name: "Security Lab Evidence",
    description:
      "Documenting controlled security labs, attacks and defenses to explain both the experiment and the reasoning behind each mitigation.",
    stack: ["Linux", "Networking", "Traffic Analysis", "Virtualized Labs"],
    status: "Building",
  },
  {
    id: "mini-grep",
    name: "Grep-C / Mini Grep",
    description: "A Unix-inspired filename search tool with a Textual terminal UI and CLI, built to connect algorithms and filesystem behavior with a practical application.",
    details: "The current implementation is Python, despite the repository name. It indexes a directory's immediate files and uses binary search for exact, case-sensitive filename lookup, showing path, size and modification time. It searches filenames, not file contents, and does not implement GNU grep semantics, regex matching or recursion.",
    stack: ["Python", "Textual", "CLI", "Binary Search"],
    status: "Learning project",
    repoUrl: "https://github.com/flaco332/grep-c",
  },
  {
    id: "portfolio",
    name: "Personal Portfolio",
    description: "A static portfolio that brings together projects, technical learning and verifiable credentials in a terminal-inspired interface.",
    details: "Built with reusable React components, typed content data and native anchors. Includes an animated terminal, a neofetch panel, accessible project details and official Credly embeds.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    status: "Stable",
  },
];

export const learningLog = [
  { id: "lab", label: "Virtualized security labs", note: "Network topology, services, controlled attacks, traffic inspection and environment hardening." },
  { id: "memory", label: "Low-level programming", note: "C, pointers, memory management, data representation and introductory memory analysis." },
  { id: "traffic", label: "Traffic analysis & detection", note: "Python, Scapy, packet features, rules and experimental ML approaches." },
  { id: "cloud", label: "Cloud infrastructure", note: "Google Cloud labs: networking, load balancing, CI/CD, app environments and ML APIs." },
  { id: "foundations", label: "Computing foundations", note: "Data structures, algorithms, complexity, optimization and applied algebra; continued university and Hack The Box practice." },
];

export type CredentialType = "Skill Badge" | "Certificate";

export type Credential = {
  title: string;
  issuer: string;
  type: CredentialType;
  issueDate?: string; // e.g. "May 2025" — leave unset until earned
  badgeId: string; // Public identifier, not a credential or secret
  imageFile: string; // Official, locally served square badge artwork
  credentialUrl: string; // Required public verification URL for each credential
};

export type CredentialTopic = {
  id: string;
  topic: string;
  description?: string;
  badges: Credential[];
};

// Public badge IDs supplied by the owner. Verification URLs are derived from these IDs.
export const credentialTopics: CredentialTopic[] = [
  {
    id: "cloud-foundations",
    topic: "Cloud Foundations",
    badges: [
      {
        title: "Google Cloud Computing Foundations Certificate",
        badgeId: "fc1c3608-d0c6-46e0-9145-178b38a9557b",
        imageFile: "cloud-foundations.png",
        credentialUrl: "https://www.credly.com/badges/fc1c3608-d0c6-46e0-9145-178b38a9557b/public_url",
        issuer: "Google Cloud",
        type: "Certificate",
      },
    ],
  },
  {
    id: "infrastructure-networking",
    topic: "Infrastructure & Networking",
    badges: [
      {
        title: "Build a Secure Google Cloud Network",
        badgeId: "8eba910e-fc59-4e48-b97e-d017d1b57f41",
        imageFile: "secure-network.png",
        credentialUrl: "https://www.credly.com/badges/8eba910e-fc59-4e48-b97e-d017d1b57f41/public_url",
        issuer: "Google Cloud",
        type: "Skill Badge",
      },
      {
        title: "Implement Load Balancing on Compute Engine",
        badgeId: "47d11aeb-ab77-429b-ad2c-b0d8dfae1e02",
        imageFile: "load-balancing.png",
        credentialUrl: "https://www.credly.com/badges/47d11aeb-ab77-429b-ad2c-b0d8dfae1e02/public_url",
        issuer: "Google Cloud",
        type: "Skill Badge",
      },
    ],
  },
  {
    id: "devops-app-development",
    topic: "DevOps & Application Development",
    badges: [
      {
        title: "Implement CI/CD Pipelines on Google Cloud",
        badgeId: "e3690752-69a9-40f7-9928-b606791d30a6",
        imageFile: "cicd-pipelines.png",
        credentialUrl: "https://www.credly.com/badges/e3690752-69a9-40f7-9928-b606791d30a6/public_url",
        issuer: "Google Cloud",
        type: "Skill Badge",
      },
      {
        title: "Set Up an App Dev Environment on Google Cloud",
        badgeId: "aea3f91c-510f-4cec-bc0c-1a261fc9e91d",
        imageFile: "app-environment.png",
        credentialUrl: "https://www.credly.com/badges/aea3f91c-510f-4cec-bc0c-1a261fc9e91d/public_url",
        issuer: "Google Cloud",
        type: "Skill Badge",
      },
    ],
  },
  {
    id: "data-machine-learning",
    topic: "Data & Machine Learning",
    badges: [
      {
        title: "Prepare Data for ML APIs on Google Cloud",
        badgeId: "861e382a-36b4-4e00-8cb9-6faf537a88f6",
        imageFile: "ml-data.png",
        credentialUrl: "https://www.credly.com/badges/861e382a-36b4-4e00-8cb9-6faf537a88f6/public_url",
        issuer: "Google Cloud",
        type: "Skill Badge",
      },
    ],
  },
];

// Powers the neofetch-style "whoami" panel in the About section.
export const systemInfo = [
  { key: "OS", value: "Determination-based, Linux-flavored" },
  { key: "Host", value: "UDLAP — Systems Engineering" },
  { key: "Shell", value: "bash + curiosity" },
  { key: "Uptime", value: "3 years learning, counting up" },
  { key: "Packages", value: `${skillCategories.length} skill categories, growing` },
  { key: "Status", value: profile.status },
];
