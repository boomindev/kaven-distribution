export interface Artist {
  id: string;
  name: string;
  slug: string;
  spotifyUrl: string;
  image: string;
}

export const ARTISTS: Artist[] = [
  {
    id: "enez-4r",
    name: "ENEZ 4R",
    slug: "enez-4r",
    spotifyUrl: "https://open.spotify.com/artist/3OHwlQfXYEFe5ynRosykmE",
    image: "/artists/enez-4r.jpg",
  },
  {
    id: "ambik",
    name: "Ambik",
    slug: "ambik",
    spotifyUrl: "https://open.spotify.com/artist/4QIM495B5wWD9B24Fsi4aR",
    image: "/artists/ambik.jpg",
  },
  {
    id: "chancra",
    name: "CHANCRA",
    slug: "chancra",
    spotifyUrl: "https://open.spotify.com/artist/4VEnO9rQaCXMwE5yezIrGS",
    image: "/artists/chancra.jpg",
  },
  {
    id: "zabu-mami",
    name: "Zabu Mami",
    slug: "zabu-mami",
    spotifyUrl: "https://open.spotify.com/artist/2BqyeAgtwMSJy10mHIQuEO",
    image: "/artists/zabu-mami.jpg",
  },
  {
    id: "ara",
    name: "ARA",
    slug: "ara",
    spotifyUrl: "https://open.spotify.com/artist/5wkxQh0fD5bsqxKm6Ajv7o",
    image: "/artists/ara.jpg",
  },
];
