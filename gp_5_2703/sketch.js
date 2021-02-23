/*

- Copy your game project code into this file
- for the p5.Sound library look here https://p5js.org/reference/#/libraries/p5.sound
- for finding cool sounds perhaps look here
https://freesound.org/

*/
let walkSound;
let jumpSound;
let gameChar_x;
let gameChar_y;
let floorPos_y;
let scrollPos;
let trees_x;
let collectables;
let canyons;
let mountains;
let gameChar_world_x;

let isLeft;
let isRight;
let isFalling;
let isPlummeting;
let game_score;
let flagpole;
let lives;


function preload()
{
	soundFormats('mp3','wav');

	//load sound
	jumpSound = loadSound('assets/jump.wav');
    jumpSound.setVolume(0.1);
	walkSound = loadSound('assets/walk.wav');
}

function setup()
{
	createCanvas(1024, 576);
	
	lives = 3;

	startGame();
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

	push();
	translate(scrollPos, 0);
	// Draw clouds.
	drawClouds();

	// Draw mountains.
	drawMountains();
	

	// Draw trees.
	drawTrees();
	

	// Draw canyons.
		for(var i = 0; i < canyons.length; i++)
	{
		drawCanyon(canyons[i]);
		checkCanyon(canyons[i]);
	}
	

	// Draw collectable items.
	for(var i = 0; i < collectables.length; i++)
	{
		if(!collectables[i].isFound)
		{
			drawCollectable(collectables[i]);
			checkCollectable(collectables[i]);
		}
	}
	// Draw flag pole and check if is reached
	renderFlagpole();
	checkFlagpole();

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
	if(lives < 1)
	{
		textAlign(CENTER);
		textStyle(BOLD);
		stroke(255, 99, 71);
		fill(255, 215, 0);
		textSize(50);
		text("GAME OVER", width/2, height/2);
		textSize(20);
		text("INSERT COIN", width/2, height*0.55);
		return;
	}

	// Logic for displays "Level complete. Press space to continue." when `flagpole.isReached` is true.
	if(flagpole.isReached == true)
	{
		textAlign(CENTER);
		textStyle(BOLD);
		text("Press space to continue", width/2, height/3);
		return;
	}

	// Logic to make the game character move or the background scroll.
	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}
	}

	// Logic to make the game character rise and fall.
	if(gameChar_y < floorPos_y)
	{
		gameChar_y += 2  ;
		isFalling = true;
	}
	else
	{
		isFalling = false;
    }

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Check collision detection game character with flag pole
	if(flagpole.isReached == false)
	{
		checkFlagpole();
	}

	
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed(){

	console.log("press" + keyCode);
	console.log("press" + key);
	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}
	if (keyCode == 32 && gameChar_y >= floorPos_y) // stop character to jump higher
	{
        gameChar_y -= 100;
	    jumpSound.play();
	}
	

}

