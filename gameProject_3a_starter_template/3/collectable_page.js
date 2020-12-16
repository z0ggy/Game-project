var collectable;

collectable = {
    x_pos: 400,
    y_pos: 400,
    size: 1.0,
    isFound: false
};

function drawCollectable() {
    if (collectable.isFound == false) {

        noStroke();
        fill(255, 0, 0);
        rect(collectable.x_pos, collectable.y_pos - 40, 40 * collectable.size, 40 * collectable.size);
        rect(collectable.x_pos - 5, collectable.y_pos - 45, 50 * collectable.size, 10 * collectable.size);
        fill(222, 200, 0);
        rect(collectable.x_pos + 18, collectable.y_pos - 45, 4 * collectable.size, 45 * collectable.size);
        rect(collectable.x_pos, collectable.y_pos - 25, 40 * collectable.size, 4 * collectable.size);
    }
    if (dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos + 10) < 30) {
        collectable.isFound = true;
    }

}
