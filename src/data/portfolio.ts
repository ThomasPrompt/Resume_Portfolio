export interface DomainHighlight {
  companyOrRole: string;
  badge: string;
  summary: string;
  bullets: string[];
}

export interface ExpertiseDomain {
  id: string;
  index: string;
  categoryLabel: string;
  title: string;
  subtitle: string;
  accentColor: "indigo" | "cyan" | "emerald";
  description: string;
  highlights: DomainHighlight[];
  tags: string[];
}

export interface CaseStudyItem {
  id: string;
  domainTag: string;
  organization: string;
  title: string;
  summary: string;
  architecture: string[];
  outcomes: string[];
  metrics: { label: string; value: string }[];
}

export const PORTFOLIO_DATA = {
  hero: {
    name: "Tom Deutsch",
    title: "Senior Product Manager & AI Systems Architect",
    valueProposition:
      "Expert in architecting enterprise AI platforms, autonomous agents, and mission-critical systems from inception to scale.",
    statusBadge: "Executive One-Pager & Portfolio",
    ctas: {
      caseStudiesHref: "#case-studies",
      cvHref: "#one-pager",
      linkedin: "https://www.linkedin.com/in/tom-deutsch",
      email: "mailto:tomdeutsch86@gmail.com",
      emailAddress: "tomdeutsch86@gmail.com",
    },
  },

  domains: [
    {
      id: "ai-saas-leadership",
      index: "01",
      categoryLabel: "DOMAIN 01 // ENTERPRISE AI & SAAS",
      title: "AI & SaaS Product Leadership",
      subtitle: "Enterprise AI Platforms, Autonomous Agents & Distributed Scale",
      accentColor: "indigo",
      description:
        "Leading product strategy and technical architecture for enterprise AI platforms, autonomous agent workflows, LLM integrations, and high-scale distributed SaaS systems.",
      highlights: [
        {
          companyOrRole: "Enterprise AI Platforms & Autonomous Agents",
          badge: "AI Architecture & SaaS",
          summary:
            "Architecting end-to-end AI ecosystems from zero-to-one through enterprise-wide scale (~5,000+ MAU).",
          bullets: [
            "Multi-model LLM orchestration (AWS Bedrock, GCP Vertex AI, Azure OpenAI, Anthropic, LiteLLM) with semantic routing & token economics.",
            "Production-grade RAG pipelines, permission-aware corporate knowledge graphs, and deterministic hallucination guardrails.",
            "Workflow automation & dual-experience SaaS design bridging zero-friction business adoption with deep developer configurability.",
          ],
        },
      ],
      tags: [
        "Enterprise AI Platforms",
        "Autonomous AI Agents",
        "LLM Orchestration & RAG",
        "Workflow Automation",
        "Distributed SaaS Systems",
        "Token Economics & PLG",
      ],
    },
    {
      id: "enterprise-defense-tech",
      index: "02",
      categoryLabel: "DOMAIN 02 // CRITICAL SYSTEMS & DEFENSE TECH",
      title: "Enterprise Platforms & Defense Tech (Critical Systems)",
      subtitle: "Real-Time Command & Control (C2) & Data-Intensive Architectures",
      accentColor: "cyan",
      description:
        "Deep product and systems architecture leadership across complex defense ecosystems, distributed real-time software, and mission-critical operational platforms.",
      highlights: [
        {
          companyOrRole: "Elbit Systems",
          badge: "Operational Platforms & Architecture",
          summary:
            "Leading complex technical platforms, software architectures, and data-intensive operational systems.",
          bullets: [
            "Directed product lifecycle and system architecture for large-scale, data-intensive operational platforms.",
            "Aligned multi-disciplinary hardware, software, and data engineering groups around deterministic performance standards.",
          ],
        },
        {
          companyOrRole: "mPrest",
          badge: "Mission-Critical C2 Systems",
          summary:
            "A critical and rigorous tenure leading product management and architecture for complex Command & Control (C2) distributed software systems and real-time mission-critical solutions under extreme conditions.",
          bullets: [
            "Architected distributed real-time C2 software handling high-velocity multi-sensor telemetry and split-second state synchronization.",
            "Engineered zero-downtime, fault-tolerant system behavior and low-cognitive-load operator interfaces for extreme operational environments.",
          ],
        },
      ],
      tags: [
        "Elbit Systems",
        "mPrest",
        "Command & Control (C2)",
        "Distributed Real-Time Systems",
        "High-Throughput Telemetry",
        "Zero-Failure Architecture",
      ],
    },
    {
      id: "command-leadership-iaf",
      index: "03",
      categoryLabel: "DOMAIN 03 // EXECUTIVE COMMAND & LEADERSHIP",
      title: "Command & Leadership (IAF - Major Res.)",
      subtitle: "Major (רב-סרן) • Iron Dome Battery Commander",
      accentColor: "emerald",
      description:
        "Active and reserve service as a Major (רב-סרן) and Iron Dome Battery Commander—positioned as a foundational executive leadership asset.",
      highlights: [
        {
          companyOrRole: "Israeli Air Force (IAF) — Major (רב-סרן, Res.)",
          badge: "Iron Dome Battery Commander",
          summary:
            "High-stakes operational command translated into decisive executive leadership and systems execution.",
          bullets: [
            "High-Stakes Decision-Making: Real-time operational judgment and accountability under extreme pressure and zero-margin-for-error conditions.",
            "Large-Scale Team Management: Commanding, training, and aligning 100+ officers, engineers, and combat operators across distributed units.",
            "Complex Real-Time Systems Operation: Direct operational mastery of Iron Dome air-defense batteries and multi-node tactical C2 networks.",
          ],
        },
      ],
      tags: [
        "Major (רב-סרן) Res.",
        "Iron Dome Battery Commander",
        "High-Stakes Decision Making",
        "Large-Scale Team Leadership",
        "Real-Time Operational Execution",
      ],
    },
  ] as ExpertiseDomain[],

  caseStudies: [
    {
      id: "enterprise-ai-platform",
      domainTag: "AI & SaaS Product Leadership",
      organization: "Enterprise AI & SaaS (Unity)",
      title: "Enterprise AI Platform & Multi-Agent Workspace",
      summary:
        "Architected and scaled an internal enterprise AI operating system and agentic workflow platform to ~5,000 active global users, alongside leading post-merger ($4.4B) enterprise system consolidation.",
      architecture: [
        "Multi-cloud LLM gateway (Bedrock, Vertex AI, Azure OpenAI, Anthropic) via LiteLLM semantic routing.",
        "Federated permission-aware RAG across Slack, Confluence, Google Drive, Zendesk, and Gainsight.",
        "Dual-mode UX: zero-friction Slack/Web assistant + configurable Advanced Agent Lab.",
      ],
      outcomes: [
        "Scaled organically to ~5,000 MAU via product-led growth and embedded workflow automation.",
        "Optimized token economics via prompt caching, confidence thresholds, and SLM routing.",
        "Unified post-merger enterprise stacks across Finance, HR, and IT with zero operational downtime.",
      ],
      metrics: [
        { label: "Platform Scale", value: "~5,000 MAU" },
        { label: "Architecture", value: "Multi-LLM + RAG" },
        { label: "M&A Consolidation", value: "$4.4B / 0 Downtime" },
      ],
    },
    {
      id: "mprest-c2-architecture",
      domainTag: "Defense Tech • mPrest",
      organization: "mPrest",
      title: "Distributed Command & Control (C2) Real-Time Architecture",
      summary:
        "Led product management and software architecture for distributed, mission-critical C2 systems operating under extreme real-time load and strict reliability constraints.",
      architecture: [
        "Distributed event-driven microservices ingesting high-frequency multi-node sensor and radar streams.",
        "Deterministic rule engines and real-time state synchronization across tactical and operational nodes.",
        "Low-cognitive-load operator consoles engineered for rapid anomaly detection and split-second action.",
      ],
      outcomes: [
        "Delivered sub-second latency and deterministic failover under extreme operational stress.",
        "Bridged complex algorithmic backend logic with intuitive, zero-ambiguity operator workflows.",
        "Established rigorous system architecture standards across R&D and field integration teams.",
      ],
      metrics: [
        { label: "System Class", value: "Distributed C2" },
        { label: "Latency Profile", value: "Sub-Second Real-Time" },
        { label: "Reliability", value: "Mission-Critical" },
      ],
    },
    {
      id: "elbit-operational-platforms",
      domainTag: "Defense Tech • Elbit Systems",
      organization: "Elbit Systems",
      title: "Data-Intensive Operational Platforms & System Architecture",
      summary:
        "Spearheaded product strategy and technical architecture for complex operational platforms integrating multi-source telemetry, software architectures, and tactical decision support.",
      architecture: [
        "Modular platform architecture supporting multi-domain data fusion and high-throughput operational pipelines.",
        "Strict API contracts and interoperability standards connecting legacy defense hardware with modern software layers.",
        "End-to-end systems engineering lifecycle from operational concept definition to field deployment.",
      ],
      outcomes: [
        "Streamlined cross-system data flow and improved operator situational awareness across complex deployments.",
        "Aligned cross-functional engineering squads around scalable, maintainable platform architectures.",
        "Translated field commander insights directly into high-impact software capabilities.",
      ],
      metrics: [
        { label: "Focus", value: "Operational Platforms" },
        { label: "Architecture", value: "Data-Intensive Systems" },
        { label: "Delivery", value: "Concept to Field Scale" },
      ],
    },
  ] as CaseStudyItem[],

  aiWidget: {
    title: "Tom's AI Assistant",
    subtitle: "Interactive Portfolio & Architecture Agent",
    welcomeMessage:
      "Hello! I'm Tom Deutsch's AI portfolio assistant. Ask me about his **AI & SaaS Product Leadership**, his mission-critical C2 & defense architecture work at **mPrest** and **Elbit Systems**, or his command leadership as an **IAF Major (Res.) & Iron Dome Battery Commander**.",
    suggestedQuestions: [
      "Summarize Tom's AI & SaaS product leadership",
      "Tell me about Tom's C2 architecture role at mPrest & Elbit",
      "How does Tom's Iron Dome command shape his leadership?",
      "What makes Tom unique as a Senior PM & AI Architect?",
    ],
  },
};
