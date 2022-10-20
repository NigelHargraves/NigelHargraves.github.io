"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create projectile class.
var Projectile =
/*#__PURE__*/
function () {
  //construct projectile data.
  function Projectile(x, y, radius, velocity, countdown, color) {
    _classCallCheck(this, Projectile);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.v = velocity;
    this.countdown = countdown;
    this.color = color;
  } //draw projectile.


  _createClass(Projectile, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    } //update projectile.

  }, {
    key: "update",
    value: function update() {
      this.countdown -= 0.1;
      this.x += -player.velocity.x + this.v.x;
      this.y += this.v.y;
      this.draw();
    }
  }]);

  return Projectile;
}();