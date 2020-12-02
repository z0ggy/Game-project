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

	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		//Head
		fill(255, 227, 48);
		rect(gameChar_x - 15, gameChar_y - 72, 30, 26, 5);
		rect(gameChar_x - 6, gameChar_y - 78, 12, 10);
		//Eyes and mouth
		stroke(60);
		strokeWeight(3);
		point(gameChar_x - 6, gameChar_y - 64);
		strokeWeight(2);
		line(gameChar_x - 15, gameChar_y - 54, gameChar_x - 10, gameChar_y - 54);
		//body
		strokeWeight(1);
		fill(0);
		rect(gameChar_x - 15, gameChar_y - 46, 30, 27);
		//Belt
		fill(98, 74, 46);
		rect(gameChar_x - 15, gameChar_y - 19, 30, 7);
		//Legs
		fill(0, 0, 255);
		rect(gameChar_x - 5, gameChar_y - 12, 20, 8);
		//Arms
		fill(200, 100, 100);
		rect(gameChar_x - 7, gameChar_y - 46, 15, 43);
	

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		//Head
		fill(255, 227, 48);
		rect(gameChar_x - 15, gameChar_y - 72, 30, 26, 5);
		rect(gameChar_x - 6, gameChar_y - 78, 12, 10);
		//Eyes and mouth
		stroke(60);
		strokeWeight(3);
		point(gameChar_x + 6, gameChar_y - 64);
		strokeWeight(2);
		line(gameChar_x + 10, gameChar_y - 54, gameChar_x +15, gameChar_y - 54);
		//body
		strokeWeight(1);
		fill(0);
		rect(gameChar_x - 15, gameChar_y - 46, 30, 27);
		//Belt
		fill(98, 74, 46);
		rect(gameChar_x - 15, gameChar_y - 19, 30, 7);
		//Legs
		fill(0, 0, 255);
		rect(gameChar_x - 15, gameChar_y - 12, 20, 8);
		//Arms
		fill(200, 100, 100);
		rect(gameChar_x - 7, gameChar_y - 46, 15, 43);

	}
	else if(isLeft)
	{
		// add your walking left code
		//Head
		fill(255, 227, 48);
		rect(gameChar_x - 15, gameChar_y - 72, 30, 26, 5);
		rect(gameChar_x - 6, gameChar_y - 78, 12, 10);
		//Eyes and mouth
		stroke(60);
		strokeWeight(3);
		point(gameChar_x - 6, gameChar_y - 64);
		strokeWeight(2);
		line(gameChar_x - 15, gameChar_y - 54, gameChar_x - 10, gameChar_y - 54);
		//body
		strokeWeight(1);
		fill(0);
		rect(gameChar_x - 15, gameChar_y - 46, 30, 27);
		//Belt
		fill(98, 74, 46);
		rect(gameChar_x - 15, gameChar_y - 19, 30, 7);
		//Legs
		fill(0, 0, 255);
		rect(gameChar_x - 5, gameChar_y - 12, 20, 15);
		rect(gameChar_x - 25, gameChar_y - 12, 20, 9);
		//Arms
		fill(200, 100, 100);
		rect(gameChar_x - 7, gameChar_y - 46, 15, 37);

	}
	else if(isRight)
	{
		// add your walking right code
		 //Head
		 fill(255, 227, 48);
		 rect(gameChar_x - 15, gameChar_y - 72, 30, 26, 5);
		 rect(gameChar_x - 6, gameChar_y - 78, 12, 10);
		 //Eyes and mouth
		 stroke(60);
		 strokeWeight(3);
		 point(gameChar_x + 6, gameChar_y - 64);
		 strokeWeight(2);
		 line(gameChar_x + 10, gameChar_y - 54, gameChar_x +15, gameChar_y - 54);
		 //body
		 strokeWeight(1);
		 fill(0);
		 rect(gameChar_x - 15, gameChar_y - 46, 30, 27);
		 //Belt
		 fill(98, 74, 46);
		 rect(gameChar_x - 15, gameChar_y - 19, 30, 7);
		 //Legs
		 fill(0, 0, 255);
		 rect(gameChar_x - 15, gameChar_y - 12, 20, 15);
		 rect(gameChar_x + 5, gameChar_y - 12, 20, 9);
		 //Arms
		 fill(200, 100, 100);
		 rect(gameChar_x - 7, gameChar_y - 46, 15, 37);

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
		fill(255, 227, 48);
		rect(gameChar_x - 15, gameChar_y - 72, 30, 26, 5);
		rect(gameChar_x - 6, gameChar_y - 78, 12, 10);
		//Eyes and mouth
		stroke(60);
		strokeWeight(3);
		point(gameChar_x - 6, gameChar_y - 64);
		point(gameChar_x + 6, gameChar_y - 64);
		strokeWeight(2);
		line(gameChar_x - 3, gameChar_y - 54, gameChar_x + 3, gameChar_y - 54);
		//Body
		strokeWeight(1);
		fill(0);
		rect(gameChar_x - 18, gameChar_y - 46, 37, 27);
		//Arms
		fill(200, 100, 100);
		rect(gameChar_x - 25, gameChar_y - 46, 7, 37);
		rect(gameChar_x + 18, gameChar_y - 46, 7, 37);
		//Belt
		fill(98, 74, 46);
		rect(gameChar_x - 18, gameChar_y - 19, 36, 7);
		//Legs
		fill(0, 0, 255);
		rect(gameChar_x - 18, gameChar_y - 12, 17, 3);
		rect(gameChar_x + 1, gameChar_y - 12, 17, 3);
	}
	else
	{
		// add your standing front facing code
    //Head
		fill(255, 227, 48); 
		rect(gameChar_x - 15, gameChar_y - 72, 30, 26, 5);
		rect(gameChar_x - 6, gameChar_y - 78, 12, 10);
		//Eyes and mouth
		stroke(60);
		strokeWeight(3);
		point(gameChar_x - 6, gameChar_y - 64);
		point(gameChar_x + 6, gameChar_y - 64);
		strokeWeight(2);
		line(gameChar_x - 3, gameChar_y - 54, gameChar_x + 3, gameChar_y - 54);
		//Body
		strokeWeight(1);
		fill(0);
		rect(gameChar_x - 18, gameChar_y - 46, 37, 27);
		//Arms
		fill(200, 100, 100);
		rect(gameChar_x - 25, gameChar_y - 46, 7 , 37);
		rect(gameChar_x + 18, gameChar_y - 46, 7 , 37);
		//Belt
		fill(98, 74, 46);
		rect(gameChar_x - 18, gameChar_y - 19, 36, 7);
		//Legs
		fill(0, 0, 255);
		rect(gameChar_x - 18, gameChar_y - 12, 17, 15);
		rect(gameChar_x + 1, gameChar_y - 12, 17, 15);

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	if(isLeft == true)
	{
		gameChar_x -= 3;
	}

	if(isRight == true)
	{
		gameChar_x += 3;
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

	// console.log("keyReleased: " + key);
	// console.log("keyReleased: " + keyCode);
}
