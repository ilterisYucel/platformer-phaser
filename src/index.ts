import Phaser from "phaser";
import player from "./assets/img/player.png";
import background from "./assets/img/background.png";

class MyGame extends Phaser.Scene {
  bg: Phaser.GameObjects.TileSprite | undefined;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
  constructor() {
    super();
  }

  preload() {
    this.load.image("background", background);
    this.load.spritesheet("player", player, {
      frameWidth: 96,
      frameHeight: 96,
    });
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    this.cameras.main.setBounds(0, 0, 4 * width, height);
    this.physics.world.setBounds(0, 0, 4 * width, height);

    this.cursors = this.input?.keyboard?.createCursorKeys();

    this.add
      .tileSprite(0, 0, width, height, "background")
      .setOrigin(0)
      .setScrollFactor(0, 1);
  }

  update(): void {
    this.bg?.setTilePosition(this.cameras.main.scrollX);
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.WEBGL,
  backgroundColor: "#ffffff",
  parent: "phaser-game",
  scale: {
    mode: Phaser.Scale.FIT,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  scene: MyGame,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { y: 2500 },
    },
  },
};

const game = new Phaser.Game(config);
