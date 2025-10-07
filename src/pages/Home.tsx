import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-jewellery.jpg";
import productRing from "@/assets/product-ring.jpg";
import productNecklace from "@/assets/product-necklace.jpg";
import productEarrings from "@/assets/product-earrings.jpg";
import productBracelet from "@/assets/product-bracelet.jpg";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: "$2,499",
      image: productRing,
    },
    {
      id: 2,
      name: "Pearl Elegance Necklace",
      price: "$1,899",
      image: productNecklace,
    },
    {
      id: 3,
      name: "Gold Drop Earrings",
      price: "$1,299",
      image: productEarrings,
    },
    {
      id: 4,
      name: "Gemstone Bangle",
      price: "$3,299",
      image: productBracelet,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Timeless Elegance
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover exquisite handcrafted jewellery that celebrates your unique story
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/products">
              <Button size="lg" className="group shadow-luxury hover:shadow-luxury-lg">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-2">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Featured Collection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked pieces that embody luxury and sophistication
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-luxury transition-all duration-300 animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-playfair text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-primary text-2xl font-bold mb-4">{product.price}</p>
                <Link to={`/product/${product.id}`}>
                  <Button variant="outline" className="w-full group/btn">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button size="lg" variant="outline">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6">
            Experience Luxury Craftsmanship
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Each piece is meticulously crafted by master artisans using the finest materials
          </p>
          <Link to="/contact">
            <Button size="lg" className="shadow-luxury">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
