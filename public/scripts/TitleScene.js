let titleStrokeThickness = 40;
let titleFontSize = 200;
class TitleScene extends Phaser.Scene {
  constructor() {
    super("Title");
  }

  create() {
    // create title text

    // this.logo=this.add.image()
    this.titleText = this.add
      .text(this.scale.width / 2, this.scale.height / 2, "Pixel Souls", {
        fontFamily: "titleFont",
        fontSize: 150,
        fill: "#ffffff",
      })
      .setStroke("#fff", titleStrokeThickness)
      .setFontSize(200);

    this.titleText.setOrigin(0.5);
    this.startText = this.add
      .text(250, this.scale.height / 2 + 200, "Press any key to start", {
        fontFamily: "titleFont",
        fontSize: "30px",
        fill: "#ffffff",
      })
      .setAlpha(0);
    this.tweens.add({
      targets: this.startText,
      alpha: { value: 1, duration: 1100, ease: "Linear" },
      yoyo: true,
      loop: -1,
    });

    this.tweens.add({
      targets: this.titleText.style,
      strokeThickness: { value: 1, duration: 1100, ease: "Linear" },
    });

    this.input.keyboard.on("keydown", () => {
      this.scene.start("Game");
    });
  }
  update() {
    if (titleStrokeThickness > -1) {
      this.titleText
        .setStroke("#ffffff", titleStrokeThickness--)
        .setFontSize(titleFontSize--);
    }
  }
  startScene(targetScene) {
    // this.scene.start(targetScene);
  }
}

class LogoScene extends Phaser.Scene {
  constructor() {
    super("Logo");
  }

  create() {
    this.logo = this.add.image(380, 400, "logo");
    this.productionText = this.add
      .text(210, 470, "two and a half asian presents", {
        fontFamily: "titleFont",
        fontSize: "26px",
        fill: "#ffffff",
      })
      .setAlpha(0);
    this.tweens.add({
      targets: this.productionText,
      alpha: {
        start: 1,
        from: 1,
        to: 0,
        delay: 3000,
        duration: 3000,
        ease: "Linear",
      },
      onComplete: () => {
        this.scene.launch("Title");
      },
    });

    this.callbacks = { onComplete: true };
    this.tweens.add({
      targets: this.logo,
      alpha: {
        start: 1,
        from: 1,
        to: 0,
        delay: 3000,
        duration: 3000,
        ease: "Linear",
      },
    });
  }
}
