"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//GuidedMissile class.
var GuidedMissile =
/*#__PURE__*/
function () {
  //construct GuidedMissile data.
  function GuidedMissile(x, y, vX, vY, radius, dumb) {
    _classCallCheck(this, GuidedMissile);

    this.x = x;
    this.y = y;
    this.velocityX = vX;
    this.velocityY = vY;
    this.r = radius;
    this.dumb = dumb;
    this.countdown = 25;
  } //draw GuidedMissile.


  _createClass(GuidedMissile, [{
    key: "draw",
    value: function draw() {
      if (!this.dumb) {
        ctx.globalAlpha = 0.2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r + 2, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = "yellow";
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = "#FDFEFF";
        ctx.fill();
      }
    } //update GuidedMissile.

  }, {
    key: "update",
    value: function update() {
      this.countdown -= 0.02;

      if (!this.dumb) {
        var startPos = this.x;
        var angles = Math.atan2(player.y - this.y, x - startPos);
        this.velocityX = Math.cos(angles) * 5;
        this.velocityY = Math.sin(angles) * 5;
      }

      this.x += -player.velocity.x + this.velocityX;
      this.y += this.velocityY;
      this.draw();
    }
  }]);

  return GuidedMissile;
}();