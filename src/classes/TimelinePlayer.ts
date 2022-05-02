import { dialogButton, Timeline, MotionEventProps } from './Timeline';
import { Choice } from './Choice';
import { DialogBox, DialogBoxConfig } from './DialogBox';
import { Scene } from 'phaser';
import { tileSize } from 'scenes/Map.tpl';
import { H, W } from 'functions/DOM/windowInfo';
import { Timelines } from './Timelines';
import { sceneKeys } from 'scenes/sceneKeys';
import { system } from 'index';
import { Map_TPL } from 'scenes/Map.tpl';
import { allMap } from './Timeline';
import { BattleActor } from './BattleActor';
import { Map2 } from 'scenes/Map2';
import { Map5 } from 'scenes/Map5';
import {
  fixKillBossByName,
  removeEventByXYs,
  removeObjectByName,
  setEventByXY,
  changeNpcDir,
  setNpc,
  removeNpcByName,
  removeBossByName,
  movePlayerByDir,
  displayBubble,
  displayBossBubble,
  removeBubble,
  warpPlayerByXY,
  moveBattleBoss,
  moveBattle,
  zoomUp,
  zoomDown,
  warpPlayerByStar,
  createBoss,
  talkNPC,
  changeEncountFlag,
} from 'timelineWords/events';
import { DEBUG } from 'functions/generalPurpose/debugLog';

export class TimelinePlayer extends Scene {
  private dialogBox?: DialogBox;
  private textStyle: Phaser.Types.GameObjects.Text.TextStyle = {};
  private backgroundLayer?: Phaser.GameObjects.Container;
  private foregroundLayer?: Phaser.GameObjects.Container;
  private uiLayer?: Phaser.GameObjects.Container;
  private hitArea?: Phaser.GameObjects.Zone;
  private timeline?: Timeline;
  private timelineIndex = 0;
  private isTextShow: boolean = true;
  private anotherScene?: Map_TPL;
  private timelineData?: Timelines;
  private specID?: string;
  private textBoxPadding = {
    x: 10,
    y: 10,
    left: 5,
    right: 5,
    top: 5,
    bottom: 5,
    allDir: 10,
  };
  constructor() {
    super({ key: sceneKeys.timelinePlayer });
  }

  init(data: { anotherScene: allMap; timelineData: Timelines; specID?: string }) {
    if (!data.anotherScene || !data.timelineData) {
      this.scene.stop();
      return;
    }
    // マップシーンのキー操作を止めるため
    data.anotherScene.scene.pause();

    this.anotherScene = data.anotherScene;
    this.timelineData = data.timelineData;
    this.specID = data.specID;

    // 背景レイヤー・前景レイヤー・UIレイヤーをコンテナを使って表現
    this.backgroundLayer = this.add.container(0, 0);
    this.foregroundLayer = this.add.container(0, 0);
    this.uiLayer = this.add.container(0, 0);
  }

  preload() {}
  create() {
    const space = this.scene.scene.input.keyboard.addKey('SPACE').on('down', () => {
      this.isTextShow = true;
    });

    const { width, height } = this.game.canvas;
    this.hitArea = new Phaser.GameObjects.Zone(
      this,
      width / 2,
      height / 2,
      width,
      height,
    );
    this.hitArea.setInteractive();

    this.hitArea.on('pointerdown', () => {
      this.isTextShow = true;
    });
    this.uiLayer?.add(this.hitArea);

    this.createDialogBox(
      this.cameras.main.scrollX + W() / 2,
      this.cameras.main.scrollY + H() - H() / 3 / 2 - tileSize,
      W() - tileSize * 2,
      H() / 3,
    );
    if (!this.dialogBox) return;
    // ダイアログの表示
    this.add.existing(this.dialogBox);

    this.specTimeline({ timelineID: this.specID });
    this.timelineIndex = 0;
  }

