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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  // Handle carousel scroll detection
  useEffect(() => {
    const carousel = document.getElementById('services-carousel');
    if (!carousel || !isMobile) return;

    const checkScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = carousel;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    carousel.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check

    return () => carousel.removeEventListener('scroll', checkScroll);
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
      className="pt-32 pb-20 relative" // Añadido padding-top para compensar el header fijo
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
          <div className="mb-10">
            <span className="inline-block text-sm medium mb-2">
              NUESTROS SERVICIOS
            </span>
            <h2 className="font-sans text-3xl md:text-4xl">
              Soluciones de diseño personalizadas que{" "}
              <em className="not-italic">transforman cada espacio</em>
            </h2>
          </div>

          {/* Desktop: Grid normal */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="col-span-1 rounded-lg p-8 relative overflow-hidden bg-white shadow-lg flex flex-col"
                style={{
                  background: "white",
                }}
              >
                <h3 className="text-2xl md:text-3xl mb-8 relative z-10 text-black tracking-wide">
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
                        className="flex items-center text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-black rounded-full mr-2.5" />
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
                  <div className="inline-flex items-center justify-center px-6 py-2.5 text-sm medium text-white bg-black hover:bg-gray-800 transition-colors duration-300 rounded-sm tracking-wider">
                    {service.cta}
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile: Carrusel con scroll horizontal */}
          <div className="md:hidden relative">
            <div
              id="services-carousel"
              className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-shrink-0 w-[85vw] snap-center rounded-lg p-6 relative overflow-hidden bg-white shadow-lg min-h-[450px] flex flex-col"
                  style={{
                    background: "white",
                  }}
                >
                  <h3 className="text-xl mb-6 relative z-10 text-black tracking-wide font-medium">
                    {service.title}
                  </h3>
                  <ul className="space-y-3 mb-8 relative z-10 flex-grow">
                    {service.features.map((feature, index) => {
                      const highlightText = service.highlightText;
                      const parts = highlightText
                        ? feature.split(new RegExp(`(${highlightText})`, "gi"))
                        : [feature];

                      return (
                        <li
                          key={`${service.id}-feature-${index}`}
                          className="flex items-start text-gray-700 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-black rounded-full mr-2.5 mt-2 flex-shrink-0" />
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

                  <Link href="/call" className="relative z-10 inline-block w-full mt-auto">
                    <div className="inline-flex items-center justify-center w-full px-6 py-3 text-sm medium text-white bg-black hover:bg-gray-800 transition-colors duration-300 rounded-sm tracking-wider">
                      {service.cta}
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Flechas de navegación */}
            {canScrollLeft && (
              <button
                onClick={() => {
                  const carousel = document.getElementById('services-carousel');
                  if (carousel) {
                    const cardWidth = carousel.offsetWidth * 0.85 + 16;
                    carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
                  }
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 text-black hover:text-black/70 transition-colors"
                aria-label="Servicio anterior"
              >
                <svg
                  className="w-8 h-8 drop-shadow-lg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {canScrollRight && (
              <button
                onClick={() => {
                  const carousel = document.getElementById('services-carousel');
                  if (carousel) {
                    const cardWidth = carousel.offsetWidth * 0.85 + 16;
                    carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
                  }
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 text-black hover:text-black/70 transition-colors"
                aria-label="Siguiente servicio"
              >
                <svg
                  className="w-8 h-8 drop-shadow-lg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gray-50 bg-opacity-90 rounded-lg p-6 md:p-10 relative overflow-hidden">
          <span className="inline-block text-sm medium mb-4 relative z-10">
            Nuestra experiencia transformando espacios
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 relative z-10">
            Desde la conceptualización hasta la materialización, <br className="hidden md:block" />
            nos involucramos en todo el proceso
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-2 mt-6 md:mt-8 relative z-10">
            {serviceTypes.map((service) => (
              <div key={service} className="text-xs md:text-sm text-gray-600 py-1">
                {service}
              </div>
            ))}
            <div className="text-xs md:text-sm text-gray-600 py-1">y más...</div>
          </div>
        </div>
      </div>
    </section>
  );
}
