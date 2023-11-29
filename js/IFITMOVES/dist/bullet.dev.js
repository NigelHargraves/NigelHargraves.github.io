"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create bullet class.
var Bullet =
/*#__PURE__*/
function () {
  //construct bullet data.
  function Bullet(x, y, velocity) {
    _classCallCheck(this, Bullet);

    this.x = x;
    this.y = y;
    this.velocity = velocity;
  } //draw bullet.


  _createClass(Bullet, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = "black";
      ctx.fill();
    } //draw bullet.

  }, {
    key: "update",
    value: function update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.draw();
    }
  }]);

  return Bullet;
}();