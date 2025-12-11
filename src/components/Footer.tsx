import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  Shop: [
    { name: 'New Arrivals', href: '/' },
    { name: 'Best Sellers', href: '/' },
    { name: 'Sale', href: '/' },
    { name: 'All Products', href: '/' },
  ],
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/about' },
    { name: 'Press', href: '/about' },
    { name: 'Sustainability', href: '/about' },
  ],
  Help: [
    { name: 'Contact Us', href: '/about' },
    { name: 'FAQs', href: '/about' },
    { name: 'Shipping', href: '/about' },
    { name: 'Returns', href: '/about' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/about' },
    { name: 'Terms of Service', href: '/about' },
    { name: 'Cookies', href: '/about' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-6">
            <Link to="/" className="font-display text-2xl font-semibold tracking-tight text-foreground">
              MAISON
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Curating timeless pieces for the modern wardrobe since 2020.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="font-semibold text-foreground">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 MAISON. All rights reserved.
          </p>
          <div className="flex gap-6">
            <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="Visa" className="h-6 opacity-50" />
            <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="Mastercard" className="h-6 opacity-50" />
            <img src="https://cdn-icons-png.flaticon.com/128/349/349230.png" alt="American Express" className="h-6 opacity-50" />
            <img src="https://cdn-icons-png.flaticon.com/128/196/196566.png" alt="PayPal" className="h-6 opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
}
