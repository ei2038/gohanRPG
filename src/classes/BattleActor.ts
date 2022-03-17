import { oneShotAttack, SkillFunction } from 'skills';
import { randF, randI } from './../functions/generalPurpose/rand';
export type Level = {
  // 現在のレベル
  current: number;
  // 現在保持している経験値(レベルアップ時に消費される)
  exp: number;
  // 次のレベルになるまでに必要な経験値の量
  toNext: number;
  // レベルの最大値
  max: number;
};

export type LimitValue = {
  current: number;
  max: number;
};

export class BattleActor {
  name: string = '';
  level: Level = { current: 1, exp: 0, toNext: 1, max: 1 };
  hp: LimitValue = { current: 1, max: 1 };
  mp: LimitValue = { current: 1, max: 1 };
  atk: number;
  def: number;
  speed: number;
  // 引数にskillArgを持つ関数の配列を持つ
  skills: SkillFunction[] = [oneShotAttack];
  constructor(
    name: string,
    level: Level,
    hp: LimitValue,
    mp: LimitValue,
    atk: number,
    def: number,
    speed: number,
  ) {
    this.name = name;
    this.level = level;
    this.hp = hp;
    this.mp = mp;
    this.atk = atk;
    this.def = def;
    this.speed = speed;
  }

  addExp(exp: number) {
    this.level.exp += exp;
    if (this.level.exp >= this.level.toNext) {
      this.levelUp();
      this.level.exp -= this.level.toNext;
      this.level.toNext = Math.floor(this.level.toNext * 1.5);
    }
  }

  levelUp() {
    this.level.current++;
    [this.hp.max, this.mp.max, this.atk, this.def, this.speed].forEach(
      (status: number) => {
        // 各ステータスの最大値を無造作に上げる
        status += Math.floor(status * randF(0.1, 0.8));
      },
    );
  }

  setLevel(current: number): number {
    if (this.level.current > current) {
      return 1;
    }

    for (let i = 0; Math.abs(current - this.level.current); i++) {
      this.levelUp();
    }

    return 0;
  }

  // 被ダメ
  beInjured(damage: number): void {
    this.hp.current -= Math.floor(damage - damage / this.def);
    if (this.hp.current < 0) {
      this.hp.current = 0;
    }
  }

  // 回復
  beHealed(heal: number): void {
    this.hp.current += Math.floor(heal);
    if (this.hp.current > this.hp.max) {
      this.hp.current = this.hp.max;
    }
  }

  getRandSkill(): SkillFunction {
    return this.skills[randI(this.skills.length)];
  }

  isDead(): boolean {
    return this.hp.current <= 0;
  }
}
