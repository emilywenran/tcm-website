import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SiteLayout, SectionKicker } from "@/components/site/SiteLayout";
import { getCurrentMeridian, meridianClock } from "@/data/meridianClock";
import { getCurrentSolarTerm } from "@/data/solarTerms";
import { useLanguage } from "@/i18n/LanguageContext";
import { homeText, meridianEn, solarTermEn } from "@/i18n/translations";

interface WellnessAction {
  label: string;
  title: string;
  desc: string;
}
interface WellnessCalendar {
  _meta: { solarTerm: string; solarTermEn: string; startDate: string; nextTermDate: string; generatedAt: string };
  zh: { actions: WellnessAction[] };
  en: { actions: WellnessAction[] };
}

const toneClass = {
  ink: "from-[#1A1812] via-[#2A2721] to-[#3D5A6E] text-[#F5F0E8]",
  dawn: "from-[#F5F0E8] via-[#EFE1BD] to-[#D8D3CC] text-[#1A1812]",
  warm: "from-[#F5F0E8] via-[#E7D1B4] to-[#C8A27D] text-[#1A1812]",
  bamboo: "from-[#F5F0E8] via-[#DDE2D0] to-[#B8C1A3] text-[#1A1812]",
  blue: "from-[#F5F0E8] via-[#DDE5E8] to-[#B8C6CC] text-[#1A1812]"
};

const entryRoutes = ["/quiz", "/herbs", "/acupoints", "#wellness-section"];

