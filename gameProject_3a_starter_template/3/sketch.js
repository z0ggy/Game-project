/*

The Game Project

Week 3

Game interaction

*/

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
	collectable.isFound = false;
}	

function draw()
{

	///////////DRAWING CODE//////////
	
	drawSky();

	drawGround();

	drawMountain();

	drawCanyon();

	drawTree();

	drawCollectable();
   

	//the game character
	drawCharacter();
	

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	
	interactionSteatment();
}

function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
	userInteraction();

	//open up the console to see how these work
	//console.log("keyPressed: " + key);
	//console.log("keyPressed: " + keyCode);
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
	stopUserInteraction();
}
