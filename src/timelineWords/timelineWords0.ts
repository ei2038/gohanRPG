import { Timelines } from '../classes/Timelines';
import { Direction } from '../classes/Direction';
import {
  removeEventByXYs,
  removeObjectByName,
  changeNpcDir,
  setNpc,
  removeNpcByName,
  movePlayerByDir,
  displayBubble,
  removeBubble,
  talkNPC,
} from './events';

export const warp1: Timelines = {
  start: [{ type: 'switch', scene: 'map1' }, { type: 'endTimeline' }],
};
export const warp2: Timelines = {
  start: [{ type: 'switch', scene: 'map2' }, { type: 'endTimeline' }],
};
export const warp3: Timelines = {
  start: [{ type: 'switch', scene: 'map3' }, { type: 'endTimeline' }],
};
export const warp4: Timelines = {
  start: [{ type: 'switch', scene: 'map4' }, { type: 'endTimeline' }],
};
export const warp5: Timelines = {
  start: [
    { type: 'isAllBossDead', scene: 'map5', timelineID: 'final' },
    {
      type: 'dialog',
      text: '食堂は固く閉ざされている。',
    },
    { type: 'endTimeline' },
  ],
  final: [{ type: 'switch', scene: 'map5' }, { type: 'endTimeline' }],
};

