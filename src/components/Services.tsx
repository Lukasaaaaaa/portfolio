"use client";

import { motion } from "framer-motion";
import { Briefcase, Rocket, Bot, Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Services() {
  const { t } = useLanguage();

  const streams = [
    {
      icon: Briefcase,
      label: t("Stream 1", "Stream 1"),
      title: t("Senior Product & Strategy", "Senior Product & Strategy"),
      tagline: t(
        "For scale-ups that need a senior operator on demand.",
        "Für Scale-ups, die einen Senior Operator on-demand brauchen."
      ),
      description: t(
        "Scale-ups reach a point where speed decides over growth, but the team isn't yet large enough to make every decision internally. I cover the senior gap on day rate or retainer: product strategy, architecture decisions, roadmap sharpening, go-to-market validation. The hyper-growth proof comes from 26 months at Gorillas and Getir, 130 use-permit conversions, and €2M budget across 16 federal states.",
        "Scale-ups erreichen einen Punkt, an dem Geschwindigkeit über Wachstum entscheidet, aber das Team noch nicht groß genug ist, um jede Entscheidung intern zu treffen. Ich übernehme die Senior-Lücke auf Tagessatz oder Retainer: Produkt-Strategie, Architektur-Entscheidungen, Roadmap-Schärfung, Go-to-Market-Validierung. Mein Hyper-Growth-Beleg kommt aus 26 Monaten Gorillas und Getir, 130 Nutzungsänderungen und €2M Budget über 16 Bundesländer."
      ),
      deliverablesTitle: t("What you get", "Was du bekommst"),
      deliverables: [
        t(
          "Product and strategy reviews with a clear recommendation, not a list of options",
          "Produkt- und Strategie-Reviews mit klarer Empfehlung, nicht mit Optionen"
        ),
        t(
          "Roadmap and prioritization sharpening for founders and Heads of Product",
          "Roadmap- und Prioritäts-Schärfung für Founder und Heads of Product"
        ),
        t(
          "Operations audits with concrete execution plans",
          "Operations-Audits mit konkreten Ausführungs-Plänen"
        ),
        t(
          "Reporting for management and investors",
          "Reportings für Geschäftsführung und Investoren"
        ),
      ],
      pricing: t(
        "Day rate or monthly retainer.",
        "Tagessatz oder monatlicher Retainer."
      ),
    },
    {
      icon: Rocket,
      label: t("Stream 2", "Stream 2"),
      title: t("Co-builder for founders", "Co-Builder für Founder"),
      tagline: t(
        "For pre-seed and seed founders who need an operator.",
        "Für Pre-Seed- und Seed-Founder, die einen Operator brauchen."
      ),
      description: t(
        "You have the idea, the technical knowledge, maybe a prototype. What's missing is everything in between: story, investor materials, numbers, market validation. I'm not the consultant who delivers a slide deck and disappears. I'm the operator who sits at the table until the money is in.",
        "Du hast die Idee, das technische Wissen, vielleicht einen Prototypen. Was fehlt, ist alles dazwischen: Story, Investoren-Material, Zahlen, Marktvalidierung. Ich bin nicht der Berater, der einen Foliensatz liefert und verschwindet. Ich bin der Operator, der mit am Tisch sitzt, bis das Geld da ist."
      ),
      deliverablesTitle: t("What you get", "Was du bekommst"),
      deliverables: [
        t(
          "Pitch deck that starts from the market problem, not the technology",
          "Pitch Deck, das vom Marktproblem startet, nicht von der Technologie"
        ),
        t(
          "Financial model stress-tested against investor questions",
          "Finanzmodell, stress-getestet auf Investor-Fragen"
        ),
        t(
          "TAM/SAM/SOM validation with sources",
          "TAM/SAM/SOM-Validierung mit Quellen"
        ),
        t(
          "Investor relations strategy including outreach sequence",
          "Investor-Relations-Strategie inklusive Outreach-Sequenz"
        ),
        t(
          "Website, because credibility doesn't exist without one",
          "Website, weil ohne keine Glaubwürdigkeit"
        ),
      ],
      pricing: t(
        "Day rate or equity component for long-term mandates.",
        "Tagessatz oder Equity-Komponente bei langfristigen Mandaten."
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
            {t("What I do", "Was ich mache")}
          </h3>
          <p className="mb-14 max-w-3xl text-base text-foreground-muted">
            {t(
              "Two streams, one tool. Senior mandates on day rate and co-builder mandates for founders. What connects them: I deliver with agentic engineering what classical teams deliver in many times the time.",
              "Zwei Streams, ein Werkzeug. Senior-Mandate im Tagessatz und Co-Builder-Mandate für Founder. Was sie verbindet: ich liefere mit Agentic Engineering, was klassische Teams in der x-fachen Zeit liefern."
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

                <h4 className="mb-1 text-lg font-semibold text-foreground-bright">
                  {stream.title}
                </h4>
                <p className="mb-4 text-sm text-accent">
                  {stream.tagline}
                </p>

                <p className="mb-5 text-sm leading-relaxed text-foreground">
                  {stream.description}
                </p>

                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground-muted">
                  {stream.deliverablesTitle}
                </p>
                <ul className="mb-6 flex-1 space-y-2">
                  {stream.deliverables.map((d, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 text-sm leading-relaxed text-foreground"
                    >
                      <Check
                        size={14}
                        className="mt-1 flex-shrink-0 text-accent"
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <p className="border-t border-border pt-4 text-xs text-foreground-muted">
                  <span className="font-semibold uppercase tracking-widest">
                    {t("Pricing", "Pricing")}:
                  </span>{" "}
                  {stream.pricing}
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

          <h4 className="mb-1 text-lg font-semibold text-foreground-bright">
            {t("Agentic Engineering", "Agentic Engineering")}
          </h4>
          <p className="mb-5 text-sm text-accent">
            {t(
              "How I deliver both streams.",
              "Wie ich beide Streams liefere."
            )}
          </p>

          <div className="space-y-4 text-sm leading-relaxed text-foreground">
            <p>
              {t(
                "I use Claude Code, Cursor, and MCP servers as workforce. Concretely: BauPilot is a platform with its own PostGIS stack, 50+ OSINT scrapers, and RAG pipeline on Hetzner, built by one person in two months. ertragwerk.de has six calculators, 31 city pages, and full German tax logic, built by the same person in one month. I don't write production code. I make the decisions the agent can't: what gets built, in what order, with what architecture, against what assumptions.",
                "Ich nutze Claude Code, Cursor und MCP-Server als Workforce. Konkret: BauPilot ist eine Plattform mit eigenem PostGIS-Stack, 50+ OSINT-Scrapern und RAG-Pipeline auf Hetzner, gebaut von einer Person in zwei Monaten. ertragwerk.de hat sechs Rechner, 31 Städte-Seiten und voll-deutsche Steuerlogik, gebaut von derselben Person in einem Monat. Ich schreibe keinen Production-Code. Ich treffe die Entscheidungen, die der Agent nicht treffen kann: Was wird gebaut, in welcher Reihenfolge, mit welcher Architektur, gegen welche Annahmen."
              )}
            </p>
            <p>
              {t(
                "For mandates this means: investor materials, data pipelines, internal tools, and process systems are produced at a speed that wouldn't be possible without agentic engineering.",
                "Für Mandate heißt das: Investorenmaterial, Datenpipelines, interne Tools und Prozess-Systeme entstehen in einer Geschwindigkeit, die ohne Agentic Engineering nicht möglich wäre."
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
