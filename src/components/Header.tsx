import { ShoppingBag, Search, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Input } from "./ui/input";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleCart, cartCount } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/new-arrivals');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Logo */}
        <Link to="/" className="font-display text-2xl md:text-3xl font-bold tracking-tight text-espresso">
          ĀraHouse
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/studio" className="text-sm font-medium hover:text-primary transition-colors">
            Studios
          </Link>
          <Link to="/new-arrivals" className="text-sm font-medium hover:text-primary transition-colors">
            New Arrivals
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="hidden md:flex items-center relative">
            <Input 
              type="text" 
              placeholder="Search..." 
              className="w-48 h-9 pr-8 bg-transparent border-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-2 text-muted-foreground hover:text-foreground">
              <Search className="w-4 h-4" />
            </button>
          </form>
          
          <Link to="/account" className="p-2 hover:bg-accent rounded-full transition-colors">
            <User className="h-5 w-5" />
          </Link>

          <button 
            onClick={toggleCart}
            className="relative p-2 hover:bg-accent rounded-full transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 h-4 w-4 bg-primary text-[10px] text-primary-foreground flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t p-4 bg-background space-y-4 animate-fade-in">
          <form onSubmit={handleSearch} className="flex items-center relative mb-4">
            <Input 
              type="text" 
              placeholder="Search..." 
              className="w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <nav className="flex flex-col gap-4">
            <Link to="/studio" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Studios</Link>
            <Link to="/new-arrivals" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>New Arrivals</Link>
            <Link to="/about" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
          </nav>
        </div>
      )}
    </header>
  );
};