export const stoper: Timelines = {
  start: [
    {
      type: 'dialog',
      text: '見えない(?)壁に塞がれている。',
    },
    { type: 'endTimeline' },
  ],
};
export const tutorial1: Timelines = {
  start: [
    {
      type: 'dialog',
      text: `'SPACE'キーかマウスカーソルのクリックで会話を進める事が出来ます。`,
      actorName: '識者',
    },
    {
      type: 'dialog',
      text: " 'SPACE'キーで人に話しかけたり、看板などを調べたりすることができます。",
      actorName: '識者',
    },
    {
      type: 'dialog',
      text: 'また、会話中に出てくる選択肢はマウスカーソルで選ぶことができます。',
      actorName: '識者',
    },
    {
      type: 'dialog',
      text: 'ちなみに主人公の移動は十字キーで行います。',
      actorName: '識者',
    },
    {
      type: 'dialog',
      text: '分かりましたか？',
      actorName: '識者',
    },
    {
      type: 'choice',
      choices: [
        { text: 'はい', timelineID: 'Yes' },
        { text: 'いいえ', timelineID: 'No' },
        { text: '制作者風情が話しかけるな', timelineID: 'end' },
      ],
    },
  ],
  Yes: [
    { type: 'event', event: removeObjectByName, contents: { name: 'tutorial1' } },
    { type: 'endTimeline' },
  ],
  No: [
    { type: 'dialog', text: 'では、もう一度説明します。', actorName: '識者' },
    { type: 'timelineTransition', timelineID: 'start' },
    { type: 'endTimeline' },
  ],
  end: [
    { type: 'dialog', text: '・・・・・・。', actorName: '識者' },
    {
      type: 'dialog',
      text: 'わかりました。それでは私はこれで・・・。',
      actorName: '識者',
    },
    { type: 'dialog', text: '・・・・・・。' },
    {
      type: 'dialog',
      text: 'この後、俺は謎の漫才師に捕まり、色々されてしまうのだった。',
      actorName: 'マルク',
    },
    {
      type: 'sceneTransition',
      key: 'gameover',
    },
    { type: 'endTimeline' },
  ],
};
export const explanation: Timelines = {
  start: [
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'notMob', direction: Direction.LEFT },
    },
    { type: 'event', event: displayBubble, contents: { name: 'notMob', bubbleIndex: 3 } },
    { type: 'dialog', actorName: 'ダカフ', text: 'おい、そこの若者！' },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'player', direction: Direction.RIGHT },
    },
    { type: 'event', event: displayBubble, contents: { name: 'player', bubbleIndex: 3 } },
    { type: 'dialog', actorName: 'マルク', text: 'ん？なんか用か？爺さん。' },
    { type: 'event', event: displayBubble, contents: { name: 'notMob', bubbleIndex: 3 } },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: '村の中そんな格好で出てくるとは珍しい。\nどこか行くところでもあるのか？',
    },
    { type: 'event', event: displayBubble, contents: { name: 'player', bubbleIndex: 4 } },
    { type: 'dialog', actorName: 'マルク', text: 'あぁ、魔王…' },
    { type: 'event', event: displayBubble, contents: { name: 'notMob', bubbleIndex: 3 } },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: '魔王を倒しに食堂に行こうというのか！勇ましいのう！',
    },
    { type: 'event', event: displayBubble, contents: { name: 'player', bubbleIndex: 4 } },
    { type: 'dialog', actorName: 'マルク', text: 'えっと、まだ何も…' },
    { type: 'event', event: displayBubble, contents: { name: 'notMob', bubbleIndex: 3 } },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: '食堂が魔王に占拠され、ついには魔王城とまで呼ばれるようになり、もう何ヶ月になるかのう…。',
    },
    { type: 'event', event: displayBubble, contents: { name: 'notMob', bubbleIndex: 1 } },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: 'して若者よ、食堂に行くのになにか策はあるのか？',
    },
    { type: 'event', event: displayBubble, contents: { name: 'player', bubbleIndex: 4 } },
    { type: 'dialog', actorName: 'マルク', text: 'べ…' },
    { type: 'event', event: displayBubble, contents: { name: 'notMob', bubbleIndex: 3 } },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: '無策ではいかんなぁ、この間突入した警備隊は、入ることすら叶わなんだ。',
    },
    { type: 'event', event: displayBubble, contents: { name: 'notMob', bubbleIndex: 4 } },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: 'なんでも、入り口には4つの鍵がかかっておったそうじゃ…。',
    },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: '噂に聞いた話じゃが、その鍵のうちの1つは、\nサバレーフィールドの赤い魔物が持っとるそうじゃな！',
    },
    { type: 'event', event: displayBubble, contents: { name: 'player', bubbleIndex: 4 } },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'サバ…',
    },
    { type: 'event', event: displayBubble, contents: { name: 'notMob', bubbleIndex: 4 } },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: 'サバレーか、懐かしいのぅ、確かこの町の南西にあったかのう…。',
    },
    { type: 'event', event: displayBubble, contents: { name: 'notMob', bubbleIndex: 5 } },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: 'ワシが若い頃はよく婆さんとピクニックに行ったのぅ…。',
    },
    { type: 'event', event: displayBubble, contents: { name: 'player', bubbleIndex: 4 } },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: 'あの頃はワシもブイブイ言わしておってな、\n婆さんは魔物を次々に倒すワシの勇姿にほれぼれしててのぅ、\nしかし今ではそんなワシを尻に敷くんじゃから人間わからんもんで…。',
    },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'これもうそのまま行っちゃっていいかな…。',
    },
    { type: 'event', event: removeBubble },
    { type: 'setBackgroundColor', color: '#000' },
    { type: 'event', event: removeNpcByName, contents: { name: 'stoper1' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'stoper2' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'stoper3' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'stoper4' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'stoper5' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'stoper6' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'stoper7' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'stoper8' } },
    {
      type: 'event',
      event: removeEventByXYs,
      contents: {
        xy: [
          { x: 29, y: 8 },
          { x: 30, y: 8 },
        ],
      },
    },
    { type: 'endTimeline' },
  ],
};
export const afterDakahu: Timelines = {
  start: [
    { type: 'dialog', actorName: 'ダカフ', text: 'あの頃はよかったの〜！' },
    { type: 'endTimeline' },
  ],
};
export const desertDakahu: Timelines = {
  start: [
    { type: 'event', event: removeNpcByName, contents: { name: 'notMob' } },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'notMob2', x: 6, y: 22, timeline: undefined },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'notMob2', direction: Direction.LEFT },
    },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: 'おお！帰ったか若者よ！\n街はお主の噂で持ち切りじゃぞ！',
    },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: 'お主が旅をしていた間、ワシも指をくわえていた訳ではないぞい！',
    },
    { type: 'dialog', actorName: 'マルク', text: 'あの、爺さん誰だっk…' },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: '次の鍵のありかの噂を嗅ぎ回っていたんじゃ！',
    },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: 'なんでも、ソースワデザートの青い魔物が怪しいらいいぞい！',
    },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: 'さぁ、ワシもこうしちゃいられん！次の噂の聞き込みじゃ！',
    },
    { type: 'event', event: removeNpcByName, contents: { name: 'notMob2' } },
    { type: 'dialog', actorName: 'マルク', text: '…誰だ、今の爺さん。' },
    {
      type: 'event',
      event: removeEventByXYs,
      contents: {
        xy: [
          { x: 55, y: 22 },
          { x: 55, y: 23 },
          { x: 4, y: 22 },
          { x: 4, y: 23 },
        ],
      },
    },
    { type: 'endTimeline' },
  ],
};
export const oceanDakahu: Timelines = {
  start: [
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'notMob3', x: 53, y: 22, timeline: undefined },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'notMob3', direction: Direction.RIGHT },
    },
    { type: 'dialog', actorName: 'ダカフ', text: '待ちわびたぞ！若者！' },
    { type: 'dialog', actorName: 'マルク', text: 'なんだいきなr…' },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: 'ワシはもうとっくに次の鍵の情報をつかんでおったというに…。',
    },
    { type: 'dialog', actorName: 'ダカフ', text: 'こんな年寄りに負けて悔しくないのか！' },
    { type: 'dialog', actorName: 'マルク', text: '別に競ってはな…' },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: '次の鍵は、ムギムギオーシャンの白い魔物が持っているそうじゃ！',
    },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: 'さ、ワシは最後の鍵の噂を探しに行くぞ！善は急げじゃ！',
    },
    {
      type: 'event',
      event: removeEventByXYs,
      contents: {
        xy: [
          { x: 55, y: 22 },
          { x: 55, y: 23 },
          { x: 4, y: 12 },
          { x: 4, y: 13 },
        ],
      },
    },
    { type: 'event', event: removeNpcByName, contents: { name: 'notMob3' } },
    { type: 'endTimeline' },
  ],
};
export const volcanoDakahu: Timelines = {
  start: [
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'notMob4', x: 6, y: 12, timeline: undefined },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'notMob4', direction: Direction.LEFT },
    },
    { type: 'dialog', actorName: 'ダカフ', text: 'さ！最後はキーマボルケーノじゃ！' },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: '分かったら休んどらんでさっさと行けい！じゃあな！',
    },
    {
      type: 'event',
      event: removeEventByXYs,
      contents: {
        xy: [
          { x: 55, y: 12 },
          { x: 55, y: 13 },
          { x: 4, y: 12 },
          { x: 4, y: 13 },
        ],
      },
    },
    { type: 'event', event: removeNpcByName, contents: { name: 'notMob4' } },
    { type: 'endTimeline' },
  ],
};

