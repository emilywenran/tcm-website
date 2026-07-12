export type HabitItem = { icon: string; tip: string };
export type TeaItem = { name: string; ingredients: string; effect: string; icon: string };
export type AcupointItem = { name: string; location: string; method: string; icon: string };

export type ConstitutionAdvice = {
  habits: HabitItem[];
  teas: TeaItem[];
  acupoint: AcupointItem;
};

// ── 中文版症状溯源映射 ──────────────────────────────────────────────
export const symptomSourceMap: Record<string, string> = {
  '四肢酸沉，感觉怎么睡都不够，不想动': '你提到起床后四肢酸沉、不想动——这是脾气不足的典型信号。脾主四肢，脾虚则气血难以上达肢体，容易出现这种「睡够了还是累」的感觉。',
  '手脚发凉，必须先喝口热水或活动一会才暖过来': '你提到早起手脚发凉——这是阳气不足、温煦力弱的直接表现。阳虚者身体产热能力较弱，末梢循环差，四肢离心脏远，因此最先感受到寒意。',
  '困到头点，眼皮撑不住，很难提神': '你提到午后困乏严重——这是痰湿阻滞、脾气下陷的常见反应。午后阳气开始回收，本就容易犯困，痰湿体质者气机更难升提，因此特别容易在下午「宕机」。',
  '莫名烦躁，胸口发闷，很想叹口气': '你提到胸闷想叹气——这是肝气郁结的典型体验。当情绪或压力得不到疏散，肝气会「堵」在胸胁一带，叹气是身体本能的自我疏通动作。',
  '胃会隐隐发凉、绞痛，或者肚子不舒服，后悔喝了': '你提到喝冷饮后胃部不适——这是中焦阳气不足的信号。阳虚者胃腑怕寒，冷饮直接损伤脾胃阳气，导致气血凝滞、疼痛或不适。',
  '喝了还不够，口越喝越干，嘴唇发燥，身体反而更热': '你提到喝冷饮后口反而越来越干、身体发热——这是阴虚内热的信号。阴液不足时，身体虽渴却无法留住水分，虚火持续消耗津液，出现越喝越渴、唇燥发热的循环。',
  '脑子自动转，停不下来，翻来覆去超过半小时': '你提到入睡困难、脑子停不下来——这是阴虚火旺、心神不宁的典型表现。阴液不足时，虚火上扰心神，越到夜晚越容易思绪翻涌。',
  '心里压着事，明明很累，就是睡不踏实': '你提到心里有事睡不踏实——这是气郁化火、扰动心神的表现。情绪积压会让肝气化热上冲，即便身体疲惫，心神也难以安定入眠。',
  '明显比他们喘，气还没顺，还出了很多汗': '你提到轻度运动后喘促、多汗——这是气虚固摄失职的信号。气虚者肺气不足，稍一用力便气不够用；卫气无力固摄，汗液便容易外泄。',
  '脸比他们红更久，觉得烦热，汗出不止': '你提到运动后面热烦躁、汗多止不住——这是湿热内蕴、热迫津外泄的表现。体内湿热遇到运动刺激，容易急速上涌，表现为面赤、烦热和大量出汗。',
  '必定打喷嚏、流鼻涕、皮肤痒，像有过敏反应': '你提到换季必定出现过敏样反应——这是特禀体质的核心特征，肺卫功能偏弱，体表防御屏障对外界刺激反应过激，导致鼻炎、皮肤痒等症状。',
  '比周围的人更怕冷风，容易着凉，感冒了也恢复慢': '你提到比别人更怕风、容易感冒且恢复慢——这是阳虚卫表不固的表现。卫阳是身体的「防风膜」，阳虚时这层屏障力量不够，风寒邪气容易趁虚而入。',
  '身体发沉，脑子犯困，胃胀，特别想躺下': '你提到油腻饮食后胃胀、脑子犯困——这是痰湿积聚、脾胃运化受阻的表现。脾虚无力消化油腻，湿浊上泛蒙蔽清窍，就会出现「吃完就想睡」的感觉。',
  '嘴巴发干发苦，嗓子里感觉有点异味': '你提到饭后口干口苦——这是湿热上蒸的信号。湿热体质者消化过程中容易产生内热，热气沿胃经上升，出现口干苦、嗓子有异味等症状。',
  '胸口发紧、肋骨两侧像被压着，忍不住叹气': '你提到焦虑时胸口发紧、肋间有压迫感——这是肝气横逆、气机郁结的表现。情绪压力直接作用于肝，肝气不畅则横逆犯胸，出现这种「被压住」的感觉。',
  '心跳加速、手心出汗，越到夜里越睡不好': '你提到压力下心跳快、手心汗、夜里睡眠变差——这是阴虚内热扰神的表现。阴液不足则虚火内生，压力触发后会加速上扰心神，导致心悸、盗汗及睡眠质量下降。',
  '暗沉偏黄或带黛色，黑眼圈明显，感觉怎么休息都没用': '你提到脸色暗黄、黑眼圈深——这是血瘀气滞、气血循环不畅的外在信号。血液流通不顺畅时，代谢废物容易沉积在面部微循环，形成暗沉和黑眼圈。',
  '偏白偏灰，没什么血色，说话声音也偏小': '你提到脸色偏白偏灰、声音偏小——这是气虚血弱的典型外观。气血不足时面部血液供应减少，显现出白灰无华的气色；气虚则中气不足，说话自然有气无力。',
  '口中黏腻，感觉没刷牙一样，有异味': '你提到晨起口中黏腻有异味——这是脾胃运化变慢、湿浊停留的信号。夜间脾胃静止，湿气容易在口腔和消化道积聚，晨起时这种「内湿」最为明显。',
  '嘴巴发苦，或者牙龈、嗓子容易上火发炎': '你提到早起嘴苦、牙龈嗓子容易发炎——这是湿热循经上炎的表现。胃经和胆经热气沿经络上行，在口腔、牙龈、咽喉处集聚，导致反复炎症。',
  '肩颈发凉，后背发紧，必须加衣服才舒服': '你提到空调环境下肩颈发凉后背发紧——这是阳虚卫表薄弱、风寒直中背腧的表现。背部是督脉和膀胱经所在，阳气不足时这里最容易被寒气侵入。',
  '鼻腔干、鼻子堵，或者皮肤开始紧绷发痒': '你提到空调环境中鼻腔干、皮肤紧绷——这是特禀体质肺卫偏弱、黏膜屏障脆弱的表现。干冷空气直接刺激敏感黏膜，导致过度收缩和不适。',
  '比他们更明显——眼睛干涩，嘴唇干裂，感觉内热上来了': '你提到熬夜后眼干唇裂、内热感强——这是熬夜加剧阴液损耗的直接后果。夜间是阴液修复的时间，错过后虚火无所制约，眼、唇等阴液集中部位最先干燥。',
  '比他们更明显——满脸油光，容易冒痘，情绪更烦躁': '你提到熬夜后油光满面、长痘、情绪烦躁——这是湿热在熬夜后被快速放大的表现。缺乏睡眠会打乱肝脏解毒节律，湿热无法正常代谢，转而从皮肤排出。',
  '想立刻坐下或躺着，动一动都觉得沉': '你提到饭后立刻想躺下、动一动都觉得沉——这是痰湿阻滞气机的饭后反应。脾胃需要气血来运化，痰湿体质者气血原本就不够活跃，饭后更难以升提。',
  '坐着反而胀，散散步感觉会好一点': '你提到饭后散步比坐着舒服——这是气郁阻滞、气机需要活动疏散的信号。肝气郁结时，静止会让气机更加凝滞，运动反而有助于推动气血流通、消胀解郁。',
  '有几样明确的东西会让我起疹、流眼泪，或者喉咙发紧': '你提到明确的过敏原会引发皮疹、流泪或喉咙发紧——这是特禀体质最核心的特征，免疫系统对特定物质产生过激反应，需要识别并长期管理触发因素。',
  '吃重口或喝酒容易上火、冒痘，但没有明确过敏': '你提到重口味或饮酒后容易上火长痘——这是湿热体质遇到「助热」食物的典型反应。酒精和辛辣食物直接化热化湿，湿热寻找出路时往往从皮肤排出，形成痘痘。',
  '是的，而且感冒时特别怕冷、打寒战，缩在被子里才好': '你提到感冒时特别怕冷、打寒战——这是阳虚体质感邪的典型反应。阳气不足者卫表薄弱，风寒一旦入侵，寒象会被明显放大，身体会本能地蜷缩保暖来抵御寒邪。',
  '是的，感冒时主要是没力气、浑身乏，不一定觉得特别冷': '你提到感冒时主要表现为疲乏无力——这是气虚体质感邪的特点。气虚者正气不足，抗邪能力弱，感冒后消耗有限的气血来御邪，导致全身乏力更为突出。',
  '容易出现大片瘀青或暗斑，而且消退很慢，要一两周': '你提到容易出现大片瘀青、消退缓慢——这是血瘀体质的重要外征。血液流行不畅时，轻微碰撞便会造成较大范围的瘀血积聚，而循环不力也使得散瘀的速度明显慢于常人。',
  '皮肤偏干，摸起来有点粗糙，容易脱皮': '你提到皮肤干燥粗糙、容易脱皮——这是阴虚或血虚、肌肤失于濡养的表现。阴血是皮肤润泽的「底料」，不足时皮表得不到足够滋养，便会出现干燥、粗糙和脱屑。',
  '经常偏硬，好几天一次，或者排出费力': '你提到大便干硬、数日一次——这多见于阳虚或血虚体质。阳虚者肠道推动力不足，血虚者肠道失于润养，两者都会导致大便干结难行，出现排便无力的情况。',
  '容易黏在马桶壁上，味道比较重，难以冲干净': '你提到大便黏腻、气味重、难冲净——这是湿热内蕴、肠道湿浊下注的典型表现。湿热体质者消化系统湿气和热气并重，代谢产物黏腻，排出时附壁而难清洁。',
  '有某个位置固定的隐痛或刺痛，位置不会移动，夜里有时更明显': '你提到某处有固定的隐痛或刺痛、夜间加重——这是血瘀最具辨别性的疼痛信号。中医认为「通则不痛，痛则不通」，血瘀导致局部血脉阻塞，疼痛部位固定、性质刺痛，夜间阳气内收、循环减慢，瘀痛往往更为明显。',
  '胸口或两侧肋骨会有胀闷感，位置不太固定，跟情绪波动有关': '你提到胸肋胀闷、位置随情绪变化——这是气郁体质的典型「气滞痛」。与血瘀的固定刺痛不同，气滞引起的不适随气机流走而游移，情绪波动时肝气郁结加重，胀闷感也随之明显。',
  '泡一个热水澡，把全身暖透': '你的直觉想要温热——这与阳虚气虚的体质倾向高度吻合。身体在潜意识里知道自己需要补充阳气、疏通寒凝，热浴正是最直接的外在温养方式。',
  '出去走走，让胸口松一松': '你的直觉想要走出去透气——这与气郁体质的内在需求吻合。身体感知到气机的郁结，本能地想借助运动和自然环境来开散胸中郁气。',
  '喝一大杯温水，睡个好觉': '你的直觉想要水分和睡眠——这与阴虚的深层需求吻合。阴液不足时身体自然渴望补充水分；而睡眠是修复阴液最有效的方式，直觉往往比逻辑更诚实。',
  '经血颜色偏暗紫，有明显血块，或者痛经且痛感固定、拒按': '你提到经血暗紫、有血块或固定痛经——这是女性血瘀体质最直观的月经信号。血液运行不畅时，宫内血液淤积形成血块，排出时会引发痉挛性疼痛，且拒绝按压（按则痛甚）正是瘀血痛的特征。',
  '经前情绪特别波动（烦躁/低落），乳房胀痛，经量忽多忽少': '你提到经前情绪波动大、乳房胀痛——这是气郁体质影响冲任的典型表现。肝气郁结时，气机在经前最为紧张，情绪随之波动；肝经绕行乳房，气滞则乳胀；冲任不调则经量不稳定。',
};

