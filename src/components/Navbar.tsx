"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.artists, href: "/artists" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.partners, href: "/partners" },
    { label: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/[0.08] py-4"
            : "bg-[#050505]/80 backdrop-blur-sm py-5 border-b border-white/[0.04]"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <div className="relative h-7 w-28 sm:w-32">
              <Image
                src="/kaven-logo-white.png"
                alt="KAVEN Distribution"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation & Language Switch */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6 sm:space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-xs uppercase tracking-[0.18em] transition-colors font-medium ${
                      isActive
                        ? "text-white border-b-2 border-white pb-1"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Language Selector EN | ES */}
            <div className="flex items-center pl-4 border-l border-white/20 text-xs font-mono tracking-wider">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`transition-colors px-1 py-0.5 ${
                  language === "en"
                    ? "text-white font-bold underline underline-offset-4 decoration-white"
                    : "text-neutral-400 hover:text-white"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-neutral-600 px-1">|</span>
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`transition-colors px-1 py-0.5 ${
                  language === "es"
                    ? "text-white font-bold underline underline-offset-4 decoration-white"
                    : "text-neutral-400 hover:text-white"
                }`}
                aria-label="Cambiar a Español"
              >
                ES
              </button>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center md:hidden gap-4">
            <div className="flex items-center text-xs font-mono tracking-wider">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-1 py-0.5 ${
                  language === "en"
                    ? "text-white font-bold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <span className="text-neutral-600">|</span>
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`px-1 py-0.5 ${
                  language === "es"
                    ? "text-white font-bold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                ES
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-4 flex flex-col justify-between items-end">
                <span
                  className={`h-[1.5px] bg-white transition-all duration-300 ${
                    mobileMenuOpen ? "w-6 rotate-45 translate-y-1.5" : "w-6"
                  }`}
                />
                <span
                  className={`h-[1.5px] bg-white transition-all duration-300 ${
                    mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-4"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/95 flex flex-col justify-between p-8 pt-24 md:hidden">
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-light tracking-widest uppercase transition-colors ${
                    isActive ? "text-white font-semibold" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-neutral-400 font-mono tracking-wider">
              KAVEN DISTRIBUTION
            </span>
            <div className="flex items-center text-xs font-mono tracking-wider">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 ${
                  language === "en" ? "text-white font-bold underline" : "text-neutral-400"
                }`}
              >
                EN
              </button>
              <span className="text-neutral-600">|</span>
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`px-2 py-1 ${
                  language === "es" ? "text-white font-bold underline" : "text-neutral-400"
                }`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
