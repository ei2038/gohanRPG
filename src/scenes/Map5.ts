import { enemy } from 'enemies';
import { sceneKeys } from './sceneKeys';
import { json, system } from 'index';
import { Map_TPL } from './Map.tpl';
import Ate from '@/assets/characters/static/boss/ate.png';
import Bte from '@/assets/characters/static/boss/bte.png';
import Melcine from '@/assets/characters/static/boss/melcine.png';
import Eleca from '@/assets/characters/static/boss/eleca.png';
import Obc from '@/assets/characters/static/boss/obc.png';
import { warp0 } from 'timelineWords/timelineWords';
import { mough, pouler, shiden } from 'friends';
import {
  explanation5,
  warpAte,
  warpBte,
  warpEleca,
  warpMelcine,
  warpObc,
  backAte,
  backBte,
  backEleca,
  backMelcine,
  backObc,
  goReAte,
  goReBte,
  goReEleca,
  goReMelcine,
  goObc,
  startAte,
  startBte,
  startEleca,
  startMelcine,
  beforeObcBattle,
  finalDakahu,
} from 'timelineWords/timelineWords5';
import { reAfterBossBattles } from 'timelineWords/afterBossBattles';

export class Map5 extends Map_TPL {
  constructor() {
    super(json[5], sceneKeys.map5);
  }
  preload() {
    super.preload();
    super.setnpcimage('Shiden', 1, shiden.spriteSrc);
    super.setnpcimage('Pouler', 1, pouler.spriteSrc);
    super.setnpcimage('Mough', 1, mough.spriteSrc);
    super.setnpcimage('dakahu', 0);
    this.loadBossimage('Ate', Ate);
    this.loadBossimage('Bte', Bte);
    this.loadBossimage('Melcine', Melcine);
    this.loadBossimage('Eleca', Eleca);
    this.loadBossimage('Obc', Obc);
  }
  create() {
    super.create();
    if (!system.isBossKilled.get('reAte')) this.createBoss(8, 35, 'Ate');
    else if (!system.isBossKilled.get('reBte')) this.createBoss(8, 5, 'Bte');
    else if (!system.isBossKilled.get('reMelcine')) this.createBoss(50, 5, 'Melcine');
    else if (!system.isBossKilled.get('reEleca')) this.createBoss(30, 4, 'Eleca');
    else if (!system.isBossKilled.get('reObc')) this.createBoss(48, 35, 'Obc');
    {
      super.makeNPC('dakahu', finalDakahu, 'right');
      super.setHint('explanation5', explanation5);
      super.setEvent('exit', warp0);
      super.setEvent('toboss1', warpAte);
      super.setEvent('toboss2', warpBte);
      super.setEvent('toboss3', warpMelcine);
      super.setEvent('toboss4', warpEleca);
      super.setEvent('tolastboss', warpObc);
      super.setEvent('spawnPoint1', backAte);
      super.setEvent('spawnPoint2', backBte);
      super.setEvent('spawnPoint3', backMelcine);
      super.setEvent('spawnPoint4', backEleca);
      super.setEvent('spawnPoint5', backObc);
      super.setEvent('goAte', goReAte, system.isBossKilled.get('reAte'));
      super.setEvent('startAte', startAte, system.isBossKilled.get('reAte'));
      super.setEvent('goBte', goReBte, system.isBossKilled.get('reBte'));
      super.setEvent('startBte', startBte, system.isBossKilled.get('reBte'));
      super.setEvent('goMelcine', goReMelcine, system.isBossKilled.get('reMelcine'));
      super.setEvent('startMelcine', startMelcine, system.isBossKilled.get('reMelcine'));
      super.setEvent('goEleca', goReEleca, system.isBossKilled.get('reEleca'));
      super.setEvent('startEleca', startEleca, system.isBossKilled.get('reEleca'));
      super.setEvent('goObc', goObc, system.isBossKilled.get('Obc'));
      super.setEvent('startObc', beforeObcBattle, system.isBossKilled.get('Obc'));
    }

    const { ate, bte, melcine, eleca } = enemy;

    for (let i = 0; i < 5; i++) {
      ate;
      bte;
      melcine;
      eleca;
    }

    ate.beHealed(ate.hp.max);
    bte.beHealed(bte.hp.max);
    melcine.beHealed(melcine.hp.max);
    eleca.beHealed(eleca.hp.max);
  }
  public update(_time: number, delta: number): void {
    if (system.isBossBattleWin) {
      system.isBossBattleWin = false;
      system.isBossBattle = false;
      const bossName = system.boss?.name;

      if (!bossName) return;
      this.scene.launch(sceneKeys.timelinePlayer, {
        anotherScene: this,
        timelineData: reAfterBossBattles.get(bossName),
      });
    } else {
      super.update(_time, delta);
    }
  }
  public createBoss(x: number, y: number, boss: string) {
    if (boss == 'Ate') this.setBoss(x, y, boss, false, 0.5, true);
    if (boss === 'Bte') this.setBoss(x, y, boss, false, 0.5, true);
    if (boss === 'Melcine') this.setBoss(x, y, boss, false, 0.25, true);
    if (boss === 'Eleca') this.setBoss(x, y, boss, false, 0.5, true);
    if (boss === 'Obc') this.setBoss(x, y, boss, false, 0.25, true);
  }
}
