import { BattleActor } from 'classes/BattleActor';
import { sceneKeys } from 'scenes/sceneKeys';
import { allInitStatus } from 'functions/generalPurpose/allInitStatus';

import slime from '@/assets/characters/static/slime.png';
import tb1a from '@/assets/characters/static/mushroom.png';
import batman from '@/assets/characters/static/batman.png';
import abTree from '@/assets/characters/static/tree.png';
import hangedBear from '@/assets/characters/static/bear.png';

import showerHead from '@/assets/characters/static/axotla.png';
import sabagiza from '@/assets/characters/static/magea.png';
import tsuchinoko from '@/assets/characters/static/snakea.png';
import bloodScorpion from '@/assets/characters/static/scorpiona.png';
import formerBoss from '@/assets/characters/static/dragon2.png';

import fishEgg from '@/assets/characters/static/egga.png';
import konjacJelly from '@/assets/characters/static/jellyfish.png';
import arrestLock from '@/assets/characters/static/mimicb.png';
import entrance from '@/assets/characters/static/footballFish.png';
import riverDam from '@/assets/characters/static/walla.png';

import cutlery from '@/assets/characters/static/cavityMana.png';
import friedChiken from '@/assets/characters/static/chikena.png';
import burn from '@/assets/characters/static/skeletonb.png';
import yakitori from '@/assets/characters/static/griffona.png';
import enken from '@/assets/characters/static/kerberos.png';

import ate from '@/assets/characters/static/boss/ate.png';
import bte from '@/assets/characters/static/boss/bte.png';
import melcine from '@/assets/characters/static/boss/melcine.png';
import eleca from '@/assets/characters/static/boss/eleca.png';
import obc from '@/assets/characters/static/boss/obc.png';

import {
  skills,
  stateSkills,
  buffSkills,
  ateSkills,
  bteSkills,
  melcineSkills,
  elecaSkills,
  obcSkills,
} from 'skills';

