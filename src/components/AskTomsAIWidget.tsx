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
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export function AskTomsAIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: PORTFOLIO_DATA.aiWidget.welcomeMessage,
      timestamp: "Ready",
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
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          role: "assistant",
          content:
            data.reply ||
            "Feel free to ask about Tom's AI & SaaS product leadership, C2 architecture at mPrest & Elbit, or IAF command experience.",
          timestamp: "Verified",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `fallback-${Date.now()}`,
          role: "assistant",
          content:
            "Tom Deutsch is a **Senior Product Manager & AI Systems Architect** specializing in **Enterprise AI & SaaS**, **Mission-Critical C2 Systems (mPrest & Elbit Systems)**, and **Command Leadership (IAF Major Res. / Iron Dome Battery Commander)**.",
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
        timestamp: "Ready",
      },
    ]);
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
              <strong key={idx} className="font-semibold text-zinc-100">
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
            <span className="text-indigo-400 mt-0.5">•</span>
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
    <div className="fixed bottom-6 right-6 z-50 print:hidden">
      {isOpen && (
        <div className="mb-3.5 w-[92vw] sm:w-[400px] rounded-2xl border border-zinc-800/90 bg-zinc-950/95 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* Header */}
          <div className="px-4 py-3.5 border-b border-zinc-800/80 bg-zinc-900/50 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-700/80 text-indigo-400">
                <Cpu className="h-4 w-4" />
                <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-zinc-950" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold tracking-tight text-zinc-100">
                    {PORTFOLIO_DATA.aiWidget.title}
                  </span>
                  <span className="rounded-md bg-indigo-500/10 border border-indigo-500/25 px-1.5 py-0.5 text-[10px] font-mono text-indigo-300">
                    AI Agent
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  {PORTFOLIO_DATA.aiWidget.subtitle}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                title="Reset conversation"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/80 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close AI Widget"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/80 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[340px] overflow-y-auto p-4 space-y-3.5 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.role === "assistant" && (
                  <div className="h-6 w-6 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="h-3.5 w-3.5 text-indigo-400" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 ${
                    m.role === "user"
                      ? "bg-zinc-100 text-zinc-950 font-medium"
                      : "bg-zinc-900/90 border border-zinc-800/90 text-zinc-300"
                  }`}
                >
                  <div>{renderFormattedContent(m.content)}</div>
                </div>

                {m.role === "user" && (
                  <div className="h-6 w-6 rounded-md bg-zinc-800 text-zinc-200 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-zinc-400 pl-8">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400 animate-ping" />
                <span className="font-mono text-[11px]">
                  Querying portfolio knowledge graph...
                </span>
              </div>
            )}

            {messages.length <= 2 && !isLoading && (
              <div className="pt-2 space-y-1.5">
                <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                  Suggested Questions
                </p>
                <div className="flex flex-col gap-1.5">
                  {PORTFOLIO_DATA.aiWidget.suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="text-left text-xs px-3 py-2 rounded-lg border border-zinc-800/90 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900 text-zinc-300 transition-all flex items-center justify-between group"
                    >
                      <span>{q}</span>
                      <ChevronRight className="h-3.5 w-3.5 text-zinc-500 group-hover:text-zinc-200 group-hover:translate-x-0.5 transition-all shrink-0" />
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
            className="p-3 border-t border-zinc-800/80 bg-zinc-900/40 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about AI platforms, mPrest/Elbit C2, or IAF command..."
              className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
              className="p-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 disabled:opacity-40 transition-colors"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="group flex items-center gap-2.5 rounded-full border border-zinc-700/80 bg-zinc-900/95 hover:bg-zinc-800 text-zinc-100 px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md hover:border-zinc-600 transition-all duration-200"
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