export const beBijinesuman: Timelines = {
  start: [
    { type: 'event', event: talkNPC },
    {
      type: 'dialog',
      text: '魔王の影響が僕のビジネスにまで及んできた...。\n誰か倒してくれないかなぁ。',
      actorName: 'ビジネスマン',
    },
    { type: 'endTimeline' },
  ],
};
export const beJK: Timelines = {
  start: [
    {
      type: 'dialog',
      text: '最近魔王のせいでウチの門限厳しくなってさー、マジ最悪ー。',
      actorName: '金髪JK',
    },
    {
      type: 'dialog',
      text: 'わかるー。ウチもそうだよ。どうにかなんないかなぁ。',
      actorName: '黒髪JK',
      //
    },
    { type: 'endTimeline' },
  ],
};
export const beTyuubou: Timelines = {
  start: [
    {
      type: 'dialog',
      text: '魔王なんてオレのこの腕の力で...ブツブツ。',
      actorName: '中坊',
    },
    { type: 'endTimeline' },
  ],
};
export const beEruhu: Timelines = {
  start: [
    { type: 'event', event: talkNPC },
    {
      type: 'dialog',
      text: '魔王軍のやつらのせいで僕の家がある森に誰も遊びに来なくなっちゃったよ。\n寂しいな...。',
      actorName: 'エルフ',
    },
    { type: 'endTimeline' },
  ],
};
export const beKisi: Timelines = {
  start: [
    { type: 'event', event: talkNPC },
    {
      type: 'dialog',
      text: 'ふっ魔王軍なんぞ恐るるに足らず！この町は私が守る！',
      actorName: '騎士',
    },
    { type: 'endTimeline' },
  ],
};
export const beMajo: Timelines = {
  start: [
    {
      type: 'dialog',
      text: '（クククッ魔除け薬なんてある訳ないじゃないww。）\n魔除け薬はいかがですかー？',
      actorName: '怪しげな魔女',
    },
    { type: 'endTimeline' },
  ],
};
export const beSyoujo: Timelines = {
  start: [
    { type: 'event', event: talkNPC },
    {
      type: 'dialog',
      text: '私も魔法少女プリラみたいに大きくなったら悪い奴を退治するのー。',
      actorName: '少女',
    },
    { type: 'endTimeline' },
  ],
};
export const beRoujin: Timelines = {
  start: [
    { type: 'event', event: talkNPC },
    {
      type: 'dialog',
      text: 'おぬしのその装備...さては魔王退治じゃな？\nほっほっほっ、頼もしい若者も居たもんじゃ。',
      actorName: '老人',
    },
    { type: 'endTimeline' },
  ],
};

