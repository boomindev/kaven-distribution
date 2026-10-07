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
    shortDesc: "Digital music delivery across global streaming platforms.",
    description: "We connect your music to 150+ streaming and download platforms worldwide. Instant ingestion, pristine metadata, and complete global footprint with zero unnecessary middlemen.",
    features: [
      "Distribution to Spotify, Apple Music, TikTok, Amazon, YouTube Music and more",
      "Rapid release processing and meticulous quality control",
      "Social media monetization (Instagram, TikTok, YouTube Content ID)",
      "Direct royalty accounting and transparent reporting"
    ],
    highlight: "150+ Digital Storefronts Worldwide"
  },
  {
    id: "release-management",
    number: "02",
    title: "RELEASE MANAGEMENT",
    shortDesc: "Professional release planning and catalog administration.",
    description: "Strategic pre-, during, and post-release execution. From timeline orchestration and visual assets to pre-save momentum and editorial pitching.",
    features: [
      "Strategic release calendars and multi-single rollout workflows",
      "Editorial pitch preparation and direct DSP submissions",
      "Comprehensive metadata coordination: ISRC, UPC, and official credits",
      "Coordinated pre-save campaigns and smart link management"
    ],
    highlight: "Precision Rollout Strategy"
  },
  {
    id: "artist-development",
    number: "03",
    title: "ARTIST DEVELOPMENT",
    shortDesc: "Tools and strategic advisory to build lasting artist careers.",
    description: "We build enduring, sustainable artistic careers. Tailored consultation in brand positioning, industry alliances, audience acquisition, and long-range artistic direction.",
    features: [
      "Custom strategic advisory for forward-thinking music projects",
      "Visual identity direction and brand cohesion",
      "Direct connections to premier producers, songwriters, and audio engineers",
      "Audience retention systems and community engagement strategy"
    ],
    highlight: "Sustainable Career Architecture"
  },
  {
    id: "catalog-management",
    number: "04",
    title: "CATALOG MANAGEMENT",
    shortDesc: "Holistic optimization and monetization of existing catalogs.",
    description: "Your catalog is your primary financial asset. We maximize the long-tail value of heritage and back-catalog recordings through metadata enhancement, strategic re-releases, and digital preservation.",
    features: [
      "Catalog technical audit and metadata reconciliation",
      "Seamless catalog migration without loss of streaming counts",
      "Monetization optimization for deep-catalog tracks",
      "Copyright protection and duplicate fingerprint dispute resolution"
    ],
    highlight: "Lifetime Asset Preservation"
  },
  {
    id: "analytics-insights",
    number: "05",
    title: "ANALYTICS & INSIGHTS",
    shortDesc: "Comprehensive release performance tracking and intelligence.",
    description: "Clear, actionable, real-time intelligence. Understand precisely who listens to your records, in which cities, which playlists drive algorithmic lift, and where organic fan momentum originates.",
    features: [
      "Real-time analytics dashboards by territory and platform",
      "Demographic profiling and listener retention trends",
      "Tracking of editorial and listener-curated playlist adds",
      "Detailed, audit-ready transparent financial reporting"
    ],
    highlight: "Real-time Intelligence"
  },
  {
    id: "global-exposure",
    number: "06",
    title: "GLOBAL EXPOSURE",
    shortDesc: "Strategic expansion connecting music to new audiences.",
    description: "Expanding the geographical horizons of your sound. We bridge domestic momentum with international audiences, global curators, cross-border brand partnerships, and sync licensing opportunities.",
    features: [
      "Market penetration strategies for Latin America, North America, and Europe",
      "Sync licensing pitching for film, television, gaming, and commercial advertising",
      "Relations with tastemaker curators, independent media, and brands",
      "Cross-border digital marketing campaigns and playlist activations"
    ],
    highlight: "Cross-Border Market Expansion"
  }
];
