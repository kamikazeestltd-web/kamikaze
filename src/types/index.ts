export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  category: string;
  description: string;
  sizes: string[];
  slug: string;
  featured?: boolean;
  soldOut?: boolean;
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}
