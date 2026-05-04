"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 font-mono text-sm text-accent">
            {t("About", "Über mich")}
          </h2>
          <h3 className="mb-8 text-2xl font-bold text-foreground-bright md:text-3xl">
            {t(
              "Operations substance plus agentic engineering",
              "Operations-Substanz plus Agentic Engineering"
            )}
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-border bg-surface p-6 sm:p-8"
        >
          <div className="space-y-5 text-base leading-relaxed">
            <p>
              {t(
                "Senior Operator and Product/Strategy Lead based in Berlin. At Gorillas I led the scale-up from 20 to 150 stores with €2M buildout budget across 16 German federal states. 130 use-permit conversions and 90+ properties in post-merger wind-down after Getir acquisition.",
                "Senior Operator und Product/Strategy Lead in Berlin. Bei Gorillas operativ verantwortlich für die Skalierung von 20 auf 150 Standorte mit €2M Buildout-Budget über 16 Bundesländer. 130 Nutzungsänderungen, 90+ Liegenschaften im Post-Merger-Wind-Down nach Übernahme durch Getir."
              )}
            </p>

            <p>
              {t(
                "Today I combine that operations substance with agentic engineering (Claude Code, Cursor, MCP). I make product decisions, define architecture, and ship with AI agents as workforce. Two products live: ertragwerk.de and BauPilot.",
                "Heute kombiniere ich diese Operations-Substanz mit Agentic Engineering (Claude Code, Cursor, MCP). Ich treffe Produkt-Entscheidungen, definiere Architektur und liefere mit AI-Agenten als Workforce. Zwei eigene Produkte live: ertragwerk.de und BauPilot."
              )}
            </p>

            <p>
              {t(
                "M.Sc. in Information Systems & Digital Transformation at University of Potsdam. Single-digit handicap golfer at GC Motzen, German Golf Association.",
                "Master Wirtschaftsinformatik & Digitale Transformation an der Universität Potsdam. Mannschaftsspieler im GC Motzen (Handicap 5)."
              )}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
