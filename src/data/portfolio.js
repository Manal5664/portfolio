export const personalInfo = {
  name: "Manal Asghar",
  title: "Software Developer & Data Science Enthusiast",
  tagline:
    "Building practical software and intelligent, data-driven solutions using modern web and AI technologies.",
  email: "manal.atif2021@gmail.com",
  location: "Karachi, Pakistan",
  github: "https://github.com/Manal5664",
  linkedin: null,
  resumeUrl: "#",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const aboutContent = {
  intro:
    "Manal Asghar is a software developer and data science professional with a Software Engineering background, currently pursuing a Master's in Data Science.",
  paragraphs: [
    "I'm a Software Engineering graduate transitioning into Data Science and AI. My background in full-stack development gives me a strong foundation for building end-to-end applications, while my ongoing master's studies deepen my expertise in machine learning, deep learning, and applied AI.",
    "I'm passionate about creating practical, scalable solutions that combine modern web development with data-driven intelligence. From training models to building responsive interfaces, I enjoy working across the stack to turn ideas into real products.",
  ],
  highlights: [
    { label: "Focus", value: "Software Dev & Data Science" },
    { label: "Education", value: "MCS in Data Science" },
    { label: "Based in", value: "Karachi, Pakistan" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "VisionGuard AI",
    category: "AI-Powered Security / Computer Vision",
    description:
      "An AI-powered security monitoring system that detects people in images and videos, tracks movement, and identifies intrusions within user-defined security zones.",
    techStack: [
      "Python",
      "FastAPI",
      "React",
      "JavaScript",
      "PostgreSQL",
      "SQLAlchemy",
      "YOLO / Ultralytics",
      "ByteTrack",
      "OpenCV",
      "Docker",
      "Git / GitHub",
    ],
    featuredTechStack: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "YOLO / Ultralytics",
      "Docker",
    ],
    features: [
      "Person detection using YOLO with image and video detection APIs",
      "ByteTrack-based object tracking across video frames",
      "User-defined intrusion zones with automated event detection",
      "Deduplication of repeated intrusion alerts per tracked person",
      "React dashboard with zone management and event logging",
      "Dockerized setup with FastAPI backend and PostgreSQL persistence",
    ],
    githubUrl: "https://github.com/Manal5664/VisionGuard-AI",
    liveUrl: null,
    imageUrl: "/visionguard.PNG",
  },
  {
    id: 2,
    title: "EvidenceAI",
    category: "Agentic AI / RAG / Evidence Intelligence",
    description:
      "An evidence-grounded AI investigation platform that researches claims, retrieves sources, extracts supporting and contradicting evidence, detects conflicts, and produces provenance-aware synthesis.",
    techStack: [
      "Python 3.12",
      "FastAPI",
      "Pydantic",
      "Google Gemini",
      "RAG",
      "GraphRAG",
      "SQLAlchemy",
      "Alembic",
      "PostgreSQL",
      "Jinja2",
      "JavaScript",
      "Bootstrap",
      "Chart.js",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "Railway",
      "pytest",
    ],
    featuredTechStack: [
      "Python 3.12",
      "FastAPI",
      "Google Gemini",
      "RAG",
      "GraphRAG",
      "PostgreSQL",
    ],
    features: [
      "Agentic workflow: planner → research → evidence → critic → synthesis",
      "Supporting vs contradicting evidence detection with source provenance",
      "GraphRAG with entity and relation extraction",
      "Multi-format ingestion: PDF, DOCX, TXT, Markdown, and images",
      "Provider-neutral AI architecture with mock and Google Gemini adapters",
      "Browser-based workspace with PostgreSQL persistence via Alembic migrations",
    ],
    githubUrl: "https://github.com/Manal5664/AI-Investigation-Engine",
    liveUrl: "https://ai-investigation-engine-production.up.railway.app/dashboard",
    imageUrl: "/evidenceai.PNG",
  },
];

export const skillCategories = [
  {
    title: "Programming / Web",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "PHP",
      "Laravel",
      "C#",
      "WordPress",
    ],
  },
  {
    title: "Data Science / ML",
    skills: [
      "Python",
      "Data Cleaning",
      "Data Exploration",
      "Data Visualization",
      "Supervised Learning",
      "Unsupervised Learning",
      "R",
    ],
  },
  {
    title: "AI / Deep Learning",
    skills: [
      "PyTorch",
      "TensorFlow",
      "CNN",
      "RNN",
      "Generative AI",
      "LLMs",
      "Fine-Tuning",
      "LangChain",
      "RAG",
    ],
  },
  {
    title: "Libraries / Tools",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Hugging Face Transformers",
      "NLTK",
      "SpaCy",
      "BeautifulSoup",
    ],
  },
  {
    title: "Database / DevOps",
    skills: ["MySQL", "Docker", "GitHub"],
  },
  {
    title: "Data Formats",
    skills: ["XML", "JSON", "CSV"],
  },
];

export const experience = [
  {
    id: 1,
    role: "Faculty Member",
    company: "Aptech Learning",
    period: "Feb 2026 — Present",
    description:
      "Teaching software development including HTML, CSS, JavaScript, jQuery, Bootstrap, PHP, Laravel, MySQL, and WordPress. Mentoring students through practical development projects.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Laravel",
      "MySQL",
      "WordPress",
    ],
  },
  {
    id: 2,
    role: "Computer Teacher",
    company: "Metropolis Academy",
    period: "Aug 2022 — Jul 2025",
    description:
      "Delivered computer science curriculum and hands-on training to students across multiple grade levels.",
    technologies: [],
  },
  {
    id: 3,
    role: "Certificate of Information Technology (CIT) Instructor",
    company: "Diligens Academy",
    period: "Dec 2022 — Mar 2023",
    description:
      "Instructed students in core IT fundamentals as part of the CIT certification program.",
    technologies: [],
  },
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Science in Data Science",
    institution: "Muhammad Ali Jinnah University, Karachi",
    period: "Sep 2024 — Present",
    details: null,
  },
  {
    id: 2,
    degree: "Bachelor of Engineering in Software Engineering",
    institution: "Virtual University of Pakistan, Karachi",
    period: "Oct 2019 — Mar 2024",
    details: null,
  },
  {
    id: 3,
    degree: "Intermediate — Pre Engineering",
    institution: "Govt. Degree College Block-M, Karachi",
    period: "Nov 2016 — Feb 2019",
    details: null,
  },
  {
    id: 4,
    degree: "Matriculation — Computer Science",
    institution: "Sindh Board of Secondary Education Karachi",
    period: "Apr 2014 — Aug 2016",
    details: null,
  },
];

export const certifications = [
  {
    id: 1,
    name: "Python Development",
    issuer: "NED Academy",
    year: "2026",
  },
  {
    id: 2,
    name: "Python Developer",
    issuer: null,
    year: "2026",
  },
  {
    id: 3,
    name: "Data Analyst",
    issuer: "Bano Qabil",
    year: "2025",
  },
  {
    id: 4,
    name: "Certificate of IT",
    issuer: "SEB Institute",
    year: "2022",
  },
  {
    id: 5,
    name: "Complete JavaScript with HTML & CSS3 from Zero to Expert",
    issuer: "Udemy",
    year: "2021",
  },
  {
    id: 6,
    name: "Frontend Web Development",
    issuer: "E-Rising",
    year: "2021",
  },
];

export const footerContent = {
  copyright: `© ${new Date().getFullYear()} Manal Asghar. All rights reserved.`,
  builtWith: "Built with React + Vite",
};
