import { Project, AnalyticsProject } from "@/types";

export const selectedProjects: Project[] = [
  {
    id: "admission-compass",
    title: "Admission Compass",
    subtitle: "Maharashtra FE & DSE College Predictor & CAP Decision Engine",
    category: "Full-Stack Data System",
    badge: "FLAGSHIP TECHNICAL PRODUCT",
    year: "2025 – 2026",
    description:
      "A high-performance admission intelligence platform transforming 100,000+ unstructured government cutoff entries into sub-40ms quota matching, probability zones, and automated CAP preference forms.",
    problemStatement:
      "300,000+ engineering aspirants annually navigate 1,000+ pages of dense, unstructured government allotment PDFs. With complex reservation matrices (Home University, Other Than Home University, TFWS, PwD, and Caste quotas), students lack objective decision tools and frequently misallocate choices, forfeiting merit seats.",
    solutionSummary:
      "Engineered an automated Python ETL pipeline (pdfplumber) that parses and normalizes 100,000+ CAP allotment rows into indexed PostgreSQL. Built a sub-40ms algorithmic prediction engine that enforcers strict quota matrices, computes 4-tier probability zones (Safe, Target, Ambitious), and auto-generates official CAP preference lists.",
    features: [
      "FE MHT-CET percentile & DSE diploma percentage dual prediction engines",
      "Strict enforcement of Home University (HU), Other Than Home University (OHU), and State Level (SL) seat quota matrices",
      "4-tier probability zones: Safe, Target, Ambitious, and Highly Ambitious with mathematical thresholds",
      "Historical Demand Index evaluating multi-year cutoff inflation/deflation across branches",
      "Side-by-side college comparison tool with accreditation and seat distribution analysis",
      "CAP Preference List Builder with PDF export ready for official state portal submission",
      "Automated Python ETL pipeline processing official multi-column CAP PDFs via pdfplumber",
      "Full production telemetry with Sentry error monitoring and performance tracing",
    ],
    featureCategories: [
      {
        categoryName: "Prediction & Quota Intelligence",
        items: [
          "Dual Prediction Engine: MHT-CET percentile for First Year (FE) & Polytechnic aggregate percentage for Direct Second Year (DSE)",
          "Strict Quota Rule Enforcement: Differentiates Home University (HU), Other Than Home University (OHU), and State Level (SL) seats",
          "Comprehensive Reservation Matrix: Exact calculations across Open, OBC, SC, ST, VJ/DT, NT, EWS, TFWS, and PwD sub-allocations",
          "Historical Demand Index: Tracks 3-year percentile inflation and demand trajectories across branches and institutes",
        ],
      },
      {
        categoryName: "Decision Tools & Automation",
        items: [
          "CAP Preference List Builder: Interactive drag-and-drop tool to arrange target colleges and export verified PDF lists",
          "Side-by-Side Institute Comparator: Compares accreditation, intake capacity, branch trends, and cutoff delta",
          "Seat Matrix Analysis: Live breakdown of available category-wise seats across all CAP counseling rounds",
          "Production Telemetry: Sentry error monitoring, automated admin validation suites, and sub-40ms query execution",
        ],
      },
    ],
    // `variant` is a semantic key, not a style string — the component maps it to
    // Tailwind classes (see ZONE_STYLES in ProjectCard.tsx). Keeping styling out
    // of content data means a future theme change never touches this file.
    predictionRules: [
      {
        zone: "Safe Zone",
        condition: "Candidate %ile ≥ Historical Cutoff + 2.00",
        description: "High admission certainty based on multi-year cutoff stability and seat trends.",
        variant: "safe",
      },
      {
        zone: "Target Zone",
        condition: "Within -1.50 to +2.00 of Historical Cutoff",
        description: "Realistic primary matches; competitive chances in CAP Round 1 or 2.",
        variant: "target",
      },
      {
        zone: "Ambitious Zone",
        condition: "Within -5.00 to -1.50 of Historical Cutoff",
        description: "Challenging reach options; viable during Round 2 or 3 seat vacancy shifts.",
        variant: "ambitious",
      },
      {
        zone: "Highly Ambitious",
        condition: "More than 5.00 points below Historical Cutoff",
        description: "Statistical outlier reaches; recommended for aspirational top-preference slots.",
        variant: "highlyAmbitious",
      },
    ],
    architectureDetails: [
      {
        step: "01. Extraction",
        tech: "Python & pdfplumber",
        description: "Programmatic text & table coordinate extraction from 500+ page official government CAP allotment PDFs.",
      },
      {
        step: "02. Transformation",
        tech: "Pandas & NumPy",
        description: "Multi-column header reconstruction, null imputation, college code mapping, and quota normalization.",
      },
      {
        step: "03. Persistence",
        tech: "PostgreSQL & Prisma",
        description: "Relational storage with composite b-tree indexes on college_id, branch_code, and category for fast querying.",
      },
      {
        step: "04. Prediction Engine",
        tech: "Node.js / TypeScript",
        description: "Algorithmic rule matching applying HU/OHU/SL matrix filters and probability delta thresholds.",
      },
      {
        step: "05. Reactive UI",
        tech: "Next.js 15 & React 19",
        description: "Server-side rendering, instant client-side filtering, preference list export, and responsive design.",
      },
    ],
    metrics: [
      { label: "Data Scope", value: "100k+ Cutoff Rows", detail: "Official Maharashtra CAP Records" },
      { label: "Query Speed", value: "< 40ms", detail: "PostgreSQL Composite Indexing" },
      { label: "Quota Rules", value: "HU / OHU / SL", detail: "Full State Reservation Logic" },
      { label: "Observability", value: "Sentry Integrated", detail: "Active Telemetry & Tracing" },
    ],
    techStack: [
      "Next.js 15",
      "React 19",
      "PostgreSQL",
      "Prisma",
      "Python",
      "Pandas",
      "pdfplumber",
      "Tailwind CSS",
      "Sentry",
    ],
    techStackDetailed: [
      { name: "Next.js 15 (App Router)", role: "Server-Side Rendering, edge caching, and optimized frontend architecture" },
      { name: "React 19", role: "Reactive UI components, preference list state, and instant client filtering" },
      { name: "PostgreSQL", role: "Relational database housing indexed cutoff tables across all branches" },
      { name: "Prisma ORM", role: "Type-safe database client and schema migration management" },
      { name: "Python & Pandas", role: "ETL data pipeline for cleaning, normalizing, and structuring government PDFs" },
      { name: "pdfplumber", role: "Coordinate-based PDF text and table extraction from complex CAP bulletins" },
      { name: "Tailwind CSS", role: "Custom responsive styling following modern engineering design systems" },
      { name: "Sentry", role: "Real-time exception monitoring, performance profiling, and error logging" },
    ],
    liveUrl: "https://admission-compass.onrender.com/",
    githubUrl: "https://github.com/Vinayak1806/College-predictor",
    imageSrc: "/images/admission-compass.png",
    imageAlt: "Admission Compass Maharashtra FE and DSE College Predictor Application UI showing cutoff prediction zones",
  },
  {
    id: "hostel-hub",
    title: "Hostel Hub",
    subtitle: "Smart Automated Collegiate Hostel Management System",
    category: "Full-Stack MERN Platform",
    badge: "FULL-STACK RESIDENCY SAAS",
    year: "2025",
    description:
      "A 100% paperless MERN residency platform replacing manual ledger books with real-time floor occupancy matrices, automated fee accounting, and digitized maintenance ticketing.",
    problemStatement:
      "Campus hostels face massive administrative friction: physical paper registers, manual fee reconciliations, zero vacancy visibility for applicants, lost maintenance slips, and delayed leave sign-offs. Both administrators and resident students suffer from opacity and lack of accountability.",
    solutionSummary:
      "Architected a centralized full-stack MERN platform with strict Role-Based Access Control (JWT + Bcrypt). Delivered an interactive visual floor vacancy matrix, automated fee ledger calculations with receipt generation, categorized maintenance ticketing with resolution audits, and digital student leave approvals.",
    features: [
      "Role-Based Access Control (RBAC) with secure JWT authentication and password hashing",
      "Dual specialized portals tailored for resident students and administrative wardens",
      "Interactive visual room allocation matrix showing wing, floor, capacity, and real-time vacancies",
      "End-to-end digital fee management with automated invoice generation and transaction logs",
      "Digital maintenance complaint ticketing system with category routing and status tracking",
      "Online attendance logging and digital leave/night-out application workflow with warden approval",
      "Broadcast notification engine and digital notice board for emergency announcements",
    ],
    featureCategories: [
      {
        categoryName: "Resident Student Portal",
        items: [
          "JWT-Guarded Authentication: Secure login, session persistence, and bcrypt credential hashing",
          "Online Admission Portal: Streamlined room application, preference selection, and document submission",
          "Room & Roommate Details: Instant view of assigned wing, floor, bed slot, and roommate profiles",
          "Fee Ledger & Invoices: Transparent view of paid and pending fees with downloadable receipts",
          "Maintenance Ticketing: File maintenance requests (electrical, plumbing, internet) with live status updates",
          "Attendance & Leave Passes: Digital requests for weekend and emergency leaves with warden sign-off",
        ],
      },
      {
        categoryName: "Administrative Warden Portal",
        items: [
          "Executive Residency Dashboard: Live occupancy statistics, total residents, vacancies, and pending fees",
          "Dynamic Room Allocation Matrix: Visual floor-by-floor occupancy map with one-click room reassignment",
          "Application Review Pipeline: Approve, reject, or waitlist incoming admissions with reason logging",
          "Student Directory & Search: Searchable resident registry with emergency contacts and room histories",
          "Fee Reconciliation: Real-time tracking of pending dues, collected revenue, and transaction logs",
          "Complaint Resolution Tracker: Assign maintenance staff, mark resolutions, and maintain audit trails",
        ],
      },
    ],
    architectureDetails: [
      {
        step: "01. Client Architecture",
        tech: "React & Vite",
        description: "Modular Single Page Application with React Router, custom hooks, and Tailwind styling.",
      },
      {
        step: "02. API & Routing",
        tech: "Express.js & Node.js",
        description: "RESTful endpoints with middleware pipelines for JWT verification, role validation, and input sanitization.",
      },
      {
        step: "03. Data Modeling",
        tech: "MongoDB & Mongoose",
        description: "Flexible document schemas for Students, Wardens, Rooms, Beds, Fee Records, and Maintenance Tickets.",
      },
      {
        step: "04. Security Guard",
        tech: "JWT & Bcrypt",
        description: "Cryptographic password hashing and stateless token authentication ensuring strict role segregation.",
      },
      {
        step: "05. Cloud Hosting",
        tech: "Vercel + Render",
        description: "Continuous integration deployment separating the client frontend (Vercel) from Node.js APIs (Render).",
      },
    ],
    metrics: [
      { label: "Architecture", value: "MERN Stack", detail: "React • Express • Mongo • Node" },
      { label: "Security", value: "RBAC + JWT", detail: "Student & Warden Role Separation" },
      { label: "Deployment", value: "Vercel + Render", detail: "High-Availability Cloud Hosting" },
      { label: "Efficiency", value: "100% Paperless", detail: "Admissions, Fees, & Complaints" },
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Bcrypt",
    ],
    techStackDetailed: [
      { name: "React & Vite", role: "Fast Single Page Application frontend with responsive UI state management" },
      { name: "Node.js & Express.js", role: "RESTful backend microservices, business logic, and request routing" },
      { name: "MongoDB & Mongoose", role: "Document database with structured schemas for rooms, users, and fees" },
      { name: "JWT & Bcrypt", role: "Cryptographic password salting, hashing, and stateless token authentication" },
      { name: "Tailwind CSS", role: "Modern component styling with consistent spacing and responsive layout" },
      { name: "Axios", role: "HTTP client with automated auth token interceptors and response handling" },
    ],
    liveUrl: "https://hostelhub-xi.vercel.app/",
    // TODO: add githubUrl once the repo is public — for a MERN project this is
    // the single highest-signal link for a full-stack recruiter to click.
    imageSrc: "/images/hostel-hub.jpg",
    imageAlt: "Hostel Hub Smart Collegiate Hostel Management System Dashboard and Room Allocation Interface",
  },
  {
    id: "arguai",
    title: "ArguAI",
    subtitle: "Real-time AI Debate & Dialectical Critical Thinking Platform",
    category: "AI & Full-Stack Application",
    badge: "AI DIALECTICAL SIMULATOR",
    year: "2025",
    description:
      "An intellectual debate arena harnessing Google Gemini 2.5 Flash API to detect logical fallacies, score dialectical rigor on a 100-pt scale, and sharpen critical thinking across 600+ topics.",
    problemStatement:
      "Modern online discourse is plagued by cognitive biases, emotional fallacies, and echo chambers. Students and critical thinkers lack structured, objective environments to stress-test their premises, receive unbiased adversarial counter-arguments, and systematically measure logical coherence.",
    solutionSummary:
      "Integrated Google Gemini 2.5 Flash API with custom Socratic heuristic personas across 600+ topics. Engineered a real-time detection engine for 12 logical fallacies, a 100-point dialectical coherence scorecard, and full debate transcript replays to build critical thinking velocity.",
    features: [
      "600+ curated debate topics spanning 12 specialized academic, ethical, and societal categories",
      "Interactive multi-round debate engine powered by Google Gemini 2.5 Flash API",
      "Dynamic debate opponent personas: Socratic Questioner, Devil's Advocate, and Analytical Examiner",
      "Real-time fallacy detection engine identifying Ad Hominem, Straw Man, False Dilemma, and Circular Logic",
      "Dialectical scoring algorithm rating premise strength, empirical grounding, and rebuttal relevance",
      "User skill progression system with Elo-style ratings, achievement badges, and level progression",
      "Debate transcript archiving with detailed round-by-round argumentation quality breakdown",
    ],
    featureCategories: [
      {
        categoryName: "Dialectical AI Engine & Topics",
        items: [
          "600+ Topics across 12 Categories: Science, Law, AI Ethics, Politics, Philosophy, Environment, Economics, Health, Culture, Education, Society, Future of Work",
          "Google Gemini 2.5 Flash Integration: High-speed conversational AI delivering nuanced, philosophically grounded counter-premises",
          "Configurable Heuristic Personas: Switch between Socratic questioning, adversarial counter-arguments, and formal debate rules",
          "Contextual Rebuttal Logic: Maintains debate history context to address user arguments directly without generic boilerplate",
        ],
      },
      {
        categoryName: "Real-Time Evaluation & Gamification",
        items: [
          "Automated Fallacy Detection: Flags 12 distinct logical fallacies with explanatory tooltips and penalty scoring",
          "100-Point Dialectical Scorecard: Measures logical coherence, evidentiary support, and argumentative clarity",
          "Gamified Progression: Unlock badges, level up debate tiers, track win/loss ratios, and monitor longitudinal cognitive growth",
          "Session Replay & Transcripts: Review past debates, highlight strong premises, and study counter-arguments",
        ],
      },
    ],
    architectureDetails: [
      {
        step: "01. AI Persona Heuristics",
        tech: "Gemini 2.5 Flash API",
        description: "Custom system prompts enforcing dialectical rigor, Socratic counter-questions, and fallacy detection.",
      },
      {
        step: "02. Backend Orchestration",
        tech: "Python & Flask",
        description: "Session management, debate turn routing, context caching, and real-time score computation.",
      },
      {
        step: "03. Data Persistence",
        tech: "MySQL Relational DB",
        description: "Stores user profiles, categorized topic banks, full debate transcripts, and historical scores.",
      },
      {
        step: "04. Dialectical Evaluation",
        tech: "Custom Heuristic Engine",
        description: "Multi-factor scoring algorithm evaluating premise relevance, logical coherence, and fallacy counts.",
      },
      {
        step: "05. Cloud Deployment",
        tech: "Vercel Edge Platform",
        description: "Optimized serverless hosting ensuring global low-latency responses for debate interactions.",
      },
    ],
    metrics: [
      { label: "Debate Topics", value: "600+ Topics", detail: "Across 12 Curated Domains" },
      { label: "AI Engine", value: "Gemini 2.5 Flash", detail: "Real-Time Context-Aware Inference" },
      { label: "Evaluation", value: "12 Fallacies", detail: "Real-time Logical Error Detection" },
      { label: "Scoring", value: "100-pt Scale", detail: "Coherence & Evidence Rating" },
    ],
    techStack: [
      "Python",
      "Flask",
      "MySQL",
      "Google Gemini 2.5 Flash API",
      "Vercel",
      "REST APIs",
    ],
    techStackDetailed: [
      { name: "Google Gemini 2.5 Flash API", role: "Core conversational intelligence providing contextual counter-arguments" },
      { name: "Python & Flask", role: "Lightweight backend microservices handling debate turn execution and scoring" },
      { name: "MySQL", role: "Relational database storing user records, transcripts, topic banks, and ratings" },
      { name: "RESTful API Architecture", role: "Stateless endpoints coordinating real-time user prompts and AI replies" },
      { name: "Vercel", role: "Cloud edge deployment providing scalable serverless execution" },
    ],
    liveUrl: "https://arguai-mocha.vercel.app/login",
    // TODO: add githubUrl once the repo is public.
    imageSrc: "/images/arguai.jpg",
    imageAlt: "ArguAI AI Debate Platform Landing Page and Dialectical Challenge Dashboard",
  },
];

