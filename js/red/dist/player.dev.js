"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create player class.
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
      if (jump) {
        if (lookRight) {
          ctx.drawImage(JumpRight[Math.round(timerJump)], x, y, 100, 100);
          timerJump += 0.1;

          if (timerJump >= 9.4) {
            timerJump = 9;
          }

          if (player.y >= playerPosition - 1) {
            timerJump = 0.5;
            jump = false;
          }
        } else {
          ctx.drawImage(JumpLeft[Math.round(timerJump)], x, y, 100, 100);
          timerJump += 0.1;

          if (timerJump >= 9.4) {
            timerJump = 9;
          }

          if (player.y >= playerPosition - 1) {
            timerJump = 0.5;
            jump = false;
          }
        }
      } else {
        if (!moveLeft && !moveRight && !sit && lookRight && playerPosition <= player.y && this.velocity.x > 0.1) {
          ctx.drawImage(SlideRight[Math.round(timerSlide)], x, y, 100, 100);
          this.velocity.x -= 0.1;
          timerSlide += 0.1;

          if (timerSlide >= 5.4) {
            timerSlide = 0.5;
          }
        }

        if (!moveLeft && !moveRight && !sit && !lookRight && playerPosition <= player.y && this.velocity.x < -0.1) {
          ctx.drawImage(SlideLeft[Math.round(timerSlide)], x, y, 100, 100);
          this.velocity.x += 0.1;
          timerSlide += 0.1;

          if (timerSlide >= 5.4) {
            timerSlide = 0.5;
          }
        }

        if (!moveLeft && !moveRight && !sit && lookRight && playerPosition <= player.y && player.velocity.x <= 0.1) {
          ctx.drawImage(IdleRight[Math.round(timerStand)], x, y, 100, 100);
          timerStand += 0.3;

          if (timerStand >= 10.4) {
            timerStand = 0.5;
          }
        }

        if (!moveLeft && !moveRight && !sit && !lookRight && playerPosition <= player.y && player.velocity.x >= -0.1) {
          ctx.drawImage(IdleLeft[Math.round(timerStand)], x, y, 100, 100);
          timerStand += 0.3;

          if (timerStand >= 10.4) {
            timerStand = 0.5;
          }
        }

        if (moveRight) {
          ctx.drawImage(RunRight[Math.round(timerRun)], x, y, 100, 100);
          timerRun += 0.5;

          if (timerRun >= 8.4) {
            timerRun = 0.5;
          }
        }

        if (moveLeft) {
          ctx.drawImage(RunLeft[Math.round(timerRun)], x, y, 100, 100);
          timerRun += 0.5;

          if (timerRun >= 8.4) {
            timerRun = 0.5;
          }
        }

        if (player.velocity.y > 0.1 && lookRight) {
          ctx.drawImage(JumpRight[Math.round(9)], x, y, 100, 100);
        } else if (player.velocity.y > 0.1 && !lookRight) {
          ctx.drawImage(JumpLeft[Math.round(9)], x, y, 100, 100);
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

      if (this.y > playerPosition - 1) {
        if (moveLeft) {
          this.velocity.x -= velocityAmount;
        }

        if (moveRight) {
          this.velocity.x += velocityAmount;
        }
      }

      if (jump) {
        if (this.y > playerPosition - 1) {
          this.velocity.y = -4;
        }
      } //update position.


      this.x += this.velocity.x;
      this.y += this.velocity.y; //add gravity.

      if (this.y < playerPosition) {
        this.velocity.y += gravity;
      } else {
        this.velocity.y = 0;
        this.y = playerPosition;
      }

      if (this.velocity.x >= 4) {
        this.velocity.x = 3.9;
      }

      if (this.velocity.x <= -4) {
        this.velocity.x = -3.9;
      }

      this.draw();
    }
  }]);

  return Player;
}();