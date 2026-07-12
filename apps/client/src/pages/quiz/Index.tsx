import { useMemo, useState } from "react";
import { SiteLayout, SectionKicker } from "@/components/site/SiteLayout";
import { constitutionByKey, type ConstitutionKey } from "@/data/constitutions";
import { constitutionAdvice, constitutionAdviceEn, symptomSourceMap, symptomSourceMapEn } from "@/data/constitutionAdvice";
import { useLanguage } from "@/i18n/LanguageContext";
import { constitutionEn, elementEn, femaleQuestionEn, genderQuestionEn, questionsEn, quizText } from "@/i18n/translations";

type ElementKey = "木" | "火" | "土" | "金" | "水";
type Gender = "male" | "female" | "undisclosed";
type QuizOption = { label: string; key?: ConstitutionKey; element?: ElementKey; negative?: boolean; skip?: boolean };
type QuizQuestion = { scene: string; caption: string; options: QuizOption[] };

const weightMap: Record<string, number> = {
  "Q9-A": 1.5,
  "Q12-C": 0.5,
  "Q14-A": 1.5,
  "Q16-A": 1.5,
  "Q17-A": 1.5,
  "Q17-B": 1.5,
  "Q18-A": 1.5,
  "Q20-A": 2.0,
  "Q20-B": 1.5
};

