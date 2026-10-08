import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Music Submissions",
  description:
    "Submit your music, catalog, or artist roster to KAVEN Distribution. Direct inquiries at contact@kavendistribution.com with 24-48h response time.",
  alternates: {
    canonical: "https://kavendistribution.com/contact",
  },
  openGraph: {
    title: "Contact & Artist Submissions | KAVEN Distribution",
    description:
      "Submit your music, catalog, or record label roster to KAVEN Distribution. Direct inquiry channels and responsive artist team.",
    url: "https://kavendistribution.com/contact",
    type: "website",
  },
};

const contactBreadcrumbsJsonLd = {
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
      "name": "Contact",
      "item": "https://kavendistribution.com/contact",
    },
  ],
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://kavendistribution.com/contact#contactpage",
  "url": "https://kavendistribution.com/contact",
  "name": "Contact KAVEN Distribution",
  "description":
    "Official inquiries and music catalog submissions for KAVEN Distribution.",
  "mainEntity": {
    "@type": "Organization",
    "name": "KAVEN Distribution",
    "email": "contact@kavendistribution.com",
    "url": "https://kavendistribution.com",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <ContactClient />
    </>
  );
}
