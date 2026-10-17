export interface CorePillar {
  id: string;
  index: string;
  categoryLabel: string;
  title: string;
  subtitle: string;
  accentColor: "indigo" | "cyan" | "emerald";
  bullets: string[];
  tags: string[];
}

export const PORTFOLIO_DATA = {
  hero: {
    name: "Tom Deutsch",
    title: "Senior Product Manager & AI Systems Architect",
    valueProposition:
      "Architecting autonomous AI agents, enterprise LLM platforms, and high-scale distributed SaaS ecosystems from zero-to-one to global production.",
    statusBadge: "Executive One-Pager",
    ctas: {
      cvHref: "/Tom-Deutsch-CV.pdf",
      cvFileName: "Tom-Deutsch-CV.pdf",
      linkedin: "https://www.linkedin.com/in/tom-deutsch-7a8230b4",
      email: "mailto:tomdeutsch86@gmail.com",
      emailAddress: "tomdeutsch86@gmail.com",
    },
  },

  pillars: [
    {
      id: "ai-saas-leadership",
      index: "01",
      categoryLabel: "PILLAR 01 // AI AGENTS & SAAS",
      title: "AI Product & High-Scale SaaS",
      subtitle: "Enterprise AI Agents • Multi-LLM • PLG Scale",
      accentColor: "indigo",
      bullets: [
        "Scaled an enterprise AI agent & multi-LLM platform (Bedrock, Vertex, OpenAI, Anthropic) to ~5,000 MAU.",
        "Architected permission-aware RAG, semantic routing, and automated workflows across $4.4B M&A SaaS stacks.",
      ],
      tags: ["AI Agents", "Multi-LLM & RAG", "Enterprise SaaS", "~5,000 MAU"],
    },
    {
      id: "enterprise-platforms",
      index: "02",
      categoryLabel: "PILLAR 02 // ENTERPRISE PLATFORMS",
      title: "Enterprise & Real-Time Systems",
      subtitle: "Elbit Systems & mPrest • Distributed Architecture",
      accentColor: "cyan",
      bullets: [
        "Elbit Systems: Directed product strategy and system architecture for large-scale, data-intensive operational platforms.",
        "mPrest: Led product & architecture for distributed real-time Command & Control (C2) software at sub-second latency.",
      ],
      tags: ["Elbit Systems", "mPrest", "Distributed C2", "Real-Time Data"],
    },
    {
      id: "executive-leadership",
      index: "03",
      categoryLabel: "PILLAR 03 // HIGH-STAKES LEADERSHIP",
      title: "Executive Command & Execution",
      subtitle: "IAF Major (Res.) • Iron Dome Commander",
      accentColor: "emerald",
      bullets: [
        "Commanded 100+ officers, engineers, and operators across distributed real-time Iron Dome units.",
        "Decisive executive alignment, high-stakes decision-making, and operational ownership under zero-error conditions.",
      ],
      tags: ["IAF Major (Res.)", "100+ Personnel", "High-Stakes Execution"],
    },
  ] as CorePillar[],

  aiWidget: {
    title: "Ask Tom's AI",
    subtitle: "Executive Portfolio Agent",
    welcomeMessage:
      "Hi! I'm Tom Deutsch's AI assistant. Ask me anything to drill down into his **AI Agents & High-Scale SaaS** leadership, **Enterprise Systems (Elbit & mPrest)**, or **Executive Command (IAF Major)**.",
    suggestedQuestions: [
      "Tell me about Tom's AI Agent & SaaS platforms",
      "What did Tom build at Elbit Systems & mPrest?",
      "How does Tom's Iron Dome command shape his PM leadership?",
    ],
  },
};
