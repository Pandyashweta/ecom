import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#420D09] flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-32 px-4 md:px-8 text-center bg-[#420D09] text-white overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-8 relative z-10">
                <span className="text-white/80 uppercase tracking-[0.2em] text-sm font-medium">Conscious Creation</span>
                <h1 className="text-4xl md:text-6xl font-display text-white">Our Commitment to Sustainability</h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto">
                    At ĀraHouse, sustainability is not just a buzzword; it is the core of our existence. We believe in creating fashion that respects both the planet and the people who make it.
                </p>
            </div>
        </section>

        {/* Details Grid */}
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="p-10 border border-[#420D09]/10 rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-3xl font-display text-[#420D09] mb-4">Small Batch Production</h3>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        We produce in limited quantities to minimize waste and ensure quality.
                    </p>
                </div>
                <div className="p-10 border border-[#420D09]/10 rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-3xl font-display text-[#420D09] mb-4">Responsible Sourcing</h3>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        Our materials are ethically sourced, supporting local artisan communities.
                    </p>
                </div>
                <div className="p-10 border border-[#420D09]/10 rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-3xl font-display text-[#420D09] mb-4">Ethical Labor</h3>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        We ensure fair wages, safe working environments, and dignity of labor for every artisan and tailor in our supply chain.
                    </p>
                </div>
                <div className="p-10 border border-[#420D09]/10 rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-3xl font-display text-[#420D09] mb-4">Mindful Materials</h3>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        From organic cottons to cruelty-free silks, we prioritize fabrics that leave a lighter footprint on the earth.
                    </p>
                </div>
            </div>
        </section>

        {/* Closing Statement */}
        <section className="py-24 px-4 md:px-8 bg-stone-50 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-display text-[#420D09]">The Future is Slow</h2>
                <p className="text-lg text-stone-600 leading-relaxed">
                    We are constantly evolving our practices to reduce our environmental impact. By choosing ĀraHouse, you are supporting a movement towards a more conscious and compassionate fashion industry.
                </p>
            </div>
        </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};
export default Sustainability;