"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HomeClient() {
  const { t } = useLanguage();

  return (
    <div className="relative bg-[#050505] text-white min-h-[calc(100vh-80px)] flex items-center justify-center py-20 px-6 sm:px-8">
      {/* Subtle ambient spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Official Current Logo */}
        <div className="relative w-64 sm:w-80 md:w-96 h-24 sm:h-28 mb-8 sm:mb-10">
          <Image
            src="/kaven-logo-white.png"
            alt="KAVEN Distribution"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Large One-line Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 max-w-3xl leading-snug">
          {t.home.title}
        </h1>

        {/* 1-2 Line Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12">
          {t.home.subtitle}
        </p>

        {/* Action Buttons: APPLY NOW & VIEW ROSTER */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-200 hover:bg-neutral-200 active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <span>{t.home.applyNow}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="/artists"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 text-white text-xs font-medium tracking-[0.2em] uppercase transition-all duration-200 hover:border-white hover:bg-white/5 active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <span>{t.home.viewRoster}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
