"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Products() {
  const { t } = useLanguage();

  const products = [
    {
      title: "ertragwerk",
      subtitle: t(
        "Real estate investment analysis for the German market",
        "Immobilien-Investment-Analyse für den deutschen Markt"
      ),
      description: t(
        "SaaS tool that calculates cashflow, tax savings (AfA, Splitting), and 30-year projections for property investments. Freemium model with AI-powered SWOT analysis and scenario simulator.",
        "SaaS-Tool das Cashflow, Steuerersparnis (AfA, Splitting) und 30-Jahres-Prognosen für Immobilien-Investments berechnet. Freemium-Modell mit KI-gestützter SWOT-Analyse und Szenario-Simulator."
      ),
      url: "https://ertragwerk.de",
      tags: ["Next.js", "Supabase", "Stripe", "OpenAI"],
      status: "Live",
      glow: "group-hover:border-accent/30 group-hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.15)]",
      tagColor: "text-accent",
    },
  ];

  return (
    <section id="products" className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 font-mono text-sm text-accent">
            {t("Product", "Produkt")}
          </h2>
          <h3 className="mb-4 text-2xl font-bold text-foreground-bright md:text-3xl">
            {t("A live product I built", "Ein Live-Produkt, das ich gebaut habe")}
          </h3>
          <p className="mb-14 max-w-2xl text-base text-foreground-muted">
            {t(
              "Built and run on the side. Separate from consulting mandates, priced independently.",
              "Nebenher gebaut und betrieben. Getrennt vom Beratungsangebot, unabhängig bepreist."
            )}
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {products.map((product, i) => (
            <motion.a
              key={product.title}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group rounded-xl border border-border bg-surface p-6 transition-all duration-300 ${product.glow}`}
            >
              <div className="mb-1 flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-semibold text-foreground-bright">
                    {product.title}
                  </h4>
                  <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-medium text-success">
                    <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                    {product.status}
                  </span>
                </div>
                <ArrowUpRight
                  size={15}
                  className="mt-0.5 flex-shrink-0 text-foreground-muted opacity-0 transition-opacity group-hover:opacity-100"
                />
              </div>

              <p className={`mb-3 text-sm ${product.tagColor}`}>
                {product.subtitle}
              </p>

              <p className="mb-4 text-sm leading-relaxed text-foreground/70">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-background px-2.5 py-1 text-[11px] text-foreground-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
