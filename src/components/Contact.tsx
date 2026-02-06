"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Contact() {
  const { t } = useLanguage();

  const contactLinks = [
    {
      icon: Mail,
      label: "luca@gurny.de",
      href: "mailto:luca@gurny.de",
      hoverColor: "group-hover:text-accent",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/lukasgurny/",
      hoverColor: "group-hover:text-[#0a66c2]",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Lukasaaaaaa",
      hoverColor: "group-hover:text-foreground-bright",
    },
    {
      icon: MapPin,
      label: t("Berlin, Germany", "Berlin, Deutschland"),
      href: undefined,
      hoverColor: "group-hover:text-accent2",
    },
  ];

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 font-mono text-sm text-accent">
            {t("Contact", "Kontakt")}
          </h2>
          <h3 className="mb-4 text-2xl font-bold text-foreground-bright md:text-3xl">
            {t("Let's connect", "Vernetzen wir uns")}
          </h3>
          <p className="mb-10 max-w-md text-base">
            {t(
              "I'm always open to discussing operational challenges, startup consulting, or interesting collaboration opportunities.",
              "Ich bin immer offen für Gespräche über operative Herausforderungen, Startup-Beratung oder interessante Kooperationsmöglichkeiten."
            )}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid gap-3 sm:grid-cols-2"
        >
          {contactLinks.map((link) => {
            const Icon = link.icon;
            const Tag = link.href ? "a" : "div";
            return (
              <Tag
                key={link.label}
                {...(link.href
                  ? {
                      href: link.href,
                      target: link.href.startsWith("http")
                        ? "_blank"
                        : undefined,
                      rel: link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined,
                    }
                  : {})}
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-all hover:border-border-bright"
              >
                <Icon
                  size={18}
                  className={`flex-shrink-0 text-foreground-muted transition-colors ${link.hoverColor}`}
                />
                <span className="text-sm text-foreground-bright">
                  {link.label}
                </span>
              </Tag>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
