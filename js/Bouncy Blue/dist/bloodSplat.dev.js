"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create bloodSplat class.
var BloodSplat =
/*#__PURE__*/
function () {
  //construct bloodSplat data.
  function BloodSplat(x, y, radius, velocity, color) {
    _classCallCheck(this, BloodSplat);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.v = velocity;
    this.color = color;
  } //draw bloodSplat.


  _createClass(BloodSplat, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    } //update bloodSplat.

  }, {
    key: "update",
    value: function update() {
      gravity = 0.03;
      friction = 0.99;
      this.v.x *= friction;
      this.v.y *= friction;
      this.v.y += gravity * 4;
      this.x += this.v.x;
      this.x += -player.velocity.x;
      this.y += this.v.y;
      this.draw();

      if (controlLevel < 2) {
        gravity = 0.03;
      } else {
        gravity = 0;
      }

      friction = 0.002;
    }
  }]);

  return BloodSplat;
}();