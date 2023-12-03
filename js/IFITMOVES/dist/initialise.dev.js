"use strict";

function init() {
  playerAngle = 0, speed = 10;
  floor = new Floor(stoneFloor);
  player = new Player(c.width / 2, c.height / 2);

  for (var i = 1; i <= 30; i++) {
    spiders.push(new Spider(spiderWalk0, spiderWalkShadow0, Math.random() * (floor.width - 200) + 100, Math.random() * (floor.height - 200) + 100));
  }

  walls.push(new Wall(500, 500));
}