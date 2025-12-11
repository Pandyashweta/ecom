import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';
import { Link } from 'react-router-dom';

const Studio = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Introduction */}
        <section className="py-20 px-4 md:px-8 text-center bg-cream/30">
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-4xl md:text-6xl font-display text-espresso">The Creative Universe of ĀraHouse</h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    ĀraHouse is composed of three distinct studios, each representing a different facet of craft and contemporary expression. Together, they form a unified ecosystem of modern Indian design.
                </p>
            </div>
        </section>

        {/* Ruhé Studios */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-display text-terracotta">Ruhé Studios</h2>
                    <h3 className="text-xl font-medium text-espresso">Fusion for Every Body</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Ruhé Studios creates Indo Western silhouettes enriched with Indian craftsmanship. The focus is on accessible luxury, inclusive sizing, and design that transitions seamlessly from daily wear to special occasions.
                    </p>
                    <div className="bg-sand/10 p-6 rounded-lg space-y-4">
                        <h4 className="font-display text-lg text-espresso">Future Direction</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                            <li>Expansion into modular fusion-wear sets</li>
                            <li>Development of sustainable fabric innovations</li>
                            <li>Launch of unisex and gender-neutral clothing lines</li>
                        </ul>
                    </div>
                </div>
                <div className="aspect-[4/5] bg-terracotta/10 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1583391733952-3c339781488f?w=800&q=80" alt="Ruhé Studios" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>

        {/* Sutrā Studios */}
        <section className="py-20 px-4 md:px-8 bg-card">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 aspect-[4/5] bg-gold/10 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80" alt="Sutrā Studios" className="w-full h-full object-cover" />
                </div>
                <div className="order-1 md:order-2 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-display text-gold">Sutrā Studios</h2>
                    <h3 className="text-xl font-medium text-espresso">Rooted in Heritage</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Sutrā is dedicated to the preservation of Indian textiles and craft traditions. Each collection is regionally inspired and developed through close collaboration with artisan clusters.
                    </p>
                    <div className="bg-sand/10 p-6 rounded-lg space-y-4">
                        <h4 className="font-display text-lg text-espresso">Future Direction</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                            <li>State-wise craft collaborations</li>
                            <li>Limited-edition heritage capsule collections</li>
                            <li>An archival line documenting India’s traditional crafts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Kritá Studios */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-display text-espresso">Kritá Studios</h2>
                    <h3 className="text-xl font-medium text-espresso">Handmade Expression</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Kritá specializes in handcrafted jewelry that blends heritage design with modern refinement. Each piece is created using traditional jewelry-making methods and ethically sourced materials.
                    </p>
                    <div className="bg-sand/10 p-6 rounded-lg space-y-4">
                        <h4 className="font-display text-lg text-espresso">Future Direction</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                            <li>Expansion into fine jewelry</li>
                            <li>Special thematic collections based on mythology and folk heritage</li>
                            <li>A bespoke service for custom-crafted statement pieces</li>
                        </ul>
                    </div>
                </div>
                <div className="aspect-[4/5] bg-espresso/10 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80" alt="Kritá Studios" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>

        {/* Unified Vision */}
        <section className="py-20 px-4 md:px-8 bg-espresso text-cream text-center">
            <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl font-display">Unified Vision</h2>
                <p className="text-lg text-cream/80">
                    While each studio has its own creative identity, they share the same values: craftsmanship, culture, sustainability, and design excellence.
                </p>
                <Link to="/new-arrivals">
                    <button className="px-8 py-3 bg-gold text-espresso font-medium rounded hover:bg-gold/90 transition-colors">
                        Explore the Collection
                    </button>
                </Link>
            </div>
        </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};
export default Studio;