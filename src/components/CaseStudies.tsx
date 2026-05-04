"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export default function CaseStudies() {
  const { t } = useLanguage();

  const caseStudies = [
    {
      client: "Gorillas / Getir",
      title: t(
        "From Excel chaos to single source of truth",
        "Vom Excel-Chaos zur Single Source of Truth"
      ),
      subtitle: t(
        "130 use-permit conversions, €2M budget, 16 federal states.",
        "130 Nutzungsänderungen, €2M Budget, 16 Bundesländer."
      ),
      context: t(
        "Gorillas in mid hyper-growth: stores opening faster than operations could keep up. I grew into a role no one had systematically owned before.",
        "Gorillas mitten im Hyper-Growth, Stores eröffneten schneller als die Operationen hinterherkamen. Ich bin in eine Rolle reingewachsen, die vorher niemand systematisch verantwortet hatte."
      ),
      problem: null,
      solution: t(
        "Built an Airtable live dashboard centralizing all 130 use-permit conversions into a single source of truth. Legal, Real Estate, and Ops worked off the same data for the first time. In parallel, I built up enough depth in German building code and fire safety law to become the internal reference across 16 federal states.",
        "Ich habe ein Airtable-Live-Dashboard aufgebaut, das alle 130 Nutzungsänderungen in einer Single Source of Truth zentralisiert hat. Legal, Real Estate und Ops arbeiteten erstmals auf derselben Datenbasis. Parallel habe ich mich tief genug in Bauordnung und Brandschutz-Recht eingearbeitet, um interne Referenz für 16 Bundesländer zu sein."
      ),
      result: t(
        "Stores stayed open, P&L protected, miscommunication eliminated. Fragmented Excel sheets turned into the operational backbone of expansion.",
        "Filialen blieben offen, P&L geschützt, Fehlkommunikation eliminiert. Aus fragmentierten Excel-Sheets wurde das operative Rückgrat der Expansion."
      ),
      tags: ["Airtable", t("Compliance", "Compliance"), t("Process Design", "Prozessdesign")],
    },
    {
      client: "GRÜNZUCKER GmbH",
      title: t(
        "From deep tech to investor-ready",
        "Von tiefem Fachwissen zu Investor-Ready"
      ),
      subtitle: t(
        "Co-builder mandate.",
        "Co-Builder-Mandat."
      ),
      context: t(
        "Biotech startup converting biomass to sugar. Deep technical expertise, but not a single asset that explained to an investor why it mattered.",
        "Biotech-Startup, das Biomasse in Zucker umwandelt. Tiefe technische Expertise, aber kein einziges Material, das einem Investor erklärt hätte, warum das relevant ist."
      ),
      problem: null,
      solution: t(
        "Co-builder mandate: built the website. Structured the pitch deck around market problem first, technology second. Calculated and validated TAM/SAM/SOM. Stress-tested the financial model. Built investor relations strategy.",
        "Co-Builder-Mandat: Website aufgebaut. Pitch Deck strukturiert (Marktproblem als Einstieg, nicht Technologie als Held). TAM/SAM/SOM durchgerechnet und validiert. Finanzprognosen stress-getestet. Investor-Relations-Strategie entwickelt."
      ),
      result: t(
        "Investor-visible: professional web presence, defensible fundraising narrative, pipeline partnerships including Fraunhofer.",
        "Investor-sichtbar mit professioneller Web-Präsenz, belastbarem Fundraising-Narrativ und Pipeline-Partnerschaften, unter anderem mit Fraunhofer."
      ),
      tags: [
        "Startup Sparring",
        "Pitch Decks",
        t("Financial Modeling", "Finanzmodellierung"),
      ],
    },
    {
      client: "BauPilot",
      title: t(
        "RAG platform for German planning law",
        "RAG-Plattform für deutsches Baurecht"
      ),
      subtitle: t(
        "B2B SaaS. Solo founder.",
        "B2B SaaS. Solo Founder."
      ),
      context: t(
        "Answers planning-law questions on any German cadastral parcel. Combines vectorised XPlanung and ALKIS geometries, scraped OParl council documents, federal building code (BauGB/BauNVO), 16 state building codes, and administrative court rulings.",
        "Beantwortet baurechtliche Fragen zu jeder deutschen Flurstück-ID. Kombiniert vektorisierte XPlanung- und ALKIS-Geometrien, gescrapte OParl-Ratsdokumente, BauGB/BauNVO plus 16 Landesbauordnungen sowie Verwaltungsgerichtsurteile."
      ),
      problem: t(
        "Python, PostgreSQL/PostGIS, Supabase, vector embeddings/RAG, 50+ source-specific OSINT scrapers across all 16 federal states, RAGAS evaluation, Hetzner production deployment. Self-hosted, no third-party dependencies for embeddings or inference in the hot path.",
        "Python, PostgreSQL/PostGIS, Supabase, Vektor-Embeddings/RAG, 50+ quellenspezifische OSINT-Scraper über alle 16 Bundesländer, RAGAS-Evaluierung, Hetzner-Produktiv-Deployment. Self-hosted, ohne Drittanbieter-Abhängigkeiten für Embeddings oder Inference im Hot Path."
      ),
      solution: t(
        "Solo founder. Product strategy, data architecture, system design, go-to-market. Engineering with Claude Code and agentic workflows. Buyers: property developers, architecture firms, construction-law counsel.",
        "Solo Founder. Produkt-Strategie, Datenarchitektur, System-Design, Go-to-Market. Engineering mit Claude Code und agentic Workflows. Zielgruppen: Projektentwickler, Architekturbüros, Baurechts-Kanzleien."
      ),
      result: null,
      tags: [
        "B2B SaaS",
        "RAG",
        "PostGIS",
        t("Solo Founder", "Solo Founder"),
      ],
    },
    {
      client: "ertragwerk.de",
      title: t(
        "Open tool platform for German real-estate investors",
        "Open-Tool-Plattform für Immobilien-Investoren"
      ),
      subtitle: t(
        "Solo founder. Live.",
        "Solo Founder. Live."
      ),
      context: t(
        "Six free calculators (gross/equity yield, depreciation, IRR, DSCR, Excel check), 31 city pages with current market data, live mortgage rates from ECB data, 30-year forecast. Full German tax logic per §7, §32a, §23, §3 Nr. 72 EStG.",
        "Sechs kostenlose Rechner (Brutto-, EK-Rendite, AfA, IRR, DSCR, Excel-Check), 31 Städte-Seiten mit aktuellen Marktdaten, Live-Bauzinsen aus EZB-Daten, 30-Jahres-Forecast. Voll-deutsche Steuerlogik nach §7, §32a, §23, §3 Nr. 72 EStG."
      ),
      problem: t(
        "Vercel EU, Supabase EU. Growth via SEO content: glossary, blog, and weekly newsletter on mortgage rates and market updates.",
        "Vercel EU, Supabase EU. Wachstum über SEO-Content: Glossar, Blog und wöchentlicher Newsletter zu Bauzinsen und Marktupdates."
      ),
      solution: t(
        "Solo founder. Product strategy, data architecture, GTM. Engineering with Claude Code and agentic workflows.",
        "Solo Founder. Produkt-Strategie, Datenarchitektur, Go-to-Market. Engineering mit Claude Code und agentic Workflows."
      ),
      result: null,
      tags: [
        t("Real Estate", "Immobilien"),
        "SEO",
        "Newsletter",
        t("Tax Logic", "Steuerlogik"),
      ],
    },
  ];

  const sectionLabels = {
    context: { en: "What", de: "Was", color: "text-foreground-muted" },
    problem: { en: "Stack & Infrastructure", de: "Stack & Infrastruktur", color: "text-accent2/80" },
    solution: {
      en: "Action / Role",
      de: "Aktion / Rolle",
      color: "text-accent/80",
    },
    result: { en: "Outcome", de: "Ergebnis", color: "text-emerald-400/80" },
  };

  return (
    <section id="cases" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 font-mono text-sm text-accent">
            {t("Case Studies", "Case Studies")}
          </h2>
          <h3 className="mb-14 text-2xl font-bold text-foreground-bright md:text-3xl">
            {t(
              "Real problems, real outcomes",
              "Echte Probleme, echte Ergebnisse"
            )}
          </h3>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="overflow-hidden rounded-xl border border-border bg-surface"
            >
              {/* Header */}
              <div className="border-b border-border px-6 py-5">
                <p className="mb-1 text-[11px] font-medium uppercase tracking-widest text-foreground-muted">
                  {cs.client}
                </p>
                <h4 className="text-lg font-semibold text-foreground-bright">
                  {cs.title}
                </h4>
                <p className="mt-0.5 text-sm text-accent">{cs.subtitle}</p>
              </div>

              {/* Sections */}
              <div className="space-y-0 divide-y divide-border">
                {(
                  [
                    ["context", cs.context],
                    ["problem", cs.problem],
                    ["solution", cs.solution],
                    ["result", cs.result],
                  ] as const
                )
                  .filter(([, text]) => text)
                  .map(([key, text]) => {
                    const label =
                      sectionLabels[key as keyof typeof sectionLabels];
                    return (
                      <div key={key} className="px-6 py-4">
                        <p
                          className={`mb-1.5 text-[10px] font-semibold uppercase tracking-widest ${label.color}`}
                        >
                          {t(label.en, label.de)}
                        </p>
                        <p className="text-sm leading-relaxed text-foreground">
                          {text}
                        </p>
                      </div>
                    );
                  })}
              </div>

              {/* Tags */}
              <div className="border-t border-border px-6 py-3">
                <div className="flex flex-wrap gap-1.5">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-background px-2.5 py-1 text-[10px] text-foreground-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
