import { BattleActor } from 'classes/BattleActor';
import { probabilityToDenominator } from 'functions/generalPurpose/probabilityToDenominator';
import { randI } from 'functions/generalPurpose/rand';
import { Scene } from 'phaser';
import { SkillFunction } from 'skills';
import { changeToFriendsView, skillDialog } from './skillDialog';

// sample
export const sample = (scene: Scene, attacker: BattleActor, targets: BattleActor[]) => {
  if (!targets.length) return;
  skillDialog(scene, []);
};

// 車懸りの刃
export const carSuspendBlade = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  let i: number, sum: number, num: number;
  sum = 0;
  num = 0;
  targets.forEach((target: BattleActor) => {
    if (target.hp.current > 0) {
      const beforeHp = target.hp.current;
      for (i = 0; i < 2; i++) {
        target.beInjured(attacker.buff.getAtk() * 0.6);
      }
      const afterHp = target.hp.current;
      sum += Math.abs(beforeHp - afterHp);
      num++;
    }
  });
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の車懸りの刃！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}は平均 ${Math.floor(
        sum / num,
      )} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 斜め切り
export const diagonalSlash = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  let sum = 0,
    num = 0;
  targets.forEach((target: BattleActor) => {
    if (target.hp.current > 0) {
      num++;
      const beforeHp = target.hp.current;
      target.beInjured(attacker.buff.getAtk() * 0.5);
      const afterHp = target.hp.current;
      sum += Math.abs(beforeHp - afterHp);
    }
  });
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の斜め切り！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}は平均 ${Math.floor(
        sum / num,
      )} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// そぎ切り（中攻撃）
export const shaveSlash = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  const beforeHp = target.hp.current;
  target.beInjured(attacker.buff.getAtk() * 1);
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のそぎ切り！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 夢翔斬（超強攻撃、自分に眠り）
export const dreamSlash = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  const beforeHp = target.hp.current;
  target.beInjured(attacker.buff.getAtk() * 1.5);
  attacker.state.activeState('sleep', 2);
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の夢翔斬！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    {
      type: 'dialog',
      text: `${attacker.name}は 眠り状態になった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 因果の小車（強攻撃、死か外れるまで攻撃し続ける）
export const causalCar = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  // 50％の確率で連続で攻撃する
  const denominator = probabilityToDenominator(50);
  let sum: number = 0;
  do {
    const beforeHp = target.hp.current;
    target.beInjured(attacker.buff.getAtk() * 1.2);
    const afterHp = target.hp.current;
    sum += Math.abs(beforeHp - afterHp);
  } while (randI(denominator) && !target.isDead());
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の因果の小車！` },
    {
      type: 'dialog',
      text: `${target.name}は合計 ${sum} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 舞車
export const danceCar = (scene: Scene, attacker: BattleActor, targets: BattleActor[]) => {
  if (!targets.length) return;
  const target = targets[0];
  const beforeAtk = target.buff.getAtk();
  target.buff.setBuff(target.buff.getAtk() * 0.5, 0, 3);
  const afterAtk = target.buff.getAtk();
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の舞車！` },
    {
      type: 'dialog',
      text: `${target.name}の攻撃力が${Math.abs(beforeAtk - afterAtk)}上がった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// ドライブスルー（強攻撃、被害者にマヒ）
export const driveThrough = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target: BattleActor = targets[0];
  const beforeHp = target.hp.current;
  // 強攻撃
  target.beInjured(attacker.buff.getAtk() * 1.2);
  const afterHp = target.hp.current;
  // マヒ
  target.state.activeState('paralysis', 3);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のドライブスルー！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    {
      type: 'dialog',
      text: `${target.name}は マヒ状態になった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// パンドラの箱
export const pandoraBox = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  if (!randI(100)) {
    targets.forEach((target: BattleActor) => {
      target.hp.current = 0;
    });
  }
  skillDialog(scene, [
    {
      type: 'dialog',
      text: '縺ゅ＞縺�∴縺� �撰ｼ托ｼ抵ｼ���ｽゑｽ� �ｸ�ｹ�ｺ��ｽゑｽ� �ｸ�ｹ�ｺ譁�ｭ怜喧縺代ヱ繧ｿ繝ｼ繝ｳ讖溯�繝ｻ遐皮ｩｶ�樞包ｼ搾ｼ�ｿ��｡繹ｱ竭�竇｡',
    },
    { type: 'dialog', text: 'な  ん  ち  ゃ  っ  て' },
    { type: 'endTimeline' },
  ]);
};

