class Start extends Phaser.Scene
{
	constructor()
	{
		super({key: "Start"})
	}
	
	preload()
	{
		this.load.image("background", "assets/background.png")
		this.load.spritesheet("playButton", "assets/playButton.png", {frameWidth: 250, frameHeight: 106})
	}
	
	create()
	{
		let background = this.add.image(config.width/2, config.height/2, "background")
		
		let title = document.createElement('textarea');
		title.id = "step1"
		title.maxLength = "20";
		title.cols = "20";
		title.rows = "1";
		title.style = "resize: none;"
		title.value = "Star Wars"
		
		this.add.dom(110, 300, title);
		
		let phrase = document.createElement('textarea');
		phrase.id = "step2"
		phrase.maxLength = "53";
		phrase.cols = "55";
		phrase.rows = "2";
		phrase.style = "resize: none;"
		phrase.value = "A long time ago in a galaxy far,\nfar away..."
		
		this.add.dom(230, 480, phrase);
		
		let text = document.createElement('textarea');
		text.id = "step3"
		text.maxLength = "385";
		text.cols = "55";
		text.rows = "13";
		text.style = "resize: none;"
		text.value = "EPISODE IV \nA NEW HOPE \n\nIt is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet."
		
		this.add.dom(790, 390, text);
		
		let playButton = this.add.image(530, 550, "playButton", 0)
		playButton.setInteractive({cursor: 'pointer' })
		
		playButton.on('pointerover', () => 
        { 
            playButton.setFrame(1)
        });

        playButton.on('pointerout', () => 
        { 
            playButton.setFrame(0)
        });

        playButton.on('pointerdown', function (event) 
        {
			this.scene.start("Crawling", {
				title: document.getElementById("step1").value, 
				phrase: document.getElementById("step2").value, 
				text: document.getElementById("step3").value
			});
        }, this);
		

	}
	
	update()
	{
		//
	}
}