/*

- Copy your game project code into this file
- for the p5.Sound library look here https://p5js.org/reference/#/libraries/p5.sound
- for finding cool sounds perhaps look here
https://freesound.org/

*/
let backgroundMusic;
let splashSound;
let foundSound;
let walkSound;
let jumpSound;
let hissSound;
let jetSound;
let flagsound;

let gameChar_x;
let gameChar_y;
let isWalkingLeft;
let isWalkingRight;

let floorPos_y;
let scrollPos;

let clouds;
let collectables;
let canyons;
let mountains;
let trees;
let steams;
let flames;
let gameChar_world_x;

let isLeft;
let isRight;
let isFalling;
let isPlummeting;
let game_score;
let flagpole;
let backpack;
let lives;

let platforms;
let enemies;

function preload() {
	soundFormats('mp3', 'wav');

	//load sound
	jumpSound = loadSound('assets/jump.wav');
	jumpSound.setVolume(0.1);
	walkSound = loadSound('assets/walk.wav');
	walkSound.setVolume(0.5);
	foundSound = loadSound('assets/found.mp3');
	foundSound.setVolume(0.6);
	splashSound = loadSound('assets/splash.wav');
	splashSound.setVolume(0.6);
	backgroundMusic = loadSound('assets/background.mp3');
	backgroundMusic.setVolume(0.0);
	hissSound = loadSound('assets/steam-hiss.wav');
	hissSound.setVolume(0.5);
	jetSound = loadSound('assets/jetSound.wav');
	jetSound.setVolume(0.5);
	flagSound = loadSound('assets/flagSound.wav')
	flagSound.setVolume(0.5);
}

function setup() {
	createCanvas(1024, 576);
	backgroundMusic.loop();

	lives = 3;

	startGame();

}

function startGame() {
	gameChar_x = width / 2;
	floorPos_y = height * 3 / 4;
	gameChar_y = floorPos_y;
	textAlign(LEFT);

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store width range in the game
	let incr = (width + 1000) / 2.5;

	/* Variable to store the real position of the gameChar in the game
	   world. Needed for collision detection.*/
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
	mountains = [];
	for (let i = 0; i < 5; i++) {
		let mount = createMountain(-800 + i * incr, floorPos_y - 32, random(0.8, 1, 2));
		mountains.push(mount);
	}

	canyons = [];
	for (let i = 0; i < 4; i++) {
		let canyon = createCanyon(-600 + i * incr, random(30, 55));
		canyons.push(canyon);
	}


	trees = [];
	for (let i = 0; i < 10; i++) {
		let tree = createTree(-600 + i * incr, floorPos_y - 80);
		trees.push(tree);
	}

	clouds = [];
	for (let i = 0; i < 10; i++) {
		let cloud = createCloud(-600 + i * incr / 2.5, random(100, 200));
		clouds.push(cloud);
	}

	collectables = [];
	for (let i = 0; i < 3; i++) {
		let coll = createCollectable(600 + i * incr / 2, floorPos_y);
		collectables.push(coll);
	}

	// add enemy to array use constructor function
	enemies = [];
	enemies.push(new Enemy(100, floorPos_y - 40, 100));
	enemies.push(new Enemy(900, floorPos_y - 40, 100));

	// Initialize jet backpack flame array
	flames = [];

	// Initialize platforms and steams array 
	platforms = [];
	steams = [];
	platforms.push(createPlatform(400, floorPos_y - 100, 100));
	platforms.push(createPlatform(1400, floorPos_y - 150, 200));

	// Initialize flagpole object
	flagpole = {
		x_pos: 2200,
		isReached: false
	};

	// Initialize jet backpack object
	backpack = {
		isEqipeed: false,
		isFlame: false,
		checkBackpack: function () {
			let d = abs(dist(platforms[0].x + 10, platforms[0].y, gameChar_world_x, gameChar_y));
			if (d < 10) {
				this.isEqipeed = true;
			}
		},

		draw: function (x, y) {
			if (!this.isEqipeed) {
				fill(222, 200, 0);
				rect(x, y, 12, 30, 15);
			}
			if (isLeft && this.isEqipeed) {
				fill(222, 200, 0);
				rect(gameChar_world_x + 50, gameChar_y - 48, 12, 30, 15);
			} else if (isRight && this.isEqipeed) {
				fill(222, 200, 0);
				rect(gameChar_world_x - 12, gameChar_y - 48, 12, 30, 15);
			}

			if (this.isEqipeed && gameChar_y < floorPos_y && isRight && isFalling) {
				fill(222, 200, 0);
				rect(gameChar_world_x - 12, gameChar_y - 48, 12, 30, 15);
				fill(255, 0, 0);

				rect(gameChar_world_x - 12, gameChar_y - 48, 12, 30, 15);
				fill(255, 150, 0);
				this.isFlame = true;
			}

			if (this.isEqipeed && gameChar_y < floorPos_y && isLeft && isFalling) {
				fill(222, 200, 0);
				rect(gameChar_world_x + 50, gameChar_y - 48, 12, 30, 15);
				fill(255, 0, 0);

				rect(gameChar_world_x + 50, gameChar_y - 48, 12, 30, 15);
				fill(255, 150, 0);
				this.isFlame = true;
			}

			if (this.isEqipeed && isLeft && isFalling && isRight) {
				fill(222, 200, 0);
				rect(gameChar_world_x + 50, gameChar_y - 48, 12, 30, 15);
				fill(255, 0, 0);

				rect(gameChar_world_x + 50, gameChar_y - 48, 12, 30, 15);
				fill(255, 150, 0);
				this.isFlame = true;
			}

		},

		drawFlame: function () {
			if (this.isFlame) {
				let p = new Flame(gameChar_world_x, gameChar_y);
				flames.push(p)

				for (let i = flames.length - 1; i >= 0; i--) {
					flames[i].update(random(-1, 1), random(5, 9), 30, 3);
					flames[i].drawOnCharacter();

					if (flames[i].remove())

					{
						flames.splice(i, 1);
					}
				}

			}
		}
	}

	game_score = 0;

}

