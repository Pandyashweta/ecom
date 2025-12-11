import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <Header />
      <main className="flex-1 py-20 px-4 md:px-8 max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
            <h1 className="text-4xl font-display text-espresso">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: October 2025</p>
        </div>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
                <p>Welcome to ĀraHouse. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                    <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                    <li><strong>Financial Data:</strong> includes bank account and payment card details.</li>
                    <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products you have purchased from us.</li>
                </ul>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    <li>Where we need to comply with a legal or regulatory obligation.</li>
                </ul>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">4. Data Security</h2>
                <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">5. Contact Us</h2>
                <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: privacy@arahouse.com</p>
            </section>
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};
export default Privacy;