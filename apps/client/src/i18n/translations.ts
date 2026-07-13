import type { ConstitutionKey } from "@/data/constitutions";

export const navText = {
  zh: { time: "天时", quiz: "识己", herbs: "本草", acupoints: "经穴", footer1: "本草·识己是一款中医药生活美学科普原型，不替代医生诊断或治疗。", footer2: "HERBA & SOUL · 去迷信化、去功利化，把传统知识转译为日常可用的温柔工具。", switchLabel: "EN" },
  en: { time: "Season", quiz: "Self", herbs: "Herbs", acupoints: "Meridians", footer1: "Herba & Soul is a lifestyle education prototype inspired by Traditional Chinese Medicine (TCM). It does not replace medical diagnosis or treatment.", footer2: "HERBA & SOUL · Ancient knowledge, translated into gentle tools for everyday life.", switchLabel: "中" }
};

export const homeText = {
  zh: {
    tagline: "顺时而饮，依体而居。让古老的智慧，变成当下的解药。",
    titleLeft: "本草",
    titleRight: "识己",
    lateNight: "夜已经深了，快睡觉吧。让胆经与肝经替你慢慢收拾今天。",
    start: "开始识己",
    today: "查看今日天时",
    now: "此刻",
    kicker: "四个入口 · 从今天开始",
    heading: "将中医融入生活，你愿意每天打开的温柔指南。",
    intro: "不用背经文，也不用懂阴阳五行。时辰、节气、体质、本草与穴位，在这里都变成你看得懂、用得上、慢慢坚持的日常。",
    entries: [
      { title: "体质自测", desc: "20道场景卡片，以日常感受替代枯燥量表。", mark: "識" },
      { title: "食疗本草", desc: "把常见药材做成性味、功效、焖泡配方卡。", mark: "草" },
      { title: "经穴科普", desc: "以交互人体图认识十二经络与常用穴位，点击查看通畅、按揉与饮食建议。", mark: "经" },
      { title: "养生历", desc: "以时辰与节气生成当下最小行动建议。", mark: "历" }
    ],
    calendarKicker: "养生历 · 今日行动",
    calendarHeading: "顺着时辰走，把养生变成今天的小事。",
    calendarIntro: "依据当前时辰与节气，给你三条最小行动建议——不用改变作息，从今天能做到的开始。",
    calendarToday: "当前经络",
    calendarActions: [
      { label: "饮食", title: "温食护阳", desc: "此时辰宜进温热食物，避免生冷，帮助脾胃运化。" },
      { label: "起居", title: "微动舒筋", desc: "在椅子上轻转脚踝或颈部，让气血稍作流通。" },
      { label: "情志", title: "放下一件事", desc: "此刻不必把所有待办事项想完，允许自己暂时放下一件事。" }
    ],
    calendarComing: "更多个性化养生建议将随版本更新逐步上线"
  },
  en: {
    tagline: "Live with the hour, and your body. Let old wisdom become a remedy for right now.",
    titleLeft: "Herba",
    titleRight: "Soul",
    lateNight: "It is late. Let sleep do the work while the gallbladder and liver channels settle the day.",
    start: "Begin the Check",
    today: "See Today's Rhythm",
    now: "Now",
    kicker: "Four Ways In · Start Today",
    heading: "A gentle daily guide that brings Traditional Chinese Medicine into your real life.",
    intro: "No classical texts required. Meridian hours, solar terms, body types, herbs, and acupoints are translated into things you can actually read, try, and slowly keep.",
    entries: [
      { title: "Body Check", desc: "20 everyday scenario cards instead of a dry questionnaire.", mark: "S" },
      { title: "Herbal Pantry", desc: "Common herbs arranged by nature, benefits, and simple steeping ideas.", mark: "H" },
      { title: "Meridians", desc: "Explore the twelve channels and key acupoints through an interactive body map.", mark: "M" },
      { title: "Wellness Calendar", desc: "Small suggestions shaped by the hour and the solar term.", mark: "C" }
    ],
    calendarKicker: "Wellness Calendar · Today's Actions",
    calendarHeading: "Go with the hour. Turn wellness into today's small thing.",
    calendarIntro: "Based on the current meridian hour and solar term, here are three small actions — no schedule change needed, just start from what's possible today.",
    calendarToday: "Active Channel",
    calendarActions: [
      { label: "Eating", title: "Warm foods, protect yang", desc: "This hour favors warm, cooked foods. Avoid cold drinks to support your spleen and stomach." },
      { label: "Movement", title: "A small stretch", desc: "Roll your ankles or slowly turn your neck while seated. Let qi and blood move a little." },
      { label: "Mind", title: "Put one thing down", desc: "You don't have to solve everything right now. Give yourself permission to set one task aside." }
    ],
    calendarComing: "More personalized wellness guidance coming in future updates"
  }
};

