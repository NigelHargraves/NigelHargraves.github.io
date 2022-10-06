"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//splat class.
var Splat =
/*#__PURE__*/
function () {
  //construct glow data.
  function Splat(x, y, x1, y1, ang, radius) {
    _classCallCheck(this, Splat);

    this.x = x;
    this.y = y;
    this.x1 = x1;
    this.y1 = y1;
    this.ang = ang;
    this.r = radius;
  } //draw splat.


  _createClass(Splat, [{
    key: "draw",
    value: function draw() {
      for (var i = 0; i < 360; i += 20) {
        ctx.beginPath();
        ctx.moveTo(this.x + this.x1, this.y + this.y1);
        this.x1 = (this.r + 10) * Math.cos(this.ang);
        this.y1 = (this.r + 10) * Math.sin(this.ang);
        ctx.lineTo(this.x + this.x1, this.y + this.y1);
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 6;
        ctx.stroke(); //increment angle by PI/180.

        this.ang += Math.PI / 180 * 20;
        this.x1 = this.r * Math.cos(this.ang);
        this.y1 = this.r * Math.sin(this.ang);
      }

      ctx.lineWidth = 1;
    } //update splat.

  }, {
    key: "update",
    value: function update() {
      this.x = x;
      this.y = player.y;
      this.draw();
    }
  }]);

  return Splat;
}();