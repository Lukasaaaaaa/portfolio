"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

interface Recommendation {
  name: string;
  headline: string;
  linkedinUrl: string;
  relationship: { en: string; de: string };
  date: { en: string; de: string };
  text: { en: string; de: string };
  initials: string;
}

const recommendations: Recommendation[] = [
  {
    name: "Craig Simpson",
    headline: "Ex-Oda · Ex-Getir/Gorillas",
    linkedinUrl: "https://www.linkedin.com/in/craig-simpson-9841908a/",
    relationship: {
      en: "Direct Manager",
      de: "Direkter Vorgesetzter",
    },
    date: {
      en: "January 31, 2024",
      de: "31. Januar 2024",
    },
    text: {
      en: "Lukas was an integral, and invaluable member of the Real Estate and Expansion team at Getir / Gorillas. On a professional level, Lukas is an agile, diligent and driven Project Manager, with the unique ability to maintain clarity amidst uncertainty. On a personal level, an honest, empathetic and humble individual whom it was a pleasure to work alongside.",
      de: "Lukas war ein wesentliches und unverzichtbares Mitglied des Real Estate und Expansion Teams bei Getir / Gorillas. Auf professioneller Ebene ist Lukas ein agiler, sorgfältiger und motivierter Projektmanager mit der einzigartigen Fähigkeit, inmitten von Unsicherheit Klarheit zu bewahren. Auf persönlicher Ebene ein ehrlicher, empathischer und bescheidener Mensch, mit dem es eine Freude war zusammenzuarbeiten.",
    },
    initials: "CS",
  },
  {
    name: "Christian Heins",
    headline: "Data, WebApps, Finance Controller & Engineer, Real Estate",
    linkedinUrl: "https://www.linkedin.com/in/christian-h-0545aaa1/",
    relationship: {
      en: "Senior Colleague",
      de: "Ranghöherer Kollege",
    },
    date: {
      en: "November 29, 2023",
      de: "29. November 2023",
    },
    text: {
      en: "Lukas is one of the greatest persons I've had the pleasure to work with, his hands-on mentality and willingness to learn attitude towards business development, new technologies and new opportunities make of him a great asset for any company / organisation.\n\nGreat developer of no code / low code tools such as Airtable, Notion, Google Suite, Zapier.",
      de: "Lukas ist eine der großartigsten Personen, mit denen ich das Vergnügen hatte zusammenzuarbeiten. Seine Hands-on-Mentalität und seine Lernbereitschaft in Bezug auf Business Development, neue Technologien und neue Möglichkeiten machen ihn zu einem großen Gewinn für jedes Unternehmen / jede Organisation.\n\nGroßartiger Entwickler von No-Code / Low-Code Tools wie Airtable, Notion, Google Suite, Zapier.",
    },
    initials: "CH",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.96,
  }),
};

export default function Recommendations() {
  const { lang, t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const navigate = useCallback(
    (newIndex: number) => {
      setDirection(newIndex > current ? 1 : -1);
      setCurrent(newIndex);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % recommendations.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + recommendations.length) % recommendations.length
    );
  }, []);

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const rec = recommendations[current];

  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 font-mono text-sm text-accent">
            {t("Recommendations", "Empfehlungen")}
          </h2>
          <h3 className="mb-14 text-2xl font-bold text-foreground-bright md:text-3xl">
            {t("What colleagues say", "Was Kollegen sagen")}
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            {/* LinkedIn header bar */}
            <div className="flex items-center justify-between border-b border-border bg-background/50 px-6 py-3">
              <div className="flex items-center gap-2">
                <Linkedin size={16} className="text-[#0a66c2]" />
                <span className="text-[11px] font-medium text-foreground-muted">
                  LinkedIn {t("Recommendation", "Empfehlung")}
                </span>
              </div>
              <a
                href="https://www.linkedin.com/in/lukasgurny/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-[#0a66c2]/30 bg-[#0a66c2]/10 px-3 py-1 text-[10px] font-medium text-[#0a66c2] transition-all hover:bg-[#0a66c2]/20"
              >
                <Linkedin size={10} />
                {t("View Profile", "Profil ansehen")}
              </a>
            </div>

            {/* Animated card content */}
            <div className="relative min-h-[280px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="px-6 py-6"
                >
                  {/* Profile row */}
                  <div className="mb-5 flex items-start gap-4">
                    {/* Avatar with initials */}
                    <a
                      href={rec.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0a66c2] to-[#004182] text-sm font-bold text-white transition-shadow hover:shadow-[0_0_12px_rgba(10,102,194,0.4)]"
                    >
                      {rec.initials}
                    </a>
                    <div className="flex-1">
                      <a
                        href={rec.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-foreground-bright transition-colors hover:text-[#0a66c2]"
                      >
                        {rec.name}
                      </a>
                      <p className="mt-0.5 text-xs text-foreground-muted">
                        {rec.headline}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#0a66c2]/10 px-2.5 py-0.5 text-[10px] font-medium text-[#0a66c2]">
                          {lang === "de"
                            ? rec.relationship.de
                            : rec.relationship.en}
                        </span>
                        <span className="text-[10px] text-foreground-muted/60">
                          {lang === "de" ? rec.date.de : rec.date.en}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote
                      size={24}
                      className="absolute -left-1 -top-1 text-accent/10"
                    />
                    <p className="pl-6 text-sm leading-relaxed text-foreground whitespace-pre-line">
                      {lang === "de" ? rec.text.de : rec.text.en}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation footer */}
            <div className="flex items-center justify-between border-t border-border px-6 py-3">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {recommendations.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => navigate(i)}
                    className="group relative flex h-5 w-5 items-center justify-center"
                  >
                    <span
                      className={`block rounded-full transition-all duration-300 ${
                        i === current
                          ? "h-2 w-2 bg-[#0a66c2] shadow-[0_0_8px_rgba(10,102,194,0.4)]"
                          : "h-1.5 w-1.5 bg-foreground-muted/30 group-hover:bg-foreground-muted/60"
                      }`}
                    />
                  </button>
                ))}
                {/* Progress bar for auto-play */}
                {!paused && (
                  <div className="ml-2 h-0.5 w-12 overflow-hidden rounded-full bg-border">
                    <motion.div
                      key={`progress-${current}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                      className="h-full rounded-full bg-[#0a66c2]/50"
                    />
                  </div>
                )}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-1">
                <button
                  onClick={prev}
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-accent/25 bg-accent/5 text-foreground-bright transition-all hover:border-accent/40 hover:bg-accent/10"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={next}
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-accent/25 bg-accent/5 text-foreground-bright transition-all hover:border-accent/40 hover:bg-accent/10"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
