"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//sparks class.
var Spark =
/*#__PURE__*/
function () {
  //construct sparks data.
  function Spark(x, y, radius) {
    _classCallCheck(this, Spark);

    this.x = x;
    this.y = y;
    this.velocityX = Math.random() - 0.5;
    this.velocityY = Math.random() - 0.5;
    this.r = radius;
    this.alpha = 1;
  } //draw sparks.


  _createClass(Spark, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.drawImage(starMissile, this.x - this.r * 4, this.y - this.r * 4, this.r * 8, this.r * 8);
      ctx.restore();
    } //update sparks.

  }, {
    key: "update",
    value: function update() {
      this.alpha -= 0.01;
      this.x += -player.velocity.x + this.velocityX;
      this.y += this.velocityY;
      this.draw();
    }
  }]);

  return Spark;
}();