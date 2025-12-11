import { Plus, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart, Product } from '@/contexts/CartContext';
import { useState } from 'react';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div
      className="group relative opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-card mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        
        {/* Overlay Actions */}
        <div className={`absolute inset-0 bg-foreground/5 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <Button
              variant="default"
              className="flex-1 bg-background/95 text-foreground hover:bg-background backdrop-blur-sm"
              onClick={handleAddToCart}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Wishlist Button */}
        <button
          className="absolute top-4 right-4 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-background hover:shadow-soft"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart
            className={`h-5 w-5 transition-all duration-300 ${isLiked ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
          />
        </button>

        {/* Category Badge */}
        <span className="absolute top-4 left-4 text-xs font-medium tracking-wider uppercase bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-muted-foreground">
          {product.category}
        </span>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-lg font-semibold text-foreground">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
