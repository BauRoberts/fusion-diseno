"use client";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    id: "benefit-1",
    title: "Espacios Personalizados",
    description: "Diseños únicos adaptados a su personalidad y estilo de vida.",
  },
  {
    id: "benefit-2",
    title: "Ejecución Impecable",
    description:
      "Desde el concepto hasta la realización, entregamos proyectos de calidad en el plazo acordado.",
  },
  {
    id: "benefit-3",
    title: "Proceso Transparente",
    description:
      "Comunicación clara y presupuestos detallados durante todo el proceso de diseño.",
  },
  {
    id: "benefit-4",
    title: "Experiencia Comprobada",
    description:
      "Años transformando espacios que reflejan la esencia de nuestros clientes.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-24 bg-[#0000] relative overflow-hidden"
    >
      {/* Fondo con patrón de logo usando CSS */}
      <style jsx>{`
        .logo-pattern {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-image: url("/fusion-negro.png");
          background-size: 40px auto;
          background-repeat: space;
          opacity: 0.1;
          pointer-events: none;
        }
      `}</style>

      <div className="logo-pattern"></div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-center font-serif text-4xl md:text-5xl lg:text-6xl mb-12 text-black">
          Transformamos espacios,
          <span className="block mt-2">
            diseños que inspiran{" "}
            <span className="line-through text-gray-500">no limitan</span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white p-8 rounded-lg text-black hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">
                <CheckCircle2 className="text-black h-6 w-6" />
              </div>
              <p className="font-serif text-4xl font-medium mb-4">
                {benefit.title}
              </p>
              <p className="text-gray-700 text-2x1">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
