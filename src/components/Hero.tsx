"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
      <div className="relative max-w-3xl">
        <div className="mb-8">
          <Image
            src="/headshot.png"
            alt="Lukas Gurny"
            width={120}
            height={120}
            className="rounded-full border border-border shadow-sm"
            priority
          />
        </div>

        <h1 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-foreground-bright md:text-6xl">
          {t(
            "AI Strategist & Digital Transformation Consultant",
            "KI-Stratege & Berater für Digitale Transformation"
          )}
        </h1>

        <p className="mb-6 text-base font-medium text-accent2 md:text-lg">
          {t(
            "Generative AI · AI Agents · Use-Case Strategy · Process Automation",
            "Generative KI · KI-Agenten · Use-Case-Strategie · Prozessautomatisierung"
          )}
        </p>

        <p className="mb-9 max-w-2xl text-base leading-relaxed text-foreground">
          {t(
            "Entrepreneurial AI strategist with proven expertise in the operational scaling and digital transformation of complex business models. Through hands-on experience with agentic AI and process automation, I translate technological potential into structured use cases and validated business cases. As a sparring partner for management, I drive the strategic embedding of AI solutions into existing data and process landscapes.",
            "Unternehmerisch agierender KI-Stratege mit nachgewiesener Expertise in der operativen Skalierung und digitalen Transformation komplexer Geschäftsmodelle. Durch Hands-on-Erfahrung mit Agentic AI und Prozessautomatisierung übersetze ich technologische Potenziale in strukturierte Use-Cases und validierte Business Cases. Als pragmatischer Sparringspartner für das Management treibe ich die strategische Einbettung von KI-Lösungen in bestehende Daten- und Prozesslandschaften voran."
          )}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:luca@gurny.de?subject=Anfrage%20via%20lukasgurny.com"
            className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent-hover"
          >
            {t("Get in touch", "Kontakt")}
          </a>
          <a
            href="/Lebenslauf_Lukas_Gurny.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground-bright transition-all hover:border-border-bright"
          >
            {t("Download CV", "Lebenslauf herunterladen")}
          </a>
        </div>
      </div>
    </section>
  );
}
