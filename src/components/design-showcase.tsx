import Image from 'next/image'

const designImages = [
  {
    id: "3d-work3",
    src: "https://cdn.prod.website-files.com/63b1a61bccd2eafa936ec2d8/66a921c8d5ea702e5759c332_3d-work3.jpg"
  },
  {
    id: "3d-work4",
    src: "https://cdn.prod.website-files.com/63b1a61bccd2eafa936ec2d8/66a921c8811b84e9a231a050_3d-work4.jpg"
  },
  {
    id: "3d-work6",
    src: "https://cdn.prod.website-files.com/63b1a61bccd2eafa936ec2d8/66a921c881b1102f6e9ad494_3d-work6.jpg"
  }
]

export default function DesignShowcase() {
  return (
    <section className="bg-white py-20">
      <div className="unroot-container">
        <h2 className="text-center font-serif text-3xl md:text-4xl mb-12">We love 3D design</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[...designImages, ...designImages].map((image, index) => (
            <div key={image.id} className="aspect-square bg-unroot-gray-light rounded-lg overflow-hidden">
              <div className="w-full h-full relative">
                <Image
                  src={image.src}
                  alt={`3D design example ${image.id}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
