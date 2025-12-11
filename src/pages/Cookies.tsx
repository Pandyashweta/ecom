import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <Header />
      <main className="flex-1 py-20 px-4 md:px-8 max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
            <h1 className="text-4xl font-display text-espresso">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: October 2025</p>
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">1. What Are Cookies</h2>
                <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">2. How We Use Cookies</h2>
                <p>We use cookies to understand how you use our website, remember your preferences, and improve your browsing experience. Some cookies are essential for the website to function, while others help us analyze traffic and personalize content.</p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">3. Types of Cookies We Use</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas.
                    </li>
                    <li>
                        <strong>Performance & Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </li>
                    <li>
                        <strong>Functionality Cookies:</strong> These allow the website to remember choices you make (such as your username, language, or region) to provide enhanced features.
                    </li>
                    <li>
                        <strong>Targeting Cookies:</strong> These may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts on other sites.
                    </li>
                </ul>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">4. Managing Cookies</h2>
                <p>Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.</p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">5. Contact Us</h2>
                <p>If you have any questions about our use of cookies, please contact us at: privacy@arahouse.com</p>
            </section>
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};
export default Cookies;