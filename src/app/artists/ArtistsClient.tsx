"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, CheckCircle } from "lucide-react";
import { ARTISTS } from "@/data/artists";
import { useLanguage } from "@/context/LanguageContext";

export default function ArtistsClient() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 sm:pt-32 pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-3">
            {t.artists.title}
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl">
            {t.artists.subtitle}
          </p>
        </div>

        {/* Artists Grid (No carousel) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ARTISTS.map((artist) => (
            <div
              key={artist.id}
              className="bg-[#0a0a0a] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Photo */}
              <div className="relative aspect-square w-full bg-neutral-900 overflow-hidden">
                <Image
                  src={artist.image}
                  alt={`${artist.name} - ${t.artists.verifiedBadge}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  {/* Verified Badge */}
                  <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 mb-2">
                    <CheckCircle className="w-3.5 h-3.5 fill-emerald-400/20 text-emerald-400" />
                    <span>{t.artists.verifiedBadge}</span>
                  </div>

                  {/* Artist Name */}
                  <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white mb-4">
                    {artist.name}
                  </h2>
                </div>

                {/* Spotify Profile Link */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <a
                    href={artist.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-300 hover:text-white transition-colors group"
                  >
                    <span>{t.artists.spotifyProfile}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
