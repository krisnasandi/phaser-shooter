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
var score = 0

function preload() {
    // this.load.setBaseURL(_URL)
    this.load.image('background1', 'assets/img/background/bg1.png')
    this.load.image('background2', 'assets/img/background/bg2.png')
    this.load.image('background3', 'assets/img/background/bg3.png')
    this.load.spritesheet('btnStart', 'assets/img/other/btnStart.png', 193, 71)
    this.load.spritesheet('monster1', 'assets/img/monster/monster1.png', 225, 178)
    this.load.image('crosshair', 'assets/img/other/crosshair1.png')
}

function create() {
    background = game.add.image(0, 0, 'background1')
    btnStart = game.add.button(game.world.centerX - 95, 400, 'btnStart', btnStartAction, this, 2, 1, 0)
    monster = game.add.sprite(0, 0, 'monster1')

    
    crosshair = game.add.sprite(game.world.centerX, game.world.centerY, 'crosshair');
    
    game.physics.enable(monster, Phaser.Physics.ARCADE);
    game.physics.enable(crosshair, Phaser.Physics.ARCADE);
    monster.enableBody = true
    crosshair.enableBody = true
}

function update() {
    game.physics.arcade.overlap(monster, crosshair, shotMonster, null, this)

    crosshair.x = game.input.x - 20
    crosshair.y = game.input.y - 20
}

function render() {
    game.debug.text('Score: ' + score , 32, 32);
}

function btnStartAction() {
    
}

function shotMonster(monster) {
    if (game.input.activePointer.isDown)
    {
        monster.kill()
        score += 5
    }
}