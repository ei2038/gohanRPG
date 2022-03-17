import { json } from 'index';
import { Map } from './Map.tpl';
import { sceneKeys } from './sceneKeys';

export class Map2 extends Map {
  constructor() {
    super(json[1], sceneKeys.map2);
  }

  create() {
    // enterキーでシーンを切り替える
    const enter = this.input.keyboard.addKey('ENTER');
    enter.on('down', () => {
      // this.scene.switch(sceneKeys.map1);
      this.startMap(sceneKeys.map1);
    });
    super.create();
  }
}
