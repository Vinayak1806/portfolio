import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    index: "01",
    name: "FOUNDATION",
    headline: "Programming Languages",
    subtitle: "Core algorithmic thinking and compiled/scripted languages",
    iconName: "Code2",
    skills: [
      { name: "Java", icon: "/tech-icons/java.svg", tag: "Core & DSA" },
      { name: "C++", icon: "/tech-icons/cplusplus.svg", tag: "Competitive" },
      { name: "Python", icon: "/tech-icons/python.svg", tag: "Scripting & Analytics" },
      { name: "JavaScript (ES6+)", icon: "/tech-icons/javascript.svg", tag: "Web Runtime" },
      { name: "TypeScript", icon: "/tech-icons/typescript.svg", tag: "Type-Safe" },
      { name: "C", icon: "/tech-icons/cplusplus.svg", tag: "Fundamentals" },
    ],
  },
  {
    id: "frontend",
    index: "02",
    name: "CLIENT-SIDE",
    headline: "Frontend Architecture",
    subtitle: "High-performance reactive interfaces & design systems",
    iconName: "Layout",
    skills: [
      { name: "React", icon: "/tech-icons/react.svg", tag: "Primary UI" },
      { name: "Next.js", icon: "/tech-icons/nextjs.svg", tag: "App Router & SSR" },
      { name: "Tailwind CSS", icon: "/tech-icons/tailwindcss.svg", tag: "Design Systems" },
      { name: "HTML5 & CSS3", icon: "/tech-icons/html5.svg", tag: "Semantic Web" },
      { name: "Vite", icon: "/tech-icons/javascript.svg", tag: "Build Tooling" },
      { name: "Vercel", icon: "/tech-icons/vercel.svg", tag: "Edge Deployment" },
    ],
  },
  {
    id: "backend",
    index: "03",
    name: "SERVER-SIDE",
    headline: "Backend & Systems",
    subtitle: "Stateless APIs, serverless handlers & microservices",
    iconName: "Server",
    skills: [
      { name: "Node.js", icon: "/tech-icons/nodejs.svg", tag: "Runtime Engine" },
      { name: "Express.js", icon: "/tech-icons/express.svg", tag: "REST Architecture" },
      { name: "Docker", icon: "/tech-icons/docker.svg", tag: "Containers" },
      { name: "Sentry", icon: "/tech-icons/sentry.svg", tag: "Crash Telemetry" },
      { name: "RESTful APIs & Auth", tag: "JWT & Bcrypt" },
    ],
  },
  {
    id: "databases",
    index: "04",
    name: "PERSISTENCE",
    headline: "Databases & Storage",
    subtitle: "ACID compliance, document stores & cloud data backends",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", icon: "/tech-icons/postgresql.svg", tag: "Relational ACID" },
      { name: "MongoDB", icon: "/tech-icons/mongodb.svg", tag: "NoSQL Document" },
      { name: "MySQL", icon: "/tech-icons/mysql.svg", tag: "RDBMS" },
      { name: "Prisma ORM", icon: "/tech-icons/prisma.svg", tag: "Type-Safe Schema" },
      { name: "Schema Design", tag: "Normalization" },
    ],
  },
  {
    id: "data-analytics",
    index: "05",
    name: "INTELLIGENCE",
    headline: "Data Analytics & BI",
    subtitle: "ETL pipelines, exploratory analysis & executive dashboards",
    iconName: "BarChart3",
    skills: [
      { name: "Power BI", icon: "/tech-icons/powerbi.svg", tag: "Executive Dashboards" },
      { name: "Pandas", icon: "/tech-icons/pandas.svg", tag: "Data Wrangling" },
      { name: "NumPy", icon: "/tech-icons/numpy.svg", tag: "Array Operations" },
      { name: "SQL", icon: "/tech-icons/mysql.svg", tag: "Joins & Windows" },
      { name: "Matplotlib & Seaborn", tag: "Visualization" },
      { name: "Excel", tag: "Pivot & Modeling" },
    ],
  },
  {
    id: "ai-tools",
    index: "06",
    name: "AI & WORKFLOW",
    headline: "AI Tools & Modern Workflow",
    subtitle: "Amplifying engineering velocity with AI IDEs, LLMs, and Git workflows",
    iconName: "Sparkles",
    skills: [
      { name: "Cursor", icon: "/tech-icons/cursor.svg", tag: "AI-Native IDE" },
      { name: "Google Gemini API", icon: "/tech-icons/gemini.svg", tag: "Multimodal LLM" },
      { name: "ChatGPT & OpenAI", icon: "/tech-icons/openai.svg", tag: "Code Architecture" },
      { name: "GitHub Copilot", icon: "/tech-icons/github.svg", tag: "Autocomplete" },
      { name: "Git & GitHub", icon: "/tech-icons/git.svg", tag: "Version Control" },
      { name: "VS Code", icon: "/tech-icons/vscode.svg", tag: "Primary Editor" },
      { name: "Prompt Engineering", tag: "Context Design" },
    ],
  },
];

export const whatIBuildPillars = [
  {
    title: "Full-Stack Development",
    tagline: "End-to-End Web Applications",
    description:
      "I engineer complete, responsive web applications from dynamic UI components to backend APIs, authentication layers, structured databases, and automated deployments.",
    tech: ["React", "Next.js", "Node.js", "Express.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "Software Engineering",
    tagline: "Systems, DBs & Algorithmic Foundations",
    description:
      "I enjoy solving rigorous computational problems, designing backend architectures, architecting relational and document schemas, and continuously refining data structure problem-solving.",
    tech: ["Java", "C++", "Python", "Node.js", "PostgreSQL", "MongoDB", "MySQL", "Prisma", "Git"],
  },
  {
    title: "Data & Analytics",
    tagline: "Data Pipelines & Visual Intelligence",
    description:
      "I turn raw, unstructured datasets into clear operational decisions through programmatic cleaning, exploratory statistical modeling, SQL transformations, and interactive Power BI dashboards.",
    tech: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "Matplotlib", "Seaborn", "ETL Pipelines"],
  },
];
