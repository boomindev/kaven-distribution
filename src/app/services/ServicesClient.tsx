"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/services";

export default function ServicesClient() {
  const [activeService, setActiveService] = useState<string>(SERVICES[0].id);

  return (
    <div className="relative min-h-screen bg-[#040404] text-white pt-32 pb-24 px-6 sm:px-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* =========================================================================
            HEADER
            ========================================================================= */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs tracking-[0.4em] text-neutral-400 uppercase font-mono block mb-3">
            // COMPREHENSIVE SUITE
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.18em] uppercase text-white mb-6">
            SERVICES
          </h1>
          <p className="text-base sm:text-xl text-neutral-400 font-light tracking-wider">
            Everything your music needs to move forward.
          </p>
        </div>

        {/* =========================================================================
            SERVICES EDITORIAL LIST
            ========================================================================= */}
        <div className="space-y-6">
          {SERVICES.map((service, idx) => {
            const isActive = activeService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * idx, duration: 0.5 }}
                className={`relative border transition-all duration-500 overflow-hidden ${
                  isActive
                    ? "bg-[#090909] border-white/40"
                    : "bg-[#070707] border-white/[0.08] hover:border-white/20"
                }`}
              >
                <div
                  onClick={() => setActiveService(service.id)}
                  className="p-8 sm:p-12 cursor-pointer"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Index & Title */}
                    <div className="lg:col-span-5 flex items-baseline gap-6 sm:gap-8">
                      <span className="font-mono text-2xl sm:text-3xl font-light text-neutral-400">
                        {service.number}
                      </span>
                      <div>
                        <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-400 uppercase block mb-1">
                          {service.highlight}
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-[0.12em] uppercase text-white leading-tight">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-4">
                      <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <p className="text-xs text-neutral-400 font-mono tracking-wider">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Features & Action */}
                    <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-8 space-y-3">
                      <p className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
                        DELIVERABLES
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2 text-xs text-neutral-400 font-light leading-snug"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom subtle indicator bar */}
                {isActive && (
                  <div className="h-[2px] bg-gradient-to-r from-transparent via-white to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================================
            BOTTOM CALL TO ACTION
            ========================================================================= */}
        <div className="mt-24 p-10 sm:p-16 border border-white/10 bg-gradient-to-b from-[#0a0a0a] to-[#040404] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-[0.15em] uppercase text-white mb-2">
              NEED A BESPOKE DISTRIBUTION PLAN?
            </h3>
            <p className="text-sm text-neutral-400 font-light tracking-wide max-w-xl">
              We structure custom global rollout strategies for independent artists, managers, and catalog owners.
            </p>
          </div>
          <Link
            href="/contact"
            className="group px-8 py-4 bg-white text-black text-xs font-bold tracking-[0.25em] uppercase hover:bg-neutral-200 transition-all flex items-center gap-3 shrink-0"
          >
            <span>SUBMIT YOUR PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
