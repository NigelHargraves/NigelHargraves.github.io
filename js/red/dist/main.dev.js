"use strict";

// Set the canvas element to a variable.
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx2 = c2.getContext("2d");
c2.width = window.innerWidth;
var layers = [],
    ledges = [];
var KP = {}; //Keyspressed array

var KR = {}; //Keysreleased array
//declare boolean.

var moveLeft = false,
    moveRight = false,
    jump = false,
    sit = false,
    lookRight = true,
    fall = true,
    playerAlive = true; //declare variable.

var gravity, friction, velocityAmount, groundPosition, playerPosition, x, y, timerStand, timerSlide, timerRun, timerJump, timerDead;
var background1 = new Image();
background1.src = 'images/red/darkwood.png';
var background2 = new Image();
background2.src = 'images/red/grass.jpg';
var ledgeImage = new Image();
ledgeImage.src = 'images/red/ledge.png';
var IdleRight = [];

for (var i = 1; i < 11; i++) {
  IdleRight[i] = new Image();
  IdleRight[i].src = 'images/red/player/IdleRight' + i + '.png';
}

var IdleLeft = [];

for (var _i = 1; _i < 11; _i++) {
  IdleLeft[_i] = new Image();
  IdleLeft[_i].src = 'images/red/player/IdleLeft' + _i + '.png';
}

var RunRight = [];

for (var _i2 = 1; _i2 < 9; _i2++) {
  RunRight[_i2] = new Image();
  RunRight[_i2].src = 'images/red/player/RunRight' + _i2 + '.png';
}

var RunLeft = [];

for (var _i3 = 1; _i3 < 9; _i3++) {
  RunLeft[_i3] = new Image();
  RunLeft[_i3].src = 'images/red/player/RunLeft' + _i3 + '.png';
}

var SlideRight = [];

for (var _i4 = 1; _i4 < 6; _i4++) {
  SlideRight[_i4] = new Image();
  SlideRight[_i4].src = 'images/red/player/SlideRight' + _i4 + '.png';
}

var SlideLeft = [];

for (var _i5 = 1; _i5 < 6; _i5++) {
  SlideLeft[_i5] = new Image();
  SlideLeft[_i5].src = 'images/red/player/SlideLeft' + _i5 + '.png';
}

var JumpRight = [];

for (var _i6 = 1; _i6 < 10; _i6++) {
  JumpRight[_i6] = new Image();
  JumpRight[_i6].src = 'images/red/player/JumpRight' + _i6 + '.png';
}

var JumpLeft = [];

for (var _i7 = 1; _i7 < 10; _i7++) {
  JumpLeft[_i7] = new Image();
  JumpLeft[_i7].src = 'images/red/player/JumpLeft' + _i7 + '.png';
}

var DeadRight = [];

for (var _i8 = 1; _i8 < 11; _i8++) {
  DeadRight[_i8] = new Image();
  DeadRight[_i8].src = 'images/red/player/DeadRight' + _i8 + '.png';
}

var DeadLeft = [];

for (var _i9 = 1; _i9 < 11; _i9++) {
  DeadLeft[_i9] = new Image();
  DeadLeft[_i9].src = 'images/red/player/DeadLeft' + _i9 + '.png';
}

function animate() {
  //call next frame.
  animationId = requestAnimationFrame(animate);
  layers.forEach(function (layer, index) {
    layer.update();
  });
  ledges.forEach(function (ledge, index) {
    ledge.update();
  });
  player.update();
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("variable = " + playerPosition + '   ' + player.velocity.y, 0, 20);
} //adjust canvas on screen resize.


window.addEventListener("resize", function () {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  init();
});
window.addEventListener("keydown", function (e) {
  if (e.keyCode == 37 || e.keyCode == 65) {
    moveLeft = true;
    lookRight = false;
  }

  if (e.keyCode == 39 || e.keyCode == 68) {
    moveRight = true;
    lookRight = true;
  }

  if (e.keyCode == 83 || e.keyCode == 40) {
    sit = true;
  }

  if (e.keyCode == 32) {
    jump = true;
  }
});
window.addEventListener("keyup", function (e) {
  if (e.keyCode == 37 || e.keyCode == 65) {
    moveLeft = false;
  }

  if (e.keyCode == 39 || e.keyCode == 68) {
    moveRight = false;
  }

  if (e.keyCode == 83 || e.keyCode == 40) {
    sit = false;
  }
});
init();
animate();