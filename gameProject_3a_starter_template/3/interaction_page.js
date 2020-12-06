var isLeft;
var isRight;
var isPlummenting;
var isFalling;


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
      	if(gameChar_y < floorPos_y )
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

    if((gameChar_x > canyon.x_pos + 30) && (gameChar_x < canyon.x_pos + 120 + canyon.width) && (gameChar_y >= floorPos_y))  
    {
        isPlummenting = true;
    }
    else
    {
        isPlummenting = false;
    }

    // if( isPlummenting == true && gameChar_y < floorPos_y)
    // {
    //     isPlummenting = false; 
    // }

}