//TODO 
//change mountain colors

function draw() {
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height / 4); // draw some green ground

	push();
	translate(scrollPos, 0);

	// Draw mountains.
	mountains.forEach(mountain => (mountain).draw());

	// Draw clouds.
	clouds.forEach(function (cloud) {
		cloud.draw();
		cloud.x += 0.1;
		if (cloud.x > width + 1500) {
			cloud.x = -500;
		}
	});

	// Draw trees.
	trees.forEach(tree => (tree).draw());

	// Draw canyons
	canyons.forEach(function (canyon) {
		canyon.draw();
		canyon.checkCanyon();
	});
	let grandeCanyon = createCanyon(1500, 400);
	grandeCanyon.draw();
	grandeCanyon.checkCanyon();

	// Draw collectable items.
	collectables.forEach(function (colectable) {
		if (!colectable.isFound) {
			colectable.draw();
			colectable.checkCollectable(gameChar_world_x, gameChar_y);
		}
	});

	// Draw platforms
	platforms.forEach(function (platform) {
		platform.draw();
		platform.drawFlame();
		platform.checkFlame(gameChar_world_x, gameChar_y);
		platform.checkContact(gameChar_world_x, gameChar_y);
	});

	// Draw backpack
	backpack.checkBackpack();
	backpack.draw(platforms[0].x + 10, platforms[0].y - 30);
	backpack.drawFlame();

	// Draw enemies
	enemies.forEach(function (enemy) {
		let isContact = enemy.checkContact(gameChar_world_x, gameChar_y);
		enemy.draw();
		enemy.update();
		enemy.drawEye();
		if (isContact) {
			if (lives > 0) {
				startGame();
			}
			lives--
		}

	});

	// Draw flag pole  reached
	renderFlagpole();

	// Check remaining lives
	checkPlayerDie();
	pop();
	// Draw game character.
	drawGameChar();

	// Draw Score text
	drawScore();

	// Draw lives tokens
	drawLivesToken();

	// Logic for displays "Game over" when lives is less than 1
	if (lives < 1) {
		textAlign(CENTER);
		textStyle(BOLD);
		stroke(255, 99, 71);
		fill(255, 215, 0);
		textSize(50);
		text("GAME OVER", width / 2, height / 2);
		textSize(20);
		text("INSERT COIN", width / 2, height * 0.55);
		return;
	}

	// Logic for displays "Level complete. Press space to continue." when `flagpole.isReached` is true.
	if (flagpole.isReached) {
		textAlign(CENTER);
		textStyle(BOLD);
		text("Press space to continue", width / 2, height / 3);
		return;
	}

	// Logic to make the game character move or the background scroll.
	if (isLeft) {
		if (gameChar_x > width * 0.2) {
			gameChar_x -= 5;
		} else {
			scrollPos += 5;
		}
	}

	if (isRight) {
		if (gameChar_x < width * 0.8) {
			gameChar_x += 5;
		} else {
			scrollPos -= 5; // negative for moving against the background
		}
	}

	// Logic to make the game character rise and fall.
	if (gameChar_y < floorPos_y) {
		let isContact = false;
		for (let i = 0; i < platforms.length; i++) {
			if (platforms[i].checkContact(gameChar_world_x, gameChar_y)) {
				isContact = true;
				jetSound.stop();
				break;
			}
		}
		if (!isContact) {
			gameChar_y += 2;
			isFalling = true;
		}
	} else {
		isFalling = false;
		jetSound.stop();
	}

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Check collision detection game character with flag pole
	if (flagpole.isReached == false) {
		checkFlagpole();
	}
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed() {

	if (key == 'A' || keyCode == 37) {
		isLeft = true;
		walkSound.play();
	}

	if (key == 'D' || keyCode == 39) {
		isRight = true;
		walkSound.play();
	}
	if (keyCode == 32 || key == 'w') {
		if(!flagpole.isReached){
		if (!isFalling) {
			gameChar_y -= 100;
			jumpSound.play();
		}

		if (!isFalling && backpack.isEqipeed) {
			gameChar_y -= 180;
			jetSound.play();
		}
	}else{
		text("Level 2 in development", width / 2, height / 3 + 20);
	}
}
}

