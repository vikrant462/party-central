export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  spiceLevel?: 1 | 2 | 3;
  isVegetarian?: boolean;
  isSpecial?: boolean;
  calories?: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  image: string;
}