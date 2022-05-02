import { pouler } from 'friends';
import { Timelines } from '../classes/Timelines';
import { Direction } from '../classes/Direction';
import { volcanoDakahu } from './timelineWords0';
import {
  fixKillBossByName,
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
  moveBattleBoss,
} from './events';
import { enemy } from 'enemies';
export const explanation3: Timelines = {
  start: [
    {
      type: 'dialog',
      text: 'ここはムギムギオーシャン。',
      actorName: '杜松の看板',
    },
    {
      type: 'dialog',
      text: 'これより先、磁場の乱れにより、\n方位磁針が正常に動作しません。',
      actorName: '杜松の看板',
    },
    { type: 'endTimeline' },
  ],
};

export const dir1: Timelines = {
  start: [
    {
      type: 'dialog',
      text: 'ここは太陽が沈みし場所。',
    },
    {
      type: 'dialog',
      text: '勇気ある者は崩れた石橋より、\n東に12、北に18、西に11、北に4、東に11進め。',
    },
    { type: 'endTimeline' },
  ],
};
export const dir2: Timelines = {
  start: [
    {
      type: 'dialog',
      text: 'ここは太陽が頂きまで昇りし場所。',
    },
    {
      type: 'dialog',
      text: '勇気ある者は崩れた石橋より、\n北に22、西に9、南に2、東に2、南に4、西に2、南に2、\n東に4、南に2、西に2、南に5、東に2、南に4進め。',
    },
    { type: 'endTimeline' },
  ],
};
export const dir3: Timelines = {
  start: [
    {
      type: 'dialog',
      text: 'ここは太陽が昇らざる場所。',
    },
    {
      type: 'dialog',
      text: '勇気ある者は崩れた石橋より、\n南に12、東に2、北に10、東に2、南に4、東に1、南に2、西に1、南に3、東に2、\n北に1、東に1、北に5、東に4、南に3、東に2、南に2、東に2、北に8、西に12進め。',
    },
    { type: 'endTimeline' },
  ],
};

export const addPouler: Timelines = {
  start: [
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Shiden', x: 3, y: 2, timeline: undefined },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Shiden', direction: Direction.DOWN },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Pouler', x: 2, y: 1, timeline: undefined },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Pouler', direction: Direction.DOWN },
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'パウラ', text: 'あ、あの…。' },
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
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 1 },
    },
    { type: 'dialog', actorName: 'マルク', text: 'お、どうしたお嬢ちゃん！' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'パウラ', text: '私も、連れて行ってもらえませんか…？' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'シデン', text: 'やめておけ、危険すぎる。' },
    { type: 'event', event: removeBubble },
    { type: 'dialog', actorName: 'マルク', text: '俺もシデンに賛成かな、敵も多いし。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'パウラ',
      text: 'でも、お父さんとお母さんを助けたいんです！',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'マルク', text: '…詳しく聞かせてくれ。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 4 },
    },
    {
      type: 'dialog',
      actorName: 'パウラ',
      text: '最近、このムギムギオーシャンの一帯にも黒い霧の影響が出始めてるんです。',
    },
    {
      type: 'dialog',
      actorName: 'パウラ',
      text: 'そのせいで水分が足りず、両親が渇きを訴えていて…。',
    },
    {
      type: 'dialog',
      actorName: 'パウラ',
      text: '水を飲めば一時的には治りますが、食事もままならなくなってしまい…。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'マルク', text: '…分かった、着いて来い。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'パウラ', text: '本当ですか！' },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Shiden', direction: Direction.DOWN },
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'シデン', text: 'いいのか！マルク！' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 5 },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: '食事もままならない状況じゃ、放っておいてもこの子は飢え死にするかもしれねぇだろ。',
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'なら、連れて行って魔王倒して、一緒に両親も救った方がいいだろ。',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 5 },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Shiden', direction: Direction.UP },
    },
    {
      type: 'dialog',
      actorName: 'パウラ',
      text: 'あ、ありがとうございます！\n回復魔法が使えるので、一生懸命がんばります！',
    },
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: removeBubble },
    { type: 'event', event: removeNpcByName, contents: { name: 'Shiden' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Pouler' } },
    { type: 'event', event: removeObjectByName, contents: { name: 'add3' } },
    { type: 'dialog', text: 'パウラが仲間になった！' },
    { type: 'meetFriend', actor: pouler },
    { type: 'endTimeline' },
  ],
};