export const meridianEn: Record<string, { branch: string; meridian: string; quote: string; tip: string }> = {
  子时: { branch: "Zi Hour (子时)", meridian: "Gallbladder Channel", quote: "Clear decisions begin with a rested gallbladder.", tip: "The gallbladder channel is active now. Put the phone down and let the body prepare clarity for tomorrow." },
  丑时: { branch: "Chou Hour (丑时)", meridian: "Liver Channel", quote: "When you lie down, blood returns to the liver.", tip: "Late night belongs to storage and repair. Closing your eyes is already a way of nourishing wood." },
  寅时: { branch: "Yin Hour (寅时)", meridian: "Lung Channel", quote: "The lungs bring order and rhythm.", tip: "Before dawn, lung qi begins to spread. If you wake, breathe slowly before thinking too much." },
  卯时: { branch: "Mao Hour (卯时)", meridian: "Large Intestine Channel", quote: "Heaven feeds us with qi; earth feeds us with flavor.", tip: "Morning is an opening ritual: warm water, an unhurried bathroom break, and a softer start." },
  辰时: { branch: "Chen Hour (辰时)", meridian: "Stomach Channel", quote: "The stomach is the sea of food and water.", tip: "The stomach is ready. Keep breakfast warm and simple so the day begins from steadiness." },
  巳时: { branch: "Si Hour (巳时)", meridian: "Spleen Channel", quote: "The spleen is the granary official.", tip: "Transformation is strongest now. Do your important work and do not interrupt it with iced drinks." },
  午时: { branch: "Wu Hour (午时)", meridian: "Heart Channel", quote: "The heart is the sovereign of spirit.", tip: "At midday, eat a little lighter and leave the heart a quiet pocket of time." },
  未时: { branch: "Wei Hour (未时)", meridian: "Small Intestine Channel", quote: "The small intestine receives, sorts, and clarifies.", tip: "A ten-minute walk after lunch may wake you more gently than staying trapped in the screen." },
  申时: { branch: "Shen Hour (申时)", meridian: "Bladder Channel", quote: "Taiyang opens the surface.", tip: "Qi moves along the back now. Stand up, stretch the neck and shoulders, and let that river move." },
  酉时: { branch: "You Hour (酉时)", meridian: "Kidney Channel", quote: "The kidneys hold strength and endurance.", tip: "Evening asks for less overdraft and more coming home. Dinner does not need to be heavy." },
  戌时: { branch: "Xu Hour (戌时)", meridian: "Pericardium Channel", quote: "The chest center carries the heart's messages.", tip: "The pericardium protects the heart. Let the day's emotions loosen; a warm foot soak is enough." },
  亥时: { branch: "Hai Hour (亥时)", meridian: "Triple Burner Channel", quote: "The triple burner keeps the waterways open.", tip: "Dim the lights. Do not let another flood of information pass through your night." }
};

