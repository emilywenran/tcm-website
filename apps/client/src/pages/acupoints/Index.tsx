import { SiteLayout, SectionKicker } from "@/components/site/SiteLayout";
import { useLanguage } from "@/i18n/LanguageContext";
import { acupointsText } from "@/i18n/translations";

export default function AcupointsPage() {
  const { language, isEnglish } = useLanguage();
  const t = acupointsText[language];
  const atlasSrc = isEnglish ? "/meridian-atlas-en.html" : "/meridian-atlas-zh.html";

  return (
    <SiteLayout>
      {/* @section: meridian-hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionKicker>{t.kicker}</SectionKicker>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <h1 className="font-serif text-5xl leading-tight tracking-[0.12em] sm:text-6xl">{t.title}</h1>
          <p className="max-w-3xl text-base leading-8 text-[#1A1812]/68">{t.intro}</p>
        </div>
      </section>

      {/* @section: meridian-atlas-embed */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[12px] border border-[#D8D3CC] bg-[#F9F5EF]/70 shadow-[0_24px_80px_rgba(26,24,18,0.08)]">
          <div className="flex flex-col gap-3 border-b border-[#D8D3CC]/75 bg-[#F5F0E8]/85 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <p className="text-xs tracking-[0.28em] text-[#8C3A2E]">{t.atlasLabel}</p>
              <h2 className="mt-1 font-serif text-2xl tracking-[0.12em] text-[#1A1812] sm:text-3xl">{t.atlasTitle}</h2>
            </div>
            <p className="max-w-xl text-xs leading-6 text-[#1A1812]/58 sm:text-right">{t.atlasHint}</p>
          </div>
          <iframe
            key={language}
            src={atlasSrc}
            title={t.iframeTitle}
            className="block h-[1040px] w-full border-0 bg-[#F5F0E8] md:h-[940px] lg:h-[860px]"
            loading="lazy"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
