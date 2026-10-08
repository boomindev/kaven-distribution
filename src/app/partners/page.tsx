import type { Metadata } from "next";
import PartnersClient from "./PartnersClient";
import { PARTNERS } from "@/data/partners";

export const metadata: Metadata = {
  title: "Partners | Distribution Infrastructure & Platforms",
  description:
    "Explore KAVEN Distribution's delivery network and infrastructure partners: FUGA, Spotify, Apple Music, YouTube Music, Amazon Music, Deezer, and Tidal.",
  alternates: {
    canonical: "https://kavendistribution.com/partners",
  },
  openGraph: {
    title: "Partners | KAVEN Distribution",
    description:
      "FUGA B2B Infrastructure & Delivery, Spotify, Apple Music, YouTube Music, Amazon Music, and global platforms.",
    url: "https://kavendistribution.com/partners",
    type: "website",
  },
};

const partnersBreadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
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
  url: "https://kavendistribution.com/partners",
  name: "KAVEN Distribution Partners",
  description: "Global delivery and streaming partners connected to KAVEN Distribution.",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: PARTNERS.length,
    itemListElement: PARTNERS.map((partner, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Organization",
        name: partner.name,
        description: partner.descriptionEn,
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
