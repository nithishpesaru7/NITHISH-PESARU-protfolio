export type SkillCategory = 'all' | 'languages' | 'web' | 'ai' | 'tools';

export interface UserProfile {
  name: string;
  headline: string;
  academicStatus: string;
  degree: string;
  collegeName: string;
  regNumber: string;
  graduationYear: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  location: string;
  bio: string;
  focusAreas: string[];
  careerAmbitions: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'languages' | 'web' | 'ai' | 'tools';
  level: string; // e.g. 'Beginner', 'Foundations', 'Exploring'
  levelPercent: number;
  description: string;
  keyTopics: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  status: 'Completed' | 'In Progress' | 'Prototype';
  statusNote?: string;
  description: string;
  techStack: string[];
  highlights: string[];
  learningOutcomes: string[];
  imageSrc?: string;
  githubUrl?: string;
  demoType: 'grade_calc' | 'basic_calc';
}

export interface MilestoneItem {
  id: string;
  title: string;
  category: 'Honest Milestone' | 'Certificate Placeholder';
  date: string;
  description: string;
  isPlaceholder: boolean;
  statusLabel: string;
}
