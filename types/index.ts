export interface Skill {
  icon: string;
  category: string;
  name: string;
  tags: string[];
  level: number;
}

export interface Project {
  icon: string;
  name: string;
  description: string;
  stack: string[];
  github: string;
  live: string | null;
}

export interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
}

export interface NavLink {
  href: string;
  label: string;
}
