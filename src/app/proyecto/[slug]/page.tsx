import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getRelatedProjects,
  getAllProjects,
} from "@/data/project";
import ProjectPageClient from "./project-client";

// Definimos los parámetros que recibe esta página
export interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Esta función es necesaria para la exportación estática con "output: export"
export async function generateStaticParams() {
  const projects = getAllProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // Await params before accessing properties
  const { slug } = await params;

  // Obtenemos el proyecto por su slug
  const project = getProjectBySlug(slug);

  // Si no existe el proyecto, mostramos un 404
  if (!project) {
    notFound();
  }

  // Obtenemos los proyectos relacionados
  const relatedProjects = getRelatedProjects(project.id);

  return <ProjectPageClient project={project} relatedProjects={relatedProjects} />;
}
