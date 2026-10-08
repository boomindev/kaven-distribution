import type { Metadata } from "next";
import ArtistsClient from "./ArtistsClient";
import { ARTISTS } from "@/data/artists";

export const metadata: Metadata = {
  title: "Artists Roster | Latin Urban, Trap & Pop Talent",
  description:
    "Explore the official artist roster at KAVEN Distribution: ENEZ 4R, Ambik, CHANCRA, Zabu Mami, and ARA. Verified Spotify metrics, top tracks, and distribution releases.",
  alternates: {
    canonical: "https://kavendistribution.com/artists",
  },
  openGraph: {
    title: "Artists Roster | KAVEN Distribution",
    description:
      "Explore the official artist roster at KAVEN Distribution: ENEZ 4R, Ambik, CHANCRA, Zabu Mami, and ARA. Verified streaming metrics and direct DSP distribution.",
    url: "https://kavendistribution.com/artists",
    type: "website",
  },
};

const artistsBreadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://kavendistribution.com",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Artists",
      "item": "https://kavendistribution.com/artists",
    },
  ],
};

const artistsCollectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://kavendistribution.com/artists#collection",
  "url": "https://kavendistribution.com/artists",
  "name": "KAVEN Distribution Artists Roster",
  "description": "Featured talent roster distributed globally by KAVEN Distribution.",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": ARTISTS.length,
    "itemListElement": ARTISTS.map((artist, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "MusicGroup",
        "name": artist.name,
        "genre": artist.genre,
        "description": artist.bio,
        "sameAs": [artist.spotifyUrl],
      },
    })),
  },
};

export default function ArtistsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(artistsBreadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(artistsCollectionJsonLd) }}
      />
      <ArtistsClient />
    </>
  );
}