export const solarTermEn: Record<string, { name: string; hint: string }> = {
  立春: { name: "Start of Spring", hint: "Spring wood begins to rise. Stretch more, hold less tension." },
  雨水: { name: "Rain Water", hint: "Moisture returns. Go easy on sweets and protect digestion." },
  惊蛰: { name: "Awakening of Insects", hint: "Thunder wakes the season. Sleep early and rise gently." },
  春分: { name: "Spring Equinox", hint: "Day and night are balanced. Keep food light and emotions even." },
  清明: { name: "Pure Brightness", hint: "Clear qi rises. A walk outside helps the body open." },
  谷雨: { name: "Grain Rain", hint: "Dampness grows. Drink less cold and support the spleen." },
  立夏: { name: "Start of Summer", hint: "Summer fire appears. Care for the heart by protecting sleep." },
  小满: { name: "Grain Buds", hint: "Not too full is already enough. Eat with restraint." },
  芒种: { name: "Grain in Ear", hint: "Heat and dampness gather. Keep warm water at your desk." },
  夏至: { name: "Summer Solstice", hint: "The day is at its longest. A short midday rest helps." },
  小暑: { name: "Minor Heat", hint: "Heat rises. Reduce spice and watch irritability." },
  大暑: { name: "Major Heat", hint: "Heat is strongest. Choose light meals and enough sleep." },
  立秋: { name: "Start of Autumn", hint: "Autumn arrives. Moisten the lungs without heavy tonics." },
  处暑: { name: "End of Heat", hint: "Heat begins to leave. Protect shoulders and neck in the morning and evening." },
  白露: { name: "White Dew", hint: "Dryness shows. Sleep earlier and moisten lung fluids." },
  秋分: { name: "Autumn Equinox", hint: "Yin and yang meet halfway. Let the spirit settle inward." },
  寒露: { name: "Cold Dew", hint: "Coolness deepens. Keep ankles and the back of the neck warm." },
  霜降: { name: "Frost's Descent", hint: "Dry autumn turns cold. Warm, moist food fits better." },
  立冬: { name: "Start of Winter", hint: "Winter storage begins. Spend less energy where it is not needed." },
  小雪: { name: "Minor Snow", hint: "Cold is present but not deep. Warm the spleen and kidneys gently." },
  大雪: { name: "Major Snow", hint: "Nature closes and stores. Sleeping early is the first tonic." },
  冬至: { name: "Winter Solstice", hint: "One yang is born. Add warmth slowly; do not over-tonify." },
  小寒: { name: "Minor Cold", hint: "Cold reaches the bones. Protect the lower back and the nape." },
  大寒: { name: "Major Cold", hint: "Deep winter before renewal. Give the body more sleep." }
};

export const quizText = {
  zh: {
    kicker: "体质自测 · 觉察己身",
    title: "先听身体，再谈调理。",
    subtitle: "一眼看懂你的体内五行。",
    intro: "20张以内场景卡片，5分钟帮你把身体里的天气看得更清楚。",
    start: "开始",
    resultKicker: "测试结果 · 体质山水",
    radar: "五行平衡雷达图",
    resultLabel: "倾向结果",
    sourceLabel: "症状溯源",
    adjustKicker: "顺时微调 · 三维调养方案",
    habitsLabel: "日常起居",
    teaLabel: "本草茶饮",
    acupointLabel: "身体开关 · 穴位",
    retake: "重新测试",
    herbs: "查看食疗卡",
    progress: (step: number, total: number) => `第${step} / ${total}`,
    instinct: "不必完美，凭第一感受"
  },
  en: {
    kicker: "Body Check · Read Yourself",
    title: "Listen first. Adjust later.",
    subtitle: "See your inner Five Elements at a glance.",
    intro: "Up to 20 scenario cards. In 5 minutes, see the weather inside your body more clearly.",
    start: "Start",
    resultKicker: "Your Result · Inner Landscape",
    radar: "Five-Element Balance Map",
    resultLabel: "Likely Pattern",
    sourceLabel: "What Your Answers Reveal",
    adjustKicker: "Gentle Adjustments · Three Dimensions",
    habitsLabel: "Daily Habits",
    teaLabel: "Herbal Tea",
    acupointLabel: "Body Switch · Acupoint",
    retake: "Retake",
    herbs: "See Herbal Cards",
    progress: (step: number, total: number) => `${step} / ${total}`,
    instinct: "No need to be perfect. Choose what feels true first."
  }
};

export const elementEn: Record<string, string> = { 木: "Wood", 火: "Fire", 土: "Earth", 金: "Metal", 水: "Water" };

export const genderQuestionEn = {
  scene: "What is your biological sex?",
  caption: "This only determines whether the female-specific question appears; it is not scored.",
  options: ["Male", "Female", "Prefer not to say"]
};

