# Tom Deutsch — Executive One-Pager & Portfolio (Next.js App Router)

A minimalist, dark-mode (Vercel / Linear aesthetic) Executive One-Pager & Portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Core Architecture & Sections

1. **Hero Section**
   - **Name:** Tom Deutsch
   - **Title:** Senior Product Manager & AI Systems Architect
   - **Value Proposition:** Expert in architecting enterprise AI platforms, autonomous agents, and mission-critical systems from inception to scale.
   - **Action CTAs:** View Case Studies, Download CV / One-Pager (interactive printable modal), LinkedIn (`https://www.linkedin.com/in/tom-deutsch`), and Email.

2. **Core Experience & Expertise (Strictly Separated Domains)**
   - **01 // AI & SaaS Product Leadership:** Enterprise AI platforms, autonomous agents, LLM integrations, workflow automation, and distributed systems at scale.
   - **02 // Enterprise Platforms & Defense Tech (Critical Systems):**
     - **Elbit Systems:** Complex technical platforms, software architectures, and data-intensive operational systems.
     - **mPrest:** Product management and software architecture for distributed Command & Control (C2) systems and real-time mission-critical solutions under extreme conditions.
   - **03 // Command & Leadership (IAF - Major Res.):**
     - Active and reserve service as a **Major (רב-סרן)** and **Iron Dome Battery Commander**—high-stakes decision-making under extreme pressure, large-scale team management, and operating complex real-time systems.

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
