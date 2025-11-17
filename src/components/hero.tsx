import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image - Desktop */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/bg_heading_mobile.jpg"
          alt="Espacios que transforman"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Background Image - Mobile */}
      <div className="block md:hidden absolute inset-0">
        <Image
          src="/bg_heading_dekstop.jpg"
          alt="Espacios que transforman"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content - Desktop */}
      <div className="hidden md:flex relative h-full items-end pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
        <div className="w-full md:max-w-2xl">
          <h1 className="text-white sans extrabold text-5xl lg:text-6xl leading-tight mb-6 text-left">
            Espacios que transforman, diseños que perduran
          </h1>

          <p className="text-white/90 text-lg leading-relaxed text-left">
            Fusionamos arquitectura y diseño gráfico para crear ambientes únicos
            que reflejan tu esencia. Cada proyecto es una historia donde la
            estética se encuentra con la funcionalidad.
          </p>
        </div>
      </div>

      {/* Content - Mobile */}
      <div className="flex md:hidden relative h-full flex-col pt-40 px-6">
        <div>
          <h1 className="text-white sans extrabold text-2xl leading-tight text-center">
            Espacios que transforman, diseños que perduran
          </h1>
        </div>

        <div className="mt-auto pb-16">
          <p className="text-white/90 text-sm leading-relaxed text-left">
            Fusionamos arquitectura y diseño gráfico para crear ambientes únicos
            que reflejan tu esencia. Cada proyecto es una historia donde la
            estética se encuentra con la funcionalidad.
          </p>
        </div>
      </div>
    </section>
  );
}
