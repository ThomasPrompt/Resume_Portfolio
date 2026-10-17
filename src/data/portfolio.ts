export interface KeyMetricBadge {
  metric: string;
  label: string;
  detail?: string;
}

export interface CorePillar {
  id: string;
  index: string;
  categoryLabel: string;
  title: string;
  description: string;
  highlights: {
    label: string;
    detail: string;
  }[];
  tags: string[];
  accentColor: "indigo" | "cyan" | "emerald";
}

export interface CaseStudy {
  id: string;
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  scale?: string;
  featured?: boolean;
  sections?: {
    label: string;
    content: string;
  }[];
  summary?: string;
  metrics: {
    value: string;
    label: string;
  }[];
  techStack: string[];
}

export interface ThoughtLeadershipArticle {
  id: string;
  tag: string;
  readTime: string;
  title: string;
  subtitle: string;
  keyTakeaways: string[];
  fullSummary: string[];
}

export const PORTFOLIO_DATA = {
  hero: {
    name: "Tom Deutsch",
    role: "Senior Product Manager & AI Systems Architect",
    statusBadge: "Executive Portfolio & One-Pager",
    headline: "Architecting Enterprise AI Agents & Platforms That Actually Scale.",
    subHeadline:
      "I’m Tom Deutsch, a Senior Product Manager bridging deep technical architectures and commercial ROI. From commanding Iron Dome system to scaling the U-AI Workspace for ~5,000 active users at Unity, I turn complex technologies into zero-friction products.",
    metricsBar: [
      {
        metric: "8+ Years",
        label: "Product and Systems Leadership",
        detail: "Enterprise AI, Merger M&A Infrastructure, Defense C2",
      },
      {
        metric: "~5,000 MAU",
        label: "Scaled on Enterprise AI Platform (U-AI Workspace)",
        detail: "U-AI Workspace at Unity across R&D and Go-To-Market teams",
      },
      {
        metric: "Full-Spectrum AI Stack",
        label: "AWS (Q, Bedrock), GCP (Vertex, AI Studio), Azure, Anthropic and LiteLLM",
        detail: "Multi-model semantic routing, dynamic RAG and token economics",
      },
      {
        metric: "Major (Res.)",
        label: "IAF Air Defense Battery Commander",
        detail: "Iron Dome operational command and mission-critical C2 systems",
      },
    ] as KeyMetricBadge[],
    ctas: {
      caseStudiesAnchor: "#case-studies",
      cvHref: "/Tom-Deutsch-CV.pdf",
      cvFileName: "Tom-Deutsch-CV.pdf",
      linkedin: "https://www.linkedin.com/in/tom-deutsch-7a8230b4",
      email: "mailto:tomdeutsch86@gmail.com",
      emailAddress: "tomdeutsch86@gmail.com",
    },
  },

  pillars: [
    {
      id: "commercial-ai-strategy",
      index: "01",
      categoryLabel: "PILLAR 01",
      title: 'Commercial AI & "Build vs. Buy" Strategy',
      description:
        "Token Economics & P&L mindset, defensible proprietary data moats, and ruthless MVP scoping.",
      accentColor: "indigo",
      highlights: [
        {
          label: "Token Economics & P&L Mindset",
          detail:
            "Focusing cost-per-query, prompt caching and seamantic model tiering to SLMs.",
        },
        {
          label: "Defensible Proprietary Data Moats",
          detail:
            "Focusing engineers and non-engineers on permission-aware indexing across Slack, Confluence, Drive, Zendesk, Gainsight, engine code and more on indexing high-value enterprise context.",
        },
        {
          label: "Ruthless MVP Scoping",
          detail:
            "Benchmarking AWS, GCP, Azure and Anthropic to buy commodity layers and build high-leverage vertial workflows.",
        },
      ],
    },
    {
      id: "technical-depth-agentic",
      index: "02",
      categoryLabel: "PILLAR 02",
      title: "Technical Depth: Agentic Systems & Architecture",
      description:
        "Context-aware AI (Semantic RAG, entity graphs, multi-model routing), trust and guardrails (hallucination control and proactive fallbacks).",
      accentColor: "cyan",
      highlights: [
        {
          label: "Context-Aware AI and Seamantic RAG",
          detail:
            "Hybrid vector + keyword retrieval, entity graphs and LiteLLM multi-model routing.",
        },
        {
          label: "Trust, Security & Guardrails",
          detail:
            "Enforcing RBAC permission-aware retrieval, confidence-score thresholds, hallucination control, deterministic fallback flows that eliminate retry loops",
        },
      ],
    },
    {
      id: "plg-zero-friction-ux",
      index: "03",
      categoryLabel: "PILLAR 03",
      title: "Product-Led Growth (PLG) & Zero-Friction UX",
      description:
        "Treating internal/enterprise users as paying customers, omnichannel execution (Web and Slack), and dual-experience architecture (casual users vs. advanced technical power users).",
      accentColor: "emerald",
      highlights: [
        {
          label: "Enterprise PLG Mindset",
          detail:
            "Treating internal and enterprise users as discerning paying customers—driving viral, bottom-up adoption without top-down mandates.",
        },
        {
          label: "Omnichannel Execution (Web & Slack)",
          detail:
            "Embedding AI agents directly into existing daily workflows with zero context-switching friction.",
        },
        {
          label: "Dual-Experience Architecture",
          detail:
            "Pairing a zero-friction conversational assistants and agents for casual users with an 'Advanced Lab' for technical power users and builders.",
        },
      ],
    },
  ] as CorePillar[],

  caseStudies: [
    {
      id: "u-ai-workspace",
      number: "01",
      badge: "FLAGSHIP CASE STUDY // ENTERPRISE AI OPERATING SYSTEM",
      title: "U-AI Workspace (Enterprise AI Operating System at Unity)",
      subtitle:
        "Co-architecting a multi-cloud, permission-aware Enterprise AI Operating System scaled organically to ~5,000 active global users.",
      scale: "~5,000 active global users (engineers and non-engineers).",
      featured: true,
      sections: [
        {
          label: "Scale",
          content: "~5,000 active global users (engineers and non-engineers).",
        },
        {
          label: "The Problem",
          content:
            "Surging demand for GenAI led to fragmented POCs, security risks and uncontrolled token burn while external tools lacked internal context.",
        },
        {
          label: "Strategy & Lean MVP",
          content:
            "Evaluated the full multi-cloud AI landscape (AWS, GCP, Azure, OpenAI, Anthropic, LiteLLM, etc.) and focused internal R&D strictly on indexing proprietary data moats across corporate repositories (Slack, Confluence, Drive, Zendesk, Gainsight, and more core enterprise systems).",
        },
        {
          label: "Solution & UX",
          content:
            'Co-architected a Dual-Experience Platform (zero-friction Slack/Web assistant and agent alongside an "Advanced Lab" for technical power users), dynamic RAG, prompt caching and semantic routing to lightweight SLMs.',
        },
        {
          label: "Impact",
          content:
            "Drove organic adoption to ~5,000 users while cutting inference costs and resolving hallucination retry loops; aggregated disparate internal data into configurable AI agents, building an enterprise-grade corporate intelligence moat.",
        },
      ],
    },
    {
      id: "post-merger-consolidation",
      number: "02",
      badge: "CASE STUDY 02 // M&A INFRASTRUCTURE & CONSOLIDATION",
      title:
        "Post-Merger Infrastructure & System Consolidation (Unity & ironSource $4.4B Merger)",
      subtitle:
        "Ruthless migration hierarchy across global enterprise stacks with strict SLAs and zero business downtime.",
      featured: false,
      summary:
        "Managed redundant internal and external applications across Finance, HR, Procurement, IT, etc. Established a ruthless migration hierarchy prioritizing revenue-critical pipelines with strict SLAs, completing global consolidation with zero business downtime.",
    },
    {
      id: "mission-critical-c2",
      number: "03",
      badge: "CASE STUDY 03 // MISSION-CRITICAL DEFENSE & C2",
      title:
        "System Engineer For Mission-Critical Command & Control (C2) Platforms (Elbit Systems, mPrest & Israeli Air Force)",
      subtitle:
        "Real-time, low-cognitive-load C2 and air defense interfaces engineered for zero-error operational execution.",
      featured: false,
      summary:
        "Engineered real-time, low-cognitive-load C2 and air defense interfaces (including Iron Dome operations), leading cross-functional integration and engineering collaboration to ensure flawless execution and product success.",
    },
  ] as CaseStudy[],

  thoughtLeadership: [
    {
      id: "building-enterprise-ai-workspace",
      tag: "ENTERPRISE AI ARCHITECTURE",
      readTime: "6 min read",
      title: "Building the Enterprise AI Workspace",
      subtitle:
        "Moving beyond chatbots through clean data alignment, proprietary moats and dual-user design.",
      keyTakeaways: [
        "Why generic off-the-shelf wrappers fail without deep indexing into proprietary enterprise systems (Slack, Confluence, Drive, Zendesk, Gainsight, etc.).",
        "Data alignment and RBAC hygiene as the prerequisite for trustworthy Semantic RAG.",
        "Architecting a Dual-Experience Platform: serving non-technical staff via zero-friction Slack/Web assistants while empowering builders with an Advanced Lab.",
      ],
      fullSummary: [
        "Most enterprise AI initiatives stall at the 'chatbot wrapper' phase because teams over-index on model selection while neglecting data alignment and user workflow integration.",
        "True enterprise scale (~5,000 MAU) requires focusing internal R&D strictly on building a defensible proprietary data moat—normalizing permissions, entity graphs and real-time context across fragmented corporate systems.",
        "By splitting the UX into a zero-friction omnichannel assistant (Web & Slack) for everyday productivity and an 'Advanced Lab' for technical power users, product teams eliminate adoption friction while preventing shadow AI sprawl.",
      ],
    },
    {
      id: "mastering-token-economics",
      tag: "AI UNIT ECONOMICS & STRATEGY",
      readTime: "5 min read",
      title: "Why Product Managers Must Master Token Economics",
      subtitle:
        "Managing unit economics, prompt caching, semantic routing and confidence-score thresholds.",
      keyTakeaways: [
        "Treating inference costs and context windows as a first-class P&L metric from Day 1.",
        "Implementing semantic routing to direct high-frequency, low-complexity intents to lightweight SLMs while reserving frontier models for complex reasoning.",
        "Eliminating costly hallucination retry loops through prompt caching and deterministic confidence-score thresholds.",
      ],
      fullSummary: [
        "In the era of generative AI, every product architecture decision directly impacts gross margin. Unbounded context windows, uncached system prompts, and routing trivial queries to frontier models quickly destroy product ROI.",
        "Modern AI Product Managers must architect with Token Economics at the core: leveraging LiteLLM/multi-cloud gateways, aggressive prompt caching, and semantic routers that dynamically match query complexity to the most cost-effective model.",
        "Furthermore, setting strict confidence-score thresholds before generation prevents hallucination retry loops—simultaneously boosting user trust and slashing wasted token burn.",
      ],
    },
  ] as ThoughtLeadershipArticle[],

  aiWidget: {
    title: "Ask Tom's AI",
    subtitle: "Powered by Google AI Studio • Portfolio Agent",
    welcomeMessage:
      "Hi! I’m **Tom Deutsch’s AI Assistant** (connected to Google AI Studio). Ask me anything about scaling the **U-AI Workspace (~5,000 MAU at Unity)**, **Token Economics & Build vs. Buy strategy**, **$4.4B Post-Merger Consolidation**, or **Iron Dome C2 engineering**.",
    suggestedQuestions: [
      "How did Tom scale U-AI Workspace to ~5,000 MAU at Unity?",
      "What is Tom's approach to Token Economics & Build vs. Buy?",
      "How did Tom handle the $4.4B Unity & ironSource merger?",
      "Tell me about Tom's Iron Dome & C2 engineering background.",
    ],
  },
};