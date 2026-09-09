export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  year: string;
  description: string;
  problemStatement: string;
  solutionSummary: string;
  features: string[];
  featureCategories?: {
    categoryName: string;
    items: string[];
  }[];
  architectureSteps?: string[];
  architectureDetails?: {
    step: string;
    description: string;
    tech: string;
  }[];
  predictionRules?: {
    zone: string;
    condition: string;
    description: string;
    variant?: string;
    color?: string;
  }[];
  metrics: { label: string; value: string; detail?: string }[];
  techStack: string[];
  techStackDetailed?: { name: string; role: string }[];
  liveUrl?: string;
  githubUrl?: string;
  imageSrc: string;
  imageAlt: string;
}

export interface AnalyticsProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  keyFindings: string[];
  techStack: string[];
  datasetInfo: string;
  metrics: string[];
  imageSrc: string;
  imageAlt: string;
  isSynthetic?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyLocation: string;
  period: string;
  isCurrent: boolean;
  isHighlighted: boolean;
  description: string;
  techStack: string[];
  focusAreas: string[];
  certificatePdf?: string;
  certificateName?: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  index: string;
  name: string;
  headline: string;
  subtitle: string;
  iconName: string;
  skills: (string | SkillItem)[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  period?: string;
  description: string;
  pdfPath: string;
  badgeText: string;
  credentialId?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  status: string;
  grade?: string;
  relevantCoursework?: string[];
}

export interface Achievement {
  title: string;
  organization: string;
  description: string;
  badge: string;
  year: string;
}
