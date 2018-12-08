import * as PIXI from 'pixi.js';
import Keyboard from '@/game/keyboard';
import store from '@/store/';

let Graphics = PIXI.Graphics;

class Player extends Graphics {
  constructor () {
    super();
    this.drawPlayer();
    this.x = 0;
    this.y = 400;
    this.vx = 0;
    this.vy = 0;

    let left = Keyboard('ArrowLeft');
    let right = Keyboard('ArrowRight');
    let space = Keyboard('SpaceBar');

    left.press = () => {
      this.vx = -5;
      this.vy = 0;
    };

    left.release = () => {
      if (!right.isDown && this.vy === 0) {
        this.vx = 0;
      }
    };
    right.press = () => {
      this.vx = 5;
      this.vy = 0;
    };
    right.release = () => {
      if (!left.isDown && this.vy === 0) {
        this.vx = 0;
      }
    };

    // Space
    space.press = () => {
      this.vy = 5;
      this.vx = 0;
    };
    space.release = () => {
      this.vy = 0;
    };
  }
  drawPlayer () {
    this.lineStyle(0, 0xFFFFFF, 1);
    this.beginFill(0xFFFFFF);
    this.drawRect(0, 0, 64, 64);
    this.endFill();
  }
  doLoop () {
    this.x += this.vx;
    store.commit('setX', this.x);
  }
}

export default Player;
