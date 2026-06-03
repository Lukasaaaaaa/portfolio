"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      company: t("Self-employed", "Selbständig"),
      role: t("Consultant", "Berater"),
      location: "Berlin",
      period: t("Apr 2025 – Apr 2026", "04/2025 – 04/2026"),
      logo: "/logo-gruenzucker.png",
      logoAlt: "Grünzucker",
      description: t(
        "Three focus areas: AI strategy and use-case advisory, process automation, and startup sparring. Delivery with agentic engineering as the tool.",
        "Drei Schwerpunkte: KI-Strategie und Use-Case-Beratung, Prozessautomatisierung sowie Startup-Sparring. Auslieferung mit Agentic Engineering als Werkzeug."
      ),
      points: [
        t(
          "AI Strategy: Use-case identification and structured evaluation, workshop facilitation for embedding generative AI and AI agents, change management during AI adoption.",
          "KI-Strategie: Use-Case-Identifikation und strukturierte Bewertung, Workshop-Moderation zur Einbettung von Generativer KI und AI Agents, Change Management bei KI-Einführungen."
        ),
        t(
          "Process Automation: Relational databases, workflow automations, and no-code architectures for operational scaling.",
          "Prozessautomatisierung: Relationale Datenbanken, Workflow-Automatisierungen und No-Code-Architekturen für operative Skalierung."
        ),
        t(
          "Startup Sparring: Pitch decks, financial models, TAM/SAM/SOM validation, and investor relations for pre-seed to seed founders.",
          "Startup-Sparring: Pitch Decks, Finanzmodelle, TAM/SAM/SOM-Validierung und Investor Relations für Pre-Seed- bis Seed-Founder."
        ),
        t(
          "GRÜNZUCKER GmbH (biotech, Fraunhofer pipeline partnership): assisted the founder in building a scalable system for grant acquisition (Fördermittel) and investor outreach.",
          "GRÜNZUCKER GmbH (Biotech, Fraunhofer-Pipeline-Partnerschaft): den Gründer beim Aufbau eines skalierbaren Systems für Fördermittelbeschaffung und Investor Outreach unterstützt."
        ),
      ],
      tags: [
        t("AI Strategy", "KI-Strategie"),
        t("Process Automation", "Prozessautomatisierung"),
        "Startup-Sparring",
        "Agentic Engineering",
      ],
    },
    {
      company: "BEC-Energie Consult GmbH",
      role: t(
        "Project Developer, Renewable Energy (DE / PL / FR)",
        "Projektentwickler, Erneuerbare Energien (DE / PL / FR)"
      ),
      location: "Berlin",
      period: t("Mar 2024 – Apr 2025", "03/2024 – 04/2025"),
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
          "Designed and ran AI workshops for management and operational teams. Established adoption of ChatGPT and Claude in sales and project coordination.",
          "KI-Workshops für Geschäftsführung und operative Teams konzipiert und durchgeführt. Adoption von ChatGPT und Claude in Vertrieb und Projektkoordination etabliert."
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
        "Expansions Manager (Hyper-Growth & Post-Merger Integration)",
        "Expansions Manager (Hyper-Growth & Post-Merger Integration)"
      ),
      location: "Berlin",
      period: t("Jun 2021 – Aug 2023", "06/2021 – 08/2023"),
      logo: "/logo-gorillas.png",
      logoAlt: "Gorillas",
      description: t(
        "Two phases under one role: hyper-growth scaling, then post-merger consolidation after Getir acquisition.",
        "Zwei Phasen in einer Rolle: Hyper-Growth-Skalierung, dann Post-Merger-Konsolidierung nach Übernahme durch Getir."
      ),
      points: [
        t(
          "Hyper-Growth Scaling (2021–2022): Co-supported the scale-up from 20 to 150 stores across DACH through data-driven site analysis and process optimization. Managed a €2M buildout budget and 120 building-permit procedures across 16 German federal states.",
          "Hyper-Growth-Skalierung (2021–2022): Skalierung von 20 auf 150 Stores in der DACH-Region durch datengetriebene Standortanalysen und Prozessoptimierungen operativ begleitet. €2M Buildout-Budget und 120 Bauantragsverfahren über 16 Bundesländer verantwortet."
        ),
        t(
          "Post-Merger Integration (2022–2023): Led the divestment of 45 commercial properties in DACH after the Getir acquisition. Built tracker for team coordination and C-level progress monitoring.",
          "Post-Merger Integration (2022–2023): Leitung des Divestments von 45 Gewerbeimmobilien in der DACH-Region nach Übernahme durch Getir. Aufbau eines Trackers für Teamsteuerung und C-Level-Fortschrittsmonitoring."
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
      period: t("Nov 2020 – Jul 2023", "11/2020 – 07/2023"),
      logo: "/logo-brasiventures.png",
      logoAlt: "Brasiventures",
      description: t(
        "Solo-built a D2C brand from scratch: product development, packaging, Shopify store, distribution to Berlin kiosks and specialty retail.",
        "Solo-Aufbau einer D2C-Marke von Null: Produktentwicklung, Verpackung, Shopify-Store, Distribution an Berliner Kioske und Fachhandel."
      ),
      points: [
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
      period: t("Jun 2020 – May 2021", "06/2020 – 05/2021"),
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
        <div>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent2">
            {t("Experience", "Werdegang")}
          </h2>
          <h3 className="mb-14 text-2xl font-bold text-foreground-bright md:text-3xl">
            {t("Career", "Stationen")}
          </h3>
        </div>

        {/* Timeline layout: Logo | Line | Card */}
        <div className="relative">
          {/* Vertical timeline line,between logo column and card column */}
          {/* Position: logo col (w-20 sm:w-24 = 80/96px) + gap (12/16px) + half of timeline col (12px) */}
          <div className="absolute left-[5.75rem] top-12 bottom-12 w-px bg-gradient-to-b from-accent/40 via-border-bright to-border sm:left-[7rem]" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <div
                key={exp.company}
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
                      {exp.role}
                    </h4>
                    <p className="mt-0.5 text-sm text-accent">
                      {exp.company} &middot; {exp.location}
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
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-24">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent2">
            {t("Education", "Studium")}
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
        </div>
      </div>
    </section>
  );
}
