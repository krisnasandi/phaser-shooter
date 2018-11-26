Game.SkyArena = function(game) {
    this.game = game
    this.score = 0
    this.scoreText

    this.monster = 1
    this.maxMonster = 5
    this.monsters = []
    
    this.maxAlly = 5
    this.allies = []

    this.crosshair

    this.introText

}

Game.SkyArena.prototype = {
    create: function () {
        this.add.image(0, 0, 'sky');
        // this.scoreText = this.add.text(32, 32, 'Score: ' + this.score, { font: "20px Arial", fill: "red", align: "left" })

        // monster
        this.monsters.push(new Enemy({
            index: this.monster,
            image: 'eagles',
            game: this,
            crosshair: this.crosshair,
            score: 5
        }))

        // ally
        for (var i = 1; i < this.maxAlly; i++) {
            this.allies.push(new Enemy({
                index: i,
                image: 'birds',
                game: this,
                crosshair: this.crosshair,
                score: -5
            }))
        }
        
        // crosshair
        this.crosshair = this.add.sprite(this.world.centerX, this.world.centerY, 'crosshair')
        this.physics.arcade.enable(this.crosshair)
        this.crosshair.enableBody = true

        this.introText = this.game.add.text(this.game.world.centerX, 150, '- click to start -', { font: "40px Arial", fill: "#ffffff", align: "center" })
        this.introText.anchor.setTo(0.5, 0.5);
        this.introText.visible = false
    },

    update: function () {
        this.crosshair.x = this.input.x - 20
        this.crosshair.y = this.input.y - 20

        for (let i = 0; i < this.monsters.length; i++) {
            this.physics.arcade.overlap(this.monsters[i].enemy, this.crosshair, this.shot, null, this)
        }

        for (let i = 0; i < this.allies.length; i++) {
            this.physics.arcade.overlap(this.allies[i].enemy, this.crosshair, this.shot, null, this)
        }
    },

    render: function () {
        this.game.debug.text('Score: ' + this.score, 45, 32)
    },

    shot: function (enemy) {
        if (this.input.activePointer.isDown) {
            if (enemy.key === 'birds') {
                this.gameOver()
            }

            if (enemy.key === 'eagles') {
                enemy.kill()
                this.score += 5
                setTimeout(() => {
                    this.createMonster()
                }, 1000);
            }
        }    
    },

    gameOver: function() {
        this.introText.text = 'Game Over....'
        this.introText.visible = true

        setTimeout(() => {
            this.introText.text = 'Lets try again'
            this.btnGameOver()
        }, 1000);
    },

    btnGameOver: function() {
        let btnRestart = this.add.button(this.game.world.centerX, 350, 'btnStart', this.gotoRestart, this, 2, 1, 0)
        btnRestart.anchor.setTo(0.5, 0.5)

        let btnMainMenu = this.add.button(this.game.world.centerX, 250, 'btnStart', this.gotoMainMenu, this, 2, 1, 0)
        btnMainMenu.anchor.setTo(0.5, 0.5)
    },

    gotoMainMenu: function() {
        this.state.start('MainMenu')
    },
    
    gotoRestart: function() {
        this.state.start('SkyArena')
    },

    createMonster: function() {
        if (this.monsters.length < 5) {
            this.monsters.push(new Enemy({
                index: this.monster++,
                image: 'eagles',
                game: this,
                crosshair: this.crosshair,
                score: 5
            }))
        } else {
            this.monsters.push(new Enemy({
                index: this.monster++,
                image: 'boss1',
                game: this,
                crosshair: this.crosshair,
                score: 5
            }))
        }
    },

    createAlly: function() {
        this.allies.push(new Enemy({
            index: i,
            image: 'birds',
            game: this,
            crosshair: this.crosshair,
            score: -5
        }))
    },
}
