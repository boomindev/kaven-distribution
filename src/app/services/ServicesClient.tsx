"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesClient() {
  const { language, t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 sm:pt-32 pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14 sm:mb-20 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-3">
            {t.services.title}
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl">
            {t.services.subtitle}
          </p>
        </div>

        {/* 3 Realistic Services */}
        <div className="space-y-6">
          {SERVICES.map((service) => {
            const title = language === "es" ? service.titleEs : service.titleEn;
            const description =
              language === "es" ? service.descriptionEs : service.descriptionEn;

            return (
              <div
                key={service.id}
                className="p-8 sm:p-10 bg-[#0a0a0a] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-6 sm:gap-8">
                  <span className="font-mono text-xl sm:text-2xl text-neutral-500 font-light pt-0.5">
                    {service.number}
                  </span>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white mb-2">
                      {title}
                    </h2>
                    <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center sm:text-left">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white text-black text-xs font-semibold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors"
          >
            <span>{t.services.applyCta}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
