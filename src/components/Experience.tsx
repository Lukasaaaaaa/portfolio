"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      company: t("Self-employed", "Selbstständig"),
      role: t(
        "Digital Transformation Consulting & Startup Sparring",
        "Beratung Digitale Transformation & Startup Sparring"
      ),
      location: "Berlin",
      period: t("Mar 2025 – Present", "Mär 2025 – Heute"),
      logo: "/logo-gruenzucker.png",
      logoAlt: "Grünzucker",
      description: t(
        "Independent consultant bridging the gap between strategy and execution. Working directly with founders and leadership teams to build what's missing: from investor materials to operational infrastructure. Tool-agnostic: whatever gets results fastest.",
        "Unabhängiger Berater an der Schnittstelle zwischen Strategie und Umsetzung. Direkte Zusammenarbeit mit Gründern und Führungsteams, um fehlende Bausteine aufzubauen: von Investorenmaterialien bis zur operativen Infrastruktur. Tool-agnostisch: was am schnellsten Ergebnisse liefert."
      ),
      points: [
        t(
          "Current mandate (GRÜNZUCKER GmbH): Hands-on co-builder: website, pitch deck, investor relations, market validation, financial projection stress-testing. Partnerships with Fraunhofer in pipeline.",
          "Aktuelles Mandat (GRÜNZUCKER GmbH): Hands-on Co-Builder: Website, Pitch Deck, Investor Relations, Marktvalidierung, Stress-Testing der Finanzprognosen. Partnerschaften mit Fraunhofer in der Pipeline."
        ),
        t(
          "Former mandates: LAP Coffee (location analysis), Everyfy (pitch decks & financial modeling), Halo Bagels (location analysis & commercial lease advisory).",
          "Frühere Mandate: LAP Coffee (Standortanalyse), Everyfy (Pitch Decks & Finanzmodellierung), Halo Bagels (Standortanalyse & Gewerbeimmobilienberatung)."
        ),
      ],
      tags: [
        t("Startup Sparring", "Startup Sparring"),
        "Pitch Decks",
        t("Financial Modeling", "Finanzmodellierung"),
        "Shopify",
      ],
    },
    {
      company: "BEC-Energie Consult GmbH",
      role: t("Project Developer", "Projektentwickler"),
      location: "Berlin",
      period: "Feb 2024 – Apr 2025",
      logo: "/logo-bec-energie.png",
      logoAlt: "BEC-Energie",
      description: t(
        "Renewable energy company in the classic German Mittelstand. Small team, long-tenured employees, deeply analog processes. This is where I learned that building the right tool means nothing if the culture isn't ready for it.",
        "Erneuerbare-Energien-Unternehmen im klassischen deutschen Mittelstand. Kleines Team, langjährige Mitarbeiter, tief analoge Prozesse. Hier habe ich gelernt, dass das richtige Tool nichts bedeutet, wenn die Kultur nicht bereit dafür ist."
      ),
      points: [
        t(
          "Built Airtable database reducing alignment overhead by ~30%. Created bilingual website (DE/FR) on Shopify.",
          "Airtable-Datenbank gebaut, die Abstimmungsaufwand um ~30% reduzierte. Zweisprachige Website (DE/FR) auf Shopify erstellt."
        ),
        t(
          "Led GPT workshops that succeeded where tooling alone failed, meeting employees where they were instead of forcing adoption.",
          "GPT-Workshops geleitet, die dort Erfolg hatten, wo Tools allein scheiterten. Mitarbeiter dort abgeholt, wo sie standen, statt Adoption zu erzwingen."
        ),
        t(
          "Core lesson: technology without buy-in is shelfware. Pivoted from implementation-first to change-management-first approach.",
          "Kernlektion: Technologie ohne Buy-in ist Regalware. Pivot von Implementierung-zuerst zu Change-Management-zuerst."
        ),
      ],
      tags: [
        "Airtable",
        "Shopify",
        "Change Management",
        t("AI Workshops", "KI-Workshops"),
      ],
    },
    {
      company: "Getir",
      role: t(
        "Project Manager, Post-Merger Integration",
        "Projektmanager, Post-Merger Integration"
      ),
      location: "Berlin",
      period: t("Dec 2022 – Nov 2023", "Dez 2022 – Nov 2023"),
      logo: "/logo-getir.png",
      logoAlt: "Getir",
      description: t(
        "After Getir acquired Gorillas, the focus shifted from growth to consolidation. Led the structured wind-down of the DACH real estate portfolio: managing landlord negotiations, contract terminations, and financial settlements under pressure and tight timelines.",
        "Nach der Übernahme von Gorillas durch Getir verlagerte sich der Fokus von Wachstum auf Konsolidierung. Strukturierte Abwicklung des DACH-Immobilienportfolios geleitet: Vermieterverhandlungen, Vertragsauflösungen und finanzielle Abwicklungen unter Druck und engen Fristen."
      ),
      points: [
        t(
          "Led wind-down of 45 properties across DACH region, coordinating legal, finance, and operations across three countries.",
          "Abwicklung von 45 Standorten in der DACH-Region geleitet. Koordination von Legal, Finance und Operations über drei Länder."
        ),
        t(
          "Managed portfolio of 90 locations with end-to-end responsibility for negotiations, contracts, and payments.",
          "Portfolio von 90 Standorten mit End-to-End-Verantwortung für Verhandlungen, Verträge und Zahlungen verwaltet."
        ),
        t(
          "Navigated complex stakeholder landscape: landlords, legal counsel, C-level, and cross-functional teams across multiple time zones.",
          "Navigation einer komplexen Stakeholder-Landschaft: Vermieter, Rechtsberater, C-Level und funktionsübergreifende Teams über mehrere Zeitzonen."
        ),
      ],
      tags: [
        "Post-Merger",
        t("Real Estate", "Immobilien"),
        t("Stakeholder Mgmt", "Stakeholder Mgmt"),
        "DACH",
      ],
    },
    {
      company: "Gorillas",
      role: t(
        "Project Manager, Expansion",
        "Projektmanager, Expansion"
      ),
      location: "Berlin",
      period: "Jun 2021 – Dec 2022",
      logo: "/logo-gorillas.png",
      logoAlt: "Gorillas",
      description: t(
        "Hyper-growth q-commerce startup scaling from dozens to hundreds of dark stores. Joined the Real Estate & Expansion team to manage the operational chaos of opening stores at breakneck speed: building permits, fire safety, landlord negotiations, all at once.",
        "Hyper-Growth Q-Commerce-Startup, das von Dutzenden auf Hunderte von Dark Stores skalierte. Teil des Real Estate & Expansion Teams, um das operative Chaos der rasanten Filialeröffnungen zu managen: Baugenehmigungen, Brandschutz, Vermieterverhandlungen, alles gleichzeitig."
      ),
      points: [
        t(
          "Managed building permits and fire safety compliance across ~100 store locations. Oversaw €2M buildout budget.",
          "Baugenehmigungen und Brandschutz-Compliance über ~100 Filialstandorte verwaltet. €2M Ausbaubudget verantwortet."
        ),
        t(
          "Built Airtable live dashboard replacing Excel chaos. Single source of truth for legal and ops teams, eliminating miscommunication.",
          "Airtable-Live-Dashboard gebaut, das Excel-Chaos ersetzte. Single Source of Truth für Legal- und Ops-Teams, Fehlkommunikation eliminiert."
        ),
        t(
          "Worked in a high-pressure, fast-moving environment where priorities shifted weekly. Developed resilience and extreme adaptability.",
          "Arbeit in einem Hochdruck-Umfeld mit wöchentlich wechselnden Prioritäten. Resilienz und extreme Anpassungsfähigkeit entwickelt."
        ),
      ],
      tags: [
        "Airtable",
        t("Compliance", "Compliance"),
        t("Process Design", "Prozessdesign"),
        "€2M Budget",
      ],
    },
    {
      company: "Brasiventures",
      role: t("Founder, CBD D2C Brand", "Gründer, CBD D2C-Marke"),
      location: "Berlin",
      period: "Nov 2020 – Jul 2023",
      logo: "/logo-brasiventures.png",
      logoAlt: "Brasiventures",
      description: t(
        "Built a direct-to-consumer CBD brand from scratch as a solo founder. Every aspect of the business (product sourcing, packaging design, Shopify store, retail distribution, accounting) was my responsibility. Proof that I can build and ship end-to-end.",
        "Eine Direct-to-Consumer CBD-Marke als Solo-Gründer von Grund auf aufgebaut. Jeder Aspekt des Geschäfts (Produktbeschaffung, Verpackungsdesign, Shopify-Store, Einzelhandelsdistribution, Buchhaltung) war meine Verantwortung. Beweis, dass ich End-to-End bauen und liefern kann."
      ),
      points: [
        t(
          "Solo-built everything: product packaging, Shopify store, local retail distribution to Berlin kiosks and specialty stores.",
          "Alles solo aufgebaut: Produktverpackung, Shopify-Store, lokale Einzelhandelsdistribution an Berliner Kioske und Spezialgeschäfte."
        ),
        t(
          "Scaled to 6-figure revenue over 3 years. End-to-end business built from zero as sole operator.",
          "Auf 6-stelligen Umsatz in 3 Jahren skaliert. End-to-End-Geschäft als Einzelunternehmer von null aufgebaut."
        ),
        t(
          "Hands-on experience in supply chain, regulatory compliance, D2C marketing, and retail negotiations.",
          "Praktische Erfahrung in Supply Chain, regulatorischer Compliance, D2C-Marketing und Einzelhandelsverhandlungen."
        ),
      ],
      tags: [
        "Shopify",
        "E-Commerce",
        "D2C",
        t("Solo Founder", "Solo-Gründer"),
      ],
    },
    {
      company: "Solarisbank",
      role: t(
        "Working Student, Operations & Business Development",
        "Werkstudent, Operations & Business Development"
      ),
      location: "Berlin",
      period: t("Jun 2020 – May 2021", "Jun 2020 – Mai 2021"),
      logo: "/logo-solarisbank.png",
      logoAlt: "Solarisbank",
      description: t(
        "Banking-as-a-Service fintech powering embedded finance for companies like Samsung and Trade Republic. First exposure to a high-scale tech environment. Learned how operations work at the intersection of finance, compliance, and technology.",
        "Banking-as-a-Service Fintech, das Embedded Finance für Unternehmen wie Samsung und Trade Republic ermöglicht. Erste Erfahrung in einem hochskalierten Tech-Umfeld. Gelernt, wie Operations an der Schnittstelle von Finanzen, Compliance und Technologie funktionieren."
      ),
      points: [
        t(
          "Supported complex payment transaction processing and clearing operations in a regulated environment.",
          "Unterstützung komplexer Zahlungstransaktionsverarbeitung und Clearing-Operationen in einem regulierten Umfeld."
        ),
        t(
          "Contributed to internal IT process and workflow improvements across cross-functional stakeholder groups.",
          "Beitrag zu internen IT-Prozess- und Workflow-Verbesserungen über funktionsübergreifende Stakeholder-Gruppen."
        ),
        t(
          "Gained foundational understanding of fintech operations, BaFin compliance, and B2B platform business models.",
          "Grundlegendes Verständnis von Fintech-Operations, BaFin-Compliance und B2B-Plattform-Geschäftsmodellen erworben."
        ),
      ],
      tags: [
        "Fintech",
        "Payments",
        "Compliance",
        "B2B Platform",
      ],
    },
  ];

  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 font-mono text-sm text-accent">
            {t("Experience", "Erfahrung")}
          </h2>
          <h3 className="mb-14 text-2xl font-bold text-foreground-bright md:text-3xl">
            {t("Where I've worked", "Wo ich gearbeitet habe")}
          </h3>
        </motion.div>

        {/* Timeline layout: Logo | Line | Card */}
        <div className="relative">
          {/* Vertical timeline line,between logo column and card column */}
          {/* Position: logo col (w-20 sm:w-24 = 80/96px) + gap (12/16px) + half of timeline col (12px) */}
          <div className="absolute left-[5.75rem] top-12 bottom-12 w-px bg-gradient-to-b from-accent/40 via-border-bright to-border sm:left-[7rem]" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative flex gap-3 sm:gap-4"
              >
                {/* Left: Logo + Date */}
                <div className="flex w-20 flex-shrink-0 flex-col items-center sm:w-24">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-white p-3 shadow-[0_0_16px_rgba(76,123,217,0.08)] sm:h-24 sm:w-24 sm:p-4">
                    <Image
                      src={exp.logo}
                      alt={exp.logoAlt}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <span className="mt-2.5 text-center font-mono text-[10px] leading-tight text-foreground-muted sm:text-[11px]">
                    {exp.period}
                  </span>
                </div>

                {/* Middle: Timeline dot */}
                <div className="relative flex w-6 flex-shrink-0 justify-center pt-8">
                  <div className="relative z-10 h-3 w-3 rounded-full border-2 border-background bg-accent shadow-[0_0_8px_rgba(76,123,217,0.4)]" />
                </div>

                {/* Right: Job details card */}
                <div className="group flex-1 overflow-hidden rounded-xl border border-border bg-surface transition-all hover:border-border-bright">
                  {/* Card header */}
                  <div className="px-5 py-4 sm:px-6">
                    <h4 className="text-base font-semibold text-foreground-bright">
                      {exp.company}
                    </h4>
                    <p className="mt-0.5 text-sm text-accent">
                      {exp.role} &middot; {exp.location}
                    </p>
                  </div>

                  {/* Card body */}
                  <div className="border-t border-border px-5 py-4 sm:px-6">
                    <p className="mb-3 text-sm leading-relaxed text-foreground">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.points.map((point, j) => (
                        <li
                          key={j}
                          className="flex gap-2.5 text-sm leading-relaxed text-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/40" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-background px-2.5 py-1 text-[10px] font-medium text-foreground-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-24"
        >
          <h2 className="mb-2 font-mono text-sm text-accent2">
            {t("Education", "Ausbildung")}
          </h2>
          <h3 className="mb-10 text-2xl font-bold text-foreground-bright md:text-3xl">
            {t("Academic background", "Akademischer Hintergrund")}
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface p-6">
              <h4 className="text-base font-semibold text-foreground-bright">
                Universität Potsdam
              </h4>
              <p className="mt-1 text-sm text-accent">
                M.Sc. Wirtschaftsinformatik
              </p>
              <p className="mt-2 text-xs text-foreground-muted">
                {t(
                  "Focus: Digital Transformation & AI · Starting Apr 2026",
                  "Schwerpunkt: Digitale Transformation & KI · Ab Apr 2026"
                )}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <h4 className="text-base font-semibold text-foreground-bright">
                Universität Potsdam
              </h4>
              <p className="mt-1 text-sm text-accent">
                B.Sc. Wirtschaftsinformatik
              </p>
              <p className="mt-2 text-xs text-foreground-muted">
                {t(
                  "Apr 2025 – Present · Bridge to Master's",
                  "Apr 2025 – Heute · Brücke zum Master"
                )}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <h4 className="text-base font-semibold text-foreground-bright">
                SRH University Berlin
              </h4>
              <p className="mt-1 text-sm text-accent2">
                B.A. Business Administration
              </p>
              <p className="mt-2 text-xs text-foreground-muted">
                {t(
                  "Sep 2017 – Sep 2020 · Grade: 2.3",
                  "Sep 2017 – Sep 2020 · Note: 2,3"
                )}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <h4 className="text-base font-semibold text-foreground-bright">
                WBS Akademie Berlin
              </h4>
              <p className="mt-1 text-sm text-accent2">
                PSM I, PSM II, PRINCE 2
              </p>
              <p className="mt-2 text-xs text-foreground-muted">
                {t(
                  "Dec 2023 – Apr 2024 · Agile Project Management",
                  "Dez 2023 – Apr 2024 · Agiles Projektmanagement"
                )}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
