"use client";

import { useState } from "react";
import Image from "next/image";
import ProductGallery from "./product-gallery";
import ProductGalleryDesktop from "./product-gallery-desktop";
import ProductCustomizer, { ProductConfiguration } from "./product-customizer";
import ContactButtons from "./contact-buttons";
import ImageLightbox from "./image-lightbox";
import { Container } from "./ui/container";
import { Product } from "@/data/products";

interface ProductPageClientProps {
  product: Product;
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const [configuration, setConfiguration] = useState<ProductConfiguration>({
    orientacion: null,
    tela: null,
    medida: null
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Combine thumbnail with images for lightbox
  const allImages = [product.thumbnail, ...product.images];

  return (
    <>
      {/* Mobile: Hero fullscreen carousel con título */}
      <section className="md:hidden relative w-full h-screen">
        {/* Carousel Container */}
        <div
          id="hero-carousel-mobile"
          className="w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide flex"
        >
          {product.images.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-full flex-shrink-0 snap-center"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image}
                alt={`${product.name} - Vista ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />

              {/* Overlay oscuro sutil */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Título superpuesto - solo en la primera imagen */}
              {index === 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-white z-10 px-8">
                  <h1 className="font-instrument-serif text-4xl uppercase font-medium text-center leading-tight tracking-wide">
                    {product.name}
                  </h1>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Indicadores de página */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
          {product.images.map((_, index) => (
            <div
              key={index}
              className="w-1.5 h-1.5 rounded-full bg-white/60"
            />
          ))}
        </div>
      </section>

      {/* Mobile: Descripción y resto del contenido */}
      <section className="md:hidden pt-6 pb-12">
        <Container>
          {/* Descripción en itálica */}
          <p className="text-xs italic text-black/70 leading-relaxed mb-6">
            {product.detailDescription}
          </p>

          {/* Customization Options */}
          <div className="border-t border-gray-200 pt-6 mb-6">
            <h2 className="text-xl font-instrument-serif uppercase tracking-wide mb-5">
              Opciones de personalización
            </h2>
            <ProductCustomizer
              productName={product.name}
              orientaciones={product.customizationOptions.orientaciones}
              telas={product.customizationOptions.telas}
              medidas={product.customizationOptions.medidas}
              onConfigurationChange={setConfiguration}
            />
          </div>

          {/* Contact Buttons */}
          <div className="border-t border-gray-200 pt-6">
            <ContactButtons
              productName={product.name}
              configuration={configuration}
            />
          </div>
        </Container>
      </section>

      {/* Desktop: Hero Section con 70% Images / 30% Content */}
      <section className="hidden md:block pt-40 pb-20">
        <Container>
          <div className="grid md:grid-cols-[70%_30%] gap-8">
            {/* Left: Image Gallery - 70% */}
            <div className="order-1">
              <ProductGalleryDesktop
                images={product.images}
                productName={product.name}
                onImageClick={openLightbox}
              />
            </div>

            {/* Right: Product Info & Customization - 30% */}
            <div className="order-2 space-y-4">
              {/* 1. Título */}
              <div>
                <h1 className="font-instrument-serif text-2xl lg:text-3xl uppercase font-medium text-black leading-tight tracking-wide">
                  {product.name}
                </h1>
              </div>

              {/* 2. Descripción */}
              <div className="pb-4 border-b border-gray-200">
                <p className="font-figtree text-xs lg:text-sm text-black/80 leading-relaxed">
                  {product.detailDescription}
                </p>
              </div>

              {/* 3. Personalización */}
              <div className="pb-4 border-b border-gray-200">
                <h2 className="text-sm font-instrument-serif uppercase tracking-wide mb-3">
                  Personalización
                </h2>
                <ProductCustomizer
                  productName={product.name}
                  orientaciones={product.customizationOptions.orientaciones}
                  telas={product.customizationOptions.telas}
                  medidas={product.customizationOptions.medidas}
                  onConfigurationChange={setConfiguration}
                />
              </div>

              {/* 4. Botones de contacto */}
              <div className="pb-4 border-b border-gray-200">
                <ContactButtons
                  productName={product.name}
                  configuration={configuration}
                />
              </div>

              {/* 5. Características */}
              {product.caracteristicas && product.caracteristicas.length > 0 && (
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-wide text-black/60 mb-2">
                    Características
                  </h3>
                  <ul className="space-y-1">
                    {product.caracteristicas.map((caracteristica, index) => (
                      <li key={index} className="flex items-start gap-1.5 text-[11px]">
                        <span className="text-black/40 mt-0.5">•</span>
                        <span className="text-black/80">{caracteristica}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Details Section - Reorganizado */}
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

        <Container className="relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Columna Izquierda: Materialidad, Políticas, Formas de pago */}
            <div className="space-y-8">
              {/* Materialidad */}
              <div>
                <h3 className="text-lg font-medium mb-3">Materialidad</h3>
                <p className="text-sm text-black/70 leading-relaxed">
                  {product.details.materialidad}
                </p>
              </div>

              {/* Políticas de Envío */}
              <div>
                <h3 className="text-lg font-medium mb-3">Políticas de envío</h3>
                <div className="space-y-2 text-sm text-black/70 leading-relaxed">
                  <p>{product.politicas.produccion}</p>
                  <p>{product.politicas.envio}</p>
                </div>
              </div>

              {/* Formas de Pago */}
              <div>
                <h3 className="text-lg font-medium mb-3">Formas de pago</h3>
                <p className="text-sm text-black/70 leading-relaxed">{product.politicas.pago}</p>
              </div>
            </div>

            {/* Columna Derecha: Dimensiones */}
            <div>
              <h3 className="text-lg font-medium mb-4">Dimensiones</h3>

              {/* Imagen de módulos si existe */}
              {product.dimensionesImage && (
                <div
                  className="relative w-full aspect-[16/11] overflow-hidden rounded-lg mb-6 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openLightbox(allImages.length)}
                >
                  <Image
                    src={product.dimensionesImage}
                    alt={`${product.name} - Módulos disponibles`}
                    fill
                    className="object-contain bg-white"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}

              {/* Dimensiones individuales */}
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <p className="font-medium text-black/60 text-xs mb-1">Altura total</p>
                  <p className="text-black">{product.details.dimensiones.alturaTotal}</p>
                </div>
                <div>
                  <p className="font-medium text-black/60 text-xs mb-1">Ancho de asiento</p>
                  <p className="text-black">{product.details.dimensiones.anchoAsiento}</p>
                </div>
                <div>
                  <p className="font-medium text-black/60 text-xs mb-1">Profundidad de asiento</p>
                  <p className="text-black">{product.details.dimensiones.profundidadAsiento}</p>
                </div>
                <div>
                  <p className="font-medium text-black/60 text-xs mb-1">Altura de asiento</p>
                  <p className="text-black">{product.details.dimensiones.alturaAsiento}</p>
                </div>
                {product.details.dimensiones.anchoApoyaBrazo && (
                  <div>
                    <p className="font-medium text-black/60 text-xs mb-1">Ancho del apoya brazo</p>
                    <p className="text-black">{product.details.dimensiones.anchoApoyaBrazo}</p>
                  </div>
                )}
                {product.details.dimensiones.alturaApoyaBrazo && (
                  <div>
                    <p className="font-medium text-black/60 text-xs mb-1">Altura del apoya brazo</p>
                    <p className="text-black">{product.details.dimensiones.alturaApoyaBrazo}</p>
                  </div>
                )}
              </div>
              <p className="text-xs text-black/50">
                * Las medidas del sillón completo son adaptables según tu espacio.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      <ImageLightbox
        images={product.dimensionesImage ? [...allImages, product.dimensionesImage] : allImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        projectName={product.name}
      />
    </>
  );
}
