"use client";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Spécialités", href: "#specialites" },
  { name: "Philosophie", href: "#philosophie" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#FAF9F7]/90 backdrop-blur-md border-b border-stone-200/50"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo - Minimal */}
          <Link
            href="/"
            className="font-serif text-lg text-slate-800 tracking-tight"
          >
            Dr Philippe Le Page
          </Link>

          {/* Navigation Desktop - Minimal */}
          <nav className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-slate-500 hover:text-slate-800 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA - Pill minimal */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+33467920820"
              className="text-sm text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              04 67 92 08 20
            </a>
            <Button
              asChild
              size="sm"
              className="bg-slate-800 text-white hover:bg-slate-700 rounded-full px-5 font-normal"
            >
              <a href="#contact">Prendre RDV</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-800"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-stone-200/50 animate-fade">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base text-slate-500 hover:text-slate-800 transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+33467920820"
                className="text-base text-slate-800 font-medium pt-4 border-t border-stone-200/50 mt-2"
              >
                04 67 92 08 20
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}

