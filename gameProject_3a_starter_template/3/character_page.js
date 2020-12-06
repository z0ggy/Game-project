var gameChar_x;
var gameChar_y;



function jumpingLeft()
{
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

function jumpingRight()
{
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

function walkingLeft()
{
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

function walkingRight()
{
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

function jumpingFacingForward()
{
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

function standingFront()
{
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


function drawCharacter()
{
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
}
