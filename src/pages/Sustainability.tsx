import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <Header />
      <main className="flex-1 py-20 px-4 md:px-8 max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-display text-espresso">Our Commitment to Sustainability</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
            At ĀraHouse, sustainability is not just a buzzword; it is the core of our existence. We believe in creating fashion that respects both the planet and the people who make it.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left pt-8">
            <div className="p-6 bg-cream/30 rounded-lg">
                <h3 className="text-xl font-display text-terracotta mb-2">Small Batch Production</h3>
                <p className="text-muted-foreground">We produce in limited quantities to minimize waste and ensure quality.</p>
            </div>
            <div className="p-6 bg-cream/30 rounded-lg">
                <h3 className="text-xl font-display text-terracotta mb-2">Responsible Sourcing</h3>
                <p className="text-muted-foreground">Our materials are ethically sourced, supporting local artisan communities.</p>
            </div>
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};
export default Sustainability;