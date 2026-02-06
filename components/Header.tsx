"use client";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type MenuState = "closed" | "opening" | "closing";

const navigation = [
  { name: "Spécialités", href: "#specialites" },
  { name: "Philosophie", href: "#philosophie" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuState, setMenuState] = useState<MenuState>("closed");
  const closingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isMenuVisible = menuState !== "closed";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll lock when menu is open
  useEffect(() => {
    if (isMenuVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuVisible]);

  // Cleanup closing timer
  useEffect(() => {
    return () => {
      if (closingTimer.current) clearTimeout(closingTimer.current);
    };
  }, []);

  function openMenu() {
    setMenuState("opening");
  }

  function closeMenu() {
    setMenuState("closing");
    closingTimer.current = setTimeout(() => {
      setMenuState("closed");
    }, 300);
  }

  function toggleMenu() {
    if (menuState === "closed") {
      openMenu();
    } else if (menuState === "opening") {
      closeMenu();
    }
  }

  function handleLinkClick() {
    closeMenu();
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMenuVisible
            ? "bg-cream backdrop-blur-md border-b border-stone-200/50"
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
              onClick={toggleMenu}
              className="md:hidden p-2 text-slate-800 relative z-60"
              aria-expanded={isMenuVisible}
              aria-label={isMenuVisible ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuVisible ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile menu - Fullscreen Glass Overlay */}
      {isMenuVisible && (
        <div
          className={`fixed inset-0 z-50 md:hidden ${
            menuState === "opening" ? "animate-menu-open" : "animate-menu-close"
          }`}
          style={{
            backgroundColor: "rgba(250, 249, 247, 0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* Menu header - aligned with main header */}
          <Container>
            <div className="flex items-center justify-between h-16">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="font-serif text-lg text-slate-800 tracking-tight"
              >
                Dr Philippe Le Page
              </Link>
              <button
                onClick={closeMenu}
                className="p-2 text-slate-800"
                aria-label="Fermer le menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </Container>

          {/* Menu content - centered */}
          <div className="flex flex-col justify-center items-center h-[calc(100dvh-4rem)]">
            <nav className="flex flex-col items-center gap-8">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="font-serif text-3xl text-slate-700 hover:text-slate-900 transition-colors duration-300 animate-stagger-item"
                  style={{ animationDelay: `${index * 80 + 100}ms` }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Footer actions */}
            <div
              className="mt-12 flex flex-col items-center gap-5 animate-stagger-item"
              style={{
                animationDelay: `${navigation.length * 80 + 100}ms`,
              }}
            >
              <a
                href="tel:+33467920820"
                className="text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                04 67 92 08 20
              </a>
              <Button
                asChild
                size="sm"
                className="bg-slate-800 text-white hover:bg-slate-700 rounded-full px-6 font-normal"
              >
                <a href="#contact" onClick={handleLinkClick}>
                  Prendre RDV
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
