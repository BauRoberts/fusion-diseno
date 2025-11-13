import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-white pt-24 md:pt-32 pb-4 md:pb-8">
      <div className="fusion-container">
        {/* Logo - solo visible en desktop */}
        <div className="hidden md:flex flex-col items-center justify-center mb-8">
          <div className="w-38 md:w-48 mb-6">
            <Image
              src="/fusion-negro-2.png"
              alt="Fusion Diseño Logo"
              width={192}
              height={192}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>

        <h2 className="text-center text-black sans extrabold text-2xl md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight mb-3 md:mb-8">
          Espacios que transforman, diseños que perduran
        </h2>

        <p className="text-black/80 text-center mb-6 md:mb-12 text-sm md:text-lg max-w-2xl mx-auto px-4">
          Fusionamos arquitectura y diseño gráfico para crear ambientes únicos que reflejan tu esencia. Cada proyecto es una historia donde la estética se encuentra con la funcionalidad.
        </p>
      </div>
    </section>
  );
}
