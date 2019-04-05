class DebugState extends Phaser.State {

	create() {

		this.base = this.add.sprite(0, 0, "gallery-screen");

		this.fullscreen = this.add.sprite(430, 633, "gallery-fullscreen");
		this.fullscreen.inputEnabled = true;
		this.fullscreen.events.onInputDown.add(this.toggleFullScreen, this);

		this.start = this.add.sprite(928, 633, "gallery-start");
		this.start.inputEnabled = true;
		this.start.events.onInputDown.add(this.launchApp, this);

		// fullscreen button
		this.full = this.game.add.graphics(0,0);
    	this.full.beginFill(0xFF0000);
		this.full.drawRect(1470, 0, 130, 130);
		this.full.alpha = 0;
		this.full.inputEnabled = true;
		this.full.events.onInputDown.add(this.toggleFullScreen, this);


	}

	toggleFullScreen() {
		if(this.game.scale.isFullScreen) {
			this.game.scale.stopFullScreen();
		}
		else {
			this.game.scale.startFullScreen(false);
		}
	}

	launchApp() {
		this.state.start('CircuitState');
	}

	update() {

	}
}

export default DebugState;
