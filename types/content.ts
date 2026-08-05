export type Role = "Front-End Developer";

export type ExperienceEntry = {
  id: string;
  company: string;
  location: string;
  role: string;
  start: string;
  end: string;
  isCurrent?: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export type SkillCategory = {
  id: string;
  index: string;
  title: string;
  description: string;
  skills: string[];
};

export type Project = {
  id: string;
  title: string;
  year: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  impact: string;
  technologies: string[];
  links: { label: string; href: string }[];
};
