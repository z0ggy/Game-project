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
let collectables;
let canyons;
let trees_x;
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
	isPlummenting = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
	trees_x = [200, 350, 600, 1000];
	clouds = [
		{x_pos: 100, y_pos: 100, scale: 0.7},
		{x_pos: 600, y_pos: 120, scale: 0.8},
		{x_pos: 800, y_pos: 100, scale: 0.5},
		{x_pos: 360, y_pos: 180, scale: 2.0}

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

}

function draw()
{
	background(100,155,255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	push();
	translate(scrollPos, 0);
	// Draw clouds.
	for(var i = 0; i < clouds.length; i++)
	{
		fill(255);
		ellipse(clouds[i].x_pos, clouds[i].y_pos, 100* clouds[i].scale, 80 * clouds[i].scale);
		ellipse(clouds[i].x_pos+35*clouds[i].scale, clouds[i].y_pos, 80 * clouds[i].scale, 60 * clouds[i].scale);
		ellipse(clouds[i].x_pos+70*clouds[i].scale, clouds[i].y_pos, 40 * clouds[i].scale, 30 * clouds[i].scale);
	}

	// Draw mountains.
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
	for(var i = 0; i < canyons.length; i++)
	{
		fill(139,69,19);
        triangle(canyons[i].x_pos + 30, 576,
                 canyons[i].x_pos + 80, 432,
                 canyons[i].x_pos + 80, 576);
        
        triangle(canyons[i].x_pos + 120 + canyons[i].width, 576,
                 canyons[i].x_pos + 120 + canyons[i].width, 432,
                 canyons[i].x_pos + 170 + canyons[i].width, 576);
    
        fill(100, 155, 255);
		rect(canyons[i].x_pos + 80, 432, 40 + canyons[i].width, 144); //blue canyon gap
	
	}

	// Draw collectable items
	for(var i = 0; i < collectables.length; i++)
	{
		if (collectables[i].isFound == false) {

			noStroke();
			fill(255, 0, 0);
			rect(collectables[i].x_pos, collectables[i].y_pos - 40, 40, 40);
			rect(collectables[i].x_pos - 5, collectables[i].y_pos - 45, 50, 10);
			fill(222, 200, 0);
			rect(collectables[i].x_pos + 18, collectables[i].y_pos - 45, 4, 43);
			rect(collectables[i].x_pos, collectables[i].y_pos - 25, 40, 4);
		}
		if (dist(gameChar_x, gameChar_y, collectables[i].x_pos, collectables[i].y_pos + 10) < 30) {
			collectables[i].isFound = true;
		}

	}


	pop();
	// Draw the game character - this must be last
	//drawCharacter();
	//Head
	fill(41, 152, 69);
    rect(gameChar_x + 15, gameChar_y - 73, 25, 25, 5);//head
    rect(gameChar_x + 15, gameChar_y - 48, 25, 27, 5, 5, 1, 1);//body light
    fill(41, 152, 69);
    fill(50, 110, 60);
    rect(gameChar_x + 15, gameChar_y - 48, 25, 7, 5, 5, 0, 0);// body dark
    fill(215, 110, 40);
    rect(gameChar_x + 15, gameChar_y - 24, 25, 3, 2)// belt
    fill(95, 198, 209);
    rect(gameChar_x + 15, gameChar_y - 21, 25, 12, 2, 2, 3, 3)// hips
    fill(215, 110, 40);
    ellipse(gameChar_x + 22, gameChar_y, 4, 4);//shoes
    ellipse(gameChar_x + 33, gameChar_y, 4, 4);
    fill(95, 198, 209);
    rect(gameChar_x + 20, gameChar_y - 9, 4, 8);//left leg
    rect(gameChar_x + 31, gameChar_y - 9, 4, 8);//right leg
    stroke(255);
    strokeWeight(2);
    line(gameChar_x + 15, gameChar_y - 59, gameChar_x +40, gameChar_y - 59);//mouth
    noStroke();
    fill(0);
    ellipse(gameChar_x + 25, gameChar_y - 63, 3, 3);//nose
    ellipse(gameChar_x + 30, gameChar_y - 63, 3, 3);
    fill(255, 0, 255);
    ellipse(gameChar_x + 24, gameChar_y - 76, 9, 9);//glases
    ellipse(gameChar_x + 32, gameChar_y - 76, 9, 9);
    rect(gameChar_x + 17, gameChar_y - 76, 3, 2);
    rect(gameChar_x + 36, gameChar_y - 76, 3, 2);
    fill(255);
    ellipse(gameChar_x + 24, gameChar_y - 76, 6, 6);//eyes
    ellipse(gameChar_x + 32, gameChar_y - 76, 6, 6);
    fill(0);
    ellipse(gameChar_x + 24, gameChar_y - 76, 3, 3);
    ellipse(gameChar_x + 32, gameChar_y - 76, 3, 3);
    //arms
    fill(41, 152, 69);
    rect(gameChar_x + 12, gameChar_y - 46, 3, 30, 5, 0, 5, 5);
    rect(gameChar_x + 40, gameChar_y - 46, 3, 30, 0, 5, 5, 5);

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
			pop();
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