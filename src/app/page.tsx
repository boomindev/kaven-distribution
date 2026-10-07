"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
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
          INTRO / MANIFESTO SECTION
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
                Engineered for independent artists and labels demanding corporate rigor, global scale, and personalized execution without compromising creative control.
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
