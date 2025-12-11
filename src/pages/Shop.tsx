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
    <div className="min-h-screen bg-stone-50 font-sans text-[#420D09] flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar Filters */}
            <aside className="w-full md:w-64 space-y-12 pt-2 hidden md:block">
                <div>
                    <h3 className="font-display text-2xl mb-6 border-b border-[#420D09]/10 pb-2">Studios</h3>
                    <div className="space-y-4">
                        {['Ruhé Studios', 'Sutrā Studios', 'Kritá Studios'].map(studio => (
                            <label key={studio} className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-4 h-4 border border-[#420D09] flex items-center justify-center transition-colors ${selectedStudio === studio ? 'bg-[#420D09]' : 'bg-transparent'}`}>
                                    {selectedStudio === studio && <span className="text-white text-[10px]">✓</span>}
                                </div>
                                <input 
                                    type="checkbox" 
                                    checked={selectedStudio === studio}
                                    onChange={() => setSelectedStudio(selectedStudio === studio ? null : studio)}
                                    className="hidden"
                                />
                                <span className="text-sm tracking-wide text-stone-600 group-hover:text-[#420D09] transition-colors">{studio}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-display text-2xl mb-6 border-b border-[#420D09]/10 pb-2">Price Range</h3>
                    <div className="space-y-4 text-sm tracking-wide text-stone-600">
                        <label className="flex items-center gap-3 cursor-pointer group">
                             <div className="w-4 h-4 border border-[#420D09] flex items-center justify-center"></div>
                             <span className="group-hover:text-[#420D09] transition-colors">Under ₹2000</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                             <div className="w-4 h-4 border border-[#420D09] flex items-center justify-center"></div>
                             <span className="group-hover:text-[#420D09] transition-colors">₹2000 - ₹5000</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                             <div className="w-4 h-4 border border-[#420D09] flex items-center justify-center"></div>
                             <span className="group-hover:text-[#420D09] transition-colors">Above ₹5000</span>
                        </label>
                    </div>
                </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <span className="text-xs font-medium tracking-[0.2em] text-[#B85C38] uppercase block mb-2">Collections</span>
                        <h1 className="text-4xl md:text-5xl font-display">Shop All</h1>
                    </div>
                    <span className="text-sm tracking-widest uppercase border-b border-[#420D09] pb-1">{filteredProducts.length} Products</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {filteredProducts.map(product => (
                        <Link to={`/product/${product.id}`} key={product.id} className="group cursor-pointer block">
                            <div className="aspect-[3/4] bg-stone-200 overflow-hidden mb-5 relative">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <Button className="w-full bg-white text-[#420D09] hover:bg-[#420D09] hover:text-white uppercase tracking-widest text-xs h-12 rounded-none transition-colors">Quick View</Button>
                                </div>
                            </div>
                            <div className="space-y-2 text-center">
                                <p className="text-[10px] font-medium text-stone-500 uppercase tracking-[0.2em]">{product.studio}</p>
                                <h3 className="font-display text-xl group-hover:text-[#B85C38] transition-colors">{product.name}</h3>
                                <p className="text-[#420D09] font-medium">₹{product.price.toLocaleString()}</p>
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