"use client";

import { motion } from "framer-motion";
import { Briefcase, Rocket, Bot } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Services() {
  const { t } = useLanguage();

  const streams = [
    {
      icon: Briefcase,
      label: t("Stream 1", "Stream 1"),
      title: t("Senior Product & Strategy", "Senior Product & Strategy"),
      body: t(
        "Product strategy, architecture decisions, roadmap sharpening, go-to-market validation, ops audits, reporting for management and investors. Hyper-growth substance from 26 months at Gorillas and Getir, 130 use-permit conversions, €2M budget across 16 federal states.",
        "Produkt-Strategie, Architektur-Entscheidungen, Roadmap-Schärfung, Go-to-Market-Validierung, Operations-Audits, Reportings für Geschäftsführung und Investoren. Hyper-Growth-Substanz aus 26 Monaten Gorillas und Getir, 130 Nutzungsänderungen und €2M Budget über 16 Bundesländer."
      ),
    },
    {
      icon: Rocket,
      label: t("Stream 2", "Stream 2"),
      title: t("Co-builder for founders", "Co-Builder für Founder"),
      body: t(
        "Pitch deck from market problem first, financial model stress-tested for investor questions, TAM/SAM/SOM validation, investor relations and outreach sequence, website. Pre-seed to seed. At the table, not from the outside.",
        "Pitch Deck vom Marktproblem aus, Finanzmodell stress-getestet für Investor-Fragen, TAM/SAM/SOM-Validierung, Investor Relations und Outreach-Sequenz, Website. Pre-Seed bis Seed. Mit am Tisch, nicht von außen."
      ),
    },
  ];

  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 font-mono text-sm text-accent">
            {t("Services", "Was ich mache")}
          </h2>
          <h3 className="mb-4 text-2xl font-bold text-foreground-bright md:text-3xl">
            {t("Two streams, one tool", "Zwei Streams, ein Werkzeug")}
          </h3>
          <p className="mb-14 max-w-2xl text-base text-foreground-muted">
            {t(
              "Two areas where I combine hyper-growth substance with agentic engineering.",
              "Zwei Bereiche, in denen ich Hyper-Growth-Substanz mit Agentic Engineering kombiniere."
            )}
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {streams.map((stream, i) => {
            const Icon = stream.icon;
            return (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:border-border-bright sm:p-7"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={18} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-foreground-muted">
                    {stream.label}
                  </span>
                </div>

                <h4 className="mb-3 text-lg font-semibold text-foreground-bright">
                  {stream.title}
                </h4>

                <p className="text-sm leading-relaxed text-foreground">
                  {stream.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Tool block: Agentic Engineering */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 rounded-xl border border-accent/20 bg-gradient-to-br from-accent/5 to-accent2/5 p-6 sm:p-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
              <Bot size={18} />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground-muted">
              {t("My tool", "Mein Werkzeug")}
            </span>
          </div>

          <h4 className="mb-3 text-lg font-semibold text-foreground-bright">
            {t("Agentic Engineering", "Agentic Engineering")}
          </h4>

          <div className="space-y-4 text-sm leading-relaxed text-foreground">
            <p>
              {t(
                "Claude Code, Cursor, and MCP servers as workforce. I don't write production code. I make the decisions the agent can't: what gets built, in what order, with what architecture, against what assumptions.",
                "Claude Code, Cursor und MCP-Server als Workforce. Ich schreibe keinen Production-Code. Ich treffe die Entscheidungen, die der Agent nicht treffen kann: Was wird gebaut, in welcher Reihenfolge, mit welcher Architektur, gegen welche Annahmen."
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
