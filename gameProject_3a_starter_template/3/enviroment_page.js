let floorPos_y;

var treePos_x;
var treePos_y;

let canyon;

let mountain;
let cloud;

var width;
var height;


	//NB. We are now using the built in variables height and width

	
    
    //NB. we are now using a variable for the floor position
    
    
        //treePos_x = width/2;
        //treePos_y = height/2;
        
        canyon = {
            x_pos: 0, 
            width: 50
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
        triangle(canyon.x_pos + 30, 576,
                 canyon.x_pos + 80, 432,
                 canyon.x_pos + 80, 576);
        
        triangle(canyon.x_pos + 120 + canyon.width, 576,
                 canyon.x_pos + 120 + canyon.width, 432,
                 canyon.x_pos + 170 + canyon.width, 576);
    
        fill(100, 155, 255);
        rect(canyon.x_pos + 80, 432, 40 + canyon.width, 144); //blue canyon gap

    }

    function drawTree()
    {
        treePos_y = height/1.64;
	    fill(155,103,60); //tree trunk
        rect(treePos_x, treePos_y, 20, 82); 
	
        fill(0,255,0); //branches

        ellipse(treePos_x + 10, treePos_y - 30, 80, 80);
        ellipse(treePos_x - 30, treePos_y - 50, 80, 80);
        ellipse(treePos_x + 50, treePos_y - 50, 80, 80);
        ellipse(treePos_x - 20, treePos_y - 90, 80, 80);
        ellipse(treePos_x + 30, treePos_y - 90, 80, 80);
    }

    