import * as PIXI from 'pixi.js';
import store from '../store/';

let Application = PIXI.Application;
let Graphics = PIXI.Graphics;

let Keyboard = function (value) {
  let key = {};
  key.value = value;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  // The `downHandler`
  key.downHandler = event => {
    if (event.key === key.value) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
      event.preventDefault();
    }
  };

  // The `upHandler`
  key.upHandler = event => {
    if (event.key === key.value) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
      event.preventDefault();
    }
  };

  // Attach event listeners
  const downListener = key.downHandler.bind(key);
  const upListener = key.upHandler.bind(key);

  window.addEventListener(
    'keydown', downListener, false
  );
  window.addEventListener(
    'keyup', upListener, false
  );

  // Detach event listeners
  key.unsubscribe = () => {
    window.removeEventListener('keydown', downListener);
    window.removeEventListener('keyup', upListener);
  };

  return key;
}

class Player {
  constructor() {
    let player = new Graphics();
    player.lineStyle(0, 0xFFFFFF, 1);
    player.beginFill(0xFFFFFF);
    player.drawRect(0, 0, 64, 64);
    player.endFill();
    player.x = 0;
    player.y = 400;
    player.vx = 0;
    player.vy = 0;
    this.
  }
}

/**
 * pixi game logic and rendering functions
 */

class GameFoo {
  constructor (options) {
    this.el = options.el;
    this.store = store;
  }
  setup () {
    this.app = new Application({
      antialias: true,
      transparent: false,
      resolution: 1
    });
    this.el.appendChild(this.app.view);

    this.app.ticker.add(delta => this.gameLoop(delta));

    let player = Player();
    this.app.stage.addChild(player);

    let left = Keyboard('ArrowLeft');
    let right = Keyboard('ArrowRight');
    let space = Keyboard('SpaceBar');

    left.press = () => {
      player.vx = -5;
      player.vy = 0;
    };

    left.release = () => {
      if (!right.isDown && player.vy === 0) {
        player.vx = 0;
      }
    };
    right.press = () => {
      player.vx = 5;
      player.vy = 0;
    };
    right.release = () => {
      if (!left.isDown && player.vy === 0) {
        player.vx = 0;
      }
    };

    // Space
    space.press = () => {
      player.vy = 5;
      player.vx = 0;
    };
    space.release = () => {
      player.vy = 0;
    };

    this.player = player;
  }

  gameLoop (delta) {

  }
}

export default GameFoo;
