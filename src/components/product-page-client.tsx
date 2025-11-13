"use client";

import { useState } from "react";
import Image from "next/image";
import ProductGallery from "./product-gallery";
import ProductGalleryDesktop from "./product-gallery-desktop";
import ProductCustomizer, { ProductConfiguration } from "./product-customizer";
import ContactButtons from "./contact-buttons";
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

  return (
    <>
      {/* Hero Section - Desktop: 70% Images / 30% Content */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <Container>
          {/* Mobile: Carousel */}
          <div className="md:hidden mb-6">
            <ProductGallery
              images={product.images}
              productName={product.name}
              imageAspects={product.imageAspects}
            />
          </div>

          {/* Desktop: 70/30 Layout */}
          <div className="hidden md:grid md:grid-cols-[70%_30%] gap-8">
            {/* Left: Image Gallery - 70% */}
            <div className="order-1">
              <ProductGalleryDesktop images={product.images} productName={product.name} />
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

          {/* Mobile: Content below carousel */}
          <div className="md:hidden space-y-6">
            {/* Product Header */}
            <div>
              <h1 className="font-instrument-serif text-3xl uppercase font-medium text-black leading-tight tracking-wide mb-4">
                {product.name}
              </h1>
              <p className="font-figtree text-base text-black/80 leading-relaxed">
                {product.detailDescription}
              </p>
            </div>

            {/* Características destacadas */}
            {product.caracteristicas && product.caracteristicas.length > 0 && (
              <div className="border-t border-b border-gray-200 py-5">
                <h3 className="text-sm font-medium uppercase tracking-wide text-black/60 mb-3">
                  Características
                </h3>
                <ul className="space-y-2">
                  {product.caracteristicas.map((caracteristica, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-black/40 mt-1">•</span>
                      <span className="text-black/80">{caracteristica}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Customization Options */}
            <div className="border-t border-gray-200 pt-6">
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
          </div>
        </Container>
      </section>

      {/* Details Section - Sin accordions, más simple */}
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
          <h2 className="text-2xl md:text-3xl font-instrument-serif uppercase tracking-wide mb-8">
            Detalles del producto
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Materialidad */}
            <div>
              <h3 className="text-lg font-medium mb-3">Materialidad</h3>
              <p className="text-sm text-black/70 leading-relaxed">
                {product.details.materialidad}
              </p>
            </div>

            {/* Dimensiones */}
            <div>
              <h3 className="text-lg font-medium mb-3">Dimensiones</h3>

              {/* Imagen de dimensiones si existe */}
              {product.dimensionesImage && (
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={product.dimensionesImage}
                    alt={`${product.name} - Dimensiones`}
                    fill
                    className="object-contain bg-white"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-medium text-black/60 text-xs">Altura total</p>
                  <p className="text-black">{product.details.dimensiones.alturaTotal}</p>
                </div>
                <div>
                  <p className="font-medium text-black/60 text-xs">Ancho de asiento</p>
                  <p className="text-black">{product.details.dimensiones.anchoAsiento}</p>
                </div>
                <div>
                  <p className="font-medium text-black/60 text-xs">Profundidad de asiento</p>
                  <p className="text-black">{product.details.dimensiones.profundidadAsiento}</p>
                </div>
                <div>
                  <p className="font-medium text-black/60 text-xs">Altura de asiento</p>
                  <p className="text-black">{product.details.dimensiones.alturaAsiento}</p>
                </div>
                {product.details.dimensiones.anchoApoyaBrazo && (
                  <div>
                    <p className="font-medium text-black/60 text-xs">Ancho del apoya brazo</p>
                    <p className="text-black">{product.details.dimensiones.anchoApoyaBrazo}</p>
                  </div>
                )}
                {product.details.dimensiones.alturaApoyaBrazo && (
                  <div>
                    <p className="font-medium text-black/60 text-xs">Altura del apoya brazo</p>
                    <p className="text-black">{product.details.dimensiones.alturaApoyaBrazo}</p>
                  </div>
                )}
              </div>
              <p className="text-xs text-black/50 mt-3">
                * Las medidas del sillón completo son adaptables según tu espacio.
              </p>
            </div>

            {/* Políticas de Envío */}
            <div>
              <h3 className="text-lg font-medium mb-3">Políticas de envío</h3>
              <div className="space-y-2 text-sm text-black/70">
                <p>{product.politicas.produccion}</p>
                <p>{product.politicas.envio}</p>
              </div>
            </div>

            {/* Formas de Pago */}
            <div>
              <h3 className="text-lg font-medium mb-3">Formas de pago</h3>
              <p className="text-sm text-black/70">{product.politicas.pago}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
