import * as PIXI from 'pixi.js';
import store from '@/store/';
import Player from '@/game/player';

let Application = PIXI.Application;

/**
 * pixi game logic and rendering functions
 */

class Stage {
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

    let player = new Player();
    this.app.stage.addChild(player);

    this.player = player;
  }

  gameLoop (delta) {
    this.player.doLoop();
  }
}

export default Stage;
