import type { ConstitutionKey } from "./constitutions";

export type Herb = {
  name: string;
  pinyin: string;
  effect: string;
  nature: string;
  flavor: string;
  recipe: string;
  suitable: ConstitutionKey[];
  note: string;
};

export const herbs: Herb[] = [
  { name: "黄芪", pinyin: "Huangqi", effect: "补气固表", nature: "微温", flavor: "甘", recipe: "黄芪3片 + 红枣2枚，温水焖泡10分钟。", suitable: ["qixu", "pinghe"], note: "感冒发热或上火明显时先暂停。" },
  { name: "红枣", pinyin: "Hongzao", effect: "养血和中", nature: "温", flavor: "甘", recipe: "红枣2枚掰开 + 桂圆1枚，下午温饮。", suitable: ["qixu", "yangxu", "pinghe"], note: "甜度较高，痰湿明显者少量。" },
  { name: "麦冬", pinyin: "Maidong", effect: "滋阴润肺", nature: "微寒", flavor: "甘、微苦", recipe: "麦冬5粒 + 枸杞8粒，热水焖泡。", suitable: ["yinxu"], note: "脾胃虚寒、腹泻时谨慎。" },
  { name: "茯苓", pinyin: "Fuling", effect: "健脾渗湿", nature: "平", flavor: "甘、淡", recipe: "茯苓小块 + 陈皮少许，饭后温饮。", suitable: ["tanshi", "qixu"], note: "重在日常少甜少油配合。" },
  { name: "枸杞", pinyin: "Gouqi", effect: "滋补肝肾", nature: "平", flavor: "甘", recipe: "枸杞8粒 + 麦冬5粒，杯中焖泡。", suitable: ["yinxu", "pinghe"], note: "眼干人群可少量日饮，湿热明显少用。" },
  { name: "玫瑰", pinyin: "Meigui", effect: "疏肝理气", nature: "温", flavor: "甘、微苦", recipe: "玫瑰3朵 + 陈皮一小片，热水轻泡。", suitable: ["qiyu", "xueyu"], note: "香气是重点，不必浓泡。" },
  { name: "陈皮", pinyin: "Chenpi", effect: "理气化湿", nature: "温", flavor: "辛、苦", recipe: "陈皮一小片 + 茯苓，饭后温饮。", suitable: ["tanshi", "qiyu"], note: "口干咽燥明显者少量。" },
  { name: "当归", pinyin: "Danggui", effect: "补血活血", nature: "温", flavor: "甘、辛", recipe: "当归薄片少量入汤，不建议天天代茶。", suitable: ["xueyu", "qixu"], note: "经量过多、孕期等情况先咨询医生。" },
  { name: "薏苡仁", pinyin: "Yiyiren", effect: "利湿轻身", nature: "微寒", flavor: "甘、淡", recipe: "熟薏苡仁 + 山药煮成清淡粥。", suitable: ["tanshi", "shire"], note: "体寒者不宜长期大量单用。" },
  { name: "山药", pinyin: "Shanyao", effect: "健脾益肺", nature: "平", flavor: "甘", recipe: "山药片 + 红枣煮粥，早餐温食。", suitable: ["qixu", "pinghe", "yangxu"], note: "作为食材更适合长期温和调养。" },
  { name: "菊花", pinyin: "Juhua", effect: "清肝明目", nature: "微寒", flavor: "甘、苦", recipe: "菊花3朵 + 枸杞少许，办公杯轻泡。", suitable: ["shire", "yinxu"], note: "怕冷腹泻者少喝冷泡。" },
  { name: "桂圆", pinyin: "Guiyuan", effect: "养心安神", nature: "温", flavor: "甘", recipe: "桂圆1枚 + 红枣1枚，晚饭后少量温饮。", suitable: ["yangxu", "qixu"], note: "上火、湿热、痰湿明显时少用。" },
  { name: "生姜", pinyin: "Shengjiang", effect: "温中散寒", nature: "温", flavor: "辛", recipe: "生姜2片 + 红糖少许，热水冲泡，适合受凉后饮用。", suitable: ["yangxu", "tanshi"], note: "阴虚内热、口舌生疮者慎用。" },
  { name: "桂皮", pinyin: "Guipi", effect: "温阳散寒", nature: "热", flavor: "辛、甘", recipe: "桂皮小段入粥或炖汤，不宜单独大量泡饮。", suitable: ["yangxu"], note: "孕期及出血性疾病患者禁用。" },
  { name: "莲子", pinyin: "Lianzi", effect: "健脾养心", nature: "平", flavor: "甘、涩", recipe: "莲子8粒 + 百合5片，煮粥或隔水炖，晚餐温食。", suitable: ["qixu", "yinxu", "pinghe"], note: "大便干结者少用带芯莲子。" },
  { name: "百合", pinyin: "Baihe", effect: "养阴润肺", nature: "微寒", flavor: "甘", recipe: "百合5片 + 莲子6粒，温水文火慢煮。", suitable: ["yinxu", "qiyu"], note: "风寒咳嗽或脾胃虚寒者不宜多用。" },
  { name: "决明子", pinyin: "Juemingzi", effect: "清肝明目", nature: "微寒", flavor: "甘、苦", recipe: "决明子5g微炒后热水焖泡，午后代茶饮。", suitable: ["shire", "qiyu"], note: "脾虚便溏、低血压者不宜常饮。" },
  { name: "五味子", pinyin: "Wuweizi", effect: "敛肺固肾", nature: "温", flavor: "酸、甘", recipe: "五味子10粒，冷水浸泡20分钟后热水焖泡。", suitable: ["qixu", "yinxu"], note: "外感初期或有实热者不宜服用。" },
  { name: "丹参", pinyin: "Danshen", effect: "活血化瘀", nature: "微寒", flavor: "苦", recipe: "少量丹参入汤，不建议单独大量泡饮，每周1~2次。", suitable: ["xueyu", "qiyu"], note: "孕期禁用；与抗凝药物同用须咨询医生。" },
  { name: "藿香", pinyin: "Huoxiang", effect: "化湿解暑", nature: "微温", flavor: "辛", recipe: "藿香叶少许 + 陈皮，夏日热水轻泡，解暑祛湿。", suitable: ["tanshi", "shire"], note: "阴虚体热者不宜。" }
];
