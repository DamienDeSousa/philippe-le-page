import { Container } from "@/components/Container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#FAF9F7] border-t border-stone-200 py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Identity */}
          <div className="text-center md:text-left">
            <p className="font-serif text-lg text-slate-800">
              Dr Philippe Le Page
            </p>
            <p className="text-sm text-slate-500 mt-1">
              Médecine Esthétique • Montpellier
            </p>
          </div>

          {/* Center - Copyright */}
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Tous droits réservés
          </p>

          {/* Right - Legal */}
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-slate-800 transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-slate-800 transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
