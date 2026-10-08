import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NoiseOverlay from "@/components/NoiseOverlay";
import { LanguageProvider } from "@/context/LanguageContext";

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
    "Official website of KAVEN Distribution. Boutique digital music distribution, profile management, and release strategy for independent artists.",
  keywords: [
    "KAVEN",
    "KAVEN Distribution",
    "Music Distribution",
    "Artist Services",
    "Digital Music Distribution",
    "DSP Delivery",
    "Spotify Distribution",
    "Apple Music Distribution",
    "Independent Artists",
    "Distribución Musical",
    "Artistas Independientes",
  ],
  authors: [{ name: "KAVEN Distribution" }],
  creator: "KAVEN Distribution",
  publisher: "KAVEN Distribution",
  category: "Music",
  alternates: {
    canonical: "https://kavendistribution.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kavendistribution.com",
    siteName: "KAVEN Distribution",
    title: "KAVEN Distribution | Music Distribution & Artist Services",
    description:
      "Boutique digital music distribution, profile management, and release strategy for independent artists.",
    images: [
      {
        url: "/kaven-logo.png",
        width: 1200,
        height: 630,
        alt: "KAVEN Distribution Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KAVEN Distribution | Music Distribution & Artist Services",
    description:
      "Boutique digital music distribution, profile management, and release strategy for independent artists.",
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
  description:
    "Boutique digital music distribution, profile management, and release strategy for independent artists.",
  knowsAbout: [
    "Digital Music Distribution",
    "Streaming Platforms",
    "Profile Management",
    "Release Strategy",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://kavendistribution.com/#website",
  url: "https://kavendistribution.com",
  name: "KAVEN Distribution",
  description:
    "Boutique digital music distribution, profile management, and release strategy for independent artists.",
  publisher: {
    "@id": "https://kavendistribution.com/#organization",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
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
        <LanguageProvider>
          <NoiseOverlay />
          <div className="relative min-h-screen flex flex-col justify-between">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
