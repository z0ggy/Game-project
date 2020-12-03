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

	// jupming 
	if(isPlummenting == true && gameChar_y >= floorPos_y)
	{
		gameChar_y -= 100; 
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

}