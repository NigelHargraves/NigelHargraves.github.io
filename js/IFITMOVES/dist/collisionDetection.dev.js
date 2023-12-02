"use strict";

function collisionDetection(object1X, object1Y, object1XRadius, object1YRadius, object2X, object2Y, object2XRadius, object2YRadius) {
  if (object1X - object1XRadius < object2X + object2XRadius && object1X + object1XRadius > object2X - object2XRadius && object1Y - object1YRadius < object2Y + object2YRadius && object1Y + object1YRadius > object2Y - object2YRadius) {
    return true;
  }
}