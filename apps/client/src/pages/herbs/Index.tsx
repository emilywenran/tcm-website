import { useMemo, useState } from "react";
import { SiteLayout, SectionKicker } from "@/components/site/SiteLayout";
import { constitutions, type ConstitutionKey } from "@/data/constitutions";
import { herbs } from "@/data/herbs";
import { useLanguage } from "@/i18n/LanguageContext";
import { constitutionEn, herbEn, herbsText } from "@/i18n/translations";

const herbImages: Record<string, string> = {
  "黄芪": "/images/herbs/huangqi-slices-plate-v2.png",
  "红枣": "/images/herbs/hongzao.png",
  "麦冬": "https://skyagent-artifacts.skywork.ai/router/agent/2026-07-08/prod_agent_019f3d31-a3cd-7ae3-86d5-f9312ffd7d05/maidong_httpx_21987696_1_6b8a6982acc74690a05e8d5964fe19f1.png",
  "茯苓": "https://skyagent-artifacts.skywork.ai/router/agent/2026-07-08/prod_agent_019f3d31-a3cd-7ae3-86d5-f9312ffd7d05/fuling_httpx_951735d2_1_fecfed6951654da08e260cf7f7e71d71.webp",
  "枸杞": "/images/herbs/gouqi.png",
  "玫瑰": "/images/herbs/meigui.png",
  "陈皮": "/images/herbs/chenpi.jpg",
  "当归": "/images/herbs/danggui.jpg",
  "薏苡仁": "/images/herbs/yiyiren.jpg",
  "山药": "/images/herbs/shanyao.png",
  "菊花": "/images/herbs/juhua.jpg",
  "桂圆": "/images/herbs/guiyuan.jpg",
  "生姜": "/images/herbs/shengjiang.jpg",
  "桂皮": "https://skyagent-artifacts.skywork.ai/router/agent/2026-07-08/prod_agent_019f3d31-a3cd-7ae3-86d5-f9312ffd7d05/guipi_httpx_effbf31b_1_2602de9461bd4fe19d7358ddf500e579.webp",
  "莲子": "https://skyagent-artifacts.skywork.ai/router/agent/2026-07-08/prod_agent_019f3d31-a3cd-7ae3-86d5-f9312ffd7d05/lianzi_httpx_1c587bd9_1_080d2e0f5d384d6192c352b3a031ad87.jpeg",
  "百合": "/images/herbs/baihe.jpg",
  "决明子": "/images/herbs/juemingzi.jpg",
  "五味子": "/images/herbs/wuweizi.jpg",
  "丹参": "/images/herbs/danshen.jpg",
  "藿香": "/images/herbs/huoxiang.jpg",
};

const herbPreviewImages: Record<string, string> = {
  "黄芪": "/images/herbs/huangqi-slices-plate-v2.png",
  "红枣": "/images/herbs/hongzao.png",
  "枸杞": "/images/herbs/gouqi.png",
  "玫瑰": "/images/herbs/meigui.png",
  "陈皮": "/images/herbs/chenpi.jpg",
  "当归": "/images/herbs/danggui.jpg",
  "薏苡仁": "/images/herbs/yiyiren.jpg",
  "山药": "/images/herbs/shanyao.png",
  "菊花": "/images/herbs/juhua.jpg",
  "桂圆": "/images/herbs/guiyuan.jpg",
  "生姜": "/images/herbs/shengjiang.jpg",
  "百合": "/images/herbs/baihe.jpg",
  "决明子": "/images/herbs/juemingzi.jpg",
  "五味子": "/images/herbs/wuweizi.jpg",
  "丹参": "/images/herbs/danshen.jpg",
  "藿香": "/images/herbs/huoxiang.jpg",
};

