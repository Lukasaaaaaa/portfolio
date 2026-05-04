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
        "Operations Consulting & Agentic Product Building",
        "Operations Consulting & Agentic Product Building"
      ),
      location: "Berlin",
      period: t("Mar 2025 – Present", "Mär 2025 – Heute"),
      logo: "/logo-gruenzucker.png",
      logoAlt: "Grünzucker",
      description: t(
        "Three parallel streams: multi-site operations for retail, F&B, and fitness operators scaling in Germany; agentic product building of own products; and co-builder mandates for pre-seed to seed founders.",
        "Selbstständiger Operator mit drei parallelen Streams: Multi-Site Operations für Retail-, F&B- und Fitness-Operatoren in Skalierung, Agentic Product Building eigener Produkte und Co-Builder-Mandate für Pre-Seed- bis Seed-Founder."
      ),
      points: [
        t(
          "Multi-Site Operations: Pre-LOI site checks, lease redlines, end-to-end use-permit conversions. Coordinating architects, acoustics consultants, and fire safety engineers. Playbook from 130 conversions at Gorillas.",
          "Multi-Site Operations: Pre-LOI Site-Checks, Mietvertrags-Redlines, end-to-end Nutzungsänderungen. Steuerung von Architekten, Schallgutachtern und Brandschutz-Ingenieuren. Playbook aus 130 Nutzungsänderungen bei Gorillas."
        ),
        t(
          "Startup Sparring: Co-builder mandates for pre-seed to seed: pitch decks, investor strategy, TAM/SAM/SOM validation, financial models, GTM.",
          "Startup-Sparring: Co-Builder-Mandate für Pre-Seed bis Seed: Pitch Decks, Investorenstrategie, TAM/SAM/SOM-Validierung, Finanzmodelle, Go-to-Market."
        ),
        t(
          "Selected mandates: GRÜNZUCKER GmbH (biotech, Fraunhofer pipeline partnership), LAP Coffee (site analysis), Halo Bagels (site plus commercial lease advisory), Everyfy (pitch deck and financial model).",
          "Mandate (Auswahl): GRÜNZUCKER GmbH (Biotech, Fraunhofer-Pipeline-Partnerschaft), LAP Coffee (Standortanalyse), Halo Bagels (Standort plus gewerbliche Mietvertrags-Beratung), Everyfy (Pitch Deck und Finanzmodell)."
        ),
      ],
      tags: [
        "Multi-Site",
        "Agentic Engineering",
        "Pitch Decks",
        "Investor Relations",
      ],
    },
    {
      company: "BEC-Energie Consult GmbH",
      role: t(
        "Project Developer, Renewable Energy (DE / PL / FR)",
        "Projektentwickler, Erneuerbare Energien (DE / PL / FR)"
      ),
      location: "Berlin",
      period: t("Mar 2024 – Mar 2025", "Mär 2024 – Mär 2025"),
      logo: "/logo-bec-energie.png",
      logoAlt: "BEC-Energie",
      description: t(
        "Renewable energy in classic German Mittelstand: small team, long-tenured employees, deeply analog processes. Cross-border project development across three markets.",
        "Erneuerbare Energien im klassischen deutschen Mittelstand: kleines Team, langjährige Mitarbeiter, tief analoge Prozesse. Cross-Border Projektentwicklung über drei Märkte."
      ),
      points: [
        t(
          "Acquired new project sites for wind and solar parks across three markets (Germany, Poland, France).",
          "Akquisition neuer Projektstandorte für Wind- und Solarparks über drei Märkte (Deutschland, Polen, Frankreich)."
        ),
        t(
          "Built sales channel for PV garden installations using BECU patent substructure: positioning, channels, marketing material.",
          "Vertriebsaufbau für PV-Gartenanlagen mit der BECU-Patent-Unterkonstruktion: Positionierung, Vertriebskanäle, Werbematerial."
        ),
        t(
          "Built Airtable database for project coordination, reducing coordination overhead by ~30%. Designed and maintained bilingual company website (DE/FR) on Shopify.",
          "Airtable-Datenbank für Projektkoordination aufgebaut, Abstimmungsaufwand um etwa 30 Prozent reduziert. Zweisprachige Unternehmenswebsite (DE/FR) auf Shopify konzipiert und gepflegt."
        ),
        t(
          "Designed and ran AI workshops for management and operational teams. Established adoption of ChatGPT and Claude in sales and project coordination, where prior tool rollouts had failed without enablement.",
          "KI-Workshops für Geschäftsführung und operative Teams konzipiert und durchgeführt. Adoption von ChatGPT und Claude in Vertrieb und Projektkoordination etabliert, wo vorherige Tool-Einführungen ohne Begleitung gescheitert waren."
        ),
      ],
      tags: [
        t("Renewable Energy", "Erneuerbare Energien"),
        "Cross-Border",
        t("AI Workshops", "KI-Workshops"),
        "Airtable",
      ],
    },
    {
      company: t(
        "Gorillas Technologies GmbH (acquired by Getir)",
        "Gorillas Technologies GmbH (acquired by Getir)"
      ),
      role: t(
        "Real Estate Project Manager (Hyper-Growth & Post-Merger Integration)",
        "Real Estate Project Manager (Hyper-Growth & Post-Merger Integration)"
      ),
      location: "Berlin",
      period: t("Jul 2021 – Aug 2023", "Juli 2021 – Aug 2023"),
      logo: "/logo-gorillas.png",
      logoAlt: "Gorillas",
      description: t(
        "Two phases under one role: hyper-growth scaling, then post-merger consolidation after Getir acquisition.",
        "Zwei Phasen in einer Rolle: Hyper-Growth-Skalierung, dann Post-Merger-Konsolidierung nach Übernahme durch Getir."
      ),
      points: [
        t(
          "Hyper-Growth Scaling (2021–2022): Operationally led scale-up from 20 to 150 stores across DACH. €2M buildout budget. Owned 130 use-permit conversions, building permits, and fire safety compliance across 16 German federal states.",
          "Hyper-Growth-Skalierung (2021–2022): Skalierung von 20 auf 150 Stores in der DACH-Region operativ verantwortet. €2M Buildout-Budget. Verantwortlich für 130 Nutzungsänderungen, Bauanträge und Brandschutz in 16 Bundesländern."
        ),
        t(
          "Post-Merger Integration (2022–2023): Led the wind-down of 90+ properties in DACH after Getir acquisition. Built tracker for team coordination and C-level progress monitoring.",
          "Post-Merger Integration (2022–2023): Leitung des Projekts zum Abstoß von über 90 Immobilien in der DACH-Region nach Übernahme durch Getir. Aufbau eines Trackers für Teamsteuerung und C-Level-Fortschrittsmonitoring."
        ),
        t(
          "Portfolio Optimization: Built data rooms and C-level reporting for the real-estate portfolio. Data-driven optimization across store performance, cost, and regulatory compliance.",
          "Portfolio-Optimierung: Datenräume und C-Level-Reportings für das Immobilienportfolio aufgebaut. Optimierung nach Filialen-Performance, Kosten und regulatorischer Konformität mittels Daten."
        ),
        t(
          "Stakeholder Management: Interface with building authorities, lawyers, landlords, and policymakers. Cross-functional across Legal, Real Estate, Operations, and Finance.",
          "Stakeholder-Steuerung: Schnittstelle zu Bauämtern, Anwälten, Vermietern und Politik. Cross-funktional zwischen Legal, Real Estate, Operations und Finance."
        ),
      ],
      tags: [
        "Hyper-Growth",
        "Post-Merger",
        "Multi-Site",
        "€2M Budget",
      ],
    },
    {
      company: "Brasiventures",
      role: t("Founder, CBD D2C Brand", "Gründer, CBD D2C-Marke"),
      location: "Berlin",
      period: t("Nov 2020 – Jul 2023", "Nov 2020 – Juli 2023"),
      logo: "/logo-brasiventures.png",
      logoAlt: "Brasiventures",
      description: t(
        "Solo-built a D2C brand from scratch: product development, packaging, Shopify store, distribution to Berlin kiosks and specialty retail.",
        "Solo-Aufbau einer D2C-Marke von Null: Produktentwicklung, Verpackung, Shopify-Store, Distribution an Berliner Kioske und Fachhandel."
      ),
      points: [
        t(
          "Solo-built a D2C brand from scratch: product development, packaging, Shopify store, distribution to Berlin kiosks and specialty retail.",
          "Solo-Aufbau einer D2C-Marke von Null: Produktentwicklung, Verpackung, Shopify-Store, Distribution an Berliner Kioske und Fachhandel."
        ),
        t(
          "Six-figure revenue across three years as sole operator.",
          "Sechsstelliger Umsatz über drei Jahre als alleiniger Operator."
        ),
        t(
          "Practical experience across supply chain, regulatory compliance, D2C marketing, and retail negotiation.",
          "Praxis in Supply Chain, regulatorischer Compliance, D2C-Marketing und Einzelhandelsverhandlung."
        ),
      ],
      tags: [
        "Founder",
        "D2C",
        "Shopify",
        t("Solo Operation", "Solo-Operation"),
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
        "Banking-as-a-Service fintech. Operations at the intersection of finance, compliance, and technology.",
        "Banking-as-a-Service Fintech. Operations an der Schnittstelle von Finanzen, Compliance und Technologie."
      ),
      points: [
        t(
          "Supported complex payment transactions and clearing operations in a regulated banking-as-a-service environment.",
          "Komplexe Zahlungstransaktionen und Clearing-Prozesse in reguliertem BaaS-Umfeld unterstützt."
        ),
        t(
          "Contributed to internal IT process and workflow improvements with cross-functional stakeholders.",
          "Mitarbeit an internen IT-Prozess- und Workflow-Verbesserungen mit cross-funktionalen Stakeholdern."
        ),
      ],
      tags: [
        "Fintech",
        "Payments",
        "BaaS",
        "Compliance",
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
                {t(
                  "M.Sc. Information Systems & Digital Transformation",
                  "M.Sc. Wirtschaftsinformatik & Digitale Transformation"
                )}
              </p>
              <p className="mt-2 text-xs text-foreground-muted">
                04/2026 – 04/2028
              </p>
              <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                {t(
                  "Focuses: Digital Government, Knowledge Management, Enterprise Architecture, AI-supported applications.",
                  "Schwerpunkte: Digital Government, Wissensmanagement, Enterprise Architecture, AI-gestützte Anwendungen."
                )}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <h4 className="text-base font-semibold text-foreground-bright">
                Universität Potsdam
              </h4>
              <p className="mt-1 text-sm text-accent">
                {t(
                  "Bachelor modules in Information Systems",
                  "Bachelor-Module Wirtschaftsinformatik"
                )}
              </p>
              <p className="mt-2 text-xs text-foreground-muted">
                {t(
                  "04/2025 – 03/2026 · Master's bridge",
                  "04/2025 – 03/2026 · Brücke zum Master"
                )}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                {t(
                  "Completed: AI-based Application Systems (2.3), Bachelor Seminar Information Systems & Digital Government (2.3), IoT / Industrial Internet (2.3), Application Systems in Industry, Trade and Administration (2.7).",
                  "Abgeschlossen: KI-basierte Anwendungssysteme (2,3), Bachelorseminar Wirtschaftsinformatik & Digital Government (2,3), Internet of Things / Industrial Internet (2,3), Anwendungssysteme in Industrie, Handel und Verwaltung (2,7)."
                )}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <h4 className="text-base font-semibold text-foreground-bright">
                {t("SRH University Berlin", "SRH Hochschule Berlin")}
              </h4>
              <p className="mt-1 text-sm text-accent2">
                {t("B.A. Business Administration", "B.A. Betriebswirtschaftslehre")}
              </p>
              <p className="mt-2 text-xs text-foreground-muted">
                {t(
                  "09/2017 – 09/2020 · Grade 2.3",
                  "09/2017 – 09/2020 · Note 2,3"
                )}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <h4 className="text-base font-semibold text-foreground-bright">
                WBS Akademie Berlin
              </h4>
              <p className="mt-1 text-sm text-accent2">
                {t(
                  "Professional Scrum Master I (PSM I)",
                  "Professional Scrum Master I (PSM I)"
                )}
              </p>
              <p className="mt-2 text-xs text-foreground-muted">
                11/2023 – 02/2024
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