const questions: QuizQuestion[] = [
  {
    scene: "闹钟响了，你睁开眼，身体的第一反应是？",
    caption: "起床状态最直接反映气血充足与否。",
    options: [
      { label: "四肢酸沉，感觉怎么睡都不够，不想动", key: "qixu", element: "土", negative: true },
      { label: "手脚发凉，必须先喝口热水或活动一会才暖过来", key: "yangxu", element: "火", negative: true },
      { label: "起床后身体轻盈，动作自然，不需要特意「缓一缓」", key: "pinghe", element: "土" }
    ]
  },
  {
    scene: "下午 2~3 点，坐在办公室或家里，你最常出现的是？",
    caption: "午后状态能帮助观察脾胃运化与情绪气机。",
    options: [
      { label: "困到头点，眼皮撑不住，很难提神", key: "tanshi", element: "土", negative: true },
      { label: "莫名烦躁，胸口发闷，很想叹口气", key: "qiyu", element: "木", negative: true },
      { label: "头脑清醒，精力持续到下班，不需要靠咖啡或休息撑", key: "pinghe", element: "金" }
    ]
  },
  {
    scene: "夏天喝了一杯冰奶茶，你的胃和身体通常有什么反应？",
    caption: "对冷饮的耐受度，是观察中焦阳气与内热状态的线索。",
    options: [
      { label: "胃会隐隐发凉、绞痛，或者肚子不舒服，后悔喝了", key: "yangxu", element: "水", negative: true },
      { label: "喝了还不够，口越喝越干，嘴唇发燥，身体反而更热", key: "shire", element: "火", negative: true },
      { label: "喝完和没喝一样，胃里完全没有感觉，像喝了白水", key: "pinghe", element: "土" }
    ]
  },
  {
    scene: "躺下之后，你通常的入睡状态是？",
    caption: "入睡状态反映心神、阴血与情绪压力的平衡。",
    options: [
      { label: "脑子自动转，停不下来，翻来覆去超过半小时", key: "yinxu", element: "水", negative: true },
      { label: "心里压着事，明明很累，就是睡不踏实", key: "qiyu", element: "木", negative: true },
      { label: "躺下后脑子自然放空，很快就睡着了，不需要特意「让自己别想了」", key: "pinghe", element: "金" }
    ]
  },
  {
    scene: "和同行的朋友一起爬了三层楼，相比他们，你的感觉是？",
    caption: "用同伴作参照，可以减少个人运动基础差异。",
    options: [
      { label: "明显比他们喘，气还没顺，还出了很多汗", key: "qixu", element: "土", negative: true },
      { label: "脸比他们红更久，觉得烦热，汗出不止", key: "shire", element: "火", negative: true },
      { label: "和朋友恢复速度一样，几分钟内完全正常，没有特别费力的感觉", key: "pinghe", element: "木" }
    ]
  },
  {
    scene: "每年换季（秋冬交替或冬春交替），你通常会？",
    caption: "换季反应能观察肺卫之气与特禀敏感倾向。",
    options: [
      { label: "必定打喷嚏、流鼻涕、皮肤痒，像有过敏反应", key: "tebing", element: "金", negative: true },
      { label: "比周围的人更怕冷风，容易着凉，感冒了也恢复慢", key: "yangxu", element: "水", negative: true },
      { label: "换季跟普通日子一样，身体没有任何特别反应", key: "pinghe", element: "土" }
    ]
  },
  {
    scene: "吃完一顿比较油腻或甜的食物，你最明显的感觉是？",
    caption: "饭后状态是脾胃运化能力的晴雨表。",
    options: [
      { label: "身体发沉，脑子犯困，胃胀，特别想躺下", key: "tanshi", element: "土", negative: true },
      { label: "嘴巴发干发苦，嗓子里感觉有点异味", key: "shire", element: "火", negative: true },
      { label: "吃完照常行动，胃部轻松，完全不影响之后的状态", key: "pinghe", element: "金" }
    ]
  },
  {
    scene: "遇到一件让你焦虑的事（比如截止日快到了），你最先感受到的是？",
    caption: "情绪如何进入身体，是区分气郁与阴虚的重要线索。",
    options: [
      { label: "胸口发紧、肋骨两侧像被压着，忍不住叹气", key: "qiyu", element: "木", negative: true },
      { label: "心跳加速、手心出汗，越到夜里越睡不好", key: "yinxu", element: "火", negative: true },
      { label: "情绪紧张，但身体保持平稳——心跳正常，没有胸闷或不舒服", key: "pinghe", element: "水" }
    ]
  },
  {
    scene: "最近照镜子，你的脸色整体是？",
    caption: "气色是观察气血循环最直接的外在窗口。",
    options: [
      { label: "暗沉偏黄或带黛色，黑眼圈明显，感觉怎么休息都没用", key: "xueyu", element: "木", negative: true },
      { label: "偏白偏灰，没什么血色，说话声音也偏小", key: "qixu", element: "土", negative: true },
      { label: "脸色红润有光泽，别人会说你气色不错", key: "pinghe", element: "金" }
    ]
  },
  {
    scene: "早上醒来，你的口腔状态通常是？",
    caption: "晨起口腔状态，是观察消化系统的窗口。",
    options: [
      { label: "口中黏腻，感觉没刷牙一样，有异味", key: "tanshi", element: "土", negative: true },
      { label: "嘴巴发苦，或者牙龈、嗓子容易上火发炎", key: "shire", element: "火", negative: true },
      { label: "口腔清爽，起床后没有任何异味、黏腻感或苦味", key: "pinghe", element: "水" }
    ]
  },
  {
    scene: "在持续开着空调的室内待了两三个小时，你通常的感受是？",
    caption: "对空调环境的耐受度，反映卫阳与黏膜状态。",
    options: [
      { label: "肩颈发凉，后背发紧，必须加衣服才舒服", key: "yangxu", element: "水", negative: true },
      { label: "鼻腔干、鼻子堵，或者皮肤开始紧绷发痒", key: "tebing", element: "金", negative: true },
      { label: "和同事一样在空调房里正常工作，不需要额外加衣或开风扇", key: "pinghe", element: "土" }
    ]
  },
  {
    scene: "跟朋友一起熬夜到凌晨一点多，第二天和他们相比，你最明显的感受是？",
    caption: "相对比较能减少个人作息差异带来的误判。",
    options: [
      { label: "比他们更明显——眼睛干涩，嘴唇干裂，感觉内热上来了", key: "yinxu", element: "水", negative: true },
      { label: "比他们更明显——满脸油光，容易冒痘，情绪更烦躁", key: "shire", element: "火", negative: true },
      { label: "累是累，休息一下基本能恢复，和他们差不多", key: "qixu", element: "土" }
    ]
  },
  {
    scene: "吃完一顿正餐之后，你最自然的状态是？",
    caption: "饭后行为折射脾胃推动气机的方式。",
    options: [
      { label: "想立刻坐下或躺着，动一动都觉得沉", key: "tanshi", element: "土", negative: true },
      { label: "坐着反而胀，散散步感觉会好一点", key: "qiyu", element: "木", negative: true },
      { label: "吃完直接能投入工作，身体没有任何沉重感或负担", key: "pinghe", element: "金" }
    ]
  },
  {
    scene: "对于某些食物（海鲜、坚果等）或环境（花粉、宠物毛）的反应，你通常是？",
    caption: "明确过敏反应，是特禀体质的重要识别点。",
    options: [
      { label: "有几样明确的东西会让我起疹、流眼泪，或者喉咙发紧", key: "tebing", element: "金", negative: true },
      { label: "吃重口或喝酒容易上火、冒痘，但没有明确过敏", key: "shire", element: "火", negative: true },
      { label: "海鲜、花粉、宠物毛，对我来说和普通东西没有任何区别", key: "pinghe", element: "土" }
    ]
  },
  {
    scene: "你有没有感觉自己比周围人更容易感冒，或者感冒了特别难好？",
    caption: "感冒体验能同时观察气虚与阳虚，关键在于冷感和乏力的差异。",
    options: [
      { label: "是的，而且感冒时特别怕冷、打寒战，缩在被子里才好", key: "yangxu", element: "水", negative: true },
      { label: "是的，感冒时主要是没力气、浑身乏，不一定觉得特别冷", key: "qixu", element: "土", negative: true },
      { label: "和周围人感冒频率一样，一旦感冒一周左右就好，不会拖很长", key: "pinghe", element: "金" }
    ]
  },
  {
    scene: "轻轻碰了一下桌角，或者根本没什么外力，你的皮肤会怎样？",
    caption: "瘀青和皮肤状态，是血瘀与阴虚差异中比较可观察的信号。",
    options: [
      { label: "容易出现大片瘀青或暗斑，而且消退很慢，要一两周", key: "xueyu", element: "木", negative: true },
      { label: "皮肤偏干，摸起来有点粗糙，容易脱皮", key: "yinxu", element: "水", negative: true },
      { label: "就算碰了，最多一点小印，两三天就消了，皮肤摸起来柔软", key: "pinghe", element: "金" }
    ]
  },
  {
    scene: "关于你平时的大便，最符合你的描述是？",
    caption: "请如实选择，这是脾胃和肠道内环境最直接的指标。",
    options: [
      { label: "经常偏硬，好几天一次，或者排出费力", key: "yinxu", element: "水", negative: true },
      { label: "容易黏在马桶壁上，味道比较重，难以冲干净", key: "shire", element: "火", negative: true },
      { label: "每天一次，质地成形、顺畅排出，不费力，冲一次就干净", key: "pinghe", element: "土" }
    ]
  },
  {
    scene: "你有没有身体某处会反复出现的不适感？",
    caption: "疼痛的性质和位置，是区分血瘀与气郁的关键。",
    options: [
      { label: "有某个位置固定的隐痛或刺痛，位置不会移动，夜里有时更明显", key: "xueyu", element: "木", negative: true },
      { label: "胸口或两侧肋骨会有胀闷感，位置不太固定，跟情绪波动有关", key: "qiyu", element: "木", negative: true },
      { label: "身体各处都舒适，没有任何固定的隐痛、胀闷或刺痛感", key: "pinghe", element: "金" }
    ]
  },
  {
    scene: "如果现在可以给身体选一件事，你本能想选哪个？",
    caption: "最后这题跟着直觉走，不用想太多。",
    options: [
      { label: "泡一个热水澡，把全身暖透", key: "yangxu", element: "火", negative: true },
      { label: "出去走走，让胸口松一松", key: "qiyu", element: "木", negative: true },
      { label: "喝一大杯温水，睡个好觉", key: "yinxu", element: "水", negative: true }
    ]
  }
];