// ── 中文版九种体质调养建议 ────────────────────────────────────────────
export const constitutionAdvice: Record<string, ConstitutionAdvice> = {
  pinghe: {
    habits: [
      { icon: '🌅', tip: '维持规律作息，每天尽量同一时间起床，不必刻意「养生」。' },
      { icon: '🥢', tip: '每餐七分饱，饮食清淡多样，不挑食不偏食。' },
      { icon: '🚶', tip: '每周至少3次微汗运动，步行、游泳、太极均可。' },
    ],
    teas: [
      { name: '绿茶淡饮', ingredients: '绿茶少许，温水轻泡', effect: '清心提神，日常保养', icon: '🍵' },
    ],
    acupoint: { name: '足三里', location: '膝眼下四横指，胫骨旁一横指', method: '每天轻揉1分钟，以酸胀感为度，健脾和胃、保元固本。', icon: '✨' },
  },
  qixu: {
    habits: [
      { icon: '💧', tip: '早起先喝一杯温水，分小口慢饮，帮助脾胃苏醒。' },
      { icon: '⏱', tip: '久坐每45分钟起身伸展，避免气血停滞。' },
      { icon: '🌙', tip: '晚上11点前入睡，减少消耗，让身体好好补气。' },
    ],
    teas: [
      { name: '黄芪红枣茶', ingredients: '黄芪3片 + 红枣2枚，温水焖泡10分钟', effect: '补气固表，改善疲惫感', icon: '🌾' },
    ],
    acupoint: { name: '气海', location: '肚脐正下方约两横指处', method: '掌心顺时针轻揉5分钟，或热敷10分钟，温补元气、改善乏力。', icon: '🔴' },
  },
  yangxu: {
    habits: [
      { icon: '🚿', tip: '洗完头立刻吹干，尤其护住大椎和颈后，不让寒气钻进来。' },
      { icon: '🧊', tip: '少喝冷饮，少吃冰品，早餐尽量温热，少用寒凉损阳气。' },
      { icon: '☀️', tip: '午后晒背10分钟，让阳光直接温暖督脉，是最温和的补阳法。' },
    ],
    teas: [
      { name: '生姜红糖茶', ingredients: '生姜2片 + 红糖少许，热水冲泡', effect: '温中散寒，暖胃驱寒，适合手脚凉、胃怕冷者', icon: '🫚' },
    ],
    acupoint: { name: '大椎', location: '低头时颈后最高骨突下方凹陷处', method: '热毛巾温敷10分钟，或吹风机热风距离15cm吹暖，振奋阳气、防风散寒。', icon: '🔥' },
  },
  yinxu: {
    habits: [
      { icon: '📵', tip: '睡前半小时放下手机和屏幕，给身体降温收神。' },
      { icon: '🌶', tip: '减少辛辣烧烤类食物，尤其晚餐，少让虚火找到「燃料」。' },
      { icon: '🛁', tip: '睡前泡脚水温别太烫，约40°C微微出汗即可，助眠不伤阴。' },
    ],
    teas: [
      { name: '麦冬石斛茶', ingredients: '麦冬5粒 + 石斛少许 + 枸杞8粒，热水焖泡', effect: '滋阴润燥，改善口干、手心热和浅眠', icon: '🌿' },
    ],
    acupoint: { name: '太溪', location: '内踝尖与跟腱之间的凹陷处', method: '睡前拇指按揉1~2分钟，微酸微胀感，滋肾阴、降虚火、助眠。', icon: '💧' },
  },
  tanshi: {
    habits: [
      { icon: '🧋', tip: '减少奶茶、甜食、油炸食品，给脾胃「松绑」，减少痰湿生成。' },
      { icon: '🚶', tip: '饭后散步15分钟，帮助脾胃运化、推动湿气代谢。' },
      { icon: '🌬', tip: '居住环境注意通风，避免潮湿，湿气会从外部加重体内负担。' },
    ],
    teas: [
      { name: '陈皮茯苓茶', ingredients: '陈皮一小片 + 茯苓小块，饭后温水焖泡', effect: '理气化湿，改善身体沉重感和饭后犯困', icon: '🍊' },
    ],
    acupoint: { name: '丰隆', location: '外踝尖与膝盖外侧连线的中点处', method: '每天按揉1~2分钟，力度稍重以酸胀为度，化痰除湿、减轻身体沉重感。', icon: '⚡' },
  },
  shire: {
    habits: [
      { icon: '🌙', tip: '尽量在11点前入睡，熬夜会让湿热在身体里加速「发酵」。' },
      { icon: '🍺', tip: '少饮酒、少吃烧烤和重口夜宵，减少湿热的「食物燃料」。' },
      { icon: '🏃', tip: '运动出微汗为度，大量暴汗反而会伤津耗气，适得其反。' },
    ],
    teas: [
      { name: '菊花薏米茶', ingredients: '菊花3朵 + 薏苡仁少许，热水轻泡', effect: '清热利湿，改善油光痘痘和口苦烦躁', icon: '🌼' },
    ],
    acupoint: { name: '合谷', location: '手背虎口，拇指食指根部肌肉隆起处', method: '按压对侧合谷1~2分钟，以酸胀为度，清热泻火、疏散风热。', icon: '✋' },
  },
  xueyu: {
    habits: [
      { icon: '💺', tip: '避免久坐不动，每小时起身活动肩颈和小腿，推动血液循环。' },
      { icon: '🧘', tip: '保持情绪顺畅，不把压力闷在身体里，情绪郁结会加重血瘀。' },
      { icon: '🌡', tip: '注意保暖，寒冷会让血液流速变慢，加重瘀滞。' },
    ],
    teas: [
      { name: '玫瑰丹参茶', ingredients: '玫瑰花3朵 + 少量丹参，热水轻泡（每周1~2次）', effect: '活血疏肝，改善面色暗沉和情绪郁滞', icon: '🌹' },
    ],
    acupoint: { name: '太冲', location: '足背第一、二跖骨结合部前方凹陷处', method: '从脚趾缝向上推至凹陷处，点按30秒后轻揉，疏肝活血、推动气血运行。', icon: '🎯' },
  },
  qiyu: {
    habits: [
      { icon: '🚶', tip: '每天给自己10分钟无目的散步，不看手机，只是走和感受。' },
      { icon: '🌬', tip: '练习4-7-8呼吸法：吸气4秒、屏息7秒、呼气8秒，疏散郁结。' },
      { icon: '🌸', tip: '居家或工位放点香气植物或精油，玫瑰、橙皮类香气有助于舒郁。' },
    ],
    teas: [
      { name: '玫瑰陈皮茶', ingredients: '玫瑰花3朵 + 陈皮一小片，热水轻泡', effect: '疏肝理气，缓解胸闷叹气和情绪低落', icon: '🌺' },
    ],
    acupoint: { name: '膻中', location: '两乳头连线中点，胸骨体上', method: '掌根轻轻揉按1~2分钟，或用中指点揉，宽胸理气、快速缓解胸闷叹气。', icon: '💨' },
  },
  tebing: {
    habits: [
      { icon: '📋', tip: '记录自己的过敏触发物清单，用数据管理替代每次猜测。' },
      { icon: '🧣', tip: '换季时重点保护鼻咽和皮肤屏障，外出戴口罩，室内控制湿度。' },
      { icon: '🏥', tip: '明显过敏或哮喘样症状时，优先咨询医生，不依赖食疗替代。' },
    ],
    teas: [
      { name: '黄芪防风茶', ingredients: '黄芪3片 + 防风少许，温水焖泡10分钟', effect: '补肺固表，提升卫气对外邪的防御能力', icon: '🛡' },
    ],
    acupoint: { name: '肺俞', location: '背部第三胸椎棘突下，旁开两横指', method: '用热毛巾温敷或轻柔按揉，每次5分钟，宣肺固表、增强肺卫防御能力。', icon: '🫁' },
  },
};

