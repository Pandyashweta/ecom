import { useState, useEffect } from 'react';
import { ArrowRight, Gem, Globe, Leaf, Palette } from "lucide-react";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';
import { Link } from "react-router-dom";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    "https://images.unsplash.com/photo-1558545540-527c593c2dfd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1568371600021-36b968768c30?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1730304538506-d52409007b4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2A0A0A] font-sans flex flex-col">
      <Header />
      <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 py-20">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt="Hero background"
                className="w-full h-full object-cover filter blur-sm scale-105"
              />
              <div className="absolute inset-0 bg-[#FAF9F6]/80" />
            </div>
          ))}
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-[#2A0A0A] leading-tight">
            ĀraHouse A House of Craft, Culture, and Contemporary Design
          </h1>
          <div className="space-y-2 text-lg md:text-xl text-[#2A0A0A]/70 font-light">
            <p>Where traditional artistry meets modern minimalism.</p>
            <p>Where heritage is preserved, and design evolves.</p>
            <p>Where every piece is crafted with purpose.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link to="/studio">
              <button className="px-8 py-3 bg-[#2A0A0A] text-white rounded-md hover:bg-[#2A0A0A]/90 transition-colors duration-300">
                Discover the Studios
              </button>
            </Link>
            <Link to="/new-arrivals">
              <button className="px-8 py-3 border border-[#2A0A0A] text-[#2A0A0A] rounded-md hover:bg-[#2A0A0A]/5 transition-colors duration-300">
                Shop the Collection
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Crafted With Intention */}
      <section className="pt-24 pb-12 px-4 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-display text-[#2A0A0A]">Crafted With Intention</h2>
            <p className="text-[#2A0A0A]/70 text-lg leading-relaxed">
              ĀraHouse is built around the belief that true beauty lies in authenticity. Each product is created through collaboration with craft communities across India weaving, dyeing, embroidery, and metalwork traditions shaped by generations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Handloom Weavers",
                description: "Preserving regional weaving traditions through thoughtfully sourced textiles that form the base of our silhouettes.",
                image: "https://images.unsplash.com/photo-1746737198844-b9c9f4189352?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                title: "Artisan Embroiderers",
                description: "Bringing precision, texture, and heritage motifs into contemporary forms with techniques passed down through families.",
                image: "https://images.unsplash.com/photo-1657470036063-c7e49da31393?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                title: "Jewelry Metalsmiths",
                description: "Crafting pieces in silver, brass, and gold-plated metals using age-old methods of shaping, engraving, and setting.",
                image: "https://images.unsplash.com/photo-1742406796354-796c88bdfa40?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                title: "Natural Dye and Craft Clusters",
                description: "Working with sustainable dyeing practices, block printers, and regional craft specialists to ensure each product carries the imprint of its origin.",
                image: "https://images.unsplash.com/photo-1661932908422-aeb3c162bd51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            ].map((item, i) => (
              <div key={i} className="aspect-[3/4] bg-sand/20 rounded-lg overflow-hidden relative group cursor-pointer">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A0A0A]/90 via-[#2A0A0A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-white font-display text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-[#2A0A0A]/80 italic font-display text-lg">
            Every piece carries the quiet strength of handmade artistry.
          </p>
        </div>
      </section>

      {/* Decorative Separator */}
      <div className="py-8 text-center">
        <p className="text-2xl text-[#2A0A0A]/40 font-serif">⚬──────────✧──────────⚬</p>
      </div>

      {/* The Studios */}
      <section className="pt-12 pb-24 px-4 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display text-[#2A0A0A] mb-4">The Studios of ĀraHouse</h2>
            <div className="h-1 w-20 bg-[#2A0A0A] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-[#2A0A0A]/10 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#2A0A0A]/20">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#2A0A0A]/5 text-2xl font-display text-[#2A0A0A] group-hover:bg-[#2A0A0A] group-hover:text-white transition-colors duration-300">
                R
              </div>
              <h3 className="mb-2 text-2xl font-display text-[#2A0A0A]">Ruhé Studios</h3>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#2A0A0A]/60">Fusion for Every Body</p>
              <p className="text-[#2A0A0A]/70 leading-relaxed">
                Indo Western silhouettes enriched with Indian craftsmanship. Designed for comfort, versatility, and inclusive fit. Ruhé redefines everyday luxury with timeless, contemporary style.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-[#2A0A0A]/10 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#2A0A0A]/20">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#2A0A0A]/5 text-2xl font-display text-[#2A0A0A] group-hover:bg-[#2A0A0A] group-hover:text-white transition-colors duration-300">
                S
              </div>
              <h3 className="mb-2 text-2xl font-display text-[#2A0A0A]">Sutrā Studios</h3>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#2A0A0A]/60">Rooted in Heritage</p>
              <p className="text-[#2A0A0A]/70 leading-relaxed">
                A tribute to India’s textile traditions. Sutrā’s collections honor regional crafts such as handloom weaving, block printing, Bandhani, Kantha, Chikankari, and more.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-[#2A0A0A]/10 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#2A0A0A]/20">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#2A0A0A]/5 text-2xl font-display text-[#2A0A0A] group-hover:bg-[#2A0A0A] group-hover:text-white transition-colors duration-300">
                K
              </div>
              <h3 className="mb-2 text-2xl font-display text-[#2A0A0A]">Kritá Studios</h3>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#2A0A0A]/60">Handcrafted Expression</p>
              <p className="text-[#2A0A0A]/70 leading-relaxed">
                Jewelry designed as art, emotion, and legacy. Kritá brings sentiment, symbolism, and refined craftsmanship into every piece.
              </p>
            </div>
          </div>
          
          <div className="text-center pt-8">
            <button className="inline-flex items-center gap-2 text-[#2A0A0A] hover:text-[#2A0A0A]/70 transition-colors text-lg font-medium group">
              Explore the Studios <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-4 bg-[#2A0A0A] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-16">Our Philosophy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group space-y-4 rounded-lg border border-transparent p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/5 md:text-left">
              <div className="flex justify-center md:justify-start">
                <Palette className="w-10 h-10 text-[#FAF9F6]" />
              </div>
              <h3 className="text-xl font-display text-[#FAF9F6]">Design With Purpose</h3>
              <p className="text-[#FAF9F6]/80 leading-relaxed">Every collection begins with research, storytelling, and material exploration ensuring that each piece feels intentional.</p>
            </div>
            <div className="group space-y-4 rounded-lg border border-transparent p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/5 md:text-left">
              <div className="flex justify-center md:justify-start">
                <Globe className="w-10 h-10 text-[#FAF9F6]" />
              </div>
              <h3 className="text-xl font-display text-[#FAF9F6]">Craftsmanship First</h3>
              <p className="text-[#FAF9F6]/80 leading-relaxed">We collaborate directly with artisans, enabling fair practices and preserving traditional techniques.</p>
            </div>
            <div className="group space-y-4 rounded-lg border border-transparent p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/5 md:text-left">
              <div className="flex justify-center md:justify-start">
                <Gem className="w-10 h-10 text-[#FAF9F6]" />
              </div>
              <h3 className="text-xl font-display text-[#FAF9F6]">Modern Aesthetic</h3>
              <p className="text-[#FAF9F6]/80 leading-relaxed">Minimal, refined, and rooted. Our design language balances heritage detailing with global sensibilities.</p>
            </div>
            <div className="group space-y-4 rounded-lg border border-transparent p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/5 md:text-left">
              <div className="flex justify-center md:justify-start">
                <Leaf className="w-10 h-10 text-[#FAF9F6]" />
              </div>
              <h3 className="text-xl font-display text-[#FAF9F6]">Sustainable Practices</h3>
              <p className="text-[#FAF9F6]/80 leading-relaxed">Small-batch production, responsible sourcing, and timeless silhouettes reduce waste.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="relative py-32 px-4 bg-[#F5F3EF]">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1600&q=80" alt="Featured background" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center">
          <h2 className="text-3xl font-display text-[#2A0A0A] md:text-4xl">Featured Collections</h2>
          <p className="text-lg text-[#2A0A0A]/70">
            A curated selection of clothing and jewelry from our studios. Updated seasonally to highlight craft-driven design and signature silhouettes.
          </p>
          <Link to="/new-arrivals">
            <button className="rounded-md bg-[#2A0A0A] px-10 py-4 text-white shadow-lg transition-colors duration-300 hover:bg-[#2A0A0A]/90 hover:shadow-xl">
              Shop New Arrivals
            </button>
          </Link>
        </div>
      </section>

      {/* Made for Real Lives */}
      <section className="py-24 px-4 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-white aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=800&q=80" alt="Lifestyle" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-display text-[#2A0A0A] leading-tight">Made for Real Lives</h2>
            <div className="space-y-4 text-lg text-[#2A0A0A]/70">
              <p>
                ĀraHouse pieces are built for everyday wear, celebration, travel, and meaningful moments.
              </p>
              <p>
                Durable materials. Refined details. Versatile styling.
              </p>
            </div>
            <p className="text-2xl font-display text-[#2A0A0A] italic">
              "Fashion that evolves with you, not against you."
            </p>
            <button className="text-[#2A0A0A] font-medium hover:text-[#2A0A0A]/70 transition-colors underline underline-offset-4">
              Explore the Collection
            </button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-4 bg-white text-center border-t border-[#2A0A0A]/10">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-display text-[#2A0A0A]">Explore More</h2>
          <p className="text-[#2A0A0A]/70 text-lg">
            Our world is built on design, culture, and craft.
            Learn more about the philosophy, studios, and people behind ĀraHouse.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Link to="/about" className="text-[#2A0A0A] hover:text-[#2A0A0A]/70 transition-colors font-medium">About ĀraHouse</Link>
            <span className="hidden sm:inline text-[#2A0A0A]/30">|</span>
            <Link to="/studio" className="text-[#2A0A0A] hover:text-[#2A0A0A]/70 transition-colors font-medium">Visit the Studio Page</Link>
            <span className="hidden sm:inline text-[#2A0A0A]/30">|</span>
            <Link to="/new-arrivals" className="text-[#2A0A0A] hover:text-[#2A0A0A]/70 transition-colors font-medium">Shop by Category</Link>
          </div>
        </div>
      </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Index;