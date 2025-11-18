"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import OptimizedImage from "@/components/optimized-image";
import ImageLightbox from "@/components/image-lightbox";
import { Container } from "@/components/ui/container";

export default function ProjectPageClient({ project, relatedProjects }: { project: any; relatedProjects: any[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section - Full Screen con overlay */}
      <section className="relative w-full h-screen">
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={() => openLightbox(0)}
        >
          <OptimizedImage
            src={project.images[0]}
            alt={project.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality="auto:best"
          />
        </div>

        {/* Overlay oscuro sutil */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Información superpuesta - abajo a la izquierda */}
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white z-10">
          <p className="text-sm md:text-base font-mono mb-2">{project.details.year}</p>
          <h1 className="font-instrument-serif text-4xl md:text-6xl uppercase font-medium leading-tight tracking-wide mb-2">
            {project.name}
          </h1>
          <p className="text-base md:text-lg font-figtree lowercase">{project.type}</p>
        </div>
      </section>

      {/* Sección Data */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            {/* Columna izquierda: Título Data */}
            <div className="md:col-span-3">
              <h2 className="font-instrument-serif text-xl md:text-2xl uppercase font-medium mb-2">
                Data
              </h2>
              <div className="w-8 h-[1px] bg-black" />
            </div>

            {/* Columna derecha: Grid de 2 columnas en desktop, 1 en mobile */}
            <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-12">
              {/* Columna 1: Ubicación, Año, Tipo */}
              <div className="space-y-0">
                {project.details.location && (
                  <div className="py-4 border-b border-black/20">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-black/50 mb-1">
                      UBICACIÓN
                    </h3>
                    <p className="font-figtree text-sm md:text-base text-black">
                      {project.details.location}
                    </p>
                  </div>
                )}
                {project.details.year && (
                  <div className="py-4 border-b border-black/20">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-black/50 mb-1">
                      AÑO
                    </h3>
                    <p className="font-figtree text-sm md:text-base text-black">
                      {project.details.year}
                    </p>
                  </div>
                )}
                {project.type && (
                  <div className="py-4 border-b border-black/20">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-black/50 mb-1">
                      TIPO
                    </h3>
                    <p className="font-figtree text-sm md:text-base text-black">
                      {project.type}
                    </p>
                  </div>
                )}
              </div>

              {/* Columna 2: Participación y Tags */}
              <div className="space-y-0">
                <div className="py-4 border-b border-black/20">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-black/50 mb-1">
                    PARTICIPACIÓN
                  </h3>
                  <p className="font-figtree text-sm md:text-base text-black">
                    Proyecto
                  </p>
                </div>

                {/* Tags/Badges */}
                <div className="flex flex-wrap gap-3 pt-6">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs uppercase font-mono tracking-wider text-black/70 bg-gray-100 px-3 py-2 border border-black/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sección Descripción */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            {/* Columna izquierda: Título Descripción */}
            <div className="md:col-span-3">
              <h2 className="font-instrument-serif text-xl md:text-2xl uppercase font-medium mb-2">
                Descripción
              </h2>
              <div className="w-8 h-[1px] bg-black" />
            </div>

            {/* Columna derecha: Contenido de descripción */}
            <div className="md:col-span-9 space-y-6">
              {/* Summary como primer párrafo */}
              <p className="font-figtree text-sm md:text-base text-black/80 leading-relaxed text-left">
                {project.content.summary}
              </p>

              {/* Todas las secciones como párrafos */}
              {project.content.sections.map((section: any, index: number) => (
                <p key={index} className="font-figtree text-sm md:text-base text-black/80 leading-relaxed text-left">
                  {section.text}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Galería de imágenes - Patrón 2-1-2-1 */}
      <section className="w-full">
        {/* Desktop: Patrón 2-1-2-1 con h-screen */}
        <div className="hidden md:block w-full">
          {project.images.slice(1).map((image: string, index: number) => {
            const position = index % 3; // Patrón de 3: 0,1 (par) | 2 (full) | repetir

            // Cada 3 imágenes: las primeras 2 van juntas (50/50), la tercera va sola (full)
            if (position === 0) {
              // Primera de un par
              const nextImage = project.images[index + 2]; // index+2 porque slice(1) ya quitó la primera

              if (nextImage) {
                return (
                  <div key={`pair-${index}`} className="flex w-full">
                    {/* Imagen actual (izquierda) */}
                    <div
                      className="relative w-1/2 h-screen cursor-pointer"
                      onClick={() => openLightbox(index + 1)}
                    >
                      <OptimizedImage
                        src={image}
                        alt={`${project.name} - Imagen ${index + 2}`}
                        fill
                        className="object-cover hover:opacity-90 transition-opacity"
                        sizes="50vw"
                        quality="auto:good"
                      />
                    </div>
                    {/* Siguiente imagen (derecha) */}
                    <div
                      className="relative w-1/2 h-screen cursor-pointer"
                      onClick={() => openLightbox(index + 2)}
                    >
                      <OptimizedImage
                        src={nextImage}
                        alt={`${project.name} - Imagen ${index + 3}`}
                        fill
                        className="object-cover hover:opacity-90 transition-opacity"
                        sizes="50vw"
                        quality="auto:good"
                      />
                    </div>
                  </div>
                );
              }
            } else if (position === 1) {
              // Segunda de un par - ya renderizada arriba
              return null;
            } else {
              // Imagen full width
              return (
                <div
                  key={`full-${index}`}
                  className="relative w-full h-screen cursor-pointer"
                  onClick={() => openLightbox(index + 1)}
                >
                  <OptimizedImage
                    src={image}
                    alt={`${project.name} - Imagen ${index + 2}`}
                    fill
                    className="object-cover hover:opacity-90 transition-opacity"
                    sizes="100vw"
                    quality="auto:good"
                  />
                </div>
              );
            }
          })}
        </div>

        {/* Mobile: Grid simple con aspect ratio */}
        <div className="md:hidden w-full">
          {project.images.slice(1).map((image: string, index: number) => (
            <div
              key={`mobile-${index}`}
              className="relative w-full aspect-[4/5] cursor-pointer"
              onClick={() => openLightbox(index + 1)}
            >
              <OptimizedImage
                src={image}
                alt={`${project.name} - Imagen ${index + 2}`}
                fill
                className="object-cover"
                sizes="100vw"
                quality="auto:good"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Proyectos relacionados */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-instrument-serif uppercase tracking-wide">
              Proyectos relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
              {relatedProjects.map((relatedProject: any) => (
                <Link
                  key={relatedProject.id}
                  href={`/proyecto/${relatedProject.slug}`}
                  className="group"
                >
                  <div className="aspect-[4/3] relative overflow-hidden mb-4 rounded-lg md:rounded-none">
                    <div className="absolute inset-0 ">
                      <OptimizedImage
                        src={relatedProject.images[0]}
                        alt={relatedProject.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105 duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-3">
                    {relatedProject.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6 md:mb-0">
                    {relatedProject.tags.slice(0, 2).map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 px-2 py-1 font-mono text-short"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <Footer />

      {/* Lightbox */}
      <ImageLightbox
        images={project.images}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        projectName={project.name}
      />
    </main>
  );
}
