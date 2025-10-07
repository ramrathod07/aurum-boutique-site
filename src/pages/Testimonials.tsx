import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Bride",
      rating: 5,
      text: "The engagement ring I received from Lumière Jewels is absolutely breathtaking. The craftsmanship is impeccable, and it perfectly captures our love story. I couldn't be happier!",
      date: "2 weeks ago",
    },
    {
      name: "James Chen",
      role: "Anniversary Gift",
      rating: 5,
      text: "Purchased a diamond necklace for my wife's 25th anniversary. The quality exceeded my expectations, and the customer service was outstanding. She was moved to tears!",
      date: "1 month ago",
    },
    {
      name: "Emily Rodriguez",
      role: "Fashion Enthusiast",
      rating: 5,
      text: "I've collected several pieces from Lumière over the years. Each one is a masterpiece. The attention to detail and timeless designs make them my go-to for special occasions.",
      date: "3 months ago",
    },
    {
      name: "Michael Thompson",
      role: "Collector",
      rating: 5,
      text: "As a jewellery collector, I'm very particular about quality. Lumière Jewels never disappoints. Their pieces are investment-worthy and hold their value beautifully.",
      date: "2 months ago",
    },
    {
      name: "Priya Sharma",
      role: "Mother of the Bride",
      rating: 5,
      text: "Bought a beautiful set for my daughter's wedding. The team helped me choose pieces that complemented her dress perfectly. The service was warm and professional.",
      date: "1 week ago",
    },
    {
      name: "David Williams",
      role: "First-time Buyer",
      rating: 5,
      text: "I was nervous about buying such an expensive piece online, but the team made the process seamless. The ring arrived exactly as shown, and the packaging was luxurious.",
      date: "3 weeks ago",
    },
  ];

  const renderStars = (rating: number) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
      ));
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Customer Stories
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say
            about their experience with Lumière Jewels.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-luxury transition-all duration-300 animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">{renderStars(testimonial.rating)}</div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold mb-1">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground mb-2">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            Ready to Create Your Own Story?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have found their perfect piece
            at Lumière Jewels.
          </p>
          <a
            href="/products"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-hover transition-colors shadow-luxury"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
