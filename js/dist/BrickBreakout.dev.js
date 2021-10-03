"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Set the canvas element to a variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var paddle, ball;
var moveLeft = false,
    moveRight = false,
    gameOver = false,
    gameWinner = false,
    ballHitPaddle = false;
var bricks = [];
brickX = 50, score = 0, lives = 3;
var miss = document.getElementById("audio1");
var wallBounce = document.getElementById("audio2");
var brickHit = document.getElementById("audio3");
var slice = document.getElementById("audio4");
var gameWin = document.getElementById("audio5"); //create Paddle class.

var Paddle =
/*#__PURE__*/
function () {
  //construct paddle data.
  function Paddle(x, y, width, height, color) {
    _classCallCheck(this, Paddle);

    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    this.c = color;
  } //draw paddle.


  _createClass(Paddle, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.w, this.h);
      ctx.fillStyle = this.c;
      ctx.fill();
    } //update paddle.

  }, {
    key: "update",
    value: function update() {
      //stop at walls.
      if (this.x + this.w > canvas.width) {
        this.x = canvas.width - this.w;
      }

      if (this.x < 0) {
        this.x = 0;
      }

      this.draw(); //call draw function to draw in new position.
    }
  }]);

  return Paddle;
}(); //create Ball class.


var Ball =
/*#__PURE__*/
function () {
  //construct ball data.
  function Ball(x, y, radius, color) {
    _classCallCheck(this, Ball);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.c = color;
    this.velocity = {
      x: 6,
      y: -6
    };
  } //draw ball.


  _createClass(Ball, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.c;
      ctx.fill();
    } //move ball.

  }, {
    key: "update",
    value: function update() {
      //update position.
      this.x += this.velocity.x;
      this.y += this.velocity.y; //bounce off walls.

      if (this.x + this.r > canvas.width) {
        this.x = canvas.width - this.r;
        this.velocity.x = -this.velocity.x;
        ballHitPaddle = false;
        wallBounce.currentTime = 0;
        wallBounce.play();
      }

      if (this.x - this.r < 0) {
        this.x = 0 + this.r;
        this.velocity.x = -this.velocity.x;
        ballHitPaddle = false;
        wallBounce.currentTime = 0;
        wallBounce.play();
      }

      if (this.y + this.r > canvas.height) {
        miss.play();
        if (lives < 2) gameOver = true;else ball = new Ball(Math.random() * canvas.width, canvas.height - 100, 8, "green");
        lives -= 1;
      }

      if (this.y - this.r < 0) {
        this.y = 0 + this.r;
        this.velocity.y = -this.velocity.y;
        ballHitPaddle = false;
        wallBounce.currentTime = 0;
        wallBounce.play();
      }

      this.draw(); //call draw function to draw in new position.
    }
  }]);

  return Ball;
}(); //create Brick class.


var Brick =
/*#__PURE__*/
function () {
  //construct brick data.
  function Brick(x, y, width, height, color, exists) {
    _classCallCheck(this, Brick);

    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    this.c = color;
    this.exists = exists;
  } //draw brick.


  _createClass(Brick, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.w, this.h);
      ctx.fillStyle = this.c;
      ctx.fill();
    } //update brick.

  }, {
    key: "update",
    value: function update() {
      this.draw(); //call draw function to draw in new position.
    }
  }]);

  return Brick;
}();

function animate() {
  var animateID = requestAnimationFrame(animate); //call next frame.

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "25px Arial";
  ctx.fillStyle = "yellow";
  ctx.textAlign = "right";
  ctx.fillText("Score = " + score, canvas.width - 100, canvas.height - 10);
  ctx.textAlign = "left";
  ctx.fillText(" Lives = " + lives, 0, canvas.height - 10);
  paddle.update();

  if (gameOver) {
    cancelAnimationFrame(animateID);
    ctx.font = "900 100px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
  }

  if (bricks.length < 1) {
    gameWin.play();
    gameWinner = true;
    cancelAnimationFrame(animateID);
    ctx.font = "900 100px Arial";
    ctx.fillStyle = "green";
    ctx.textAlign = "center";
    ctx.fillText("Winner!!!!", canvas.width / 2, canvas.height / 2);
  }

  if (!gameOver) ball.update(); //check ball hits brick.

  bricks.forEach(function (brick, index) {
    if (ball.x - ball.r > brick.x + brick.w || ball.x + ball.r < brick.x || ball.y - ball.r > brick.y + brick.h || ball.y + ball.r < brick.y) {//miss
    } else {
      //hit
      //check if ball hits brick edge.
      ballHitPaddle = false;

      if (ball.y < brick.y + brick.h && ball.y > brick.y) {
        ball.velocity.x = -ball.velocity.x;
      } else {
        ball.velocity.y = -ball.velocity.y;
      }

      brickHit.currentTime = 0;
      brickHit.play();
      bricks.splice(index, 1); //remove brick.

      score += 10;
    }

    brick.update();
  }); //check if ball hits paddle.

  if (ball.x - ball.r > paddle.x && ball.x + ball.r < paddle.x + paddle.w && ball.y + ball.r > paddle.y && !ballHitPaddle) {
    //hit.
    //check if user wants to slice.
    if (!ballHitPaddle) {
      if (moveLeft || moveRight) {
        slice.currentTime = 0;
        slice.play();
        ballHitPaddle = true;

        if (ball.velocity.y > 1) {
          ball.velocity.y -= 1;
        }
      } else {
        wallBounce.currentTime = 0;
        wallBounce.play();
        ballHitPaddle = true;

        if (ball.velocity.y < 6) {
          ball.velocity.y += 1;
        }
      }
    }

    ball.velocity.y = -ball.velocity.y;
  }
}

function init() {
  paddle = new Paddle(canvas.width / 2 - 50, canvas.height - 40, 100, 10, "white");
  paddle.update();
  ball = new Ball(Math.random() * canvas.width, canvas.height - 100, 8, "green");
  ball.update();
  var count = 0;
  var brickColor;

  for (var j = 70; j <= 130; j += 40) {
    for (var i = 0; i < canvas.width; i += canvas.width / 20) {
      if (count % 2 == 0) brickColor = "blue";else brickColor = "red";
      bricks.push(new Brick(i, j, canvas.width / 20, 20, brickColor, true));
      count++;
    }

    count = 0;

    for (var _i = 0; _i < canvas.width; _i += canvas.width / 20) {
      if (count % 2 == 0) brickColor = "yellow";else brickColor = "purple";
      bricks.push(new Brick(_i, j + 20, canvas.width / 20, 20, brickColor, true));
      count++;
    }

    count = 0;
  }
}

function movePaddle() {
  if (moveLeft == true) {
    paddle.x -= 4;
  } else if (moveRight == true) {
    paddle.x += 4;
  }

  paddle.update();
}

function checkKey(e) {
  if (!gameOver || !gameWinner) {
    if (e.keyCode == 37 || e.keyCode == 65) {
      moveLeft = true;
    } else if (e.keyCode == 39 || e.keyCode == 68) {
      moveRight = true;
    }

    if (e.clientx > paddle.x + paddle.w) {
      moveRight = true;
    } else if (e.clientx < paddle.x) {
      moveLeft = true;
    }
  }
}

function stopKey() {
  moveLeft = false;
  moveRight = false;
} //adjust canvas on screen resize.


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});
document.ontouchstart = checkKey;
document.onkeydown = checkKey;
document.onkeyup = stopKey;
document.ontouchend = stopKey;
init();
setTimeout(animate, 2000);
setInterval(movePaddle, 10);