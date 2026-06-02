"use client";

import { BrainCircuit, Workflow, Rocket } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Services() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: BrainCircuit,
      title: t(
        "AI Strategy & Use-Case Advisory",
        "KI-Strategie & Use-Case-Beratung"
      ),
      body: t(
        "Identification and structured evaluation of AI use cases for mid-market and enterprise. Conception and facilitation of workshops to embed generative AI and AI agents (ChatGPT, Claude) into existing process and sales landscapes. Support for change-management processes during AI adoption.",
        "Identifikation und strukturierte Bewertung von KI-Anwendungsfällen für Mittelstand und Konzern. Konzeption und Moderation von Workshops zur Einbettung von Generativer KI und AI Agents (ChatGPT, Claude) in bestehende Prozess- und Vertriebslandschaften. Begleitung von Change-Management-Prozessen bei KI-Adoption."
      ),
    },
    {
      icon: Workflow,
      title: t(
        "Process Automation & Digitalization",
        "Prozessautomatisierung & Digitalisierung"
      ),
      body: t(
        "Conception and implementation of relational databases, workflow automations, and no-code architectures for operational scaling. Focus areas: Airtable, Zapier, Make, Power Automate, BPMN modeling.",
        "Konzeption und Implementierung relationaler Datenbanken, Workflow-Automatisierungen und No-Code-Architekturen für operative Skalierung. Schwerpunkte: Airtable, Zapier, Make, Power Automate, BPMN-Modellierung."
      ),
    },
    {
      icon: Rocket,
      title: t(
        "Startup Sparring & Business-Model Validation",
        "Startup-Sparring & Geschäftsmodell-Validierung"
      ),
      body: t(
        "Strategic support for founder teams: assessment of business potential, development of targeted use-case portfolios, validation of go-to-market strategies, financial models, and pitch decks for pre-seed and seed rounds.",
        "Strategische Begleitung von Gründerteams: Bewertung von Business-Potenzialen, Entwicklung zielgerichteter Use-Case-Portfolios, Validierung von Go-to-Market-Strategien, Finanzmodelle und Pitch Decks für Pre-Seed- und Seed-Runden."
      ),
    },
  ];

  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent2">
            {t("What I do", "Was ich mache")}
          </h2>
          <h3 className="mb-12 text-2xl font-bold text-foreground-bright md:text-3xl">
            {t(
              "Three areas of focus",
              "Drei Schwerpunkte"
            )}
          </h3>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex flex-col rounded-xl border border-border bg-surface p-7 transition-colors hover:border-border-bright"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/8 text-accent">
                  <Icon size={20} />
                </div>
                <h4 className="mb-3 text-lg font-semibold text-foreground-bright">
                  {pillar.title}
                </h4>
                <p className="text-sm leading-relaxed text-foreground">
                  {pillar.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
