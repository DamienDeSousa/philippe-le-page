import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import Image from "next/image";

export function MedicalProfile() {
  return (
    <Section className="bg-[#F5F3EF] py-32">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20 animate-reveal">
            <p className="text-sm text-slate-500 tracking-[0.2em] uppercase mb-4">
              Votre Praticien
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-slate-800">
              Dr Philippe Le Page
            </h2>
          </div>

          {/* Layout: Photo + Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden animate-reveal">
              <Image
                src="/images/dr-le-page.jpg"
                alt="Dr Philippe Le Page"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="space-y-10 animate-reveal" style={{ animationDelay: "0.1s" }}>
              {/* Titre */}
              <div>
                <p className="text-sm text-[#A3B18A] tracking-wider uppercase mb-3">
                  Médecine Esthétique & Morphologique
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-slate-800 font-light leading-relaxed">
                  Spécialiste Lasers Médicaux
                </h3>
              </div>

              {/* Description */}
              <p className="text-lg text-slate-500 leading-relaxed">
                Médecin diplômé depuis plus de 15 ans, le Dr Philippe Le Page 
                a choisi de se consacrer entièrement à la médecine esthétique. 
                Une passion pour l&apos;excellence qui se traduit par une prise 
                en charge personnalisée de chaque patient.
              </p>

              {/* Credentials - Minimal list */}
              <div className="space-y-4 pt-6 border-t border-stone-200">
                <div className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A3B18A]" />
                  <span className="text-slate-800">D.U. Médecine Morphologique et Anti-Âge</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A3B18A]" />
                  <span className="text-slate-800">Formation Lasers Médicaux Certifiée</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A3B18A]" />
                  <span className="text-slate-800">Membre de la SFME</span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="pt-8 border-t border-stone-200">
                <p className="font-serif text-xl text-slate-800 italic leading-relaxed">
                  &ldquo;Chaque patient mérite une attention exclusive. 
                  C&apos;est pourquoi je réalise personnellement l&apos;intégralité 
                  de vos soins.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
