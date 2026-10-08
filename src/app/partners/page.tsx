import type { Metadata } from "next";
import PartnersClient from "./PartnersClient";
import { PARTNERS } from "@/data/partners";

export const metadata: Metadata = {
  title: "Global DSP & Streaming Partners",
  description:
    "Explore KAVEN Distribution's global network: Spotify, Apple Music, Amazon Music, TikTok, YouTube Music, Deezer, Tidal, and direct DDEX ingestion across 180+ markets.",
  alternates: {
    canonical: "https://kavendistribution.com/partners",
  },
  openGraph: {
    title: "Global DSP & Streaming Partners | KAVEN Distribution",
    description:
      "Direct delivery to Spotify, Apple Music, TikTok, Amazon Music, YouTube, Deezer, and 150+ storefronts across 180+ global markets.",
    url: "https://kavendistribution.com/partners",
    type: "website",
  },
};

const partnersBreadcrumbsJsonLd = {
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
      "name": "Partners",
      "item": "https://kavendistribution.com/partners",
    },
  ],
};

const partnersCollectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://kavendistribution.com/partners#collection",
  "url": "https://kavendistribution.com/partners",
  "name": "KAVEN Distribution Partner Network",
  "description": "Global DSP, video, and social streaming platforms integrated with KAVEN Distribution.",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": PARTNERS.length,
    "itemListElement": PARTNERS.map((partner, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Organization",
        "name": partner.name,
        "description": partner.description,
      },
    })),
  },
};

export default function PartnersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnersBreadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnersCollectionJsonLd) }}
      />
      <PartnersClient />
    </>
  );
}
