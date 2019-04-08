class MenuState extends Phaser.State {

	create() {
		this.sound = this.game.add.audio("audio1");
		this.sound.onStop.add(this.hideBar, this);

		this.baseColour = this.game.add.graphics(0,0);
    	this.baseColour.beginFill(0xFFFFFF);
		this.baseColour.drawRect(0, 0, 1600, 800);

		//this.lines = this.add.sprite(40, 40, "lines");
		this.who = this.add.sprite(1174, 26, "who-btn");
		this.who.x = 1600;
		this.who.inputEnabled = true;
		this.who.events.onInputDown.add(this.openWho, this);
		this.game.add.tween(this.who).to( { x: 1174 }, 1000, "Cubic", true, 1500);

		this.see = this.add.sprite(60, 26, "see-btn");
		this.see.x = -200;
		this.see.inputEnabled = true;
		this.see.events.onInputDown.add(this.openSee, this);
		this.game.add.tween(this.see).to( { x: 60 }, 1000, "Cubic", true, 1500);

		this.btn1 = this.add.sprite(-1000, 170, "btn1");
		this.btn2 = this.add.sprite(-1000, 300, "btn2");
		this.btn3 = this.add.sprite(-1000, 430, "btn3");
		this.btn4 = this.add.sprite(-1000, 560, "btn4");

		this.drawPlayerBar();

		this.game.add.tween(this.btn1).to( { x: 310 }, 1000, "Cubic", true, 500);
		this.game.add.tween(this.btn2).to( { x: 310 }, 1000, "Cubic", true, 600);
		this.game.add.tween(this.btn3).to( { x: 310 }, 1000, "Cubic", true, 700);
		this.game.add.tween(this.btn4).to( { x: 310 }, 1000, "Cubic", true, 800);

		this.back = this.add.sprite(-250, 20, "back-btn");
		this.back.inputEnabled = true;
		this.back.events.onInputDown.add(this.hideBar, this);

		this.btn1.inputEnabled = true;
		this.btn1.events.onInputDown.add(this.play1, this);
		this.btn2.inputEnabled = true;
		this.btn2.events.onInputDown.add(this.play2, this);
		this.btn3.inputEnabled = true;
		this.btn3.events.onInputDown.add(this.play3, this);
		this.btn4.inputEnabled = true;
		this.btn4.events.onInputDown.add(this.play4, this);
	}

	drawPlayerBar() {
		this.barFill = this.game.add.graphics(this.game.width / 2 - 500, 1000);
    	this.barFill.beginFill(0xf4a7ac, 1);
		this.barFill.drawRect(0, 0, 1000, 150);

		this.barBase = this.game.add.graphics(this.game.width / 2 - 500, 1000);
		this.barBase.lineStyle(6, 0x000000, 0.8);
		this.barBase.drawRect(0, 0, 1000, 150);

		this.currentReadout = this.game.add.text(240, 1200, "", {
			font: "28px Arial",
			fill: "#303030",
			align: "center"
		});

		this.totalReadout = this.game.add.text(1260, 1200, "", {
			font: "28px Arial",
			fill: "#303030",
			align: "center"
		});

		this.text1 = this.add.sprite(380, -140, "text1");
		this.text2 = this.add.sprite(380, -140, "text2");
		this.text3 = this.add.sprite(380, -140, "text3");
		this.text4 = this.add.sprite(380, -140, "text4");
	}

	play1() {
		this.sound = this.game.add.audio("audio1");
		//this.sound.onStop.add(this.hideBar, this);
		this.sound.play();

		this.game.add.tween(this.text1).to( { y: 140 }, 1000, "Cubic", true, 1000);

		this.showBar();
	}

	play2() {
		this.sound = this.game.add.audio("audio2");
		//this.sound.onStop.add(this.hideBar, this);
		this.sound.play();

		this.game.add.tween(this.text2).to( { y: 140 }, 1000, "Cubic", true, 1000);

		this.showBar();
	}

	play3() {
		this.sound = this.game.add.audio("audio3");
		//this.sound.onStop.add(this.hideBar, this);
		this.sound.play();

		this.game.add.tween(this.text3).to( { y: 140 }, 1000, "Cubic", true, 1000);

		this.showBar();
	}

	play4() {
		this.sound = this.game.add.audio("audio4");
		//this.sound.onStop.add(this.hideBar, this);
		this.sound.play();

		this.game.add.tween(this.text4).to( { y: 140 }, 1000, "Cubic", true, 1000);

		this.showBar();
	}

	showBar() {
		this.game.add.tween(this.btn1).to( { x: -1000 }, 1000, "Cubic", true, 100);
		this.game.add.tween(this.btn2).to( { x: -1000 }, 1000, "Cubic", true, 200);
		this.game.add.tween(this.btn3).to( { x: -1000 }, 1000, "Cubic", true, 300);
		this.game.add.tween(this.btn4).to( { x: -1000 }, 1000, "Cubic", true, 400);
		this.game.add.tween(this.who).to( { x: 1600 }, 1000, "Cubic", true, 100);
		this.game.add.tween(this.see).to( { x: -200 }, 1000, "Cubic", true, 100);

		this.game.add.tween(this.barFill).to( { y: this.game.height/2 - 75 }, 1000, "Cubic", true, 800);
		this.game.add.tween(this.barBase).to( { y: this.game.height/2 - 75 }, 1000, "Cubic", true, 800);

		this.game.add.tween(this.currentReadout).to( { y: 500 }, 1000, "Cubic", true, 800);
		this.game.add.tween(this.totalReadout).to( { y: 500 }, 1000, "Cubic", true, 800);

		this.game.add.tween(this.back).to( { x: 20 }, 1000, "Cubic", true, 1000);
		

	}

	hideBar() {
		this.game.add.tween(this.btn1).to( { x: 310 }, 1000, "Cubic", true, 500);
		this.game.add.tween(this.btn2).to( { x: 310 }, 1000, "Cubic", true, 600);
		this.game.add.tween(this.btn3).to( { x: 310 }, 1000, "Cubic", true, 700);
		this.game.add.tween(this.btn4).to( { x: 310 }, 1000, "Cubic", true, 800);
		this.game.add.tween(this.who).to( { x: 1174 }, 1000, "Cubic", true, 100);
		this.game.add.tween(this.see).to( { x: 60 }, 1000, "Cubic", true, 100);

		this.game.add.tween(this.back).to( { x: -250 }, 1000, "Cubic", true, 100);

		this.game.add.tween(this.barFill).to( { y: 1000 }, 1000, "Cubic", true, 100);
		this.game.add.tween(this.barBase).to( { y: 1000 }, 1000, "Cubic", true, 100);

		this.game.add.tween(this.currentReadout).to( { y: 1200 }, 1000, "Cubic", true, 100);
		this.game.add.tween(this.totalReadout).to( { y: 1200 }, 1000, "Cubic", true, 100);

		this.game.add.tween(this.text1).to( { y: -140 }, 1000, "Cubic", true);
		this.game.add.tween(this.text2).to( { y: -140 }, 1000, "Cubic", true);
		this.game.add.tween(this.text3).to( { y: -140 }, 1000, "Cubic", true);
		this.game.add.tween(this.text4).to( { y: -140 }, 1000, "Cubic", true);

		this.sound.stop();
	}

	openWho() {
		if(this.who.x == 1174) { // heh
			this.game.add.tween(this.btn1).to( { x: -1000 }, 1000, "Cubic", true, 100);
			this.game.add.tween(this.btn2).to( { x: -1000 }, 1000, "Cubic", true, 200);
			this.game.add.tween(this.btn3).to( { x: -1000 }, 1000, "Cubic", true, 300);
			this.game.add.tween(this.btn4).to( { x: -1000 }, 1000, "Cubic", true, 400);
			this.game.add.tween(this.who).to( { x: 1600 }, 1000, "Cubic", true, 100);
			this.game.add.tween(this.see).to( { x: -200 }, 1000, "Cubic", true, 100);

			this.game.time.events.add(Phaser.Timer.SECOND * 1, this.openPop, this);
		}
	}

	openPop() {
		this.state.start('WhoState');
	}

	openSee() {
		if(this.see.x == 60) { // heh
			this.game.add.tween(this.btn1).to( { x: -1000 }, 1000, "Cubic", true, 100);
			this.game.add.tween(this.btn2).to( { x: -1000 }, 1000, "Cubic", true, 200);
			this.game.add.tween(this.btn3).to( { x: -1000 }, 1000, "Cubic", true, 300);
			this.game.add.tween(this.btn4).to( { x: -1000 }, 1000, "Cubic", true, 400);
			this.game.add.tween(this.who).to( { x: 1600 }, 1000, "Cubic", true, 100);
			this.game.add.tween(this.see).to( { x: -200 }, 1000, "Cubic", true, 100);

			this.game.time.events.add(Phaser.Timer.SECOND * 1, this.openSeePop, this);
		}
	}

	openSeePop() {
		this.state.start('SeeState');
	}


	update() {
		if(this.sound.isPlaying) {
			this.current = (this.sound.currentTime / 1000);
			this.total = this.sound.totalDuration;
			this.elapsed = this.current / this.total;

			this.barFill.scale.set(this.elapsed, 1);

			this.currentReadout.setText(this.toTime(this.current));
			this.totalReadout.setText(this.toTime(this.total));
		}
	}

	toTime(time) {
		var sec_num = parseInt(time, 10); // don't forget the second param
		var hours   = Math.floor(sec_num / 3600);
		var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
		var seconds = sec_num - (hours * 3600) - (minutes * 60);
	
		if (hours   < 10) {hours   = "0"+hours;}
		if (minutes < 10) {minutes = "0"+minutes;}
		if (seconds < 10) {seconds = "0"+seconds;}
		return hours+':'+minutes+':'+seconds;
	}
}

export default MenuState;
