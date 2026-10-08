import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Music Distribution & Artist Services",
  description:
    "Comprehensive music services: Digital Distribution to 150+ DSPs, Release Management, Artist Development, and Catalog Administration for labels and artists.",
  alternates: {
    canonical: "https://kavendistribution.com/services",
  },
  openGraph: {
    title: "Music Services & Digital Distribution | KAVEN Distribution",
    description:
      "Comprehensive music suite: Digital Distribution to 150+ DSPs, Strategic Release Management, Artist Development, and Catalog Optimization.",
    url: "https://kavendistribution.com/services",
    type: "website",
  },
};

const servicesBreadcrumbsJsonLd = {
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
      "name": "Services",
      "item": "https://kavendistribution.com/services",
    },
  ],
};

const servicesListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "KAVEN Distribution Services",
  "description": "Suite of professional music distribution and artist services.",
  "itemListElement": SERVICES.map((service, idx) => ({
    "@type": "ListItem",
    "position": idx + 1,
    "item": {
      "@type": "Service",
      "name": service.title,
      "description": service.description,
      "provider": {
        "@type": "Organization",
        "name": "KAVEN Distribution",
        "url": "https://kavendistribution.com",
      },
      "serviceType": "Music Distribution & Label Services",
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
