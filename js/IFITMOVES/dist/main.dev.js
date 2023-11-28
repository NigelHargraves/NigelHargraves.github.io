"use strict";

// Set the canvas element to  variable.
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
var floors = [];
var player, playerAngle, speed;
var moveLeft = false,
    moveRight = false,
    moveForward = false,
    run = false; //backgrounds to variables.

var stoneFloor = new Image();
stoneFloor.src = 'images/IFITMOVES/stoneFloorBackground.png'; //audio to variables.

var walking = document.getElementById("audio1");
var running = document.getElementById("audio2");

function animate() {
  //CLS.
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, c.width, c.height);
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

  if (e.keyCode == 87 || e.keyCode == 38) {
    moveForward = true;
  }

  if (e.keyCode == 16) {
    run = true;
  }
});
window.addEventListener("keyup", function (e) {
  if (e.keyCode == 37 || e.keyCode == 65) {
    moveLeft = false;
  }

  if (e.keyCode == 39 || e.keyCode == 68) {
    moveRight = false;
  }

  if (e.keyCode == 87 || e.keyCode == 38) {
    moveForward = false;
  }

  if (e.keyCode == 16) {
    run = false;
  }
});