function keyReleased() {

	if (key == 'A' || keyCode == 37) {
		isLeft = false;
		walkSound.stop();
	}

	if (key == 'D' || keyCode == 39) {
		isRight = false;
		walkSound.stop();
	}
}

// ------------------------------
// Game character render function
// ------------------------------
function drawGameChar() {
	noStroke();
	if (isLeft && isFalling) {

		//jumping-left code
		fill(41, 152, 69);
		rect(gameChar_x, gameChar_y - 70, 50, 25, 5); //head
		rect(gameChar_x + 25, gameChar_y - 45, 25, 27, 5, 5, 1, 1); //body light
		fill(50, 110, 60);
		rect(gameChar_x + 25, gameChar_y - 45, 25, 7, 5, 5, 0, 0); // body dark
		fill(215, 110, 40);
		rect(gameChar_x + 25, gameChar_y - 21, 25, 3, 2) // belt
		fill(95, 198, 209);
		rect(gameChar_x + 25, gameChar_y - 19, 25, 12, 2, 2, 3, 3) // hips
		fill(215, 110, 40);
		ellipse(gameChar_x + 32, gameChar_y - 2, 4, 4); //shoes
		ellipse(gameChar_x + 43, gameChar_y - 2, 4, 4);
		fill(95, 198, 209);
		rect(gameChar_x + 30, gameChar_y - 11, 4, 8); //left leg
		rect(gameChar_x + 41, gameChar_y - 11, 4, 8); //right leg
		stroke(255);
		strokeWeight(2);
		line(gameChar_x, gameChar_y - 56, gameChar_x + 35, gameChar_y - 56); //mouth
		noStroke();
		fill(0);
		ellipse(gameChar_x + 5, gameChar_y - 60, 3, 3); //nose
		ellipse(gameChar_x + 10, gameChar_y - 60, 3, 3);
		fill(255, 0, 255);
		ellipse(gameChar_x + 34, gameChar_y - 73, 9, 9); //glases
		ellipse(gameChar_x + 42, gameChar_y - 73, 9, 9);
		rect(gameChar_x + 27, gameChar_y - 73, 3, 2);
		rect(gameChar_x + 46, gameChar_y - 73, 3, 2);
		fill(255);
		ellipse(gameChar_x + 34, gameChar_y - 73, 6, 6); //eyes
		ellipse(gameChar_x + 42, gameChar_y - 73, 6, 6);
		fill(0);
		ellipse(gameChar_x + 34, gameChar_y - 73, 3, 3);
		ellipse(gameChar_x + 42, gameChar_y - 73, 3, 3);
		//arms
		angleMode(DEGREES);
		push();
		translate(gameChar_x + 38, gameChar_y - 43);
		rotate(-45);
		fill(41, 152, 69);
		rect(0, 0, 3, 30, 5);
		pop();
	} else if (isRight && isFalling) {

		//jumping-right code
		fill(41, 152, 69);
		rect(gameChar_x, gameChar_y - 70, 50, 25, 5); //head
		rect(gameChar_x, gameChar_y - 45, 25, 27, 5, 5, 1, 1); //body light
		fill(50, 110, 60);
		rect(gameChar_x, gameChar_y - 45, 25, 7, 5, 5, 0, 0); // body dark
		fill(215, 110, 40);
		rect(gameChar_x, gameChar_y - 21, 25, 3, 2) // belt
		fill(95, 198, 209);
		rect(gameChar_x, gameChar_y - 18, 25, 12, 2, 2, 3, 3) // hips
		fill(215, 110, 40);
		ellipse(gameChar_x + 7, gameChar_y - 2, 4, 4); //shoes
		ellipse(gameChar_x + 18, gameChar_y - 2, 4, 4);
		fill(95, 198, 209);
		rect(gameChar_x + 5, gameChar_y - 11, 4, 8); //left leg
		rect(gameChar_x + 16, gameChar_y - 11, 4, 8); //right leg
		stroke(255);
		strokeWeight(2);
		line(gameChar_x + 15, gameChar_y - 56, gameChar_x + 50, gameChar_y - 56); //mouth
		noStroke();
		fill(0);
		ellipse(gameChar_x + 45, gameChar_y - 60, 3, 3); //nose
		ellipse(gameChar_x + 40, gameChar_y - 60, 3, 3);
		fill(255, 0, 255);
		ellipse(gameChar_x + 7, gameChar_y - 73, 9, 9); //glases
		ellipse(gameChar_x + 15, gameChar_y - 73, 9, 9);
		rect(gameChar_x + 1, gameChar_y - 73, 3, 2);
		rect(gameChar_x + 19, gameChar_y - 73, 3, 2);
		fill(255);
		ellipse(gameChar_x + 7, gameChar_y - 73, 6, 6); //eyes
		ellipse(gameChar_x + 15, gameChar_y - 73, 6, 6);
		fill(0);
		ellipse(gameChar_x + 7, gameChar_y - 73, 3, 3);
		ellipse(gameChar_x + 15, gameChar_y - 73, 3, 3);
		//arms
		push();
		translate(gameChar_x + 9, gameChar_y - 43);
		rotate(45);
		fill(41, 152, 69);
		rect(0, 0, 3, 30, 5);
		pop();

	} else if (isLeft) {
		//walking left code
		fill(41, 152, 69);
		rect(gameChar_x, gameChar_y - 73, 50, 25, 5); //head
		rect(gameChar_x + 25, gameChar_y - 48, 25, 27, 5, 5, 1, 1); //body light
		fill(50, 110, 60);
		rect(gameChar_x + 25, gameChar_y - 48, 25, 7, 5, 5, 0, 0); // body dark
		fill(215, 110, 40);
		rect(gameChar_x + 25, gameChar_y - 24, 25, 3, 2) // belt
		fill(95, 198, 209);
		rect(gameChar_x + 25, gameChar_y - 21, 25, 12, 2, 2, 3, 3) // hips
		fill(215, 110, 40);
		ellipse(gameChar_x + 32, gameChar_y, 4, 4); //shoes
		ellipse(gameChar_x + 43, gameChar_y, 4, 4);
		fill(95, 198, 209);
		rect(gameChar_x + 30, gameChar_y - 9, 4, 8); //left leg
		rect(gameChar_x + 41, gameChar_y - 9, 4, 8); //right leg
		stroke(255);
		strokeWeight(2);
		line(gameChar_x, gameChar_y - 59, gameChar_x + 35, gameChar_y - 59); //mouth
		noStroke();
		fill(0);
		ellipse(gameChar_x + 5, gameChar_y - 63, 3, 3); //nose
		ellipse(gameChar_x + 10, gameChar_y - 63, 3, 3);
		fill(255, 0, 255);
		ellipse(gameChar_x + 34, gameChar_y - 76, 9, 9); //glases
		ellipse(gameChar_x + 42, gameChar_y - 76, 9, 9);
		rect(gameChar_x + 27, gameChar_y - 76, 3, 2);
		rect(gameChar_x + 46, gameChar_y - 76, 3, 2);
		fill(255);
		ellipse(gameChar_x + 34, gameChar_y - 76, 6, 6); //eyes
		ellipse(gameChar_x + 42, gameChar_y - 76, 6, 6);
		fill(0);
		ellipse(gameChar_x + 34, gameChar_y - 76, 3, 3);
		ellipse(gameChar_x + 42, gameChar_y - 76, 3, 3);
		//arms
		angleMode(DEGREES);
		push();
		translate(gameChar_x + 38, gameChar_y - 46);
		rotate(45);
		fill(41, 152, 69);
		rect(0, 0, 3, 30, 5);
		pop();

	} else if (isRight) {

		//walking right code
		fill(41, 152, 69);
		rect(gameChar_x, gameChar_y - 73, 50, 25, 5); //head
		rect(gameChar_x, gameChar_y - 48, 25, 27, 5, 5, 1, 1); //body light
		fill(50, 110, 60);
		rect(gameChar_x, gameChar_y - 48, 25, 7, 5, 5, 0, 0); // body dark
		fill(215, 110, 40);
		rect(gameChar_x, gameChar_y - 24, 25, 3, 2) // belt
		fill(95, 198, 209);
		rect(gameChar_x, gameChar_y - 21, 25, 12, 2, 2, 3, 3) // hips
		fill(215, 110, 40);
		ellipse(gameChar_x + 7, gameChar_y, 4, 4); //shoes
		ellipse(gameChar_x + 18, gameChar_y, 4, 4);
		fill(95, 198, 209);
		rect(gameChar_x + 5, gameChar_y - 9, 4, 8); //left leg
		rect(gameChar_x + 16, gameChar_y - 9, 4, 8); //right leg
		stroke(255);
		strokeWeight(2);
		line(gameChar_x + 15, gameChar_y - 59, gameChar_x + 50, gameChar_y - 59); //mouth
		noStroke();
		fill(0);
		ellipse(gameChar_x + 45, gameChar_y - 63, 3, 3); //nose
		ellipse(gameChar_x + 40, gameChar_y - 63, 3, 3);
		fill(255, 0, 255);
		ellipse(gameChar_x + 7, gameChar_y - 76, 9, 9); //glases
		ellipse(gameChar_x + 15, gameChar_y - 76, 9, 9);
		rect(gameChar_x + 1, gameChar_y - 76, 3, 2);
		rect(gameChar_x + 19, gameChar_y - 76, 3, 2);
		fill(255);
		ellipse(gameChar_x + 7, gameChar_y - 76, 6, 6); //eyes
		ellipse(gameChar_x + 15, gameChar_y - 76, 6, 6);
		fill(0);
		ellipse(gameChar_x + 7, gameChar_y - 76, 3, 3);
		ellipse(gameChar_x + 15, gameChar_y - 76, 3, 3);
		//arms
		angleMode(DEGREES);
		push();
		translate(gameChar_x + 9, gameChar_y - 46);
		rotate(-45);
		fill(41, 152, 69);
		rect(0, 0, 3, 30, 5);
		pop();

	} else if (isFalling) {

		//jumping facing forwards code
		fill(41, 152, 69);
		rect(gameChar_x + 15, gameChar_y - 69, 25, 25, 5); //head
		rect(gameChar_x + 15, gameChar_y - 45, 25, 27, 5, 5, 1, 1); //body light
		fill(50, 110, 60);
		rect(gameChar_x + 15, gameChar_y - 45, 25, 7, 5, 5, 0, 0); // body dark
		fill(215, 110, 40);
		rect(gameChar_x + 15, gameChar_y - 21, 25, 3, 2) // belt
		fill(95, 198, 209);
		rect(gameChar_x + 15, gameChar_y - 18, 25, 12, 2, 2, 3, 3) // hips
		fill(215, 110, 40);
		ellipse(gameChar_x + 22, gameChar_y - 2, 4, 4); //shoes
		ellipse(gameChar_x + 33, gameChar_y - 2, 4, 4);
		fill(95, 198, 209);
		rect(gameChar_x + 20, gameChar_y - 11, 4, 8); //left leg
		rect(gameChar_x + 31, gameChar_y - 11, 4, 8); //right leg
		stroke(255);
		strokeWeight(2);
		line(gameChar_x + 15, gameChar_y - 55, gameChar_x + 40, gameChar_y - 55); //mouth
		noStroke();
		fill(0);
		ellipse(gameChar_x + 25, gameChar_y - 59, 3, 3); //nose
		ellipse(gameChar_x + 30, gameChar_y - 59, 3, 3);
		fill(255, 0, 255);
		ellipse(gameChar_x + 24, gameChar_y - 72, 9, 9); //glases
		ellipse(gameChar_x + 32, gameChar_y - 72, 9, 9);
		rect(gameChar_x + 17, gameChar_y - 72, 3, 2);
		rect(gameChar_x + 36, gameChar_y - 72, 3, 2);
		fill(255);
		ellipse(gameChar_x + 24, gameChar_y - 72, 6, 6); //eyes
		ellipse(gameChar_x + 32, gameChar_y - 72, 6, 6);
		fill(0);
		ellipse(gameChar_x + 24, gameChar_y - 72, 3, 3);
		ellipse(gameChar_x + 32, gameChar_y - 72, 3, 3);
		//arms
		angleMode(DEGREES);
		fill(41, 152, 69);
		push();
		translate(gameChar_x + 16, gameChar_y - 41);
		rotate(160);
		rect(0, 0, 3, 30, 0, 5, 5, 5);
		pop();

		push();
		translate(gameChar_x + 42, gameChar_y - 41);
		rotate(-160);
		rect(0, 0, 3, 30, 5, 0, 5, 5);
		pop();
		fill(255, 0, 255);
		ellipse(gameChar_x + 24, gameChar_y - 72, 9, 9); //glases
		ellipse(gameChar_x + 32, gameChar_y - 72, 9, 9);
		rect(gameChar_x + 17, gameChar_y - 72, 3, 2);
		rect(gameChar_x + 36, gameChar_y - 72, 3, 2);
		fill(255);
		ellipse(gameChar_x + 24, gameChar_y - 72, 6, 6); //eyes
		ellipse(gameChar_x + 32, gameChar_y - 72, 6, 6);
		fill(0);
		ellipse(gameChar_x + 24, gameChar_y - 72, 3, 3);
		ellipse(gameChar_x + 32, gameChar_y - 72, 3, 3);
		//arms
		angleMode(DEGREES);
		fill(41, 152, 69);
		push();
		translate(gameChar_x + 16, gameChar_y - 41);
		rotate(160);
		rect(0, 0, 3, 30, 0, 5, 5, 5);
		pop();

		push();
		translate(gameChar_x + 42, gameChar_y - 41);
		rotate(-160);
		rect(0, 0, 3, 30, 5, 0, 5, 5);
		pop();

	} else {

		// standing front facing code
		fill(41, 152, 69);
		rect(gameChar_x + 15, gameChar_y - 73, 25, 25, 5); //head
		rect(gameChar_x + 15, gameChar_y - 48, 25, 27, 5, 5, 1, 1); //body light
		fill(41, 152, 69);
		fill(50, 110, 60);
		rect(gameChar_x + 15, gameChar_y - 48, 25, 7, 5, 5, 0, 0); // body dark
		fill(215, 110, 40);
		rect(gameChar_x + 15, gameChar_y - 24, 25, 3, 2) // belt
		fill(95, 198, 209);
		rect(gameChar_x + 15, gameChar_y - 21, 25, 12, 2, 2, 3, 3) // hips
		fill(215, 110, 40);
		ellipse(gameChar_x + 22, gameChar_y, 4, 4); //shoes
		ellipse(gameChar_x + 33, gameChar_y, 4, 4);
		fill(95, 198, 209);
		rect(gameChar_x + 20, gameChar_y - 9, 4, 8); //left leg
		rect(gameChar_x + 31, gameChar_y - 9, 4, 8); //right leg
		stroke(255);
		strokeWeight(2);
		line(gameChar_x + 15, gameChar_y - 59, gameChar_x + 40, gameChar_y - 59); //mouth
		noStroke();
		fill(0);
		ellipse(gameChar_x + 25, gameChar_y - 63, 3, 3); //nose
		ellipse(gameChar_x + 30, gameChar_y - 63, 3, 3);
		fill(255, 0, 255);
		ellipse(gameChar_x + 24, gameChar_y - 76, 9, 9); //glases
		ellipse(gameChar_x + 32, gameChar_y - 76, 9, 9);
		rect(gameChar_x + 17, gameChar_y - 76, 3, 2);
		rect(gameChar_x + 36, gameChar_y - 76, 3, 2);
		fill(255);
		ellipse(gameChar_x + 24, gameChar_y - 76, 6, 6); //eyes
		ellipse(gameChar_x + 32, gameChar_y - 76, 6, 6);
		fill(0);
		ellipse(gameChar_x + 24, gameChar_y - 76, 3, 3);
		ellipse(gameChar_x + 32, gameChar_y - 76, 3, 3);
		//arms
		fill(41, 152, 69);
		rect(gameChar_x + 12, gameChar_y - 46, 3, 30, 5, 0, 5, 5);
		rect(gameChar_x + 40, gameChar_y - 46, 3, 30, 0, 5, 5, 5);
	}
}

