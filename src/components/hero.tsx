export default function Hero() {
  return (
    <section className="bg-white pt-32 pb-4">
      <div className="fusion-container">
        <div className="flex flex-col items-center justify-center mb-8">
          {/* Logo display - using image instead of text */}
          <div className="w-38 md:w-48 mb-6">
            <img
              src="/fusion-negro-2.png"
              alt="Fusion Diseño Logo"
              className="w-full h-auto"
            />
          </div>
        </div>

        <h2 className="text-center text-black sans extrabold text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight mb-8">
          Espacios que transforman, diseños que perduran
        </h2>

        <p className="text-black/80 text-center mb-12 text-lg max-w-2xl mx-auto">
          Fusionamos arquitectura y diseño gráfico para crear ambientes únicos que reflejan tu esencia. Cada proyecto es una historia donde la estética se encuentra con la funcionalidad.
        </p>  
      </div>
    </section>
  );
}
