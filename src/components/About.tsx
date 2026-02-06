"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 font-mono text-sm text-accent">
            {t("About", "Über mich")}
          </h2>
          <h3 className="mb-8 text-2xl font-bold text-foreground-bright md:text-3xl">
            {t(
              "Enabling companies, not just advising them",
              "Unternehmen befähigen, nicht nur beraten"
            )}
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-border bg-surface p-6 sm:p-8"
        >
          <div className="space-y-5 text-base leading-relaxed">
            <p>
              {t(
                "I'm Lukas, based in Berlin. After my Bachelor's in Business Administration, I founded Brasiventures, a CBD brand. Packaging, Shopify store, distribution to Berlin kiosks, all built by myself. That's where I learned what it means to take a product from zero to market. Every decision, every mistake, every win was on me.",
                "Ich bin Lukas aus Berlin. Nach meinem Bachelor in BWL habe ich Brasiventures gegründet, eine CBD-Marke. Verpackung, Shopify-Store, Vertrieb an Berliner Kioske, alles selbst aufgebaut. Dort habe ich gelernt, was es heißt, ein Produkt von Null auf die Straße zu bringen. Jede Entscheidung, jeder Fehler, jeder Erfolg ging direkt auf mein Konto."
              )}
            </p>

            <p>
              {t(
                "Then I landed at Gorillas right in the middle of hypergrowth. As Expansion Manager, I was responsible for building permits and fire safety across nearly 100 locations, with a budget of over 2 million euros. What started as an Excel spreadsheet, I turned into an Airtable dashboard that put Ops and Legal on the same data foundation for the first time. I grew into a role that didn't exist before, into a problem nobody wanted to touch.",
                "Danach bin ich bei Gorillas mitten im Hypergrowth gelandet. Als Expansion Manager war ich für Baugenehmigungen und Brandschutz an knapp 100 Standorten verantwortlich, mit einem Budget von über 2 Millionen Euro. Was als Excel-Tabelle anfing, habe ich in ein Airtable-Dashboard überführt, das Ops und Legal erstmals auf die gleiche Datenbasis gebracht hat. Ich bin dort reingewachsen, in eine Rolle, die es vorher nicht gab, in ein Thema, das keiner anfassen wollte."
              )}
            </p>

            <p>
              {t(
                "In the renewable energy industry came the lesson that changed everything. I built the right system, but nobody used it. The boss didn't understand it, so the team ignored it. That's when I realized: digitalization in Germany doesn't fail because of technology. It fails because of culture. Knowledge silos, dependency on individuals, fear of change. The GPT workshops I ran afterward actually worked, because they met people where they were. I showed people what AI could do for them directly, within their spectrum of daily tasks. Still, I moved on from that chapter quickly.",
                "In der Erneuerbaren-Energie-Branche kam dann die Lektion, die alles verändert hat. Ich habe das richtige System gebaut, aber niemand hat es genutzt. Der Chef hat es nicht verstanden, also hat das Team es ignoriert. Da habe ich begriffen: Digitalisierung scheitert in Deutschland nicht an der Technologie. Sie scheitert an der Kultur. An Wissenssilos, an Abhängigkeiten von Einzelpersonen, an der Angst vor Veränderung. Die GPT-Workshops, die ich danach gegeben habe, haben funktioniert, weil sie die Menschen dort abgeholt haben, wo sie standen. Ich habe Menschen gezeigt, was KI für sie machen kann, direkt und in ihrem Spektrum an Alltagstätigkeiten. Nichtsdestotrotz habe ich diese Station schnell wieder verlassen."
              )}
            </p>

            <p>
              {t(
                "The digitalization wasteland in the German Mittelstand has shaped me and still keeps me up at night. That's why I want to do it better, not just complain. I completed courses in Business Information Systems to qualify for the Master's program, which I'm now doing at the University of Potsdam with a focus on AI and digital transformation. Today I work with a biotech founder on everything his company needs, website, pitch deck, investor relations, market validation. And I build my own products because I want to understand what's possible with the tools I recommend to others.",
                "Die Digitalisierungswüste im deutschen Mittelstand hat mich geprägt und bereitet mir immer noch schlaflose Nächte. Deswegen will ich es besser machen, nicht nur nörgeln. Ich habe Kurse in Wirtschaftsinformatik nachgeholt, um den Master beginnen zu können, den ich jetzt an der Uni Potsdam mache, mit Fokus auf KI und digitale Transformation. Heute arbeite ich mit einem Biotech-Gründer an allem, was sein Unternehmen braucht: Website, Pitch Deck, Investor Relations, Marktvalidierung. Und ich baue eigene Produkte, weil ich verstehen will, was mit den Werkzeugen möglich ist, die ich anderen empfehle."
              )}
            </p>

            <p>
              {t(
                "For me, it's about more than efficiency. I've seen companies suffocate under their own structures. Knowledge disappearing inside individual heads instead of living in the system. Changing that, enabling companies, not just advising them, that's what I get up for in the morning.",
                "Mir geht es dabei um mehr als Effizienz. Ich habe gesehen, wie Unternehmen an ihren eigenen Strukturen ersticken. Wie Wissen in einzelnen Köpfen verschwindet statt im System zu leben. Das zu ändern, Unternehmen befähigen, nicht nur beraten, das ist, wofür ich morgens aufstehe."
              )}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
