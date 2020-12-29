/*

The Game Project 5 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
	trees_x = [-1350, - 1200, -1000, - 600, - 350, - 200, 0, 200, 350, 600, 1000, 1200, 1350, 1600, 2000];
	clouds = [
		{x_pos: -1660, y_pos: 180, scale: r},
		{x_pos: -1160, y_pos: 180, scale: r},
		{x_pos: -960, y_pos: 180, scale: r},
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
		{x_pos: 1160, y_pos: 180, scale: r},
		{x_pos: 1660, y_pos: 180, scale: r},
		{x_pos: 2000, y_pos: 180, scale: r},
		{x_pos: 2200, y_pos: 180, scale: r},
	];

	mountains = [
		{x_pos: 150, y_pos: 400, scale: .7},
		{x_pos: 300, y_pos: 400, scale: 1.1},
		{x_pos: 820, y_pos: 400, scale: .6}
	];
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

	// Draw clouds.

	// Draw mountains.

	// Draw trees.

	// Draw canyons.

	// Draw collectable items.

	// Draw game character.
	
	drawGameChar();

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

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed(){

	console.log("press" + keyCode);
	console.log("press" + key);

}

function keyReleased()
{

	console.log("release" + keyCode);
	console.log("release" + key);

}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	// draw game character
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.

// Function to draw mountains objects.

// Function to draw trees objects.


// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{

}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{

}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{

}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{

}
