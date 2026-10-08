"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Layers, ShieldCheck } from "lucide-react";
import { PARTNERS } from "@/data/partners";

const partnerCategories = [
  "ALL",
  "DSP",
  "Video & Social",
  "High-Fidelity & Specialist",
];

export default function PartnersClient() {
  const [filter, setFilter] = useState("ALL");

  const filteredPartners =
    filter === "ALL"
      ? PARTNERS
      : PARTNERS.filter((p) => p.category === filter);

  return (
    <div className="relative min-h-screen bg-[#040404] text-white pt-32 pb-24 px-6 sm:px-12 overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* =========================================================================
            HEADER
            ========================================================================= */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs tracking-[0.4em] text-neutral-400 uppercase font-mono block mb-3">
            // GLOBAL INGESTION NETWORK
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.18em] uppercase text-white mb-6">
            PARTNERS
          </h1>
          <p className="text-base sm:text-xl text-neutral-400 font-light tracking-wider">
            Built with the world&apos;s music ecosystem.
          </p>
        </div>

        {/* =========================================================================
            FILTER TABS
            ========================================================================= */}
        <div className="flex flex-wrap items-center gap-2 pb-8 mb-12 border-b border-white/10">
          {partnerCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300 ${
                filter === cat
                  ? "bg-white text-black font-semibold"
                  : "bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Semantic Section Heading for Accessibility and SEO */}
        <h2 className="sr-only">Global DSP &amp; Streaming Platforms</h2>

        {/* =========================================================================
            PARTNERS GRID
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPartners.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * idx, duration: 0.4 }}
              className="group p-8 bg-[#090909] border border-white/[0.08] hover:border-white/30 transition-all duration-400 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-400 uppercase">
                    {partner.category}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-[0.15em] uppercase text-white mb-3 group-hover:translate-x-0.5 transition-transform">
                  {partner.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {partner.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>{partner.reach}</span>
                <span className="text-neutral-400 group-hover:text-white transition-colors">
                  {partner.territory}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================================================
            ECOSYSTEM STATS BAR
            ========================================================================= */}
        <div className="mt-20 p-8 sm:p-12 border border-white/10 bg-[#070707] grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <Globe className="w-5 h-5 text-neutral-400 mb-1" />
            <span className="text-3xl font-extrabold tracking-wider text-white">180+</span>
            <span className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase">
              TERRITORIES COVERED
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-2 border-t sm:border-t-0 sm:border-l border-white/10 pt-6 sm:pt-0 sm:pl-8">
            <Layers className="w-5 h-5 text-neutral-400 mb-1" />
            <span className="text-3xl font-extrabold tracking-wider text-white">150+</span>
            <span className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase">
              ACTIVE STOREFRONTS &amp; DSPS
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-2 border-t sm:border-t-0 sm:border-l border-white/10 pt-6 sm:pt-0 sm:pl-8">
            <ShieldCheck className="w-5 h-5 text-neutral-400 mb-1" />
            <span className="text-3xl font-extrabold tracking-wider text-white">100%</span>
            <span className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase">
              DIRECT DDEX INGESTION
            </span>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM CTA
            ========================================================================= */}
        <div className="mt-16 text-center">
          <p className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase mb-6">
            WANT TO DISTRIBUTE ACROSS OUR GLOBAL NETWORK?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-xs font-bold tracking-[0.25em] uppercase hover:bg-neutral-200 transition-all"
          >
            <span>JOIN KAVEN DISTRIBUTION</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
