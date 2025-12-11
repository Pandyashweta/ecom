import { Product } from '@/contexts/CartContext';

export interface ProductDetail extends Product {
  description: string;
  sizes: string[];
  colors: string[];
  material: string;
  care: string[];
  images: string[];
}

export const productsData: ProductDetail[] = [
  {
    id: 1,
    name: "Cashmere Blend Sweater",
    price: 189,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80",
    category: "Knitwear",
    description: "Luxuriously soft cashmere blend sweater with a relaxed fit. Perfect for layering or wearing on its own. Features ribbed cuffs and hem for a polished finish.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Camel", "Charcoal"],
    material: "70% Cashmere, 30% Wool",
    care: ["Dry clean only", "Store folded", "Avoid hanging"],
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80"
    ]
  },
  {
    id: 2,
    name: "Tailored Wool Coat",
    price: 445,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80",
    category: "Outerwear",
    description: "A timeless tailored coat crafted from premium Italian wool. Features a classic double-breasted silhouette with peak lapels and a belted waist for a flattering fit.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Camel", "Black", "Navy"],
    material: "100% Italian Wool",
    care: ["Professional dry clean", "Use padded hanger", "Steam to refresh"],
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80"
    ]
  },
  {
    id: 3,
    name: "Silk Midi Dress",
    price: 325,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    category: "Dresses",
    description: "Elegant silk midi dress with a flattering A-line silhouette. Features a subtle v-neckline and flowing skirt that moves beautifully. Perfect for special occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Champagne", "Black", "Burgundy"],
    material: "100% Mulberry Silk",
    care: ["Dry clean recommended", "Iron on low heat", "Store in garment bag"],
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80"
    ]
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    price: 275,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    category: "Accessories",
    description: "Handcrafted leather crossbody bag with adjustable strap. Features multiple compartments for organization and signature gold-tone hardware. A versatile everyday essential.",
    sizes: ["One Size"],
    colors: ["Tan", "Black", "Burgundy"],
    material: "Full-grain Italian Leather",
    care: ["Condition regularly", "Store stuffed", "Avoid water exposure"],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80"
    ]
  },
  {
    id: 5,
    name: "Merino Wool Scarf",
    price: 95,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&q=80",
    category: "Accessories",
    description: "Ultra-soft merino wool scarf with fringed edges. Generously sized for multiple styling options. Provides warmth without bulk.",
    sizes: ["One Size"],
    colors: ["Oatmeal", "Grey", "Navy"],
    material: "100% Extra Fine Merino Wool",
    care: ["Hand wash cold", "Lay flat to dry", "Do not wring"],
    images: [
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
    ]
  },
  {
    id: 6,
    name: "Linen Relaxed Pants",
    price: 165,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    category: "Pants",
    description: "Effortlessly elegant linen pants with a relaxed wide-leg silhouette. Features an elastic waistband for comfort and side pockets. Perfect for warm weather styling.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Natural", "White", "Olive"],
    material: "100% European Linen",
    care: ["Machine wash cold", "Tumble dry low", "Iron while damp"],
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
    ]
  },
  {
    id: 7,
    name: "Cotton Poplin Shirt",
    price: 125,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    category: "Shirts",
    description: "Classic cotton poplin shirt with a modern relaxed fit. Features a spread collar, French cuffs, and mother-of-pearl buttons. A wardrobe essential.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Stripe"],
    material: "100% Egyptian Cotton",
    care: ["Machine wash warm", "Tumble dry medium", "Iron on high"],
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80"
    ]
  },
  {
    id: 8,
    name: "Suede Ankle Boots",
    price: 395,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
    category: "Footwear",
    description: "Sophisticated suede ankle boots with a stacked wooden heel. Features a pointed toe and side zip closure. Handcrafted in Italy with premium materials.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Taupe", "Black", "Cognac"],
    material: "Italian Suede with Leather Sole",
    care: ["Use suede protector", "Brush regularly", "Store with shoe trees"],
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
      "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=800&q=80",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80"
    ]
  }
];

export const getProductById = (id: number): ProductDetail | undefined => {
  return productsData.find(product => product.id === id);
};

export const getRelatedProducts = (currentId: number, category: string): ProductDetail[] => {
  return productsData
    .filter(product => product.id !== currentId && product.category === category)
    .slice(0, 4);
};
