import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ClientCategory {
  name: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}
