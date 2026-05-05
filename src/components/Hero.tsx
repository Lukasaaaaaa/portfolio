"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-accent2/5 blur-[120px]" />
      </div>

      <div className="relative max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <Image
              src="/headshot.png"
              alt="Lukas Gurny"
              width={120}
              height={120}
              className="rounded-full border-2 border-border"
              priority
            />
            <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-background bg-success animate-pulse" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5"
        >
          <span className="text-xs text-foreground-muted">
            {t("Available for mandates", "Verfügbar für Mandate")} &middot; Berlin
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-foreground-bright md:text-7xl"
        >
          Product & Strategy <span className="text-foreground-muted">|</span> Agentic Engineering
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-6 max-w-lg text-lg text-accent md:text-xl"
        >
          {t(
            "Berlin. Ex-Gorillas. Scaled 20 to 150 stores across DACH. Today I deliver products and strategy with AI agents as workforce.",
            "Berlin. Ex-Gorillas. 20 auf 150 Stores in DACH skaliert. Heute liefere ich Produkte und Strategie mit AI-Agenten als Workforce."
          )}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-10 max-w-lg text-base leading-relaxed"
        >
          {t(
            "Three use cases. Scale-ups that need senior product & strategy on demand. Pre-seed to seed founders looking for a co-builder for pitch, financial model, and investor relations. Or a complete B2B SaaS that ships to production in two months via agentic engineering.",
            "Drei Anwendungsfälle. Scale-ups, die Senior Product & Strategy on demand brauchen. Pre-Seed- bis Seed-Founder, die einen Co-Builder für Pitch, Finanzmodell und Investor Relations suchen. Oder ein vollständiges B2B-SaaS, das mit Agentic Engineering in zwei Monaten in Produktion geht."
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href="/Lebenslauf_Lukas_Gurny.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground-bright transition-all hover:border-border-bright"
          >
            {t("Download CV", "Lebenslauf herunterladen")}
          </a>
          <a
            href="mailto:luca@gurny.de?subject=Anfrage%20via%20lukasgurny.com"
            className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
          >
            {t("Get in touch", "Kontakt aufnehmen")}
          </a>
        </motion.div>
      </div>

      {/* Scroll to explore */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-10 hidden flex-col items-center gap-2 min-[900px]:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-foreground-muted">
          {t("Scroll to explore", "Nach unten scrollen")}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <MoveDown size={14} className="text-foreground-muted" />
        </motion.div>
      </motion.a>
    </section>
  );
}
