import { GameObjects, Scene } from 'phaser';
import { H, W } from 'functions/DOM/windowInfo';
import { sceneKeys } from 'scenes/sceneKeys';
import logo from '@/images/titleimage.jpg';

import buttonFrame from '@/images/button/button_frame.png';
import buttonFrameDark from '@/images/button/button_frame_dark.png';
import buttonOnClick from '@/images/button/button_onClick.png';

export class Title extends Scene {
  private backgroundColor: string = '#111111';
  private button?: GameObjects.Image;

  constructor() {
    super({ key: sceneKeys.title });
  }

  preload() {
    this.load.image('logo', logo);
    this.load.image('button', buttonFrame);
    this.load.image('button_onhover', buttonFrameDark);
    this.load.image('button_onclick', buttonOnClick);
  }

  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    const { height, width } = this.sys.game.canvas;

    this.cameras.main.setBackgroundColor(this.backgroundColor);

    this.add
      .image(W() / 2, H() / 2, 'logo')
      .setScale(0.8)
      .setOrigin(0.5);

    this.time.addEvent({
      delay: 3000,
      callback: () => {
        // 座標の中心を指定
        this.button = this.add.image(0, 0, 'button');
        this.button.setPosition(width / 2, height / 2);
        this.button?.setInteractive();
        // ボタンにカーソルが乗った時
        this.button?.on('pointerover', () => {
          this.button?.setTexture('button_onhover');
        });

        // カーソルがボタンから離れた時
        this.button?.on('pointerout', () => {
          this.button?.setTexture('button');
        });

        // クリックした時
        this.button?.on('pointerdown', () => {
          this.startNextScene();
        });

        const space = this.input.keyboard.addKey('SPACE').on('down', () => {
          this.button?.setTexture('button_onhover');
          setTimeout(() => {
            this.startNextScene();
          }, 100);
        });
      },
      callbackScope: this,
    });
  }

  startNextScene() {
    this.scene.start(sceneKeys.prologue);
  }

  // update() {
  //   this.flash++;
  //   if (this.flash % 2 == 0) {
  //     this.cameras.main.setBackgroundColor(this.backgroundColor);
  //   } else {
  //     this.cameras.main.setBackgroundColor(this.backgroundColor2);
  //   }
  // }
}
