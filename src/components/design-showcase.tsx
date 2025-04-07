import Image from "next/image";
import Link from "next/link";

// Updated with 6 different design items
const designItems = [
  {
    id: "item-1",
    name: "Parma Side Table",
    src: "https://acdn-us.mitiendanube.com/stores/004/147/146/products/parma-principal-3037807444714fcc2917372348145308-640-0.webp",
    price: "$299",
    link: "/shop/parma-side-table",
  },
  {
    id: "item-2",
    name: "Minimalist Vase",
    src: "https://acdn-us.mitiendanube.com/stores/004/147/146/products/jarron-1-1-a19b0060c5d8ebdbe817433784311722-640-0.webp",
    price: "$89",
    link: "/shop/minimalist-vase",
  },
  {
    id: "item-3",
    name: "Artisan Chair",
    src: "https://acdn-us.mitiendanube.com/stores/004/147/146/products/t00008-4379819c69f82b692017318097495094-640-0.webp",
    price: "$499",
    link: "/shop/artisan-chair",
  },
  {
    id: "item-4",
    name: "Wall Sconce Light",
    src: "https://acdn-us.mitiendanube.com/stores/004/147/146/products/calabria-principal-d9aaab155f2c39268217372365408911-640-0.webp",
    price: "$129",
    link: "/shop/wall-sconce",
  },
  {
    id: "item-5",
    name: "Ceramic Bowl Set",
    src: "https://acdn-us.mitiendanube.com/stores/004/147/146/products/velador-0-3b3f228863598a779117433785627191-640-0.webp",
    price: "$79",
    link: "/shop/ceramic-bowl-set",
  },
  {
    id: "item-6",
    name: "Modern Coffee Table",
    src: "https://acdn-us.mitiendanube.com/stores/004/147/146/products/manta-rio-negro-e328629094beb8392d17321349508447-640-0.webp",
    price: "$449",
    link: "/shop/modern-coffee-table",
  },
];

export default function DesignShowcase() {
  return (
    <section className="bg-white py-20">
      <div className="unroot-container">
        <h2 className="text-center font-serif text-3xl md:text-4xl mb-12">
          Amamos lo que usamos
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {designItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square bg-unroot-gray-light rounded-lg overflow-hidden"
            >
              <div className="w-full h-full relative">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay with just the buy button */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300">
                  <Link
                    href={item.link}
                    className="bg-white text-black px-4 py-2 rounded-md font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    Comprar ahora
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
