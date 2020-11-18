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
    }
    
    collectable = {
        x_pos: 100, 
        y_pos: 100, 
        size: 50
    }
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
    
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
    
//    collectable
    noStroke();
	fill(255,0,0); //hat of mushroom
    arc(400, 400, 50, 50, radians(180), radians(0), CHORD);
    fill(255); // leg of mushroom
    rect(393,400,15,45);
    stroke(255); // white dots
    strokeWeight(5);
    point(386,392);
    point(400,385);
    point(410,390);


}

function mousePressed()
{


}
