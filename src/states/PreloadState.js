import { timingSafeEqual } from "crypto";

class PreloadState extends Phaser.State {

	init() {
		this.getURLParams();
		this.handleScaling();
		this.drawPreloader();
	}


	getURLParams() {
		//console.log("getting params");

		this.params = {};
		this.galleryMode = false;

		if (location.search) {
	    	var parts = location.search.substring(1).split('&');

			for (var i = 0; i < parts.length; i++) {
				var nv = parts[i].split('=');
				if (!nv[0]) continue;
				this.params[nv[0]] = nv[1] || true;
			}
		}

		//console.log(this.params);
		this.galleryMode = this.params.gallery === "true";
	}

	/**
	 * Resizes the stage if we're on mobile
	 */
	handleScaling() {
			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.game.scale.forceOrientation(true, false);
			this.game.scale.enterIncorrectOrientation.add(this.handleIncorrect);
			this.game.scale.leaveIncorrectOrientation.add(this.handleCorrect);
			this.game.stage.disableVisibilityChange = false;
			this.scale.setShowAll();
			this.scale.refresh();
			if (this.game.scale.width / this.game.scale.height < window.innerWidth / window.innerHeight) {
				var canvas = document.querySelector('canvas');
				canvas.style.position = 'absolute';
				canvas.style.top = "0";
			}
	}

	handleIncorrect() {
		document.getElementById("turn").style.display="block";
	}

	handleCorrect() {
		document.getElementById("turn").style.display="none";
	}


	/**
	 * Draws the preload bar
	 */
	drawPreloader() {
		this.loaderBase = this.game.add.graphics(100*2,185*2);
    	this.loaderBase.beginFill(0xf5a8ad);
		this.loaderBase.drawRect(0, 0, 600*2, 30*2);

		this.loaderFill = this.game.add.graphics(110*2,195*2);
    	this.loaderFill.beginFill(0xFFFFFF);
		this.loaderFill.drawRect(0, 0, 580*2, 10*2);
		this.loaderFill.scale.x = 0;
	}

	/**
	 * Actually load the items in.
	 */
	preload() {
		// audio
		this.game.load.audio('audio1', 'assets/audio/audio1.mp3');
		this.game.load.audio('audio2', 'assets/audio/audio2.mp3');
		this.game.load.audio('audio3', 'assets/audio/audio3.mp3');
		this.game.load.audio('audio4', 'assets/audio/audio4.mp3');

		// photos
		this.game.load.image('louise1', 'assets/circuit/louise1.jpg');		
		this.game.load.image('louise2', 'assets/circuit/louise2.jpg');		
		this.game.load.image('louise3', 'assets/circuit/louise3.jpg');		

		// graphics
		this.game.load.image('circuit-logo', 'assets/circuit/circuit.png');
		this.game.load.image('entry', 'assets/circuit/entry.png');
		this.game.load.image('logo1-bw', 'assets/circuit/logo1.png');
		this.game.load.image('logo2-bw', 'assets/circuit/logo2.png');
		this.game.load.image('logo3-bw', 'assets/circuit/logo3.png');
		this.game.load.image('logos', 'assets/circuit/logos.png');
		this.game.load.image('lines', 'assets/circuit/lines.png');
		this.game.load.image('btn1', 'assets/circuit/btn1.png');
		this.game.load.image('btn2', 'assets/circuit/btn2.png');
		this.game.load.image('btn3', 'assets/circuit/btn3.png');
		this.game.load.image('btn4', 'assets/circuit/btn4.png');
		this.game.load.image('back-btn', 'assets/circuit/back.png');
		this.game.load.image('who-btn', 'assets/circuit/who.png');
		this.game.load.image('see-btn', 'assets/circuit/see.png');
		this.game.load.image('who-screen', 'assets/circuit/whomadethis.png');
		this.game.load.image('see-screen', 'assets/circuit/seescreen.png');
		this.game.load.image('gallery-screen', 'assets/circuit/gallerymode.png');
		this.game.load.image('gallery-start', 'assets/circuit/gallery-start.png');
		this.game.load.image('gallery-fullscreen', 'assets/circuit/gallery-fullscreen.png');
		this.game.load.image('text1', 'assets/circuit/text1.png');
		this.game.load.image('text2', 'assets/circuit/text2.png');
		this.game.load.image('text3', 'assets/circuit/text3.png');
		this.game.load.image('text4', 'assets/circuit/text4.png');

		// spritesheet
		this.game.load.spritesheet('spider', 'assets/circuit/spider.png', 256, 328, 20);

	}

  loadUpdate() {
		this.loaderFill.scale.x = this.game.load.progress / 100;
  }

	// Loading complete! Go to the menu.
  create() {
		if(this.galleryMode == true) {
			this.state.start('DebugState');
		}
		else {
			this.state.start('CircuitState');
		}
	}
}

export default PreloadState;