export const questionsEn = [
  { scene: "Your alarm goes off in the morning. You open your eyes. What's your body's first reaction?", caption: "How you wake up is a direct window into your baseline energy.", options: ["My body feels weighed down, like no amount of sleep is ever enough.", "My hands and feet feel cold, and I need to move around for a while to warm up.", "I feel light and ready to go; no need to hit snooze or 'ease into' the day."] },
  { scene: "It's 2 or 3 PM at work or at home. What do you most commonly experience?", caption: "The mid-afternoon slump reveals how well your body processes energy.", options: ["Struggling to keep my eyes open; a heavy, brain-fogged slump.", "Unexplained restlessness or a tight chest—I feel like wanting to sigh a lot.", "Clear-headed and steady. I can cruise to the end of the day without extra coffee."] },
  { scene: "You just had an iced drink (like a Coca-Cola) on a hot summer day. How does your stomach and body usually react?", caption: "Your tolerance for cold drinks hints at your internal warmth and metabolism.", options: ["My stomach feels cold, crampy, or off. I usually regret it later.", "It doesn't relieve my thirst. My mouth still feels dry, and I actually feel more flushed.", "No reaction at all—it goes down easily just like room-temperature water."] },
  { scene: "At night, how do you usually feel before sleep?", caption: "How you fall asleep shows the balance between your nervous system and inner calm.", options: ["My brain automatically starts racing and I can't stop thinking. I toss and turn for over half an hour.", "I'm physically exhausted, but I have something heavy on my mind, so I just can't sleep peacefully.", "I drift off quickly and naturally without having to force my mind to shut off."] },
  { scene: "You just climbed 3 floors of stairs with a friend. How do you feel compared to them?", caption: "A quick physical effort relative to others highlights your baseline stamina.", options: ["I'm noticeably more out of breath than them. I'm still panting and sweating heavily.", "My face stays red much longer than theirs. I feel hot, bothered, and keep sweating.", "About the same. I recover in a minute or two without feeling overly taxed."] },
  { scene: "Every year when the seasons change (like autumn to winter, or winter to spring), what usually happens to you?", caption: "Seasonal shifts test the strength of your body's outer defensive barrier.", options: ["I always get hit with sneezing, a runny nose, or itchy skin—almost like allergies.", "I'm super sensitive to the chill. I catch colds easily and they tend to linger.", "It's just another day. My body doesn't really react to the shift."] },
  { scene: "After eating a particularly greasy or sugary meal, what is your most noticeable feeling?", caption: "How you feel post-meal is a strong barometer for your digestive fire.", options: ["I feel sluggish, bloated, and brain-fogged. I just want to lay down.", "My mouth gets dry or bitter, and my breath or throat feels a bit 'off'.", "I feel totally fine. My stomach is comfortable and I just carry on."] },
  { scene: "When something makes you anxious (like a looming deadline), what does your body feel first?", caption: "Where stress manifests physically is a key clue to your inner balance.", options: ["My chest and ribs feel tight and restricted, and I catch myself sighing deeply.", "My heart races, my palms sweat, and my sleep completely derails at night.", "I might feel mentally tense, but my body stays physically calm and steady."] },
  { scene: "Looking in the mirror recently, how would you describe your overall complexion?", caption: "Your face is the most direct reflection of your overall circulation.", options: ["Dull or slightly grayish, with stubborn dark eye circles that extra sleep doesn't fix.", "Very pale and washed out, lacking natural color or vibrancy.", "Naturally rosy and clear. People often tell me I look healthy."] },
  { scene: "When you wake up in the morning, what is the usual state of your mouth?", caption: "Your morning mouth is a surprisingly accurate map of your gut health.", options: ["Sticky and heavily coated, with an obvious morning breath or bad taste.", "Noticeably bitter, or my throat and gums feel dry and inflamed.", "Clean and normal. No weird tastes, stickiness, or noticeable odors."] },
  { scene: "You've been sitting in a room with the air conditioning running continuously for a few hours. How do you usually feel?", caption: "How you handle artificial cold highlights your body's defensive warmth.", options: ["My neck and back get stiff and icy. I absolutely have to put on an extra layer.", "My sinuses get dry and stuffed up, or my skin starts feeling tight and itchy.", "Totally fine. I don't really notice the chill or need a sweater."] },
  { scene: "You stayed up past 1 AM with friends. Compared to them, what is your most noticeable feeling the next day?", caption: "The 'hangover' from a late night reveals how your body handles depletion.", options: ["My eyes are burning, my lips are dry, and I feel this weird internal heat.", "My face is an oil slick, I'm prone to a breakout, and I'm highly irritable.", "I'm tired, sure, but after a bit of rest I bounce back pretty easily."] },
  { scene: "After eating a meal, what is your most natural physical state?", caption: "Post-meal behavior shows how easily your digestive system generates energy.", options: ["I just want to sink into the couch. The thought of moving feels exhausting.", "Sitting actually makes me feel bloated. I need to walk around to let the food settle.", "I'm good to go. I can jump right back into whatever I was doing without feeling weighed down."] },
  { scene: "How do you typically react to certain foods (like seafood or nuts) or environments (like pollen or pet hair)?", caption: "Hypersensitivity is the hallmark of an over-reactive immune baseline.", options: ["I have known triggers that reliably give me hives, watery eyes, or a tight throat.", "Heavy food or alcohol might cause me to get pimples or make me flush, but I don't have true allergies.", "Nothing bothers me. I can eat or be around pretty much anything."] },
  { scene: "Do you feel like you catch colds more easily than people around you, or take noticeably longer to recover?", caption: "How your body handles a cold highlights the difference between low energy and deep chill.", options: ["Yes. When I'm sick I get deep chills and just want to be buried under heavy blankets.", "Yes. For me, a cold mostly means profound fatigue and weakness, rather than feeling freezing.", "Not really. I catch the occasional bug like anyone else, and it clears up in about a week."] },
  { scene: "If you lightly bump into a table corner, or even without any obvious force, what happens to your skin?", caption: "Unexplained bruising is a classic sign of sluggish micro-circulation.", options: ["I bruise incredibly easily. I get dark patches that seem to take weeks to finally fade.", "I don't bruise much, but my skin is chronically dry, rough, or prone to flaking.", "I rarely bruise. If I do, it's a small mark that's gone in a couple of days."] },
  { scene: "Regarding your usual bowel movements, which of these best describes your situation?", caption: "Bowel habits offer the most unfiltered look into your internal gut environment.", options: ["Often hard, dry, and infrequent. It usually requires some effort.", "Tends to be sticky, hard to flush clean, with a noticeably strong odor.", "Regular, well-formed, and effortless. Once a day and cleanly passed."] },
  { scene: "Do you have any recurring physical discomfort in a specific part of your body?", caption: "The exact nature and location of pain helps differentiate stagnant energy from stagnant blood.", options: ["Yes, a sharp or dull pain in the same spot, which often feels worse at night.", "I get a tight, heavy feeling around my chest or ribs, but the location shifts around. It's often linked to stress.", "Nope, my body feels pretty comfortable overall. No fixed aches or tension."] },
  { scene: "If you could choose one thing for your body right now, what would you instinctively pick?", caption: "Don't overthink this one. Just go with your immediate gut feeling.", options: ["A deeply hot bath to finally warm my body all the way through.", "A long walk outside to just breathe and let the tension in my chest go.", "Just collapsing into a really good sleep."] }
];

