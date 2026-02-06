"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Grünzucker GmbH",
    subtitle: "Current Consulting Mandate",
    description:
      "Building operational foundations for an early-stage company — creating financial models, forecasts, and pitch decks to acquire investors and partners.",
    tags: ["Financial Modeling", "Pitch Decks", "Operations"],
    glow: "group-hover:border-accent/30 group-hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.15)]",
    tagColor: "text-accent",
  },
  {
    title: "Brasiventures",
    subtitle: "Founder & Business Development Lead",
    description:
      "Built a company presence and brand awareness from zero. Independently managed all sales activities and contract negotiations with entrepreneurs and wholesalers.",
    tags: ["Entrepreneurship", "Sales", "Brand Building"],
    glow: "group-hover:border-accent2/30 group-hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)]",
    tagColor: "text-accent2",
  },
  {
    title: "Post-Merger Portfolio Cleanup",
    subtitle: "Gorillas / Getir — DACH Region",
    description:
      "Led the wind-down of 45 commercial properties after the Getir acquisition. Built centralized data trackers as single source of truth for C-level decision-making.",
    tags: ["M&A Integration", "Data Management", "Stakeholder Mgmt"],
    glow: "group-hover:border-accent/30 group-hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.15)]",
    tagColor: "text-accent",
  },
  {
    title: "Everyfy",
    subtitle: "Former Consulting Mandate",
    description:
      "Advised on pitch deck creation and financial modeling for a German Instacart model startup seeking early-stage funding.",
    tags: ["Startup Advisory", "Financial Modeling"],
    glow: "group-hover:border-accent2/30 group-hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)]",
    tagColor: "text-accent2",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 font-mono text-sm text-accent">Projects</h2>
          <h3 className="mb-14 text-2xl font-bold text-foreground-bright md:text-3xl">
            Selected work
          </h3>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group rounded-xl border border-border bg-surface p-6 transition-all duration-300 ${project.glow}`}
            >
              <div className="mb-1 flex items-start justify-between">
                <h4 className="text-base font-semibold text-foreground-bright">
                  {project.title}
                </h4>
                <ArrowUpRight
                  size={15}
                  className="mt-0.5 flex-shrink-0 text-foreground-muted opacity-0 transition-opacity group-hover:opacity-100"
                />
              </div>

              <p className={`mb-3 text-sm ${project.tagColor}`}>
                {project.subtitle}
              </p>

              <p className="mb-4 text-sm leading-relaxed text-foreground/70">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-background px-2.5 py-1 text-[11px] text-foreground-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
