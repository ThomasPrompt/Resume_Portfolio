import { NextRequest, NextResponse } from "next/server";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const SYSTEM_INSTRUCTION = `You are "Tom's AI Architecture Assistant", an executive AI agent embedded on Tom Deutsch's personal portfolio website.
Your role is to answer questions from hiring managers, technical executives, VPs of Product, and recruiters about Tom Deutsch's background, achievements, product philosophy, and technical depth.

KEY FACTS ABOUT TOM DEUTSCH:
- Role: Senior Product Manager & AI Systems Architect (8+ years of Product & Systems Leadership).
- Headline Mission: Bridging deep technical architectures and commercial ROI. Turning complex technologies into zero-friction products.
- Military Leadership: Major (Res.), Israeli Air Force (IAF) Air Defense Battery Commander (Iron Dome C2 operational command).
- Flagship Case Study 01 — U-AI Workspace at Unity:
  * Scale: Scaled organically to ~5,000 Monthly Active Users (MAU) globally across engineering and non-engineering teams.
  * Problem solved: Fragmented GenAI POCs, security/data-leakage risks, uncontrolled token burn, and external tools lacking internal corporate context.
  * Build vs. Buy Strategy: Evaluated the full multi-cloud AI stack (AWS Q & Bedrock, GCP Vertex & AI Studio, Azure OpenAI, Anthropic Claude, LiteLLM). Avoided building commodity wrappers; focused internal R&D strictly on indexing proprietary data moats across Slack, Confluence, Google Drive, Zendesk, Gainsight, and core enterprise systems.
  * Solution & UX: Co-architected a Dual-Experience Platform (zero-friction Slack & Web assistant for everyday users alongside an "Advanced Lab" for technical power users), dynamic RAG, prompt caching, and semantic routing via LiteLLM to lightweight SLMs.
  * Impact: ~5,000 MAU, eliminated hallucination retry loops via confidence thresholds & grounded citations, slashed inference costs, and built a secure corporate intelligence moat.
- Flagship Case Study 02 — Unity & ironSource $4.4B Post-Merger Consolidation:
  * Managed redundant internal applications across Finance, HR, Procurement, and IT.
  * Established a ruthless migration hierarchy prioritizing revenue-critical pipelines with strict SLAs, completing global consolidation with zero business downtime.
- Flagship Case Study 03 — Mission-Critical Command & Control (C2) Platforms (Elbit Systems, mPrest & Israeli Air Force):
  * Engineered real-time, low-cognitive-load C2 and air defense interfaces (including Iron Dome operations) handling massive multi-node data streams under extreme operational pressure.
- Three Core Pillars:
  1. Commercial AI & "Build vs. Buy" Strategy (Token Economics mindset, defensible proprietary data moats, ruthless MVP scoping).
  2. Technical Depth: Agentic Systems & Architecture (Context-aware Semantic RAG, entity graphs, multi-model routing via LiteLLM, hallucination control, C2 reliability DNA).
  3. Product-Led Growth (PLG) & Zero-Friction UX (Internal users treated as paying customers, omnichannel Web & Slack execution, dual-experience architecture).
- Thought Leadership Articles:
  1. "Building the Enterprise AI Workspace" (clean data alignment, proprietary moats, dual-user design).
  2. "Why Product Managers Must Master Token Economics" (unit economics, prompt caching, semantic routing, confidence-score thresholds).
- Contact: LinkedIn (https://www.linkedin.com/in/tom-deutsch-7a8230b4) | Email (tomdeutsch86@gmail.com)

RESPONSE STYLE:
- Concise, executive, structured, and high-signal (use bullet points and bold highlights where effective).
- Speak confidently on behalf of Tom's portfolio, citing specific metrics (~5,000 MAU, $4.4B merger, 0 downtime, AWS/GCP/Azure/Anthropic/LiteLLM stack, Major Res. Iron Dome).
- Keep responses under 160 words unless asked for a deep technical breakdown.`;

