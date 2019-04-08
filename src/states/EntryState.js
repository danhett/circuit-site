class EntryState extends Phaser.State {

	create() {
		this.sound;

		this.baseColour = this.game.add.graphics(0,0);
    	this.baseColour.beginFill(0xFFFFFF);
		this.baseColour.drawRect(0, 0, 1600, 800);

		this.entry = this.add.sprite(0, 0, "entry");
		this.entry.alpha = 0;
		this.game.add.tween(this.entry).to( { alpha: 1 }, 1000, "Linear", true);

		this.back = this.add.sprite(-250, 20, "back-btn2");
		this.back.scale.set(0.7, 0.7);
		this.back.inputEnabled = true;
		this.back.events.onInputDown.add(this.onClickBack, this);
		this.game.add.tween(this.back).to( { x: 20 }, 1000, "Cubic", true, 500);

		this.clicked = false;
		this.entry.inputEnabled = true;
		this.entry.events.onInputDown.add(this.onClick, this);
	}

	onClickBack() {
		if(!this.clicked) {
			this.clicked = true;
			this.game.add.tween(this.back).to( { alpha:0 }, 1000, "Cubic", true);
			var fadeout = this.game.add.tween(this.entry).to( { alpha: 0 }, 1000, "Linear", true);
			fadeout.onComplete.add(this.moveScenesBack, this);
		}
	}

	moveScenes() {
		this.state.start('MenuState');
	}

	moveScenesBack() {
		this.state.start('CircuitState');
	}

	onClick() {

		if(!this.clicked) {
			this.clicked = true;
			this.game.add.tween(this.back).to( { alpha:0 }, 1000, "Cubic", true);
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

export default EntryState;
