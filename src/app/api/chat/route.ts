import { NextRequest, NextResponse } from "next/server";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const SYSTEM_INSTRUCTION = `You are "Ask Tom's AI", the interactive AI Portfolio Agent for Tom Deutsch (Senior Product Manager & AI Systems Architect), powered by Google AI Studio.
Your audience includes Hiring Managers, VPs of Product, CTOs, Founders, and Executive Recruiters evaluating Tom's portfolio.

CORE KNOWLEDGE BASE:
1. HERO & EXECUTIVE SUMMARY:
   - Name: Tom Deutsch
   - Role: Senior Product Manager & AI Systems Architect
   - Headline: "Architecting Enterprise AI Agents & Platforms That Actually Scale."
   - Bio: Bridges deep technical architectures and commercial ROI. From commanding an Iron Dome system (Major Res., IAF Air Defense Battery Commander) to scaling the U-AI Workspace for ~5,000 active users at Unity, Tom turns complex technologies into zero-friction products.
   - Key Metrics:
     * 8+ Years | Product & Systems Leadership
     * ~5,000 MAU | Scaled on Enterprise AI Platform (U-AI Workspace)
     * Full-Spectrum AI Stack | AWS (Q, Bedrock), GCP (Vertex, AI Studio), Azure, Anthropic and LiteLLM
     * Major (Res.) | IAF Air Defense Battery Commander
   - Contact: LinkedIn (https://www.linkedin.com/in/tom-deutsch-7a8230b4) | Email (tomdeutsch86@gmail.com) | CV Download (/Tom-Deutsch-CV.pdf)

2. WHAT TOM BRINGS TO THE TABLE (THE 3 PILLARS):
   - Pillar 1 — Commercial AI & "Build vs. Buy" Strategy:
     Token Economics & P&L mindset, defensible proprietary data moats, and ruthless MVP scoping.
   - Pillar 2 — Technical Depth: Agentic Systems & Architecture:
     Context-aware AI (Semantic RAG, entity graphs, multi-model routing), trust and guardrails (hallucination control and proactive fallbacks).
   - Pillar 3 — Product-Led Growth (PLG) & Zero-Friction UX:
     Treating internal/enterprise users as paying customers, omnichannel execution (Web and Slack), and dual-experience architecture (casual users vs. advanced technical power users).

3. SELECTED CASE STUDIES:
   - Case Study 01 — U-AI Workspace (Enterprise AI Operating System at Unity):
     * Scale: ~5,000 active global users (engineers and non-engineers).
     * The Problem: Surging demand for GenAI led to fragmented POCs, security risks, and uncontrolled token burn while external tools lacked internal context.
     * Strategy & Lean MVP: Evaluated the full multi-cloud AI landscape (AWS, GCP, Azure, OpenAI, Anthropic, LiteLLM, etc.) and focused internal R&D strictly on indexing proprietary data moats across corporate repositories (Slack, Confluence, Drive, Zendesk, Gainsight, and more core enterprise systems).
     * Solution & UX: Co-architected a Dual-Experience Platform (zero-friction Slack/Web assistant alongside an "Advanced Lab" for technical power users), dynamic RAG, prompt caching and semantic routing to lightweight SLMs.
     * Impact: Scaled organically to ~5,000 users, eliminated hallucination retry loops, slashed inference costs, and built a secure corporate intelligence moat.
   - Case Study 02 — Post-Merger Infrastructure & System Consolidation (Unity & ironSource $4.4B Merger):
     * Managed redundant internal applications across Finance, HR, Procurement, IT, etc. Established a ruthless migration hierarchy prioritizing revenue-critical pipelines with strict SLAs, completing global consolidation with zero business downtime.
   - Case Study 03 — System Engineer For Mission-Critical Command & Control (C2) Platforms (Elbit Systems, mPrest & Israeli Air Force):
     * Engineered real-time, low-cognitive-load C2 and air defense interfaces (including Iron Dome operations), leading cross-functional integration and engineering collaboration to ensure flawless execution and product success.

4. THOUGHT LEADERSHIP (PUBLISHED ARTICLES & INSIGHTS):
   - "Building the Enterprise AI Workspace": Moving beyond chatbots through clean data alignment, proprietary moats, and dual-user design.
   - "Why Product Managers Must Master Token Economics": Managing unit economics, prompt caching, semantic routing and confidence-score thresholds.

RESPONSE STYLE:
- Be concise, structured, and high-signal (use bullet points and bold highlights).
- Cite specific metrics (~5,000 MAU, $4.4B merger, zero downtime, AWS Bedrock/GCP Vertex/LiteLLM, Iron Dome Major Res.) where relevant.
- Keep responses under 150 words unless asked for a deep dive.`;

