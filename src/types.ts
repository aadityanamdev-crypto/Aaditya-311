export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  content: string[];
  tags: string[];
  hindiAccent: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
  image: string;
  tags: string[];
  readTime: string;
  hindiAccent: string;
}
