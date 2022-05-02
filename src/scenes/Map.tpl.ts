import { probabilityToDenominator } from 'functions/generalPurpose/probabilityToDenominator';
// assets
// import marc from '@/assets/characters/dynamic/marc.png';
import mapImg from '@/assets/maps/map001.png';
import { BattleActor } from 'classes/BattleActor';
import log1 from '@/assets/items/hatena.png';
import log2 from '@/assets/items/ikari.png';
import log3 from '@/assets/items/kantanhu.png';
import log4 from '@/assets/items/mugon.png';
import log5 from '@/assets/items/onpu.png';
// classes
import { GridControls } from 'classes/GridControls';
import { GridPhysics } from 'classes/GridPhysics';
import { Char } from 'classes/Player';
import { Scene, Tilemaps, Types } from 'phaser';
import { Timelines } from 'classes/Timelines';
import { select } from 'timelineWords/timelineWords';
// values
import { system } from 'index';
import { charas } from 'classes/Characters';
import { map, events, hints, npcs, names } from 'classes/exam';
import { sceneKeys } from './sceneKeys';

// functions
import { getEnemies } from 'functions/generalPurpose/getEnemies';
import { marc } from 'friends';
import { randI } from 'functions/generalPurpose/rand';
import { Direction } from 'classes/Direction';
import { afterBossBattles } from 'timelineWords/afterBossBattles';
import { DEBUG } from 'functions/generalPurpose/debugLog';

export const tileSize: number = 40;
export const characterSize: number = 32;
export const assetKeys = {
  mapImg: 'mapImg',
  player: 'player',
};
export class Map_TPL extends Scene {
  public static readonly PROBABILITY_OF_BATTLE = 5; // パーセント
  public tileset?: Tilemaps.Tileset;
  public tileMap?: Tilemaps.Tilemap;
  public tileMapLayer?: Tilemaps.TilemapLayer;
  public player?: Char;
  public enemies: BattleActor[];
  private eventPoints?: Types.Tilemaps.TiledObject[];
  private hintPoints?: Types.Tilemaps.TiledObject[];
  public npcPoints?: Types.Tilemaps.TiledObject[];
  private gridControls?: GridControls;
  private gridPhysics?: GridPhysics;
  public flag: number = -1;
  public xy: Phaser.Math.Vector2 = new Phaser.Math.Vector2(-1, -1);
  private mapName: string;
  public battleFlag: boolean = true;
  public log?: Phaser.GameObjects.Sprite;
  public boss?: Phaser.GameObjects.Sprite;

  constructor(private json: string, public name: string) {
    super({ key: name });
    this.enemies = getEnemies(name);
    this.mapName = name;
  }
  public preload() {
    this.load.image(assetKeys.mapImg, mapImg);
    this.load.tilemapTiledJSON(this.name, this.json);
    this.load.image('mapTiles', mapImg);

    this.load.spritesheet('player', marc.spriteSrc, {
      frameWidth: characterSize,
      frameHeight: characterSize,
    });
    this.load.image('log1', log1);
    this.load.image('log2', log2);
    this.load.image('log3', log3);
    this.load.image('log4', log4);
    this.load.image('log5', log5);
  }
  public loadBossimage(name: string, tex: string) {
    this.load.image(name, tex);
  }
  //各MapClassのloadで使うnpcの姿を決める関数
  //name=npcName,n=npcImage(Charas参照)
  public setnpcimage(name: string, n: number, src: string = '') {
    if (src !== '') {
      this.load.spritesheet(name, src, {
        frameWidth: characterSize,
        frameHeight: characterSize,
      });
    } else {
      this.load.spritesheet(name, charas[n], {
        frameWidth: characterSize,
        frameHeight: characterSize,
      });
    }
  }
  //各MapClassのcreateで使うnpcを配置する関数
  //name=npcName,took=npcとの会話イベント(timelineWords参照)
  public makeNPC(name: string, took: Timelines, dir?: string, flag: boolean = false) {
    if (flag) return;
    for (let i = 0; !!this.npcPoints && i < this.npcPoints.length; ++i) {
      let e = this.npcPoints[i];
      if (name === e.name && e.x !== undefined && e.y !== undefined) {
        let x = Math.floor(e.x / tileSize),
          y = Math.floor(e.y / tileSize);
        hints.set(`${system.map},${x},${y}`, took);
        let l = this.add.sprite(0, 0, name, 1);
        let hito = new Char(l, new Phaser.Math.Vector2(x, y), name);
        npcs.set(`${system.map},${x},${y}`, hito);
        names.set(`${system.map},${name}`, `${system.map},${x},${y}`);
        if (dir !== undefined) hito.changedir(dir);
        break;
      }
    }
  }
  //各MapClassのcreateで使うふむタイプのイベントを配置する関数
  //name=eventName,took=イベント内容(timelineWords参照)
  public setEvent(name: string, took: Timelines, flag: boolean = false) {
    if (flag) return;
    for (let i = 0; !!this.eventPoints && i < this.eventPoints.length; ++i) {
      let e = this.eventPoints[i];
      if (name === e.name && e.x !== undefined && e.y !== undefined) {
        let x = Math.floor(e.x / tileSize),
          y = Math.floor(e.y / tileSize);
        names.set(`${system.map},${name}`, `${system.map},${x},${y}`);
        events.set(`${system.map},${x},${y}`, took);
      }
    }
  }
  //各MapClassのcreateで使う調べるタイプのイベントを配置する関数
  //name=eventName,took=イベント内容(timelineWords参照)
  public setHint(name: string, took: Timelines) {
    for (let i = 0; !!this.hintPoints && i < this.hintPoints.length; ++i) {
      let e = this.hintPoints[i];
      if (name === e.name && e.x !== undefined && e.y !== undefined) {
        let x = Math.floor(e.x / tileSize),
          y = Math.floor(e.y / tileSize);
        hints.set(`${system.map},${x},${y}`, took);
      }
    }
  }

