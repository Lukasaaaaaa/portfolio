"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Sparkles, Bot, User } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AskAI() {
  const { t } = useLanguage();

  const SUGGESTIONS = [
    t("What's Lukas's strongest skill?", "Was ist Lukas' größte Stärke?"),
    t("Tell me about his startup experience", "Erzähl mir von seiner Startup-Erfahrung"),
    t("What tools does he use daily?", "Welche Tools nutzt er täglich?"),
    t("What makes him unique as a consultant?", "Was macht ihn als Berater einzigartig?"),
    t("Describe his role at Gorillas", "Beschreibe seine Rolle bei Gorillas"),
    t("What are his career goals?", "Was sind seine Karriereziele?"),
  ];

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: t(
        "Hey! I'm Lukas's AI assistant, I know everything about his experience, skills, and background. Ask me anything!",
        "Hey! Ich bin Lukas' KI-Assistent, ich weiß alles über seine Erfahrung, Fähigkeiten und seinen Hintergrund. Frag mich alles!"
      ),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  async function handleSend(text?: string) {
    const msg = text || input.trim();
    if (!msg || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: msg }]);
    setLoading(true);

    try {
      // Send full conversation history (skip the initial greeting)
      const historyForApi = [...messages.slice(1), { role: "user" as const, content: msg }];
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: msg,
          mode: "chat",
          history: historyForApi.slice(0, -1),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response || data.error },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: t(
            "Sorry, something went wrong. Please try again.",
            "Entschuldigung, etwas ist schiefgelaufen. Bitte versuche es erneut."
          ),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="ai-about" className="relative px-6 py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.03] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs font-medium text-accent">
              {t("AI-Powered", "KI-gestützt")}
            </span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-foreground-bright md:text-3xl">
            {t("Ask AI about me", "KI über mich fragen")}
          </h2>
          <p className="mx-auto max-w-md text-base text-foreground-muted">
            {t(
              "Curious about my experience? This AI agent knows my full background, ask it anything about my skills, projects, or career.",
              "Neugierig auf meine Erfahrung? Dieser KI-Agent kennt meinen kompletten Hintergrund, frag ihn alles über meine Skills, Projekte oder Karriere."
            )}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-hidden rounded-2xl border border-border bg-surface"
        >
          {/* Chat header */}
          <div className="flex items-center gap-3 border-b border-border px-6 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent2">
              <Bot size={14} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground-bright">
                {t("Lukas's AI Agent", "Lukas' KI-Agent")}
              </p>
              <p className="text-[11px] text-foreground-muted">
                {t(
                  "Powered by GPT-4o · Knows my full profile",
                  "Powered by GPT-4o · Kennt mein gesamtes Profil"
                )}
              </p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="text-[11px] text-foreground-muted">Online</span>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="h-[350px] overflow-y-auto px-6 py-5"
          >
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full ${
                      msg.role === "user"
                        ? "bg-border-bright"
                        : "bg-gradient-to-br from-accent/20 to-accent2/20"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <User size={12} className="text-foreground-muted" />
                    ) : (
                      <Bot size={12} className="text-accent" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-accent text-white"
                        : "bg-background text-foreground"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-3">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent2/20">
                    <Bot size={12} className="text-accent" />
                  </div>
                  <div className="rounded-2xl bg-background px-4 py-3">
                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground-muted [animation-delay:0ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground-muted [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground-muted [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && (
            <div className="border-t border-border/50 px-6 py-3">
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="rounded-full border border-accent/25 bg-accent/5 px-3 py-1 text-[11px] text-foreground-bright transition-all hover:border-accent/40 hover:bg-accent/10"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-border px-5 py-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t(
                  "Ask anything about Lukas...",
                  "Frag alles über Lukas..."
                )}
                disabled={loading}
                className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground-bright placeholder:text-foreground-muted/40 focus:border-accent/50 focus:outline-none focus:shadow-[0_0_12px_-4px_rgba(139,92,246,0.2)] disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white transition-all hover:shadow-lg hover:shadow-accent/25 disabled:opacity-30"
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
