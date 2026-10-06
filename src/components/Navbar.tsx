"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ARTISTS", href: "/artists" },
  { label: "SERVICES", href: "/services" },
  { label: "PARTNERS", href: "/partners" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/[0.07] py-3.5 shadow-2xl"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group relative flex items-center transition-opacity duration-300 hover:opacity-80"
          >
            <div className="relative h-7 sm:h-8 w-28 sm:w-32">
              <Image
                src="/kaven-logo-white.png"
                alt="KAVEN Distribution"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 sm:space-x-2 lg:space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-xs tracking-[0.25em] font-medium uppercase transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-white/[0.08] rounded-sm -z-0 border-b border-white/50"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span
                className={`h-[1.5px] bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
                }`}
              />
              <span
                className={`h-[1.5px] bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "w-4"
                }`}
              />
              <span
                className={`h-[1.5px] bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-12 md:hidden"
          >
            <div className="pt-20">
              <p className="text-[10px] tracking-[0.4em] text-neutral-500 uppercase mb-8">
                NAVIGATION
              </p>
              <div className="flex flex-col space-y-6">
                {navItems.map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 * idx, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-2xl sm:text-3xl font-light tracking-[0.2em] uppercase transition-colors flex items-center justify-between ${
                          isActive ? "text-white font-medium" : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="text-xs tracking-[0.3em] text-neutral-500">
                            [ ACTIVE ]
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-[10px] tracking-[0.35em] text-neutral-500 uppercase">
                KAVEN DISTRIBUTION
              </p>
              <p className="text-xs text-neutral-400 font-light mt-1 tracking-wider">
                MUSIC WITHOUT LIMITS.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