export const restart0: Timelines = {
  start: [
    { type: 'dialog', text: '道を踏み外した！' },
    { type: 'event', event: warpPlayerByXY, contents: { x: 4, y: 2 } },
    { type: 'endTimeline' },
  ],
};
export const restart1: Timelines = {
  start: [
    { type: 'dialog', text: '道を踏み外した！' },
    { type: 'event', event: warpPlayerByXY, contents: { x: 58, y: 3 } },
    { type: 'endTimeline' },
  ],
};
export const restart2: Timelines = {
  start: [
    { type: 'dialog', text: '道を踏み外した！' },
    { type: 'event', event: warpPlayerByXY, contents: { x: 26, y: 38 } },
    { type: 'endTimeline' },
  ],
};

export const II: Timelines = {
  start: [
    { type: 'dialog', text: 'この渦に入りますか？' },
    {
      type: 'choice',
      choices: [
        { text: 'はい', timelineID: 'Yes' },
        { text: 'いいえ', timelineID: 'No' },
      ],
    },
  ],
  Yes: [
    { type: 'event', event: warpPlayerByXY, contents: { x: 59, y: 3 } },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const III: Timelines = {
  start: [
    { type: 'dialog', text: 'この渦に入りますか？' },
    {
      type: 'choice',
      choices: [
        { text: 'はい', timelineID: 'Yes' },
        { text: 'いいえ', timelineID: 'No' },
      ],
    },
  ],
  Yes: [
    { type: 'event', event: warpPlayerByXY, contents: { x: 26, y: 15 } },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const IV: Timelines = {
  start: [
    { type: 'dialog', text: 'この渦に入りますか？' },
    {
      type: 'choice',
      choices: [
        { text: 'はい', timelineID: 'Yes' },
        { text: 'いいえ', timelineID: 'No' },
      ],
    },
  ],
  Yes: [
    { type: 'event', event: warpPlayerByXY, contents: { x: 31, y: 30 } },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};

export const reI: Timelines = {
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
    { type: 'event', event: warpPlayerByXY, contents: { x: 24, y: 13 } },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const reII: Timelines = {
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
    { type: 'event', event: warpPlayerByXY, contents: { x: 53, y: 8 } },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};
export const reIII: Timelines = {
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
    { type: 'event', event: warpPlayerByXY, contents: { x: 9, y: 34 } },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};

export const warpstart: Timelines = {
  start: [
    { type: 'dialog', text: 'この渦に入りますか？' },
    {
      type: 'choice',
      choices: [
        { text: 'はい', timelineID: 'Yes' },
        { text: 'いいえ', timelineID: 'No' },
      ],
    },
  ],
  Yes: [
    { type: 'event', event: warpPlayerByXY, contents: { x: 4, y: 2 } },
    { type: 'endTimeline' },
  ],
  No: [{ type: 'endTimeline' }],
};

export const goMelcine: Timelines = {
  start: [
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: warpPlayerByXY, contents: { x: 51, y: 29 } },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Shiden', x: 52, y: 29, timeline: undefined },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Pouler', x: 50, y: 29, timeline: undefined },
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
    { type: 'endTimeline' },
  ],
};
export const beforeMelcineBattle: Timelines = {
  start: [
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 3 } },
    {
      type: 'dialog',
      actorName: 'メルシン',
      text: 'よくぞおいでくださいました！\nこのワタクシこそが、四天王一高貴な男、メルシンなのでっすぅ！！',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    { type: 'dialog', actorName: 'マルク', text: '…俺もうこいつ嫌いかもしんない。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 4 } },
    { type: 'dialog', actorName: 'メルシン', text: 'おやおや、それは残念ですねぇ…。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 5 } },
    {
      type: 'dialog',
      actorName: 'メルシン',
      text: 'この美しき海の守り手の魅力が伝わらないだなんて…オヨヨ…。',
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Shiden', direction: Direction.LEFT },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Pouler', direction: Direction.RIGHT },
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'パウラ', text: 'なんだか、騒がしい人ですね。' },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Shiden', bubbleIndex: 5 },
    },
    { type: 'dialog', actorName: 'シデン', text: 'ビーテとも大して変わらなそうだな。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 3 } },
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
    { type: 'dialog', actorName: 'メルシン', text: 'おや、聞き捨てなりませんねぇ！' },
    { type: 'event', event: removeBubble },
    {
      type: 'dialog',
      actorName: 'メルシン',
      text: 'この高貴なワタクシを、あんな力押しの兄弟と一緒にされては困るのですよ！',
    },
    {
      type: 'dialog',
      actorName: 'メルシン',
      text: 'やつらは四天王の面汚しに過ぎません…。',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 2 } },
    {
      type: 'dialog',
      actorName: 'メルシン',
      text: 'このワタクシが、四天王の真の恐ろしさ、思い知らせて差し上げましょう！！',
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
export const afterMelcineBattle: Timelines = {
  start: [
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 3 } },
    {
      type: 'dialog',
      actorName: 'メルシン',
      text: 'ぬぅ、このワタクシが、敗れるなど…。',
    },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 2 } },
    {
      type: 'dialog',
      actorName: 'メルシン',
      text: 'こんな無様な幕引きなんて、認めません、認めませんよォォォ！！！',
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 2 },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'player', direction: Direction.RIGHT },
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'ごちゃごちゃうるせぇ野郎だな、とっとと行こうぜ。',
    },
    { type: 'event', event: removeBubble },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Shiden', direction: Direction.LEFT },
    },
    { type: 'dialog', actorName: 'シデン', text: 'うむ、付き合うだけ時間の無駄だ。' },
    { type: 'event', event: displayBossBubble, contents: { bubbleIndex: 3 } },
    { type: 'dialog', actorName: 'メルシン', text: 'えっ、ちょ。' },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Pouler', direction: Direction.RIGHT },
    },
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'Pouler', bubbleIndex: 4 },
    },
    { type: 'dialog', actorName: 'パウラ', text: 'えぇ…。' },
    { type: 'event', event: removeBubble },
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'dialog', actorName: 'OBC', text: '…結局あんた以外、皆やられちまったよ。' },
    { type: 'dialog', actorName: 'エレカ', text: '当然よ、男は皆軟弱者だもの。' },
    {
      type: 'dialog',
      actorName: 'OBC',
      text: 'ふん、言うじゃないか…。\n言わずもがな、次はお前の番さ。',
    },
    {
      type: 'dialog',
      actorName: 'エレカ',
      text: '分かっているわ。\nお母様の元へは、虫けら1匹通しはしない…。',
    },
    {
      type: 'event',
      event: fixKillBossByName,
      contents: { name: 'Melcine' },
    },
    { type: 'event', event: removeNpcByName, contents: { name: 'Shiden' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Pouler' } },
    { type: 'event', event: removeBossByName, contents: { name: 'Melcine' } },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'goMelcine' },
    },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'beforeMelcine' },
    },
    {
      type: 'event',
      event: removeObjectByName,
      contents: { name: 'afterMelcine' },
    },
    {
      type: 'event',
      event: setEventByXY,
      contents: {
        name: 'startD',
        x: 4,
        y: 12,
        timeline: volcanoDakahu,
        setEventMap: 'map0',
      },
    },
    {
      type: 'event',
      event: setEventByXY,
      contents: {
        name: 'startD',
        x: 4,
        y: 13,
        timeline: volcanoDakahu,
        setEventMap: 'map0',
      },
    },
    { type: 'endTimeline' },
  ],
};
