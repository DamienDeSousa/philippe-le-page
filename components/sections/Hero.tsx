"use client";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F7] via-[#F5F3EF] to-[#FAF9F7]" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12 py-24">
          {/* Badge très discret */}
          <p className="text-slate-500 text-sm tracking-[0.2em] uppercase animate-fade">
            100% Réalisé par le Médecin
          </p>

          {/* Headline principale - Ultra léger */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-slate-800 leading-[1.1] tracking-tight animate-reveal">
            Un médecin,
            <br />
            <span className="text-[#C4B5A6]">zéro intermédiaire</span>
          </h1>

          {/* Sous-titre minimal */}
          <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed animate-reveal" style={{ animationDelay: "0.1s" }}>
            Du diagnostic au soin final, une prise en charge complète 
            et personnalisée par le Dr Philippe Le Page.
          </p>

          {/* CTA unique - Pill minimal */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-reveal" style={{ animationDelay: "0.2s" }}>
            <Button
              asChild
              size="lg"
              className="bg-slate-800 text-white hover:bg-slate-700 rounded-full px-8 h-14 text-base font-normal transition-all duration-300 group"
            >
              <a href="tel:+33467920820" className="flex items-center gap-3">
                Prendre rendez-vous
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Scroll indicator subtil */}
          <div className="pt-16 animate-reveal" style={{ animationDelay: "0.3s" }}>
            <div className="w-px h-16 bg-gradient-to-b from-[#C4B5A6]/50 to-transparent mx-auto" />
          </div>
        </div>
      </Container>
    </section>
  );
}

