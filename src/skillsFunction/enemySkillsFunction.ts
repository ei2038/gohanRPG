import { BattleActor } from 'classes/BattleActor';
import { Scene } from 'phaser';
import { SkillFunction } from 'skills';
import { changeToFriendsView, skillDialog } from './skillDialog';
import { sceneKeys } from 'scenes/sceneKeys';
import { Timeline } from 'classes/Timeline';
import { Skill } from 'classes/Skill';
import { Battle } from 'scenes/Battle';
import { randI } from 'functions/generalPurpose/rand';
import { DEBUG } from 'functions/generalPurpose/debugLog';

export const attackForAll = (attacker: BattleActor, targets: BattleActor[]) => {
  targets.forEach((target) => {
    target.beInjured(attacker.buff.getAtk());
  });
};

export const healForAll = (
  attacker: BattleActor,
  targets: BattleActor[],
  rate: number = 0.4,
) => {
  targets.forEach((target) => {
    target.beHealed(target.hp.max * rate);
    DEBUG.log(`${target.name}の体力は${target.hp.current} / ${target.hp.max}になった!!!`);
  });
};

export const poisonForAll: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  targets.forEach((target) => {
    target.state.activeState('poison', 3);
  });
};

export const healContinueForAll: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  targets.forEach((target) => {
    target.state.activeState('heal', 3);
  });
};

export const paralysisForAll: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  targets.forEach((target) => {
    target.state.activeState('paralysis', 3);
  });
};

export const sleepForAll: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  targets.forEach((target) => {
    target.state.activeState('sleep', 3);
  });
};

export const arthralgiaForAll: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  targets.forEach((target) => {
    target.state.activeState('arthralgia', 3);
  });
};

export const glucosamineForAll: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  targets.forEach((target) => {
    target.state.activeState('glucosamine', 3);
  });
};

export const provocationForAll: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  targets.forEach((target) => {
    target.state.activeState('provocation', 3);
  });
};

// アタックドーピング
export const attackdoping: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  const beforeAtk = target.buff.getAtk();
  target.buff.setBuff(target.buff.getAtk() * 0.2, 0, 3);
  const afterAtk = target.buff.getAtk();
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のアタックドーピング！` },
    {
      type: 'dialog',
      text: `${target.name}の 攻撃力が${Math.abs(beforeAtk - afterAtk)}上がった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// かたくなる
export const katakunaru: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const beforeDef = attacker.buff.getDef();
  attacker.buff.setBuff(0, attacker.buff.getDef() * 0.5, 3);
  const afterDef = attacker.buff.getDef();
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のかたくなる！` },
    {
      type: 'dialog',
      text: `${attacker.name}の 防御力が${Math.abs(beforeDef - afterDef)}上がった！`,
    },
    { type: 'endTimeline' },
  ]);
};

export const highHealForAll = (attacker: BattleActor, targets: BattleActor[]) => {
  healForAll(attacker, targets, 1);
};

// 裏拳
export const uraken = (scene: Scene, attacker: BattleActor, targets: BattleActor[]) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  const beforeHp = target.hp.current;
  target.beInjured(attacker.buff.getAtk());
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の裏拳！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// ☆Die魔法・バックフィスト☆
export const diemaho = (scene: Scene, attacker: BattleActor, targets: BattleActor[]) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  const beforeHp = target.hp.current;
  target.beInjured(attacker.buff.getAtk());
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の☆Die魔法・バックフィスト☆！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 日大災害誤射タックル
export const nichidaiTacle = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  let sum: number = 0;
  targets.forEach((target) => {
    const beforeHp = target.hp.current;

    target.beInjured(attacker.buff.getAtk());

    const afterHp = target.hp.current;
    sum += Math.abs(beforeHp - afterHp);
  });
  sum = Math.floor(sum / targets.length);

  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の日大災害誤射タックル！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}に平均 ${sum} ダメージ！`,
    },
    { type: 'endTimeline' },
  ]);
};

