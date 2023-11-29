"use strict";

function init() {
  playerAngle = -Math.PI / 2, speed = 10;
  floors.push(new Floor(stoneFloor));
  player = new Player(c.width / 2, c.height / 2);
}