  update() {
    if (!this.timeline) return;
    if (!this.dialogBox) return;
    if (!this.anotherScene) return;
    if (this.timelineIndex >= this.timeline.length) {
      return;
    }
    // 文字があるなら、キーが押されるまで待つ
    if (!this.isTextShow) {
      return;
    }
    // タイムラインのイベントを取得してから、timelineIndexをインクリメント
    const timelineEvent = this.timeline[this.timelineIndex++];
    DEBUG.log(this.anotherScene);
    DEBUG.log(timelineEvent);

    switch (timelineEvent.type) {
      case 'dialog': // ダイアログイベント
        if (timelineEvent.actorName) {
          // actorNameが設定されていたら名前を表示
          this.dialogBox.setActorNameText(timelineEvent.actorName);
        } else {
          // actorNameが設定されていなかったら名前を非表示
          this.dialogBox.clearActorNameText();
        }
        this.dialogBox.setText(timelineEvent.text, true);
        this.isTextShow = false;
        break;
      case 'event': // イベント追加
        this.startevent(timelineEvent.event, timelineEvent.contents);
        break;
      case 'setBackgroundImage': // 背景設定イベント
        this.setBackgroundImage(timelineEvent.x, timelineEvent.y, timelineEvent.key);
        break;

      case 'addForeground': // 前景追加イベント
        this.addForeground(timelineEvent.x, timelineEvent.y, timelineEvent.key);
        break;

      case 'clearForeground': // 前景クリアイベント
        this.clearForeground();
        break;

      case 'timelineTransition': // タイムライン遷移イベント
        //指定のタイムラインを実行する
        this.specTimeline({ timelineID: timelineEvent.timelineID });
        break;

      case 'sceneTransition': // シーン遷移イベント
        // 指定のシーンに遷移する
        this.dialogBox.clearDialogBox();
        this.timelineIndex = -1;
        this.anotherScene.scene.switch(timelineEvent.key);
        this.scene.stop();
        break;
      case 'choice': // 選択肢イベント
        this.setChoiceButtons(timelineEvent.choices);
        break;
      case 'setBackgroundColor':
        this.setBackgroundColor(timelineEvent.color);
        break;
      case 'meetFriend': // 仲間出会いイベント
        this.addFriend(timelineEvent.actor);
        break;
      case 'switch':
        this.dialogBox.clearDialogBox();
        this.timelineIndex = -1;
        // マップシーンのキー操作を受け付けるようにする
        this.anotherScene.scene.resume();
        system.map = timelineEvent.scene;
        DEBUG.log(system.map);
        this.anotherScene.scene.switch(timelineEvent.scene);
        this.scene.stop();
        break;
      case 'endTimeline':
        this.dialogBox.clearDialogBox();
        this.timelineIndex = -1;
        // マップシーンのキー操作を受け付けるようにする
        this.anotherScene.scene.resume();
        // timelinePlayerシーンを止める
        this.scene.stop();
        break;
      case 'isAllBossDead':
        if (
          system.isBossKilled.get('Ate') &&
          system.isBossKilled.get('Bte') &&
          system.isBossKilled.get('Melcine') &&
          system.isBossKilled.get('Eleca')
        ) {
          this.specTimeline({ timelineID: timelineEvent.timelineID });
        }
        break;
      default:
        break;
    }
  }
  private startevent(key: string, contents?: MotionEventProps) {
    DEBUG.log(key);
    switch (key) {
      case fixKillBossByName:
        if (contents === undefined) break;
        if (contents.name === undefined) break;
        this.anotherScene?.fixKillBossByName(contents.name);
      case removeEventByXYs:
        if (contents === undefined) break;
        if (contents.xy === undefined) break;
        this.anotherScene?.removeEventByXYs(contents.xy);
        break;
      case removeObjectByName:
        if (contents === undefined) break;
        if (contents.name === undefined) break;
        this.anotherScene?.removeObjectByName(contents.name);
        break;
      case removeBossByName:
        if (contents === undefined) break;
        if (contents.name === undefined) break;
        this.anotherScene?.removeBossByName(contents.name);
        break;
      case setEventByXY:
        if (contents === undefined) break;
        if (contents.name === undefined) break;
        if (contents.x === undefined) break;
        if (contents.y === undefined) break;
        if (contents.timeline === undefined) break;
        this.anotherScene?.setEventByXY(
          contents.name,
          contents.x,
          contents.y,
          contents.timeline,
          contents.setEventMap,
        );
        break;
      case changeNpcDir:
        if (contents === undefined) break;
        if (contents.name === undefined) break;
        if (contents.direction === undefined) break;
        this.anotherScene?.changeNpcDir(contents.name, contents.direction);
        break;
      case setNpc:
        if (contents === undefined) break;
        if (contents.name === undefined) break;
        if (contents.x === undefined) break;
        if (contents.y === undefined) break;
        this.anotherScene?.setNpc(
          contents.name,
          contents.x,
          contents.y,
          contents.timeline,
          contents.direction,
        );
        break;
      case removeNpcByName:
        if (contents === undefined) break;
        if (contents.name === undefined) break;
        this.anotherScene?.removeNpcByName(contents.name);
        break;
      case movePlayerByDir:
        if (contents === undefined) break;
        if (contents.direction === undefined) break;
        this.anotherScene?.movePlayerByDir(contents.direction);
        break;
      case displayBubble:
        if (contents === undefined) break;
        if (contents.name === undefined) break;
        if (contents.bubbleIndex === undefined) break;
        this.anotherScene?.displayBubble(contents.name, contents.bubbleIndex);
        break;
      case displayBossBubble:
        if (contents === undefined) break;
        if (contents.bubbleIndex === undefined) break;
        this.anotherScene?.displayBossBubble(contents.bubbleIndex, contents.flag);
        break;
      case removeBubble:
        this.anotherScene?.removeBubble();
        break;
      case warpPlayerByXY:
        if (contents === undefined) break;
        if (contents.x === undefined) break;
        if (contents.y === undefined) break;
        this.anotherScene?.warpPlayerByXY(contents.x, contents.y);
        break;
      case moveBattleBoss:
        if (contents === undefined) break;
        if (contents.battleActor === undefined) break;
        if (!this.anotherScene?.moveBattleBoss(contents.battleActor)) {
          this.dialogBox?.clearDialogBox();
          this.timelineIndex = -1;
          // マップシーンのキー操作を受け付けるようにする
          this.anotherScene?.scene.resume();
          // timelinePlayerシーンを止める
          this.scene.stop();
        }
        break;
      case moveBattle:
        this.anotherScene?.moveBattle();
        break;
      case zoomUp:
        this.anotherScene?.zoomUp();
        break;
      case zoomDown:
        this.anotherScene?.zoomDown();
        break;
      case warpPlayerByStar:
        if (contents === undefined) break;
        if (contents.name === undefined) break;
        if (contents.x === undefined) break;
        if (contents.y === undefined) break;
        if (this.anotherScene instanceof Map2)
          this.anotherScene?.warpPlayerByStar(contents.name, contents.x, contents.y);
        break;
      case createBoss:
        if (contents === undefined) break;
        if (contents.name === undefined) break;
        if (contents.x === undefined) break;
        if (contents.y === undefined) break;
        if (this.anotherScene instanceof Map5)
          this.anotherScene?.createBoss(contents.x, contents.y, contents.name);
        break;
      case talkNPC:
        this.anotherScene?.talkNPC();
        break;
      case changeEncountFlag:
    }
    // }
  }

