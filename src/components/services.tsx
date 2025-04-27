"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const services = [
  {
    id: "servicio-interiorismo",
    title: "Servicio de Interiorismo",
    features: [
      "Transformación integral de espacios residenciales y comerciales",
      "Optimización de distribución y funcionalidad adaptada a tus necesidades",
      "Proceso estructurado en etapas de Proyecto y Ejecución",
    ],
    icon: "home-decor",
    cta: "Reservar Consulta",
  },
  {
    id: "servicio-asesorias",
    title: "Servicio de Asesorías",
    features: [
      "Resolución de dudas puntuales sobre diseño y decoración",
      "Selección de productos, materiales y detalles decorativos",
      "Formato breve, práctico y flexible (presencial o a distancia)",
    ],
    icon: "furniture",
    cta: "Solicitar Asesoría",
  },
  {
    id: "servicio-fusion",
    title: "Servicio Fusion",
    features: [
      "Desarrollo integral de marca y espacio físico",
      "Creación de identidad visual (naming, logo, paleta de colores)",
      "Diseño y montaje de espacios alineados con tu identidad de marca",
    ],
    icon: "design",
    cta: "Explorar Servicio",
  },
];

const serviceTypes = [
  // Servicio de Interiorismo
  "Casas y Departamentos",
  "Oficinas y Espacios de Trabajo",
  "Locales Comerciales",
  "Cafés y Restaurantes",
  "Remodelaciones Integrales",
  "Proyectos desde Obra",
  
  // Aspectos técnicos
  "Relevamiento y Anteproyecto",
  "Selección de Materiales",
  "Planos Técnicos",
  "Renders 3D",
  "Mobiliario a Medida",
  "Coordinación de Proveedores",
  "Supervisión de Obra",
  
  // Servicio Fusion
  "Diseño de Identidad Visual",
  "Branding para Espacios",
  "Experiencia de Marca Integral",
  "Piezas Gráficas Corporativas",
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
          <span className="inline-block text-sm medium mb-2">
            NUESTROS SERVICIOS
          </span>
          <h2 className="font-sans text-3xl md:text-4xl">
            Soluciones de diseño personalizadas que <em className="not-italic">transforman cada espacio</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {/* Primera tarjeta - Servicio de Interiorismo (ocupa todo el ancho) */}
        <div
          className="col-span-1 md:col-span-6 rounded-lg p-8 relative overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #1a1a1a 0%, #000000 100%)",
          }}
        >
          <h3 className="text-3xl mb-8 relative z-10 text-white tracking-wide">
            {services[0].title}
          </h3>
          <ul className="space-y-4 mb-10 relative z-10">
            {services[0].features.map((feature) => (
              <li key={feature} className="flex items-center text-white">
                <div className="w-1.5 h-1.5 bg-white rounded-full mr-2.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Link href="/call" className="relative z-10 inline-block">
            <div className="inline-flex items-center justify-center px-6 py-2.5 text-sm medium text-white border border-white/30 hover:bg-white hover:text-black transition-colors duration-300 rounded-sm tracking-wider">
              {services[0].cta}
            </div>
          </Link>
        </div>

        {/* Tarjetas 2 y 3 (cada una ocupa la mitad del ancho) */}
        {services.slice(1).map((service) => (
          <div
            key={service.id}
            className="col-span-1 md:col-span-3 rounded-lg p-8 relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #1a1a1a 0%, #000000 100%)",
            }}
          >
            <h3 className="text-3xl mb-8 relative z-10 text-white tracking-wide">
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

            <Link href="/call" className="relative z-10 inline-block">
              <div className="inline-flex items-center justify-center px-6 py-2.5 text-sm medium text-white border border-white/30 hover:bg-white hover:text-black transition-colors duration-300 rounded-sm tracking-wider">
                {service.cta}
              </div>
            </Link>
          </div>
        ))}
      </div>
        </div>

        <div className="bg-gray-50 bg-opacity-90 rounded-lg p-10 mt-20 relative overflow-hidden">
          <span className="inline-block text-sm medium mb-4 relative z-10">
            Nuestra experiencia transformando espacios
          </span>
          <h2 className="text-3xl md:text-4xl mb-6 relative z-10">
            Desde la conceptualización hasta la materialización, <br />
            nos involucramos en todo el proceso
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
