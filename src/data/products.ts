// data/products.ts

export interface OrientacionOption {
  id: string;
  label: string;
  image?: string; // Opcional: imagen del diagrama de orientación
}

export interface TelaOption {
  id: string;
  nombre: string;
  tipo: "pana" | "tusor" | "panama" | "otro";
  color?: string;
  imagen?: string;
}

export interface MedidaOption {
  id: string;
  label: string;
  medidas: {
    ancho: string;
    profundidad: string;
  };
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: "sillones" | "otros-productos"; // Categoría del producto
  images: string[]; // Imágenes del producto
  imageAspects?: ("horizontal" | "square" | "vertical")[]; // Aspect ratio de cada imagen para mobile
  dimensionesImage?: string; // Imagen de dimensiones para mostrar en la sección de detalles
  thumbnail: string; // Imagen principal para el listado
  description: string;
  detailDescription: string; // Descripción más larga para la página del producto

  details: {
    materialidad: string;
    dimensiones: {
      alturaTotal: string;
      anchoAsiento: string;
      profundidadAsiento: string;
      alturaAsiento: string;
      anchoApoyaBrazo?: string;
      alturaApoyaBrazo?: string;
    };
  };

  customizationOptions: {
    orientaciones: OrientacionOption[];
    telas: TelaOption[];
    medidas?: MedidaOption[];
  };

  politicas: {
    produccion: string;
    envio: string;
    pago: string;
  };

  caracteristicas: string[]; // Lista de características destacadas
}

// Opciones de orientación comunes
const orientacionesComunes: OrientacionOption[] = [
  {
    id: "derecha",
    label: "Derecha",
    image: "/derecha.svg"
  },
  {
    id: "izquierda",
    label: "Izquierda",
    image: "/izquierda.svg"
  },
  {
    id: "lineal-puff",
    label: "Lineal o puff",
    image: "/lineal.svg"
  }
];

// Catálogo de telas disponibles
const telasDisponibles: TelaOption[] = [
  {
    id: "pana-arena",
    nombre: "Pana Arena",
    tipo: "pana",
    color: "#D4C5B0"
  },
  {
    id: "pana-terracota",
    nombre: "Pana Terracota",
    tipo: "pana",
    color: "#C65D3B"
  },
  {
    id: "tusor-gris",
    nombre: "Tusor Gris",
    tipo: "tusor",
    color: "#8B8B8B"
  },
  {
    id: "tusor-beige",
    nombre: "Tusor Beige",
    tipo: "tusor",
    color: "#E5D4C1"
  },
  {
    id: "panama-crudo",
    nombre: "Panamá Crudo",
    tipo: "panama",
    color: "#F5F1E8"
  },
  {
    id: "panama-carbon",
    nombre: "Panamá Carbón",
    tipo: "panama",
    color: "#3A3A3A"
  }
];

