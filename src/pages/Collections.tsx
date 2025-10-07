import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Collections = () => {
  const collections = [
    {
      name: "Rings",
      description: "From elegant solitaires to elaborate statement pieces",
      count: "24 pieces",
      color: "from-primary/30 to-primary/10",
    },
    {
      name: "Necklaces",
      description: "Timeless chains and stunning pendants",
      count: "18 pieces",
      color: "from-accent/30 to-accent/10",
    },
    {
      name: "Earrings",
      description: "Delicate studs to dramatic chandeliers",
      count: "32 pieces",
      color: "from-gold-light/40 to-gold-light/10",
    },
    {
      name: "Bracelets",
      description: "Bangles, cuffs, and tennis bracelets",
      count: "16 pieces",
      color: "from-primary/30 to-primary/10",
    },
    {
      name: "Bangles",
      description: "Traditional and contemporary designs",
      count: "12 pieces",
      color: "from-accent/30 to-accent/10",
    },
    {
      name: "Wedding Collection",
      description: "Perfect pieces for your special day",
      count: "28 pieces",
      color: "from-gold-light/40 to-gold-light/10",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Our Collections
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore our carefully curated collections, each designed to capture
            the essence of luxury and timeless beauty.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link key={collection.name} to="/products">
              <Card
                className={`group overflow-hidden hover:shadow-luxury transition-all duration-300 cursor-pointer animate-scale-in border-border/50 h-full`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-48 bg-gradient-to-br ${collection.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-playfair text-2xl font-bold">{collection.name}</h3>
                    <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-muted-foreground mb-4">{collection.description}</p>
                  <p className="text-sm font-medium text-primary">{collection.count}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-16 rounded-2xl">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our team can create custom pieces tailored to your vision
          </p>
          <Link to="/contact">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-hover transition-colors shadow-luxury">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collections;
