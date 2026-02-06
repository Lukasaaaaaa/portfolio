"use client";

import { Sparkles, ClipboardCheck } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Navigation() {
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a
          href="#"
          className="font-mono text-sm tracking-wide text-foreground-bright transition-colors hover:text-accent"
        >
          LG
        </a>

        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <div className="flex items-center rounded-lg border border-accent/20 bg-accent/5 text-[11px] font-medium">
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1.5 transition-colors ${
                lang === "en"
                  ? "text-foreground-bright"
                  : "text-foreground-muted hover:text-foreground-bright"
              }`}
            >
              EN
            </button>
            <span className="text-border-bright">|</span>
            <button
              onClick={() => setLang("de")}
              className={`px-2.5 py-1.5 transition-colors ${
                lang === "de"
                  ? "text-foreground-bright"
                  : "text-foreground-muted hover:text-foreground-bright"
              }`}
            >
              DE
            </button>
          </div>

          <a
            href="#ai-about"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-1.5 text-xs font-medium text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
          >
            <Sparkles size={12} />
            {t("Ask AI", "KI fragen")}
          </a>
          <a
            href="#fit-check"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-1.5 text-xs font-medium text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
          >
            <ClipboardCheck size={12} />
            Fit Check
          </a>
        </div>
      </div>
    </nav>
  );
}