// ---------------------------
// Background render functions
// ---------------------------



// ---------------------------------
// Canyon render and check functions
// ---------------------------------


// --------------------------------------------
// Collectable items render and check functions
// --------------------------------------------


// Function to draw Score:
function drawScore() {
	textAlign(LEFT);
	textStyle(BOLD);
	textSize(16);
	fill(255);
	noStroke();
	text("SCORE: " + game_score, 30, 20);
}
// Function to draw flagpole and play sound 
function renderFlagpole() {

	var flagY = floorPos_y - 30;
	stroke(255);
	strokeWeight(5);
	line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 200);
	fill(255, 0, 255);
	noStroke();
	if (!flagpole.isReached) {
		rect(flagpole.x_pos, flagY, 40, 30);
	} else {
		rect(flagpole.x_pos, flagY - 200, 40, 30);
		flagSound.play();
		jetSound.stop();
		noLoop();
	}
}

// Function to check coolisions flag pole with gameCharacter
function checkFlagpole() {
	var d = abs(gameChar_world_x - flagpole.x_pos);
	if (d < 15) {
		flagpole.isReached = true;
	}
}

// Function to check if player die
function checkPlayerDie() {
	if (gameChar_y > height) {
		lives -= 1;
		startGame();
		splashSound.play();
	}
}


