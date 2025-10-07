import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
  const message = encodeURIComponent("Hello! I'm interested in your jewellery collection.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 animate-scale-in"
    >
      <Button
        size="lg"
        className="rounded-full h-14 w-14 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 bg-[#25D366] hover:bg-[#20BD5A] text-white"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
