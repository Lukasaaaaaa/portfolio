"use client";

import { ReactNode, useEffect } from "react";
import { LanguageProvider, useLanguage } from "@/lib/language-context";

function HtmlLangUpdater() {
  const { lang } = useLanguage();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <HtmlLangUpdater />
      {children}
    </LanguageProvider>
  );
}
