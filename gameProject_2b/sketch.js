/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;
    
    canyon = {
        x_pos: -100, 
        width: 100
    };
    
    collectable = {
        x_pos: 100, 
        y_pos: 100, 
        size: 50
    };
    
    cloud = {
        x_pos: 200,
        y_pos: 100,
        scale: 0.7
    };
    
    mountain = {
        x_pos: 200,
        y_pos: 400,
        scale: 1.0
    };

    collectable = {
        x_pos: 400,
        y_pos: 400,
        size: 0.7
    };
}

function draw()
{
	background(100, 155, 255); //fill the sky blue
	noStroke();
	fill(0, 155, 0);
    rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
    
//    mountain
    fill(150);
    triangle(mountain.x_pos + 50, mountain.y_pos + 32, 
             mountain.x_pos + 150, mountain.y_pos - 300,
             mountain.x_pos + 250, mountain.y_pos + 32);
    triangle(mountain.x_pos + 150, mountain.y_pos + 32, 
             mountain.x_pos + 150, mountain.y_pos - 250,
             mountain.x_pos + 350, mountain.y_pos + 32);
    
//    Tree
    treePos_y = 350;
	fill(155,103,60); //tree trunk
    rect(treePos_x, treePos_y, 20, 82); 
	
    fill(0,255,0); //branches
    triangle(treePos_x - 40, treePos_y + 10, 
             treePos_x + 10, treePos_y - 50, 
             treePos_x + 60, treePos_y + 10);

    triangle(treePos_x - 30, treePos_y - 20,
             treePos_x + 10, treePos_y - 70,
             treePos_x + 50, treePos_y - 20);
//    canyon
    fill(139,69,19);
    triangle(canyon.x_pos + 130, 576,
             canyon.x_pos + 180, 432,
             canyon.x_pos + 180, 576);
    
    triangle(canyon.x_pos + 220 + canyon.width, 576,
             canyon.x_pos + 220 + canyon.width, 432,
             canyon.x_pos + 270 + canyon.width,576);

    fill(100, 155, 255);
    rect(canyon.x_pos + 180, 432, 40 + canyon.width, 144); //blue canyon gap
    
//    clouds
    fill(255);
	ellipse(cloud.x_pos, 100, 80 * cloud.scale, 60 * cloud.scale);
	ellipse(cloud.x_pos + 35 * cloud.scale, 100, 65 * cloud.scale, 45 * cloud.scale);
    ellipse(cloud.x_pos + 70 * cloud.scale, 100, 40 * cloud.scale, 30 * cloud.scale);
    
    // game character
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

    //    collectable
    noStroke();
    fill(255,0,0); //hat of mushroom
    arc(collectable.x_pos, collectable.y_pos, 50 * collectable.size, 50 * collectable.size, radians(180), radians(0), CHORD);
    fill(255); // leg of mushroom
    rect(collectable.x_pos - 5, collectable.y_pos, 15 * collectable.size, 45 * collectable.size);
    stroke(255); // white dots
    strokeWeight(5 * collectable.size);
    point(collectable.x_pos - 10 * collectable.size, collectable.y_pos - 5 * collectable.size);
    point(collectable.x_pos - 1 * collectable.size, collectable.y_pos - 15 * collectable.size);
    point(collectable.x_pos + 10 * collectable.size, collectable.y_pos - 10 * collectable.size);

}

function mousePressed()
{
gameChar_x = mouseX;
gameChar_y = mouseY;
}