import { shiden } from 'friends';
import { Timelines } from '../classes/Timelines';
import { Direction } from '../classes/Direction';
import { oceanDakahu } from './timelineWords0';

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
  warpPlayerByStar,
  changeEncountFlag,
  moveBattleBoss,
} from './events';
import { enemy } from 'enemies';
//Stage2
export const explanation2: Timelines = {
  start: [
    {
      type: 'dialog',
      text: 'ここはソースワデザート。',
      actorName: '杜松の看板',
    },
    {
      type: 'dialog',
      text: 'ここはかつて黄道の王がいた砂漠。',
      actorName: '杜松の看板',
    },
    { type: 'endTimeline' },
  ],
};
export const meetShiden: Timelines = {
  start: [
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Shiden', direction: Direction.UP },
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 1 },
    },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: 'このソースワデザートに人が来るとは珍しい…何用だ。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 5 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'おう、俺はマルク\n魔王を倒すために旅してんだ。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 1 },
    },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: 'そのために、砂漠の四天王を倒しに来たと…。',
    },
    { type: 'event', event: removeBubble },
    { type: 'dialog', actorName: 'マルク', text: 'そういうことだ。' },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: '…まさかとは思うが、魔法も使えないのに1人で行くつもりじゃないだろうな。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'よくそこまで分かったな。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: '杖も持ってないやつに魔法なんか使えるか。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'お前も杖持って無いじゃん！' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: '能ある鷹は杖を隠すんだよ。',
    },
    { type: 'event', event: removeBubble },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: 'ここ一体の魔物は、砂塵から身を守るための硬い体を持つものが多い。',
    },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: '物理攻撃だけで突破するのは、正直無謀と言える。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'なるほどな…そんで、お前魔法使えんの？',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 1 },
    },
    { type: 'dialog', actorName: 'シデン', text: '使えると言えば連れて行かれるのか。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 1 },
    },
    { type: 'dialog', actorName: 'マルク', text: '連れて行くって言ったらどうする？' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'シデン', text: '断る。' },
    { type: 'event', event: removeBubble },
    { type: 'dialog', actorName: 'マルク', text: 'じゃあ連れてかない。' },
    { type: 'dialog', actorName: 'シデン', text: 'じゃあ魔法使える。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 5 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'じゃあ連れてく。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 2 },
    },
    { type: 'dialog', actorName: 'シデン', text: 'じゃあ話が違う。' },
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: removeNpcByName, contents: { name: 'Shiden' } },
    { type: 'event', event: removeBubble },
    { type: 'dialog', text: 'シデンを半ば強引に連れて行くことにした！' },
    { type: 'meetFriend', actor: shiden },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'meet2' },
    },
    { type: 'endTimeline' },
  ],
};
export const addShiden: Timelines = {
  start: [
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Shiden', x: 3, y: 4, timeline: undefined },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Shiden', direction: Direction.UP },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'player', direction: Direction.DOWN },
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 5 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'そんじゃ、俺はこれで。\n世話になったな。',
    },
    { type: 'event', event: removeBubble },
    { type: 'dialog', actorName: 'シデン', text: '…なぁ、俺も連れて行ってくれないか。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'おぉ！助かるけど、何か理由でもあるのか？',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'シデン', text: '魔王にまつわる黒い噂は知っているな？' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'マルク', text: '知らん。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: '全く、倒そうとしているんじゃないのか…。',
    },
    { type: 'event', event: removeBubble },
    { type: 'dialog', actorName: 'シデン', text: 'まぁいい、教えてやるから覚えておけ。' },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: '魔王の侵略地域、黒い霧が広まっているのは知っているな？',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 1 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'そうなの？' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'シデン', text: '本当に何も知らないんだな…。' },
    { type: 'event', event: removeBubble },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: '魔王に占拠された食堂の周りから、少しずつ黒い霧が広まってるんだよ。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 1 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'へぇ〜、黒い霧に包まれるとどうなるんだ？',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 2 },
    },
    { type: 'dialog', actorName: 'シデン', text: 'そこが問題なんだよ！！' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'マルク', text: '急に熱くなるじゃん。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 2 },
    },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: 'そりゃ熱くもなるさ！なにせ、黒い霧に包まれた場所では…。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'ゴクリ…。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 2 },
    },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: '全ての料理の味付けが、超濃い目になってしまうんだよ！！！',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マルク', text: '…はぁ。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 2 },
    },
    { type: 'dialog', actorName: 'シデン', text: '俺はな、薄味が好みなんだよ！！' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'お、おぅ。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 2 },
    },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: 'このまま黒い霧が広まって、世界中を包み込み、\n薄味の食べ物が無くなるなんて論外だ！',
    },
    {
      type: 'dialog',
      actorName: 'シデン',
      text: 'その前に俺がこの手で、魔王を打ち倒す！',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 5 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: '…まぁ着いてきてくれるならなんでもいいや。',
    },
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: removeBubble },
    {
      type: 'event',
      event: setEventByXY,
      contents: {
        name: 'startC',
        x: 4,
        y: 22,
        timeline: oceanDakahu,
        setEventMap: 'map0',
      },
    },
    {
      type: 'event',
      event: setEventByXY,
      contents: {
        name: 'startC',
        x: 4,
        y: 23,
        timeline: oceanDakahu,
        setEventMap: 'map0',
      },
    },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'add2' },
    },
    { type: 'event', event: removeNpcByName, contents: { name: 'Shiden' } },
    { type: 'dialog', text: 'シデンが仲間になった！' },
    { type: 'endTimeline' },
  ],
};
export const Aries: Timelines = {
  start: [{ type: 'dialog', text: 'Aries' }, { type: 'endTimeline' }],
};
export const Taurus: Timelines = {
  start: [{ type: 'dialog', text: 'Taurus' }, { type: 'endTimeline' }],
};
export const Gemini: Timelines = {
  start: [{ type: 'dialog', text: 'Gemini' }, { type: 'endTimeline' }],
};
export const Cancer: Timelines = {
  start: [{ type: 'dialog', text: 'Cancer' }, { type: 'endTimeline' }],
};
export const Leo: Timelines = {
  start: [{ type: 'dialog', text: 'Leo' }, { type: 'endTimeline' }],
};
export const Virgo: Timelines = {
  start: [{ type: 'dialog', text: 'Virgo' }, { type: 'endTimeline' }],
};
export const Libra: Timelines = {
  start: [{ type: 'dialog', text: 'Libra' }, { type: 'endTimeline' }],
};
export const Scorpio: Timelines = {
  start: [{ type: 'dialog', text: 'Scorpio' }, { type: 'endTimeline' }],
};
export const Sagittarius: Timelines = {
  start: [{ type: 'dialog', text: 'Saittarius' }, { type: 'endTimeline' }],
};
export const Capricorn: Timelines = {
  start: [{ type: 'dialog', text: 'Capricorn' }, { type: 'endTimeline' }],
};
export const Aquarius: Timelines = {
  start: [{ type: 'dialog', text: 'Aquarius' }, { type: 'endTimeline' }],
};
export const Pisces: Timelines = {
  start: [{ type: 'dialog', text: 'Pisces' }, { type: 'endTimeline' }],
};
export const Ophiuchus: Timelines = {
  start: [{ type: 'dialog', text: 'Ophiuchus' }, { type: 'endTimeline' }],
};
export const AriesWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Aries', x: 27, y: 12 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const TaurusWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Taurus', x: 44, y: 3 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const GeminiWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Gemini', x: 16, y: 2 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const CancerWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Cancer', x: 29, y: 21 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const LeoWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Leo', x: 41, y: 7 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const VirgoWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Virgo', x: 56, y: 26 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const LibraWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Libra', x: 27, y: 3 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const ScorpioWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Scorpio', x: 27, y: 17 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const SagittariusWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Sagittarius', x: 56, y: 3 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const CapricornWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Capricorn', x: 38, y: 12 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const AquariusWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Aquarius', x: 35, y: 26 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const PiscesWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Pisces', x: 17, y: 26 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const reAriesWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Aries', x: 21, y: 2 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const reTaurusWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Taurus', x: 32, y: 12 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const reGeminiWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Gemini', x: 50, y: 12 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const reCancerWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Cancer', x: 11, y: 2 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const reLeoWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Leo', x: 23, y: 22 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const reVirgoWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Virgo', x: 56, y: 26 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const reLibraWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Libra', x: 56, y: 17 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const reScorpioWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Scorpio', x: 32, y: 3 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const reSagittariusWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Sagittarius', x: 27, y: 26 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const reCapricornWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Capricorn', x: 56, y: 12 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const reAquariusWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Aquarius', x: 44, y: 12 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const rePiscesWarp: Timelines = {
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
    {
      type: 'event',
      event: warpPlayerByStar,
      contents: { name: 'Pisces', x: 50, y: 22 },
    },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const OphiuchusWarp: Timelines = {
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
    { type: 'event', event: warpPlayerByXY, contents: { x: 7, y: 25 } },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const reOphiuchusWarp: Timelines = {
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
    { type: 'event', event: warpPlayerByXY, contents: { x: 7, y: 12 } },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const goBte: Timelines = {
  start: [
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: warpPlayerByXY, contents: { x: 8, y: 23 } },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Shiden', x: 6, y: 23, timeline: undefined },
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
    { type: 'endTimeline' },
  ],
};
export const beforeBteBattle: Timelines = {
  start: [
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    { type: 'dialog', actorName: 'ビーテ', text: '…先日は兄者が世話になったようだね。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 1 },
    },
    { type: 'dialog', actorName: 'マルク', text: '兄者って、草原にいたあいつか？' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'ビーテ',
      text: 'そうだ。\nそしてこの私こそ、軟弱な兄エーテよりずっとずっと強い、\n砂漠の四天王ビーテ様だ！',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'わー弱そう。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 2 } },
    { type: 'dialog', actorName: 'ビーテ', text: 'うるさい！' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'シデン', text: '頭も小さそうだな。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 2 } },
    { type: 'dialog', actorName: 'ビーテ', text: 'うるさいうるさい！' },
    {
      type: 'dialog',
      actorName: 'ビーテ',
      text: '貴様ら、黙って聞いておればビーテ様を侮辱しおって！',
    },
    { type: 'dialog', actorName: 'シデン', text: '黙ってはなかったぞ。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 2 } },
    { type: 'dialog', actorName: 'ビーテ', text: '揚げ足ばかり取るなまどろっこしい！！' },
    {
      type: 'dialog',
      actorName: 'ビーテ',
      text: 'どうやら、戦って分からせてやる必要がありそうだな…。',
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'player', direction: Direction.LEFT },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Shiden', direction: Direction.RIGHT },
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'うわー脳筋だ。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'シデン', text: '間違いないな。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 2 } },
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
      type: 'dialog',
      actorName: 'ビーテ',
      text: 'やかましい！！少しは勇者らしいセリフとか吐けんのか！！',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'ほら論点ずらした。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 2 } },
    {
      type: 'dialog',
      actorName: 'ビーテ',
      text: '言っとくけど現時点でお前らの方が印象悪いからな！',
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'player', direction: Direction.LEFT },
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'シデン', text: 'くどい。\n早くバトルしろ。' },
    { type: 'event', event: removeBubble },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'player', direction: Direction.UP },
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 2 } },
    {
      type: 'dialog',
      actorName: 'ビーテ',
      text: 'お前らのせいで伸びたんだろ！！おらぁ！！',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'マルク', text: '結局バトル突入セリフおらぁかよ。' },
    { type: 'event', event: removeBubble },
    {
      type: 'event',
      event: moveBattleBoss,
      contents: { battleActor: enemy.bte },
    },
    { type: 'endTimeline' },
  ],
};
export const afterBteBattle: Timelines = {
  start: [
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    { type: 'dialog', actorName: 'ビーテ', text: 'ぐあぁっ、クソっ、こんな所で…。' },
    { type: 'event', event: removeBubble },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'player', direction: Direction.LEFT },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Shiden', direction: Direction.RIGHT },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: '大口叩いてた割には、って感じだったな。',
    },
    { type: 'dialog', actorName: 'シデン', text: '同感だ。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
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
      type: 'dialog',
      actorName: 'ビーテ',
      text: 'これじゃ、あの兄者と一緒じゃないかぁ…。',
    },
    { type: 'dialog', actorName: 'ビーテ', text: 'ーテ兄弟の名に泥を塗ってしまった…。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'シデン', text: '名前の区切りビ・ーテだったんだな。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 1 },
    },
    { type: 'dialog', actorName: 'マルク', text: '…ーテってなんて読むのこれ。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 5 } },
    { type: 'dialog', actorName: 'ビーテ', text: 'ちょうおんぷて、だよ…。' },
    { type: 'event', event: removeBubble },
    { type: 'dialog', actorName: 'ビーテ', text: '俺の名はビチョウオンプテ、だ…。' },
    { type: 'event', event: removeBossByName, contents: { name: 'Bte' } },
    { type: 'dialog', actorName: 'ビーテ', text: 'バタッ。' },
    { type: 'event', event: displayBubble, contents: { name: 'player', bubbleIndex: 4 } },
    { type: 'dialog', actorName: 'マルク', text: '『ー』って、長音符って言うんだ…。' },
    { type: 'event', event: removeBubble },
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'dialog', actorName: 'OBC', text: 'チョウオンプテ兄弟はやられたか。' },
    { type: 'dialog', actorName: '四天王C', text: '全く、情けないですねぇ…。' },
    {
      type: 'dialog',
      actorName: '四天王C',
      text: '我々四天王の名を汚してもらっては困るのですよ。',
    },
    {
      type: 'dialog',
      actorName: '四天王C',
      text: '…という訳でOBC、次はワタクシが奴らを仕留めて参りましょう。',
    },
    { type: 'dialog', actorName: 'OBC', text: 'エレカ、異存はないな。' },
    { type: 'dialog', actorName: 'エレカ', text: 'お母様の御心のままに。' },
    { type: 'dialog', actorName: 'OBC', text: 'しくじるんじゃないよ、メルシン。' },
    { type: 'dialog', actorName: 'メルシン', text: 'ワタクシに、全てお任せあれ…。' },
    {
      type: 'event',
      event: fixKillBossByName,
      contents: { name: 'Bte' },
    },
    { type: 'event', event: removeNpcByName, contents: { name: 'Shiden' } },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'beforeBte' },
    },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'afterBte' },
    },
    {
      type: 'event',
      event: setEventByXY,
      contents: { name: 'add2', x: 3, y: 1, timeline: addShiden },
    },
    {
      type: 'event',
      event: setEventByXY,
      contents: {
        name: 'startB',
        x: 55,
        y: 22,
        timeline: oceanDakahu,
        setEventMap: 'map0',
      },
    },
    {
      type: 'event',
      event: setEventByXY,
      contents: {
        name: 'startB',
        x: 55,
        y: 23,
        timeline: oceanDakahu,
        setEventMap: 'map0',
      },
    },
    {
      type: 'event',
      event: removeEventByXYs,
      contents: {
        xy: [
          { x: 7, y: 24 },
          { x: 6, y: 25 },
          { x: 8, y: 25 },
          { x: 7, y: 26 },
        ],
      },
    },
    { type: 'event', event: changeEncountFlag },
    { type: 'endTimeline' },
  ],
};
