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

	if (keyCode == 32)
	{
		isPlummenting = true;
		console.log("isPlummenting value " + isPlummenting);
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
		isPlummenting = false;
		console.log("isPlummenting value " + isPlummenting);
	}
}