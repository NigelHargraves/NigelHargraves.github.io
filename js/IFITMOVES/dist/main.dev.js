"use strict";

// Set the canvas element to  variable.
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
var floors = [];
var player;
var moveLeft = false,
    moveRight = false,
    moveUp = false,
    moveDown = false; //backgrounds to variables.

var stoneFloor = new Image();
stoneFloor.src = 'images/IFITMOVES/stoneFloorBackground.png';

function init() {
  floors.push(new Floor(stoneFloor, 0, 0));
  player = new Player(c.width / 2, c.height / 2);
}

function animate() {
  floors.forEach(function (floor) {
    floor.update();
  });
  player.update(); //call next frame.

  animationId = requestAnimationFrame(animate);
}

init();
animate();
window.addEventListener("keydown", function (e) {
  if (e.keyCode == 37 || e.keyCode == 65) {
    moveLeft = true;
  }

  if (e.keyCode == 39 || e.keyCode == 68) {
    moveRight = true;
  }

  if (e.keyCode == 83 || e.keyCode == 40) {
    moveDown = true;
  }

  if (e.keyCode == 87 || e.keyCode == 38) {
    moveUp = true;
  }
});
window.addEventListener("keyup", function (e) {
  if (e.keyCode == 37 || e.keyCode == 65) {
    moveLeft = false;
    player.velocity.x = 0;
  }

  if (e.keyCode == 39 || e.keyCode == 68) {
    moveRight = false;
    player.velocity.x = 0;
  }

  if (e.keyCode == 83 || e.keyCode == 40) {
    moveDown = false;
    player.velocity.y = 0;
  }

  if (e.keyCode == 87 || e.keyCode == 38) {
    moveUp = false;
    player.velocity.y = 0;
  }
});