function drawLivesToken() {
	for (var i = 0; i < lives; i++) {
		fill(255, 0, 255);
		stroke(255);
		strokeWeight(5);
		ellipse(width - 150 + i * 25, height / 22, 20, 20);
	}
}

// ------------------------------------------------------------------------------
// Factory paterns and constructors for background scenery, enemies and platforms
// ------------------------------------------------------------------------------

function createMountain(x, y, scale) {
	let mount = {
		x: x,
		y: y,
		scale: scale,
		draw: function () {
			fill(200, 0, 200);
			noStroke();
			triangle(this.x, this.y + 32,
				this.x + 150 * this.scale, this.y - 300 * this.scale,
				this.x + 250 * this.scale, this.y + 32);
		}
	}
	return mount;
}

function createCanyon(x, width) {
	let canyon = {
		x: x,
		width: width,

		draw: function () {

			fill(139, 69, 19);
			rect(this.x + 80, floorPos_y, 40 + this.width, 144); //blue canyon gap
		},

		checkCanyon: function () {
			if (isPlummeting == true) {
				gameChar_y += 5;

				// plummentig character cannot go outside of canyon walls
				gameChar_world_x = constrain(gameChar_world_x,
					this.x + 80,
					this.x + 80 +
					this.width);
			}

			if ((gameChar_world_x >= this.x + 80) &&
				(gameChar_world_x <= this.x + 80 + this.width) &&
				(gameChar_y >= floorPos_y)) {
				isPlummeting = true;
			} else {
				isPlummeting = false;
			}

		}
	}
	return canyon;
}

