import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "KAVEN Distribution | Music Distribution & Artist Services",
  description:
    "Official website of KAVEN Distribution. We connect visionary independent talent with global streaming infrastructure, editorial playlisting, and catalog growth across 150+ DSPs.",
  alternates: {
    canonical: "https://kavendistribution.com",
  },
  openGraph: {
    title: "KAVEN Distribution | Music Distribution & Artist Services",
    description:
      "We connect visionary independent talent with global streaming infrastructure, editorial playlisting, and catalog growth across 150+ DSPs.",
    url: "https://kavendistribution.com",
    type: "website",
  },
};

const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://kavendistribution.com/#webpage",
  url: "https://kavendistribution.com",
  name: "KAVEN Distribution | Music Without Limits",
  description:
    "Official website of KAVEN Distribution. Music distribution, catalog management, release strategy, and elite artist services.",
  isPartOf: {
    "@id": "https://kavendistribution.com/#website",
  },
  about: {
    "@id": "https://kavendistribution.com/#organization",
  },
  inLanguage: "en-US",
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
