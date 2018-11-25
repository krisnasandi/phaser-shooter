Game.SkyArena = function(game) {}

var monster, allies, crosshair, score = 0

Game.SkyArena.prototype = {
    create: function () {
        this.add.image(0, 0, 'sky');
        this.add.text(32, 32, 'Score: ' + score, { font: "20px Arial", fill: "red", align: "left" })

        // monster
        monster = this.add.sprite(32, 32, 'eagles')
        monster.enableBody = true
        this.physics.arcade.enable(monster)
        monster.body.collideWorldBounds = true
        monster.body.bounce.set(1)
        monster.body.velocity.x = this.rnd.integerInRange(200, 500)
        monster.body.velocity.y = this.rnd.integerInRange(200, 500)

        // ally
        allies = this.add.group()

        for (var i = 0; i < 5; i++) {
            var ally = allies.create(200 + i * 48, 50, 'birds')

            ally.enableBody = true
            this.physics.arcade.enable(ally)
            ally.body.collideWorldBounds = true
            ally.body.bounce.set(1)
            ally.body.velocity.x = this.rnd.integerInRange(200, 500)
            ally.body.velocity.y = this.rnd.integerInRange(100, 200)
        }
        
        // crosshair
        crosshair = this.add.sprite(this.world.centerX, this.world.centerY, 'crosshair')
        this.physics.arcade.enable(crosshair)
        crosshair.enableBody = true
    },

    update: function () {
        crosshair.x = this.input.x - 20
        crosshair.y = this.input.y - 20

        //this.physics.arcade.overlap(monster, crosshair, shot, null, this)
    },

    shot: function (monster, crosshair) {
        if (game.input.activePointer.isDown) {
            monster.kill()
            score += 5
        }
    }
}