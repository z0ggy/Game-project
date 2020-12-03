/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isPlummenting;
var isFalling;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	isLeft = false;
	isRight = false;
	isPlummeting = false;
	isFalling = false;

}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground


	drawMountain();

	drawCanyon();

	drawTree();

	drawCollectable();

	//the game character
	noStroke();
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		jumpingLeft();
	}
	
	
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		jumpingRight();

	}
	else if(isLeft)
	{
		// add your walking left code
		walkingLeft();

	}
	else if(isRight)
	{
		// add your walking right code
		 walkingRight();

	}
	else if(isFalling || isPlummenting)
	{
		// add your jumping facing forwards code
		jumpingFacingForward();
	}
	else
	{
		// add your standing front facing code
		standingFront();
	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	
	// move to the left
	if(isLeft == true)
	{
		gameChar_x -= 3;
	}

	// move to the right
	if(isRight == true)
	{
		gameChar_x += 3;
	}

	// jupming 
	if(isPlummenting == true && gameChar_y >= floorPos_y)
	{
		gameChar_y -= 100; 
	}

	// gravity falling
      	if(gameChar_y < floorPos_y )
	{
		gameChar_y += 2  ;
		isFalling = true;
	}
	else
	{
		isFalling = false;
	}

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);

	if (keyCode == 37)
	{	
		isLeft = true;
		console.log("isLeft value " + isLeft);
	}
	else if (keyCode == 39)
	{	
		isRight = true;
		console.log("isRight value " + isRight);
	}

	if (keyCode == 32)
	{
		isPlummenting = true;
		console.log("isPlummenting value " + isPlummenting);
	}
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
	if (keyCode == 37)
	{	
		isLeft = false;
		console.log("isLeft value " + isLeft);
	}
	else if (keyCode == 39)
	{	
		isRight = false;
		console.log("isRight value " + isRight);
	}

	if (keyCode == 32)
	{
		isPlummenting = false;
		console.log("isPlummenting value " + isPlummenting);
	}

	// console.log("keyReleased: " + key);
	// console.log("keyReleased: " + keyCode);
}
