"use strict";

function init() {
  playerAngle = -Math.PI / 2, speed = 10;
  floor = new Floor(stoneFloor);
  player = new Player(c.width / 2, c.height / 2);
  var velocity = {
    x: 0,
    y: 0
  };
  spiders.push(new Spider(spiderWalk1, 300, 300, velocity));
}