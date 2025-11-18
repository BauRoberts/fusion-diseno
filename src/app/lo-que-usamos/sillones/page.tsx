import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";
import { Container } from "@/components/ui/container";
import { getProductsByCategory } from "@/data/products";

export default function SillonesPage() {
  const products = getProductsByCategory("sillones");

  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Products Grid */}
      <section className="pt-32 pb-20 md:pt-40">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
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
