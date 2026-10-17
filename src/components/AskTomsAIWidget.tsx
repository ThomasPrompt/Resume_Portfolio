"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  Terminal,
  Cpu,
  RotateCcw,
  ChevronRight,
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
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: PORTFOLIO_DATA.aiAssistant.welcomeMessage,
      timestamp: "Ready",
      mode: "Google AI Studio • Semantic RAG",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

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
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: query,
          history: messages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();
      const assistantMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: "assistant",
        content:
          data.reply ||
          "I couldn't reach the endpoint right now, but feel free to explore the case studies above!",
        timestamp: "Verified Context",
        mode:
          data.mode === "google-ai-studio-live"
            ? "Google AI Studio (Gemini 2.0)"
            : "Portfolio RAG Engine",
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "assistant",
          content:
            "Tom scaled the **U-AI Workspace to ~5,000 MAU at Unity**, led the **$4.4B Unity-ironSource post-merger system consolidation**, and served as an **IAF Iron Dome Battery Commander (Major, Res.)**. Ask about any of these pillars!",
          timestamp: "Local Fallback",
          mode: "Resilient Fallback Mode",
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
        content: PORTFOLIO_DATA.aiAssistant.welcomeMessage,
        timestamp: "Ready",
        mode: "Google AI Studio • Semantic RAG",
      },
    ]);
  };

  // Simple markdown bold/bullet formatter for clean rendering
  const renderFormattedContent = (text: string) => {
    return text.split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={i} className="h-2" />;

      const formatBold = (str: string) => {
        const parts = str.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, idx) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong
                key={idx}
                className="font-semibold text-zinc-900 dark:text-white"
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
            <span className="text-indigo-500 dark:text-indigo-400 mt-1">•</span>
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
    <div className="fixed bottom-5 right-5 z-50 print:hidden">
      {/* Chat Modal Panel */}
      {isOpen && (
        <div className="mb-3 w-[92vw] sm:w-[420px] rounded-2xl border border-zinc-200/80 dark:border-zinc-800/90 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-200">
          {/* Header */}
          <div className="px-4 py-3.5 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-sm">
                <Cpu className="h-4 w-4" />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-950" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Ask Tom&apos;s AI
                  </span>
                  <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 text-[10px] font-mono font-medium text-indigo-600 dark:text-indigo-400">
                    AI Studio API
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  Interactive Portfolio Agent • Grounded in Tom&apos;s Experience
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                title="Reset conversation"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-zinc-800 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Ask Tom's AI"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-zinc-800 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="h-[360px] overflow-y-auto p-4 space-y-4 text-xs sm:text-[13px]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.role === "assistant" && (
                  <div className="h-6 w-6 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="h-3.5 w-3.5 text-indigo-500" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 ${
                    m.role === "user"
                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium"
                      : "bg-zinc-100/80 dark:bg-zinc-900/90 border border-zinc-200/70 dark:border-zinc-800/80 text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  <div>{renderFormattedContent(m.content)}</div>
                  {m.mode && (
                    <div className="mt-2 pt-1.5 border-t border-zinc-200/60 dark:border-zinc-800/70 flex items-center justify-between text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                      <span className="flex items-center gap-1">
                        <Terminal className="h-2.5 w-2.5" />
                        {m.mode}
                      </span>
                      <span>{m.timestamp}</span>
                    </div>
                  )}
                </div>

                {m.role === "user" && (
                  <div className="h-6 w-6 rounded-md bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 pl-8">
                <span className="inline-block h-2 w-2 rounded-full bg-indigo-500 animate-ping" />
                <span className="font-mono text-[11px]">
                  Synthesizing from Tom&apos;s architecture & case study graph...
                </span>
              </div>
            )}

            {/* Suggested Prompts */}
            {messages.length <= 2 && !isLoading && (
              <div className="pt-2 space-y-1.5">
                <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Suggested Executive Prompts:
                </p>
                <div className="flex flex-col gap-1.5">
                  {PORTFOLIO_DATA.aiAssistant.suggestedPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => sendMessage(prompt)}
                      className="text-left text-xs px-3 py-2 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:bg-indigo-50/30 dark:hover:bg-indigo-950/20 text-zinc-700 dark:text-zinc-300 transition-all flex items-center justify-between group"
                    >
                      <span>{prompt}</span>
                      <ChevronRight className="h-3.5 w-3.5 text-zinc-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="p-3 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about U-AI (~5K MAU), Token Economics, C2..."
              className="flex-1 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Send question"
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-900 disabled:opacity-40 transition-colors"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Launcher Pill */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="group flex items-center gap-2.5 rounded-full border border-zinc-200/80 dark:border-zinc-700/80 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-3 shadow-xl hover:shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.99] transition-all"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500" />
        </span>
        <Sparkles className="h-4 w-4 text-indigo-400 dark:text-indigo-600" />
        <span className="text-xs sm:text-sm font-semibold tracking-tight">
          {isOpen ? "Close Tom's AI" : "Ask Tom's AI"}
        </span>
      </button>
    </div>
  );
}
