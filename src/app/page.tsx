"use client";

import React, { useState } from "react";
import {
  ArrowDownRight,
  FileText,
  Linkedin,
  Mail,
  Cpu,
  Layers,
  Shield,
  CheckCircle2,
  ExternalLink,
  Terminal,
  Copy,
  Check,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { AskTomsAIWidget } from "@/components/AskTomsAIWidget";
import { OnePagerModal } from "@/components/OnePagerModal";

export default function PortfolioHomePage() {
  const [isOnePagerOpen, setIsOnePagerOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.hero.ctas.emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-x-hidden">
      {/* Subtle Linear/Vercel Ambient Top Radial Glow & Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[480px] w-[960px] rounded-full bg-gradient-to-b from-indigo-500/[0.08] via-cyan-500/[0.03] to-transparent blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Minimalist Top Navigation */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/70 bg-[#09090b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8 h-14">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/90 text-xs font-mono font-semibold text-zinc-100 shadow-inner">
              TD
            </div>
            <span className="text-sm font-medium tracking-tight text-zinc-100">
              {PORTFOLIO_DATA.hero.name}
            </span>
            <span className="hidden sm:inline-block text-zinc-700">/</span>
            <span className="hidden sm:inline-block text-xs font-mono text-zinc-400">
              AI Systems & Product Architecture
            </span>
          </div>

          <nav className="flex items-center gap-2 sm:gap-5 text-xs font-medium text-zinc-400">
            <a
              href="#expertise"
              className="hover:text-zinc-100 transition-colors px-2 py-1"
            >
              Expertise
            </a>
            <a
              href="#case-studies"
              className="hover:text-zinc-100 transition-colors px-2 py-1"
            >
              Case Studies
            </a>
            <button
              onClick={() => setIsOnePagerOpen(true)}
              className="hover:text-zinc-100 transition-colors px-2 py-1 hidden sm:inline-block"
            >
              One-Pager
            </button>
            <a
              href={PORTFOLIO_DATA.hero.ctas.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/70 hover:bg-zinc-800 hover:border-zinc-700 px-2.5 py-1.5 text-zinc-200 transition-all"
            >
              <Linkedin className="h-3.5 w-3.5 text-indigo-400" />
              <span className="hidden md:inline">LinkedIn</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        {/* =========================================================
            1. HERO SECTION
           ========================================================= */}
        <section className="pt-16 pb-16 sm:pt-24 sm:pb-20 border-b border-zinc-900">
          <div className="max-w-3xl">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800/90 bg-zinc-900/60 px-3 py-1 text-[11px] font-mono text-zinc-300 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{PORTFOLIO_DATA.hero.statusBadge}</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-[1.08]">
              {PORTFOLIO_DATA.hero.name}
            </h1>

            {/* Title */}
            <p className="mt-3 text-lg sm:text-2xl font-medium tracking-tight bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-400 bg-clip-text text-transparent">
              {PORTFOLIO_DATA.hero.title}
            </p>

            {/* Short Value Proposition */}
            <p className="mt-5 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
              {PORTFOLIO_DATA.hero.valueProposition}
            </p>

            {/* 4 Action CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* CTA 1: View Case Studies */}
              <a
                href={PORTFOLIO_DATA.hero.ctas.caseStudiesHref}
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 hover:bg-white px-4 py-2.5 text-xs sm:text-sm font-medium text-zinc-950 shadow-sm transition-all duration-150"
              >
                <span>View Case Studies</span>
                <ArrowDownRight className="h-4 w-4" />
              </a>

              {/* CTA 2: Download CV / One-Pager */}
              <button
                onClick={() => setIsOnePagerOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800/90 hover:border-zinc-700 px-4 py-2.5 text-xs sm:text-sm font-medium text-zinc-100 transition-all duration-150"
              >
                <FileText className="h-4 w-4 text-indigo-400" />
                <span>Download CV / One-Pager</span>
              </button>

              {/* CTA 3: LinkedIn */}
              <a
                href={PORTFOLIO_DATA.hero.ctas.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/80 hover:border-zinc-700 px-4 py-2.5 text-xs sm:text-sm font-medium text-zinc-200 transition-all duration-150"
              >
                <Linkedin className="h-4 w-4 text-indigo-400" />
                <span>LinkedIn</span>
                <ExternalLink className="h-3 w-3 text-zinc-500" />
              </a>

              {/* CTA 4: Email */}
              <div className="inline-flex items-center rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
                <a
                  href={PORTFOLIO_DATA.hero.ctas.email}
                  className="inline-flex items-center gap-2 hover:bg-zinc-800/80 px-4 py-2.5 text-xs sm:text-sm font-medium text-zinc-200 transition-all duration-150"
                >
                  <Mail className="h-4 w-4 text-indigo-400" />
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
          </div>
        </section>

        {/* =========================================================
            2. CORE EXPERIENCE & EXPERTISE (STRUCTURED CLEAN CARDS)
               Strictly separated into 3 distinct domains
           ========================================================= */}
        <section id="expertise" className="py-16 sm:py-20 border-b border-zinc-900">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-indigo-400">
                <Terminal className="h-3.5 w-3.5" />
                <span>Core Experience & Expertise</span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Distinct Domains of Leadership
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
              Structured across three distinct pillars: Enterprise AI & SaaS,
              Mission-Critical Defense & C2 Systems, and Operational Command.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {PORTFOLIO_DATA.domains.map((domain, idx) => {
              const IconComponent =
                idx === 0 ? Cpu : idx === 1 ? Layers : Shield;
              const badgeColor =
                domain.accentColor === "indigo"
                  ? "text-indigo-400 border-indigo-500/25 bg-indigo-500/10"
                  : domain.accentColor === "cyan"
                  ? "text-cyan-400 border-cyan-500/25 bg-cyan-500/10"
                  : "text-emerald-400 border-emerald-500/25 bg-emerald-500/10";

              const bulletColor =
                domain.accentColor === "indigo"
                  ? "text-indigo-400"
                  : domain.accentColor === "cyan"
                  ? "text-cyan-400"
                  : "text-emerald-400";

              return (
                <div
                  key={domain.id}
                  className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700/80 p-6 sm:p-8 transition-all duration-200"
                >
                  {/* Card Top Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-zinc-800/70">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl border ${badgeColor}`}
                      >
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
                          {domain.categoryLabel}
                        </span>
                        <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-white">
                          {domain.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-zinc-400">
                      {domain.subtitle}
                    </span>
                  </div>

                  {/* Domain Summary Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 max-w-3xl">
                    {domain.description}
                  </p>

                  {/* Sub-cards (e.g., Elbit Systems & mPrest cleanly separated in Domain 2) */}
                  <div
                    className={`grid gap-4 ${
                      domain.highlights.length > 1
                        ? "grid-cols-1 md:grid-cols-2"
                        : "grid-cols-1"
                    }`}
                  >
                    {domain.highlights.map((item) => (
                      <div
                        key={item.companyOrRole}
                        className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-5 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                            <h4 className="text-base font-semibold text-zinc-100">
                              {item.companyOrRole}
                            </h4>
                            <span
                              className={`rounded-md border px-2 py-0.5 text-[11px] font-mono ${badgeColor}`}
                            >
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                            {item.summary}
                          </p>
                          <ul className="space-y-2 text-xs sm:text-[13px] text-zinc-400">
                            {item.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2.5">
                                <CheckCircle2
                                  className={`h-4 w-4 shrink-0 mt-0.5 ${bulletColor}`}
                                />
                                <span className="leading-relaxed">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Domain Capability Pills */}
                  <div className="mt-6 pt-5 border-t border-zinc-800/60 flex flex-wrap gap-2">
                    {domain.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-zinc-800 bg-zinc-900/70 px-2.5 py-1 text-[11px] font-mono text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            3. SELECTED CASE STUDIES (CONCISE, SCAN-FRIENDLY)
           ========================================================= */}
        <section id="case-studies" className="py-16 sm:py-20 border-b border-zinc-900">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-indigo-400">
                <Layers className="h-3.5 w-3.5" />
                <span>Selected Case Studies</span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Systems Architecture in Production
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
              Concise architectural highlights across Enterprise AI & SaaS,
              mPrest C2 Systems, and Elbit Operational Platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700/80 p-6 flex flex-col justify-between transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                      {cs.domainTag}
                    </span>
                    <span className="text-xs font-mono text-indigo-400">
                      {cs.organization}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight mb-2.5">
                    {cs.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                    {cs.summary}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                        Architecture
                      </h4>
                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        {cs.architecture.map((arch, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-indigo-400 mt-0.5">•</span>
                            <span className="leading-relaxed">{arch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                        Key Impact
                      </h4>
                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        {cs.outcomes.map((out, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-400 mt-0.5">•</span>
                            <span className="leading-relaxed">{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Metrics Strip */}
                <div className="mt-6 pt-4 border-t border-zinc-800/70 grid grid-cols-3 gap-2">
                  {cs.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-lg bg-zinc-950/70 border border-zinc-800/60 p-2 text-center"
                    >
                      <div className="text-[11px] font-semibold text-zinc-100 truncate">
                        {m.value}
                      </div>
                      <div className="text-[9px] font-mono text-zinc-500 truncate mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Minimalist Footer */}
        <footer className="py-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="font-medium text-zinc-300">
              {PORTFOLIO_DATA.hero.name}
            </span>
            <span>—</span>
            <span>{PORTFOLIO_DATA.hero.title}</span>
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={() => setIsOnePagerOpen(true)}
              className="hover:text-zinc-300 transition-colors"
            >
              Download CV / One-Pager
            </button>
            <a
              href={PORTFOLIO_DATA.hero.ctas.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PORTFOLIO_DATA.hero.ctas.email}
              className="hover:text-zinc-300 transition-colors"
            >
              {PORTFOLIO_DATA.hero.ctas.emailAddress}
            </a>
          </div>
        </footer>
      </main>

      {/* Executive One-Pager & Printable CV Modal */}
      <OnePagerModal
        isOpen={isOnePagerOpen}
        onClose={() => setIsOnePagerOpen(false)}
      />

      {/* Interactive AI Chat Widget (Floating Corner) */}
      <AskTomsAIWidget />
    </div>
  );
}
