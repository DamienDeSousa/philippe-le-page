import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Clock, FileText, Heart } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    number: "01",
    title: "Le Résultat Naturel",
    quote: "Sublimer sans transformer",
    description:
      "Mon objectif n'est pas de changer votre visage, mais de révéler la meilleure version de vous-même. Chaque geste est pensé pour un résultat harmonieux et indétectable.",
  },
  {
    icon: Clock,
    number: "02",
    title: "L'Écoute et le Temps",
    quote: "Votre histoire avant tout",
    description:
      "Chaque consultation commence par un temps d'échange approfondi. Comprendre vos attentes, votre mode de vie et vos préoccupations est la base d'un traitement réussi.",
  },
  {
    icon: FileText,
    number: "03",
    title: "La Transparence",
    quote: "Clarté et honnêteté",
    description:
      "Je vous explique chaque étape, les résultats attendus et les alternatives possibles. Vous prenez vos décisions en toute connaissance de cause.",
  },
];

export function Philosophy() {
  return (
    <Section id="philosophie" className="bg-gradient-to-b from-[#FAF9F7] to-[#F5F3EF] py-32">
      <Container>
        {/* Section header */}
        <div className="text-center mb-20 animate-reveal">
          <p className="text-sm text-slate-500 tracking-[0.2em] uppercase mb-4">
            L&apos;Approche
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
            Ma Philosophie
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Une médecine esthétique fondée sur trois piliers essentiels.
          </p>
        </div>

        {/* Pillars - Vertical layout */}
        <div className="max-w-4xl mx-auto space-y-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="grid md:grid-cols-[100px,1fr] gap-8 items-start animate-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Number */}
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <span className="font-serif text-4xl text-[#C4B5A6]/40">
                    {pillar.number}
                  </span>
                  <Icon className="w-6 h-6 text-[#A3B18A]" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl md:text-3xl text-slate-800">
                    {pillar.title}
                  </h3>
                  <p className="font-serif text-lg text-[#A3B18A] italic">
                    &ldquo;{pillar.quote}&rdquo;
                  </p>
                  <p className="text-slate-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central quote */}
        <div className="max-w-3xl mx-auto mt-24 pt-16 border-t border-stone-200 text-center animate-reveal">
          <blockquote className="font-serif text-2xl md:text-3xl text-slate-800 font-light italic leading-relaxed">
            &ldquo;La beauté est une promesse de bonheur.&rdquo;
          </blockquote>
          <p className="mt-6 text-slate-500">— Stendhal</p>
        </div>
      </Container>
    </Section>
  );
}
