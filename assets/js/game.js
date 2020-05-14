var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: window.innerWidth,
    height: window.innerHeight,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var table = { width: 645, height: 312 };

function preload() {
    this.load.image('table', 'assets/images/table.png');
}

function create() {
    this.table = this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'table')
        .setOrigin(0.5, 0.5);
}

function update() { }
