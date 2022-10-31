"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create player class.
var Player =
/*#__PURE__*/
function () {
  //construct player data.
  function Player(x, y, radius) {
    _classCallCheck(this, Player);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.alpha = 0.2;
    this.glow = false;
  } //draw player.


  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      if (playerSheild) {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(x, this.y, this.r + 4, 0, Math.PI * 2);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      if (moveLeft) {
        ctx.drawImage(faceLeft, x - player.r, player.y - player.r, player.r * 2, this.r * 2);
      } else if (moveRight) {
        ctx.drawImage(faceRight, x - player.r, player.y - player.r, player.r * 2, this.r * 2);
      } else if (moveUp) {
        ctx.drawImage(faceUp, x - player.r, player.y - player.r, player.r * 2, this.r * 2);
      } else if (moveDown) {
        ctx.drawImage(faceDown, x - player.r, player.y - player.r, player.r * 2, this.r * 2);
      } else {
        ctx.drawImage(faceForward, x - player.r, player.y - player.r, player.r * 2, this.r * 2);
      }

      if (moveLeft && moveDown) {
        ctx.drawImage(faceDownLeft, x - player.r, player.y - player.r, player.r * 2, this.r * 2);
      } else if (moveRight && moveDown) {
        ctx.drawImage(faceDownRight, x - player.r, player.y - player.r, player.r * 2, this.r * 2);
      } else if (moveLeft && moveUp) {
        ctx.drawImage(faceUpLeft, x - player.r, player.y - player.r, player.r * 2, this.r * 2);
      } else if (moveRight && moveUp) {
        ctx.drawImage(faceUpRight, x - player.r, player.y - player.r, player.r * 2, this.r * 2);
      }
    }
  }, {
    key: "update",
    value: function update() {
      //update position.
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if (playerSheild) {
        if (this.alpha <= 0.2) {
          this.glow = true;
        }

        if (this.alpha >= 1) {
          this.glow = false;
        }

        if (this.glow) {
          this.alpha += 0.02;
        } else {
          this.alpha -= 0.02;
        }
      }

      if (moveLeft) {
        this.velocity.x -= velocityAmount;
      }

      if (moveRight) {
        this.velocity.x += velocityAmount;
      }

      if (moveUp) {
        this.velocity.y -= velocityAmount;
      }

      if (moveDown) {
        this.velocity.y += velocityAmount;
      } //add gravity.


      this.velocity.y += gravity; //add friction.

      if (controlLevel != 2) {
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
      } //bounce off floor.


      if (this.y + this.r > c.height - 20) {
        this.y = c.height - this.r - 21;
        this.velocity.y = -this.velocity.y;
        eyesSquint = true;
        bounce.currentTime = 0;
        bounce.play();
      } //increase bounce off floor.


      if (this.y + this.r > c.height - 22 && increaseBounce) {
        this.velocity.y += this.velocity.y / 8;
        increaseBounce = false;
      }

      this.draw(); //call draw function to draw in new position.
    }
  }]);

  return Player;
}();