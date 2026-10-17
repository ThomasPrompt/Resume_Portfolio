# Tom Deutsch — Personal PM Portfolio & Executive One-Pager

Modern, high-end personal portfolio website and printable Executive One-Pager for **Tom Deutsch** (*Senior Product Manager & AI Systems Architect*). Designed with an elite minimalist aesthetic inspired by **Linear, Vercel, and Stripe**, with full **Dark & Light Mode** support.

## Key Sections Implemented

1. **Hero Section & Key Metrics Bar (4 Badges)**
   - **Headline:** *Architecting Enterprise AI Agents & Platforms That Actually Scale.*
   - **Sub-headline:** Bridging deep technical architectures and commercial ROI—from commanding an Iron Dome system to scaling the U-AI Workspace for ~5,000 active users at Unity.
   - **Metrics Bar:** `8+ Years`, `~5,000 MAU`, `Full-Spectrum AI Stack (AWS, GCP, Azure, Anthropic, LiteLLM)`, and `Major (Res.) IAF Air Defense Battery Commander`.
   - **CTAs:** `[View Case Studies ↓]`, `[Download CV]`, and `[LinkedIn / Email]` (with one-click email copy).

2. **What I Bring to the Table (The 3 Pillars)**
   - **Pillar 01 — Commercial AI & "Build vs. Buy" Strategy:** Token Economics & P&L mindset, defensible proprietary data moats, and ruthless MVP scoping.
   - **Pillar 02 — Technical Depth: Agentic Systems & Architecture:** Context-aware AI (Semantic RAG, entity graphs, multi-model routing), trust and guardrails (hallucination control and proactive fallbacks).
   - **Pillar 03 — Product-Led Growth (PLG) & Zero-Friction UX:** Treating internal/enterprise users as paying customers, omnichannel execution (Web and Slack), and dual-experience architecture (casual users vs. advanced technical power users).

3. **Selected Case Studies**
   - **Case Study 01:** *U-AI Workspace (Enterprise AI Operating System at Unity)* — Scale (~5,000 MAU), Problem, Strategy & Lean MVP, Solution & Dual-UX, and Impact.
   - **Case Study 02:** *Post-Merger Infrastructure & System Consolidation (Unity & ironSource $4.4B Merger)* — Zero-downtime migration hierarchy across Finance, HR, Procurement, and IT.
   - **Case Study 03:** *System Engineer For Mission-Critical Command & Control (C2) Platforms (Elbit Systems, mPrest & Israeli Air Force)* — Real-time, low-cognitive-load C2 and Iron Dome interfaces.

4. **Thought Leadership (Published Articles & Insights)**
   - *Building the Enterprise AI Workspace*
   - *Why Product Managers Must Master Token Economics*

5. **Interactive Feature: "Ask Tom's AI" Widget + Printable Executive One-Pager**
   - Floating chat widget connected to `/api/chat` (Google AI Studio `gemini-2.0-flash` API endpoint + built-in portfolio RAG knowledge base fallback) and an embedded widget snippet viewer.

---

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

---

## Deployment

### Option A: Google Cloud Run (GCP)

This repository includes a multi-stage production `Dockerfile` (using Next.js `output: "standalone"` on port `8080`) and `cloudbuild.yaml`.

```bash
gcloud run deploy tom-deutsch-portfolio \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars="GOOGLE_AI_STUDIO_API_KEY=your_key_here"
```

### Option B: Vercel

```bash
npx vercel --prod
```
