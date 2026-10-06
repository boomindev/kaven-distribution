export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  highlight: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "digital-distribution",
    number: "01",
    title: "DIGITAL DISTRIBUTION",
    shortDesc: "Distribución digital de música a plataformas globales.",
    description: "Conectamos tu música con más de 150 plataformas de streaming y descarga en todo el mundo. Entrega instantánea, metadatos precisos y cobertura global completa sin intermediarios innecesarios.",
    features: [
      "Distribución a Spotify, Apple Music, TikTok, Amazon, YouTube Music y más",
      "Procesamiento rápido de lanzamientos y control de calidad",
      "Monetización en redes sociales (Instagram, TikTok, YouTube Content ID)",
      "Pagos directos y reportes transparentes"
    ],
    highlight: "150+ Digital Storefronts Worldwide"
  },
  {
    id: "release-management",
    number: "02",
    title: "RELEASE MANAGEMENT",
    shortDesc: "Gestión profesional de lanzamientos y catálogos.",
    description: "Planificación estratégica previa, durante y post-lanzamiento. Desde la sincronización de fechas clave y material visual hasta la optimización de pre-saves y pitches editoriales.",
    features: [
      "Cronogramas estratégicos de lanzamiento y single rollouts",
      "Preparación y presentación de pitch editorial para playlists",
      "Coordinación de metadatos, ISRC, UPC y créditos oficiales",
      "Campañas coordinadas de pre-save y smart links"
    ],
    highlight: "Precision Rollout Strategy"
  },
  {
    id: "artist-development",
    number: "03",
    title: "ARTIST DEVELOPMENT",
    shortDesc: "Herramientas y servicios para ayudar a desarrollar artistas.",
    description: "Construimos trayectorias sólidas y sostenibles. Asesoramiento dedicado en estrategia de marca, alianzas de la industria, optimización de audiencia y proyección artística a largo plazo.",
    features: [
      "Consultoría estratégica personalizada para proyectos artísticos",
      "Dirección de identidad visual y coherencia de marca",
      "Conexión con productores, compositores e ingenieros de primer nivel",
      "Estrategias de engagement y retención de audiencia"
    ],
    highlight: "Sustainable Career Architecture"
  },
  {
    id: "catalog-management",
    number: "04",
    title: "CATALOG MANAGEMENT",
    shortDesc: "Gestión y monetización integral de catálogos existentes.",
    description: "Tu catálogo es tu mayor activo financiero. Maximizamos el valor residual de grabaciones anteriores mediante optimización de metadatos, relanzamientos estratégicos y preservación digital.",
    features: [
      "Auditoría técnica de catálogos y corrección de metadatos",
      "Migración fluida de catálogo sin pérdida de reproducciones",
      "Estrategias de monetización para pistas de fondo de catálogo",
      "Protección de derechos de autor y control de duplicados"
    ],
    highlight: "Lifetime Asset Preservation"
  },
  {
    id: "analytics-insights",
    number: "05",
    title: "ANALYTICS & INSIGHTS",
    shortDesc: "Seguimiento exhaustivo del rendimiento de lanzamientos.",
    description: "Métricas claras, accionables y en tiempo real. Entiende exactamente quién escucha tu música, en qué ciudades, qué playlists generan tracción y de dónde proviene tu crecimiento orgánico.",
    features: [
      "Tableros de analítica en tiempo real por territorio y plataforma",
      "Mapeo demográfico y tendencias de retención de oyentes",
      "Rastreo de inclusiones en playlists editoriales y de usuarios",
      "Informes financieros detallados y transparentes"
    ],
    highlight: "Real-time Intelligence"
  },
  {
    id: "global-exposure",
    number: "06",
    title: "GLOBAL EXPOSURE",
    shortDesc: "Estrategias para que la música alcance nuevas audiencias.",
    description: "Ampliamos las fronteras geográficas de tu sonido. Conectamos proyectos locales con audiencias globales, curadores internacionales y oportunidades transfronterizas de sincronización y directo.",
    features: [
      "Estrategia de penetración en mercados clave de Latinoamérica, EE.UU. y Europa",
      "Sincronización para cine, series, videojuegos y publicidad",
      "Relaciones con curadores independientes y marcas",
      "Activaciones de marketing transfronterizo"
    ],
    highlight: "Cross-Border Market Expansion"
  }
];
