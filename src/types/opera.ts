export type OperaCategory = 'cancelli' | 'scale' | 'arredo' | 'verande' | 'restauro';

export interface OperaItem {
  id: string;
  code: string;
  title: string;
  category: OperaCategory;
  categoryName: string;
  year: number;
  description: string;
  fullDescription?: string;
  imageUrl: string;
  materials: string[];
  dimensions?: string;
  finish?: string;
  featured?: boolean;
}

export interface CategoryTab {
  id: 'all' | OperaCategory;
  label: string;
}
