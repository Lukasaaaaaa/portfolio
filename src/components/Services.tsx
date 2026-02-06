"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Bot,
  Rocket,
  Blocks,
  ShoppingBag,
  Code2,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Workflow,
      title: t("Digital Transformation", "Digitale Transformation"),
      description: t(
        "End-to-end process optimization for companies stuck on Excel, tribal knowledge, and manual workflows.",
        "Ganzheitliche Prozessoptimierung für Unternehmen, die an Excel, Wissensmonopolen und manuellen Workflows hängen."
      ),
    },
    {
      icon: Bot,
      title: t("AI Education & Enablement", "KI-Schulung & Enablement"),
      description: t(
        "Workshops, trend reports, and hands-on AI training. Teaching teams how to actually use AI.",
        "Workshops, Trendberichte und praxisnahe KI-Schulungen. Teams beibringen, wie man KI wirklich nutzt."
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
    {
      icon: ShoppingBag,
      title: t("Shopify Stores", "Shopify Shops"),
      description: t(
        "Full e-commerce setup from store build to operational workflow.",
        "Kompletter E-Commerce-Aufbau vom Shop-Build bis zum operativen Workflow."
      ),
    },
    {
      icon: Code2,
      title: t("Custom Code Solutions", "Individuelle Code-Lösungen"),
      description: t(
        "Python, Streamlit, API integrations, when no-code isn't enough.",
        "Python, Streamlit, API-Integrationen, wenn No-Code nicht ausreicht."
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
          <h3 className="mb-14 text-2xl font-bold text-foreground-bright md:text-3xl">
            {t("What I do", "Was ich mache")}
          </h3>
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
