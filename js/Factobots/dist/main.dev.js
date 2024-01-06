"use strict";

// Set the canvas element to  variable.
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
var playArea = 10000;
var cameraCenter = {
  x: c.width / 2,
  y: c.height / 2
}; //arrays.
//global variables.

var ground, mouseX, mouseY;
var cameraSpeed = 10,
    scaleX = 1,
    scaleY = 1;
var burn = {
  x: Math.random() * playArea,
  y: Math.random() * playArea
},
    hardOre = {
  x: Math.random() * playArea,
  y: Math.random() * playArea
},
    ouzeBase = {
  x: Math.random() * playArea,
  y: Math.random() * playArea
},
    life = {
  x: Math.random() * playArea,
  y: Math.random() * playArea
}; //booleans

var moveLeft = false,
    moveRight = false,
    moveUp = false,
    moveDown = false,
    moveFaster = false,
    zoom = false,
    zoomOnce = false;

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.9)";
  ctx.fillRect(0, 0, c.width, c.height);
  ground.update();
  ctx.font = "bold 30px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("zoom = " + zoomOnce, 100, 100); //call next frame.

  animationId = requestAnimationFrame(animate);
}

window.addEventListener("keydown", function (e) {
  if (e.keyCode == 37 || e.keyCode == 65) {
    moveLeft = true;
  }

  if (e.keyCode == 39 || e.keyCode == 68) {
    moveRight = true;
  }

  if (e.keyCode == 87 || e.keyCode == 38) {
    moveUp = true;
  }

  if (e.keyCode == 83 || e.keyCode == 40) {
    moveDown = true;
  }

  if (e.keyCode == 16) {
    moveFaster = true;
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
    moveUp = false;
  }

  if (e.keyCode == 83 || e.keyCode == 40) {
    moveDown = false;
  }

  if (e.keyCode == 16) {
    moveFaster = false;
  }
});
var scrollPosition = 0;
var lastKnownScrollPosition = 0;
window.addEventListener("mousemove", function (e) {
  mouseX = e.x;
  mouseY = e.y;
});
window.addEventListener("wheel", function (e) {});
initialize();
animate();