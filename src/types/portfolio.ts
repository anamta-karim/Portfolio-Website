export type SectionId =
  | 'about'
  | 'projects'
  | 'skills'
  | 'experience'
  | 'achievements'
  | 'research'
  | 'contact';

export type ProjectStatus = 'built-tested' | 'in-progress' | 'early-stage';
export type ProjectLinkKind = 'repository' | 'live-demo' | 'video' | 'case-study';
export type ProjectFilterCategory = 'all' | 'ai-ml' | 'genai-cv' | 'fullstack-cloud';

export interface ProjectLink {
  label: string;
  url: string;
  kind: ProjectLinkKind;
}

export interface ProjectModule {
  name: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: ProjectStatus;
  statusLabel: string;
  completionNote?: string;
  featured: boolean;
  categories: ProjectFilterCategory[];
  context: string;
  role: string;
  summary: string;
  problem: string;
  modules?: ProjectModule[];
  approach: string[];
  technologies: string[];
  evidence?: string[];
  plannedWork?: string[];
  limitations?: string[];
  links: ProjectLink[];
  disclaimer?: string;
  publicDemoCaveat?: string;
  imageUrl?: string;
  imageAlt?: string;
  order: number;
}

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  coreSkills: string[];
  projectContextualSkills?: string[];
  contextNote?: string;
  order: number;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'job-simulation' | 'leadership' | 'program';
  typeBadge: string;
  summary: string;
  bullets: string[];
  clarificationNote?: string;
  order: number;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  category: 'scholarship' | 'selection' | 'program' | 'coursework';
  categoryLabel: string;
  certificateUrl?: string;
  certificateLabel?: string;
  order: number;
}

export interface ResearchItem {
  id: string;
  title: string;
  statusLabel: string;
  summary: string;
  details: string[];
  tags: string[];
  repoUrl?: string;
}

export interface PrimaryStarNode {
  id: SectionId;
  number: string;
  label: string;
  shortLabel: string;
  starName: string; // Astronomical Sagittarius star inspiration
  subtitle: string;
  x: number;
  y: number;
  labelOffset: { dx: number; dy: number; anchor: 'start' | 'middle' | 'end' };
  magnitude: 'alpha' | 'beta';
}

export interface SecondaryStarNode {
  id: string;
  x: number;
  y: number;
  r: number;
}

export interface ConstellationEdge {
  from: string;
  to: string;
  primarySection?: SectionId;
}
