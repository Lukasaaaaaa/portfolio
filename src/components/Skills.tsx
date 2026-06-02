"use client";

import { useLanguage } from "@/lib/language-context";

export default function Skills() {
  const { t } = useLanguage();

  const categories = [
    {
      title: t(
        "Agentic Engineering & Automation",
        "Agentic Engineering & Automatisierung"
      ),
      description: t(
        "Using AI to generate SQL and Python code, with validation of the results. Conception and delivery of own AI-augmented MVPs.",
        "Einsatz von KI zur Generierung von SQL- und Python-Code, Validierung der Ergebnisse. Konzeption und Auslieferung eigener KI-augmentierter MVPs."
      ),
      skills: [
        "Claude Code",
        "Cursor",
        t("MCP servers", "MCP-Server"),
        t("Multi-agent orchestration", "Multi-Agenten-Orchestrierung"),
      ],
    },
    {
      title: t("Process Automation & No-Code", "Prozessautomatisierung & No-Code"),
      description: null,
      skills: [
        "BPMN",
        "Workflow-Mapping",
        "Airtable",
        "Zapier",
        "Make",
        "Power Automate",
        "Shopify",
        "Webflow",
      ],
    },
    {
      title: t("Data & Analytics", "Daten & Analytics"),
      description: null,
      skills: [
        t("Excel (advanced)", "Excel (fortgeschritten)"),
        "SQL",
        "Python",
        "Power BI",
        "Tableau",
        "Google Analytics",
        "Targomo",
      ],
    },
    {
      title: t("Methods", "Methoden"),
      description: null,
      skills: [
        "Scrum (PSM I)",
        "Lean",
        "OKR",
        "Change Management",
        "Post-Merger Integration",
        t(
          "Stakeholder management in regulated environments",
          "Stakeholder-Management in regulierten Umfeldern"
        ),
      ],
    },
    {
      title: t("Project & Collaboration Tools", "Projekt- & Kollaborationstools"),
      description: null,
      skills: [
        "MS Office 365",
        "SharePoint",
        "Jira",
        "Asana",
        "Confluence",
      ],
    },
    {
      title: t("Languages", "Sprachen"),
      description: null,
      skills: [
        t("German (C2, native)", "Deutsch (C2, Muttersprache)"),
        t(
          "English (native / bilingual — Berlin International School, IB Bilingual)",
          "Englisch (Native / Bilingual — Berlin International School, IB Bilingual)"
        ),
        t("French (A2)", "Französisch (A2)"),
      ],
    },
  ];

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent2">
            {t("Tools & Methods", "Werkzeuge & Methoden")}
          </h2>
          <h3 className="mb-12 text-2xl font-bold text-foreground-bright md:text-3xl">
            {t("What I work with", "Womit ich arbeite")}
          </h3>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {categories.map((category) => (
            <div key={category.title}>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground-muted">
                {category.title}
              </h4>
              {category.description ? (
                <p className="mb-3 text-sm leading-relaxed text-foreground">
                  {category.description}
                </p>
              ) : null}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-foreground transition-colors hover:border-border-bright"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
