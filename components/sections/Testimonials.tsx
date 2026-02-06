import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "J'ai apprécié que ce soit le docteur lui-même qui applique la crème anesthésiante et réalise l'intervention laser. On se sent en confiance dès le premier instant.",
    author: "M. S.",
    age: 42,
    treatment: "Épilation Laser",
  },
  {
    quote:
      "Une écoute exceptionnelle. Le Dr Le Page prend le temps d'expliquer chaque étape et répond à toutes mes questions. Je ne me suis jamais sentie pressée.",
    author: "L. D.",
    age: 35,
    treatment: "Injections",
  },
  {
    quote:
      "Enfin un médecin qui réalise tout de A à Z ! Le résultat est naturel et exactement ce que je souhaitais. Je recommande vivement.",
    author: "C. M.",
    age: 48,
    treatment: "Qualité de Peau",
  },
];

export function Testimonials() {
  return (
    <Section className="bg-[#FAF9F7] py-32">
      <Container>
        {/* Section header */}
        <div className="text-center mb-20 animate-reveal">
          <p className="text-sm text-slate-500 tracking-[0.2em] uppercase mb-4">
            Témoignages
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
            Ils Me Font Confiance
          </h2>
          <Badge variant="outline" className="text-[#C4B5A6] border-[#C4B5A6]/30 bg-[#F5F3EF]">
            À remplacer par vrais témoignages
          </Badge>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 lg:p-10 rounded-3xl bg-white/50 border border-stone-200/50 animate-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#C4B5A6] text-[#C4B5A6]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-800 leading-relaxed mb-8 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="pt-6 border-t border-stone-200/50">
                <p className="font-medium text-slate-800">
                  {testimonial.author}, {testimonial.age} ans
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  {testimonial.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
