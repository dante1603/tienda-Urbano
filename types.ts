export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewsCount: number;
  stock: number;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type ViewMode = 'buyer' | 'seller';

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating';

export type Language = 'es' | 'en';
