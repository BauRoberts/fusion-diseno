// data/project.ts
export interface Project {
  id: number;
  slug: string;
  name: string;
  images: string[];
  tags: string[];
  link: string;
  description: string;
  details: {
    client?: string;
    location?: string;
    year?: string;
    size?: string;
    services?: string[];
  };
  content: {
    summary: string;
    sections: Array<{
      title: string;
      text: string;
      image?: string;
    }>;
  };
  relatedProjects?: number[]; // IDs de proyectos relacionados
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "casa-m930",
    name: "Casa M930",
    images: [
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/733cfe1d-44ba-4219-aa46-74c38210e7b1/Himera+Estudio_Casa+M930.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/3ebd9669-3f7d-42a2-9eb6-24a9a4ee0074/Himera+Estudio_Casa+M930_Dormitorio+A.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/1710501804851-VPBWD3PM22WPWUNRHQVM/Himera+Estudio_Casa+M930_Ba%C3%B1o+A.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/1710501806096-149FY7RSERU2LEYHXSY1/Himera+Estudio_Casa+M930_Ba%C3%B1o+B.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/ab54ae0d-a81f-4187-b1fe-bebb99206671/Himera+Estudio_Casa+M930_Dormitorio+B.png?format=1000w",
    ],
    tags: ["INTERIOR DESIGN", "RESIDENTIAL", "RENOVATION"],
    link: "/proyecto/casa-m930",
    description: "Diseño interior completo de una residencia moderna con espacios abiertos y luminosos.",
    details: {
      client: "Cliente Privado",
      location: "Barcelona",
      year: "2023",
      size: "180 m²",
      services: ["Diseño Interior", "Arquitectura", "Mobiliario a Medida"]
    },
    content: {
      summary: "Casa M930 es un proyecto residencial que combina funcionalidad y estética para crear un espacio acogedor y contemporáneo. El diseño se centra en maximizar la luz natural y crear un flujo armonioso entre las distintas áreas de la vivienda.",
      sections: [
        {
          title: "Concepto de Diseño",
          text: "Para este proyecto, buscamos un equilibrio entre la calidez y la elegancia. Utilizamos una paleta de colores neutros con acentos en tonos naturales para crear una atmósfera serena y sofisticada."
        },
        {
          title: "Espacio Principal",
          text: "El área principal de la casa combina zonas de estar, comedor y cocina en un espacio abierto que promueve la interacción social y familiar. La luz natural inunda el espacio a través de grandes ventanales."
        },
        {
          title: "Dormitorios",
          text: "Los dormitorios fueron diseñados como santuarios de descanso, con especial atención a los textiles y la iluminación para crear ambientes relajantes y confortables."
        },
        {
          title: "Baños",
          text: "En los baños apostamos por materiales de alta calidad y diseño minimalista para crear espacios funcionales que transmiten una sensación de lujo y bienestar."
        }
      ]
    },
    relatedProjects: [2, 3]
  },
  {
    id: 2,
    slug: "casa-gv22",
    name: "Casa GV22",
    images: [
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/c8588125-ce4c-4686-9deb-6bd246f0b81f/Himera+Estudio+Casa+GV22+Reforma+Integral+Vigo?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/1664989484956-0ZMNM4B7CM14ODU12E6S/Himera+Estudio_Casa+GV22_Comedor.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/1664989485380-4AGO6TMJ345QY5CXAUXO/Himera+Estudio_Casa+GV22_Despacho.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/1664989604570-CZSOF95F2E19S35D7NL4/Himera+Estudio_Casa+GV22_Detalle+caj%C3%B3n.png?format=1000w",
    ],
    tags: ["INTERIOR DESIGN", "RESIDENTIAL", "RENOVATION"],
    link: "/proyecto/casa-gv22",
    description: "Reforma integral de una vivienda familiar con énfasis en la funcionalidad y el confort.",
    details: {
      client: "Cliente Privado",
      location: "Vigo",
      year: "2022",
      size: "150 m²",
      services: ["Reforma Integral", "Diseño Interior", "Mobiliario"]
    },
    content: {
      summary: "Casa GV22 es una reforma integral donde se replanteó por completo la distribución para adaptarla a las necesidades de una familia contemporánea. El resultado es un espacio funcional que no renuncia a la estética y el diseño.",
      sections: [
        {
          title: "Concepto de Diseño",
          text: "El proyecto se centró en crear espacios versátiles y funcionales sin perder calidez. Se optó por una estética contemporánea con toques clásicos para conseguir un ambiente atemporal."
        },
        {
          title: "Espacios Sociales",
          text: "Diseñamos un área social abierta que integra salón y comedor, facilitando la interacción familiar. La elección de materiales y texturas crea diferentes ambientes dentro del espacio abierto."
        },
        {
          title: "Despacho",
          text: "Se creó un espacio de trabajo funcional integrado en la vivienda, con especial atención a la iluminación y ergonomía para garantizar productividad y confort."
        },
        {
          title: "Detalles",
          text: "Prestamos especial atención a los detalles constructivos y de almacenamiento, desarrollando soluciones a medida que maximizan el espacio disponible y añaden carácter al conjunto."
        }
      ]
    },
    relatedProjects: [1, 3]
  },
  {
    id: 3,
    slug: "casa-v268",
    name: "Casa V268",
    images: [
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/c8bc557e-2525-4699-bb81-4b3dfc760d3c/Himera+Estudio+Casa+V268+Interiorismo+Decoracion+Vigo?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/d47effe3-7757-4945-8f1d-f4a584dfe8b7/Himera+Estudio+Casa+V268+Entrada+%28Reforma+integral+en+Vigo%29?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/1664980847040-IQ1SV5UY1CAYE8T956GG/Himera+Estudio_Casa+V268_Comedor.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/1710498323449-LQIBC1GMD4TAO9DGTNMP/Himera+Estudio_Casa+V268_Salon.png?format=1000w",
    ],
    tags: ["INTERIORISMO", "MOBILIARIO", "RENOVACION"],
    link: "/proyecto/casa-v268",
    description: "Un proyecto de interiorismo que combina piezas contemporáneas con elementos clásicos.",
    details: {
      client: "Cliente Privado",
      location: "Vigo",
      year: "2023",
      size: "165 m²",
      services: ["Interiorismo", "Mobiliario", "Decoración"]
    },
    content: {
      summary: "Casa V268 es un proyecto de interiorismo donde se conservó la esencia original de la vivienda mientras se actualizaban sus espacios para adaptarlos a un estilo de vida contemporáneo.",
      sections: [
        {
          title: "Concepto de Diseño",
          text: "Buscamos un equilibrio entre lo contemporáneo y lo tradicional, respetando elementos arquitectónicos originales mientras introducíamos elementos modernos para crear un contraste armonioso."
        },
        {
          title: "Entrada",
          text: "La entrada fue diseñada como una declaración de intenciones, con un diseño sobrio pero impactante que anticipa la estética del resto de la vivienda."
        },
        {
          title: "Comedor",
          text: "El comedor se concibió como un espacio elegante y acogedor, donde la mesa central actúa como punto focal, complementada por iluminación cuidadosamente seleccionada."
        },
        {
          title: "Salón",
          text: "En el salón se crearon diferentes ambientes para lectura, conversación y entretenimiento, unidos por una estética coherente pero con personalidad propia."
        }
      ]
    },
    relatedProjects: [1, 4]
  },
  {
    id: 4,
    slug: "casa-pa2",
    name: "Casa PA2",
    images: [
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/12a29080-650f-4ace-862b-218609aff251/Himera+Estudio+Casa+PA2+Interiorismo+Valencia?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/1710498653605-DM6KO9E3XDDRAOYK6XYG/Himera+Estudio_Casa+PA2_Comedor+B.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/e70d3963-2f68-4493-86a4-ae3c5deff491/Himera+Estudio_Casa+PA2_Cocina.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62da949aefe9a643bf3c3de4/1710498783222-WLBVTL7WRT5FAZZCRNO8/Himera+Estudio_Casa+PA2_Puerta.png?format=1000w",
    ],
    tags: ["INTERIORISMO", "DESIGN", "DESARROLLO"],
    link: "/proyecto/casa-pa2",
    description: "Un espacio residencial con personalidad única y atención al detalle.",
    details: {
      client: "Cliente Privado",
      location: "Valencia",
      year: "2023",
      size: "120 m²",
      services: ["Interiorismo", "Diseño", "Desarrollo"]
    },
    content: {
      summary: "Casa PA2 es un proyecto que refleja la personalidad de sus propietarios mediante una cuidada selección de materiales, colores y mobiliario. Cada detalle fue pensado para crear un espacio único y cálido.",
      sections: [
        {
          title: "Concepto de Diseño",
          text: "El concepto de este proyecto se centró en crear un espacio con identidad propia, incorporando elementos de diseño contemporáneo con un enfoque en la artesanía y los materiales naturales."
        },
        {
          title: "Comedor",
          text: "El comedor fue concebido como un espacio de reunión, con una mesa generosa y una iluminación que favorece tanto las comidas familiares como las reuniones sociales."
        },
        {
          title: "Cocina",
          text: "La cocina combina funcionalidad y estética, con materiales duraderos y un diseño que facilita el trabajo culinario sin sacrificar la estética del conjunto."
        },
        {
          title: "Detalles Arquitectónicos",
          text: "Prestamos especial atención a elementos arquitectónicos como puertas y transiciones entre espacios, utilizándolos como oportunidades para añadir personalidad al proyecto."
        }
      ]
    },
    relatedProjects: [2, 3]
  },
];

// Función para obtener un proyecto por su slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

// Función para obtener todos los proyectos
export function getAllProjects(): Project[] {
  return projects;
}

// Función para obtener proyectos relacionados de un proyecto específico
export function getRelatedProjects(projectId: number): Project[] {
  const project = projects.find(p => p.id === projectId);
  if (!project || !project.relatedProjects) return [];
  
  return projects.filter(p => project.relatedProjects?.includes(p.id));
}