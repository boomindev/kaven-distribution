"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PARTNERS } from "@/data/partners";
import { useLanguage } from "@/context/LanguageContext";

export default function PartnersClient() {
  const { language, t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 sm:pt-32 pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 sm:mb-16 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-3">
            {t.partners.title}
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl">
            {t.partners.subtitle}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERS.map((partner) => {
            const category =
              language === "es" ? partner.categoryEs : partner.categoryEn;
            const description =
              language === "es" ? partner.descriptionEs : partner.descriptionEn;
            const isFuga = partner.id === "fuga";

            return (
              <div
                key={partner.id}
                className={`p-7 flex flex-col justify-between transition-all ${
                  isFuga
                    ? "bg-[#0d0d0d] border border-white/20"
                    : "bg-[#090909] border border-white/[0.08] hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">
                      {category}
                    </span>
                    {isFuga && (
                      <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 bg-white/10 text-white border border-white/20">
                        {language === "es" ? "Infraestructura" : "Infrastructure"}
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white mb-3">
                    {partner.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Bottom CTA */}
        <div className="mt-16 text-center sm:text-left">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white text-black text-xs font-semibold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors"
          >
            <span>{t.home.applyNow}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