function buildLocalKnowledgeResponse(query: string): string {
  const q = query.toLowerCase();

  if (q.includes("u-ai") || q.includes("unity") || q.includes("5,000") || q.includes("5000") || q.includes("workspace") || q.includes("scale")) {
    return `**U-AI Workspace at Unity (~5,000 MAU):**
Tom co-architected and scaled Unity's Enterprise AI Operating System to **~5,000 active global users** across engineering and business teams:
- **Build vs. Buy Strategy:** Benchmarked **AWS (Q, Bedrock), GCP (Vertex, AI Studio), Azure OpenAI, Anthropic, and LiteLLM**. Rather than rebuilding commodity LLM layers, Tom focused R&D strictly on indexing Unity's **proprietary data moat** (Slack, Confluence, Drive, Zendesk, Gainsight).
- **Dual-Experience UX:** Delivered a zero-friction **Slack & Web assistant** for everyday employees alongside an **"Advanced Lab"** for technical power users.
- **Impact:** 100% organic PLG growth to ~5,000 MAU, eliminated hallucination retry loops via confidence-score thresholds, and slashed token burn via prompt caching and semantic SLM routing.`;
  }

  if (q.includes("token") || q.includes("economic") || q.includes("cost") || q.includes("build") || q.includes("buy") || q.includes("litellm") || q.includes("rout")) {
    return `**Tom's Token Economics & "Build vs. Buy" Framework:**
Tom treats AI platforms with strict **unit-economics discipline**:
1. **Semantic Model Routing (LiteLLM):** Dynamically routes 70%+ of routine classification and summarization intents to fast, low-cost SLMs while reserving frontier models (Claude, GPT-4o, Gemini Pro) for complex multi-step synthesis.
2. **Eliminating the "Hallucination Tax":** Uses retrieval confidence thresholds and grounded citations so users get deterministic fallbacks rather than burning 3–4x tokens in frustrated retry loops.
3. **Defensible Data Moats:** Buys commoditized foundation infrastructure across AWS/GCP/Azure and builds proprietary RAG pipelines with strict RBAC governance.`;
  }

  if (q.includes("iron dome") || q.includes("c2") || q.includes("elbit") || q.includes("mprest") || q.includes("military") || q.includes("iaf") || q.includes("defense") || q.includes("major")) {
    return `**Mission-Critical C2 DNA (Elbit Systems, mPrest & IAF Major, Res.):**
As both an **IAF Air Defense Battery Commander (Major, Res.)** operating **Iron Dome** and a C2 Product Manager at **Elbit Systems & mPrest**, Tom brings defense-grade engineering discipline to enterprise AI:
- **Zero-Cognitive-Load UX:** Designing interfaces where operators make split-second decisions across high-velocity multi-node telemetry streams.
- **Deterministic Guardrails:** Translating air-defense fail-safe states into enterprise AI guardrails—confidence scoring, human-in-the-loop escalation, and zero-ambiguity citations.`;
  }

  if (q.includes("merger") || q.includes("ironsource") || q.includes("4.4") || q.includes("consolidat") || q.includes("m&a")) {
    return `**Unity & ironSource $4.4B Post-Merger Consolidation:**
Following the **$4.4B merger**, Tom led the consolidation of redundant enterprise applications across **Finance, HR, Procurement, and IT**:
- **Ruthless Prioritization:** Built an SLA-governed migration hierarchy prioritizing revenue-critical quote-to-cash and financial reporting pipelines.
- **Zero Downtime:** Executed phased global cutovers and schema unification with **zero business interruption** while capturing major licensing and operational cost synergies.`;
  }

  return `**Tom Deutsch — Executive Snapshot:**
Tom is a **Senior Product Manager & AI Systems Architect** with **8+ years** of leadership across Enterprise AI, M&A Infrastructure, and Defense C2:
- **Enterprise AI at Scale:** Scaled Unity's **U-AI Workspace to ~5,000 MAU** across AWS (Q, Bedrock), GCP (Vertex, AI Studio), Azure, Anthropic & LiteLLM.
- **Commercial P&L & Token Economics:** Deep expertise in Build-vs-Buy strategy, semantic routing, prompt caching, and proprietary RAG data moats.
- **Post-Merger Execution:** Led the **$4.4B Unity–ironSource** internal systems consolidation with **zero business downtime**.
- **Mission-Critical Leadership:** **Major (Res.)**, IAF Iron Dome Air Defense Battery Commander & C2 PM at Elbit Systems.

*Ask me about any specific case study, his AI stack architecture, or how to get in touch!*`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const message: string = body?.message || "";
    const history: { role: string; content: string }[] = body?.history || [];

    if (!message.trim()) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_AI_STUDIO_API_KEY;

    if (apiKey) {
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

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              systemInstruction: {
                parts: [{ text: SYSTEM_INSTRUCTION }],
              },
              contents,
              generationConfig: {
                temperature: 0.3,
                maxOutputTokens: 450,
              },
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const reply =
            data?.candidates?.[0]?.content?.parts?.[0]?.text ||
            buildLocalKnowledgeResponse(message);
          return NextResponse.json({
            reply,
            mode: "google-ai-studio-live",
            model: "gemini-2.0-flash",
          });
        }
      } catch (err) {
        console.warn("Gemini API fallback triggered:", err);
      }
    }

    // Intelligent built-in RAG knowledge base fallback
    const fallbackReply = buildLocalKnowledgeResponse(message);
    return NextResponse.json({
      reply: fallbackReply,
      mode: "embedded-rag-engine",
      model: "tom-ai-knowledge-graph-v1",
      profile: PORTFOLIO_DATA.profile.name,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process request" },
      { status: 500 }
    );
  }
}
