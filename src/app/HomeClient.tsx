"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HomeClient() {
  const { t } = useLanguage();

  return (
    <div className="relative bg-[#050505] text-white min-h-[calc(100vh-80px)] flex flex-col items-center justify-center py-16 sm:py-20 px-6 sm:px-8 overflow-hidden">
      {/* Subtle radial ambient spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Logo */}
        <div className="relative w-52 sm:w-64 md:w-72 h-16 sm:h-20 mb-6 sm:mb-8">
          <Image
            src="/kaven-logo-white.png"
            alt="KAVEN Distribution"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Headline & Subtitle */}
        <div className="space-y-3 mb-8 sm:mb-10 max-w-2xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-[0.14em] uppercase text-white leading-snug">
            {t.home.title}
          </h1>
          <p className="text-xs sm:text-sm tracking-[0.2em] text-neutral-400 uppercase font-light leading-relaxed max-w-lg mx-auto">
            {t.home.subtitle}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="group relative w-full sm:w-auto px-7 py-3.5 bg-white text-black text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5"
          >
            <span>{t.home.applyNow}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/artists"
            className="group relative w-full sm:w-auto px-7 py-3.5 bg-transparent border border-white/20 text-white text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:border-white hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5"
          >
            <span>{t.home.viewRoster}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}