export const femaleQuestionEn = {
  scene: "Regarding your menstrual cycle, which of these best describes your situation over the last six months?",
  caption: "The menstrual cycle is an incredibly accurate diagnostic window. Your answer remains entirely private.",
  options: ["Darker blood with noticeable clots, or intense, sharp cramps that hurt worse when pressed.", "Intense PMS mood swings, swollen or tender breasts, and a flow that can be wildly unpredictable.", "Arrives like clockwork, normal color and flow, with barely any emotional shifts or physical pain.", "Not applicable right now (pregnant, nursing, amenorrhea, or menopause)."]
};

export const constitutionEn: Record<ConstitutionKey, { name: string; shortName: string; image: string; keywords: string[]; advice: string[] }> = {
  pinghe: { name: "Balanced Type", shortName: "Balanced", keywords: ["steady qi and blood", "stable sleep", "adapts with the seasons"], image: "Clear mountains, steady water, a light breeze through the trees, and sunlight that is warm but not harsh.", advice: ["Keep regular rhythms without turning wellness into anxiety.", "Eat to seven-tenths full and leave digestion some room.", "Move to a light sweat three times a week to keep qi flowing."] },
  qixu: { name: "Qi-Deficient Type", shortName: "Low Qi", keywords: ["easily tired", "short of breath", "sweats with movement"], image: "Thin mist in the mountains disperses with a small wind; the lamp under the eaves needs oil added slowly.", advice: ["Start the morning with warm water in small sips.", "Stand and stretch every 45 minutes at your desk.", "When tired, rest first instead of pushing through."] },
  yangxu: { name: "Yang-Deficient Type", shortName: "Low Yang", keywords: ["fears cold", "cold hands and feet", "prefers warm drinks"], image: "A valley with little sunlight and a cold stream; it needs a steady warm lamp, not a sudden blaze.", advice: ["Dry your hair promptly, especially around the nape.", "Avoid iced drinks and keep breakfast warm.", "Let your back get ten minutes of afternoon sun when possible."] },
  yinxu: { name: "Yin-Deficient Type", shortName: "Low Yin", keywords: ["dry mouth", "warm palms and soles", "light sleep"], image: "Sun-warmed stones and a shallow pond; the place needs fine rain, not strong wind.", advice: ["Reduce spicy barbecue-style foods in the evening.", "Put screens down half an hour before bed.", "Try gentle teas with ophiopogon or goji berries."] },
  tanshi: { name: "Phlegm-Damp Type", shortName: "Damp", keywords: ["heavy body", "greasy feeling", "thick tongue coat"], image: "Rain collects in a mountain hollow; clouds sit halfway up the slope until wind slowly dries the road.", advice: ["Cut back on sweets and milk tea to ease the spleen and stomach.", "Walk for 15 minutes after meals to help dampness move.", "Keep light teas such as aged tangerine peel or poria at your desk."] },
  shire: { name: "Damp-Heat Type", shortName: "Damp Heat", keywords: ["oily skin", "bitter mouth", "restless heat"], image: "A humid southern wind meets hot sun; the plants steam and need a clearer breeze.", advice: ["Reduce late nights and heavy late-night food.", "Exercise to a light sweat, not an exhausting one.", "Pair chrysanthemum or coix seed for a fresher daily drink."] },
  xueyu: { name: "Blood-Stasis Type", shortName: "Stasis", keywords: ["dull complexion", "stabbing pain", "bruises easily"], image: "Old stones slow an old river; the sky is dark blue, and the stream needs a new way around the blockage.", advice: ["Avoid sitting still too long; move the neck, shoulders, and calves.", "Keep emotions moving instead of storing pressure in the body.", "Seek medical advice for obvious menstrual pain or sharp pain."] },
  qiyu: { name: "Qi-Stagnant Type", shortName: "Stagnant Qi", keywords: ["chest tightness", "sighing", "emotionally sensitive"], image: "Wind in a bamboo grove is blocked by a wall; the shadows are dense but not chaotic—one window is enough.", advice: ["Give yourself ten minutes of aimless walking each day.", "Use breathing with a longer exhale to soften tension.", "Rose or aged tangerine peel aromas can be a gentle emotional cue."] },
  tebing: { name: "Special Diathesis Constitution", shortName: "Special Diathesis", keywords: ["allergy-prone", "environment-sensitive", "strong reactions"], image: "Pollen rises along a mountain path; the body is like a sensitive doorbell that needs kind boundaries.", advice: ["Track triggers instead of managing allergies by guesswork.", "Protect the nose, throat, and skin barrier during seasonal shifts.", "For clear allergy or asthma-like symptoms, consult a clinician first."] }
};

