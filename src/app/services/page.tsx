import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services | Music Distribution & Artist Services",
  description:
    "Digital Distribution to major streaming platforms (Spotify, Apple Music, YouTube Music, Amazon Music), Profile Management, and Support & Strategy for independent artists.",
  alternates: {
    canonical: "https://kavendistribution.com/services",
  },
  openGraph: {
    title: "Our Services | KAVEN Distribution",
    description:
      "Digital Distribution, Profile Management, and Support & Strategy for independent artists.",
    url: "https://kavendistribution.com/services",
    type: "website",
  },
};

const servicesBreadcrumbsJsonLd = {
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
      "name": "Services",
      "item": "https://kavendistribution.com/services",
    },
  ],
};

const servicesListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "KAVEN Distribution Services",
  description: "Independent music distribution and artist services.",
  itemListElement: SERVICES.map((service, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "Service",
      name: service.titleEn,
      description: service.descriptionEn,
      provider: {
        "@type": "Organization",
        name: "KAVEN Distribution",
        url: "https://kavendistribution.com",
      },
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListJsonLd) }}
      />
      <ServicesClient />
    </>
  );
}
