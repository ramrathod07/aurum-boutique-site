import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Heart, Share2, Shield, Truck, Award } from "lucide-react";
import productRing from "@/assets/product-ring.jpg";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();

  const product = {
    id: id,
    name: "Diamond Solitaire Ring",
    price: "$2,499",
    description: "Exquisite 18K gold ring featuring a brilliant cut diamond. This timeless piece embodies elegance and sophistication, perfect for engagements or special occasions.",
    material: "18K White Gold",
    gemstone: "1.5ct Diamond (VS1 Clarity, F Color)",
    dimensions: "Band Width: 2mm",
    image: productRing,
  };

  const features = [
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "Protected for life",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On all orders",
    },
    {
      icon: Award,
      title: "Certified Authentic",
      description: "GIA certified",
    },
  ];

  const handleAddToCart = () => {
    toast.success("Added to cart!", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlist = () => {
    toast.success("Added to wishlist!");
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>

        {/* Product Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="animate-fade-in">
            <Card className="overflow-hidden border-border/50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>

          {/* Details */}
          <div className="animate-slide-up">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-primary text-4xl font-bold mb-6">{product.price}</p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Specifications */}
            <Card className="mb-8 border-border/50">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-4">Specifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Material</span>
                    <span className="font-medium">{product.material}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Gemstone</span>
                    <span className="font-medium">{product.gemstone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dimensions</span>
                    <span className="font-medium">{product.dimensions}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <Button size="lg" className="flex-1 shadow-luxury" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" onClick={handleWishlist}>
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="flex justify-center mb-2">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-medium text-sm mb-1">{feature.title}</p>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
