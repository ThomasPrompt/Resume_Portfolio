"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  RotateCcw,
  ChevronRight,
  Cpu,
  Code2,
  Check,
  Copy,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  mode?: string;
}

export function AskTomsAIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSnippetPanel, setShowSnippetPanel] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: PORTFOLIO_DATA.aiWidget.welcomeMessage,
      timestamp: "Google AI Studio • Ready",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !showSnippetPanel) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, showSnippetPanel]);

  const sendMessage = async (textToSend?: string) => {
    const query = (textToSend ?? input).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: query,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsLoading(true);

    try {
      const customEndpoint =
        typeof window !== "undefined"
          ? (window as unknown as { TOM_AI_STUDIO_ENDPOINT?: string })
              .TOM_AI_STUDIO_ENDPOINT ||
            process.env.NEXT_PUBLIC_GOOGLE_AI_STUDIO_ENDPOINT
          : process.env.NEXT_PUBLIC_GOOGLE_AI_STUDIO_ENDPOINT;

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: query,
          endpoint: customEndpoint,
          history: messages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          role: "assistant",
          content:
            data.reply ||
            "Feel free to ask about Tom's U-AI Workspace (~5,000 MAU at Unity), Token Economics & Build vs. Buy strategy, $4.4B post-merger consolidation, or Iron Dome C2 systems.",
          timestamp:
            data.mode === "google-ai-studio"
              ? "Google AI Studio • Live"
              : "Portfolio RAG • Verified",
          mode: data.mode,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `fallback-${Date.now()}`,
          role: "assistant",
          content:
            "Tom Deutsch is a **Senior Product Manager & AI Systems Architect** who scaled the **U-AI Workspace at Unity to ~5,000 MAU**, led the **$4.4B Unity & ironSource post-merger consolidation**, and engineered **Iron Dome C2 interfaces** (Elbit, mPrest, IAF Major Res.).",
          timestamp: "Instant",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: PORTFOLIO_DATA.aiWidget.welcomeMessage,
        timestamp: "Google AI Studio • Ready",
      },
    ]);
  };

  const widgetSnippet = `<!-- Ask Tom's AI - Google AI Studio Widget Snippet -->
<script>
  window.TOM_AI_STUDIO_CONFIG = {
    endpoint: "/api/chat",
    model: "gemini-2.0-flash",
    profile: "Tom Deutsch - Senior PM & AI Systems Architect"
  };
</script>`;

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(widgetSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const renderFormattedContent = (text: string) => {
    return text.split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={i} className="h-1.5" />;

      const formatBold = (str: string) => {
        const parts = str.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, idx) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong
                key={idx}
                className="font-semibold text-zinc-900 dark:text-zinc-100"
              >
                {part.slice(2, -2)}
              </strong>
            );
          }
          return part;
        });
      };

      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        return (
          <div key={i} className="flex items-start gap-2 pl-1 my-1">
            <span className="text-indigo-600 dark:text-indigo-400 mt-0.5">
              •
            </span>
            <span>{formatBold(trimmed.slice(2))}</span>
          </div>
        );
      }

      return (
        <p key={i} className="my-1 leading-relaxed">
          {formatBold(line)}
        </p>
      );
    });
  };

  return (
    <div id="ask-toms-ai-widget" className="fixed bottom-5 right-5 z-50 print:hidden">
      {isOpen && (
        <div className="mb-3.5 w-[92vw] sm:w-[420px] rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.28)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* Header */}
          <div className="px-4 py-3.5 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/90 dark:bg-zinc-900/50 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 dark:bg-zinc-900 border border-indigo-500/20 dark:border-zinc-700/80 text-indigo-600 dark:text-indigo-400">
                <Cpu className="h-4 w-4" />
                <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-950" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {PORTFOLIO_DATA.aiWidget.title}
                  </span>
                  <span className="rounded-md bg-indigo-500/10 border border-indigo-500/25 px-1.5 py-0.5 text-[10px] font-mono text-indigo-600 dark:text-indigo-300">
                    AI Studio API
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  {PORTFOLIO_DATA.aiWidget.subtitle}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowSnippetPanel((prev) => !prev)}
                title="Google AI Studio Endpoint & Widget Snippet"
                className={`p-1.5 rounded-lg transition-colors ${
                  showSnippetPanel
                    ? "bg-indigo-500/15 text-indigo-600 dark:text-indigo-300"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/80"
                }`}
              >
                <Code2 className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={resetChat}
                title="Reset conversation"
                className="p-1.5 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/80 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close AI Widget"
                className="p-1.5 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/80 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {showSnippetPanel ? (
            <div className="p-4 space-y-3 text-xs bg-zinc-50/50 dark:bg-zinc-950">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
                  Google AI Studio API & Widget Config
                </span>
                <button
                  onClick={handleCopySnippet}
                  className="inline-flex items-center gap-1 rounded-md border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-2 py-1 text-[11px] text-zinc-700 dark:text-zinc-300 hover:border-indigo-500/40"
                >
                  {copiedSnippet ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Connected to <code className="font-mono text-indigo-600 dark:text-indigo-300">/api/chat</code> (Google AI Studio <code className="font-mono">gemini-2.0-flash</code> endpoint + embedded portfolio RAG graph). Set <code className="font-mono">GOOGLE_AI_STUDIO_API_KEY</code> or <code className="font-mono">GEMINI_API_KEY</code> in your environment variables.
              </p>
              <pre className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900 text-zinc-200 p-3 font-mono text-[11px] overflow-x-auto leading-relaxed">
                {widgetSnippet}
              </pre>
              <button
                onClick={() => setShowSnippetPanel(false)}
                className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 text-xs transition-colors"
              >
                Back to Chat
              </button>
            </div>
          ) : (
            <>
              {/* Messages */}
              <div className="h-[360px] overflow-y-auto p-4 space-y-3.5 text-xs">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex gap-2.5 ${
                      m.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {m.role === "assistant" && (
                      <div className="h-6 w-6 rounded-md bg-indigo-500/10 dark:bg-zinc-900 border border-indigo-500/20 dark:border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-xl px-3.5 py-2.5 ${
                        m.role === "user"
                          ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-medium"
                          : "bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800/90 text-zinc-700 dark:text-zinc-300"
                      }`}
                    >
                      <div>{renderFormattedContent(m.content)}</div>
                      <div
                        className={`mt-1.5 text-[10px] font-mono ${
                          m.role === "user"
                            ? "text-zinc-300 dark:text-zinc-600 text-right"
                            : "text-zinc-400 dark:text-zinc-500"
                        }`}
                      >
                        {m.timestamp}
                      </div>
                    </div>

                    {m.role === "user" && (
                      <div className="h-6 w-6 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 flex items-center justify-center shrink-0 mt-0.5">
                        <User className="h-3.5 w-3.5" />
                      </div>
                    )}
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 pl-8">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-500 animate-ping" />
                    <span className="font-mono text-[11px]">
                      Querying Google AI Studio agent...
                    </span>
                  </div>
                )}

                {messages.length <= 2 && !isLoading && (
                  <div className="pt-2 space-y-1.5">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                      Recruiter & Hiring Manager Prompts
                    </p>
                    <div className="flex flex-col gap-1.5">
                      {PORTFOLIO_DATA.aiWidget.suggestedQuestions.map((q) => (
                        <button
                          key={q}
                          onClick={() => sendMessage(q)}
                          className="text-left text-xs px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800/90 bg-zinc-50/80 dark:bg-zinc-900/50 hover:border-indigo-500/40 dark:hover:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 transition-all flex items-center justify-between group"
                        >
                          <span>{q}</span>
                          <ChevronRight className="h-3.5 w-3.5 text-zinc-400 group-hover:text-indigo-500 dark:group-hover:text-zinc-200 group-hover:translate-x-0.5 transition-all shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="p-3 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/40 flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about U-AI (~5,000 MAU), Token Economics, C2..."
                  className="flex-1 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500 dark:focus:border-zinc-600 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  aria-label="Send message"
                  className="p-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white text-white dark:text-zinc-950 disabled:opacity-40 transition-colors"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </>
          )}
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="group flex items-center gap-2.5 rounded-full border border-zinc-300/90 dark:border-zinc-700/80 bg-zinc-900 dark:bg-zinc-900/95 hover:bg-zinc-800 text-white dark:text-zinc-100 px-4 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.35)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.65)] backdrop-blur-md hover:border-indigo-500/50 transition-all duration-200"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
        </span>
        <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
        <span className="text-xs font-medium tracking-tight">
          {isOpen ? "Close AI Assistant" : "Ask Tom's AI"}
        </span>
      </button>
    </div>
  );
}
