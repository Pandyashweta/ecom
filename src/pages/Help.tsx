import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Help = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <Header />
      <main className="flex-1 py-20 px-4 md:px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-display text-espresso mb-8 text-center">Help Center</h1>
        
        <div className="space-y-12">
            <section>
                <h2 className="text-2xl font-display mb-4">Contact Us</h2>
                <p className="text-muted-foreground">Email: support@arahouse.com</p>
                <p className="text-muted-foreground">Phone: +91 123 456 7890</p>
            </section>

            <section>
                <h2 className="text-2xl font-display mb-6">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is your return policy?</AccordionTrigger>
                        <AccordionContent>
                            We offer a 30-day return policy for all unworn items in their original condition with tags attached.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How long does shipping take?</AccordionTrigger>
                        <AccordionContent>
                            Standard shipping takes 5-7 business days. Express shipping is available.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we ship to select countries. Shipping costs are calculated at checkout.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};
export default Help;