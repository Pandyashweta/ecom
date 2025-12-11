import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NEW_ARRIVALS = [
  { id: 1, name: "Zari-panelled Fusion Dress", studio: "Ruhé Studios", price: 4200, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80" },
  { id: 2, name: "Ikat Structured Jacket", studio: "Ruhé Studios", price: 3800, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80" },
  { id: 3, name: "Minimal Drape Skirt", studio: "Ruhé Studios", price: 2750, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80" },
  { id: 10, name: "Asymmetric Tunic Set", studio: "Ruhé Studios", price: 3450, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80" },
];

const NewArrivals = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl font-display text-espresso">New Arrivals</h1>
            <p className="text-muted-foreground">Latest collections from Ruhé Studios</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {NEW_ARRIVALS.map(product => (
                <Link key={product.id} to={`/product/${product.id}`} className="group cursor-pointer">
                    <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <Button className="w-full bg-white text-black hover:bg-gray-100">Quick View</Button>
                        </div>
                    </div>
                    <div className="space-y-1 text-center">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{product.studio}</p>
                        <h3 className="font-medium text-lg">{product.name}</h3>
                        <p className="text-foreground">₹{product.price.toLocaleString()}</p>
                    </div>
                </Link>
            ))}
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};
export default NewArrivals;