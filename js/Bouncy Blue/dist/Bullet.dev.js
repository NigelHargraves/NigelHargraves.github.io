"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create bullet class.
var Bullet =
/*#__PURE__*/
function () {
  //construct bullet data.
  function Bullet(x, y, velocity, color) {
    _classCallCheck(this, Bullet);

    this.x = x;
    this.y = y;
    this.v = velocity;
    this.color = color;
  } //draw bullet.


  _createClass(Bullet, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x + 10, this.y);
      ctx.lineWidth = 4;
      ctx.strokeStyle = this.color;
      ctx.filter = "blur(2px)";
      ctx.stroke();
      ctx.restore();
    } //update bullet.

  }, {
    key: "update",
    value: function update() {
      this.x += this.v;
      this.x += -player.velocity.x;
      this.draw();
    }
  }]);

  return Bullet;
}();

function forbullet() {
  bullets.forEach(function (bullet, index1) {
    bulletCheck(bullet, index1);

    if (bullet.x <= -c.width || bullet.x >= c.width * 2) {
      bullets.splice(index1, 1);
    }

    bullet.update();
  });
}