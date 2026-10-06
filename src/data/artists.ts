export interface ArtistTrack {
  title: string;
  subtitle: string;
  uri: string;
}

export interface Artist {
  id: string;
  name: string;
  slug: string;
  spotifyId: string;
  spotifyUrl: string;
  embedUrl: string;
  image: string;
  genre: string;
  role: string;
  origin: string;
  tagline: string;
  bio: string;
  latestRelease: {
    title: string;
    type: "Single" | "Album" | "EP";
    year: string;
    feat?: string;
  };
  topTracks: ArtistTrack[];
  stats: {
    monthlyListeners?: string;
    verified: boolean;
    releasesCount?: string;
  };
}

export const ARTISTS: Artist[] = [
  {
    id: "01",
    name: "ENEZ 4R",
    slug: "enez-4r",
    spotifyId: "3OHwlQfXYEFe5ynRosykmE",
    spotifyUrl: "https://open.spotify.com/intl-es/artist/3OHwlQfXYEFe5ynRosykmE?si=6n-bk9YfR4CANIq0OflDkA",
    embedUrl: "https://open.spotify.com/embed/artist/3OHwlQfXYEFe5ynRosykmE?utm_source=generator&theme=0",
    image: "/artists/enez-4r.jpg",
    genre: "Latin Urban / Trap",
    role: "Vocalist & Songwriter",
    origin: "Argentina",
    tagline: "Raw lyricism and heavy urban cadence redefining modern Latin trap.",
    bio: "ENEZ 4R is a defining voice in the contemporary Latin urban underground. Known for razor-sharp rhyme schemes, authentic storytelling, and powerful cross-genre collaborations, his sound pushes the boundary of modern trap.",
    latestRelease: {
      title: "Factos",
      type: "Single",
      year: "2024",
      feat: "Nissa",
    },
    topTracks: [
      { title: "Factos", subtitle: "Nissa, ENEZ 4R", uri: "spotify:track:031uMsGKA6CFboZDCX3xSu" },
      { title: "De Manual", subtitle: "Yami Safdie, ENEZ 4R", uri: "spotify:track:0ukmJ0awCSplbOgBp7qSWr" },
      { title: "GITANA", subtitle: "ENEZ 4R, Yami Safdie", uri: "spotify:track:2CNfYe3Kzyw2IDGTIssbXb" },
      { title: "Sin Miedo", subtitle: "Lei B, ENEZ 4R", uri: "spotify:track:0lvpVWfiKFu8GApiyMqLtN" },
    ],
    stats: {
      verified: true,
      releasesCount: "25+ Releases",
    },
  },
  {
    id: "02",
    name: "Ambik",
    slug: "ambik",
    spotifyId: "4QIM495B5wWD9B24Fsi4aR",
    spotifyUrl: "https://open.spotify.com/intl-es/artist/4QIM495B5wWD9B24Fsi4aR?si=s8yFknQZTriRBCDbR3BfbA",
    embedUrl: "https://open.spotify.com/embed/artist/4QIM495B5wWD9B24Fsi4aR?utm_source=generator&theme=0",
    image: "/artists/ambik.jpg",
    genre: "Alt-Pop / Urban Indie",
    role: "Artist & Performer",
    origin: "Global",
    tagline: "Atmospheric alt-pop aesthetics intertwined with visceral melodies.",
    bio: "Ambik crafts an unmistakably distinct aesthetic world bridging alternative pop, urban rhythm, and melodic experimentation. Her striking visual identity matches her signature vocal timbre.",
    latestRelease: {
      title: "Sha la la",
      type: "Single",
      year: "2024",
      feat: "LUANA, Yarge",
    },
    topTracks: [
      { title: "Sha la la", subtitle: "LUANA, Ambik, Yarge", uri: "spotify:track:15YoTBWq0M6nMRuzM9kRNM" },
      { title: "Estrella", subtitle: "Ambik", uri: "spotify:track:5arlUnESk69UOTh80g3rMZ" },
      { title: "Vuela X Mí", subtitle: "Rojuu, Ambik", uri: "spotify:track:4AqRuoZOQciqtVsE2EjsKB" },
      { title: "NO SOY COMO ELLAS!", subtitle: "Ambik", uri: "spotify:track:00MyY4Pnrmr57O4eD9IJDs" },
    ],
    stats: {
      verified: true,
      releasesCount: "18+ Releases",
    },
  },
  {
    id: "03",
    name: "CHANCRA",
    slug: "chancra",
    spotifyId: "4VEnO9rQaCXMwE5yezIrGS",
    spotifyUrl: "https://open.spotify.com/intl-es/artist/4VEnO9rQaCXMwE5yezIrGS?si=owDYvB9HTIi23cU4Yg8zZQ",
    embedUrl: "https://open.spotify.com/embed/artist/4VEnO9rQaCXMwE5yezIrGS?utm_source=generator&theme=0",
    image: "/artists/chancra.jpg",
    genre: "Street Urban / Trap / RKT",
    role: "Recording Artist",
    origin: "Latin America",
    tagline: "High-octane sound system energy and unapologetic street anthems.",
    bio: "CHANCRA channels raw street energy into electrifying club and digital anthems. With high-voltage delivery and futuristic basslines, his presence dominates the emerging soundscape.",
    latestRelease: {
      title: "Prohibido",
      type: "Single",
      year: "2024",
    },
    topTracks: [
      { title: "Prohibido", subtitle: "CHANCRA", uri: "spotify:track:4CG40Eh5IoJP5jj04KFH5A" },
      { title: "Bardo", subtitle: "CHANCRA", uri: "spotify:track:5W3Ipfry7LkiTgfn1cq55V" },
      { title: "Tini", subtitle: "CHANCRA", uri: "spotify:track:3PCC87mZ5ec6UCzJHXc5qm" },
      { title: "Moncler", subtitle: "CHANCRA", uri: "spotify:track:4gm1qlO1eMBVkTssM1u79v" },
    ],
    stats: {
      verified: true,
      releasesCount: "20+ Releases",
    },
  },
  {
    id: "04",
    name: "Zabu Mami",
    slug: "zabu-mami",
    spotifyId: "2BqyeAgtwMSJy10mHIQuEO",
    spotifyUrl: "https://open.spotify.com/intl-es/artist/2BqyeAgtwMSJy10mHIQuEO?si=Ut_dpYO9TtSEkhIXja0K7Q",
    embedUrl: "https://open.spotify.com/embed/artist/2BqyeAgtwMSJy10mHIQuEO?utm_source=generator&theme=0",
    image: "/artists/zabu-mami.jpg",
    genre: "Drill / Rap / Fusion",
    role: "MC & Producer",
    origin: "Latin America",
    tagline: "Hypnotic cadence, rapid flow, and heavyweight Latin drill momentum.",
    bio: "Zabu Mami delivers rapid-fire flow matched with heavy rhythmic percussion. His releases carve out a sharp lane in modern drill and rap culture, gathering a devoted listener base.",
    latestRelease: {
      title: "Vero Buffone",
      type: "Single",
      year: "2024",
    },
    topTracks: [
      { title: "Vero Buffone", subtitle: "Zabu Mami", uri: "spotify:track:6eiJ6Adg1EG4VaQqpoQEu3" },
      { title: "Sin Receta", subtitle: "Falke 912, Zabu Mami", uri: "spotify:track:1GaXjENPyoSm3nwpIQM5Az" },
      { title: "Nos Fuimo a lo Loco", subtitle: "Zabu Mami", uri: "spotify:track:3dICybtBxoP1nnULFq3lGV" },
      { title: "Chuculeando", subtitle: "Zabu Mami", uri: "spotify:track:3YEwwpSOQI4UIzCoU3nZEF" },
    ],
    stats: {
      verified: true,
      releasesCount: "14+ Releases",
    },
  },
  {
    id: "05",
    name: "ARA",
    slug: "ara",
    spotifyId: "5wkxQh0fD5bsqxKm6Ajv7o",
    spotifyUrl: "https://open.spotify.com/intl-es/artist/5wkxQh0fD5bsqxKm6Ajv7o?si=8EIv5hW8R1utH4hV56Kwpw",
    embedUrl: "https://open.spotify.com/embed/artist/5wkxQh0fD5bsqxKm6Ajv7o?utm_source=generator&theme=0",
    image: "/artists/ara.jpg",
    genre: "New Wave Urban / Latin Trap",
    role: "Artist & Visionary",
    origin: "Global",
    tagline: "Atmospheric, boundary-pushing sonics for the next digital generation.",
    bio: "ARA represents the avant-garde edge of new wave urban music. Combining ambient synth structures with infectious bounce and unforgettable hooks, his catalog continues rapid international expansion.",
    latestRelease: {
      title: "Bichigyal - Remix",
      type: "Single",
      year: "2024",
      feat: "PRIZE, Sautu, Ramma",
    },
    topTracks: [
      { title: "Bichigyal - Remix", subtitle: "PRIZE, Sautu, ARA, Ramma", uri: "spotify:track:4v45rww5vNHvlu3iqdwa9u" },
      { title: "QUIERO AMARTE", subtitle: "ARA, Oney1", uri: "spotify:track:09l76TiKhPfZTLhkLxFeFM" },
      { title: "15MIN AL DIA", subtitle: "Oney1, ARA", uri: "spotify:track:1JMvcvyLyS1RsCWk7gOcy7" },
      { title: "me engualichaste remix", subtitle: "Natán, ARA", uri: "spotify:track:7yoqxVu48MhMSaHT07Atdo" },
    ],
    stats: {
      verified: true,
      releasesCount: "16+ Releases",
    },
  },
];
