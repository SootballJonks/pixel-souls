class DialogScene extends Phaser.Scene {
  constructor() {
    super("Dialog");
  }
  init(data) {
    if (Object.keys(data).length !== 0) {
      this.npcName = data.npc.texture.key; //only asign the NPC name as key if it's found
    }
  }
  create() {
    let rect = new Phaser.Geom.Rectangle(
      this.scale.width / 2 - 250, //position of text box
      this.scale.height / 2 + 150,
      500, //height and width of the rectangle
      150
    );
    var graphics = this.add.graphics({
      fillStyle: { color: "#FFFFFF", alpha: 0.3 }, //change this value to change opacity of textbox background
    });

    graphics.fillRectShape(rect);

    let dialogs = this.cache.json.get("dialogs");
    if (dialogs[this.npcName]) {
      let dialogsArr = dialogs[this.npcName];
      this.add.text(
        this.scale.width / 2 - 200, // x position of text
        this.scale.height / 2 + 200, // y position of text
        dialogsArr[Math.floor(Math.random() * dialogsArr.length)], //this will generate a random conversation with NPC
        {
          fontFamily: "HonokaMincho",
          fill: "#FFFFFF",
          fontSize: "18px",
          wordWrap: { width: 400, useAdvancedWrap: true }, //change here to make dialogues text wrap
        }
      );

      this.dialogsTimer = this.time.addEvent({
        delay: 5000,
        callback: () => {
          this.scene.remove("Dialog");
        },
      });

      this.input.keyboard.on("keydown-" + "E", () => {
        this.scene.remove("Dialog");
      });
    }
  }

  update() {}

  updateText() {}
}
