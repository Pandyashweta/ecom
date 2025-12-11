import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';
import { ChevronDown, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unworn items in their original condition with tags attached. Returns are free for orders within the continental US. Simply initiate a return through your account or contact our customer service team."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 5-7 business days. Express shipping (2-3 business days) is available for an additional fee. International shipping typically takes 7-14 business days depending on the destination."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide. International orders may be subject to customs duties and taxes, which are the responsibility of the recipient. Shipping costs are calculated at checkout."
  },
  {
    question: "How do I care for my cashmere items?",
    answer: "We recommend dry cleaning cashmere items or hand washing in cold water with a gentle detergent. Never wring or twist cashmere. Lay flat to dry and store folded to maintain shape. Pilling is natural and can be removed with a cashmere comb."
  },
  {
    question: "Can I modify or cancel my order?",
    answer: "Orders can be modified or canceled within 1 hour of placement. After this window, orders enter our fulfillment process and cannot be changed. Please contact customer service immediately if you need to make changes."
  },
  {
    question: "Do you offer gift wrapping?",
    answer: "Yes, we offer complimentary gift wrapping on all orders. Simply select the gift wrap option at checkout and include a personalized message. Items will arrive beautifully presented in our signature packaging."
  }
];

const About = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 gradient-hero">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Our Story
            </p>
            <h1 className="font-display text-5xl lg:text-6xl font-medium text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              About MAISON
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Founded on the belief that quality transcends trends, we curate timeless pieces designed to become the foundation of your wardrobe.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-6">
                <h2 className="font-display text-4xl font-medium text-foreground">
                  Crafted with Purpose
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  MAISON was born from a simple idea: that clothing should be an investment in yourself. We partner with artisan workshops and ethical manufacturers who share our commitment to exceptional craftsmanship.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every piece in our collection is thoughtfully designed with premium materials, ensuring that each garment not only looks beautiful but stands the test of time. We believe in buying less, but buying better.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From the rolling hills of Tuscany where our leather goods are crafted, to the Scottish Highlands where our cashmere is sourced, we trace every step of our supply chain to ensure the highest standards of quality and sustainability.
                </p>
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80"
                  alt="Our atelier"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-display text-4xl font-medium text-foreground text-center mb-16">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: "Quality First",
                  description: "We source only the finest materials and partner with skilled artisans who take pride in their craft. Every stitch matters."
                },
                {
                  title: "Timeless Design",
                  description: "Our pieces are designed to transcend seasons and trends. We create wardrobe foundations that you'll love for years to come."
                },
                {
                  title: "Sustainable Practice",
                  description: "From eco-friendly packaging to ethical manufacturing, we're committed to minimizing our environmental footprint."
                }
              ].map((value, index) => (
                <div key={value.title} className="text-center space-y-4 opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                  <h3 className="font-display text-2xl font-medium text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-4">
                Help Center
              </p>
              <h2 className="font-display text-4xl font-medium text-foreground">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/50 transition-colors"
                  >
                    <span className="font-medium text-foreground">{faq.question}</span>
                    <ChevronDown 
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 animate-fade-in">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-4">
                Get In Touch
              </p>
              <h2 className="font-display text-4xl font-medium text-foreground">
                We're Here to Help
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Mail, title: "Email Us", info: "hello@maison.com", sub: "We reply within 24 hours" },
                { icon: Phone, title: "Call Us", info: "+1 (800) 123-4567", sub: "Mon-Fri, 9am-6pm EST" },
                { icon: MapPin, title: "Visit Us", info: "123 Fashion Ave", sub: "New York, NY 10001" },
                { icon: Clock, title: "Hours", info: "Mon-Sat: 10am-8pm", sub: "Sun: 11am-6pm" },
              ].map((contact, index) => (
                <div key={contact.title} className="text-center space-y-3 opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center mx-auto">
                    <contact.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="font-medium text-foreground">{contact.title}</h3>
                  <p className="text-foreground font-medium">{contact.info}</p>
                  <p className="text-sm text-muted-foreground">{contact.sub}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="hero" size="xl">
                Contact Support
              </Button>
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