// js上の詠唱曲
export const airOnJs: SkillFunction = (
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
    { type: 'dialog', text: `${attacker.name}のjs上の詠唱曲！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// jsonの円舞曲
export const jsonWaltz = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target = targets[0];
  const beforeHp = target.hp.current;
  target.beInjured(attacker.buff.getAtk() * 1.2);
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のjsonの円舞曲！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// tiledの回旋曲
export const tiledRondo = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target = targets[0];
  target.state.activeState('glucosamine', 3);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のtiledの回旋曲！` },
    { type: 'dialog', text: `${target.name}は 祝福を受けた！` },
    { type: 'endTimeline' },
  ]);
};

// 心理の狂詩曲
export const psychologyRhapsody = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target = targets[0];
  target.state.activeState('poison', 3);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の心理の狂詩曲！` },
    { type: 'dialog', text: `${target.name}は どく状態になった！` },
    { type: 'endTimeline' },
  ]);
};

// 聖杯の幻想曲
export const grailFantasia: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target = targets[0];
  const beforeHp = target.hp.current;
  target.beHealed(target.hp.max * 0.3);
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の聖杯の幻想曲！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} 回復した！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 指揮者の終曲
export const conductorFinale: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target = targets[0];
  const targetBeforeDef = target.buff.getDef();
  target.buff.setBuff(0, -target.buff.getDef(), 1);
  const targetAfterDef = target.buff.getDef();
  const targetBeforeHp = target.hp.current;
  target.beInjured(attacker.buff.getAtk() * 1.5);
  const targetAfterHp = target.hp.current;
  const attackerBeforeHp = attacker.hp.current;
  attacker.hp.current = 0;
  const attackerAfterHp = attacker.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の指揮者の終曲！` },
    {
      type: 'dialog',
      text: `${target.name}の防御力が${Math.abs(
        targetBeforeDef - targetAfterDef,
      )}下がった！`,
    },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(
        targetBeforeHp - targetAfterHp,
      )} ダメージ喰らった！`,
    },
    {
      type: 'dialog',
      text: `${attacker.name}は反動で ${Math.abs(
        attackerBeforeHp - attackerAfterHp,
      )} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 賢者の小夜曲
export const sageSerenade: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target = targets[0];
  const beforeDef = target.buff.getDef();
  target.buff.setBuff(0, -target.buff.getDef() * 0.2, 3);
  const afterDef = target.buff.getDef();
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の賢者の小夜曲！` },
    {
      type: 'dialog',
      text: `${target.name}の防御力が ${Math.abs(beforeDef - afterDef)} 下がった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 紅魔の鎮魂歌
