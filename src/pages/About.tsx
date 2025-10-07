import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Gem, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Gem,
      title: "Premium Quality",
      description: "Every piece is crafted with the finest materials and gemstones",
    },
    {
      icon: Heart,
      title: "Passionate Craftsmanship",
      description: "Our artisans pour their heart into creating timeless pieces",
    },
    {
      icon: Award,
      title: "Award-Winning Designs",
      description: "Recognized globally for excellence in jewellery design",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction and trust are our highest priorities",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Founded in 1985, Lumière Jewels has been at the forefront of luxury jewellery design,
            blending timeless elegance with contemporary sophistication.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-up">
            <h2 className="font-playfair text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              To create extraordinary jewellery pieces that celebrate life's most precious moments.
              We believe that every piece of jewellery tells a story, and we're honored to be part
              of yours.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our master craftsmen combine traditional techniques with innovative design to produce
              pieces that are not just accessories, but heirlooms to be treasured for generations.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 h-96 rounded-2xl animate-scale-in" />
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="text-center hover:shadow-luxury transition-all duration-300 animate-scale-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6">Our Master Craftsmen</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
            Behind every piece is a team of dedicated artisans with decades of experience,
            combining age-old techniques with modern innovation.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-luxury transition-all duration-300">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 h-64" />
                <CardContent className="p-6 text-center">
                  <h3 className="font-playfair text-xl font-semibold mb-1">Master Artisan {i}</h3>
                  <p className="text-muted-foreground text-sm">25+ Years Experience</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