export const afBijinesuman: Timelines = {
  start: [
    { type: 'event', event: talkNPC },
    {
      type: 'dialog',
      text: '魔王軍のやつらが減って僕のビジネスが好調だよ！ありがとう！',
      actorName: 'ビジネスマン',
    },
    { type: 'endTimeline' },
  ],
};
export const afJK: Timelines = {
  start: [
    {
      type: 'dialog',
      text: '門限ちょっとはマシになったけどまだまだキツいわー。',
      actorName: '金髪JK',
    },
    {
      type: 'dialog',
      text: '魔王が倒されたら元に戻るかなぁ。',
      actorName: '黒髪JK',
    },
    { type: 'endTimeline' },
  ],
};
export const afTyuubou: Timelines = {
  start: [
    {
      type: 'dialog',
      text: '俺が毎晩行っている儀式が効いているようだな...。\nあとはお前だけだ魔王よ。クククッ...。',
      actorName: '中坊',
    },
    { type: 'endTimeline' },
  ],
};
export const afEruhu: Timelines = {
  start: [
    { type: 'event', event: talkNPC },
    {
      type: 'dialog',
      text: '人が森に来てくれるようになって楽しい毎日に戻ったよ、ありがとう！\nあとは魔王だけらしいね、がんばってね！',
      actorName: 'エルフ',
    },
    { type: 'endTimeline' },
  ],
};
export const afKisi: Timelines = {
  start: [
    { type: 'event', event: talkNPC },
    {
      type: 'dialog',
      text: 'この町はこの俺に任せろ！君は魔王にだけに集中しろ！がんばれ！',
      actorName: '騎士',
    },
    { type: 'endTimeline' },
  ],
};
export const afMajo: Timelines = {
  start: [
    {
      type: 'dialog',
      text: '（このおこづかい稼ぎも潮時かぁ...。）',
      actorName: '怪しげな魔女',
    },
    { type: 'endTimeline' },
  ],
};
export const afSyoujo: Timelines = {
  start: [
    { type: 'event', event: talkNPC },
    {
      type: 'dialog',
      text: '私も大きくなったらあなたみたいに強くなれるかなー？',
      actorName: '少女',
    },
    { type: 'endTimeline' },
  ],
};
export const afRoujin: Timelines = {
  start: [
    { type: 'event', event: talkNPC },
    {
      type: 'dialog',
      text: 'やはりおぬしは頼もしい若者じゃ！平和のためにも、魔王をがんばって倒してくれ！！',
      actorName: '老人',
    },
    { type: 'endTimeline' },
  ],
};