// ── 英文版症状溯源映射 ──────────────────────────────────────────────
export const symptomSourceMapEn: Record<string, string> = {
  "Limbs feel heavy, never enough sleep, don't want to move": 'You mentioned waking with heavy, achy limbs no matter how much you sleep. This is a classic sign of spleen qi deficiency — when the spleen cannot distribute energy to the limbs, the body feels perpetually weighed down regardless of rest.',
  'Hands and feet feel cold, need hot water or movement to warm up': 'Cold hands and feet on waking suggest yang deficiency. Your body has less warming energy to circulate to the extremities, so they register cold first thing in the morning.',
  "Head nodding, eyelids won't stay up, can't focus": "Severe early-afternoon fatigue points to phlegm-damp accumulation. Dampness resists upward movement of clear qi, making it hard to stay alert and present after midday.",
  'Unexplained irritability, tightness in chest, urge to sigh': "Chest tightness and the urge to sigh are hallmarks of liver qi stagnation. Sighing is the body's automatic decompression valve when qi cannot flow freely.",
  "Stomach feels cold, cramps, or discomfort — you regret it": 'Stomach discomfort after cold drinks signals yang deficiency in the middle burner. Cold directly suppresses the warming function needed for smooth digestion.',
  'Still thirsty after, lips feel dry, body feels warmer and more restless': 'Feeling thirstier after drinking cold water, with dry lips and rising inner heat, is a sign of yin deficiency. When yin fluids are insufficient, the body cannot retain moisture — deficiency heat keeps consuming fluid, creating a cycle of thirst and dryness.',
  'Mind keeps spinning, toss and turn for over half an hour': 'A restless mind at bedtime indicates yin deficiency with empty heat. When yin fluids are low, deficiency heat rises and disturbs the spirit, making it difficult to wind down.',
  "Heart heavy with worries, exhausted but can't fall asleep peacefully": 'Being exhausted but unable to sleep due to worry suggests qi stagnation turning to heat, which disturbs the heart spirit even when the body is drained.',
  'Noticeably more out of breath, still catching air, sweating more': 'Obvious breathlessness and heavy sweating after light exertion are signs of lung and defensive qi deficiency — the body cannot hold fluids in or generate enough breath.',
  'Face stays red longer, feel hot and bothered, sweating won\'t stop': 'Facial flushing and uncontrolled sweating during exercise point to damp-heat forcing fluids outward. Internal heat amplifies with physical exertion.',
  'Sneezing, runny nose, itchy skin — like an allergic reaction': 'Predictable allergic reactions at seasonal transitions are the core marker of the sensitive pattern — an overly reactive defensive qi layer.',
  'More sensitive to cold wind than others, catch colds easily and recover slowly': "Being more sensitive to wind than others and catching colds easily reflects yang deficiency of the surface defense. The body's outer protective layer is thin.",
  'Body feels heavy, brain foggy, stomach bloated, really want to lie down': 'Bloating, heaviness, and drowsiness after greasy food are signature phlegm-damp responses. The spleen cannot transform the load, and turbid dampness rises to cloud the mind.',
  'Mouth feels dry and bitter, throat has a slight unpleasant taste': 'Dry bitter mouth and throat odor after fatty meals are signs of damp-heat rising through the stomach channel.',
  'Chest tightens, sides of ribs feel pressed, urge to sigh': 'Tightness across the chest and ribs with a need to sigh is the clearest physical expression of liver qi stagnation — the compressed feeling is qi trying to move but being blocked.',
  "Heart races, palms sweat, sleep gets worse as the night goes on": 'Racing heart, sweaty palms, and worsening sleep under stress point to yin deficiency with heat disturbing the heart spirit.',
  "Dull, yellowish or grayish, heavy dark circles — rest doesn't seem to help": 'A dull, yellowish complexion with persistent dark circles signals poor microcirculation — the hallmark of blood stasis. Rest alone cannot address the underlying sluggish flow.',
  'Pale or grayish, lacking color, voice tends to be soft': 'A pale or grayish complexion with a quiet voice shows qi and blood deficiency. Without enough qi to circulate blood to the face, the skin loses its color and vitality.',
  "Sticky, coated feeling — like you haven't brushed": 'A sticky, odorous mouth on waking is the clearest morning signal of phlegm-damp accumulation. Overnight, dampness settles in the digestive tract and rises to the mouth.',
  'Bitter taste, or gums and throat prone to inflammation': 'Bitter mouth and recurrent gum or throat inflammation indicate damp-heat rising through the stomach and gallbladder channels to the upper body.',
  'Neck and shoulders get cold and stiff, need to add a layer to be comfortable': 'Cold shoulders, neck, and a tight back in AC environments reflect yang deficiency. The back is governed by the Governor Vessel and bladder channel — cold enters easily when yang is low.',
  'Nasal dryness, blocked nose, or skin starts feeling tight and itchy': 'Dry or blocked nose and tight-feeling skin in dry AC air signal sensitive-type lung wei deficiency. Fragile mucous membranes over-contract in response to stimuli.',
  'Noticeably worse — eyes dry and stinging, lips cracking, internal heat rising': 'Dry eyes, cracked lips, and a sense of rising heat after a late night are direct consequences of yin fluid depletion. Sleep is when yin repairs itself — miss it and deficiency heat has nothing to hold it down.',
  'Noticeably worse — oilier skin, more prone to breakouts, more irritable': "Oily skin, breakouts, and irritability after a late night show damp-heat being amplified. The liver's detox rhythm is disrupted, so excess heat escapes through the skin.",
  'Want to sit or lie down immediately, moving around feels heavy': "Wanting to lie down immediately after eating and feeling heavy with movement is a phlegm-damp post-meal pattern — the spleen cannot lift qi when dampness weighs it down.",
  'Sitting makes it worse — a short walk helps the bloating': 'Feeling better walking after meals and worse sitting still is a qi stagnation signal. Movement disperses what stillness holds trapped.',
  'A few specific things reliably cause hives, watery eyes, or throat tightness': 'Clear, reproducible reactions to specific triggers — hives, watery eyes, or throat tightness — are the defining feature of the sensitive pattern. Identifying and managing triggers is the primary strategy.',
  'Heavy food or alcohol causes heat and breakouts, but no clear allergies': 'Breaking out and feeling hot after heavy food or alcohol is the damp-heat pattern responding to heat-producing inputs. These items directly increase internal heat and drive it outward through the skin.',
  'Yes, and I get very cold/chilled when sick, feel best bundled under covers': 'Getting very cold and chilled when ill — seeking warmth compulsively — is the yang-deficient way of catching a cold. When yang is low, wind-cold invades more easily and the cold signs are amplified.',
  'Yes, mainly fatigue and exhaustion when sick, not necessarily extra cold': 'Feeling mainly fatigued rather than chilled when sick is the qi-deficient pattern of infection. With low qi, the body lacks reserves to fight back, and exhaustion becomes the dominant symptom.',
  'Easy to bruise badly — large dark patches that take one to two weeks to fade': 'Bruising easily with large, slow-fading dark patches is an important external sign of blood stasis. When circulation is sluggish, minor impacts cause wider pooling of blood, and poor flow slows the reabsorption process.',
  'Skin tends to be dry, rough to the touch, flaky': 'Dry, rough, and flaky skin reflects yin or blood deficiency leaving the skin undernourished. Yin and blood are the moistening base for healthy skin — when insufficient, the surface dries, roughens, and sheds.',
  'Often hard, every few days, or requires effort to pass': 'Hard stools that come every few days or require effort point to yang or blood deficiency. Yang deficiency weakens intestinal propulsion; blood deficiency dries the channel — both result in dry, difficult stools.',
  'Tends to stick to the bowl, strong smell, difficult to flush clean': 'Sticky, pungent stools that cling to the bowl are a signature of damp-heat in the intestines. The body\'s dampness and heat combine in the digestive tract, producing waste that is heavy, odorous, and hard to clear.',
  'Yes, a fixed dull ache or stabbing pain in one place, doesn\'t move, sometimes worse at night': 'A fixed, stabbing or dull ache that does not move — and tends to worsen at night — is the most distinctive pain signal of blood stasis. "No flow, no ease" as the saying goes: blocked vessels create localized, fixed pain, and at night when yang energy retreats and circulation slows, stasis pain deepens.',
  'Tightness or distension around the chest or sides of the ribs, location shifts, linked to emotions': 'Chest and rib tightness that shifts with emotions is the hallmark qi-stagnation pain. Unlike the fixed stab of blood stasis, stagnant qi moves with the flow of qi — so discomfort wanders, and emotional fluctuations tighten or release it.',
  'A hot bath, warming the whole body through': 'Your instinct to want warmth is highly consistent with yang or qi deficiency. The body intuitively reaches for external warmth when its own heat-generating capacity is low.',
  'Go for a walk outside, let the chest feel open and free': 'The impulse to go outside and open the chest aligns with qi stagnation. Your body senses the blockage and reaches for movement and fresh air as natural decompression.',
  'Drink a big glass of warm water and get a good night\'s sleep': 'The pull toward water and deep sleep reflects yin deficiency needs. The body is right: water replenishes yin fluids, and sleep is when they are restored most efficiently.',
  'Blood is dark purple, noticeable clots, or menstrual pain that is fixed and worsens with pressure': 'Dark purple blood with clots, or cramps that are fixed in location and worsen with pressure, are the clearest menstrual signs of blood stasis in women. Stagnant blood pooling in the uterus forms clots; the pressure-worsening pain ("refusing pressure") is the classic distinguishing sign of stasis versus deficiency cramping.',
  'Strong mood swings before period (irritability/low mood), breast tenderness, irregular flow': 'Intense pre-menstrual mood swings, breast tenderness, and irregular flow are typical expressions of qi stagnation affecting the Chong and Ren vessels. The liver governs both mood and the breast channel — when liver qi stagnates in the pre-menstrual phase, emotion, breast, and flow all become unstable.',
};

