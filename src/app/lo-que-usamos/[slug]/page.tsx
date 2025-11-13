import { notFound } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductPageClient from "@/components/product-page-client";
import { getProductBySlug, getAllProducts } from "@/data/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Esta función es necesaria para la exportación estática con "output: export"
export async function generateStaticParams() {
  const products = getAllProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  // Await params before accessing properties
  const { slug } = await params;

  // Obtenemos el producto por su slug
  const product = getProductBySlug(slug);

  // Si no existe el producto, mostramos un 404
  if (!product) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      <Header />
      <ProductPageClient product={product} />
      <Footer />
    </main>
  );
}
