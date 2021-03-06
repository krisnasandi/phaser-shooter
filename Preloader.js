Game.Preloader = function(game) {
    this.preloadBar = null
}

Game.Preloader.prototype = {
    preload: function () {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');

        this.preloadBar.anchor.setTo(0.5, 0.5);

        this.time.advancedTiming = true;
        this.load.setPreloadSprite(this.preloadBar);

        // LOAD ALL ASSETS
        this.load.image('sky', 'assets/img/background/bg1.png')
        this.load.image('cave', 'assets/img/background/bg2.png')
        this.load.image('underwater', 'assets/img/background/bg3.png')
        this.load.image('title', 'assets/img/background/titlescreen.jpg')

        this.load.spritesheet('btnStart', 'assets/img/other/btnStart.png', 193, 71)
        this.load.spritesheet('eagles', 'assets/img/monster/monster1.png', 220, 178)
        this.load.spritesheet('bats', 'assets/img/monster/monster2.png', 220, 178)
        this.load.spritesheet('sharks', 'assets/img/monster/monster3.png', 713/2, 178)
        
        this.load.spritesheet('boss1', 'assets/img/monster/boss1.png', 265, 132)
        this.load.spritesheet('boss2', 'assets/img/monster/boss2.png', 265, 132)
        this.load.spritesheet('boss3', 'assets/img/monster/boss3.png', 161, 203)
        
        this.load.spritesheet('birds', 'assets/img/allies/ally1.png', 276/2, 70)
        this.load.spritesheet('mans', 'assets/img/allies/ally2.png', 289/2, 219)
        this.load.spritesheet('fishes', 'assets/img/allies/ally3.png', 533/2, 135)
        
        this.load.spritesheet('btnMenu', 'assets/img/other/btnMenu.png')
        this.load.spritesheet('btnRestart', 'assets/img/other/btnRestart.png')
        this.load.spritesheet('btnNext', 'assets/img/other/btnNext.png')
        this.load.spritesheet('button-sky', 'assets/img/other/btn1.png', 219, 72)
        this.load.spritesheet('button-cave', 'assets/img/other/btn2.png', 219, 72)
        this.load.spritesheet('button-uw', 'assets/img/other/btn3.png', 219, 72)
        this.load.image('crosshair', 'assets/img/other/crosshair.png')
    },

    create: function () {
        this.state.start('MainMenu')
    }
}