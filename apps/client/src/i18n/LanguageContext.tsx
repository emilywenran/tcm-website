import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "zh" | "en";

type LanguageContextValue = {
  language: Language;
  isEnglish: boolean;
  toggleLanguage: () => void;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "zh";
    return window.localStorage.getItem("bencao-language") === "en" ? "en" : "zh";
  });

  useEffect(() => {
    window.localStorage.setItem("bencao-language", language);
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    isEnglish: language === "en",
    setLanguage: setLanguageState,
    toggleLanguage: () => setLanguageState((current) => (current === "en" ? "zh" : "en"))
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
