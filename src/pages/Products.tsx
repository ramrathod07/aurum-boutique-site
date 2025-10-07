import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import productRing from "@/assets/product-ring.jpg";
import productNecklace from "@/assets/product-necklace.jpg";
import productEarrings from "@/assets/product-earrings.jpg";
import productBracelet from "@/assets/product-bracelet.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: "$2,499",
      description: "18K gold ring featuring a brilliant cut diamond",
      image: productRing,
      category: "Rings",
    },
    {
      id: 2,
      name: "Pearl Elegance Necklace",
      price: "$1,899",
      description: "Classic pearl strand with gold accents",
      image: productNecklace,
      category: "Necklaces",
    },
    {
      id: 3,
      name: "Gold Drop Earrings",
      price: "$1,299",
      description: "Ornate gold earrings with diamond details",
      image: productEarrings,
      category: "Earrings",
    },
    {
      id: 4,
      name: "Gemstone Bangle",
      price: "$3,299",
      description: "Luxury bangle with multi-colored gemstones",
      image: productBracelet,
      category: "Bracelets",
    },
    {
      id: 5,
      name: "Eternity Band",
      price: "$1,799",
      description: "Continuous diamonds set in platinum",
      image: productRing,
      category: "Rings",
    },
    {
      id: 6,
      name: "Sapphire Pendant",
      price: "$2,199",
      description: "Blue sapphire surrounded by diamonds",
      image: productNecklace,
      category: "Necklaces",
    },
    {
      id: 7,
      name: "Hoop Earrings",
      price: "$899",
      description: "Classic gold hoops with diamond pave",
      image: productEarrings,
      category: "Earrings",
    },
    {
      id: 8,
      name: "Tennis Bracelet",
      price: "$2,899",
      description: "Timeless diamond tennis bracelet",
      image: productBracelet,
      category: "Bracelets",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Our Products
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Discover our exquisite collection of handcrafted jewellery pieces,
            each designed to celebrate your unique style.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-luxury transition-all duration-300 animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary text-2xl font-bold">{product.price}</span>
                  <Link to={`/product/${product.id}`}>
                    <Button size="sm" className="group/btn">
                      View
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
