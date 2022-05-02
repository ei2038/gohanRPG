import { Timelines } from '../classes/Timelines';
import { Direction } from '../classes/Direction';
import {
  removeEventByXYs,
  removeObjectByName,
  changeNpcDir,
  setNpc,
  removeNpcByName,
  removeBossByName,
  displayBubble,
  displayBossBubble,
  removeBubble,
  warpPlayerByXY,
  createBoss,
  fixKillBossByName,
  talkNPC,
  moveBattleBoss,
} from './events';
import { enemy } from 'enemies';
export const explanation5: Timelines = {
  start: [
    {
      type: 'dialog',
      text: 'ここは食堂。',
      actorName: '杜松の看板',
    },
    {
      type: 'dialog',
      text: 'マスクと消毒を忘れずに。',
      actorName: '杜松の看板',
    },
    { type: 'endTimeline' },
  ],
};
export const finalDakahu: Timelines = {
  start: [
    { type: 'event', event: talkNPC },
    { type: 'dialog', actorName: 'ダカフ', text: '久しぶりじゃのう、若者よ！' },
    { type: 'dialog', actorName: 'ダカフ', text: '残すはこの食堂のみじゃ！' },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: 'ここのザコたちはワシが全滅させておいた。',
    },
    { type: 'dialog', actorName: 'ダカフ', text: 'じゃからさっさと魔王を倒してこい！' },
    { type: 'endTimeline' },
  ],
};
export const warpAte: Timelines = {
  start: [
    { type: 'event', event: warpPlayerByXY, contents: { x: 9, y: 42 } },
    { type: 'endTimeline' },
  ],
};
export const backAte: Timelines = {
  start: [
    { type: 'event', event: warpPlayerByXY, contents: { x: 27, y: 31 } },
    { type: 'endTimeline' },
  ],
};
export const goReAte: Timelines = {
  start: [
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: warpPlayerByXY, contents: { x: 9, y: 40 } },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Shiden', x: 8, y: 40, timeline: undefined },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Pouler', x: 10, y: 40, timeline: undefined },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Mough', x: 7, y: 40, timeline: undefined },
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
export const startAte: Timelines = {
  start: [
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'エーテ', text: '久しぶりだな！' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'お前は、森にいた奴！',
    },
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'エーテ',
      text: '奴とは、失礼な人間だな…。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 1 },
    },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: 'マルク、\n誰だ、このビーテの劣化版みたいな奴は。',
    },
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 2 },
    },
    {
      type: 'dialog',
      actorName: 'エーテ',
      text: '黙れ！',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'シデン', text: 'キレ方も似てるな。' },
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'エーテ',
      text: 'まあ良い。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'パウラ', text: '良いんだ…。' },
    { type: 'event', event: displayBubble, contents: { name: 'player', bubbleIndex: 3 } },
    { type: 'dialog', actorName: 'マルク', text: 'というか、何でここに。' },
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 5 },
    },
    { type: 'dialog', actorName: 'エーテ', text: 'OBCのお力によって蘇ったのだよ。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    {
      type: 'dialog',
      actorName: 'エーテ',
      text: 'さあ、母なる魔王の元へ行きたくば、再びこの私を倒していくがいい！',
    },
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'エーテ',
      text: 'その愚かな試み、このエーテが何度でもへし折ってくれるわ！',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'マルク', text: '……。' },
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'エーテ', text: '……。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 1 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'あれ、始めないの？' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    { type: 'dialog', actorName: 'エーテ', text: 'あの、掛け声を、お願いします。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'あ、ごめん。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マルク', text: '……。' },
    { type: 'event', event: displayBubble, contents: { name: 'player', bubbleIndex: 3 } },
    { type: 'dialog', actorName: 'エーテ', text: '行くぞ！！' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'パウラ', text: 'グダグダですね…。' },
    {
      type: 'event',
      event: removeBubble,
    },
    {
      type: 'event',
      event: moveBattleBoss,
      contents: { battleActor: enemy.ate },
    },
    { type: 'endTimeline' },
  ],
};
export const endAte: Timelines = {
  start: [
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'エーテ', text: 'ぐはっ…だめだったか。' },
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'エーテ', text: 'OBCよ、申し訳ありません…。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'お前がいたってことは、もしかして他の奴らも…。',
    },
    { type: 'event', event: removeBubble },
    {
      type: 'dialog',
      actorName: 'エーテ',
      text: 'ふ、その通りさ。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'エーテ',
      text: 'お前たちの進行は、我々四天王が必ず止めて見せる。',
    },
    { type: 'event', event: removeBubble },
    { type: 'event', event: removeBossByName, contents: { name: 'Ate' } },
    { type: 'dialog', actorName: 'エーテ', text: 'バタッ。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: 'また奴らと闘わなければならないとは…。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: 'めんどくさいな…。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Mough', bubbleIndex: 5 },
    },
    {
      type: 'dialog',
      actorName: 'マウ',
      text: '強いやつといっぱい戦える！',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'パウラ',
      text: '…とにかく、気を引き締めて頑張りましょう！',
    },
    { type: 'event', event: removeBubble },
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: createBoss, contents: { x: 8, y: 5, name: 'Bte' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Shiden' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Pouler' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Mough' } },
    {
      type: 'event',
      event: fixKillBossByName,
      contents: { name: 'reAte' },
    },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'startAte' },
    },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'endAte' },
    },
    {
      type: 'event',
      event: removeEventByXYs,
      contents: {
        xy: [
          { x: 8, y: 41 },
          { x: 9, y: 41 },
        ],
      },
    },
    { type: 'endTimeline' },
  ],
};
export const warpBte: Timelines = {
  start: [
    { type: 'event', event: warpPlayerByXY, contents: { x: 9, y: 12 } },
    { type: 'endTimeline' },
  ],
};
export const backBte: Timelines = {
  start: [
    { type: 'event', event: warpPlayerByXY, contents: { x: 9, y: 31 } },
    { type: 'endTimeline' },
  ],
};
export const goReBte: Timelines = {
  start: [
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: warpPlayerByXY, contents: { x: 9, y: 10 } },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Shiden', x: 8, y: 10, timeline: undefined },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Pouler', x: 10, y: 10, timeline: undefined },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Mough', x: 7, y: 10, timeline: undefined },
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
    {
      type: 'event',
      event: moveBattleBoss,
      contents: { battleActor: enemy.bte },
    },
    { type: 'endTimeline' },
  ],
};
export const startBte: Timelines = {
  start: [
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    { type: 'dialog', actorName: 'ビーテ', text: '…兄者は倒されたか。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'シデン', text: 'やはり次はお前か。' },
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'ビーテ',
      text: '改めて名乗ろう',
    },
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'ビーテ',
      text: 'この私こそ、軟弱な兄エーテよりずっとずっと強い、\n四天王のビーテ様だ！',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'わー相変わらず言い方が弱そう。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 2 } },
    { type: 'dialog', actorName: 'ビーテ', text: 'うるさい！' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'シデン', text: '敗北から何も学んでいないようだな。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 2 } },
    { type: 'dialog', actorName: 'ビーテ', text: 'うるさいうるさい！' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Mough', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マウ', text: '弱そう、残念。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 2 } },
    { type: 'dialog', actorName: 'ビーテ', text: 'うるさいうるさいうるさい！' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'パウラ', text: '皆さん、流石に言い過ぎでは…。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 2 } },
    { type: 'dialog', actorName: 'ビーテ', text: 'うるさ…くない。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    { type: 'dialog', actorName: 'ビーテ', text: 'ありがとう。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 3 } },
    {
      type: 'dialog',
      actorName: 'ビーテ',
      text: 'それより貴様ら、黙って聞いていれば。',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 2 } },
    {
      type: 'dialog',
      actorName: 'ビーテ',
      text: '何度も何度もこのビーテ様を侮辱しおって！',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'パウラ',
      text: '（黙って聞いてはいなかった気がしますけど…。）',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'シデン', text: '毎度毎度騒がしいモブだな。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 2 } },
    { type: 'dialog', actorName: 'ビーテ', text: 'う・る・さ・い！' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    {
      type: 'dialog',
      actorName: 'ビーテ',
      text: 'もう許さない。',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 2 } },
    {
      type: 'dialog',
      actorName: 'ビーテ',
      text: '徹底的にぶっ潰してくれる。',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 3 } },
    {
      type: 'dialog',
      actorName: 'ビーテ',
      text: 'どぅおるあぁぁぁ！！！',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'バトル突入セリフだけは進化してるんだな。',
    },
    { type: 'event', event: removeBubble },
    {
      type: 'event',
      event: moveBattleBoss,
      contents: { battleActor: enemy.bte },
    },
    { type: 'endTimeline' },
  ],
};
export const endBte: Timelines = {
  start: [
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 3 } },
    { type: 'dialog', actorName: 'ビーテ', text: 'ぐあぁっ、クソっ、またか…。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    {
      type: 'dialog',
      actorName: 'ビーテ',
      text: '結局あの兄者と同じ末路を辿るのか…。',
    },
    { type: 'event', event: removeBubble },
    { type: 'event', event: removeBossByName, contents: { name: 'Bte' } },
    { type: 'dialog', actorName: 'ビーテ', text: 'バタッ。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'あばよ、ビチョウオンプテ。' },
    { type: 'event', event: displayBubble, contents: { name: 'Pouler', bubbleIndex: 1 } },
    { type: 'dialog', actorName: 'パウラ', text: 'ビチョウオンプテ……？' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'パウラ', text: 'あれってそんな読み方したんですね…。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Mough', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'マウ', text: 'ながくて分かりずらい。' },
    { type: 'event', event: removeBubble },
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: createBoss, contents: { x: 50, y: 5, name: 'Melcine' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Shiden' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Pouler' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Mough' } },
    {
      type: 'event',
      event: fixKillBossByName,
      contents: { name: 'reBte' },
    },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'startBte' },
    },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'endBte' },
    },
    {
      type: 'event',
      event: removeEventByXYs,
      contents: {
        xy: [
          { x: 8, y: 11 },
          { x: 9, y: 11 },
        ],
      },
    },
    { type: 'endTimeline' },
  ],
};
export const warpMelcine: Timelines = {
  start: [
    { type: 'event', event: warpPlayerByXY, contents: { x: 51, y: 12 } },
    { type: 'endTimeline' },
  ],
};
export const backMelcine: Timelines = {
  start: [
    { type: 'event', event: warpPlayerByXY, contents: { x: 9, y: 1 } },
    { type: 'endTimeline' },
  ],
};
export const goReMelcine: Timelines = {
  start: [
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: warpPlayerByXY, contents: { x: 51, y: 10 } },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Shiden', x: 50, y: 10, timeline: undefined },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Pouler', x: 52, y: 10, timeline: undefined },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Mough', x: 49, y: 10, timeline: undefined },
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
export const startMelcine: Timelines = {
  start: [
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 3 } },
    {
      type: 'dialog',
      actorName: 'メルシン',
      text: 'よくぞ再びおいでくださいました！\nこの四天王一高貴な男、メルシンのもとへ！！',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マルク', text: '…やっぱりこいつ嫌いだわぁ。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    { type: 'dialog', actorName: 'メルシン', text: 'それよりも貴様ら…。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 2 } },
    {
      type: 'dialog',
      actorName: 'メルシン',
      text: 'あの時は、よくも私を無視して進もうとしてくれましたねぇ。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'パウラ', text: 'あっ。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 2 } },
    {
      type: 'dialog',
      actorName: 'メルシン',
      text: 'あの時の恨み、今ここで晴らさせていただきますよ。',
    },
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'メルシン',
      text: 'このワタクシの全力でねぇ！！',
    },
    { type: 'event', event: removeBubble },
    {
      type: 'event',
      event: moveBattleBoss,
      contents: { battleActor: enemy.melcine },
    },
    { type: 'endTimeline' },
  ],
};
export const endMelcine: Timelines = {
  start: [
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 3 } },
    {
      type: 'dialog',
      actorName: 'メルシン',
      text: 'ばかな…この私がまたしても敗北するなど…。',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 2 } },
    {
      type: 'dialog',
      actorName: 'メルシン',
      text: '何故だ、何故なのだぁ！！！',
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'player', direction: Direction.LEFT },
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 5 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'さ、無視して行こうぜ。',
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Shiden', direction: Direction.RIGHT },
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'シデン', text: 'だな、まだ次がある。' },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Pouler', direction: Direction.LEFT },
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'パウラ', text: '行きましょう。' },
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'メルシン', text: '……。' },
    { type: 'event', event: displayBubble, contents: { name: 'Mough', bubbleIndex: 4 } },
    { type: 'dialog', actorName: 'マウ', text: '……。' },
    { type: 'event', event: displayBubble, contents: { name: 'Mough', bubbleIndex: 3 } },
    { type: 'dialog', actorName: 'マウ', text: 'お前。' },
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 1 },
    },
    { type: 'dialog', actorName: 'メルシン', text: '……？' },
    { type: 'event', event: displayBubble, contents: { name: 'Mough', bubbleIndex: 5 } },
    { type: 'dialog', actorName: 'マウ', text: 'そこそこ強かったぞ！' },
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'メルシン', text: '……！' },
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 5 },
    },
    { type: 'dialog', actorName: 'メルシン', text: 'ありがとう！' },
    { type: 'event', event: removeBubble },
    { type: 'event', event: removeBossByName, contents: { name: 'Melcine' } },
    { type: 'dialog', actorName: 'メルシン', text: 'バタッ。' },
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: createBoss, contents: { x: 30, y: 4, name: 'Eleca' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Shiden' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Pouler' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Mough' } },
    {
      type: 'event',
      event: fixKillBossByName,
      contents: { name: 'reMelcine' },
    },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'startMelcine' },
    },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'endMelcine' },
    },
    {
      type: 'event',
      event: removeEventByXYs,
      contents: {
        xy: [
          { x: 50, y: 11 },
          { x: 51, y: 11 },
        ],
      },
    },
    { type: 'endTimeline' },
  ],
};
export const warpEleca: Timelines = {
  start: [
    { type: 'event', event: warpPlayerByXY, contents: { x: 31, y: 12 } },
    { type: 'endTimeline' },
  ],
};
export const backEleca: Timelines = {
  start: [
    { type: 'event', event: warpPlayerByXY, contents: { x: 51, y: 1 } },
    { type: 'endTimeline' },
  ],
};
export const goReEleca: Timelines = {
  start: [
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: warpPlayerByXY, contents: { x: 31, y: 10 } },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Shiden', x: 30, y: 10, timeline: undefined },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Pouler', x: 32, y: 10, timeline: undefined },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Mough', x: 29, y: 10, timeline: undefined },
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
export const startEleca: Timelines = {
  start: [
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'エレカ',
      text: 'ここまできましたか。\nやはりあの男たちは軟弱だったわね。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'せっかくここまで来たんだ。\n倒させてもらうぞ！',
    },
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 5 },
    },
    {
      type: 'dialog',
      actorName: 'エレカ',
      text: 'あなたたちの強さは認めるわ。',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 3 } },
    {
      type: 'dialog',
      actorName: 'エレカ',
      text: 'しかし、この先はお母様のお部屋。',
    },
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'エレカ',
      text: '何人たりとも通すわけにはいかない。',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 3 } },
    {
      type: 'dialog',
      actorName: 'エレカ',
      text: '本気で相手してあげるわ、覚悟しなさい。',
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
export const endEleca: Timelines = {
  start: [
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    { type: 'dialog', actorName: 'エレカ', text: '申し訳ありません、おかあ…さま…。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: '悪いが、俺たちにはやらなきゃならない事があるんでな！',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    {
      type: 'dialog',
      actorName: 'エレカ',
      text: '…お母様に叩き潰されるその時を、楽しみに待っているわ。',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 5 } },
    {
      type: 'dialog',
      actorName: 'エレカ',
      text: 'あの世でね。',
    },
    { type: 'event', event: removeBubble },
    { type: 'event', event: removeBossByName, contents: { name: 'Eleca' } },
    { type: 'dialog', actorName: 'エレカ', text: 'バタッ。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: '行こう、最後の戦いへ。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: 'あぁ。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'パウラ', text: '…はい。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Mough', bubbleIndex: 5 },
    },
    { type: 'dialog', actorName: 'マウ', text: 'ウオオオオオオ！' },
    { type: 'event', event: removeBubble },
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: createBoss, contents: { x: 48, y: 35, name: 'Obc' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Shiden' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Pouler' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Mough' } },
    {
      type: 'event',
      event: fixKillBossByName,
      contents: { name: 'reEleca' },
    },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'startEleca' },
    },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'endEleca' },
    },
    {
      type: 'event',
      event: removeEventByXYs,
      contents: {
        xy: [
          { x: 30, y: 11 },
          { x: 31, y: 11 },
        ],
      },
    },
    { type: 'endTimeline' },
  ],
};
export const warpObc: Timelines = {
  start: [
    { type: 'event', event: warpPlayerByXY, contents: { x: 48, y: 43 } },
    { type: 'endTimeline' },
  ],
};
export const backObc: Timelines = {
  start: [
    { type: 'event', event: warpPlayerByXY, contents: { x: 31, y: 1 } },
    { type: 'endTimeline' },
  ],
};
export const goObc: Timelines = {
  start: [
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: warpPlayerByXY, contents: { x: 48, y: 41 } },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Shiden', x: 47, y: 41, timeline: undefined },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Pouler', x: 49, y: 41, timeline: undefined },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Mough', x: 46, y: 41, timeline: undefined },
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
export const beforeObcBattle: Timelines = {
  start: [
    {
      type: 'event',
      event: displayBossBubble,
      contents: { bubbleIndex: 4, flag: true },
    },
    { type: 'dialog', actorName: 'OBC', text: 'おや…まさか本当に来るとはね。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'シデン', text: 'おい、貴様がOBCだな。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4, flag: true } },
    {
      type: 'dialog',
      actorName: 'OBC',
      text: 'いかにも。',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 5, flag: true } },
    {
      type: 'dialog',
      actorName: 'OBC',
      text: '私はOBC、すなわち食堂の"おばちゃん"だよ…。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'パウラ',
      text: 'そんな…食堂の乗っ取り騒ぎも何もかも、自作自演だったって言うんですか！？',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 5, flag: true } },
    {
      type: 'dialog',
      actorName: 'OBC',
      text: 'その通りだよ…。\n適当な所で切り上げて全部元通りにしてしまえば、食堂の復活を祝う客が沢山訪れる。',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4, flag: true } },
    {
      type: 'dialog',
      actorName: 'OBC',
      text: 'お前たちが来なければ、いずれ霧も晴らしてやったというのに…。',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 3, flag: true } },
    {
      type: 'dialog',
      actorName: 'OBC',
      text: '正体を知られたからには仕方がない、ここで死んでもらおうか。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Mough', bubbleIndex: 5 },
    },
    { type: 'dialog', actorName: 'マウ', text: '腕試し、できる、ウオオ！' },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Pouler', direction: Direction.LEFT },
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'パウラ', text: 'マウさん、話聞いてますか…。' },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Pouler', direction: Direction.UP },
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 1 },
    },
    {
      type: 'dialog',
      actorName: 'パウラ',
      text: '…というか、霧によって味付けを濃くしたのも、あなたの仕業なんですか。',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 5, flag: true } },
    { type: 'dialog', actorName: 'OBC', text: 'そうだよ、それも私さ。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'パウラ',
      text: 'どうして…どうしてそんなことをするんですか！',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'パウラ',
      text: 'そんなことしたら、健康寿命が縮んでしまうじゃないですか！',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 1, flag: true } },
    {
      type: 'dialog',
      actorName: 'OBC',
      text: 'その方がおいしいし、パワーが出るだろう？',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'シデン', text: 'ふざけるな…。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 2 },
    },
    { type: 'dialog', actorName: 'シデン', text: 'ふざけるなぁ！！' },
    { type: 'dialog', actorName: 'シデン', text: '俺はな、薄味が好みなんだぁぁ！！' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 5, flag: true } },
    { type: 'dialog', actorName: 'OBC', text: 'ならば、濃い味に慣れさせるまでよ！！' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4, flag: true } },
    {
      type: 'dialog',
      actorName: 'OBC',
      text: 'ここまできたら後にも引けないからね。',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 3, flag: true } },
    {
      type: 'dialog',
      actorName: 'OBC',
      text: 'この世界まるごと、私の味で染め上げてくれる！！',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 2 },
    },
    { type: 'dialog', actorName: 'シデン', text: 'そんなこと、させてたまるかぁぁ！！' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マルク', text: '…俺のセリフは？' },
    { type: 'event', event: removeBubble },
    {
      type: 'event',
      event: moveBattleBoss,
      contents: { battleActor: enemy.obc },
    },
    { type: 'endTimeline' },
  ],
};
export const afterObcBattle: Timelines = {
  start: [
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 3, flag: true } },
    { type: 'dialog', actorName: 'OBC', text: '…ふん、まさか、本当に倒されるとはね…。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4, flag: true } },
    { type: 'dialog', actorName: 'OBC', text: '私も本当に、ここまでのようだ…。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'おい、お前。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 1, flag: true } },
    {
      type: 'dialog',
      actorName: 'OBC',
      text: 'なんだい…？\n私はもうすぐ力尽きる、文句があるなら今いいな…。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マルク', text: '大盛りご飯…。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 1, flag: true } },
    { type: 'dialog', actorName: 'OBC', text: '…は？' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 1 },
    },
    { type: 'dialog', actorName: 'マルク', text: '魔王倒したら大盛りご飯無料なんだろ？' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'マルク', text: '早く出せよ。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4, flag: true } },
    { type: 'dialog', actorName: 'OBC', text: 'ふん、バカだねぇ…。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 5, flag: true } },
    {
      type: 'dialog',
      actorName: 'OBC',
      text: 'そんな広告、自作自演に決まってるじゃないか…。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'はぁ！？じゃあ、食べれねぇってことかよ！？',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4, flag: true } },
    {
      type: 'dialog',
      actorName: 'OBC',
      text: 'まさかとは思うが、そのために来たのかい…？',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 5, flag: true } },
    { type: 'dialog', actorName: 'OBC', text: '…ふふふ…ハハハハハハ！！' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 2 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'おい！何笑ってんだよ！' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4, flag: true } },
    {
      type: 'dialog',
      actorName: 'OBC',
      text: 'まさか、私がこんな理由で倒されるなんてね…。',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 5, flag: true } },
    {
      type: 'dialog',
      actorName: 'OBC',
      text: '死ぬ前に、とんだ大馬鹿見せてもらって、私は満足だよ…。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'おい！もう死ぬみたいないこと言うんじゃねぇ！！',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'まだ…まだ死ぬなよぉ…。' },
    { type: 'event', event: removeBubble },
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: 'reset', contents: { name: 'Shiden' } },
    { type: 'event', event: 'reset', contents: { name: 'Pouler' } },
    { type: 'event', event: 'reset', contents: { name: 'Mough' } },
    {
      type: 'event',
      event: removeEventByXYs,
      contents: {
        xy: [
          { x: 47, y: 42 },
          { x: 48, y: 42 },
        ],
      },
    },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'startObc' },
    },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'afterObc' },
    },
    {
      type: 'event',
      event: removeBossByName,
      contents: { name: 'Obc' },
    },
    { type: 'dialog', actorName: 'マルク', text: '腹…減ってんだよ…。' },
    { type: 'dialog', text: '…………。' },
    { type: 'dialog', actorName: '？？？', text: '…きなさい！起きなさい！' },
    { type: 'dialog', actorName: '？？？', text: '起きなさい！ショウム！' },
    { type: 'dialog', actorName: 'ショウム', text: '…うーん？' },
    {
      type: 'dialog',
      actorName: '？？？',
      text: 'もう！38にもなって1人で起きれないなんて！\n情けなくないの！',
    },
    { type: 'dialog', actorName: 'ショウム', text: 'えぇ〜ママちゃまっち〜。' },
    { type: 'dialog', actorName: 'ショウム', text: 'まだ起きたくないでござるよ〜。' },
    {
      type: 'dialog',
      actorName: 'ママちゃまっち',
      text: '定職にも就いてないんだから！\n生活リズムくらい整えなさい！',
    },
    {
      type: 'dialog',
      actorName: 'ショウム',
      text: 'も〜、ママちゃまっちがそこまで言うならしょうがないでござるな〜。',
    },
    {
      type: 'dialog',
      actorName: 'ショウム',
      text: 'さて、新聞でも呼んで、3チャンでヤトウ叩きでもするでござるか〜。',
    },
    { type: 'dialog', text: 'これは、定職に就かぬ男が、定食を求め旅する物語…' },
    { type: 'dialog', text: '〜 GohanRPG Fin 〜' },
    { type: 'sceneTransition', key: 'title' },
    { type: 'endTimeline' },
  ],
};
