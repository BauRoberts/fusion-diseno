// data/project.ts
export interface Project {
  id: number;
  slug: string;
  name: string;
  images: string[];
  tags: string[];
  link: string;
  description: string;
  type?: string; // Tipo de proyecto: "Residencial", "Comercial", etc.
  imageOrientation?: "horizontal" | "vertical"; // Orientación de las imágenes del proyecto
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
    slug: "terron-340",
    name: "Terrón_340",
    type: "Residencial",
    images: [
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045973/Fusion_Terron_Fachada_b6ag2t.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045972/Fusion_Terron_Galeria_uq0kmv.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045957/Fusion_Terron_Lavadero_iudya4.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045956/Fusion_Terron_Playroom_cy818s.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045953/Fusion_Terron_Contrafachada_yv42rd.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045951/Fusion_Terron_Estar_ffduoz.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045944/Fusion_Terron_Dormitorio2_zhdqkr.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045941/Fusion_Terron_Cocina_ksfekt.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045939/Fusion_Terron_Dormitorio_o2tk48.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045937/Fusion_Terron_Ban%CC%83o_z0w3da.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045934/Fusion_Terron_Anteban%CC%83o_kkgtmq.jpg",
    ],
    tags: [
      "RESIDENCIAL",
      "INTERIORISMO INTEGRAL",
      "RENDERS 3D",
      "VIVIENDA PREMIUM",
    ],
    link: "/proyecto/terron-340",
    description:
      "Proyecto de interiorismo integral que combina funcionalidad, diseño y confort para crear un hogar único.",
    details: {
      location: "Córdoba",
      year: "2025",
      services: ["Interiorismo Integral", "Renders 3D", "Mobiliario a Medida"],
    },
    content: {
      summary:
        "El Terrón_340 es un proyecto de interiorismo integral que combina funcionalidad, diseño y confort para crear un hogar único. Este proyecto incluye el diseño completo de una vivienda de 120 m² ubicada en Buenos Aires, abarcando desde la planificación de espacios hasta la selección de materiales, mobiliario y detalles decorativos.",
      sections: [
        {
          title: "Concepto de Diseño",
          text: "El proyecto se desarrolla bajo un concepto que fusiona estilo contemporáneo con elementos naturales, buscando crear ambientes cálidos y sofisticados. Se priorizó la funcionalidad sin descuidar la estética, generando espacios que invitan al disfrute de cada rincón.",
        },
        {
          title: "Espacios Principales",
          text: "El diseño contempla una distribución abierta que integra living, comedor y cocina, maximizando la sensación de amplitud y favoreciendo la interacción social. Los espacios privados fueron cuidadosamente diseñados para garantizar privacidad y confort.",
        },
        {
          title: "Materialidad",
          text: "Se optó por una paleta de materiales nobles y contemporáneos: maderas naturales, piedras y textiles de alta calidad que aportan calidez y personalidad al conjunto. Los acabados fueron seleccionados para lograr durabilidad y atemporalidad.",
        },
        {
          title: "Iluminación",
          text: "El diseño lumínico fue cuidadosamente planificado para crear atmósferas versátiles. Se combinó iluminación general, focal y decorativa para realzar los espacios y generar diferentes ambientes según las necesidades de cada momento.",
        },
        {
          title: "Mobiliario",
          text: "El mobiliario fue diseñado a medida para optimizar el uso del espacio y reflejar el estilo personal de los propietarios. Cada pieza fue pensada para complementar la arquitectura y aportar funcionalidad sin perder el carácter estético del conjunto.",
        },
      ],
    },
    relatedProjects: [2, 3, 4],
  },
  {
    id: 2,
    slug: "dlk-88",
    name: "DLK_88",
    type: "Comercial",
    images: [
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045858/Fotos_DLK_Proy-10_f0biow.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045844/Fotos_DLK_Proy-1_qrc4ko.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045867/Fotos_DLK_Proy-9_f86c3y.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045862/Fotos_DLK_Proy-8_c2ttia.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045860/Fotos_DLK_Proy-7_cxlcin.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045858/Fotos_DLK_Proy-6_mgf7v4.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045846/Fotos_DLK_Proy-5_x7lnpv.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045845/Fotos_DLK_Proy-4_wong37.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045845/Fotos_DLK_Proy-3_zqrpj7.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045845/Fotos_DLK_Proy-2_amcfi1.jpg",
    ],
    tags: ["COMERCIAL", "MOBILIARIO A MEDIDA", "DISEÑO DE LOCALES", "RETAIL"],
    link: "/proyecto/dlk-88",
    imageOrientation: "vertical",
    description:
      "Diseño integral de local comercial con mobiliario modular y funcional para accesorios.",
    details: {
      location: "Córdoba",
      year: "2025",
      services: [
        "Diseño Integral",
        "Mobiliario a Medida",
        "Diseño de Vidriera",
      ],
    },
    content: {
      summary:
        "En este proyecto desarrollamos el diseño integral de un local de accesorios con un enfoque modular y funcional, pensado para adaptarse a las distintas líneas de productos de la marca. Desde la concepción del espacio, buscamos transmitir una estética contemporánea y despojada, en la que los materiales, la iluminación y la disposición del mobiliario acompañaran el protagonismo de las piezas exhibidas.",
      sections: [
        {
          title: "Concepto de Diseño",
          text: "Diseñamos y fabricamos cada elemento a medida: los módulos de exhibición interior y de vidriera, los soportes para cada producto, el sistema de estanterías para carteras, el soporte de cinturones, la barra de atención y el probador, integrados en una paleta neutra que refuerza la identidad visual del local.",
        },
        {
          title: "Vidrieras",
          text: "Las vidrieras, pensadas como una extensión del interior, incorporan planos y niveles que destacan las piezas más representativas de la marca, logrando un efecto elegante, minimalista y coherente con la estética general del proyecto.",
        },
        {
          title: "Mobiliario",
          text: "Cada módulo fue diseñado con un enfoque modular que permite adaptarse a las diferentes temporadas y colecciones de la marca. Los materiales seleccionados refuerzan la identidad minimalista del local, con acabados que aportan calidez sin restar protagonismo a los productos.",
        },
        {
          title: "Resultado",
          text: "El resultado es un espacio cálido, ordenado y versátil, donde cada detalle fue diseñado para resaltar los productos y ofrecer una experiencia de compra fluida y coherente con el concepto de la marca.",
        },
      ],
    },
    relatedProjects: [1, 3, 4],
  },
  {
    id: 3,
    slug: "tribeca-84",
    name: "Tribeca_84",
    type: "Residencial",
    images: [
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045805/Final_Quincho_Tribeca_xzfpqb.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045749/Fotos_Tribeca_Proy-5_vfmpyu.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045800/Final_D.Principal_Tribeca_nlo1en.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045786/Final_Pileta_Tribeca_uefymg.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045736/Fotos_Tribeca_Proy-4_tcncjy.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045736/Fotos_Tribeca_Proy-2_j84qo5.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045800/Final_Living_Tribeca_2_t1mxsb.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045761/Final_Comedor_Tribeca_gobhog.jpg",
    ],
    tags: ["RESIDENCIAL", "DEPARTAMENTO MODELO", "INTERIORISMO", "RENDERS 3D"],
    link: "/proyecto/tribeca-84",
    imageOrientation: "horizontal",
    description:
      "Diseño interior completo de departamento modelo con espacios integrados y estética contemporánea.",
    details: {
      location: "Córdoba",
      year: "2025",
      services: ["Diseño Interior", "Renders 3D", "Ambientación"],
    },
    content: {
      summary:
        "En este proyecto desarrollamos el diseño interior completo de un departamento modelo, pensado para representar el estilo de vida que el edificio busca transmitir. El objetivo era crear espacios con identidad, pero que a la vez resultaran atractivos para un público amplio y diverso.",
      sections: [
        {
          title: "Concepto de Diseño",
          text: "Diseñamos el living comedor y dos dormitorios, priorizando la calidez y la neutralidad en la paleta de colores para lograr un ambiente armonioso y versátil. A través de materiales nobles, texturas suaves y una iluminación cuidadosamente planificada, buscamos reflejar un estilo contemporáneo, equilibrado y atemporal.",
        },
        {
          title: "Resultado",
          text: "El resultado es un departamento funcional, cómodo y con una estética acogedora, que invita a imaginar cómo sería vivir allí: con espacios integrados, detalles bien pensados y una atmósfera que combina diseño y cotidianidad.",
        },
      ],
    },
    relatedProjects: [1, 2, 4],
  },
  {
    id: 4,
    slug: "suite-41",
    name: "Suite_41",
    type: "Residencial",
    images: [
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045908/Fotos_Fer_Proy-11_pfzqbb.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045909/Fotos_Fer_Proy-13_wwevqp.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045908/Fotos_Fer_Proy-12_jpkxiq.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045907/Fotos_Fer_Proy-9_zthoam.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045906/Fotos_Fer_Proy-3_lnqsbr.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045904/Fotos_Fer_Proy-10_sjuq83.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045898/Fotos_Fer_Proy-8_bnyn3e.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045898/Fotos_Fer_Proy-5_ipvjwr.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045897/Fotos_Fer_Proy-7_akhjsc.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045896/Fotos_Fer_Proy-4_anzphv.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045895/Fotos_Fer_Proy-6_ba7bv8.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763045891/Fotos_Fer_Proy-1_zwraq5.jpg",
    ],
    tags: ["RESIDENCIAL", "RENOVACIÓN", "SUITE", "INTERIORISMO INTEGRAL"],
    link: "/proyecto/suite-41",
    imageOrientation: "vertical",
    description:
      "Renovación integral de suite principal con dormitorio, vestidor y baño completo.",
    details: {
      location: "Córdoba",
      year: "2025",
      size: "41 m²",
      services: [
        "Renovación Integral",
        "Diseño Interior",
        "Mobiliario a Medida",
        "Instalaciones Eléctricas y Sanitarias",
      ],
    },
    content: {
      summary:
        "En una casa con más de 30 años, transformamos por completo un dormitorio en suite de 41 m², incluyendo dormitorio principal, vestidor, antebaño y baño.",
      sections: [
        {
          title: "Renovación Integral",
          text: "Se renovaron todas las instalaciones eléctricas y sanitarias, y se diseñó un espacio funcional y cálido, con una cuidada selección de materiales, revestimientos y griferías.",
        },
        {
          title: "Diseño de Espacios",
          text: "El dormitorio integra una cama con estructura de dosel, mesas de luz, rincón de lectura, cortinas y pisos nuevos. El baño y el antebaño fueron revestidos por completo, combinando funcionalidad con una estética contemporánea y atemporal; al igual que el vestidor que se diseñó y fabricó desde cero.",
        },
        {
          title: "Resultado",
          text: "Una renovación integral que aporta diseño, confort y carácter a cada rincón.",
        },
      ],
    },
    relatedProjects: [1, 3, 2],
  },
];

// Función para obtener un proyecto por su slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

// Función para obtener todos los proyectos
export function getAllProjects(): Project[] {
  return projects;
}

// Función para obtener proyectos relacionados de un proyecto específico
export function getRelatedProjects(projectId: number): Project[] {
  const project = projects.find((p) => p.id === projectId);
  if (!project || !project.relatedProjects) return [];

  return projects.filter((p) => project.relatedProjects?.includes(p.id));
}