export const redDevilRequiem: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  let sum = 0,
    num = 0;
  targets.forEach((target: BattleActor) => {
    if (target.hp.current > 0) {
      num++;
      const beforeHp = target.hp.current;
      target.beInjured(attacker.buff.getAtk());
      const afterHp = target.hp.current;
      sum += Math.abs(beforeHp - afterHp);
      target.state.activeState('poison', 2);
    }
  });
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の紅魔の鎮魂歌！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}は平均 ${Math.floor(
        sum / num,
      )} ダメージ喰らった！`,
    },
    { type: 'dialog', text: `${changeToFriendsView(attacker, targets)}を毒状態にした！` },
    { type: 'endTimeline' },
  ]);
};

// 朝ラーの怒り
export const morningRamenBless: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  let hpSum = 0,
    atkSum = 0,
    defSum = 0,
    num = 0;
  targets.forEach((target: BattleActor) => {
    if (target.hp.current > 0) {
      num++;
      const beforeHp = target.hp.current;
      target.beInjured(attacker.buff.getAtk() * 0.5);
      const afterHp = target.hp.current;
      hpSum += Math.abs(beforeHp - afterHp);
      const beforeAtk = target.buff.getAtk();
      const beforeDef = target.buff.getDef();
      target.buff.setBuff(-target.buff.getAtk() * 0.2, -target.buff.getDef() * 0.2, 3);
      const afterAtk = target.buff.getAtk();
      const afterDef = target.buff.getDef();
      atkSum += Math.abs(beforeAtk - afterAtk);
      defSum += Math.abs(beforeDef - afterDef);
    }
  });
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の朝ラーの怒り！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}は平均 ${Math.floor(
        hpSum / num,
      )} ダメージ喰らった！`,
    },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}の攻撃力が平均 ${Math.floor(
        atkSum / num,
      )} 下がった！`,
    },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}の防御力が平均 ${Math.floor(
        defSum / num,
      )} 下がった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 阿吽の加護
export const aunBless = (scene: Scene, attacker: BattleActor, targets: BattleActor[]) => {
  if (!targets.length) return;
  let sum: number = 0,
    num: number = 0;
  targets.forEach((target: BattleActor) => {
    const beforeDef = target.buff.getDef();
    target.buff.setBuff(0, target.buff.getDef() * 0.3, 2);
    const afterDef = target.buff.getDef();
    sum += Math.abs(beforeDef - afterDef);
    num++;
  });
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の阿吽の加護！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}の防御力が平均 ${Math.floor(
        sum / num,
      )} 上がった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 精霊の加護
export const spiritBless: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  let atkSum = 0,
    defSum = 0,
    num = 0;
  targets.forEach((target: BattleActor) => {
    if (target.hp.current > 0) {
      num++;
      const beforeAtk = target.buff.getAtk();
      const beforeDef = target.buff.getDef();
      target.buff.setBuff(target.buff.getAtk() * 0.1, target.buff.getDef() * 0.1, 3);
      const afterAtk = target.buff.getAtk();
      const afterDef = target.buff.getDef();
      atkSum += Math.abs(beforeAtk - afterAtk);
      defSum += Math.abs(beforeDef - afterDef);
    }
  });
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の精霊の加護！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}の攻撃力が平均 ${Math.floor(
        atkSum / num,
      )} 上がった！`,
    },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}の防御力が平均 ${Math.floor(
        defSum / num,
      )} 上がった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// 杜の恵み
export const forestGrace: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  let sum: number = 0;
  targets.forEach((target: BattleActor) => {
    const beforeHp = target.hp.current;
    target.beHealed(target.hp.max * 0.5);
    const afterHp = target.hp.current;
    target.state.activeState('glucosamine', 2);
    sum += Math.abs(beforeHp - afterHp);
  });
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}の杜の恵み！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}は元気を取り戻した！`,
    },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}は平均 ${Math.floor(
        sum / targets.length,
      )} 回復した！`,
    },
    { type: 'dialog', text: `${changeToFriendsView(attacker, targets)}は祝福を受けた！` },
    { type: 'endTimeline' },
  ]);
};

// ヒール
export const heal = (scene: Scene, attacker: BattleActor, targets: BattleActor[]) => {
  if (!targets.length) return;
  const target = targets[0];
  const beforeHp = target.hp.current;
  target.beHealed(attacker.hp.max * 0.3);
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のヒール！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} 回復した！`,
    },
    { type: 'endTimeline' },
  ]);
};

// ピコヒール
export const picoHeal: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target = targets[0];
  target.state.activeState('heal', 5);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のピコヒール！` },
    { type: 'dialog', text: `${target.name}は継続回復を得た！` },
    { type: 'endTimeline' },
  ]);
};