function keyReleased()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}

}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.
function drawGameChar()
{
	// draw game character
	noStroke();
	if (isLeft && isFalling) {
		// add your jumping-left code
		//Head
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
		// add your jumping-right code
		//Head
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
		// add your walking left code
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
		// add your walking right code
		//Head
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

	}
	else if(isFalling)    	{
		//jumping facing forwards code
		//Head
		fill(41, 152, 69);
		rect(gameChar_x + 15, gameChar_y - 69, 25, 25, 5);//head
		rect(gameChar_x + 15, gameChar_y - 45, 25, 27, 5, 5, 1, 1);//body light
		fill(50, 110, 60);
		rect(gameChar_x + 15, gameChar_y - 45, 25, 7, 5, 5, 0, 0);// body dark
		fill(215, 110, 40);
		rect(gameChar_x + 15, gameChar_y - 21, 25, 3, 2)// belt
		fill(95, 198, 209);
		rect(gameChar_x + 15, gameChar_y - 18, 25, 12, 2, 2, 3, 3)// hips
		fill(215, 110, 40);
		ellipse(gameChar_x + 22, gameChar_y - 2, 4, 4);//shoes
		ellipse(gameChar_x + 33, gameChar_y - 2, 4, 4);
		fill(95, 198, 209);
		rect(gameChar_x + 20, gameChar_y - 11, 4, 8);//left leg
		rect(gameChar_x + 31, gameChar_y - 11, 4, 8);//right leg
		stroke(255);
		strokeWeight(2);
		line(gameChar_x + 15, gameChar_y - 55, gameChar_x +40, gameChar_y - 55);//mouth
		noStroke();
		fill(0);
		ellipse(gameChar_x + 25, gameChar_y - 59, 3, 3);//nose
		ellipse(gameChar_x + 30, gameChar_y - 59, 3, 3);
		fill(255, 0, 255);
		ellipse(gameChar_x + 24, gameChar_y - 72, 9, 9);//glases
		ellipse(gameChar_x + 32, gameChar_y - 72, 9, 9);
		rect(gameChar_x + 17, gameChar_y - 72, 3, 2);
		rect(gameChar_x + 36, gameChar_y - 72, 3, 2);
		fill(255);
		ellipse(gameChar_x + 24, gameChar_y - 72, 6, 6);//eyes
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
		ellipse(gameChar_x + 24, gameChar_y - 72, 9, 9);//glases
		ellipse(gameChar_x + 32, gameChar_y - 72, 9, 9);
		rect(gameChar_x + 17, gameChar_y - 72, 3, 2);
		rect(gameChar_x + 36, gameChar_y - 72, 3, 2);
		fill(255);
		ellipse(gameChar_x + 24, gameChar_y - 72, 6, 6);//eyes
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
	}
	else {
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

function drawClouds()
{
	for(var i = 0; i < clouds.length; i++)
	{
		fill(255);
		ellipse(clouds[i].x_pos, clouds[i].y_pos, 100* clouds[i].scale, 80 * clouds[i].scale);
		ellipse(clouds[i].x_pos+35*clouds[i].scale, clouds[i].y_pos, 80 * clouds[i].scale, 60 * clouds[i].scale);
		ellipse(clouds[i].x_pos+70*clouds[i].scale, clouds[i].y_pos, 40 * clouds[i].scale, 30 * clouds[i].scale);
	}
}

function drawMountains()
{
	for(var i = 0; i < mountains.length; i++)
	{
		fill(150);
        noStroke();
        triangle(mountains[i].x_pos + 50, mountains[i].y_pos + 32, 
                mountains[i].x_pos + 150 * mountains[i].scale, mountains[i].y_pos - 300 * mountains[i].scale,
                mountains[i].x_pos + 250 * mountains[i].scale, mountains[i].y_pos + 32);
        triangle(mountains[i].x_pos + 150, mountains[i].y_pos + 32, 
                mountains[i].x_pos + 150 * mountains[i].scale, mountains[i].y_pos - 250 * mountains[i].scale,
                mountains[i].x_pos + 350 * mountains[i].scale, mountains[i].y_pos + 32);
	}
}

function drawTrees()
{
	for(var i = 0; i < trees_x.length; i++)
	{
		treePos_y = height/1.64;
	    fill(155,103,60); //tree trunk
        rect(trees_x[i], treePos_y, 20, 82); 
        fill(0,255,0); //branches
        ellipse(trees_x[i] + 10, treePos_y - 30, 80, 80);
        ellipse(trees_x[i] - 30, treePos_y - 50, 80, 80);
        ellipse(trees_x[i] + 50, treePos_y - 50, 80, 80);
        ellipse(trees_x[i] - 20, treePos_y - 90, 80, 80);
        ellipse(trees_x[i] + 30, treePos_y - 90, 80, 80);
	}
}


// ---------------------------------
// Canyon render and check functions
// ---------------------------------

function drawCanyon(t_canyon)
{
	fill(139,69,19);
	triangle(t_canyon.x_pos + 30, 576,
			 t_canyon.x_pos + 80, 432,
			 t_canyon.x_pos + 80, 576);
	
	triangle(t_canyon.x_pos + 120 + t_canyon.width, 576,
			 t_canyon.x_pos + 120 + t_canyon.width, 432,
			 t_canyon.x_pos + 170 + t_canyon.width, 576);

	fill(100, 155, 255);
	rect(t_canyon.x_pos + 80, 432, 40 + t_canyon.width, 144); //blue canyon gap
}

// Function to check character is over a canyon.
function checkCanyon(t_canyon)
{	
	if(isPlummeting == true)
    {
        gameChar_y += 7;
        // plummentig character cannot go outside of canyon walls
        gameChar_world_x = constrain(gameChar_world_x, t_canyon.x_pos + 80, t_canyon.x_pos + 80 + t_canyon.width);
	}
	
	if((gameChar_world_x >= t_canyon.x_pos + 80) && (gameChar_world_x <= t_canyon.x_pos + 80 + t_canyon.width) && (gameChar_y >=floorPos_y))  
    {
        isPlummeting = true;
    }
    else
    {
        isPlummeting = false;
    }
	
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.
function drawCollectable(t_collectable)
{
	if (t_collectable.isFound == false) {

		noStroke();
		fill(255, 0, 0);
		rect(t_collectable.x_pos, t_collectable.y_pos - 40, 40, 40);
		rect(t_collectable.x_pos - 5, t_collectable.y_pos - 45, 50, 10);
		fill(222, 200, 0);
		rect(t_collectable.x_pos + 18, t_collectable.y_pos - 45, 4, 43);
		rect(t_collectable.x_pos, t_collectable.y_pos - 25, 40, 4);
	}
	
}

// Function to check character has collected an item.
function checkCollectable(t_collectable)
{
	if (dist(gameChar_world_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos + 10) < 30) {
		t_collectable.isFound = true;
		game_score += 1;
	}
}

// Function to draw Score:
function drawScore()
{
	textAlign(LEFT);
	textStyle(BOLD);
	textSize(16);
	fill(255);
	noStroke();
	text("SCORE: "+game_score, 30, 20);
}
// Function to draw flagpole
function renderFlagpole()
{
	
	var flagY = floorPos_y - 30;
	stroke(255);
	strokeWeight(5);
	line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 200);
	fill(255, 0, 255);
	noStroke();
	if (!flagpole.isReached)
	{
		rect(flagpole.x_pos, flagY, 40, 30);
	}
	else
	{
		rect(flagpole.x_pos, flagY - 200, 40, 30);
	}	
}

// Function to check coolisions flag pole with gameCharacter
function checkFlagpole()
{
	var d = abs(gameChar_world_x - flagpole.x_pos);

	if( d < 15)
	{
		flagpole.isReached = true;
	}
}

// Function to check if player die
function checkPlayerDie()
{
	if(gameChar_y > height)
	{
		lives -= 1;
		startGame();
	}
}

function startGame()
{
	gameChar_x = width/2;
	floorPos_y = height * 3/4;
	gameChar_y = floorPos_y;
	

	// Variable to control the background scrolling.
	scrollPos = 0;

	/* Variable to store the real position of the gameChar in the game
	   world. Needed for collision detection.*/
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;textAlign(LEFT);
	isPlummeting = false;

	// Initialise arrays of scenery objects.
	let r = 1;
	trees_x = [-1350, - 1200, -1000, - 600, - 350, - 200, 0, 200, 350, 600, 1000, 1200, 1350, 1600, 2000];
	clouds = [
		{x_pos: -460, y_pos: 180, scale: r},
		{x_pos: -360, y_pos: 180, scale: r},
		{x_pos: -800, y_pos: 180, scale: r},
		{x_pos: -200, y_pos: 180, scale: r},
		{x_pos: 100, y_pos: 100, scale: r},
		{x_pos: 600, y_pos: 120, scale: r},
		{x_pos: 800, y_pos: 100, scale: r},
		{x_pos: 360, y_pos: 180, scale: r},
		{x_pos: 460, y_pos: 180, scale: r},
		{x_pos: 960, y_pos: 180, scale: r},
	];

	mountains = [
		{x_pos: 150, y_pos: 400, scale: .7},
		{x_pos: 300, y_pos: 400, scale: 1.1},
		{x_pos: 820, y_pos: 400, scale: .6}
	];
	collectables = [
		{x_pos: 180, y_pos: floorPos_y, scale: 1.0, isFound: false},
		{x_pos: 400, y_pos: floorPos_y, scale: 1.0, isFound: false},
		{x_pos: 650, y_pos: floorPos_y, scale: 1.0, isFound: false}
	];

	canyons = [
		{x_pos: 0, width: 50},
		{x_pos: 700, width: 50}
	];

	flagpole = {x_pos: 1200, isReached: false};

	game_score = 0;

}

function drawLivesToken()
{
	for( var i = 0; i < lives; i++)
	{
		fill(255, 0, 255);
		stroke(255);
		strokeWeight(5);
		ellipse(width - 150 + i * 25, height/22, 20, 20);
	console.log(lives);
	}
}