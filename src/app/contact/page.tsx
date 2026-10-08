import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Submissions & Inquiries",
  description:
    "Get in touch with KAVEN Distribution. Submit your music, upcoming releases, or distribution inquiries.",
  alternates: {
    canonical: "https://kavendistribution.com/contact",
  },
  openGraph: {
    title: "Contact | KAVEN Distribution",
    description:
      "Get in touch with KAVEN Distribution for music submissions and distribution inquiries.",
    url: "https://kavendistribution.com/contact",
    type: "website",
  },
};

const contactBreadcrumbsJsonLd = {
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
      "name": "Contact",
      "item": "https://kavendistribution.com/contact",
    },
  ],
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://kavendistribution.com/contact#contactpage",
  url: "https://kavendistribution.com/contact",
  name: "Contact KAVEN Distribution",
  description: "Official inquiries and music distribution submissions for KAVEN Distribution.",
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
