let isLeft;
let isRight;
let isPlummenting;
let isFalling;
let isReset;


function interactionSteatment()
{
   // move to the left
	if(isLeft == true)
	{
		gameChar_x -= 3;
	}

	// move to the right
	if(isRight == true)
	{
		gameChar_x += 3;
	}

	// gravity falling
      	if(gameChar_y < floorPos_y)
	{
		gameChar_y += 2  ;
		isFalling = true;
	}
	else
	{
		isFalling = false;
    }
    
    // plummenting 
    if(isPlummenting == true)
    {
        gameChar_y += 7;
        
    }
//    // reset skech 
//    if (gameChar_y >= height && keyCode == 75)
//        {
//             //isPlummenting = false;
//             resetSkech();
//
//        }
    
//    function keyPressed(){
//        resetSkech();
//    }
    
    if (isPlummenting == true && gameChar_y > height)
        {
            textSize(32);
            fill(255, 0, 0);
            text("Press k to try again", width/2, height/2);
        }
    


    if((gameChar_x >= canyon.x_pos + 80) && (gameChar_x <= canyon.x_pos + 80 + canyon.width) && (gameChar_y >=floorPos_y))  
    {
        isPlummenting = true;
        print("PLUMENTING");
    }
    else
    {
        isPlummenting = false;
    }



}

function resetSkech()
{
    floorPos_y = height * 3/4;// 432
	gameChar_x = width/3;
	gameChar_y = floorPos_y;
    
    canyon.x_pos = 50;
    canyon.width = 50;
    
    mountain.x_pos = 450;
    
    collectable.x_pos = 700;

	isLeft = false;
	isRight = false;
	isPlummeting = false;
	isFalling = false;
	collectable.isFound = false;
}