  public create() {
    //keyEvents
    //話しかけるor調べるkey
    const space = this.input.keyboard.addKey('SPACE').on('down', () => {
      if (this.gridPhysics?.isMoving()) return;
      if (!!this.player) {
        let xy = this.player.getTilePos();
        let z = this.player.getdir();
        xy.x += map.get(z).x;
        xy.y += map.get(z).y;
        if (!!hints.has(`${system.map},${xy.x},${xy.y}`)) {
          let n = hints.get(`${system.map},${xy.x},${xy.y}`);
          this.scene.launch(sceneKeys.timelinePlayer, {
            anotherScene: this,
            timelineData: n,
          });
        } else {
          DEBUG.log('?');
        }
      }
    });
    const shift = this.input.keyboard.addKey('SHIFT').on('down', () => {
      this.scene.launch(sceneKeys.timelinePlayer, {
        anotherScene: this,
        timelineData: select,
      });
    });
    // Bキーでバトルシーンに移行(現在のシーンは破棄せずにストップさせるだけにして、バトルシーンから戻ったら再開する)
    /* const B = this.input.keyboard.addKey('B').on('down', () => { */
    /*   this.moveBattle(); */
    /* }); */
    /* const G = this.input.keyboard.addKey('G').on('down', () => { */
    /*   system.collidesFlag = !system.collidesFlag; */
    /* }); */
    /* const F = this.input.keyboard.addKey('F').on('down', () => { */
    /*   system.DEBUG._isIgnoreBattle = !system.DEBUG._isIgnoreBattle; */
    /* }); */
    /* const V = this.input.keyboard.addKey('V').on('down', () => { */
    /*   system.eventFlag = !system.eventFlag; */
    /* }); */
    // マップを作成
    this.tileMap = this.make.tilemap({ key: this.name });
    this.tileset = this.tileMap.addTilesetImage('map001', assetKeys.mapImg);

    // 各レイヤーを紐付ける(地面とか建物とか木とか...)
    this.tileMapLayer = this.tileMap.createLayer('ground', this.tileset, 0, 0);
    this.tileMapLayer = this.tileMap.createLayer('worldLayer', this.tileset, 0, 0);

    // 衝突判定を有効にする
    // this.tileMapLayer.setCollisionByProperty({ collides: true });

    // プレイヤーの初期位置を取得
    const spawnPoint = this.tileMap.findObject('objects', (obj) => {
      return obj.name === 'spawnPoint';
    });
    // 踏むイベントの位置を取得
    this.eventPoints = this.tileMap.filterObjects('objects', (obj) => {
      return obj.type === 'event';
    });
    DEBUG.log(this.eventPoints);
    // 調べるイベントの位置を取得
    this.hintPoints = this.tileMap.filterObjects('objects', (obj) => {
      return obj.type === 'hint';
    });
    DEBUG.log(this.hintPoints);
    // npcの位置を取得
    this.npcPoints = this.tileMap.filterObjects('objects', (obj) => {
      return obj.type === 'npc';
    });
    DEBUG.log(this.npcPoints);
    // プレイヤーを作成する
    const playerSprite = this.add.sprite(0, 0, 'player');

    // カメラの設定
    this.cameras.main.startFollow(playerSprite);
    this.cameras.main.roundPixels = true;
    this.cameras.main.setBounds(
      0,
      0,
      this.tileMap.widthInPixels,
      this.tileMap.heightInPixels,
    );

    const { x, y } = spawnPoint;
    if (x !== undefined && y !== undefined) {
      // タイルの位置を取得
      const tileX = Math.floor(x / tileSize);
      const tileY = Math.floor(y / tileSize);
      this.xy = new Phaser.Math.Vector2(tileX, tileY);
      this.player = new Char(playerSprite, new Phaser.Math.Vector2(tileX, tileY));
    }

    // グリッドの設定
    if (this.player) {
      this.gridPhysics = new GridPhysics(this.player, this.tileMap);
      this.gridControls = new GridControls(this.input, this.gridPhysics);
    }
  }