function createTree(x, y) {
	let tree = {
		x: x,
		y: y,
		scale: random(0.8, 1.2),

		draw: function () {
			fill(155, 103, 60); //tree trunk
			rect(this.x, this.y, 20, 82);
			fill(0, 255, 0); //branches
			ellipse(this.x + 10, this.y - 30, 80, 80);
			ellipse(this.x - 30, this.y - 50, 80, 80);
			ellipse(this.x + 50, this.y - 50, 80, 80);
			ellipse(this.x - 20, this.y - 90, 80, 80);
			ellipse(this.x + 30, this.y - 90, 80, 80);

		}
	}
	return tree;
}

function createCloud(x, y) {
	let cloud = {
		x: x,
		y: y,
		scale: random(0.7, 1.1),

		draw: function () {
			fill(255);
			ellipse(this.x, this.y, 100 * this.scale, 80 * this.scale);
			ellipse(this.x + 35 * this.scale, this.y, 80 * this.scale, 60 * this.scale);
			ellipse(this.x + 70 * this.scale, this.y, 40 * this.scale, 30 * this.scale);
		}
	}
	return cloud;
}

function createCollectable(x, y) {
	let c = {
		x: x,
		y: y,
		isFound: false,

		checkCollectable: function (gc_x, gc_y) {
			if (dist(gc_x, gc_y, this.x, this.y + 10) < 30) {
				this.isFound = true;
				game_score += 1;
				foundSound.play();
			}
		},
		draw: function () {
			if (this.isFound == false) {

				noStroke();
				fill(255, 0, 0);
				rect(this.x, this.y - 40, 40, 40);
				rect(this.x - 5, this.y - 45, 50, 10);
				fill(222, 200, 0);
				rect(this.x + 18, this.y - 45, 4, 43);
				rect(this.x, this.y - 25, 40, 4);
			}
		}
	}
	return c;
}

