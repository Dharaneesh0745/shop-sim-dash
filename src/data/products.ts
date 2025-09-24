export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  features: string[];
  brand: string;
  discount?: number;
}

export const categories = [
  'Electronics',
  'Fashion',
  'Home & Kitchen',
  'Books',
  'Sports',
  'Beauty',
  'Automotive',
  'Mobile & Accessories'
];

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 1299,
    originalPrice: 1399,
    description: 'The ultimate iPhone with titanium design, advanced camera system, and A17 Pro chip for unprecedented performance.',
    image: 'https://images.unsplash.com/photo-1696427407805-9b8e9bf9bd42?w=500&h=500&fit=crop',
    category: 'Mobile & Accessories',
    rating: 4.8,
    reviews: 2547,
    inStock: true,
    features: ['A17 Pro Chip', 'Pro Camera System', 'Titanium Design', '5G Ready'],
    brand: 'Apple',
    discount: 7
  },
  {
    id: '2',
    name: 'Samsung Galaxy Book3 Ultra',
    price: 2299,
    originalPrice: 2499,
    description: 'Powerful laptop with Intel Core i7, RTX 4050, and stunning AMOLED display for professionals and creators.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop',
    category: 'Electronics',
    rating: 4.6,
    reviews: 1834,
    inStock: true,
    features: ['Intel i7', 'RTX 4050', 'AMOLED Display', '16GB RAM'],
    brand: 'Samsung',
    discount: 8
  },
  {
    id: '3',
    name: 'Nike Air Max 270',
    price: 149,
    originalPrice: 179,
    description: 'Iconic sneakers with maximum comfort and style. Perfect for everyday wear and light workouts.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    category: 'Fashion',
    rating: 4.5,
    reviews: 3421,
    inStock: true,
    features: ['Air Max Technology', 'Breathable Mesh', 'Durable Sole', 'Lightweight'],
    brand: 'Nike',
    discount: 17
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5 Headphones',
    price: 399,
    originalPrice: 449,
    description: 'Industry-leading noise canceling headphones with exceptional sound quality and 30-hour battery life.',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop',
    category: 'Electronics',
    rating: 4.9,
    reviews: 5643,
    inStock: true,
    features: ['Noise Canceling', '30hr Battery', 'Quick Charge', 'Premium Sound'],
    brand: 'Sony',
    discount: 11
  },
  {
    id: '5',
    name: 'KitchenAid Stand Mixer',
    price: 379,
    originalPrice: 429,
    description: 'Professional-grade stand mixer perfect for baking enthusiasts. Includes multiple attachments.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e8c3?w=500&h=500&fit=crop',
    category: 'Home & Kitchen',
    rating: 4.7,
    reviews: 2156,
    inStock: true,
    features: ['10-Speed Control', 'Tilt-Head Design', '5Qt Bowl', 'Multiple Attachments'],
    brand: 'KitchenAid',
    discount: 12
  },
  {
    id: '6',
    name: 'Levi\'s 501 Original Jeans',
    price: 89,
    originalPrice: 109,
    description: 'Classic straight-leg jeans that defined generations. Made with premium denim for lasting comfort.',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
    category: 'Fashion',
    rating: 4.4,
    reviews: 8734,
    inStock: true,
    features: ['100% Cotton', 'Classic Fit', 'Button Fly', 'Machine Washable'],
    brand: 'Levi\'s',
    discount: 18
  },
  {
    id: '7',
    name: 'Apple Watch Series 9',
    price: 429,
    originalPrice: 479,
    description: 'Advanced smartwatch with health monitoring, fitness tracking, and seamless iPhone integration.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop',
    category: 'Mobile & Accessories',
    rating: 4.8,
    reviews: 4532,
    inStock: true,
    features: ['Health Monitoring', 'GPS', 'Water Resistant', 'Fast Charging'],
    brand: 'Apple',
    discount: 10
  },
  {
    id: '8',
    name: 'Dyson V15 Vacuum Cleaner',
    price: 749,
    originalPrice: 849,
    description: 'Powerful cordless vacuum with laser dust detection and intelligent suction adjustment.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    category: 'Home & Kitchen',
    rating: 4.6,
    reviews: 1987,
    inStock: true,
    features: ['Laser Detection', 'Cordless', '60min Runtime', 'Anti-Tangle Technology'],
    brand: 'Dyson',
    discount: 12
  },
  {
    id: '9',
    name: 'The Psychology of Money',
    price: 16,
    originalPrice: 22,
    description: 'Bestselling book about the strange ways people think about money and teaches you how to make better sense of one of life\'s most important topics.',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop',
    category: 'Books',
    rating: 4.9,
    reviews: 12847,
    inStock: true,
    features: ['Bestseller', 'Personal Finance', 'Psychology', 'Practical Tips'],
    brand: 'Harriman House',
    discount: 27
  },
  {
    id: '10',
    name: 'Adidas Ultraboost 22',
    price: 189,
    originalPrice: 219,
    description: 'Premium running shoes with responsive cushioning and energy return for your best performance.',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop',
    category: 'Sports',
    rating: 4.7,
    reviews: 2845,
    inStock: true,
    features: ['Boost Technology', 'Primeknit Upper', 'Energy Return', 'Lightweight'],
    brand: 'Adidas',
    discount: 14
  },
  {
    id: '11',
    name: 'Fenty Beauty Foundation',
    price: 39,
    originalPrice: 45,
    description: 'Full-coverage, long-wearing foundation available in 50 shades for all skin tones.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop',
    category: 'Beauty',
    rating: 4.6,
    reviews: 6753,
    inStock: true,
    features: ['50 Shades', 'Full Coverage', 'Long-Wearing', 'All Skin Types'],
    brand: 'Fenty Beauty',
    discount: 13
  },
  {
    id: '12',
    name: 'Tesla Model S Key Fob',
    price: 175,
    originalPrice: 200,
    description: 'Premium key fob for Tesla Model S with advanced security features and sleek design.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
    category: 'Automotive',
    rating: 4.5,
    reviews: 892,
    inStock: true,
    features: ['Advanced Security', 'Premium Materials', 'Long Range', 'Easy Setup'],
    brand: 'Tesla',
    discount: 13
  }
];