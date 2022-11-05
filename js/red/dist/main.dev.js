"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Set the canvas element to a variable.
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx2 = c2.getContext("2d");
c2.width = window.innerWidth;
var layers = [];
var KP = {}; //Keyspressed array

var KR = {}; //Keysreleased array
//boolean.

var moveLeft = false,
    moveRight = false,
    jump = false,
    sit = false,
    lookRight = true,
    standingStill = true;
var gravity, friction, velocityAmount, groundPosition, x, y, timerStand, timerSlide, timerRun;
var background1 = new Image();
background1.src = 'images/red/darkwood.png';
var background2 = new Image();
background2.src = 'images/red/grass.jpg';
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
} //create layer class.


var Layer =
/*#__PURE__*/
function () {
  //construct layer data.
  function Layer(image, x, y, height, speed) {
    _classCallCheck(this, Layer);

    this.x = x;
    this.y = y;
    this.width = 6000;
    this.height = height;
    this.x2 = this.width;
    this.image = image;
    this.speed = speed;
  } //draw layer.


  _createClass(Layer, [{
    key: "draw",
    value: function draw() {
      if (this.image == background1) {
        ctx.drawImage(this.image, this.x, this.y + (groundPosition - player.y), this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y + (groundPosition - player.y), this.width, this.height);
      } else {
        ctx2.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx2.drawImage(this.image, this.x2, this.y, this.width, this.height);
      }

      c2.style.top = groundPosition + 90 + (groundPosition - player.y) + "px";
    } //update layer.

  }, {
    key: "update",
    value: function update() {
      if (this.image == background1) {
        this.speed = player.velocity.x;
      } else {
        this.speed = player.velocity.x * 1.25;
      }

      if (player.velocity.x >= 0) {
        if (this.x <= -this.width) {
          this.x = this.width;
        }

        if (this.x2 <= -this.width) {
          this.x2 = this.width;
        }
      } else {
        if (this.x >= this.width) {
          this.x = -this.width;
        }

        if (this.x2 >= this.width) {
          this.x2 = -this.width;
        }
      }

      this.x -= this.speed;
      this.x2 -= this.speed;
      this.draw();
    }
  }]);

  return Layer;
}(); //create player class.


var Player =
/*#__PURE__*/
function () {
  //construct player data.
  function Player(x, y) {
    _classCallCheck(this, Player);

    this.x = x;
    this.y = y;
    this.velocity = {
      x: 0,
      y: 0
    };
  } //draw player.


  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      if (!moveLeft && !moveRight && !sit && lookRight && groundPosition <= player.y && this.velocity.x > 0.1) {
        ctx.drawImage(SlideRight[Math.round(timerSlide)], x, y, 100, 100);
        this.velocity.x -= 0.1;
        timerSlide += 0.1;

        if (timerSlide >= 5.4) {
          timerSlide = 0.5;
        }
      }

      if (!moveLeft && !moveRight && !sit && !lookRight && groundPosition <= player.y && this.velocity.x < -0.1) {
        ctx.drawImage(SlideLeft[Math.round(timerSlide)], x, y, 100, 100);
        this.velocity.x += 0.1;
        timerSlide += 0.1;

        if (timerSlide >= 5.4) {
          timerSlide = 0.5;
        }
      }

      if (!moveLeft && !moveRight && !sit && lookRight && groundPosition <= player.y && player.velocity.x <= 0.1) {
        ctx.drawImage(IdleRight[Math.round(timerStand)], x, y, 100, 100);
        timerStand += 0.1;

        if (timerStand >= 10.4) {
          timerStand = 0.5;
        }
      }

      if (!moveLeft && !moveRight && !sit && !lookRight && groundPosition <= player.y && player.velocity.x >= -0.1) {
        ctx.drawImage(IdleLeft[Math.round(timerStand)], x, y, 100, 100);
        timerStand += 0.1;

        if (timerStand >= 10.4) {
          timerStand = 0.5;
        }
      }

      if (moveRight) {
        ctx.drawImage(RunRight[Math.round(timerRun)], x, y, 100, 100);
        timerRun += 0.1;

        if (timerRun >= 8.4) {
          timerRun = 0.5;
        }
      }

      if (moveLeft) {
        ctx.drawImage(RunLeft[Math.round(timerRun)], x, y, 100, 100);
        timerRun += 0.1;

        if (timerRun >= 8.4) {
          timerRun = 0.5;
        }
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (this.velocity.y > 0) {
        this.velocity.y -= friction;
      } else {
        this.velocity.y += friction;
      }

      if (this.velocity.x > 0) {
        this.velocity.x -= friction;
      } else {
        this.velocity.x += friction;
      }

      if (this.y > groundPosition - 1) {
        if (moveLeft) {
          this.velocity.x -= velocityAmount;
        }

        if (moveRight) {
          this.velocity.x += velocityAmount;
        }
      }

      if (jump) {
        if (this.y > groundPosition - 1) {
          this.velocity.y = -3;
        }
      } //update position.


      this.x += this.velocity.x;
      this.y += this.velocity.y; //add gravity.

      if (this.y < groundPosition) {
        this.velocity.y += gravity;
      } else {
        this.velocity.y = 0;
        this.y = groundPosition;
      }

      if (this.velocity.x >= 3) {
        this.velocity.x = 2.9;
      }

      if (this.velocity.x <= -3) {
        this.velocity.x = -2.9;
      }

      this.draw();
    }
  }]);

  return Player;
}();

function init() {
  gravity = 0.03, friction = 0.006, velocityAmount = 0.02, groundPosition = 800, x = c.width / 2, y = groundPosition, timerSlide = 0.5, timerStand = 0.5, timerRun = 0.5;
  player = new Player(x, y);
  layers.push(new Layer(background1, 0, -c.height, c.height * 2, 0));
  layers.push(new Layer(background2, 0, 0, c2.height, 0));
}

function animate() {
  //call next frame.
  animationId = requestAnimationFrame(animate);
  layers.forEach(function (layer, index) {
    layer.update();
  });
  player.update();
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("variable = " + player.velocity.x, 0, 20);
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

  if (e.keyCode == 32) {
    jump = false;
  }
});
init();
animate();