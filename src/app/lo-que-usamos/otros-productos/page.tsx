import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import OptimizedImage from "@/components/optimized-image";
import { Container } from "@/components/ui/container";
import { getProductsByCategory } from "@/data/products";

export default function OtrosProductosPage() {
  const products = getProductsByCategory("otros-productos");

  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-instrument-serif text-4xl md:text-6xl uppercase font-medium text-black leading-tight tracking-wide mb-6">
              Otros Productos
            </h1>
            <p className="font-figtree text-xl text-black/80 leading-relaxed">
              Productos complementarios para completar tu espacio. Cada elemento ha sido
              cuidadosamente seleccionado para complementar nuestros diseños.
            </p>
          </div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="pb-20">
        <Container>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/lo-que-usamos/${product.slug}`}
                  className="group"
                >
                  <article className="space-y-4">
                    {/* Product Image */}
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-100">
                      <OptimizedImage
                        src={product.thumbnail}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Product Info */}
                    <div>
                      <h2 className="font-instrument-serif text-2xl uppercase font-medium text-black mb-2 group-hover:text-black/70 transition-colors">
                        {product.name}
                      </h2>
                      <p className="font-figtree text-black/70 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-medium text-black/60 group-hover:text-black transition-colors">
                      Ver detalles
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-figtree text-xl text-black/60">
                Próximamente agregaremos productos a esta categoría.
              </p>
            </div>
          )}
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
