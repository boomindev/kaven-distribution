"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Disc, Sparkles, ChevronLeft, ChevronRight, Music, Radio } from "lucide-react";
import { ARTISTS, Artist } from "@/data/artists";

export default function ArtistsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isLocked, setIsLocked] = useState<boolean>(true);
  const [showEmbedPlayer, setShowEmbedPlayer] = useState<boolean>(false);

  const currentArtist = ARTISTS[selectedIndex];

  // Handle keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % ARTISTS.length);
        setShowEmbedPlayer(false);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev - 1 + ARTISTS.length) % ARTISTS.length);
        setShowEmbedPlayer(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelect = (idx: number) => {
    setSelectedIndex(idx);
    setShowEmbedPlayer(false);
    setIsLocked(false);
    setTimeout(() => setIsLocked(true), 150);
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-white pt-28 pb-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 scanline-effect opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* =========================================================================
            HEADER: CHARACTER SELECTION SYSTEM
            ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs tracking-[0.35em] text-neutral-400 uppercase">
                ROSTER SELECTION MATRIX // 05 OF 05 SLOTS
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[0.2em] uppercase text-white">
              SELECT YOUR ARTIST
            </h1>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
            <span className="hidden sm:inline-block">
              [ USE ARROW KEYS &larr; &rarr; TO NAVIGATE ]
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => handleSelect((selectedIndex - 1 + ARTISTS.length) % ARTISTS.length)}
                className="p-2 border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all"
                aria-label="Previous artist"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleSelect((selectedIndex + 1) % ARTISTS.length)}
                className="p-2 border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all"
                aria-label="Next artist"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CHARACTER SELECT STRIP / SELECTOR RACK
            ========================================================================= */}
        <div className="mb-8">
          <div className="grid grid-cols-5 gap-2 sm:gap-4">
            {ARTISTS.map((artist, idx) => {
              const isSelected = selectedIndex === idx;
              const isHovered = hoveredIndex === idx;

              return (
                <button
                  key={artist.id}
                  onClick={() => handleSelect(idx)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative group text-left transition-all duration-300 focus:outline-none ${
                    isSelected
                      ? "ring-2 ring-white scale-[1.02] sm:scale-105 z-20"
                      : "opacity-60 hover:opacity-100 hover:scale-[1.01] z-10"
                  }`}
                >
                  {/* Aspect ratio frame */}
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] bg-neutral-900 overflow-hidden border border-white/10">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      sizes="(max-width: 640px) 20vw, 20vw"
                      className={`object-cover object-center transition-all duration-500 ${
                        isSelected
                          ? "grayscale-0 scale-105"
                          : "grayscale contrast-125 group-hover:grayscale-0"
                      }`}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    {/* Index Badge */}
                    <div className="absolute top-2 left-2 z-10 font-mono text-[9px] sm:text-xs text-white/70 bg-black/60 px-1.5 py-0.5 backdrop-blur-sm">
                      {artist.id}
                    </div>

                    {/* Selection state banner */}
                    {isSelected && (
                      <motion.div
                        layoutId="active-select-tag"
                        className="absolute top-2 right-2 z-10 bg-white text-black font-mono text-[8px] sm:text-[9px] px-1.5 py-0.5 font-bold tracking-widest uppercase"
                      >
                        LOCKED
                      </motion.div>
                    )}

                    {/* Artist Name in slot */}
                    <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3 z-10">
                      <p className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-white truncate">
                        {artist.name}
                      </p>
                      <p className="hidden sm:block text-[9px] font-mono text-neutral-400 truncate">
                        {artist.genre.split("/")[0]}
                      </p>
                    </div>

                    {/* Target bracket aesthetic */}
                    {isSelected && (
                      <div className="absolute inset-0 pointer-events-none border border-white/40">
                        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white" />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            SELECTED ARTIST SHOWCASE STAGE (CHARACTER DETAIL)
            ========================================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentArtist.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#080808] border border-white/10 overflow-hidden"
          >
            {/* Top status bar */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/[0.08] bg-black/40 font-mono text-xs text-neutral-400">
              <div className="flex items-center gap-3">
                <span className="text-white font-bold tracking-widest">
                  SLOT [{currentArtist.id}]
                </span>
                <span className="text-neutral-400">|</span>
                <span className="text-white uppercase tracking-wider">
                  STATUS: ARTIST SELECTED
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-4">
                <span>TERRITORY: {currentArtist.origin}</span>
                <span className="text-neutral-400">|</span>
                <span>CATALOG: {currentArtist.stats.releasesCount}</span>
              </div>
            </div>

            {/* Main Character Showcase Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
              {/* Left / Center: Huge Cinematic Artist Portrait */}
              <div className="lg:col-span-6 relative aspect-square lg:aspect-auto min-h-[400px] lg:min-h-full bg-black overflow-hidden group">
                <Image
                  src={currentArtist.image}
                  alt={currentArtist.name}
                  fill
                  priority
                  className="object-cover object-center filter contrast-110 transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Lighting and Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 lg:opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#080808] hidden lg:block opacity-90" />

                {/* Overlay character watermarks */}
                <div className="absolute bottom-6 left-6 z-10">
                  <span className="font-mono text-xs tracking-[0.4em] text-neutral-400 uppercase block mb-1">
                    KAVEN ROSTER // 2026
                  </span>
                  <p className="text-2xl sm:text-3xl font-black tracking-widest text-white uppercase drop-shadow-md">
                    {currentArtist.name}
                  </p>
                </div>

                {/* Corner crosshairs */}
                <div className="absolute top-4 left-4 font-mono text-[10px] text-white/40 pointer-events-none">
                  + 0{currentArtist.id} // LOCK
                </div>
                <div className="absolute top-4 right-4 font-mono text-[10px] text-white/40 pointer-events-none">
                  SPOTIFY VERIFIED
                </div>
              </div>

              {/* Right: Character Stats & Music Intelligence */}
              <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 bg-[#090909]/60 backdrop-blur-md">
                <div>
                  {/* Category & Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2.5 py-1 bg-white/10 text-white font-mono text-[10px] tracking-[0.2em] uppercase">
                      {currentArtist.genre}
                    </span>
                    <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-400 font-mono text-[10px] tracking-[0.2em] uppercase">
                      {currentArtist.role}
                    </span>
                    <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-400 font-mono text-[10px] tracking-[0.2em] uppercase">
                      {currentArtist.origin}
                    </span>
                  </div>

                  {/* Giant Title */}
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[0.12em] uppercase text-white mb-4 leading-none">
                    {currentArtist.name}
                  </h2>

                  {/* Tagline */}
                  <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-6 italic">
                    &ldquo;{currentArtist.tagline}&rdquo;
                  </p>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-8">
                    {currentArtist.bio}
                  </p>

                  {/* Latest Release Card */}
                  <div className="p-4 sm:p-5 bg-black/60 border border-white/10 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-400 uppercase flex items-center gap-2">
                        <Disc className="w-3.5 h-3.5 text-white animate-spin" style={{ animationDuration: '6s' }} />
                        LATEST RELEASE
                      </span>
                      <span className="font-mono text-[10px] text-white/60">
                        {currentArtist.latestRelease.year}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between">
                      <div>
                        <h4 className="text-base sm:text-lg font-bold tracking-wider text-white uppercase">
                          {currentArtist.latestRelease.title}
                        </h4>
                        {currentArtist.latestRelease.feat && (
                          <p className="text-xs text-neutral-400 font-mono mt-0.5">
                            ft. {currentArtist.latestRelease.feat}
                          </p>
                        )}
                      </div>
                      <span className="text-xs font-mono text-neutral-400 uppercase px-2 py-0.5 border border-white/10">
                        {currentArtist.latestRelease.type}
                      </span>
                    </div>
                  </div>

                  {/* Top Tracks List from Spotify */}
                  <div className="space-y-2 mb-8">
                    <p className="text-[10px] font-mono tracking-[0.3em] text-neutral-400 uppercase mb-3 flex items-center gap-2">
                      <Music className="w-3 h-3 text-white" />
                      TOP SPOTIFY REPERTOIRE
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {currentArtist.topTracks.map((track, tIdx) => (
                        <div
                          key={track.title + tIdx}
                          className="p-2.5 bg-white/[0.02] border border-white/[0.06] flex items-center justify-between group/track hover:border-white/20 transition-colors"
                        >
                          <div className="truncate pr-2">
                            <p className="text-xs font-semibold text-white uppercase tracking-wider truncate">
                              0{tIdx + 1}. {track.title}
                            </p>
                            <p className="text-[10px] text-neutral-400 font-mono truncate">
                              {track.subtitle}
                            </p>
                          </div>
                          <span className="text-[9px] font-mono text-neutral-400">
                            STREAM
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  {/* Official Spotify Profile Button */}
                  <a
                    href={currentArtist.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 px-6 py-4 bg-white text-black text-xs font-bold tracking-[0.25em] uppercase hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <span>LISTEN ON SPOTIFY</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  {/* Embedded Player Toggle */}
                  <button
                    onClick={() => setShowEmbedPlayer(!showEmbedPlayer)}
                    className="px-6 py-4 bg-transparent border border-white/20 text-white text-xs font-medium tracking-[0.25em] uppercase hover:border-white hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                  >
                    <Radio className="w-4 h-4" />
                    <span>{showEmbedPlayer ? "CLOSE PLAYER" : "AUDIO PREVIEW"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Spotify Embedded Iframe Drawer */}
            <AnimatePresence>
              {showEmbedPlayer && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-white/15 bg-black p-4 sm:p-6"
                >
                  <div className="max-w-2xl mx-auto">
                    <div className="flex items-center justify-between mb-3 text-xs font-mono text-neutral-400">
                      <span>OFFICIAL SPOTIFY PLAYER // {currentArtist.name}</span>
                      <button
                        onClick={() => setShowEmbedPlayer(false)}
                        className="hover:text-white"
                      >
                        [ CLOSE ]
                      </button>
                    </div>
                    <iframe
                      src={currentArtist.embedUrl}
                      width="100%"
                      height="352"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-lg shadow-2xl"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
