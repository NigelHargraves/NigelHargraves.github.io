"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create projectile class.
var Projectile =
/*#__PURE__*/
function () {
  //construct projectile data.
  function Projectile(x, y, radius) {
    _classCallCheck(this, Projectile);

    this.x = x;
    this.y = y;
    this.velocityX = (Math.random() - 0.5) * 10;
    this.velocityY = (Math.random() - 0.5) * 10;
    this.r = radius;
    this.alpha = 1;
  } //draw projectile.


  _createClass(Projectile, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.drawImage(starMissile2, this.x - this.r * 4, this.y - this.r * 4, this.r * 8, this.r * 8);
      ctx.restore();
    } //update projectile.

  }, {
    key: "update",
    value: function update() {
      this.alpha -= 0.005;
      this.x += -player.velocity.x + this.velocityX;
      this.y += this.velocityY;
      this.draw();
    }
  }]);

  return Projectile;
}();