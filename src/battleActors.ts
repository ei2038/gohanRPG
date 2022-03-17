import { BattleActor, Level, LimitValue } from 'classes/BattleActor';
import { sceneKeys } from 'scenes/sceneKeys';

const level1: Level = { current: 1, exp: 0, toNext: 5, max: 100 };
const initHp: LimitValue = { current: 5, max: 5 };
const initMp: LimitValue = { current: 10, max: 10 };
const initAtk: number = 5;
const initDef: number = 5;
const initSpeed: number = 5;

export const allInitStatus = (name: string): BattleActor =>
  new BattleActor(name, level1, initHp, initMp, initAtk, initDef, initSpeed);

export const playersParty: BattleActor[] = [
  allInitStatus('player'),
  allInitStatus('sub1'),
];

export const enemies = new Map<string, BattleActor[]>([
  [
    sceneKeys.map1,
    [
      new BattleActor('enemy1', level1, initHp, initMp, initAtk, initDef, initSpeed),
      new BattleActor('enemy2', level1, initHp, initMp, initAtk, initDef, initSpeed),
    ],
  ],
  [
    sceneKeys.map2,
    [new BattleActor('enemy1', level1, initHp, initMp, initAtk, initDef, initSpeed)],
  ],
]);

export const getGhost = (): BattleActor => allInitStatus('ghost');

export const getEnemies = (key: string): BattleActor[] => {
  return enemies.get(key) || [getGhost()];
};
