"use client";

import { motion } from "framer-motion";
import { Building2, Bot, Rocket } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t("Multi-Site Operations", "Multi-Site Operations"),
      description: t(
        "Pre-LOI site checks, lease redlines, end-to-end use-permit conversions for multi-site operators scaling in Germany. Coordinating architects, acoustics consultants, and fire safety engineers. Playbook from 130 conversions at Gorillas.",
        "Pre-LOI Site-Checks, Mietvertrags-Redlines, end-to-end Nutzungsänderungen für Multi-Site-Operatoren in Retail, F&B, Fitness. Architekten, Schallgutachter und Brandschutz-Ingenieure koordiniert. Playbook aus 130 Nutzungsänderungen bei Gorillas."
      ),
    },
    {
      icon: Bot,
      title: t("Agentic Product Building", "Agentic Product Building"),
      description: t(
        "End-to-end product delivery with Claude Code, Cursor, MCP. Concept, architecture, system design, deployment. I don't write production code. Two products live: ertragwerk.de, BauPilot.",
        "Eigenständige Produkt-Auslieferung mit Claude Code, Cursor, MCP. Konzept, Architektur, System-Design, Auslieferung. Kein Production-Code. Zwei eigene Produkte live: ertragwerk.de, BauPilot."
      ),
    },
    {
      icon: Rocket,
      title: t("Startup Sparring", "Startup Sparring"),
      description: t(
        "Hands-on co-builder mandates for pre-seed to seed founders: pitch decks, investor strategy, TAM/SAM/SOM validation, financial models, go-to-market. Hands-on, not advisory from the outside.",
        "Co-Builder-Mandate für Pre-Seed bis Seed: Pitch Decks, Investorenstrategie, TAM/SAM/SOM-Validierung, Finanzmodelle, Go-to-Market. Hands-on, nicht Beratung von außen."
      ),
    },
  ];

  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
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
          <p className="mb-14 max-w-2xl text-base text-foreground-muted">
            {t(
              "Three tracks, one thread: operational substance plus agentic engineering.",
              "Drei Tätigkeitsfelder, ein roter Faden: Operations-Substanz plus Agentic Engineering."
            )}
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group rounded-xl border border-border bg-surface p-5 transition-all hover:border-border-bright"
              >
                <Icon
                  size={20}
                  className="mb-3 text-accent transition-colors group-hover:text-accent-hover"
                />
                <h4 className="mb-1.5 text-sm font-semibold text-foreground-bright">
                  {service.title}
                </h4>
                <p className="text-xs leading-relaxed text-foreground-muted">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
