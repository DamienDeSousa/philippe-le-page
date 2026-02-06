import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Contact } from "@/components/sections/Contact";
import { Equipment } from "@/components/sections/Equipment";
import { Hero } from "@/components/sections/Hero";
import { MedicalProfile } from "@/components/sections/MedicalProfile";
import { Philosophy } from "@/components/sections/Philosophy";
import { Specialties } from "@/components/sections/Specialties";
import { Testimonials } from "@/components/sections/Testimonials";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MedicalProfile />
        <Separator className="my-0" />
        <Specialties />
        <Philosophy />
        <Separator className="my-0" />
        <Testimonials />
        <Equipment />
        <Separator className="my-0" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
