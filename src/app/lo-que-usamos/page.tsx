import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";

export default function LoQueUsamosPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero Section - Imagen de portada con texto */}
      <section className="relative w-full h-screen">
        <Image
          src="https://res.cloudinary.com/djs4laafl/image/upload/v1763072083/Tabaco__impimq.jpg"
          alt="Muebles Fusión"
          fill
          className="object-cover"
          priority
        />

        {/* Texto arriba centrado */}
        <div className="absolute top-32 left-0 right-0 md:top-40">
          <Container>
            <div className="max-w-5xl mx-auto text-center">
              <p className="font-instrument-serif italic text-lg md:text-xl lg:text-2xl text-black leading-relaxed tracking-wide">
                Cada pieza que diseñamos y fabricamos nace de la búsqueda de
                equilibrio entre estética, funcionalidad y confort. Todos
                nuestros muebles son hechos por encargo, personalizados según
                tus necesidades y el carácter de tu espacio.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Categorías con hover */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Categoría Sillones */}
            <Link
              href="/lo-que-usamos/sillones"
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <Image
                src="https://res.cloudinary.com/djs4laafl/image/upload/v1763072171/Tao_avijeu.jpg"
                alt="Sillones"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />

              {/* Overlay con título - aparece en hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                <h2 className="font-instrument-serif text-5xl md:text-7xl uppercase font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-wide">
                  Sillones
                </h2>
              </div>
            </Link>

            {/* Categoría Otros Productos */}
            <Link
              href="/lo-que-usamos/otros-productos"
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <Image
                src="https://res.cloudinary.com/djs4laafl/image/upload/v1763414173/Foto_portada_ot5bn2.jpg"
                alt="Otros Productos"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />

              {/* Overlay con título - aparece en hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                <h2 className="font-instrument-serif text-5xl md:text-7xl uppercase font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-wide text-center">
                  Otros
                  <br />
                  Productos
                </h2>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-instrument-serif text-3xl md:text-4xl uppercase tracking-wide mb-8 text-center">
              Muebles por encargo
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-black rounded-full mx-auto flex items-center justify-center text-white text-xl font-bold">
                  1
                </div>
                <h3 className="font-medium text-lg">Personalizá</h3>
                <p className="text-sm text-black/70">
                  Elegí orientación, tela y medidas según tu espacio
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-black rounded-full mx-auto flex items-center justify-center text-white text-xl font-bold">
                  2
                </div>
                <h3 className="font-medium text-lg">Consultá</h3>
                <p className="text-sm text-black/70">
                  Envianos tu configuración por WhatsApp o email
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-black rounded-full mx-auto flex items-center justify-center text-white text-xl font-bold">
                  3
                </div>
                <h3 className="font-medium text-lg">Recibí tu mueble</h3>
                <p className="text-sm text-black/70">
                  Lo fabricamos y entregamos en 15-25 días hábiles
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