export const herbsText = {
  zh: { kicker: "食疗本草 · 属性卡片", title: "一味本草，先读性情。", intro: "将黄芪、红枣、麦冬、茯苓等常见材料整理成可筛选的生活卡片：性味、功效、适合体质与极简焖泡配方一眼可见。所有建议只作日常科普，特殊疾病、孕期或用药中请先咨询专业人士。", all: "全部", effect: "功效", nature: "性味", recipe: "焖泡配方", note: "提醒" },
  en: { kicker: "Herbal Pantry · Attribute Cards", title: "Before using an herb, read its temperament.", intro: "Astragalus, red dates, ophiopogon, poria, and other common ingredients are arranged into filterable cards: nature, flavor, benefits, suitable body patterns, and simple steeping ideas. For education only; consult a professional for illness, pregnancy, or medication use.", all: "All", effect: "Benefit", nature: "Nature & Flavor", recipe: "Simple Steep", note: "Note" }
};

export const herbEn: Record<string, { name: string; effect: string; nature: string; flavor: string; recipe: string; note: string }> = {
  黄芪: { name: "Astragalus", effect: "Supports qi and the exterior", nature: "slightly warm", flavor: "sweet", recipe: "3 slices astragalus + 2 red dates; steep in warm water for 10 minutes.", note: "Pause during feverish colds or obvious internal heat." },
  红枣: { name: "Red Date", effect: "Nourishes blood and harmonizes the middle", nature: "warm", flavor: "sweet", recipe: "Split 2 red dates + 1 longan; drink warm in the afternoon.", note: "Naturally sweet; use lightly if dampness is obvious." },
  麦冬: { name: "Ophiopogon", effect: "Nourishes yin and moistens the lungs", nature: "slightly cold", flavor: "sweet, slightly bitter", recipe: "5 pieces ophiopogon + 8 goji berries; steep with hot water.", note: "Use carefully with weak, cold digestion or diarrhea." },
  茯苓: { name: "Poria", effect: "Strengthens the spleen and drains dampness", nature: "neutral", flavor: "sweet, bland", recipe: "Small poria pieces + a little aged tangerine peel; drink warm after meals.", note: "Works best with less sugar and less oily food." },
  枸杞: { name: "Goji Berry", effect: "Nourishes liver and kidney", nature: "neutral", flavor: "sweet", recipe: "8 goji berries + 5 pieces ophiopogon; steep in a cup.", note: "Good in small daily amounts for dry eyes; use less with damp heat." },
  玫瑰: { name: "Rose Bud", effect: "Moves liver qi", nature: "warm", flavor: "sweet, slightly bitter", recipe: "3 rose buds + a small piece of aged tangerine peel; steep lightly.", note: "The aroma matters more than a strong brew." },
  陈皮: { name: "Aged Tangerine Peel", effect: "Moves qi and transforms dampness", nature: "warm", flavor: "pungent, bitter", recipe: "A small piece with poria; drink warm after meals.", note: "Use less when the throat and mouth are very dry." },
  当归: { name: "Angelica Root", effect: "Nourishes and moves blood", nature: "warm", flavor: "sweet, pungent", recipe: "Use a small slice in soup; not recommended as a daily tea.", note: "Consult a clinician for heavy periods, pregnancy, or related concerns." },
  薏苡仁: { name: "Coix Seed", effect: "Drains dampness and lightens heaviness", nature: "slightly cold", flavor: "sweet, bland", recipe: "Cooked coix seed + Chinese yam in a light porridge.", note: "Cold constitutions should not use large amounts alone for long periods." },
  山药: { name: "Chinese Yam", effect: "Supports spleen and lung", nature: "neutral", flavor: "sweet", recipe: "Yam slices + red dates in warm breakfast porridge.", note: "As a food, it suits gentle long-term care." },
  菊花: { name: "Chrysanthemum", effect: "Clears the liver and brightens the eyes", nature: "slightly cold", flavor: "sweet, bitter", recipe: "3 flowers + a few goji berries; steep lightly at the office.", note: "If you fear cold or have loose stools, avoid cold infusions." },
  桂圆: { name: "Longan", effect: "Nourishes the heart and calms the spirit", nature: "warm", flavor: "sweet", recipe: "1 longan + 1 red date; drink warm after dinner in a small amount.", note: "Use less with heat, damp heat, or phlegm-dampness." },
  生姜: { name: "Fresh Ginger", effect: "Warms the middle and disperses cold", nature: "warm", flavor: "pungent", recipe: "2 slices ginger + a little brown sugar; steep hot after catching cold.", note: "Use carefully with yin-deficiency heat or mouth sores." },
  桂皮: { name: "Cinnamon Bark", effect: "Warms yang and disperses cold", nature: "hot", flavor: "pungent, sweet", recipe: "Add a small piece to porridge or stew; avoid heavy solo infusions.", note: "Avoid during pregnancy or bleeding disorders." },
  莲子: { name: "Lotus Seed", effect: "Supports spleen and heart", nature: "neutral", flavor: "sweet, astringent", recipe: "8 lotus seeds + 5 lily bulb pieces; cook as porridge or a gentle stew.", note: "Use fewer lotus seeds with the core if stools are dry." },
  百合: { name: "Lily Bulb", effect: "Nourishes yin and moistens the lungs", nature: "slightly cold", flavor: "sweet", recipe: "5 lily bulb pieces + 6 lotus seeds; simmer gently in warm water.", note: "Do not overuse with wind-cold cough or cold digestion." },
  决明子: { name: "Cassia Seed", effect: "Clears liver heat and brightens the eyes", nature: "slightly cold", flavor: "sweet, bitter", recipe: "Lightly toast 5g cassia seed and steep hot as an afternoon tea.", note: "Avoid frequent use with loose stools from spleen weakness or low blood pressure." },
  五味子: { name: "Schisandra", effect: "Astringes lung qi and supports kidney essence", nature: "warm", flavor: "sour, sweet", recipe: "Soak 10 berries in cool water for 20 minutes, then steep with hot water.", note: "Avoid at the start of an external cold or with excess heat." },
  丹参: { name: "Danshen", effect: "Moves blood and resolves stasis", nature: "slightly cold", flavor: "bitter", recipe: "Use a small amount in soup; avoid large solo infusions, 1–2 times weekly.", note: "Avoid during pregnancy; consult a clinician if taking anticoagulants." },
  藿香: { name: "Patchouli Herb", effect: "Transforms dampness and relieves summer discomfort", nature: "slightly warm", flavor: "pungent", recipe: "A little patchouli leaf + aged tangerine peel; steep hot in summer.", note: "Not ideal for yin-deficiency heat." }
};

