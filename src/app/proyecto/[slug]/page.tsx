import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  getProjectBySlug,
  getRelatedProjects,
  getAllProjects,
} from "@/data/project";
import { Container } from "@/components/ui/container";

// Definimos los parámetros que recibe esta página
export interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Esta función es necesaria para la exportación estática con "output: export"
export async function generateStaticParams() {
  const projects = getAllProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // Obtenemos el proyecto por su slug
  const project = getProjectBySlug(params.slug);

  // Si no existe el proyecto, mostramos un 404
  if (!project) {
    notFound();
  }

  // Obtenemos los proyectos relacionados
  const relatedProjects = getRelatedProjects(project.id);

  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero de proyecto - Inspirado en Nosotras */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
              <div className="absolute inset-0 fade-mask">
                <Image
                  src={project.images[0]}
                  alt={project.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="font-instrument-serif text-3xl md:text-5xl uppercase font-medium text-black leading-tight tracking-wide mb-6">
                {project.name}
              </h1>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-black/70 text-sm bg-gray-100 px-3 py-1 font-mono text-short"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-figtree text-lg text-black/80 leading-relaxed">
                {project.content.summary}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {project.details.client && (
                  <div>
                    <h3 className="text-sm font-medium text-medium text-black/50">
                      Cliente
                    </h3>
                    <p className="text">{project.details.client}</p>
                  </div>
                )}
                {project.details.location && (
                  <div>
                    <h3 className="text-sm font-medium text-medium text-black/50">
                      Ubicación
                    </h3>
                    <p className="text">{project.details.location}</p>
                  </div>
                )}
                {project.details.year && (
                  <div>
                    <h3 className="text-sm font-medium text-medium text-black/50">
                      Año
                    </h3>
                    <p className="text">{project.details.year}</p>
                  </div>
                )}
                {project.details.size && (
                  <div>
                    <h3 className="text-sm font-medium text-medium text-black/50">
                      Superficie
                    </h3>
                    <p className="text">{project.details.size}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Secciones clave del proyecto - Con fondo de plano arquitectónico estático */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative z-10">
            <div className="space-y-6">
              {project.content.sections
                .slice(0, 2)
                .map((section: any, index: number) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-medium uppercase tracking-wider">
                      {section.title}
                    </h3>
                    <p className="font-figtree text-lg text-black/80 leading-relaxed text-long">
                      {section.text}
                    </p>
                  </div>
                ))}
            </div>

            <div className="flex flex-col w-full">
              {/* Primera fila con dos imágenes juntas */}
              <div className="flex w-full h-[300px]">
                <div className="relative w-1/2 h-full overflow-hidden">
                  <div className="absolute inset-0 fade-mask">
                    <Image
                      src={
                        project.images.length > 1
                          ? project.images[1]
                          : project.images[0]
                      }
                      alt={`${project.name} - Detalle 1`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="relative w-1/2 h-full overflow-hidden">
                  <div className="absolute inset-0 fade-mask">
                    <Image
                      src={
                        project.images.length > 2
                          ? project.images[2]
                          : project.images[0]
                      }
                      alt={`${project.name} - Detalle 2`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Segunda fila con una imagen que ocupa todo el ancho */}
              <div className="relative w-full h-[280px] mt-0 overflow-hidden">
                <div className="absolute inset-0 fade-mask">
                  <Image
                    src={
                      project.images.length > 3
                        ? project.images[3]
                        : project.images[0]
                    }
                    alt={`${project.name} - Vista general`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Galería de imágenes completa - sin título */}
      <section className="py-16">
        <Container>
          {/* Layout de imagen grande a la izquierda y 2 más pequeñas a la derecha */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-0">
            <div className="md:col-span-2 relative aspect-[16/9] overflow-hidden">
              <div className="absolute inset-0 fade-mask">
                <Image
                  src={project.images[0]}
                  alt={`${project.name} - Vista principal`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-0">
              <div className="relative aspect-square overflow-hidden">
                <div className="absolute inset-0 fade-mask">
                  <Image
                    src={
                      project.images.length > 1
                        ? project.images[1]
                        : project.images[0]
                    }
                    alt={`${project.name} - Detalle`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative aspect-square overflow-hidden">
                <div className="absolute inset-0 fade-mask">
                  <Image
                    src={
                      project.images.length > 2
                        ? project.images[2]
                        : project.images[0]
                    }
                    alt={`${project.name} - Detalle`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Grid de 4 imágenes abajo */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {project.images.slice(0, 4).map((image: string, index: number) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden"
              >
                <div className="absolute inset-0 fade-mask">
                  <Image
                    src={image}
                    alt={`${project.name} - Imagen ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Proyectos relacionados */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-instrument-serif uppercase tracking-wide">
              Proyectos relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {relatedProjects.map((relatedProject: any) => (
                <Link
                  key={relatedProject.id}
                  href={`/proyecto/${relatedProject.slug}`}
                  className="group"
                >
                  <div className="aspect-[4/3] relative overflow-hidden mb-4">
                    <div className="absolute inset-0 fade-mask">
                      <Image
                        src={relatedProject.images[0]}
                        alt={relatedProject.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105 duration-700"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-2">
                    {relatedProject.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {relatedProject.tags.slice(0, 2).map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 px-2 py-1 font-mono text-short"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <Footer />
    </main>
  );
}