function getLocalAnswer(query: string): string {
  const q = query.toLowerCase();

  if (
    q.includes("u-ai") ||
    q.includes("5,000") ||
    q.includes("5000") ||
    q.includes("workspace") ||
    (q.includes("unity") && !q.includes("merger") && !q.includes("4.4"))
  ) {
    return `**Case Study 01: U-AI Workspace (Enterprise AI OS at Unity)**
- **Scale:** Scaled organically to **~5,000 active global users** (engineers & non-engineers).
- **Strategy & Lean MVP:** Evaluated AWS (Q, Bedrock), GCP (Vertex, AI Studio), Azure, OpenAI, Anthropic, and LiteLLM—focusing internal R&D strictly on indexing proprietary data moats (**Slack, Confluence, Drive, Zendesk, Gainsight**).
- **Architecture & UX:** Co-architected a **Dual-Experience Platform** (zero-friction Slack/Web assistant + "Advanced Lab" for power users) powered by dynamic RAG, prompt caching, and semantic routing to lightweight SLMs.
- **Impact:** Eliminated hallucination retry loops, slashed inference costs, and established a secure corporate intelligence moat.`;
  }

  if (
    q.includes("token") ||
    q.includes("economic") ||
    q.includes("build vs") ||
    q.includes("buy") ||
    q.includes("cost") ||
    q.includes("pillar") ||
    q.includes("thought") ||
    q.includes("article")
  ) {
    return `**Commercial AI, Token Economics & "Build vs. Buy" Strategy:**
- **Token Economics & P&L Mindset:** Tom manages unit economics from Day 1 via **prompt caching**, **semantic routing to lightweight SLMs**, and strict **confidence-score thresholds** that prevent costly hallucination retry loops.
- **Ruthless Build vs. Buy:** Rather than rebuilding commoditized foundation capabilities, Tom leverages multi-cloud gateways (**AWS Bedrock, GCP Vertex/AI Studio, Azure, Anthropic, LiteLLM**) and focuses internal engineering on **defensible proprietary data moats**.
- **Thought Leadership:** Featured in his articles *"Why Product Managers Must Master Token Economics"* and *"Building the Enterprise AI Workspace"*.`;
  }

  if (
    q.includes("merger") ||
    q.includes("ironsource") ||
    q.includes("4.4") ||
    q.includes("consolidation") ||
    q.includes("migration")
  ) {
    return `**Case Study 02: Unity & ironSource $4.4B Post-Merger Consolidation**
- **Challenge:** Redundant internal enterprise applications spanning Finance, HR, Procurement, and IT following the **$4.4B merger**.
- **Execution:** Established a ruthless migration hierarchy prioritizing **revenue-critical pipelines** governed by strict SLAs.
- **Impact:** Completed global multi-system consolidation with **zero business downtime**.`;
  }

  if (
    q.includes("c2") ||
    q.includes("command") ||
    q.includes("iron dome") ||
    q.includes("elbit") ||
    q.includes("mprest") ||
    q.includes("iaf") ||
    q.includes("major") ||
    q.includes("defense")
  ) {
    return `**Case Study 03: Mission-Critical C2 Platforms & IAF Command**
- **System Engineering (Elbit Systems, mPrest & IAF):** Engineered real-time, **low-cognitive-load Command & Control (C2)** and air defense interfaces (including **Iron Dome** operations), leading cross-functional integration for zero-error execution.
- **Executive Leadership:** As a **Major (Res.) & IAF Air Defense Battery Commander**, Tom brings calm, high-stakes operational decision-making and cross-functional alignment to enterprise product leadership.`;
  }

  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("linkedin") ||
    q.includes("hire") ||
    q.includes("cv") ||
    q.includes("resume")
  ) {
    return `**Connect with Tom Deutsch:**
- **LinkedIn:** https://www.linkedin.com/in/tom-deutsch-7a8230b4
- **Email:** tomdeutsch86@gmail.com
- **Download CV:** Click **"Download CV"** in the top navigation or hero section to get \`Tom-Deutsch-CV.pdf\`, or open the **Executive One-Pager** view for a printable summary.`;
  }

  return `**Tom Deutsch — Senior Product Manager & AI Systems Architect**
- **Enterprise AI at Scale:** Co-architected **U-AI Workspace at Unity (~5,000 MAU)** across AWS (Q, Bedrock), GCP (Vertex, AI Studio), Azure, Anthropic & LiteLLM.
- **3 Core Pillars:** (1) Commercial AI & "Build vs. Buy" Token Economics, (2) Agentic Systems & Semantic RAG Architecture, (3) PLG & Dual-Experience UX (Slack/Web + Advanced Lab).
- **Proven Track Record:** Led **$4.4B Unity–ironSource** post-merger consolidation with zero downtime, and engineered **Iron Dome C2** interfaces (**Elbit, mPrest, IAF Major Res.**).`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const message: string = body?.message || "";
    const history: { role: string; content: string }[] = body?.history || [];
    const customEndpoint: string | undefined =
      body?.endpoint || process.env.GOOGLE_AI_STUDIO_ENDPOINT;

    if (!message.trim()) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey =
      process.env.GOOGLE_AI_STUDIO_API_KEY ||
      process.env.GEMINI_API_KEY ||
      process.env.NEXT_PUBLIC_GOOGLE_AI_STUDIO_API_KEY;

    if (apiKey || customEndpoint) {
      try {
        const contents = [
          ...history.slice(-6).map((msg) => ({
            role: msg.role === "assistant" ? "model" : "user",
            parts: [{ text: msg.content }],
          })),
          {
            role: "user",
            parts: [{ text: message }],
          },
        ];

        const targetUrl =
          customEndpoint ||
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        const response = await fetch(targetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: SYSTEM_INSTRUCTION }],
            },
            contents,
            generationConfig: {
              temperature: 0.25,
              maxOutputTokens: 380,
            },
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const reply =
            data?.candidates?.[0]?.content?.parts?.[0]?.text ||
            data?.reply ||
            getLocalAnswer(message);
          return NextResponse.json({
            reply,
            mode: "google-ai-studio",
          });
        }
      } catch (err) {
        console.warn("Google AI Studio endpoint fallback triggered:", err);
      }
    }

    return NextResponse.json({
      reply: getLocalAnswer(message),
      mode: "embedded-knowledge-graph",
      profile: PORTFOLIO_DATA.hero.name,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process request" },
      { status: 500 }
    );
  }
}