const femaleQuestion: QuizQuestion = {
  scene: "关于你的月经，最近半年最符合你的描述是？",
  caption: "所有信息匿名处理，月经状态是女性体质的重要窗口。",
  options: [
    { label: "经血颜色偏暗紫，有明显血块，或者痛经且痛感固定、拒按", key: "xueyu", element: "木", negative: true },
    { label: "经前情绪特别波动（烦躁/低落），乳房胀痛，经量忽多忽少", key: "qiyu", element: "木", negative: true },
    { label: "月经按时来，颜色鲜红、量适中，来前来后情绪平稳，没有任何不适", key: "pinghe", element: "土" },
    { label: "目前不适用（孕哺期 / 停经 / 暂无月经）", skip: true }
  ]
};

const genderQuestion = {
  scene: "你的生理性别是？",
  caption: "用于判断是否显示女性专属问题；不计入体质分数。",
  options: [
    { label: "男性", value: "male" as Gender },
    { label: "女性", value: "female" as Gender },
    { label: "不便透露", value: "undisclosed" as Gender }
  ]
};

const elementAxes: ElementKey[] = ["木", "火", "土", "金", "水"];
const answerLetters = ["A", "B", "C", "D"] as const;

function getDoublePositiveFlags(answerKeys: string[], scores: Record<string, number>) {
  const bloodStasisBase = (answerKeys[8] === "A" && answerKeys[17] === "A") || (answerKeys[8] === "A" && answerKeys[15] === "A");
  const bloodStasisFemaleTriple = bloodStasisBase && answerKeys[19] === "A";
  const tebingPositive = answerKeys[13] === "A";
  const tanshiDoublePositive = answerKeys[1] === "A" && answerKeys[12] === "A" && (scores.tanshi ?? 0) >= 2;

  return {
    bloodStasisPositive: bloodStasisBase || bloodStasisFemaleTriple,
    bloodStasisFemaleTriple,
    tebingPositive,
    tanshiDoublePositive
  };
}

