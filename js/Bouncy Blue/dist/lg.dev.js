"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//LevelGain class.
var LevelGain =
/*#__PURE__*/
function () {
  //construct LevelGain data.
  function LevelGain(x, y, velocityX, velocityY, radius) {
    _classCallCheck(this, LevelGain);

    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.r = radius;
  } //draw LevelGain.


  _createClass(LevelGain, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.font = "10px Arial";
      ctx.fillStyle = "black";
      ctx.fillText("L", this.x - 3, this.y + 2);
    } //update LevelGain.

  }, {
    key: "update",
    value: function update() {
      this.x += -player.velocity.x + this.velocityX;
      this.y += this.velocityY;
      this.draw();
    }
  }]);

  return LevelGain;
}();