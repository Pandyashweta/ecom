import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';

const About = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero / Who We Are */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-display text-espresso">Everything About ĀraHouse</h1>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground">
                <h2 className="text-2xl font-display text-foreground">Who We Are</h2>
                <p>ĀraHouse is a multi-studio fashion and lifestyle house rooted in Indian craftsmanship and shaped by contemporary design. We aim to build a modern creative ecosystem that celebrates culture, identity, and timeless aesthetics.</p>
            </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-cream/30 px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-3xl font-display text-espresso">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Founded on the belief that meaningful design should be accessible, ĀraHouse brings together craft communities, designers, and modern consumers on one platform. Our collections bridge traditional techniques with present-day silhouettes.
                </p>
                <p className="text-lg font-medium text-terracotta italic">
                    Every piece reflects intentional design, sustainable values, and a deep respect for India’s artistic heritage.
                </p>
            </div>
        </section>

        {/* Vision & Values */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-6">
                    <h2 className="text-3xl font-display text-espresso">Our Vision</h2>
                    <p className="text-lg text-muted-foreground">To become a leading global house of contemporary Indian design grounded in heritage, inclusivity, and conscious production.</p>
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-display text-espresso">Our Values</h2>
                    <ul className="grid grid-cols-2 gap-4 text-muted-foreground">
                        {['Authenticity', 'Craftsmanship', 'Inclusivity', 'Sustainability', 'Timeless Design', 'Responsible Production'].map(v => (
                            <li key={v} className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                                {v}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        {/* The Studios */}
        <section className="py-20 bg-espresso text-cream px-4 md:px-8">
            <div className="max-w-7xl mx-auto text-center space-y-12">
                <h2 className="text-3xl font-display">The Studios of ĀraHouse</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4 p-6 border border-gold/20 rounded-lg">
                        <h3 className="text-xl font-display text-gold">Ruhé Studios</h3>
                        <p className="text-cream/80">Indo Western fusion wear</p>
                    </div>
                    <div className="space-y-4 p-6 border border-gold/20 rounded-lg">
                        <h3 className="text-xl font-display text-gold">Sutrā Studios</h3>
                        <p className="text-cream/80">Heritage Indian wear</p>
                    </div>
                    <div className="space-y-4 p-6 border border-gold/20 rounded-lg">
                        <h3 className="text-xl font-display text-gold">Kritá Studios</h3>
                        <p className="text-cream/80">Handcrafted jewelry</p>
                    </div>
                </div>
                <p className="text-lg text-cream/80 max-w-3xl mx-auto">
                    Together, they form the identity of ĀraHouse — where craft is preserved, modernity embraced, and culture reinterpreted.
                </p>
            </div>
        </section>

        {/* Company Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <h3 className="text-xl font-display text-espresso">About Us</h3>
                    <p className="text-sm text-muted-foreground">ĀraHouse is built on heritage, inclusivity, and contemporary craftsmanship. We work closely with artisans and designers to create timeless collections for the modern world.</p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-display text-espresso">Careers</h3>
                    <p className="text-sm text-muted-foreground">ĀraHouse welcomes individuals passionate about design, craftsmanship, heritage storytelling, sustainability, and innovation.</p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-display text-espresso">Press</h3>
                    <p className="text-sm text-muted-foreground">For media inquiries, interviews, and brand stories, please contact our Communications Team.</p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-display text-espresso">Sustainability</h3>
                    <p className="text-sm text-muted-foreground">We are committed to small-batch production, reduced waste, responsible sourcing, and long-lasting design.</p>
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
