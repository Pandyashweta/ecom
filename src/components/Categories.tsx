const categories = [
  {
    name: "New Arrivals",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
    count: 48
  },
  {
    name: "Outerwear",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    count: 24
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=80",
    count: 36
  }
];

export function Categories() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary">
            Browse by Category
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-medium text-foreground">
            Shop Collections
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#"
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-background">
                <h3 className="font-display text-2xl lg:text-3xl font-medium mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-background/80">
                  {category.count} products
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <svg className="h-5 w-5 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
