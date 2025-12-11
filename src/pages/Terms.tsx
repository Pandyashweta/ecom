import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <Header />
      <main className="flex-1 py-20 px-4 md:px-8 max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
            <h1 className="text-4xl font-display text-espresso">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: October 2025</p>
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
                <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">2. Use of the Site</h2>
                <p>You agree to use the site for lawful purposes only and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the site. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content or disrupting the normal flow of dialogue within the site.</p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">3. Product Information</h2>
                <p>We attempt to be as accurate as possible. However, we do not warrant that product descriptions or other content of this site is accurate, complete, reliable, current, or error-free. If a product offered by us itself is not as described, your sole remedy is to return it in unused condition.</p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">4. Pricing and Payment</h2>
                <p>Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.</p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">5. Intellectual Property</h2>
                <p>The Site and its original content, features and functionality are and will remain the exclusive property of ĀraHouse and its licensors. The Site is protected by copyright, trademark, and other laws of both the India and foreign countries.</p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">6. Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
            </section>
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};
export default Terms;