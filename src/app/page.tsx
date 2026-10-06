"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Disc3, ShieldCheck, Globe2, Radio, Sparkles } from "lucide-react";
import { ARTISTS } from "@/data/artists";
import { PARTNERS } from "@/data/partners";

const homeServices = [
  {
    num: "01",
    title: "MUSIC DISTRIBUTION",
    desc: "Distribución digital de música a plataformas globales.",
    tag: "150+ DSPS",
    icon: Disc3,
  },
  {
    num: "02",
    title: "ARTIST SERVICES",
    desc: "Herramientas y servicios para ayudar a desarrollar artistas.",
    tag: "DEVELOPMENT",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "RELEASE MANAGEMENT",
    desc: "Gestión profesional de lanzamientos y catálogos.",
    tag: "PRECISION",
    icon: ShieldCheck,
  },
  {
    num: "04",
    title: "GLOBAL REACH",
    desc: "Ayudamos a que la música llegue a nuevas audiencias.",
    tag: "WORLDWIDE",
    icon: Globe2,
  },
];

export default function HomePage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <div className="relative bg-[#050505] text-white overflow-hidden">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-6 sm:px-12">
        {/* Subtle radial ambient spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 spotlight-radial pointer-events-none" />

        {/* Ambient grid lines (editorial) */}
        <div className="absolute inset-0 pointer-events-none opacity-20 flex justify-between max-w-7xl mx-auto px-6">
          <div className="w-[1px] h-full bg-white/5" />
          <div className="w-[1px] h-full bg-white/5 hidden md:block" />
          <div className="w-[1px] h-full bg-white/5" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Official Logo Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-72 sm:w-96 md:w-[480px] lg:w-[560px] h-28 sm:h-36 md:h-44 mb-8 sm:mb-12"
          >
            <Image
              src="/kaven-logo-white.png"
              alt="KAVEN Distribution"
              fill
              priority
              className="object-contain"
            />
          </motion.div>

          {/* Authority Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[0.2em] uppercase text-white leading-tight">
              MUSIC WITHOUT LIMITS<span className="text-neutral-500">.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg tracking-[0.35em] text-neutral-400 uppercase font-light max-w-2xl mx-auto">
              Music Distribution &amp; Artist Services
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-5 mt-12 sm:mt-16 w-full sm:w-auto"
          >
            <Link
              href="/artists"
              className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
            >
              <span>EXPLORE OUR ARTISTS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/contact"
              className="group relative w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 hover:border-white hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
            >
              <span>WORK WITH US</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
            </Link>
          </motion.div>

          {/* Subtle scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-20 sm:mt-24 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-mono">
              SCROLL
            </span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          INTRO SECTION
          ========================================================================= */}
      <section className="relative py-28 sm:py-36 px-6 sm:px-12 border-t border-white/[0.06] bg-[#070707]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs tracking-[0.4em] text-neutral-400 uppercase font-mono block mb-4">
                // MANIFESTO
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[0.15em] uppercase text-white leading-tight">
                WE BUILD ARTISTS.
                <br />
                <span className="text-neutral-500">WE MOVE MUSIC.</span>
              </h2>
            </div>

            <div className="lg:col-span-6 border-l border-white/10 lg:pl-12 space-y-6">
              <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                KAVEN Distribution connects visionary talent with worldwide streaming infrastructure, editorial playlist positioning, and transparent catalog growth.
              </p>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Diseñado para artistas independientes y sellos que exigen rigor corporativo, alcance global y atención individualizada sin ceder el control de su visión.
              </p>
              <div className="pt-2 flex items-center gap-8 text-xs font-mono text-neutral-400 tracking-[0.2em]">
                <div>
                  <span className="text-white font-semibold text-xl block">100%</span>
                  <span>OWNERSHIP</span>
                </div>
                <div className="w-[1px] h-8 bg-white/10" />
                <div>
                  <span className="text-white font-semibold text-xl block">150+</span>
                  <span>GLOBAL DSPs</span>
                </div>
                <div className="w-[1px] h-8 bg-white/10" />
                <div>
                  <span className="text-white font-semibold text-xl block">24/7</span>
                  <span>CATALOG OPS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES PREVIEW
          ========================================================================= */}
      <section className="relative py-28 sm:py-36 px-6 sm:px-12 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs tracking-[0.4em] text-neutral-400 uppercase font-mono block mb-3">
                // CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.2em] uppercase text-white">
                CORE SERVICES
              </h2>
            </div>
            <Link
              href="/services"
              className="group text-xs tracking-[0.25em] uppercase text-neutral-400 hover:text-white flex items-center gap-2 transition-colors"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {homeServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.num}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group relative p-8 bg-[#0a0a0a] border border-white/[0.07] hover:border-white/30 transition-all duration-500 flex flex-col justify-between min-h-[320px] overflow-hidden"
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-xs text-neutral-400 tracking-[0.3em]">
                        {service.num}
                      </span>
                      <Icon className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-lg font-bold tracking-[0.18em] uppercase text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                      {service.desc}
                    </p>
                  </div>

                  <div className="relative z-10 pt-6 border-t border-white/[0.05] flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-400 uppercase">
                      {service.tag}
                    </span>
                    <span className="text-neutral-400 group-hover:text-white transition-colors text-xs">
                      &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-xs tracking-[0.2em] uppercase text-white"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ARTISTS PREVIEW (THE ROSTER)
          ========================================================================= */}
      <section className="relative py-28 sm:py-36 px-6 sm:px-12 border-t border-white/[0.06] bg-[#060606]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs tracking-[0.4em] text-neutral-400 uppercase font-mono block mb-3">
                // ACTIVE TALENT
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.2em] uppercase text-white">
                THE ROSTER
              </h2>
            </div>
            <Link
              href="/artists"
              className="group text-xs tracking-[0.25em] uppercase text-neutral-400 hover:text-white flex items-center gap-2 transition-colors"
            >
              <span>VIEW ALL ARTISTS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Artist Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {ARTISTS.map((artist) => (
              <Link
                key={artist.id}
                href="/artists"
                className="group relative block aspect-[3/4] overflow-hidden bg-neutral-900 border border-white/[0.08] hover:border-white/40 transition-all duration-500"
              >
                {/* Official Artist Image */}
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover object-center grayscale contrast-125 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100"
                />

                {/* Dramatic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

                {/* Index tag */}
                <div className="absolute top-4 left-4 z-10 font-mono text-[11px] tracking-[0.25em] text-neutral-400 group-hover:text-white transition-colors">
                  {artist.id}
                </div>

                {/* Bottom Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 z-10 flex flex-col justify-end transition-transform duration-500">
                  <span className="text-[10px] tracking-[0.3em] font-mono text-neutral-400 uppercase mb-1">
                    {artist.genre.split("/")[0]}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold tracking-[0.1em] uppercase text-white leading-tight">
                    {artist.name}
                  </h3>

                  {/* Hover action indicator */}
                  <div className="mt-3 flex items-center justify-between opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border-t border-white/20 pt-2">
                    <span className="text-[10px] tracking-[0.25em] font-semibold uppercase text-white">
                      VIEW ARTIST
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/artists"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/[0.04] border border-white/20 text-xs tracking-[0.25em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <span>ENTER CHARACTER SELECTOR</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PARTNERS PREVIEW
          ========================================================================= */}
      <section className="relative py-28 sm:py-36 px-6 sm:px-12 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs tracking-[0.4em] text-neutral-400 uppercase font-mono block mb-3">
            // DISTRIBUTION NETWORK
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[0.25em] uppercase text-white mb-4">
            OUR PARTNERS
          </h2>
          <p className="text-xs sm:text-sm tracking-[0.2em] text-neutral-400 uppercase max-w-xl mx-auto font-light mb-16">
            Direct ingestion channels and global streaming infrastructure.
          </p>

          {/* Clean Partner Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="group p-5 bg-[#0a0a0a] border border-white/[0.06] hover:border-white/25 transition-all duration-300 flex flex-col items-center justify-center min-h-[90px]"
              >
                <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-400 group-hover:text-white transition-colors">
                  {partner.name}
                </span>
                <span className="text-[9px] font-mono text-neutral-400 tracking-wider mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/partners"
              className="text-xs tracking-[0.25em] uppercase text-neutral-400 hover:text-white inline-flex items-center gap-2 transition-colors"
            >
              <span>VIEW FULL ECOSYSTEM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTACT CTA SECTION
          ========================================================================= */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-12 border-t border-white/[0.06] bg-[#050505] text-center">
        <div className="absolute inset-0 spotlight-radial pointer-events-none opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs tracking-[0.4em] text-neutral-400 uppercase font-mono block mb-4">
            // NEXT STEP
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.18em] uppercase text-white mb-6">
            READY TO MOVE?
          </h2>
          <p className="text-base sm:text-xl text-neutral-400 font-light tracking-[0.1em] mb-12 max-w-lg">
            Let&apos;s build something bigger.
          </p>

          <Link
            href="/contact"
            className="group px-10 py-5 bg-white text-black text-xs font-bold tracking-[0.3em] uppercase hover:bg-neutral-200 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] flex items-center gap-3"
          >
            <span>CONTACT KAVEN</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
