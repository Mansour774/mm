export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'ebooks' | 'templates' | 'courses' | 'software';
  image: string;
  downloadLink?: string;
}