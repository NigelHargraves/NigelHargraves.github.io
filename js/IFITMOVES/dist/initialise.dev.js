"use strict";

function init() {
  playerAngle = 0, speed = 10;
  floor = new Floor(stoneFloor);
  player = new Player(c.width / 2, c.height / 2);
  walls.push(new Wall(500, 502, 20, 1000, false));
  walls.push(new Wall(990, 1010, 1000, 20, true));
}