// ヒール
export const heal = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
  rate: number = 0.4,
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  let text: string;
  const beforeHp = target.hp.current;
  target.beHealed(target.hp.max * rate);
  const afterHp = target.hp.current;
  if (beforeHp - afterHp === 0) {
    text = `${target.name}のHPは満タンだった...`;
  } else {
    text = `${target.name}を ${Math.abs(beforeHp - afterHp)} 回復した`;
  }
  DEBUG.log(`${target.name}の体力は${target.hp.current} / ${target.hp.max}になった!!!`);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のヒール！` },
    { type: 'dialog', text: text },
    { type: 'endTimeline' },
  ]);
};

// 温泉旅行
export const onsenryoko = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
  rate: number = 0.4,
) => {
  let sum: number = 0;
  targets.forEach((target) => {
    const beforeHp = target.hp.current;

    target.beHealed(target.hp.max * rate);

    const afterHp = target.hp.current;
    sum += Math.abs(beforeHp - afterHp);
    DEBUG.log(`${target.name}の体力は${target.hp.current} / ${target.hp.max}になった!!!`);
  });
  sum = Math.floor(sum / targets.length);

  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の温泉旅行！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}は平均 ${sum} 回復した！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 伊勢回転性
export const isekaitense = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
  rate: number = 0.4,
) => {
  let sum: number = 0;
  targets.forEach((target) => {
    const beforeHp = target.hp.current;

    target.beHealed(target.hp.max * rate);

    const afterHp = target.hp.current;
    sum += Math.abs(beforeHp - afterHp);
    DEBUG.log(`${target.name}の体力は${target.hp.current} / ${target.hp.max}になった!!!`);
  });
  sum = Math.floor(sum / targets.length);

  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の伊勢回転性！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}平均 ${sum} 回復した！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 毒胞子
export const dokuhoushi: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  target.state.activeState('poison', 3);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の毒胞子！` },
    {
      type: 'dialog',
      text: `${target.name}は 毒状態になった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// パラライズ
export const pararaizu: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  target.state.activeState('paralysis', 3);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のパラライズ！` },
    {
      type: 'dialog',
      text: `${target.name}は マヒ状態になった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 博賭モビール
export const batmobiru = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  let sum: number = 0;
  targets.forEach((target) => {
    const beforeHp = target.hp.current;
    if (beforeHp) {
      target.beInjured(attacker.buff.getAtk());

      const afterHp = target.hp.current;
      sum += Math.abs(beforeHp - afterHp);
    }
  });
  sum = Math.floor(sum / targets.length);

  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の博賭モビール！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}に平均 ${sum} ダメージ！`,
    },
    { type: 'endTimeline' },
  ]);
};

// インサート
export const insert = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
  rate: number = 0.4,
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  let text: string;
  const beforeHp = target.hp.current;
  target.beHealed(target.hp.max * rate);
  const afterHp = target.hp.current;
  if (beforeHp - afterHp === 0) {
    text = `${target.name}のHPは満タンだった...`;
  } else {
    text = `${target.name}を ${Math.abs(beforeHp - afterHp)} 回復した`;
  }
  DEBUG.log(`${target.name}の体力は${target.hp.current} / ${target.hp.max}になった!!!`);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のインサート！` },
    { type: 'dialog', text: text },
    { type: 'endTimeline' },
  ]);
};

// ポップ
export const pop = (scene: Scene, attacker: BattleActor, targets: BattleActor[]) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  const beforeHp = target.hp.current;
  target.beInjured(attacker.buff.getAtk());
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のポップ！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 木漏れ日
export const komorebi: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  target.state.activeState('sleep', 2);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の木漏れ日！` },
    {
      type: 'dialog',
      text: `${target.name}は 眠り状態になった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// ハニーハント
export const hanihant = (scene: Scene, attacker: BattleActor, targets: BattleActor[]) => {
  let sum: number = 0;
  targets.forEach((target) => {
    const beforeHp = target.hp.current;
    if (beforeHp) {
      target.beInjured(attacker.buff.getAtk());

      const afterHp = target.hp.current;
      sum += Math.abs(beforeHp - afterHp);
    }
  });
  sum = Math.floor(sum / targets.length);

  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のハニーハント！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}に平均 ${sum} ダメージ！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 羽交い締め
export const hagaizime: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  target.state.activeState('arthralgia', 3);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の羽交い締め！` },
    {
      type: 'dialog',
      text: `${target.name}はトラウマを植えつけられた！`,
    },
    { type: 'endTimeline' },
  ]);
};

// ブレイクダンス
export const breakdance: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  attacker.state.activeState('provocation', 3);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のブレイクダンス！` },
    {
      type: 'dialog',
      text: `${attacker.name}は 挑発し始めた！`,
    },
    { type: 'endTimeline' },
  ]);
};

// ノリノリダンス
export const norinoridance = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
  rate: number = 0.4,
) => {
  let sum: number = 0;
  targets.forEach((target) => {
    if (!target.isDead()) {
      const beforeHp = target.hp.current;

      target.beHealed(target.hp.max * rate);

      const afterHp = target.hp.current;
      sum += Math.abs(beforeHp - afterHp);
    }
    DEBUG.log(`${target.name}の体力は${target.hp.current} / ${target.hp.max}になった!!!`);
  });
  sum = Math.floor(sum / targets.length);

  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のノリノリダンス！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}は平均 ${sum} 回復した！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 咀嚼
export const soshaku: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  target.state.activeState('poison', 3);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の咀嚼！` },
    {
      type: 'dialog',
      text: `${target.name}は 毒状態になった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// はさみこむ
export const hasamikom = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  const beforeHp = target.hp.current;
  target.beInjured(attacker.buff.getAtk());
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のはさみこむ！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 同情を誘う
export const doujou: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  target.state.activeState('poison', 3);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の同情を誘う！` },
    {
      type: 'dialog',
      text: `${target.name}は 毒状態になった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 過呼吸
export const kakokyu: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  target.state.activeState('sleep', 2);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の過呼吸！` },
    {
      type: 'dialog',
      text: `${target.name}は 眠り状態になった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// ファイヤーブレス
export const firebress = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  let sum: number = 0;
  targets.forEach((target) => {
    const beforeHp = target.hp.current;
    if (beforeHp) {
      target.beInjured(attacker.buff.getAtk());
      const afterHp = target.hp.current;
      sum += Math.abs(beforeHp - afterHp);
    }
  });

  sum = Math.floor(sum / targets.length);

  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のファイヤーブレス！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}に平均 ${sum} ダメージ！`,
    },
    { type: 'endTimeline' },
  ]);
};

