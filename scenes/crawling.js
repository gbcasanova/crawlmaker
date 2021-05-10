class Crawling extends Phaser.Scene
{
	constructor()
	{
		super({key: "Crawling"})
	}
	
	preload()
	{
		this.load.image("starsbackground", "assets/starbackground.jpg")
	}
	
	create(data)
	{
		this.cameras.main.fadeIn(2000)
		
		// Background.
		let background = this.add.image(config.width/2, config.height/2, "starsbackground")
		background.displayWidth = config.width
		background.displayHeight = config.height
		
		console.log('init', data);
		
		let phrase = this.add.text(config.width/2, config.height/2, data.phrase, {fontFamily: "Open Sans Condensed", fontSize: "60px", color: "#00f5fe"})
		phrase.x -= phrase.width/2
		phrase.y -= phrase.height/2
	}
	
	createCrawl(data)
	{	
		let div = document.createElement('div');
		div.style = "width: 590px; height: 900px; font-size: 50px; font-weight: bold; text-align: justify; text-align-last: center; color: #fbc412;"
		
		div.innerText = data.text

		let element = this.add.dom(config.width/2, 1200, div);
		
		element.setPerspective(800);
		element.rotate3d.set(1, 0, 0, 70);
		element.scaleX = 2.9
		element.scaleY = 2.9
		
		let tween = this.tweens.add({
			targets: element,
			y: 300,
			scaleX: 0.7,
			scaleY: 0.7,
			ease: 'Power0',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
			duration: 40000,
			repeat: 0,            // -1: infinity
			yoyo: false
		});
	}
	
	update()
	{
		//
	}
}