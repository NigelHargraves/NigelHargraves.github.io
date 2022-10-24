"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//bonusPoints class.
var BonusPoints =
/*#__PURE__*/
function () {
  //construct bonusPoints data.
  function BonusPoints(x, y, velocityX, velocityY, radius) {
    _classCallCheck(this, BonusPoints);

    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.r = radius;
  } //draw bonusPoints.


  _createClass(BonusPoints, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.font = "10px Arial";
      ctx.fillStyle = "yellow";
      ctx.fillText("p", this.x - 3, this.y + 2);
    } //update bonusPoints.

  }, {
    key: "update",
    value: function update() {
      this.x += -player.velocity.x;
      this.y += this.velocityY;
      this.draw();
    }
  }]);

  return BonusPoints;
}();