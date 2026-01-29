
export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  description: string;
}

export type Category = 'ALL' | 'RESIDENTIAL' | 'COMMERCIAL' | 'OFFICE';
