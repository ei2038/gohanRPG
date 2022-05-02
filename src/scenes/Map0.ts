import { sceneKeys } from './sceneKeys';
import { json, system } from 'index';
import { Map_TPL } from './Map.tpl';
import {
  warp1,
  warp2,
  warp3,
  warp4,
  warp5,
  explanation0,
  explanation,
  stopl,
  stopr,
  afterDakahu,
  stoper,
  beJK,
  beBijinesuman,
  beEruhu,
  beKisi,
  beTyuubou,
  beSyoujo,
  beMajo,
  beRoujin,
  tutorial1,
} from 'timelineWords/timelineWords0';

export class Map0 extends Map_TPL {
  constructor() {
    super(json[0], sceneKeys.map0);
  }
  preload() {
    super.preload();
    super.setnpcimage('notMob', 0);
    super.setnpcimage('notMob2', 0);
    super.setnpcimage('notMob3', 0);
    super.setnpcimage('notMob4', 0);
    super.setnpcimage('Bijinesuman', 1);
    super.setnpcimage('JK1', 2);
    super.setnpcimage('JK2', 3);
    super.setnpcimage('Tyuubou', 4);
    super.setnpcimage('Eruhu', 5);
    super.setnpcimage('Kisi', 6);
    super.setnpcimage('Majo', 7);
    super.setnpcimage('Syoujo', 8);
    super.setnpcimage('Roujin', 9);
  }
  create() {
    super.create();
    super.makeNPC('JK1', beJK, 'right');
    super.makeNPC('JK2', beJK, 'left');
    super.makeNPC('Bijinesuman', beBijinesuman);
    super.makeNPC('Eruhu', beEruhu);
    super.makeNPC('Kisi', beKisi);
    super.makeNPC('Tyuubou', beTyuubou, 'up');
    super.makeNPC('Syoujo', beSyoujo, 'up');
    super.makeNPC('Majo', beMajo);
    super.makeNPC('Roujin', beRoujin, 'left');
    super.makeNPC('notMob', afterDakahu);
    super.makeNPC('stoper1', stoper);
    super.makeNPC('stoper2', stoper);
    super.makeNPC('stoper3', stoper);
    super.makeNPC('stoper4', stoper);
    super.makeNPC('stoper5', stoper);
    super.makeNPC('stoper6', stoper);
    super.makeNPC('stoper7', stoper);
    super.makeNPC('stoper8', stoper);
    super.setEvent('goStage1', warp1);
    super.setEvent('goStage2', warp2);
    super.setEvent('goStage3', warp3);
    super.setEvent('goStage4', warp4);
    super.setHint('goStage5', warp5);
    super.setHint('first', explanation0);
    super.setEvent('startMob', explanation);
    super.setEvent('stopl', stopl);
    super.setEvent('stopr', stopr);
    this.scene.launch(sceneKeys.timelinePlayer, {
      anotherScene: this,
      timelineData: tutorial1,
    });

    // イベントの位置を取得
    // const events = this.tileMap?.filterTiles((tile) => {});
  }

  public update(_time: number, delta: number): void {
    super.update(_time, delta);
  }
}
