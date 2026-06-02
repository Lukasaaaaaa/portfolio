"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function SideProjects() {
  const { t } = useLanguage();

  const builds = [
    {
      name: "ertragwerk.de",
      href: "https://ertragwerk.de",
      status: t("Live", "Live"),
      body: t(
        "Open tool platform for German real-estate investors. Conceived and delivered via agentic engineering.",
        "Open-Tool-Plattform für deutsche Immobilien-Investoren. Konzipiert und via Agentic Engineering ausgeliefert."
      ),
      tags: ["Generative KI", "Next.js", "SEO"],
    },
    {
      name: "BauPilot",
      href: undefined,
      status: t("In development", "In Entwicklung"),
      body: t(
        "RAG platform for planning-law questions on German cadastral parcels. Conceived and delivered with an agentic-AI workforce.",
        "RAG-Plattform für baurechtliche Fragestellungen zu deutschen Flurstücken. Konzipiert und mit Agentic-AI-Workforce ausgeliefert."
      ),
      tags: ["RAG", "Agentic AI", "B2B SaaS"],
    },
  ];

  return (
    <section id="builds" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent2">
            {t("On the side", "Was ich nebenbei baue")}
          </h2>
          <h3 className="mb-4 text-2xl font-bold text-foreground-bright md:text-3xl">
            {t("Own products", "Eigene Produkte")}
          </h3>
          <p className="mb-12 max-w-2xl text-base text-foreground-muted">
            {t(
              "Alongside mandates I build my own AI-augmented products with agentic engineering.",
              "Neben Mandaten baue ich eigene KI-augmentierte Produkte mit Agentic Engineering."
            )}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {builds.map((build) => {
            const Tag = build.href ? "a" : "div";
            return (
              <div key={build.name}>
                <Tag
                  {...(build.href
                    ? {
                        href: build.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className="group flex h-full flex-col rounded-xl border border-border bg-surface p-7 transition-colors hover:border-border-bright"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-foreground-bright">
                      {build.name}
                    </h4>
                    {build.href ? (
                      <ArrowUpRight
                        size={16}
                        className="flex-shrink-0 text-foreground-muted transition-colors group-hover:text-accent"
                      />
                    ) : null}
                  </div>
                  <span className="mb-4 inline-flex w-fit rounded-full bg-accent/8 px-2.5 py-0.5 text-[11px] font-medium text-accent">
                    {build.status}
                  </span>
                  <p className="mb-5 text-sm leading-relaxed text-foreground">
                    {build.body}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {build.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-background px-2.5 py-1 text-[11px] text-foreground-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Tag>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
