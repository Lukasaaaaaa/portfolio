"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ClipboardPaste,
  Loader2,
  RotateCcw,
  Sparkles,
  Check,
  X,
  Minus,
  ArrowRight,
  MessageSquare,
  Send,
  Bot,
  User,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

interface CriterionResult {
  requirement: string;
  status: "match" | "partial" | "gap";
  evidence: string;
}

interface FitResult {
  verdict: "strong_fit" | "moderate_fit" | "weak_fit";
  verdict_title: string;
  criteria: CriterionResult[];
  transferable: string | null;
  recommendation: string;
}

interface FollowUpMessage {
  role: "user" | "assistant";
  content: string;
}

const VERDICT_STYLES = {
  strong_fit: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    dot: "bg-emerald-400",
  },
  moderate_fit: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-400",
    dot: "bg-amber-400",
  },
  weak_fit: {
    bg: "bg-red-400/10",
    border: "border-red-400/20",
    text: "text-red-400",
    dot: "bg-red-400",
  },
};

export default function FitCheck() {
  const { t } = useLanguage();

  const STATUS_CONFIG = {
    match: {
      icon: Check,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      iconColor: "text-emerald-400",
      label: t("Strong match", "Starke Übereinstimmung"),
    },
    partial: {
      icon: Minus,
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      iconColor: "text-amber-400",
      label: t("Partial match", "Teilweise Übereinstimmung"),
    },
    gap: {
      icon: X,
      bg: "bg-red-400/10",
      border: "border-red-400/20",
      iconColor: "text-red-400",
      label: t("Gap", "Lücke"),
    },
  };

  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState<FitResult | null>(null);
  const [rawError, setRawError] = useState("");
  const [loading, setLoading] = useState(false);

  // Follow-up state
  const [followUps, setFollowUps] = useState<FollowUpMessage[]>([]);
  const [followUpInput, setFollowUpInput] = useState("");
  const [followUpLoading, setFollowUpLoading] = useState(false);
  const followUpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (followUpRef.current) {
      followUpRef.current.scrollTop = followUpRef.current.scrollHeight;
    }
  }, [followUps]);

  async function handleCheck() {
    if (!jobDescription.trim() || loading) return;
    setLoading(true);
    setResult(null);
    setRawError("");
    setFollowUps([]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: jobDescription, mode: "fit-check" }),
      });
      const data = await res.json();

      try {
        const parsed: FitResult = JSON.parse(data.response);
        if (parsed.verdict && parsed.criteria && parsed.recommendation) {
          setResult(parsed);
        } else {
          setRawError(
            t(
              "Unexpected response format. Please try again.",
              "Unerwartetes Antwortformat. Bitte erneut versuchen."
            )
          );
        }
      } catch {
        setRawError(
          data.response ||
            t(
              "Something went wrong. Please try again.",
              "Etwas ist schiefgelaufen. Bitte erneut versuchen."
            )
        );
      }
    } catch {
      setRawError(
        t(
          "Something went wrong. Please try again.",
          "Etwas ist schiefgelaufen. Bitte erneut versuchen."
        )
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleFollowUp() {
    const msg = followUpInput.trim();
    if (!msg || followUpLoading) return;

    setFollowUpInput("");
    setFollowUps((prev) => [...prev, { role: "user", content: msg }]);
    setFollowUpLoading(true);

    try {
      // Build history: original job description + structured result + any previous follow-ups
      const history: FollowUpMessage[] = [
        { role: "user", content: jobDescription },
        { role: "assistant", content: JSON.stringify(result) },
        ...followUps,
      ];

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: msg,
          mode: "fit-check-followup",
          history,
        }),
      });
      const data = await res.json();
      setFollowUps((prev) => [
        ...prev,
        { role: "assistant", content: data.response || data.error },
      ]);
    } catch {
      setFollowUps((prev) => [
        ...prev,
        {
          role: "assistant",
          content: t(
            "Something went wrong. Please try again.",
            "Etwas ist schiefgelaufen. Bitte erneut versuchen."
          ),
        },
      ]);
    } finally {
      setFollowUpLoading(false);
    }
  }

  function handleReset() {
    setJobDescription("");
    setResult(null);
    setRawError("");
    setFollowUps([]);
    setFollowUpInput("");
  }

  return (
    <section id="fit-check" className="relative px-6 py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
              <ClipboardPaste size={14} className="text-accent" />
              <span className="text-xs font-medium text-accent">
                {t("Honest Fit Assessment", "Ehrliche Fit-Bewertung")}
              </span>
            </div>
          </div>
          <h3 className="mb-4 text-center text-2xl font-bold text-foreground-bright md:text-3xl">
            {t("Am I the right fit?", "Passe ich zu dieser Stelle?")}
          </h3>
          <p className="mx-auto mb-8 max-w-lg text-center text-base">
            {t(
              "Paste a job description. Get an honest assessment of whether I'm the right person, including when I'm not.",
              "Füge eine Stellenbeschreibung ein. Erhalte eine ehrliche Einschätzung, ob ich die richtige Person bin, auch wenn ich es nicht bin."
            )}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-hidden rounded-2xl border border-accent/20 bg-surface shadow-[0_0_60px_-15px_rgba(76,123,217,0.15)]"
        >
          {/* Gradient accent line */}
          <div className="h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
          {!result && !rawError ? (
            <div className="p-6">
              <label className="mb-2 block text-xs font-medium text-foreground-muted">
                {t(
                  "Job description to analyze",
                  "Stellenbeschreibung zur Analyse"
                )}
              </label>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder={t(
                  "Paste the full job description here...",
                  "Füge hier die vollständige Stellenbeschreibung ein..."
                )}
                rows={8}
                className="mb-4 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed text-foreground-bright placeholder:text-foreground-muted/40 focus:border-accent2/50 focus:outline-none focus:shadow-[0_0_12px_-4px_rgba(91,141,238,0.2)]"
              />
              <button
                onClick={handleCheck}
                disabled={!jobDescription.trim() || loading}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25 disabled:opacity-40"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {t("Analyzing requirements...", "Anforderungen analysieren...")}
                  </>
                ) : (
                  <>
                    <Sparkles size={16} />
                    {t("Check fit", "Fit prüfen")}
                  </>
                )}
              </button>
            </div>
          ) : rawError ? (
            <div className="p-6">
              <p className="mb-4 text-sm text-foreground">{rawError}</p>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
              >
                <RotateCcw size={14} />
                {t("Try again", "Erneut versuchen")}
              </button>
            </div>
          ) : result ? (
            <div>
              {/* Verdict header */}
              <div
                className={`border-b px-6 py-5 ${VERDICT_STYLES[result.verdict].bg} ${VERDICT_STYLES[result.verdict].border}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`h-3 w-3 rounded-full ${VERDICT_STYLES[result.verdict].dot}`}
                  />
                  <h4
                    className={`text-lg font-semibold ${VERDICT_STYLES[result.verdict].text}`}
                  >
                    {result.verdict_title}
                  </h4>
                </div>
              </div>

              {/* Criteria */}
              <div className="divide-y divide-border">
                {result.criteria.map((criterion, i) => {
                  const config = STATUS_CONFIG[criterion.status];
                  const Icon = config.icon;
                  return (
                    <div key={i} className="px-6 py-4">
                      <div className="mb-2 flex items-start gap-3">
                        <div
                          className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${config.bg} ${config.border} border`}
                        >
                          <Icon size={12} className={config.iconColor} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-foreground-bright">
                              {criterion.requirement}
                            </span>
                            <span
                              className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${config.bg} ${config.iconColor}`}
                            >
                              {config.label}
                            </span>
                          </div>
                          <p className="mt-1 text-sm leading-relaxed text-foreground">
                            {criterion.evidence}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Transferable skills */}
              {result.transferable && (
                <div className="border-t border-border px-6 py-4">
                  <div className="flex items-start gap-3">
                    <ArrowRight
                      size={14}
                      className="mt-0.5 flex-shrink-0 text-accent"
                    />
                    <div>
                      <span className="text-xs font-medium text-accent">
                        {t("What Transfers", "Was sich übertragen lässt")}
                      </span>
                      <p className="mt-1 text-sm leading-relaxed text-foreground">
                        {result.transferable}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Recommendation */}
              <div className="border-t border-border bg-background/50 px-6 py-5">
                <div className="flex items-start gap-3">
                  <MessageSquare
                    size={14}
                    className="mt-0.5 flex-shrink-0 text-foreground-muted"
                  />
                  <div>
                    <span className="text-xs font-medium text-foreground-muted">
                      {t("My Recommendation", "Meine Empfehlung")}
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-foreground-bright">
                      {result.recommendation}
                    </p>
                  </div>
                </div>
              </div>

              {/* Follow-up chat */}
              <div className="border-t border-border">
                {followUps.length > 0 && (
                  <div
                    ref={followUpRef}
                    className="max-h-[250px] overflow-y-auto px-6 py-4"
                  >
                    <div className="space-y-3">
                      {followUps.map((msg, i) => (
                        <div
                          key={i}
                          className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                        >
                          <div
                            className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${
                              msg.role === "user"
                                ? "bg-border-bright"
                                : "bg-gradient-to-br from-accent/20 to-accent2/20"
                            }`}
                          >
                            {msg.role === "user" ? (
                              <User size={10} className="text-foreground-muted" />
                            ) : (
                              <Bot size={10} className="text-accent" />
                            )}
                          </div>
                          <div
                            className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                              msg.role === "user"
                                ? "bg-accent text-white"
                                : "bg-background text-foreground"
                            }`}
                          >
                            {msg.content}
                          </div>
                        </div>
                      ))}
                      {followUpLoading && (
                        <div className="flex gap-3">
                          <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent2/20">
                            <Bot size={10} className="text-accent" />
                          </div>
                          <div className="rounded-2xl bg-background px-4 py-2.5">
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
                )}

                {/* Follow-up input */}
                <div className="px-5 py-3">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleFollowUp();
                    }}
                    className="flex items-center gap-3"
                  >
                    <input
                      type="text"
                      value={followUpInput}
                      onChange={(e) => setFollowUpInput(e.target.value)}
                      placeholder={t(
                        "Ask a follow-up about this assessment...",
                        "Stelle eine Nachfrage zu dieser Bewertung..."
                      )}
                      disabled={followUpLoading}
                      className="flex-1 rounded-xl border border-border bg-background px-4 py-2 text-sm text-foreground-bright placeholder:text-foreground-muted/40 focus:border-accent/50 focus:outline-none disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={!followUpInput.trim() || followUpLoading}
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white transition-all hover:shadow-lg hover:shadow-accent/25 disabled:opacity-30"
                    >
                      <Send size={14} />
                    </button>
                  </form>
                </div>
              </div>

              {/* Reset */}
              <div className="border-t border-border px-6 py-4">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
                >
                  <RotateCcw size={14} />
                  {t("Try another job", "Anderen Job testen")}
                </button>
              </div>
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
