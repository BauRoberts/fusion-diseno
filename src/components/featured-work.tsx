import Image from 'next/image'
import Link from 'next/link'

const featuredProjects = [
  {
    id: 1,
    name: "Workshop Film CO.",
    images: [
      "https://ext.same-assets.com/2675109532/2842233990.false",
      "https://ext.same-assets.com/2675109532/2203437193.false"
    ],
    tags: ["Website design", "Webflow Development"],
    link: "https://www.workshopfilmcompany.com/"
  },
  {
    id: 2,
    name: "Javelin VP",
    images: [
      "https://ext.same-assets.com/2675109532/3845587998.false",
      "https://ext.same-assets.com/2675109532/797053176.false"
    ],
    tags: ["Website design", "Webflow Development"],
    link: "https://www.javelinvp.com/"
  },
  {
    id: 3,
    name: "TreeCard",
    images: [
      "https://ext.same-assets.com/2675109532/1174065482.false",
      "https://ext.same-assets.com/2675109532/3771671212.false"
    ],
    tags: ["Brand Concept design", "Website design", "Webflow Development"],
    link: "https://treeconcept.webflow.io/"
  },
  {
    id: 4,
    name: "Woodwave Gallery",
    images: [
      "https://ext.same-assets.com/2675109532/4087464428.false",
      "https://ext.same-assets.com/2675109532/1463890870.false"
    ],
    tags: ["Website design", "LOgo design", "Webflow Development"],
    link: "https://woodwavegallery.webflow.io/"
  }
]

export default function FeaturedWork() {
  return (
    <section id="recent-work" className="bg-unroot-purple">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <div key={project.id} className="relative group overflow-hidden border-4 border-unroot-purple aspect-video">
            {/* Image background */}
            <div className="absolute inset-0 flex">
              <div className="w-1/2 h-full overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src={project.images[0]}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="w-1/2 h-full overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src={project.images[1]}
                    alt={`${project.name} detail`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 bg-unroot-purple bg-opacity-80 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div>
                <h3 className="text-white text-2xl font-serif mb-4">{project.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-white/70 text-sm">{tag}</span>
                  ))}
                </div>
              </div>
              <Link
                href={project.link}
                target="_blank"
                className="text-white/90 hover:text-white underline text-sm"
              >
                See Website
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
