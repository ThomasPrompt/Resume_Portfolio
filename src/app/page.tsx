"use client";

import React, { useState } from "react";
import {
  Download,
  Linkedin,
  Mail,
  Cpu,
  Layers,
  Shield,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { AskTomsAIWidget } from "@/components/AskTomsAIWidget";

export default function PortfolioHomePage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.hero.ctas.emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden bg-[#09090b] text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200 flex flex-col justify-between relative">
      {/* Subtle Ambient Top Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[360px] w-[860px] rounded-full bg-gradient-to-b from-indigo-500/[0.08] via-cyan-500/[0.03] to-transparent blur-3xl" />
      </div>

      {/* Minimalist Top Bar */}
      <header className="relative z-20 border-b border-zinc-800/60 bg-[#09090b]/80 backdrop-blur-md shrink-0">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8 h-12">
          <div className="flex items-center gap-2.5">
            <div className="flex h-6 w-6 items-center justify-center rounded border border-zinc-800 bg-zinc-900 text-[11px] font-mono font-semibold text-zinc-100">
              TD
            </div>
            <span className="text-xs font-medium tracking-tight text-zinc-200">
              {PORTFOLIO_DATA.hero.name}
            </span>
            <span className="hidden sm:inline-block text-zinc-700">/</span>
            <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-400">
              Executive One-Pager
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PORTFOLIO_DATA.hero.ctas.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/70 hover:bg-zinc-800 px-2.5 py-1 text-[11px] font-medium text-zinc-300 transition-colors"
            >
              <Linkedin className="h-3 w-3 text-indigo-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PORTFOLIO_DATA.hero.ctas.cvHref}
              download={PORTFOLIO_DATA.hero.ctas.cvFileName}
              className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100 hover:bg-white px-2.5 py-1 text-[11px] font-medium text-zinc-950 transition-colors"
            >
              <Download className="h-3 w-3" />
              <span>CV (PDF)</span>
            </a>
          </div>
        </div>
      </header>

      {/* Center Single-Screen Main Content */}
      <main className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 py-6 lg:py-0 flex-1 flex flex-col justify-center gap-6 lg:gap-7">
        {/* 1. COMPACT EXECUTIVE HERO */}
        <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 border-b border-zinc-800/70 pb-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-mono text-zinc-300 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{PORTFOLIO_DATA.hero.statusBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              {PORTFOLIO_DATA.hero.name}
            </h1>

            <p className="mt-1 text-base sm:text-xl font-medium tracking-tight text-indigo-300">
              {PORTFOLIO_DATA.hero.title}
            </p>

            <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {PORTFOLIO_DATA.hero.valueProposition}
            </p>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href={PORTFOLIO_DATA.hero.ctas.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 hover:bg-white px-4 py-2.5 text-xs font-medium text-zinc-950 shadow-sm transition-all"
            >
              <Linkedin className="h-3.5 w-3.5 text-indigo-600" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="h-3 w-3 text-zinc-500" />
            </a>

            <a
              href={PORTFOLIO_DATA.hero.ctas.cvHref}
              download={PORTFOLIO_DATA.hero.ctas.cvFileName}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/90 hover:bg-zinc-800 hover:border-zinc-700 px-4 py-2.5 text-xs font-medium text-zinc-100 transition-all"
            >
              <Download className="h-3.5 w-3.5 text-indigo-400" />
              <span>Download CV</span>
            </a>

            <div className="inline-flex items-center rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
              <a
                href={PORTFOLIO_DATA.hero.ctas.email}
                className="inline-flex items-center gap-1.5 hover:bg-zinc-800/80 px-3 py-2.5 text-xs font-medium text-zinc-300 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-indigo-400" />
                <span>Email</span>
              </a>
              <button
                onClick={handleCopyEmail}
                title="Copy email address"
                aria-label="Copy email address"
                className="border-l border-zinc-800 px-2.5 py-2.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 transition-colors"
              >
                {copiedEmail ? (
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </div>
        </section>

        {/* 2. THREE BALANCED STREAMLINED CORE PILLARS (SINGLE-VIEW GRID) */}
        <section aria-label="Core Experience Pillars" className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {PORTFOLIO_DATA.pillars.map((pillar, idx) => {
            const IconComponent =
              idx === 0 ? Cpu : idx === 1 ? Layers : Shield;

            const badgeStyle =
              pillar.accentColor === "indigo"
                ? "text-indigo-400 border-indigo-500/25 bg-indigo-500/10"
                : pillar.accentColor === "cyan"
                ? "text-cyan-400 border-cyan-500/25 bg-cyan-500/10"
                : "text-emerald-400 border-emerald-500/25 bg-emerald-500/10";

            const bulletStyle =
              pillar.accentColor === "indigo"
                ? "text-indigo-400"
                : pillar.accentColor === "cyan"
                ? "text-cyan-400"
                : "text-emerald-400";

            return (
              <div
                key={pillar.id}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700/80 p-5 flex flex-col justify-between transition-all"
              >
                <div>
                  {/* Pillar Header */}
                  <div className="flex items-center justify-between gap-2 pb-3.5 mb-3.5 border-b border-zinc-800/70">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg border ${badgeStyle}`}
                      >
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 block">
                          {pillar.categoryLabel}
                        </span>
                        <h2 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                          {pillar.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-[11px] font-mono text-zinc-400 mb-3">
                    {pillar.subtitle}
                  </p>

                  {/* Concise 2-Line Bullet Points */}
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {pillar.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2
                          className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${bulletStyle}`}
                        />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compact Tags */}
                <div className="mt-4 pt-3 border-t border-zinc-800/60 flex flex-wrap gap-1.5">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-zinc-800 bg-zinc-950/70 px-2 py-0.5 text-[10px] font-mono text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </main>

      {/* Ultra-Slim Footer */}
      <footer className="relative z-10 border-t border-zinc-900/80 shrink-0">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-10 flex items-center justify-between text-[11px] text-zinc-500">
          <span>
            {PORTFOLIO_DATA.hero.name} • {PORTFOLIO_DATA.hero.title}
          </span>
          <span className="hidden sm:inline font-mono text-[10px] text-zinc-500">
            Use the bottom-right AI chat to drill down
          </span>
        </div>
      </footer>

      {/* Discreet Floating AI Chat Widget */}
      <AskTomsAIWidget />
    </div>
  );
}
