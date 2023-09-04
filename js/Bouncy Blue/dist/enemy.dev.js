"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Enemy class.
var Enemy =
/*#__PURE__*/
function () {
  //construct enemy data.
  function Enemy(x, y, velocityX, velocityY, radius, beeDirection) {
    _classCallCheck(this, Enemy);

    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.r = radius;
    this.beeDirection = beeDirection;
  } //draw enemy.


  _createClass(Enemy, [{
    key: "draw",
    value: function draw() {
      if (this.beeDirection) {
        ctx.drawImage(beeRight, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
      } else {
        ctx.drawImage(beeLeft, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
      }
    } //update enemy.

  }, {
    key: "update",
    value: function update() {
      var changeDirection = Math.random();

      if (changeDirection > 0.99) {
        if (this.beeDirection) {
          this.beeDirection = false;
        } else {
          this.beeDirection = true;
        }
      }

      if (this.beeDirection) {
        this.x += enemyVelocity - 0.4;
      } else {
        this.x -= enemyVelocity - 0.4;
      }

      this.x += -player.velocity.x;
      changeDirection = Math.random();

      if (changeDirection > 0.7) {
        this.y -= this.velocityY;
      } else {
        this.y += this.velocityY;
      }

      this.draw();
    }
  }]);

  return Enemy;
}();