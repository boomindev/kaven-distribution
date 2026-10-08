import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NoiseOverlay from "@/components/NoiseOverlay";

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kavendistribution.com"),
  title: {
    default: "KAVEN Distribution | Music Distribution & Artist Services",
    template: "%s | KAVEN Distribution",
  },
  description:
    "Official website of KAVEN Distribution. Music distribution, catalog management, release strategy, and elite artist services across 150+ global DSPs.",
  keywords: [
    "KAVEN",
    "KAVEN Distribution",
    "Music Distribution",
    "Artist Services",
    "Record Label",
    "Catalog Management",
    "Digital Music Distribution",
    "DSP Delivery",
    "Spotify Distribution",
    "Apple Music Distribution",
    "Music Publishing",
    "Latin Urban Distribution",
    "Latin Trap",
    "Independent Artists",
  ],
  authors: [{ name: "KAVEN Distribution" }],
  creator: "KAVEN Distribution",
  publisher: "KAVEN Distribution",
  category: "Music",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kavendistribution.com",
    siteName: "KAVEN Distribution",
    title: "KAVEN Distribution | Music Distribution & Artist Services",
    description:
      "Official website of KAVEN Distribution. Music distribution, catalog management, release strategy, and elite artist services across 150+ global DSPs.",
    images: [
      {
        url: "/kaven-logo.png",
        width: 1200,
        height: 630,
        alt: "KAVEN Distribution - Music Distribution & Artist Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KAVEN Distribution | Music Distribution & Artist Services",
    description:
      "Official website of KAVEN Distribution. Music distribution, catalog management, release strategy, and elite artist services across 150+ global DSPs.",
    images: ["/kaven-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/kaven-icon.png",
    shortcut: "/kaven-icon.png",
    apple: "/kaven-icon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://kavendistribution.com/#organization",
  name: "KAVEN Distribution",
  url: "https://kavendistribution.com",
  logo: {
    "@type": "ImageObject",
    url: "https://kavendistribution.com/kaven-logo-white.png",
    caption: "KAVEN Distribution Logo",
  },
  image: "https://kavendistribution.com/kaven-logo.png",
  email: "contact@kavendistribution.com",
  description:
    "Official website of KAVEN Distribution. Music distribution, catalog management, release strategy, and elite artist services.",
  knowsAbout: [
    "Music Distribution",
    "Digital Service Providers (DSPs)",
    "Catalog Management",
    "Release Strategy",
    "Music Publishing",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://kavendistribution.com/#website",
  url: "https://kavendistribution.com",
  name: "KAVEN Distribution",
  description:
    "Official website of KAVEN Distribution. Music distribution, catalog management, release strategy, and elite artist services.",
  publisher: {
    "@id": "https://kavendistribution.com/#organization",
  },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-white antialiased selection:bg-white selection:text-black">
        <NoiseOverlay />
        <div className="relative min-h-screen flex flex-col justify-between">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
