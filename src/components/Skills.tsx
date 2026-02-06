"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: "Tools & Tech",
      skills: [
        "Python",
        "Airtable",
        "Zapier",
        "Shopify",
        "Streamlit",
        "Claude Code",
        "APIs",
        "Excel",
      ],
    },
    {
      title: t("Methods", "Methoden"),
      skills: [
        "Scrum (PSM I)",
        "PRINCE 2",
        "Kanban",
        "OKR",
        "Lean",
        "Design Thinking",
      ],
    },
    {
      title: t("Domains", "Domänen"),
      skills: [
        t("Digital Transformation", "Digitale Transformation"),
        t("Process Optimization", "Prozessoptimierung"),
        t("AI Enablement", "KI-Enablement"),
        "Change Management",
        "E-Commerce",
        "Investor Relations",
      ],
    },
    {
      title: t("Languages", "Sprachen"),
      skills: [
        t("German (native)", "Deutsch (Muttersprache)"),
        t("English (bilingual)", "Englisch (bilingual)"),
        t("French (basic)", "Französisch (Grundkenntnisse)"),
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
            {t("Skills", "Fähigkeiten")}
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
            {t("Beyond work", "Neben der Arbeit")}
          </h4>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                emoji: "🎣",
                title: t("Fishing", "Angeln"),
                desc: t(
                  "Record: 81 cm pike. Lessons in patience and focus.",
                  "Rekord: 81 cm Hecht. Lektionen in Geduld und Fokus."
                ),
              },
              {
                emoji: "♟️",
                title: t("Chess & Strategy", "Schach & Strategie"),
                desc: t(
                  "Pattern recognition and long-term thinking.",
                  "Mustererkennung und langfristiges Denken."
                ),
              },
              {
                emoji: "🍳",
                title: t("Cooking", "Kochen"),
                desc: t(
                  "Process optimization with immediate delicious results.",
                  "Prozessoptimierung mit sofort leckeren Ergebnissen."
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
