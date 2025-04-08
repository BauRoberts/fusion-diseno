import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    id: "consultoria",
    title: "Consultoría de Diseño",
    description:
      "Asesoramiento personalizado para transformar espacios existentes con soluciones prácticas y estéticas.",
    features: [
      "Evaluación inicial del espacio",
      "Propuesta conceptual",
      "Selección de materiales y colores",
      "Asesoramiento en mobiliario",
      "Sesiones de consulta personalizadas",
      "Documento digital con recomendaciones",
    ],
    cta: "Agendar una consulta",
    availability: "3 plazas disponibles",
  },
  {
    id: "proyecto-completo",
    title: "Proyecto Integral",
    description:
      "Diseño completo de interiores con planificación detallada, especificaciones técnicas y seguimiento de obra.",
    features: [
      "Análisis completo del espacio",
      "Proyecto arquitectónico detallado",
      "Diseño de mobiliario a medida",
      "Especificación de materiales y acabados",
      "Seguimiento de implementación",
      "Asesoramiento post-proyecto",
    ],
    cta: "Agendar una consulta",
    availability: "1 plaza disponible",
  },
];

export default function Pricing() {
  return (
    <section id="servicios" className="bg-white py-24">
      <div className="fusion-container">
        <div className="flex flex-col items-center justify-center mb-16">
          <h2 className="text-center text-black font-serif text-4xl md:text-5xl max-w-2xl mx-auto leading-tight mb-8">
            Nuestros servicios de diseño
          </h2>

          <p className="text-black/80 text-center mb-4 text-lg max-w-2xl mx-auto">
            Ofrecemos soluciones personalizadas que se adaptan a su estilo y
            necesidades. Cada proyecto es único, como lo es usted.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="border border-black/10 p-10 bg-white">
              <h3 className="font-serif text-2xl md:text-3xl mb-4">
                {plan.title}
              </h3>
              <p className="text-black/70 mb-8">{plan.description}</p>

              <div className="mb-10">
                <p className="text-sm uppercase tracking-wider text-black/50 font-medium mb-4">
                  Incluye
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 mr-3 flex-shrink-0 text-black/80" />
                      <span className="text-black/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-black/10">
                <Link href="/contacto" className="block">
                  <Button className="w-full bg-black text-white hover:bg-black/90 py-6 rounded-none">
                    {plan.cta}
                  </Button>
                </Link>
                <p className="text-center text-black/60 text-sm mt-3">
                  {plan.availability}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-xl mx-auto">
          <p className="text-black/60">
            Cada proyecto comienza con una conversación. Contáctenos para
            discutir cómo podemos transformar su espacio.
          </p>
        </div>
      </div>
    </section>
  );
}
