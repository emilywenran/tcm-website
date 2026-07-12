import { NavLink, Link } from "react-router-dom";
import type { ReactNode } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { navText } from "@/i18n/translations";

const navItems = [
  { to: "/", key: "time" },
  { to: "/quiz", key: "quiz" },
  { to: "/herbs", key: "herbs" },
  { to: "/acupoints", key: "acupoints" }
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const { language, toggleLanguage } = useLanguage();
  const t = navText[language];

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#1A1812] paper-texture selection:bg-[#8C3A2E]/20 selection:text-[#1A1812]">
      {/* @section: site-navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#D8D3CC]/70 bg-[#F5F0E8]/82 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="font-serif text-xl tracking-[0.18em] text-[#1A1812] sm:text-2xl">
            HERBA <span className="text-[#8C3A2E]">&</span> SOUL
          </Link>
          <div className="flex items-center gap-1 text-xs tracking-[0.18em] sm:gap-3 sm:text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }: { isActive: boolean }) =>
                  `rounded-[8px] border px-3 py-2 transition duration-300 hover:border-[#8C3A2E] hover:text-[#8C3A2E] ${
                    isActive ? "border-[#8C3A2E]/60 text-[#8C3A2E]" : "border-transparent text-[#1A1812]/70"
                  }`
                }
              >
                {t[item.key]}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={toggleLanguage}
              className="rounded-[8px] border border-[#8C3A2E]/45 px-3 py-2 text-[#8C3A2E] transition duration-300 hover:bg-[#8C3A2E]/10"
              aria-label={language === "en" ? "Switch to Chinese" : "切换为英文"}
            >
              {t.switchLabel}
            </button>
          </div>
        </nav>
      </header>
      <main className="pt-16">{children}</main>
      {/* @section: site-footer */}
      <footer className="border-t border-[#D8D3CC] px-4 py-10 text-center text-xs leading-6 tracking-[0.12em] text-[#1A1812]/55">
        <p>{t.footer1}</p>
        <p>{t.footer2}</p>
      </footer>
    </div>
  );
}

export function SectionKicker({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-xs font-medium tracking-[0.32em] text-[#8C3A2E]">{children}</p>;
}