export const acupointsText = {
  zh: {
    kicker: "经穴科普 · 十二条河",
    title: "经络是身体的路，穴位是路上的灯。",
    intro: "图中经络以精简线条示意走向，不完全对应真实人体的经络路径，以实际情况为准。可切换正面/背面、显示经络/穴位，点击十二经络或常用穴位查看作用、不通表现、按揉方法与饮食建议。内容仅作中医生活科普，不替代诊疗。",
    atlasLabel: "互动图谱",
    atlasTitle: "十二经络与常用穴位",
    atlasHint: "点击彩色经络线或红色穴位点查看详情；手机端可上下滚动浏览。",
    iframeTitle: "十二经络与常用穴位交互图"
  },
  en: {
    kicker: "Meridians · Twelve Rivers",
    title: "Meridians are pathways; acupoints are small lights along the way.",
    intro: "The meridian lines in this atlas use simplified strokes to suggest general pathways and do not precisely match their actual anatomical routes — please refer to authoritative sources for accuracy. Toggle front/back views, show meridians or acupoints, and click a channel or point for functions, blockage signs, massage guidance, and food suggestions. Educational only; not medical advice.",
    atlasLabel: "Interactive Atlas",
    atlasTitle: "Twelve Meridians & Key Acupoints",
    atlasHint: "Click colored channel lines or red point markers for details. On mobile, scroll vertically through the atlas.",
    iframeTitle: "Interactive atlas of twelve meridians and key acupoints"
  }
};