function createPlatform(x, y, length) {
	let platform = {
		x: x,
		y: y,
		length: length,
		isFlame: false,
		draw: function () {
			fill(100, 100, 100);
			rect(this.x, this.y, this.length, 15, 25, 0, 0, 0);
			rect(this.x, this.y, 15, 30, 25, 0, 0, 0);
		},
		// Add steam hiss to platform
		drawFlame: function () {
			if (this.isFlame) {
				let p = new Flame(this.x + 7, this.y + 30);
				steams.push(p)
				steams.forEach(function (steam) {
					steam.update(random(-1, 1), random(5, 9), 25, -1);
					steam.draw();
					steam.checkSteamContact(gameChar_world_x, gameChar_y);
					if (steam.remove()) {
						steams.splice(steam, 1);
					}
				});

			}
		},

		// Distance to activate steam hiss
		checkFlame: function (gc_x, gc_y) {
			let d = abs(this.x + 30 - gc_x);
			if (d >= 0 && d < 70) {
				this.isFlame = true;
			} else {
				this.isFlame = false;
			}
		},

		// Check if player is on platform
		checkContact: function (gc_x, gc_y) {
			if (gc_x > this.x - 30 && gc_x < this.x + this.length - 20) {
				let d = this.y - gc_y;
				if (d >= 0 && d < 3) {
					isFalling = false;
					return true;
				}
			}

			return false;
		}
	}
	return platform;
}

