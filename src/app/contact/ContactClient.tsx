"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Copy, Check, Mail, Sparkles, AlertCircle } from "lucide-react";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    artistOrCompany: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const officialEmail = "contact@kavendistribution.com";
  const formspreeEndpoint = "https://formspree.io/f/mjyggwna";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(officialEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          artistOrCompany: formData.artistOrCompany,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(
            data.errors.map((err: { message: string }) => err.message).join(", ")
          );
        } else {
          setErrorMessage(
            "Failed to send message. Please try again or email us directly."
          );
        }
      }
    } catch {
      setErrorMessage("Network error. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(
      `[KAVEN DISTRIBUTION] Inquiry from ${formData.name || "Artist/Partner"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nArtist / Company: ${formData.artistOrCompany}\n\nMessage:\n${formData.message}`
    );
    return `mailto:${officialEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative min-h-screen bg-[#040404] text-white pt-32 pb-24 px-6 sm:px-12 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* =========================================================================
            HEADER
            ========================================================================= */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs tracking-[0.4em] text-neutral-400 uppercase font-mono block mb-3">
            // SUBMISSIONS &amp; INQUIRIES
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.16em] uppercase text-white mb-6 leading-tight">
            LET&apos;S WORK TOGETHER<span className="text-neutral-500">.</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 font-light tracking-wide leading-relaxed">
            Have a project, artist or catalog ready to move? Tell us about it.
          </p>
        </div>

        {/* =========================================================================
            MAIN CONTACT CONTAINER
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Brand Statement & Official Email */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Official Email Channel Box */}
            <div className="p-8 bg-[#090909] border border-white/20 relative group hover:border-white/40 transition-all duration-300">
              <span className="text-[10px] font-mono tracking-[0.35em] text-neutral-400 uppercase block mb-3">
                OFFICIAL DIRECT CHANNEL
              </span>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <a
                  href={`mailto:${officialEmail}`}
                  className="text-base sm:text-lg font-mono font-medium text-white hover:text-neutral-300 transition-colors break-all underline decoration-white/30 underline-offset-4"
                >
                  {officialEmail}
                </a>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2 bg-white/5 hover:bg-white/15 border border-white/15 text-xs font-mono tracking-wider text-neutral-300 hover:text-white transition-all flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${officialEmail}`}
                  className="px-3.5 py-2 bg-white text-black hover:bg-neutral-200 text-xs font-mono tracking-wider font-semibold transition-all flex items-center gap-1.5"
                >
                  <span>WRITE DIRECTLY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Brand Statement & Response Time */}
            <div className="p-8 bg-[#080808] border border-white/[0.08] space-y-6">
              <div className="relative h-7 w-32 opacity-90">
                <Image
                  src="/kaven-logo-white.png"
                  alt="KAVEN Distribution"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <div className="space-y-4 text-xs font-light text-neutral-400 leading-relaxed">
                <p>
                  We review catalog submissions, artist rosters, and direct distribution inquiries on a selective basis.
                </p>
                <p>
                  Every release supported by KAVEN benefits from direct ingestion pipelines, global reach, and dedicated catalog care.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 font-mono text-[11px] text-neutral-400">
                <p className="text-white tracking-widest uppercase">
                  DIRECT RESPONSE TIME
                </p>
                <p className="tracking-wider">Within 24 to 48 business hours</p>
              </div>
            </div>

            {/* Artist Submission Guidelines */}
            <div className="p-6 border border-white/[0.06] bg-black/40">
              <div className="flex items-center gap-2 mb-2 font-mono text-[10px] text-neutral-400 tracking-[0.3em] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                ARTIST SUBMISSION GUIDELINES
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Include streaming links (Spotify, Apple Music, Soundcloud) and upcoming release schedules in your message.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 bg-[#080808] border border-white/10 relative">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-white/10 border border-white/30 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold tracking-[0.2em] uppercase text-white">
                        TRANSMISSION RECEIVED
                      </h2>
                      <p className="text-sm text-neutral-400 font-light max-w-md mx-auto">
                        Thank you, {formData.name}. Our team has received your inquiry at{" "}
                        <span className="text-white font-mono">{officialEmail}</span>.
                      </p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={getMailtoLink()}
                        className="px-6 py-3 bg-white text-black text-xs font-mono tracking-widest uppercase font-semibold hover:bg-neutral-200 transition-all flex items-center gap-2"
                      >
                        <span>OPEN IN MAIL CLIENT</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setErrorMessage(null);
                          setFormData({ name: "", email: "", artistOrCompany: "", message: "" });
                        }}
                        className="px-6 py-3 border border-white/20 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white hover:border-white transition-all"
                      >
                        NEW TRANSMISSION
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    action={formspreeEndpoint}
                    method="POST"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {errorMessage && (
                      <div className="p-4 bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-mono flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase mb-2"
                      >
                        NAME *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your full name"
                        className="w-full px-4 py-3.5 bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase mb-2"
                      >
                        EMAIL *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="yourname@domain.com"
                        className="w-full px-4 py-3.5 bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                      />
                    </div>

                    {/* Artist / Company */}
                    <div>
                      <label
                        htmlFor="artistOrCompany"
                        className="block text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase mb-2"
                      >
                        ARTIST / COMPANY
                      </label>
                      <input
                        id="artistOrCompany"
                        name="artistOrCompany"
                        type="text"
                        value={formData.artistOrCompany}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            artistOrCompany: e.target.value,
                          })
                        }
                        placeholder="Artist stage name or label name"
                        className="w-full px-4 py-3.5 bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase mb-2"
                      >
                        MESSAGE *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Describe your project, links to music, releases count, and distribution objectives..."
                        className="w-full px-4 py-3.5 bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full group px-8 py-4.5 bg-white text-black text-xs font-bold tracking-[0.3em] uppercase hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer"
                      >
                        {loading ? (
                          <span className="font-mono text-xs">TRANSMITTING...</span>
                        ) : (
                          <>
                            <span>SEND MESSAGE</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