  public update(_time: number, delta: number) {
    if (system.isBossBattleWin) {
      system.isBossBattleWin = false;
      system.isBossBattle = false;
      const bossName = system.boss?.name;

      if (!bossName) return;
      this.scene.launch(sceneKeys.timelinePlayer, {
        anotherScene: this,
        timelineData: afterBossBattles.get(bossName),
      });
    } else if (this.battleFlag) {
      if (!this.gridPhysics?.isMoving()) {
        if (!!this.player) {
          let nxy = this.player.getTilePos();
          const { x, y } = this.xy;
          if (x === undefined || y === undefined) return;
          if (x !== nxy.x || y !== nxy.y) {
            this.xy = this.player.getTilePos();
            //踏むイベントの確認
            const denominator = probabilityToDenominator(Map_TPL.PROBABILITY_OF_BATTLE);
            if (
              !!events.has(`${system.map},${this.xy.x},${this.xy.y}`) &&
              system.eventFlag
            ) {
              let n = events.get(`${system.map},${this.xy.x},${this.xy.y}`);
              this.scene.launch(sceneKeys.timelinePlayer, {
                anotherScene: this,
                timelineData: n,
              });
            } else if (!randI(denominator) && system.DEBUG_isIgnoreBattle) {
              this.moveBattle();
            }
          } else {
            this.gridControls?.update();
          }
        }
      }
      this.gridPhysics?.update(delta);
    }
  }

  public setBoss(
    x: number,
    y: number,
    boss: string,
    flag: boolean = false,
    scale = 0.5,
    half = false,
  ) {
    if (flag) return;
    this.boss = this.add
      .sprite(
        x * tileSize + tileSize / 2 + (half ? 20 : 0),
        y * tileSize + tileSize / 2,
        boss,
      )
      .setScale(scale);
  }

  //events
  public removeEventByXYs(xy: { x: number; y: number }[]) {
    for (let i = 0; i < xy.length; ++i) {
      events.delete(`${this.name},${xy[i].x},${xy[i].y}`);
    }
  }

  public fixKillBossByName(bossName: string) {
    if (system.isBossKilled.has(bossName)) {
      system.isBossKilled.set(bossName, true);
    }
  }

