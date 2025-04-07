export default function Hero() {
  return (
    <section className="bg-white pt-32 pb-4">
      <div className="fusion-container">
        <div className="flex flex-col items-center justify-center mb-8">
          {/* Logo display - using image instead of text */}
          <div className="w-32 md:w-48 mb-6">
            <img
              src="/fusion-negro.png"
              alt="Fusion Diseño Logo"
              className="w-full h-auto"
            />
          </div>
        </div>

        <h2 className="text-center text-black font-serif text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto leading-tight mb-8">
          Transformando espacios con diseño interior exclusivo
        </h2>

        <p className="text-black/80 text-center mb-12 text-lg max-w-2xl mx-auto">
          Creando ambientes únicos que reflejan su personalidad y estilo de
          vida. Fusionamos funcionalidad y estética para crear espacios que
          inspiran.
        </p>
      </div>
    </section>
  );
}
