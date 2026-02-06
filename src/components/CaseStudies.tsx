"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export default function CaseStudies() {
  const { t } = useLanguage();

  const caseStudies = [
    {
      client: "Gorillas / Getir",
      title: t(
        "From Excel Chaos to Live Dashboard",
        "Vom Excel-Chaos zum Live-Dashboard"
      ),
      subtitle: t(
        "100 locations, €2M budget, no system.",
        "100 Standorte, €2M Budget, kein System."
      ),
      context: t(
        "Gorillas was in the middle of hypergrowth. New locations were opening faster than operations could keep up. Every location required change-of-use permits, fire safety approvals, and regulatory inspections. As Expansion Manager, I grew into this role – a topic nobody had systematically addressed before.",
        "Gorillas war mitten im Hypergrowth. Neue Standorte wurden schneller eröffnet als die Operationen hinterherkamen. Für jeden Standort brauchte es Nutzungsänderungsgenehmigungen, Brandschutzfreigaben und behördliche Abnahmen. Als Expansion Manager bin ich in diese Rolle reingewachsen, ein Thema, das vorher niemand systematisch angefasst hat."
      ),
      problem: t(
        "Nearly 100 locations, each with its own permit status. Everything ran on Excel. Legal and Ops worked with different versions, documents got lost, deadlines were missed. Stores were on the verge of closure – not because business was bad, but because paperwork was missing.",
        "Knapp 100 Standorte, jeder mit eigenem Genehmigungsstatus. Alles lief über Excel. Legal und Ops arbeiteten mit unterschiedlichen Versionen, Dokumente gingen verloren, Deadlines wurden verpasst. Filialen standen kurz vor der Schließung, nicht weil das Geschäft nicht lief, sondern weil Papierkram fehlte."
      ),
      solution: t(
        "I built an Airtable dashboard that centralized the entire permit process. Every location, every document, every status – in one place. Legal could access all documents in real time, Ops had visibility on upcoming deadlines. Fragmented Excel sheets became a single source of truth. In parallel, I dove so deep into German building regulations and fire safety codes that I became the internal reference. With nearly 100 applications, you learn fast.",
        "Ich habe ein Airtable-Dashboard aufgebaut, das den gesamten Genehmigungsprozess zentralisiert hat. Jeder Standort, jedes Dokument, jeder Status, an einem Ort. Legal konnte in Echtzeit auf alle Unterlagen zugreifen, Ops hatte Überblick über anstehende Fristen. Aus fragmentierten Excel-Tabellen wurde eine Single Source of Truth. Parallel habe ich mich so tief in deutsches Baurecht und Brandschutzvorschriften eingearbeitet, dass ich zur internen Referenz wurde. Bei knapp 100 Anträgen lernt man schnell."
      ),
      result: t(
        "Stores stayed open. P&L was directly protected because closures due to missing permits were prevented. Miscommunication between Legal and Ops was eliminated. A system that didn't exist before suddenly became the backbone of expansion.",
        "Filialen blieben offen. Die P&L war direkt geschützt, weil Schließungen durch fehlende Genehmigungen verhindert wurden. Die Fehlkommunikation zwischen Legal und Ops war eliminiert. Ein System, das vorher nicht existierte, war plötzlich das Rückgrat der Expansion."
      ),
      tags: ["Airtable", t("Process Design", "Prozessdesign"), "Compliance"],
    },
    {
      client: "GRÜNZUCKER GmbH",
      title: t(
        "From Deep Expertise to Investor-Visible",
        "Von tiefem Fachwissen zu investoren-sichtbar"
      ),
      subtitle: t("The complete build.", "Der komplette Aufbau."),
      context: t(
        "GRÜNZUCKER is a biotech startup converting biomass into sugar. The founder had years of technical expertise but not a single document that would explain to an investor why it matters.",
        "GRÜNZUCKER ist ein Biotech-Startup, das Biomasse in Zucker umwandelt. Der Gründer hatte jahrelange technische Expertise, aber kein einziges Dokument, das einem Investor erklärt hätte, warum das relevant ist."
      ),
      problem: t(
        "No website. No working pitch deck. No fundraising strategy. No validated market model. The company was invisible to investors – not because the technology was bad, but because it wasn't compellingly presented anywhere.",
        "Keine Website. Kein Pitch Deck, das funktioniert. Keine Fundraising-Strategie. Kein validiertes Marktmodell. Das Unternehmen war für Investoren unsichtbar, nicht weil die Technologie schlecht war, sondern weil sie nirgendwo überzeugend dargestellt wurde."
      ),
      solution: t(
        "Everything that was needed. Built the website. Structured the pitch deck from scratch – not the technology as hero, but the market problem as entry point. Calculated and validated TAM/SAM/SOM model. Critically examined and stress-tested financial projections. Developed investor relations strategy: who gets approached, how, in what order. This isn't a consultant mandate. I sit at the table and build alongside.",
        "Alles, was gebraucht wurde. Website aufgebaut. Pitch Deck von Grund auf strukturiert, nicht die Technologie als Held, sondern das Marktproblem als Einstieg. TAM/SAM/SOM-Modell durchgerechnet und validiert. Finanzprognosen kritisch hinterfragt und belastbar gemacht. Investor-Relations-Strategie entwickelt: Wer wird angesprochen, wie, in welcher Reihenfolge. Das ist kein Berater-Mandat. Ich sitze mit am Tisch und baue mit."
      ),
      result: t(
        "The company is now investor-visible. There's a professional web presence, a fundraising narrative that stands, and a pipeline of partnerships including the Fraunhofer Institute. A founder with good technology became a startup on the radar.",
        "Das Unternehmen ist jetzt investoren-sichtbar. Es gibt eine professionelle Web-Präsenz, ein Fundraising-Narrativ das steht, und eine Pipeline mit Partnerschaften, unter anderem mit dem Fraunhofer-Institut. Aus einem Gründer mit guter Technologie wurde ein Startup, das man auf dem Radar hat."
      ),
      tags: [
        "Startup Sparring",
        t("Financial Modeling", "Finanzmodellierung"),
        "Pitch Decks",
      ],
    },
    {
      client: "Brasiventures",
      title: t(
        "From Zero to Own Brand",
        "Von Null zur eigenen Marke"
      ),
      subtitle: t(
        "Everything solo, everything at once.",
        "Alles selbst, alles gleichzeitig."
      ),
      context: t(
        "Early 20s, no team, no budget, no network. The idea: build a CBD brand and sell it in Berlin. Not as a side project, but as a full-time business.",
        "Anfang 20, kein Team, kein Budget, kein Netzwerk. Die Idee: eine CBD-Marke aufbauen und in Berlin verkaufen. Nicht als Nebenprojekt, sondern als Vollzeit-Unternehmen."
      ),
      problem: t(
        "There was nothing. No product, no shop, no distribution, no brand. Everything had to be built by a single person – from product development to branding to logistics. And CBD wasn't an easy market: regulatory gray area, shunned by banks, restricted by platforms.",
        "Es gab nichts. Kein Produkt, keinen Shop, keinen Vertrieb, keine Marke. Alles musste von einer einzelnen Person aufgebaut werden, von der Produktentwicklung über das Branding bis zur Logistik. Und CBD war kein einfacher Markt: regulatorisch grau, von Banken gemieden, von Plattformen eingeschränkt."
      ),
      solution: t(
        "Everything. Developed packaging design. Built and optimized Shopify store. Created retail distribution strategy and then personally went to Berlin kiosks and corner shops to get the product in. Every sales conversation, every negotiation, every return, every decision went through me. B2C and B2B in parallel, as a one-man operation.",
        "Alles. Verpackungsdesign entwickelt. Shopify-Store aufgebaut und optimiert. Vertriebsstrategie für den stationären Handel erarbeitet und dann selbst in Berliner Kioske und Spätis gegangen, um das Produkt reinzubekommen. Jedes Verkaufsgespräch, jede Verhandlung, jede Retoure, jede Entscheidung lief über mich. B2C und B2B parallel, als One-Man-Operation."
      ),
      result: t(
        "Six-figure revenue over three years. But the real value wasn't the number – it was what I learned. How to bring a product to market. How negotiations work when you don't have a company name behind you. How to manage sales, operations, and finances simultaneously because there's nobody else. Brasiventures was my MBA on the street.",
        "Sechsstelliger Umsatz über drei Jahre. Aber der eigentliche Wert war nicht die Zahl, sondern was ich dabei gelernt habe. Wie man ein Produkt auf die Straße bringt. Wie Verhandlungen laufen, wenn man keinen Firmennamen hinter sich hat. Wie man Vertrieb, Operations und Finanzen gleichzeitig managed, weil es niemand anderen gibt. Brasiventures war mein MBA auf der Straße."
      ),
      tags: ["Shopify", "E-Commerce", "D2C", t("Solo Founder", "Solo-Gründer")],
    },
    {
      client: t("Renewable Energy Company", "Erneuerbare-Energien-Unternehmen"),
      title: t(
        "Why the Tool Doesn't Matter",
        "Warum das Tool keine Rolle spielt"
      ),
      subtitle: t(
        "And what I learned from it.",
        "Und was ich daraus gelernt habe."
      ),
      context: t(
        "A mid-sized company in the renewable energy sector. 18 employees. Projects ran on Excel, email, and the knowledge of individual people. Anyone who had been there for ten years was irreplaceable – not because they were better, but because only they knew where things stood.",
        "Ein Mittelständler in der Erneuerbaren-Energie-Branche. 18 Mitarbeiter. Projekte liefen über Excel, E-Mail und das Wissen einzelner Personen. Wer zehn Jahre dabei war, war unersetzbar, nicht weil er besser war, sondern weil nur er wusste, wo die Dinge stehen."
      ),
      problem: t(
        "Classic information asymmetry. No central system, no transparent project status, no documented processes. Every handover was a risk. Every vacation a bottleneck. The company was dependent on individual minds instead of functioning structures.",
        "Klassische Informationsasymmetrie. Kein zentrales System, kein transparenter Projektstatus, keine dokumentierten Prozesse. Jede Übergabe war ein Risiko. Jeder Urlaub ein Engpass. Das Unternehmen war abhängig von einzelnen Köpfen statt von funktionierenden Strukturen."
      ),
      solution: t(
        "I designed a relational Airtable database – a central project OS that was supposed to give everyone equal access to information. Technically, the solution was clean. But leadership didn't adopt it. And when the boss doesn't use it, nobody does. The system didn't fail because it was wrong, but because the cultural shift didn't happen. What worked afterwards: GPT workshops. No database, no dashboard – just showing people directly what AI means for their daily work. That landed because it met them where they were.",
        "Ich habe eine relationale Airtable-Datenbank konzipiert, als zentrales Projekt-OS, das allen den gleichen Zugang zu Informationen geben sollte. Technisch war die Lösung sauber. Aber die Führung hat sie nicht angenommen. Und wenn der Chef es nicht nutzt, nutzt es niemand. Das System ist nicht gescheitert, weil es falsch war, sondern weil der kulturelle Shift nicht stattgefunden hat. Was danach funktioniert hat: GPT-Workshops. Keine Datenbank, kein Dashboard, sondern Menschen direkt zeigen, was KI für ihren Arbeitsalltag bedeutet. Das hat gelandet, weil es sie dort abgeholt hat, wo sie standen."
      ),
      result: t(
        "Technology without buy-in is shelfware. The bottleneck is never the tool, but whether people are ready to work differently. Since then, I don't start with the solution. I start with understanding. This experience shapes every engagement I take on today.",
        "Technologie ohne Buy-in ist Regalware. Der Engpass ist nie das Tool, sondern ob die Menschen bereit sind, anders zu arbeiten. Seitdem starte ich nicht mehr mit der Lösung. Ich starte mit dem Verständnis. Diese Erfahrung formt jeden Auftrag, den ich heute annehme."
      ),
      tags: [
        "Change Management",
        t("AI Workshops", "KI-Workshops"),
        "Mittelstand",
      ],
    },
    {
      client: t("Mittelstand Company", "Mittelständisches Unternehmen"),
      title: t(
        "AI Workshops in the Mittelstand",
        "KI-Workshops im Mittelstand"
      ),
      subtitle: t(
        "Not talking about AI. Using AI.",
        "Nicht über KI reden. KI benutzen."
      ),
      context: t(
        "After the failed Airtable implementation at the renewable energy company, it was clear: introducing tools doesn't work if people don't experience the value themselves. So: different approach.",
        "Nach der gescheiterten Airtable-Implementierung im Erneuerbaren-Energien-Unternehmen war klar: Tools einführen funktioniert nicht, wenn die Menschen den Nutzen nicht selbst erleben. Also anderer Ansatz."
      ),
      problem: t(
        "Employees had heard of ChatGPT but had no idea what it concretely means for their daily work. The attitude was a mix of skepticism, overwhelm, and 'that's not for us'. No ill intent – just no touchpoints.",
        "Mitarbeiter hatten von ChatGPT gehört, aber keine Vorstellung davon, was es konkret für ihre tägliche Arbeit bedeutet. Die Haltung war eine Mischung aus Skepsis, Überforderung und \"das ist nichts für uns\". Keine böse Absicht, einfach keine Berührungspunkte."
      ),
      solution: t(
        "Designed and delivered hands-on workshops. No slides about the future of AI – instead, working directly on real tasks from participants' daily work. Drafting emails, summarizing reports, preparing data, accelerating research. Everyone worked with their own use case, not abstract examples.",
        "Hands-on-Workshops konzipiert und durchgeführt. Keine Folien über die Zukunft der KI, sondern direkt an echten Aufgaben aus dem Arbeitsalltag der Teilnehmer gearbeitet. Mails formulieren, Berichte zusammenfassen, Daten aufbereiten, Recherche beschleunigen. Jeder hat mit seinem eigenen Use Case gearbeitet, nicht mit abstrakten Beispielen."
      ),
      result: t(
        "The workshops worked where the Airtable project failed. The difference: people felt the value immediately – on their own work. No change management concept, but a direct experience. Several employees continued using the tools independently afterward.",
        "Die Workshops haben funktioniert, wo das Airtable-Projekt gescheitert ist. Der Unterschied: Die Menschen haben den Nutzen sofort gespürt, an ihrer eigenen Arbeit. Kein Change-Management-Konzept, sondern ein direktes Erlebnis. Mehrere Mitarbeiter haben die Tools danach eigenständig weitergenutzt."
      ),
      tags: [
        t("AI Education", "KI-Schulung"),
        "GPT",
        t("Workshops", "Workshops"),
      ],
    },
    {
      client: t("Own Product", "Eigenentwicklung"),
      title: t(
        "Real Estate Calculation Tool",
        "Immobilien-Kalkulationstool"
      ),
      subtitle: t(
        "Investment decisions in minutes instead of days.",
        "Investmententscheidungen in Minuten statt Tagen."
      ),
      context: t(
        "Calculating real estate investments isn't rocket science, but most people either do it in overly complex Excel sheets or not at all. Between purchase price, ancillary costs, financing, rental yield, and cash flow, you quickly lose track.",
        "Immobilieninvestments berechnen ist kein Hexenwerk, aber die meisten Leute machen es entweder in überkomplexen Excel-Sheets oder gar nicht. Zwischen Kaufpreis, Nebenkosten, Finanzierung, Mietrendite und Cashflow verliert man schnell den Überblick."
      ),
      problem: t(
        "No accessible tool that displays the essential metrics of a real estate investment quickly and understandably. Available options were either too simple or so complex that only professionals could use them.",
        "Kein zugängliches Tool, das die wesentlichen Kennzahlen einer Immobilieninvestition schnell und verständlich darstellt. Die verfügbaren Optionen waren entweder zu simpel oder so komplex, dass sie nur Profis nutzbar waren."
      ),
      solution: t(
        "Developed a custom calculation tool covering the relevant parameters of a real estate investment: purchase price, ancillary costs, financing structure, expected rental income, ongoing costs, cash flow projection. Focus on clarity. Input in minutes, result immediately visible.",
        "Ein eigenes Kalkulationstool entwickelt, das die relevanten Parameter einer Immobilieninvestition abbildet: Kaufpreis, Nebenkosten, Finanzierungsstruktur, erwartete Mieteinnahmen, laufende Kosten, Cashflow-Projektion. Fokus auf Klarheit. Eingabe in Minuten, Ergebnis sofort sichtbar."
      ),
      result: t(
        "(In progress – will be updated upon completion.)",
        "(In Arbeit – wird nach Fertigstellung aktualisiert.)"
      ),
      tags: [
        t("Own Product", "Eigenentwicklung"),
        t("Financial Modeling", "Finanzmodellierung"),
        t("Real Estate", "Immobilien"),
      ],
    },
  ];

  const sectionLabels = {
    context: { en: "Context", de: "Kontext", color: "text-foreground-muted" },
    problem: { en: "Problem", de: "Problem", color: "text-red-400/80" },
    solution: {
      en: "What I Did",
      de: "Was ich gemacht habe",
      color: "text-accent/80",
    },
    result: { en: "Result", de: "Ergebnis", color: "text-emerald-400/80" },
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
            {t("Case Studies", "Fallstudien")}
          </h2>
          <h3 className="mb-14 text-2xl font-bold text-foreground-bright md:text-3xl">
            {t(
              "Real problems, real results",
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
                ).map(([key, text]) => {
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