// プレゼントボーナス
export const presentbonus = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
  rate: number = 0.4,
) => {
  let sum: number = 0;
  targets.forEach((target) => {
    const beforeHp = target.hp.current;

    target.beHealed(target.hp.max * rate);

    const afterHp = target.hp.current;
    sum += Math.abs(beforeHp - afterHp);
    DEBUG.log(`${target.name}の体力は${target.hp.current} / ${target.hp.max}になった!!!`);
  });
  sum = Math.floor(sum / targets.length);

  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のプレゼントボーナス！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}は平均 ${sum} 回復した！`,
    },
    { type: 'endTimeline' },
  ]);
};

// ブレスケア
export const bresscare: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  target.state.activeState('heal', 3);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のブレスケア！` },
    {
      type: 'dialog',
      text: `${target.name}のHPが徐々に回復していく！`,
    },
    { type: 'endTimeline' },
  ]);
};

// プルんと触手
export const puruntshokushu: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  target.state.activeState('paralysis', 3);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のプルんと触手！` },
    {
      type: 'dialog',
      text: `${target.name}は マヒ状態になった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 必死の抵抗
export const hishinoR = (scene: Scene, attacker: BattleActor, targets: BattleActor[]) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  const beforeHp = target.hp.current;
  target.beInjured(attacker.buff.getAtk());
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の必死の抵抗！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// ブラックボックス
export const blackbox = (scene: Scene, attacker: BattleActor, targets: BattleActor[]) => {
  let sum: number = 0;
  targets.forEach((target) => {
    const beforeHp = target.hp.current;
    if (beforeHp) {
      target.beInjured(attacker.buff.getAtk());
      const afterHp = target.hp.current;
      sum += Math.abs(beforeHp - afterHp);
    }
  });

  sum = Math.floor(sum / targets.length);

  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のブラックボックス！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}に平均 ${sum} ダメージ！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 進もう、すべてを栄養にして
export const susumoSE = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
  rate: number = 0.4,
) => {
  let sum: number = 0;
  targets.forEach((target) => {
    if (!target.isDead()) {
      const beforeHp = target.hp.current;

      target.beHealed(target.hp.max * rate);

      const afterHp = target.hp.current;
      sum += Math.abs(beforeHp - afterHp);
    }
    DEBUG.log(`${target.name}の体力は${target.hp.current} / ${target.hp.max}になった!!!`);
  });
  sum = Math.floor(sum / targets.length);

  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}は言った` },
    { type: 'dialog', text: `進もう、すべてを栄養にして！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}は平均 ${sum} 回復した！`,
    },
    { type: 'endTimeline' },
  ]);
};

// アトラクションの整備不良
export const atrnoseibi = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  let sum: number = 0;
  targets.forEach((target) => {
    const beforeHp = target.hp.current;
    if (beforeHp) {
      target.beInjured(attacker.buff.getAtk());
      const afterHp = target.hp.current;
      sum += Math.abs(beforeHp - afterHp);
    }
  });

  sum = Math.floor(sum / targets.length);

  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のアトラクションの整備不良！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}に平均 ${sum} ダメージ！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 飲み込む
export const nomikomu = (scene: Scene, attacker: BattleActor, targets: BattleActor[]) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  const beforeHp = target.hp.current;
  target.beInjured(attacker.buff.getAtk());
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の飲み込む！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 誘導
export const yudou: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  target.state.activeState('provocation', 3);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の誘導！` },
    {
      type: 'dialog',
      text: `${target.name}は 挑発し始めた！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 吐き出す
export const hakidas: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  target.state.activeState('arthralgia', 3);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の吐き出す！` },
    {
      type: 'dialog',
      text: `${target.name}は トラウマを植えつけられた！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 決壊
export const kekkai = (scene: Scene, attacker: BattleActor, targets: BattleActor[]) => {
  let sum: number = 0;
  targets.forEach((target) => {
    const beforeHp = target.hp.current;
    if (beforeHp) {
      target.beInjured(attacker.buff.getAtk());
      const afterHp = target.hp.current;
      sum += Math.abs(beforeHp - afterHp);
    }
  });

  sum = Math.floor(sum / targets.length);

  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の決壊！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}に平均 ${sum} ダメージ！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 氾濫
export const hanran = (scene: Scene, attacker: BattleActor, targets: BattleActor[]) => {
  let sum: number = 0;
  targets.forEach((target) => {
    const beforeHp = target.hp.current;
    if (beforeHp) {
      target.beInjured(attacker.buff.getAtk());
      const afterHp = target.hp.current;
      sum += Math.abs(beforeHp - afterHp);
    }
  });

  sum = Math.floor(sum / targets.length);

  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の氾濫！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}に平均 ${sum} ダメージ！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 風化
export const fuuka: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  target.state.activeState('arthralgia', 3);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の風化！` },
    {
      type: 'dialog',
      text: `${target.name}は トラウマを植えつけられた！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 爪楊枝
export const tsumayoji = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  const beforeHp = target.hp.current;
  target.beInjured(attacker.buff.getAtk());
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の爪楊枝！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 1個増量
export const oneplus: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  target.buff.setBuff(target.buff.getAtk() * 0.2, 0, 3);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の1個増量！` },
    {
      type: 'dialog',
      text: `${target.name}の 攻撃力が上がった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 素手で触れる
export const sudefureru = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  const beforeHp = target.hp.current;
  target.beInjured(attacker.buff.getAtk());
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の素手で触れる！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 時価駆っくん
export const jikakkakun: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  target.state.activeState('arthralgia', 3);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の時価駆っくん！` },
    {
      type: 'dialog',
      text: `${target.name}は トラウマを植えつけられた！`,
    },
    { type: 'endTimeline' },
  ]);
};

