import { NextRequest, NextResponse } from "next/server";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const SYSTEM_INSTRUCTION = `You are Tom Deutsch's Interactive AI Portfolio Assistant embedded on his Executive One-Pager & Portfolio Website.
Your role is to give recruiters, hiring executives, VPs of Product, and founders clear, concise, high-signal answers about Tom's background, product leadership, and systems architecture expertise.

STRICT DOMAIN SEPARATION & CORE FACTS:
1. PROFILE:
   - Name: Tom Deutsch
   - Title: Senior Product Manager & AI Systems Architect
   - Value Proposition: Expert in architecting enterprise AI platforms, autonomous agents, and mission-critical systems from inception to scale.
   - LinkedIn: https://www.linkedin.com/in/tom-deutsch-7a8230b4
   - Email: tomdeutsch86@gmail.com

2. DOMAIN 1 — AI & SaaS Product Leadership:
   - Focus: Building enterprise AI platforms, autonomous AI agents, LLM integrations, workflow automation, and distributed SaaS systems at scale.
   - Key Achievements: Co-architected and scaled an Enterprise AI Platform (U-AI Workspace at Unity) to ~5,000 active global users; multi-cloud LLM orchestration (AWS Bedrock, GCP Vertex AI, Azure OpenAI, Anthropic, LiteLLM), semantic routing, token economics, and permission-aware RAG; led $4.4B post-merger enterprise stack consolidation with zero downtime.

3. DOMAIN 2 — Enterprise Platforms & Defense Tech (Critical Systems):
   - Elbit Systems: Leading complex technical platforms, software architectures, and data-intensive operational systems from concept to field scale.
   - mPrest: A critical and rigorous tenure leading product management and architecture for complex Command & Control (C2) distributed software systems and real-time mission-critical solutions under extreme conditions (sub-second latency, multi-node telemetry, zero-failure tolerance).

4. DOMAIN 3 — Command & Leadership (IAF - Major Res.):
   - Active and reserve service as a Major (רב-סרן) and Iron Dome Battery Commander in the Israeli Air Force (IAF).
   - Core Leadership Asset: High-stakes decision-making under extreme pressure, large-scale team management (100+ personnel), and operating complex real-time systems.

RESPONSE GUIDELINES:
- Keep answers concise, scannable, and executive-ready (use short bullet points and bold labels).
- Keep the 3 domains cleanly articulated without muddling them.
- Keep responses under 140 words unless a deeper breakdown is requested.`;

function getLocalAnswer(query: string): string {
  const q = query.toLowerCase();

  if (
    q.includes("mprest") ||
    q.includes("elbit") ||
    q.includes("c2") ||
    q.includes("command & control") ||
    q.includes("command and control") ||
    q.includes("defense") ||
    q.includes("critical")
  ) {
    return `**Enterprise Platforms & Real-Time Systems:**
- **Elbit Systems:** Tom directed product strategy and modular software architectures for large-scale, data-intensive operational platforms.
- **mPrest:** Tom led product management and software architecture for distributed **Command & Control (C2)** systems operating at sub-second latency under mission-critical conditions.`;
  }

  if (
    q.includes("iaf") ||
    q.includes("major") ||
    q.includes("iron dome") ||
    q.includes("military") ||
    q.includes("battery") ||
    q.includes("command") ||
    q.includes("רב-סרן")
  ) {
    return `**Executive Command & Leadership — IAF Major (Res.):**
Tom serves as a **Major (רב-סרן)** and **Iron Dome Battery Commander**:
- **High-Stakes Execution:** Split-second operational judgment and accountability under zero-error conditions.
- **Large-Scale Leadership:** Commanding and aligning 100+ officers, engineers, and operators across distributed real-time units.`;
  }

  if (
    q.includes("ai") ||
    q.includes("saas") ||
    q.includes("llm") ||
    q.includes("agent") ||
    q.includes("unity") ||
    q.includes("rag") ||
    q.includes("product")
  ) {
    return `**AI Product & High-Scale SaaS Leadership:**
Tom specializes in architecting **autonomous AI agents, enterprise LLM platforms, and high-scale SaaS systems**:
- **Enterprise AI at Scale:** Scaled a multi-LLM agent platform to **~5,000 MAU** (Bedrock, Vertex AI, OpenAI, Anthropic, LiteLLM).
- **Agentic Workflows & RAG:** Engineered permission-aware RAG, semantic routing, and automated enterprise SaaS workflows across a $4.4B post-merger stack.`;
  }

  if (q.includes("contact") || q.includes("email") || q.includes("linkedin") || q.includes("hire") || q.includes("reach") || q.includes("cv") || q.includes("resume")) {
    return `**Connect with Tom Deutsch:**
- **LinkedIn:** https://www.linkedin.com/in/tom-deutsch-7a8230b4
- **Email:** tomdeutsch86@gmail.com
- **Resume / CV:** Click the **"Download CV"** button in the header or hero section to download \`Tom-Deutsch-CV.pdf\`.`;
  }

  return `**Tom Deutsch — Executive Overview:**
Tom is a **Senior Product Manager & AI Systems Architect** whose expertise spans three cleanly defined pillars:
- **1. AI & SaaS Product Leadership:** Enterprise AI platforms (~5,000 MAU), autonomous agents, multi-LLM orchestration, and workflow automation at scale.
- **2. Enterprise Platforms & Defense Tech:** Leading complex operational platforms at **Elbit Systems** and distributed real-time Command & Control (C2) architecture at **mPrest**.
- **3. Command & Leadership (IAF - Major Res.):** **Major (רב-סרן)** and **Iron Dome Battery Commander**, bringing high-stakes decision-making and large-scale team leadership.`;
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
                temperature: 0.25,
                maxOutputTokens: 350,
              },
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const reply =
            data?.candidates?.[0]?.content?.parts?.[0]?.text ||
            getLocalAnswer(message);
          return NextResponse.json({
            reply,
            mode: "live-llm",
          });
        }
      } catch (err) {
        console.warn("LLM fallback triggered:", err);
      }
    }

    return NextResponse.json({
      reply: getLocalAnswer(message),
      mode: "embedded-knowledge",
      profile: PORTFOLIO_DATA.hero.name,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process request" },
      { status: 500 }
    );
  }
}
