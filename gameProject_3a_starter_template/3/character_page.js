let gameChar_x;
let gameChar_y;



function jumpingLeft()
{
    //Head
		fill(41, 152, 69);
    rect(gameChar_x, gameChar_y - 70, 50, 25, 5);//head
    rect(gameChar_x + 25, gameChar_y - 45, 25, 27, 5, 5, 1, 1);//body light
    fill(50, 110, 60);
    rect(gameChar_x + 25, gameChar_y - 45, 25, 7, 5, 5, 0, 0);// body dark
    fill(215, 110, 40);
    rect(gameChar_x + 25, gameChar_y - 21, 25, 3, 2)// belt
    fill(95, 198, 209);
    rect(gameChar_x + 25, gameChar_y - 19, 25, 12, 2, 2, 3, 3)// hips
    fill(215, 110, 40);
    ellipse(gameChar_x + 32, gameChar_y - 2, 4, 4);//shoes
    ellipse(gameChar_x + 43, gameChar_y - 2, 4, 4);
    fill(95, 198, 209);
    rect(gameChar_x + 30, gameChar_y - 11, 4, 8);//left leg
    rect(gameChar_x + 41, gameChar_y - 11, 4, 8);//right leg
    stroke(255);
    strokeWeight(2);
    line(gameChar_x, gameChar_y - 56, gameChar_x +35, gameChar_y - 56);//mouth
    noStroke();
    fill(0);
    ellipse(gameChar_x + 5, gameChar_y - 60, 3, 3);//nose
    ellipse(gameChar_x + 10, gameChar_y - 60, 3, 3);
    fill(255, 0, 255);
    ellipse(gameChar_x + 34, gameChar_y - 73, 9, 9);//glases
    ellipse(gameChar_x + 42, gameChar_y - 73, 9, 9);
    rect(gameChar_x + 27, gameChar_y - 73, 3, 2);
    rect(gameChar_x + 46, gameChar_y - 73, 3, 2);
    fill(255);
    ellipse(gameChar_x + 34, gameChar_y - 73, 6, 6);//eyes
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
}

function jumpingRight()
{
    //Head
    fill(41, 152, 69);
    rect(gameChar_x, gameChar_y - 70, 50, 25, 5);//head
    rect(gameChar_x, gameChar_y - 45, 25, 27, 5, 5, 1, 1);//body light
    fill(50, 110, 60);
    rect(gameChar_x, gameChar_y - 45, 25, 7, 5, 5, 0, 0);// body dark
    fill(215, 110, 40);
    rect(gameChar_x, gameChar_y - 21, 25, 3, 2)// belt
    fill(95, 198, 209);
    rect(gameChar_x, gameChar_y - 18, 25, 12, 2, 2, 3, 3)// hips
    fill(215, 110, 40);
    ellipse(gameChar_x + 7, gameChar_y - 2, 4, 4);//shoes
    ellipse(gameChar_x + 18, gameChar_y - 2, 4, 4);
    fill(95, 198, 209);
    rect(gameChar_x + 5, gameChar_y - 11, 4, 8);//left leg
    rect(gameChar_x + 16, gameChar_y - 11, 4, 8);//right leg
    stroke(255);
    strokeWeight(2);
    line(gameChar_x + 15, gameChar_y - 56, gameChar_x +50, gameChar_y - 56);//mouth
    noStroke();
    fill(0);
    ellipse(gameChar_x + 45, gameChar_y - 60, 3, 3);//nose
    ellipse(gameChar_x + 40, gameChar_y - 60, 3, 3);
    fill(255, 0, 255);
    ellipse(gameChar_x + 7, gameChar_y - 73, 9, 9);//glases
    ellipse(gameChar_x + 15, gameChar_y - 73, 9, 9);
    rect(gameChar_x + 1, gameChar_y - 73, 3, 2);
    rect(gameChar_x + 19, gameChar_y - 73, 3, 2);
    fill(255);
    ellipse(gameChar_x + 7, gameChar_y - 73, 6, 6);//eyes
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
}

