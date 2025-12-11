import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const PRODUCTS = [
  { 
    id: 1, 
    name: "Zari-panelled Fusion Dress", 
    studio: "Ruhé Studios", 
    price: 4200, 
    image: "https://images.unsplash.com/photo-1589810635657-232948472d98?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1589810635657-232948472d98?w=800&q=80"],
    category: "Dresses",
    description: "A stunning fusion dress featuring intricate Zari paneling that blends traditional craftsmanship with modern silhouettes.",
    colors: ["Red", "Maroon"],
    sizes: ["S", "M", "L", "XL"],
    material: "Silk Blend",
    care: ["Dry clean only", "Store in muslin bag"]
  },
  { 
    id: 2, 
    name: "Ikat Structured Jacket", 
    studio: "Ruhé Studios", 
    price: 3800, 
    image: "https://images.unsplash.com/photo-1622122201714-307c42200c53?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1622122201714-307c42200c53?w=800&q=80"],
    category: "Jackets",
    description: "Contemporary structured jacket featuring authentic Ikat weaving patterns.",
    colors: ["Blue", "Grey"],
    sizes: ["S", "M", "L"],
    material: "Cotton Ikat",
    care: ["Hand wash cold", "Iron on low heat"]
  },
  { 
    id: 3, 
    name: "Minimal Drape Skirt", 
    studio: "Ruhé Studios", 
    price: 2750, 
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80"],
    category: "Bottoms",
    description: "An elegant drape skirt designed for versatility and comfort.",
    colors: ["Beige", "Black"],
    sizes: ["XS", "S", "M", "L"],
    material: "Crepe",
    care: ["Machine wash gentle"]
  },
  { 
    id: 10, 
    name: "Embroidered Silk Tunic", 
    studio: "Ruhé Studios", 
    price: 3400, 
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80"],
    category: "Tops",
    description: "Hand-embroidered silk tunic perfect for festive occasions.",
    colors: ["Pink", "Peach"],
    sizes: ["S", "M", "L", "XL"],
    material: "Pure Silk",
    care: ["Dry clean only"]
  },
];

const Shop = () => {
  const [selectedStudio, setSelectedStudio] = useState<string | null>(null);

  const filteredProducts = selectedStudio 
    ? PRODUCTS.filter(p => p.studio === selectedStudio)
    : PRODUCTS;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full md:w-64 space-y-8">
                <div>
                    <h3 className="font-display text-xl mb-4">Studio</h3>
                    <div className="space-y-2">
                        {['Ruhé Studios', 'Sutrā Studios', 'Kritá Studios'].map(studio => (
                            <label key={studio} className="flex items-center gap-2 cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    checked={selectedStudio === studio}
                                    onChange={() => setSelectedStudio(selectedStudio === studio ? null : studio)}
                                    className="rounded border-gray-300"
                                />
                                <span className="text-sm text-muted-foreground">{studio}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-display text-xl mb-4">Price Range</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                        <label className="flex items-center gap-2"><input type="checkbox" /> Under ₹2000</label>
                        <label className="flex items-center gap-2"><input type="checkbox" /> ₹2000 - ₹5000</label>
                        <label className="flex items-center gap-2"><input type="checkbox" /> Above ₹5000</label>
                    </div>
                </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-display">New Arrivals</h1>
                    <span className="text-muted-foreground">{filteredProducts.length} items</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map(product => (
                        <Link to={`/product/${product.id}`} key={product.id} className="group cursor-pointer block">
                            <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <Button className="w-full bg-white text-black hover:bg-gray-100">Quick View</Button>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{product.studio}</p>
                                <h3 className="font-medium text-lg">{product.name}</h3>
                                <p className="text-foreground">₹{product.price.toLocaleString()}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};
export default Shop;