export default function HerbsPage() {
  const [filter, setFilter] = useState<"all" | ConstitutionKey>("all");
  const { language, isEnglish } = useLanguage();
  const t = herbsText[language];
  const filters: Array<{ key: "all" | ConstitutionKey; label: string }> = [
    { key: "all", label: t.all },
    ...constitutions.map((item) => ({ key: item.key, label: isEnglish ? constitutionEn[item.key].shortName : item.shortName }))
  ];
  const visibleHerbs = useMemo(() => (filter === "all" ? herbs : herbs.filter((herb) => herb.suitable.includes(filter))), [filter]);

  return (
    <SiteLayout>
      {/* @section: herbs-hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionKicker>{t.kicker}</SectionKicker>
        <div className="grid gap-8 border-b border-[#D8D3CC] pb-12 lg:grid-cols-[0.7fr_1.3fr]">
          <h1 className="font-serif text-5xl leading-tight tracking-[0.12em] sm:text-6xl">{t.title}</h1>
          <p className="max-w-3xl text-base leading-8 text-[#1A1812]/68">{t.intro}</p>
        </div>
      </section>

      {/* @section: constitution-filter */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="sticky top-16 z-20 -mx-4 mb-8 border-y border-[#D8D3CC] bg-[#F5F0E8]/90 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-[8px] sm:border">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {filters.map((item) => (
              <button key={item.key} onClick={() => setFilter(item.key)} className={`shrink-0 rounded-[8px] border px-4 py-2 text-sm tracking-[0.12em] transition hover:border-[#8C3A2E] ${filter === item.key ? "border-[#8C3A2E] text-[#8C3A2E]" : "border-[#D8D3CC] text-[#1A1812]/68"}`}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleHerbs.map((herb) => {
            const copy = isEnglish ? herbEn[herb.name] : herb;
            return (
              <article key={herb.name} className="group rounded-[8px] border border-[#D8D3CC] bg-[#F9F5EF]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8C3A2E]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#1A1812]/40">{herb.pinyin}</p>
                    <h2 className="mt-2 font-serif text-4xl tracking-[0.12em]">{copy.name}</h2>
                  </div>
                  <span className="rounded-full border border-[#8C3A2E]/30 px-3 py-1 text-xs text-[#8C3A2E]">{copy.nature}</span>
                </div>
                {herbImages[herb.name] ? (
                  <div className="group/image relative my-6 h-36 overflow-visible rounded-[8px] border border-[#D8D3CC] bg-[#F5F0E8]">
                    {/* @section: herb-image-hover-preview */}
                    <div className="h-full overflow-hidden rounded-[8px] bg-white/60">
                      <img src={herbImages[herb.name]} alt={herb.name} className="h-full w-full object-cover opacity-90 transition duration-300 group-hover/image:scale-105 group-hover/image:opacity-0" />
                    </div>
                    {herbPreviewImages[herb.name] && (
                      <div className="pointer-events-none absolute inset-0 z-30 flex scale-95 items-center justify-center overflow-hidden rounded-[10px] border border-[#8C3A2E]/25 bg-[#F9F5EF]/98 opacity-0 shadow-[0_18px_50px_rgba(26,24,18,0.20)] backdrop-blur transition duration-300 group-hover/image:scale-[1.12] group-hover/image:opacity-100">
                        <img src={herbPreviewImages[herb.name]} alt={`${herb.name}放大图`} className="h-full w-full rounded-[7px] object-cover" />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="my-6 h-28 rounded-full border border-[#D8D3CC] bg-[radial-gradient(circle,#8C3A2E_1px,transparent_1.5px)] [background-size:18px_18px] opacity-55" />
                )}
                <dl className="space-y-4 text-sm leading-7">
                  <div><dt className="text-[#8C3A2E]">{t.effect}</dt><dd>{copy.effect}</dd></div>
                  <div><dt className="text-[#8C3A2E]">{t.nature}</dt><dd>{copy.nature} · {copy.flavor}</dd></div>
                  <div><dt className="text-[#8C3A2E]">{t.recipe}</dt><dd>{copy.recipe}</dd></div>
                  <div><dt className="text-[#8C3A2E]">{t.note}</dt><dd className="text-[#1A1812]/62">{copy.note}</dd></div>
                </dl>
              </article>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
