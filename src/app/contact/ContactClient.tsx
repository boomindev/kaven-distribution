"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactClient() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    spotifyLink: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // [CORREO] placeholder per user instructions
  const visibleEmail = "[CORREO]";
  const formspreeEndpoint = "https://formspree.io/f/mjyggwna";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(visibleEmail);
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
          spotifyLink: formData.spotifyLink,
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
          setErrorMessage("Failed to send message. Please contact us directly.");
        }
      }
    } catch {
      setErrorMessage("Network error. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 sm:pt-32 pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-3">
            {t.contact.title}
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Email Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#0a0a0a] border border-white/[0.08]">
              <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase block mb-3">
                {t.contact.directEmailLabel}
              </span>

              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <a
                  href={`mailto:${visibleEmail}`}
                  className="text-lg font-mono font-medium text-white hover:text-neutral-300 transition-colors underline decoration-white/20 underline-offset-4"
                >
                  {visibleEmail}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono tracking-wider text-neutral-300 hover:text-white transition-all flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{t.contact.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{t.contact.copyEmail}</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${visibleEmail}`}
                  className="px-3.5 py-2 bg-white text-black hover:bg-neutral-200 text-xs font-mono tracking-wider font-semibold transition-all flex items-center gap-1.5"
                >
                  <span>EMAIL</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Simple Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-[#0a0a0a] border border-white/[0.08]">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold tracking-wide uppercase text-white">
                    {t.contact.form.successTitle}
                  </h3>
                  <p className="text-sm text-neutral-400 font-light max-w-sm mx-auto">
                    {t.contact.form.successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", spotifyLink: "", message: "" });
                    }}
                    className="mt-4 px-6 py-2.5 bg-white/5 border border-white/10 text-xs font-mono tracking-wider text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {t.contact.form.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3 bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-light">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2"
                    >
                      {t.contact.form.nameLabel} *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full bg-[#121212] border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2"
                    >
                      {t.contact.form.emailLabel} *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder={t.contact.form.emailPlaceholder}
                      className="w-full bg-[#121212] border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  {/* Spotify Link */}
                  <div>
                    <label
                      htmlFor="spotifyLink"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2"
                    >
                      {t.contact.form.spotifyLabel}
                    </label>
                    <input
                      id="spotifyLink"
                      type="url"
                      value={formData.spotifyLink}
                      onChange={(e) =>
                        setFormData({ ...formData, spotifyLink: e.target.value })
                      }
                      placeholder={t.contact.form.spotifyPlaceholder}
                      className="w-full bg-[#121212] border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2"
                    >
                      {t.contact.form.messageLabel} *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full bg-[#121212] border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 bg-white text-black text-xs font-semibold tracking-[0.2em] uppercase hover:bg-neutral-200 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>
                        {loading
                          ? t.contact.form.sendingBtn
                          : t.contact.form.submitBtn}
                      </span>
                      {!loading && <ArrowUpRight className="w-4 h-4" />}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
