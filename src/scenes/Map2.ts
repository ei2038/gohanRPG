import { sceneKeys } from './sceneKeys';
import { json, system } from 'index';
import { Map_TPL } from './Map.tpl';
import Bte from '@/assets/characters/static/boss/bte.png';
import { warp0 } from 'timelineWords/timelineWords';
import {
  Aries,
  Taurus,
  Gemini,
  Cancer,
  Leo,
  Virgo,
  Libra,
  Scorpio,
  Sagittarius,
  Capricorn,
  Aquarius,
  Pisces,
  Ophiuchus,
  AriesWarp,
  TaurusWarp,
  GeminiWarp,
  CancerWarp,
  LeoWarp,
  VirgoWarp,
  LibraWarp,
  ScorpioWarp,
  SagittariusWarp,
  CapricornWarp,
  AquariusWarp,
  PiscesWarp,
  reAriesWarp,
  reTaurusWarp,
  reGeminiWarp,
  reCancerWarp,
  reLeoWarp,
  reVirgoWarp,
  reLibraWarp,
  reScorpioWarp,
  reSagittariusWarp,
  reCapricornWarp,
  reAquariusWarp,
  rePiscesWarp,
  OphiuchusWarp,
  reOphiuchusWarp,
  meetShiden,
  explanation2,
  goBte,
  beforeBteBattle,
} from 'timelineWords/timelineWords2';
import { shiden } from 'friends';
export class Map2 extends Map_TPL {
  public stars: Array<string> = [
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn',
    'Aquarius',
    'Pisces',
  ];
  public count: number = 0;
  constructor() {
    super(json[2], sceneKeys.map2);
  }
  preload() {
    super.preload();
    super.setnpcimage('Shiden', 1, shiden.spriteSrc);
    this.loadBossimage('Bte', Bte);
  }
  create() {
    super.create();
    //sets
    {
      this.setBoss(7, 18, 'Bte', system.isBossKilled.get('Bte'));
      super.setEvent('exit', warp0);
      super.makeNPC(
        'Shiden',
        meetShiden,
        'down',
        system.isExistActorInParty(shiden.name),
      );
      super.setEvent('meet2', meetShiden, system.isExistActorInParty(shiden.name));
      super.setHint('explanation2', explanation2);
      super.setHint('Aries', Aries);
      super.setHint('Taurus', Taurus);
      super.setHint('Gemini', Gemini);
      super.setHint('Cancer', Cancer);
      super.setHint('Leo', Leo);
      super.setHint('Virgo', Virgo);
      super.setHint('Libra', Libra);
      super.setHint('Scorpio', Scorpio);
      super.setHint('Sagittarius', Sagittarius);
      super.setHint('Capricorn', Capricorn);
      super.setHint('Aquarius', Aquarius);
      super.setHint('Pisces', Pisces);
      super.setHint('Ophiuchus', Ophiuchus);
      super.setHint('Arieswarp', AriesWarp);
      super.setHint('Tauruswarp', TaurusWarp);
      super.setHint('Geminiwarp', GeminiWarp);
      super.setHint('Cancerwarp', CancerWarp);
      super.setHint('Leowarp', LeoWarp);
      super.setHint('Virgowarp', VirgoWarp);
      super.setHint('Librawarp', LibraWarp);
      super.setHint('Scorpiowarp', ScorpioWarp);
      super.setHint('Sagittariuswarp', SagittariusWarp);
      super.setHint('Capricornwarp', CapricornWarp);
      super.setHint('Aquariuswarp', AquariusWarp);
      super.setHint('Pisceswarp', PiscesWarp);
      super.setHint('Ophiuchuswarp', OphiuchusWarp);
      super.setHint('reArieswarp', reAriesWarp);
      super.setHint('reTauruswarp', reTaurusWarp);
      super.setHint('reGeminiwarp', reGeminiWarp);
      super.setHint('reCancerwarp', reCancerWarp);
      super.setHint('reLeowarp', reLeoWarp);
      super.setHint('reVirgowarp', reVirgoWarp);
      super.setHint('reLibrawarp', reLibraWarp);
      super.setHint('reScorpiowarp', reScorpioWarp);
      super.setHint('reSagittariuswarp', reSagittariusWarp);
      super.setHint('reCapricornwarp', reCapricornWarp);
      super.setHint('reAquariuswarp', reAquariusWarp);
      super.setHint('rePisceswarp', rePiscesWarp);
      super.setHint('reOphiuchuswarp', reOphiuchusWarp);
      super.setEvent('goBte', goBte, system.isBossKilled.get('Bte'));
      super.setEvent('beforeBte', beforeBteBattle, system.isBossKilled.get('Bte'));
    }
  }
  public warpPlayerByStar(starName: string, x: number, y: number) {
    if (this.count === -1) {
      this.count = 0;
      this.player?.moveTilePos(7, 12);
      return;
    }
    if (starName !== this.stars[this.count]) {
      this.count = -1;
    } else {
      ++this.count;
      this.count %= 12;
    }
    this.player?.moveTilePos(x, y);
  }
  public update(_time: number, delta: number): void {
    super.update(_time, delta);
  }
}
