import { useState } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import productRing from "@/assets/product-ring.jpg";
import productNecklace from "@/assets/product-necklace.jpg";
import productEarrings from "@/assets/product-earrings.jpg";
import productBracelet from "@/assets/product-bracelet.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: productRing, alt: "Diamond Ring" },
    { src: productNecklace, alt: "Pearl Necklace" },
    { src: productEarrings, alt: "Gold Earrings" },
    { src: productBracelet, alt: "Gemstone Bracelet" },
    { src: productRing, alt: "Luxury Ring" },
    { src: productNecklace, alt: "Elegant Necklace" },
    { src: productEarrings, alt: "Designer Earrings" },
    { src: productBracelet, alt: "Diamond Bracelet" },
    { src: productRing, alt: "Wedding Ring" },
    { src: productNecklace, alt: "Statement Necklace" },
    { src: productEarrings, alt: "Drop Earrings" },
    { src: productBracelet, alt: "Gold Bangle" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Gallery
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A visual showcase of our finest creations, capturing the beauty
            and craftsmanship that define Lumière Jewels.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="break-inside-avoid overflow-hidden cursor-pointer hover:shadow-luxury transition-all duration-300 animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto transition-transform duration-500 hover:scale-105"
              />
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 bg-card rounded-full hover:bg-muted transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery item"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-luxury-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
