import { getEnemies, getGhost, playersParty } from 'battleActors';
import { BattleActor } from 'classes/BattleActor';
import { system } from 'index';
import { Scene } from 'phaser';
import { sceneKeys } from './sceneKeys';

export class Battle extends Scene {
  private players: BattleActor[] = playersParty;
  private enemies: BattleActor[] = getEnemies(system.map);
  private sorted: BattleActor[] = [...this.players, ...this.enemies].sort((a, b) => {
    return b.speed - a.speed;
  });
  constructor() {
    super({ key: sceneKeys.battle });
  }

  preload() {
    console.log('preload');
    console.log('end preload');
  }

  create() {
    console.log('create');
  }

  update() {
    console.log('update');
    /**
     * バトルのループ
     * 1.敵味方のどちらかのHPが0になっていれば元いたマップに戻る
     * 2.ソートした配列の先頭からplayersかenemiesかどちらに属するかを判定
     * 3.属していない方の配列を対象に攻撃をする
     * 4.1へ戻る
     */
    const isEnd = this.isEndBattle(this.players, this.enemies);
    console.log(`isEnd: ${isEnd}`);

    if (isEnd != 0) {
      switch (isEnd) {
        case 1:
          console.log('player win');
          break;
        case 2:
          console.log('enemy win');
          break;
        case 3:
          console.log('draw');
          break;
      }
      // exit battle scene
      this.scene.sleep(this);
      this.scene.switch(system.map);
    }

    for (const actor of this.sorted) {
      actor.getRandSkill()(actor, this.getEnemyGroup(actor, this.players, this.enemies));
      console.log(actor.name + ': ' + actor.hp.current);
    }
  }

  getGroupBelongsTo(actor: BattleActor, groups: BattleActor[][]) {
    return groups.map((group) => {
      if (group.includes(actor)) {
        return group;
      }
    });
  }

  getEnemyGroup(
    subject: BattleActor,
    group1: BattleActor[],
    group2: BattleActor[],
  ): BattleActor[] {
    if (group1.includes(subject)) {
      return group2;
    } else if (group2.includes(subject)) {
      return group1;
    }

    return [getGhost()];
  }

  /**
   * @brief バトルが終了したかどうかを判定する
   *
   * @param BattleActor[]   バトルをしているキャラクターの配列
   * @param BattleActor[]   対戦相手のキャラクター配列
   *
   * @return  まだ終了していない: 0
   *          actors1側の勝利で終了: 1
   *          actors2側の勝利で終了: 2
   *          両方死んでいる: 3
   */
  isEndBattle(actors1: BattleActor[], actors2: BattleActor[]): number {
    const hp1: number = this.getSumHp(actors1);
    const hp2: number = this.getSumHp(actors2);

    if (hp1 <= 0 && hp2 <= 0) {
      return 3;
    } else if (hp1 <= 0 && hp2 > 0) {
      return 2;
    } else if (hp1 > 0 && hp2 <= 0) {
      return 1;
    }
    return 0;
  }

  getSumHp(actors: BattleActor[]): number {
    return actors
      .map((actor) => actor.hp.current)
      .reduce((sum, current) => sum + current);
  }
}
