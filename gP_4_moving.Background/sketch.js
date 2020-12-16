/*

The Game Project 4 - Side scrolling

Week 6

*/

// var gameChar_x;
// var gameChar_y;
// var floorPos_y;
// var isLeft;
// var isRight;
var scrollPos;

let clouds;
let mountains;
//let trees_x;
let cX = 200;
let cY = 100;
let cS = 2;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
	trees_x = [100, 350, 600, 1000];
	clouds = [
		{x_pos: 100, y_pos: 100, scale: 0.7},
		{x_pos: 600, y_pos: 120, scale: 0.8},
		{x_pos: 800, y_pos: 100, scale: 0.5},
		{x_pos: 360, y_pos: 180, scale: 2.0}

	];
}

function draw()
{
	drawSky(); // fill the sky blue

	drawGround(); // draw some green ground

	// Draw clouds.
	for(var i = 0; i < clouds.length; i++)
	{
		fill(255);
		ellipse(clouds[i].x_pos,                      clouds[i].y_pos, 100* clouds[i].scale, 80 * clouds[i].scale);
		ellipse(clouds[i].x_pos+35*clouds[i].scale,   clouds[i].y_pos, 80 * clouds[i].scale, 60 * clouds[i].scale);
		ellipse(clouds[i].x_pos+70*clouds[i].scale,   clouds[i].y_pos, 40 * clouds[i].scale, 30 * clouds[i].scale);
		
		// ellipse(cX,     cY, 100*cS, 80*cS);
		// ellipse(cX+50*cS,  cY, 80*cS,  60*cS);
		// ellipse(cX+100*cS, cY, 60*cS,  40*cS);
	}

	// Draw mountains.
	//drawMountain();

	// Draw trees.
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

	// Draw canyons

	// Draw collectable items

	// Draw the game character - this must be last
	drawCharacter();

	//////// Game character logic ///////
	// Logic to move

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
}


function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
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
