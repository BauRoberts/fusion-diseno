import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getAllProjects } from "@/data/project";
import { Container } from "@/components/ui/container";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="bg-white min-h-screen">
      <Header />
      
      {/* Hero de proyectos - Estilo Nosotras */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
              <div className="absolute inset-0 fade-mask">
                <Image
                  src={projects[0].images[0]}
                  alt="Proyectos Destacados"
                  fill
                  className="object-cover grayscale"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="font-instrument-serif text-3xl md:text-4xl uppercase font-medium text-black leading-tight tracking-wide">
                Nuestros Proyectos
              </h1>
              <p className="font-figtree text-lg text-black/80 leading-relaxed mt-6">
                Descubre nuestra colección de proyectos de diseño interior y arquitectura, 
                donde cada espacio refleja nuestra pasión por el diseño y la funcionalidad.
                Fusionamos estética y funcionalidad para crear espacios que transmiten 
                emociones e inspiran la vida cotidiana.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Grid de proyectos - Primera sección, dos proyectos destacados */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="flex flex-col w-full">
            {/* Primera fila: proyectos destacados */}
            <div className="flex flex-col md:flex-row w-full">
              {projects.slice(0, 2).map((project, index) => (
                <Link 
                  key={project.id} 
                  href={`/proyecto/${project.slug}`}
                  className="group w-full md:w-1/2"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <div className="absolute inset-0 fade-mask">
                      <Image
                        src={project.images[0]}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 p-6 z-10">
                      <h3 className="text-xl font-medium text-white font-instrument-serif uppercase">{project.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Segunda fila: proyecto a ancho completo */}
            <Link 
              href={projects.length > 2 ? `/proyecto/${projects[2].slug}` : `/proyecto/${projects[0].slug}`}
              className="group w-full block mt-0"
            >
              <div className="aspect-[21/9] relative overflow-hidden">
                <div className="absolute inset-0 fade-mask">
                  <Image
                    src={projects.length > 2 ? projects[2].images[0] : projects[0].images[0]}
                    alt={projects.length > 2 ? projects[2].name : projects[0].name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h3 className="text-xl font-medium text-white font-instrument-serif uppercase">
                    {projects.length > 2 ? projects[2].name : projects[0].name}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* Grid de proyectos - Todos los proyectos */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                href={`/proyecto/${project.slug}`}
                className="group relative"
              >
                <div className="aspect-square relative overflow-hidden">
                  <div className="absolute inset-0 fade-mask">
                    <Image
                      src={project.images[0]}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                    <div className="p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-medium text-white font-instrument-serif uppercase">{project.name}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.slice(0, 2).map((tag: string) => (
                          <span
                            key={tag}
                            className="text-xs bg-white/20 px-2 py-1 text-white font-mono text-short"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Categorías de servicio - Estilo fondo de plano */}
      <section className="py-16 bg-neutral-50 relative">
        {/* Fondo estático de plano arquitectónico */}
        <div className="absolute inset-0 w-full h-full z-0 opacity-10">
          <Image
            src="https://laurao.com/assets/LauraO_3-9718440d.svg"
            alt="Floor Plan Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <Container>
          <div className="text-center relative z-10 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-instrument-serif uppercase tracking-wide mb-6">
              Tipos de Proyectos
            </h2>
            <p className="font-figtree text-lg text-black/80 leading-relaxed max-w-3xl mx-auto">
              Trabajamos en una amplia variedad de espacios, desde residenciales hasta comerciales,
              aplicando nuestro enfoque de diseño personalizado a cada proyecto.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0 relative z-10">
            {[
              "Casas y Departamentos",
              "Oficinas",
              "Locales Comerciales",
              "Cafés y Restaurantes",
              "Remodelaciones",
              "Proyecto desde Obra",
              "Mobiliario a Medida",
              "Branding de Espacios"
            ].map((categoria) => (
              <div key={categoria} className="p-4 border-t border-black/10">
                <span className="text-sm uppercase tracking-wider font-mono">{categoria}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}