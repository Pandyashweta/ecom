import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';

const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#420D09] flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section - Who We Are */}
        <section className="relative py-32 px-4 md:px-8 text-center bg-[#420D09] text-white overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-8 relative z-10">
                <span className="text-white/80 uppercase tracking-[0.2em] text-sm font-medium">Everything About ĀraHouse</span>
                <h1 className="text-5xl md:text-7xl font-display text-white">Who We Are</h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto">
                    ĀraHouse is a multi-studio fashion and lifestyle house rooted in Indian craftsmanship and shaped by contemporary design. We aim to build a modern creative ecosystem that celebrates culture, identity, and timeless aesthetics.
                </p>
            </div>
        </section>

        {/* Our Story */}
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative aspect-[4/5] bg-stone-200 rounded-lg overflow-hidden shadow-xl">
                     <img 
                        src="https://images.unsplash.com/photo-1732539662019-4c4819c903db?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Artisans at work" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-display text-[#420D09]">Our Story</h2>
                    <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                        <p>
                            Founded on the belief that meaningful design should be accessible, ĀraHouse brings together craft communities, designers, and modern consumers on one platform. Our collections bridge traditional techniques with present-day silhouettes.
                        </p>
                        <p>
                            Every piece reflects intentional design, sustainable values, and a deep respect for India’s artistic heritage.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Vision & Values */}
        <section className="py-24 px-4 md:px-8 bg-[#420D09] text-white">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <h2 className="text-4xl md:text-5xl font-display text-white">Our Vision</h2>
                    <p className="text-xl font-light text-white/90">
                        To become a leading global house of contemporary Indian design grounded in heritage, inclusivity, and conscious production.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                    {['Authenticity', 'Craftsmanship', 'Inclusivity', 'Sustainability', 'Timeless Design', 'Responsible Production'].map((value) => (
                        <div key={value} className="p-8 border border-white/20 rounded hover:bg-white/5 transition-colors duration-300">
                            <h3 className="text-xl md:text-2xl font-display tracking-wide">{value}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* The Studios */}
        <section className="py-24 px-4 md:px-8 bg-stone-50">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-display text-[#420D09]">The Studios of ĀraHouse</h2>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                        Together, they form the identity of ĀraHouse — where craft is preserved, modernity embraced, and culture reinterpreted.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-10 rounded shadow-sm border-t-4 border-[#420D09] text-center space-y-4 hover:shadow-md transition-shadow">
                        <h3 className="text-3xl font-display text-[#420D09]">Ruhé Studios</h3>
                        <p className="text-stone-500 uppercase tracking-widest text-sm">Indo Western fusion wear</p>
                    </div>
                    <div className="bg-white p-10 rounded shadow-sm border-t-4 border-[#420D09] text-center space-y-4 hover:shadow-md transition-shadow">
                        <h3 className="text-3xl font-display text-[#420D09]">Sutrā Studios</h3>
                        <p className="text-stone-500 uppercase tracking-widest text-sm">Heritage Indian wear</p>
                    </div>
                    <div className="bg-white p-10 rounded shadow-sm border-t-4 border-[#420D09] text-center space-y-4 hover:shadow-md transition-shadow">
                        <h3 className="text-3xl font-display text-[#420D09]">Kritá Studios</h3>
                        <p className="text-stone-500 uppercase tracking-widest text-sm">Handcrafted jewelry</p>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default About;
