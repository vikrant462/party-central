export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  isSpecial?: boolean;
  items?: {
    name: string;
    quantity: number;
  }[];
}