import { Link } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { productsData } from '@/data/products';

export function ProductGrid() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary">
            Curated Selection
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-medium text-foreground">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Each piece is thoughtfully designed with premium materials and timeless silhouettes
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {productsData.map((product, index) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard product={product} index={index} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