function walkingLeft()
{
    fill(41, 152, 69);
    rect(gameChar_x, gameChar_y -73, 50, 25, 5);//head
    rect(gameChar_x + 25, gameChar_y - 48, 25, 27, 5, 5, 1, 1);//body light
    fill(50, 110, 60);
    rect(gameChar_x + 25, gameChar_y - 48, 25, 7, 5, 5, 0, 0);// body dark
    fill(215, 110, 40);
    rect(gameChar_x + 25, gameChar_y - 24, 25, 3, 2)// belt
    fill(95, 198, 209);
    rect(gameChar_x + 25, gameChar_y - 21, 25, 12, 2, 2, 3, 3)// hips
    fill(215, 110, 40);
    ellipse(gameChar_x + 32, gameChar_y, 4, 4);//shoes
    ellipse(gameChar_x + 43, gameChar_y, 4, 4);
    fill(95, 198, 209);
    rect(gameChar_x + 30, gameChar_y - 9, 4, 8);//left leg
    rect(gameChar_x + 41, gameChar_y - 9, 4, 8);//right leg
    stroke(255);
    strokeWeight(2);
    line(gameChar_x, gameChar_y - 59, gameChar_x +35, gameChar_y - 59);//mouth
    noStroke();
    fill(0);
    ellipse(gameChar_x + 5, gameChar_y - 63, 3, 3);//nose
    ellipse(gameChar_x + 10, gameChar_y - 63, 3, 3);
    fill(255, 0, 255);
    ellipse(gameChar_x + 34, gameChar_y - 76, 9, 9);//glases
    ellipse(gameChar_x + 42, gameChar_y - 76, 9, 9);
    rect(gameChar_x + 27, gameChar_y - 76, 3, 2);
    rect(gameChar_x + 46, gameChar_y - 76, 3, 2);
    fill(255);
    ellipse(gameChar_x + 34, gameChar_y - 76, 6, 6);//eyes
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
}

function walkingRight()
{
    //Head
		 //Head
    fill(41, 152, 69);
    rect(gameChar_x, gameChar_y - 73, 50, 25, 5);//head
    rect(gameChar_x, gameChar_y - 48, 25, 27, 5, 5, 1, 1);//body light
    fill(50, 110, 60);
    rect(gameChar_x, gameChar_y - 48, 25, 7, 5, 5, 0, 0);// body dark
    fill(215, 110, 40);
    rect(gameChar_x, gameChar_y - 24, 25, 3, 2)// belt
    fill(95, 198, 209);
    rect(gameChar_x, gameChar_y - 21, 25, 12, 2, 2, 3, 3)// hips
    fill(215, 110, 40);
    ellipse(gameChar_x + 7, gameChar_y, 4, 4);//shoes
    ellipse(gameChar_x + 18, gameChar_y, 4, 4);
    fill(95, 198, 209);
    rect(gameChar_x + 5, gameChar_y - 9, 4, 8);//left leg
    rect(gameChar_x + 16, gameChar_y - 9, 4, 8);//right leg
    stroke(255);
    strokeWeight(2);
    line(gameChar_x + 15, gameChar_y - 59, gameChar_x +50, gameChar_y - 59);//mouth
    noStroke();
    fill(0);
    ellipse(gameChar_x + 45, gameChar_y - 63, 3, 3);//nose
    ellipse(gameChar_x + 40, gameChar_y - 63, 3, 3);
    fill(255, 0, 255);
    ellipse(gameChar_x + 7, gameChar_y - 76, 9, 9);//glases
    ellipse(gameChar_x + 15, gameChar_y - 76, 9, 9);
    rect(gameChar_x + 1, gameChar_y - 76, 3, 2);
    rect(gameChar_x + 19, gameChar_y - 76, 3, 2);
    fill(255);
    ellipse(gameChar_x + 7, gameChar_y - 76, 6, 6);//eyes
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

function jumpingFacingForward()
{
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
}

function standingFront()
{
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
