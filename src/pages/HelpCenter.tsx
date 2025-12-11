import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-[#420D09] flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 px-4 md:px-8 text-center bg-[#420D09] text-[#F5E6D3] overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-6 relative z-10">
                <span className="text-white/60 uppercase tracking-[0.2em] text-xs font-medium">Customer Support</span>
                <h1 className="text-4xl md:text-6xl font-display text-white">Help Center</h1>
            </div>
        </section>

        {/* Contact Section with Form */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div className="space-y-10">
                    <div>
                        <h2 className="text-3xl font-display mb-6">Contact Us</h2>
                        <p className="text-stone-600 text-lg leading-relaxed">
                            We are here to assist you with any inquiries about our collections, shipping, or returns.
                        </p>
                    </div>
                    
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white border border-[#420D09]/10 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                            </div>
                            <div>
                                <h3 className="font-display text-lg">Email</h3>
                                <a href="mailto:support@arahouse.com" className="text-[#B85C38] hover:underline block mt-1">support@arahouse.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white border border-[#420D09]/10 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            </div>
                            <div>
                                <h3 className="font-display text-lg">Phone</h3>
                                <a href="tel:+911234567890" className="text-[#B85C38] hover:underline block mt-1">+91 123 456 7890</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border border-[#420D09]/5">
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-medium text-stone-500">Name</label>
                            <input type="text" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-[#420D09] transition-colors bg-transparent" placeholder="Your Name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-medium text-stone-500">Email</label>
                            <input type="email" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-[#420D09] transition-colors bg-transparent" placeholder="your@email.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-medium text-stone-500">Message</label>
                            <textarea rows={4} className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-[#420D09] transition-colors bg-transparent resize-none" placeholder="How can we help?"></textarea>
                        </div>
                        <button type="submit" className="w-full py-4 bg-[#420D09] text-white uppercase tracking-widest text-sm font-medium hover:bg-[#5D120D] transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 md:px-8 bg-white">
            <div className="max-w-3xl mx-auto space-y-12">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-display mb-4">Frequently Asked Questions</h2>
                </div>
                
                <div className="space-y-6">
                    <div className="p-6 bg-stone-50 rounded border border-stone-100">
                        <h3 className="text-lg font-display mb-2 text-[#420D09]">What is your return policy?</h3>
                        <p className="text-stone-600 leading-relaxed text-sm">
                            We accept returns within 14 days of delivery for unworn, unwashed items with original tags attached. Please note that custom-made or altered pieces are non-refundable unless there is a manufacturing defect.
                        </p>
                    </div>
                    
                    <div className="p-6 bg-stone-50 rounded border border-stone-100">
                        <h3 className="text-lg font-display mb-2 text-[#420D09]">How long does shipping take?</h3>
                        <p className="text-stone-600 leading-relaxed text-sm">
                            Domestic orders are typically processed within 2-3 business days and delivered within 5-7 business days. For made-to-order items, please allow 2-3 weeks for production and delivery.
                        </p>
                    </div>

                    <div className="p-6 bg-stone-50 rounded border border-stone-100">
                        <h3 className="text-lg font-display mb-2 text-[#420D09]">Do you ship internationally?</h3>
                        <p className="text-stone-600 leading-relaxed text-sm">
                            Yes, we ship globally. International shipping rates vary by destination and weight. Delivery times for international orders typically range from 7-14 business days after dispatch.
                        </p>
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

export default HelpCenter;