class CircuitState extends Phaser.State {

	create() {
		this.tweened = false;

		this.louise1 = this.add.sprite(0, 0, "louise1");
		this.louise2 = this.add.sprite(0, 0, "louise2");
		this.louise3 = this.add.sprite(0, 0, "louise3");
		this.louise2.alpha = 0;
		this.louise3.alpha = 0;

		this.baseColour = this.game.add.graphics(0,0);
    	this.baseColour.beginFill(0xf5a8ad);
		this.baseColour.drawRect(0, 0, 1600, 800);
		this.baseColour.alpha = 0.9;

		this.bigLogo = this.add.sprite(this.game.world.centerX, 300, "circuit-logo");
		this.bigLogo.anchor.set(0.5, 0.5);

		//this.smallLogo1 = this.add.sprite(47, 618, "logo1-bw");
		//this.smallLogo2 = this.add.sprite(884, 710, "logo2-bw");
		//this.smallLogo3 = this.add.sprite(1277, 682, "logo3-bw"); // circuit logo 
		this.logos = this.add.sprite(0,0,"logos"); // full sheet

		// spider!
		this.spider = this.game.add.sprite(0, -400, 'spider');
		this.spider.animations.add('walk');
		this.spider.animations.play('walk', 160, true);

		// big invisible hitzone
		this.hitZone = this.game.add.graphics(0,0);
    	this.hitZone.beginFill(0xFFFFFF);
		this.hitZone.drawRect(0, 0, 1600, 800);
		this.hitZone.alpha = 0;
		this.hitZone.inputEnabled = true;
		this.hitZone.events.onInputDown.add(this.onClick, this);

		//this.spiderDown = true;
		this.animateSpider();

		// image swap stuff (DISABLED FOR NOW)
		//this.currentImage = 1;
		//this.maxImages = 3;
		//this.timer = this.game.time.events.add(Phaser.Timer.SECOND * 4, this.updateImage, this);

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

	animateSpider() {
		if(this.spiderDown) {
			this.spiderDown = false;
			this.spider.scale.set(1, -1);
			this.spider.angle = -10;
			this.spider.x = 0;
			this.spider.y = -500;
			this.game.add.tween(this.spider).to( { x:200, y:1200 }, 2000, "Linear", true, 1000);
		}
		else {
			this.spiderDown = true;
			this.spider.scale.set(1, 1);
			this.spider.angle = 10;
			this.spider.x = 600;
			this.spider.y = 900;
			this.game.add.tween(this.spider).to( { x:800, y:-400 }, 1700, "Linear", true, 1000);
		}

		this.game.time.events.add(Phaser.Timer.SECOND * 7, this.animateSpider, this);
	}

	onClick() {
		if(this.tweened) {
			this.animTween.stop();
			this.louTween1.stop();
			this.louTween2.stop();
			this.louTween3.stop();
		}

		var fadeout = this.game.add.tween(this.hitZone).to( { alpha: 1 }, 1000, "Linear", true);
		fadeout.onComplete.add(this.moveScenes, this);
	}

	moveScenes() {
		this.state.start('EntryState');
	}

	updateImage() {
		this.tweened = true;

		this.timer = this.game.time.events.add(Phaser.Timer.SECOND * 4, this.updateImage, this);

		if(this.currentImage < this.maxImages) {
			this.currentImage++;
		}
		else {
			this.currentImage = 1;
		}

		this.louTween1 = this.game.add.tween(this.louise1).to( { alpha: 0 }, 500, "Linear", true);
		this.louTween2 = this.game.add.tween(this.louise2).to( { alpha: 0 }, 500, "Linear", true);
		this.louTween3 = this.game.add.tween(this.louise3).to( { alpha: 0 }, 500, "Linear", true);

		this.animTween = this.game.add.tween(this["louise"+this.currentImage]).to( { alpha: 1 }, 500, "Linear", true);
	}

	update() {

	}
}

export default CircuitState;
