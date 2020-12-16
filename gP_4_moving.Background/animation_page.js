function userInteraction()
{
    if (keyCode == 37)
	{	
		isLeft = true;
	}
	else if (keyCode == 39)
	{	
		isRight = true;
	}

    //character jumping is hard-coded instead declare variable ("var jumping;")
	if (keyCode == 32 && gameChar_y >= floorPos_y) // stop character to jump higher
	{
		gameChar_y -= 100;
		console.log("JUMP FOREST   ")
	}
    
}

// character stop after key released
function stopUserInteraction()
{
    if (keyCode == 37)
	{	
		isLeft = false;
	}
	else if (keyCode == 39)
	{	
		isRight = false;
	}


}