// ── 英文版九种体质调养建议 ────────────────────────────────────────────
export const constitutionAdviceEn: Record<string, ConstitutionAdvice> = {
  pinghe: {
    habits: [
      { icon: '🌅', tip: 'Keep a consistent wake time daily. Regularity itself is the best wellness practice.' },
      { icon: '🥢', tip: 'Eat to 70% full. Varied, mild meals without cravings or aversions.' },
      { icon: '🚶', tip: 'Light-sweat exercise 3x a week — walking, swimming, or tai chi all work.' },
    ],
    teas: [
      { name: 'Light Green Tea', ingredients: 'A pinch of green tea leaves, steeped in warm water', effect: 'Clears the mind, gentle daily maintenance', icon: '🍵' },
    ],
    acupoint: { name: 'Zu San Li (ST36)', location: 'Four finger-widths below the kneecap, one finger-width from the shin', method: 'Gentle circular massage for 1 minute daily until you feel a mild ache. Supports spleen and stomach, builds foundational energy.', icon: '✨' },
  },
  qixu: {
    habits: [
      { icon: '💧', tip: 'Sip a cup of warm water slowly first thing in the morning to wake the digestive system gently.' },
      { icon: '⏱', tip: 'Stand and stretch every 45 minutes of sitting to keep qi and blood moving.' },
      { icon: '🌙', tip: 'Aim to sleep before 11 PM. Less depletion means more energy to rebuild.' },
    ],
    teas: [
      { name: 'Astragalus & Red Date Tea', ingredients: '3 slices astragalus root + 2 red dates, steep 10 min in warm water', effect: 'Replenishes qi, reduces fatigue and shortness of breath', icon: '🌾' },
    ],
    acupoint: { name: 'Qi Hai (CV6)', location: 'Two finger-widths directly below the navel', method: 'Clockwise palm massage for 5 minutes, or warm compress for 10 minutes. Nourishes original qi and eases fatigue.', icon: '🔴' },
  },
  yangxu: {
    habits: [
      { icon: '🚿', tip: 'Dry your hair immediately after washing — protect the nape and Da Zhui point from cold drafts.' },
      { icon: '🧊', tip: 'Minimize cold drinks and raw foods. A warm breakfast is simple, effective yang support.' },
      { icon: '☀️', tip: 'Sun your back for 10 minutes in the early afternoon. This is the gentlest way to warm the Governor Vessel.' },
    ],
    teas: [
      { name: 'Ginger & Brown Sugar Tea', ingredients: '2 slices fresh ginger + a small amount of brown sugar, hot water', effect: 'Warms the middle, disperses cold — ideal for cold hands, feet, and a chilly stomach', icon: '🫚' },
    ],
    acupoint: { name: 'Da Zhui (GV14)', location: 'In the hollow below the most prominent vertebra at the back of the neck', method: 'Warm compress with a hot towel for 10 minutes, or gentle warm air from a hair dryer at 15 cm. Strengthens yang and guards against wind-cold.', icon: '🔥' },
  },
  yinxu: {
    habits: [
      { icon: '📵', tip: 'Put screens down 30 minutes before bed to let the body cool and the spirit settle.' },
      { icon: '🌶', tip: 'Reduce spicy and grilled foods at dinner — they add fuel to deficiency heat.' },
      { icon: '🛁', tip: 'Keep foot soaks around 40C — enough for a gentle sweat, not so hot it depletes yin.' },
    ],
    teas: [
      { name: 'Ophiopogon & Dendrobium Tea', ingredients: '5 ophiopogon berries + a little dendrobium + 8 wolfberries, steep in hot water', effect: 'Nourishes yin and moisture, eases dry mouth, warm palms, and light sleep', icon: '🌿' },
    ],
    acupoint: { name: 'Tai Xi (KD3)', location: 'In the hollow between the inner ankle and the Achilles tendon', method: 'Thumb massage 1-2 minutes before sleep until you feel a mild ache. Replenishes kidney yin, quiets deficiency heat, and aids sleep.', icon: '💧' },
  },
  tanshi: {
    habits: [
      { icon: '🧋', tip: "Reduce bubble tea, sweets, and fried foods to ease the spleen's load and slow dampness production." },
      { icon: '🚶', tip: 'A 15-minute walk after meals activates the spleen and helps the body process dampness.' },
      { icon: '🌬', tip: 'Keep your living space ventilated and dry. External dampness directly adds to internal dampness.' },
    ],
    teas: [
      { name: 'Tangerine Peel & Poria Tea', ingredients: 'A small piece of dried tangerine peel + a chunk of poria, steep after meals', effect: 'Regulates qi and drains dampness, eases post-meal heaviness and drowsiness', icon: '🍊' },
    ],
    acupoint: { name: 'Feng Long (ST40)', location: 'Midpoint of the line from the outer ankle to the outer knee', method: 'Press firmly for 1-2 minutes daily until a deep ache is felt. Transforms phlegm, drains dampness, and lightens the body.', icon: '⚡' },
  },
  shire: {
    habits: [
      { icon: '🌙', tip: 'Sleep before 11 PM — late nights accelerate damp-heat buildup.' },
      { icon: '🍺', tip: 'Limit alcohol, grilled meats, and heavy late meals. These are direct fuel for internal heat.' },
      { icon: '🏃', tip: 'Exercise to a light sweat only. Heavy sweating depletes fluids and backfires for damp-heat types.' },
    ],
    teas: [
      { name: "Chrysanthemum & Job's Tears Tea", ingredients: "3 chrysanthemum flowers + a small amount of Job's tears, light steep in hot water", effect: 'Clears heat and drains dampness, eases oily skin, breakouts, and bitter taste in the mouth', icon: '🌼' },
    ],
    acupoint: { name: 'He Gu (LI4)', location: 'On the back of the hand, at the peak of the muscle mound between thumb and index finger', method: 'Press the opposite He Gu for 1-2 minutes until you feel a firm ache. Clears heat, disperses wind, and reduces inflammation.', icon: '✋' },
  },
  xueyu: {
    habits: [
      { icon: '💺', tip: 'Avoid long sitting. Move shoulders, neck, and calves every hour to keep blood circulating.' },
      { icon: '🧘', tip: 'Let emotions flow — holding stress and pressure in the body directly worsens blood stasis.' },
      { icon: '🌡', tip: 'Stay warm. Cold slows blood flow and deepens stagnation.' },
    ],
    teas: [
      { name: 'Rose & Salvia Tea', ingredients: '3 rose petals + a small amount of salvia root, hot water (1-2x weekly)', effect: 'Moves blood and soothes the liver, improves dull complexion and emotional heaviness', icon: '🌹' },
    ],
    acupoint: { name: 'Tai Chong (LV3)', location: 'On the top of the foot, in the hollow just before the 1st and 2nd metatarsals meet', method: 'Slide upward from between the toes to the hollow, then press for 30 seconds and rub gently. Moves liver qi and blood.', icon: '🎯' },
  },
  qiyu: {
    habits: [
      { icon: '🚶', tip: 'Give yourself 10 minutes of aimless walking daily — no phone, just movement and presence.' },
      { icon: '🌬', tip: 'Try the 4-7-8 breath: inhale 4 sec, hold 7 sec, exhale 8 sec. Disperses stagnation effectively.' },
      { icon: '🌸', tip: 'Keep a fragrant plant or essential oil nearby — rose and citrus scents gently lift constrained qi.' },
    ],
    teas: [
      { name: 'Rose & Tangerine Peel Tea', ingredients: '3 rose petals + a small piece of dried tangerine peel, hot water', effect: 'Soothes liver qi, eases chest tightness, sighing, and low mood', icon: '🌺' },
    ],
    acupoint: { name: 'Dan Zhong (CV17)', location: 'Midpoint of the sternum, between the nipples', method: 'Gentle heel-of-palm press and rub for 1-2 minutes, or light finger press. Widens the chest, frees qi flow, and quickly relieves tightness.', icon: '💨' },
  },
  tebing: {
    habits: [
      { icon: '📋', tip: 'Keep a log of your allergy triggers. Managing by data beats guessing each time.' },
      { icon: '🧣', tip: 'At seasonal changes, protect the nose, throat, and skin barrier. Wear a mask outside; manage indoor humidity.' },
      { icon: '🏥', tip: 'For clear allergy or asthma symptoms, consult a doctor first. Herbal teas are support, not substitutes.' },
    ],
    teas: [
      { name: 'Astragalus & Siler Tea', ingredients: '3 slices astragalus root + a pinch of siler root, steep 10 min in warm water', effect: 'Strengthens lung qi and surface defense, builds resistance to external pathogens', icon: '🛡' },
    ],
    acupoint: { name: 'Fei Shu (BL13)', location: 'On the back, two finger-widths from the spine at the 3rd thoracic vertebra', method: 'Warm compress with a hot towel or gentle massage for 5 minutes each side. Strengthens lung function and surface immunity.', icon: '🫁' },
  },
};