export const acupointEn: Record<string, { name: string; meridian: string; position: string; effect: string; method: string }> = {
  足三里: { name: "Zusanli (足三里)", meridian: "Stomach Channel of Foot-Yangming", position: "About four finger-widths below the outer knee eye, one finger-width lateral to the tibial crest.", effect: "Supports spleen and stomach, steadies earth qi; useful for fatigue, weak appetite, and deskbound routines.", method: "Press and knead with the thumb for 1 minute to a comfortable sore-aching sensation, alternating sides." },
  太冲: { name: "Taichong (太冲)", meridian: "Liver Channel of Foot-Jueyin", position: "On the dorsum of the foot, in the depression before the junction of the first and second metatarsals.", effect: "Moves liver qi and helps ease tightness, irritability, and chest constraint.", method: "Slide upward from the toe web to the hollow, press for 30 seconds, then knead gently." },
  内关: { name: "Neiguan (内关)", meridian: "Pericardium Channel of Hand-Jueyin", position: "About three finger-widths above the wrist crease, between the two tendons.", effect: "Calms the spirit and harmonizes the stomach; helpful for anxiety, palpitations, or motion sickness.", method: "Press vertically with the thumb while exhaling slowly, 1 minute on each side." },
  大椎: { name: "Dazhui (大椎)", meridian: "Governor Vessel", position: "In the depression below the most prominent bone at the back of the neck when the head is bent forward.", effect: "Supports yang warmth and protects the neck and upper back from cold.", method: "Use a warm towel or dry the area promptly after washing hair; avoid forceful pressing." },
  合谷: { name: "Hegu (合谷)", meridian: "Large Intestine Channel of Hand-Yangming", position: "On the back of the hand at the tiger's mouth, in the muscle between the thumb and index finger.", effect: "Regulates qi and blood; often used for head, tooth, and facial discomfort.", method: "Press the opposite Hegu with the thumb to a sore-aching but comfortable degree for 1–2 minutes, alternating sides." },
  神阙: { name: "Shenque (神阙)", meridian: "Conception Vessel", position: "At the center of the navel.", effect: "Warms yang, disperses cold, and supports digestion; helpful for cold abdomen and weak digestion.", method: "Warm the navel with the palm and knead clockwise, or use a moxa box for 10–15 minutes." },
  百会: { name: "Baihui (百会)", meridian: "Governor Vessel", position: "At the top of the head, where the line connecting the ear tips meets the midline.", effect: "Lifts clear yang and refreshes the mind; used for dizziness, low spirit, and poor focus.", method: "Gently knead with the pads of the index and middle fingers for 1–2 minutes; do not press hard." },
  三阴交: { name: "Sanyinjiao (三阴交)", meridian: "Spleen Channel of Foot-Taiyin", position: "About four finger-widths above the inner ankle tip, just behind the medial border of the tibia.", effect: "Harmonizes the liver, spleen, and kidney channels; supports sleep, menstrual regulation, and fluid movement.", method: "Knead with the thumb to a mild sore-aching sensation for 1–2 minutes each side; use caution during menstruation." }
};