export const analyticsProjects: AnalyticsProject[] = [
  {
    id: "employee-attrition",
    title: "Employee Attrition Analysis",
    subtitle: "Workforce Risk Modeling & Interactive Power BI Diagnostic Dashboard",
    category: "Data Analytics & ML",
    description:
      "An end-to-end HR diagnostic and predictive analytics system leveraging machine learning classification and Power BI to identify primary turnover drivers and evaluate flight-risk propensity across organizational units.",
    keyFindings: [
      "Overtime frequency emerged as the strongest single predictive indicator of voluntary employee turnover",
      "Significant correlation discovered between compensation tier stagnation and 18–24 month resignation velocity",
      "Younger demographic cohorts (< 30 years) demonstrated markedly higher attrition rates within technical and sales divisions",
    ],
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Jupyter Notebook",
      "Power BI",
    ],
    datasetInfo: "Synthetic IBM HR Analytics benchmark dataset sourced from Kaggle (1,470 records, 35 attributes).",
    metrics: [
      "1,470 Employee Profiles Analyzed",
      "35 Organizational Attributes",
      "Interactive KPI Drilldowns",
    ],
    imageSrc: "/images/employee-attrition.jpg",
    imageAlt: "Employee Attrition Analysis Power BI Dashboard showing turnover metrics and department filters",
  },
  {
    id: "instagram-engagement",
    title: "Social Media Engagement Dashboard",
    subtitle: "200-Channel Performance Audit & Content Efficiency Modeling",
    category: "Business Intelligence",
    description:
      "A quantitative social analytics project evaluating 200 distinct influencer and creator accounts to uncover non-linear relationships between audience size, publication frequency, and actual engagement velocity.",
    keyFindings: [
      "High follower volume does not guarantee superior engagement; engagement rate exhibited inverse scaling above 100k followers",
      "Mid-tier creator channels (10k–50k) consistently achieved the highest per-post interaction ratios",
      "Content categorization proved more determinative of comment volume than raw follower reach",
    ],
    techStack: ["Python", "Pandas", "Power BI", "Data Wrangling"],
    datasetInfo: "Standardized performance data compiled across 200 Instagram channels measuring reach, likes, comments, and saves.",
    metrics: [
      "200 Creator Channels",
      "Multi-dimensional Engagement Ratios",
      "Content Category Cross-tabs",
    ],
    imageSrc: "/images/social-media-engagement.jpg",
    imageAlt: "Social Media Engagement Power BI Dashboard analyzing reach and channel metrics",
  },
  {
    id: "heart-disease-analysis",
    title: "Exploring Heart Disease Clinical Data",
    subtitle: "Lifestyle Risk Factor Exploratory Data Analysis & Regression",
    category: "Exploratory Data Analysis",
    description:
      "A structured exploratory data analysis examining correlations between lifestyle habits (exercise, cholesterol, alcohol/smoking, BMI) and cardiac health indicators, concluding with a regression model predicting heart-rate variance.",
    keyFindings: [
      "Explored cross-correlations among resting blood pressure, cholesterol profiles, and exercise-induced symptoms",
      "Demonstrated linear relationship between age-stratified metabolic rate and sustained heart rate under physical stress",
      "Built multi-variable Linear Regression model in Scikit-learn to predict variance based on biometric metrics",
    ],
    techStack: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Power BI",
    ],
    datasetInfo: "Synthetic clinical dataset containing 1,000 anonymized patient records with 17 biometric attributes (strictly for educational modeling; not for medical diagnosis).",
    metrics: [
      "1,000 Patient Records",
      "17 Biometric Attributes",
      "Linear Regression Model",
    ],
    imageSrc: "/images/heart-disease-analysis.jpg",
    imageAlt: "Exploring Heart Diseases Data Analysis Summary and Biometric Heatmap",
    isSynthetic: true,
  },
];
