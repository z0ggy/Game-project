var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;

floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	// gameChar_x = width/2;
	// gameChar_y = floorPos_y;

	// treePos_x = width/2;
	// treePos_y = height/2;
    
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
    }