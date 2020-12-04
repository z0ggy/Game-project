function drawCollectable()
    {
        if(collectable.isFound == false)
    {
    
             noStroke();
            fill(255,0,0); //hat of mushroom
            arc(collectable.x_pos, collectable.y_pos, 50 * collectable.size, 50 * collectable.size, radians(180), radians(0), CHORD);
            fill(255); // leg of mushroom
            rect(collectable.x_pos - 5, collectable.y_pos, 15 * collectable.size, 45 * collectable.size);
            stroke(255); // white dots
            strokeWeight(5 * collectable.size);
            point(collectable.x_pos - 10 * collectable.size, collectable.y_pos - 5 * collectable.size);
            point(collectable.x_pos - 1 * collectable.size, collectable.y_pos - 15 * collectable.size);
            point(collectable.x_pos + 10 * collectable.size, collectable.y_pos - 10 * collectable.size);
        
    }
  
}