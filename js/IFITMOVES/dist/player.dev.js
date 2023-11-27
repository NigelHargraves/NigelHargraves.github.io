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
    this.r = 20;
  } //draw player.


  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = "White";
      ctx.fill();
    } //update player.

  }, {
    key: "update",
    value: function update() {
      var velocityAmount = 0.1;

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
      }

      if (!run) {
        if (player.velocity.x > 1) {
          player.velocity.x = 1;
        }

        if (player.velocity.x < -1) {
          player.velocity.x = -1;
        }

        if (player.velocity.y > 1) {
          player.velocity.y = 1;
        }

        if (player.velocity.y < -1) {
          player.velocity.y = -1;
        }
      } else {
        if (player.velocity.x > 2) {
          player.velocity.x = 2;
        }

        if (player.velocity.x < -2) {
          player.velocity.x = -2;
        }

        if (player.velocity.y > 2) {
          player.velocity.y = 2;
        }

        if (player.velocity.y < -2) {
          player.velocity.y = -2;
        }
      }

      if (player.velocity.x != 0 || player.velocity.y != 0) {
        if (!run) {
          running.currentTime = 0;
          running.paused;
          walking.play();
        } else {
          walking.currentTime = 0;
          walking.paused;
          running.play();
        }
      }

      if (player.velocity.x == 0 && player.velocity.y == 0) {
        walking.currentTime = 0;
        walking.paused;
        running.currentTime = 0;
        running.paused;
      }

      this.draw();
    }
  }]);

  return Player;
}();