// メガヒール
export const megaHeal: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target = targets[0];
  const beforeHp = target.hp.current;
  target.beHealed(target.hp.max * 0.3);
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のメガヒール！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} 回復した！`,
    },
    { type: 'endTimeline' },
  ]);
};

// ハイヒール
export const highHeal = (scene: Scene, attacker: BattleActor, targets: BattleActor[]) => {
  if (!targets.length) return;
  const target = targets[0];
  const beforeHp = target.hp.current;
  target.beInjured(attacker.buff.getAtk());
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のハイヒール！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// まもる
export const protect: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  attacker.state.activeState('provocation', 4);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のまもる！` },
    {
      type: 'dialog',
      text: `${attacker.name}は挑発し、${changeToFriendsView(targets[0], [
        attacker,
      ])}の注意を引いた！`,
    },
    { type: 'endTimeline' },
  ]);
};

// せめる
export const assault = (scene: Scene, attacker: BattleActor, targets: BattleActor[]) => {
  if (!targets.length) return;
  const target = targets[0];
  const beforeHp = target.hp.current;
  target.beInjured(attacker.buff.getAtk());
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のせめる！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// つよくなる
export const beStrong: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target = targets[0];
  const beforeHp = target.hp.current;
  target.beInjured(attacker.buff.getAtk() * 0.8);
  const afterHp = target.hp.current;
  const beforeDef = target.buff.getDef();
  attacker.buff.setBuff(0, attacker.buff.getDef() * 0.2, 4);
  const afterDef = target.buff.getDef();
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のつよくなる！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    {
      type: 'dialog',
      text: `${attacker.name}の防御力が ${Math.abs(beforeDef - afterDef)} 上がった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// かたくなる
export const beHard: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  attacker.buff.setBuff(0, 1000000, 2);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のかたくなる！` },
    { type: 'dialog', text: `${attacker.name}は2ターン無敵になった！` },
    { type: 'endTimeline' },
  ]);
};

// たいきばんせい
export const daikiLate: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  attacker.state.activeState('provocation', 3);
  attacker.buff.setBuff(0, 1000000, 1);
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のたいきばんせい！` },
    {
      type: 'dialog',
      text: `${attacker.name}は${changeToFriendsView(attacker, targets)}の注意を引いた！`,
    },
    { type: 'dialog', text: `${attacker.name}の防御力がかなり上がった！` },
    { type: 'endTimeline' },
  ]);
};

// とつげき
export const charge: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target = targets[0];
  const beforeHp = target.hp.current;
  target.beInjured(attacker.buff.getAtk() * 1.2);
  const afterHp = target.hp.current;
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のとつげき！` },
    {
      type: 'dialog',
      text: `${target.name}は ${Math.abs(beforeHp - afterHp)} ダメージ喰らった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// きあい
export const matchFelt = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  let atkSum: number = 0,
    defSum: number = 0,
    num: number = 0;
  targets.forEach((target: BattleActor) => {
    const beforeAtk = target.buff.getAtk();
    const beforeDef = target.buff.getDef();
    target.buff.setBuff(target.buff.getAtk() * 0.2, target.buff.getDef() * 0.2, 2);
    const afterAtk = target.buff.getAtk();
    const afterDef = target.buff.getDef();
    atkSum += Math.abs(beforeAtk - afterAtk);
    defSum += Math.abs(beforeDef - afterDef);
    num++;
  });
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のきあい！` },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}の攻撃力が平均 ${
        atkSum / num
      } 上がった！`,
    },
    {
      type: 'dialog',
      text: `${changeToFriendsView(attacker, targets)}の防御力が平均 ${
        defSum / num
      } 上がった！`,
    },
    { type: 'endTimeline' },
  ]);
};

// うおおおおお
export const uooooo: SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => {
  if (!targets.length) return;
  const target = targets[0];
  const beforeAtk = target.buff.getAtk();
  target.buff.setBuff(0, -target.buff.getAtk() * 0.4, 2);
  const afterAtk = target.buff.getAtk();
  skillDialog(scene, [
    { type: 'dialog', text: `${attacker.name}のうおおおおお！` },
    {
      type: 'dialog',
      text: `${target.name}の攻撃力が ${Math.abs(beforeAtk - afterAtk)} 下がった！`,
    },
    { type: 'endTimeline' },
  ]);
};
