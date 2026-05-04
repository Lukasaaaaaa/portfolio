"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: "Agentic Engineering",
      skills: [
        "Claude Code",
        "Cursor",
        t("MCP servers", "MCP-Server"),
        t("Spec-driven development", "Spec-driven Development"),
        t("Multi-agent orchestration", "Multi-Agent-Orchestrierung"),
        "Prompt Engineering",
      ],
    },
    {
      title: t("No-Code & Low-Code", "No-Code & Low-Code"),
      skills: [
        "Airtable",
        "Zapier",
        "Make",
        "Shopify",
        t("API integrations", "API-Integrationen"),
      ],
    },
    {
      title: t("Data & Analysis", "Daten & Analyse"),
      skills: [
        t("Excel (advanced)", "Excel (fortgeschritten)"),
        t("SQL (basics)", "SQL (Grundkenntnisse)"),
        t("Power BI (basics)", "Power BI (Grundkenntnisse)"),
        t("Power Automate (basics)", "Power Automate (Grundkenntnisse)"),
      ],
    },
    {
      title: t("Methods", "Methoden"),
      skills: [
        "Scrum (PSM I)",
        t("Agile project management", "Agiles Projektmanagement"),
        "BPMN",
        "OKR",
        "Lean",
        "Design Thinking",
      ],
    },
    {
      title: t("Operational Focus", "Operative Schwerpunkte"),
      skills: [
        t("Multi-site scaling in hyper-growth", "Multi-Site-Skalierung in Hyper-Growth"),
        t("Operations Excellence", "Operations Excellence"),
        t("Digital Transformation", "Digital Transformation"),
        t("Mid-market change management", "Change Management im Mittelstand"),
        t("Agentic AI in operational workflows", "Agentic AI in operativen Workflows"),
        t("Post-merger integration", "Post-Merger Integration"),
        t("Stakeholder management", "Stakeholder-Management"),
      ],
    },
    {
      title: t("Languages", "Sprachen"),
      skills: [
        t("German (native, C2)", "Deutsch (Muttersprache, C2)"),
        t("English (full professional, C1)", "Englisch (verhandlungssicher, C1)"),
        t("French (A2)", "Französisch (A2)"),
      ],
    },
  ];

  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 font-mono text-sm text-accent">
            {t("Skills", "Skills")}
          </h2>
          <h3 className="mb-14 text-2xl font-bold text-foreground-bright md:text-3xl">
            {t("What I work with", "Womit ich arbeite")}
          </h3>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground-muted">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm transition-all hover:border-accent/30 hover:text-foreground-bright hover:shadow-[0_0_12px_-4px_rgba(76,123,217,0.2)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-20 border-t border-border pt-14"
        >
          <h4 className="mb-8 text-xs font-semibold uppercase tracking-widest text-foreground-muted">
            {t("Sport", "Sport")}
          </h4>
          <div className="grid gap-4 sm:grid-cols-4">
            {[
              {
                emoji: "⛳",
                title: "Golf",
                desc: t(
                  "Handicap 5. Team player at GC Motzen, German Golf Association.",
                  "Handicap 5. Mannschaftsspieler im GC Motzen, DGV."
                ),
              },
              {
                emoji: "🥾",
                title: "Mammutmarsch",
                desc: t(
                  "Finisher: 100 km in 24 hours.",
                  "Absolviert: 100 km in 24 Stunden."
                ),
              },
              {
                emoji: "🎣",
                title: t("Fishing", "Angeln"),
                desc: t(
                  "Patience and focus.",
                  "Geduld und Fokus."
                ),
              },
              {
                emoji: "🍳",
                title: t("Cooking", "Kochen"),
                desc: t(
                  "Process optimization with edible results.",
                  "Prozessoptimierung mit essbarem Ergebnis."
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-surface p-5 transition-all hover:border-border-bright"
              >
                <p className="mb-2 text-xl">{item.emoji}</p>
                <p className="text-sm font-medium text-foreground-bright">
                  {item.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-foreground-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
