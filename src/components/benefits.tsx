"use client";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    id: "benefit-1",
    title: "Diseño con Propósito",
    description: "Creamos espacios que no solo son estéticamente atractivos, sino funcionales y adaptados a tu forma de vivir y trabajar.",
  },
  {
    id: "benefit-2",
    title: "Equipo Multidisciplinario",
    description:
      "La fusión de diseño gráfico y arquitectura nos permite ofrecer una visión integral que abarca desde la identidad visual hasta los espacios físicos.",
  },
  {
    id: "benefit-3",
    title: "Compromiso con los Detalles",
    description:
      "Nos detenemos en cada detalle y buscamos la mejor solución para cada proyecto, con un proceso transparente y comunicación constante.",
  },
  {
    id: "benefit-4",
    title: "Fabricación Propia",
    description:
      "Contamos con talleres para la fabricación de mobiliario a medida, permitiéndonos personalizar cada diseño y ofrecer respuestas rápidas y eficientes.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-12 md:py-16 bg-white relative overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/benefits-bg.png"
          alt="Interior Design Illustration"
          layout="fill"
          objectFit="cover"
          className="opacity-15"
          priority
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl mb-12 text-black">
          Diseñamos experiencias,
          <span className="block mt-2">
            no solo espacios <span className="line-through text-gray-500">comunes</span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white bg-opacity-90 p-8 rounded-lg text-black hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-6">
                <CheckCircle2 className="text-gray-500 h-6 w-6" />
              </div>
              <p className="text-3xl font-medium mb-4 text-black">
                {benefit.title}
              </p>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}