// Particle used for create jet backpack flame and steam
function Flame(x, y) {
	this.v = createVector(x, y);
	this.vx = random(-1, 1);
	this.vy = random(5, 9);
	this.alpha = 255;
	this.r = 25;

	this.draw = function () {
		noStroke();
		fill(170, 100);
		ellipse(this.v.x, this.v.y, this.r);
	}

	// Logic to draw flame if jet backpack is equipped
	this.drawOnCharacter = function () {
		if (isRight && isFalling) {
			noStroke();
			fill(random(250, 255), random(100, 160), random(70, 80), this.alpha);
			ellipse(this.v.x - 10, this.v.y - 10, this.r);
		}
		if (isLeft && isFalling) {

			noStroke();
			fill(random(250, 255), random(100, 160), random(70, 80), this.alpha);
			ellipse(this.v.x + 60, this.v.y - 10, this.r);
		}
	}

	// Length of flame/steam
	this.update = function (vx, vy, alpha, r) {
		this.v.x += vx;
		this.v.y += vy;
		this.alpha -= alpha;
		this.r -= r;
	}

	// Return true if particle is not visible
	this.remove = function () {
		return this.alpha < 0;
	}

	// Check if player has contact with hot steam
	this.checkSteamContact = function (gc_x, gc_y) {
		let d = abs(gc_x - this.v.x);
		if (d < 3 && gc_y > this.v.y) {
			if (lives > 0) {
				startGame();
			}
			lives--;
		}

	}
}

function Enemy(x, y, range) {
	this.x = x;
	this.y = y;
	this.range = range;
	this.size = 100;

	this.currentX = x;
	this.incr = 1;

	this.update = function () {
		this.currentX += this.incr;

		if (this.currentX >= this.x + this.range) {
			this.incr = -1;
		} else if (this.currentX < this.x) {
			this.incr = 1;
		}
	}

	this.draw = function () {
		fill(0)
		rect(this.currentX, this.y, 40, 40);
	}

	this.drawEye = function () {
			push();
			translate(this.currentX, this.y);
			var v = createVector(gameChar_world_x - this.currentX, gameChar_y - this.y);
			v.normalize();
			v.mult((this.size * 0.1) / 2);

			fill(255);
			ellipse(10, 10, this.size * 0.15);
			ellipse(30, 10, this.size * 0.15);

			fill(0);
			ellipse(10 + v.x, 10 + v.y, this.size * 0.05);
			ellipse(30 + v.x, 10 + v.y, this.size * 0.05);
			pop();
		},

		this.checkContact = function (gc_x, gc_y) {
			let d = dist(gc_x, gc_y, this.currentX + 20, this.y + 20);

			if (d < 25) {
				return true;
			}

			return false;
		}

}