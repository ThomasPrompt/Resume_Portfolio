"use client";

import React from "react";
import {
  X,
  Printer,
  Linkedin,
  Mail,
  Shield,
  Cpu,
  Layers,
  Download,
  BookOpen,
  Briefcase,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface OnePagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OnePagerModal({ isOpen, onClose }: OnePagerModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 sm:p-8 text-zinc-900 dark:text-zinc-100 shadow-2xl print:max-h-none print:border-none print:bg-white print:text-black print:p-0">
        {/* Top Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-zinc-200 dark:border-zinc-800/80 print:hidden">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Executive One-Pager • Tom Deutsch
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={PORTFOLIO_DATA.hero.ctas.cvHref}
              download={PORTFOLIO_DATA.hero.ctas.cvFileName}
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-900 dark:text-zinc-100 transition-colors"
            >
              <Download className="h-3.5 w-3.5 text-indigo-500" />
              Download CV (PDF)
            </a>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white px-3 py-1.5 text-xs font-medium text-white dark:text-zinc-950 transition-colors"
            >
              <Printer className="h-3.5 w-3.5" />
              Print One-Pager
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="rounded-lg p-1.5 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Executive Header */}
        <div className="border-b border-zinc-200 dark:border-zinc-800/80 pb-6 mb-6 print:border-zinc-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white print:text-black">
                {PORTFOLIO_DATA.hero.name}
              </h2>
              <p className="mt-0.5 text-sm sm:text-base font-medium text-indigo-600 dark:text-indigo-400 print:text-indigo-700">
                {PORTFOLIO_DATA.hero.role}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-700">
              <a
                href={PORTFOLIO_DATA.hero.ctas.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-indigo-500"
              >
                <Linkedin className="h-3.5 w-3.5 text-indigo-500" />
                linkedin.com/in/tom-deutsch-7a8230b4
              </a>
              <a
                href={PORTFOLIO_DATA.hero.ctas.email}
                className="inline-flex items-center gap-1.5 hover:text-indigo-500"
              >
                <Mail className="h-3.5 w-3.5 text-indigo-500" />
                {PORTFOLIO_DATA.hero.ctas.emailAddress}
              </a>
            </div>
          </div>

          <p className="mt-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            {PORTFOLIO_DATA.hero.headline}
          </p>
          <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 print:text-zinc-700 leading-relaxed">
            {PORTFOLIO_DATA.hero.subHeadline}
          </p>

          {/* Metrics Row */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {PORTFOLIO_DATA.hero.metricsBar.map((m) => (
              <div
                key={m.metric}
                className="rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/50 p-2.5"
              >
                <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  {m.metric}
                </div>
                <div className="text-[11px] text-zinc-600 dark:text-zinc-300 leading-snug mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
            What I Bring to the Table (The 3 Pillars)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PORTFOLIO_DATA.pillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 p-3.5 print:border-zinc-300"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  {idx === 0 && <Cpu className="h-4 w-4 text-indigo-500 shrink-0" />}
                  {idx === 1 && <Layers className="h-4 w-4 text-cyan-500 shrink-0" />}
                  {idx === 2 && <Shield className="h-4 w-4 text-emerald-500 shrink-0" />}
                  <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Case Studies */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5 text-indigo-500" />
            Selected Case Studies
          </h3>
          <div className="space-y-3">
            {PORTFOLIO_DATA.caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 p-4 print:border-zinc-300"
              >
                <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 mb-1.5">
                  Case Study {cs.number}: {cs.title}
                </div>
                {cs.sections ? (
                  <ul className="space-y-1 text-[11px] text-zinc-600 dark:text-zinc-300">
                    {cs.sections.map((sec) => (
                      <li key={sec.label}>
                        <strong className="text-zinc-900 dark:text-zinc-100">
                          {sec.label}:
                        </strong>{" "}
                        {sec.content}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {cs.summary}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Thought Leadership */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5 text-indigo-500" />
            Thought Leadership & Published Insights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PORTFOLIO_DATA.thoughtLeadership.map((art) => (
              <div
                key={art.id}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 p-3.5 print:border-zinc-300"
              >
                <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  {art.title}
                </div>
                <p className="mt-1 text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {art.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
