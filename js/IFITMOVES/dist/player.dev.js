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
    this.r = 10;
    this.aimx = 0;
    this.aimy = 0;
  } //draw player.


  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = "White";
      ctx.fill(); //calculate gun draw point.

      this.aimx = this.r * 2 * Math.cos(playerAngle);
      this.aimy = this.r * 2 * Math.sin(playerAngle); //draw aim line.

      ctx.beginPath();
      ctx.moveTo(this.x + this.aimx, this.y + this.aimy);
      ctx.lineTo(this.x, this.y);
      ctx.strokeStyle = "blue";
      ctx.lineWidth = 2;
      ctx.stroke(); //calculate aim point.

      this.aimx = this.r * Math.cos(playerAngle);
      this.aimy = this.r * Math.sin(playerAngle);
    } //update player.

  }, {
    key: "update",
    value: function update() {
      var accelerationAmount = 0.1; //move aim point.

      if (moveRight) {
        //increase angle by PI/180.
        playerAngle += Math.PI / 180;
      }

      if (moveLeft) {
        //decrease angle by PI/180.
        playerAngle -= Math.PI / 180;
      } //calc angle to aim point


      var angles = Math.atan2(this.aimy - this.y, this.aimx - this.x); //calc velocity x & y to aim point.

      this.velocity.x = Math.cos(angles) * 1;
      this.velocity.y = Math.sin(angles) * 1;

      if (moveForward) {
        if (!run) {
          running.currentTime = 0;
          running.paused;
          walking.play();
        } else {
          walking.currentTime = 0;
          walking.paused;
          running.play();
        }
      } else {
        running.currentTime = 0;
        running.paused;
        walking.currentTime = 0;
        walking.paused;
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