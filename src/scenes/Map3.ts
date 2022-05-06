import { sceneKeys } from './sceneKeys';
import { json, system } from 'index';
import { Map_TPL } from './Map.tpl';
import Mel from '@/assets/characters/static/boss/melcine.png';
import { warp0 } from 'timelineWords/timelineWords';
import {
  restart0,
  restart1,
  restart2,
  II,
  III,
  IV,
  reI,
  reII,
  reIII,
  warpstart,
  explanation3,
  addPouler,
  goMelcine,
  beforeMelcineBattle,
  //afterMelcineBattle,
} from 'timelineWords/timelineWords3';
import { pouler, shiden } from 'friends';
import { dir1, dir2, dir3 } from '../timelineWords/timelineWords3';

export class Map3 extends Map_TPL {
  constructor() {
    super(json[3], sceneKeys.map3);
  }
  preload() {
    super.preload();
    super.setnpcimage('Shiden', 1, shiden.spriteSrc);
    super.setnpcimage('Pouler', 1, pouler.spriteSrc);
    this.loadBossimage('Mel', Mel);
  }
  create() {
    super.create();
    {
      this.setBoss(51, 24, 'Mel', system.isBossKilled.get('Melcine'), 0.25);
      super.setEvent('exit', warp0);
      super.setHint('explanation3', explanation3);
      super.setEvent('add3', addPouler, system.isExistActorInParty(pouler.name));
      super.setEvent('goMelcine', goMelcine, system.isBossKilled.get('Melcine'));
      super.setEvent(
        'beforeMelcine',
        beforeMelcineBattle,
        system.isBossKilled.get('Melcine'),
      );
      super.setEvent('restart', restart0);
      super.setEvent('restart1', restart1);
      super.setEvent('restart2', restart2);
      super.setHint('woop', II);
      super.setHint('woop1', III);
      super.setHint('woop2', IV);
      super.setHint('woopto1', reI);
      super.setHint('woop1to2', reII);
      super.setHint('wooptoboss', reIII);
      super.setHint('woopstart', warpstart);
      super.setHint('roadhint1', dir1);
      super.setHint('roadhint2', dir2);
      super.setHint('roadhint3', dir3);
    }
  }

  public update(_time: number, delta: number): void {
    super.update(_time, delta);
  }
}
