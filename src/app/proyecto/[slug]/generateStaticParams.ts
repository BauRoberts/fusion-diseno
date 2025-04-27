import { getAllProjects } from "@/data/project";

// Esta función es necesaria para la exportación estática con "output: export"
export async function generateStaticParams() {
  const projects = getAllProjects();
  
  return projects.map((project) => ({
    slug: project.slug,
  }));
}