import Image from "next/image";
import { Container } from "@/components/ui/container";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function NosotrasPage() {
  return (
    <main className="bg-white">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
              <Image
                src="/nosotras.png"
                alt="María y Martina fundadoras de Fusión"
                fill
                className="object-cover grayscale "
                priority
              />
            </div>

            <div className="flex flex-col justify-start">
              <p className="font-instrument-serif text-2xl md:text-3xl font-medium text-black leading-tight tracking-wide">
                Somos María y Martina, primas hermanas y socias en este proyecto
                que nació en una charla de café. En abril del 2024 nos juntamos
                para diseñar espacios que transformen. Así nació{" "}
                <span className="inline-flex items-center relative">
                  <Image
                    src="/fusion-negro-2.png"
                    alt="Fusión"
                    width={140}
                    height={80}
                    className="inline-block h-[1em] w-auto mx-1 transform translate-y-[0.1em]"
                  />
                </span>
                , un estudio de interiorismo que une diseño y arquitectura con
                un enfoque integral y personalizado que combina funcionalidad,
                estética e innovación.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Historia y Valores */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="font-figtree text-lg text-black/80 leading-relaxed">
                  Lo que nos distingue es la pasión con la que trabajamos. Nos
                  motiva cada proyecto, le dedicamos el tiempo a detenernos en
                  cada detalle y buscamos siempre la mejor solución para cada
                  caso. El cliente es el centro de nuestro trabajo, por lo que
                  nos adaptamos a sus necesidades, estilo y presupuesto. En{" "}
                  <span className="inline-flex items-center relative">
                    <Image
                      src="/fusion-negro-2.png"
                      alt="Fusión"
                      width={120}
                      height={80}
                      className="inline-block h-[1em] w-auto mx-1 transform translate-y-[0.1em]"
                    />
                  </span>
                  , ofrecemos un proceso y una experiencia cercana, clara y
                  pensada para que nuestro cliente disfrute.
                </p>
                <p className="font-figtree text-lg text-black/80 leading-relaxed">
                  Nos encanta cada etapa del proceso: desde la conceptualización
                  hasta la fabricación del mobiliario. Le dedicamos toda la
                  energía y el compromiso a nuestro trabajo porque nos apasiona
                  lo que hacemos, y creemos que ese es el mejor valor que
                  podemos aportar.
                </p>
                <p className="font-figtree text-lg text-black/80 leading-relaxed">
                  No sólo proyectamos, sino que también contamos con talleres
                  para la fabricación de mobiliario a medida, lo que nos permite
                  dar respuestas rápidas y eficientes y personalización en cada
                  diseño. Nos involucramos en todo el proceso, desde la idea
                  hasta la materialización pasando por las etapas de: proyecto
                  donde se llevan a cabo el relevamiento, anteproyecto,
                  selección de materiales y mobiliario, planos y renders; y
                  ejecución donde se da lugar a la coordinación con proveedores,
                  administración de obra, supervisión y entrega final.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full">
              {/* Primera fila con dos imágenes juntas */}
              <div className="flex w-full h-[300px]">
                <div className="relative w-1/2 h-full">
                  <Image
                    src="/nosotras-2.png"
                    alt="Proceso de diseño"
                    fill
                    className="object-cover grayscale"
                    priority
                  />
                </div>
                <div className="relative w-1/2 h-full">
                  <Image
                    src="/nosotras-3.png"
                    alt="Trabajo en equipo"
                    fill
                    className="object-cover grayscale"
                    priority
                  />
                </div>
              </div>

              {/* Segunda fila con una imagen que ocupa todo el ancho */}
              <div className="relative w-full h-[280px]">
                <Image
                  src="/nosotras-4.png"
                  alt="Nuestro estudio"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