  // イベントを削除
  public removeObjectByName(objectName: string) {
    if (names.has(`${this.name},${objectName}`)) {
      events.delete(names.get(`${this.name},${objectName}`));
      names.delete(`${this.name},${objectName}`);
    }
  }
  //イベントを配置
  public setEventByXY(
    eventName: string,
    x: number,
    y: number,
    contents: Timelines,
    anotherMap: string | undefined,
  ) {
    if (anotherMap === undefined) {
      events.set(`${this.name},${x},${y}`, contents);
      names.set(eventName, `${this.name},${x},${y}`);
    } else {
      events.set(`${anotherMap},${x},${y}`, contents);
      names.set(eventName, `${anotherMap},${x},${y}`);
    }
  }
  //キャラの向きを変える
  public changeNpcDir(charName: string, direction: Direction) {
    if (names.has(`${system.map},${charName}`)) {
      let point = names.get(`${system.map},${charName}`);
      let character = npcs.get(point);
      character.changedir(direction);
    } else if (charName === 'player') {
      this.player?.changedir(direction);
    } else {
      DEBUG.log('not found');
    }
  }
  public talkNPC() {
    if (!!this.player) {
      let playerPoint = this.player.getTilePos();
      let playerDirection = this.player.getdir();
      playerPoint.x += map.get(playerDirection).x;
      playerPoint.y += map.get(playerDirection).y;
      if (npcs.has(`${system.map},${playerPoint.x},${playerPoint.y}`)) {
        let n = npcs.get(`${system.map},${playerPoint.x},${playerPoint.y}`);
        n.changedir(this.player.getReverseDir());
      }
    }
  }
  //キャラを配置する
  public setNpc(
    charName: string,
    x: number,
    y: number,
    contents?: Timelines,
    direction?: Direction,
  ) {
    hints.set(`${system.map},${x},${y}`, contents);
    let sprite = this.add.sprite(0, 0, charName, 1);
    let char = new Char(sprite, new Phaser.Math.Vector2(x, y), charName);
    npcs.set(`${system.map},${x},${y}`, char);
    names.set(`${system.map},${charName}`, `${system.map},${x},${y}`);
    if (direction !== undefined) char.changedir(direction);
  }

  //キャラを消す
  public removeNpcByName(charName: string) {
    if (names.has(`${system.map},${charName}`)) {
      let point = names.get(`${system.map},${charName}`);
      let character = npcs.get(point);
      character.destroy();
      npcs.delete(point);
      names.delete(`${system.map},${charName}`);
    } else {
      DEBUG.log(`not found ${system.map},${charName}`);
    }
  }
  //ボスを消す
  public removeBossByName(bossName: string) {
    this.boss?.destroy();
    system.isBossKilled.set(bossName, true);
  }
  //プレイヤーを一マス動かす(会話終了後)
  public movePlayerByDir(direction: Direction) {
    this.gridPhysics?.movePlayer(direction);
  }
  // 吹き出し表示
  public displayBubble(charName: string, bubbleIndex: number) {
    if (names.has(`${system.map},${charName}`)) {
      let point = names.get(`${system.map},${charName}`);
      let character = npcs.get(point);
      let bubblePoint = character.getPosition();
      bubblePoint.y -= tileSize;
      this.log?.destroy();
      this.log = this.add.sprite(bubblePoint.x, bubblePoint.y, `log${bubbleIndex}`);
    } else if (charName === 'player') {
      if (this.player) {
        let bubblePoint = this.player.getPosition();
        bubblePoint.y -= tileSize;
        this.log?.destroy();
        this.log = this.add.sprite(bubblePoint.x, bubblePoint.y, `log${bubbleIndex}`);
      }
    } else {
      DEBUG.log('not found');
    }
  }
  // 吹き出し表示(ボス限定)
  public displayBossBubble(bubbleIndex: number, OBC: boolean = false) {
    let bossX = this.boss?.x;
    let bossY = this.boss?.y;
    if (bossX !== undefined && bossY !== undefined) {
      this.log?.destroy();
      DEBUG.log(OBC);
      if (OBC) {
        bossY -= tileSize * 3;
        bossX -= tileSize * 1.1;
        this.log = this.add.sprite(bossX, bossY, `log${bubbleIndex}`);
      } else {
        bossY -= tileSize;
        this.log = this.add.sprite(bossX, bossY, `log${bubbleIndex}`);
      }
    } else {
      DEBUG.log('unknown');
    }
  }
  //吹き出し消し
  public removeBubble() {
    this.log?.destroy();
  }
  //ワープ
  public warpPlayerByXY(x: number, y: number) {
    this.player?.moveTilePos(x, y);
  }
  public moveBattleBoss(bossData: BattleActor) {
    system.isBossBattle = true;
    system.boss = bossData;
    this.moveBattle();
  }
  public moveBattle() {
    if (!getEnemies(system.map).length && !system.isBossBattle) return;
    this.battleFlag = false;
    const effectsTime = 500;
    this.cameras.main.flash(effectsTime);
    this.scene.switch(sceneKeys.battle);
    this.battleFlag = true;
  }
  public zoomUp() {
    this.cameras.main.zoomTo(2, 1000);
  }
  public zoomDown() {
    this.cameras.main.zoomTo(1, 1000);
  }

  public changeEncounterFlag() {
    system.DEBUG_isIgnoreBattle = system.DEBUG_isIgnoreBattle;
  }
}
