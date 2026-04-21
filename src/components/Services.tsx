"use client";

import { motion } from "framer-motion";
import {
  Building2,
  FileCheck,
  FileText,
  Workflow,
  Rocket,
  Blocks,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t("Expansion Compliance", "Expansion Compliance"),
      description: t(
        "Multi-site rollout compliance end-to-end: change-of-use, building permits, acoustics, fire safety. The layer that made Gorillas' 20-to-150 rollout possible.",
        "Multi-Site-Rollout-Compliance End-to-End: Nutzungsänderung, Bauantrag, Schall, Brandschutz. Der Layer, der den Gorillas-Rollout von 20 auf 150 möglich gemacht hat."
      ),
    },
    {
      icon: FileCheck,
      title: t("Pre-LOI Site Check", "Pre-LOI-Standortcheck"),
      description: t(
        "Traffic-light verdict before you sign the LOI: B-plan, parking, acoustics, fire risk. Kills dead sites in 10 working days.",
        "Ampel vor LOI-Unterschrift: B-Plan, Stellplatz, Schall, Brandschutz. Sortiert tote Standorte in 10 Werktagen aus."
      ),
    },
    {
      icon: FileText,
      title: t("Lease Redlines", "Mietvertrags-Redlines"),
      description: t(
        "Compliance clauses that protect the tenant: withdrawal on missing permit, conversion rights, restoration, landlord cost allocation.",
        "Compliance-Klauseln, die den Mieter schützen: Rücktritt bei fehlender Genehmigung, Umbaurecht, Rückbau, Vermieter-Kostentragung."
      ),
    },
    {
      icon: Workflow,
      title: t("Digital Transformation", "Digitale Transformation"),
      description: t(
        "End-to-end process optimization for companies stuck on Excel, tribal knowledge, and manual workflows.",
        "Ganzheitliche Prozessoptimierung für Unternehmen, die an Excel, Wissensmonopolen und manuellen Workflows hängen."
      ),
    },
    {
      icon: Rocket,
      title: t("Startup Sparring", "Startup Sparring"),
      description: t(
        "Hands-on co-building for founders. Websites, pitch decks, investor relations, market validation.",
        "Hands-on Co-Building für Gründer. Websites, Pitch Decks, Investor Relations, Marktvalidierung."
      ),
    },
    {
      icon: Blocks,
      title: "No-Code / Low-Code",
      description: t(
        "Airtable, Zapier, and custom API integrations to eliminate manual work and information silos.",
        "Airtable, Zapier und individuelle API-Integrationen zur Beseitigung manueller Arbeit und Informationssilos."
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
            {t("Services", "Leistungen")}
          </h2>
          <h3 className="mb-4 text-2xl font-bold text-foreground-bright md:text-3xl">
            {t("What I do", "Was ich mache")}
          </h3>
          <p className="mb-14 max-w-2xl text-base text-foreground-muted">
            {t(
              "Enabler and hands-on generalist. I go where the pain is, close the gap, and leave the team able to run it without me.",
              "Enabler und Hands-on-Generalist. Ich gehe dahin, wo es weh tut, schließe die Lücke und übergebe so, dass das Team es ohne mich weiterführen kann."
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
