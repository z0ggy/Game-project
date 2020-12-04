function userInteraction()
{
    if (keyCode == 37)
	{	
		isLeft = true;
		console.log("key pressed isLeft value = " + isLeft);
	}
	else if (keyCode == 39)
	{	
		isRight = true;
		console.log("key pressed isRight value = " + isRight);
	}

    //character jumping is hard-coded instead declare variable ("var jumping;")
	if (keyCode == 32 && gameChar_y >= floorPos_y) // stop character to jump higher
	{
        gameChar_y -= 100;
		console.log("spacebar pressed");
	}
}

function stopUserInteraction()
{
    if (keyCode == 37)
	{	
		isLeft = false;
		console.log("key released isLeft value = " + isLeft);
	}
	else if (keyCode == 39)
	{	
		isRight = false;
		console.log("key released isRight value = " + isRight);
	}

	if (keyCode == 32)
	{
		console.log("spacebar released");
	}
}