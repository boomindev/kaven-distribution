import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NoiseOverlay from "@/components/NoiseOverlay";

export const metadata: Metadata = {
  title: "KAVEN | Music Distribution & Artist Services",
  description:
    "Official website of KAVEN Distribution. Music distribution, catalog management, release strategy, and elite artist services.",
  keywords: [
    "KAVEN",
    "KAVEN Distribution",
    "Music Distribution",
    "Artist Services",
    "Record Label",
    "Music Publishing",
  ],
  icons: {
    icon: "/kaven-icon.png",
    apple: "/kaven-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
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
