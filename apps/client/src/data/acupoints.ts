import type { ConstitutionKey } from "./constitutions";

export type Acupoint = {
  name: string;
  meridian: string;
  position: string;
  effect: string;
  method: string;
  suitable: ConstitutionKey[];
  svg: { x: number; y: number; labelX: number; labelY: number };
};

export const acupoints: Acupoint[] = [
  {
    name: "足三里",
    meridian: "足阳明胃经",
    position: "外膝眼下约四横指，胫骨前嵴旁开一横指。",
    effect: "健脾和胃、扶正培土，适合疲惫、胃口弱、久坐人群。",
    method: "拇指按揉1分钟，以酸胀但可接受为度，两侧交替。",
    suitable: ["qixu", "tanshi", "pinghe"],
    svg: { x: 51, y: 72, labelX: 62, labelY: 70 }
  },
  {
    name: "太冲",
    meridian: "足厥阴肝经",
    position: "足背第一、二跖骨结合部前方凹陷处。",
    effect: "疏肝理气，帮助缓解紧绷、烦躁、胸闷感。",
    method: "由脚趾缝向上推至凹陷处，点按30秒后轻揉。",
    suitable: ["qiyu", "shire", "xueyu"],
    svg: { x: 47, y: 91, labelX: 58, labelY: 88 }
  },
  {
    name: "内关",
    meridian: "手厥阴心包经",
    position: "腕横纹上约三横指，两筋之间。",
    effect: "宁心安神、和胃降逆，适合焦虑、心慌、晕车感。",
    method: "用拇指垂直按压，配合缓慢呼气，左右各1分钟。",
    suitable: ["qiyu", "yinxu", "pinghe"],
    svg: { x: 35, y: 46, labelX: 15, labelY: 42 }
  },
  {
    name: "大椎",
    meridian: "督脉",
    position: "低头时颈后最高骨性突起下方凹陷处。",
    effect: "振奋阳气、护住颈背风寒，是阳虚者日常保暖重点。",
    method: "热毛巾温敷或洗发后及时吹干，不建议用力猛按。",
    suitable: ["yangxu", "qixu", "tebing"],
    svg: { x: 50, y: 25, labelX: 62, labelY: 25 }
  },
  {
    name: "合谷",
    meridian: "手阳明大肠经",
    position: "手背虎口处，拇指与食指根部之间的肌肉隆起处。",
    effect: "通调气血、缓解头痛、牙痛及颜面部不适，常用于疏散风邪。",
    method: "拇指按压对侧合谷，以酸胀为度，每次1~2分钟，左右交替。",
    suitable: ["qiyu", "xueyu", "shire"],
    svg: { x: 30, y: 52, labelX: 14, labelY: 50 }
  },
  {
    name: "神阙",
    meridian: "任脉",
    position: "肚脐正中央。",
    effect: "温阳散寒、健运脾胃，适合腹部冷痛、消化不佳、怕冷体质。",
    method: "掌心对脐顺时针热敷或轻揉，或用艾灸盒温灸10~15分钟。",
    suitable: ["yangxu", "qixu", "tanshi"],
    svg: { x: 50, y: 62, labelX: 65, labelY: 60 }
  },
  {
    name: "百会",
    meridian: "督脉",
    position: "头顶正中，两耳尖连线与前后正中线的交点处。",
    effect: "提升阳气、醒神健脑，缓解头晕、精神不振、记忆力减退。",
    method: "食中二指指腹轻柔按揉，每次1~2分钟，勿用力重按。",
    suitable: ["qixu", "qiyu", "yangxu"],
    svg: { x: 50, y: 8, labelX: 64, labelY: 8 }
  },
  {
    name: "三阴交",
    meridian: "足太阴脾经",
    position: "内踝尖直上约四横指，胫骨内侧缘后方。",
    effect: "调和肝脾肾三经，改善睡眠、调节月经、缓解水肿。",
    method: "拇指按揉，以微酸微胀为度，每侧1~2分钟，经期慎用。",
    suitable: ["yinxu", "xueyu", "tanshi", "qiyu"],
    svg: { x: 44, y: 83, labelX: 28, labelY: 81 }
  }
];
