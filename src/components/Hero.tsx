import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                New Collection 2024
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.1] text-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Timeless
                <br />
                <span className="italic">Elegance</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Discover our curated selection of premium essentials, designed for the modern aesthetic.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button variant="hero" size="xl">
                Shop Collection
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="hero-outline" size="xl">
                View Lookbook
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
                alt="Featured collection"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-6 shadow-card animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <p className="text-sm text-muted-foreground">Starting from</p>
              <p className="font-display text-3xl font-semibold text-foreground">$89</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
