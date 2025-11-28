export interface CareerItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PhilosophyItem {
  id: string;
  title: string;
  content: string;
  category: 'Leadership' | 'Tech' | 'Reference';
  author?: string;
  link?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
