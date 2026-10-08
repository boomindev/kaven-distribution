"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HomeClient() {
  const { t } = useLanguage();

  return (
    <div className="relative bg-[#050505] text-white min-h-[calc(100vh-80px)] flex flex-col items-center justify-center py-24 px-6 sm:px-12 overflow-hidden">
      {/* Subtle radial ambient spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Official Current Logo Display */}
        <div className="relative w-72 sm:w-96 md:w-[480px] lg:w-[540px] h-28 sm:h-36 md:h-40 mb-8 sm:mb-12">
          <Image
            src="/kaven-logo-white.png"
            alt="KAVEN Distribution"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Authority Headline (Original Font & Tracking) */}
        <div className="space-y-4 mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[0.2em] uppercase text-white leading-tight">
            {t.home.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg tracking-[0.35em] text-neutral-400 uppercase font-light max-w-2xl mx-auto">
            {t.home.subtitle}
          </p>
        </div>

        {/* Action CTAs (Original Button Styling) */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <Link
            href="/contact"
            className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
          >
            <span>{t.home.applyNow}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/artists"
            className="group relative w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 hover:border-white hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
          >
            <span>{t.home.viewRoster}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}
