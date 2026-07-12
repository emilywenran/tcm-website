export type ConstitutionKey =
  | "pinghe"
  | "qixu"
  | "yangxu"
  | "yinxu"
  | "tanshi"
  | "shire"
  | "xueyu"
  | "qiyu"
  | "tebing";

export type Constitution = {
  key: ConstitutionKey;
  name: string;
  shortName: string;
  keywords: string[];
  image: string;
  color: string;
  element: "木" | "火" | "土" | "金" | "水";
  advice: string[];
};

export const constitutions: Constitution[] = [
  {
    key: "pinghe",
    name: "平和质",
    shortName: "平和",
    keywords: ["气血从容", "睡眠稳定", "四时可调"],
    image: "山色清朗，水脉平缓，林间有风，日光不过分热烈。",
    color: "#4A6741",
    element: "土",
    advice: ["维持规律作息，不为养生而焦虑。", "每餐七分饱，给脾胃留一点余地。", "每周三次微汗运动，保持气机流动。"]
  },
  {
    key: "qixu",
    name: "气虚质",
    shortName: "气虚",
    keywords: ["容易疲惫", "说话气短", "动则汗出"],
    image: "山间雾气轻薄，风一吹便散，屋檐下的灯火需要慢慢添油。",
    color: "#6B5E3E",
    element: "土",
    advice: ["上午给自己一杯温水，少量多次补气。", "工位久坐每45分钟站起伸展。", "少熬夜，疲惫时先休息而不是硬扛。"]
  },
  {
    key: "yangxu",
    name: "阳虚质",
    shortName: "阳虚",
    keywords: ["怕冷", "手脚凉", "喜热饮"],
    image: "谷地日光偏少，溪水清寒，适合添一盏温火，而不是骤然烈焰。",
    color: "#8C3A2E",
    element: "火",
    advice: ["洗完头及时吹干，尤其护住大椎附近。", "少喝冰饮，早餐尽量温热。", "午后晒背10分钟，让阳气慢慢回身。"]
  },
  {
    key: "yinxu",
    name: "阴虚质",
    shortName: "阴虚",
    keywords: ["口干", "手足心热", "睡眠浅"],
    image: "山石被午阳照得偏热，池水略浅，需要添一场细雨而非强风。",
    color: "#3D5A6E",
    element: "水",
    advice: ["晚间减少辛辣烧烤，让身体降噪。", "睡前半小时放下屏幕，给阴液回收时间。", "可用麦冬、枸杞等做温和茶饮。"]
  },
  {
    key: "tanshi",
    name: "痰湿质",
    shortName: "痰湿",
    keywords: ["困重", "油腻感", "舌苔厚"],
    image: "山坳雨水偏多，云气滞在半坡，路需要被风慢慢吹干。",
    color: "#4A6741",
    element: "土",
    advice: ["少甜少奶茶，给脾胃减负。", "饭后散步15分钟，帮助湿气流动。", "工位常备陈皮或茯苓类轻茶饮。"]
  },
  {
    key: "shire",
    name: "湿热质",
    shortName: "湿热",
    keywords: ["易油光", "口苦", "烦热"],
    image: "潮湿的南风遇上烈日，草木蒸腾，需要清风与疏朗。",
    color: "#8C3A2E",
    element: "火",
    advice: ["减少熬夜与重口味宵夜。", "运动以出微汗为度，不追求暴汗。", "用菊花、薏苡仁等做清爽搭配。"]
  },
  {
    key: "xueyu",
    name: "血瘀质",
    shortName: "血瘀",
    keywords: ["面色晦暗", "刺痛", "易有淤青"],
    image: "旧河道有石滞水，天色微黛，需要让溪流重新绕开阻处。",
    color: "#3D5A6E",
    element: "木",
    advice: ["避免久坐不动，肩颈和小腿都要动起来。", "保持情绪疏通，不把压力闷在身体里。", "经期或疼痛明显时及时就医评估。"]
  },
  {
    key: "qiyu",
    name: "气郁质",
    shortName: "气郁",
    keywords: ["胸闷", "叹气", "情绪敏感"],
    image: "竹林风被墙角挡住，叶影密而不乱，只需开一扇窗。",
    color: "#4A6741",
    element: "木",
    advice: ["每天给自己10分钟无目标散步。", "用呼气更长的呼吸法缓解紧绷。", "玫瑰、陈皮类香气可作为情绪提醒。"]
  },
  {
    key: "tebing",
    name: "特禀质",
    shortName: "特禀",
    keywords: ["易过敏", "环境敏感", "反应特别"],
    image: "山路花粉随风而起，身体像敏锐的门铃，需要温柔边界。",
    color: "#6B5E3E",
    element: "金",
    advice: ["记录触发因素，少靠猜测管理过敏。", "换季注意鼻咽与皮肤屏障。", "明显过敏或哮喘样症状应优先咨询医生。"]
  }
];

export const constitutionByKey = Object.fromEntries(constitutions.map((item) => [item.key, item])) as Record<ConstitutionKey, Constitution>;
