import { Metadata } from "next";
import Benefits from "@/components/benefits";
import Services, { ExperienceSection } from "@/components/services";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Qué Hacemos | Estudio de Diseño Interior",
  description:
    "Descubre nuestros servicios de diseño interior, muebles a medida y artículos de decoración para transformar tu espacio.",
};

export default function QueHacemosPage() {
  return (
    <>
      <Header />
      {/* Services Section */}
      <Services />

      {/* Benefits Section - "Diseñamos experiencias..." */}
      <Benefits />

      {/* Experience Section - "Nuestra experiencia transformando espacios" moved to the end */}
      <ExperienceSection />

      <Footer />
    </>
  );
}
