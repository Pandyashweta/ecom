import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NEW_ARRIVALS = [
  { id: 1, name: "Zari-panelled Fusion Dress", studio: "Ruhé Studios", price: 4200, image: "https://images.unsplash.com/photo-1616832272863-455420091931?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Ikat Structured Jacket", studio: "Ruhé Studios", price: 3800, image: "https://images.unsplash.com/photo-1606293926075-69a00febf280?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Minimal Drape Skirt", studio: "Ruhé Studios", price: 2750, image: "https://images.unsplash.com/photo-1583391726247-12b52ce3696b?q=80&w=800&auto=format&fit=crop" },
  { id: 10, name: "Asymmetric Tunic Set", studio: "Ruhé Studios", price: 3450, image: "https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?q=80&w=800&auto=format&fit=crop" },
];

const NewArrivals = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-[#420D09] flex flex-col">
      <Header />
      <main className="flex-1">
         {/* Hero Section */}
        <section className="relative py-24 px-4 md:px-8 text-center bg-[#420D09] text-[#F5E6D3] overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-6 relative z-10">
                <span className="text-white/60 uppercase tracking-[0.2em] text-xs font-medium">Just In</span>
                <h1 className="text-4xl md:text-6xl font-display text-white">New Arrivals</h1>
                 <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto">
                    Fresh silhouettes and handcrafted details from our latest studio drops.
                </p>
            </div>
        </section>

        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Editorial Banner / Unique Element */}
            <div className="mb-16 relative rounded-lg overflow-hidden aspect-[21/9] md:aspect-[3/1]">
                 <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2000&auto=format&fit=crop" alt="Season Highlight" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm p-8 text-center max-w-md mx-4">
                        <h2 className="font-display text-2xl md:text-3xl mb-2 text-[#420D09]">The Festive Edit</h2>
                        <p className="text-stone-600 mb-4">Explore our curated selection for the upcoming season.</p>
                        <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-[#420D09] pb-1 hover:text-[#B85C38] hover:border-[#B85C38] transition-colors">Explore Now</Link>
                    </div>
                 </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {NEW_ARRIVALS.map(product => (
                    <Link key={product.id} to={`/product/${product.id}`} className="group cursor-pointer block">
                        <div className="aspect-[3/4] bg-stone-200 overflow-hidden mb-5 relative">
                            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest font-medium z-20 text-[#420D09]">New</span>
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
        </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};
export default NewArrivals;