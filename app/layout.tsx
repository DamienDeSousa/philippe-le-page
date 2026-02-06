import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Cormorant, Outfit } from "next/font/google";
import "./globals.css";

// 2026 Typography: Ultra-modern sans-serif
const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// 2026 Typography: Elegant serif for headings
const cormorant = Cormorant({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Dr Philippe Le Page | Médecine Esthétique Montpellier",
  description: "Un médecin, zéro intermédiaire. Soins esthétiques exclusifs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-[#FAF9F7] font-sans antialiased text-slate-800",
          outfit.variable,
          cormorant.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}

