var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;

var mountain;
var cloud;

var width;
var height;

floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;
    
    //NB. we are now using a variable for the floor position
    
        gameChar_x = width/2;
        gameChar_y = floorPos_y;
    
        treePos_x = width/2;
        treePos_y = height/2;
        
        canyon = {
            x_pos: -100, 
            width: 100
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

    function drawSky()
    {
        background(100,155,255); //fill the sky blue
    }

    function drawGround()
    {
        noStroke();
	    fill(0,155,0);
	    rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
    }

    function drawMountain()
    {
        fill(150);
        noStroke();
        triangle(mountain.x_pos + 50, mountain.y_pos + 32, 
                mountain.x_pos + 150, mountain.y_pos - 300,
                mountain.x_pos + 250, mountain.y_pos + 32);
        triangle(mountain.x_pos + 150, mountain.y_pos + 32, 
                mountain.x_pos + 150, mountain.y_pos - 250,
                mountain.x_pos + 350, mountain.y_pos + 32);
    }

    function drawCanyon()
    {

        fill(139,69,19);
        triangle(canyon.x_pos + 130, 576,
                 canyon.x_pos + 180, 432,
                 canyon.x_pos + 180, 576);
        
        triangle(canyon.x_pos + 220 + canyon.width, 576,
                 canyon.x_pos + 220 + canyon.width, 432,
                 canyon.x_pos + 270 + canyon.width,576);
    
        fill(100, 155, 255);
        rect(canyon.x_pos + 180, 432, 40 + canyon.width, 144); //blue canyon gap

    }

    function drawTree()
    {
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
    }

    