 var _WIDTH = 800
 var _HEIGHT = 600
 var config = {
    type: Phaser.AUTO,
    width: _WIDTH,
    height: _HEIGHT,
    parent: 'gameWindow',
    physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(
    _WIDTH, 
    _HEIGHT,
     Phaser.AUTO, 
     'gameWindow',
     {
        preload: preload,
        create: create,
        update: update,
        render: render
     }
)

var _URL = 'http://127.0.0.1:5500/'
var stage = 'easy'
var btnStart
var background
var monster
var crosshair
var scoreText
var score = 0

function preload() {
    this.load.image('background1', 'assets/img/background/bg1.png')
    this.load.image('background2', 'assets/img/background/bg2.png')
    this.load.image('background3', 'assets/img/background/bg3.png')
    this.load.spritesheet('btnStart', 'assets/img/other/btnStart.png', 193, 71)
    this.load.spritesheet('monster1', 'assets/img/monster/monster1.png', 220, 178)
    this.load.image('crosshair', 'assets/img/other/crosshair.png')
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE)
    background = game.add.image(0, 0, 'background1')
    scoreText = game.add.text(32, 32, 'Score: ' + score, { font: "20px Arial", fill: "#ffffff", align: "left" });

    // btnStart = game.add.button(game.world.centerX - 95, 400, 'btnStart', btnStartAction, this, 2, 1, 0)

    monster = game.add.sprite(0, 0, 'monster1')
    game.physics.enable(monster, Phaser.Physics.ARCADE)
    monster.enableBody = true
    monster.body.collideWorldBounds = true;
    monster.body.bounce.set(1);
    monster.body.velocity.x = game.rnd.integerInRange(-200, 200)
    monster.body.velocity.y = game.rnd.integerInRange(-200, 200)
    
    
    
    crosshair = game.add.sprite(game.world.centerX, game.world.centerY, 'crosshair');
    game.physics.enable(crosshair, Phaser.Physics.ARCADE)
    crosshair.enableBody = true

}

function update() {

    game.physics.arcade.overlap(monster, crosshair, shotMonster, null, this)

    crosshair.x = game.input.x - 20
    crosshair.y = game.input.y - 20

}

function render() {
    game.debug.text('Monster[X]: ' + monster.x, 32, 200)
    game.debug.text('Monster[Y]: ' + monster.y, 32, 220)
}


function shotMonster(monster) {
    if (game.input.activePointer.isDown)
    {
        monster.kill()
        score += 5
        scoreText.text = 'Score: ' + score
    }
}