"use client";

import React, { useState, useEffect } from "react";
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
  ArrowDown,
  Sun,
  Moon,
  FileText,
  BookOpen,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Terminal,
  Award,
  TrendingUp,
  Database,
} from "lucide-react";
import { PORTFOLIO_DATA, ThoughtLeadershipArticle } from "@/data/portfolio";
import { AskTomsAIWidget } from "@/components/AskTomsAIWidget";
import { OnePagerModal } from "@/components/OnePagerModal";

export default function PortfolioHomePage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isOnePagerOpen, setIsOnePagerOpen] = useState(false);
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>(
    null
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.hero.ctas.emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const toggleArticle = (id: string) => {
    setExpandedArticleId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500/20 dark:selection:bg-indigo-500/30 selection:text-indigo-700 dark:selection:text-indigo-200 transition-colors duration-200 relative">
      {/* Ambient Linear/Vercel-Inspired Background Glow & Subtle Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[480px] w-[1040px] rounded-full bg-gradient-to-b from-indigo-500/[0.11] via-cyan-500/[0.05] to-transparent blur-3xl" />
        <div className="absolute top-[40%] right-[-10%] h-[360px] w-[520px] rounded-full bg-gradient-to-tr from-indigo-500/[0.05] via-emerald-500/[0.03] to-transparent blur-3xl" />
      </div>

      {/* Sticky Glassmorphic Navigation Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-200/80 dark:border-zinc-800/70 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8 h-14">
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-800 bg-zinc-900 dark:bg-zinc-900 text-xs font-mono font-bold text-white shadow-sm"
            >
              TD
            </a>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                {PORTFOLIO_DATA.hero.name}
              </span>
              <span className="hidden md:inline-block text-zinc-300 dark:text-zinc-700">
                /
              </span>
              <span className="hidden md:inline-block text-xs font-mono text-zinc-500 dark:text-zinc-400">
                Senior PM & AI Systems Architect
              </span>
            </div>
          </div>

          {/* Section Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
            <a
              href="#pillars"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              3 Pillars
            </a>
            <a
              href="#case-studies"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#thought-leadership"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Thought Leadership
            </a>
            <button
              onClick={() => setIsOnePagerOpen(true)}
              className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 font-mono text-[11px] transition-colors"
            >
              <FileText className="h-3.5 w-3.5" />
              Executive One-Pager
            </button>
          </nav>

          {/* Header Actions & Theme Switcher */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDark((prev) => !prev)}
              aria-label="Toggle Dark / Light Mode"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            >
              {isDark ? (
                <Sun className="h-3.5 w-3.5 text-amber-400" />
              ) : (
                <Moon className="h-3.5 w-3.5 text-indigo-600" />
              )}
            </button>

            <button
              onClick={() => setIsOnePagerOpen(true)}
              className="inline-flex lg:hidden items-center gap-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 px-2.5 py-1.5 text-[11px] font-medium text-zinc-700 dark:text-zinc-300"
            >
              <FileText className="h-3 w-3 text-indigo-500" />
              <span>1-Pager</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 pt-10 sm:pt-16 pb-24 space-y-20 sm:space-y-24">
        {/* =========================================================
            1. HERO SECTION
        ========================================================= */}
        <section aria-label="Hero" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Hero Headline, Sub-headline & Primary CTAs */}
            <div className="lg:col-span-7 space-y-5">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3 py-1 text-[11px] font-mono text-indigo-700 dark:text-indigo-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{PORTFOLIO_DATA.hero.name}</span>
                <span className="text-indigo-400/60">•</span>
                <span>{PORTFOLIO_DATA.hero.role}</span>
              </div>

              {/* Headline with colorful gradient on "That Actually Scale." */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.08]">
                {PORTFOLIO_DATA.hero.headline.includes("That Actually Scale.") ? (
                  <>
                    {
                      PORTFOLIO_DATA.hero.headline.split(
                        "That Actually Scale."
                      )[0]
                    }
                    <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                      That Actually Scale.
                    </span>
                  </>
                ) : (
                  PORTFOLIO_DATA.hero.headline
                )}
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
                {PORTFOLIO_DATA.hero.subHeadline}
              </p>

              {/* Call-to-Action Buttons - Forced in one single line */}
              <div className="pt-2 flex flex-row flex-wrap items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.hero.ctas.caseStudiesAnchor}
                  className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white px-4.5 py-3 text-xs sm:text-sm font-semibold text-white dark:text-zinc-950 shadow-sm transition-all whitespace-nowrap"
                >
                  <span>View Case Studies</span>
                  <ArrowDown className="h-4 w-4 text-indigo-400 dark:text-indigo-600" />
                </a>

                <a
                  href={PORTFOLIO_DATA.hero.ctas.cvHref}
                  download={PORTFOLIO_DATA.hero.ctas.cvFileName}
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 px-4.5 py-3 text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 transition-all whitespace-nowrap"
                >
                  <Download className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Download CV</span>
                </a>

                {/* LinkedIn / Email Group */}
                <div className="inline-flex items-center rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/60 overflow-hidden shadow-sm whitespace-nowrap">
                  <a
                    href={PORTFOLIO_DATA.hero.ctas.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-3.5 py-3 text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-200 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    <span>LinkedIn</span>
                    <ExternalLink className="h-3 w-3 text-zinc-400" />
                  </a>
                  <span className="h-5 w-px bg-zinc-200 dark:bg-zinc-800" />
                  <a
                    href={PORTFOLIO_DATA.hero.ctas.email}
                    className="inline-flex items-center gap-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-3.5 py-3 text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-200 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    <span>Email</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy email address (tomdeutsch86@gmail.com)"
                    aria-label="Copy email address"
                    className="border-l border-zinc-200 dark:border-zinc-800 px-3 py-3 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    {copiedEmail ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive AI Agent & Executive One-Pager Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/[0.09] via-cyan-500/[0.05] to-emerald-500/[0.05] p-6 sm:p-7 space-y-4 shadow-sm">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-300">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>INTERACTIVE AI AGENT & EXECUTIVE ONE-PAGER</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white leading-snug">
                    Evaluating Tom for a Senior PM or AI Systems Architect Role?
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    Use the floating <strong>&ldquo;Ask Tom&apos;s AI&rdquo;</strong>{" "}
                    widget in the bottom-right corner (connected to our Google AI
                    Studio API endpoint) to query Tom&apos;s experience directly,
                    or open the printable Executive One-Pager via the top navigation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Bar (4 Badges) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
            {PORTFOLIO_DATA.hero.metricsBar.map((badge, index) => {
              const BadgeIcon =
                index === 0
                  ? Award
                  : index === 1
                  ? TrendingUp
                  : index === 2
                  ? Terminal
                  : Shield;

              return (
                <div
                  key={badge.metric}
                  className="group relative rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/40 hover:bg-white dark:hover:bg-zinc-900/70 hover:border-indigo-500/40 dark:hover:border-zinc-700 p-4 transition-all shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-sm sm:text-base font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                      {badge.metric}
                    </span>
                    <BadgeIcon className="h-4 w-4 text-zinc-400 dark:text-zinc-500 group-hover:text-indigo-500 transition-colors shrink-0" />
                  </div>
                  <p className="text-xs font-medium text-zinc-800 dark:text-zinc-200 leading-snug">
                    {badge.label}
                  </p>
                  {badge.detail && (
                    <p className="mt-1.5 text-[11px] font-mono text-zinc-500 dark:text-zinc-500">
                      {badge.detail}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            2. WHAT I BRING TO THE TABLE (THE 3 PILLARS)
        ========================================================= */}
        <section id="pillars" className="scroll-mt-20 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800/80 pb-5">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-1.5">
                01 // Core Product & Architecture Philosophy
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                What I Bring to the Table (The 3 Pillars)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-md">
              Bridging commercial P&L discipline, deep agentic system
              architecture, and zero-friction Product-Led Growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {PORTFOLIO_DATA.pillars.map((pillar, idx) => {
              const IconComponent =
                idx === 0 ? Cpu : idx === 1 ? Layers : Shield;

              const badgeStyle =
                pillar.accentColor === "indigo"
                  ? "text-indigo-600 dark:text-indigo-400 border-indigo-500/25 bg-indigo-500/10"
                  : pillar.accentColor === "cyan"
                  ? "text-cyan-600 dark:text-cyan-400 border-cyan-500/25 bg-cyan-500/10"
                  : "text-emerald-600 dark:text-emerald-400 border-emerald-500/25 bg-emerald-500/10";

              const bulletColor =
                pillar.accentColor === "indigo"
                  ? "text-indigo-600 dark:text-indigo-400"
                  : pillar.accentColor === "cyan"
                  ? "text-cyan-600 dark:text-cyan-400"
                  : "text-emerald-600 dark:text-emerald-400";

              return (
                <div
                  key={pillar.id}
                  className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/35 hover:border-zinc-300 dark:hover:border-zinc-700/80 p-6 flex flex-col justify-between transition-all shadow-sm"
                >
                  <div>
                    {/* Pillar Header */}
                    <div className="flex items-start gap-3 pb-4 mb-4 border-b border-zinc-100 dark:border-zinc-800/70">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${badgeStyle}`}
                      >
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 block">
                          {pillar.categoryLabel}
                        </span>
                        <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white tracking-tight mt-0.5">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    {/* Core Executive Summary */}
                    <p className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-200 leading-relaxed mb-4 bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/60 dark:border-zinc-800/60 rounded-xl p-3">
                      {pillar.description}
                    </p>

                    {/* Detailed Breakdown */}
                    <ul className="space-y-3 text-xs text-zinc-600 dark:text-zinc-300">
                      {pillar.highlights.map((item, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className={`h-4 w-4 shrink-0 mt-0.5 ${bulletColor}`}
                          />
                          <div className="leading-relaxed">
                            <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                              {item.label}:
                            </strong>{" "}
                            {item.detail}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            3. SELECTED CASE STUDIES
        ========================================================= */}
        <section id="case-studies" className="scroll-mt-20 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800/80 pb-5">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-1.5">
                02 // Proven Production Execution
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Selected Case Studies
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-md">
              From scaling Enterprise AI Operating Systems (~5,000 MAU) to \$4.4B
              M&A consolidations and Iron Dome C2 platforms.
            </p>
          </div>

          <div className="space-y-6">
            {/* Case Study 01: Flagship U-AI Workspace */}
            {PORTFOLIO_DATA.caseStudies
              .filter((cs) => cs.featured)
              .map((cs) => (
                <div
                  key={cs.id}
                  className="rounded-2xl border border-indigo-500/30 dark:border-indigo-500/30 bg-white dark:bg-zinc-900/45 p-6 sm:p-8 shadow-sm relative overflow-hidden"
                >
                  <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-indigo-500/[0.07] blur-3xl pointer-events-none" />

                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-zinc-200 dark:border-zinc-800/80">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-300 mb-2">
                        <Database className="h-3 w-3" />
                        <span>{cs.badge}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        Case Study {cs.number}: {cs.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                        {cs.subtitle}
                      </p>
                    </div>

                    {/* Key Metrics Strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5 shrink-0">
                      {cs.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/80 px-3.5 py-2"
                        >
                          <div className="text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 5 Structured Case Study Dimensions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cs.sections?.map((sec, idx) => (
                      <div
                        key={sec.label}
                        className={`rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-950/50 p-4 ${
                          idx === (cs.sections?.length ?? 0) - 1
                            ? "md:col-span-2 border-emerald-500/30 dark:border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.04]"
                            : ""
                        }`}
                      >
                        <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-1.5">
                          {sec.label}
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-200 leading-relaxed">
                          {sec.content}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-6 pt-4 border-t border-zinc-200/70 dark:border-zinc-800/70 flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mr-1">
                      Architecture Stack:
                    </span>
                    {cs.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 px-2.5 py-1 text-[11px] font-mono text-zinc-700 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

            {/* Case Studies 02 & 03 Side-by-Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {PORTFOLIO_DATA.caseStudies
                .filter((cs) => !cs.featured)
                .map((cs) => (
                  <div
                    key={cs.id}
                    className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/35 hover:border-zinc-300 dark:hover:border-zinc-700 p-6 flex flex-col justify-between transition-all shadow-sm"
                  >
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-3">
                        {cs.badge}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        Case Study {cs.number}: {cs.title}
                      </h3>

                      <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {cs.sections?.[0]?.content || cs.summary}
                      </p>

                      {/* Mini Metrics */}
                      <div className="mt-5 grid grid-cols-3 gap-2.5">
                        {cs.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950/60 p-2.5"
                          >
                            <div className="text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400">
                              {m.value}
                            </div>
                            <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 leading-tight mt-0.5">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            4. THOUGHT LEADERSHIP (PUBLISHED ARTICLES & INSIGHTS)
        ========================================================= */}
        <section id="thought-leadership" className="scroll-mt-20 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800/80 pb-5">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-1.5">
                03 // Executive Frameworks & Publications
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Thought Leadership (Published Articles & Insights)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-md">
              Field-tested insights on Enterprise AI Operating Systems,
              proprietary data moats, and AI Token Economics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.thoughtLeadership.map(
              (article: ThoughtLeadershipArticle) => {
                const isExpanded = expandedArticleId === article.id;

                return (
                  <article
                    key={article.id}
                    className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/35 hover:border-indigo-500/40 dark:hover:border-zinc-700 p-6 flex flex-col justify-between transition-all shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-indigo-500/25 bg-indigo-500/10 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
                          <BookOpen className="h-3 w-3" />
                          {article.tag}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400">
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        {article.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {article.subtitle}
                      </p>

                      {/* Key Takeaways */}
                      <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/70 space-y-2">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                          Key Architectural Takeaways
                        </div>
                        <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
                          {article.keyTakeaways.map((point, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-indigo-500 font-bold mt-0.5">
                                →
                              </span>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Expandable Executive Brief */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-2.5 text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-950/70 rounded-xl p-4 animate-in fade-in duration-150">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
                            Executive Article Synopsis
                          </div>
                          {article.fullSummary.map((para, pIdx) => (
                            <p key={pIdx} className="leading-relaxed">
                              {para}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between">
                      <button
                        onClick={() => toggleArticle(article.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors"
                      >
                        <span>
                          {isExpanded
                            ? "Hide Executive Synopsis"
                            : "Read Executive Synopsis"}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="h-3.5 w-3.5" />
                        ) : (
                          <ChevronDown className="h-3.5 w-3.5" />
                        )}
                      </button>

                      <span className="text-[11px] font-mono text-zinc-400">
                        By Tom Deutsch
                      </span>
                    </div>
                  </article>
                );
              }
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-200 dark:border-zinc-900 bg-white/50 dark:bg-[#09090b]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-800 dark:text-zinc-300">
              {PORTFOLIO_DATA.hero.name}
            </span>
            <span>•</span>
            <span>{PORTFOLIO_DATA.hero.role}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.hero.ctas.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PORTFOLIO_DATA.hero.ctas.email}
              className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
            >
              {PORTFOLIO_DATA.hero.ctas.emailAddress}
            </a>
            <button
              onClick={() => setIsOnePagerOpen(true)}
              className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
            >
              Executive One-Pager
            </button>
          </div>
        </div>
      </footer>

      {/* Printable Executive One-Pager Modal */}
      <OnePagerModal
        isOpen={isOnePagerOpen}
        onClose={() => setIsOnePagerOpen(false)}
      />

      {/* Floating "Ask Tom's AI" Chat Widget */}
      <AskTomsAIWidget />
    </div>
  );
}