// モーニングコール
export const morningCall = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  const beforeHp = target.hp.current;
  target.beInjured(attacker.buff.getAtk());
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のモーニングコール！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 肉の取り分け
export const nikunotoriwake = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
  rate: number = 0.4,
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  let text: string;
  const beforeHp = target.hp.current;
  target.beHealed(target.hp.max * rate);
  const afterHp = target.hp.current;
  if (beforeHp - afterHp === 0) {
    text = `${target.name}のHPは満タンだった...`;
  } else {
    text = `${target.name}を ${Math.abs(beforeHp - afterHp)} 回復した`;
  }
  DEBUG.log(`${target.name}の体力は${target.hp.current} / ${target.hp.max}になった!!!`);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の肉の取り分け！` },
    { type: 'dialog', text: text },
    { type: 'endTimeline' },
  ]);
};

// 炭火
export const sumibi = (scene: Scene, attacker: BattleActor, targets: BattleActor[]) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  const beforeHp = target.hp.current;
  target.beInjured(attacker.buff.getAtk());
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の炭火！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 弐怒漬け
export const nidozuke: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  target.buff.setBuff(target.buff.getAtk() * 0.2, 0, 3);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の弐怒漬け！` },
    {
      type: 'dialog',
      text: `${target.name}の 攻撃力が上がった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 睨みつける
export const niramitsukeru: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  target.buff.setBuff(target.buff.getAtk() * -0.2, 0, 3);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の睨みつける！` },
    {
      type: 'dialog',
      text: `${target.name}の 攻撃力が下がった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 頭突き
export const zutsuki = (scene: Scene, attacker: BattleActor, targets: BattleActor[]) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  const beforeHp = target.hp.current;
  target.beInjured(attacker.buff.getAtk());
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の頭突き！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// スイーツ喰らい
export const suitsgurai = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
  rate: number = 0.4,
) => {
  let sum: number = 0;
  targets.forEach((target) => {
    const beforeHp = target.hp.current;

    target.beHealed(target.hp.max * rate);

    const afterHp = target.hp.current;
    sum += Math.abs(beforeHp - afterHp);
    DEBUG.log(`${target.name}の体力は${target.hp.current} / ${target.hp.max}になった!!!`);
  });
  sum = Math.floor(sum / targets.length);

  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のスイーツ喰らい！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}は平均 ${sum} 回復した！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 迫真の演技...御意ﾂ
export const hakusinGyoi = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  let sum: number = 0;
  targets.forEach((target) => {
    const beforeHp = target.hp.current;
    if (beforeHp) {
      target.beInjured(attacker.buff.getAtk());
      const afterHp = target.hp.current;
      sum += Math.abs(beforeHp - afterHp);
    }
  });

  sum = Math.floor(sum / targets.length);

  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の迫真の演技...御意ﾂ！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}に平均 ${sum} ダメージ！`,
    },
    { type: 'endTimeline' },
  ]);
};
