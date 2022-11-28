"use strict";

// Set the canvas element to a variable.
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx2 = c2.getContext("2d");
c2.width = window.innerWidth;
var layers = [],
    ledges = [],
    nasties = [];
var KP = {}; //Keyspressed array

var KR = {}; //Keysreleased array
//declare boolean.

var moveLeft = false,
    moveRight = false,
    jump = false,
    sit = false,
    lookRight = true,
    fall = true,
    playerAlive = true,
    onLedge = false; //declare variable.

var gravity, friction, velocityAmount, groundPosition, playerPosition, x, y, timerStand, timerSlide, timerRun, timerJump, timerDead;
var background1 = new Image();
background1.src = 'images/red/darkwood.png';
var background2 = new Image();
background2.src = 'images/red/grass.jpg';
var ledgeImage = new Image();
ledgeImage.src = 'images/red/ledge.png';
var greenApple = new Image();
greenApple.src = 'images/red/greenApple.png';
var redApple = new Image();
redApple.src = 'images/red/redApple.png';
var nastyImage = new Image();
nastyImage.src = 'images/red/nasty.png';
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
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("variable = " + playerPosition, 0, 20);

  for (var _i10 = 0, _ledges = ledges; _i10 < _ledges.length; _i10++) {
    var ledge = _ledges[_i10];

    if (lookRight) {
      if (x + 70 >= ledge.x && x + 50 <= ledge.x + ledge.width && player.y + 85 >= ledge.y && player.y <= ledge.y + 20) {
        player.velocity.y = 2;
        break;
      }

      if (x + 70 >= ledge.x && x + 50 <= ledge.x + ledge.width && player.y + 70 <= ledge.y && player.y >= ledge.y - 100) {
        playerPosition = ledge.y - 85;
        onLedge = true;
        break;
      }
    } else {
      if (x + 50 >= ledge.x && x + 30 <= ledge.x + ledge.width && player.y + 85 >= ledge.y && player.y <= ledge.y + 20) {
        player.velocity.y = 2;
        onLedge = true;
        break;
      }

      if (x + 50 >= ledge.x && x + 50 <= ledge.x + ledge.width && player.y + 70 <= ledge.y && player.y >= ledge.y - 100) {
        playerPosition = ledge.y - 85;
        break;
      }
    }

    if (ledge.number == ledges.length) {
      playerPosition = groundPosition;
    }
  }

  ledges.forEach(function (ledge, index) {
    ledge.update();
  });
  var createNasty = Math.random();
  var nastyDirection = Math.random();

  if (createNasty >= 0.999) {
    if (nastyDirection >= 0.5) {
      nasties.push(new Nasty(Math.random() * 3000 + c.width, groundPosition, true));
    } else {
      nasties.push(new Nasty(Math.random() * 3000 + c.width, groundPosition, false));
    }
  }

  createNasty = Math.random();
  nastyDirection = Math.random();

  if (createNasty >= 0.999) {
    if (nastyDirection >= 0.5) {
      nasties.push(new Nasty(Math.random() * -3000 - 100, groundPosition, true));
    } else {
      nasties.push(new Nasty(Math.random() * -3000 - 100, groundPosition, false));
    }
  }

  nasties.forEach(function (nasty, index) {
    nasty.update();
  });
  player.update();
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