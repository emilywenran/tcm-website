export type MeridianHour = {
  branch: string;
  range: string;
  start: number;
  end: number;
  meridian: string;
  quote: string;
  tip: string;
  tone: "ink" | "dawn" | "warm" | "bamboo" | "blue";
};

export const meridianClock: MeridianHour[] = [
  { branch: "子时", range: "23:00-01:00", start: 23, end: 1, meridian: "胆经", quote: "凡十一藏取决于胆。", tip: "此刻胆经当令，放下手机，让身体替明日做一个清明的决定。", tone: "ink" },
  { branch: "丑时", range: "01:00-03:00", start: 1, end: 3, meridian: "肝经", quote: "卧则血归于肝。", tip: "夜深肝经主藏血，不必再消耗自己，闭眼就是养木。", tone: "ink" },
  { branch: "寅时", range: "03:00-05:00", start: 3, end: 5, meridian: "肺经", quote: "肺者，相傅之官，治节出焉。", tip: "天将明而肺气初布，若醒来，先慢慢呼吸，不急着思考。", tone: "blue" },
  { branch: "卯时", range: "05:00-07:00", start: 5, end: 7, meridian: "大肠经", quote: "天食人以五气，地食人以五味。", tip: "晨起大肠经主令，一杯温水与一次从容，是身体的开门礼。", tone: "dawn" },
  { branch: "辰时", range: "07:00-09:00", start: 7, end: 9, meridian: "胃经", quote: "胃者，水谷之海。", tip: "胃经当令，早餐宜温宜简，让一天从安稳的脾胃开始。", tone: "bamboo" },
  { branch: "巳时", range: "09:00-11:00", start: 9, end: 11, meridian: "脾经", quote: "脾者，仓廪之官。", tip: "脾经运化正盛，把最重要的工作放在此刻，少用冷饮打断它。", tone: "bamboo" },
  { branch: "午时", range: "11:00-13:00", start: 11, end: 13, meridian: "心经", quote: "心者，君主之官，神明出焉。", tip: "午时心经主令，吃得清淡些，给心神留一小段安静。", tone: "warm" },
  { branch: "未时", range: "13:00-15:00", start: 13, end: 15, meridian: "小肠经", quote: "小肠者，受盛之官。", tip: "午后小肠分清泌浊，散步十分钟，比困在屏幕里更醒神。", tone: "warm" },
  { branch: "申时", range: "15:00-17:00", start: 15, end: 17, meridian: "膀胱经", quote: "太阳为开。", tip: "申时膀胱经气行背部，起身伸展肩颈，让背后这条河流动起来。", tone: "blue" },
  { branch: "酉时", range: "17:00-19:00", start: 17, end: 19, meridian: "肾经", quote: "肾者，作强之官。", tip: "酉时肾经当令，少一点透支，多一点归家感，晚餐不必太重。", tone: "ink" },
  { branch: "戌时", range: "19:00-21:00", start: 19, end: 21, meridian: "心包经", quote: "膻中者，臣使之官。", tip: "心包护心，适合把今天的情绪慢慢放下，热水泡脚也可以。", tone: "ink" },
  { branch: "亥时", range: "21:00-23:00", start: 21, end: 23, meridian: "三焦经", quote: "三焦者，决渎之官。", tip: "亥时三焦通百脉，调暗灯光，别让信息洪流穿过你的夜。", tone: "ink" }
];

export function getCurrentMeridian(date = new Date()): MeridianHour {
  const hour = date.getHours();
  return meridianClock.find((item) => (item.start > item.end ? hour >= item.start || hour < item.end : hour >= item.start && hour < item.end)) ?? meridianClock[0];
}