export const stopl: Timelines = {
  start: [
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: 'おっと、その先はまだ主には危険じゃぞい。',
    },
    { type: 'event', event: removeBubble },
    { type: 'event', event: movePlayerByDir, contents: { direction: Direction.LEFT } },
    { type: 'endTimeline' },
  ],
};
export const stopr: Timelines = {
  start: [
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 3 },
    },
    {
      type: 'dialog',
      actorName: 'ダカフ',
      text: 'おっと、その先はまだ主には危険じゃぞい。',
    },
    { type: 'event', event: removeBubble },
    {
      type: 'event',
      event: movePlayerByDir,
      contents: { direction: Direction.RIGHT },
    },
    { type: 'endTimeline' },
  ],
};

export const castleAnnounce: Timelines = {
  start: [
    {
      type: 'event',
      event: displayBubble,
      contents: { name: 'player', bubbleIndex: 1 },
    },
    {
      type: 'dialog',
      actorName: '？？？',
      text: 'あの世行き前半のグループ、あの世行き前半のグループ。',
    },
    { type: 'event', event: displayBubble, contents: { name: 'player', bubbleIndex: 3 } },
    { type: 'dialog', actorName: '？？？', text: 'マルク' },
    { type: 'dialog', actorName: '？？？', text: 'シデン' },
    { type: 'dialog', actorName: '？？？', text: 'パウラ' },
    { type: 'dialog', actorName: '？？？', text: 'マウ' },
    { type: 'dialog', actorName: '？？？', text: '食堂の方に移動しなさい。' },
    { type: 'dialog', actorName: '？？？', text: 'マスクの着用を忘れないように。' },
    { type: 'dialog', actorName: '？？？', text: '……ま、もう死ぬから関係ないがね。' },
    { type: 'dialog', actorName: 'マルク', text: '……。' },
    { type: 'event', event: removeBubble },
    { type: 'setBackgroundColor', color: '#000' },
    {
      type: 'event',
      event: removeEventByXYs,
      contents: {
        xy: [
          { x: 55, y: 12 },
          { x: 55, y: 13 },
        ],
      },
    },
    { type: 'event', event: removeNpcByName, contents: { name: 'JK1' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'JK2' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Bijinesuman' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Eruhu' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'kisi' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Tyuubou' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Syoujo' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Majo' } },
    { type: 'event', event: removeNpcByName, contents: { name: 'Roujin' } },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'JK1', x: 16, y: 12, timeline: afJK },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'JK1', direction: Direction.RIGHT },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'JK2', x: 17, y: 12, timeline: afJK },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'JK2', direction: Direction.LEFT },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Bijinesuman', x: 39, y: 12, timeline: afBijinesuman },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Eruhu', x: 12, y: 22, timeline: afEruhu },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Kisi', x: 29, y: 11, timeline: afKisi },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Tyuubou', x: 48, y: 12, timeline: afTyuubou },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Tyuubou', direction: Direction.UP },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Syoujo', x: 47, y: 22, timeline: afSyoujo },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Syoujo', direction: Direction.RIGHT },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Majo', x: 26, y: 22, timeline: afMajo },
    },
    {
      type: 'event',
      event: setNpc,
      contents: { name: 'Roujin', x: 39, y: 22, timeline: afRoujin },
    },
    {
      type: 'event',
      event: changeNpcDir,
      contents: { name: 'Roujin', direction: Direction.LEFT },
    },
    { type: 'endTimeline' },
  ],
};
export const explanation0: Timelines = {
  start: [
    {
      type: 'dialog',
      text: 'ここは町。',
      actorName: '杜松の看板',
    },
    {
      type: 'dialog',
      text: '南西にサバレーフィールド。',
      actorName: '杜松の看板',
    },
    {
      type: 'dialog',
      text: '南東にソースワデザート。',
      actorName: '杜松の看板',
    },
    {
      type: 'dialog',
      text: '北西にムギムギオーシャン。',
      actorName: '杜松の看板',
    },
    {
      type: 'dialog',
      text: '北東にキーマボルケーノ。',
      actorName: '杜松の看板',
    },
    {
      type: 'dialog',
      text: '北に食堂。',
      actorName: '杜松の看板',
    },
    { type: 'endTimeline' },
  ],
};
