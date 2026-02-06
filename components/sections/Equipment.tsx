import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Award, Shield } from "lucide-react";

const equipment = [
  {
    icon: Shield,
    title: "Lasers Candela",
    badge: "Gold Standard",
    description:
      "Leader mondial des technologies laser médicales, reconnu pour sa fiabilité et son efficacité sur tous types de peaux.",
  },
  {
    icon: Award,
    title: "Injections Premium",
    badge: "Certifié CE",
    description:
      "Utilisation exclusive de produits certifiés CE et homologués, garantissant qualité et traçabilité optimales.",
  },
];

export function Equipment() {
  return (
    <Section className="bg-[#F5F3EF] py-32">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-reveal">
            <p className="text-sm text-slate-500 tracking-[0.2em] uppercase mb-4">
              Plateau Technique
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-slate-800 mb-6">
              Équipements Dernière Génération
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Votre sécurité est ma priorité absolue.
            </p>
          </div>

          {/* Equipment list - Simple */}
          <div className="space-y-8">
            {equipment.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-6 p-6 rounded-2xl bg-[#FAF9F7] border border-stone-200/50 animate-reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#A3B18A]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-serif text-xl text-slate-800">
                        {item.title}
                      </h3>
                      <span className="text-xs text-[#A3B18A] bg-[#A3B18A]/10 px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
