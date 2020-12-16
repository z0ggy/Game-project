/*

The Game Project

Week 3

Game interaction

*/

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;// 432
	gameChar_x = width/3;
	gameChar_y = floorPos_y;
    
    canyon.x_pos = 50;
    canyon.width = 50;
    
    mountain.x_pos = 450;
    
    treePos_x = width/2;
    
    collectable.x_pos = 700;
    collectable.y_pos = floorPos_y;

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
    console.log(`X : ${gameChar_x}`);
   

	//open up the console to see how these work
	//console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
	stopUserInteraction();
}

function mousePressed()
{
    console.log(`X : ${mouseX}`);
}


