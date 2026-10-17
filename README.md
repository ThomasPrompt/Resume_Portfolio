# Tom Deutsch — Executive One-Pager & Portfolio (Next.js App Router)

A minimalist, dark-mode (Vercel / Linear aesthetic) Executive One-Pager & Portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Core Architecture & Sections

1. **Hero Section**
   - **Name:** Tom Deutsch
   - **Title:** Senior Product Manager & AI Systems Architect
   - **Value Proposition:** Architecting autonomous AI agents, enterprise LLM platforms, and high-scale distributed SaaS ecosystems from zero-to-one to global production.
   - **Action CTAs:** LinkedIn (`https://www.linkedin.com/in/tom-deutsch-7a8230b4`), Direct Download CV (`/Tom-Deutsch-CV.pdf`), and Email.

2. **Three Balanced Core Pillars (Single-Screen 10-Second Scan)**
   - **01 // AI Product & High-Scale SaaS:** Enterprise AI agents, multi-LLM platforms (~5,000 MAU), RAG, and high-scale SaaS workflows.
   - **02 // Enterprise & Real-Time Systems:** Product & system architecture across **Elbit Systems** (operational platforms) and **mPrest** (distributed real-time C2).
   - **03 // Executive Command & Execution:** **IAF Major (Res.) & Iron Dome Battery Commander** leading 100+ personnel in high-stakes real-time execution.

3. **Interactive AI Chat Widget (`AskTomsAIWidget.tsx` + `/api/chat`)**
   - Floating corner AI assistant allowing recruiters and executives to interactively query Tom's background across AI/SaaS, C2/Defense (mPrest & Elbit), and IAF command leadership.
   - Works out-of-the-box via its built-in domain knowledge engine, or connects to live Gemini 2.0 Flash when `GEMINI_API_KEY` is set.

4. **Vercel Hobby Tier Ready (`vercel.json`)**
   - Zero multi-region restrictions (`"regions"` is intentionally omitted) for frictionless deployment on Vercel's free Hobby tier.

## Local Development

```bash
npm install
npm run dev
```
