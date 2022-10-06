"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create Death class.
var Death =
/*#__PURE__*/
function () {
  //construct Death data.
  function Death(x, y, radius, color, velocity) {
    _classCallCheck(this, Death);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.c = color;
    this.v = velocity;
    this.alpha = 1;
  } //draw Death.


  _createClass(Death, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.c;
      ctx.fill();
      ctx.restore();
    } //update Death.

  }, {
    key: "update",
    value: function update() {
      friction = 0.99;
      this.v.x *= friction;
      this.v.y *= friction;
      this.v.y += gravity * 4;
      this.x += this.v.x;
      this.y += this.v.y;
      this.alpha -= 0.01;
      this.draw();

      if (controlLevel == 2) {
        friction = 0;
      } else {
        friction = 0.002;
      }
    }
  }]);

  return Death;
}();