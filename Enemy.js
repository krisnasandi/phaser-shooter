class Enemy{
  constructor(props) {
    this.game = props.game

    this.point = props.point

    var x = this.game.world.randomX
    var y = this.game.world.randomY
    
    this.crosshair = props.crosshair

    this.enemy = this.game.add.sprite(x, y, props.image)

    this.enemy.enableBody = true
    this.game.physics.arcade.enable(this.enemy)
    this.enemy.body.collideWorldBounds = true
    this.enemy.body.bounce.set(1)
    this.enemy.body.velocity.x = this.game.rnd.integerInRange(200, 500)
    this.enemy.body.velocity.y = this.game.rnd.integerInRange(200, 500)
    this.enemy.name = props.index.toString()
  }
}