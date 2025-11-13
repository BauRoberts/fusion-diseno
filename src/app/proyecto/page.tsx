"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getAllProjects } from "@/data/project";
import { Container } from "@/components/ui/container";
import { useState, useEffect } from "react";

export default function ProjectsPage() {
  const projects = getAllProjects();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const carousel = document.getElementById('projects-carousel');
    if (!carousel) return;

    const checkScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = carousel;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    carousel.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check

    return () => carousel.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <Header />
      
      {/* Hero de proyectos - Estilo Nosotras */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
              <div className="absolute inset-0 fade-mask">
                <Image
                  src={projects[0].images[0]}
                  alt="Proyectos Destacados"
                  fill
                  className="object-cover grayscale"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col justify-start">
              <h1 className="font-instrument-serif text-3xl md:text-4xl uppercase font-medium text-black leading-tight tracking-wide">
                Nuestros Proyectos
              </h1>
              <p className="font-figtree text-lg text-black/80 leading-relaxed mt-6">
                Descubrir nuestra colección de proyectos de diseño interior y arquitectura,
                donde cada espacio refleja nuestra pasión por el diseño y la funcionalidad.
                Fusionamos estética y funcionalidad para crear espacios que transmiten
                emociones e inspiran la vida cotidiana.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Tipos de Proyectos - Estilo fondo de plano */}
      <section className="py-16 bg-neutral-50 relative">
        {/* Fondo estático de plano arquitectónico */}
        <div className="absolute inset-0 w-full h-full z-0 opacity-10">
          <Image
            src="/bg-planos.svg"
            alt="Floor Plan Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <Container>
          <div className="text-center relative z-10 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-instrument-serif uppercase tracking-wide mb-6">
              Tipos de Proyectos
            </h2>
            <p className="font-figtree text-lg text-black/80 leading-relaxed max-w-3xl mx-auto">
              Trabajamos en una amplia variedad de espacios, desde residenciales hasta comerciales,
              aplicando nuestro enfoque de diseño personalizado a cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0 relative z-10">
            {[
              "Casas y Departamentos",
              "Oficinas",
              "Locales Comerciales",
              "Cafés y Restaurantes",
              "Remodelaciones",
              "Proyecto desde Obra",
              "Mobiliario a Medida",
              "Branding de Espacios"
            ].map((categoria) => (
              <div key={categoria} className="p-4 border-t border-black/10">
                <span className="text-sm uppercase tracking-wider font-mono">{categoria}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Grid de proyectos - Primera sección, dos proyectos destacados (solo desktop) */}
      <section className="hidden md:block py-16 bg-neutral-50">
        <Container>
          <div className="flex flex-col w-full">
            {/* Primera fila: proyectos destacados */}
            <div className="flex w-full">
              {projects.slice(0, 2).map((project, index) => (
                <Link
                  key={project.id}
                  href={`/proyecto/${project.slug}`}
                  className="group w-1/2"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <div className="absolute inset-0 fade-mask">
                      <Image
                        src={project.images[0]}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 p-6 z-10">
                      <h3 className="text-xl font-medium text-white font-instrument-serif uppercase">{project.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Segunda fila: proyecto a ancho completo */}
            <Link
              href={projects.length > 2 ? `/proyecto/${projects[2].slug}` : `/proyecto/${projects[0].slug}`}
              className="group w-full block mt-0"
            >
              <div className="aspect-[21/9] relative overflow-hidden">
                <div className="absolute inset-0 fade-mask">
                  <Image
                    src={projects.length > 2 ? projects[2].images[0] : projects[0].images[0]}
                    alt={projects.length > 2 ? projects[2].name : projects[0].name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h3 className="text-xl font-medium text-white font-instrument-serif uppercase">
                    {projects.length > 2 ? projects[2].name : projects[0].name}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* Grid de proyectos - Todos los proyectos */}
      <section className="py-16">
        <Container>
          {/* Desktop: Grid normal */}
          <div className="hidden md:grid grid-cols-3 gap-0">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/proyecto/${project.slug}`}
                className="group relative"
              >
                <div className="aspect-square relative overflow-hidden">
                  <div className="absolute inset-0 fade-mask">
                    <Image
                      src={project.images[0]}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                    <div className="p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-medium text-white font-instrument-serif uppercase">{project.name}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.slice(0, 2).map((tag: string) => (
                          <span
                            key={tag}
                            className="text-xs bg-white/20 px-2 py-1 text-white font-mono text-short"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile: Carrousel con scroll horizontal */}
          <div className="md:hidden relative">
            <div id="projects-carousel" className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
              {projects.slice(0, 6).map((project) => (
                <Link
                  key={project.id}
                  href={`/proyecto/${project.slug}`}
                  className="group relative flex-shrink-0 w-[85vw] snap-center"
                >
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 fade-mask">
                      <Image
                        src={project.images[0]}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 p-6 z-10 bg-gradient-to-t from-black/60 to-transparent w-full">
                      <h3 className="text-lg font-medium text-white font-instrument-serif uppercase">{project.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Flechas de navegación */}
            {canScrollLeft && (
              <button
                onClick={() => {
                  const carousel = document.getElementById('projects-carousel');
                  if (carousel) {
                    const cardWidth = carousel.offsetWidth * 0.85 + 16;
                    carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
                  }
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white hover:text-white/70 transition-colors"
                aria-label="Proyecto anterior"
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
                  const carousel = document.getElementById('projects-carousel');
                  if (carousel) {
                    const cardWidth = carousel.offsetWidth * 0.85 + 16;
                    carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
                  }
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white hover:text-white/70 transition-colors"
                aria-label="Siguiente proyecto"
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

            {projects.length > 6 && (
              <div className="text-center mt-6">
                <Link
                  href="/proyecto"
                  className="inline-block text-sm uppercase tracking-wider font-mono text-black hover:text-black/70 transition-colors border-b border-black pb-1"
                >
                  Ver más proyectos
                </Link>
              </div>
            )}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}