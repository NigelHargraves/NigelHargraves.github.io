function collisionDetection(object1X, object1Y, object1Radius, object2X, object2Y, object2Radius) {
    if (
        object1X - object1Radius < object2X + object2Radius &&
        object1X + object1Radius > object2X - object2Radius &&
        object1Y - object1Radius < object2Y + object2Radius &&
        object1Y + object1Radius > object2Y - object2Radius
    ) {
        return true;
    }
}