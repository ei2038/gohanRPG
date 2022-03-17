import { GameObjects } from 'phaser';
import { playerAnims } from 'playerAnims';
import { tileSize } from 'scenes/Map.tpl';
import { Direction } from './Direction';

type Vector2 = Phaser.Math.Vector2;

export type AnimState = 'front' | 'back' | 'left' | 'right' | '';

export type SpriteAnims = {
  key: string;
  start: number;
  end: number;
};

export class Actor {
  public offsetX: number = tileSize / 2;
  public offsetY: number = tileSize;
  constructor(public sprite: GameObjects.Sprite, public tilePos: Vector2) {
    this.sprite.setOrigin(0.5, 1);
    this.sprite.setPosition(
      tilePos.x * tileSize + this.offsetX,
      tilePos.y * tileSize + this.offsetY,
    );
    this.sprite.setFrame(playerAnims[playerAnims.length - 1].frameStart);
  }

  getPosition(): Vector2 {
    return this.sprite.getBottomCenter();
  }

  setPosition(position: Vector2): void {
    this.sprite.setPosition(position.x, position.y);
  }

  stopAnimation(direction: Direction) {
    const animationManager = this.sprite.anims.animationManager;
    const standingFrame = animationManager.get(direction).frames[1].frame.name;
    this.sprite.anims.stop();
    this.sprite.setFrame(standingFrame);
  }

  startAnimation(direction: Direction) {
    this.sprite.anims.play(direction);
  }

  getTilePos(): Vector2 {
    return this.tilePos.clone();
  }

  // method overloading
  setTilePos(tilePosition: Vector2): void;
  setTilePos(x: number, y: number): void;
  setTilePos(...values: any[]): void {
    if (values.length === 1) {
      this.tilePos = values[0].clone();
    } else {
      this.sprite.setPosition(
        values[0] * tileSize + this.offsetX,
        values[1] * tileSize + this.offsetY,
      );
    }
  }

  getSprite(): GameObjects.Sprite {
    return this.sprite;
  }
}
