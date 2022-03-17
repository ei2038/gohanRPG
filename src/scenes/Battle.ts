import { BattleActor } from 'classes/BattleActor';
import { system } from 'index';
import { Scene, Time } from 'phaser';
import { sceneKeys } from './sceneKeys';
import { getEnemies } from 'functions/generalPurpose/getEnemies';
import { cloneDeep } from 'lodash';

/*    Spread Syntax
 *    スプレッド構文構文を利用すると、
 *    簡単に配列のコピーや結合ができる。
 *    これは配列そのものへの参照ではなく、新しい配列を作る操作である。
 *    しかし、行われるのは shallow copy(浅いコピー)なので、
 *    配列の中でネストしている場合や中身がオブジェクトの場合は参照を共有することになる。
 * */

export class Battle extends Scene {
  private party: BattleActor[] = [...system.party];
  private enemies: BattleActor[] = [];
  private sorted: BattleActor[] = [];
  private index: number = 0;
  timerOneShot?: Time.TimerEvent;
  elapsedTime: number = 0;
  constructor() {
    super({ key: sceneKeys.battle });
  }

  preload() {
    const clone = cloneDeep(getEnemies(system.map));
    this.enemies = clone;
    this.sorted = [...this.party, ...this.enemies].sort((a, b) => {
      return b.speed - a.speed;
    });

    system.isBattle = true;
  }

  create() {
    // UIシーンを起動
    this.scene.launch(sceneKeys.ui, this.enemies);

    // バトル開始
    this.nextTurn();
  }

  nextTurn() {
    this.logAllActorHP();
    const actor = this.sorted[this.index];
    const enemies = this.getEnemyGroup(actor, this.party, this.enemies);
    if (!actor.isDead()) {
      console.log('####################');
      console.log(`${actor.name}のターン`);
      console.log('####################');
      actor.getRandSkill()(actor, enemies);

      this.index = (this.index + 1) % this.sorted.length;
      const endBattle = this.isEndBattle(this.party, this.enemies);
      // endBattleが0でない場合は、ターン終了
      if (endBattle !== 0) {
        system.isBattle = false;
        switch (endBattle) {
          case 1:
            console.log('プレイヤーの勝利');
            break;
          case 2:
          case 3:
            console.log('敵の勝利');
            break;
        }
        // HPが0になった味方はマップに戻るときにHP1にする
        this.party.forEach((actor) => {
          if (actor.isDead()) {
            actor.beHealed(1);
          }
        });
        this.backToMap();
      }
    } else {
      // sortedの中で、actorが死んでいる場合は、それを除く
      this.sorted = this.sorted.filter((a) => a !== actor);
      console.log(`${actor.name}は死んでしまった`);
    }

    this.index = (this.index + 1) % this.sorted.length;
    this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });
  }

  /**
   * @brief もといたマップシーンに戻る
   *
   * @return void
   */
  backToMap() {
    this.scene.stop(sceneKeys.ui);
    this.scene.stop(sceneKeys.battle);
    this.scene.wake(system.map);
  }

  /**
   * @brief 全キャラクターのHPを表示する
   *
   * @return void
   */
  logAllActorHP() {
    console.log('キャラクターのステータス');
    console.log('------------------------------------');
    this.sorted.forEach((actor) => {
      console.log(`${actor.name} HP: ${actor.hp.current}`);
    });
    console.log('------------------------------------');
  }

  /**
   * @brief キャラクターの所属するグループを返す
   *
   * @param BattleActor キャラクター
   * @param BattleActor[][] 検索したいグループ
   *
   * @return BattleActor[] 所属するグループ
   */
  getGroup(actor: BattleActor, groups: BattleActor[][]): BattleActor[] {
    for (const group of groups) {
      if (group.includes(actor)) {
        return group;
      }
    }

    return [];
  }

  /**
   * @brief キャラクターの敵グループを返す
   *
   * @param BattleActor キャラクター
   * @param BattleActor[][] 検索したいグループ
   *
   * @return BattleActor[] 敵グループ
   */
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

    return [];
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

  /**
   * @brief キャラクターのHPの合計値を返す
   *
   * @param actors キャラクターの配列
   * @returns HPの合計値
   */
  getSumHp(actors: BattleActor[]): number {
    return actors
      .map((actor) => actor.hp.current)
      .reduce((sum, current) => sum + current);
  }
}
