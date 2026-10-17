export interface MetricBadge {
  label: string;
  value: string;
  detail: string;
  tag?: string;
}

export interface Pillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: {
    title: string;
    detail: string;
  }[];
  metrics: string[];
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  organization: string;
  timeframe: string;
  scaleBadge: string;
  tags: string[];
  problem: string;
  strategy: string;
  solution: string;
  impact: string[];
  architectureHighlights?: string[];
  keyMetrics: {
    label: string;
    value: string;
  }[];
}

export interface ThoughtLeadershipArticle {
  id: string;
  title: string;
  subtitle: string;
  readTime: string;
  category: string;
  date: string;
  url: string;
  keyTakeaways: string[];
  fullExcerpt: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Tom Deutsch",
    role: "Senior Product Manager & AI Systems Architect",
    tagline: "Bridging Deep Technical Architectures & Commercial ROI",
    location: "Tel Aviv / Global",
    status: "Available for Executive & Principal PM Leadership Roles",
    headline: "Architecting Enterprise AI Agents & Platforms That Actually Scale.",
    subHeadline:
      "I’m Tom Deutsch, a Senior Product Manager bridging deep technical architectures and commercial ROI. From commanding Iron Dome C2 systems to scaling the U-AI Workspace for ~5,000 active users at Unity, I turn complex technologies into zero-friction products.",
    links: {
      linkedin: "https://www.linkedin.com/in/tom-deutsch-7a8230b4",
      email: "mailto:tomdeutsch86@gmail.com",
      emailAddress: "tomdeutsch86@gmail.com",
      github: "https://github.com/tomdeutsch",
      cvUrl: "#executive-one-pager",
    },
  },

  metricsBar: [
    {
      value: "8+ Years",
      label: "Product & Systems Leadership",
      detail: "Enterprise AI, Post-Merger M&A Infrastructure, Defense C2 Systems",
      tag: "EXPERIENCE",
    },
    {
      value: "~5,000 MAU",
      label: "Scaled on Enterprise AI Platform",
      detail: "U-AI Workspace at Unity across R&D and Go-To-Market teams",
      tag: "SCALE",
    },
    {
      value: "Full-Spectrum AI Stack",
      label: "AWS (Q, Bedrock), GCP (Vertex, AI Studio), Azure, Anthropic & LiteLLM",
      detail: "Multi-model semantic routing, dynamic RAG & token economics",
      tag: "ARCHITECTURE",
    },
    {
      value: "Major (Res.)",
      label: "IAF Air Defense Battery Commander",
      detail: "Iron Dome operational command & mission-critical C2 systems",
      tag: "LEADERSHIP",
    },
  ] as MetricBadge[],

  pillars: [
    {
      id: "commercial-ai",
      number: "01",
      title: 'Commercial AI & "Build vs. Buy" Strategy',
      subtitle: "Unit Economics, P&L Ownership & Defensible Moats",
      description:
        "Treating AI infrastructure as a commercial product with strict unit economics—never building commodity wrappers when proprietary data moats drive 10x leverage.",
      highlights: [
        {
          title: "Token Economics Mindset",
          detail:
            "Managing cost-per-query, prompt caching, and semantic model tiering (routing 70%+ of routine intents to lightweight SLMs while reserving frontier models for complex synthesis).",
        },
        {
          title: "Defensible Proprietary Data Moats",
          detail:
            "Bypassing commoditized foundation model layers to focus R&D strictly on permission-aware indexing across Slack, Confluence, Google Drive, Zendesk, and Gainsight.",
        },
        {
          title: "Ruthless MVP Scoping",
          detail:
            "Benchmarking AWS Q, Bedrock, GCP Vertex AI, Azure OpenAI, and Anthropic side-by-side to buy commodity capabilities and build only high-leverage vertical workflows.",
        },
      ],
      metrics: ["Cost/Query Optimization", "Multi-Cloud Vendor Matrix", "Proprietary RAG Moat"],
    },
    {
      id: "technical-depth",
      number: "02",
      title: "Technical Depth: Agentic Systems & Architecture",
      subtitle: "Context-Aware Orchestration, Guardrails & C2 Reliability",
      description:
        "Designing deterministic guardrails around probabilistic systems, bringing military-grade Command & Control reliability to enterprise AI workflows.",
      highlights: [
        {
          title: "Context-Aware AI & Semantic RAG",
          detail:
            "Hybrid vector + keyword retrieval, entity graph resolution, and LiteLLM multi-model orchestration that injects real-time organizational context into every prompt.",
        },
        {
          title: "Trust, Guardrails & Hallucination Control",
          detail:
            "Confidence-score thresholds, citation enforcement, deterministic fallback paths, and RBAC ACL filtering that eliminate hallucination retry loops.",
        },
        {
          title: "Mission-Critical C2 DNA",
          detail:
            "Battle-tested architecture principles from Iron Dome and Elbit/mPrest C2 systems: low-latency telemetry, graceful degradation, and zero-ambiguity operator feedback.",
        },
      ],
      metrics: ["Semantic Routing (LiteLLM)", "Deterministic Fallbacks", "Zero-Trust RBAC RAG"],
    },
    {
      id: "plg-ux",
      number: "03",
      title: "Product-Led Growth (PLG) & Zero-Friction UX",
      subtitle: "Consumer-Grade Adoption Inside the Enterprise",
      description:
        "Eliminating adoption friction by embedding intelligence directly into existing workflows while empowering power users with deep customization.",
      highlights: [
        {
          title: "Internal Users as Paying Customers",
          detail:
            "Driving organic viral adoption to ~5,000 MAU without top-down mandates through cohort retention tracking, NPS loops, and time-to-first-value optimization.",
        },
        {
          title: "Omnichannel Execution (Web & Slack)",
          detail:
            "Meeting users where work happens—instant thread summarization and knowledge retrieval inside Slack alongside a dedicated rich Web Workspace.",
        },
        {
          title: "Dual-Experience Architecture",
          detail:
            "A zero-friction conversational assistant for casual business users paired with an 'Advanced Lab' for engineers to configure system prompts, temperature, and RAG sources.",
        },
      ],
      metrics: ["~5,000 Organic MAU", "Slack + Web Omnichannel", "Dual-Mode UX Pattern"],
    },
  ] as Pillar[],

  caseStudies: [
    {
      id: "u-ai-workspace",
      number: "01",
      title: "U-AI Workspace: Enterprise AI Operating System",
      subtitle: "Scaling a Unified Multi-Model AI Platform & Corporate Knowledge Moat",
      organization: "Unity Technologies",
      timeframe: "Enterprise AI Platform Lead",
      scaleBadge: "~5,000 Active Global Users",
      tags: [
        "AWS Bedrock & Q",
        "GCP Vertex & AI Studio",
        "Azure OpenAI",
        "Anthropic Claude",
        "LiteLLM",
        "Semantic RAG",
        "Slack & Web",
      ],
      problem:
        "Surging demand for Generative AI across engineering and commercial orgs created a fragmented landscape of shadow-IT POCs, severe data-leakage risks, and uncontrolled token burn—while off-the-shelf external tools lacked access to Unity's proprietary internal context.",
      strategy:
        "Evaluated the full multi-cloud AI landscape (AWS Q & Bedrock, GCP Vertex & AI Studio, Azure OpenAI, Anthropic, LiteLLM) using a rigorous Build-vs-Buy matrix. Avoided rebuilding commodity chat UI; focused internal R&D strictly on indexing proprietary data moats across corporate repositories (Slack, Confluence, Google Drive, Zendesk, Gainsight, and core enterprise systems).",
      solution:
        "Co-architected a Dual-Experience Platform: (1) a zero-friction Slack & Web assistant for instant answers with verified citations, and (2) an 'Advanced Lab' for technical power users and engineers to build custom agents and tune model parameters. Implemented dynamic RAG, prompt caching, and semantic routing via LiteLLM to lightweight SLMs for routine queries.",
      impact: [
        "Scaled organically to ~5,000 active global users across engineering, product, support, and GTM teams.",
        "Eliminated hallucination retry loops through confidence thresholds, grounded citations, and proactive fallback routing.",
        "Slashed inference costs significantly via prompt caching and semantic routing between frontier LLMs and lightweight SLMs.",
        "Established a secure, permission-aware corporate intelligence moat unifying 6+ core enterprise knowledge repositories.",
      ],
      architectureHighlights: [
        "Ingress Layer: Slack Bot Events API + Next.js Web Workspace with unified SSO/RBAC identity context",
        "Orchestration & Gateway: LiteLLM semantic router + token budget controller + prompt cache layer",
        "Model Tiering: Anthropic Claude / GPT-4o / Gemini Pro (Complex Synthesis) ↔ Haiku / Flash / Mini SLMs (Classification & Triage)",
        "Knowledge Moat: Hybrid Vector + BM25 RAG across Slack, Confluence, Drive, Zendesk & Gainsight with document-level ACLs",
      ],
      keyMetrics: [
        { label: "Active Global Users", value: "~5,000 MAU" },
        { label: "Knowledge Sources Indexed", value: "6+ Core Systems" },
        { label: "Multi-Cloud Stack", value: "AWS / GCP / Azure" },
        { label: "Adoption Motion", value: "100% Organic PLG" },
      ],
    },
    {
      id: "post-merger-consolidation",
      number: "02",
      title: "Post-Merger Infrastructure & System Consolidation",
      subtitle: "Enterprise Architecture Unification Following the $4.4B Unity & ironSource Merger",
      organization: "Unity & ironSource ($4.4B Merger)",
      timeframe: "Post-Merger Integration Lead",
      scaleBadge: "$4.4B Merger | Zero Downtime",
      tags: [
        "M&A Systems Integration",
        "Enterprise Architecture",
        "Finance & Revenue Pipelines",
        "SLA Governance",
        "Change Management",
      ],
      problem:
        "Following the landmark $4.4B merger between Unity and ironSource, the combined organization operated on duplicated, incompatible enterprise stacks across Finance, HR, Procurement, and IT—creating multi-million-dollar licensing redundancy, fragmented data reporting, and operational friction.",
      strategy:
        "Established a ruthless migration hierarchy governed by business criticality and revenue impact. Prioritized quote-to-cash, billing, and financial reporting pipelines under strict SLAs before transitioning secondary operational tooling.",
      solution:
        "Led cross-functional engineering, IT, finance, and operations squads through phased data migrations, identity federation, and system decommissioning. Built real-time cutover playbooks, automated data reconciliation checks, and executive risk dashboards.",
      impact: [
        "Completed global system consolidation across Finance, HR, Procurement, and IT with zero business or revenue downtime.",
        "Decommissioned redundant legacy applications, capturing substantial annual SaaS and infrastructure cost synergies.",
        "Unified cross-company data schemas and identity governance, enabling seamless post-merger financial close and operations.",
      ],
      keyMetrics: [
        { label: "Transaction Scale", value: "$4.4B Merger" },
        { label: "Business Downtime", value: "0 Minutes" },
        { label: "Domains Unified", value: "Finance, HR, IT, Proc." },
        { label: "Execution Model", value: "SLA-Driven Cutover" },
      ],
    },
    {
      id: "mission-critical-c2",
      number: "03",
      title: "Mission-Critical Command & Control (C2) Platforms",
      subtitle: "Real-Time Air Defense & Multi-Node Tactical Decision Systems",
      organization: "Elbit Systems, mPrest & Israeli Air Force (Iron Dome)",
      timeframe: "PM & Major (Res.) Battery Commander",
      scaleBadge: "Real-Time | Zero-Failure Tolerance",
      tags: [
        "Command & Control (C2)",
        "Iron Dome Air Defense",
        "Real-Time Telemetry",
        "Low-Cognitive-Load UX",
        "Multi-Node Sensor Fusion",
      ],
      problem:
        "In active air-defense scenarios, operators face overwhelming multi-node radar, sensor, and interceptor data streams where split-second decisions carry life-or-death consequences. High cognitive load or UI ambiguity directly degrades interception effectiveness.",
      strategy:
        "Combined hands-on operational command experience as an IAF Iron Dome Battery Commander (Major, Res.) with systems product management at Elbit Systems—translating battlefield human-factors constraints directly into deterministic software requirements.",
      solution:
        "Engineered real-time, low-cognitive-load C2 interfaces capable of ingesting and correlating massive multi-node data streams under extreme operational pressure. Designed high-contrast tactical visualizations, automated threat-prioritization cues, and fail-safe operator override workflows.",
      impact: [
        "Reduced operator decision latency during high-saturation multi-threat scenarios through progressive information disclosure.",
        "Delivered rock-solid system reliability across distributed tactical nodes with deterministic fallback states.",
        "Bridged defense-grade systems engineering and human-machine teaming principles directly into modern enterprise AI agent design.",
      ],
      keyMetrics: [
        { label: "Operational Rank", value: "Major (Res.)" },
        { label: "System Class", value: "Iron Dome & C2" },
        { label: "Latency Profile", value: "Sub-Second Real-Time" },
        { label: "UX Philosophy", value: "Zero Cognitive Overload" },
      ],
    },
  ] as CaseStudy[],

  thoughtLeadership: [
    {
      id: "enterprise-ai-workspace",
      title: "Building the Enterprise AI Workspace",
      subtitle:
        "Moving beyond novelty chatbots through clean data alignment, proprietary knowledge moats, and dual-user experience design.",
      readTime: "7 min read",
      category: "AI Architecture & PLG",
      date: "Featured Insight",
      url: "#article-enterprise-ai-workspace",
      keyTakeaways: [
        "Why 90% of enterprise AI wrappers fail: lacking permission-aware context across Slack, Confluence, Drive, and CRM systems.",
        "The Dual-Experience Pattern: serving 80% business users with zero-friction Slack/Web assistants while giving 20% technical power users an 'Advanced Lab'.",
        "Treating internal enterprise employees like paying B2B SaaS customers to scale organically to ~5,000 MAU.",
      ],
      fullExcerpt: [
        "Most enterprise AI initiatives stall after the initial demo phase because they treat LLMs as isolated chat destinations rather than context-aware operating systems.",
        "When we architected the U-AI Workspace at Unity, our core thesis was simple: foundation models are rapidly commoditizing, so internal R&D must focus exclusively on the proprietary data moat and zero-friction distribution.",
        "By combining federated RAG across Slack, Confluence, Drive, Zendesk, and Gainsight with a dual-mode interface—instant Slack workflows for everyday teams and a configurable Advanced Lab for builders—we turned fragmented POCs into a unified platform serving ~5,000 active users.",
      ],
    },
    {
      id: "token-economics-for-pms",
      title: "Why Product Managers Must Master Token Economics",
      subtitle:
        "Managing AI unit economics at scale through prompt caching, semantic model routing, and deterministic confidence thresholds.",
      readTime: "6 min read",
      category: "Commercial AI Strategy",
      date: "Featured Insight",
      url: "#article-token-economics",
      keyTakeaways: [
        "Moving from 'ship the prompt' to P&L ownership: measuring marginal token cost per resolved user intent.",
        "Semantic Routing via LiteLLM: dynamically triaging routine classification/summarization to fast SLMs while reserving frontier models for high-complexity reasoning.",
        "Eliminating the 'Hallucination Tax': how confidence-score thresholds and proactive fallbacks prevent expensive multi-turn retry loops.",
      ],
      fullExcerpt: [
        "In traditional SaaS, marginal compute cost per user action is nearly negligible. In Enterprise GenAI, every poorly routed prompt or hallucination-induced retry loop directly erodes gross margin and ROI.",
        "Modern AI Product Managers must operate as unit-economics architects. By implementing semantic routing layers (via LiteLLM across AWS Bedrock, GCP Vertex, Azure, and Anthropic) alongside aggressive prompt caching, teams can cut inference spend by over 50% while actually improving p95 response latency.",
        "Crucially, the most expensive token is the one spent on a hallucinated answer that forces the user to re-prompt three times. Enforcing strict retrieval confidence thresholds turns trust into a direct cost-saving lever.",
      ],
    },
  ] as ThoughtLeadershipArticle[],

  aiAssistant: {
    welcomeMessage:
      "Hi! I'm Tom's AI Architecture Assistant. Ask me anything about Tom's work scaling Unity's U-AI Workspace (~5,000 MAU), his Build-vs-Buy & Token Economics framework, the $4.4B Unity–ironSource merger consolidation, or his background commanding Iron Dome C2 systems.",
    suggestedPrompts: [
      "How did Tom scale U-AI Workspace to ~5,000 MAU?",
      "Explain Tom's Token Economics & Build-vs-Buy strategy",
      "How does Iron Dome C2 experience shape his AI architecture?",
      "Tell me about the $4.4B Unity & ironSource merger consolidation",
    ],
  },
};
