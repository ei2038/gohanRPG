import { Direction } from 'classes/Direction';
import { Timelines } from 'classes/Timelines';
import { enemy } from 'enemies';
import { mough } from 'friends';
import {
  fixKillBossByName,
  removeEventByXYs,
  removeObjectByName,
  setEventByXY,
  changeNpcDir,
  setNpc,
  removeNpcByName,
  removeBossByName,
  displayBubble,
  displayBossBubble,
  removeBubble,
  warpPlayerByXY,
  zoomDown,
  moveBattleBoss,
} from './events';
import { castleAnnounce } from './timelineWords0';
export const explanation4: Timelines = {
  start: [
    {
      type: 'dialog',
      text: 'ここはキーマボルケーノ。',
      actorName: '杜松の看板',
    },
    {
      type: 'dialog',
      text: '溶岩石で出来た自然の迷宮。',
      actorName: '杜松の看板',
    },
    { type: 'endTimeline' },
  ],
};
export const addMough: Timelines = {
  start: [
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Shiden', x: 33, y: 21, timeline: undefined },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Pouler', x: 31, y: 21, timeline: undefined },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Mough', x: 30, y: 23, timeline: undefined },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'player', direction: Direction.UP },
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'なぁ…なんか、着いてきてね？' },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Shiden', direction: Direction.LEFT },
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'シデン', text: 'なんか、ではない。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: '逆にこんな大男が着いてきていてなぜ今まで気付かなかった。',
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'player', direction: Direction.DOWN },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Shiden', direction: Direction.DOWN },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Pouler', direction: Direction.DOWN },
    },
    {
      type: 'event',
      event: removeBubble,
    },
    { type: 'dialog', actorName: 'シデン', text: 'なんの用だ、大男。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Mough', bubbleIndex: 1 },
    },
    { type: 'dialog', actorName: 'マウ', text: '…おで？' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 2 },
    },
    { type: 'dialog', actorName: 'シデン', text: '貴様以外に誰がいる。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Mough', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マウ', text: 'お前ら、食堂、行く。' },
    { type: 'event', event: removeBubble },
    { type: 'dialog', actorName: 'マルク', text: 'そうだな。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Mough', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マウ', text: '食堂、魔王、居る。' },
    { type: 'event', event: removeBubble },
    { type: 'dialog', actorName: 'パウラ', text: 'そうですね。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Mough', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'マウ', text: '魔王、強い。' },
    { type: 'event', event: removeBubble },
    { type: 'dialog', actorName: 'シデン', text: 'その通りだ。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Mough', bubbleIndex: 5 },
    },
    { type: 'dialog', actorName: 'マウ', text: 'マウも、強い。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 2 },
    },
    { type: 'dialog', actorName: 'シデン', text: 'それは知らん。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Mough', bubbleIndex: 5 },
    },
    { type: 'dialog', actorName: 'マウ', text: '腕試し、する。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マルク', text: '…それで着いてきてるのか。' },
    { type: 'dialog', actorName: 'マルク', text: 'まぁ、力強そうだし。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 5 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'いいんじゃない？' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 5 },
    },
    { type: 'dialog', actorName: 'シデン', text: 'いいな。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'パウラ', text: 'いいんですか！？' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Mough', bubbleIndex: 5 },
    },
    { type: 'dialog', actorName: 'マウ', text: 'マウ、強い、守る。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'パウラ', text: '確かに頼もしくはありますけど…。' },
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: removeBubble },
    { type: 'event', event: removeNpcByName, contents: { name: 'Shiden' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Pouler' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Mough' } },
    { type: 'event', event: removeObjectByName, contents: { name: 'add4' } },
    { type: 'dialog', text: 'ノリと勢いでマウが仲間になった！' },
    { type: 'meetFriend', actor: mough },
    { type: 'endTimeline' },
  ],
};
export const warpboss: Timelines = {
  start: [
    { type: 'dialog', text: 'この穴に入りますか？' },
    {
      type: 'choice',
      choices: [
        { text: 'はい', timelineID: 'Yes' },
        { text: 'いいえ', timelineID: 'No' },
      ],
    },
  ],
  Yes: [
    { type: 'event', event: warpPlayerByXY, contents: { x: 29, y: 52 } },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const backboss: Timelines = {
  start: [
    { type: 'dialog', text: 'この穴に入りますか？' },
    {
      type: 'choice',
      choices: [
        { text: 'はい', timelineID: 'Yes' },
        { text: 'いいえ', timelineID: 'No' },
      ],
    },
  ],
  Yes: [
    { type: 'event', event: warpPlayerByXY, contents: { x: 4, y: 29 } },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const goEleca: Timelines = {
  start: [
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: warpPlayerByXY, contents: { x: 29, y: 49 } },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Shiden', x: 28, y: 49, timeline: undefined },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Pouler', x: 30, y: 49, timeline: undefined },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Mough', x: 27, y: 49, timeline: undefined },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'player', direction: Direction.UP },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Shiden', direction: Direction.UP },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Pouler', direction: Direction.UP },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Mough', direction: Direction.UP },
    },
    { type: 'endTimeline' },
  ],
};
export const beforeElecaBattle: Timelines = {
  start: [
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 5 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'どうせここの四天王も、威勢だけなんだろうなぁ。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Mough', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'マウ', text: '待て。' },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Pouler', direction: Direction.LEFT },
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 1 },
    },
    { type: 'dialog', actorName: 'パウラ', text: 'どうしたんですか？マウさん。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Mough', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マウ', text: 'こいつ、強い…。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 5 } },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Pouler', direction: Direction.UP },
    },
    {
      type: 'dialog',
      actorName: 'エレカ',
      text: 'あら、なかなか見る目がある仲間を連れてるじゃない。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: 'なんだこいつ…今までのとは気迫が違う…。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 1 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: '…あれ？もしかしてピンと来てないの俺だけ？',
    },
    { type: 'event', event: removeBubble },
    {
      type: 'dialog',
      actorName: 'エレカ',
      text: 'あの3人と同じだと思ってかかると痛い目に合うわよ。',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    {
      type: 'dialog',
      actorName: 'エレカ',
      text: 'ま、ここに足を踏み入れた時点で命は無いと思うことね。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 5 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: '言ってくれるじゃねぇか、こっちは4人だぜ。',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    {
      type: 'dialog',
      actorName: 'エレカ',
      text: '何人いたって関係ないわ。',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 3 } },
    {
      type: 'dialog',
      actorName: 'エレカ',
      text: '全員まとめて叩き潰す。',
    },
    { type: 'event', event: removeBubble },
    {
      type: 'event',
      event: moveBattleBoss,
      contents: { battleActor: enemy.eleca },
    },
    { type: 'endTimeline' },
  ],
};
export const afterElecaBattle: Timelines = {
  start: [
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    { type: 'dialog', actorName: 'エレカ', text: 'うぐっ…おかあ…さま…。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'はぁ…はぁ…流石に歯応えあったな…。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    {
      type: 'dialog',
      actorName: 'エレカ',
      text: '…お母様は、私の比にならない強さよ、\nせいぜい…覚悟…しておきなさい…。',
    },
    { type: 'event', event: removeBubble },
    { type: 'event', event: removeBossByName, contents: { name: 'Eleca' } },
    { type: 'dialog', actorName: 'エレカ', text: 'バタッ。' },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Pouler', direction: Direction.LEFT },
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 1 },
    },
    { type: 'dialog', actorName: 'パウラ', text: '皆さん、お怪我は大丈夫ですか…？' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Mough', bubbleIndex: 5 },
    },
    { type: 'dialog', actorName: 'マウ', text: 'マウ、丈夫、マウ、平気。' },
    { type: 'event', event: removeBubble },
    { type: 'dialog', actorName: 'パウラ', text: '良かったです…。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: 'あいつの話によれば、OBCはこれの比にならない強さらしいな。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'ああ、折角ここまで来たんだ。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'もっと強くなって、魔王ぶっとばしてやろうぜ！',
    },
    {
      type: 'event',
      event: fixKillBossByName,
      contents: { name: 'Eleca' },
    },
    { type: 'event', event: removeBubble },
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: zoomDown },
    { type: 'event', event: removeNpcByName, contents: { name: 'Shiden' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Pouler' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Mough' } },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'beforeElece' },
    },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'afterEleca' },
    },
    {
      type: 'event',
      event: setEventByXY,
      contents: {
        name: 'startE',
        x: 55,
        y: 12,
        timeline: castleAnnounce,
        setEventMap: 'map0',
      },
    },
    {
      type: 'event',
      event: setEventByXY,
      contents: {
        name: 'startE',
        x: 55,
        y: 13,
        timeline: castleAnnounce,
        setEventMap: 'map0',
      },
    },
    {
      type: 'event',
      event: removeEventByXYs,
      contents: {
        xy: [
          { x: 28, y: 52 },
          { x: 29, y: 51 },
          { x: 30, y: 52 },
        ],
      },
    },
    { type: 'endTimeline' },
  ],
};
