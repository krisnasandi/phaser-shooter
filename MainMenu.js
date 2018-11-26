Game.MainMenu = function(game) {}

var titlescreen, button, button2, button3, text

Game.MainMenu.prototype = {
    create: function (game) {        
        titlescreen = game.add.sprite(game.world.centerX, game.world.centerY - 0, 'title')
        titlescreen.anchor.setTo(0.5, 0.5)

        button = game.add.button(game.world.centerX - 109, 250, 'button-sky', function () {
            this.state.start('SkyArena')
        }, this, 2, 1, 0)

        button2 = game.add.button(game.world.centerX - 109, 350, 'button-cave', function () {
            this.state.start('CaveArena')
        }, this, 2, 1, 0)

        button3 = game.add.button(game.world.centerX - 109, 450, 'button-uw', function () {
            this.state.start('UnderWaterArena')
        }, this, 2, 1, 0)

        text = game.add.text(272, 565, '© 2018 Last Minute Dev. Ltd. All rights reserved. ', { font: "12px Arial", fill: "#ffffff", align: "center" })
    },

    update: function (game) {
        
    },
}