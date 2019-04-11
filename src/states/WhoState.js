class WhoState extends Phaser.State {

	create() {
		this.sound;

		this.baseColour = this.game.add.graphics(0,0);
    	this.baseColour.beginFill(0xFFFFFF);
		this.baseColour.drawRect(0, 0, 1600, 800);

		this.entry = this.add.sprite(0, 0, "who-screen");
		this.entry.alpha = 0;
		this.game.add.tween(this.entry).to( { alpha: 1 }, 1000, "Linear", true);

		this.hit1 = this.game.add.graphics(0,0);
    	this.hit1.beginFill(0xFF0000);
		this.hit1.drawRect(1048, 236, 200, 60);
		this.hit1.alpha = 0;
		this.hit1.inputEnabled = true;
		this.hit1.input.useHandCursor = true;
		this.hit1.events.onInputDown.add(this.link1, this);

		this.hit2 = this.game.add.graphics(0,0);
    	this.hit2.beginFill(0xFF0000);
		this.hit2.drawRect(1260, 236, 230, 60);
		this.hit2.alpha = 0;
		this.hit2.inputEnabled = true;
		this.hit2.input.useHandCursor = true;
		this.hit2.events.onInputDown.add(this.link2, this);

		this.hit3 = this.game.add.graphics(0,0);
    	this.hit3.beginFill(0xFF0000);
		this.hit3.drawRect(360, 353, 300, 60);
		this.hit3.alpha = 0;
		this.hit3.inputEnabled = true;
		this.hit3.input.useHandCursor = true;
		this.hit3.events.onInputDown.add(this.link3, this);

		this.hit4 = this.game.add.graphics(0,0);
    	this.hit4.beginFill(0xFF0000);
		this.hit4.drawRect(690, 353, 200, 60);
		this.hit4.alpha = 0;
		this.hit4.inputEnabled = true;
		this.hit4.input.useHandCursor = true;
		this.hit4.events.onInputDown.add(this.link4, this);

		this.clicked = false;
		this.entry.inputEnabled = true;
		this.entry.events.onInputDown.add(this.onClick, this);
	}

	link1() {
		window.open("https://www.kettlesyard.co.uk", '_blank');
	}

	link2() {
		window.open("http://wysingartscentre.org/", '_blank');
	}

	link3() {
		window.open("http://kettlesyard.co.uk/circuit", '_blank');
	}

	link4() {
		window.open("https://twitter.com/circuitcambs", '_blank');
	}

	onClick() {
		if(!this.clicked) {
			this.clicked = true;
			var fadeout = this.game.add.tween(this.entry).to( { alpha: 0 }, 1000, "Linear", true);
			fadeout.onComplete.add(this.moveScenes, this);
		}
	}

	moveScenes() {
		this.state.start('MenuState');
	}

	update() {

	}
}

export default WhoState;
