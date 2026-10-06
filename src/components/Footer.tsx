import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="relative h-6 w-28 opacity-90">
            <Image
              src="/kaven-logo-white.png"
              alt="KAVEN"
              fill
              className="object-contain object-center md:object-left"
            />
          </div>
          <span className="text-[11px] tracking-[0.3em] uppercase text-neutral-400 font-light">
            Music Distribution
          </span>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-neutral-500 font-light">
            &copy; 2026 KAVEN Distribution
          </p>
        </div>
      </div>
    </footer>
  );
}
