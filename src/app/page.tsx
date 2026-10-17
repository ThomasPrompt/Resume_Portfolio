"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowDown,
  FileText,
  Linkedin,
  Mail,
  Sun,
  Moon,
  Shield,
  Layers,
  TrendingUp,
  Cpu,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  Printer,
  Terminal,
  Sparkles,
  ChevronRight,
  GitBranch,
  Database,
  Lock,
  Zap,
} from "lucide-react";
import { PORTFOLIO_DATA, ThoughtLeadershipArticle } from "@/data/portfolio";
import { AskTomsAIWidget } from "@/components/AskTomsAIWidget";

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeMode, setActiveMode] = useState<"portfolio" | "one-pager">("portfolio");
  const [selectedArticle, setSelectedArticle] = useState<ThoughtLeadershipArticle | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const handlePrintOnePager = () => {
    setActiveMode("one-pager");
    setTimeout(() => {
      window.print();
    }, 150);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-400 transition-colors duration-300 relative overflow-x-hidden">
      {/* Subtle Linear / Vercel Ambient Grid & Radial Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 print:hidden"
        style={{
          backgroundImage: darkMode
            ? "radial-gradient(circle at 50% -10%, rgba(99, 102, 241, 0.14), transparent 55%), linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)"
            : "radial-gradient(circle at 50% -10%, rgba(99, 102, 241, 0.08), transparent 55%), linear-gradient(to right, rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.035) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 48px 48px, 48px 48px",
        }}
      />

      {/* Sticky Top Navigation */}
      <header className="sticky top-0 z-40 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-xl print:hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-mono font-bold text-xs flex items-center justify-center tracking-tighter shadow-sm">
              TD
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm tracking-tight">
                  {PORTFOLIO_DATA.profile.name}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Senior PM &amp; AI Architect
                </span>
              </div>
            </div>
          </div>

          {/* Section Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            <a
              href="#pillars"
              onClick={() => setActiveMode("portfolio")}
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              3 Pillars
            </a>
            <a
              href="#case-studies"
              onClick={() => setActiveMode("portfolio")}
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#thought-leadership"
              onClick={() => setActiveMode("portfolio")}
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Thought Leadership
            </a>
            <button
              onClick={() =>
                setActiveMode(activeMode === "portfolio" ? "one-pager" : "portfolio")
              }
              className={`px-2.5 py-1 rounded-md font-mono text-[11px] transition-all ${
                activeMode === "one-pager"
                  ? "bg-indigo-600 text-white"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              }`}
            >
              {activeMode === "one-pager" ? "← Full Interactive View" : "Executive CV / One-Pager"}
            </button>
          </nav>

          {/* Actions: Theme Toggle & Print/CV */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintOnePager}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors"
              title="Print or Save PDF Executive One-Pager"
            >
              <Printer className="h-3.5 w-3.5 text-indigo-500" />
              <span>Export PDF CV</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle color theme"
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      {activeMode === "one-pager" ? (
        /* ==========================================
           EXECUTIVE ONE-PAGER / PRINTABLE CV VIEW
           ========================================== */
        <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-10 print:py-0 print:px-0">
          <div className="mb-6 flex items-center justify-between print:hidden">
            <button
              onClick={() => setActiveMode("portfolio")}
              className="text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              ← Return to Full Interactive Portfolio
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 text-xs font-semibold shadow-sm transition-colors"
            >
              <Printer className="h-3.5 w-3.5" />
              Print / Save as PDF
            </button>
          </div>

          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 sm:p-10 shadow-xl print:shadow-none print:border-0 print:p-2">
            {/* One-Pager Header */}
            <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-1">
                  Executive Product &amp; AI Architecture One-Pager
                </p>
                <h1 className="text-3xl font-bold tracking-tight">
                  {PORTFOLIO_DATA.profile.name}
                </h1>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mt-0.5">
                  {PORTFOLIO_DATA.profile.role} • Major (Res.), IAF Iron Dome Battery Commander
                </p>
              </div>
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 space-y-1 sm:text-right">
                <div>{PORTFOLIO_DATA.profile.links.emailAddress}</div>
                <div>
                  {PORTFOLIO_DATA.profile.links.linkedin.replace(
                    /^https?:\/\/(www\.)?/,
                    ""
                  )}
                </div>
                <div>{PORTFOLIO_DATA.profile.location}</div>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="py-5 border-b border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Executive Summary
              </h2>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1.5">
                {PORTFOLIO_DATA.profile.headline}
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {PORTFOLIO_DATA.profile.subHeadline}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
                {PORTFOLIO_DATA.metricsBar.map((m) => (
                  <div
                    key={m.value}
                    className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 p-2.5"
                  >
                    <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                      {m.value}
                    </div>
                    <div className="text-[11px] font-medium text-zinc-700 dark:text-zinc-300 leading-snug mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Pillars Compact */}
            <div className="py-5 border-b border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                Core Leadership Pillars
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PORTFOLIO_DATA.pillars.map((p) => (
                  <div
                    key={p.id}
                    className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3.5"
                  >
                    <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                      {p.number}. {p.title}
                    </div>
                    <ul className="space-y-1 text-[11px] text-zinc-600 dark:text-zinc-400">
                      {p.highlights.map((h) => (
                        <li key={h.title}>
                          <strong className="text-zinc-800 dark:text-zinc-200">
                            {h.title}:
                          </strong>{" "}
                          {h.detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Case Studies Compact */}
            <div className="py-5">
              <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                Selected Track Record &amp; Case Studies
              </h2>
              <div className="space-y-4">
                {PORTFOLIO_DATA.caseStudies.map((cs) => (
                  <div
                    key={cs.id}
                    className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        Case Study {cs.number}: {cs.title} ({cs.organization})
                      </h3>
                      <span className="text-[11px] font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                        {cs.scaleBadge}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2">
                      <strong>Problem:</strong> {cs.problem}
                    </p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2">
                      <strong>Strategy &amp; Solution:</strong> {cs.strategy} {cs.solution}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {cs.impact.map((imp, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 px-2 py-0.5 rounded"
                        >
                          ✓ {imp}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      ) : (
        /* ==========================================
           FULL INTERACTIVE EXECUTIVE PORTFOLIO VIEW
           ========================================== */
        <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-28">
          {/* 1. HERO SECTION */}
          <section className="pt-14 sm:pt-20 pb-16 border-b border-zinc-200/80 dark:border-zinc-800/80">
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 px-3.5 py-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-6 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
              <span>EXECUTIVE ONE-PAGER &amp; ARCHITECTURE PORTFOLIO</span>
              <span className="text-zinc-300 dark:text-zinc-700">|</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                TOM DEUTSCH
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.08] max-w-4xl">
              Architecting Enterprise AI Agents &amp; Platforms{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                That Actually Scale.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed font-normal">
              {PORTFOLIO_DATA.profile.subHeadline}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-3 text-sm font-semibold shadow-sm hover:opacity-90 transition-all"
              >
                <span>View Case Studies</span>
                <ArrowDown className="h-4 w-4" />
              </a>

              <button
                onClick={() => setActiveMode("one-pager")}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 text-zinc-900 dark:text-zinc-100 px-5 py-3 text-sm font-semibold hover:border-indigo-500 dark:hover:border-indigo-500 transition-all"
              >
                <FileText className="h-4 w-4 text-indigo-500" />
                <span>Download CV / One-Pager</span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={PORTFOLIO_DATA.profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-700 transition-all"
                >
                  <Linkedin className="h-4 w-4 text-indigo-500" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.links.email}
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-700 transition-all"
                >
                  <Mail className="h-4 w-4 text-indigo-500" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Key Metrics Bar (4 Badges) */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {PORTFOLIO_DATA.metricsBar.map((badge) => (
                <div
                  key={badge.value}
                  className="group relative rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-sm p-5 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">
                      {badge.tag}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-indigo-500 transition-colors" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {badge.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
                    {badge.label}
                  </div>
                  <p className="mt-1.5 text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {badge.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 2. WHAT I BRING TO THE TABLE (THE 3 PILLARS) */}
          <section
            id="pillars"
            className="py-16 sm:py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 scroll-mt-16"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
                  01 // Core Value Proposition
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  What I Bring to the Table (The 3 Pillars)
                </h2>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md">
                Combining P&amp;L commercial discipline, multi-model systems architecture, and consumer-grade PLG adoption inside the enterprise.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {PORTFOLIO_DATA.pillars.map((pillar, idx) => {
                const IconComponent =
                  idx === 0 ? TrendingUp : idx === 1 ? Cpu : Layers;
                return (
                  <div
                    key={pillar.id}
                    className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/80 dark:bg-zinc-900/40 p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition-all"
                  >
                    <div>
                      {/* Pillar Header */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                          PILLAR {pillar.number}
                        </span>
                        <div className="h-9 w-9 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                          <IconComponent className="h-4 w-4 text-indigo-500" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-xs font-mono text-indigo-600 dark:text-indigo-400">
                        {pillar.subtitle}
                      </p>
                      <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {pillar.description}
                      </p>

                      {/* Detailed Sub-Bullets */}
                      <div className="mt-6 space-y-4 border-t border-zinc-200/70 dark:border-zinc-800/80 pt-5">
                        {pillar.highlights.map((item) => (
                          <div key={item.title} className="group">
                            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                              <ChevronRight className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
                              <span>{item.title}</span>
                            </div>
                            <p className="mt-1 pl-5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                              {item.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pillar Footer Tags */}
                    <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-wrap gap-1.5">
                      {pillar.metrics.map((m) => (
                        <span
                          key={m}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-800"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 3. SELECTED CASE STUDIES */}
          <section
            id="case-studies"
            className="py-16 sm:py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 scroll-mt-16"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
                  02 // Proven Execution at Scale
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Selected Case Studies
                </h2>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md">
                Deep-dive architectural breakdowns across Enterprise AI Platforms, $4.4B Post-Merger Consolidation, and Real-Time Air Defense C2.
              </p>
            </div>

            <div className="space-y-8">
              {PORTFOLIO_DATA.caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/85 dark:bg-zinc-900/40 overflow-hidden shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
                >
                  {/* Top Bar */}
                  <div className="px-6 py-4 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/60 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-zinc-900 dark:bg-white text-white dark:text-zinc-900">
                        CASE STUDY {study.number}
                      </span>
                      <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                        {study.organization}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                      <Zap className="h-3.5 w-3.5" />
                      <span>{study.scaleBadge}</span>
                    </div>
                  </div>

                  {/* Main Body */}
                  <div className="p-6 sm:p-8">
                    <div className="max-w-3xl">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        {study.title}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                        {study.subtitle}
                      </p>
                    </div>

                    {/* Key Metrics Row */}
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {study.keyMetrics.map((km) => (
                        <div
                          key={km.label}
                          className="rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-zinc-950/60 p-3.5"
                        >
                          <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                            {km.label}
                          </div>
                          <div className="mt-0.5 text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100">
                            {km.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Problem / Strategy / Solution Grid */}
                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
                      <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 p-5">
                        <div className="text-xs font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 font-semibold mb-2">
                          01. The Problem
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          {study.problem}
                        </p>
                      </div>

                      <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 p-5">
                        <div className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold mb-2">
                          02. Strategy &amp; Lean MVP
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          {study.strategy}
                        </p>
                      </div>

                      <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 p-5">
                        <div className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
                          03. Solution &amp; UX Execution
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Optional Interactive Architecture Blueprint for Case Study 01 (U-AI Workspace) */}
                    {index === 0 && study.architectureHighlights && (
                      <div className="mt-6 rounded-xl border border-indigo-500/20 bg-indigo-500/[0.03] dark:bg-indigo-950/15 p-5">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                            <Terminal className="h-4 w-4" />
                            <span>U-AI WORKSPACE — SYSTEM ARCHITECTURE BLUEPRINT</span>
                          </div>
                          <span className="text-[11px] font-mono text-zinc-500">
                            Multi-Cloud + Semantic RAG
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {study.architectureHighlights.map((layer, lIdx) => {
                            const LayerIcon =
                              lIdx === 0
                                ? GitBranch
                                : lIdx === 1
                                ? Cpu
                                : lIdx === 2
                                ? Shield
                                : Database;
                            return (
                              <div
                                key={lIdx}
                                className="flex items-start gap-2.5 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/70 p-3 text-xs text-zinc-700 dark:text-zinc-300"
                              >
                                <LayerIcon className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{layer}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Impact Outcomes */}
                    <div className="mt-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
                      <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                        Measurable Business &amp; Technical Impact
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {study.impact.map((point, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
                          >
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. THOUGHT LEADERSHIP (PUBLISHED ARTICLES & INSIGHTS) */}
          <section
            id="thought-leadership"
            className="py-16 sm:py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 scroll-mt-16"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
                  03 // Published Articles &amp; Product Playbooks
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Thought Leadership
                </h2>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md">
                Field notes on enterprise AI moats, token economics, and scaling internal platforms with a P&amp;L mindset.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PORTFOLIO_DATA.thoughtLeadership.map((article) => (
                <article
                  key={article.id}
                  className="group rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/80 dark:bg-zinc-900/40 p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-4">
                      <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 font-semibold">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {article.subtitle}
                    </p>

                    <div className="mt-5 pt-5 border-t border-zinc-200/70 dark:border-zinc-800/70 space-y-2.5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                        Key Executive Takeaways:
                      </div>
                      {article.keyTakeaways.map((takeaway, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed"
                        >
                          <span className="text-indigo-500 font-bold">→</span>
                          <span>{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>Read Executive Synthesis</span>
                    </button>
                    <ExternalLink className="h-3.5 w-3.5 text-zinc-400 group-hover:text-indigo-500 transition-colors" />
                  </div>
                </article>
              ))}
            </div>

            {/* Article Reader Modal */}
            {selectedArticle && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                <div className="max-w-2xl w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
                    <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                      {selectedArticle.category} • {selectedArticle.readTime}
                    </span>
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    >
                      ESC / Close
                    </button>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-white">
                    {selectedArticle.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    By Tom Deutsch — Senior Product Manager &amp; AI Systems Architect
                  </p>
                  <div className="mt-6 space-y-4 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {selectedArticle.fullExcerpt.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 p-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                      Core Architecture Principles
                    </div>
                    <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
                      {selectedArticle.keyTakeaways.map((k, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{k}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* 5. FOOTER / EXECUTIVE CTA */}
          <footer className="pt-16 pb-8">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 mb-2">
                  <Lock className="h-3.5 w-3.5" />
                  <span>READY FOR HIGH-SCALE AI &amp; PRODUCT LEADERSHIP</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Let&apos;s Architect What&apos;s Next.
                </h2>
                <p className="mt-2 text-sm text-zinc-400 max-w-xl">
                  Whether scaling an enterprise AI platform, governing token economics across multi-cloud stacks, or leading complex post-merger product transformations—let&apos;s connect.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={PORTFOLIO_DATA.profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white text-zinc-900 px-4 py-2.5 text-xs sm:text-sm font-semibold hover:bg-zinc-200 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-indigo-600" />
                  <span>Connect on LinkedIn</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.links.email}
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/80 text-white px-4 py-2.5 text-xs sm:text-sm font-semibold hover:bg-zinc-800 transition-colors"
                >
                  <Mail className="h-4 w-4 text-indigo-400" />
                  <span>Direct Email</span>
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-2">
              <div>
                © {new Date().getFullYear()} Tom Deutsch. Built with Next.js, Tailwind CSS &amp; Google AI Studio API.
              </div>
              <div className="font-mono text-[11px]">
                Cloud Run &amp; Vercel Ready • Standalone Docker Build
              </div>
            </div>
          </footer>
        </main>
      )}

      {/* 5. INTERACTIVE FEATURE: "ASK TOM'S AI" FLOATING WIDGET */}
      <AskTomsAIWidget />
    </div>
  );
}
