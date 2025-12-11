import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: "Zari-panelled Fusion Dress", studio: "Ruhé Studios", price: 4200, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80" },
  { id: 2, name: "Ikat Structured Jacket", studio: "Ruhé Studios", price: 3800, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80" },
  { id: 3, name: "Minimal Drape Skirt", studio: "Ruhé Studios", price: 2750, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80" },
  { id: 4, name: "Handloom Banarasi Kurta Set", studio: "Sutrā Studios", price: 7500, image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80" },
  { id: 5, name: "Ajrakh Printed Co-Ord", studio: "Sutrā Studios", price: 4900, image: "https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?w=800&q=80" },
  { id: 6, name: "Chikankari Kurti", studio: "Sutrā Studios", price: 3200, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80" },
  { id: 7, name: "Handcrafted Silver Jhumka", studio: "Kritá Studios", price: 1850, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
  { id: 8, name: "Gold-Plated Temple Pendant", studio: "Kritá Studios", price: 3600, image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80" },
  { id: 9, name: "Minimal Everyday Studs", studio: "Kritá Studios", price: 950, image: "https://images.unsplash.com/photo-1630019852942-f89202989a51?w=800&q=80" },
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
                    <h1 className="text-2xl font-display">Shop All Products</h1>
                    <span className="text-muted-foreground">{filteredProducts.length} items</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="group cursor-pointer">
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
                        </div>
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