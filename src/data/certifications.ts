import { Certification, Education, Achievement } from "@/types";

export const certifications: Certification[] = [
  {
    id: "nptel-python",
    title: "Data Analytics with Python",
    issuer: "NPTEL / IIT Madras",
    badgeText: "NPTEL Certified",
    description:
      "Comprehensive certification covering exploratory data analysis, statistical methods, hypothesis testing, Pandas, NumPy, and predictive modeling using Python.",
    pdfPath: "/certificates/nptel-python.pdf",
  },
  {
    id: "ibm-skillsbuild",
    title: "Academic Internship: Data Analytics With AI",
    issuer: "IBM SkillsBuild & Edunet Foundation",
    badgeText: "IBM SkillsBuild",
    description:
      "Practical industry internship focusing on real-world data analysis, business intelligence workflows, artificial intelligence fundamentals, and applied analytics dashboards.",
    pdfPath: "/certificates/ibm-skillsbuild.pdf",
  },
  {
    id: "spoken-cpp",
    title: "Advanced C++ Programming",
    issuer: "Spoken Tutorial Project, IIT Bombay",
    badgeText: "IIT Bombay Spoken Tutorial",
    description:
      "Advanced certification verifying proficiency in Object-Oriented Programming (OOP), memory management, pointer manipulation, STL containers, and algorithm design.",
    pdfPath: "/certificates/spoken-tutorial-cpp.pdf",
  },
  {
    id: "spoken-python",
    title: "Python 3.4.3 Programming",
    issuer: "Spoken Tutorial Project, IIT Bombay",
    badgeText: "IIT Bombay Spoken Tutorial",
    description:
      "Hands-on program certification covering core syntax, data structures, modular programming, file I/O operations, and problem-solving techniques.",
    pdfPath: "/certificates/spoken-tutorial-python.pdf",
  },
  {
    id: "simplilearn-oops-java",
    title: "OOPs in Java",
    issuer: "Simplilearn SkillUp",
    badgeText: "Simplilearn Certified",
    period: "September 2026",
    credentialId: "10712658",
    description:
      "Official certificate of completion verifying core Object-Oriented Programming (OOP) paradigms in Java, covering inheritance, polymorphism, encapsulation, abstraction, and modular class design.",
    pdfPath: "/certificates/oops-in-java.pdf",
  },
  {
    id: "barclays-soft-skills",
    title: "Life Skills & Professional Communication Program",
    issuer: "Barclays & Rubicon",
    badgeText: "Corporate Readiness",
    description:
      "Rigorous industry-readiness training program emphasizing workplace communication, interpersonal effectiveness, public presentation, and team collaboration.",
    pdfPath: "/certificates/barclays-soft-skills.pdf",
  },
  {
    id: "aws-data-engineering",
    title: "Data Engineering on AWS - Foundations",
    issuer: "AWS Training & Certification",
    badgeText: "AWS Certified",
    description:
      "Official AWS completion certificate verifying core foundations of cloud data pipelines, data lake design on Amazon S3, AWS Glue ETL catalogs, Amazon Redshift, and serverless analytics processing.",
    pdfPath: "/certificates/data-engineering-aws.pdf",
  },
  {
    id: "genai-data-analytics-tata",
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata Insights & Quants / Forage",
    badgeText: "Tata & Forage",
    description:
      "Practical industry simulation completing exploratory data analysis & risk profiling, predictive delinquency modeling with AI algorithms, executive data storytelling, and AI-driven collections strategy implementation.",
    pdfPath: "/certificates/genai-data-analytics-simulation.pdf",
  },
  {
    id: "data-analyst-simplilearn",
    title: "Data Analyst 101",
    issuer: "Simplilearn SkillUp (Powered by Microsoft)",
    badgeText: "Microsoft & Simplilearn",
    description:
      "Comprehensive certification program covering structured data analysis methodologies, statistical foundations, business reporting, and practical data visualization techniques.",
    pdfPath: "/certificates/data-analyst-certificate.pdf",
  },
  {
    id: "codec-internship-cert",
    title: "Data Analytics Internship Certificate",
    issuer: "Codec Technologies India",
    badgeText: "Industry Internship",
    description:
      "Official certificate recognizing performance during the Data Analytics internship, executing Python-based ETL and Power BI enterprise dashboarding.",
    pdfPath: "/certificates/codec-internship.pdf",
  },
  {
    id: "hsr-offer-letter",
    title: "Full Stack Development Internship Letter",
    issuer: "HSR Hi-Tech Solutions",
    badgeText: "Active MERN Role",
    description:
      "Offer letter and appointment documentation for the Full Stack Development (MERN) internship role spanning React, Express, Node.js, and database design.",
    pdfPath: "/certificates/hsr-internship.pdf",
  },
  {
    id: "itr-certificate",
    title: "Technical Training & Competency Certificate",
    issuer: "Information Technology Research / Academic Center",
    badgeText: "Technical Certification",
    description:
      "Practical technical curriculum certification covering core computing principles, applied programming practices, and system applications.",
    pdfPath: "/certificates/itr-certificate.pdf",
  },
];

export const educationHistory: Education[] = [
  {
    institution: "Sinhgad Academy of Engineering (SAE), Kondhwa",
    degree: "Bachelor of Engineering (B.E.) - Computer Engineering",
    period: "August 2025 – Pursuing",
    status: "Currently Pursuing",
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Web Technologies",
      "Operating Systems",
      "Computer Networks",
      "Object Oriented Programming",
    ],
  },
  {
    institution: "Vidya Pratishthan’s Polytechnic College, Indapur",
    degree: "Diploma - Computer Engineering",
    period: "Sep 2022 – May 2025",
    status: "Completed",
    grade: "88.17% Aggregate",
    relevantCoursework: [
      "Core Programming (C, C++, Java)",
      "Relational Database Systems",
      "Software Engineering Principles",
      "Data Structures using C",
    ],
  },
  {
    institution: "Dr. B. J. Date Prashale, Natepute",
    degree: "Secondary School Certificate (SSC)",
    period: "Jun 2021 – May 2022",
    status: "Completed",
    relevantCoursework: [
      "Mathematics & Science Foundations",
      "Computer Literacy & Logic",
      "Language & Communication",
    ],
  },
];

export const achievementsList: Achievement[] = [
  {
    title: "Flipkart GRiD 8.0 — Shortlisted for Round 3 / Finals",
    organization: "Flipkart",
    badge: "National Finalist Track",
    year: "2026",
    description:
      "Advanced through competitive national algorithmic and system development rounds in one of India's premier engineering challenges, evaluated on problem complexity, logic, and implementation efficiency.",
  },
  {
    title: "National & Regional Hackathon Competitions",
    organization: "Technical Collegiate Hackathons",
    badge: "Builder Track",
    year: "2024 – 2026",
    description:
      "Actively designed, developed, and deployed full-stack web platforms under 24–36 hour sprint constraints, architecting functional prototypes with real-time features and database integrations.",
  },
];
