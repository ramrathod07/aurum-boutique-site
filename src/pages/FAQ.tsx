import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      category: "Ordering & Shipping",
      questions: [
        {
          q: "Do you offer free shipping?",
          a: "Yes, we offer complimentary shipping on all orders worldwide. For orders over $5,000, we provide expedited shipping and full insurance at no additional cost.",
        },
        {
          q: "How long does delivery take?",
          a: "Standard delivery takes 3-5 business days domestically and 7-10 business days internationally. Expedited options are available at checkout for faster delivery.",
        },
        {
          q: "Can I track my order?",
          a: "Absolutely! Once your order ships, you'll receive a tracking number via email. You can also track your order status in your account dashboard.",
        },
      ],
    },
    {
      category: "Product Information",
      questions: [
        {
          q: "Are your diamonds certified?",
          a: "Yes, all our diamonds come with GIA (Gemological Institute of America) certification, ensuring authenticity and quality. Each piece includes a detailed certificate.",
        },
        {
          q: "What materials do you use?",
          a: "We use only the finest materials including 18K gold, platinum, genuine diamonds, and precious gemstones. All our pieces meet the highest quality standards.",
        },
        {
          q: "Can I customize a piece?",
          a: "Yes! We offer custom design services. Our expert team will work with you to create a unique piece that perfectly matches your vision. Contact us to schedule a consultation.",
        },
      ],
    },
    {
      category: "Care & Maintenance",
      questions: [
        {
          q: "How do I care for my jewellery?",
          a: "Store pieces separately in soft pouches, avoid exposure to chemicals and harsh cleaning agents, and clean gently with a soft cloth. We recommend professional cleaning annually.",
        },
        {
          q: "Do you offer repairs?",
          a: "Yes, we provide comprehensive repair services for all our pieces. Additionally, we offer complimentary inspection and cleaning services for the lifetime of your jewellery.",
        },
        {
          q: "What is your warranty policy?",
          a: "All our pieces come with a lifetime warranty covering manufacturing defects. We also offer extended protection plans for accidental damage and loss.",
        },
      ],
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 30-day return policy for unworn items in original condition. Custom pieces have a 14-day approval period with free modifications within that timeframe.",
        },
        {
          q: "Can I exchange my purchase?",
          a: "Yes, exchanges are accepted within 30 days of purchase for items of equal or greater value. The item must be unworn and in original condition with all documentation.",
        },
        {
          q: "How do I initiate a return?",
          a: "Contact our customer service team via email or phone. We'll provide a prepaid return label and guide you through the process. Refunds are processed within 5-7 business days of receipt.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Find answers to common questions about our products, services, and policies.
            Can't find what you're looking for? Feel free to contact us.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((section, sectionIndex) => (
            <Card
              key={section.category}
              className="animate-slide-up border-border/50"
              style={{ animationDelay: `${sectionIndex * 0.1}s` }}
            >
              <CardContent className="p-8">
                <h2 className="font-playfair text-2xl font-bold mb-6 text-primary">
                  {section.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {section.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${sectionIndex}-${index}`}
                      className="border border-border rounded-lg px-4"
                    >
                      <AccordionTrigger className="hover:no-underline hover:text-primary transition-colors">
                        <span className="text-left font-medium">{item.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <Card className="mt-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-border/50">
          <CardContent className="p-12 text-center">
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="font-playfair text-3xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our customer service team is here to help. Reach out to us and we'll
              respond within 24 hours.
            </p>
            <Link to="/contact">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-hover transition-colors shadow-luxury">
                Contact Us
              </button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
