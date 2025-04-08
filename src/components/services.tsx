"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const services = [
  {
    id: "diseno-interiores",
    title: "Servicios de Diseño de Interiores",
    features: [
      "Diseños personalizados residenciales y comerciales",
      "Planificación y optimización de espacios",
      "Selección de materiales y acabados exclusivos",
    ],
    icon: "home-decor",
    cta: "Reservar Consulta",
  },
  {
    id: "muebles-personalizados",
    title: "Muebles y Decoración a Medida",
    features: [
      "Muebles fabricados por encargo",
      "Ebanistería y muebles empotrados personalizados",
      "Elementos decorativos únicos",
    ],
    icon: "furniture",
    cta: "Solicitar Presupuesto",
  },
];

const serviceTypes = [
  "Diseño Residencial",
  "Espacios Comerciales",
  "Remodelaciones",
  "Planificación Espacial",
  "Muebles a Medida",
  "Cocinas y Baños",
  "Diseño de Iluminación",
  "Asesoría de Color",
  "Selección de Materiales",
  "Curaduría de Arte",
  "Diseño Sostenible",
  "Home Staging",
  "Visualización 3D",
  "Sourcing de Mobiliario",
];

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sectionDimensions, setSectionDimensions] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const [isHovering, setIsHovering] = useState(false);

  // Update section dimensions when component mounts or window resizes
  useEffect(() => {
    const updateSectionDimensions = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSectionDimensions({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
          height: rect.height,
        });
      }
    };

    updateSectionDimensions();
    window.addEventListener("resize", updateSectionDimensions);

    return () => {
      window.removeEventListener("resize", updateSectionDimensions);
    };
  }, []);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setMousePosition({
      x: e.clientX - sectionDimensions.left + window.scrollX,
      y: e.clientY - sectionDimensions.top + window.scrollY,
    });
  };

  return (
    <section
      id="servicios"
      className="py-20 relative"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Faded background image - always visible */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://laurao.com/assets/LauraO_3-9718440d.svg"
          alt="Floor Plan Background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
          priority
        />
      </div>

      {/* Spotlight effect that follows the mouse */}
      {isHovering && (
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            WebkitMaskImage: `radial-gradient(circle 500px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 70%)`,
            maskImage: `radial-gradient(circle 500px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 70%)`,
          }}
        >
          <Image
            src="https://laurao.com/assets/LauraO_3-9718440d.svg"
            alt="Laura O Design"
            layout="fill"
            objectFit="cover"
            className="opacity-100"
          />
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div>
          <div className="mb-10">
            <span className="inline-block text-sm font-medium mb-2">
              NUESTROS SERVICIOS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl">
              Un equipo apasionado de expertos en diseño que{" "}
              <em className="not-italic">da vida a tu visión</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-lg p-8 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(145deg, #1a1a1a 0%, #000000 100%)",
                }}
              >
                <h3 className="font-serif text-3xl mb-8 relative z-10 text-white tracking-wide">
                  {service.title}
                </h3>
                <ul className="space-y-4 mb-10 relative z-10">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-white">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-2.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/llamada" className="relative z-10 inline-block">
                  <div className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white border border-white/30 hover:bg-white hover:text-black transition-colors duration-300 rounded-sm tracking-wider">
                    {service.cta}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 bg-opacity-90 rounded-lg p-10 mt-20 relative overflow-hidden">
          <span className="inline-block text-sm font-medium mb-4 relative z-10">
            Nuestra experiencia transformando espacios
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mb-6 relative z-10">
            Diseño de interiores, muebles a medida, <br />
            elementos decorativos y más
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-2 mt-8 relative z-10">
            {serviceTypes.map((service) => (
              <div key={service} className="text-sm text-gray-600 py-1">
                {service}
              </div>
            ))}
            <div className="text-sm text-gray-600 py-1">y más...</div>
          </div>
        </div>
      </div>
    </section>
  );
}
