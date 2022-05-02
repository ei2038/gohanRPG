import { afterElecaBattle } from './timelineWords4';
import { afterMelcineBattle } from './timelineWords3';
import { afterBteBattle } from './timelineWords2';
import { Timelines } from 'classes/Timelines';
import { bossEnemies } from 'enemies';
import { afterAteBattle } from './timelineWords1';
import { afterObcBattle, endAte, endBte, endEleca, endMelcine } from './timelineWords5';

export const afterBossBattles = new Map<string, Timelines>([
  [bossEnemies[0].name, afterAteBattle],
  [bossEnemies[1].name, afterBteBattle],
  [bossEnemies[2].name, afterMelcineBattle],
  [bossEnemies[3].name, afterElecaBattle],
]);

export const reAfterBossBattles = new Map<string, Timelines>([
  [bossEnemies[0].name, endAte],
  [bossEnemies[1].name, endBte],
  [bossEnemies[2].name, endMelcine],
  [bossEnemies[3].name, endEleca],
  [bossEnemies[4].name, afterObcBattle],
]);
