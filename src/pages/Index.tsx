import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Categories } from '@/components/Categories';
import { ProductGrid } from '@/components/ProductGrid';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <ProductGrid />
        <Newsletter />
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Index;
