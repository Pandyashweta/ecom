import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-background/60">
              Stay Connected
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-medium">
              Join Our Circle
            </h2>
            <p className="text-background/70 max-w-md mx-auto">
              Subscribe to receive exclusive access to new arrivals, special offers, and style inspiration.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 h-14 px-6 rounded-md bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-background/40 transition-colors"
              required
            />
            <Button
              type="submit"
              variant="default"
              size="xl"
              className="bg-background text-foreground hover:bg-background/90"
            >
              Subscribe
            </Button>
          </form>

          <p className="text-xs text-background/50">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}
