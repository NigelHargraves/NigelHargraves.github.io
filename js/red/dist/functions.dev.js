"use strict";

function init() {
  gravity = 0.05;
  friction = 0.004;
  velocityAmount = 0.2;
  groundPosition = 800;
  x = c.width / 2;
  y = groundPosition;
  timerSlide = 0.5;
  timerStand = 0.5;
  timerRun = 0.5;
  timerJump = 0.5;
  timerDead = 0.5;
  playerPosition = groundPosition;
  player = new Player(x, y);
  layers.push(new Layer(background1, 0, -c.height, c.height * 2, 0));
  layers.push(new Layer(background2, 0, 0, c2.height, 0));
  ledges.push(new Ledge(ledgeImage, 1500, 760, 600, 1));
  ledges.push(new Ledge(ledgeImage, 700, 660, 550, 2));
  ledges.push(new Ledge(ledgeImage, -50, 560, 500, 3));
  ledges.push(new Ledge(ledgeImage, 550, 420, 100, 4));
  ledges.push(new Ledge(ledgeImage, 900, 320, 400, 5));
  ledges.push(new Ledge(ledgeImage, 0, 180, 800, 6));
}