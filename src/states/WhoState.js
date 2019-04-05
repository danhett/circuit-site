class WhoState extends Phaser.State {

	create() {
		this.sound;

		this.baseColour = this.game.add.graphics(0,0);
    	this.baseColour.beginFill(0xFFFFFF);
		this.baseColour.drawRect(0, 0, 1600, 800);

		this.entry = this.add.sprite(0, 0, "who-screen");
		this.entry.alpha = 0;
		this.game.add.tween(this.entry).to( { alpha: 1 }, 1000, "Linear", true);

		this.clicked = false;
		this.entry.inputEnabled = true;
		this.entry.events.onInputDown.add(this.onClick, this);
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
