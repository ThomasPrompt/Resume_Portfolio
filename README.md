# Tom Deutsch — Personal PM Portfolio & Executive One-Pager

A modern, high-end personal portfolio website and printable Executive One-Pager for **Tom Deutsch (Senior Product Manager & AI Systems Architect)**, inspired by Linear, Vercel, and Stripe aesthetics.

## Key Features Implemented

1. **Hero Section & Key Metrics Bar**
   - Headline: *"Architecting Enterprise AI Agents & Platforms That Actually Scale."*
   - 4 Executive Badges (`8+ Years Leadership`, `~5,000 MAU on U-AI Workspace`, `Full-Spectrum AI Stack`, `Major (Res.) IAF Battery Commander`).
   - Quick CTAs for Case Studies, Executive One-Pager / Printable PDF CV, LinkedIn, and Email.
2. **The 3 Pillars ("What I Bring to the Table")**
   - Commercial AI & "Build vs. Buy" Strategy (Token Economics, P&L, proprietary data moats)
   - Technical Depth: Agentic Systems & Architecture (Semantic RAG, LiteLLM routing, C2 reliability)
   - Product-Led Growth (PLG) & Zero-Friction UX (Dual-Experience Web/Slack & Advanced Lab)
3. **Selected Case Studies**
   - **01: U-AI Workspace at Unity** (~5,000 active global users, multi-cloud stack, interactive system architecture blueprint)
   - **02: Post-Merger Infrastructure Consolidation** ($4.4B Unity & ironSource merger, zero business downtime)
   - **03: Mission-Critical Command & Control (C2) Platforms** (Elbit Systems & Israeli Air Force Iron Dome operations)
4. **Thought Leadership**
   - *Building the Enterprise AI Workspace* & *Why Product Managers Must Master Token Economics* (with interactive executive synthesis reader modals).
5. **"Ask Tom's AI" Floating Widget**
   - Connected to `/api/chat` (`src/app/api/chat/route.ts`) using Google AI Studio (`GEMINI_API_KEY`) with an automatic built-in Portfolio RAG knowledge base fallback so it works with zero configuration out of the box.
6. **Zero-Dependency Instant Preview**
   - Open `preview.html` directly in any browser for an immediate standalone interactive preview without needing a local build server.

---

## Customizing Links & Content

All profile URLs (LinkedIn, Email, CV), metrics, case studies, and AI system prompts are centralized in a single file:
- `src/data/portfolio.ts`

---

## Local Development (Next.js)

```bash
npm install
cp .env.example .env.local
# Add your GEMINI_API_KEY in .env.local (optional — fallback RAG works automatically)
npm run dev
```

Open `http://localhost:3000`.

---

## Deployment

### Option A: Google Cloud Run (GCP)
The repository includes a multi-stage standalone `Dockerfile` (`PORT=8080`) and `cloudbuild.yaml`.

```bash
gcloud run deploy tom-deutsch-portfolio \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars="GEMINI_API_KEY=your_key_here"
```

### Option B: Vercel
Import the repository into Vercel (or run `vercel --prod`). Set `GEMINI_API_KEY` in Project Environment Variables.
