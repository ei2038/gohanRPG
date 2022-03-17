import { sceneKeys } from './sceneKeys';
import { json } from 'index';
import { Map } from './Map.tpl';

export class Map1 extends Map {
  constructor() {
    super(json[0], sceneKeys.map1);
  }

  create() {
    super.create();
    // enterキーでシーンを切り替える
    const enter = this.input.keyboard.addKey('ENTER');
    enter.on('down', () => {
      // this.scene.switch(sceneKeys.map2);
      this.startMap(sceneKeys.map2);
    });

    // イベントの位置を取得
    // const events = this.tileMap?.filterTiles((tile) => {});
  }

  public update(_time: number, delta: number): void {
    super.update(_time, delta);
  }
}
