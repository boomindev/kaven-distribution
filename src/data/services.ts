export interface ServiceItem {
  id: string;
  number: string;
  titleEn: string;
  titleEs: string;
  descriptionEn: string;
  descriptionEs: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "digital-distribution",
    number: "01",
    titleEn: "Digital Distribution",
    titleEs: "Distribución Digital",
    descriptionEn:
      "Delivery of your music to major streaming platforms, including Spotify, Apple Music, YouTube Music, and Amazon Music.",
    descriptionEs:
      "Entrega de música a las principales plataformas de streaming (Spotify, Apple Music, YouTube Music, Amazon Music).",
  },
  {
    id: "profile-management",
    number: "02",
    titleEn: "Profile Management",
    titleEs: "Gestión de Perfiles",
    descriptionEn:
      "Assistance with official artist profile verification and day-to-day catalog maintenance across digital platforms.",
    descriptionEs:
      "Ayuda con verificación de perfiles de artista y gestión organizada de catálogo en plataformas digitales.",
  },
  {
    id: "support-strategy",
    number: "03",
    titleEn: "Support & Strategy",
    titleEs: "Soporte y Estrategia",
    descriptionEn:
      "Clear guidance and personalized release strategy to support your upcoming single, EP, or album rollouts.",
    descriptionEs:
      "Guía y asesoramiento para la estrategia de tus lanzamientos y soporte personalizado para tus proyectos.",
  },
];