// Productos disponibles
export const products: Product[] = [
  {
    id: 1,
    slug: "sillon-canela",
    name: "Sillón Canela",
    category: "sillones",
    thumbnail: "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Canela__r3kxop.jpg",
    images: [
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Canela__r3kxop.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Canela_3__mztega.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065092/Canela_1__vm2y5d.jpg"
    ],
    imageAspects: ["horizontal", "square", "horizontal"], // Aspect ratio de cada imagen
    dimensionesImage: "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Canela_Dimensiones_v8r0mr.jpg", // Imagen de dimensiones para mostrar en detalles
    description: "El Sillón Canela conserva la elegancia y el equilibrio característicos del modelo, adaptados a una escala más compacta.",
    detailDescription: "El Sillón Canela conserva la elegancia y el equilibrio característicos del modelo, adaptados a una escala más compacta. Sus líneas finas y proporciones delgadas se combinan con apoyabrazos y respaldo estilizados, mientras que el amplio pillow aporta confort y presencia. El tusor, con su caída relajada, realza su estética contemporánea y acogedora.",

    details: {
      materialidad: "Estructura de madera con sistema de suspensión de alta resistencia. Asientos con espuma soft de 28 kg/m³ y recubrimiento en vellón siliconado para mayor suavidad y confort. Toda la estructura está completamente revestida en espuma, garantizando una superficie envolvente y mullida. Almohadones con cierre en asiento y respaldo. Patas invisibles para un diseño limpio, liviano y elegante.",
      dimensiones: {
        alturaTotal: "75 cm",
        anchoAsiento: "80 cm",
        profundidadAsiento: "80 cm",
        alturaAsiento: "42 cm",
        anchoApoyaBrazo: "7 cm",
        alturaApoyaBrazo: "58 cm"
      }
    },

    customizationOptions: {
      orientaciones: orientacionesComunes,
      telas: telasDisponibles,
      medidas: [
        {
          id: "estandar",
          label: "Estándar (80x80cm)",
          medidas: { ancho: "80 cm", profundidad: "80 cm" }
        },
        {
          id: "medida-especial",
          label: "Medida especial (consultar)",
          medidas: { ancho: "A medida", profundidad: "A medida" }
        }
      ]
    },

    politicas: {
      produccion: "Tiempo de producción estimado: 15 a 25 días hábiles (puede extenderse para medidas especiales).",
      envio: "Envío en Córdoba mediante flete. Envíos al interior del país a través de Andreani. Los envíos al interior requieren embalaje especial con costo adicional. No nos responsabilizamos por daños ocasionados durante el transporte.",
      pago: "Aceptamos efectivo, transferencia o depósito bancario. Se abona un 50% al confirmar el pedido y el 50% restante antes de la entrega."
    },

    caracteristicas: [
      "Disponible en pana, tusor o panamá",
      "Espuma soft ajustable según preferencia",
      "Incluye todas las almohadas",
      "Medidas adaptables a tu espacio",
      "Patas invisibles para diseño limpio"
    ]
  },
  {
    id: 2,
    slug: "sillon-habano",
    name: "Sillón Habano",
    category: "sillones",
    thumbnail: "https://res.cloudinary.com/djs4laafl/image/upload/v1763071815/Habano__vebgdv.jpg",
    images: [
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763071815/Habano__vebgdv.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763071812/Habano_1__l5tmav.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763071812/Habano_2__ofgxw8.jpg"
    ],
    imageAspects: ["horizontal", "horizontal", "horizontal"],
    dimensionesImage: "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Canela_Dimensiones_v8r0mr.jpg",
    description: "El Sillón Habano impone presencia y carácter desde su diseño.",
    detailDescription: "El Sillón Habano impone presencia y carácter desde su diseño. De proporciones generosas y líneas sólidas, combina respaldos y apoyabrazos anchos que aportan una sensación de importancia y contención. Su volumetría pura, sin base visible ni almohadones sueltos, crea una pieza de gran peso visual y estética escultórica. Tapizado en cuero, su superficie realza la nobleza del material y refuerza su impronta sofisticada y atemporal.",
    details: {
      materialidad: "Estructura de madera con sistema de suspensión de alta resistencia. Asientos con espuma soft de 28 kg/m³ y recubrimiento en vellón siliconado para mayor suavidad y confort. Toda la estructura está completamente revestida en espuma, garantizando una superficie envolvente y mullida. Almohadones con cierre en asiento y respaldo. Patas invisibles para un diseño limpio, liviano y elegante.",
      dimensiones: {
        alturaTotal: "70 cm",
        anchoAsiento: "75 cm",
        profundidadAsiento: "75 cm",
        alturaAsiento: "42 cm",
        anchoApoyaBrazo: "15 cm",
        alturaApoyaBrazo: "70 cm"
      }
    },
    customizationOptions: {
      orientaciones: orientacionesComunes,
      telas: [
        { id: "cuero", nombre: "Cuero", tipo: "otro" },
        { id: "ecocuero", nombre: "Ecocuero", tipo: "otro" }
      ],
      medidas: [
        { id: "estandar", label: "Estándar (75x75cm)", medidas: { ancho: "75 cm", profundidad: "75 cm" } },
        { id: "medida-especial", label: "Medida especial (consultar)", medidas: { ancho: "A medida", profundidad: "A medida" } }
      ]
    },
    politicas: {
      produccion: "Tiempo de producción estimado: 25 a 35 días hábiles (puede extenderse para medidas especiales).",
      envio: "Envío en Córdoba mediante flete. Envíos al interior del país a través de Andreani. Los envíos al interior requieren embalaje especial con costo adicional. No nos responsabilizamos por daños ocasionados durante el transporte.",
      pago: "Aceptamos efectivo, transferencia o depósito bancario. Se abona un 50% al confirmar el pedido y el 50% restante antes de la entrega."
    },
    caracteristicas: [
      "Tapizado en cuero o ecocuero",
      "Espuma soft ajustable según preferencia",
      "Incluye todas las almohadas",
      "Medidas adaptables a tu espacio",
      "Patas invisibles para diseño limpio"
    ]
  },
  {
    id: 3,
    slug: "sillon-espresso",
    name: "Sillón Espresso",
    category: "sillones",
    thumbnail: "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Espresso_4_em3xfx.png",
    images: [
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Espresso_4_em3xfx.png",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Espresso_1_d1q1bg.png",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065092/espresso_2_megv2f.jpg"
    ],
    imageAspects: ["horizontal", "horizontal", "horizontal"],
    dimensionesImage: "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Canela_Dimensiones_v8r0mr.jpg",
    description: "El Sillón Espresso es sinónimo de confort absoluto.",
    detailDescription: "El Sillón Espresso es sinónimo de confort absoluto. Con sus proporciones generosas y diseño ergonómico, ofrece una experiencia de relajación incomparable. Cada detalle ha sido cuidadosamente pensado para proporcionar el máximo confort sin comprometer la elegancia. Su estructura sólida y su revestimiento envolvente lo convierten en la opción perfecta para aquellos que buscan el equilibrio ideal entre estilo y funcionalidad.",
    details: {
      materialidad: "Estructura de madera con sistema de suspensión de alta resistencia. Asientos con espuma soft de 28 kg/m³ y recubrimiento en vellón siliconado para mayor suavidad y confort. Toda la estructura está completamente revestida en espuma, garantizando una superficie envolvente y mullida. Almohadones con cierre en asiento y respaldo. Patas invisibles para un diseño limpio, liviano y elegante.",
      dimensiones: {
        alturaTotal: "75 cm",
        anchoAsiento: "85 cm",
        profundidadAsiento: "85 cm",
        alturaAsiento: "42 cm",
        anchoApoyaBrazo: "10 cm",
        alturaApoyaBrazo: "58 cm"
      }
    },
    customizationOptions: {
      orientaciones: orientacionesComunes,
      telas: telasDisponibles,
      medidas: [
        {
          id: "estandar",
          label: "Estándar (85x85cm)",
          medidas: { ancho: "85 cm", profundidad: "85 cm" }
        },
        {
          id: "medida-especial",
          label: "Medida especial (consultar)",
          medidas: { ancho: "A medida", profundidad: "A medida" }
        }
      ]
    },
    politicas: {
      produccion: "Tiempo de producción estimado: 15 a 25 días hábiles (puede extenderse para medidas especiales).",
      envio: "Envío en Córdoba mediante flete. Envíos al interior del país a través de Andreani. Los envíos al interior requieren embalaje especial con costo adicional. No nos responsabilizamos por daños ocasionados durante el transporte.",
      pago: "Aceptamos efectivo, transferencia o depósito bancario. Se abona un 50% al confirmar el pedido y el 50% restante antes de la entrega."
    },
    caracteristicas: [
      "Disponible en pana, tusor o panamá",
      "Espuma soft ajustable según preferencia",
      "Incluye todas las almohadas",
      "Medidas adaptables a tu espacio",
      "Patas invisibles para diseño limpio"
    ]
  },
  {
    id: 4,
    slug: "sillon-humo",
    name: "Sillón Humo",
    category: "sillones",
    thumbnail: "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Humo_1_etj7dp.png",
    images: [
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Humo_1_etj7dp.png",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065092/Humo_4__ofjzo8.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Humo_2_btkuho.jpg"
    ],
    imageAspects: ["horizontal", "horizontal", "horizontal"],
    dimensionesImage: "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Canela_Dimensiones_v8r0mr.jpg",
    description: "El Sillón Humo combina diseño moderno con confort duradero.",
    detailDescription: "El Sillón Humo combina diseño moderno con confort duradero. Sus líneas limpias y proporciones equilibradas crean una silueta sofisticada que se adapta a cualquier espacio. Con apoyabrazos generosos y un respaldo envolvente, ofrece un confort excepcional sin sacrificar la estética. Una pieza versátil que funciona como complemento perfecto para cualquier ambiente contemporáneo.",
    details: {
      materialidad: "Estructura de madera con sistema de suspensión de alta resistencia. Asientos con espuma soft de 28 kg/m³ y recubrimiento en vellón siliconado para mayor suavidad y confort. Toda la estructura está completamente revestida en espuma, garantizando una superficie envolvente y mullida. Almohadones con cierre en asiento y respaldo. Patas invisibles para un diseño limpio, liviano y elegante.",
      dimensiones: {
        alturaTotal: "70 cm",
        anchoAsiento: "75 cm",
        profundidadAsiento: "75 cm",
        alturaAsiento: "42 cm",
        anchoApoyaBrazo: "20 cm",
        alturaApoyaBrazo: "70 cm"
      }
    },
    customizationOptions: {
      orientaciones: orientacionesComunes,
      telas: [
        { id: "pana-arena", nombre: "Pana Arena", tipo: "pana", color: "#D4C5B0" },
        { id: "pana-terracota", nombre: "Pana Terracota", tipo: "pana", color: "#C65D3B" },
        { id: "panama-crudo", nombre: "Panamá Crudo", tipo: "panama", color: "#F5F1E8" },
        { id: "panama-carbon", nombre: "Panamá Carbón", tipo: "panama", color: "#3A3A3A" }
      ],
      medidas: [
        {
          id: "estandar",
          label: "Estándar (75x75cm)",
          medidas: { ancho: "75 cm", profundidad: "75 cm" }
        },
        {
          id: "medida-especial",
          label: "Medida especial (consultar)",
          medidas: { ancho: "A medida", profundidad: "A medida" }
        }
      ]
    },
    politicas: {
      produccion: "Tiempo de producción estimado: 15 a 25 días hábiles (puede extenderse para medidas especiales).",
      envio: "Envío en Córdoba mediante flete. Envíos al interior del país a través de Andreani. Los envíos al interior requieren embalaje especial con costo adicional. No nos responsabilizamos por daños ocasionados durante el transporte.",
      pago: "Aceptamos efectivo, transferencia o depósito bancario. Se abona un 50% al confirmar el pedido y el 50% restante antes de la entrega."
    },
    caracteristicas: [
      "Disponible en pana o panamá",
      "Espuma soft ajustable según preferencia",
      "Incluye todas las almohadas",
      "Medidas adaptables a tu espacio",
      "Patas invisibles para diseño limpio"
    ]
  },
  {
    id: 5,
    slug: "sillon-malta",
    name: "Sillón Malta",
    category: "sillones",
    thumbnail: "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Malta_2_pvgsnd.png",
    images: [
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Malta_2_pvgsnd.png",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065092/Malta_o5jfsp.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Malta_1__puxnku.png"
    ],
    imageAspects: ["horizontal", "horizontal", "horizontal"],
    dimensionesImage: "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Canela_Dimensiones_v8r0mr.jpg",
    description: "El Sillón Malta presenta un diseño minimalista y funcional.",
    detailDescription: "El Sillón Malta presenta un diseño minimalista y funcional que prioriza la comodidad sin adornos superfluos. Sus líneas limpias y su ausencia de apoyabrazos crean una silueta esbelta y versátil. Con proporciones generosas en el asiento y un respaldo elegante, ofrece confort excepcional en un formato compacto. Perfecto para espacios modernos que valoran la simplicidad y la estética contemporánea.",
    details: {
      materialidad: "Estructura de madera con sistema de suspensión de alta resistencia. Asientos con espuma soft de 28 kg/m³ y recubrimiento en vellón siliconado para mayor suavidad y confort. Toda la estructura está completamente revestida en espuma, garantizando una superficie envolvente y mullida. Almohadones con cierre en asiento y respaldo. Patas invisibles para un diseño limpio, liviano y elegante.",
      dimensiones: {
        alturaTotal: "75 cm",
        anchoAsiento: "100 cm",
        profundidadAsiento: "90 cm",
        alturaAsiento: "42 cm"
      }
    },
    customizationOptions: {
      orientaciones: orientacionesComunes,
      telas: [
        { id: "tusor-gris", nombre: "Tusor Gris", tipo: "tusor", color: "#8B8B8B" },
        { id: "tusor-beige", nombre: "Tusor Beige", tipo: "tusor", color: "#E5D4C1" },
        { id: "panama-crudo", nombre: "Panamá Crudo", tipo: "panama", color: "#F5F1E8" },
        { id: "panama-carbon", nombre: "Panamá Carbón", tipo: "panama", color: "#3A3A3A" }
      ],
      medidas: [
        {
          id: "estandar",
          label: "Estándar (100x90cm)",
          medidas: { ancho: "100 cm", profundidad: "90 cm" }
        },
        {
          id: "medida-especial",
          label: "Medida especial (consultar)",
          medidas: { ancho: "A medida", profundidad: "A medida" }
        }
      ]
    },
    politicas: {
      produccion: "Tiempo de producción estimado: 15 a 25 días hábiles (puede extenderse para medidas especiales).",
      envio: "Envío en Córdoba mediante flete. Envíos al interior del país a través de Andreani. Los envíos al interior requieren embalaje especial con costo adicional. No nos responsabilizamos por daños ocasionados durante el transporte.",
      pago: "Aceptamos efectivo, transferencia o depósito bancario. Se abona un 50% al confirmar el pedido y el 50% restante antes de la entrega."
    },
    caracteristicas: [
      "Disponible en tusor o panamá",
      "Espuma soft ajustable según preferencia",
      "Incluye todas las almohadas",
      "Medidas adaptables a tu espacio",
      "Patas invisibles para diseño limpio"
    ]
  },
  {
    id: 6,
    slug: "sillon-tabaco",
    name: "Sillón Tabaco",
    category: "sillones",
    thumbnail: "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Tabaco__impimq.jpg",
    images: [
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Tabaco__impimq.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065092/Tabaco_5__j4tpzw.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Tabaco_4__a5ajrn.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Tabaco_2_dfhuq8.jpg"
    ],
    imageAspects: ["horizontal", "horizontal", "horizontal", "square"],
    dimensionesImage: "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Canela_Dimensiones_v8r0mr.jpg",
    description: "El Sillón Tabaco exuda carácter y sofisticación.",
    detailDescription: "El Sillón Tabaco exuda carácter y sofisticación con su tapizado noble en cuero. Sus proporciones equilibradas y su diseño atemporal crean una pieza de presencia imponente. Los apoyabrazos estilizados y el respaldo envolvente ofrecen confort excepcional, mientras que la textura del cuero aporta calidez y refinamiento. Una elección perfecta para quienes buscan calidad, durabilidad y elegancia sin concesiones.",
    details: {
      materialidad: "Estructura de madera con sistema de suspensión de alta resistencia. Asientos con espuma soft de 28 kg/m³ y recubrimiento en vellón siliconado para mayor suavidad y confort. Toda la estructura está completamente revestida en espuma, garantizando una superficie envolvente y mullida. Almohadones con cierre en asiento y respaldo. Patas invisibles para un diseño limpio, liviano y elegante.",
      dimensiones: {
        alturaTotal: "75 cm",
        anchoAsiento: "80 cm",
        profundidadAsiento: "80 cm",
        alturaAsiento: "42 cm",
        anchoApoyaBrazo: "7 cm",
        alturaApoyaBrazo: "75 cm"
      }
    },
    customizationOptions: {
      orientaciones: orientacionesComunes,
      telas: [
        { id: "cuero", nombre: "Cuero", tipo: "otro" },
        { id: "ecocuero", nombre: "Ecocuero", tipo: "otro" }
      ],
      medidas: [
        { id: "estandar", label: "Estándar (80x80cm)", medidas: { ancho: "80 cm", profundidad: "80 cm" } },
        { id: "medida-especial", label: "Medida especial (consultar)", medidas: { ancho: "A medida", profundidad: "A medida" } }
      ]
    },
    politicas: {
      produccion: "Tiempo de producción estimado: 25 a 35 días hábiles (puede extenderse para medidas especiales).",
      envio: "Envío en Córdoba mediante flete. Envíos al interior del país a través de Andreani. Los envíos al interior requieren embalaje especial con costo adicional. No nos responsabilizamos por daños ocasionados durante el transporte.",
      pago: "Aceptamos efectivo, transferencia o depósito bancario. Se abona un 50% al confirmar el pedido y el 50% restante antes de la entrega."
    },
    caracteristicas: [
      "Tapizado en cuero o ecocuero",
      "Espuma soft ajustable según preferencia",
      "Incluye todas las almohadas",
      "Medidas adaptables a tu espacio",
      "Patas invisibles para diseño limpio"
    ]
  },
  {
    id: 7,
    slug: "sillon-tao",
    name: "Sillón Tao",
    category: "sillones",
    thumbnail: "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Tao_avijeu.jpg",
    images: [
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Tao_avijeu.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065092/Tao_4__wqiqrd.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Tao_3__zknxg7.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Tao_1__o8stip.jpg",
      "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Tao_2__bcwzf6.jpg"
    ],
    imageAspects: ["horizontal", "horizontal", "horizontal", "horizontal", "horizontal"],
    dimensionesImage: "https://res.cloudinary.com/djs4laafl/image/upload/v1763065093/Canela_Dimensiones_v8r0mr.jpg",
    description: "El Sillón Tao representa el equilibrio perfecto entre forma y función.",
    detailDescription: "El Sillón Tao representa el equilibrio perfecto entre forma y función. Con sus líneas armoniosas y proporciones cuidadosamente calibradas, transmite una sensación de calma y equilibrio. Los apoyabrazos medios y el respaldo ergonómico brindan confort sin invasión, mientras que su perfil esbelta mantiene una presencia arquitectónica. Disponible en tonalidades cálidas que realzan su carácter meditativo, es la opción ideal para espacios que buscan tranquilidad y belleza.",
    details: {
      materialidad: "Estructura de madera con sistema de suspensión de alta resistencia. Asientos con espuma soft de 28 kg/m³ y recubrimiento en vellón siliconado para mayor suavidad y confort. Toda la estructura está completamente revestida en espuma, garantizando una superficie envolvente y mullida. Almohadones con cierre en asiento y respaldo. Patas invisibles para un diseño limpio, liviano y elegante.",
      dimensiones: {
        alturaTotal: "75 cm",
        anchoAsiento: "80 cm",
        profundidadAsiento: "80 cm",
        alturaAsiento: "42 cm",
        anchoApoyaBrazo: "15 cm",
        alturaApoyaBrazo: "58 cm"
      }
    },
    customizationOptions: {
      orientaciones: orientacionesComunes,
      telas: [
        { id: "pana-arena", nombre: "Pana Arena", tipo: "pana", color: "#D4C5B0" },
        { id: "pana-terracota", nombre: "Pana Terracota", tipo: "pana", color: "#C65D3B" }
      ],
      medidas: [
        {
          id: "estandar",
          label: "Estándar (80x80cm)",
          medidas: { ancho: "80 cm", profundidad: "80 cm" }
        },
        {
          id: "medida-especial",
          label: "Medida especial (consultar)",
          medidas: { ancho: "A medida", profundidad: "A medida" }
        }
      ]
    },
    politicas: {
      produccion: "Tiempo de producción estimado: 15 a 25 días hábiles (puede extenderse para medidas especiales).",
      envio: "Envío en Córdoba mediante flete. Envíos al interior del país a través de Andreani. Los envíos al interior requieren embalaje especial con costo adicional. No nos responsabilizamos por daños ocasionados durante el transporte.",
      pago: "Aceptamos efectivo, transferencia o depósito bancario. Se abona un 50% al confirmar el pedido y el 50% restante antes de la entrega."
    },
    caracteristicas: [
      "Disponible en pana (Arena y Terracota)",
      "Espuma soft ajustable según preferencia",
      "Incluye todas las almohadas",
      "Medidas adaptables a tu espacio",
      "Patas invisibles para diseño limpio"
    ]
  }
];

// Función para obtener un producto por su slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

// Función para obtener todos los productos
export function getAllProducts(): Product[] {
  return products;
}

// Función para obtener las opciones de telas
export function getTelasDisponibles(): TelaOption[] {
  return telasDisponibles;
}

// Función para obtener las orientaciones comunes
export function getOrientacionesComunes(): OrientacionOption[] {
  return orientacionesComunes;
}

// Función para obtener productos por categoría
export function getProductsByCategory(category: "sillones" | "otros-productos"): Product[] {
  return products.filter((product) => product.category === category);
}