export const enemy = {
  slime: new BattleActor({
    name: 'スライム',
    spriteSrc: slime,
    hp: { current: 1, max: 1 },
    mp: { current: 1, max: 1 },
    atk: 1,
    def: 1,
    speed: 1,
    startLevel: 1,
    initSkills: [skills[0]],
  }),
  tb1a: new BattleActor({
    name: 'TB1-a',
    spriteSrc: tb1a,
    hp: { current: 3, max: 3 },
    mp: { current: 10, max: 10 },
    atk: 2,
    def: 2,
    speed: 3,
    startLevel: 1,
    initSkills: [stateSkills[0], buffSkills[1]],
  }),
  batman: new BattleActor({
    name: '博っ賭マン',
    spriteSrc: batman,
    hp: { current: 4, max: 4 },
    mp: { current: 10, max: 10 },
    atk: 2,
    def: 4,
    speed: 1,
    startLevel: 2,
    initSkills: [skills[1], skills[2], buffSkills[1]],
  }),
  abTree: new BattleActor({
    name: '外見二分木',
    spriteSrc: abTree,
    hp: { current: 4, max: 4 },
    mp: { current: 10, max: 10 },
    atk: 3,
    def: 2,
    speed: 3,
    startLevel: 2,
    initSkills: [skills[3], skills[4], stateSkills[1], stateSkills[2]],
  }),
  hangedBear: new BattleActor({
    name: '†ハングドベア†',
    spriteSrc: hangedBear,
    hp: { current: 6, max: 6 },
    mp: { current: 15, max: 15 },
    atk: 4,
    def: 3,
    speed: 3,
    startLevel: 3,
    initSkills: [skills[5], skills[6], stateSkills[3], stateSkills[4]],
  }),

  // ============================================-
  showerHead: new BattleActor({
    name: 'シャワーヘッド',
    spriteSrc: showerHead,
    hp: { current: 8, max: 8 },
    mp: { current: 20, max: 20 },
    atk: 3,
    def: 3,
    speed: 2,
    startLevel: 3,
    initSkills: [skills[0]],
  }),
  sabagiza: new BattleActor({
    name: 'サバギザ',
    spriteSrc: sabagiza,
    hp: { current: 6, max: 6 },
    mp: { current: 25, max: 25 },
    atk: 6,
    def: 2,
    speed: 5,
    startLevel: 4,
    initSkills: [skills[7], stateSkills[1]],
  }),
  tsuchinoko: new BattleActor({
    name: 'その辺のツチノコ',
    spriteSrc: tsuchinoko,
    hp: { current: 7, max: 7 },
    mp: { current: 20, max: 20 },
    atk: 3,
    def: 2,
    speed: 8,
    startLevel: 4,
    initSkills: [skills[0], skills[2], stateSkills[5]],
  }),
  bloodScorpion: new BattleActor({
    name: 'けっせんサソリ',
    spriteSrc: bloodScorpion,
    hp: { current: 11, max: 11 },
    mp: { current: 20, max: 20 },
    atk: 4,
    def: 9,
    speed: 2,
    startLevel: 4,
    initSkills: [skills[8], stateSkills[6], stateSkills[7], buffSkills[1]],
  }),
  formerBoss: new BattleActor({
    name: '元ボス',
    spriteSrc: formerBoss,
    hp: { current: 10, max: 10 },
    mp: { current: 20, max: 20 },
    atk: 6,
    def: 6,
    speed: 3,
    startLevel: 5,
    initSkills: [skills[9], skills[10], stateSkills[8], buffSkills[0]],
  }),

  // ===========================================================
  fishEgg: new BattleActor({
    name: '魚卵',
    spriteSrc: fishEgg,
    hp: { current: 5, max: 5 },
    mp: { current: 30, max: 30 },
    atk: 4,
    def: 4,
    speed: 4,
    startLevel: 4,
    initSkills: [skills[0]],
  }),
  konjacJelly: new BattleActor({
    name: 'こんにゃくゼリーP',
    spriteSrc: konjacJelly,
    hp: { current: 4, max: 4 },
    mp: { current: 30, max: 30 },
    atk: 3,
    def: 4,
    speed: 5,
    startLevel: 4,
    initSkills: [stateSkills[9], buffSkills[1]],
  }),
  arrestLock: new BattleActor({
    name: '軟禁錠',
    spriteSrc: arrestLock,
    hp: { current: 6, max: 6 },
    mp: { current: 30, max: 30 },
    atk: 4,
    def: 6,
    speed: 3,
    startLevel: 5,
    initSkills: [skills[11], skills[12], skills[13]],
  }),
  entrance: new BattleActor({
    name: '入り口',
    spriteSrc: entrance,
    hp: { current: 8, max: 8 },
    mp: { current: 30, max: 30 },
    atk: 7,
    def: 4,
    speed: 5,
    startLevel: 6,
    initSkills: [skills[14], skills[15], stateSkills[10], stateSkills[11]],
  }),
  riverDam: new BattleActor({
    name: '都田川ダム',
    spriteSrc: riverDam,
    hp: { current: 10, max: 10 },
    mp: { current: 30, max: 30 },
    atk: 5,
    def: 9,
    speed: 2,
    startLevel: 8,
    initSkills: [skills[16], skills[17], stateSkills[12], buffSkills[1]],
  }),

  // ==================================================
  cutlery: new BattleActor({
    name: 'カトラリー',
    spriteSrc: cutlery,
    hp: { current: 4, max: 4 },
    mp: { current: 40, max: 40 },
    atk: 4,
    def: 2,
    speed: 6,
    startLevel: 6,
    initSkills: [skills[0]],
  }),
  friedChiken: new BattleActor({
    name: 'からレドくん',
    spriteSrc: friedChiken,
    hp: { current: 6, max: 6 },
    mp: { current: 40, max: 40 },
    atk: 5,
    def: 5,
    speed: 7,
    startLevel: 8,
    initSkills: [skills[18], buffSkills[2]],
  }),
  burn: new BattleActor({
    name: 'おおやけど',
    spriteSrc: burn,
    hp: { current: 9, max: 9 },
    mp: { current: 40, max: 40 },
    atk: 6,
    def: 8,
    speed: 3,
    startLevel: 9,
    initSkills: [skills[19], stateSkills[13], buffSkills[1]],
  }),
  yakitori: new BattleActor({
    name: 'Yakitori',
    spriteSrc: yakitori,
    hp: { current: 7, max: 7 },
    mp: { current: 40, max: 40 },
    atk: 5,
    def: 2,
    speed: 10,
    startLevel: 9,
    initSkills: [skills[20], skills[21], skills[22], buffSkills[3]],
  }),
  enken: new BattleActor({
    name: '炎犬さん',
    spriteSrc: enken,
    hp: { current: 12, max: 12 },
    mp: { current: 40, max: 40 },
    atk: 8,
    def: 8,
    speed: 8,
    startLevel: 12,
    initSkills: [skills[23], skills[24], skills[25], buffSkills[4]],
  }),

  // ==================================================
  ate: new BattleActor({
    name: 'エーテ',
    spriteSrc: ate,
    hp: { current: 25, max: 25 },
    mp: { current: 50, max: 50 },
    atk: 12,
    def: 8,
    speed: 4,
    startLevel: 5,
    initSkills: ateSkills,
  }),

  bte: new BattleActor({
    name: 'ビーテ',
    spriteSrc: bte,
    hp: { current: 30, max: 30 },
    mp: { current: 50, max: 50 },
    atk: 15,
    def: 10,
    speed: 3,
    startLevel: 8,
    initSkills: bteSkills,
  }),

  melcine: new BattleActor({
    name: 'メルシン',
    spriteSrc: melcine,
    hp: { current: 25, max: 25 },
    mp: { current: 50, max: 50 },
    atk: 10,
    def: 15,
    speed: 7,
    startLevel: 11,
    initSkills: melcineSkills,
  }),

  eleca: new BattleActor({
    name: 'エレカ',
    spriteSrc: eleca,
    hp: { current: 50, max: 50 },
    mp: { current: 50, max: 50 },
    atk: 20,
    def: 20,
    speed: 20,
    startLevel: 20,
    initSkills: elecaSkills,
  }),

  obc: new BattleActor({
    name: 'OBC',
    spriteSrc: obc,
    hp: { current: 80, max: 80 },
    mp: { current: 50, max: 50 },
    atk: 25,
    def: 25,
    speed: 15,
    startLevel: 23,
    initSkills: obcSkills,
  }),
};

export const mapEnemies = new Map<string, BattleActor[]>([
  [sceneKeys.map0, []],
  [
    sceneKeys.map1,
    [enemy.slime, enemy.tb1a, enemy.batman, enemy.abTree, enemy.hangedBear],
  ],
  [
    sceneKeys.map2,
    [
      enemy.showerHead,
      enemy.sabagiza,
      enemy.tsuchinoko,
      enemy.bloodScorpion,
      enemy.formerBoss,
    ],
  ],
  [
    sceneKeys.map3,
    [enemy.fishEgg, enemy.konjacJelly, enemy.arrestLock, enemy.entrance, enemy.riverDam],
  ],
  [
    sceneKeys.map4,
    [enemy.cutlery, enemy.friedChiken, enemy.burn, enemy.yakitori, enemy.enken],
  ],
  [sceneKeys.map5, []],
]);

export const bossEnemies: BattleActor[] = [
  enemy.ate,
  enemy.bte,
  enemy.melcine,
  enemy.eleca,
  enemy.obc,
];

export const getGhost = (): BattleActor => allInitStatus('ghost');

export const getEnemies = (key: string): BattleActor[] => {
  return mapEnemies.get(key) || [getGhost()];
};
