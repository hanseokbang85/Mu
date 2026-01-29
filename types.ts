
export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  subImages: string[];
  description: string;
}

export type Category = 'RESIDENTIAL';
