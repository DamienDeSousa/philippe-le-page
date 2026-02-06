import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Droplet, Sparkles, Zap } from "lucide-react";

const specialties = [
  {
    icon: Zap,
    title: "Épilation Laser",
    description:
      "Traitement définitif adapté à tous les types de peaux, des plus claires aux plus foncées.",
    treatments: [
      "Épilation visage",
      "Épilation corps complet",
      "Peaux mates et foncées",
    ],
  },
  {
    icon: Droplet,
    title: "Injections Anti-Âge",
    description:
      "Acide hyaluronique pour restaurer les volumes et atténuer les signes du temps naturellement.",
    treatments: [
      "Comblement des rides",
      "Restauration des volumes",
      "Hydratation profonde",
    ],
  },
  {
    icon: Sparkles,
    title: "Qualité de Peau",
    description:
      "Traitements laser avancés pour sublimer votre teint et corriger les imperfections.",
    treatments: [
      "Traitement des taches",
      "Texture et pores",
      "Éclat du teint",
    ],
  },
];

export function Specialties() {
  return (
    <Section id="specialites" className="bg-[#FAF9F7] py-32">
      <Container>
        {/* Section header */}
        <div className="text-center mb-20 animate-reveal">
          <p className="text-sm text-slate-500 tracking-[0.2em] uppercase mb-4">
            L&apos;Offre de Soins
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
            Mes Spécialités
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Des solutions médicales innovantes avec une approche naturelle et sécurisée.
          </p>
        </div>

        {/* Grid - Simple, spacious */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <div
                key={specialty.title}
                className="group p-8 lg:p-10 rounded-3xl bg-white/50 border border-stone-200/50 hover:bg-white hover:shadow-sm transition-all duration-500 animate-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon - Minimal */}
                <div className="w-12 h-12 rounded-2xl bg-[#F5F3EF] flex items-center justify-center mb-8 group-hover:bg-[#A3B18A]/20 transition-colors">
                  <Icon className="w-6 h-6 text-slate-800" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl text-slate-800 mb-4">
                  {specialty.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 leading-relaxed mb-8">
                  {specialty.description}
                </p>

                {/* Treatments - Minimal list */}
                <ul className="space-y-3">
                  {specialty.treatments.map((treatment) => (
                    <li
                      key={treatment}
                      className="flex items-center gap-3 text-sm text-slate-800"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#A3B18A]" />
                      {treatment}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
