"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Mobile Accordion Component
function MobileServiceAccordion({ service, index }: { service: typeof services[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-4 flex flex-col items-center justify-center text-center bg-[#B0AE9F] hover:bg-[#A09D8F] transition-colors rounded-sm"
      >
        <h3 className="text-lg font-medium text-white mb-2">
          {service.title}
        </h3>
        <svg
          className={`w-5 h-5 text-white transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="bg-[#B0AE9F] p-4 pb-6 rounded-b-sm">
          <ul className="space-y-3 mb-6">
            {service.features.map((feature, featureIndex) => {
              const highlightText = service.highlightText;
              const parts = highlightText
                ? feature.split(new RegExp(`(${highlightText})`, "gi"))
                : [feature];

              return (
                <li
                  key={`${service.id}-feature-${featureIndex}`}
                  className="flex items-start text-white text-sm"
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-2.5 mt-2 flex-shrink-0" />
                  <span>
                    {parts.map((part, i) =>
                      highlightText &&
                      part.toLowerCase() === highlightText.toLowerCase() ? (
                        <strong key={`${service.id}-strong-${featureIndex}-${i}`}>{part}</strong>
                      ) : (
                        <span key={`${service.id}-span-${featureIndex}-${i}`}>{part}</span>
                      )
                    )}
                  </span>
                </li>
              );
            })}
          </ul>

          <Link href="/call" className="inline-block w-full">
            <div className="inline-flex items-center justify-center w-full px-6 py-3 text-sm medium text-white bg-black/60 hover:bg-black/80 transition-colors duration-300 rounded-sm tracking-wider">
              {service.cta}
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

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
    highlightText: "a distancia",
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
  const [isMobile, setIsMobile] = useState(false);

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

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateSectionDimensions();
    checkMobile();

    window.addEventListener("resize", updateSectionDimensions);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", updateSectionDimensions);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Handle scroll for mobile - center spotlight at viewport center
  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportCenterY = window.innerHeight / 2;
        const viewportCenterX = window.innerWidth / 2;

        // Calculate position relative to the section
        const relativeY = viewportCenterY - rect.top;
        const relativeX = viewportCenterX - rect.left;

        setMousePosition({
          x: relativeX,
          y: relativeY,
        });
      }
    };

    handleScroll(); // Initial position
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);


  // Handle mouse movement for desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isMobile) return; // Ignore mouse on mobile

    setMousePosition({
      x: e.clientX - sectionDimensions.left + window.scrollX,
      y: e.clientY - sectionDimensions.top + window.scrollY,
    });
  };

  return (
    <section
      id="servicios"
      className="pt-32 pb-12 md:pb-16 relative" // Reducido padding-bottom
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Faded background image - always visible */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={isMobile ? "/bg-mobile.svg" : "/bg-planos.svg"}
          alt="Floor Plan Background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
          priority
        />
      </div>

      {/* Spotlight effect that follows the mouse (desktop) or viewport center (mobile) */}
      {(isHovering || isMobile) && (
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            WebkitMaskImage: `radial-gradient(circle ${isMobile ? '250px' : '350px'} at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 60%)`,
            maskImage: `radial-gradient(circle ${isMobile ? '250px' : '350px'} at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 60%)`,
          }}
        >
          <Image
            src={isMobile ? "/bg-mobile.svg" : "/bg-planos.svg"}
            alt="Floor Plan Background"
            layout="fill"
            objectFit="cover"
            className="opacity-100"
          />
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div>

          {/* Desktop: Grid normal */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="col-span-1 rounded-lg p-8 relative overflow-hidden shadow-lg flex flex-col"
                style={{
                  background: "#B0AE9F",
                }}
              >
                <h3 className="text-2xl md:text-3xl mb-8 relative z-10 text-white tracking-wide">
                  {service.title}
                </h3>
                <ul className="space-y-4 mb-10 relative z-10 flex-grow">
                  {service.features.map((feature, index) => {
                    const highlightText = service.highlightText;
                    const parts = highlightText
                      ? feature.split(new RegExp(`(${highlightText})`, "gi"))
                      : [feature];

                    return (
                      <li
                        key={`${service.id}-feature-${index}`}
                        className="flex items-center text-white"
                      >
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-2.5" />
                        <span>
                          {parts.map((part, i) =>
                            highlightText &&
                            part.toLowerCase() === highlightText.toLowerCase() ? (
                              <strong key={`${service.id}-strong-${index}-${i}`}>{part}</strong>
                            ) : (
                              <span key={`${service.id}-span-${index}-${i}`}>{part}</span>
                            )
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <Link href="/call" className="relative z-10 inline-block mt-auto">
                  <div className="inline-flex items-center justify-center px-6 py-2.5 text-sm medium text-white bg-black/60 hover:bg-black/80 transition-colors duration-300 rounded-sm tracking-wider">
                    {service.cta}
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile: Accordions desplegables */}
          <div className="md:hidden">
            {services.map((service, index) => (
              <MobileServiceAccordion key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="rounded-lg p-6 md:p-10 relative overflow-hidden" style={{ background: "#B0AE9F" }}>
          <span className="inline-block text-sm medium mb-4 relative z-10 text-white">
            Nuestra experiencia transformando espacios
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 relative z-10 text-white">
            Desde la conceptualización hasta la materialización, <br className="hidden md:block" />
            nos involucramos en todo el proceso
          </h2>

          {/* Desktop: Grid/lista normal */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-2 mt-6 md:mt-8 relative z-10">
            {serviceTypes.map((service) => (
              <div key={service} className="text-xs md:text-sm text-white py-1">
                {service}
              </div>
            ))}
            <div className="text-xs md:text-sm text-white py-1">y más...</div>
          </div>

          {/* Mobile: Chips como los de proyectos */}
          <div className="flex md:hidden flex-wrap gap-2 mt-6 relative z-10">
            {serviceTypes.map((service) => (
              <span
                key={service}
                className="text-white/90 text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm"
              >
                {service}
              </span>
            ))}
            <span className="text-white/90 text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
              y más...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
