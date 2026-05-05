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
              "Hyper-growth substance plus agentic engineering as the tool",
              "Hyper-Growth-Substanz plus Agentic-Engineering-Werkzeug"
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
                "I'm Lukas Gurny, born 1995 in Berlin. I built my own D2C brand, operationally led one of Europe's fastest q-commerce rollouts at Gorillas, and learned in German energy-transition Mittelstand that every technical solution fails on culture if no one takes adoption seriously. At Gorillas it was 20 to 150 stores in under 18 months, €2 million buildout budget, and 16 federal states. After the Getir acquisition, I led the wind-down of 90+ properties and built the data and reporting structures the C-level used to steer the process.",
                "Ich bin Lukas Gurny, geboren 1995 in Berlin. Ich habe eine eigene D2C-Marke aufgebaut, bei Gorillas einen der schnellsten Q-Commerce-Rollouts Europas operativ verantwortet und im deutschen Energiewende-Mittelstand gelernt, dass jede technische Lösung an Kultur scheitert, wenn niemand Adoption ernst nimmt. Bei Gorillas waren es 20 auf 150 Stores in unter 18 Monaten, €2 Millionen Buildout-Budget und 16 Bundesländer. Nach der Übernahme durch Getir habe ich den Wind-Down von 90+ Liegenschaften geleitet und die Daten- und Reporting-Strukturen gebaut, mit denen das C-Level den Prozess gesteuert hat."
              )}
            </p>

            <p>
              {t(
                "In 2025 my toolkit changed fundamentally. With Claude Code, Cursor, and MCP servers I now ship products and strategy outputs that previously required an engineering or strategy team. I don't write production code myself — my strength isn't typing, it's product decisions, architecture choice, system design, and go-to-market. The agent writes the code. I make the decisions the agent can't. Two products went live this way: BauPilot, a RAG platform for German planning law with self-hosted vector store on Hetzner and 50+ OSINT scrapers across all 16 federal states; and ertragwerk.de, an open tool platform for German real estate investors with full German tax logic and live ECB mortgage rates.",
                "2025 hat sich mein Werkzeugkasten grundlegend geändert. Mit Claude Code, Cursor und MCP-Servern liefere ich heute Produkte und Strategie-Outputs aus, für die früher ein Engineering- oder Strategy-Team nötig gewesen wäre. Ich schreibe keinen Production-Code selbst, meine Stärke ist nicht das Tippen, sondern Produkt-Entscheidungen, Architektur-Wahl, System-Design und Go-to-Market. Den Code schreibt der Agent. Ich treffe die Entscheidungen, die der Agent nicht treffen kann. Zwei Produkte sind dadurch live entstanden: BauPilot, eine RAG-Plattform für deutsches Baurecht mit Self-hosted Vector Store auf Hetzner und 50+ OSINT-Scrapern über alle 16 Bundesländer; und ertragwerk.de, eine Open-Tool-Plattform für deutsche Immobilien-Investoren mit voll-deutscher Steuerlogik und EZB-Live-Bauzinsen."
              )}
            </p>

            <p>
              {t(
                "I work in two clearly separated streams. Senior Product & Strategy mandates for scale-ups that need to make decisions and ship faster than an internal team can be built. And co-builder mandates for pre-seed to seed founders who need pitch deck, financial model, investor relations, and market validation tackled simultaneously, not as an outside consultant but at the table. In parallel I'm doing the M.Sc. in Information Systems & Digital Transformation at the University of Potsdam with focuses on Digital Government, Knowledge Management, Enterprise Architecture, and AI-supported applications. Team player at GC Motzen with handicap 5.",
                "Ich arbeite in zwei klar getrennten Streams. Senior Product & Strategy Mandate für Scale-ups, die schneller Entscheidungen treffen und ausliefern müssen, als ein internes Team aufgebaut werden kann. Und Co-Builder-Mandate für Pre-Seed- bis Seed-Founder, bei denen Pitch Deck, Finanzmodell, Investor Relations und Marktvalidierung gleichzeitig angepackt werden, nicht als Berater von außen, sondern mit am Tisch. Parallel mache ich den Master in Wirtschaftsinformatik & Digitale Transformation an der Universität Potsdam mit Schwerpunkten Digital Government, Wissensmanagement, Enterprise Architecture und AI-gestützte Anwendungen. Mannschaftsspieler im GC Motzen mit Handicap 5."
              )}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
