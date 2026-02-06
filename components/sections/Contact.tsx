import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="bg-slate-800 text-white py-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-16 animate-reveal">
            <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-6">
              Prochaine Étape
            </p>
            
            {/* Phone number - HUGE */}
            <a
              href="tel:+33467920820"
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white hover:text-[#A3B18A] transition-colors duration-500 block mb-8"
            >
              04 67 92 08 20
            </a>

            <p className="text-xl text-white/80 mb-10">
              Contactez-moi directement pour échanger<br className="hidden sm:block" /> 
              sur vos besoins et planifier votre consultation.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-slate-800 hover:bg-[#A3B18A] hover:text-slate-800 rounded-full px-10 h-14 text-base font-normal transition-all duration-300"
            >
              <a href="tel:+33467920820" className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </a>
            </Button>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-white/20 mx-auto mb-16" />

          {/* Address */}
          <div className="animate-reveal" style={{ animationDelay: "0.1s" }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>5 Place des Martyrs de la Résistance</span>
              </div>
              <span className="hidden sm:block">•</span>
              <span>34000 Montpellier</span>
            </div>
            
            <a
              href="https://maps.google.com/?q=5+Place+des+Martyrs+de+la+Résistance+34000+Montpellier"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sm text-white/40 hover:text-[#A3B18A] transition-colors underline underline-offset-4"
            >
              Ouvrir dans Google Maps
            </a>
          </div>

          {/* Note */}
          <p className="mt-16 text-sm text-white/40 max-w-md mx-auto animate-reveal" style={{ animationDelay: "0.2s" }}>
            Si je ne réponds pas, c&apos;est que je suis en consultation. 
            Laissez un message, je vous rappelle personnellement.
          </p>
        </div>
      </Container>
    </Section>
  );
}

