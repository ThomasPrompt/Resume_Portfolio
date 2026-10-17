"use client";

import React from "react";
import { X, Printer, Linkedin, Mail, Shield, Cpu, Layers } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface OnePagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OnePagerModal({ isOpen, onClose }: OnePagerModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 text-zinc-100 shadow-2xl print:max-h-none print:border-none print:bg-white print:text-black print:p-0">
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-zinc-800/80 print:hidden">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Executive One-Pager & CV Summary
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100 hover:bg-white px-3 py-1.5 text-xs font-medium text-zinc-950 transition-colors"
            >
              <Printer className="h-3.5 w-3.5" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="border-b border-zinc-800/80 pb-6 mb-6 print:border-zinc-300">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white print:text-black">
            {PORTFOLIO_DATA.hero.name}
          </h2>
          <p className="mt-1 text-sm sm:text-base font-medium text-indigo-400 print:text-indigo-700">
            {PORTFOLIO_DATA.hero.title}
          </p>
          <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 print:text-zinc-700 leading-relaxed">
            {PORTFOLIO_DATA.hero.valueProposition}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-zinc-400 print:text-zinc-700">
            <a
              href={PORTFOLIO_DATA.hero.ctas.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-200"
            >
              <Linkedin className="h-3.5 w-3.5 text-indigo-400" />
              linkedin.com/in/tom-deutsch-7a8230b4
            </a>
            <a
              href={PORTFOLIO_DATA.hero.ctas.email}
              className="inline-flex items-center gap-1.5 hover:text-zinc-200"
            >
              <Mail className="h-3.5 w-3.5 text-indigo-400" />
              {PORTFOLIO_DATA.hero.ctas.emailAddress}
            </a>
          </div>
        </div>

        <div className="space-y-4">
          {PORTFOLIO_DATA.pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 print:border-zinc-300 print:bg-transparent"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  {idx === 0 && <Cpu className="h-4 w-4 text-indigo-400" />}
                  {idx === 1 && <Layers className="h-4 w-4 text-cyan-400" />}
                  {idx === 2 && <Shield className="h-4 w-4 text-emerald-400" />}
                  <h3 className="text-sm font-semibold text-zinc-100 print:text-black">
                    {pillar.title}
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">
                  {pillar.subtitle}
                </span>
              </div>

              <ul className="space-y-1 text-xs text-zinc-300 print:text-zinc-800">
                {pillar.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-0.5">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