function formatDate(date: Date, isEnglish: boolean) {
  if (isEnglish) return new Intl.DateTimeFormat("en", { year: "numeric", month: "long", day: "numeric" }).format(date);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

const Index = () => {
  const [now, setNow] = useState(() => new Date());
  const { language, isEnglish } = useLanguage();
  const t = homeText[language];
  const [wellnessData, setWellnessData] = useState<WellnessCalendar | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line local/no-direct-api-request -- static public JSON, not an API request
    fetch("/wellness-calendar.json")
      .then((r) => r.json())
      .then((data: WellnessCalendar) => setWellnessData(data))
      .catch(() => setWellnessData(null));
  }, []);

  const meridian = useMemo(() => getCurrentMeridian(now), [now]);
  const solarTerm = useMemo(() => getCurrentSolarTerm(now), [now]);
  const meridianCopy = isEnglish ? meridianEn[meridian.branch] : meridian;
  const solarTermCopy = isEnglish ? solarTermEn[solarTerm.name] : solarTerm;
  const isLateNight = now.getHours() >= 23 || now.getHours() < 5;

  return (
    <SiteLayout>
      {/* @section: dynamic-hero */}
      <section className={`relative min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-br ${toneClass[meridian.tone]}`}>
        <div className="absolute inset-0 opacity-[0.08] ink-wash" />
        <div className="absolute -left-20 top-24 h-64 w-64 rounded-full border border-current/20" />
        <div className="absolute bottom-10 right-6 hidden h-96 w-96 rounded-full border border-current/15 md:block" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-8 text-xs tracking-[0.42em] opacity-70">{t.tagline}</p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.08] tracking-[0.14em] sm:text-7xl lg:text-8xl">
              {t.titleLeft}
              <span className="mx-2 text-[#8C3A2E]">·</span>
              {t.titleRight}
            </h1>
            <div className="my-10 h-px w-28 bg-current/30" />
            <blockquote className="font-serif text-2xl leading-relaxed tracking-[0.06em] sm:text-4xl">"{meridianCopy.quote}"</blockquote>
            <p className="mt-8 max-w-2xl text-base leading-8 opacity-82 sm:text-lg">{meridianCopy.tip}</p>
            {isLateNight && (
              <p className="mt-5 inline-flex rounded-[8px] border border-[#8C3A2E]/45 bg-[#8C3A2E]/10 px-4 py-3 text-sm leading-7 text-[#8C3A2E]">
                {t.lateNight}
              </p>
            )}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/quiz" className="rounded-[8px] border border-current/50 px-5 py-3 text-sm tracking-[0.18em] transition hover:border-[#8C3A2E] hover:text-[#8C3A2E]">
                {t.start}
              </Link>
              <a href="#calendar" className="rounded-[8px] border border-current/20 px-5 py-3 text-sm tracking-[0.18em] transition hover:border-current/60">
                {t.today}
              </a>
            </div>
          </div>
          <aside className="rounded-[8px] border border-current/20 bg-[#F5F0E8]/12 p-5 backdrop-blur-sm sm:p-8">
            <p className="text-xs tracking-[0.32em] opacity-65">{t.now}</p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="border-b border-current/20 pb-4">
                <p className="font-serif text-4xl">{meridianCopy.branch}</p>
                <p className="mt-2 text-sm opacity-70">{meridian.range} · {meridianCopy.meridian}</p>
              </div>
              <div className="border-b border-current/20 pb-4">
                <p className="font-serif text-4xl">{solarTermCopy.name}</p>
                <p className="mt-2 text-sm opacity-70">{formatDate(now, isEnglish)}</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 opacity-78">{solarTermCopy.hint}</p>
            {/* @section: meridian-clock-map — 12时辰 3×4 网格 */}
            <div className="mt-6">
              <p className="mb-2 text-[10px] tracking-[0.28em] opacity-50">{isEnglish ? "Meridian Hours" : "十二时辰"}</p>
              <div className="grid grid-cols-4 gap-1.5">
                {meridianClock.map((item) => {
                  const isActive = item.branch === meridian.branch;
                  return (
                    <div
                      key={item.branch}
                      title={`${isEnglish ? meridianEn[item.branch].branch : item.branch} · ${isEnglish ? meridianEn[item.branch].meridian : item.meridian} · ${item.range}`}
                      className={`flex flex-col items-center rounded-[6px] border px-1 py-1.5 transition ${isActive ? "border-[#8C3A2E] bg-[#8C3A2E]/15" : "border-current/15 bg-current/5"}`}
                    >
                      <span className={`text-[11px] font-medium leading-none ${isActive ? "text-[#8C3A2E]" : "opacity-60"}`}>
                        {isEnglish ? meridianEn[item.branch].branch.split(" ")[0] : item.branch.slice(0, 1)}
                      </span>
                      <span className={`mt-0.5 text-[9px] leading-none ${isActive ? "text-[#8C3A2E]/80" : "opacity-40"}`}>
                        {isEnglish ? meridianEn[item.branch].meridian.split(" ")[0] : item.meridian.slice(0, 2)}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="mt-2 text-[10px] opacity-40 tracking-[0.14em]">{isEnglish ? "Highlighted: current hour" : "高亮为当前时辰"}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* @section: module-entry-cards */}
      <section id="calendar" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionKicker>{t.kicker}</SectionKicker>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h2 className="font-serif text-4xl leading-tight tracking-[0.12em] sm:text-5xl">{t.heading}</h2>
          <p className="max-w-2xl text-sm leading-7 text-[#1A1812]/68 sm:text-base">{t.intro}</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.entries.map((entry, index) => {
            const isAnchor = entryRoutes[index].startsWith("#");
            const cardClass = `group rounded-[8px] border border-[#D8D3CC] bg-[#F9F5EF]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8C3A2E] ${index === 0 ? "lg:row-span-2 lg:min-h-80" : ""}`;
            const inner = (
              <>
                <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#D8D3CC] font-serif text-4xl text-[#8C3A2E] transition group-hover:scale-105">{entry.mark}</div>
                <h3 className="font-serif text-2xl tracking-[0.12em]">{entry.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#1A1812]/64">{entry.desc}</p>
              </>
            );
            return isAnchor ? (
              <a key={entry.title} href={entryRoutes[index]} className={cardClass}>{inner}</a>
            ) : (
              <Link key={entry.title} to={entryRoutes[index]} className={cardClass}>{inner}</Link>
            );
          })}
        </div>
      </section>

      {/* @section: wellness-calendar */}
      <section id="wellness-section" className="border-t border-[#D8D3CC] bg-[#F5F0E8]/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionKicker>{t.calendarKicker}</SectionKicker>
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2 className="font-serif text-4xl leading-tight tracking-[0.12em] sm:text-5xl">{t.calendarHeading}</h2>
            <p className="max-w-2xl text-sm leading-7 text-[#1A1812]/68 sm:text-base">{t.calendarIntro}</p>
          </div>

          {/* today block */}
          <div className="rounded-[8px] border border-[#D8D3CC] bg-white/70 p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.32em] text-[#1A1812]/55">{t.calendarToday}</p>
                <p className="mt-2 font-serif text-3xl tracking-[0.12em]">{isEnglish ? meridianEn[meridian.branch].meridian : meridian.meridian}</p>
                <p className="mt-1 text-sm text-[#1A1812]/55">{meridian.range} · {isEnglish ? meridianEn[meridian.branch].branch : meridian.branch}</p>
              </div>
              <div className="text-right">
                <p className="text-xs tracking-[0.32em] text-[#1A1812]/55">{isEnglish ? solarTermEn[solarTerm.name]?.name : solarTerm.name}</p>
                <p className="mt-2 text-sm text-[#1A1812]/68">{isEnglish ? solarTermEn[solarTerm.name]?.hint : solarTerm.hint}</p>
              </div>
            </div>

            {/* action suggestions — driven by wellness-calendar.json */}
            {(() => {
              const actions = wellnessData
                ? (isEnglish ? wellnessData.en.actions : wellnessData.zh.actions)
                : t.calendarActions;
              return (
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {actions.map((action) => (
                    <div key={action.label} className="rounded-[6px] border border-[#D8D3CC] bg-[#F9F5EF]/80 p-5">
                      <p className="mb-2 text-xs tracking-[0.28em] text-[#8C3A2E]">{action.label}</p>
                      <p className="font-serif text-lg leading-snug tracking-[0.08em]">{action.title}</p>
                      <p className="mt-2 text-sm leading-6 text-[#1A1812]/62">{action.desc}</p>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>

          {/* coming soon hint */}
          <p className="mt-6 text-center text-xs tracking-[0.24em] text-[#1A1812]/38">{t.calendarComing}</p>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Index;
