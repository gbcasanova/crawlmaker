var config = {
    type:Phaser.WEBGL,
    width: 1072,
    height: 603,
    roundPixels: false,
    pixelArt: false,
    disableContextMenu: true,
    parent: 'phaser-example',

    scale:
    {
        mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    render: 
    {
        pixelArt: false, 
        antialias: true
    },
	
	dom: {
        createContainer: true
    },

    scene: [Start, Crawling]
}

var game = new Phaser.Game(config)