function SceneSketch({ index, label }: { index: number; label: string }) {
  return (
    <svg viewBox="0 0 160 160" className="h-40 w-40" role="img" aria-label={label}>
      <circle cx="80" cy="80" r="68" fill="none" stroke="#D8D3CC" strokeWidth="1.4" />
      <path d="M32 100c20-24 35-22 50 0s30 20 46-8" fill="none" stroke="#1A1812" strokeOpacity="0.45" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M49 72c17-18 34-18 51 0" fill="none" stroke="#8C3A2E" strokeOpacity="0.6" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx={58 + (index % 4) * 14} cy={55 + (index % 3) * 6} r="3" fill="#8C3A2E" opacity="0.7" />
      <path d="M78 28v18M69 37h18" stroke="#6B5E3E" strokeOpacity="0.5" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function RadarChart({ scores, isEnglish }: { scores: Record<string, number>; isEnglish: boolean }) {
  const max = Math.max(3, ...Object.values(scores));
  const points = elementAxes.map((axis, index) => {
    const angle = (-90 + index * 72) * (Math.PI / 180);
    const radius = 24 + ((scores[axis] ?? 0) / max) * 42;
    return `${80 + Math.cos(angle) * radius},${80 + Math.sin(angle) * radius}`;
  }).join(" ");

  return (
    <svg viewBox="0 0 160 160" className="mx-auto h-64 w-64" role="img" aria-label={isEnglish ? "Five-element balance radar chart" : "五行平衡雷达图"}>
      {[32, 48, 64].map((r) => <circle key={r} cx="80" cy="80" r={r} fill="none" stroke="#D8D3CC" strokeWidth="1" />)}
      {elementAxes.map((axis, index) => {
        const angle = (-90 + index * 72) * (Math.PI / 180);
        const x = 80 + Math.cos(angle) * 70;
        const y = 80 + Math.sin(angle) * 70;
        return (
          <g key={axis}>
            <line x1="80" y1="80" x2={x} y2={y} stroke="#D8D3CC" />
            <text x={80 + Math.cos(angle) * 76} y={84 + Math.sin(angle) * 76} textAnchor="middle" className="fill-[#1A1812] text-[10px] font-serif">
              {isEnglish ? elementEn[axis] : axis}
            </text>
          </g>
        );
      })}
      <polygon points={points} fill="#8C3A2E" fillOpacity="0.12" stroke="#8C3A2E" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function ResultPage({
  resultKey, secondaryResultKey, isHedging, elementScores, negativeLabels, isEnglish, t, result, resultCopy, onReset, doublePositiveFlags
}: {
  resultKey: ConstitutionKey;
  secondaryResultKey?: ConstitutionKey;
  isHedging?: boolean;
  elementScores: Record<string, number>;
  negativeLabels: string[];
  isEnglish: boolean;
  t: typeof import("@/i18n/translations").quizText["zh"];
  result: import("@/data/constitutions").Constitution;
  resultCopy: { name: string; shortName: string; image: string; keywords: string[]; advice: string[] };
  onReset: () => void;
  doublePositiveFlags: ReturnType<typeof getDoublePositiveFlags>;
}) {
  const advice = isEnglish ? constitutionAdviceEn[resultKey] : constitutionAdvice[resultKey];
  const secondaryAdvice = secondaryResultKey ? (isEnglish ? constitutionAdviceEn[secondaryResultKey] : constitutionAdvice[secondaryResultKey]) : null;
  const secondaryResultCopy = secondaryResultKey ? (isEnglish ? (import("@/i18n/translations").constitutionEn as any)[secondaryResultKey] : import("@/data/constitutions").constitutionByKey[secondaryResultKey]) : null;

  const mergedHabits = secondaryAdvice && !isHedging ? [...advice.habits, ...secondaryAdvice.habits] : advice.habits;
  const mergedTeas = secondaryAdvice && !isHedging ? [...advice.teas, ...secondaryAdvice.teas] : advice.teas;
  const mergedAcupoint = secondaryAdvice && !isHedging ? [advice.acupoint, secondaryAdvice.acupoint] : [advice.acupoint];

  const xueyuAdvice = isEnglish ? constitutionAdviceEn.xueyu : constitutionAdvice.xueyu;
  const sourceMap = isEnglish ? symptomSourceMapEn : symptomSourceMap;
  const sources = negativeLabels.map((label) => sourceMap[label]).filter(Boolean).slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      {/* @section: quiz-result */}
      <p className="mb-5 rounded-[8px] border border-[#D8D3CC] bg-[#F9F5EF]/70 px-4 py-3 text-xs leading-6 text-[#1A1812]/56">
        {isEnglish
          ? "This result is based on self-reported answers and only reflects a tendency in your current lifestyle state. Body patterns change with season, age, and daily habits; consider retaking it from time to time."
          : "测评结果基于自我报告，仅反映当前生活状态的倾向性参考。体质会随季节、年龄和生活方式变化，建议定期重测。"}
      </p>

      <SectionKicker>{t.resultKicker}</SectionKicker>

      <div className="grid gap-8 rounded-[8px] border border-[#D8D3CC] bg-[#F9F5EF]/70 p-6 sm:p-10 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col items-center justify-center gap-3">
          <RadarChart scores={elementScores} isEnglish={isEnglish} />
          <p className="text-center text-xs tracking-[0.24em] text-[#1A1812]/50">{t.radar}</p>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs tracking-[0.32em] text-[#8C3A2E]">{t.resultLabel}</p>
          <h1 className="mt-2 font-serif text-5xl tracking-[0.14em] sm:text-6xl" style={{ color: result.color }}>
            {secondaryResultCopy && !isHedging 
              ? `${resultCopy.shortName} 兼挟 ${secondaryResultCopy.shortName}` 
              : resultCopy.name}
          </h1>
          <p className="mt-4 text-sm leading-8 text-[#1A1812]/60 italic font-serif">{resultCopy.image}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {resultCopy.keywords.map((kw) => (
              <span key={kw} className="rounded-full border border-[#D8D3CC] px-3 py-1 text-xs tracking-[0.1em] text-[#1A1812]/62">{kw}</span>
            ))}
          </div>

          {sources.length > 0 && (
            <div className="mt-7">
              <p className="mb-3 text-xs font-medium tracking-[0.28em] text-[#8C3A2E]">{t.sourceLabel}</p>
              <div className="space-y-3">
                {sources.map((src, i) => (
                  <div key={i} className="rounded-[8px] border border-[#D8D3CC] bg-[#F5F0E8]/60 px-4 py-3 text-sm leading-7 text-[#1A1812]/75">
                    <span className="mr-2 font-serif text-xs text-[#8C3A2E] opacity-70">◆</span>
                    {src}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12">
        <SectionKicker>{t.adjustKicker}</SectionKicker>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[8px] border border-[#D8D3CC] bg-[#F9F5EF]/70 p-6">
            <p className="mb-4 text-xs font-medium tracking-[0.28em] text-[#8C3A2E]">{t.habitsLabel}</p>
            <div className="space-y-4">
              {mergedHabits.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-xl leading-none shrink-0 mt-0.5">{h.icon}</span>
                  <p className="text-sm leading-7 text-[#1A1812]/75">{h.tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="group rounded-[8px] border border-[#D8D3CC] bg-[#F9F5EF]/70 p-6 transition duration-300 hover:border-[#8C3A2E]">
            <p className="mb-4 text-xs font-medium tracking-[0.28em] text-[#8C3A2E]">{t.teaLabel}</p>
            {mergedTeas.map((tea, i) => (
              <div key={i} className={i > 0 ? "mt-8 border-t border-[#D8D3CC]/50 pt-6" : ""}>
                <div className="overflow-hidden rounded-[8px] border border-[#D8D3CC] bg-[#F5F0E8]">
                  <div className="flex h-28 items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <span className="text-6xl select-none">{tea.icon}</span>
                  </div>
                </div>
                <h3 className="mt-4 font-serif text-xl tracking-[0.1em]">{tea.name}</h3>
                <p className="mt-2 text-xs leading-6 tracking-[0.06em] text-[#8C3A2E]">{tea.ingredients}</p>
                <p className="mt-2 text-sm leading-7 text-[#1A1812]/68">{tea.effect}</p>
              </div>
            ))}
          </div>

          <div className="group rounded-[8px] border border-[#D8D3CC] bg-[#F9F5EF]/70 p-6 transition duration-300 hover:border-[#8C3A2E]">
            <p className="mb-4 text-xs font-medium tracking-[0.28em] text-[#8C3A2E]">{t.acupointLabel}</p>
            {mergedAcupoint.map((ap, i) => (
              <div key={i} className={i > 0 ? "mt-8 border-t border-[#D8D3CC]/50 pt-6" : ""}>
                <div className="overflow-hidden rounded-[8px] border border-[#D8D3CC] bg-[#F5F0E8]">
                  <div className="flex h-28 items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <span className="text-6xl select-none">{ap.icon}</span>
                  </div>
                </div>
                <h3 className="mt-4 font-serif text-xl tracking-[0.1em]">{ap.name}</h3>
                <p className="mt-2 text-xs leading-6 tracking-[0.06em] text-[#8C3A2E]">{ap.location}</p>
                <p className="mt-2 text-sm leading-7 text-[#1A1812]/68">{ap.method}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {secondaryResultCopy && isHedging && (
        <div className="mt-8 rounded-[8px] border border-[#8C3A2E]/35 bg-[#F9F5EF]/85 p-6">
          <p className="text-xs font-medium tracking-[0.28em] text-[#8C3A2E]">
            {isEnglish ? "CONCURRENT PATTERN NOTICE" : "当下兼挟注意"}
          </p>
          <p className="mt-3 text-sm leading-7 text-[#1A1812]/72">
            {isEnglish
              ? `You also show signs of ${secondaryResultCopy.name}. However, it may conflict with your primary pattern's adjustments, so focus on your primary pattern first while keeping this in mind.`
              : `你的测试结果也显示了较明显的【${secondaryResultCopy.name}】倾向。由于它与主导体质在调理倾向上存在一定对冲，建议当前以调理主导体质为主，同时留意该兼挟状态。`}
          </p>
        </div>
      )}

      {doublePositiveFlags.bloodStasisPositive && (
        <div className="mt-8 rounded-[8px] border border-[#8C3A2E]/35 bg-[#F9F5EF]/85 p-6">
          <p className="text-xs font-medium tracking-[0.28em] text-[#8C3A2E]">
            {isEnglish ? "BLOOD-STASIS SIGNAL" : "血瘀倾向提示"}
          </p>
          <p className="mt-3 text-sm leading-7 text-[#1A1812]/72">
            {isEnglish
              ? "Several signals point toward blood-stasis tendency. Even if it is not your leading pattern, it is worth noticing."
              : "你有几项信号指向血瘀倾向，即使它不是你的主导体质，也值得关注。"}
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-[8px] border border-[#D8D3CC] bg-[#F5F0E8]/60 p-4">
              <p className="text-xs tracking-[0.22em] text-[#8C3A2E]">{t.teaLabel}</p>
              <h3 className="mt-3 font-serif text-xl tracking-[0.08em]">{xueyuAdvice.teas[0]?.name}</h3>
              <p className="mt-2 text-xs leading-6 text-[#8C3A2E]">{xueyuAdvice.teas[0]?.ingredients}</p>
              <p className="mt-2 text-sm leading-7 text-[#1A1812]/68">{xueyuAdvice.teas[0]?.effect}</p>
            </div>
            <div className="rounded-[8px] border border-[#D8D3CC] bg-[#F5F0E8]/60 p-4">
              <p className="text-xs tracking-[0.22em] text-[#8C3A2E]">{t.acupointLabel}</p>
              <h3 className="mt-3 font-serif text-xl tracking-[0.08em]">{xueyuAdvice.acupoint.name}</h3>
              <p className="mt-2 text-xs leading-6 text-[#8C3A2E]">{xueyuAdvice.acupoint.location}</p>
              <p className="mt-2 text-sm leading-7 text-[#1A1812]/68">{xueyuAdvice.acupoint.method}</p>
            </div>
          </div>
          <p className="mt-5 text-xs leading-6 text-[#1A1812]/48">
            {isEnglish
              ? "If fixed recurring pain, obvious bruising, or menstrual abnormalities appear repeatedly, seek professional medical evaluation."
              : "若有反复出现的固定疼痛、明显瘀斑或月经异常，建议就医进行专业评估。"}
          </p>
        </div>
      )}

      <div className="mt-10 flex flex-wrap gap-3">
        <button
          onClick={onReset}
          className="rounded-[8px] border border-[#1A1812]/35 px-5 py-3 text-sm tracking-[0.18em] transition hover:border-[#8C3A2E] hover:text-[#8C3A2E]"
        >
          {t.retake}
        </button>
        <a
          href="/herbs"
          className="rounded-[8px] border border-[#8C3A2E]/60 px-5 py-3 text-sm tracking-[0.18em] text-[#8C3A2E] transition hover:bg-[#8C3A2E]/8"
        >
          {t.herbs}
        </a>
      </div>
    </section>
  );
}

export default function QuizPage() {
  const [started, setStarted] = useState(false);
  const [gender, setGender] = useState<Gender | null>(null);
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [elementScores, setElementScores] = useState<Record<string, number>>({ 木: 1, 火: 1, 土: 1, 金: 1, 水: 1 });
  const [negativeLabels, setNegativeLabels] = useState<string[]>([]);
  const [answerKeys, setAnswerKeys] = useState<string[]>([]);
  const { language, isEnglish } = useLanguage();
  const t = quizText[language];

  const totalQuestions = 19 + (gender === "female" ? 1 : 0);
  const finished = Boolean(gender) && step >= totalQuestions;
  
  const resultData = useMemo(() => {
    const pingheScore = scores.pinghe ?? 0;
    const biasedEntries = Object.entries(scores)
      .filter(([key]) => key !== "pinghe")
      .sort((a, b) => b[1] - a[1]);
      
    const maxBiasedScore = biasedEntries.length > 0 ? biasedEntries[0][1] : 0;
    
    // 放宽平和质判定条件：只要平和质得分 >= 10，即判定为平和质。
    // 偏颇选项会通过下方的“症状溯源”和“专项提示（如血瘀）”进行单独提醒，不再剥夺主导地位。
    if (pingheScore >= 10) {
      return { primary: "pinghe" as ConstitutionKey };
    }
    
    if (biasedEntries.length === 0) {
      return { primary: "pinghe" as ConstitutionKey };
    }
    
    const top1 = biasedEntries[0];
    const top2 = biasedEntries.length > 1 ? biasedEntries[1] : null;
    
    if (!top2 || top1[1] < 3.0 || top2[1] < 3.0 || (top1[1] - top2[1] > 1.5)) {
      return { primary: top1[0] as ConstitutionKey };
    }
    
    const c1 = top1[0] as ConstitutionKey;
    const c2 = top2[0] as ConstitutionKey;
    
    const isConflictPair = (a: string, b: string, target1: string, target2: string) => 
      (a === target1 && b === target2) || (a === target2 && b === target1);

    if (isConflictPair(c1, c2, "yangxu", "yinxu")) {
      return { primary: c1 };
    }
    if (isConflictPair(c1, c2, "yangxu", "shire")) {
      return { primary: c1, secondary: c2, isHedging: true };
    }
    
    const fusionPairs = [
      ["yinxu", "shire"],
      ["qixu", "yangxu"],
      ["qiyu", "xueyu"],
      ["qixu", "tanshi"]
    ];
    
    const isFusion = fusionPairs.some(pair => isConflictPair(c1, c2, pair[0], pair[1]));
    if (isFusion) {
      return { primary: c1, secondary: c2, isHedging: false };
    }
    
    return { primary: c1 };
  }, [scores]);

  const resultKey = resultData.primary;
  const secondaryResultKey = resultData.secondary;
  const isHedging = resultData.isHedging;
  const result = constitutionByKey[resultKey];
  const resultCopy = isEnglish ? constitutionEn[resultKey] : result;
  const isFemaleQuestion = gender === "female" && step === questions.length;
  const activeQuestion = isFemaleQuestion ? femaleQuestion : questions[step];
  const activeQuestionCopy = isEnglish ? (isFemaleQuestion ? femaleQuestionEn : questionsEn[step]) : activeQuestion;
  const doublePositiveFlags = useMemo(() => getDoublePositiveFlags(answerKeys, scores), [answerKeys, scores]);

  const answer = (option: QuizOption, optionIndex: number) => {
    const letter = answerLetters[optionIndex] ?? "A";
    const questionNumber = step + 1;
    const weight = weightMap[`Q${questionNumber}-${letter}`] ?? 1;

    setAnswerKeys((prev) => {
      const next = [...prev];
      next[step] = letter;
      return next;
    });

    if (!option.skip && option.element) {
      setElementScores((prev) => ({ ...prev, [option.element as ElementKey]: (prev[option.element as ElementKey] ?? 0) + 1 }));
    }

    if (!option.skip && option.key) {
      setScores((prev) => ({ ...prev, [option.key as ConstitutionKey]: (prev[option.key as ConstitutionKey] ?? 0) + weight }));
    }

    if (option.negative) {
      setNegativeLabels((prev) => [...prev, option.label]);
    }

    setStep((prev) => prev + 1);
  };

  const reset = () => {
    setStep(0);
    setScores({});
    setElementScores({ 木: 1, 火: 1, 土: 1, 金: 1, 水: 1 });
    setNegativeLabels([]);
    setAnswerKeys([]);
    setGender(null);
    setStarted(false);
  };

  return (
    <SiteLayout>
      {!started ? (
        <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-20">
          {/* @section: quiz-opening-ritual */}
          <div className="absolute h-80 w-80 rounded-full border border-[#D8D3CC] ink-breath" />
          <div className="relative max-w-2xl text-center">
            <SectionKicker>{t.kicker}</SectionKicker>
            <h1 className="font-serif text-4xl leading-tight tracking-[0.16em] sm:text-5xl">{t.title}</h1>
            <p className="mx-auto mt-6 font-serif text-xl tracking-[0.08em] text-[#8C3A2E]/80 sm:text-2xl">{t.subtitle}</p>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-[#1A1812]/66">{t.intro}</p>
            <p className="mx-auto mt-5 max-w-xl text-xs leading-6 text-[#1A1812]/48">
              {isEnglish
                ? "This check is an educational lifestyle tool inspired by Chinese medicine. It is for reference only and does not constitute medical diagnosis or treatment advice. If you have clear discomfort or chronic illness, please consult a doctor first."
                : "本测评为中医体质生活方式科普工具，内容仅供参考，不构成医疗诊断或治疗建议。如有明确身体不适或慢性疾病，请优先咨询医生。"}
            </p>
            <button
              onClick={() => setStarted(true)}
              className="mt-10 rounded-[8px] border border-[#1A1812]/35 px-10 py-4 text-base tracking-[0.22em] transition hover:border-[#8C3A2E] hover:text-[#8C3A2E]"
            >
              {t.start}
            </button>
          </div>
        </section>
      ) : !gender ? (
        <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center px-4 py-12 sm:px-6 lg:px-8">
          {/* @section: quiz-gender-gate */}
          <article className="quiz-card w-full rounded-[8px] border border-[#D8D3CC] bg-[#F9F5EF]/75 p-6 shadow-[0_20px_80px_rgba(26,24,18,0.06)] sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div className="flex justify-center">
                <SceneSketch index={0} label={isEnglish ? "Minimal line sketch for biological sex selection" : "性别选择线描插图占位符"} />
              </div>
              <div>
                <p className="text-sm tracking-[0.22em] text-[#8C3A2E]">{isEnglish ? genderQuestionEn.caption : genderQuestion.caption}</p>
                <h1 className="mt-4 font-serif text-3xl leading-snug tracking-[0.1em] sm:text-5xl">{isEnglish ? genderQuestionEn.scene : genderQuestion.scene}</h1>
                <div className="mt-8 grid gap-3">
                  {genderQuestion.options.map((option, index) => (
                    <button
                      key={option.value}
                      onClick={() => setGender(option.value)}
                      className="rounded-[8px] border border-[#D8D3CC] bg-[#F5F0E8]/60 px-5 py-4 text-left text-sm leading-7 transition duration-300 hover:-translate-y-0.5 hover:border-[#8C3A2E] hover:text-[#8C3A2E]"
                    >
                      {isEnglish ? genderQuestionEn.options[index] : option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </section>
      ) : finished ? (
        <ResultPage
          resultKey={resultKey}
          secondaryResultKey={secondaryResultKey}
          isHedging={isHedging}
          elementScores={elementScores}
          negativeLabels={negativeLabels}
          isEnglish={isEnglish}
          t={t}
          result={result}
          resultCopy={resultCopy}
          onReset={reset}
          doublePositiveFlags={doublePositiveFlags}
        />
      ) : (
        <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center px-4 py-12 sm:px-6 lg:px-8">
          {/* @section: quiz-card-question */}
          <article key={step} className="quiz-card w-full rounded-[8px] border border-[#D8D3CC] bg-[#F9F5EF]/75 p-6 shadow-[0_20px_80px_rgba(26,24,18,0.06)] sm:p-10">
            <div className="mb-8 flex items-center justify-between text-xs tracking-[0.22em] text-[#1A1812]/45">
              <span>{t.progress(step + 1, totalQuestions)}</span>
              <span>{t.instinct}</span>
            </div>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div className="flex justify-center">
                <SceneSketch index={step} label={isEnglish ? "Minimal line sketch for the quiz scene" : "场景线描插图占位符"} />
              </div>
              <div>
                <p className="text-sm tracking-[0.22em] text-[#8C3A2E]">{activeQuestionCopy.caption}</p>
                <h1 className="mt-4 font-serif text-3xl leading-snug tracking-[0.1em] sm:text-5xl">{activeQuestionCopy.scene}</h1>
                <div className="mt-8 grid gap-3">
                  {activeQuestion.options.map((option, index) => (
                    <button
                      key={option.label}
                      onClick={() => answer(option, index)}
                      className="rounded-[8px] border border-[#D8D3CC] bg-[#F5F0E8]/60 px-5 py-4 text-left text-sm leading-7 transition duration-300 hover:-translate-y-0.5 hover:border-[#8C3A2E] hover:text-[#8C3A2E]"
                    >
                      {isEnglish ? (isFemaleQuestion ? femaleQuestionEn.options[index] : questionsEn[step].options[index]) : option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </section>
      )}
    </SiteLayout>
  );
}
