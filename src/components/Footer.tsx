"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#030303] py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand & Name */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/" className="inline-block relative h-6 w-28 opacity-90 hover:opacity-100 transition-opacity">
            <Image
              src="/kaven-logo-white.png"
              alt="KAVEN Distribution"
              fill
              className="object-contain object-center md:object-left"
            />
          </Link>
          <span className="hidden sm:inline-block text-neutral-600">|</span>
          <span className="text-xs text-neutral-400 font-light tracking-wider">
            KAVEN Distribution
          </span>
        </div>

        {/* Email [CORREO] */}
        <div className="flex items-center gap-2">
          <Mail className="w-3.5 h-3.5 text-neutral-400" />
          <a
            href="mailto:[CORREO]"
            className="text-xs font-mono text-neutral-300 hover:text-white transition-colors underline decoration-white/20 underline-offset-4"
          >
            [CORREO]
          </a>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-xs text-neutral-500 font-light tracking-wide">
            &copy; 2026 KAVEN Distribution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
