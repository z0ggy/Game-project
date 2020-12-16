/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. If you're character takes more than 5 lines
of code to draw then you've probably over done it.

** Only submit your sketch.js **

*/

var gameChar_x = 0;
var gameChar_y = 0;
//var midRect = 0;

function setup()
{
	createCanvas(400, 600);
    angleMode(DEGREES);
}

function draw()
{
	background(255);

	//Standing, facing frontwards
	//stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 20;
	gameChar_y = 60;
	//Add your code here ...//middle of rectangle = 35
    //Head
    console.log(mouseX);
    console.log(mouseY);
    
    fill(41, 152, 69);
    rect(gameChar_x + 15, gameChar_y + 6, 25, 25, 5);//head
    rect(gameChar_x + 15, gameChar_y + 31, 25, 27, 5, 5, 1, 1);//body light
    fill(41, 152, 69);
    fill(50, 110, 60);
    rect(gameChar_x + 15, gameChar_y + 31, 25, 7, 5, 5, 0, 0);// body dark
    fill(215, 110, 40);
    rect(gameChar_x + 15, gameChar_y + 55, 25, 3, 2)// belt
    fill(95, 198, 209);
    rect(gameChar_x + 15, gameChar_y + 58, 25, 12, 2, 2, 3, 3)// hips
    fill(215, 110, 40);
    ellipse(gameChar_x + 22, gameChar_y + 79, 4, 4);//shoes
    ellipse(gameChar_x + 33, gameChar_y + 79, 4, 4);
    fill(95, 198, 209);
    rect(gameChar_x + 20, gameChar_y + 70, 4, 8);//left leg
    rect(gameChar_x + 31, gameChar_y + 70, 4, 8);//right leg
    stroke(255);
    strokeWeight(2);
    line(gameChar_x + 15, gameChar_y + 20, gameChar_x +40, gameChar_y + 20);//mouth
    noStroke();
    fill(0);
    ellipse(gameChar_x + 25, gameChar_y + 16, 3, 3);//nose
    ellipse(gameChar_x + 30, gameChar_y + 16, 3, 3);
    fill(255, 0, 255);
    ellipse(gameChar_x + 24, gameChar_y + 3, 9, 9);//glases
    ellipse(gameChar_x + 32, gameChar_y + 3, 9, 9);
    rect(gameChar_x + 17, gameChar_y + 3, 3, 2);
    rect(gameChar_x + 36, gameChar_y + 3, 3, 2);
    fill(255);
    ellipse(gameChar_x + 24, gameChar_y + 3, 6, 6);//eyes
    ellipse(gameChar_x + 32, gameChar_y + 3, 6, 6);
    fill(0);
    ellipse(gameChar_x + 24, gameChar_y + 3, 3, 3);
    ellipse(gameChar_x + 32, gameChar_y + 3, 3, 3);
    //arms
    fill(41, 152, 69);
    rect(gameChar_x + 12, gameChar_y + 33, 3, 30, 5, 0, 5, 5);
    rect(gameChar_x + 40, gameChar_y + 33, 3, 30, 0, 5, 5, 5);
    
   
    
    
    
    
    


	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 218;
	gameChar_y = 60;
	//Add your code here ...
    fill(41, 152, 69);
    rect(gameChar_x + 15, gameChar_y + 12, 25, 25, 5);//head
    rect(gameChar_x + 15, gameChar_y + 36, 25, 27, 5, 5, 1, 1);//body light
    fill(50, 110, 60);
    rect(gameChar_x + 15, gameChar_y + 36, 25, 7, 5, 5, 0, 0);// body dark
    fill(215, 110, 40);
    rect(gameChar_x + 15, gameChar_y + 60, 25, 3, 2)// belt
    fill(95, 198, 209);
    rect(gameChar_x + 15, gameChar_y + 63, 25, 12, 2, 2, 3, 3)// hips
    fill(215, 110, 40);
    ellipse(gameChar_x + 22, gameChar_y + 79, 4, 4);//shoes
    ellipse(gameChar_x + 33, gameChar_y + 79, 4, 4);
    fill(95, 198, 209);
    rect(gameChar_x + 20, gameChar_y + 70, 4, 8);//left leg
    rect(gameChar_x + 31, gameChar_y + 70, 4, 8);//right leg
    stroke(255);
    strokeWeight(2);
    line(gameChar_x + 15, gameChar_y + 26, gameChar_x +40, gameChar_y + 26);//mouth
    noStroke();
    fill(0);
    ellipse(gameChar_x + 25, gameChar_y + 22, 3, 3);//nose
    ellipse(gameChar_x + 30, gameChar_y + 22, 3, 3);
    fill(255, 0, 255);
    ellipse(gameChar_x + 24, gameChar_y + 9, 9, 9);//glases
    ellipse(gameChar_x + 32, gameChar_y + 9, 9, 9);
    rect(gameChar_x + 17, gameChar_y + 9, 3, 2);
    rect(gameChar_x + 36, gameChar_y + 9, 3, 2);
    fill(255);
    ellipse(gameChar_x + 24, gameChar_y + 9, 6, 6);//eyes
    ellipse(gameChar_x + 32, gameChar_y + 9, 6, 6);
    fill(0);
    ellipse(gameChar_x + 24, gameChar_y + 9, 3, 3);
    ellipse(gameChar_x + 32, gameChar_y + 9, 3, 3);
    //arms
    angleMode(DEGREES);
    fill(41, 152, 69);
    push();
    translate(gameChar_x + 16, gameChar_y + 40);
    rotate(160);
    rect(0, 0, 3, 30, 0, 5, 5, 5);
    pop();
    
    push();
    translate(gameChar_x + 42, gameChar_y +41);
    rotate(-160);
    rect(0, 0, 3, 30, 5, 0, 5, 5);
    pop();

	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 20;
	gameChar_y = 260;
	//Add your code here ...
    fill(41, 152, 69);
    rect(gameChar_x, gameChar_y + 6, 50, 25, 5);//head
    rect(gameChar_x + 25, gameChar_y + 31, 25, 27, 5, 5, 1, 1);//body light
    fill(50, 110, 60);
    rect(gameChar_x + 25, gameChar_y + 31, 25, 7, 5, 5, 0, 0);// body dark
    fill(215, 110, 40);
    rect(gameChar_x + 25, gameChar_y + 55, 25, 3, 2)// belt
    fill(95, 198, 209);
    rect(gameChar_x + 25, gameChar_y + 58, 25, 12, 2, 2, 3, 3)// hips
    fill(215, 110, 40);
    ellipse(gameChar_x + 32, gameChar_y + 79, 4, 4);//shoes
    ellipse(gameChar_x + 43, gameChar_y + 79, 4, 4);
    fill(95, 198, 209);
    rect(gameChar_x + 30, gameChar_y + 70, 4, 8);//left leg
    rect(gameChar_x + 41, gameChar_y + 70, 4, 8);//right leg
    stroke(255);
    strokeWeight(2);
    line(gameChar_x, gameChar_y + 20, gameChar_x +35, gameChar_y + 20);//mouth
    noStroke();
    fill(0);
    ellipse(gameChar_x + 5, gameChar_y + 16, 3, 3);//nose
    ellipse(gameChar_x + 10, gameChar_y + 16, 3, 3);
    fill(255, 0, 255);
    ellipse(gameChar_x + 34, gameChar_y + 3, 9, 9);//glases
    ellipse(gameChar_x + 42, gameChar_y + 3, 9, 9);
    rect(gameChar_x + 27, gameChar_y + 3, 3, 2);
    rect(gameChar_x + 46, gameChar_y + 3, 3, 2);
    fill(255);
    ellipse(gameChar_x + 34, gameChar_y + 3, 6, 6);//eyes
    ellipse(gameChar_x + 42, gameChar_y + 3, 6, 6);
    fill(0);
    ellipse(gameChar_x + 34, gameChar_y + 3, 3, 3);
    ellipse(gameChar_x + 42, gameChar_y + 3, 3, 3);
    //arms
    angleMode(DEGREES);
    push();
    translate(gameChar_x + 38, gameChar_y + 33);
    rotate(45);
    fill(41, 152, 69);
    rect(0, 0, 3, 30, 5);
    pop();
    


	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 220;
	gameChar_y = 260;
	//Add your code here ...
    //Head
    fill(41, 152, 69);
    rect(gameChar_x, gameChar_y + 6, 50, 25, 5);//head
    rect(gameChar_x, gameChar_y + 31, 25, 27, 5, 5, 1, 1);//body light
    fill(50, 110, 60);
    rect(gameChar_x, gameChar_y + 31, 25, 7, 5, 5, 0, 0);// body dark
    fill(215, 110, 40);
    rect(gameChar_x, gameChar_y + 55, 25, 3, 2)// belt
    fill(95, 198, 209);
    rect(gameChar_x, gameChar_y + 58, 25, 12, 2, 2, 3, 3)// hips
    fill(215, 110, 40);
    ellipse(gameChar_x + 7, gameChar_y + 79, 4, 4);//shoes
    ellipse(gameChar_x + 18, gameChar_y + 79, 4, 4);
    fill(95, 198, 209);
    rect(gameChar_x + 5, gameChar_y + 70, 4, 8);//left leg
    rect(gameChar_x + 16, gameChar_y + 70, 4, 8);//right leg
    stroke(255);
    strokeWeight(2);
    line(gameChar_x + 15, gameChar_y + 20, gameChar_x +50, gameChar_y + 20);//mouth
    noStroke();
    fill(0);
    ellipse(gameChar_x + 45, gameChar_y + 16, 3, 3);//nose
    ellipse(gameChar_x + 40, gameChar_y + 16, 3, 3);
    fill(255, 0, 255);
    ellipse(gameChar_x + 7, gameChar_y + 3, 9, 9);//glases
    ellipse(gameChar_x + 15, gameChar_y + 3, 9, 9);
    rect(gameChar_x + 1, gameChar_y + 3, 3, 2);
    rect(gameChar_x + 19, gameChar_y + 3, 3, 2);
    fill(255);
    ellipse(gameChar_x + 7, gameChar_y + 3, 6, 6);//eyes
    ellipse(gameChar_x + 15, gameChar_y + 3, 6, 6);
    fill(0);
    ellipse(gameChar_x + 7, gameChar_y + 3, 3, 3);
    ellipse(gameChar_x + 15, gameChar_y + 3, 3, 3);
    //arms
    angleMode(DEGREES);
    push();
    translate(gameChar_x + 9, gameChar_y + 33);
    rotate(-45);
    fill(41, 152, 69);
    rect(0, 0, 3, 30, 5);
    pop();
    


	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 20;
	gameChar_y = 460;
	//Head
    fill(41, 152, 69);
    rect(gameChar_x, gameChar_y + 6+5, 50, 25, 5);//head
    rect(gameChar_x, gameChar_y + 31+5, 25, 27, 5, 5, 1, 1);//body light
    fill(50, 110, 60);
    rect(gameChar_x, gameChar_y + 31+5, 25, 7, 5, 5, 0, 0);// body dark
    fill(215, 110, 40);
    rect(gameChar_x, gameChar_y + 55+5, 25, 3, 2)// belt
    fill(95, 198, 209);
    rect(gameChar_x, gameChar_y + 58 + 5, 25, 12, 2, 2, 3, 3)// hips
    fill(215, 110, 40);
    ellipse(gameChar_x + 7, gameChar_y + 79, 4, 4);//shoes
    ellipse(gameChar_x + 18, gameChar_y + 79, 4, 4);
    fill(95, 198, 209);
    rect(gameChar_x + 5, gameChar_y + 70, 4, 8);//left leg
    rect(gameChar_x + 16, gameChar_y + 70, 4, 8);//right leg
    stroke(255);
    strokeWeight(2);
    line(gameChar_x + 15, gameChar_y + 25, gameChar_x +50, gameChar_y + 25);//mouth
    noStroke();
    fill(0);
    ellipse(gameChar_x + 45, gameChar_y + 16+5, 3, 3);//nose
    ellipse(gameChar_x + 40, gameChar_y + 16+5, 3, 3);
    fill(255, 0, 255);
    ellipse(gameChar_x + 7, gameChar_y + 3+5, 9, 9);//glases
    ellipse(gameChar_x + 15, gameChar_y + 3+5, 9, 9);
    rect(gameChar_x + 1, gameChar_y + 3+5, 3, 2);
    rect(gameChar_x + 19, gameChar_y + 3+5, 3, 2);
    fill(255);
    ellipse(gameChar_x + 7, gameChar_y + 3+5, 6, 6);//eyes
    ellipse(gameChar_x + 15, gameChar_y + 3+5, 6, 6);
    fill(0);
    ellipse(gameChar_x + 7, gameChar_y + 3+5, 3, 3);
    ellipse(gameChar_x + 15, gameChar_y + 3+5, 3, 3);
    //arms
    push();
    translate(gameChar_x + 9, gameChar_y + 33+5);
    rotate(45);
    fill(41, 152, 69);
    rect(0, 0, 3, 30, 5);
    pop();
    


	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 220;
	gameChar_y = 460
	//Add your code here ...
    //Head
    fill(41, 152, 69);
    rect(gameChar_x, gameChar_y + 11, 50, 25, 5);//head
    rect(gameChar_x + 25, gameChar_y + 36, 25, 27, 5, 5, 1, 1);//body light
    fill(50, 110, 60);
    rect(gameChar_x + 25, gameChar_y + 36, 25, 7, 5, 5, 0, 0);// body dark
    fill(215, 110, 40);
    rect(gameChar_x + 25, gameChar_y + 60, 25, 3, 2)// belt
    fill(95, 198, 209);
    rect(gameChar_x + 25, gameChar_y + 62, 25, 12, 2, 2, 3, 3)// hips
    fill(215, 110, 40);
    ellipse(gameChar_x + 32, gameChar_y + 79, 4, 4);//shoes
    ellipse(gameChar_x + 43, gameChar_y + 79, 4, 4);
    fill(95, 198, 209);
    rect(gameChar_x + 30, gameChar_y + 70, 4, 8);//left leg
    rect(gameChar_x + 41, gameChar_y + 70, 4, 8);//right leg
    stroke(255);
    strokeWeight(2);
    line(gameChar_x, gameChar_y + 25, gameChar_x +35, gameChar_y + 25);//mouth
    noStroke();
    fill(0);
    ellipse(gameChar_x + 5, gameChar_y + 21, 3, 3);//nose
    ellipse(gameChar_x + 10, gameChar_y + 21, 3, 3);
    fill(255, 0, 255);
    ellipse(gameChar_x + 34, gameChar_y + 8, 9, 9);//glases
    ellipse(gameChar_x + 42, gameChar_y + 8, 9, 9);
    rect(gameChar_x + 27, gameChar_y + 8, 3, 2);
    rect(gameChar_x + 46, gameChar_y + 8, 3, 2);
    fill(255);
    ellipse(gameChar_x + 34, gameChar_y + 8, 6, 6);//eyes
    ellipse(gameChar_x + 42, gameChar_y + 8, 6, 6);
    fill(0);
    ellipse(gameChar_x + 34, gameChar_y + 8, 3, 3);
    ellipse(gameChar_x + 42, gameChar_y + 8, 3, 3);
    //arms
    angleMode(DEGREES);
    push();
    translate(gameChar_x + 38, gameChar_y + 38);
    rotate(-45);
    fill(41, 152, 69);
    rect(0, 0, 3, 30, 5);
    pop();



}