import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';
import { Link } from 'react-router-dom';

const Studio = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-[#420D09] flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Introduction - Dark Maroon Hero */}
        <section className="relative py-32 px-4 md:px-8 text-center bg-[#420D09] text-[#F5E6D3] overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-8 relative z-10">
                <span className="text-stone-300 uppercase tracking-[0.2em] text-sm font-medium">Our Philosophy</span>
                <h1 className="text-5xl md:text-7xl font-display text-[#F5E6D3]">The Creative Universe of ĀraHouse</h1>
                <p className="text-xl md:text-2xl text-[#F5E6D3]/80 leading-relaxed font-light max-w-2xl mx-auto">
                    Three distinct studios. One unified vision of modern Indian craftsmanship.
                </p>
            </div>
        </section>

        {/* Ruhé Studios - Overlapping Card Style */}
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 relative z-10">
                    <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                         <img src="https://images.unsplash.com/photo-1765269303752-53db3e9307e6?q=80&w=687&auto=format&fit=crop" alt="Ruhé Studios" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>
                <div className="md:col-span-5 md:-ml-12 bg-white p-8 md:p-12 shadow-xl rounded-lg relative z-20 border-t-4 border-[#420D09]">
                    <h2 className="text-4xl md:text-5xl font-display text-[#420D09] mb-2">Ruhé Studios</h2>
                    <h3 className="text-lg font-medium text-stone-500 mb-6 uppercase tracking-wider">Fusion for Every Body</h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                        Ruhé Studios creates Indo Western silhouettes enriched with Indian craftsmanship. The focus is on accessible luxury, inclusive sizing, and design that transitions seamlessly from daily wear to special occasions.
                    </p>
                    <div className="space-y-4 border-l-2 border-stone-300 pl-6">
                        <h4 className="font-display text-lg text-[#420D09]">Future Direction</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Expansion into modular fusion-wear sets</li>
                            <li>• Development of sustainable fabric innovations</li>
                            <li>• Launch of unisex and gender-neutral clothing lines</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Sutrā Studios - Dark Section */}
        <section className="py-24 px-4 md:px-8 bg-[#420D09] text-[#F5E6D3]">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 space-y-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display text-white mb-2">Sutrā Studios</h2>
                        <h3 className="text-lg font-medium text-stone-300 uppercase tracking-wider">Rooted in Heritage</h3>
                    </div>
                    <p className="text-[#F5E6D3]/80 leading-relaxed text-lg">
                        Sutrā is dedicated to the preservation of Indian textiles and craft traditions. Each collection is regionally inspired and developed through close collaboration with artisan clusters.
                    </p>
                    <div className="bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm">
                        <h4 className="font-display text-xl text-stone-300 mb-4">Future Direction</h4>
                        <ul className="space-y-3 text-sm text-[#F5E6D3]/70">
                            <li className="flex items-start gap-2"><span className="text-stone-300">✦</span> State-wise craft collaborations</li>
                            <li className="flex items-start gap-2"><span className="text-stone-300">✦</span> Limited-edition heritage capsule collections</li>
                            <li className="flex items-start gap-2"><span className="text-stone-300">✦</span> An archival line documenting India’s traditional crafts</li>
                        </ul>
                    </div>
                </div>
                <div className="order-1 md:order-2 relative">
                    <div className="absolute inset-0 border-2 border-stone-300 translate-x-4 translate-y-4 rounded-lg"></div>
                    <div className="aspect-[4/5] rounded-lg overflow-hidden relative z-10 grayscale hover:grayscale-0 transition-all duration-500">
                        <img src="https://images.unsplash.com/photo-1711688590106-bfd5caf76597?q=80&w=687&auto=format&fit=crop" alt="Sutrā Studios" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>

        {/* Kritá Studios - Clean Layout */}
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 md:order-1 bg-white p-8 md:p-12 shadow-xl rounded-lg relative z-20 border-b-4 border-[#420D09] md:-mr-12">
                    <h2 className="text-4xl md:text-5xl font-display text-[#420D09] mb-2">Kritá Studios</h2>
                    <h3 className="text-lg font-medium text-stone-500 mb-6 uppercase tracking-wider">Handmade Expression</h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                        Kritá specializes in handcrafted jewelry that blends heritage design with modern refinement. Each piece is created using traditional jewelry-making methods and ethically sourced materials.
                    </p>
                    <div className="space-y-4 border-l-2 border-stone-300 pl-6">
                        <h4 className="font-display text-lg text-[#420D09]">Future Direction</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Expansion into fine jewelry</li>
                            <li>• Special thematic collections based on mythology</li>
                            <li>• A bespoke service for custom-crafted pieces</li>
                        </ul>
                    </div>
                </div>
                <div className="md:col-span-7 md:order-2 relative z-10">
                    <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1644341129908-6477e0157037?q=80&w=687&auto=format&fit=crop" alt="Kritá Studios" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>
            </div>
        </section>

        {/* Shop Section */}
        <section className="py-24 px-4 md:px-8 bg-[#420D09] text-[#F5E6D3]">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-display">Shop The Collections</h2>
                    <p className="text-xl text-[#F5E6D3]/80 font-light max-w-2xl mx-auto">
                        Discover the unique creations from our three distinct design studios.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <Link to="/shop/ruhe" className="group block space-y-4">
                        <div className="aspect-[3/4] overflow-hidden rounded-lg bg-stone-800">
                            <img 
                                src="https://images.unsplash.com/photo-1765269303752-53db3e9307e6?q=80&w=687&auto=format&fit=crop" 
                                alt="Ruhé Studios" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-display mb-1">Ruhé Studios</h3>
                            <p className="text-sm tracking-widest uppercase text-[#F5E6D3]/60 group-hover:text-[#F5E6D3] transition-colors">Fusion Wear</p>
                        </div>
                    </Link>

                    {/* Card 2 */}
                    <Link to="/shop/sutra" className="group block space-y-4">
                        <div className="aspect-[3/4] overflow-hidden rounded-lg bg-stone-800">
                            <img 
                                src="https://images.unsplash.com/photo-1711688590106-bfd5caf76597?q=80&w=687&auto=format&fit=crop" 
                                alt="Sutrā Studios" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-display mb-1">Sutrā Studios</h3>
                            <p className="text-sm tracking-widest uppercase text-[#F5E6D3]/60 group-hover:text-[#F5E6D3] transition-colors">Heritage Textiles</p>
                        </div>
                    </Link>

                    {/* Card 3 */}
                    <Link to="/shop/krita" className="group block space-y-4">
                        <div className="aspect-[3/4] overflow-hidden rounded-lg bg-stone-800">
                            <img 
                                src="https://images.unsplash.com/photo-1644341129908-6477e0157037?q=80&w=687&auto=format&fit=crop" 
                                alt="Kritá Studios" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-display mb-1">Kritá Studios</h3>
                            <p className="text-sm tracking-widest uppercase text-[#F5E6D3]/60 group-hover:text-[#F5E6D3] transition-colors">Handcrafted Jewelry</p>
                        </div>
                    </Link>
                </div>

                <div className="text-center pt-8">
                    <Link to="/shop" className="inline-block border-b border-[#F5E6D3] pb-1 hover:text-white hover:border-white transition-colors uppercase tracking-widest text-sm">
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};
export default Studio;