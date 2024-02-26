function collideDetection(object1X, object1Y, object1XRadiusWidth, object1YRadiusHeight, object2X, object2Y, object2XRadiusWidth, object2YRadiusHeight) {
    if (
        object1X - object1XRadiusWidth < object2X + object2XRadiusWidth &&
        object1X + object1XRadiusWidth > object2X - object2XRadiusWidth &&
        object1Y - object1YRadiusHeight < object2Y + object2YRadiusHeight &&
        object1Y + object1YRadiusHeight > object2Y - object2YRadiusHeight
    ) {
        return true;
    } else {
        return false;
    }
}