  private addFriend(actor: BattleActor) {
    system.addPartyActor(actor);
  }

  // ダイアログの作成
  private createDialogBox(x: number, y: number, width: number, height: number) {
    // ダイアログボックスの設定
    const textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      fontFamily:
        '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
      fontSize: '24px',
      padding: this.textBoxPadding,
      wordWrap: { width: width - this.textBoxPadding.allDir, useAdvancedWrap: true }, // useAdvancedWrapをtrueにすることで日本語の折り返しが有効になる
    };
    const dialogBoxConfig: DialogBoxConfig = {
      x: 0,
      y: 0,
      width: width,
      height: height,
      padding: this.textBoxPadding.allDir,
      margin: 0,
      textStyle: textStyle,
      backGroundColor: 0x000000,
      frameColor: 0xffffff,
    };
    this.dialogBox = new DialogBox(this, dialogBoxConfig);
    this.dialogBox.x = x;
    this.dialogBox.y = y;
  }

  private specTimeline(data: any) {
    // this.scene.restart()の第1引数もしくは
    // this.scene.start()の第2引数に指定されたオブジェクトがdataに渡される
    const timelineID = data.timelineID || 'start';

    if (!this.timelineData) return;
    if (!(timelineID in this.timelineData)) {
      DEBUG.error(`[ERROR] タイムラインID[${timelineID}]は登録されていません`);
      // 登録されていないタイムラインIDが指定されていたらタイトルシーンに遷移する
      this.anotherScene?.scene.resume();
      this.scene.stop();
      return;
    }
    // タイムラインの指定
    this.timeline = this.timelineData[timelineID];
    this.timelineIndex = 0;
  }

  // 背景画像をセット
  private setBackgroundImage(x: number, y: number, texture: string) {
    if (!this.backgroundLayer) return;
    // 背景レイヤーの子を全て削除
    this.backgroundLayer.removeAll();
    // 背景画像のオブジェクトを作成
    const backgroundImage = new Phaser.GameObjects.Image(this, x, y, texture);
    // 背景レイヤーに画像オブジェクトを配置
    this.backgroundLayer.add(backgroundImage);
  }

  private setBackgroundColor(color: string) {
    if (!this.backgroundLayer) return;
    // 背景レイヤーの子を全て削除
    this.backgroundLayer.removeAll();
    this.cameras.main.setBackgroundColor(color);
  }

  // 前景画像を追加
  private addForeground(x: number, y: number, texture: string) {
    if (!this.foregroundLayer) return;
    // 前景画像のオブジェクトを作成
    const foregroundImage = new Phaser.GameObjects.Image(this, x, y, texture);
    // 前景レイヤーに画像オブジェクトを配置
    this.foregroundLayer.add(foregroundImage);
  }

  // 前景をクリア
  private clearForeground() {
    if (!this.foregroundLayer) return;
    // 前景レイヤーの子を全て削除
    this.foregroundLayer.removeAll();
  }

  // 選択肢ボタンをセット
  private setChoiceButtons(choices: Choice[]) {
    if (choices.length === 0) {
      return;
    }
    if (!this.dialogBox) return;

    // hitAreaのクリックを無効化
    this.hitArea?.disableInteractive();

    // ボタンを中央に配置するようにボタングループのY原点を計算
    const buttonHeight = 40;
    const buttonWidth = 400;
    const buttonMargin = 0;
    const buttonGroupHeight =
      buttonHeight * choices.length + buttonMargin * (choices.length - 1); // 選択ボタンの高さ
    const buttonGroupOriginY =
      this.dialogBox.y - this.dialogBox.height / 2 - buttonGroupHeight; // 選択ボタングループの上側Y座標

    const choiceButton: Array<dialogButton> = [];
    choices.forEach((choice, index: number) => {
      if (!this.dialogBox) return;
      const y = buttonGroupOriginY + buttonHeight * (index + 0.5) + buttonMargin * index;
      choiceButton[index] = {
        // Rectangleでボタンを作成
        range: new Phaser.GameObjects.Rectangle(
          this,
          this.dialogBox.x + this.dialogBox.width / 2 - buttonWidth / 2,
          y,
          buttonWidth,
          buttonHeight,
          0x000000,
        ).setStrokeStyle(1, 0xffffff),
        // ボタンテキストを追加
        text: new Phaser.GameObjects.Text(
          this,
          this.dialogBox.x + this.dialogBox.width / 2 - buttonWidth / 2,
          y,
          choice.text,
          this.textStyle,
        ).setOrigin(0.5),
      };
      choiceButton[index].range.setInteractive({
        useHandCursor: true,
      });

      // マウスオーバーで色が変わるように設定
      choiceButton[index].range.on('pointerover', () => {
        choiceButton[index].range.setFillStyle(0x333333);
      });
      choiceButton[index].range.on('pointerout', () => {
        choiceButton[index].range.setFillStyle(0x000000);
      });

      // ボタンクリックで、指定のタイムラインを実行する
      choiceButton[index].range.on('pointerdown', () => {
        // hitAreaのクリックを有効化
        this.hitArea?.setInteractive();
        // 選択ボタンをクリアする
        clearButton(choiceButton);
        this.specTimeline({ timelineID: choice.timelineID });
      });

      if (!this.uiLayer) return;
      // ボタンをUIレイヤーに追加
      this.uiLayer.add(choiceButton[index].range);
      // ボタンテキストをUIレイヤーに追加
      this.uiLayer.add(choiceButton[index].text);
    });
    const clearButton = (allbutton: dialogButton[]) => {
      allbutton.forEach((button) => {
        button.range.destroy();
        button.text.destroy();
      });
    };
  }
}
