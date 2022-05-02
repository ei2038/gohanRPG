import { Direction } from '../classes/Direction';
import { Timelines } from '../classes/Timelines';
import { desertDakahu } from './timelineWords0';
import {
  fixKillBossByName,
  removeEventByXYs,
  removeObjectByName,
  setEventByXY,
  changeNpcDir,
  removeBossByName,
  displayBubble,
  displayBossBubble,
  removeBubble,
  warpPlayerByXY,
  moveBattleBoss,
} from './events';
import { enemy } from 'enemies';

//Stage1
export const explanation1: Timelines = {
  start: [
    {
      type: 'dialog',
      text: 'ここはサバレーフィールド。',
      actorName: '杜松の看板',
    },
    {
      type: 'dialog',
      text: 'ある時期のこの森では、\nケンタウルス座とみなみじゅうじ座がとても見やすいです。',
      actorName: '杜松の看板',
    },
    { type: 'endTimeline' },
  ],
};
export const hint1: Timelines = {
  start: [
    { type: 'dialog', text: '古びた看板がある。' },
    { type: 'dialog', text: 'かすれた文字で何か書いてある！' },
    {
      type: 'dialog',
      text: 'ガイアミアイガミガアミイ',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 1 },
    },
    { type: 'dialog', text: '？？？', actorName: 'マルク' },
    { type: 'event', event: removeBubble },
    { type: 'endTimeline' },
  ],
};
export const stone1: Timelines = {
  start: [
    { type: 'dialog', text: 'かすれた文字で何か書いてある！' },
    { type: 'dialog', text: 'この石碑はガクルックスを祀りしもの' },
    { type: 'dialog', text: '森の...から...上に...' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 1 },
    },
    { type: 'dialog', text: '額 looks？\n', actorName: 'マルク' },
    { type: 'event', event: removeBubble },
    { type: 'endTimeline' },
  ],
};
export const stone2: Timelines = {
  start: [
    { type: 'dialog', text: 'かすれた文字で何か書いてある！' },
    { type: 'dialog', text: 'この石碑はアクルックスを祀りしもの' },
    { type: 'dialog', text: 'ギナンに...近い...進んだ...' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 1 },
    },
    { type: 'dialog', text: '明くる楠？', actorName: 'マルク' },
    { type: 'event', event: removeBubble },
    { type: 'endTimeline' },
  ],
};
export const stone3: Timelines = {
  start: [
    { type: 'dialog', text: 'かすれた文字で何か書いてある！' },
    { type: 'dialog', text: 'この石碑はミモザを祀りしもの' },
    { type: 'dialog', text: '最も...真っすぐ...地に...' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 1 },
    },
    { type: 'dialog', text: 'どんな星座だよ。', actorName: 'マルク' },
    { type: 'event', event: removeBubble },
    { type: 'endTimeline' },
  ],
};
export const stone4: Timelines = {
  start: [
    { type: 'dialog', text: 'かすれた文字で何か書いてある！' },
    { type: 'dialog', text: 'この石碑はイマイを祀りしもの' },
    { type: 'dialog', text: '主は...丸...眠る...' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 1 },
    },
    { type: 'dialog', text: '誰だよ今井って？', actorName: 'マルク' },
    { type: 'event', event: removeBubble },
    { type: 'endTimeline' },
  ],
};
export const warpA: Timelines = {
  start: [
    { type: 'event', event: warpPlayerByXY, contents: { x: 13, y: 9 } },
    { type: 'endTimeline' },
  ],
};
export const backA: Timelines = {
  start: [
    { type: 'event', event: warpPlayerByXY, contents: { x: 29, y: 12 } },
    { type: 'endTimeline' },
  ],
};
export const goAte: Timelines = {
  start: [
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: warpPlayerByXY, contents: { x: 13, y: 7 } },
    { type: 'endTimeline' },
  ],
};
export const beforeAteBattle: Timelines = {
  start: [
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'player', direction: Direction.UP },
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 2 },
    },

    { type: 'dialog', actorName: 'マルク', text: 'おい！食堂への鍵を寄越せ！' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    {
      type: 'dialog',
      actorName: 'エーテ',
      text: 'ふん、初対面で随分偉そうな口を聞くじゃないか…。',
    },
    {
      type: 'event',
      event: removeBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'エーテ',
      text: 'この私が、魔王直属の四天王の一人、エーテ様と知っての言葉ではあるまいな！',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 1 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'うん、知らんかった。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    { type: 'dialog', actorName: 'エーテ', text: 'あ、そう。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マルク', text: '……。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    { type: 'dialog', actorName: 'エーテ', text: '……。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'なんか、ごめん。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    { type: 'dialog', actorName: 'エーテ', text: 'いいよ、俺もちょっと調子乗ってたし。' },
    { type: 'dialog', actorName: 'エーテ', text: '…雰囲気戻していい？' },
    { type: 'event', event: removeBubble, contents: { name: removeBubble } },
    { type: 'dialog', actorName: 'マルク', text: 'お願いします。' },
    {
      type: 'dialog',
      actorName: 'エーテ',
      text: '母なる魔王の元へ行きたくば、この私を倒していくがいい！',
    },
    {
      type: 'dialog',
      actorName: 'エーテ',
      text: '魔王を倒そうなどという愚かな試み、この場でへし折ってくれるわ！',
    },
    {
      type: 'event',
      event: moveBattleBoss,
      contents: { battleActor: enemy.ate },
    },
    { type: 'endTimeline' },
  ],
};
export const afterAteBattle: Timelines = {
  start: [
    { type: 'dialog', actorName: 'エーテ', text: 'ぐっ…こんな、所で…。' },
    {
      type: 'dialog',
      actorName: 'エーテ',
      text: '俺は、四天王なんだ…こんな所で、倒れる訳にはいかないんだ…！',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    { type: 'dialog', actorName: 'エーテ', text: '俺を生み出しし母、OBCの為に…！' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 1 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'OBC？なんだそれ？' },
    { type: 'event', event: removeBubble },
    {
      type: 'dialog',
      actorName: 'エーテ',
      text: 'ふん、覚えておくといい…いずれ貴様を滅ぼす、偉大なる魔王の名だ…。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    { type: 'event', event: removeBossByName, contents: { name: 'Ate' } },
    { type: 'dialog', actorName: 'エーテ', text: 'バタッ。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: '…死に際に色々吐いてくれる系四天王だったな…。',
    },
    { type: 'event', event: removeBubble },
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'dialog', actorName: 'OBC', text: 'エーテはもう倒れたか…。' },
    { type: 'dialog', actorName: '四天王C', text: 'ふん、奴は四天王の中でも最弱…。' },
    { type: 'dialog', actorName: '四天王B', text: 'OBC、次は私にまかせてください。' },
    { type: 'dialog', actorName: '四天王B', text: '兄の責任は私の責任でもあります。' },
    { type: 'dialog', actorName: 'OBC', text: '良かろうビーテ、次は貴様に任せる。' },
    { type: 'dialog', actorName: 'ビーテ', text: '必ずや、止めてみせます故…。' },
    {
      type: 'event',
      event: fixKillBossByName,
      contents: { name: 'Ate' },
    },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'beforeAte' },
    },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'afterAte' },
    },
    {
      type: 'event',
      event: setEventByXY,
      contents: {
        name: 'startB',
        x: 4,
        y: 22,
        timeline: desertDakahu,
        setEventMap: 'map0',
      },
    },
    {
      type: 'event',
      event: setEventByXY,
      contents: {
        name: 'startB',
        x: 4,
        y: 23,
        timeline: desertDakahu,
        setEventMap: 'map0',
      },
    },
    {
      type: 'event',
      event: removeEventByXYs,
      contents: {
        xy: [
          { x: 9, y: 8 },
          { x: 10, y: 8 },
          { x: 11, y: 8 },
          { x: 12, y: 8 },
          { x: 13, y: 8 },
          { x: 14, y: 8 },
          { x: 15, y: 8 },
          { x: 16, y: 8 },
          { x: 17, y: 8 },
        ],
      },
    },
    { type: 'endTimeline' },
  ],
};
