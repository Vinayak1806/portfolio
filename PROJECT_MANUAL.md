# 📘 Vinayak Pawate Portfolio — Complete Architecture & Maintenance Manual

> **Welcome!** This guide is designed specifically for you to understand **every file, component, data flow, and error-prevention technique** in your portfolio. Keep this file handy—whenever you want to make changes or fix an issue in the future, follow the instructions below.

---

## 📑 Table of Contents
1. [High-Level Architecture (How It Works)](#1-high-level-architecture-how-it-works)
2. [Project Directory & File Map](#2-project-directory--file-map)
3. [Page Structure & Component Flow](#3-page-structure--component-flow)
4. [Component-by-Component Reference](#4-component-by-component-reference)
5. [The Data Layer (`src/data` & `src/types`)](#5-the-data-layer)
6. [Public Assets & Certificates Directory](#6-public-assets--certificates-directory)
7. [Troubleshooting Guide: Fixing Errors on Your Own](#7-troubleshooting-guide-fixing-errors-on-your-own)
8. [Step-by-Step "How-To" Recipes](#8-step-by-step-how-to-recipes)
9. [Important Terminal Commands](#9-important-terminal-commands)

---

## 1. High-Level Architecture (How It Works)

Your portfolio is built using **Next.js 15 (App Router)** with **React 19**, **TypeScript**, and **Tailwind CSS**.

### How Code Turns Into a Web Page:
```
1. Browser requests http://localhost:3000
               │
               ▼
2. src/app/layout.tsx (Sets up HTML <head>, fonts: Geist & JetBrains Mono, metadata)
               │
               ▼
3. src/app/page.tsx   (The home page — stitches together all 13 primary sections)
               │
               ▼
4. src/components/*   (Individual UI widgets: Hero, SkillsGrid, ProjectCard, etc.)
               │
               ▼
5. src/data/*         (Raw content: skills.ts, projects.ts, experience.ts, certifications.ts)
```

### The Key Separation of Concerns:
- **UI (Presentation)** is in `src/components/`. If you want to change colors, layout, borders, or animations, you edit these files.
- **Content (Data)** is in `src/data/`. If you want to add a project, edit a skill, or change job dates, you **never** need to touch complex React code—you just update clean TypeScript objects in `src/data/`.
- **Contracts (Types)** are in `src/types/index.ts`. This tells TypeScript what fields each project or skill must have.

---

## 2. Project Directory & File Map

```
d:/Programs/Web Development Project/Protfolio/
├── public/                       <-- All static assets (images, logos, PDF certificates)
│   ├── certificates/             <-- All verified PDF certificates & appointment letters
│   ├── projects/                 <-- Screenshots for your engineering & analytics projects
│   └── icons/                    <-- Custom technology brand SVGs & badges
│
├── src/
│   ├── app/                      <-- Next.js 15 App Router
│   │   ├── layout.tsx            <-- Root HTML layout, font definitions, global metadata
│   │   ├── page.tsx              <-- Master Single Page Application structure
│   │   └── globals.css           <-- Tailwind utilities & custom scrollbar styles
│   │
│   ├── components/               <-- Reusable UI components
│   │   ├── Navbar.tsx            <-- Sticky navigation bar with blur effect & quick links
│   │   ├── Hero.tsx              <-- Landing screen, headline, bio, role badge, social links
│   │   ├── CredibilityStrip.tsx  <-- Metric highlights banner directly below Hero
│   │   ├── SelectedWork.tsx      <-- Container for full-stack projects
│   │   ├── ProjectCard.tsx       <-- Detailed interactive card (architecture, features, metrics)
│   │   ├── DataAnalytics.tsx     <-- Data & BI projects (Attrition, Instagram, Heart Disease)
│   │   ├── WhatIBuild.tsx        <-- 3 core technical engineering pillars
│   │   ├── ExperienceTimeline.tsx<-- Work experience, internship cards & PDF viewer trigger
│   │   ├── ProblemSolving.tsx    <-- Java DSA showcase, LeetCode metrics & topics
│   │   ├── SkillsGrid.tsx        <-- 6 technical skill domain boxes with search & tabs
│   │   ├── Education.tsx         <-- Degree info + verified coursework certificates grid
│   │   ├── Achievements.tsx      <-- Competitive honors (Flipkart GRiD, Hackathons)
│   │   ├── AboutSection.tsx      <-- Personal narrative, mindset, and background
│   │   ├── LanguagesSection.tsx  <-- Multilingual proficiency cards
│   │   ├── ContactSection.tsx    <-- Contact details, email CTA, and direct message box
│   │   ├── Footer.tsx            <-- Minimalist engineering footer with status & back-to-top
│   │   ├── CertificateModal.tsx  <-- Embedded PDF viewer modal with download & zoom
│   │   ├── ImageModal.tsx        <-- Lightbox popup for viewing full-size project images
│   │   ├── GithubStrip.tsx       <-- GitHub activity & repositories strip
│   │   └── LeetCodeIcon.tsx      <-- Custom SVG component for LeetCode branding
│   │
│   ├── data/                     <-- All your portfolio content (EDIT HERE FOR TEXT CHANGES)
│   │   ├── projects.ts           <-- Full-stack projects & analytics projects
│   │   ├── skills.ts             <-- The 6 skill domains and all skill items
│   │   ├── experience.ts         <-- Internships, responsibilities, and letter links
│   │   └── certifications.ts     <-- Verified certificates, issuers, and PDF paths
│   │
│   └── types/
│       └── index.ts              <-- TypeScript data types (Project, SkillItem, etc.)
│
├── package.json                  <-- Project dependencies (Next.js 15, React 19, Lucide, etc.)
├── tailwind.config.ts            <-- Tailwind CSS theme colors, fonts, and extensions
├── tsconfig.json                 <-- TypeScript compiler rules
└── PROJECT_MANUAL.md             <-- THIS MANUAL
```

---

## 3. Page Structure & Component Flow

When `src/app/page.tsx` renders, it stacks the sections in this exact order:

| Order | Section Name | Component | Data Source |
|---|---|---|---|
| **Sticky** | Header Navigation | `<Navbar />` | Hardcoded navigation anchor links (`#work`, `#skills`, etc.) |
| **1** | Hero | `<Hero />` | Hardcoded headline, bio, resume download path |
| **2** | Credibility Strip | `<CredibilityStrip />` | Quick statistics & discipline highlights |
| **3** | Selected Work | `<SelectedWork />` & `<ProjectCard />` | `src/data/projects.ts` (`projects` array) |
| **4** | Data Analytics | `<DataAnalytics />` | `src/data/projects.ts` (`analyticsProjects` array) |
| **5** | What I Build | `<WhatIBuild />` | 3 architectural pillars |
| **6** | Work Experience | `<ExperienceTimeline />` | `src/data/experience.ts` |
| **7** | Problem Solving (DSA) | `<ProblemSolving />` | Java LeetCode stats & problem categories |
| **8** | Technical Skills | `<SkillsGrid />` | `src/data/skills.ts` |
| **9** | Education & Certs | `<Education />` | `src/data/certifications.ts` |
| **10**| Achievements | `<Achievements />` | Flipkart GRiD 8.0 & Hackathon awards |
| **11**| About Me | `<AboutSection />` | Deep-dive personal narrative |
| **12**| Languages | `<LanguagesSection />` | English, Marathi, Hindi, Kannada cards |
| **13**| Contact | `<ContactSection />` | Email, LinkedIn, GitHub, Location |
| **Bottom**| Footer | `<Footer />` | Minimal footer with scroll to top |

---

## 4. Component-by-Component Reference

### 1. `Navbar.tsx`
- **Purpose**: Fixes at the top with a subtle backdrop-blur. Allows clicking to smoothly jump to `#work`, `#analytics`, `#experience`, `#skills`, `#education`, `#contact`.
- **Key feature**: Mobile responsive hamburger menu drawer and "Resume" button.

### 2. `Hero.tsx`
- **Purpose**: The first thing recruiters see.
- **Key elements**:
  - Green pulsing dot with "Available for Software Engineering Roles".
  - Name: **Vinayak Pawate**.
  - Direct Action buttons: "Explore Selected Work" (scrolls to `#work`) and "Download Resume".

### 3. `SelectedWork.tsx` & `ProjectCard.tsx`
- **Purpose**: Displays your 3 flagship software engineering projects:
  1. **Admission Compass** (MHT-CET FE & DSE Predictor)
  2. **Hostel Hub** (Smart MERN Collegiate Hostel Management)
  3. **ArguAI** (Dialectical AI Debate Platform with Gemini)
- **Interactive features**:
  - **Tabs**: Overview, System Architecture, Technical Features.
  - **Click to enlarge**: Clicking the project preview image triggers `<ImageModal />`.
  - **Metrics badges**: Live URL and GitHub repository buttons.

### 4. `DataAnalytics.tsx`
- **Purpose**: Highlights your analytical intelligence:
  1. **Employee Attrition Analysis** (IBM HR dataset, ML Classification, Power BI)
  2. **Social Media Engagement Dashboard** (200 Channels, Python & Seaborn)
  3. **Heart Disease Risk Modeling** (Clinical dataset, Logistic Regression)
- **Features**: Filterable tags, KPI metrics (e.g. 84.8% Accuracy), and preview screenshots.

### 5. `ExperienceTimeline.tsx`
- **Purpose**: Displays your verified internships:
  - **HSR Hi-Tech Solutions** (Full Stack MERN Intern)
  - **Codec Technologies India** (Data Analytics Intern)
  - **Excellent Software Services** (Data Analytics Intern)
- **Critical feature**: Clickable "View Appointment Letter / Certificate" button. When clicked, it sets the `pdfUrl` and opens `<CertificateModal />` so recruiters can verify credentials immediately without leaving the site.

### 6. `SkillsGrid.tsx` (6 Core Boxes)
- **Purpose**: Displays your technical arsenal organized into 6 clean, balanced boxes:
  1. **Languages & Core**: Java (DSA), Python, JavaScript, TypeScript, SQL, C/C++
  2. **Frontend Architecture**: React 19, Next.js 15, Vite, HTML5/CSS3, Tailwind CSS, State Management
  3. **Backend & APIs**: Node.js, Express.js, RESTful APIs, Flask, Authentication (JWT & Bcrypt)
  4. **Databases & ORM**: PostgreSQL, MongoDB, MySQL, Prisma ORM, Mongoose, Schema Modeling
  5. **Data & Analytics**: Power BI, Pandas & NumPy, Data Visualization, EDA, Machine Learning
  6. **AI & Modern Workflow**: Google Gemini API, Git & GitHub, Postman, Linux / Bash, Prompt Eng
- **Interactive features**:
  - **Domain Filter Tabs**: Click any category to isolate that card or view all.
  - **Search Bar**: Real-time filtering (e.g. type "Java" or "React" and matching skills highlight instantly).

### 7. `Education.tsx`
- **Purpose**: Showcases your formal B.E. in Computer Engineering from SSPM's College of Engineering (Mumbai University) + your verified certifications from **NPTEL / IIT Madras**, **IBM**, **IIT Bombay**, and **Barclays**.
- **Interactive feature**: Clicking any certificate tile opens `<CertificateModal />` to view the actual PDF in a crisp in-browser viewer.

### 8. `CertificateModal.tsx` & `ImageModal.tsx`
- **Purpose**: Lightbox / modal components rendered at the root level using React portals or overlays.
- **Features**: Pressing `Escape` or clicking the backdrop / close `X` closes the modal. Prevents background body scrolling while open.

---

## 5. The Data Layer

All text and list items live in `src/data/`. This is the safest place to make changes.

### How to Edit `src/data/skills.ts`:
Each category has:
```typescript
{
  id: "languages",
  index: "01",
  name: "Languages & Core",
  headline: "Computational logic and syntax mastery",
  subtitle: "Object-oriented, functional, and typed languages",
  iconName: "Code2", // Corresponds to Lucide icon in SkillsGrid
  skills: [
    { name: "Java (DSA)", icon: "/icons/java.svg", tag: "Primary" },
    { name: "Python", icon: "/icons/python.svg" },
    // ...
  ]
}
```

### How to Edit `src/data/projects.ts`:
Every project object adheres to the `Project` interface in `src/types/index.ts`. If you add a new project, make sure it has:
- `id`: unique string (e.g. `"admission-compass"`)
- `title`: project name
- `subtitle`: short description
- `features`: array of strings
- `techStack`: array of technology names
- `imageSrc`: path to image in `/public/projects/`

---

## 6. Public Assets & Certificates Directory

### The Golden Rule of `/public`:
In Next.js, anything inside the `public` folder is served directly from the root `/`:
- File location on disk: `public/certificates/OOPs in Java.pdf`
- Path in your code: `/certificates/OOPs in Java.pdf`
- ❌ **NEVER write**: `public/certificates/OOPs in Java.pdf` in your `src` code, or Next.js won't find it!

### Current Certificate Files in `public/certificates/`:
- `OOPs in Java.pdf` (IIT Madras / NPTEL)
- `Database Management Systems.pdf` (NPTEL)
- `Python for Data Science.pdf` (NPTEL)
- `Data Analytics.pdf` (IBM SkillsBuild)
- `HSR Hi-Tech Solutions Internship.pdf`
- `Codec Technologies Internship.pdf`
- `CPP.pdf` (IIT Bombay Spoken Tutorial)
- `Java.pdf` (IIT Bombay Spoken Tutorial)
- `LifeSkills.pdf` (Barclays)

---

## 7. Troubleshooting Guide: Fixing Errors on Your Own

### Error 1: `Runtime TypeError: __webpack_modules__[moduleId] is not a function`
- **Why this happens**:
  You tried to use an icon or component that does not exist or was improperly imported.
  For example:
  ```tsx
  // ❌ BAD: Lucide React does not have an icon called "AwsLogo"
  import { AwsLogo } from "lucide-react";
  // In your JSX: <AwsLogo /> -> CRASH: __webpack_modules__[moduleId] is not a function
  ```
- **How to fix it**:
  1. Check the component where you made the recent edit.
  2. Search for `lucide-react` imports. Verify the icon actually exists on [lucide.dev](https://lucide.dev/icons).
  3. If you removed an icon or replaced it with a string, make sure you aren't trying to render it as JSX: `<Icon />`.

---

### Error 2: "Page looks broken or code changes aren't updating in the browser"
- **Why this happens**:
  Next.js caches compiled bundles inside the hidden `.next/` directory. Occasionally, especially after multiple rapid edits or renaming files, the cache becomes out of sync with your code.
- **How to fix it in 3 steps**:
  1. Open your terminal where `npm run dev` is running.
  2. Press `Ctrl + C` to stop the server.
  3. Run:
     ```powershell
     Remove-Item -Recurse -Force .next
     npm run dev
     ```
  4. Refresh your browser at `http://localhost:3000`.

---

### Error 3: "Hydration failed" or "Text content does not match server-rendered HTML"
- **Why this happens**:
  This occurs if the server renders something different from the browser client (for example, reading `window.innerWidth`, `localStorage`, or using `new Date()` directly in JSX).
- **How to fix it**:
  - Add `"use client";` at the very first line of the file if the component uses client-side hooks (`useState`, `useEffect`).
  - Or wrap client-only logic in a `useEffect`:
    ```tsx
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    ```

---

### Error 4: "Cannot find module '@/components/...' or type declarations"
- **Why this happens**:
  TypeScript uses `@/` as an alias for the `src/` folder (configured in `tsconfig.json`).
  If you misspell a file name (e.g. `@/components/Skillsgrid` instead of `SkillsGrid`), Windows is case-insensitive, but Next.js / Webpack will fail.
- **How to fix it**:
  - Always match the exact casing of the filename.
  - Run the TypeScript compiler to find the exact line:
    ```bash
    npx tsc --noEmit
    ```

---

## 8. Step-by-Step "How-To" Recipes

### Recipe A: How to Add a New Skill
1. Open `src/data/skills.ts`.
2. Find the appropriate category (e.g. `frontend`, `backend`, `databases`).
3. Add a new object to the `skills` array:
   ```typescript
   { name: "GraphQL", icon: "/icons/graphql.svg", tag: "Learning" }
   ```
4. Save the file. The SkillsGrid updates automatically!

### Recipe B: How to Add a New Project
1. Put the project screenshot into `public/projects/my-new-project.png`.
2. Open `src/data/projects.ts`.
3. Add a new item to the `projects` array following the structure of existing projects:
   ```typescript
   {
     id: "my-project",
     title: "Project Name",
     subtitle: "What it does in one sentence",
     category: "Full-Stack System",
     badge: "Flagship",
     year: "2026",
     description: "Detailed overview of the project...",
     problemStatement: "What challenge this solves...",
     solutionSummary: "How you built the solution...",
     features: ["Feature 1", "Feature 2", "Feature 3"],
     metrics: [{ label: "Performance", value: "99.9%" }],
     techStack: ["Next.js", "TypeScript", "PostgreSQL"],
     imageSrc: "/projects/my-new-project.png",
     imageAlt: "Preview of Project",
   }
   ```
4. Save the file. It will now appear on your homepage with full modal and tab support!

### Recipe C: How to Add a New Verified Certificate
1. Put the PDF inside `public/certificates/` (e.g. `public/certificates/Cloud_Foundations.pdf`).
2. Open `src/data/certifications.ts`.
3. Add the entry:
   ```typescript
   {
     id: "cloud-foundations",
     title: "Cloud Foundations Certification",
     issuer: "AWS / Coursera",
     period: "2026",
     description: "Core cloud architecture, compute, networking, and storage fundamentals.",
     pdfPath: "/certificates/Cloud_Foundations.pdf",
     badgeText: "Verified"
   }
   ```
4. Save. The certificate card will appear in the Education & Certifications section, and clicking it will open the PDF modal automatically.

---

## 9. Important Terminal Commands

Run these from the project root (`d:\Programs\Web Development Project\Protfolio`):

| Command | Purpose | When to Use |
|---|---|---|
| `npm run dev` | Starts the local development server at `http://localhost:3000` | During day-to-day coding |
| `npm run dev:clean` | Cleans `.next` cache and starts a fresh dev server | If you ever see `moduleId is not a function` or cache errors |
| `npm run clean` | Safely removes `.next` cache folder cross-platform | When cache needs clearing |
| `npx tsc --noEmit` | Checks entire project for hidden TypeScript/syntax errors | **Before saving or after big edits** |
| `npm run build` | Builds the production bundle | To verify the site will deploy with zero errors |
| `npm run lint` | Checks for ESLint code quality issues | To clean up code formatting |

---

*Manual maintained for Vinayak Pawate's Engineering Portfolio.*
