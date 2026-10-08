import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "KAVEN Distribution | Boutique Music Distribution for Independent Artists",
  description:
    "Empowering independent artists to reach wider audiences. Direct digital distribution to major platforms, profile management, and release strategy.",
  alternates: {
    canonical: "https://kavendistribution.com",
  },
  openGraph: {
    title: "KAVEN Distribution | Music Distribution",
    description:
      "Empowering independent artists to reach wider audiences. Direct digital distribution to major platforms, profile management, and release strategy.",
    url: "https://kavendistribution.com",
    type: "website",
  },
};

const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://kavendistribution.com/#webpage",
  url: "https://kavendistribution.com",
  name: "KAVEN Distribution",
  description:
    "Empowering independent artists to reach wider audiences. Direct digital distribution to major platforms.",
  isPartOf: {
    "@id": "https://kavendistribution.com/#website",
  },
  about: {
    "@id": "https://kavendistribution.com/#organization",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
